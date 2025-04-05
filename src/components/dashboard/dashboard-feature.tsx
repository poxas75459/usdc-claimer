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
    "3DjY9o2QDG5QcMgaQaiCiwJE756j2yMETooAyLPrD9gjfj1E1WggmsqTUkKqDcPC5LEuV6MahT4TJa1fFwaTbpuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXUuVgdAgdjy7NXz5seaMqwLmRabHXVXd3givkUst8Xf9ahEu2uCB5M1DPhQZ7My3SGSeuBE1NxxURGqn7D58gt",
  "key1": "57QXnQH1evqykEWfQcsqM9K3qxF1Fzds8fTbwD5q15ZGy93VBFjAV7rRPmZ8aaQsXeWaZwmfgrYPHJWoCoe5nao3",
  "key2": "5mrTGRn7hE36SoDNd4RoycrnKFQAJaee5TN7uLPbe7uws8PfaoxSGnQn6k5fHrC1RYLZxt2JqqQUTxus6MwxJtwM",
  "key3": "4ZCbemtEy2ojRYchip4mJWP7ZfGoAKyL5uKvP6Pix7rZcuKQ2z2zgA9Z76TkvLa5upGkTXDR4bd2MkxYZ1HwESKD",
  "key4": "5zx66X6kc2wvxEZoF41iYyy2ggBsV3ZKiJwLYyctY1XmQb7C4TzhyA9nmowVCxsb8JyYnjSgmPza5srxc5C7FqtP",
  "key5": "5sCdJetF14PqT1ckWh69GqVnCJhJwFWEbuYxqNX2UkfkDi6WDz7mw44uVDijCgZLqokmEKPShqDG6MKPY15TjrV1",
  "key6": "cfXGtqxcrPdBZXmpaRmdG8t8DquxPDkNVQGEKJm8vggRXYuDipSJhv2eYWN8CZ43GsH3mzAQZPBtM15GVyUjDcn",
  "key7": "DK9vUeXkdNsvEX3pxVYbVaa9zsdoucfJ11EThHL5TYRWJoxN7eJ5FSnps5z9azSVVueWQqtENJ9aD2V9NXEffAk",
  "key8": "3uLsGaYwf8fqdxd4CQy5CaqHwTCtie1oG7GMEG5KeB3fxvg1MizCiHHfssFDgr8jcwtME5Ee6jFKE1KSXrXsfZee",
  "key9": "idnvPBQ25czSUxp8uVnRKbeHYboJ9tJabM9TpHp4dri7iB6Y6KbEazqELrNch9oYJ4wWx5znqyHhYdfVRsKvr6b",
  "key10": "4TG1NWzkFhXKQoMV91WGWojLu3HQFemLX9mytNduj8kneNutniqTTEgMQHxYpD8a4KCAXxQsfcD6mkXRZQuBakxT",
  "key11": "5cTvpF5dQfcGVJ1HJVw4x3SvVK3QBtwbc3wxbz9oFeQkrfcjYHwQp8PgUbuNbUNFWCrjRa64bUFFN3Ys4v2jPoHC",
  "key12": "4S2UuehSsgwcY3RVL8Pd7Hb9X42qvvChrF4znuNcwg87pHhof7nyGi1cSAS5Xabn2eJyXtkgoMJJXRy9L3ioBBXU",
  "key13": "426bBpHHghyyaNWZE4JAwuCgDA1ubSP2bgmjLA353Tazd9UXWJ5jdNS8W68Q8kQDTXbrpgMr22EqJWGUvi6ERLPs",
  "key14": "3LFdeJBtC1pgBs1G8QbVqHL6Nwpqd6Syfbg3XYY7JUw2dRchMTJTVkkHLfiqLVRhPaazW3jRZdXgjrZSqeaQnaym",
  "key15": "4HckCHgLZyW9mWyhsbYT9KbwR8vHgTAjMTCPucpj9jrF3EjPSvkw4J5xfZdUo25yMeJFQdjdzLDmeLorpBEsridc",
  "key16": "39EZwjjva3QF2nGkFqWWo2mGFggBoJhsuZfPN7LkjwYdxYVLZKX7Uh6uS6sNBWm5wPJKPwniMfxa7cQ5nyUvcZPP",
  "key17": "43rkxXmRgxdn7G28cBoLecgmvy3C9g4N2PB8HYBZMQmojs4xQW5B2AYiMDVUMdbQQVjKk9hh1VLiMFp5WxTLqPxt",
  "key18": "5pontDaHCZEvEytxY1bdax3MprLJ7HV99uvzM8taejins2KCrewtCkw3MEZzGGXNxnFXhhPp9h63VNvqxP4VqXLR",
  "key19": "3dZGE29unMhgwFatRAyNWs6MGrUJoTYdVPskWDaMn5Crb2WuC6axU6yPUTcYHLpADeXK4Tu1aaanRgQpBNVvJMvc",
  "key20": "62xdmrhhN9wYMEAs6YGEfRcBCRe82NdH7bcPnWvRgveKP88vBU4cMxatCbNQc4vR1oCSXuPYKUjE4yKwjtbFy5u9",
  "key21": "UmGeJya1VV4n3xhLkvSxUbxCozq3vpCax1BoYQvxMZtd9qWU6iophjGNpgtR3uuAbuwGn4WZsaHFjUT1Y9cn9FZ",
  "key22": "45oPQbB1bN9aqcjPfnc95pCqtWYqRgXqqD4hyJe6Ghf8gATer4uGNDBPwPXPEg7ZZ6nD8GXXfwh8dovBQwZoQgug",
  "key23": "3u4V24yxpcfs3RywAyRv8Kkzsvnm3ERJ7uJSFMwaHJXJf9CgSj8u7JbYJNPYNADHjX2K9BMN3Yc3s7F3U4ZFVdUM",
  "key24": "3iRmYNFj6FETnq9nULvkJeb79wwkLtmdorKVqoHzM7QvxRDFKfNoKkot6njrUdBJ9ymPJeQo3tYfrs9HHuPhKKPi",
  "key25": "ToX7CFmKdHkFUuJZc6L1mp3A36TkSCcJQaSFsmkdD71wYRXVnnAs1k9hCgPtJg3BgG8dtpoLZrfPWQAxNMkpFr8",
  "key26": "HEAF8ke6pki8iJoFunKWJ3smqRTAAAydQgJnNTkDuFAwPVoNevQKQkptbGmgH6qt8sM4rRCeYJwuxtC8F6VtYGS",
  "key27": "5U4hKkJLTRiHygMU2sxRJa6Qg58k8hJ7WqsZK6adNNNUJpkgLqvgHEP9GBorp9uEDtzjtTJUkGzybEY1HaVcZVkU",
  "key28": "22uZpYbPBvut6WALi3MfXtcxb22vXEtPGaGBhbZpuv9aMarhrMVJgpM1djqHVmPcsngsJJx1KCuPNz7SsorbNnmq",
  "key29": "3q5VMb4RZHBoZoBQywp31y9mLp7kkcxujxzVqxtbhQJfFjMikJG77eeWLKLHZybvTfvd47vNidssNoo5CXZtaqvF",
  "key30": "3b4vQEHKfPuKHzRX2xqE3o1T5s4fiUKNYq7M2QAYHWVtzEjqqZbhjhQRA7GoJ9mzdHdhWKLK8qYRiqPcp9TixzXx",
  "key31": "65cjFSAjVyuTMdgwSWYMJ5VGjDSv6Z246GLecbwQfmjmWoQNqb8fZ1AcBgPviLoBffvh2r8642orgnzMB5fjisuL",
  "key32": "eTbJcuqMZ77TLm2bPc74HwLp9RYmQX545LxRCsbspC1rDLuj7zpuspKGkkNHBwAJxGDXviCexgtK5B73e8ZJR96",
  "key33": "3mpfddPd7VMudoV7XUirXPKdS5hGWmz55nCLRmLdqFRjWpTsWAFX2RZG1bj857Gfpm3XC9YXy7Jnxu77Ym2DVrSU",
  "key34": "3xNqqnXFTREU84whAcvCLibJQCkVpfnD5eiVYJ4VMZ8NuytSBwgpfBkzgZ9w1WCxWZQuns8D7Y9KVdXJSCNkKEJT",
  "key35": "t4pvyU3Y9dzFPFQfMWmzKuEgpPjPVTJ52RNLc6mVbtRnzUPuNhbSqpGW3v1uKmB2QecrMtPqpCZ5xS9CQE4xibi",
  "key36": "4iAnkkg9wn1f355uTcX8kGqzTWq9TC1qrWjKFobunPkGc2YLtrdKdxSb96cS8kfpg3xjxP7VMM3ioJv6tQzGWap3",
  "key37": "5YqppHcze7SYXhkWwjocZWNhBWFgMbR2umY6Gq4m8993PiqTypgWXzLBTZEh2mZ3NtGSy7iKngCut4RTKDvJYydZ",
  "key38": "41PyF1mpaBCeiHfAgh7iXL5d1rfUBsCr4EGH5DExCfPTdhYXgBuAocCmk9gq8YFUrMUwroZ4xUe92Www1Js3ndMP",
  "key39": "3Fw1mfvGTPK7gV1v373CwG3XMoF3U1voWoC38HHQMsB5TJXCjXjx2np5GVTfv8rsREgURqnyNmmMFkSb4bfzJfzE",
  "key40": "qzX6729C5nya2vqRunQW3jP6c5cgsTtDWp6CHpEDxrH5rW3RMUoCNuwg4h5M41mpEpgKydQLCnUp8qR5FFZqnTD",
  "key41": "o7p3U1XQNnCQYJdJHYTptHy6QoFBTYKb1Nt8PXrRsGWuhwb3MV7FZdmtm9YDXW9jZHW3sdRqVsGwyKzgaSdad6i",
  "key42": "2ZKuTY3X4XVaPB31sUvtNgmBCNjQGLeHRF4PHizxK2GMiNJXyVBzPPPPnC8cccC357DpSiiMz7veKGqMd1ANSq8P",
  "key43": "qY3kcyNviwCvqV3Jao7Lfi6Eiu2iaM72Jtdzn7zBXVkDnmfDKFQ3gf8hkrBUdX877RcinBsNRZgR4H1qatGC2fg",
  "key44": "2oSaaDQ8ffu5pM4Tfj36F7jZ6dsdiXDrkFyWBuGaAh3QzB8AfxBmtUftYVMbaPrAeRoyUCMGehKkr45nTjUD3sw8",
  "key45": "5V732XGcr2pJqyq2EQvQp3SNbaYZss1MMJmSBtd3eGmE8o1y66gVKDfEc7HiTg1wdtLvCstLEPw4c2sXSeX2br2Q",
  "key46": "N8Th3ydka47SJA6m5Vf2rETphpRZxSGT7iB4KWmEYN4WXA2mF3bzZLTu6n9anoeawJKy9oeyX8r7APK37LaeE59"
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
