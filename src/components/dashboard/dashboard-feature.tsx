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
    "5eAYkStqS1K8YkZFDNAnhxhRMwyuTN8PFBZTQG1t7Dv4KmT7vEUZBo1ztkRyjeakVHaoMb7hirphuAGRG6Z9xVEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51u8ayjLXiu3Wx7BgE6tiyDXKwTiP93FVpgc8fLk3wBk5QsDdF8obTrRLZRDeKt9gnYAyT95ffwjtuS8YWqF7P5x",
  "key1": "3NHowjEzd2JJtqk55rW6oSXKB6mTsgDnaatnqmQw36P6D7XSjZzgKC66g9jBVEVem9eVhhjL2en4po54uheLVBUt",
  "key2": "jLYnCDMVJ5eT5QNYLqP6JoU3K9cmrRcb3o9x6TPB8bAwoPGv7eHCmA4HHp1NyvYzibJahEoHdbGzpfs4TWU3tF1",
  "key3": "96T6PbhTwbbfD8CcuKbTNHn4tGtQ6Di2iJ6QxkMsHuFBbM2d5LKpJbJjcrNN65vZ76juAi95jJy2SENyHP5FeBh",
  "key4": "5tMZivmHHCfMEkw11Zf8tjxDkP7RKETkxJ5BUp46Mxzw8LcDcs8h9A6kkQEiYK3XgUNh4ymKLWRp66j9Z1nwY2PB",
  "key5": "2aksKbySUWaJq3avfhwHLhacYTJU6tSLCKgv8y9DrfPMHvzGsJJmBKQVB1kbs5k35QE1wFta1fjfNJwsme5ak6LN",
  "key6": "GtikUjdFc5K4dcZZxz1kFwyhQQTWHx2iKXCmHgzxuzsgmiw7ZAds3XgK4fdAxaPvAWCJYC78ycY7qCxrmY7qTgc",
  "key7": "3winPmm9sfYRp9XpDj6nQPSXJWBSwAx7RdfDN1ndwRtsbeMLMt9iHPF4HcUZ4Rj2bbykZddFH1XFtVL1ZpZHDjFb",
  "key8": "3XRSNmmKLDC5HSMRbtW7gh5ECKKSoyCbZpjwFLnf299w3Cs1nmuGJiXRYnse3oAEjukziignv9HxzkVAQyXuxkNV",
  "key9": "8QrYxW9haXkPAWA8p5QimyLTdy4PbMynhU8zdwBuhdbr1EeZhQR1NXya2b7AydL8CZBmNxL7XXn17jWMKVdz5q1",
  "key10": "4NKnHGYvYsbaDev5EDSSVzxvtW5r8261L8EHXPSxH1TseiznVJqU1jXFQ1Msnoy6WQqhkSpAjKHFmS3ByraMVGNr",
  "key11": "6113hm4e6dCmVjNLCv9tntvxZ4248eCTFTHaqkpTc2Yc1craqnG8hJfcztUMfjSM3ZSNt1SyE8znV1djvYWE2PUY",
  "key12": "o3TwXWEVJMSX1LxCWawP7cDGZqiwWxQKWmPfWBXW6CRnoqXtHFGtgiGdU1QeG8rvrSyczqCYBFjouYAME8qtKeD",
  "key13": "3W3rBkBFvDLzRwezRJ9hH687gcq2wyHiovVyfkTf6THYhX3f2CYyiqdTusgp482UQvcX4ZE8y5zWLVbU4nfgTRM9",
  "key14": "3JcjMUas1ktA6QUEWbtokg8isqXd7yUzUSTUrnnpfe711sB8UvC7Dxdb2SbMfnacFqTwfqG2G8SwDKVLPr7yrP6N",
  "key15": "54ymdXQ1JUpsHET8p2UqwK5M9jpxsRG4if727ZTnA5yk5A8KKrgcPG7sN4Esh68eKVse38yYHv91uiSZi3aD7Di8",
  "key16": "3iuC4rV1CVaJq5JKPLjKtmLHhWdT6kKmM958Xh5X7dG6CAjaSpFKywz8H1mQRTmro2CkdXWpSa5Un6RwbRxYufkP",
  "key17": "4bXie8XhGxxYBJdg8asnuBWNaYQH9t55MZYMejdp2otQ7HcF3giC2HLT3DufFuFDVLwWMhCSwfJqiMfsvGkjEwsR",
  "key18": "4vTgfgo16twnXYzezFXZiicEkUc8af7wQYir2dHirxm3WP3aDcYo8Q8U4PGi1Gt6UbKyAtLa6pa2b9sQWi5EZhkm",
  "key19": "34MqoeBiR637S72Pm58Jcuin7eSmyxpHnwgbn5aWqPDDG6fGZNRodEnwhY63rtBUt3G9pQjH6CAEWZLKdvknpweK",
  "key20": "3K8uAwpuYkZP1dPKp39jh7CwTuXZKF2LSaisqkWsEanWcD7Z3ZPtt8uXsgN12n7qfG25Ahg4GMakn6C3cD8fHhb7",
  "key21": "2mFHsHc7jiC4TmxxyUC1YrkZwfznV8gbxtEukikQJFoHUxZkXWERbX4RJp5nknu6E3AcG6mHLNV7azCdqxQBYb2o",
  "key22": "4FynMikBG3WVYxnZH6iNTdFDDTFD6Zi4YjR4wknXN11ht9emaM9qbxPqLyfcrPQBxSgyH5X3Qr3Hxe1S1XcDsD7E",
  "key23": "4s6oajxkS8oSgVF3zNYNafvUaBzTdEG9hCsc9mNj2NHFtzN4UM3bkdVWpeY3XJ8wEeQUpi2pEMeoBpn5aiA65dj5",
  "key24": "rWz13ehZinwCwfpmmPyxJPpkqpRq2jEbGfnWGASiLcKHHkTjgvjeTWdhJAKJRJgJbikk6pbbyrvoBdmqBK3zYdX",
  "key25": "TTpLSpN5zEMWcqzUCsGL4g91REak3y6Mytx5ZootFA52dbXh2H66HLNnUQ1HqVhHuJgGraR74AVgePFA1WXyeJy",
  "key26": "3Fg7hAmaiwnA9bWWUAKhU1XwoYoAHmX5H9MoUbGwF6FedHaJ5mfR8KwCfk3pRuWN6GsCMvpXeMorKZvDEjdnKdC5",
  "key27": "4nDf5EQVLA2apHNiJKdGobPwD2ZLN4D79tCLB4b87J8phjeRPX9CXwJCZ2xEJbikBpriX1YfLLH2f42t1oZqSkg7",
  "key28": "54UCe1bopfwTi1JnLgxtNeGxoYacU9c8EjMz1ktFJrE1oNsp4vvaC45kooPmUvr9C6U58mS77SeoUPRSLv25uaK7",
  "key29": "4QEUoM4JeufMjd8D6YAFNZYu7YoCp6myPRDT5hHeS3FqdUohQmeKXHpVfV69CbXFVsfzRQx82sNQ7Ejutw8EKk4T",
  "key30": "2hdA4BBDK8hWGvQKseHGupbSvuYw1VcN8e4k7CLm4emHo3jgiYVBqHCn8D4oQipjSYnwXpSkPFprmg91QZE62DHt"
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
