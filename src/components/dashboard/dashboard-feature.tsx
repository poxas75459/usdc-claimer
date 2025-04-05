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
    "2dV7Pt5bBiNELu3AXE37Vhgo7JncuPF5uf6V93aWTLoCWSDvMtV7bqqDU5SNvXgeb3sVLuFTmuU1sh43Ktwt4aeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NkSyHQXFBppvFR2yUNSv1xNytKJHqJ72KJtiCMtY2ot6DrQ7DAp8sbLV8GgmCFHcuoZEdPYL5KRRzh91D9CSf8",
  "key1": "vpY7dpcd6AHAVt2CduC1TZS118koWbzj8BkgpVdq9s5ZDKN27MPeB3MkNPmPavHspaZRE9c2XYUo4gFuPB4rDs8",
  "key2": "3Ns9BjsEsY4gYhVFUmYj35U2hVcYTTqLBkWyKJpErZtK5hEuEn46FJioBSCi9QRqom2qknvQhKfmxmA2edEQtWsS",
  "key3": "4Ku9LesMC9M1VEErjSjKMxQ1bCLm7CzhCCqEGoC5FhWLj6XMuQsn91WybpCXs9V7WXJLBfp6CkuCM8GwDh1WuskS",
  "key4": "545XGGfsySHKbpypo63KNEuqutr2toUGnQuovQp8hNrP4cnbGEHg1Jh1uArXyYYXnCMAcznymrKwvfGVmV3xAKRo",
  "key5": "ipTmJTP5BaGe8iyZSa3ntvhKmo8GH1CZ1xK747evBN2AYKe73s41WCrPHaymr5tQtniqWs2ZZyRBb2ornU9pF4X",
  "key6": "46Zpt31Nq8EMoE2hpuzka7u2fpcvKjf7XmyBvBknAk3mRaMYEdVJdBarz4NaNUFnPiWd1VmsZV2v4DqB5ESoBWzb",
  "key7": "2voGBqKgtGUDWg5cYMGziQyU9PVFMWRHnJK4CwWF6zJTtva1RTc4ec6MxYPYjNNhtneyWPwNgdePHAKC4d9TV3CK",
  "key8": "tYSNj8ZeDzJCU2dmzrC92wA3RKEsbSoU4xjLgSh4MM6JLCoAWFu8Arqfvak28aYPNh4oeCwvsUwR77fPG8Gvdmq",
  "key9": "5urvHaqegmdHG2dCcyKzZk1CNwTGjJ7XQyd5h7jGocxf8GMTBnP7DL6gkzDxn8HLYBPRNKSX6RoP54xRrKPGxgKR",
  "key10": "3LfhMYXHEJZRaasu3bQCLrL1jAAVSxrTJES9cqcevYesX2y2bpkHh4uGXmn5iPrP7HmSC7wTxvo9yeCnXJ2WQJHG",
  "key11": "JFoDCr67z7XyJnaw56bK5sYqfg8sXdrj4LymoChidcYDrTCFpxdcDe4we71vrBMaNEsycpRXWjtP3hRmwg7RRCY",
  "key12": "24j8nui4vxPnpbJYGu8uCyC1PNAACFUudMKAhRNV2tZ32FSX9FVU6JK8AKzPuY58UzrcydrPnVAYvMenw672n8Xo",
  "key13": "Sq8p9Yar5aJp7ocXXiEtEST2Rndd6qTWVNWvuDykYpy396MhjKvMBt8YTvbrNXFxaq8GZZGgzW7uFmzC8FFCygR",
  "key14": "2VsXhucaUhP24uD2GZFJfdDY4cKNLq5ezyKcm7ni8Lyz9MffH8NzhxNyPVbkLAxzduFW4NHNkB3hZeXBNHwpG81u",
  "key15": "66Mzx3V3AXyGe9unfK5u1KJRDb3ELS5ZJSEJq1BNeHZiGHXHbJ39WyDrnFnrCkkCsoJcJgFZRyRr6Gz1dMxcMhqm",
  "key16": "33xytJxJwicULsqX1b2un9fF4TRroYXWECkEpk3SqzwoAvjqP9XLr2rqEpKs6dTPTgUrYBxNKBpeZTsmPrRwRw2a",
  "key17": "4EKpvis1neWWVQvgHiVUrCK6W1v6U3GKsM3kkGH2XEVydYtLNNpwaUZQ4Ea33VCJociWTd9ajDQTmNf1K7rSWSRi",
  "key18": "58a7ScazDe4YegmwGJHR74MU8MJazRZEuDHtMhwdftzanCiX4okusVYf88jRVRMUeDERgya57P1ymFzFrdeoBMyZ",
  "key19": "5efrjrKhpw8QsDkzf5aQ48RePuzW7ixeEnwZrE5fd65aRNpxwrZsaQjo32W8TohLM9zQdrfvMCbiZSEwoHv9JgGi",
  "key20": "2nBtdm8wpePdRkwNuftHwRWvh9yWCPcqYNY8R6cjNY6vZ4h4LgnNBtV4myAHnXqWLcRcNn6ZGvk4MNqDgYvuYizr",
  "key21": "3cxQ82R4v3TxbzvPuwTg45xTq4nzHb1MsrmQhBU2DfaXWk2y7L6gke2BkSmVXMdqxKfDmcrErZ46TjSrx9PFftyR",
  "key22": "2dCMfJiUgA486noCEocEpv59JwJECRAtUEeCsrLXdmcZkhwdhLNhmzqLnuXsiTKpV2gdXCMHvgxiVSWyLf1ytvCe",
  "key23": "2ELnUcrRuVKQwqHWzRMdU97KWTU3NTgjDSh3NstyccK6Ewk2tVEHuu115Gi1jCMkxyHqJfH4Syer8QU14Bk5pKL7",
  "key24": "7bemfs9shW1BnXeNCjYtWp4fWZhMn8xvanv8cWctJVgkHccJSX2fFHFkVAd3rNKLdk2wucp43q7vdEDMoNvQeiQ",
  "key25": "2pCkZu9ErqFMWGTrPKYAum6P5WUq7bbmG8zG67136NV9imjjfh7UFktK6EKT7dqq5nGubgpaT1dZ7SdsVmvDH7vq",
  "key26": "5Ae4EJKQ7MdP156K5mqCFTnQvqXXk47FGA8XdTJGKvA9DpLyq8mbur647furr9Mxi1bXniymZFypJP6M1j8cxSnQ",
  "key27": "SohK28YSeuGoL3UNk75oEitMbABaJrcAwzw9j6tssKdMrKWTxEBJU9MjUdKoWVNhUZDB6yyPEw5DPB622efHpn2",
  "key28": "URKLe3doYHrC7XVYaMaXkNH8uY4LUHJY2ZtHUhwUKtN78nWPZcE216QXN9QDYtAQf1ibXvBRRt5nf4zwcfn347G",
  "key29": "2Nnfd12quzTu2VvXou1XzBapwfghUgpTJDQFX9WwXoKkkXgoQSdmqVz8gJ5gXuArw89hVvvPgXLrZ9dVhddHExXk",
  "key30": "S1L8HZzgRsbgYoGtwjx5fC41Ww3EsvT3KdSmSQZdzDHoZ6mRTwvDg1xNwbnAFkBBBuTEL2BL9go3afgHUCzXexH",
  "key31": "5L1zLf6dz5LcDEu6cytDoYK3BYKciFvk6EQff1EwREiWjAZqhKbLcGhoi4TJhsys7R1UHmZt26kxXMqmmWfccpQL",
  "key32": "3QVUiBDrcMFxrRQ48AXRyuARv3XSxmK8d24xaoP846jrXzHw73Fuo2FbEEj36nXzjBeNFveKVJkGB692NPsCAWqU",
  "key33": "2Kk5dsmCUnkqXiVeW22i9HnAoxo9h8YJBT7dBYyuZYQSJbLpav8FVRpdJzxMGNRsqVHpdDmiApv27uUdEHcpGQFv",
  "key34": "48J37CtUMbEo3EAJg3bpoQBBNw2hhHXaJTFDXWz2HYmkHPidqPAiUAyxHfvem7Jc7P3nXnQVcWMzXYZZk8jEuGYS",
  "key35": "kocmPMUeYJNZgmsnz7xxWicXCzjm4TGiL3kTMKZbvD4ASz5RHd7kBd4TpG43FHgyumEYFbDWqeBpgmpSwyZMtUx",
  "key36": "5C3pQQPUyJBLtQ1E9v5wCxTgsLjgNF8J5Tc8bjicvTtJ8mrnvY4jojYD6Zg41DVhmX4AWhGjU8keJvesKcctEfuq",
  "key37": "4wyxBhNwbEig4bQZ2MvGmMrHgk8eFNEDvBbz2nLRACqAr3Pk5RvacvrqzcgNJZ1LhAyWXcCARA7aq4MY1tv7jD9j",
  "key38": "u5wLrg3uVVTR1swJMUEBwLtBoZeRZiGkuirdursUhX6VKhYpSb4yKQKdxvK3reNYWt7G7Sdcu3ZAdRxHTtTHqV2",
  "key39": "5GR3RwxLWhStWx4Ug3zHmvkMtYyGmFbmRJaYmNwj8Co5H3Cg25uyX7ELJJwqB5orfyYufbBuW9vZDvXK6WsHMWnX",
  "key40": "5pXesb2Ppxur8STe7YA48kPDTsEeUevntm8qDYhDqTRAmdPwq3y9DM4Xg38ahvuBPTBw3A8gSxEqRUPdSz7D6upm",
  "key41": "5C6KdPi4KbkDCRQNWMMkg4GPgPW3yPdZG7SMYXdG9Sz7w3EzEeinb6jh4WAk3JGx6ZfRbEax7Z6jZJdcdCahynUm",
  "key42": "3UaP2DsupozTg1WHXt75uh9RsAhjvYcbW6JPEfuwxrP6p6dJZ2sEjKY2G1XnmMGoAyQsq4NRW7cepvX7FJuHLMYF",
  "key43": "5wQrBcFMXrrR2XZVHGKFVYF7RJzkrQkEWzVeHG7NZn68Z9Dub6zp4cmVwdiPYM3Y7Xghxo38kobTcufV4jjSwVZz",
  "key44": "5yDSu3DXNvQXXgtt32nEZQfGVHcUmCPXxVRo1eYuauPy61FubGUcUMpXr2vtRbuaUCyosCitdc2GQ47JQKWp8Zan",
  "key45": "3ua2jSgtozR6SHPmHmdMqrdTEodqdHdYo692JQHgZvLMp1H28YHdhQAuNUjmhcSq4TTvYhiPxhK3cXB9dR16idob",
  "key46": "3xBtGCcHAXx9yz8RaEEbzgoyteK4efEd4ZatKaUNeSrvyNyus4TU49moXrRo8GorErdKnEu7fePwwZhTZeBupuiT",
  "key47": "5r1ePvm2f4avm3KwBCT4hiuBjYpKjmRor32WjQc71fUYchNu14Fpx1kznqgR3KT4qVz5CwXFHp7eQTy6vD6Ndt3A",
  "key48": "3A4dXZz7Lh6u6BL5bHiiwYfEwxDskTaJNPbmo39GPWRgmvQGbfhwwJijCBx2Wiiyj2QnXuTNfVFc6N4FCXa488MJ"
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
