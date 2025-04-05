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
    "3Tvvj1aijKkJ5swNxUunYzNqXpgauscbn6EU9j6WTdDgASFec2Jx7xmCr3rvEYygRuv6tMk8eaGDTpMb7jowxBb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hjr9AxkQcXYA4C1eMJkTQqqPegWxYA95NvfLv5o7mS85Kc9TJQAeVnfy42p4aKt6K9kih5UmJe2T2An36MXoJ3B",
  "key1": "Np3GN7E2L6WnWjHgpv8oJUug8bsJkUfeb9eTvp95QcoFoRRw5vHzJWWUg8VgXiSzpEBZ5JqCFhEDrSNbTWDGdqt",
  "key2": "2y82Rwfbe9eh3gyZffnDRX9HX7GiqWEUPhPAjxWZiN1oY3ZozvDfoa7xz5cVuAagaP3Hdjk78sG8rqtVFroEkDUC",
  "key3": "DcQ59SwfVXS1bEd2AmMVk72vrnewxHcwppPvMfL9ACH8q7VjWFoiEAvABskZq7X1hih4Q7EL2PvUmies3UpjbCV",
  "key4": "2yXtmowXBhFry9yBMHyZSXoJMxU6aG4ELhYxmZxFbYFHwJLzi2oDMMTsz4JC1QTQZvS1tP2zvrkd27QyTWqLrqGR",
  "key5": "4E3NRPfEzXG6LAtJq96KKQcRkYmFiWzxuwHYFDKwza73HLY1AHuFmqWFDkVjNJp1e9cNADhtxMkpVNhrAvP9CgBR",
  "key6": "5u3Y1toyxAkj8dDyJ6Dgc7pQzKxzhWbTfzL6WTEbWokTfN6ZmcbnyR8FUNyrNtyDNWuJ29unXEnYEJDcW3TXNfeb",
  "key7": "5Q4oxH75dbh3UxrimVC3NVxW8wWcQqwR5Vs3BBdLViCSPchmbDTAHRJzmar1dNNeM9DUHXTtPcwHJxSQwfVKtzy2",
  "key8": "3uGKcMzaPvghS3R7pFv4FKmYuiLts9tkVv8N1kQL4UbAX3YcuxNRvFfp2v3X9Ljxn4hK2PBtWREcH3hWbW9ttu2S",
  "key9": "4nymXfz4Y7BkRSgTW5B4naxRo2c96pBLkGJYGk3jFrKr6UZW3yALgGmP5w5Scjn8YSmvfZcRBSFPjq79Q1JvkU3M",
  "key10": "2WiZV38srnmnebYqXP3dxKMjRHQdfooAt7ZQgr7mK8jyz42ofVNv5eFZrJkFt9nZRVxJiuhMDEgpWGAugKV52NTc",
  "key11": "XoNJHRqAQVoQKJfL2CtBhNtKCD7kdk4MzBkrc7p8UpW4se1vfMfNdC4Urx1gcqLMesk8qTgkJgFgGZVUXiD8g6z",
  "key12": "P4jFr3qgCh5aoTNrVn6RM2fsFVdgDnqNjqKWrfPUBjbHz3wvpb69gVDjG6DrEYLzagP2dMdJBosAY76Vj2ZAUKG",
  "key13": "5spHoJTJUM7qxkYX5pYo6upWnyejoEmVyqDG9u4z9RPd22qsJ5GEgH3marLsAhfsFXhGniuhxqtAgKD7FScCBPik",
  "key14": "23iuNa5CgwHyRvoYKT3oSUaeR9z2eW62gmf6XKQcuK3ergkV1TogcMNXHYZmZ9dCBE1MCrueo5k52fbY12LFPefp",
  "key15": "5GP3RXKpVwiR2R2gAyUGxKruUGzR4mc9kD2KouF2aHhi2GobuTGJdrYgstj3yx3ueVUgPLau88DHi84TFCsb8Ar1",
  "key16": "4ghMSgDw4gWZWp3ubf4oMnSXHMvH5SDRUs1kHru1NEvn1ECVfQdcHVNyFQmKg9T559S5EBcWYMmUNBfoxSZUfLVR",
  "key17": "4qg4HftU2XtRk3rEi83ddMWPdG3FGnwoSCMbxaaRW4o2da45oetZenohkTN1kWBfL8hTaNJsrpCnwJ1wZ3J7uS22",
  "key18": "2HoN3VNQNdgMcpz9ciscFfcTXEX8ruhXYmmMnvoDnPsRmLYueiB4gkRqdMWTzp4cS1Bg44V966UbdZof18dVDTRs",
  "key19": "5hUikefrzdbyd4N5EfFWNz7GLSAQCJvLwkTU6chjBjwiTqmF9WWvsP6PGBhrVmiNZZ4cAPRVePFs3zJ5kJoDuNLn",
  "key20": "49n8ecZW9LUfMMUw2PN3nYYWXVV9sdA21wrhuZUH5Dgxu1uVtmzrxGS4ka6ingdj4ycWbsigygjpGCR5Se5pF2Bm",
  "key21": "2QWsEyboc5H7ocFwpmgu27Rnwa4wTsp5x6XGHxTHzrK1WdobkdmZvbdY3ZfbpzT8oZoB4q1zksBF5CnKgTcc2949",
  "key22": "3EBxuPyLPQTTBrJGX5zyfJGshcxcuGccYHCTsUwixgrLLC8aWbiGKDZ4f6RtFNV6CKuwZpnVteuwnF4XyfxpwvDj",
  "key23": "5qigKnRnrVRwy1cy4YhZLXW6Wiy94ZZYymwtk93abv2MKQnoeu7VKwKSJpaduoQqGdA177F2gxgCpqngwkUSDN6L",
  "key24": "NNxEu1nwSvm91b8HC8YFE131nDeqL49qLwja7PcTpuqBBEYHSTGEg5S1ANwqyd4kP3En6Vkm77GFWqyoARwdN59",
  "key25": "2XC2VeZRnNYjKo2edgcYbabvA9i9Efngq1Jnv6mhMTYuJbwTmnLAJNVvcGJWPk8E869rXsSqJrTX2WQCvKB2Nw2g",
  "key26": "418Rs1CwwFxDsBzdVsrj6qBmxNFu1dXaX2QCYeynWqJKyy4HHc5XJb7N4zNyW9MScMxKjGJmAqrZbDon8cXKvYHt",
  "key27": "5Yf4KRHCU4CWwNz8tKF8f2kcQA2FuVaxCYztZshiqDCWTgDLvuANeAazW8GiVmiETv48giwHQ9x6zNqpvb2hwRpC",
  "key28": "22VQGDTZ3RQrpLrHfM3SPn9wwNfzNKHGN8sdLAnJ2aseDLg8CzkB92wbWRFHFqFf2XU9yR2nWK9QZU7zQgkhM5bp",
  "key29": "2sgwDSFdWEuKgqpUzSjT9xvTxctJxCr9347HnSiqsL7EoLpvT4kuGoVcs8hY1MshZ1XAdvkJSDqAqBQcpPoib5RL",
  "key30": "5thaE5e7vn1QwbiSY7WtgPDM7JbUQkj57k3MgYrFoDovrhUt49wevDa2QSV3gPBuDDZ4Q9TQsH8vGbAwjV9WCB74",
  "key31": "3iuFbk3s1w6ZKpw7nqnUi7Q2fVFB5bBABfY5cBFyYeQ4Hyh596o6Rmedw6z1j1frjpRG4PJ5Ux96PB69VGQYZtVX",
  "key32": "2goYANNbNGeJ6u1FRBJhCCP5evPZtMijCo3mBQ7ciTmTsDuD3K1XT9xhDGAeA99pCsajrPQdm8NW1kdHSEva3gAy",
  "key33": "4QkGsnoLegZCQL5dD9yR1JfnYNAn2LD86BkJrv4k1EhT2TZehUyo93TjMSyTsMcVMTTtcATmjSWCSTXJc2oiqMEk",
  "key34": "2s5MroN7ejhzftfoChrjRkFBoPaSbEcYx4RyDrpvqkRL54JSCamCztEF4ddPqvYJUawNiMyJxFwC1ogw88t2W2AK",
  "key35": "43MKwGT7MqHgNETiq8YSCfNZTK1reYwXzdyc8AT8GLMLcs9RgVNJH3JdwsV41G1LF7PdyGLqdYrwxtJPUhy8dQmm",
  "key36": "cATawBC6ARVBsQKegfzfTbxPqmuMuYSENhKdKpsgmHqYRzrMx75wsd5k8uagzJkqK8gYySfQJBvZVyJH1vCUmFr",
  "key37": "2VLnyauAJu7vF2dPXnBw7ooi14qahMpvAW8pVEdhTiMCy6MRZpzoSkjuhTAKHvCNdzB5N9wNwDhsVoBb1DPjMoq8",
  "key38": "4BxshSptpVou5HUe2jGkkw1CnJbVeP5HAGKpcTaAsAjqjN5bTsT32KXNZFWmaMQmSvNtLskA4pr6R5hh96i6hsnf",
  "key39": "2Ucoikj4n2WxH5bAcnHu95P1YfPHuUxwRcKq3AoTcS316MR5TeyVH4g22vuEX8zj9WW6EptzkXKi5wgdQH1ZPWwT",
  "key40": "xt2Yb4YJygYPAjAb56L7opBUWzVEKvVJgZbcT9N6dKBydDkFk3yBYcJMUpgz4YoW8min5k3rt5baaVYkijbXTvL",
  "key41": "6jZ8csW4CHa7ovF4SpRCPyoU7Exp8udV65Bn98pRZQcWJMm51vjmG6LrQgk3uEUSf6j7NLGFBFxdtmVpaQSy2CT",
  "key42": "26iGQhbqW7tt7wiXLLzReubJPvFqEuUk6V3fgDqgn1rBQ5CuBq9jGg5yUNuU2CWJRwp1t3KFmATrmRNN81BWQspm",
  "key43": "4tvNPK7EBpxhbEn8KYj2uR77Mnzq1L9jTB3XAvSapGSWfwi76LPU6WyDcp2smhEzvimwgXLvokCQixvEJoQHB8R8",
  "key44": "4rMfAEESwSH18pLZPcnjDEvcFZsChLxuUxrm5AXGjANaKf9V2ZKsvzDUNw51oyfuKJtGPUzfnLStVGFmcQ8JD3yA",
  "key45": "t2qRauhZk5sJwSMuySd87JGU1sBSisT35dZ5VYqTaWcx5pAXmajHHWYEN7ZqVevYmyxYyu1jv2JK2o69jsRyw5N"
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
