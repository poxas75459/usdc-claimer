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
    "5j45pyGS43zZEnbRJkq6syneppNWewfew8wuhzWkCe2rKoqC79hyTXAEtjffMd1qWFMzbNKz5NRq9WvLiFmH3Twn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQAGgLts9yJw3Q3tXWZyR62hf6C1swyqnXz7wS2yhZSd4Mc3Pg9pYwMjWCjFR9SwXaouBPSEZTyA7FiZ4bB7rXS",
  "key1": "4kjbX7XukSetnWyiLWzqJWQwveBNXw1RRiUtQ5D7swL1UtAG3Pxn41iDx8x3auxgdi1JbtJcHLRARNSVybCUiLBh",
  "key2": "3FmF4MQn2fHyXdZYwQKxdhb9WQjsyysGbpPG8hFKGrLA4fdA8BVkhYMZJuebomk9idpQRQfiLTcUF2ssHkscA2x5",
  "key3": "38TLhwKh4UjGqxyatD3T3EVm4GPVd1v86g46yLHRdH7GvMFDDzgArvmS5bt7BCGgXHcqJrVeaSYZJ8r23v6P7xc5",
  "key4": "5q2Loch6Gcq9cjqgoyTa9N4UVZZh1f4mYGduaNmK6oZAopdfHxsHcR45g9k3D4C3dz93Bb5BMgBxYUNDCmX8ETYV",
  "key5": "2mC6NFeGeAVJzwRoUnWLBfWSvfC66zbJLcoyDqzDjGtBqHLEMLZ84PdMz9SdF7j1MnwNDSMVP2QwPt3T9vkM5MbY",
  "key6": "3eQMyjbnUfwvm6C1fNMy3meuGSuJweujX5zt5FnqztNoYFqnsarvLEQHNNmAZ9sa3gyWqoVFrzqv9rrcnDsJuxG2",
  "key7": "3ByBNsPrp7rKxJop3EvKMCkyM15sXM25ryYr7EDnv2ApQWQnsQ32G2KLwpQPtt5EFgMzbLoi69vC8VZ16DHRpSQT",
  "key8": "2MWAwDjgardybA8UaErNNJVAESjkPDpH6soDQfT1rF3hKtohtP2RUovrpkNrc57gfz7mbCdTDAC5baLph9WppQ7k",
  "key9": "2Ymwe4gk2i4yfYRgLieu288We1PXtdrRXANBXkDcsPLMobjfcvaujwLYCShz91oUXEYCyN3xG1XW1u9cp5xM9gJf",
  "key10": "48ABmWN6kVFxqRsWqGTyDqrS46xGz2xHXPJqZaE2wGP7L3CNwUE3oYwe1QecNq8fEyYpEd2iQ6siGCaPt9DV3wk9",
  "key11": "NQqbEvgo6jzmztaetTmXEUdBiLa1am71AupgEUgSzDeu6PUN98EmuMXTxQTGYuxLKjziuKhoAayHTdrPS8ca1wY",
  "key12": "5Z6L1fMhd9811MM6j4eAtVagYYyuWk5L7DABdLcMvZ5iqox2tTuE2pE8B7GYk1xKgfKiqJuyEsKteYPskxTx2AoC",
  "key13": "4jSk5PA23J67jcAXvq8qX5fXLzoXuksy3NqgeMaA6AtPssuEiWwz4CKtHn8iy2UHuLjLzTWJWdxPjDBWmqRBXK7S",
  "key14": "99oF4nni18bLmqHarU1dWkF29fXxWgBzsYwWo49S3DWcHu3A6hfEpDk8v2oRoCAg4sE51tmG7HVEW6ChQrWMjcC",
  "key15": "2GPJHrJx6U68RJwvxVnH2TSPKHDvnzZQvHfeyKutrt8E5TLceRMhraJo8m5ivgFePKKuxP391cY22578UQy1iagg",
  "key16": "5qz421y2eqP1aAJxwVuURgjTYr9kkXjiydz577N7yC1UaAWQEjfcCfqeocLeMGx73ffrdeUmkv1QQcMhQfJVWafj",
  "key17": "5udgrWE9Rcq6BeKTyLTWFhJYfugrfgm35TVEJVtaGjduz9wFRZrwbibpuwqxBimZbhL3pmBKpgoqiuxaXoBVkP4S",
  "key18": "67CrAaVwTkcnMaxpqdUirUJsqqXZ9yun1yH8ZoKL1zjkvyDkVqWZtNhFPM4BA8aahD7kCvG3oooGgFV8WCSED9CE",
  "key19": "3rjfNk2igqtv23F9Wk9qW7Mb1Jh527j8CVoUL7sNmMEMV8cwDAYc8n6wbCBfSFTKQAgk8AXKe1cDcXf8ZdinwiUp",
  "key20": "L5ZNSeawAtjWQpCoQT9MDGS74AmepiQJ4WmadvnLSpbFuayPrZfp9e8uRf2wR2iVDQ23BvgwdbPSa2zet5P8jhz",
  "key21": "5QnbAisy4W6uBTuGmAXFD4Cj7FQpfu1yFZCpcjxce9GbpsKRAwudJeiwxK5NVUcU9knrMMxMagPPyjqDX8mdQkfc",
  "key22": "5HxkkGEQUwtQyrHuY3YGiNfKnk8HQLbVK43zkB37TqnLPbEzV5iadc5pGg5se7EgsfRKbbGk8RwtjLbu3AF7aVm1",
  "key23": "5BaGXr98VN9Gk8uBUDDC3aDALGHcMqjrGbtM2QB6f1wcwXQpxWNmztn9uuhsbm9ck6UgiWLbHwXsnFyUZRxda2wd",
  "key24": "5RLpSoAC3i7RiyYfHLQCFr6z2ATotuSRfRPS5MgBPLHhmixU6wH25NG6ngLKVxBvFqGByG3w2aqCeHPnfdiAoCDW",
  "key25": "3dCshZDhBa7dXMPZFXugGRXUWiVqfSg18ziozXPw2sgJ89EPVWKauG9dHugWoierfz1ixrgM5gdWXnWQzmr24Nje",
  "key26": "5YD9Gj6CYaiyz6XFirL5khkz5BFxh7xAPrmqXfCKiJqXkmvzAFLXNM1Ht2GmBiuEgkrcRTchGfXQWYVbRAuC8zH6",
  "key27": "zxvWCEWtNeYxVH2kjtj6LWUyg7yXMmLR9jXAV6gszQ6SgTeTtHGEXtpbhntCjMwLR6i9bHowP59Nmhs5DVmtXHF",
  "key28": "2haJ8JRjQszYskhwqUTE3w46CcUhspcAupK7DwDhuKbqjqG2EPVXRc7Ab1YvNCGUNXGJWKYpFUqtr55cyH4QEr1w",
  "key29": "4j33vTrhutbaVKqjvHBef8qZokAEMho18mYo6WhjfY6fRFrndgdi3eDhWHVwwoHhwPiQzKX6wBCXmp5SDdKdDc9a",
  "key30": "omZMLNkgYC3XRG7vqDsKJanfMDeDthviJL9VYU48hC6NSC86DEKDfgbiPiC9iRQutwB6F8QCPeuxDPfyutAKHp8"
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
