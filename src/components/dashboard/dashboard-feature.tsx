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
    "4qr2qjtoLrB38D317sofLyfYDoxziK4T13CTGxmsgb2BzCDzbFTgBSCcDDHhx4NesCVrK2un2GtvABfzALwK5KnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asqp148jbWJcetfr7ZpNBtWkV8u6VbJNTBAof15raqK4S524SE1zNM5joj9UaHhfmhFY3RM1oVW7wwdHA9KPT3N",
  "key1": "5rtfJrdLp5Q1oZr6YhZqga4VJevfENXAnq6K2vWyeUoxzspCmygv1Lq4PgK4bgvAELbbx6cwDJP1yfanciL8CrJj",
  "key2": "5zMSjU8t1VReR5MAPHrkEjXakcxTVQEoaXoq5AGKTfDss1kxfTMw1Wn7h5ChEvEvgonXC4zYcNqYmFQHXxbfZFUm",
  "key3": "5g5n8vdDuYRniVhJdxStJ1hDYdQwVZuxWqvkpxn7X7mBXxucE9bMvyCo9MWVcTk2LjrcoFTQKa2ENkXXM5sVLvpG",
  "key4": "5ZzoZfePhP73XGZxNw7tLhg79ejEuqcReTX4QzYMqVDUKUyjdAZEdh9uG3EuYDRKcXgS7xSGDAV9UVTTSLxpJkp3",
  "key5": "4sRWdnJtuiR2LRreEgnD2hUGiWH4LvCgYGPfMWyUy8vVUb52UqPvgNdpaLKzuxzvnDz8vZBiLzHcikyUgNk3fCC7",
  "key6": "5Y6qWx1TiASXQXRzsPQxii9dasRy2G1ZZsQTxXBxagpWvBqy7stLuEuGf2Fer6dr1qJQzn4Z7QzxbpBfxmx3jHpr",
  "key7": "5CToBwfRD8Yv1YHnzZjSvnmL944D3zRhvDuAPhLQP2d7VRSCEhhNHh8EPoiXqXUXUrXz8984ieA8F6h4gAfiEcDo",
  "key8": "3koB4ooSZErMBeCjAUtSfcMt6Q9w2di966vmxdCTPUpX9SgUNDXaWWNNNgaM5A6q9tCKLnEsNhJMyt7e7imTehwp",
  "key9": "44VyREa3JzWVUms1RoZjj8UmtdTu3Rkot2jptAMuJmj7xm5acN7eXwK34mqCutXjnDup68eWYGSoXrrbFUN9ohoh",
  "key10": "pmRUKzayJqj5JGiMV6gWKbccKmbcqSMFRuekHuKwmH4kP9DC2KkxazGRyrXwAc3C7GM7aJnpyuxxSRmDkbXUoJC",
  "key11": "4vSvEucZgqrHsbXGM6d669uzLPgz2MUr78zfYfdi8YTMsYJCY5aNSvWkAqPbM4VEbsxNxLQqWy8bhVLd5pqQt1fX",
  "key12": "ifa6UJXx8ofkMsRU14bRpBNjcpjmDj5ia29fhaCUPZC9TrmZoBmoFh4MB5C6y5yo3gDE1hJkqNPCxBTSdKwpieB",
  "key13": "2zePJaFcujZBYrPY9ZhL9WMP5RqMFUUJQo7boTBnwPQkhWfsGC4LLz5JJwbVH68j9STHK3ub4cWcRf98Tqawbhec",
  "key14": "51Gfj2iBNSH5VxT2Fx1oArVEbKdaSMyKTujv6bcuyyPRMY3BKunyFW2K5XJoQrCdYmBJfMGR7nYwgdTXrynfX212",
  "key15": "48SnH8MnfQjd9fuUVQX4yDxAE3JRDmMbXpjANu9m4kJJzNxE51aUy8sNyk4jBaKAbcxS8vF4VaEUczYt9r8en9iN",
  "key16": "3zGGTucAasswXpx81JuXemEa8eYdK449AnQSJvjMwo5omuCESgYwenHfaAeuA7p6Hjztwo9k3WJCU6xwgaEu9uJV",
  "key17": "5DkctePUWyBjSUdqBXbJfUxQsD3rnwgyUvAj1mJRT3Emri4wmUL5qFDTo6rA2fDsNYppTau7c7EHfvFeXEZjWUPg",
  "key18": "655un1fxASNBNQdYiNHLuwrCKfjGPQmrZy8KXbFrVrWeLCnSnT6sBL19ZMZVEL7KXpUW8dUBAMhuqXU6uxXXyuQT",
  "key19": "4iy8v28krSkWtp9fmVN1ab41kKq6GRk3PaWfhnogfwNuUUJ5aQYWo4yxfntDStkHL24qQWacaPejsXKaEo2mB9KH",
  "key20": "3WqVUoLDrEJptLS8UPF9EkEAew9qyQ3ZJXv4UnHvNBtZDGT296nF1FuXvYYs4uub1Tv9uBe89i53Xoh9e3cbCdYq",
  "key21": "4MVuior2TQCbLDwFfByYMc8EKck58hsfc6WFebfS9y6GDtkozYqkyj7kejMvZFhrr3iMsHYUziQY8U8oNj1HhGFn",
  "key22": "3fprZehicj5JnymGpufxT4V6M4b3RMFxZDWu6gtpQEgDfrqhQKN6GMHCFzQoVyhYqh2qeYcN6x1GikxN4dWTz9M7",
  "key23": "iJa33yb32v3UWiovqDW3DX8tj6J8QhNsPBZwDN1jVVM5ihxpxkDTVspqwTaWhZAvaD4sko2CZYZXXWgKu9ZSokb",
  "key24": "5MySohS2UBc7RN2Qg25m6D51Ki71r4L8M65gMKDaQjiug9f2iDp9SF7m3uS1dPUoXypxwdKwX3V5EyTEADehpqx2",
  "key25": "4dJ1CfRdqZ52A9Xkwaw1MiPeC2zL9VLebL1eoWAVLgGCFT3RxmaN2e1uHEN7Q6QFnqS6aUZ5P5dSQjGPNNfBKkqW",
  "key26": "28bKdw6UV4fJnDXjjRf1qe84151yt5uaWpfTjRTs8enLaL5ZsMieCuxkGvEqXEozfDeP3EyLdkTq4mLDc1nsM5UH",
  "key27": "2f2T68CdyH4cV6F8yizE1nrkpXraiALrdr9f9gu8GKxMpEBGrMfCMVaCjusCY3eKTnkv4oTwbpDB7RCWwaBw257E",
  "key28": "2ahXALdJnFU88HVfMCPViyE7QCdhBqvnEp688SncYqVKWsdybLoY6AfrAGr5PWj4b9V2LmVVD9UcnRf5hh2Poqjb",
  "key29": "323tpBPFyEek9L9Xixy4riVNmtWr23gMa5ZEPv2DrRiwB1nNB7BDvePykWxF6H26TdsUyF9XkmJ1X2rGbpE6usA4",
  "key30": "4de3oML37GsL8bt1Fic3yUTxCwGpHQbyjDECJNPhEybgZJGGkcby8Cfsoo8WKjpiWsAWV5Gdu8iNtwdCQv3woAKe",
  "key31": "2EurTcdrphsQCo2726U4NxdqdV8mKfwQEXZNJ9vDgF1RD9R8oy8PEnGCppEHGtoqjxACNuPqZ3H1fuQvQgpERfkD",
  "key32": "5LK28uXZiku68U35aC2gUu9Nm1b8tA61msDthQJe31aex1Ror3bgUokZ7SAYCQsKPo5ddy5exXQcgwWyGt8e1fjv",
  "key33": "2AtNEakosQdpSndNzQR6C4EZ1zUhX9rLnSNr3rsskjFkaHa2kb6Mr7VdRmciiBnvUJsHmkVqSVq5wadkzMYjUsoW",
  "key34": "28rcaQXG3Fof3CMBhhsz1sAyDRpZ2qypJEJyNGbHTpbBsuGiKs8vDJxu89ZqwvtVj2HGjNyr3Tn2vBarC7YtRoft",
  "key35": "4hDMNuEsLA23hbQ5bkW4rKPmMMhMsZxXeU1pCHEspm34d54DCxJzGjDhohoeFaJBcM6s77BXmhuqv6ip2hQntkg8",
  "key36": "5U2VFKZSSkHa4dCWm283mC6yN1D7u43taQPjxzus2PRqNA13j3mQiinfQWW9FrQJ8LjANFE3JXnquHd1pMgrz726",
  "key37": "62qa7Lmc4sVWWhArnSFmFYaRjJprFQSGmbZnk21NU1FRAkCvThaTgyngNXy7maCMNnxXjJ5AVyBFaHASFxss9VGe",
  "key38": "4YDr5K2nZmbt5DQRis8yG6mq5dkfBUZhLE4mkKWssDvGhLQgtPAbTKWSAnhXjq9dUnnyNqDRDKBTDjy4FqwJxYv3"
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
