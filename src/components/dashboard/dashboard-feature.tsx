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
    "GD97Q58T6SMvmBRGXo9ECLQHss8J9rBHBJ1tduqTtEjGEcGSLCknv1vtkXWytKYDRnvBQdrfm7qfST2p8xbyvJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uy5gWZzCmw4NwqDyrgGuaBWPUHxprpjXgFx9h6dbeGgELB6RXUrGjbKNiBNMYSM4y6HN4Tsb5UgkLrjVdn4EzmT",
  "key1": "sgG9C5d2q7yiJZFBXn82WWbiKbpjHM4qJDssV3iNHzTwGp7ykKVTnh756J3gUvuKEZfunKjbkgh1qkhqUfsQt9j",
  "key2": "5kcheqdLnZU86a8a9gKmSfXX8rpUFc6zexHJ2PwvjwDJ5rXxbgkfx96e4WP7P4JBVYQyU37UvtDq1fv7TuESV4is",
  "key3": "48UN8AG1tGCCZE3NwXHnJTDVnfNvAECS1GoFvHDWVFsiWnmsLiUwd2xCBWYAZzakLFRdTdwNQC7EDMN7rLpWQHWN",
  "key4": "35wXJmMkgtPj8AnEtuwVUh59FAyrXHRPCQu8cLsxsDEDDXaAbb2gaqPRpcebNFBLnnSAqe38pGJ8SFM5myDRLNSx",
  "key5": "5A5BCWGmgFzn97DsPm7Vefq6uq38nuFgEqun9X4mJat1exhuyknH55GnwEvEp8nHZ7LiHjYQVq2gLTZrEqRbXNkE",
  "key6": "2pgmqE6acbL9pJAi53N4V29zym8kiGZcWryfHfxfmZMEwNBwoQebmdAVFJwxYGhRYXLScgk8qMLhzifBPBwdsDss",
  "key7": "43YA23Ef1k7K1QRjitS27hnRd9ivYoCFUwhFQV3veih5gYhM32yj4EpLqUBZ4yA12bPgnEqSUv9zTtQaokfo3aE6",
  "key8": "5127T8h3CiZcW6MtYwAtv7GWgjGE64LfsJvsJCJfWSbL6BfP2YLT1bp5jHQg85fm2We2MA9YN1mLPR1k1Us9z9uU",
  "key9": "5fjqwFEE3GprCC3m3hXBvnxLeatD8ZPc9Tw3F1Jif9q1Z6eHFDeTYnbB9LJJuaVEjmhrJt4xf56ymeVh75Ndjtof",
  "key10": "54nVTRy5kpxC4bRVFFGFZokfZjS2JhX6TfgzFLRjmeCqbQ7za15QehSmAN7GzWvJ1cKUUYsg8yEr9bL4SWnJXYw3",
  "key11": "42rVVJtoSq5hWW3zsTXGVgbnTTsej9N99z28Y35Leb2n6P4T4xHA1A2Zev9m4ZxMyVnNNNfBVnt7nRdKHLF9oNYo",
  "key12": "DuKcFBduSK1j8vG6FfC1Ph2VxWpYpLGYE23CacdDxMUyHrx1z3dyBS4EyDvdMyShSQCjbWHfJVzJcKZjJgi58Gi",
  "key13": "4y7w6pMbf2d3Ea9NSAtBCAQKVbkYMq88goiCBhaHBJ5Tf4uXLsGGxKi9aMJHXcHuS8WspiKE3AT4As5FpPUwtTrF",
  "key14": "4RwvScF6f6zzcMedcZ6BjUSA6NFu9tf6fh6GubgQPWe7b7GNctxG7CpCDyks3geNnsuwcZMnjdoC9M1c8AAjcoHd",
  "key15": "3GdCtdveGLa2N8bXTGru3gbfUeCBXMc8fxFCat9qPH2ZdfJ4eYk9uUwyqdXkvYxYS2NSGBpp524mNgkLqny3BnS6",
  "key16": "5aFnLTfmB8EzXToUvQ9ryf6gBYUaLpSk4aB89FbcqqrWNVAPV5M1rZJ9V1Y8wTVRvR966d6ZffGSHWVNrnkYyA97",
  "key17": "2BG2BQQMC277JCJMuQ1r3pDxUPGVXGEBRJJ8oDnN3Htb7k1sobpTTEohzHFSx8m5v8SnkMqvFqCUhBB7d221bppy",
  "key18": "ofNLgKGr5GeNqnzKY1LtYFYxhQREgQmYUURjeAYz6pWaVdikJZypb4Qy3gZAv6MsgZemgS8kKX3kTkhjuJYBYid",
  "key19": "2crWWwD2wjfhjTkFcKHTrKD7Y5XP6zi61XMQwHWA3U3oxN31X4ja2dKPqf9zZzgTNz1S3Kh8iQtkaWDznDySkQr2",
  "key20": "2kisApFkT5oGRxquRbk33VibtuwnHofwmRfviP1QmDD9fWa6pK4ZimwzXo9dK7B6fyP4TKFj3c7R6Y1KfhmfkhMw",
  "key21": "26y52izrv3NuJGCrCKQL1Kuxai8kxy8WZgrUUctVAq6CLG3pJUfcZXdYzYqSRsXZuemkbhQAQ9HmGqDnTHZccbp9",
  "key22": "4PT5bJRsVZFijkaFKG1QTJvCFNM4JM8SB6w8EBfrLzFS4XJTBkwXGpCUoPUYbjbER66AmfYaKt82hgvxixPykXjg",
  "key23": "2TjFJTqJmQghoKtE6ygq2m5sQbmcxY49W4rUhJyP16Ptz7B328JXLVtybGYPgbJG4hq9ftxSR9KE9igXGVPiPLVy",
  "key24": "3km5ZMRer2Zx14CjtcFMwr8t5ZduSJT2ozvWNrjsi2MKmKTX4nkVpHNzntRAVukJzXx1EdB69vYXT989m5rKXRyu",
  "key25": "Hw8r8C6tkAorb5z1smuuzkmL21Sr9PpBTYYMw5W5F9EFyTndL1BUAKsiAtzKBcFUmGfbB7ETRV2AdeUK13shWsT",
  "key26": "5FNrb1pZ6L185kMyQCGgdVoG6QL8shs3caczGb2UX1WGFm5ZyajwCiZsLh3GuH8MMALmSsbpq148wY7PDFATiB1R",
  "key27": "3nhnPbxS1hmvx9texmmErGkAtQgL3oomJmHa738WjURGVkrEdr4u35VrQDpqgFpBBXk684scPR152wqH8WXByYn1",
  "key28": "3pX9mn3nR9gypwBzqTgP965iGtaTyJZQ4xpG6wMLymcm6qGnjMtjWp4ox8ANbnVd1juHoiTpYMBYPKwhsHuqsmPn",
  "key29": "44BTQpGr8WMB2EoXgjHKK5HaBLTNoyLxmvwJBTgWZ12Jmnqz5Adw6kME2CbwLcdgBYEi1LdhxKF2tn9ZQviBVtro",
  "key30": "5keEo2455j1oNEdY1i2iDrWNQfwfHGZr5M2AEv5tQGaRFMGbkfETaKwjtZ9xtZyUrLAsJxZ6NHHsCWHyZzJ5iWhD",
  "key31": "65mfUKLBn1GozdUbvF9otccsAHfVoLZno7xqDYgYtubfGDtPfnJNgxeTgVn9PqC4GBxsAtR28CRbSW3iA66fayVx",
  "key32": "c5FyZq7AcprLisGJoJQ2hpbc7SWjASJxDozzVwpAkZCpZpzdGfZJh8GdhzUr7x6xZVWJxWTDdwNysBDQr3TeMc2",
  "key33": "vGND2WPHdLdxG7tibQmNJ6LQ6Fg1KXosRVKPmbspzSnU1tCEKUEM247SGFJy6YafdRqi9Xar5WrZrE7WSUjwJ5k",
  "key34": "3ST4mKAadwnTdhS5CjodvPg7wCsRVKLRxYqLAVnKpksV8sU6jEtrRxN4fHMLm51tS7f4tSJj7czvckWy129oR4Dm",
  "key35": "4FtHigY7Mg1rVQAjzg7Un3HJzHA6vFP5LkXh8chsogKkGC1npCZDVNMVNq7gzQU81pF7owQYaGhxZkpQUqJSr832",
  "key36": "5yfMdjHd7bYpvxhnuovS6MFbhjWXdkh1r971oRaTKSJrxHJJM9UrJfVLx7RCKsmdwig6mDvzpVwBQFCENy8rdq8z",
  "key37": "4xdPWfyaS7bpcYpRw2pibujWEASxQ9yA395XvzGD1vLWS4TezzcuRgP34PVE8GtQJyg2af4HLxFMWEVHy57g716p",
  "key38": "3r4Tpb9HdAesHQBwefGLnnafodMgESGg8gtRc47cF63zu3efdrb3Xq6EsLETQogbJ9djWJ7aDCs8zhrMTaTYu5JB",
  "key39": "3rWi4PH2SggM1bZNysFWiXmRvZBTixynVGAHSvak7BNzw4xt4iQWyF4kUjeHU2izFNG2S985TKsHM3SskMTaPMNH",
  "key40": "2KrS3eedeRZUvXFzZQDwvdHVzQryrcDspXnV9Qyg8cpp7ewQjSCbtuCSWfBiC5Bbm3xkpKTsmFvbkey4NhCuc1m3",
  "key41": "4aWH1ipUo2wTte95UidtznzGLBTe7yUmtyx5j8jGx8kMmF8QgrBXNLXhuAuJiCbhx7kggbNXArQVmvqoEcUG82m4",
  "key42": "568rvP7bo71Mm7dGdDSiRJwbyZ9xReEXNPfCZrxtoXwKM176u5Wxv9jdenf4BcdsDQ4nZkeZ1J4yekoKoJLH7hns",
  "key43": "5AExQWeWU9wbbwLEyhj4R6KhXJxrqkvEhvRWK2XRGYjF9Dm6BejhJZ347E8DSC5A34mp2qkXkBZtJVp6pMC8pcMU",
  "key44": "2tRB1ZjRm8PoUQjU7H6QpJMbm3ZWgMZKY631Wd2FNMKatcsygCVLhw7f2GA8qhDkNZhYm9i2nh3UWHY3SnuPhpY4",
  "key45": "2WQsDA7Hj7dpLEWhHyzPfepN7fcfWkGFVNniYSavA6yWLjWWmxzmLx8NDemTqwwEp8jRALEjHHyaUA8FczbqwDwM",
  "key46": "3MJzDrWP7Kync8kksgr2JQDWTUcH6hKpEXUe92VvunDASa5RsuXXg7vK3PDuDRQYRAzrKzJUkW8P8cgMMDFsBtY2"
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
