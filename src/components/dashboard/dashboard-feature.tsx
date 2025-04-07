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
    "2Npg24TPiw3yav69riqXL6sbDxJkj76M5GDufR9WsA8BkY4SLgE5CLRS6MjvKzQpU7xpx7rKykNy9HRYDHmthMf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LRzE4GZro4Dxe6EbzN8ygBY49LRn6aWtfTF68J94w3Ut9seMcAzTQA7xm8joTyKCy5Eo6Z6ptH3gc4RRZ3WBWzX",
  "key1": "2FqscVs5kZdiTvgxqiri8uorYcDSz7yE36QyxU3SahkM59EhHhJznv47AeKVzMAXrRmCPfJhDin57kPveNFH6kSn",
  "key2": "4YjWpE4ddoohLCaFiKBofvVkZ6NYYsgVCeQ6E9LkGoPAB9hB5L2nB4Ddx1boFj7saEXJ189jGXRmpsJoeABqMb3L",
  "key3": "4qe6wNw3a1Z9tDhMDbfBVkCoxMisyh6bdh5huPK2ix28hzya8oP417rx5HqJPCFx4PN4J3q4G9EgbgWiS8QfdYVa",
  "key4": "546Dkayo3B5RZjzEbxDjs9HSFGMSpQAXkgt36VcdZjvbcHgeJCBrNbL4PoNNoLnQeTnzqCYSdMseTWa7KD3wg2gx",
  "key5": "2X6iNP18fGVSVYcg57gJMmKyx5hJEKBMuFh6tKERwjRzLcnBmNYeN9urgqAAxnEn6HBRd1GoWWYFyj2VaHvMD4Gq",
  "key6": "3Jm4VD9u1hCTSj4wXgECxszbXbB4X7k4bGimLwJxahsZghCdNVX183XcoMXFYY6n2hCHFhS9PU9wa7GAYARdWbsg",
  "key7": "3RbaFRadk1G6Xazbez1RxooU7USESixmtzLjDm4j9advKj3TxC1JgHeUubg2NTJLFHxa5wGvok3bFH44ZQBa9Vof",
  "key8": "4kxZZvZU5x7kFUN8PwSvw2RHThKCA4U2D7uEm5DH5cMaw9LHuERqgDEdX65sFWEMqzyk398DgnEpm5G5QsBG8BgB",
  "key9": "FArVRXJQuAJcjotkzgYo9LGFFwhG8xDc5AxSp37FDbtNsYij6sLW7DSsRjvTgv7HvAvaCjMMihj2WeDbThc1Tpt",
  "key10": "ad8sqqjdhB5X3Eday5exMurhjpxZwgNzQaWLSzrtVBauRkzUQ7PEHhMRX9npSD7KjefHyHgDk3sydSzGCL6tNfs",
  "key11": "2jJQhonpt1NNCUzYhYcDTDgn61CxN8PgfoRQVBV789yEXfHnN2PLwuQdWsMdLXZrJnTqZNpHdfJtR7dPxWpotvzX",
  "key12": "5mkJbXjMHoNmEnSkhoJYT6SinaE5kVLkefGwobbqq5VX2sRxA1aPmqmsiRBpp4TWCT8EpBY5VG5D999cFKz8SNmi",
  "key13": "3FmfoSYqw6L9iNs2bk8dWJBwJV4v7BoXtXGqGfNyCrNm8yABV9rNrjXNet69ysheV3rfJhNVLNWEVwmWaxt6pF1P",
  "key14": "2Yn7PrAxbRboNNUxivD7k8iL1ezXoVUmncBy3dJdKcwrNtU8BU8GFJbgW9WKjS6beZFouYAEjN71xtouNAVgET8Y",
  "key15": "2QYJJ8mCmrLprQ9zdK9qEW83REap24yTt5JqAp6jxEp5DxYrhLzmZ18QN5F4tVbbpoZmsBNEnmuMa93HWDqaYfwx",
  "key16": "4Ejp1vJuH2p4Mf4r4956kU9efvcguGv6kmaL5erLvGrTcmvaeXBEhTiYQ7A6SBkBxKFZzizvSu5vbCWWNLfoUefd",
  "key17": "ZgGAB646GQcWpBtnShWoX7uTMmEJwSVBojxWfTjYa4QyeiKYgD4tFtgA2QDK1MWUckyzExSyiRngTmBtm9oYKYp",
  "key18": "3N9xFGVBmDhw69i7XyzqyrpbFVypb2NdYft1HxzvY9hepXv2eyvysNkvV75zH4BsAhT36bjgh8CuFjZsYrwNiVBX",
  "key19": "257kr9uGZUc3CKa5TLg8LJjnJwv8pKHt4R5XaGEPGcriud39jNpub1UXyFBn2D9uNYZLLtKfCT8TevLMyC8oz6Z2",
  "key20": "24KGcEdf12thsLaLuAFFwHDsufpg1PND9sJxzmp9Wxs4p8AafyzGvxghnyg8p8pgL6RvJWMzhEr3zyyFv2FtUiJM",
  "key21": "4ErgFZyH4NNrRVToqbySbcZM325gkq6ZfPYZF21BiV5mjvzyjDDxZgMXhytaLy4PJttysW3eMKTTd9ADCHWZLqAW",
  "key22": "3rJdhWdnJn4FrsNuSiyRcmf1ZMLzbxPLANVALci31xm3e8r1vB4S6sxYWPmwvxhtAaiHE3Y9HU5t39XqirEj8f5p",
  "key23": "3jxK9R4dQupZ5VUfJ2EYqJS2HRCGojUqsXEUUAaML7zhXnaMVUKbeZruYzbE5u6cwPWAPQezEwN7GH3otVusXnGJ",
  "key24": "eFrbhhEUXYKv1cuoWfc5K7q14QqxBxcszLxA8pikjcDYFE4UWasbrRu2hUTieT7E5pD8fs1MZQiUaa4xsaZhaF2",
  "key25": "46ceACiF8nc7w4AxN2iZSSZuaQ7TZphX35mFhfVSDPAnHfP75GAchwAaKb1AqMKNHUg2N4toGKJfELhiiwVzbWJH",
  "key26": "4SjApScULRDMwTDfZwZRuMnhuXRzpaDmWar3VGmuMjzpsdqTqNnRkcBMHVPC2cJLXawJJNQWVoP4xDtaqvNpuBkR",
  "key27": "4GqYwmA71tt7CduYvdm3x92B4Rx7aHq8y6JdDUMGiXTrT26S3YQkUUWeCNBuDpPgh5HzA2fAvaLik7H39E1pXNQD",
  "key28": "5Dop319aVYWDYfr8MRhsfCyEGBf4tdg1sV2JHEnco9eeHf64odC3WL6rHhwK2ou4GpvCJNWJnqo9SKoRBu7Vam2N",
  "key29": "5PqiQxvtzqf9YNDh6rCGupNZq3Ku5KzQjnL2ZMjwhkVSX5tjqAipxNiLRb5JfbErbg1NyLRRhrD8t4HraUTqu4cQ",
  "key30": "Xn5J2K4Dud9wQTa5d3mmDxs2NJwv1TMHsXJwKq5QcXB23f77XBspbca4jPF1Q7FyVBYCqRSRd4hHzaL22BmXC39"
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
