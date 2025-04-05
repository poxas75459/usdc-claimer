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
    "4SfpGqS9uHVQRaJhwwHWWKQhWf8hx6VK5aE9kye4WT7AFs7bcBWsT8vB2f5xT5FfKf8jccB5RpvXVoWfddM5rtXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5tUuXpEoY1uSZkathUSoBkiY9Vecuf7e17RdvS87TQ7jWSPgvxAoQWh2exUQC7gWsAFpwM6svKVzgKSknM4LzN",
  "key1": "2EqpWwbLty4GeejwaBjFnAMQjtNik1nxXjR9tBZta18HRQQBtHNiFjiRaJjxJK9ntLCPoQG9Yc4sgQMkHhgAGbtd",
  "key2": "5mXtpjXGEbK3Tf535zZgDrNegSBxMsfAMZHbA1anXG6gSuNkNozWuCzgnKhT9vKvKic9q3E8B6Em64D6eyJkJhbJ",
  "key3": "2v9AmbQA1TVUv8ZK5UN1kUXzvz3v7cbiDX7hBEcSRzFqwc9jXrW137YGWYmdpTqu8VshEwxBGCS8qNHJtfjjRtmq",
  "key4": "2dA1HVsSaRGQr5xVrSBwrxEvde4Nhq4tBunvetUDCLHoTWMSLLP76UXQHwFWbwFSsu3ZrDZonhRSFc2UGFcYfZNP",
  "key5": "otqNQQ5bRJ43N3c9WTPvbgD61S7gbdFgtrreSGeXHpAygoUVo8VFgpJD2TyTx7s4xSNyisSC7qopxZjCiejcmKZ",
  "key6": "43HqEmYW9DXRQqARwmGRbdyHHWGViv7VfKTPyRAGmUSv2BQHQKg4izTu8t4mpEWFqDBfUqwTgemyEH9QRWEgnN2K",
  "key7": "2uFV2dVJZ22Z3Nc1cbywMGWv8PBymsCsnmDEoA5FzbLYVdJBWGGP51LzKPqxAykCruDTDx4uaVFhaeERK7QAF6eL",
  "key8": "3aiKeitKHQHgSWmCZHJTST8qvuzeKH7ArhGdKjypz77heMfX732nUWc99MV4AwwqvnSCwfdan9kDsmKvLddWUkJ3",
  "key9": "4PvZ8otNMqR2oVTwnh9wCeUPNSLbgWA89L9pBMPTppa6PEdTj8UXfn8nHSxumPNXjhEFVohdSuttBM4352QyEiXS",
  "key10": "2WL8Jz3uezxTrHWiX3JX9tRFmHXGG4xYJRVBLPxEa7w71vubwkzVABERDjWJbiYMAuabEhNVWZ3vWuXY7C5KhvFP",
  "key11": "5xYrX8rJeaiwcfn3KBmyzN6XtLdF9xw3YH7DMKPxFgihuYCWgRDFnQk6G1vSVtTqCYnNa6dA7kReBqYaDpt3TJrK",
  "key12": "b9q2yrbh3sUD41bt5SppvptHhA2sirif13xsBiczwg7AgcwmUkXx5w1tgsF7hFrnFy9iZsXPYgvGcB1CsuvDUR1",
  "key13": "2tzRWnPpNcG96Se7r4qqgU8Z4yYkFVhygy6tcR24PwcB53UK5x3WYxLejSx9KYq1WXgz8PYDRXL3kwH2oVCxCEpY",
  "key14": "3KPhnk3DVzoJAsKCxaioo5rXMQM4DxWq7y8tiLMhHwjg45JxA4b9Se9r38NQrf1FBxxwwZJNhutYJLHhetdH7zGs",
  "key15": "3CRMJWuYAne85zUYkgwCqV2EzPnfc3FPhKFaGWfkEpAzCZsjSxTQWNXqqjRkYwqwqYFfzKY3tU4JZnisaz7AV4jC",
  "key16": "2puToDARGnp8L4WiNDybNkifi1HcAXucKMYdvjp8GACu7squoG1gLMsUzNkicZRgFWa8xqDBrfctzS4PW8NGsd1Z",
  "key17": "2skfPKDvGENagY3dpWqQYg1UAs7fbG3wFNBMzjdZcbjmAqZNBVFocpAfaEessR7YFPX1TQrWsi1r5yLGsdwqDP4N",
  "key18": "5iqGGKEVaoiRvBnBQmTZm7SFFjVP8wxYFVdyj5ELKLLGNChsC1sFP6wFTDWWMjnmHn4Txg8bAQVPYspPH7PJmqfK",
  "key19": "vd7AJNvakqMEhuwFiPJgBfy39H5GiSzGnbNCxfcz61q6MTGXp4fCeoZk5t4Hhrk6wDNzUWzegBSZQZ9yeDjCyAb",
  "key20": "3sUqq66uyVttZ4JwYxH3TN8Y6CbXungnbGD3NwUS26z4XVPQiitTH1if9TmJDBmviDTLjstKWxmBfqj5sNp227Zd",
  "key21": "59Yn3XGWpDohZXdLe6PobQwGfLYhyGiyY9Lt6ky7JGcPniM6ovxjXZVcWYRezpSsK3jNsqmRp4hrkn1REb1PqkhP",
  "key22": "5mTf7X44rNn2hcm5GvZEjLHZeYinvTzADXPscXbNVVku7iCWLKDJBsGug5hWn5sy3ZDXye6ymoo7TEKQcniMUnsW",
  "key23": "3cDj4AwvyyWbGskhiXRjGpcXFdEX35WEH6ZkKYHVPV4XCqsH8f2N45e1Kjow6XuuuaL4Ugw7Xoib48AQsNDNDYct",
  "key24": "5nRfn4gow26ZveYDjzvFjUWrEvp4Ttgn83a1HMzciJDAvmfJDR6sX6rsq1ZTKV5eRL1cP3rgjh7EXwtvHuD4XHxj",
  "key25": "25QCCjb9KFrkJs7QE5DitCLJogcGnahFrPQEmGFr9FCmn9Saq4khGoch3sHBQ9YhWZgVorAFmp6fQe2tgZJEZ6Lr",
  "key26": "2J9ffyTHyji2WtBNL7TvnSiB7Q11uSYuce6J564eJj6jjHmnirLn9n5h5j4czKbxaRLC158FGHBKh5NXaE73ERJc",
  "key27": "5JvmYE1zFrextvaGHnfRHmGJtn5PWhCUj3paPYASPTkyPG7LEtgHuDL9HKbGNuWPeyPdTJLdF2gLH5S4ceUGDVc2",
  "key28": "4eiYEjUvmv21XLvxChG48e7tAapqvw45MDGu4Vwc2MuhgiEWXygK67iNXwcumNB6FEfYAc2an1o28AdovpFxmusa",
  "key29": "42gSYaDqmre8msCVB1wbgJSQw7m4U44S1JiPCeXUwbh3TGFgQwN7WFgbJemarBstTBsi4oaRQatyXUcpFUuRu8nn",
  "key30": "5erwrdMjyaFPCrDciQhb6eseH7ZeXYocayF3FFoo7Fzi5WJjjFwR1S2sY7TBqssJ2NPf8WmeF8rfV8ufysr9DVn3",
  "key31": "vdYDqUCF6MAZChWZfkYFKbYheWinbQKZfHjhVJhdMnQZSx2TmnwCc46uUp5QQ77QoakvNab1kxqLDu4PG7FMoz1",
  "key32": "SMwebGiKqAUvyZXoUUVi85ncFRkTtPk4iNWtbm1xLBzFv9NRTB34rfnNGgch2yoxD8amawgjHRRzmMqDgYbnFwr",
  "key33": "iSDStE34EoXJEq2vtB9EQsAdiXGP5PHkpYcK67p2gpt4TuE8KAMYvki1fq5BJG8VhyoRsf8MMpAmUoJ1nXjCXz1",
  "key34": "Jt6dr9BgNXxM4aXFg2zL47cw2wJGDxW3eNKU2tiNfDjwMgri7ZkHRULsjvo8UrYgc9gDQwYggKT1bXKw3wv8SY3",
  "key35": "trpjVkLr8NDDwu9p4GLfK3DKuecPGBtu37kzxyfADDfYRPp8qTPojc2M3PzJE68E4ZGscFdkkDZw4kuY17Rkimy",
  "key36": "3ro1UJSdWjE2NJuDmNNYon7HoEyFEEnJnMnGdaJjqpb7VoF2X32DPnXnrrk6zMrjBTc8jJEWVHuoMwzHzmtHKAQt",
  "key37": "Y5a77B8PkSFa4qJtWYcnVy7CJBSmczCoLTdbodELaAPhhzp8Me5Qi38sttbJqReaudW3n7QRo9UzfMCUsfSff1v",
  "key38": "4J3j5nvD5T3cDaTNkfAnwySwcuDs1fdQdAMygEC1kVkKwP1Uu1PZkx9wndVQuHzTyTHowZ9FEwGDhbJJEyeu2edj",
  "key39": "2BNzsegN4cJ9HLzbHt3SbTYggzobABoh81Jo4TAVpTwyZTm5NVHQ6t4sDeKgq7A3dN6VT9CdsL8tSEpaSjDaqQTF",
  "key40": "4RCLT1WdoRrMVFXz2js22K27LGeW5fgHxU5SrMkq1Yk47wUcBDAoUM84YUNKCNXtn1TxwDK7BBexiSf4unPaVmBb",
  "key41": "38hsqSvrExs2s6Ka597Nm1vMhoSZpfogLmZg7Nd9J6aSpbyUpugVGfjL3Wcp8CZmwta1oGxatY5utFTqNPjsNCjs",
  "key42": "Hj4ESYrxYeHai8jNkUireFxw954WjTYFUwsRLXi3vqYRJgJ3K5EGPnEpjvQQqw1JCiv3nJgaFrxVysVW98mcUS5",
  "key43": "8xPFPbhScSyhmzWUrQjNx4q7ZTHXpDxq1LmMQBTAXhPtMTznUiyN2APUdCzDH7KZQvJ6kYu1ceV8cdozpeRprKu",
  "key44": "3vDYx4hkK9bSjh9L7UFnWkDAsqR76fjjP6VuGXzgptYEWFJ6pMJqBP12Pu1PKcek2nLtBmYagu1JwTFZobTVqFvt",
  "key45": "3CG7hvYPK8Qxjo9nudFDSEeaMioLdAFRBZoSJAbJtbANqpQ8dd4UN1z3P9NMq2DGS2yvS78qqBQpS1RYKJZ1R7PR",
  "key46": "NWZhmokTKeza3rZxb9vKG72UWQrHjMCbZMpTEDpXNkhXHygwv1C851W3V4U69FFdr935hQF5ACfY1eVu9HtDEAT",
  "key47": "boQ5g4kH9zYUu77GvQN1cvSgii4vmeZSCA9XTedxX5yTb8rUxPtmpsH5P2jjES1GMLAsjnQtKdxxbmfmRimRktn"
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
