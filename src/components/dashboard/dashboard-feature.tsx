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
    "3vdf5PMqeT5kbiyxYUyiHNPT76WSWccmUpHg3TKKc5WmGyzRQxznPLaZT9h9wG1DRexF6h6E3p2z7PB33hE62GVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ac5vmZXXjpbUVQFvCw86E9Lo1KLeAyeBaWDzReSzYiwRrizVsW58QhHLTmzw2xs23biGxoKmWUqs9E7rybASZTf",
  "key1": "2fGsn5m37QxpwNNtVQuHBWvDFcidKSYXKKe9HTSvo2FYZaZH3NAjuxwKXzcv8Vqeuqmy9xiMYAsq3YumokYS9JrQ",
  "key2": "34xQsAAPBqXc6erBCqPeyA15ZtJu8S6XzPFqWkjyaTyoJCm9UqH8Ds2RSbiXvc9225dSKw5A2RecSksAbiy5cF8M",
  "key3": "32DWGQJRMa6fjTU53Y42eoC6reCJXacuAR683r6D4Y77v7wEyzdNEpM4bEhrAkqb5zA1nb1z4XKLhdEk6SkDPuy2",
  "key4": "3Gq65EjC6xDZXwoDD7VaniKtBsimZbQPPF7Bdp94NFczqtYHfzgvHPqWmSgkwnKNe2MAN5PnhGSGnXrWcWLY3nEa",
  "key5": "5MANqJvVcGbdA6NuLLej2tvhbjoj568yE8S9jsM9MEaHzKB2FCb7WWyH6qvWUqoj6B8VPQiaiepeFGDwQKthxFeu",
  "key6": "5g6KEBVTQVVrwFDP14wcXWZgKEyLxTDaRJCe6eBNTYRN4GZK5wffjizJU2aAALTnDcLiSHAFtwT4yTUbSUksdpVb",
  "key7": "5corZyqXZXwtvuC9aZ3VE1s1NifqUx1ZQNTA5YwzCohLkkaGWm4BenmDNDQvwWffyr8Pyo9f4YjV9aA5qD9aGJ4E",
  "key8": "LvCeYi1E4GLRTtp1wzgHV7TcXQjtLhwduNb5AAmRxeFHXk2Yq9KDycVk9jfrXw7UEDEnHkRDwGv6Pr92uWGgaH8",
  "key9": "5N8QirfZ5ZZkhP8swXCPPUJxZTPmF51CjS47uuxz6wXtDMk372LLrh4wf9YosZ56T2pCWujqaTVmevXoGdbfX3rt",
  "key10": "3aqTHND3f5MQL9dUtmFEosHRrgjKYGaer5HQcTC9ZgHkbSgTEgxvGYm9h6xBzQ674oEdpfiasvXQEfMpXpo18XEC",
  "key11": "4RH4veJg7FZj1kHe6i2mVMvugs8im2EFcUoNDMp6q3BwTw3eh9FXSmkvRFC8xeiyvsHcvpzpfM9c564yyPNwgCR9",
  "key12": "3qfWtVeMqwkpYKKchZ7J2GuXdfYpC1PScht9Sn1TCvwGqqvZDHjbTeKs55eSpgC2mABp2YP4f1JgUt3xyjXLJgAh",
  "key13": "xcUWbVoRijEN1CPg6pEg1bfUdSigkY5bLScE5BgvVsCUQu1T9pQWD5TJaoYS5Hznwy5uEMzpXbkvETq75AUyZFv",
  "key14": "2ZBpeZPM2NcL2Q42wArV1RVzPFWV2vPoQDHASoKZESNuUPo94T1syTfXAxEUh8ARAQktNDoP7nix2LQ1XFtFuvSz",
  "key15": "25bkbzNvSRfYMQRpmoJPmKHgPLMRDHF62HAeBDsEX7PYr9FvejZvHpziot5KP1aPGFFjQBiMwRWsAA4zVc4jbssh",
  "key16": "2hdFDAH8LXyBDnqJpNEGKyJJ1hRLJdGmbxE5FAQZEuDJUB1HvgRzWzZunDoxyxj4a9a3CQKTna51Yqb5x6PuhfqD",
  "key17": "4DXK9R4b5n3BB46asfcmBhJgL19NTFviqhypMgoKUJ1rtJ2oY3Ruhndfs8RxcmNZucGnDodsLQFfUAxSwL4BfkLw",
  "key18": "4G1p2gQPWfPtxzp3wSqCy1XKnkqCgpTbgR8s8wgxBRkp9hksfAqJ2xBdEwbBqCgnh3j4fKovhtRsuirqZ9kRiNwr",
  "key19": "5w8jKuftm2ntENeaJAzsyxvKo4nb49Sd77kGRYdGbXKYr8wNsRPk8XsJE1PV44kRQxuJ6XMQUugg8VFMaBH9VSB",
  "key20": "2AH1nHC7Qpc8uDb9Fe2NEJntLdYjQmj2ZjLCG5RcTPeQmypDBRGRiCK65QjMGkS8J8TPgbLDD6G2vq8o8cvEXHUK",
  "key21": "36krNWTvyybvTLRJ6HPrHQwWDPDjWBCLUYXi7TZNZBqe2Ezsb6bX46F3Vz5RtMBn9JXrbcCJB3vTkAdrCSwBKbL3",
  "key22": "4RfRQfDvNDkUkKAsxPt69K5LuQ8MrKbKE2rZFAPHtVV1GgWYL5sgZCvTiTFEeHveLz4qi12nkMhCSugggeucc91B",
  "key23": "4XtzwGFkFzeDcEEnLye2XZACVpuVrhTNFhJM9X8CuNodPsy2ytBa57ds6y9hukt1a6t9ja34is6GSsHyG6zNnBJC",
  "key24": "2XceQWrCQts5qMrDJTBUR5n49UWNbEgMgbzCcgiEyK8w9cLiu3L2pWDBTkqdyGG4PPa3eZoUsomCcyPjFTq1RyS7",
  "key25": "4rdW8fb3pF53d8mt53R1XGZgCiYJeiyM1isbwRJGnhbWGhwXAsYAHgfn9cN7Fcv5PW98NNHpWaCi4ngBu8u6f2uT",
  "key26": "35afnLxjurtDT715kaQm6JPTN3FG7AzrhR2EHChZifYCujmgeHEZ29aqf2821ipVqgDKy1aeccdn3WFKJ5prULes",
  "key27": "5xVArzwxn5ayE9AY93D1XfWtqLVWzArJa7XbwYe2YfkiSiMzb5v7ptuJsK2qC3w3pbYqzvug82iQxFSxRGdDAiGG",
  "key28": "5i5FbV5uZrjjci7MUW6Bn6hrWDa6xBkGaJUFhCrXZFbe7wsNu2aW25HtXukRApp4sHxJfgt2VM9GKRFtZjyyvf7Q",
  "key29": "66RStnq16emNjtRc8amx6CLp6EYeNegFpXE7999avi5bf7VURbRVvXKuwEX5JAWZjz3PS6yFE2wwZcSCWnDYYfza",
  "key30": "2Na5Eu34QmvDNfqAJUQBSJi3saaN8NAixZ9fcwXMRxYQTg1W9QyRGvxPusF5cXr8q65Bat7Zy4GwGaAUeSDgXX9G",
  "key31": "5wKPWzgZp1wGvWhSMAp49FjEZRkAsoSX6rbsaMTrpJg1aWAjhh13NBsnVTLDutvKtA6PAdDzrkigyY8eUTTxUUmc",
  "key32": "4LKSMbg6CJrJP4oxJbN85gCza8fNsjJmb1doyCYLa7XHY8NZ4ZWTfKpeJexTBRd6xffUdbhpvaFMCEqUAuXSSYCX",
  "key33": "5JUMrNfqxrQyrgkAfKfVVZAguHpDJ45p4BUxKYfXRzifUpphisWi1ytDNkLdSMizonF3UAzS4JxQwqYXAxyWPrb8",
  "key34": "3LuC9p5ZmQqCtsTzq6pbPWovA6TH7zcjhHag9XGzwA7xwHy1W3kiD3wX6SnTofLGY4udMf7UGdE6RJ9NvRmDPn1G",
  "key35": "5A3CZqKsBFyPA2CA18sLWSZxCd5Qxt6Qqt6HmvAAn7K2zkxxYACPDNSthRuBjRiz5LxprtHfKJKyLEGaU1FUZRYF",
  "key36": "KdPf7yAHMtiCCa6cQ1KRqu2Q2NWw9eXjdzVcDDPoNy9qeuU4nr4KTG5NGYLqmyJpNbsf56Cw9NJCDQkXYX7jDXS",
  "key37": "5PckB7LRE8qkDmKqd3SWyCDC5ugCYz33tumnQdvS2ESzkZ6RXhGDzfRGyoART8j9256wiXytndCpoj6A9sRAJKeL",
  "key38": "3LGkYJmqdR4QemiT2TF2usQ1EwcmKHYyj4acjSr3NwqKbHf2CG4w67TTdP3iXKo6YBGg2wmLcxPRTQF1SuPVVCsh",
  "key39": "3dgWv9uxyKonBZuzqHad33q9TepsDRTnJHviXpMgZcPMBXe9MqZPLzNvxJqviDuQ7X8yBBu63BmefWdm9a9F8e8C",
  "key40": "3QdKo2irDbtvRezVmrHLtRTf5QhkVaXHWb8G6KnYgNjB48WpcUCZjZ3utAbPEX61oKafBgnRZzxE4z6PZpHdJQg6",
  "key41": "4s4vrumJj1oi2s3REmoLdiuvnp4dPDWLGiFgr3d6qs6vFfVvABmBVwgR4GkGgykouaNmk1KUEBw6QCaaLKKNESzB",
  "key42": "R1aEk5iP8zdFQxjis6HTf2ES28SMhRYN5YSjAnbNhkTAdBUyDCwmbQFbQ1rpFrusUQ97q53eqiYfZMtjNgyuBfj",
  "key43": "3jpgYgDktPKVUg81P5BpErgP8uodwWp5ak7LWF8d9VSDaWMFr4ETgFfDA4FEQQ2XqULbS3bH49FssCP49sNKgLKU",
  "key44": "fdWB6kZC5besDbZvKtnR7yzoZ96ed3DphMc5EoqUnhWAnMQMPqeAvSAJJZCkigGgkwxfV2qEjmRFt2zhL8ViSFB",
  "key45": "XqU753fj65CiG2LY6TTx47ZNjceGxPeL9vJuLJCZSJVBuJ8h9k3eSYsxwvzKuTcY4JnMsvkJPyXMwVa6bgCM9xq",
  "key46": "5dt29aYmjQaEFSbLdL3PHfReiWu9F6WkRSbJy2gBzHEHBc8FZsBD2ooAYaMdR1rYyuwS4J5ukreZ1pPvypZuoHR1"
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
