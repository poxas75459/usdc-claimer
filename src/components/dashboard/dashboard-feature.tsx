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
    "QWow58e2Qs8hi3RsjNrnzLF5nHiPS6NeP5D71y5XphyJqPk3r9JYCTWBqVv57Sd3w1r8yLqzYZHLkmrGQCER6L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46KRxeay7D9LEykoXdxquXNw5m1Zfw5fYbo5aSz5zKe32dc6cvZtaa776fLvNzUGJ236tiLFPhWDK2hCQdbR5DPi",
  "key1": "4ZJ4YisJ1kr67LZzoNso4nAPpbNHUg2PPj6WymMH27YmGRL9xDmqvdiCZ9BXUvd9AjeA8pSb5EZv78c3DFEiZbtZ",
  "key2": "2N8NpTTg5mNNQ1bWZ7LDKtDnqokmS9WmMsEbouWUYJBX22kdiFRVqJjofNXsbKVPof93jShApYgXAk7uA1SPbLvD",
  "key3": "3UwVdTBLn7g7nLvZmXQcixM2ycrx5dNPTLpaTePtiHjzZbauHJvHiEMHPgGHj8NZ6JqJMuhpesTJLhzssn3KAGa5",
  "key4": "2e2b7pFF8iapCJQNGa6dkNZ9qaQna295shyTdVYrBYWQCw3NvfX2ZM6uuuyYj8N2MdiCfHkNdAuknMvXRBFTyFJJ",
  "key5": "5AabntvhER7YBZaeWsc7G4FBbs31nK978cZPS7zJPbM2VKWVNcCtWb9MfxfiCxqzaapYDaEYA6ya6CfusVJFV7WA",
  "key6": "NKzV5jYGqvwrHsR8ys9PnVvSn6EJGXryCiVkBKeTp9hqu5uGsmu4sNQ1dcg19F294eiLQRkFSoBhzL4nD7KpKPW",
  "key7": "3QjbQwrMdXiesioibM1CCBkvUCqGrjXU7CUBPvWJJ5cnUiUcWqqsqvc2ANYCNrGL9rRfGer8NA2LJt2TmByUcMDu",
  "key8": "3mGEhYhCvXhCJuNG9tRHDVfYeqn2nYzXnkzrB2ApTjdY7eTf6ixCtbeRaMgrbgFLPHcy5oSh4hXys2RpxPR3n75X",
  "key9": "3o2SC7vYHDvD6VWx2nKA6uXGTut1xpVYoNuCJhwnbjj27DgkJtwfbSTVfpSVfKcYETLaLiiSJsiDNAnonPfEydJW",
  "key10": "3vZZf5XTaJC4dWAxLT412giv8JUw2gGuKB3AN5nWPZvf8jEPuNxwiYKmjmNfmFvKbqcZt6eyNwcdAMz9HvegKq6R",
  "key11": "2buZqb5Q8irtcjx2waxJECdmP7sBWLLqiQ58CCfHvkEQGVMGUYwXY7R4iwjKSRFVDZZVFuYzW1kRkbB3UZS4jb8Q",
  "key12": "2Bbws7pPh3p3GWiDh74azyj2pY4Ynp1zBX8STxTETLKNsjiAxK1HY1RhnxaREQetv93ftN3cgDvJB6dysDVpByPL",
  "key13": "2Xeej6K6YKnvCqcmax8dhJWqhDUf6AmHCaEdM1vYtBi8DRVPU3DQLiBe5zrxDFYLWgjJvMgovCSe1z3aKH7B6oNX",
  "key14": "3cKewpi8EMKcVXCmWbMvodfWCqov5uU9QPCBR5XJe7i8gvV9UbdEjbp9JUjDeEsa9KRAs7fVrPPu1jKV9LzvcdEh",
  "key15": "5YQd4Dkw3u8En6X7uLAvRon7hZows2JBWrQisTBEhYgSzSXQsWs6trZF3HFGJfGVWhbt8zduzxy9YWnrFU8akKDh",
  "key16": "5Ukdk3wTw6JGSX5nqPdQ6A9JB4ZWSnrJe1mN53dS9SqH6bcXWuPqMZvzPYNv1Mx8AYsYeHD8SGWJjj2DAzNpn5xo",
  "key17": "2onzW16xZdzvsZ9M8bk72M36q4Qw7jK99VbSFXGKqFPNanT9ksS5RbMcaq5oxXyF3KUoAZxWW8JK3czW9UZ6H5EB",
  "key18": "5Fd7iSV7Q2gQr7Hs8rmsE1BotHVFyNYkLRcUdQymJHATwQi5ifYg21cJPiLgRTCfvu4jCoqPXJxfJXhbDUXyBiWo",
  "key19": "4kpDZUFrh4ZjbCRXq98MiBrzit5PQgBWrvedXDURpNHbZeRWKgwhE5KJhS9H83humnA8euBuo61XGY2PNhNZCwPz",
  "key20": "Vfjx4yS56X4eCEkQY8LywSsLGZ8mEGJPaUSq4TEeu8v3qjUxDk2NqjTvEp3a8Cfu68DVJzgpGDWPhqzdCPqXttu",
  "key21": "4j94BNrKF5jfUxeBV2MTgt8pZa4KSkJRBSZwCRhofcowk6puvSgC7YNGSUKRQ8sfH19fAHWuvanFBxHnBuh4M8A2",
  "key22": "cDRC9XC9PBeZW7ss3A7Ww1Wq9cRqcZfHULxtPJ9KAfLB4KX7VYWuP7NZXwn9UTwcwHEB3p14qjFMhHLvXtW1f3F",
  "key23": "3w1gRtco85GExqEKrUaaYXzLEsgC6FbErwdVWUhv7xgqNbNSVGzmDWmNVG1L2NT39Kz1P5P76UHua1jEroLfh5xc",
  "key24": "5eGSrBvqTh6sh67nokNzyNAMfyr7FQCBc19dA7hp4izHyBi7ZJWTxs1jnBmj7ykg8XyY1YRzd2BE4wH2FwxGJaaT",
  "key25": "HcVvdtsywSY9TgmNbRczKSB3DkVs7YLA88YfyeFeep18qkW74zhBtW2HsjuJWhjDV7vmW9t4QedGE5i6cWyB8ub",
  "key26": "4NDzuz1BfhWFdJzd6XdREkSPL5RAapWTyipEb6kfgcAVKEgJ6KZyo2GRoGFLwzRTjtjDEXWzRWWvY6fP52aK9ugL",
  "key27": "37991aqHBwt7vG5LeThNux6wppDJqrg9FiP6FKqx3QrNimXQDbzSMtbfiq1D6ERhqToZHgpsWyMoyj7BydGetNwP",
  "key28": "2YnnXyxf4rvZVuWButfZz8ZFPxx5X4UNuLakygyW2gtRPNLftLaASFWjEMgHFNEzZJvBtWjPsP9RYSCTnSXqGGPa",
  "key29": "QN5MLhAq2ZfLSmHSFs8BYrcbSxDefKWJJhsX8YJzw7N1HMoiqff8Q4nZanMkLwu8az3nHQSQummiswmiy7vUsA6",
  "key30": "2uTLEGbAB1qQGVEk2SAHt4ePVuv2MB1xFBX8g43jjUrQHEKBDovnt55iWcmkTyLqCfFTv3yF2f9Md33CjJbKs3ZD"
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
