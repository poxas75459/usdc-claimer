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
    "5GcP1aiFediofCSR7rDYB6LoThojfLA9jornVofagZoyLjHKcqtYsB8Hk92QdTuKaLBAcwsm7hMEmEqVh2zmpJNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Jt5d37nUZGsxgZgxNk4jcC29UFMQ6Syw8APrDhbPFSZ4RiCf1gbfQKJm8P1uTjjkwboTLQEqZ2mg74tvjxtJLe",
  "key1": "VQrr2TDNW4tVdmfNDDY6cXDaUQmsCuPzaRZWQHPxwPnpHKYuAqq19LcK5k5j2LF82oMWqxZyVs9cZGAwmnCAqng",
  "key2": "3ky2y4bsAQN6BQF4mLoFYdfCJQ1fsadkYnrr6qznCmQUSoLZuSCxgdrapjVoBSxQpbvMQNzHst94UDXvnN7QojF",
  "key3": "M4AZVY1J1KxNmmge1p18vYsN28JR7aLSakpCniVVJfWZJQfZJeLF7953bhAJcEMSUHH12CDWNNxHbX9hpB9a32N",
  "key4": "3e919GcBRcQUhcvh7hUMfKWtP4Me7wnJYnvzJRC85qfBfoW3iPNSgfRXEYyQFsupijvRLqHWZo4WAc5zxvboFuae",
  "key5": "3D7Hqv6BqMFdJNe921QbiuxfYSFu1DgqYQnx3NWMNLngfKbCU5drWpptSxBUqtZf57QgjvgXf5brrk1sQcCyNA8e",
  "key6": "2SMLtm9pkEUvgmR5yhx8F4hjK2gjWdymNdhen9LWeSfSQ1uzQ9DQtw2AAHy7wvzymP5CffXVBczMyNDYPdasWAtL",
  "key7": "3VkE6SoeNoMsDUX9gezLG4RqXrER8LYhW9DKn8KQKcFfeN2hk876gpdwQhfUTeXUy3Qp6oJdZwNtrRc4E3ixqgws",
  "key8": "3SUNHgk6yjpBKQ8iwpiKRa1QBh1i6vBW7QqTeKvPFMbbULdDUPEL6zvoamb1Q6usEvdxwDDa7Pe87AfP2rA3DYFo",
  "key9": "tE9MqtxEWUHsMF43GGywftudWvraskJnJgQckmLfKHx1TttMEJrE2GsXeQmyeiEqiXYzrW2BXuuqdnQLoFJfa1P",
  "key10": "4AuAKURnyxkXFLTyqF6vNNAJf8eKUExsMJQfp4oveqfwMy2iL3wZ2JYXhfr1S5fiQiYPBC2NzCWYXQvSnp4Je3EM",
  "key11": "5hU5adQJrW9gLbBhUKnsRg5ptEQjjvfm86HdRNi3b42FfNohkvfJjiHG1KcmZ3GSmHg4gc6YVGwUM5SvvETgCMtp",
  "key12": "55mSdz9rx2jX6Po29twSzK9A6HW9Hv9PZvUA3GafYtZQ4wNbCk1z81yTRWLZkQkiH1FKx5vGXrLqzHFfpBpXmqZC",
  "key13": "oGpdbRCx57RCtmFa3agthZKEMH69qwYNZJRYqRnP6N5p1SsQYbypYx5bndbCNMw4UoRhsyPfq46XRwj44VvrsN6",
  "key14": "4ABAa14eDKZ7TZde4vEfKH5vsGmJEnQwfyNnX9krzgFBHn2hPZCfooGr7aupseSmAqVx2aUUwvSpx4iPCHvwHDaT",
  "key15": "5RoFagkxPeRj6N2DDJ6UpBbDFUNh6JyKoNFgC4itsHX6sQDZGhshBTWB7SQDnSXRzRLhrU5i19Tw4QFsihhem8BE",
  "key16": "DZhQTr5CZR7n2CkL4vNtMHAc8NMzwW7csGKEWjeQmxsNHeg6uSbPkeStmmo28hC5aAfscDqiDav6aPeJMMRVMWX",
  "key17": "4hvnavZR5JQthi5EK8SN3U2Eig8CS4Hsdz6ACB3bQkC5KUdbEZJyzPE8NC3yWn3nv1v9rj6G3GHXVM1bMTxBD6jD",
  "key18": "2KSnXyXgKcfJDeea4qwNSzRk8MVBzmSLcJdu9A4tjjRqP2r2S9QywQxRnFMQ3nu13h5pNthJCe9ftagWAjjG13KZ",
  "key19": "4ckSHTmW9JD61yuXPSoNJvtKLpWZuQm9Z889pFppW8wSu3iPPVnrtg9ZwyLBjfn4NevUT31MBn6vAr7SDQpq7aCz",
  "key20": "YrU171jaSVqA4miJa3LbY6S83RgMGEhxrhEH7H2D9ytf4zaoFpu7YpXX1yMxmwuj2sR1WVRapqXDtSQVmt36a1N",
  "key21": "2m1DNz8j2stp2zw5ADtupPA9HWRKvcaGSEtwn6yV9nwBnJLt3kP9FhVr88pUpmEuJ7cPvBKxs66waBo5afhRsjrv",
  "key22": "5N6PbQm6VXV6rnE91JkX6LL4zYhtdM16mfq296ep8CrYZthD5iLc2XACnUvn84MHZGGHjSCAaK1j18gxPWjGj7dp",
  "key23": "2eMXcfRP97STuXKmqKqWwiUUUDy47yKDJX2QZNQ4ccGFdJk5bwJXAvKkJRVn4gcyqaoez4Xp8VPGyeWhz6TBRAQR",
  "key24": "qroXtAPLS4hzUZhN4dkgrZJoiHoicE8B3fxKcu7PwM8bxLU1PhVVqepQdYQeafMR3QVqSsW64YXAqNc3dPmvLsM",
  "key25": "5vGbytf73KzJmwpQkXQ6vpVdvgHLBtVW7nSEdQ2horMNxkLX8Sg9hiEoLde8zubP5oFGmZQgGLhxdukHxJ4e9YLY",
  "key26": "29TAVrr7q9FGC5ft5HJW8teFvtySf2E1trk3uUYPqDhrMbPvvEAT1rcPatXraUa2ceeUuvNRy6hbV9S7Akq9FNRb",
  "key27": "5NjaP3ujBAPQWX6MWNcJ1N1tTUzg1NxThzcXQjEacC333dpuqy4woVvVscuvbwzip8HD7idFUVPNuDn5SJEhVHbQ",
  "key28": "4J6KjTDCDQkLrSDs6k2niXryWZf89HmrWYFgyNgCcFHv9vTSxoKusioYVZb6kTyxidjUP2p8GN6Vp8X1JFheagz5",
  "key29": "3ZT87MpLRdRtokvD1hV6Fm3BsyCYLpMg4eep3GbnP467E6uTB2q4rig3mgg1AP7TaYx3o4FvWMXcHWa8WTWcgZb4"
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
