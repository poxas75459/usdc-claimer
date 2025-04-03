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
    "pbFJsB3hf7gELCFwKjfT6wgRUV1YQRHwDwRG9Ecbpv19QPsoXt916ubXrmUt2kF6isqPwHviiZMKRrsHegnJ1es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfPMh5F2qc8n4pMS1kSySmh9xzLvDXwoh6fVrEYxQTFjaciQS6opkpYZRbqBoU1gA8MTrZ2ijMvxERbazkiqwAw",
  "key1": "3iB8ai1brnuxaVqdJwL4mAnMY2MCfjykNcVnFNn4j1EHkzs6kJnyNjVMkF68gbJ6BzN1Kpo76G2nnHKGeDLJX4Gw",
  "key2": "2tjM63S9oRxN7Ysry5H6MPSpA1Nqb1NYFb4rqkoZCBAaGLjoLPTkwBumw6vF9tYVAymAZyosWBiLgLKDm9SqqAno",
  "key3": "43dLqnZodTdxot2jbBRb92ahAtRZBPnmjwxkqGA88eAjSgMGj4BePB6hhJmz8WQUAn8SrggzwFuYBPtV6tH5xtZh",
  "key4": "2qm2r3GVPYg9b3LBmUTnd7coNt2cv2Ei8xaWhPs2NdKnPFVHFHspgSuBJZPsKAs6rpAZHYyM9ANS1Fmv1fHoD1Fd",
  "key5": "5DqH1qH73Qahd3Mk1ptqZdNojBiEGph2vuWeDegkT3jLeV6SdawYbz2jsUr8QxMLWJBPZ13v58Fdf9cZpDeVoKB1",
  "key6": "2ioQ12cDwDB1r9SDu6nf6TVfmYYECU26cUKk2RwEG5WnZExq6CNvzRp2iYzx2JpjT2qhBCKWmy2pfaPLen2bmxpT",
  "key7": "Cz6TPpmFwuNXP4wwMJ1j53txQq48NQDUQzfcrLksDvBbdyd13YN2q2W4T5j7g7Z4LJwCbnkTjeAXRVM9DdADhnA",
  "key8": "5Uyzcyi2KCtjSN3ALB8uNQuTFE28pQGRogqNuQfohBHW7QQGbwSshAc1zLvJu5YGzgtVgSkC7ViK8LYkVrrE4d16",
  "key9": "47tVYs6weqR5DSL97Aijge35jX8rquaR9YypBWNgWJ5KMAMk6hE5eQY8maRXb7oNMnDrQukTNLcgdhH4ZKViugsK",
  "key10": "3srbTiWGWbhzp4womSwsCgxXYygtDx8W1Hj2WMjvR2Nj9asxvNM3Nu8enritA8w6uEXGhBH1Hu2bVP3VGBPmSQA6",
  "key11": "3wBAQ6jXLqBRSKLK4sdriRorUs4wa8BrrRq2E5mdmKcbmi6tUWg9tMSpN6dykWjbNyBnxcLMxxpQk88FqfZ3K7aY",
  "key12": "3QtiKvszvRTD9pNzXWaR9Eb4oP9JQ27Lbt2toRG3K5u71NicMBaM4kwgXa5pRnM42GFCUTrLaWohkVFugEU1g6av",
  "key13": "2wephaE2LJXWinEfEGSPPjUBoSnQhEApxDEQvHd51MxW4xwYxMpAqsbopi3g8zmhsvSFfH2b46yqxoAUcukZhWaK",
  "key14": "4hDFo9eaJfn3YNHKXvfP57bGPH5hjwyTqJ7BTZJZ3yNvTZdAtjJ9rhW7MAx8Jch7jYt7rJveST4p6YE4eGX68kfj",
  "key15": "31V2QZMRiBvdwKT3dFQn83RKL7Wo1nZzLxFxvEfzkJxv2B4ADdTtCxat5bN85xwoUtYsRDarzFC7prvtAz32b1Gk",
  "key16": "4ZpujffcYZX9zeTz2kJ9CdWD3bGW21Egs48p5nURL9MNssUyTXbUbivQ2NtfS5RwuCxUJnomJFyDSMW19HFAg6pD",
  "key17": "5nJnhLtkjrVHphShrcCzgSrMbANh9iz91brcLFPFrF7UsKKdK5BBXyi2e1y3gLRZFbtpFKaejRvbeo3682NvSXo3",
  "key18": "3SffHsPUEo4NzQUYwaHV4VmMPkHZWwURgt7mHoD7GGwBdoS4bVrtG3xxM4hz1iiwEeHRjkq5NBWXNH8qeuZnC9sP",
  "key19": "5GaW32s6n92ixmK44xUQC81HPtXF3n9RMYSeoNRtYaDNTGbyNYBA8JJd2mC72cxHGPhD6XVMGZjgha1Z75FbSGAr",
  "key20": "HoiyFrH45WLCdNCmj4K2SBeWeYfHT2AmkucJkJ7Q9fqxxu8ycohfFi6odyauYQvYXXtc74ihEiwQzhmG1jjtYKg",
  "key21": "23Loideik7BisftjdXYoSLj4tFQ99HPomAaWMBogbTaJVuwwwQamR15Pv7tgwXBm9oPc5UYSEuroMHDQsDpzJ5BA",
  "key22": "2CXeFvTimPBvNpWyvAM4vUiTD5sWsHHYoctoT86RDADeop5bp2pmEzbSavuNHWu2YrbSYQthFZgbKfWtuDAVUvuX",
  "key23": "5Mp8TZS7AeysmZCHoyg6MXoYN9RP6ePBFG3zGkvKdZ39f9qqnun9MFJrjMT6WA4uWh8kcGAQ9bGEp3y1UnHZVqf9",
  "key24": "4qZkrgSVtsR5vZR6iavzeKcX18PXyYn59GP6gGWpozk1NxX5dGbyB1g7ZKZqvnhDgQv6uvaXckTmrgnZmZjWuCba",
  "key25": "5Y7hgZWaNzKx3MzpziHCGW5fWqjSapTwBYsEvKcm6tzJtSXacSMJYfF3wX9KBmkMH8FrjktCkdpkQTzTAi99Dasy",
  "key26": "34oGN1yxdgEsMmCPJ6UsBTPBeEod7k5ahKEeAdv6onENeTusoGMeNt4YDgpr3WFzjCJzwD6uYZuHitbkrq3uX7GP",
  "key27": "5i4qBnkkUvZUVsNghdiuQJ2vLXj7iQ7YG83awquQx6GTmD9sK5cuugSKnDAMQNkv4VryCVtEurD38HrjMFvnRPaW",
  "key28": "2pnKEwkxGdggrVupGz8Vqhv9P5rchryoAEB1Jce8ztp75qp52NnxduNgdWjPgXbTNkEy7e57KMSypwKkAGZXzw38",
  "key29": "2QTnT71gXnkVABdJpqkDFbmptdNCmJ7NbbDdBCDhAbQJs3ZvgEwopkydkU571zoyD4iLukhJb8sfwqxbt8ZKudtu",
  "key30": "DLfuKw1AE7RotNyoFpeXJeNh7viGuBJzXLAUKVbT3MwdaZNga9mVbAK3ewuFEpWPZayppBHkMWryZSd1j1qcghe",
  "key31": "o3fbHQ6hrTRRTrtCixDoUN6f2pYNkmRCLiqwnxFzcVTpLb9Hj63KfEhXaFx3pVj5iDg9i7f8Z7hC49p1BG6zkAk",
  "key32": "uQCsa5rUgt7bjFbMGrL5DZXLTCfLoqPQUQvEVTfq3Hx2DeZ5renuZDKPehuYHJPSoLJbeBzkEsvuKHkKR2WSGXz",
  "key33": "5sXDFW5jKm3VVBjy5qw1kX2YhyAqobbVdRJJv5pH7tA5RMX7V3Nxp28jb8r77sX8Z6VV7K1Ee4VHEUE5QpghAqQu",
  "key34": "3rP1w7SdKG3GZZUvNnrUFaU5sQwzNDSwaGrZ8sRDYXKeNKT6Qes7LEXuU8kK9kdRHS1AcySdWb4QfkSVMMZSADf8",
  "key35": "CXpytybuu3P1kM1xkTmZDGUQEScGmHND4AyQHjBeXZm6KPYeEZVJR2Y44NbYkFkTP6s27brePa87k9EmnuGpg3X",
  "key36": "5exv3kP4BDeH7aZXyhy8DZBrvHY3cfXwVc782ZXHZDCkfZz2WgpGQJNjxPYtJj7Cjxia29KJYcbCZ2egLoEycuSX",
  "key37": "3qjjZpUy7vZNdsMNk5PZ9oWRqaJ9fdEmMXTB4Vn8p9tCqhjaWsiy8DTmYnYo5T4wTSdEFfqfPLW2X8tSxdm64Wre",
  "key38": "yeUpLsMLNozDfjCxZk4TUVpMK55oe1kmTEjH5jycsAR5DfnQeQx9aU27cyr4CSbWRUstZdbpMMKQTp3oBDMLfKC",
  "key39": "4sY5eLK2zoZS24HSF6WxzUc1SNxD2x95YSfbF3qgpWyQHsXNy8Ws2ThG4EFMxRyKWEoPaMKVDAFwa9ebAoMDpNz1",
  "key40": "4eYNVZKyqQd4LhPq4E5qEJbWCEo4dA4E7ctwDYtnxRYQ77y4nRUk5B3YtwDZ9edeUMe7x3B2zf43rp4DVSdwWB6u"
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
