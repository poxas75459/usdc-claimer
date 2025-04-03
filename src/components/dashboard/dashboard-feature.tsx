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
    "EGFHCZX4vMXhoHNG1Q3N1TuvhvuAcfQ1zQBE1ajNPiErxURxmt2iGCLnv2Q2L3aTxRqFJ6B7rj1jfrLnTy1CLcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hh7X5pkFx4LYi5epswdjeo2cQp1CttDBDeM4oX3j1NXgx9eQi4zYH2c7CyixgnE2q3iy1c9PkRjpp1RAh9v1ZD",
  "key1": "56atSig1zjVGXTDwvZLG7vPT33WH3Vz2ooxuG5NSxPqZ3GYTT9NKkM1fQR9nDE4HEonSHujoj3Yri24yrtaXqjyi",
  "key2": "FLDPqYJoTHYoiEcPHpzwYPHE3FCJwNXfLVq9CzLJDmcFDJif2R4fZwUvjw2pvUhFJ6smuyhGNMbdqzZvr7xsqgo",
  "key3": "jznc9hnaAuQKBa4wFyQWKpAyyfMeWNuErRNbo7QVdq25joxSgsYVYjc7ZykjN4TdsC6T42pD8Cmrj7hukp3na1Z",
  "key4": "32owFTuqVdsqR2Zzn7SaTiiEdeaKCvTtPs9azpQaP8omPbu4CnHCr8qWbvg7M3j9oHuQKHkW8p6xgEGeDW4Se8jq",
  "key5": "LTokqGc86fjhb7FuLR7PQyDcEZsZBBfyyySNr8ryiLSmsG59vGFQcxCXzCjLC66erUcejCfMgA3nd1cphueKjai",
  "key6": "zKwknhfsWRMt3ER2pQq6qg125QdasRNwJgxnnhY9g4ob1ybwpzVZMMmBARtNY4ZTBwM9sbaN6VtPRPs55FDrC3f",
  "key7": "52HiRd3HVysmxXsJSa984SDpLeBHn5GMCpXWP5zeH5e4WdFgCJ4axsYFj6sE8j669DjtRL7JoJYEYdUSLRpxpcrw",
  "key8": "3WRoSJKFeBEXTdNjypp2J11a1UMdvoZA5wYxBV8XWx4mbxM9XqM8tvN5jqC1QWj8qqipAT5TUHZ5YnBwkqLSUbeu",
  "key9": "2VDcDhvXxa2d7tUoLJxGJ8ZE7F5tCHCovMSNrF2iHk4xaNvQ1DqhTMAhEZxKygaEHZ838baUQmKpJwy2VjXnw7Vx",
  "key10": "21mGivm5JL26MXqHtavwKonuBrvWdQMPBFYkX9xD6yXawN7UALPEJP3KJYbMU4kh5ZfGzqCGSE1h5jVAs5GUcoxA",
  "key11": "2PpgtxNh5FsBxSpRfeSrRBGeFLyDiRKusWUTgfkjWgxXmnnuXDBp3PTNXYo8dCQRQpHM1L3FuuX25P3qKhGVvW7X",
  "key12": "4pRQfECe448YeRiHhVicu76K9HszGUqfjJSngynESsC99knoKZTXDkNZ79fXe7cQJ5mrpuvJYwBompeFS9nGsDeA",
  "key13": "5fC2VTpECA461cb3rCPagjioHXhSMreVX8XvtkETC4KS2SR4WbRH63AWF7596L64WPheoqLbGWHubJ9vfTWsF7jW",
  "key14": "bQYnY3JSXa3GC9A6AAD8NXbQxGV77g8zvCRF8Ts9DNaBUz5ocx93erdB4Trwy3QJiCr1G4gvi1GVSbtUcwjyQDR",
  "key15": "4fohw4DLsxFCDmyd7uE6mvcW1KjzBM4xb4A6ojUHgkrf3WdmYkNjGsJCTy4VrpkgGmEqGEwxBJ73gJasm6QPYYXz",
  "key16": "2Pz4dVEFopYSTUS7nqCSHto86AAzHgkrvtn4N8dGRPeutpm2UUs6TXVzZ9b4VadDFk4xZj11sUeZyfxc27kCBCKW",
  "key17": "3QKQA7Y6Kh4DzW2nHtYEwsLqd7sBYVJ26zT3hzYDJvtCXKBTbex7DVJcgCE4HV7zZugzRAS4nNmt3dw6t8eDCWna",
  "key18": "4QKP19USAkYjndAtakCbW5NFyV2Y4fid3pLnfeiuX4Hi6nfr51rWUUqVN4vhrVpA39wFGoVs3kfiu6TAMTkDUbGD",
  "key19": "q6j4vWpP7QpqU66EgCaNaYB7B91UGDsbRti1au8nVZPuqc5KzhBuGvYUPcUZrNTqKZG4qrNGVcKTEaZXxKJCLE7",
  "key20": "qsdV7MgHXvbpar7mkx49T9MZP6JdzriiUqzyEVxu8FLJyCK2khzzVRNcvLfm9Nbbbh7XKqHa1dp6MHzx1TVVWBR",
  "key21": "Af4KNz64mn6DbqaAs8PdDGDmqNd9RGfJAdtREZgMSEcwY9ktmh9k7kH7WakN2oP9aY9W5cyKJMWe56ZpUeAhy9i",
  "key22": "23f1D4H3EqYkMziFFHWaHFrbVPeVFAB4236xDRs5pChpPHMMLtLNV9AuLAghPjwvfXz1LyxY4EStGDiyAiXm8Ksa",
  "key23": "5fBAQUkUEvB2yCoVH9933vR6YZwQj548ufG4i46KwxZR9acxbtp5Snb1hh2GyYBAhxrJ8oLL33x1mZfn9zS9BLaP",
  "key24": "zwt8N5bHxN2KZ4vJwXuWvcqpsr523CCPWwhiS1mGDqCfDeRRVz9VWH9hy7wfxcGQEz79KkQL9ZRN6VfYskfqCc2",
  "key25": "2u1PmLHopzkkafFdxMQbNTFeiixRDewCQE7mfUn5KQeWZWXKbtdMqNQeBTeMyc7VpDfca9YaKvZy8QXM2TVacCgD"
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
