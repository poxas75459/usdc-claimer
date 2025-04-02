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
    "2outgUmeXs2CX4K3P2uaFTVD6Y8DVPRT23DHJtiZHhrmHb82PpYqx6Rg6VHexoFao4hMqZSVLjB4QpDsKyddZ3Mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsdKz1pNcQzCYp2vYQ2Jxm1B8eZAkdTd7DjMXoFq7W36cezDJadTosdbsXYpiwPSuqQbcry7nA9nhza2ab7HGr4",
  "key1": "rU4wJqJNqXQknn79THGe4PHm4tvbubQc8rFtQPWsghWkdpBjrFfc4qbM1FbDALn2KUeeq6EoTE3xGCXfjy9b9jV",
  "key2": "4b7p5cF5uYkXpybHzuKzD59gRpZmuyPCtKcoP353NFN1rNdY9TzULr8K3iJthf7viPAcdvh1rChizFNgTYiHcU3H",
  "key3": "3HX68mD7UKrLNae7X9oSzy7VDTweUwFdmvTcZDt5pbVvoeCmPUPkrKYinS2GTHeP5kazPmsKpLdH2hmSHTKbdsjc",
  "key4": "2css6HALuXj3ik6yeBQVQuSTw7gLE8UtTbTjcJutGfmCqbGCF9zdALcm7mrZbkuFpQiiPVbb5SM49wfwGQMtnYsp",
  "key5": "4Sm3nQLPjQTFPkmNnjzoiV4hWY7zCaVT6ftdTDzLniHfZQEoKUy7pTjAx8QSrDZjfvYDPQFDDMM91f9qmxQoHneh",
  "key6": "27crU7hCo2NgBXGA2Gv8UfG1oDyUU6TpWBtW3LaVEhKoUn4Nw9C7uwUtEah6jZ4WzA2gyK9XgASptW3wAGMixoMn",
  "key7": "4EGjcRgc4kiNxf2zURP7fSCiXhLDTemJU5LMMJGQU913hXZ8DatqkDFZYtGosr2gSur5pRuMnmLXURLt4otggQ2E",
  "key8": "xmwK7QqJ9A3VY7GYJ9p6Kc5HT4MJzXjaKdzX7AEuz2rTufsoNPWdsf1xZeyjiSJP682HkavPvouwZ4ruBQJQ34H",
  "key9": "DUDMztvSWRZahfSGUXRUghTzkcEWnaTatHCz3VnXsJtZWM7kfVu8JfothPR5HKri8BWwMj9TJ4egbcMASonRknN",
  "key10": "Z5nnywpVaiMfhnAtNpXw2swidN6kLQqz5hsTZ59akHUr4jr828wub6FZT9kwgaNmBigeMmujcuMr6o9NoRiwA2b",
  "key11": "5bfGwZ8X2fM7dfK8EtUwenrFwyRpFj6qmHQZaUGiWLopEXuQNCxmLvNWZispbLgAiMgTLJ827wHPNP4kvA8KecR3",
  "key12": "3aLaAG7VyjqzURx9wDkEbVZa9pJLQypE7GDsgsB3qoNLH4PTd62bQEZgzUgcbjNqcpbZEgPRgyk24XaHpMVMY9R3",
  "key13": "5FC4ty8dWyuqzfAWWT8Qd4hxyPjnZxx21BVhgLTWv8M4XcTuZP4YHNdDDXAx6TcwJ1fPsggwvJiaVNho2WQyUX64",
  "key14": "2iXkJxTLZvPTzC6NB3RVCmdVZKwCKx6BwnY7yHHc3ZY76N4b5JXAMJ1sTSsHyUa7YmA63vN9wvyRUVQs9gJqEx8n",
  "key15": "Wqx3oYkQtwmEbeGEdZpDN11mRGy5SVJFDfwt9KEcV7q5gmziuKUTdMQ53Ma3GDM5QZMQyYcrbCyKxTTYK57z3cz",
  "key16": "5LaAAXzMo3si4P296VNexVNvhyq3JzD92x9BHx3f5z76v2CLMpNKhpF7amqirATkWjSYufH4qWNaDjXAQmr9ufJ6",
  "key17": "5WNVnbAvvFVXwWngjUJT9PPpiRGRiHQRyPoLLfaN9uHagKJyLdZzpax3Xy1ZwF9LXTF3ub1EEeUWuYeydrCJmGDw",
  "key18": "5EJVgyQcZfzxFHEZMLg4dnwzFgQqDA2guLK1AoYQH4srWuww1ifBPE8TeqxWbPZ43ATbJc35RUozeEVKwsdKnJA9",
  "key19": "61AK8f3SNy6H5muQwqfbK1yFyTvxfXMCVx7dHfqLqo6SfAderTNrh4uXXRzEvZPHi5o6gAwDNbYb1QEzQd47hWpi",
  "key20": "3tXjB1j8XAGCXnq5BPd3pfGZyBfbKQWzG8k48Bd1vTV9jaZHCvUjr3L176hjtcjdGuHz4nbbw8o2X56P4hKGSLAX",
  "key21": "3qRwtxKq2AWwXjR39DcxRZpdHz3jQjB5HMRWXKxznW1r1toNhruH58rJVde7uWcxTYNWcEjwRP7TgAZ9EaNKeGNf",
  "key22": "4x8YBSz7XnL1Lzrm7ZSNcpMs6ry5FUXdcgzK2fadLqZWDs3EsehHkFr6sEKQHCGP2dNgRybShuRT6ZnrD6CJg1PE",
  "key23": "F5GavYWDJhUxaVUUrjdnCV4LCA2FUUgxJiVou2vZbjHomG8s9jAWAZQMeYQJdup84CEPjaHRP9h3g2Gb7xeBDZH",
  "key24": "4XuJ8GFHqCN8k7zMuaZfzKp1P3JTLxZvq62jJsJuujaRMXpAxiz7AnWQCYhLXhL1TNhemaFHgZHpjdzrNjbJMWAZ",
  "key25": "EbmEZVDUurYfSQLi4FM3WJDa8hPsDfEHnm5sGwjEN43qc6Jz1xgimjhTRG5gs9YeJAiHZ6aAVeVzRK7GvibTfVE",
  "key26": "357461mXXwqVgb5xU9G4ZsCtyXXw9TMGyP9MrkeB1B4rFd4h6i2Lq1eXCkjLuywhbNEd1yQfasZpW4pK33Y6ZBJD",
  "key27": "UXND98GaFSsMSh4QKQNQujLUDusjyMdtSZ5fk7WJw1ErocLK5e7xGGVShDWRtY5KvxfWcun9xcLrxbQwZWXB3LW",
  "key28": "5NYErpHbgDWRDXc5pX4LpEULmBE9ARmqWvHFMLHDMmoJKpnJzNvWoEfx4Vm121Akz6s2QfTpAdDErZSKw3PBFmZW",
  "key29": "3ybSshAJ66fS6dCei2BJUQo8HWpjNmvrRvde9QiGcLjpCT1LnQPEiy4X5Akvh1tfMNAs8CqtPj6HWcn4NaxXEpnh",
  "key30": "46V8d2BmgHGsS4KFjacBGHjrJjJ1vbf3tXFgvcAWadYe9bUJh1LQu3gfmYdpvVUJsgksggPHw3pRNJGgGDxw5Lx9",
  "key31": "4ScpQdczfyr5ChksZt1zhu6CE59z3TPYQ8YSCAELFsr3uKD1orGNZUYykqHcf6MsjF38FnnGd5J8452vjpfqaWtG",
  "key32": "4uNbmV1p1uaJK97hCsgJPE6TwGXqkNr3dvz6pJ7tBR6moUc1e5YWcLX3mh1UVnJUt5UzByn1Q25X48tWvEpVkNBR",
  "key33": "2eEiignwruK8CspfcYi83iGrYQYbWdzdBtAjbixaoRwCFctcPmVrmWHzUUucEfsotyX5L1sY1FrFUhqCNPAHkSu7",
  "key34": "4dAWo9QLxizsccpAmU3nqLscb9y33B25nZ9xEYZ6XirfBCUXUkauF7NtQeqLqCXSZNQZnXNoKCc599KttDVKhK7s",
  "key35": "43d6GHDa7JDq9ZuKzz5dtcR2BSL5xyf6xgvxBQuYfejstvU6YhXi4gQQGEmegEsMThxC5BgDecSLwrQvLbJUmeMY",
  "key36": "1WwPaC3ha5TH2Q9DxgzxLjw1XrdNQnhiiFuUfHQgi1q4Cay4ZziVHWZVw5F2thEukNw7MvXr2EXqgNHkr2fU66z",
  "key37": "9JBP65eS59NYaYRqPqccGWAvir4iKiX6ypifjx1iR8BgummA6dDUBeP8nHoDmpVivkUxnFDgwUcPTxMdRqXNXgg",
  "key38": "JqZvM7cGksgVKoji1e3FbbdyUgrx13V3Kms56X5FBVaYrrFv36gq8YYczz3G6nSFA1xjUfKDe8ZKX7iNuE7tkoQ",
  "key39": "3PMpnXYbXCCwcKefjc1QShC2PwkfNzaPWqFASFmGuY2LGdA2LJ3ekpQq1dTUuRkcYSfevFpsDCMRsmrLkNMCM61g",
  "key40": "3zzs1y4k2z4qLEZiumKs11o9p7TQSpCbvfp3QyK5BjYhCnHoXct6qA6n6JWmfq2UCjcFpzaLJAZZXcgvLgvzLXGf",
  "key41": "2RNzqKghpvCHatJeit6BuNTPbgGzu9HmZr9d26XFjzp6BGACsGRsfMnoQwZzDmXhCkJDp4EZBVSSt2obPC9JrUq9",
  "key42": "3ViJ4J7FijKccKz68La3tj4KxXZ3suyXtk2F7NqkHtqW3FvpELMNdLJ8Q9tahWPBhD6gcFvNtfjXKJfY5UfDNdWC",
  "key43": "5RK9e7mjPEZWarANjEd2pvRrSjfapjV95xZ1V1yDDc3pzy53sPNFY39xVAeJryFi8N21SZ9NbZ8t2UfEewH9UYTk",
  "key44": "4SgwMeuqRH1dHXPizBH5pePBpkJWTJus9LTwQ8BtSUdyUBgmF5hHx5Cv7gFUbUgF61gb9e4B5QP7uVHBkW2NRx9P"
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
