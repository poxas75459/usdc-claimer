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
    "5ufgktHzQv1vLshimEHe132fV8YqPN3saLrDFXdVFnUSnJZ6tsPSm91sBeQahCpDJ86ZxHKMTz457ppMy1Ad724M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UyR41HuM6mfdPkko1ELTPLRRqduToQV3ZQhrQS9HvymaGipGiXNFhCDzTQ5g4rrrKABZkF2UCHseHrwXEbaLoaV",
  "key1": "55kmwVJNhohV22z864HWkUNZz8HV9qVaA4XGB2voWWwybJfG3WKTXs4DrqnsJ7arXk3ejDvcunw4DB2CxQHWcsrt",
  "key2": "2bSLHCiZtvxGMijNcPEaxkcWw9h94VvwXG2weTzogdWWBwmvoRvTTKhnrJe7dxgyotfBmqnVU3fpRpMtZFdTxRrW",
  "key3": "2Pv42bAZELahD4iJituNow36a3WDZPfzHv3Efr76HZqFgPt3ASueKAnmDDTLBxmBah6eQunrkX9vrMMDXgzDAYW4",
  "key4": "2R54e8cA3nSSunWkKB4FeeHMJQf8rQDQiYPwwqGikFz6EB3xVFypZEUKdxdViw8pwKdt6eG8EjeeCBQg8g185gaT",
  "key5": "59LzScZFd2a1t6pp3941giEJ3bA8G5emEQtHL6dfEL2dxd3CjHxMkNaX9EP2QZdmqPZNQQ76K3bBoaAwfzr6xiXr",
  "key6": "65pnVEAg8KMfuNQztfpnFViuae7Nimju5YJPZMm6K5LTMgw5RnP1dCzzDecwvUtYFKoCgyvEcPGiESM3198xoaGM",
  "key7": "4hV6uokpmXun5vB7JzdAavF483MFR2zuLqCt3fqu58wnKQnB8NMyYCgmwsfecPYiCJeC6dAD5VUBZWewsjGjHJxh",
  "key8": "4cEF9LMuLue7MUL8SPEqe98MedXxgkSpFBnPg4rQWV6MJE76fgbLtPX22MGKwkcjTsBrwJpKARN8xQdxoxPoatk",
  "key9": "5jfWoBzPqvJK4bFEuhth5vY5dkk5uMMrdJ7Gq9MXxHqRYfHFakaFiK3SZnPeQWmqAd53snaKpdR9qMdzC3fUrzDh",
  "key10": "QeC8Z1Jdj9nNFavYnyHzLrabz64kvkFAcnYukCT7F9KQAtBAykTxDTwkJ78ty62xbZtQTos6q3K1Jxdk2FuR3Q7",
  "key11": "2gXAVekmGNibVP9mpFRK1kHN33T4JRMNiAizeefLEvz92sXw1HWpRcL7VEnBCqYvCXhSYXauhcHhqdxb7EvzK4tz",
  "key12": "4yZmyVkyEsRMdPFGCTXab6UUkW1HTze4kdwags2TPF8FMVJhdsuLDFVbXKCxkGFrVkvEBGWmTBuKzfs4dAC9Eyzi",
  "key13": "2yGN2SPgq3Zs7AzzCgi1xB8cY6fVMzvJHEc1AYjNaybimyVK3e9yKQMmZ3Vo1z9qoaqVNtv1xUYeZNn5PSbbt6qk",
  "key14": "3Ndv1HJiE6XkSBnuB28kPQ4mksMFS8spWm16dYxHa53MgWSRDdmGpptUWTdqsKbiYEMAQ2bxiMeeEyqfSsshVCmE",
  "key15": "4yRtGsBhDWztv3tKeJUKHQh4ryCiTh5gXv8Ju94zhVEPFqTSD5vRVX3UnhftF6ns7BKJrhQiKVacRgnTsd4mCoVt",
  "key16": "3hD5uMqiPam53zhRN9ch1zgcoEKHGKitYDP3V49eQzr6FUhmX2zcw3TG7UGVjoXkz1FJ57xWMf93HExZ5zfGKuSq",
  "key17": "5PqTqBS7fzUwn7br2xETmmykMWRP29n2PL17AwtFHZ16GfrX8VgKBFKJYHUVzeUw82eF6GC938rBEHkjX2iyMtL8",
  "key18": "5PLS8UpfirEBRw17nC76FVrdpwZ2HLTvNRMtDJgxgg42SLSGYA4mUXV85fxvrHfQMXMHHdrw39Bq8p3Pg786tz1a",
  "key19": "2KLFL4cHYHxzRbBqE8J54R6K9txe5rZ1bTqcwBtvLNMww7FVTyjuXxbppKtZmXr362sjhB9TUmeAP5dEnDG43ATj",
  "key20": "2bzdgCDEPhH7uUYFaUNU4p5K75JDZbHWJ7FQenCERQPxVK1SP4RcxW2hY5GRCKnuH4bkFRdeWhrKHDBZquKSn6Vn",
  "key21": "2N5kuXtBrJ4BPaPZCgqYN2piFMNUyzvyXvbsTfTbVgWdHy45MfnxWLTEx8LcYxnDohfQpg5GZ5gbzeycJNonGQXY",
  "key22": "2AnQcguMnpr3SQPKit6MuQQ1pS18MKgDBWFfi9zT8NAspi681BGrJAMcXsxtEaYo9p74cVkQYoQzmmMK51bCy4vM",
  "key23": "4xf1N16wZNxd3E6YueAgDNhNZUMyaiR286iGXAGcnPRyVREksgX2LjMuy51jayWGapD4V3AWUtgNfZJQRpfdeL3P",
  "key24": "59yMVxbj2xTkGfSsQmECkgnfrHF3QbmmfDdxPvzryUVEjX4fRXK8oaybWy46SWb3i8v4Mp5Fuq25cgvGrQ8L4dwQ",
  "key25": "5iGMti4zmsrBLKCas9cxrFtiH4fz554L1QbP2SqsTnNRnn77i2AB5aPgkcB5gtF8fm6vz1UcWDQMyfEeo5vj5h9",
  "key26": "2u1aBHPtHmqEey2WiH9W4stVrtBoCrrB3pi8kTZgdxy9wDEB2QKYjbU8LvhiLMuSmUKbKD6wMDG129wGe5F9BM92",
  "key27": "4xxD847bGw5puz3b2qCtjDXcWNMnimJGcPKuvKoB4kMeq2b3JQXwJPtSzDTXn8Lnx1SDtNhg6VHHxr6GXzNkyMjN",
  "key28": "QVohzQzRDvSC3iWUmPcv3tok3Ex55Tr6THAimWCLM2ATi3DYr9bMAz9ot7vsxUjMStxjUyEJPKfLReZVJp4yBfy",
  "key29": "2dhgJ594wEY5k78Pmtzxn6VbZw8csNbsYLr4rZQgkFys2Q3HzLC2h1BBQLuSdkaG8ZsyWEytckhdFuypgbPYZUJ2",
  "key30": "3yr5UeXaduD7WCZGipR45dYzfF4tEBCKGhrUA4gtPxqDAnhx2aWYYfuW7GSkPv8YWSWvGT7PzpPpQ6UcVa7qy3ez"
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
