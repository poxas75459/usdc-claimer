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
    "56AiBsVhacmP61ysY1J1YjKnJDjEd2Eq3fZm5R3CbrWnk6q4TgYhpKKiaLwgpZbDV4uRLEocbTJNS7Mc2GpSsqSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7cLSMPhs6hfGWd1VPk3Y1YzCtdWrWgCQu3ATPh58WJgjHKGBsKpzAAMno9NBGHAdw1oW1RCovZZfCDf3YgLKCis",
  "key1": "Wa28VGaPPohx118CE6pFk477C6i2Agxo2gpxkaVKahr6DjYrGYyA1LorGaZJWRgpj39FtAHEGvh331gnLaThvcM",
  "key2": "66V9yBtwxvhseeBsZNBquyzcqPn23jmq9VtPboGT8MpAgwuGpTgoYwQ2ftSnhBaNmjQ9xDVaKBi2txiWrBCJ5RKH",
  "key3": "3TMAw9cUvbhG6DCYhpGwAi1ha6nt4jv73tswKpvmWiPqnZGi8KHq1CNhWsQqT1bkxHbHHTsKgA4KqJUW8tYKoKhD",
  "key4": "5X8Jhs97xA6oEvQWXeUcWRCnS9uKbtnDWxuWWZuYFMreZDZ4d153aLqGTLGWdF3iuCZDyJTe3cLSgMS4xs9Rk29Y",
  "key5": "4eU4sXAZRjSRqcNGb6UVwPsy9czQJbk2jhJt4uSo82FtmPmQ2ZmiJuJzgjX8zT6AnsY5z5rHhKQctjC52oA321fR",
  "key6": "2GmmyQS5JYjEhuZPQ4K9U3keVKJxh355GLt3MJC9NTba4wDw4w1QF1y9ZM7T1Eq24AVv24pZnurDtVRWdvekQ4Eg",
  "key7": "3irggEY6GS8oMM1J2DT1XvMz2ywzEy1QkBe72jQiY7KhT3RsN7Dxry6hjMPxZUCT5uVaZ1tzLcRYik8uhaBproeh",
  "key8": "3idMxFQ7TNqHdhSFKTZ9wbRiwtTsCfSB7yH2cHG6e6pghmxWx49aBcDYLUy3oW8e9KLdVni5L2uZAdhd6KCgktJp",
  "key9": "2rB4sMysN7zh43sG2c7HtsQePGtqV2BNqrSgqfJJtaaAbgGfSDBZN3GgWhHtyEP1sLcLW5W63V7q5K9zKma6BPVg",
  "key10": "5qxnRWFHNAGnuwApBk6hQxujEUNQQvew3nNWWvYUhXo58NBjUM8HWjfcNCqjGncxKVdhQW9dApmtSHNJRFqz8utU",
  "key11": "46FLYC9QSx2izSST69ns9212DhnyfNyuJFnd4PHAUi646dXgndNKfmqcKHVjS2SxW13R1ZLWCyom7ZPt19ZGvgr2",
  "key12": "5zSLYXsJjJgjAGL8pM1afDej3iw64ZER13a7VWrirZRn1zgDbPWYf2iWnqcBreuZfVPXTLYJTaUcZiocuw3JfJvR",
  "key13": "v48MTrv2Jd5jCapYipN3iUoqgVFKCnyMsasqAdS9a52hCUpm5Gzh16kgUngnCuEo7vjZQdPitgcZiqm4LG9y3zQ",
  "key14": "4qHmZfduZZtFMZP8be4JgEjYQdMPw5FUMpmLkTgthz8VaR1zGgmvYyG7ynigGa2kfUho9FxT84LErGt7bDAfYwJF",
  "key15": "5WvDxwgCkR4iQriamWeUhWovvw1yCeAB4knWNffQ2cCGmsrtKSAwwLfKgJohPgipaWsbDZ5F4mmzG5ZPbRwxitpD",
  "key16": "QSMTf7ZRiyrx7bsMiQLdHyMz9oJ1Ho1XrRm6YsXbXZeBHRF5R1Z9RWtMKS75QVrUMtBztNRcHMp85WX4ges5U6R",
  "key17": "4wGVu6jMq7AFChRHr2ucnrart4VSRzmKVUCd4xmTXnfkTzjYkbTZb4myio5fhH2Uxnq472nVuarL1iWD13pFFqkU",
  "key18": "CB6t3VhCrkjoZC7wujCp7MAgULE1Ce7Ry3hRE9av1UYdvky16aBFKHaR7Tvm76cTgV44LkKTBrcHuWRPokHvJFa",
  "key19": "4jpGuCij9EqHuRJhnnfZrcVtezcwrLTAyZhPq3SPRLJd3XiAUfDiW4o7nrVvTvBSkw2pakYXt4596JeiZsn25zUk",
  "key20": "3NJhK8ZXGpUcdZFjwYYHHCnpoKzZ31aix1MqT6AthhgVpmywavbXA3sZWBmL448J9WEVJo2iEYtw4v4R4C3jc1B3",
  "key21": "4c5f6pGKA1LWLE6PNy5pMgW8kEHRjikDngMpdi5A5fn9MVphqJL2D2QqenvexTUEkngEwt32HGovqf7DSmNnpY4f",
  "key22": "3YpeXaberhrE4d57ffEtNDM2WgK14b6LrxksgeNmYqLBTp3r35rxyQ1mr7sA7a3Va39ftnjbKSbGtkogdBmxTiFY",
  "key23": "3Y3QgJPDRb59EghQR3pJvfpsbNCaKHNGoiDBuEFnRE8AHxNmxYayPCEWd2gGXkQMmUHS4P7jT21x2UD3oFxCuVDh",
  "key24": "25Zdbark9t89Z6remcydoDb4XKKFPgSo62GQsoo7sm52yhQAg2QKHdkj65bJrxb1E2NsfUhjnYnLVkffciY3ndeg",
  "key25": "2TiD3JfcF5bydytjqJ6PyrEE9ntDceayQcgXTNiyyNp9Mitt6Q1ZmCwRDkD2JSQvnwRPmTuVDnJQ8qqz3FpMw6mW"
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
