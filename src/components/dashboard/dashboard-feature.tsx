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
    "5P2zWkejFGrSn4ZwtCDToYP6sZYut4jjx1cUF8sBm73LiZGNe1uyF981qVkdtmCxbP3VgcN6XZZyFdib354qjsM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ew4e8e8AkmU5wcdwC5Q57QZfeYfYMmrGBsF9E2j26LNAFxMj9bNq3HpnCLEcUbLGUitaEHU8oFuJjUTfhFL86Ge",
  "key1": "32yjpYBTKHaGWQhg8HdJN3G7uVgtBVMPoTJsXzc4bdEbqxppyRySUE6no5EU9FfiiPf956Fwyq6gCyWGzUu64xy8",
  "key2": "kUiyYih4AsosYu6MJ4HuSv79WXQupdg2TZHmznzUQCMNQ6VMkY1hn7McVMqgvE5aCrdn7wcvBnYonXzEYhCR3TX",
  "key3": "WzpKPm4LTRLD7oyAxmSNQr4L3fU3QqrPEGt1vSLKqDPA1GucNy4hzU1vgSAtmDMy8TvonFLaRSVZu6ptndkQtMT",
  "key4": "35qV6Kh1esfLEqCzgLpDLDEfKuKrNnThqCs9vSoKV8UjnhukYgRPNHAWpFCrQsit6KeEZ58TacyAtJxnKxXAS5KA",
  "key5": "4sbWEv9aW8GZ9J3GLH3b2NQ4NNtFT5DtgCdH5kz9KqzM8EKx2ZkjvU9YvAMJKFN1sVfaBwnT1WtGtjVgNHG5mJgR",
  "key6": "4mzxUnFQhaKLSb1eprS9BSJ44ZrU9xD36gTSrLDZT1TwHwu57quAMin7FMTZjNXbK6MMqiQqMQteN7aqAiwwPksp",
  "key7": "csanPhHnZcdqfp1LSKn5fvmbk8u4Jsy6q6XgifnGrZZZjvUtX8XEztzKCJBthPiekgH5RiHL6AXq3M37JxKkRZy",
  "key8": "f91d3QM9vVy4WTttP4NhejBKCfMu4AyyhzsaBtD586SV5ZmmzerKhWJ3MQpMCvAjre36jqdg3ba1sW2ajUno8Hk",
  "key9": "3q321Vgne4K4hraurdLgLN5RNTNwAtvNBZjVWJUjPGYKnVDVE42iDpkAQSUreLe7GARx7zG8rZi3upRmzw1FDvWv",
  "key10": "5uCtDJYQ9s1jYgdfirz6tBjCcaRXwHViizWMWghtt8z8dzrFndePxQzsWXc7FhfnNEYztiUaTptHKCQU1kSdTvj6",
  "key11": "yTjCVtqC8TD66W4eu7XAUBwAbWdoQeVe56pgkRqVGHUgjcnDnZ8iY2ieH7ArMFtza6k6F38xa3jdxdRmKyLiVY7",
  "key12": "E5BuKc5NMv7N7NHuhXpw4ACUvPgKS2miJ5HsD5aSV75ddJSLqdqZvvycWXPeKoDt6bPJCYUgeafxPLuxQ6NdmSd",
  "key13": "2aPqqEYCoSZvMXkxoaut1iXN23GDhVRU4SB4zH71b3ViWTVf9XFeiFaiEtAMr9rkDG7WrG9PKtcCGoGnd3mgq5ei",
  "key14": "5eqmXxnswbtzFXZqHoC5m5ZUFue6tzMvzC5sXcNymz3QVpbMAp6pLw2QnJJf2eBPQYBNHgMDvP8tFdTvgTRusMtL",
  "key15": "3vg5Z9iFhoFimuRSm1Udy1toymLcH8Lwp6W9XF4SpWzb5WgJYpoP1iAjoA6aqDvMv5YoH6R5Y2ewfyTzEa5wvmpj",
  "key16": "64gEnsWcmRsd2Q5V8McCZWE1LPA91biHiZLyDrQ5J3msudo4RfvHCMnrvfdLqZu7SPHaAUTFWTcE4o3nNgo2HAYd",
  "key17": "2y7MbZZGin8XJJqsg9YX8DEVUSQWnQQszzWwm3huFxpTioVfcw6W5awSdZN7E6eqDXhvpehqMoTsoufNxUNSTaGE",
  "key18": "UYVVhsNZqLf5jfGyBFQJ59nXLFW6igarkCrhwf6CCBBKGFtwsLRtpZnVvQqK7SPQgG2woPi6GLEv73Q83gb13FS",
  "key19": "3fy3zggATut6ZXQ8V5rKwmLBZrFKmniBXAZoFrN1a52f2e5ccLZDZnV2xAwv6VFGJdjcbmpGtPwEcmiz9x591QAC",
  "key20": "51LG5YDeZQnUmaJKcAFWxsCpCmmTxkYtKgeCGQKiNize8kwUYLp1j6B5LqKEheXV9Srb7Xa5y6gYrN1r3Yk5FRKb",
  "key21": "4S6EhyeANWbyYDwwsLeAhxX3ycrGZGwYg6nnpL47ZAZdBKQudmv4GadLNRmRE3R69Qp73gWfpuvNqThrgRaBKbVJ",
  "key22": "277dYfXUJosVGipd95on9ZqWdDtx6Rzw78RZy4dZsrVZ24L67gpAar55UQzhErVyhGbCvtZRWP4pCebY21oLDoYC",
  "key23": "Whu1vYXm1xJ79415KponKuCkFnZWuXe5wBu5DAAxAWEtB9FfEXjDBCM1Cq4mVqnA7F3c2RqcigFUsDXib6BEyT4",
  "key24": "B7nMTT7y5PynanFWhisHq14w4mexBBUuu68cdKYDChYCy6cPMzzwx6szZFDGyA3SQGnB73mM6fKYJS3zL4dn9Mu"
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
