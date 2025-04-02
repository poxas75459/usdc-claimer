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
    "5222eRcZTBqujmqK9pNrwMVvrzR2515dBhiUEm7M7wpfW7CihazgJNNJtC1m8HXFQiytKoqrF56FsxPNkECtVQ35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTyYimDs2hCbAn7RWu9qbJdU48wwwsVwhfM98nF1CcuXevc4K2bKKPXTFv9jkDh96urojCwCXafG7SoSgZPA4Vt",
  "key1": "4wkUTE6pcdV6XbJQEoYQxEja5U8rtuSRxNrBzhL2xZRDxdZiqS4N5sjWfuAF9Knbb52Lf17aifLKWemSrZ6WGVfs",
  "key2": "61NQuMvpjCoyuSNSLfpNcmqZ8B6PfF7i3yEcCxU7PQ77mPeTKjJZYDBFNpdb3NeVuLY38ZYNakwkSBYZ2F9LCirv",
  "key3": "2CTVutjMnqadNLL22YQ6ysVCYV9a2SgbMUkdyUHScwSKKmKhAX55eXypa7eZ7oeScax9SSNXjowcGgcqVxPs5WDj",
  "key4": "2ct23tyaNcSmycAgnGKu8XHUPqQ4H8iNAqinFkt5qr64jS5E86Ymhf8BSg3NdQjbkv5H7fbuq7cjdD94W42pTtiK",
  "key5": "3rFMtuLoSvFFjxVLypEBaRKcZbzsorYBHRLAX3KhvHqvcGs8sXtEwybgWA4j3QXJPYsvAoEfjRFoK7EJZQYwR8Kj",
  "key6": "xtaG1ZMVKHqqsnaV8w6xFaDmPzYJoo9hfzMsCAMgHTRRhod4FJXaDyi7Je2bYFhrr2oJPAiqFWXnptQb8TGpYWh",
  "key7": "5GL1DwL3YGPuoJUtsDgJ1nVgwknyutWWpzpnoyzyGX2RTqvTshE34TrTGJgPcWtYxbvVYNPRuLfqPGQDrJzMSNNJ",
  "key8": "2KET9fPQJcGQemXdxLDzkXKUfpHDe1xNiGdCFPRkmvTkyGEYiH6bHHSLTz2SNHAJLYiM5vcb9XpY1yPpS9dvpkTQ",
  "key9": "2CtM2VYWDQvuyzwkh7LKZDFj2CbU6RGtHxPmEPr5yanQTUdEYUFDaT4xL7wWgUaFh3FSogeoS52s26r79VWU6pLu",
  "key10": "XtyqovfEJXM6rrSVFj5LxGkY1uja7pzu97Bjg8EYjam8Gr6nAhF7TLnPEFjj9AcREqLFKNYsietRPMjia2k9MpF",
  "key11": "hrgkxPYMKN9WuZviJFiBvzeFAxWudH5xjEkEvYdGtPm1ibu3EKyZkDS3YzFPnEKrLQqjRX7o7LdkUmhK5MRHPQh",
  "key12": "3xQCrcJg8LoF8yNYVFM9ftdf1K5f16bbqBZDu5aaUdcyrdMo9JRF6LbY1M62G62P9m7CwL3yYdzMx9HkirGzztbu",
  "key13": "22aM8hGJLHoK6ZBMmuLoDrhhNo2eYMbujmwVgq4uf5Sc8NL4457dYKnZdoKVnTXaX7QCAApwWdtejzSydBSSidUu",
  "key14": "5HHGyXXbYApZBZT4DDqTRLkQvNkoAazV9X5o9f1Kr8xgDSzU9tZgPcenQb5thhNrSyBmzq6ZJHaXWjx3iLdnZneV",
  "key15": "5Cm9v6sKQRrFtZyMp3rdPm9oVyaN5tMArfexbngiXeYygsA8jdaViZuzCtvbT7RbcAVL6Hhic5hFtibj2LTrVz8N",
  "key16": "5NkmmJUxiktUYson71xERqUqYCyyr7ZwspvvhWcUP8VnUMXMNryJvnEMjckFu5mj6RNSaMJUsCM7gzhqet3HyrFh",
  "key17": "27KMbg7PLp1hpP8JnJ6R3YFNDE5AF9kHFPdqnJfhzQqDEXhZW4byEzx8jwtrNWU94GhKQ4c4CDrsvtdhfshhYwv5",
  "key18": "o6BBuBi9pzz64vDLKkYoMMpR8sGQibenrsnh741oXy4hXWM9cTZiCzjqaeRjHiJpcn75pE2kb3EPGRcEaiaCam1",
  "key19": "4hJUL2wyd6BP4kSnaPMFvCUEGEnxKgz5Ffa1ydokmcdko7SCKoRtxM9Tc4F8dmrftsvjQyWSdvEUgwLwbwqnUVVc",
  "key20": "4haW3r42TACAaiVz8upweyviojStEhFQS6D9zZK8EAeo48UEMvRSVV9Emm6cUH77mZTBN9ChHp3HfL4npe3w5aDi",
  "key21": "5B9vjtc7erwfkbrz4TKTeMKRHzau4RPQFZR5f3fCyXsnE6Tmegm42S7Rrhaj3ZGFLphU4dHUyhsjQbBrwuMEpyEu",
  "key22": "4UAbwmYsMuganaSorj3p32Urv9rxqn4UAeiJLYVYk7gQqFpooRRpbKyYDbPHb2itMkgvSUMjdHAibDNCFf7DJdCD",
  "key23": "y3BGvTTwsz2wn6sosN5mx9PzTpNcT361DSoWGbiiVoQdhewXMcs4yMPn7pF5YN3tziZfhjjvYqhbjrDWYewyDm8",
  "key24": "29YaeL6BWZCQCYeevGV4Yur11AEc4er3L9xcGwPNwQBtmGtgAxWBqmNvFvd27Q9XoRMrF7J91cY9hHMa4ePWcaBC",
  "key25": "39TMpX9hJRxh9PqyPEvppxbZreaaaD7NkYWEQThCEAyk9wQWbsAFXaBncq2EGY2azqQR136fyHw2nnj388GVoPsM",
  "key26": "3oWhuE51i9Sg1WAtQFRufU3TaeExLrDAaJbi1Kp2WvmEayA3YDAk8giJztm2r8idmrdr2PATu7Mhy9GXpVvQa69R",
  "key27": "4zNm7yrHACQLyecpm7G8jxU6vr3227nMJdtfjCWQf17kZdvyscvg2txRGXJYg4ouvv2ifFbXyLSpPB5wC9pcV3kx",
  "key28": "4RwA1SCQ7Xj3DogPWjaJVD3N5WEEN8UiYhiKizq6wGU1rnSEGDMQgRDziGiYsjDnkh4iUbSbM8TSSyiQ73SkRvX6",
  "key29": "4ETqWkhVVJsgiFHtrD3rt1qbt6phcvaTXcxgRk5bUkJGsMxGKFSYSzsdEL7p2czbi1mzyhj6vonf1PYwFBpKKkGu",
  "key30": "5SXzkcV7Ye7tmVXUSbc1Ki4BqxvFeGEhjcz5cQDXdHN6qyzZzBTwRSYA7ff19bPB7HM4sgDYykLQPce9MLdBYZqG",
  "key31": "4gUypYbJJ4G8MhoWv6jzQJurtk6AT6jtVz3XZP3TyXfjHJansPTyUEK7YHD5JUYvEknR1LhwnW3z6buDTbEKDat4",
  "key32": "23KDqFtPrEwio6tuvaHk1dAhpRCD29F3x1XHJwhjGd4ZX3f5uh2SVKhTeAV1wahkJn6fsWkXNeMj4EYxaoNgkPv8",
  "key33": "9YaiZfiVXkjDhMR8WTqt5K1RDx8462VphDn7anpfk5dG2sTTpHjPonBkAaTJoqz5FKpauazs4MeoLdJDSDqtU3E",
  "key34": "JUgPUBwpMYybFU1FvmB9kwugLzxZDqTWQ494oHsW7bwpdAaFodwXHgVpeXf4C9xFFTmurGzhJ71quTAn5u2E6Jv",
  "key35": "fD55hb8pQmAyhdwUERDPHRFyuUKZ9sVqdxic8ZgEoZomL5317uBQVZW7HDV8pXtPxt4iJ5Up3xUSisE3dVCyPS1",
  "key36": "3xeWC155h4bVJvEKzJHNyqnzrMLBK6kzkbo9DXeZaSj5V9QQBvC8v3v16PZ839hkKGjhKXEuFWPbnzXASAMzff9A",
  "key37": "4YfJFrbYQxXi6Vzq4Ahn5oouZgvnoTRMv1sVkfvyeyNBkL5jqdGMnBu2vxxz2a1ukr6tAtSxQAoywTAKfr66KcrK",
  "key38": "2TeB3zDUvTzdmHeq8p6ByTbzKsgSMnLWfAPwC7WVq5VJkFNSvxgipu5M9eeVzcfSvrdWKr3q7DeM7XRcPmKXzfgo",
  "key39": "5JCQ2mqn8JK1g4aay1nGiVuDStMTV1mARMLDgbPMLnqsA3AkpbUVsmkkgKRGPsvmoR6wXxxrka349R5gJo8k7c8m",
  "key40": "dBcVMV8p5Qy6SpnnFJhzFyZho8G6rz1dcJKHCppn3y2cBZXuVoniB5Kc3AyRPnYzWFue3yvEGiRCLJPRAEfRdAk",
  "key41": "aoD63xVgkbAxBBAWkiDrfwmWxnsyKHCMDSXQAhjXSERoWsRZTqw2obbcfJ9actcu6qBWoUpdfUMNGuqDd9SNYXM",
  "key42": "4skA2GZ2Wc8ENXgUgSJqL5SGyU8Wzwmj4k7BdhksFgLHyjcrhm5DoLErkYTmTyLBNQVmBmxzn7EjoESGiEZkFMcG",
  "key43": "66mCnrus75d3mke6JJEjm1V2smMF1k7ry6wP5paHgRY63MXcGTbShVPRBAK8EzZvmLMVY7Ds2SoufFcEsBfdXuQo",
  "key44": "4GK9PmPH9TYrTVd8jvFvUwtKLq8Qm7uzPpF9zDH9p1dQa1pMojyC2bV7mQGFzDspBwrCMTgMSLUJ7FthYj2ugYxY",
  "key45": "5Pm9eF1aDRrErdCXDcnHJ1KDzugWaAoPW15EwyB9XMTPDyTLJtV2SMiERpWmuFxqv6hn4ENM8xyKUmJYmKwUzib2",
  "key46": "5dA1KStXJunMFg5ucaT9PQtnNZczmNXKm4GW5T4nUe9Lqgk5KSx8E3p9tYENGFCM2vQZAiaFnE4kmLAEUBQZhuWa",
  "key47": "aPtFp3Bu7X1fTW4c3s37Lmg6CMxswQ9ss3hmKY5JsKKUkrALYSVgs91GwZeW4ZyWZjdftH9sSn2d4viH9K5czRj",
  "key48": "4ks7xWS6iwmFeuFMAN5WFhsECmh3huHrRJLhBBEXE38Q1AKi6haXXRMjzggyj1U5GeVkjWR4GAzxC2oWVjjJeAUy",
  "key49": "4isUEV4bPi8FX4hMKcTr5cnh9TtowPsZHjvrMSiVjXvu1pnrjsYAstj5KF8f7ZhQ65UAfXsnqQG6ZzNyTt1htD82"
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
