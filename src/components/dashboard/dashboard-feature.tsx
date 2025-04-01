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
    "5hFS6LYd7Ne5wAKG3fttuo8btndvb9iAMKqbcgdqgdFD2oN7wTbqyPLcdB5zHAmTFdHjCB1SKdb5JX1nuUwNGkPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEUjyZbdUJi6MbZpSTJk3U5KvL7gnNxQQUJWLZvQePsxVm1NGFaXzFrxcs22srdi4YkgACHw8KVbrTQrAeXjSoW",
  "key1": "2m4MF3j37E4r7qevTKm1HfvNWrb9KY3d4dWdt5wt1xdB8XdFA31L6M4SFJRuMfofUmKYvPY7jmt1BPTgHTsf7rVq",
  "key2": "wJuBHHYrQo3MYQThdrgiG88r9mPpBucAvHn9J3N97UN4Z9bxrz9BhdztVUgghWNtYBBboEiDWofaiQ85wnyeydt",
  "key3": "rbwcPprgYBoGeMQuN8LVsHeoWrGsDsAM3YjLoK6yz9kzcurgikyTnu1xq4KMoS1V81EX2fVWAetfxqK2h4gMtmy",
  "key4": "512AWNmQSunYUES8ymXFX8BAzor5KJpjnxq8Ragdp5xNdW61PLFFgQZA1W2i9agbHqvMga1x4hrbvyExvVvj3siW",
  "key5": "4hAXcKvKqTs9zcYWrS9uDPwfNmtviVVwtR8YHTBi1RzJSB8Xf82vr4ZbgLSSWEAckE5HRPXJaF71jZKWdM4m3kZe",
  "key6": "2a4N5cUmZHEP9kT5uWWSQHWmVxztuiGkrFWXeWLjnEq2P2ZnpkWbH2dMnKP8swwv42bnUnYHqYpVpSpPxLLTdW9k",
  "key7": "45cKy2SBNMtHUc7W1khGNtcwkaxyobusmNhjHR3AC9uGZ99AxxhkqBfcn5Lx2Sfaaag5oweqsmc6tR8pyYEzAxat",
  "key8": "4jJdeymG5WFNXxG2V7NDwTavWBEFiw28o4c9GMSdmTogJ6616DqMBzUnAHtPmEcvXPnKJe3kzrBr7cpL6SmXBE34",
  "key9": "5yp1tvXRnUaZMrCbJX6k2RggqinNPoDPKGHewBcQEzW48w2jgNxD5D1sASqaaxDgvGipn6BXUe63JD736gC654Ye",
  "key10": "te4xpH72imwnbmFCEvLEp1LFhZM9mFgFdZsAFQVhCEwgKCsTxU6eQFYQZPyPqvizpU1yTi6Jp5aMe1zcfzEetWe",
  "key11": "SXrjLfZwBzrWjsstYswzzVAVY9aNJFPLnckooSKo5JaCkY3K3RmSbX67hzUVEy7u6bjJpGGyErjFjWuDPzVRhNC",
  "key12": "5bhDUu3XW43Nyp6mH2f2uZ4JYFPTVFBJYx4urWY4NqoNmKMNkC6cqGvS32peqy4i6r7LP2svyDvKb8YUr9E3knEq",
  "key13": "3uLC2DQusyLWCEBWuQPzrMJNSFdhWZCNvBjFNiZvugd5kCyh9m89W6zvFYh1iL2FPkrg16pEsDjuq6AFVZL2oV5D",
  "key14": "2YCDjJc2CDCRyBB49uycWPz64sHiSYDAKaBzdt7rPF9AV14REPmc8gUnFLVs3z4mijEf1sytdpK6qv8mTYELKXqC",
  "key15": "3Dr7scFwe8XnTU9296DBWqQdFeueE5CdAJhPWjwq9zLBYFn2BPXzx4cDnVEmnKci9SePLoVhHE9rpaU9nb2SdFid",
  "key16": "H447waXJoncbMJaWCrN771s3XiQnutAsgp9RnnP1A4Tb4MK22CTkgE32CLiYXvZUiQfgsRY5qsxSREpLvE5Xcoy",
  "key17": "4Pp3tM9mBKPvyK6tRdDapnu4x22osWNYqDUkLSRzMxGfw2uu8ZZ7f1wadS6zp7Kmt9zggEDwXcxjfekiYmFtNnmL",
  "key18": "2GAkUMQwCfWWVh3amFpwCjreapXvXTf52i611t4ZhSc3foAPTTC13MzkpkgLsyYDyZtNqkxCvMWdLcxAGHxv8dnt",
  "key19": "ombZkqTKjAfbp8i7gfvemvMCpmywq2y2YzpScsKBvxnxBpNoPT3Nm4dvRAPkSRvXnPEsqsYjsLKM1kGvVbTXrDv",
  "key20": "5ZYrCz8yDPWgsBctnfDKvzgao4pgm5foeQDyEzzzT1Ypv7xeavQo3mh3ywG1wmzfBZhxhN7LDgyYALufPXqxsTWB",
  "key21": "5HQ7b13wNqKAv1t2bQAvFFAgpyQDvPcy4pXQ8udqR15w9E95ecfVsPUYNWEM4XNaZHWT4qveLQZCkcyfKrdsrKK1",
  "key22": "2BudAsUy7xwEMYoYNnbCwwXDqVoc8ZdcmPT4bahxft5fQTzPYSYcgVqzexjs9dRvAZwoeGhEuHcqCE7PsK3bymDM",
  "key23": "X6RVZmPQhSVzSQaTswKccXNWY6QXf5Sn7GfB2DWpHfRG2FLCCm7ak2ykJw7M8NS4p3whKHAjV2YiT86dQjGuDrq",
  "key24": "48xzZDtGFhAHALoQ9h3SrB4Tv5UxjkVn9JSWAQdCKe4fEcLxm9D1AviSEatvJaX1DYoUgJKwjXDAyDVHhsN25KE7",
  "key25": "4oPZ42C6jpLuGUeRtf1M1jM7e4ST6Dos2KwWDGy1gDLLdS8UUzaSgA6TnnD4jrsbRNGi17FNbJ5zM8GbhHr4aJT2",
  "key26": "3g5YMbHvzWtrtbDXX2qaEQMXWw1zpSiFFrnRZrFpuKPSB1DEUE1N3FYZbFbqJSu2SvkPjVsoQRamoe5jx4ZzMXrU",
  "key27": "29NK73vMvWw3qajYw6bWDSaUG5BcfZkZ8skuFrdUgQSHazC6sdV2DEcGNtsPy1vhhDUM3Vd1NJGkkjZu31NKGz5N",
  "key28": "4rd9GDXVLQnmatx15uehGV56hgRQjEwCBKmjbZrpAaqwFjojgqeEUqnF6RMwGUQKjDMnNR4hpm481xN96HNCUvJQ",
  "key29": "2XzTPSDmLKhBpFvDzNUKSgDAy1TunbJEXzAgNuA4722Sc52SZet2GjZYK4AyQZM5DV2kpJ4cDZVh3hctpmZ6RWVj",
  "key30": "5GQpcgyfjNsjwbQUv5f7TLZcJTV83ipYk24P6rmQ1sguYSLnVrEcm7uTHXRzMmRE4X2xaCBamxNE2NWB6x1tPnGq",
  "key31": "3pFGozMAchDNdEHvRQXf6Z9WRTPGd75XPwke53QZtFk8RjVRmArHwb7tc8LKrtdYW4B1ne9D5NuMt3xvZg3DtmS8"
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
