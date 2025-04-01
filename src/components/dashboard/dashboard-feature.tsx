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
    "56qzXcdyEX5TKHmBJUZGuyqBHnyBHcyVtVU7ipkBcWhr7PU38aZGo37Jfs6qTbLkfA8R4qWg22cXT9mY8FYoN4KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5rCJqnffaqc7oCtP1zMSwJncuWuAaFsNL2H8WP9DdnP2qyp9h9gs3zmeB2JGZ27inrmtKFgeyhxKNZFJ3dfoFx",
  "key1": "4ySXoUv1cGT2vL1y1xVt91g8dWLttdRs6tW4RcadbcarFWnNjVMbMs4TF3AZXzGc3128a5AxiDVpEgHsQnCjnYpe",
  "key2": "2uSMqVWkjTsqPwa3Ph715W8DnrZKCMRh2qr8AczDNHkHKsLjTJTGXpVio3v31kp4K1dztXrWS8CJ5EDTcwxK1sE7",
  "key3": "5nJ6C7jXadYLu8Ss4CYK9WgEkMXsbjjkHBRwrbETDU2oL45nymuYyBok9Ffen8uRMLiGeMkjW9Chv2RwsHFFqvpY",
  "key4": "5feXkHfwVmiqfsKfeHfxu2SyGLUYEKGfuDU4QWQW9dHyGruETJKyAwuN9xdRmDVgQMhRe2s2LqYd7tBanA3N8Ffb",
  "key5": "44NYL7mUkbwkRd68y3o3FWgVWKQ8bjrfNmvjZAvWE9AcmGBsoxZeShtVQVVSY3YdTuQ3JpKWavUNRavJ3kRJSij9",
  "key6": "3WanNsT4d3jLQvQfwDWTtAU8ekHm8c7sVKTRfhUAdcKtA69Kz2xGiRtBohYEbsA62dajQEEqa4rmpYxEyi6v3nz3",
  "key7": "2tWYaEkzHmKjCy7839RmabhrFGEJfJ81rsKgfrE91D9zpzJhmvqGELxWUHvsBJ5c6GmUQ36T4LEox2wrVexX4CBV",
  "key8": "2zP6cmZ8YbCYjeurTznb7vvjcKjyE2ZJ7UzSnAfSRWeqcpeHL45DqLqyM6y9HTV24dpTV52F7sMJVnBQnYmVa2Ys",
  "key9": "4en5Po7ZBdN3DrehUgQozVNVFgaQRpWzwP8A64HuHyDsFqwU9aTESSebsc6aYw5d5J6sYx6AU8oWbFcypgpqs53F",
  "key10": "3yG99PAXwd9KGaMTC5xBk3kQrRcUAgW6Ct7ZxXfT1hPB3dSwaoHnHKbaWjKmjdd6WhESRh51V6xpDKF6v298KM5K",
  "key11": "3T8cm2APT1Pbx1UnQvVa99Pqp7D1VqN8ebt1JzMDR2cdm3z9stgegqKoVn8WVjZCGfJwKy123eDhjsB9dpFrn2ZH",
  "key12": "46oFyCohTMoYWmMqoHq94CD9J5ywUFxs9742uZhW45ninB2DZdPMUURVQb2c3xLUbZ1Y5jctrA3DdofRMRxbumJT",
  "key13": "3EQwaSoHaFpSLsGLFc2faRWvptPiyq9P8ZczwpZsuF8DC4sRGe7An3iMeGxuxpX4yKBgPVwb1WjnQmJwPoyFTuwX",
  "key14": "5ASUHceEwiynt8UEGA5HRZwHrXRv7sp799eJYycQwYH6r98TM3XFZiJfeYHrR5zCVSbgSPHeMzFpAo2SLaGn2NLL",
  "key15": "2iBmXyZSgryqU6HbkoEw5D5XwW8awqUNPN9vqQo6TQahoFJ2tPpWG1QM8Z21qZTzYiiW6J6Db5acy3B1ZzUwR1b1",
  "key16": "236E3wSddGSkUzMCe8D4EuJxgAWSMqyb5sVzEkHbKewzmszjDmnT5pTYXyEuvvsdV1ZywPGEH3vq74GtgaiBpyy9",
  "key17": "r7WcjQdTHLG3cHMREWRmCE4JB7nVUm2vF88G3vHumQw7v4YmAEnHwxoUYrbMRPwy6sGj1KtnUNMgEBE7ibexdCM",
  "key18": "3ayZTkYpUQM9JPVnZAFNZEoYSKSbAYLGsm97k8a4K3SqLoDndJV8WXbANZmsQZV245sgag9xhUtAF9SFy4o2w3BP",
  "key19": "3v6qoQ5CuRH53VJpjcAA7Y2WpiFeux1C2L5xb3d5WrcFubPPJccR591nGchvyjP18EhgnTQBV5dJ56HGWGjKF3b4",
  "key20": "3TGFBfJBjSVx8HY1ChWKXFRR8xE8BBsH3mfu7RqzK2QviupiZHJDrAodCsiPUvWobiex6H9SFffYWh8CPn8BST5X",
  "key21": "eiyjpe4sNaeNigRZi8MG7HjUESgHxXDZ1PSDiLnfzVBRsySeUnymtEZunW1Wqf7AB7ZM6APTajyn35guWTis7eT",
  "key22": "3LXoQAJSVmt98TCfv8eVZag6L5pYFAsAkQkRv469mkghRySnca2jL5dEv2x6zPdjTTzJv4PY4jEvmc9RTgqQMLms",
  "key23": "3tQ1C8G1Wm2noTi7yco5GCxw5YAifX93NRag3miPpKQdbx1xadgruLpVRHVGKCZHw1dU9VaMspKMePkyse6QhpUa",
  "key24": "5Wqmn5GuAcPuCW3vfpbSn9WE1zHiu1GHdcKGPyVro7HsFqP7XM7qxhWLfZDqWJSMu6qTdbJAagoqsC76tGHcC8sP",
  "key25": "2EyLFt5qg2ycgwHkrz1H8RJPSvpUWGC5aiQv9qGXcPeTxTzczBGip6XfQUGzxaTrw3ff6SK1QGkjvwPNps14wkHg",
  "key26": "PqMEsCeksWuyfUjRRBEKdAAe5zxSFtNWqVogs5yq1p6Q1wJzPLGxABqFjTYV7taRPGzb5VrcD83DCjgd3v8sKMr",
  "key27": "5YHpt2QmWaN6NoDdWgVPVQVQRTn3tPyj1tZbAf5vJubkdkLmdq7RNH2xZMuq4TqZAgfe1WdXUGLvFW2wGXw4ATq8",
  "key28": "48SyfXCJTtYe9uhry2MgKMrjFt592yrrELdcLLrrCJhJsgFZ1nWhz7vUJUPpqhNBh9nH1TP7d6YsaGuPjrNZJTwX",
  "key29": "4S73hhukoTcaFzSMir9E4NERHns51t34xbrCu5Qk2dsC8miFjdhwojd4RCE6zGugQJ4RNp7e3q5Ny7HjM5NXJ1QN",
  "key30": "3V2UstspBc4ZMdVKAispGWDY7UbAqkH3szSVpwQFsnLLRZYauDY5C7CmUne6NbfZi8jQugCAz3K1fCW8aKkPzaNo",
  "key31": "3Tb9vT4AJJLPFdXQdSDHnYGbGvrUiZYEUb7txwpEFAM76J7yNyfGDN4UxSd2j3MSpdipsVX3E589iibgPTSBAQmT",
  "key32": "38uNd7tXScCa3mukWrhp8opSMP8AWYLaDFK3oBrnjBuj9tg4uGxxZDa6cGUd8bYv7knJHKqCdmHYvJFi2XrwA9u4",
  "key33": "65PLU27mwYP2VumZ82ra2dqx6yE1VrNbRXvhCNU6DjTZFih2NJoguMrQs79WJ7DdKxTPEDW1RmdFZa88DMANYGeC",
  "key34": "5NtHHuEn65JXRrqmf5cgdQb8ZmbM4nmuJd7cWXRadf1XruNSyrVohBxb6SycuP4JChe7v8Kim5inFqWvUfa7X8JE",
  "key35": "kNvb8ztXzqGVf9Kt3SgVNg2Jk1dC8ny81JGUuV6K5wWF18MkgtZMkSusUxVTuTqj17MhaHVqooB93HESeLGn7J8",
  "key36": "4ivzbUnaEnhgEDo6P96FAzvue3qGtv4gP8pbmrhp91zSrywM1sMh4XbpHmbcZMDcqCL9PSCnrh7ag1dsKWcPmw6K",
  "key37": "2NAXpRFEJtMgjWLn7HT9qZfhPVyRwj1Qj8hwqmEb5wjZtYm49N2BeNc88qga5Wk8tGVMfWYr2k3NArZfUsGNknrY",
  "key38": "3mqQpYdW6frL5NiENJMsi63VYsdcU4yCZWFHPF6X9YnjbqTcCXoqDcmcw9Ms2A4ifvN82EtB3KaMq3DNi9Zgs57t",
  "key39": "1WCiYNppK2ECUwX7xCVYjwRjuaLfgzACu9xrG4DSBdi5payPPMqeHq7nVKmrwNjfwXomQTpFLKHPm5EgX4FPMNX",
  "key40": "2Wcyb4NagSKQcMUwDo7BZjiEBFgUeHpn4zJmiSMEMXYZVdCcywdb7chF9qxzPK5obRggzhnDWyepU6JQGBx154Zt",
  "key41": "3UPw3jTT7yPBhWXDWKuadioRih64dBzYruLgVHBcgLaEceYtCQDDuxQGjgGLLQgXmSyisxU67dkw1h7BQKLNEJZa",
  "key42": "48yTtkkDgygL5bGvPABkdwRU72kn7SuXxXdU9Fn6PH2kud5VwSGiodcC7xC2XdeybyfXU3uzuhfHwmd5wjMVa9U",
  "key43": "63jPierMt86tgfeMm7edyAeg7r3zH43DnQZm5r1d1b6jjX5JHNK15L4jvyVzUYtzxV1KQE7r397Hsfoz4VeD1WKZ",
  "key44": "3QwVzi5samTsLVF7t5dynwBQXmxAH2xekk12r3gRHZGsBAQEuScjkqm4Av1cJZgXJ5NFPBrmHMcTjR55neE5x7sU",
  "key45": "2TeLbCekH6baG5Qc9XU3RKf5doPpyUDS7429BbsxhepwchkVYrYkqD2gnHY7rhyrFSZ8EdCmJK6w1aeqsP7FuGGh",
  "key46": "i4rg4YNDheKgwmZ4gTPThpe1zLiZLfa4Eos6ufNjJFGqWJwPUb43g4J38zV5xX7DoevcTAt2zw97aMQ6RSr6Dy5",
  "key47": "3ryDEHbPkPSGnukhPz6pDcdtw4a7WgWmVXgiVabUdeu1U3LR3KKU9eLtTwASV85seyVGzSLGhCFLXgxK4QmDLKu2",
  "key48": "5zt6rFMVrYvBMatmnefehetHXZkpXPUozom7DrhaKsUBvRrSL6JP3LHLq1iFaQoe7xHPAPa1rz8BAuGMfrPhhW5D",
  "key49": "reRYwhUxn2haU7tBRcBLUoJDxY6gDn5knQ2eVNSz3Rhuiw8XV65KQ6hq9znrZWa8QKWCK7bzqfXVATCR2wnEMPb"
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
