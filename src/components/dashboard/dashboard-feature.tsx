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
    "36uGVnUvu1yjXe9hiyFLnvf5nBxxMEnZHXvLMe7LKXjy8tzscUXV4uU2Ud3hQSx58bS2hozEqEe6xU5wgmPy2AUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgY9bHM71bubuv9CshDxRkLHEJPL5mPk6GAHKP3NDGzuhsb5JhU6shfVTFVST6CouUYhanYumFyKgLV5BC1VX8k",
  "key1": "5t8X26zkY1gQLHqfviujGkms2qzeyPGemfB1kuuF8cuJyNxfXzgFGtk5DoYrHjfZ7LF5TMw9LmGaB9sghSHd9oLA",
  "key2": "5XLabMPR9F6qkfJTzvMGvf27GH6WZYyzjtcB8zAqJNeRkR3aQijb1vd756caZu2ngchmB4Bi7eDa3oYgYNud2ZaC",
  "key3": "3DQukiSJcPNGaoNg4MAbm5T8Zzg3SatK8VyJqtMYVZuV6RVBnz91Mozu53V1FQjJbKdddnPhqNvycQE5hzz2x81D",
  "key4": "AjtVtsmF7tUP4oBK78HHH5pqjD1pqj86yvuAU8v1E22wznRqNCxpgaBJkjLeWN69rbAxS5PBnmQcCwDsS6nrE1v",
  "key5": "H6DyecED4o3NMKyoUz6WZ5rGkzWdmeWLd26dJ1XMx87TatDD7wc8MzAow3hrcHFhgTbTAiy3EASpuHTbozjVxsq",
  "key6": "44nDbKMJbjXrYgasUPkCZ4dSZ2rxKvXuBGTKf8P3YmipyAWevqVGZYHie6zRCxtjRWsTBxfcooAcKUUKP7JdmbJ",
  "key7": "36Pxfp3gPahnJTxWGkyLV3TBvthPSTcoYzvNWrEtxgWHQ48s1bVEirevqyYd6XwDCowUVufHbyi7tth6ydQ7ADye",
  "key8": "3YkQqigU9DdionqgSAcmvYaoUHgYw8qXd3DriK4Z5SyEdx8aYyToSEQGc8NMUUD3y8AMaa6kgYw1DLcwV6YfkokQ",
  "key9": "4ABz6VSDw2rY7gWyxu25qQfJKEo2N1VwBTvJVVruRPBrHsbCPSgTJFtkY3i6ux2BBbAs634hFmog4rNFa4CG2WXG",
  "key10": "24KX2dLYWjBFqVGiGrzSYFfxmF92VWsdiP8NQ84jGN7unvQFmVg6zkWjFWvi7NDSGRrxnu95a8QHxjJfX7WBJ16g",
  "key11": "5Zo3DYXXeNVZz6WZamn846AMD1mj26vNA5isgKY6M4B2J2dr5FBpewUmQMiBrwrZQPDW8HgYEKU1QVyhNwdWXAE7",
  "key12": "5sCH9yVBMjJ7xZZhpdTfi5BWmMfPH8ubdxXy4HjF2EXjrfUuuEvJX5FnubZnMnupSQPyfP8vvWWp8bR2q6wSfXfB",
  "key13": "67ZKTnJP7AC9VTHjdMZU4kXaAHebtDN9pmLp1Fep74JcmttgcWhZdoEfsGX2W7X5b5DgtYkRgJUWM9ZaaLqEPZ3m",
  "key14": "34qtfVF4UvdbeK79p4kVEHMFz33HSjJqLAEscppstDC2mnyUAc8jXrksjcWaMyAevpW6EKj6w4omEAAzuPrHFYPv",
  "key15": "4mZxAyfDYzAKanb4JPC4pPXoAMM3L8L2srBfhKg3wPpouHYLRn83k9jqo11mGVYX6L4A3KKxAK1ss1DutiKZEwya",
  "key16": "53cDfpCsUs7g93zj568TKSXvbZUjZRy9RgJwf4oPne1t1otU9cLZZ61QSoEK3M9W8gm3vZXv2hYymgWiGuzLpegL",
  "key17": "2UJdipHc9GeU2i7HZWTJwX9iKi1PLUANXMm4eJQSzSrvoHyYBHHkAtKfxsymUJQQmFsu2enTu44NNc9rWpwxqWQV",
  "key18": "2Rr69faY5G4CjHBxNWnpvYKZcxGCZac1Fr5b7eLydVB82xh3MuqbWuuY9K2rCi6AAJTkWfSgwXaGv88kKR74KxaX",
  "key19": "4Qgs7pSAdhHyxaXBLFg13RPfSyeHHffG2oHJdnR2aLg6rRLMuWZ52jdQaiayZ8BCDnrrqsSSH7578jUzwpyiMSYc",
  "key20": "5KpSjMG2zZWFRjBqox8i9BmMwtiMSwR2tMLYSGCpeEPLLxKDoweAZmkv7LSnXrB2p47ghhZTt443YsqGZi1Eq1No",
  "key21": "2prr3FTWQ1b6jp18gczGKnRmegDojNTdVtesRXx6d3QsQX4Q19j5xsQzsCHixkSBWPP7BfCXW5uyx3DbWt9YNwLv",
  "key22": "3FUGwGNMkcGE1RtCa49JJhCZNSqeXD4YMiHFyL7nkwRvD5Pwy4CHqLjErJUGqC9Ueqft5erLA5H4aVdku1VpKtZu",
  "key23": "jvDeXJ2yh1UotHhpP5kbLTtXKkr3HQqweeW2jMTBJZ9BUCKXtAzfwK6LAR7aRsoptxi94DUwqXPMPEWL7AYQoMt",
  "key24": "3dN31ZVbwjmD3b4rg5H6Hbc6wqKWTS5oSRUW9s8zuANeoREWsVBCNgzqfayiTFjw395Aj1SJDMC2XjhmtDxc2Nrz",
  "key25": "3zBCYqtTE54Ty3Utj73bR6nMWn6eFNdUsSytQymvvrx7wgJmSA8aRF7nLsJCJ8s6ioHEaYXKCP2CeuV7Z7SxckUm",
  "key26": "5RAm2Nk9uQ2kwkzJNKB4i6VhfwAEze7yq9BAdQyvpJYEhbN4kqvb3pLMpiWcJciMj5kcZuE6WB5wDQpPb8Wb2knQ",
  "key27": "4h7XJWbHQWS4Y6V6PoHyEM4neXbpbTJwACiR6wkz9dmqgq9LHkoWLyXz9vJXgLaRjXZxbcVb4o8qAcGgcH7RLQUm",
  "key28": "2yhdXCvTyz4wvTdobHX3AQLJWYNEptEgcSwVoHDJ9DXnc68B2sJ5Ct7TS9BY2XfHMyi6ZhEqsijDUtA77sXfVqQP",
  "key29": "2fvBBsm6atcEsvMzSXtWyLz6JxJ455BiuRkW4wvGBnTreypUFibhD6H7xe9Dwbn9LudXG6MUy5uGYjULSNb2PwNU",
  "key30": "Nyh2rFBHTP9aGEJcxqoQ6BUzDruXAvQrFpbHmDzxHuUPRvHZitLBprTEdEbyAZFGM8GEvhy1up7bHAYbfwLwqGr",
  "key31": "2D7ngnd9stpRtHijmhytjyMa1GeNzgtRe98RXhFDpTEUkTFXTiTSs5VwRBxGeKbnYaz64jp4LuAvPfi8T2yFp5Qn",
  "key32": "52aziLBeSvSs9D7eZ1oXiEYiYc76djzvv6ghMK9LCxwW8TZtX64kqWXm88a4BPX3isjzFoSXu3h8Yp2VDGoaUjxR",
  "key33": "3MFzLrwj2N6ZXzPh29C3PX9uoPWmA3R2SHqZMe4dmWf6gL1nzgPGyZtTaMAsG5YL4GZdfs76REjW1Kjq8oHQCHHU"
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
