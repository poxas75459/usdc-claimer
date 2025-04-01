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
    "3QoTte6akAD45HiPCqsd8E92TQKc9WRpN6w3YW3GnrzjMf4KAbSzAD5RdZKs6Fw5CFLuYWZ5eGH1DNXTLMx5iHfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vR19jfUp5PXrjvB7e7tMzRJeFccFLJydzFWueQ3vVFYgfwCD2imM4RbCRTcXPF3ePtd4vuGSuB98gFHFhNviGyy",
  "key1": "27rQ8jCDbGFSdKHNqSUHyWAQXchKf5VE3USscyTKRiF3USGLvm4sL6DHQWVZsKcMeZrB2izdKMHPY9rJJcN3ENMC",
  "key2": "3w4Bk1FZDZCtCFuePoMBGxgTnVXbY2EbNPGSioxrM2paY9KYx43S1kwqk2a9LVUA5zEuTqFQ6DvVN2E2EhGFozN8",
  "key3": "mT7HAgucw4DKNhR26fd77eo4cxT7E6nZavG3h1APqwrwQRJozoppFbiYty3JscCzuymGvy4NJaCUnmFnCXmFhTN",
  "key4": "5g3onkndbYFbaU9vqphxyEAALfTPUv6sbgH9RAU3RCck72QaEZ6di9nB6ccLxvHM5XTeceYPpFacwzucSWBToxG5",
  "key5": "ZzZ466SEqXKFfujCupbdbJAnKb8vbVbx1BifVdaTQVgpihJfFgWtv8zTd5JgCS4nTPXsoemvoWuCut1KyUpxB98",
  "key6": "3LZK1N7rMbyYz2tsAq96daa1Qw5FwaD669utAhbJJ9xxrVbkpPMj15Nead66gpw5yidbeJAaCND868Dfd1eSjKMD",
  "key7": "2YbnCd54BHzPELpmBgexymaEURSdiSPhWZuPNJFfUVca94qL9c5MybWoGbywXPHhbrdV6uFFJbkud9XQ3vswYubt",
  "key8": "53Un4BWoQz2SsnsKz5H4P7dgoxXuSTiZ5nody2Bich6iRJCacav5wXASpc4rVZ4RRgkir3F538xn4yPMjK6syEQM",
  "key9": "Sgr6ektw1jPTUjECDWAV3ikWuAzTiUxhaSePDSnUxo845TdNKvveqByCuzjFzAyP8WEHuuJW5838ht1K4Ttvizf",
  "key10": "2W7fDHsZHFvViCh1ppSfLs79pW2ZB5W9G5KSEYES7XkWuLZxWpLGrK1ZtXpW1PFJSM49ehsMu4Ju5mQX7qqYsQX6",
  "key11": "29wVZZtbSViQYSir5xqDUqj3yAGZEM2DLRJarzkjjn2he1UdDyNR2Yg4bGqprPHzZaQZv8mufV3FYMZktM7qtWSN",
  "key12": "37YKX5gUCDVP54wFb5Tr2B4kprJLeY3YBRbD8j3QVmHhMwivniagaGWNQAGRpFyJYRsPCNzDgPvk1ReWqP6L6ZqJ",
  "key13": "4Kb3Sa2bLsNEnNZeLWLH379LWkoCe7Bwf2Jy3Y3Kz8zZ7fYFCxaDWc6zPuUcLjY5aEE6fnWzY5CfZHGikxFxpitd",
  "key14": "3ikjWmnZCtq2gMm8Yh28jXJgCVD656TvB4FSswtPciGqish1FZqj4Ch3nF1vGPi1Fd2oyBQpzqad7SMVrrDqHUnt",
  "key15": "2Vf8iHvCCcMA4pkpd8NSfw4WgKpZkyebgUhWrZFyp2eyaaXzg9CbdyqAjGMRbscqceAeLLGoygkx6fYiBoP1r2bE",
  "key16": "3vA1hCzV7UWvBFJ1ULhnEXhc2seQohzwo37xfkDRhjYHd5WvwcPqWiiURg4b5bTf4HicgEVDApbwCRmNZUXJJNNs",
  "key17": "5fonAp4zevoZV2RdBDkzCRjX24waEFZfEMUqDzjLQ6cuWAXdSVHxQYTjbdwpSwiTX2UckJ3NsrRmBHZfmDVTchHm",
  "key18": "aUC13oAC3hdHgPargC6yQ8XkJH6Jjq29TpyM1RvH59oYoCbyosKVYuUxN9aRps6PKgsCBAujhU4hPS5C9W4LtRP",
  "key19": "2yUyJ1CBTjUXpV2fBqPPGfPs1cDR4kNgQCowvS5nGRwJ8fuBa2TqwabudR5BEw9Tv4tWwtWEdFd68wzAzHA37HSK",
  "key20": "28HED4oNYJQN5gB7ABPiYfqsfEWkz6KmLzn7AekwuXbNSTqLu4HBePs5WaGxuFhbnuND3prE8hWHcvLuJSDYRYKE",
  "key21": "2eXQyPweEpMCB3c2fD2vffQFbPMizYuX4fweLia7yi6WdsGjBskuj5xTfK984JikbFMu4A6zEBvUWUk5rZVy4RMa",
  "key22": "CbMciN1L6XyyLNFPC1zCLoT4b66uMKy3SDXYt1TWG1Qfoe4m9KLkbfuhrKbEeygPurRJyv5dT6v7Ff6pLofE7LY",
  "key23": "62eJX18isY1L5UT3cZ7q3SvYw1mnV1CxouVfuz5K9PVS24grXwj6WBnMcJPLVdG2egZEoSWsRMtK9VcP2KeUgPn5",
  "key24": "3JaxeLUwRUcxwS4uoqkCWso6JYMgwZZ4zSRs5ZkDi8WXfgtsYmgmueNwjC2tL9v1Du3ePP1hx7rHYPVG7iczefv3",
  "key25": "GHNyPVQeqieDVSWUVGyZ2NdW4gNeNhUKpwDBSYNGt2ftStm8BG2YU1DuE8seL3T5xBzvoVbSxyWaun2kXziyrFz",
  "key26": "46YAFTjffLjrbjFCF8GoQqoYB9ZJKWfmCN7xMpFE2377Hg6mN8Sz5znbirNXd85WX6uaLmBfLEVA2tckxB5DJQf3",
  "key27": "5u23PwapWmBnkK4cikd6qMbTE6DFhYkwCPUpYKbEn49qXqCqJQN9y74bnNv26QHMxpmihjViFLERCU9H1uVArZ3C",
  "key28": "3bb3W5UusPLEBSZaDVx5hnyW1T9mBp6R14pCYvJ171fMb4JfZdYFWVvyjrhiDwp7CdD3ugKVqsSFxLzKse37otfF",
  "key29": "5dWeh79y4rEYV685444JFWmQ8grH84JsJhLxmRhtxgWNCdFHCkCcmr2UToyvxnFBycm2UcXBGQyMzrSdHW6Nwgug",
  "key30": "4r3xU7bZr6ketXuvLZs9dYsF85SSgBUgkCCL76k28nNLSNcziv6VZBqYaJtbBLJ6xTHUndRxW9uf5FQ938F2G5Y",
  "key31": "5vxyBwbiV9vaFQvHavZdu57tYPtWyE9ptErd9zEPuXK6EKfJ9NALdZEtr1GenRpAqP7phJdGPm7MUCWLACRyjDyK",
  "key32": "5vJA2PC89d2Qesiy1zCjpRqLoNBUsUMG9MPpU5UkcAgKk7i8o6Siu1pjxRSwzxhLXm7eVH9RsnEj8Qags1MujYq6",
  "key33": "KD1YLVTcen5VyPgWxeBWEZSnDb1ehuejFkzUkK56P2S5PgbEVJ2eSQhtRTFEzpJ9xZuV7xbT6UC9zbevnjyHNex",
  "key34": "3PXNQHsSxsw4N98W4TVMg7VyxEjdq6ooHjKr88GcVLgXTunJ7tPEsZxA3s2pioXteNKSWDMU93RHcZa31aWvVdiJ",
  "key35": "Gnay51TB5wDLHxUdFffvpJ4oqr4zrjcPRik9jwwAW5LZ2Z2hzP8nejDq3eRPCgD8udm9YQ7HAcEsGsEebDYavfu",
  "key36": "6TXm1UqWZE3MT7CCJBMZcX1EEe8hYRVjWePng7ZEZmqECg9zjMHRUfFRzdzyypQFYyitsFbPANgzzQt92CTJSt6",
  "key37": "3DYTGaihtExijehoK8sXRdECBSC9MJRe6L2zkpgmjCC9m1n9f1axF6ZbSZVbmEQYQGNZ3Uwd2CjyxCfwaoQTENwc",
  "key38": "2NbHmsmksMBUf8BfhYXrtkxzYNZSgkwqHRJ59k3rj8yxYzAkmjH4njHZDeUHSrU4sxXzLLQd3TN2dTShbUdoK2Pj",
  "key39": "5iJ686RQ9KbV66kFQcoSjiVjs6gvVu3efhtqGvS38xv1QacSFWT4uYfTqLp1e3hkQwZsuuirkipDQHCJwG2nxXTg",
  "key40": "5x2CELzgiNL4oapMuJDQnAuR766CiLpZj8vDwwhVn9CdPMKNZfQ82qXenHcPBHyvEvPDhigQTMrmzcZSZJb6ePVV",
  "key41": "X486Y8fimjvb3WpXDw3DNq5Y6phQQ1wVqecmPWQsEHJgBuVgZQVgkKMFc7YaW3ixct3gYKt53X2THwF6CezJYzF",
  "key42": "3qsLJKPDtDqhSTDjhk1kZZZQ8KQq7McdNt9AZwdReTkckZGAiFqbczEUbAFxeFRCkjQVh8EvwKsLNoC5RKjR5yi5",
  "key43": "2h7CCaPGjyFLwHafKKn7CFTFjDNYWBAXF8as6bd9LTajwCAqaWdMUu1YueBeeS6YYAopMbit41UepDFHN4jcb3kH",
  "key44": "3nA9WMgJMSSKNhdKsVaGzwVAgAEkKUAcySopJPj7ZNdUpo3v1MN31XnUiFatFErjdGj2XA8zW3GUzncgQfX6svSS",
  "key45": "2BNBo75i2JHJv3RYuCNviuayJM5LY9uVvsNMy4BKoJUiZm8FAgoSCfCoVqYEQD28hazrkC94Z3fWbWwSd8righYf",
  "key46": "5orip43bu1GL97NB9tYaNwgD835TddLJRvfYArEJtQVkcdd9YpNmZhTQaP847S7UgLqgSCmFQTgWv3bgt5HiSRhS"
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
