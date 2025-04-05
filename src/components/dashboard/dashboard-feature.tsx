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
    "62BBTne8LQoViYf9trfnqgJUZEFZisBxtMVfJ3z9jCk7JxLudqVragpAvDU5fV2b7Ld2q5yYoDN5dKhGtwysfuCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mMRj34k1LRnmv83MBYNUfeYHpchCZ23fjZvJACWnDdtRDmPzw6ij4fUvaXQ6dDqMhw131U73KN1BMG8efcLgf",
  "key1": "5mfNrUcYwfi6jbKNmstAy8F9DRcYE5tbHyRwvSg7jG98w8p9o4Ngkuzsx25AVderta3FgXbdW82XbttHcK8rvSAN",
  "key2": "Wof1v3htKi125gR1ac2h9BWFQncQXwUou4c75MnwrYcnEEcmJ8UkCdUPGAwYheHWfHvK2DdyD8DrKh3T9YegWqJ",
  "key3": "21D98vwnBRNX824wt5aRX1hqsTwmtPrvBa5Ub3xB1xE7ibzbLawFoQsB1fAJxkGanufpZZEZx37ZyCfdMJ6HdCRu",
  "key4": "3vpzXU1phGVprj4PXqVUo1LXa8BDcUXGyPaTkJVwLNFkJBPhUa56gg5Cf3GaoQjcL68ZnrQoBMUhfRh96qfL66cr",
  "key5": "2hL83DMEtWM1DUSyyaeBYzLPtDmS9T4rLSP8DHGxo8fGwznoKeWn9MtxBw4chiH2yA9tehoG5DD6v5g3BU2ntytr",
  "key6": "3s75jS6V1NEHdcScW9e9XbJzPttpfmNNQCkAGrXDdmeBaQBVanoXYKrDXyqyn8hM9mr7JLdWk7TcUJ7xL71WDd16",
  "key7": "4GE21dyRzt1t3XVGjxY7tVNbAuTKpm2oHt1mFvLxQymXiZiRSu9s6bw3mBaMKxqzcS24pNaC5GtbMPshGo6hWcH7",
  "key8": "fZ4MY8odLu1UbCJbDCkKMPX4vaW6YQ2E9YfjzdQ1CwN8V8Ks9v9JNq3n4YLv6fP3tehhA8DgFb7SYPmU3fq7MN2",
  "key9": "4nbTJPY4RtBN1WnWosCB2LsRnAdx5oLfo3wwvghRRS68zHfrhWQZeeV5TJx5eWxFS4b766eHSFn9yae426eHMJ4M",
  "key10": "fFDyiXtuC7kMbQ8kE7XMXM7Zo1WiRfdWJZVxgcKQZKHn1Ggak9gekKHeLH321tfMs9REq7HPD8nUTKyxy6UkRYK",
  "key11": "5puGk2KASdxx2ajhMQzyb952DaS5J1KBR4DbrdLc6MibwMrvxMyFgUqoFHM38ogm3Zk5dZJibKprD4tLaWQi9Sre",
  "key12": "4GUqT4abA7fwpVq3jwUYiE22jEE9x3wMAfUkXg4KKLph2NUisApgzX8JwpcncxwjLSGUSLy5ovqpYmmA4N4jezYP",
  "key13": "2ZgWH8HYZaoa8uG1T6ikpNkpk5doAxx5q72wUrDU5YeiCepsyEQiednnGq7cyxz4iXyfAUyLjuAqnynAsaJeS1jU",
  "key14": "4izX4oSf52KN7exsHW7FfsJDxpquvjcL1AytzwUV9ESwsjXX6dnPNvmko1WtM633Hf6URdmTefogocYjZ61B7SoJ",
  "key15": "5b5hXMvZFiGG6okLSeoNqhrk3EiTKdSdxxXVEFMut27CDRSJr7BMkcGDn1WqaWCVTUY3sM5upHaRNsE8DdTPS7JQ",
  "key16": "3wHG6E9xEm3wCBmRPZv1abKX989ezEG3oUmfyYdp8S9nHDJJi1AoPBVGVKnHBJFFhqjoPWvX9zc3yANXbiDtcV27",
  "key17": "wGo9d66vNJoFvyPkySciP36ZxGdfbDoDRggE3XWzbAqqWmuhS1UVspCmY7UZgehv66jDjT5PW2yWJFUeJ5X8hzu",
  "key18": "YxP64cXoBFzGfiiLRZEmtsBoU1n2n6UgM1FGoTTKykapVXBPJW2kLXB8SpJdmNrZUJhCDnUnRRV4xXiaBrQsxL7",
  "key19": "4G9H8Rj6TKRhhShVtQPk7khWS3tfmrSKVAiigVMHX5zTH8eaF5PFJN8JF8cJTnPFotGFMWxtAQsR8cuaXhp14g9C",
  "key20": "3Cdjhxx7X9FcAZWQb4U1jbjWmKzNKu5z5SQg5th9rhJiooZLNYRioHfL1TCZRaKyUKavm83mZDPdwcpePnQxuC8G",
  "key21": "5dGWHAQ7iYvhEhC8JBt8AfXyThc4pojefrDHnK26zMHjWGndCBkvcjvdwiLjpAVHuzo74owuY7rBa4AW6iRK4mrN",
  "key22": "4vs3jUHsvYuLYux4hzy5R1r9NhL6kPfMmma8sr1jDmDCLyzhjkXZvdffq7WpD6ddYwFVvRaUbWGDgkKkWReXe39N",
  "key23": "4TTdzrZzHWGE6FAFZETuWfCnW9vkUfPfMnSJ3ygQQiYpUuSYyzoyMjdbt6aRPtriz7h49QZQ42orkeGsFgp8ZjQg",
  "key24": "56hd4WAGbAoYoLGCvSL5GZV9LSqLqEkcoswkyrernfCfb8rHTQub4peJ1bTMoVhcJgvws6HksarEC3SyvuzWEKh4",
  "key25": "5Zd1S416SaAESKeZcq5RBGe5yEmX6VmWJ9cWfjyKGZyUvUVCF6rJsrvV12cogKbjm9AyvBjeSAizUATXQLA4F2j7",
  "key26": "2y5sz8mkcfTdvqAprSvhyjiuDs5YjeGMYPauGjtYmWB1vReNUPopakZ9iqmd1aiZTiobbrd2CdfZdf3j44ft1xLP",
  "key27": "5euHGUu7uFjrbynLpheTcN4X3u54eyWcRY9S9fSyHTcNMBtJeqmjN1NwVEJPcR1nWZwZZ7B9TzMjLfXAeGTsoEnv",
  "key28": "3QiLNVXWgntSvFcUMV9kBWai9r3DhbBdj3C4sZfydmkfkLNdmNy8g25wHBZPuJ8Se4STo6NoS4A4bHV6uU9AcuwB",
  "key29": "4PsqcP2KuEoR1kK3GrpSeoBnYC5wyfb9ikauQVG9F4ZeE22P4iMphwkmmNro5Rt831oGjBwTJfixgucrnApe7JKF",
  "key30": "2QxtFuifEV6Q5ELWhegL64zspn1Bf8wbW5BSrsefzDts1yHLucX1LZrY8XTWeg1DbYTxdEyrzEZXY6zhBqeUzzCB",
  "key31": "3ZAXnftyrmZz68a7y51XXY6yLbdEKmkEna6EAJ1CUNAZ4zEKZF2jCgf79bYKFr4PZFwrZTHK1nkkQ1C8eDcB9rZM",
  "key32": "3VU8xugPxWhKNobdSRTvB2S7kdfbCwnRUmN6NzgdHHFE3PzdS9Q5bpF7jJvKo5sUzt4yvXAFztk4DMacw6Nt3Bnd",
  "key33": "3hV2Jcx7gAvxKEm1in6MSPtDXfP7gMuBSwAP6HbaCJApo1ae9jp8NFW1oLfSsRvceuNqvD29wZu7rYH16ShgM8SU",
  "key34": "2zRxr7uYbvxQmmWjZJL1aVwEYySxeMur69LDZLTGxztKGE6vznjqb8AbvKNbbi3zfeWapSBbd5hjZqdmn6ihywoq",
  "key35": "25rAgusmxnBWDp84uaTnzi2Mhs3zmR46xbE7ToTtZkGcrUFiRmfakgauN7s5zF5btQ4tV5MBCRRKUPBNr1w5XtG4",
  "key36": "3ki8Nqa3Wr7TPY3nfDCqErb6DcaEa9hZVK56uZmDJyJY7wDy3LJwd5XG91Aw7n8KoJWN4FBskaqJDW8nnQYEixTM",
  "key37": "3QTLJLZriSUKyUnp7CAbAWLPL6onQje6cKXmdcKV6U2zmw35qspwgVZnYFQZPqYCCsankk9KtzfdfNkoPQkNuxFP"
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
