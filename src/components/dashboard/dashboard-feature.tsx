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
    "3VJgt7rj6XsUe7WvLLDprxRP2BQnr2YUaW1LKvnMTi2ngjijsjd9e8jRyywEuYfSfJSqd2EmCWdo5B8T1JDVXieM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DokSV3nZuDEwokmdtQzNTQVpNoow8sJrzfVNPn3BkSjKSgT8bYhpPFSBHwtHK3Hp2yxw3G2LRj3SAfLMp5zJUL9",
  "key1": "2DrtFrPnxZbZTFAaZt89KNXrLGSADgYF9u7voRx7pQF7NwPQHXiELL1PAZR4gbZZaKKPxKi1AZAwdSkFQ2srUGHq",
  "key2": "3CAxsRubux1AkDSKy9hypCcjfWijnUCEMzxY41WCrFNLqvYeQUWMjJt3ngABmkcBZSpgRKMXHPHrHuzbujiQtGBP",
  "key3": "3C2pffXc8ZR4Yr138bab6BTgk8HjgwpG6H4cH1fheMcTR3CKGtn5sJvf6QgBnGGgU3MhpeXdpWMohzo38TPQNTTN",
  "key4": "2BiGw9feqwXtD9rQwUxr8QndPZBtzt9A4qSuF1FFNhLhYWDeTMb7Qg6xfhQtL3dRNnDb3yrSS7kFqQgHz2JrSmDD",
  "key5": "3fP72jim3NceoEteCLBGdFH7dYdHFCxF9HfY36X5CRPsbX27gSMYWCgQmNYpa2J7mSyjhydwdm7FEbSLAHHVQwV4",
  "key6": "3mMjNSbG71JKkUyGoqktvHsq7quuceYtPDaisgmxgwcPWXPTE792oEZZ89f7BAfNHGJ3BZaqP5GPZjPw744q1Zmk",
  "key7": "29RiVQsXqWcFr91RRwx29JDJggxwDjUNc8mG4DeXPRE1wHxnZKrczN8CdSxhaxkMxNgVMhDCYYHvkjnhXi44DKZe",
  "key8": "36ua3fDypWxmHh3WCBTDPbGWRjfwJEs5mhNpGB4i6m45bQMkZ1KncFe2d5NX8bCV2wnsGbaaUUs9w1G4PpXk2HtW",
  "key9": "2gcS41EBdqeyDx2wDdP5odKeHRgZcXqxXjtS6n2NmX3Wo2LwHhWD7uXTVAQW8dSsoWuPuSAyNzqnAKak8LUhuB7j",
  "key10": "4byswA75p3gVJBgC73T4gZNC97hrmJrA5e5qPEv12KetSUEdyYqvwMGNTErDbBGj8EH2CaabfzVVshk9hBouXbAK",
  "key11": "3ww1A5Sar5MTLQqEPvwSEHvLz8DeH6ps5d7b3sCKU2gAz5So7yLyVTbgcQE1exLcHKqKMWjyYFYzodBrGM8Mnp4d",
  "key12": "2epbt7zrXDV8wWWe5t2X3oS9q4m3GGyuFmnrHRuZRDw7HavZzgABAKUmiCzTArSiwgNnK69WFrssQJkctBhAz176",
  "key13": "2J2B7pwFpLwLgyRJ7VSUjg7f2g7dGry1puu8RTga4WjYKgwqFD3L3iHEvfiVoXudSyX3PnV6s6vC9Z7N6ZL1DDeC",
  "key14": "31UardfK7F1h1N7f9Pts3hseWcCavL44UtJkPYB1MRyAovLP3Gg9akan9GnPMxbAp1gzkX6hsHv4xha8P1b7cARj",
  "key15": "2Cjp5drtU8Dkr6QGmLKWmQwuTy93hhb4WWazDztroAsnXaFkSJY2SMTQXs6qssEeXaqk1AmNuN8VkUf5JqEkxM2a",
  "key16": "5btsLcrBwRaLVwPkxTk7vjP74sGJxmsoHKK6kcgJ97jWLjExnffmNn7UMLzdTjfvWLQmVr9csvVjutBC97nMxKHe",
  "key17": "2M4Gpj9PhKoATFxmfYnZvNiNwhUJcmFwrq6bj4jRUgoXtsRRL66KQb1zzPSwUjfT5Yo5MSYbQQas9TwURRsTooBs",
  "key18": "4yvAv9ZHbQFLrPnJKvnQetSvZoHB6W2mYkqZiQgBu1ikDkoNncg4a9uooFt6hDR6XV4aUjEZd9QbxKwdXBbb8DCG",
  "key19": "2j4aM4A4KRPNvLHXDX9yGbbAB5zXr5KwBiYTo6GqpHws3BRuN4LYNPzcTJ4f3kPFqwXFawWq3QgGHXXDGzU6iUh7",
  "key20": "54L6wicZ8TFdiK2qReA5QXjn3zgxa7v5pZWLW7qAiZWSyt7obKg3iGzDmrbb8oTM2kNjzw78SVVzy9DT76eHzxBG",
  "key21": "5AzgZc9diFGMk9NrQaCwwKqrJLVU7puJP3KQV7ZCuazz244n3CNuC7svPZgozhsavNszCuQAEYvYXKCNCwYy5VWe",
  "key22": "oMBpS73Wa6yMbTHPGLbgHcfv6oas1o48Tt1ZLUtbzWCJimRGFebcJ7xZ47PzixZhFtf1g4xi1WhHXEqRKTqpfed",
  "key23": "4B4pM8sTa7SKXsUYeGbyb3P2Q3vEg9DMAwSe4QJyzN4CV4JWeqsT5uLuLUvouHtDoyAWiV6dqE7yWkimy2sxpsx5",
  "key24": "5y9bWGBdFaVTKr5SxatvEaQnpxArQXQo84ce7BcRAukBJQP5aGnDtq4ks81tquNTMznWM8hTKcaXuTDjsRCQ4nvN",
  "key25": "ii2Es5mCJQZA8DdwuxNxahBiLScBo2ear1yosvr2CTfNi3YQZYXAmawcT82smJrYbDTXtxs4jRw4CsLYDtdMexB",
  "key26": "DxEHNrzuiNQjp8CHKvc36dyt2mY4o3ogWr51pRrbpA5vU6cNsMDwo3rE7ZXoSEAsPgTF8mj6dbxsu284opsHJ2T",
  "key27": "4SP9ZGnoKiv24y2tQwbMWeuzFsG6fJzF2cBwwxM6T2EybHPWaQvq5bRmCHjYg1JUuZJzttJp84ZywUjZqJfqYEE5",
  "key28": "xWLmMSctizmdk6jKyp6aTqGZLeLvRFy4991Cbd4XiUohohETJhpsk4gT11vS49huNM8ZtWaWmXiBBjQuuJEGVj3",
  "key29": "5n8hk9z68LTH9EsmzR8MGvMRF9PoURkqQedmqRhQqjXq5Bgo9MPvF7mAhZDrvFEEzeHhKYBTgNhRmKEfCMa8u6gk",
  "key30": "4qjZHjArDzDt3WW4BqpzfjjhwMwNd8CbXmMj2qE3LosDJL7sVzwBNmeajzg1J4UeoFmMxQ1dYFM6JAP9Jmqqp2At",
  "key31": "2AdTnnQWdFggx6AzfouSaDw7HCgrgN7ZRmQEC32n54kvNHbvjwJkxWjuVthEpVkdjaj1iySYuQCLxTf4uMKVwuMH"
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
