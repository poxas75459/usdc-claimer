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
    "4G7GaTVctb9s1MeKfAEDzVyvX4bLoM2emttXM1tMgMero4D1VZhvtJNkdhz3hAnmiTComDADGxsCJpa53NpxKTXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34g5c8j8d1RBkjg9V7JXSQHftnBmvLyMz5Pu2cEHymnRbDWmojdnitD5wZ7JhQ1CE4QCDtXGkT7QnTLMqdvCCU9D",
  "key1": "ECG1uNpah4vkTCAof1j7sS7VgUKTYZHSfRseyGsQQCwcBVMindoRnGPRRbzv4djGpmQvf1TTJadazK6UocSw32s",
  "key2": "2aXFo8WrM8m1TLBG9rGHYMzJ4whBb85dVfeVga1RjcWPyqBxyFM5L7c62tLVH1eWPVaUwRq4BnqjvaXAYhTooSmV",
  "key3": "3W34upr7JSAnJBMivLrZeFdcg7t4MgGHjbKp3kqbkptjSVUv56pxRnP3byHXXw7N6NUcMc48QRkbP62rsxhi9Qsw",
  "key4": "FNzx8Cig21y6K2U2czq7DFuDrPoGj25PdsViENkJViLKLj3XRuXdHamt57nzuQLqs7SW58nKZRymvb2VTSuNSWd",
  "key5": "5sUiykZcRANzW51XkD8CV8wZtMD9H18xG11GZ8Qyu2hss1GDvoNvpeDToqm9JwJaeUvTU3ALXVAkUTuikivfosje",
  "key6": "48DVuVH1oyZSjWwhmRR7HBrDJ9JTPCMd3ZMrEA66V5stAFZ8KQvnpMe3UegG19khxQqF427fevXXNoAR2V41m6ru",
  "key7": "4wBYJSMWcZrzyPDgTSuwtRXq9C9Ubmxi8Zg71xJyfXqsFvSq4QFv39Z6rHHRRpgzeHsDjcK2TeETFEVccP5PurpG",
  "key8": "5FMBqMBa1Z1bWUSsUi6L1PFv9bg8ZF7nNuumvsiT96K3dR9Z6ih2vsFGx7ivpnLa7bbVdioPLp3rRGttVtJAHdLi",
  "key9": "2S44uWrDmMg2u8u13h6vRbiVMaZ5DE1dfuzb65fiFqYozwV4omNToBXghbGTZUrMsrStexquw3KfrQF3JSJjNnwQ",
  "key10": "4zW6FosvNu6W1sNMAzb9jmy8rNyvinxjM1KkhtTHSpF5MDiH8x7JjoJQmg9v4GdeQ1hgnvPBcNqCVWuVhpuEMNaW",
  "key11": "2MFJoV6FB4etatkEpphPLdkNgivKVivvGQiyqRy7Zr8Lbm8gmV6bBsLjSnj6tqwVQCxFQz8YkhXypJT9XVzTUKAn",
  "key12": "2RCNaeZhzirHm5X1Txkeuufmezy4jTMALiULCPqhrT8b5EBNBZw5csUM7QNm4mk6tZ1EZhirWBDLXXVHMWZsxCPt",
  "key13": "5jyy2S3BMFZzABfLZm4acRyACFCVkf5NaDSsFHBU2ZksdLQh2rtwxxiE6DEVfHUG4pytrkRnj7bVo2dCAPp1FNxK",
  "key14": "5ULQPnxTfRTzaU3rTvdkqgM9Hgsn8DGg2HxiDi2y4vUhVQiGBqiXX935FxGBREkkUTvYBHKPcsroHV8XWe62sk9D",
  "key15": "3m1UXVynnHXZVTVLkYZhkrDvZvtqix2kc9oDBF49rZ5MyNxPXHMWWCNADBqPqQ3k8DPsd9fugsVKKtcBEjjmdsWv",
  "key16": "3cSFSVhnvdihYgRmsGp8tiCndxRhLnnKEXScDaFrt3iXXvh4qRxQPnbgSqamT3QJosDqETRGRLQGL5Ku8uTxTVWb",
  "key17": "3mCg2i4kJ3XYWAhBXvQKpm2he5g8LreakdNiQ7PWH62EGCSs3f4ysuR7HC59u5faAYUk69EiXLNFokhhGAKFZauT",
  "key18": "4rJkyt5TW8ZzvE8YmV324dPoovJRxovELQBHS1LFvd5dM58gkb7ZZuCgR5Zp5HywsLGeQfUGuz76pLnxMrZxU72K",
  "key19": "2z3NPTs8NNRxwwsHD8Kh36nyPHjhKPwscZBkXZhdsrEFHdCMMxchBKLteukDHu745HhBovk43NKaJfjmYyqv7SvP",
  "key20": "2HanqYVRC5x4hkyPFZqJJzQ6NjFjM5APvDbfGxWPp7jLg4J7V3gTb7NjoKC7gEtW5REr4JgMg7zPr98aEwfxEdhk",
  "key21": "mM5hCGYhqTqp71oh76jQZL9vErvZ98oMdfu9dR6dR2YiUV2h5NzoQFrDzrok2aoUdXjmty3j3bwEE1UtrXQc2nQ",
  "key22": "5qYiDGcvHM4jmACpdbrHfwwcYHUi3wV9zhkfi2CCjAHcZ5wkpHccKq3yv83GrWYf2xNwQP79uwbD5PcfqwHMvo4w",
  "key23": "gypTy94pxnAv78EzRujCgUgR8TqRUYLmSBDdn6hzrxJ7j3QFW44wvdKscdeqMde7qzuLo8SWvNucVd4roZcQ4wh",
  "key24": "543882E94XegJ3SJzvQpsEiVBVsqtiwhEeuHCk4MY1SgsWUzFFnYzb2i1BTNRnGY538YJ1qLRZLmBjWyLp1FwPaB",
  "key25": "5VSuWpiwp72K1J36mB8oXnJrrPi5dGEFirEJ2mWW7jLHUXnm83vDs9CDRh8q4ANa4g76h2oxp4pX6GeEnbNSZRDM",
  "key26": "5ms6XhkQn4ECxDxULcrpo7Dj7xLwkJudaYVWQEjEMYGP4MwYE1mpXx1XLHoQoU2Ce2H1kcyarW453mB7uqzLEiU7",
  "key27": "5jshw1QcFzWEx9Qmw69d8XUJAhffAvZjqFNcHuPrbbpHmCoBo19rz31bBHB5zcZeRUTj8Ypzoe6pnhiuWbHUr2Js",
  "key28": "5ubaSJgBxAEiFKsV7LPgRGGax3NpRGdrKmw8v717vMjK6KuFbnuxTcqLpwoGeSgS4A5BVf8AS6ayG3tH8tNBdtiz",
  "key29": "Yg6pHaxha4SXdeRvr5GwvuxAkNJohyH5qFccJcosg4hAUSckxoQztFH1kQjpjWSTaUxGWRidTyc4iUiC72TKCBp",
  "key30": "61gJrGR1CcSkBKnXHmLiWat3j6Q2Yt1KGPsf4fmuzzLpyivzKK5XrRnpybB3vxwGjfeqWhxc5u5eyxzgUZXtRurr",
  "key31": "ovAESJQ1oMiHNQDYLx3JLz7qe91zDQe7cGK69o3RkcTuHezPgYYANVRvASM4qQCms73vfV5xjgdX3BJWtB4o21h",
  "key32": "2Gz3XW8cdMAjV8Moxxqz88BoqNmZEjiqvUWd24assgpvyc7HLNyKnrCYhq7tgkfWjZUinQQAv4mek7geLT7LMUPg",
  "key33": "3PMr9eJT6RVrxFneaC6cHPt8hcsyA1aMvWQAm1JWpVtp2CPLfv8CbtuRNDsKerc9yETPo2A6p2Nww2d4wzDQCYv1",
  "key34": "35gfZbs5ap6yGntiKHnQ5HuEJbyBEch4b32dUMBaEYXuSkHCuCbJciLyWz1EbwCPrNLtMJR3yworjSb9FQ1hySmc",
  "key35": "375vXcUi4Y7ng3FfBpKkNci9gXYv46VFLzDRGrE1EwauTYTjAo3zW3MxNBzScbusdFPCAwePJi4HcsiaPxLyXXbW",
  "key36": "STgyWk1auWypQV1xedbXXcyCoecx7PJ1vCYWCs5tzA9rpZN7zviXuXMYUWUm2YSGEyuWzvsHiTXdArk6VYv5Njd",
  "key37": "3gBJW7t8hSbKyRVw8FKM8KnzmLXRo9sMGpmiQTRxk8M18Xq69RihrtyXsYKppT9p5vZCZ2pjYFNRpLY4yh7C6aof",
  "key38": "2nAmwau63NESGAoA9hgdago3EEe3kman4ZccZFr26jhPH2k27HcsDLbyzPLfLMD7GsMyz1KEb4bqWXxHkrWV4hbT",
  "key39": "5oYvt96dsmTw9BR8ZVp1C8YemP8e1DRQrps9Lcfs7jpMVVt8tX1ssAGkYVeGfg3U7Fso5s21vhppZoqP1aon1vYn",
  "key40": "5meyuJN2QPPtDZVZLUJCHQh1qKxxtnVhe5wNy8MAyqaZifwq6fSwGP5AnwGCMKZkrA812BkgjYGcBLCqbzMajukQ"
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
