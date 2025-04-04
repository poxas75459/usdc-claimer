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
    "62HfDB3SPGzTpsh54Wa6o3UoixVprg3idxfoWGu8mU5P4oEWno2kbC8NjzSyYBBEUfxNTv4C4t76d5fFb5WXvK8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeD64eNb9k5Monrd2aWSHZq4hZnaiRf5wVjzZqjvRrNZWRPYXNwHWBggBvkCqafoRgknrsZye6h827B58Ks77Ec",
  "key1": "3sfefAMxbQr5tjo29hZuNJo9fmmvvMjkqv3qmmUz1jQ9jV1aq71Sn2egYJKyzc7zmZi8uaHnDYtybpCdj3xXM9Uw",
  "key2": "57Af6MpLUUWYPQJaz49rRGY1f2iqPsPNoeKBXHPH6gumbCCTuhP7trxCjKJ8kLqBnYCZroBuUZKHwUYG8MDyGNgY",
  "key3": "itdsh36yorbRAam7t4xQTKogMvWZQuwDRw9F4DS21PonSceqmcT9adtTECWFE7CobafPZaHKtMnP3VBoNv3CSya",
  "key4": "66XFUByj8Sy3VMpdLsFyJ7k3GnaqmfWwbhwse7t1Fu4S5LTuoFSvmBkjgAssS3bxWbFLUTM5EAuVAoEcfydB9UrG",
  "key5": "2ShkekU58EHSJnMAK2LaDucjQgotsys69P8SCdE74viLMDQriteyjwk4BjvcpBXWebXWnkZdD9cgQEmFu3UPFFEq",
  "key6": "2sikFZa8zDdjQRsHExkRieWKqVLiAsGUmm2sQpfSYdgTGuwnj2pss3FTNWRR88G2Q23xB8s4m1HGG95GZ6aaWaqT",
  "key7": "41HrobZPzBK6d11hgALQx5apjwdsHhjLY9xbNBnjrPj5eQF9qAha5da4gVjfQFmBHdGLvpZ6tAfoq6yJjUtQZHew",
  "key8": "4qwX9QCixuo51W6MrocpuQiA5cZRBSUxTsJ9UShh8SJ3vEN1A4VA5MqcCV9pVgRrojc4L4j5Wh8bTGgq6b2yTf5o",
  "key9": "3eRmcpHcdoTj9hMwBk8cTXbPigwUMaVprS2ePUkM9yfvQyveLJbfk6xTArxn4XibNstujEGMavxNPXAmQk7JXfRt",
  "key10": "3eZ8hrnNE82SHV41AkESZN5KjKevwZSerpEd9qwZasCc9wqU8YSMf35MumfprYeyfpYnKi29w7fTS4iRLHCykxNF",
  "key11": "2HEbXbQGSzGNJ7KJyDDEJprp7TpnWVbyGgCdyEupZiwsh8rC8g6YLGqofmDxWnRRYCG8uqRZQdzF3UdQwxxJaL71",
  "key12": "q6aqyd1Goj9QuXzPS58xhPP2K2mbGZRhW5nfo6qG44quSApwTAu95vtSRz4UzNxAhxhW4QevRVVzsjpHENHCx7T",
  "key13": "2Vi3h7Ad4KJqeeyAtVvFdhE9cEnngLcPHd9gEQGLmyS8N7xMDgpj3x4tNJc7FkQHT2tM689zA5i1UBkVPVvtv4UM",
  "key14": "mVzkpP3smdQEFjRE2MRTVGkeXLNim76hV1pgg4evkFjVCofA2Hgam6PSLV8d5tVjaZcUn8aUptJ64YVcBswDcQA",
  "key15": "4aGgpYJoebL1wz41jAEeoRg9M4VLKo7YyPrj88xHyxamQRfZVVGU31amTUzkRNvkFcEpHcNVy2e9NBagfGhwXv87",
  "key16": "Uzt2cgfniDU1EtrZX6Hz88vJVazsnk8bP4TMg1x8FhBC5k3t3uNZKyfk5MgSQhkryxFkwPQ6hur7ZAbnZqp62c7",
  "key17": "48iUx87prnBoe1eDiKK15VTLk9scxtv72P4LrwL9B7HWwTNkcEDxyXKqZ7m3jtEpqBFfQsNVZs8mWRXaUbZ2tEEp",
  "key18": "zJUkPDcvuwrajWhajPxzGwiMbWnMxvinLpknFsJXS6Wx98oZPaFKEifg369MGtJGKkZCVsnm2iUS5daXd2vLRMj",
  "key19": "4W9BUuo6YuHNWwZt9W3bf8cb26f9eqm6p5PzaXX3gF5rtnaXatpQKcHvaLkQiQLLkMN8V9Ad6YAxQbAjPfs93xb9",
  "key20": "4LPEGNHwYpgSsH3D6FKE2cXWNEEkGGmbCfMpz2BZc4X8DdZXr1Ft8VZRTVJ2uV9DwPQKE74xkxvCAhoFzFgq6NgV",
  "key21": "5PT2uoxcte9q3Nnce3Yai5hU3kKZUv8ZchmHw1NCaQxkcdRNr5K3Vsg7zrEQznrc51wvSs8hNXZpCbBiLeSjipJA",
  "key22": "5TwpQgU1iURv56hYwgg8QzkP8mp7rGsXA2QkMHCR8pQf9utBc9pPCgTuskCs3uriA7oB1echSyKXQZTG9TtwCTE5",
  "key23": "3XbAfEAHWGs4643c1iLezEvDrR16UMRo4GMKQJJkbXLt7CeN2sRp1FPFgFkEPWrmBsFvppH19c2yfXXgDo3bhM3X",
  "key24": "4CiQoixUMu53ttt8pDQp8KHFiEsfsxFcboKagESoi1n48XG5m71wE5MmBLbpoKhoRbZwqMW9qgEPx5zL1NPSF4R5",
  "key25": "62g1nTa1csUKK2f7wKdAR2cxYdCfLTQpRA1Q2CcxLCpgXGtS7Y98voReaCh654sXpypoEyQvUnbN4WzYrvzAQWYq",
  "key26": "36Vp5a1UgA2GQeWbErR3LRTSpHZix9XrtLCuM2uCvpbxU9u37YhDmCG13L2XtZ3mWniVF4LqPppPweucKwh7Rmrd",
  "key27": "8CH6NLzti15omYtZnLUVQCmKFbXaP539s7R8MNBPeozmE47kLUKi6CDoQ3AA6cFYh2Q9zEQxBN1hUMYpT1oBtcC",
  "key28": "2jPsFp348Ua4VXw35mmSZscJyfNwBU5JMgeZYJURjhppaUH2PG7aU3HBTinx6dpFRvqBQdCYNnHGgCjYAeKNncdg",
  "key29": "2AMoTsk1xeYdhKH7ygTyYG7Wa7oK3oM3tUV9rS6tABTB3n2BEnYvNU5othskNdRGAYicTj61skePdj8VTwVwDhsr",
  "key30": "42N3RnotEk6uiCCLHTNdA4Tu7dsiknfSNx6p8DnLsJsorokLab7nnBwY5Edm3AN7BdqHYjpsPWFSwkAc571s154x",
  "key31": "5X5KA1BmMfrzykZ9cQu1RfctnEkWuA7YnYKyzoFrNfReeZXYLsYfUn4vQDm7gn4vL1UjLZ2nXewNnATxPoYTCj3v",
  "key32": "xS6rYR1XQ2X76ZsLjs9jG6yN68rUxXKrcj3AgF5y18D3Sc2vGuFRyr2wrj8ri2mUcdvNn3rTwhX5KcRkJw2KVmj",
  "key33": "2752nAyiztdqkjFZ8KnSRAvDcPi6bQhe9dCKGHW3xcAWtRow9NjVWWZKLjcM3GcVfTb3SfbEHGrUYSrgaVEag9Yd",
  "key34": "R77ibTvYqby2GC5a4yP9HHw9SqG1yYmwgehpRH1GAamaBoYZPFM73jY1HcZ2Kic9bu3MmPuJ4H4KSnnEpHk6jQ6",
  "key35": "4CiZKYQmAJz9RuzQRinRgqVwGFc9cP6DDejWp65g7cEmh4hXGKaUUa3uH8Qr7gYqoD1chDToHhJ3gP3RoLvKPDAv",
  "key36": "4uzGeHyXYiEAg3LJpHckUWDvArbrFGK66yt9j8S4aQqG2Rm2xTXW1n7LvuunjWT1TpRsDfERVhwckE2t2DpwXdKt",
  "key37": "3XY6uWwMYBQrqckKMhWRqnbTKLaKx46hsain6ENZREmi927a22n2dh26vrZf53vHerpSKRzWUjXkZTQfj7npVtVy",
  "key38": "4Gw597sxo2vV2zgR1jBJTgVtEHGNCMzbhjKi6cRsxCs9cyVLQV1Lpfd419grb2bMTFjw9n3jZ2jrBLQG8WBSr4ub",
  "key39": "4opzFWxwnSKqEmwhNhTLbBg3tzHGJ7GrkePMdHCUKZULfL1ctqZYFFjZASfVP87jecms9zUKNsZmcG661uccqYvq",
  "key40": "3mwgDBB5wqF6vwsD2NdKHMoQbtcdATK1FT7zhcKXYDKHE9Pajf53RvyrzFPsnVRFb6nX3ugbGejwvU3XLMZ1CFjy",
  "key41": "4jgu43aJrb7NgiekeCTDSpzQ3zcUzXHNs4r9G1tF2MwmLKrY7yMTtBRLVT946nprzkHRL59LsNatPHWAPx1QVtcg",
  "key42": "2TnD35YX4e2RTkFxfdvXH341RwRcMQLW97HPHgYUBciuC2K2M4TxDQQRzoygJuxhv3A17dJMriwFhnztobWAPZgB",
  "key43": "4CHmv5FcRWPZHXEdhfmgMjTGxHytDUAhH1DEi91GiyCi95zuta1cq6soyhcos8sxPVa1V382rTSgycowCyTzoYLs",
  "key44": "3HW1X6vWqmCQYRW3pTaXCL3EDtFenYB9XQhTZ3q46ZhrCs6ffmdjw6Ah6zj1LZ2s8TpoiHsfGhDzjjp6i9jR6GJa",
  "key45": "3vTouzFFjVHK2ZQ55HDo2zif1SRRD3MUBc4MZE1o8ipSWFuBVXKWui9tvTSA23A6FY4S8ijew3gw9f7YfbhDGj72"
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
