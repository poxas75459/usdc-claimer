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
    "556dgj4jMRcZ2qkReJF3biiGNo1i17UxZzvMtPmXi3wWdCnzLgmLz36z173GC9w6jQU413M5hAVM1cPvXuM6MCqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uX5YY6UbWommheTy6UKKJ96i8EmqDmU8yMsi3LMUDvt4z2yvLX6Muei3G6rwXN73RT3Vk8jxXnLYpU8a6TeU6MQ",
  "key1": "5xsP9WBwzDuysrVr7zeCntRoA9LBDyaQhBm4HrxkpxYveCtv2YbeTLskF9LxSRHNQ3mVnaxxsME3BGwVQQ7b26nt",
  "key2": "3sn78eKx2VjKfPU1NThpAyE9ZUB4bynLf8DvdJX6Sd2Pwa9447eJeTXhQE13tD8CUSCkU5Mzmp4rYEt2Akr5z4wW",
  "key3": "33yXCjPppJg8cffP3RTuukCkvfCyFUmQ25EAHGSSaKwBsnDEDvTxowEowNFNhtoxkbv7Q5K1r8cwhArbnoHwSnw4",
  "key4": "3LfT6wPVuSuZjcg1p23DP7yaou3iKEVfmEBS5ej8uUwsgKYi22SahHca1bk5H9bNuQy5kFD1NNUDoJdjuJqMDVky",
  "key5": "3GWkmkpdbodoPPaK6mJ33We1Dn3e6Bm53ocuJNA414XxD8n81aoVwDEbmhk7qyUkVHjXw3F3EDGreF5gK3nMHbK8",
  "key6": "PhdjwM21WSWH2Rp3H648T15ivCFAwEd2vZRVWH8oP3bt6tyPrvY7EdRuCYyJE8sZdJEXSEwsLLzaps48eM82MTT",
  "key7": "5EKLpLXB8zrxf9agfnQKBjTeYxfQ3tyay1otSVTdCE3yWAR99a9cYta8kM52Czdzbsxg4PzSPu6QhR9XjCnPwfsE",
  "key8": "5aMfVaWMHKHL2LkPw1BKfNUifJjXfiCd4DFuYDXGS1hRLrP5cJ7XwAkJMCfqDWrmhZmmcfVGv7ArkLuek3PT8Ta2",
  "key9": "3zXALhaznWMfkuuDxgHVypYr6SifVzCkHeeK5D1Xbu8bUiSsCYhbS9ZrxtXttRt9bq6YXymJmXGVDWWyi8JswP6x",
  "key10": "65oSBhdpodzrJGni3hCxQ8VNT9C2av3YHgfnnonfMzXdVUKuyfikC8qPURFvnKKfVEprA9iHcqEt1Dn5X7bfNc9F",
  "key11": "3wU2PYbp6XPmKXtZpummEetzHQD6i4kNj3oo8g3SZ83uBE23Umx1gwYQhDXzNYTAdMxFw6A9vhkJf64iKXcmbEDY",
  "key12": "7PAQ4d9wV4uG4mFDqDMf9DKs1E69QqmYVeG8y1VotxeBWESB1HdJ8DG3mV7krKBpwNz3kSwkgGAec8req4Tj9tK",
  "key13": "36uDp2CbRpAY7xG9CibMuC4Nfi6gLu4n3Cuj54aByoQr3iqqNZeXXt3jn4VnkdCsjCqCjZTGTQYSV3GbaJu5ab1Y",
  "key14": "4DksAMShbi7brVqXeYv2eTFGteCravKDb74YJTMs3e39oByTmC8oSLRmrLjHegaSdEJMJRgBBvBEWFETu8EpbZi",
  "key15": "5gardELEhbF9RTnBWtnKeDJqUBHzCxBwp1zqfPzKQA34Pcn1JobHDUssu5FLaqarjavThPd1F6R77LKG1uGcRU5W",
  "key16": "2ECodnMiMwUnBazvKhyFXAysqoPC4VA9bWD5QzVf8B9pJPUtmv7bEvYQ5hPNuZvJGSdHX8Z4Q3iNo6HsLJrhARQY",
  "key17": "23445ZZM7NbjKZb3BySK52v7bPwsQYR1wM16oGKh84VMBW1JaTLuTgV9NjRzFf9HiksR9JMYhLwncoeDpdofQ8xp",
  "key18": "3fXfwEFFAEj7Lp2t1CuzXE3FKcFmafhfb4JsWrGHhTLiwUYaPr9Dhh39aAqzL2mjYVvphPA4gwKpxL63QjxaaAhF",
  "key19": "BjXHvFEivBxcBDLWtw9BFxyEa5vEywRiwCCU7svrwbCvp1zxbtbQg5MntRBR7RA9d9zCXGmymoS5Gx5YYnggAkv",
  "key20": "2aCPmQwzSrgxBv1gvjaFL99NjSqNV6uP1To4mXbUsq1gkf3jpiR3377NcJzSR514zy7gqnpKf8WtuQQHxezzjTN9",
  "key21": "23eX9BbcJytDKJaaRhVjEFpeSokz8nYekBy13bsZN6pbDS3X9ABdaJ8vpbHTFKdzXDu5naPSDmJisnZ5qPZvNSpb",
  "key22": "GE5cegn7pdAgw1dJsPcBxgtkcw7odw8Dhb2xZa7ieu6zqeRxm5x8UPUtNbmkFtPa37p7W31gJ8rYdMHPaeJdav5",
  "key23": "4sCgBPJsefcdNTrUffKD6EYjbyLxuXqDrKcwmXqa1ktkkNSqjkKFUjRgfK1jEa91DQSnjXdZshb77gfkob7UUX3n",
  "key24": "3wjakU8i3EWfrh6TkYqhwDh7JDLffDwhbVLZWDySgYr1GdpewQSoWgwpwtvudnZNweFXTBdkw5FvKPEcAmWXMNaH",
  "key25": "eNFgRJpN9njmfbRk1fZ1rCbDibx1h6i1GazcXkjnsXVeKeWpNokC18Gvv7gru77Xha3kb1DpHki5CzJ8hw4zDY3",
  "key26": "feTrb1mYFSiNMr3C4FhLeBdYLqcdKb8TKCRBWSWmCvHpSmVJpQqX7nCg486tD9ASbhepjcADqjQNs2oi8TQ6rG4",
  "key27": "4E1fJQa6Bd7d6Se8rwhmwJ2BH93MUwLFfEYQSRtf1iZSL7ZmtpLDZCu5Sc7GJc2eWYHauLCzy7CZkPLPDpmU32HK",
  "key28": "hU6bgMz17qDcQ9EtAyhWaY4GaBzH1KKi2b5TbTFBhpADGXf4iSWvUf5hzudZPWTDnfywCEM9d4R7AB3nHmEokz2",
  "key29": "8ajTuhkWN1Evy1KwffR7nhAcYWYT7m9yPvQafmQHbTBTYzaf4s1P3VxmY4HqETqDDFXVdtaU11itZqRWyVAuvyR",
  "key30": "5RrDxQHr9CocwSrjjupY3HDT4wsS9YTKR5ZW9bBrL7qLtTDvEzy6dW8QfizBXWoPpPKx9ziGpv7nGUsLp2gAEPkw",
  "key31": "3rxkx5TwhjhzR21QPkWGrcSMzmW4fk2HXLmS6n2B3fBwbCMcFZjbzm2RTGoCSpYP62DoNbZVNUonATyLQ7eBHA15",
  "key32": "3Td2bqnojCWfHpH7gbQ94DbFxpg6mckStgmTHpYwMH35YNuSMxiU1zfmK6bEGSmnj3EGukx8mb2Ne7zQhxf8HgBn",
  "key33": "3r7Kx1nZx36UVneHYunTFanDBngfdcr1iknC7751zbCnMu6cVCBVpP2je4TjF45SnkaE4bQXY7GHpykLFdWfb1dS",
  "key34": "yYr6hiMajTg46SGUuzUTs5aqL7oxfBL1QftZzif2KNttxkRC2v2NDFPUDKEYPSjXQ1ngakeS6g1sKmq2h9DSrt8",
  "key35": "4W2F4Fhy8kHFDzAC2zoPRTHQDsjEgwHr87HjWwkV7GcpSKdZHNmr44ppdxSe8pefme5jo5grN1zWoqwde1QbtdqV",
  "key36": "2zdMwJox37X1FEazkHM9VquWpzRTj2R3a2kzXnWaPLRVEhgxzY4xChhmBhFcxKipXdD3dqZ5tS996Wc51Z5q7RR4"
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
