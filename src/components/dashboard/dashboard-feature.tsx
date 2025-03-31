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
    "4RXQKMrwGP4c7zraGMNfDUA5LAhMgyk5YsomHmiwtsRXt3QjKJQJpYFQf3mVwQnoXEE5sPzLDk41fypvzN9JB8NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYgCDEVUVm9TT4xg3XaCUcVTaBr9PUUDRocQgdH3rzf9ASiBAyfN3J4YpYEcyDVnyJdBzgtohzitJAfWtxhLJzo",
  "key1": "45dPJpYPxsr3NQXdZrsYFRZ8wy19RabkDJp1ZXK3NVjqAfXnrHTSqxEbksnY5Lug4vw3SSuMBBtUwL6is62qEbkh",
  "key2": "4cJncwWJqGCThQmPaC6Aa2f4GCD6dx5nNNGk8xPpd7JgGSEU6jAkTKThdWnnt3qAnT9fQ1GyGiE3N2LoQfVir8Pu",
  "key3": "2LMqSBDgen4ddVDSPMMyUeyehpyKCA2mQe7vKqLtYQEiR3xfVtvCYoE8LLr8ABmQpRpBZkspWpTaPdp2VcbGkL9m",
  "key4": "58RiumaTvifHSUJEZ4GFChBhuSW39kz7PM5marwvrAE4RZoR3cPfFnU5Vonan1gN94xJKiHbEZukg7mQsVFNeC5f",
  "key5": "4NzXTH6W7F5Fr67xL6gtaUsoXDTYyVThwdJp7rvc5KMBaUoabbVM6zAuZJgrs4gxQ8Gvco41J6eoxhieSbhrqCYx",
  "key6": "2vgpFiFwMy4fjCwKuGLoWo8e8R9foEUDfnBv8EwGtVEvPdUcNb4MBpq2dAw7nqodbNjkXeyArxw2YKqsrbYbxCUs",
  "key7": "q35Wdm2T7g5w56bTK6kGpQqohAeCgiUJ5EJtfhQ9t8bNNYcZwqmWLEXeb9qVyoaX5fMWFEtZa1PyUSMP9EaA113",
  "key8": "2AZ3KMNehAxiYPqLBwYd2HhdayhHWhp1XPdzfh61XNBVmJ1RzGyq1DE9QmLLjTpgm8GkmZ5UyDNMmJwsY53N6YoL",
  "key9": "56xxcYsdWYnEicfTzBA5K2zmF3GvTDuVeexd7Z5CzXEiCgFZW116FMLg2QZCkWeYtwkJt4WUmPehKpj4oqximoYm",
  "key10": "3zf3uj23desVA3dhZDs3y9rC9v76eT6XJjiTH6jALo2bx2PqbQEK9Etx9RJ7aDAwkpz86e2VLErZPoqbcmo5NH3M",
  "key11": "5rki9M7YGNR2ZFZ3qtutv5BCqbr3N47KKnjCbgtotPL773WbfhrssdvEa8APRU3Cyj74xyq3zQKur1BBamTq6Fy9",
  "key12": "VRXqJLMmrEbkefT6UGuSL3oWPxusbP6i65dZHonXDVTm2Gs7CsYiFGNUZRjfQz249md5DdMVv27Ma1qGoVuzTxK",
  "key13": "4zCyPWYdbJeo4C7d58sLoKPW77HRQu6WSWKM3qofJvcH6MNEe6p7hMp76dqcu595eSejXYQBdhdwCQ2XEnxeXv49",
  "key14": "PdnbGFFJ6u7nrPpmSzboSqbEzkYUE9mAv7RzvDVtMnYNYGBChbLYCJAiyNkQyJ9KeeNWkxHyHzfZBEy8ZD2gW1T",
  "key15": "27YWrAT4f9aJWum7VwdQcorGD9TrioJ12mcrYvebGyENLwjQHr9Qjc5YzRMQZwaQzccDnAn4x1wPGEvFRdqfvxza",
  "key16": "38XqHsyGXHkiFyZTffXCkcU6nu1SxcChGYbQqg6iE1WoYcSJ1BFbC61AC9bNCTYGWq7HfJWiWtXoNPwi7A8poS72",
  "key17": "3Bq48cKcAL9ktwJCFJLTsuBQ7SaMjb1uC7UF7Abgj3Xwrp9BLJH239EkibKbELfmgEXYsjvhd7W37hsLzYGxWvff",
  "key18": "2nYSE8TxeCRLTogXyoopMH9vW3fVuKnuLX5Pg3FQEhK8ZCzVu3SPDzWRsQqC4mGRbsCXXBNUSrces9VtSL81ygH4",
  "key19": "5SQgfdsHccqh8p499SnSi5R86kQA42Ar1TTzDVr8t8tECSLgWMSNtoi9E9J9Tikj6NLziptkNBvpx83DE9SWzy99",
  "key20": "2DJrzbWTcmMpti93RQgYk2eajpfUt6gcPFCFh9M2AuR9Fn4AWraYHnZnYuUiEXCzZUz4TAkBsfabd7cd96Jd8REc",
  "key21": "5BTGNmTKoWcHVUPmVTqzYJ3qbbcVZrLhJVi41AyQZTTT2SURZbZaws1oyKSG3PqeYNGMe8PHRWfTDhNu5fCEptKX",
  "key22": "2vf1SjEMoxydFNt5nq3mXTjCQFp3EGQ93aRik2XeE4Yss1RHYsiLjZuffUtMnmVBJbzR1bts7J4sP11WGAHUydJE",
  "key23": "3GNqZfetRDUPTp6w3KXD2T451MVU8RMsh8MsTYy1sCH4qhNxAh1AopGnUqSfBNDyV8NSQRP34trgT9PNxVncZtQK",
  "key24": "2JTGxJ3L26uc5yfkdjz3G1JdL7f8Tdvst361kdCStQLc1qno3SWGF8JFeMomnVc1vN1AWawU7YmHoZbvouUd9mCk",
  "key25": "3gyeiZm6hjQVdEnLfdb77Xu7VdSqSRZ9sGgWTw1tjK6hYV6vVq5R2vQM5JucbWg1PHH3Y1WnYmLc9cvzGB3gZuEw",
  "key26": "2A1SyeFZ3hRv8bsr6BJoqTwfEEpQtbTZcZzrygjbLraW8NLMk4QJ1jS7CvuKpzEJRuT74b9tC8SXA7HsCp8aD19u"
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
