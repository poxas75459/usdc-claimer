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
    "RyRADDzLXuDCdFt8n8D8Ubwd6vd82K6bkBTs42pQGvU7RKMoyepsAGkp9L9vbBGvkDZeTw7CGSvk26aAU5mMGRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRKKP4VJesiyKnPFghgMCg7wgnjoMZx4Wi36MRu2yEeVjJYXz2JZxn8uLs4LK5BdRZ83yM6HVfyEKVgRYUyAZ9z",
  "key1": "2SMm6ppjXkEK4p5o8d3ijQaDi8ZDQtd8BNaZFo17n7m2oEqwC6nL77QDvfXHLKpR92RcD2wPbNyYi1CLoYngDL9A",
  "key2": "5JtPnnwQe29uTUhBPRAnkY1Eo1WFJCzauNAe8GACaJn8epV5CKnWqjoiRQtfAmchFxPoQwbmo3S6yVfwyEqHaFev",
  "key3": "3qoBaobidpeJ28EwjdvWGhD4nJPvgQapfpy8C41KzSZTv2HJA9dgC1wYusX4nVSNcEX7bnKHm8NoJQHhswvtxXvS",
  "key4": "5KmXvCjM3joEgYam2vNUvANKfsDTum1PyaCrdecDfbqU6jFTcvtHUTaxUy9AKrGyXMWHi1xJTmNGqfSpnbeC8aVj",
  "key5": "45VBg8ch1qDRv4sBxHTMvRVAtmndmdC2xigSq8YRtBHYz5pJW9PWuUiJby11oNh8dfwDMqz4hBY32owH1nX1avYC",
  "key6": "2Nb7U2JVqw4RVrtDUafvcKxSAEa6LWBxYAPCdyH1SpdQyg7WMCfVhp1wkX7Zr3tyuJoJoNBGrw4shXDSJkwYc7Yd",
  "key7": "3T48FT6ZxZN13Zu8jWW6piynnRxFr2Z2nwQYvM2AW7xgtcUh4CAbwvuJUMRbnqATb4FjgsVmBkd2nUAU9cafoqAE",
  "key8": "28TsBxmQwf2h8fsN7NrRaCTVLP8xSohJ65A2ZTJE8DZcDEhRsZ7Hi3LMady6NyYPvfv96szuqevvPQ8U1D2hcrz5",
  "key9": "25k3zkoZbCNeWJkiYnAxQDZe9BrzfhRgMBiHvhHPvqdcftMKv85HQrkgawJjBUzP7dG3c4hbB2L6wuuKaxeMCEdg",
  "key10": "4agFxXJ218wnLTs6NycUesMGBKJhW3JTqX2e6zFBzEiZRmCaX6PhurGNfJcgw1rBeBDvZvqu2w7sJRBvvEGUpC6U",
  "key11": "3AMaM61szLD7F3BfaGkYXJo7BTigK1KpB6HwVHqrEhURZZX93BPoYiVaS4BMb7kPnqDw6wkq6mxkjSoCCvhS7enG",
  "key12": "4N3KBwzeCCvJQboFp7cknViVNzAXnBodzW7KD7yMF4bkz7q4WQcR6AYc9TixCNqhQ3sgA28JUkni9emH77HjH2bw",
  "key13": "61mrRnH1S2m9bXURK7GHRWGt1TjYNVyUfFqcNFUigEce2vqHa3sQu7tCJfBjx6VfMeGcXyS8FvgUNKpq2hGNaZ3q",
  "key14": "5n7WEqHv3oPDEi777sYqaHpFAfvM9V5cAHLtuoC5xUo53wmUR2UBgaLYJjoEcNRyzXpCbbhbahFNssxzBgjJTifu",
  "key15": "2JgMYYqrLKTbAxnikLUTLncYDei2rBRXmyTkpsjAR5axChJh98BFqWVSB6gvAMnnB3sKi7RzXPi1xN2mSa5oCeC4",
  "key16": "r46pvMaC1SgNZvaMxQ4o3cDSp8ws1vjWpkG2TSxcBke2YpfADAsZGMJymtsn8NUvAPMrz8wZQ4hA2euB234gNKQ",
  "key17": "5euzg9cPwwGMttSwh88TWNkqWymwZvAQfmLW7BbZ23iJchE8dqbFjrKbVfUTsPD6wPZoyYFEi8vXNdTF7hTBUqKQ",
  "key18": "3aS9VvvCDuMQ1dwsrVPByHM93ro4nHQrLpG8vK6xCgS8vxJWEp1FHPax6jzwPyTA3LWY4zm6m3znXDtM1L8c38V4",
  "key19": "J9p5756S2rLXcehgk1Ai2FAbx5hRK87VMRh4Ev1qTjCowEne5wqpBfJLrj6bdYhs3DZj6VodFHbNQGfpV3AnvdA",
  "key20": "4a3ReBs8XrTUfwNDwvoH2GLDaoYiU3ubmbTNa1N77gaZFKTseLcX9ftodstvxncKNbiHvWqnJzcLGzDb5AvQKLNh",
  "key21": "WrRhgC8e1Z563HK4RArRjGHRy3nFZT7s16x2poGrfmqMvSpsciCVuy4XH1hV4fELR9uvrjc6LeL3PRqTTAvLLGU",
  "key22": "4PHpu9oyaNAdTk3Lw23B8ioFudVVV9qBziggtVMaoEMD95skK22oqTVvirf6JfDppt1qJm36ruKbCTRY1AVMYXVH",
  "key23": "2VuK23ETCGnCAYMSttZLyz2yiggxKq4jUmhpcggqJVjC473nrVsQz5TsTGnWR4G6xS469wz8n8chvYFEqb4Zu5PK",
  "key24": "64mkkg61S9sLMvibVp7T5BE3Ucp63ffaQh8T8F1DiJ2dxGDPLcHZ6wCNu6h7hD3DZ4uDZw169bjuuZu5R38X6tUo",
  "key25": "c5A8ugf86cZ9r5EAgR5vvgNHEcwY3k3YKWN8nguLSvAB1NS3UiQjpoM4AULyiiXDsqe5MNSS8FdMX5WhBETf8J2",
  "key26": "2LbTnhBfSUek9w851QJxPcZWvFTupipuz8XXsgfAoQMprzc1wZ4MSV31RwUDwzJf8tu1jLr1ZV2pV31UFQnAWSH8",
  "key27": "4Mu4fa7q5dFZ8wJBdS6tzPc4T17AdoEWtEZa7TCVu1xydj6bm4su17eontQd8PrhosQFDD1CMzoV1fRxPdUSmPWg",
  "key28": "5u1BGtwCWgXmdmSnwwZobA6j6PTCsAjp8htBr5VJbhra3BbuFgGqFm95JuEri7aKQAgcKfytpVqzLJe5JZ8CgALM",
  "key29": "4KQB95oHYcmYuj6coNHuzUpkfuyxQJKsgKcpAjnkLWRYbQTfjVRbEZUhMTwJAGc8UuRgMKEWG7Dba1TjG7oxtYYs",
  "key30": "2WpVCBFcuFKYTKwrK5zdvC8E6rUxafcmqtWTJqf4hD7oqRKkzsWaXY5Bd191VEMCYA4TwmTBeWZBmWThxrCxDr2W",
  "key31": "5VWLsjhshfoJJ64PJzMSsp4ghjYK4bwnsP7aDLzMt6PBp2gQQnKCC6vhXmUL9CxKz56kp2wqYKuJUU1TeDBPB5Bt",
  "key32": "KFsA4hFa4bVgFRbuGdSYnKjThn913LwrfLB44zUbPY9yApQJ5BAG16x93r9pgFQjGvZkTxv6cNsbZh9yt1jAG5i",
  "key33": "2MJ27XwximP7u482nMNG5PfdFpXnWXUed6PJfE2jZGYJNBQJVwzieQ96DFuqNu2HRKeokNNtQpxVx5E1UAZQXaG8",
  "key34": "58AUWrZCwx5ZwfVKsUa7aijaEL74a91K6ruQSikVm65hLtEDEbwWf4Ze3yyc3DaoKsLWfnuWUXyMsgiEZtHVwBmJ",
  "key35": "34Ez5QgnoEL8QsvccCAcwMuaLzz4k54R9vfrs7DZpZBzmJ9do85ezHw4JWEgLyMfbVVQJLjycfPZrccvsRqasFhG",
  "key36": "2u8zaFwquBNZvJdZNetnEk3ojxpwCBKZCV8ULsmFzaCYDEcgqwr6X6krYrctkqjrC2UVzKEftxEe513NQwRgzFdF",
  "key37": "5GAiDWSqkaLqpwbeXdvjHTfhuwtqmtuDijfGHZt37UfdqL51AEKJ8kjCsR3dSK9fPWnrrANduz75wxhpbkUxoGPa",
  "key38": "52CTsKYhvFiAN74GJG1BGwfWZiE5Y75kvcLaaCqcTtNzTXmV4iuLVU3ywGE3vdrBieeTJKVbjP6tqpQDF6UwPPMq",
  "key39": "28yN5rardmVNKynVAnLkV387LEvdYjHgk65jFksnDeWfxZRRBKEVPPKyDUhrHSpZT8hMsTizpCMUG5g41VncsUPH",
  "key40": "ViYt3NL9g85YCfmtfxSGQ53rPJYLuVXDbeoDwKmpjmvsjoBsGCvTvAtSgsBZjxh46H75WEKNGgzixWyFxvMgoLc"
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
