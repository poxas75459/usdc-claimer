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
    "45CLDXMxsqyxEHkqM5tDU8gjqswn72yaEW2MRxXWHEYixkxQVAgp3PUEo71JAJC2UJHabdFWJH8z8tYqMBNosxnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccUiyaJ9NXjagHknRba8WmV7puyjurjULZAcezakNGH9z4QMjn1DL8LQ7X5P4h4eg98HfCJgbvy6yPAhkiktNED",
  "key1": "3cZ3Q1y7j26HJozszYMrP7Q4hdw8S7zTBGJo2tF4qG6gAZ3gh9dJLqJTrYtnVFakRc5CFQyRYywFjtMafmYUoUUw",
  "key2": "3NaKKk8vdWeF6jnTW46g66YU24c9dJJQgyA9RWiDxWWwEEUm9wSsV2oWwwAMz1gCmMEJbQnXPV91AY8b6bKkwuBk",
  "key3": "3LuaGWgEio296Bm9SHVwPC5ikVB6soHS9vMM66NoBh2usjoA5cHaTtRzkbbk8CVvETRhixRFUNYqaGNmN3GmAz4K",
  "key4": "3eyx9zBN6t2W7vWh8Wxkw7zQAKKXsW7L44NyesVyTmTnnKfzzSXEnoqmf2fcJ32Fkuq9bevNA2jHKKKB2nYdTAfB",
  "key5": "3ZvyMo2XjafFmGgUEqjrL41kYpRG6QC6oxSAhbn2riR5vexUpzguTqHQFEfoC82FGCyk8M6S75YxvfPqckVpyihN",
  "key6": "T4toXEZqBTomXqnvqVmLgyMxKT4Vh1phntD4ADGzgUMLbdwNzALr4PmXr4GM3AeRJzjLzqUgUnrNHDJQsTSMZW8",
  "key7": "3kd1T3LmQMcFqQGP9DnAuvVNJLvd11pZGzfmzSV93WhBauACDV8G4gkaUa8s2NVE1oGwd9fLMJqwD5N1q23njAxw",
  "key8": "5KmS2UbzwnG2cUccYwS3Hs6vmTn1P13nf1QgiJTaGdMw2dRSyB4xK2FR6hcFN9t9VZ6Agdkcy11YpiPtczaAtgtw",
  "key9": "3VrsmLPvCg2aepkhAt2JM5Huw9By42VUmRZq8avy1yxCikcCRG5523rbMm11SAS3GwprbTsFTMJEyrFSg9LG1ya1",
  "key10": "4DJahRDrqWUESoszaAmkGF1vPYefcB8AMBbKaiinMJjQLRv35MQMo58dEjugpdM92WWzJoMFnBZrHDGiV5NoF6L3",
  "key11": "2XW3L2SVfgnv2TbCToxaiwi6gGrbxKNWfUPkMWBNcMJ5RhZEs7xRjnHw82nCAz1zUNi7Ud62Sdzt68koHwdMLipY",
  "key12": "2VEVoBiaPTBrncXMNcM8ewWe2AwbuGcjn7TEmpi4n9xbCw3NLysZaKMiyWecLyuqJumavNvsNDq8rCx3dsn9FhzT",
  "key13": "2MNoLLm11dL34grhXU8g84eznugDnLyQmFB4s7ZocUigYGat8FZz3DmpGxoD4vHH9x3inHMdScB7epibp4ZWcCZp",
  "key14": "5eAdQgm7CwGDAsd42QJ3kf2bo48wWJZHMVGihzrnsDtnknYwh7hQGujXfZKLMyyh9mqZuydwgM7f9bsXnUstE7Pg",
  "key15": "5xc9BmdnvAWV7ghcAV1zyK4xreErphJ4tejL73KjYyUJsD1KPKU4cPLok4JNXiMuGm3pSf3UZm3SQmZigjHG27US",
  "key16": "48tZ1UGmKkJo7w8zBqN67FtigqVMyvXAbDdtxW9rFaLSL3aKrqPKorSywcTDXFxvBCW3DDPqinHShj8jqFSfvdtH",
  "key17": "5chx1fnW94QX8mLoTeLRm15VDaMvVYo2MBHPjPd2G9WjM5vbo6kaThZYsf3czcToyJkw8DQg7xL2eeNnE1PHKZCJ",
  "key18": "2DS6dkhWdc3Ctt1oQsxYGqe4KMAMTVRUYQR3FQabBQ59SmXKawgYSKU9Wrh4fT4DMUiiRKXm3STuJS8v1xQZo5VN",
  "key19": "5BFtYKYydpcDmxjB5F6K1XPpgGb9QoKEh1p1jBdvtHaE3G5zEa8D74ZtPYypn9k3mWg1SEDaUgFNbjiZrD4j5PF2",
  "key20": "5d522mfmhnpu6bVc56mZ6Wwwqi1Mjm9E9ykB1qKMK9jAV3XnVHBZ7RCHNZoiUKwzRUV6GxhZQA9m5wskrFKsuvbi",
  "key21": "2sXkH4xzQnYxCMRLBtzSDdidoK6i1yj1FWtwB65FLT6WyiNXxSPfGE1kzqyon1qtfTiWWcBqpHGkpFLQ5MqK32aJ",
  "key22": "2E9dwSBtY1HvTXh83rrJ1T8YdfA9o2EZJVZzVLiA9iqzMKNnjmjpXWgELnbvHdiMunXdTqzuDWGH9SQAz2LzBndo",
  "key23": "2B3rbJtCRx1qKMyB6EFpLByN6aQaPy8jgtAdf9mEcWS3pvyDL5ErGJsCxNvhAoABS7ocJ7BP6xdm6iaKiTqP7sCY",
  "key24": "xUecVP9CaAMWdv5HuLmCg5RAGuf1cR78upfMcGPDou9RmYXVkRXvgGDnRLN1P1hxEqyJaRMamaxutFJN6gYPCC6",
  "key25": "3sSYWp6EJvzNHbvTwEakTf5VBaa5uM3cE6qpRA1NUZYdyaPd5CofCcbxdDVqtCWPepGPnUFsGUwuzmWA54zngK3h",
  "key26": "2N6w5hCzcahThsqXit5AAGg4NeLW6JsCk9ykLDv3kE4c7kUXF5VKX3J4f27rkM4mj3iLHCcMys16hue9jFVRzzEw",
  "key27": "4tpFFfPgBNBNeKitteMwE6VdsANYSdDpvjB2HDDSM3ZDdzUpJqZkggE4MC8cbaXFMAjiwpE22FewcMyzaqpwJTYi",
  "key28": "2317M8QdwDwpJs3Hb5Kk5KRQDK787vfjGmvT2vnGpRHxZGk9B94PPQqnzPd2NAxUCRVTyq3ed7MVDEXDkW66zq9o",
  "key29": "2kLad3kvg2pwXq3NAcJ4Abi1bMWjZnv5g6mQJS9Fjo9AHuPKz5Ta8EtV6FFqA7xHth5DtZmkhvNUGVU4jWfN2byt",
  "key30": "V9geuAp9xqXLZvMx6f46s3KbFcctsS6orDik3Q4i8aNJwd8U1gjhauLAToh1v5A8Tn22SH5EAqcAWJ4URQrfM2T",
  "key31": "5B4c5UkWNneJNvkErA9Ar6Y65pM3v6WTNnvj3jdryk3XpVVdaaek3CcU4DLXTJPFcvcuVNJqUcpsrSMF3Jr3SPBv",
  "key32": "49JwC3DgesB5jPp3KYCZMPVPbpXTdaYQ8iiC3rsVoDbdounN9ZF3BtBdsYY6Bfd2kdyH4EyabxEhQFSQVkstnPu4",
  "key33": "3Vk9gTrvLTzhuNMsJNK2iF4A2x6Rfc5p3gK29dujzwbgkGsuatvbZ4btKy5y6JXunjKB5u7RbMpyxya3eCZotQAK",
  "key34": "2ZvhhusBe2EbwfeAT3VDoyh2cDaj6eZ9sEkMa4Znb2kVMFJsaiYj8DBYNAQ1dTseNxuq4e8MRkVthuKqY6edFiax",
  "key35": "4PzCrKtSBkj3jdfdtRXXmp5LNhQLeajr4SoMTQKbs3PUaMmdyuHSq5s3N45KtfgKzZju2bmBA8isYFYaonSsT3Xm",
  "key36": "5ySFRiu7tDpaPYoU7wZB69tYqjXC2jqakrJemd8ejZrCeBKGe2ERH8jSVuuL8RstaT5Qhf7gbwjapNNdfqbnzbZe",
  "key37": "2c8iuoH4vBvn3BMCbvujgBt1dadSJtYd4tJMYUMNUTpVrH4RLz2vgqNm4b2ToGvW291dmEfKSBdGQiFnPG4jTqYC",
  "key38": "2ZhT4uQUYksMNz5cPjRhEL1DKVNzQ48LAigxaeJ1XerPuER746AknThL6N5xA88Exfhu1NT5UATqMEKzUoFwbzoo",
  "key39": "55Hh9KbWUFjwVCumLHUNmEDkn2qmWAH3T2oovfKNBMmMQYQsyzFgPTkYCkHrgvSa23jkxaUegcAwRhfFA8s2ZQ3U",
  "key40": "f3uQTMFAdKP2WUxVnZNrzedtK9LRGTFeRKru3Pfbsdh4JC7Fm4ddYNJNtU9TsszBQurqVhQs3VgQhvDLmRxFF8F",
  "key41": "2SqA7Gy1FyUyXEC635KyZHFcQvZ55Ln1RjLrcq5gB48kJntPxgqW9MPqy4cQYo2cdU5ytvRyjevVtA8MYLhmpPap",
  "key42": "5tY6pudm9ZktdyCM84EfekFxYdd89oYFVSAy76wk52p6KAKQRRYc6znqDcRk2XmcPQPP5aXrDLyDbiZtWALsqd1q",
  "key43": "3C6zzG5gqd45daQDgdsGzwvtNQkJydVFb1aPmoWre9ovVAoMcr7U25Uri3nM5Bn29Aiadxrhg1TGDtUwTnaEvgNM",
  "key44": "2hLS8EDCURQbzWqpyafzjy8moYwSJSwRLSbXFF9LtohgJFtn2PJSWdA1iMFn5c3LC3qWghdmtYvhMXTgdLopZMzR",
  "key45": "3D3keeeYk71oKGtibFS99XZE9mUtBetf39WTKfCjumo6VKRa8BDof4Bumfu2ZhT7cNXnZ41UFFxsnsAMu3JDuZMM",
  "key46": "66TZD4jgb1MBttVvKtGZWYQPUE4P3faB7ub1MZAKTTT6eDTCSEeBRUgnHmpFJYwk8HnabKb6SrWL1iBN1Dsb7TFe"
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
