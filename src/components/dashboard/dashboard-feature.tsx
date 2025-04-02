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
    "3eGYSWGYr2HbF9LphXxXkchkhgtE4LVjj9gWuuQWJdGLHm7Mq6tThaLWUKy8YHXMbEzvop6hkjF2qrW1h2VnBiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhxCkQcGTUCeoNLEFzAiFy3EehajX6rmEqKbaom2wDoQdJ4XBcqEGjcpdhgFzj3D3HZGCAeaYxWDnQhjfifDpcs",
  "key1": "2pakXTZHk7iuGp8bJ7G3GswGh2vVY2VUXgxrw8qpqW8s26BrczBKyDhAZJsWcM22rENc166c59G6phtZAFbENRje",
  "key2": "2uHPrbdWSEmmYGytjkoB1knBUWMbatdKDtmRKch4fciqhVexBxLUUFwPYoyimKMm4x7hb9ozFeGGsTtksHEwcGbn",
  "key3": "4Q3hxAKDSFzocTgEidBrXLRBDk5DtWLamZiPAxfc3PTDENRP9nEqQe6eoBzsgpJhiviN9PHcmSaH8JPKgaMGqepE",
  "key4": "45gjwL189TY6f8kMEUWifNXcAZeRB8fJBHen2rdAL4Eu1aT8B4UwCLDht7MWBNn3B5jXGyPX2LdZyrn9zhERyuQP",
  "key5": "Qq2He8dv8bweQy7Ez1gnMKcnoFj8qWz3xYcByoinB7gFf6b58whfQvBMK9h9gFiShF4fGb5yc3ntF4LMuLZskCg",
  "key6": "2wkoQbnLLpUc4DKfDnufWdDrfmXTSD41K4crvKruCuMTbiv45jCgah3aBHk4abxZf3cNQH2AouYMkyeGjzwYmF9w",
  "key7": "2Avvoj9uvsL4CyqxvKjXNWrba7bLks1qq25qgWCCjGdBJAN2XWSEeuKeZFymBkqGbHRGPVYUkWWoYMUtsEMyVeEj",
  "key8": "2L99NPVKpdMjgR6EGizMRzoNXdPMdScruRvq2V7XsiVa4Vr3wmG6L1P9CbAhq6aGvH5zYX6pE6jFsGG7rZecLxnj",
  "key9": "5ATEr9wm1L439s5Ayuho6wc428eLdr6sA1os42Fvifvne8SyBegDgU15kkuaBCYLQkhWwhfnJc1HsS5Gsq3gkNdd",
  "key10": "4eG8izkdq317wpfh1ikd2KgKZtVv3ouphBmCZKeCMCajEuPqihHwuKdQBDcUY3CyJ8GyHQ4KMN8rWoyQGzu2L2c8",
  "key11": "3vTc89UJ5HMZheMYazeCb8RfktAd2PVFV28gaLfDCtCnN1eXMTbXYcCtCGJrPeviUVnNXUq7mtzjAmZxsiQvFz4S",
  "key12": "66Re12qXETVC7yQUA1hiPQhCWEfK7p1wJtaSFJbUaQQmVGfwWhQazB1sD8JzxXTYtmi7qEL84YRMBg6DgozgrDVN",
  "key13": "47VTefRCE2nJPCHtZxi1yDhP5HKGixWadNNbSdAwRRv1usky7vx6NgPT9XcWZi1TwoXRmwc6pvCSavhNgLmj7jfk",
  "key14": "4SeC7xAoRvZ1AtkT3jjPC2GXviuJXX2KmgFV3TaDW5dwcjjsuqjX5Uf2BJtXuMGutUhbXav18qs1mBvEDQJhBcX3",
  "key15": "bpEeQF7YVtESLkyGucaVMYzw2Q8YNrqdNR79t3f9UN5Mp5ZKPzZZtKt8q24nw8E9sKBwJxuKNA4b7eKyPwdHxv3",
  "key16": "2nhJk7grnVWprGD35jMFmH5xcs7rjEmqkBSwRNjNGr6jnL36fS937UPaUvyMVJiSuar76q1HPJBPLUwpGUDfZA46",
  "key17": "4SUNg3B99zr9F5SZ2b54GnLcLqS1zBkGonw8PMu1PywVeU8eQ1QeNjeSdJrRbMhQxrniXSeE9yn9f9S2vAhUibBQ",
  "key18": "LC82J2QrxJzubDD6D8hHGuyASgM4rvSHMsQo93ZtMQ57Xhvmk88yUsL1soghM619FuRDeYgaTpykuEUY8296Hyz",
  "key19": "3LuwFJRtuABPNCBsXXzRPyWuoCajWX8Yfc61efoV2Rg3Aee149iyKZ5EWTaao9j8PWEKpP5GG7cKkR4cQFXHcfuU",
  "key20": "5zfaew8soUy2gjig58G7yBESCsqNeGjaSPpUFvpfPVUsKd1MPf6xYPHNKEcByVKbeRFvRu5ttarqasBjFjcAaVMH",
  "key21": "5ZqhKSvgR6YDKbxPAR7J8LobDBgpmyrgNfCcNuAtdp8B3Efdz6XRBvidKdb2GKg8xZ5b6dqtkmpsRphYpva5MY2p",
  "key22": "5ANCbGtwNWo7ycf9FL28cB1fMm1cJqJRSL5h3UP5TNgPeSq8BA9Pmuew6JzRkDUqiQS4vpnxSThYtKD6Zgya2vHv",
  "key23": "4czeMuGP5DPV2uR29Z9nrPVyCA3AsM3JzoZb6RDzgdZHE5tEa1tTHRm79s8zq7fVgWoHKWLYhDwf6TTj3Xsb7FfA",
  "key24": "3k6aP3NKJF8bBkMSrw2DQpZFTkscGGEtQLvMHxr3JoEFNzTuNK34uyUJjmrVbvaDeQi37H1UGEGc6XrjtAbTaCxK",
  "key25": "3vNsRGXQXa3Tc3jFVMsR45pMdQKqxVkmRYxQ2QbyVxJgpvvCFRW4YU2PKqDTeAJTaZ8hNy2PcZFtZQ8n8q1UfpHx",
  "key26": "5jXTzD7voaw7UKoY9ChKAUvLNfe6SZCXg1m8ArvSAYMtmYfdH8UR6ppFzyXz5gpikVpDe1C6ZCA2cKnW59Ji9hCo",
  "key27": "aDfn1qq1QqSKnPrYpsMzpA3YD9FEn2w48VqAE5zco26LEZaH8zYSjqroc7D7Cu9jyF8xRrvPyuKs89bJV1qGrrp",
  "key28": "2L21wFyXVuoMAejU7mUP5DZj64BYBT4C1jFAJt8NNmq5NdxkG16S54Ei5d79mSgAYmBdfVBnftamkxwD7zehXTu5",
  "key29": "BHQ9wDevWDsF7j41ZS3BpFTSw6Ww9A4KCeZC47dpFhFKqLrJd2D6GbyMwv9dx25QftDVbziB8WoLc658f6HkVho",
  "key30": "4YamLf9K6t3X96btaNQp8se6LTayiqUZwkHwnfrVaJ7eYCmHSbtAcdYNXT4LJNpu736ZuBmGiTScPXrMhmLihXmN",
  "key31": "5Whb3eukLCX8DVhaYMzNhqwc4CkdLYJU8KznbWCxy1zq5GEujwHRSEmg1jscxWdc9nXqtXEfhDFz4LRYFTcqfkof",
  "key32": "654BDANFQSeCL6zfgqK1uQsgsdk5bfu22hqcAsZqNyvCC98ZzdJ26Z5BRRm5wW2ffW3LcqM9uGbfx3Y47eVpT1x7",
  "key33": "EQivi38bG12jR7nYpqg16vxwH1RUZvgXhBnxVUEadhYtbU8KugWF4hmdU6dW3hf9fDV5b1EeeCsSn8vaNdNLDH1",
  "key34": "4zf3fTaeftw43LLBFFn4GNrZ1yqNdEXTgRhGYWRUiHj1L8fScmonu1WZtRpuFbRHHXZjmMyP5NXzV5yjAWkm9WcM",
  "key35": "47839DWjxwNDM8kV7i8PoZft2sENvDdaqiFFYJ13jG7Ck4ig1AioaovNww7k3Z1dkqvqe5gpfDfYtm3Z6WS5jrrL",
  "key36": "4jAK2tEranrCB19pcQEV3oxnTgnP4DtgmMjmsmQSry9G9hv8KgS8FFHoWQx3vdXC99hfvZcGUDyQw7hHuMDgi4si",
  "key37": "4WVXZpArPwWVKfXHtUvDpw9EoHFigeSVBFcFePHYwonZATjQ4w1UtoVzQcBqBx2cpUmzAoADyfhBT6ZuEpNkbSUV",
  "key38": "4RXX5VnhRtr7M2GJqYRD487CGtoN1e8jfcdu1ocLiXb45QaGgy1Z319HsBJnhf2id42d7ab7BKynPRRcXLJgdehg",
  "key39": "63ut5VMuBhvqrUKahyS6oQsh1oFH4fru1vBHNVGQ94mzC4wsuGNRq9g53DhmDYTbGTma8ikx18RhbpFq8BnyBBXP",
  "key40": "FhTBWZYUUkuCEzthaJxwStV4td72sgpydHBv5EWVvQe8NFtqN8YDzbjA9kQxfTVwre9RFS9WDvGTSikDiWFdsdA",
  "key41": "4ppKdjAbL7xATphVFuEsXAAKAu9tVbrEKXxc1asasRdYsdu9Q31fwQHnzjhFht7J9ZsGEwasnYS32LM9kVoMBFvb",
  "key42": "4uvENBpBLVVuWS4Rqn3kdvjDfZgwHhu5cCcb2sKdgTTuL7AhUSacR8wnwWKFUuy9sz6cFQfD7EEFsoYfx3qwRTT4"
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
