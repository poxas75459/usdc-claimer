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
    "4xe92PandomAAeVcGg43uFwjJjBnn87TpLmCHXgpXCq2NtxxhpMtjRe7mCEon1CpqoxwUuGxMx3H8cxp9wuJBMdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NWbFk2hCsQoFqxHRkzwhh3CW3ZXG7LcnVbAvmtxaTHrCQant7kbHx6eXqV8F75GDLRsCUJpLiisUnjudecEGmem",
  "key1": "4XpfCvH3nK18hUknaVSED7RB3N3CczAY9ygSYa5w4K6wie7U89VerVUj5Akc9sWsFcnTJxgQn1KZqvQ6hekt5QVi",
  "key2": "RS7q8ZWYwfZe6chFcMgVifSTzJqqeNJ9MQ2ixW8PrCKsn5rLuMtVR1KydWf55AubYUvioQ1JJTip2u57rw7TQbx",
  "key3": "3vS7VHqqCCyeNGQ5mcpsChK1JYKnKv3LMWeXZogL5g6GQoetBSUuESr5U2wpXWAeXoo4YiTbyrmZKam8wHhFJ3RR",
  "key4": "3Fv5UwnreMWSh11XWG7Dd3RYw3H4VjBfXvdYL2HvdVuNNxVf8vjEy65kdJ1S15t5hVXBdHaaXwX91kN2NwGFtu5U",
  "key5": "3HaoWXcudxKvZ6hvvGpbnvQGBs5mZPogDNH7VbMCDgc6XSo9JQxELHYwwS1YMJ6REkmMHtEzBowei4S1nMoBDbec",
  "key6": "2b3w2QgkQ1VmDvS7Csd4GPbC1J1jgFsPendcVepApzkyqQcbMYwC5CqRfZJQdkQU9F2jyBSzxTFu6iSsYBkj6Yqm",
  "key7": "WLCnuev2vegebuKPwfSBw2EK9MLjpLqsp1Y9QM9sparK8XugsyzXGP7c1P18kqmu6R2uFKCTAxRxgXacKn12YLE",
  "key8": "3Fad8Hti6LcGzsHxYLN8mBRpdEBga3qfmtY99wJVvTrFLz8Aiak9zr9RCjJwznAckjbErNKRy3nAKnJ7EdZQEKqa",
  "key9": "cD56M2Pwsp7bH3UxxKm9k3JY8EfLzX9opPCmNLRBweHK6UHcFRQ77GDW6v5NjErbUG5FSXB9rgV1oWTbEQaM1Eb",
  "key10": "5S5HA8Ct5ssDqUT5Z25u36azmui5WBKifnAsS19bPYGBYimf6LXKt2wCSi7YznjzfqzDLAkPDzQL38Hzdtp1ev9",
  "key11": "4aGvyJ37ZEvojkMDsmyo1Eukkq3zw5r3XTaqTD9YcYeNrGSEh3ZAANvFwC33r6CTVgrdUdS7jN6UjCFjBtpQVtvE",
  "key12": "5ptspbGQzqgcSWKkBJCNLtzSoiqVGxkr7od48u4jXRSTbeHwRCeKcMqsE2JzYJjMYXJQRwiKkpUSj5eMXiqCYt45",
  "key13": "5vtupceEDXpxDxJt7WbAHvtgg7bJYjsEThMT7NZWeN5bbFgP4X6gxGn9LuxWcpUaw3idDbhyVpnMoG4DUAzE1xBF",
  "key14": "4nobK9YCRVevS1vsyCau2uaDzB4xcHcAW7Q4vnAJBvoX37Pd4oTLgRMtEypfCRXURb6UCZ2qPU1XoWtSsQRiDYn8",
  "key15": "3DZNisFKffstyAntxNdwc5D9FXsr13ByFEViDL8PPCHSmi7oJBVwvPz74HocVTnzQYH8aP8pUYtAm63qdVfm7EHn",
  "key16": "4iE5rntCCXrJgauif3zGHdidyXeT3j1bCjDS7joz1qvBAj5ytLv7YS7oWYsBBVj2ufrPcdcF3hN6zEdJKFdwakR1",
  "key17": "4fb2UPB7ZNZPUg7Kq9ZYYCyoNeME6oNm6Zc56L1EWShRVikLfmHZShFTSkxFypQxXiA1kLXFgkGCaNL12PezjifM",
  "key18": "5rKszDRMxYfAet3W3cgNg3FfdcwvXwWhSX8RtZz2MeHnEGjjxneRdiTh3GHYKebkVGpvXWer5kQF22yaeMDKKX33",
  "key19": "2VvRudkWbDirgnfjzRGYz244Cs6pCy4f2bUkTSSUsVQaJAks54Uzj1z3FNWc4uNEnL6721yzqARk9AgLNxcB8SZ",
  "key20": "5Lh6ivqixMrYK84v2R9VsyTMVJDzN8HVkmXtfBUbr5ZJk1VmfjePCkdXd3PbX7mYMXnEANUr8zNnm97wXqNEkhGj",
  "key21": "4n1u9CZfcsY6b4G2u3y8BQTSy54kB3H4iuBRof6X1LceEYDUHLfs8bT5hs25G6JQzdESgqCPCAfgmqaZStE9Mc7w",
  "key22": "ucihEtUeFWDpQs2Z1kxFJXfp3sAb6vEbq1PLqsXMsK7qygsHdbKW4Beg85Ypt3HFhyUBrAWNwTfZ32DPteAiN33",
  "key23": "44S4ejARs2r7BLmbDVwXznjCSzDctFzdhuqS5VMbufNQDaQwo5xkuK3nwHoaGRGdbUETM9BnjCh4Q2NeWr9Bo3Qn",
  "key24": "4kKBURMxE5EvXfiAJgCWW9E1S2bPZNErrCPv3FTVwYZxhad29p8uRvucx2wFuGYvUyCBq3mbJ4dFtEChgpsubNFK",
  "key25": "QfgwmWmetmqQo8GX1ehStbdXEQbZaDvKnyQXNULk1tgJc5BwiRtczd9mRTwvUeMA4opcdo6QuRkP4tNXmj32vi6",
  "key26": "4BS2hn4ckWKwXeuwcoRoZamAqMBBuMZ8rneJprx8xJ8r2hYBoXzRzxEAqfzmQtticqswVp9vCWbpajE9Ze9pZK1G",
  "key27": "2FZWzPixagJMkQuHiCSo5VHExefBtzxyyxwkbnejiDZse9z4y4FEnJ4Nhpo1FwV2bBprcym5rALvYcHmfN2qXHpb",
  "key28": "5mNZrdwTUMKSvytvQV6eGMRzyC9MyBRZ4DLMZdRkSnms4gAQ13pR1JpTkuqNj1evHrtEdVFrLw5SLeu4K6DymG7L",
  "key29": "5j4XbwK7TwcA7WSNGaCTaVcPNwmC7YyeT6S6CfGDFDvpup5zSwxJRyTBXmmBTtdyxC6AMGSX7cvNm1oBnsRCjJ3X",
  "key30": "4rhTztdBNCMTHQ762McPdKsFbbacKCdZTJfZvrNdF96wfmeGh9cPv4Q5zKs6rhvufzVXkEr48m8bMNYaufYAY94e",
  "key31": "3NLYxEyuwGYbEduotvRQ6m7WYnDptvzq1hfYgHtdBqNUgskPXiGdop132x38w6bszVFCQPXuxLvEXFXXFS3q4pBn",
  "key32": "3DPmeyVodXEv7rLr9wLRsoSZsEPzaYNMztYPdkYi86Ch4TWpT4AKKTLmn6waAd41h3T6s5rJwjrGiYrYRqgqM7ME"
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
