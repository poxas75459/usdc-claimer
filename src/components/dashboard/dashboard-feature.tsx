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
    "2QdYh5bWGsSoUFALS8h6aQyXsFrJwTz846YqYJ5QLohqqjSKifR7hagMZKAtP2Y8YPPG2VsuhWx41mNTFBLRZqS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHX9kcEJ4qWR8pP1GHoKiXaaQg2ktL6RLxSyCLsNHG1QcgY1unAhAKRWHMoScTXvCSbAzLirc8SSBSSY1QMmAPa",
  "key1": "3wSA8kFo3VLFJvJNzJdQk2tgu17cN3pBvNNLM2TYu1YFvPnf1A93TEs1tExFgiXtuPh9eQAdhpDS2Tp4MpFGjxbs",
  "key2": "AKERZWUU2D7Sek5gU24Rh7vEBuE12yPtLcnL1QYQwPTPEEyKZTTz3gYhKmP4U6KVqaUrRbCaDLaoTeFLjqQBYZb",
  "key3": "3B8BKe6AqJLUaNbfrjjbcBKJ8gsdBgrRYeXVxaWbKb8YpCo3zpprrnrbqvcqw9rQhhPWMeqBqE1oWfBKhrwaDKpu",
  "key4": "apGLzmKAmabZsyfC7WPpYukSFeGxg3UwUNL1wr68rbQs1T9vpPFVnuHEoRDZWsqpAaJH5fm9hNKzdG3vbeiiS16",
  "key5": "5GJb4xoCSpFoMqLZ3d5RzRDMyHm67J8ojpKkU5uv6ZaJXYVF9oMbAS2ZxftGXXmwFptanMtjQzugnHGKz8Dbzodu",
  "key6": "3L51Cz4qBX1Eva4k2nQLUrewEkfe6u5oBLP3SLRxFomxnt5Vc1DbJjyPWDuwyFpJAAeQJjs4sPFApzkczBjNMzUL",
  "key7": "3vPs9NtHdz9MrSUGvCscZWgaT3VGukE5LhYBzAic1L4y4ymsS9KtaqkeuBZPTnrT4bdnstRB9YNv6EAwCmxPAoSg",
  "key8": "P3jxB9eMTr6kQ9zYN3iiZC5c7sMn9uApPmK31AjY6CddgCVjjm8aqGTJAuxEzv9qMHLMPNs4gpdUsK9Sw6CD5xr",
  "key9": "MxGK9fFSdQa3RMZ15Bg8EHJuno5AQCJQjZV8QKHBP6FUMiYFn1NPj4P9vc31s5724MjcrwhrqQvWGdfcAHrVA4E",
  "key10": "381iDTjatwuKA1xbJRWgtHivpba5u5pm96xiQCL7xe1bVycdjoptYcUh7dxmAApLu4tHD2g9MekydamBwrhme8xw",
  "key11": "4HZinR84xkgi65dv3MUbGTALa2H1Kam5wWNiaRzBbnnxLsccJjuo8C9dFveGTt6FQQ6i2KqPYLrxGyXNvkvqq4KM",
  "key12": "5TcYf98CWWFwk8CxxqKcKrK1jTx5y2jQ4ctbyWETJFsLF8eD8oYGpG8pKT5p2Ur3CnPoQDwPSCdn4xfGj994SZ4c",
  "key13": "36v5qtGKo4RnnHXSfjoDPjkyeqmCtXAv4h7xS6f4VasBCBgBHYFMs75rMhqdDSBeP2aQX6momjQuTxKEa33Y5ncz",
  "key14": "fWPuqG5QcebhUTmGUeATLsP3mxeB7RWCequmEx9TYxwN7VS8DyK5nz4RNmH2vfkgXKZoqjU9NLWutLEYYEgZkjR",
  "key15": "4Rvrsq4MJvKp36JqjD45a8GgmdhpCCuiNW8uM5qV2iAwbHg4GcZgV1tJtYGhk7JgqRE8jn62aLSv4zEUXTse34Sk",
  "key16": "2QrzXLZbNA77pSvRzUrZxAKiyqoCbfXNLnBAMNdHgdG4vAjxh3pE32BikfrAaxFC6QekKGnBCT5MxDCsyAukqkAe",
  "key17": "wngmyoeuXs85KhDGxd64a9CDbeKpEssfmv45L5PxxHvGaxhY7xMDGBaP4Tf7KwJsh1CkZHBTMamtDm4pjDouk2Y",
  "key18": "57WUJ4nBS8xXeCAPMEEZdZUVvBSVjuJtcmn8P2jznJEQivzG8qA5KGJUFRQusZNzFLRccEZtPdAVXkwKtNi3g46c",
  "key19": "GndetZAbGYZvu7oKBJqDRp7rZChJ97o6vF8Uet2KmBtkvj88SGD38Uj8ECY6LRtfppf9QvbxLdGe613nsz94S8C",
  "key20": "M5YKuZxmfXga12wZWJz9BvPCKfuJTA9qkvw3NLgbJfeRCGLToMugDtHSK4eWB95Y2zQz3jSsBQmAnwaRJhsE41G",
  "key21": "2tNJexHGbgPsr4BijJoKLQf8gqdb4Rr1TVKsHnwnLC5hHKv91MWnRqwNUqWGShU5Sd8KMpLawyctHgZoZTdBDyWi",
  "key22": "t5cu9VwdqkGNC6ubSY3Ux44uCbMFYtYEf7dRmsm8hvGS6XAQ1HBRALXcK8fLTHRNUJhuxo8FHUWCgRjUD4622A4",
  "key23": "2JtpWyTi59r64DMfCAwbP6irMrh1eK5LZCb1UqznucxAuA2bvWK3wknDmFSrErp64CXWuw98JjXGduESvwPK8B9U",
  "key24": "2ubH8keYxtxcU5x7eQNW8f6jjnPvj3QhKpKdtT6bRbfmB71fUMU11KeYf6GaVH2Tb8fj2qUJevQ47EocpA3VQvJb",
  "key25": "xArzaNPio2Whz8CnoS7CpNHcTH8h7WTnGLSMJvXr5F5EbAMv3LPCFdKYojW7bd7SaDBc9CRMUQW4TRhzuoK5Sb1",
  "key26": "2Dn4f6Dk13eexVWbZpmU9HhhprX2E4ZtouvZxufWGdp4zfJ5j4FjdcW22no9xKRKWjsXdJZdLtVtuvjKr2bRKQTU",
  "key27": "5dGT4udVwjRBSErXyVCyiLwDagiD9oEgmeTjnifG17LnVY5nkKy1G3Mkt3c6mzCVy7aCbtdSUWAk7Fz8Bms3zaDa",
  "key28": "5TMtJfDM8MBzSnD5yr2BGewQNuxDNcGcqRmYwtzRvLSNB19JwYJNz55je9U18KtW8vaXVDj5pgjBbyohBp9Qq3Ee",
  "key29": "nScSrv8A1PkafrC8xJpd9WAToHghxsbBSUhaAJaYm4vhEFLaZq8ttCRuj4uDi99EeSbjnLJS1WLT3tfxGFZ5wUc",
  "key30": "4czKNRwGw72u6UxnfvvwonncSqqW7daZLRnNZygw19vdUWq8j1ae5R6opM8mxDr7AyMLipTgbSL5qTtUEzx5nSBj",
  "key31": "5mhtzdrrhvy7YiN6xZMDjCDBXBByNpQyzVU9bfyFZBBZGijhdzKVtW5AmXcvQrVmi8QANUxL5A2qoAtLtvddvNC6",
  "key32": "52pdGgjNPX6FipXfCtdMBhk3SHYssMUh9eYAE8gBZBQCyib4VDRVbqQdV2eCNMcZWhkouE7Sqvratq8SVXsjoLZ7",
  "key33": "377xDvFCw8vuD5X6CbU7kpEWRruC8hKRRu6J2c9qVw52pg9b9YAQV8wchrAonQVCCFnGNVw4T7S5UH1NE5vGSQh7",
  "key34": "5gjcnQL8qMkULBfLejMCDbpxQJxwjPe2199JJUBuTrij4tuEggeUTtvCvmiJ8hD1JMj4U4tYuNqzaxfV1sU7eyHi",
  "key35": "4rVjdp7mdabJU4U3U3tfaRg7ZQjczJyrfRCxKfJeXWNX9NvJhP7PhV6o3RhFb3d9EnZd2mhYEWn1ALWMnU465FEh",
  "key36": "3jxgHpZmzFK1aBpi4DBoqbPwvHpCkf4x8TaVR6EcT4kN57gRF9Wq6CBQvyQ35xCHGekabkdQurDcvbKUPjMrtUFk",
  "key37": "3g13cU3qz6NauWmx4JMoqxYHYax8sxm1qWXSV1pVRxVJPxrQvSSnyDXUcY92dx47H3ikNGuwyJmE2j5LXFXDev3w",
  "key38": "5wTmvjJVU3tCr18uT6R77yHAT81KBwFnJqs9T543hnVYdh2pMkHJookBhCaRKftcpppS4szf6gGCQuvBdenmf5Bo",
  "key39": "goqXdLDoQ9AwSbeNyeoHxYLPcpZcPY9wL4GGmjaNZiYBQdVksDAAYdGHz1Rbq7MDaL2nbhK17TvvBrvKeExMVX9",
  "key40": "2Dpk8zXFjkBftybE3DS5nPPs6QJ9QK5dncP6Lc78b1ApN55Rg4s7r862waEc5RkonE9bGw8CWLycdpZyNMQwheFU",
  "key41": "3ukkxQaPQ6R55JBZwGun5KSiTtS3D3wNJJvjt3jZ1Vv1cnrrVrA2X1oia3vdf7nHX4tC49AN1WbWuzpDPeWMn7ne",
  "key42": "2tA9Tju277G96hdqdkczXYwesq1KyrXDhtT3NfDZTsKyViPAXbZ4AX5Z167EfgzjzVduwytNkPGajCkcTzLUWxhG",
  "key43": "2J6xy749oG21AQ1q1utpVZZhhkqycSLwg1QYW6u2wuE1WpGZp9inrSHQ7pP4v1Zv3JvNV3gCgoE66N2Yf9VHpDvo"
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
