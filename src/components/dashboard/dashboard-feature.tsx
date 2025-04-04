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
    "2fKCsSfYXdyX1LZBciL55y7nkfbeuypZrbJBAtifz1VpouCtQFmEQpoupykQmHkXaX4we28unG3MoHzhqtueA3VK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQB2KsrtsyQWDWNKUXQofFDUCGurjzAGzEXvKe1mkzffwYa8uvTJTWjzfPtqnr5WEcpQRCumBGdPKTAySEKi3BS",
  "key1": "3Gxz87mBNCYeu4549cXDyrE9iMrpqUBx4iQRScSR8VJkaEQZNe6r9UN3MsmFJJ5xtk8T5veQoNnHbYtpkM8HqicV",
  "key2": "5rubfSgH8QKoJnpWQE58vWUGkf6kUieJtVi8b4JRoJikN4ZxGYZjZZj3wq5ecgwyQqLFL3RqfXKWBg8UxKX9CgZV",
  "key3": "38H4HquuFm8wMqMkkpqurBP8VgVhUEvmQx7YWyPTKMNPc8ChASbW16Hdy3DXniAEVPz9mTCwLuZUievR3oCUnZ1P",
  "key4": "4bXWMpwUkmpcnZYftVY9EoJTLSfQn3jbV8Gaeumiu8ZVHbgix5H84d3xgVZLtansVZCMakEZc9i7LDgZTE5w8GCS",
  "key5": "zHA3HVqeGZTJrAuX5joSZz4RXZdgR6aL4wCNruNDS6W4AkCoknxNVU1SweeMiDuEaxVd3qoC8KWBeKZnYsGtZoL",
  "key6": "2EjSP61N7BSTbMBM8PE3Egx62rEcsyzU2xPHqbyspcMfN9VLAE1jEntJJ4AP6nJTPwjwuC9Gca6yifVhSN9wYpv3",
  "key7": "4irQBRFMwb7iyv2ZUuxRZns4RS7ph9N6GV96HciGH72BVG6RCGvxLPDToHL7SFCmK3g39EgEs4yLwHErzNubz3wZ",
  "key8": "igpSNZKKVAMHL1uhV32aewWoo1vENT8as58NQh2rNjrE9z7xjgevN1Tmdhjdz7yEfnWGwDkoXb3aYBXCjEWnz2P",
  "key9": "4P6mvM6GbrQ1Kvyfco3YYRXUX7o8ShtRaruVXy9WpxrMpw4yJbvHx3etLRmBq9ZVqbsmC183LLpdSXDHz1SZQiCK",
  "key10": "4hw7GBMNKfr3XzU3Soc3Sn6BFUGAsxSgPjQCB7hPjH4CusUqUTeoBT8vSBR5ZWnPGC2EMtAK7bVKwE5aAsZ5QV3s",
  "key11": "2XoMqR78ErN5VLcbxHPJt6WgVU8KgaHUenywCuz1sj4ChijfQgWcGW219w4ATYaAbTrtb8TWyCozmfBTc3TciETE",
  "key12": "37pudpUWnCJPAEin5gaUxDEzuZASAqAkCXKofTzKUg6pUV7mMg26VPCLz1F8rG2kodbrZ3NeywZBhYtAy92AEswd",
  "key13": "5Hn66D7iUv33LYBF4G2wxa1EMKmXFmQo8qtB4g7xMU4PVMbYrybMKTe7oD3We1XRzM6gDrD4rsKARPQYs6pSeDTs",
  "key14": "41wuej6Ct9hoKT7wTFamzYdcSfLggDHbVL2t1PY4jkMHdPUBtbrEqAW38oqi2aSNtSdvXoe8Lw4MQyEjt1KSc7s4",
  "key15": "KTjX88442TaYf8T7DwCzzzL8LioaafmU7oB9yyr5ydvW7bogVhYYmwUmbbLJagMgRU4GV2mK21a2CCBUFSCFXYE",
  "key16": "YTZVigpbmvNBnxaQbrxDLcDxvbMiDZ1b5V3apaaXCWBwccdTcmwHbLoMtVs6t17gidsaRousGWgMKqfzceEBqhy",
  "key17": "616LJhNknA6xyo1jTSQqTb3UnZNJ6k5LjViP2QYeCuRMiJrgGo8WDY9Ff6HmTC54fjfwUyzrS4A3grZQa4NSEiVK",
  "key18": "2pYjEJVqoaDkGWEHMFZkaDNXZpJAuZWVtaAwxjJiw1NXwCpWUcAfizwp9qhvQ875N6vhgfMCaCWn1QkmXUoB2Rhw",
  "key19": "5NpDK4P7rDpL2FW9cscjAPakYai6gtPvDR9yaiJ4KB4pjym5KeXxE4hubBYoFJBpSv59Wxg7hz2febejkrdsBnBg",
  "key20": "2gkxSS6KhnbJ3NrkZScZiSZG7rMSNqFzmrxKsN7trka4uRNJgdBdaYQpZxp38X7qwzjF7MzNcPivG98555hFFhWw",
  "key21": "SN3nS8TU67sYyDtuRdPaX5BHDsBx3XGBh8kaDqxANJ6TantV5Mnuv7V8bXXxNhnN5aWgEAdKEwSvjGYQunpAkJC",
  "key22": "3sXqS1AHzhLrTEH9aq2uPurcdv9wMmCiFjySb5pjqyUzkPjNPjzTihgVJNE1sXgHBqv6u7XPEp8Vu9oG9YchxN6k",
  "key23": "4uDJZsJkY5zpThW5LnmAf8PfqjWn3BH8y5J7qiXEiwqDyVa542iJfB4L8afphBtkHcmMJVYwqn59n9fKUd3t5W44",
  "key24": "39XcmK1ngeEFX7jaj6wib7Q5rHvi3Vgoe8ZoBbWfJwMv98pNSNYa95a45Na1pUPBtP5TAxEMpndZPXzwCjCbzbwx",
  "key25": "3GjnRk4WG9DR3KhLLvdLG5xvCoWBUJMJuGYbMTFAxno2xEgnGhmnYUXyRX5ZWHDu3mKyzBSnbEzX6ymVgXex18yh",
  "key26": "JBk6a592CSdvAmX2Tt2TRVkyxNoziDSwRQF3rifSP7eM5YeKnc3N5HPqebgAopfFkZKkYt87biyHcUUZyMxGntu",
  "key27": "5eNLovQuaKuBuDnC8nP46wWPYiNK4MFk6Eby3EP35vUc36zyGodBGZVHE2JKULgH3ebYxp5WffLkxcFVNyPDZV9Z",
  "key28": "29MCNPknpNnpxVXoyrxFW85crDqoXRHzHqzdn6Kzb4KN28bUHZiv5aDUfF34GzsABiraWwAkGx9z52WrzBNnkA86",
  "key29": "55kMLCYtrMHN2FAHeeiLy6vKD2Qw77WvypfzEtF3NC4pyPAX5sZ9Pj8ymQiTJ26mjmmHF9cRSmt7ayoczBhuE3LF",
  "key30": "4wgky8QDdwad95Gtn4dHvtgSTg2vmgh6WfF7ynR5M1o5Kijbw4p6eQd3kpdJDtMKhivijffjE4446sBBBsb2pSHi",
  "key31": "3MJoMoET7wYbJU5aeTVHrL6zXKzPEdvmAJML2uMKiyd7AUsQNicDJ1F229ZJsaJKH781J7vS3k4qPXADP9vCnBkn",
  "key32": "2M6xHaVHwYFy5aiyVFVL8qCbjHobiWZb4dWSJbFuZEB8THBUaaBwr8nKDykTpt5TD5HzNjecS14aPTwJ4nwio7wT",
  "key33": "3qRh1GA2v8RNsZQPAvAufQEHaLXAfvavk2Q3QCWKde5FvYwkDjDd63bNbgpcn6TptXKuig5uieo5Vj5MpRMcBqzv"
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
