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
    "66bWU3AgHPMoiqbJndq4RV7qzL45JJjt7k39b4PpbtR3ts5iW561LULAwMMpromppc3eYhfAqAyf5QfbbeawXoHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwSnuzfyLsUvCW1ogxrhQVJifcytBuB97gxZNM1mE4HrYgje4btY9Ec3rzB6mXsA59BKxwahagJT57F9spTAYME",
  "key1": "4okaA6Tgvm5vVV2syG22fh28PzQyZzeLi6m521sTHDD8DZGMCUv1uRWkRbdPzP7R38vuA8Z6RZtnv5xr25vUrUtQ",
  "key2": "3868cPwGeHoLWomAib7S8oQR9GbinTKD8EG9VbXSTCakqLzgf3kVpiyLrExA3YwKzQq5fL3scRBDr7iu9KTMi8CU",
  "key3": "3y7uUHA885581aLoP4nPxHSuwyxxVo5eAegZ8reERhPBiF7Vgsz7DCcusAADaN2LhPrTAJ4K5mzudjknoLuY7rGn",
  "key4": "24ZGSRd9o4LqtL7DMBCaxNw5W2NAzaP7sTwjWHWnriFykFC3B4zuj3onnpFTbeESJShnpMzwTPDVBpkSpqzVYiyx",
  "key5": "2mwoTPAwKQpSa4drWDuNN9o5t3VKsE5Vsmzouh3FtH3HetRFCFWWwfE2bmibLnUuYw9VB7fdTGmEqkPWWygETMqY",
  "key6": "5Q2pyBT9nwDPYupMBnBvknEuzJg6gHYFVw9sQQZfmsQwVNKGrskaJXv1TNFNWeXGNWdSwxdkdZKvTboBAPw7Gtbg",
  "key7": "3YXpVtxMJQGmiwvh6ccBXrdQ6v8NHrL5wsaiarniwz7YYgnWgXTDJPj5DU4s2Rf46g8gswUz78tBdztkr2SKqW9e",
  "key8": "4AGr5FAhqVDkiiidPXSNpRnc35iEch64NGHD7S5Jp5LkRvwa4U5JhFfYo1b23YPLPhD8BSjfePLriC4WkWGfe65n",
  "key9": "3z7akkbadc4Bj8fGkZRvKcsjPx57cEL1XpPRAiippTHcfBn1CueLEXjxH5yJFAVkV4MeQoTKbpAV1hXBUohsF8dB",
  "key10": "292HEYZqBQzVC7VnFKk7E2ihnd15KBv6wE6wDu32sBYkgpi3424v4DE2JQ3sdJDDhFnewumWzerGr4BYuAeE3Tdy",
  "key11": "evoMYH4aHmzoi3qc2cFSwRwywT9rwUFqVgUPzttH3SGBbxRe3EnAEu5upUJu1NeAh5Xoj71vbky7DuvqidHNYaK",
  "key12": "45huLi7AJSZEqct9Eo3pGg51yV88cQtsmpzL2wRY2so2MhgL3ycXKF3wk6TjKp1wEPEE8ZxidFqhkFUVPZwvj6SY",
  "key13": "4cyn5TjtTZf5u2U68jciVQ5phyiVS7VjgtuyW2yZX2b9ELoMg9Rqx1WEQCtjZzYv9bPovuENn9oeyFf8oe1QF4Dp",
  "key14": "5DHKwKTTeYwNKhotMAUXh2c8hvA7Fcw3fFL3pmTLP4xpfqfyYqZ31zpLP4QGYgKAaVQPvpGYRawLPsKh6u9tuTtc",
  "key15": "25Ek1PDemzUwAjo2kCYf5Rt6dX4FSdwdXoFaGSctHN2pNnxyj9tCfP9hVnCLSC2Noif7b47WS1XtyR21KVbwdjWe",
  "key16": "3opy41TbStLBeWpNNw3UErUhH1SMpub3zr9srgZEHfue1W9qXbtqYtTbMrBZZ1GAQzuTej8HQ4g1dUBU3QRPemwd",
  "key17": "5nBmomN1QExtsFj178eQZLqrEWP75K39fUoB1mJ7BHG2HWapUYVe846MrsBwnB1iyV3hXUfCEbcv1GKbA4PAMMFW",
  "key18": "5HgLCQPpBfMBFMRN21gLumgZhzhsu5U3TUWAs4Mn8sHLkKCNXESZiXrGyW4emsv5xTpiXuMbic3XveveYk4v8ALF",
  "key19": "3kDtcer2fqmb36aH2Y7TZWsF9v7QdEhzzmLVb6eaPcaJiDRz2Z7RfTJJMs1yXauqVhxYbX2VvEexq7BGgVWn7h2N",
  "key20": "rXJyQgqFDidgVnnrTcNByL96RWDG8RySw6BQYAL6gbgKjtmb3BanGFpt8ErVxjxi99x9nuigkVXgkv46F5W5c78",
  "key21": "4KkRvAsFWTFHNEXGUJ3AX63CWe4YztG5U6NHmjNMs2yD1pnZpTqsq4zSaxyiU6V9Sc8cyiagfbA1KFagKE7qAYuA",
  "key22": "AeAeenzJMHwPAkqKqnaQazk7rX11AvTDj5xWkPRbVPEEFKj5acXWtQfgwCzTF8wZZiHpiKZQ1KjBoYvagSdUaux",
  "key23": "4ruizJKYM63TFNuKDWD56pkjuKGsdV7Nes5cpQJjHeqzfD9uTMCDTSjntmXWTfMuMhBVx83ugdRJZAHXcNTna5Zf",
  "key24": "5H8jhKRTU3td6UVBWasgjPsjXvJrpXYLPu8qszoSfJxzTPs3X2oPxbrvXyvyLmRqiPvo93b5L8iTN5F9ZJD5FjcL",
  "key25": "5ZFgnw38hkYtsWg5tfKfgwsAqPJpBgjREeKB5Pjt3PTwdVafbd6358VZDQwobmADnVRyJahAYy5cn8CbdkFoVxS3",
  "key26": "2XiQRzicjXNoqk8CqSzy9MxB9Faj4dCwxwnay3y7fYCU3kpj4nHnM8jv2wVtCMBWMdx29V8xeuujLtUQcRqbcTYC",
  "key27": "5owkejUJeXLUzwSB2YXQ3fJGUuQ8Yt1yvfG4fhmSUV8ZmuFR3AEmRJFmFpDyYmPiMjKgZxPHryxqYvtR7HAbi5wt",
  "key28": "4JyFzawTgF9WASV25HHxhJ9QpjoF2HU3yHNZERgc53vaBWtct9xrw5xWiLuXMEL1M9oFH2r4VVJoyT9u4xBxQLqU",
  "key29": "41AN1p5Wf6gNHEnU25Tn6GCu1WiWDQzxZn8xz2Gqo1usYsGesx2PhPNAhE63sAB4h4VNkneiK3cR15n7co75zRfZ",
  "key30": "Luawvo7L4S5mbVimT6pUe9sdFxgfkJEmVCaEHjgGQvyaavYC4VwbUGtqFFP6MtESFxTN3qDuqbK6UFs9E1o3qzH",
  "key31": "6kV2Q7uzJCiPL5zRyPYUqXqqJWhzorBQvkKXJsLGmu44osBpA7956Fa7pbBhCU1DAKiUmexaZ8WZQ3FnyD4FLvp",
  "key32": "8YvGCToeyNa6xaZ1Bab22jivfj99GJZyvShgh2r8HcEo5HrEgagoXPQJ5kzC3SoMAg5EGvqhaCiU7LCGB8SxVE8",
  "key33": "4hQh2gcmKJhGxavxJaYTg32sxZbD4fitD8zt7mNq6j4kDZTi6HuBe6Xpdg3W7mk8CqRydxCna1jcYN7HCneAfz87",
  "key34": "3FHiT3qEBC3PY4XmFwj68QLbMvDqfiTkp3TZsCYSZKvzuHfc32ANveNJvoEpJEN7VvtqnHc8h9JjostDGAhoHYFK",
  "key35": "5FXxRBvqhryWkXiXY9SauQyypcGoWbAPgtrsiJSDAypapWKcbd9zRER8DGCiK92zGhuaQZ7UnC4MoxLLd8pKYEgm",
  "key36": "2Ci7E4VQ7Chm9TRvddVqm7G9X8hi247K655j98F7GUe8VQAuih2vZaZtYteeSeKqWepUPQDjCzmyqXabXPguofcG",
  "key37": "41e7misYGZTW98w78FtcURaD63NC3fmPYcV1BmaSBigsUkMfi55VDHWkmxKnurwDt2uEEWDVmzqimMEytdMxQ7pT",
  "key38": "3vGJvYCTNxqsh8QF4rDz8zbnz1xnFKstLiDq8DLyyuK5fAm9M5daNotgwQZnKFnkC1WuZYXhrSgK7gg6srqqDRMN",
  "key39": "3tqQ1gQS6kQo6PS8GWRE8uh4pnWC5zUoaUWNaYyLYFp7tpEwowfWgWxkFgbZyWDnXpQ1bfHyQnPUu5cELV9Mb7Hs",
  "key40": "46H8X6QaXmwxpEhxZ5PNQVfkEnAkAqxWVA8A3wWeKVPZM8BZDGMJb2CBCMo8763LBs3Dz1GieQWZrpGkw7fBvzm",
  "key41": "3G5y99rz2SbhtFQysre82o4LwSopnEJygpr36mp54UzdfTsxhM9mdt7gMx18rmJseSmLKovJe6p2x3FcRgU8tSeJ",
  "key42": "2f8ZKjywoPXU4Fx6fZ5dWDSygvd4xGSR6YhpE4AFD3YtQfDLJyoP5eoG5YGSNEdraPA8Ws1v26ugEwJht4kcQz51",
  "key43": "2ACTnm61iWgVim7cV4exGt9rfPbKhTfEepCmKN4FnNueou64hsAC1EXPUohegV8Ks3kzxfFVbjQGF9eBxn4pYzwo",
  "key44": "63mFM3VXPxt76a5C7tAuwEyqp4EzwaabaPrs8gShPWixSUpBCU8Bu5daPRbcXWJL9m9BrLCgx2Pk6qGbbCXGKjfS",
  "key45": "opuUmjUdPkxrdiFxooPhTCWyKCcvpedzkKfb1q8ViBcPZQjDMHbvQJfUFhfhnBY9tZDxMZwXfZzer3CBiudBkkA"
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
