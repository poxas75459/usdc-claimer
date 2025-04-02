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
    "46nGU4sWpKdyWW79YAbGn277EfVKfv8VHy12bFL5mKhHzptF5UJwtVStHsUXvku1pkYfqRQj7LpDA7Wh2FGRbwXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ec8X8fPbn1tDWwt8FppjPsCGZWkVU99MXKtcL2FxLsSqQwrUqjBVh3L34GFZWdgADhk5ZYqX68mpi5Y7GinijJY",
  "key1": "285FFE5h87jRo656BAqpfbdXRKoEPSnBBAP9Vpz29WKR2XYUFrea1PtCTmXVSBraftDvVadmCvvn2jMSKbi2gZ96",
  "key2": "4xWqg7KRmS5kfnX64hkEz7M8TequixhrruQQg5m7xxqtKcaWrVmtjJPxpsErPCn3EcjTpHXBeeidcKVqfNpiZKfB",
  "key3": "3Mp6ELaGyqETJpcjpBihkb5gfKZfT3AhveZ547fb4gSTEkGmjF9pMdmrda4yzC7NReid9eqrxbKaM8xRdLAgnwJs",
  "key4": "wQYjX5UMMMgHxLVXtq2bcEgeHDZ2Nkvn7YNH2Mg4nF3Vi1ABjmsysjSikGUGFej3S6Gcdy5zXcDJjkTR5z8TW5M",
  "key5": "23Eak9iRX9H4gJuL68gocupDS972cYyASWFZjSWp4gDgR6J51fw9aS2HHBj4ypaTWCPTW7owHfooVDb9D1zsnR9v",
  "key6": "4WE2YJ3vVQ8EJEauvX6ankwtCTA5XvYy9RCA7GZ56A25XvHDG9mHud8QaMwrhxa7gBgvc8CSCAuoUx3JBGNVj4iJ",
  "key7": "33D2eD1NNMSh29ibeoDu1qEA2RZsHvXgQphgGfVngfDUM7ReqwjoF6u6Wup1ogGXFqJXbEXR5MrE5j9yqJkvCwU8",
  "key8": "5RMirwn5Kbb3dhnNUA7Mp1YYsMLJRW2aXLoeWWSWHvYtg5MihkTMoSXZPJuNKAarYGKaeGvk9YvCCXY4gfUbw1AA",
  "key9": "5WR8X4k4Y7jcTKzNBetK5PnTbNisRKnBGtEUhEaJZ86WTnhB7NGuwBtMyLthCKUpGT3hRtHjtq4yvzvvxoxsUesT",
  "key10": "3FvnrckZsyaDASxZYn4b4X9BZhA4iooFUvwsW4KVSTXfGRTW6BFRPKA4iC3H1nXXvJdnaDqyivSoN8kw2DqvDw5z",
  "key11": "2SYn6g7CvWESRXfMtgE4PGq11XNM6LUxJQXNadLMu81Z3LCX7XWsZM4xbNQdgcGUytSwm4CaLSRMfP2TAgSEQU4c",
  "key12": "32zwUn7wJP1BkeTFjRjgKZTZiBLbb4x9PHENguUD73RVv7p9jy8FCHTD6Vw2wDWv8WNooyDRbL84yztjbvG2NixK",
  "key13": "37HvyU6qfmd9hazYuVCX1wyKRADHadYjEgRxJaqDVwZkanY3T2YjDJrd8hQTM748U34bUxRpBpXsNp9MEmteeFkT",
  "key14": "5P4TqRoxRuU37FHGAfYSdHNJHkxCdWD8wYJimmMJZai3gm7nN9ALJcCaegvff1C9EjXRnbEjrkXufyEcioxF3VKr",
  "key15": "5kvDif9HV3VPwTimbzBLy2bcrYUTfsrGddGQXipTjH5Dp2769YJiwoZKyfb75UWpT8mQUGnyc452zTYLMQYCRTGd",
  "key16": "3YeFGh28xMKvzK7qZVpT4LhCbwb2zpNWPCpykqSZPWqrnfxgW5oEZjNRjx4KY63Kfbo26Lxcy3oNTzX6FjjXkSND",
  "key17": "2eFX5g9V1XqcY6Bkz9sxohe5s6EZVvtbVk5wnjZGKZYBeA3YPmf6T116455FbCxF7zuWPNSGBWLzQLgtpuK8VX7s",
  "key18": "3uVBJbwodKHLMSsne8uNDXEokzJ5F5r8dd86HbFgk8rXy1KrhRUTJE7W7GXKmZsyZx5cxtPSkNfuNKaFTyQpKXvg",
  "key19": "3bnm276P1MHCvGMJPPbb8WhttzTnvsfdHiXFHBipoufPNb8mTMkGAyVMbR8QDEb8k4n6eNmBnF5JPky3oddxumf4",
  "key20": "41yGYnX7sD9z6NqU52BFRu5xMDDbosZXLg6wPKnSbAP5M21odw99ovPTfX3m3pTXXi2fh8pnd9zNAmfXA49UD2GL",
  "key21": "5afUbKafRHupE9qtY8yGoJkdnuAdTFuj6V42ETsUg1Uehac2CxHEuWwTKrKmA1ux2Ho9LthMKVXN57DXy2uLUQkh",
  "key22": "2sZX6Bir7keV3cuaWWmVHQpgi1sbjExbC5bgBQ33KLdm6QAvExrFaHGRt5VTwmQviB2qoin59kFWtLy2ktBmKS7i",
  "key23": "4amnfawypZTSMkjw78Ye5N1nrHL1zxRgEFhc5ExXD64GmFpQMSXzfARt37EehUrGNi1izyzZQkVQTdXVQfLg1XtK",
  "key24": "4bPLEYooq4eS4BEPUgXMxhr3M7coXgn74Kuyv9f4nrUTmFb6qQLLrUWoPG3xcJudLmgbtc8Sf1Epj8SJdottU82A",
  "key25": "2Hu72tXEPvSxaYDPkn39zM7gqcYj9RMLdrdeYsS48xyuFVLvRvpZJFpP47aDWVo3g6P2YuFUP54AvDBjo8T6w79c",
  "key26": "5XjnncUfHJsKgSgmaanPy99MgDkTJYKmJyahW6D69t27kwNQdFH1NNRD2P7nvkXNtTZxxCe5aw281JYTr8JVDxww",
  "key27": "2BaZYEuavE1Hbkuhc6SUzTcKYCSF7T2wZPYjorAo1E92Gi5wLN16uDrfRmcNZzXi2W7UdYnABNPJrmeD7pv8cunr",
  "key28": "2Vnc1mFk62SqMbYXroQfku5DC1brjkbojFKyHNLJixr375kGgvPvmGwGFsRSRRAkUVbvuEJpxGBhVb3bnt82cFkz",
  "key29": "3PS72n75fdkB9KcWcrEwATTiEzcpSfSyuYK7YAgLMqpm5RyydVm9j72xzazP8LEStuTu1TWmCgPqmYSh7niUbhv5",
  "key30": "224KL2Y3B5jUrKEKRMSx43M7qzE8Sfu1DTHcNvaGnsFqRDFYaSFYXxz9xwvtqdbNFV5enMfhEGa675waC13YKZ2T",
  "key31": "48LFm8EW7ZKCtibr2pY5UbCP2Bpd3LW4PfU3XJqET5fKUx1PowDXMrrLJy7GLnoyu9w5iuVk3fSikExVfov3WuUL",
  "key32": "3szPovMxubYHDEvseLcmSrZXqCS48bECWMHAv6ENrg6fU812Y5JFjRYKCbujEhkHPRenNjJDy8zzxvkFAWyMjWZE",
  "key33": "5aSmPZUavmFqLSXKLZL7a5SCKF1ea7A8G8QX5kCATkqoS1FTGNRmxRQ3e3N2gbPgPLxPTabcXYuDXSmJrVgrQU9s",
  "key34": "47UZ23niqToeDHECPR8tctNk93fbdMDDHZ2bvWuBEFLSmzavoLotvGCyo5swD5RyrZsYiAsDkfpRZYUuys3syWY5",
  "key35": "3p8EUqimVnWg8o5xSsFcqczaJhzDNb8T8w1dnGYFV4HoisnDmaD3etwpqD6tDh85J3GsWKBzMNbwxKrrBfBatp64",
  "key36": "3sBCgoHbVfLtHRQFQRqbJCfyhcj1pPRXSewrxCEHivQ66waHEAN6Z7ysoEdP64xP7RcoVpXxfauH2zzngnz4c89T",
  "key37": "4vuCMwtKp2siYoQ6NbjhsSJaAwGMuFhRdyQKXvCiGvDbMAHbQCnyUeYoVAQwKhUkMeSMgNTEz6bZ1bAYdH7PT2Qk",
  "key38": "5UtWepT2nZQEERvakNETTwBPsypRjukCi954nSWu1PoRvjNF64SQuZ18zUfxsgWPZhUcMou9D14kdBe37uDMaxsA",
  "key39": "3fNV51BNeNNbpABTeNAaAVwi8GQSv8pfetLfLM1gqMQQcUtqGuXuyLovfKdjDPv7mbB16NdrMPcECuxz5NuUHCwf",
  "key40": "5eXUKcGNwsT7GYyDuyQYXru86ZnmmddcZiStjsA8BxKrBQCkxUDr3SHSA3QZ3JJnzNU9JT6D452xoKN8zcsPXQ7C",
  "key41": "14HvAc8fiJa9aub6SdYmSCRzEpsfY8QBbg6Fsw8nkbUE51xjmT8Q3dRcxFd2QsMti147SSNZDP7CG8Zmqby6mum",
  "key42": "HAG8djeqwgGFnHGfFRqR9UtD1UbWMoFn1GgYSpPuqt2S2itTiWpC7n1PdP75w8QZnyW88ZYon2C5kU5pMjtLeh7",
  "key43": "3UFbUWE91Y1AUsL1wmphLskFPFRB9oDcd8MpwBDUGHih9KxFuvD3tytYWMADG3pk4nEWHwvRffcv5MWWN9gpLW4R",
  "key44": "4cwCTSTK7nSFu2Gn45p1Tg8h1ZQN661vCF3jWy81pB5rZvBgoh3SJpcxRhePh6VehfajWX5imuSqRTBaYAGj2w4j",
  "key45": "3w7DDkczCdsYw4EcFJ3ujVe4pbkSWMKsbLroTWgS7hFKfSWpAQpjsqvQM9qARMNRZBkUxXPTYUEuarYxcNGpxqpt",
  "key46": "2vG2YbKYM8h1WPn5bpE72tCaFgawNhU54Z9DKQEsAWk79X6koXPRkNMgJJNJ3NucymNtiEjag498EVdeprVJoWgW",
  "key47": "ramLQQegLQT7bjVpSXjJbHnyC9zhjQDnzgdpEpFS2VaEnRzHEppqohkVWLq1JDgw1mWuzdi1THCL449pDqG8TmY"
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
