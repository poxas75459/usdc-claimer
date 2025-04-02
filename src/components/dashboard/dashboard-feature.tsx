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
    "4HFtVoBSWMm8KToKd9M1cxABMQKNGAWvUNWP7iqdQfGwDiZZuUp7LEYV7uxz3FtPfvFAdXpQPVDFtuqhKL28QjSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edJ3UyPnQan8RYvPyWThHh6SdtAf4zaA6QTm958GmVYmREPwyegTr9Bq1i8eERLxsduoXNgTYGZuZTXADSvy1oy",
  "key1": "3Ghu7VevAx6TSz3q8mg2WBvhfWxumH6gNcyMnRxnYSkQysr1UKbcBvN5ZsyLK6Jd1cEwrxGjGNmwZb5zWxBYhCV1",
  "key2": "3aSnuT1avcyb5gcPBrEPcpyRNyBtnyjQGno5tsYZnEbnd2XqtBmxZWhUvDVtWzHUAvjzk5ioT3F2BXAgurAicVCT",
  "key3": "3LmWn3B3hH8rfuxTZvwnaYvGqiKa3bNVXWTR4qwbbKzd7hZs92crPJ3hhcgUZn1dWdcLXGur2qgjXVkY9UN33Yva",
  "key4": "3rK3nrm7enzhKUmsvgejwZuqHgtbNaj3trLbHmw1uEWSakwzFd4JEhimweoiTCRY6zyWCpqGDVesRpZvo3K7D1Hk",
  "key5": "3QZq4QyE2LvZettMXGaMs5PMZGsrc9kGt9QZrz3qABe2FWp26iRkZve4yHmtGGz3VbfFcEzmCVxLVyr2oCp9FE7f",
  "key6": "5DsAetpajZ7EW9WnZhoZ7Mn6xHweo8yRU5oeptWbFgEcHBDqHm9JLdFCqAZruku5eUJfhLFrCjesrGvJtTHZ69oD",
  "key7": "25T9yis1mBgBju9AVdY3U6YkHPLNPrUBMhi5uzSdss8G8kG3CjHtAtixYngorh6jwcqRxMo3Ldn5MtHSMyPc8mCd",
  "key8": "38VGVc2WkX9FRctaSiZxhfUGxX2bE1HTXCLxmp8PZ7a9TJUqw8vLWKPG2vDnQ6gNeF61qUxoaZdP4wiFkwhtoNFZ",
  "key9": "3HvowPDy3dRvbHQGSKkvUM5vpNRwTqhgztj5xjxC3GuKy6iJUrKn7ot6jjUFEzJ8WpDFK6sJi7rYPcUTAPZRMp5x",
  "key10": "3M4YHMQpNfc7X6b2S6cGWZN3Mc9tSEaXomj9cWmjzVMXeXJHbg8GTAbhnrqh4144fkespC3g5Am1ho6APkAWZ8xt",
  "key11": "3cUiVpZPe5FmVH1py59oCrF29RsWNnP1Z44gzExXKqYYXhTNtLYQ33UgqaGh37koH32kRKQUBPwGBkbSz5Uf7jeE",
  "key12": "Be7nEMB6UQTv6EaoS3reg9VZ5EAwCGsNP5pAZGc5aR8W8s9pmpatEwUzpVTAEWdkLWBoJDrWsk4tAYXbDS6PuSa",
  "key13": "5BqxKL2eYbGFSfngGW9ofWQTYKuzn5owmrP1zSyKRjBRVsbNYWpaNZtXNTJWYREYaLWLmsVWq9U1mggtyBK2dHrV",
  "key14": "2is19fTk1enxsG6kvn3dawZtH3rsieMqWGaNVyFagboHiPr2jG9tCwWPa3M1oU2TyPHZsE64ZqiduxJY7njz7Gyr",
  "key15": "31hxYMSDoVubD9SCTeEVZJtgu7aHJGZxkSzHNKKFt3uSJ4tbjiKBxZ2d9cQfaz5aWNds1jaX9BcqpbSKnLnWhyJe",
  "key16": "4YSSPGKipNwYBKxvYELJUPiua17gAQuxtHhMxyS9NNCR5NxzBzZdZt2iJkJXC3XP58Ym2FUKudDPjPTc75jUWkxU",
  "key17": "2QqiP3AfozFeG9ztccCJeAnatF3DVE9x1GfcndbVYW5p6G5bEFa4radv4jVYreqFjPT91kSKeVMrHWBm2gktu6qq",
  "key18": "2KthLW3VfqHQBCUtnSfHECoBtUKP3uSAHAdkacNB76xawBS8aa4ejeCWnJfZNXSxrF2uPTkHQhivnqk7sWPNe7uU",
  "key19": "4aS5cVzoZsKzUdSLyTvSbGRp3Egnskxu5Lyp2uEBLdGVCM1Jau5rSzgM253SiCxNbNJpMJWTNuUvjjC5dLf3B4kX",
  "key20": "3kWsnfjFiCQm9gbYmryMhKDwTcwjpaXqstfBa59iqn6hsdAh5sLMJYP7goRM6TiztFaxJZVNdsC9bDZsrxei6SGj",
  "key21": "24aC4DNUVyhzqpQ9qzPjnWoAPmaa3iHDoKBQyd4g5NjniNjw9uRft3htgELnqpfj2e8GtMhKwUXA8M3sD3x9sG2Z",
  "key22": "5rUnowTWFzYjKoK3TjxQqXZn6bcXFD6s7Ne4toxrLJC82ED6dxuwn7bWdqa7zYsRh4tpnWTF3Y41t9MLA4v39NmK",
  "key23": "61j9bNfsHes52ZJJRgjMMnCho2VokWs751tQMgz84GbeaFosj8mpXayPFhxYwxh7EyTY5wJaaEeaZGsytMMp4PyJ",
  "key24": "L6mjiUVZ2sXbQvZo2FxHCs7eq92PzmDzxotDbL3PpujHFP2dVaHbPx2hwPrJPcakV1D8vevaBCRUZRf2Do62agt",
  "key25": "5gNm8JaJ1YZi6rZqZNpw1MaHMqSSUbd1dssun7DHW4SLvMMjC4vsaRmCrrbxgKpHa87xmohu9nQHMY3ewuBCRrj2",
  "key26": "ot1iYnbyuh9ebPrpHuwkQ1HwmnccieZYWDJQeYjyxLx9Y7VRKFUgmgaHCgaJNxeS3UbAc8VGwigxLURu5TzAj2S"
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
