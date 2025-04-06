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
    "35ER5Qc5cdhBmxHaDK9S4P17Jyo4JQXRDp94erhPReXyiyb1jKhxdWGJN8Mif5RoegY4bze7fE1gAorgLVHSjvf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCqT7LExFuP44yBcmKhRZqbjCBJ7zxsYbZm1j18viJrbk2Gq3WU8Az7zYxWMhqL6RtfCtkScfFLQmC9mkPVyAPp",
  "key1": "w7oayVi4kP6y2TwwxphaERE8exuZ2zpH5gCAbcMCDvgjDq3d7ZdMTAMYV7pQLEjYB31bAXfRFBGvmUMKnEYQamF",
  "key2": "GbbcFFGTBeag8yc4N6uJyHu4eh5d23YMVCHA2w9iyFSH5hgPBsn3VCakvyg6L76vctHK7GRKJjeqBNHP3Bii5UX",
  "key3": "2tCAH4B5zt1U2i1396eRgNEdWWNScgFXCr7uARSJknBpe3rnpFHDvGbprzruGWgUZk4Nzgsb7Bp9cb6v9QwYWakq",
  "key4": "4xvBD6X9RppHSE1qWr4ayPMjAe7meGEFrdpbzGooxTvQAYpyLwHukiRXAxTzfFEsxPVkLDbyyNRzvkse9QcFXUY1",
  "key5": "oSK5CegFb9Gr7t29ayThigzCPzimhJyafHFuWBT5yUsmbmShGCaVqdNB652qyj4RJhHVEWAVyKQqGLBHNVDfENQ",
  "key6": "5JXyZbHKtUYQv4b6mUujpB3bgXUqE4ZMwP5koAtGJgZMMQ4WKi3oaNb14PJ11EkTJN9dYursyoQfAZ2t1CFWrzUW",
  "key7": "2TzYjj3uwigXTRafd1mrAqprpXPYNE5FUVX9LANYG7e8NkzexxMvqfxVSzDDFoVukLMFrkyjazCfjMBn3z6DJ64n",
  "key8": "5TjcbQesm4sXm1aZ2Ac5bpLkurH7BQmbiWabtgu5J5QwVujs8j6mWMxUesqztC9ARiiKtsFSMjgH3epMhQ8TKE1p",
  "key9": "3to7tuS82X42r41w7aaNRsJ1ggKBRVovK5Aum516wS11cU8irnrN5o1qDMv23AQCYYxWg1zX6jTKu8bEeTtjqCvN",
  "key10": "2wmHYBQdsRLSD69nVHgmUBT1ZdXQfeHu9z1A8yWH2L7fDJnYPMYYwsYjjyLZMgwGtkWLcJxSUQxCsv8DX1nPnK5U",
  "key11": "3oAKzqWnDPx5iaqeq5BtnCBKfGK9z4fQi6SWxx5pwB4FnLHcRQ2Yvy7QnN3yecowAbKatf87BXcBBtWaFCcLA4NC",
  "key12": "dUkoEa8ywVtgbGpud97fFP5A6Nch4fhiDaaMdPcoeuqR1ZUCKW2WarMU2ayL7YYJ2aseZZYB8fwNcEzWFkM39vd",
  "key13": "2K5Pertj2upoF2nP4CQSDPHTzbqUGRVLco5KXriKouULLUBTeVqT831srPep7mNf9wGSBoAsBGhPZrYGcYmZYRas",
  "key14": "4VFVy16761mWE8j4p7x8Buv7xDaEeYbkHvGC57DEuB4ARy5BsPXGxPeUxHSVsuTFFKKfQ3ekyBioUcMxSDb7WbWq",
  "key15": "27VHGjBjZpiyVJBUmpJjAJB2gFEizm4qhZEdtcWxk4ek24pZz3Q4c6jj8he19QNMu7xzDZHEqo5ynL9wM8cJZvJB",
  "key16": "67pP7ZYJ79zM9x5XybfJ4dJDxVT79kmciSykPGamkZvp4QDuWHBVevpMjwT3zkEdkU2xnBnixtYeKFKmZdeHyP2i",
  "key17": "5z7rZs2LmUZTp1p9Vg1VD4cnULKzbqRUnv41bBUnDxw76ReJodHgByKKSsMA59xzj9YFDeGDf4aWxkioTWcShDeC",
  "key18": "2A6rZ4oS3piQss9mwEGCiLa14uzKZ1rgPhbz4sXEn1G1TYZ6zEifq4Nt1AtoSTcn2tdBGYwvmxYK8umNBrcqMBCp",
  "key19": "3NpLQTJ8Gs34nf5vbSccjsoEVCQKm99N27jSAY5Ng7hQi3BhMYTp7567ysVYgRZvNzPFQvfhMDpTyf1N3ayjDBB1",
  "key20": "2qE9gDJCsF9mANvx37XDoaoegtL9aMnK6CpWVb1vZ4j7vSsa1PsbXUmL3J3uotNJsMXV7xpvJA3p3UghztwGZEKm",
  "key21": "2HjmGqzEiw8ox7WVYMWsp59W8Bu22mkSCNvUxR3rEFWCqzKBKbW8mYoyJq9TPutAWNboyL5GA798zWM3djHDhDLc",
  "key22": "2UzQjeSA5acUkkecmHEKFbUSU2TpQPTnDhFL63nZRKUwa6GnFcDa7QmM3W58upNLAqYktQdm3LTWGd6FUFGWZUTR",
  "key23": "5xXmaNe9mhscEmLdgBPYq5XEjSMGmdVWA26ckVYnmCh7YfrmXKjwMWAa6pAsB21dwxaLt6od6L6JxTiu7QJnwu9k",
  "key24": "PoE3KBSHs1XbocPJXapgwgzrCSk3rr8nGwNYbD8mexMp3uWJ6qgxjayP2ByPCdnytxPYFzysdjetJUjw4Z7CBxF"
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
