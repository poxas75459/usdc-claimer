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
    "632kzEBMDrijoQ9u73dZkZQuiAdzNsiJxmzrBZNiiTePTnUipunmGVCVyPRufxNHcEmzJYLUoowQ2RQeTrMTxfhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByW6SWErzzfVGwkmRyQmEQ8GJ4hfEdBBbX2tdFV2azrN9ahZAeG5LhRqVohBPmwAwKMvaJCSZyQGEuyKditaZ7T",
  "key1": "64mKGiwV1bZsBgA4fNT6nVLyGWTaqiUJonpZksRN182KHkHizXJkM1zHz4VB4xTvibWGFmMnKqArx6DST8ieC93e",
  "key2": "4aNhVSGGte2hr8ZQr7yGLnuyyHAvZPP7Gw2Rx3w3RQLe9Zpsq8i6ev89QsWqj7vYRwncGRmQ89VqcHAS8FNAVueC",
  "key3": "9iU3q1JeMsiec6CFBtd2XZdasCYNczmZGtzTca6NoFsY93HBRw8MtsSH76Jh1PgqmnuQqfqeQ23Qp128HNpV1Ae",
  "key4": "XvcP5TjeMdKoLpL38zEhWA8fWMt2avWJjtKj7ipGhueckbZdwe4NL3Ck9xQASdS6QNmXFYbWTtuHcVXHUsMWEDG",
  "key5": "2bxoBXPcPBxFSxpwDJE6ErqwCVZphzioy1k8oyo5eWp5jFemivmmungcEhMUSFYjrecGnaFMcUB8aU11XSDWo69j",
  "key6": "5n1Xx8mVc56Hk76PLhXycM35ALnVDLGNYDM9HUtG2vqDgSaNyiS61gP6XPabrNYZi3urMuDHb7qVNYpVgbwQdfSa",
  "key7": "5wXSiPASTFLdqaYEhiqr9DLn3NNtTfke9Tb8UJBypystkoDWQvLLTwy28bV9BMF3d9KywirMiVqfuRx4H8wCNF9R",
  "key8": "4VBk31ZMqMMWs6jDtCW7Hezyv3bsrimgLU6NCH7WBLQ9YnNU2JgzGYbMbDZKKgrYJN2Kszhwd669p5BeACCAUpS2",
  "key9": "3N8aWqidCTwS82Aid7zoWkrkZBES5gt95r5A5WpBCgkRdha5Da9nzToarM3J5za9noQJuxZy4MzvRobAsJdgM23J",
  "key10": "2jkz67nRnDEAEHj4FxCiHG6PRp7AJ3j8dzWY6e4VnHs3SqaHCDshFDZaNdN2kEbdCW9m6FDkUsCKn7KUZRiDKdiw",
  "key11": "5HAKERMVhMnY6xQwLaBUBXHfPZEhSbs1Dp6uPynww1FNeFRPSRnFrcbnmWZJS4u85B5kLg9LeRGcDv3VpsAe2wYW",
  "key12": "21t1LCeTzTeEe1H9Hr4oaffqxPPzoafbFbgEtv8qArPek12o5V1VfNz52x4Zz3nXCEJVb3kMuGhBPSEAqU1xYQar",
  "key13": "5LYLFKkfAXrzYpSZCofUaLJRSmbL1LVwdc7wShSwhbuUietURjFztNco5USKBvcKbW5EUgBDz9hG1PFoMaEARkqJ",
  "key14": "2MPgW6V9bZYVjKF5cVETMKHr5n6LE38xKeiwyarpwZCsnL2npc7ky6qq1HvAgCondo2MevBnXmRHxejmXJKJUjB2",
  "key15": "qX85ToRhz1Cemw9VENwvuPkAcaofbs7XsXkJbAdUsEefS47evHNYMA3RTfj1SkzF1121ce8DUnaxACnsCuXfkgn",
  "key16": "3FcDaYqU7PfYyiBUeEvvLuRKb1GqENXp4RNmFnP1GW7JZDe2TZhc8g2FrqmojPqQ5SkEg3Vzn33RhyWz8M2Hdmsk",
  "key17": "5WpxC759cS3yWQUoXGFewm4qWrd6Wmt2DkymPb3L959UJWL2pnhfCM2N6A28P3iEtyeVKUQJg35M878pZWA1YFWH",
  "key18": "4JQru4Su3Fz2FD3vzqy6BQGMRUubMrzknVYHASAXQw9Eqk5Qq337rzdEm7DpseUFkNMeXDcUpea4hxWwwrNzTm9v",
  "key19": "2jdp5jL2ueLqBReuMfv2EGjshejCt8fTthapB3qbTUJcexkkZXANUncDpeMv4Y6pjmWcDQgAZuTtadeLNHFHWouK",
  "key20": "67NdnamyBdrbzrdiomc56uFRRKj4ebiYpV32dr2SZvYD5sFWLr7BwA1RVyTdjz5WGYCfyFsuWq13ju9rdkCxj8S3",
  "key21": "Ldkiz2H2FGKK88FmVmPrMPVHDyQXRmzRXVzFE3TjUz6w7aur2cSL9jsoSFYjq7Wfx7ktHJRTuMaghgFRN9B7WnG",
  "key22": "3MTsRjttLDzSvNpdBekmNEDnU8PXaHXx7VmU3hhPT5kUhX3epGAn92UrEtsYuFUGtPUwaU5Jan5RcC2i8NrXGqMN",
  "key23": "3JG1RHqLhS4fvM14gFhwCWTdViJzb8conBxkzQTJTQiL8QuiSgGFLHWJ6QPpwHKqmS5czMDzrTXwAJ2FzmNQyNCG",
  "key24": "zjrGYMJKGGXdMjbPEiGuTcgYa6cYmuzMzqgNJhpE9nAaK6V7QLHtLgqzWEsK79TMPDxdDt38i8jTnqBgN6kkEav",
  "key25": "48hppGzvBUwp2EWuj9RUEMJCMhtyMEHyfYpbj7XtUpiYr73wZfgnzcgbGiCnRgf8Z4h8k999mnmVKk3AS8yKnPHU",
  "key26": "5stBuhBopesQQ5YzJvmK1vkJa4NPBXDgLCo8AKoAYkyWxa8ZxPihQARVhzZqs6Js2jSSQLLxRWh1s1Fi1dDNnPbe",
  "key27": "3qRj1rywEjDmKu4oR4YEhhTYfEd5bXz9MCVWmZgMiBbCvSz6kAPaEAbZCEt1szWdMJtsXaJU8MSoVbyQyAtfU2K5",
  "key28": "4YdcBzGCtn39mXyKE3uAX4dPjMcbzSNv9LUdEykAJrgu494Gj3DVnsR7SHtPmSe8a2BbQaoFf5bGa6sbxfaGCc4j",
  "key29": "4VtmYa3nVQgAHm4qKkYbds6UiQnhu2KTBzq2TiKNKEoy5vVxWZue2rZreaxBzjNp6C5krZjwTdQfSUiKvngYu82V",
  "key30": "2pLyVjk9HKxuLoRj8hCTg31koGGxJBccdK93gQ8wj73Y8z6qfvSwfZ6BXRBKkmE8e3zSDXEN4fWzx2wFuMHFgiyU",
  "key31": "2aBjiUNq7ZGPCtMFheKPyTFCFQKdk1uSRbbYPM9NPygRVNLYUee42Qhu5FiNo21MzgY1tpswifTqTiTE8eCpQxfY",
  "key32": "4b8g6FxTpnnjjr7C7o3hFKUnfJeM3yRSbbXaWoPiJuGSwa4PezePRAjX68fVYS4LyNkasReeNiQQBMxa9CZ4sJPy",
  "key33": "2u6tW4bN5Ptki2wKNdvaskeScsK7wo9QEnX1YVnYEKfAXvN6fWwRFqszEUiNzhdfei4aB88qBLpZpod4WsiEgGXF",
  "key34": "3ba5FULh18yX6tgUmQ5AuXkGciS31wZ1oC9n4wQxEFQJ28kn725LM8FmVGByMSsMtpF9FBX6MXAVpeUuyagpJ6oR",
  "key35": "2tqwPcY8bbYCSfLtBVyQZ81qVUfFB3PzxTBbfpz7BT1eQA5GVduJ4pA8xzaJCmJq3pz9LBbZNP1yLSA7zCLRTME4",
  "key36": "4vCi9AJnqx65n6FNy8xJF3QwSazyb5Vi3YPbheNv2mKsc2Gdv194NgitBqTwAyyhdHGXSKdUDRWwjkgpw4MGE5Jp",
  "key37": "51gYDt8euoyftV6oRTTcfkvBHn7RV25H3asHxQik6dJCHHJA6rjVS7kzMLgT6tzrXBuFS5s8g1MYFfBspco3HAHm",
  "key38": "5WNHXNy84draUW5E6EnbZKLgGRFxBy2jSc3sW5d3jCt4zGKGxkrgnyqDgsKxBS9GiMmuczSLV7nVA3VSd3SsumQ4",
  "key39": "4CKhFokCsNRjy1xQWeHJK1AnqEJesiY8pbnpT89EJixVkYZYoeJAwWBB7SgVEcM2sChpc2fuaFMbgxH99CtZnyoM",
  "key40": "62JAF1wXPuv3EGLBpYHzkyKZXpmAQD137rsixM1SmdAquyAFpnakX1e3dS8VcdAM2goJMwNJYGsJCynqbwf6tJ9T",
  "key41": "2e2pKcBA71aMddRUsDfvXynbBCqLajqxzK9CP92jUTbp5qcJQua7M5aAwQFY8nyDN96tESiQYUDPdd8LrJsGK4vj",
  "key42": "3hffeBmnEPcwAr8fHaiTr4S8STBowccbMosAsHCxgG5uArgJ4VgacHX9jPtmfe3U77cV3HvT2nXAPBiAxJhrsjDC",
  "key43": "3CwRxNyuJPH2VUBYTWAVXYRR4V6yrNjN3R97RLgMRSFCxvXabQjfQKwivP2n2R4HWSZQoiDSwZ2xRsUC7GNY1VZc",
  "key44": "ByUs4iU7ucz5cgbYZsMZkf2w4Q3ko2TSKTogqqde9zTmvSZFVtxhhDyQ35ZHcrwT8ojnXMRKA2fSVwNUZ8eLnuA",
  "key45": "4gURPiVqy5RxLe3qirNaqPnjGfnjb1wWfYo7a3axemiB25RfxjUZHErsujWRC9SgP6CeZC8bV8Twjc4Bs4fNyPic",
  "key46": "4BG8XqNt4AMKLDNv9DTNjxewH3opdWYKRgowxCvsJFc37GTGh5QNTEDW5eFGJTmFFxCXJvKSEzJnrMMgp5rUenfg",
  "key47": "4ks5wcR3ka1L6f57fzLfSwTzE43gm6ARmkSn3Q5B76SdwAZdPCnYFy9PKuEBdUPXa932pe8nVFGCek4YPAvjYPkG"
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
