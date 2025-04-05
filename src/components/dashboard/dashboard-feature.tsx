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
    "z8uMKZQAd3QBH53aACyw7FBekLS6JZtD8TEAD64NR7gtE6VaDRzsw7oN2n2W9pzDo5Qsku4HBnofmtZGiCnn3Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aq8CYpqSTvcvfEbKJ1sPtftuZSfP9SBbkr6CZtETgDU1M1CrWXtFTMxz5b9t6DajHvJdKuTKceRabScNJ3625uw",
  "key1": "2kMwCgfLPuVTTnH4fFi2xzgi9CuKf414hAQAHz6UMfwH3hPXq86tuVJNa9BEoJBHdGeM5ufFvZCSNvGH1rNwekao",
  "key2": "2gtzvXHctrXtpk4ewi3SqMWJ6EAXp1npwEcYpa6Vv3Wsdb9kdauVFqfdwTeTcW1HVGLL4DCB4QBX1HxjHUde9JWV",
  "key3": "2jFDXiExLgbxQsWMVuPd8Ydr1pX8UFDYYHudoYDaMwXTu11sEECDxgwJBYEiT1ngnEWrzzovnM4bTRnY3jUTdAnT",
  "key4": "5FnLn3pPMQnJm6UGWTgVGGEncDqXFY55fCTmqmkzTKutWBsRZ1ks39uVLNgeXWscdSqiLq8YRgDZgB8GCJWt9xty",
  "key5": "47A4e97dAqbUYLqTvLYDQmw2skKTDGTCZ33MpbjrCFgCTKAv4s4Qo3XndnNBr2N7fSK9ppuF8MP1Bje293Jf4ovx",
  "key6": "puEFuBG1g75znuC3iP3ogBK9Etn4sZ8cYMFQBv8Ehawd7Fik71AEpLhve6A7iC8NHH9zpWtYYKjysuLtwv1zmEQ",
  "key7": "4VNwhKqeEnsJacyPTbKUzKidnT97o3WVy3hvCQU9qNH66XsE4Rq5KziFqwGzLkkmxAjosMDyjmdpVv27ZGspj6Lz",
  "key8": "2Mv24SNNyCh6fp1iCLUP7P3ee6SSL9DGq2xs7rork5J1gxfVka2eXAKXo7MZwDFpe227GjCmYTdF9wATnJcdiv5",
  "key9": "3bzkq1v7BiDmALj5NRJ6xAsAyChLpDQCsTgbBmWeUkoXeMCx6C9LquomMQF598YQQyYQYT5ZiLKpfY9McxyxEHDG",
  "key10": "3M287Mka98niFosmgHZrCophv1jydUk19aTqxWiwhAkKiVh1JDSScVmAoKL9AH4jKrPZTBprJtt47ANqUija9Ce2",
  "key11": "5zqh7z8sL5vrFp2beawK8CA1T3Lc8ohA9nDoLhprES2p5tq9U16qkn9UAxhqrxezjkWCwaGhpt88U8TiN6b39GaD",
  "key12": "4QfFHdyzQappqyGH1hJ3TwvkEJuTJSDExeWqjZKhbJcoyMF6mzidRLEGhRKnwbo6YeTLUucUXNzDGR4XsuXwRyKi",
  "key13": "2qh1yVwPzMpinjjFR6M2USE7AEc6wV6FHDVW6gvLVD3ZR6TeFfB3u23VNm8cR7pR9zUQ5ttTzVNJwZz45MacpgCV",
  "key14": "4nDuRPDAUYtUFCU9yL43kwzKpVBxh8HdsNr9uq2Lb7xjidY1d6nzKgTGbQwvGk4gx1woXW3kpaeiRGXakzz76wqQ",
  "key15": "4121CHYE3qp7HFugAte4x6STSwGA3exEAMe8n2JetSqNifd6sZ4TvGDFY37rmk4oK1saJUXixFDT4WpWJKD61qmy",
  "key16": "2NqfgwBcNW4xbmb774n3EH4sB28Jj8Y5uV4hAb4ZBm8HTnWfMjp8SS7Ho83YgsDvkXNDSHQw46pdTVM1Me4r1Pgt",
  "key17": "2SNi3pyUMGpkPstjq2LGAdaTuU8KAoeec5abifvFSisthYF6QiJetGbnA4ofv4aMQwKuuJBw3tmrWmMx1G18JrgY",
  "key18": "3MH6MX7C1twEDHCiP9wUiXVYMSH4JcEFkPVnmpXDhyYEVd2u7cxzn48HU71WL8TJysCqwpYNiwXH7PJkxuq5F6B4",
  "key19": "wSf7zvJfHK7Y2PLMC2QMW5qpjje5C91XSFetYFjzbRYt1ZyZc813AFANKCcyARvbymj5ZitiYD8danpzkAK7Uc6",
  "key20": "3XniDQg3ivkdStp4ocmjZ647EnPvAu8Jz31hewdsEL4TeDG9MPTWfUZLgfm3BCM7QYRtzXtaPCgHpAjkMS1dM9tk",
  "key21": "3ta2XmAr5qZMG4hKWGTaRQVmciMg7tfBWQZC4qmgrQF5sLWFYXNaghbog3GkBoef6vwMaZpgn9JZgMD79BJ3jb7h",
  "key22": "264YsajQhFeT8rwvMjKzWPgxVmZhhMhKeLugSrEZBsAznH8WTLNKLFrhXuXnXYYdWyoswcx1cgfwwFWAeBu7bZZX",
  "key23": "4Fe1rURLjLWzaZcc4ecxxgfrDNzRJYmCZfGZx62rHX4gqbeCNT5HxVpQDPhxdzugm3pBDJYLDGTYNPPTmn1swDCJ",
  "key24": "5giuTwaYMhMkZDrVBPyZjH8gendcXM8N42Y9QZaV1QpRpuZjWwy7S9xn39AsSgUV2QQwMsPQNtqbZdyyayHd1tet",
  "key25": "5TL4oWBtXt7DVFC1KUeACFBeM7ub41U2K7VZtt5ZwyqMLBbFigRMUbkEdFdT8qPCYzM12o5BMxhcWAutpsK57YYF",
  "key26": "5Jt78HZBbDS294jJG3WxvrXjMSiA4r2TfBVDp1fmEw5a9q6oE6CMaHfEJhuL5JDP5uvhwzDsZcP8k772iartyGUB"
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
