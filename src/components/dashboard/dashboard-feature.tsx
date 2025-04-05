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
    "2XWp9bDgvYQP9xYMQwGXknLoYVUtD9Tr53RMRsjimeAzeY2kz4bhughYiKuYQVZbfMpkpjVffNEEkrP4jRtWHeey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhEd1DK5hj1kzQcrqxRoAzUtgM1YR5h3W6sudWhijEP2bKBP4pNk767AGwbX5FFL4aH8mTMAcTSC7zrJdkckdGp",
  "key1": "3rDJWxc86XrEvc7kFwJ6RLdXSM2CrP48gyubnBwZeWQDkxQPtrx8n22imLisNLd4S2N8WABAq3c5dZfx4ThEWKtB",
  "key2": "CakGQNNZJCJoWTHBXckfuFRq4LDwSM8iY7xT8GRzTcNf3HoBB3wdJW58aR6fmqLz95pJtnz8KrTsUPdnkPQYcDR",
  "key3": "5ZvjFRtMjnavRUzAVJhVqkrcQ9DgW28a4RxwXgJnTRUwVRanf5M24vEdEQaTE2YuTk7hgv1cgQHHpqpf2aJ6ueZx",
  "key4": "3ZkHnBkaMaCw2PbpejYW6YYb4x39RV4rJuJAzo5Xnq4k6ZGr4QyL8bgqQ3YsTSa1nhs8UyxVKW2AQLchrdgb8deG",
  "key5": "4cNcio4T1V7n52zehdPF5Yhfw547wNFJ8HRi1sxDzizqDvwMgHHkkKxisYna2BAZyvLJzeWCc9x9BNtErWPJGEPh",
  "key6": "4CC3M5PEH2Tj7sPRkW6cCv9FPiJnUmvoq2H9QFGypevP84f1zVy5Py67HEpk3F8fjqe9ZtjB8mxs2jeznaBjr2oR",
  "key7": "5qfY6f2CdBhByANLv4hUK5n5nEUVyeLUwnt7Avzu7jCPtAPsNUYaReV6Ve7AGCr8xW3YgiMF9BV2bGbCP5dbzE2A",
  "key8": "2vJYRFeN12Bm8z75jfrwnQoXRafZLvid5PWageg5XjXCuQhKciuFsq6xwT7zJUgVCkYpHo5yBQbbkdAzuyNLv6Rp",
  "key9": "67rXBLsEsJ9LTxpcsKSpPwGS4fCVnBeANy8DXtzKASV6MbPHuTMkp5tVHuEaFpaWjHtFHSTqozkEvZDJDtJ3yKhn",
  "key10": "2CJj7svPd52BUD7e4gbfirqdTsAMFXVDMCEGKmmCnVcdMkGmG4NvLwFheZcZn2fdxvDUm7P15Wc2ouAgM3koraoF",
  "key11": "51kp8XZEQrGvGsFfGSvrT1M791WnXpNzhkYmZEhHBdUoMJbbho6VjXYwaCu8jkBWfLiTPwhZn5Fqmhr5Yfy6D6F3",
  "key12": "5kzsTZeNczimq1fuhefaCQj3pGREfHAFiNMQk4USygtQ19V17aQFZZWbHPefcjoub2SjeW4xMUFR1VRci63RQzKZ",
  "key13": "3iLkWxesPZinGM3fXNnTXfR14xV24Vwe5SPaF5dFHrfHfq8Q6buL8be3FcnVM9gfxJ2NY4AvTy86sUdZQZwHVsXH",
  "key14": "56A27UHVGBbZzfN8GWP9y8ZmLApSQ4ZPgoCnwhSS7rLPc8j38WkKnyXoxHKpsBU5DfWkzgvccjbq2zycGY6raG36",
  "key15": "4hX4CNbuVpgtcUK4ryUgb21AAD3uDhXPqaG6xLGKk9D1XBN1jrgrYDigZFHN7tSvxfwsd8PDzkRqYhk2LM6yCMxx",
  "key16": "2G91pfPk8MRpizrtKJmzET6ZbCZZUjZcdXQBTZ6ZRQYTcombDSRdf4LDRuXFEoR4He2zWSr9wFxp2V38CmfR6DF4",
  "key17": "47qLFags4DGN4grnVBArj7Y48ErLhUS1ThCJmAcPdTFWAEowczvc2TFwj9MjV2tHMU6zbzj7ZS4oeLWaosbW9aY4",
  "key18": "hmPvRb5q6qEueGEHFwHwgd2a9PjLmnXdgMkWCMWA2XLn9LRZyv1WCSM9m9sgRaQNgs5Et8M9LgfpqNXEqqiB24c",
  "key19": "2TejURUrs1sbEpfpiyspwBdJoFHCcBHJ2g6otFFbPbLrPhnpF7paLTQhp61qaLc1Bw5Fd13HKpzBkZt2Sjb3YuN",
  "key20": "2CYUbgZGuYuEyc3vWR6z3mkS6rkhzQEneNpYms5QRcNMsC3H9i9MUgHHYP8u4cfAPVm7Z8BTLjfrd7dijemxqGRu",
  "key21": "2DWbmB9UgmW2kLKiTiwg3LCxj4CM5JHBtCZEhrzYaVKbWm4JNzL3rmL1jsJWCATmDAqehp6iXgrTJBetgu9uoCqV",
  "key22": "65LohBMDQ8NiGRjrtTpkVTuPk4TqgLY1ekBPQy5wxXxyoBo9dTTFWZyiHFWjDgtLAPELGUNF3Z4dYgSzJMcUYMuz",
  "key23": "2ZAirFCChJYS1dFigfVeB4M8aXeowr85dB8HPe9vfQ78M8f3QaqGWi583hqHW89T9RzwEEnKJZJA5L9uvtZJd7rp",
  "key24": "5t12kWwwnhGhhHubLeZAc4pWBGfbVjgm6KqNxAee1pvdzjukjqc8HpCryhRvjEGtQz9puH16k6neaE8vNHNkNZm1",
  "key25": "3xEyyhVRyc9wBnawneL8okogjHq8wz7jEgX3YMXsR8zNPwWkzMuGm4Qv13Hx7R2Y2UGbyRJow1WLPb6yTUSKZeCV",
  "key26": "5Bg1XbFxNBA236Eizzu2yeDDgUoqstNppoZEAHrJVLWZHUXAm4kEbAtc8uMo6XtnEFrR1pCLJToBevffqzvMddiq",
  "key27": "3QVWXmDbUPMx1MMWrFhrQgWfrjYDGg1wZwS7MEUJgtyMo3vfJr1p4hEddTERpG5r65EVeTjBFUgdq66NV1cEenur",
  "key28": "3jxWRoMDarDF54qdb64B8dXKj18ZvEaGsfH1aPNay3nsXfL8cghM9nfnVQoh6HhWNSmgAJgMFyeuLqSGFvzWRkPZ",
  "key29": "36jh48PmJn6HpYEbHQDj4AvA3Fs4eA5FnsJ15qeWujuTarko8jS9zsLoFmpAfCP78cVapgDm84ZoF2NrZAqhmvP2",
  "key30": "4XysTPMtWdCZFRZCx9a51mkAUhj7ax3XwF8GdW9k6x5zJpkoCusesXCWmo4aQSdsJ6QmkpMPs1ZDmotjvcfXebcb",
  "key31": "3PSeA1FzdV7Y46yWvrFKBQpKuimUrrinRz11nwvYXoPseKVUqCc3WLGCKdmt6mR8sKeHLazxYhuVzGdLCMeKnryv",
  "key32": "4rGrkoc14zdyJUHZyt8sg3nBJnaGN8WHi7jcmVbYU6jiQJ18VSiPkyqWRQpVUKh4WzVZWRuHzA6EQ45uZbgKUURN",
  "key33": "4DtU3QCNGkVbZBeWGDiz9Pftg13ay2UrmpoGPSQpvESbu4snusdnV8UxNoYqqbjN38mnr32ow1yfLQqpTaoMFDE1",
  "key34": "4ckerxNhmP3d92TCwxoALTgtFWHznHUoNZPMiB1yrX17BJr1VZ3BuJSEKSfSFJCRDqE12XhiXsj3nAcRANHMhkMR",
  "key35": "tDRU8JrCAvcsu5Eq9zG1AjuwQxQ9FGGQWuSLhNUZ4pEAr4jjXxQf8v5HdJoGkecfjKQmSqM7qamGxG7orn8jQrw",
  "key36": "kYD1qEtPLCfJrYQdqqpdVGcHN4M3DpUWCMrLZitc1m9W2XxXFLkDL3qVknKiWkTkTHvHVjDkuDUd4rJCNbEsd2t",
  "key37": "4apTCMLqwkbhrYBXEXbZgYfuwPKA7dimjotvU6nfghsKPLHs1AJfLYckMzW3VYPtpDfZoNx8CjuyxddM3xspuvEw",
  "key38": "55PjbiRZEedDTZsZxxxz28rYBtg78NNRrhez1BbK3yhgvMAamQhXkbBi78Lza2wqeapX32Bu3bs8hnn8FmdQuAXF",
  "key39": "z6gXTZnPdmr4RR2diquET4KRWMmpw8p5Diabds5UdJc5GKZUvSecp262YrEjWgkDCEUDiNe7TpZ47fp8ED8Jodc",
  "key40": "pgmZYbMPko9L2grvcHYN8FXbL3NoYjLojrwnB5W4xbnLa9imn461EzLvEQf8XKJ79YJNtJoE9NEh61yaYyyW9u4",
  "key41": "JqQV2v8ocCttVtPTbs48nJNXMmcH9euzFTGBdwkFmUSkqXTLQVCTvkkuSzyeFBL5TMEA7RYbpR8VKfJGaQpV3yv",
  "key42": "5vUv6L8kD29WEqDZqCjkYeUZNNqZhueXoxDrsLB3VBvyPvG983E1WN9dz35vC8ZKEqoTi8pMHKSfYT2czjJFGUiL"
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
