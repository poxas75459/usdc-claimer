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
    "Nw8TKXbYJJrNM9qEsEYuyacRSbkEJdMcpskTw2pUUftn7P9HYHgzdMdUZHoJTHKnxNKnBsNAuHuxoccS6tnjKN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTQEp4ra4GT9aVByFS2ajy5K6HZdYMtFqppz9pazAFigKi75nSABxVmFUqdQWwvSNZxX6UNondoR4Aay2k5vwQ6",
  "key1": "5t1YvUFybQPiq5iJ7Df86JmCsCkZawwMJPb4JmHRMideKDm5XMZhPy9H1JT2FMfKh7Bh2LTe4erN5hBdurneSkpB",
  "key2": "3WfAusDDuWFpXGLTDtaaCCXARy1tiSBPcYGbZbLVZk495KUrsegFttrzBAPnWfJoKdhWfRrccytin311xJfpWWr2",
  "key3": "2SXQnZ4FuHKD6FVx2QHeYMfPsz991dWoHW5BHoVRhPPgFEJaq4thudSTzHYyeN1jzxo3JAiu5jMXhbuCBawv76uq",
  "key4": "5hVGs8YLKeryp5LQcmEjvBiunrEjGCK6RNYYu1t8BT7aKfoynZhy7NGd9FkbGxwmYZHG9nYGMMx8Vk3Wmccfz8Mw",
  "key5": "5H4QVDNkZG1zReraZBwMvVtdcPdXKYCrGkb8EP62VZszoKqGoT6gRQU2HYnutE4pARoVYLSWSCZPMHFuHaenAyuM",
  "key6": "2XA9TC61Giy2HhMgWhHdP8yCoj8Q3nRHRmTY5UNpoPZxpVUdhQ3kxLPrrjjTYtuNfBncpEWHv3NTkWziEzP2SCTP",
  "key7": "4n8mnpRRQKdmeqcuw85NFBG8LZ1njHdcoQztBkQQCb3kxRUxQTcD2LrGm6HcMS5KHiEtaYcnfmxAieAoE6vFCTWr",
  "key8": "Qkf1UdSmDNrMj6XcigKihFJWPsHjxJ1CkixbLK6aEYPgE3VqcrgxHjZ4jhh7gP16vXPbLGiZMSLgsWWyb9eWJNc",
  "key9": "22XXQLi1q8ZqQzjLVJMwuL47iewxt5fzx7DYLuD7gK9FAqDBhv5Sfet84Jaf5jMWiPQtadP8xz4KuXYV9N9LUzMt",
  "key10": "i5kjpZ9wBSKU2oXYvrdasErjGr7mTyNGz8yBrVWWpUCovtSk9Jf4a8JLEBSefyLWGrkMPuo2gGpiYY19FssKLn4",
  "key11": "48j9dw3k1nZd4CqdNEiAETns6VpFpukc8XB3d2ym2jc3UhaJ97DgWRbMmYAzoyQF7zrUSiRC8KuDLx2kWS6eHTLS",
  "key12": "2tZHnmyFxmddvMjcTkNVbEmBKRMeyBAjNeSA3cY2sJ6BPxqCZs1sYQV1jfjWNbvW5sj4GebKnXou6gapWCQ4rZDt",
  "key13": "rmcBzNDCSqJrxtfctDse3qaHZk5DRaHH725Ckfu6p1Uwe8uzE5n3QPuP3vDRC2ULRU1LQcBWXat79HCRToxkJms",
  "key14": "4scpwpbgXbLQSokrEjGBgRjdzVjLQVQUMaNmaeGBNrLAJTtU8qAwur1GJXbhFqeNyr4FDSCVSjN5JQfCTv5CkPfc",
  "key15": "2ftmXd6Qh6rMnZNLPSSHfNXQPoha2Y1oVBuz6T1z94hHLJtTKv9LVSiuFnTNz5UBXaLvS66QYuNUoqAMAsNuF3A6",
  "key16": "4DdnJFi68TYFisY9uJd621Qq6CTb4fnpCMjUGyvcFmjpCk2GSPHqiWBrNxQyYwbAG5iJSzQ2aLwAFUrqxc7RuVHM",
  "key17": "xjTcAvySjaVN2RxjvWuSfnbNW1nzPrFKgqR7pfhMceUjtUCys4G9yySr5UmgZzGu18j8mV6gQj3c4vJEAmo8eR5",
  "key18": "5W5Wbr1kAFkR1BoxsxgagzZa17Yar4gxYDzyzg6rNLi4vVy4NfExcEiN9YBfZiQR9iZwNu1HDv5WgDgWYmr4Me9E",
  "key19": "643MKWzhkngur49opCc6hMdonVobGE3kswGsjFqVQ5exnBmSyrkBCQPD15aV1oVyKZxBkVonvvYmx5VFJ4vEJ356",
  "key20": "C5Y8qLHr8LvzTv7LzYYCRttHAbToH31R8BZFVJ2UQ3jPMPaFe5XUTaGRZ3J6RFCMrNXxtqi3RCQEu8ciXGdi8a9",
  "key21": "4wUMndSATqkWrh1EphYvsaWGjsSmN1syHY65c5JgwMC82DfBX2NoArVD7uf6MYXv9yYb7odAqEA93AVwA2up4NjD",
  "key22": "23CmPHaSUqnqfTkHJ3rtPNmBmhvywvX5QCoXAYdoLj9NTQK8N8bAYdbF1fKaWpBoQpp2kV5opMJf73gP2UH5nUDq",
  "key23": "2JQTW8YDBseBa7kcDxhveEDoqXeDojj4UzoqpScvqnpY7qZxAW7uqr1PHaENozvgxXhfC3zHrQKQE3yA2NHW3JG8",
  "key24": "2G4oZ49zzCD9X6KkCS2NebQ1mnKPh9qZJcFiyrs3W67AmREAHerbEiUKTPuGhTeghScU9LroR15LrJcrbkQt3Vyr",
  "key25": "33MsRaoJZVjkQEUb74rF96Y2yQ3hYziWAEEcZ6Nfx3Lkwf7EesLFyHLLer2XW1zKwxEznuGkCP3vWHezBxk8vcxE",
  "key26": "vU8vR4Vi4uBqtuVB61rt8ha8a3oFj1fgPWYq7wKbxUtVzHL72bEdvfgM5EpS3oEHZgs2HKx4CNA5hhbzTkGfxSM",
  "key27": "5E8BLVQNT1J44teofPG9quktdHvSuv5hZj7qqeErRnQ93jg3bLGKVrhu3U1BCicm7ZAdPU3QcuujV5piWNdrTgSD",
  "key28": "4HpN3qktoAMRJB8sHrvRiRBDWBKPmEU91cGgJqPkkZmGVRQLr2BJWSn3r6Zqj8M39HqxF48Yqj96VWPoC5wCUiUf",
  "key29": "3wKnx1DqX7hPNWSUgLRk6Shjse7r2SYRb7LjK2riY2XmKvSx7PkPK2gc8iJymgn7xqvuGZauyNqRadKEMvjrwuYg",
  "key30": "4wzWDkVJqpJH4MNf4JoiyuQQAySv4qdRPJG1NBjW5dc1AcDtVpXKNBfeXZm5ufhf3cw2Aoa8DxefozKaDf6UyK8H",
  "key31": "5abtFUYKLgHw37BDfYpwMf7BQQsUH4te9HPTSdsLDZmWcxDT8mvVVomtuBzsx3FjQQ8psfnb8E66Hc7iCbHDUyhx"
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
