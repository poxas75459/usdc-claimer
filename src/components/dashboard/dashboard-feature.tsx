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
    "2LuqKkYW4Ke174S5ybnmWKudGW1VjhGWtGoAmqsq51gHr7xD71t9M9fkURJnEgXzGigWZPwmhxVq5T7JV1wJpBxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x22VthhpTvKt4F62e7kSDbS21xSfNY6ySgaKE44bsWFYJSEjdjd921R3Y3KVHF8qEkxc4hGpax7gqaGYsZaFw9T",
  "key1": "7S71rP7Xi4rVDY8nmmXzFCwbsPjg66cmFFbePwLxb81VAVRChp3uDjdpVR99we3fRf4Ws9chb2JPTAAE38mVzFA",
  "key2": "3B56Ngxxa5PWrdnrqt4LXKjzwoKr7Uo5tYJzWhvao5SAkaJiAJNLfx6iDPLXRfKxPNAYA4JcVje5qZVQCgP8HDpb",
  "key3": "32zfmH8HHc3vkjiT5TbkgPcGtMf9WhNUycN1WYNDe9nx6fET1Z16kUoAuzktQmvGnohLmUfc9m8r2hAh8efnLyRF",
  "key4": "4FdPv7nhV7tzPfuhnSEhDihCjikVLQnZNaUuew5QN1zyRH367HsBT21vvsghpbbf3PSPG8rw8XWSLYPP89QXFBoU",
  "key5": "4vf1r28idSgTSwHXiUwkw3h6HWekPfNVaY2dgqgUmiDrsfmK2XRsBT9mre84ntx2KvahxRfyn2WbN4riC6NzBPmc",
  "key6": "2FTxV85qVFC38S7zEogx82E8fiwt5FRuu6HxJtkH26dMdpjS6FpGJfx2TMZ25B8MCWbiA9L9HPomkfhBr9QsRLU8",
  "key7": "jtnKSMEwCQTMKFuyBUirdJTWbKNC6B1nzBwdoYdS8eK9xz5yC4JWvNWz3PfeEettfDqWwgEpXYifd4Y3grYGhbF",
  "key8": "4FTzxocBpCTRKKZ6gNS5z6cPTgGPaviAd5sk5vbsYBswWViv6trnNK7pbUJcuLr5nQL8etys2PySm2XFTYutKk1S",
  "key9": "2TxU9vaHEFSBvoPuHS6W5YJxUQJYLPWt16NhCBa8c1y6q9ZGroiGbvoArFgTJYnZR4TkG6ZY7hcufn7pBNkSS6n1",
  "key10": "2Fmf8KWgWmqSHQ5Kb1kwc6fHJHFWuoBAQLn6UGth2YLqbvhQF5ynakseGyEoNT6JLwQ7EqFWrhweq7JfSJGmiGJT",
  "key11": "5JXWoyEbVgjvWMzfmiQVAyh81Dfd2RFtqaL8GB53SkaSaUthDptq37iFzavrFqtgRZhnk9bvWo3WMd9iLNrnV6hk",
  "key12": "2AdszvNXsYq3m4t6aLa3iom7CdwxduK3vbe6FKKAZs72Brp7AFLiuxh126q7ijKQYZtnGZSsN7y5wUmuVtnGvKkE",
  "key13": "AUvu1R5upiioC5oBCVg374fxFEYad2fGraZPtizYnU9kTCoQJu7kmAMEYcCFFuFzHLvYfKhtuAbMUhNnw5gL7VL",
  "key14": "5rzi7obPfcUrBCeRgryEEF4Rv9wRRgkPfmkSeTFr1WNUAsUyU8wHLvL6HySTm4iHAHpudHXkwnS5iBpMgLVVVBik",
  "key15": "5e3mLqTfvk4MAXzoczRgic8CSus8CLXRrLJPC8jqmoxfk8EDLTjnURmpTPbg12Ui5d5vtnRYqyP8exS38PGmNjMv",
  "key16": "258qVWrCn31vkWCybBHHpTcehoEGMucHgexdgRJybj3jT8RoCzYeTARZud29cJGcsBXqEGZNszWrKNJTTV3roJRj",
  "key17": "3w2yNXUuAH75D3K2LY8sNifEDSQjjaySWRksoeC2wygemQenTCXm4B1CVFRr3z5K1obTBNkM4e2YtrdqBWa4NCJq",
  "key18": "2SBzEQxFH4z8Xc7wHcT2KHQE6nnhHtrEupR6A9XLtKQZhUXkbwZdujhPV3a6rzQMsGutf9VhHG3BgtBs1Ac6zWqt",
  "key19": "3Dv5bxGrUGTGRFBQJhukvq22QBbDCR3A6U14chP3WZ6vmrDEupPJSvg7kbE8Uc5SuEL927SQQ6cKHDon8v76isEN",
  "key20": "4mUY69RFsZbaaQ3mfMk769Q8pj2W6MDUD5LXDtdmxXVKeCxPJFmMrmCbCTB9XEaq7EYeuZ39zL7CLRLem6eASiT2",
  "key21": "5pRQD4RCtQgoKAig5ZGuyZnDqSs3cWVvDdCciVspLGe1fT312xZs3br3pZnEBimyyixejwHqx6dHhe9CjbF3omsP",
  "key22": "D38mYvRM4yMCNAhmg9Rbbuj344qa11uq263mF1B6BrTstYjErLSsoiGWjXJ74RtR2d96zbhjKhkzi5dZsyhEWf7",
  "key23": "21ACDMpwpXWS15L8dkvvBG1fovF79eWhwgXYN9Evp4qprghKZh6dnJMkQrK2pUK1XtmKQ4ANqhWvkn258XEjMj4d",
  "key24": "3zkfzfD1hR6enuBdvVyyGkVGzJwzvW2iqeiqWaaJVcfh1YAP1WQEn4qWsqvZUM3G59fASAajgPQEsrF2weou3yJg",
  "key25": "38ZZv7po7q8cCpJFoGDBBDivPF6C5sBH9uDFCx967QFXMSgDr196cAo1xpEjz2YMJHG1ZyzHz3VC545XrPQecczf",
  "key26": "MtoPqK3sgUVhGtjhpmP9KdSyi62hcuZxHvubpLmrbnAyyQT2YjoF34YyMnM8rgQ9U3GC7KECEtV9xpBqoV6aJ8K",
  "key27": "5d5QH8ZhKKTtEJKVuvzpP4badZGodJzbnrjFzu1SsYWwJCfoD3Vq7bkWdn1aeCFezsQwBcbq7HDoZSvbyx283z8p",
  "key28": "3wBkq84z5tNf35zRVcFq32dYk4SsRK4mCMQxRAU6eNfEVADgWixAcjje6fE9YcKFQ5Ktvw8ghn3ZYWAxW8qgidX5",
  "key29": "Yes1Zrrfq4rwM2RL4Lm8otu2MjXBhGnHyXjLPY63XwbdaptQvWy1UsRcR6ZrH61YRxhdwNL28L19SyQCtk4M7Gz",
  "key30": "3zDw3kT9E9miaV8Q8wPzH9MkZDeGtrchtB5JxDpSp1BHHez5gfRcrWBS2prd3Fo2Q4TxzoXyqp4jSc3wv9T2hd2Y",
  "key31": "3iZu73mhB5huNp55Uoy4cVQNG5JWjYg9SMFZwtkft6D2HaZnCJAMVWxNeweJ5EUzTVS5Ybgk8MqNPBLedbozXaWB",
  "key32": "3BQQUmSukHp7UE1aUttDB8tSpJRUqdSmSjVJ5reer2gcXtEU39ws1zAk2TgBmXDziz9XFN8xSrX29rpbi7GaxJhW",
  "key33": "4SCxA81VM9giuCsy31dFHzbd7TmyvuWhxD68KVwmCHMDvoyPaBCf7dfkuDLeZYFRr19GVYrBEsrGyRCAjDY3CarM",
  "key34": "2phFNLiwoKiPgcHTEDtb3phcmpPmesDeye3TYdb5UW2Tozu34JCkryzvLrnFgtUGPXdGJfcmfXpyb1qkrtuHGL7b",
  "key35": "2BTkj6iy4Ru26UMiQyBe6qoF9JHNJXTKkgKjkiYgc9mKbJbwUdEAtEgqKD2inziv5WTGAcheLumvy7FGe1rK6fvF"
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
