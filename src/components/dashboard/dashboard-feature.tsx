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
    "3KGMzDDo1U396iDC3cjKPDvRxyRvZMQ4nqqW6ZxasTvVymCBHM7nLbXCQHLCiA7cfc7t4d5U1S4CLvQsHhLxK3DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25acYUgk8g3VH7H8H1kQNCur4D1YGR31ihTGPmZytvwnZjAYXydMZXdz6dVbBLiC2SfKSaWvFxXsA139AgweqNKP",
  "key1": "5nwoRS7dSEc58xsFaLLZ89kr8G5j7n1u5ixsQFCB4P58z4mHMdSHjMEcZfCWABKysfPSQKJ98JtiJpThXLPYHav5",
  "key2": "4yMpDRdunSa2k8WpNf5W14imcqbJVUzJabjhv7JAYpb2vtQqB53Ddz88ha1aY4knB9zoRFptsrCg1AxpNMEJ4iii",
  "key3": "53qnuiAumdi2gFyiUhmjvgjdheyDWR2WPJAH7cdccHtxdmhw1b6HG9KkqTp7oLPjPW7Uf2K94Di1fpYmQk9hP2Zk",
  "key4": "5yBrzvLk6gN7mP45JBsVUskar5uD2jbfDJdxhHr4QbyVN4ujoZqui8LSPKQHL82Txj4H7vndL51z1LVbxEfmLz5f",
  "key5": "4JimUfKswF1Hv8ZQsDfLRXxeGoUJ5Kk4Ysx8mbd1LRTQVWfyi7sTQAniDh4ngGR19aqwAHRHHdc1eopKkaJcr1Ka",
  "key6": "37ALnQxtnZvcMTPfhK8E8wSDknwDZLHYAhP6iQQqzRnQGQJWBXbSzUo2H5mP2E2KziYKrZVEm8A122iMondZPWXu",
  "key7": "2XDmSAgs7vSdCvStp3FJ61KPFsTQk5GHtE3EME2SeyrmnUg8a8FBCi1ibsPDXxsggCbLEa2QqsecEcQtQUUzWPZ9",
  "key8": "28c43AkvqoxnNeoEDKAjyeJ9bR6C2sTrTyNGehUCVBv2NygdwDK9RUGEVL4iEtV8vdhXZweBen8sERfzm3xKgFGo",
  "key9": "3vU6WtdeWyriDWV4SQLsKMiaYx8qiX7cm5A8VxkAthZQc3gZ52zV9Vb1YbneY6fhx3C4fds9mdQWp986S23mhmVe",
  "key10": "9QNoKRfbdoogyLfq1CNZe2crQuqFefZxxc4ELZvJCkEWX7aUZNWLVqFCaX8LSgePqJmEUdvFgJ8qekRc93RiHW3",
  "key11": "Yb75rsE3F9pXLap8Uq9kEQmavqjrzENib6mFebEPBbzeR5CG4ZeaWb73NThRQhMBoWVH2XhBZmMohdaieh2KXLj",
  "key12": "5Q1JC2eJ8DMTrPrpGPYvJQU2mSztUsYN38oEVK9ZqHA8mWMrdNNjh2WQA8D8QPoSzYaKfjqw7b2mGjDDLgmg1Pdd",
  "key13": "4daFpNVjsNATmVRNZyusDZC4mDZdCjNHU9JmbP4MYPJo5zYeX9dTk6wLLZpTnzi2KmMsaRcBqLPjQYjMsRSMMh6Q",
  "key14": "5ZSJVpKoR7VTtyorLzkZPMkhzKaXiSDtuXHjkZ1EEkg4hhacyMmhwzXyqNUaAYm2JPyAFBAZgUQ3Ls5p2RTZWHEQ",
  "key15": "676Dr7GUANcLTtUAtgvyV7GAw3fRU3MYg71f3fMdghtKzNq3PgNGTWwBDvReoPQBXv4hzNWSPVivwYmHcApvm95h",
  "key16": "9h479aKzDXtDGv77u2Am1XZ4JxvHqFu7rCxsDh84Jokqjd1SrD8ZtAm2mzibykohZraXrvTFHLTE7VqWWVbq3QG",
  "key17": "562yQPghN63KUnHTUZohGm5yx8HYhpmT3tchawLrszKGoqS7D3pd9CWeVqJsNL6wi4UhbdYZmdxGpDUmxxpj3kfY",
  "key18": "4cAbGUdA6TbcJPWRCEHoax7731xcC4qiGdMLsyw9KCdqbN4pLLUvBLkEjkE4RtWzz2W99viBs7ZE2Vhkd2occoKt",
  "key19": "3owHQAf68WVUrg7hnbrxW2mJqBuWRdUXGBTqDqRDyPU1Bd8QX9VdLH3RzH6CTGG9bdn7M78xCag7p648mFW94VZR",
  "key20": "65a2o1hXJhMkT1v4tp9k4vSb4meATh91J9PdRTErwfR5F2Ld2USPGdSTUydJpmttR6qLkZ2bmQCk2LnT5SfnJW2K",
  "key21": "NshDYURHZJSCvRus72B3ysufv6wiXsp7aGNEbArWoQ1mgyeaAdF9JcJ81wCYs2V3hYYEAQQZrqb7NCc9iVZEzMn",
  "key22": "bFwJoAbXvRbJPePncrAHERAx6Jw8MK4zpX8dzn94Uuf8dsZoPhCNBjuuUMPZ6i5CEE1Vygd3ozHARtSxqCaDHBh",
  "key23": "2DJKfrna4CkfiqCf2DU5X2DYpvhVVUw51h1SnGow4npgXexKGX8s5e4U1xt1zqzopCsEq9oxF5RRsfT3kMEDjjsQ",
  "key24": "4nBHZZK7axYvmsJ22Gd8H5DnFfGo2crxReRsJQbgja6nk7UgpZc2s2iivbr2cWucLzVA5fLMaWotJvzr8rxWQMx1",
  "key25": "3DWVFKvyeXEq1QzQwNfQvKk6Yuf5HePLb3ckf1wqSBGRSxHqp75ckczrUZikSjCDBizi9MtHVYGDiXN7rqLnwZzq",
  "key26": "dae6wPGYjRuyKpJvnWf8zTiiFtftyAJFhR8JcLckiVJkaERFfHfgKAe3hcx64hCjW9X9QEys1eMjbJyDYLXoHNE",
  "key27": "31zirxE9vXgvwD9jnTu3EmRhvEbmacwEeJexzoUjG9eZPtaDjQWdSiCcN5LfBJAycDDiedjxjpQHZb8UksUwoWKg",
  "key28": "5gWby5r4F2tQb9xXYnCC1DEQpaUjwCNXGbkmCowWAQccU6TG82x8H9c5f7PbQQx8gfivc5y21qXd4CP3gxcDTLED",
  "key29": "2YPcNj5HkzVFo6dj2pnf6qgzNQvY4c3E5yEnz6DhBwNuLnW4cR4CUfisfpmzkVdD9LCaCmcMqeXY2PhgxzJmPVf4",
  "key30": "2uuRq1Rdgna2JboXUdZosSu6pikVVPt8KtTbeN63Y6SYThihZAv432a3oHJyYmzVxHfEibAX9bZDwErBCTbdYfSU",
  "key31": "3ED8eB9DmHnWGQaRGYnDXLPWhLMj7fZ3i6pc4hT49an8Ce9cY2CcsjpkuriLfkxf1DfJz41HgH2B9buMZmkMoPRY",
  "key32": "3XMbjqtrWoY7UvpQT2YcdN58SruEkrvXF5KT2jJuiXF6ZqArp2xDPPpUBspmNDHGszek64jzw2MeY8LJxS1t2dhi",
  "key33": "2BZqv7VUM3gi66mr6YxB4mkme3wZN3LKqK3s4v8JbYwGVT4tQbCPCKWnVoFy8yjVX5w4Mi7gGAvL7FWD8ifgdVrM",
  "key34": "4E4YZ9DgCb2u2xwxnYEemiNyEkakmP8g8zzEVLf4C98NqvZBmnusEhyxpUVJVXFDJJgXmuxcCSm2mAMZtRLS3AaK",
  "key35": "Tepb1R9C29TQXLp9gJcYLA1fX1MG9t8epbkD6h88wzk8WQ9cgdE3NKuDhbN3fitkpxtp9fqSF1jvELAjyeTDYzD",
  "key36": "5vaVBh9QFGNHo1msC5t3KwH6vfvgnJ9sxAaTL3euye8J3B9t6cpcfELuGopYfagCB9WyBC7HrgRtpq5bdZ9oZxri",
  "key37": "3tTbU5YzXQne19niQpYoU1wWcvsusVPb9j8nEnyiTyyeZLvYqedbXLs3RvEta9n5veoTC9fZkfLxJZjNHvHwHxY8",
  "key38": "3doi42MTiPgFCk8cKpbpxFveQ3TtvjJ4664qeawexvunBG9gk7RRb3CUz8p6zBn3RYAJG9u9AuduRfVH9xv6wEeV"
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
