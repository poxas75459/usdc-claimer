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
    "627t92Avncube2nQBW3zNRKNd8aHBjGNa8madVzLuFeSUpMDJNUFjmAMwoQfLiuDmy5SZqAz8eSbN4CgVLF5MF4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pMKuGfWnzxEFqMWfjxLQWULRroKwc6mQmkqq1PbDCBJT7zL34QFBG4LiDrMza2bRCR7k7RT61Zj9oUGZsnmxsd4",
  "key1": "4oxEBNTg1Hpa5kA3CUTRMTVbUKfe4ZBAuy1efUAkdy8zJLSCiBMdGT812vVEnhK4o4UZhq4W4hKr8hXQtUS1jqyw",
  "key2": "3eyB3opYTirczVjW49Yuz3riRNdYa9gFt5DPqXzND3gYe61AmWqibygKXgKFmF6xBD1Z9Sf5WdA6qFEgGdvtKJon",
  "key3": "5ANQgqRwEevv4z5WrkNuUDJni6uSkUbpBYU5yjhj5YW5k5dNMKv9jNoZB3Fz2jzraL9VANc9VwLC7c8Hr5MaKAz4",
  "key4": "5zZGgd2AdWjV9vsS5NcZX4tyN6M5R1kB2DYeqoFLaRp8ZU1ZXJLfVBWf8Yf2VDzqH8J8XQkV3VS4i4b34AK8UYJ1",
  "key5": "3d4fZxtk7WPNbKuWUPGUKgeGiHsEMYRYjo6RMczQRMdihp4pAF1MaztGEE4n3Kk1psxQTYeKtfX9ipN8FvfzhNpN",
  "key6": "2uj71BztvaXAy1jzCpPS6YRH1suUmLqzQVaHTbJHJ2XN2zkpdnfUz46nvQjqrtU6jrBH1eQCrWuUzSa1pFKagzdK",
  "key7": "3t2Ej3mNdEdhXFfzgEEndwdpjx2CyHTfnA2uMnWmUMSYM5gZybQRt97CybK5o4XJN8JDC7tz8Y9BdwNk8NTFsw2b",
  "key8": "2bBDBGnhFhqTb65JGkLG2mBUriViTFfTYZJVhKYm8Yr45oWgbgU5ufSZhbiUzPqgriWe7KYQvguMsmkg2UNJDKhU",
  "key9": "5oU5YcGysGq1rFpe8BFxvVskYaN8FEJVyCjTCBDfm41ZsamgxYeGanto1ZMnXQR64imL2NjVDLuYueSc7Sg7fwNV",
  "key10": "2bcsiJNdFk8x9od1W2XHdHGzZ98EFJrSpqkyKBdzcsdXT5oC78pYwoV23pFYMjyccfPA5ybXiedEbuwWkvvXzVwu",
  "key11": "2BT6tAcGNhDMEUXKVyXhsaCg8iHLj3E2DNMHK8tAFHD396TQDfzFBiZhtCCrdZLKFbmgyA7dvrLnRdYfXyqeBgKj",
  "key12": "2J5E6JmqYprtX6Z84cWUtp3GTuNLAoopzyUT1KKRsdTCAdLNmGvXwApFwZat9X3ErE2g2pB4GvKDxzKCUrgXSShQ",
  "key13": "Cm1ddgTfSeehsB1XWHZrNu9DRFPTBpPXkaF1Gn8HNPvKGd1TPfA9hNVNWM4m1F5kUyUQUvbnZyJn2XvacPJurQ5",
  "key14": "4kyUsnCAdPCdcJ9juCbds5PSnfr54uMNS732GQnsX1VqxyijgBLEfeG2LgphJp7RhGAPQAq4PKXWg5EwhLHf4fyF",
  "key15": "3gLDY5E8cjxmdbGY2aJBt7appqR1ew17CBj2cYxPgzjeUy28o5RaVJJ1hmPQjvV5ntF1CVFbu7ftrvipsBbPSEVk",
  "key16": "wBz8BjT5AAuLstYL6cHxqy4wqrt8YiRmNSo227fYMbz3sVNyxVFdotDynG7DMa3r5ftbZq6AzGCvoSn2SyTXQfD",
  "key17": "3ZUnUji6DyUZUGPgv7bpSZF6gfiXQuJvkZSgCuR9ihcwV1n9wJAUomSuMr8Lhfp7cdBsHvSPyDvVgAFJF19xNfn1",
  "key18": "5vrErscwFQ3PKUNccCS757KMVN3cZarNMToVzFgKmE2HY3AFLEJhJeMVuqeiKJKYHorWRe5ESXDvprjmbXAh1SLq",
  "key19": "2TfNJmb7CtQuMWQHycXADeUcQrm7NzW11Ad5cETzdDVJRYDLvVy8dKgZfUuDLFy46WmkFgcHzduZksRAwYKZQPbM",
  "key20": "65dBRZADFn7YtXEP35Kx61K6tYayTkaRFs7cgnjJcessEanA7rDShLLAnbR891mtSURTC4vrnP6ZVAbXfbYtZxFb",
  "key21": "48U1eENpry7cjDmwGeej8o7xigdg7gDZUWW6iv6gkzaJoEHk73ZGPKxAy3CNndLT4zJGLdRPH1CpuXfKMZ9gRx5j",
  "key22": "mBH1jup1xURKpC7EBMWLGY7fmSqGDdEszVVzX8W9g52bMVXEwc7eH6RkoyPpvEJBoz2sMwETfuNEmBEaJixhrgo",
  "key23": "3sgpmeJYtg12V7drVquqzPHLom4TpzUhEoVBFHgmmaUDYN7ZLw2NWsZ24Rs5us3AKx3JyDFz4NDP7ffYjMeTiEuF",
  "key24": "22zrS9H8uZkfdRhAHGFnuFAg16tQAm14xeujMVnH8AyaQD8mNePLMjdq8HC65rLjRq5HUrGTGTmYom1h7XdkRVD4",
  "key25": "5j7EweAT2hgqWxgVNvwVvpTHpXfbNpd1TrzMfUNPoe85TDcU5sXszgQBv76jHbnBWtLE6PH6jhKxQvfSoRa3ZgCa",
  "key26": "2yxRcsq2V1w1TUpCxAtrSbc5c62hd4EdmG5AzDTz8iALf4EupPdh13mUru6d4TndZrkbLfRLqh5pbZM6mKBHGiLK",
  "key27": "51UK67YG38KYp2pkBbb3t9xx3vsyah9TLF4DfiQJrVteWm98WZHvGCjgnrr6CXYLizXs2tgUKyRuJRgvnYabqTmv",
  "key28": "hQbtw7QZjJcDEBaXpZHxGJWwvVPqxcor79BR1Hf662V9jQqu4moKoEUNVkTA45bQz91zRXfbTAhcb9XtLjx6oKR",
  "key29": "Q56V7yWF5yvC6odC8QwuJV5yFgoQ2Bh2fero2ACJaGu55ZZqWBxjJomiqufdd139M5UDdYNKa8J7aohnSUwnBjD",
  "key30": "2X9tU8mtW9afzrnaY8qV6NS94kg6aaXexhsLdTpcF1XtHU6yTD331jGrjkkA3WVLHEsaEbJxitaLURnPb2ArhiYQ",
  "key31": "21rB3poCBsdoUDZNt8JpGdZwmSp1Gv3bd4ixcqMAN3B4J8gGPoLAmgP3K1aCVTMmHGqAf2bsNn8KNPa2vRMEQXip"
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
