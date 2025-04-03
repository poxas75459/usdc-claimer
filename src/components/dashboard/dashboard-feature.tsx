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
    "2Zz4jTduXh7e9qXKXTivpYVh6wsfhYh9fpk7jbPYCkoGgsnLU9PhCPcUEczQVNkFwaJLmAsywd7SxKXCqyhEXzEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFofzJWewNK4gG7oPPYFH93a9ThBsLpgFbjxESVQPwBmLY36WLgVeVna25aeypkEBkYGL4wcDyftXRUptKbwkjL",
  "key1": "4uuVtr7gZhGatZVFyytM9GuuaChDht4TwupLeosQYWANfuRtvTojTc11Mo5A8BSb9ibr6LjNj9S5kenjg1ZNPyt5",
  "key2": "5Rw8Zx2WZXkL5J9Eqv7HA2F2GnrcD3Kw3fDvmaP5Lf8NhYAToZcXoo1czR8HU5ozvQMTpHBS6SKnY198zFNXGYEC",
  "key3": "2y8hkPU6FNa5m5q8AvAPiHHD7DQa8wSbru1RRhthG4rggMjs9gwGJBJ4vpFW7mdLPgyhnJRDKQgQHAP7d5eHSpLZ",
  "key4": "3PAiULzMeN3TbCr7YdsfaywBePwCzRTu3H2jAYpbuyHraavVaShqSoYSMrDzxgGHEnTZqHevtWfVPQbtEqtriDaD",
  "key5": "2Jjc7cebMwF1A7RYvbkvv5a2hAeoWR3K62EZq7RjDWXb13vRfSsny1mgrL7JjzRwWVAgi8eWSPk1SKwtgs9mqGyu",
  "key6": "4gtgqza2duKEhK7tC2x89VxXjiiFoiFccZfHFfE7M6iAsKpSaPrhrc2xmoxMBNaJPBjnGhfwyPc37Fbkd4W1Z6C9",
  "key7": "2KcwKgVmvnukBFtjNcMdaWDC8vbsq81W1H1raujTRx8dms62zzhE3YNMmrAVnqpSrPWYdFsc5N6bvbfNusuyWX1v",
  "key8": "5UoFtN1YEWTZRwMTJ7NS5g9QyvdR61scoJ7TGK1VRQG4SofvFdksiG7MPYosrNQbHVZSuK8xz7DM7a8ubHrM5mCr",
  "key9": "n1jv7fJrvYHoNZTSg2a9LF2LUG4q33vBHrovAGC3QztK8T2oMVPsUb6Nb1EQEfBXbQNrvBPkm8B3G2BXXX5KWkA",
  "key10": "3heSk8xmCUFmR639BYy1th4x1pE3SVtFogiHsW8Bw8GyGxNXv6A8dJqhUwdZAgjxuccgWjEAAnjbGDvsZVjSkUgH",
  "key11": "GB1txmkrnsPwL55LUTPiTebqBjUDjWBxxUmzBAit54RnCXxiG5h2CwX7pthcksZLFSgrHbs8WaVs95ACtRczJYK",
  "key12": "3w7HCGDZJcpW3JPkq1sVyGpWurFsGX3dickcB1rcXEgnk2oxiMUTdRVn4vakSGau3aFaTv6eGKeCsRGUaak2SbcM",
  "key13": "5WBXhnnH1JUwhnx1KZKMLdqjhvwAtvR66PZDcQxrjiZfSk1FKYZraTW5gZA9TxH6VCbToLnpzp1deNJFiVbKpXjR",
  "key14": "EUJNPdx38aJkmFPre7Bk3JxJ3HvfX8mV9Ej7FjBcAUovRqhWoLLDT7Wy5spM2FusWyAutEA8ubT5BynwW25bvue",
  "key15": "3PSNMsMexnYsXfBoT2a9tCG7Te83355axPBWBKnxtyMM7bpb2viU5WXeUT32MR38SMBB9aygbqAXAsnKNHBQRybA",
  "key16": "2wj39c7ToXPTBzDU7NQfXu5iMaV7behXmd1DPNRL9SYrV4nyBEPfWwLFLtdowWKYnm94jkhTAo5nGGTCBsKPEPJU",
  "key17": "3rXLGxLapR259Du56iStorLNLsoyvRGm6YAgPeRKhLpocQfHBRCBMTHAW2FMe8bGZRLqqX9m22jzWiNtpEJVXDCw",
  "key18": "25EBTcZtbhNU8kpSKtv92YDvAKv2Pys7yimxeV9c7962j45rX41cWm4YuJx5ijXM9ENbnGo8724DLDgSa51EJzFN",
  "key19": "3846iuPU4M3WuvwBMCcQopaPLmtmYN9KAR71Gr7EnZuEMGy5AB6JWTa8a2HnpFGrqrQ12vrd41849DhA1qbXPcY",
  "key20": "2HFiBUnwLL85DksguVmvbY4YYAj77oJz6Bi4HbP1DnZpcSJcewnJMBAHjEMsrAGWaBgAZNgaFDn2m29PYqv8ieav",
  "key21": "2uGnZb1ud1xWE31v1VmSTSy9AEhVaKPNz57aQazmEKUSmSZJMqp1ei84wX3mxmVuJwGbkMumhmKSUtmttscrhFKL",
  "key22": "56ZJ3BANwcopBAcDHyNdBPJVAxyYMJ1ckWCk2qb7jwSFbej7upzYU2vYS8U8WScMKwWG17b1sf1q1KTcsogvhgsU",
  "key23": "r5tTV2wgYJCVZMxGRc3ZKZCbWDdj9KLqkg8TS3k3oSNDmqYQsN6JJtsVyJoXHGVqnufpiL7pQohSWNmM2puiRL1",
  "key24": "2CsGKMkZJYRgaivbx26u6aKVk5hKX6m9LdsXpEzKth7h2Ja9VBCMcjxLVmW7qDn3qRxPXAogamMTxxL3yAKV5RvH",
  "key25": "4XF7rx6uTmYG38Eu1Q2NjzRpK7oiGdr8Hfy7LsmR8XBP4WCcZnhVPsyG1Zg4ktM6zocnveJ43vXtKbxgdPbmp6VJ",
  "key26": "2h2zNm8D6ub9FoBnvA7KALRS1Zv4xBh1eDr4e19scXrtWtyAonECRzAjnMKJaggvDuhf9DS653Jx2iWaQ51svSSS",
  "key27": "5aQ71KdB9iHo7qLUcKALuYYvjNPF9KYhX5xvzCXdfRUamZreyqTbz51eyRWRmqZWcojWVQCZMCjtqBUGaYuGk15d",
  "key28": "5AkAisDFvRix1JUieTbHVXH37gH53P4mdKeVbxsNrfWBGwbmHKwTqHaC2fu7UL6bkBMRYNv3gyw3D8P3XcJ24UaV",
  "key29": "2iw89uNTgvEwUXsQwThAZnriqSXz3MKAvemwM3FniH51exhbBxNT5z7ezbMYt3FcZfmH9uJ8Y8VWxYVBr4RD7pgR",
  "key30": "NCigg2wJL3xYpSqM89aoEi1rydk5id7fipZiZnJXcYPuZXAgAunLbw96nZEcZQhzu71kPaS9GYxjNrFcr4FYMPW",
  "key31": "3RnzwPZ3AX5jxiYDpc6zThRN29tinSp2qNDnNPCMLuGURmUKcCBqsvP7JUMRLvmzkLT3i7NpqcfrcqvZ8CW1W1Cr",
  "key32": "3gFWx5KFKmHqqmUTDsR9ZtVEYJ8YY1UVXz3Ezqe6nkLJDvoz4Q3TNEkbmfu2HBfKYY1iHYM4KCXD8goHmk7vNDyG",
  "key33": "5fmAoU8TRDUgkFuerm91tgZmr9KjDXDMBedXmyQMz6W3HQA36KwGw29QPG7YEhGxmAPi2sfJsnfr2JFEs5PHvAbt",
  "key34": "39DVmNYvm5sEzpYojrcfGPxnHbNkQeFpnYodN5NxvxsXinfFjfT6RGVzcSscr5AubgUrVSpP5gV7Ljyyz7oR5u3F",
  "key35": "4QyjjHxyHFR3ikwttNavuAyDJ83nsJa6Z3V7kRaioPibWUCPnv1oydph9vLK2DSjyr5fqG1ivpRQ7FeiEzdSLXCp",
  "key36": "3Q8vhxVEpoX4qYMUfLYJMRwUTfWCf9ii2ms1Xx8T9QrTDbM17q69anzw9dBbYj1Uxhhxqth5hWmHGo5P2N2dSE7i",
  "key37": "3F3NofntvM5mgMRLsaYvtGC8aC56BgQUKLd4aLgmrmbXvN2cReQ11gSvR29u7msq9MjPsMDbqS2usbdDp8oLHyXo",
  "key38": "5BozNJUk8DwAU4EMfSn8iFFELYwcSSiHe3Yaqh3uNQoEiTcgTALRKJUm8ru9jdXRYTZ6x54NaZtuBygoch2tWDCK",
  "key39": "kvamv4fmu4tBZSZdh2DCY6gkpB1LuGwQ13x2bg84aPcewikVua5QnLodvMbjAFacfrxM6PWrXaLe6BKKjyQzS3y",
  "key40": "2aAeDrUmAwxfwRh3GtJU9u2wvi77VM5MUtW5EqSq8Pgq2zSvHrUpR9u4yZ1qQ2vxgC9kf59U9cbB8kFqMR7BjBb2",
  "key41": "4uznxzgEu3vkSzs2wyRoAkMmNZzx45aFS5fb11vHNKtgypv44U7UJdG9vKuQZZaTfEAhjZZhoiKuboReLhfpg2sJ",
  "key42": "TPHiSvNEh6SjABgGELt183L94VpccJgACSBvGgeaMT9uSuRSYQkCxbUak1suuwBHjCwzBML6ASVv4D1gcArpx56",
  "key43": "61nFySZigoS7C5YDYRfhy1GfqpwMeXm5kfFJnsBtajSEU5szm8VmoCSPDMhgK2VkPVNdCL9fxBmTfpoGF18zwNPV",
  "key44": "GzcZGZBVJQiPZJzWc1mqFDnzJLZAgodLpkJAyXYutE3Mn92LvB9nszz3ADY2Jv8rJrTBkTWP1gG2qKe7RLGam47",
  "key45": "5Rxk17ot3DydZyweb25eaFLUoQbQLChywSHfv7wPmRG1if9qKzefMNBwMgNETPudotBG14tP4RY9sHYQJivCpyjr"
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
