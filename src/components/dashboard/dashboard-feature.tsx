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
    "2e7QFX6qRKMsyaiGJjZSBK4fdkYeemifsQBqPyuBBvz5U6L4nKkJhG2dmdUDVREP1Y3iBfgwg4FisL74V2CwxLFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MFNQxenWBzzCTN5HrDneRWdQAEY4LJtwRTaVnRaFVTLu5UCvYTS8W5Qgu4ChdUy8wtLmCrroqzEcLnBDhsAFJjT",
  "key1": "pZHKRjgYEG9qg9ebFC3kz3kkVMqemfvwejoQ5wF4SJaP8UtWvU49sWDRi9GKo4E6eJCQaUJKyrebn2GdwzcKRgh",
  "key2": "3DAM3tcEEH6nKtfpFrmrT8dL5GKUuLko2qL3yDw6sw31gZ9gBkKxrX5b32NfPwSMp53y9Zw1ozSLUtgQAxD8yLbV",
  "key3": "4KX35mCFdMYuexoqD4rA6aUR3FMpiSSEXc3P6kMeW6fLciAnqRt99hwL2J4m1dGsxdWUbCRxyn3oX7ETZ1AWhAJj",
  "key4": "29pwaWmVreRcpq8pQmZ6zhL3BddW73d1kHbxCaxHQWyZFtD8KXQo9nAnM31oL8m4DA6y2JSsd2pQak2n9RKyjcso",
  "key5": "5eh8cDnoUbwcbSUEamqt2FEQ1W81ocBy3ktaTAstveRqR7bKH6JkhCb4Q5qsHqqgBzmPDV5CJGUJMh9yreXKycr4",
  "key6": "4U9jfMY8Mr64ik2qjhqzW89U4zTCoq6dFvnd8CffCuj43STmi45UYCepC7qs4audkJfLbdRows6mdP6xfeZx35EE",
  "key7": "bmCYFfow2h18Bp89EvkFUTsWUY3SRhGN8aGpXeArtJsC3FYPHfL1t6iA9fFUaiqNidHP3hJPFLg4c6PgqhWqHLy",
  "key8": "62rw5PYSZ5PBGNVKCF1UBXTvqjNyTpPw9mpaBYEvejzYP2NsYDMqzqwcG7X9A4DMjpWpm8WZAcYfKdwUYpVEjNpu",
  "key9": "5kAtWySLFUr83LA2CT1dre7mgAiamkVANMWXvTPfmVU7MigZdx46jRXArb2q82jmyo5dUtVYh8fmfq8SEW3cJUun",
  "key10": "5xrUWuzpBjAviQfXJEKiVVHdmaEfqk682t58eeVcqPco878WnvxKCu2EeuhwzWjfegFbsR6JNtrS7ikM7ih3b9pv",
  "key11": "3UYphTyg3pmC3gNYcRPvU9jHHbpfwFgwbNpYPyzKSav4VGqqFy7VrQEq6ejNXYQxiTNTt4Lu76aXakgfmXrLhRPN",
  "key12": "5H1T2efBScuuaakfaqAyjiAwCiv86F9RmEQrxhkDoYf3fggxGJJoRH5EiKxX846WgQ7ZSpDjXT93h5U8wFixJ934",
  "key13": "3qZYFWWhUitZRFFSmu4nbf42gBCnjpVrqHQFqUwgHgmMomsiQz5jbJeChfNsQmi5CNDAeLjDAJr6MLt9uG4HViyv",
  "key14": "3ZW8AXG1KAMUxk2MGGJtg83KDPjcPxxcLJ82Wfozt2YEWBi5poePWAoYgHygRiwHLkMJn27zQgeCELQ4dbuuPoAP",
  "key15": "4tW2jb1vCDZ59pVyxT2VcEHYeM4jBXhV5ihmGeSeQbXxxvEeDGt1T9vvDz7R1iMtu4LFAGRT86JnaEZcSgdKpRHW",
  "key16": "5vjgQTU1C4hKaUwKTuGMh5uCJpzyRdaa8NPDLX8ztkArdNo1eQeB1v192QALxzPe4cyedxyg7prQgXY2VBhYN96B",
  "key17": "DKGd9JQacmtdDHeZ35RwXUPAXe4KKQi9pEhH3LNFJ9SNfupcwxREG3e9sM85N4VAMUHnyDbARspx3no59r1gGib",
  "key18": "67hkDxYCj68VbsGU13QyhSiD8CPj14nCU3qwXAtrRMXLuosrR3B9hnPKLnK2JnjQavMQJMmFJGqzwx32HDdromHK",
  "key19": "3mmxRs4frH9HwNpBqMbunb492QGgWkNdvNqXTp5v5YFZa8fnbsG1pVJK6PCMXLocEHZ5CMeV6J2SrDWuS3KA6SJp",
  "key20": "vdX8Ghsid4wfsK84wyD4TXjN7L1QsXVeir97uujGqkfy3exALC7dB6qRsY1a2bFJeM6sEPjH9ZEbSeuLWmahFG3",
  "key21": "2Ci7BqCMzKFuQjk6dCxPuaJ9NbJdRo4uAuw3XLqrMDZFH3ARivgSuvjE8QzfTuFwqRqEWRVSrbWxVfizS7iwMCDg",
  "key22": "E43mWGzQet7PJqPjJfsoaRYCu5CrxULe5qTBbU7TBGDnsb4LF2nfKtt1RuBPJqcRx2tZXMHA5hoW34n1oJ8zzv2",
  "key23": "64fTaBe8YCvRVZ9HopS7rv1WBCvJVAZsyZaA1mMquAVPYWdKzmEKQq3xK62wJKQfMohtGgXZ3uJBh3fYLLyg58TA",
  "key24": "4UMJ1VY7K9k4Pipudz5crMsgYy7Qr9VpKpF2a2RWrVyfPGGWNAH8H8StMA3j1ghbe6Ztx441FfGMmPsVQqPYym1F",
  "key25": "31eV9krcC5z1KG1HNnG2m9k3y8rk7XZoJdoJtqqjqqx8R7wJ1fdN6tovswfe1y5AXaJg23gjQxg7H9wjgNHq6fgN",
  "key26": "fvkgYD5rbG4mnybtEnSAwugfLyvbsdMmekQ1CKzys8rKpcobjAX23qtKeDk32vBEuTw8Rvua8JFt6zk4euua6gE",
  "key27": "5FKduosPKt6Zexv2253sFsGd4gsLzLqUYaGN9kW33i8mtmkxxBH3B5ccqgDZ3rKdBfRXeCuFqd6KxQo5quih2RHy",
  "key28": "Tss3pQgmmjAYS3JagzcZkTdrZgjmC5vN1bzT9FebqEwzbPBiek71bVYanHM7SfDUHZ8nnPEhGYRqEXEq73PYEt7",
  "key29": "4KfCbrKg8C6yEQBAB3ktuwX7b8Zhb2iCqqLRnRUeCSJzYNfhWa6RDdqqB49k2rM5daBcj8qToJLhE6NnW6pqhinQ",
  "key30": "2eB6aFXN4XtCUS88e6RJSg2SiMfSE13x6eKo2uiKyLmi1bwYhyVtEqaVqPqLQ94o7xEPCfUCi7CbKHWmGpidsWwk",
  "key31": "2FML7ZQiHPvuL4HKLAFUptmZ5cpiNCBaDQzpepPwoK5uyrVFkcdsmJyhiaR2cGSTGZLgJToQoCJvbv8j6DvK3CAJ",
  "key32": "49A7tP2CAzbhZr7W1M6LN5EWfGNEvgzQ8EuiypB4rDkApRRboAQBBBtvNGgBLeNzvKa9XVRW5HTLCMsPuzSUgK6J",
  "key33": "gR8PhF8kuoAyRsavcVgihEwaZHe8MbJXoPcB4RzJrSwumEXr3yQFpnxgTLBMmiGfwvejctjsc5bxnUEgbV6AxMV",
  "key34": "WoaSznSLVo4YQdF8n2UDAkDcXNMEN6UK1s5z14qjLaZT9hr59tfXPDedmkMGHAj91xYkxrh9Sbf6nmMCH8uwwEF",
  "key35": "41oxxbpDTaMKTCqxRr3AGGYyS6mWs1VrP4WHKPb7kgpWPFzujaeRN4c7jetjBM4GH8uCsNa9TURcC79sBRAtyjej"
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
