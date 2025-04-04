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
    "5en59csG2Zx7j48pt1TPMd4hM88y72T5qj5brsSLnAkjewY95zdbYBFnv7PMyknsk6GdhRa8QXSvEkc3V8UwFn69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAxzDKFXegE6Um9Sp6omBPWvAUDgqb5RJrUVjqV1rMwxWTF56tLPPTnyvPxmKBCQrJeVineS3b4CS5uf2WKhbdM",
  "key1": "5gcgVJdWZ5HvaTGWRwwCZwfvoQfeGvKnXRgaR75w8ZUSA2wRd1B8PtNc13ToZReScTQMudcymwYkP6dVxDBCipYk",
  "key2": "59jy7z9GRQyJ2AdkT3gd89ntCodae23jtjGKBuf2xwGAmC1FJJCk5uUDsWg84sSyPStRwEmsEgMBakKg2pFxj66U",
  "key3": "3v9M3XMWQ1DmhsVRFawKAVkmn6PENhGjLsyJ7vFHC9mfc6TKjSKbPk6xJynRmKefyzk1iUzdnaLVxEaDWwKzPMS3",
  "key4": "5czp3me3xN5bvh2broozZzMvvAZsUxEHgtgpE2CgsfSGDKe3n6Nq6vTDAcHBeW4oZma2j1jZQcX3jT6xz7cJBRFq",
  "key5": "2v9X8ghMp9ne1GBhJGKPedeMLxV1eJBXCHrAQsSS35rCb52MH4KxocD4urEqqYEdDQzMvibGFY4iHVb6kUZF8Qta",
  "key6": "3AWzKLhdYcDNCyWp7FYhFzjTPGKMZMJ9cF5yrga7J4VYuFL4K6ZeDBacwvsYXMavFFe6s9CdvERRtNQf4kAwhh7n",
  "key7": "5ttSBbbT4B4nhYHKGjurqczggHAnaUXaAXQpcn3KmYeGS4TefTrMZ4h7cmU4U4yRPgXnJGFC1vES699TWmT3fFXG",
  "key8": "5yitUi9ctrrWJHBtSzanZr9e8wa4UH88dCZv1dfJUqACqFbFoVKvySFbrzC8ssCshrM6drpDVBChQUiyrqMuRaxF",
  "key9": "284Y1nkEbnWGzSsrXNMrY5nvxb7p7E9uWFhhFuyP1LdQhcX8b1fLMVPcE6M2gDZPsWGKXm79hm5W6MUL3iRYmvFN",
  "key10": "2AwJtsHAJtFZRJJhG3hbJCR2GmdrhENrDkrsL5QwH7iq9kferWYGniqPSAdwBrZhBaPWgEBQZ73LWE1iSYECrKHe",
  "key11": "3MaRifqx55o7aAZNmQcRpJWmDyP2ezdjWB9TGcRMYvmq8xNXWChGJt6KudqAqEpF9PQjNcM6ECr9Er9MvX4UR1By",
  "key12": "2Lh9ya7oCBD5ABm5rR6W2hsQkucjzao7D8xZTPwqWz6ymTjfKwcgdrFxw2tXPNTEYGYoVhSuQhjUvVTPyU88AFU6",
  "key13": "2qupjXR4HURR8H2NSEpFspVdnRRruS4iA7fVHH5MTP1Ky9FxUw9fHHWzWgeuKDvTQ3qroHdA2F3AXCsaoyRwp94v",
  "key14": "M8FoL8gL7uHdPdvZetoZ5A8cJpMneUkwN7Es9EnVQcshmC4s5vdaQtjAG4z1bgTEwWmDXJfKCjguCJCyeV9ms2y",
  "key15": "JQ3yREEwkrTa5UEGDmWPQuABuHzBHZ5sW3DXPCAhipFPA4bYbaJVn38DJvH2HfdfyCUFfxfotCEVA2aheHK7dVF",
  "key16": "64Au9YrorkpLZT7hewkhKdd195iNMuFjEmMttBtXX3rgpjfRwbYRFCs8xWbnHY9Kz2HUk7cqXbSmqXS3XDfh7Mts",
  "key17": "2ovxT9VuNutm3eXqu84ArippaLxmJTbRWG94i4tD5e1PnHjn3PNQGUgANXZdxZwR96irZ7a4ekAyJFy7TUPA99xm",
  "key18": "429PaWg4fyJVchxCxwjU3U3sViV7F4LkBZKyA551DPhjVTENKk9GuKei9S4kJa99T5aU4aoooNptpqSJmmqcV6XA",
  "key19": "d4T4EnQTcrtz9UHYs7agP7UR85TSYDD79vqtiFYp6otyNAJWtZ4BSpEqNRTFnVA96rHaYfqDbea3LNmULD3vkz3",
  "key20": "2SNFUYy1JcFzjDXNy7vUB2rXphZCdcPGQw1qiZ9wuWDM3muLVboEb6k3QJk8JgVtNyPYqz1MqqhQCd7zGuyS12AC",
  "key21": "4qmnGWAWXgKbgnG34MNDKvECTrBsTx6MWffcFGxY2rsQcKLpnwPB8xPJ19GXZDYLecWu5Z5zMfYuxLh1Gq5Y2gtk",
  "key22": "5TS57rHDXVYJmVmu5QyjHyRaCJHQoJe1v4Mx4XwUUciChDQxQVn9o9ZHd5P6sGgbu4qQ3Wz76ZfY1LQf4FpHbJ8L",
  "key23": "KpATFrGdih86PR9sfqksTqB6qEMzK5WKbqHykkqhrec82qwLE14PhG3QxXzpmei1c7jqZMtFybAZyiifyCnhzjz",
  "key24": "5K11etMxUb8SRbGwDskyCUsvUJxKR1yHXH6XGk7xBXPtdkDgLZXc4rE36KHAj9a2BXZWH92fYQgoWo3CTeEjqzV9",
  "key25": "4THxXDwudGWYzKuY5FbX8odiuM9CtCGAQQvczpqwJ4zch6BxqvNJuELqsboeNQjTfvkvEJjgqfH9cfUVZnNnuC1f",
  "key26": "4Axr94tMJ2GU2a7PSpsnT1pfWu5LYvFioa99HapCT3Ywp6EwFjCSFP6WahGaMepHHvRE9WgBtw7g3gLP6g8GRKA1",
  "key27": "JTrv76RFeBzsSNkt9VdgqpHwf7zkTnDwbDuTxvQayBc3MJBdQUeHn6vEyjqyGfFTVE1SGrD2yhM8dt8cUvPkD2P",
  "key28": "STbzkwjp5vE7JmXg532LGD738a4P3ochqAKwSxAi9sqvpX8DB8UuCut7xATCHghxqvDCJYB9CioCvXYGMXYg1gM",
  "key29": "LftBDTzpKr7LcF1MTA79gDoEPEyrPXAduK4wugp6pKXA677yE7ZBRLBDbyQ3X3Pn9jS4xfhtwUMhYux24EW6zAY",
  "key30": "374gxEbUq1XeRZPqeuwjLHo19K5EyzX16nBnCjxxDkJRw5AGZe2fNv3KKcm7MXkJeuEQRuXfHFLDpPGQFrWeBWCo",
  "key31": "yiLGH9p8VyWnghkFTYE1x8YdSZSRKbwQ1k1ASngYaUhHy3erj5FpdSHTMknNcv9d6uFJiZFkpfYpveQDqJzX1CP",
  "key32": "5JWHyWqzt1hg1B5jaYoufrPGJ19mUQeWAFhay3jqHJyUdVQVFxxXqd4ELRQmeXgNcsK8fQ8eBVmFZyASrd2TeHBj",
  "key33": "3U7Vk6rd3EBukDFDG366oMhzAeezU8bFc6dT7PZZKdDG7eLhPHeHTuDNXusemhAjtWWuCKwq6mhXNpJAJBUnKttw",
  "key34": "BqvHNC7nayiGZ7JP3GiBD8hk8knB2Jr3CujjhYBKLc5pFNVPjE2jWEkx1Z1cQUkQpMxUqFB6WEJCkQYtKj716R7",
  "key35": "AoCoDjpjKSoLMVeuu43FZ2JVaw3nhTi1Td5rsn1iFL9hLAqTgDgYMpjJzUF1HV1jgyBHbYCjVSCnmAaiPBaz9LA",
  "key36": "3g88UeR9FPZm8TvqxwzGFaEDNpeYw5Pr8iRXi4dVRxyeYKyom7D8SKHXY6raa1ZhhyAKrHVMvEQjtwZchm1UY8XC"
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
