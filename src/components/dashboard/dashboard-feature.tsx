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
    "4c66phjg4H92JMgJqPGvVfCDKmBJkQqT39qirnWmC8jEM66hMerBFzJzCUrdKXVzq8qhFj62UMEmHvMi4JP9tJs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Sg56Zazo42yjGtqSMx6sYEHiPLigAsmRQEEpG2WdZ6MX3gxvFwJaLUV5UwERfYFEpGK6CzxqFY9KVt7yJbfr9Z",
  "key1": "5BRz2uu9YPTPTMvTtiXAmznTtDVAsDmv7aQDVuXn8HZVG72zH9i3xnHFkXbsZLU1DaKks4FTPn6z1xRPB661T9mN",
  "key2": "2uUtFSBoNZYEAF5mMYxLPgosQmcHy3s257MvhkbKcoezmeG9P1ZTBECeQ3Pd7LCnUdPPGygPGP7ivNKA1kTbBQx8",
  "key3": "4ar544FV4yQmSDsSjhgfxBrPXPPHV3TA1sLoUyR4KXGxSWaQh5KmVo2DSd4n321APw6qS1dSR7VBbD6V4SpJZahV",
  "key4": "9tP58c8ufSfhrwKXrHQiE4X1TdLkWsDubDkd52PgtqtNJKEAD6BUdss7Jg85qomrYP6AkCtEUqkcstfysJo9b3T",
  "key5": "jan3TQQpekW4giVKiVW4z7Hdd2gXwAEEzVYEuXKc3NfiWbbeDedXSmPj3XwCabzHvjf4kFZEi94UE7sWGKosotM",
  "key6": "31jhqjCvn94wqS16AVoxnjnyWpNBfQnEBm9UcKgjphLMUErSyrqvta4oAwQtaq9TM5eQ34koF5MMsgDD2aaWpjR6",
  "key7": "62NsMzu9rzzeYqwBz6sTsyz55pfQ8r5LMyk5mPnnCTJDsjhV4yZVcoNpWNTLAs2krHHRpZVbfapuFFGbwtzeJxSk",
  "key8": "UkRPaDXpr6x8PvpzAQstGqtLvTtA2NX5jWNCFzviXfsutdKvckeoFpWR8TxA9P9HJG2iGquxNyhXdfA3ER6zsUh",
  "key9": "7ziXh2Qo9mJd5zCwMUB4k4Jk48HcnWAbwm3AAybnoRUFhRsZ418KEWWXqgaw498wF8n2GoGERz5acGuwhjRWcZn",
  "key10": "4vxW5SDPEWXAwtvmGYeNymvXM5hH2gbBbGP62RRPLRDc93EbUScGhZmJigcNnzhs86Z8yo8UU4nduAvf8vkVxu6W",
  "key11": "4kXnEh6JCV4sxcUrXbtfaA6EtEcyCKs7QUGy1RBSGLLWEHqBYdhzT6jQTNT5vLhs939gb2KwMn5Kbxpj99ANGKot",
  "key12": "5k9rDiFSDRn7FubCnVQyJnsyQnMycJbYXro5bQ6tokds77giKWp2zHrXTiYXj5p6okMuVWakoswjT8R7QVbSLukm",
  "key13": "4VPtzoNqQ5gXN6tZZH9ypT1r3QYffj3ZEQ4UcbFgu2Lmf2qJ4od3pBAYjNaWZc5afZFiz1sfQFcnefrtPy9kvGoZ",
  "key14": "LCV53Z36xuXKCZJe7ZjvuJaqSAQzn9ufzQD7UAtgUygvEUDAu45GDhXUZQfEQvqEivfzg3Gi9JPt9JL3mxy1xGn",
  "key15": "5HpC7V2scDo4jgH2iPaGwSEDEy85YTwutjCroThLuBNxh1HPZ3oRYhoea9fyzo5VNhUj85DGfQG3XqaM5y2ecN4m",
  "key16": "41mCL71ga7jZ2MbwNdhczkJrwq36vgQWLeTgqAYYLrkokdFZRe5ooWnAYYmtP7jTaUmcP4amHEhNx8ZMmWpQJbFD",
  "key17": "4tjVhqCMG2KGaBUp2aGnYJ9KQcCaayK7cHGFFwwvCdCZyiUTb3L5pGqiZVheZJA7xj5x9kQUt2YPfNYp5UFjDK79",
  "key18": "5vkLKWqkFvA1KLmoswRnfVvgS2JCaWK7w1QqASQR4oFBJfiUEnwbV9Y1raFMqi7NEWyYRTjuFKLir71e9ZoCXRGP",
  "key19": "4tS3QEUDX7Zk1QkEASpazmpNmCwCsVwFm7ezMC7wW4XCJphX4R1EdPGjJ8jTDANCnPcWVHnRnJjUwmYTd7n3eN1a",
  "key20": "3Gy33TCjPFB4RtkdxXhryzxQQvn7RmYghndJxLxE4J1J85BcJc4rziAr4qyiKb5UNoQQXNceMrY7FPz3KiUh4iz3",
  "key21": "2wtGCLW69HTqW4m7Cxj4zLuGh2zcJojCEBUhvZ2kQ6ekED7BNnHW1T6tXjUqX3TfpyS7hqLgHTzb7Sosx9xB9Ez7",
  "key22": "4ACUtd6YzrYK9VRXHis53yeCkenBCKmDcWZ61cypWV82nerbHRXe6ZvmxD3DshjoZfes72vErKyqhqPsT5FWiBVo",
  "key23": "JSZowYyTEXUF7wchSSYtpjzNBWsKHdg8EDT2deov5yVMzdeNCUcBw4cxvJajy3tbCTmKG2KH2cwNXoNsRqvvLCW",
  "key24": "4HUdWEgCmfKRaJLy8y9CgmQqmgD1qYGFjakjWP4hzVyNSyqK1xigYWYDRZMenXgxFhb6dhpdmiLoWwG83qRSU9UA",
  "key25": "3SPgWxg6BzRAwLYqJXvSJbt1sdJZkh3cA5ZRvQtmi4o7aKQ92NGh8iESNqvYHqNCSWkDm8ooUji3BcPAJA1o5a7B",
  "key26": "35qgBSau2HE1fCqv1aUUWaNVKyu16DZcnrDPfPzLyK3N9ikuD9nHagEc88bhMuLKT41JNab4Bq5HARSUPDiiTp4K",
  "key27": "5MkTa8eSGaBYSHbRBCaKc7sPhmbY1qUVJzexwQyMavBgBBZ41xiuCohfjqMck37P4iMCDeh8YjZDdA87qCazAC11"
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
