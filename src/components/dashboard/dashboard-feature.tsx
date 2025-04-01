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
    "3dtZVgqry1YYfAD3c7yyY1gp3rLQ2FuN51Yybdij8GYYN5LDchdRmuo9UT1sdDNkzs6JTpgr38si7xUkuUfYJmmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22U9NGH3VV3L8oqwrWKGv6WA9vFco1Ynvpk7c2XYHVq29J8iYtL2KFUJ7KpF1ccciSQjqrqJSBWiisrbSM6R5Mke",
  "key1": "4n6PMpPmPtUCZzg4mXqbMCdNV2ufFT1BNg5zZabDTTthYWjL2cTcFsz9W9ZzwhdPSiXu3rnW4DphexundQzFj8iZ",
  "key2": "5DtJqJP1xiwjpXHPyGHh6WN8nYosKgv8c5K7mq1StAHDsEy97CBYvMKR4m7xGGn9TkmnB7pYg57es919WZ5rNam9",
  "key3": "hdqEQhhcN7SyBEpMBSAimMZxhncLxeajXyCAECSRfxyEStxP9E8sfwZZ9ZmYszK9xyH9qUQxkSwRwpvMzF7poJs",
  "key4": "5EDi8ERaN4Q2ve3oqSHpz7TVs7of8q3Za2QXzwz5vDokabPhp7E93jmB3pzMoA5dKwb6rx98Po5yEZpLzbQGW6LS",
  "key5": "2wCy7MFCQ6GcfFLFkxo3fkGbEqXxGpAUxZVy9Zmfw3YwR15tdBj7gm4umq4rU3XRunQz4oaTxSAW9aa9aVfsx4CQ",
  "key6": "2RNaHJ2GR55LEM1SzMepmvRjhoAs69CbmBc9826Zjv6j3PmFU9z8wafkNKTSeV5U9g9jdhgSKpBdhgKvrhmThus",
  "key7": "5NXVKd5DCELKfVdo2dkzNVE9knUhRw3N17qDC4wrkpQ34TWuShj3wxH4ZHAiamVyGm2u6mJ7pX4jUvGBaWttvPhC",
  "key8": "2uUfMUpvz75qgxkFWSG7BdT6zHPcXfgneU2kxXdfHiB4zSMpr3wfWNnf3vnhgVd6PdxVDkLSkAKxiwWe1hKezFpk",
  "key9": "2e9hFoKMEH1uzZnaEC4dYH6PHJfm6rmmanYTMFxzqcGEQUxv3nxRgKbgCSmkyc8XE2j6zoMU1ayYpd6uJFaLdjWs",
  "key10": "2DAzxDiAqYEakxMHDqgsprtAomP5dDWy7tokdJgtEgkmjLrVPyDKbVmvxx5woxzqSxRphiGYRGFBr69bZzvLAWBt",
  "key11": "5FNYbe9QTYrR4kkh2gzEBaLTCSuJNjMR9oabpauuKJmWcekHDNkVTdhFqUpuVY7B7XMnFZQunHciayMdxfowxwHY",
  "key12": "36rxiccqzgKp8Bu4A7ZhEZTwVxa4tRB4AMcQwqi49mdyP1tDpDgeKAUE3Nj1cQekE9tdtd8UPP12EYji6omEtqNE",
  "key13": "XejT5mWdCN3La1i8bovHmJWmKJewPCPhKGY1GHQYNkPA9NxERANV9y2Dsqr1zoAgd4aVNSDdcAqCM8huJrkdhfB",
  "key14": "3tNX797GQCvzfqkPZopxGP9dFo4s5HLWFY9sDPTT9qos5Q5tUtkmAvnHperdwxDs9XPXDnkiLMdrAftLUkm2XEg9",
  "key15": "3FMVAVzsSxoxYXV2PkqNg3r7wNNom3nxFtK7AeLq9fJdbEP16HNincqrE7GGu8VVfXzwBZSM74r7zGvNsoYJ1SgA",
  "key16": "P7mdHB55cmubbonMafNUVn8Qaygz3MJH28C4Xa86cmG86WLSrkp8x2HHunGSU6yMCmLS3HbQyR7BVt8UsxSgoCV",
  "key17": "55Tn6mW5ARH5CdiXG3U2ZtJNJnQ3JqqfBbqRPBidJeLTZM83tszE6HrCkwkdjay9cAdmSTYW6ryDdXjPotMQNxeZ",
  "key18": "3z5puWVbu6xbBEdiVxe8dXuTBy7qr33h9iwQr3V5yoSdxPQZiSdBsBAbFEskD2ACRJCdZc69zT1GJ5VQXYjLjNPo",
  "key19": "2gmXdKAcj2WF38NjqWMfXajMxGf343woneDrHZcop129zXv7b4KBDiyCPt9Srh5FXbKmwRd3so23zJJq4iCycnN1",
  "key20": "2MkQps6h6zshqSJS8e6YtD7dd778jcxALKWvyCD2twPGZmHjJGJxr3e1TXQjRapQZCw76e771YVN9HcgtDnnXESH",
  "key21": "4zj1LGiHKcaMDSAQiT8fcLetMNb4aQnpskp2qNC1Uh7ogzyLxBEGauw8UjQm2XYWihnQ1htt8ZHUdbEPfVijVaM6",
  "key22": "4T6aC9qvervpLp76R5Auqm3q8qgvWY3sBGU1Mzzzgt3p2S8mboCn9Fvv9oxamw11dhmAreyhr97XWJzzQMEFHstW",
  "key23": "3amh4e2DRdenqG3i3ovj1WJiBfER26L37ufRdQRzJbUvouW2AdzCcyg7DGLGDgCSHjMnNgdAWpCfxy2GQ7LPXxP",
  "key24": "2K6CWFb7K4W54t9CBRaX8bhZRzRnDdrabHG3bd3nSJ8sRhi89fZjyfpLAJGWZ4TwUPcm75tDpz4fpyNfbi5HDtCh",
  "key25": "2ABvE6pgWfox93qs24P9eeUWpPQLg4QJUCQTdTQBfLeFYcgco4rR8iDkDqTpLDTqEDaLcJb34JCm3E9VdwitvfgA",
  "key26": "2zainZJb4Vg376VXWMrG4PLCGr2k3HsgkZD99xCo71HvBX8kya1K4CiJai9jTT6dvheUhSTNAMwT9Mx18Dmy6tNS",
  "key27": "3FfRiLefiXBd9pbyzvAw3UX2VTgsZmpMJqHJSaZxmULgfZf4LcgJ5WxGrdpA3rDn5kGCy8v2f37ATpkJk36Fkp2N",
  "key28": "3JPANi5LJHHcY2TEi6xy1CagMmXUgdg8WSFKzheYMJuKh1vLPRv3BqDEquHBo9SJ47SiEDp3E8mWBGvgeCdjGm69",
  "key29": "3wWYwe2xxCYpschJm2PG9Jsq8PSXouiHYMP8GBQRLUNxhBRq7RSweHyWb1UGBUs8UT4Po1vrzpbpeCGzNACGCdGq",
  "key30": "2rDYrLFRQxjSkD2dUR8SDbywWbP8dBtxmxWCer1DYsfGk8k8hk4WKGWr5JkURCNUu9zRae4bLJZ13duzgWARLyFj",
  "key31": "3F62ByiBQx6a3eHrjb7b7EfkhVyFmhQg8CMYoAFsHfmmrCHo7KZTiGQMreGijS7wp5BRKuGb5KHtmTaojvtih8WB",
  "key32": "4AvRX1UwQozFYepVVmxtqxhcLijhSFaMh5hef85KfDgo6hJ1WDLoCGZGMfv7d1LEabXWHWVGV8zu7ECjYVm5QSjM",
  "key33": "5NN6LVViYjgtMiw4p8cjWTJ7XtKyAK2fiiTcoqfMwcUbszw1A7pRM8uqQ55ed8jevSU57Mw4vCGSVHDhLZveY1tD",
  "key34": "fwRU4AEoMeEuX1UuUVssQTbpaoUCqNLfEZM7soACs6D33bonYNVF27rfAEYsHXDCvFczSyiyBokr1RzcYqSw3bs",
  "key35": "i225YBcHhFBsUc9MXViZM3qFGQhibGkLTy1CuVcNjPA9wVwFADA9E6zhSxzigbJcof4vRPs6ztr19PzQqPkahpm",
  "key36": "86tc8cKcSawhiepVG7AtRELnBKL43DQnZttTNGzWuMQg4EDBHDjqaXSSAPC2en3iWbnFojeJUD3bCosaCYqavuf",
  "key37": "3XaszjGRVNdtoBj7cJKa4kbT4bvhs22wqJPnHvjK2yQMkVAvL4hnRKyopRd7PS1MQf5nTGkgHV1jjPUd92Rwd1uN",
  "key38": "axxfkaknnxJadnbs4TnMqavtEC75kYfqiWgobX1c6PBmwYzy4147EH8H4YHSuoKorWm3vMEWkebio2sTC3wER46",
  "key39": "3qSRAvJJTA4LfJs2jMQP6qLsRM1qST3zBvJKUxCPVCFXHoZtnY6e2zkAfQLLqaumL7WCdpJW8TS1G8PTGypqgFth",
  "key40": "2XdmHkiv1TYqNEUMvSn7mkBcWypB9qGhPNrFosgVeWNp872szrpnQmC5bWvb99tqCzLi8AJG6moKHw2zPAwECXyf",
  "key41": "4tUr2k4vGqGVp3Ag1djyqrDXtZtQtCyDAV37X3uTDJf7A62SUbsiX7yHdgVLaUzxsLe4rvCHaqGUg46yC1cimCiN"
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
