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
    "qZGQXviGV27x4Z81MY2LWi8wQJnFipPpFEKhqMXKbAAB6gnCZUYGf2UzVt9Qcin3ivVqjuXo1nxscAvJmMGkBtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9vKifzPfTxtbVooGQ8kExZrdA1e8AyUYbhA4Xsg2q8LFHCEcDLpbuuDyy6G6wCrJ4G9yth4MrS4E9DtYBKMiLm",
  "key1": "5cRwfVH7LFdupsFUjcsbBSMLfieppJFdytMsHJAMzC6ssxCaEhcP7tYdwePkJZS4KqQMpC3AQT3j6XRkyQLp8kqH",
  "key2": "66rKDNQc4jaMbxL6TsrbeqR8ajAWN1oMEgCuy7Fz9jTpXZVk4PjtaDKjMbffiNpdk2gjoo4dk3M89YcL2oZDyiAu",
  "key3": "4zSWXhsYDykB7RswR5nDaqkWQbegDioACK5NioU93MMhUneWALdCfBTk7bEqeg2E3fuDbTKuQ1dyMBw1wz1MUH4X",
  "key4": "FgHZ9X7o47kcCmetTFNRjDvMKSQaCAVdhNE8wQLEvWSHwfkdtVJfsfJkfq1eNF1ofz41yFuqEMnCzbnF2TBUZfX",
  "key5": "6PugVEg6LyNuqPn5BS9kS9C7tvU33qq679JeHqjtRBpMqtj5jRq9pahTw4KCC62dTbd5BviHjuS7ti5L4orFafQ",
  "key6": "4wpzMD8UtC4PE8FSy85W75PyKWj2Feh6rDMAGbF9pYpErVuTV5tWzxThrc99wxGyMwDvbsjuTPURchzgkhqzQRoG",
  "key7": "3g8EHvHjhjAmCek94TN4c14pmK5MrL6KzH17uv25bpFLH5gfK2jhN378pC5BY32Ez8VU5yg6wVKmwbvgyLExk3KQ",
  "key8": "FGmKEzDEXd1EZpxvvBJXnQtNaMai2vQNZe5gNVajom5GRZr8bQ8QbsNvJezpvKMzHKrAoj2GQaaWAo28XcZqqgQ",
  "key9": "4YC3sMXRHSLWuaHnLd6wCcJ8eFvRWasTejYPeAoQcjeSB94MLTvU87prtoQGRpTyrc4WTZL8PvGeTYMrQS8aVSAn",
  "key10": "piPa8RFkuBqXxFGREhevndBfZXJn7odUqhkfTFuUuuDbhhaXYYLkRwxUkDogS7dGeAetSPheYzueTbMyfjXoad7",
  "key11": "3uRw2PVnjdQvoKstPowVZFPs8dk3tXeqrE6jAjYmDfYVU1uk9BfU7H88KqXaVM4fyPsQzBfynnYh4RYHKi4ZqbV",
  "key12": "3v4hC2KYt72qkRs2QxQ3p5EV9FFqdJc7Jog7UKwZkR1mvG6sn7Ayci2oczF1aAjqmJrk6eNcEMCX2NeGPfrenWSS",
  "key13": "2pefXuVvAHb94AeKZChL9u7qBSc18Eu5WCtANc6YXcoVRXYbFZLym4qLhj9Sf3rcmkvSNfVPcnGYkWLJiCKSectH",
  "key14": "52KmJsst9rWN6Eq8n7JBj1uwtuEU9ksyNMhmYJWBn3zDP2dgh46MyG9xLUiw3ZHydjeTHsycHkp15xkLcR981RJB",
  "key15": "2JSNdgXpW8PaojN1N5HZaJqUaWczEzPYAYYHbBbjBx9FfVxmqsvbdxTKLNvwLP6VW1n2je2QKrSQHBqsMfAtbCaL",
  "key16": "4XzDWmWNubrqYcrwPjFMi5nhycUr2vaQqT3y6Q6pmhX2dx2jYK1CMBGvrapjSbmYNPJdqdAtYEuh2z9ZQvUu1fBp",
  "key17": "rWyFVqve3Z2RnXA6j8DHq49yKzkr8dL4hvJq4K782f853dic1LJc7YTa87CCD1rSYaKKYRKAhgmf1TKbAGSBv5c",
  "key18": "2S67hZz459UiQPEjyXagoV4oDyRX8yn71PQ8Y4xCfKrvfo2CZDbxg6Se6AFnJie1SWc8qBdhHJtuUZhY9DZXp6B2",
  "key19": "vkk54SXMqvebM5NmncL1zgW8VJT1k2qEkgXyw3Z5sgfqoDALUM5y2JVRLz8MajDS4iFZv3YHNCCBARXAwAEFDzr",
  "key20": "2fJSzdH9oYBCJqG1HNUwphYZ4zz8gtYZa9TcRV1RrojAYHpVNZbbRK192EJhEzx4rjH9hGDiqyvuchVXcDZFFvZX",
  "key21": "638k6dUXBVEWwoVLJ9WCSKc72hksmtASAtsKRZ8QXTugPeHkL4Y3WHY795P7QtGQSkSkbSkqCfSpH1NZBG4Lch9a",
  "key22": "2z6ARB57yfRKY5vUrt87AC1sGm7HE3Czwi88YtRxJDEhSjqWYhPcrfpEXXgMYVEmgwVAozASaoD4qrrXxSVoCohy",
  "key23": "4EmGo86bAx9VsBwb3n5Dui6F5Az52cygqXuTaub2k1MjXoGeP6UbQxxUaoi48vYtJhzZCPXa8zgmg8tQ7FhWobet",
  "key24": "46ZoULg7dQbCZ5xiku3zG3hQ6wmqccT1Gjk4c3CCd8UwRELhqtwQS9BVMtTidGVUALXAiwjMcheSEaUD7vN2b5kJ",
  "key25": "2CxDqn52TRrBUg8jNi3XEnZCx6pCSDfnukScCem63LGTtkwBHhBND5ecJw8aVhYVQSKjrCKDoKmTfWh1VVDUrpkp"
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
