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
    "vLp3eubRmqQYQfhi7JyLdNb2YmidwN58QoxMy5RUYLc55UvcUJk4kfY8fqTqosrzHmcL484wRxp2yTGzBrBMNBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Jm7XpCFb8n4rmmzeRoczQ5g4ze8t28y7xwu3QMuHNbeUHMsP9pz1K5M7mc6GbWdoajgXecHgN88ghHwxftaFkx",
  "key1": "4VgSnvPFX6zQJ3WJokt6KKo1MsaPy9mb6DbJ27Wsi5Lw5nWWVnvizek8tnrDGrydXG2WUhTZEjwzWA7HoiBjjgfF",
  "key2": "3nVqc8Bsv5Mh6jgaXvCbtkbgGPinqCLCYDeETwf16udD6h62Q97zWxfPEvcdE2u3dMJBMKohxoEwUww7fgnVh3mS",
  "key3": "3QwWApDjhaUoTbCvcNc4p8bnPmDqhgxsZFNXs43EX6DW39J6xwW9JvfvVGXNDSvJWexfTumEgoApVVRSoW3dk3dR",
  "key4": "2n8JMXUzYL6GaMMawNmHHo1BC8AeePQZJTbJMgrfUAFdUybRypLM4kFdkyGx6zgKn7sXWKd5PAt6drcWAAZfu9AC",
  "key5": "42oL9oJaNDhLRievk4nsgXZaNwGGj8Eebtq3mperHCsHhSTKqkBwAAJ1VxdhCJLMP5zG1qoquMgo8UHimcXRHitH",
  "key6": "29jo33pTURKKnujHeEbcBdRAdqHHe78jTAZaQ4wwfuZeW1hw7wy9kRDCCpd5evy19YVaAxDqeKzE7aadd9FvzF9e",
  "key7": "zTWC3HjPve8mHZpwBLHVvjeHwvq77GUNoXP3kqDL83dX1SBEsmZqzRi3Zn7CJGcBJeZ4wL4AssgdKGTyXKAHXES",
  "key8": "2yfa9VKdizfMr8gB8aakLh9zyGHanzRoVMUZgaxicX3nTH5iyqxGWPdBGiovyEMR7BRZ7v4BL5CYVCvrS1ReiyeT",
  "key9": "37suZM6X8CH8Z1ApfZvV2UrkDN7Tq7RMYBz5o8UaapUpjqzZzLRioaPKVjuQBns1hMPcfkeoeJia8HpkoP3QmU2P",
  "key10": "2tRANxuboiQrZit2jmPtazpx4QWcdWRf3My8oc3HGwmUaJkn9GJrLB9vdsdT76g7XGncwL9cw1WU7PYpwXVbogBv",
  "key11": "mP5q8DMj8h4vxAQg4sE4F9U9LB9rUSKnCYGYoFTicdFR2apodBoDP2gEpeQ6E5CABRhhY4E2GxNXUMtr4T1mpyc",
  "key12": "5S4ta7nGyhGDikT2cLCdMcKAM6cj8KQQ5YvcsLGGL1WpMSzT15gi6SAQNn9GmyyTJSv55qKG83PCxudaqqeWZyr1",
  "key13": "38m8iQ51nv1yDgq1MriEGr74ZfAQ8kgDQeA7Yrn3zF1fJJzYRQRTZUhxVRuTN2mkvyZFph31PwvrtMd9zCk1aDqE",
  "key14": "41VCXuzviuBuSQMabomaunBeEdUc4dR8ChSdK9ZUTrB3VynuL1VwDm2NfpccMGwMbuecm6UgiphLxKfi7cqLvQ6C",
  "key15": "1SYswb5FJx1LLUQohHQ7zb89VLWc6e7AwvetxJYV76crjFqY7nkBWVimLQCiU13JwNXuX3Brq69rSHVrCRAWdGh",
  "key16": "2yEFZd3TMGYcAcPhTfo9EkEn1x2ZC5PQmggmu1iWHgdT6kC95ydbuGL3khvgNkW8KYUtQ8hjY5owEgoqSHaKWzfM",
  "key17": "3Rnv63NnsnDZixh5AfcYQhX8Pro2feR3wLNxYJKCWhjVUunvnmcMv1tceCS41SCdHBawopLUo1NPM3sWBLswnuqz",
  "key18": "4ubJtzhjQJtCD6fqSwLtRjN5VYz4Dq8i351tzjThYp7iQevx8aaLS3iZVzxaw5tqbgRx5wKc4oSdKt8pY6zFh4Xw",
  "key19": "59PjJe5cmEfnQcT18be3Pzi7M6bvDY18oEy5XcKXa1E9xJ1ZgzzU7vRxb2kQuAoPaHT45asJaPmrYZAbk2Hj9f8u",
  "key20": "5HattHb83aa2LE1bYwbyVSm4T2q4ja4fecrEhPmZStV2xyMWsN7vv698wsQ336Bp6iyCv1HFaWHUABTNwBAW4YGa",
  "key21": "31uygbTdrV5dva35M5JTkj6VKt1gwcyTXsVAEY1jZwKdpnwdukCJiu9icQPZkqRW1fPdjaab6cCRfNnbqAKL5Gv6",
  "key22": "5eYwEnf6V3nWYx8R1ceZNdHzcypC4LKWEYTDUxaCLhvfdo6aE3cXrLoaziLaF6FmJ6gTDr9vNi2HjoYazorZ8J8G",
  "key23": "4yp5GNfXueT8HiG2538sq7LhWhhucmCQR1J254FmLik9pXQb5Vr96fsfeFAZBZcbFMyp3FSJgnUUHbKx2yQLiMaL",
  "key24": "83y9MuCNixHCLJNhwEmqsuRJKcfxZZA9L3UwAUXkf77MFNDnaVREWJCB2U9HnvLt5pVxnZiJME7br1NmcFihmEn",
  "key25": "4ooKnbsikKH73H2WFVtGSm6hQFpfBM6J5hj5R5rvVNpGEnpegYwzLoMrNRJBJyHPNEMrh1mdw5TqtENbDERnXEXH",
  "key26": "3hZzNoVy46LiqCy4m1HmSk6qMwqLoSe2GNMZpccQM7ZyZg3F8UvNRM8f1sWSLqLsKWpVwiY3TBEWoSRArZ7Csdgc",
  "key27": "NGruZgcNJSZ58iXVWN7ZG21yPbqpC5CsvTRhw5FFPcHQ6VFkh6tv9gQovxgLjE4Tg7b4KH55gG4aXzs5dPRS9LK",
  "key28": "4njdkvg6FGY4MWyEj3vAD1x6okv34Efu5UzG7EvDWPxKAFq6dU6n7qfSgN6dwXwiQNqgqqj1rQau8fmF8TTJf1Ct",
  "key29": "4VPTNmcBykz8z3b2iJZLFP8ENZ46Uh4GGYsGYuunDPFfSLiMjgmFykwGPg8VEnYzXbk1AUSA7betvDWmA2PxU89e",
  "key30": "25GwpDYHWdsbGbRX22XfsHehSW2E5ZEKpXaRHmH7dFEuAxNcQrVHuabSBMssNvRnx3faYD8tjVbrhECEZZ46qa5J",
  "key31": "L8GGwJCcqv52xwF4aJUkHpyAtNaQRquxkALXEcLDC7B62AyS9bC8UXZbXZTYCcdtn9bRs8EVJx8Y7kANT5QiT28",
  "key32": "2j1o8Kbwq1LMwCB6As73QdNkgEgcJafZK6s2JQrxzhUD6mMsxZk2qXHRJhs2tvkZGZ5JyuQFnKY8GYx9VW3hQGDc"
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
