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
    "2Q2aSB8fLbekxHZFZCwoieJaNiSRyRBbTCscCcAzBKd77yh8bhEFwozKvvzZSyHTJM8skVxsKv2bRTEqxw6hzXJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TmmHjVm3NRQVRrvGbF4YRuzKrqbegw4Esw5J5YQgU6V9UFp9cp6MAQ3FB7VDaF9hrffERD2GiKfiEqudFpWWpAi",
  "key1": "4ZWvo3ZDt2Wq1gX2BYmCgYMNsP3MNzAEotFnEPcDZamgabdh18L1uTPB1j1aB591ThBeRgmBmeNe7ocKiYoVK7JC",
  "key2": "FD6Um5jx75D1uSvXqdjQjXvKpgHxS6pYJ8crg19nh2bWezKbhNxZrW2uLePJ6fC6YpovGHxJyyLbkF2UqvYHiym",
  "key3": "4GuYKZTtngUDvNc6eYsvCD8p5WkyKUnNzbvEgnU5jHGrHYPKHFHszM1WFHQhPRYNzD6TBt7GRGmkLKbWruKMfP5K",
  "key4": "2mkVXxb2ULqN1LKRULKt2Ybj2QtdFEfUSw2UrWapMuxVwgVxpw2UnTg2qjcqgHaatHYaYiCzKQoW8iUZLTfMtrQR",
  "key5": "ssNKrxMnmhfPvLLD2t9NCziTJ7fB3mUyHAiTw4epuNy5x4oBUG3piB8WNiQofHR15bHMqXEdwiRZPsJxVe72Bxy",
  "key6": "2VnVCCqGDTYWPrMwx8TFwJHayUyJFA7HRUeS9B9xcp58Ed15TxNkKsN6GVDcLNXEwsB3aqmxhyW6Mi4trm9i4Sm9",
  "key7": "3J41mMJdVdbAEsMubZZpoHLDdPyE7jQYQUDgqFQ2YkjfU8Xesyg2Rjab5fPTKSxbsKJQuM3rdQtPCaMNSwFHJqXm",
  "key8": "597AYnzxLQrN1XoJuJwJ6ymHnbHx7vx57NvCBhwy175eRZ5qyASQXfSRdbgeTRa9LCZQtfd2Eei9sscRbJh8WNVP",
  "key9": "5EV2V8kpM3bspM5mWRvzm21tPJRFVwPhA3TYXNHERMbyvVngWKifmCm1sbRQ4YC6kbxwvSZDYAjhvDzydqVbdiNq",
  "key10": "3C7D6A8s5QfwTJfTvfrP7exkFcsiFHHBAShio7vnJqGcb27ysjuZvHdWZq4mQtzhq7NbRfZBZfRfqzabT1LyMj7j",
  "key11": "2GkyxVUpc7dZ86uDhJHgDv5aQ77dfW77rcWHz2FJq8ocE7Fc617xsu7b85osSCjQHLTXZAq121Cipjw4PmnDx1rA",
  "key12": "kFXZCotUG6N6p2moDoGJNvj1b9AAtH1Pe7CVm8QmXSpvRQRj5RBhvSxiVGJ8YGCcKyoHqrV1N8SdZyTgvwJrgsF",
  "key13": "Q3W7qSCTnL7Vx4gU6jPwX4v17SGhMKUzmRNTm3bbK9jZegqh2Kzhh9yf1AfWRnes3JjuXpunyGxAf75rzz87cx8",
  "key14": "nHxPmfrJWsMtqiDHUsbsKR8dd3sYJ9Qn1yZ1cWu6PoWtcynQ6FZWg6qaJfZw7SLewisf9PwAzbRqqyYLNHKqGgc",
  "key15": "4Lgh3B2rUizNNVgJEDhxuapvxsVttEkVzzpAYkEDGpaupLg3PUcsqNaT9bjwGrXw2RExwo5gpUxepuZvR9uvC1Y5",
  "key16": "3QXwnkzYgxJsHqZaLU773BbtCbGeJjhr5QbnL6iLjcTe2sXuoVpPWphZRpTJTa2P76eNgGCtvsn9gXiihnyxJToY",
  "key17": "5jULwxm9SMoqMwi41aHH93ANhjBfoKFmRBfkUnfvjfWhKbbZ8rujg27osdKoUfFfkhcsGKNnvSSdyCpkUyELSM1n",
  "key18": "3gVUJbBNrXmrhyx3tvyg1nyaY1Q3RVXX5bwu5NwAshHEj4U5P9ZaVMdrnNY8oqm6pKLydWTDszu2i5erbdHvAC3m",
  "key19": "5se44zhv9aRsRVpekdxqzziNcg3QLtir8u93V8gTN9E1kcQpLeRdsauoXJ7EK8aFammBFc5vp9NTuw1b676L8quG",
  "key20": "5ssyz2hPt4y1JU7vncAGirpwQTKy7W2g5U6DBVieASwgrAAi5stVhcM1we1eAffHSgLpzZQUXr3kEyx7BaRBpmSH",
  "key21": "2BdRo1R7oi6Dzy1VUAsc6qaodpvDat9rJN2tm6xSmHQkQ7asrrvBQSaVMzkQKLXoK9pJ9ZYqLJFhNV85YqPHR4Ri",
  "key22": "FKFVyPVtsNst35XsnEx5Gr2mENmpHF6tnMZiumgyjt8zCeHhaE1xFPGstAoteNK97rkwVQkbUhw8YopBY3P2RgR",
  "key23": "49wTfbLr6e9kZMK2ynTao7QZJWFytgKXHRJjDAooQiSqXSxe5rsLJq9U8ZLuZLGUPar4wuAzaWZ5tsjKabtjJpb1",
  "key24": "3YyKE19GvBkoh1R9vjfjec7xbpz1mjEn2iv6MaSigX9vov4qAPSfN9qvGBKDSaLJcZzj2hioc81wyXAM5D4Jt1Y2",
  "key25": "4XLuzHqsXmTx8RAmZj14XackwXfLXPBYLPQWsKLHWwZYhVZTKcPekX2A4QKfvP3TxyFg1rUwXWu2qT28Ue4MAw3P",
  "key26": "37gKc9VCRiKXUPK7xbiXUEfv35cmZJf24VVM9UaffubwUq2YzhFennpKM1Dq6hvFC5qhZrjqMNtZ4oVqZ52J4vmg",
  "key27": "3NqyLrQqDuYVWRurZnL1FBfNXwxGipqi2JLJaAAhRERHCjc6Xkdd9szDNKXuSuTF44fEn9YDtp6UwW7Uirsv1rS8",
  "key28": "2cCUtBstmNRSizULHNbczUFab2QPCXhU2Nnq22ADHKTkEMp1qzR9NoYqGrJBwJKXxg8uFUirJjdv8gEggsmf879",
  "key29": "4Wd3kECMhwSmqHNTmgPUZvnmsVeZdQvUvEMdVR5JB6oamZtWRoVhNVPzw9hHhffJHjGCtC6bBNEqNK9xCT4Y66FU",
  "key30": "3W1kSTVVpjgeiAc56UKVvYb4kjP6R7ZhJAtnTUckzseFf3fNF7xi4AJwMMzj6RPLSRYvDJ67V7rmXYcNBwQRFYK3",
  "key31": "3dYZjCUCZvy5D6Z2fdZgfzx1Dx9L97DRGNuNAuaiJSMyTTqnPEDfYqXLdpmqdxcW91nhW83bZSZPdP6TjxiusA6w",
  "key32": "Humy66ydfvkwc6gF8dSJDd1nruadTRT8415yN8VvcCcziovhkQ6kLM7Le5wF8MNgorSFBBKs2YBh1it1eh1SdRu",
  "key33": "34D3Am7zGvnz45b1H2EQExWa738ippz4MXmvV1Qn6G9dHVSGiFgjidQ7ZMPMhVWLPZPvgw8Ax2C4wQmQon7WDf8r",
  "key34": "4UUgnJ2v5RqhU8Fkph1S6pMhcfWXNEquoK7x4SXTzsNtFGgo11aKEN7qr6Mhskwsg6uySicSVTBrvwaNZWVynCUW",
  "key35": "5jESbSfgzWnufWDXC7msNbHu1HYNDWtxPxBJsaM7uUQmxWRZG11kitsKRRtC9eaF1aCtLZQw4Jm8DdPbJ4G55gxx",
  "key36": "5zJoHqNxgvKGZXW96ibLHaaYGeCodHFbYx8Fm5AYdCMfLbzwa8f9rA4686mzDGEPuB62YWHB5nWf23vBRS7NcGLh",
  "key37": "4b2FXCG1wYfcyUsfaiVhC3w6W1XHcFtwMCyHChxC97gUPhLZfbhFPh3Ax2yaFeud2tsgMspLdWRHRm597kk5z7qi",
  "key38": "5KyQ3cn17xkVFdxX4dMXTz77QiXYFKYG8Ys7LY35iyEVNMTBjyXVfJSWGiNcFF3sZkSh7Qq8nHqAvcbKRJohta17",
  "key39": "5V3PqDxgQL5WkmtPDWhg3ufktL1ZuLSZTcNLKAzfUPb8cZQaCg4qP8uWKA84m82vrCqZfMBketMH4sHBWAYejSAY",
  "key40": "3QLAn7EUVwLS4XFJZ7GEW9WtqEYmHV7DDrKm3Avzs8h5jCVKb5RAWV52DEhn1ACTyrAanxgTciyYF5VCUDfCZZ3D",
  "key41": "4sDaao4SxUoxesap9rgr9gQXxmnGESX78ZizDoVK2sqPHbRNdBAvpfbcTQnJaKMV3wL6Xz6HQDSaVZFrTFCLqg9S",
  "key42": "4LKGxcJvGCGz9FutLmx1RgtMChpkn9gyHtK9SSowEgART5bYDByvPVz9syKRZeATMJ7BxmNYHWL8PTBJ7eJVYsBT"
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
