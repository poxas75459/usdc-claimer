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
    "2e4u7QAW3L7sqwB41ijysFpeqEjwCRT37QLqP1Y3EVtiZnUq8gk2Mgo91p1P2RQx1FdkS5ptyYHdogtajQaK8Xjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSVTGrMWkX9pf6U139fZ1Pgr6mcbq2J8DRAuQmaWM6SLXy862Vkm2jo3i2Rx9fyHqDjcrHz3szqAxwVdEFdsFXV",
  "key1": "3eppWN6hXC2Uj51SM8SCevnAyVCAgPk6PKbFaWE1mHJV5ChYw6EZ3bXakApSeDcgnFzgeNQtEEvSKDrFNmqKfEXd",
  "key2": "5jdZFovNyTFU5mn26HpoM2bWum5dR4ic25Z53cMqJ1ycRLU3F8bAbCBFyGEC5oMM4R5wLKcfxUQVDvDUEQnVMNFp",
  "key3": "wyy5wiTmUHQ3GgqMUNMgcDoLYNH1zYc2ZYUHT96uTQGGPLZ1suwrUBBUgfaW4jB2kHPtFev3dDGRqXte1fcczvr",
  "key4": "2cfxcZWxD1mpWh12FrqRuCQR8kFBAfNpnXzYoUxbzbnxVVaGKupoBUj4U8NNW6RbRKG8QziSi1DuCEdfF328P9mz",
  "key5": "5hM5qVcAQdJvDwqxf2XcDkP8fgvajFSDH6hHTfpmWrubZjTat8sJ7HdFDCQ3PqyP2crVrH4VY8JaoAeydenrKU7R",
  "key6": "4RVc11Fw3cHrjypZiJjLT3XusVsrcWnZfKiqBt1tg9dhu6aoRQaUX2xdp5hyZ18amDMeHiP6BAM9BuamdUJ7hF5u",
  "key7": "2TQLrB64Gncnr7cm2cBuBzjoeY7AbwRhF9qRbFaUQyfbaA3NgY8jzrzvapnmMtU1Lyqt9xCVs3WyDBhCqKddaUQD",
  "key8": "4EyvMxvn5RBnUme8GEfrCEcGPqNKPMh7oSniSQQ64EADm5caa3S2LsA7bf5cV1eeQDjx9QRW76Kih5yCdM8NCU3F",
  "key9": "VTVjSavEZDnGo96p4jEPKSQ7o8vyaqL64sEwiNu5SQytMKyGvaBvs9mHRGZEG1eQnRHKd8BrXxJm71AkPPrikA5",
  "key10": "53tHy4JEvb9oXJMb2UESRPyWaYpQCKoYsRJK8XbG9bdVTZnsQetRs9ZhhQPuyUDD7ukcLxzxgCuZAQ5F1CYdsMJw",
  "key11": "4mRjVfHYN1JcyUGEBuHqC9zEeLyb8pPHnfoNDmNwogioCExtXyirS6hYE9NFLHXwyPFczszkyZqwVtBozoB16FtV",
  "key12": "3xRFhPidZNtPEfevkA6SAbE5yDZRG5UXERgBJ9qLKqj9r3LCopiL74exCcDaV5mZxZ1vBVUBVCXpSeWEhJrQBWXu",
  "key13": "3tHDyq83b4cYemkSyNB1VtEYq695UtXR7PTuGkQgW5uNn1uxp8tjdbgRE56tUK5XD5mQ5916cwkKxgciAJnJSTKT",
  "key14": "egGL3my2wyJt2WENVkLFt5A2hnKMgSVfFb1ZW53F8jyZyrZhp4ba4i3WjCBHfvGd58Pv8orpUiz96TdnDFszpjz",
  "key15": "3igzD6MfYXen7ydVNJikXRaGuY2wGBu9tyA7W4YWBrtY39ny1c5yUGcwYoqhr4j7H1FfeoXMksFa76ty4739iNzj",
  "key16": "3tp2fVey8hkV82i3sj5Y31Cc2EJjk63KuYQTFK6Vjk6WpN5CWAh4RVjhdZGjjHXxHBC8kr5zcTdjv53FbZEbCB8T",
  "key17": "22souMBvXis8aKhc7XifHpFatgPwZ79YNpaxpHfdNQJ1shre1dnBqAiQQyCXpGAnpwsvH5E3kach4uBZtk8QEGo9",
  "key18": "3gnTRBUh9eDg3FgDArqxP4ECnVNjakPmuzaweVFtawwvDWhDQij2zff1RRYaNRmFBqbwTqCY7kyfpGqZJN2hLFEp",
  "key19": "3tgYk1GToH4LRkgpxej7qxYFJsR5vtevjSb34VaoYedPBLUZ6R9K3E6XAjNxXobTf7xA57Fp9xZgffLqcmSmecPk",
  "key20": "5VYyjBBsKHwRCUhik6Sgau1kfUiqCTYmbMWVT1koUBcMcuoT55q7Dx9LLjgM6YqMXkjGz2q4bKAAt3UxJ8yjuMii",
  "key21": "4Zhbp3AghJKJk1Gy4499JBehHwUNWVkPFSS5ikGaT6sJfG2WHD5j5XJv96ccmYJtkUwA56gYegVyLUYHgHbmhEgt",
  "key22": "3jJbHV2vQZnfnjbPfDFzP5QBsGWeTKLUFEijHmogov8zz31pxDLS7ebjrN1KZMjPyYEZhF2ZXKnYPRQ6iYQbFPAX",
  "key23": "2zcc5LCiKfHCrjWognpBuoSc8vNMBW6CtVcrccwuZfyAiHG4ztjehe4EhRUfwg5tpEnwtaGXubLJTYnSJruMFqzh",
  "key24": "3bfdQ27qBjxBk5T2tANAPL1XRj1xREA6J4DCkqt5ke8YV8wo96vDf4PqFRFinoPGdinosqJFxjeeSNemy2CrRpL4",
  "key25": "3DvLRN9Lsp5ZRFXTYWVufhTxbp9mAktH62PPxfYXXELd15nfAvYuBEUCez7EjCDZar4hzdGv8ETr4f7tiEy8D8fQ",
  "key26": "5SM5gQ3WxQQw5PYvK9zq8JcqSLju6HJHy9HbyDyrQq3o1gt3U4uycj4dHkg2v7bhMp16HLdHzCneP5FNc6MMtjVV",
  "key27": "coH4Jfh6ugsRVC6pb6wGZYHLzJ9aTvRK6dPgKxrCuMCj3WLyq7apUS1oCB3NE9WWfNPQcNXhoWMqX8D4DUCUGD7",
  "key28": "o5Wwzpjnnz6dA69jdDxYxcoc9w1rPhLPGj2PKSR2TPK3g7WdQbZiCwhuWtipo1irHg8bb5W5rZARafK3sDUbshc",
  "key29": "fDKXhf5JPFmmh4T3DUoSnGSTE1FVBnezHDsXYfXpt8ur9epnzZVxBGVr4oDKx7R5ZaN8GnF3TNX64EAFBs3zky2",
  "key30": "4Q3zNwkmWwysjDfBA9c2aZmiwPRRs7pgoMCjQVaqdSfgDpDRWCBK6oDDRaeGUSB9aXYGkubVuMwthT1ar8B3eUfu",
  "key31": "2UXmyUSjTbCjNSPb46r7GTz2UHH8yHJp4xEopWEBi5tYYfDP2BJhh56uZ11cGUQVb5VeuDJz9CmD51M1nVT3g5cR",
  "key32": "3An8NWsCi46TuUNhk2aaDu8JbpdLnBCXimnt9ywcSi16jyJUvjgQvtCAwpUE8ohCZM76NnWbbjDwxDkB5yvCBvbY"
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
