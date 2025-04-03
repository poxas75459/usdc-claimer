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
    "u1gyZNbagiFmb3uF72mA2EtZLtCV1Rbje3dQGy8C6fd6DcNRT5u4LhqrK4DQ9pjzsBfE3XJU5PnWKqQWJjTwEzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7dy5gPQWrwQEAdjMpBmAea9HczqKLW6cbisSEM7Mkq43aqsCsYkMYRH9zJLY2pv92BxFG4YkTQDVS4gvMppUX6",
  "key1": "2k5mqogMNGWxN9T83GfrQY4T4kxyC2cn74r7QR7iLrC1LK7XSBEgMY7R96PuCUanViyLTNVPJAQnMfwEq4n9w4oi",
  "key2": "22LfTgeNc2VkLDiDUfxsF8VnhJTzdWoi23W3au168XSTsEmxvtrYV4hgeJvkb6LVThaEr3nuo7h41DmCqp465GAV",
  "key3": "3TSEXzGYsQrk3TMFAw3SeYj1dv9NAdu4wAzJJkVo6ziEoyZ3kf2odST17mdXmerjspHnuBVZ7SmPYB3hXDDXJPjS",
  "key4": "3obeRw7PHWq7TuWLkuFn7TnnZrT6Y44J9pu45JDgAE4Lk6AaPgNruYm7RSvHodbU3CsX3UgQNCGNm36kkxnnFPWj",
  "key5": "5RQQ8MMxqLAjkVq3T5eR9Uc7ctWH5uacrR3DMb8xKo9iQsCyxj7aCsiSQEtpbfF6LjnmpxSKpofVsrX3SYPW3XEj",
  "key6": "2FtP2mohc7i7xoB3HuE8kCHM5KcxncdVHx5yurdbRcaKyGjvhvG3AQZK4PE4jCToP8mrw5msDuz2hM8iNoWZP8fB",
  "key7": "33URTsnHLQLidPxQ8iCZKrDSHCMAotVzpdnceP633kuHtFnQ3eX2BnNgmdYqp7od5zwCPjd2VwFs6X4iGGXxAsan",
  "key8": "5t3mYBdDYit93TL6bEWWJBwAdcYH42Yg5PuHqcu62gSPy85bo7ejjqH9SoaKAmusPXvYdLkTVSkoKT7x5HKx1Acz",
  "key9": "5rPjrrFzkc8oUwFJvk84kCJGbwCA291hZNWmosPyR4XL9upz6GokmgfPZagQNqf1Rp6EGpoYTzgnGFCheAx9heW2",
  "key10": "45Mka4cvBsbNEwxqKu9GfHQQko6bT9bsfjTavxDQF1wqrYdBmUo5V84STuLL9jgWD6FbiZXLCyFsx9wv8BBKdyy5",
  "key11": "22QZs8J7vUmYXvDVGRwGMDr6pX2BMRBctUm8jMdpJc59BZnu9muZvNYrpcRhn3wM7o596ubyUUvEd168XqBjJ9Re",
  "key12": "6vR9Fpsr2WMgWJMbLhTiKc8MArD3X42ssdeCnEmuUfHyp3GqwGTdpKuoQACJkSqY8vrnDTha2UZZnhxNCrhkYXP",
  "key13": "2RcBRJX3fd1iZR4ckTjXf1tqreuMyaYrrhrPrVWsjLLsGmWDRDctjYUNK3Yh8zDxQ7BAXqyAAA6ZkpmtV2F6Wrb",
  "key14": "26rhgpXPJqcyU9nSxbbEsT59noNytvYeyC6BtxrqymdLRsAZ2wJi5qq3oV7QofJbWW8tuvjSTLkaKwtLvAuBRdJG",
  "key15": "5ra7WTSJpeWfNjC4wY1UcDCnTZt3fKc141BUqEFhTJnYhzAJHaNvRBZJbM3ScnSFScnRvcKnYA3cetWYASb87BBX",
  "key16": "5aBjMAkEdKikj6GEsSz2RKYTTnTF9yz4NboD7bAuWQRg8ZGAQrXGsjW3STW5EUtz4rwxT6aNxoWMjiBFf1D72ZTS",
  "key17": "4Ne5amvAwRirSe3rT87f5qrkpeUFtEKsoLY4wSx1nFjzMKou6FesfB3xgZ8b3KHHSDWppGY4C1vawYhLtqD2yATZ",
  "key18": "o39Q85woje9GdN7LJfYUztunyCVHPdM2Svt99taM26hHTgX83B9H88HEn5HVhRWZAaLyD9t6h7a3r4XkYjVTWCU",
  "key19": "2NX9hTTCURozTqbjQ8M8spM2T6NpPH1qcvzyifBX33YSqBjLmnAqaTdHRZn4LAF9B8jfwsLVT7Lf9hRAgBCPvofa",
  "key20": "4Fax2HFK1kexrsn3YGHZw7m7iTQtyERwV36dph6d2wjdVfYrwmvpwCLNdYSAa9MsE9RgD9rPJS21dXR8kp82HuwZ",
  "key21": "4WMFEPT3QqUn1dVi2yKXoZxNfNaq9SKpekhVkZTBbij83NmzghkS3PzPPPacTTcPNhYJoT9nKUGqxf2YEmKvpZ3X",
  "key22": "626bYNrpJmdH2WB4KUJJZD9H2AQqiTWBz9hXm1oGvuPGPnv5c7HJp6BMGa4ZsB9iVgRtXNgGPykC5cRwT89xeWR3",
  "key23": "41MbV5ggmJupDEkLAvtg774fxW5hQ7nMzpV42XUUkU8zVtHPnqJGnuuuCMTiBw3EKX8CtS39SttM8BeV57yR1ekV",
  "key24": "5ZmpR6LC4wHirmu5Xkuu9ytCCWSGsMjsivv6T98SnNSfqopkwjFzRBAvRGLHJ4cYr67d8zh2WoPWfxu4aGmP2arb",
  "key25": "5SAd7LxJyZKRLLX9ZBekWyy9fVfMcPW1hsJkXje4Zx3zxD7t5J2fpB4yUtKVMAuB14sa4A7CrYqjVedyNRW3FG9o",
  "key26": "4585SQ5Ed8j4NzNbtsVHbcTdr1DiaWQnxE66zqnqsHqcuiPkfep5t9sKQw6jnkPdHjLjCEgAqUH7DFn8g7ikgEF4",
  "key27": "4NjHwtczTEWjY32w48ooCmGHKix55gnr5aCnzW8NTU6AZYYqoCH348Ucj8NtbUeoqzML4iBJ4UJbhaHW6uFvFt2T",
  "key28": "5KWWDibavQgUEVYdCQVTN5ZAucwVQ974TkDMwwhcY58GPVck44pi8FqgQ5izHPoFbhPPEUwfDxbvKY4raJnpwqZy",
  "key29": "3makbDxHM9SE76LprqaBiQWmT4p8viBQSHNpHnFLzEkW8g4QwFbuUWm9M99WCcLHaaBRJiTT2ccV2L9ns8F2xjgc",
  "key30": "5ifa1ffTnNFSLfsLWpTxyK6xD32Vg2iXvWiqrN4tjFzfF7qKKQnLNCHmoawSg7xmzSEvJxhBRioqbUA7oXAzyKgE",
  "key31": "UMV3CsFknEuEZ3iMe16RHcEPm3ggTAvv8v6kWjwJUu7oNCUhQrLbExRDtKbiTrShruyeUjscnrLeaxCTSLwX9YX"
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
