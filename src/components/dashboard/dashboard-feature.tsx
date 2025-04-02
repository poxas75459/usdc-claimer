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
    "4TTaxq2JQW5oFXqraShTsL8qJ2GCpaqxsYt11QvTo5RbjxnQ5GgPxHcFPnZEtS8ibXoHCuaCQA7Q57Fg8moaRCuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31jKDN1KUwBFszk4JCCX6NgXhjVpBt92Bxv9bE1XfAzacUMVfFYa4GcGYPeHQf7U6VUNUcb3XvxHivtLmNJHQjWk",
  "key1": "3q6K5a1dqVBHVn6pMFxD13DhEFHLxCtRGFKjRyaPGhW7yp5neju1fEpEDnuTrKavZsDDcLc7jkH6YGqQ6cvPbVB3",
  "key2": "5stohNwN3V2JiiiokCbuQTXxaZVDPusVpW1DSsSe8YexwSpzGgc8peo7Ea2wQyw8upR1AC3yfTvLSshx4u5yCZh2",
  "key3": "3urp3iJycWKCo6Hb9WtsBBp9Su9gwX8pxndTk8gYB9zFECqv1YaC1M7mxvTRM3J7BBTdiFJdkWx2ZjHhR6QHu9rg",
  "key4": "4hhtzHS59VFRxzvWWioEypesnpbwn6KSUhSXk2LMUTC3c87FSM7Rcmpd8wxLZDALLFtSeAAQznUJrNbpJ3e1oUHe",
  "key5": "4wt1azBEQ5jiSxn1TvufsgbeVNp9iFZSpuTQBajzwN2kg2rerY5zxbfyv42K3QZCxQAUkx8sEZnZvEZ9Da8KEBtP",
  "key6": "4w7MKSG1Ms1vF8Vkro7dqnSXm12pN1Q2dM74qaCYCAQoh5coaFcD9YSva5JKTyPqJd5L8Pf9afPSWDvgEAqVwcSd",
  "key7": "3SDHDbzmeRdELtrK76tJMkYiYSA2UF9NddStD1WAyCghwuFtuxbFLAeyEC1rw8tjrUK8jBGzbtPN5dd9jUQpM9E",
  "key8": "296AUiHDwEQEjS19fRCLTpmfE1FLD2cqopBzoTDhvfMpnt4fNJHjwGuRNhrki3rBm32GjYpfwYNWVeyCZhe2KCV5",
  "key9": "NG3Qn5MSyYUqXkQdxWtN4uu5diB1BpydSE7DSrKFwfnyY1nCUBrURnpGKjZbkjNBMxqMXBxexbmcohywoBV822K",
  "key10": "4vFPX7pFhsCn4Xuj1VHrsoswfC1xJxhvPE6mgrvYRq142mZKGWBctgo6rCZhX9g7gL9mKr4JzHkqkfa2TEoWST8v",
  "key11": "46LUQVbxH9XKNGqa9uhF7K6fwuUPpmNwvQwgv9C19wERD1hKn9f4LKoJiS7xtbus2Ra27zbxNbbv6bSo62LqpdMn",
  "key12": "58YVgk3trqa8Wsgg3gCgoHDmZBsh7D2NsL7AAg5jVcgiyLDBHc3MxD21yDXz6oxpqS8y7LZR1gfvczr8FUAj7kzV",
  "key13": "3p2SS8Wyw6zvhHh89uMBxDvLegwfr4sbfoVgr6XLU4iMkscXjJNH1U2kYw2ms8CW27Ba9UD34dJSp4EdUvrNosYa",
  "key14": "4D9okr5r3HVPWVsahqCEJHenMsgbGDQgnnCQWNEmzbftmcq37jHrG9YFNTfs5YPFvF8k7FnbqUrgQbtRY9EheVh2",
  "key15": "5B1i3TF96kj8eogQ4rKudaSmxbijomV5A25feGrf7KYh7o55e1ZN5B1sTViSrENNjFnmTpVSUrsns6FZZpcKt6gh",
  "key16": "5Q65wcHDeBZntQYADKiYEk3U1QhJ4FWgVU4TJSCQrmcNHoE6wR9yyGhk3isV9tUgDeiNCDQNBgM16drgNpcrbYwX",
  "key17": "vaPRt6Mt4wnArwy3nUprzNmH4yAX1p86StNuaSYTDucXBgZfQUaGW2h6Q9b5diUw2upeVDByRyhbpyDM4V6W1vS",
  "key18": "5Rc52mJPQKgf1211ET2AwQKZZcqV1ENWDR3YhTJd9TrZeCXNMT6t55abP9ZrnXSFHfoq3cdRAAAqKVyn8zw3B86x",
  "key19": "3faxWbPNcM53iGKAC3Xzfuar4UXdgxMdvFqrDhXAhvKxmEU8eSzsxeyG6j4vWcZ5Ec7Ka5rtEifpEtkqY6TnzHbT",
  "key20": "2m941NyDbRnbWoyZYsy7brxAK22Qx1e8zP4kprzkPEtwc2V9apyfc85bvXxCSW9FNXyBPvwmPrroRZ65QUEAyMD3",
  "key21": "4H1qbVxjyaag1s3GVFjHYu6GG1ZnXZUBy5Mmb9rDBEfBsScZRNtBtKTxF3XjhTWhui7TnWsVdJnUK6WwRoJaTpp9",
  "key22": "2XpW1BZkPPmnzeWQkNc15SyXLL5eowyWJavFd6K1e6Saq58RMrorEF2QHhGS5Q5wn9Q73aEKPGSu6iPwsW3htTh3",
  "key23": "3g1bwi4TWdAKkynYm8e5g3Kdd7q7m4MaTFuNzQTUqrFGVMMGQPXMG4nJpF2qiSGYJgfTnFhJByRs6qZH3Tsf4oqK",
  "key24": "5SyYk9U1VJDY6gh3AHVmwoHsq4EBWvwe9GLWd84TPjwr4zT7k46k4ykoGCtZj6FpquPsJbBXLcBWCvtUcr4ZFJyq",
  "key25": "bhzrRQ8YK5DHiYg6Sws3E5Mp2ujWkA1tzqqF3kpSNCaWypqfSwZuqyhymVGj9TB6YfFPfoEuURtcjykVzuwSqGi",
  "key26": "4QSh2dyPNcxXTfWvLo1jQR4w4y6ThdYPbEJNNqUbYHptZrwFFehjov8uu6wKxqFXtfLwUWwn49bsCQJMAr4bbtJA",
  "key27": "5RDYQctXJz2nEWNERixJXBzNd4tMF2SEANSa3bAzPFTAAKFsFq9mETMdpxg9u4iK495wv1Uf4RG3HLQ4gokD9CnX",
  "key28": "wTR3YW2rYKoZPJwa5k6Tzatk3PHLHbqzoEwwgFmiYycnNUg86CLPBiaxjvhKmu7Y9aSKe7QG4ewRBxPxKVonPt9",
  "key29": "5h8RsykmVFsuWdAfnpHgzRPo4rhmpRov6EtdafdzvpLFTYhg5HPSRGXkHybgpUU8vZrqhZ4Ev2ZTycEq4MYTD7Bm",
  "key30": "4czgcVUGwhmLEwZPyEQqKzpHsDsxpK2yYCdp6Fb9cfbbAzHC4U2SWB5ZaqBfTYExrcLzL8ZDgPaJxTVPHMjN1niy",
  "key31": "o2bJZ7ePSdHiBRYgGvdwo9vvrEk7YiGCfXBD1xtX1V1ko5RibJJYYNwyZRC89yyjELxATj3fsMnbgMZDCWPHzSd",
  "key32": "4qkhrrf35tbTcWkHam43A746oaHcB9qzueE8wQ3Y6t99ZSJkKt3wqTwadMX1ssVRL8mbyVuQPoy6gRszRACEyCRM"
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
