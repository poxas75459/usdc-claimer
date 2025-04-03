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
    "5ZWpRBt7jKC9Q1RE85HNy4fK727rGzm3KEtyvfoK3vQqjcoRZDGcHG9TXDDtuEfzNYJ3HhFqUrwS22mqsaAAatJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVnfJKwKryvvg8dDqvM1VG4PeEB41yhdWXF1y7fRcv7mQH2h8uaXZWLyjhNTfVSEnT8TFeP1VR2TFXhp1a1s9xU",
  "key1": "ekAsuortGNWd2yi4GAnq1y7oT3HnzgYjNkzEhzwHJFhrisjjpVkVVPdoLmcnSSwdJt7hMhHHASXDyxLtAFMbqKL",
  "key2": "29pY6fsk7PwnfnRx3bhEyyvs4Ecf2uoLcLWH84D2GupTujdSj8ZgATjpQnPaeA1JjJbK3WTHMq2frZbMix5ArMfw",
  "key3": "cjh7nZSQk2Davp3H3LqdystnaLjLnFTfx6dbU37ALkL7vU4BYAQZYps2Doxvtk25PESr7bF8tCZRP5bX3rsnTtT",
  "key4": "F1tsn9GXGi4kz1TEGfPWovdLomrdJAQHqgsAPo4c6MNssVcSS4nzUNEJJcgNV2TUXb5qbv3gtnDtJhMrJeLKKqj",
  "key5": "4SVxcNsppVC8VeHXhLPDjYaXZEdNUbScBaCSKUxzEHbpBXTfisJUzd8uSvYMTEr9A7UoAJsCwufPgHSdcaKBj3sA",
  "key6": "2CjprXpbUtzVmLo6tZ7RtZM15GK7UmkVLU6c7ReqJbUMC7hnx2EUrYXYnvhL1ZtdaAsRx1mSWWBdtHDqGwfhJry1",
  "key7": "3ewp7U7jn5rkoUaZbjk7owidecwnRroZc4GmCkmNzwecU8ruuMvJbjNL1S8yB8xs2WPNsArDzY6SkLNVKKEqMrrH",
  "key8": "3CdYa7pMMXFDFXJ8VLbWvtEmuBJKebyLRDcxQTuXPcf8j6vSRnjRUYfErqSHWTU3te1d8YQDgaZhVaJGuvY5onMC",
  "key9": "4joEa9QKRpwe5mVoUBHaEvC31NDVyRR8NaBPLbb4Nwgvn3WoHNabYj5EgiJZazHmUKJSNfiHQxmB8dct4AMEeSmF",
  "key10": "5CMgaDvLMXDEK2GgSxkdLnCr2TVCSZti1ame7DgfDvqK1xoL3ATw5oxBoxMqDsbz3x1mQiCDH1YeqBnC7iBJXYJh",
  "key11": "2L9o42bYvESXDxQH6gYDBowhdmCbfDTgUw71Bz5yu4s27ZmQ7YdEHLkUTgEPDpVPFowb9SAsxHHTtiK1L1adTHed",
  "key12": "2XngV6harndxPuwghrTSeVgwb6RnvftHMqEa3TS5ykkt3NuQAX9rBqxpQDYVxF6KCPudb3qUStZ2eS56UF3A32jz",
  "key13": "34Bt3JFj48D913DGxqsuV9uRSE47tHpeVRkYVKxJHGf3gTAJKJmCaUNiRBPYbeAM2tMK2ijAiWPsug8nEifFqe9J",
  "key14": "5U6otkmWBYoL5SzkDK5u6iiwxHfmAu4oax5R7kmh6tgNXjqr46cr9qQfFCzEnCBQyNEKUBTgH18xUcTZeC37N5Zo",
  "key15": "4scp3wLC1C96P7MLyiRcYE8hDrQBnEThiZMGb4LoaWgVSKUd8894WPsGbTQTPs8KWLJaErRfqh5dPy8yNRoaBK7N",
  "key16": "5vqxbpmsZ5FSeHVu1oy4CaRXWKwSh5N5s8C8VjxGoChPeuLL33mPMQNwmxh7Eq97BkRjFHxhhLHPjEzAXn14K6v8",
  "key17": "3DsxXbpW6g2ALXSQcyLYMEJYVpvRuq6W6CufLhPqPjZLYnjCSiW5WagtfSUNTGDyFGBPghnU9XpCa6HJoiwX2Be9",
  "key18": "66eu5MfCt4ZBgLQCUJpyVR3yyweSLtSHryr8hANwkKwb9V6yiJnzVDmZcHQSub7mDY9L9CwXAKzCApjx3nDGiEqk",
  "key19": "3b9QFJr5CfpU4o7TkBNWTPC8ZPzZusoAP9N5mZEn32mnnQVHQxNgZxvBDGHQqYnBgrbLKX9ZZxM9Arq8DBPLsHAJ",
  "key20": "xKLwVmxw1VXHtJNjkYYtWJSR2eRmW7GEXfHB8QEFWBmfmJQ6zsSiMPS2C5Q1iFQZ2v5rwxN2GjNyhuDMd4GQcqP",
  "key21": "3egZuZFwmP9Gtn6496oPLrMueuHyNcP2PrriWJNYYBtpztzgEu6tsrmWbU5zMzcyUdDhR7X1wPf5hwjNzmeRyEqg",
  "key22": "DroXxH5mCHDafUX2TK2AgErAscfLq7EtoD2djRjuGzSWam8UAvvDdYgHysWBVejxwAeFAY8D47xSvto8p6Qk7qk",
  "key23": "5rhhFzyyqnaFFE9BZt9iuCtH31nhRY8AadCBYsNpTQ9rxj7BFYeSKqz3TENPsMsEHgjf7WsnkWq7DBXLtsGLqo5m",
  "key24": "4JAuVm9UcoA4DRjwcrLTKdyvsxcD1iJAj6o6R8W2LvG3yhjht2e5xmeHSXXUtSwiPnKqjDxyW4K3WQYqWiSsifp9",
  "key25": "D45je2QVMrLgW6KAzSQGNkYtakv5zEE1MHCf8nYLK2rWGDxSBo6PTK7r345mHNqnbBqvdD9nnAV9TzqVXhAbBS4",
  "key26": "2HD93dd9C3bfwP6UjLN92K9VN3cWX1n2yAcHTKpsvKsNWB6U6dUSq485dX61i6pH85MpdxEe7dVQSW3TufhdvqGF",
  "key27": "2wDFugzwCKKPBH8fvfuXYoW3mFKMSANPpNGDqSsAAc6MW7279AT91Q4Du6Ap2esgHUfceYhBGHccFuoraSUPGx3",
  "key28": "5mhaFRVSieivygMK7bFc6teFSqfE3CE2jh4XCz54RzfPAWrWn3FjKK7TKuTguedQYrgbsVx1pGQqBwCPEdNBE7MX",
  "key29": "5qhTL3dEzA1y2G4PY7x5HZ8QNkAMdpeyKt8CeCrV8LjNoWerDEgqnmbtmqQB8NoBvtd5orpY72VBRL42teppZViW",
  "key30": "PGbAjGcATHXmFVmyxZngb7SihRrnwMBWBNE6GHXgwUfMtmg1RkF3SpSEwP99TSdy1YjghUSBQainV32WMkoXNcj",
  "key31": "hD6dsZBLVRgs9LaGqErbMm1EKXd1QZghb2M9DdQcex4Ren6aHbPVeadpnp6G12RJf7GKRVLetmDqsraAafRngy3",
  "key32": "5Rr2PoSzpbycKMc338o3aaKNX1jCvBccoUA5pZSa9tu9zrvr8qsw143iUSHirRBZmhkrTPcXsBQhshzYDiVTE6Ah",
  "key33": "v85awcqoeU6zWWxRBDAcRSKvqe2Man3Qn8nRvitWGaxvhaVnL64KnFeGn257x69fmnHmtbqGWfPWjviMzizdgGY",
  "key34": "3qssQZ2AUpbBcNSQoxwi2jHLupLGxuJyAG5fYWuWobULKoEuQVNNXi8cy6UYebtu5v4u5bJy8EGB56oc4QaJyZNN",
  "key35": "4DFUtZ1TG4WbD4aQURStA8kgFhZXrt5zoS7T9xKPAsbRPTPZqJxD5wxA1ndnkxiMbw9CJYkNoQtcBX7ffuq15hCg",
  "key36": "3egfyEdC239oMVurL9niQQKjNqTu1aXeyMt8QrJGVB847qDSzSEvp9yHXmut4eaapzumsbDb4KEbhDjLhu58kS6N",
  "key37": "3sYTefm1vkCCMsRHRy6ePGqD6rY1RCdGHKB6kBo3MVQU7YAixxyW2pvBaNMASu2kTMAC4TbG25whKPDNvY4SEnFF",
  "key38": "2yTsKaPrcDsLJXTmbK5fH3SMSuacZmWHbRNXbWcfPPCTZWPn3QDz2kFJsiSwewLBhRVEhUyEm4Rxb4rDTzunMkpv"
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
