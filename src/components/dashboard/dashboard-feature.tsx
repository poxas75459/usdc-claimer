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
    "3oPbypJn3fvwbho83bBixs8qmgkaRZ1tUjSurrMP8QxvQBhewD827EkxCZnrqWeLKqjn2mtyQ715WuczRoxfPLvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41U61E5QRNB2JG4SmewNaR9dxuQ3pAfENqrUpyf3qGkZMdjyyqj36snqVM9YXDmNRj3ydqZuoakeAQDaBLnoPsT",
  "key1": "5qR7pmVLPoWeCCs6qTToCariT1RLdanyt1dew83dYhzFfLEQb2Atf8UReHvqoB6CUsDosqjDTX2YtFZJoW14WLS",
  "key2": "3J58eznPep8EvR2mozNCXAk61wDDvbgqvkcbGYdqeE93i46451iNj2rurAQmnnHHaVvbA28WT1SMKPi8R8an3iUN",
  "key3": "4ek73vzQxSTnFKQd5qjDpjeYzYZEZi6pjZjVkVUkv8sfbB8a5E67HfVJAHsZkyThSeT626ixrk9iBHBgqpPPnRKf",
  "key4": "Mj3J4HaZJUuseEMYDpfdNJYAUpo98GwsnSAQbPQNTsgQhD1tTjpcQhDuJ4qSnMKMSBcvRN1Uvn7P18hfpkDK3EK",
  "key5": "2vR3qw4f4YEvMGSwux5GBC5jRBn9a2oNUMtXnuT5DHJeCN5zp5bfsYLaRfepo2yQEdSRwYxSadbDdQ7U9zhbYzEU",
  "key6": "5zWncq3SaAeke3ESSiav5fqbaQe4w41KSVGfgny36m34Giz7EjPsPoBewXYwipFaeTR1xk4riGs7BXb1Zhum1FtH",
  "key7": "47s9q3t8VXerf2537ZKBk5u5aB5sU6iRr9qXkeYJ462wYko3Hx3ym18MuXLd6HFzKTvVXozwoPwnXDdvnW36zREV",
  "key8": "XP9BBuJqQg6UXBnMxbk8SkgCEQMS8Uc3cZ2hKuw1itB6dR967cjm54UCzJdjsQXVy7MLktkdC3R2bEWLyqXR7hF",
  "key9": "2vfcAp3fg7eVpkKw19533A6mUBBW5S1VtNiF1yt9n8autmHExtm7dzFBkewoB23hoUy79kts5ZuYFVTzLFSe6ZoL",
  "key10": "YZAQPEBZHwTEvzuNHVwTy3nQ3m9Zz1egg8MPT3mjrnwdPX7hWQRPEk69VpiZ4zegDGoGreJDLHv5ynyi7Z7CmHc",
  "key11": "22zw1yWJgzRo5BzWfvzcGuiRAbyB4M6E5e4N4KZhpF8ji1g5HyN8ruoonAE9YtbUTRAHLwCoTpP6KsRxfCwdNB56",
  "key12": "52Jxv4WLq2kBUHehXHTBuxDxjPQYGCKMxTxxBH7jah11xvaSayDKfapnWNjUV9jm6P2Umo2tsH4GaPRmRzVNux1h",
  "key13": "64GkqZMN6zbwrkWrqxKGbhv46zwxL5cnBrobd1j2iCoE1W27FzAdrk2Z53mfboc4m5g34G7fREJ3qA5655uDhRU4",
  "key14": "3ANngQQPHCf3HXerKXhipjZn9eNbvTGEP7Jo7ZaABYw85mwkpJQ6wULLrpAShycYRracKqTynpgsh3JLA4mZyjXQ",
  "key15": "63j4PBAbZszZc2y7Kkdenkb5GdMLkecyg2wjAb5roNr3uveB9tFFQa7j4o7QiwcBFZU5C2Y8kKjV4gBSZovXm4bm",
  "key16": "41BQThxsERgagp8hzu8a7bfv4Truyj21NDavcRHMhkYhWnncDc7wkCfpDGUSgMvWVAfptD59oYZiGUEorbZkxrt",
  "key17": "3cPZqNfr2SgxHSzTiRkTFxKrLoHDjCmPTVsL1nFK1mzVw187UKaDvnuXsqhy65b4AyRbF4izHU1kp7PwoPoLH3ZV",
  "key18": "4AMwFz2rq6n1WZfkcbDHREDwMZBFPpPyJddKGeEx3yt9cAWCfaae27rekcqjC9W2Qo1CroGXwd5RWJQxHgoAsTZz",
  "key19": "3vLCs49vb37N5Dfmjm8Kw8VrjEhxMkGoLmxuCXCKnFgRsgyF8csKvrmXVx11nQvMGnzF165R2EpshFLvhv8tWKod",
  "key20": "oGUyg1DBxudsZ7gaVR3a928zQT5Pktx2cpVfZNbom6CLpH1kngh7uETzC348nkeM4n4dKpTFaxAmBeiFpgB4hLJ",
  "key21": "57KMpvWuaduP3XAtcRYtebUmA9ZnUfvosz53F4sXmdrmDWmEwjCuP6d91GTNjTJ43pdiDDvnyDrP4SYSwcYd8MFa",
  "key22": "4iLvbutVfNmVUkzokbL7piQAHUBPPET72R7CZnyVKDibLC8UjxNBTDXyAakmhVUVK112ZBSJCrv9nPpw5ubtJSTs",
  "key23": "5k4ExAHWHeDn7RVecMBjDdA3Xas8g1tyu6VFjFZKZCUAV8f3nCXvLELocnv9FimzfouHmAHpMoGgQqjxjw4aZrB6",
  "key24": "23TpyN2QiHQGzvBb6F83SqgEcQetPWx11ecU8cpJS9zYsUEcBg98k9oCsArQCsCaMRXUcgoq9zzcgBh9JSoRNhEN",
  "key25": "5WoDs849CjFQQDsmUBjq71mQsAygGjo35T2ueMnMoZaDAfrAqtyGPqj8MDUfH8j5jQyuypsiDPqvwhbTjwXdZmmt",
  "key26": "5zzfUbTCf8BAfS5qK3ZaRxiGeSvnQFDJxGtZ4gUtBJzZ4LnFMEFUpjZh7FMP2KxM9jrKCHJVBzqcopoHZCQGmWrc",
  "key27": "2Ab9M32HheeyDHPso4WwFBb3XQE6fnwV2tuMrUVy63haagXgMrzAUAUyBBFJoLpCr1qk63fbh9qQ2pf9W4hABw4d",
  "key28": "zyhD1sNK79NegFNsFTdrFL1iriWTq8yGjjJruzUv7YmkuHb4hTvvsAeS4QyHQQMt4XKQkJitZZagtpoJvtG2rBP",
  "key29": "67auheppAPJGCit8tDr4UM1kT59tvpdTMf1f1rWL9mBxwSuRy7TAFJj2QWGJAD84f1gjNse9ZVtpDmeWHmdyMPTD",
  "key30": "2vPU4oDZWNyTZGL5KQHYFh4LvuXKiS9fMo3MezmS6n4wSdmKjG4n2RwszJkrMmFpKDU78JmGijSPVqmCPykeRsxs",
  "key31": "5JvRRj4HxVnBHkJAHcDMzS9R5tvNENUe8QaH3M3wJomrrzVSK1RQibRRaFByDcR7rYqXmCK543kQTXHKXJ8QJuQ",
  "key32": "4efQcnV9LL6Te4QbePmiJx1EVpGm7VxSzoUh4VxVnZHxtuBkNg9bUZhT56EotEpvsQbzWVhBFgQRz9KckkDFCAag",
  "key33": "5arMhgwoLTJbTvRRfrpRzp6A6HUyvw3j89DK3eE59gisQqvN4n2PiWuas9Zs9J2JbrtA9ANwUA87iQ5VEAPw4xj7",
  "key34": "1qbZX3xoeCBVJPPzQwkvMVRpmNFf2Qg5AynhtcqF8DtL38tsSTvSBcCPhntkxdL6hTuASvpt3ZwQyDU8axRvDGv"
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
