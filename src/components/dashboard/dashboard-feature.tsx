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
    "4ADdqyvNTwpfMYGvHjKedyoRQ5CPBoDRc7GsCQwCM77o4889fWfyM9djUt3wqtwbsDKmXPRAvUJxYNJDuPmWXcjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBcAFwLRX4gig2tcKYJcedhMR4qJzrhsM3gCxbF6NCjA2xjQDJCdgZBGr7fDj7xun6xmJ9aZGNVDvrWS7g2G3zj",
  "key1": "QRTbdwdukjMMDwsygyQ1X5kPFgKaNxqMkcwJ4kEqyoBAzuokH5jUpcy7LuvLX7tsozpguWBzSZTmvnQ8oL8j4fq",
  "key2": "TuV9BzXcMa2PXhCEUW1MWLuiioVQH3kaaeLKqzWNoUVrSUBKpYWm2ZiP8jQHRaCRrYJY87XfHPqUqpSui7pem6R",
  "key3": "4jbFYPiS9uwP3x8RHDanR65y7y8tU4RCxrNW4ssfkaMEBf6T7brvN6u4D6Pa5uyC3ZAktAAer9Wja6hZfDNUcjD8",
  "key4": "3NzYhpgF94SAvJhK4zmBX8wneFD2R8FxthzKFC53XRqfkWN3E4HbtoZHziFg4xv6nZ5jUXeUh1FicCajw1ETV7h4",
  "key5": "3vidb3Bw98yWHWenCAWWEroQ5ZNkecVKM3LeohGe1HBhct5K3EG7k6te6ieNz5qjYp8SjM85aWi7kewp2XpZyxuU",
  "key6": "4AshzK2EHhsgmGeAMBYGVCVB2WgTFRVc1irw8BQWUbPQFzutK5PDHFm1eBucgnFcqK4etgAk4aT4427ECXjimFXE",
  "key7": "3rBYfUTYQ8RbXZ3gecxvgGzx512JvD8ceugGhvna1BzSZvc83dDgqDrQvzVXNpSqJMDUYw9aUjATWynjHikDab92",
  "key8": "5hqiGUm5JUceGhhpsXnn3ouJHso3HTFF2Q7xo1uH7qFkqDfgqLxcsPVJPArxM4w28pYEE1v5B1NDjqvVTT4Ttr7H",
  "key9": "5YvtJbaJZRrqjbHivfhYhRji4z16UTjpbKfWsh6AHzrVGXPTc67z21yReXtJX6AUnwN6iFFJNwx4MuY2MCveBaS5",
  "key10": "4KcFNAEPbgx7DjFqHSS6RHd3wPTLK2CRwZo7Gt8LUExqnvw9TkvVPPPD8JZTRYzCpNUCiWPvguRZGWb8cYeL9fQq",
  "key11": "2uRY5GhdPoxpiRmtcNS1KfpUQJwqzeBGDcds5fp7G7Ee9c271PjzxhQiivM1kv8UsJh7a1X2Fp4hQaP1mqKtX4y5",
  "key12": "5u4TswU9RsHn5DAzP3NU7Q6KScMepFtR1beFiNJHnvEVggWFaBfBZKvpP7mvKVmXZdBVSNPjTmoKWZzqGfgrmwgK",
  "key13": "CFJEHoy2VArbYFNynB7QSyw75RqbPhcikTSVEXPid5R6MecbX7yJVV6LLFPiqXo9KuXEDeMbqTwTMLZDECkzhu6",
  "key14": "XpNkUNuFQ3biucgPTcbzZ7hbVYXGcD8NWyXhFhViHAkbzDR7ZxqjBqseqBLhgHNzeLEJfzKa2jMwjJdQAxuGRwi",
  "key15": "zfJzcLKiuCMW1jxEQxYEo31j8eDMo3XLC8CkVjph3ZC66VTN99AbwuUZ6uc1g8J59YqNGJbK4UJyEK1h8JGaccq",
  "key16": "5gCHheVq5VnUut8uLx8THdU6qvp2uF8qcE8ZrmCSTBi24JihJ4TJbL1RDicgGGpJvttiCGXU5fsURPW9GaNgYM9z",
  "key17": "314bngmPK2Z6eHZvZfW16yvTEjK4XMCVcNVHuZDpQecBcX32DcupTTHQmaWw9GkQfRtp2kAiNbv2tTRwS1gvELHV",
  "key18": "fNJnR2qRqhAbb5ddXoZjuKXTVSMP5sbBVRAGmtnu2GQN5Sfuv3xKPncwNGXg7fhSm2yKpnm1kfwevpKJW4ifNxN",
  "key19": "53nzX6YK3zzgeD5ffc6q2XrKupdGVmcgRANbpwTNXhGWqBpnSS9XTDhmqFdsCb7vzptoF2B9accHjnAnz8FpaJAH",
  "key20": "vTa9JLyBCh7Asah6sYUcHxKoZ2YgD2N4XoHFZMY2WdLRKtwUxAmrPFv2swSkRv6RpwNhttKvvFEBSJWvkhXSY7b",
  "key21": "Cyb24izWzK3mPeLBbXaUJw2T1qJsYm7UG1wZjk9QSEFxX1he3e25qxjZwffpopKC1dgidcRYW1SHuttUQK9MGSz",
  "key22": "43ULfGinKzSZZxM8uTj7UidYmruLzDcrQ88jVpZX7vFubPNgCDDMetW13Mw8m7bvXiW5W7hRGZFsLEHLg8LYAhhM",
  "key23": "3eDXjE75Ru4jrjZJf7VJ5p983FRYMC1s4R4W5gkmBDijJXKHUPmphSPfkESfmRaB2srDdc2GZMbFhnDfCFaGV5dV",
  "key24": "5kh6gPFLE5DMxBorBixp2jv7Sg4Y4QdHVrTkn4FtQ4imsLZNUaPow9oasNrVrPJSbr9XYa7eD67M4pFiqs5zMc4W",
  "key25": "4mvnuzk7R8ZQrfSJEpmkrnbmqxiB4aAYekx8yAtumJQGL5vdXGsJDEMvwcqimkosdS8gmyPPh96wWC4kbgCZaDsJ",
  "key26": "3BmGUGHobBs2jFCPQsPHbP6orjUxGkFEGKrYcmaNWt1U6ebeRZszNghVGdpj4UTV4ZXiNxmxFPxWYysEJPpkjp7j",
  "key27": "2b5ggveEBbcGaSzJScQD5PVqQdJXWatCVDU8yrocZEQvogbxbcPJebN8GHGYasFEgbMUBgfA8CLxhzTSsFEMeYFD",
  "key28": "ZPT4r9HD9Fx3WsgwKKfdKb8aSRc65Nnv1bMtKG7RoodYWQzrLqHXeR2DyKgrSVjXw28NqUHZptyJF3VxFgBv42v",
  "key29": "2NiuV7bCWBG68rEgStxcGnFDTHe6SvK8dTYcaHZHnuNdhEhMA3VMekJdNMoZUeN3x3LNAi6bYY11etsTqedwiToc",
  "key30": "3yBRTi59TmHZpDwz6A55orTnRjepQGRh9chLQuYH4q71FKXY3SRrxbJVtQ6r2LywsRrXwL6u9KxiJTyJn6wyWBBW",
  "key31": "2NR8UrJR8FTqz8d45eh6A1tYTTYf18C6r87HRaWNUpNwgPgmjSntPCXe8n9fHTxzwcqvAVvQ5Wuj7hjhWZXZev8h",
  "key32": "3R9WCn3PPAMqWxcWJbdxXixBVhJH6mkbXtnqB4foKR3TsXtQ4qsVmbkMmMfgk3YDvY6fFK6BNJDUGx9Pnaep6Yns",
  "key33": "4K74iqk9cnKkbcyaRNocgq6VtLioe2X2gCfFrw18JhEF54DspNh7S5dhw5RxxkLPVQmGNfBS4y9YZpUt235pQypm",
  "key34": "4Faa21wTKcatNykDjbz5xRAahcxNYh6gTc1z4U39uF5wwP4wxaK23VKpxcCwVm2kaTEB5oztzegBWKvFyo8kpT6r",
  "key35": "3vy6AguUu2rxxpAArkKpWR52zgzmeCCCcJJwzeQ6nWTDZCG8HBs2LLvyUQciKhzgS2ySmm3ZQAndrc8eqXF23zac",
  "key36": "64jVnvptwjDBPq1enfz3Q68z8TCHPY36FaUJ3ciJNtYNLijCjnWPnX1Yn5KTM2FFMxzkDwP37VQ9eRsJN8AASDNx",
  "key37": "2HxJaz5rwkae5sNE12sanUEZuAdSwoBd2sFzCnviovGAx3TxeXD5aonZtcNmSQGVJGuEWFNsz7EnitZddXbLAFbF",
  "key38": "5FdMZvKv2awWzY4zcbKzRP6cfJ4WSyXJy59zjSoxi7uGK4hy5g3VGAm4eeWQuwxpt3TfeiSuMXj9TpgeevbWmvQo",
  "key39": "2xKUap1MSm1BWxWrcTt15WkHb5NfJdKWvhYvqqk65Yv7roU2aZLg4GnrzhEf8GQDNEexGG6im7ioX9d1oSDRyMoY",
  "key40": "3LtCd5QyMkYH9pwhBmNtfaCwWWKdyLyQhybMTDQd7jEH5ECSTGngrdgFpcgAt1x9Q1kPiczQjN3zJPpXBpCKuN6L",
  "key41": "5SdAN6sjT4Cii6LEfywnExpscwjNS8G4WjKLcHq9pnBq35oijz4fc1PwKcm1t8n4PCiozUdQcEkpfAWHwo6EihxW",
  "key42": "51iAwz89jvQHaiQQsXvLk9v662tBTWfB1oaWKADebUTCiQYRm2C2Abn8j49m1YGJksPq1FD3qobsJQXBjhMvnkq",
  "key43": "3jctGQfjo3WJf8evBxZYQDzFG8oxzdpvWkTHwj93Gqqj2X84gkB2ewkK9mjTj7tgbokrru1ULhsbDmhXRzpf5ZrC",
  "key44": "5JMiR9vgE48gNh6wRAvCMMBbvtoMR58kqQGVCaVCXMDpyNn4UBMg2FUhoAWBVUa3c15YD5LyY5i8sUdCHivfnvEd",
  "key45": "3eLRUCH1gxyfh4pRbcV9pVUKBkCQ4f2ui7bT9oJJxifi9U3DPV8C7nLn7U62HbTrfheaY1Vi1kKY5moo1dzEqKUw",
  "key46": "5pm26TtZQmtnVHhMYMc3926YUntqMeMAgUYfysDxyarjwqMWjxFUtxrESwyqUj3cYPjadihkNV7AAXHHQNNcyb6h",
  "key47": "5BpY6GPJLHuZhaAH7Dk1Gmh6ubneueB5dtSAdTHsuFqxRYHjGfaBwu27hBxx6sXvnMHkRAG6oQu4prxLuQ68aCBw",
  "key48": "67WtBBs77aqixmyksWammnbsAxw78deNkFn5GWH7PtFexkKUbcTEtTKykSD4BqYNG68HTvWuucUqJ9G9jzcTWPRs"
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
