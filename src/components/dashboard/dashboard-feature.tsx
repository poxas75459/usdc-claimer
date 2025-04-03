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
    "4owC1L3GpXniN5MSF1XWMdbdTBGv2YyJZLfmeaCLyJka7PrKhRYExFxu45K8vTJZtmjfqEVGszw41TFTJhwPVX4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FY8dWjAhQwNnEzRFsweg2RncRoP7Ao71sykwRMbc5TmGHEZnwEPKFu7EwXbwMDRz2iAaHzKzgSbooZCaVhaUfMB",
  "key1": "nC53xmYZdubWeUtWhBRw1YHU7F5Yzg1JZW7RD1hm3X1wGUzXWztVkP2H8Jk3nZD8X5CQDU8J4tsgw18qaXMJWNE",
  "key2": "5BgLwLQtzKWzPsNm3kUotRrqWKJVN5oZ1dyGqzGGbQVjd2eSsCEp9Txq6vUPHxeiXUi8cf5bWnFBHxFnE8q81f7E",
  "key3": "2fLDseDvjtBuPVhenvmmRU2TpXvLA9A6EUVq1Yp1F4wG2163rrqwLDA4wGBoPqbMn8FRAWAWqzk3iryPUz3mByy1",
  "key4": "5pXWv2PsP436gqeDVAmZyGyzieG85sk6BkGUXLxNrvmdd1vJHj6iX7tXyaCkDBfX9DfFSb4FVN9ioLZsxUdo6JyE",
  "key5": "3d7JPjySxfNUvHuPGyy4ms6bt8LNQbeteHTmcY2GCBEVsBZkvQSit8DV4LwJth5yA7qZNtKa6aRvoQKhmkQMAf7w",
  "key6": "2u4oZCcdDUb3SD7TBJsc7Vuu3KQFUnAxxveXmzxNnTnPw8pnk2jDVWs5P3bTsBS9SYZCkHacCyDnbWyE4pnGifSD",
  "key7": "2h5qiCHGUEDTcPwzTddUVWwrHATvAsokf9P11RhZdPmhnjy6ee6Trz7fWBhhkGX6NkQvo1vEid8LRmb3vEvHKegp",
  "key8": "3ZL978cTP7UouqApPRBGAEwSfWJvoaD6VZ4ptiJiNRDd5Lq6CdLNjQEZSGXujKdbQdYgwoKPt2Nn99EgVBLA9kRS",
  "key9": "4WECqSX3e3WibjSVkdYQjMwhQvGFYuQm726F6M1V7QmG2LDKmaYYeRPuw4VFiLWmYSRzfFu5KSNgBSjV5Kz5Naoi",
  "key10": "3ntmXwmnGYPqLx7gHYtMVDbaMdW5AWokc46j8ZHuKj1gqKPX8wxp751KbDwbohCL3jo8ssPMyz2ZEfxggkZqWh2V",
  "key11": "39EZ982iGfkbbc6JiJ2zQcxjRnsextTxabdnduR67uWF5858UWr1CKewdUS64Hb86S2J4naV9iEakb9Ln9udMiSD",
  "key12": "4Sy8Zixey5vJ4KM1Vg9wMj3DS2FP5bBvarUo8hof7A8ZUoYVR4uLHUAn9acvzQ4xoxfAjZNNHg4CdJxgbPE9afZL",
  "key13": "3qXRaaLnXMn4XEpGopegxQvHN5q1p3hdHiBqAXisgdTYGx2LnfYACY9L3Rpp3axF5iPwMtR5svJ6oyxyD857Ue9b",
  "key14": "5Wvc9Kk6YxMvxsk8M7z2ryg4EfrQdVtdmDws2T1XkmGE5LRr8pNcLY4o8cJHnerqd5KYH98PEpc41VNRMdW2PNA2",
  "key15": "4AUGHdGjdHrtnk1nvHdTzDgi87PqSHqbE2dZaDspNMJy4Ear2FDTfzeUcN5DrecWyV1tpcSpd3SNdsqLPQV8vq2p",
  "key16": "4h3ruR3aGBd9ac1rFtS159P4p5mQCwCWfp4KDWwR1eVFm5ZgSM5h1r6Qyg8ZtfzbgCqUQuDqmS9ZHXd9Z7XnJ9aU",
  "key17": "5HysgjUF6eUUkXwmKEbYeYeHVvSzKqaR4zQYDbxZhg37D8gvKZPExhr6nDMmhbAKS4BfaPtkUpBPp42P6WfgS3L4",
  "key18": "2fjtni69vDt8srR6wGwbKZimVbsRjhkfZ8jVZVgk6RzwNicEQ5eM68ASGpEdxeKowd4n8WN7emxjR47bdUKMFPnu",
  "key19": "tQdS7KWNYbWC8mdXRYjajfFDLM518wiA7pX9q1V1roFVun2oLnSip6jnFCSAydksgEUE28TjSwWAunoVe9y1tVm",
  "key20": "bAEwAyXYktBUsARS413LoWSeQyAQ9XrQnJ9bjfuXMqmcTLNw1qcWQav5EKAcpfLGiVGxsrh2ZHgvdeDToR81baF",
  "key21": "5o4vhRdifXXjVawHKXq81oxoAu1qhe25ox43o3dkM1rafX3hmrc2zpgaUyJTXH3Bt3QKKnjN2no8x85fmW88TJ6s",
  "key22": "2GatZ2yz5FxNWRsTCnGU3KGWGvjpcKx2x9HpPji3fNWpBEfz5XR2wU6zZj3DRZvPD1jqXCtUNc8eFWLTn4VLuCiZ",
  "key23": "66rKmY99m1z2TpoQhk5kktMqNVEj5eFk88XWGXCRgHsCoNqbpPkVNsv7a637KhDv2xHiEBmRAtTbT43raif8i7f5",
  "key24": "46NhcovH2GzDgK1siN5A7pn5Naw8SaH3JsCvkhn3hK1s8hDwdwU1BmEwA4ZDgA7Hw11Y5WfaqkGjTyi7w45uDYTx",
  "key25": "4cjfUCT6pfE4dvaQ2PtB5aAcAt4epC4UJ8kELhMZVAVANuLLBBtPJPstMqcAYHurH1Y46S5dnEVVPUjEtJsNXEUz",
  "key26": "2NNLgtBipP3eBw6YwbLD28da7EfsecpFJ8gVCwGaJTzDRL6TsQa1nBmnYiPb5PtKKS4WZ5HbGtm3NbUoj3PbbMCV",
  "key27": "4WGNZTzBYcg38XwXcbuPWdBLFNUgydGnD5iPHik9UvRFaWKNrSeM7WM5aQXLoLBUKteJfWbXiEjHuY4vLhmeyj2y",
  "key28": "huwjs5hQBu2nJHHK9rqez2TmREWq1Ug6Yjn2qFygWtJgmizTHxnaZ6F4BnY5yGPeebKv4bGMDZBUHw4hwyxmv6c",
  "key29": "34K5fcrKEkLR2VLS1ky57aECedn5NeZpnpGuRt9jeMUEmuzwn4ruZgDs5XEUSMFzWpgbb9hq243xVQPxYVdA9vgn",
  "key30": "5uy3KJhiurTPNyoqpqPC86bbvoR4FromKoGQSLkUW2BiJBUnDJdjVXgNGoAXqLGhnJmgHXNN3SzUwzHf5mkFFx2d",
  "key31": "4KHbnvJr5vSyNDbrjX3uq2V1AYG8qiMbrEck5dP5a3YAv1zfkVPP51kZ6yrhZAgMozVH6q9QJFcg2hfFMuKqq3TT",
  "key32": "4fJmhBvv2W7Wu9XgtEsX2zrYM6qziuSj3Eqb2tvKaMHKJZru7rfZe7EkjtT73Tzhz5adtNPtAdPSkjK2fc2nUt6B",
  "key33": "4RdgJugB9MoVYWUAKqJR9wXs9V9rj85jvWMk7MYZpxNkpXEKjVVD2r2qrs3Uj6t8ZPBfMZrGqx4fHChwtCJXkvG8",
  "key34": "3kLDVNGTVqLVbWB5nhg838QjbMHtgiL3KPz8LBujrajW8A3zsbVe9nyhfLByHkU2WwpCGXT1kveCMyTqoooeg1nk",
  "key35": "4F1YA1EdgF8F26zpf9iewLjocxjrF3HAQJ7ntDCLdSD4tj8zsyAsx3cibMrz5Q8bT8Twr11GTUHYnJbwvevPrfsZ",
  "key36": "5ckvvfo8gTwo1PwTRzRNitFMfWXT5fqrtbZF7ZVeKgsLT4T5YbwJbqpqS8YGKYpUHaHGZnPeCQgXFC74kMCATLDE",
  "key37": "4TtYxbL9yei5gvQoV7XYQ3KXTvhbVj6QWqMhsj1b2WMB4UT7WWZTzmeedq2XAZjym9GB8xAvhGzYjxrbXxsbAgrh",
  "key38": "2tmYkw8B9dVAkqx26PhPd9ZnxVFbwV3xR3KL7RKshKrdcReWMr2Npe6f6FiGWBm37YUXw273M7qbTuw1GdRaDYfY",
  "key39": "5GmUq69naSAtsbzZ2ynMsWaB8syEvjeEeRm8EiohAueupu9jsTDsfLHayBnMfJ1mkaM2mZwN55JojBGzdQXkregc",
  "key40": "65RNLvbitqqs1TVQHiSXniKHYw6ZhNWK8xCW6dF78GQHBqiZDYvrF2z589gCzh5RmxNjUvjTASpY46DRLmPxDSsL",
  "key41": "FK8da5rDjrgsKmzT9HQGdJh6ZHiz1QF8gp9uuAko6tkMamvbZn9XcNLwD7c78JtFLTvP6gXFbUNvwosE9HBfpDi",
  "key42": "5nL2TE5QdLf7SCGwNYLVeUaKiuxUjPjdk4RxpfsQFcCgsmssJ96r2o5xSDuHjbBEyyM6VjghwVJyVcBWeEQXE3aZ",
  "key43": "5uBndMdwuB4ioCaYdjcPHuqchuRL7sg3v1NXsCVMpxH5vvaymXdUPv8671bMMa36faBkyughaCyUVSMqHXKubuqz"
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
