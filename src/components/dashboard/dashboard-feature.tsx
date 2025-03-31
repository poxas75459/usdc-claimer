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
    "5KFVX9qUMMq9M4vJJRfLXoSow1ysdEXecw3Av46NVsnjUeL1xhtnggqjULo3NHQJQDTa7aFqrQcWQ3sparjqJSYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCjer4HjX9SntN87M4qX1Ld15WZUtkLQzKB2t1KqMuPNmpUGMctZptZnQd1UiwbVYhoZT5hwfpGsfF9eHXN8nsU",
  "key1": "9kU2FaTFQTv5gV4wdetETrpJqHMxSkatksRqVRt1HpveZFjW88atKcWiYyQNR3k3ZsyqeecxpFnoygS9TkmiVn9",
  "key2": "5z1Dpn5BrHaFuSmECymv3zDuq8AjwmQTsGDJyzQ2QXVbRUwXoSx4aq57aeb35NBhyYrjk4LkmCWhrGQnPs9NjMNN",
  "key3": "5r3yYWgS1svwqVVFE46L9MkjVEmW4mdXD3CPSAUNkGiReeRCsaa7LWT4nfvLNX6HJKDeyMgFqCX6MaVW1EsDdv4J",
  "key4": "3eHCqRRFYJPdsd4mN4VchWhfmV5ohMfYvdXhKCb3RNhUNqV1859oJYwXz9SPkywLwq25d5KdDGYxR8tJeGxae8t3",
  "key5": "2vPopSnj9J1nteN68Qw9agRHaHwAcjjApdqpVQf4brMK4PvTG64aYuJXXRxevdz8kprCsCWuM5pni7chrcsMrGxX",
  "key6": "3r4LD6gcTyouvp8w1B1e5JTDccBsDTAanjEKLBZNXVVKrqRRrPSaRJjdn9f6XfmNPHSpJ4EdiRpRwbRrPU4im8Ch",
  "key7": "NfQWWUJ2mjFVCtVYSK88QJDF3DAHt2BWADoTupwaNTx99LTPyWLWBhhVjpHUVn7wJwNoLRasEAU4e7FhQyJqzdw",
  "key8": "4TMmGS91CanNaBi1eo56FjsmrgKZMFbnp7uA8e48RZuSNts12QHJtQiE7RJ5srBnX7nSfcwn5AzHayZmeMR3WQb7",
  "key9": "2PfNUw5MHuKAvMYviiaXBEq4zWEdyAf1hDNpDiw2joc4vVmFcSx6NVQsXeTrWxwAvs1PLwk7PMpy85q23fGCbHzT",
  "key10": "5qUM1ivtZEdjFPM69w3ntMuSYEwZauFjPErtyaZYQgkraT3JiPVTNVMZBhDNCZsVhBLSFCnoJJhvcbmwEjtYnEhr",
  "key11": "4s6Jnx97gW9k2STjerz7G5iD5KKo8trW38FfkSmTiHHRqgcWS83ibDTbJaVFSDrJSnmGnbY5NxseACMSbvZQWsjc",
  "key12": "SaLsxnra4ay9258aVHX6CXXXJPYUwgDKoXfmPaQ4GNwYraZwD7miSd2CvQGmQqk7PPdGfR6mMtLzkhHJrYVdgoL",
  "key13": "NswdKunEwrN8AFg6eD5Mbgdpci2Vr2zDPmFZN5S27PNdugqftTaLB17rchQPk6Ddetvpg8gzMiAHe6mHXbUTzmc",
  "key14": "4ukSZhSGzLSpxPPqfpVT8TzSn5SSeCaMMgVSVfJyGhhai8EeVGa6XYHSoLdjLaVS8hL4L1kDRQii4uLmHCMr3L9X",
  "key15": "2U8bA62ezuAyqrx8kC1EeSFLq94Q7Gesm6NvWxcDrKcZD72MtXh5uxVxp2D2fpfGU7Xu7rEsUygKt61Kfy8wpTQg",
  "key16": "3PK6ihQJTYXgccRTKy1iAH2QjwdPJeSkPw2PxGp1HofMqq6crARcbVVEVEj6uTsji7T7YtxYwn8snV8zuixZPrtQ",
  "key17": "5XvZ436sRf1P6Lp6dWJBfN1JX99gY5bsFibsrxnUvxxb73XASF7b7pzd67Nf1oXKFcUmNhYXSsiUoL6cwv42dS3N",
  "key18": "66dobx7hQPH3GtLFrGWTTeoLXzTYbWeeJeL21R6Bk8qfz6DDnyRSrf2PfvSyTGLEDS9gGVcS7i9rCPG7r1qPR5c1",
  "key19": "2PzEvCEUJnEitoD7T6EbGitQe52tPj82RwG24Pp84ou95cQvGNDqtkt5jvJ2dSiP1eEi6hLALrT5tTZxai8NCsDh",
  "key20": "2cyDRAmcDXvJDfn3uMVKvuMw9jQmRtGcEs35iarYLzq81XwKUef6QaukGaTHBJzCSPCwpwDXMC3QwtEPGffzcn4o",
  "key21": "59A6AYLT41qQQEmBjtyGTADFdkSWdWJvKYPE1Q6qLifqAbWetRkPVHbemjXdg6QKdSao3UCbzC8mSTgDAWZzxHvF",
  "key22": "43Ap3MDAka1o3uMYn4inEY7GC6g3XAE3zaMkeKte5DpWP5887V1TuMoftGMTEtxbLueqTZz3cZNbbrrrCv5SFsR5",
  "key23": "624QeaS5rMSyZfrnYQcJoTpiCP5YVnCT6vypFVSSn1Fon9z9Ue7kGwGcLM89B4o5z1tHR2zLU3cvwpweBhePeQJQ",
  "key24": "2toV5n6eBx9DhdHbyhqjeRaet6kyBbpJm1MnfD8EFrJQbtnPrF2u934B4eSoDTVhqfQNMHWP5s6ZVNGTZgv8VdWL",
  "key25": "381yPwZz2jM2eFoviL2npswTkZ2QeVRHg5Ve6BTSeY91x12TreXn8hVkTYJRmwjX8YukgyPY6bV8jM1B4nGy68oT",
  "key26": "2V1yRnFSFG9xg8CjCqj3iet5JidYo7X1kdxCwArHnSGDQ7pPzLB5oLPhrQoVubPzPQHwGm4eR13snxFVcj9KDejs",
  "key27": "TFjke9rv6Xbgg1e5deaJrsPfJevJJVb4TFZfcT2ZX5CLb9e9WJV1kUHgHChJxr7j86uZwDLtHhNxzb57aT2nbN5",
  "key28": "AuSn7uni1Kj2YWqQUjFpGPZyYgbpf1T7eQz2bvZ1R8kU5rjV2Mn3h6VUEWiN8hGXQz2zMruEcd3SH6osVDHtkuX",
  "key29": "3UGLKJM9xRqfWriXKNief3emJWiomFFHKEXhhm6BziXLPN3hyfo1tTbE1bB6CNZMTe3QwXHVwEYsr2nREc7PKQYz",
  "key30": "246XL7K2cvNpf2VF1eScuap7dturY7gc9r6LqngVRVrgsVBCoQqWQbVLceuyqfQ2F7C9XsEXc94M6Pceo82sfeGU",
  "key31": "5spzJ8UCsSUeF9mRsc4s1q3Aj4h7ZzjYEZviYL3EUNfP4bDUabV2sHCRqP8xD5jBsPm9VumN6WDx419Lv2UHBg3t",
  "key32": "5HT7ayPuVVd8emVwZzgkBtTdKRuMGWPoecL5tBktUHFmvAiYSproXHMyy9n8yBwYPTvn5y9fgPBVqrAtJGdkjR2q",
  "key33": "2u762uYzKGNsjDFHZhybfsKvKmREr7TPh3AMeVkudMV1RTRwzNMUJ1nE2iTcUshLN1d8mB6uVNedRbRD9nVcH6YT"
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
