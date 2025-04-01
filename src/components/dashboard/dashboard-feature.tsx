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
    "2t1i1K7KtGEv97KkGsdWMU26S3Re3oXYM7QZ4FJ4x7MiSBdzzzBMWx9JBZVPfiDTagJckZmSi44XnC8FunLj7oR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mN4dk7J7KWn5Zn1hqtNRhvYeYs4GQD81bdbyquFVaF84zWp9isKmv4yfwcmrrYo2JoHzToV8s71GD6sC816AaFH",
  "key1": "4YqVR23jdmTSEXnHUGgUgrBybN1xEXykRX4EPWbS635LG1GcqaPVtC3ePGgRpZfkrGEwfBVCqzzRkHL5y5jBnVQN",
  "key2": "4H2cBpCUs9AKYXWvNcDLxUu5uuw5j2TQsNxaWUJtV4jGYC6SdtTTrF9zjXVvXXv3q9Jnf4SrJpnSTUB1KN5jg8gF",
  "key3": "4wgZKpNrLW7z81QVVXa48uT1viYCt73QGWgLQDAc3VSceAEjo2V5kd2ycmHAEqPhyr8dtc5xp2WCezoSA5jMYWaM",
  "key4": "2UKSWeHgpiWyu2MZVkPyvtd8BrVse49sSb2pq6iAuoQwUaZfSqjQ8daJemv7ndjvLLdNw8HqjPEYcBVkVXu5jNYk",
  "key5": "2txVWimv2tVkzgXpdAhek6nLfvsqxCLGXz14a4PbRL97bhtkhezynjr2HwdPdveuEpB5NTEjMFZqGQ5TWXgRpvND",
  "key6": "2sURAca3cXBo7ijAUaDT1Zut7GNUkv6yQfSHE6JReQBcZ2mUzyzxafrbq7WKjruJbchYBYyTqNkKRtT6gakXPAZW",
  "key7": "2yvMHBFKvzib8Pwj8ogqUypsvSD5eC46Sb8JqUbcc2kKxPCEtznodHKhuSzmz17agofP7Hv5dH99XQTHWzJ2HXYZ",
  "key8": "yA9W3N6tEav1mkeWKn6g1uoRjddGZTpDZ1334hJAeSbgxVgJEpigtkzAabUvs3GPqJNyBThgzHmcu5W9ot6N8zy",
  "key9": "5GCnuMu8aUFaHbkg1gsbLpQoHzbYDH4SqAMHwZPCzfpm69mPxozgzAk38L5tJiGUhaANKdd7C6NBj7tYxQW1KRy2",
  "key10": "4LeU5GSHzEENThUR3bkAKdZjXxhjMMcfYVFj76whZwBYsofyaAVjgD9ncjGrSm5pJ4b11iHEL8GZfpfvV8f2cCbS",
  "key11": "5wgjAB4qK4x21H7i1StVHdFfJ1vDBrDVCR5QMm5uSH2Hw5kXqtm6ajoiwYLvfo83eGZnsLXwfpZxmryvobuzgXoF",
  "key12": "66F1PTefQ67eMzNBJ5wP19kDGkbLQN9hNm94URNSPBPXkTqFpWSiyEi2GySkcYNJePyPpHt56YuMssUbMzUgwwAw",
  "key13": "2EatYMZhrSLALjnuRNirswFp7W7GiokwA4hHLqneS9aKNNDc6oEuQ9hFcgHZsR9G8shqE26ssQzYyecTgGxFLo9i",
  "key14": "5YqMrkJUJkDxA5FjWR3QfVDwfu2iaGz6pR8mfJ8j6U84EyQVtrk8BsNYEA2FQHACSZ2o9RhCX2bFupMpQWs2jXFG",
  "key15": "5VZ31Q4eCLxEVva1e1RHyroZ2xNJYpCfb7HWGBkr2YpJboHjvD2VtfrPWtQ3zwE6o4ey4wWm2EQG5zSG8E3iQ3WS",
  "key16": "5woa3mXiS1NrU1pACgpRt2VPKSphc2LDVZfrSnm5cXP9xwVbKxkdXLBAAdwkV6MD8KGLezk9dtJJaeuxwSjE4mPK",
  "key17": "2PDM9KrVgjaaqYutQbF628cV9D1pM7VdhzNXHsxBNA1d1qQGPzUZm4rqa47ZGbzfbqmAkWZdDBvpgADizHQzxvoS",
  "key18": "2HwJ7mcdu6cBYwrVtaPe4RoKnExC1JkqdJxi5oRGfjviuohJ4X3LQJVyX4undyfywGC4PeDeVLD5rTHGoFxaSHe2",
  "key19": "44fSsAn4EwyrPczknf5N7jBkk7aQbyr2LbsFKWLXy3ZCaVi77HGt3EsMHPiJeAUABCZFY5Rspq7e1zVnRAxjzBsE",
  "key20": "bANCwA3Cu8o113rwC7JnB8KZP3ib1sGoFuSpwxjs4qiYLBrJ8daj5jA6LkeDaarg4S85h5TUH1tM1XziTNe6b7N",
  "key21": "7YJW6L7JUF4CtcFNB7fhdy36zcJNwALmiGCyBJcszfqicgmykD9TgEYSfynbrCdCJeD4VF4J8sBppAAjwXH4215",
  "key22": "5wuaSpZweuav8ZiDWEoe6ruZ9NchyNMFZjt3aKPmte88rxvkKqg39bcGzgHZoJXmByfBV3W2DXLbBwjLBQ6LXkUW",
  "key23": "2TnXPqoXRFUSYHvb3j2YCRuWPcNNXQ4UiDBa5LxZafb44WKbbvb8NyfnnUiFNDZVNFMcQydCop5SFL48DkRkinkZ",
  "key24": "5nYz97vEYWfW4MQS8JYVwMiDRyFcAEymuSGdhtkKwCMuKbbz7SunV55JZmkdE4b1Sg6YRhBaW1PV2nGB2MErBytC",
  "key25": "2JW65xDhbrKj4epqWgDEyagyPTVFLNMCre9CkamSieTzfsHj1yk46r1YBZSri3ZGup4p8orvDVnRUHxA3KcNYvJZ",
  "key26": "RnzjgWLGBZFify2WbWHekMfnuExgWN27GT86CEBh23f5XfxdqLLq1oiokPs3bqHqczZj5om79kHoiiZWGaWFYBJ",
  "key27": "62DTNSqdCDpTDNDLDgDoKpYttfmkFoRXRQUekBRRkTah7YEYQEQdchrC75dmvrJGLa7WgvUfDEw7eoV6mdG54N5P",
  "key28": "KKw8jbZCGDnteQWj6m1nBDrhqGW6PwfTKyxsDD1JqViAmy2biYrQZBejHF35UBdeasUj8Da66K8ToTskjvrnHP3",
  "key29": "5Z28aCGVgz6MQqT6NsbiGuXeYkLKW4MA12YowYNf3SxBPJyCYrtsWNrvcMqaxz24hPoFEdnUxsFuEDccENXK57nU",
  "key30": "624aG3vLEkG1gUX6oKPpffrvfoBXaAJpwFS3cDNTV4X1bA3VYwGXWvejAPRUhUBmmuYL6ixgURi2DVxGWET2UZg7",
  "key31": "33tVkc5b7CJeqDVKbnP7GWGSCNfaFnvGtFX54G2m3Kkfnj7rTXtf5A2Q349uK2dM9oYQPavaxawLhzFBds8CZN4W",
  "key32": "2cArzbZFTWUTbYZXJ1xkjJ6Qds7J1M8CURYSQKDBp3UL427f7FrsNWkXPGCPjpchHoCaETCFFCzA6VnomVomgzpo",
  "key33": "FgNGYeDnL3PESbQ4kARtXfwUpcZVNawJdyMdq8ojwU398YNTWQ5xYgQsjLtkf7wGYD4D2kRysQhocDkXXjEH45Z",
  "key34": "2QkEgZ96wGHa72ovzkhiMfZiwD2WjFqDPaGiivRNZ78ugo8EWDske1afeNYVDA6vcfTdVuk7eRy7Ywq8sdQxwYig"
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
