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
    "3QLeg1EK4oBUDWsTQnLWqpPjUCpmU1SxazEnFt1HWHtheMfRVAVea7gz5oZQSc8wG1Jz5oQXV56EmkLzw9AcKVFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nU89Yej6xd3Ybvw1Ls6MJbHcghuLPiFWCAycMNxzEannSdFbSKAyLUzY28wCTr38HaDuRzDt6jpE7S8z1BYeXjn",
  "key1": "44hiiU6kNbpfSYgTkQDZcjeNHMdSJPgEt2TePxk2B9jrRLu4LcCEQEoxdfrxbZrx7RMaaNWaofDgjiXAp94gLyNY",
  "key2": "3Z9nwJcnMYMxX4JbcvkjdDPcs15G6MXLRGAr17dF2H5jG9zCrttf2PA35qQp6hJau5GDoYdRUZGUHtAZCcw26LRf",
  "key3": "5TjkyZicvgW1WipqrZeXnbbMc6PkdNGjwqusufd6xhfnGk9h3hkkYX62qVEubBmKmZFsSvVwaGF7rgAq6BFxnoL6",
  "key4": "4Bge8KT3qUN2uhKUEwPpPg6HRrpKa5tnGzLyJCdwkACchBSbusY1Lyvaiy3upNDp1HbeTvYNBcdeTF8LxCCbjRfG",
  "key5": "4oJg1M7KcydPZwgyfW2UpPVEziLT1B8ZhbR8QMBrCEtffoDkNHtsCZtBpBLBiEMAZw8WZ5wYxJi7J2PeefWzfNvs",
  "key6": "2cRuajqjdGWaYMBGmt7NzNkrNJNJP8Jk6xydPt29nCsxd9XGfLqd7YfsWPx871tz4sTYvfnnnhaSBCgkLmQB9HCy",
  "key7": "5tZ6aLD6A3oRp17MaFV3gBBWKq1x2uiVZ23iN2MKJPKqzUP7PFGoHkV6PNdmNFxnhzHBAQMq5p7sh6mic3az8KZT",
  "key8": "5HmR4rv3NyoBKPfKbdfgtJ3c25YtRCkEtwJknGKEVASLfzR57YVUvH1TL5YiNmPwUZ1HRr5vVBZN7GHmAgCTKwWA",
  "key9": "pp5uDJ7H6CpTEpzh6NgaYT1WmeUhtBrJBQfDfhK1fqH88kTjFTH3qLhCZ9ECYjySvbXHpy1CiJzSMAUW2VCiq6t",
  "key10": "3gEcMT4DwEtcaHc2NcoExPdt8P4axUCPv8VPv8zpaXaHds7fArjADjjbnsW6DUvNbGfzzwDXvmnqzbSKHhTP5LAh",
  "key11": "2TbSFaR94ku2q16MdEwKo3k2MPSYSBN71YSKScEW2var8qMBagVEsRoyeMSSTkkturjYaiUaW6paBS36V71ZHABq",
  "key12": "2Sssv8QKWz18mY1NQTEq4hQ8PijXW3fRKywU786bii9etxTj2BLooyyhgtFvjh44NDcnhggFBkqy7PkGUwEYxL4L",
  "key13": "MJA3Et71dszWsubgGEUzcYs1vYkHX6W3Gtp1xeYhaasaxksHp6m9VnFJH5Zphjr1KRpk5DdTgySZm6WsTHKhqTk",
  "key14": "5tPETQS9fD2pncj2yevovfQyHAbYgJPbnLr3VbybMYMXQth2zNsu6UCDYmZKPQRguqfQBhWZKnbDNs1eWsKc3c6g",
  "key15": "4rjot9iVZedr4s8D6CoES5GPYQQ3MsURdTUgDs5CMtZuMX1ZcVimk4GnFA3v7YC5dfM6WPKmPgwQZzjqG39YHRt5",
  "key16": "66Yy8Q4YNWg1w3QP2KyPVjBEEoYHj5mEzek4JNqJtTowL8CV9ereCeGr5RoMtwepCgLxmJ9dzWGeuGG7HXy9noAt",
  "key17": "2C2RWzPWhMECgqJ3gnFpNNr3KhpbqSfNZKPjqk1uDm13NNc4oEc3b9hC1op7QssYw7sFCquhC24FxaiyCBBXPT2E",
  "key18": "5WSUvCYGizkooJBwZpWwAtPB3TiNQkmuvb7SwymnKBnXwkewWdbqVVmWVwHy2mhqLQGaHfcdQkeDMQc7eF7U8gBA",
  "key19": "211ESb72eeTZ4Xic1mnZycXrphQ65mSWRCRQ942eGUdqpweufad6pWxGnd5xWMW28qdn5RUWduynMCScSwrPr53R",
  "key20": "2gz35Wz4rcr5q4aa5WPWkLthqbn4nkicnwtEhjhu1EX6SwJHDsgKptoMf72YM7E4mP9dTb81XNBNFWREDDJSaSUB",
  "key21": "T9D6kRvNzXC3c1TUjGBDdnCWm3dNsp7fgDbrxH79DxH6RE2jvPNBiDbgWxURmTti1GkeE1zqqSGtXT21vC1HNJL",
  "key22": "5NtKEDAqKpBc6mcgkrdu15286Ut3GK9vPv81f3XKwLyjjBtdQwqUipg1tcEgxkikFF98Ru29LanvsLyyXAmjRWMj",
  "key23": "5kBDkFpmGDmBink76iM4Fd4tt3YvVahYqKBLUzq3zcxxUi252iqstK67scd3TF2xx9hLddjs8tfrcTcpZiKGCPwV",
  "key24": "4S71bqdLTRLmcPqV5w6FFBNbDzaUwgXsGxuboGzXbbWoNKkpmrVnKMJeZ7JQXMhfqwQ1dFLwA1xYCDaj6JeGUzkr",
  "key25": "3avVGHrsVMa3pVwXrZBJoFcRqpNtWzqZAs58KujNX3Pa9TL51U5dX4kqz7xrS6Aeo8NxXwTXmMoWdALY5aaReEBb",
  "key26": "45hTmR4suLuWyFQtZKRWThTRtiuoRYMsR7EdErJXAenR3zx6g6rDwUCTfUgsb1dLpibzbXRUXQGP9czpnzhAkWWL",
  "key27": "2A45y13oumA1QkirosFs3Ff9DzbGMZzWp5Totn2gBgCDabUvzq1SBCEtiSw3z5LZQjpbeKboLAG1voCEyfhCFKAQ"
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
