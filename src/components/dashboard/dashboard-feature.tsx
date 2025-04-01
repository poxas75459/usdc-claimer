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
    "3KfgCGyUaFT67MQSNRHk1PUN5Upmjgenmx4qCA6KPSs8BFxazBoXZihoGfRzA6RjW5KWEuTjNPsSMBgPgwQCyyct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n92FmQLozzD5EMkDjcx99NAQQb6shUvwU3jFsT9zGtf13jUraQSX6defytV8f4yWuAadvKtQ871PhpSFAE2qD2Z",
  "key1": "2bnpX6NYR93h3BV8RB5HJAV56FTFuyayHcdzcVQFJNBUseUt35rgyrLaJ6J4JGtyHfvrGcwT34T3rvc18CQ3MuDq",
  "key2": "2WgA9jT97VNXa8tbW4FA6wRJoKNxGryoKqkjhd3F5E5Kgj5KBuQLp1qFjyqjtD24aPeSyLZchu8dzaX4i2rF1Chs",
  "key3": "4TXQXtU49vn7uq79ZRbzALvQo7An38b5nLcqir5yFBB6VCjiuLa6sJSzgEEbNHnvKcsorbhSCjc8HwBZoov6XGFw",
  "key4": "2wVBy8g9FTKFH5AHBPsCtPvm1VvjeRYNt4qZkWKTurLxDGWew4DQeYcjpfinWWYy8HmMTGgZgKcH5yT4o17Bowub",
  "key5": "53xFy8F7fEbC4mjMKcFoNb3Du33kxpmL4h7BF4BGGEnmhj4otLjBpJ1XzYriMb4sh4cgXJ5XB5PUxMcXK9MobUBw",
  "key6": "2LMkChdfJ59FWvMevR3Mwb9ArnhVPSou767xEpm48hJiW8mwB9vdxSHBHWq6JkpuEYZnyHpCLHVzGQjWBmuV8WvS",
  "key7": "5hDNW4kSrdD4m6W4iUHLAkpet5CBSaEUk7Sw35ZuW62nqUDzArBo7Dk7YJTkjtyegibrfibJhQVJeD9bcUov6mc9",
  "key8": "4LMiEF7WctLnTGGiT4YnrZ6qAJMeeS4miVNUwJzb9WRHj2m1YGRqBXwFZPt86ZRU3mPUyPZLYd23iQAkmzjTU9qn",
  "key9": "5HmwzvqwzkdK5gob53UJJLZa2HF5fsPcuvN3hw9t8kMsnTXchfz493yPPxrGiB2qzHf1wiiAhBRQAvnDB9eAohaM",
  "key10": "7SATjP6XuKqcNAMmHdTsWePdLYbmEMx2UWU7Hy4H6ZUVStVMQnkG4T9JkrgLnkrnMxZ6L3yqSKyUfeJAXZawC5w",
  "key11": "qd1oFsZMTHexudkwdcJE6NXMw5Ks4BRVEUJYJG5PwvWyXcrneJEzNpNtCJRqfeD8PZQZs996aPsGFxG3Vnjtt5x",
  "key12": "46yuew8xZ7Bnj1ecuwtwgwSkEiw7JpUdxwimEq3iBDZVWX46ymxfqsbYzUzZEpRyGzZZJCctAXfXe4WKAVM62kQB",
  "key13": "3KxJg5KUuJzLHG1r8gGTh6tmDfuozBztL5712yLD4s4KgGxfMifhmtNndrEKnRxJqwZ9GwCYBso1ogzcKpTAoZSi",
  "key14": "ny78V2tBnDpxxBhZksCkibafMwV7L8qzvMNeqCr6xeDDegeHYiZHVwkphHeBLeAgRCpBrHXjGXeW8WJFxbCA9LD",
  "key15": "4cVsxNZazUdL1GTfrLecc8AFNXPqMqCZgCG6WF5Nsk13aTcRyVqaM8BkPSWzKkavNFxhcc52gDwiLiNuAvNh4AXi",
  "key16": "eSiJokvtr4YhD7ZurkUiiAYTnG1LVmsGj8t81occtsbTYKhf7rifriXietgcZx8ZYGKmXuPnzfz1xnuPUe6jubw",
  "key17": "2QTLD1fiTdrvWiV13RZvacWgY7LBSkTniN66Nr5MtgqmB4gK73wjTEe2QQxAfKjRChd2LMe4D5Kacme5DX8PpLp7",
  "key18": "fnCrQQcdE75m48LSyEn3BFDH18m4crNw1kXeDFF1jWeJ91V5E3Fg3BeUKc41TkgXZsZZ1f9avSQGMkqTxAqj3ZX",
  "key19": "5Lfo53hTJRwVyn1ikYipHhhmTjWFSQyjxGvg5g89oxWJ4NNDuTQJq7PSvZQQwB9FbPKS7GsEHGGRu7jTjSnY9Fo3",
  "key20": "4bREF8N6ahuVgy9oT1SCq1JaHZ2NnFZYXtJSGUe8eStd1sbrhnNDBn1XdutQRcsDBdhwZDYbpQG5mpN99r3EiHtY",
  "key21": "4aiWZy9T2aWtFjXBPbCarD8n3YbQB1CNhrmpEEfdtAyTzXgSYiheLrFqMfoRdhf5Zhfwx4RSCyP8k32T7kN6pRWg",
  "key22": "4dgfKfzGEJfQcDgHJaQF2TWEPWPAGSprzPCFfwG4YY7tkh7UooYCGzn41p9fzpYjbrzt2VEdn1divAmKbxrzcRFK",
  "key23": "2ftEJRE4UGxUXmSxpJQsaf7rUTHTumUyUwZyZj5YV3YJwfGg17SBNLR6RDPEg71xcqq3smfQzgfPomGK6GyLTgva",
  "key24": "3vDXKwW2XqQeJp3DNx5eR4EbBYuhEsJybS3rjH6FDdCZwxwkTbehhbgEME2zVAbnjYN6cDhdNjxLwgfZryou9hVz",
  "key25": "4xo8G8zrY7d3LrZMQNWZrKAG7LHMKUm6sfzPJW8eTDfXySWvdfiQovWm9YyUYjtX29xRxqbGkwUrQuvMQms5A3RL",
  "key26": "48PbfDxwrmQsyt4quA26tPMxzFewtuhwV5uGGuEHR4XkX5y9brErvk1hA1zfrgaY48hxB6xbXdzkzznM4dNSdQN1",
  "key27": "2DW8LNqzBTNUxQQgCSHwnSERT2tg3FMJMgprADtpjh6L1mTmKpLRMCwDECXDF8TRbwN61YYVqeEm4hMcFP2Mcn3y",
  "key28": "4V3WGsc3jLaZFWd5CQg9pbDvaHh2yWx1hUUnfQhDwo9GoUr7YB8aAuZgKEiBaB7UQQ2wFLfNR446jvPXB4rUAjtQ",
  "key29": "2MqsbFUybNpYrvdcG58pzmSeSM5gEfUhE2cnRjwAc8c7v71sHFbpeMnR9E6uu9yuyKc7UHTbfvPo1a9GwGQ3JrWS",
  "key30": "4wcZ7LNNC1oJvE9nbfvDjuLqyiAik7vbCmAD6P23iezEuyVKZ26bJGr61FrNDLRsZ1b3DZfmDRgDVZ4yHQtfTvak",
  "key31": "q8H6PWLz8mZSMPXR5L5nWvrDURKKqzk7BFzjToRu7jHBDftbqxbefHVKh6WAE7REKZPysTCztVuS275LAjirE75",
  "key32": "44uxZMXjptwLGMxyLdGyad6S6kjsMy3V8bJNxzDFUTjKk4ASSaujJYM35p4qDxTa3j4XAu4bP3fCPCqE9UjYxo1x"
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
