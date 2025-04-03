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
    "5zip1L4ZFABsux4UB2ZRhFde8BAUvN8ukgPw5wyj8eDxx9a7vrTcaScVnrpY6hDV5LGRgbZAeDmkGGwRk5KA9djo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LZnYBuwan8Bw145a7RAGBGuHKrjaUNHVxrekiEVrF8WXdC8qgkeF8z2aNAc4YTeZSnQHFt8Kk14hUyNCiRmAHj",
  "key1": "zm9JcZHrwJjxEFVHPLgZ8cT6kBU2FJUsNdp2vmak7gy1qnQN9BrwMv9cuMJMTVVjrDMx96feWKzs3KzvWTFT1hG",
  "key2": "5aeqCammTbZeiUsturmu3u19C9seWHQWbKdM9bs7cni1x8DEBPmCBmyfgVb9QhLAbcFF3NqbV2g5FbGgJUXBUQ9a",
  "key3": "4TZDVv4LFz3VBtZFfv19FQ7B16Le2YtmgobVYEPp3JtHumyS3mwJqvTtVEqW1bG1vjecL2VQpFErYabuG8skEysA",
  "key4": "46VvAwDZs4FytcihdkTtmqGAAC2HVCjGnKLtMkbrEPXA8EB7ZPUvyejSJ1EDDmPCuwhTf89VW7PmmCiTcEF3fvj5",
  "key5": "5sWV1upSRXQmen6BPRqPh8WGGfh4XjfvHj6vc1LxQkAsdmPDMUHHKEcVC33Va3MVkn7dT8CcEKC9oxJ4o4HPjXq4",
  "key6": "2MU5TxGBC3CD4DLSYZLNw63sJVJy9bL1WyHzUi8nVWnHqeAxSU1wfyLCVdTj9wwkXHEwpzSV3PWX4b2qUoRH2RLm",
  "key7": "43KPBUnUqyts9zG4oQmRSGbDNJjFLxNxDBudEkQ2qVrGdGtonrr1G4D7prGx2VqyfUtRBp1GJSEYrq5PwCrfF5fU",
  "key8": "tbUrPvDQu7DAuZyrZCpzgieyD5fMbjopootc3EJUGo68oreTozKn183TUPkBydtFDFapFeZmFiUfFiw31XYt8Cj",
  "key9": "2pT17X6dSC5sFi57u3WQ2SYXFabLjv1rmVAefh3ArYS17SHTkxGp4wgSCHdtySut9xASwLLbzqCn4KccD2V7CxeW",
  "key10": "4M8Xzm2HQce74awZJoBi6yostmRbUKxutafTy4Dhoy4cZBcYDqTUS4XyW47rNFYgYGWp6eyy43tPPFxw9pCXjngn",
  "key11": "2HiQ49qgvFULV8FgZFaWmpqhJ3s91o6kYFjD6srUJuvBUUxiJ65qjbUN8HQTCLyLvgqxVnczSP8iFJudMWvQJ1Ut",
  "key12": "5Edhkda8SySYLAMdq8mzDaau6u59rU1DN8U3S2MqhJPdPkD55VFCiquSN8ixafjsF6JeuALGkteMo7ybCiTZp93c",
  "key13": "2MXtBhNgTqP4eSM7LcqNFFpYaPBSrtJWYwEZptaKZ5qmgdBtBSeDhcVWtyUq3x3MnJKxN4Py3LrrJUWh4ts1xVYW",
  "key14": "4pDe2DKx6yxbDBDdBZcMpQFYDKaK5UzZTB9e1pbqRovXyKzNtRuJVWHheXquMQYdjVrSVcaJcbqkuAGPU2jwN5qT",
  "key15": "31Uv7Gt9Dp42cMwt22Y6Uty2DJjime2ARjVAF5j8H6XWriLg53MZy9ErPhZo1SA79zUCqUxNWoLXaPxoGy2CNN2v",
  "key16": "2pLF6AMZiVQ4H1crXqUtoLHBqB4RjsEJ6BqVQBEwrbdZvwHuxEbytkbDZRuaR3zRnxYEdcdHbdDtNtA2tNY75KVo",
  "key17": "5XruzTyuxodUZ5G9ZNNpWuVpenC4F5vxLTeeBbP7GLU5gT72Wrt7KRhcQgfVQ3kQCcASb3NNf7oiMBbwC4pSsNaq",
  "key18": "5jNa8En9vCp8GqbmwQg1NPEQh7PfHpU9ivuPFL7jyghzrYWoajayb8gr3MSRs7UtbBLTpWoToqaZTKABnBwJZ1CD",
  "key19": "4fwXmsVRdeTeFpFbqUzTtS8xLY35o3nb2LZXxhKM55dt7hbsSMDEWh4zNGx8dG6KcUZBeqHDqqK6sBQUonVaWvxj",
  "key20": "5FnsuymNnJfodFm1PoiCrttMYps3DULMo8p2Jwz1YpP9HNv5jWWYx9XzvViy27DBnMWTNM83v8QzuLGHJvCpib5C",
  "key21": "4F1vsBfTUsFaCxrsiohN5QA5xioyNwL98tYcYbKKLWANX5koSWbX8P1dgC2BNJNzEEvLyHSogfovsFs4smoVRTa9",
  "key22": "rAxikY6CyahGfZNzMLiJvyQh7Rohp4DCPiXftixgi9d5wY6KdGmRhwNf2PqXxhQgqe6zfLeqkmdL5WDWjvvapsx",
  "key23": "3L912y13FvUQVP76WvNdgQ3wugzTgtso9FUoc5Q4hybDuwydr6eDBdt7m25BpVRwnJ75H2r6TPZ893LYvDVWm88o",
  "key24": "4weYYvcyhqHrKRUoaEXsKUgxkBtJLaANEqnu9JaxvYrikSuGaQNrjnswjW9EMMDEz5RgpQEBwmMoZe214uhYfRTr",
  "key25": "3efgXn7RX3TxnCAZ6SVxR3xWTEkE8v3NHem4ugmUXDGg6dAVxuk4wAwSw2cqidUaUEz6ic6GbKzbcC2GyrZsXU35",
  "key26": "2kWLs39U3Me8Gc4LV3vZEA4LQKsbdV9Nu1issBfu2pbkTQBRtAZnPt8EJseXavu5ySRZjU7TsMBoJzNHUAMtCHfV",
  "key27": "3aiM2k35fovhAB9LCnwSX7sQkxBzQGd6prEHK1w2ebDwt1NUGxwrNW95LcsMMrYdoHbw8f7C5v4ReVp7GUqn1jJC",
  "key28": "369MdXWjTwRqH5dVTcwetzFx9vyAZLU5NMBq1rpuqeg8nAN5dF31W7uUoFBaeha4wxALX3g8arHe3DBiZKGbD4Dh",
  "key29": "44s3T78KGy8Gx83eDj6v4GoYUfPEy4KtLnRJRhKkwr3DXWjX7AxdQBaMuRr1FiAGU29426aZW9QFgzXKbiSU3omK",
  "key30": "uoCYnkm4Ah9j3EFDz4EiCDog6uWx1VFjigYdraw9yTMUAxwAr5HnJf6TeVsU5ijUYQZ3ANPvjo7hVsX1rSkPJxP",
  "key31": "48HNd9d3t67tt9pmfYpFPDScGvvqsvvW4v7J5CMNS4E55ME1Ykt7AwyH8NQrhGxuMYeSmFKbx5c52Y6NnWza22xp",
  "key32": "APxBsgMBbxNQfnhuyJXCab9mt4GTN3uDU1nZfiTjyQqEnNgRhwkVPgiMb55knwfbaRUgWEsqMvqAuc3VsXFiTvo",
  "key33": "2JESXSTTkdaMpKsSn5bJVeZXCS7D6w2wKMaxXpNN9PzgP2VuvVkDw1zz2Jq4VootkjcqguzGf9Wx52Sseiq2YukB",
  "key34": "33Fn3hEjY23iz9XmMpm7U2YRBonHKgcu9EozQWedauEKKKNtgGsqorbcqKekrdLPmHrryZ4MaDU9qrL2vfmckE2t",
  "key35": "5cPPnJG9RgNxbrmyXH8mkUeAJTXfUxKtzVPSeDMNdRazJhT1t5NGDxLFmHhNKsngwq8Xokr34btPXrfK2fbDpNEw",
  "key36": "2q5rENpDDiiUnY6RKcW3qgoVyLFT3wTLMxSmLeWDB5zMNDDCbtdzU8N4EUFxk7aDjYNp6KvFtg9KwgSG3KYSz61Z",
  "key37": "5SeeAFYo9BTXVJn7tJVtq3AS6Z1AfEo1rREXdaS8c9h3AAscSUXuUfQcH5kTDWZTZVvp9urY1YQ9ZE9QXvWjrr5U",
  "key38": "2GHrsBJrdHNRTHk4ic2DPj3ghqadF1Yp3stkVn8aF2QA7h9bmd6EwN57SduNWLr8RvFm9eJrrrzQtbu52Bz6oq4e",
  "key39": "3yudX9fY2Xp6MFPS2EWt9m7KYa3G5oKjd2eRUJBEEwVFYJhKimMi3EzLSib5UmDmfP49dUiWHJnzmLpQttBdfGTT",
  "key40": "5zZH6PxNAMrLco45LdHH8ZeyuWp1wb5nQ2MdrkL9RsQKjQMaKXJvDjnjnMJfV6GpXQDmGYuyWWk5RQ1oPc7idbpy"
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
