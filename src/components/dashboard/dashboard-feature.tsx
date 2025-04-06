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
    "5dXk3zL6Cu3mvf9oVHsjD7rs7nXDRRiaW9V7rG97dQeXVv6UJxuEibyg44D79cBn5vTaAdr8MkL93x4PUXmYDTmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPmL3i23TsK8TfaGamvFeHFFTc72xxbbYiqSDSyPbYugo8HNeitFkXsBJBQjenYde5uySnKrewqbDdVJoiEetoS",
  "key1": "5Yd8Q7XmtMWrZkd9wXHR34XMssqekAFXqRGpjqXRRuKQuKXd4v9zJ2yvBEW5YG4Azc7YACfwUzj2Pbpshk2iiQFR",
  "key2": "2zgpejCvaaPenEZgXsbu6KYJEh6ZWWDX8gxMk17KwHDN7NY7Bvhx6pRG5Bs1zjuDJTFE2fDF8uGEZhA35xWEdEeT",
  "key3": "MXAp7dvBQLNDhD5xjoCatawVjMhnYYpxu884QtEreqSBNT6f4aERAVP7wESpz5DAdJF8UUMi4f3ZJCpbuJLcrGR",
  "key4": "5pFw8Jiwp3jT9zSGyu3p7jwW1aM9ViJZZ6FcmPjHiK1NBcn6BFhKomiFx9KPLn8i4d5nJXt59b1wE2sMmTwRNixY",
  "key5": "yZRqTdwHtvS8B5FVPN4ScnvX4g2SJFr14WTj9G5kJ3yRtGm6q5Xv6ZNofFbiaFvZCNuQNxitCU6BRsrcE1sjmJN",
  "key6": "65pEf6nB5GNDB9PCpQe6BjiZaGysHknVws9ZU9yBhZ9zViNDU9hdRRZid2o2tykBjmPfPDmeCLebAxQqGficQdKa",
  "key7": "yPfXoUvFGhcZRRhmoB9SGC7uqMQoUK3hEohUhp5inbmU4sUmmd2D7Gd92HegoZ94EccoFkRkzTrVig2zNLjYp55",
  "key8": "6DARKX7SNC8ctxqYq8YSEdzo2xoCfvNC7LWL9Ty84tJfccwm1xdUZo5NVEEjybEqsyU3RaHhsYNFtFmccKxKd5X",
  "key9": "415kbbMUZM1Z2NNEWAPNp1vZ53cQTuvmkn34tqSFiuo9Y5MD18ebjj5Ybo7WcgkpXUuMKAwC727FmWqQmTnoydGv",
  "key10": "2XcbdpSKJonH5TVgx86XDgPPzJRXgokexAgHddmEv88nP9jwbvVtkoB4i4sbwVHb1ZFVEdL1oDwaVGTLzFvYaJSN",
  "key11": "3YLCN4T3jnh51r56CmpAuYkLqHPNyPFbBhpyzo16TeLzK7TeQKzSiTiyNboXDWtN71iMKxSAUzGbwBXGmKWx2dAv",
  "key12": "Aoe6DDK3aKNzJX2UcG6pSWzTgWJPa2fQnQAef1NXGot3b3vFdVB7B9jLPuKG8ChNippnFEPsDKSofLk4qXNDA6w",
  "key13": "5yEkfkEz5k2hJvE7y5QuZnnLZH6XeaNQcJWvMuySyan42Dnr8mqSHgWcJLwihsK4UWkpgwWyufLtthKfyRe3brDH",
  "key14": "2ezo43y7u5PYG4PVTPNoWpfKALidsdHRoh32uNE1Ngzk67ZUEYiuxK1ag1jNDo8vT1gsBATV7dB41wtcEnLzgvcZ",
  "key15": "5LEs8ZZvWuUnJUveYEY7bW1Yx1SC1CUVbvJiiUrFdBtjqspGBBHQ2LSaiTMSTasNfgDSFMRevq4GmVJkocZ5cU1A",
  "key16": "5DQqyBfmsbyohyQzyeZ1Ge6cdzZ84JGTvTzyuiceAS8W8XoAyZ8Med3Bz7WYHmLVWVkWnsQCzPViTZH6VKsovyZP",
  "key17": "5DgwKuUS4hCCqdntiqQL7yzRmYTSvoQjxfX89nQHUnB7L49jL633ND17xjyfV2kwQYNVcrXbE1f9HGsCfpVWMkN1",
  "key18": "3yGwmqV5P8HqqLZrbg4dyh9GGCqsnRzNYnBxJ3Bsidcr2heAXQNrypgAVcgpYqP9hrnGvNfTtwdm4Yig2wkg5Zmi",
  "key19": "5E6wfswBFiUxjjw6ppL6tYvmTfyMrtgDXbzZCXquvxbQcuhgJ9eEmEDS6uvmHx9XnSe9rnjk6ikYJap9suNVmLeY",
  "key20": "2pit5vf3UUoxib9qYTNft5cRqxrrMTmRPpS1E7UhEwqkcGSGUwjkUvuvE7zYR7ZJ2DAmw7tbLMpMF6KbiRpytXfj",
  "key21": "QSA2LqhCG9SNkycsUDBteG2Z2AL2RmVtqM3JuuutgCWnTNpzWbKmkqDXiw9VR48JGtFrNvDzPYCMcqYd6B8HMTE",
  "key22": "5JYu6SApuJPot91MvuhLgZVfSK2V12DyuHB9ykn7yLVCudeeqBVqMUemU4DPNvykxkkKL72WMiix31ZvWAMmhwvL",
  "key23": "5tiTppCbwa2ZipLr8yiUH2DghVpn5kb2FTRjYbnXxRNACV6JKUWQ9KJxZq3jjiecf3r8REL6xe5wLLFgDg1FbsBQ",
  "key24": "5gr6qSdghaqyxGSRcQG16UeyZpkaVKQhsMuf8i48SaGGnVodMGZFgWx4mL7KFHjhACTLGC6uBsVpCDTSjt69kTin",
  "key25": "56pXCFYNs7mYfbcsA3jZ4jKezWriMhWhX6r6T7GZPANgNj4UdY5UsDw9ik6DtPkM8DnCC8etgvPr5RW2bTk1yiCj",
  "key26": "WJJ5LbP6CmgK3Ru1aAXG2ctHifATVFvHw6Qg1wTeEuiz8LWcukxByDj6UJ3YSdQQzUdDRur8LtUYAMZFsFNaj1n",
  "key27": "2a3LdjWrKnaS6JSZQo8gPitN3yNAPAKhLLz7KzqzN4dhJ9FzAL1vyCj2UZ1cAx9hNVPiJaoeTFyG2EhJ15TgRwCs",
  "key28": "2zdV91JA8yBPMH7McXfDk4WbMDpK5vT4xa249a38PdU23o6WxAcLdatEbDSWWa74kp1RBjrmU1Cv2BC1hxdp3J5D",
  "key29": "3eeb77K5cfdqiGfcB2uZs34SeMMAdtAWQUr74BKXwQaFwfjFGKHNvxr4R79qUaKZ95zCQPigQAiUQp47h722MLCs",
  "key30": "3KcSEMMED1XkhZaK3dYekRu9SWHsgyw7iRecsSrvZPNtzH5f38HKvBJpC4gKYT5LbVacjR7Et6AWHC64oBCmtUF8",
  "key31": "2VLQNC2nk2Rgz752s5TaUepHNqicKpER4byEHHGTHrZ5UJkecoh8UHiXb7eUnfGN3TZnurHwPXrSs8KNtUpndfyz",
  "key32": "2nR9sNT3ty2xPwP2xhFqSpm6YTg34Xk5DxFjVDxUAvfADLC2pVpNPvgNm4K4jKtfKfK1KcNqtHhD48bQkx5yu6Qo",
  "key33": "2DB9Mk7qCp2ufRXrftrt7QNkzg5PgnnWu6ZQHFExZuPu1o56WfaNyFFZWQATJNCuGnuNC1UDTNahPZnboMVZZ5hr",
  "key34": "5dj4WNbRKTZZpGarG2mvEWWB6SnoAdwwewsL6mXeiDqnnqQ2Xhp15YzvdBmP6nuwbp2TvkfgfJbRSTVWtpF9g6fK",
  "key35": "NHth1iXrRh4F6VuQ6WSXwum6j3Y2sqP3aKAi5oFJa67aXPeRqyEXb9qK61jGj6sS4fznQfSdG72KSX7svZoBor1",
  "key36": "3pmFXPVjYAzXbsk8JWr99K5ppN45kRNwXFhqGbc93nohkrbo4bVAr5TtAPHsrMHuMAa1wxK6t6KD6p1kDfU1EJGm",
  "key37": "gzuBjzTiDUfM33NYom4SAZRCdqMweS61N486BTC8xsA8dUs18HbpV3FhtLrQaeqXL62K28Rq6A3jN34HJdYRgnT",
  "key38": "4CqJaASKquu5wUFpWVr1udJqzptcuBXKnPvqzT1ZvRHDg6iccEMJnWQKgJSrBrmDA8V8YvgYZnqC3g2zCPvXTazz",
  "key39": "VLuyqwaEWh5KrPF33CRwHkGkh9vJBshZ3kKQqred5VM9u6ADJ6Qm4mE7HRp5evt3v2sA6qF8HQArt49BTUwam91",
  "key40": "E76HWLxw54fmk1vmPdjDDRK3dVFpiP5J7qrpTWVdRWDSmWsDgWSFoLYC7MgDk23mG2GkNwBnX5ecrGUZWK2UJXL",
  "key41": "2WhRAW1EXFZ3mR5ZVKp7DX2STxZYJJJXjJu8DXEZ8L1NXJby2zrhu3ZMtaVwy2u1uHJ9ziX5r487N5E2mNnLQrpp",
  "key42": "3J1LeaHLJXYfSrE3ut4Es9aeb1rpPz6oRycbbKg77pbWTBmVjLv141oGer6E9zBcbbPmBgxsQLitEWERzUM3MK3P",
  "key43": "34JzKRRPgc86jeb2CXa63Hj1RNisogCgRPSNQnss4FANMjWUpNdb4PiVVWhwRpwwBfjRQd7HWhRtUuhwFrXmQvRq",
  "key44": "2pGWZb81ZF7VVoogvTL4FyRmdvm58Py96WVwPxybNYfreWTVK6WukFRFimRHu6hi641vJE5eusNZUVMm776LRzMb"
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
