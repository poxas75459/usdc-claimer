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
    "5unR649tQswhxn5mfb3J1MPwxzCo1i1JnDKmuPjPJAsd8iWjkQsVtTjeyuJXJimxmPoX4X9HfSgWTzEX75ncr4HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czTKnsJ8JQVfryumEePCuHpqtBdEAtaDo53iF8qr1Y28F8EpC2GiE9peyibjqT9zRx5kwThVjjr3k5MPsCmqh2j",
  "key1": "4fiwM3jH5P8cak5AMuHr15kSCCNmUECbFchTHtvHWt7fjn1Z3u9NNzY8kkyNXevcfgSyWpiGmyjspsyYgCTzNop1",
  "key2": "4xzMk5Nj47CJdDaVcn8cAxoTa9mgKLauyYt6KEEnxZgaZjMTCBsxQWWCom4uULPwAuko7e9MNLYWan4tZjeT1tZv",
  "key3": "9TybWp6NeYSFhEpTPFSDnoMQbJ2ZBQCLnBpRuU4HA2DNTwgKkCYY3BEac4fivhtrn6Up5Hg91WprBCxeKmqbvH9",
  "key4": "sbJEzufqwvbRZycD32sDS4KRzWtvMNaMVFFaxi7pXjcdeJCZbiN8BeUm7ouyMRh5DdYSb9WSGwKZVPXW7AJpgNL",
  "key5": "2edrR9skZCKWtiynkoM2NzKJwCWE1aJHfGPiD9W9rD5EZ8TYTJZn7xj9kcTuUZoG4d5X7Rsr2fTfkGFg34bQ43PU",
  "key6": "3NWTEqkMAxcUL6X36jwn4RBno2cE7s1EbkdDUGisqdtsBGkfWGWjWCXpugobAkAmWnPUbDrQJdQFxgF9agjDLKdA",
  "key7": "qdT2h1ejFRmCcVF9n43xGxqrsvMVugZVvpfo6ErYd3bU8nJzz4M24H4WTetgJTAdDBkfCMHbqCaqAbcmogxnpee",
  "key8": "3wSKSKSm5V5Vjmz8uYHhCURoK9ePe58575yUY1Jok7TNMfqygMRE2yfwnwXscwPgJB4TkC6Ez8P56GbrScKVDbK5",
  "key9": "4CtLM4MLeiyWq3yNLAPEaNDDawE9CQ2L1RmaManPSFs4WFQ51vRDWpnAtDXMPtANb8mzRfQv3mhNFh9zgLAEyyBG",
  "key10": "5BAPuLZtMCK9H5EKTKwsGDEX5VLfzgsn26hqUSDGEQKxwwPnGa2oaCidM9NirshkfhUA1cWxXJmthTiP4LQ2wkK6",
  "key11": "4TaHjuWfvoqysYNyiVbi4XnCcC7i5tG4E9d9syTS4LTYuhKUvwCcCe3J3ctDgC2GiR1Q8PPFVy8YcnqMKShyvc8H",
  "key12": "3AkKtoPrVgFrx5QkeHdRSMEJwctVXhULXvLVGL5wDuZE3uHL5Y6KothsYQ7Tz2bN8ETsn2j7s9AZHkZ9J8Stvuqk",
  "key13": "2RPxzXhPZm8cvjLFJAxQRrsSuXV9hdVxRCk9JHWZAx28ZSBC2HtfSADcetjyNL37QnGRA6fU2ohHjorK3vhN5LLk",
  "key14": "2hukbb2ATJs9bxaKx9aCJiftBSi3zrfC5KNJHCkJs3BvoPC6feBUokFiJUArqFmbdviYmCryXP92ZmHUU5PPES68",
  "key15": "2bgpwA8223cjEDcW8pbUGJitHGpPuJjsWmXaMUeu32U6xyEC53KuPWiPemwDdtUXZZHJ8UnVvkBeaJ88msjKkjtT",
  "key16": "5fAvGrzvWWSpm8jqtrfWW5qrBsgWmuRkgRKg5M3kEorgyaVWd4jMD7RfMGrrKAZYvX1BL9QoAsZthKnqnEyis8C9",
  "key17": "4JN4XkHEz5eK12DVw3EK3ymA6CWC6exj84vcCAb8Qm5J2JvY79V74QPHAj3MCp3qvBwacUx2dn4P57Gt8wtHDZfz",
  "key18": "2d4KNVeB7VrB9rMxPUbYarAudqwhKxh5qUcyTxHnZjAFZwrTjZjoPGsZRT392jFSyeAijbN35XaWjX13Lj8e49GD",
  "key19": "4oeTCDQbchNdQ8snU1p8C6XRbDkta2YwcL3HpXnZjYVcWpiQkaojrm7TaebJfei8mNmv6tjdY5DHcXEqVhm2BDpE",
  "key20": "WqQcAFYUb1UhNDWQq2BJTcpczfvXGdGVhhiqZAucWbe4XT7RtNzeaJXjRmRZj9JuiJftPUF9c2PZTJkN9iHjJ5P",
  "key21": "3mGd3bPrjTBNJvrHJzEPJoQaUQkSAui7UuP32biMkUgp5rcnuaSX8KYxSbDiGdpj6CC6hb4WmCKVA1vMtvCTjoEC",
  "key22": "5ydhArkRFKkwU45vX1kyRQ7sm2wYPhAiNuBSYKMT1ByqxipcQVDHSozFz6PP5De7NAQJp4gDHyApCCgMXPKE8Puc",
  "key23": "5tCYx4rYe8xUmHnp7FpRFrhvasCuDSxGqGiSyRXhuGZRHNVbdae1svfp98uDK2ggwK39TX3wT9JiLmVvShFMuUbw",
  "key24": "Jwtd3dcDwv2qeNGdPhPBPUgzZL5EY8AVzpkspXW9Cdvh5JMLv2npiQwrJBjCoN7NU8ikeZNQFNB3x1KraHoZgtE",
  "key25": "3mk6Y63gtZJaNSXj64qN7crDP7r3DqQCzQaVCuuMkaMtkSxDKmjBVR5jfe44CXZjTAs7u9jHDiL2Q9hvPFDZqgqh",
  "key26": "3pUNpLxA2nfiHpw73kR491oukdm7GCm8pfrX2DnuPjk4cnksYPzZ5yArgunBar62n2zNrkEeDqdyypFCT7xiERpD",
  "key27": "3HGMzo2M1mJSB8VWEgfNkhFRey19jSzryF57ikFTRJSwYphXqwDAXoJnkiX2ZVBWhUPq11Cu6EPWc19GECo8T7zR",
  "key28": "4E8AkteQzzpKwJqRx85Cyy5tF7UPTo3EHACofgErAg4a1CmDAFLwf2SWoXKXztb6D2SrUjmL8LCswuX8km9pERbb"
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
