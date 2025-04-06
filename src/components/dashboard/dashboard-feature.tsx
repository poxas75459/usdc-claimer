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
    "5qN1FqVRXJF9LHjDqZG4RzhjFoJbEbXzAFpfQnRHF2Ao4h6V2NAD5eWYEiR2d1cxEHFqzVc1bFCGoodpFKXE6jpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vHeYPLHwZsCcHmShqK3et8G2VXL9fDD62o3J1mtyuzsdLiXoKXsHGoF4WdmQc1LB8Vvv7vUVafkLACqw2CV9G5q",
  "key1": "637UX3uKujcCe84ZdvufVVtb15joNwEBSMQBKnP6jD8hDbPcAurCZPjyySvBzHo3xPpsbF3eRYVWiWz7K85iCLsF",
  "key2": "2WryBAMDmRDVp1aTB24CGnHrHGoGAuXZ13KdK8aa2EQ25Yx8aMpTaPisLcDauNubSDT2PXwxxAuSem2KxJUgQWUM",
  "key3": "2uGhWavfmpxHup6AVJCrgMjfFYr2R2xAytVZKRs45xPdW5834xSau5U4Aek4bu54RzgxSrFtGuvPDEgvv28cSAMu",
  "key4": "64FJBrQ5QeRGQASPwVZ5rmrPQ5b56ft85XkHUdC88hX4uGycQEDMYrCKQCtJGEGz5QQadRQT3fEtJHvF3QV6X5vJ",
  "key5": "3mZRQByUAkerkZQMekzpXdq5fHuYnKppTypwXmVMyWzfdG36iEJoYV5wxxgtpU9bDye4H7VZdS8s8RvSD16imDoR",
  "key6": "5TsMQi9ap5DSBczzJ4VgevCDiQc7VG1Cr94ddsjoVXQAnggMHmpok3u87SAAKaneGqReg8sik7C9Vx5Ba244MjCK",
  "key7": "uh7fZEurff4J6iQkwvbbxEq12n5JNGcjJmzh2cGQ3Gshnbmu8ppjQ2QMxWA2zbiSsWEFrdn9FqZEKKqKFC37qxm",
  "key8": "3c2usbydCshkFmryPGPcvuPF44FL1H2DMQuVrRKKvZscjZzgMSQM6NWXxKMijD21H56WUaydm2dsy6qaneCZPZkV",
  "key9": "44Eif9PScX9wL7HtFd7ALzF8UmmJGGCAjwzCfnBwxWcJnkvExvKqk3BJUVozFcPihcz91Pj418m4vhAhzwoVmZqX",
  "key10": "2goUGtpn17Md1Y1euRNqFgMymdViabpLxpRiyaNvPaV52FAmDE4pEQjFEk35TJheayhq65wXm217okB7WzsTcKKV",
  "key11": "2G7uUajX29NNJGBFhKtNT1v8tPCZ4dxNHmUYWDEVPEe8BW3y8bfavoutBEgWDGSLgA5dj5VsUi3axP9uQyiKMNQj",
  "key12": "DtaLmL8wQu4ozLFZ58F6CsZ4AcwqYVCdMjEZsD8WtyCU36jsJ5jqBLXD28YiMgbChHWUifSj5NWLN18iukj8jHo",
  "key13": "gfx7Q5H1WTZjkXmtxsx2q5PJt2MwnP7mmtsXyu9y3s1a1S4gH14tLFQBfTZXDzcKiEhST6HSCF7ro8dXVvjcFCF",
  "key14": "3nFhtXcp2K5yamYVLA96DwoXMXcJskKG4XHsc6L7NWFhpyYt4nLPvqfiBSFEM5Na3uRDaFNa9hHNuULPH1y9CyuM",
  "key15": "4DxSB6CFm8DvqtUxqss6pV7xoB6eFFSGGuo6dqndRGK7qTtTKt6RggYMGVTFSz7pDG3XbSCrtgpyQ4BihS4RVeTn",
  "key16": "LuSJ11QC2p3qSc5DjHS8dZqimDHXaar9SEnUd2hfHs1RB97EyxH77tWCe8jtgi2exkik5zZ1YkTDQCaAtRE6QnD",
  "key17": "TPSZFJ4s1r3WaMkHbdJf6ipU2Qp2gXxuzdYQRmU9PGaQh1D4rLddM6rmx7xnJpSrxGuVEoogLBnSm16fXfWBHd7",
  "key18": "TcKGfHL7T3rJBYPG7yVMNz3ExN3B7PEU21WRXhRL5xKK696MH7TkVm1G4G7H5nErZuFMSBtMsgiv7YFAbKdyZET",
  "key19": "4UEzBDXseRPVmLZtwnDVBwyG8JTH9VAgwsqWwjHxJexzKhyqyr9GEzWVMeYMYaFqXK87geeKaNb7sSpw59Y3wEoD",
  "key20": "5u6BGesdnPCJL26UYBPnzkGa9AfUZwuGACiewjV9p6F2amtqjcQ9AUbG8c1D2HmACEcCLCUPCvbp9ZQ3jV2nwy2o",
  "key21": "3zXY2LrxBvVjVAJns2qnuuSQjq6yo2HQ6odPxRyFvTAjCgDLFNsNLiX51BZ86DgLgkER2Mu5DXvQ1hscqswowhHG",
  "key22": "2SKmV29fufgunA9dqdbTiN7vmndAf2Eymp2Bv7hwSekF2dBJaJHby97MBFPf5838uhuKcJi6W9VM99sWgUV5dkfG",
  "key23": "58Rbvm53MUtXHPNoFeZC74TjB9E2JTigY12A3qutpDNJNF4ckwxTZTgThqmsoE387k1yaKCF7pdwH1gAp3EbvGzN",
  "key24": "44ZXvesLR7WNMLX4e1uHJW2q5QEy2gPxuYUFTx6dGeRgwmz2PV2j9Q6TXbF7jC8m5wMBsGatf5KETScVGcQtE9Qe",
  "key25": "5Sf3zH7ne43yMftqhC1nXbSN6qMDs8jsSVttac2BvV7i66qA9SbZ1sf4EPfSynTu7cvoXncr2Cz5VW3uco4P8pxj",
  "key26": "4yUskqK4LkzAYGPoWwkCVc9MbaDXNgyJs67W5GoTbX74M8hLBHGoUYobznBt2rBabQCcA6VfAJi3gwtMkA7di5JD",
  "key27": "2Hs7JNBuVbzyJoR25sd4CMR2BQBLkociUxxTpYz6iG5yGP6Q8VLDWeNG1acvCxHBkhLpH8mttBHDYm61hUUNPbYd",
  "key28": "5aehPe5LQKEA9bmqZV2sdUSviSTBTWNdxmaoDKyo3YaMUcx1RgJf1u389t296R9dHN9CV7jrYMy5edzwGjdP5YXk"
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
