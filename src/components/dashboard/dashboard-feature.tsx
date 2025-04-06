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
    "o69iVymgim6Fg8KqxeP9BHjCR3sCo5cfdD16rd4Mveofo41QvQ95VmmeJgBGk1aHxLPvQECYX3SDsrr15EFv8Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428fCnuXjaGHL3SkbictPpNhJrWH6bUryPTRDfpYcvEpVCcTimjesT3FrSwZG8Bx4DYx9KszRcaxbdB4iKzRA7k6",
  "key1": "AbSAL8PbWkXzaq5Fjycidr8x6yFCPzy193Q8n3Y1xrHyZtZrqwNjWodACKH3E2MM9aVc7xddXYbRuiEJzrbmg7w",
  "key2": "pzLStqJzLZTmMwufP9i2v4DjK8KfQCjgucfZnu4AQ8hfQh6dxnYhfz1q41ihGbcXUAb6WEmJb4MfTkQQnEPTHL9",
  "key3": "45QXVHabqmB4GBAa3cCST3zUSDZJxzcJXeCjw5fjhygyWynq7LWUcyCUD94aTFmY1yp8UQEawpbJ5zXX35uRg4gH",
  "key4": "PkqPvJVgKskVarPhwML6LTcfQLJd6EhmU1pxP1NqFw9FMMHJeBr8QWpbboeoHS83EaEJdtZ3GYRbgXkNhNAmBEs",
  "key5": "3QaK8T7UH6RdryNuQ82of5yEW7WAHs3gfsB69ytoMpEb1rEqqHdNtJiRibfKrECTWN4ybBG7Ud9rp8Rt2C2yN3ia",
  "key6": "5PNR8LgMcRr939Ea2P9CkssLGEwBDj3XPfkc8Q8WJ95eZP3GTYTDnFJzH5wbFq1AKEA2fp1bxYm1feCbMeSTmync",
  "key7": "2VkVJnXKGkzuqnBsAM1QkExH8kTq1XhZ9APJz8Ef6s8QdcMauJGvbNMi6wDvsaM1BegNq7oVW223HjoF2mcd6tTt",
  "key8": "59Fe5psybwodTyFouJfvzxnEG1orApXWAbmMsRfLrcHnGzFULKei5Po5GrTLYmMsNFsachM7ydsQ7372B5bEr9Z6",
  "key9": "45LZwrh2TQcAnRHfTGNygNGxtCN9ZAVYxhsWaSWB8Aqr3iVubRvAz3UDakm6ScnHTUG2YM2u3er7QmhMKGmf17AU",
  "key10": "2UFWXxN54VSVEsSRVNR2Viy3cdw9t9N1N4LxSgasR5BJoHjHGPWMKidNJisDnJizPCnRLucBsKoDEod98qHR2HcY",
  "key11": "3EJkiZVNff1rKEWgxzVBcyjjnNYbAEN1s5dBEDpVAZNg6yBKkyA9SupreLkBQxrHD28cvrtJvAbMBEFkTcGqDU5d",
  "key12": "24v6fPcZ7puypQE1SQqEueMevJypvcWEnxLRk3PqEMPG6iPDxdBWe5q9GWpyzHFr27UN7e4VAwhpPT1e3QiS5Tub",
  "key13": "3tM4LY5ErvJh3jiBVChBe7cCL7Pckoniv5d1A5f7CRnaLQCA7qad9Fv1BUwKM8q7vXXXytZHSCYbYPwkiyCp65X",
  "key14": "2JKkseTsD3ceTex1KvJVcg9mvHqLdjzhK1xutMjpZCfM5pDEQuibdgZowHKGitZVk9GqAQVbDidyv515dLLiwvqg",
  "key15": "55ALkgU5jWZBzhfDmtz6mPkLvL8FHTHeUFobRPhx95sm5Ng62DT4u5hQFQgdpGUTfU9JMXt9TQXrtMMrTTyTKEdq",
  "key16": "4pkiE8mAYrvXS3rfz6YqGhrFAAo8j644XscqX4Dotrt9i6MK5U7xgpjjoqEr7B2BKEdkL8i6nGKihiWKfDqbTmen",
  "key17": "55LqKjyAPWg22S7gF6XMpVHXfqKQt3iMNH39Dk551mWUkRhxHfpUNerLaDdtnMTfQCb7anBhT2RqRigYQjmbpZeB",
  "key18": "2pKfZ2ZJFzUYCDe7BSRSxzsJqBGjrnmAqT2oFWDqWq7YFQn9UwxjQgEKCKTF7Ch7zRuCtE1M4zLJtvf5DZ8ezEPG",
  "key19": "2nuQ5ojLdBGsGSQsHdxhUkmDQjbC5zFMt2M4Hu4jCL27F2gr3Nv43JFZZwyequj8YHfRumLTVAz67HG7ZFDgWrgk",
  "key20": "37V8RwsjVCjXiuFmP8YqoCFfyCdJdKm5AS8T4tZGjvfame7x3BKFZ2KsDk5N1HDiJw5aYsP8EbRudbnA6iykNTMf",
  "key21": "5Q5rpyfkc9upP2Hz93aadqBF8a1jwTJsB1VQqQXMrUVeAZowLEvTqHRJJCxitJ7RR6M3NAbkwHTbxqsngEmUP7UL",
  "key22": "3ydrBpHyj3AcYhqq1pqVPV6qYPWkTrjVYb1pFkYoRoqT626xD8YwtL4ZTwD7wjhNp3btjLs79AqfaDfWtvMf5bB1",
  "key23": "48TpagvrHnu6QYz2kJ4pZfGPtxfbyHgwQ77EbGv8PCk9m7w5Hm6dTGexLgEh753cZySprWLgPfnJwMuwhkpW6fJA",
  "key24": "61WtHWUutBuSCnUDGicJepMjm9dJA9CbThBJonD9q8UUfcbt8bq31r3zUYv2ezE7gPZhSZfoE98fJwfbDsNQXWpW"
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
