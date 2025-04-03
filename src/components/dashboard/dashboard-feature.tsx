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
    "3Kfd8F5xyTyY1HafoyRgaWDKKzN7bPUn5Enq2voyWTvmv4T63y3ze5qawQpYVdr9Qbw2gArzosC2axNBwRtNKc9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhZynbHjAbAKcj7tyUtxzX3jKbCEeyfgfcHQZd5gdCNukcijmdpn2gUzyohuFa8LCVWQx8fQaWE7Z8oKC1oqiPy",
  "key1": "y37fjMp2cUWXHRteCUBJf7e5mdgNMYs7hGzHmm24aZv1oH5DTxE8BtDqR6oQ6bQ6gguxnQ2543k5Ki7cVgtcLi3",
  "key2": "2iRnq8ksGucTcpqwKwNdD2EHZ8d8VF1aRvPHX9i89mBNnqiErTkHzPAc71uL4tBtJogLHjSCaLLkb8kAJdSDq683",
  "key3": "3fQSt1vi72xavQ5kw6qq9xukpH7r3urFhFWKfYMKAecjAMU194ajNwEvixM1oJrDXaAx7nedb3y2uUHnBoWfWPPA",
  "key4": "4hKF2MCGfHeiQfj2YrkELNHNhadigUYAGXm7JKWfAF9TqwK8RV3EETKRtdTUvnjxBky5kK3gLuq7jdgoJjsF2UZn",
  "key5": "ErkPFNytnwbNrwjp9SaEkc4EHLwJXhYwrPnyPoX21EKwDF7ppHgjYbTnzitVFmG7RFZpKHjZZ4z3hAVRqd1edQo",
  "key6": "34115B613XgRbN8szorLvsdTr4Wz9c9dr3uy71PnaA1PUDjEumVsVqdAq398nbgaVZV4HQqJcKb6uKPqMzvxzLsY",
  "key7": "5TPcf9nKvpqyNGJWWJaPqtuuyq6ZjYLobDnv7xz88mu2Na8GinESigfFzgABkdG92angjEKrNHVfDy4e3yEvyo82",
  "key8": "oVE5GQxcHyVrTbcddjGUcFHSMt6Dj22pNTQRy8fhu9Mpqqst3dqNLxF81YoAbFyoSJfaWpSgsYcdkrkTrztFJB8",
  "key9": "4r4pEsHjA7waibkJwiLy4ur4yBoFdkzMmd7q6rs5j9ghHvDYZ2jtLTcFvvGSybHN4z7B95W2WKUHuWVKSjWoozm5",
  "key10": "2zkdVtCPpKjRFynP38mPeABYarYGDr7QwiyEXBMH7pzP6u4tY37KWc3Ee2CT7LrMptecYRKNZjnZjtiKNWDcTHzk",
  "key11": "5piD9cT817MB8AXDvMSjY79FboeaKrNLvMWsKRKFr4i3ANwFwEodrZJfhvDFxgUiiRyByUHSnEPmxDPgNCqh18nW",
  "key12": "34jJrdn96kFUadJ5F6VYFD64e4pzKCsAZuJiPWSrYw3Y6dj8L5a9kPVJVZnfZf5fLwfsNHuZSd6UD9nbQ4Ztwd81",
  "key13": "2q8v1y9aMgU4wS8Cj71RbcvmZgfYJBr5eJdrqw2xTp59baecwCgFGKouKHneQo12sGiv8VvWa9zfAcVm5UQLMi1o",
  "key14": "5sq3DhZP2XcYKnNNA9i5WbiEfev7BuytKBqCELhvcdicXWmsii4YsAXuXdChWzGQQ68GtawUpo7USDYwkMrj3uPD",
  "key15": "tHY64EZcfhdBpiqBrf4isAWp4Bu3vUNC3gfMFC479hh1n7ErN7MUMHutmbkS3v1WT4wwckxYC6iUsA6qLcMkToB",
  "key16": "2DUPNXj5Ncu62PSH55trk7La6dTGHgGKuydeU1NHRXAvJYhfj9E2uY3Dmgs38QWFkXGn8HswimWdr44BsRAf68fK",
  "key17": "47uY5pwgatbSJUj9QPUs9Jf5pejZ79dH4482sZ49VNVHqzzxnjLogiLioo4Uynb9mgcDZ2YT1QxvbXZBkTaK1u3Y",
  "key18": "2qKYhAoUovLEt2JVomsj6WTNBV69DCSbCScAp4ombdaBDoF99ijcJr4u6k7jVSKaTJGX8kZiwdBp2UUgdEGCtRRM",
  "key19": "5r8HNsNoQT1vWfxKAiUiu8gjYxXbU4zyxKBUX9jzGF4uWS2tFuWYCcbrFbAYSB7aT9rBEHghaouzEvmM6nGeLgsw",
  "key20": "3gAKidrc2zQJCPg4aft73muWcqPC4op8BtfayAqYFffxrhyddpbdzYWR9FGkP15R2cS7mFfU3pKA2gfmzTNhHqbn",
  "key21": "2RSxABoeRAZN4u6wDWr72jaF7Yvg5xpeEMUgK1v7GfBZ7xjnA59ZNCnkTSgkFPQydjSaLF881wThWi7jTpkcsc4E",
  "key22": "2iHeUgof67NU7G45B7uyFaPgXFgogjA1jH9jNA6b5C2kAUGgpZoGrFsxSMUtjaWbXfP6yMxNLjDZpdigf8RS8Xyy",
  "key23": "5FcZsY7wVsvCEg4gJn5vQ5dQa7TNpkKKqdawf7W1dZb4UL5NZ3VSQBuBeeyNuCC6tukt4JNqGeBACnLnWLYhBM7B",
  "key24": "2Suebm1Kuc81kcturt4R38e6HdqbeAKSbhBmcthMFhXgFd6xqdiohCjT3yDNcyKnYatU3ztcQNV4Tgfe5zfbpbHi",
  "key25": "4r89qoa7N2bcvbBxPbop5BeXsDk6YEGaLc4YfMkkfabUYprThTNFgtHim6ZKKxRpq95vdeLK1rn9xfDiTotejoxX",
  "key26": "3N9QVXDS9jCULWoLkBQUc2xTbZ7LoecrbHrt3Kjh1a1voEYFuC7pxY3JeAoTqQQiyW2SWgK19jVS4aS4KopJtFp5",
  "key27": "5LgMRvqNLLg3XhkwhWhWLtdMcS7X77eyAHpzRFb5M8g3fQLDEwUoGNSJaeyqg2zHaA3DrNf3fXpeoPCwopMf931K",
  "key28": "2CCN5i3ibMjgYDyvpun1XzrGc7XYed6yqFJDo2o4woSv9deBzLZPhCMvzeEef6FduarcsKu8oVpYDSoe13mLAtaU",
  "key29": "5XJ9NRXhmZCJ7gQt6JP2tcigvWwmSrqMtnHKn3qcWeo5MX4rDuHcY88NjT1KVuHi6qrPz5nZWYvzD6PcwG4VGsSJ",
  "key30": "3kWxfZHk1bUeufUoziqJLKidF5P73G4ngPNQxfGT7DcrtrPG68g19KaM4u8LoRhg9Y15wAJr5chPvCFrwWCzGfi2",
  "key31": "5fqjBnjgwtF8e6oNfUiXbNK7eYtewNqUM5EgriphQTQApXFoJbAfjqzVam8iLbG97wCiwegU5NmeHrpmWR8fkFoW",
  "key32": "5J98xKTFMXgv46LahzX2omMVm227jcf4LLdVbdX3iTC9ntojWDzYZDW6Yj5mapfzwGa1jV6fS6dacJkQvUSBGNye",
  "key33": "3tjuPTHJtUbQgRSB1W4ukbrPgewZ3veuXWJ8eboauCMFGnrLPgFqqsqXsaRPJogTnoL7k1HnZn77HB34XvTZVPjS",
  "key34": "4Mwu4pQAVuZfRVSVh9UAHFuKmwYCgRQndbt3VgSqhRSPriSpfpdgpmCVHP6NUT8Fe5C3vbyPDkvi27Avy8cJ5E1C",
  "key35": "5wW2mq1rX6jxZpp1z5EmBPPpvGaLJwqaRwLuPDhByGRSH26MT6VFCVZCJ3vRY6yagkrobrKvHt9JTYiDUN2Gp8yh"
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
