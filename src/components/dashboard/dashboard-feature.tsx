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
    "2MCAf1c9MrEg2QECQwUb29sHu6AyXZXnqy7wDHhuQbFTNumAKmYPx8sdExuFhGE15i1X3doXzmuP62F2bjtF3o6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGWV5jCEhGbrPdeg8f9pvmQ9b4SRVccaGqgE5H1FJ7EcQ6A4d5uWC2oRopTT4HdiqNxJ63RjwBSfHDZxzuTEPXZ",
  "key1": "36w58VGDRRbDZWJH7Q6m2vawGXmm3F2bmFkKajGR9QFy9qXcLJeLUEySAurhrp56VrzMpyv2cESnu3NktqvWCnkk",
  "key2": "5YmPETC9dPnoffeRU73ibnCH9snHsfZqcmJ5ErRi6pQoKidhiYF1MxuWvDeNMABPwta9LZCqCRcWqD6BdshR7Js6",
  "key3": "vBn3kkgd3BELkMNDGfcb5uKU53Zm8nRnZD3f6ovwa4JW1dfVnDr1mS77Hg3h39qmccCX7MTuUYujPUtptNVhWpc",
  "key4": "2tMr32GxViTt35c3nZS7LGgsqKZU2KafG9b7mQtUxzDByC9qninjxxiP32H1514W2aG5G8Vi6TXFqYQWGmSx4uWb",
  "key5": "zw9eg6xbeXKy4TbKk9RRbvqveeqDqRSn1eHAmMTWLSNygKa6H9CitVymo8znigGXoY2ejvVb1XpuRCr3yHWo11C",
  "key6": "icwCaJexDCqWavRwMfZZUQrjf7KziKGSdK6P2sjRJ5P2uwpNZYKiGJvv8VKnJG9Z4D7LAbv2JzUAp2N3Fc8C47o",
  "key7": "5N4Ph2ijHgjz2FUWmkH1tjJYnfbDa5d724hS7GmRDmDsQYMdnWgsfQGSHGv62Pr2fAPExzqUc2yUYo56GskBXa9k",
  "key8": "4E1q7LJKucwDfMiots5HghPxMYma5wxwynykmpjoBzYPhqYLd3xjmXoRQEyzhyMTUPxiNEM5AWwPzdrSxd6F7zfX",
  "key9": "3q7iaEZX5Pb4Ks3qPgeVaaoFmDJksubENxc4FuUA7fxFHEJDqSw3wJAutietLcwxCzrBDyifp6TfcJR7shj9WZqg",
  "key10": "S8nofUPHHEsJaGcb9oV38y4zdtUGZP17BVFnWK8tTWv6BV4vn1M1hXEFAb6HkN6mDWKMk2pXKb7g4mydm5xxiRm",
  "key11": "4tTHPRqUZdnvqNhWsYw7u7vaBku46QT67VCHUjcGasbd99EE8v4WDPatGDbGfu5QwGr2qg4gveoHw2acyCzeiRqt",
  "key12": "u1YEwib1XYhPASbaQW5HiXh59bh4sJex7hBfKWUFavyPysamEi2LFAknmv3BEcyyqbMh3MAh6V2yMvbDckumCqN",
  "key13": "4jCFVuH9t4TcB473nakmMzuJeXyiurC5oJvHxTA99VFG5xHzJ9vQJSiS1seA7SWSJMbdnuUd9pfS1gLHxEM9hGxT",
  "key14": "5XfDUAtzpmrT8CA3V9Ku53uLdT9Um1KnpQf3nVcnhVPGB4bmEqUWJtKHuaotGc8WFooSobk36VAne5cKt2epnKEK",
  "key15": "2fULcSZgdhfh7mZ1H7L7ZQEgN72gHxBmJxs2TkNMRW7LE2UMufkHw86SnNHCF4PqSY7i11xA5EYvVjNHnkboktjv",
  "key16": "4ySLv8DLZirYxeWnEpRWsuf6LaQSQai2F7B1DweNbqrcB4KnmwkdTVFb6hhzHcQ3kHUKVzuZoKndsYEpJRpXULgf",
  "key17": "3Puck3pnV877psrjhUgVQRnsVH9haeKgHhezRiK9aDentj933dmbeWirPC37T4sWrrRyTn3dvzuZ6fSgCt3Kz8vP",
  "key18": "29UNsxSPQMzECqbkgXLPtMPPfV24kuaTHE1Jo2jvSpnLycqe5JeSDex3os7dv6dR3JBUjNci7zmqutcGsyVwkGHL",
  "key19": "2ywYYKV4NiEVi3VP8GSZEgHiAWRruR49SxFaNJpmHswCTT8FNQPrcasPtF2DuV4dDoxNkRBj2kRMHQJKdisbcuZ8",
  "key20": "4rk5RaSVNyJwmbRrMCDWLW8Rv8NWkYMGo7A1xzx1VGWAPTfD7owUNowwuXjAJ71wp5NwqcJECpGDSSkv4w3krxui",
  "key21": "56MnxSWVb63ifuLqTZkC6sX7iRyDVYsNpVpbxA6rHJCom38uG7YLZHniaY1LP7izWCyeHKZSeZVduXGM1PhvZg26",
  "key22": "7jUD6UFcVEFRsmvoCDdtPZWBPWuyuwkkxGgQdSUdyqd3RC4x9rvkb8Puipe4wRYAsLQWyx6wtYxJyYUgozvjJYw",
  "key23": "3pDeuTqLjKTLUHu5aKMjNBr4qBgsAZqtgSUZNNjjjwApzyQMEjt3SMzTHQcogYPyMEjXxBDzx8TqMW987TMNXRgw",
  "key24": "32XHH5QuKRP4FTMA73gwLEDF1eJDFiP9Ek1yXjoKyBKv6ZCJVcg4M8U2rVa8aLem2KRHeXuJvLLTkuUaVcsYoPfS",
  "key25": "5hMEV9ACEW4gKWqqdcaBEieHitLyTJKKt5rwxRfkiAGbP43DnPnboRvs5griaqUqhcG91wKxdSqje8ifU37QNgMj",
  "key26": "bLBZMXJ29wb2dWszzaLM3ALrbD721HQpR2Zn1A3kcMjQUFRmPvpZop2HxuJZCvGmqTcTC99uu9TGLQ7pRTY21ac",
  "key27": "3N8JYpyjQ6TK5hpSZFUyHvBguep8unws4XcwHn2FnWz9y89zThHhBg8tCQxUxcT7oSGm8jnicLUyBsGUS3jt3wLm",
  "key28": "7dFkXL3VTZiX6UT82GrfPHLBGhmBotQNDpJJ8zQx3E6KuVjebrTnnE6jEbvkAqbjGYiik1dULqZNKpVvXmL4j2j",
  "key29": "4unYhwP4cthYfqBV5m7wdjXYJ7ajNmapgEHnmWUjj6P74Z25qMroamndnxPkXVDqFs4ocnmDejLEaR4aBt4EXxN2",
  "key30": "3YjL89jQES46oTPvkajVbEGSPp3Z3TXyzho4RHtf6Fp1SXX3v8Kmtf1J8inY9L1JPuKaWd5tGLVz7YRutQUicNrN",
  "key31": "59McgrdziWezsGbsNEsUkeJbc13sDAcJs1tiSTjXscs9gGYcmdAXxAnb1W1JBfar2u56WeJf3ypabeHuSLjh3ZEj",
  "key32": "2wVVQ7JQB6xHkbYib6ZwjqYtkqFx5Y6JRWbUUsbN5agpws3ADBJNWQZW5bQSbV2jEDJ3rjprLFvPfNo3Yt2GcnQS",
  "key33": "5CFJNXTTETNRx3yxf24n6rsDBpnq7zAVJQopUMLFSRJsBLXrjqSeEzb4oagvyCaM648Ekur7RWtvpRGwjrMUgHwb",
  "key34": "5mK7jxmgbYDHoMMtmUBKGmTEenWxWk9QgPpXsnekkVq2F5K2aN3hw8xEuxTHj7XS5HF84UKPFcUx19PMsBAsN8Jm",
  "key35": "2dz29FRe2Vvwn9hVNgGGCYnEghQv11R9dHvASdMdsHS4ShWkDCsVfjYcUrp9d9679FRHyjS9mLg3ssa5LFTeBcwp",
  "key36": "BZFtDauXXSJPphpsj8eTMCmqydBFrjnDbm8rkEEC9XbFg9XP7TALD3J5yweokbT2berzPUJtJDGuJCNodfg4zfS",
  "key37": "4St4rgiQn27DaRxq9wWqftKkPL4NQLFhVosNPPsUXmV81iYCss8tZCEeGsNJZUiKXu2hsZKPmYKGdeNqpqGtzS5q",
  "key38": "4hYwkGGvcy4KZiYjCvWxVsNvjhAPY6ohstQGB4XdwzKGWb3c7M6zzpZF7QuMC1qVXrokQ1iBkzvcNtsENaJ7TJaP",
  "key39": "2H45n5NyVAr1GhJ2msRsdMXc1mff2kCqMW6VURKE7SN3DAVy6QaX418s7yEgzTtm8yVBX1zKGQDZ1H5w3pVzPDGQ",
  "key40": "4qZQJwJT8Sc4GmTXcC8VA5yuGiSw52D6GGRkd3iTEcLvsBCfq4dYpX9qiMgAyEJHkYt8T9YEyGMYrasUt8jnnsLY",
  "key41": "3BVj3yMrqHS9i6SByskUMoUXmX2zXH2pzfZNmuNr7QwwbRCo2PUyyb7iyDnR5h9oTiuaB3DhWe31GjzEEqePa9qA"
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
