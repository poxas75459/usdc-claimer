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
    "66WRKB4JYkRWKCueX8pg6vhVDC3cqYRCrPoyvXhB94YHAWvvLYYuXXqT9mqG1AFBawhDmqAofs67YfFGLBh5tvuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GwFCPg2eBanJGcmeZruqHXMDaaNz6ExmL3cnBNHvY4vxyH7zGEdqZ2G1SPnvxVmvJURNaozV3uthKq27Ha1Xph",
  "key1": "2VY1XXQA9npdpz9qmSaeQBmP6ChQaHKHDB1tZvsUxinMHeNmPkpLheJNhEN1BjMWKw4Ph1nAzz1caLKXKT3yaUXo",
  "key2": "4Ucvzyc8sB1GsTNJ2vKGaBw6e58UucGhHNKpCFqTNcVL6q7rcVLyuHo1kbDKiWLr6fssTpXqYyrob4YfzWh4FC1f",
  "key3": "5CKpG3pQSWvca3p96DxUWmA8DJSJ5cB5DLgKZvWd6JoNMrbxeHy8ffnTfUA8LARUjXqoPzpbHAbZrzqKNVjWCBVB",
  "key4": "21fWirSrmrqait71k5C4ADYxtDZQEEL6VSVt1ggyYsrtyjQxy6kdRwojgYdooZ7TqzUuaBfQJQ1s3HMTsBkqK7Er",
  "key5": "5GkDzNcTPuH8Qhgs7LpAQYGBgbJWMfaqRYLVcCCxQLRcfHJ7tGJ6v3kPEMjDLu8cqGhQSQtFJ1Cc7bLJv2WGQUry",
  "key6": "28CkWxs4kma6H7UfyJoVSs6zJXqgtZjJVJTJQP1rj8uG5Bfj26HJaEaGvaXCpAfcepbZhkPZ3QdhqTG2e9tdK51k",
  "key7": "45xhq47tWa3ZQnZ7yy3ny661nJn8rqpkkdZwT8wTRSW28n21q6zVjiDtXQLWSS6CznnkUktvrdDDycs11SXg8Sqq",
  "key8": "2RqetfZkt5RphTwETr9qQd7SwQHhKMRZWgxGKDN9JikcTsKdpcNtfBhw4qBRo8nU1nr8dgsQCbN29JGT4U4kyxah",
  "key9": "4YG6muYGXj4iPTfXNijox99QxQCB51kinxr3sdK4KDkxJunNftwqcHTmAowdwwH6XXh2y7PCrapJi52Aq7Ymkcpm",
  "key10": "3isuiLsfq7icpPdXri1LLAssagHhSPcdZxRqKLQ2fEjdCVncrFyxQTGzr1p257y1d11ABFYWShrfVHqPiydRRMC2",
  "key11": "2KuX1jMWNZ5FX9HBoKFXuioz6RPB9Dd39GkXg3LnLf9n5nchAgXWiWZcUhaCKuZdEHg4Vg8S8yBxjWWnGx2zycgm",
  "key12": "62h6UmGmyq1iERE2sX1So2GxXQ7jMZXoeNJU7iGprX1SfkC3pvXFEba4AvzabLA2QTEcxXwzzKCtE2DnrQCwWTaD",
  "key13": "25SFJyGfwZhFzzthmPuyCcahHMKSotAAbzqy3U98fZpXxa5ibWuSn5NkRqA3zHhejnb1ApN25Ybp9vTNw8gZVsDC",
  "key14": "22kw27fD7YQsFtpiweYM1qAohjmsk9G13T5T1FqSWfpEXeks3KKiibduAtWXotC789XricGpErT6KY7u1QM6Pe1e",
  "key15": "42PVEYDbkJuz8nqrBkj2TeU96GCt5LYHWVFwhBUumpZCyZJWHwrQwHBZMRKyAfWW7nzNoPALqk2qggSMqz5etZDK",
  "key16": "bicdVrv6tCgQe3f8fSVowefjJ6RKQN4bD8N7c9wtSGwebP3oP7AdPWWiJdcXKJyHSfeNWLYAxPSMbaj4hDPBqu5",
  "key17": "3uB3H8pAfYaCRf7VJ6rJgqyRvRa6pYeHrapZYfhjFwvngK764cX25eqPpFcVgqcCYTJT4MuK4x5Ba8veujxy4c4e",
  "key18": "4i5cPKmbKiky8P1jnDtYqYTJBnVmyivhVNuprhxK6NYSXbPweMdfGQcSsPzqgnf6q3P7mKckR5rL9ibSjn1vLWm2",
  "key19": "zrrotuGt9y3WNLMZkHoaTsju65U4Xv6Kef5Jg2TpzEYPW2pjxWVA6TgSXp8hu18e4jAHvdYWgMsyCfeFw5ixUA6",
  "key20": "5emav3pEoAuqRY3Y22NhfwtNnUWoeciCthzuTcyiUDm42D4b6fuUzZjCrWXFDcjiP9pV3VCt5AC9gxC5xR8vnwFA",
  "key21": "JKfTVs9NdFzzX1yxR15U9amshVL8PVxxknEqdVGcsdmvaQ7NGCqe118X2djPESZLE4XVUWBDstQhMTYZmGFAmmH",
  "key22": "2HKkkmPEyvPN61M8c67UiujjyFJZHufu4EsSZyPnS6SP5zMf75KYQ4aeRahzzteVv61hKnicpDgXYwU2P4frmuQZ",
  "key23": "64iNKncmKe2RXxX5xfdkLavhXFqQuGTgkSAkV6Ha59DGYVpXCMvrbeWhHcKRWd6twhpQN3spsUegB1MMKxCbU868",
  "key24": "5rxN6riNGc8oTuqwWLyY9xd85gsHpMm1fdSLHwknHtEoht4cGGzWaNhyHVRLLt55vUjJmMv8gHVv9DVJDJzPnS2z",
  "key25": "47aZFv7LK2ts1VbbKvHMJebRZzaKV5qN9BiYiTKL32vS6qyp97YvUih3HcUn2Sf61eBDii83TrJVhDdNK9CN6pUP",
  "key26": "5TvmswWeyufh27GmbPv4AmnXj4YwdspmwHMMxhQ1PWLYNVCzuxnervZtLMo9v8552JPtzV9wNTchFZJ1AmT42uh2",
  "key27": "57Dr5vRvUDhhXSTjDe4w19Spy84Zc7DYj7ks4Q52pRK8QCmMjmnRPYS7acHr7jsKTjLthatxoCgpLX7aA5396mfu",
  "key28": "4jv2BmuVRmHBRoMMBUjc7E35qM2vbbnRLXuxqCCzMDMZUpavJ1fmVTRYQTqGD82DZMhizJpanpYUM5AK5u4qaYW2",
  "key29": "3ynuMsXYsdJA7S26CZAXc4KnY1uj93dNcgTwzRsMuEnEvu5oL4CbkVCcYrgkQ9KgcxH4Y82CDVshuwXenXwMGkXD",
  "key30": "4PFeLXsJHyW4T87XhtgHTpZW8mnLT1w3n8xDVc6sbv7KTGD33EuXp2uiLLMBSyyKbiyTdSz3nVDrTV5xkhYpf2Wq",
  "key31": "52QkWjATd4EmNMiJRNoZtNq7wCLUHDLT3cxrUEx6W6B8oCHLS5HvYnqJGAqzT5Dnh53tQPTSUksjexVMBbuNSGTP",
  "key32": "4Y9eMwub5UkWcfi3cugvRKxCtrcKieq9YmP68dtDBVqcdtjMtAmTHsAyn5KKrEVKARZDuFaU3Aeyr5TdmsLraRJ",
  "key33": "7MV3nkobK2b4ezoJieRfaNKfGz4F679gFvAzNSU3aZsgCjnN8D1bM6z5zaowaREgUssjHf2B4RDJmvACAFmXbYR",
  "key34": "4y586qrpqses3YCY314Ae32RjpTPMG9RY19rXuivmGQUbeSW7LA9UWkafSZXVHSkjWPdNTFgXJLAmipQfXCCQYVg"
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
