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
    "5mFRTYtTw8h3s86MQySA85Y6jd9ef28FP5zpyvYe2RbJySTfYSh8oKQzxSGBpkwdNcc2TQuSbPRn3NwXHETsVDYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVhkGqm8niugg1hy6rjh67fQ2xuN5itZAoUEVh3juvxECACLzVYkPkrVEVM558TFu8P71QJxdU55mwogFF73SNx",
  "key1": "ZyK1rwRzVvBKsurR7Lxc2WxK73HTr5wBEKrynSHQXsWd4hvw8EJMFCG2jQqJ4t18jCrcUrrCgoMagdr1DnBWW9r",
  "key2": "5YMeH6urPAFXJGRGUJfXiUKz6W2p9oWFRiZaPopiaehc1AZmVcQ6RSZ9Jmh4MvvbFAKGVjFKNgBwyjN8FwMGAEUq",
  "key3": "4L7FYssQvgzNzwXWrx57We4ii4eTS1LVbWf6ajRXLNWMXCdfrKL9Zm9i8q4rM8HXzDEzUs9KZYpspzZV4u7pQtWr",
  "key4": "3Pet2FrdCiTZ4WAqRdUdhjQHC71RBcbpAHMAB4E7ojK3xNTatQCEPU873NzsfwqQp9xa6p8YQ5gJdt5yK4WULhtJ",
  "key5": "3jQFvoU18bpwGoHYwRfDJdpEsFLdom8D2RWgVQo6u1GkChziRqNFH8zf2srcQUoHaFsQAXturqFsUW7WZDU5V2bb",
  "key6": "4dRyiKEEtapVuXCGtPEfNi3SH1n48HSU3TG4zTQy5b8jMY8oUSmZTESjJCunm528McdpgpbRLyG5oKDj3gMumjAD",
  "key7": "3SL6mDPhf9DZqTvXybSo6dEvuGS1bvgVBg5pWRJ1vkYtDihJWbT9KUieNPce1UES92XFHN6QPjRTK24iccjd6nqQ",
  "key8": "oCv6UQXqUpRfuAMovXQMvGaUvdNgXwdBinqyvUZpr41D9Sm8dKpZ1QvNaxgSJM1h2a27ZaN9o8chYn2M615j6eo",
  "key9": "t7mLgDoR2vYpTUvacYjvNdBgFsKH5YUZnSd8YC4Lqsf5jHa8Dpgusc6Wa8Tra2hvFsc5131eYWp6H36pJXzkXgZ",
  "key10": "3MvSDkEcd3nCZByneeqHeAajQ3XZqVFxuCHeJUnRV7kK851JgUqUGu8WdjbJPftexVHmmDViKy7iwhPTjb4CBSjt",
  "key11": "39JABdvsSCfWCwECjTkq5t63ULh6ayDStdnwadu9x3aAB1anm2qxzLPu3cMX65ehYqwiMztiiwewDKTsfdWKmd78",
  "key12": "2M2WhycJA66sGwZpJFER5ttRkiZopfMBYMivCPwmDX6LkX44Ate1FkZZFXvd4Rjf9asH8VVLDdZw6aw9RW7ctHbZ",
  "key13": "32oj59XFcLHaf8ktMYA3TK31HozNwprCghBtA35U7DoMEQTCb1ALjfXKHqRJU5eTSANP4tkC1HXzJ6n63CPmxjzn",
  "key14": "o5BWEdSUbGRp4jPzPDgwC1NT7LGbUc8t9sMbMes58xaaSPU2UprvrjFtoGhhdcqsKSMTCAko4WMH3vntheE9Kwf",
  "key15": "5YogkKwKsWWyNSx1VatdWUkf3fkzJW1q4UKXAhY9uMa9CfbPA6SNWgxBe7Nsxt9ARmwkKxEP1chxGwS35k7kHkKo",
  "key16": "KsxVgf9b8qRA4qdjZPaHbUGVqgNesXskpHGq1bvQu6gh3xL4KnweMNMsjfzXfLCmfb7vrN81qkmaYDPbzrrjbbQ",
  "key17": "2h2HoXUEJtuvhEjUxyJSFwkLXXrcBTXs1kx1NKNEJSKWbjjZNs27YQGm4ybg4DhWQ1HeFDiKYvkgetMMdURBgU8N",
  "key18": "2Xont2tZkqwVUWEbuJnoiMTcDxAnB2bQKWxfJcnWpWzc4SRXTjDyBTAMBQgwS5UCC1gj7H2hw1TJSdhB4rjY6twe",
  "key19": "5WtTyKCJGqQYRJT4YFmnfKPhRyyBergkqTvSpBq69YNMxt6dt6cz6J5r6tcxEeGjreS6nz3JWkE45GRrZAnUupDe",
  "key20": "31eyByu25LsCzwr8bBRr15bGtjiYzMoYu4yrRm3yBGegzxovkd4ZYjABnhva8v6R44bCrs6vsfPkTw3ttSLSBwNF",
  "key21": "3KAFYnh83MfzNCLxFVXVPPbSskDGNPHnojnunf2WdERudAGW2YgtMBUsm5NMmutvgRk4wY9rpwzqVrCR8fLgC7ps",
  "key22": "3pEXWfps2KXDpKgxAwb6MBKZfqJBfA5BNn6marvkHJms5XDGuY1WPdAvrVRAzMCNSQprXxXNchH6t9a1t2DPYzwL",
  "key23": "LQYKB8J74yXmFUjAu8CJwWKp6z3onpAp657UyayaBMnU2ntqeKJwWjGeNrDudcLvtnFHk1cocKBFrncpCGmRmBo",
  "key24": "dYxizzK8c6JdCWM3qXunb5YvqobP7WPTZ2uK6LPSFJAYaFNsHs7gWH9hfaj7i2a2cKP5mSgWZZjXwda2sbjqtjW",
  "key25": "pM85AHEpj47NJqDXvxyskoNddC3DvDxzxLuBRDHZfzmRHj6Epr2sNT3wPcBrhKFHdkiU669f69xoLXSnLpkMo79",
  "key26": "2Em2BBswFbot8ZbbheW7HX7FtwRTxfJb98ba5hXZ3XP9nC9xGzvxzseMofAGSuRpRVCFyFJJZ39xHxoP1Vbk2CpD",
  "key27": "4fXLBoPihudZBZKGL14F5AaaciLZBqGzNyRUMsFt9s5zUWkyfZuBa1HiFbBUufLPghqppiQNZi7TCZeTGFrFHRSx",
  "key28": "BihJ5A5HLn2jzezN9kcQoK9LAUiPoY9VbXY99pcHvQ9rwXrpiEQajrdDAbDPCimqrUcJ4jR6cnv55VcSCiN7H2J",
  "key29": "5UYGvsSR3r9kb4knEVq623zkehzWr66yomcXbwbGirub154hPBFmNUDMWdh9RLH6W2B2PcYVp17XvGoQE4tJMmnB"
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
