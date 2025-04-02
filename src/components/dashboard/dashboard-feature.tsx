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
    "4PyBKy15BVTNJ63ZNLjH1ButnZ8HgoiTd6jhKMQroWobjRVP5t88dHd9fKWzMV122JpYCxMCzFCLpGTAPJLwGg9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVQBcJCGHWUMezTA9BpXpzbKZmVUPzoHNrfXr3YcRMPgM9BNXAkjpJb1TWrVCmE1R2nyhLrFeQgPTfKeA7AERLy",
  "key1": "3b6EfrcntwfbdwkutJYbzsyUEKQxrHJfNZ2twmrcsYYjUN5dZR2UUiP52Fo8efrwgcekqp2oTJLaBWkeif7Np11n",
  "key2": "3NpnUfo5fQP67g7WRGceYx5cu5yzUCyQ1uRmKu9NdLQP4xYFEe8deQBSm3VcCJm6wz1NCxMErk3QqTQGEnz5AxGL",
  "key3": "YdMee3hbjsFdq6BKwYr7ccGdSouwxDxzqQB19CgWcQrMzJionmEa2DetBrAY692YBU58n9tgaDHV1fatfwWwQuM",
  "key4": "4dGdn61hqkkLMyLjtfAodTDBzLpkuV6Eag35ezXhTusgvpCu4Naj5Wu3MV9UofyTsjp3uKtXUXe6HxBGqxaEZaSZ",
  "key5": "5SHUc3FNagpVZq7ExnpfvEkYW96V2wthDAjquN9zVtH7oETWuAHLv5i7r1zufk9QRJ3kG54GYtBrZag63dQmGwnr",
  "key6": "2aZ6YTY5x93Giu2Kzm8SsxcMgejVFWv9C5ziXM9LZnkeNqCtWQwFBFBVtcefoDKRheLdQARDwruofR7SAEp3uQL5",
  "key7": "59XTWV2itMcKaReyW1Fiw38GsZuuTJd5JqhFuZAGX9G7o4spk351uPfa7vbnATt16zuBJiMBri4y2QKAopYggGSV",
  "key8": "5KXGuiCfo43DxqztsgdQPAmsb8Sne24cerPWHB21nrte6SZVmWitNfyLLHde4ChaWjzmbmuaDrYA4FzuDToR2GFM",
  "key9": "2D5BsCEPoXGWyf5e8ZEodq4tTYH6Svv2Uqowmfyfmmg9NK9KMGf5NLbpgEgnNTFBMEqoskZri4xFgUzoMj39vTW1",
  "key10": "5JXqPzZcthaaamovMitQEAan8zp3jugojVWnGiHibggDBXgYF3FmqYkkrd39oEWpPMkbNut5V4SEaYzrVXUhj56h",
  "key11": "3szDautdTawgi5NjjgmUNayAuz3RVj9VvobuJNfNbgh7i5ERF4iBs6EqPLehNjPo86aGeKkHLbvjTLYXMvZ1UdoK",
  "key12": "bUofAqW1oAgrjdJn1w2vtUoQBSXcsmobTTdEvxpYdCDbr2RszNp7Xvc5jJTnEeHxCntxeqzkoYbjm2dkAEzCq97",
  "key13": "43AsHSYxcCokp1XrQkwCQwbPT3EFqxyda7uKkqrpaLcQU7pZWaAxxpxi7F1bP9TbMbGXgqMJv1XsT1zDGEwtw4TP",
  "key14": "3VJS2u91vKpe8WjtZGc7GqNQoR7Wkfx2NPBrwKePbcNxq2YpnFsdPpL6Mdhn7saEU54VMhdk3dLXPQiBg5enpgxb",
  "key15": "5HgyCmypvYAMXfUkztB6m36Ehry4bRYmQNZFG7qQymqxHQDShoeoGprqCMFSCEPrdP2viW7wBhDTjpcaZgYUMgZc",
  "key16": "KFZ5tgdKtg4MzZJgYdLwLVMZf4wfvGezbtsMERBchED3KfqTyyMZi6yA6kdEvtNpAgt8jpBEEtWFTHJo1ex2UFV",
  "key17": "4RwmMqJD9gBvkqx6wCTiaiUDHg52AqBx3EGGoFibV5rLtrjGPnA2hq3ubnMY3PoTYbfuyhxYB8oqfHRkegWCm1hJ",
  "key18": "48e4VBLNyiHiJ1qPopZe1ipyit6jWi79jZNCQXvYTysKnEnnjjwUhhN1itk3CKNF9zvZcFRr7LY5xt3fK5f4ZgzX",
  "key19": "2v3E1TZEBur77ABRsC7Zhtp9qKJivMrDupVBMCTL9yhLC7QkSuWJm1T7F5UDZNcoqdgkPGyh3Z9ZYms7hoV9fk27",
  "key20": "3qvA9R1TQPYWyom22kw2UiV1y4x7qD3HBUzkZYjfMR8eSJtiWkJMBCagf9RKhKLwA2QQgTYv3CdYu93X3HoWAiRA",
  "key21": "4RvAD9nipQsZ7WWZ1TeejHfv9buDV54jVZcuANJPvoGavGHE6SBHT1rxaka92bkDmVxBbNMH4gygBNx1svp9d6AY",
  "key22": "5p2qcLDC86TZPQozJ1iTq9cmeJz3vLCr6soDRPLSyMySUee3cuq6gjAfaDehMNzdi1PmUYdDdkFv4LnyobpDMVSf",
  "key23": "3DpL7hTHqCKsHXVWgHRjcm2bpXiY4AD8nGuDExbPwbnjHwupBpY64UPtXG2itu7p5i2ejWXjnyxyrW7eujXWxwds",
  "key24": "36yLkMA4Pqk3u4qvyYM6dHj8pus13QkrWYDEoJGaDRsWF9NAyWFaTPybXYzcTiti6DsMLkbtr6EBx7iBZSBwSVuw",
  "key25": "AGDVhYzHDBA4KJxy4wFXF9k5x4LMZmZt12QtTiHdi48z5UJjc6Mj2kNBrLecH1TBQvjfGMUmWBMmdNMsNQMmyyK",
  "key26": "Mfq2UsmGAQwdemexDHbe5E6kZmeSTAS6nMkC6M1Zq8VxQ9enMiUGmRZdZDcUky2imDdUM5ifTEr1UhgdFx8xDzp"
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
