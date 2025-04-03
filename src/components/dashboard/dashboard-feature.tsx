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
    "4LoG3ettMgpoGJfcPRJXQHTR6P54Z6nzLhcBU2boe3Q4XNETG42pTzacGqc2SRp2dYosK1RQoVuG5Bck5URg96PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLAbq9JLCdqZzU9GvTFSm9CovS7NtvL4wUwRA2DMgX7cLwdtfK2r4ZVvNdJPL3GSS7BTGodi5DkrVzGEz8zN96K",
  "key1": "5rwLL6CdLJhf69jWrKKqASbkd6rLP28jYyRYGKfdnrZcpd9DoFcFd1mNX7UNkrvkHwQ8RWDZNxG6qamaM7DjgTWY",
  "key2": "4irV611YWfNTT7Bu5tVvz5uHef1Gi255dF3Bomvbco5mKucZ1VzLNNK1avuwSytyQpuz9ZhkF9MxHcBb35iy5RTr",
  "key3": "5xRAkFpEHhPVUQMdJoLpZGG1CNxx2onXV6hHjdzESMRo7aZJ8GZkemXMZn8C6ZEPfiYSXjoNYvHStRzopiiR27QC",
  "key4": "5nbPT2RYgSGgopBDVAizfS2Za4GfyCBNDRALNJXjzSVRdzJmbFxP23Joh7gDMMKSDt4qtVJUT9xpcwq2txBWRjQe",
  "key5": "BVYV81K68nBgiL2eK8mbq9j6Grt2BmEoTSGx6to93rUA8HfayYW7CLKyfgbcDWdhKRyj8zjPeB5XpuDkLkRiPZu",
  "key6": "3jpzfNeePsbimag2M8U7Pv8SGzDsAEXquMmeS2vCXzo3CzpmCcERnTADdYu3PLEap5devBrmBgz7Euz2AwpiBr1h",
  "key7": "4BtacKscVz4coMUa2zMuA2NwKt7MpKyBwXv2NVPgi6VH4ncYrZC9B12CUW3uLRm8V5z2t6EScLCxpUwkqvUzXJM3",
  "key8": "5gRn5KGp7pFGw6PXQxbWP1z5soLgAGvY8w4QLcWarZDWuMuGZusRxK2podLwtxE3YwdehtaUzM4K2AJQw4GLXKD4",
  "key9": "4oReNXYexKy1epAjN8bnhvXH6xqDu51SvwgfxK746tNNw3kWkaz4CCqe4Zafaev2J5jcrHYShux8NMm5A7rSJbJG",
  "key10": "4hGfkzcv6fhG3Get7EzKahHseS9DYuENXkPi9i3Q5BnFJBzgaQU9WVWsPzAAcuo8jSgJuyY5sfMFCAzD96NFdqxD",
  "key11": "63CHPPNefqohCgayha3n8fZUBcpPNtFFweN4qJAgy5WwEbYWJYAzEXUb9hz1mNFTFRFMqivMWcvtCgWNHi3CiX8L",
  "key12": "LpUCeiqyVPrK5A776871tUjWe19usFgR2gG6EqcJndgMNf1mCQybFkR63oxRP9j9DueGpaRVZ6rzfDoveSDmKgn",
  "key13": "35XBeQbxWadxdFtuv2ye8PeK51gito2oQdWiRs4YGJ4PJPQgzC4HG6oFts2KjjEqV7U3nfAe1oRLzVBw6YZjnboz",
  "key14": "4KFWoQ3ZxGqopwFP34uLhK995TYTte5peejfcf9ZNB9s8rRq5BtkXpdtseVpJpvpeh8adw6ctjvhTSfmU8Zye6uX",
  "key15": "QLfifnfxr4VJjChYZoE42U6QryP36dZTqdDF3Kr7bLXD5oTfrphuHzRsqKzYzjq8YWcq7uT5SKPDxac9BVX6tBN",
  "key16": "5oeLxy5EdRJG8q6gakdC9VVq58y268PhURQZ1YRdDGz7ynTyFnxiJncuhJdkMPqYU8ukJoymy2YrtjG7vSEatJJt",
  "key17": "mqrH4NQaGq7XZnTfBZehJWcSc1NiSkTFDtcNchMGrwDsUGZ6PirFTSMoKBJg5cVx5Xuk3HmgBFVUHAhKZ68ozq7",
  "key18": "3A4jdcQVs9Zyty1b5f8dpmR3myDbVEXHrmU2qXHsxLD3GKYxq27hk4pBZHpdo8TBrEeFNtt5FvvU7qkBpsSJ61Td",
  "key19": "2oVpjDtdHkiN5jSgDLQ2rV3CsmapJkYu1YiL9WDm6cGKNifo63pysvdRVapBY1KG6y1pjLKH6fjn1Zwp3uRuzTWE",
  "key20": "rB4G6jmZTXFMoAiHiqNMxnGaRig6ZSaifAjyioQCpN6r8xXQwxS4iXY4kNjjzB3DHKHfyri2ditoUv7MsJkWEpA",
  "key21": "2phvud3j3zWp4eg5PDNqeAbskczZHTyW4oQuNMS4iaCvAo2bXmsTK4MdjUtMUBsUWUsjRocqohDhnC8NUxPY1FRH",
  "key22": "frNVsnRmh7FDiXmqnTSW7G9dTg6iZJqob5LyDppsNBvt2dS35rBGwGgLxcAAD2aXfRqmKJoYivyxDDjYKD5XGcm",
  "key23": "4gekbRENgbxtjpebsDb3RnDsddxyv6E277BYkm8MrEBhJWU1JD1gtrf6uqDX46zdiPnUJjxNXot23toTXMGyEqVy",
  "key24": "2MYqTmCi5aWJG1XKdNgSRfxwmmDaMxdMUEA9uDQUG4LbSredKX6GsTFGcqxDgrdAS3PpvSnHXV6B8HwEQakL31gL",
  "key25": "4dtfwz3iM39SQXCmuTkFVtzb3woVtriihapGwWpeyRqx8nUQXsdvQat385xbgkp39Xy3iDtzqzAcc79eR69gFP7T",
  "key26": "zMK3aeWcqtYkT75qu8Ebw5fyT2TWuavCjBU7QWoSg3ioCyCfkwuCiDQUbj3F4szyU91uDcs8XbBZuboM3dPwR6R",
  "key27": "3HqCastcr2vCjJH1gbU6tATKA63kaXL19QgAzU6sT6CjiLuh7RziJyGTE1YLsoHSE56vfn9k8dQLdwradQUtpjqB",
  "key28": "3s3xsjyXWs4CEfUXWZjzfuiEzwiRwAR5jZj3RrP8tuQFrV7Luiniinwh8Js5dpMYi3k6Np4JJX8ELekZ2aywttPQ",
  "key29": "5zsHYC4gb5k3DrfEX8dGJ1i6p699axPsqStKvJKkwJtBNdJXDaPE9XysavUQiQbtBhgvT1nt2VMms8uKo2ccGiAE",
  "key30": "PRWqasFxSpjoMmqDkyscy4Px32mmZXPaqBkWG7SGAh7n1q5ZdzUDLKvvYdXw58MLWu5UpmiPHSkQVfjLY3hvvF3",
  "key31": "5Kb9Ubz8hgiMv8WuGvc1Rf7rZd23cjzfvNEuEbgzr6vHita1jJshKGECNJpEvYUzHkUyyi9pneM5d4kB8JBxBiQw",
  "key32": "4ixp79bsL6zaCisvwEz6D4CvTgrKwMoDVvd6YdAReNZoLVCHtDdqHVHtAVW6k5chosBkmdCUdATSmazigwYVwTzt",
  "key33": "5g6P6DvrFPpXq5rWkuWgDiMUAVwSDeHAZQNauAXAoDTi6UKVmTz5XAdytCt6X5HY1hd9LG1bB3pyWfqzCHsZ71Jg",
  "key34": "56otEe9buKQZ8yvqKtrmKm1akAh8PKbY4duq7jSB9UM2gGneqpvGhSDPKcJVXNMdxiZEcg3yaxChYnJ8V3LLhhwh",
  "key35": "4DhLSmrJKBeYp2nswKTodXitfZZ1tXYUL24WBD5tSTfmCQddriavpUuGk8rPeyffwEkAmZ9TNkzgN1623AS8u4hJ",
  "key36": "4wy8fAPdjwKaw5Dvp5YBBgRBHYeeHknJsLpcE7Q56t5x5ZYwNJwacHwx8S1rPVbcRiTHszmYkYfNpF6LNzchT5Rx",
  "key37": "2qSFYTAcj8bBwiAHSxBY5P7bFh5CLnkd1MQxFqQvoJfCw4uLiUPpAYvaphocb261yqYjnT434JZ68i2YqBbGwTG8",
  "key38": "4M6F9QABifruQ4xdEbKcbhTvsBVxQvEypNKB9J9w4bgUaQNTnbUAXg5dW9LjBmSqbKgGzd37iAug7r2VFHfZSGTb",
  "key39": "42RFK7NS4WCzYoetcqJoBpMU38qVZRwjzsaMZTeJDkiezzZ7nvdwbuYfyaeZFZoEBoY2zZKZ3cynZ3BJW8xWh8XF",
  "key40": "31ZzrkBLE2ZPMce2Anfw9pFhjJqqQHJLCFmwzKbuJompPJ34D5y2dRdc7iY5htsVEA271AicFbzzhsEeJwzkv85b",
  "key41": "3YYrqigYwu8f8XRc5nU2y2kpfftjeVQ3Gt77sD5uuNm9D2tscvp6J1s1kgGeYpQgYTkTE7pxf2s81q65Ag8Q2yqz",
  "key42": "37iTS9AdusShpzXyJXz1QnyM2eziA9HNZyrnRgqa8vCc1Hc1mNRfeqSxoLtK14rTHJdaZ5q15XamMHUFtqZ8KQQm",
  "key43": "3KzZDrBSnsG8bgh92BDiEd7n5TPH5jvXt5epD9wLFRJtteCoP5xGfrjQT1ZF9LZd5iAshTc4qjDAxrMZoN9Uh4oF",
  "key44": "5soVQMeTeNBsRQ8H1LmQ9fELKbHN2fJBw5wJwf62F9TzmH7MbyLfkgjCZH2RxqD4L6yEHGCvn2uTWVqxVXhdCfsF",
  "key45": "5soHtRqhDKuYfxe6EqwQ5RRwMUF2vxJrguBytJS6AgveZJwAf2tFtJEfKHosNMbEErorGmEzueG8uTLmMDqw69or",
  "key46": "2DK9Urxjsqi8YjBUb3UxamCynKyiS4VBh4ENKbW4kazxFzBewLdX7yc7Wydro5kXKMFtJZFhXU8y9StkmSwKAPGv",
  "key47": "3AkEGeJECc73cHjRYEGRbZi3pj4fcnvv53ZcvY2bRvpB4EmgWEwbSFbWG82rdUmHcZGeHRggfBW1kcLZyE27ySNu",
  "key48": "4KbVwJMpwLzLemJYAzewZupdDHCao3MRrpNojCmCgXpA15dXTDUqrF8PNyLsUWVcCAH3NzZvJ9ouCc9P1ruA6kJc"
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
