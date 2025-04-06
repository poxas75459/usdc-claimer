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
    "5mYLFqhgUgGMnpCyiFrLGcbLWKze9aLrGaCnwar9ArqmdCKidALNXGpSwkDygiEkAJFSJ5k9zhg6DaF5zg154Hob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBjM84PfaMbNAQ9SunrJLJUHsBuL3R4LtgnYequF3ZrscpHFGCtwHsY3EZjSdMojZUhuGTfjJGcGMjsAfzfXz9o",
  "key1": "63vN5TJKXFBPBGPJqxw4LLLfEcxLz9QgtZexwq6vFNQ2MbewFdHijiqPkoCxcTCRVnPxH7yZtA5X9tSQt8QnxAYb",
  "key2": "8pJfUQHtkyJTYbpSioCmU7k1XRYkyjCZA7ydyLtkDo6ioMBNfKA13huCy9pLvTv3A83c8vttVAvaHCM6bSkmUfi",
  "key3": "5CCn9kFRiWtyvN3jDwAJpphiXvjKFZ2xxi6YcSsYBvy9wBknHfzLm4kXQtk8ACLDq4uj9wXWfzkG9QHroDi8sWm4",
  "key4": "4AYgbx3BeWwBSBQM8cHu9pYTVut3E28zkaDxzjsKtn6UbVHNMwWLiDodCDj1aD898dTrQBYAYwixuDX9J8BnfeXG",
  "key5": "5qqGfpiaAZZfWR5eFVbfv2gGTtYbbV2zyy6sgGFc5frrRJrGpEq7gru1BZf9K8treUvuBk5WarDYSMhnzDZgupTs",
  "key6": "2jEpSpC7y11uZoDySJ7xaB6j7Wf8aXB6doKgXnz73w8Zqy7dVWhQRj5gNgZWkZSkAu1EarEqnRH4nLCHTjEZtjAU",
  "key7": "3SHaStK3ZxyBopNQFkLhnETfkTnd8FjE8hyxRYQs54noUeNxMQnqyLKEspKgpDuH2LFc28F8BveMoFtyRXQcrc1W",
  "key8": "5c1iEGMuZTrKT1cBpcqYGLfUPggpazvJ8X1JKCwjfySx6gtytrpusdC2iNuxuLSQnait4Qgav5qNuNQj1oBQJSDY",
  "key9": "2KLRyChF2ViQLuzTKYuYrytA876usX1F4x89cwuA3jebNe8dZ9qc99DNVB1D8cbV4K6LRwrAyh5SPcs4KHbFNYmE",
  "key10": "KmpkCe4vALjtuEguzEKzFCPULUh7ZKnxbuxiCfycizeWEEuc5ZvZwzGRuioxcW6f8HTk4PKbMEwUvWjkULpscFd",
  "key11": "LovhfeE43zeodw4L15yhAmxQGvHu23ocRrevS76U6tmEmAvghavUZLUZDrGuEDCfoKi2Kg6G3yG3HyDGEFugUve",
  "key12": "32aL9KQJZnSfy6EcUHzikLLf1Vf6tW3AxXVGc1WAV2BUr7AX1iS7GBVWHn9QCqaoMNgt15QNWtbuJCVmfsq11ME9",
  "key13": "4yBJeBu5SpVFDC7RV7waanJLXVnt7SfVnr2aev1LkcE3jVDaAeiv2XNkeHh2JDWD3WU57afTosrne1jjZDRHFFyp",
  "key14": "3qio9fpju8GuAqwjbN5KawwSHBJPkaJFzxVtssBNfCCToHw11VahQpwn1vQWmV6JNpS8G9yWC2Di12XBdsTT1y8R",
  "key15": "4VTFis6RXM8jeb9ArsW7cK3ZkNDW8zU9QQ9qP7bh95xfmjLEMCNM2T2Uqo5bswVnABX27whUzB51E427qaQfVeGV",
  "key16": "Noxpqi5wYpY1fGWLmzDgtT9hGqaoRuvvzE5jFa38sT7MpbfKkBGRLCXmTqEGRyW9bFQd4Neu6ikLAffsFBHopht",
  "key17": "3HvtJiib9sMNXWuwkd7PCGfJqXd8qvHNJjdGJdeUyvJ4ugcYww3YSVzzznhxj198vP6XuHZ2Xej8SsmrAv9N2U84",
  "key18": "2bJ9Aqbbdxtd9SnhU3UAYbpDhU1kwJSrRQ5JD4guqVyWRipeFLYgUbwYWSGpirz7eY8ESXH4vQhcWZVmTixfHAhg",
  "key19": "5ghDJ9E2WcW7maz39VA2fzCngxhCER1tjcv82trjAFht5dp1h3RQeCdysgpekVsW28Kq1iZfiL4Ya6N5NkciQFen",
  "key20": "3KCWWu4T7C7ErLsqZzvUY7d3UNqmRhG15mCxcGNA6GfhxcrmSx6MBh8QRSGsaGiFbvkcFxo9zuWftxASicE7wtTg",
  "key21": "5LMAZ9nV31BsdD4c3zP4ipT6zi1NvDQ7qHbKQVF2qiGg2VpYJmeM61fpFa7g8WH5YzyZqDZcwZ7WsZUCuoU42vVN",
  "key22": "5vJ2h8gBPfsb1QiagDpeViYprguNpyrLqsAN7XUWoia5ybcnNtwSA4XXChuPXfqLvoZWWE6hMAizq2Ybk9TWxdRU",
  "key23": "hGLkLnnWAh5x6fo7odJn6MHFnDsX5DWXyLjH83Lt747zrsKYYby3mnskEfTaxabb1WxtvTjc3SG8LoJbNDNpriD",
  "key24": "2oawcvtzp7tVABHpM7GnFKQJQU1j5K4qHxTGiZWfAaS4vCDLY4DqqMPvXh1B1qi6fbTMMQ5E5bB2S7j4B5PmTkPY",
  "key25": "4U9M2PTVA22vcChFDPq5pzbcGbLLH2KJRQcrAPjwu1k28mYY9mfL9GifuN8bcQ7DMxgq2obBuYWHTbtzJnuwg8fS"
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
