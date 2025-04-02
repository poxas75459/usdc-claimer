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
    "AgHDZDYPQmVvHBFqLVqFFCPSmEHz1naE54LMkNZZ9eFzcmhbFdRdx1Z8ah5HxCxgevPdv66NrkH41eoc5ixoBjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLfMNBuAMGA4vRgZnVBEazJTastN4h8zMNtYkdZenGir5sbYUfYrNDTtaCWXKGoD5Rmi9oADXAdvEqmHsQQ2KXH",
  "key1": "RWfCbzXTHkW9Snvz8NPC86DiQPoAoUNAZJvnmjQd8d8yTypDEJmt52CeqcWsrD2d3uDKJMH5WQgJayiXy2vt54Y",
  "key2": "4bmnZ7RYYZBho6MRVHT53PjGCWK2K5ENdsexJMsFm1kCdvU29hcKuwzCYstfqzpNShMgQz1iok3nqdKyvx5BVGoH",
  "key3": "5snuvqDYCnMVFe9tsWdpC5n7HcZBhv4hnsoP7mbezNpuaxVo17hbs7VHjv2VsMVKAG3QzDNS2uWyZkidqGNsiG4z",
  "key4": "MPtgZ42xBiu96ame7TaRq6PwFvHPTw8WFGGkrTQ6HXhgdSoZV4Em3QMZVejmbUZzDobMovtuKvjgtMz95XVaonD",
  "key5": "3hWCGcp8MWKbH5NEwCzxWS3fdGc3vkYum3ANjbYEsq84YZFuCPKYWKMGGGNRKM5W9FWCxqgTg5QqYMLzbwzZvfoU",
  "key6": "5d8mHhBzw16S73gvegSwsAyim2uz3jUbNAbWJidVMc272ffAraSmt7sJxFeBzjEEQoM729e7DhGn8x3VSksnD3f",
  "key7": "5S4rzJQoLkjHNtsLtw75s4SK19JRgT5aWquCu5SvFXxNSBaMSiMHDDyfxKzB1iDrjVBCrg2GiEDA1DpN4kz8EiKX",
  "key8": "56aD9xhYq5aRWSYgAy43B7vEzGzhqHwZWy2h2EJXHPJ9Z3p7pmBvDsEC5kVjhq8ej8m7d6r34CjA9sTezEJpnSjs",
  "key9": "bxAUSv4gmXfdWHZT6Kokpdisa5Cz4jFmtGgTUP85J9zzLXoeyRZccVJadfpztn39jQVaHAHgoHXUZgANXwHKz2Z",
  "key10": "4utQaDr8fPkS8MWaW4RpZfx9tnPKu3PrG91mE29AAzX5Hqdfp5o8oZfSVAWYjNZn5BgKVZnkhv1Te54Npiw86TRr",
  "key11": "4G4dJFeX51dNKfcRWwNEhEvZbGdCY8njQzEHazEuktaNd92gV4hJ6sq2qxwkFpJuqWsriMHE6rsQhUBqTpSFdwVP",
  "key12": "2am8wf997zG3NsiLmKCAohe9u9QDbv4hbxUjqT4iGDizn3KS6GNTyt4dzkPPJQM4rAHwLodcnssFAVNDsB3EL9o4",
  "key13": "4FL5i76JxVUexESSNnTqtMGq4YAaPheZYNZJ7AqoRT7jZuz1wS6mMgU4H7EegvQLeeNztemetqgKowYe24c6QxVi",
  "key14": "Ldb7xRSTCRYdjJ1i7tyj47YtqSUJgX8AXG5XN9U8nPNq9PMSpNmGgaryFBDZUfbc8RrPybP55p9wYuCmpjHaKjq",
  "key15": "2MiHVr6JiujypYqzgthvvJJSUz3HHkAAKKHLBbtX1XHAsizKuAVbTjFt7DrmYRH2WHSFRtrry854r253adaD5uk",
  "key16": "3BLYgtArgMBKfSwjLfvy9xTTiqwQQB7ZLgucJzCW5M4qEavakdkKpQQDZFDidZoePhp2Zcc5tYDDsFVp9aNoF4GE",
  "key17": "26HyD3GKCbM25a55q7UvM5wtPMm9PpNLoRkLFSwA9mmPEDCe9NXj75x2ubzUgduFVmp28W4eUxsRmkEPxesaEtF7",
  "key18": "58eVmJYKT6jpr5suPRMNK6F9XFCXr8gZdSoyipGdFLMHh8Tem65bTd189dvGzPgC97rtDnKjHxmZZyZ925kJqTaW",
  "key19": "TzrXXYVQ6wUMyQy6mgykETdtC7kXQM2bPQxs2mrJG82LRKStjS5RrraqYJqWJRYz762FN4MYPcKZj36SE8ZhGzS",
  "key20": "2zrJ9Y5LtmYXutb3YiDzsoZ73GTpQ8PPpK4csSvw7JHS7sBXsghQ6z7WQDLoPaBQd7kLzvmscWmHiWfY3RzALEPy",
  "key21": "5ZMHx2azs5wXWobZjDC3UZwjugUN2G4tfgt6nbAyHH4nWcHRuGtoUK4m1oHkCEpK5aeyWrwzYsD36hvCNMynA32y",
  "key22": "28ZjcriMe8YUSRbPRMuUbUKUqn7z4ht86tBGSBWHBD7bqx8V86VS2zJ1Uyc17uxJxSDjzjoF1aopwnyXGmjfJyJy",
  "key23": "3HLCYtzZpt8UyVRJv6MUdp7MoTUSdDJVghuRYezvb3zeSBdCtf8HFu5Yd4B2h6mRCZXbucibEpkXunjb1wBBPWqb",
  "key24": "5smU3FUfKKCHkf8yCLGue458GaZokRTFaz4kwa3S8JRfyZo7sJDEfEew6i8wNAQGKwD9UyyZGE1HdUpCFpc27pwN",
  "key25": "3MXXikddhBvnbokzh6dZimF4cuxt6xPFKL5HffgYGy94tnjX9zF3iAzaqV3KDuZsMUSrV6zMPesAni85BstvFCeL",
  "key26": "5GmCoTN6Li8Egog2mXpAWD67XY6we32EcUUWLwrijpkaHvv1rFKBFNXWwh4M8y3nB6bmTgvCzEigfi5bFNjHu8Gj",
  "key27": "581E6q78qmuN6rVpAjMxCR1whkCBQWDWDwA8d8vBLYqBe9MCK1HUu2pQZ2VkGLj2FW51YaMyVJPk948CkiviTdNq",
  "key28": "29rT4fQNj7raSjkWFwiCNJ3mXFrnPkoKsWCfhtAp5qHtcuVq74pkqqLfHQ5ybKcsCZbpfndtcEtReWs8sg1pNS7y",
  "key29": "BsCMMW8D4P84rwiE3EETrkPoHUV3sWckLBjbVjjxnfhFe4M1SudgBdWBHQwwD2dGdkkWgRCVZWBLALpiBWmWxSQ",
  "key30": "5q8n4K7yiGKs89ugfqocfkHL3nPLbuuBGehWdue8jstnZPPX6hDnF1k4pTwUeYjSMn9Ta9BYwRYrEXT7FyFqB6np",
  "key31": "GkJcNHkxKHZQivjaSJNidW9WoV262fdg4kH1yUnRG9fddHxDzViS4EpBgKaQNgUHY8joXdBtpygGkopvoYsgTBE",
  "key32": "tXTye8PEyx5yY5xkzrQx387RT3sxAyeiweCoBcaMdBxWaZg8A2gHhqDUTJHoVhTP3pf5hkCyynn63BH7GmUWH1D",
  "key33": "4XYzPR47kHxUpNomGMMyKhJiLRrirdeGfDjwqQg2qBTfQSCW1cWiz1j9LJkvJDxGrkegohLGZgo2ShYR62SXx7UD",
  "key34": "58P5z9tistKzhqSaAk15zRehmiut46a55d6Ro3GQm7oS8pi9cjCu8qxBiGGcNeZEtWtJRgbjuTJGk91knXqtYyPU",
  "key35": "2iXrBWx5wnDqL45RTX2FCJiMK6rqzMPD5ke1myJsCojgj3cBNhuWiMtwEzM1BFWP1g6RTwW3YRHhpz7infixry1A",
  "key36": "2KfRRibxXjzjFD3ijJgeeb63NnZwu4npLZsJRDH7RP6Ag27TL8uCQrYrnv4A7jjywQkvPyi3oLQ7jsEkRMLuym5z",
  "key37": "w7s2rEdx7mSWBYfrYU916SD97rQ4bF4CWkAuZrDUieT5U9Am2f49mTL6DBuV26TMYWUebpqjhukzhBwjDJtC28h",
  "key38": "2rgsZUHQE4grPYMXAmbyKwNs9P2m1gB34JKHK5hhdFSXGHForcXiXszrRVBgN4ZBxW5exD4nSE2LXHHp63JYtxWo",
  "key39": "3cmRaWA9sZMXV3BvL3Ri2UNJmCavw414CAZx9VoNo8GB7bYLWwgjUZhTZpvHfyrQme1nonyntDKd56YxLnuCQtfW",
  "key40": "2ptL9MWAJJ6BtHqt8tJiT7KAMX4BmYN2UBw8W9GFwu7Pp3QtPTWXd4GTVdnTmsbcgeUMzgAgxXHTYdS8WNVkdHQD",
  "key41": "5E2LetFqGMQBKQo6gMf3o9awEVidJweutSJvFcYeNPd6jZqQP7pYQ1mzfsY7brrWhcx9h6HXtj8yZrzFatPSXXba",
  "key42": "4GRejDEvqYZ89a7q8sHKwdaUN9MYLcYyu6hcc4ng3FBXciisucrG3HgFdYuNG4c4yYFXssvxHNaDZnFpfJwxrPAm",
  "key43": "2CffiDd2yvvKpnkutVyVXup1r2pwUYV558FJtQtaphRqwHzDERK6xuy85STGAL1ChR3DzdUbu8mzuNjEHFW9H2zt",
  "key44": "3tJiimtjh6z9rzCLfnC6ABty5aUyqZ8srejdzVrYKBgMnRfmBam8cG2bDCB4o6aon4sn3hF6AKU8bVFqjYeQNsGP",
  "key45": "22gWRVrC2uZveTog5kn8FXNwztnmHk2KXRzMnGpghx5YciNPQcJ67R2NLu397M89h6ZoZsioLiS8uGJ2JtD18s1S"
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
