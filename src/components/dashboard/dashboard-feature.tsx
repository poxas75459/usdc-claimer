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
    "2iJK83tCuKUUWNFfH1DQ3tiSCxpruWNJCn5HrNGhsib2k4KySX4xTbz6m6uBk14EnrPCLfanPorzC6MbvdNCzb95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwhKqruqugUvgGUyyyYk8WWdqnzLpe99VGnMWt4V3LYKKyoFY6GXCL9NmkVvhKXDYzsTQPiSczmJD5Q1CE1Lf7o",
  "key1": "3i9W2FQ2BJ85seehVxiniCBbUjQ9EFSDpAmvyeHt4jVWMpvfadgf3L9He37aJKTCVVa8FR2Af9Ln7YPY2c7bcFSX",
  "key2": "3H6zPsqueRCJazEHvmPmCauZqhWUPGBZP2sNSRQSXLDwhHLQRK1uFK9LpkSWnaZpd8CovGjodZpqyKRy24uMbDtp",
  "key3": "5VAHSG86DKtPKomZntNXCQJSickATngq2N3H6ChrTkrbAJGfWsnUo9hFpYnzf8E3EUQApgcfG3mqz94Svw8Da5tE",
  "key4": "YNpwetXCFjg7KJVWP7rMYvM3q2TXr2EyZcGpE3pZVJc9wpGbszvSqj3C43wFf8YG4W9bpeTNbEpaYnTGbiieXbM",
  "key5": "pJDhGgNo9fgYawqJjSgA3WrNpvZPFx8ZV5TbBdnQerM3fFzUj76hWxExjwpM1KutQVTaGDBvQxSLqXVSAYVusFc",
  "key6": "29XU7M3xZa29upyWMKd2iAXEKVSZVCqHq5v7tc8sVwGae76EzYm19ZVtTUF2z2wTKPRLE2NEBgpUndYC18M7gLdQ",
  "key7": "4YrJXcMnpmMW4oPsEvkiYHLtq92KYmSP2jTXwnXDERPrQjgmerTFqJBzipAw8zeriWffJM9kwEa2ixS8MHqN5Qfv",
  "key8": "612qTAaG2unuRLMzwxnaNvXRwQGz6FJoCVVpYeeQtCZ3ADxqLRotT4zXRpsucBvhP6D9bxwbosXDmA2W5dfDqBqY",
  "key9": "4Dk7wuqA5thku1TnjqxLrEsVfTtFH3YyBG93VW4vmH5JF4wsNGg5kE52dJ2Qwwo6HimrBmNgdeti7XR8jPDsmPhd",
  "key10": "2xvABz9dAMvj5RuEx4bDKAhQSYvbqn1WrvGGtrqvYevVTBuGB1xwnFwTx4NexcrCAPkat4aAsut5qsxMtqsQuMu8",
  "key11": "3gs7ZttJATRQ4LHrXB2n5h2pCgpbx77Dd9ESV1Y8GR8KYZTha8fi2idGnMojbyk2JPnVEdTtwX5aDp3wDmQRXqGp",
  "key12": "271T79pmxwSZ3CcxE1XgZYWxRU7Nru52hftedDQnzs9QZSYS94EdUWtRSGMtCLfYJaBEUgUaZgziVUfH52ofNbC4",
  "key13": "skrgB1mph8QxZmZ8vcaJ25TqskG3oyKvpBcfXizkwNkYogH6YLgdLgWiJtvmGnwEheuitqDonXLqQdPG3HyVWXM",
  "key14": "4HL9km6YTQfa3sqep8agRbaZJ5MV3uxt42cMfFbcVzeuzQuiYXC4DNXUW5RMCqywfRjEeuWLeoqUjfdmvthphrnS",
  "key15": "4mfCdcFQMttdXATToZPuVXBbkyJuzsNNJ4H6Lrz3q95hRuy7dm6GVhyoH9ZrvEsu8rPTFSr4iUXF2hUGrvwcd7Wd",
  "key16": "WYgaTVBmPz1YvUNj3Fi1PNLwxLgrtSzwHpo8o2QGf3WHKukWgQPkRA3ERmbaUtp5u4TKJG2L76EmB8URobRyh7b",
  "key17": "AhWDdF6cQUi4r9VyQwHrmCEN2i1SEVGQtjXM3K5G8QmnFDF72TL64d25KaJANULi66nAJG1SPJqtmshfn7x466e",
  "key18": "4WKj5rEjGUcn8dMbAaN1SG5zfSctFEWCFo8sqUztxKQehAe2K9G6s15A4WLuTe26qDf4NTjmvMA93YggKprRWshi",
  "key19": "5aoF6pcKHgPGkkGJVVVTs2hsDAGzzWYr7qhmxNafybpLKavJ6fiAsNnqz6qt2X2N3TaLMnUUfuXKre7PYrWysBua",
  "key20": "3AQdwgoBsJyFs9PpdUWMaJwBdHzmUGVLgU9orozcbwVEW6dv7gjdd3753JTFa41KNE3sak4w7dYA6buBz3AGX6mc",
  "key21": "2F4vjuqTwKZ45imbHYTYgkoMWfNHFgM9EGnckKNQGbPRFzeha2rXP9DohK8ZAm2vmSB4GxaHx6TVpmXXFPZB71J7",
  "key22": "5Qx3MF2v9HcJNNgnWyxsNxum9EB4zNwSxtrkYwnQBpJ4B8TPL6Qe4MEt3pwZxpWoSTvEETPUU3ya4Z1DFUCxz2gC",
  "key23": "4pg5hxre2iwpPJvywtPCVMzp7WqQKP5q92M1sgU5SUfFEX5i8hdN93LdfXAAbLKstLejJPrVKLTgesuhiHA6ywuW",
  "key24": "5QzfjQxUcSfAn5kQmSThfVFWLEym1xACD4L2xgurnKW6cEdUq8u5UhUFTyH7ULVJNd5QgBXy4zkbrNUPd7PJDERL",
  "key25": "4c7CY3bR4mVdMo4cDy39d9xPdg38qtD3A9xuW975Ag1U28jBU9yKwhoGzSpshpuFwXYMj8GWMdW4BwKPT2SzgF6Z",
  "key26": "3kiYsNsC2XDyk5yat3BSGHpL18xKJKQoiVTUUA1qrPvnULGiWSQVGeqab7Kw4k9hzsU47bhizyeTh2F54tvgk4U4",
  "key27": "57G9q884mmfhfvgSXRXSaYVsfBM5WAUSYwKUM4Bj2k6d2LfpugCwdyY6kfpaWdFPcTAwZ96mxSPy972svT9PvJSY",
  "key28": "4j545DNhPfMudUq3BZFuSPydRyHQ1vbRwFfEimvvxhhokTSz9vQT7cxC2cd885poR2pBp2csoPuMat2e2H92VfM4",
  "key29": "326wJfMeJaeLgu6VxsKxtvggnr3K4AXSZMJmg1ZdDCEGAMHdijbZqe1KcbE5hYrp2TP4GQaJzvxSNwjiyj3Ku9tE",
  "key30": "3KEis3Awrjv1nvFMwryLMdRi9mC6F7HV3VA5XLui6BXL1iwAwg7oHLzpggUDqKKFpCYL2Wxux3Tsfq3M9rtv5oEf",
  "key31": "e3KnuSU1KY76KsnP7mRPkq53TpbBedkJ6iXL3Z4XEMSquFm5v9byhDCudAeKY5eQLFWSsEFRdYLuMiGXmxRFifw",
  "key32": "4A2KnRaB2YDzrKWApRo12V6cuvTfxdivXrwbrFRGkWBPuiisim46X1Hb83dBTpiyoXgxukiGsbeG2jBstqD4eJ4s",
  "key33": "3qiCA9AGmi4BMwhSG7cJm3ArAPNMq4ncwJmLVufLSP4sGiJTQPmGEmbCuAjxbtm39PA5j2iCMvN8ErEHwcfWuEn1",
  "key34": "32H9KUuUfi7scbbPZtdeQxPQ7Y9La3mC4ncwWvYRf3UUD1WZHrqWkeWFvwk9apAZS2CvexqB1qMJbqfcVCrzsund",
  "key35": "3NiMjRV5EnJ6hvcw5gpQpLkp8jpDUDZX7MSSmqSVE6eungyBeVq7TEZq2v3Z6EqsqemdqdHU8xYPDNyAuLy26iWT",
  "key36": "FHFMZQxtJ6ZongyrFnYHhQMP5afTrnbrd1nDmiNjGBhf5kSZoMyseCDvwf4ckPNZMVjSevQGJfhzsRjgiC3K7Kq",
  "key37": "3LJ2wUJeDvYdsf1i3dH8k3Np61XmEbfkAWzi9qACkeeDP2qyz6V13HXuT9pr5N6pKgm9Zr9Dn29zb5G2B5Z7T1EM",
  "key38": "22wbTGsr1iNN9ngyHKeuRkNm2giXLJNJumQYzBq8JxjnQwFzJfyUxN75zyTJrhqpEzZDmBGvHUyXV5DAcKXKTnRx",
  "key39": "4vK1TUYAdRWqAEw2agQuYTDSGxoVAoS8krdT95oEBHrim5gtWjKbSJBY4WrgdezD1h2drifQkM2xUbs8tPbvkaYv",
  "key40": "s9A6ZvJLW18hJQBdv8Aw3jWQYfUdEuqivYg5MuWBgwfrnCt8notWtXh3V1XHRpKwtkH7gRbzAsDbVyCahQfEmxb",
  "key41": "5XSVEGMFXi3PD99RbXoetgbTQJE111prUBVpuopLLVmggRuwq3PPBeW14JCeseyD4yN6QLfkotqG4fbUa7z8wqAX",
  "key42": "5PSfF8Va2rMpRxS8sYpY91nF64FicVjKJDHcCeneABmVUZeBzymKg6PAVbg1pEqy6Z7i9GFCL2kp5sS57YtpDBgn",
  "key43": "3yChKnpHACQXXmyRdgMTGFaqoiGykvwYWSXbPw5VeFFgBYXFHygR2uaXDXTSLjRT2TXz8YPeKM1ZcBvCfFQa1HAC"
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
