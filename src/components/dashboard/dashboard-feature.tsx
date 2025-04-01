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
    "475JebcEYTNe72FnApo3pcww916h5tEQCCA65reLBe962cxn3VQ62Hg4tbZmFs23uTTKzxeFxHXqmgKsjxvYnU7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqeAAwgypJ3k6bK9F7a15mWvNmyibvbxkvWCWgjGoLdBfcbenhQpVcs7aRTjjBuzz5tfTnHSuRw4Ef5SDMNyyni",
  "key1": "4f6AWzFsLYXgHuwetFWWo1q5tJzhRAs42sPD62MUA8Dsxap7bZ55fj6CSCBj2HZ3bcVrfaUw7WRXfj2NiHMBmg1m",
  "key2": "2Cd4kx2zNwfmd3F3JKQJuZHrsqWidWEwWq8g4PQPbm1JSbodUbdSm9Td5U9neH2e9bdjpF3UwdRT2KNLqbgDYM4",
  "key3": "45Lr8BXeEF9bg4wkqkgQNQ78mEEAs2KjHr45SuH4qapmCRVJizyTxzERw4i8cWLAhjmKWupUMtV1cPsoAryMcAcr",
  "key4": "5Psv7KCSdR99Re2ANgg3qSTrtBEHYzYtFy2sK4gLKmKUfiDvK76agDNXbpLsnyjA27bMZTtFQ1uAvt9crFvL9YNz",
  "key5": "xrPPWWaxoGUGFYwRhXY8kH1cKZ8VqQadssKy9zSVQEi233uaEsVZt3tyn2YFKnehZBaGkciKa4Pmi6pd8GBBnhx",
  "key6": "4VKWFvCULANHJgdYUyu1ucrFwaDj9nFbQTLUZJjYAg8u8KTRT4FSAPkoyDJdLx8fUYyeSzVsowqES6UcMWZ7a19",
  "key7": "59ZWHP9ZkTFQHQMVKULzJ81fbXT61H9HEvEBsmccJkY4T5JpHcGVxQ2KijXLwAJfGgZH9AWQWrcMqN7RamnVriTH",
  "key8": "2WgfWnTuHkyqPVyV7pRLR1nuxpa7jmRgWjnWWy1B3tUUxbjbeHbWbiywHmMu4aSFC1mdFDWQf5XFZAjsvmdXP39",
  "key9": "4oUnvQA3WBLzpWbP8JxxHeWmydg1Te69Nodu15cmhAPFNXGsCdvJXCKUaBjdeXQopDifJHvZDRqDMizj75ZUCxPM",
  "key10": "5YtcEhbTdBUGPX2ZDt6GMhJwKu7eHJ7B2ZFKCykMRvnP6VDY7gZqFKpGtL17cokKJqUV1YeH4Go1XXfwpFUXnt2i",
  "key11": "5aebM9NKXz4X25vbYbaJKJyYyL2gKSExCwBPxe3oDAoB6unaJhwKwS6wAeZXagP964YRCpzzRQL39QFLbkBMtR7B",
  "key12": "5PkSXY9VJmHJwm2up4YD4VNJHjBDGYzYe7FBQEFUWzTdDGczKP6FKm1Uf1C3LU6aMPtM8ErS53AHpHJdGan1YTYL",
  "key13": "ndGtXsCWhEDBr7U1XKH5HGCVc82kBskKM7hud4NEUk1dD21ye9bnvvBQe8dhfyFpcu8vCGRJQikxhWwJSubyHQW",
  "key14": "4UgxAx3v75YR6BuXbrMLBJVaJtq4NLZd5gpADwQZ1F7JBRWwtgZ54Edw8dkoNsHv7YJYemtLA8vnkq3Q7TrAY9sv",
  "key15": "2uGCjsoptUM3JLk6WmYFiJhtCkQQ2jFH78wW6UYSx1jLMaP93Wo656S432gqLpzjCWfv1CNS2eZo3Hf8cLDRN3vA",
  "key16": "2CF2P5j8b4TEyCuZ94UhTJ6KNAx8FsCWRv9mW6wvQkeKp6rMD7eZaNGadU883uJn3y1x1jxXnMeFXzGkvA2BzZUq",
  "key17": "2hbbq3dFmbntKUoX4mM5LvV8iFRoLHGRcdYbsm3RYbcBUSQbbM1d6bSp7cCpftSKgXcEvdhFZ7ZZz6LbtTCfGnfF",
  "key18": "4AYoHU3hZupdmFiJQSSnR2R5qhTgPxuXWZuL56czh4tJ9WENYDNATWfqMMuqAEr7xmYcTnLY1cwnaSQ9BqV41PoM",
  "key19": "4noGGDx84drXUs5wiDsMhxu9V689twHZuGRPBrK7eYmbV6XikLCmpZpqMD1xcnMrXHnTB4zX6whwrj1v8ENqQes8",
  "key20": "Mm7VSsVpHG7UZetBp1AsrekYWMuduNeqEYF7Yv4RdUnF58i7C1D6HP9bjgTJbT4y83kDeaoDn4i23yfcXZgzcxY",
  "key21": "5SrVvbRW8qFMK7qUx28TvnGXV5CQ1U8c9CSPctwVimCdRnuDb4GBM4XQaJzhA1HqxUfd6a49zwUk1kUaFaKAENwD",
  "key22": "4wL3PLZyNaMrezJwwFcL9P55bK6Y6QshDwHya5d69UVmMEhBAQagE4JH6Uc57HsApLCyqNnot9iKHAyUCkJdjzU3",
  "key23": "57hKdpq7RGQhopCx52N37PxJRApcu4LpZD119S2yavVYGLDUuQ18SNhyLqfqKrWLeHFGwtxZRDvbhtZoaET4BSkL",
  "key24": "5oL93x8gF13E4LrW4nJ8rzTc1by3TyoCdznuAHwve5HaxB7Mvd66qMKeyQ3rVPuswSz7kDEvDj3hcRdSzJJUBp5X",
  "key25": "4uqs5NBxofQM4EeT1J7wGYWFeLJanjFiLu1sP87AKKcsWTXXY7dZqC3ZQYBehQWrvUFZcCWftcpTyq3iGnUQdKFP",
  "key26": "2vN8atxN1dTynvJTWp1iRsQzvrCDZTXwS244AmC4WgG3T7gA5nM6arqGTSYuB5wWKmjmApVEb9aCXgtKo9vStMVk",
  "key27": "5yoRW1oEPmbvagFjqSpM5EUPXoB8bssTGMbkGN252bvJ1N4ycAGpLALGPN5Q5CmPGZeDM6k8tvWXhWtzx9ktgYnc",
  "key28": "5c4iqdHmySzfzUKqg61SWuZ7TCDy5LfcAnhPnqtZHegiHGmkB7L1CLsnSGx6VGH2dNznKZ5PsgLZoezpQvPntDFB",
  "key29": "5HJBugSbrowQfagCemw4dAPowY5qTfcHEeLZvP2brg44thPyfE3h5jhiFZfq6usykNRFBbLmNnLhJXjhRAkxZBVf",
  "key30": "5kG7w7HL29gGmsgMRV3WzKUttgANYED2yp79hWTALy5ZsH1ceJCAAS3fPi2BTKWAasEXDn4B3u6vxyx8N5Qc3aQw",
  "key31": "59sY9FvX6TxVBnjRG1R92zmTt4rEcnMZhuHx9Wn5urSLV9PCmrDW9MztqYWb5txcVb7fAbaCa5oebK5VwkiZga9G",
  "key32": "4NYNrscDzFuCM8fxQeyfCgzc8M8JUv7CoUVn6dCiemGZ4yDibfwDfPeH7abK4aXCHVaBXerodUYc7LLQVu5S8Cg7",
  "key33": "2tMkdNN2iKswAbj91Nc2khxAYuCzCRthUFx79h74mKvrVAAyvHwSiRVUHUb33QWgQxMg2i8ubUSemp8Cez5Qx3MZ",
  "key34": "2oqBZhdxobMrLd1FiyZeXP2iC7ES9hz1KYLXdzj7xNxb95uJ3KxuykjZwpPcRtH5Wz2pQ1badjYmSGMH1F42wPao",
  "key35": "fXPquXgP1UDRcdsHzJb6zPtnUEFyd4M4CM8JzS1gi4voWieuwqz8rCgem68r4cGh6iPPCc6R3Yxqepqb4tT1M3f",
  "key36": "3mEbrzCBSZcQrCbVFXnEU4zu5qGGd9VkzpGzwV26mXctFMFwEJVQwNcbdKzqDoLqvxH5RbaxmqAEjVmq5ogKgGZT",
  "key37": "2jtLNEvTwViwssPWTfoVYHDj1wkQRNWYxf7nFikiAeBGodQZfrap4qKUTtWbPzETZpHDCexWUuTVg2FZqub5iC5x",
  "key38": "4w2CdVRRkAY8V21VTTKYAirjUuXybjpYWUrUkWc1qiWGFAnu8TQtUjVwCkUJQAbpXMk89wNd6ugJBZRxGfxxn24S",
  "key39": "1dznMSt7GWdefqTK58vrdg4tqeg8vZYyWMx6tV2DGpqSvhRaHrQvxtoytBMY8RNCZ1ELtjg4bfDXiVa87JG5Wxo",
  "key40": "2wPgjYWb8GYNgivt5dGFFbZ8qHujSUruqmPXXEL7RnXSSv3Q5btP2tgFbxF9sbQtWaA4L8ULJ1oz4YAa1AaWto3E",
  "key41": "4TEN2vBGuhkELPSPuzyhxbSi6U9PhUYsPwAYxCP278oX1rWACmdeZUuRKffhzJEA1JZyK2tucp1Qjw36DAbhQGGu",
  "key42": "2Ten7cjCiVsxZ8exxJgxS1RwRnnHfJKmuat6vcmPPVFZR4hsv4Kq5XBsuEeMmdpU2pk9PcSihRXXPc5AwvVFTuHA",
  "key43": "3YFXUKxPsXDHdKDFzk3ooJGqYkXxZeKhmB6wCjZDYnhrm9XVhmH6VaHjtNPjBCxCxiNMz52iHMW3BX2EDPBowzcE",
  "key44": "3VkRz6ZxWkMhAbHv4qhJ35h53BwAARFkBWhRp2SJVshihmBXk1Rj5Eq1bkZfST7QxgggMP8bsKZBsMEZVFdqGrCA",
  "key45": "4ytf9MBpy6QTEpt451rCjGHrfv5Y5fVJ4Gz9E8UeeAfEmCa25ctwoUbRmPQz724uJdt7K4WfaLj8AGEJTBHN7rk",
  "key46": "3T2jXcqAvk9GorRNKQ5HR5mFNwhj36kx2Xvo8sRLcjmHThieHYH9Rr3MUah2u3tp4cWXsvaQhBkvup8TZwLhxE8",
  "key47": "3TuHSgmZGCvRajVnQyPPBt523rXGNCqBPbDUTt4HKUAZmC31ehZANdpX9Y5pctgXaoEUrUUzxNP7KeQKXEA4Auhv",
  "key48": "3XduQZRfaoKMipZvFCDQ21rA5cYRMhW1N1juju9ZU91dq7CwiacVTp7cbhMDJ1t7Cbkni5prfnowHZVZiYaA6pW7",
  "key49": "2mLb3wURRN18VPojP8K3WbeCqQesmHU4fxTdEGHZdQu4tRqmjm17XeM1ZLkYh5W8uciYXSmrHyHQ8HzTvh1chBfq"
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
