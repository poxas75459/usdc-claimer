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
    "5vdk21DoPvj38rshTQk5bKybQnL1Ls2DaSDBZa4sUCegE2eQ2c9jdjVp9FCXniarMkQ3RZoNDDHN7XXYCeh31RPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZGpnwutNLzMseUrPc4iSH8RuhCGUWYuQGPdw6q8ZKiEEzg7tej3YL4K3fupEfoBwtKfbJvARHAVFC68oNd63MC",
  "key1": "2ZK8dHKpqbXgJ598LXny9cvnzqvhSQ7Yj8pgLXMhSi7tBTtCsgVrnj7rshMb5RS4jfSd3k4z7RyGLwd9kcmzSxzZ",
  "key2": "3y8FN4v8m2f1nXCmVT1vWFm9xVFg3djQTyxKZSeZk3cC9eZEXvBp4ixvvR64brfUdJBkif56LHBRVPUvWrM37DqU",
  "key3": "34r8RBW2a2awpVFabo2HPPQZxNCNtYx6BZ7cMqJVjoVUhi3Eh3cRrRq7rTVeKbqZgHGgTXNDnbiK1B8UvCa9mp2c",
  "key4": "3SB7D5HZEw2f6ydmrV1kzscTX7qZMASZZeRoGRSQ3so1NiM4wujeycMvr94qg23o5efYzGNZE7YstdHCAVfMqYvZ",
  "key5": "4fg983fCccFhJWHBTQ8SgQW8HcSwP5GQ1TuJAQrFxgcxr7wJYg7ZhuYfZ1c1MW6dH4UBXWZ4NbjzjZ8tN6ySdkeN",
  "key6": "jxx3LmgwcUb1wkj7isx4cCNpMERUhrWjK5RsPXid7dE54rFwwZkQb3XKcC5PuXmX8QyZkdoNMJLrB1FEwee1kMf",
  "key7": "4L54MNS7T2qGH9SNctKcjFoqRa5oacC4uqab8Abjy18mSxgqv9CZnk5qfbfG4dAtLyjApsZJmhk2a1nHhxXbrbmf",
  "key8": "5wA1RNQW3vfbLTS2Ce6rwc2FdUe9FefHBTJM71tPrWQPBNZSNM9nxDbo2Hi7aMWPsHuEzpTjvZkWyFF9ymHabxt9",
  "key9": "c4x8RkeqiBH3iSoTL2PJCJHGe9VaoBWA4rAFUYRN6nv8r7VizrMPMfPZrM9cJ6MmYh7ZAMHtD7whfMcEU1jz2qw",
  "key10": "4VxNgQzrdKWuo4obeHb6MuRTxiUAhNWHK53qPxgQDMfsWYFWHCpvZrVzCM2sKPBkkKZPjKEPptDoUtHdmuqQrzhT",
  "key11": "4rjbJqZYC68Yxf4wAdfrvtVho6PFHUSmuU5PFSjtMHiGYXUoRe5PDDFjryizzS83FdrZX1EfffjcpTg8P4RjMTTj",
  "key12": "8SRjSmoAR1Dv1zrCDpFYZQMEDBjc6RwvdxF4gF2D3R1VqLkNGFfR4RkQF1nF5eDACxHk42qbumWAuedz7hACWdw",
  "key13": "3NPK4EoS5NLYBsvz7Ub5nTwLcQH65VmN3dQszkx9VieZdcuNHk4myXdMNp3zuDoujmxxuegAYevAEkHEFQSJmoAs",
  "key14": "5BgeVm4rr5e2GGM4HHaxm7qQaVBxfy3p9Va7JQ6YApxwYX7ZRHat7mqjeic2Ldw7FzJzaNdjR4qAbc9Ax4dKg6wJ",
  "key15": "4t1ufbfjuLvQYeBzpfMY7DQaCaosHaoHZHfi8amzg6EhrzDSLTQnLmpjuejG4fnWBuxGPsGXUHPWw7EcgkYRgdok",
  "key16": "ATzDWNvjePZkYGpjSXHaNAAXCdwPjdPeybPttbeXKgCjxmQdTuha8caWFQNAAtv5yyUXQUgwUM64tsK7T6YFit9",
  "key17": "3yc5pNiyF4Kuvn9VJPXj7FXGb1g334uJmkEkWdKYFNstFW8HBK9jfUWYubJ7XvUxNZEA8ewpcAHz3qC9r6PReY76",
  "key18": "WETANiqjp1skFKcXYuGcZotFgeyMTAzednmqSULiJxnBBdyL3PF9x9etHm9XPL2d8aAo9aC9X53DMLbUgvBQgh4",
  "key19": "4FcrQQsWKD3bxdXmjCLZnQDeSapVXncJLTJimKJDYQWmHSiZbJmV9MybvRfHFHWRT3sy1kAuAX4cth91fgbgpmQ3",
  "key20": "34mg3M3wN1bnKoYUhhNqHMCcViaLERStYwRy86c1xBKQNbeGE8z2DGZE5tF8nYZBmREEVNJvkroHP1m3bvEyQ5ae",
  "key21": "3Yha4xECbCCTe2iZthGQdZyDmRsCA3UXtRDriPWgBUerRVEyomcAmEoerrXUbgXuazpnXgN7KnG8N6oayEBB7pAu",
  "key22": "5sJPdQzE6gJcTi3ArPWru8NdsmsMS2yERpu7oUBMgueXNGpMJ2vTfVY36Qeybsu3JG3xcmq81Fr7etivNA7CFFPv",
  "key23": "5i674geMVcGfMpAb1FzisxEpHiqcmrmNx6patKQBtQwaU69bFLknbftH1jUiedpdrTSMb34ZMkDSfZS4RUdLHWte",
  "key24": "3dLGgPy2bZPqXLupHACqLsxeeQf48tdhpLKp6rmsvaBQMpmGFbarN2YevVxFVFrFzba4GNQPMUevZCLEowjnjkMF",
  "key25": "2HCjgvRMDfm38ZYT5oxUe6Ghr2RXMgFof9tLXuP1QJT9Xp6wXY7YYvgaDB3ZDebpKBnmVdZfHqkQnP6e4RpYkPEM",
  "key26": "ztWt6BZfyq9CPDCzwDy43xtJArWaaGso6uVvXSven92dY4PBDaNatBDgkaL9iGmEigzwu8QiymxZLDaS61uUKiA",
  "key27": "4qgsvZP8U7LY5dtKW6E4uRxXRvedTVBJ1fDtLyygF5bb2iuBB3WxzyD6iKs8PTyAidBjswWmhh193BRw8avUbvfK",
  "key28": "2sKJ2qVwoNbEEY7Ghr2XaKDdKCPwtwmV3LgMSGWHapErYd5ohQgEhXNJNZd42jWsysZsqaXeoy3fDQ9BB995oeEf",
  "key29": "4MKM4JMAfR6MsyAZ5ok1wz5tufQf95LbrVDkucczcZZbxrjq8mzPbjFBK28Rv5ApwoVz5X63rqdhcGArF81h7qNC",
  "key30": "4FRQRo5rq9o8YvVd2JFQZATxgkFENwN4o6wqPkEp4YqzTU7Mh9RR2ZmGrqP6AfX9NnUS33RLq1e1ns38tjG3bZdP",
  "key31": "ALxCaa7fjZeijv7dC2EJK4Zcmbv1PYGuxkEhKT5TWrMQcz1MsDWQsxbhYvhyUrpALo9SnDF8YvWrktCVj1WxvEV",
  "key32": "3sgHDsBjRCgWjvwVgS3wCy3yfMukq3vPBTfyiuFpsPuSuqMPgredKiRihk2XphmM3FuFYdtMfK1mHd7UuMp5umq8",
  "key33": "4jhnnKxRPa5G9X7P6V19dxGqZaFcwaL1KyWQuvfGHJpHKCR8y8EVjoj1ez224Y17bQ5p6pzQz4TCLvXXPXDkc73m",
  "key34": "44vye5WMuXSmqZKQYDtfdhG9XRXtmvPuLbaKAse9FCrvv3fqTJS5ETdpMwzCqrw21L6wT7cpHziasMjkjKRnniEP",
  "key35": "2TawTYs8jDR8kbBA4kjeLpuQhGkvwfCxb4ndfgusKupkEyycoBByC6kH9tsM25HqCZYruJh753RfUvNsuDDEmxj6"
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
