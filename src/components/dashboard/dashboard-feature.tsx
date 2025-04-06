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
    "4wcAABcjmxmPpq3PatEtNqkQCSevicbF5RGAaRgPzgtoVbiJktRXZ129Say7PuDJz1kQ1NS9bz6GB8s2kpa1kbEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pKrshuC9MPBHDGT8Ykbi3q7Je9LkzofotAthnkBcwHgCCJppAYmv6S6tzxwgLeYMNxuuRJYUf6asTQ5QuX7Bb4y",
  "key1": "5DqXXv2BKejZvLTwtUznaKzWn2cd1fiG6MmX4sRP2QTLvPtfiTY9wDE7M5WVDNiuaFJA1bMejee8U3fX6kWsKzst",
  "key2": "31SCFcsHVxEb5jJdTNDuiQc2Q4KspbAryrQPFLVD4dbHZ93eKfvNbTDNefnNJTJb5qpZwQTgkt1jaDLHac8u5LYf",
  "key3": "4LuvkLu19ynLzTjVZA2ictLhazLarcqP6CkKSwjwMMsNhRuf3MeeCJxCy3whZ3vV8aZdSjU2Yr2mwNGMfqgVZm6M",
  "key4": "679KerbFfyY3hZ9s48RrVdJtjWkHakskDowLXje2Ky7obueEraHQnzEYjunu3LYQGhQtYJ8E3JwfVRysr5uuhFgE",
  "key5": "25x1jStyAM1H7xBvVcJt13RS1po8hsqDm3edJ6riwh3VBQV2s6HD3cvMNTs9VFKP1iwJzNKwXgzNkLYZmGySbnPs",
  "key6": "3xfDenJxqujCyucLjtXHusP26HQtEGbuRnzp3L2sbhPvSy6oqTLGHiH1CcE9doNqzzt7Y7ANRq7KA41a2TtMEpRi",
  "key7": "4RVcFEu7rDTaZcmQUEjZ33J1z3LQat4XB1F3ydsHdMHN4SoL5HW2B77J71cZKVLyFqLVyHTRLZNJaCZyYF2Lbc3D",
  "key8": "4CWxY6R9oPoMnedqQvkEJa8uKnDJk2fJp7kRUpFAkZc3eQRW317TkjFTVb6ka4AEgaUdnxjFvSQ785tKdiXa9QH8",
  "key9": "3pmSDKE8HmA8V7HewWU89ZKYg4CjQktBVLLCMxbf7CYPoa1mdoQKbeJ7D7UYqK8zhQjATajLfUP5bUjgfUZc1wGN",
  "key10": "56g5t1JtWtnconh9QTe9PJQReEHJZzyEPE39uuNiLuBPG3nJCp1J43dKi3BH86SR25xtpYpvvTUEzCXPisAYVny4",
  "key11": "3hvrtw5kQQLYCaoViVcioDC1qL88qZxrQBVZpCfiea6PzxCZCS8tTdKm9ngHW37JGFiQTQXDGKWTtV8NJ3TmhJaU",
  "key12": "4GtT7oF5afwrehPMQLrWDprY5bfn641LXA8WLjXup8A4DFj163ZaTjjLQ37Fhv47wtuCDaoPHN6rRGt3m2HCvB5p",
  "key13": "5j5tGQJJXrwGfmjaxLSWEt15y1fT76RvZz1AA4GurKbnQhmsuC6EnZ3fHu2BT8tRZoQBo9ypeM9zdUQ1k2Wk7dnH",
  "key14": "35WyWjVK8wSVj2DYnbNkaQZ1jDstdkPDkERKWgjqDYu9GF8br1iEKKxvfK566NqG5DfPqULoWREZmoTf6cZoJhsK",
  "key15": "9ezmhX6sgxev6inLMX6T1KRSSm2PGL1hLDNwoPZGHUe67zXa6bzCqY31xmcNPMwL7xus3SLwzUfZJHSto2ogKFY",
  "key16": "4yAeaGeto3vRqMSXq6sTxoiE8JSXhzMCy9DBiFnkec6k5dVQAPyDfn5BNL1NsRx6EyVTFRFUUG3KR6qnntx3SrN3",
  "key17": "4CovVcnfdJB9iZG7G4vmtMWXxLVQTwrAF8wGLsTVweKw7vNpMyTWLm6WuW1jvTtbrjwWTYUMDZWMv4JRWufTiDkm",
  "key18": "3Av2N3HqEUH26VC626gd7XNM2kqa5DJbjGUZfce6FPXhoHoU4Z9Uphqu6gyAighnbHPhVPzHc9H3xnT4GcvUcPmU",
  "key19": "1zGTHYnBScwkmDQbNgYsB1jewni7vCuQ2TaLyVtvEBDpxZtExLL2grTukKtEXPoUL6gKxjhKa1FeZEjdByfE3bH",
  "key20": "5aQKr751QgdXwaGEmJLJYzFDWuw2ePe2nrhWYky4KQWaeKQXxz5LQ4BWWiDp3SuX77G1NyxTykTnuJNF2n2p3swf",
  "key21": "3aUB8erCPL6S9W2f5fTdrBmsJhPtty1pHWq9SqWPAPyMefd4k1YQv6rSt9NLAaZ6vwGJJGWVKxXFBQ616nyvFrJY",
  "key22": "ru9HU7vvSQS1zDkWrpC4zCrUqmgYH45cXKUptuZ329Ee9hqMKbwbGWzJmzo7Uhx7zP733Q4Vcc1ysS563tEQ7Bd",
  "key23": "2bDbV9UUFAhhkvmErmVApFKZpTt4M53T7coEJNJHw97BE3HjG9beo3hJBkEDqzcMk96vrcVzFg8cyrC9wprCbAKY",
  "key24": "QrR3naAJEiPmJtGU9ANdqGZTV9a8AeLohnkrWYyMeVF5RoiKC2Sw3GwH2EyYdnpKkQRuF4Wc5sBxrQeGNahP6q8",
  "key25": "8TVciG1UUoV4PdPaYb1oHQx4gxmMVc5br8E5ZKoWCZzhYWR9GCrDPrMuUCi193CbwfGUHkNJKPsHRsYrkqEAeAG",
  "key26": "4wXmXezhSrChaX8mzsFUvx3sbMyRv7pZ5cDFdQCdXRfNBEKnHGGLd7a2K3xLaaA273BUPQB5pLsT5vj9vzwJQFJv",
  "key27": "3uGPMkkmZ6jx2CK4FwyjVesxrnQ72ZJEpJYsSCA64Wp8GxzYJQZircY85i32vwi3KiW33QVWLF9tibjSVTpxfDLM",
  "key28": "j38YA1oKg8B4fbJ4PH5akZrjrKWAzkCEWZrCirRCgWNtZ3QA4Poj2kKCKz4ejia5hyzHh3nV6xtCQoqX4ciT7pY",
  "key29": "2aQuLG13BFXH37sk5FhhXzmmzD7zx1i3vi7gSjvA2eznwZeBZQaebRLERWFWqmfJyHWRQqfT32oy8xDD7SADgTR1",
  "key30": "5Le1QKh5nmYVzZyKyZ9jndxfoSoSLVic3EWQvg6ZKtP1Vdmhd7eWQNi4YXVeDamJSZbbnKA2SvK9dqhi4zw1UhcC",
  "key31": "287ouiHjfSfgWQvBgwmSCJzfoWk3H3jvM4L2fTj2rfgd1wJFgMu1LwcrbzNGkqDLuXC43DWnE2t7jyFV1oMPJuTu",
  "key32": "3rp1fiWmUZn8n55fFQhFMfikx3gcH8diJB6E7Hwutf2LCTXhEauVYx3LBJoBuPfS6GmRc6AqVNnaoNfLtL1kCw8P",
  "key33": "25e9oeqZTFkMJApow8ins4z1hpUhqrFHtpuZUv4xxn3JoWdmpfFibX3mWPQ33qQQxtWFA2gBAqW8eChDgsGAu2bQ",
  "key34": "4UjuZrYm9BTv4oHhcYsReuDW54CByAqTKjGqHQ3td7ZjwPPmi9igyfA4wK6eERuyLQMUk29pbgsmFKQhiPMgiK39"
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
