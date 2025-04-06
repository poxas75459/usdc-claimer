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
    "5hQWtgthB1EMkGdBG8uwG2XNMsjfChoQte4a9ZhXtKPVRnAujoddNNPod4iuoerp5Gdq7fRYRCB38MwEXgPXqNS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV2Hrobt3BpenQATACFVwmEYJv5joqCjYEgqxQkMZoyk3hrQMqUBXYKSx5b1KdwuuoJdpEkMp63s7wmpe4VLmXv",
  "key1": "5BwaUjJ4ta3TG6zcr8eEMSFJBP6bRrsDyqzz2hg84QqJLqMsWGBF4uTSR5MMVPUfRgxgThFk3pikmsCU4AWTPNVH",
  "key2": "DVYr5dct28NdsjKEML3kA8tEMh36fEdkQmQox45Mokfcv9vECdS7EMA1hTjPJP5oh8CkEuVKsAKVkNTPcSDTifa",
  "key3": "338qCmhRwaDqwaNnBmRuZqzx1nhC6xz58MmUGPvz9THeZ3BWa4G6A4Vptf4pQa1FydFUDWAy4oieuTWdrGk8GENu",
  "key4": "4tXy1UqF7HGHTs11YQtMEBBhM8X8DKM3DKFcd2iXwvQqvfBGkMX3V6zTGcRQfYPL3NBguLesccZKdKUq2d4DvQz",
  "key5": "66csoBwTZwaXp4ZHaQ9zYN5WPVZNXuSXd3orzF1vC3f3eLgREGLkcVURf5J4ts9NhGkUwVAbs6AKT5hotzkKHp4S",
  "key6": "2T3MEDkUJMNUx7gTsDuWMxgcCAQotxdviyH5MTANxpVz915WFARvCApvbFYEysPWxjyQv6PRGGNpzhmXGKQz79GU",
  "key7": "3Qda4ovvJFCWdbTsfcc4yap3BFK4UqcZcpDg8iyeNSdphdR5QMzVPAPi7e55dor8BftSHGGo7sNQcDBB5Ek1gimm",
  "key8": "5sBYM9EkRtHEXXvhwWxqnjDeGime3puQFXVaCuqg71coB3fAepNays3SVN8t4na3Cea6UHyZMHAj1TVPG134hRQj",
  "key9": "3RciTLTukwxYnscWzkTPxNB9eL3gcEobpKhnJNaZfegMLiFfHxNavRjJkH37Za8VGRicTSmBd3wXLpdeQuu7MreX",
  "key10": "5XrPpW8G3dptZ8bJr1PbbHGrcEZmn9DPEX9rvuNEGCC5wT3EVoSVdDqVqewgm7DU5gChmn4yuXCksXfoh2NrcRkV",
  "key11": "4qWxBchGsMrCYkc489ipnYW2PdXDRFRTyLfAfsp5fcVe8eWKM5H15YzR8sZqmTuoeYXbwtmPr4QBanHGcAKq5fjv",
  "key12": "QpFNZ7hbpL5hFznDBwpv7JQAoCu1F1yLXk4ARiGSsEHMSGpCjhsuggDst2YSYASFz1cVYpg6Ga7jx9yLyVrEnmi",
  "key13": "4DgF3fCZUCoak4TFxX9nFetnq9PYXs2pf627BM2cR96TYZewCkEyg8cNR95gaMqtDxJ8zXsHqa21fkoVuzkir2jt",
  "key14": "sq1x6cSFdo4VDtkGbEAhPo3GviicENrDTiRnNGrctUMRVf73hvaN3EyTwDNzXL11wZFe3QEUGP2M4vbTo8eJqa7",
  "key15": "QXyy62RHao8QfCeyNVrXYJGH51yCXpaWtJ611j91W3xx2go8JB2KZhmtGSB2tLUmp6G3dvVqbbSeKCaSNBC8m5a",
  "key16": "3EHRqc5EJ6z4kHNf5ua5kfQ95iMeZkZrq4zQ4xTqc3zCk2h7UdcgX6qh9v9b3a6mMnMWxr3pxKmZZx4Jp7AHrc3q",
  "key17": "5mGzAzSzSLqLW3KvtyTfBVReCa4bEg1FsN18v91sVQvbtn1VXK3T5HhsoxHsEkAxQGAJC9xj5Px1skKCQcypiwNo",
  "key18": "5pRJhM2KqPEhxgg2UdrwwFZGPrnVVGwGJL8siwXg42bJnbEoZ51Kyq8qxiMoaGC4QdEzjuExB74J2CooThFZDEHa",
  "key19": "26UysfTavADJbzmyLHjvF64WboEmLMNv1wEPBcd5Y8wWLBTzTuY6QGgijD2cdDkeWapWyjaRZggBvqg5XvQanCkp",
  "key20": "3LC39aHLPMnLUfMPjDdBWeoYNAtWu73EGYNZQQ6w4xR6XTGES14JwSCttLiJ5WjgoFUALdRpsPFqS338RUNojfQS",
  "key21": "4xdZXaw6FezR7dbBQ5jnCHCcUgAvxYffDxsTdXitzBcx7Vd1t6M2yp5NTvEq2yAmbYLnuxpQBV5DJrmWRLcX4k8C",
  "key22": "38cuWKHC9o8kE1sd2KTkECnhLnMDpVsaqQxg4jCuYFqYRutwhxUvdmDmz2bbKahnogcoZyD4NmHMf8CLHiHGyjF8",
  "key23": "4s5u57X4ifKN7W5GAZVmCQuheLGdWcCRgMp75SeXyVWE8pHnfrvvKNaTp9cncZodjEkAo7nm1RTUnujn8S1NbcgZ",
  "key24": "4TivubzmXQjx4r2UxaUQBMCmkgsSYwwYc5Uqm9aFBgPkKxULdL1547Q48CasuvMy3hRz9Gn3Njykb9eabdHnFriW",
  "key25": "ugW2cKKmZ9fsEp2dEK3pDwvLZ6woivDpD3UzP4XorJ5XJZ4LXxVpgrqBcF4NDNkHb2BL6L5BetFMbibXDqVrCpp",
  "key26": "5Tt9arNsoYxqpEDZbbVT67kw9GU2u2RWEPRqXTTZC2AQGiZeqs6L9fkwrDHuX89Dg7GspG4V92tx3nRfo41nx8J7",
  "key27": "2PVnqo1QeiznWoHMD3SqS5TMP16g2KYejxXfU6dxmFUd6347bEAvQepNtTEjg2SzTnR1cYo1SVJQM9e9JbYcZRAq",
  "key28": "55jpCN9MRULSYgJwdXLK9Ks5YApSfU5WhGcsAZi6fnbqSDiCbbyQGwWZAwJksCZemFupbMHz5k6oL2uNkLzgtBQY",
  "key29": "4XC6QNBtFNHnyf5QyhXW3j3tZmNRY5NZCaoBTsRoXDppT6BT94P7NDDQSagk8E1E2grWUBqTxDsRgsoCtrYf2uhv",
  "key30": "3278QprevW7LKumkiMqSmEro1goZWtrJneU3VZ2oRpcf4u91RuiZWhS2z1ZKj9UegPtN8a7dSGg5BEDzJPXK9V2p",
  "key31": "4vd8ABsTLVdaQ2f6sZj4e8Pa8BigyZgTt8TuDAAjpTkcXdMgttDyuanauYoMRL2UAsAjwB4LGTQtUkFnRAZp9eTG",
  "key32": "v7PbnVHQSuLCe3nXYB9prDyJpkYgnosT1n3uC79Hb4nUpvk7H8GXkx5GAjP5V12qcaJ2HdWAvDgeFTc4QJ3BP36",
  "key33": "5Ahw5NbFVfjTq3GpdfREaWyWzFMHF3YrGzU8yAa3EzAL6xP7u9oVUz9S5d8BrnK2GgttJAg9RHri8rnAVteem4nt",
  "key34": "663XczWmZYHiUBh73KCqDbBh4eGzU9YJ6dKj94MqT5EaT4aWF2daW9mGHvS4ueZwGoSEUxYR1UiAw5om12Gtfu8V",
  "key35": "3tEpqsQb9oX7ZgU66xNg4ejinh9pPJn5Z76Z68x7LmryqjUqTXtt31q72UQy7ZL797ntA2ZN3sqxGurcGjoF6TtC",
  "key36": "G5zs5SmPbWy4ZP4yNJx8u3BsToQiH2TtWdeNFbPiwRTnC4jab4tDDkrbVMg6DXF5UxHBDTtb3CkHHhr3UN6Se81",
  "key37": "3Hm9hJ5yDB1HCC3Ug5JtVqwrM1Rf9Kf8YYVytV5CkVhruXQ86P3Rf7Eq7DfHVyiCeoW5dS2Ap92D6EJFE4Lz82Tt",
  "key38": "suDfffMyE7tvy65LgRHofwfp88MQZiRPH1irJqDZGFCDtshaiYtrxpRPaVxD3P2rAzutdMfJ45LxdtYuwZEX26K",
  "key39": "3B7VQNoshtTi5Nqn4cVhKdYfvGjJN8xZsnPmemskfBeU92KYCEdjeT2Fh2WZ3mcavNiRUcH9vos5QFXzTXdeVvAj",
  "key40": "i7zvTzVSnpF39k1HjaAsfQ5EtcK57YGQjahw7hsCTU1WzUUPEZgiToMzQNuqyWFTNVKA14UKVSQDh3GSL5PhMKe",
  "key41": "5Kkvd8yQa2y4cvGipgAfh9oNLXHrUCMKs1XMd7Lnxc7y61iBzRjHu6L6BCyJJPb2rWgZBny2Jo328AGxTSCcXTgQ",
  "key42": "4zewg6FUjYe3AMfhFgSGUD1swWtUqi88w8nkfpSBLastXRU6dCo43zYLruS8ybnHgWWVA2rADCDfp3R9zhm9Vxu7",
  "key43": "2FYXsn8upX1zo7LGe5aG4xSz6EtrwabFMDaEzktPDyMiuy8tyRVyd4h8scdfLk5rErsJPcPhH7jUWmEJAQQpnmKB",
  "key44": "3Xphje8r5CBXqwoZQQqTDmxeKVSTH68xa9YwaQhDqsdbfWSvHLSouFw1da6hacdzGg2jsKRCHo8LGium42QQzZWH",
  "key45": "qXbvG3fXLsumvDoZAch6a2DE8Zc51LaZ4GhFGxZUeLyHJHzQNbMWnVErxZNt9MhaFqwGS92UikNDRd9Gbpfmri3",
  "key46": "5fQbEH616J4hpTTFg643BNUq8r9SE7Pq52ftbdWRU9LgmCjQdnDaFKcvriuNoEppGR31miXDWTe68nAzrj8BMR2d",
  "key47": "16C8E1LqVq6sQRGmuipQ1Fabr1pC61FV5xkSxdAX1cQ18Q3qLejLeN5DRCphKLUt9nN1HFd2a67crrHr3yZNsaR",
  "key48": "MzZQzLNkBPcads98yqdaSLgvNLMbLwgGajCizK5VPfqrfVixVfh6aKqdawSiBAv7884zVBRJcasXm2BVd5FLbj2",
  "key49": "eFMbr7nENd9AarPmu4se9NC8V8vk4FV53VCo2Z6e671KprZQrcpd96MSvYjM6zocuLtDsFoHtYzuC3mSNLAKCQY"
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
