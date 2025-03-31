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
    "4nYJJYUMGSuDPniRZGa3VfP2zij8LuuMNknby6QieGhZvv6bNW1t6v4EkRJ1WuZmjKgYpMb1WqDxAvhXGzLq97W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Q8k9zSeUcVNSfNwxintNFsw9tqjKUxnPEERoB3mfyoXLM6PfQYzAxpKXLzAch7qnp8GeTxctN5L4DkkK5FFGrN",
  "key1": "3fxcxP7k1PAzWrq39ifcofMw8xSpjUNjEhD3no6j1yudppwJLgguFDCMYchWGMpYSGz84K5eThUvZknsp5xtwexx",
  "key2": "5MGGzBcTay693Sj8xfC3dqArhid1GasLcq3nSsMEWzgYcDa6oR4GGUJQ3n7fTNDU6eianuNtmtnzfirhyxWGPVrw",
  "key3": "3hL6egKpf9rFXeWoK2QTkJCggz8ucvm7qRuvzoLpRtybtoBUKip9yYbXAhEXskxGrM72LRgCkCyPz1jj4qzUs787",
  "key4": "32BgL4JWMGErYPDNpggcBhrJfBQ4JAfRt2628iow8ixm7Nn6LnGhHhBEhcF7LVzv7QHP7XjYEAX7iYtmKMWdGkHE",
  "key5": "4AEiL2i1pWRaS5sbhRsDqyMaBFfBjcPYpNzBSBcE7kMVH7RBuDsuxAW7f6SMVway26F2Mr6bUChLNAEcYKBzBxJv",
  "key6": "5dGdH7b6wQzMmDkK53UV7yKXNKqqG1RPCAgJBoUBP1D98BandDeEBExFNxgPjBunoNPTDwZ3fUXtwjEdn5KWXhhd",
  "key7": "H74w4BqbfkVaSxPuRhZXHXR6C9VjZF31FQq3FW5wkfLLozyrfYfNxAuTTiDKFrFeQmd7oG3RTGFRJq8s4N1TeUe",
  "key8": "21pmZQau1o6pPRcFhkpdYqxjL9KoDYtYDEcgpeV9pBAHa8NzXgxjZkGW3VrMsfcWFN9ZaaqNN1SHds6uwfi6DdJG",
  "key9": "4d4wMkXZX7TXBLtepy3npwAKmyDRmGkSBe62xwnHyNBs9N1DffPWdfquU6i2vK1DX5kLcFkyfgW5UBHAxSteS832",
  "key10": "4Jiad9qW14ByxcXMkLRBcvUyKMZ75Qo3NKoGaqZCfrNKD4WyVhCKzMk8K987bTLpWan9wph72zZofovmrWHmfgVR",
  "key11": "3P7BQ5N6DgEvXzvUysD33z1riko4j6dkGVJ6wWQjYGbrpHmjKFyNozLpjbDZZ3KxPrbb7RoLhpnJEykGRu7fiaqu",
  "key12": "4Y6KaHt5TSgvG4rMrRJEQMmXGaoZFw7Da17uvo97Jc4jVBiN33RM8CmyFGKHf9GYsyEwS1oM3WyPnJnGuiBT2qdf",
  "key13": "3gFJDckvMhCBnRRQZWkm7GckCvBTy1bE7Q2X1m4tdkA3oWvkyHSBe7SEQHrxTe6tcTptBv4P5mLYeymiwv8SyqiS",
  "key14": "65WxPbHVZf7W3L895Bfjpdc3SpVKCtTLxKUoeMbaUgxy2Mx7RwQkFSff9CpKpi5ydGZZx3tSwfsQijgtgWo4VANW",
  "key15": "4tTctgx3L3EAQqvA7aWAPo7mgZ3qcawgz6iXNzxWqFJ296Y4eFJjq1WUahgKBCQUN86ExF4YeoWMZhSRXcR8S9t7",
  "key16": "5FiVuBrQBuNPy4UfxE4dfzKKqNqJpQkLPaAt8yTC72cTK45936WEYkaeNtL4sZGYZni3h97pbqScfLAeU7AogcUp",
  "key17": "5V8xdgS3ugxA29zVJntdUU6CNvtPNCzqqvUBiRuuyRkUAw2kmDXT93Rxm324XppAAnLFxAJAGzwBdLdTQJRXkc8o",
  "key18": "qNrDi2vxE3NwMujkfG5tNVP3nXpjJMtk86tB99uaBzhgeTBVvRX7m8YLNjXjT8DkXCkiTY2EG7GFEkmyYpJt8Eu",
  "key19": "3nytS6yjhh2ESHV1peNcJNDp9vpgZKibnLkvSoz3gCXqbJkgXuGU2MVE8v2QcGpepmLaRBo6GtiXz2Q6hunpB2xr",
  "key20": "DGk7VzaUtiVbhSyHbpmiQYCmiRxssBHMNSLS8cxruft6Jv3HY3AVttox4X6DupWg66SnvFveNQavHyevL9WywMi",
  "key21": "fks7BppPFP9GsRB9AY5bAjUv4izn5fHHv1e7JXDjiFnbuREyVpTbDcxdjRESnLbrg9yGvnQyFawT31ntFxDjru9",
  "key22": "4F4TNoZoTbMAZAk4a3nPnRKoeFLcyEBpQYPdppPZu37Hu4YfRVGEHov41zK9z4RB8Vytwzr6kz9eA6PoNWeWuwre",
  "key23": "48XGL1az2ScaRbnBNhAKeggKphwo5JBhRhujU56mxkuUAhJ8ZYvMnus4YhYpZ2Asd2r1z4EGpf5HfKnV56z5F1Ca",
  "key24": "2DQWfLFguPSYpZ78Fvi5vYgeUmAxmRZe5QPDM2E4xBXiAwoePq8dqZsTrmDFJGqsk59ducQnYfCuzk8gv8HY3ihb",
  "key25": "3ZMa1Qfbio5ma9mjWcLXHg39hr7vopRwVn9Pnrhd1NWexeNbnzaZpDJkCeQQLQuM52nfvNoUh195qooDwH3F8rER",
  "key26": "4P1Yzr8fzH9bszNF1fG41W9F6oACQa6nrfiT9nuUDxw3GxBHGFUryhS6b36P7bQDgrs4ZVJQzAB3ruEt59MUTx1k",
  "key27": "2QikQym3BKKph7D9w8WeA6qELVdcCQfuGVpKMdjK2fGFkpS5SYZRcFEN4oMSLoDWcT5mKmfxJx3RvAq8jTEocw9k",
  "key28": "3AdwHqMHiHfupF2Be5R68DTEPTXu6aZgWeYPZJwZo11obfDd984SgawkUbBPNCj7W1N7cjawwBUAqPhxufbQBWdF",
  "key29": "53VnGxXBwrWFDhAi5KAxUf3NJaQUhh8Qrk4Bgd1QZz2YzrUor8Y72RuUhzSKDTfHeTUZkuL5bRQ1r1xj9JyrH9HS",
  "key30": "5n18M53wSJh123H2wzfd7SCcGx3TPrnqKHLv7w8NHsSdS7MF2EjYcTx636JKEb5eGZXTPEiKBeUQjz98Gx9mexhJ",
  "key31": "5AhNFTP1kpi65ap2qa6jnkNai6jxbErAzmtoqnGtewPFK1Z7rF9F1ahS5fYSJiwCLvRdy2CtSm88yQDNZ8yQ21nJ",
  "key32": "26Wj389pSchA54iRgn6xiwGxmGgscKqJD6eeNH7BJHYnPHHoCHXudja8Q2WpUPNVL7MXREJ9Voxap4QwK9i5SKMx",
  "key33": "3tbuHz2KGJwPjG1XgDcdwMrZo4Rp5fCy93hwtdEcqKkrx2zXZQDUaqE4YA1uZ7AJc952ZXrex8DcUg6GdgYYppXV",
  "key34": "22ALYmazmfpnczNw1tevUfPB9vnKRhD6Ww9MJ8EHySwwQepAsfThYTMyQB5tF3s6uq3wEpcx4YKeUPM1vEWztdE9",
  "key35": "3rDZ9vRz62pDfg89k7ZsrhhCQjyWXDJkUytSZYdvNbrR5TkFAedc3zqERxcXa6VxzYq7iXXEruwCJjQATkxtr3go",
  "key36": "2XPp9HDPo4fG4K1pjr1HYPbH3k38xBA6t4BSA16AaqLBfAhJrfmp33PWqHopGQCDFdicahu2EtcV4qA1jwdZJDu9",
  "key37": "4Ns9VJUYCn8zmfFZD52kycF6G7Um43SKhdad4uGSXPcsmCugBMfSkryEhdRdtvnNfmorTJngT9BhhuEWfhZDQVTG",
  "key38": "oC77M7HB5qJtfLUBcFp5nLdeo6WErk5auSZQvT44iAiHNuwgbjwrRE4k7EV1T5CGFYFHyKVC1r7CmzHs6RGG9Zb",
  "key39": "3q9s1CvfQfkbRcMhdJNFzDEKVZzc1rxW881FT6u4RzQNJYRhWTDovUaiqRXLM8rXYXZtNmegjyEBA9fU7GSMtkjz",
  "key40": "4o3ejyxWnUoeHQvj76m4coZqTqsPU8Zvi6eeBM2Fj5yg8qBgC8aJfCoFozw2NXGzAECQpJ14SzAue1hEaWpfbqVG",
  "key41": "4SGdqR5PefzugqdXQhcgYZP4bDjmNZXFujNEk4oH4Jp6kjXcSQiVhQJoMoeLxSgwbGcxAN2mrj6BgkKVHHg3d1U5",
  "key42": "42r4LVN5ur3FtWp67EgQJtmuujL3hYVSGrG4poG6m4BmykWSFX5hs5wvkwgRKfpaxr3tiU2p1ZVbEHKUNxfCxY55",
  "key43": "4VMm8EDw7qjn5e75dKALMg97GxKeXTmS1Xx8A8zJDV8aest7uoKDbcnX6DvVdZc7MyToZWgWwXaU2DhxcjtdkuSg",
  "key44": "zLxnJo1SCnPqA2fR82k2vtNyvm2Yc8yGCU1JjoBDjHx1rxUjHoMzR5GfwhQeByj7E5T8CoKoHWyq46kTfBdVKsT",
  "key45": "g4zXA5oo4UuPWCvQNSC9NbXiGSvLCRxpxjFWrm6Wujd1UxNztawkLHa1eAoPMQWQBag5PhMkWnCGc8iAQ5oGtxY",
  "key46": "5Bak4tqTuypWXBk7rL8DidRFZPgPDYapbaQ7jyoNygWRxxez3b3Y7SaePf3fF9G3S6VbMzRAQfRccaBHxCUbqnMS",
  "key47": "3WRz9bbA8QhuPTFRoVwjqUupk7LBkvyjvFuT9sXjSJRUgyEWAcfKJ62ExD2s44hfzvLXzF3TGUdDss6ApV3CMjyb",
  "key48": "5hpyaqiHyeoGHSyEBTxL6w2yYUtdubfoiEAZMHQqvF5BsRRPRNCQGrkdPJaEVbDt1vJhB8YW8cVy8MT5WUJeTHHz",
  "key49": "2nffdJxVqbbEqjBH5XfUXSNbn26ma2YWMMk5Pwxapsj4E6xaKQWbCoPViFWptYPKbNcLJL7Xp1beip64PBbm2cdW"
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
