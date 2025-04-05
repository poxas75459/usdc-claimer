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
    "3qZXVxFLsYtcMJuZBLX5Fyxgu7eFgqSK7hApitjK1QU1sACvdjJPSAgaZtKTvpfP47bvojcBBJQhnh2H4sbDojS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66eGwsTw3QbSTdbRVZZ7Dkiw3iMo6EJabhBdYAZK1o8UeNAYGpuovUnNaerMHpNYnwTNTB16PqBwUSx418hk9pJX",
  "key1": "4Lq8rwuAi2BQqPrRKsLRVTVfvX1CwHtJjCe7yhivi7N1SUotG5toTYTigGMspuodiT5sW4kSeYpD9Hy3mBfEAmrt",
  "key2": "3BqbtoUoumZ3MjtcFBTNvFbX5NZmJPPGtH7PNmXf7UTz1F1Ndm3tiA5Pm43UUWiJurgomz3w6j7BNMzRYsoDmVWh",
  "key3": "HpshAjbBzzBPL3KPhkKSSBwqKotUWChHkcVaq3q6vFHCHfVjXAQ5dwAarZtrGeyRdMP1EtvK9VeibsDB7ysTqEM",
  "key4": "NSHACbcAQfLggJHVbmnRH3yrnJ53MDvMdDzCN3sbN7Nof3JxNK7ttJwa2qTtWM8bEmX1841TWd1NAyKnGdj3db2",
  "key5": "2wZppJWxBAyFWkKKMXLBA2XoXW22xSmtarDf58s8wMwvhNTCFHzrMw8ywDdbN9U9JnDDuJ9gvw1vbeVDccuThjT8",
  "key6": "kTt35GYwDtU5VV2x8XqHRrxNh5vdkgL5hQiCiDxTJHYXbgSmaUEi4E3eQ38j5RrGQpMph9W4eVnQbM6zMV3YaHF",
  "key7": "3ucrx6GUNW7sVXYJ9VLG8d4PuMTnQdTGYLnvrrMCajy5qtUcehg4pzPH1CmskA7QAkeawLUpjW1iTPoLQgEc2FWP",
  "key8": "39D8CCtyvmg1gy9GcZA3uNtQSqkWxoVbwvnLVFeQHQGUZZnRZYA3n2JYjCBpTVsK6w8CbBvRMsEhXxBsKiChNDw5",
  "key9": "4RCMtqP1H8Ve2J8LJgS2u6MjpjKGX3NAaUvLPsMrf6Z7g9jsTj9EA7QjmMdiUKQkCogJ9so5noBHaq2wXo9RvPzB",
  "key10": "4kdRVqtYQsLW7mMHquUkJnJZeVKsHuJw3D9BWx67aezfz8FBxEMFXKSekzZfm5ofQMpfCjbPYMo7aghsJbKqrvDt",
  "key11": "4gqofkzwN6d92hvMTWujttjVK91ggjLswaTshmMcM6PqVGAmnsobSMYUY5ztsGGZXGFrd5MVEcmSgDG8rEAzeVDg",
  "key12": "2RzEy3sTYUC3fzcDyQbNbXaVbRDAsqx5QTycoG4fM7h3PhXAVEn46p59PfKwBSs7o4iVCGUd5Wv6Ty9tVCNCHRuZ",
  "key13": "4CyghZGxaELe9WE9XKeG31GHVPoUpdvxBDLsVjwYZeWsaztPWvYgRAgcyWqVgCyFQDSWrmnupHnxRMEmMVzqDxhn",
  "key14": "FfVfxcXEj6BsRm4HJ8BR84QQqN7Kf4tRSmSqWXnBhk8sCfyQQiZNe298bHgbufMF5mTV4629Fm1kibuHkgFuipk",
  "key15": "2e3Cm6iw7oGKfNr1F6GyTzzSeBLecoitzDcoCiBBUVzrfBbLPhDCRdqDmby8LRRpoFZKBWKVKkdfwVWN8StrMoqE",
  "key16": "dAVRNuG1ewiFFbdH7uYiRvFCio1KCWfauvbJmGwaDTpdRAMGVuRKqvDXzKNsmVMc1mbg1XDaVGLZ1v87eW58kA5",
  "key17": "41e1YH4JWRy8w94UcwJ8UkeQTU5pLaKb7uNR79dqXk6vfMQoh2meJNtSyjERGuU6xaxP5eLkfGLvuPS8iMYUmu2J",
  "key18": "3TWeNnbMaZihtCTuCP92KX9msWKuaHwR55Lg9vtE4etETbK6uLgj81E9y3qtsRBrvW4RnXfcX2YQXppVxJnqhTFG",
  "key19": "3Kp35SGVu4sXYSNctE7t6QLWatxS7h1RSH2PKEKfbGoNA1TwGL7qzadg7Kdp2GQvdccsmFTNqtTUtkYo8u38Vj2w",
  "key20": "4iJMLxRX4w16e9TuVkHcmmhMp3N25FRNA7mDbgrkTc432kkGmPNdYbfmGEx6vW6rJAybhi1LpaibgR1gVGgUnvPF",
  "key21": "3orgYT8woPtETUwZVCiMG2KAjdKA77QMGFTuMUgh2hM899rQPmecP3WGryf3cbv3x5eVaFxt7zibyxxESCK1SdnZ",
  "key22": "1kS2PQ91iY6stBN368kTYrB41LDKp6rG52353Qo4ozJWc8Wc9wZHxuw7VZex62U7bhjV8koGw95j9UWgduimPhi",
  "key23": "3HayK9XbVYfPhMyakDpZTj5dBKyCKuzJAuSY15QvXRhncWkHNKBUeaM5ZcBkAKSEVsdmfmYDSuACjAihakvS1q6g",
  "key24": "54MjBbBDnMYubAiFch5GJzYhe7wDL3wyhfQYSWP6RzeY2gPFYHB36ZNhnVCwghZKgpGzAE1Y32c2EQoVxBdCw1UC",
  "key25": "3BnXqK4nYoWWp9X2KnBQzDStCga8N5dDVsPNeZ7TV5iu2kfmbv5s3fqsShEUBWCj5RaKJ5LYR6PxgzBfobhATLc5",
  "key26": "2EFpXLz5WPW6NZNrNBFETQ5gJ9fHJFCWigf1i7GbTGZELTUxG1izUtp3TmCFQyjwddVKVzdgHY8mJeZXj9tkhgW9",
  "key27": "4cVzGwMSACCxFxAsW6u9nVrmYX2bieckHF8hE3v38bKfoHeb3UDH8gn5qZ3o3nwmD2HNLGPGyToMR28B6Z49R9z3",
  "key28": "mx2jQoxByowoExFrHCskPnmZRofSb4CePmc8no1jtceZGYpGjbXMAXKNRo72g2dtxKH13fh7dW2uNe7dXRnLcoR",
  "key29": "5RS8Mvxa4eGcMfbW4Gr2Fjx7rchkbbu4xAyW2s9UreXsrWn5qvZusqo2hP1DigxRvUgkbxfwoQ4QeUYKzWmgpCKv",
  "key30": "2YbsdaLAuKawqYk8pvU52DhHDkPHiNuQ23nuRioqXkU7JSnxRxvKLWsyhHcg2C8m2vRTTSnqRfM7KqHa9yHJ6N2e",
  "key31": "5YZs9vFxe7NaL6GEMTWEP21bkWQbf6eTntaz12bmeU6DtwTvVXSCCX5q2UrCDcDPkYbjNWwKBXQ7KXRqb268zerg",
  "key32": "3JTFxjGMDLnCrbtThTMmchnxa82UnDTSCnLviVX6ViPrj5AyfNfnSiLt7Rb7trW4WYHjWgS9rVPCxJVyyJV2xUAF",
  "key33": "4vTjCGYEBMo8FWnwXfih6SktXLVoT8RRfdqJLkLp84on77bVTkqfqc62uuFvLJMUqwbvskrES5hcZetaqVose1BS",
  "key34": "2bBV5QAujCw58c3fsrbrH6eMx7w7EW8mjaqwXmQacr9L4iMwtM6uFb8Q4cbQYZhQtovnd5X5i5yzfFPqztMF9bbi",
  "key35": "2dFF9frGv9XG8jyT6G43adV4PKuRqsHTJi9bbYT2r6vtxRYWCgYza7rhHz97SaLVfL1MDXajS7ow3q7DXwQnsP5Z",
  "key36": "dSXcA92kLwpizFsTUM8qm9HM9Vb8EwoHMb1t1Zo1Zsdi6jTDWaU7VDWpJwArTRQBj5QviaHcncX5Ajz3Jjs3Und"
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
