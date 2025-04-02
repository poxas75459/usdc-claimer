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
    "3VN4onW59QG3uSefD9q4F4fVHmNUJAxT3rZbmzaNLKkMwCNc1WRpKj4f5qGE1J2G7nvAP1pB7Fxnd26XTd5QohGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmmFLU6gDgTPF9zT2Vi2APkrLeju6nnCy739QDQSsz2oXHQYSUVgMwGsMgUruFZCE4ekiAGwHeG2MZQeXPPWZik",
  "key1": "4nqL7KDyBgjhHefxhwZna6HZ7KYYcuXL2ETb64NmdKZRKZE2iM8Cg6izPokLNUthGCYyKw6Vq3yqp91u6xpR5Qcm",
  "key2": "4JYXxets7Dg1i6BmUEFB2LKLhnzbxZqjUmeMkzNc1f63tXXUEi6JQqsE1QnZZi6S23RCdRUoA7VUV5DLqjSesoL7",
  "key3": "5HrC6QSn9Yz6Luo7VtZPNUh9iM8xeyBk92vVJEKvbCiT91X2PHWA3cg7F75fyWNKAzFPjnVyPEEM491KgdGrpbc1",
  "key4": "5p4yU7Tqkqwy2yZ3czUE3LgDmvfugZgggaCtbhTf35Zr9YNAz7ctN8ubW8ctBY25AFLTjAWy1HGCSqsn6okgP5Gx",
  "key5": "YHXmjSd3gTLVUW8phpYVVp7CUiVAKoVKY5QQgHTidWfj9en6XsE1kdMGrekPmCMAjHTTtT2VbNDFWEZMh4Fw4W3",
  "key6": "8EpSKowivv4GmgPtyEZUsY94x7cNKpY7vFTMJra1yb5qGMifvErdXJV5Paj84CyptjqLXgzH8QUCkf2GtAix8iT",
  "key7": "3YE1P2q47r9QapjHDVBxL99WQqC6AWeK83AVPRr71cEDQ9w37eyCT2jHUYigziP2mRaktdRjZ4smA1bGfuS1t9pT",
  "key8": "4oXAaFpY41Ebw1eoAPkpYyEP4XCC6BqCXsBtnESRavD6m9DrVztCNfZcUY5HCsxHS2QEcFgLE1QbfitsCvdn4p8P",
  "key9": "3KZAVhGAhqcMmwaxvCbgrTrmEfHQDk2kt6ug75GvSV73EZFDQWmkYN5NYX3k9QAuSUmhuJ8sGKVEkQzWfC7FFQwx",
  "key10": "3X6ujzKtHbNRMqQnrRwu1dqUqUQrkt1UG7XkNSNyQRN3RLYRWgYqdNtjsWtV2DZz5RX98zEFPecp7NxKhVmrGjjg",
  "key11": "M5nukLbm4oAtDYmMKxqrhhNTg14P2d4U5XBxJa5kEwbK9rNFgrwq9eaLjQDM58vidrvMGbrh5wBDmyidU7RnnBJ",
  "key12": "iXsPBizaVYiXqEeKKq4dxcN2wT8NKiDqGQQ8V84A8SUtomG4JD8NrB1UjSzNBPQ9EukyW2dfeRtvcVMEVH3mvtL",
  "key13": "3o7LXdKmXk17nxGmtVGG4M8vqv9T93ZTNGZPLTT9egU9VbKWeMaCwTpun8haa1iWchikRCb7d3N5TkMzdDs9A2Wy",
  "key14": "5oxtjcnvQgGG76YRWBYU6vS1jTg6PGAZJrfVbn9eg8J8fpmt1t7aV7jGKE5CGmFahkhpHqDyYWcQscpF8dq43vUo",
  "key15": "2HEVBWeKjAb8cNkLLxcaLqtDfGECDCboy4eri2MbwrqpP6RMDWN8ctSX2wG5ed3s7USgfq2PQU8NB6T4cipDzZ7y",
  "key16": "47uLpmcAuDKTLr7d1ATza5wCweyPG2BJFENZTijSmPcFFJnQzWvgEyf4Ytzb7oSLWX81tBDS7fcekDtW4Xh33uam",
  "key17": "2UpQGUdYEftjB5FZFNBpVAiMZvwXxLsjeRn6q1Kcmy54BpDtPV6K9j7NVFJL5FcLMtwcnNHZa3PbefpifnFVhEYv",
  "key18": "4i2mP8LUkpuvr7V7hz6V13cr5ce2NUoe9DfosqKBrLDLCpXzDaYpmn4ECrNvjepiLYq5ku32JutNG8whdHbgLr3u",
  "key19": "6EtYGrk6NjWCh3Sfe3MeHfLQf3je4kGec8k1S3ozQy3pKZXttGVqrzXGX8DfGjvSetL3N5kj6MDCriakiMTnb3V",
  "key20": "2ssYg195ebTiXFiwh13KceEsobJimA9LdugR82qNjAzaDgTQ4rxgJbD9moU38czaLegmpYHkioFb4emHzMNaLdb5",
  "key21": "rL3HVq5R5rAKFSmj4uXsoTy1DwpRfB17GQGKeho6q2Uc7qmRuu5kfn6hLWK1tGcZjggXGeRaRMqz9Ff4yiw3V35",
  "key22": "3BE9SvjRCntCjjG2zqJwjAvmCdodsswrYQn1isjNoLDCTP9WQFaY9fYNJngj6cSLhazve5H8tWvN18wicwomwLPw",
  "key23": "4G2vonkd8XBmSzii7M1afuuhtMNPP6JSepzbxsD7ixGj16hmd6WaTijEunMBW7eiNubdoa544taAzAhwaxDKNWUe",
  "key24": "2PEEERe26Nj9EoufbWgig8aBtnNAi9CS8pfYpgbdydKZ7Do3J2ogXgsNLBtY5g7MqawShHYXuFFzC9Fr48XkvWSq",
  "key25": "GzHeTBBDeMtPRn6uHSaEDa18kcpLdRAoHpt2LdXmrz3n4xSmExXvpVvB6jjXRLWoVt7KLWcJ6BsuYWfqeCrcKpk",
  "key26": "ndj51A98455KLnkojQDTTno98ny3f1CBGtt29EGwWXN6EpLt83hXj4hhdSPtkPsKi6Wxpp8VxacZ9NPGSPc1g65",
  "key27": "2cZbQoPW5LhXHrem2odZfh2a3gjhJ48LVdprFo6NsMRiJTnQWQcoVGQk8sbVxiGh3mjhDD5rLwHs7L4uQ9wAEE7p",
  "key28": "4QExcifz67RjozNwU7anvJg8YHibnvS8NyZGXQdLTGxWW9nurTNCr2KALhnXnpjBeXzNx8LmgTyppsWbbGTjjcDC",
  "key29": "zfXzDH6eVzcMxcHKvNCx73WoiopzU6rxxnY5FGvJ26tUC1kQ6wyqwWfkRwzDEVvGY5aRP2k1oNRx7BZ6gqfSzPr",
  "key30": "5D218xmCMHuxCJ3ZRn5QgPV9et66VxUps9tfHTPSWJRQFfjGDxnBD28ELQpyct48nZ8PbGdcgdstFUywmwDXTW3T",
  "key31": "23i5FqEFPkZ9RGtvfMUhqV7M3f2HG43WLWGtWWKaDRiZgqhZtdjWoptEcQktafhUNbyHALRfCCnHefQDS7CmTeKB",
  "key32": "45Ab3PYkUGve2tHU2d5i2LSgUGS7LBg6VWdATtPZFaUYgxmkCheKcqXKUccqLHGizFoMN5hSri8cqiribpwu1Vz3",
  "key33": "o3XtYcmqtUKiP5RCkodDaEXMwVhnfURv6GG8fJ2cDuP3ZGLmawJLurTeDrtphJxZZdDKdLuPyxJi1ubkdFWkf5R",
  "key34": "2nJgfehyS2tAVBqVEa7yEWxtMMpAXSxiBa5B4GagggvyhX6mMLAPEGpzkdXc91XzkG1RHJJJYftdzqBHW14pDmhT",
  "key35": "4Gcf9MVtCDc62HeiBFbK6nddcv8EkosCyt1d4FsGT1ewZV9eoCjjnGAKGDVbB5MW169QFJrW5x5ATFtn3RvKoRto",
  "key36": "3FUFNzcYyWP67mjD5vbXZoS9C97FpxY9pBGiFiL1cnKNwGPXpmRjjBdBq6uK9ZYvfFcGU7QvzMtrfPQ1RCVhzXyQ",
  "key37": "3Z39cz91nZgN8WKyseh1QjPVsTQ3VUw7KsMigxNj8Rnria8YcJnEr7nWhd2MPNMdcr8ckjeidJkKrAVf4FcGMG4n",
  "key38": "2qkbyv3Kc3oBotyJWZbyEWEgQq93Sa75WpMa2WTcHJPHmyHduXSEXuUVQSDvQ9hSMmVektYfCx4cvxKPa3wbd9M2",
  "key39": "aneUYpLkBakGuoKjZa5ar5AgEv4zejwfvYTRV1NvCFsP8MmBKUvb4xp2vTBaWGcQS1shfFpkBhgaPqbfLMhaMzP",
  "key40": "64en5mDZY1Vi7P39s96KMDgDqRdDUQrQg5utDf8L7DR2QhBT1VTm3HmnbgZGy1S2RG1gYk1YK5LmedpbLviPbQ5E",
  "key41": "227TtBjKZTuKVWu5JZkjzA8fZcTp7LQg9avAPyJvNTV3iSv4fU4YZX2UWa7bEz9WRMYabcsfvEnxor7d4AUXpnso",
  "key42": "5tvR2oKcTE93vYJDTYLK9RoEMQDWbzxtVEZzgtFiCj7xKkkWmsEC2BhL2Gti9W8s8dvksPozuwyYeB9tzPB8EEUM"
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
