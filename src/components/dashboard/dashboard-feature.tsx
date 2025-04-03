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
    "4SXHKB6nB2zvRTqNmBQ8DmSntYPC4HHWksP6EQa3vnHCVCqsv7qdTMTK9TtB1ZWHHn3fZ7ZZHNRYeXsc832hUewk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAfW6fvYf4TiCkAsHbaVSVkXLnbTembnZYkXrcLW93baU5aDVTutPFE3bu5foitZJyVshw2fnm3dL1m6Nr4iMoa",
  "key1": "5HGQpM6jyP6o5VfakSeT2TbhBCiJFBG1GWmnXv1AHwcgraqrvXaQWx3F3Nh9wWRC9RNiHMijUuzg28Zo132kfHEH",
  "key2": "2EFBeBktGFgxadzXC8SPUr3jd7b1SDF2DszPpmwonN2XGq8XLapLoFQdoEb8cv6Qspo8pDBiMYMtgyaQoLPmonEN",
  "key3": "5DPjW7VZLBNKQhk7frgY2eiwEYFzUYumweqFs7RDXkFfpD2RkthGHsfy8gjdWH5w8BtdSqvC9PfNxbiw89u3pdps",
  "key4": "4RUT3xmEcnCJmgFREPydJ2Vjvc2FA6MbfEknNqYnuusFimCV7rADWqHYELjpyzHnd5ZGAkxiukZV8TRQ5QJa4peD",
  "key5": "4wR9oFoGwYq4ERVDwGfRydjxehoBUtCZp6wksLxHm7PWA21ZMjc3tz9Ryctx5NcpshtW9HxztqVWpwvUeBWNSxaA",
  "key6": "3XV3UBkLTrfdwg5M8uFqTCUa6fMV91T5izbDsfHefifg6dnHE4X98Lf1cgiYs6eFGyibsyhr25r164KsRuhw8nZa",
  "key7": "3w3fnNtAC5w4bZ5DCXVRWaFQNHGdNQLVqRxGfuEyyUr79zSH7uFafDreEgtn3n7tZf2eJiYDG4wqFnry6q84FGJX",
  "key8": "4bxPFYVVzpFnQXqoJUge6hbDDXhGvMCiAoXwfiCWV38emP2oadDC1msBEvskbGLzyB3LRxeJ2S8inwnBSxBUbBSP",
  "key9": "1omno9GEXV1qYns279mXTqhfYDHxJLMihKDLn3xe7j4VrPtZ7qhtJsuwVyD4ze3wWTQeXHi2EggZqvA6maaQK8J",
  "key10": "5KW8YgTf35KFc4QwtWHx54zDuFZULFwFVyMhqxedxttK7aB48Uvf2dLLuxBQz258yv2v7aC829nzTKajZ6p2YsqM",
  "key11": "3yinu2SVU17W2aZA745FZkAJi8wL8ZTMfLCBVQjdcnC9n68W5SzjYKk3Jiu5oMWjuh43yTQQRQBp7njjQxJpkMKk",
  "key12": "3t88MLPBRNMABJQKEJ53LbXzgTdfDDemFowqoej9STGYFENBPMmoYz3o1F3yqQbfmNHKfJDsBdpyJVJN7b1z3dWv",
  "key13": "3sqHZ1iQznz9DMifhJ1F33bWRiNDQqCFBSLeP1GXKputXSXBrG526PUed99fGaXBs73SiK2joPiyS6nNiNpnH932",
  "key14": "2kqGQFaK5V7KsvbPZmz42m5oUKeC4H6QTxB89BZunovakMWuVRYT5gYZhLaHDcquqrRmYbNaizmfByC3Kri6uNWh",
  "key15": "2dGWXUD9y9TYQrcx2K1WCYQWSh1caNURuSHvyWTM2vf5Hst9gntK4uvanF7wLRwWZkBwYq7ofPsjei7opJbTnoDD",
  "key16": "3Q5YEEbSGCN5UbJWeYr23wPpxkEr8SYRWeLNgFaBZ7YeshRBjXjPHbBsuBSZC9tThPPiMDZhihZ7Ytx3mvfd4Qpw",
  "key17": "5coNfDufzBWGavFN5fNgHkRPVmFMYiUbXetcrDSTcitWfBryEQdXVpRksHQz4JD11SK2TKPrkqa5D6oBdBusaf2X",
  "key18": "Lvp7Z6ejRxrNbZKRv485qx6DJPCJGVGRGgJaF995UrddE75RwzaHYfpqD9ypmS4Z3LHuT4dAYnrRY5H7EzN1rFy",
  "key19": "5gaGhykMeVyXuEBWN4X2EsdR8W7K1y58fA5GzG9HGMTjxSrtydeL3uFjNqAnFNGAW82CTBVXesdSmn3tLkKymRyo",
  "key20": "mLteDg9ZN6h1HTmtVoyQ8FF24qDZp5781L6tCLFJUXXqyCvMErgdUXirhQofFcyJZsT9MZDb7ybYugsFAcDvKzo",
  "key21": "4L3yMUEE1UK6Cbha8PqWAXKDrvEaqaUATnqkmhvJqjT7GazwC5weK2dfvt7PANpUzE1FqSWFjGonCZ1Hr6GNUfJW",
  "key22": "5aPeEB9gs7QUzYJDgBoGjBddxZvKLaxvw2WiRgaKAfRwxBxc7hXRuzTGQ82wzHgW2ZY24kwoYD5rSHuPjGGv6kmp",
  "key23": "SNS91vYWCw8t5sJTaYMfi8LoPujoRpHnP8XECZGxJUCTG27paYtxkoPpt8gdqbUyvNqSVZnWcYWhj5cmAP3KnjW",
  "key24": "5yCodZZz7gAKK3HRQbndpwk6ji93JJUBPACgDWN2nBZvp348pboWWBpNkNtN35vZcF8QFAHjFRbcEznogdhnQ2W8",
  "key25": "63jGQpN2XdVa6VCqKF5kpdGLb2tW5xqVqBTGRWKLoXBtz4MPCKZmzCm7FmPTLASiGzRG9kth7ucwQpGtp9CDfmr3",
  "key26": "oESJfYB6GPebXNPVuCinrvqZCrJbQJMZeJznpvwAPT3F9WebqK3Tyc9SDiKVnovrkPLxymEqdszc5ZQJx1cmopm",
  "key27": "5RTyjJ6Vg19f1hAJdMeyog6zaNffVT7aK7WzTm52BnEXJyJ2wG3iDE3cuKgg4ZWHQFS7WAGgZQTBG1d4BHGyrvHs",
  "key28": "jmwSjYkEDkdd6yGzN4EkFHsWx3ausexCc1tqtFjUwfWYwsVEpQe5hgBwDqWhH6wXbFoTVmuo4Wy6xgoqahPkTTq",
  "key29": "3wM1pj7th1Keo5m5weXB9GmXdWxrE7smuDaNLgK2mZd2uzBg51dv2WKaf6sdDeV61wrCCmUziRWwUzReCD4RinkM",
  "key30": "5HjmgzAgMeYcu9v6qkctKJ2kE7gftdRBaQ42Mc67mtGSzk1wMbDDVZ7kZ4KvaA33TnFPGKkVkzVJAouyy2cPyJ6f",
  "key31": "66nNxFA7vnmTjLdhYRncPG1t4HpYAxdb9bs4hN76KjEShLBZtj9FFv5YGJjqmUckBRu3GXxbV2y5ewhpUhLpSEAU",
  "key32": "31EMNd9r8aEFpGwKD9kUH9t2SKXXm7J1GoygBpWsXYGEvSq53a2aKvZ2zMiwbUgwYvbhjWucV8twrdAvbwzAVZy6"
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
