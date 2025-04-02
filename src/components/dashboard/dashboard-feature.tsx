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
    "336Rp3SV1SPd57QiwQbAuRxtfPD7EQ1nNwgPhsuKReCs16eEFfFJynAFCZYyMFEBqXjkUriivNiZcr62BMPYRoMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5becTeyWj5coBBymkxg135MmioXXX8q6NhcTUJDvPaU3nX4N9iNpAeo4bDYeb44z1nNom2EHjaZvdF26qTrtoEEB",
  "key1": "4WJVRZY52L6YbsJZHS6uN8e6BJSnWz7uPCzgujdzK1uiW51KTr89xf2uVyD88W42w34NqV2vbqwaPkofcy6ZoM3M",
  "key2": "2JWUiMfHHMnTdU6hhRoZxF8yrNEbxgTcrtqhF89ZkohRrxSGnsnsT3jkatHqjYxjkE7dc9YTvvSgZ2bsMxFpNnzz",
  "key3": "67gQm9tRFfcE1PGByvgiGthZQKMeGUTfJfvVwPCyWwVnYmbYTB8QY5bjjNbAVeBYmCChjm4LwwqDZx8g43nzttx6",
  "key4": "5kcAjLp3zHS5me8zqTBeMitbmwASEHehCBToN2fLTPxBYuPe9VLaQu2FjWByMKPsPADtLNhJVrgwi9S9tDUKzNpm",
  "key5": "59KjyjMG5UCijN6Y9P8uFJoeFtURW8yn16HjCombutLPtm9dpHPM2kN4LqBiPtrqjuZZ9SyaDvhbms7nPHSMjkT2",
  "key6": "2LzXuzen7wPoB3bQXJGEWoqyEcFh6EXdExeJaJuCf6WGBHs8XD11bJLKUWEtrgPtnVFYwJweCBANw11aWE71Kpc9",
  "key7": "2hZmsZK1ZWu357uYLUqy1wpWko2jt36bm6C5o3eMwaQqjaKkpi3QQe4DWZXebHfFchNJ8hz8RJxeqSLmMaCw66cH",
  "key8": "2mkvrKTVJeRjDLdfGqoCDBy7XiW84BgzchcSRs8WjvT25Q5DNhzcYAqMsezkk3FrE6kHJBoQS3CiHvpD7rWhnbJ6",
  "key9": "2VXzaG39wbAyrMGWtTpyp1Yjz9QcHxV1wh7FwuiEgx9ig3nFtVryRmQsiw89wz58rwnfEwzinwNfZ1YWeBKhQWwk",
  "key10": "3qD3cmcQ6s6qWT27Lvdze29rBFku1pzMrf7S6986N7irjDDeETCVRuU6BaNCKadUv2VUvSCX4zYq5VMVzk9un6g4",
  "key11": "U25FwkKBLXnPGbLFJ6hp5T5hr5fSv1HvfNSeL8gfaG6winbk1Yj8k14rcgHy2xzaDmaGTEAqoMGp4z6zQb9LW2s",
  "key12": "3Qv7v3BSzZUxNhDYkvECwpriSYTQfx1R26Bc8jk3ARHhXeLB49Nf26SMWWqmnx4oDAJHd2DDG3gUaYHSHXxUbw3o",
  "key13": "2N1j69KQB2pPiYrWFhskChG43S5EXTxARoY3enbWUVbn1xfdWSRhZ9cNtGLztm7mbBSFHF9nWaxDA5QhXRFCvrPX",
  "key14": "2vp7RRCtcm4F1YejBoVMyhYEwwHntThz4SKKepmHpKJFnVQxw9MtGnZmV3Bks9n3r2FoYcP7f27LLFfaCvjr7nhc",
  "key15": "6So9k3fG4RJuPMeUWG61wYtBCywjDJ9yoPfkKNJ9Qv2A63xrcP8Q6o81SBD7k7fLhctLRCjp9rmBJcuDk4atF8k",
  "key16": "5HiRXK3AfkduaNBVatwBuGbKPfS1bMPqz9LgrQk6rU2RanurdAvNevNL2KMgmxkHkLjZVwoE4AF7kw2hS7Yn2MR2",
  "key17": "26qeSFf9XASjGf918nuphrSNd7aWhhnvrynpLRY7qMJpZc7Tt2CNr6rzSvdf7cj1bYD7PakwUC3b2Z5hw5Hw1Hz1",
  "key18": "2s86RFZCYNhLGYKyydfCjM9V5pQtQ2WXypNA9C1gJ5YTUmBTxweE9164TGhrJWDnHzyepRo1bLnCBerNgxPaXJ24",
  "key19": "4MRr4gFjJ334M9isR88NcmaQmzchHmrdKvQDQrdPFH6nNenniK6HKu4srKtn3cj8NjPqBrWHn11gWyJox8yR9uDQ",
  "key20": "eydVt2PgF6NJX3cYwhSDb41yWrdFW7cuEP452qoyiH6N7w4tY3UewfqMXSVdPTUnwCGYzL6urHRm97VhmL6YwAs",
  "key21": "4X2bfbn3B88UvqUhqSkTnYkBbaPFJTGBHQeExiFm7YAgacBWKbmG9AuT8aReuGP1bXsVr6LxXUUMaBpbmyXnMkRj",
  "key22": "39s3zVurAJDWVQdVGdvk1YdC5s8N84k8tvYg3MAwQLJ3oYZdcYMC5ZdajmqqghxWvA9xS8jdNLytE593TERh92tW",
  "key23": "5XwSEfmuvwnGNAGwqban1CJ7sntfgwSsRutgbPqDapfn2LVr4CrxdbWBhPdfFs2TgAN9dbWRqB7VnUi5ZoNNQBhY",
  "key24": "3Gfz6aP3KEnWD5XJPYJhfdCxxtkLksgY8sqHRQ8M3fTgeSW8CLqTfnr6gQSM6rVuYnYjjKQ54N5CvPwtKjpQFTNZ",
  "key25": "QwYDidVzq2guHth7nymweMT1PrhMoVm4Y1yNpb2u2W4UrNoj2nNz4uSr5UHciK3N2GrY9baxhCFBa4qerRKD9Ww",
  "key26": "4Yh8BqJkViLMzwyWorg5v1dVDeLq8JAiLxGjEEZmwTpf4T5W5ujGrspdcvZzrxMnm7yXz4Y6gAFCcHitQzNW5EhQ",
  "key27": "5PHdp5zMVdtB9ZmyLeM95JPx9UedbjWrumAVmkJhWLWXpvMcWUxTK56ck8VmjnLf4Mn85idZTTbJwewGk5qFosEc",
  "key28": "7Xo7AH1ZqQX8Ep8G7gf3VkDiJKFkE8z7R3ipBeaA6SjxMEyPq1wW5wG9vaX5KcMNPxesThPW1Bg3DovamAsxdDu",
  "key29": "4uYEyoaD1xgiv2KvD1Pg2wDWiVUfqVDCsKXhraALQwqGSyNG7yxjV6WsdQR6QKE42cYwBHMRiBWYUnLb1WJ5fekU",
  "key30": "2yFYiNYkKaxKMgTxWmc8LrzkRen69om6SgdmYXHVDpG9UadeYvMLgW7n2ET9TeLrfH4Ajuyz1NnJTNd99mteD9jR",
  "key31": "4xTyQ2MpA4sGWAbmTkXxen2VcMeWxEDVi9JSUL9d2JSHRMMh3D6EQbctrbZYhoc3y4GdsVqGCPM4sGt56xWoT3wX",
  "key32": "4zVEFTaSjaVrqyY2vLAUFS5mYcAhxNwodMm1wnMQ12WLezLzHpbdxPqV1aZJ8d49cKsce5F3e7RgKJZufgx5C3S6",
  "key33": "36J2YbxZgLjQG1gKkQAB6gc6fbnAPsFXAgUGwHwqVK7FN1eLRS4vxD24bxG4q7XtrBjM3NRu5DfrtuZWU7fHuWBy",
  "key34": "3YTcPhpch2NpZEETX8Fvw9WSHeRmNmjTNTxAwXqxz1c8BNY1cL1eKnjjEggYfPT5Zy8UjZtzft8iNiTULRAxeTzk",
  "key35": "44ddygi7Y9a4P1JyRLL4svucv7ux9Z1b1TXRJrwEr6A3fbp1Sq1ncvZQafgpUxG2c7GwaDAaa126m4Es1CLmYjxK",
  "key36": "5erzPiWuYwNJyadixrTv4LmN1rcgiaAH2q5ZqebUUAFievDWAzzaWQuCgKWAe4uF6FFnYTRTrvWzuqkYLAobA4G",
  "key37": "UTgoE9MbF34RVDy2owrNmU5EW7Ti4BHQ1PFd9FpZodAGubfzdqSyVqkSErduHiA5m2Leo6fgmjeqxy1jjbhf2TX",
  "key38": "4Pgxuw4e8PbH9MTZ1Ha6AKa28NnzetJMsLi2b3DuRji2bR6FZEtrcVkQSpFWdD71Nravs92mqBevAr1DT4xZp2RE",
  "key39": "bMuKCLD4L4SdpNLSHU9SUqhZdeuLNPZgUf9A7P7HrWo55J6naz7gDXmTbGhGKaPxjWXeE3oJfs22kuwf12KJvmL",
  "key40": "5Tao89ZBkk3Evg2dzVD6Va3dXVS99j787FVxxJcE4k6Pakfa2yS8esmveJ9dUExAf2KMvCqq4bJH91KX9kGQ2G6q",
  "key41": "5WPGt5jFFKb6gUiJM5kACQWVonswUMdGcsWdMLTeWPJ17SJVynN9Mwn66eL2KfaSoLADaXpq8rWjWxMZ8WvDQHKi",
  "key42": "MWPH2RTL3fiZWf2h5AJa32Lr626VbsJ7BmaUTwgW61H3KhiDPyN6x1s7jRkSGStD3ET6FPjGxhZeQsMcVFoFLLA",
  "key43": "5RYZCp3CgdmSxZKNktn3QKvqtBMPXDMunqD9XNSRpXH5BP2EsJVryHtEzZhso4U1X3uLCFQXJqvAsMmbcAzMidfB",
  "key44": "3hfmDz66PHuY1GFeawvuMF5GMdm1Dz4gTjFFSBuYbadiwwSitWkg9KDkCdasPmFrLLyfWtc9j3ay27pZ5fP5rqsu",
  "key45": "4ycWEjKx5Cg4bMegbJHd5VaCj3xquwutrDby165Atwyko27JgtFUrZJfP5Bt7hdQeoUqFoNAmB8fxtdc7M9aqqTG",
  "key46": "K8XUuoRhR5kJdcqGGbNmp1dd5AKVPgg7qFW14ufdXn1u9CXdL5gPcjt9p7YiPpKajyX3FurctNS9yUkqV6Wvcbd",
  "key47": "B8sDo8Da1P6Ky5PfdyUmgfsJCNevXjyuMWJ6WZhJ6SqfGq7k269onsDLuKXpWB2JW9MLeLiX25dMc4aYK2Kd3yz",
  "key48": "2AGrnsYDoucQaYNnjuoe5Q6JzCzUoTMNRhnZ6odLkZwpXUuY2CkB8oMyYAWbqVKhxEbjfUJ9LTpzFRu3AyeDf3dm",
  "key49": "4FJFmbgxCTdqrQmNjn77LRLxnkcWvRfVchMHtVaYz6c555F6TXGszRtrCBfu7zbvG18WZ66QcR6QMcuboWZ1PNDd"
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
