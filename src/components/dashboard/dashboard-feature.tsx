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
    "2WtQr7JQa7C8uzQZxYTAMaJStH6856kg8DbcvZtiMBBog5DDZxFCz1e1RP9JruY2MasaKXPWcGNMUwGPczbGqmpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAMbhcDMAsJwR5EEjYjy8m8MsUstj74hQ3WPfMJvDx7iY4SnKTVFQZLaHAVVdLxUtRBE2EvvzUqqCKgPf3LT6cs",
  "key1": "4UjFNnwzjFXn55gomsQBWw2oYamKfcNZm1ufzfqm1N8YK2bn3WJWnirAgaodwxaUosG8bc2RwCKcUAbDWYfEuTe9",
  "key2": "25j58jw7rTFfNNUf5xBMn5CT4jvgmKeszCw8Kdd9bwXKyikE3eTekif4JAzfr1ykq8cQ2DBvjQcbsYXYB5p5tMjd",
  "key3": "51FrfHAp3yQ46u4syEFCzZUXNuSiQfkr8AJFBJ8A5cvpUadvTeXfZCWH1Xia2Q1bWzfCtQnptGQvTjDcBwpcuWzW",
  "key4": "5AG1fRqvDf4DEyJRGLF33Zd3qvNucvMhEwBwkibARDcJMD969hWS8Sc57m1sRdumxWRXV4fbPh8FmYq6syfatDpZ",
  "key5": "3RFSk7synJfLUe623CZHCK5LxJaojTSWVEEGTiKR2i2RrXuK4MNwCPyeVnhxbg3zzG47KdheDSCHk5T7vXdCkPf",
  "key6": "4tvp7vdHFfspvqVH12NQj5iD2tZcC4u49BkLAHrUA1UfHzoGvBXK9BCF2cpzgYSHLzv1D82jyxtWSoi44W9ksDAE",
  "key7": "2BVRtKrp16jDv7z2C5HMKwVMRCSakxLbpfwZcjKGp9Sm78KMoUMXQ7Wk3TPudhAZTWSFHdoEEQTVd51gzWo9bSwi",
  "key8": "KLjrYrdHQxH4okkg1LFMiAMKXFb5T1KkPvMUKRNGKvGmSDtQYTRKYMw2sUR6VewgVdE548MK8Yr5M8EPenGomyT",
  "key9": "5VdtRkXsz7yEDtPycXFN6NxoGXFMnoHmU5pPWmsu1h3yyWB42cbKboH8QaDAnWztjE6FymT6nLH7woHbc8XiJGfe",
  "key10": "5tyAu519rLA217za5w5XHy6NXKaVb7nxCkMU7X8YMPkDnBVGyQ9nkk1rktLBthQfUn7kM6Cdhk71XiP9VArFYxch",
  "key11": "5ZNApf7RaybRSobF74NmxQpbUN1Cd8KsGRn5e8J7JJUEqBg4Y2y3YGwChoXoSwR43FMyFZMmFjGgJhExEqCUkAy1",
  "key12": "Hx7Ue9g1PyEQhgj86cuLcPZ1hDqCLrEhv2xxdT33YDCxD2z9gkYZSaBD2gBXMLJDXpVwGYmojN2XwWFjsgStbr4",
  "key13": "35nhqgP6nY92f68x3ARW7VNaAES9umRvATXmH4SmzXkHVJsmLo4uxtFiECY1LrhbawhWPX8asdnrDXArk8HmLt9w",
  "key14": "64XmWnYwuLySohZr9nB4kacSkv98X6PP3KFeJqLj562ugpjJtqewaK1RqtKdbqDoPTjjAzxhg2kzsSNvxHso6Hny",
  "key15": "41vfKjhA9qWoJMAXtfzSq1eSFkwGw5Qdv7rDgd9oiz6cw9otyuQ5Fas4cD2SKdxJ9sU9nJYExJeBqkdy9u3HF4MH",
  "key16": "5LE71gpN4JYozLBMcW6P6fb2kQWGtTPrWFm7mMvbRdowHDXqWnpWDLb3V6TWFd2zRTqSh6Gnx3MAWSZXWeTgnjeJ",
  "key17": "4aLmpBNY3RG6qYVCknA2ZD1RknsxApSvKBNdptPTP8oBsfPJEmVhVdV4YWoREJJb4zgoeD8ocmt2MsngQQKz2gvX",
  "key18": "277bpyJC9kQCgoSTWHGbJfhk6gMtqhYk7DS1tWuKbnQTBqbNofnzmj3NfxbRBTf6XHEsKYqoaM8w2q7Ucb5Q9a6v",
  "key19": "4FiYbQeNFbeR7AsMBiRPM5NBZmGhRzZ16w95umb4kHY8nGYskNKXdt51gtzyTy4sSft2zHG4drwrZMoYRUsTSQUm",
  "key20": "vnZ2U45jm9WHV4pszdH8vgNCsH63Ket2WkqLFy25UwworyPseowAPEuffKQLsFJEyyaq7d7b2QKos9SpiF8ZiLL",
  "key21": "v1nADcmkVTGzeTs4xpAVCsdzWa2YoMRqonWrseq7GzMSMstEGvQTYEY2ghfxTvzto43JuyYiBcExUju5mw7ihhm",
  "key22": "526VABba6XdazMvB4vs7r7MVBNC6HSqgmisqtHfVkncepsAkEHbibGRAC2QVV689nWakjZw2coL5HL9yawQY1be1",
  "key23": "32rrqtPdRcZTebNadvownMoRejpfM4zYrV2ZFxzKRuACmyTH1HhST9qVupD1qw1WMpE8ffYJkZr3K3sPMeWLzGCy",
  "key24": "2PfySQzHTJ2gEQXZKaTNmto1SCzzDUQrGnFkoukk1cvvK9R5WXDbVkqQa2XqGU2Ya5t2bjX5XZWw2eqZV4WCiQ7B",
  "key25": "5xSmLFkXfUZMpQZkxVoU7HVPs6uPoch6G9P6kJdQgYaHEWmiR8BHoTDxco1dZJRgX8AdExdwL2oyHbmHEKAP9RV8",
  "key26": "2jbVKBMatfpgwWPqhUsXgAzJJePpmj15FkTVDkUJmHVJ1kZhoq65Acr9qYdemF5dhpUPybHin8SKECL23JNGNfiK",
  "key27": "5tnDZ28gHZaondhU9fXAqT5nCPgiZDfMQBCUUAPNxsTP2qdZQgWzQSMpUsRcHsmuv3TbWCEQDBZa8nZZY7jurdn3",
  "key28": "4dT2aTwMb2ttzxNc3rWAgMf1N4d5cfhhoCJHdouTN1kA2eeEB8omubX2vinqgDK8ASbxb8jEYGN6TgUuMqsg2Lat",
  "key29": "EnmxtPaZD7ZAYVQpuLhsnJGJ5cm3gpeMsVgz78LzJTadMyJgBzofxGCcLufgray7H6ee4nVyLeAUqEsVXacBaTo",
  "key30": "2Ds5twpCKrg7KHwdbVdJ4pHWVPLErs6eXzH79djrgCp6t7UM4ATiypMxkGsAMMhwCnYyhaoMEkU3a1HTpWT5EHJs",
  "key31": "5zz1612YSmMdBBoV2ribh3t8c8p6EHLECXay6KSMkigjtQLEojeS8DDxD1NjUc7FkyyJU4WoANxXPLEpkL9uWekM",
  "key32": "3jo7zMxaerprGdzgWuNVXUKMJg6vJHAChjY5WwJubA4GcRqV9mcQDyVSLB8qdJG56DicfiSeD4hfJRSPo7t1gD6x",
  "key33": "2djdh3ZE6HxmQ7imXaQA9BpmTY47nvGyQd9JtjTq7zhkiu7sroPKyvJ6Ksu2nTCtVsHAkTwntJoq7BBREy2ebYp9",
  "key34": "24B9BVgfpYwF4B6mujuJ3gZuZ8vF3Fb6YBTEYJv6Yes6GuCJwWf3eLWvvHjf8Gy2YRqPa8VXAZmnsSn7k9Sc21SW"
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
