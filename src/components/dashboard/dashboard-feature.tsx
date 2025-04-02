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
    "44MRH5ZjVfyyewswFyEJdpEkaPowRKDFGYgxhqVhoN2HdZtg1bKijGNYcu2SoCwduzancETBKbzNTrDwpHLQgGd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4i5cRt7Tgy8LmFtv9GFsqSQwaAU9vLKiE8oxHqYWBh6KiwqQqbzT8ejwnkDb2gAmFJAUfu3gm5YTenJNBcL5gw",
  "key1": "3ZK3vsR4A5f9kjUR6quE629aNC64QVxF4dYMFU9RPt6HS4FnPVZL1C2XaiifPubPUeVny8Lgh25U9X2abnUNg5PA",
  "key2": "C4djrGhcWsmsNnf34Cp8q4qBG7Gfnmcuoe3y4L8CNUkCpTchrwDW3hQ3GBBCpwSp6eqRoRYEFTv9vTifF1YVUVC",
  "key3": "2iu8YTyxXZCabxAAGHvUC7ayS7D39wG2j13U9YuonXi7nLK3NWHVV7GvR2R14G9qriTTKX5yMmFn77fqvKfaABge",
  "key4": "483qg2uJMzXdoKViCb2sE5uNr8kfKMh7EYVuGu4RVm35av2y9U8KBRfmFavLQv9VebJE26HqiXXN3tmjgXmJa4NQ",
  "key5": "5wJbUSS4j8HUhc7k6vmeqH5UeagmnkNXRhTJ9m9FRDCgGn89KBt5LdYmuWvH4HPHMYVetEZmBiRLHZuRjJM8BWu1",
  "key6": "37ECTfJV79UcSxPLT4ZqM4e5NE6MxK1MGiHxVLhGy9H9N5NsLePgQm6LQW4Ffg3xbbdtPBgTLTSFXmmbCshuH5HS",
  "key7": "LhnUcwiQcFQF7UmwDqCffyJohT6fD8u2q4eZPs44ivtXQ777kqBSsRkcF9KLrjSTwJqrEZRCoNUQrCS4HBQv7F9",
  "key8": "5YSCzMfQHqgdg1e78wxbeoYWYZcVQj1AbyGQFwDVZtyhDcKVy341YNt5kNWpg1PuTRHHDPoTe1dY8AZfa9poRiLe",
  "key9": "3bgRXPcYjTHem9FyEx5Nv1m1Nu5Kg2hzpksZMqjSJZ7mKKLgJyHBpcnZLEa7BtaW8DvtJUNnon8m3gK71qjbKC9d",
  "key10": "3Mvu7mfSuhidKwEXWs65C8J19f68UDYmRcFRqr5XQiAkbvQBEu2QBCLGC6i6cphke7AMDmpttQWu98psbxoVok2y",
  "key11": "5TuGnwmnUkThUBMPGXpLB88RvkCRnfvALaA99wqD5ADg2qCyW2YhZLMAoDZRkvG6ovBpeoqvZrKdfBxQpD8YFi2q",
  "key12": "2x2UMruRTEZF65K163CARHGA5VAceyUHyEqwt2ZA8EpsUvpmraDBqRQ84TEatvj5ouvXehGVUF75vPPWCEbGrrLS",
  "key13": "4aW2ZsG865tR2FVwWTGjQv5pYtkyQ7Y9shdEmX33CHhXYvNvS9Hwv8RwdYxYer5sjEca6uZYVFKGmzXthX9yb7jm",
  "key14": "52VT9nkWyWskMCZ9FbpAbTdK67YNLxModDH3wbGnjNET44v347hTfaRWkLwGaUr27LrSec8iTFFxuUpAfyjHh5H3",
  "key15": "2tcYDQiY1sFW55JjSRtSPAtbr7wvbDxgUo2tmZiAGvgMPuD3tJYTrr7GEVcLBwpPx51p1qySG4jDxXnrtw1Ygc4Q",
  "key16": "LjWa3ytyb1f6js5ns9M6gWVB9pdC5KA8oDqABrzBSSiPkHYqM8sTUSPoVSojvkh7jSLam6xsikePBEtBM1gLmtX",
  "key17": "2zjMT1mMRBwKHY3s4UM342hPqrfXYXpgpXie3khpryNFHPXPiSAyXu3QKWNCijGjd1f4bsWo3HrdFZxCeYswuRBX",
  "key18": "5FaZ8frCLvNcwktEyxJFTAi9PqQosfKrgEkMsBN2W8XgQwoFfqR5j4WySPzEPUKcR33few7XhNC51LzDv8VirtkQ",
  "key19": "RmeUXWqBukhRPSFqoikeVmadTwoQwp7JLs8823RNb6qd9KaMSnC2mr2pXg7qfZfdEPycJVwT73T7RF8XDTRV3Ud",
  "key20": "3e5THhPDLQmbkoZoApK9J2e9ZGAhWNeZsEzewk2gRKVznc99zh4iR1mHwZqUMLug6cFPXkCziKNocGAUATY4wyTk",
  "key21": "9zhNb32j4Nhckk1ZhuTCh9BW4LirPkuVHg5yTNm1T4887MS4wspyX5oqkQvXwvvd7wHha6jFWvATqmuja9L2Cvu",
  "key22": "3mz6iU5FwzvvfwWmKAUTi4MbX3T8ivazQ8ebWf8MpUAEVBXrG4jqfogohudz2zRNYkKa9P86Mv6p6wX4LoKjrkwQ",
  "key23": "2PTV5JKyaq3xniUjRA5tRJ9RquWuy2vhCZbj9HbKZsUPQEKLZU6hTzrfa4qPdVFCjAZko15TKCEURBPzHWy67qJg",
  "key24": "3Bi1hAuc8aLnaMk47gJRwRJGaT8Bk59VWXPTWQV5jrx5RoNe4cRLmhv7q6A35JwvjHsnCMESpYKUtjYtcEdHCzTC",
  "key25": "22328eMtvhoU3E9ouXLUNaHLhge9Y1yozFL2WUHQd8EVBswJvjMhUFLPro8mE9AzUBDkP1dQbw3Vg33wqZEyC3eF",
  "key26": "XJvH2ekqrbg2t6qEUXUMw9Hh1Pp2ARv94VB85SZ5JZsSQnrbLs7Xk2EzREMx7y6yB8xQ72TYwVLTRKVKdoBv5KQ"
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
