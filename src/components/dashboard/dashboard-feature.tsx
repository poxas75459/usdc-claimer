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
    "ErXujs7h23UfXPrDGVCsbq1WKsDfBzfAKQaUwugZuFiH6AWPbgnABknq5iuKNBQHpqLRbES2x2Pj3MreHopzinq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ubG8uD7kmB5YumGDxYDNPqnFE1UCeSkJDJrUY8kXc3tG3djGUkUcgDxWMmcLcNoUEM9i2JeUjFDM6nmzHp9iYU",
  "key1": "2AxWCW1KJSxULp1xtqoAvPrYtegDPRpFi9PJzCueohV2ejCYYVvQJdWgGgQ6QNo78f7RdXaHxESo6weAeZzcwL24",
  "key2": "5gLdL1bKFYhMhxQmNrhEJvdAKS3VBopoHhKiM4YRxKkcYsRXQ9AJupw6gcmBwSTxmmUqh9YoMoQwwtnV5srtMqsf",
  "key3": "54mXmKFfWPVmRjKAwVrMgbeBaSwJFekpNJxiHd63TGtNLdYgAZm2hrzLyrQ3mPSaSfCZ9pfipzikzkmEA4kQHcBn",
  "key4": "272xTttDsTRym58G4ahLoZTpyjPArArfpmZU9DXPU5HgfLHNo1KdhRuH5MP8C4c5JPyr9fa41gFRE7Lmck47vwXk",
  "key5": "67Ec7Cb4hYphzFzBxEX6d8YB7FfYLzEUemFGDSPwTJ3rpKbWxbv5DXqiDCriACc1fU2fA2t3CDbMFm88qsmwifq4",
  "key6": "2aTpT9jZ7iih7pGQzRWCDxgrvzkBrkwDJdWYcP1WGcYyeanzhWWTyvkwSJGD2FybtnGg5mUJp35iL8AvHp5UpZ5h",
  "key7": "2DR8Qm3fjftqcpF7kRM5xNNMRjKK78YYde4ZL7zv56gzWBCLPg2cJySTnPXc9Sv9umb71iCuoHEi6GSmZHuh8GNY",
  "key8": "2RyJ9YFigjhFXMg2yimi2ANTjV1u6JWbdhHeAbpsGr7pXGSCs9YjSFjb6QvMjTPA1tigLLtA69MAUUneffSdoPSj",
  "key9": "5D1tGoPsvQ729oGPUKiKhnAuwBsKSSxrPmAMypnHc6KYfAjPjWfQLFxUk61yjZizRh6dJvaHsYzTJjUDQn6Pn51m",
  "key10": "5WWWTr1icuYyoBHM8DXtr7ZYJydnkymZMu226QN143jKJHa8AxNekF2Br8y5yUpqkYbH8JJoE7hJzdiAGZhsDxSs",
  "key11": "3ujisTYBFtYNXtWGR7qSejDPRUUye9BE4zc4vFdKvVAHNuCqzq4rbakmWHxkRS99ycsZ8zVeJWrotAjhPvBNxR7k",
  "key12": "2yfpHNBcvbSvs5NT7Nc1WYYz2p8eQ9gMWQQX6c5BtPxYCcMX8WiZdJxQZjEXM2nAL7nyC6ygpntMdcB1m6KTVdRx",
  "key13": "MbTfqacjwaW3w383UUpbP8Ax9ngc5GqBXRTiFG4LbDDSjmmxj3LiHA4iK8hg53GSDGgH1soskDvV6WYcU1Reogt",
  "key14": "65PJk15TdhLiaRySqLKvycsC9xtErpGRDozwuPPEu5pkwwMS9hxF3dhkuvvU72ro6R778SngbMtFsDgcTmRP7pNu",
  "key15": "3UDjtCHpfRnZbSfisgZVYUgt687UJMVX5QSJfSVMjyGkrDbzyidKYpu2MSp14RL5nh2UCNHnWmFbjV8gCtvM6sAg",
  "key16": "qP8Z8oxYTQWjqgSAQgEEdzpXAUni3C5bu4A9hxDoGKk296wYxvX1DKX1j51z6JhnW5ZTY3iQJzy6AH17MWABUg4",
  "key17": "35pYosT2hRqk1A4ABzZ5ZuSWgELwN3DxWZzApVPjAwwwa7ubjSYpHtkfTjBvQCQ4TgubLiaRkHBNPjeSecFWaQfu",
  "key18": "4Q4eXZBx6V6U2vxD2i1NfUrwGfgxg6PuZq3n9UK74DrUUm32uhSB5Fef1fXre7jg73pKPFDJyxDBunfMApcucLmt",
  "key19": "4m9QcMBL74SgYFveRZsQttTJJYbZR94vaKREDBWcts5KpVhRor75NgXEnPLMDjyvJD7gxfjTxfXQ6U5hsKVtRFes",
  "key20": "X3hweeK8EYCvDHxfDCiWST19thw9hRrnWhKQd1WDwZUYMNNJ5d59fZHB4qk8ahYtbBtxErkPC8MWz6XerfUZWs7",
  "key21": "3QiJ8o2EkoJy1SWeUmswidBPRkj9jqqEsi1BgachfLTkvLLch9mhBp3NphHTGoRY3aJtsmHpaT15PhxAcmfbrT4j",
  "key22": "4tvyzL9vB5Z1cZp9mRnP7FpdaomDr4qNPUkrbHML9eCA8fe5fWcFxpKDBV8CtGGpQAV9o7LDSMAxDS7bbtQDoDF9",
  "key23": "wxmmh4K9qpWfZt95CBYKbBbaurh4iwQsWwxDc628vejovjvKNkwuHqTYfmpqMSRwnfoTAvfX6SsbTisMDUZZv6U",
  "key24": "2HyPBe9YfouHhMG9jN6dXMQTHBXCp3NSBhAPEycBi2yHrqcv3Pua637v4LR7jKp8QAzimHNzwDqFu1cRsS7v4vZd",
  "key25": "2Uwocj1WmqF3zntYNPcE4GhZn5pK8tHKFz9Cjvy7NtXp5Mz8cbXxzB7yJfRkJqQsGAJ27Krt7umhvRyoJhqiEcd6",
  "key26": "4ZS2tNevdWUQSm6ST9FwQRBfbjC1xw13j5R1ysdg89Yq6LW69xwj5d5PeJQ4fAyL6xyVxLa1WcLwiyzatvcjyNn5",
  "key27": "RV6D7xRBm3v4TZnHVYp8SU8KB48ksL5Gq6xs2eNT2SA2Y7K2u7G8eaJLinwNKA9xDotRpA2Mz5fuXWh2uLSG1dy",
  "key28": "2bCz6DQvdsPrQzaejZPqUuqEtY9ojuHC9zmNojsYHpm6NKMiRGS9Xw7zn7w4p651v1GoLmafj96Dh5CDLaBckLj6",
  "key29": "RpRouFWTE7RbCjH6jJsWTgL3qkkMN4bUKhhN85mbRYcY2uM4sbgvfxS1aKXKWNFfhs2wT5k1jd8HaBckHYUeFBS",
  "key30": "2PjVhnDjhHqcr78QDEfodtaGuC7tCTCU39aVrBDVktCVzxERuGYaVMeA66j1g8266Mwp33bdjJn1GGLcUBXEpBGm",
  "key31": "39R9mAHxw7xMrTrRhwQMy41Vr1dibE6da8BSZobQi1xWArg9CyV2qGqoMnXDuKCauyM18hXtyDthtMtfea6uabT1",
  "key32": "kEcTtxdhkqcdFpT4a1fbZcHjNckxM63zkoGm78SSeiMmhnF19Wwn5NWwrbNNt2u1yHgYD8t9UCVEisA6mEnPfZy",
  "key33": "LEZk5ZkNnyPoV3w2dYWxKGapfWGXm4o8x7vvGtAsWWyhbDF3aFTPxQrQVy1RzauRJuNPh6gdGye27QXNaWzMxZb",
  "key34": "5j72dbRBDWEoqkAhJR1C7Tq3KnKYnfBCnrytZRuPLZgpC4utVUkoVocgr9WoSURJ2gLBmsoQGNcHXtVa9m2AZBKz",
  "key35": "3Gfq3S4rjfkBopHpBYKXcQnefwk51PfV4L8xBotBWKgQAXspcYUQbfndCpHU9ydWtZ9vrXxurEgdeHX9qagZh6ED",
  "key36": "4Ya5UXqeQHbGCWBEwqqDb2fjh2n76WSBVtHi9sqUGrhxQppA2kWKEipYW1f7ur4J5N5CDtQFP5prxv9oBFu2gh2f",
  "key37": "2uyDjYKvfd5NLzm7rysSmFjZS8ugZud3Swq95BVqAHJ41z8EF4kgnfhw78VtdbXDNWX4N2ynTDXnvkiam4zoTS5W",
  "key38": "sSd8aRQXqjngdT3dS1KRMHJdpJgbakSgLgAMgHdnPhh2wAH3iXJWEMyRV5KJ9mhDCAYgjxUizfaUxVq9qkw4odr",
  "key39": "4s9nMTT12HdrvsRLu1KyYB6wCkSSikF4YD9aRpK9RgiyWiktufhp4Fqqo8pjFdBpdMwGSKRZStcJzeioVC2EMSDA",
  "key40": "22Qw44CXovhN4RvRbRRoiHfgWSAHz8ZDdZ2ymkDT64W4RbAsmJkzny8QQLM5z1JawGKeoM7nRr3M4Y9w2akHXfjX",
  "key41": "4xcv3MK9Qnwhp3gL3ndzVZiAMZghNhjMKFMFuwjaHEPCi3bAZPLhiLVwg3ZVXwd25EVG9W9czT8XWcViTS7ovTJ8",
  "key42": "4bZsGUALcJdw3UoVNkptQ8eCRvd5JFoR4NE5gn5m1vW49rWPeNtXux9SwXGBFgp25v84XoDe9FSTKcnTeTq3h8cU"
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
