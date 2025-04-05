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
    "3EzFWE8rSUfUquzAU8AHpMceBbNSsirvLz1bo15h4TpjKyEbQYFq95Yn5EgVir7UtrX1R5e2DV2548eYH3EHUL3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672JE6Pce515eSUamGkt3vXThSaVZVZ86yYvKaNeMuhMrug339gfa3GGTAMEgTYqcJQ5WPzaF1PSCddLw8rLaFce",
  "key1": "59oS8VTHMzb9RZKfWdb9q1vGkEdzKuQ74buS8FUJLpaPUqpBuRk7MEzVUDND2ekgM2FKJ84WnmZyicbnB9p6TeeN",
  "key2": "4FutjEa1E2saBZTj3LLiCTKjm4i24n8gTSoecVW2gfhvxxLjAhoBnZHtNXdZt1fQbPcgcYENbvTp4cnu4Ss1RH2g",
  "key3": "5QFnNJSSSM5DJPEEGYm7PrX3CLAK3PsmwJiNhR1WboTH9QdMTL7QouixLqLGA5jkFRgpG1S4pHtWftJ2jw8AhRaa",
  "key4": "3fKAhNdymfzeEkCFN6pHSBwUFmgQweoovLpd3mXFhYvbjzXxCfcrA4wwNN8NrFBU8HiLDLPLnkfhbxeWysFVW1w9",
  "key5": "3M9JmykkdKgQa1f1ug42yogRHabg2AmsW4eopHZLhVHgD2QQ2sCDMabDoQPPUogZR4SU9eVPXxb5KjX3rgyJTCuB",
  "key6": "2tQ7HdHCSYrmYnXxbj7XePtr34C4757fc573pd6pE4pGb5CDAzXUHJnswBUns92i1QW3QfEe6qXw4gn6BNPMMFkB",
  "key7": "63LnxLgMBKpnoSwJu3x7b8QhmGjhMULktU1wfM1PxEQULTPQUxt9ZbgxPJWdE2Y29nMkyrpAw7diTpKdWq5p4JKq",
  "key8": "5omMuNcERpBUbXBSmmMQuKzoZLpyxNonVCG9VdoQFGrhgQdnEoJrPZoS2sjCB6WLcuZLv4u2dZtrXzrHnqKQy5hA",
  "key9": "4JzfdSerKhnYVnePK9et7KtMh5UGCUj29TvoekR28beSVv1YF3CrZF7VZc6ihFhFcLUnTt5Qt1AJ9gYTakcu1qHP",
  "key10": "7T92trgxvvQqhsj3Q2rFN2PjAPeRhsV28FirDpetMNX9JFjaZpcCfFkNsqWMa8u3t5JbBPYK6fyQjPkxxYpJFkg",
  "key11": "3d7TBAPxssUu47zF7z5QpmGwQ8DKkWA44Pn7TgepVPKoTHrgAV17PJkRVynyz4VHAfbr7EXz3gU3LkCJ2bvRcYe",
  "key12": "2cWbN7shoWinZ19Rq9ax5fXwSZiBm2qT7nAfiR1eKgwRFvGdvSgMJJgroBQ6MesuRDJN8yyYiHSTKDuNZD66HqGQ",
  "key13": "HEdLmkdVEwrZXJtyDgZeJuhPEeQVV4wm4if24HvRcgRr5HS5Q5xKPooqqgXU99kQVLgkhjvi6cPNaSjwoSZoCFk",
  "key14": "rg3Ddz1P4pEzdCZ4BnbjJjdKxdZ8DpZQTD5zFZzP62aC1MEeiwt1N3GJwLQp6M3awUHWFnFGbnojeJXH5TzyKY3",
  "key15": "4X93adotTvpnxDC1FSoqUC2in1isYrkC1qcFRCXnBQRNdtSkrU1VNxMH5tYDgUokqv5QpW379FK95H1sUHcwgdg4",
  "key16": "eqSV81P9X7EUXXJV7LmmkxexHszwF3WSC8ACB9M57zpNBGau4gSKJppBCD6x6i9x6YwosotJ6dYFVYK8rb3FUgu",
  "key17": "2uqappsNToogWqTpkpL7dL9hTzG8fpxYPYtxh5S6ndvBJTPhJWSo98FXdRc3WR6ZeFeAKdHEyQ7wKojvjVJr5Urv",
  "key18": "2vwWjVnZUpFLX6opj3MptYbtTosjHBYgBKVoTn535t6QXKya9Q9meNnUmvgkd75QAWxR8b9ZRVJuGgYjfG4D68mH",
  "key19": "5AooKQ8CYyZvJrYrTmihTc56bxiz8yHSApNRvVSsNdb1mUVPeU79U4FL3uQnq95DpiYVn2u3gb8R3bEM3a4kNiXs",
  "key20": "4USF7cCSba3zEThgYAAGJbZp5suvkAhog7mCCnpKBvQLknRWUSiGe4UChtaYaAKnLHdHhctqVqcYUzDpBCWj9ZyT",
  "key21": "4sobM5jPc9fzQEBegNKGaGeT3fBLttvv1KDji8S5p39egSzVeAnopUvj8oXEod84vkSYKgkJVoH75j5jy5CpiVHK",
  "key22": "4P51isi8kFCybhztfQMyjJaqCQPamko1Xc8unPedQdtiT9pf2fg3rSyMnersTt1Bgt9g9v8NxBLN7EBjekXiFPyN",
  "key23": "4McBsQn92MF89iZf9iLCpS6LeZVDgfV2phhUDQukyCpHaeDRUkJb2jDE8VaZBnjBbgopwyuGKtSfymKQMtNCtfYi",
  "key24": "2iBWUxZBVtoVFabMVzxpEvqzRccqL6rSHVyU3r9LpTW5Qvpg7DeZAG8nRWb5JNXqpkqeqS5tYRkYigvaWvWLYMgJ",
  "key25": "2A7eA3vS4vKCKygCpmjXowt5WHxLCfYHwE2bzHcEdaTLwp3G38Df5o4MHdzHqwjKkK6cW5MpHf1g5Wr6uTxJbQLM",
  "key26": "3Tt24zCfnn7zqNUA9Gf7F3jmgvTutdHB38aAiCVR3Ki6taxftad5ZQ4gdW4WbLWxiatfjv5Vtd8AWSii33AdwL4L",
  "key27": "kWcbtJSYR9VNwiX2FGZDBEyWs15nrasWHHk7tzScPy3P89jS8iuczMib9wBHcARf6Bivqstb1PgfNHAYxDnXb8q",
  "key28": "5SWE5ARcdmkvB1kiueurENdzpeVM9QjqtnCJn21GojxuvNBSdHr153koH6SkB3UajBs8fsUveuR5QcJyvqo7FxXn",
  "key29": "Tn1EUe3deWaBeh3CqtLQ8VY4zRc34gujstudKHfgU3nG12NDsEgYsCMf8PBMiR9TMug64A3xBZgeHSfdjKhD5d2",
  "key30": "3h8ahJTo1qzmrs8Vp7FkBViwXNEQaHqSHqzbsddi4UPXxhu5BUanFzZgnZrZFDrLeiH4PTPYNnuCyXBPuHgbaB6G",
  "key31": "5c6JfaYn53189mp6y8ueNWzfBWm9WkGJDzMLX2jCTo3xtPY6x4HdLj18gvLbopz8bNuE7tZZpbdEJ5YzgEARLToN",
  "key32": "Xi8BrL9fh5kcixkCegpPMwQRcb2d6V764edEkSTnNztQaPKwiSNPe6mubArsuZ3fAUbbSTrXXAEkv3wi9dM1FWv"
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
