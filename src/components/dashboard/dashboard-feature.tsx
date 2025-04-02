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
    "4ePV7FxB7DAsdx2MbtwWUaQULUu41hnoEGB2hY39GyB3sjDyH52mxuAX5tM8qwNFkVzbVxwVbT6gApC33SjpcqnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMkaadjmt46hmZXzJJHmi6d7wyhtYvNiJ2yYwaDZprraoT5fvGkpBZE968N7wkGMiaonw5NcrjA6bYuXxs13k2F",
  "key1": "2rgKJBuvmV2ERVZ7Z2hPoHrMDVt6q4xGtMNCeKJkrevWoWtcMEufm85eR7hxP655RQ8NEKz4hkM6254QNdaYUyjn",
  "key2": "52p91d6hXfd72MihVKHC73MjqLD4FEB7dTpFG8ZiLTv4couUaqxq1S324Xiib5cFHBnwNcqiMFmeXNxzoKdDYM4N",
  "key3": "4UNv7mmXeBGjZZd4Ffu98wR5YGDep5uQvG6JGhcFne37yDTmBHwVpRGfg2ypznYatiZJMW3sgRmT2929vtPAxFgW",
  "key4": "aybTfun7ncjLahtjPr3tDThVWGu7U56noRuUXw9qFQ4H79byJXHTppNW3xk57rwNraJJFANDavjBG4KF2winrLJ",
  "key5": "2gvSEAyM3k2B7Bvc3HjQpgLEqdpaeThbisRc1rK5nNjxyxjA25yfhRkxsZBwxLuwXGHc1ypAMFhNX4CXwHsgEXjM",
  "key6": "5t2ipGx86TJCcyZ74Ha1dtardEBtu2k1PQiniE9SsBLFP1g6SCkUWQ9ThLMmvC6Us8YrrGvyjpWryfRwMABTLSLk",
  "key7": "4nU89i9JVSq5KRmvCKDjTwsE91fBTyFWwXYmgxaGuBhvfTgainTXuD27egvrjkwx4wAhNLnfVDK1z9ShVVA4MyLb",
  "key8": "ai4nxTtqmxF67tsPpTgGeW1opPwf1LSJF8BTYBST4FFP77cvZiT4EBTQ9K2Pvu5LvcWRytueACvwkN4kP8shGMt",
  "key9": "WhZzjBzZiH5daJvWm61GcvF2zRuabBZLDe38dwptdwjUD9Sz68gnjLLD818LRFXfFkwnRkLGSZ4bYnJmRMmcWES",
  "key10": "4URwcVdq3j67ELF1y3j1YAjW86DKDvgM4kWVPTsMVQrRVgSDMJC7bd7QdqLVW9GxN4Pb9HY7YHoiqzcCYh3aDQGd",
  "key11": "55kTRnqfzqoZrmBZAPDyeahfWGSynCYbRu1freN5eewquPJUkNfgrwvARQfrTCnLAgdmnw3EExeYH6RcW4J3VMxa",
  "key12": "aV1dSbSADDBiTyq2d8sBjVCmNkmcZHpcG7yoihNVZsAmSMxDuQtMGhN3BRNQN4Vg3mHa6A5DYHFnyb9rcGKJtff",
  "key13": "31ARCUxXw6aa2JPx5drgbmriazetgsxGiXRNzmkmPcyFJti5V9bB2vAVHRroYJ9kWff2qyYVHa6G8wCLNLz9FG47",
  "key14": "5aNrBk8omcVwT5NZ2gHigBPjCAEHJ7WKwe6CLXhkEV99STvw5fkob67nzR4j5Efyfyw6F38f2C22BnKJjYX8shD1",
  "key15": "2U6vVpDY2hrxEgfrSrg4emcZNHKXmpPE4vVjPBDXwmeDTqovc7qNMdjb8QJWEEnPZJeejdevCuHrKnqFMsBqzodx",
  "key16": "5TBcejnQ3LccvDxGeNcaCHWisDFrnGZyhWkb7q3NUv5gGLArWRVQzeYWNijrd4QmJpy2J7LZfrrXJugRwS8K7dSg",
  "key17": "2SuoxiZSowkdPc9TrYdPRZAeonEPrrkUY37vSy3pRqX6yaLrBYet2vseEwmyN66HiaxFWengTPHNaRBHW7f9vvxa",
  "key18": "47Z8EH9N6TtiZfKdxs4ihELgNg3pTwp8fLTcMDxAsEpNtd78vW5GZ7EytJSwn87DEqut1Ff1Kuz4Z8QryASELmeT",
  "key19": "5KqrfK4gXNmAQH3QGwGaHH6pfgGxm6V5ULfz7A4PVcsDzKP166GyRfz1iTfTizVf1KHRsr6Ae2xF1bqzfNj3FGjz",
  "key20": "3AoecH8cn4GFuPijqutbmC4jMtxnDWpqCncBjt2vyDfBbmucJXWverD6Fz7oyFYrDfQQw2q5cCL3shEBy9GEYjnm",
  "key21": "3aPyHFTAofve3prm9mun99DNvFSBjtzryyxh9Zp9La13NzLqtVhPNCvGESDw6sUgskfNLTUrK4SnDuMU4BFoKpdu",
  "key22": "DVb2iCeUV24DLr9pMfWzK2STQmqQsx57dRL4ht4CkcG6AdAocX5ofjPeKCbq71o3KyCPEbFVPC3LgkxPpK971kN",
  "key23": "AG7pjikwgMSiD4tEiv4Twb4YKHesFQaPDYkyCsU3aBYPVGV8CQ9JoZHquYeYUL6JgFpMX7EhQ9uPdNKZDU7R4ad",
  "key24": "3T54GfUdtj27Zdt6jZJjRbYKeMfFj9afazVXFxZY2UhpowVQR14ASjiBgKQ3GJ29uV6tCPTQ1tM493Mm8zKHKRx",
  "key25": "5xMKUoRn5MrZTyqWRrrw7h17hdUAtRR3QVK8JdU9TWfFuG7hYNFa6exSTGY5b4NnbB59nezTEQcLEJb9oGUdmZYJ",
  "key26": "5QbcUxAKcSqH6yw7uLSGZfF6vfhK8ejRvgx8y1p44fzjZJxZHnYzeudPu1hctyUxDL26uADKxo1QWPpMWzBJs4uh",
  "key27": "XvEA63UqTtYsuuoimASEU94kzPCsuJhTdBPLhp3cqSDipNV9Da5fCNyR3yt7d7k1das1NNyAMoGd9r5keGVNKVU",
  "key28": "3E98hiL8u5p81kFbqwmTs3K8dy3jh5DNpAv6d8JvEuKy4SqPHvQaek8K3F17svTcGU9qUtjMag8dXPLZzeKhk5tq",
  "key29": "3owEe6b9bt6HRxPaTqjM23MgDTN63U5g5KRJChH7gc1UGPPdst4h8htBEGNSWLiNQoDThRa7ewnyscYsPbiKoEU",
  "key30": "366mhQyiWXc26VftfFKX3icJxJbBSsFAV8XE7CSx1KUTVSoBLBxrSMaxVEH3RRGU4RdnY1CSuVM4fydABfCJTM9n",
  "key31": "5yWMCqzjLqwuMFEF4jSN7ZbzHsiXmAHNwUsUCkFXheXq1vya4Wd9kHixKgLe43LqyTAgsuyiMpHwep6KThdYKk6d"
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
