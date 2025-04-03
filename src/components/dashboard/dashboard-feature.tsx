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
    "5VXEZTttB3sNmR5XbqfFDVzj4xh8zxAJvkNeTmFhSfaoxEkZ6zjNGbwACY6PW7FJgwSsdX1WEf9LtJ1xHkDRgvqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3boSjWCmNvVesjA5wwMr355GZBLwcPAzvsjKrQkakNBs9N5QGQdGzoZvRqbcK3uqpuYgHA7dEfv8bLsiAEi8sC",
  "key1": "4qErgMEnu323ENhfgCWouhQF2aqe5zUwuwv8RXZRXGNYQH5GYoyRqvYCQoDZKBgqJjbDUBGKtDjR1F46oXk1TvDE",
  "key2": "TYLjA5UE3yN6T3wayTLoZtZaUs9ku7zWqdWGBqU1n7Haa24u7aXG8qa4nt2NaSST7qXyoCp8ZhtSCfzV7JHac6f",
  "key3": "2ooE2GBauZdCfYZnLp4VHw6BTpTCCKnkULi7nXiHmacKFjhttgD6jWiu9PC7pkbueGwuVD6WUWETrzxJ7DrH4epK",
  "key4": "4yYtdPqryKPSzSEtCNzpBYMmWaSg5UUncyved9Bod3u9KQ3nSkiuNXy7yYdSZU77udpgredTtqfwySQ1kGat8mGt",
  "key5": "4TPCvT9MLgrZpycVkYEvB1nPJDWZcH6sVSHhnk6XmeZxwU8xAKmt9SwJymRHPY45xi26HsLjGRS2WAKX9rwkcjwS",
  "key6": "4Gy9vYXS2MG6jzuK5SVgDLJt32oTv464SLMUxmWJ53DhYQNrDLGoNjhVivNooahe9kge2L7bqaANhgmQbJ3FTaY2",
  "key7": "39zx2fMQRbojxHwMcHCFmi8qYx2nGnEDjF1cjHuwzjYTZz24mcxQ6YsvM65h7GK3BANz8PX2Nowswg54UDT6dwaA",
  "key8": "95JJmpRPgVEnSiRugWXtFVGBxP9h7fKLjybS3B6EvWan3a9xR7na7PBFRVygAMP2VxvfUGo2hGDPXrEhbDKRjv5",
  "key9": "5n5uSGWmf1eyv5bPGNm2wQFBJJodJDS7JX9SWUN6AMKFUEswa2RJDtdBkmZMTW5soQCkudgNF4A5i5gpJKTs5wak",
  "key10": "5VrcAUL5vnh2o7oL9Fc5oPMkHjf3JHLHwE7LioSHwW7hbM95GVGbv4qKDDXW67RZuKYn9FzuCY7kDiguGrfa8hjX",
  "key11": "2hFziD6AYFw2ufSQfTP5a9g2esFiiuhb389BtaYAVC3p47kE9HtJpiY5iRNEobNBQfAALqZDnZwY4RZQAMkcZV3X",
  "key12": "FvDQzsKJ3SvjxuQLnorTn11FHGX3w4fEzZFT1SjmR6u3ZhkcGoW7Z64d4nXQg7RbzKxqsYQDrPA5TtSap8YZcsg",
  "key13": "3fXjbjuDE9cXNM7CnSvm8hu82MaA3MfNKxSdASAMWitXezpixHz39FoaD57VX1KkTSj4FBDnbSFU2MQD4sz1d2aQ",
  "key14": "7G3EvcATZpTS8RhX6LxJ9yC38nZWJjk7BvRAXSmxkoKEyY3jZt2sfu5MndRZF8PLJLEn97zZqeBYkdJMV65Zh59",
  "key15": "srTFZivUGU8FxCmfb7xjw55D3akwNeuCVKYvyHRKX3bkSK1CBZQwEAqSm6Acibz2btTjfguKTmyoDTVh5pf2Tdc",
  "key16": "2VzRveaWxa888j81MQBQaCTsUGNud9Vm3xuTwKGoHy11LYt7HMP5CVscnLEvCWhKmzCBDDqAWcFkK2AxTAiYukJG",
  "key17": "4pi5ztReic3eY5jV8L9nvxXAhVEGsnwg9wNqsNTzw66ZFemERNdWSWQUkvRBGAT6urnRwoTJuBuz2jop4tAe84Va",
  "key18": "35zkYSTMfvYwprPt5mDec6MvNF4L9u7XRiuJn9yvFSvLoEHsGUr6iMXB2EBwLFpCQV3eYQPat8zAsLbffm7FtEq9",
  "key19": "39JxHMr9d4MK8GcXaNDMubcktTTk9tqTUK3bfYnwdrhLN5TNUyRWM5Umr61C1uVLGUksokLiJRjjczBzKgJBDc6i",
  "key20": "4mbNrSjPiT44Fxwm6iLcSyoAYAUApijDU1Pd9FCakHkyiTKKSBdoX8VXEeHVEmdYS44NXuZa4PGu6mYChDHeYeJY",
  "key21": "3gsAqV2Wzo25sacMCiAZ2SYYFZG44kVE1Lycn2Fx5UVPFFWRfi9T7sw31wSjEuJ4CTEjrDnMU8HYQKHGsemEvjDT",
  "key22": "4d7qLPd4Gzn7JGDNmE3Wwfe75mgwH18TfZjeMCBUDuJDrv6Hb682wHdhFbozhugukthdTLW9ZcwyKT5i3WeBr2bF",
  "key23": "3Rffc1WKGe63qNw7LvRVSTDx3EhSUUQYcNJB1Pbrx9wWvoJqTnMMTBXWCkyZt69DBPRWDLH7fZjbNQS9hL7UEuX4",
  "key24": "5ReaowoLbfupNom75Exvzmp1U4sqvJmZBLuDVdbxrj7RE1i6uUUt1KXp8T7GCca5g1oM6mnFw2evQfqnxPF6bb7r",
  "key25": "qNoxYTEJXbKSmkeBsaQhVeaqr6axGytP1hHxLSdu8iAsPqzxKDkZN33doVGxEtxcJZGcfkEkcR4eEMXAjKb2xJs"
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
