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
    "67iUAfXa7NdouiJhG5qokhiPo4Mjyh9Z1bejbXNYs3HuGt2JLBs9cdi8QAVTmFA4PUVk189GZ8oi17eNihG8stT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HdxuF5ar8Jc9LJpEjzVk57MUUjBMYNHCuJEtCG4ijuDDwSst5Sj3M9j7xip3jynJJPxBr3dXTG7i6GcfFomspCP",
  "key1": "dpJK6kXRopMBTQQrT9eaMcqvF6tLNejo5jKFuHhRTsK6igYAVe8eKjybUYkbJdFYobDA9AMRd1d75x7ATtgtaxV",
  "key2": "3XXpnvpbsD7P58pBD9uQdbuoHT6fshBiB9L9fsA7FfJW4NtSvgmNGtkT1JRaWKn58LvqbWryR7dMSWD9k9B9oSJF",
  "key3": "3xuMJqq6DDrFiSe4d5abLi4YxguVDHX4NvfL5SXniuVP93k5mavKHzBVVbqiTAqiWQzPCNf6JjzGJ2DXKHe5dh1z",
  "key4": "4HyYXuskkwX3HT41VGbCtX9BwpbJBpK1WU2SSJmUDfyrYGknLQpXSkxe2EEEXRfNN4YEaxubaf5q15XoPb15i4ZM",
  "key5": "2wtMU1MH5mKinJ2Z2M6MAoifX4hagicxR8BtNsu2H4EwMmU7u1DTjHVQk9j5Rhr816Z3h2e7TtYfnkNG5VLxuMMM",
  "key6": "2K7fuSaRyZU14CMr7GtamtQzjbQPE1AZsJAUWaMviyFWFShpZ4uHrTvscryppEf7eTfixs1PYe22GNNYKpV8Hqd",
  "key7": "5CSQ8oqffEMXbyLJramc9jScQwtTHpBcFQq4LPbYtLxr53Ntg2E8ZxVLUmCAyxfgn7zx1kTHo2dKrcDhFrD72P5i",
  "key8": "41Yf3igQq5poxFxkMcpUtkXHmceAHvW71M5EEF5xNv7e6mbrzkog7zAngGDWZBUj9SZtzbpPLf1wjZBtfpATekCA",
  "key9": "2R6g27RfDpcwmcxBP2K12NjcfdhtFuyK4wCgWv2urtX6XnJW6EGRQzG652Fvb8iEpJM7yQzKkjbMkYmAmQ22dE14",
  "key10": "3VfjbxgUT9j5By93wr7xLXxYHdzs1rX3oMXMK4sUCZnEeVJvSp3EVUR1FVB2z3E8mH5BfY2v93RZkQNCHjWdrFL9",
  "key11": "5znNTRo5CXB6L77UeC2w1e64tvAbHVJ2zRRjTGvMxsr1tLymz5zotTKudhJWpvMcsoASJYRw4Sj9qeCBcpF4aRBP",
  "key12": "3zVFGahrpEb6ZWwU3qVvLQmc37kRcvVy9Fkf1vd3mL8qF8JS3uGet8kzAauDACaV4NTWqWi7puFajZWzuKQ2vCzR",
  "key13": "4HZMJtYoCuN75xJsb4dzdiTb8nULy9oFSPWrPDaJEsLwy9wM7oJK7yw2ossMmqKE2YXgnKRsWeRy4kVQSu2Giwh8",
  "key14": "tmoZWYYT7iAjZ9uZDxq2DJqfjr9m4RGeE4ay1UPfFW3zttfB7hLMHXeoRoNPeDoyKrfm1ofk1TMuDy3Mxpafb5u",
  "key15": "4TtzhB4J9nyvNMhoi2jYSuKgJgEWNQjDnPH26v6fiQfDfPRSeqNgKi71EdJ1ioiGvgoHgNtQQUNMEhvCCxBDAdzQ",
  "key16": "2oAsu17YxKgn44fmuxvYMhzWzai59A4WWraeGNzzfppRrDGGNQwmwqSDiQidaWHZmJvnHbQt4MCxaJMErxHYV4rv",
  "key17": "w72GP2bK1oJXBuqR7iK68SCb8HD9uJ87aTi78GfsophTFSRoqRZPUnA1No5Mdsa9PsuzwGyoezgaZovotds7mB2",
  "key18": "2jHCYFLTZvXZEy5UxdkAYVjHY1i6r6uCp2MuHdrz2sfLikDvudkjhBrCitEtxqACDdgpMx4VVoquN7iUNiYQzEbP",
  "key19": "GfJ8pE2VDTvugcJFqNSKLmokasdrw9cd6myd4RZZKUUeihtTV2m5MXpt1dWqhEhwTsKXfEF273QfDz5zqhZCNvf",
  "key20": "36okGxXiKAdNKqnAz2F6yaQrRMZFnRGNfpr1mpc87zr4zHXVabA3BbZKf7qpoYJiqS2rf5DETxDmbNdaM5Eawc3q",
  "key21": "4tePNbriY71Y8PAFpTc4FV2q3BhhmQHha4XKNQfyaziub4Zsw74jJB7RdS47Xwyge1d3vkHs2cAAB4vLaLHpjTuD",
  "key22": "58rP4q9HWzjDwJZEk3va8xtxDuojY3SrHTBoVMDKwt9gNwrFap76T8KtVgHPbyejCuhvQGNA1bYBQnKenwSNUZvr",
  "key23": "45b5ooxypzgLy51Rhx3rdPWMPdYWvjNbgkrNMRjfu7KtJMEzAsaJbDQYtYKXijXgGSXXRV1qH7p9e2EMKrNDSxvQ",
  "key24": "5LxErdjDV9vBFh9sHH7zK6JGUk4epMWocXgYAGPDmG9AdbvvwPHWBGchgLWj9VQ3hddbycXgMxwsCoq1jgQVQmt2",
  "key25": "aPiNoP2LsdZAUKQDjyxfWASsHxERbcqz9QdBrvZG7fxbkVwgLw2544YXr6QuJbCbMQaDWnMVkYPAACyzUXkHwC6",
  "key26": "3TGeuJMPTRecoCSi1oBcaB53mU13jRCyeK2VFWicXP9EeYv5Nf3FGfqkhzTVDmWWCm7T7ZvZiNwobghsTH1Wysmj",
  "key27": "25imxtBwiL2xUG7CvPQjpfA9PyqCfHkMKekYx6XAeMKyuNzbuo5AJUaTxq5i7YGyDL88uFyGKoLy9CahuFDJSnzS",
  "key28": "AUFdXrAZ65W4yn7JTYwMxDbB3KTmXccJfysr6KbgC91zAteXdzAmY28oGPY6WtxVhyPwn193MmzRuWwC4exZeyw",
  "key29": "3EyLYJXswgL6BrqRirxBEjXBRm1CDdCBe5ZvNTbTev4dsoCKSvV3HTdwWDeQDXnyDnvG7fnoXBeebfJzrbzJ11LX",
  "key30": "3t6P3pV4r8S7PPJMSWuW8nS2zU5Cn1yugs1JxeCJ591Hw2Vaws6QXZuDjpBoRuFzvJ5nCuUZG5sxX42Dr49B6pUg",
  "key31": "2gwdREpQH4Nvs914jYg7cGiYgfvKadsVm3zJFnMLMPXG5y5Kk4UbGKf99qWy9L9uieoLx7MGqJg7GrXVRd54GVaL",
  "key32": "3VHft6obvS9T6JAhjN7uoKUw8f61YjocuVMTf346QxDSJZPhmQzzqXYUYnTCYxPLnYuMjubMqXUgmvGHxRQPGZD5",
  "key33": "39T95WUWBQauwqUcHHpzDDp9yJMUjhjwDEd7cexWYdc7KTySiRF47gVUAYJw2WyPNYwGPt7HjVuoGNAvdwyz8RKN",
  "key34": "NPUAnypc2Jn2jVikEqFSvboW7LKJ9vYhQTzntwHhsa5bT3EnrVPguEAwtwJ6Q7hVoMibZ1N1YTLYE8EtMH8B4AY",
  "key35": "3Gjp8cjA8mBHDM8Us73MoBuxjfSCu9TzzBXoZvxBfCTAA7myLo1c67mQfKSEbMgJ2BY6A2iuQUvsmSX8huTCw8GX",
  "key36": "35gSL7QX5DnFGQKAT828pWaQQ4JfiFeDx5SkhVt3fVDD9xeu7BfPJKebmq3Jsdeh7XYv1P4WBfSNBKBYZcuB4iGn",
  "key37": "2LXZwm5PVn67AxufUC2CVjpJpmaAvy6RegHfpMGp9ycDhjoeDAoxtkYUtmC9XybjbquVJrLJjNo4WgPpSa7YuAsV",
  "key38": "5hqMHEtxBj33Zrbh3hURD3f1bUYF2KCWvTGNUjMcp6xoBrcifpHSQbj4XzqQJFx9iaQtKRiG8NiMeT147trbe8hn",
  "key39": "3oiX2737oqdjb6M7vTYauSVpLzWZwAcxcSMT6PXSohoaXuXB9VK5KCpK7W1NYG7a2aX5CdGZ9N6Mm4VXiHpTy5Jt",
  "key40": "hB3LyovihAVk84TYZkj5MWdVDmP9TLDXfjchBsbGgmj8xsjAQxwJAiuWfUPTZQmP2fRRSa8cggRHip4S5cp9Jye",
  "key41": "37j3L16dsk1pEfzmxGLXWaonFfhk3Pe93nPfP8YdpM5o3wnKmKsCM1A98ZgA9BAc8jRaz8zCXoRW4QgmbiP12Fm",
  "key42": "2Mk16GvYrKyDtvdPi1Xy4VDkTKghJk44ptH8C94xR8Js3fgTY5Pub67DMPt9TCZx2hVq483WBT5mbBqGcKQq5i1r",
  "key43": "5R1A7v9t1B5cSVNB3i9gnWZCgbNNnTAwMFR4Nx9bnjn6owb5aCx1LCQttPh6HSVDCrVfjqbXQJ5C9AEYZzgTk1z3",
  "key44": "4NTp3GwLriR8zFPMWKy4FdJWaHTBC7CdFTRsqckLzoDno1oL9QajrsmgXEp3Yvn4uGJD86bfPVRcAiPNWb6gzB3i"
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
