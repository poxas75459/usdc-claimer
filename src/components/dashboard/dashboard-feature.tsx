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
    "52Sq3U2rwfhZmC4AkCYBpHfLdDMiuacP4ivLaSL77FR5bbHMQ5dNMVPJ3zJv2RCPHGEaY6Wum6QjVTHX9Tgyp7eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMDUZJmcj7cukJM3Lg4qhJtTZGbWaZZ6yVxEiE2kAUKwdyN2XR6LaTGt3KZAYy5dJSAmzWbQJrMd7f9oZbbxiRB",
  "key1": "2zmLe4AvHVtBSisPZ5j1CGRmu4xq8nmZgs5RzdfJPo3Kz7fpDRiHiJMndmDa3m4hjzmeEcbfeC3zwFj61YbfUDzP",
  "key2": "5gDhSDLVfyB5yGmvQzi1MiHiQCVZujAg1AJamBkPR4H6iVaHJ9PncxKVmz3i3i66NJnNKyo4rNbkmFCqtQpARxVp",
  "key3": "6GE5aQBt3CFQHmCqP7VfLA7Y5diAzdS8ztiwpT75sTPqV9MJtgEQo8qSg7YLzcaX4TEgvGjksa4FitUuCR1spAW",
  "key4": "5HCsoRaRsEdnp1YAUHFnKiVqLS5CrzcFKQGPS9FRGX4BK5zkYNZoJwmJbmAsX4mw1qmWUH1AaexGJcqJMuFaWK4Z",
  "key5": "5Xvj6vgDJtExmqTNAG8chxTApVLb5EsxRVbkGtVvQm5uf1bhtyhg3XVgnmb3MMv8KJ2wUtUcXdU1cm5LpDAdqXmg",
  "key6": "4eDBUEyQPm5z9s6CwiBVjF8BpUZymBMwdGYRCYsVLJQfAh1E1smVJqCcKKw1vMdoG8g66Y1nvm6HF7GayYKjN581",
  "key7": "4tby4c29rcVBm6sXvCiqaofYyCBZfBWjcbZRxVKwkHoJMwR5cmTQiWyzC3qZxYziD3JFqv8ErjbLgUentuqBc5CA",
  "key8": "3MoMAovgEWT4shnFhwK7AkPYB6kSQJSi6MkQb9yqcbdQKNvgc5jwnywQ4EqhBNAhQADacRCGu5hWu7HbeubZ4J2r",
  "key9": "9JbRkZFdN3pxKdZPQUG2AgDR2zZAPYxagMzDUdkZ36xCtnndB8Dbx9KBFQHHkcZryt2Z5XVqHUvHXSDwCo3vb3J",
  "key10": "3MxwstfcGgh7mUMMTNdKzGjFLHi74mPX3VcJF351vntg6yMrJm4ZQYQKEUELgFjgTPjCdZkbL6VDzqFH7tRCgunS",
  "key11": "32vpyEya5NDER9wdZQ4gnPnW6D5K3EzXQJ98C2C3j4mg7qRXPdUgkJuqfknRPzkaxNgrXrhyxw2LnkFuv438qf1m",
  "key12": "3fjgNBSMayGCb6VCjAHV9sB9kU9Yu9YXaMQTrANSCExe7KFFCax83gXXSKRaM6rof3MUArQgqTNEm3GTg6cnD5kc",
  "key13": "5coT2gFcHn4G2fWvWAgGE41RoWsdGC4fr3XdPwiR89aNpK9Rd1fc4oFJ7d9nSKwYnda5CayApVMtSxHMKyuv2EBd",
  "key14": "53X6Pfjs5eCw4gdtkF9wLSd9yivJXneSrdQPx9NqzCc1X1RviqHhQSYKMk5VbYJKUk77kopZwRfmEy67rkHwApeA",
  "key15": "5YNTyaRhtxbatbSvUv1XKNpDJSfceHXFFvE4hMKnKwvRjtqYeNWr3hckpgXa53SgPae6YxA4fEKeGJcWwjWdNNqa",
  "key16": "5YhdXYU3CoKivdXdyyGXia7aoK71qN4EhjvN4YQAaJPwT6F6uncwMBWCHWfRtXyb5MTaJZR2sFLH6EqY2HFPye3C",
  "key17": "5QvM42vdmbQuyNhm2p3AmjF6tkhpR6eFpiAdU79GCRpNe2LZAHqUrzxgceCYaHbR44jLkctWawZCxCQSpk4NYSmp",
  "key18": "5gPASrVWZPP7MgKogA5ZBdWfjhxyTEddUNxz6k1cfb4arTE6QanNRQSyCEhPJXHXfNmS5c3CGLhDnfATuRv955Xx",
  "key19": "2qL88gqKcoQwhhrUKvAcY8zTG5UmKRj3fZVfmuJCiLvjKr9pThWuzUZQCYU9XNgf4D1RnpF4zFibTDDyJZvWf2Tb",
  "key20": "3NyabXhQ8ogL6P8pakT5un12bLf6R8S3iDuwPWdS9g5Abfj3JE51c2sKLUXCU1PVxaCS5nUB3urrvjZkLf6Vac25",
  "key21": "2YAeXDESL2EJevNg1sZSJ5gsWXJ4RN4c71nbHGHrH3dvfBjCZzEppzzLjGiFihhyvQJXNCthJTtJfxUBL75KMgoA",
  "key22": "2fKkfXD8NMSr4t7tcgTY22DPFgP8PKEAKQykrNPHEPqNBEcemNrbYXYGaiqApxytxh7ZR43f7GqPZ1EwSVNXZXrJ",
  "key23": "2KkvTZhgezgxyKXzogMNW1sp8o8FptrTqzhZ7AetkzKXqbCaFfk513v1DNicVZpZjvBsEQMhjnRx26kyK4sw2z33",
  "key24": "42dQgwXKNTnsy43tsw1a37Ze2ryzwbjrJ4o7GU2hVFzjh3Ux4SXK4pSs3fZeE9BgFnoaZ33sWSsk7cEBHiCKo7Zu",
  "key25": "sQeWcrdSvAxFj3UpAm7ahB1a6EQKRowpivV8cy7hoGo3PbCdLZVrNvKzxcGuofhwieagHFC18i99JkDquD1ND8z",
  "key26": "4MfogSRS7qzhxRnu1YZ3aug6isgBxBxcpwxE4sAv7zNr9qKeVp1FMhgxbKJP7PYRFpcg6j6PDkn3kxySSqc3L7np",
  "key27": "5UoPxJPmKEzkTJRxRtdZTvA2pnL8TP717VNdU8Yv4fdn6dmte3sKGx12YL1qNMFbJBwtpfaKSRVbi4u76fNzjKKu",
  "key28": "38Rrcdytk5w7aSfQop21hPvren45srxyEc3K71yEPy3EfFpavubk6VeRqkRp9hN3yjoJzFPck4Jy7VvajaTFvyQJ",
  "key29": "5FGaywQXDucrBhcNBxTuK2HxNRVhtvZcEq4CtZGxaS7NnHiNEJSa6yk93JkTeezcLH1C6Bcv7AeawHkkEscsdcMp",
  "key30": "4A1tetWouTLS4tS9q3kwLVezWC4dVa1Kk8rDSNeMnHk25yn9pPw4KNEVQgKXxwNxgEwso4TQSdNmgFsPvhuWNVtC",
  "key31": "5G5DbWnVDuesxuFagyxSbENct4izMsAHx68VK67zQg2VvbAZMEiw4V94KnvnHsz8hBZipgBkK2Mik23TA3ZHFDz4",
  "key32": "2HjkpvW8d1BNphNuSXJeW2aB6fk64L7T7XUbrigM7tCYvAixCDdtacxoJihqEhEXe8F4hLGmdK92pQNo7VhW2AqQ",
  "key33": "3TKx4UsMu813GESNjYoycDF6V172Vn1DaiMnb2sAaaTjMf6Dti9UgppC1EMXgCfqLaJ5cVmkWfmUSpBzHbsP5BPX",
  "key34": "3mQFCVbHBgkUzeLpwjt1nSnfxTk6UPvopPmeoTUf7sJNgPQHc8ZbQLg61jZd8HuBVGTJucxFqz4xtVWss1wFWCpz",
  "key35": "672eR5ELQRaHcVV9rJLRg3kBNk1FxPMx6qAfeJCadntjCvUJFBYUrQfr6n9EM2zpGvwnC34QusGMEW8j4h7HNRgJ",
  "key36": "43MuYUX3CHDdWKPuQTjQv2Vmh4KMNwvcjoRaY3dqcXJxxXq43D4TKMZMsyydrQ4VWPZ4iURcgBgU3Jx8naBiSLR7",
  "key37": "3x7wk2garP5MFUXMAzsCKzwqaVCN3wapxUEyFpSB3X6i1V1zeCZD483kncksPN5xssYnyT5Bpke5vV2YZphyieN6",
  "key38": "3pevgPXJsLXjLkfGd9NuvgwJMMvpHeTMsyytjDfYvhfuvDWZCphjvKuU8J8PaxuEgzhwV8gUbnx1wei3tyadxPCF",
  "key39": "41iwJs5g6mHLyufiYTzWu7QGSed1yVdev9ACWby1bLJBjdUKyuBPxYrKHDEDqUcW8nVR2hLvLrtja11M79dDVFJJ",
  "key40": "3JfC4naAdQDJBvgfwByJorx1Q33rDCUVV1LgxkJ8dW4QtoMA4Vo9DJQoXjk7juQ1aB9FUMs3bkErUvAGGDXFA2RT",
  "key41": "5K388dHPoUgcUJjcto2ZMwWWLitqutuvEtSZjUZ8xTd3Dshhuae3bd6wZ57Sef7nAhYRyRnsQdvPQy5vQVGsvyep"
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
