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
    "4ykjhgSWs5qwS8tJFTQDzyYBAE33USNtnVYAwk6HzD7Fff5dNenTX1XEZ9zL8StgXnQyQGvgiW8skQW7idGWcW45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQZWvx5SEWr3sAxC6asLMpswn3GDcasPzoQq1cW6Ft2LwXVpUxMv6BrX2Dd78U3UcfbdksFH8bnZf829fT8Tavv",
  "key1": "2LHtBaDPrPwEi8awG6yL4n7J4vYBFRZ92jMf8RgJLTsPVQQd96xuer21csYaFgW9xeGPHZNPF1CFg84iN5khjMWY",
  "key2": "3WKaqi5SekBa4SQHjQxLZ2gwGbfKxFGW6gyXuWjdRbJx6XjT3SKd678L4RE25HoKdfNriPjLEHN1xEjS3ow19zTX",
  "key3": "9khwRkZaGYPW1xV8nnWyfA5SvD6jm4MpJmFcWGoMNXGsWZxvrTqPr5p3yNmyTdbQDBLH869q7f9VJ6VrYJBU1Qm",
  "key4": "3uDju28CkMkjSqRayFVncDo9LzsxZwwxQZND3errUeWD6wn6MJfuGGoRHwur6mKXmaHB7eTQATjeqeYkHNKuzpQ",
  "key5": "5nM8v4vi1RY1PUTUnNS5rpoWSfPZpzrCtpa7P84DBvBYkeMXKBPQmbsGh9PFAmVri6EwWnoQA5kjupyPyyFcWsA4",
  "key6": "44BemhcQxRNSoTvhEePGVYqNcvsaokQzXnuyEdHyDy3rSyKRhjuexhwBAwt4BEtMiL7DhhLh5Xxkd5WehUBTDLpA",
  "key7": "tACEEqbvhw1SRZfwTaKyS98z2bFr885wNJGWagPwZhC7qm75ij4tr76kgv33zRLPX77nEJos3riMkfboF1YSowb",
  "key8": "4bkz8Lj48hRXPwbuV6v7uNeWAuHAW4Hqqf6Vis6QY3zfswMpod4JJWt1u2M4vqrAwL1b6Hm4WAR4zqAoMsBLxcjo",
  "key9": "nVXcmuwM4PeGfDz9pLULhexSHroQ1vLXGbGrjvh4isHqUPmSr5CSZobdBPRxN2fpBsMKR3ebKuzv2LVK5UHgh2R",
  "key10": "4oiWNUHg6iRQz1mnQHybA9vBVu4shoZpxxAvie1mVjiY52AgsvYWCkCHfm1hym28PYSVjFjVKTtTVHdoLQR4jrAV",
  "key11": "HXfiUAhKFnwt6UVNThdmPvpmdjYPZCjsjdc4uPpHgmwsG3A6BBXnnm34cNm2bbh25YzzVEaBwZRSRkxyPPURB4M",
  "key12": "3631uhPTFWWpJtFJKJcECBXCiu7Z8wCtePfdRvUtkbbW81CVmk9bieNiutTCWMRx6hufZRv4aNdSPFSDEfBEWoYe",
  "key13": "5TwanDgprBbJ3ed5yiPMt32LDMxXtxyZJmZitVQv1M9JRCikK4ftH1jwYDoavm8EADLa5Dm1bHrkvzyBiPjVuny1",
  "key14": "2R4feg3ShpXVEA6KQ9XmnCRX7hwKfQm6jRjPz9wsfDDyVz7Yiuof3r1RVXTTXmQt7Q9FTDLeSVtJhVrmcViLvGmg",
  "key15": "2Tq1HNXyqEKhTCNVeTEX38BsHoUpY56fvBzjE5QAXsGr32VpfcknU2BW3oZ4dVBSJ875EVpqwPm1RZYfeRSobzoS",
  "key16": "HwsvDwF4gMG9qcCdxvfWrT1GfPZnCr7EsMRFEjcKLxzKYBtBRsVRUWjtTzNfUjg2kQrX5uifTnkpeqDhCa3UXLW",
  "key17": "4Y6ByugsTw3g9WteR6SZQyqhfLSZ9qsyCTjHi6TmXyAyUYYXHXbrbQg51cigGbSGbLUubAtkYX6grKhFHb2pBsaC",
  "key18": "4KyLEeE3T2z36faTaQ3mxtkZmFK7RYSi2UhUkD5sR8pVUwHVum3EV79Bj5HTf6ak8wWJeJMWN167V7u4JCmZFPeD",
  "key19": "2ZX1TJwLnGsRWYEifbPqVzLogHgsV4jhBgSpW81HiqD7xBBBQ1BHcb8dgHbLdnYHA5w6ignnDeygRbjiH4y3ghDT",
  "key20": "48Xh8REnEiCauPYAScbRZhYReZnXJBYGLA9hLAExGGEy8mBKT1NWDF8VCP64nEMUbV3TG8pCGgfaBD5d1wWDpwZb",
  "key21": "2CGkdNwQghf96XszLkaL5RMLXaFWtvptjiRzffgsvmrqaiAV1ufryeFcLqnFpjtoXgK8yyHFX8bQWQ3KsJvzq12Z",
  "key22": "58waBE7qcvAujZVKAdySVjmeJrqzxH9f18pukyVsiVk8JHUk9Q5DPJGDzXsQUUDGBWAT7msy7fRa5KB3hrvpjeW3",
  "key23": "5SgviQUeR23Gm8x5HSmJQynofs6UDcNTSRk3Bd7fAF8WWdfSfm8sNKuJx6eRUqAzxzyE2aqJqSBnPBCLuEK9qihs",
  "key24": "3QRmVQqYT9SiLcGHi7LsJJskWYHXpgvj7YEUvfXcuMJwPAAvfa8ctrAKfmy1RjqKdEPicFjNodM8Hmv5SS9yejgt"
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
