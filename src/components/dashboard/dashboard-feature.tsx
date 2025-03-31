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
    "PytSihfvgmemp6k5r1AEMR2BLk2z5fGX3eywCc16DHDYV62BmwqNJBXkgreSGXRBWKYTBwbLHp1egu6svCbwKyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxEGfMhsorBcaRzEPyCAMwxWKGAYU6Gk4H3zoR7aKGxa1xGrJWGMnNZpThADSDWhPtwLCvhXjrz6jpPRG5n6CbR",
  "key1": "YR3jfjyW4spfotQCpfhvRWCQxecAdeEB5t4YNcyxqpKaKN8Cpo49JP87FfCScv7Vn3KWAoccNckGpX4dTwDxqrs",
  "key2": "48sGnwPuNUHc7doZAVQw4WWRjZK2qAqQXrHAMGSh9J1hC1wHBCronfhtaCmDPPTQ6S16FzyqMHAtxYmy7BVJ3RrJ",
  "key3": "1qh8qK2z1ivLRboSfVeLSgHQnZZtrymq5tqEQsFhXZSwwmNAeRG6ohmySMtpnEHQ5prsFtRuj4Fds5n379EFdB2",
  "key4": "3JrkfXT5419S19NNKnRHKsfAwhFzy3y4XUtpQHRd3VVCNdJY1LVRHcXW8Zpy6dzngzL2Myrrm2r1vZfydTDqSoKR",
  "key5": "55Tu1HzaWVbBnMuwwp1JXEwZmYRVwUs9CpL6VAoboJWhJCbBeiXzufACFLr5y93YJHzcsXUjeRU71wicqKBaWwi8",
  "key6": "4exnEbygrurqoxhJXYmpJQdhTUdoFZujHBifaUcnaGCnwTsKAkdZ5p6bZewcUcSNbGzc3zx1AYMBL7qcZNY3s2cz",
  "key7": "9ZKzmK1nH4HURP44CXMfXUP4M2YJ5VSdfp8WZjZ19veHWBsCDHz6CVaGmQLArncoSajCPhCu2kpWaSNqmsF6r7V",
  "key8": "CYpmeEFek71wZE2cW6GZpfYTe2h3J6jnQG5dRDXN3bXB6aBh2LdV68YnoCkKu2mtR3ULw4FmXNAc3VGwmFbHSVZ",
  "key9": "4LK4EALAu9RP6VxWCrCbsqdX3DVeyVu7gYtXNDvzpZQL8BE8XLRVhFLioaTru4Gx7ZWjF45Bb3eDBxN9r14z2GC2",
  "key10": "KLHzD1hQVK1VkMtJh8VA8shuChkkampYkAc7rXjVHPVUidnLTYXkB9BCTdRURiXMcaG5V6SazDpH9yAH6xR9XqY",
  "key11": "5F5dkVs2rgkZ8kABtBvrLjicDafzK629YJHMsxWjFV1oMvmHWtHRr2gohv8QGHSVHPBhhmTLsfwaA7uH9wNyaRe",
  "key12": "57DmBzwQCGdZyR8ACKjd6WB1YkudLmqSVe6qdokCwFbj6KELxmK9tp9k6hFHq3MWFyVCvo8SnKXW4FcarttPfQV3",
  "key13": "BjqGA4LCGDDkifpxmKczSo3b2nPnj66KL3vzJfJfnpkGnrX4LdpRDYYMkVNFhhAbyQJKG2RbzJVjiR5YQ1cfKBD",
  "key14": "c8mCjFsATYSdYr3HAiWETdmzeA1DZGXTyc2K2KMrhve5oPfsJUneLraUreSCbexNrbogpZKa9SYWyduTEWZe2mW",
  "key15": "4FUo9xp5s2Rymn8b6XcbboGjzC6sXoFpGFdUy1mCskqNEgQAaGikW4QAnjP9gUTDRWtTkCM6Q59SioPw6fJNpDtB",
  "key16": "3uyfAxsHPPGj8JRrELrs9At7GW65DJC8E9kRB4FUFFNfqxvBmeHU3Sb4xj8KcYTyWA5m86qnE7tLKb68xdHNJunB",
  "key17": "48RmUfwjDD92UcBHZXDgTP2z1VALymjKTziVWMABCmVrjV3pnajr8aqhBvZeXY79vDjGVsoqLovibeT9MVE4FrDL",
  "key18": "5JZDhLoXkDuoYw3MnZXmB4kLfJ6sBFxnSVrLmKBC9uQ8tUhGXCGNtAbhNPJUhkrapoWnDyiBQ6KpqupZbX99fFMi",
  "key19": "5krNDaRY8wb5GHXuddt7HwgaYjy5LnYba7fTo5VyKfHLt3H7rvbGmBTTiwfBbYkTAv2a8BQLQNFKnadn3VQUditN",
  "key20": "5p3dpdnSHN44cnTEYBmXUreBmnRFPj1pCyxQAzJ3y79sU7qJ24ttkyfWP3YegsepZEBW9xTN1DwDyooMQwnpcmge",
  "key21": "2Gtnv8V3kKPPAkkec4FdjQasJY37tMBChGnKXPjax4vzDcmjpGeQjGixXyGbaQz9wdxX8sqiJZHamMUev153ejwd",
  "key22": "JaK6rBJhTL7wLPkndXSp8c3QTL9f2wYxPmtn4PXDdKNJsyoUqN44ZPtwaf918SjBjRTHozxFGp7YcrQwL71nJeV",
  "key23": "4uQUi7fJ6SR8Dj4ocyXWhDajxZnSY14ZMc8gbhW5nXYoerB3Bigv9fWRgJ8Dspx532uMiCyh9umG6vWosXko4kR",
  "key24": "umG2o2f5BzwvsRbNZ1DL1bGN8MN3Xdw4MdDohmukvbJ2uZvSEp2Rir1fGTBNnejXLQvHuBQwX3e98se8h8VXnXr"
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
