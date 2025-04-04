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
    "2PG7ZkSLihK4wxJGiEKADvoRkAEF64GKVaZLnJuRpTXphzQqujvrFgFKToPNyjHbugY7jNCnRCcWbF2fZFqBMt3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bdJWVvJMBRHq3V7hdEV48umWbAjpSwg7e7xfWKaLdvRftMXwGwxoh7iKzHsQudZ6SakeSiCh3odBTkiBL38NjL5",
  "key1": "3yiXEE6LqBvmu1wd4SCyy8cbBzvFR5zMHM8X9FKRma7ChGXmNvzBhzuSkhFbLQ5ZtRkw7yGojHoaB7ERwEjmUQt6",
  "key2": "59bf61Wdynqm3Tje6pS3G6B1JzVSfihhV5iKkWp9zZUQHs88DB2cEHkmAusKBzBycPU41BdoPTAVXQNonvqbH4ie",
  "key3": "3KRYLA78zcmoWorwwmXLK7h7hVyM9rwQvrHMR3EWuhTm14phpdQrrX2TnYNpCSAsNt5rcZ8yx2t5HJr2Ks6pNmwH",
  "key4": "6Spz1Wi8Lj8cQs81HNm8mjQ5hngGdRA46F1zJNdPK9AWQUiPtLnCso3fcgyimeMmw6xYSm1QWhEUfSP5v6uQty9",
  "key5": "8BEDJSjVkj7jeAMVG4w36JEEgsYQCFspLxf1sdxLeyjHjAZ68WRuDnawSLiCQMGWrUhFDtevR7x6m9zvcYCH14N",
  "key6": "5qP4sDXjUzNGCEGWGVtiRoDNr8SkBjU3o5jYGFtwKH5WRroGDm5gDCMTENZ6vggBajtV5A48uhbKLavhqDAEKHbm",
  "key7": "3BEFgh2f3mc64Xn7omk6SN9MgV2ha7XHtxBFAj1WT8bupouS7EzfyfeoZGPzy6JnmE6CEFkg1XZWnTcFfZUYLyZ",
  "key8": "3C6Dqy1dqr7pwTJZbgR7TNhA8qDVbEnysJvL8kT83m2ZiGkRSBCWxB1GHBENKEzAXf2NjtGqBhMoVeJT1bTTXkSY",
  "key9": "3nqcng8QntA5pPyku4j5XXZ2vdpyv8jG9JradBJuRgHNk3j13u8BXXSp4JfFQEVnqphXDYAPeAhFtvGqVmauf7nQ",
  "key10": "8QKH38hZefstLkgH8XorBq82xmvnWqAxooyYmRtKC4gD9RcW3TZurJ6odCCBS2EWt7QBJg92AWBtXaWMjwvcSUT",
  "key11": "3Fi4sJEuMuh4gjnbBQk3gtEEwVacQ6Dx2MJgqhoFGdSSNeJqRuu8sFHRrymJcNoTUjo6Uq5XJxJG7PtvCMQbyvwR",
  "key12": "41XDVCzFLnpfm9BLxHy7RiE88WgS31sP6cjvZ1urziUwmEaNB4ewTNWMXKoqbAVVAST3JLFgk2jVnUB5ka3Z3L4f",
  "key13": "p5sugGuMWcjhkgurTQxQM5EDd9BCc9JekR8c48bXp6uRqgxnXpXRsPBzGETXJwGhwiL5L9aza1Ji32Xibe88eeY",
  "key14": "4hLmNesjwe4zbTQX56wuSnMvP6iEKzoiUYBvX1TfThpbiDeBMZ1yKeLvibwDtk1qNZgUSBnswZzP9juUeXfcqZT9",
  "key15": "443wjbjtYk88h2fh6UF8X5kJ5KbTU9dxNzHNi2XTsqZtfHfxwePMkAmdoe9yxsE4qYi8Yq3piNAdn2um7AftcjWE",
  "key16": "Y49SAQzpSecii4BFaGhJ1sE2JJk32dwS3TgoMEry2oWHkR7iywA8akshfJr8JBkEAie2tXdCG4muaqHBkpmcwbV",
  "key17": "3X9usqvGXYwPe4eLuadSz1KgPaNWdWe7Csc4b6qd7YG8ER1UgNiLvMQfiPZy3qua8AvxWw1VY7bQUEptddqkpcdr",
  "key18": "31B4PadG6PEWX4b38ZYHFc9ery3JWV5nLKk2SDfFjb4D74Jn7cn8NHYzedacpnP7w4xoyhDZNDnZDNVR7hdJuSKg",
  "key19": "3RNz3YCfieQegDUCnx8CXFua9MuMuwx3kD1mRPPiwBwFWgfVC8NcuemKfaiSvFtZ8wnAmRxK8kSgrxd6kxSxHzGA",
  "key20": "53oRuFr7rXmLYDjmu2xLAUmxDu28M1nPqF5VB4iwRReTTW5MgWrm9hsmuRamDimiYynLcERpvi8DVSiKLmpDcF68",
  "key21": "5vc6xpk1cs5FxcTo1UNLeS2ztRzc2gDgEEo3YdsbyESAds3cpSa18gKE1CZv92t6zsisnx7hoZPg1Y1BTj65yfuk",
  "key22": "5961DghyMwDRrnUgCCHs3Z9nKygQ3WdNn5jLTvCD6twJJG8zTx6Gdre2wRF5vayZk4Zk9HpXBbKzndCFZa5zkcHu",
  "key23": "43KYB1SV4zCZoszbX6CNGCyKZUu6DNeQtnqmrHXK22sidua32iMg2Z4aWQkJuhkumFUHBAwLRM2U8x8Yn3ZqyY3X",
  "key24": "gNC82PAtnwSoBZc3MTqLdTJFb69mQVL2v1G4tcoYKoeMQL45gTEMhbk9kKZdD8EnmCgZQvqupPHAFUYd6R5sWJL",
  "key25": "5JUPt1dLHX4cgYsMCjdVq6TJT4o71bBizQWa4bvdA5iHgbTEdi4LoBnedraLczvZyJjdX38WVG2uSkGjx5yn2Prj",
  "key26": "5ZJSDUXkAFc9X814w5jojLxA5Fn8spHkZ5nUyvHz2vuWWg69j9qC5pDRGZNoazb85Cjxi7wSZX7n9VFvNauZ8vmP",
  "key27": "bi4hHX5thx1jA6eGt8Tq1V3fZV9JYAcuHrbtfxGXgpftWLKhVGmEWWdDnaW7NBkRqbwSD89TJYFLvBfVJFsGpim",
  "key28": "2wS23qsnE6aKGtGXRcKaPkp8oixsAsgeWJGULE3AhZr7itTFqsJBu61yshz4XZdVVwReWHCNZvhHffuDeVE4Mbzc",
  "key29": "3zwspyLqvRz3EkxHgnD5gDvw8SpDsBXMrMiJxFxB1hXYxaeb6bMXWpQ6KuK2VbEpdhWzGLinyKNWrMN2tRBr74iW",
  "key30": "5dkzcsPymQYAX5Bez8Jw8yrNrc6siEkzv6w9GkREY36azdyutadshe3mqdpGjNSXcfztwQFFE74h3v47uYnwiJoY",
  "key31": "hcJ8nXPpot8dFYSk9kQRaVmtfzLLCZ1trY3CNXiRjGvTEGKRVzLm6yMdPii7i944sVT7hAqYyr5CshKKKWwFn8n",
  "key32": "4Ytak1X9jJganjT78qyTmpipbyX7nD9rVPc3RkeeYdhXXUp2rXHG3cj4rvBLhbWX56MeV2x5sftNQ67a3NCkY2X2"
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
