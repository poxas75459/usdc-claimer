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
    "4cFLR78k9VgekWu7pntJ93GKQ7NisEt95ofbY3a1dkEQSeYa1WpDXZAiRj6fofUo6NsNr4LgYxc6WUaKtudf239z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmaBDHJGzH5JJkczQvJWmEbBBggu296q2nKhi3NQX77xbhDpLyTyrpwdxXxGPbcetwU3qUKEevBuSGQTosLLfLA",
  "key1": "4Apu37BC2PHp1F4HeJkHAoxFuREirEYoPWANUkEuSjrPf3vEHMWxDmR7qjqc7FUj5PGuoyJ7padfLbVgRKP7xKiC",
  "key2": "4h5adh6pYch6PY23i27kGpGxi5cJ1vTnKSUqD7rvdfAgMo5gk8ExN419jHGNTsRBVpuSs4ERVLGThdyUPX5Gy3dV",
  "key3": "3CwyED7vNwYqJiZBp3Qzopyd7zaeaSXLGCZsd6joEHZiQimZuH2qYDYqPKmq4eWszQjWX5G75uAyxEifQEDR3fxm",
  "key4": "579KubZM5ZVU5xwcLKMYGqBsLogxx2e4Ets4uqxBQTZDBZpUFrMAUXL1VtDW1WXSECeaJ1k1Uza6yq2nP6B3Jj3Z",
  "key5": "2NYtrZRApkCjXtAciP5AGj2zVNSR85kqWod6vBzxvyq6DTNpFLJymo2nu9cZ2bPZbhfsCAfeg3cdjNK8pUD4pAxf",
  "key6": "3wg6nWNaahZZwWqrVuHkGoEju4E9KFUMGdANUgioL6zxkbuv1fU5ifwJutWpFQBQFxKXAJYkt9YUfWQ9Hs41eQkK",
  "key7": "5H48xoCo8F4GZAeCh2g9n9LmvX498DeKhYZPjdCPDnjPd2QqU5fhjZQaHse7Ffo6nWEVY2n1uSLmLw99BNKayHD",
  "key8": "51Ko2RUVPwDHHQjSVy4BDwdrmysjxfkKAzqiawpT1eUHndqMA5FrWa5hMT4btkZydFGXkcbgZUgy7qs8Z3nxNNqw",
  "key9": "rky6iHPqDUHbTXKrAUGrYzdkyAksaauxZ4ETBzMQUGRqiefL7Kcu5uMyjvYmt6ACxByNgG436nFc1XxPqCk9LtF",
  "key10": "4SB9hpxuexUWGtd1Ro8Y2sgm9VoHbxnVgQyRbk1EeBBZMmbUL9zZU2eXTnhcapa8o3rvwvwdGWctggBDUJfJ6Yex",
  "key11": "3Xz25yoLwy8gy6MEyFx5w7qGembm2FkNp54fLhkRj1ZbJ7fJzPGC7BJv3qJ3jDs5QQG4G3LYNAe6jULVxgwp6KA",
  "key12": "23BD1AU7agWz228MAK9SxReMtM5kQfS2Wr1KEjf95nDnBE7ihQMi1F5LLD362rBLAfhfQuw4yxnLADD6sjWbSLpc",
  "key13": "BwsQiUQfhkq4AiXqh697v8dcEgbRN8fdRbrg1xfWAq623cvZZPZmSuw2QhyL8morwzNQyBjTcNfYoTNcmsP2zri",
  "key14": "2V4FYMHFj3WysMqPtMghDkTXDaHL2woqUWWXhYzBBGmiqYEEDcBfWtwUm9pUG7KFgZAxtjmzVEhMc97r7uU6dZY1",
  "key15": "KQb3N1eVcoo4kUaw6smGf8Mzoii7TpVn8NoNPqw3UMbNHSuLrtmJ4TR2rHvzb6ks87vPSfwno9HayetR9J4NSJG",
  "key16": "3eqb137WrAyUVt96xYwMV94iL7DaEnZBhMAXhPrvvtxZzmgXC1xrEKfiaTFVUfGiVoRUSuz6LGF9XrMHZ5BG97th",
  "key17": "3L5YUgCDusjHe4JFRKV4ZvqRAsUSZShQo3N5KgeQE7MVZTwQwbRR1PgiUEa5BYLAqzfCQzCYg4um7NuXvgKHnkuT",
  "key18": "LZKxbanuwyoE7SRjgJKRV86bdpbWfNnnHycaR2GgqECV6S71ULm2NTmT1xBLH9SFYBrqxVt8V4ss3BUFyY2x48D",
  "key19": "36DVcjfxZNZmY6PUiJ2KdN1jXXuArTvhqzyeW2xEkhJCi1edGxnhj9ijFWny5rbRqTQfK8ATFJteZiG9dXK8XMbf",
  "key20": "37GahDNdCuzkzn99y5WtsHJVfWmNpHcUpUaVgg8sbsQQJrfd5L7ALZf7xGf7dEEiyhzRkr8q5USS3rCvxW9CGmFe",
  "key21": "65xFTQVcrF2FNVqqAtg1tB73Tk4VkRHjAk6JjSGiTmKc6xb8b1FvRX4s2gMT9BFRT5ENSVCL7wNyXudFJN6FtPQR",
  "key22": "3yzKdaxF1rvuBjaWiFGSov9jhSzrqYoM566c5hs4tLz6eSiegydMpKsrdzWjNNL63CXpvJKeoXsY5wd1JhjRt9YK",
  "key23": "59NYyPMKDxcDZLVSDtB6S7RqEueKoiJAjt43Cu8Ki6GU9PYZs5cyb6ySPUbvDABXkXZnH8hLbB5EXnL4zhvu75pn",
  "key24": "3TwXbgnCMUDAYnFMhJyamawZi1MFgmpAfMN28PMy1nuVsJ6zSXWCe2Z6hdmJXMzr6bxWGH2mRXSwZ9V9dQyyT2MV",
  "key25": "3A81dfLczGn5Ts8DQf86B73xX4VoDJTQbyhP7DcjXtqp2higpNNRk7uH3LjS5muqLHrcsLU1aHgYgB9xCMgkMb2S",
  "key26": "EdVCbdq3DXnCpuoY9PPyfC2tcr5HotTqfp4kFqoUYaen65kh6E4s4sgHSYDtiVD2E3KqvsqWjcSk1kUKviwUU9D",
  "key27": "3RCzuwfVKNoSZ17LzPMzr6rJPnbQckandGBTmyqun7Pkqq6BTh8xmKgfCVzsS9i2po6KMNx7cHddvmo6ipF2ULYT",
  "key28": "N8nmXgvZuMhdoRCxwPTTUQwFtmvguTdtmMRmZH7ph1rLri8tz9XfqJQp1dnwQ6x2jrwgyTGEhiLHpNB8ASQLsqb",
  "key29": "4mPhaiNUYECyQgZwdxYmsb7sahCDzceUj2TLAM4qhu1wgcyKEDK7UQ59vKUBdktd2SqRM96EMpXz6cuRDiWhPKVF",
  "key30": "4WHsvGnqTJ6GSSktNwQ3Mwu3RxeJWjtb1RRckBnPQ6Wj9r7WVAXqhkWqZMYSLod6ZL5MGZPetoAq1agbd4v6ef83",
  "key31": "3qgF9RaYCmDpvArjpFQkWzo81tCtX83q5uam6Xn5n1L3XXnPTWLF4wnf1FTkVNzfoBv2uZxMEz1WRJuyHNk2VDZj",
  "key32": "8S7aJRAXfefKuNxWMg25KKP4q1f5wfCTNyiFwSqqZbGhYNKnJA5EiqFVbwVCwSMqyDxyC5gnBVoBasAVw2a2Tbv",
  "key33": "5gyyYtU2uK3KDgFjiU6BESonF8PdHmRbzXvjKVH7Ey6WNhTyp2B4nDnbCS4z7fsPeXnkLszGEVbXeqay3keZGR8b",
  "key34": "kULcAdkTsbQeWinx18N8Kij7fzccKEJiMBoEy2dNecQDqTS1496QfvXz6fKSJEhnXWYGuWgD73mpJX9BuWD8ZW2",
  "key35": "3b51XvjusZDwAhjYMigLFm5my42qbzbNYffmngXUGd5iRsV2MsJLLPLJ5vFqAEpWbp1yw1KQeUgULufkJFzomheW",
  "key36": "2VJMAA1XC6d5PjVWKQGUbLDFSPhQJv3RpAGkmsJT4qMDqdzNBEzmnw1sobiT9YxneQLYUYWtuBTcGLryJvf7SJhz",
  "key37": "3WFwr1aXGQ4icfs38VKZGf7L5h8ansXXeYmM3SedSLuRTnj6GxwczTNbiSg3bC6KK8saCuP5TH1wyqJCMovBCCtR",
  "key38": "5dBRbEYA9n8srPdHfywBuzQjVzMVA4WJA4vsQq57g6ru4GvvjGQyKqYR8Yuy3sgmbQSJTLXmXt6TiYUCbp7owyxn",
  "key39": "545qwU41UzjcnRLL5YZb5xFv4Vyu1NurpHJToXoisa3jCAMRVBHRN6VY4YFipYj3AkLDRpD9jjQeLuaCjQKdxEaQ",
  "key40": "23r1EdTChKLKdNQq7Ca9UFJGUbxJqBvVbjogvVWdFjfrUttdsdDMHhEec68kDSCekwr1Nky9JRzo1P4oHpNNR8v5",
  "key41": "4Yh6dA9GiJKUScvn92L2izRAfVtRdtxBxBU7fnqiK6fTUHrNCkR6ofJqZ7oeUsDdZVDEe9rSe5wGSvqkuF5jU89Y",
  "key42": "5bcpc7tzS27chhouytQpmhKdCnkVBbnF5PM8jTHo4ZVjuaPa89vV4Y9mT5EVZaibVqftZ6EJtmgFVwiw9syBPDwZ",
  "key43": "3pmRYQAMBTSyxrgvS5VWVKKhmxVevDQLboxFHifdixGuUZCN356LLzfShk4veDn7jCVnTVbPjECH6spGdSJ1nALR",
  "key44": "33xYEhXpYCsBc7aMKdbSr4kBkSAjeujoF8BEqfmMomm4UXL9MHoAAEeB69sqah4FvDy5PCYRjuuFwBwVSvigRdW5",
  "key45": "D4XUPLmmAQ24G1tYBCdAjsCqFb67dPtYUaLpQu64UaahnuuZ2CCZyc1gGDNF4L7B5rWVJWyiUfyRcqqHefnd1GV",
  "key46": "3r8aR7NmWXoVFD6d4un2jjQyHMgJt3kZoCo7yZt3J324uUbL6d3kouo3YZLPwWtp7njoxNM2ssCngDnyU79dNjvh",
  "key47": "Ej7EXCu4V6vmbYqhmxoR6NqQQSQnqmsZFW7waNyxQ4wxZmkceDgG6p1BxMeJhvrAxb3Mhu5tRbYYFfe8QSTTQPV"
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
