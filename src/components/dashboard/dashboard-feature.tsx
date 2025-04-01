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
    "3FedGV7ArBQk7xK4VpHNeRusAqS9d6yMbreTTmRncwu8hEVFpvyr35WX43n4kwgAJ6LSVnjoA3qfVehQzatacVmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9nm6mSgV2or1tpSzH8AsDNjdMFvR3CzbAh9YequnmKiyJek8bhRbCWpuK1JhfZ7EMjRML8rDijP6dEvXdqnTdt",
  "key1": "5hZrRVB2N4WC2LkQMGawZgWw4BiXxHGAF3jAosAuU4RyBxoyU4khSKccJ8rUHGT1xgQdsfe2PM9Q7ZfNJCrYj9pN",
  "key2": "PdoUaZDuzXisNEHCfhBPJAyNq4D92RFUw32NmT7LK71mN7hU3i6rDJh9567wArW62TJcPBs7U3s5R89db3xMNVs",
  "key3": "29eX3ew5gW1jZBw2gK77q6jFJGVZTxts5hqUkXKZ8XVrNgoathx57ufCkWcvSeZ8GC9LW2JKe9gHzJ4ZLVoCDGb3",
  "key4": "2USQGSoD832hYT3hkM4pUHJRtaTN6ZGpJtUtWVBcBcaLpBsYw8Rmki7MgNBsnJanTSX1125d6Z5JmzaBNWuqD9i4",
  "key5": "2nHa2VifZVkqwPEF5SnqapR4fqHdrhGzd8jY3GxSia4jxTKDmsdZ2JXhCKQkARGoKrz3rEFrmpJ4GaegULPotxcR",
  "key6": "4BeqqtSwcUBzPEW5XLFXfxyD9bXJ1LoPbnkt7dvRKBcVsQKymzZ5qbY2RY36gs1o9LNh39YQ7Jkj68LVfCHkTyHA",
  "key7": "4AS8FctoS22qEdLWfrmCfGCVAFvCKdzqURM164BXX9kSdqt5igDwYneYYtUtriWH1nYqnWNeKroQP1vdat7j11fv",
  "key8": "8CUn5Dn6QnvczaBLVaz6wWsrfdsxx8tDCEHFDQvdL4zmPfaKk1tRFaVBeRUpxQwYkhMgqLT27GEzGpvmHwc2CpJ",
  "key9": "5SdXNn1wwPQhYYKZKEKnFERwKSU9ccqRCdw51Ud2hjgTmXjPAX6aFXPS1E1yWYR1pHfrhLDeew55Wm3vYsE2RiFA",
  "key10": "2VX62TbWPLgaihJpYzcfiSDZ5W9ny74cgs4qfy7fSqGAAs5oKmFsJDKat35quevRH7n8bZ8UB5aV23S6YZZtLzFq",
  "key11": "3ieRAMe3Ya6zuRkmPkwvXSB3rGNjwKrPKpP1Jog9z6GvnqZV7cdcnjA9hbwrZBfWeznaMGAnTbQE5NLG1BarqSjC",
  "key12": "4YYu61E2inrLnjBh21StxPEsnGUZoVobRJY8yPghKpjnMY8SqgT95Qm9x7BdgrLMeidUXmXAeh2bJ7uo967dsHp7",
  "key13": "3acRcqbgv3qExPQWU2MhUePD1bjUuDfF96DvpNZ1tzs4TYxykr3SWbjUsjeWzL6vT91sHtkRcHVoWPZffPuXmU8Q",
  "key14": "2S2caNGmp8GMeuBKtjoRg7k7fA6gtcAdS7DDr1j6iG5Qka223d14Bcs1XNXF8wTv4BLL3ZKrssdZ9r4XE3V3wCPJ",
  "key15": "3So88ZYohCK6h2zVxjsscRiScRYPbsh2V4FsU9o1kj166UsiJ7Spe41w53GzFMKai1U2FFTdpoHUcUs7uwmhyahe",
  "key16": "2t67QYMw6y47nFbCvAVDn6V3Y5STivtAFKPXgVon8xYDib2Peh5DaBPBXzBfqrKKbrifsdMf84xqdMv9TkbZbuD",
  "key17": "5kPUhhmmfME2NhoBnWdp8texZzxUd9HTpMGg2b5o5Kz3Pm2xAUB7GT6Bi334U5GyTRcsYpcGZVQmSo5mbf451kea",
  "key18": "3DSRt7b2RZTeZf1WGSTR9XGfv3H1stfRwS857pzNLPw9SjLyBQ47PFqEAe6U3zXE93oLmgxoJJP6tzz2yTCXtjD5",
  "key19": "3S1qf6e8RZNqBgb8YDbPL8GHfLiYrv1rYoENGjDJxvyUsmwnSvmeoLQYTzzJgM8KSpjaRfctuhipGCc7PRKSu8fL",
  "key20": "3SBF1NkdUbPSwes1spMNAw9gCHKVPpBNmqneCdmURF6zjASXX4jCnX3tD9utEgUyYVdABf5gqUietY9DojLrirLx",
  "key21": "1EaQvm4cXoPgVK8ru67qf7khdSMDu7ES3LvFws9x96RHT2LZTyZaXuf4tqrEUwPe6Hm4WEdJ3Jbb2cnG24k7pGn",
  "key22": "5NJCpHgy7dbMXSA1VWL4Y1H7xFHhareB9f4RiAyWNfRcLE3psgkoo3jYvcoN9hdwJyNES5LPwsSJnN5tapNYARfw",
  "key23": "5HTehM4gNAnF6ecrykN12FHTr7X82m5gpbRR7CNXRpXBG2unzswVuLCUuBWaBp4LQDtCXKWNmi3aQVdNQoYNbQ5q",
  "key24": "52gTdEoDA7eNQ83nxCmy1MtoSdT2xqwHpxhzAGkfvxQdfmsTy3YJP2bRjS7Dku4tRPLS9Q3MdSzzLu7FAPPs2PYA",
  "key25": "MrFjSHoyXhrPb2XFmaKUzp48QsrqSQVc5MZtzeUJkoHNuTax3K6NPKRAmpifugXqMm7fZNNUv9FKXkv6pjkG58d",
  "key26": "2ecMGU1y4FBWAGHaRp6ndZwwFapWK83yBjfzdHy93aik6afbcjnWSkHb3ByxwgqKBQUc1VeCk5v1wVnc9tSeqVbs"
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
