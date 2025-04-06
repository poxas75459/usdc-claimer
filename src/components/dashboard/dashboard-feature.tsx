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
    "22bzk9eW6KN9fYN44XmvcNcBiKdJZdMWcL2GaAU7CBQ7Qbgvp25qdZJi6aGH4BfcujhCGjr59MvTihxo4429x2LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ziFSodXya21Lu6UwecBCNtB7ZpwmDWRRM2fQzCJJJu55jNDhwFyaar31x2CzU4UbyCG1qj3etL1phQGDhSBNPV",
  "key1": "2qHfoJEKU3fgVbrREPepPpUbazkuyHs46Cgvf5bGu8GjCQQ5Q5BsVtVt1DDYPYxoLnk5upy8zJ9YA1kJLv5DiJSN",
  "key2": "4MbWnfY9uQUB3pf8i8g84ubebVCEQQMkVqhzNrPdE5bVT5gnJUjdEg6jaG54qoSjqTVcxuXggcLpJssCBobSppmh",
  "key3": "5owEmb2qr4o1mcZD7MfzCwBmes3Qr8o4KMLatdZh4xsrRBd1Mge9crbFp38rBS35So5Accmebzgr1mveD6mX7LM1",
  "key4": "39rW9thzoikazkV9XYJanSdmx3t2pksojfofmCbtN4ePX6hGua44auoaLFMNi9k3GVaN2ng1vEVPFaPTrdqAb1cA",
  "key5": "3kyoxPeQMdsasMcu5kN5fPoNZ4N3SqMQ43fd3miRpjD9KkztKfJfUfERNtvPhLNGijAAhui5eRUaRUhxV46jYE7Q",
  "key6": "4ffLrmvdA4hjtSZk4KiT1Usg43w2T2S2vDZSZyfWKNv4r9ZTAAFL4rKRiNEeZTH9c5GaYJ8wJFc5juWiZtyeoCB9",
  "key7": "5fx51uwaxfbrdu4uRK7j6oXtnt656QfKKAxJmVvPGtnUuD8X8bvtQJEYrtWrkGooBQfhkGtPCcdDqB6qFPLP7bpU",
  "key8": "PET5n7nYyw3qUfBLmY3kvQH3GafQpAEM8vZydpTp7tJjkrfS7mFPGJBTTwKHBfAJ27QhboENk8GXW1p118NW5cZ",
  "key9": "4jCZGdMpFCoT81vGhFKLMKKHLUYmvt95wCw4uAaPsk5e9cVxvMCiVh3yNrBdFkaU262vk2oCKLWMbtcg3bs9yinn",
  "key10": "5avpsXHpcxg3ecGGehf9qQ3DirGUZkGeNUWBg8x1YrdyfqmZzb7kvsPCAcgngQHuhC85d1ibHamjbryDsZF5Pj8q",
  "key11": "4yoPxZbPYMMknAKYUMR1RcHqphXXJgc2Fi96rTV4dwnn2qJ6a2VTyyS6ty431t1SXcgjLugoSjPmeNeFNDM9zusE",
  "key12": "4WgoVkb3vsUM736SpMsGgUHiCU24xBqdugrxuyd1W7YrHfCLyD3i4SShAgG73DHhhcL12zVn4eFXwt5eYb9PkreA",
  "key13": "5WQzbprUr7VSYViP2VVP2emCGVbYy4seHPdx3XsGQhf48w8tmbr9L3viBmHZFmRmoDpBjTpkbBab4kdESALwcUJV",
  "key14": "61J3Tacy8WmWZpwSLcJzeAx76QCUn4CadDxikcDCEBRhKABqtMPyLVpyDz2g47HCYEaENYVtkMYFzTQuhkugt1Pa",
  "key15": "658EaW8TXgEH3qBE2L6YkjEv7MJwZ1SV385n3MBmRBT1Ak7LXamjRgj89yGJbGHBUuJfkXPD7PaYm1Q1q9AeZDN8",
  "key16": "2RLnE2Zs4Jt1tBVAq9vvDrh8SNJEmrtTGqTCS1BUN2jTa3HB8tW47W7mf87LhukyvkfbKnZeqP8pkAtj3apFAFAe",
  "key17": "5n5HqFfExaMuPyhQiQQFFjyUnJaCMqt6fNCirHg84RNzTGgUx2W8baqg9zMWG5g3mPsVpHXKqm6ZWMZFv8NQkdcg",
  "key18": "2wC5Z6WW9d2nqRHmULZrxqHAiSm5SV6ZLSfDa7XS9aDoVdkLTT1YdUetpgPx22vNsrosqxLXx4U3nQxKJxjvaAKt",
  "key19": "58ydovFU2bC5wAa5XW3p4YWfvVovqioJzZw7gdYnQq3qx2HfDdcQiNuqdPVn64amRm7DgPrGCPmxBWTkQktjD5vf",
  "key20": "4hZGZC4hSbk6Sg2gK2pgMSqCWCZ5JRz8MYkLH9BK3B6r3oN8qWqAMzsaYvQ2vRCBJvzAaFqpMVXLt7E8L47owL1M",
  "key21": "ChpctJrhe55yUWKY6ASnbtXJWtETAYot5xgwutE31kb5ZH5qtAJMKpx51Pt2kXDRkMWNWspc1Gsjhm6XvmuiBKc",
  "key22": "3PeBYmN6MvNM6UxgPiKMNmf268EzUozaihFzb4njTjULZiGSWdnXiUWMfXK8kWwYTC8HZVqLRoxyqbmJWEXqV6ki",
  "key23": "274H3MdRsU7qZftJSshuXUKtKUZjzNQJmdoZLbeqodntyvq49QV5qREUzznF6uub5KgLL4RgSzsff4ZJVjPEAHwd",
  "key24": "42s6ri38vF6Tx5q3XwGZXseYKZ98Nya7Y4hgcYSgRwmcrF8k6tRMF5HSC8zMwTnAHdZviP4qoXcfGQX5gBqgoiWL",
  "key25": "65ZCvPuJXhUGMbV1PK49i5JTKLRe5YmEWy5xnFnaufgDYKd5ArJzhkHsoZR3b21U8FMom7WisFRaFywMcFD8oDer",
  "key26": "tcA2SUvpSu8mAqKRjH6PHfV3SUdLQtjFTYenyQZbQC7jHAnsX7e8PyxS8Bxutpgc28WKEVKtxH4Y5A3eoKU38Ex",
  "key27": "TZYFwRLxaiG3uhCyYqKgYYshEFkM5YTC48Kih1L6TZFLt1XUBXFTFeQqsLg73Gjup7aXLFXSGhMzLiR8d9zRUzB",
  "key28": "5oCWiwWL3r5h8jX7ufpi6RqMuehM93UytA4BMGU5QbpngRGGtwDKKBjhaG7xfdTdAumEYLPCzQ4v7m4Y9byYzuQb",
  "key29": "4eQXYW548TJj4ejJt6MMb3H3QDvER5363PAf1s5FSf8NP4zsTYML33F1gfPKRJ7dK7L8S1k81NQZA27uGWCGsVbk",
  "key30": "2b7YQn3HBgcnheG5Z6K3Yx16m9mpSUpYUcki2yMaQUvtmpYaWNJZXiS2PdpqDKLULxrUjvegp2dLJprMWPwp4etX"
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
