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
    "33YC4BLX2qQiD8muYjeLQekakCdK7M72mLUFXsczCH3S2dYn8tq1TUyDcMHZrnjGwJtRyYJUeNNX5MdvhVuz5CDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXnBJxMH9WK9HFi1UXj6YNGwtdzg6s9gHjHuK3xER49xZPJcf3TKGbzeSmt94ZGuWpfwUobZfJGAEbiM5eut4mP",
  "key1": "3mMibhhYCkmaDe9WJpgkHVCD8Vq7AnVSgTxnHr4RFP56mVdyhAroMyc8VHYGV2zCHpmVSc4KNq6kbWyG4pQ7FrRt",
  "key2": "VHqD46BWB3V8JYBaeUzyP6G7jFkNeboqzM6nm6tH1iGLxdkvioctuS1hfvXa4stK5HYGcgBmHKxJYFSVHc1yNSv",
  "key3": "2irjK8cMRLoBpRYmh6RoUk9KGti8t2JiVd9og2k2CqysHyWzBHDbZ36rVHknuiSd6JmK4XE4TnxWMrahkQx8b47T",
  "key4": "3k96QkkXB2cStKekg6ZqFsRXcgJQ8jqinS2rkUb9Fu87ScRYhy4bzXP7BWPwgGAKNcfZ3WQ9vHAQ5Gb5H7hqTdFL",
  "key5": "jxpsCTVbDoT2R3i7CTTttnN6DzbPUXcub3Qe5aUJpSqBWSkELSaFeUMmfXVeHde7x7x4i8F9cuSPQWaMRnMU5JE",
  "key6": "51HvPhxwYyKm8fRGQsGpCbxH9CDLq8jbyDi4c7Up7ii5DMT3ftKK1pfeTAB333DkQZhWEQkvZR6Y6e3U3Kmb4gxR",
  "key7": "2VL1hi4AQKVft2sDJYesb2pnBNxgiZoRrGYWWwRwojFDyBpyFjpatTD3zQ6xgBAwrUfaY8tanrFMSJPCX89o7NwH",
  "key8": "4zp1aEKj6ZXq4Ae51njarMKLVeR1RdjExFhAzWRmPYLHQrT1MTn126gttNMRjCe8VUf2mRYNppLvGMR2CUYixFRV",
  "key9": "2ZKSmwyyQ2ujk8cMRP1eKhkwmEtvXdjc1eUZLSsksgYWmkJJFuZhgeSCVmuH1DAGgpP1eKu1esw1oDY9TYmoX1MT",
  "key10": "5smj3by928kU9fqnMSqVMRPGoZnSxNEvDMxKK3ifHN8zAujNXeaHtGVffooWszFXiJ91FMFkHfUUP5JTHRRiuo57",
  "key11": "2DV8UJVZfApJaQi6o43XSyukaiGrFHug3ofVoXCrgkaKVhTFznthGTWQZeXQTiDdhTFEs32zyFzX5r4RDASBnFx2",
  "key12": "4VeehJ9c4MvoSBnDh2nChD3E3BgXP6QhZjveFLv9bTeNeUJ3FoR5LrF6bhEubKxyzPTgVYdGpjsa7GBMVd972gbg",
  "key13": "4diVxR5oYBsmY9ZhJbwP9EB2Lfeufwc1c8KRY9nTUJoEoKcA24ZP3YhXbNxwi2QXhgPQgQA4phEcr4Z9w5opMnmB",
  "key14": "3EcXkukqJ2dg5EK6p91ebGR6CpySGp6AoW8SaVViKDZgxVXoRN3LVH5qmoeH7EWrZeuMoE5e74M5zianEXwv1g9t",
  "key15": "3eHJYkv8a7McbFakcuGHaktUj2MUVd6XJ78aud9D5yqvgb2sBG1cbeZciADdn7UoW1rgZ8oGV81Hi4ZFaESMYuJW",
  "key16": "2PhKd1a73qaf3cd4VYWcmeTUVMSTiymJ4ikccgm5D6KWks3ysJXL2EDDg4H7aNdvFXaEJSVKJokpiZWMUkp2expZ",
  "key17": "3ZbZ981gBQEmBPUA9EJbofhVDrMAkDYnJKn8xCQs2NBibnXKh7gfAE1NwQHND1XF3khgLvgZCtssTtin9tau1qk3",
  "key18": "3hreRnJ8kLrm6uGEuMoVj3ssZ9eQYG5Yy2Y2E4hQJ7ZBarmqifku1kK4PXA48As6hCynKtMN1UpS88toru8oH6c8",
  "key19": "43HnLze4Vm5EYHNWBwNi6ArWQ19oN8DppUm3H8Z2P1MUt1yx3jdDvWEXWuwrAMDvBSjv7rZzaPQn9HtDdfmUNrVp",
  "key20": "595PJbDkQ1VkXhgDnCnWbCpVBJn2ruBUX48YGMYPRRFGiiaJJDYVo72AGQAxUVAvriAy7h3zdanSUT6TxYUEKEou",
  "key21": "4KycRjqkkXuGBTW2MZ1eBHcsd1wo3LYXtfB1u9qXtXDh58Yy1WpMdbv84zfF8mGZ9ifwWxYX6iLcZBK2f4cJn9Fz",
  "key22": "4KmgNwmUjb9o1VbHTd2ujnLbXXHuTYDyhrmqxDjyJWn8L3Z825JR2xy1TKvJEjiTnAsACqV4rTfhnMz7XjwKgWBb",
  "key23": "53NsX8A3rLNj1pzSDMb6G442vDCoa17gPcJBUyb2RxG3wRbP1FQDgqbGxAe1UQkYNbTLkiR8YjcmEya3QD9gSQpH",
  "key24": "37nWFdWxRNbbVo9VskyU9xWUv1ed5TcaY5JJjRL2Yqnx2Bi6ZnE2sKJQLXPPXkp7HacksFEsEUp3StMDpaF7D5HM",
  "key25": "5d5HLNT4qFcwKoQPGKAKkjRxAFJkh13CUckAbK3aDC82FLxpngH9eVLZhV26PaZygYdZSprV7Dp7xZwkyDHG8kvD",
  "key26": "3RZmPdV1jpxoms9jSZ8sBXoWEmha29tjcnbHKw8CS3i5t1VP8fTqmPBJPsKnT5VThStMC5jaCvosgwL8Q7tU44KL",
  "key27": "2cKD1fz2bqaLVNyUV2UXPCQbyr1aPz729eSWbsCQaYQw4kjJKwoGBx3csGin6EEh94TKKDFvNWF6cs2dscf1tyNB",
  "key28": "4DYfies5niTZpJjkQ6LWSDqSQ4jKoxfrV8ta2YRztP1fWgMqgtSHomjnoQD64vegFqc412CGGsjhbJXwigFqgM4E",
  "key29": "SceXGJJXm98TtYNva38Mp47pvZwFwhYEfWu38RaVLeFmAQ9YUvrWXUV4qASuwiXS8fNr1BMUwG2imhG44oPrTZr",
  "key30": "3xokg4kYdiMR9YxkTP3Hog62apcJkSoFLTUh2QBd3b8MP7acn3Y2r8AA1E6nL9GZYGV87qAbE7yERiYwahdqDJHJ",
  "key31": "4cCCdKqcUpeNp7X4ykdCRoFdd82dRM3QS5cefB14uFgVrZYFAwATD3EY71FoGckWDZSrUsdXC4XMd58tfHEbSfMi",
  "key32": "122oDviDAqLTY4QNzu4oMc99McJac4KxS75jjxgjhfs497t8iBWMmKAsGo5fRV12iZfFinV7GMfU7kek3t2JSV1b",
  "key33": "3ECqXoeU718ECMmrqDQs1UVTojy3HH4iR1gyrtCZG8dHC7BCmFpYSbu2TGzMEkYBaonBrCLog9KkL2WpoaMqy9d3",
  "key34": "2Gyq42xa8hFAbgMz27EP8fK9HS3y7vgwJCtTnKQ86Zqe4XWwibuTDrjNqdDRPwS6JEarewFayYr9oMVGd9gR3vW4",
  "key35": "61uEwQ3psKN4YefQTdbh558SW7NZMAsNJD5kfUzTJ8ggps8FWshe8emVprkNDup5ngAenSSLT1yuf8zm6yYBkVc2",
  "key36": "3wuuAgoxjhyY6HVbgQJb1LFPGdK5PwLwaish4WgZWwy7LC4w1qcmsd9ryvWTdwrAVAzLf1G7pdKqVN4J5ps5VDKk",
  "key37": "5pHAZUZvfC1hRV7rkFhbvwjcmXs7ZmdVFWreaC1pXRkUMRgKyR6PLTom4R9p6R1MqJQgocFDejFsEwdML8dm8jZ6",
  "key38": "4z91jKZR4yfHVUqAUX48zaKjHVkhj9U6WRHpX4k4SdTuBfMoVZtBZUeavP9RcKz8XA7icCMqRst8yaqV4WRupsbr",
  "key39": "2zaKDWz6VcEmRWs7okmfwAE8nDFiLVJPiwFuvzsxVv3Zbe7qjgLx3MZ3QWRZKEzzBAgpBqCGHWYSnEYFvTFf84gR",
  "key40": "TJb6taitEZDCuuASUssTMhRmBkT4P9ACxJ48XZxeLrpx52MDqKCDZou3pM8CcnXPqy7duhHBuRzS89Mp7133Yy1",
  "key41": "3XPX7MKqqt95PtsFFHvvjS1jFeRuutvaR6d97txUQAyFuNWSvFx6zdw666ZWFMeFDR3ShuyB8tkGNEJoY2bJDXMP"
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
