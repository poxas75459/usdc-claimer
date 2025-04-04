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
    "kk1HibrnZRM3gYCxDxAXBTvNBxadD7AwJek7GqKqsmdCfjcSP9oWkvkVvTpfQG4RqmBQswXYA9BLiCPz4ZKPGED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVgYDb9hEQ7SgwXLhM6tMRwR9SdzTpCU67dCJT5y5rq81qFhCG8eeeWzP7jxxPWP81uhJSVtVbHjteurfEL8keg",
  "key1": "4Bdw5EDavaA3NppnNoc4tnZg5FYWHLFe6RZxj9trYkFQTSBzZNn7rDufEKK6KUV4PBfrnNcGSfJeYjXXNjMG7gGh",
  "key2": "HRyZhXutiYBKzQrcT3Y48oqzEZQEogjMZuuJcq1hnZBDamxLjCKXtjoXuybpPLRjGLxe9XtXkg2Ejxwb6Xyr1Tx",
  "key3": "58MsSD9FYqAComY2uPNDGBu47EGCvPCv86L9WZ78suzqX2FXuo8KNZdLHB8WhoP5U6HrkmCw7sfCMZB3CpJbdFxG",
  "key4": "5gGtvngciVauT6mPvCg8NVUrUpfdm21y6rf4cML5WZpT4uWb6RZ33m3MPuiGYLvSzWeBHC63jEZ1YxZLYq5gCwFz",
  "key5": "2imcq7UEUeFYUQEg3oLb7pJ7aDAwN49MhBeGne2NYTYmuemBcDoS535YxBWAA49xJHcG2raJTvzx4tdY7benLkjS",
  "key6": "5NVc2QTq88ZqBx2xzN7nSJEevHj8wLN1wX4HLurBMVgvWfseB3V8B4xUnYVCGaaGm1KNwxeLnPW6x9jsGvLZZUap",
  "key7": "5DUJwbqpYuUxHgsyWSwbFwRe8SNm8zZucx1oc5W887uJGFZw2HQSa9aZFKSrigP1WE9vrt2xyxVNCjG3s9QQASto",
  "key8": "2hwG5Vr9eieXvSY3aEiTSTcbYfcH68evwZCwopTh7QvLhoJ81z8vfTjcFNNWUvhDaEoziUZdzi93NREChC2LFCYD",
  "key9": "SotuCHidmHaTCqTFXyS3fWUMgg3hnZRBRz6N3WCGnFz8ikxkwCqD8YWvgx9xn96AD4THtgViJ1fNL2e8pzjTnCH",
  "key10": "4KyXFgGc1pakmwg8eNWJofvuwcJzhQir8Rj4jFKtH6PatL6y1TaonDXVgbT4uoyEqMajdHSo9iitNArew71HFQou",
  "key11": "7EndkmyxEHCogrBykF7Riv4VeLhntL1p7jUvEf9uGeoy4shCZeMuManRdRbUST9zYbAyovZ4KpR2yG9ZLuCUdMN",
  "key12": "5PMpG8nVXUQAsa6XGhmsrpKtM8uw5cTL1eD7dMjqvsQquUELUysRfwGAcyvXoaz9toWahjamrd4aq7UfPo7qmbay",
  "key13": "2YwtJHmEwwFAUyU62sXgoUjzxrYpbMMvNWb3nKd4GHPsWCuXQ8nRYdfJ6btBgkLn7AhkxFDKWWFX887iQsSvb8pA",
  "key14": "C2ppWCrRd6J6qSYiMkRuDawaPAk8ugCh5BA6uAB2EDTPL1B2JwnG6P89v2hMGFpqbzD7HjUQ2PLpgH8xJuNR8T5",
  "key15": "mJQyMUECb9JS6Gv4vxa7TPjusPME2VXYXgBggZbeiCs29ZVUEbygG1NX9kT5CmHdfotyte1Qg9kTdaN7CusmZwN",
  "key16": "3YJfYtibcZrxcSrH42Wiek3KiZArmZukBbh867vyP5jF63g17AJukMyqZoPHcuGD4YePHaR9Jm52PSvoq8APJ85m",
  "key17": "4wmj25MVUAghkLZirAaCzxzzWXJbHYca5nwdmp9fSKgf7BrkyvJgwgivHb2JDdBhDtC38m2AhqSD2P31CWmvCLHK",
  "key18": "23TtpycqLkLCpjR67Dh7mr2edHvR14wCfp5aTWDmgZ8EfEwL32arDuTjG2B3U4HZcDqPwzG86eDT26pFqP1zNvVw",
  "key19": "TH3WkKZhVVcs3nD8XuZpAvtT26R6U2S9haysFFQGHbgZE8HWQWtDBVzmRnNL8paAGUURXkxYVKjXY4L3be757Xq",
  "key20": "4uEGRvJc9y1d243kkSv2w6L7x9bxUjv2xwPvPP53C9JJxSVAbeNRiqNNwXmyqhVTt6CFvvnDAeeK5F38gZ4ERF2j",
  "key21": "236XVZxaj3fyAmftE2tDjwMAxwH8kBD9AYM5SRAocVc63KvfQLAv7FfipSeGCSfmwLtNNd4ztG2VQRr289uGLps5",
  "key22": "2Z8VYwcLyw6WnLuM2VaESc6yjL2SLZbG5XSk1XqjPZKhkf7S7NhLqhWRAwrTiucSsRm9ytLWwdyJj5iiyRvGcLkE",
  "key23": "2EpqUm8ibwfctC6RA6HhHH9hHJLywpERz2jGb5Ln5zZGHtDNvCzzV3KY7xveFq3XwfRFAbWZfYxuoGKK9LRLBewj",
  "key24": "Q7dNpN4HTJJV4DVK9gQVt2DRxcBKxnV6TCK3cJ5oJb2z72zo2U4hjPgkwgaSQ9F8HfBfsD1oJaP4866iPHX2X1u",
  "key25": "nqs2gu3gzPVv6YBSD4zKYeACabKvMj8DEKfA3K1m5erpdu7fmSoFpuu9v1c11UTfYC5LVPNcTUJyiiyGEKUZ6Qq",
  "key26": "2xTb3d9KPmi5adLkdYaRmjtGiC7KGeCFrjMVDt2TTf2yGivUspjWTYRUvwVbR9z3ejJWnKwdvBCXA9BJLi3c7iiE",
  "key27": "5asivvWWbXXQQjkXX3AA9K29AW2dJT95y3GnWpb4zTDi58qPg8JwMHvZtDoibkTNghwvnx3C9vAej7KpKRPAQh8U",
  "key28": "4AfJZHH9QzQsw7eACUoypEBrGkDTdveyhDWK3u9ZNfxzJ9QiB54ynTnfGSHSUvMZaQhzAjssF6TMm3goVLvv8hGX"
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
