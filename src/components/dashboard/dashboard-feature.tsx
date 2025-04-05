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
    "3M57qsX7Z3Bfp6FLDKKpJWXLnY42tyJXkopcXcE7TZneMQ5MXMeRBwkLTNRV3TGtH7LLdnDSvuW57KsMRJTtDVRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXSswF63XSVkzxsoPWgnXZijz5x2366muJC2L1qxqT5YBBQPq7JKXj3LJH91Ks3w4rA1ehtGzV3JFrzJ8TzUoiu",
  "key1": "MPBu45mxzQJXvkQ46KTDr8znfw2yYCe4JoK2WdBJ4vADH4aBYf94k9u3azAh2HyFEkt1uQhPfZseSKYjTmDQvPD",
  "key2": "3HwgHw6Ne4jeVFfj2wWttgTngWRULdGGHRxq5izP5QfGxut4LZSR2wmgcXVyr1wLiEkP3EwhNBGoZLMe5AvJVkb",
  "key3": "ZFziXdL4RubVuvyEw1kgjM31teMiANd6GT1dyiDpoagD3wb88xdGEtCeYADZShUrWfyVM79bvNE7PeXkB43wnhE",
  "key4": "4BCEc5VGXJaGTxMeLSzmfqiTMXd7X7mH23BUGxYnk4bFg1J4EBWXWaVKk6xZ2eTXrFS2xPR7GqE6yZqfkPy3N2wE",
  "key5": "3SJ7bjTg79HrzMWpaYB8wGDxL822uqgnHJTPXNM7GbQMcYwymt5UaEQLUNMdxxdmNCu7S2oXv5TdRmBncKyq9Rwd",
  "key6": "37SJoX1sD3t7eSTrw8mC14tZwozgRsjxUyedsN1edZbBS3J5YHbZxn3NdR9v1VaW8eVpoTa3ThrPaa8AagN6BoTU",
  "key7": "RvCkMLaFsE7w7ccvzoKSoKTBAVAVMHcNYWpNhj4aDZSSBZTwtxyj4Xorpuko9oym9orHEkGuNpiVeufP38UUZDZ",
  "key8": "3tWiGFtVV2fH2eo92NnqahmWZcSaMfrWtwnszDmYRqRcjdaxidGnWughMjU3HJffqCcoejZLH8TnWyKkqFpM26iv",
  "key9": "2upM6m3TaG7qmai9MMbSrwhCexHWuWPVT5SGHhQxY8TbTofMTgoy7SWzAiyQr95KMWvXCxoujVuViULLFWe9dasA",
  "key10": "24YaoPGwKpGe4iZ1mgThPAsG2prz66HQcrBcBRyNSpetYNgpQUTDaf33MEG9SXTvbvjaTYqZ8dR5tEhCxTcaQ2Fx",
  "key11": "m5BT2wq1edERgPQDHAyzw71qj4MULDLoFkShH4esV9xs8MW9vtqMLoU5N1Y9unsvm8aeTrbLXmeFe8HXKkoBNtd",
  "key12": "2H178gbbqC6C1omsiq5Pkeo8fTyjQeaYp7QbxLp6mG3dUfqkkfXccp3TNdp9rP3LDchUYSF5yzkcynEa8H2uSuJv",
  "key13": "48h3yhkaPuHf4GSUbBZjcMVsgKtvLaQVTuRXXnugmULsc5iMVG9WUA9Ao3xKkQLzcC3Cq4GQwr3wsfdzYtNBLo8g",
  "key14": "5Cut6t2oLrkVDxsvvkZmD7UADHJR1jJEjY6s5jaTyAd8HKMjYEytZSEc2sKzVcKKoonw1kP6Nvf2j41tF3rorENu",
  "key15": "4KGgrA4DKXUsH2HFRkgjZ44stihFSd5TXnuLqVMuqgxfshTLyiqSxSTzVpifvpwBfeFmxbcjjnS7wng7AT1GVJ4w",
  "key16": "23KxELyDukuXRsPhGLWJMdkNqCUZfwY9U6mFwhx6GF67MoLZyBYYANx53UwtVWCC5msQLNMZnr8rgN9k74ZyeWiy",
  "key17": "47hrE59PL2JVdFypEMnruAVzRxievwtdYW1HTyihTJ3o2Y5Sk1u4VnJWGqohZqpgsNBHPAijrUZUrUdyEGbWS4EQ",
  "key18": "5JGjh9L1abn3GNzrVc5k6fuJjJTn7D3ixLyyQDtoQmjB29846JL2SYUcvrQ1GQMnn2W2TkKaEDzi4opqh38KkYgt",
  "key19": "2tZqLceZJCCqZvULDTC14BB8BZFj8WbEJs8sADq5ZNuJrHyuFN7vqUgLaLpWWJfRNsh6dyHJU6rp8GG6LbSL8Tr3",
  "key20": "39qjHNWVALa39E3RVthF5cQeG85d1EqWRcDH7RX3wzb83ceRX7ZgJksn3Z3JDXGARdpUei7PiWdMQkn24Bi4RJ75",
  "key21": "MxTSBz1DJJiLhBWGmtGBXDrJoeThSFgx7zYc8wsgnJh9yetbJqGAtbhNMUjacwNpmh1W1DWr6SqUw9Z3wPdmHdC",
  "key22": "57hq448CQki9GrD5xsWQ6xWTgddsGmzXBSSihAjcFxpgGwCyBF6KoaC3cahG6cvm6uD8d5hDqeCxztp5Z7aKG64U",
  "key23": "2KBfQnJN6rxxuQVsXEeXqorBQ1vuBwVbWKiuyySgiLNAiQWPTCGwyqFXwKqZNZkVQzwHLznk33Ko86dBXiVqvKvj",
  "key24": "55KfKxR8BGrZnpWbGbwnYpfuFQrCqsRyhrwU9xVwvdQghD9N2nhfrnubfs2tGTcSBnYxq1AZ7EmoFH8nCW78qeLz",
  "key25": "5VRiufvNmDgXEVDArVWF1SQg8JpAgFrdvkbgdDvLL5vAAm8YmTioepSVseFaK3Ce5WFKAXfLRMdC98WRBK8TyUkC",
  "key26": "2HBQqekGvgL9kD7FeAdRc2t4ofKV9JUqzLhfNQ6hVctAKxkfYJtXjED2HhKTdziDQNNTRYavKcQWToDk11r8v8LA",
  "key27": "2YB41KPYny8JT9jdkL8QcAGBWiFopxvcFaZm9BiVvtXuLtBo6srwEbBJt8nJn7SuFpZMCrardpJ68FgC8SBuxeyq"
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
