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
    "4DcD7w7uhGosJMk5iPaT5hMFqSj7VBt96jKSqUTMyjJnzST7NJpjqjaDdamH939bCmYJzV11KfUDf6ocRy8JGWEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dw9ceyaAmBvNu4h3qo3ezfA7eckeatEHz4Ew4Dj9vvNCDX1cPh9HYCdYPKwHtJ7y2pcJeuQDReDk6MaszP51TCe",
  "key1": "4f3azHP5E77CM7gTXnkd8MiN3NgLacAGWVX6u8c3gTkMKPVWQV1JsBewLMyrxSNgcQQMumi2yz5S3b7mWMjvXtaq",
  "key2": "4Q1fmTWD6P3PEAme8oH42CqFXPJvRQBfQspdsz1EGghRacKtxEgzHW9eMgi8c88NUj7AmYPECw1ewQvoBALMiMPo",
  "key3": "5yMphjMeZ1Kmn45ViNPj5L51w16iEaMq1KaWN9rTyHkAJ2CM7c2WrLm5cQUhsDXq4yTjAg8yo2rksS73itYUkTRm",
  "key4": "3jYXmVyT9urMgoU9d7XXsXrjCHE7pvgoXTfizubtKZnoYecgeYFVLs5m1V5k75quSAAbKiugZvnqB7zhy4UgjPcy",
  "key5": "2ubR9pDt5QzSkRALm78hrkXVeXFjG4GWT4Aiejo5KapjFJpmT47JzHWUPYEBRQKjAxdaBMbBLCELucBcAZxqP7WD",
  "key6": "322xMYjuscMyDNcXvJxLEy3CkYQ6mQY5jXbGAD7bK3duvy86SaDtGYU5a81DksVScKCu8YuUeAKVbCKRzg4xVXft",
  "key7": "5iwJ9vT1rVS2A1UGKi87euu7xbVGigXsEdvnRgwfoTtBhdb5dWmgQP5BxVcu7C12dS3bxxNeyEzc6xPCWHY2ndqv",
  "key8": "5JVk1gJCF3XcSznu1JpbyrbGTcBASGpfdtvhJwgVmJtkoHJAifmW7Cbu6Fpwb8rFTuZyorsmQbR1kD3LVAHLxE17",
  "key9": "3TfSRCWQjX3W6xYKg1JnG1rCjWugWaGB2BVgcWBPqUKjwqmeb6oF5MEuJrNqZtPAxVRQAsKBpYrZU1yEhsXRTYH",
  "key10": "2tfB7tzMjNWqJkAGPP66R6FvCpBheGTsux32KezXMpiVHLQXRfqA4k75zMxNCoJuCcaiA6uS3RcenX3KRvzYnWQ7",
  "key11": "62UKCzayknGyLB3YeCqATaYRgQMsLWi3EorrDeSJqYwLQkmwi5SSTaYuA9N9aoR5bDVNGFZNgFJnmicFTbKQeDGY",
  "key12": "3DTxcHftTWqFnWAY8GScdNaj7NnTV9gkgRWQqzxYHrpEHCo46GiAT59paQm9JSAHM4zV2qFg7ax9jqh4iu22JRAu",
  "key13": "41GM9rAxbsnYfB2WhEEqRMbLzF3gwxjjetUVQDC5SANu2S6Ha9Q9LArE1ZspqcxrFhrtQesqovWu8dG5uqhAUoKn",
  "key14": "3Gv1M9tH6M9GBPQwRkjzaPdcnWgCe6GBR5mxtVDS1CeAyEvVmd55vYRrdtYwcRMSXDoCxYgUgLuFBA21nqkmyrM5",
  "key15": "2ndCp2YtUPVr8dNTMeNfPDnmyj7oX4SU2tCznHrcowWugfBZB2VosrCARqcxNK5homNpsmtwSA6CD6azr71kXpdt",
  "key16": "5FQ5JU2fEeaX8XB9zkgC8DL1a8SQeDzr1Zwo5AXCciqu2RodNWKLrmn2o7kSJnAePWqmWn72ux6jcWBjnYnvN1Kq",
  "key17": "5UXAVhnnDxkpLTvH3eQgYfWEmgWW5wJ6Hb2j2n1idrQHawvVC4aYhHae51VMtM2cPoHKDq63ni6ZidWmYw8dw75m",
  "key18": "2TkK286gZq8QxTiyCfMHWPz2RM7Ry2CKmFUcbVZSvsJmbSD9cmSLJXAsAoUtKHyahtQ3UZgfXV9LgoRJwbYzV1Tc",
  "key19": "4K6aEQPDnBJKHYHmXTrFzQQDAuEM9PNtwxYBPSqjgQkHLozjqwoaFHMsG6UVw6yHfVs23igWZ6ffWAWGjxVQLvEg",
  "key20": "3WXNi49M4q5RhBfu9oF6aana4gvjsCf2RWp753JuBxJTVXPv9ZFkSveLVXKfPXbCqzMPUXwa5Cfftii1WFBrBznQ",
  "key21": "8GK8kHYtR3gH47eR5C6xufKHbjPHZuq6aXLRjHjnKHNf49n45Ticd3HGAt8cKKBADQGPPYgdizUZCxwnBuWLFjT",
  "key22": "3KcnLKwxKAXNZY8Fej4C2HA1J3Cddvdf6qyTD7uUi6Y2oZLqoDfrNhf9kAQ5FUafjdQfLFq1Vdfsnba8KRdMXmgh",
  "key23": "5WwUBc7CXXjtP6bkE2khRzFMmnxkXXhvij6rrKJ9widkNZbxf21pLYAMzWhfNMNMHnQNQexyqhSn3awqwLvudCrR",
  "key24": "4QHHs332b4CFRDxq2sNmoG2HRpNgzM1C6KBGoTB7AAAYBudMSL49gz5hr1UiJt6aShvht4Q7dLZuri22RhPyShfg",
  "key25": "5yyfh47eH9ivhhGv8j1n18NiHp5UxidnuvFiRUuVBRji4n7MobfiY3icT83XAQNBpAinwCMPtpWhpDqrDBkxPvRi",
  "key26": "4UvqQThvCxArJSJUBeSCSPaQG9V2kxLDySWsEbtmojQQS7rk725pMwLFf8TkCnKQydXVUzXSkvnL3vQNK5AJodCu",
  "key27": "3adotJufnyPJPyXXivucsog1ap1xX1QwnQYXzk3bGxtX5mKrxw1Mm2M5rUhuM2tvN4aVv9pDVoKYPwTfZEDTKSci",
  "key28": "CNWtdHBiXyet28GdfSZcYagTdiDunyrFUbd4hYusgSzn8AMCDiZzkuJnbpC2M7vsB22QxBFPHQSKApBUgcyy5TU",
  "key29": "2zQoVcAsfBNPyTVau6qWi996YQTTn6xrjYLkgu7DuqPXztDH6mQbcAvDKZRNqBsHWm84wwTKYmjq8wpfLiJ7fFMK",
  "key30": "j1aXQg9e3Saejk85NGrCXFKfdC8MLDDoSrFzmMjgVdWV5u2fB5iPVwGBgcL7K1rZnr627vUbnT1f9FqRnDoCo8N",
  "key31": "5iSM5Te5PesAr797MRzTHzGxokPqLWZpsyskwijdT1EABQP6tav39zuaojU1Cpv6hxwYAjZVAVjKKfz9Qb12wcc8",
  "key32": "52f8TF34tjjkJMYWaC3TWG6Lq4rAcJG5hFYNbgxUij3MSt8J8oqwDpWcRmcXGeRzsr7LS6RW858xLJfmtwjoMs7y",
  "key33": "jnQhd7r3ZnePrTfHjGwAq8QPGuHj7z8y5XDvajC14askoG2tdVMMg1GP54HoVVs4YENUBA4nvxsyrjpbAsVCGz9",
  "key34": "2tdb1GZjN4RC4DrUjRLuaP1tdoCbjQ1NEYhsV7VFR3sHnnDBCD8EjDhTgsjK9kcSDZnzMQGJpDKMt51876HdaUjA",
  "key35": "2W4bSttPUTCicMjUWQVNzFe2pVUBACS15KGtXNBpCF3VYbyUiJ79bzLuwWSKnpa6p4fjZ22b7fEdP4e9Z37m9VJe",
  "key36": "4obKP52FxP1QWQBkMMc4KndRo42YsxFoGiDjh4UAToFmDqbm4NKbWU4U17LWW695aQVitB3LT3yRS3krSJYRaLNF",
  "key37": "5QGwJptmuDZDfx6iSnhNpNnYn5dsPMkbUmn4T8oZHjY41fFm4MwfhHEGqaaDoqfDJ2okBsfY7WBbwKKxH7efWnJB",
  "key38": "4mfgUSiGHYkGxQJxJcbpUAszsbcXdGSve8BQQe43fWrAo1yayjhJjEd1VxBg6w7L4sf4GDPv7UMfdnJG5kui9isW",
  "key39": "2oLrwPxUxTTa8xA3qmQcd1rxPhVGXxJ2NFJbz4vLmKz7dz223YpuBwpBSQaHUvAkHRckG16DZpYK4Re9mvcc4oGu",
  "key40": "4jBDYwP3RnU9w1wgxsYBWZHVx3esaPwHCBFWei9jsRn9LYQ7SBiabEXN7H58duVApP5gLBQb4mTNuyzMRkdYr2UA",
  "key41": "3KP9aCsExVm7DyPW7ejKd9SssHzb5vWP4RoGXftHZzJcMxipzy4hT27QfB62G2c3jZZn5kDyfaP6FnhE2gtpoHFh"
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
