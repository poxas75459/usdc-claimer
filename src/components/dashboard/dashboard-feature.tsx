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
    "3DMwyydphzSYUJrwu5tNxuNjGXDRhPdTDT39UgaY2tD2hbBSRryiwyn3X4fGpr8Xk8PVRBaDTMmeG3JZHsuYBHLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzQH2ZYeNW7KfYjPq7vSHgJcrV1MDRuPu4EjFCJz3rNMk6KyupGxAzw9oxHcMWpUrf8cWKkSrmt9uS1GBpwE1od",
  "key1": "2yQjxcDCeA2kfNRhrQ252XCeopRbfrzRawrqMbfHAsb53VQWJ8s2VZZrKrRJWjdBNPvcwjT1AyqVZQwvh59HsiRT",
  "key2": "4N8heTnx9kg2ootKzf5px6fnmTk18zK1qz2Yimh9abYtD2kX88REAXWJZ6FZa4EY8vG6BXmvHrjHUyf482atabyK",
  "key3": "4tSbd8wKu677bRKFV7mAP6VkevTJqG8cbwhHdtDuRc4FBC1DvcoZwcwkoi2tbGMf44WsA2FYnSou9nNbgM3tckSy",
  "key4": "2mYZy3VkWDu9uty9eqZmHz3dmNjBrEjttu1gkd7cLaBAQxwZSp6oR1WvEtNbgsAPJ5vS6tJmhjSp9fKoqmPhkuZD",
  "key5": "5zrZAPqmQqu8TfyNYZot2EY7goGofarcdU3dyB7KkB95aU26kX8T9DvbrPqrJLengo4wNm6EYM2DyKJGA2DnrLwR",
  "key6": "yRBcUL8NwhNQAfVHe1nat9pHRmiZf5Xa3jF2sX3chZ25YxrvkZhqE1eZdZiKv1BGJZHraq4kJi3BQbDEiK2n6wz",
  "key7": "5uUeaCZiGDWeM19ieeb7djCHaXPAwneU2uU9aZY4VU2GsohcFZBK6dyGBZRJWUJBaoWvHdVs8tQwoXs4MCgUPQdf",
  "key8": "5xHE6ZB5TbxE2ZDtL6aB3a2y5y8rtc3ryC6SqE68ur5Tk9DL7pMkbDbt4tRHk8zgTmJkL65vNnewK8GHZb4VjKSd",
  "key9": "21XC14sQhLVxvYuF6Reo6nYjzqugo7RgSdaUH11hqYwteeawgUsg8rVJGqM59psXFvCaKUr6rkThCzXowan3LbCt",
  "key10": "H9DER7vfkWPaA9mVCwdeHGaoQffTcWeT1U74AdHGTRi7KeC3dnighipnPirbhREvDX4WNu8u8egtgxHNehJgGJp",
  "key11": "26Jo2meFvZvh1byhqcXzmxfR6BuL15BaugQr17thz68myfibJAKijuW8NuJjZ1YFZs2BKChoGVnJ3oQ87WLwEpgq",
  "key12": "4Zd4w12YLV6KcQBo4wprreDypcFW6LAJcs7sENaHDSRwpW96EZ1SV4qri2u4t6GmFF6tKw1w53bkKtrYWzF1T5ou",
  "key13": "Tq3C5URpf8WzXGcJSi7UdHFV4NvskCzseJHjbzLBoVeBkyu4gLKgSVTBv7tSCwU6g14wkLoQV2oHLq3yYW5YRTJ",
  "key14": "Dp5Eej9A3QDfBQvWfzd3z6vVfr6Mu1WUmZJpfo1y5PSNDuDmr7uA599NSiAYHrav6HKDhhZLCYW4imPCxc17fSD",
  "key15": "2uKsV4r4FiFBusqCCJJZXdEt3d3TXc2DV6rn7ijeV4cwA1pHQnA33fLbBh65rMhZkCHYptuCKhKPa75LHLQ9cLYp",
  "key16": "4bmVscuamKYN3Q6iPy8DNkfPvi8ARg5f2kus6MTf1aFhUG8rGmPyyBzdwUZqbbCSYnGMyfesZAhPKFtJfvZU3CTY",
  "key17": "4DzvsnRE8ix5xVVjN6vD3esYcSWW5WhWekAJ9KFcAPkJwVL2VSegvhY5Utp3hotyvec45yNrefeZ2G3wjZ52fjrh",
  "key18": "4ZhLiYfUNiiyTT5sFF9gD2TaRA9RqDPfAKoatFi3vtyWUWE6P4eK8mQ15bTFKUN3XpsGKHkXigemgyLVgsfUH31J",
  "key19": "2jryPJKxpTn2jruWJTarM5vc7Y193ggGMHwMB4h9M8BxypS4sMzqYi4Wy7fVLKrsWD1DiEWnhi9WgxNJ1Eq3wioe",
  "key20": "5FXub8ZwFMpp7yjqpjeSHzfqjw3GD9SWG8XPNA9aKdCvm6AmERDGuo1d8HrMte1BQnxtGyQkHkm6BxpsuU86N4dh",
  "key21": "3yA6muKyU7wSyUsUdPm6H4exCWJ3vEbakLaMetpWPftep2Gn3aRUQhAXqGWQmrn2AUzWWS8GizhcQsDKZpWpcZup",
  "key22": "5zhAjU4QRvEPATFDukMX5RMvJnXH3BgwX8zUevxCtCTap47RfhK9oGoZgbxMeuuiQmQLw3DpT7hmcE9jn8WYMioA",
  "key23": "jcgiea82sx49YqV8tBaWeM2WtfoPQpZELAPpscqfbUU7YsvWJpFrPmq2AkbD3LdmnTMNDkNcHB1poViDSNA4ngR",
  "key24": "5xfuzDvfwhkYF4ovaLQzewJpX8SsmbmjNH4mQ5wJxx6Ku8sEDqhgi85GESWCtT2gr78BS2LAmzZsQhynip3pHCKy",
  "key25": "2f2e21Ksf9PB7nEozC9RtB1JdUThg2ueFPuS989A69caJNyNCQD4MYmFLkTD2JukfEF9o3fYSgxYPrdeByde7Soy",
  "key26": "NpMVujLQ48CrDmCiGJeFiZGKU5Zku74xEgBCB6DajAZ4bTDxw6rBdMCXZPR94kgDKhjWeoGELprD6yrBFLF34qJ",
  "key27": "4cev4sTUZMq32AVQ1kqsZkJjwg9KiH17ViyeHwuAyTBLcfjJRykM3mkFUS7irTBAAzRPfC4TXctC5Qnspz3yKfMX",
  "key28": "HSdM97geeXbrn3EMLSV3Wsrmanj1Dign3V1jPm1Wc75c1nFh9CGf93pPPsQYtTyZJVacanpcQD6jBvmBoHVFPh9",
  "key29": "4jgaiPmjfs8Nq88YD38HLsNuok5z77TrD5HnfMySNdtAevvb5KMV4mTkgM1n4JoyztViHhLfbUyZ2tpYUBqwNc7P",
  "key30": "3kguQaX1Dtwh9ZKzrpmRNBSw3pboyZ63z3JAizmsuA3PqWdbeajgJHFXvf14FP7cqXzXdJMvH7NewqpSJAvGDhJ9",
  "key31": "5AueCiuF819X4UycnVcs36ENHWH3sUmCAoGADsNfY7RgVfuD8RETWcWSTcoq7pLqpxRwrkmdj7ihL8k25X7RLKHR",
  "key32": "28uXvp8SbRMN9rkPecAA6bc2SN73knPQvJsnQofBvkTticnmsubJm1tdSvHXipejdz84hfHhk2Ts73JzbHwgABwe",
  "key33": "3PbAG79xpefHeVFBBtbtP9HkFhsnTqXx6XqQVANxJHR7YxMZ9HZQjmsEUBPEneAKScHDXrrBB3iCmaoJ9UF2fu9i",
  "key34": "5L4iMRD71eXc54id93yRWPszsUGRibQVzmtu5xi6C3nwL1XRGV8BAomk5RVx9ZiHC4VqSFJ6UU3kYhLGuafpoRdT",
  "key35": "4pxaoqrznp8FuKLr72QeWwhvxMcdEuGgf6mRTY6d8yXrrRaPieTxgPS6WcDP1qXRvvo51MAAftguuroBbEH77VKG",
  "key36": "49aLvQfK3BYrwyF6kY9s9UYvedmDQoQ2h5RbiWgWeCYFbbj9sKmZEZpFuqTn8siuEsgR1PSUmi8r9EjcYz4LVFvJ",
  "key37": "bt5wpYPsnsCmG4dkjbyMxk4ZY8bP9cC7oR1o6crQWiu7dwboZJzsUNJKNvekWdHbmdSi14Se6W1SKmwPKVQBbYb",
  "key38": "2NB8hQFdqVFeshe5DMWBQZ9d4gDusG4pr5bA8NsRv8g8hnyAc4rTQ8JyXWrix2yrvxwhBnwtpaMk1SPWURKu1AW5",
  "key39": "3ixYrwjVhVJu7egx1KcRzQoWZSH1qvQHJTHMZVbbZ1hKqpWbq6qAYaHHzVWTSYWumvkpiHdtPAi2EJUkfWYnT3GF",
  "key40": "1PAs6tXvgvLm4RyjJa9n62GTtf2Cz9wKeVqTssKTwJdNJr1bsBFHGSppuRLfJC54SvGzJz15qpei22wCv8a1GDX",
  "key41": "Lv5h6scEr7FPjnhKRAwPEf91pcz4KT8fx7bwu9u3Uoc9PdcEvSPCY69x5BmH1YE7Agjvs2JatEn26GH1zBhy5QY",
  "key42": "4jXGvHMuhob94Nq8EgwvuuZ2qyhvpmfZ48VNSk3NedP5BVfCkB6UtyHwHv5YcpZoAXqcc4C47qZeNxESKoitjkeg",
  "key43": "2yYWZC2BrnXi1KgPMLPSdgQX2mBdV7bzxZFcUmSiBdjJLmioqnnzQQTPf6dZfPJCTdxBX4jkWz7NQJCDbfrYozHu",
  "key44": "54rmAoyr6m7emcH4YMdjwuvMwqkmfmi1U1EePkgBN2W3YQCuuAKhE6QUeKxqNyV8ssQUySAUx1zEPiamCU3NfnMs",
  "key45": "2BWEJLDbHpzS5ciGmtjNvXsJ69hP6fHdSHShQUFDFDaqZkKu7hTXL31nZ5NLWzx54nbM5XBwKWF23wZpvHtbson4",
  "key46": "3BFwxQRMr2trHSQPzM6fe7HdSJaCFt3gKf3PjJhs6BBCKmzt6HHPLWD6SG5o5EEgYMnvenJWUZnoUD5pPUSBprGS",
  "key47": "5qu55PAsb7SVCmFmvcGWjp3f2aMUUNbnj9whckRjb7SmJ8iM4ysHWqjNvhM94VhZMu9cfR2YNVJB3f9Rw5vC78Go",
  "key48": "5rM7gkJ9gyEqKvenoi27EFpnHdpcoNSCjgyojaZo437rMuAqB9a3yMLX7Mg5DLSLG3nPHVwTvTNgFNe1fUKPNnQi",
  "key49": "wpTKiBBuQ3WY7mK6dYt53MkaJx4fRbiPbJCvFAUPjnaNA4eiDMLAUwBAZSJf4PUCnT9NZiU75HVPops7FNcA4zd"
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
