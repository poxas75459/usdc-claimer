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
    "4fjmiHqcEHF7HNPrTr4wKMXDuf7EPBiKYi2Kk5bW66jHDHpVAQFNK2xMArDN4cKC2GzhYQBHkDzMjpHRZxiu8x6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29y78RLcpLk7Mok9wEXMnkvVBo2pjfmbfwLpTNpe8frM8Dpv1EYwgu8jTWLX7oEy2DnUfE883xJL6NTEromNuZok",
  "key1": "2pUvj2cnJPxHkLqVJTfq7wK1igMmupaK4on7vie5cAAonkaHuKCkm71b79sjWz6nZ7Xo73GzgtvYgHzKRLEDAQoy",
  "key2": "4EetEwYcTduzFfsSuMJQ3mhMwpTANE9CL9iwYMfR8AeXY18LJ3rUnvoUyhAkGfGxFYvyEaejjfDJ5Kq8ffaKMTXM",
  "key3": "32PPG1seTvk1bBPzzahhQvQ5isoSonQtdciVgKwRFXKeMSBihx2pvfuQ6fgSCwuA2JVwsSzFPQ3v3igjZ7aZXJNx",
  "key4": "3MLmXAuh6gw2m1HsNnRQVr4AZ9hEXpBzvrHaccimfyrzmv2VpCw7MBiLcEXyqVPj7X3SXnXhS7Grdftku5bXgfY3",
  "key5": "5apTZRfTKb5V2nQVygwiCuXbshnExAgDVqTJXM4BR7zvqM3aVF6ZCU3CBF4NMVaioLqJYj1DYmogHDUSHmcgsB7r",
  "key6": "PjJL3GtpWYMy4AcoTbLLdNwMCTSa8BxKLQEGPzz3QimNruxJpjBLWtQs1rLeSnysW5RPRFZ3TeSyucLwc3srPv1",
  "key7": "T3i2f177dgp9ZA3EtuTiryMghLDkvhuL2BVQZqqYHnhbcC7eP5SAJyLfVC3mx3jwUVKQYmTRKvpMptujTeMJLth",
  "key8": "51G37szDnbz7E5Upo3xW77a8MuWZx93ngeCLSBg53GkvrLoMnpDJpvmpkeR98zGZR6bjezYs3vbc2cXJjvj9G3Ye",
  "key9": "3SahQZTvk3kZBh2Cpwnsq5kWCKhcvk5VJJT1nDN5oBPAKM7sn9ApZTPHnH54ueGF9MGYgips9fgzi58UCrsYSUi1",
  "key10": "d7aYC8DQ3dnbomRutRaQBh5QZdErL596zuHKD5tpqdoKKW9usXWxgib3VeZgPkFL2wAoybGEziqfVoWTg23rowi",
  "key11": "2Zf74SVnS9jbd4mT8NiEsy7DmiMtyYnPMJ5H79tmC6BSgKbLyWa9VZqUoREMTqoUqth2KRVPhDwhajhWiSNkpw8y",
  "key12": "m3GLW7xQxNUbhfNqL27yRxtS9pYHDmCrcvhTjV3ffU1Azp6EcLxx18fh3ps5wk2NHHeEFR81BJLRH1LeFei3Guw",
  "key13": "52UDM1GqudBGTzVYEZEHXEYVYA9cgCaAUZnEFN6DK4atBkoQvu8QbYQ6q1M5sdL1n7iU3KYz4rXRC4xVCRcxc2tS",
  "key14": "5k36Wd8xTwUJacJSgCcvJALV97FJgY45VeyC39nwmrLfhKSQpH2tDBhSroLoWBUUHxgsuwhGMuraBxyMVtHisnGq",
  "key15": "462BRgxaiQx6i3ya8SgyeGZjUJaZT4k5RjuWuyqfS2gxm5QQQWbWZ6e3AJEoxrYtzrqyXKgsNw3w5npfPJFoPDQY",
  "key16": "3ZasKivoYQakHsoakRsnCJc1XrZhifhELcSQfg2xBx7haKeV6YrK1PpLBBASzDK8cxmbzKZMt33zTYQLYTsFrKo",
  "key17": "KoxfmgQXkheNUn45mYg5SiY5sBMAmRkkqCLBaFHJCFfrHd6chgVMWrqQS7Kg6nrEJ4TGL4YU77fxbg5aax6xZWP",
  "key18": "4vkQWEYQNo3nywveX7H1gBVAgFD4ZuGuWUQ2mCzGM27pLDyErs4kqMRsPktSDT8FKRQrhRgHLgRofvWr4jH2F9Dx",
  "key19": "4K7tcovZqYHXrZWZwSfjkUfTR2ZQvwFdmXkuDsB8oDHZEwnsKsWK5pJ2cQV3KWVY3vTxnMUKJaXKPXwdndGgNukW",
  "key20": "27hbTQu3uU1MNkeGD9vbqEYyQ4fy8h6KAxm6yvqJmdkKvUYkRsGetzYsLTbe6TdyfxEs16y8vGx1fC7gGoUMgGiA",
  "key21": "36LL3kZhUVBZkmkAqp6kA5cxt635UPmKfCnDu82THXo2upYXzXuY88QQ1dnJCrFcZxFGYCebMQwq8qsdmQqPCENH",
  "key22": "i2RLfTGpVBCgFufQXwpQ6Xp2rWnGXVHH5J2tZeQFHtQKiMtbXHQ2FL8RERyn1v2fW8u9h9f1fuhsu57oiZRYh5i",
  "key23": "5bZy6Kj8EQWDMZEwbih8nW4NQrmUx3RPkrsFbEGcztbShEHX5H17HeVHfkfYRSZXwVXigMymkRzWrzkVXof7QufK",
  "key24": "2gyiXU5YmKof9APy57HTsFVxdnQXN1KF9cq8jqH4oKD359qYd9cqeQKWUDhTt2YtF8eLYK2aJJwPBNe7e1Vjzahk",
  "key25": "35kizkW82JZyEL8zzhEGREyBPLjRJa73XXAPjgh42PPBk7LXswFxRttWD7uXaAtagw9Eyx44gBRwxyy4xMghbAsv",
  "key26": "dFPmHLbAepcx5ETBwzFbMCoqNPHbAKeyJ3MTxbPTJDDM8CJRcfWapj9PnYmSN9N4GzDY9UgwKMwCRYC2ahUHcQ1",
  "key27": "3q8pSBbsyL5wMWK5tJByt88EXWT4eepVE59yg4tiLCrBj4SwcmsZKUXsvSRWJszF1hHNYzADy2PzeE6BW6jx4B3e",
  "key28": "4x8U15ExTa3hDFCngW945KFDjmXEwY5AXHNxotqdGGLSfRg3RwVEsmA41SCJg8Gh7XY8KHEn3jHpS3YX6fxNdRsg"
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
