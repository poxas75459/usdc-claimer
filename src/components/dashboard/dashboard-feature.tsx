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
    "2GeNN9D7FyWp9gSA9DinhHvUmgFVzxmrZqdrZzTkJFUdTNCbmVfSxe8k9813ZZRatyXvJ9E8cUUUphmR9h5uZDje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhtSvQeYP7eVraYL3Y1deXyqfvebSpPDZRhzBLKt7uRGRimTu3xer4H4u9EazK8zmhfBiPJsziFTMvQVh7p67DM",
  "key1": "2WeMUKfZcEZh7QbcZPhT2rFYwVPpGA928ZKFtWQNRo4rNhQi4Mq4eoq4TTFSxyeXswQkzVkX2WP93rURs9Xsaqxm",
  "key2": "25JbXYqQjvGWwaGvJqTi6G4tixXxi9iaPdkHteh8HWafiJTTPtxjpo6DVaGbwVVSiXVpSPjYMpunVj4cuiKkEFqd",
  "key3": "5KJh9bJGZtAmHhF9drv8jcqthp6vzBHLKy377HdWEMWg934wEyvLDr2CSxSBjKNtrzyD7hubtxbpdYP5EcpNX6Yb",
  "key4": "2Zk8Nzv2n5ZNrk6t1k8eY2i5XB9HSpTknDcrn1vBirJAaEtFkuiM1Qihf3KZ7TbeiHUTzQomrsvhUdNqQ3vMpbzB",
  "key5": "2A4j3L7kL2BxxDKpTWnV7tQPfFMqorL1UVFjj7K9GjC12prQ9H6D2GKrEHF8zdZp4HdEcs8qbLm4TBnp12dwhcyK",
  "key6": "treAHuDcYaMY9nywWzcqv516fLonqZCnxmgrR4ksYyDeA632AbWeZdDb3nsm2G7aicJ8Gasd7DY5kNJLFm1nd4f",
  "key7": "3qFHAdzZp4q5bn1Apb4mq4f8XgdjGJdDR4i43cMMXbtETZ22UqrX778TovHmxjU5isUqMQrkr36HyyWRji6QdABE",
  "key8": "3BGYaTNrVZd1nf6zXTFHkZ9195MjTj9tVgx5pGzRHswi3yFVJe7YHJZkGFEtjHAeyD8yA8891NaxtQSeDDzAy5wD",
  "key9": "3NRmAjT7ygxrAEBJ66KmkWfG52TECDi8NhXLczGtDBVR7TrG17Ks5fhqyxh9JomPG7Vw7AqJrVXp9hi7dKoiAyYG",
  "key10": "2So93DcyGTayuqPATstLJ6tfN94Gt6WCZTvwqqK7NeLAWAbYRQznN3qoPVNLaadVCWWUDmBZrrXacpdgrxD3zB5C",
  "key11": "2oKq5Z2yikG9KsJkxuJzm2qsHuLDHSTuH5TJjVdtettsniFZp2owtvYkKFFP3DXmUTafti62gPAFEmTCL5Nhc5DX",
  "key12": "62BbMJBUgfeYNVzmTArN2FTWib4FvBBBGQnhAv1JBwWVpv7wieHJ7aZJBJ5gmPMpJEQzW4PcKyugKyhpCW5Ekytk",
  "key13": "2ZnuZUAt7XyqrhQgEapP7JuPCRVtaWpfBijbsGuE3yEHpoqx4n8vjvhdFohfRvtXmPPPhuJVH6JKBps16KtFEWtV",
  "key14": "5FgCmVJpejrzR6qKMv8VX2SVWvFcBrwTt7CpihyFVZMBwHkWNhPPQkCamUC2qjRyHvTXzvtvZ9FgYsS8bTeRBQos",
  "key15": "B8DruTVdMDqFQhLb8n8EDxSjMsJ4mfeDdNyZqKXRyvMkAbBrjNFiRaShohewxBHczGkTC7oUXPnosNffHYVfcNG",
  "key16": "3fjnFut1riTt4JMPuyBHVazzdNFUJDScAkzgBooq1yvmhWG2HWHL8CGZGM1Akgww7jozzReXykCcKEZAQKYyxaum",
  "key17": "5Bo8KQ5eweKjpkkr36AZ27EuRF9nHzFoZYpHWFQHrUswpNHFn4DvTtHQga3f744AHNURgze5bdqMxXEsAW9yrLo9",
  "key18": "5jEHxjicSt9FmKiKvxFSguPvGPveBrngJtso1oDLTVRJiZoMzfwXLxg8YPrLuqpGBCWRADwBVhYrbbBWWBmKECAo",
  "key19": "27DN5oG4hFew98Tr6rAKzmstcN4vHDd5WhmDJS4yuPVppiPCv9SmdchQw6ULDteGgNxD8464xc1CYFuV8toZZBvf",
  "key20": "2gDzjzCosUzEvCkXxPh5zdyZAnc89FeEFJLwNYFgt9otBaHELSBhhSkwwjcEbg4sJ8F4gQiyrKZbMjhRqj7GjQ6b",
  "key21": "2nFfvdotde7NB9ymyjmZJ7S5D5JSzCssH84im3m59yoXLDozoVmbFY6D8q8GE9fSSYQUAV3FUxyGFMdiPwoUdNhW",
  "key22": "5wpkshx6M9gqw9UY8c1xuQTdMGSSd284MrBWk7GfVCKzpSrtc2uSpkRQSeS67Vf5bcbNfWDpNob56Cz4we5JBm2r",
  "key23": "NkmxpuL5j2vG6gwGutf6ywoyatSDnRyqQiNoZPvxKHUmhaVNkjPzURVXFG5nM7qGmoUswS3MyJMAmDmq2tR7Hvf",
  "key24": "5wFt5F3NUcYkZA1vQ5VggHc4qmaSHm7Su3mTx5r4V3cPZq36LTeHCVNVsDcfNFDHeeFKScjU8WhQpSRR4dpTfbDb",
  "key25": "4W9oXEBpce1Kay3W4gZ3SeZwgV6TT9MMzy7nGcNJwB4KJoUSBkRMAkXf2YWQZNmk29VGksuovMiv4PJiA6NVmsAt",
  "key26": "46NhhDo1gUposufKhSWjvU7VqqiufjCbZTUL788rqvNxUVURaDY6BcJzWNSUgwszZzDnzxhANxzHvjytvDJZ8ZHn",
  "key27": "52gG9H6yHsQxeDFafJVvQDSm9NkoAGc3dFJz9YaUG6acvTsFCnLq2RqcP65g2WabriMjLbSFc72SZf9uZyPHPXd3",
  "key28": "JoeYQTzNmV9bsdZ9kMK2HBZbJEthQLewe2MLSy5WGU2iKnzfRqfS677mPSgWPn8KoFXFkm67H2hcwJD5kErDqRM",
  "key29": "5rLWqNZRFqxeMeLkSjJN43moxP9et35e2XH2378wGgTbRTK4qYmnaNvKw4tqmMidmfjQSyAcAzzoMG3pomTuxDHw",
  "key30": "4nFcv11vnB9BCBgqk6HiLUAamZkNaz2LSvLqc7P6FcNUew2ctMXcqFdQmxdXus5cDGuz2jbnqqHt9MBzX5ub4vme",
  "key31": "54Cm5BfkEykW5EnsgJnSp5kiQbmZbYkBNPNhacHgHJN71GPsintBTESjatrLjvUMuC2hvvbNY9dTEKRShJCCezjd",
  "key32": "icPB6GgSkt1LYiXovQPtMjeEKUgXeWzSQA119ziAoepZTYWqnC35cAne83qt8RzE6YiTv5jhZ8ucBG8baa8VMyg",
  "key33": "4o7UXjDkpxZUpatzLnH7fVMFEL8tuX4WAcxAZ3PcHLa2gPdS7tWvSgzUyMDMgJHEYMo2ShmrUoy27VEg4GxLoskJ",
  "key34": "STCwJuNwGXWh4rUJ7g4GG3fDXExt3PohcCP45MF3uwAjW1hDcLTDjumnaepFGMYbTmo64VSE2mtkus8LiSGmdGC",
  "key35": "RVHLKoEGAdSrs5MoBWRxc1GbpSizwqvZjRyUPmCj2ntbzq3kWzXzWRtUyqPf75u3zx54rTnrcSTzeMiVEWzR97w",
  "key36": "wqAkKPdaczPp9DVrETYGdzeWr7AqpGSUBSbSvr28cP5sGevyLKtuuXYDd3MU1QPw3LdQxTDdMbDPAkY2jRg9crN",
  "key37": "5bZ1BZBBM2ggRzrH3nrm4qwL771SAECnpkLhFgKj5cDsayf45pvApG6gmDrtdhhq1igh6vm1tcEhy8woQTAVRarn",
  "key38": "23MLvHtpjEdguv79DeS3cG3tq1Fz9YP2G5s1pJBEuG6u6q1uTQ7L76dXMuv7aCUvDVCjDxdGDxTzPwKhcnFD6AHA",
  "key39": "3BytMqyxDnqBj9pUy53U4kLCfoVJ54uxKpZ1iJyeahkikGp1sXmpRBQ6F3zvaJWstFDcWKXr9W2Ro8Y9CSoXdMM5"
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
