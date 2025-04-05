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
    "uXQjXSeu1xasggUz25v51QA2LSyoJZ3CG5B5haoLUpmQ5iBHunEQ9sY1KtXABgXUoK4QdPt7ZawC7PtAJj4ByNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyybBYX9KxkXQ5Ljcirw598dhLuTYgr8xVLE6ejv6XYB5EjeDJB5tZarbKDoHCapPzCmF4S8haqP5HNeRMgvCd8",
  "key1": "5uRPuMRQ5bXtqvrvZouFXWMZJPt6jMuSU1RP1SxfPKr6J4MuEi7snq9ja3c63kSgp3AZUuvEJJaTsg7DJcoNdAbK",
  "key2": "2mECG1CN4wGPoLbAUCy5jM2zWNPinhUceCy8u3CbTUd17SjPB6n6ctMKxhcZoSUK5zn42m17QwAqXdYnhvCMnNC3",
  "key3": "znNPbzBkdc9HW23DCKpRLR6GGtPiS68WjkikhRaBcFQKyfXj8sGDBGQ8kJMXSWTc6kEde6mC7B4WvwXAeseQXg6",
  "key4": "57CRVZKBz2JHHWvnwkzw2ZhXSf45WFf7ohMgYwvBMpKhMAeTnAankXy9rMmXrrDz1fhR9wiD9zzybbgrFPUR3R7q",
  "key5": "5FrHPVmUZxH4QGapX1bkuYKZ278UwCT9wCzhEm527QK9hzV2CTp2zfD9sppWba1Zk3cvBH6mi8fq15Jt2kTZFD9J",
  "key6": "4svhr88xsovZ55pibNTpa4N9hyKQzr67zzeeXZjohJLQBvQgPpi3dH1eANAua87i7CX47GW2Kyh52YNG1dEbww7N",
  "key7": "51CxQS5XnjC8jZ3LpWbWaotjQGQjC9NRPh2tgojYgHdfTP7r46uN2oZTzoWmhwNHqKkPHfjcYb8scM1zqaPBRriJ",
  "key8": "5FfQj5H5rUdcC2fGmqqoS2YBmmHhmohZiszvSrnRNmgxVwceQULBDWTwfZfxbp9vry2f6zWdWMVSAtFEocfZLe68",
  "key9": "gxd9S4AWhv7UkzZcPznyr4R937mbETfWVVHgd6aZqbRXxhrppD73vg2KdX3z8j638KxVyTEzrnQqpxhg1eyGyES",
  "key10": "5oEvwSiefHWLYL17Wj7fEk5BGW6jNQLpPiT69zFAhSkJBS2uVT9f2N59MCdzQz1o6oqKNeGYFknn2RiRGgLmXKzA",
  "key11": "2qA4QcG1rkbnHe3xFy7rpkpAaANqSAkJyDjHubPQbFfpb3xsqMGCVBdqWW1MEjUTBe8Z6oiby6mZaZBYNCei8pN",
  "key12": "5EhnmS4aF6RCvMyyXuDiRniHokBnBs6jMBojwbAmqnxh8qCXazrj7emXDZfw9f9zBaGtbRvjFEy93jHrETpAtpkm",
  "key13": "61EjbcRLuM8vvT5b67UnkoXaJnqyttGRb5Qxyu7NkQm2AwZiSGETgkoxhqXE9bjUtp1EooUFUUubXNJVXd4G6VK",
  "key14": "3JUuLcHf1qx1ypM5cdk7JjhiCna4qwEPR7RzdcMm51uz2B2rkbM7w5n8HLggYgZ2ku9xNo5gcuyFAmRAqhRu2cDQ",
  "key15": "5gaSnaPCfX7eg3vY285mR9SVY8zd1oD1xgm5T2hiCDmq428iBinhutrD4csQ6ZWGqFHvC33YQxLNaSgaTXuGXWHq",
  "key16": "5wWRqsSzzyRKCszxf2taA2rBXhsgd6WmZ9CxASbY1atCYoVLrSZHnorq4roKu1QmM9fwCyi9c677gWmUA2mfAke8",
  "key17": "4a33yazCZrX3gqqKmbRi5U2QJSz6w1qwafC6TQiudGFne9JeyfBydiPcgXG95bvZ57XUiKuPtCMvD1Wx28ur9U1d",
  "key18": "vqjpnUSDoWq1RH2keHUCnZ7u3u2F2fYSW5DMvfb6caFgvHrB8riipCPzrMLj5t5EfTafZ4wq3NUbs7Y832ETphM",
  "key19": "5aYrYXXXwqT7onK12eqPgWoC4NadvQmU8wPQLwfQTU4dKTftT3N4wWXTA7mjqTLinrvCxm8AZuppGYzRnzDFMZFg",
  "key20": "isamgJrj9xBBgbhEK3Jg6U7ioBKxs8LkNhp74VgqWkbFEQrxh5yU9a5JnvMRTbooHyDMdubasKSyJMcyCMp7raX",
  "key21": "2xVycJF9ezFbH4MfQyWNHSbhjiedvpBRuEwoUpPBoQFofREqm74BMrTkJShvTvpTyn77Gtrndu4AF4akJCkLVLBX",
  "key22": "4ach1AudJkNw2U1wJTTPDaHAc6wrQ8iDaAHvcJvm9gGLg1rnw7LNRtBNwzW6PDUqwVM3UntLhbqsB6nZs2Z5KprU",
  "key23": "7Vxh1MTMmjXhxek1KQSjVdGyjq9uZwydAhnSRVepVz6pD3iUR83DM7Fa74tYwkDWkHqzQpC5RRTX5kKEgK4LEwm",
  "key24": "4r4cquKv49RmoP1zK9NYp3yHsA7iknxc1TWFEaSR1pHoUN6pbcDvESdFtLHgenGF9K7dqQUF8s3JpjDjjSmhdhLF",
  "key25": "xoffLojuG3jSqMG8E1medN1tTtQUzJgAm4HSFCq2SWMWSfytJnKmLUL8kz2NGBTWboa4CCUCPoykpA2uqwA4rTU",
  "key26": "3J96AWu5QyEJzMyRia9nEZz9HtvBhtMaP1XPiJgWSUWSasp7mrLbqkD3px5hzcAZjMqiQwdKK57wH5EfJ18CEwvV",
  "key27": "5UeWzGNKvXaYjpAcZytAzn5bkTAcQmrf6UiG2idNfcvyKmA5oCBe7uTkxKwu8dytz1Ji5H2CQ8RNJMSerwjB6wP5",
  "key28": "2W5xfiEsoYcEVw5bwkXUdAsGFoKTgkrtQ1Wzq8AXHoP95gC8QJh7Ggg3rXHX4UDpkzmVfGKHgNsQETuxYVpzKjB2",
  "key29": "2trsJttUcbUxdwE9hPSCXNS1TDPyy6Bk8yywsUEMKGvEF4KRBFKDAHSnLZzYUxHPtheEQZw1E1Vb7QnmdRTLQ4zH",
  "key30": "4nFW8PAWXUuQiXydG31qERRp6Ax5xJBhLyWrBx8UBYEyYyjoU7rJ8MiNnVhzwuTSQjRbQ57AecJdTnewBkrR7jLA",
  "key31": "AZREVD9dQDA33UMdkuhrESSMF1rzJHYpMYZ7eLqCs1jusfTRtHT9DdUcGugmVNd3xX842ZGkNQbQuStucA5B9v2",
  "key32": "3uHLu96be5SkgTpjze8Q8iyg1myS5ggaoZU2rsm36hWmapVTogJyPmpb9ax2QwjbwiSvnMKL9MRnMyo9pEjb4rFD",
  "key33": "5dn7FtJZDUM24qXutSUYQCvMcHcuK1kR8yY2YcGe9wEMhCBQKHmgqmCCC3MQX62jxBbyi8f8Ud1QucTgdgdQfgVb",
  "key34": "beJw4zrJf8QAN7LVXMCLit5pUUMJobpDC5GiTMgdphg3hZTk2o1ztF6TKYuHbMDY7gT7qraCTWmowXVsqoUFiaA",
  "key35": "4GmzgachgE8nRzVZs1HbGuAcWizkkYn5Kztmy3sLYvUJM2Y1gLts4RfBwVqYfaMBj88bAtdu19cMN8iMWhuvocDd",
  "key36": "P44otTMMZFjJJx3bJPdor58Gk2t9puT9mTmUd19wE2xZSp7fYy5i2RBp9dE6DvvYzv2LFb8dCo9w6zJPRKJg6n9"
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
