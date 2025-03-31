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
    "2WKpkW3JeAkZuverXCuvd8fCLPgskredPxxMnMc4iJbhJmxmkzwsHGC5Z4fhNBESBmDXy9D8XJzEcZ4BqmofzSWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LjWJZNLqhDC5WpkNUWx6hv7aX1fwQHKN6Fg24aTgS73Sw7dKUDrMM8BCFijv8QK8bRrwKaeRWFVYhDbf2wGFnyp",
  "key1": "4KjwyX1RVYx3wQJDYtptmaZ5P54YaPwycbACSidLV6UuiFJ5JeF7K6i5Nda2WjqGbFeQt9ALGZv2wev5AxJVL3bs",
  "key2": "57D9HP7ERMGiVasDYUhVFPfECH6H2BrjKtfrz4mYhSbHESnd8Cqgev44dGQ6Y32QDYGmWw1ie445iiKR52JZW6hd",
  "key3": "3kyagFzbcG9XYDvgJiaTwknqRPFq3igqBDFEE7qQcwUgg2mm6z1srnpCbkzXsLdEFdxxKppGrT8bpgKoueBnAWZM",
  "key4": "4nNDtrKPiypw9uaToh4b2Fh89KVoTZGTuwKZMXhSerKGB49BqvGix4ttKE5yRztZvztCYqR539FtbvwfQkehHtf7",
  "key5": "5c4fHXiD6Rpozqpu9QoH3iLonnentArzNdxLHNAC1ZiYsR2pA94kPjdrbzgqxaz5QKqBDTtzKjgquZsrbaXNogz5",
  "key6": "8MAvSbUAQshugvAZspecX8XVpF2L8uy1M6t9aj6NSnoS8LaCTzNYkhndBh8PwB4GZF6yLB3kh9D3VazDESPKZqB",
  "key7": "67pxqxHpo8FKEFh5eMUcLtKxLrfMw8M7yhPSZPpD99CFXnGUtJCKSuuBSsG9iq7qYU5YcQcLMBngyEm8mTFCTbya",
  "key8": "3QWF5p7n1Ha54BrdVhKVLzqYfXNbnaqRdhUnmcJaD84rAZJSKzQqUEj3vpB4ZEB49z9bFNJTYGfvuYfpzZJru5XM",
  "key9": "36jSLZ5BqoYvXc5dmqDXQ5Ls144y27pxRkCe6XUHfsrvcXciVBpZaSfLCfW6Qd9LAu18YoL5PNriyzFWVuT3qqHB",
  "key10": "3CQPRHTZHQ1WzZC7xsLkaVXou8KrEnqjGdQXZGcz6JbegM34sQwzyM7JybtWfPbxupgbXiAKhC2RBX3N6RvApQ4M",
  "key11": "5tk1aHsv6Xt9w3xmXf2CU9rKaYtQv5yDVEPHgfLJCn863LzXFUoux1FuLRUQPqsxeoGcG1Mqu1iKdwVHjgDQ8Dg1",
  "key12": "4jryesfWXyX6EkWZWLay1h9mrBMNS8WWejaoYLmkAw6ZpzS9izdH23N5AR88j5JpVPFN685kFkG3Nrfpzve6kA7s",
  "key13": "2oHgixnTowpvnDVWjphuhvdoLRo5ez68UgihmWury6aUGST8bqSzUV4mfW5kXSytGYfKSgqL3MuzgNN9UU8XYEmD",
  "key14": "2LSoiYZDpH7KAReJXCBni7s8eyJXZFnDsTAtgy99KNfXun85PFBWhDYExZVcgMZYXKRh3uMZ6jeT5ote1RryDf6V",
  "key15": "4wLWY1t2RVFhayCUCu49am8fVrdmWiT7GJz7k8WQpPFNfeYzJCSAfZS55ZrDwCJx7pn37pRErYDpWDfmCPz72p3m",
  "key16": "2XberHdJoAGwCkkBhNjHJtfuxRp8HubyjkmpRgnu3ndA6WV3V4U7rf5Wo9961F9RFTRHTZhFasjG1ZxiJ3AFRK6F",
  "key17": "sYRr8XstVE8sS8TWFhEvAyi4CZaZgP2Y5mbwiJVh4GoWTXKzxkVDUqKSouQ4pW1aQRx74e9VSRnEE1ZVxKAcnRt",
  "key18": "2vwDs4s4Z3XK6gct6GhkVRDvNWzo3XMWfyNarioR9pXDAi5SQQESc8MAb8pZejHez2z8enec2j9vz8bQPjY8XBUg",
  "key19": "4H9a1KTr3EHAbwgLnYNwhSP7s5qPf2cz85ahUkYM5gfD1jwdS3BfoeGKGuQavYBbAJr7CoZVfZYkypuJz8fdQMPV",
  "key20": "2nydedKCrSEzUnpUZHhNMLAEYKjA1nxDdpd5hAUxWs8ZPmTb5fHATTmLDFAPGhT4omNREv7TxA2Fxk91VgBsDgd4",
  "key21": "3Y1tc5uvniEEt9x3qjfE5ZhnveYQei3BupfWmtcjQm5sQBVc4qTood9dpv1NJdMkCUdnT6iSTojm9s1rmDCvqe93",
  "key22": "58LonttWaD7MqsbQPC2ZmW6aPQGtS4FRQEXLFSEinvk14yjUTpRtErmNardr8oMHVMAU3n7FxL9gG4tZGUqsNxZY",
  "key23": "a2CbxPGUokk7t7cpCQpkfcWHLUmQs1PpUvSyXib7vTnarbboQ2KtAFMopPF7vyhVeyN3v7YtcBksoojrbU6MJF8",
  "key24": "M6fs5vmFBVVJJ7NXYXVjzeXrs6bgZ5kfR71SMY3RPvLzmbsogecBtLPMg4RWnWnYLTDoriCHQhoXPQhiZV5RFwp",
  "key25": "2AFAhL8RqrawDbpQPmLjg9PNWuNiLGMHefema8XpQXsVbd27GmyvYkFzbJdnnWSg3nRETrVDrF4Ax83aU8bDZ5tQ",
  "key26": "2BwhoCGbHGHfmEfAQmTL8V7r1kJKMMhfcq9YCciRTLtZhHVhhEuWPa86aGSytANNr4rBF6PP7fnmX389aj2JpAS3"
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
