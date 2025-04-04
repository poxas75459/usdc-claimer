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
    "51JRaEYk8h1hs3GaWSPi22WHXmE1XYtNTrHzgV4YawoyNN1khmvJ6s9fcpFMzhPnHaiHv8fF7zUe8Emr8Vk8nMf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ydwJMa2FXSw2egBqR7xL54sXby2og9EvYREqYyNyHs9ta9PmqEkzKYf2DmpgAhrnjRc6zsmME9HUuy2BFnvD47",
  "key1": "22bSYHUi1nNYTYjQf121GXCcF6xnzB1v3GQ37gGP5HEeBSuxftuyPka1dsRkoesonJB9yvardFUpFzThz79xg8Fn",
  "key2": "2PJXjufeXYe1rvegLcJLEvAwFWLB6qaKrdaesLRkGTHSj7krEqrdEZ9p8GYuNkcAg1J7pShoqpvAb1RCrsbonMEp",
  "key3": "4fkC4aw8QkPqD6Fb3SAJgiaoqTNUTEgsc3jJHz4bes4Gky8xLAvYQBNFDbBbeB7ZMvggRCaRd886q56G9pitByWo",
  "key4": "3UDJWYLkBdpFpNTiJJEafZ9wq8R4zzH5NB4ZJcaUkRw2oWfq4rLy47tG4M7zsxhYQnCN3TTcpyJZSDKAnp9HMmog",
  "key5": "2Vt12qaQdV8Vi4FEvcTBpt6jnEUyPEZHQeohFV6kcLQo4jciErAxife4LxP3FXvysT84Ljh1YuBiCA5DDmwkNTEm",
  "key6": "4owFXqZZ6Rk2wE1dNPuLsoGcHwrMHht6LMMRB5KFRCxhVAuZPwUeDkQBh9aLhtox5aWAam5NQ6nSoGoTpeuYB55D",
  "key7": "9gNLBqpVvxyzyKAL5oBhASnXMzrud5BnhtoSWyu3HvwaRNewYvrZiGsMJFwYtN7wLamgo7ZKxqh3vtAKc444T2n",
  "key8": "3ZYTTkZDA5ESxREBzw3gmNs5ivR7SQsBuzx3acGRTKHSTSGbmWyHjvABkWLHUJTNP8Yz1q3SMMtYzMYe1tcaLB4b",
  "key9": "3qY3Y2BrhvcR1JdcxgsXmajrbkQdi76oaXj3Zg4ALRqvfiExwN5DqRZBiC46b6cAP1NurDX3AgkXjiUBpfHF5QvM",
  "key10": "2atB5ouaAvqgokRRWhvjF7EedNq6wnxArNy9hA7aB6NHYCfKEzkrNpWsWZngBFFFEg76bm7ESVbhVCoXJV1bKT6b",
  "key11": "V7RdNbgg16UcXPSp8s4kwBP3zMYhktyEgybryUiCK5x7JuxWd1quYEc14SWAaH7PT1g6bg7vSQMKKGBYwEcgu2M",
  "key12": "4FkbJNGUuyugeC11Hvu527brkaK8dvnYa29G2qKuqQCne6BXfyhWTs2RsM8TWJfnhqpoD62Z8h2b1cKQhL4rwNux",
  "key13": "58jnvvn7jjX6amwenSj8NaXPHRKrkLjAquhEAZJ4UXavZcwA1gkvXMBfQP6ccgvBJ44FwPAFP1TG711p3XGesseM",
  "key14": "4jeFAZrpkK5GRDtfS7UJ25Fkwg7UEKqnKzG2V9hdLf1KV16ZeXvWD6MYSmdsrvSCDqKK558jr1TvgUsRVLERk7Yn",
  "key15": "4QQqpDunrVwLva8NgJrmxQGwQVeAmust9M2uC19Fw4HVaYxQ9CwuzxLGE22LFm5uFrHAKmBZE9CxyxdicAjVmM3g",
  "key16": "3e4R2jUdSCN1zXAe2uzBqkA2s1Yn4sYDyzL6tWwCn5xxUSeZcC1t6qPtq6sknPBTMELxFYAQWNwHESqvUSTAwm7t",
  "key17": "46pjEUEVB5N4dhcoNEnYLrDhdTs1yYXwTt9Yf6x2n9XPE2JA5hWzoQQb7BhbJ86aaMdAN1W9GJVi5rN4X7cJf8UY",
  "key18": "2PxfgpL7rc3NqsnENCvY7MLDMWr5c4QwpxyHKJKz4WFjLVmcqjKUWEiVT7zp1a9GTFBRmsJUBFLULw2eizBzYA5V",
  "key19": "2Hkh3A15UMf8jnF5h9obD62VKqG69pUZc3hAUqNy1bDwpCEmQb61XeBXbZW5CnZqAEQMjyfFJdtuYyVRVSa4YE8H",
  "key20": "3CjjmfdRqdEAarcgkfrFkegTeRSS4xjLkyNgTsNyoxg4Tq1ue9cPzEDaWaNAevXi77CevLGqpyARLA6uXQ1Bzzqa",
  "key21": "36EV5Br6rVDk4J4zERst7Ek7hrJNhLJEqPpLfN9wJDsvpRENJkpG47wZQsgk3s2vL6vhgG5nDVdXz1HFh74cGmSv",
  "key22": "2U7Wpv5zaX8kyXkE12vGmJfxsCbL9iXMeMkhe9h3CiZYLJLnrjSbu1vA5cTBsbRReEMn6ZyNqzQMmgT2ePMBovjE",
  "key23": "H1aLkeEJ7NB7su3oiqpCYjFUVJUfydhdezWNkJ4YKhWzNw6EbhmvyXyhgC8bE59dM2kLj1PBrhiqszg3MWDBZZv",
  "key24": "abRFuYzoZcdPN6fawcVN4nrPrcv5dArF92scBKcmuPjfdMezEgRErhmk9exB8WN3ho2YQTCMXAvea3TAc72oyj1",
  "key25": "4BAujgb6bb1b8GWLB2sipqoSLZag3GLB5AoDM9CR2U7b4bEJTZf3MzjutzjNPPrLPJd1DKZhANmc4BoofKFWNuJe",
  "key26": "32WXtmU8wgBJMEH88EGTi2HUWRLWb8YUSG42txdYT8CLxGVcrquK9WC3ktLwf3yV5J6WFryFkW2Lj7qsetyGyRML",
  "key27": "5KCXL8icEX6mpxKxJhQrW4Yovi2gY5df3ddCh214LwHKgvmiRLo3Uf8VkqMqn5wGbH7Vf7uaLfACVdqSHYmHDo8F",
  "key28": "4fmzp8FoFbwMZk2ATLc4uoaMq9xTovgG3XvbjDHS4uSNy6HKHwQzWA5Cn8e7agzXy5yQoSFjuYzxb4GGz1WJpkhb",
  "key29": "5cnaf1DnLsPSmmRbQZvVJok2pDTzuNsT6KEEryDRgaaVvH4ThryiTghpQwZUiQ52vuXEKrkFckvrMuYBPi32dfBJ",
  "key30": "1LnzsDqVQZH4ahXwHZh9V2moXxVq6yvCr4EvG7q83PDeChfoHT9zkkUjGzqXXq4dTw8cMVVhtvrppieaJ16vAUA",
  "key31": "3EqFRqwey19KW9EmWbw9BGNBu6x7fNYA4oCYQPCEoEPNsNZnyMC9L2m2uhZZW1aRm9s9DruJghexJxoKoe1VWRox",
  "key32": "bPmFM3XTSbnAA6ted3Amcae3SAJJsEfBQtCttRdiM1jWio8nkx5qGfNRm1RWyow1B1LRwNF6cBRmsn6hYApSuiW",
  "key33": "211SRbxFx1zicD19DRLx6r5okMidauQhPMMfxBDeTvm48Hc2Q4XGAJWu6soB7kXSjyR76Y5VXr5FcmkQKdm1RgWV",
  "key34": "2XNv1yz6c2Tey25CtFPe292nKPpyUYnNMGzdvsxqkQ2LGkpPDna7M7RMto9hDYTGeRuiByQhdgUfrCA3qHhEyr1o",
  "key35": "598NqjkRyNQccF3J3pQhVxk5W92bqtSP6Vw1BLQHiub7XK2H5U2ZUxPVPjrFVnD3rWBM7Jhj1fX8D9pwJVaqVVp7"
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
