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
    "4MEcBCRc33qBcsYYsQnmqSaipza4yxoLYvmjGiwXYsgFggMrVJ1GGkFnvEDr2MpwbKnNs9kwut5coZjRLXDQiX4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgznhrfkp8FBQC7LLiFLAbtmmqt5GeZMFKK9QBgZbRFxLsnfH4fwWdeXHAiYomq1wPk8GSfTdtFPPeuxrbFGZn7",
  "key1": "5uGAh4e52GC6Weauv69xRrdKCTQByp47eQgZfEXux6LGT8ihfEuYiuG9e1pa9kBj4whZrgtNo7stohMTsNM19Bqz",
  "key2": "3b8PTY3yPtKCD2LWZs84pv6EMqckrsp5rGqNpEF1MgVYqZE3HuyG2r6cVSK13N9DNgzYwNTQApbdRZz1WcyCQzZX",
  "key3": "63w9mbtGP6Ft3Qmp9JRQop3V9gHdJwHq8QsjrJFQx6SqvYtboq3pEgSXxJhk6yWYJnz7MWxSXKQvcBp5KPsUynPC",
  "key4": "3Asxv8qPYhgYcXv6Mq1L9hpFBjGjA8mmeq6z33Sn5khXNmgDguNV85yFY3cp81ZqSorAXrYWPo3TX8wE5NgNNx6Q",
  "key5": "5oR1bQjzB6iavP9E3pcFN11kntfSgjJfCqbVv9FaKdSQBtDsCLrgM1svgmd1M7AQprfrVoBaBLbAqh3eYr6R99yR",
  "key6": "4iruAVK8yGeA3ZwhACbvd9x1X55sQSv5vF5FQmypHJBCPy6iGMNzCe2N15XQVD6DNtZ7Y2RRi8maKHowSF1nD6e9",
  "key7": "3ewTVHhZUcVHwbrZDrxw5hjo82dnV7RbFuRz4DuKBP3Fh4ZDzFUNuZKAkqA6uiDoRYAJMuYF3rj9j6w7MkZDzHnD",
  "key8": "2jj7V6NCRR3t8eEanaKZwzx6qWJSwRDc7A1Sgn7DvvbMSMwU5Gyygz8rFYrZ84MfFjezVty2M7TStJYh8BqsF9em",
  "key9": "3BkJGM3v3LhZagAB6dFyD8ckSdkx13no2TdFEXV8otaFu5EScQeQB2rG63MXHjCKLZfqdG1WmZNEpJrzbUzCUyts",
  "key10": "5e2W2j49BY9FpjZchScBBXCfYCLZheWPtsoEwvWJmVHD1EB9qptXEb8euj7RsQHgScSKHdBDz7hPmrGbLj52etXL",
  "key11": "2kmykA5nrUrM86wVEpAZmorzQbDFXTs3gZk5rwePBsQAJw1tj1VDbXRu52y2Dv5x88vbGy2WfP13Uka3ZYeJJm13",
  "key12": "V49cBst3TUFSpg2S37sdEL63GZffjeCigXDsVJ3nfwmCMapzqz7V3MjcpR3vRYsfJVjc8fsuCLerfuba11U18EY",
  "key13": "48Q8pGYETYmbJZKiQvvqQtiHQSHpc2MnXjwECk7UYGHRTZL9WuMNFj7HCGhpwqxBV36FG84azSwHXwsV9cBFK9Wo",
  "key14": "hfpSWDnCCpoUTzc45ZB4rZhUWAkwRtrg4gXQhVEwBRg1rV2AY2aBfUuSjG87wQYisDp4et2utJ6fEivzRGQXBqd",
  "key15": "2K6ZTa4m3noNaaavFnccMnpM8cFKCmUfRr2rYk3z7XaRU7GgtZYSGWByRGtWicYEVQ3o4hBHHc6rL3Txeud77TGw",
  "key16": "3hAcuV1NoX1vB5LAyKcoczcL6rVY34tPmepWNDX4pNm8NXWg3jyMhjSAHUiiMKKXSL2RwfP4ZEhTz66mc3jtcqLL",
  "key17": "5ipXvqfbaMttYSGbGv6WUrsLv96HjkKmm4GRwzS73pW4epVMZFFGTAwtD5qN9zLpaAg4uLdN9uehDx61gE3GLv1g",
  "key18": "j9HxZ2iZAGHHRSDPUTCGvcx22rNMwZzYTf7LkwCrM36WcM2ky7JEWToEYje5WvuHY69JSHoCqKmKtgjgn2AC45s",
  "key19": "3ZSmt99JwywbjcxpiWsjYLtRU9FZJvmn8N5sDncLSLELJcN62i6s7MLwJXxopbA8dYbTSDxBh9Vgqw1GF5wzQZSS",
  "key20": "27ASQoxUuaE76MC19wUJRnwU63qYCtdBQaaSzmpUDmY7tGf99XgD9ZH9wtdnePyz8SkzVqaSbW9rgYSeVkAGA3Cy",
  "key21": "35fAcp4woT42VMBGjaRuqBXudSra7h3dGRrJgaF7nzvf2itP8rTg6qSmUCpRywzrsEmqQHzQHV5F13zZLgsHNuTM",
  "key22": "5bkWHiKPbCfdu5dfeYNsRAfbAhaw1KhWv8DRNBXdEfBkT8qALg72oJbK1ck17MF5UQPo2EsPwnTNw6Jy2bDsk4BR",
  "key23": "2xboga22uPbapArbAeLhpqWnJRQytZVgT5jsbZWirz7JCXYY1MP8UjntScFzZ3cF3wGiBu5ct3uLGHV1npY9ZJCN",
  "key24": "46g7hR8FcjmsJjp9r3XkUeWuwTLRS169xNttrcwENWfBDvjpFqxsUH4Y8oRrCDRWU9u2jG3CUwSuuQzvzAdpzJRP",
  "key25": "CgBVXJDcFUmXEqQSQfjVzkcFyXgGMCkwgeptQAUwJ2GznMEFCUqCetx4ZPb85epBSUzrKWiv8RNZqoEYaGdUmJG",
  "key26": "2fABgVsRwABPPyhL9M7bHF1HVpcDkqjCDHMSZq8Lm1J13A3HEoHs5RGaPwcYQhK3iJTMjma3D2Q58RCp3vkiEyhV",
  "key27": "3Eg1Pn89a6JBVKH7iSzGkYmr8z2qC6TvsCDpuszRVzfJVShxkqqVha2T3bUSdZUKGGssWZJT3Asw8DA6k2cA9kBg",
  "key28": "23CMZdHvGiVXDYk2HfPSt3FMg2znEpdtZnmRBWNhNL2h2q7GgmZ2NYTpxf7vATCDeTPgXZcbZTrPsjz97Kp2wA7M",
  "key29": "5pabDZAFUMpH66g57sYDVVLMB8rETgUvkfziVBa6XLa7ESmrA5qgUd9rGYHgbfmVcLggrAiGbnRKSEhKNqZgkwKQ",
  "key30": "t7khBe7PCunSuLWmVTG35KAguuodd5DkCSosdAw5gUFfTuSdfC7pd67adEf6RpqE1jeUPuYb33XkWBWr6T1a35i",
  "key31": "3KPoyBYeDpLvfJuSaKqaf9Br7nis1YCViYAxtGWf8PQrkuMJUmAJahjmfaBuGBgXvxDP59fGaFbutRFDn2DD6vRu",
  "key32": "52EUrtCuoj8hGs6hJ3CjzYp545ZBrmu5JcUAWGDi2x8T3BaUbFYroFo3YTu5XYtKoEmbcEM5gyawC2MJMkFcZcTV",
  "key33": "4RkixFEwLL8KAaQ9S6WDGqvq1ZXKFtds9nkezUknpUkVtSaWP9S8kCVDGCQKNKvbbGYvDVupwG2sFD45BEoSLnoU",
  "key34": "4uyLYkQnPCRsVGYFG67J4uBYKbUWev9S9wH1fY1fmHpp63Yuk3ziF6bQDDcKwbRPzDrHZBb24Q5B3iJWqzKgXdfH",
  "key35": "5jD2Xorc2tHGfqoLU5eBAuFx5MwLQmWAMPUKxZsDqBUYSFmggYosWarXHeDArrkxFZpCgs9puDG55eD7vRKZ6Hkz",
  "key36": "aSDmencVpKw85oanH2fGgfPVZnUbyUfZct1hisKmTPYDo3NicXmiVgh4y2imnry2peJUkPDamjYYUyDVstYiTdu",
  "key37": "5xi9dy4P3Pa5B8LDpzXBBeFcRQvkSfdPAtN4KPBnDx2p7cojKFEpV6cyhdjUaWhijMFv5L3ANLDcM3vpTarcuVFo",
  "key38": "fYPPqBt3PnMG9zLwyEcHYJe9cF4emBkDguWn3GenUYi5BdrJk99xebXPgz2yLvnejgmd67Jon2398niP7ofgmmT",
  "key39": "4LwDwEwskVVNghApVQpLmFS5fsbAw9CNmXatyPxUMLuu5BZJ4RKgn28bhFRA9RowTWd7Gtwhfsd611R5GyQxnqTB",
  "key40": "2uHFs5DusfMKqZjRM1QLdxm18GXB9ikrPoRcmCvrfYJFEncY7pjAsG1km5eowVveSsttiRJnSbNg28YMZnvAhK7m"
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
