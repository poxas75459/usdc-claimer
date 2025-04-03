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
    "3DL5nggxowyTzA5pmEWZtrMQUHoVVCSb4aw2Ak7TQqA6GjW1TmuqxLrNHapsvpdojEo1swnQFvjvmwLYDxX1Xte7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JraQavUi3RM21sJ6AHbGRjMUDt8o33cmeggfDP5FhQLyNfYDsNTcVMjXudsSorYyWLQKDRycEnrVJPa8Ah5CKB",
  "key1": "3iMTjkzfXYDULhXQnSehHjBF5zEHmjaUGJxiWUqfXLvXhgwbAuxHwQ6ivP18AGnJSPyBJH3W9jyHdwV6MByTGfQz",
  "key2": "4h1R9jr5FJoL52mtDoAFV8H5juA1FsHcCP7Tc6mp4Q8aVnMHwv3VHdE837rnYjkCxjmjcYmzWU5UUakGm8gCVv5a",
  "key3": "3tKvPeeEkVLWXzMDb7GwizdHhhqpBzmambJzYNMFKM4L6u6TbZpcfRgBp9e8UVJHzQLV5wto9MGAVucJVKhJvnrf",
  "key4": "5tboY7BZMoHM2DKHgSZifa1g8TzkhYpfeV937DDT8iSwFZeQM2LzFdM1o873ZcAmKB6jrBupRL9N2eLeoGcenf7w",
  "key5": "PmJ8zdz5yrp1cv8ziPnN5P5ReRvyxv6Qpgjk2SpSBk3suHSyaL69CkkjFU1FSYZVjr52TZ9yamfBYeWChaKgsjf",
  "key6": "4zKWuJ1JcCaAtUz6DnzLcRDbBnmuX8K89wmwNnt6XPQRETx3JQYY7dcWekUrq9BR5v3gZPztzhrrDLMiErKu6Gfq",
  "key7": "5AjuDLGwbo8HxD2ZR1oYxtksJi7rwi2udA4bznXmPeg6rRBBirjeyPEaR1RtCjYGviJnKsKSUVELPgY4NU8pNY14",
  "key8": "5jGgDD5xs4JeqSAF9GkJjN3DFHT8gxbFDKwQPbKiwXa4QUj9aNNCppfSmsJwHJnmEU7QLf1RhPpZKL5Yn5JWzGvh",
  "key9": "2dxpmAXXgiuwAKtMn8SMUufozETyKmSHJkYqhPTYvC7Bm5EYpsE8rHNbR8mL6uwRh2SZ85dwRK4h8WL2H8vkz2M8",
  "key10": "3zeb5BpoZ6QCofBAf9pbf8Ldy7Zt4SiUKKqkC48e2oWctVEmVkapcjWtCaQnJa89DYUSzLoG2M2DJsu6KeVpLHnb",
  "key11": "5tBckByjpBGywKWroHo2AGcLijcqJ9PJ3zk8yQb21JfRJHT98Qm8izB6e6rZrwkehwqwa8LKJvvGoaufHeuivjju",
  "key12": "2LjqrK4cM4vCPY472Fyhtofwtb4EE63wrtLVAvpY7vpWwyS7Za34igXxEGKdqidjwp6qCPTfzS7YXeiCSGa5arsT",
  "key13": "2AHZunGG3eShQhhwUT2PbFB1jVht8Qibw39xpzwK7qBUVTYigHCaMADTCysmKE5F6SpFoguv71o6uLHeLhDSWQem",
  "key14": "2EkUvoPwPBSG1228QqSTKDKJQEACY3qdmT3v6rrMKHz7iNJXVBjEpbdA5rndNmxEJTMw5jyQFRe3MTaVuM814fbD",
  "key15": "2LdUPWkgzZqxRoC9vUYgnkbVwxqTXKweC3UuyCqTPsuQGTPeQB2ajTQDSA67N5ENBuTH9Yq5jvJDRpqkm6cLuZP",
  "key16": "5aE5FqWjXtu29TPGsjuhRVJGSHRe2V9kFafThvGAydGST2myXUjpEABNC7VfMyTqwcpZaCob9ZjqruS36TWNx3YK",
  "key17": "5TijDMQgVw18FjUX2KboAnJej4pgKTeEb68Eyc2E6CfxvZ2B6QmDHumnMsPERo4iSqnXoyccHb6rVzh4tEHNn5UZ",
  "key18": "4oHdQDfirXymSj12p4rwBiTtYg3iXstwCA1Bvp3neXfPqW3M3ay3Ap7wFAdKKLSKcMbJ7WGdpi76RHRxisRDSieC",
  "key19": "5ac38uHHdGQKW2VDPjeptAeMxpLEoUffi86mLh6HwZuoE9y6inzJsTp83rcFsTQ3gyHG8HBVAYVmbmbC1sR37wAL",
  "key20": "2c7dRTpUuXeG3Tr9eA76kvChAtdJU87sbGN2QP9ktPZbZiDUHbZwnu7BL46A5JJUq9nX7Z8HVJLJCWxBTLNFkCev",
  "key21": "2qK3gamUBTsD6XKcKEAzxWySNseCAk2bEJePKvdayGSdWbmMzYHMecYxq72f6yc6QkCgYdMVdFhBEib6rMWUxJT",
  "key22": "8Ki4ranJeksd1TEj44tDcsDYxU8Z17fL7msTfMx3pHGN9spdBTECUr7RZsp4t1pzMNnNUvfLUKYHqTiaE3M9rCZ",
  "key23": "41n9YGf9obP8RtCXG6mRy8vjrCoKUSeLDC75Bup9gViat8WJQiLGdadkR672uJvbMs3htGeoBWRVsBGcKFi7MAye",
  "key24": "UeiBmP3vbyW7J94P2KANFgFCf7dFkKwrW5wdqnvJoD1dPE65RrQEQ9jLHGVctgLM3JZwuZG3tkQgoj7HK5sWYmd",
  "key25": "4T1dr46NbTfgceDhLU5tYxEUN5zc3wk6LUa9TquguGxFqTvi6UT2eyPyVdTBhz95ghHnKNpFuzANKdsCacHytzUV",
  "key26": "3rVzFtW4VfH7DosKEssZ1nZw1LCKdE6J2ef6k7rE6sJ4CniXyrpzAyXdiSFuRbk3vWnF2cFJwY7KEBy5zx3ZjK9o",
  "key27": "4yNbgVNWBpygrBxpwRMXTmRkoePcm4YvVPcTYkLfBLi9dX1prgu7xWJ83tvy7vWPwsjKXXw3nTN7fx8rTpVMBTJn",
  "key28": "5yoGN2uy2TNYDvLUkTjeXyJdrWvJSaY4exioRZXaci6y2UVDP1aRmNUBA2VWHZJiFQ8QmR5pndBmQJdZ8ZKAaN9X",
  "key29": "4oxfrnrTwWBHpqt4FmxwP173eyDv8MxGbQYtB5rsBtVZv45VEv2JBqb3LUKmgPhTqDcCHysNenm65mEX4depmUHF",
  "key30": "TgcZRG7ai3SRTJ1VNsfsoUFR3f8rk2F6gWW9r8SxGQT2pRtR6HMKbck8GABbzHPdbqRzz22A6jzuTRnHwNMp4Sw",
  "key31": "4WHiypVTdSqV2fY8EDAk3XdZNmHbkFuXHvuNDJA7DCU2PNyAwHRuqyF7NgZELrLCFo6bhcatkdjFUB6qLvo46nfs",
  "key32": "3qn58KgXY3JQCf5goykb8WdEztbXcn6b4KBdCQj68ri28yNp2Q1n5uvHzMU2PTUb9SBFeS1MWxxd3BNNSjWvQKQS"
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
