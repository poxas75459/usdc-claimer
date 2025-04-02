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
    "2ffronSu2ETTS7SoTRZ6agNJBGbMfwVXfMHrmSL8tNtYFsCgMeWzQkAV8XbV5sfyCte4pSsUSoNRXsSbj5dQXViV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHgPA3sKZAMkYxGvm2uFfnTxpUFxKX2HRhBbWTZHa1W8F71JFpM3wPbUN3WRsQFeao3QjkK2PSdQ7Dqeb9Ks6kZ",
  "key1": "3EaenuJYpeGtKQX5KgJ37NSaCwRCka9dw38wikKS8UAPUmH9Jhy8V9i9YKuEwQbhbtN6hGsFzob3GKLgeuQ6uyL",
  "key2": "mpxQXbhpPTescVddUr6fK4ruQb6NuyZEbobXgJXNqMVgb5cHu8v8KGbKCmBmNn86fkmRJpCfvSULnZ3ATxYFte5",
  "key3": "2Jax82D9H33LhorvDfHFyM3GpuA7AnFmfHXFPghqJCmQ1G5LFYvLDQQakJHZETVBuAsaapPFjJPENPgZJcwcUW3S",
  "key4": "mYa8z7EaDrBioSL7UdACuy2NMo8GSoPJ1n4bTS6hxvs7i4tp1jvvBjdLR9Qi6nVfdjTYC8dE1GAaY8jqTPBWjso",
  "key5": "4mX6BBcSHH79XKcBK4fA856APjCDAj8tHZrBedR1Rz2XMi1dyo2dMBRpUcs7463byYTfm9CxLS1F53yXSkWpwmhm",
  "key6": "3v5vs2hUPb4jWRwApgAiY22yfbQ4spMgsVnveNcEzNQcerFLMf3uteQXky8EZ9sBTPbysNEAaqDzR1EJx8uGhZsL",
  "key7": "2P43uAu4XrMp32ywh8bPn44mqtHwLRMrmBxhx83dVcyEsyLQojaid9QmeyR9WWzPRsM2KEqDi2zhFasYM9tTSP7E",
  "key8": "4m3CqKWR2gCDCL5JpVQcpWFhmkaXfTKsGZuFgDnyYK838e1JLezc4GqAXxZc2hHSFGiRRuZung7XWVqNcEH8F8yf",
  "key9": "3iVjGZ7uRyGvmSbQ9J9AMMXMaGwtwTRNFrm3SoXZBtVamPm2SFFpMyBm8etU3UQjrE7ZuTZZ3fkPj7Gzc8wiMmEY",
  "key10": "2Yp2U3YMD8GBy97icvGg6APqoKP5ZSvM3xtDkYd7uZt7daFXGpTNazcvUAKvABnnBTxw8UMNabpEkBmZz5N9rdvb",
  "key11": "3pqD2yP59Mb7EbznPL8GjjWGbZPuFDPtumBqfQBvTfAYbneV7MgJfFntPFpefkaib2T3uqShgnzUCrCNtzexB8fv",
  "key12": "5B6mA47VX9R1ooACDb3DwMcToR3mRBLmSkBRsnYFZY95grwY6RAup3wHA7FuBBABe1mgXVt6VZeM5z59idc5wXdF",
  "key13": "56T92o7uo82u3sQNrUcPxcDD5iuEpEMnR7BdGHXkNym4R8ZiyE2dMLDKLT9ko5iVZYwTKCKv9vTNSTof5VxTZmrE",
  "key14": "27fgM5tqp1nDLmf6tUCnz5qnuTqs1AJQjWC6Nh4AChf33GrrDzjnuhhRz5XPpXw48R8uaxNNmvPFpfjjczHhCtx4",
  "key15": "3yNmMiupDUKKWubnqv5GJX8r1Xr1m3VurbYvJeCupM8GXhiEkktpj18shyUuMrMwjNC8BRbQe5jYRoYWn6PH6UxL",
  "key16": "2hLQBkWC4jM2KguUzNzguv43qEtQGmKv76hDuxfZjWt8riRmDHTXvYxuwWDAtNtVTUQk37N3dF3NAgoGccmAyNad",
  "key17": "LH27aaj3Z2RVXFWqjMy1w88yLzhCSZhL7GMEeJa1Tmp7Vg9iVs1amAEfNvCqmLyxhqPPkEHeG5sw1qiWtUxRjno",
  "key18": "2NBBB71HoRc4nGYuSx2DKU9Y9Vpm3GMNS4BhA6TzdyRQ9VGAikHLpC7wsygFHqTxWv8yg45twah7dHwZLbBKssw2",
  "key19": "3wQn87V7dYDevcUWrp3Lg2kayyh5nwnTPcBx1qzJc4VWoV3YsvTHq5sW82VJeYXEuCdBCvgv2niXjEuABwtYut4k",
  "key20": "3DQ6itMiH7JwnnMDf6WJbSaNNtxzKyiTmXJxpKKazBEFmbtbRkAhEpsnGXiesrgQZtru63YJqGJ2SHqj2Gx9QZC6",
  "key21": "jPswMDUrkbW5vbS9UuB8dbA9MBtRSAbcZMYtN3q2ScJbJMsEABrLDps4k8RCxkbjiZaLZ9fReHP81Zbj6b77WyL",
  "key22": "HAxTwmMsDAVhV46GAbTR4x6ZxsM3x1BS58bNCPTSyEtvN6U2gWE2cgJkrVjw7LX63sY2kVsN6mch1GxvtA2D5dQ",
  "key23": "UFHGQmqu2yLoZk5YeJ8euD4JANfwu4KdrnGAMUj6dZH4LtFst2YehA1AxnRQuhVrwkwmYGJhNFfd4qcNzdpRKdJ",
  "key24": "47LH3sM75w9Qv8T8jdfuoDgh78XeUwXsJFfFsVQWG4MZ3ZjWcouE4GhopNX7FWsfpyKVhqbGctTz7yCQbCJ2ot6s",
  "key25": "24hkXYYAQgfzdyQX6s7vcpKx7XXZaRpMkDxWgfzXYrzJyjRCP8VnVMJpdQDNM4ZvrMcZGywBMNezRA5Pd87WsEd8",
  "key26": "wnWm6kn7LKCBhSPunoyW23pXqBtPE7xfM9VPxqFR1yy3WyGnzrdQErYGxA776GZfzkJGTThgyxc6Uq8GVhuKgqm"
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
