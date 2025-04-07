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
    "oo7mzwRDvbdgixkuGmbJzhgSHkHoKXgFH9jEkvXaAXhiPR1syj9rNx415dHBR9zwPkRTjxUFVS1zB5ATCWEFoAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGpKmb17MXZKQ82uWtW6PQDB3MxaaZsFkaTLCtcm23tfvFUiLEQYiapc4tfM93hFykKRbZQYiiEo2Qh4LAXqctT",
  "key1": "33wYaJ4EZjZ8uZVP9Xu5qUzRJ998ZQVjE4cNvfGC5yZaVxZtDJDhtKtAw79MZUC26QCYyf59FThprMefKPhzUVti",
  "key2": "5jpek51LX7fSkNZEKvrswWupeXNegXXMK6hgh6CUYioGH2w5Dv5SMxv4ycsAgpgFMpXhdjHgrAUQvjiofjY6Esdh",
  "key3": "2r1ZZfCu6SoPHXEyctZJQNFZasLkug7z1HktQgCsCVtjtStR4TcDqpMQsyBaxkNPtc8f2zFKV8ogNXUibDAx4e8x",
  "key4": "pR2uudGR4GkWaJaDJPLekmdgspGwHJfDMSTh8g3vMoJ2F8sLyVymMhDoJ6VQW7uwq8EqBu6jkVCvWwkDqs991kM",
  "key5": "4t3dTiJGswwSVcB6MG3kjtbrH5VvZWukDxgRr4w7TyBb4zBYmFQ7BTxMoqcboCEmtXtZCwjRNhJgENdT2WFhvB7n",
  "key6": "5NKwFKo3VbhkdhnxeUzba5xha82tNh7EJ42oaWjAqbGCATVPqLJt9Y6VqSM6217K2qW5JLmoZLCk23t8KnwdexxZ",
  "key7": "5q16YN91GGk7MraiHH6N3eJrtH997mTA91cbCVGVjHwHdafG2JQtxoa9Endg8oRZYbRjY7fjjwmuCcYvZKWHhvvy",
  "key8": "47wjZRoPWYtMB5H6ZmCbGPQD17pWvMbk9fsgtrybHt5Qzz6MYJpMPGr7PyDuAfvYy4JTab6TGfQoB6hCozCLhJBS",
  "key9": "2UGYsndbQniaUGeQbBFqCC1dVwX6ZXGttgk348P1dJ9EN5J6vM61HneRkcCeqXcFW8vpT1toZH45g3yLopMhtyQX",
  "key10": "3JmCCedBAHE3iyz2X4rPheeVzVPVnqfBUyXR58c3cCqxAZntoaCnQMbACLxkoPSBodN6ZTpERdhCuY5GzqjWNTCi",
  "key11": "Z17p7BZJfk86fsQ47hNnDDNtVPDy6vcEuZxtqjEoNxxHaZv61kGwz6EYBYf7uoZbqCZZZM3jTYTBHndut3YFCpc",
  "key12": "38kHNGEuVFHwt8HUBW13jJQdt56jwqyt5DM3rcBaCwrjz3uxdrGDWNjxnnqNnJb4axYZefbWgaGxvvUQkndStaoD",
  "key13": "5obbfX5h1MpuwDdHXY5akHAcNXnVSuB9JhN4ZXtmUkET9xbDWc8jf1X4WakYLUePdhmiJ6vi5eSn1bNLcn2f8Vz",
  "key14": "22LfbwQayjem2HMWDX3SXXbvY3mpkD9pAYxzH1gWi5y4TXXroYKRLnHF6Jm4ZWWXY2TDhCp6SJ68aJ2bj5r6R8nc",
  "key15": "3QWBtR4dhWQ7wTF1u8JP3bzwrk2A7633njuRuFNAwFX4yNmxGtdXQr7WMchcfFyu2Rmz35NsLGz1ZyqJjzZpVxjD",
  "key16": "38Joo9mRdqYT7wXtW9U3QapXWvDZheDvh3RNZtMQwBoTAq7cHFviywsxQHTaWqB18iayBkBJdMRidxgCChoYbYPP",
  "key17": "2bPQSkGf3X6iv56VPbhnBN1ruv6XPZoHJNBce8UQt5NreoKi7wYonUTDF4nCS6uSRb3nCKhoj6Zza6BuPbKtjzYp",
  "key18": "2sGFeya4NqmVjHmEDRryRC4fy9uj478mrX3EjKvhaZryqQPZ9WGP7qHELvk7SYS3y8Ti7yzBkrByK9ov3CmNYiHB",
  "key19": "2sKc1egz4jTZzx1Y6xX1YMn2XQYYWJQpzJBPF8UqUHHVa5rXL6JmKaBBef8uiNTLSsDoCNFqVpBFfuWWipYMtzrh",
  "key20": "5EAxSCRuEUpHKj1GBEJNs4psdAKQ2bnyB5hQq8QMMb85E6ibyHTLmHK8WnNm2m6MLGZVXSpuNMtrWeffeCyF6oZG",
  "key21": "4kvaoa9sqTR16zVGP5yY5ZgKZPpQiuiuPp8hNPuS65wPaU2ncqbE4jfNqcnfuQsuCxZ1iLmawMnCsmat14zPz1V3",
  "key22": "5F1dV8jHbT2UKKkdAZ4Uj6X7Yrmo2XDBhThJ5CfnfuVdSyZMToeGMytn4jgjZd2SFzoLVdMr4QfiRQ9bzSLThFWM",
  "key23": "L4W1K29yfneZwvUGN6PjRe3ZripjToqFG5BCPoWCMZ5wVwj6qsH6PmyptmNqJd39GLEsYdAiXnFTHsiZgSXCD3g",
  "key24": "33c1puNcWPGYqbsyVdg2nGxVbJzFBuP18KMtbXKsbHdArXcnmZ8VMniqMJfxwkQ8Skwqbn7sRRcz28rHEJcShmkU",
  "key25": "8fkBQxed7b19zFu1q7ENrqZXdKx1GN38PwevSiksJ4nFRiAk9AxxKDvhLCxv5gt3xSrykjbiWxMsYmqdqJZ2xBJ",
  "key26": "4txfRQ9z7FfkdKLKMZQiW1gLjWq3WkGkShkbJHZGLUsRkyLr2CaHpeQQwxnafkFwchx5FfwkNzCyKssLQggAYuDD",
  "key27": "3HECv2vWDneBL5LKQeqDPB4aUV6NSbWLQH3hh36NjFba5gmkxN7byTXRdrfeb69XzDqQUX8EiW57jAJgTn4yJs2X",
  "key28": "3FpSzDkKvSw4SuwtqoojBevCm4iK6Er3jY2CnRAan8P6zE6ZiPFPhXzL4GajbtaShsWdywgHMK7LPkAHVe6zm1Qm",
  "key29": "2PMedmoQ55pbHGJrr3enyNBrxY96tAu1oYP2V4ceyQaw6ikWZBemnTtJj4XCUPXAgnJBxPVXv8KjzNkHUnZyJ8vN",
  "key30": "9pSrMHXpJC4fkCqVqP4JFiTKqsezaKPoTBgSZty1iZri4hmmnc55VFNm4QRWE3E8XoGewJJfAFSY3Vo2ejMi8r1",
  "key31": "2CKyoyXBcnv67nVU8Bz6pbYUvvnfomxvB6BshDgsGo6A1GcjV8Y5KdB8yQGHZ8cDoKfZTbHEGBmrvhZyzDnPz9Tm",
  "key32": "66PJZP8e4iDTf6mN1F3TwuQ7GqUdp2yU7xxaudep63HV4sVWKh5jQXvA3FhiikDyngSxKeiaYDbt3scAfGnWwq14"
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
