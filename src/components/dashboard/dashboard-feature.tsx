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
    "2fBZiYXDz61abkZ1w3Fb4JNFens9P6NUu6iqBXx5Ec3bcbZYgJgnL2tJ3odkKCeHnhxQTcLz38XM4pwbkh5MmePR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5PD7uJbibfMUPhCrWwTK9rG1nG4TW3PA3sYKWSHsba2hjVcrZdfsg2p4AqLFSYUJ82K5zJ2Tpg62JVZGxJUzaT",
  "key1": "38jm4dtYX4TEUoptVpAEPNUP1zkZWjdLGPsoMKKpdMozdrCSahS5qxAuujbgVzYNhBdBUqTcNM2S9e86EgUx1ofn",
  "key2": "47X38YrhkqVMQzF9xE3RrzRhNCwYDYq5nhNjWJb9Dw7dmq5iwxUdUooGw8UBx2UU2ydgbjwcraxnD146MPU6EDAf",
  "key3": "5nhcSCsNT8hzgtbJ9QmjUVYRtNdzC34cCy4EhcJNbmL96RqHqpC5NDuyyvs1ZPRi8b41k7qq7ovpjqFnGkJCjzDy",
  "key4": "2wug9AH43uw1MUi7ztxiHjcQBoitxSnFxuRmhFF8FXNK6VzpVcBc1Uz2NJt4H8P8Cx9XXDJB2PQuvYBmKJ3EtJhT",
  "key5": "2t1o4Xxcu8p6ZAy9y8FtSmAPv7FDfgWMVRqewyHvwnW52yMPz1PfMgyNks3RaJvhVgmR8gN2zeDRMu9PQtfwbdRy",
  "key6": "4eci1wyDrLCAt6SJmjUWBihpfvNgNn6u7qLssicrQP14VhPKXCR2MwvdC5HbTLMJiF3Zz5Cyn1k6VsviAKt3mx8i",
  "key7": "5htGW8dShtEvTigwG9T4xm9XpT2KyuKXRi7jfx9DJZKikmvjEbBhJU7aQG53hb3j4Pq3yNEZAAWB9a9RySBu4Z2G",
  "key8": "3YEhisstGcgsNRsjhE1gZTcBSJBfH6fJwqZwhgfddKg1vyygVFJjxFQCu8kKxLc7faYcmuAyKb4LHLoqXqUbqvm1",
  "key9": "5vp76h8yvY5xoSNhFC2ZDrJo2Cpk8us9Ezq38hBqyMfVWT7Tt61qtG3U92C9nvg83dMH7bV9jRdTcnJxXHFzjeWW",
  "key10": "4vLmVyUydWQZKx5L48yEDLyjynB6D1rhPmSY8XhLrRimVh3wbqw5vFCpkVFcas2Yy5vnAYRrYvC6BkQFEVKoztyp",
  "key11": "4DpvrpwLQFrxpY3cSQexpG3x4vMtbh9QXL56b94ZYxk1iq4o2ZdJsB1wQbnMLb3DTjSsDVz8DfmWx8QdVfNzgp82",
  "key12": "2zNxb4EmiV7RDKA1rvHbHHQZsGfLGJUW99wsDg3uuYwkP8GaiEQZnLbZ1k1XK8keydd7LtgTfpv74JKv6Yhi7bLp",
  "key13": "5SC8H6qeAUy1LNxaRjCrtUKu1F2Gh9BWfNHzYoWXqhQ9RLPfKmfbDs6QMmWnChjeh1rLsr9jf2WX2wehEeGKjBNJ",
  "key14": "5WViNQEiLS15aC7dC4ZFJ75J5MzyiddnbM9w6S6LZKEiYM94gfdMpnjhpKXdsXqciyzCiDRqVcgYMyNRGdciLb6f",
  "key15": "3dCtd6cYnwhPGL4wUkKpdv5RdaCBiEGT2oh8cqFvRRyKden5HohvKpHW2EkzwofCu2b1AQBWL6AsYRHG8QmmMGYm",
  "key16": "4NfW1LGuj6iTwfN5VZ6oxgYRfu8KSB6P4vqyTCiJJoNzqCVEn6xcbVqNqmEQTRMvoxLKn3Q46Q9uLybFX95YRP45",
  "key17": "5kewz6oybDqyHGYYTmoxomcKNdVoACPuFTxiY3VQFks9Pqg2h6KeqtaGsNFGQfNK1DRfyG2hKJstUon5xw7LpKTZ",
  "key18": "5NSevqR7xYQ9LCc9VJbZEhy9a1U6ytUbTHUHAokcNx3pKMHnNrg7frFHG15KunkgEyYDhA7hfPv2pTP2c6cnTEeK",
  "key19": "9xjB3CVJgTc2s22BTmhFN54hV7Gp7Y7JJwq8qfseX7vWXPjfTZfdWKTV6W6xLXdjW4Xb8UkHyjYujfLgpTAqyH2",
  "key20": "3DKw3BST1mGhicsE6u4Be9Sugtd4Gsk9tBjAMoCVvqKpvZr34UcfvvnUwJDF4AG1XMfMhQaX45Damdq91UdCdjTa",
  "key21": "4C4aQvkXmXrQZNafCXo3ctXPy2kfxSqBMqNeGRA84w12U4PkfzzbkGUBDvzZTxdPWqTSoRkJLSZFazYucEShmPVn",
  "key22": "5hSGfumrZ1LPhqEJRavprDPbqsTQ9fU2294C8LDY5n7kxLsPv2dQCWd49wPy8YXd83YfPYhTUM2EZPpd47V8TDti",
  "key23": "5PKMJykadSDYa6jeTXWCFExdQBRPog5xTwGDquDwtPLFpLuDAgBpbgYQWFerb1f7AhXJVLMUiFBsov8coztJc7ep",
  "key24": "5Lf27qG1kKhV8sTwYS93MptBt1S22icND5emp5bnNQepPm3JJZWZHTySQrAfuhK3bTicAUZK1Brwko3GbwYFbdD3",
  "key25": "31YTyexJEqQtHegJNafCms5YD6rHPQwWhbgG5cqktGzVYZLMR3YaAcE21HdVFYiu3emZFafuwapPPqxMGGVKPZ8k"
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
