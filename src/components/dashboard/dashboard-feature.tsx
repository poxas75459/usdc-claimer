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
    "2WU9RSuQSzY8u4cJvv3vDFSavcgHGtgyvQu98tPADqtK1zPT7o3xK8VoorgDP7mdBsWDZD2CHNDzfyvkKBnyQ9SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mVWdDR7FrSDkB8nTt6vC9yJUGPcXfoQ5eFj1VeQxooHbJ5wxQS28YEqC13UFozwqpewKuoLEyfXFaeiSQTmPbTk",
  "key1": "3KLbKhVKcmwqRph9bYiSEzfHLvri5V5JZb3EPW8SC4BGeGNLx7peZD1FwsXorS2aMp571Ym9M9NP2odyQfckCFTm",
  "key2": "28DRuYeDYfCk8obuUCdMtCeLC7nwzL4HEPEeuJDFuyy5pzmchnRV1Lnj6UNwCvzogU6VKZ783ARTzhywFg8Yj74z",
  "key3": "aMJBMvGt4G8MZhY3zhzJKvLrzcPRAHFNoZCj6CmTedFbcy4pWhm4W2oNkibvE4GZtsfD2PvQfu7xEcssBFfJAPh",
  "key4": "63HaQEaHBnbxJc8Rne1LGQMhHj9St3bQ7BeFuMgYvr8krNmrgjAh9ndiSfCNVmW9196UgDWAf8BuufLLK1vtmfdi",
  "key5": "4sqobrvq1QADoMbMGZhKPSPnWMiris1qR44HdmGDaKLnhYYvdF3zA4TbEr7XNBLh7aq2QhGGx3Zb8JuBuZmmkM6F",
  "key6": "4kpBz8uByn1fRskP54Rwt424aqfPPfEdYZbmXtbsi6AnB9m9uoyzYE5TPCHAZrrz5kXYAeRZKdcwQHYoLVXKk6Y5",
  "key7": "2doUL48LH6G2BkJP8MUxmhHH4HLZN3FmSt4q1DdFibMmKL5EPRDGihqQkFFR7iopKouEMmnQMM9stdjGHqoK3mqB",
  "key8": "48DeoF2TReTc2aod6vsFvcDAappCwJgYKnhnRV6xAw5H36bqcKwZeG4t2fmgQbQP37Uic4hVjB8kg4UCZQbnPfDa",
  "key9": "478WMHYvUtm5a3kJuAG9QG25Tm4qoJuZbvrFoyoCTNhPyKnA14fS36ztGkVape2Enrst5LYcvjPucRjAHe5TyXmg",
  "key10": "3rhxW7AFXBRnFFKkezVB483dmpyhJ3TGgc1ekBYYaGCKwYwSDzYQ5HrgWbAiaFXZfwGKrBp1yT6GKdULcqg8D4gB",
  "key11": "i6NhGUT2iiEn44pxpa1yb81RAr7LcunszqM2fgAb5DKHtAEuDMVb6pgwkpdXkhYuz7YCjb5Aaeyd3SvqCMj9KDT",
  "key12": "kqHc24UuGLayfrB44uA7GAZuUigJkKKSZiTweENhspwe7r56cJM16NVAaJNREGdcYvm2trhqjjfjLFbAKtw93RR",
  "key13": "2UrREDTFeJKbZg846YsfUM6LRWdpGjBcFFYFEy5ddxV9Sb77tBZP7Lvi5LE55jsjEXX9ZercBgh5Wgrzwxi3E8Dd",
  "key14": "ZCz7qYSSGCd9KpkyeqvM72ndPHrXndPQK1pyRv2CgsGKXWZ9nikhBfcRDrGbJb2NhSj4NM8vv9z8EMZDqHvBAsY",
  "key15": "2amuYVaMEbFAmBqNtBbwSC9URcTbYQZw8JUBikH2s3KAqB19zCn8wKSWBzpgMmBc9NfihoCDbRxP86j7aQ7cB7Wk",
  "key16": "38mvafT3RnSs9GeWsox5cq6NWPrwVXjiPkM47U9s3wahG1rgP4iSeZZbvdCw8JKpBZqBnXMw9vgBg8uV9buFG2gy",
  "key17": "2JDae83YfxZtZaREEHKCWWzB1VXb8PCGVNf1EjNtSTyRDJEkoXbfrqLfcXXqQj2Kjqm7mjh8fKnKtd9yEHU61UC9",
  "key18": "5XvgBtjDkQYYesdisx9cWVY8gmS6dj2DsRpQZGU3XDNdc85byB5r8Fp1ZaA948X6WfWAsC8ySBv3LBenZzqG6Gxz",
  "key19": "2H1aE5SfERzj7YANmaJAsadexvgkyK15txGw34VmNLQcbdaCCMt8HXiDjvRUoAuzwSRvXrX8UZVgLKe8boLnEB57",
  "key20": "2t9XsAcGi7Yj28PSB6nFaqW1aN2g8N5aqePGSQrokoh9Yz1qW1WhTfMXcFYckLhBpmqbHezhU1bByqt9Q2P6bRbk",
  "key21": "4kJWEtdfBWFejqmzhac7qxoBfVnSkY8rqkpS8WqfZRabZE9QVtxCQkEWfrrdXEZyY9sefjUZQaUEB38vS8XwQHu9",
  "key22": "4DpsxXfqXLvyKJvm4YpM3D9Tio1HR2nAyGMJWChMAhEoM7ofkiodbfXobezpwwAFBMfneRRCbCuo42rY5zUvTWNM",
  "key23": "Eq2pvr5Ric3yGbFeqHFSSai1jpiKYuU1h5oRfSEv2RfW6B37K7toZPyZyDqCyJSUavv6w8UkgHR9LqVuzgKGDna",
  "key24": "287duBur6bjWjiUwqA2ZJHaBHEB7YydtfW7fUrR6cZ5pZfJGYicqUL11iZ572a9syMiEu4ZV8GhXa7CzXrhVrAJV",
  "key25": "2QqSgwscjNpxCma1S1epDeUneua5oHMRGVkcznX3CSTPiQpVe8z8MRmJ3RCjogqEzfT5GKyX8jFVzAW28Zj6jkjT",
  "key26": "36cC4LMZNrVESkzpcWsb45ys61bhBJunXC6F2jrcvgvqCVzvQSbWVzQ5pA86KxF2oGqJqCSoXM6u5V1vk53MZdTh",
  "key27": "VtKSsFFDpqmrDcrwSzxF3cLMd4nD5G72seny8NihoP938D9Ugv2GCjeDAeyBbZjQXWY14VTx95mgSU8mXRmiqZT",
  "key28": "Y9WjJBdVgPiJC3MWooFfb6gzAz6P2Qet8ZtdzfNLfRQeBXj462yhj4gtp1LwKAv32KYShRdfGpc8xSYyUXcD8Ft",
  "key29": "5sutoamzFkDzrHtdgv5f7UTZbwMc2gSoawyffkcX2wh7uKkXe9pTgexNiGEowBvot1vnvj87Y8FuBkG3Rxe5kyH4",
  "key30": "3aucBPUCcE3yd3s68aQCJsQ8hKzDm6e62tjSb9vkAtPTxSRwShtCX3U4t83ZSRnB311YY6Qd4ZYEM8mMZVksMb5h",
  "key31": "28t2nCCBFp7t3amNpk4uUepZqtoAHUgJs81h9sBEKU3ZuY7QaUNamvRSf2gJW6rAKWmRViYeGzcTSCAgREDvnZH8",
  "key32": "3uG1npqCs4BwqpsW5ngwJXm7vppGrTwvH1yhJxvo5QkDUnZo8Hra7VHRnKTKooJic2dt8sbkv3pMmYPLpxjvgRFv",
  "key33": "uoineweuTHcgfxwzDk9XmEeP7Zugg2MX6zp9sG2E7r6ZgBWP9PJbKjpD17AuQr4NtvdN3fetmvfxF4Du9K1SUn3",
  "key34": "CM3xAenMi1GfHymKfQRqcA6Vhik3zc3jy5T5fiU1tEp5iG4viwJCBMTUQnPSnCwhfbfZyMwxPEzToG3X6UdvoT3",
  "key35": "4bt7FGV1N56cVPqhJ2tZPAhhijwfmkYWkRqAL1eCgD3XUP6sZhZtpp3kmpqGh4PKxoV5ZunmWSM76VvB5xrbEa9",
  "key36": "29DSEXE5mQAmKb499Nrn6cAtG2EyekS8sFFjrqaJFnmXectN8nhsR8suwKmHvL6YC8BXU6B1b93rmhHJEsChhPQE",
  "key37": "2AZ7XBLGBkwCwUTVF2VD4iaHFkhyehmrNdJjFbBCki4fbhdUgiLkjQo8pR351ju79fNViaThVpwhQXBNKdzSWsk9",
  "key38": "2NhfkdTKs5VrteoyXf3bpkUCyQe3WqfxQnKvdRFDR7168opGNddRcF4DyfWHV7vr3s7ok7RNBD6TnQjZodDbE1Eq",
  "key39": "4CEbZ7oJSoU7TXPx5SZe2akirQZDCGfYjJFpkaA5qf1TQxG55BJ9kRwCCAVXJrySSeuzYsSSVTSHzgfrgfWvj84C",
  "key40": "3kmHkWsYsSqUVXdV3JkNvZuUUvJ83AME8QPmiu2ghcX9jMyScBJzj9H7whmg1w8xe9wUczMqeWhgeR495c2xz7rf",
  "key41": "29hVcsWR1unVB2GzrpphEJDMaSc8cTGx7BuTzX8QAxWNB4DR35vVZZADGcMBHWVeq22MvtGtusg3PQkK1iLReJNr",
  "key42": "47VQ7XTW4PnTcaVUXB7CbVK8vhEtRuUkCgBtq9SKQwn56wTaCsA83ZUT8mDHbNFifaqreodSnFdrwhv4APPfYPWY"
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
