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
    "3zAhNJzaNPTajjEuQpHDRUWpLyrHAUd8teitQxDN2gqA3YDUiba1DfosX7j5K5y8uL9cxnVYC1sZToZXhfgxM3Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PHUaNWTt3DW7pg5P5xV6kXyYANwVki3eehsqitQcvxC9dJm2nz3XHXxpPZh9UvYE8Pg8zmrisKLtTVg3oLuaW3",
  "key1": "2WHtpdFStcXhPCFE86ZWHZDBL4BF7wXqBWckczDLREVEj5UhCYQxU7z7eQLemmZK65GnV9qcETodELiYa6oDHrCk",
  "key2": "39qqA6Si1fE9XWH3f85vsyVvRn8MMDGSx5e8MWCJnKpm1ebhpNjgDj1cmNSmBQXtMSVqswY94Dm2Ckd24MtjRp51",
  "key3": "4Z3GZWX2muzVJUr4Mzke6SJ7SQ5i9KUCRPqqor4jX959gbtS2UPmvMxTFRwDU93ZvqTXkkahZ2fxa9DXwuQSrQWt",
  "key4": "33dU7qNAy7qvgN3xYrtM8kKpGJNXcNQVs2J788iiEBvbyqEXZtySzLg3KimaYa391xiX6PzUpvbJUf8DQzeka15r",
  "key5": "41bconPZXYjwEQWGPgBaeEqu9JehLXE1a33MJSYuXCZKGjRchXX3P4i4BVKL6yF2Ypj4HM8rbwxbicUBY9ZqsWnY",
  "key6": "5LpbHBb9WtuWT8pNBXZat7XUu9gvcerVchbQNq3d1mXmo2ss72NJuwUhAkXRtaoQ6EXtaZcCaJdtDWYGU6xszN9C",
  "key7": "2s9DWdv5xNeUXD7gwHmJTSH7YbfuLHTx1sRrh419iEKFFycLjUNBg8DLa87JWq934mAHGhgxrbSxEChHNmQyRdB5",
  "key8": "4LQtDdHUf7xiy2bwefWhqsMRYrZPmWw8PhAtnFkQ7B8PfWKEkUFZFGcNzyxkfvvN2Z9CzTDS1cGRMWkG7WumKtKe",
  "key9": "3eNKVG6UDthmNNaA1XQNRruRnEGWJEHfuhGw4e34sx4BYMcsc2qpYBfHoYgtJ62gGmDjTLbqCro6gyd7t27VhN7c",
  "key10": "5AFtjwcR52aKp6i3fw4ayDriywEeB5sGEBYYnHhsNoPYXUL4DpKtyu1M1iAf7fBi6KPuTKuWDsGmm3Zuwpn9fM8W",
  "key11": "4ZYGVygEPsdsEwCswvqfy3QmEq1FBnMwH9AczV73cUR2t8SYWBxX6AzxYGMUJAKuD6a8Kz2rBSqVfm7112b7v164",
  "key12": "2P7QZ4c1rahU14P3Rsi9RxaDJ4WvTBn18fUizX5rSHq6EUv3pvzzfp79AU3VFhWLij9W9821hjqmVz2gVLvg6SZe",
  "key13": "5cA5TmZUw4NPdHhCigkahP8VH94sayS99XMsDWbxxKiTWuWbbVEkEa5uEGSRP6htv9nSUSSZ9ckseSTr5DSiAFqx",
  "key14": "4PPmpjf2DvTHMNPqtZyyuGa8uMfTPSpzN7XsBNDwBZRRkGWksF4p58X8nKSzcJQmVQ39aZ316WS4qr2GQMg33g3w",
  "key15": "2UvYMyY287EHigFArAv65zyihmvosu1E8pC7BihhDKwDp4H9pRznLisWmXyar2jrUuG5tnwLsL4CGGvB8LXwqQFM",
  "key16": "2TtkKbQuTZzaS3J7Seb6HTerD5BUETZbFH9JuV51toTKwuKVrknkH9yYusBX7pUb3suy38PqzRPi5yD3TXKfaQKs",
  "key17": "ksdJxH3rGtPFnUuZQRDVFzVo2LGRRQdBCxeRx8SYWi4ck9sqorGfGq9VmvLU68aKd1uC8JGwd3mch7Vxtyp4WUy",
  "key18": "4eiFtK8RcdQjxJqb3BZjbqTdtFFWLdM1PgSZKsNW13FsbUYFRJUfuTv7wFLu9eFAYqCct1dfg4qyLQW1818NrDNh",
  "key19": "4ppU3aQqHmA84pSF2foxKpzu2yj3VAHJGtGeoy47YPAattbuwdXRRGc2kMXtVmmx3n4FPPCePFo2gsS1LRiS8v8N",
  "key20": "5DKz4px7vy1c3BjsM7x6MUougkUCwfTfdr48NpyRhJVsDCaKSTNHGqfqFEYVN1Em2gf2geJSHNSfmknKAoBWcQDE",
  "key21": "2SbuUue7cX3YBQu8626ProSh4erpEQk4pp8hdVMuXgGZzvzCo2kooVnzThGsqqhA7TiXXVqQ9VJhwSxph76ruapX",
  "key22": "5UWDUPyXor6h2fe2EWMrxJcvqKBWJ9poyqB2ZCv3ADz9cFuN4jFU7rxvwWak5bTf3NtZzecrZ2QhuyyPPARMoh7Y",
  "key23": "4UVHdoLrjx1SmzCh25cc2aW3LMB8sRmrqaWng3HX8sJnjuNgcDArRsJX7dnQaAiQDVV1DyGWYiTYh6V3DVizwkRx",
  "key24": "4cssuEBFJJwVjxqeeTz1yJDZ1d8AomSpgPYhqoV95nBXiv1v24TNnPdjBfofXv9jxs6hDpqBNM5zScCMcxiErN57",
  "key25": "3BG5bHB9gGa8kHbWyMmw5masj6rhPhXMWrzUzPkFqgRSnRLeR5fqZxttwGWu7jsWYJda87RHbnhpgVLWb1GBHHtW",
  "key26": "5Wqu6sh4jVMqoFfLvw19zdkCVWUDNBFbLhqSX4s3PNeJTXE215U8R1x7wcv5snxoQ3VsW97Y1Pg972Qcqh8B6mAi",
  "key27": "VCFLrVJtox2gri5UZbSRp9NhkadgZPMPWLBM3ApMYFduZwxXXaSAsdNh4sMaFhuNwkJXG55BDmYrm7nCqikP8QC",
  "key28": "4nPzdgYLYkkz1uEs2hvR23ZuPhcuHAKQkC2FQx7iJAyTa9bDVqusvpA1VVfzgXd48bhYT4U77VopYPdta45ufUwu",
  "key29": "5Pb8QSwjMKEYFk1Nsc25nXYcdgizGfDz27QQtgqaeSPvXXYdKxkwsLpjxmctRvXkzDupKP1ZjE5zKUbnwx5C9Apy",
  "key30": "2ARBCRLpNtEWkoYmMuMQZc1iQ1iVucJfEmZAWvuizv5WZ2GonyuXo9kTWQmuW4RF272gksnXmdi6g11wBdaT3tWz",
  "key31": "3EKqj2jR1cQLD9Tkxofc4X9d8AWM9UpYBbuRV7k5Sn9jLg9Cc9hep4YPubYLsTCfEFy92s6VqdUMSNpcfo3Vkwp",
  "key32": "5nrYouz4iVSTtr8HwL982m6ETcwQowKmj5y2X3BhVEQZ5NgGSCBdT6ht4KtkbrmkmWnryecYk3F9urXsJSsPo4to",
  "key33": "4NwEyUAbWw4MQ1nC4AngNvCuDfHsjEKNkgr8NMigvRcXVpUpPzKsgdy2vGj7r4BpyKKnwoQ4LVbDQPpZrbRNoz86",
  "key34": "4XDehHD7as93E4XTBWhN7Baje3txsiVhwptnuwDSfPCsZNyCZyF8Lw7oSoWMFmkXUPsvCQdhKd87o6NspiAhmTJ4",
  "key35": "Yr8buQ1hofdP8khPw76K5qFRP8WQd5D8QzJzAVEK9A1fGsa9HMWX9EHFd5r5f5NwnX6d5iMGDjCbTrSrQzvyEXJ",
  "key36": "JG56UZUzUaQ8JHAWQzEysKNFtg6CEqiPrK281F6JBRpp5n3EVerLUhtxuDH6YjL29gGBP3rqHzDzUJ2uLGEpAhx",
  "key37": "5y7WwAQfYXt1bhWawPsx3WJs3cuGZTbPa7rwCaDRpP2qv3CAWA1JGDsdsJXEvWaaMBx7uW95A22suXRuoM5vpQyx",
  "key38": "GCEmBoaFo9bsCYXkHxvyVnYcpH5PUEJWuw6gpCMRhhPBz5kGWWexKB1zZbUupmvxgJeSZaBas8XeUij1eWkz88i",
  "key39": "27EV7jq5ohNWgiahpoKVoyP4dEvKSkUiP4qLJnDsW1Y85YN4nKE7uSqfX4pYSTtzmgPGnsuuTqLdLDr4k3H3tvjy",
  "key40": "5EAFT4ZksXVxEmjpUYoNxLvrZPg64CG5zmVGRNdGckbSozH5YSbdGzf5PnaYdL1hyUBTartR3rNnhaHL1JXgGot",
  "key41": "3e8WAVis2Jz4e6G5DW272HjF4seNbBAhBnAGSiwEduY2F9hKBm7xn39cRhpWe29VhbeERskGi2yqEs7Q7PvddUNE",
  "key42": "5PxAH2tE6LCdmJ1Q1Pq6GhXinKw9jjvPtfq4RncknD4JVy2MkG23k2rEAw4dsDHsThxcesHrbQEHf5vn82KTAoXG",
  "key43": "4N7FRuaaMi9Jb647CM3eW9RNnzteHqv4CJ7DU9BMo2M1KaahPbrtBnjHwowb7SRNXzEHxwJbxcWZxYVVHGVSzeet",
  "key44": "JLyFUBWykRjvvgymbk2zaKq8kRrH8Kc4ZDiSvoh9yta8NUNa73MhoaoVFUCaXvviA2R7wQjbxdVFFqnabnoVaNF",
  "key45": "2749G5wC8Xo6KSLVbjiC9buB5e3W1r6YJ4uedMjZ8Cbps72ZgtijopaxMf296dq1fgzXNL6GqbfaYbkKExdcHkNd"
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
