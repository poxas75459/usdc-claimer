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
    "4ovvcrMxzzWxWJdhoLTR1yFEyCddphRBfcTaMQLHexC26cdhQYzeBjpYoVtkZxRstYCMR82VGMGYqtqK5TSgUmiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K95g3mW7SBTibsNwKSWwkqvegrNt8kkUBPgVPvCpsExubsLvERUzbhobq3ogJVDqk9FAnTUgHwj8Wjhx61WrHr",
  "key1": "2dsad3R1WLoysANxiAb1WvDujjgMNTxu3huVzg8SronL6ryEacdWK4Zh95StHGFRvNDQyrHdtCnxCQTRyWjJDEo4",
  "key2": "X3TN9kJc9KjayD5vAHA2y7xrAGYnwcD7senGbcx2jgZ5CPduckyzH77G1Y8sH4x6yA71ZsyE98rZtTjhTEpuKpp",
  "key3": "2swMhXjeooMALhDxJNiF5erbrRmZXbZ6ksqVzaw9aZsHJ8qwyn63jxn3bzV2ExH9zRLnHDQuqAwCqcmz44j8MR5e",
  "key4": "5VbqXiSj35RsPz5jzcgWgJ3zRg8h9Vi5WzMZC3p7aPpkTnzbR8e5N9jCwY23xY3e6XHMxPvta8pn4YKcMeWDY3X4",
  "key5": "3jqUUhtNDDqcxaWEcQKruL7X9Gx3zccNN7Qt23TicsqNunioBubfsnWrj2F1kh1a12eWXjWb5TVg5ZeN3pxMYpXo",
  "key6": "23wRH4FkLg3UzXhNgDXsg8nf3WgvdRY8BRyjynraZjxw1P66ReJRziF7PZeAHnmr1mjfskwaFqtV5cmTjm7VB4ar",
  "key7": "3nAeco1j19ptAvuTuc8tUcfZm8w4wYD5mzophMMcbnPrh9jVAkgoVUPSU7Jtbo1dSSGXJsBUvpycv7dHuXKdVbbM",
  "key8": "4nSzcncpC4krjsrrtYRFA6oGwS3fqLFfTe3Q83R4MDFAb8hWoswfDB6UR2KsHjujEXYk3HrKSwqRoACbSRVLky4b",
  "key9": "2QnUbnBJjhbmNBsKzpLUe4XJwGUyTcArPpxZneQGtAW28woYz8Bzvveb1Zj9tQG45zH5DHhZSHJsJj47KJK5JbgJ",
  "key10": "5erxLtnAAd5qgSbzygRKZtR3wqi52jJPKpmXfdUPXQC4VREqPPdY1eASY7NfQNesy8mnN5TU9a9dtJmjJeSKYZCz",
  "key11": "4p984nMFHScuiJ8kjNzPS8VR8V3p2mdSPgnTjQibhpLffZaa49xzoi5vMTuGg3WL9V6Q5qLUfgCe8BgAxbN2d3kV",
  "key12": "2VdCxErmnUeg62uo9tqsZ8hWf822qnueD8kD93gzQbddJ7mZ2Mmh8hHD2PJBYi1FfymDhNMeCoaKrepP3w91s7wC",
  "key13": "2MYm8e6J5cpKTv7H3TsTD2STfkVNQ4KSTHM9Uqp99kiZGuRLFCUqqGYuJ7nxDamWM49bgKyETNbVrqsZHGHh4c7k",
  "key14": "5VYTkkeHYzS71ekY1W1vhLpckTsG3m3NDKAjxBY5dNK54Xvo5ovM8NfSmAsbA3YaZq83tQVxobC1faQ1FoY2S94c",
  "key15": "3jN8afZrAUmDYxEf9Hi6Ae5eWGdukR45rMxY1KRQv71px7LG9x2JN5zc4UYXDXDTucUBSt6hG7P8JstyjBM22nc7",
  "key16": "2jMo2nmy8njd1pob1aGDbDsDYZ9H75wpPm3ZcBAB8GnEZut11acSaHcnE2uQ7XrKkNZ9Xhsp2Rn1kWqe9C2VcMfQ",
  "key17": "w1n4mKH3hS2tpqeguyd3dZSmxAetg9BxbezE2k9iycyEtsESf1zEw3km3Ehb3gZdNo7DhTWqiEg576npLbFXBj8",
  "key18": "4tRoLadDrHcW3AYJzDB2tyao5Ax3XjjPnzD2HxJhpRztTb5j5hVeN1kxXG5nPzjQhEUYL4cTtMiFhMPQ72CJvvv4",
  "key19": "2LjfndPKqBrJiygSq2UGrzkbyGw1iWAPF8wKCdnHW1NJ8Jfwg934VMQohiQxLdBUDSAv3xfDePR15RRcG2afrFoy",
  "key20": "kZDuEVKoBcQNqQKBUp5zSptbB6MHdZdrqoorKYNi3y5mzyiUqY55s7gaGaAwvJpmzWoMQ4Q9Yn8N78d7TUqbxaj",
  "key21": "4nkT74C6YMZg7UvhhdqGJiyKoQj3W9obzMnnNgDb8EEQ9v8L4wfBmsL9XHeqwbUV7S2QQwxV32jFMmLXKaRdHh3u",
  "key22": "5scZQCG4AwS8wpqun4VDpxCUKj49FRjW9GjnMTEopHSMhJKyyYXNLP8uoQypnKPQVLEq8q4o3DxATo2tA3FSb4iS",
  "key23": "33tgsJDVoPwVDzUBrPQsjzenboux3ehfzrLDxWBWKt291VcPx4GyNHw96FZonN49X36vxr3EZCLSwVQGGnYJkiaf",
  "key24": "4tMYY6sEiqzPVHwGJcjruLnSGSPQL223e8XL65BPPRp3rgyGCKmjvUj3Bizfy91E5k8RPRsgw52fTEp3iLknHHiq",
  "key25": "5KgFNe8Tgf6xqPyB8VTWUXdTKD73VRKvTMQ36LnsYgic6jGEowdGK4n5HAjE4xn7MNNgoebKPYn5tyFuYHzkycmz",
  "key26": "2d8YAf9WA3udRYstr3EtvHq7FE5n8i62R4gnMBf3ZFjnPVYmghxFY5QjPLHnJp1ygHXNZco6ugsUxUCcXoxLgnjM",
  "key27": "2p6GKVqcVLu7xrgWeze5dcEdB99BKYAKn45wRtZjmv7qDdkdQotJoNaq3AN4S82pex976CgfphrVU7B4pHQUCBdL",
  "key28": "VsZRYTdLNpN73yqHgGGxFFrHQuNSU7kSVmuSpeq1yn78dvGjiV42CqoHiymzNUG5HpgiToxCt7hKw8hrNubwUgU",
  "key29": "5hkD3vxCCyfMEz5dxMqECk1JLMPhE2N2PJiLZucWfx6S7U55nXxT3taACy4H1xmNsdfBgYQ7nBvw41TeWRE2aJon",
  "key30": "59LdaiWRxDtLonzwqmBtHDoVDwnhb7YRHpeUh65XX9UpstUs9qDQTQAQewsH8LCEk4MHK8EvEgco7r42fNhNbbU5",
  "key31": "5K3vrspyDCyE1nxFBGCkowuuHssuFDNjPbzs5TFvCF686ou9fZGLdh8Mm3zHhWYfzn314iyrYdEh9CWqLFKwBpoi",
  "key32": "4QenxhyqBMEmJrnT2Cz6xWdzR9nPtZt44GcWzEnnLrsN13dC4ATfkguE74LjtoHCM7YqVrAHNZLi9rup2FQEueeE",
  "key33": "3CTTodb6XMdSWiSiA4mdavLR9dGPJUXzrszuTxkEFhaAwdGS2Z5zZ2DCvWpQptSWcHf6WjXDu6dutXqNmU7iYwm3",
  "key34": "2riUramkfxRRK4yfRmvFRmLa4zpSm9X64ZmP1CA46ivgKSqhwh5ZtbEHqEUkPbQymsumcqRuLN6D6XGJSDBvhoVq",
  "key35": "ZWByD4xec3T5qGtW5SjBYqHXTPEHSV1cwA77PWDGx2zpunc5X39Twdp9KeKupSuvMgmHT2rR1tLJvXiJeE6jpjz",
  "key36": "47CK9f2QWcZWfbNyGJBfrWEEf6YKhRqMgoi538exxFVcyzT6om3cfigxJYjV7WAfgyWR9QQ4wGZPoPPvEeuZ8bvp",
  "key37": "vPAC1Abn7UzxzetFNpxCCAKjuqB7tMgSqYoyccz8MAUwxXirf7k6pRBTgu16kizdvqXheP6b4oQEWmbnXM2UM3W",
  "key38": "2TgYRnKwn7BEwvkXDTCsTh4kY4uGq9dL3ouMXyAjVxFEiVz1G69EGgLNkByGGwPErB9HYPnhZoHj1DEWsfdyFYFr",
  "key39": "23avUvjb7fM79XLx7Dcb8eMUtJG3qhDUcNwiFZRXtsoMVq4tu5D297S6mZwnQcw4F99WJ7uQ4Bpbbx3ztDbp5QNx",
  "key40": "2FaKF1uGpsDMkgUv9xpMGyNZoZSutQV3VPU7Ra7j14FYKS7PViSHGe4jMJaTGWhe112jUcK2Ht6PNCizo9UAgd6d",
  "key41": "6V7gabAAjTuCATxWXbo56UoMKNnGeiBX7mW9Jcx4t2LH2F122nQ2vwyaNmi9D53tKr1XfrWNoUBwAL93Kn4UfV4",
  "key42": "JtQ6Bwtw94bB7E9Rf92SJm2MLDhXWqccua5A9iB5RAa6qmnL3Eoi2DbWorwWmdVTnSGQL7XsvCWSVBUWeCCBGR4",
  "key43": "5qEWFa21Z5gh6emowYzM8xvUpSvY7383zYcMVpWgXZQpHssdbCmDJzs96WCAPqiW15QTNrdJZgZtL7HDZiS6s5oY",
  "key44": "2sTciUFtRCDVVBCnGHd9Q3xH5joxiuUS2UBAr7eKn8o7WWxQbrHXaBdN42ey5MTERMfFSBnB7p2eiu2rPdzgeYT3",
  "key45": "4iUpj1fY8NNvEUbggbQAxYvMyfFiqjYMHJWy6QVQhC4C3sMxncaVmP5SuUMy3RiZQPGvR7kJJ8ZgBGJqkxU4q5Sp",
  "key46": "TASbkgnvZHU4JMup4XNat9v6teEFWNSCcckU6FnnARuY8fu1BZDSd913W1U6FUyTfnRa9jg89U2MrWLVGvtSJNA",
  "key47": "4W2k28AZnY8rtDyxCKePsx8bV1oiuffNMagXPUP6ky2V9X7A99gAi9Jj7uXzJdNPsCdCaW7eN9BFTxvcus92AHAj",
  "key48": "34WPaUMh7RLzJ3S4rLZs8jASaTGxgeU3BY8zP159unWngHpzgTxP8LxAMwkd362CEfGgmMRRgDN1Zjtb38L9mn21"
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
