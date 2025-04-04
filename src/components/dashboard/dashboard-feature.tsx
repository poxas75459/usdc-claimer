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
    "2CGP9htoJdksa5fDbxRbWbwFNaAhZjySmYFvY7BK7WVGXPGGCtCvom7Vi2zTs87ACXZDKbMviFGtCTb3Ezs3WJ6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "easJLEyLrpg6npgeQ6XHp73kxrRv3NJyKpkherPUArKQTida4tasP6fJWAqD78XWpgrgtZ3edT5aFTErKdtVY62",
  "key1": "3H9M8MQbNhb57UgzYvvxYeVwwAmciUKJndc1GMzRx2Xt9kSjZjqaCKoXtQPpFKnGwHgwvBaqAZwWkbM9LPvgRDPM",
  "key2": "5fYSemZhohuFRh781uNA9AYgPBfN5VwZTCmnWStnp3MYmiKkoHQfxkPDVbnpxx1jfNPS7K275RhFR5Vn8AQ6KNb7",
  "key3": "3LjMmuYZU29ZfpXcw6YdGxHj1D3FuzEWhtN6RKzLdhxjVTCghRncMf6Xf16RArHuEMeFFDtfEoCW2BoWbB5ihW9c",
  "key4": "3xYewLhN1XPQq9sHbN5PwoNnibtV7mp3oPuaRHLpBVfzs3F9U8wJ1M3ifbaGcC95Xdxwh2ZR55CVijwaoAaLo1jg",
  "key5": "3csn5YqBcZ69sYmGUfk2ttJqazNpz1hPy2E5CNSCCKQjpePkZFX1Qka5tQDYXW4vs564xZ5wEEdMZ212Z1muN12f",
  "key6": "4zfotxLeyqKPBE1Zsa8NVqKs6MTE9ErijWcdibpnHedAzFoCvukJeb8zZ6s2P2Nr7E4CHkV9F67W6YGNrYuNJ8M2",
  "key7": "4hq1SRHDDYGBXfcTTi3PiEKzB3BBKkCnpFMExhMB3X42Y2pJ1QhE7iH6eu7qyPSLNuBjECYpvE39SJkBmhmLgMJJ",
  "key8": "5v5DZgkDHcXdmHdjf6ufGd53QChACMWa7BrhHp2Kqjehx9jK9ZKayu8gR8F8YkBXM5nYdHb436jLs9ca791pPxu4",
  "key9": "5oiqwYd4HW1LdLj47i5rLRbMh3M4J9SfmExxVo5YBmwJTM7S4pj6o6aDQgoXwXWR97adFZDZVE9NdSbnFBVixyrr",
  "key10": "tGCubTt6znz1HvbfLLSgnadwm2VMqxn26ogypmd8dXcUHDNcjszKsW97fBubuxKRw8uHEv9Kirk4NVhp1baAZm7",
  "key11": "2hDXmMXoatgPnHMTs5mMZPHTTBVEJSDuq3E7fwgKMsQS8cKdd5Eg83GKeBt2d8bvpLoqQm7ECLQSNQ9Xt9gf5CSh",
  "key12": "2veeanxJsRSEZcZnZqNMspo8cSrkhtvtHf8qmAyiVe13u4VQq91NtvDWAf9LTpGgKzjm6jWVnWy7Z9ABbX2GMz7y",
  "key13": "2SEzMF5o5zhKvjiSdgroaMdJvE2atnRgmQxEoD3UswDXWMN2B4RkPjmShyxww6dfQLz9nJ6vzoCM6XEAyGKJk9cH",
  "key14": "265CuqTpdwrXAE5jxFKu78Si4vfhdtfEF9i6oz2K2g4GfifyF3kz3PqNFJdfPMxTqFLhrZ9wxoC7ngwJpRc31dTg",
  "key15": "4H4xGWu3BmHiXDsTDXnNDdJMqe57wpcrkmNoqCCAzdvnLksMQmnywYViWw2stLkJe3z4kXXgrf2cGTtsE1zY5ZtH",
  "key16": "5ZAWd9mKSfae9h9ripYV4prhgJ6HNEGihNAkfSNn4uA6PGkT8NAaJe5AyVSiJvchvRrQExpdQqJJNV4REm1w2w7C",
  "key17": "Qig1nMeRcQimBitxFUaKFjWjBFvxjfYfxuNpaWTrKb3SWx63FPwnnHvMKhpr4pQgQ4EAhJqajFsYtCMmU48LwDL",
  "key18": "3egbxPPmNeP5AYoXEKtco1xEuQKfSifNJDvux1M6PpWo9GojKwLkiAXN4gTGLeU1dNUs91mEb6NGHPdNnSKt3xKS",
  "key19": "4FAB1rRwpLH4iJGn3ANZpD8BQNuXHBDP6GBqM6YSA8A7PF8kW1ZSpWYs23JTDy7ieiV4AwQqzkEFSSZCvQ31MHqn",
  "key20": "2kX7YcdfV51K79bxREbrEt3xXfXfBdYws4LeSkkMXV95Xk8iv7yE2JAfuUHLHYeyUzUPPoh2oasS7V1JYETvRwV",
  "key21": "Zq9JvETBGzswPcRHbQCxhU9vbDmGt83a58bhqa5y9dUs8W9KUihHFQr3NCra9Mfdr4W5UzeDczTVWUEPqfttbxX",
  "key22": "qdaKj4dnRotzqFpjgMP5DiiM5VDMzfDJmfNpZRmJxs8dKNoQM2PZU5erVjxkL3GiW6ZGCSMcUKd7Wnkv8dPpYvZ",
  "key23": "5e1GBfFmGEDw4BGGFdwRFktN6BcyuskRR9G3hJCEzxRTPZvy9v7wG26fHhAM2u6mSkhQzr1csb3V2kf1meS5awra",
  "key24": "4aEDBtPSbTLbXh4rALQFUcZDid3pXwNg1WMrbAqKDzT1Zdznt9eczP2MNdTn4pxieeLWx7MFYF7MwX4J3gXAV8ut",
  "key25": "3cCLhThNTDoRoCHMmGAVC3NwwMaKWB3jQPi8ap3kSJTaZkMFC2qbmrHwr1zZ2ozSvFDgYkf9o8znqfXXBGHER1VS",
  "key26": "4fEDRW27TEHgzARNwGRoCoi5Csb3US13Jsx2WeXN1Q1GYBPxGC3E9k3BVCAU5Hjqk4fzQJL9fmSVHoDtCaaWesyG",
  "key27": "nkupJYdzn89WAyJquNv1XDcVjAoXqMcdwwDugp155F34d52vtJqudnPvvXvVXM153htegHn839bu994Qo8VmERt",
  "key28": "4sMfUQdaXeWsSYT3idXdWNcKPPWvcSnAbkoxQuGkWEw3mcB87Ft2LwaDyn1bJQNd3QT7JJtUNasdzBzdZKMYxBb9",
  "key29": "MyzMCuQMZ8b9uCxscAshiDVY4GwpmzXX7d9M543RLawdfBjwLoutbVhaqK33zk9LJeeFR1Z6MLGm4TGKWTKNE85",
  "key30": "y24Mw7mmzmVaFAijeDRiXJsVNiq4pDKXJ2cEMaadqgUG6fQ4TK2ZDvS1AenQ1aJbzY8ea3THdi2ygHMhxCtn9m3"
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
