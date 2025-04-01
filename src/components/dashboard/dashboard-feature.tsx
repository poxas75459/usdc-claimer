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
    "4yCyaAqq6s2dfCPNEdT1TqRPqNL8gyzUzETZ2eoB2gGVQgoMuVBKeJ8TgV5TAP86z9Jh2wqDxFbVKxndE8dkzuD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UPh7k4gk5hDSwiBUcx5pN2MWoF3QFWLPokwV3yxAAkpjWjw6qXKFA8cJAxYfY82V4QmbfAtiouUe6N1b5xw3pU",
  "key1": "8xErTovSMcdvsmre47REPG6GyE9Q24D9786sTLn7nSZ2fTgy6Tc45Qscx6F43pS5kWV72rYQ5vYKw2dDz3xDWQA",
  "key2": "4VKNH8n3SNPgpF2BufChAN3uH4UEjuzFUunZJPnmJf6Hja8ZM54CbHdLH8fSpdfLCfZNbVr1nSqvVeS8cWgJoRAj",
  "key3": "3jrFrcRDRdxgnc6DXgcAPoCGUModDBJmi4jQ9vfbAcoqMZGfqphtEC862uGi5yq487jGrXrUHBFxohjC62J6ycMx",
  "key4": "5eonQtVev2H4kqzQLszrUVjYDBFeBB6quWFy3fGDEmYBMY8LWC8pnRSoxw8ckWjEUYkVJ3RuTcLrV3G6rSBvPEvX",
  "key5": "2vtfo5NmRchV9zmvkuYG44BRjiqUwu9ni6BfLYLRRVidiKwZBuyeGjdBEK4D4ANS7ck7n1QQ717qP8Qj2TfrFSEH",
  "key6": "SfUxCNNPfBVGHQRaERn4ar25oCy2uyqpuLAXKBrRa5NUpLbrw8ECcg3sqU3oQqBYYCetPSgeujC48dqDchXJ2gL",
  "key7": "Vg5Wq7gDUgft2vzVTMtK2wKBGbjeEoKsqG5hxpXBEYQ1ZZ3cPfpvDjPbeCLnjH8StsyRZYNgURGNd9JtCKwjsk2",
  "key8": "3tb51gqNjUomu1G5kUoAFbmqxLGk9p29jKU9sRPebm3fhfezUwiVwFg4uNvW9GrFdKE6zW6gzpQYJ5iEE4eTLQej",
  "key9": "4MVR9wnzWit1wwAbn7YMp9DUdE9NMyK5kqJg4t6JFq22CmGzPC1yk8WiABdU2APV8auok2xwTV3EbfW5qM81FQFs",
  "key10": "55WoZWr9KaMmwJj77j18PFNX1SYPr7Lxm3nqQCWdCRL25T8cV1yBQa7qoh4bhdUH3zjpNpYd434ExVYsJbh514Z",
  "key11": "4hLyqRPiBzYA4kU6fV3nViB8QQGQxkovBScMXm6ADDfFQgTbdSGmajTzkNWFk3BsBJrE8Jms1TpYhoZ22nJJ6Fmu",
  "key12": "MCWFm4gefjXAiQmuDfcLYLCSDEQcmPkea9NfJe4MtceTVPQi54jf9m6Dmp3dWYxSCmf2xRUttJVSxUs9zDFYXre",
  "key13": "3Gm8VBhwLocFRAV8qtY9hYxH8xipFMqHd6ZeKWQBWMhZ1rj2jc2R7Lzm7eQaXtEWCntDmFKbJvetSuXFGAUxb4p8",
  "key14": "3Qgzz753x2YJQZhvozaZvVd5emdo17zUi3WkgJ9G6TCa4rawwv7xyWrf5m3b6EVukYemA1ioFSDWu9uGNh42sd5w",
  "key15": "3Y62JsmWG3mbKADP3UXgAjNvk2Z5K3AwS9GymDVYrWjjfjeWWhuTTzrbgpuJ3EN7x4NtSfP8qLXovbNumFT9Etda",
  "key16": "4hkFT5miDwdKaGz77TK5rtEod7QKswPbJqpUdeyFk5e9qoGoQLFMtv9roDVdYxtWGFtgaShXqpLrVVHqna3WDCs7",
  "key17": "4mTUzAfajR48zRD6M4nGHGasR2biabVmi21zLXiYB9Qkswm1uStHAgWirSx7cH537EGUfi4xHgwdh9Q6cgecWRp4",
  "key18": "1JBFbia11Ksm9wThsxKwbooPodunHd1YLfJYhHoKxjEfcNKQY3ZouqZ3fcSeTCGQGC1jMTSJ9cUmTNkRuD6yhVW",
  "key19": "E8aXnBZymiH9GrLLAYDaDMQiT1wzGr6jgpV8dLjUaDksSiU5v7e6vdMDqzup1NT5KJqCPWCTzY8vL4Wuo8kfe1D",
  "key20": "rJALWRpE6xdCLxtBLUgNvSEwMSwrofCWK4DLPtSTg9T3zLji15BMWsS3gjb2crZbnRaffAL4ThBb8BiHn8XaeLu",
  "key21": "2uwBvsje7ULDJqPCVfhHpt6vaJWFDycoSeLqQm7TNGGQcLHzWX1KDjrWmWBL37TXTfaV1sDEsgLmiWhEmrHLphFx",
  "key22": "3dMwu9yatwWmwjGpxX4XyjmYd5Z4FhygtaS5tMigF4oA3iFFLart9Shc8BiVmtQEfjLkYsowFAFETuiVgD2GAf8v",
  "key23": "5HYCo6SDiboEtFWarqvYnKtGhb3KHwmi2VQXYgEkvyQDve5g2jZ9KpVY2C9U9nubaSkSVbEV786Y8GLtJGTeomMr",
  "key24": "32ZK1WGwVxoy8QMpHa2WTVbZJfgSHwiHbs5VGX4QqfUt3m4vZznMGzB2zzrWsbZrvEfJA154ufhrUXmX8MTh6Lwf",
  "key25": "3EKvrwpeMKm7PZnbUW7xU9THjddYjuN6fp3LDnvo4v3U71be1ePkpubmKezUyLPzNDcm9iymzXD3pSPYaqynK9Sw",
  "key26": "2YM15Qe7DgqcTBrfRKauWmc3uRmme6H9HDsUAnGe2hvUsgnMCUMjezVQeEPXts85S3kH2yi7iGzaCEQSRbrg1Jvx",
  "key27": "4nEX8SieJSRYDjCnR3YbbVNA5enLq8EQBRfJDiXLpLZuMz8coGDpB5MHohZ3YUr4npEyjt7oZWXdyi8UAvcykv8S",
  "key28": "3GzojmpvpgndwbqnvULSgn3Fy1FKL78xfnanMKDP99xvCgjWQn12TSmE7c8oGTwe745P8qZTXXs1GrtqF5gFNfee",
  "key29": "2QcLDkbDxP59G31R35D9RZ3GRUzXz27Dj5nypK6MrNp1FgxHhCBJUwjknHAAkYXYAC8pDMNBCXggyx8rQGUwmfWM"
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
