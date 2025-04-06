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
    "4jdx9LU8UN4djPWzBuJLr2K6i1dbgt5yQab4cksMyKaykyA5ew3pcpMiiiJR93b9EYcMLU7BSaTNVupVkTAQkqFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csrgxAV8NZuhmoU51p2v6iChTV4uMaSSp3f1qckqkz5qMnWWHkN88QrsvvUtXVsHWfD4byxaMAKnVNurT5Ys1G8",
  "key1": "43ZAQJaKdvN2jH1DFaGVyBWoNmzWtAKTHJ4zPraGtY2gR6ma7s4CQS9YkeKwsD3CAuAXgKZMKhqKzDxFgCTvbTEV",
  "key2": "4AUS9wVjpmMCsQiuR2yZ5A3dne3FxLJ5bkcKMr74reu2pZtaC1i9TVBKihnvLguMSB4LPdgaTLfpi7TUCV6PJBkL",
  "key3": "3BARHWWpBQJGfXspyPNpScn3RR6K7qrvNumyi8vSFF9jkyzVv3yNZ8w5DLmvcr4mQaYVidy4XbhDovKcc6ZhV7HT",
  "key4": "3Wsdh9L2kDNZP1M9NrMjxcMeH38eBahRoKpz14mRNikaT645TtRioWmXV78deXFe5wJcs3viV59xe4oqzXGPp8zu",
  "key5": "2xPs4sTLWt17Mh9zyVTaec7jimkVA9s5HVvfL1LZ8CcEVGDRnThubgeoS1XuykgvvE3vLVR2pTHEB5zHbxA1rCBZ",
  "key6": "4JydBgwHK5N5G8mvBfCLTFi64oPN9AwQt9TDkyJhTmCfCj8YMVvnbdiUoWkbt2xQNHNdwvKBtv6zupsTaxamMdjP",
  "key7": "4786AMxx4tv3NDw1TYkoUMpRngw6uRkcB579yfHgXLeD98196Lkr4DQg5KdK1KqVWXj7dAfPXUafxY6A8aWSyZe6",
  "key8": "4HRtcZ6XZ4rKjPQoD77uGRVZuZAhv1ak5FxZZoLJ8UNLhPqZq7o6N26F6vYjn6YVBCUJBdddgKuj8rnJMMUpMPdp",
  "key9": "5vkEXPAxGzg2XAaAkMY5Rp8wFe4VTT1DsdxTuCy8WsT5ePuEHvk6cmMgBdE2ThGE5KqDbR78WHgtPHGibMsGGj4V",
  "key10": "33ipFCcFwDjVAQVVvTUGKUj8n1ZDBDMReFuR9xQnAANwaazmJbXoR7NFqns25KseWpXiEBmazkKZWBaKDgor9ZEG",
  "key11": "2pcypwjtpKs93x7tUH9i26k8QhDgBka1pkm9aPTiTU6DD69jRYJ4sokNYma5RwKCt4r7aBH1E1zrntZeSeDTeDAJ",
  "key12": "2aAp2ctZ2AAHxwRs2yofNMeEttxYkk7phAmLyx8vxBvYYt5eTjBCSs8xtRQmwmgRcDfwcYKfrvoUuZvT9qK12uKu",
  "key13": "2RgrGGbFT8qcKa9oLrzEy7w1JKnkRTgRLeX7H1aBoUfj6hpuwH3578uX4DtFkZCzJhjyU6n8HJyogn9AnruUQKpn",
  "key14": "5GVWJN9MeHcaCXPdQqrBukQtxesgdwQY5xuNSnR4nmBWX6h8MF2VmP3kANpMMFrhknhHqTTG3fGEJWNWSt8QKXxL",
  "key15": "5js6uDKgdBgk4bXxC9QgvB6BHRvMkJX3XVLwjtkngju1PXgg2QMuMA3cE2fMoQDdawKdpJxUbMFBPdTCETMBJre2",
  "key16": "3uLtJ3dsQfktxN4YksbWXNnbXPFwKM2zA7cSC4YdjVP6FwEBZ48twtMhtj4EaaoiaBHVVnEqGV8oiG9Rmgep2a8c",
  "key17": "jhxWcJfj6T1vtAG2Fq58LC4UYXcvqytakdEfEBYrugSrSzMUm4iQkFomuV2tmPFUxcnARzb6q6bHK6MLrHsjzJB",
  "key18": "2UW9WJ2GcWWoajWQDzqRnJL4pLYea9wvMUXuk42sWKW6iMGcAnioSt6Rz7jHhacam3qqxZ9vTcfsRhLVSieQA1rz",
  "key19": "554z1ZyaCYzA67FCHRBaMU9kynbnep9WnmcoAN41XKay2d68tnXu8R7edttKgzR1Dt9RzxefnTXQ3jAGMDL357iM",
  "key20": "4wHnN2pXZFY3Q3gwmc3L1JVja9i5dcnx9ZhjfAbeiBjRBpek2GfwgbX9Pp3KmvGR4dbGLwxHpk6cXf4U6Eye7dpy",
  "key21": "21kgrdJCLwPeku3reMaYv4dEZ1uMRNM7H5c9oj2tvthPmgmmCQJKkh3tuG8Hc5pRcF4uhsiNJsU2SQ6yABkCdH5j",
  "key22": "44MeyuzwSyUz7miRrmJUZghtzkhG2aQXAKfxEPV3uRvXLQreer6KjcjHFdxETAhvWMQJ8tNd4oUiAcpYzBaDe4LS",
  "key23": "5EvHUdfETy74gkvFgfPYfcC1REYEi2y5ZKaKj3XVqBYDyqHpm1Pb6pDok6tqNP8GqbgmmtsF8HbjcyCn5hvHto8s",
  "key24": "58kZkWNwH7JERbRm9UWb4q2LmchEAPR7jNpmh2ZkNHvjAkbwriX9p6QfFEN9S5UdxhFMUCVwjVduJ38CmesNtJxY",
  "key25": "5zBpEYjrhaGgY5FVdtwPLprbmo2RJoEJ5cRmA5VsQpSSxT5nVe3V1rH7Mci6NCLF8qURrxDp13H7dmzNFxB6wsWu",
  "key26": "27svzXSnwEjGrXTMiMEartpRSAcvLJg3KKGBiEqUETJeq8ZkdL5yvG8QtvC2pd8CcW2cjiGc1pttktcbGQgAzyDq",
  "key27": "4v2Zge8rDJDVxN8Qu2en7TQi8aE4Po9FXLS71SivL7tV2PUTwYas5UqhGAP5Nf1qithf3wzfmQzq9qzPsvNn8RS9",
  "key28": "5K7PPBJ7gNHvJxDFi2F7rCXUwXU6rPrNmpHY26dA1feWUnC5JsGJ234Q8x7uWpEn25s2bK8ik2dk2RtTqW7Moceh",
  "key29": "kDMLqb4jT32FeSGAz2W1nvVmDYBwCQ5RF6T3h4Qe5az8tTRofzNrGsk6xatYL8GasRmADsyCUn9mHakgNrje5mu",
  "key30": "4xd1j9F1hCFbMQcso95GQgx79gx5xaaBPnucYgf71Ly4HnBR9DKrZVYquWtsyTHvRmKwswJgfbBBcHiDCf9v4SfY",
  "key31": "FBercL92J6EaS6Zvzr6bNjSHaLAFPrVAmMNbS13YyZKAwMX7ceD77uvbRzd62Kc5HWf8ixDMQy2sQ3n7Dtb4ruC",
  "key32": "CPYDQaTWwxRSiSWNh8Ku4bsqEvmWZjcFgkFgkDaon3Rpj6MsqZuCtn4E9spuoVyAXbbQ1MJMyuFDLJjxY6ApQbz",
  "key33": "QEMJ1hZeGfgsN17D14vkcRBeNmtc9vDWvekWtoZHNuRHTb46PgvUobQwNACi7EgTHBkY6HyKesqbLERtJLQbK5E",
  "key34": "37uwfHTGr4D2VvxV92rtkw3wEQR1hPGFwvMQhkwXALvZ1EMiCkSAk9Ti64TP2aM2ndErYja57p3Rknxqchqsw3XK",
  "key35": "4NwWZoQiiXXVQWB8Um442hMUbDgxcvT4MPKy5ZbhDDWWGXKdBFoV4m62sRun4N6ZquaJY9DGk2oUVBYe67vDC4uy"
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
