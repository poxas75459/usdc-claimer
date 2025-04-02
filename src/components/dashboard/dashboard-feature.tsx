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
    "2b1YTZv56fXus2xgAnumzi9xYLdPSGrqBGez84D9ShJvTbNbUrtuS3pnqMXTBhiTru2vHM2yg9AbMbEHBhoZ7LPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tr7AgQQLF5e3q9tdcXGb7qq238Nb3tCUfEQs2FZqYEcpQrs5j2EjzGHfpJS5eUtgYQGpD1dYixucPb3qYXqLJMG",
  "key1": "2ugWUVsRBWRcAizWNcduFqb3fnBHCa4FSjKoHmyzKrCaPT9mmavhGrPLADEBbvHnsqujxtVkUeCqGxBAfhAey5PA",
  "key2": "4gVaYBuCoTCAJEVFBt3qj4Zz3qZbMt1w1J96VhxomQrRnTYFwLSoFcJZLdg7R4AVXVoGsg31JxaSm2HVunJbm6pK",
  "key3": "282kUAzMALocNFMvrXxT91tXpWphzmqeGZVbYu169b68cUjqRP6Yn2qzi1WJ4Q635JWwHUNLovQpZuAG3zTBh573",
  "key4": "62u7LpRtd2cSbatum6PNxkiRhWQFZ4QUJ7Ya7XHLYL4rQnuvQEjzUDVQBm3ybHZn964nvYsFzzsBpcWKtPeRyTp6",
  "key5": "5nWARjLRrapekwzNKLwNSxc3TDMvGTb8MTTRSxWmH3NbSz9yR4LjsBktGzWzReqAWGJ2sY2wXPtK2kZZvfM2Sko5",
  "key6": "5ijSRtHD53wsaS8GVjb3SnH2qXAMc28QyvUvdZ41aCeiKdVEWZwzdjPsK4iPCYZZmsbd1EFjCzRR9SEunJ2sx5PW",
  "key7": "34AmDfCBRq76bn9C6A3popfN16u2BNeobVaigGaNpwbMiW6yvN6ybWTh7mH5j1oawxRVK381hcDHeueshiEKXnCR",
  "key8": "2A3nNTPmagQZLYJm4WQw3K9PdVSmbShJyYoyLZkAYoYZ7jrXq6MdpqWZHDHbKm2k79zjoXs5FE2Yn7PGznCCsXnd",
  "key9": "bn64WDnp7Md3eMDBwfv9c2i5KH92nGUB7kxnQifYqwef6939yRgTJVHFkCoUo4woXX5TbuCpwN6HhiaHuEFdiNc",
  "key10": "4o2o3W1Pz5cCvQ6tzjbRhQiuB77kayZ55xt9yttKx6csCRFdwzC8AH9EH2iFUnfHUMdRG1bqhRtuP8gX4QAef2jc",
  "key11": "43h9rzCd5pEKUZQLUbbJD4nH8dV4jTDHiHYNwJyaDPEtdeSipV7h467U81B7FH8PtKFY1M2jgMkNtgZUxJTPuQ44",
  "key12": "2bLhu3jZAqRKbhkMTYWxTEdB4Ue8avzNaEtudkqB91pkGYGjdUPvztSqkTg8f5ppxHB4vokqBJwau261gydKTLSM",
  "key13": "7wzmWqb9Ts1AV5WLsre3C74Lhvxs9ZVM8wGEMY1UQjK5P1ew1cHkr8s8LMoeheBBZey6G1YcxsfPnoqqLJYV8sZ",
  "key14": "VEBjtyWtaEXmtunukcggBHDjp4ukUqBfK5KNbGM9TwfS2zgRZbt1x9UtGspiFan98hsCVMqhty1jhZa49Ya4Vze",
  "key15": "46t455kdoVZoc61QqiHrSHbDbV3AdQy2RwwuiVVcHJ4D1StsAvs3qA7L95wyXqZYmNSPBYtLitjcQ8RpREMgvFSp",
  "key16": "2SvyaK97fp4LFzQKQEVdXgGod71X6SLoiqC2zMmGKwW3CUNC3XBUatCnn3YG4RwFrWBthEV1iw2euFwKGShcAeCJ",
  "key17": "XEZdgWiKeFF5hXohkjwHn8jQK6kvK6wQadnJ4zjp9R6GmJYHrjtEgYFwwiUyEkxKrS2fbJR6EzthFSjSXZfVvXN",
  "key18": "2gDBvfmeBD4DPzaBTErGue1dyP4FbhafeMyMhJkQ6KRtEvb1NMQ58tRmC4MWTdjBhHRMLT1ZRe5RsShQEZzWzw6S",
  "key19": "2LenmPP7Mw8PUdYFCjh6MjH3dHrToY2ESZvScjUntjcgdYzeXWQuhJMEerHbGXFmayMA1Yjxr4ojudND5YpVniLy",
  "key20": "5S2AKihRT6jAVB7RnifybYVRapj4rYvBF1vcYTP9Uov6gjkuyWP9kAshBrYCbYn4E8Cdawypf6tP5BSQ2R6FBYb6",
  "key21": "2BSwx5tmB1yZ4E9MTvi3wraaFrKyMD3T6vkxATwSDmC29uB9pjPzrfR7PWubAKpWECCEEjqeuGMWa1PJC7WWuCDK",
  "key22": "2obC6ZBRYdCwsApztQF1jRsM4u7BTfBkWMrMRn1oW5LSxUfsd6bw1qvkVGLgwMNMDHfJYLAsf6cJgZGsJoxc4oCS",
  "key23": "2zmR92M4AUYsmdK6d4bLHWexibsBXRJE8RVvZjqNWgEyExjDwSz3faEikbW9eaG83GDa6vovQczfXJEgC3SQrqT9",
  "key24": "25KZXNMxof5t33ecD1ZnQW91azrSzsHN7dzwf5yx4g75SpDMD47dptU9ptWRsGGDjH9dJvCDXM9vQ2iivEWhSBPr",
  "key25": "4BaSXKjG8WLj5B69uRX9GBuMCRPRyUnVZnWMAjn3mnjPuW3Wb3x6YMgoaiYQht3Pa7nS3mMHwXpcwphTHJfhSvgF",
  "key26": "3E76aFwa7kEB4jZaoDZtDPJu9SWqmB3px7Zqk2RTXxLC73qj43DbUeZTgiegso6VEqmzG6PNcw5N2SHAUF4ueJ2V"
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
