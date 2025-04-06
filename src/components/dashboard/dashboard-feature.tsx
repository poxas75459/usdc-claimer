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
    "2utLX8Bfc9wrAfvt8jCSGyQi9zSkZdSc4hkGvBZZiWnuoj6fFrxjHRZh6SnNUPfWqebKvMxfpgDDYVWXBVpvUjLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCEcusJUj4ujE2TfxrNUgdAHQmEPP7dnAcyRqia9WQ75hcGBRr8hjed7twR5VwCUDWXgM4Mh7QGZyZ4rrm2GbEs",
  "key1": "3C1cQn8KdEo8xHJ4DY7gvRRM1drf43gHwdKnuHn6LNLGdnp9LQQmiwjFV6sFNYjijUN3FiPd5tVQ2VmDpN5xqU68",
  "key2": "5iLG3z46q4WnWwkdATMshZvKeZAFMY1tgCt2vHszh3rSdgZrqjQR6umqxhySbQzV4sswAebZ6Xj3Y3Gmj2FXdrRN",
  "key3": "4SoQX59Y7espKJnYRpJtXPCbZHJy76PGrz6RVRwgaiiyPSi4QF9tLK3oKEUgcRETLVGueCtmwiSnCmDzXBi3H2Y4",
  "key4": "26h36qPhaBkunLRsfEgaT6ZBVQwmHDJtgwrJyDLgyJxGN5YaxhrhNxj2hj1GypEkQaFTruqy42C5Yj9iYuzmirHo",
  "key5": "5xRL3zzGxGafNzaSwZRdwsx8vEVn2HDke7JMDAxuGx4kxSx36QofXayywg5vUEG6mKrDgeP6oT5Rf6YFfB1Kj7hn",
  "key6": "5wEFRkVkaphcbi7uJRk7TXmb8yuN9Kgs6N3j9nVBmVM2VkeN9jn3vwHD87uF3PS35yp67DaxJbX4ZVkPMUYHY7RT",
  "key7": "5uJmviDBC2HgC8gU1Sn8sbgMLVZr9xgjztAdqskaDgwuBQKCYqirHxZEzvSv7atnWo3uBS1wo1mEjc9Tq92YWE15",
  "key8": "3kbZXyYizGBBKNhmHEf826ZzSgyVNyZW9nqmmiznYVDMSUkE7MEKumYkQVYpgAN7ndziSRzxQKa98BJoWzsGqvvW",
  "key9": "3tSYWgYJg28iY34ai3j2LW3642AFhndvkxc1KxT3dFAvgGZmsKXadKFdVmQaEsxKcEr9R2rpyM2EU4wyNqHc2X3d",
  "key10": "4RNJGnyUTAy4ktut4fzpFQuzk1ZMFVRSEqxySZFVyE4wwepKWkkdFTQj1UUUNtNVkbp3Zg9rr79Q7fGCP9ERiPYe",
  "key11": "5XjCZdAR1uZQGLWRxrmSqrwM34j5PXbP2PAG7qNnbmtHJwevqd2ZXJ2uKphjP7o71YiQT59cMXDH3Yp5JSaCb1gV",
  "key12": "qnb3t12RvRU58vsBeFcCFsgHwp2fVusgGorb9nepQhQa7B9fTPJ2LbKRWXih5AAre6CQEEi29Y5YL8SZwesqnUD",
  "key13": "3oPMjmPtGQWSKuu9uA5ARDhMox9J295RWvWcf1vKm1y8ozGhrcG8v7fmFd4zDn65LHbsaNB1ATs2pdkygqCCt6g7",
  "key14": "2YW6UmDbVAKcdAhbU6oXDhXU3yXffz3cvYvTRV5GbEwKYi8L1swyjYF9gwGwKYMQ2hAhpA53XWukP5oufzsCnvcp",
  "key15": "ARip3kDPwLheRuxAbfxZ6KJ1BysAH1bUgC5ZcQ8ovsABDtW3cK8FjYM97cnUuDaQigy4ErcJbHCyctu4SMkv1vS",
  "key16": "4R2vP8oJfoNyoH9jpVsbnL6nX6DCMiaMeVG5pzcX1yGhsd6WZoa2DH5mGKLUhsHRR4vZ1dkLFoYHJpm3NhhPZR2f",
  "key17": "4swfTxWHwqd2UyAimsfKRxSSetDp2sD2zj8UvGqLxZMMjHvinmLDEw29hE94gxQ13SYcKMCKoCG9geCDzKRXh1Mh",
  "key18": "4pKu7b1oowh9Ubfmgcfs6LLJ7MprPitiKLsGdAPLZQzHhXw7MXs6XtV5kaY3ya2hTUEpaB4TgAbRwjdi19igaumL",
  "key19": "i5AyEvSCqTGPFhG3GHXgVi28x2TpVxdioXxfYdX3DGTMEkW62ZXo9DpuT91NWzpGLMoWw9CrkBUkXym3euDsc1P",
  "key20": "4MYVhYbduy67P1PFcMMjR2BYbSfA8EDfDAv1YjgFUewXb5a2tW5fS3u3bJ4nNAKdy15ia5hznxb53vzjefvArqDA",
  "key21": "2Nbw4kDa8faukJh7RJGU1zsvr5MV1MLgvtVdiApUwvpSToyQkH7TX2NbYiewLrBK1S6RAXZaNWfLG2f4o8jojutv",
  "key22": "Z2bzAupHTfEbTeHPCkoRT22negShQLb6KCSREdRppLT1JBqchnrYRNLJB68hGtoBkAVp4L1bsKJ8rrKSy2bcjuR",
  "key23": "4hqMGZn1zRSm1c2LyMUjoWEhUMmVLYsiqyWtNBCBc6WQGoZhZPTFxsjfhqixhuEJHMRaHSfAx59Bo9t7ZDWLGTcq",
  "key24": "J84aGzUMoop4J9uvkug4Pdy6HQp11rFWT3GkCAUKWvZNMFbdyAUCuLXur3fXbEgxnwQXizMcJaT3DxM3MsDggNM",
  "key25": "36iTJGXo8GW2ehMPZdCkfDdSM2STPZdsf3tNb1FMF3pRz8bHTfLWbCLGwBZG69RbV4BpvVBXCZu9foqqGXw8vYve"
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
