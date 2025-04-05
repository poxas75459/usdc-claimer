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
    "TbEMrheGxXMVkuQxs87UGiiHp3wyL6eChF23F6rDEYx8hryz9qHiuEBoRwdrNCQFRgeXva16tiXws4zPTyEJbLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvjpcydeQSgxP7dnxzSnX3BAAxVTeYjRrgEW8XXDmtwRRwQfFZCwQyk76QsKpgr971m7sd2uZwFVWjJw4t9Sq7f",
  "key1": "3VPz8rX6HXKg98xCB8VC59BQUiyMnNvtAo8oTSbC1hv1fn6zot5ACb7jj6hWznvWGW8MurQFhfuPh8kThanZhCbg",
  "key2": "4CHewNTWKJUq5Ejqs1KrzKcST6c3r7AUGEhUW7vqTQw8GLAzMDMU1EpPdQgWoWSwXXUFtM7zREJUcgUcQ2VVALLF",
  "key3": "oA93P1kKrHsxayHtiptqm7w21oj5ZXniqgLEieSn82Xv9FsnfhsTeMm8sBrPtAAQZ5YR6LfexUNS7n1WrythA8B",
  "key4": "2iEAMRpm4ZbKpoG1rj9LwkC4r88bJR8k8B1vaCrr61ue6z8PjfaETF9vQiZRQPe4nrDRh5gkxSNPsS3Q5Ad9Aqxc",
  "key5": "ZucscQrGho6wGZreYQfcePyxTcpD8319ECvnZoeEemNYbbW3LYYLVRUXXqwpxhmXtyTRkLJtiuZ4wkp8r6bQi68",
  "key6": "65fz1eoBiWjxaQzjt7fMnJ6ZBup8eEx6wx3FTNJ7XUhWMEk1vtNHnJJ8eC8iP33Kb15BaZkSZ76bpWeCLq7m5bag",
  "key7": "2q6868Hh4LCWwfj1EGQHJM3EpqeyRYozKnhW3QVFpkLUNxJBidARtF5toMeGHMmK284fucDD8GE1U5bs93sokDyJ",
  "key8": "5eufVjASsL2MQ81hV3mUZTqoArMpmUCJRSos7AuHPKFhGBn4kPiwrgvVzCbHPKXonqEhzUQeR6DvyVPVzqHkuLUz",
  "key9": "41XXHxUmCBDKStt4WkjihQqSDBQ9y3PHx5gwanvSJo22ZDR2mg3BW515jwLh5sATLNNauJNUvhmh1ijRrCbMea6X",
  "key10": "2MwzqyJZ6G9WiwTn29fCyc7TqwiUghhC696cBSe7nRjZHM3Zix4i3dp8N5tLikn8P8xfaTgTq9NKp8rZw7msnRxX",
  "key11": "4X3F1gZfD5Sj3iZEDgEfWra65RdNfmd8dQ1FyNcVawHUkTzauFbCo7kpuQnzAEHBtAaRhYqct8LAve6G3Cc3pip4",
  "key12": "5qMr3XVmyUCo6hJCPhoRvfcyn6hEQwAJcHzh6HKk3zuihuwjd2hbmUsu2AKodqXwH6j2TEuJ7aJKFZRm1i7zLkTC",
  "key13": "4FxCNZU2TYeK4B3dzkKX6D9StohSBgEFhtKNcbfMUGWXYc6STdM2rqK5edJDuTiztxNknQs6W6kdP6uNGpncqtmD",
  "key14": "DYYnTsjPurF2L4gnbDvFoneXCaWaqJEDDPnQekMfXD5jkxje9mc4FexEqyQaVQTFELA2as1BG23qAZ7X8dEnvJE",
  "key15": "mHdYUCLZXr2zeofLUJm3mvgNdiA38dusEEVru1BPnwv6sMQFSkRezQLmQDZ1qvjgU6NTCy4tKQrvWwHJpKwe3Ru",
  "key16": "Ys4BBBpoeKxZEuUKj6n9X1CRUAd9iZHpywK2Zhu3CjpVyD8bNx3rJ82y8pbZqayZJbxnyqgJV2BJJfEDmAyyXxH",
  "key17": "pwKTYWuBQNiSwPqHrU2Wz9DWyazTz1f8obPUrUUdTL2WV8yqSu6ksuxDWforvqsXe2vMVSVwFockZdsBFnDd5yP",
  "key18": "MAf8csLcawVJNrQGXUfzgLRa2yGKTf7DJTdf4czzLTUEPW6fzKaQjVPiLx2dHohoCvLo8abDFihMiGEkBLhEM3d",
  "key19": "3z6Fb4yjsiwxn5s7bKUtgXf8HDc283XEiSW1UMdDujY9nby91gU3MAbdEfQshvURG15T4x6Zk9Txt9Gedwk9RtN3",
  "key20": "vkjUbGowoMayTd7HDRTSBH2HdeLUs5jTfYJtKPUoKuPiw1x3Gbdngg2aTWMrYguXUk4Qo3MB8pdGY19oHZD4Q1X",
  "key21": "2q9vkyoY1fKBEoynuqzWZ8pB623pmaYLoBDWL571jQYDwTbX5ctQ3iaHZZqhBpKPFG56qf1jCsS3pFPTLDP5wv7n",
  "key22": "2h3RzsVnmHoHr9eSaaVESqHN4d6fewy5TEeRWCBcr43CpeE1EUTZ94ie3xg3sRd8pyeckzdW547J5sjnrqstC7R2",
  "key23": "3UqNGEa87N5SP2C7QSNAhwQso2FNMxdSamZC81kQW5b9iDYpGMn6yXzrD4Eaa27Lvr5Ae6zsUCppP13z9fzErb95",
  "key24": "4pqK1H2L3vBEATMJYiakoktPoSbXaCDdeEQhrQDq2uHgSLp7N8n7ytAz6XDTbWeQ8mKymRxy5qkxV2fgHXdcLKuA",
  "key25": "25DmSVSpQkv7nEk4zLnB4t2S63xcREQs4FMpznr7ob7fVJ9BDHTVY4oZGsY6RagLxYmnGky2ZBEd8peg3UHdH75C",
  "key26": "634HY7c2NKwensr8zW681HK3HPvU41pz2DXaVzW5TspZ2k2ghKhKyTd6ntEHqv6kZ6aSM3FyBYmNkBfzwo772bXb",
  "key27": "NjA85PpKmpi8kASmC22yi27Ta8rk7Dr5kLRE8rxTPjAaAa4APL8bmF5HrC235GYqz3MJhvCg23NqR76Upu4VG43",
  "key28": "4QJZEETKqytLjqs3UrRx4oikApj97wWwmRoDmawVMKTzCGfxWBA9n4W88AgRgmrdKwhzEKEizhWcsmVe4T5FHps4",
  "key29": "ouhjkhDip6ytwDpc5gq4gX8cW77an9uxAXNNQsDQtxxspkjjmr4zwguE752hsPmLezQubpPq8fkZmiPfJCVvnpn",
  "key30": "4k5RMQxN1x1pEdTjEfpyTc3kxQGwJFD8uhfJKa66TrfJuxAjsVNSR2cNLQ7uEAxHPV8zgEVZa1Cdfr8zuhpgGNV5",
  "key31": "RU8KzqqaYQ5YEcty8UmqQhPvRP3jRVA6xDZ2BfNHQmSnJtMkEuDg3WzHJfxDUTo2ubCjQro3TB2sJCJTMEpxDya",
  "key32": "34ULb9U3pu1wde5zGaMJYB4dUHRdztnDvqZdFcs9nnusLVTuAAjSd2Y2e9W66dNPRu48VmvQ654tLY6j24PhZeXA",
  "key33": "5FhjoLY83PMd5WzQP9cvVL2AvRveZvmwLCvzyoLqWRqk1dHFxnfghLxGzY31AckgrKGFky5ZqaDyrfsDnDG4VDbk",
  "key34": "9EzLwUHaVCWrvHikpoipV4jnRPn9LPptMuseYCBEaPs7xKgw12DZhPxzsgGPquXTYvnWrPQjbfnRAnk6cjiyobi",
  "key35": "62cXm5aXmHnAibrJ4qtEojNQ3ZE54iWbdTZ99Jwe4s8J35MKbaHQ5b2BArMqwvy1KJSbVxgrYHVPoX6VYqE2Skop",
  "key36": "3cc6zD747d5FgKULtk7oT5jjsj7v56HJdwxiJJbRkbQaHovfWkchWcnrMnZGg8xv3thp1M5VUA8fvsimG8NMU1ho",
  "key37": "PzLeBpisiLoJQToAM8XWjC3hpbe2z2kgE3tAFy3MBfqEDPTSVxxqfb2tguMpmoZVojMtrbRqB41NVazb3GGj6Du",
  "key38": "2Tnx8cazUMLajeAmXC6mvGHFxNHPZdn6yGhBDyDMrceiQAAL1rLQDf2jCzZc1pqyYwCEyLqfM8A5CgaFFZfFUxzr",
  "key39": "4nvqQhq5Wk74HfVvyo3uxSiSJvt2TizunUeqc9tQxybeTgtweyEf5kYjByQxGvZoSFB9B34uxPBWrJ994hNkq15g",
  "key40": "67cudVJKdfgW959uz5CzLY11DhbeYqeBC4ASzCjLCVtY2DRsSNqQ3cMaR825CkZzxkf21URN5QsGmCfR3BvvtnXU",
  "key41": "66aCZekUPBkuVFV9XhD8dUZW7A6T68oiV7QGrP9YAvdA2LMNqqEib6YLPYpTFqaWq8BsGyUxEjgZmxYgkMTig516",
  "key42": "4Ty7vHW8JJ39u7f41jHwyQDxpx6mm7NwZMnAZ2wsTDwgGcdC6DetR8u7RirVSeaeAVqoGEKxsmA2LKvEJr78BPN1",
  "key43": "2ei9NUjfDZ6ymStTniCnwTBurcRQfJJhYuescjNeaduHHRbivRcChe9ZMhQtQpCm2hc7wbusZmahmf32Bt3VtGh2",
  "key44": "5pPdweTzakRs8QViAUbmCc4nLNVDXX24Q2Jtq2FPWiudPChFjWnR3NQ2K2EB9LodKkBvcnTW4vcZKhJVaacF1Gv2",
  "key45": "5hzTofd4VDjeBicTzMkJ8kkcVv9wirDadwg7CG4rhADumMGq6XHECyfVYdGkGcYcZo1bcQVExJ7C1kvb3mUESLnP"
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
