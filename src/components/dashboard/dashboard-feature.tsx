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
    "5jmBtZTs35BdjHXRPv9XMGntaSEhZKk8HkCeeea4iyRYU7ZfuZazoDyEyJF5sgfxAKA4T7NCZ1kK9gavJXfKAqM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqh6nyiqp8zLzUpGqwSEUfqyLTVGELEa1UFHqmHHdym736EHyjcDfrhUAXCCnrw9BD4JdgbsFgBto515RN7Ng72",
  "key1": "3mQocLVvxPQwsDt5ioEE5J1tmK8xHfEDmzH6LB1KVtuTtQ2hfxTR3uBZtHWUzzBPvR9ApLoEymJfNhbnGwNkzhuk",
  "key2": "2rgJ22dwHUg5fHFFHiGjTaRLDXFDUfz1GsMfbWvYMgZYSRKWSPRY6hLwdeU2dz1GzFyq71ckxFJxhv8RuBShrjYG",
  "key3": "3FbMjbW4Dmx6121bW44kjgG2m4sYtDCza7BPpHdepgF7W4PhGXKL4odssdfuewoJSNHEEcDtDPdtUrYu5QVF91gw",
  "key4": "5Jg8EtNx3NBARLtTefRj8592bDWYPwLQ3tgNrEnEFEARXRTMpJxnv4zqnzzdmoiYzqSFRzyQKZ6dAwGo7ZDjW3X2",
  "key5": "62ryKDmJGM22jCYuV2Ta5NAw9vqha4vfmXyD7po1q8GSEFi9Cjs9cSvxKAHxdtnv8Y6GDHhnaoZRsFxSYPdXETh2",
  "key6": "4gaDscg4naZtqxVsPXrzSzLfykwohzKbSSxjdF8wus2tfJwhnVRMGApjwzieFB7RoyLLG9AZz1R3AsSeCtVcTTQp",
  "key7": "58Kqq6FApwkvDBppLcpvwL71oJjbSa7c1GHxXrTrstRL6YACwTthMPS8138pFTqbF7kTRzzjTaHXeA74UVCxhB29",
  "key8": "4guB5Un5r9zRyWHK1MQFPMe5JtoHWjbqPGHdzFMi6bDP7byA3HjeAaPcwKRoyK54Q97dEwJZYmGxUNy7NLHihqD7",
  "key9": "2pe4rcDHNPeayVBH8K5vraH1UvuKoaUZJkNrquMGYz6HSVtgLvvKGjc2ucQDQGgi8KZMpMDp8tJ24Lgp3vXwipyL",
  "key10": "2bnJM24iN7Eq6Ph4KfTaVGCPyVg2g5VjwGzMyFoyXaER613gPtwfVv2hvMdcEUxNtik4d1PU8DnyTY3YauxHAR6g",
  "key11": "4FZGQEyYBfNJHokX4NmYrfaPFXRw5za1Br4YpKMTUWt9epK5RkHSoKhK1odPxB9CkxtfvShRr95izTSynzTL21uE",
  "key12": "5j9A1pwwV3Grr2aFk7KG3AmMbcybzj45EXVJyStcNDJ3GCnDAnh2NK5ubchcQ4h2JdnVDcw9vjXPW7ad9iyaWDip",
  "key13": "2Z7cvUSpDfyMan5bnK8b2ke9Y7vSjfiyBk6ZFHKTNGizhC1Ty923j9nc9jd1cQdDihhEceEEvCkfzixpcFEnYV2g",
  "key14": "3tLk7fCK8XzPY1C7gmz8peVqcwGDSKnqZVHW6mKvPYKKFUtCiopH1vBov4dZuujqa6AmcycjxCwGrHuZHFYA8QoP",
  "key15": "5dg8bfLmdNYZ7GCCKbu1pdiQN38hXrzUUeaws89kCNYctoeCEp62UA1ZemWZGobTbq6JxJNuD8cgL6RppB5psfBo",
  "key16": "2XMTvsoE4A1SsarQYLtGV5DECoUD7LpfEnNG3QcDNnYmaUDHq3sgQbvvvqhPQF1PGzqaUyXph6RMFbHurrJ2hXxE",
  "key17": "3vcjCKLdw8q8j3U2LY88ME2jzUKEb1cdq5jQ7Z4ythWfMBJMYpLge44dvTgGwELFwiFYHm7YNuJfFqTZFcdF8WBU",
  "key18": "nefp9sf7gQNktM4QuSY3ZkBfZFtx6AKChh9HnFei6dHeP9mm51UkZa97n39SXzWySybPDGA1Df9p5WXftAPJFjV",
  "key19": "36ZQwbTpg9BY5kKT5K3RKBmsaQD5ZR31UccZ2rWc4nd7THxx54QcTsrgMjaiiZNQT1RnyjdBrC6LebXC9e1LjB6Q",
  "key20": "3n6iKdcpZpo3GPJs6h7RP2EDBeNjdV7mTqiQPhiK3NgAoZ7gSjE5dudX1JEB2KEciQzsS5oWr5znaM5gLA7p3dPs",
  "key21": "5QEa1EEGkWSVtFB4CNRUP4YCAnvwXxXHTHLHhWp8mxS8NmPXXaiLf5c8xQfJmLEdS7LAttuJNBewXKoC8jQWeNCy",
  "key22": "3hZMajpKNutdxNGsh2snbALy5w58F3mwyuFKdwrmytX1G6YFYQUfnaE7V9mh2amvRXD9HmoAtUQeq4xvNnvGp6Qx",
  "key23": "5pgjxmueneyAWz4DmrUPHr87zCvhEwKnTaNBqAPACKWod2zDx6QkaD4njDT4wKUvJAZHSjSJPPek6E9LGMd2AB7n",
  "key24": "3vdYb8rsGFuMcrAtF3FMtCWxpMDebLzYzsidvXf64mWf5GdLKDMFJnvvYgpsPiRRjojEhAUwESM8LTTULXGjv15f",
  "key25": "2eiRu24GhkWnV7AbchUSU5LozconcrJ4F9Fx1DGt1hsWnBdaug7m3qiSsq8XnhY3pQvoGkCADibbSQCw216wJfmD",
  "key26": "qEicdqBCDcdPGfMaDJtHKAxHxtMAH8xP37DiimNgtCWYTgWdjSTLKhqhpccok7qz4bhituqQ1YncBsRFvMs3U5f",
  "key27": "36LDe7iZdUHjrErA8TFP41i1q9Dxo7BYujqyerrEMDY93Wq53zRwz7DTft2U7mM2gTCTSZqCNESuNHWN6Y5pNp5j",
  "key28": "5zDD1yCL375GZr33zTZfUpmmSPWcUFJ2q8o1uujbo3uSy2oTaj1awhWmauhxoLTKSyjPvQthoxdR1PdxnDhacfEP",
  "key29": "d4sHSSshTEK13pVLrfFaSmzwsbqBWo5vc8XpA2KbbWwuGEE1sW2zNprBLqcU8QoPEKKU6WnmbXzuRSEgUK76ye3",
  "key30": "4ebEpSrf5yiYhUbkbX9DhkFjCn1MgiTTr8sMxTzDbLJB4Ajes6kWc9zmqHh1roQVLwUPwMTQkwePuPWjf2vomtX4",
  "key31": "orBfVCTsBq9NkiWfRZBxZaorsG4suYWuys99xNoFZ8g7WpZjpCgSYpVdqac1XJsw58bmw63SRzjHQXs61disM5k",
  "key32": "4NMUvcAPKnLnKXwGdh2tsGVoNWEVncwhnnMikS7uedudF4Pv9STe2Z5XvD7bhQZat74EirN3qmzNQk4BTPPfFnVZ",
  "key33": "S6D4MazaZRS8q8T6L1QzWNEGeCUSQNUmvWVPwPriiUtEaV4niMHkJzkc7RCLdtgkznmrQVS4siWspL4hshcRkMQ",
  "key34": "5zEdbtWwJHFLGyzGUYHZFLKgTJjn3tNDudDnUmKC7APCi2aKERJAVxnbHBg7s3MKksd6yhwGirkDbF1a8Ux3ESN8",
  "key35": "4FnJJhXbTa83zr3ppwnmS1siXgm2jYYPz7brGRXBS6LGtJb4mut5U9ZnrRGXGMo2Vh7XRrSQqCaMjQcCpmLuhHoM",
  "key36": "VukxrTqSxh9NQuwVEED6zqXLcQ2qG22pahdErPRu3fH8DKcSiSDVSY7K8xpq2JK3RBeYzfJfmmKW1Av4qzFKANB",
  "key37": "4gQrM4dF6i2pcbGT1sTmFVLgEsMws5Z2dbUZ6xCCZv6g82JdyrXB3S5aDCgdDXVSkiMSCmJ8Bu6NnCTmK27rsgnC",
  "key38": "JwTjxgPa4vkrhNFSFTUHkvzPf5rCLSBCTbFC9GbLc3hsX8NVKdF6vTGPkQqCNzwrnzfiLQwUyB1Sr6zMAf8LbNd",
  "key39": "5DugguZeCaN4LByFbDbSjeuxni82fuNxL9YV2XSjZczdQiGVmBBgMwuJ3PvYqzU2HF4xPxpkeEzoezukmJUJP2fb"
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
