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
    "3GBtNubnQbX6adqVamZBAZYyfDzUmFW46J1rpai1SDMyFdcsBujUkSgFERMLALGtTf2ujDBCJ2TzdKoe1i7xBPgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnmrCBx8ZvquVw1AFZYh7KwqsixhN76tDMh7jWkjRtWuuKepeKvLd7tJjfMZv7heT1iKK9MwgRv9th8RCzWez2U",
  "key1": "GjRRPZ6nGoAZPs1XNhfgbQFSGdV1CZ47oBUartfbwZ6njbZPgAWLSZp5yoW9uzom2pKj2GqvY41XvCtk8eBkQJi",
  "key2": "5VXA2jxKdmLTgLfc1MxSwMtq3pCooD5YaVaF9MB3KNHLwcUXX5c61rUQVvE4Uu3s6wikbUcgyBEKhCerbNmaarfE",
  "key3": "5hAeB9BYctLRmgpxpDuRn7j46VcHifsF273hc9K1bAJG9eNyKAy2LPb5SsUk6CcQ1Y54Bf949iuTHF4jEeESZVCe",
  "key4": "4wdBMcReGURcrhvgDJM7m39n2WTPdh1vGLY1PjwGDvyY2B5dMPWfEop2w19KJGyuyCXepBSHfZoQquKpybGBtk8R",
  "key5": "3Btg74nTo2wGsR1JMQSjA1YLwNWrVyKs9sngXZRGqW4UJvqpdZExBvrnhqK6FboCHkW4LHF5bcJMMuFjMrk53uxW",
  "key6": "2tuQAcMqw8bjnv97wTenmbNz5UzDDKpanjyH91ThoisH3UW9XmZATbEoxCs7Jb14uZH5venYLjYTdCidBxWbUT9v",
  "key7": "4wMh5cwruUdDJKfJhrDwjXBjTMKYNTcErvc4mzbM9wqLc2D264v33QdyVSd418DshcjkizTv1xSDJxr9KDv2ZAtL",
  "key8": "3uzt4KSpE3HgewwTrsoQqzTHtruuC49Tka9LNhBzcGQRsRfdWC8hM51mpkma1SDUpyWhG4ZAGmvY37NTzNoCkTLY",
  "key9": "5wzkuaKAqtsp27ZbGL73PUQXa7njC1pt49dvekeLJboHzz3DzFa5WunfgWHrWgZChGyJhN5WCoiCUfyqJqBo28n8",
  "key10": "4Jpm7Y2dWkWQet5JHNFU8YaZScNMCAnzZhhQxXgcKYWgzJQL2UZiEVwjWGWMZNELCVkLzE8zeGgXyzVXQmPRWMn9",
  "key11": "3sLYAFimYNQxgJCzpqbEV4epJXXwdV3gZB54sLofGqkwrnfgw92XLDMn7GsPYM3eUmYzMcCgw85bMg59QdcXCoP6",
  "key12": "4JtHjV5Sov48cFaoZpbpSyWyavMQvW8TXxSxk158ijJjVKJKbAyvG4beskxccSPa1nhXzkhCqR9cTVV5P2rerXaL",
  "key13": "6iYwWTQNfx3tHxb4pMkuEiCbcv9PQ79KBhPTcdcGidDchLDuQxZnLnTzsjibK9rXcaDE1kNUbsKGBBHQ1CiooZz",
  "key14": "4SjRYsWGHK2eh1qTR6bxQJPkhuLU2NQuLBkNXrox1tgbPh2x6fikfbfXsx4o6iwfT2vzzeCRyrgsEAZhVJaaXzAS",
  "key15": "4XS5DKjQxAybXTzaXU6J4C9E5KVvbVDRgq1bozdAvVZaqCu5TfgVgpP9k2JFg6BS1GUuvNhWuA9LXH4tiC4EjMA8",
  "key16": "3rSMoAVyAM6xLvcp8BmJ7F8nUtDrv4TwwKQE4NChWj5LSiNVHnHvVgTRBY9hKPUAz21mMwrCyzAEtAKGRpp7mBMo",
  "key17": "56WX6bq1zkj9pP6xQ6EBHrjpKZPVBuoU8Q9crWT6tSbMajPpJBWP8V53LYAfS1Az3ucRZ3XP1ko2nfT9CVPftnS5",
  "key18": "2itzFridK7YnxL3DANEYGuJHPxT9BcqjkYXwr3SJiNnHxQ1oud3pb8q9TgNhsrr7uyKZNHZk2bR8EGdr4QkDLWpP",
  "key19": "DW9kXWFzca27q9s2eiSCNJr7psRVyGHaTCx3hGWPLbipCJAtNkK85vC8YEf3BiciunzrPwfsLeqo5RDDoXSEEKa",
  "key20": "2g4pZYKHCTd4TD98xj4MdQGwVKvmTWasx4NACPzAWbSGW6TRkv8mAEbrupfhKkKvUg6A8cY4rtPmANpEoSyVCXM",
  "key21": "NawpGkzT5rNED1LCJEVx1HzhyULSBALLU4cNL5qVAvd5haQ8vzrYbRxLSuHi6khDAtYwPXGrJ23DNgnPNEqAuZ6",
  "key22": "2kBvVFcNBNTG36B4YfAzpZaMvZyNUreJuaufz8JCjaGCspdMroYmN66SyRTX1Z3UdJyqvHN9YnFJTDHPPQbPEmme",
  "key23": "2PdfvjHfBo2qx4WN5v1pXtivCqNZQqoXjMvC8h7awJrMuV48w3MNCvvRg2uEpkn6URMLDRnd45M73nc5E5dWHYjD",
  "key24": "M9qdBvARZaGxRkECxdJt6gSjKEiURVF35U219n6pmWKLzdPvmbpeNzAaK4dsjTWq5483RQBoNB2MUTQ5fCqfuiu",
  "key25": "ff6Z7CZ7pvPfpK4muopWQFcbzbP7xbbJ523q5BWXA7mQ3TQWPC4QRS78ZrerCZYBCemCRgVEDNkhkfKRAbw2r5P",
  "key26": "3mAa8fRfi41fYZ51x7tZdFccHMhyyWF33jx4yCvruD7Uax1TKD9Mzj3BUtboNbnaQA7vjubo1MdmWkP2SgRETRyu",
  "key27": "3gURAn7uUDhZACh91sdrk4M6KFuEDcQjrc3BkkEjn2wWAfudpmgTJdakZN432HvSw3mMjPzhwNZfN5NqHBrTwDgQ",
  "key28": "4wQtxdcbMXxYyBvcj1rifozvjfSmVBxzNAiQ92zibWTxfeQqjE41M8EzemeZLVQcBcB9ZwZWc62EpUgZD4qCkR1t",
  "key29": "55HGauDqUpDL5vQDp2yRtZjae1PTvc3HV6nYkMVs8dUi9zadMNaRFRjZzbmNczjq6AR4ihjKL24bm4n3zsQ69auJ",
  "key30": "3zf5qpi1HmK9iKSBeC3Y6Dsezpb11Jk5Tn1gdZbp8FJSpjx8hUDJweTMcJHnAkdUAGbhzq7fc5MJzjFHoSSaUBKc",
  "key31": "4r7fkqV5ws4CLBrbaP8TyHePNVpJd55aEBMhK95GCiQvfhXieGY7sj4AFnVM2v8kgZZoBw9DnE6iZrc2xxW5C6Ty",
  "key32": "2Yo2QH77WKdUrGDRrwn1GgESN7JLgxDpebarokZcxrUtNZBhQt2XE3HeH9jybTuSm5yEhcmEYWvEfuJbNVqqFMx3",
  "key33": "4xSUHiJqVxKqHc1g1TUdGv2nSoHZf5Qxf6SNmW2rdYCcqebQEBhGQ2sBBiiDUrukS9Yqi5a1YHFP8nhu7Xb74MKA",
  "key34": "3T5Y5qw3ivKswAsvaxTRADjqa7Rx7B6ANQea7oXLzTE7zyjqg1xH6Q2yfLF34mEfbbAN2ySjanD4KX6hAUfBkt9A"
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
