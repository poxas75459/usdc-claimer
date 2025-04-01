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
    "4w5y5JC9yxzVK24e3UYC1U1rpSpaEueB522QKgzkUvYgBEoeQ3Qkfj5vWgkAvuACnYtJ4XDBob1RBDUGmVUNyzfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwvMgDVZS8vU5aJJ311eJYoD4ZtpCBMYiBMs8WyHKE9TmhK6MfyWVERZpzzg1xHXhuJSicVeWjnpx8zPgzf9Ah6",
  "key1": "hWuGXRQFgwyQWxC1tQa8GFHwtZUhMYLyMq6C8GV1BzBMYZZDY7QbceTwBckGjNkHs8tpnuRVYqBXg7WPW83mkT4",
  "key2": "518BSTNa1KZj6ZEAv8gP2HGjdeJmBxkKfxwfASpWmCUjoaFSmXgWTpHU9jyGrzQCKNx23isHFMtCwZm6K1VGZsh7",
  "key3": "qw3D8En4a2MTetWBWNwvmBcGCJKo7vptkiJbJ1NJqVN9aN8ULFACpTsqLzwah3xt7aBVqdqAmWSMtCN8jw8C9YH",
  "key4": "4JMZd1hQ5WUZVYu9oJ7P1VgEm5emXLwV4UEx9EwzHkS5mSMcEGYDQySKQ7rEZp6ctm1Qo8gRNZR69fiSzxqn2crR",
  "key5": "63B6WFL4FLwbnTwHjsYKVw2CEDEeVLEu5fwHnjy8JSCSMEkry7WsbQnp8BW1n5GBCPmeQ2f3MyaTmYwHncon4oHN",
  "key6": "2VNyjhGyc9LcXN5XgZtqUYk1LQDU44h9JkN4oRFi8ht7nCXh6TNiBpAzbp55kjjP7qNBFz8FrNZsuibqsWdFJyj5",
  "key7": "5fLUE43nQfC78Yv84L8ZEoEDLZguU2rfWxbUpNK2hh1e2W4aDf7JYFvpCmyU3HerQAV2m56mrHZbUZQZx3bRHCfu",
  "key8": "2B2ZtCx5gW9UEZCvpKXGvUyjRqcYDqJbYruEnWqSLGc8tXSjdmrVmdNmn2gC2u7eVWeFhXcH3J8e72YreAypnVny",
  "key9": "3yom2JkJtgFRcZtSFpHyAsd7q73rw85C85uk5itpHqCnQUaiVu5hwX3eCgRcbfXa683SFBtrP8D6m3UXfBhFFMu7",
  "key10": "5GhWzMtpMZ2WBNrdizmqd52ksse61w2sABVcYQH6FRPiUrPKEddqPktyq5nMSiPUJ8Lqhr93XSb7d6cuGrzLs1r2",
  "key11": "2DvhNiivBuYfyC1qkqj4ZQKiBTWG2FMB1dEFZxNE8kSvMaqhhGjy6yvViRSYtvTnRneBmbgmHsADGhVeEFu3z1Vg",
  "key12": "2Xvi56DGv37N7CuiKBSCWUchhuRaPq2YF8xQj6n6v6x6tanSyWVbcF7gCZdYckTXN5PAvrnhETCoa5Tju2JWr5Tw",
  "key13": "5UgMSVdkycX82nGV9MkuLgCoEfPWAhrXZBnnzjPWb49HahqYJg5Rgkr9UeWMeNEqEXaoPJoNujwVtz2u79fKMjpE",
  "key14": "2wVpPJTUm96PYKXRLctMGQg19TpP8E5eDmyZ5bdZ9YAwFaMsL7Hr3c8YJrYWDAxPxf4y8x1KP4byrPnPg7R7bQUV",
  "key15": "5bGEo94RUkn2e1giYLZtFgXKVZtXyxvzsVRm4hdByp93jDdkbeHfarkBmRmSYmpLMHY7Dw18MFsNgYZapxL4BgwH",
  "key16": "5YVJiM2stJ5MmMsJTY4EJUr6eMojAPnWUsevQ4giywULbXLYbx2PgHyWhV4hkY6xL2F8wKtKTiVTkp3AvU1inAxd",
  "key17": "3gtbzmmaDPcTrX6NRs7jDYFrRnXDrypBsNbymEZW9PHx43pzMogmdFzGqpzc6H4Kx9cNXNbA6974YNEsk3mYjedQ",
  "key18": "4VZo6BTmQ67qHKfLF1nGx5RGg5Aq5dTwTtVRCRfSLKEPYW26cL6MdXyHV2hSk58NPFLDEqZKUu1ZUHrf3zuTHtBn",
  "key19": "23gAqagBVYyob9AHyuNPLUzPPGNojNE5tUDW42QJr9xVsaoKEiFpJmm5qwwCqy74sKX6qoejUcqHoijHi7ztxTt6",
  "key20": "5uLuyZqruTj54mhrTNohc7Q4rPTgFcTkAJtSRdC8xRAsmXyRD6g5nQCnVSPo4KBXpBGBg4Ar76yvmf1aNJgdUzo9",
  "key21": "5FT4t8A9SLafGxycd5qrmtwydCyr2BYTpnpnbXRJSFCQdPDHwptXJ49boCCrQCVrzyuaSZeKnZdhmLwR6A4QRxXT",
  "key22": "4cLMAKtHFmkRZLq6YXASr7vofBq5NSqDTkwF5tdxnftAPULyrmomjL6RUA8hWrx64gV6VkLPqPzL7ZB1vnkPm8i2",
  "key23": "3uc75atv6Z3fH8W2EtxmRZrWvda4f6mp8EumwQypfgmwieuHcWpYUUCA8SMAVpnC8Kf8Uhege7LyDF3PtcAeEs5t",
  "key24": "3CJKwHhC1R8gNZXF22PPY8bMCZX79Tna6nP8afkPGQH8ULowgymnEjw2SNmm454WE3cMR1w6R3LTz6x8WM9yAMEc",
  "key25": "8huJNYJg77ahLGLbmuZG1dUmyQE46djtxvw7hudZT74zPvTrJXSyJveowr2FLtHKyLJf2u9xY67QttwDrNHDPJa",
  "key26": "4WSQusSF3FTc9jr3ox7QmihsE7P9nt3qpHWeiFMzN5GkhrzWc6ZAKBE87dVMd6n3yELfZYJLEytxEYCR9m92MqaW",
  "key27": "2PRhm7bwBH1211n6y5fhJwSGjufkbskJMLNToHnChsEGjRigwAinVoCQwbxZvVMcXsA7heM8DM2BfMY73Q6a51o6",
  "key28": "46G8YhoicTYSMWpTmDudEHV2Wj9TFUDPAfwTv7ZwS3NzHz7cddHrZVpPbKhpLCkNvqXbpZWt17BVqzCiDEMz8g1y",
  "key29": "5x1j2m7xHJU8kKrh5WZRXAxS8vUUbnW6gzxt5Q7YoYhimJ3vVffTAjd85HR7ryUNTFZPDLq8ivokXN6SjsJ4Fs5s",
  "key30": "LuvUtJ44jEZnnLgcFeguca9DCCJUX5ZcDhQV6BgX8ho2HmfndhV18UBzeLqRLtd4JtBV55gC7LuGbz1GvRR89HE",
  "key31": "osSgNY6BsnFro6FxU34dt9G16sP6vpoPEGcW7kmxV2NwGkBUcd2ubaJA7vg3AT2Z9wL2gqcBvKP6paYSJi2SP9R",
  "key32": "2vtTWYpdjYQVLa4JN4yDpa2GHTWJzXHCp8gxgJYXzrzAznZQ1Sf9D4N6bDZhCijNshpPvzZzEuUWoB2PVYtzpqjk"
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
