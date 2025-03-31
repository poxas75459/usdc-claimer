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
    "3ozbba1bKT9WyastTYpSyQ3BEzdGjw5GJL9Rhk2FzcvQwtL8nzbHqimtN7fRvKTVw99TVn5yhvM1bP6dRq21AAtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3F8cM1QS7Txxqzq58RTDYyHEkKN1ykeepViVpeTDjxFQCpB9gXuX7uXkFCjVjMVD24gFPmbytf7Vqj37fVBmLe",
  "key1": "51Zq43vk4GxtLwnvJeyddw9unEd663ACEHCgX2AATVLQX1o4DHQmFmQxd7kK7hLBcFepQjWTFKb2oquNC4F5Ssv1",
  "key2": "2utgCKDSjAWi8YPJyUTfUpreTa8ZxHNpYZYGRxD3RfEizEBx6Ffg1p1JVy33SHqEuui6p8bvF7Hx8FWgpV2wf7Le",
  "key3": "4Xk2pnuviFrX1p7SnteB4gEspfmqhniVnLzAwpjPDnAV7fq8ozWu42XC77GGv3wywwnqgHg7qvHungi7Eyu1HpKj",
  "key4": "4rSLTjNFaAZAR5D9TKAQniBJhu87zo4zBtyNrHqxiqjCPgxRY8xfWXSCLNXvT8uJAzx6NKzF9z6aCNdpZAL9MjVq",
  "key5": "xxeeyDqzf5KYV8MDmWoE63Lx8nEKtPbYuNHkqFehaYm8JPA4mRbWym2xyBx5PoMeXMhjeoSYu1q7vVL6EcSitmK",
  "key6": "62c8xbDcFXc62CfjhPB8aCpVCc9xdRQPyw7mnWjcSJUS1rv5Bi5x39fciReKRAFmXb2x34maVtfVMJSX49Xk9bBw",
  "key7": "5t8mQeCvfm7vwvPeHfPKC2DpFRqPxvbLt2ZmqyEVrBswRGBC4Cog3uyfenMZ2FE9S2n31AfwbScDsgi6qsaZDFvU",
  "key8": "23EUiBmjw5YjMi7oJGaPETDETDW2tLjYfvqZtxcaRADAeQrKcXua4DSCJMWKUrrBQpZrNxPGra4vvbESsvcQH468",
  "key9": "4U4aY7uj3vRJb5im2qV38SD1WaTsCWSEwQazx9XXBKQnJzkYUDmrBap5cBucx9EiQRLjzKxbrFYnmjvcfVCN9RvN",
  "key10": "4ZUPjDk6cq9n3WmGp7RbdPkcCtbWhKkkzQzM2UmbFqmWzjDGMShzzrnUVpzD1Q7Sea8a9PJFjzWj2jTqmKLuBMhC",
  "key11": "3F6BjSFphGmvorGfcztXVDgYHwX7GeTENpcdMa2MWXGrdPqZYYJnSVgffR6J9czkjSs214xWtgfx5B1rxfpXjALn",
  "key12": "2VUvBFAfNiQekhag9JA85jyGwj6J6DR9hUKwx8LkKeeU5AzvLLQt1duipApTs6FyUTE8NXu3nggtgGDVkdeVShTc",
  "key13": "5xn8zJzJAjQjPELHx3w9usvyNEZGZQZMUsuYD74UdWL8GKkHsQzae63ow2kV4EccDYUfDMMY9AVWzJWbFEnrREKm",
  "key14": "4Wj5CeKyJcJajwhquFHKmpeSpoBUWvDt3KXEZSfQZ21N9eyG346PTTBimCnJqBvKpq8KJFrNDmeiYvJ7CnUB7QuC",
  "key15": "2h8WuguPf5FugUgGDrwT7VnYHpBdpCzVTYuog6hC5QMZgo4cmokrGVG789Q5vzHaCRwz6TVFREQvfEtMcot1RzCw",
  "key16": "3VDLN65AEBeVE3UtQNKHxzNrTfq8irPZy1qESNJPAD5r9SY4vVBjqC7aSCom8tcuWHRU72f2nnxFUuEZiDVSKiVV",
  "key17": "xM25qv7U5mcTF8ZbzYKPqbZg2FxSyG4kZTteAY4b3tdJb2vw5GTHxZY8vf97b1nbx9j67Kp5KCQ51KcVAi84Z4s",
  "key18": "4Vp29rypof7Mh5DybwnS5Gfw9cnt5jKW51zPcpqqvUtvvZV7Pumvv6ouziUtEaJpdGtGiWJtk9vkfXAjqKMmTFBP",
  "key19": "93TdCXhACskm82o8DDTs83y9XjCkGvH5pdMtArz2c1jmyxWLPLkSjGg9Wt8WyHu4GUv9MKSFWAQEvGpK83NXhzd",
  "key20": "4LJUupE6FiNehvM1Kg5RzuVjLGYnFvFCdQtpn6wSysLmkNGN8nvd7RPtAhNvZYLvwuTcQyDRDajmyi3ScY3fA9JN",
  "key21": "4WQ6G7e1rpf54uwwQ1fyHnr7LZCH6havQgumt3rPUkGXQoYkCnX6DJ54JqtASmgi1DLKdLJZmC4dpocnU6GA4Yrq",
  "key22": "58EYQDqGKWu72Vb5DyeWzBkkqHcvbsG6qagtkDywaVzR5MFcjHvE6Mcps1iunLXbSF6AFurQ5zPhLyqem3Y6BF8b",
  "key23": "67Y3Wq3sKBnx8CViiY4YeoiiHx1qQz1H7aWDxgyxMC1726Qx7VnBtBaGUYkNW5TvNY44zrsV4BNWD41rVy8ahM8E",
  "key24": "4sUvyJgEpAzwvFT51zUmpvUqiXYrBxcRPRpWqL3iJpNKxBxBABmQqgRnEL1iMRrvu8sGAsFwr1p8DNtGhuzNNppg",
  "key25": "2MsriwusXRt8oVbTAGtqXexHMMc6SodTrPsjq6GSGBEkSEJAy97njuqUPWvRVrfyuzqstSd7DQ3niph7A41Qf4Ms",
  "key26": "2c3yrb4ahVNzoCdaaUULqFHnMa6tvRFjYKgsbZ4fshp15V8aoiFiRn1pu4wFUBgND4yKG6Zbc8sNgiTRaDCKE5o3",
  "key27": "5zZAdxT1HjAiYYx1RskH5Wky6wHmRfx9rDwAy9XseNPHjD3xFhx85Doy2jxiEeS4HbpihbX7Si5FAiMsNnZ5f31A",
  "key28": "3M76UrqUQQ7sEz4yWmMF8GYbZ9R1fmokw5mNZwUtTE7DTyjQejyKQWRJZsexHTTPq2esLg63foxqpYeY7dfn6PjX",
  "key29": "3KH8qKahCSCdKFQoxev9Q5G3uZxPnQPgoy1kUSTmdiFMYTQLZ47n2n9tpviaeuAyXaKZZcPrzoDB7kpVXZuQuHSx",
  "key30": "2wWWsSxeYA8arLVS9jMwnRBLCmWoXKgAfA5txSK3RyvHvKj6ZPkSDu5qB3KgdWN3PN82WHknVPgkbneBCW7tVMAb",
  "key31": "2f3ejkVQ1FTiAG1g5mfPvRGFnbEvcUFtYdwRxze1HPdm74TDdzboyBCVJjFdbepJYRFuKdQUA4FAiRuS5jCdD4zn",
  "key32": "4A5hKRvvZh61a5B5EmeCbA5HM5BLJw2MhgtrncFf3MzskbWLdDB6szR1jCFAf38D7ZuVS5toXHT5oLFTNsU38Gvg",
  "key33": "2z7QY279g9S866XR8jyVojZKMmj29YAWQ2DLJomyTfAF7KPNoAM8YWwJAZFwYP4fDgfeX8PG9UHiHgTbmWgaKdvm",
  "key34": "5n5Ud9mSh3hJEkbdH2BftMq3K27U1QdASZKce7YgQsSF5MwrCnydLTVbSwGJzzkgYh7fxfUDdkE5cUFTgur37Nww",
  "key35": "4A8VTuZkUPxaFUX6ZZBGpHWxSkxXyji33YCstJ4HtVaWw9zHUGSHtj3Yz9GPDhXcYMwoyjj7V76mAGvi29iW8ehK"
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
