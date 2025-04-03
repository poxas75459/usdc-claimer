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
    "dNDs1xauHcReE8AMVyY7oUFseF1RB2mdRrPe6h56nDrRtnD1nTG4sttJHofaZLGnhiAKMpJx4WcxzakBKRoC6Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2gL1BQKeKqhCwwdDZqx7GNGcL84dH81HcNjN7SW2Sv5BTnKtTEzoSosYXUoXpbvhUWfjWA3JoMhyt2ZmD7NF4e",
  "key1": "n1KYStRb6ZMHVwrcjpvtH8KNaZMHB3hxkTL5m6i6YNNQ83UHoHTE7P77ACYQutwxN2q7x8brgYNbFkUkVAvb1oR",
  "key2": "46CoZkqHcJC92aZKtDn3hAYFy724AnYKeDHzTtw6VnTibCTnVuVePYrTEsgot9VN6Qa1zdqqdutLtnLepWLjCswX",
  "key3": "66zrdFwiM3N6fQeNP6gDXGupeZZdvLoCgAi9rbH5XXcYkTVoC8V5GQxYbDpdAJ3WwDTgryLGk6P4EGoypobR7wJp",
  "key4": "3mtwfA1sYfR81QWeeSvrTFM53UiFaqfjheku5whtNxoRkfbu6qQyKR5cxK54mWKNinBcSfvSu4Hm7TYYCXL8eFUr",
  "key5": "3Qz7M532HwLkmUBDkL8NJvMVAtebDKACP3RJrQe7Tk9RZz7m6srcDPBNPBQXqC2UDyjP3T9kbaXFEB9ZRQvQoNxx",
  "key6": "pUh57zpcrEmLnXrsRTbSc9FUouYyUi2UMK8zB6VRWbVoHrSv8RWFXaMxjJwUy92Q17YRyCNX4i1AG3izPrnSix1",
  "key7": "7D4tHDznWHAD56tFWmGsWtYQf82jsQZroWaC7EQccGPBXPXhfJSMzJMimSAhNrHtimTSMcnYt1HbkHqZdYv51ef",
  "key8": "4VVUD4jacw1j3Qq4k5HgiBE1hmG9m82163JMA9R7dMRbhDQ3yKzS9ep1d6UKJHzE38DAfdhgrAfeHDwm1UVSwxVt",
  "key9": "3kpHCTd2JefRBVpqXNEuaCZV9eUJxcVkCN1sHppZkoQZpHcLxqm2vVwCduRYMiQWVSjPGnhUmaf5BiRMUeuhRNHE",
  "key10": "2tJjQgRgwPzNKYMmA12Thg16TxLKcpipdZfLWYmNsL7t4KxfoBaTKtrrd918XQUSArVoKj1Ta3E9dQcQ49eN25jS",
  "key11": "2FYZTFPXRF9hT8mLMkS69QLtzKbw8s9apqbiz3mfLec5ShvBD4UuEmAhNQMfPgDZ5yS7WvKzys9k5qPSQehwEKCD",
  "key12": "yMdYT4cBi4EyHKxhaFQ1zVH8xgrbmfXoBZKGFqmpWo2rjphGxM7r8g2xAiLDAU2TmWhWqG2RmR4yk5yeZkbjqU8",
  "key13": "j5qCQULQXG5pWTBBnLpn9WKrJVXHgd7VfCQEYr2C5SGULpefHwq74WEpvigiGJWzVqo6d69J8dLCeXwTo47XtWA",
  "key14": "2hnmKdgkCFnhFwWyjSGraaQ5gURHu71b35yVKnBHNtqNBRGiSEnTAojU8AL3Zjvkh4GbMjiSKxFBKoHoxLehqR89",
  "key15": "5erCzoynfApTN1EpQE6KzNnshcQn4dwGTdcBnVNPYqKgvvtvSUKp6yziUG5n3t5ViKGj2hvLBqasw1YpfH9F8Buy",
  "key16": "5ytuJZVLrJvtFqCwJzmsuactTW38gx9gji9P6BN7NEcqiFwLUt4fcsMESBSnwuJSYzuRxGQgxSyB5zvieakaUTRw",
  "key17": "2qhRrCd5ZnMotwzTXmbuNwSX5aAKxcvCcYKZ4TTGQbYSjfaKV8KqozZAR4YdfJFvAnbV6oXYyzoNfekdgohFHaK7",
  "key18": "4m9zh1Jp7gtFoWeZuxJKks8aAQoe4P3jhYJxETi78a7Fdypy665PSMMprALWURPrdRhe3hiBgyoZRC4fKhf9B64E",
  "key19": "4f2mcsPiZV18iQNZcciocTAeXBGnEU8yBwgBq4hMEsKL4mpFoCwDN6AQJjtHEEyuGuJaawbu9jGXSL9jjK57ckAD",
  "key20": "5bHsVYf9DKe4pNGGS6pVHnCwrvp8ntFhqGYmsWa7XnNHa9uBUmFYoqSF9QLzbqUPKB4diA5XD5b9D7UdWvWFE8Qh",
  "key21": "2NhGH1jjf4VqrAcmWLTC21X8Jxm32ngJVKxXPPj71HE8MDwTXTZbcVoivsEW1MreJHUWG5ngKW8Un3TvSWkdWvKB",
  "key22": "5gwM4CgqEj5i4czRji92USjyUMbSVTiiGKft8ARaaWCnc2aGvpzGGKxrxw35MLRBrd5g2phK42MvkRhSD82BRon7",
  "key23": "4Q4eTtFhUvCGJo5aMvn2aDWU5kihCZvspLjU6yd2eqYaWuYWYsKtXZbDY98UAxv3fmgBNo34FR3yU2PPabYfxM9q",
  "key24": "3pjHHYMxLqgC1FL7gwVVHRPdjuzveW9dJCEu2Yox3qV2LXhJhf3fEwth6CXaghWFCSAaiesVdoKrwFXxm9kVGawU",
  "key25": "4EKfvrWNdfjXwi4Z6xD33EXUbHmYQjRPnoPvBnrYPhf3bhP4N33vJDdPv1HuhxPwFvGyJniBBEwTXHjQYvEx3Nr6",
  "key26": "2cQnYaHHqJ8ZgZ3hB6NNKzbbG3XLT3PRHW9JuzD1yN3vV9xo8aHmC5gEmLvWVkvwZztVBPbs7e2vxha6yCfKNWWE",
  "key27": "5jrKtPLVwCPREE1VdhQusbvRjLC4fSMSqijLV2mPnQSjgZPx8DJhnwHNBHaTSFqFiSkTXoYMhdUPidLJgGLTXWZr",
  "key28": "msa68xaELKeXjCJAhWQgncVQFa5uRPh5Vi1pxYrfETJbZgXNjgdaPoyTpreqMP21vtxN875VmZ5rEpkRV7eUbBB",
  "key29": "2T7LQjomLGUVqaTZzGex91jh8cAdXKUzrTTPVu6EJvgya2v7PL2hKt8HHMBaH2byuBFFvByxqnSiTaYTWfb6aQaf",
  "key30": "UjCAKaayavaq9KgTXnfV4t7rsn6KKWXfzK8uhP3eKsuHNH2RHMdT3xMmqWzdZ2HgSRagSgVbpJRaP8YwSxjryAU"
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
