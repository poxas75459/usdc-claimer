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
    "NZxLJN6qjcEz7iEDE2sd9okgj7Tr79iRDeE22Eq4Stco4D5Rh8uPJzY1Qx3Uo7fAXRigZ8cLkqiuYVv2Z8qKrXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFC8JLcCJMoBwVuVDUkz6BXfYqRTNtX2A6CSvtgC7x8yerBpCx55F5RcUcQHbWDrKXBZ6Kr9ahjcKfvaqHp5t2m",
  "key1": "5R1JGkhtQZYcXhz4RSvKEa8dB3Tg7o3ixrxQHdyAk1ayWABLrVY9tMiZjYraBj7sQ4xsKgy2G1UidHBmSTHfTeDH",
  "key2": "5h6RRnr9qWhrDF36kNvASBeFDNrHQgAZHgrt2jSmK4BU6HXUHofnp8gTSrvnwhHwsmGoTvuoh2puMThP7rGVsQbt",
  "key3": "5SiT4pcx6si6VqX7bCvtQGpyTFjJ6q5wTdueXikjFyQu9LxA86FjcAR4uKsu7x8hUwm4bKyF1B5h3fTqTcZwRVzQ",
  "key4": "3gpS5DKmXZAKd1HrJ66fdt3ZZq2MiRx1rRKwAG531LWotnSazyKrznQia4zjMjfAPjAqcS4Benj6LuW6kB3cwLFo",
  "key5": "52CmEuBFXHCN4BxhzhbMBiXVSPW63iB2SLKYKgDfvDZtxY3b67UaUpVyYTPvpk3Z2zC41BB9JwezPnC8ri3ZFgjY",
  "key6": "3CfWqyS4XgVK22VMncGvrSEHcBXb2vF4p73WnP8Ap7bjAw6FMNxyoc628xKGJ534CVxKLAwNUdHcxwDgpRHFxca6",
  "key7": "24Db8n6CcRq9utppLF735pfuKk7u7KWejXaxo58XoaxWnZX8vx9Hrq3GjWF5nxU7Ns8qmxsU4TbzSBn3XQdkJpaE",
  "key8": "5hm3V8jxpYDsdPZx2jQJgYE7TzGVkWGM71M7YV3tdAkb2Bc67i5Z7FDJApoJAUj8FKYJxnWsGbHDTE6sCkoe4nuY",
  "key9": "2YqjHuPxMZB1TPRNcjzY5vyhhViFdFbynWEYLT8U2nzjEz7oFjEd7oSSGMmkoYEZxv1tk91fipcMt4aaTuzuC7wj",
  "key10": "67fPhQmsJMvXVSnncaCUzEYEMcGZ7nbTjbW65fJ3cMmJN9imj3KQZcANFAeaRxWZK1etzKFwZYqRhcNN7VJCAd1U",
  "key11": "2L27ubjB5nLnWNGxmPDYBj9q6gAC5zGJ6xFv3d9kZ69Z4qSqsAwJT75yiaAfrKaCquLG8RNYcPex4FVsA98wx3Ux",
  "key12": "mgQBooTxfjuqkqurULrpGcNxqK3Q4BhgfQgVKpL79NFQ2raHZcjsmqsc4W8tZQjwQtqGraF91RP4EdHLVVML9jo",
  "key13": "2attT74Hf62uRmLWNpPgkAqZ9UWuQBouaVky7aDzZRz4ARjiGHyP9egY9NXkCPTK2LgB7rXQDAdqGXPrwjkwivpQ",
  "key14": "5r8HiuzfyiCSykhXtXDARYADMJe7FbLcjqPM9wrRM6VcmcxvuJq75mpqUme33f82sWU6jXzvLDzZedVKvPXJ1Dq3",
  "key15": "2hco6tm7CNRxZcwRDDavfD9R3vfpeLP9EC8LxRMsaA617dY7F5BwSDgAduaZk381eJhULi52ebu8UPzZMxEHVwni",
  "key16": "3zDPYQ6StUZmwgmALEmxiKUmJ4ZHrmX5pcdXUraQepTuur4mik2YtLLAN8n4VyLeNPTnatz1KWqHdrzpjn3D7WC1",
  "key17": "2ToMognhR4re86u8dzCUA42DsjAUhjj2oU736ixYob6zjPAvRtjbTGNRKxQfegGhJ814Aa3L8nRwTj9VhW6Portt",
  "key18": "43WMn9RNkhBbrZAQzaWE7JupvxLwgVZsPCJQhBEeD3UfTYbNxY7d8eWoFURpv13bsz2qQXyoCeb4t84JkSmvSf5N",
  "key19": "527yHswrnFEvj9yQm4GGY8AaAr4ghQY41pgFwScbXPf5xTmCbKr5WCKrCRFcesShHfy5a681ikGGcktCydXLkbk1",
  "key20": "38ZZFkHki9EVsrxireKLsmSLhJ2WNfGZDc3fE7pjSM5dSwp2HYBdc8JsPbMSSbtVk4uVW5omFjQZCYUhWeAKUF3V",
  "key21": "3yBFuXVw4EoSQGTr9UFxoLrJXibyLqs5kEVPhtnLzhyS4tXXvjcYAU6KkLrLhWv8HVW7zczUmyXdSHRJma9BiNU9",
  "key22": "3wZYiHz7jVQbbTsx5vg8KsHHGopykFFgi2fVYi3WrBLkcFpykoCjQsaPyyjBjVacjj6vh1jQt5EaC5QT6dYfk1bE",
  "key23": "2m3YBJqLYAoYCy1JARXeooJRa3RUg9aqQtvJfbV7yNtmQf1rKtiH6AZ2MXXzyPuJgEhu19qGZ2fATRYabYgR7KhV",
  "key24": "5KZqBYbDvp4ACXjsVTACmSFAnR3WGNXdjCDM8NFVLuCTeTZSHEk5zkNG2ZXcqR568xSwYwQtPtQ1EvBBBe7eTYnW",
  "key25": "5zRfEouX4A5JxftM3ef6tG4qFcuKMJjkAbJkjtTH1j5RRo4hzXsYbztFURqZY8LZHzkYn9fYianyz499FacStQnj",
  "key26": "2wUUXALBdEvU35cGESacqVEeiiCSnzASKnqwPrATvpe6oht1DdUcwM6x3rYyVjqjTvykDPTfycNZ2oJ8jrvDip1C",
  "key27": "76qbAw7YYWr5hipJoUkfRpCRFYGkVmRRgLtny9A8u539bRcuZYuQwcKZVaeomCSoYhANRwckbHtbyFLP4PHqLCn",
  "key28": "3CfqJiGAVRZLRhhDpoTccDEjyr2WmppvwTzZRFxxwZx75tofbQmp4DqbMYnK8wBjY7ZVKh1v4ALMeNPYZGiPHXwr",
  "key29": "3j1NiVBagzw8mKWC9xacBWKLXNUnqunbFzmjiZ3mDaZpA93nr8828uyJ8VzdVqgGjWhbrQfJcbRNt8SthRK3Fcw6"
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
