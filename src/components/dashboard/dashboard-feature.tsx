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
    "5zbnzYjAHqN9QdHAL8cffcYc8FjpFYWmcUgn7xokECFcahoxVEHauUdB7FHz3W6tQw817bDS5P44Pi6vuADWoVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bw1b87ZimSq5gaGteKKdPScpDGKA9L9fsGXGxuGccpDoiwStCjf3UHDEabCNRowfbSccvkL2yizu8tqvggjJVMx",
  "key1": "5pmyosytp5pA88Cpjeq2jR6M7kQoVqpPSjzTGhuq5F6LACuuqYH9avvz4wHF97hCktjBwN9MGjD1rub9dFDwpTdH",
  "key2": "2aoYGJqNPRyj3daB4nrsfhwrtnHcwbYFaCFuwCR1eagLuUsMUsqdZnuQXKGtDCy7zzGavCeWakqmieBWFFucAGHY",
  "key3": "4FnCDEmYHcgMCyT3Xbo3Fs14BfcB4K88RNdUD1pBx6ksqDLNQzBsBtJXKBRrjPUq3WovBQ1dm7YEkTjfZpCkT9Jh",
  "key4": "5H8nfcmbiBJ8FhieaA3YFeKUSJtyhxZfAzkeNkiPG7nR8ZMzj2QJbea1yfgJd7DhAHHYbRcs3bMHKSx9YSPxkLwf",
  "key5": "vCC6CsQByA4dJiLoySUXWu1gKFruLW7CGgS26Cuxn4UtBTAvhAZUZFWwSV4Xb3t6JcxNcno5FpS6kbT8Tf9JANM",
  "key6": "5d9hotd4BF7rbEyXbD81YW2xjsAZiJFbEzyexgeAzPnjnSBm8RF4T2EAog9s9kgLewLvMP3ZGVHAXUzuSrpwzbre",
  "key7": "5gpqic1mAEGqaAJzP1TDr2B5bR3ueNEY7rHCBMTJAGBhbf3UYj5YWfARmxe9SC786gMAWTZVr64r8WtXWozak3RH",
  "key8": "4Se3D68k4bScd9iedTiTKzXXkPBFHoE2vsbp1n7GoigJ9kMemaGujZqf3W9Ak2UMHkuxvs1i8sYoBWYynzW8mWTx",
  "key9": "KC8BSezTNJ5FbqS7YkjfuwsBsnrhonKEr2XrXTx3xFvgMXjzDrdhqpeoZc5xq4U4QR8ex8bRjmT5d1bLJVUqsCC",
  "key10": "5KbWbfhcBjRvsLsopHLTuj1GLu8BZoaRMnFdFHu9EeaUSZKfw28CCWjRTWkGP1UnxE9hJyH8p6LdehfXVvRkRBTa",
  "key11": "2uUWybvHMnupm69Ad24Co7cqCVhB9bmZsDJ8CxmjxNHEZJcBURBQFkkFU3cXXP3a75dwFboVfybNAW4M8anKzUSC",
  "key12": "39DEzi17FMdCzZ7MrijREtB3k4vPe7MK5crSqxgD7ncRBB1Dbeu721vqgHCFWXFR4GPzENJbsytLuUQcthEUjXHB",
  "key13": "3GzrNgFrwEddsiBYBSD3fiEzNur9ivkvBmYanx1E4yPSZXn5ZD4pKFbfPZRUQwuFMn3qypT2qYtYPBrrDR4bStDn",
  "key14": "5V3Gpc48u7xFktgDcrEsw9DwpSmEp5zjgerXNunZ7Jv5w6jpTxTHivUv6YW6FScBGuKsAkyNT7r2QUtErvkZD5YD",
  "key15": "2rFys9gmSajCfAGtxHYn4EfoxsN4PMrbxkMonNdNuNxyWrDSo6MBtgynzizQfZmDcJV7sTVtoDVNB1EREBDgKUqA",
  "key16": "2UhwGHrxjAVhtPBKbcefHi3cYQnUuhmX2wbSRDMvdSSDe8FCUD2UHFrFadvhqW6nNvncgYEnkYSpozJ9Aa5vMb2s",
  "key17": "4BRwpdyye3JmPXATFr4iob1xCa8xHpRSiV5zgy3BnM35tFBqRqZ4y7xpDks2T8YY5YbxWwAdrZLA2SbPpnd4n19h",
  "key18": "5APg2TS8uH43rVzDNumsKnyBnPaTPkLVPU4kMCT6Umh7W4DA2h9sPncF1fThVWu5sZFiqSmxvZDfS8e9YWc7wb1K",
  "key19": "32JoqHpYWGrM8egJVyQqyufHC5tjCC8euAwhcszRHcVfE4fG9Z776JSGqiLVEFYf2ioA1DGN8MbMHSpoE7i7a216",
  "key20": "52FnXYJVovuCX18LZLYfDJox7xwNxLtHv2zFVR9i7Naj8wT3VZX12ATxEAJPYEBRAycLYy9h5DJrabN2Qxz3DKPB",
  "key21": "5MK2ENBysrhVBCmZv1dK92aRx2HMnLMRFXMXpAAQtYwA4FmqFVzeRawF227TcLu6Wrrw3tZqPvX778cckWat2L3o",
  "key22": "5vribuurGHyLfhrsURV1Rfju3kAQvvXvzF5d4dYo5HTdybgXUCcxnYNGLvPi6W3fZbBCvQbTw92uc5tFVb4KtYe4",
  "key23": "2ZZ54mZU5nP2r4hc28Jmb75yTKvH2aD69Fyhp9LKBFLv1LpWG2firtkLvELjyCdqsrtqZbiFE6soFUvrAewbXu8G",
  "key24": "4hWgN67U4fLsWSfDmtyb3LB74DM5Xf9SvxKjhrwA8Grbc4v7fFMwPDKwpu7AkJaHHp3MN3N2efD99Stjkz73gbdp",
  "key25": "4DKu2z9v8B35RzFghCrabcRJXgGZt9FgUwt8QpPAxWq4ce1cCBntULTcS3Astdf9hhuy8HukWYUpdYxNrHfh2u1m",
  "key26": "B6ABHBYAQMGEjXqjxgEqtgbX5yd7vDXUquVPTc7qm7LhhLZtm1GDcbn5gCzwahD3yXAoxfsQbMEYkCDcSKGQarT",
  "key27": "3a52AWzQCH5Ab9S8LzgxCh2JsmNdzYjJZWZsyLetj5WUS56KpP8nf8Mbzfw3zcSGJScoBu7wsaYvpeiWLkU1PGjp",
  "key28": "4TMggn5ywLiuHb2D4Nu1sfRKf6iNDc5Rx6aWVev2rSLBRLcoX3QUbEE5cU7zQqViHUsiWg3XFoMGgU2rxbbDsrZ8",
  "key29": "3xDHbRzQQZyMGkWnoKKkGsHxPwymMmLbHm8emDDteNK89sjiYXWEJZm5eT6iSDKTTmMgvMrTM2GZGDpbHhXFjhhu",
  "key30": "3vkrDdeyrK2zVimUcUvHp3qEbVY3tDy5PjryEqLmHZfh3c6cqW11JJRPoN5h8cfB8hcBfjpKfQo9RPcYSd4Q6yqQ",
  "key31": "JjPNZFxJRxQu1Vucvk1adgw7jf96wHBci8yxwAGZSwXhcSFvTmumNKrQGL5YQu7VtTrY9KL2iGqRAnmksPfiuxh",
  "key32": "cGCR5pqtzN1vX6hqDhzY25S1PTVcL574CjMVTnEP3UEyBhFL9xxUdrSUbK4JG5UddMTj4jzZCfxy54Sqbbe82kz",
  "key33": "4kDjgMPLV5F3PcSNcZoZeZzztMahyVAnZHPVDJXUwZrmb1hxrSvwfYvguvfxAQUnMaFxnkJ8FwYPFMPxF69sCyGw"
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
