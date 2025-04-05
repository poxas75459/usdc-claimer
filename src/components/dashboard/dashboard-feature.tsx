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
    "5SRQuAQExZyybsr47dAwMeMpHQMJhHC4QmL5fAVEAH6vbrAmZ5o2JGSnxxFnDvPEMbZZ5q2iExsWKDNb2uJ6uf9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSJVejehBYu2vaL7mm2S6kKvPRRegYAvARZdbaK2Lsii83isqE3E46N9dSu3JYwxPouDajZCmBaS8robGBfq7V6",
  "key1": "3cdthE4sr7Lk698aF17YPRyjZqwwFTzbzhmUDZPGefxDzz6bmrNJw1tWUUiTqpL1xy41FYAXNHRwh8BNT5tSUUKp",
  "key2": "67pLhp8hvEMsgDMUrd6KmtNSNUUmwj5pGX3MFbX67mDeniNfrPsekvYvpFycsZnFF6qpY5LUxskvuprEhf52TEsD",
  "key3": "4s1baRhvh98XDxZHgE5iZJaMcxtWobP5E2QLZhb3v3V9M7gjsowGF8SShYajKzozRro9xvqes7VoFCNZ7imm64Sm",
  "key4": "vRbMUnNmkA5SXAkRDvKXhqDk9CW8mJHWdDvb1N49WyPBWrrdgJrydCRYaPVqRTGREBRBpaz3Tc1Njfv4ee5L6pM",
  "key5": "5SkQKYieuGGuQ1gQJqZB3GVJ3fHyBveZJuJdNL3KGdMqWLmcDstBiKtighjfbMvLFHsUsKzyx4pTB7BjKU63auNH",
  "key6": "2yZeqFQJN82SqsffoFwyztNKMkTKGmLmgG95DbasEPqcErAkiPFYprkme9Cky1XevjzQ2MkHYeu4pL69VCVFt7fa",
  "key7": "3iarH4uDyr25nPVFPu1HMkVgSrddjDWep4h3i1wigYz768heThn9bQej5SDuGz7mKjzRdyrzsex27mSk9bRbuXHJ",
  "key8": "2VozSr5ijauEE4otpnFu9vNbJ5KXAn4JydmdkRp98te393TXr2YiWiHEEm8diJCkuaa9bwRbpuUTSAAzRpTVGkQj",
  "key9": "bF8rsMAP35gjgYyLM54hXhr9SkE32WFcHQNiyFviYhJtnY4RpUx6susZFbbaznebqfenxXcb3JULLaKQTG1iArh",
  "key10": "ViDZ6NVesRvDwVvVXHQJcnCNqsgUaJnfuXQm3tNLEhKNLRXLMdcgf9qjkiqBinsYUMSmBTZcgQNTvbMbCMxiECS",
  "key11": "37RsN1pHR8u4Sij7iwo268UuxrjJNRTD4M4PGTC1bjRHs98q5baGLTLxepsNuD3wtPfSbqqbCbhm665eNoszFxcC",
  "key12": "5254BZ4nvnW6w32RdDaNhd2792MbA6gCV3FqhBWzj8ixeDJxEuxwaJkKCNp4KDWk14ubQoNc8hxnEDMDV3xcWYPv",
  "key13": "3X26ESJRUGvuB4fkVJW2x2vo7nN5vahiqTp3qoeUFV2pbqCoZLBjbSFmcDwHa1w6Do78iKoAcLhAeX37v5HEKsnd",
  "key14": "3KAsR7JsMqwvzBfgoP16nZhDjdmYhpU5F23TysgyQPf4vsF1zcjfZW4yXZTwngFP3VkohBm4WvkKPag4vBzQfpKA",
  "key15": "3aSAahNDVVqVLtag5H8PsrDk2ytSJN7ybt6nomQj3b8XTB5TyETuwmdV3Uo5LizkvThojdLpqtiRmse551k9tE99",
  "key16": "F8ZrjmU8hSts6ESAU3eoYc6UPaB76NrAdAF8nDjs9DCJuuLdJ5WEDegv2vg1XstkQmNX2YaBsz3NRR4sVk2LWgu",
  "key17": "2Z9iEsh39kYoohVWtPbDs1X868wsok2bwgjYWKoK1y8PmaMyx5MYXf1Gj2tr7FxWA6JXkrUueyzbQsWfK5ksDMX5",
  "key18": "41QEnRVHFtkjbBUdsBiBg1vp8AhQUmaZYFy7p2RxYLwRsS2Prv54kPLcxGA3N69Bt9ukQjshCpPZL2yN3gSUAXVS",
  "key19": "2bNrz9UdBRhuDzA5n1uUEM2ZHDQqC2xRX3RR5BNYQ2dUJDnLB6tERz7AkdXE92R6jich47a6uX17H4AJ2FRAi4N5",
  "key20": "55e9wB2Pk3zkDbynf9h8wYCGqqP1MZrh3muNxArE7EN4rgxUYdMNZ49Y4ceV4iqyyhDApi4y5fMbKATpPVnUd4Uj",
  "key21": "64myVZMMSabJZmZx6VBPJRuzUDVLrHSs4dXQGqp3e8TQNmdatXygCQNihwGrgYJzw72akGNpCFX1oy9QhFsu3bNh",
  "key22": "5cNcJxygq2msffYBnnYoWjCmke5rphdXqEqTbB4Rt3mmz3jAZy4rbkwtejC434XkkBXGFGzioQ76PYv8ZV1Sa5qT",
  "key23": "65khuGkqwFSZ2e1XiAqcM4YU6bBhk6D47zTpXnu4M3bBLVds3PXfMS2ADaCy3LaTfoEm88hNzFp3rgopm2eKREVL",
  "key24": "5ufY2B6FRarr76rwNBS8tduaWvX8DFHvBJEaZ4PW6xmFCs5BzN78X78sN2uhCC3UgGMMVdK7ZKXaRE2ZYePeN1gU",
  "key25": "65o2Ji5TuTrAZZvtUTPauL5Np5GPJCmkS5bLJDkNqwsMefi5yUnkTLWwY6hHytFxYDaj5cvLEhqAHuVMayCBPT3M",
  "key26": "3iheTkYqtpUTvyTmAku64g1cooQVLRvmj5wgjDpRt87uKupDN3bMAmRrv8UPxSmJBdf7YCgcY3u548hAtZmxeBqG",
  "key27": "PebyApqARyv8LtfEtae67CNJeNndH49VkGbLBBBbZNfaBmpvYbrhenJJAqkxzQVnvwyoQd8iXgrQSSyRXP34cQf",
  "key28": "2CQisWf6MKYtYaffy3kMvVuHgU55ShyCbRkXGG1pSfroye9HEjiAMdUzN1XnLFbyMT1FcdD8JFYqaDZKf44HWgEs",
  "key29": "4fgLWvUmhRi145cCBq7hV9WURo41o8kMxiPzVtQHQP3Z3aSt6VAtj4Q6X1Svo3urCQGWkT4jYNxtqMXiwnfYLb9j",
  "key30": "51RFKdZgFpPxX9a11jNncp539b32XciEqknQWc7LBC23QTVQ4mqpaA46fztTKLWqc5QNQXiGrc5t9AYdPBTsJbpy",
  "key31": "VS647uzBPnV6A89CEKrXZPAoaH2m2UQZQmzARZiuZerj7udhNMdQ6qMWXL5YXxvsKryEmJgXgAeHHqMMCCpzugh",
  "key32": "2YkiyZCTJaVGRtXzwkFZ3mNDLhkCwp9uD1BsHNqLG3PYGCtsLQHrrjhPrQabTgvmbeSkLwvVBo4V83C8h2K1fgxJ",
  "key33": "3aKT5igbYdU6mpq85EChjZp7FXEwraZDCMqH9UKBy3VVAK6LmfXfXd29EgG7vzxeYmiKc3NhpTN3SNoRdxhMPf8q",
  "key34": "BH7FQj2ZWJtGd1es6tPedE1RLmqtTCDFcZNQb5EBrNmSM3VBNLnA86ovEN1LsUceDT97KYBPas82M16fXGs8pUn",
  "key35": "4pXoAooR366JdVHBaJCRDazTFTLSeHiZrioYFZM8eSc1eQmuNre1uN8D1C1EX8zsRTXRDnyiM2mYUKytaVbmKT5C"
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
