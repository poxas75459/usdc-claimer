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
    "25mJ9GXAJVxZKJAk2soDFmHDXQyWsCqttH57zppTQZFMxytiQpkUu9j5HZsKN9KEZGbEVakg5w8MrWrTmYLPzVjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDEqiC8ErhawAVLxPP6yoZYEY9TLnPRRr3Ey35RWxMn1Fv6vVJB9sDYwAo88p84zkCQ25cz5cbUw9yoBiKHVFUr",
  "key1": "2SSY9unR3C9VRbKN3qdWT7nWpTR214wFM4sigkfBpkKbJ5Ko7XRQgBHaYyASFbaKyeYS1roxw87nG3DiiFvCKAG",
  "key2": "4oDPtYzh3Tc4db8Hqw2ecD3rLECaBXsP23CBDbKAQ6kF8oe9exr5budQ7Lsab3NucawkbNQiQ9KyHctpovjr6TT6",
  "key3": "5ozADZ3S1Y5mTtvHLhFdyK4SUoRfyp7TqTACSEv29To6ikW3Py5QFY2qRY3LapqNZQs9hYv3zxhSwNDVKvtRg5De",
  "key4": "3aRUvqFeprTnhDyX4oGnxXosmwERZMxL3wbwMyYpYjBCVtdqXAzkXZPeRuViDwCiHycW7sgGh2aYfiHvihyW73bT",
  "key5": "2GrWk7m8eJSN3T3GnJXVN1zWG5L94MVNVMgDfNqTStPJ5UfrpekEPVLGVf7AuboLo63dTZHyrogSiKU9exMeepjX",
  "key6": "5KpWPRfMu9asRqBiAnzCj4v9n2s41Uh75nxBza5LtT3UnLBHnZGVqcJApRHj6DsiPe2YmDmHYZG5ptX4Maj5jcFh",
  "key7": "55cwzyVAyckZgcyiLRAMyLv9UCXBDcqAjb6CcLBtFTPRWZtxgCNTzWTDtdpXBnwpr2WCgcCUQVfkMTAgggmSV9pw",
  "key8": "3U6foHWrM7DbE2h4ZjF8eMpZs8V3te3YRz88zKD6Bomerp91Gbert7qeZg2jVWECThSjrUwjiKgYyWKtKnzN1xtM",
  "key9": "3Hv97gb532nXbA9NM6pkn99Hf1PCguKrMMczDB9RZj338coQ55Qn5XhX2uMrtqtE1ox3MAymhHm5E6duKWaNzFKE",
  "key10": "3YPV79pEm34EnA2d8haj6RTAqFJpPPQ8wwJ57fGNUg9xx2hDaN6dVT2t2VSrFmjz8gfaBUV2CWs6Q1N9MxVtnBQh",
  "key11": "2w7UymBWKUBYfMj3PDH4vCGptijHyUWg9XXU4y9beXA1QR5yyzz9vstHhkebvFmFeLSC8BQUViWofEqMekrgGBTj",
  "key12": "5cG2MoDSy7Gw5w2edKcsCY16wJbCMnjecrzh9quMiFApZ3sKF8C5pDbP7sFBoz3evAmrwbziu2NV5eVyGQMhkAtN",
  "key13": "2d86yw7BSB2827D1Mw8nTh2UqPHFXuDwvxGr2WE8Beemt34cHpwnvHGMs6qFmKH2PLPeb8jghwWn3q4MgLZmmozb",
  "key14": "2QCPC56xfffx14d59dUJspGDwtoxP4CV6epBM7xMVtFbaH5HcSRjpY5YTzsQ1Vec5P3o4H8nXdXWxrFRkLmkqkbY",
  "key15": "2DwgRSURWtYnGL4c8dR6KmGfRdZEn8jfTE5bCPLnD8BoUycjVhVX7YH6bwn5z6BAcQYSvCkWCu9jTKyTzrjKC3xB",
  "key16": "4Moyk6nLCQkzGJLNAmt54TyDigTBuvU1KbWjtR7kE4vbn2d9cEnwGt6ujPxecMZBHsVG8AepdMvuEBkB5mk5ks4s",
  "key17": "mD3Nqg6UaVdb2hSoGpiuaNHvPtMHc29Gek6hGHDMaR3MKzmQhx2nhgrkuReje4SjnVQBsFs9ugNhPtoErgGpwQ2",
  "key18": "5V1waVQgYqjdEzb13GgaA9yEXRTHBrrtC1RDfB8gcp2mJQZ28rLLXcBMXsf63AaAE18w7gaxxpWR5sv6UikuGRf",
  "key19": "3csmN3WE1YmPBjZALoMYnPFiu4ALyRW5iRQuWaVwT9xSGgHNeHkdcBqtgUqVdfYhsQ7X7q4QRYTyWjgR5pyybfmR",
  "key20": "33JwpURC8A8T5VaP1aR6HNFTm25dUzho3V3q5Rpp6qtabL4h5ZmZHYSkXjYvnaAc4t8hUYhAi9CcnWtkRcM7sXhy",
  "key21": "xiX3HSdy8VgY9wpYBfRd2hSKTYj7GmVckerSzWnbPvdirgdNFGCkypdvwzo72DPpXcnLSt41iWChCjCWLr9NWpM",
  "key22": "4eHXL75Pn2y9jLSvqhDNXYooCxYwyqoghtgrt9hVAyRddJT18KLUwQhRisE3jVNqWkvGNGxR5oNZjXUSoxqUn8ZE",
  "key23": "4QDBnXvr7Kkpnw5e62FLedH9Zcx4LgjWXkdJ98q8gN8pCsDedqddPBQMztt2SSbrPzDBJQg5AFRvij99D6yB39qy",
  "key24": "3US9oW7QAsFBPDqvbrzXMQTtvpTh19MLCwudUfKihbBnFJz1kmkrwEzz9CyGDuXYbge265cNyt7XwzdhwdCX8Jy2",
  "key25": "4SG47BZyo9ed6T2eywVRQBTFj5uefbgAf3URQpgVJ1cdsBYG914YhLNGf9e6ujHmTTy2nerFjGc7Eq3Ze9dm9RuV",
  "key26": "389nS8FYeAyrdwy6RE3cMLxGXGRFvpk4SxkoNTPkCAU3SUxtWEb9M6eST3P3E6HunVxq6f8P1zgfjmdPj941pVRb",
  "key27": "4Ps6yxrUfkD38hkkz1NB87EmXLFTDXojLVBNF8dS4VXmmado1ECYiFyy8cghAFWyHvNftTZZ5E8Kukt9wGbTpf2k",
  "key28": "4LxJ8Q6sEiQFW6L2H6fycb7c6ih21FPV6scHTdzbP9ERnk7S3iXvq3LsoqLsxpnCSSYHZK1sM5FQA6SvtLop2sWs",
  "key29": "2Kcikf3YNcapTiBBvd1aP5a6HSQrQxpZMh66rVjJ3S5TKtBWog1fNPRdfjXatp6HWHiM4FcsknjarpoguXFWV4Yk",
  "key30": "62sYc6QmSPQEiC7e8w6d2hEBwcFayPrfGGUdHc3vyZQC5ARBB4n9KsWsjRUyt7XWphdVBe7eXiPgGgMHkbhYXEHK",
  "key31": "2EZZoJHVVAmSAdBxQiJksnLgdKWeFwoQwredMrrjjHkFV8gyppa4gvT9tWTwJeeexMstu124ujHST1ZWt1nEBoKL",
  "key32": "5WY2PHnB9cr9QwdjYHN1LjPNqq7fRvj3tKyNFigEnN4qX4CUw4wMGbt9XJy7E9sqTZXE99Mh4urYFepBHqmmkHxC",
  "key33": "44wsiAxu6igUr1gXDesHuw4as13V9kNus1FBpjzT4YDfvx7C3bduSJuyTaNHybaGVvaYnVTzrXyfVW6W3fojUbo6",
  "key34": "5CcsYaZZWA8dVSZoETmjCXM8uxFckiutGFCLFY2ya2FewtSnN1yLscoBSfU4E1bFA1EfHqoanBuS9KaT8ZKfvkBL",
  "key35": "38vGh1DNRwqxsruzufHhm4uUVifxxgABB97Jzt7w2nkUWGPfdGXVMqak9rc7a2h7apLkGjv5ahfsjER71dHP6RoU",
  "key36": "2ax98DWZ86FqvtX5TY2HWTKxrq66jhus3gswf4krFVRdANrkixRyz9CuhNoHBzzxe1piu6NqFGTL7oKidzcrs1at",
  "key37": "5xj9SJ1rw2nMRfzwxBShvchdLpcvSYMsaVjXJUw82NwDUqrByXNR9Ly3V98moftVAArn7gj4UAoJqbKVZXabwExH",
  "key38": "BxGXYTd1BGAZEbYBTUq9wvn7ETiv584M5EsziRTHNv3geH5GeZoNy2gZHuG1TsFueKfjpTdbrTjiFhb1jicE4Un"
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
