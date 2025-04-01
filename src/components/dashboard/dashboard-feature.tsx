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
    "4WfLa8SdLw3RcTKpPBXDcbo6zagDksNQjhUJzEPK7t25jGqKZZtHUoaaj2hFrZnzh8xNEWShe14AYR2yaU2W1BEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfcJmeuFgknvKZji7eAXuzNRpGx5z3AnZEtZQXq52qUj7QqjMt5ZptJe8nx4p3nYFRZSgjK4fgQhKmXTJgc3gZZ",
  "key1": "3zgGiQuek5adMonKAoMzxfCmSybkBTtfTXtJXxGW2zZVP6ubuPYHTSxS2BUhAfY4z2zhQTJUdwj5g4jF7vpoz6rn",
  "key2": "2DDh2UUfuWuK9FKfQvmFsqTZnpjxZjgMwF5ZfSGZYoBz69Ex5Xr63TQKS6zoMHd29obbwMcQSQgSxmzjoJoLiP9E",
  "key3": "4CZyBM2FSDVcaLQHQAowxSV1ScS15oHHoKgREko3cEB2X4NNXcsDoAPuZ9Wswv1RpMD6oN8SdVLE3bPB9j42Y4rW",
  "key4": "4my1hs1Zbw8WjQx7WY6673WiPwe6mmDn5xp8PxZLaS8TtUiDF4eXi8TwDJ66SpCR4xVWZ2Tye3qcmiDYJvC7GkAX",
  "key5": "51mTWaBAULDFPZVbFJ1d4Fiw84uUXMB1m16GxSj7XiV7BdBXwy19tmVTJQj2EqXJ4Qfx15TLy6JYrLyTjPzEz5Hz",
  "key6": "4yBHjeXXgGGkbwjH3JzoJF23fkamwP2Xx4MoSCACwWtbWZavmGpQZFRHK8jQTZzyp9FuNiLdDF1FyWgfoUGtPpsD",
  "key7": "2zJuZFsbNoJcB2pyZARbGniwpkfDVc7ttRpP9i3MorjEr6LEms8Yra16eaC9iP8eHNxckTgX6QVvLscbg42REtLG",
  "key8": "3qPzASLEGpxtHxVkE8VoF4JnLcM4pxirKXqGKcomT6nwFeWYiwcD4PMh4wXuivyKqJsh8sW6TXyiF9pkbRPwBNJD",
  "key9": "5zEWEKuVLMosazDnFXrhrCDToyFH6dhQqNwsRerRDk896SdryC724Yq8hW7dJiFnkDQ7hPyHcRT83Pp4Sm62Gq6v",
  "key10": "ZuuZERWdwSXpQjE1Nm2ABEUEcwXS6bER7eCKLWcjM3PofUU6HaXwsPh1qoMfjbTkupjkWLFDw3rF7SPGQWmc3pY",
  "key11": "2aEkbJDHXSE8icNuThKi7oSZsagsXPGEDg7B34DYAwjdgjUk9ZpUtdnuEdwB3yTVdPqW6bmCmfkyMPLntKsTNA1i",
  "key12": "123GJwaV2DogDnk3ZisZoVzxrbg8iwWZS41KYcrmay1yQP92cAmgJHfqPr4jcw9Ngretx3gAJ6mRJkjhniNdUsXW",
  "key13": "3n8oqxCUc8GeswbxzWdU9U85SMFqHGkYnVbkaKtN1HUzr8Fj9A5QbQ2FAKnHwbJcLhyg9ktR7kHRytpyizJLGByd",
  "key14": "3rxqRwJaRmXjghWadKnQgymVnxUC4y43oaRyxivC1WCd9egogohGAts89b5zkiFd5okrXfCzPvBLysXyCrkCM2Hy",
  "key15": "3u8qrHSqmMCWZhMs4aBQyAjx89XA7eTXQBMXon8komrRtRbSm4ZMkABvUPY9PbuyyVgJEvfheNkXSdsw2omdDu5A",
  "key16": "4M2ntWVthMCMZ4qFuqceT9rFQ22Z7H5Zm1re6nL9fxdTBFD7zAbt6FKtDT9E5x4PxGjP8iMLwEBeNSYWZAGGYDfP",
  "key17": "3hMabE6rB2SA1VafPzJHJyMsMvuRuruJsjJmJZSMRVK4TggTTUgdYiBCxbjheyX27QbWjWU2ahKmsFD8ycMfovRL",
  "key18": "3ibDsorsPqZdGsYTtgj54Liq2H2256gi2covAteUUsx9bskxenmQC58isnsqLRpjkHR4abwt8K3wcGKThKjQfEzb",
  "key19": "21q4eFNSiqzY9WCjENb9PGsWWJK6xFoEHtz64VeYJZD5WLPex5pKQJMBg7HncF71uehdtFSnxXK75oWGn5ww2kLj",
  "key20": "2maAFVkfgjvpv9bMyfy9rjLQpeTd25a3r9296rXcAiDGw4wEXn3ZYmFwpHK4JdgwrsawqhzaPUvaMDEHNfnNBK4q",
  "key21": "2kKXSf5Hh9zvC2fF1uMpxVvcqXxxkQhwHyJqvLm9sQGuZfBsDrLecddnZdxUjftwrGjF9s9SMuNKMYhNGZxjkU9W",
  "key22": "2vSBmT2tcPfy8MVLtzMyjzsFbYJ5L8XAUY7nxZDmHZ9uZfW6zr1tLSr1SfaxWphvQ24BT4L1Hf4oUDb8dtEeGUmx",
  "key23": "5cgRS2HnsHbxR2a3psqDGoQt3YdvwsLPDSLDUNqBUUokLjKurMWmfoNb1FbB2rHBrgyEfE5RWeJ6KkhUZAHGh68z",
  "key24": "5hb1q4tWEhu3GKkhiLmsvKFDNBLvzBrnQSuL4yjt4R9uFKHU5hnWxqo1cvG11hjXG2BUfPPNjVtVdsR8fZYz3RJP",
  "key25": "5vBjKinLTkjnJPyoKvFWhH55f9BrpYppTgeV9TNXBZTTAH8ceLQVqrZSbAsWpYcVXyKqnYhsfmJqo7pXjWc8THXB",
  "key26": "RK5LqqFmC9TY4nrx5SVf3e3w8wv7Ka8tBpJEpDEstXBJVKNLCnhKXseQvNrmc7jK4dgbfKbgxKWL7pQpadGvKP1",
  "key27": "2gfo924irmTpnWHjPaQd5e8t9FyK1KtoVokzZVMYBTc2Rz55Q9yYgDmSNqxi22QV9vXL3AJcPs6iSSuqBrcDziDv",
  "key28": "37RLEbQrErBYzoncg62Z97cmh661Qd8o9mNMeMsH49C8B9guAAPfFUjtm3vbmBTkqT5grx47ApmPPWS2BVByk6P",
  "key29": "2KytEUnNXdYJ2ZzDFJii2QwmFopL38V9vPLkVytw2fGDKFnHeE2cYGo881rVGro4ANEPWPao1SwJ7wsbiXmkfpoe",
  "key30": "2Axb9Mkxtfkz46C1ogq1ofmnFPnEAof4qevwQHQ7mpZQLHHfao9agZg6evacosivAi4deNjFkZhJdRNfDgqj1zN3",
  "key31": "2iWa5CcXH52anqqpjjSedaJQecuNuQdEjw1zVk1mcHqD6DDfPMcVs3PSLpo6BWpm37YRzKZmSaqKexkbJC8z3WNE",
  "key32": "4Ag9VZHM6G8KM2SfUbVEC5eRr8ndaTNSevqCYkVwCQ2Z5GU9kboEtw4Jq7Hqvu1TfgdGWuKnK4nnBJVm4MfGdeLR",
  "key33": "5PwvBJwbL8M51pcaoqMH1Ra3iPwqV3Jwf6Ytg4b5BkuNczqs8u8CZkG3WuYwXjVRPJJG6deQEEMCceHjLSkvbaxh",
  "key34": "oWtf2QxsphVCmQDrXMVQCkbwWj1BgXxq25Z7DDyHtTHh6yTGe4BnaYbQjgTTRM9ABQn9NmWhpHNTbfX1XZA8MV1",
  "key35": "5VRqJHrVXi4RtEan98zCjHRYUYcVxr52LCzXgFbkQV7ZEbMzxbfewSQSidsJv9dcbxUuLEBNWm2vfsGuaqaeLtPG",
  "key36": "53ZSHnVB8mxsaV5rpgSges4HNdSj7JwgZ8jf5Hmoe8NPKoKnHaGZNoNw8bzjK6n1bVmRDJhzBze3L28CYPcbBYTA",
  "key37": "5sXWXhrpc6SuiDh98zTtXyv8iowXt7R6u5kUvgT7kWuxiUvfjpqM6ySoRarhGzMjdCr3Xv9cZnifvQ8vMx8SCV8M",
  "key38": "WDYrhuawd9QMJdsqWZ9Fc8nxhbF86YH1Jpc5bpRJDnEcVMDx8aUiDAPhFj6EcdZxWjZSScvamoiLiQpaC3Vj4ZY",
  "key39": "fHyNm7siGFBLyN6Da4B2ovXYGTKDJT2EgWCeooQnL6ED96hb19G5zeKVk68gtU7Q23XoTqm9WH5VazX2Xs9G7mb",
  "key40": "3XcRHMyJaaVNXtHwkvQULGToztJs4NPdUDGxWZCiUm48NXtZpSsVmYgEyG8HQAJD5bjoU4TdG2TdpCCutjFJMhMr",
  "key41": "2SQN5sUpNDPNHDySDZ7iN9cuT7kzXCAppeZH95RCecGwXwN9FhU6AXYPET3u1QuDDQSPPvRG6ninDdRkqFTf5nA5",
  "key42": "3ksTCLqiJnBqXPAxixwiEwBYf9GUskUbBzGkbwbxs2DB3zJbJUv7qY7wZSYidAqERkqVDZJfKwYj79vWGFkb1irs",
  "key43": "i9frj9Z8Wn6ToXDiAme6Sqc4WtC64iXa43xgooy5JVscsxWoD1sBr6kpY42mtSvTJ2NPd5u8mFy32jWC65xEqr1",
  "key44": "5gasnAbFRtjfGfjhL34ivaL8Pc1kcDh2wa85MdX81RjxtciMkxX4eqFTUKtpXCtrFqaaKNbojhDLkAoAWeE8Wkto",
  "key45": "2EUf9hwHG2kKU6NNSmwXDHGp9TaxEedxLAx59Kejk9Ub9g5CPasnT1CkMWTGzhruyca5SQCUg8eP5PsYdDHQoaVr",
  "key46": "4HVEr6PPpmqwfTkcPmcdEgaH6PEPLsCPSnPpmNG3oo9X7KJQ86AgpkqXDvmbqV7wvqQXDBTnNz9tb2w9ZG9NMS5x",
  "key47": "5buDoGdDiKExzxM5DwGFeuEGQ6b3P7SzpUoApTedTkvnRJZcshvwPLHP2YzXTrGBWaMamGP2M7daEKuAKoesPtvm",
  "key48": "5D7cNrucy7d27iuqkbm6XQAcXXTwtrV4FXRpSzi4GZds9y8rRS11yr6X2Dfe8PmmcGvx7oQAQXW59ZEBfDVZnsiK",
  "key49": "49DchoGCnry4dEae84JgtYJdj3RJN25NLtyZbtRJYqArSaJiHoNHak1My49JKTLU3VjAXWvZCKExgGQdbpwXXEJN"
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
