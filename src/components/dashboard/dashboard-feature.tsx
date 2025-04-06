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
    "4DrPNB3u4vskoSBUiy1niAN1aRcVZT4HsaSVFa7VFjD5GaNFfcTYZQagQHfDE7vhRvubUVniLsRfMwUzJ1mb4Tqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oiAf7Si4pX7BH5hbNbhhFJkzaswRDNVcDSnUYxgpeN4StUxcUJTjJfzgP3FjfXBx3uhzQVB6ffv4asr5Uacasg8",
  "key1": "2P2YJrU6JMQeWNNAFQcBugjMNpFm75r4Yz5V3EDQBK1VBvDftGUituzokXjdaWDyaxXhwGvRADqeKs3brySvEr7e",
  "key2": "bqvZASWJ6wXMK4a6PxV8N9dGAQoz5kpSLKTxmKTyjotKYvb7tJgAj5fYnYMprmBZwpxLr3WTgSecfxtCSuXmyL4",
  "key3": "2d76315KYXb4swsmgg2eehkQZbhQFYXFdPSnCyUgJQPAKgZiHuN8DX8VVD2wfD4JPqwjzknudjKoYhzqeQkoBGAS",
  "key4": "4mBsgQR3ppc3rXiSgFr69F22jGa8xVChMA1damBHRZTbx8uemWKwyo2SZ2stFB4ZzETGtkCpQ1q2tWDXSDTmaQYm",
  "key5": "2ieBW7tmaMqbFsn1ktuno4zcjmXMwpJTc5HG2T3s8XPpTi2Q5FU9fJNigPaFzv6XUEZsUsD49XVxvfWcTPQRk2Q4",
  "key6": "fnY7BenR2Q8FPkSkYKSZw18g1y77GzidiSRGTeKvPxRtcMBL7gz6ueBi341XDcKgPSnxqiaqAoUFZdnxw7aMeHb",
  "key7": "ywHzbzseXSXyD66df2DgJCByEpVWbDUqzLTRwbdUdoD6owHDChxcsZjjNuQHvvCB5uhTRDLwZi4V6Kyvw9vYroy",
  "key8": "5ChU7YRF1qwoK4knBgcWjRKqhTFK74KmimWn8CfmmdvazTZmghUdvYMUFU4993v9CRzebSbRbubQrswuKT8srbNx",
  "key9": "nzCrFtZNLY2fc97GT9HVGJcAseTqTfpiX7Ua5tE9nDEoKCfMqqYZqZC82kVdnDjXoVnqhTZDBLxoi2Y3mf3crfn",
  "key10": "6197fyUwXCYVHbo9mtRmMp9MM2QoD222QBUSiKgFCzSmtEWsFe3svsdGyoU2JfgJvu5GUMQ8WyEwa9q7jadPzbqu",
  "key11": "4CZHzhbGFNxySm8HMrzV1GpLLgzdRnbpoNCdQSsbQw9326WU3r4LQUvSQkXQwH3KYDDUqVvT5D9baiSQiY4nuANp",
  "key12": "3NUraG6LeDpauBzP8Lzi4RpwhGazm68g6VHmSXCMLHZYmG6F3PKtKDGm4AACfoAEJkvi82ZJz2NAf9BTUjyAVs1s",
  "key13": "4whuHGLSBQXirNfxLacFmHA9JVHkueNTGpCJ75YRV3ttAME5Yoo5XHTLUTvFfcgLPo4ffZ4944r4fYq2HtKYi6Mw",
  "key14": "3XC38pXynJkGnD3SpKymMCoSjmZMMyYxfbu1pnXyoxZUqkPJN6DRUrX31kb4u3o7jmvnXu277nPA67oDxc3RXFoD",
  "key15": "4xbA9VWbyTXCghgAvZ2YJmG657PV83JrGAZ6v4bCcVk6WpAWMKPRrY5sh4P46xciPqLooA2qgtsdUdqp1yUmH82n",
  "key16": "2cBFGvwai6ZqEyhqHL9qyeqfNbx2SDiJhJGjB5w6zU57v1HP5TkPC3dBruR7GfuiJ91sCJRkPZk7e5APjuv4qrT4",
  "key17": "Bi586sefmx5gUpCWxdk9rgMgeYoMtvHorgsnkFApnXEASqRjCyVkbGwPvYhG8Gwo4cgMcBU9KkaKdXmipSaBh9d",
  "key18": "pNWBQnch7A9cJ6UyG1ujtc3f21fEAsUKBiNQS8jkc7HGdJhhGsST2LCg3D1wHW6KMpLYbwE5P5UxbkicpfmWu5Y",
  "key19": "5ks83F6TM6GMLgEgKrJwGipg617vgE9eWuyk7pYexAbCKiwobNf5ehPtz8jgMHK4Yw3p2DXwXvBHaybTgBdHmH2k",
  "key20": "2KRxGMmdmuS2EwBx2M7CgxRHrQFJgvu9akddgghe7Mz8D97sdCmonD7wm2vMZbP6YWeFfv2WiGgozjnMCk7RkcYZ",
  "key21": "5Jri6HLhxXfBLDv69DTD1YkYewWDq7tsNQf2WF59qPqczpj3Dn2YiQJqEaRssavXABfr1qa5BVgCekBE9AxrDMuE",
  "key22": "49sE9BHNzTSayoiL35rN13arJnCyanyKmwHQz7fPejQecXQuqYtMNB55u3yNtxmdZ6s8KyFGajjQ5JPgf54EKobY",
  "key23": "3L3xV8UUaZy1nNfYJCv1bwCSkP6dxb8SvZD7HLu5U7oBn9FNteL8noH6pCZSYDNRwFhVqiPaosMjqPjRzwSAMcji",
  "key24": "5qT8Ces8qzdLDfQc83LhGy7zwbAa2WYC8Wk9AgLG4yB1QyCixoEzmFmnSV5QktT3Ghg47vzGUT9CtuFEN146qQHa",
  "key25": "2mx6TmsU1CyVj76XPZ79a9cm3xwCZVVxeZqgxXeCgHPYWZujdyyKAkX8FcYDXnio3fjapCtrNCDmBa4AkPebeVo",
  "key26": "gXH7yP445gtKjibPZtyEj7tYu8CdcTp9YiY5T7Uvh2Dcrf8iDMnhFPWnNi51MgDVZ67nEWPydUv974cQfNMzxLC",
  "key27": "5tZ55gXmiw7g25tr65tmGATVVo8vReWMWMktS7UuC8AXsQgdAqCtSAjNJc4PC338KKrj7Kf2coav8CUiBHg3BQXp",
  "key28": "3jMFiBGNzQyWf3Digxds6914PtdRKUTwKwTtTxVccJYDSu8j7YnDAfiR9KdF5VJvBuCTNhUwoYC85TaZ5BAieKdF",
  "key29": "5hTFSdu8ahJ2U7GUvQAnVcZKYXBurS12qMUXjVfU1AhqL7th29edM5TvEiRgyaDhoAsQ2ETKTaf8AxAQEAcuu44p",
  "key30": "497aep4GZYbkd6fUghCrSbzXPxYbVLwBtRot9bjHepp9SxKaaQPxP78uzDAtUVSZxLpZzdQbRkVCSR9gmESu9w23",
  "key31": "5g4gNEz3nJB3uaAbXkheZrw6s8bzvYug6HRDBPt4R4EzNnuST9PpiLxGCdbn4L6L2fttueKoL4kN3yQ4FSVvKoHQ",
  "key32": "3nUwnD4YqMkwvSZ1VrfGJB97hA49AMRDhC2cuFoFpHDJu25tH7oZeQJfgUEzG9d1y3RPC5gCgckjdHYSMv8dSJf8",
  "key33": "atiU3Zcz3gUwdCRsZLU37vxt8r7784hVL5CJiSEchN3orioc7Ri5Y4LKKv3ezNbfBWoRonX3gBbmi85ST7Thwoh",
  "key34": "3UFKY1oXLDk4DHoWNC35nZjBdNrJb64XT73fmnuYRn9j3vGE2RL35qyJRAoskChXBFutNJCHJKMgyigFxjbTeq8z",
  "key35": "4tU7FSfLsHE3t7NxZt78grCcZmuhVFnyqup5x1VzYvsX2KGz8V3jxQq7Nqcqp5ZRSsCNZEiFFEDXX56hGYM3FVU9",
  "key36": "4NNWMJCoNosnNy42k8awFtTrgqJ9byqTyzURJPZvDREg9Dc9fALsXH93b2Akuw7FREByuTTNW6ZmP2K6McG6YuYZ",
  "key37": "5H8CTof9HfQNc67Wo862SM2QDbV1Vp7Qg4CtmkTa44qEzBr1qmtryNCR7C5JZxsGqnRxcfai9pg5TUG6udkcapZz",
  "key38": "5NmDL9msD25Nh4SrFcU6N95vcANQCkWpDwrEQWoLXfABM7EBuRiNMGaJHWKdthD5HzEeFXJeUiwcokoGbk8beCbt",
  "key39": "Xf4VJNfRdB5NfhEyvMct1LrbXuqHPL1dqsiGAtNCEQm4HBkLDTXYE4KrLjnzzseKpUu4KPgEGbTY48fcB98wYvF",
  "key40": "4dxLSDkSvx6EX8w4sp7YhsPxpBpmFsKRs3dsLiP8PxJJeAKd8he2eiDUHbXPd7GdJbG5qyTKXe3JYkBuqtXRVFEp",
  "key41": "4CDGtdAtigKnhtd9fWoqjCg6XxbqpdeQAuFXvkRZugCPVcuvar99YKS5mzugAmdhyqyr6c4Vdwe6j1amFczur3Mi",
  "key42": "3tw4LUCY1Rk9ha2FkAdaXL5vxh1gcSJfTUpXTwk65E7DkpEm2NGyL4g9uoLvdxosHBV6DrZNKaiok2rLRTsB3bov",
  "key43": "2FrADkBi5uNvXqJKFxPxr3K2LBPLKL2FP9rA1XC6DTxps7PFhEqAAjE6BUGV8GTQbJpokPj7xF8Jik4iqEBZy618"
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
