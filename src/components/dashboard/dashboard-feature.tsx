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
    "3KGVbqttBnPKtNP2NZXkf7tJ1uUHSDrxkmgRC7BjxVguLyNLxP9TWEXBQi4EsRPPpxARgdutBReWhShWXK14Ff1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2CdqSS4zL4xTk1F57D5BJ5dCXs9DhUYnxrXrdaFGufQfeizdEDBtb8rpCES9HrHTAHe5udq6mLzDqm1vJU2WB3",
  "key1": "4wSb9fkXtm5b7AAgowTuonuby9XqwFm9E9uJa5UW4X3sFV1rpdKt7W3yjYDGi5kUPysVBRyZVKfeQqANhryfyJxj",
  "key2": "3pMFkHjYTkgKn6rxsjJoRrxdj8noqMuSZTvjr3YrWfpFsyLTFtEPxp92jSwQEswhjKftFQu4nopwAPwYydmNBLbC",
  "key3": "5nxNTj59vQm1ziKug185fmUJHQubE9svWmyYnxGRHPoiu5r3yrhH2EgRtCuSmMunyH956paLdYr8t3ktxz7W7SfW",
  "key4": "4XWv2P73KEdGyGmGvLy6M61MEnoyFanmNBZbhmRRLFAHKZdR8FZFgwprkJVpPHtHgYmPWa1MFFFxszE6Js3CLKJb",
  "key5": "2zeiSQj7njPchFE1DeKLFWWKcPFNRiFkZckqVy786ShSwTAVr8m1VprDbCftwEkgmno35zGh9ggKriWBakKfsA2e",
  "key6": "5xwUXAvceTcf6x6XxfviDm5vtbw1qaXSHsR4GCQkwSb91dCyHwqh3AL6t4KVmsD5Qsn9xjY4yqTiHhpAuaDH23Ji",
  "key7": "52AjsAMAhhUYZkexGddNzkFemW8GS2xh9QrY5NRVUANiywjzZwosBcTTqyepNrjpNyVhEi8FK2rGqiwQvn5L3eev",
  "key8": "4qJRWqZBvBVQSGt6tHTycp4EV19P8mAj189Qihaor8mKBJJkuSdXuT9BeYiTbPreYQhyJyNjR2oNdZytD5sTFvsL",
  "key9": "4TSqmBNijPayAG8dE7eKWB6FDRp51GaeyJ8b2tqS5wtdxwY69p6majwrQkku42626kiyvQGYQmJmoNHxGpCim8XR",
  "key10": "5szksimVBWtfygWWMQtzP8FTSFHLgCAKeyDB6uJJWarHykvXXJHqnJNWdK6M4nR1CCBhB1FCW6LtqsfNQyvpM5mP",
  "key11": "5hfj33YTcWHztSxN3BsBWazzJSmaUao8FBMoq2QmuCF5usdZ2D67L3DqtMvtMv81Z3Fzwsgg7yJi9s7tnbDWSLup",
  "key12": "r2jVvHnHCUtEBgPQ3bZ34JSu7EcFCwyEPhFagwnpNL4nH51samfP1Ekar8eYchQAgosd11GJKUAS1LUQ9kbjPKm",
  "key13": "5ReeB91X3ZYun8KFoXQS6qKgidv4ue18p1yYrNm2h9k5z49yRimkN1Ld7Vpmwwv87fkfy3QdTT8AydGkq21mrVZJ",
  "key14": "2e32uY74YnkrEuEfUCQ7DKs4ZVqMXufdVi8HCeNUpZNMwUHSRWCvsApBKXcNqWka158BBBwvuwqVtZV2VskM2tJ4",
  "key15": "3BKQ2rRMwGU4xmUUXoNeGsKxUkcyTxFPGvXJddVDbbQhH8ssKUtgYn2Bx5TVmYqtBguC7pge3WUkBT22kykbiSrf",
  "key16": "vrLxxY3TPhcdqQXEqK9iM2toMMjPNmgSHB226TWhjfmevEBnRrH5E96H1rX3cg8u6cHxHCqPJF2htfm19AHS4hy",
  "key17": "wZrWDjT1mBFSnrABsHsFd5PDBvb3iyM7kPbK6DpegYQp1qthtbZmxkd6NnzAb72okM68WtJZqMmsMJYTrnrmmpp",
  "key18": "61JYjbNwgdGwD1onTheaFrRFzMHAeMUgSf6PumDs3PAsEmpip7WNbp1ZGgPZDsXF4b55t2S4EXREkaCYdXD6DuVd",
  "key19": "52aV81RDjRGayysBfvmNuvwgpijmjft7oUzRRShEzeUTwybCRbxwctsEee2R3dZzFKrf6WLQE2b7rqYw1udUCFTi",
  "key20": "2zTmnRkrXt2UjYVQj8rJDs62hJrzmP6So6g1sxKw2jJw8Xd8d5K1Fj7yRYq6VGxMiXfoH2WEfZmg4UJfGSJmpEqm",
  "key21": "5QxZkpQPFCBwYTHG9WPTWPBGDaRrEbchuN9YfsHCBzDt442TJSGAmpGAkWzuBAvoPSyFSfjVx3kSycrH8NeZAUUn",
  "key22": "aVhKKgWEi2TZdcLvrQruSHFqAjPjvWcWW9hxPAbnF2QUeRXcKSLd5hUvi7rVxTzozAXyagbfyREhUWj4qmGTej9",
  "key23": "FCaJ5NzUiHUpqPZk1v2dEg6NcVGoB6ksgVPALFDudaevSwcMhTewnBzFHTkNUWGY8keWrZTjTLZq5vTYG66DBrF",
  "key24": "2Ac7TmuE8HL8F461aQKkJyKof9woEufAs5TfbymSdq4aeBR3CTPLvACHqhdrdgkuzJvhRuVMXbEiK96LaB3jUQrT",
  "key25": "3PbsURt1roJswzi35vmUnq1Dcgxd81UqTdR18NzGNVRpxCfnyyZEuLTDzi51Y7mdkAA2WuRwaPEjXhiESQdB5ytf",
  "key26": "e6km4hmuWtkz72bM1x3Uxhk6spGaGwhkm3esAkeodMq9vaF3JcR7qPTHhM5S1P7umr2AsYczgmzmohRNhw2NU9t",
  "key27": "4Zt2qRMQftvLSavXkShDyQRZKgZcm6rDNRknoujEMcovd8M1NSafNwUccfS1tU5FSk1KnvXJRjM4s8jLioBw6A9A",
  "key28": "4SLPVogoXW2z6RKCa9vbDwk6tTy9GCUFPASxhyeD2osEU9zyf3dMMMCqN6gbzgd6TQDbCbH4Ycgepi7XpvKAr5Ch",
  "key29": "3TV33J2gMqFf2bJ1jZwd6DEZa44Syzf6u7AjTZYeZNTR3KxRMwfn6a8BFytCr5xCLXxrNXgVupkTpBUa3B6eFvef",
  "key30": "5pVXyu5fPD61x9LhrsN7sAtzKEJMDQRcub8BaBPi6LfefyP7KLJmGzv3ZVWtQsKGczGcxB3wGQZkuMUM5rWDHdAB",
  "key31": "4QQFmVaTv1wfk1LMsg9x9mAeYTw3DgL4yojVEYmQaSJEYC8Efco9oYPNgeF2HHA8P5YCRyjsLGrqkEkoyDHtuZhR",
  "key32": "5rmGgkTF1vZMojXSgr2fJngHWrjA2Agqv8vaSe9srFtgMzzFyPrYh6Mw1UwhS8KYWj2hL6iFLjBTzTcMqy6VP2b4"
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
