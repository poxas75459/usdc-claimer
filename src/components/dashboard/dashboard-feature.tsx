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
    "4p26VjtctRYvT7PdkaH1CyqEKo6t4pr9h7bx29gLwZJaDojTTQgx9X9Vm9vdnztXQ4wXjJvtNMiPAsNbxYGbpiK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dW76HPLrkmnpsw7exDNQCxSYmLV5YH3N4ZTdMepAv47HLmxNLMfRi6TMLtEqmLC3VYzpNYhUzBGT4b3VUCGqgA8",
  "key1": "uEMU79kp8fhca6Zhjt7wAry4c6XDDa3KRSsULobEMcYctp1HhNkb2QL7v37UApUFKiqoyXEQd7N5EqzQ3cqAVuk",
  "key2": "ZmFVbuopA45oYLrhZ7gPGctsVYeCAYq8duZG3iidx8apKaS424c2oBW6sv7kjho4Zndx2tUUEgSS6z4hx2CNoAq",
  "key3": "qqnB6d4uLXMZDNsYS19DnKNHCwTjxoHJtZwb6T6Q8BXnnZvyR4fD8P48X9jFnf1BWtN2T4j81nDwjxZD6B2HWcA",
  "key4": "r78DyUEFUguhrXUGztCuKKqndyfcpyYwbJ3szS5nZR6K6onTL6Y4RjzTqCEACGLCBJ2LacwD5NjoboGi5hxiPR1",
  "key5": "3RUTuJbRMhT1WMthQQQNDLHNJH36h292XDRszF3Tf1ghnVmJXtLWWggqmEXJoVZu9o17E4R3AYUwmMzzP51Uvpqw",
  "key6": "jatjLHDunjUWQLe8NPFuXyWq5Qe8J4eRXCpQRKpr9DL1WzdZorsCLCfY55kxDPqVhFZJRbbZgWvbaQD4UkQYirG",
  "key7": "59hdXzCGnj6ttA1Vi8jHA75P8ss36D27jgJnpNGYonMT89AxcZbefKEN5yTe1mmQZeqAYxpuRTp6SoMZrb7Se4sE",
  "key8": "3JuDD4T5J4Txj8YtxwAndUYmUHsFHhvJnyjU27uNFiv8tA2bh3Leu8CTCYwQUcqTj7Cw3vuixvHDqqVVvdPJaccs",
  "key9": "2g3tzqvYXAZeJBtB78fnG26BJmRE9kwALaLgxdChk7aHcNcKq6jzWzYiT7vfxkYfJJPQhe3TDaj6zuasa3AqWU7L",
  "key10": "2xrJBAgZnhEgYJGVTRVVm28Zv7njpbij87VZCR9xSDvgyQbWM8ixUDhDmRbcMQCHyGQMmV88CHoE6ceBsvTUNiib",
  "key11": "UE7VBX9FA2vkpR21jB7JuYpyimPzQmXfMfJioqJ5Nze9YoWH9dsW3Jn8fxzd1JEAU3Zvk581dbwsYjZ6qtGktki",
  "key12": "w7fwNBdhNukyR6dqoTAaT7fvTd6VSqijoHt337Zvm5xDVPSqLfgWxV5NX1FgWsisxpHzYmYBFrWTRnwbeuAPZUR",
  "key13": "hm2nsUz25UxJVoZjPtn4SXeBsYS5JM7aVQRg5A86vfNj5SRm5MJpDEPco5xB3XGiD3bsgJ6YXgi2Dm4qs9cxohM",
  "key14": "4n75D6ZvrhfZuzEHVuJwYGgTVcLM71NqwdUXJGTrMz7DbUj4QnoU8q9T6SfWBz94RVKGK8txMETuQKvE93NztTQb",
  "key15": "48biJwvM3wgmh6C5segUBnjHSQU1nQkYRD24GWHEkc1roJg8i2FdeqsPFP4DeFcFcNsANjbSgJrrJ4m1EaQkqWBQ",
  "key16": "zXKLaWQQi4QaCL5GicW3jw9pprrhynXRKnKSANUT6MaW4axCirTmAaG7smaL11W4wtjfwwdYxYtcXcJgwYF16Tw",
  "key17": "2tNjSrWik7CaodyYGPETGQZvQfxatRhAqstZ4rrL4e1LrhuxdSB7BjoRExjYXvRjt5ZJG15R1wmDuVybrQfqor1N",
  "key18": "5heSRsrDBTGkHNLqT3b6STrHAVYTZ1a6aRfS6oF9BvNuXP3SACByfHqmDHEee3jhhSscVMsRJGFHLaYFbDNpwzf3",
  "key19": "4Kh4dDt2ryHKjDUqAoTmdHcHHx9YjaZFgxPEMh758fFH6jzf4XUkvg4hqgChR4SUPwr9KzYByMcu5yPvKqN5VVsi",
  "key20": "21CW3EvqyqoXmnGqiiR4mdLRp4uGBW4WgCnKpiv82qFAqWMhot5a6Z5HtCqhpj6QPjvykjDse2ACsHkEpBQwtg2N",
  "key21": "3g7XuLPsdgGjzuvE5bhNNS3KLKZWHwLXSpS23buUYQH24pXtcz4Q1bXZSkh666mTgAGAPbv9RZfCiSojX9er2NVq",
  "key22": "2rgRj4eq9A8jMiA2KZWDABCfsVfXssVU1Sp5x1vquSRvEe1iRDmMwmWhuTMcYEGF51n1iZyVLzNqKW88VAsNQrDh",
  "key23": "4qxanvEZ9jSFJEeKwKq2V7mmaCW1Hhf1zfCfosPuBcb6FrZUvVs8HRw1HVjYXjVzbSkSqKqwGMJyWjCUqn4sY1Lv",
  "key24": "4CxVkBsV741ufg6xaPzxEi3CdsnoyKhBs7RyRKjfcn2NzSYn8NUzQ9nwpjtHkoMwJQFuLys6nU79T7GiRajx4QVF",
  "key25": "4uhuBPa8aJspYpAqXVzqVwsArkrHWgdmjL1vAVinfY6eJSWTTGPpnygXpVuVCFiE6vYj43fjX47PQNoposTAERBC",
  "key26": "2kZdzNbFYym6BWaWy5agkyCtBCMigW66QjWHNdPtPZhvrfrZswASq2bhiK9pG3q1guavE56ove2ww7q4g1P4PTus",
  "key27": "29dnA4cj39iYehpu6Dn2ZZqpxE9rBWyFWTMFVQ6xZhNqEJvRNB4w8ALq8dUCsa61Gd8L6fDb7Ty4RdebjFUr5PpJ",
  "key28": "cfMzzcGQgNPc6epuJ5s1ntqLHcb843P4KpLP7PeuNkHYwEoCSckiut3gvT51ewHAqzcTNRGawxRX4WD4FVLuUZM",
  "key29": "2DtHmVKZR2oWTaszvTsLibb1RFXHpJx1S8HdNEfoPzAFZFSujCypMNEYvcKz3U3Fj392JzYuxxsj2nQUtZT5A9g",
  "key30": "3ECjuR7EESh2qjiEGVh1wCJbkjhnq88uAQHGz3RKNnvjWy6oFA2Cf29hqqaGBzkP1V7sbgRjs2WqE9ktDEXVUQyY",
  "key31": "5RttAKqDY7zLr6LEHE1Y43hnj8sPuS1Rc1BCf1dn7FNPCTNYGqmJy1azH6xLcuoCvhVjiiy2kmVR14G96Bc5pfsz",
  "key32": "65dtiVo6UEYov5HQoES5bNy72MY3ueVG4XgpBLMnUJcEL13936E8ykQE6YjYT4ueVv4PCJUZcE5SJJ8KgvFLu34v",
  "key33": "1ToT29YbsuRrUY2h4G4BbarV9w6iMy3HkbK21WBxjiTSRUvno8T8UjfoFm2xeV4H14g4B3Jah3TKynF5ebnBbxa",
  "key34": "4ot9tnfjWZr7AbP74gWY9hKGFTsx6DkDFZSJZC5PYKw7mwDWugkLx95DzQooK94ethSNPbq6e935xd6nD4driREA",
  "key35": "4sNtaekME8NZneS6WofbjCS9BprkV5GWoEeUcjaHKqswrf1L2gYJV4ThXReuZGcAP1zt5gHtegFwNMFoBMG6Xmtk",
  "key36": "4unQmdneKhTrdjVXA3dvmFpu7QioevAKiBevcwxC9e5grF3K34jA4ZBqcT7d6ewG87Ajmh4qENeG2RdazTgnFAKZ",
  "key37": "5t4VHFR3nMVcGbV7uhEgtHQcQksfxBeGXVMMmA2kuaXkWx9NWHX12gKfwS8ikn7rSf5QcyizPfNzg2XgEWvJE71y",
  "key38": "BzaozUCZQ4efqBYpwDyvCGYUHdAxz1afCUuywyPpHadu7wN8R1wqYWgV9FEySt4Vr4nsr22tDfAdiRcAWCH2di8",
  "key39": "3Z2PXZMfYt2tZxt9KXkVG6P6xbd1aWa1suReYJ7hb6C2RHEwGpCAoTz6fzQVvpYLycuZVnfZevxmyFmJmJpsV1je",
  "key40": "3KjqoThqik6HYDgHJHHmDcoBRBc7riRobwt7SjDLDdzKU7jNej38XEpgrnQeF8143JL24n6rDhi3KBNw17Yocdmg",
  "key41": "jD6S3SoQQNsMCXwbKP16cqmNefRHhQHCpNb1sDaRW65JxkuJ1W6GbPhzhQPNGkgrXg5yRyfNYttGT2JUELEeMhA",
  "key42": "38duCSFX9oNXZ3gjnQhkE9Jbi1N7dFsafdMJGVCJ3f2vcRc6MasN4hB4AzKRDjyautQ2CYoMCLw24eXoRw5y3DZK",
  "key43": "2fmXUpvcoxGoG5Afc2t9m56WjVQp6htKamC9U7aZ6n6a123M6Eq5gbZicocEjVzE5WEQuW5prZ2Mdz9qqK8kXzGD",
  "key44": "3mjKzzhUWSE6byjowvtPH3TvLaZ8UH1jeDyY6xForFdSfHcRC2Yf4FskHfK1rqqK9PTJ3n1u9R4fMpJVm1PChMsW",
  "key45": "31VzY7eEGC3TEzikcSGcK4CpvgXd1pxspEpKNJkvMFxT2KdL1CShMTe9DCKD6e8wCzUxxEueeThbf3ZzkhABUEgF",
  "key46": "y3cWu5XvhA7mpwiUQFLS9Cc5s5utWbXpfKRHHthMgR3wYjM4FpaJ2933ZgiBoGsb9r6Ut8HAU78D2Ue5sW9ZwLC",
  "key47": "52sKkhGJaopq6NMvjGd72ZjxWFZxvZVsTo1dJH7NBim1d2u27TRBf2gKDWL59JYYvhe1D4BzBfbB6sSeQnYg7bP4",
  "key48": "4isFZZUDuryi6bwud2HvBnuSjYyVRTi12AqWBostd5tFtzuh1REVDVnh8tLSEiMt9XKtz3oem6NjFvBWGyMx98az",
  "key49": "4jWfs9MkF1SDY1LnABQHKcGKHviyrM5vDQTfLDNV4Qd2ehhy37GNmAxHAGT2bfies83wVZxRrwgjQWKqQJT6KWqr"
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
