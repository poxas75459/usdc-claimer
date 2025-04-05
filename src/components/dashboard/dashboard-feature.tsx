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
    "27eNKh6YZF97AUETZQXfkLH2a3HDPSxqMp8C1EcVeHeQMukK96DpTx5jTBbiu9k1NW4Sa7RKniXNwq8gUfL4B8T7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmUvQMYRdjxYfgrqKwGPieR9s96SNUZFRQ1iwN7QZpcgkhTvTimaC2fhvPmpJZwBJ99BjfKJCL3vn9WCbXh6Kp9",
  "key1": "48QyoSTEpyto14ZyNokYvQDLhNa7Yva9YYbDm2m8bUR5Pi4ix7Xw5Vgrs5jCcqEm6ZvxqHPmLfZTXy5WqCo1ghNp",
  "key2": "5Mtyod9xaQ6KXHs5sCnasXNkkmgEQESPPXCT1J6gzoQYqbhibtMpqSPtTBWD39rAEL3JGHbB3jdPARVsAhhhbGTS",
  "key3": "3KBPHGmgAv1HW2CGoiMP9QzizNTjv8EFyqfrndoXLJGUXbCN4soiirhw9pw41H9fUDE2Ud7BECywm5X1jkfNXE9x",
  "key4": "5eehgWRcJ8v5N1xxnmKSAt9EXURGy9Wjp3WfEzf1HZP3SidcP4RaRrGgSdJ7F4c9Dcv9oNH8BcKbjpy5H5mn3o1f",
  "key5": "4GipzibumTZ16Tu6y6u5CdCh3qANX7yPEqywWPnhhzmXk3J6L1ejJdFARfVq8cmj7QFyd2KmBKtQ27T6mr4gzPM2",
  "key6": "3WxEQkDXrBHZ7irSqv97cKfDXL3YMqxEu7hhFtkzDfAsdVHh91FGus1PWA8ZXsH8WiwoLtrdvBukvgWJkutTDzbP",
  "key7": "4NriGqiBUsPjVXtXDd6uX7Lj7eJHYSkXJnbqkJSTLKPAMkecuGXX8Sn5B2r4geAKDeEP9gLkLBWgxMSs6yCZqprA",
  "key8": "HjV7V8pkCEH5y8pGuzv6nq7yAXzRh7x3XLwZq7ruxY58DPm2VhQ5zw3PRuaZvp64SJt3eK25j8PybwXfDW4qmKs",
  "key9": "CzXrWUTpKwhVGWqiMTAfgnmRqy6wUhjUHhxWumPSqNtdNhadaVhmNeZaABHccvYbAjz8zn6jGjgGxYsuV8EmpV7",
  "key10": "3SXRZMx9N6N9xH73E3fm9pjPCzdBRE4zWBrLXNPr8uhP77bUaT7n6jiSJTHrtgMQJUuY1NmboY6MZBoAnazKsZzQ",
  "key11": "5rMNwuHd5symV47ttM8vz4d6Tz735SEieSgZwqDy7abaSLtXgU2k47CJHFgnBFKWo7ajvw2wXwLoYErxBkfyKaR9",
  "key12": "3EyMXCj9g4oEZGexP8Z9Teh3d98qzzzZxkJLTEVMG3KKtBgMSen7DWzMbm5KLqGz6wVyWTu7YtzoDSjAKas3Nopp",
  "key13": "Ka3GxNyTDBatTkimGrUw43pgXw7HXLNe2bx36fszjLZxpj1HW9an5BkCww6ZReX7rWz6dMQufyP5CSDrntxn7ji",
  "key14": "5CHq7CAFcSQERqagj3HyNPXsxU21yQX4UvZhamDauUUHWNsyE2S1pQ5k8ESaNsuRwdkeFMgSfKcABfcXXccuDoUj",
  "key15": "3DVnQKFXoLsT27ScY6DjnHUUkwMRWrAUVp4DN1BDKoNwKudvkWs91Y4i6z6uzK2qDDaoPYM6BwxNmpTuKiKoCqEj",
  "key16": "5GVVwUntjRNte8Rs5kY7jNFKTFz7Pcf6e8sex2YtgDdLKmNNY7Lg8toi5c1j1bofzRzPd2R2Hz2YeHf4damZeN8M",
  "key17": "4CR1DX6Mvjc1NbxZyBo13mkHdWqFpk8yYogciC8XbvgNTdotWgCu2H4VDquSe31zZpkRYDUzNEBbMiMbeLH4gRzD",
  "key18": "UWDhXDbjdgMSjYd3yb1tcPkt9Vr3VmL1BXA6EaaFhAzopzickGjTpp7w4q4kFEYqtrfTbg2Wc8oip6ucnmgqsSb",
  "key19": "nZxhRc1BJwX9iMZdh7FcDTvXoADHVNM7ENi418Hid4bU6U8fpoHftAncZr1QjLDHt46tEdinAsfvx7XbnUWGdhd",
  "key20": "o8LUhRtAFVFpcbcYkuww1EVVMMHBoX6N56Bef5NTc6fNFRBXjtS3stzg9LYRecdjcPoScy7rRqUqv5kuyEVkNXi",
  "key21": "5nZJXbFsrMAigvCdiR64VLnz48GCZcsb99F3JjavrB3mgFkzB6WJsRiYyGh2vi5UtioCX3kuFq74mf4SBTPezwq4",
  "key22": "4ZNBAZL3q793ep6M5vARu2ctZnGria8we7TkNs6Wcb9DfUrPxNd5PM3A8EKUzZB31aw8Sg49xqSf9XXXa2ihmM4K",
  "key23": "Cd78rzZ2qh2LPSFZNvWb2AskYsJp4Swd2qREDgD6dxruHn2oUjmjhNKW7Wwq5n99fUaR8eeKtVC1kUCTMTrUUWi",
  "key24": "3J7f8Uyuu9GJ9TVibF1MShVGPaWfohvBewKcMjwFS64besji6JYNbGtZjbCnQFz5WDRQTfuzch4ZhK6rBsoCyAf",
  "key25": "5jUVVUdXnmQTw9QcAqtYsz8vt7K9Bh4pt2MX2U7A4WchdRhmn7ySbY4HYZmUGoGDuAW8s3t3KcaRudG9RobtMWqz",
  "key26": "4CJ29FEXRUZeJve2yhhgLf3FJHa1fSF9jiVmNJXo88gg5jJ14yJXcAG6SdBBfD5GE8qY27xTCPwhYrzm1WJHamvy",
  "key27": "3xvpq2z6D5g1Fz7t2wkjQEXX6bJTC47JKAyhGX9bTyJ7HWJ5PVqZWqhjrzdjRJAfJLnAACBG2Eo3De3ZXL7FNSu1",
  "key28": "gSKkV8CcXaxYzUWvkuGmzyVjsby8Fbx42F7kAM3Jaye7NRmrGJVq56Lg8Fm5uFnx6y4MX6E54LY8J4rWRr3Ae9i",
  "key29": "g41Q6iBvXvBWgAAgHWZrJGBKVSMVi3simYZCfEv6MGDjJ54ozwjGjzYp5D34vRh4cFwJZGKURws1qV1ox4po9Xd",
  "key30": "t1cmhTXPHfXhMTTgZhBN8enwMpmtJKZqhkcbqZFXYMCWaBea727KDYAnd22xfcnszj8gjQASeybfxuDUu8gPcfU",
  "key31": "JoyiA8QTLqu3LK9RCRVzGSB8dP8p8NBBQsNaLcvnD3ZHJeUvtz9hDDZieE2TuxF5ZXTJZSSBxi8jJHwDx6ABExy",
  "key32": "2W6mj2MoCDe9LFxLsYchS7fK9xw1agWxGLBTtUuEdn3aZ3whnPsdHjwtXpgtkEAQn4PGzpWoivvP9vFiHqw4BUfg",
  "key33": "c9eKtqTfDGt94SbhEWt6dRhiKo5Jj4a1eeDuBhijjiLEyGKYbCFHjg94aebss8etHkCgDiCxP62cZaDL3bCcvW6",
  "key34": "3n8CpaZDXZHgXK7nBtEw58PWL5E7vRaptmWzGMqycnHbootiuKcudEYEsymFUcVNApqiDZHvT8kVGR8jwxNpyQGs",
  "key35": "5LkkEBbAqjLNDWy6FQL8D8QB4QBAYgzQ3pXetSAgdzJywuYqYPjF3mkHgBhNw6rMn1b6jWZjxgUqGPx2WQ5dxpWs",
  "key36": "5FdiveMKTfV6CGBaoL1wCALwoiTerFBxWurfHZemkV5ryDtix53doPGktsHgxoPPTFrfDtp2dTf83fdDkkwMLZbU"
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
