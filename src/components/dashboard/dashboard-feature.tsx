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
    "5FhAjvGRzFsYpcgxCDgfwYMU78kgCyfpqbSR8XXmZCgJuaJJL1HELJeZe1kVaT436oz1bA8NBv7gty4W6cZ5PQPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5joj1ki3XDrA83iwaXM1pnmamhtWky8WG1Fr29wL2sZfDsH3zrvKPBRzTuySgC9Xdm9kfFE57azuHrRUDejucss",
  "key1": "2U9aH8qu5rXGQ6Qumgz9w8dmRyMddm6qBe4sT6j5pqjMBDngX3WY7jt82p1YRt8QfyiHHg8Lz3B9MtpWycCg5E8n",
  "key2": "GQYRBd1HQrRxMsVAMr1SBhVmy8xrkVYwPspwM21tCE2rbogB9jemz9r7y4tc9DQbMKfZ59YtAbHc8bSKKq1EXGP",
  "key3": "63BR5i6cDMpUBk2rWKuQDbtvsYLsfAadbR6jMcgHe6fiQinWKGeyQugkd8ci5Vrtu9qdVaBgYEqZgEXioyRyzFgj",
  "key4": "2L1AytGuJ8WJ5Kc4c6WHhfrTXanChKh95xnYaZT2suTSDCcUF7Au8qiouySXrti2kWQhjxpxDdez9KiHYGjptAdK",
  "key5": "4vfpg44kPDwvnWzxk3aTyzbxtiuvyLicBoSWUSsR2pYikbFW8CNnZnXi5MaiGsHRQDZ4PyNwgpPKFgfZvM9SuFio",
  "key6": "2QhgUMXVsLa4qHkLAU1X6uT5MxY7rG149eH62vjePRcCGesaqXDGWhTDQYW4q4vXMT2zSP3mp6fWq3tvzS1qq5DQ",
  "key7": "2F5jbC7Ds18bUxvxSvKusg5UMaMrUBDcEC9eWfonZWMFSG7vqvucfQ198YALCz5SLxoht9gmygzTcyqMQiTcnXX2",
  "key8": "KDriiNNfV4YxDr2LhbFqJ1rUSexm1gM4wjiBYUVuDJQgeReacwLoF7S4Q8nLA7GSEp1fyyrDUaoMvTdC43fTknQ",
  "key9": "5CcXaQfYkXae7Aouqai1B7KgNcRKFeKpXBonsCdaV35XTGu9Aofu38dEXeEDK4SHBiNjHpJSBGPtdZhuSNFoZRGo",
  "key10": "2xQZPnLQr55BrEJ1tkubFAG1nobTWriEJMJSraoYzrxtFm7q7bYYX5ZsCUX6FnZpaom17NxmseQbKxTNQ4AFe9th",
  "key11": "2QrLnn1AxYQHb4mNTVuNGwSryvFkAR1oSdd69Wd32RLeKXN4wASAfNMuaNPPhZ8ccW5GbkhSwdsxXsGM8DLovsgt",
  "key12": "4R37Lo41McoFFxwbGE12pKH4ZWYB6K2YRrwLzkirqUsCvPZtiqwy6EXNXov9e3UnDHTxayDqmdGWgrp3F9SWsKs3",
  "key13": "5VQhNoRKXDyF14hGvdJz43VWzLQX91uzexMHVmubkRVwY8zV4nAnWs9SNMKA9NMZbVp2t69XQzhQAQ5qSjGbVrLp",
  "key14": "5r4LSRmdUiWtdbA8RMBnpjbJDHkStf925kc3tvwGrcoH8iuSFwGCS6vSCDjpHEXCKhA18biK3AFprU7u3iwJ7eU7",
  "key15": "2N2tHAnkwM6Qv782oVhcKWyLv5U3U3nGJmPUrvKNE7hrtAXHQZgAnk4HfpLhM1pBN1G2ZESyLBGi55ReNFd2mPxN",
  "key16": "5c8mvvSnh9GHy4sMmcNJv8Qytt9eripKNVrZbLdMRNrv51mG7SSZw8seG26K8akJtvHY1Qshgxyhix78CKSLoWf8",
  "key17": "4n1XR77yrdGSbjhxCoMRqRVMWM8vzimQSqPybiwdDVtGvqM8oDS7fMCGDinEAQhYWZQfvTrchVxUUxaspiDwhB9x",
  "key18": "2wsFapNVfWfNEroZAytNPXf6LtmC9pNi7JWLeA6vvaHrVA7k6awjA4Q7g9E8AiaQLgKG9BH7sUFNK4YDc5djZgD4",
  "key19": "4yaaEdNvYcKpGLkaiotcUQzqaEmKAj6nJ4R4pjEtANCYHAo22V5gZrutbqzQscXUjLWVi56aU2Bw3bEx6PRr3qve",
  "key20": "64SxunJ8T8Ndhf6np9bmTvefNHNT7RxrxxeP7ABDebVuHfAaPqVn2x8a37Dh154XxmKmKyR2Rbwk4HKprACykn4c",
  "key21": "2QEkwhYkTdGKV8Kcbwr189VfRKZR5rtHe66bZo6AoV6FhDmdVTrvRLg2GSNQDZh5jaLPJfNDt88rTtbh1m9Rs2zu",
  "key22": "5WLUkgj14xDAFHw3osEXspUHGYuLAjDwWGTz4hrbA7UKggZHiEmSJz7aL1UeXxDkgTYadjRaiscNrErQXDGpcVX5",
  "key23": "e3qhre21abmKXPjcGqo6GxjZUT2dkQHdGQ3hUmWbDwauTZJ7Q1phGpusWyPkgzFhW7kchJGBxtL2NAUinyoiPWt",
  "key24": "4wja8xnrrHGTVZ3SVQjdrZPWB8q4BEQjHUNtXQgvSmWAyrD2KRut5pYAoBqg68eLJ44emu4n6AFzcWiSyxkbGncG"
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
