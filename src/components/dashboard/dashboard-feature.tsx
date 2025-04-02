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
    "4rV9MLk1J6UmrFBRG9AcNidgfzSVGvhyc5jtVJ19UFsZ3fpH7GQA3wwd7VGmddbrKdcWXpcbM6V4TsLB5r2enXR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvom7Diemi5d1nrMB1MF4oonWksNeNQk4Ga68hzGraAtZQeMJSEpLAHAAP2heGkHAkUNf34V9xEC1V9px3JGhNH",
  "key1": "ZSeZji6MHVqLpMXgj1bSMayduvwEEbdoeqPohgLCxUFTwEkhgzxxDcjaZCi1qGZ9kShDGLUZmLvKYyg6tddQfjK",
  "key2": "4k8RwCXa5CXbT5JkqZaxiNQEXbi9zgfWSeJxk7HjhBDuHFGhgbVzDCsh95unKaSuUwXFm4toWDESbxpGwa9XQ2qp",
  "key3": "3JPnSTgp7UGhLn2xP4QEc9zrMxVWaVbyDtwYaKZdjVq1ben14bPD8ZFKpvewYeMZLbntCyTX9JemuZVYeh4taSz6",
  "key4": "3RfHHRXjSKE4rNv8MKHaZeSesjEwJF2L6WofkMpJDuxk1W1XgywUSgwrDet8fr3eZtxxPYWAGeQmYJgBxMPNiYUF",
  "key5": "3bGhVcTbKHCvXBPfyQCVYFd6W4rikWxSEue9UuQ5K1Mm72ya9gYDVh9kg9mPjHBYM3yeUvv5sujNfFv5CAWqZmB9",
  "key6": "5pWUHRwkWjp31hjbetPJU11uwHmqFwW5Mc7KjBBKSWmNyB893T5P6i38cuikPYSK2K85cDjHUxHhh5PxCxUGQFAV",
  "key7": "jx4gzkbb2GGocwrRE4EyQCHtmC8WTz5ywoh4wfKNEoF8seX1DridXq9npTS3p9m8e4TSpU1H2E5eduSGRS6prXS",
  "key8": "2o7Joe3GWJbmQvRq3sm4opKmt2msXntN1eMEVSpvXZnYejmsgz9bWdrK8Kc7SgXj3rKKhCUv5iZ1WFSEf6EQnhDU",
  "key9": "4CSsUZyCMRfzYVAuRMYW7kqKNtyX8PHzvF8vpn3aAS73d9HkgTEALreozHM2TjQxMLgJQfnPJ82KxPPkFQZPLfn7",
  "key10": "4QuuKMus9EC7Yf6Z1A9BU6bRtfTJMiUBSVeM8N3oFYihwNzFtnR3pGAQzBy63QP7DjgE83Wyf72SFVXDjK7LMRrj",
  "key11": "VHkPK8NUpyP49x82xTAjuNzNpsikr4cXd2EYDGb4VJE7Deq7PsFSm2h19SzbkHgkgh9J32Ausicp7L3rmhkKyVV",
  "key12": "5J5surXg8ZPeMJW9Pu2o2P8qsJH3SNHGK3S8j9fQet5JS3mrUGFMf8ddYwezNPyiXekY9tzq98R5bvBVtBHbC5gK",
  "key13": "3bRGppJ1LEx3XyaRfGXaiHWewYhEoEmiFL2iKjRzkvLyQ7NQtF4fegAvJiqZUizmRKP7WzJAhTnxNTwd1trQET1t",
  "key14": "2vtnfVETtxwp6Yf6ftLDboQ7NQurLYPUy2BdeGvjfQGRqjc12NC9MHbe2euY2rej6GAXZfwQkFJuMT6SmBLnF243",
  "key15": "58TRjudEVJ8wbV7g6uzjUGMMz7sAorWLNcwQ75rNgce4Bu5Ds2AAraUK5DJHqsbJxw9KpdDNDSyapET8C1Bhu5ga",
  "key16": "6427W1sZdwt1pM8tA2nEMGYmyLL7SZTtkmeciQYHADabGAz4kNh9YwoGSacPAYF9KuFNj7TSueC1iD64BuF9qQq9",
  "key17": "5mGdj9B78xHjyiiNpbE5EuZPgb9nRsuU2abUdCFjvAD26H5NGRfkxvERo3UbdKMRwzRbyiz3aNXbHtENsXtfTm5r",
  "key18": "2c9BUT8Et832kE9pkZFjSRKUQHrdmZPRYYx8jEwYa3M8m6nWdHw9Ym5F67mosgkd2MCr6reja5kF6AWqGsCgcoCP",
  "key19": "5aGSP7E2VM5Yk9WY6yLUQhLAdvjrB1bY2pZowkKrWfZE168r1cN9pqZbJMWPXDdKFXK8Wo4SDAkYWZkHj5V3hfMu",
  "key20": "282WThFA5gtBiPe7icnHG2XNwrHWFffZdtW9CKffVXvq73mpmJLkwvenKMU95kP7cjEfjBVZCnKCRhdPPS8rQp2H",
  "key21": "2AbqQ6dwdjgdgmrtByd8XHy1Jgoh5BKSqF3aVzY6fiLaaqWe1EXJ3Sr63QeK6wBTcu7VDq5DrynshycotFRAZjiC",
  "key22": "2x55dwyqRdJoQNrSrDfjK2oxRuB1DQrC9KLgFSS61ymzTJVxr3UAPQ1GzRpWWUMHCPy1LypPVFMaa185WYUc1FTF",
  "key23": "5VifF32UYxjA4nABTDMNyND6pYVZrab6qtVu6Mg4wT1FAqkdJKJA95F2cdCHzjXCpp8SKMaxbGzYWTzRwwmWYZq9",
  "key24": "4YexsqT63WLEk1uHVTWTDcwu9FDYAE29uSjEKJ5RbhGv9NkiDmVCTtGiFACQ9BwPxY1Vfu29e7Uqr2BtC88pRd7T",
  "key25": "snmF9RXTpzDKmsm3vWTAVF6S5cRgf8pccki9BQGb5FAae5kisUrbnASU8f3Z8vnx3SaKXj1qF3RT2JtqB5WcD4d",
  "key26": "3oH3inLhwbF8njGjiChSoTvcQ7KYrfktPMEzLsofQj9e83meqCVYrDkT51EsoTSNbGxQJ9aNtohB28fet8fBo5D9",
  "key27": "4VzVYzsmLtdbHrXesaE5qonKyMZW8Hw8biKMAaaSTdDMXhdHDxn2Q7or1pmBG2ESETggcspMEe7Wq361SHK6tLQR",
  "key28": "u7C1EVqyJ687ze31nU1dARmhKouXup4km2nT3BJmkmfDbY3NiQ3E6Zy9uEvYGhCVR5HDmPDGyZt6aqEy4WhxaRh",
  "key29": "2v9UUc1arrn2oVCdQwrY87LBFVAW8Z4ChnFqBn77Dm12snb6uL7oBL5CbpjfEF3baDbNYgoH2ns9BcynbaeLyYVH",
  "key30": "4JR3M8Pnp9h4G2C2c3EL97LSm3X6goCYYY6SEKB6hAvUDAh4FtYKBnuWo5uHBY3FLw3RbvwVZzK4CszLTCC9kNCx",
  "key31": "3s6pHHwDkvhhsNesRqm6LPdQng7iZZXKCt8veZGtcv3p52j4YeSQ34RNFQjkD4YXFaiDXFnDLU2sG1yZwfUxLaZ2",
  "key32": "5SEU8MqVUTUQbCWiySxJHfPWE4GXV8xRGTwpSCy3bgAL1DHhdXpM9Eq8nQhgiLr24v3RzD3wFM6UgYkdxu1QXaj4",
  "key33": "43gVdGtbqD79jduKEoN1BXs5hT9upNn3RJd2YY6P5pmEc6BKgoQEkjo12njsbCYuzk7TcX38L4mLeYXanuVbTgEK"
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
