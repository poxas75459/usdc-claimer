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
    "L99eTYRKc8KCEw6fHsDPb4PzPtrqCxHSAG68hAyxfYYXQeDovfJ4P4RwoX3fJwB3AseRvpgfYnHmcd692KoKfdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62H3E4XF6HnYvQptHWiYAxssdcXaDb2acnfPPVX6EhPpVUxo2BkjdrPf4Sw9uJwmQgmjSQi1u8j1hwgEUFs4tj5z",
  "key1": "5U7KAjKuXhHjZ1taVHaysZX9QHSjdHUraQ5MQkpUp7pgVGMv4MaRbHMfZLzqCWRtUkuHnDoiuq4qBftaJRmbP9ci",
  "key2": "3MeYe9xkrouHL3ch7oA3YTYf6L18yXfKg4Bq3pWchZmkVxdW7m4x2ZJLbe1oGimadvFTfp49HfVJRDHawbbwZJoQ",
  "key3": "5wNg7Cy9MsqF7jAZznQEpuXcZrmrpTXQR7Zp17Ysa24mZaeNa66ShJK2bUJMEUFncQwZWxacwJRwqNxSGU5xMWWT",
  "key4": "Xv6iomghHaXakHkcop2Nui4kFofwqUo5Sp5kJGM6zQeYd2nyZ5nk9EpaSBASdZXnR6cFqpLK2qkT22HVzhJN6j4",
  "key5": "3obemz3LQHVy6ja4DcQPLUuGzHTHuKT8LDdFHuR6nZyMRY1NZzFeqJX1gHGVFdRWkZEyCvGiHhX1mbeNXFMjkexo",
  "key6": "5F1qVUABXc3md72BD6XuJHzqsc7NnNSd3iWnYeKdqxdy3bTJy3Y7GDC8KJckgu6cytLAAnbKg3sBZRyR9zTsQbc",
  "key7": "7MKWcJD41zn61i12HvwML6gTttyftKpsc4FFBQvAEvHaNYiHeSWGVngiUhdtTqTB1CVTRzZqAeWxpJad85aU9ff",
  "key8": "4C4k9EsuwgrdKKKSzy34DFUmZNuEyyNnQSgHUfAtPc8v2oAfwsGd95rQfNa2UWhcZ1BZr3nKq4sAFcse1JsWUp7K",
  "key9": "3puwtgEEjUkijmt8WPjXZLryPQkgAyLB5cSaRUi9LFoRpwWtxhHaNskedyuhVgBvi7b726Yi9wWLMQZztKiEvaWs",
  "key10": "25soXzYtGCZHxYSGPmFgKha4RWRLvUSDQrXuVqL6Bk6s9P1CBGuZJvVYciTG2i1fhizCfq558BeHD97qKmSBNDC6",
  "key11": "5NVHJJZmuEZxHXTnksch6f4NQiLDUzFAF9xQKP3VCA1QABeifA2kbxt3avZZ7KZV5NkFPXQff5cF13dnQ8FsFtiS",
  "key12": "fB39ZMkSS5sjDwU2gfKQQ24Etro5pvbUvv5MySGBnfpa8vR8dLB5xU2yv64tbCRKDLbCZzUj291LDS1XZeNkuTp",
  "key13": "4xEKRP9Xb5DMpHAPbm3Li8GnMvp4zCUQUt6GuBDzkjEt2rcBsoqstDPxePoccQfhqujSKDKUwfXaoaXGPiHpjrro",
  "key14": "4xYdd2mbHtcsAXQeTyPG7GSpwowkLFpwCdSTwDxzTzCyVX7wP2aHJ29H6i33XFHBfuCmSiD6mC3K7tazJY3EG5KE",
  "key15": "3KuWQwPpztWVF4UKeAK8xZ7xeZSwfLAxwiamgcSLRgy8uHTxr38M8WWgikGFJbVGvQ311T4SsBfAeaA8icTiHQdd",
  "key16": "43YnezDRJ82TGJVStbcJxJhthuHNkv1FkxBx2acDganN1dbQho9pRZsRrHqGgWtZqvGagWmnQQEeK3aNNpLugTuH",
  "key17": "2XuLSnpfeBVg4xdTzy3Co77CKsCW58Wccs9CGHu4Jua6AdZZRM4e8nCXL383fej9uv2GC8XhgLkKcJuNyEQW7A5Q",
  "key18": "2pgtEc9J86ptBDVgtWs4eqjpnJAw4ohbEdFtu7NxBR91cAFX3pLKR8mEbuQGHThXfFroH2xyXLKr6tdUfoTzBh3b",
  "key19": "3PHVAiMcuY4qSHhufjZFz612CR5SzykUtF7EZjQu12uZnGBQXaQjEQcMiPU9XeGj6LDnVDGkHh4KwWdvo84RYaDQ",
  "key20": "3JLjBYqDaPwM9C6pgHvsXkTKPAmBsZBcCN31dQXxBroty8NDxBAUs7QwTBnAZA2GgCpVDZqVcTtMf7A51sTWe46R",
  "key21": "3fnWzWtb8NgCTmjm95UtCtMLa2iJAXmsm2EYxZHWwqAWNYjXHyxcoma7xUBdvoAyWfisz8cfAr14HpBbTQnLfBWX",
  "key22": "HHffxu4GvtfWr3sF95RoVpUtrtMwTznty3BG3LNN6QdqycCRK6PKcvUe74bjE5L7GBwe74wLR29XRpy3oiZJjWf",
  "key23": "2hYbu6zg4y3jsjYkNyS28coAoqeQiWbGUYWhw9hmWhBemj8YbNTi9x9HdocMifvhnMKBbQ9RW7EcqpJNpB5XvLZP",
  "key24": "jDoYtvxCifmBkbgzN2NgTg57vKYS79iHojj4q4ztfA8jhdgP3BFEMhn3JmkwpkKsPk8hj75Kc9H6cTESKXDvfhA",
  "key25": "cvesZfK81i1GpZEi1pmJo2LdvzXQqdx69LXghDwnri5pj65m9qHDqekmEgaRbxpmmxU9E8C3fcRRaZmzutW72nY",
  "key26": "3bvXTyDG1qcKRAu5TKB4eY2YCZxG6WPzF92oMB6CUKAQ8AygWquVivrB3ggY31E8nnn5AaxEGbph33R37eUsFxG",
  "key27": "5Wqb3eK4LoB3AXLMZiwCDCV9G1YHUPQAbNbqy9uHwzyGRomvvsgQQPbK7aAU4awc8WL9rQU28prTJDhx66Weo7wc",
  "key28": "4VdzfHdDKs2NVmdSYxEd6sUbQ7g41PQMRPyieBEW7ekyG1Bsur5KS5N8QZEhk2XyghrmrSeJ3sASQABrE8i2i5Zm",
  "key29": "5oirJz3m18pzE6cPTTct2DUFapFf6uLANLapESUt5AWgb43dW1Pe3fGzdcoeZ3oqdFge4WYTCgS3CUHZbgPskrp4"
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
