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
    "4T8SrxkTyEjtS2gQ2rCSHbzY8jQE8cbnxZxPk2u8XMUqG54tiujKRQ4TYRLWaLdToDgHs5DeegNDqFktjEQr5cyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UDR9JZ1ewxpsiEfWZ2rKQRmhyN43Y74vEpVTmbMPRyqR3ciaXztCLrLhEnFr1BpjCSU8QTBpZJLqpo9na1dhQy",
  "key1": "5itf8qyHBBNX8CHbZidUoTeihqa6HxRGSHTZaMSjwyBDxwVm8BFskbPdE8qiJzQ9cLRvR75e9Eyi1iqa9y8TQPKH",
  "key2": "5K15UW6hNeXUpUvN8JdMDAFkKbTAYRUTbmWHhkz6mbmvsSkPx2Fdizdv9kU6i9Z5ksHRU9UMHC2vWCG81vPiX4Aw",
  "key3": "WE4cny5fjez7fKNqQTreEajmmC5H7Ybb2ivndUwyQebES4vwBbbH9SfraPsjGYTjYeGHxTiKf1go14rMeRPfhK8",
  "key4": "3tb3CuEd4vq5h1dMvBgRGjz7D848j6PsoJsMB3FD3wacVnPz4yuu2vTBw24ypUCuLDsyTfawLCBapM3nMFtVSy4U",
  "key5": "3hBzaDLTMNdApNU3zDYefenwBDvad57kWf7kjCrcivg6dbbVrCXDiVfp1jvUr1D4c5sverTfoxJ5wU8wWEJFhzux",
  "key6": "2gWSbSLFMTBW2DupaW8DHESqjkTCJX1K265cJEM1q6o5iTcfoFCcLTDCimjNX1GBD7R2uoikVs7uVhK7tjLPLfLn",
  "key7": "3yGJ89mgF4SoHSpkk96TPBdj3MVZmjEoXpgtv5twiKs7ngEsdZys9FaeKuK6ddWBmZXfRJRdEgxBwND9qzWyn3QS",
  "key8": "63XqGmEt9hTwR3fAGLehCzJ1krFz5aBzqFRhBnqrTSNEdqpFMRyEsU9Qevd4XEzHxrCeGKLnLJLFJCMFi2GYhTXR",
  "key9": "5iNzj1ToXFLFhwR2ihFypCzcax8cqEtZzENosYR3kVDbXqMesWauMqXcrQrCZDQZ93b9W8ppJbUb4nJZgd39tpwz",
  "key10": "5XmeYCbVA5cfMbs9yym2RQJDtGywrDPqHy5oP2r2eyeQ8bZF4nzRf5nXXCzCYYVEyJ8EovdYHkFWLRthouHfum7j",
  "key11": "2oGNpczCW1GSjegAVHUaXicarZAd67Mu8W7bJnG752mJWmTkELZYiQPoq3GnbKjgxqj2XtiKgVirVQex43wMU9rz",
  "key12": "5Vy26SZ8VtwGGzE5es1khsai7wqTeXojZawbXZCP14WRBDeo7CGBCwDPepehTBhEb4dSeHjfa4ni2JF6XzvB6sAc",
  "key13": "5CpXhpKN4whLDb7kt6JDSQB5TWS5zE3oVj4Rq24npVgYaAwqd8ve6gRbCXaHAc77ZqFwfA99L2bFWRNKVkG35pVF",
  "key14": "4mSBfDDYfFAAjrSn62a8k2f1J2jxfSvw37BbXqLiVnVuPiFTEah26NJnN5PNtHeKEuTX54Yh6ueymB7DT7YLXJEY",
  "key15": "3CMvyQx2pRRJ7KwMtjCUpZdK89HNcCmysUBSZNj8dirUgxt2HFY2Jtc1rYXQToevusHRWffHf3Wuy3mTYrioiVse",
  "key16": "4SCjqidKcpePMdNXPCLgNWmrXKtGHcD5cLpMmzddV7Upue5jruPgSXSwyGQRCC7KQYp2uTxLRqufvMhBTmfNnj5Z",
  "key17": "5Es94vZ7Tgoof4Asg1Du1zYyEkD8gsuFkpMPV7rBydKJbf7Bqzoa585NLJtUYQ18m28e7ujzQRZw359NKogt4CFs",
  "key18": "37sKTuPJpt7MSkskBJvwrPFsF8CaxgGNw1vRgKe4Cogx1dGy8hMDQ8nxBsbSnir6k29sQ8Cj5QNL2t9vCPP96Du4",
  "key19": "2Vpq67Mys9zVV6dfxMjWWqFhtiS29bmUTBmfkZGemLUTgtPWaz6Y9qdWcoQ6UHjjua9WjhzsNrNj6UUvBYjFyKth",
  "key20": "2BB5HJ8uJmtpXw3oG5Z6hQZgxVDzTQJnmQWzJj3AZuCjfhcRyCJtmHWsS7tKkaXVr1tiA37qiY3SqXV95voLRWGv",
  "key21": "56rh6s5i8JLk3QrHWed6972rWLKpFF2NsCyiruZFxX7RaWqDL1byPBBe4rA959iqWT56rGeDdYJp4c2v3FAdJR3",
  "key22": "2BidSmVhYZSPiFoJY68CxLvoDMyPF98AdpzBm9f55R2L81YVaGCYVc4gAqj7Ta5PT8tn1g7Tvyp7Q22CBQxVhwuK",
  "key23": "4hnQc7ptKGBZcNzbepkaboksFyZV3k4gvCoGiaL47hEzPALu1K8cEeVsUxtMwNLYynp2MoDY93YMFdGryAApSkq2",
  "key24": "2RdRotLbsiT8aKeS9RJ2NmYqX2f5qxGfZDqFpTZZUYDjta2vpoinbpaYFidxhsy46Tmd7j76pvsUWxSctuCXXnRi",
  "key25": "3BjUUGCEKQDqEEqPJMtgxh743vc6ZsN4hGqCn7V9BLqybhWaKvsRoHAh8hjmiGNs1PUaBVJEBLodYEnCqoXYRemt",
  "key26": "2WJBGPSEYBv8LJixs1mNSmfVMwKEUGshkbUTxcqN5MwEPHWWZujTG2DvUwRtnUDE2PoZjB4W9ifA3VWXvuraFyvu",
  "key27": "3jVEfeqbSALTKAwPLFdRBbCFrjH4qVQ5xRvxxjo9dkMEH5LpMVVuevpTeKWpmb49ofViAzbonAfHTkkshr32usfr",
  "key28": "2wmcwxavcYfdhWzXWVP32fGdmSqzDw4trKHJMHgikUsJsSXxD17M6kefefgYfrFcy2EuYomXuj9RtH2aBFuaqXk8"
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
