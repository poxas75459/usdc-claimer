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
    "5b7boBD9aCFPySNhPvHBNJukZBEosxqqqNo6NV7v3gQ63sHbWUNC9FmRYdEd8YdTL6CG57mQYbyRGHhFy7ST2NkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GE3Z9ApCtVBYEgRNZg6DRqB1nSb8fegdb99WAZHxhohhruT2WsdP9G2AMNuta6mT2wUJDrJsZs64vXjbsMdtucC",
  "key1": "4x7rqhw2JjkjNiTdqzA5CPMAS5dznVo8ErXrcZx3UsCZrCkhg1Q2BdWqN7a5U2pwzaMastVVS3cmgMx2ptSkGNoe",
  "key2": "2uodsuAjDjCN1ZPiJDqC9diVZKV6QEnHjYyJKoqLbMuzud4Z1RU1jR3WjJZrYH7sDqtehxaupDhiCT6JZehM7378",
  "key3": "3aqbfQ7cQiPRR6QFegdR6E4JLKmMfu92n1r4dk4JHTaa3bqRMd17C6zb9jdymKrqKZprgyto2Vj36PCdV89oz6VR",
  "key4": "3m6vtkzhp25uyLys73YJvMHL3Wfkw8KQLqa5imubZ5i66LaEHsz4sjpKwkdsUHKVrGUto3nMgRGByj5WwxiJCYGx",
  "key5": "4q2fgYcpr5skZa22JjSJorwT7oTysYeRVM5BTTCPuNxnZ7H78MYnqLbXwv3XNB29vkuYmRtBNXDsW99oYnfov2iA",
  "key6": "2XpZGW7dqXSBm9f494Pu6ZmAVnvPY9srmJ6QQXWdZ1CPz8iwQG8SMQK1ZCGc9NXsMXv2GYHKqJkfEFHekixd5An9",
  "key7": "5YRLc7hHp4KiQf9JCBy2PtuD4sjRaSUVd6JzVzFtTfnkj458N6a8A7cQyqbBUyC3qDvZwYbeY75bYn7W2mZ4AiB9",
  "key8": "67XTuxaVW4prBUjMKAAE8P8BQAKic9Au21tVBtxBrqgqRxytqJkyoWPtKJHssEVvg7w6mTcWpfaQb88fwrwGzn3u",
  "key9": "32rxcdqSRieJpmav8yFsmyQEgknzyuEdsG44jnq5ZVqoMjqzJdbAWEJRfGBU5q3YWYLrL9pjR39SHy7fbDTFbQSn",
  "key10": "5J4y1k52uoFkQ5DCbKyk3tmHLaTaQybiB9hdv8hauV4yByEmvGzijvmmRbLS58mEwa6EU3seLABkkugvLtqKcja2",
  "key11": "4vqzZfcPTFcoym2CBpaejtGjJzAF9xtYPY2XgGfLk48DwZnWPmsndmCgsGX25VbLAXYfYzZ9kLviJtAK3x5qqULA",
  "key12": "BohpEXBwfALRge7U7YymhLWsuZRPk232aE4PwidYL7WecfZotCnMEWCc9smaM6Ufh3poYZZ4qYWAUF4DA85sSHr",
  "key13": "2VDR6SThJzpN2UX22TGhnmWe5cugWJPS5KRHihNwbjXsJrJbST36NQcdwu6qkdMo2t4AXnqCTNJwVeAcBwqo1oEv",
  "key14": "3RBiWYenhCWwtHRkQAWyG8UhQCbEpss7xxAGpgkWEoz4xeH5ZU5SceAcehE9jXtt9npWY81KS5gQVSTNLd2xGJVb",
  "key15": "5iWTjUpmAqDGu97z8YyjDfuAH1ktxs5AEcUV1u8jqYgRkDenNEF4SfdDGPkc49bX2HgybqLpJeUrXomUny3Hcmuz",
  "key16": "5ZhS5mocc9UdkYZ2McZdUY1CpZ9wWDmq48eEKsYTw92X1YBiS1H9cjN4aBLqUTuUVPWdovxwteiGmMcLMytfhGJ1",
  "key17": "noCVHv9Q7k8w8pqxQF6x1CAdGZknonM8hcUuTxcRsJCgWZjyqhVv2xG3KXNHEUGU1RBe6mXsquuvxHhXLSpUdJ9",
  "key18": "2K3jww7PmzaQxKyDS3ANE3yhWHHKHiePxPbxKY8yho1FozsUvm6ZZrScE99iyfa1GFV5PjKi3tYJz2rrYVkbbXgw",
  "key19": "TBeDw15fJZsdDoDWko5UAANaAuTNd9VtnYUYbZwXiDBZK5SNJYTogxd1PdMrvqDmZnVw9ZmG85HpeiqnrhA5ycJ",
  "key20": "cgwzo6RLihoTHGQz2tVj1iKt58HJLjrs1o129dukxZ9mgt3tSyP621SUwi3p7tKNELExfAKFraWgcPoibAjjY3p",
  "key21": "4YGqbWD8PgP2hvopK8kUnRSPnrzhQf4MHpnP4FNCpVMKTvw19GPyGD8ZCE6BzUhTg77PpSuPGeJsNQHRprk1vYXF",
  "key22": "FtSX6EMp1D1PieTWcusAwTdCxKPH9gWWMxhtgKZ9jyfo6AQA2aoFEenBrEtseJb1R2QwjN2c6mcvFc5wdB3vZFW",
  "key23": "4TKnynmkwk8zzecwokmncV49mnscUbSW9MLnGATnHQx5EF6DdUmM81UwHeTSqje3e7doZtTneoJo6nTUNdCzRCEa",
  "key24": "61dWwWVJL9eoqizAt2DM13czP595yWqipptdb3FVNjo6hoRas6PhWVgvgae37sF3Qb7x6oUuB7mnqLeuYmXS1T1k",
  "key25": "2HdYA6cWdEZnbNiuVvNZhnfQzrUbXnpxNi7SMC3YLCUvZ4uure25y8XBCuUcW7wDfUmkfvvJb7dVkQr9aitk2Qgi",
  "key26": "risNFXuvmsVrc5GUqeUnjyakdrfCRzQEou3vUytVhap5HGbGUS8SSkWqnomhFZHuiMMmd9NrY2HAMH5EicXkqY6",
  "key27": "3KC9VynnRdppjLQzTvEameMAerUzA5eyT7eATUvvtW5ey2f2T2tESu5TgdCkn34uuB1FqGxRPVHLK7nhnTk425dv",
  "key28": "FGwHYxRArKB2mF82qP1CULQhZEtsD4ctGzx8MvpBAu8DrQuA8PhdJJsG4zFSvEWRovqkYEgkwHAkJvRRwvRiAY5",
  "key29": "2kYKHdwRLyyimWt6WSFyQqyQ19HQAfeJCzHsmZcpLzWhAkxC6Lb9EHjgoAW8cd9SzJUhDWGiFmQHCUxCnR21C8i3",
  "key30": "47to4ve1L28YNuZqGe9ErhfSYNLHzRPN3EvpmNabPqptQr9T1yVuHr2jrBBHypigjmkWFPeatf8GQf2gK9K9MVG5",
  "key31": "5asqw52q3WY1f8pHGCPkoVtSmDHEiSbqRev7SBBTXd7C34Jivf8mZmRoKs3X18x6iTE7iSA7PLMk6aNeB6pUyFY4",
  "key32": "2MYe5UBc1Zwy6FGaeRdEpWjrmHECsok6gcofpVyGkkXvXHkVkQYzmFpeshUU7Hd62qRSPmztYYccxp34VFfqrC6x",
  "key33": "3WpRZFveBQ4sghP6Y9JxepRAjJBTgLqwXDpU26VAqmY6D53B2qJNUC4pXGFu6WPm19niKBm6cjh1vfaL2TuE1jqj"
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
