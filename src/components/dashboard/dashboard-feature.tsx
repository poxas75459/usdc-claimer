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
    "51hrzrCvZ1u8nV6g1ArpVpFC8UdvQN95Aj5QR5Ec6ZrdbFAe4TnRuq6UvxB2SbcL6hbMJ1nALU9iL2oHeak8aTgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8wowPmFBGrC3Y3cdx4m6cB7P5PcmNbPZ9vPvfC87ARSwWu54ygeku5dkrau4wkvzWkWXJ4ULd3SFv8JXvJqN4j",
  "key1": "571kQAnRhN1w46yHz9y7KYRHDzisN7hjXqKLYmWipYVEtVp6gcPH5VYjszf14daMa4VVqRXupucKTYvNpBPAR6oe",
  "key2": "3G6SSnahyJUsbuX8ti5TmMZN7GQfsc1MS7LqVXARTxcSCqqzHa1JPhgoosz7NGRTeMFXpPFokYe72r2aG5MZz7Sh",
  "key3": "4N3GJBDKKtXMRoUYVKk1SkAM9ZuGendVFPA5yjKjdwn9QiKGJpp13WphAv84UXupQfrj2GXKhrjh9RJBxJzg5jCH",
  "key4": "3XdnLXGiRHTE9EZzda2Skr2uurMfdh6oL9bEKZJJMZR8jRqap7GmdzYNYaUCE9xeENLfy5DDtWJDXFzD8UBT7YuW",
  "key5": "2h2wcYByqjx4r7QKu66DSD5HDxJT5hSq79Qe1TfQLYfmnTWwhbJ1dcizuweDEVckHDfVvXF8KDJmvyw9PWNHSVGi",
  "key6": "4fstUk74ZDujcq9KXq1YfnguSYWoqxyK7BA7xiPC2RPw7zTzLsotetoxCJfhjwNFhtWkNyWEvefRPYS2vW23vKia",
  "key7": "7q2z44qCPBzDbbM2B854TDQreHXs1CGUy9S8AxjHxwmPuDo4t6j2R3xmzgfb8NwR4dyMdxLiF3ntGZHNeDoMfKZ",
  "key8": "27nkvuzL2g1Y7R8AQP9ow2UNAJWbeZdVnMdsswn24AX4JpAYsQChwWQ9xBWx6pXfBDfcnXtZyTb1x1NUTk7cbLcJ",
  "key9": "5zQsyqr8ug54moh8DqYqvUvuFQgc2EqYLrZkyQBVmWNaG8kRXdiF5up9Jno2GduEW3PqUbaHknBwEEPyQocUzNp5",
  "key10": "3nAM6ToacSwPPPwpLyx6XBvWpdtYRTPBDrH6tKgp9wMZYfHq6nqjhTuGgjHM8L8fWEsfPpSuNakQ7KiNJfMQrB9e",
  "key11": "3yEZUDkuYBdMAkBqV7LGZpzbqD1tbhXu8vj6YQgwxhY1wwtFUr5ZR52FsmsXtRdzWLExBbc23F7ACY9vK4na3atU",
  "key12": "HAjVq78qtomPetcngX5uyK4zrXfDYTRjajK5ySbMwYuCSZFuneyTzHNhwiTwXsXEFbYJV5j355FKWDfPdbxqXKe",
  "key13": "56qHhoFZ3VoTePMSHCPdzpGQvpBRhGmj7yz6YKcyWLjF6NtvykL6KnVWz5HJ9jchQ4DsfZsHTZnKb7xpf29o7Sj7",
  "key14": "4jYBiSXvjvNGcprFG6CZuaVzyuXtWPfLd9Y8aqESFrJWuRXhhsuHhW9zEhohQ1rQbyaXn3mGjBDVfNG9WDMT2z7U",
  "key15": "4RGYUuniwYAGq99PxH914PUooTh5v7FcsEmQ9XNhxo5TCLDcNoNTk8iXXRTPA85DEGjdXrkmhuH4W8wfkhjfmfgK",
  "key16": "2xphHQ7byQxTRsnNm5jQnqjqMGG4NJKtjxkd9qiFtdD9dzcvRLdNuyqS4GsG8Dzh4F2epgX8nhzUb3HW4iFFu7xp",
  "key17": "yJQkLUGvV7ZG5Aj1fQDrUyuAheieNNDSoZSkyyGRPXD7hcXdFbh3CJL7Ws3QQ1ERyzZYD84ThXzMd3pj2CrZNQB",
  "key18": "5bzMXaw1dgQBqwXcPS4XvNfe1YutLEvUJerBdbwDXoMNGkGxkW9xYMPmFVieur9oJeSZdzv1vUQN4hryfVvUA6zs",
  "key19": "2UHLx7TG3AhCdVND87urhuVFkWMTKyev8TF1iYmTJQFcZBAP7EkQKbAqKX6fh63Z1gjUpuAv1MeZYgD35evfQ682",
  "key20": "WuDxC3TMHeGPWHbASpQ4gowBb54e9SXEokTMAvZfP4fQsW4tfrTEe318eT2KX9CDgHEGA7dVNHzJxGqbN7BqLog",
  "key21": "ii5zYhBJE2CRJ7PknNKcupztS7zLJPLnC7WKWiwsryVnJRZ2cMJZTCTuF4eanBWF9vYdjwRvtLTz83YYXXvjmBW",
  "key22": "53YFCUTSCpd7CUTjWYv6jxCPeKYpSkaYERVQEy5YndbiYL23oqQV1zG9qFgzLFWE61jiXeSfa3FyRKZNSVkUUtir",
  "key23": "2enk51uwUMfhJkpVk4Nxaw9pa538VfA2b4TtvUtvpxZPZuS51hQhS2okuomT2JKCDisdsKNLwbP7Rx7u15LR4pPZ",
  "key24": "42MLvmborb7ry5eEgpTLCgBrzkAwJM1TunRa9L5P4BVgVNhWQo8k4ceMxaj5S2hnTtWKEdP2n97E4jx5UJqb6dLz",
  "key25": "4puXjxnneqgbgYcdDmj3W3mCbeobsm8ay3MN1hPbw6QF1TZ2V49b9rHYn14EqK26LXZL1V8kqSoqNBqgX1B7Gmm5",
  "key26": "d5tcPWv6xseME1qu1tpBsgwiozZ4uLXNgHYAsA58XskgnTYjdpNfTcmZ6mMRhbvC2qGpa4B5fPdMZZgzidVxknu",
  "key27": "2BEdNixDFgFTd83ckZRKwfmTHioqzjzKagyRHhXRN76G6xzXcWzNDdPDm8bLLxRwBBbJU1XRG1nsvxVe6cWgT71o",
  "key28": "2FFAXd9AFzJnWGQEPv22BncN7ekogNMmkzbwLefv1H7FW29Xoyfue82y22GFi4qSKafdbPK4h8CWsF5EQR6LXzVR",
  "key29": "4otrwWMorw5vPoaWWkThtgXfEjmsqQbaP9C2xKhcrhUK3fDpar7q7TFVMUvtCrvGG8uks1ByxXgLWHzdEdq71LX1",
  "key30": "2ZdrKxRvt8oeKAQVkkshaS7LnAGAuimHsyDpfWGL1jCYXtmmC75nendAjjXTcqd2ZGvVbAwY6fKY2Rwrb21S9Kg5",
  "key31": "62n9C59UTYhyJc7agFUBHRdZhsRQDtr8emJVVJzLe68cHwZaydaVPPdehf7xiBKQgncfXjDfUhA9rb8gqTmvuzbG",
  "key32": "5Ucw3H61MxtLfrjcq5hxeVn9GyKnhVMPyeiqC9W6YJJi5GqELQ5osiNevZvhRNfFeYKvbJsDN1VS4zp13shF3PQ2",
  "key33": "3rRsTFxrF89YCEmGxQZ8a4GeQGrpKMGHemnicdzQTX9kzArVTwGNqm3mxAy9RT9txzyqwTbUe44433tecrUP66VD",
  "key34": "5xbpreGMDFsXEaNN2VonAZvBzCPAKyGHGnAQZEcbUUCDZaHT7vLr8mtXnjq63rkD4VgjYSgcnwg4S9HMWCzLhupK",
  "key35": "2x1FtPQ1Pwvudq6NH4R5CgKB1Y1C7urNqpGT45uwfubBeiaUGeywvdMquHkhME8CU4gox83CiAyS4Rx6oqtzeFPr",
  "key36": "58HnJJLkRXHJN31CHDiM3CqBVagcK176r5MvJFgstznu9QAeDyf2tB14APjeZzjdCKf33mqAXhCfQ7mnC8XyyVN6",
  "key37": "2towXATJ6g5btJ1VXnGzFtHCXWNRHYpyiY1hhsL4EcSYhHb7eJUFcSgDw1UC8UnXgCSRvB1wKHKZZeVR2qBwruKX",
  "key38": "2BYSgyTrif9tuuzyKhCGXQwcZ8TQ4KZsnQN4RH99yVSaaxjuNNUfgpT85iVpKfQVjRY8fDxme5DcoS52Ass2ovRh",
  "key39": "3ELZ1cf9qtvhnWG3Yu9Mza2s9D3nrEAZ69XPExhdRHcpgLMYsAUWJVFqQvgJKCKxQcU7azY5XygLcS2peSBRrLSD",
  "key40": "5N4k7Eme9hJunpjU7gVE2mjJ8DZLysY7sJtNKGKzYydhoGu5q9zwSSri5bKDqRaLgmwJqodYyK9A6mFwoCoUZZac"
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
