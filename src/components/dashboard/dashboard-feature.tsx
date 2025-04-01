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
    "5NX2zMw4XfbPUyQMFBYnviPGrB65hZQrccPAS42pG6Up2p6PgV9wJCKpLYaJYpsA1m9JsZju1wCtctV41K1a2hFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x85wmSTGrgc1VKtdbXE9TGi2x5cLwpqLZiENSNyP2qh1k9kSmLMAwbPqWVBExyRbhpL9dDjZC97txzPq8GD7YbS",
  "key1": "56UaBE38Run7Q754zRzuY3KMRuJcAku8BgZ8v1gw3fF3f6xeDgovezXnPeqvMKJBkpKpC9tTZZx36zxxfuDtcXgC",
  "key2": "5cGixi4GdC6aDuMMUkcFXVtLTzoLk4DspQXkjxU7N8vLRFq7sABop17u76y9vrnEt3FHwYQGKuGLHoDJwmzfZWSd",
  "key3": "sXYxmh9qcoSHStm2YVaVgEMriNATPSLVbMcZVHVu2sJrGVjZ3YhN6BDFdHNJyJBMdmyMcSfTpUFnBVenWgBEy6H",
  "key4": "3bX6q9NfQcEfnpushiq3qyHiwVHfeuky8WxUUbeZSFNJSk6LxqzLyqXUAN4nYvzDeecK1rU6gZffGJmBhUT4LFVn",
  "key5": "3tiZRj27XBkVDhKjnv8sTHF7DE4LPGv4pNAoZiXnMqf1McQqkSctJG3hWMFZwakg8X28AWR8Sx63rh5VyU3Kpjz3",
  "key6": "5jQc91oN7xB6fBJhyQegniXHgVWcG6msT9MGUUeJnMxZVXVwCD6Lw7yqZZpycpXXNXTHAB1RfzbdYDjiBDVEkwCR",
  "key7": "jcRtn4vzQ2DhNBu6x331ZaXfSMv6vwcD95puk4qqfohd1nKLKQi7yJa1uCFvDfV4h8jctZZTVAERmfiDpNFzSVs",
  "key8": "2PbiFCNcxvxn9X5kBcBSJ7TxsRm6sDwXV6qRBYpyb3FtTxVwEPC3Kbqjsc9muY6RjWyf2eTKLTbF5RqsZgUPBXnV",
  "key9": "3KwvJbR8jaHu2f1TgYoywKEqo9xF9VD1JcevnWxH41eCpkmM8m4PPpyaVmk5RqqsziTC5qyatV8crXCyLgBnWTTZ",
  "key10": "56UFDHvvjhBx64EukdN6VinoD8r6hs55DZiKLbMpMsDmVQzbtF3SfejeEou9c5HCvbSd9BK8B9KcfDnCjnDmcPhV",
  "key11": "KxmstovkANzVs1dfSVWSYVAFKdzR3HMprkfP8aDd8yLHmS7Q7n1Vh1ZUZeaQ1p2yTFDSAcgPqcfXVcceDo5NTVv",
  "key12": "KoKDk3PEsCebJn6vsJ7qWqnLmpQPSy7x4wahqUbkBdQpBypKGL6QfcqZWzyLPVU9LoNySgvj557whc1NaHuysMP",
  "key13": "3S6a14XuqMNgJZfLwLv4bnbjPu7mpwxW77A7Wy6hN15GvQtyoPScXZvWS4ob64UKNG9BPbY3Ya3b2gbnCGWhxxW3",
  "key14": "5CVAZwwTHK5hSAXuMUUXHiyHDmnLax5TAJXzHr4smyoHxiKmqre7XPQ1DsCKDn5mVrLxiA5ncL9R7xkAqThU95b1",
  "key15": "4gkoWadc7rMFQng7Wg5CxtDPmuq3Ft3iWZL25VdQvKEbaUcFnyou7mN9XnKBU2sZ61iNuvxYK4qMqA6ikZAtGLGT",
  "key16": "EQb35YFoZUoh1LNjPc7hKTUARPh6MoJnuyraZXJmga5Psycykn7Jd7PUtefZ5JfJMAFjhdx8QoQcSTxQzLd8LV4",
  "key17": "HPHane4UYr7uivynQw1VLFvNB8i3JiiuotYKagFxMRGkixXMeS52AvfRXXpy8NTY5A2xJmd8CGVAj6pvbRqFApe",
  "key18": "5fuSHo17XCCE6wDicGx7gaocTWJkiugwoUQb5w4iQyuVx3yehLMVrnZrYdHJrs9hCyHEGEVMHjD3NJnKAtH1E4yV",
  "key19": "5J7dADLY4JoMwY845WT1Nd2z3wJ5XzXeMP5UvNBxhtWFoQ9cTLQ3ZYyjxEAVFt75R9ZSwPWBMs6DJQUD4GVBCUDb",
  "key20": "4tcLQyv7Roefdc9yUMMRmP8Rx5Xq523Yzpr597bvZAY8X3gqUjnJf2pCBDSijRgf89kE8EtA7nP4XPhAKtMkXEMB",
  "key21": "3P59uQ188tFJZzwuMSEbZYmcwUZNW7RmfUHfYuJgdSpYmAnFqmP4WQBAGU6hEha7J8txXq1dCQMibaN4qLoe2xiN",
  "key22": "dJzk1NxyHN2as8AyBowhj5koe1NkFYvmFBFfh45PFtXqj4q9ucT5zaAywAqFoNZwoaJz8caq8f39jDwYMKhqiYx",
  "key23": "2MvH1jKJgoeudixxfBqQ1f8SEH8nSBLNRqDDSRNg9eNmHedeQaPZs5Dzpxn6RM2CHsJ75VnhbytNXQKdFHZR7wjd",
  "key24": "25LEzcAqJmsXXjedNsi8XXSPoXSuveRkqSSUJ4MSco1uVV1frntkyWiVRPL3jwkxDBXUVEBxEsiMzrMoRqLLsUwW",
  "key25": "64Po2ZF2iscMaz27j7VsPtmf2SiDH5Yx8p9aS8y84gLapBUaJGP4hfCLJfjdkRBrLZQXfsT5HJaZPRwQpw6Ln9Zo",
  "key26": "62G51CnYuFYEey489iVWQSfVVWm3AVcF3nRf1bed1En2qza8nV2xT3PWuJ1eFU5qpJcQgCEw5NAhM2RiDhhKem9N",
  "key27": "2qw4eDYNwcTyw3DnGk25AA9cCH8VXSTuvATtcehSsvmKmZ5y9UY331aMZfkCt92YMh6yCg19MfmJJKejW8bFki3P",
  "key28": "4mveSFNkFNTYxRKpMUUHeKWsoWz2fkpKF5NkrQC3DYsyZfYD2XaB23Eyq3SALPnNR6YfKNjYD5kqCYox5LzYnBE8",
  "key29": "4ejMNYzZqQMUn2f2QnLtBqieTKrhncqhwjxv6YJZdW9eh2qF2HC3W4qihJ3fefN7cvb44nqGr8Gh8qakQkY6UgLu",
  "key30": "5BiWdCexpZudG2dNEZJ67n7bjeDz3yoBGgD4hdjoQ8dUWp7tyb2yVeTpAYqQAkUZLuxT6ejs3JDqGJXAdbqMq21x",
  "key31": "5zZyjPqFBPEukDReBe2cRVS86iRpFeqTUJVdshh7Vw1LPKNVQT7jSNe8DPGeBp1iqPMRtnSeG9qHCqd6ZYJBUGFN",
  "key32": "26iCpLGsBq9njdXW1ctXg8mL45SD1jGdUnxhf5Ys2qgWd2iQjzjas6b5whHVyfnbAwjWWBCnAe2onMMZAs6KWWrm",
  "key33": "5nFy59hLZ3CHgqXf6WbrhirYGNUtYtCBioJEYx8tpf3bEC4xwnaYNFCD1cU7AQCkbqz1DzWNGwebj8jSZQbZrv1z",
  "key34": "4w7Hrpmv6g73dfbnzU4PMTnWwvACf35vv3MP8SntTbQdHj3JzKogxhkkTBEVUD17t4U9s8WBCHqod2aiS3u56fMb",
  "key35": "8d7tWGHjXpbDuDALQ3RBAGj7K9XK4T6oec778wpfzGFZiN1hkFazWdYvZZKYR2F42WucYJPi2kLiaZ2M3ooAoSa",
  "key36": "4ejjS7ESm8NKBaYLY8MwvzdN5BgMbxr8EZezmrJi3PbBCw2GTqtNtPRk7jh49Tz3t7ixYXzeEcawUsG4nLEUsXga",
  "key37": "hXTM8RmckgcdqDDrSzchnk8czPqo8KTByMvQg6vGmzeL3cnEExURYjuoxNgJ9aSMtkmNZjArD1bntBjQDe69MLk",
  "key38": "24aGDy37JFjLZdkyyaDq9rEpScUy7rbUTTNkFXuMtGGhoiNx3eYHRdt6o47HPbfkUdHKPWZqBBngTPzdSqb8z2PP",
  "key39": "yVzvZDr13cykfmyDkJ7kay2JGk9n7Vpp5s8UCoy4dLtCPYjSqzKdCJf4RUnqAchypAguZ7mBVCpetimDkJsKJYH",
  "key40": "4SAMY8sSpzCZYgNvY5MzTFiPCBK1LYV2PqXPK6s4BFq7qgP9xDmhzC1fJ5S1LZjRNzENSYyzNFAL1NevHL1UkFyj"
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
