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
    "3umk1ToA6sRoPk2mGZVroyU4obb99SNcnM2c6SMVV4mYVxNcChRp6MnqPVRKHHtxv2Q9TsNHoKeqbhyiyvt26WGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wj1WnsnFHyDCthTyijfcYR9Q11UuL6SxxkpHBGeFDuxCGo1vmpq8Hw97zbe528VP1zbGzjt2pth7MgR2Qxk28z4",
  "key1": "55qUFNds9LGkspafBmyooeP22FBeU5Tx61xfgzScDSJ3aivb38SQmB5jfUscFM2vYtgzsfFcjNBCqXAt33dQuH6z",
  "key2": "4VD1SzSCV3jpXU3zAaf38FwqUdtYTmeEBrp2cGKi5AiDxqtQDgcXQqFKMaBaVC9W6CKkMvkkDfgUG4GtcYaU3bfE",
  "key3": "2FoRXcCm5jRGNqWx5ZxabeiKZiefurbG37LB7cJtyeypAjDwK9BUMcq9H6zG374rzJZrtmvJK3DCwZcnAWxXkfeY",
  "key4": "2NTq4sJPdDDmLC8fXwBw2WXQiy2anMdEwuX5j1q1nfzSbDPVkWhn6eKQVNWrHBDxX6mFJvzsMRgE7DcgCwtdh2Gb",
  "key5": "4KTTeGbxAx4Eme184stn1gpSg8RaG5Dwgkt1W4csWQtMYYAaMFiVomPKLqu5rRtGCZWRV3D5m9Hpquc5LLbL6jZ6",
  "key6": "22HULHbHyXRMbzjFdhRhkFrUcZiZkwZDfAFBmqSQDpoAGmwBipYmYNsZTVHBHmjZyq7WY5ab2VdDM7y1ZbXM8UbB",
  "key7": "5upAeByv9vm5Lvy4PSTf4KiN6ZJzYTuNNsy3LDJ86kXoF7iTrwN4T1f4fXzAsBjUQRi2bpmdcXz9XRAvfSXkj3PB",
  "key8": "44GSp5LhHDtDEAbhN2sYExPQsYZbavTtXmZribGmpatcx8e8XdszRcjw1VhWhapuXCvkvZL7jT5WUYA3C3n5SK9x",
  "key9": "WnJqVSAwz4Gs6pFZ4SjU4zenjBRFUcAZ43J6oRWfEEJJnVvFAUvCCPpnpUYtNTVJDp2PvmjDFQRxnXeb7ayEne1",
  "key10": "381Kert5t3M4zWuBXeoPxqm6BmnTTXrejGU549Y5328yFWhW2mJitSrmKKP4248PLNSc23zNZXs8yBp7yWmnz8y7",
  "key11": "2un5bcmb6LMTmCo3gNa8j4jaSNj1fdQNpTndvg5Q9m58n794iQSLfeptb6LVkH4sYxUpcmAHRajspULUiRPXCCwT",
  "key12": "CX88vKaRBMC82hHuzRifvnsSARaMNqEHnehSj6zXbaTETBpZkKgrvKhp9YVxjRHT784un2g13cjEA47ir1qn4kA",
  "key13": "3468iFRjTMCwDjy33WUNSTbgvcaEmUgheAyHY597AgrP8ucLtBLmQcaQe4ad2Q3gUvhWpnzAMVZRmioQFmSYe1iM",
  "key14": "5vNHWj8t8Bezj7GHB1CjDFY8auJNiPuV6jGYkH9TrBnY34yJdo2YwB29Zg765jgLw35yx31Pv5wJKdeCDadKrhMR",
  "key15": "2RVx9P5MTc2UFJEL6RooF2N8SbnVM1yF3pNE4JbvfCHziVzBQhaQzsqauZsw8MBxVxW7Bq3iZkcnDNQppcZ6rdqz",
  "key16": "5u5Q9UpaQ83wjPQYQnv46Qsw1qUPciYwCzxRrB8qBmZx4FbXUQW51ifWpfyiQqSR5ZMzPUzATnrb5NF8TwrUvRsu",
  "key17": "Z9SgsxbUmdynWqtqNS6B29FJvSjU3sWvW2Wmm4UEqipVPZFzEJo5AhY1JsHXAyBrttFUqtzwPja8sKyqtbXpQPF",
  "key18": "5mtQyp4fR6nKKYU6jnkt4ByUU7Smq6xkv2NAwG7U7e8cZHFfwnh2EdaZQyKUubFL8exHcyaCaFT8KeVett9fUEEt",
  "key19": "Ua4GXC7bZUGoTnUin6C7Tzc9wqzVPtPtShRyVAVpKbUNKXg2uVGCWNK8kg5w6YMXEJ96HdaFEtW8ZiaNP2P3zKu",
  "key20": "4WnihfPxR8tUC4prekQMukZSxc3RM8wa5Vq6uPwjXbUR4DbWuM18KHSai1b1NTKHtGJCUBYiyFyqn7G9YH5zJamt",
  "key21": "oEEKKTUa8b9qpfnoKrP5NJGd2o1jYymh1RnJ44ke8k9LTUQeuWPK6zUqSFLbBMAWJA8B759xKzesQLQfZJ4UYBp",
  "key22": "2fvJPv9qPNh4fxC4bmGnWUJKnTw4DmKRn6rjJwg7cGVQgiND3oQpwdFKq8GqfuMifK7LmJDQ4EFvMQQy5724KNb2",
  "key23": "4iCyUTgj3mvAddtMKZpwpMDin3zantfunhJVDaPQrFmL2YNvhD9gFZqWDt6jQ3nR8McMzQEsHnfbW98gsEWgmrFt",
  "key24": "2ykvVCBQAk23NSa4iF3yh9T38DSga9ZsniurFuZ8iArGFZ1c1iJyKDFvtACCKtwPKRkq8RpXdjDrQ1KmZf6bRyBs",
  "key25": "2EzHh8ZosQm4Dq6WoHNjNGNAYmemaP7CKRDSyrqo3zkCVrjnLHxKH5QUV1ohnv7gCbr5hakyrovYoTPP7H36VT8b",
  "key26": "5zARkwRC2mF7jQDUKyuEZL5YZkTyH31cS9VSWcZAt4p5rx68NAwoHAfmwDYjmmTZKi1kp5dtMLzgJfPpvK1vgjHA",
  "key27": "5iJzgrh1T1oHvD7YLeCg6EJgsWB7uDF2wYqWTMRSA8CuhQWsMVDEeeiqCABapAT1urztJMHuo2wphH7o1H6UaMLA",
  "key28": "bsuJL6gXTETLDMSxeMaovAwiMon6kr9zEs54NDqwj2XFn266748QaqTDcmJFcjnsg5MMfiycbDkGjsrgMBSjkH4",
  "key29": "5QYd9BJaUXGyJ1Pf6exPgdXZ39jw76tSViosrcndDiDDG5Du4kQF18N8NidSRLHK1AEXysLXuQoYcSVNfu7M6ZBs",
  "key30": "pLy7nRUuTefSWpzMYtBkJFkYjKpkx5zkxfvjRM2zS69RqtzJh9fECYVLmzzgDkwxQgKjJEG7VpEwriphr12St4N",
  "key31": "42rdppUyTeTm2PHyetUPMxDfJZDKyHEdREt6tdXL5wAh3bNVJogQ7CJUD1fgwaymgA69tv8Ze2VvBaYCdjNgHeH7",
  "key32": "4eqfq1KWKyQegHB5ngCcHv9pt5PB8YkU8EHjD8h4TNsx89t9EDY9rqMYmwLi3P6gRCid2z2xuRfffmkHvebFWtFg",
  "key33": "2NNnJvnSBGq3sr9bRfYtb7JwwFTS1wGra5cV7PKRFMhBPQowHwWEKLbbmAVrSXBFH35eewPpgSXT4FHJNHxMcr5i",
  "key34": "gKnRRmvkNjicxtnGpX4hZWSMSsq4Fmuue7jh5dYUUawJQU3J8tE8t5ke4VReffwkVFvfeyaCih7LpTjbYfCwqVb",
  "key35": "5C2NAiY8qxUaT8vSDBURs583XCMbgy8EbFKJ1i7bxz1ZoRFPBPUhJWnuoHBhnBjnyrbkubTfpPNCTuuS7HLYvt9F",
  "key36": "59kzN8ku7TBefGnptdtq4qexYmnLZF2gv4u8gjRgy5Fe9DEFea8dQkwamm9F9EqQoCw8W6c2xNLgR8d8xJnn4xiu"
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
