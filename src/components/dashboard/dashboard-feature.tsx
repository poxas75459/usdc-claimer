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
    "Fn7Sijk7gqiX1re3wCdqY6UHkkWe4d22z7E6bP5JqwGthcy9GdZ6C1kmivdQWFdnfrnxxBJ8pLViy7bWdCnK8i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxNSJaQ6Z1VJtvMi9fGj2aJoVYUSzn8NvhDPtCWZ2xadVGj9VxEtPWVPqt9bdv5gTV7iZRMYJA9thi3sTLK53xX",
  "key1": "2DjrnkpzCqfcL2kbm1aeq39imKz49ZE1dE5XdEM11mEu81kqQrd4agFxYtgm8ZFWXnooCBFsYxKffj6pgPsKwkP4",
  "key2": "3dcPZBW39iPxAyTj2zTMN4sjo4m3SYShbK7Gd1URwC5pmMngK8CXnR19NJ1zCXWBfVdMFiqn94RxNEfovYD7BxHS",
  "key3": "5wRh38pU3wabmBtH7r7gVwXtgqhVoVXr3FzQ84PyPzjFWGK4eoMUrsvR1iZeuTx6mC2x4DZdnXk2Pevrm31pZaxv",
  "key4": "5LvjEgUAacud3whwtc94c6MaKUpsLSfnXhz3FCCPb6esYg5d4nVvr993FPED8JGjF7cX5EL9V4imgvLTmcFqr7cj",
  "key5": "Wmba99pGvWee5noeFkSd73x93XdQUqQaaNZ5mrW9PHeGSCyS1E3sZz4mnpH4C7RLAEEBJfgy8PPSCmaaZkkZjYv",
  "key6": "4kMfcYdkd4TAwZWFQeNS2Q6fVPX9nFfW61D5NLVkYuFg761XgD97mxnMaw1pgESQhC4pSys4kReJ8z5JzQqRPau",
  "key7": "5yyCftBFkDkjZjued83dEYmJRReQAXDLntfiZswatqqKqudqcYNsj51w77d94fF4ZEWtRjjXA9cmRhN4ZkRwAr6H",
  "key8": "3m8y4LUPY3nLaw1kHnM4kg2CUec975ZgFPQHoej5Tkf73aAKqXp8bPgyznZQFp25vv8QSjM42W6rFPBvUXn1LdQo",
  "key9": "2PxvUhoWdPwbJ4STUqQksJCKN6rN7oAxQB13zbeKG6vfZHp9Wuyn9vF754J2fr4Gri8Fs9vEiF5GKXD8u3jT9sn4",
  "key10": "5ryExo5GLHXttb34FqNjUVnc7pa3vDQtQ2422hLH6YsCq4ZLHH9jM1XVyE9ePPc3wEjCythxAM2vMDz6gHaJzFz8",
  "key11": "4b5EaECUp8GeWUuTMWZmGBvjRHUMgfekBy1uEpfY8pkQSXi8aruLfjjix4Zt7mbyGyNh5UCGYfHy7Si6C2w4u3pS",
  "key12": "4yn7vwx9BQsX6BUCT6p6NHtRni8tTAKPvfkMd6n9DUD3iVTQEy7aLyBQePc8961RhDmZCTYd7LhSQ11ntGkPPDTS",
  "key13": "4FDJM4cCLdztCrQEMV9Mi54b1v7zYrg4NLMh4KhBQjXpZM6RhPt4bWa9NLz4gWeArRATPQVxM3ACzXBPgQCM5eHn",
  "key14": "2xfEb5sd18D7MKxBWuuzHj5oHCP8KWkZ9VBmqgFi3z5c7QLm2ZGcwvmqsQyemfQbtc8Sbcv8AxNQkBUJAhBQpgbS",
  "key15": "3n4iFeLu158XyB9E2usZipGwNgsFAHhHKHGCXCNTS8cSLXGFVdrjx8MATSHYBojHonkmDhCaaFXiXur7ND2orhUd",
  "key16": "2qCY8KWJE1fjL5FzSv1zbhW7qeuqec49p5wjH8sWWv7GbQVZzw7ZMAUZyzLQxGd9TSsDLRyfKa6agpucYDcN27mb",
  "key17": "2Lf3LyC34r8MTk6mTAvu9HdXCFNZQq1rLkxn5cGQPMjhd49quJgJTXsrGS28vzwDD2LFW3fy4wGUHn6VcdsFY2QW",
  "key18": "2Zw7oVGMHdqHHfraYjGzhYZ2PoeD2TN7fHjUueopsd4xpAk1ffjSpswRKRUSLxGgYiJDP7LAV1fqRrXBD2BbTqLH",
  "key19": "2AZkvSy54LvyU7xuizmrVyzj34auVabgAvALxFQQNZ72hRnx1vW2m9DqeXitvMeXkZhsAkgVzVHiqmc6HZyU3DPk",
  "key20": "4zUwb5yMEy2oLjqbEhuKUySri5X943YQ2xd9VzuAGLBubd8LYUkzYKXu3QVFHm7xe57nVkm1pyn9481S8CGiu2Fx",
  "key21": "49htu6GVExPb3bH6ucXMRz2FhLYrSDRyCTEF4wivnmq9UogMyDM343jd4P3nkwhFB9y9m7APtgJEdCb5brnCuNV9",
  "key22": "4mxhNEFoNWdaCSy4zFDHawoP7qS9oM5uyZP7ZMvYca4e7UQBuKNiTQ6Xzrwhp8c7kwSEc3GNdAKyCYtmGzY74yqM",
  "key23": "3v3fvGa8xL4foDSg7iT9ppReJEAZxKxS7T9AXEjxrJVDn1aWC3K85if2rJJRRXCz9jxT23GoJZbbyUBB7NxVhZk3",
  "key24": "5fuWzC7p2kNDsmPjBk7TwwypKuuaJRptjZY5Ba11T663Dv5pMgkw2DKg5Qb1yqG8Xw44PsvkQhkb4bCaM5Y7N4dr",
  "key25": "4JGc2wan5LiyMhrhJ1Psuhqmx5K4wNfFGHVLNkYjDJjDBNjn2AP3Brxvg74pHtKV8bLDwQZj9htBgogePtS8SgYW",
  "key26": "5DGY6pFGVMbAw9H8scDVhhVYJmEweaPNK9nDmHkAJHuGFBuH1onHT7ibnrJvw9KnQvVBdrWpGHJadu7cn9pk5AiA",
  "key27": "57ZFwJ6AKYxkSnU9oVFXkvVnaquavrPavpFXNRrNqjJUapNQ1KPTVxu5ck7pSGhHS5g5XSVhE8i3JkjLpoa71pXi"
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
