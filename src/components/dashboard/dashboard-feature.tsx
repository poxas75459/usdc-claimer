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
    "3GZ9vW8Ze43jfHmJC7kpPnwjuQUYvtJCUhVzHB3uTTwmKU9YNGzQSNascW9RMLown9Z5NsaM2Ecu4GZepzgCR3LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aGMDEv9yJNpMayWZzkK6z4UqGHe8XobZaygvJSyJ4RDFHu976U8ioQoYRCyvjUx4R9RSYRacow1ohBMq8LgnV5",
  "key1": "4EY8P8B98cJ5xmrkAup8b17fa8KeKZNdojYesARdTspuKNEQ6dGG374MeZgdPE3r7b8gTj3KrE3FFMLVLUG5ujGc",
  "key2": "664sCrTkbYvLAKM5n9vyidcgwBskgiSeDobqkkkGEdmCcK3yfoevfFNqrEMCXVRzhiQunFt8Mejn2ow5TaPQp6Kp",
  "key3": "5z2YdPWWajGd7bjycTv4uRknciRzX8fEvswc3ry55yD6SKPWirr4RmEaUmkn37dx3Sx8t9oNMvTcExzEpPU9fqQT",
  "key4": "4pe8wWw2qN2yMb7BA9BumovKGPxjw2eyJdTL7YGdPWNdUddWDhuk8hf28XYEuhJMLEYm7ZZM7MPq1WKGJ9uwRSNA",
  "key5": "eS5h78XGLnupzh94XdCfJPEUHTebniNAsPE4jmxLmK1JXk3Yv5zrDCh3nzK2Gj1g91DFhnhdKuQBCgRKCZdL5v9",
  "key6": "fgeYM5E5rUeV9F8poE8Dr2t8xdS63ZUAfSnuJpYJcRTUcrGAkj3sjbF7ZU5LkGNQSRdkJSzXhd1FBMSG2SUQETB",
  "key7": "3SXL3BkS9TDAVYGGsNU4tYMHikS2NdP8smU6zqrbfTE5jsMRrknz1eS2soRJL8sA2oeVoAhFfEQ9QrhX64Fx14MA",
  "key8": "2F2E2vehmwqVQe61Wk7ZWVsQ9NRbpZV5YHpYw4q5yqqM579g3jZg8kMi6F4Fmm57KeQrtUZBinFBbRF29nYnoZxM",
  "key9": "5BbsnpbWcw7SjB4kjCqXFw41GS2ubRax8Wm8iYpwvkKZNE1dPrWfNrn9rNg15rmTuuJ4sXns6UDLLvbNavh1nmbC",
  "key10": "5ZKJiPU89c1VgrB44j5zezjXr3vb881SUtMBw4kuEE3bWf1qqUxXed2VwzpcMPZqMvFB5DUqTHKDvXs91jZj2Wdt",
  "key11": "2hNmMYBZoJQijgDkBUeXtJ2YXBhS75U7SySVYjYLjaAqgX5gwuoLPwtft2Da3VR9LxQMMwCEsPZRbEYo4DjWHDfg",
  "key12": "3xL26X1z6p5dpX9rYD7bD8FmYqR3JaPFFsnirRHa3nUhDDPUPXjBXp7YTY9Xn2RmePvB63mHgvf87nW8cBjJWsMm",
  "key13": "tWesJCLv33x26fofX7JW58RGGwjhAVwKTkuBA3Ejt8kn7rWnrKWPj1ycgsffKXBWRMTu275xYuicykLbMmPH9p1",
  "key14": "2m5Ps8jDyjQzBNLx5RN6vJkU6Y7HDBUQ9iMDzjNQDmhxnF9xYCe2DwBp2KQTScGjpw2Bt7xtwyJf2nyYpDvCNrn3",
  "key15": "4a96ssLApzoCtGTDSN68VKc5rnSLo8gZdZAyodPgPyuyRprLXVPKKA2Kv7jEhnyvNBf8L8grrqX4D6vbMmvd2VoY",
  "key16": "4uHjYkibCwCsbHgwUVYKA39sdmMtVs3ELggWXRKt75NvVsSZoxegdBM7Bdd18w7ZX64ZjsEtLjhYJ1poZiJRqtNd",
  "key17": "h4FN8GhAJrCyyeiC9d4AcqATVwZDKuEB8UjnJh1RXfmu1hHLqizWe5TVEfkC9Mx7DUSE9T3Jy3qpXgwYv6Xx2d2",
  "key18": "2xB2W5VgMCEdw9ZLoN58R4kHPDvFR8kQayuoJm75gQfxTVWAc5NSDSZgVuKJzCkwro13KeALGc3MUNtREuMdbjVR",
  "key19": "5C5mCZSfCmgkqyvAV3893VczjF3SBSmK1VQKczrpiKT3aqEtLAf2BLfAdPMCTbobpdaRWGTc3xoDVLF5dmXY5Zae",
  "key20": "5asJuWFrcCH732gY7gvwfxKBeED74S69WYnXuooZreocoqZAycH4Lu6a1zqmNmAuR2j9agpjGyHHVKGhdUjCPweP",
  "key21": "3tieUYrod9X1uZRvkm4PXZb3sYnQsvfHUgoEy2HfVKUtvxHhxcpMGrRGitvejiqYMYri6sgg1mPrqn2JXHqxTZkm",
  "key22": "iran5t2iNRzJ5EVGpc5bMtfupYq7fMaY7Zb2Z3UXUmxMHJ5YJSLL6xkwJ12JtPmMJztLvxKwUmfpBokHAF9jTdG",
  "key23": "23Z7AKjfWcWhmJ6k1exGtQL6wtqjT1TLmbGMNz8BpAxpv9YtSdQMKxrMfVMRxo9KNPXz94TNcT5Lg4gygY3SDTgw",
  "key24": "xQzbvJMnfXttQK9DnGqjkrNvqfA4bdR6PdzUTmKdz3vG8EdB6PzBewcRknKHxtRBD8hoL11arE89QjxS9g3MRjF",
  "key25": "3ZA6TZ5oeLrskSZhn9WdYT7htLT8CeYH2RuudqEDjzWMr3DQ83qfAxGP4adev9crbJEMfpMHJB6x8qVkCj7knid",
  "key26": "4SH3FgTbxKtzpvk58QitbiDf252BGf6WLYg1AyPsNfXyCv3C4KjaZm3LqxLhycVF8rWdCSAyRe6ZKQFFnGy2cqHj",
  "key27": "5WmU486nHyYU6ZdNNp3SX3HwK1XPJb61rH9q6QJgQvpwbtArL9K8ij3hiBzBB95TNG7SrxzLZgUbFi1GaBWctFGR",
  "key28": "4wBZhzfn2brvezA1K8U3uw8DFsUbVPiwq3ELqKoAEGhnwRqqZCDgbDeZBu8fgyfhrjGftbgSmL7ATNYqrxzQ6mcT"
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
