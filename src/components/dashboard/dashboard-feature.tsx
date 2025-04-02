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
    "4AkGPAnuBcfktPwxd9HCXt51hYvYorewaPEZzcnDSmaGnht56kdfFQWpEk5XYcv9xCeFeWM8ZFKnmwdkk2JgGKNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7fSELiHda3xEiEDDiLFECdZBXckGD6GjC56jBxs3sM6po3k1fbeqqHAB3S4d7cFwC8YFxdSk6KncFwBu8G5cYR",
  "key1": "25Ze8DKxnuPAgUbrJgs48Mytsf2RfDVcPNhgtukhY3dsueXmvzAbZZjRhPPWdtLoys149JDBgqvdNrKL7A6tkVRP",
  "key2": "2neNpNzk84XYJVBmCzc7QqnFAt1qyRXYYP44guhYb61wiL7h2anC4SMNJkRczRpZVz6s2nLei13goufCrXt7UPJq",
  "key3": "GW36doKD1gfvR8mb4RyAEQnoB6txd8xQPGRRK9yu1z9Amt2D5E9orXgnrdxomAgftZjab41cAPg6WEx7AZYQ2AK",
  "key4": "jYRK8sxWtu2H6dTty43V46wCntJiqM9TYtoEPACpw35TRcBLcqkSRVq1doEx6R61SpMpNSscRPH26g4H6mHRu8j",
  "key5": "2KKntAvuUeEFRA26BH9EwUyh3ZY8wELriA6DKJ8yWVyBWHRXDRG3igXXgiC5zoD5wMzWHgBks4tgYczJ8vMYrwVS",
  "key6": "VsuBPLRPmnFYEauEUHaPJxfbzsmTjp2dtAWGUdTRHkXCZJ231kVBh3XxZ7qGtahHJsTyRucFZqMD8dSvwA3ftfA",
  "key7": "5yYbgCtkW9UQaVAi1eKKRQ4oeg49q6cdB4un3WedfEC1aySnhoscUmVHWL9cXueRjBXsgMxx7cpgD6NpVKL5jA3P",
  "key8": "mWZZb7E7DGAYHaGP1KvAaQv7wC45xPewEoLuGxB7J4eSaDyu9oNf8ddKpP4o7sXEj5X76ZooDAWhGspUMi8yNfx",
  "key9": "5DtSghwojMBdnZnMa61YkWkXJaHFYjMNqfN1vZvp3wNGpRspP8dkWjABcxL6C2smgxMqq3rVE1ancfBJnBWvfyY8",
  "key10": "6VBHJE9yq2AayNpkLFHoeBE7Mtr9rsGGEz5zkMoJjhobp1CmgdySURRTtfd1nbnCU4UxuCVfQVCwKS34SgipKn5",
  "key11": "4grqAYqn9eFQEL4yFFJYpfonSt2QesDSCFEiyrS6LZntRGimgUVLWFhuSxz8EC1C3fdSgRubW14MRKLFsLzpRyfW",
  "key12": "4gh8wqzHwYF8edShNvGhBPia159HcVuShQpjQqczWcSQSu9jj3aWk5J567pB2oBXGDWN18phiibmGUbLpTzHHYvY",
  "key13": "4suSnK5PDdYootJQ98JvtSKihvuGAdQAYrscSkacryQqFvXKavfCxCtSWSwuVLNifiej7DnDx9Ybqor22MsjigFC",
  "key14": "3t26d2eEXEjet6XWUAvuFup3384fPwngqJcBrbmaPaRhWPTCNVTW5UzZL1JmbNa3TYLDXXJEN9VxuqRcv5HzfGxM",
  "key15": "uHxTQTyewBWHeUMYG69bVTBC8byvs9HPKCUjBDwJApnECmBK6MsApK8jkjZMo22HkrV3SP3vKJ4w5wwS5JV8SZE",
  "key16": "kCoVffWEZfc8n4jvLmvy6LGBF5BTRzejQyJgGXpQSVNwgAk6QXYkr4p7Bv44JB52ZnZbZm1mdZfnkCuRrdfrQdv",
  "key17": "3H35YeFxewnKJruLDQbqtqNZoWfnqm9fX8mya4faLoEwXeNNfcfaXzRcjy8WfMXaD6PU32mWLaaCA6bJSEJu4Zg5",
  "key18": "5PeVHmXTeNXKBkYiZ21AbEbEBGg8fN9mtzssnB6WoM47CYG5X5dA5ayDM4cDNs3fh1vqLu46z72hdrPSNUK5KgBB",
  "key19": "3GBFbDfAz75Bid5XYuXvW9QBw4KTfREMXAdqUyNVhZqTe4gS3JPaEAthaWNqei1kP5DK6g3YRzMLp8a6bY6NYBeH",
  "key20": "4awQjCXDk13iqrr8a7VTRoXRbVjteX3dpk7VA4koY9gBdZxUNuJg3VNtjo1eXFo52qTPRahQr8mz66b1kyp3Vw9H",
  "key21": "46DbVbbsQxkZjd35DkBoQHo2EpvjPV86uv7V21adY4A4yqCyrPkRRcTc883AHzXHwR4Ny3oJe2tT4kbazP5ZwQo2",
  "key22": "3LZ2gmCZ2FKDcFqAqWWzSwCT1oTmNa8aDip3Rgp5AGMBDRkBKBbJaj1Z94hWMfoLiKo6NfYD4gM77kssUvvGSpTM",
  "key23": "xpUsTjdY7cdhctUi6ziSgHRuprTuosESjyFqKt6cBcRUzhRvjjfwVye7iFZFqje4KSfjaqfWh4obEwRvV3iLWuC",
  "key24": "32JVLkfdjv1SHd5aMaY99HKBnxn7AHtfnup7NcLzLbrDku2kmQhfgMZ7kCGVMQgy9XxgSh6tUmr2jmjU4zUnmwzT",
  "key25": "61kvMPuYrvqQthpKrtxsVGm2BhiY75HZqBqs3cYdnqr6kXUddJxa2KeC8nDB1EwMV4e7Uh42zyPpsprzfn3Acva",
  "key26": "4KZnHSVYSTUL2P2Ey1pM9uTx67LJWXeKSW233EMjH4azzPMJ6fi8s37kuXPkNe4WNRy8sM8iWvK4qPWoSiK1GDBe",
  "key27": "3MZBHXntB2rBVCt9DJWAW9ycZDaAouoXRrqtYFMxepaBnPbYfVSPXXuyUdtY6txCqBxN9nVdieifAicEWep1bovF",
  "key28": "4qDqruEmVxALdWtBo6NawCADLP15qn8nG4C3whT4SvEHfwKqnFmqCeCGEd7VzyTFCvTbLJ8zQig2NhwnEoak3jRy",
  "key29": "qoxj3dS25iCbF3aCfjR1viVEj5JE3uGWYjDUhdnJuSMPHMJgmE24fCEqzKUG4ySFVAPRkZEj4U3GMsSYoEWYwLM",
  "key30": "3hfutzYV5xSSDrYTxgvyLMZZMtLi6f3jRND7YbajN7ksCyYc8YwjkM1BLsm9ZXnAJEmmhkP9nAdy61Xfg2an5dx2",
  "key31": "gjSapR1x3zxni4n7JcKvsxHnMWkGcFPN7NiCtWYFYnn7kaN73csf7sPD8iqWqMmwaDQLFTa6xn7B1ct3Ec9Juc1",
  "key32": "4w6McyvMx4jJWSviA5wkj4YVAtKRmLA1jQ5KPQuvkPTPAVKZCtZ1dLVddxq12MoEGjCSjPBcigA5tQeumvpmEaQy",
  "key33": "4YgYAbFuB65bxVvjrCRQ2CYanB17CBzTqBXFM7Qg2KCRwK5zzskPfbi3ydegWa4emXadQ14wXGWRaGaBkCxeMfQw",
  "key34": "37y59aj6xxJTvG1ZyKHEVz4fCgPHY2JbHDPChmZxszxgUBXPPwXUrD7MAuBZbawFumCDsxhNpMKzYXgmuVjHg9V7",
  "key35": "59y7jYG3cLsEeRhgtuVAtNaUbdQ2Y24u9q3RrWjCSCX6o2T7gFYgvtZSJrQxvD8Zo5cER83outiMspKZK3zJnkbv",
  "key36": "637LEtjb4KKqNdwb8FLDAZMxSEF41SY7T6n4yrNeKEia6mUbzsUtSc57ZHXUM4H3FBat69DYjAnEwiR9BS7DmdPh",
  "key37": "4hkhbS5iv7jFiP1qppV8ENyCBfiaHbTGPromemeoGGDDQouyzgVGheJduzSShpWsgtEDvUAZhfrqCjCsVWxteLqC",
  "key38": "pFrisJj6yEapfwKqSRc6U7Ciw7vxG3efv4Qnirb6mCAaW4u2KKYPyHcHNpJpjDHsCAddD2WKvzxaCCzba8xNr2D",
  "key39": "4inWNEjhXhoTf4d5tzqcngopvHVGmS1B8H92k8ntRuwDfET5oSBetrvPcr1hnDRDctZMwqQvchcigtsfLHVQnaJV",
  "key40": "2ZsgQfNnN3eey81DA7YJCqbshpVehNKAcmV8n9megQP9uA1NdJqVnrJKqwYthmV8xw5BitCcAiptJ7NitBKg6zz",
  "key41": "4bPPc4fPiUSZoqhKy8LMY4DJD7DAb8qwnerEt3eLoLHKgEA131qAVAiLiEnKcfrDgYZFCLUDm9mkSib2sPG3biWN",
  "key42": "2ppeJboeznfKyFwj2s4rcPvmv8REvdkicYjbzt644mPvHBEkpoeCAU7jmpLyBBzBL4diWuXzQ6qd3YBhkx9RxH6a",
  "key43": "s7XYt6eT3CNTFyzcgRyoJzjBkxXwemMdUAFXaokiBmDNHtqDNdrPpcLvDNZu7PtJKpnb5NZ38uGCAxY8pnvLHcK"
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
