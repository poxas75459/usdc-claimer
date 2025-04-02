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
    "VBVvtYKPqPAn7w5KsVRonAfFsbEYwvNcBaZCYhL54vYrVPaMcedwj855C4RaTdbKbbgLU2mz2Ub9Fpy7D7jsrXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUMUToARhejegKoxskNzDdg7o2TYHdea5QjPabEBJmEagTLFF4y8MPmpjXR3kur52T7gRYki3xf5ZEMwgJZRTnm",
  "key1": "2NmpUvWxDG98bn9jKFAiLkTeLTXXf7WJ7RgGS2rBiHrnrJX9jXDgu2Q7zoHGeSfsazTokaBGdRcWseD9kzoNz2Zo",
  "key2": "3m3QbvkSSkjAm79TyQi4ipDMjPhbXAJLj2TKjA6ayD6M3JWgtNpkWv7rvrntc1tXEyaNMK2A48B7ZE8iNoKn7LnF",
  "key3": "5Q2AkPyqggZCQ6WD2Y1jLMCB1ALfMvR2hsxdZmW3wThvgpA1gdUZaLhGNsX9HhnXw7zqNdBn66TrxuiFDfFTCxGR",
  "key4": "4JqJkBQzD2pN7cE6Kp5c3HKt334M2dHuMXVFKUHh7CYejcJoerAivf5hR4vXWzHXDWY7RGgv5GkmVq6C8VKYDppZ",
  "key5": "32uM7FFGQSrsNfriUiA1HRXttq9xZcX4Vpdkb3QZxYkVpnqXdrtY14uujskM2D3Yb6mqXpBSKTN9GSqwSjTaSqqh",
  "key6": "22mKzW58gkgoi3Co3Qv9N34azPaPk8EnqtMT3kvkoTURBxvHCcYGJBGJQwAngDNjyKRM3tBUeEkEYhpVAvNCfjbi",
  "key7": "5BxZykkEVnzpLAJRQRWa19czmBE5kvDN8YSTDYAWbRJ7ERXMMeayAbnLCQd8JU8ncNESRteg23qZ4xpxRpDTmJ1A",
  "key8": "2FvMLLkAY6WVt5Gf8cukxqbtQwWpVESqgmKPoac2YMCEiGjzoHynYEF1PFeunWFUHwgtJjsxgmFpctyQuiEzTnRf",
  "key9": "4GAkhBTMXARkT5SQxTJ8WC66cWZ95kqUpxkZmHdqu8q3QJTAwhYXJVLDRBVW6rUcXkurFWQAh9JWwEHoe6ty7T4c",
  "key10": "SV96YFQTY4zRPCkWXuFX7vfS2J2ebYZ7v2vXr5op5CrXQRqEMEa2m6UEjXW3iwLN7QfzvhJViggJZjV3tmdeEnu",
  "key11": "3MtQr3Fiq7ioJ4LzZpRdnuKkm6iFHQYrwpafy7H6z5z24i1F1AVyXzMu6fRGTCQ4eBc1wqF4UFtMEUiN6X7WEQZ8",
  "key12": "D8zp6eehr66jv3MfzWMfXF54CYzhkHWFhWfYsXhBCVBhFYdX8j1vi5v7UF3pPAU34Y6n2YS59Yrfe9oFn7nhxLc",
  "key13": "5nkKECXzxEx9M7umGeXs3Fvtrm6A1qTxozuKAEHVQ7zDvmVrWVS3RHE3aF1R7krzGB4DaZrorfTAHdfnSCDCYehk",
  "key14": "63nHHQyJkEbJQnA3KmgavE78SFeuAsR69hT9m2hZ4REYKZhdyKTVmdYdFLjUXZ22NjKQB1VgWCeP2mHqERwdQJbz",
  "key15": "4PT6oAFbv4oKm2K3q6sKfwSNViEJkZsvRezGSZ8WD2oSJjnZQAhjcLm9mrnhnUV33n4F47CiNt6iLTPPLCds2c2u",
  "key16": "2zMfzwP1LYiw98a4QdJUFqsgp6EvcKnHdVku54sAFG3fPCueqPoqBiKb3ShzD7ANor1C4Z6ETYenqwUnHz1SLair",
  "key17": "RqAT6biu28KqBogPgxrLk7Sw1z9Nvb9sQej8oE8qm7Qs3dhh6Kd9GgxMHo3goaqvuf4T61kQknzdiY79jJDC43F",
  "key18": "64n9mdBzdCPb5BG9Ex8P3pmUssSUrct7zkzv48uuwShdsbNsstBjPj93YXnq9TXt2jkK7t6bZ2jB5VCaBNqAsY5u",
  "key19": "5yzm74mUxFS6FomDa9EendAKsHRNzRZsgD18vYjWXLxZFzg192hW6dX2LhiiqwtELLDz3yaK3VZ3FNKLPbvatmPb",
  "key20": "4y3qnB6oNVFVRTm8nKf2x8H282xR12UhmSD5V4MLWyYA2nxXo8kvPDcyjkmgXRAfXWTFcvUem8W33kCCPfRwmVNt",
  "key21": "5T6Udxuc5d8NJLx2P64oeZ8jyhgExXyWnH4aNzSrBMYvSVPazRThkxWN2eEhTNRrr1zPLByNEWtpqP1aHmax4DxR",
  "key22": "3j23b69G9xT4qFApszpXcv2gzZDSrbL6em7u1cnDKKRfoH7YR7PobFVBkVuPPcZi9UYR2Kv6btWDYCU2w4ro66zE",
  "key23": "3n7sPiKA7nip4ghRAJ1u8yDjoTffqJqWi9TcuGd3bZvVYFF3dKe2yUNKABCHXcXCiSrAzzMN1KbbA5uGX82ALfke",
  "key24": "gp8Kf9cqoPjgnmZta7qpbZcz6f7R75TMsE5uMQjRby7sRZbrERY6Rx773ofTU6SPnBRYpoiYSDwDZBotgikjpxW",
  "key25": "4gDCWKEA8hfzinWsrsXYjuqpDJPLGtLxvePmMbEaDDunoMxLMBDqLA5BH4eLX4mG5a3MJVvvo3RLcYhXpWJnjKi8",
  "key26": "21AwPdzGMEzoz9k3a7AHSCm8bJRtAh51a2CN2x26zd5XdkhJBgGamFHWA5sdArcz9oNEcE3b2WKcytDgJ2mtBKXK",
  "key27": "5utDmftMqVxMo85SkH3oCn3Uev5gdD62rAEmwCS9M7FnbiQA2iHsgZZJHt36HZy9RyZNBVfduWoDAZUMcWQ4KP5v",
  "key28": "5GSpMVC7mJWBE3fDYH22KysZLEboSzEXtJ7wPLWM4FAkFRYpv3WY7AwgsG17NpJtpcvxQLsXgBvdnwjW96TZzMKw",
  "key29": "5zBm9je6hgiaGxGR1bjqdwNMkz23WJS6qSoojNmyufAmMx1p5ULtKGEXv4ByhRiTEEGXYiXLCjwia85sznuHUGXS",
  "key30": "jVGzQu1LQgGBiycpkRDhBsuBLFZgr63j1hk8utFRKyghTWdLoy9tjjU4W46n5dzTTHPD6ueTWWu7z8UpFdjJjEp",
  "key31": "3uFZveSyewXtUUQt9RdCtbpmmfDM5Rfbmo5NLFaxdeXerE5FV9xzA25hRL3YyXmSDAaH3H16XugBmQ297RRsr8nm",
  "key32": "re9iuPqbdDrGK2HRh4cxmgRZYSjT2PM2MtK2BUpxLP6KUqxjjC3q2FuG4A9C4z9ErqQ8DNHhGJgXcomkpv9ZbHu",
  "key33": "3yaV7Pz42Bi3WbNrsMhZfPR5q42tZtE1zdz2CmxvhR2jtWqaVqon32u5vafvGHD1CNhgkaPQ2pEvepPRcRm3bP37",
  "key34": "35Q7NPJToGHQzywXc7rgq625cvTuDydwcxU68FTqJ4zr5SMJhKq5M9CJDaD9XRAU4i9DEmT6nzCbkQA5vBgARzup",
  "key35": "4VUkjuhG28StEA2xqWxu8TK2s2fLLQPdtZ36NDgcH44MYFzbarkdQryJbBuz1CkPv2LDjGEfi3oCyVpbBJhz98Sj",
  "key36": "3TzdTQKhSXE1bYeLpdd12e5LaYnWtB1SdCtAGxm91WLvRbNLchzeuiaXLspAog58pPpyXZAVtz98jmtgfNjXywMU",
  "key37": "67UiengUgtXiRFk6dWs49atzsYEnLvcFFWYE5rbjNAnsHUUkzEGb2ktt5CvE29pUi8dARFtUiBtpRbnUnmYScS6H",
  "key38": "8hvGosLDtFmGKd2J5rznrKny3GdZsNi1emEuaCxm6TBYxRy1ux89HyqDRcN4JiiPSKE9QDt4iJugytSFQwy21dp",
  "key39": "4M3Cgi3UUymznHXREgwjS1q2733PpwgwRsYmsf1XedJAogVcboypmpwaNE6De3654PGVgVqu1w4BRjTYRo2i4fFv",
  "key40": "24aMYyULX9K1t6ti9Cmy6ETUAWwzbs2RAQErinrPS9pUeq2SVt8anCGaKcHp7ZugmCi6hpbxLpau6kMGXQpyLqwK",
  "key41": "FyaH2FGH3yrjnQ6bi6gZQCJzBabPRYa6DyJuSCNy3SeU8kRVSoXR5A5sZRJ8yWHzSkLEUhgQLNQpZKMBysJaWck",
  "key42": "5WprBW1jVE9MYWu5yFrVMkMyPa2F4Gp9RNyx5huwdn3AQRxSBmog9woSisSaqtzvPxC3MqPfy5ZVJsL4SAFHmrHN",
  "key43": "3PxCi68C6Fnhat8PMXeeXwtSxvKN9y6G6qWjc434q9wWEHKAAB6bq8HaBJu2ezsNY5g7zuDAyCE35Jp5LFQ4emZR",
  "key44": "2idNBDG74Fkwax7uyhtMLwC8wKVLoaDSVTRL2bY5SAbE8W2tdAABVKmsbkrnncf6ntt3zxHFeHeEw8MPnzNbHS4x"
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
