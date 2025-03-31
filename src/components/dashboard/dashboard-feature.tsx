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
    "5VB4tvdNM74FoezSZM8cPbV3Rq8FdkwEQGBj3HnDtABmo5SC4MnpLrhxi6sMtKvSZvvHojRKjXfEAvZtRMpLoTay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CSfZuJkPKaPQGxGsNu4fNtoUjKmHv9rphbmV7swixFx9me35fxow7X1MmfHvUhEdR2x4C7fLkCjfMAf4YNY4Urb",
  "key1": "nXwoj4NpSHM8GCJGJYSVfxhLTdeSyqWNS2CYdpjFgbAWkd7TJxnwDe5BMjmyFVesAxAVJrkbHWPY8WKVSxzv52Z",
  "key2": "45CyiduPqhrGHTb6qPTzqJdHzmsvhcMWe292Q7NYXFrTDQP7N2oPgvPhRVmxgX8xsSyrzkQ1Tk3iEkCUuUQFtEGq",
  "key3": "SRFbUsRtF7KLwkAHEX4qPG9G1isUYYYSkEhXvKVkwYGvLpPUbPoTscGWeJrzFjhpw4jXSPxeEDLc2xfNnQ2rr4o",
  "key4": "UiUXGr7GQYiZYbkTRAuuLa5nnHSAAusV9jT3kC4HjcxcEqyVuH4VFHLwQT4iPkDkiakJJHwNYY1D5QB1uLt7STr",
  "key5": "2daeSk41VRnhe1ouUN698NCb5c5iNu119D2RTmYvdRecwP7t5QrM84cmcaaicwx8mCopZP6jFhJWuYdKYPmiLJLC",
  "key6": "4ye3TEzgEZVPNCWggU9R86pJsXFYWaPWWjru43Bdzm4GjciBkZ3TivRXZXczThZe9hfmuWpfK1SH2byfNZ9gzikK",
  "key7": "3LWmZfBzhnqdeY43dFkBhXLEwiv9JHzGGaWnP7E3VzF2rLXsMfkcAX9MuGZuXwGLpi2z7NCbQ3hoQiFDVoDUDjzi",
  "key8": "hXTMFaS4ypgL6whYxACGbgfVfzxvXsWuwVK1x2wtsRzMZhTGqTyd7XygLY783Xq1gZLxZV78gmeDsqA4HDfSGgn",
  "key9": "4Rbk6F95PnkYyKSTA5oBFSbBidXAfjjN8rkhExqLZ9qLrohATWHrYhqMc8dvrhJx8oKQY5TAAVGuHoQBZznougpD",
  "key10": "4ZW4SmShBS9SDETDiVKHgHL4si9SQhLdUPMnoteGAevyChPMYdych9o3HpFr3NGpVzrHfbqw99GpcwRvydjbi7j2",
  "key11": "3A1gJEHc7RHDNvmsgKADSRUvAU8kUrPsWxeFEd2RYH9Vrux4YxfjNnuP5bvoJriWVAiZAewnV5X2FbT8cbPN6tpT",
  "key12": "5fkjPJ39vJYuZqkv7BXcFuXedj5DNwUQeT7NkkcXz5rT5ATjRUSvFXzVuZjuJtx4HGiW41qPgDY5NzaopJDNXv81",
  "key13": "5xC21wgbfemjWtLwwGFqYqvfyLfSs45jGoTd9bXQVY2BV1N9hxt1gya9ZDzgiPE5gXpymYrcbLwJ93PA3ume13Ra",
  "key14": "3Uz7WEWp6w8cvWLjyG26aep5z6Eurdp1mQKKie4FRwS3eCZ8FV9Y5KcjfEFYoWkQcUP5aJhpDcbV3t6Ni1TqzVdn",
  "key15": "57tJ3giSv4h35CpmntZM2dD1hx8Gk6ifAh6LyhnhVo5BtiEaeWrwKb8cKBheUexJ7MXtdqR8K3eHmHmdu31kCYJ5",
  "key16": "2pyTPuAqPqeakcZUDFpq1UoRwygJ6XDeDjEQVaHp8sf5upUjTjr19fdcZjtN4AHxzDK9Qo4W4VUCrMzZDAYQwaTx",
  "key17": "445P3XqaAvsuhKtPX9KPHmAY5Yp9zTXjg2dB7cGXUpsaBjxzVkbzN9huZsyQhgPfaAc23tL2Jano3YwraaGiRJ2",
  "key18": "419sJm7aHBLo7T28aSKJnr5nSGS6sA193SeJenARx4EyVK7xwsy3Q5aT2dc9BcbLDM8zzTdxP9EaNTxLC9Kn9Jxy",
  "key19": "5Th93ruuc6skavFHgLvTtg26UnjQ3niTWkgUVCuEus4GhERgEWJwvDGx25zkUpZXPqH2eQLRza4FJkfCkjawV3tD",
  "key20": "BkqE5m6mKD4yH6SktYvoFN5fqdYYrFaiKtucT6V2ipUBEarNpp87UTmk5f5tEe1RsQMidwiQ9Ydm5cwfQG3e8iu",
  "key21": "5ynNxaSX3oVJx5JtbqCXThHniFvAjhYPd5QVCz8F5jh67ePPV4t1DAFLKLgctmdWS843ZXKrazXUn26deHs5deBE",
  "key22": "B5PTL8sJDXf4GWJkgdwXyj5yyfra5sdnsfa7q8K2yfKRQnH1vy7RA6RMi85SfhfWYQjgq5myx3PcrZXrxoTbzby",
  "key23": "5bLcQ1W3nfo7v6UhL2eiZfwNNuaQr1gtHTxr3ZhfGEqHGatLkAH9hSpYW8ZstyZpM2z6FWJf7gokQR3JoVFPMZFS",
  "key24": "PkEmuRQHXJcQy5CoM4dXZsYQSiwxE3pWe4QkYGAQ5bauva8aBWMA5DdgPdTWS5PU45C52HtwBzbc6Riz28rrR2i",
  "key25": "5kofvFizLf2TPgHqY7jkjMEwf6yvANsEE78SwPQtxH1xs1RGkpyveV2or641zxEQ9oxU5wCWV6YLQbqbFiosMjCr"
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
