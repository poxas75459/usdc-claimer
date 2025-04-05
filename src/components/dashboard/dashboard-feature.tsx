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
    "bngfpyXsiL8AuXqtfkuv44faHAahmbL9d4JGUTa2QyXMXmeX45zzg3UTVqNwYFv4MfXz8WXxHA7kzrsf3k41N8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2JsczsGkjYcwZbp8tTdTrYuR9aV6AeLT2za6SroTCJTHehMW3XVmSs5NhPAoViUCiFSLsVCkLgEtGLJz5WHoKg",
  "key1": "4NjBoo6Qz3rcbNoZPgTntnfyLG1qv9LoYJp7XQ7Ke7KxpxxySnW4wqRKrxg1nrwQmJg75RzSCT7VJb8jZAFgoKov",
  "key2": "2E5GvffBQ3FVjrBkqhuP4GCWaWqnTPFHBK4oPD5Jm5NgHBQW4gwMoyquD84JxdRsLUNdb8f89Vq8d7vKPnoAbT5m",
  "key3": "2D1Nax6U5awFyQ33pvtqx7Ew5f2GEtfkEW7rQsE5AFUAs7xwsW1rg45bXg9bqZm88RthbUvhYrn9J9V7CsEHdjrb",
  "key4": "4Zx96DmzbFWW3qXVEP9Cn5LjjvGCnWpfpXy9avx8QYNKdV5CfJ4AyB3JK7Xbv1r9R3FuNNpUAqhZ9FUQYjvwcnZr",
  "key5": "5FE59x62xHffYspdhpzbNYikHRcR3TnYgqk4NWkx42effpkuJsYzPMUD8XHyruZKoHUewMJTnYW7LbP68AYq86op",
  "key6": "jiHWqW5aX1yqXESxEDSbkcQdovKSeBgYpsdbAMhpbkmGbcsH83kdp28skaU4QPL5X2wdA3zY5UhJYAqhRqoefQm",
  "key7": "4tkAhjZqCDHpxuSSSTUD18LuC8mx8gLj7TJqgmQqmvkRfF3aC9jpXnjMcaGh6BFbgi6ouYKhN2CWeYT3TFZeGAnL",
  "key8": "3qw7Q9MnqKwauSje7iEHSrgB8mbF5mZeHNFbw3JVyc8Y2VTjRbeHYuC9q8AgBZ9v8NV5LBib4CENkwELr4Yo9Vnw",
  "key9": "3hC7GwNZ6PyyA8bTADTdug3C5djerBGgGRimMWRKorKVLKyUBEp9YnyBGfCkzfU3bWSZ9xRpU6biFN9kFxhCWt2D",
  "key10": "3XLFPMzJKowJyRULpUMDQHz2omhSUnmRQjZDPaEA4jGK4XTpujVBzT2UbhFhudQdno2zkaypL5RuQwLt6qr6oPw7",
  "key11": "4Da8NKZUUCyhZnkjQyVnzHWvGNyK7E68r8Y7PKsHCBZTEfSZPgjnZcQvHMCn7JN5UeJeV97wirmCkwwfyvgLMffs",
  "key12": "3QdXAU3ZQcnWgTND5PPdUDquW1aX4cJJMk8dZdQvG9vqfuatrUFjhiGxFBLYCbLxJg2iJiBGBeyomcRPn6m9rEHt",
  "key13": "5gm6RgrQCyqFexkBPiegAkyUcEf8Ap8aRhgFG8Z3BLMrmMxKDeeZ2GhPTjmoqQ3MbbibD5SYAG5zqpefU7LDiVch",
  "key14": "4rSCi8Rs4xNrDbWEW3LNVQzPjU8aUMqgHtG1fJGAPxdqgCRZteUFMVW1G9CFSwdeZiow2weHi4KpDGZoo4Vbf2uh",
  "key15": "5zdTW7a9fJDdoCTFjp3fiJA6wbuoPoHmzd96zVVBoHSR9kGc3C22JJtmNc6yV6RPjg7JYU8Hj1i1LnUYzicvA7uq",
  "key16": "41zePAJZsPi6tpNoQ5EQE1iCPu8Qj4hXPzmHitVi1D5Ks1e8medckJdJawQoT8dqzTccGY68Y6ttQgQGFQVgCjsz",
  "key17": "3uBSHEcTXMx9ZasEj3wL9sPoY6DcroXntUBvy9By91qDCU5ybZBi7cmg3s5Sm8v1YUfe4NVkEuKPwrXKZV2ZpdmL",
  "key18": "4NypMSxV2XDeARC4uU598WmwgQs6aMzHejm9Tv3AypQpchMYXx1pf138djwVjVnC64h441vPLfLSxRHbeEgHFxnP",
  "key19": "5pWCHk3AgVvK4uRGnkLzG8b3xhS81eGwDhRVxJqgeJDzKRGjDmLKCNf5MKjB34j3mfFoyRXZ2eZwjkssr3ZNCBip",
  "key20": "3ftUJE6aXBET3MdZ8tDdZYPwW8SjY8uVXmYLBP5Y3f9QwR7s6UXYeKtfbdwKimt5JdEvnpseHL1cXdswHVvBCcfM",
  "key21": "iVySkbH2PQSW4NUTgQwH655oZLD3RXmUmm1KbJKN76wn9iMccMgknF4aLQ9dNwgKvkhLjJ9VtqrBTfrHkmPXTZD",
  "key22": "PeZk2T2qLrkZBiHMUu83qxqmMgKeHqRCuBG4HnV5G7jjaBhcnJnrSavc6mApNNmpi1mR7VdSBFfmoUhy5JLcZZy",
  "key23": "RY2ctedxLzhUUK111zM8yooG9UwySLdzai9vjCyx716tJrEJAYT6BnkLR5xbbQGqGHTHr3GFyuqtKkA8UeZoVJj",
  "key24": "2QCfyAQPcJpVGVf372EdDxoGtydp7Y7a6qP2B81KCwvK7kLz1Sxi5KdyDDHABHrQWHS2uTrWZY44AGT6b3bBvKAX",
  "key25": "76bJgMU4fKEpf3L595rMXSNVf8ZPJLJTGCiRJ5xg1sN6SpqQhruqV5t8ZSWdmfgbievP73m4LQJHv6RdsGJzTcU",
  "key26": "5gcMN7ttB6MwtA14zkZyhSDiH9yngt5Uje4CgH7eGj3bqCrfZpA4GJXkdeuoxmtPr1t4s5hUuUwpe7QvUdqkL2vS",
  "key27": "4AFRLi6bvY7z7FySz5edFDmp7xX8QnEeuJ1GocwMr8rt4EAVKUJrDGeLbmAsjtZ19vZi5SV8nEwmeD3XjYWMwWG5"
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
