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
    "2wdEsyafvDE9Ro1xStY1JhPu1cAEfho8jc6MsAtubyuE3cDX15qipkteDUjmGg1PXtEdKswoM8vQvwtCZ8SgKvtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MtDnwWU4rCs1c53aywY57Kd2CP95PiVMCTGKMcqYBE3tyA8GFcv4joKcSB1REkh6v7gCTAb2CSxWGJDwoy4FD7o",
  "key1": "FpgfcJGeB7ZbgyqKBz3sW4fE4d6Pc9Acn2mj3yoPUxZdgxN6uR2pD11QMVGRkpd4CdRqLCPENVxaV7LYwezJoYu",
  "key2": "26714JGJftivkmPbRpPhG5Tcax3Em5AwqLx49hYBBwD9E6AK5GdDCFPbL9QcDzdRRmLFcEPGZMHhUcrQtji6uXSc",
  "key3": "SVqRLxe7GoYLpoPRUxTboEomD6iuCwWnzG7Qy1yeegheKbmtkY6QChJ6naiUsHnjqxBJ7ytRnpgcCVU4AaUHs6H",
  "key4": "2Ju6ai8nVXMLmKvFUg4srxEGwdEUYiWfmSNra6xiyTurFeiF59qr5Z8yt8gAawE1BswAbvePz7czSUUbgWwAmSSQ",
  "key5": "3VgaypEw8iMQjd2iYRt6t17zRr9V9qpaTRUmeghqgAcb8vp7Ae9zmNoxEekKh5sK5HFcGvX1WH9ifuiqD9Cs2MkX",
  "key6": "2upJchPoJwYKJHywLq7mjWSagwGGDC5Phm3TrLvAB9imA6T8xXzjpXscp4zxjneaxMv8vfykivRwNLGVxHg4FBL",
  "key7": "5FeuSSHZPeR5wsdYDQQdsV2c7NPAJnU18dFgQ85r37DFMsAnL2rtbosuyVLK29WfNmWetFnnhSBXRLZNTnWxEzMP",
  "key8": "5Whkogtpj7NQa9UNJHdGn1xQvpxQEPgMi7PmUz4nMufZ1F41EMqwvRZFBicEumxUNryjBsK1KTA1FpE8DZ8rLL1j",
  "key9": "5DLgw6hfjkmmDHuTHXtxj52Ldb7aeJLKLStxpGwaKiVeyjKo5PzdnuaL2UjxR9yHARswMvVUx61bRY6vzVh5RePH",
  "key10": "fQ6KhDsEdpcsTTW483XkeY2qYpevuHiftbF6wBeBeskz6P4S5aZ9RFU46g8dS5VqC3BkRLDtY11DisDXNsscgA6",
  "key11": "2aEesDLm84rnxPXtVeDd9iBzhTVkGK8UJTLUcswXexoEormT56k46dgRMBuxaoxLvhrMYwxTNhAAT35P9JiwaVdp",
  "key12": "3R8QCbFzgMkYJzoXwufx3e63A9L2bvauXcc9tjqnCPAjmJhM2o6J3pD5FX1NTcZbKR3rLEajphEYDpvcBWS3cm2L",
  "key13": "VPqF4RMh3PFSf7r9FHaGsQVP2E33vLZMgPSDFN7JnfRZiuXBxmA4RWvmsSRpNqN7NKTWyCqMXb4rg6gARJB42aK",
  "key14": "3T4nyq5CQ5iAf4Yqzfyk6AHwbtLVpyR77VRXHrTJg4FGM7i2GSowSokDbB7cfKExfAWcxxsGyTB35C2pax6B2zrG",
  "key15": "4rLV13Nwds4buACtMdmFatKf9YeKuGR1YsaPeMmH1aB7EJp4BCMy3mBb4STtcB82URjSW5SNxEBxnunA5McyEBSa",
  "key16": "3YtaKqGL4Hpv8tq1Q9hQwr1mfy48gMcDvaW4UNqxuCgsu28uhoUsZ6aqTJDCKjUVC485ukrwpLQKGDFpXV2s3uJ7",
  "key17": "36hkozWs3essVvr7vAQYaupqwnoBjDn5ziEfCyMf69R1ZirjWzA5PJHRZfrdcL2tZMeuMUeoRCBSpap7qvuymRwT",
  "key18": "3S9zNLPYuhq39y8kkPuGPbJh3Ry5hTNVkQKPMWyxoGPLkDKTPcc1UuqVVdM1G7ErBqgQZ4NGwuFVodBr2wFGGe8Z",
  "key19": "5UB8GWjxMierBkdFT34eQ7mVzzqEaGZfHBcXpFkAiLAh8ijxuyqkaBXJrMzFV1J6Rf7K8FV3z3xXbECHL7jyJh4J",
  "key20": "4P5BXsTYtNCmibh7qwczB5mutCectsTeNZSk2ZgyKhsRSg6fgT9McqzNG85imryfhVsbQjLGaemvwMMcBnZAPmpe",
  "key21": "3v7R18ZuqTzr95Am4BPyv39mmY7EHwEKMjVoXR7UMzgrXkFazjth3qLW7iUTx68iqe4DpxcfhaTHuYHPwpMRGLwM",
  "key22": "2hBaUyCMji4TCwjdnoPWMtop22V5wRLtrxGLKoxermiMpyMPxkXRVmKZnCNnU9znfYgD7H1Dg8rbuAJCzRsMy2Mr",
  "key23": "2njWEnagKD8wbPkUn4mZAcNvuMrjhCnCYhE7wpZogsH2dr3dg7QjwdDgBGWvLWhj2gpAFGk8ZcmbH4MkYxZEddQw",
  "key24": "5E42bHvfDKutfR8bat8tQovLzVkxmaRRY2Bgwc6yisCCHQLgafiDbYVwwxM9rrzv6MnpmR2Dtfry4bRcBV2hpUnX",
  "key25": "67SwW4nzGpAPdo3Gk7PqanSkRNAwJDU2JqALkDkhSy281JitZsiHPVUVPPFzn5xBUBFvjED9kkqupQRUWhQY29gn",
  "key26": "3bw5QEvty9HYyHQE6Hd7zsDiXWKkBync9Eh6pDFAAzzDoRmKzuSitHbSJUnFdPQEod665ekECoZiw9dYMyERmhiK",
  "key27": "5EyXzmkjCtPiyQuzt24h6a9M1NNgmrZw9UMzB2bsYf5hvuHvV3A4xWehh3PDg1nZPuy3oPvK7urJvrCDJTLksfiH",
  "key28": "46545AVGPBRXuy4dVtZVRjcKs8qpStP3Sh2qi6wPepZ6m4znHRUT2fKbfR93xYGWWVMGyRHkgD2SYXXM1b4GHDP4",
  "key29": "5zo5cWrtTJd7uHPdyMVvaVsFMjChf1iZQKYt6uyYscJdGLkFneSa9DkgcGP1hSN8XnyxHzXBUdq7UkqB9tjzVMkE",
  "key30": "3ohQw4CDh8uQnwTwC3Ynm6BwzWHBrwwAULv4muyJdxrmNroNWCftWn4QKyNsRdcX9R5JniTvNc7VigSaz38FzzT3",
  "key31": "4bFo1aLPksfDR1kCZgVMtbqrCChVZA9cbxM8VNUs2bMeGrSVyPZqHKq7GmjJWcDm9TgKZxGZHgU6i5xdngRpM2G",
  "key32": "2itUW8sUWcgJ7pXa1Rf2eyMHRohuSAeFrp6NzRdfJR65wskexves1sU6ysd5CriTP7S8jeYKC1vN8NJRkgrhWUbr",
  "key33": "Va9PRgox4nNMqsDSCdi1HMtvFbAYvVDF7Cawjve5MqSiTHmRUdAKmSpjYNqG1DCdJ6TFELQMdNyY68yubom2uqP",
  "key34": "2EYdCiZCU31ptDHViXSYoqaroKpCGrVnF3PssvFMZYfy8rvWj29zdNPnxi3qY7gL3QHKG6HrsrstPUW3mExkRC7h",
  "key35": "CRL921cT9HHfZYccSFTjSEAeTaFNgaaknndEiJtzTdhUbA5cnLShEk9t5buBTm7vsXBMYutdUWR1gDiv3z1rUCS",
  "key36": "Q4PFwwva4B313oYK7FuJ6CfMHcPfFkzbT437oW7PRLJKDtQeG5a5sAfpySrMPmpiG1b3XghvroTt2Y8UcbGBH9C",
  "key37": "5apP1E6KHSYVvq8cJ8MsWLkEX9U1L6nDiyfHA32x39SXPSJvZi8ZpCY3WFApR3xkd7u6qEMeQfig9SG5gQr5ryr4",
  "key38": "37xNZvaeWZ9GCghDKyzvtrP8q1uFm6vJjAYFvyyn43nWCEZGL2o9T39hXwgLwra8UkuJpraDx9rVcPpmWKXje8Wa",
  "key39": "57TYkZ3xbinSZrksYrxMBZuJ9q5jaGQRaKReGYiHYwJQgq3fe8vbbkfmJ5M5AJrJr6jVfzCDbj5xkZ6Q1W2S2vwB",
  "key40": "3caERgES3roDMRiLrqriBufN4ptZSmDxvBxYoxmjx95hGKQzhLfFETxQod5BQaPu5PQQAGvcuRnqaPVdbNYr9Nh3",
  "key41": "4fSEKQgNshBKUPfR9F3i27pj3MuxfhXCtQZKasN4RuzTJ9FVEykFf3B4ymP8kaCHQ4REDxBqbU6WB8mX7G6x8Y14",
  "key42": "5VV8YPEMgDKDnnCspQ3wBjNWknPnmPpGEiF9DvYi5HN8V1TUytf8WHhJNc8UUhHQNV1XEAvokz7fR6gn6KELxY4",
  "key43": "4A3UPHy2FMPpnr5z354TxzmMmkMogLzPHAnRhLgR8tqpueXbtpMmyBv2eipm1Uyi4t9Q1XDVvmfWSRnSR555Ejxv",
  "key44": "5smBrk92mJ86SxKBGku1voThZ63fdCtr3L234ehLeou4GdvggRwZeV7xuWMSMfoiFeoq1eJRQZvHpi1PydYmo8q7",
  "key45": "2ZJw4so7g6fKPsLqgd1vvFqguVCTD4XTFL7x22Ls3zbCh4rYwQo1ee951o8TRBH24uky47cmbk4r9u6JyT4qJmVL",
  "key46": "2VNqvpxaBcZMR8A1fCfAdtoRsLaGgiw3JAoYScnfiJVaSWyLiWic2Lx9HcLny9zhq8suvxujvWD8VyWGd4dDA5pY",
  "key47": "3QeVBGJqzJfob7uCt2MiKr8w6AhNps9uPEx81g4kEYytdcVVKBz8P3fjGLSxvBHAPigQF6VN3icmqz282y8MC7d1"
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
