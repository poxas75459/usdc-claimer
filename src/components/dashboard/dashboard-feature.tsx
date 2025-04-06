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
    "4FEbK8d8kfDqcxMNkSQjQmSq8ua9w4qEm2doyE3KHccrFw7aJEfm4wEap85zeXgqttje3G51GYzDTvQjyaed8QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VeJqhhFuzLZBDvAQdojSD98LeVyN2UD7T4g8ic4QkQS9xvUxkudXTdXYXb4dAK6nTS9U85jT4CvQg9qxvN83egf",
  "key1": "62NzJjGYYAy4LL5S4sUWNZqZ31Q7Sy4U9o3NSsuoGQRdj3jEj7ZkjPK4Xtb1kaVpguzmcG6bgkFNQKVvaKRVQii2",
  "key2": "46LwFWvXfDg15WQujPzoMrcu2Mr6NLjpL5opFdSX1M1k5ko1QRnMvi47vh3vidvBEqiN1xpUVWDtcQY58n8QLv9R",
  "key3": "4WwdHQqwFLqvQdzYrtM9WFpPCcAgDm7wtBRDf9L8d18Mq7uAMTBL1c7pe5k3pRhToC89qTLybiM5Bxh4ShnqfUHA",
  "key4": "35a1AQZe4zP3HnV629N9EVjy8GwqpbLzZyWEBeANjrfm79QDkn7m73nZLP2hxpJAHg65rD42qUBcpqUVg1a6Ny7d",
  "key5": "F2j8QwiaVSxqRRJ9QCGe2VdyGamEUzQsEXLekPPcuDbQgc1RgPuH5eFaBMRWQmEQmeZHgaaJvaPGTsu3za9nuv5",
  "key6": "3jm3rVN2WZntAV1TUEcus7qXtEKjrL8pB4rWKXTWDwwA8bzFcxh7bpxmP9aQQ6EGPt8iW4LvVfL6EJgvgQb1jqfP",
  "key7": "2kTfY2gjHmcEsDEqtDzzBMmuw9XSuVD8cDbyPhJrkbZ7VKKqYSAwLyx5DqCTqeesVFves5Srz2shW4JL3MvAwgS5",
  "key8": "i2bNKnp2L8ajm6Lp9uHaFDnytBfmozoMfbZpumDxKM3xbNwYiAye1qAW8VtVxcx7Mtez9EKYZAhFyaNQHbfxWtG",
  "key9": "2J5HUtDwk8z9NrJDMJpccr6dXhPM8jhPkNDtsyR4vXA8o4iyb5eU3oqXNZfP86bdJ1sKCd3ZzasQWHW8YpwTi13V",
  "key10": "5SodTqb8KJXdRAoBfsTrDnFwYvMQtjvMPUziDzniJbj6mpwK59pu9ipktyiqKZjp4m5MymHhysUXjMcXtv6zuS4Y",
  "key11": "45bEdbtUo7NxtqPUwpDi2ogN3D3Z7pH3e8FQSZZxBjFW3mDVhcUciApdLu1b3jMzHtv8zZ9Jck8vHm3zscQ6BPzt",
  "key12": "4PjNGoMmkgpGoHQsUdQXYQecWuiqFk64cAX1xfYAXAGjSbyTjUNKLzSCscwML8eWSu1mcNUfyc7ysEfYaUsiFojZ",
  "key13": "4t4cpLU993xWCancoLWwC7oeBsQdf8MyswQhB5NdrZ2yV6d9UNpQVPBiwkKP3aLnGk2K22hCHoaQTN9YxbrCgZL",
  "key14": "2mZXQjBnG6xkC8MgVUp96N3J6WbiB3BNsMkcdzsQ679atH8ZaN5PZipHoFHUZvEe4n7ZUuM9uoXwZpAdgtKfw28e",
  "key15": "5cc9oPQKLGyfczNcSWsqBFKRcMuWRRwtMcLzoJG8cQVs4dfekdzwSCBW7uHUf4YofNosdSgMxCPmYHHSvAu86Wvp",
  "key16": "4fFyuwJtSfMmdyGDMRB1AAyvM58KMDdjdAbApRcy9SYvgjSjfvS7LuokEBEeK4CHX6vj1dqfjJCk5iZDPen4m2Aq",
  "key17": "4Y9jcjWnZJTMbT7QU3KkteFWxFWoRijWaBJmBuZMi744HhSynfpYc78pu7jvzFn6QomP7itVMdJ9ALPmpWtMYyYq",
  "key18": "MTW4NeG4p61bwFaXAHs8Ni9JXde6Sfx5TSDKaDo8UD8nEtdThXznAFiG7F7RZb1oxQt1QdKeiUvnbNvoUcGCUWL",
  "key19": "5gryy93d6sxnAM7uVemURhJuqzUoY8Sprq5C7NFYuqWWvbrn6rSJi9kEZJozaGphAmRbKG2GRVYjia1vHB4uB8fs",
  "key20": "29no42ySwzyEa3pRNC51pnLuJiXWi7nj1RXp8rnHrAYvNVaK2VqAeWkdMC2EhGw1U6yJ33v21yyv9rDTwSGsTUKX",
  "key21": "5DAwkBCuanz2dba67tU5UtfCFfiMqtetJrzbkpcht16GzqU8eDdNwtyxErgiXncz6U4YSrs3et67UjSWSXap2qNV",
  "key22": "3pREXDTkH4kB255HFo8qzfNsVEbpFhs4XP4sK2QGbEMd2Tth53FsRZfTq7eJQ5nRUKUjZsNgrCRdoAYjLMAPzVEA",
  "key23": "4P7tLqQg4WLf2m2NuJuxc2cAnVUWj4127pxfaqMWGBq4nyz56BzuYNVi4kBJpgieb4d7gZTsq6MGWNnbTfHf5KUj",
  "key24": "GKJhhCiodc2bwBGWBxrSemwvBWbGx6nstmgPnybUuJbbQZJLWae5Xy5txRp1gyCU343s3NyKMQLwTeRK7xHbeGw",
  "key25": "4izbknnP4VZRHBZ35EDuWasbnUcbUdbMW4NpWE8z9chsGPwrhG4FL6QAiNhGTW3X4JPX5hj9tUiP8d6czTiKu5hJ",
  "key26": "4tFzBsXsbaQtA6wqtJqW9RR844vX84iT7wh4bctYcYhZDvNyjmNnUaAAFrwvXWqhNxpXtf723cQNKbuBJca1oqcV",
  "key27": "2LyfCorMs4i3hx2HN5EnMKNLeFCr7qpS79j6WSzg6WfVTu3fCXizY82oAvCpo4wJRJtpaMJW8k59BiNuka7Bo7D6",
  "key28": "2RLJt7FKHdcHWmLy6p5N31dEpewKsitY1ejiit1MqjK5rBufynQ4Tjqb8NNRZqQKYrzAsnwZhKaA2MufrhMJUGSy",
  "key29": "5hDiScpEezvpqJSYFAKde68XoMGwWiNRD4NjU6KNRoGQon5Xx2c31gkPd4SXKCW7n6mepm1oje52TbWZ8iMmgoDF",
  "key30": "kuXK868Mzs6PoBRzoBwE5xejw6qu8XszAhnwEdottELRvUBRv7WqsWZztZceSMawzcY1a3FsVRGKqdRreqKCfCY",
  "key31": "4zWj9hN54jhSjXq784zJU9b4AwPiJ8X3yPb6VFtTfYoCciC1Bu3ewrBbqjBu9i3HR2KUGfKZabjeqEmTFffgVqwu",
  "key32": "4TMx5gTzJkr4RGKm271VXPX3Zij2cpfN9HwJ9q6ENBEYjEDWn8e59wgLSdJskQhdKDNNFquA25okuobhEVWneyvZ",
  "key33": "3P6xQjnWKzX9pkhKeXpDTTwDH1tAa3bmt5UfTci7gXKqzhj7eZRMZdyKP3N7sMZYkNK8mniY1Qkv2KD4zorbDiot",
  "key34": "oSQiNchi7LSeeH8ByA3dqvT8bFFQb6HAeeCe9XUFgEPq94K8RcjahjETDRMXRGEMvp8PF8gWXVkRKMeCZdZSLus",
  "key35": "2FSQRVJzkfsxbqJw6jZjrR6psH7QFRpz4ozUZk4CnBdsAfURm2LxgsJNv9dkNHLTmcaw5WmFXnjr6kQsr8hWgmsy",
  "key36": "5VGTMA9V8aUYHGHRwmN2k1vchcVQL75vuqWJHszbWBYXsoqxSoV3uojC4f5qmVaAX3EsjfE8jM8U3rNbtR62XG8e",
  "key37": "3AkQLkGJoP5iKCSvrJE948HfExwTHnEMsmHqbJEcxrGKLRc1NNsiKvvrjsQUi9ekswftgmj9wmEEhmzbsp42e9pE",
  "key38": "23ZXuw5GJkKb89goPUrbw6giR6gYy5JspwGFKyxtmUQsQwJhAkiXnt8BkBVkcHtSC72mVW8dFgENtr8cDGkn2sqP",
  "key39": "LYZBbgLE54NjxALMtaiUEEofp8hh9bo8YZRTwwjySNoHmeGYb4ZA1CVTmLK79eukf9Dq3V2T79f4aAKY1phmw9T",
  "key40": "3FhXUDCcf4HBXusWLWapKSXdYB3dv5WFsQxEdS6KovdNsLwz8pYGrF7sJjNdGwDiXGwHZRKcGZ5Ga1J6We1uz7Yr",
  "key41": "4NCJ1edq5DLj2288mrFjpXXj7MJkr6dABQZVS4TpwfE33YpJgpSAJAaAWVyHQwktxzsjCuSUNmWBcmnHjHrB2hDT",
  "key42": "YS5LB2qo4a8VTezqHYBspgSo6NSfKWZWCBRfPjtEFn2bELEt9FNTeBj61AgDWWohz9bnvoC8qA15ugeCkxD2tLt",
  "key43": "3ACzsuG1pCpz7f6XdUGbr2SDEoVKe8ckuWonVbRpDKAjVUUSsEvrW7PhMdsCcVyVoqcWj9EEKtcGKUk2D1BKDRe",
  "key44": "5NankpqWBgyt1g1nxyZSohAxDS9Z3EUHgAWYh29dmJKob1PRMY3UkpV2R3XkaCfwSeUMQNaTjeTkQFALXqq5ckTz"
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
