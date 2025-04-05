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
    "5Q17BPLFSSqqQq8o81qXw1xGypHpJmQxxdpBEEJSmpqzwe9FtSN12pKLSCfKFQAx1wywJBtKa7hsUaecmXTymZnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Dtt7CyjS5J3prNvDHyq2xRVmqRDmdNF68taNkGq1pFgDEva8tR3Wn81HEzwurYHzH8VBBSsPAMQ8G88MXrdq1X",
  "key1": "xdFAszTxHuD8uLby9QWzy6q6bMUDsk6NnzAXdrUQAkooQLgaGb5EAP2XLtutA3cUBQSRKRRQhNvQNZfbL8KZEue",
  "key2": "74ob8Y1z4QhkRFaLuSQV4PqeM6oWu5dw1fMiHEqDny9sV7xYSbww2NWKJ6eV2Ka7zra7sSFNTGxCca1JLBaaWy5",
  "key3": "n6GJ1JBiVjKPXDUMWssQWa6Gu8ji8RF3g1FpQDQpvZJj4xQoMteeBZQLVJGjTGN4ViKqXf2psoK3yw4Zs5CSz2B",
  "key4": "2Q9d9JtHC41iyg5EP8Ghy1mZ78PWGs1VrM7qARs8ZJ7uFK7qd6U9svAQS9bWLZrpPBNbZt57BnQt5SuEwvsMHcSG",
  "key5": "2HzhABPWEXLc9knZTrAjUJ6v5Lb2fMp14yvGXazpsEKgUwVTRL2Txxuj6gEcRUcgwL9JMrbmvfpvwzqM4WhyPffg",
  "key6": "2dpjKGpZbJVXukdMd7Re9CjnjXjT7S4qCXtYePDEKvmm4YmC62134eMbbs9CKW9mYx2YpgRULrQD3CKvhRcz3N7a",
  "key7": "2y7fVGaDdv4VAHcpm9YVuVLHNhxsVLD4ZQVRbfuLTNFamGVVdjc9DjXobimSgV5YcZ9eW6oZe6pd74Ddf54Adqjm",
  "key8": "4LeF2MSVyBy84Npjap66dfMvuZykUQvw7khUGSvpt3ykt2E4FJ3Pp8m91bSA2ZvuFjv1QyYfvHdYePZDXZQd8Ze1",
  "key9": "2VhFZUgKbzYVdd25hGpn2FrNkfWXAETDjmgUUvqV371iVbgaU99swmuBCH5UxXyvJ64cM9xadVq5C69FFM4o7sut",
  "key10": "UF1kCPKDPx1dfMTjrvzj9uXxc3ra8fXgaMfmYu1moCBNNJMZLRUCtiEcxrMZJuaoNk8YESyz8etJ3fupEUXmiby",
  "key11": "3ofFo9gUibo7xo9hPjC9g8ebunTCxXSzMHgB8tsjLtXNsovhcmAaKMoK2uCV5ZSCJhCKH3rmNCTxfutzSDwySedf",
  "key12": "5DwoW3YTohYKJCyfNAVZoAXVi1SkYr6ta2oZK6yC6xQ4n2WsRzphr9KwfmyMbQUPZEbBxti43vus3M7Y72m3CPK4",
  "key13": "t1yjWNGuAKDcXjhyJLBMGk7XmYkxfDDjGmCoNkZFqVVwwmto6W7yi5kd3W2UnuJkV8j14YFC6V7yYZidXXPFrwV",
  "key14": "65fKD2qj3qJ15PXZJVbTDuEVeWmLikLZkHuZvdxmmUmddzizHSnrRYZGiDHoL2xZckpoG3dqWUsXJDka4YHFh9PG",
  "key15": "2fL1qwEeNRkU9GVskW6Rae5ya2yMv8WDbvbX8rxqgBHj2wFzYMVPhNkP3kuoTJJ8W1sqcPYjTdNWEjEr3Qa61JoG",
  "key16": "63icoTUTQ8FBYpD575xbWGbrjzFqJN5HoLMSkyfRvc94nXz1tgSxqcR3KSQTdKwjEuxkoKsJ49RnnJgCbvBFPhXT",
  "key17": "4DqbqTSEwEor2oAnuoV99rozJZV4EsfppWeBrCsX3ANuCwxbUQY81JZ5CqBpqSSno5dUuCahKdkimpcpyCqEnEKQ",
  "key18": "2voCnY5B65sKe8vu5oBvPCKU779m8pnSQzFpnVk61epmZDupd8KW3SVDTDfHZCMx2Dw1W84s4XdZmor2qBvr6ukG",
  "key19": "3AioS6LoM5ASTLbsR6AzFmNCHzdNFKNN39FNMi7wEThSSWJTWKPWcXp6EpM1L1azjahnk8AVVjf89cwnpUpsSZRo",
  "key20": "251qD4cho1SxnhzMru4jU7p2kifFQL6a46G9VLqhMKsLKQcFHL28dgYCFsqfGX3GrqpTcrxGUmA93nnGPHVrN8e1",
  "key21": "4xYrM3qXv68cnGkV77UfZ74ABoKawuWoQkhfuHxtBgxsqdZoX5uhkw1Y1BCZw1ENmCGpJakTzRfY2VEv74CAjFuq",
  "key22": "4A5CNZvwvUeqboca3ofxF3JL6eQsRFMSbj9cSDciDj1K6KCsAQUNHwwng4c5PajXHfQGFscZTECvQLBVoaeJBqZn",
  "key23": "4DzB6KcXLXzLjTsUmQF7TV9wtLvKW1yQvME4Xm6N3hgqNV7AVf4xrTXAsZ6c2P6WnrcF7wAC14Cu8PLvfBsGz2kN",
  "key24": "2rbMybVXrFTMqLgMKWX72gfYUo2ttKHCygMxvpK3j9H6bF4k9SxvQb9ctfShTW4iH8qrF8iF4dJecym3N6iH6YG5",
  "key25": "2QmkeugnnhidppAPg9fb8DVsX9VziXPjbvpeNkdt1bTDXdGR1XZAns9Wp658R4G4SwaiVdAAN7NGq3dgXBfXvKqd",
  "key26": "52weNWFydTREMKPvcuoNNDPru2YsXodJrbfzLZFbx4V4z3Cyv44TSw9ehPwM2z9pY1USsxPxAvMHoiEqGhSDxJsp",
  "key27": "3cg4sFnZEEtn45KrKZCbZ4YihmGdsUhmtJzHLVoVm87Jwo55TaKxWCYUe3MC42g7RWjKEcQrBD8ddd5gWu7NoFvN",
  "key28": "5JJspff6nUbsox2Baw329LVTtNa4KwkBhAxb8KUWWNXYKh6CxiQTEGntuG2Nk8auh2xCLHyksXnbnBghXMhyBzwj",
  "key29": "2qohVBDkSbBzTGPFmHjT6LJhDY5iDzEQF55rHh9Gs4oHy8JKnhk8crHn3kTUpKSMpdaXcdqBTgtfyoNhdUek9gK1",
  "key30": "BBE9ousDMFzrSYYEckuTe5jUN6Ba9LbF1jcSuoWyP4a2QFrfc5zc2jLTvSh81JHvR1putK9aZagwq78MvxhLhiJ",
  "key31": "2f9emAu1CyLYsV7us3bBcgAZE49V1jyq9fwCLaeUoHuach6zbygXsHHJKkLXDt2tGX4Yzmua1X9Z6LtWhz2qNSHQ",
  "key32": "5cU2B3uVXwqVpSk59mTiVYh5hSoQVyUTKSboshBeC762HbQSSPdqv4U4mXceBysmwHGuciKtZgwax5vTQA8SgyJY",
  "key33": "5FpDyiuyWh6fdjMMGZzLPVZxVScLCQXpAybrHGBVXsG1P7VSvqBrQGBTQ8qGbUgju8eyvvUd8X5mdCMDmpwGgpvP",
  "key34": "4KWbaB31f8La9QbbdHLTKi8p4LoBbqdxhJAMmw8N3UC5kVy7Wn9UVQ1BiLHMQGPMtaaD8e2BnhsUZ48HNKRbYBcV",
  "key35": "CnJ5UmJG3uXPTuoYEm5Lybt4TpxRKyAwLRFrySGKJ9ePiFgXmCa5vZo7tSGmUiEVwTEPwV23EDoAhiAj8mEZxVS",
  "key36": "3s5wq9dshUZfa3xJYw8rr1jcePuEMsxhfTFFy3mKB7wNwxnmfqYxZiyYmVG3RHCYYZq46awzQmCWShDVPCQL9UHk",
  "key37": "5owAKg82xnVeBjoHunVPvEDfi2CfE3WqyuRXbdWLhcMAdfVmDPpVbJhT5pVZ7mK7tt6F8xwbvZmp7McLS4Z3BWMU",
  "key38": "5fm5Pr6btoMKRZuaLPsbeVX52xKt7VkAAqHubjoJmTtpc4C9ra6ESMU1zZaL3Wfs1Qo1Y9DRijuPNc5k9pkRwkCn",
  "key39": "3ApEqMTy68TqGLat7ALgFNZHmwzbo9bABEhLd8tbFgnp8AFW8uXj4BEUwdoRxGRay36HZAF62H521PrVTEJ9r4oa",
  "key40": "2rn1QJ7yDXXyyNBznJt4qbrupQxct25F8os3EZyQ9gZAUm81Gk8CKhQLygmLkJJ7wQG1FtMjiqgf7jfCmgjJ8LwW"
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
