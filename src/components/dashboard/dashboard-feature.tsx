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
    "5zmcBXU1dcp4VxNVVMehHQ7AeEm69gNjnRqYny9iJRMp67mohwnhKCgY1go3Cj9wwDvLVB9jjt8Cb7n48nkGE6dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pqWQwQHk1AkTxAmzWTMuSCZ92jBERNcC8Ho8nqjCutu48aKQbMqrsW5yA7AftmVVNUr9eGqxv3eZFuFcu7FJzGN",
  "key1": "3KFnxXSdLojhv1L7hKwZtYioZh71Ue7kptjPAaHiffL94cweMRTtF7e8zRmc7Cb1a9ZjWjae66wSzL4cSeVxyGS9",
  "key2": "36epq4uRfBQ9CCthdk6QWsJrjPeCcBZeQqgm9F8JY2YFWXGiqGruxxUYdagyLY5HA3WxLzo1QE2mcFAAkx3puQpx",
  "key3": "5h1j2UyPVkJ1yChyAsXN23uynGP1V5ykfhkWhmba43cqGgVApL5oLpNe1YUJSwk7oXhnU9bq2p5WSPweFqJgpUQK",
  "key4": "5Kyg7Cgfpnbf61sepZe7tgwLFmNCYz8cucgKrU2CJWErmv6WG7RtVZcNPzrDEJzCqH5pMqNy5GCsp3DPJ1chrtTj",
  "key5": "4m8fsdBM5EZR3tprYnY89xk2yZcy1HNDgXqgGHh5RdAvJtZqHEATuWCQ2PF3oGmoWhNs22WBzNGsViviSVzReA3S",
  "key6": "64iKPBYHXUdDZgKFYQmJdgVYV2eqSwKzaHkQkgLwuuofiKGdtynywUnCpYHRr51CaxnMSACXNzLit4kAgZSKAF9A",
  "key7": "5UDTZ28dCGthW6Zc11XkJH7WnMR9tcXfW8hQJ68Cgauyrde8417s8gr2hvHxqDUy3MqPiuQ4oQQLh42pQdDeK81Q",
  "key8": "3ii5imccNwyRTVRHA8ayZAWqQEJqc5Lop5QVhaLWF46yY9QriNkKkBtAiaVeVi7NYndrZNcS9EhxvD1r21YagDYC",
  "key9": "317nYaCtErPnbA8VQ5JfJregTQoAxDx5ej3VrERiD9UZ2B9RyDJQ6VcQKumxHskS26er3u1mftBnDAdpVRiQNzoN",
  "key10": "2phEpYfeJwFyYJJvpfkKobqS1HULK7BhJ9nPLSRPfmMVCxridBZyNBoL5yxBzaB3KUAEr7XLw5HUpy7n9pjCFrkW",
  "key11": "3WCWsLVbb4zn5TjuPc1FZyXSxToR6YfTwnmV58uAiNXfDacEbMQ8ed9mXHQUm4ZnNrSiPmTuAEF2koFm68atbWXJ",
  "key12": "3MQDf8y4SBnJSps2bkaJM2EiFqvRoBc3dhZJA6347PhWiiWZZgCfAj6iomC9mQBoJ6GCvoQpzsw36jwUwMSab6Et",
  "key13": "4FottGJNxZ1DVyJU39vi5WpPioCx6ZoMHxJSCad9DrSqDm5xkAXp71gMdbWpLmotjyQKZcuaq6HpbRzGaeR21Z3W",
  "key14": "2uK56kXy8kEN6DJokktGKokFHhasNAeaKwS1XxaZPSg1YAQAPM2iFmnpDKh7xdAqsctFpZyoJQxX9qVkTpPnKArh",
  "key15": "3co44Hcwkhq82AuKwvVSBp3Js3qSk6fphcAwDhnsCQkLu7V1motXbVuujC5ixMAk3fjV27DqTGLRN7A3JnmiNfxQ",
  "key16": "3gf5cG6PSm4745Rr6ETWncjimaAmMJc5418kUF3P82U22nGnZ42fsZdWpZiFoRqKoVsokPGUzLmzDLMQWo9SXHW4",
  "key17": "4gEz3KbGDAU6L6BYMgXdvhEEjq4jzjUGsBMAbPV7HFyRSjbG8154dskAUAVwoGVCfRQr9MeFaeDJzEgdF9C9ikZ5",
  "key18": "47gBLHwKpxThHq6NxLNNvfdgzxxM6PFdXZrqXeyqbPTYwoUVczdJZPirRrEficNoU9HShHwVDcd1N2y1oh6wNLkg",
  "key19": "2xVEvhzsjiySuNZkksREy34sDR8fbN6VEhUXigRDToM7sR8BRsEb9a7ymtLmWxAbLJaG1AFYRy5kBTqD6cfmof7o",
  "key20": "eJGcJn5PwyDSDWiHQEo7hjb7MdXiBWKPs9YGodyTrv2Ry8xAwJwCqDsS9GzwXdVBSM14uFXrMPzN5LcnD8cSjbF",
  "key21": "4xumhYU4Khchwu7voE9GnGE38h5HsxhCZiKkLdadqi72oxRU36DXrYsWzKyp7YBiBVbTTn7PGqh2CFzAMuZusPAX",
  "key22": "5kjfJyRpgzyDGk5yVJTyiXSQFFXuFs8sww4bjnFp9tztQuwHXsrjZ7Ws4yWiRi5XU7PzKLK5Yr7yAeR36rckySmT",
  "key23": "33PcL6ZRRcPdFh8EHConFT1zPfrgmBFXuhnoAyoisMNEDgNGQ2bRRBYrUyo4BPXyXYAQE82srg3NFHrecc7W2thS",
  "key24": "3zVUT2fPjBNd8G3aP5971tj8GbxJmkM6bZGkqis3sTLbW41kdtV4nYqTKjDFzuTu51uL4pbwdi414AVMkYn4osPA",
  "key25": "5QHsv23uyzjsG7PDR2edPukw6ZjvdCYXAcvEa3eRcD25nL9H1dDF8P7vbEehyuDAkuEgY1ZVrCeM2wzXreYMh1nj",
  "key26": "2okRt7N3myMPEpFRyzcZAkjN9y9KpxoomcTVh14VdjCeTvk3NSiLhHxefoAMSpdgxHQYVLnNzQ8qLJW3LYjuzbE8",
  "key27": "VNpjvv9pRgcAhmKAZeE49rbeZq1M4DjTprQoCzHWCZSoNNKiHRxvCwh77BkQ5BZMuYJTgc5PogDampUFz1cFLMU",
  "key28": "382Hg9Yfgb1x7sqryUxicq91UXkqKavXF19D71wkVgkxJgjVyetz48PgjHfdmM5zqeszek2WwGgQ4dDn6dp5UoRH",
  "key29": "5S7ubZ8PXvHVYsxeVtneis8pVfXkMTBAmnYeMorRaJ2KqRTrMT1oMpJmUNfqn1HfW99QkA2gsKGgvqbaQgFLVZx4",
  "key30": "oJbzJVAw4hQHiAHFz5Z63AsDDc6szoziPmRy1AVU324thKVpQx95aja8ZLuc85C1MVT5Cphp9C7Lvhm26YmQxsi",
  "key31": "23FKeZuJzfoRApPoatHyXPqmjizJfpbNmzQoqVEdysD9ad2oDURLZX5HridSENGLAYrWUCwBD9c9ZGvUpow4Ggw5",
  "key32": "2v5Ha8xCnA4N6MWHun8uWpZ2yKcYejS187VG6cUxdxpkM1keXrRyGzvX3JUvnvBDQx27Xnn1P9ozmS46z5i7z3Mm",
  "key33": "3CaChxwie9j1Jp6mCHEu6eS29bb38cjvfETbdML8UtFBsuHQzRKvPcALCbRBjHhKsmitisA9ojyButCFU5nZvpRm",
  "key34": "2ohtePAvbVKQkqSxy6PTDSWJ34mMhq9JQAphgNdMuFbfrovkC9X9GVe7oSXx2HDEtBPeJLsjcGbrs5dhQAChMhSz"
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
