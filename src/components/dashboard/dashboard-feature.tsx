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
    "5Gb7HSjCfyfFEgiQRCrMgz1Fm8XV6DxAM1bUfFnXkSemGtgHiJiu69jQKqXuDng1PB8u19QsroGJnk7k1QqhU78g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hs37epDLrfriyrjuxGzEwJ5dggu73TTHJBUkxNgGEcSSh7S3xjb8M9Fe2mutDoUBF78oh9zgRMCrmhMBncTe6D",
  "key1": "4Hwm9S3utRrfUrdF42rWtvSgoYQZ2CBrznfXQrishwE49iaGpv8J7VrVEUgvfq1uvGBkwxVwZLM69C7N6cMjTkjZ",
  "key2": "4R59jTt2z3VNHQ8WcDtzeMLKafNNKRccDJD6UsSbLcHQL1rHUDDj2kroEjjH4NSZbzagr4JpRrEtx2RStW5fSDef",
  "key3": "4zy9F7v8d2HxkK6a9huJanFvm2Cqt6sTCiepyPepns1UKMbPPTGVEoiEjCY51cRnsFFiXgwb6uYqHZmFiefWgjqU",
  "key4": "5H8BYHnEKKjDy9u4GGvDU9mHphYMd72QiXZEocgUNg2nsHSszWy6P18zKmt9TRk6tymj1ekzry9kdEStsXBgqgrx",
  "key5": "5GG2Rj6JGraoGwkAwdJJMTQJTC32cTnhepuGa7NAS368uwPaUDXZTBHNFMxLc6Juu8SuWR58JSGh8FzXjNYgk51a",
  "key6": "55haupsEshcVYxhBrsnoJ4f8WK7znBvykzkRCGQA8gxMpWhXpBxpQgg1dhEdJN4uoS77Ffx8RDpgJ5C4FS3LKER9",
  "key7": "3npjJEqXc2GhpkhBUJhGJigoGtfNfEmRKLvPFebgLzWG5mScUPa11mzs6uN4kUK8iDLcVd4nYmtuQabjpZnb7omf",
  "key8": "3jWdGxDnPjCyyBBdXAUgwQXW8RrCZMfixQc3Ta7PRSXuLsv7p2WWjHgwxdyrVRqNAChk71AW9528YSePr3HtwQtF",
  "key9": "3W6bsgYCgAYz15ahcfjj3gtX7JBFV4i9sB751y1rabczCZsspWyoR4ZpXKKzassY55KKoE48uTCK71J8Aaroasoh",
  "key10": "4tCa7W8YBB8FdV5ssmJ2u5PzjnS7PXuun8s8BKiksJ4twsPKmQUjtsrCxry3vgF4touYsEsraGJ6fj4XsYpZxzgC",
  "key11": "Mu1LKGMN3aRtafFzCK7van6BBrWBb6UdUfV3cNgPoowtHkvjpNXg3NB3CSzrqPZrCauY4xno6w11WnBEwDsLqQy",
  "key12": "5vDSFWe27DwDfDmzMd45w6FWvAMja4zmej6CKMMrmHg5ku54p8XReEZbx2T3nbQaEQA3aLB7uKAhfXX789fdkk55",
  "key13": "4SauNXDeJJwxDgyqH8ZMEfUp3XZjKwKBpkA4Cr18V2dmpFpPAgZGek2Pvxp8H3feCJ3SCW1yZcuaEdLBhMpukvCS",
  "key14": "2ucThgjXuCjfmnvWhpUbJrYjvuA5j1kL56dDQ7RA624k1TSp4J7gjPVLqwtigmkk3cFEPymwstpWC8LNcrm5maxh",
  "key15": "2KqzcPG7o6YSCaHgwy95whVordoFLXoknWWRKNvzKDR3QLjfAFa5wm8QPF1nS4pQzruvyjTqybk8vWvDFuaS6CZX",
  "key16": "cbTTMVaTYPLSDTZCttgaMdf9zsYMw8joQEtcQyvfgC1hX5uQ4tyA9UpbfLEkWf8wRc492MKord19kWLMR7eySbq",
  "key17": "565HMLx3smLkr8AGjrXZFHY4QoYBV9s5uwBq2tYg5FcqQS7DQRvtzhRf7wRTPqFBHLNbr6b9tdVQSgBU3hHvVWe",
  "key18": "VAEWTgifVpzo147voKiVA28VSen14rP4Wb4cZWLCvwHNMV9Jvtt8wa7Nwrr1you7g1DJvFLzWJ8eAQjHPCgTXsM",
  "key19": "2JBsuDuMfRtW4KCuJ7KbwnkimAmYRW5ymbPbS1ntd8tYZdsDFGeGCHX7tyE627GhgDqiySFxUF3LnUhkZLVb1zzB",
  "key20": "2nUiYFh8uMn5RYmswVz8Zu3eyParxCZCUJNubH7jWXPAJvK91rtGeRBxR8QNfRg48Hq4apvx2FaXj9HQyA8eTisa",
  "key21": "33coH5d9NKB7MuSs7braKbYxn2RmLZbE58WgQSTMmrb3oUUMTDtwZaDRSaPRHeZDwnSML5r9aPgHftrdXhcpfyN4",
  "key22": "sdnENuYw6J8gBfqkdETt8WvpP6T7rhnALakUWVfRggX1gdrkYB1buDisyoHwqVi17quxuNBRjSHt1L23Vzrai59",
  "key23": "yuqj6u3oKC9FbD2Gi7Gr4ASSnrGFLo2iGixh4zEFe3GD7ChwfwehE2uXKbPg41nkckksodNs4BA8MjjAD1XDNNh",
  "key24": "63R3CRbcPKQmLBHPF7YgfcsuU6VKkeg6eLg4rEYrgaHN5upoN8McQtzQLeD53BkUj8Hz545eEFAMFHqDYr21EL7u",
  "key25": "5UYvhA7jW8Qxib9VhqaRthiXsjjceqe7gkm9r6Awny3vbfqGhREyqqNcWjUopjnC7M9esuns3wGTFKGY8iSxTZWQ",
  "key26": "3UAsTJ2bfQNLbd33UYvqgQb3AtX3Bi57gbVfs1Q2hN7eHsSf4YC6CaVtXFEn3rQjNEMNm8WCBx5Lwm57ZAVEFmNb",
  "key27": "1WYne9aQEGc2HWvG8GdoyNWPtgvwqA5wb8M2H513ADuUjZoPC4ZzQB43kbDrc1t5C7izm2JffGNpZaNHsBceB7i",
  "key28": "3e8pMr7UZ3471dvDRwpMdqHoFUHaNzPvV51V5wdTbDZP3HZPieVHZf728rLXcFsmw1kNwuy7Q2hNShEYFXDAGL5T",
  "key29": "4P7jaKjT8jSuWGB32UUDpWf3rQGjKVpXQZPFa95uXy7HZ6tVCDdwxHqA2iQLp8aJ18AcPeREKfTAR6MdGp6yZwvG",
  "key30": "582VTYbYKxZWYEYJw3VpHFSUQzM3RmvtttSLfsFGDN2KvZkhCFRWRNnN9iL9YWn2NnvjhfP2RByGJHwPmBcrncez",
  "key31": "mvbb5KkX4HxJw1hBBtPh52s7MdKQUWqSFUEs2GJ8Jq3NdCxX9RHHBG6hCgAh29KsbFv3XZH8gLLd2m11doWfTc8",
  "key32": "9C8XPhBe2y2C7ZkM8EeQ2sttba987zPEEXKYBYCBTFQbssArRWp18nF5QKymkhjWv6NqnVpi2yiGShoBMN5rZsU",
  "key33": "5vRKjLqmtaAUwQkUJm46aiJXkk9qaWMM38ZDu7VdrhJSfxdvXYahG8bZbvTaTtXx4yn76v9Lz9fa8Fijq7eAi6FN",
  "key34": "5HnWqis7EHjG8kke1sUjcoTfw171QrHRz3i8wBgSmHM5kbo2M8qktxPqW8AbuPeBUxJhkBR7QqpS4oj6ThGfDPGL",
  "key35": "592ZquXVDXiJ2pzDePesn6t4WSTUUMtLsjyyskHdydGCoEAFmA7yMwCYPDTydAaLqhM9zV3vGoLaDhGevB4zBwcV",
  "key36": "4BKahYxBUUDKnvtL48Jm7Bk1kj4k2gCvrUz4jcZ7dVgDvvYe9AtLzqopYacrEodeXpjQmNd38GH38yd5w7BAT4Cx",
  "key37": "5suTGeL95afpWw2CFn7AkXFckat7eAqTEUPkaybirQv44A17PT8UjycD89wq2w1MNDf3VWDDkdbzqigrJUzU2PsC",
  "key38": "2VAHN6adhy28e66MHQqrCGi3ji1uYghqaEt2XAtWtuJu3ivHmzxpCrjHMh3CVok1aa9XZihDdcPspCxm72WeuFsK",
  "key39": "612sM7dixFHeQDTKTyQEdsLRkafEztPqHiFLZ8NaBopspq36JxbxLZ44TfFcMXFfQDAjjNESrWPRYNZyVd2mfBf6",
  "key40": "5LetXT2GGqzF1EVWeHZYRZAkwiXw4Kk7LTjMAuPmbGtowbDSpuswupQj8d3BSd4yLTE3iZK6NkJ9qtnZwfqwoXQS",
  "key41": "2JM6HMgQZ4zVhPDb4yq8xPfEeGis5DRW8U99eC14L4SNc7AHvJzhd355DXhVYM7kN8JAdrzDUJsMKhqTwSJk1GyX",
  "key42": "4JFUhbSmmXJ6m8AsX2Gsz1seMvq4A5HakTXkWmXg6XrAC4PdNsf2SKLqpcz9h6YSytTGoBaPQ7jAowshUV5ix5eH",
  "key43": "3FrGJdQVma9rJ2nfo6bWtTsL5683dqsJoYKd7vKE1g7yCPMXfRBENUdcwSuiTQrgkwhRSpdnjLwkEK94nmmc2ddo",
  "key44": "45tfZau8tvjB2ZVJ2At6cEUtXPWawi9PEb1LBJZiA6u2EJ7aiWZVV36tw77F6AJUSerLcBimeCcW3EWVatMk3VYg",
  "key45": "2gDoaqGeUythtYEmjwJCLR3vQMvBn2NeBCzpSKn7iQ9hDtQEerarGrsHmfSJbdtnPjVEZotGWtYpSDsajYcPEweB",
  "key46": "2nAuh152GEPM2cvdXuCM1P4f5eNxtM8wm2RYGHq24UYxtP1bWVn2u7oCVuHjhtT6pvtVNqvZW7StcwmajWmsz4y2",
  "key47": "4cyRRtnz6EYPdERp4WMk7omBDaB3UzWcSNGp7ywgFQgKbKBNVN8vu6hZrZc8nznT6tz3P5psHJGUYFu3QG1KFnBZ",
  "key48": "5Ng4nXKba5WhcRRut28MU9jtJKDmhivanJEH5xzS85ykCGnPzxy2Hzrf2VQmTvfb7VMwFyKyepjmozb9nKoNMknz",
  "key49": "ZP8YpVEdZaY2cvzKBEijfNJNNwufs9piKSYvjfUbYPnsSqgTypoSaF7A2EZzeRAbdj1QZhrBkbAkJSfsykf9Asb"
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
