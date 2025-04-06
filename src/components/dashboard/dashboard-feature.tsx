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
    "3Bo1ii3Q7hBKyFqVAoyVAowgkjVB4Tq1YYvhGQyArVY2StKmdQJSjHNzh5aPG8rgkW9nLtLFLvAgRT4yHHeYMN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z67nEqKcQrC9gNqckrzNJETzDqiJaYif3MAeo3Gz2TnmfSnDeEteae1585jhUrXYxJeF2t3XVvK6XBDzXuGDtYC",
  "key1": "vBjwGEtQe64DCjHqRDzfEyn629gf6xEFXwJ8Kyaya6RzNQGLUx6LccuG4PFUbEpT68qKzxiW76k7nPCMrVuJRgg",
  "key2": "2VqwdnNYydigtTPeZzbodY2kbqZFoGx1eNncDECZvrv9iiRSdRQYhpC9jV32GoJj9dgHPW4XQGBKrejYxYuS6wpa",
  "key3": "45RB8PKFXeyCkQKupGVX3buJ4GCDryd2ksp5GCZz3YRbF5hkCXh3P3ycR3XhQqFLaQ4HGQjxgk226rfjCDoznrWm",
  "key4": "7sadGCW1WtY8noKz3dHD9p6gEYTzXdDDvbHYqnN4NGyVCB6TnJp8mdkNjyxXSENTNUG7rExNENKeZjL4TNVcQCu",
  "key5": "37zRJuVJrRY7EufXeheutpvyyvaC4VHPcfaqRJoEGEKt9XqvPWDqwwZQymS7oyzCaWRXK6iV635QL2gLek5otM9S",
  "key6": "3D5tiW3TryZoTYK4XMkdqhZJ8fp3hCkaKPDYQTqmbpVUGBx7KUnjRA9aJ3wdfa1VrBTtRqQWAK442WxapzX7t3jS",
  "key7": "2pnkbvmmVvYnycpjNY9c1cvYbYVp2PEQ1DEjLvGa9ZaD3ofmSVZgYZM94jHHWq2mNJQSV2VMm1xq5NVHGTQuLrCp",
  "key8": "4iXRgDn6FpisxmhjPLFgshL6J5oMUPgX5vKp3A9mKVHfzuTiRtJJfAkVrJ9GsWnEruTDBez4EjXgehkdXg3r5Re8",
  "key9": "4zquVSr8zwPgQTbTNaBwFeYqrUeUAdtHZwYPSpUQHNKdUuQ5VqiqbnWKcesCpDsnZ1AxzmHMrYbvvzZm5JUHgniN",
  "key10": "3ZSyDTsh919YajDJDkugCpCp3EBh462JWqcrP9NRFCCFTajQFYhb4cW9LpBQwHcMUi1CbFf3vkEBNTeqodb3JG1W",
  "key11": "3RT3b6RysQFm5fDoqB8JfNt9Dcoc2DU1hPPK9DXpNSfirxhxENjHqNUwwwp7P2PLpLvCCy1r3B9gJjUgdb3QSTxj",
  "key12": "8PvprbWSQVNoiJug7GtyzMYfZ8bJKM5ANbphn5ZXMCBUyp3KDJCkEn9TF7t1yggAgGain5AHndZYehrkjXrj8nq",
  "key13": "4K3DHtxmbNpkn2Ni4FQAnZGT6snAUJHRyTDpR5v6195aoiuT5iSTLshk6WuqVPSq3rBCxkXneLvmmPAGa9Ppwv34",
  "key14": "4CzbQUWBS1DxU6uPTNzg6CcrPgzMM1coXNo7NKYFMs1hmB4uAi7jd65Zx6zKacoD1gRFHFLondY3LudoXcP97LRh",
  "key15": "3iabRqWUDfbJp3DZBtUeAajdVUPg8LXM3QN2p5jrTVaLSiZxBuH85eTXUd5FRfesCjUKviN5im11sd71z4nrNWD5",
  "key16": "5eCkYmjDbC6ogSanAHs8spKbKE72xebXQfPwKUY2n35gjyFy4iFyGbdc33Lu3hi6JypP6kksZbJJ9r4M6zLp2bYA",
  "key17": "5p19gakWoUrdStau7RwvUkMtcjnw7Jw21wL4U3t7mxJyQEMQmKHgcyJnFWJSKfrugWRz94JRySoDnahUB1fnNSdn",
  "key18": "5JQZ4tDded464eXmVgcWvNzudxVytiBFmSVXFXScLAka62Byb1cfeqS2ZaXWJ7g6e8gnKB3D34gb4He3fDXgrVjf",
  "key19": "377LgvGVPZpMzWnUFnUvnMY5W3r4ydf69JZRfVpK4RaBQfYh5oXs9ndFc5SfRKMoA5EKCMX6Q9nDJqkVFRshmJYC",
  "key20": "5HbRjPy2hySGPGposgZ2ZZ31QGWiA9fgXA3m1SbHqKBSEWJcuJZobpWW92TJXhmiZWgWFAGayQvZtQuxB5M2Q7zQ",
  "key21": "2VLCgiTmigUVVUCGaSgLetzDQJ73snf7nwCEVx9tuKdhafuEt3Rrdq1ui5NSEtrDx5dacHAkGJ9T7ainT6FHP7W1",
  "key22": "4ydduP6Sxb5s2yM2LHthPsfN7EGLefsCYZKMQR39Z2ubqZuCmwxNdcF1Aowva97jMoJY9dU8V3PhpmfCSR9pDSti",
  "key23": "3Ucsy9W6cDrFt4Z1nes5ApptZV49uJtCUaY9vNB2D1SV571GWBVbj4PyGZqvVzXeGmG6NL9BqHmhpgHjYwzAbUEs",
  "key24": "21aeKVGLV8m6ybED6CDTetZw67ZibFtCCjuJj8Gbgqx9LYjjpQGEjbyxDbppSQi33EyQT1h6EjEyLBB33fGfXGwg",
  "key25": "5DiLQW2KLzBfP9hhpg1AcAqkiGgCeNLFhP58gmYH9dG2WK9PfGgWht2weVLJ29oy4Xa5LthwCF533w5JwrVx4vDk"
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
