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
    "nXNJM8FBTwQSV3uc5jurR9dP3Wg6C7FeDGp1LjowNzFPqT3Wg4Ujrr2vsu9DXYCvqehVwkgkh36Jm8Gxtb4141B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqigxXC2BhDkAP3kAxGRHidjC3EMJEQx5p21X9AeHH81wVUerPzzH8MNj2Mq2mZX5Db8aNKjai2HDgCAfYm4ypz",
  "key1": "28TYnjRkhBj9oKdizYuPn7Gg6gPwmB7NKJBa7Vj2GmgNvJGXALxFrEdpWsCmxS2gZjF2AdKALQAaqb7Dtzdh46pS",
  "key2": "5yQ7cimGBLa72CM1nkwwjQkFmDVWzvSyQ4vQJ9KYPm7B1VVXjqPjWqr45JZgMWB29EFbSHzgS2f5LGhdC1bkRhm5",
  "key3": "45RvNGSTPxsv3orMKtZ5N5JiK4Jjrkg4iBsWj9Z9LYeQkPM7MPaT2FKFGN22cpv4Zg9dz1crS2pJHXGRKw59ghnR",
  "key4": "3n58X6L8GQVHtpXKj3uZfishRxwTpWQ1wrmPzdCNcoGogJUo8AnHMeQiv4VpXChPkDLKgiUf9hjH6qBJMTTUrTHP",
  "key5": "51w45fZ64NLMZuLnzLQL1vYX5XyQcT3x15uY1gTAakHNWcgynYmCvsDk19F7WLCcHYKk2pNiVCX173jzr87BRMhg",
  "key6": "HSLgFW89WWmKWmddJD4EiwtZMC1CZgy6NPStQKS27TKZdgnWy1M1txeY5utzbKdPVqdEM6vkcpbirougYbYptut",
  "key7": "4wUu6ey9QaxRApoSQr2sWnFvTK5N9EnymQv7LaJba3SeBdStQHcbqwgAAiJCrxDj83QuRMmEny4RkXJa7m1oCwBb",
  "key8": "4mdHwSzGKiKAYSFX2S4xC9KbKqotcDeSnU1jwbZM5btBixjrvvCi56wHNemRRmqMtQkenxsc6WzJietaTYKS3Y93",
  "key9": "5cUYCj8EDcctX4sxr8GSX2G1HDtEVTU7e52NcuJPAw44pNTKYQmqRiiYycJGAqggF8wAcJbwgtvmYfk6wD6h85kb",
  "key10": "2WgmnfNpSf8qXpx1ZXm2HuV4CWm1wLhRkomuxHtT3eMGQ7yp6zrpcv174orJyGtTxzoRUNCFrYpoPEUdTxw3eHQM",
  "key11": "2xY51x72PpnpL1uBqe9BcBPV6sLJwEc2kgiSD9vK659iTrmQqo8TQpfHSUDewpkFoVAoyLDWn7UfZvud7fcnR8vR",
  "key12": "5sHPfiRLFE9pGGxKdyWkzhvJtcLh6rgWbjp6yARwZRpFDtRiHRoMGWzzCiBcM1VrAc2TA5tWRrZMn1zH82zzePKe",
  "key13": "3GDzN6CZi6eie6BWWpEsT5A2gJ87r77xGKdK41eFfuZLqUqPoeBAbGDjh5HyendpU5aKJhMZKS6iu3hZ1wwq85An",
  "key14": "4ksaMfPDN9Tp7rmKZ9r6W25J4RvVNBYWDFtZ6LUxjkiaZmjHLPi9BoZEsR4ffMYtpM7roToobPbh7eeZitiM4NW1",
  "key15": "3k2iQ4cahd2zZS9vQ1qF5ndnhbeXXhmqzeXgb8Zoxeo9Z8EHKAmR9gtwey5hjegNLXGgZJwzhDje8g3dpeSYW4GV",
  "key16": "5sa265WNq1Pyv4wvgHpibH8CxJhi3cPNF5qh36p5fG884oqqfKRcDaZHc352HoZyFyd1efkzAPnUWiLKD67s3f43",
  "key17": "qKdG1kePzxEVcbrKwtoh6jv9goBxHkxUkqzsxkSTrFDvKueYZyWcV3LbyrswJdKWEL68qEUv8epwgKXVwkGaa1n",
  "key18": "eCWJTXZSXeVZ8wE6pUoZpnwf5xckS1kNBGxe8vZrZZjxzZ7NmwY7hfSGF1LsA46UesAvF1z2kPbEAzEoECziqkZ",
  "key19": "J4eamsjhA1Ah7KMsPbC5xRkBDbSems1eFU9XnBV9vVhsgjPqHph6pNkAaz7QxnW9ywoqfixaWukq8D6N1bXEnXo",
  "key20": "PxPugNaJAVgEXa3ywAns5JpjQVzTYxujNw7NcCRhDV8NQhfbeKFKCUMcjGZiUrs3J7P196uqDN1Bm1itYkZ8233",
  "key21": "mmHZdhpcoPMzDxx4cM8yU7sD1SwJDH1VZzg4VzceygQ9BPb8SB9ZD6JZ3yQSaXgWmG17E2ZtTKrG34tz1rrZUyf",
  "key22": "9m9nDoWLZ1RLeLdYTubxZ52jYV34yXjakJJ7GEfLa7CVujJxQHky2SyM23JGQXkJzSknqQLajQvnYpx5X5NuHVz",
  "key23": "4V7QY94xuPJdbG29uRVmMFZ2YJbWPXuijr584VJ3ytxEySVXrVWATjuAxpHQPnEexN6SqxtqMiLqKdxwf5PL3XLN",
  "key24": "57xp1dfgoUrCN1fUDGNisF2KbJ9BBRoadf5BdBEBNmhhLVzQYBWLuUKV8sTVWDELogyhqDDwmDKi54FPj1vsZbhi",
  "key25": "H4BjucT7m6G45imC2RvGjVwfNFJj6qSSqh7d7vrT4ya8MKa5SPk1f9Fq8W5dmCpXSjtvCnDU9kiAb1jPe2ozT2J",
  "key26": "285iCD4Uy5LtWx8b2B6VM9zBK7dNuxTn4L9br5TvHYK6Kn4DaA7XUzwcAd8oVoMdpgbo5TAqmBC3yJB1TMzYU9Ws",
  "key27": "2JQVjWPdfYivxFf9w8wMCrKf8sYZC6R6YNZCdTit9wpKF5m1cDYprZJm8SqLUdoUkaf8TGTFt8nEsJyqfVLwP1X2",
  "key28": "5QoY2vB6GAFQpEbnWkVBm6CPbSpub6KEey8noAKQ8g29o6FitTVmGrwjRgDFGysZUq7VjJsCq5jqZrPSd6oNLioe",
  "key29": "5BSokkPBeLvBPe8K7ACQfF55XU9CCei6zbmgH1DenQ9rbsTPmuztpT9qjtMLSW3Lh66521qp5MNyyTBEebqzYbsU",
  "key30": "2ehVpLBfZ3w47sU3sGMa9SVRVqTuvvMhsBgYjyMKAACvDB67KqnjUQEfVV5p6DqxwYyc29fscRFeBfLgVoNyZihe",
  "key31": "43Lr4Yap58DPeP5rSj1o8c2s2zdhTcwyJjqYajnwQH4uZGaFVTFvFykCK9ojt5RXAHCG3XVgyDf6e8AHFFAHRRRe",
  "key32": "3Tnc3jMU4mmEoDQbPPatSQVs4sFUujqkKzPhZy7d3xDJtwDP3CcFmnBYb15qCnmQxZRJsepPPrgV4sXhra3vJ4Kr",
  "key33": "3c4y5zgfA7nAcGU8MqjWLjcaCJa63ZWLLM4kTBVWbEdEiKmzyZwScBfJW6JCCZp4qg2vESGd5TLoWLTm9nPKEbqX",
  "key34": "4AtVjEt8Vmy8NmDUJRKpvQPDUwV28S3N9P3aSaZjo426X4sZrnTgniHCu7CrS2ZkQa18KTzrhy4onuDfdLkTALm3",
  "key35": "5kDMRTKG8raGzS4pX8kvTy4MdhKEXSAwcdw1jBLxwKhKgtY5JvWAQgkJiF6WARKACwQDdD4Upvyo2pP2PCLzvxZz",
  "key36": "qtj8YDsrfTnVMP5r5v3SxsQeCLGpDbzmYj4dmd7A9FSLpj9SqxbhTzhDVdEgJ7KurFwmZGKNvEw9ds6xiC9rAVH",
  "key37": "4vmywsfcFtjfh8ZW7Kr3QG27YYeMx6KA1bW7ZJYkamo4uWpzzXAgKfZsSu1ET1KDGCBkjsNiq8ASALP9TWGV2RDV",
  "key38": "2J5K2c7kFLUTLrtU2iLk7CNPY5kH47g5prv9Qc9ZyQS9S1NoCozi7ffnhjDXmSnqPFkvd9YhgHDobhFnjEUf5xEB",
  "key39": "GrnX5Lv6HBxQ65Qi1YWipeTwF3bUCMuXcErWd3kya62kxTQ3T4Y4j13gpS29Bh6PhQdAC7qzyA4uJtiHEt8tUp3",
  "key40": "4aRVWMMHpjU2suijCJS2DWuhrp6W76vCXpNZ3LVXgSdTmx1uaiWNxsfRnzxzpwdVLaH1k3TmKXQAed7RTowRaaZs"
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
