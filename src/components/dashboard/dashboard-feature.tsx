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
    "HoeFPgWPMg2iS1Eq1MBYDetviUtXpgEDNcpCwzCnTwzLvHZrGSKVqfXYYn6wmXde5PfLn8XUthirNtVzS5aZ1xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgvZypZEUCXhUa6CHWzQZMKHuPDWMemfaw3UNrjWP9UPFePMXSbxZU2EsoYAspdUqYmToHtENHtxdG1j4iTCV4N",
  "key1": "5ZwmDBb4nJXMA4J4JdTzGYDZVE4VqBL3Uh9SjLwFEuRJNjpNgprEkNsWgD8hYnvKQfDwCCaKk5Chn3svgQ7sPkpP",
  "key2": "5Zke6CUP2FHcFmxXfAccktkm2zeQg2oB3z9nCS6eAho7gKYcKxyf8bDCnknCT3fasGytBoWKYFrQq8YgqJkGZQx",
  "key3": "3NrSt54pP79CTaWmAaDi1LCAoqPgs7GC6127wehXRHeNF66sqCQggaPEp5wiYMJVbgsofN74kTTqiZZdtFUSCNMU",
  "key4": "43MqsXWNhYveYxZxZmyETWGhdGSEacY4fEPngdm17uuKqeL9KcRHCPdnrVTMe2cGyZHJF5UDMXoZ6RedWYjoNBY4",
  "key5": "65YZFwNotepo9tVNGBseAA3ij2HdzoBatMaUbi1nMnp6U4Stc1WQ2tkgCQisdsgAuyqMK2fbc31w5SB2w8CkyTqJ",
  "key6": "4xhQx8vNzewoTGCREza4KMVjeBm5713YAr8BxMkYxYm6VJfRYP674xx9GiuDb3UiNiXbbet3TAjox1iLQfn58uTb",
  "key7": "3jrBoPWSC2PC4o4dWPMwfBGTWnEQowyDiG5NHxCgReot4bC1FekWwg3uHY3GoAnbykmYztSAhZyfKZXkwq5er9th",
  "key8": "ZoToFedwPCxKMBcLz1AKMBXcJRYxGojGdK8MvYc3msndyXmhv6WtbmvssfeKYUC6RAqaSUEZRrCyTdi9mBDXSPA",
  "key9": "ePhKmuPzLrCeb5TewSWgqRvbzJvPTJt3jBSFnrDBufqQJpp7bPuyxay6gAMcn2apLkiFh43h9WPZknMAhm1DtHD",
  "key10": "4ueKC5dczmbLMqcBwxTEfsaymKnbm6StVb8WXgr4aNMZWgm8tkZNYn5ivZHrQkuxs58hVhK4cCnWgTv47YtPzJB2",
  "key11": "48sALZSMYn8uhhQhoq942CHWaWDwpJCVzyr5oAFqVkxR95g7rAWx7zbusyNSHwh2ouMK9ZGQBTs5W3rk4Xi7Go7H",
  "key12": "4KaFYGagDfkBiYV5h2PfYTrWjJ4XGnTEDGdWvcbzdWjWthUojxgNNpc8JFcwsio58pVYCJEgxDJHEdJB3j4gvLoM",
  "key13": "3vvjBaUJu27EWzXgvnaKSd9qkfSEtjQnaeVzc5mi5rRUAKBVo1rLvaq2yorrWRhg26zgEv1qWDKRLv495MsKGEHA",
  "key14": "2X3KJAcgBQhJXTDpxsXEWkVwNfs7yMRt4zPwgWHmJYN4LBVib2oWR1VSuLCMX8aaVeqbD2hBtoZg4CAVdkVjLw4q",
  "key15": "385f8k1WzU8qNczrK3K9QpVBSHoSpgN3VEh7T55SYZbisinMqTxDCFhmkub2Fz1NzSnBM2622BbGsYDZPRmQJpDG",
  "key16": "3owpCrKQC7y3zzcsYcVyerDHEDj7JiwQjR82pHfymtf6B6vHweu3PpKq44WieD5HhQBFBYT11ExodY1F5ST7HxAd",
  "key17": "36WX7V2rnkSxxwkRfGMv7UrqCKuK7KD47zmFXJqLojKF3iiPiWu3mGvZukbNspAQLBBiRHHL2E4hvKmodn8j4UdR",
  "key18": "4qrJXNKQu3knEZzQvvU9bEfQquoY7Kdp2DXWjNa1LK17Z4nhhzM92hpkTxuNRA46YXV3SBgzERN2CwKsfVR6PbNw",
  "key19": "5KWXVRuvC6fZSxoBA1hUyYgCzhWZAtttTZYoZ75683YWWbWEzMNyVqAJEZN5kYYmruEfae2V7FfWHhJHw9ZP214j",
  "key20": "2pqnngeYRVNTCEVv5UXWM66672hbJ4HHsca8WaJPmkWoySV8ZQ8L2K7K4wHmBcgtCq2ojcPBmTT43VXsGLQjVXkw",
  "key21": "3AgaXBG2xunw5SAuHKKjLnWjEFHFGUfQP5aLU22bg38Up3ts4EUcoP3KVh1cMzxdA11ScbRdHiZ8SXX1WqSdwn6h",
  "key22": "5sVBmQwvQ8DSBVRGg8vV2wPTx22wbVvD1UCzJBRRzv3hVeQkZVogpjFXPABr7txDVXdX73McaVNQwp1j6bBDiztB",
  "key23": "3wCYE12Zc6bzggaRpDPEy9k8BHs4GU4otKyo9HVxhudWmaEWg1HSd93yxHx6B2xqW9MQhsGPd59nDkpPh4tLgMKz",
  "key24": "4wja593VDsP8GG6UJBGiTGayeDLuKCdhg2aZZTvR7JM4QJp8peP3Q3ij4uo2eKM1NeqVVLs6EvLxSvzxKNokYxm6",
  "key25": "f79cBGccH6AjFXhvZ22rRzLH8oce44aom8u2NthJy6DKAUNnZ9CssNibsKvLeJhcGsCz4WFx5rYu65S39s5jFk9",
  "key26": "4wsB7HHS6wxHiuWzkLxEPhdNpo6LjeCb4ByCZGNGpa6CMme3Xq4xNZHjzvd6GBrxi8xz3gGgGwJRayuNe7b1gq2a",
  "key27": "3gHf3C1wkkrjiiGSYpzjHAWxPnYSuLJD4GERdDZNjLHGNE1MXRAPbx2aCbKgppAhcGLRfyE7jqE6JctmEpi15uZF",
  "key28": "2wKQxMmCfeMbtecbucxKQP3JHkrwfcWjFfYkaHnqy8SH1msS3m4erhpvBNGdT1Bd14Py3Guq4L8cJdHGFVED45bD",
  "key29": "2oZ9rUMUCeDwQp4wz1qtxNcBvvsBuxmbWkh5SsyCE58TNm8h7a4PiL5FeaYbReHXtRCWPNLcKbTgGPCiCnxxLPjS",
  "key30": "4fBdQ23JKTxeAqhcuB8fzNCCAJjXXq2vY2iXnAxTib93nDgPMvjFfvca7baodFKamCVSPY7V8dZ382KQLhi8pLat",
  "key31": "5tMZsTajMp6ccSSXfbRC84M4s2S7DWccjV5gpgH2GfqZAERRgJHP45zsadEvdZztqCH6UUHKToUV1NayW2M57Jxj",
  "key32": "3rqvdzTi7CDtVmzf5QtUZqiuJyJvHKrmttvCNLCcwEA4zbvsycyb3hTNexzmTzi6ohTdYh4WcA6iTYwEWQ8xB4Np",
  "key33": "5ZiMCMvbafU6EYiphXLL7sDwZvkTNcCGCqEEC4Y1wsUbvdGus8L9jp1WwwwSdGQf487ta72DrgNUcqJtkKXQwUab",
  "key34": "5iopNuACZYThx9mfAeiosBvdTdRM4kXVwpahE56hbgt462RoxDtdocyaRRb54QAtivFB6zgk92Q6mWGwiGrmRZj7",
  "key35": "3Ceszi7Lz9cvhnokomMr692NAPWfvbPxNQVGuRCdEC2LVpBbTMJL9tmiN9Yf9hyQMus9U28bSqGnVLc1fqH7bBaH",
  "key36": "4eKPqZSrfUG1aEDyeAUBqSZTWzwonMD78DsYcZTzBpB6FKfmQvm6Kts6ixZAeB1uaVkjCroB2K1tcoXCdvRLnXxC",
  "key37": "5a8uXGWoem9F2TJQPtQ3HyV2LqBL8sgkp5okQHfvTdEp9upEhGRiMmHzxKbkdBvZr8v6DbThBguj18Ho6VJ9jiuW",
  "key38": "iYuLbPi8CSziZM1oSk3PqpsRFbZ29MTCom9HeaeHgCy1UNXBaBiYsnv33q7EjSixD32fYqtLN3FBaBgmCyTt7Zg",
  "key39": "43DC8ARYMoksa1o2htiHpCK68VEL92WbpAqGdkejHX3j4RvTNZTSGo8ji9A6xBTagE96pX8XuUVFBje328PBTaPH",
  "key40": "aawBZkn9KHsvk33PY3UUCXmkChBi4KnC2fdSvLdMUSXB8zwfnP7XsQ1QznLNyfRKqq33KDN16s1TUM58R4EF2if"
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
