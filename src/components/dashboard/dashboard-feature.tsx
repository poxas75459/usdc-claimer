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
    "4C3enGb11iHGTN8tN4PoofGMRPmobiHxPMAS4UmqfMCeAuQzkhfEgW5hSaEX3TVzDUR9V8nsh5XQt46y6A5P5QjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwrTuuf2MsJFvb2579mYGnomt6CKKZZHwb3p2xcPnEAPb7qpBeEhJkxbwYVzZrH5FtjezBHJqb7PXQ25unf2tkB",
  "key1": "4oDJdP5TqmLE78wk8Hukcsvn4NUzVkdw9yPx4s3PKefLbAHp32rFoS5H6YeG6QF4fSQ52ngXQgwhmCXz9YG9s3H7",
  "key2": "7W9jySEbTV3bSE7yo2ZsGMNLocJM62Jdo4VmMNu6JDKAzFL1xMAAsbmtbGBQjmMjwWzpRPZnE36BwH7cT9rpVVp",
  "key3": "3enas5zM4vSYiyQYAhaY8xratSTWaJmtqDSaH2HFx7tjYd3M9N43D1YvyJT2uXVpt2a4D52SAnS5DnVbQW1uLeGg",
  "key4": "Wn2Taw8yt19dhyjNkwVswBBFt2Y1ks6ZEMsFaP28gWjzMussQPTd1gG83A7cgqxS35KmpZNCzgbQSwN4SACWorE",
  "key5": "2ctJmeoetKnnkrGpHb9meT6LMb3t1KTh4CXrzdkLe7V6TsBEL4zuSJVswSxfLPwtEVPxY83CkTDsKBANAWf2J7QE",
  "key6": "Kar7eQvTUjYsgJUi232e6nSYwPRpKHsT7wJPxtyxwGwZGnTJkkJnkpGuG5y9bungjTwgXeSAQ82oS9copj9oG28",
  "key7": "4dFKRCeY4rzq94Y6oRZdov4XJxNEuuE9UN4QaUz8obzt8uidwZn9EFAe9ErWyBskdGRH6kM8Hyy6ASdKJ45GG9R1",
  "key8": "3V4nYVZoSizozqXpbqZueAL6j5BURZtBhWvtK6wmeo2jTZuoxw3LTXxEf69ofHF7cREtDDFzVUtH2ZjJaVqfVNGZ",
  "key9": "2w8kE3T6BdxiddV4Knvq55RXz2x4495jjedakMoybETazbKweWCnC3K5pwDBECfFBcMW2B9pyMSeJSZuL8pvnK6P",
  "key10": "2XCHVHPRVJY6fPzvPcpkfbrHNHbNDsFM6WoBxnkhu5C69EPavyNvDZjpSkeyaxxTwiuv1D7uUkCg6hCUaaPMoEgi",
  "key11": "4yoqeZkmzaj9paFDVssuo4KK3zwzNjp2TtYAGdUW5r5FmcpfKBonXeNUqADs9fT28yJi6kLKaoZv9cGUtc2vWSv7",
  "key12": "3Lz8C8oAWQRV4f6wv8qZjmRce36wV2SFb4eA26xiNpe9oz6Nv1AeEeeca31H8aPjaEtxjmqWw4i68NcXT6mwd6yo",
  "key13": "5qejgEGCT3yHtGMNahLVDYchZCg7ghQgJpewmd5q6y6hMfG8X1VeMX2QWrVDFEFDJCrgb5XsJKCubmDX1GyoMRpn",
  "key14": "4rZUgiRbE1WdB7Z7Ff4dKtULJVTt4EKUjZcvsdqc1iB1EHmxJKoceZnu4R2bhtx4H4FXjyKCuLZMiLv7GHehtMB2",
  "key15": "55HjzY8FxFnNANDgWXEENvufkDrewNqFuSt2WQVLbFpPVrHA8ux59HGYcn6Z8rJYVY4zqkkHS64JZRKSq1jQTS8w",
  "key16": "3s7s5prpZUv9UCbqYV1DxRTFoHCbLDaqAQ8XqrxfyUBRXh837oyh5RAtu8atyLJgM2ejyPjB35f4eunpS15soWX8",
  "key17": "LtP3iDnMnk2cUqxNtwhBsJgHcw4kv33j7DYKnGNhXN2rnUMY7uL8F684aeookD3Rb6UWGBYjPrh7UFLmVsZacXu",
  "key18": "2fy11BBCgUcVu1Sm5Tad3EF3MNWswrXxoHY3menS8HwVaWcqDsigdgoaWCV3zUsGUVxkMMhbq6V5hdQcM4PwPuTb",
  "key19": "2fQ3sKdZ16cTBTZHiqDJtzx4uevU7rfD9wMGJxuCnPfH6YzYkhvSqUZxRBkrXitz78Zseb9hgwMiL9jKjhFm8MT7",
  "key20": "3ZKzscHtXpNUpTzq6rTxr5TS9YUn7UVAXw371ZtCkM9cmgawymMA1fmpQADpdte3HUc2c3upJSvGQRerejCndfML",
  "key21": "33Gpp8nR9JxzrWKsdDeCQqJTw9baYe6rzTcBtPBfvgtAXhCmMWF1RZ7zM8RPu1dGMaL8qhN7s5iViVGvR1wUurwb",
  "key22": "3vxc7RTDGtfnWd6rnnmkrkcvxws8JhzJXEjT5ti4JkYfzeokR9v9jFTboKSXD1eACwLu227SuCKnatgB5jwD7M94",
  "key23": "NiUbr5mNjWTyb9o3yvd6ji9d5jsoJo8W1hQDfpzN5gvEamUuEGmVFjCwAbcw6CanXeLGSV8FqDsmjYJ9KiB2zG8",
  "key24": "4oV3gcBpBB7hXrLXjJfvAcSWuKcc1SUZ9KUhvZmDbhTqx3ce97qPpMjiUmbTWYnpTcuh3dzfwjpfenzgGmUeeWGC",
  "key25": "3rtYoochqQPtBz6pv8qCW6Gqukff8fzqUdnm2wykP4Mh9bJkuBfcQ8TNmPzZ1yeYMHw3rZjT6ouCaVsLvwEHXVLb"
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
