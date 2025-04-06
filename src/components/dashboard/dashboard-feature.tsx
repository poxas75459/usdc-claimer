/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2dQp62ZAPpdmJQxDH9LbFx3KcBDYvZFACMtMRcCuRQxVkg4AqJmH429MDYwjq8fD8qzQ6twgAR2epXLwUMfLxwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62L6Vw3XLHED61fVTVoeiH5RVx1PdfrYJpQP4p4JwoGSx1iFCqQrdfGpCtPYbGqyWgPrQ4fyxYmWJwjnCFnt54UY",
  "key1": "4v1MTuBPAX8BddKt5eigDywSEwfjSvMVAjmNuYnU4BA16WZk5Srgc3TZQz3ewnpHTWNqLuX4Vkbxnru7RyRKVPki",
  "key2": "5nvLVrBjs6CqzzA6FuXQBfYjgG73C8sPz6bMVfCLpkpWawXuZzAd6AT98E3knGRNaBWbKc94rGCKX6LV64xTeAqj",
  "key3": "2rjVAKpD9URUCtoyBBqvYKYVogvzSaZ5PTdqTSi9dCdLBdTT7ZCzjy9toXndvM6HZ1oEeuXWE2g2M9YZkEJSwKwL",
  "key4": "4WjsBUJA9ZohnqQhUvxDg87HAL5T9Y5s7Si8Vn69A1aPiPhajRZkQ1bppFRXAU27tW3PngkKRVfmBx1KSdPW6gfF",
  "key5": "4fbZiGGz6PjxewKSRAxWqepXDrFHQ22GoXWMryy3udbKe1aHicQeRLX3eaSfVtMDwX4LMuiiaQJdspfUv3W7ue4D",
  "key6": "3Hu1iBwkPTHnXoi56V8bAXiTb6c7cBEYw8BjMWTrboJSmx2zWDEqbTaWZQVzFWhDWJu3qKRyQsWCgLZnQfMzyfqj",
  "key7": "61rjPeuGkPiQ53HLGZ9TNg3MpipnGdzQaAXhP7eMe12TtjLtPyjw5zDNJ5VG5tH7k6Drw4spCsdqDTHTAjQMjs5F",
  "key8": "3k3Vtow6Rf3mqMtdJXm4NkgpFjTZZzUDJo2T6v4RdnKCXnfxK71QKDXk19vAKqpeXMZccVqcMmiGfr5gPpcn7bCv",
  "key9": "59qoLq2qit386sbAg857BZfUrD92gurXDvZRycsB8RucsbEED2e87cQLEW7FU2TETV6zroEmb5AsMA8dKpznFEEA",
  "key10": "bwh6bbLTrWT8tP45UMHjkwarkzaUY8xnQHjZGRpVSUopkoddrtfTsHzq1dQgW9n4PLwwaYcED3xp4qbf972wS8z",
  "key11": "qpuVEywSxiwm1to2tqowkzy8q1zxfqQaUCganhzVX3T2qf5FXYf99FdgmPkPG5Y865TNWojGBdcD8fQxtHfi6Wt",
  "key12": "2BKGMfCJupxnKbeYFNFGmjDJ23zDn2sSCCNLqyubQtXR3uGrynQu6stRvLAUmC3cpVZ7bsLxWDXDSQRDuJvqQ2t2",
  "key13": "sjc3h7eGGoMFV9YTRc2UDobkYD97PHDuthRiyYAsLiGEbekSpb35tme3ysz1uAaADUK9wmza7LeTbmdqPwwBG8y",
  "key14": "3mm4TpbSDxf5r64AwmRiW388cYV7qiicFfHJop5AvyjzpfMU367Tu8jWnUvBFRWpYRzdcNK1ZkfD197FLSpRAMZn",
  "key15": "3AnVUVETj7MccxmfM42sV7ziCmioAVFN6c34Ty7TVWh1FXKSA94U5iNwKoNLJGVna5NdUgFr87nhL6XZH9SA4pED",
  "key16": "2kv88i9keN1Z2BcCk2A9wWDvZwhoGab3EF1yq2sNKfg74zy97GT7776pPTk2zygFRKTqwFfLXadE44kFREqpWsFu",
  "key17": "3ASc3vx3s9Uzsmx4hq1vnEjgWSs8SgYRJVidKuAsTe2gEszKeBFsD4xvstgW8G6hX62bHje8UzHLDxmSxcDFWpyA",
  "key18": "sU6bcVSXD4jcc6pGsfbmX9abBBWC3QcXDoy59Nh6ZsYUi12fYVzuHF8a17Qn9rxHNqE3MCKiX2eDy26wYweD8UW",
  "key19": "4xby9xyHnocZyd8L3r3fbFV9rgosnt9puNP4tu7dsNR9qHvgN6xuL2fcTnaTZ2oodHk8s65h7eaVHitSyHKpC9VR",
  "key20": "2vQRDSqWaMcCpqXRMNaR1YdDUPeJXak5mGEtk1yb6hmYiqgoPdiHgRHmrNGni2J2xPKFmYTizr1Bw7gbFTqiiVGy",
  "key21": "5N3zL16yMYpfuzC5sKcPUUEBcZxkqUM3HMrYpQ8rpFauCYpFwxynQ1tuPvsSjt6h81DoUyeR5vuhM46aGNB2P8mm",
  "key22": "329jdg2jNwsw4aLuF9cPZALxsmmYE75zsxQ8MXtsEnWtvWtLJuiFoKWb3rUmnwpJNfYER6nex8uaGB5kZps6QHri",
  "key23": "39HepqbcN2H3kfe8Csi4QdCqAKqZbMFizwks2atxByhKPCwgFfa764ph9FEmkM7PTaP2FKU9tfU9FpGU3oWc64ht",
  "key24": "2gzSsJMcAPLBTd2RaTSXXBZoqAkK1Wemi6G9sT6a2wF3Lis92SNsaANomr21MF5jmfzu8WdrXB6eWTCyFPjy4KPt",
  "key25": "5gRPSkFdJn8XFy7whR4QoobDuAf6HE1ERbBhn9v2Am6UzU1wn2fF4ptAedLPqt6aCZKHRmEUZwvVeSxfGXhkqzyh",
  "key26": "5yta2qv4ErKQUDVisgsmVNcKQ1SeN1sTykct35wckv7vws3S3BF1zXwPsoVoZ5FGpAJMqPM66teX815zynNRHTkq",
  "key27": "48gjNspzCGcbd8ip1Tn9EyDt1usE1zpiU6tWdTwxuC3zc5vAdsDtrcshUEGtB6vnQK3ZPthngedGz6DjgtkHPbcc",
  "key28": "3s8qxKnswbNVCLnyojFbQaUCcJkGg5XmW8epJLnSCy5uYRaSmuNhErmXvEN16FZB1vEJhsX76NL8aQ64mVFcAp21",
  "key29": "5fuUqzPuWB3qgQSbELG751dTCxqHnnzoR7SyLvpQTznuUiHWPgNY3v1TnH9J38dHFAS4ufSjZpyir8noWERcpMkz",
  "key30": "51tucU5TMGMW6q9RDkhE7Pre1Wj86TzPqRUucDfHzsRLYyMCn2aiqcK4ipbmkEheCpBuTn6ZYEj8RoRPUvhzEjSG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
