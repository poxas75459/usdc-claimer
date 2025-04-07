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
    "5AoVjiDwykijA5dPrYZGMSrb6LzxYyh2vK9RY6n971t94Y2rxCH77DuLqS6J6zNDGMMh7t3Bp85uzAzAT5SwsRsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1qk57QhV7a5HHYvKK8e8iT3Mouqu3AWkrhTyVjUEYdMYrEb3zcLxyc2sTa9UCvxrrx7rSugtyTHFD8XY66zHzV",
  "key1": "2yD281DbMGL9uRNNJNQo5ftyrtu73uJE53LnhPF2rr6PCsq5HLmSJxjCf8hudrkMLKzYSoEhDtAK5nxNgbU7vU9x",
  "key2": "52abdKsmrrjSasaVc33kN6vMQVxi18119xoncvph7fjGv6aUkys1NVeLGxnkdCwKh2LsrDn53HEQKVddkFFhqBsy",
  "key3": "EEXHuf6Q1nYR78xF8WDEvrwz4UbyXbCDHcJbhiLKzCq2N8da7xBukZbq7HC2Y51j4WY8Tm1H7J9YL2tFpBWV4JM",
  "key4": "5BvGyBVxo65tAheJcFdEtHXP2VpK2GTZTmpumSyYr4y6CWFQ7SRjVwbKhXaZx5rtMyCpb1CUfwP7avdU5dbLtMze",
  "key5": "5vSLbNgSGNDRc64NvqPfYXGNyAGf3bwRo595azgmoQ3yo7exkeXMbpBx7DbAhf8g6feWspuPetcGi4ihwxVHj9rU",
  "key6": "4cSvWbgGD4mEATDoupnVKXadD3uQ9TaDzZv4ZKmAqqtEpkZx4AqrAP3DsyzWS6VmPu5PiAje31o3p7smkWyyfvsc",
  "key7": "47ZTJusPZQEHBUcAEGnhZMPo3vwhiMDiYaKzLnHbMKaGEzRYFQh1UBoRaDYMTRnYNVSEdddeavAKWtRshhuAhhzK",
  "key8": "26gcdhpKyfoBuKSDwHd9d2iPyJ4tepuSs5BKSUwnv2DufSCC7PdSYPRXB33cSp1STb9F8Zimzt2AU3FLX67Z4fE9",
  "key9": "m4VxbnuC9a3gmqcuWoqcc7uAZnGu9riBetLXzqgSjt8B1Xsp49rJBCqmdcfUije6v8NK5PaDuCHifZatxBT1sXb",
  "key10": "35pVLpJXyxPvnTksyxiqKsy7U97rr8zZgpijsJeTMnV3VqN9XMiTHX6Zzrbr9SchLiohL4D5i53BDDwLKvHBE7MN",
  "key11": "21zByQSYK2xUgCWQVf4kV4pdA7a24jWpEHeb9sJnFYnjGTYWYVLJRNNfshYh5NeH59xQUAaY1FMwXbMvgSMic4Zb",
  "key12": "5hjVicAUtC7tKPr8ToTMidj9Mb36eaCLeyTQJ2xaGX8SstE9VVp8PTYMncEZ2fRgzToq9zh3xrXR6fRzXjiUZ5Zk",
  "key13": "552B6CwGcyMEbzbfeimMXBtkt92GCm736tWqeaQ2pbU7T59JBbDeebpMSrnyvJSzP8SGUoJuvEn7Kz3Y3JyNymw6",
  "key14": "4Q3Qoo6ZKPrFWbsnBEnJjBSPf2M8RSX7JaVnyXuLUNTBoJpx5S8jCUEjRyD9fNiG7EH3D5ZjWdKhJReeKZqsw8PN",
  "key15": "3t62ZRaV9dfeZdbepfAkQbg1F3QwLhGibjhKH1Stz82WXhid1m3C4N3NDAM79ERxa5nT9L54nFVu42Dj75iGimTP",
  "key16": "4a33DZJc2W4qyn5eeKneBRUif2hjER3WUSshzUn9deP4DZYqGxMt9XH68pKUY5LRsVs644W9NyyTjQU3dfh7cZY6",
  "key17": "559Ttpjz3dzXLBYRNqFNxjr5d91WaR2AB9cBBP5apQ34V9iMz8ZfagEixp5zqmddbacQNpodwv5cdNxwjdvBkx4J",
  "key18": "2uzpWomg7HLehEMvvsJWsRv8J93xbT8Yt4w7mmx2rciVYBSUtRJgASSemyLWm7DP8txE9gyhAecEpBvjnMqV5o3s",
  "key19": "3NCsNPhb5hBjV8UGPf9Zpoyq7dkpcXC2LucMb2DFJiVvTSU6wN3VXeKubAxCmF3VKp7QvRVhfQNPWMTNqS27KFWT",
  "key20": "2qoXKoJwEZytPenTRY3FVRJWYe9GpGsAJUbs4q8fBpSR9zRuEZesEdx9WTJnffwMGRcidv8aFj5pNGZCAbk46U6H",
  "key21": "5vgYub6t5LciuaADZDzokovtkLBnAy9nCoNPiHvp9RM5ZWL4qwEawS8wgJej4vH4zQ2ZPf8UwPgE4Aj328yirAaq",
  "key22": "4c27KEEAkxoR6iYdaoNB49ap9zBbz96AQX5FpChnk6BwuPrkwxws6PiHu7HE8wgd8moAZZKHmj6bgP5VL973TbKM",
  "key23": "2eFRng3MBAadvyv3NbtYdR6TKt8yXmmPzCRHT6XSPbTWuz2tJ5QhVXCWgrbUqksAiUCQCy9EcsJPCuRyP5dNXbRk",
  "key24": "5ioTYSs94zSyD7DUtwSUg8fc83XWpwrxCfvGGS5mYoVSQST1WXxXny2eKqQwmHq5jXoGzGXLU7DyvQ94t6MZtSpg"
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
