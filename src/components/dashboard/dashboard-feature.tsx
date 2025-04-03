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
    "CWbwQzKGZfA3khS6DtKEzYkoWufZdVEFrwTrZpUn7qT2LsLgAoBuKV9Raqxp9Zn6kan5mijBbPCLUHetVZcUVrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbRUKfMVSyi9n23onSqpyFbRbqqo5Gv5Wo77jPtwGTGvigfRYhSVBHEsmFVmUcxiVWZ9rLh6CZWmupXmBRKGGNg",
  "key1": "4QSU6BdJ2haYXtu8AnsChWShatDEGL2UDnUogFjNuvD8EvmLdGjjLxAGg4nQoFS4Kgj3M5sEcLM9wcsXjPB5GGRW",
  "key2": "3zLqVt5kB5YuoCh11REXMks4yDfzhkM2xfknhcsxTjZ6nVmHGaQpqUyASgmAK1eUZqP7y2A8ngzuPZrfC2VCh7re",
  "key3": "31VFG5qePDvHvtXxB96rN3aYe3rxawnBLi9wzN6tg7g2L8r3FCWzyQpZN1FPXPYsu8zChUkQ8ZPXarbspB2owURD",
  "key4": "2efCxnDYN7oWWtqr4McWsnd91WjTMhM8AGUTZ1CKayLTC3biH3BrD4qJ9eZVXJ8nFKNMp9vhFukYsYhvsUTvmQUX",
  "key5": "2Mk2VcXgpTvb2BinvkcQixixKqLSJwvjioXqwnHhJg6Uq3E3ZUgDZumZH49r35gR1ugyomyjaEqAB9xadPvX8jnQ",
  "key6": "5dv1DBF1AmrRwV3S8B43kZhp68sHZ9KQNNVwL3kMGaBVYyvJgKjsQkU3QfGC4DsLXKa4466TgBJqBvyTPa7nXJ5U",
  "key7": "3REf4MbfWrrjDJkj8XiP2HNSJgHAJyHb3vuuon9awTjkBAvuCvpvNpwrhxt9rVHDQnH8byJsjVs2KYwLGWuTn2gW",
  "key8": "ce1Be6Eta2UpJNEzSiv4jpTTc4R4LEvtbmjKgbs1SYxi9qWEqsVFGYjaYUHb5oPdKZQjFdiiKVVdfUdW9C7YNfh",
  "key9": "3K9EUUhKmH3Ks5jjAZUagigNxxCAuSMY3J7pTRSLGyb9tC8Wt4XGAfEuH25hmF4UDrfwi5jsP5V62koNsXkHGMdr",
  "key10": "2bt8QMsVtKg7cT7CXCWWv7xfhmoZwigcQQqvyu32AzQJJvQRpi7xRSays4RV4itgBqga3CgJsbqLBrTje17dUTYy",
  "key11": "QKXu7Nbys3y6SShJrxSPrm1nMW1YSz26NFBoC8XPrnR9JD3j7xBLaKmWYTN9ukiNN7fKvtaA4pQeYgQgYoBYRGY",
  "key12": "65tXp3cdBqFSds3yhBNE7kpWo75hYW3RGTMXucV7o41jGkMvYzVbGFmJ9GjtBoaip3NYXHBF6Xa8zMmYb6HjajqC",
  "key13": "3KqyZADJWAm6bhVSLbwj6D9DshwjWUJyPY8Cc8J9Lnkujed9Lk3bsGbFa3aewEpkujJEWQskzeyQ3WD4VMndADgS",
  "key14": "2RgQytrdCg2mCrBBLcKsyC9q43BNtgSF7jYh7wTitqDfQVqnw9vqyC82vX77NcjrFKWLCqNJJ4hmCHkKtsbuiXSh",
  "key15": "Xe4RMtUoRVEFp6TGtXnNETyzTPAcbb9bYAXnDgc2duHt1QTbfDSg9cgAs6XHbZYPtvM6aUCZZvdE7C7Xs2aHPtm",
  "key16": "62cQ5c2z7VNUCdqo2UVy7RjGNuUZbMpRBFpDDSaSKNinRZymQaMEk4JMyLQPRQQ8Qseoqwkg4EHtKTXEtrGSPh9g",
  "key17": "62R4XPCqKoVPBEg5ecVstnfFjgnTCyxxCAXgFEHZmgaxrteZC2fAstLeVFMCDU14rLvAFxE4DRms1MTeJHrR95jZ",
  "key18": "415KTYqysNC5aH3EUZJfJaCAHMmkjDyc489z3DHncjkeb2RKmikSzsvxxd6dpiZUD4spuw9fdt6otLP2kwGPcFJV",
  "key19": "vAzBKmF1j4FctXYscExZNikPYKQtQGh7zMSXBqqLx7eUqVoGPpMhwv3nPY9MBaQDQhB48NKNh4sV34VsZSda3e6",
  "key20": "5tWcmXXyfTedmPVumrUvYpFgCGq7CEdrSp6dVzmao8ZHSSa5U7AJSDbEVfLo1m7jSPdVdj6xrbqK5fUQdGCewCKY",
  "key21": "LQJFMmggdfq3rcPT1coDQHaKnrSQr9U7mfUZi1LzkZPdhMvkYiSW5KobjZ2Rmftck4kXtgk6k3hRso5bCpkdEYC",
  "key22": "4cVACBVdBwecydegPDKz9PrvQxH6at4ch3dfrUqaCmYPWZqEVaqjUzbALiiXdy8ivTx5cH7Xbzv6qV68dwoMvzCQ",
  "key23": "3J35opa4NJdRNQPmFNkRr8tzScnEPiS5Hzxbw79PuEbmMp8ci755VGQH3FqQgAvSzxq3VcweX6gXR7aN3UzxzV15",
  "key24": "239nmZJq1PPsHFfK6DaAMLmM8KG1WcqqAeXkb7RS1hiKmbdmfS9G3G8d2H7oXnvxy3RRHDT7iqQiapDisAfanpUi",
  "key25": "62wgE65A7Ka7SWis7XLByWgCJJiggAHWz1zpBy4ikrkVzWD7UXnKfv2Tmv6YHzrvzfMCYw3g5mHUrbmnAirHGR5i",
  "key26": "5aqZ6Da3AAdbnYD717eHGzDDxUXTVs4A32X2SP4Du7DFcHTSASYwdPcF7NNv1piYtGWk87o4bhkHTkrBrqdz4gqV",
  "key27": "5fWP5cr3Y5FkSEV2WVrRhoxxNtDr95JRtzMhkk5UT4Kdt5nyMbfG6pDZof4qH5nTyPbs5zoPiifkCFWVFTf8Nq14",
  "key28": "5t3XhFL6yeuQahBED4sdXTdCUDnxaDPnd8YCi7k1Jf4n7525vtVLHwsK5oQh4t4P4kXu1Hkc8zzkqYh5BneDRh97",
  "key29": "2a8fzPhVEuafuWXQ7MLKuXUdvn9zDVEYpRQ2ArjTxx3mtmDNYPgjaLBqpVRutetazPazScQM1jnK13whCnceSUFj",
  "key30": "2Q5ga2Y4cpgmRBTWdu9yHZntYvtAq2oDLocrw7KVGckQ5w1CM9UHkF3ny8mck2tVFSJ1sovP3AjubD8iSCkuYmS6",
  "key31": "5eQxMB26uZnVsa5HgbGXB7613r7cGCPbjpgWuTvgUQrDm4trfV9PdwHfq6wXcbsifvYQRv5vhLShQH2DKB5ex3t",
  "key32": "w1NNQYbq4Rz3AgkzxPthXRFqALyqnC9b1FsYjDPC2xQkzX5mtwwV9iGAPqYdX2ScXrNr9BS6SfZ81PQtoYj8JHV",
  "key33": "3BzbRxdgtyLB4r5LRyLVUnCJh66DJefucVga5MSqRP8NjVfsPp4ek4kZ8hPWU8Vy9adxummQ5jTPCcuqpoXpG6Zv",
  "key34": "28nyr6Z7Vcgx3SwBrPFcdYGEKWena2VpGB4NWpj8A72kzwvscvX4L3Kc8kU4h5XYKx4UDHVbTWbaaHxXnkCajegM",
  "key35": "Xu2nHvtY3sEGf1NZThCZzaDPLwB3NR9Rs7koYEAVqUsUrB8rxXD2nSLbSRJNRzDDyh5z5qwnqZSy9FnoygmKa65",
  "key36": "4MQnbw1nrSHnE8zZk7a3fzDdTjpVNfTUptrrHwjYTjHYZRT7HFzk6sUYu8UZfXWEdZsHNNMkcCsyCBMUH7yT3pnG"
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
