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
    "61VUJyYKxqJ3Mj5upcP4JbPjhC1U6emxykmEfXgsveRDWuMk6oUUZJEaf4YyRuJHFjoXMDcmzPdDi6GW6RW6G8XC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "myowiJE1bTS1jRw9kEFbUDiyPJoQ77f8qANT3oWPyGw9CKEr3w7NaziPBaE9XAf5i7Gzx2f8jiLVw5BrwM1ThHs",
  "key1": "5FqoiuKRqyWPcRk6jHdJ2KyBoaC8LqQn5RU1KiytUE7EFqPz2AZpm91cS7J8SoxU8wMxavwqU36X9Ynq7DgpE6jF",
  "key2": "4iBafe4326Fedf2jcE6dbeJf7XvvxudcQCFqdMQDAvXCdxAw3S7YYD6tj9RDJWXVNzd4DrMsqwNTTczoQfRgmFaD",
  "key3": "nQpHj5KymycQQZPTzj5fuNHmctmHL4Lu9KXrb1rQGaViXFBunD3vR9DmV9VcZFM7YirCX7cnJ5vEaK7iZtC8c9T",
  "key4": "2sLYBYauehg1GSKf9xJoKEy9tJsUD4MBrKwKLcnEULgLPxpMkkjXiMi3zE2sua1FxcKymoBppvqE1URyCchgXZ7J",
  "key5": "5tDh7SigHST4N8YAnykCZCbx7BN9LRzxtU9yoBD4mfUoV8Pk9TR3txKervHjBCU1Puefh6TsDLjwxEt7exL8fABz",
  "key6": "3JPpWQUpyPXtKgfYzJnn8Z12mQFWgiCS2h36YRZDoCeeMDfEUuzJzkTUbWiWBebFescvwji2vZ5S6swVegiP38bE",
  "key7": "3aDzuMhQQBScWn7ctZSXCrkyFuoTzERZfpDfDxjYLHkhqtDZkhyNsmtX9ZPiM2yaJogz8SBYUvjrCg5mHaBdpadw",
  "key8": "2iWNxLguv8n6yN11XxXRXRjwz5rLTMVXQyh4rDxQjCY652cie6vLcsF26sFvU7HFLVNDnKg4W6h5unAfDvnFdvi1",
  "key9": "2PpWbycSPT66qs5S9Tmyrs91uJw5nXnX1NCApibGEKXkPEwxpT9pbeGmTJE4xGi7QkPoewYvX2dBey2ZRpDFrzSQ",
  "key10": "3EwKdA6HFqp2UWfRKa1kgyXgZ7cntjhHyrqfYjXSrqu8xkbbTJZYBxWBEgT8ph9D8DVtda1uqUE1ZY1xFCToFvxc",
  "key11": "3aQ4DAMjizJV9PiRPZca7tbXERUeae4NZxJQMgLhwDQQ5SAoqqB34dvkcgZsNZV2JowQk2JLe9gMifupHdoFmMGs",
  "key12": "2hqJBkH6ewk19DJ1rLvabWjRJXAnCz4XD71dHFV3ESoctzeKvnhKTtp1wvD1Ugp4gN4SrQWhD9jJP4oa1xag6rd",
  "key13": "4P6iUCfjWvQZVUQZ4nWdxdRHNTHcbjg8UoYym4ogLaKPwVUvoemCBU8pBBswbA2iicmTvB8BMFYmjydxdRcxoe3B",
  "key14": "4omC4ZPohzdX2ohGVwZPyxtaTsJjAbg6QZUzPwe5e1PbBFU8BoRfdLbpFr2oYUAU8tyy4XyQDvtrL2brzXbEzdDC",
  "key15": "4Kxj5QdCFJjfNFJJebQyHqmDLyUqMJJvbzvtP8aH2r82RS8DCVnat5eLeSmZRuMG44sdojm62LeNj1TxmUW7ViFr",
  "key16": "B8ZiWjPpg9BF4a8drovfFeVLuK3mUUAkcggwrZLcvk387VaqwjtMNcx3gBnNZkGUJiyxib7F9MhVbsXj9JxkQ4Y",
  "key17": "4D3icqNdnB4K68G2ames6hpBUGq7AcHDBNHaRpvJJFNsoTnCGXPhWfzm5WbRcJzKasNjDu1nYW7Eyxr8jnA9bQPg",
  "key18": "2mzRAtYqcfrG1SAkQLoZvTxVWo9jiTaDjsT41PUAC6mxtUY3NefqHajLYw1APQtWUfsfmaRKNZ2pzSeunhfvCaPm",
  "key19": "ZgrMQJFEDmzjbJWPhvQkHQ4QD5MhUiMeqYk6dsy2LewibAheiJuictDDSfj8sKiHSwLVkcgrHv8XjYZML9QFoHF",
  "key20": "3aVnmtDDSJ8HtksXjowXiiMZFXXGpwiwTJ2D3gPKEnFmXYWGiqFCwPEka1ZoPcs4Ro1o4YfYcWgpzoTJtmPBWPQh",
  "key21": "221NNF85oBKYQb2iN8Ny3ZZ1K9XWFaAfVNmuWp6BnLhZDjbSWMo7j1yuDdPS7BqCBTVtJkhdN9rK3onFPxoo7G2Q",
  "key22": "xBQXCcjuf5pkTrdbsooVVRmo3gcVfe76mk9UZ9eEVq7hPTtXqYZQdYaDFCmYun3w9Df1n5fcG9rNvPsuRqGQeeF",
  "key23": "33dfmy5XXU1wHZ86U9DkpbMwbWf9Q6MD6VMxFapp6MUdAsJaeU6FKXpAuAHotC3viCaTVocgQGxV8W7Uvx8TwaYP",
  "key24": "53oJFLohHPLDrTYjgjMQdCLb3nXth49UYYi8eJVMCVtjdmcjNFFxsfBTFfzw8bmEhHXkGauSZLUm9ARYdGLcLT9T",
  "key25": "3PW2A6GhvUgATAxCkWRdApXJvFhthpif2hCv2HWSbspKsackAyC3RAqeqX21wZc32RSo6VcUHkRMn4f79eRYq1E3",
  "key26": "59NPPMaozNfBgys9Qu4Mn99NWm7Ffq4UNVkU2RqaFJKwZsh5J6hqrW5sMur5krWEHgY6dAEBGm6eZULJ5dMerKdd",
  "key27": "4CLQnRRfGgg8P93rWF36SrXsPiseBAXpvFDjCRkSmWdExFuZe7xFneDfJvVVDD6z9tgUExcWLC1hNWeHo6KwCS1c",
  "key28": "bio2sE11WLvJ87Wvpwx8sgJHdvDQ1CafLF7zi3JSJMQToqmdyQiVgiE7m5fkFgZjVaq24kZzRGwKK1Y39w1f7CP",
  "key29": "2d89iJhFsQZgDo1EX5jYVgrtk1mBLCR3s6tSG7CFKDNNww65rVBh2qATirvMLcjhsXBTaWg3SYkoaEJmyvooPoQd",
  "key30": "2TJtyuAq7yuBcDxUWZkkHP8Abikeos1rRyphJc4X6b4YYEmHCoq1mQm6gEXxP5iACra9p6vonuiSvM4EanRh4AqF",
  "key31": "56Znv7ag9CXSW8WFnwhUNKXNxrGZftqD4rWY4ZvHoKbiV6VGMdfi8PwTS7hKqBBL9xnQBgy8wXuPwA8sgc3o758i",
  "key32": "5t3pYSkAJytV1TCSzvVgLzNLq2Sh1xryiyGPSbQ2jah7NnrXekXunoJ9DYLXpbW45ypwVX9ebzM3U5HE3EVKijWs",
  "key33": "ZeSTgoMkQowr5SwqgRt9Weug4akKM61uwnU2AQwmmawV6JgxYzGQwiVzPcxE56UEvJJVcvJRmNTZFvzxVcPZSnL",
  "key34": "BPKSx3hB8CacgwJebuoSH8f3MedYghWUnuLee68Gs6RfZiwWj8HPVgRiEPx7Co8RWxTWzcCK2xw8E368XBmHxqc",
  "key35": "n5MMao1pdNRH6Y5czRVC8jj5mwQzkLF72JVXLhHfB7fE43KC4e6GCS4aWMiHok46drpVcsRLkDtzb1rY3gy8SRb",
  "key36": "3bik9hnUh1MtdPAgqwZJvejCzgvb1zmB7zUiZRJA6nfZNNGmjDACDd1J8kC583zQBx1HB9Ng1FJBVVCo1SyvPUZY",
  "key37": "34GbK15bxNDa9zLTvpAersnb1RqGbpk4PmAQxzjH7YB4cvZ6G2pQG3zomndZx5mqkPyq2K1LQSSCs5yEWBUPMLNQ",
  "key38": "4ovkdzTG2f9FP3E62PgXuJRxVaWwAbbRyKwGAEX1fD456i6LGXg7nPJLEi3ZNPTdG26E25dKLeFKUje8BXQBgntM",
  "key39": "U4DUZSbdrFnfHqYSydjvdDE5rswcRxgW1BWWw92kFufyYvmdMJcskpvymK6z1zJyLksJaci5i82DiR83vJj94pu",
  "key40": "7gV7gEim9KDKPMUryD7mAczzgcC3eFymkBz2BLkycU6zKHQzfpiaGpfQ66KMgxD8taVuaAhHdoPdB9vUz4hMiLW",
  "key41": "2Gg8HaNjuNgmJkrNk1s16766dCpNwxpkeeDL3CA8Wv2YwCHQgp9k7chd3cFKzbGzUgdrS7yKLaPdGPwwPFvhARm1"
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
