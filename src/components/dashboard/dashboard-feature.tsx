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
    "2J1nricGXGjBwtRQKZ6no1fWwc1oRVNcFu9GZxs2ZBqX2Gb1oPK9qnYg4pjSzqCU6nxEY67j6qYjBpHa4HHZysxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dcZEUhAm9tEpUE4zQSbyEnZ1tbWkMa1X4bGPDVvu5gJkD89Ps5V1JxBaoNKsHyF5NDdVSPsAjQGt1FJjBaZ4uQN",
  "key1": "hsp6FHtj3RtVZRb1wdGhjyhtq8xnRNByUjxoDDQ6F9qRF1XESFvRzp6fCKJULC4wThvrxkkHNobyKdD16cCqS2F",
  "key2": "3FhsuXMrzo6imUabtLXxipPW9h1mKPyv8XMe2vBoDQpDa17d4UiKXzNu1Ff6rBQepVHr2PP4cK4oh3T5evY3rUS3",
  "key3": "57wG5CEx3C74jpFuZ5eXZyAVz6YLfB1yZ32n2rf2dWRZn5LuqnEq1oy8xYTgg7smTtEyYXn1rGh42E9koBgUmve8",
  "key4": "fGRXvePtTuRoM5UW3QG63xoJ5pQWrewFVF4v8J4u6tMWMfrjS3ZoUPLjxSsjkxGfmDQN18FQpEzX1rgUL3gx4ee",
  "key5": "2u8XgviBV5tGJYnPdB3SMjgnkz7E1z8nj6ghAue6DePfCCFNkqUDRKR5M9UEdASn5kME5LM7xmAsCx1hYkKAmTjE",
  "key6": "3R8GkDXfYHohUViLq4YgC29GhZfVLfjmBbFyfyNuWGLHrdV5raHev75QyEwjjSRanmmkZS1CYU2YwYo6JmbGxBiS",
  "key7": "4YVtdXM6b1aMLEMTRB899SEoqdMVgNmbEnCVNM7gHCF3jjQxoVW9KNt2DKBHL147fgd997kkLFuEXSzbj5HgTunq",
  "key8": "5eErQZxgR3ExBJSq3Hooc3N6wKDbh3YsH3pS3yvX1nCv5zwDdMp6TfPqoaYMYJaV3mvZJ9DywDUyHUJRHYXm5jNZ",
  "key9": "2eBs2fYUGjyjbceDLrnAr5MEvuN9eCRVAVHac2fhky8xTDFutdSx7UexKuPEhfYt5HQkMMwZpvHqaGr6fdvayjuk",
  "key10": "4HRWNLnC39avREVXJ5Y8Mnp98m5pDDD8UKNYkzLSAvge4mbJpR1E51L8vTfRQWxUkbipmei2VGZoq3djT34a3cwc",
  "key11": "5uobDzaNQTagL4Dz1n2ht5xYVGPhFckzP3KmareSc3xpgvXJGBLt6BSEwGLickByJ6eiemC7U3oLbhjcbEt4vdMh",
  "key12": "5XVDwjnNKW184tv4wCmSTt9W5e5RQunPRA4azY6wivZ6ZgeQzRLc4jf7Sf61YbaWtCxN7ak87XcwXC1eTjfjQK6p",
  "key13": "3fro2Ypn9vN8wJmZg8Cz8FgkkK9GLRn347G288AobnW7G9LvQteh5mWaitGUPUo8pqLL12xMfqmjP1wGykvyDazm",
  "key14": "3hrvJ3tTe3Jdcgdk1zQemmB6QWtAA24QEBnKDbgeopgLYmTsh3Dgtzts1CB48xcbDaUZVkmeg78QnyttBmCUom1s",
  "key15": "3tY11gSci6XRfP5KDM2eBjJZNiqm2q1DdrqSN2mcvV3D8rj4TLmkrdsxax9nf3yM2MX6pH4afFxeXmq8GwpptWiX",
  "key16": "55wyPi2zkpRkaenoPL6QusvxSpyPMt5aieZiLF9Q6vnCeciUizMg263DFMph1isd5x9MeTmSVSeFfYT1TP5LzQ2p",
  "key17": "8mMb6erEVGANRMnhpqRMEFyXCZmqvwio59bfZeYpVS8Ls7WbFCb9HLxLh6ZQ6645tG9gj4HEAEK6gWHky3iRqGs",
  "key18": "5qMXkcgzfaQkY1VKP1bui7w2hYPTHbqsJx5zZGQu4D6zkzUfBq7aQ6sk4ar3o1SFj29NMGRQzRDbrTwoFHav7u2F",
  "key19": "3UE34a1V2M9eoHhWNp65Rqo1yPZSGJUXoRUZcFqCZgVVTc3XigGwfuxfRp2Lvk1VF4j41hnRMNKycjn5sEuZdrQb",
  "key20": "4HdQyU3FiJ9ArdKS86vBGP4niyrHTB7VHo2R94Eqxppy9uq9iUZBKqVRu3oWC6x5mbCZF74G2w4wHib6St1iYMfx",
  "key21": "V2hLxqcKDn65HW6aH9QLcuTxyRdFFm8TZJugaxzCJRotEJ6Va6svBJeFFaXfKsmi4at697nRg4PQ11ZGZmBftgC",
  "key22": "QjrQgVbFNTWiWrUE5eZyQxuyBxR82cVQqBMgZPqbmHHE82fjnQ5dPHXTBxPGvAua5YAcvbcQouvenXj95ari1yE",
  "key23": "r5vrm6BQxohfsktAgKFLs2YY5dsCw4RzCJKvrgSGfmf6LtjKUxmycZcwENTSCfW9GURv3emWmGro1oZ2SFHCKYJ",
  "key24": "h68ycNGbcFTvyw8yMhoyW4SYVoR6rv2Hpb6YUYYQQboARQ3hcwEBff6pFaALWbAfwHGrHNDJpm68kiGdNdn13w8",
  "key25": "kknTTgFL7iD15ujYG3U4GYA86uqxrzvy1KzKd5FVYr4vuguHU4Lb5ZY3VztZAu7yydSyxBsD8cxWkBkqV2XxTi6",
  "key26": "2U2yH89pkW9QJj5yPDXNQxXb41PrDhZtum3X2QYH21StajYYxmNV6byrNiKhcMkTLqCsFSQ3XfV4dUUsytb7GEP4",
  "key27": "4UHfGkmrZiyQrqkjXxvGyFB1fyWHLuXsPjboBpUucTqzDFiwkFfk2vj5GwbEAVzKFLHLq9Y98Vd6UmtVbUcRMhgo",
  "key28": "65Lwu2d6JHUparUrEtMtkJDxhrm4jaKrDuAy97jNTD9hTifPLRt9PMC2wRC51oXN7nF8Wm7KVuwepRShdgUuXMqz",
  "key29": "4TP5hoomiAtnCGXwffL6yfEBo3qL9TQQNMYuxTXsP95yujfHbnE9yFQDbtAP5QbH2E831Xidwpz1iDrPrCbge9Qh",
  "key30": "2byXJVtCzTAAkzwNBYF6Jo6xZAsEnQq8J4CFUotp91vdiN8XFGTyqYzkNM9VGjZSPkjA48BAiujGQyeMgcQF4n5p",
  "key31": "2jK8GSoDt2AQ1h769TxAXvpqpitvw6ZwTR9NTqTdLS6sJwmsRuMtZQHhrwN6KVdLZGq13QhBnuiwrh3dJzqh1aVM",
  "key32": "v18eZfkjzdz3UtZCAgS4x58DZYBZ9bSptjuKFBojhGvNXoHdeSikudabhj2oCdfEQnTM7T8VAtWPVUrnDTumJk4",
  "key33": "3cyiegFepDSPJQyd8ddbRhAT9WAufuWw5HtzvmA4ozUMEpzAv8mh1WBiX8BmWs79XAN1ShNFYv6zbmvLSYPa3pDQ",
  "key34": "4Grjskx9eo2XaPZW6XdiSjdvGpZpB1P6RBNy4MS7RSuMGucyXNQTNFoXBGzV8YM8f8sD56aSiHSmcQseoMA3i3JJ",
  "key35": "nuLsMqr1qY3V4ecbp7Sb6UEGksmjobkHCyDP53CCJute1EK6KhD6ZMfDQ2D1mKRjTs5zDrKdfhLcKmdRWqgWkXu",
  "key36": "59jVgW6H5F1b8BU8nv5pjTfJomdeYNzb7qcD8YN2zDNsYbEfA6GUPtgZLK92y7nzNGcx5ZBUdv8n6zNwsVtwcyRM",
  "key37": "4hoEdvG4mZ7yP3J8sNdLTUZc1oZjnKxPfZdr2xsihP1ZbQ7GhDSQQE9u1WuMM9LEo68ZeCsGpA7Guqz853hZ4fLo",
  "key38": "5TY1x1a4ZcBA3uGUZMFNVx7ejJcvthEcchqxfqj3tSx16niegfcctRbVtvwGLhL2TpQENTemvDwXPgvZKkMeUGqt",
  "key39": "4enbau837LQzxYp3aXTyoNuuNnDg27h1TZEeJbsbHM2YnFFqk8cWYGi14DrSadDzHvER13NARQ6mpD2LbTHiNiHv",
  "key40": "35BrKktJeq9hqEZYTD1e8vH7Xy5DM9643wq4uDBFWb1wgNqC7qUs5nL7tQKCHeScJ63dbRFHdFS8KZPrgnk7fcCw",
  "key41": "34A8fqaCD8pbwUi1ujLjWhZ24XAoZGUmFF9n6sEhsnoqWQq8Abwb8d7nhWvoH35CENDr7kWfh2D794rfs8WPb9TP",
  "key42": "4VRjZHwHPy51ma4btnLeygtU5bRM2fHRbVs8LcXCCrgQ5gv6MehSqfmDoGGVPnBxT1Ey3sHDyPYBxZfoEaUymnXi",
  "key43": "5bw2inBRim6ZuXrJmVSaJTvTTdpMhiL4GMGpcmxdYsszZLmk1NbyQDMCKjwrv5hLNwc9z6Y7uKKEAoWaFsPvPkmh"
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
