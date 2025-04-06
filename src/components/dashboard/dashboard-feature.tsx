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
    "5ptom3adEPgHCfvqsqsKAWzNC5xHQzrgPLTmGDJLCob3ZNc5a3rKQ5Ri26NoVPMVtkNZAW9TCsMZNfSXNhW1MP2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBmjR8gHsGWQMNnrGUZCsp5fK6h6D1Kq9LaxrmQ41i226yDLHKPAT6aC54b7P9tzZGSrjbV6mg6xwW8M5zjae48",
  "key1": "63biX8WopU4szSLfm1vNCJFe1ANqpgi6cks97mWoprHtjaxA2EZ6CA9t5NbHNR3PXK6sNZJfG8uoNpzhgxb73Xni",
  "key2": "cP7xM1rBGVVA1nftYvGZnCFRWar6kdPwLrZX26kkEzJcQXxFcbLcXRs8ug7fzSs6YLApPv7mjRn5EefKYisHvFY",
  "key3": "3J7GGESTCnJcS5VYNoByVRVXG3Lzycx2yHzFXTUYaEKTTVsPTZnkwiWm2T43EhBejwpecQpxr9hww4fH3skDGjn8",
  "key4": "3sUobDYDMRiQz3VeX2KHMTdfSjzxWUonVpKnwWmo7N5XLu4GNMaKz6DA8iLuFoc2gpoi1VzzvVu4P6ow5uyCKepH",
  "key5": "5YkRfD1s5psuPNF8mQRnRzH1TVkB62yvxnVccwjzbV5NSXF3DX4zsyvescRjRkQ2Ft6yocDCBgBySbTMUZSjyhCt",
  "key6": "71DUN3Z9icwBSNdXM1itjogK41sZ6UWUfgXEeWxzcp2SZFAfz7s99uWHCGuRUFyd3eH51XrugBx8fqvpukjsrrx",
  "key7": "65JuFpxioHcEymec4ic6rwMrzAmSHa2X5J6vhaL3G8gShB5y6iLURAVPg9hcEzAUgTyJp5TBy9Tjov956NqTMf5z",
  "key8": "3yrDzonLAR8pvuq6UzUMRPcw9RCXAFpZ2ubspitrYyaz6aW4BdaQLgDHoBSKdJCNYA4uvGtFc7iRRbxX9LSc4vnK",
  "key9": "5YqB5TJo5ksVDPdT6Dp8SWfoF3zyM2TEBp1YnJYp5p2gE1E8ZasDnqdn975uPu8Abx3uJtVknX9FoEecoGBRCjs",
  "key10": "3ZvhZV9jcfUQQo49qDwaJLAWAFahfKJhZj399iGL4FVemktqr3eoDqjhwgZAH8CfVAqEZ81iAVYGpCcXNRo9MZrY",
  "key11": "44QsiyjeoigCVo8syiUQTC2NzXhS79siXfogyuGFou3N4RfTycp8FKHyw7Z9jxRRFcjSTLRz2NhPmi6UvwiQPtnP",
  "key12": "2ceqgtHkH3Lmn7uiWmthd4dKdSnkhbrRGVYDy8kRbPmHfoZvjWgHpJeAF3AdLJnSLbJLeSpQReP2nk2JEvPYoFNT",
  "key13": "5HL1W6NqsKeNGmPZ7Eia5a53LQtrWH66iRh8ZWJy5YYoPywAbiyAKq4PT9Kih1qnLs9CxTbx9qPj93C9PzJ8HkR2",
  "key14": "269JLarEHomtMpXDZzbUGVixoWV7SrR7qZE3FRPRHawsR39zkuxAAYnjxtYWJtL6tGY6Q7Nd1yLbjkEAy98Pyb7n",
  "key15": "42nmst1PUhYMNof2MfN5oPQLnSrKLhMGv8szRNdmmFEmgpqcJ4E3HBFWmiicM5dLuQq6rekpwiTT6bhXn2b6RFBz",
  "key16": "3ixkP3TFiYQ5TwHHFi4nZvQBcg4EkoVeF6dxwnG4mtHyGMnpfSfpYoJJS31Q5PQNaJRxd5xtnyJicLjohrXNCMHG",
  "key17": "NdocdUSeT7s39FhUdCoqA7PKa7xTdEi6tq5pFHbaEfDmf7fx2kuHvhgVg3ao9iJDu4fKN8qoPAMTag2s3RJ9WxP",
  "key18": "58WqX3pN5sHYA7HwrfxmNa46vwgTacztDJ2CcHhmmUneJqvNa35Pzs68Ujri1ex8gX9u41HoAQkTgbYK5qhEHvJd",
  "key19": "3HFSQVTjVSNPJDQ68ynAi42wbDFMNYb7tdfYCHqsaJVABebX5d1myXpmk2C8v9N6ExeuCXT4omtfHHY7SzFPHo4y",
  "key20": "25ssXJJhJBfmqW5uxnkRB4qxFJTioHKBxSssWLCxUqYaxD3TYVmcHbnwiFskJ2VRt9nb94wjDGSmdoNxegRaxL7F",
  "key21": "42zaLbQDknEEZGB1G1rmb9hBn2CgAfpKbJHy73P11vT156mNbWbcijLnD4aTmnJLbh29ko6uJkNZ5VjaLasgbEmG",
  "key22": "63YQSSsWXHsXjWnBeCr8Lv5j2ESfB5qPwHNJQrLEb2VgZHm7zpK3XRMTyp1KmGsQY8NdmQnxks97Vc1kt4gMRzj4",
  "key23": "3wmX2V4Yd79BrrAXbH5diF41BZCpsx3Fpk9G7HP4iDgtKZxCJhzZwgMqQSgxR6UfzRMJ3P6Ep4gnMtyWGMzwX2w5",
  "key24": "3maUsBn4QLV2KMdaDyfDuK8QS8GNezk6SxPANja6HMM8fzEQpNVbQgLwPrwHpUCXc7Qosp9KS9umWvepViLAHLYQ",
  "key25": "4UAFR9oL24fX645MCQxAxuJHa13CepnHT99x7UTa8xDLKXgLvC3sxVT9PCCenSGXLHFcbaMdyvTtf1nFzPTevQS5",
  "key26": "2iaEa7SQyvDE99xuBMBN9eHkXv4tW6FR6SdLTnRAk5t9hMRF1UWdpdLzQ5VYGn4gyPVxhvofgtWxHsK2Q4H9xVAp",
  "key27": "3RghnU5y57mfLP1XQ9aeEwAQVa4nQJLZMpRFhvwsqDtfsAZCRW9UUaHa7TWjt7339D1FHaqP8314uJiUjT7urN9r",
  "key28": "icUKp9RQ5aWrezYfeNLkbNs5Vb5xWPFFCQ7AXGVwrZRhsD318nZGjErs1uJRgQXGCsHHRdqTpR2p5DVQiVKf5n1",
  "key29": "vmRKndVtAvcKVcxGmvWzb9EXXz2MZ2BSmz6Hm5EQsaQgtyTh3tuZaWpqsTufYHGHFMsHsz4g5ibhojHvws7ovxU",
  "key30": "Xed8nLiLo85NdLgRFL8UaqEKJUvcGNMPSRv61u4pP6iTyHvApZHxFfWvmrvgj8JktfqV7mfYGYF45TS2VsyFRhQ",
  "key31": "5FurdnVJAaHFRQfcDN6dSF1dQ6YRc3ggB96S74dEUgLo3E6ZG68MDFRye7aGMt9Mm12crTFee1HbUnhdoJj2gprs",
  "key32": "2enPBXxA6FbFDYGDi4dwbxVxgugGXQy3iQku1w1wz4MPFpzkevK6cLErZdzQE8v5KggnH3S5mipNZE7qH1QGXs4V",
  "key33": "3HckiJVLKocmwFx4VEKh2DrbrGfbkjrk8q87Lj9fiQoQUPeedGhyjbDMBECt6SmD328YdA1Eo6VKAQdGdF8vcjjY",
  "key34": "44szLPrJRfRsJLrMYBJpFLkHQPK7Zh19Qva3JdLZrnRa8XZdWMyVKELdDvbbwPzb4YdbwcAUUSCFKcwGMZQyMMgJ",
  "key35": "4fY6FhUWBtiSKGhywvAAZWcY5CxE8Wd16f9X5ibMHPkGXrzr2sfdfNX7ZAxA9iByZ45FJVUoKkroa6HajtTJrVxK",
  "key36": "5QL2ubMEMNMqwLUDrFAikuck4qEgT42L6ZuA3yPfCyWRYwTfhSprrL95URfu191kN4trXGXoehtMjLWR134uxHLF",
  "key37": "4YkKWiQ5RrhmFzZ2rjnFkp1cP1R5MToKdea8SsDX39A3MmPLFQeKSyRksNXJztJeRiL1tiSeeU1g3zV5xf83TMAb",
  "key38": "4fZFTquobgyDxGXv9zFZqTYLYjHWosj6SoCmbiNbWedBYdZNsvHkZrQq2PVDbvCSbebn9ZEiMdUGKvBipQjjvXXi",
  "key39": "5CiGFAkVbCi9BsnpuRakx7RDZHYrV6kyBBbqbf8amCeJuWvpTgUbdr5ScHHGTf3EJLitJ7GdJanFL3E69S7T1b7N"
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
