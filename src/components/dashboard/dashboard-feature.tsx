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
    "2wquaPSEXvnZsUmidwLgsNxrJ48ZqZrz7Aor6tJiB83dQfMYfqvxqpL77a9SZtMRfiYANgp59AngbcvDnTJLbXRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTEkHVcjNV6dv51aoTPHQvtqVSRY9CjKcbmvj1xva6CiZLJ57ydbihrfZAQKXT6QEo8AS8iQDc8f6EfaR2efgDs",
  "key1": "ezPtLJt75sQJqMf4R42meUorhFDmXXjhRHwHto6Zgumj5VXSqofCoxrCWSUjZ1TFfWSoTDq4rcDsNFx34mSYjdT",
  "key2": "3cposuYV8ykjkXfcsAfTxDPdC31Z5uJF27PUtCXseTmXMinjzxDjKVd628d35s7tsrQYxNJBrDHVK5HVetXobwcQ",
  "key3": "r5id3SpDj6pVbAS9oDZixxb6pkKZC5JBzNcFarU8hjWp7aM6SHL2hU4Key6BfNpAa9m2K9zZp7gtPuXZCBRYtwS",
  "key4": "3mf5wKnpqmnfAxyE6yh9v1NgAGDnP1FJv2qiL1hj3a2TzB7UwfkexAL4EGo4cpuUK4wW2jKcvBweCCQRBsFyRa74",
  "key5": "4qBYCVYDVvXJqTLDLhq84rRVVTx9c1MNCgMpfmUC73KGhdvj1Lko5zDDHqfqHdxhQ9zT5UqBBTreXsEJs2JXMDmw",
  "key6": "27pMnYiReceN22bme62Hii34dzsGcwWwnjqghs76wjz8LhguzgjRzsYpxqj5fKFhCb3mvWA6CBVS2bKBNGt7bfGq",
  "key7": "4z9RXS6NjCirRYT1tjiQECSK55Fiife5rg8vjiCc14VcjfqhYxSQz5sxJZZ6WWKx7bBQuvFeSTQSPgGoUTriFZKF",
  "key8": "4PGHLtJTMygNL9bfDdRWQCb8FiDVpjSZMyVEqisWpMZWD8PgtabowV7NCrSwjAZmXYTgfBEP6hg7sq179qU3TFng",
  "key9": "4ai6gSKAN4kU6PKgzQWEg2khY4jSVoGJvWWnTvLN5diBnccaEjozx2pGtG2dC4GzTc1Cta8Nm3RTWkM3dmPJTq1L",
  "key10": "3APzfYGQa4cahWfQhZTpMdG2mCzxN143H4UMGLKq1GAEXXkfN84VL7neyrHkbYE5hG9Km4RfrAq9q7geJfwfhnTE",
  "key11": "65Nm41R2eUXffXuivwKium664jV5PhD3tZ4thmL1w1YgCRNnHKqom6FoLucXcmBGNKBcC2utxSGYBRaLPFr8Za1Y",
  "key12": "5VbGmSVtqRqzXyj7yG7kcQf3paKF6srN8RmXMDykEjDH3WXNtftH1wPurWBRaW1Kzfvg3Wt4aTNMA3BbSiWGGbLt",
  "key13": "8uLJ6UmPJxpnYbQd9sUaEziRxvqsukidS5kHkhifkxJJRR9qKnuP8qkrPjg4w5ZN9kVc36ahmN9ET1h9SMKhMCH",
  "key14": "2twvQPK2DeU8YrFv3g53WJtsxXH8KFcXCM3p8WhgMfCTtAk84n2kkRY5CKfyroVyjLHyCjVMieVoPG3in6Eh2ocG",
  "key15": "Yi6Dk8wL1W1vg1qV8aCRDsPSUe27KyTSsb1vfFFYKHjtUBkxdwwySPVGrkCaHYuHqg6jfrPVvPDxjgT6WQfEtcf",
  "key16": "5D227CnojDorsJaBj316BkphoS9kJBFar6YXrHnCfrnCTepVKSCeon136uv1HX7zNaBYdjLwnoQvEHpgxF8EWfkZ",
  "key17": "5PyPTySQgDu2dLs79jRLBm6ofeV8sNQFYZcF3G6g5C1QjxKWb2ZC7vsrEspJwm22BTT8MJYar8CnL6MhrUec4jsq",
  "key18": "3UZHgEVA51QwuZMBebF43vxtrXm7Vgg3B8UrMsPBbnfzK8yxr2fRgJia8QY39dANf7nA129Z1beSyFoEkGEkNyYp",
  "key19": "3KFv1v4fMbjcB3hv7U7MfkG29AEexPdyWfn4etVi8ywDZ8nBoFVMQeQw4NysZXfNFRrcfrCfJrMA3Z2bsZWPwqRX",
  "key20": "3XPhpiYhqnYmQhT2ZRGrmAxCobogTLBF72c1tPs53UzQUgWyQWAeAueuQBU4ZhYdn2S1rC8zMjGitbVAV1QmqrN5",
  "key21": "25NATmvmaoXYWu1Y6T95tqBNebEWUUqnuoJJWJP9RHFe97TNLuE74W5Vch47ii3psTdHrtonGTajETGvJBUDjBfH",
  "key22": "2DLzZUbBxDxg1ogS1rHiYJo6sgbzCMvA6uySvyEokvuyCPQKHmJeQg1HKkML6UP1UbdSXDWC3bcnJf7RxriDxTxd",
  "key23": "2FhxAEaKk9xqWHBVFjTxkTacrk23t4SGS3aSK8xMBKD81XGghb59xT8MJQ3XMJa4ZvNXz7UjLLYgLxgPt3soTBcZ",
  "key24": "4oHvwPgysJGvLJKAXxPkMDw4SRpaed44amXwzUPadiwhEQMk2Sd731KRF36AkH8bPcfqRheZX3dU6X4akFAoA5kV",
  "key25": "59Qqj9p7dE1jXTBicmQeTntzbozTNSrtpEdjczV5KSdaY6Sf8KSD2WXP6wdrndZNaNs3XDuf8EryPC541GQgyDNU",
  "key26": "3qyPKr4poGWjGu3uEj9cUmmjrNpMQPawEPfv9RQ98KRYM4KxUorhCDdHjqontFR5SvFNkNPtuwRrnm41Q3KpyHKA",
  "key27": "4v3gMpd8saFtPaWMUvT3HzoBbNCNLXzkAN41y5euisLpWuBJNBbfstFGMGqrk3gSUtuaSeCQ3dRw21TsjSWEJhg5",
  "key28": "3kgk9FZ5vPWkJQSSPbHE6t3Q8rAWaLGGP1Li9Fh8Wn8YoGP4UBRnngbQkT4QK89zWjgvk7bjDoBjE7SD5NiEp5pv",
  "key29": "3tDTw2hhwqiHLSRQUHqgRSfn1FEjqssAMLxXVf1hJVdnetVbUWQvGYYBWtYjeKFukNnwcRpJPfwEMKZV849ZwGGE",
  "key30": "28oqfJ7B4JSWv3d7dQMfXCZoJMW8ptsWGZn1ZsYt6pL1PNivURYobZ7dVJtS9T2aMKn61jj2xnbQCUfFuimQmfPT",
  "key31": "29cS3zaMDq5MxwNmPEYRvSmzrrjyUFyuDmCB59hGxSJxpTaMB9TBJTpEvtLVLwMXJkeVqntkVy9tsw7ihWBH1pcF",
  "key32": "37MeSyU731QJvtCJQnjJH9FCcBNPkRTyztLsSY33kVNXRKB64H1zGQNaErdidbvuSDJgCQdvucySDMyWzP2S8uqC",
  "key33": "53MB6yEbdGFenTfuiHqLYxM9TRyMXZTbLYq39aLfByHhg2heArMry8pHgT8zpjAqAX8A6xkToPgYRFud74P1uGAp",
  "key34": "5PTrLqJgwE1epDbdW5JGGSj6QKCfjmwaxbQ7CrqLtFSMRKzC3RKugk8uPZykqp9ZEmZ2sqsyvebSHxS9aLqc3NSV",
  "key35": "avuFgFud8JMTZKBMvhcVm1QeoRW1LN3odXR96L1GDgp4wL3dzQeXFHeRvZ6FvK83Q8U5anJihKHD8geVzbW3iYE",
  "key36": "3n8VLCrNKKGnEKZsbrbK9xnVC4sCk7SzHmpujDNgPyStDbez3BJoE9v3AgMsatjLKT1i2ASBbz5iLwMuhy94r73t"
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
