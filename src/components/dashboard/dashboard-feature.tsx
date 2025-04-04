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
    "5FcCaEHsdBmmtGBGppTTY1ADUW5RrksJ71nhG7jApAPZwNbMzM35RiEhadEruRMbeL11m5cqkDMWfL2JkxMXT2sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnWEJcMLnETu7tuhmD4UnqsAXnohpPsmWD79j7AAug6AbxewVdckRmh1yqHP2jgL7QwhEpnnZeSgryKmxz76vVC",
  "key1": "xXhfa5pCz4k2enAWGGa8MahSntnZxLJYpPYiR1EvuhWiwPogXwU6dhgDh1RNXTYo2pZhauDqTiVnYNT6Ng8danv",
  "key2": "3M7zSZDFDSvPpsQPVaXeEbbA4dag5Udxa5Rur11iafFYw5vfnGSNT7PBkSKjFDQmpSiqYYQpmMByjChS4ukbLNpH",
  "key3": "56m1Hb6J2oCgFYHPycqrYHfEWM7jq5qob6uHHz2qw1UR9B9v544e6Bg9HTnaD6cRQiWbJDHCV5akRqYsG8i9ctBS",
  "key4": "355N3mKbsuSEHL5XsMzFZ94PEuDncPjLJTNKFSwEUdegKgUZDENdPFRcemSTFLUs8efMywy8udEoMWfT52ovAmv",
  "key5": "3yig7hedCQDSgfa19UwKVbngxhQpUEnGw7ftpNYidckkYNajBDhWuh5bybpNntG3rE3VsDNZjCFLyASWmB5pwLwQ",
  "key6": "24xxZdty7cwUSv5WiwzhB295P8EzayQpUDjpkN4a4zHEUwMDTAmBLBvnrQi3LeWzYwY4GHj1ctqZvZMdbevahiWn",
  "key7": "vpgiJwp9V5Xr9CYaGTxF6EQcFULTcsZqY8CGfBXmkXRLkJAPrzjtgBzt9L3NBqpiy3ihcpcDTi2PaPuZMhULZBY",
  "key8": "33SzCpKP3VV5EG28uxGpyiDWeYqKN4ctuMC3KfkzTcFnhjfjoz7GdAgjCC9MJ8L2WsLtUXCZTiBh7j2vMXD9Cf6V",
  "key9": "2uN1s1LWTMjmU7ioe6vZHjKMAcWBpnHUqaMPn3WStUbtn8mUYDHEKE2dU3Mh6ix2iFcRi2VdtDG18wUctwJ3TaNu",
  "key10": "4KEkT5d3dAEWhvSrSTunkFJjvZG8mkmvHbwZCGP2Uqw2c2QhY9HZ4KvnRwjreRi1n1EZAyB3Q3c2Bf5PEQUCKpGu",
  "key11": "21UhdVAQw6ea1AjH3sS6VjVRjhrpkBuALcPyYDavsJEKpzT7b9guCwsVaMpdk5HVCSQXTuVeVY4DLgSZhcytvNJn",
  "key12": "5y5rskzukuxcC7DHXyRHWN5DSVKUHtwiyog6cbuXKvsuYyPE1bfiPsUHdGPuHAHMBucJWysxQvrFpzRMqGMk6Z6r",
  "key13": "4gN22EWHY9F2nfvKg7JC4GBGiuZhtuGVK71gH5CSCpn5dAwdAAT4KBKCNDK9Mpb8iwntmn4ZEh4jhEReByZwpJQ9",
  "key14": "4Mtoi5fCBybNeMgLgviD3YBjeJdpEbMbrGEAaR9MuRGZaqteJVWxAWBgKvdJ6LCkX5ts1NZWME5UKh7pucGT6RKo",
  "key15": "3M3Xd4VpTKhwrpVNbR4mV4ywjKdKSpSqzubzExh33AoHdMSmm8TB59LV3qEAuyEAwd1oc7ao9uYhDyH3PosvbZHy",
  "key16": "yypT8PDgYEyZKd4oh6Qdk9Nz7TYGHCEaNkBxvsMeYYmjjV2K4QsgDyGkQGPRL5FDj3BtTEj6nFjnAgxTyoKt2vz",
  "key17": "5izcZajTteV8o8vhHn1kNsdcHtu2JDKt2Qq2hCjiEAhSvEVzMyTBJfQ7iQDaTBdoVY8Hg3GeCLZF2mJaPRzYw7Cp",
  "key18": "4woyFwkg3nkK6EswUBm7426LS7XiKLpGWU9ayXwZNSc5RfG1CKqWpvq2WNS7mfBYwGxFSXX6eYUkQWGiUdQVsGNH",
  "key19": "TSpM3FTfhe762q6YuDxizemZkF46c1taHkMfqyWbNzJYHeMGUF7oBHi7L2JwkQ9ZLyjaDkUzwZmZ8WFuDYQy1Ew",
  "key20": "3q3zLRP6oaX81sgH4rFfhipbZ8ca7vKibM9WPQEToLinvKbBrg4izpLCZ7K7aAfDFgkHRDY7wPTTsxk9aoos3Hnz",
  "key21": "5Pftd6FMKF8r6n6fn7P7ZTc9AbuEcjeTpgfAEGxC3weyhY3ZpRPNGMZwZn1tVEH669TTe8MqS71zSKd8bJWt1gQ7",
  "key22": "2Rff1LUYz1NTEBV7eCnFSzYC68fDi4vhQ6Yw5zcMs8m4XW3k6ZJjtMeEvswhdLSnJz9ju1E9L3dRuKiaHaDMPUif",
  "key23": "5Ws6JV9hzBLkpNiYdKqZ6D3mVbGPix83KDj566fW2N1ByPYohWFqnMTpEvAPCP2iNuoNwK5GuPiJHPhxte4wi5j7",
  "key24": "5jDEAiL4FSiK11vkrrJQFuaCg1jUksbAVSMjscFM2XDwrfcy1wxSUD1rdsC45zfcEeKFMq6wn1FzZwWZUbFPsGfM",
  "key25": "3n425FjPBqMVPfXhWSbLDfFPBEHBU5toun6Kv7HtNQb717GwRke73aDsMweYAMuySaakgMfNa25ZKvPFKWy7RKgu",
  "key26": "37TnMVJyBLbt8Wa2WPptnikxaQFqWYRDBv1q9ywMEH6sQkSd5VurVKEC6ptt8a9CHGEe1QPTuba3h5YqMAbueUnb",
  "key27": "62BDjWRRW5JdRYkYrhR6fmJBxjz1JsM6Zea1uV59TBGDeCNB2eEN2aRekfYYEBFyihm27YzkD8ctH3mGVcoVCQ7w",
  "key28": "h3j8tbRcvahHcPnFu7bHzzCiCZfEginUaS5WGVkWwAsQSksQY9MVhSmELUQo9gjbsjK6z9fgofWzsTJEcvcHJxD",
  "key29": "bywwiBJ1coqVURg3HMU8zb93rgCa2jkAxVTTbArzjjdiRs8z3oqsHGfNByyWkqT6fzCuL7aFckLZxL1jf2o33vT",
  "key30": "4CTHVXf4X3UnGcQADhfu3eUNWfVXzCjFmRxxxbhY31nGhYBktRVcuSr941YmqYqrb5tWHZQEbUHp5Yo3BLkSjxSg"
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
