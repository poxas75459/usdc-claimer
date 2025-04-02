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
    "3UQmRdSZHWPRc3kh3pxiqf9wYbdAcSfDp68A9q58UcYrvRU5iZmtf5uBAFxUriRS8E9tNZHuj4FSEWeyUVNACGQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDTsHx2foo2BCrCMA5KSt7vQULxDKWSzGSd8mJ7nuosXGmrGfX4pGFQkBbJgzgpqpBZMb8PD3tzaerujJP5Siv2",
  "key1": "5vULxZXhAGWmmY212NifMxZmTCfrVy3txTsyLq73eqtaHuxQ4ixSbE76m5WMrf8DDrG4yjv8TTxXnESQPDaFq49a",
  "key2": "2gavKvEhYoyCmiBWu8Dni5eHSSgZPc4yp86Sbyjt4zbRxgAxzxWECG3QfDg9dKMwHXGeXtN8DpKZ1DTqsf5W6ujv",
  "key3": "4B5RpavCmuAMkiNafRWseMAD4iAP8JQrAiB1nikx4u6KtAgDwkoJDCJFRA2LPmB9vUZ1SYhDBwCG4RZa6KUjYZaF",
  "key4": "3aTy7Jcygt1tFKVvfbgd8tUrqUxXMi7faGTZvB9WecAbfBs6FqsrVo9qpgnn6RiSztx3ZSRv7Uda76jR75VutMy2",
  "key5": "5119Gak5h78VHHuFqgbcRMMWKoQmFeMRyiTnakbPnkQCG1jPynHuhU965fyfEae1KJp7MUC9oiSRfKLnskaPXo6L",
  "key6": "iutGGjLBp7QG56B8gtGAn9eFf81ciXhEuUVH5ZtR9EPE4UYuCgvxCqxrLgA9szu76seMamHxc6pRdhWyeomwaaW",
  "key7": "2eufgueR5AXPrzR6huJZeoCgrLMCEWk5xKfwEkyjmUUk4bs7uczxQELbx1TJJ6MtT7SibFFigbp43CzaviPsTXjX",
  "key8": "5JHVHnY8wHzpxFSjHy2YJ1bMvbtBeVH7by124r5zzXFwffwN46FLovDAEFwXFVFHvS21xsA4YETvdFNVCcyutjSB",
  "key9": "2ofo1ZstcVwzeqBuFaeDz44XwZvro2aa4gRZhciatdFM3Upd9GV6qEKu7XF9Nz6yWR21CDdzh5WNCF9V4RpZ4ztC",
  "key10": "23kJJhYj9G2qc7C1hgNunsjhdAzvgU6Y8wAj1XPPocFtrENvkVjmi1AgghdKev8UfKdgnc9eZM26zBeni9WHXst2",
  "key11": "34BTqN5ti4EDqQE1UHX11QRXjnYuevnBUhUYGYWyUumaE5fJoTbNJ2N9difcgmPDkjfE7ENQHGoWqmBYaf7rYADD",
  "key12": "5dS53ZGFkJsQXu7Qg9xUafxLRx5RjgQj4uKHy9fMTd2WWpif9yYm8Qk3z2BDEQ19Fmogjb2TYji3uBKomK2ZHmCK",
  "key13": "5rT8bTV8GYwmAUfjQd6itnkbRZkjbMDbu9878HiPR5yvwvLpkWhx6inTsArvyN93SDptMXXe1CyniDmaySp5NfK2",
  "key14": "BcD6VzUmjBbHSwkmM73uUgQH3ijurdLB4BZ4D8BxByDxsRBahXivpDKMb5Z6eCPhKN5iW8mjrMUMK9ZUkTfURgy",
  "key15": "4KfW38bH5QZ6orBF1RA81KHbiZ15VFF7aFFYSdCNfxhEdMFz24MQHc5bow1v6v3w2bCjWzvuLrWuqLNHnGdrzTRy",
  "key16": "58MLg59b37ktPswaRWJRYR7mxwx7rqczjEAH5BZGaVPHUCGdfxj6uju2fBfqhoPLjfKPnbsSTbjcvtHXVhkfMMio",
  "key17": "3rDf1gXQRSg1y99CN7Hs24xBjbfM8jem6cTJ9zab1AtXPE6VKK1PvDMAdtBmXVNukh7tvhbVEjZCtTRddDf6oihX",
  "key18": "3Zw6QTyHeHj3wcdCjLuuZmp26TbebE65ofAJtAfjmF3BxSJQiDDGu6945QyfSXT41hVFBPWCcB5zeA8Y1AoAcBqr",
  "key19": "2BJwTPw5vBh4DcTx8oNTwECwJAwHg7bo8nUuSs4m5Q5SgoEkTiEdMF6RK31jzQLVFNFNv5JkEDay4nQU1GaF43ut",
  "key20": "2oWzUQCtRNabgiGpf86PWZVR4iQD9kPD1rGRHMpAJ8bheNZ2UZXjnpXJtk2yGpgMSkwb4kHwaYYYcjiR5FNrTsBS",
  "key21": "3ZyaiRM3q1kqjgziQXwyVdztq7w7EeuGmC5oCHsvppWcoLYSKUapnVQ7qSXqQBmLK1G8zsxVZtFRrgdUNkWrYEri",
  "key22": "2WQpLsLVmEuKttLtPQpGpU2CphvdYEioQy6Kv5iTN8et5aCEPnMRawPb97sH3H7h4vb6jA6G5RPfcoLvTy55D8tG",
  "key23": "4B8eJ2yBSuVGr7ny59n69QiY7ZQU4iTev8m54cz6SWeUWStiYjmVG6guwroEb31pNHv7PwcFi4TRpHBauoZciE57",
  "key24": "5AjBgav1UtDbdwKDFr8WQj6LG53MLivUATmwThGdF2ZPJnRepaDuSBDLLPNDEjeLZz3SqaF19P3SWU6tfq341Yxe",
  "key25": "3KYhwYxomQ3V8KAun36FAYAUqrhzwpRnJH8M8GitVyg6dJVxo7r3jxysUx7AiG35xMLfirYASEoEPy61d7dMz1r9",
  "key26": "3fGQKBP8HMFyaB9CXQVE19BSWbeiMsoMqq2krsL12fsEpYJjwC57sxPcArWSNcqb3sBLCSd7A2YyJCRhg3Wgt9Bx",
  "key27": "3fJyaJzKe7ZF27hovmcWBS6kqWBdbGTYef97bj3M5viAyrcQ8V5mVqyziEFKhwTGmXM1rSup2ytXQK1iMBxNzJRk",
  "key28": "gcg2H187a3YpFdqUQYQEYm52W3mSLMKgMgUhkt57gsV8rjrhT3BGT4BEmLHrC299x4uTKZqeyVF1y9HKCuMqczF",
  "key29": "27n7z1LdoYXPR3JbCkJ542YZHdf6Ne3eb48Am5mhHdFiJv2T32Gv81SC8b5FrizBcPzjHPJRk9LH6N5p37Eq9s6Z",
  "key30": "hcSdqz5TqvCujmEBUnWXDpTFwS36EB5bN2yffsMoLXf55pBPinZvSXpWnKCPboinxb9Jrq2bmfi5TxpwaWsVo5M",
  "key31": "2xHKxB8sDpmcV46yZGKbyGdmDRkLWECc8BKLQgAL2VXGvXYs5rrZZw6scBJ5KE92WRsUYnHD6YvtXyPUZUaQVxcA",
  "key32": "4mybV7Qu5oEzW6rk7XdRScXZShdtYEwmnZA656xUb568DJTUogY858NYaUNGzFvK18Hb9AgcstTig4ciF2wu3yAC",
  "key33": "5tJEZrhn3psKMbjJHsPTzryhxnEs3pMBZ9eGrzNd86Ncky5KqK6L2CbuVpyJnzQbw4oCJBiomM63pSaX1hBaSp9s",
  "key34": "4sAyXs4Y7wVUMT73hatzS5f9VHKNJ9xK16cC4rc6YaHxnwud3xhgm7TXA2BsgpDuxj3P7r7VEdRNS7irAwitSoe1",
  "key35": "4FTw1WVRnTf27QKYxvFBqkmtXXeXwSNVXGcmikfwdW5jFPJGAa1LE22DZukEe6wwzqbVwYGiFfPm4vjiewZMsWxo",
  "key36": "xDSRfttXhFPUVhTvfA8YdKvQbNVAJtzuvn3ickesgAqkxwM1xW3Y5xUxQUMVn2LkCUS6F1QCaw5gCrQ1H8jPfnv",
  "key37": "3AjjAabSjyFvjvo17pBqw2M4M1WNBzxzMK8CUbtVwdV3mRQrPucTeZh5mtD8VmzTBwEGvZ6mbw61azJySTsa8mNX",
  "key38": "511xKgdZLXo5EqeZzQqHMATUgVe43SH7x3hwkW2bxrPdLVcUgQng93Qx1vFp8V6Yeh8BNEEddicgwnmSeLKFfr2L",
  "key39": "5m5T8KF8XD7PM3HfT2vf63rr8kcKRcMj9BVP2vd7oXFWDMkNsmhqFsEjBspbUjHmndewhUeFqqFgyoD2iCPASebS",
  "key40": "38cVuowhPgrQgb4FrURMmGm5kgCVtjdR9vYeRdUbanDb8SadWApXbMpVUg4PS2sQBzcdogVigWSHxNx6BvukjGaR",
  "key41": "5Q4XaqAxAuKbDwC8ebH7RwGKFfj5MRTwjD7cZziPZJLxYyvCiyXzXQ1cbDr1uwXxjbNwg3CkEh1kbZ8k98dJ5WmD",
  "key42": "3YYh2JaBJmxc7YqztTC2CfTDVFZGyCBrYc5pXVMCnSgEFfJ6KtLvQcWF4FivXyohcrArA43s4vjg1DNcGLDxwcaE"
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
