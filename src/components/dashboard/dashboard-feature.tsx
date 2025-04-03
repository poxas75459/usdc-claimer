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
    "4exmd8PwjmQuiHTs55YosYkwVciiq4MkexD18qhSMcRP59kp1RoDticx3a2uevwCqejmE57Z5bFpdEBEojkejmxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NKupcaDmoCpybJWJiCLxufiNu7KHPd5pCxzbu8hMAiR32G3pr4QyxW3HTCHiNrqrCaoV1WPraFkV9gCek61bnc",
  "key1": "XFDy4M6H5pSztCr8auBaGwayrDDAKZz2GYrkzPAgLD3M2rRQ6MHJ14foQEdZ69HhZCxJvXp3ttAVzjAdiwAM66M",
  "key2": "4W1mcAu38aG3EDaKf6efoyHa61JoWDC4nByhzsbmhByVxxRa7VNq5ALL9TU9Uf7BkEo3GtdCdJUGzMEpyt1P6h3Y",
  "key3": "3LjKCS7CuymNoyGr89pj69AUwQb1tdDAvAm8BwPFQnU3hMbUeBsdzuQGDM9mNn6fjvQkfRNjDJVaCBghPAt9fH4",
  "key4": "4PwwjTKGNdppQFUzcJd6iR5gCkAzmBsg3b57vVHsFFWjhEDkCUS9WhrpmFNMiuyfowTwbr327efspETNs9e9JmFn",
  "key5": "4m21tVRBEyXrxNJ566RwAVQPT6x8NGBvCNAfG9dEUNwGwctBSjVTycoQYA35hXUJUJZL8nsCMxyk3ttifGHRNavL",
  "key6": "47Z6YZvAGLx2cduCQbCQeLngk5V1vVy2S66YwHHv21iftBPPcrQ3NXjEiTJup6yCTWsvucmhpZyE3aqgzBTCJTzA",
  "key7": "62YT22qj4QTqQ7NJDvrQrAKXxhYMgzvpdLdiKGS8DemNYtC3zcEgXFqusz4AP1rmQwP5gYsQzbAW825bb81Gncja",
  "key8": "StjynpRFfF9Noija6ERYid5ETctADoweEzXqdVHyTAQyps7vHkfyvPs8yGbJpQ9bDvQNoUk2qXX8LE8wJQ6gTNy",
  "key9": "54jrbtywS6qWxX9Qe8XDgb3ZEQp1MGwYzoZjVH1i5XQmVYsrg14V2K3zvvSYAfwYeyHHV6k3MfoZAXhUUofXzYca",
  "key10": "5dipcPHH2Axs3nWgt9k4XmtjnYfBbzS5eW2MihAp1HWebeLCFTLeTDx5X7yuiAPzjcp5rnu2sikmmecejuRsBiH2",
  "key11": "65Z4zzYP7wRJyxvUaGHWeK64Fo2dAZW3THFTxXxLM74ma1GbWJUaxreSm8NV1Vq1stnDn7Rg5oy2fQ6apQNeztPC",
  "key12": "3vHiAVxgeWeimkVPbcbzHobT6bdS1jbyzY28XqyXEevbUBR5qLtybESkhWJzoHwLQjxuxeuPBTSr5ytA1cvrtnnT",
  "key13": "5ckwpm9N4EVgzDWdU2trdczm2LVcihpH4LMp8mAK5fnHtPhFktFQsTRwM7JbWsUwzr7bN6nBtWZFVSrQHbGo3xCn",
  "key14": "Zr6yDdvbLd1VEuHECvMG6RPQ9R4Y4jnxTrrzxsGESr3M6umYH6R3cwe7BMDanMPn8DkiLPhLWC7tNJoExhwPy9d",
  "key15": "2rXte9NcARwKB4dgzp2Dfgz2pTZGf38mULa3WTf7w4VfHwBRWeCUuw6qRduT5xcqQ9BcHzvZR1xXQqfVZyLzjg7N",
  "key16": "5yZvQigXFwA6gio7DQnzc39m4eh8TQDrhG9w8QZwfGCKyCfmCVoTRdyaxtjyps1k6fMJNdVCEBRpP1Ufg9UyFLNq",
  "key17": "5ZHCF7mkt1fXK7K9apEe12YjT8uVxDu61J2SUmFHnuLVSBkzUbPx3u4EpJFetjKKJjikSJhCtANWTq2r541Wdzbo",
  "key18": "45BYiyASFz6PaZfbzBYmqEkyuMbfpY3vkaAqjQjDNRzhKX1c2Ggtc6Mts2mz9FZAGi1zp2Y7wJsgqcrs3RBNWAxx",
  "key19": "47SNHUdZfd3gqXFMKzFFD6uLaPAz1rf1Z6xH7NRUpouFgTTq1QfrFpxMYzTE1FeVbYhzKq1t4wDekSRHheXvYMpw",
  "key20": "Q7yQw1JmKY2YoinopmFcV6v6W4FnFZ3ekjqjDKizcT17FJBM8tnt7DiYPCT8Cg9ipSCmTmp1Mrbu58H4x55Y3FD",
  "key21": "2Q8BDcyoD9hkVCVpryejXwjuhv67YM1ay5jgDDqgrk6JPT9pQ5Wa2Ew3uSNZXbQHWNKgxq146ByFfRaUzLt1UMfT",
  "key22": "5aHXHwtN9qc5gkLR4CWNgDLK5TAK1oQwiWXMh9UwPbXC51NCm6Lri6UTsHqefHQY9QYsPUZMhDsVg7u7yLvMuHsc",
  "key23": "4AFdodmxycXeahkzc8Q6RdcrsPkRYM8ucj346hz1TqJfuqFUFyVYfQBSpUEcchXnXCzWZdGJeuBDSyKiTgNHBtqA",
  "key24": "4Bt3GRVJzS6zxF7yrqf9X686LzDNVb1YxqvFgzdadfMr9xuTGZ3SSgFmxLt1gFBDDRP84EFm9rgFwHRGMYjwZrrz",
  "key25": "JN98rU1hWuGJhVSbkijpu9WBJTceeVsRD4NMqpMQPeeREE8EFqVzNzdJJFXpyp5Ku3gihfPAGgvtA7FaXUrgbJ8",
  "key26": "FXnmhJASPhtqzWCG6nosJyAcZZrjvQqQ1JQotDGtQbQy7N5CtjWDbPJ2Z6uDrwgetZHBTrcoP8Fkzj97kArnYwA",
  "key27": "4tJUeYGHsjqx6z9AbeY9PYa3CvsJydJgao9gycZLNGWvk22vGWmjVsJrwsdHbZzQ7DhdBCUvJVNuWdECb5n9YF9C",
  "key28": "2cfFae4Rz6F63Sttu6VcMQc1K9RoZDbskpVwQa9qVRUiujvaFZux7QVavDuhnvdsGNZy4tuaNAFvT5Ag87kx2kUp",
  "key29": "22k1iC6KjMwhhqb9ap7sqbSKdx5XYT1E1VAH3D5HZuiyoq4GUkFYVCgbaPfztMWpAkcJS9wB6GLrgd2MkGgBn3wh",
  "key30": "33cZXPp4VWp3ghyC9x34fs496ys5zi6kDYHNNeLQoDvwB2ucenGfRcwaJhMRZ3Zy4Sm2Cq2g4avJax2wMa9XJGGm",
  "key31": "38dUkdU35ceCu1vwfGx6cZn3bECNMZYvxhykkkRou91kMkwsb7E3zMXVg1GDvvFwDgZ8XEx777Ga9hGJEDhPQMBa",
  "key32": "2zWjkCyg9tjsvA2F8vT2AADjy6nrUA8yUTUhzPeS2b57KJmdTkD8kFzzUPZ71VKDpPV9HJju7vybhMArecd899F2",
  "key33": "4PDqpBrhomjtZotYBVyRkDSdQxm8zGe45E7rcvGWFd9fs5MVJ1tudN7PKSwbAW63EmjZbnHNRQZrcHCXGZ22uJ4i",
  "key34": "4zp8cYeBrGySKn4zETsbWAxLPUJvowbuKzrhUvYTYpTLLNFcdQboiRBa3QYFwUvhEFR3DLhSva62Fr3PHHjVeVPG",
  "key35": "5rrM7BeEMq5jynwJG2Un92Z8DF2aqcrtoVZUvUEYyXdHyiz1ZJbjMoDRFLsRJjQL3ZNGKsyWThxZyEJipnQnS3dG",
  "key36": "2HbUbnvgyHuGfKWnPMM5D75fSNQuC1ama5c9hefWdpyc6AHvP6uhANJv6g3Ecsu7GUVNqTppUPECd8PFX6gyEwqE",
  "key37": "5LnH3ddvokEskA32AfwewkfHFx1KQfBDr5jM183PbfHYfobiVASaYMxDomrCFs2gt3XGUiDhLMWehLc3f6JWLdWE",
  "key38": "4eLV25C4KBZ6uNr4SBQJPFE1TomRscC2vGvBky4znf2HJCbNBKdZeeN8PXFktgXQbYSUHvCZDwK2BQnXqnKv5fjC",
  "key39": "4HNoK4s6dHfsqRtEVhUWR61K5J77yzSY9UfQYS4aVx1bv64C473BvhG5Ngx3uEKGgtosAcJLM6dj8bHHLfVU17Sf",
  "key40": "48jntg3Bp3pxbKPbi61SUAGGEHFdw4qVDDHj9Eed1SJknkXfoqfg9KigEoQmtTU5hHKgSSsNZ5WeEPctGgMpvZ3M",
  "key41": "56Vf13BKqYxZkmo7eUxQq6oUTGZZoohgbW7x1bG7sY1odGR6meQcYuhRgsiJgVVVsqBdwHV6J8mbM4RU2Vagz14K",
  "key42": "Qn3P2cGM7iSKMQAR99wc87MFwC4xXkVeiJBrFQDvjA3k6zrtVhqhMHbfifqmmzMJLKig9jCPvFkQqg7TyQz86gJ",
  "key43": "3iGNgRAf5uEYuZSaWRpLbcTFgJvMHitmtmUBCESH7CebwVnjiEF5Zjh2zeEDN6522t4NmfNhT2CbG1QwEqpEN93Q"
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
