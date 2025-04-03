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
    "3KwiWs1aiUWURneoGeSzEZ2xpoANSQ85SgGiUexkuy9x6MVqjbcdgy1ao69AE6j9MqvZad9CJpicY51VZ1xidCUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFp4GYwM4XoSx46pwLMGHYEiwUU8KDcjFMMYukqQ6s1NyqS8xG7g7jedme2PuRvAFNrC9bUf5La37MqSCcWV1Dq",
  "key1": "2XVMG5nYAz6qxkbb3xS5aBaWWzDwYJThsx9Vhm35ZLPHVfiZrxwYfFRcEMZTS1qz1t9kB432PZqoW8budmGop67C",
  "key2": "3XNVdn4MQwkcH7HLxwhcfLha4RJp9dxxFyXBh1bntKhNNYW79AxoZ7vg8CJG7icJzMDX1yS9KJo2sRFwvXm84BGD",
  "key3": "2zq49tzTuCjypCZhZ6AAQvwZGhpzvjv4bLeTEFWZQbRoXqsfWgUvqu26Nuo3qCPoW4NjVbrCsggfpALqGwCUQvx4",
  "key4": "3Po3eHMLnSutWP9m5TtaGniL2RqrWp1mcSvhd9me9aYSDepZqgdrjmDifb79bLBD1zZxsqfCoKsM16dDqEqsfWU8",
  "key5": "3rw9LinBeeh1Mca3gAebjfLZqboVw2Ya4Z4uU98MhZtD5HQJkRY2MMEqitzdBAz34Ruz2CTaoVS2q9rpxxVheycH",
  "key6": "3w5hqTuU4Pf7N9S2sHU2Wn6rQvYbvDWC9iHL8q1PpaMAmxARDkYXUCFBK1LpXLn6ymbhtzj4GSNUEG683eN9QB97",
  "key7": "3Jvzh4QvtWzxUg94Ea8yy3a4yAm3MT1mpLfNFgR9Fh4MNhsYZe8touVwHi2UnHrS4TPg83TFGzmNoiNsisJNywX6",
  "key8": "5egAxrSiM8HEH4Gr39AHN1LMfomgxYzs7g2cocMCXhMRYaJnbZzYKTPopy2LAuEEKpEztxBuRHRKJLxapu1Gycx7",
  "key9": "271FRbsb8Eoz8eoYnmt44bUb2Ci1uBX5MqfxZvqDczKtqurhh6AhBk68WTJGUzhgUvohKGJ1JkAAMGsG8pAsCUpo",
  "key10": "3MugcwBmFkTf7VUBLQWaiuYMJ32q2EpxUJcgTGKYpbHTTRMH6jLw8UyYWne3BBZ9MEWXA8Ct9eCNpDQ7CbfYSED9",
  "key11": "jGqhh9WbxG4NS4GdX5s7xxtigfNEDK6SUuJCDRxD3o3wn9G7UYF92HGLASezYoKJn9UC4HuvBxmmpMWqcezARRP",
  "key12": "4uWaJnsPZpFtVtaw3ocKFvqgGXbw3UGZE1LKDNAYRFoC6dUpVWenw2qzPMU4PQvX1YQeygVbvTudya647AxDxxE2",
  "key13": "4Qs1PpPE2vLahuLiwxcU1VmZppB5WzepUPHKPNFB12xN5FwX3FvnCjbnmj6kbBc6VsuANRTtnscZihh7paewPjrr",
  "key14": "4PhMp9fKkMEp5KdAtAT4hMTv29jemrcbxE6FA9XzGfrA9QWe861wTseKYjgsUf8Cm2z4Zhu77XVfP3Qu1WJSdjsn",
  "key15": "2kqy3r5ZYno1F3eYWs44pj7jDmnNuXTctePh71SvLb5ZKQ1tSRjvm4SiHdA5B9VGmTPZ7uFK3s69Uc8GAZm5E4pA",
  "key16": "34LBZ5bbpR6jnhDzWPUqqhVf8qLsPbfrzbddW1jdPDFzkB6y8YyV3S3GKUsbTiu3kY1UftxWD1pNmSW3Rm9dBfP5",
  "key17": "5m54xrJRP8HoBpF56SZVGDbwtgSie3h3JMNWx3YQc9iCnwJsvWk1XWECFowQUi14UZXPhRHF28ivB9xYNzcBGHn9",
  "key18": "2zpu7knCq3e4hmN74883V7iibVFDErn93au7ZxkFoEJUaTGYUwwVupvjYuEChoZmJppMEigMtqR5HL9n6xhg5hTg",
  "key19": "3Eo4Ncctq6PTahdQtqWuVpaYjhjczMPZDXUGMjExuUYGAjgNZqBKcMv2xrekQwcDbaF8WtMtHmXySCDobHt9XmgT",
  "key20": "3dLD8WftDnQ9As1EUNTL6NKzED3pPhRb4xXMAFKZgH6yuneedzQiSHFbQ6uc6DsSvKgVCudWVovvzRDaZP4dCgGk",
  "key21": "5JPZdemChyfh2NzjQAij5u7gjbfca5omnRWiHvSTGWRdZW2a8nk25CaecLSmhnr4SWoaJtqK9TUEJJLfqff2kn9N",
  "key22": "2HCF7Lb9Eh2V2LLt8bUoaDYXSwYqhfb3NbqQUBVmuJVqB5cGECPSoxYDZpr19Nq9wTZHxmizGs1bPSLz7aL26CwP",
  "key23": "5jzHC349qN6Jz1TmnY3AGojSeydpiDaZrPuVhTHkkZ272gVR8CgdKb6o4aBitQSRXms35VzBpj5W2jiocwFGo2Ai",
  "key24": "4BqRomZmb8CU9uK7QiavHwosTbAWxKysif1PnwpSFQ9P6nPebeXe3vPro2HSwU1FPn9RZ1aSFSXKZ9ExGZa7TP3x",
  "key25": "5bvTjt5BhuDkzX7EZxGk7BGwBXa5UzMFuSzeZ6e4izVkGBV4MQ9Q7sXTPMDVKcm5yfX5khArKgp5opuDP4nyXCXE",
  "key26": "3Sj2borK3sB7xksPLRssJKs8zbUKLUcC9P3MT2sW21D7K7QCYRyAD589V3rHJHwcY5BikS7FN1X6Lvkyiw6gpfzR",
  "key27": "5o49rG3f6PZYvG1fhrXWFjcmsFXsKekHuy3yjWnR5AEG4QBAWNYUgSxk2W3FyMiejHpVc1z6hTJgQszd54yzq6Yo",
  "key28": "5jSCP1G8ryoXgjGSQa9o3Fiqq5os8NBHKyJJRsVF8s7wkcrwF42qnfJg9hcygcfiitjsg3GWYnefcxoBF9cXt87j",
  "key29": "5m1r5W6wffnKMwSxh4chuBFcaApoF7uassCwpoamsstBMuCDgCshF5kM1cgh4noXPHsfxmvMAYhjVvz2p7XsYYpJ",
  "key30": "5iwyoexXk6aJuqh3yxKyDmX3gEB6EsdJhoYEB5sHKnYukh4heAKjZDdWK3NCdhHLyBnwB1QQUWCeChLFk4Gso5QM",
  "key31": "65x5by6SL7EYjLo4N19waUA7CcpdzAVEBt143GyM4yLTY2G9g5CDsy3A6AQeRnExh3KJiamMLNTSZvYEqRRwyU6w",
  "key32": "2UFkWsDP82P4N1UmyjmDQYc7ExY5gxsMNAY9RkNHvFau9oyvTWqbdherCdc8cboLibrf38pATbCKpm7kCWuGAhyF",
  "key33": "2TgBnM862i6sUoxL9LGhUS4WL4iFC9KjHSrbznQHGq6fLZUqgafhngX6ejZPd8xFGcaPsaiXiekzP2MfvbJTGPd6",
  "key34": "5A48fPeD6debPNMFUb5q1UusmTsUrMr1keFTk4nrFyQCG6ZSQn9Ai9UHaK9GdoMybJFjnhVWw1tFuCDRrAHcQd95",
  "key35": "25H96RYCHqi59THjxNvARk5VYnuqLMysUj6HZ3oD2zkyVVwxVEJQVkUvVLczycByMfo2tzK1VqSZgtuadRYfsm5U",
  "key36": "4H1GhwM31wRGQsEGWG88V1YnP7zW7a64v155EfBYMyrdF7SNt7kGJupDCs4B591RDvaK7FsSSWPy2gJYmihzKD9G",
  "key37": "578oNePB2t8cEU74whqiun4rt5EsXYr5CE6Jj8HnUEMaoVswpGUJXRSU9Rwfk7v1yLP84ybbmvwbZYFcHBZM65A3",
  "key38": "aHd468yhhZv34wz1FXkTM2VLXkYpe1Ft37uNTVzbVqbjts8P1bZLqAYERx41mwfpJpFRfE2Rovy53hahRqQxDip",
  "key39": "3BGYbmQSBeJW32V2ifepAv4cJTZUEYZRBsDyKZX8QAbBjLaS9amRhPeT143GYM4hRNf41wSqWVFcRKH4eLBTqRkX",
  "key40": "36gSNS6kcV3Y9Ck7B2gKbjLFVvEy1bhTxQhsFtnz7piFxwmCbmXKPPV68cDCSxAzT4DEffuzyEYYHydnpG9DUWEf",
  "key41": "4j61NTCie1JZ943HmfsU8q4DmDJCBcMiortbTi2ghjgB4JsNXqFoKr4SQgK3gDccKtzdBEh7TgNDJMa5d6qM2vtn",
  "key42": "3UgEmpPui15JM8P4eAgYCsHALBnsNcAryXi85MfcKNQtRfJfpjWR22gw61qF9GYKoN8BAvdQzqWWCaFF7YHuSHWV",
  "key43": "V6YckraHjui8YnUQdfR8LqNUMkw8a3BBoZ553yB48zxAn3S968vMvJvp64hwHRASViNraGiYgrx2nToKnEykeYw",
  "key44": "3fjS9kTsWb73BQKVZWC8R4ywua8qispV1vaMbFrmYrPweUY8UKEcyoe9hfrprd1uoN3K76WB83i29YDG46iCXAoW",
  "key45": "5nZn2691k3v2XPQhZ6LsJ56jjV7JskyGe9yjovsJS7bnbGgxvUW8cUw8uY3d9rhc3pJMHo6N2Zkuafvr2ULM3vxz",
  "key46": "3BreLSNjNLNitdDUuQRpvkCr2fhvA3xyVdfVpPkUEM7E3JCtRcTTJA5dVf9yeTnUR3QmpHXdfCnsKrWsf9xz2Fie"
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
