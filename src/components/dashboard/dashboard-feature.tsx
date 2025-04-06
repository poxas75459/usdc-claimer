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
    "4qXKuLFGf9FjFLq99j8e7kJSfmvPbuYJqdiuHccL4EnAgT6jqZeunFAmGsoWUwKHbLVuJnd87rg1EEZmATAg1U6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WBdxss1CcCm3XfZwDKE5jA6FDgv6T6Ncvkq4D4eRCyJVyWa2NParLUY8ouVVoNK8YvyWpRJcnZxJRpmZPiYdjJ",
  "key1": "3JZmZCR8Ax5kHx3kth7mazQeycpGEsdvXYSJGYisLykXiC3EDegtLHdMeAnRCuWTwhgppxWr2dpqZAsSutFaoACy",
  "key2": "xE6pbJhhkhCmTLeZKfRXpGVPUDenFBccqznTzPr2zUSZEKgy3xXtL2pN4BkLPo1vBKDRs2SHk9FkYvrq5BLyuSa",
  "key3": "4B6Pp6FDVCP4TjbejUcuxRkHALXU2Y3oe71DWwT8WB92dbAxYV11jJW8VoUqkvps7cZtKeajXUaJr3xnzeSX4FE",
  "key4": "4pAWYzKY58e46vjTgbs1mtRdaSrdkqANLLiA9VsaoWHZpgP7tdJNXcnM5QZq9N2f7DVBuB7Ek7iKaCRGt3JHreaP",
  "key5": "4B2kTeHtUGaLjbUGKQQ71RJMrvG6BZj8vNkM5mG2JW5XZRZogzzjsC4kbodBdnwqZiPs1Bo6ZiR7vRqhkBGWaL3t",
  "key6": "5AsohGSqMwctzg6yymaVb6HKbLZFWMs8t7EZKq4L1n6PjtJmWRgDQnoUhKkK5ubMW8di78cpAEnkU1ULf1L2dfLz",
  "key7": "4QhNTYLx9xnBhWvUopTXLbw8hXCPwS75Pf7WoJkVajU1VRCPWMYaSUt3Nni8HiDDy4MKLLE3h6ce1g6GxJ4FqjNY",
  "key8": "3Cb55gKngkPjtKfo8G4VWSP74ezsYqNxU6m76BZ6bvDfkDPFJgM3QNj47MyFJG9MSvCAGaBiXf5gE9gHZU3HfjXJ",
  "key9": "3Sa1FvT5oWbWvhDTMiCaJizwUbSptj2VYQk8rF8L8YUqrHy88U7AgAjQzCUBRdmLHf82AGShdsPDsfiwVjeGgAsG",
  "key10": "3kcEJZcPNLN6NMgWFG7rCG6qoMC5JHaiHecqRScw1NqtBxk4zXKxzbV2nKMjfzXH8SsUcJVzo9LXZiYRmDc3ksXA",
  "key11": "4EX7WfigXYifQQqarw8PeCNMbAadjV2aTHSyG8Xgc6ACsaSkyNgi8pxRhfL5ei81e8gkt8FAnwtUEaxyXz3sD6Aq",
  "key12": "5XpVGeG5SZG1sKsXHWwG8QUGxYURxC62tB6Hrug7ZVCR9oQaG6Wjwd6oKUKAvtm348onc6EbfV6sdTk5kcAa6SeS",
  "key13": "4fYbvbGTNwdykYVbLtsTq2NaKBDm5Qx8i9r5kLi51L3v2TQNAxU6dBegqwfKn1npqnSqH6dFGA4g4CWkey8q7HER",
  "key14": "42vo56UQYYzTLxGbTAa5aCfdgvsZuCjMiqXxzBe1rQ6N15v6Bij4qGtBxt73aLc4h3GcZ8wLsP4HQ7A8ymSLr5bD",
  "key15": "5hDRCY7pHRU3ZppQ12XvwFAKxzgRCKCgiKsYxZiaHK3iXTUqqGd4ZQuJHT5MKiELHkWncYhLoCpYtJf5MzmWUyap",
  "key16": "5oDwPMWPHgxVzUYNdCWWTgsMHyhmn3DnQk1dm9Hm4Zs9y82aVspsU9TPbT78NnZ9txNRGNKTu9ixYAsXUUDY3yG3",
  "key17": "4cuoTvCmGUUXfirvjrwAR8BmBTs9i9E6UQquhMThoPg1AfHnfZfaVszom5dPrCzb4pASK1HM7HjWoRYSmx9egBpQ",
  "key18": "3Pi78jUKPcEQQfYG7bFpywEn5vC3G1NmFwE3kzvaXWu9mYDPHML57Gd2bF79m2N6Gt4YAe3nddcsEVDmTmNZncjK",
  "key19": "MS7RjTKfYiQkzQPy6o2GWMjNEm8bUBiKJEEnEVAHMe7uxPcXmcrVRxNhADs45ZqrTTgWh8ecrNGzazs2snVJQfE",
  "key20": "2kZtZHwwu4wPMcymFbsS1pUYuh2AqB9L4sypYnLGafrrVCX98PTQXmucfxHMCeckYLLDem3RKPai1kdKCj46Jp9V",
  "key21": "3pNUZ9G77FrZjtzbWnd84wvvuctpjKquUs1mtP6VdGeBu1DZ8pffsX7BbLDs1L2vJXndEgu3QJn4eG7budf7stE2",
  "key22": "39tzYBUpmr3jCT4cAZKWh5YHcoKgcjNCtL9kx7hySDqDSJxKXNnVvo1JVDUNMu1jQeqpQFrraXS9SoHW6imPtHpf",
  "key23": "5hqq3SdFBed4Q6jxvdQrGup9cAuGhoCYCtLnmckKuVqQ5NpiRiUDpkseDWRHrHY83T6yq4mcWG9Sa7WbHvuoexxn",
  "key24": "4hqPXdM9zF7aQ5sX2qmh6t1QPJ42EMfnQHk1L6JhkHQK5xzYextKdTfhxGiMgr6ZGs1DG8sU6YGebeTQLBjSe9S7",
  "key25": "nFs84QyqxAAXucbiSFRREkbHTAfiHJXdUDGJJgqD86ZH8qkQ6g78FBXuC8YV46BpCi8bkvqLFunnA4NcmyENbRS",
  "key26": "5pAZDgfGSue4mBH4xDmS9b4GDJ3sZP5LJGLVjtvgn1Z9T5uuSG1wPpkLdk3WssgJZkWbU7y7sAEMazjd7K9Npigk",
  "key27": "5y5xkU3zN4dr2mEWdRfoz2ZLoqHKN8iMm8p52y5MtPd84v7LXLt3nFY8DwrzfvvYC1e72KfDgxWXVWkrx3Tq4Bot",
  "key28": "65iu7AzD3GCFEHcRCGCXHtSmY18WTvgXmyDFpG99Z54QJ4Bg2UmnPtusa93z3ei2hewDDmuUzKzgK2CcyuPx7w8g",
  "key29": "4hzJ8DC1Xek5x7V7QubJXFJwRCzxmoEpfNq2k2N8FCjDSSQUcVxwYUkp77VviTgnE8umD2tpRNSHfNjqx2aYeohz",
  "key30": "5TLfTXoHwhRzWJxKZwZoAzxTZDcwBjLgCKFAAzUEYimv1io4FsuVQDUDiD5tgnQxWkCJdwcRMrmkUGJ8qZLRb3fy"
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
