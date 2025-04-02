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
    "5K639BPLUrLKQ4Rr7SG3xy9rGwbemqdEGiUjEBhpiwLtnUqEYPREHHiUtTto8mXcZuEbepxhey6sTAt27iQhjLfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RY1BDXWzzRi4K7Kro8NCETjTbWsz2u1ceqduwvswczZC9eTCXLHcGztcwB5RyfD7wpopCqPSKT7y7MymCPB5Cv5",
  "key1": "5t6yFhsyQX1kzEMSq4rL96Gsjs4U12HLUfqtf8Sx1SxUx6cwqV8jgp6b3xSzXxiFikiDcdxuEmNQkcxNyCDkWVLt",
  "key2": "2Avd6WcYguPoRUdNnrGYuXayJRVTs7baVE8DXiFcSuADkDwUiAF6FtL6MmHbTHfR81j7xrdMXcfAaZomJYWB2JFm",
  "key3": "ZFbTmvoXbY22VwG35rNVkPnJKeHGb2z7zf1aKVvPSewS23ktpxvagSsxT7eysndjSqiUs26Ziy6PMaHgTcrTR7s",
  "key4": "26ca66jvUDA5XAPTE8xdxRYh4Vqd24qUcWUYC4os3dw3ThwS4ZdyCK7Go2XD3Rdj6UHvdGcKcgwtdZeG8uTuybaf",
  "key5": "2rm1RhyEECJgie4ASLvx1cRvosPGoQaxutRzLYHbYN6hE9xpAsgjqCpAuYfV9S1ekgB7KuDuJhrjMdUxDwFCdhTk",
  "key6": "2f38uKU5pGZ8HDsqPyEqmc5g2bdvtGcUcGsLT2Ma9h15uvcZuJyWzTxoY8VuVM4Y7Pp1NGgc9ufYkhpCrnZWtfAx",
  "key7": "5Ucbk8sGSZzswpT3paSe4vqRAETJ1sgh66NUJt15g8GUNDHGDjyibzRWsw1g75UXrQpB7DFtHc7CsPLfvmpBgRFm",
  "key8": "3WaPHDEnYYgtcEC9CXW6C3VAgTuqcdC7Msgqmoy8TFcqiBub9MEePB2KWUwecUDjBSdZPuNPhWs9Dp2Xs7UVakee",
  "key9": "5PSLqUAWVGETduqZZ7bnRapENXMYzKXZV926VUR9gPMqn2JX4UM33DofzFwuSC77FLJ2eTK3DS6YXKEyMRr9BwW6",
  "key10": "4bvq3uJWj7rsVzrFMccKPzxjsTV9D7Qk5gQsNkgZw5bYp57b8jWbycGm7DTksNT6dx7tfvXruttQE7bcYkBKLGn9",
  "key11": "2yjaPjoYQ6HhVsYpvVxigBt8YrfdJ5CQvQCjMkLBzywo9By5jrRGLHQiXwQ7Kueo4w8v2QB4r5yqWBGVCFSJSvRQ",
  "key12": "PR2nJNWmizEbX9g3YoAxFJpQcCbPxAh6tc97bvrBqTj1Eucxe9ir1KQtNojYYYqx4Bx2hLYfEg2RKbCWEdpNi6n",
  "key13": "4KBfqyg89z5d1xhbMAhubSYqk6vDS91f5JKos2qiQjcgaPeBaYUpkLohMu3GpocEi2A5bowHWiLEw5mM1kXJeqsa",
  "key14": "2f7BuYJjkPrv4oi11As7XnBmrhg2ZKQdYFNnPAdMX5nFSV3M7F8Vri37Y8aXMMSYmk7JSAoy7oYbDbaMbhoKoYRN",
  "key15": "X6ZjzSFdips75voKnWRWrMP4aUccjeYQgHVnLxeHzLZfw9dvrdg9Sr2nACGvsp7shidfunZGNZJ7WszUJJTqqAC",
  "key16": "3QpzFVm9kVy8h1E6sCWdEuViBwzdFGjdzdKuADdu6T2ecVRvoqF2uuiAeNHrFqcy2YyKmNkFQfLTBiBRDrXNpAM6",
  "key17": "2iLYRYXRHTmT6PdxYgn8VHB9ft4UamS2cVnUBoiVgnmuZGf7Sw4BZ6UYSG4EoyC571pB2oYru7r1pcy735Q7xTec",
  "key18": "3Ai316FLZkWcN899co6cuNHBx5vhKGJA2VsKbgahv1vgr3KuMGNu7BRU4Et9r2zz8vztNnKzce19zmBh9xD3Ubh3",
  "key19": "7nmyeizLY2DtLJQhb5avB8hkkLyhWsq7AjWqkzVHK5dq7T1uoPa75PY9cjMKXBX4dCdhxntwXExLXXfVK9of2gm",
  "key20": "yZnFgXP84yiH4BheW4F3F2Uepxy58pcMSFiK5sUKtZ47JHPppmoSkw8yYAobB5uosUxqvSFrbebeSuFRkmp7RPN",
  "key21": "3Yzv7hQmGKWNRWcwtAovuUUcS2igcKkYKatNZMFFwfbHmBRHMrUcwC3M6QpkPt4B6bBmjXN453MPjMgBE5kmcAE4",
  "key22": "2bfnSU4dWxdJe7Ko9MzDabRFX1yYg6mEr3q9STA9jP5hQsmuCvimrx5StngwcYP1CUt3KPwWqUq8Gt4dPthurhbc",
  "key23": "wH1xobP3vcSEjxDLnL3nFnbF121XPFotyLjXaRDHjZqVuWyyiVXsyteS4VB5doDqiDyXXGZ68kE3SooC86DPCVx",
  "key24": "5n6NsM9zxe6SASRWEC8qxz1Zy4B4qs2DMb6p3wq42VfcKqeZ8P8XYrfT7F7AGUfbzCazYd9RfvBSKbLqjwpwB8S4",
  "key25": "2RLwjs6G9nJVcnBVKHYP6K1J7x19HSYdeCbpTrFci7nkLExjxyXAT9Tg3jEB3Di5wp8WJVBWHoGNjW7hnd4Z2PhW",
  "key26": "czuAgq4nWBC8nqcjpF1N6jKHUS4HeSWnz6yipTphyAQVV2yFBdbaZHF7EnTf7ByeCGFti3mdzSAQT53aj2WuygK",
  "key27": "3HYasTMegnBJWHSHxFzJv24KkrKRVMRA8C5g4S34uyJLuUeJdrjFFxxGzrbVxjDBUXXCSSpizc71eJ6fm6ehVYHi",
  "key28": "L7yhcpYt58pFDJKyNuYxLXSLAmMzttKk65HepVfHavfuADCdGVHQ1UDXZS4RBeY7Rhy94ifYkHatXNzCMUU97fD",
  "key29": "3KMvjL8xP5hXnHjzgMxnMVG5udLbmYzT3tEqAg8ChzFQsM7zfxNBTjeXTWfj7ZYMfpYhFyGBSkyEjQscgxFHETUL",
  "key30": "4iZ6LWmgyYVft8SkLdqiK1U2MztbofcHwxCZFZnCSaTYbhhoPR6aF3T8aWyDVeWrmcY7xJZymmc1nBS5rALuuTer",
  "key31": "4MwPuPVmai9wo3C8XdZsVBZVpPxiKWeTQ3tykct4Lrv73ySryjYXUESZvMk6wAFCdxX4PTd6iG1tDeDwSCwrxznU",
  "key32": "2RcZEtbZ1bhMrEWksKCuQQHcjzc22kQdZnvR6RjvM2CsshHCfdTGq6WCgk5M124gTenRpj2vzfpwSHGxK8TUKBRg",
  "key33": "43e4Ny6gW7cDG7GeCYUPSBQCLmDKkj79S3EYJN67y4UkB8FUtR4jyzscsrZUuMZeVK9DF7VCSdvKtiLmhP7snRcD",
  "key34": "4U5ppDCyDso23X9XVkvXxzMQczggkxDbRkd8V5XJck4guxqKHWuuU8VuE4i82AvSTMQ5ZFUv8F8s2n5bcPCF6Rxg",
  "key35": "5ZwKCgJPbiNtVQUFCvRHGDQCarrGLRjnHuHNeHrPi86oj6uK9s5rqKHADasgcbx8Jw8MqEkB2aeSwzCvqCPWnArw",
  "key36": "2jAghaqkJjwmYfrdxr4HKi7m8jvt2vHeLDf1hL5hvaiEt2ZD5HfByNNfbz8EAT87595ErUmjNTFWVKxDkRW75Sqe",
  "key37": "scvS8Lps1qpyqqc7y8apXdwSwgTBWV6jPQkhxKFBJeFZfqXSRfmqtUtLx15PY4AvQCYLM6huGK5nPXdAQquRTaL",
  "key38": "63LbHp5Z3nwjsUcwKDuQcUG6a6vF3Xeg261gmQgvjzyEkJJqyynjj72eHpr5KGknEsCrXazYhyNFkgF4PiEeNy8t",
  "key39": "4qdvLZ2WATWpZpAFjtsnKogrNC6NvtLyeqH25o3T1ZpAAmr5F7w8VQaJyFeUcgEZTX8Kb7cws7bvAuDq2Yf2gWhs",
  "key40": "66jw53uxqXEbM3wiSnoQBSxpULqz7tV8wwSCNL48hSVLUXu9sJx7eE8ifHtGJAVfnnXtS7dvwZSRFeus7jcrio3t",
  "key41": "3a7md1h9agVjj1pxBVFKoJGLM196UD985RFxsShmWfKMy9JojnTSsHQQyFGyY3wPVWxTiPh6zXMzBAjZcDD6LuQ5",
  "key42": "3ewGj6DvX6V14SWcvgo7ypChdnVP49yB3A5XJeQ9dthHPee4Hsdn8nuGVEU8HMbD68aJfUsUuWLramQ1T3pY7uN",
  "key43": "3CVgQUoFqRtSy1NcNMvrP5GJUUBeu8uasryivpF8HJx3DjDv5bCKZEsHgMUAzDmFDfPpepZ641jFpDpSKvZU8sWZ",
  "key44": "4MfzyP8uPV49buHvdurFC6sbKddowWBJLF4Cu2SyscPXAqf1J4rTSHC6U3rp9vn6vVUpgtT4ka3oN4qTrRSCvruT"
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
