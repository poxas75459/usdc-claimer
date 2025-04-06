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
    "37146n8xPozY5kiXq8A7dJu5R3KzyfxgxfdjfGdKw9wJreZpaYhehKNXwVyGZNhe3b1X188kTyWtV4gqPuu1U7Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZioi2DwXiH8fzCkVVHcMqZA64wG1JLM6cQk9TDBtETzDJWSguh5gukfC5PvhHjTh4TxQ3ZojvP8GFgd2usrt8c",
  "key1": "3qQ7DdTT7NbCb9fkPNFQysMnBCy1D8f3SAkWR9GUmy47gKbx1NqXDYrLY1Ay7ZUtn95t6J8TLaBzwMhZJEomKs9T",
  "key2": "5a1kNJFDH5XurY3ftQemJw9drf3JPF9imxi2Ed39SiUeg4dL6fa6niFkzh5wzGmWRy2zDDEtNQMDu4iXDKkaBLb8",
  "key3": "3eXnpHVJBGNSEU5ZfSKMNBu3X6nJHPxarENjBfAjCuR6LxDw2utuy3PT2Nc5AvmHNbbEzYmTmTFnEFYJqh7y8D6o",
  "key4": "4mgQ3gNvcdYfxzgotW1WcpXMYqbD9JkpfqRGocE7UmUpXzQhpHUsdsBvwsSW9vBWAkuaaUnXacdKa9FSL2ZSaRWJ",
  "key5": "3Xwg35AMczvVdhduUAmihYmwi3zixkYp5m6XgawX25qrFcMfNAdtwSS99weEuHs39ZJkckSzTUZbUovrY9Mar31K",
  "key6": "Swvu9QvVqGUz48W3H2iFeC7sn44ML2Aav8x34TsCfAXQP9mTGVdGbnZHcZFg3DvYd2wvBubjLdmH1sduAVjRTN8",
  "key7": "5FXfv6k1DXsoHmPbnd84uEGtuWkRRPnCFQkCkq34vzDKRHV6aq9DX6ev7PCKxadv69y9mXhXD21TQVdbfdqn4TDg",
  "key8": "4h65bDp64xpbSZC38xN7Jewr41a64jAKU27cV3pmgwhYKd6vxq2CTFvXGBoSMCLbCTZFjCHhw1Wqf7R4L7W3DHHk",
  "key9": "4JJNMHNkkCkLdWDnuDcyVrrTn5pYHq8N3bqhpqGYDeRWPqzmfA3xb5iF6XoHPYfwa47xiHHtPjupqwdPJgqRko4w",
  "key10": "2SgDka5ijtrCxxaEenQBdrBHgmVhiiLN76RorbyvQprGC4EqzMhRdDUxhHJcCtYPy8dELftqmG149Fv2XjZLKysj",
  "key11": "5iw6kKuTa3m14juzyxyGstDuj7mWAZJJczQpreG9Q3mb6DjN48GTbFzHBkpimkuFUfjJihjZw5RGPkNdFLZERBvK",
  "key12": "42nzu6quKMxHgRHX3qWZ9SzJWbtyuGS8fQQGHfbqRGzeX5znaNH8goKYzLJwNVn6SNBUJRfDrvbrFubzCBBoesi7",
  "key13": "35KrrNCjErteYEP8Hg6wKiQ52z5zYBkox2NtSoL6i7Jz5K5xxyrjVo6PcCLqjyCZHe4f3Y2jrEWJTgtsAZbewrqZ",
  "key14": "3VmxrVCXTC9uCLez6YKh6V4EdaPmd2eHrYCjDuCwzHcjLfVjXpYqmKMtKZqeCtQz9acXGHV9aeYzJ8HzVLFEXVN3",
  "key15": "61gb99VREo7hRWf2RQTs5B71gUDsPwFULMLD5VW5C1uzaWciUVPbhJuQyoaAbzy36PC86NdYwd5z6L7iQ9TwHps7",
  "key16": "4JYd2GyxZvMRZy9QrzdnhtPdEayB6uHDC4GChAw1GRFvttctQHcHbXoAnBc2BCH9vwAuWXt4B2n9cNWkQUJwiM3Y",
  "key17": "5xjkT5RhSALRrVuF8PV44xD25FTaeScarS8x9Pxx6znE6ZjzpQsoXhJPSnx8yEa5Eam7WNGK4sBXNQimvCzpTt79",
  "key18": "2etHcB5HbhShyS2rcvTiphXwGgjnUYiNYsKByu48EDiFMgHZQo9f6Bj2LZQzQSfnRfPE8eBzLHQWvoJLvBeezvEr",
  "key19": "3i1ShUx1rHSXwzyU977s1fMEtbWxMxhiQ5kokKzo13DD4RqHptWpgrmUyjGXSSJauA6ahLpJJi9dQcFeJxYRtkKN",
  "key20": "4Q8ADrVW5AzMvRK8MBmgBJm6qsnrq1BnurK25KEKDjDVqW4HEG5TMyYBMLindi15jeXvPgv3bHSiKh1PPM3BgfHH",
  "key21": "3WWPqPax1HGztcxwy76fTGFCXpdLm27D1nknCmZcPauom2hQ89Xucgh1t8CMhajqs5pCsQye4DvgnK8cCTSxLyCM",
  "key22": "b8KzHP1p4u45rcinQ5ZaxRqpZbippyhTmpV6GYXhhxdcsiqBzBsufz6rSn8VPrNGJuL8NKVPqNGB1i11HQ1w1rH",
  "key23": "3W3X1hoRGxm3zga9NJF469ak1WTo8W1bw4EFSwgpPwgkDMxAtUsFUY6Y7csEW4UmaqgdoiP33MKfBfVvahUYYc5U",
  "key24": "2TnXZEMaBSEKFkNo8Y1vwDQYZJaMRyN2ZhQKhivPCyFYXr61J9WWnVjn4Go9DkXv7JsCX3BBfTsWsnyw5eyo9JwD",
  "key25": "1j7ggpshLGZYzEAfb8B87CjHwDWmk9mtVzRfJQmRcWvYQjsVCQU2qB6Wa8zmEUABSSWNbLp7QqwHe1wSA2u1nQV",
  "key26": "67a4wFsphHyjTk78fAZEHCeQ6ViqydjATG5v1MYxVnndzfM1vVZSPDahPa6yRyLSSKbFD99WdV5FE8QVvRcVSxqL",
  "key27": "3UTVUXRMYBbLpao7XVvKwdKJUmw4wnR7VcCoKyZwuJPgePm1Fh12YeKsJDwLi5KRpg4Ji1JgqJzgYkFQu4bFY4gg",
  "key28": "2Pdhrga14jWj7LU1EKi7ipTEqPAdpQ3LkNe6sf8UN1kLfvHcS8i13jAzDwiQ2MkTGpPbWfwVVRftvNFuuvbdwdB2",
  "key29": "2Vtz3b3CuwVqQTag2EcxoUWu3uuEsDaGMNYwCjd5MK1YTQ6Tv5anhF1USUuPTm1FRZZu2av8vMEr5ggZAkwiJnHk",
  "key30": "4kzNnCTfzdZL5bfm2U5K1mro5FPbd4N8aesaPyeGqLHJ7Mmj2wrTUb66pZwE9o8FU1MPWinQHRcbW7BV8s9wsarz",
  "key31": "HGKJmNDsojW9dGLZEgytVa9ztbQ6HnrnGrQGLZesfgue6ZbaXF9wXTk6naML1izhwFdRM1X95KDmyV7hgGvwnvS",
  "key32": "4WgH888NaDuA8eHGsn8fTUekCwmLrDyFh6yJUtG4A1cjipaJYkjQVRe1X6wxJqN6N9brk2VJzZerW5kyVhU3Mgfe",
  "key33": "38UwNA8ivrMcJNQyyh2KYEVpAXPwB9dxsjb2XMiyQ85UvpYy2CZ7C9Y2hyjF8Ur8S3U2ecnVCAkcw8Cw46YqsnAN",
  "key34": "4LBrmu6CXgEhcpeNa9QDP9FVZaxouPMHbJiNwzuKHN5x3EfPxfiyMp4qSaPyKY6SzGSXZjCCMrupYpJ7mnyr9HuF",
  "key35": "5xH54wdnQpfriEz6c1Di73xtWaQsyWt5GM6PsRmDBT52zQHdhSYEwptDrTJby5oyMbZ7ERQJPyCvnVMZjm8hhvbZ",
  "key36": "4JZKX9rkWgqG9kJFQDYeVC3FmKQMY9o1DyYB7BvBhkrd3rogMxgXwDBZB6DTmGq6WyghPvDphNzjCoeWJVPpszF5",
  "key37": "3J94pJAosMmy8rfwqNEYMX4pGPDSvNx7UFa7c6vKnTyueQPdgQBhwE6csgKz96ygNqB2g6gF34qtiYhtX32DJVqH",
  "key38": "BJiQqKJhDJbNewGv7mLsESstPCYqipFrLs8pJhC4xFWc9PJtpaELQbtevZAUu1Xq2BxvEoZ94QDutWCzyuanbKB",
  "key39": "4F6uH5X1J9w1kXEeucHRCXhbH6YvmmTPWjVhFJPGFPx1FyE9uS4o4gu8X3GLSkhmJq5cGdsakv3hVzRhhbSc13zf",
  "key40": "x1g9mkuNiDi9NJnpypZcb9ULB4e72hLBVzDRwFoNYU2fzdTJWqr6WavHkoaYmPHnvEbs6DCE1enn9NBKZpN52Qj",
  "key41": "hhYkqUSFQjdaVDUBQEoowKWjtW4bjbvAGmip7RzjjikRgiPFnmcrZUQ9ku9fyFHnzXA5ajqi1r2xqxMEjSXdfsj",
  "key42": "2DB5audQi1efvyfN8xhT4DAP4TkZojksRv7P8dE4BpSKEkwjyby1gEYX9GHJqtXVBTxE9mU5CTuxWEtwkR8rE6t4",
  "key43": "5uRMPV2mNaU9WbvWV3quqgQPK81Lqd9EVBG3qaSHtSJT92w6i9P8m4qRJFmt2Cbhqa2xbL9YK44Te46RiD1KZwFS",
  "key44": "5F7YyaYiTgEq5Kq47hFCTyV7X9fQwwyiCreyuBK6QkLqEeaHXLNzdYTyUJUzYP7FaPjj8oYE3uSXbuR7JCJWVHeA",
  "key45": "TNT6DVnLVfoxbo3u91Hc6zVWMoKR3cENsDpL4mYmR8hkTSaRASAmautXSVr1QUDSyhraVrg9qTd6S9V45LHYvFS",
  "key46": "mtuNTJCuveRBjcZraoiTVyXzEpA7fhpkjBVA75SkBHAw9T3kUX1RPTc8BDMMFubMs6ecbA16fTV4rJ2YU3ctNLa"
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
