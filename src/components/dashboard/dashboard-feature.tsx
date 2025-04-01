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
    "2aNxjgLMthdaHkuFNrFrYRiunYrNHrQNApbgqgYzcqcc3jLrp5w3oWGd5X3BYTCks3C72yb2KTKR4fE8PE9joLqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mSx8dH61ff142Frr6GF8vUW5XsbAnjw61xKjnTcvyFV9ExwcbRqUzcTuTNejWuefMTcny71EsQAeSRp9SPNXSp",
  "key1": "3DkhMJuHNoXARRCFrECgcqtQw3gqjvnPFDtMqEC5zUfJu5qPa3d5oBQnzRBJw9MoaVY7zWAiP8PDxGveyJpiZTdn",
  "key2": "34bLLc37tFsipnTrVeCmafTJNfTPqwJgThhewoLVwqMRQFRE8LgNsXftXrxKfXeGxMdWjutDmVZnauRcxoF5xJsu",
  "key3": "5hzaB9YKrzJnFPf21JTDZVHF5gsMN91dZf5f9uAV5GmJ6CE8i5F2GzTTqmENGCtBBZ5SB4BHGuBMWnMk9EfQ3C1",
  "key4": "3KkKDN653jGpDv2fZ23u3daB9pAdtnJnEmj9bAU5cdgPCGAjxUS8Baqu7eNjbz1zL3pGkqjochbjFh8RJ2HWr5ZB",
  "key5": "59yThk6ZE8AM2ChRvuKioPvwSfw3WSpmCuGhT2pZBu9U5yxEAAjmnHhcsTzhrsH2pMbCA1xsx6b4LeJ8efPqpjie",
  "key6": "4sNjKJ9qdQve9hWVQfWK6Qds4cYbsDEcDWQrE9qndbBvQMUdEVArdW7rE8kWhSemvYcfXcV2Ugc1NQBBUp5o2yCn",
  "key7": "4VzLrtvbwBVwobV8HHKDTF8Q6mJQnZ7ZqsSozEXrtiKf7czY1Juz5m13VX1xn6kUHZ9a8SoSe7pV2v6wMRUgz6kv",
  "key8": "3ggxuS9n1LL7qCyHLb5vwuEsj88ZQWZE3NzsFeYNEJ5GHjzGXrXcTmyMQMDqngSeVwf3Y1tkbJiJyTrmjGMFo7Vz",
  "key9": "38t6WW4wsLWrKAe6p1BSJUoCycgNq12VW8w81M9mVJA4ckTi7iQDx1mGrc44po9b1cF2vpDxTW99nVF2EF6WfNLs",
  "key10": "4mkKEpb6J9UfMNeMELMqzoc231iCwChykfbS88EJdnVYaoiPe63xfn7baMgVCojAUQZz3jcLpYdDWBCeUw9UxUDd",
  "key11": "2tDsHKoKFsQLhqJsSTUCQxEDDLiQswJXkb1v1LNbpwBwCk6GEKcu6PsMxyUrfvKqQvz7rCoJZRrX54p44cVngzBQ",
  "key12": "9NfmihzdBjBpvL98gkm77wyxodPMouyzMBkCgoBm4rnkfAej1EfsL1JFos7wiFCP6fwsGYbH3X9ViLBKbZ4HHAG",
  "key13": "4MiFDBM1Z5QZjH5CpzHtngdeKfmyEdJKW2PVkAyb3ND96TsxhtEnzcZGsmEqsvYpP8H9Zy3czHe3S9r8iEuB6enP",
  "key14": "3xvtcdqAcpTVY55xu6rST8oqJpuYp4opk9fuSsxqyNeNfZuoqx8FcXvttKTSRaM8t3VdLhzkQK9FxKTkq7JPujef",
  "key15": "38WmJwizDsHyXAAVXHsfvc2TGd6wBNM31WLkJec7A834zxU3HLC3sZ3Zw28QYx2X8ebrYUsGeh9hqbETnKmpv8rp",
  "key16": "373WQeGLa6UxvAsmCaF1EhWLXLNGXMRvPhVX1LKgXATQTvmAYKrp9GVDMcCNVgqJChioRvNFiTgUr9Xu9cAkXBvM",
  "key17": "3x3GTK8nMmJMPhDEBpsju862eKQfHrz1tnGpaMkeTQkQ2A9p712aKh2xUEFAdRGQKFJdEa84Y8aGzEz96WTDwfn9",
  "key18": "2bFktqbySJkJQnu1rgrA3KjSpzRA4kDNjCpdeWGGUR9dD7yA3xJ7gmwzpF54sHiptCMnqv73vJkXZZsQ5fFLB9YG",
  "key19": "2QDS1AjnWn5tG6Td4DwBaXUzvBH4xe4eFJXMgfzaz5AQggm2ehwUUsQ2ViGTGS5JSWACBFJPfHaCMTbBj8iaDy9A",
  "key20": "39Z4tLEn6zNPABHg3HQK52uLW2oFejUQx75wxij6FCfmMLL41W3rJsRsj5D6FGgAT5YFek8boED7HzePXwqW5s22",
  "key21": "5dmjbRuRZ1nm5Nuk937sFTUBd26cnV9CypDyDc6iq46D8gtfJcyLSdY5VKoKtimpYFtp1YFpJHeYThc3pmdjBJkC",
  "key22": "aBBKQ5Vj5tAJnfsRrHrWax9uZsbK9Gv4DTB1Pswz3Bp6ArRyYzsXkdEQkzDppkhB988aJMzCTKSh3pJQqHBCG54",
  "key23": "4xG9jfvKS6Z92YkqfSYByEevHd9verbM59pmDmyhKb27uRKKis8tFTGzi97fY52Y4xwV3nM35JBATJwfhoAom2sy",
  "key24": "2vEjwe4BD2rYACC5H6bNdvJsQxriEHk2Lzsp9a76LmvD1BTQxeSgPAkRrssB5PTxj9hmWjb8udcs5YhkTxyEsSkV",
  "key25": "489cc5EVFC37o6ABUrJH2yP33b5eMB2tHcR86M8YjihyYAdcGrPjQNuvriQnj21sFoZ5JzrZ7LvCEomAEJ7Uvzme",
  "key26": "tJzqDqgphWnzZ8NeBhebZTPWiSWwYkC2G71ijkGmLXXg6SsMdGKH2yfRf8NsW9syKDAqZkuqGUjaNZaBBa57Tup",
  "key27": "3myt98Jgs71wi7pV5Zzs8cWWV7i8qj574FLXYPGACmX1FaK3KLQt5TDmeDcczLMwm7ij3favtxiKJ1q7CKjVoTwq",
  "key28": "3P2ETfLesgTJGAzGTdSrceNXTzSn79Qtgo4fs4mYSBSWggQc3D5ugvvgeKGKXHdtTjjf9zf8KvMrDqCFBu7QSqAY",
  "key29": "5hoJG9BRTaj3bBbwEyASyJak8AGT8gNxbR7QHySAdU7jeJ9ZhpqPMuJ1agti1K3jrDXrppUea79aN9QU4zKrw28D",
  "key30": "3UgDn4Chw94Vb22zhXiiMoKedTC7rUrKSRt9oBqy9vnYnVZ1pVRZWbJccMknvAznJuJtXDDS9QMirMoTyXf2SSj6",
  "key31": "4gGA49HNp2fRpWnnpdatKvGcHnGso2d4PkFM5kpX1UErgia32Hy94YaWRYiYhn7HMPvhLwJ9ZmckyAxwKA9fXAfU",
  "key32": "53orqdS5ZUrTAuB541cr7BsXL7hEgV7Rn2BPGUSiUYXfRpkY53A8DjY466ry3vFrYLcL63uaT8JZXmHD9wJZ4jWv",
  "key33": "4mc4jKMfqz4gU2FJgkcLoDa3r3LHt4vSnAygB1YXoici3G595oXanaKLPzPu3iRDysczMMfZdLDLNQE24u8iXNK3",
  "key34": "5QnAoP52r6PW21dBjmYt7Y3syk8UjcVRBAXR6AKdRygCHTvfYZ687UT4qSuQPRZ1M6HdUk1Sxf6M63H8BvDC2pKR",
  "key35": "3SyeK6zeKusr7Z7ehPCCfduqasVbVyN5baAN6rpzdJb1ehiJDsMQACVuKdSJhaNh2T84pASUgzPrJFsExhf43gZm",
  "key36": "4HRKUHnrm5sMW9tkRxAKR1fdtvtU8dXGQEPU6kusyNX1qVz4LRcnKBfy9RRtn1emMtR7pT3hok8AJzf8h8EdAJBY",
  "key37": "bGnRQJGSwwnecg2Y7cVK47XMd8KoUk84hdkLhaCAcaGH7u55XaCP4ZJJCimGia7F7BnhYbj2o5BLRfSA3CzjSXN",
  "key38": "61ydNkLbpa8YcNUWVCceZvE2tcxNmm2FUTbqfVSQz5FiSLhjdqrHjPPcDNdAVXDtLCBUrwcDBQq9nm4UWrqz79sG",
  "key39": "4P3vmbRvzzbWXN7U3FnZhCTF6gSLs3H853X3F6No1947AdTa9jxhKyVZeHLvtwbaYLupgZuRrvHcvNM8PMnfbNFs",
  "key40": "3B4sqaTm6sWkobY5fcsC5u4Na2BTuwrgHrx7SAkXw9R8ULCsa7K5qR94tvP3YbigkLR3niJMAoymph2Vz1AEE89R",
  "key41": "ABgoFkP3yf5Eu878qZxmopCJaSwcAsWN5V2qxzGPxFVSb72npyBZnNci3Srcs1AyvirTwFFZYP9abJWc6RYDchs",
  "key42": "3uoJ9wXYaFrcgxM6Gii4RHNG3GrB5w9WPntUwoQfmRVymceCtuK8FtpTbBWbM3sxq2J1rgXoDLb59zqfro6SZ5eF",
  "key43": "2vPXfoYXtoXJVFQjeRfQiYTj6jrWQuuvZiDz1xnKFsapbTYPMMDgtvm8ni8t7dxXhxdmfVhMfXjQmYn3cF3WVDXt",
  "key44": "EYitFagrJE9VdeAtsVCuzmqrjddrbgDaMKsTgTFau6bh3HfpSDEwXmihpbxpuDRJU97PzUyRHwL9BBkdwzygBoE",
  "key45": "3x7GKBjYWzyLZYZDFES4xmsE4nAjqTr6NWSHNvjzQrdAAP9HUBM6bAZXSsv28NDQwgSeM59u3KaJF9MbPcUxptYL",
  "key46": "2yHgYWLJaAbC6EtV9Jh15smB7ZknkWibC6gzYSVMP1gB6AYF1XUDuS46thDBsufdNvH4voauC6a3rUnDtFT4dSUG",
  "key47": "4Hch2gbDxrbhEYqgzRcCsm2SQkYnGEiH9sztvqDpPTKGxqkqhpWFBC68UkPy8jfEgDLDiuHRH5rxKDaq7F8eunnx",
  "key48": "4tstj59X9byDywx82pLPQyGRNMKkKeTRwm422iU4Ww3uNhYpPtFhRCbA2gqf21o7MvzXEFtoS9gQ2j5QCa8LyVBU",
  "key49": "25RL9u9TLrUqj1zQ1KPv7nSVAn619r4voVeX9TmAbPHfTjT4Wjkmbzx7ehbvC8ToLzfknqoUmZLW2h1QVpjLkuWF"
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
