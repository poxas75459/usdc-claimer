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
    "eDfRMxeeTcgRjAoUm6waRogSSoY1uiPqjwQH3hSWeJrvQP6Fye2PVmGER9T7BFH6zjnJGsZd1n2JthCbwa7fGaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmvfLkERjHGLX4gYt9GAPkfCjVjp9eJFgtJ83MiTtZDijF8bE2oLvGXwctyNbuCyWUWCYPTYNoPJTejdtbJisQZ",
  "key1": "55Gn7QoWqoEFWcZFyv5HKdJMMadYjansXhytkBx8cKxE9z9fPHkG8uPdfeVN29YnyojCF3STbvqB2e2cWsDra8C3",
  "key2": "5msiRgJT4GFV1Y3668pmB5Kq6Fccg3hfLs6ara35oTze2fqxF4zt9dopCkwF9Xg3QMentDxgHJgygL1hyK1qk6aX",
  "key3": "2pX7wZSSEJspoFFDn8zxVDQaiRw8qeodXCP17Trd3qxRwDtYL9bDEybHaALHKtjL7mHgvDZLqYXbFjLYy4HyJkhT",
  "key4": "5kNrUAwWfwKYJRNvW78vx9on4sBH6uzUxeHDL72SRuMdsMLZoScWMgmQUCMc9n3yUva8baZzmAYe2TFtfAq2ujry",
  "key5": "4qAHCJVRcWgBhWUhJsRHjbAkphbrsHgN1cat9mzC3tmQ1FShHcL2CoDTxJUQurTqk2fZBtDJ7KhcwM2iVhDTvkSv",
  "key6": "2Ym7t1tjMBjN6s7NkHwicb4Bac2vnjfBdejK5At9oM8KHZ6Giz2bmqAX7sE3sgJzt6z97ibx6zU89bq2fpM1H9Jc",
  "key7": "5sqGGJ9kDie133yNFmEjR7wGaiNevMCqgBizVUYNaJbooU8mRDyebRtk9CmRkSv8u8zCjuqirpgzZfLbNB27UfyJ",
  "key8": "dqxL9JeTRDZBWmmuPNdkJXsKZV4BVVTJCfSSokKrKmq9xLbhy7DXrTQL4efSyJfLXiWPQieXZfUvuqXNR3nM7zy",
  "key9": "8WwV3urKirSa7mzhmx9QmUbT1x1BJ5uX2qEBAF8tECCsXa1GtgMhmksEn2ea25LpNNdoXD9hbTWC4sEtX9548S1",
  "key10": "rqKW3xWi3WeB5emCP5jEcTmnazXfQwQD8X7o2SgDZdasdZtsZvxJ65tba1ceBhda2G1ANrAiQr6icY9A46Lim8k",
  "key11": "44PezEzUPzw23Q8ifnAJTw4zSdJfjaBBTL49upWBMmwSPQjNK5pxZyw7EUEaSipghgxBjEwP4RCVWTsmMTukFneW",
  "key12": "4w7f1H6BGrVw7cbcQKgAcc4SUWfMYBpf2PR6wGy8AcEtLS3biwSWgd8PPPXGqNHgyALBg5oVUdt7rTDuwvXKnTLA",
  "key13": "4ZgDHsb1H89nXThUAR7oqSzgEgBTTfMuL2hTRy1FLXQB2q6dvRwEA5azbxNsiEcBhAZhRzScrmRzqnMw7MDRNBge",
  "key14": "54booYtgG3JXwVRc6zotScdADwEYxxBrBsLGcZhVJ8i9zfNMFuLuU2mutZ7ZHskXtcAfQ6vgxn1YCKhqTn1pDT3e",
  "key15": "5newwj4dQGTLb5Eh6YnmtU3KJAs76Qh6rf8zdhUoNMw5LcTzfY9hXNAgpS9Cw1oVXjsEff2pVwfvQb7ro8vV9Mog",
  "key16": "34QgGZiCPKMZKYvMkFFijZDJYbUThw3anxpa5wwcSW2jui6ie4MRXvtiURFAe57WBSj3qRP7NqpSe53wAvWCj2po",
  "key17": "3J3LUpshSpdPhBLr1V55HT7eSP7MTrBiDimitnU5k6UqFvLZ4yqSqETff4VVxNMMk4FdB87xAttundkGbMNDAUdL",
  "key18": "37s9V2gpF6hyJrkT9PW8hFpuobqA1QmtGLoDR8qjHydcJqZW9NcSK6cJmD4txNv26bxxcH3qXHoMV1ggibZteoea",
  "key19": "3BiSZs5uhMkchTXuequhfkJ3zCDqvfKgWpWSjqfYTrUi8Sn6zrBkbeCpumujveSxhRhRE2ug9jMzo24utUH3z5JH",
  "key20": "2hUrPqyAVXnNKgYbYrC2oxjmhqk4YPeGNdr9g376xY52M6UtwQo6oLJdwwQq7PkREoBxzM2hgrGboEnsSUCyMQKs",
  "key21": "4c47yvS2GyQoJub2pdawVpAZTNC1G6gQLrVzcstMnbj9ae68s6LpDoQhEWGRqRFNQAZryKPvdZFYVQowx9DMtvQc",
  "key22": "4tK56xNvbcxCUJxnzwBmXfLF1g3T21brk2jMTVrMy5U1TWvpQmdqA8BHk19qHG5bHH5iGiz1NDsquPJ9JNVtWAdS",
  "key23": "3HtGxdZxksJETQFpagKvLe4zYSbMABwDvES7WKXAChaNdTsqSZQmQ1YpQCYKNaAxtqTTHfYrWu54Nqn1TL5qkNu1",
  "key24": "3KtCBAGdHn3stA5voYM3PTG4YAL5mg8e1NB2ULL956PyAB9fXN5xJVEbw5PtwWBYv1FctkdiXk8p73GQp1L1meH9",
  "key25": "3V9nduzTHAFP1uiGJXankD433MnbGgTXRW1FThVzafqQ62jzXs1s8sH1rwB54Y3BA3zAf8mY2ro7P2cymwixmHoV",
  "key26": "4B52Jpy7zXFUPXbnY7nQrX4gHB4W3RjoiHLz6NSFFfEPdxxx97AEUarXz8dohPvQZcyNv1xb1WWeeaTzjYXPQSmC",
  "key27": "WF6BR9uyjp1r9hD1caZMetwxpeFGKHeGsvDAqr4tvYvJwFy8LCv9mX7AAMBvW6sEGRjznvNCK36L55aSeQjctsU",
  "key28": "z3c7jEScgf7vyF3vNvmyJgHBRy9aCJKyYjxaoNW4rL82WeW2PEa419EocSnr2cWCHmBT6sjwUivUhwfmct21VPg",
  "key29": "4RrfNwd8QTPkzGJem6SxaAZ7ZZRZDDrJUBWsrR3nu8Q8styZCzNhXKfQgBrpdWGNVpLbzycc7KX27iCwzTo9BA6A",
  "key30": "2NLwVGzLEfZJa99Ze8RR6tcEbFZ454dpc8btazBncVmWzaqpqLPw1ZNGUoj8SaNLK3Cf2wTFYnawjgsLKDLHPWbb",
  "key31": "2yA9VWwrk9G8ePLRBS63ncJGJXomPiVuTYiVGA8Ee6QY8FiTvgf9gLp5eSTUpBqpdxMrV9tp46VLKfgPP7tGSSzb",
  "key32": "2x8qNAtBbeyY77Xr5ffYSfphgV864XnJ3TAv6Wji2kFXK6zNyeAmEZ7aqiw5ERTxgizX7AQNFptvy4KxTdhTL3Gr",
  "key33": "QM1NRiCXttHCiXLRiqebEbVoKKSRwogGjBTTbus2jUmPeEPFmPsReRVqMadYJLk8ZrUCmq4NUQxALSTkLVmooL2",
  "key34": "3ATiPESyyatrbZBpUYa65cKwm17nPLD34me9iaZu38y27YHeY4mHkDqhV68jGPg4g4N7YJFxzKrd8T2paAhUkM2W",
  "key35": "5wNt3Eo99vakz1K4EMzr3jd8t2v9ujbxZeHUpXvTdxeE1EGgQLg9vGHbYbCKvRjazHnzVqobsnvHroVyuj5GP22n",
  "key36": "U2B32pPz6gGWfvMZTDZWRhsyR7MSwRBHvJnZxzBrF5HJQCjxuxZLYYBPw1BXiECwDTahq9drH2byDAw5WReqdgj",
  "key37": "5Jyuic6sjLmLBZNzcGz6ERNU2qMcH91R5spw6rjW7pvSaZ12jmbjyXe7rZA9CFPj2dwcMiSivf2JniXZqeyDVRSe",
  "key38": "4rLcBM4QT9sGXsjvkZjkR7xvinQEbyoDtEXCf8WXcKTvyGERfZfvWKFCLWM4sv9RimRjySwXxtMkR4cQAU2GqBUK"
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
