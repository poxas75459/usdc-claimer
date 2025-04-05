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
    "5z3bM8NnQg2fddagegrYoR38Q9rmdAKHg4DVzrRYTqJFkaZ6A11QgyyLGTPz4u1mVTiCThbiAFQxmF7yg8nQqKjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648ENuJThpbcvYamhi9Wv8F9Qm9HgJY3gp3wG8nwV6qA76MrTM8hikZ9pKWhHSmo4Ng2RA8opFrTh6y2TH7rXmCJ",
  "key1": "42JMnokwLBfRoniiURwbgbPQMXYu4SwWo5pT8jYkzp7C1GdKANWzhoDSgFFptrp4p9UH2ehZxiCaGJCMULCfSEvb",
  "key2": "iF4NCMnCYY2WDyTBLL3Usp6cedMuMipVf3a5ogx2PGJy6XKXNKmHXeNMsriGXtPXrQLr1EgEnGHyojagPnqG6RE",
  "key3": "J3KwvHW6VzPcxWgPmakzC7TXoZm4zH3p8fZ1TJwt4kHogyfcSPLnHd6urmPNg744TE8vdt6FbhGxg53JeZLKiZQ",
  "key4": "3oWLytyjRpU6xCacZtjyP22UB5fDYWU4fncmdQQ8z9kTMV4uynbmHiXZjV6SAnGXE7BxaJ3euS16pbXpNMC51qaD",
  "key5": "2oByNWDnKzzpeq9wMr44GDRqeFJ5SNPy21pw2o2ovjprsALt6EX4DWQ3GkZXWQTJjkUD3Jf4KGP96bPeHGprC4kK",
  "key6": "4rfYJ9UUoiRMbg71Mvgf5b28AnYNb2ysDjmz5EKAjnkWqf15qjmYLUhGLqThbGkwNp3pYHmdpYRZFSsKHKxLzawV",
  "key7": "4eCW3gsRZJWbH3XfXuiMzTQq47oC7YsF5yptGxnXkefjfSn77PFpVKemmGBw4GDK7kpa6WfbUaYtX2PTTouvE85r",
  "key8": "4LWjgK3Rq2oGsg7G5zz9TUf9Bx5or5mFD4UDVkTHGhy6Y2TAQLFdFbtWZq7h7c9gukL14pmHKNq4rfucX8FPCAsQ",
  "key9": "3FCmDCyg8YpuMc3DKyQJA2rGdUb4aAtD5zkscbpxaLmSFXKd75xrVuHpYWMhE6eGm61agSLXxX1bcKYDX3qZHZp5",
  "key10": "C2yq2znD9hm92ehLRaEaDRSgxXnLrzwUYCwFWdVcGnpS8dTLTTYyvRqt6KyExPEA2ddg1qvPyV4hkgWGK8wc6VY",
  "key11": "63nybdGjVhBUKz9bsMtRZjcpbiTDqdVt3SzSf26bA9VUxzkKsGGoff2n45cttBCB6Dqfwii54YWwHYHgf7HT8jYM",
  "key12": "4d4vXxKcXLbQaDDqp8Aw1dtA8Kr8jJBWpSkcNAgiyWpoqDq5PeLu2K1R2N56sbVJyxUiMhoe8n6rD11ViR6XpcFT",
  "key13": "2XRQsEumXEhsUCN38Nn4LWG3YF9YVw4zDMdDhziF7wGbqWmDyTiqjgDppFNdfAtQzxex9x6gLnpCohCUkMamuieq",
  "key14": "2nHDVQFFMnRAdEkq4eCwYoErmFjLX2hTct1T7AJyWoveWKGdgA7pnvTTojmeunRc95txsnYTVLxVJQDRqeYu4UW7",
  "key15": "2TtRx7jfQWBugrsvV9KECpQcvm5FmqgwUYs5G6pDtSG8WbMS8jWPrRMBoSZsfPqwxJUq3GquVSFouVQ8vUn6SrYm",
  "key16": "3YDrvgYPe2TW9981Tx2w5niu8bwxvvMi8YpRicb1Cn4a9fFXVBzcAByJShqBJvNUjAEA2TEHcjnU2jU1C7WvbQH3",
  "key17": "wWna9KtvTKFdXb5Y2ngaLutAc2MMX5eDJALZ7aFa74WyYsXZdsvTdXMcair9WdgQYqum9HCyXWuDvLoqeC1zdnu",
  "key18": "rtchHEQF46gMNnLJNHHWyVvZ9KbeA4cV2NpqX6CHsfMDwPHo4MTeNQGKiHWcjS7cR6HP1CnKipgnDwyJLTMTC2s",
  "key19": "cvEoHy8iAxHJyGjxZp9aQBQW3geR7z1aDs4BW5i128Ntmunq16styvY21jovsnHff9muCzijrnW84Y4LaQi2wXS",
  "key20": "65YsgsXyKz5oCovQofERChJ6RuoN8Cb4qkLH4VxenCbxfJbSxdnrwsJQzUk1ZHZ7WmKz9swXXtxH1zWR8QhhuopV",
  "key21": "3dpMPXASaZx4Zzai8njD4fXHFKpPhbTDXPrRiFxvbLqWk7znNQdtW1Qzfbhw6pDuYejnZTfH8KaDxJZZeYixzLCd",
  "key22": "4iWXDy7UQnkqWsSmFDfQZLjqWeCG2RhyYijf8x92z4UMymTPuid7yoZhzHKabrGTvN9HPJEZp1DoQWABQptn2gMB",
  "key23": "57fKsEqM3dzNFdwr45mQbHXqrDfT163NVQue3iK7QjGrwmxNBqYF1zSt8Miwtjkz5p7GoQfn3E4Pw3WKajrDoNhe",
  "key24": "5X4v4zkthoHp6sENzSbTsNU186NbsKXQqVhsahdyWQm42qXTgnSTYsMFBff51Vxf3TZG8kuWQrcB7xEKcAfu999M",
  "key25": "3PL6nWmbfHnHzEuH265DC9XH2FEJfig4FxEG9zaHfsotYtFctrPTNCreRjvyFuBAhfqagB4XqnmPpb2z2EEmMPHq",
  "key26": "5nMmGZfy3SwJByatk9XYdETDXT4wDbc4JnkczRsRCtN1pbPexGkZesgXoAuZ88RtJujvd1yCSGu8CsbjBqeJuFuc",
  "key27": "2ZraprfkAW3AxTUN9CszEJbE5hkii1wH6ZQxvdZgsJrgaaXjzKFVSNk2GUUuHorN6zgwhMskdhiturD8S2WcsGmt"
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
