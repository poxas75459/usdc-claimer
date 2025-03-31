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
    "2qpA1Gac4kK4V9SdgD5imWr4x9oBLu5Naf1KSwvqENwApRcHie1AzNcFvbAMV8t7ZC5nppDtvgcHRHCjfzwpXeQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1bgUpqqFrpjxRuR1R9kbpcp5JTe2Rwdg5tjAWseKrKYWNMEWWWri3iLyV2pKqpQMtGYsAUHphHkmjwbTvQa6rE",
  "key1": "2CD3CUmUYqfyjy68CvMQkbua9QG6sYYQgKEtR7Jj1kTAJeTmQNdXbgy4c8cdHEmiktJEEZyBv9cmCMCAP3T2Dxh5",
  "key2": "PfTXcZZBbQyW1bXWHLoVS5rR3mwzqRkf3CmEoLLyxv8PaNeYqmFewwGLjXkrv459nxQeZUUqgZoZLEeaL2vHUMX",
  "key3": "Q2udsKNur376sKaCPTW4GBZ3kmssaxBjhcusmjsjzV2AnEYNdTcg562vbYM6Cc5efXPM7Xjh931RRLeQQRzcbuN",
  "key4": "wY7gbKopuby2ceJz2WZDEyUE3mSimUWmxHo9SqNqs32Q9MDmESmiyAbaVdT8RVTq6YEyUtGW15fhWV58CfLgK91",
  "key5": "5ScQNKVRRETxFHwYPLe49bJSDArLywVVDvW6XsTaggb8gwD2fM5HwdacKQ8KrwLAbcBKFbQnbsbmD77NPGN1qYLP",
  "key6": "2zhDfyNB362ctRzcpbdjYqv1M1ojFMdTiTew4xs39aN2xSxtBmwTPVu3fawB2h1swwTT3NF5yxqpdy1BqmbfG1wq",
  "key7": "3TDAuHjESmzWXpCY7kXHWvuvfcXUAxSx9NQVW7kMXGNx8xv4VEDsdbVce9WAoxJcYUabviAjDTJGBKpW83LbV4Cg",
  "key8": "5NFWzf2JUDBV6re6qS9ESZVnQrnSKFuPCTj3GmGQ9TQXRZ3Aj8dmVJcwYbkWCzeaop3SSpVU6cKsMbZhTMBejm6z",
  "key9": "63ckFqvZzcg96xKNmB5uK2QuKYhzNNxZ5s2goXHxbtXiRvfHA19xotvuytcjFx3mKa8qRXE86uYKswqacC87EpEH",
  "key10": "4vXi5hNjVMT9HVERRnwjxBQyxbBB66SAYw6Av65iJyNtoDV3XhQmckCqF3ZruiYZwx4TKKTPtBX2KhSNs4rd3jr4",
  "key11": "39C4kfwTXaFMcYtA1NGyUN6UyNBqADpEo1CwufRxUD63mgXKzBEkdWbEDmiXVoQbq4u8tbDkA47SZ578BQr1sNRw",
  "key12": "EkpusgUuFRtv7btvENo8qTXYDLebjeirTV4cL5GxgyBYfB365BJe2b4A2jShdFwZqXSjHWfkaxp2Uhd9gQWEqLC",
  "key13": "3PE4dLbo4KTrPzQnNhcScYRxbHyy54GiVgWUmp4br83PfELysrTySrZYu2NVatS6akpXgVCaBi6GqhPgGbyw7qDU",
  "key14": "4gzvwdMPwiqtDMje3YthUeM6bp2zNUHyXe6e8g5aubo6zfuktA9KEb3aBovMUVGF5fycVBjyhRinmjAL6QLZqUpL",
  "key15": "51SR5fnvgxqyn6haykMnwMqazJBtRT5vyWJfbD7ARxKjzdgZLPjWJveeFZawB7WBwrJUAFQjiLsPt1FvjfaQ9JR2",
  "key16": "45qu4pzgq8APgRZSQXKSGC9X9ba97NxUpHsUGsCi6zis5gJ6fuqNmN2nEFjQALRMYXcrD7k6AoeKU2fab2DvGZgG",
  "key17": "5mXwJtRDj24377nc9w6REQR7YBh98iaYRtHjc1Rsz4dnyGrgRiwEqQnw8hDCmR9KvWnuNtpF2G7avcmHmFbFJ46q",
  "key18": "5HwoXCJxCYFNSekUbocX2M4tXVN6JbhQqpXT3CG4dzeBUFzdcd1Gu6ppTYY8TCRrQffrJi775XodoYYMy8dp56RJ",
  "key19": "2p7qHYuBs4z47QU34u5sDpCr5bsBZ3ZNDChLfQA4G2jsGQghANJtoGo7VHSM2ANhAbRVACqF3wPXx7YouMpWWSA",
  "key20": "4Smn3PgH4nQ1EujUFG8wLDUhQsTiE8sf8dG4YWtXFwVnnBxtvN5MYeUZqo9WomeJqPW8TKMV2VKNzu2pPGuvzYXN",
  "key21": "UcVLPjrZ4UWyzeSNDByHWE3JLWqDdLVzrY95cYW22XJqBCMtcGmbcrbUUC8ydc1L29Srd8sUoT6fNCMvy88nFjX",
  "key22": "51rXzC8GBQxaZz4ooNXhHegeyeffeZVKqqCZiR1eSoU8c5dDCoUA9gGavAKKXhYtX6g43uUjVT559aY5waQKm8Dd",
  "key23": "5ypt93uJw5R2TYge7xWbYByJrvnaM6m7y4Nd9hMKh3aBiebEcfnmZtwH5Z7DtFxn3t3GkGc5hmBbWUDsZaNXQMgm",
  "key24": "napba6P7pBfXTyWXrmfdrggUdNZwcxB9ztWnkPKaJxzmu319X7MDmLkzQqDAp4ngydPoJoB4mZru6CausuVeBYJ",
  "key25": "5shC7QGigx58Z4Qk7n4wHJHDS76fLSorp83TsFeJj2GjDXota5c2PSbhTPxLqJCr4ZrDZDfzjJ6PqaavJpyanzrS",
  "key26": "3WBqcVj6ATjqzRBbxtQSpbTHLgfWEXg5eThy9JKSgWPd5TJsQ28R1bJTtt7byZGvAFc1yyNDjDzNxSfq3VZUNvX6",
  "key27": "3n22YKjYr2nAFjAaSQwP5L8bmZCukbXvuLMuDoxr4aR3XasUjeGGFBJHUiJYJboXwiRufqy5LfmTnFepGgA724b",
  "key28": "3ZKf4MeG7sf1GDFsKpg1XuQDQUzFGntLjPrk9MAkHdDrTM2mZz48H4DL2HDSPKezAerY7vctBKdzncm3DYc2qcyC"
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
