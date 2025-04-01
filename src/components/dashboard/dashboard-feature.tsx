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
    "H7gBMr4zEnL7zx73ap2m2BYeVzLZUadzYJaxmZWd3sSZLxTVmnnVnrWv57KVFMdy2z5yJQsLhTtjGwjH46HG434"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hLJdQPUicNdHmzix8EoBMxZNng6ejd2gv6okpTWaXs2BPXt4jRJ2YW2Qrzkt3tXDBp1CSVMXth1ovZ2jDRGa55Z",
  "key1": "3AWLU86zLXyN96PJYywMQE2Y35b9p56NYiJaEQpmcrkFzAZKz67FD81VGZE6RrFQeBUGG9XnL4XxtPNsVt5ZfLGq",
  "key2": "5v4dYRbEUMVN5D6jCdunw7eC7LF2GZ7R6pLHpn8re2RGLh2M2WCyjnxfjHfNwBYvK2Hp6tkKMQWqGppHN8mCdFMH",
  "key3": "56M2tvTdD3nT8KFT5qRE1hqLar6d4ZXkdAVQErpGAD1oi7EWRmkKVRWAJRqmTxtTrovk3iagV4giDqnb6X1iD1NG",
  "key4": "4Qj7QmkfuYc9CcSJ7xbTAMPiMhyfMCh67kvaR3AoZVaoyXDD7EUBgAnmUXvr9oGHjhusXo1cJ3h6yDH2agb6TmUz",
  "key5": "3HkaE7hYy85oufomqnzusS2Hd7kLPnQ7bjoPVFHSJdhHKhCNg1g2RjXT5xB8g6Hs6gLKieFkx4u9FxDWAy8MFKXZ",
  "key6": "654sQBVTUEecfVSZho5JxmEsSxpMYfTGrRECftDEJP5H1eEGVsfz3B3a6RTYm6sUE4zgEkberjQnaEV2AL5Byw9s",
  "key7": "43MRt2KeML38FTisbxZ6RsjG42NjraQMB2dYgdiE1L1RL5qUJosei5BGAHdrwhsPPjq22Rct2fwP47s6RZPqamPA",
  "key8": "5xCQmAWHE1xLFpCXsE6XxtNMpajMoyAjwDyaxfuymfCsVbvu4cU2MW6mzESPUZdZaBSZRqarnWjNgP5NYuv7SVuE",
  "key9": "4WsBUpAUsaHF5e7iBbwaLfsTbxkywHF68ojFA6BbKeeCRpgEbzXuKeURAeDqcao67zuTsa3MieayzjgeQiYgvPqv",
  "key10": "SEfJbmQTDf35ZyfhExMLbLusWeWws3WognCv17fBfWURHskdp9JmdVoxJrR14DNyNoYzt6BQU9eL1hM9wgyN2JQ",
  "key11": "BS58bSkxzrAVY52CbauaykTqaQr2zqiFZW91CCa2pTXttmuJaoABFpGaynFYJfPSFTLwHZmThBScmpkHp8wMvuC",
  "key12": "YrvDnuYNhLMsbdxogzb7Bt4FQP44gi7v69Rp4igneN8LdcwB5F28E8PX8M4AJfa5ZMyHvyhVo6hVZZ1uxQoptB4",
  "key13": "4nZBt2NZpWZdovXXmYJ47Ac9PwxQYeoKkWvsR2hZmTVF3uy2d45o4e3xCnu7cEUF46ubnmcD2sLLLL21i2DcQonp",
  "key14": "3jEk4dds2S6hc9aXaijciDYxbt6By5kUqgFszXqzvBFcm7YHgi7RLD5N2UxCsL9AF7EKnLd5Q6UVP9tj1yEjc3xJ",
  "key15": "4P8BXAfDvk5SQqwzsVMPqz6VEHeZZM2t2x9tiiuGctK2KkeLjTCMRCiGimL31r3aJqvsiBjqpyUTZpf4etcUxsY5",
  "key16": "5hva2hePxHbDUnBA1mv8U3qhCV4b9RpxJryaRj73qwm8PfJ3JhMF5WrmBPyfMFKHdxZguMGPtDdzrriGejcEDTVG",
  "key17": "4Wnt4MDii9W2qys1yvnSkn9ZgV3SAyypJTz3TozcgnHdXCL2c52WnPZcUtqWnuBGtX1YwwBz4TrM6JVLywpDd8wB",
  "key18": "5mFuvKY6Gn4MWPnWcWSVW5Qzzz3exvKrXN3wzGeuA5BAjs9gLCQe4y72kkieeRJmsRtGiRauUU1ANounV2rbk1Ue",
  "key19": "3jV6U1XmmQZSFsxjjhrAhoKJpVyGFm1c6Eyxe5fTGw5Zf9nzDv5aENybfP6ouKcjBD5AtRxWKdr2breAGnJPmaPA",
  "key20": "oDziSDD3bRSY36KvxcESYNY8GyshzGnP6wvKhuuKb5JxMjgFvVVyHuRkrWzGYMRFKQYeZ38fwTvPBkJuiaxZuvx",
  "key21": "hnFxLeaJkgZvWHE3wNNBayTpcFgxdq762q98HRZ86q3xKEEPfxh5pEwqd5A6QUZC99jasbDVX8SnsEzQhaHhMRp",
  "key22": "5MEajXJQRYMpT9CSsm8pkuNMXVhWVjz941jhT1a3AdwzbV67ZKarVrmFA9AK5Tqp75cxG9dCpvCU1iHuFb12jNzF",
  "key23": "4tdcX8RDcSxwFX9TZwucvQZp7huZBDbEfBbc2cqcouesS22PaZe5fDQDFL4nN1tGpAhPBxHuxe6tsDJwrNTBToQA",
  "key24": "34AYtPiRQwYMfuXEoY4mL2u8FiYurxJ9Q2pwcagaggjes3ukD4K7jraZMPkBwtkeumGVrVtXLQF8f2P9c6YQf6z9",
  "key25": "47HnqPHK2BJnHPQUq53eEgqsDQaBTeQwpFsm4fonDqaptbrxP8Z8UE14ed62nau85BBBvu7o8i8w63qaHmRrCzce",
  "key26": "3xFdXzAbg2P6WUJ4B9NgfGKXo71rpFZeCgX6Px2ap1unHwsK4Xu3wBuUYqQH5RPtRHzFCDrWv7FyxmqzyTNsDBX2",
  "key27": "QBhRX7JKvF6CxJsyU5PQVEMFBEoxmpitLrnqZavLUURDtjfYPWxF9r6do4SU7XrZqCJRvJwRA5R5t9fTXGEK1n6",
  "key28": "5fQNZeyoYP7ss6Ujpo46swXqkmrSdeEiSaLTsxSgt7nA6WcmNR5j4x29QATtfNBaTfW5BUBk1twtgWVwz9hsAFF1"
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
