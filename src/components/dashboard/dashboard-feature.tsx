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
    "2yoknv3Vy3Jr4TFntn5WCCeAi8QDZcPNuarBXjNNg4pWn1rPFeNeqaWYYt5HEjMDicfApmnjnPmWkdbqoPGJ9vdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxFBWgvwWoCGB8EMyL9SWwTqYvdTNtJJsTnhYNLqjt56nKkQsJSUREEg5KKQHf87wmNTbsuGANm2jEQNuu7cppA",
  "key1": "4zd7b58V1oyotXikpNJDA2gW9GLPkeudTQSRi7fV23Qmh2ELrrGm8gcFyq3yycUfMp7b7VWWJKpR93Ud8yxmbUXi",
  "key2": "KzAeETD2i7UJWynj4t7f69VB9J6uK9DjccQzYUCa2sk9bQ7TpHUfKKhxTBuZ1sXGd8U6eTCr6hL7xs8r6LaALss",
  "key3": "2h7o9Z8QgXH5JiRo2PGuhaUr1CymRsekpJbGsPVM5Td68PEWBTprPgW8C6NqjyxAkDYi56aoUA7bxxKejnRserth",
  "key4": "2jGmvHvGLBB4dm6DSr8BpnDzbtPjesNJJACQbgCX3U9SuLqLgA5sFtB2yRNH77SDqgG6GGoUPfGEth8neeCBmmk5",
  "key5": "3jcRMkU4X8ceLSs3P6wK1Y5dZRFZHcsXE31J9pMyBEKPYoNszm4mQdKAdK9P7b4rvd2GhmqHGrFr9NAfJN7s2jAm",
  "key6": "5Nc8qwk7KNvtC8C8PSr71K2ytbBNFfXayfWXzJ9q8hotq8P3xfobTyxE4Pm7UHv4s46V5Xxb2Dw3VQz6bj5dWeLK",
  "key7": "62yF4DgUuoNi1NDpiAYo7gVndyB8T7tcHbSCzLKnYAfiwJ5D36Cw2C2BQPHhi4eew7xJnh5xFwAXRnbgVeyTrYTk",
  "key8": "2s51oRQsnGshchGAr6PznvXBn5ytu8b5UPUsjHLQ84xtbDAosfWEDHfrcgfrdHmJd29aKpaNwB8UmPLFMU6y44g",
  "key9": "8kMWhhkqe5184HHHsKcwtM6iAJBP8rJmrzhEkee5Z8LtarGQxeR2aQfFy7uLqECWxYFYbmg7tfAdrk6j27w1qGy",
  "key10": "2NHuP8SobAZwueJup8ExShPbsjLkgZbgp3LVWYGbkRCw9bHAEEj3zLf3sA9nbpVbzoNGX2B8WxWKiJh8EQh1V7fN",
  "key11": "DUDY6vynuascQ6sC6SpPV9AfcyXp51w11bAYb2xhA88g2yN5Y1T4QJVzzvc4q99CJPBTdEp6MuQUzVx4dXZMgtT",
  "key12": "5N8dEtLtac8WUUG9cVYepbDARg2FA13iy4BHgwkhLdinpgkv76pWVJjH61wvDkLRvf1t377QkRa2EDTAdfEPcU5w",
  "key13": "48wJL2XqQK75PyermdR1i4xn1ppEBwF12i4hZqedwGp1w8JGws9qw41HG7o16kD7GgkySgc8ZSrpd3evGGiXXdci",
  "key14": "vw2yQNLAmnsiwE1aHwFTo9A2Wzvat3i4FeZhA5taBBnZ2SXND2TnQMBy5GoRidGUEQ9pFau6C1BC49UwjHB7xZo",
  "key15": "2C3gmKQici1b1bo4FzvFn9ydpJEpMqBYGrDoTykrxP6oidMm5wyf7SQEgvNDFfMJi8Mp78FXnd2ThqAjKmkYjjEF",
  "key16": "4FR4WWBjmaBGoTrjM7iB4VFAkGvj12YtBH6L5yPcpwrN5o9rAh16KmbYZF1hg9LoYUiipzQHgzyq3wEc35Q76KW8",
  "key17": "3wrWdMAsxU8tainEhKi9GUQMB1GRXcUZs3sMnVUUtwm5nZouCW8wh86Kq3pf64Qsm9fLXoKq5VcnHpB9W9eVUVKj",
  "key18": "4b8thPu5p1zJDmWCnk7e5eqXKDPpyYNLQSERh91iDU3qYAtFpMLqw4CuZXGsv2tc1ZCfFLYop6vk2knmPTpmi9ot",
  "key19": "5E6APExc8rYcxH1ujWr7turjWT21uiEmNMDmfKiPAELwG8TA3dC9RUjtfFYYp1tzMjQzi4nUJqpJpwkN8BTNXXjs",
  "key20": "4ctmeSShSC3a2k1Yj7pCK7zWUyRQtiJaSLyq5bjggSL6pgcGQXdNZMLCGdg8DShWLryp5vQZGJ64waS8DnrQztck",
  "key21": "4K4JJUNKV2jNExfhuJ3y2zhy39XW6o7ZJFsdSKSvofcjfn4EPKqi2QBZ5LAhd1AipHmZ591kVtGq8XWqaCkUPL3f",
  "key22": "3VcW6wN3fuyY38C3rQvzmSc2avfCtfqwiAnYaV7xkuFoPbsKteaXicG6sX56rm4PC6FbhiCwm4e9dhZy7Fq9hy8d",
  "key23": "4b2rspAEVNZqwq9bvxZK8bGeLT49AbvYegGvEm9hVnSLZTKELa9LcPcZV8FfTuUkFs2qZn2PgUiXpktDKookYDok",
  "key24": "wY5b9YfuDXhi5emBjGwrrrMiN33qnEvedL6wUGerFBvdnWgUpvSfKnrs7VaxNJ6aE1LgmH9gkQfnA7mAFsCx99G",
  "key25": "8uz56AtVEAbQ5SSDzq15QgxmvjtjKQ37jGQY1NWUQBYd2JLGCq3KrDPZopiw52W5YmnEnWEREgWh4MLivqcZizH",
  "key26": "dSjdDMn6NS2Zj7UEaTHWqFhN534UT7eTJ1BtbzBuf9BK74jdt8jsRghxT8giBGxtRhEou5UeWVYzYGkHnMybx9Z",
  "key27": "5kWzXDqKQpqjVfUDtWQ3DEi1xFZiccQjx7kQMnC37ZqNjug53anHuBaRjMhJweagnpaPEHy4manSFZEr47NBYUFE",
  "key28": "5HdaaUB7gts7f8QiztSkfvMaNSs3r2fGmqtei22pR2Gwtm5CinWL3KH69826UBr5GFoEHtj8pTobyWN3Eu6wrpFu",
  "key29": "3NjGxUAGZvACf1o4A5oJCy7G4RZyt5ay62b1vXGU2eDvRmn2PmguWMmVGKkQA4usCAwqe9fRnY11roFUMnF3nVDc",
  "key30": "2Lyme528WuxDHNxszWHxv6StrNBSQUV2Hd6dLmcyyk6taUzRxLUn6UdTMXPHtjFYVDgfeM8Lb2eVrd7mdBLcatLi",
  "key31": "4WtYYoDJg3EsV6jeuWkdJhuQZnd7foKbDAobdne9KSvWiSqv2GVPrUPbsQ1bRfHpdGng8h6fqZmEszshyojRqpBB",
  "key32": "LYLmmySpE5ed25P68Nn4rrdc8y9MaL8KuPaC4YdfgK3H8pLr7HV3P3iDAXqDjaXGjrqENcYFK44aqQ7yHesHPnm",
  "key33": "5CEK5NQGMoS7GLRzjxcE8hyr8fdaUksyAd6c8vSg2xt288rBhFyGm6uGKnkqFSoZEJeWCNvnR1ok47mhWqBktKyV",
  "key34": "58BEq8jPJZFMu8gXNEAG5PzEJafNwfBjXVc99HWmcKzUU6BNerAJjSFHL1dP2z8oKfrCfz9kYVAqGnoejTmZVkeH"
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
