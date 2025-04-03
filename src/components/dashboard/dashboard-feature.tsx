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
    "4e6gqFNhrU5oZDYeUvjC4ukqkBWVotHyvUugbrBjaicxWVZLzuRSoTKxG4YLPZSSm2BHNajsgKYzhhRtJGM2JRqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKkj5MeAGLvnFMtLy5TBu3q7osybDB4TBYv8rEGZpaExtR112xeeEA3S1upvuUvEQJNkAALdLpTb1mB5J5SWVQw",
  "key1": "5NFXoCoiPS8gK7DaLGfSRnWjbnEGYcsgu9j6mxJzhx4gCZQ7cecwRBuKG3Dkho7pdsD8QNCt7GSJSDRZrT83T3mg",
  "key2": "3Q2ed3mdTm88wJubSzGmwFkfKxJ7h9p2TbnTtsHZGtM4mDQKHFhDtKjczDRaHdUyW78RXSE8hfXswbRia8dYwBGf",
  "key3": "4BANgv25aEnm6ustUCziBVyibPJ2nxXbWGEXdfqjezoBn6mc9GHYW1VinhwC6nB9coeq5f1RGWymuwV4WqvsVKgS",
  "key4": "4GqrQvbqMyEYwngy6zGDzUy6pKPqZSNRLeBfyfKf67YfhPXvoavkbYW8oPN6ge9GMXBKaFEBcceaViRjaSBKTUCi",
  "key5": "5x62H7EKvb4NrtxeCoziV9NWWByXmJFGkFwkr5K9fHPrtxFDo3hdKTe2pwQFzkAgCa9e2DnYP84dmD3ExDhBAVWn",
  "key6": "2YsjYvPtasxWwQgzWsr6ZVisjLbz3FfN5nUj7SNAjfdrr2yuhAzHBiim7VAoNEKS8MawzY72jZRysAPJojf6iSdq",
  "key7": "qFWJ8MB7YVx1QAN3Jo6pnCARLXhWBp1BFxkW5Es6kGZznZkmWgv5hntGA1Joz343ac7RnyyD4Vn8gnHWnXjztex",
  "key8": "65D7MQmnwBeLB7J6ErJCRoNxJE6xCnMqTLyPEW2q7xbaZhxPuqacnbuAzaipii5nZKEvsuSAPjaqYM4RFMDN1e51",
  "key9": "5rbJ1VkLAHd8GTuZAUZEdS8PA5uPP1ho3JNxEsdLbfAF4i8EzRt1vM2ePPdUXkSHmQujpW61AYmCwYRMQ3weAsj6",
  "key10": "5FhhribRP1d3U3fVxDCrH2me4STvDZMno7fbBNeurwCpvVfM6ecNrt98hqin695R7D4nAKdHQdEDet3rEj4xUW9A",
  "key11": "2ds3ZE3D8d9wXRFfYY7aEyjBwchJQ5jmhi5FoNkkmBT6quAEpbQY1htmnJPabGLapwzZZgmxWsnBbVdzPSYQfEjR",
  "key12": "3zLMG5GgXWZ1Mag82CoVBye5YQRxcXSzHrpHCmHLGcBddCTEgaTZF6zbNLzJeAbyWXV6GM1QwE324GfwXqqoVjMm",
  "key13": "5xgkfABjybV8WXL91fBqBdvMD4rgJczgjsGsqz3ojgrMTtZcH8MaQTHRcr2n3Ecu8weS7Hmkyu5AYgYDomEx7oNq",
  "key14": "5djS1KwosNDQNBTi4sD1RpFUPu1G2LQVmrmU7jQBCcuTKsHAxwDY14qN3qtnp4VhyNqwGfe94owJWwge98zixuiz",
  "key15": "tnuqHNBQ8kaWRJmzWsGURGBcmbvnbHthZvZHFKbRm8G3VjNu1UnBAqgLfLoZrqUTY5MKnhjqSrjk7ynHz1tCuo1",
  "key16": "2xGZ746rq7DqNFstzzgbK2BHT8srLKkLB4S45DQJaUkSbecGYEM83JbnsCpU6Tj3xnBuUbSjCMBmiKjx9ExyQNwp",
  "key17": "nAT8D6tpYho8ZwVa3kH2Q1PNJ5PeLYqzYqXZuxSWAkowKPMCxBx32Kck81XBDqKRHta2qZd5v3eGSm4LHqPpAJj",
  "key18": "62tY2Zs6Rt51oWyUwqB94eBzNQYDeYLmNh2BZTY4Qnde9sGfBg5GagCtVBB2jEYud3tMBos8z4MJrgNsquvvyBN4",
  "key19": "2NUf2rhmausXasGzCY5h8cHzsBWMjG9yqovVVpwUKCdzYYmMBAF8NiDRmMyREY3avxot5kKstHsAoCtJnP4KDy37",
  "key20": "4UKagFd6de6hdEWZi8pGKG62rTKMKTMimbyRgRqBPFmDy2qBPv6VtfWvoWqxBQEXqrwDG4M925o3cNGw2mcpSimq",
  "key21": "2zjcBTygQXpm5yJziPhJ5CUM2GjLwMZJci7Gt1sSHMyo1zTXDJXgkvGPZPbZmxMeBWPKnyj1AYpZuS9PTjH1R3b4",
  "key22": "2b93VyZqBuZNiFd5xmHp1xEDnrTNkTdWYniH9TDuKwZyVWycssqxD6JX6nBfpLRF9ckHTDCNagCVpuRzy4rPaKR8",
  "key23": "3zfChAAFKe2BNGPUmHxxuh1aXfu6oKAeUTV5ExSsKe4V1yPbv9LG5QzPSFFcERBKJVgeND8WqsW5QWTUcxMvLGw8",
  "key24": "5aCC5JJF32Ansdp986yhHQHdxmJXBwXbukbq6iwsH9zyGfmEPMf9KyrWa5F7hrdjx4vrBk2sbd5WYTQXTteVniwt",
  "key25": "2f42TkJM9GWHTQ26meTrFjwQKGirFTref7fm7dPJk1tdgWeZ3SVS6RcWgf2ftoyYsomrpvV6FCcHipic9refqJiw",
  "key26": "2ngU36tCTZHqBHx3VGwe5yABYBbhE3xZqdxyaWfva1AojSUYWc1GYAfRMJ5fZkhgvzAEKsEwhNjq33wKne2mhEkG",
  "key27": "3KQaaWNQVyJB38tnKUNhGUenNdV5JaKjk7zQcP32TR9HYvXTtcHTSxNbjygdet3xwRxweaYHH2rPjKZV7EyMLz1o",
  "key28": "Say6QeYqKpFMrDaToLHCdk5aAJraSDxTZjPgG6pn6qT9SV5oCppaZFSaKRNmoJRcYtR5TEASxdRtj4JrgqjKK1V",
  "key29": "4RVgoQGAydvBgPWkyGxKAxouWh2afkzAwUaGcFivjz8x5m6BnJXKvtqNnhiE7HFQp1USHUDpgwwZXPSdSV6Di7RT",
  "key30": "5GzCAr7eDSseKhQrPTeffqWwMXrZUTjadqupvvtJsQncevBpa6TfoVGfGeWWt9dCMjV11z22XQpjk7dSqGQW1uKy",
  "key31": "64cXjGWCs91fW6aYZz97YHXLEAwcLVfug2yZHPNnVvy5n7xpGsPD3aCxT1eQGBjkfyAWkVwQUsjxK7Q3B18DH269",
  "key32": "eJD59QLpkDqM5oEnDamqMVmcpMa1zZut8wVtLcs1aDp4Nxy9V1mQa79nzweXDfPLGkvjd3XqcrkKvaTFn2QGEUo",
  "key33": "5wYcg3ZKRZjvoS2p9Pcm12Zmp1HzeMv3gCbnW9JAHTFrkwvREgXrvRrSokvDDFnUtoaWdTiQvgmNu6irbFsF9kXY",
  "key34": "4FrAbtXDSErCY3FEgoGaxBfhaHnmhmKbMw76dMBCjegRmr8VgAsjWo1smv49MgGPaDkBBz44s4jnwFNjfkpYgRxG",
  "key35": "52B8KiF98dSbMMBtCvDDoYpE3JYsQS8UJ6tUbsq9wTTd9pc3yfwLBAiTZR7pRiEhwstRjoVbNxXXi5GKMsgmAoj1",
  "key36": "3e4GkdiCbjD2sW241QxV3x4X6qErKXxnuZjFAi3D8RBmwi84LXFESDAdYDoStFQTD9gGYdyRrW2XnG5WKsVnr7cj",
  "key37": "26esgEZeAQ6fQBaUcitzVYGwQSvSBtgRKtJjQ1epE27WShxrYFZyQD8b9WbJTakVERvkNiU3CT8sqGVdwDrhNxQy",
  "key38": "4uMm8xcw7HfXEcQ4jy8ZiVrLdF7h2bQN5NfuBzxaVtQ3HqJcuHFU6uk8pGnxnAzWcNeqRg4WTP5amUzhi129PAom",
  "key39": "2ndexVR5HrHBt7bA1CJn7rzYK4B6twPYZp5vcRPzQUEsezMeRKttD8coFUfscSLb7nBpYpB3K4BEe25ixssrBsb6",
  "key40": "U7YRiSpqpTzc23DLfp8XCN1aTmWX1ZB7K15dgnyM4v13TShRyTTv8gBZUaFbArBAxwJPixZS6GNpnufnTrx4LjJ",
  "key41": "kM9RcB1ner4R1wUDkGixVgv5TxwPowNLuWvdbCy2QL9MW4cKZyoDrtv9g433Jb5dM2mSNYefYkK1yXprNUPJ6rq",
  "key42": "64JwKauHrBEmAx4kyvNxYqL2YDKGQWH41C8E1rVwdz8S5n4QCUbqaVT9DmubWLMFQqpVkFzhgSkvSQ4YRXga5seA",
  "key43": "4uTuvsLcH7L8MqvX5Mqa7AuCz51UsJnfDwth6A5adfPRFuDduYRWW95iTAJRZQSY4f8txSGtv8vMKBa9jRxdq3nr",
  "key44": "3WmjXddwieCFuJpMqygMhbeKrqSrbET5tvftD8x873tSbbRKFHKEDUjvTy3u4TS2HtaHemJUu8qyAAzzQfMFtBAi",
  "key45": "ZfEZvqiJxfnu7ivJ9xB7xbTswcywJmrxkZDZQ8wpKPAHLYGztBy5DbKdC6f1fKZcG7aFRYFtqzTcMRhDzL6sWQa",
  "key46": "3gcdrbCwfGFgWCN6aphg3bzSdEvAizrnLsBTg7qcymSFvUjhfprxDXmgsJf6dwUtEZ7EGqpn5HZ6rWKZLaYkDQHv",
  "key47": "ewwC7SJXW3dR4oR5bdYxJpVpNJPJNn2QwjohUR2SUtdL7kMLyKNDXyHVuhPKCULGatjjSZWZ7hdD5tfQwqkaCJY",
  "key48": "3NiPLfnb27xvs5WFmLzah6wreU1FPcRJwAehnwvgDpr9zEPRo5kmujUsEhWVPvMamnzZCXQQcg48uwjFKmoXMGXt"
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
