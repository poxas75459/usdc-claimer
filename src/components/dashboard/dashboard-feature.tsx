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
    "rzvjGx5Yyh5fzndsKdjByF3U7eDWjihu5uBaRR1eZE3deycBsYrKouAV92Gpi87umRYZCBAoQF86oEcfL5TrFNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3587CbZ4nt7x2AWakMQbKR1ZDCrHBBcnKSYdu1Au2GUmSyrDv52dHSReHTGYvXdPJi1znuWE5cZvvxLNQGJ6fU4n",
  "key1": "2vtfDsF5KDdincSBQn8RSGHLDcecRcXFDDfnhEYr6jBK2dtzzq4d3v7BQmvy3HMSMkgnUDBfr8oYHqKtx2atgcgu",
  "key2": "2Q3CFfUuTdeFiLGQL3amJknZUZ4vNmVgK9qV5TGx8ZivqDRYsra2DAL6TUV3dRobpw3cks8Y62Mxo5LssNDiQZ6y",
  "key3": "esnhAjefWjrFbVgpcFWh7ZbZaHcx1u9JCJBXvMT1JZezDGMayhUrfyfBarJSc6h1y24p3ubLPKKqMcoqUoanZWY",
  "key4": "yTZDnZ3bBo8pVpMka8QVB9tYd8TNGPLe56urBzxLkNwiZZK2ohxRnZWtfEyDYyPK6uAkS4cGVggG8sqBHSe3YSA",
  "key5": "2Fhu1pxHex2XbDg9h9dUW4n3v9iKwa9913cMmbgskV5KQGAypunzTtEkiuKfx7ZkacfKuSSzo9j7ew6zfTB8kQ9z",
  "key6": "24YV2h9nNsbf5L46gLuNabKMRMEeqAjDwn2DtsdzXobZswERL9xQjNpvdZiXgtdte69xdz5fCBFaRJDsgitwyaQM",
  "key7": "3UK8CBEWc4MwL5q3q3RaA1o3EZMzajhvXxQJ1vkn8kMeE7rfoeWZmyKSdWA3EVCQyntGXQCbwktXDfkBZEchNkEg",
  "key8": "43NcXiGi6a9S1jPa4zyC6Gvu9eFRXdrX3tD2FeUTJjhxxtPDxrydfruidWx2W6HyQcQvDwq4QJ6W1v1YjUXEpsFN",
  "key9": "2yp4K4hgczKuEkH5SmypEevvHfGnx5qfW27T1f5A4utrwfyAufHvM8Bojeg9CjBderq5NSCSAXbJ3Xe1PsN7HSvp",
  "key10": "43pPjcqzffe9NVRtHcLvhKWAvEsuwgAACE3ZjbpJp6aeM2Qd6e1dc6aEXBRWh5m8rKhZaZM4fq355Zf5ZzwehDCM",
  "key11": "dsPnpfqJSxz95XK6ddaetxByiy4xVnJ16tZNabGqRyuynqNh1nA8y42jy4TNwjT3nBjJRgguStHYuZw4yFAcPjw",
  "key12": "629fvnGHZh5iqbtq4zwrxEqQQyUjGXBCQXAY31cMaNyQReAYaWoMzGAAThGdn5DvY4upiJUf9LGF9zeWit3f68Sj",
  "key13": "2FiZvTaAaWqRhKhLRYcwCAq4CF1qvATMxbAypT4jkhibW6VaF3do4NwiWJxKczcYDJCRsoTQqAs8hwHQR3CDktCq",
  "key14": "6wBcVofb6D2hyHtdDoeg8ah9vm3xAFkRGmcmFfXYjfbkyd5bZ2gzgYyTCXcTmaCX9DCzxVkqDxA3Ywios5NtMSZ",
  "key15": "3An5YnHR3pjjpLS2gRa1W3PBLJnffBRPvTUBicjunDieyRkgwPKotCkcxtbqXMS6LFJL5SqFHT1VzLJ7jPe6bM2d",
  "key16": "5mqNQunEhPnrnTnKH5DTgdGyYgRJcZ3Ksvzr4pXdHWiQ4QkgWXZhuFdZb9kQ7oroz74uSRtAGjUABmRdoNwfhoXV",
  "key17": "3ZuDa2rH4y4CycSjvj6UiGaBLkeawtEfekM7dVewnqJmjwGNGUUM1okoHabPwjYcKvwsydqFmtwDgFLEouxoSdQm",
  "key18": "3HQAwAFvimue1qJknRsidZihTggBnLnJESQyohcHHWVJ1zYTQsJnjo63X41LVkZyhwbobGG8od1TEyy7LCgdu5RY",
  "key19": "52QYCqrhQAycqt1L1hYAgDjmXCfaPCRvfKpiYzLheBZpsMv6KSobgqf5NXrBiy7YcZwAX4YRLZqhoo72B87c1Z1H",
  "key20": "4431gGcMZXXzh9RjJePKMfMy7CKaKaQtUL5yXw2tZyipX2taj2bL3YhFFWJjg6VLN35rYmkYyMoCDYUwpno7YvMC",
  "key21": "XMZaL6JEu5UYHHvUh5AJX55EtKunC9WafCDww78hq5X9GdzRL3QjQghqujva4SiSySMexFVzgtYJwX8PVEcEiWp",
  "key22": "jT7yEkrSwDj3m8xq2CCQvD1PmEmyZRimFyfMq2qyCJY5XYVTQ4EUUoU1XjESFbsFdSGhGd8fTkjKFGSyhpccJDU",
  "key23": "3U5f5o3KmpzDGM7VGoE4QJMERFQrVLDEQmGN35mCiuZrZaZVoAzb27FzVMQZzuXxkvhPerKPhoE2uxS7bp2pBi13",
  "key24": "29D69QqopCekKfUP8zsj61vJKiv3rqrnJCP2i3WEtZesiYaVBJU4zggctBRu6EYSTxq6kZyKqpjmcbzyaKaFXJSz",
  "key25": "4XbB5kuChq226vQeVwiSLhbHZYdHypsps7JKaUaAThFQmA7zdnWv1SDXgh4FWUQpfuxW75FEUcVVX6Z5DUjCNPR7",
  "key26": "4sDNZkpsiLTzMA989MGh7cPFXS6wwJWcJgbTQYm5wBmrSi7ZD1FSQCH13aHrf6GtBL5NkTt46btNQL8jGdUrXFFo",
  "key27": "5Gj2NVFDwm5rBZEJwSYLb2dKhN412Y5JLgAeEe8hF8JGtJpA31WYmchbmR1RjssbVhUiz3yPfN9APAYfYmrxDGvV",
  "key28": "3s1eudNRxb8zQXPjKDcoYqb4iBC8FsqmPsHxLK1tTYae3ZR3KH9VmLNag3vnqats13QTTTUYcCL5YtWEEpHpQyL3",
  "key29": "3Dqceyz9HXoy8WjhjVhG9qE378VG9EJ1323yhLiJYvKfnLNPMGuks9S7ng8tQ9VXjXmqLP1xnZr49SR6Kt7Xvo1s",
  "key30": "4YCfHzgBPbjfmKWvkHNiptYr3c9cPKSoDL5yA6st2TwuCLH5JwxaECUtF2s1efSjKiAaDn2YMwBRGbNzZzdqyU5n",
  "key31": "4ciDSixeHtHrRCzwJLPZGJMcyeRgmL5kWREywPoevKmbHraVJnz35Jgza788w6E7Wn41n9QFunBWqSxCrAX91qLs",
  "key32": "2kjNpjkh41YfafXmES6hRfN27zyLxypb8zJA2cgCFJKPwFi5XgqevnTpXMX64zgBoHQWMf5Z3LvhkTLecfEuViWk",
  "key33": "5S6GaueVNrGjpTHrKfxScv4MZ4pePLB57vQFqu8ZVGxM2rjZytiMXJJSvffvzmRmT3zjWJdooon4ZSaHQiwKVW5g",
  "key34": "5McsyboXFf9BgkUkJ6id4QqxV6nvbThjuDVTNWSexBynwaQgLFrbnCvG8pUDqrBwrxsJ3oR6CBspcbejiwUCg44j",
  "key35": "4CDCQDes7Xvbn6fGGRnyv6HNFfpxwrfVvNR5pvUMtgY5TtsSQrLwzx8KAXs8numQ1tdqeh8XGidAuUVcSuc2GcWq",
  "key36": "3wFTELH35mzRoRrfAxg8gzad2cdBQewQhRSpeyLMxmVCUh7r2EMVHMPNvvPy1j3KBbnr8hUoYQ1o9SFEhYiV27wo",
  "key37": "2abuT6kuNQHDxXDrupD8F6odCgFhP1TAr7gpNSVJy4727m1xSXTzprkXr26Pn1XJ2CPYgxMWjEazpzCcVKCSFysu",
  "key38": "4G2MMqF3nCKNohksZ9fXn9wVPSf3S6AYZTn2EemKkfCRWXmHaq7xXPiyoJnBUTZ233nrKCt5hNcP9kvMQnnSYMie",
  "key39": "4emyyg1QXCnXbzhS93rSb9caFPhPPGwFTMXnm7gUdcG3XyijcYaaCH9yuzKEyCUSv9aPj6Z51By1zySuEkEkdee4",
  "key40": "2MHaPZe5gTcmbXmJgp4N1fE829VUUaXmKASx3atdN2g7D1M5Kqvo1R5vuvuTgNEv1tq4SyvvwmBMCim41x8k8Yeu",
  "key41": "3eWva5L4e1EJ9t37Vj69mjNA9joAVFtRRvUGs4Z2dgNWdpNYRPseX8aukhD3mmhqukMwHTBtyqCTsyKg5LRNeyJi"
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
