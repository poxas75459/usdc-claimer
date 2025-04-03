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
    "2UbEBukX5PvkBtcFStzm526Vevukm9RC9SejdQWEZW8ciPayHN6Qu2fwZSjgfC1KF9UkxF8VtqZ9kUhWxmiX9UFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPqtXCk1cdxsdEYMK7csroJM6hXFLJzEmH7HTuFD7kT96Qm8NStVNbMrXnGvmdkbRtWmifE7RBx4Xq9EsUHCPRr",
  "key1": "4JnVUGQUHZaFCPcKizt2wVRuQ2V4mpR8jicP9nXbS6wtBTEPZEJ22PXG5KaebsKzjwzWsw1XEzCvb8ybiW3hxFRB",
  "key2": "392zqLjdVab4uHpaYvsWgwXtcJY3W5UnLaNvmu5S8k9Yrih7XJxhLFkfYNbs9UeJZac34DDkkVnmtQSyimHe4pkN",
  "key3": "kdf8Tgjv9tAZCGCuKBAsAvN3U6NM28KncfKfat41ECoe9kEoLSNfAK1xBayZ8HqPdzqrYcso6SWaLTteCtkdgmF",
  "key4": "4ZD1gauZAquES5NSzNTaJkp7yqCvLSYAhnjdYDhx14B4PjHXZDPZGRF2zop9bLrmnPT7fUTWY2RBx9GE1sRZ4xf8",
  "key5": "4jcpSwNDXPMvPULSk1VChwuetxPe8bSh5mJ2g6EDUtUtpjCZ9GoqjQXZcaCFe9RMzQFQSDqPssHLgKVejR73jhAo",
  "key6": "2z2QVa9SxM8zg21Nt6KUtHKDmtnDmxgEATtbb4XQkeDXedPLNG8CEX7ZV6u4eiNeXJbnp2rS2SeRBUGxq6Ln9Vpw",
  "key7": "cWuE8WQW8wXtBjiaTHYccGwr5nboBHd5th36r1zAhi8nCVTVchMh9jgFmiHQu6wNAmAejcmCJh2ujpsbZVPgMLA",
  "key8": "273zspw7ji3CHUmsNcdXZ4dL1p6n1YBDSn5X4Re1JVb8DoMLsuNKL4nUhWYghG3B7J1VxqefMmHx8acibjvMa4Mh",
  "key9": "54o3XP86XP7ucY784owwR3vHZLKe8H5WX3K4e1tnk2pHkWbSp83NBacgmCgobPUSvCoDqsgF367TLhXQquD6Q5iL",
  "key10": "o23p7tUzJ1gHQbqXzRmKkoaR5DimNaLdUbYNwBSazNYSQPERi7NYnKf3m3EBMCFBbKaVRgutN4RNBg9Uy1F2dfQ",
  "key11": "22gFpqudzvgvwrxuR77SqRCUQa8EdqLR1gfchSSQF4Akni1V36Uda6KxhmCju6VVQUbJzrWFVCwaHjcnm87eZPeY",
  "key12": "3CUg8qan1JJ1JYHqWBEC6aQhaatc9AEcxMqAF3QSnyMBaZcZ3mcD6rba5rgCGCa1uDqFJELq38iBce8FgbhmV3Lt",
  "key13": "D8zJFoQcDm6Mu4XRPqXUoUwCCwtqz4LGWU2iYz6fkyn22MYGzKH9yieZdfMZj6PcGJBYyauj8jAnXQktvgpcPTA",
  "key14": "5aUSkkZCTeqLx6KzmUENtXnY52xrqAHkXiUabkrCR4JUHWF2ekksufaKriDe9SH3tb6dB2tXKBcbmJaNqstLe8xV",
  "key15": "3NMzofLNTb7CfoqfRPJwkffjCeJtGJUZyJwNLKYUsMcRYT2G8Q4CF5aAXm621C5LNRr17Njm5apTBSVixzTwiVAH",
  "key16": "5L4KkLZiygCkNvouYwvSRji82DFu8mYqkW3RuJcoPMKzsk27Zdkc44iXVSfaW3xY776dN8AE4QdQiEdUHwFKsuQo",
  "key17": "3s5nzhKC99bdW8S2TDR3DSNBVctXwkZ9LmtKGo9vXhz9153Fi5RcUiZKVCwPVjs3ct6cSvhrAA9dC6V6N8bgbyAj",
  "key18": "VhqSuhMpuPvUwxpRohJt6b9Th17afLvd5ZPmpmWNEZgttqNj4AxhCLQGdZzpaq3bC4JdNXKS2rkkiA4jgmsqoXv",
  "key19": "3NiYyG8TSkMwbPpvGbSmqJL99FmfRoxiy1Tqn4tzjV149EhpmbEciFtsXS2p2vhZsEYH2YuaASiiM38KGUXHHR1P",
  "key20": "h9kZtLr3oUr5xhBzCTjgzYndtK5k3PLK5eh4Y7qndFwgCLjihCUMSrMBMfaihMncNe67ysLW5HGZTygi14F4o1V",
  "key21": "2X7VX4MVa6gujzbpdkQwg4N8dkQ7KCmmmdHCGwFPpLq2euaxgWvxnJSiS22UUoLRZ1wyze8ztwhN3MUkMZrgmE1C",
  "key22": "2nyzUbWfbdGzcY3nnBdZL9TqnBnvLESukynRzyNUB8Pz4Jp9EciwWwCEaoxwAGTLN97gNiq5tsooLGdMCcQkP87M",
  "key23": "2VstyASruyWQ8cvzefzxeD594Lo36jfPxBApChWYpf3Njhf2PkfWG3VW499h1Hy6RnVnNPKJzdpRq4UbtSSMaGR6",
  "key24": "3G8aGV6PaPm1SVZoXVLYuSCJKP7TgA3vSqYGbDzKXrNKqN3cXzfYuPiSYkYmH2mqGLDHRjvV1uUAn9oC4T1JBLAS",
  "key25": "2EscS7LaB1Xz3zSeqSe3s9cGqUoyH2iFDRm1EesSaNYvQsLoBphT3qvWF7Rkus6UPXe65CEyzknoAZhX8bYvT3fG",
  "key26": "2hTaYDp1ULiBeCg9zLKpmDoPfc3TbZp27tgD7DhgkvHU9PuFRT3bHE4bz6WqiJ6b1iqYx8H6E5jfuKt2m5sq7R3a",
  "key27": "56jP4nuwYe1WKR1c8jqkk3dFqEkbKzi7jG1wHSq3vfP9FZbDBzECNm7PkgBHW5a9gdsVkJ8BT5kZBWm8CukLtPyi",
  "key28": "pRV7TJGDyctTVq7TwvgxMCaLXpdy1pQrPLVvES1hN16NfamKQAjXMe66sUXfaQqjJ4kYmZeXqTohyaUNNDdGZPU",
  "key29": "5MSHLZth79DXpGSzjEJ6tK9usVDciQSdEvEFMX17gv8N7uGSndWhc95HYALhsVi6YYVe3ixFjmKaLWdz6updWY8N",
  "key30": "3YErGvCTeGXW8b1j2dtar2qMRseyLudVrQDu2eGTSPJhvh1xq8KfDQ4HEwwyC5ZypAF2EhzMcRg5d2UCkrZc4fs3",
  "key31": "5T4nDkAkYXcXgHsGx318PSY6Hj9b2BRw9SksBdkLttK5TdwDqYoXF8YpcQrWQWKNqDLdHtqgtYBhz41q8SoN4Jzw",
  "key32": "4V22whsnMdTMcddJgVw5pNvbjiawn3NfEdE2aWMg4Ww38Kp9Rfm1pknRvfsqgFJ2Dd8gE6NjfPmpHn6sgdjfrNVj",
  "key33": "5D5Jx9WqdaH2qMNrdNd29aNRHur6wPfd2KtVbC9mcWoY1ySdCkKQEsQvu8nNN2vGFv4WT5wTkEXYuT6oqBnGfyAx",
  "key34": "4jCZ3DBgVkUuJDyaGCyaDroGhEZEWpM5K3VrtURtrc1FDhKoWuBryaWQpdS5PZ4bpJDG9X94XLChLz47eWAs7qGj",
  "key35": "4AZEKcNa8pyDw7VpbGkLt5LDTvumYoaeLrywh4oEijftWd5w5U9GGgnMmAzZana6mSPzo2v75iKLVFaACMtuHY7r",
  "key36": "5ARVYUS2p9YpqFFikxaGMkNGpHa6WqczSjkBiTJQVxqbScw3g34pXGwAku7HqQvmcsvJvoRJsQtmDYjLcB6EEjqs",
  "key37": "4X9Gy1qrL4wRUM9vTY54AgHnuW1kBQfm6BR59B7V6FvfxCmnxFW3fePERWdMFLMczGF5JryyDT3AtKVJXqqqE4jy",
  "key38": "4WWPUaM3mDNF8UoEDzfMP4Fp3gipH91DbNKYz2pRxG4QNMGe2w5mntC2VXKLqpPXGnRVMT5T5gsjyTwFTzVPc6aJ"
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
