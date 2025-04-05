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
    "vXJqGRjQDLuXmqvjPpQthKmpavc5zcK5v1Rzaw8vjmeKFQS3iHGrxo8B6VrL6perjAPhsSSrk7reP7duZSU2NXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593EBDtQjbmfiMxXc9naaMVpLYxt9t1uRDmzHGMxkQ57pFb6wqPfUanweJzuYEBrka2cNUyx9KfH3GukyQGa4Kft",
  "key1": "3VNVhriNHdCRxhXKSE7HXz8j6hzZkEQNqSaGhpKjr1nTCFrAqdFuH9qracBX18WC3H5TwZSiFTfe9ffKA1GFHcPN",
  "key2": "2RvH91gfXDxhTeQrTkReZzcsBfEHvLWCegASBgA1iEqH6uRN33FZXWtptRry8k3rU7yPTxKTw9ZTPvJpZDmdwB2s",
  "key3": "2uoygt3wa9VG6ioVwLZkftsADukTKJ3LXEaAmUBumNtACYdjPb4emEejAc9isWLBiguPXs1qH5gLZn4AdwZQDoxh",
  "key4": "4v9XGTtoAnHunyTdrYWDvXLkmpYd6FUEPDaz5ZJKsJMA3qAGtPT2gFfLjGPfQKSKuwWSgcATfwyxEYNJhzmea3ey",
  "key5": "oW3pK9ngYyTZmAE5adfDYfEem55GDxjPq4MeJxpTw6GK31X9XakGyQGKbgEFLkmh68d2jrAFiBnLinrjjTJyECU",
  "key6": "3ddnPLSUA5TrZizxunDfLwUweGN3kqb5ugo3LajJuSpCmn8ntR9XgT8Gu6MQTKCiFHLf2y4Zq7T7WBSWYebbsXgL",
  "key7": "26NMTBjdgn7U4MAbSoJkHCEY4Qo9REj477dYtxugxJkhvbGjeaMJivh5JGpoKPWAojjmXrXouYLn79iRzvCx4rRR",
  "key8": "2qf59HWKnoy9kfb3nttdWH5pHPwntLktpQk7hFVjSYGp6262HFJsTBKgQMu1s6RsopJNEqepiAKHwSt1YCWL2YCo",
  "key9": "4vrnD2ymqdLiarbpL8KqWSA8staZY4siz5xUYKaogEERUDGUigyYzJof5AG6LT1GtGYif1FwhmGJh9NKbfGd2VP8",
  "key10": "N1yK4xC3YiNCfHp2eSHxsNGLXDBqtdQRi5eDgJh4ifK7Njqdu243ArZonWtraksGRi5YHbzd3XPFeiE1rrmcBpb",
  "key11": "SKe4nQ3TmNRxAobcMT9u8xGkKTqfj8JxfPfmLFKtHAhZXQkxsSmQnb2WSzKCU6rUpYo2w5WY34tfvLxY5vdhr5d",
  "key12": "45T25kzDJaKWFgWmFauX4VyqsD7zsSMB1LAFT9abYz1tovVXVgr4ZzxzpCUPfH32FbZGetygqmt258K6L8Wq3Ugx",
  "key13": "nz7zJ2vbE1eANSYjmq39rKD7ghPVuA4AVGHByg7kV8WGdzT8sqYmqUNdzKrXJHt2rtb6rfHRMpBs87xGKDg7Gpu",
  "key14": "25dmRzgSzQvrtxWBjh5frRYhtVsvN2n7e23cU4wMVVwKDxKTmXfSfsLXbE2pZTeFaTfBWst85DudeRCXgi51th4W",
  "key15": "5dBMj8JXEEZZhWJnLwNC6aYLjLWU9ehwq3MLmTzTmQ16N5cs1GRNi35DT47J5p2BaD1DK3UprgwiYXaokXdT5G1b",
  "key16": "4wmXCkcbYazJ3QJ9SjeATDCoPEpUTkbzJcDzgqbBVjCDiAjJKr3L59ZXPj1GyorV5K8imL3xdMz7QcTcqe3V9KZX",
  "key17": "2rQVAyUG4nBHad5JSK4A1xt8Shm6HQCtihVPmFrCZcZPQ9yzhnGT67rZZMS22gvMMNgpAeGCjdHnir3yLGP8xGJi",
  "key18": "2fR6W1z5N67DNVEj5fBvton1iriQ5ypBbjpsXnx2uF8m6wTBvNd6TpgNb39LFKa2NrZz1kB5oxkiPhHNDn8v59XK",
  "key19": "saW4dd6LynQMdaZmT8q7PnZktTzAoMbRNstFtJPx2Wwti8DJRQNQzmPRB82qbCAGnXtMEPpYn72sYnrSbEtKCGp",
  "key20": "5g8kqgQYS4H4enWWcDPfqtjStWNWWp1arEfFVwbgn2x4p9cwq2TfyuhPYP5DrkChtWBXt3FC1LjDgTCa3ngy5D58",
  "key21": "rpinxx7EoWCJ86DkHG41DovWqGaJqn4LHBLm6DhjZAHHJ4z9XnPKwdSFqBnpiJAaZ84HmsQ8U8szKNmprsH6WW1",
  "key22": "3BAuCG7Pk7rBBqeJeXZi9QtysDTH3kznCK8czCFe8vamGuSddXP5DQmbLhA1iDjFopix38jbgvxhL5zAT7hVdVJo",
  "key23": "4gQsbB1maYBUktF9Jbu4miJMQqDbqviBBYTqRWTGr67D24RYHqbq7mm1XEMAZovvxJW8m2PeG9LpzUE4M2EXoZNg",
  "key24": "31YsDxNuaaa8ainBf8e4Hw79wKLnEzxpZPJnC4NhMdxJ71nbLAssPJnx3GudrecyoGuuQ1cEm9JwNW2BXq2GZZz5"
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
