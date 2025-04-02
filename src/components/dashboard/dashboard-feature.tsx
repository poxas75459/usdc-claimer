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
    "2vVcn1vUaiJ1c9JfJgCUfKCx5yo9dHF4gjQMxNhMi14tRBfPW8CNWgdcsLRFkvbpViLBWSKpmaZZKoB9HSGJWYhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHg3Ddyxi3xHEbeRTkxQ6AAC2ZZj2gTdPG8Hue9oPSKVBDkx3NQZHXi6fD9aAcRZHxDDdkS9DQmh67FNFimH8Vo",
  "key1": "2KrMQtVqPy52CdvZWXutj7MWZP4j7u5DsRwnDVNKeQ2zcryameX1XsKB4YyqfJF7wtCh5U2F79v7FTrzf3V4ct6E",
  "key2": "n7yHyiDm9uwYxLDnZjzjx3bCj4neakEudUN33mfXhWjsQx9sRupTinevjc34aS7xtzvLWJf63r72YR5Zm8jLW6T",
  "key3": "3FJCADxXbss7uoK3nRHLVzV1wAZxzfWy8Qg1dVqwRthDrET6TjtHgELGb8JyxYDkewyLBj5DvqmShbdYGJdbWjx4",
  "key4": "55z2wRdr9vSxye9sRsgRDiGUHJ2i6XBrEbyJD5DyFejAKjpTrWmdpBpkKxxzNTk2LPZ1pJdK2RkAKhdbwBK9a84A",
  "key5": "3dWyXQB286VNEVJhPe8xxTFmMDsoV2bBtnNZyZRG23D91kD4rSzMoFgLrnUSasAqA3gGB2wBvrkLkcwiNbGUw2g6",
  "key6": "5qEd5HNCnormUsZTQLkzeRvg47hAiRDZ9H3ENPrcmULMQQH7KS4vq6pqyKSWTjtN6Fsc4twiiAJZNU7a5YGCGSkS",
  "key7": "163m6TZK4gvnWbFtgcVs15dGfBpkymdpiY2nDF1sHtw6wctatHDnFppeznP5NuYFbgqZPApfYAcLGP3zN5cQQus",
  "key8": "4xW9bBA5UTU8rY1qouqQobQDjtNjk2wDLyFEx8Yu6VzxiEFbGCcJ5aWzPP6xpbi5aC6Z6byLb7z3m4mctVzR6TYj",
  "key9": "RUr6L5b9TMN3GR1enHVxGEgxpHnxtzqnPTZ3kLb2jqDa9E8KPkXdSgc6XezCyXn6VjEG8n8EEwT5UgwYPPSxwd8",
  "key10": "3wE7ge7XueYYBQ9GUFwNQaf3gUmyaJoWvsMofQVvdfWuSA5qnaHtPEKhiGFtdhfA5sjnaxSn8TDT2vrvR4q1WAZv",
  "key11": "3ARsYWMk2kCZEAgVGdxxFKNm4BKyBdgRPfejrLhA6hrzE8482Rz62wswgFyDHBmwZhbdUegUharwTchR7dRpg5tD",
  "key12": "2uS51mq2zCfCs3N3sqjVKidgHPG43jA3T2JkCNUrwcRmHknASGzyYZ8XKXwrvVWs1W5YgYtSjMQM2m65k57xASyM",
  "key13": "5ZgavPHTU5MM1FekavMXwHj8h3PtPUJSTBf3cpAzVAoPqvkGZNLPa9LoEEwukC6TkYwsFiHUEGRi2hxdV7AEkgYk",
  "key14": "2Zt3iYz9xDvF4qLjfwtkrT74ysJGCpuQt25yCs1pwNaix15sjHUTKffASQAVgphNsr6AAbTrPYcEZLtC8B2QJsoT",
  "key15": "5sKd4ZTU4Bw9MZYi5Hp4qXj61t3oktbwtTq1zEdeqAx54TXcyCETYsxviMnQNHx6a2KvWiZXSLfzhgRVx3w5vZwL",
  "key16": "3hiv3J8Zx3AC3yyeeuF55Ztdq7odCthKRGr7WbsydoHKR983RNy21oJj3hpHS2ULKckwX5dbQkh4R42deoVLLSiD",
  "key17": "3dy1xN3RGgFH7VzvCdRwDNTnhQTRN6haGr1oJRAphNqg5CC1kCuDnhBehCih6cEixsDBQXWHybhiC1mQEWZf5SPS",
  "key18": "4KU33DvePrLcgZygmfUk9Te7LkyHyfHe9mJza514WGabrsbAhgXvPEi2msg3Ka5CHrwQNR3Q4te7CzRGkKhttD5Y",
  "key19": "5rhykDQMRXpHjS3LAVHjYSp7cRw4a8WVFcanF1sagW8jfbckwGnrp4EuzKb3vWCyeZHPKHUFeoSGcuMz9bbSBxg1",
  "key20": "3kAYznyRxfZDuLcVfD71JmkiDFopdctAHEMKXy77n4Z3y5PmkVroXUpELmpTZXaCXeyF6bvgndQ5yLvKeBF5Sfwo",
  "key21": "5BzGKYL4BcbbRgum3hfbbnTEZj9VDyBPRij8FpKNYioekjD46GGNqBpPkisqMX3mXhFjyfAK7FNZRRs6ztgLNSyR",
  "key22": "4B4616ATqY73VRnuRbpF63B7zd7Z34VGwWu6FXAMvFzN1TYsfjQiyEvxACvaWxa7KmLo2G2sWkrY4JV1UKxw18LU",
  "key23": "3fqxxYhm1hyAqReXEwdjzoEC4fTurQCY6SKzaYTZo4P7FNbHyoek2GPm1PsdYzWizdxfDoUNURtZomf6RL7XKnKC",
  "key24": "22hJUHsy4MaASh9JuE9kAtwGHH2SsaStAj8TaVvf6bD3qeyghG1j5zT7KKJ4iak1oHerhSHATauXfPgXNSqNFzR1",
  "key25": "CzHgprYWEQ68KMLWD4Mmm4aDE5d8iMeAWMzPi4ypiC4w7xxnK1mE5qJEkbbBeBU7wHCehPhA9oj5TbbWCDgef9v",
  "key26": "2XN5QZpqZyP6zry2BF5a2EEUFr4i5pAKRtbWYXHvcsGmU55QH3rQBMaHoJ2WAcX1HF6fcvNWS5bbhyVmM37QMZnY",
  "key27": "34SG2oksnqYTLvF6fiRFTYfjcwa7bRRw5TmUopbCC8Cat5hstAJFQq3UaF94WjZZkMFXxZECPrKr6eSynF9cT9Ty",
  "key28": "FSmNZcb3aemSJzptaDi4bA9Z7Hy53XWsKjhoqTdEW7Q3P3gV1a1F87nzTLc3mgGb3Lbt37xwLAmMHWRCUvgg2mn"
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
