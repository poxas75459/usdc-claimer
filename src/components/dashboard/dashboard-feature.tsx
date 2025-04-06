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
    "7GU99dEhPm5M6HdeHaw2Enki1UAGLcqjrfAUVLL63G2dSFCLHYRAJhMeXpYpfaM3VUo146EEbzXk1s76zPBYCuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPwPaXzRSAWf9BnbgmV3QHkwdu6ZDGd3vArLaf8iwLe38nbJMpiuEx5KVPjrFmh9W3hM8gdfsxZ7Y7VpKSbVAkw",
  "key1": "5Wnh3jr3zmW8pMajB54fUVFAdD3nwboWvZPGJEs9rqPv68QGcj89CbYtwB2sZLn3RA46P3WmKdQq7S7EauzjDi3i",
  "key2": "5YUL2oyCtKWrWpcW7fUKtadpE4bpNtkxLFsbPcH6W31mnZZaKYThUb5LG2GiAJeYnkMAS1JXjbcq4NnvGUwvtamQ",
  "key3": "4hJDX87ptdAqyK3bSsoJyeXQeHfxF5V9m4pDyxRnAj1oKJAVKxrL9SCz3CkRpDpUo4UqadDpfcYf2MoEfE1qgDp9",
  "key4": "3K2nV8SmFFoAWEZ3Atf1bAZQMj1euYiQoAqMRyH6dFBtT6w5Qyf4bkCagUVih8y2mUF8M2vrv3ubUbKjZzs4dQ8W",
  "key5": "5H2chaEx4AUDPiiH6WE89Rummsrm6sTLnksKJRSkjWvgcH1zUswMc9SgWsnCZFLRz3xniBAPsWMb16bBNjGze4XX",
  "key6": "4pxpU92z2nktQ3fmhynuC5WaY6xUmdF6WduxoK2WhKpH4K2NZgbCT3uyHjpF3bG1X3nTgQ2ZPckGzn4v6UtcRGaT",
  "key7": "2jLt8yJhmDgUj9bbJi81EEECvpiyRkeWvtoL1pjLoDFmnQSZ9iZtsRZpbcxZzkQg5Zp81F5phtyTV6VfL9NLGX6v",
  "key8": "2vURiusXHHFFPa5JFdkHKeBEki2j6ZxWexaVzDnAcvLE86Rc2CdL6NsdLZFVBkvbew6J4RANqzdehPEti9L4Fo5g",
  "key9": "4fJfvnDKdHscvkRESWZRgKkAwEBM8oYz6K4RMZDG7x3neP3RgtVUWD9Y2NC8eAfznmbQE5bGA6hvXCikYEmPrzqA",
  "key10": "4Ja8CfMyaDQXt9g6HwhUZ8jMKnnePmACpHUN6d6cU4zz6H4usxjhtLcGXirCpUgDB7tPX8Za2FcvywwaA65FW4NR",
  "key11": "jvUv9qEmdUhMwWB5CqWKfcNnn8mBrKtSorKbUwb187VaL38b2tMrhF2YcjmUJG7z5AsvZWrJtPwzCcugyMW22XF",
  "key12": "3zbQEv7nf4KACWqF8RpcLTHbZj6bALNL9udJR5q7pMaTSyGZmeHjNb9yCmDm5w7vv7JHnELac3tC7QSJ4BV2Bx44",
  "key13": "4cdgoL73yg2ZKUq1whRw3nJC9GJdBSFBdcejeERwwcpuSCpvaJsqS4gGuspzKoDJLDtv9qiyrPT7VMWgezeaSnwA",
  "key14": "gHDKVkUcRLaRYbsEXxf9Anw2CeNVDjjPpQsm77VsH1GLyRuVgFDvKkgK6mFiv1Gw9Xg65PPhSspk8vwGejBr9TX",
  "key15": "SndnNracRgURsc8Kes2FfGRtVG7Esx11TmqpiKWv1Yqn5Dfag6mdFDvoBjK1qwiGDKEUACwnefQyPbohrjFiZfe",
  "key16": "rhmPjLagX661FChsRW7TCQsmnroySommU1LWFt3ExCCRUsL7mQBTN9Dbx4GFpLxCDE8pySkPABsHQ66j3ZQeqTA",
  "key17": "kap2nQe1VPruGuksmAURGrz698KxqVJHxh6LqTTr1QVH9ZUuJFqoZqK2Mw3Xmv9SVXRhY8LuA7mhHURaVmT9WCU",
  "key18": "f7EQtg5DLJWinaXLzkwEm5tqCXG5i3WdKKSNcPuHjdFkyGG9Tmm3ek3mpHbAxSTYbMWANGcMQkwk9Ypa5RCT6Re",
  "key19": "5k6Bot5n5oMZSYLMaSfcKvMdxmtoSWpWrsE11X7XAdxyfb45uqSbKGcf8BRo9F9X1ikdBvYxwxCQyYLP4dRrDpUZ",
  "key20": "4a691PmsNbck9G2E9FzYbQXkqyR913YpHjThRYJN6GqLMs37Xjf7QUNdhQrjb7cGJhdoxqnU69Fayqvkr6BkNjBv",
  "key21": "2eb2cq9daTgrziNvGA7aKD3UtPFe5kmTrnnhV7ovrvfs5qaQykeCM8btCTyK5faiXrc5Gb8vHVG85PXp2rvUdqoA",
  "key22": "JSHEsyfVWdoSxr53vjK7MpXAayyqRiQjP3MiqhcX1v3gYCrpjdTAsVe9v3Bz1aqZVaaHjpXG5SZxeegNiWWngAu",
  "key23": "5g6soEUHWFaQsntMTnuk1cwy77yWfN4XxAAYXCX5UMfhLzHhXFaAqyEheqig4VsUJcwYzrgANHYRFbqM2seKfjgR",
  "key24": "5eXotwGnNUUL6AeTpYQ7PZDCg3ubLA7ZjhPF93KrNU3xHfNwP2wgemRu6jURAXWSF4f9P1qvyvSDR4SRfQxacgGM",
  "key25": "4cbACT1Y19PfScx8Zg8KSUDRLren5MZxKb4pVXtVfBxuRQYkZNcA9xfK7pD4dFHWUiVYaCp84RenTrCVj5CMfKgF",
  "key26": "29124J385eypZdPzfSfRjwWVWuWGsV3ZtPhmSV8KgJSESafFBq9fEfPtaest6Fp8AVsELjMfkQLKhnUGDuvTeGGL",
  "key27": "3SFrnjGHqnoSg3Lui4VXueeeMjDctbiW6CqtK1y6y2dG7dhZPrEccbPdtz2sGRk5SnAWr7m7jybysXk3QBxkFJZF",
  "key28": "5NjLT1ffTmyQCaPyDmYUYn9C8zLGKf2VY4zguz7524thgofGYNyy2rSXUh3nkhob4r9T24QTq8WuvmZz54fSbgLz",
  "key29": "3XpTJwZvE9mxXUWg2dQuhnsSuLWFDiJXpe3Er4HFfX35zUuA4V1kNVr93jxqFfAFUcRCcH8BCGkSj7v6PZBL9sCH",
  "key30": "4W6Kbr1u12MndpMPvAmZ9YYuKbaMLJYtJUeir4jmWrb8JSZQLHKthoCoqu197XEckP27W9dLWzoneShSiJLdKM3w",
  "key31": "4FeTeZwtM65vt92wK8hms8RvW7YhmKyqgWuLEgqVhLUQWTxA86HGAgvCDTbeKkBEhwY2BykTCDuSe62jJbxXjKva",
  "key32": "3LeLTrkkVtSCJVeJGmowKSqUQWNDVNrDRPb7GN9fG29NjPehj7na6iceXLBmNgKPkADBZ3wJAm6cLLSErThXk1Ks",
  "key33": "4n2tvzgi9q1do1wzXdvBxTTFmrv63kaoRjjxQdBGuKLAeqXCFuD1Nk3ee2DqZxpbAnnHJJhFSg59Kc1uU4d3EZcn",
  "key34": "4xLEGiYhnr843k1QWkGMZ7gV6xowBGN4WNYM8g3nuCm3x7W6ANBioqP2RWCU7J2HQ3pMTYmPDv5oAXwCpJzzPuvR",
  "key35": "2AKr6yJDd3UZfZMgco8wNNr3JkkEznkVjJj7E3Jcn14y93yFEaZrmVPz83FcEnEH8Qum8iWQ2UScypBp4oSKz8BS",
  "key36": "fbGVaewyMePeMqQTT5qBseV4nJdo4To1yYcdWy1dT6C48ne8PXUwQNNuMvHHpAXVGKu27Eu3eVbNaqgUa53SdLu",
  "key37": "uu8WMwRLNprR4673GbRk4H2GJy21XxkcPyZfJcZ44Uxm7AnyBzfu3J5JsFzcwKgYHbJKzy25SarKHAK2RHNdexw",
  "key38": "33JiH1wHPB2aSTMzDo7KJDEAXKdbYx5q2mnKPt6Wqeuf14pSuEpfb24jkPXthZBHpxAL4b2cNudXKtJoK5B9LAMP",
  "key39": "2g3kZAsHhJcGhVMjYDvF2qZBNuTxfn5q7PKiJWYCVh7UBdHD5T4Z6nSTJB63GwwvK7vTvbkvQAu9Ejkn7xJsLTnR",
  "key40": "66gptdpCJ5E84tRFwNpA2xZEAM3p3c9EksDYDTYGeXF83FVFaPUsjYQpEn6iwME1TKsLj9Emg49V6c9gCxkYk3sd",
  "key41": "4FWYwGWnSbWB59vY7goAKXCEmbtF8rHCL4kQtzVz2kdo11N2UHQaSDkUU2u6eZpSVDk5dBPq36JLCQySEz4xxJQu",
  "key42": "ZEW3yFikBar57w2S2oWktXBQuZ6ADBABwjXoY4wdeAVUExgx8u9d454pK8ergRiwXivH9mbxC33db9iL2y1GPN4",
  "key43": "3iTUaVzf6xrdN4bU6MMM7MJycqeeDdZrPYpaszBPCQbSAULVg9ZoEbHSB5mDQ8DdksHiaf9d9CJ244qciAr48Z7f",
  "key44": "4xeF9i3cNom4cKSUinSLceAGsUDVDcX9Cn8gjDJYL9S4GuqNY1Xp8TEnvP3dSGLKTTHWVYz31dtg818ZXevbC3gB"
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
