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
    "7Un2M7TPvdnePBqXduNbJAoDdRXC4YL6P1VdVT9kyEiS1GiMtNoUu6QvKLa9dfgXceqwuiGv3f7sgYL3sgYtKqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222uRgFywr4WgEbhJA7Mfxv3bkRaMN4ooJP6v9aar3EQQRDJ1rTAhenCTbTGjPSWdxvbqnzv5mbfqd4ui5KLdEQa",
  "key1": "3ULTBqKnUTFy47qdGoTwzFw2XADVwojcwEfVhKrKzQgc85ceE6pLwvNZ6VoCVY1u6ee6nw2cqhb5M6BdEm733Fkn",
  "key2": "dJYsNZcuevy4jZ5jrp9VFjQFZppDJ8fW7sPM68Jsa4wxwKzbFPp6T3RAKYGGc9eyqcWus2Wmc5wZ9gADuXzPpDC",
  "key3": "3R2z9hZtFfYvUhRe1jygVZktw6WA2ShRz9fin1nQ4EdfF1SZAD4u9QEWJA4i2KiY5HeyDdXRa3vXr5E996pRmtTJ",
  "key4": "2dwNFS8YqoumZzH5vu2tngcf96E9YgfEh83RJfCMHScECJujEZHhzohLgv6nb4BvD8vK68twQtzV4hMEWLZyiBjo",
  "key5": "NiwHNpwcRHtLASNgN7Wf2M97o4xgn1hL9uJHhWeSSbEKVdgaMPYLyL2qoBSNLU5DPgFZoqxmEmDQipGkSLqX9Lg",
  "key6": "5qMciw4fbjKsD4q1TZNPSQKbL1qG5eGMBU49pGvpExU2FJBrC2cAxufnc7CpqBDj29iwj9Li5g7gwDHawh8N36cj",
  "key7": "2d9BCBdYzPnTzRBs4K12sWP8eF8hZjUz4L8HjeBJMugdx3WxkrnCKKM81mLE969fe4mVnDh2GU5K9nXhEUmUxjL",
  "key8": "35sdoPzUptzNmzah1EpGEk2PNjfarbRgKj8eHFvFjwLzxNF6DQwBUyEiWYag3qB4H212RuePLLmjqFrDJfHBpF4N",
  "key9": "j8FW8wRWih2UNHZy6Udop5Q8Hnb3k6FhEobW5as2bDMCCQuq2MDdbTeX9ctcbvVhSQs4TaWs5fTYEA6zY3EP2bB",
  "key10": "3KnMGy2wnzej6KwH6GZK959h31jc4NXAY2AknKQJZTnymf7sDzTicgbfcznfJ4yV2EFJmG1dZT3zrbj57JheQfRn",
  "key11": "nJooxXJe51BnAuodj1cRjB7aGvYmW4NsV9M6YZRwkTPrxeVtWH3MQdDeKrPtsFfwAonzhfBdhf3gG6CXiLssEta",
  "key12": "4thii599GrQhYEPNVbxP1Bm3ThbYT1Szqn259MpeTmcyGJLhE6aQFwcVKVXmVKbzRjJwCNp6ZGtScQqxEvoYJXkr",
  "key13": "NuCv8fs5WMVkZT1fJp96XZWHchw3s65Ny9HyGFSMbtFEpE62EfgGpMpchWnkXTMMhKZL4jBfJX7GfeZXX9VF4nj",
  "key14": "4D4kiRPQ3qts1pjqFJQxQykRpqriSLXG3dBCBeHHRv95QibXLPrYV9VKvuECZbmbfnMAh8JoDhUU6NGMcqfRxFSo",
  "key15": "NXVzSjQ4J8iPjfreVttvdCNYFeYUd1eeH388avUTspwHZDWHuzj4HCJLAJuJgfAPBXaymTtVSrSx8PnmsV2nSrT",
  "key16": "37mnsJFrS6WGiq4fw1KmQXQoPHAnE8pZGDerfKTxYviuTm1xuLcneKMSJzwcvnvgZMkEiw4hTTQh1t1YdCmH3LAs",
  "key17": "5fnMH4Vt79DddUXA31sGkNCzB4ucfYZnmoiaiy8yn8pn6HLwrh4nfqujbbrL5ijMWze5th8ToZhKftovxYV27k8W",
  "key18": "UXcuiXw2q9tsHz89TqajTrnnF3LVduprvxKNGYh8ytj38sYDtf8txb4pzFjhWLMYVTk8ZacxJw6ENNnfbn9a3uS",
  "key19": "g8tbP7Nt6wKnp1WbviVdLz4agFLgBzmW4m9RuHEfzuNvgoGCS9gnyyJTRqYQ7i6UTySX5Sc3nRm4EecNqvu7MZi",
  "key20": "4qq6jpD9tiEEwxQn7JLjBbnFecMg9kHaGJR6aJxE9btaBa84MRtCvuiaJZRC8dNV2QJ2UnG5nZobUFfXdsLxJqsi",
  "key21": "4nu9BrKTS9wXzQavqzXXj1ybmxkaxfWTSps1u3zKJ6dkRPvQGw6x7uf3urnZTQcdDaqttRBkbhBQHsTww4vgrFot",
  "key22": "5qrq9Tz7JWxgewVJmP6fM462pN4g7A1H36DJMyPw6hCmkPS7vuKL57DG7TfJQsv6uywdJvUyRbpaPFsXZNWiEQUL",
  "key23": "5CnDDncy2XKBbU1KsPsvTswXNzX6WrCtvesjxVaedD5LwF9Q23ewmQ7ii71A4xumoJEPShffAtJdxnzoTNtcxoRs",
  "key24": "3zniVrmXvXkrQWCQTiTEzKufjqvztLodh4PeyrA8xWJyFq3X5J31KuxV9kGZ8dedKZL5upJ6k1js6tCxvy6LTE8",
  "key25": "jTX7LTEfv9Y4wPocVmDhn8g8NzeQdFauCruNq2eAqkp8p6VgA1BJ25wEQcmdSSLQF49u2zbMyi8apqMmjEgTzde",
  "key26": "5GnL5iXtZ9tCXL1QGv22nKyzE6VcvQ4bmFdaaVSRg2EEBoXxBGTfDfaSMfGBjUMBxGryDkWbQZVZMRniQn3CNKsj",
  "key27": "cqFbdZcaXnFLPiiPyfdZRZkuKUbQJyPLGkHpSqrkiWxLxLBeMYkZZr1kmTxDCRfpKF7HTNZGaiEBo5MFLqAMZeY",
  "key28": "3LvvC2KiY44MdkNeALdiLkdKq2GoLzhTgK5DzwiSYyXJx8EkuRyzqriBUrcPRNTGK1d5HwTmsqRy7jssQNbTqxtv",
  "key29": "4HPePM8GFmago2WJ2mtZfMYKmJ6GhwZjtvFohRXomUG4WFBw6z3vN7tXc8uPNLxe11ZnosgDqbnHGf5NMBcPBJ3z",
  "key30": "8tcVWNBjbg271GQ7sNrhf1osGeKcUrbxMXYTJwd49CY5RnYqQP5zkdY9EmW21ssAL7oQC1HJQFht3rN2anPts7i",
  "key31": "HMaRmBrLrr31Umd7E4iCogMXPt71vUsidzVns62CjoNGzH33ueWgDaoZDSQh4x1s61hFxbapsu7a9DzuPGLhWJG",
  "key32": "3Qn1NiVTK78MDV9cPdDyro7iWWAi4yEtUDXFz2FJvym6W27p8qyhkHGYkjkbHNmFp8uMoDuAAVEQdNkNkzw3AMRd",
  "key33": "4GsQ8xSfeyFEQbLcV6eZvEZSPepXK8kwdaGUX7wcihaDCKuz8g7pGzZVW76CsvE8kN4nhrUSF91mYtk1oCwfpNyz",
  "key34": "24i39YvyLuuGuB83jsgxYZKCCrmjjrtWJtW4Mh1eonVEaQSCySSeqy3QUi1CJAw4bPgqJVyrBRswPTSp2wEy58vQ",
  "key35": "3WLxeW1Fahi58LuAhawbwc1WjvNinPCC1hueV1g4293g7axKfM6ZKu4dPDqCeRQ3pHBB52HD3bvfqos7wbQ5MHpw",
  "key36": "5opP2nHmuBDgkeEQRdsuFiTdpApDRZFJzXxoyaZM4tj6Fmtoc9gb667bXezs3XejvgBe46vodPiJBmdAEekmgLHK",
  "key37": "2GbQvo8Cyp8ftFKGc3ZGqM49oK8wvqwXfedRR7ABEmmBt3GR4mFTcKapqm1V5EJ7wC6eKRpJPEnoBPcKoESvjEJm",
  "key38": "4Cr1oMeYZwCNhRW5MT6pctWTaKyiFDT8mBYJdtDtBy6xo7uzeqTeUZfna3mqgKUf9jeMVoxBTDFvA1ZRY8Y7mNkT",
  "key39": "3Armx71Y1VqwZawicHVgKmhf45h43P17nRp5UYEoQsdXcsEEQ1A2ARJdLuUak3R86ZLvV1dEKkKu6qTdNLNG7XaA",
  "key40": "5ZYrKS5kAsBsiC6HgXL5G6Esr4cnVrba4NKzk9kVX1rUZMfBVRtjhwkbXLeHq8WPrU1zbwtyBEj1mWM9McE27F2V",
  "key41": "3rgGUvnHbM2i1D7GZVvCmkDg8q5NPiUQGM2P4yURv6fg11haAbxdsK9Mpy1mzuE8qckAXqqsWeMivv7mHzaPaBKD",
  "key42": "57asewjYsmDrFKk8winon9DspY7jvL3nXMNfPm81nHgstWjowpmSqyY88ixx68QNouDUtN11tTAcaWHRPkdavJKQ",
  "key43": "2NYkvf72XyJVteg7NspCprP7gahVBVcBUb1fQDFWbLFMi3KXKmWqZCfFcDQtiHr1tm76PX9sXXdkZ1VpKuhz1JcS",
  "key44": "428yhVV7N7bjPeb63QEfzhQmti5pcyEGYDnYifwyhsWvmowh2E81yJUFz4oEXmQUpFQnmQi28mNfU4ZJRVPpqJh7"
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
