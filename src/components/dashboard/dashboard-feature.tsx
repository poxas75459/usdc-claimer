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
    "iPuSWxncgXzLSR5Fieiap1FN5gttWPPLp1QQD35oKCUz2sWPVPT4cANrcyzkyDJypUQCUPtb8kDhixrMkAMxAuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7Nne7iV5LpBDxFxL9p6FJk4TpxTggWqZz85vGtQGVwSCuy1F3vCJbvJkbkF8TgybjiyJ1qZknWe26QbqGDETv9",
  "key1": "3LatNJa3zqHkwrHsHzhfWkQHGoTUGWFxeU1rrfyPu4RVemtYbZB8s5NvMMaq95ZnqM5Y2QrX2arGVhAhL2W2xdvP",
  "key2": "4xVGMZkJCfHGpk9CK9Jc4pFwvQEp5U5KRgcXbfgCgVpYYcmuCik4zE96Cok82iJJaSjCZM1nS64if2KpHwAEjP9w",
  "key3": "3f6audenHBzdd26KdRjNpgG6JL5a9i6eryc8qCpYt7dtYzfiRENGm8cMDnYvvMnd3fK8xj1z783ansnsaHyH3PiS",
  "key4": "62ZyBr5NADLzeYtQPBYgSk5g367Uq8HdMkgzApETy1rvwppHYSgKY62CR9iWphAtvwSdRPRKkJJQJkAnj3YknnPJ",
  "key5": "2wNEv2CWRyAkoFp66TNKT1RvoZMuGwLJpw6547DbnCJXy468fdN3z8rEyngU3Cgg4HgDuFDAFM86LJ7hQEnF1u2u",
  "key6": "4mx5T5hqmfi9hLej9qeHAmu8rSZUfkowgBM9P5p2kAJXTkWGDDnxhPfJDLxAjsewYXLP7Z2Z2YMvZ1chyqFiphXF",
  "key7": "2tsQEnnXyqZZ5CZ7XV7qdz1AYZa6pyoPhhEBpE9b4dMRTqtcV3XFNYzASkP1SwhXFypAJFf8yFftsnUhpU1RBb5t",
  "key8": "jExbhLMWVGNQ9d23QrrnY7CPpQVsQ1H6b53k3YLqw2euvLHAyht2owzo2w4jLT2w4o14uREpKupKMWmibw7qFNv",
  "key9": "zM3DvKYWqddNPuLahoEg1YAYtbVUxJxK4NCydmMjDuSvZhRHH5BEcVVoagmyzLQg1AYHmn4zJFP47HjR5bgkbDh",
  "key10": "4im6pzg7MNb2deJBTmRKBnJFtKNjeCVKHaRim69i6LfDayZTmFakZACGfXStbbHeJbGrif1udtpsiTPv2XkvVRQV",
  "key11": "4dfRX5ZFkU6TNCLnrbivwJYGhcMFR3dSpMqiNH2G6kyMntFTBtBqvUNU8kcNKR4YnibmAYcPMjVh7xzW5itYKtdy",
  "key12": "4xCbwXkyQcjFYecF4N682cPdB3DgFrJ6No7RT5WrFSmHbWBdwv7YBUTBgsZPhhHrK3LM1QjUA2f36zYusQj4FZzz",
  "key13": "245aA1VxWKEw57LMVMxt52jZkzJARYNxdVdAzSZqKgmcotBTTzxDRsCDK2tVzrYGppU4uF23AvjT7wdDjTasqQGe",
  "key14": "58Xo8cgTgGY73vNMv3UGKhBp2WPfHBqL9mppHe9hUYd5gc2kVcACEBY438rtjJFtHUrZ72h4izj96LZ6dYtnqfXG",
  "key15": "ENUXiioLcXYrstvMehDUNRK7VzHuEB8Xe2kB7LPbERZ2ofWd82hZHyptGvzDaBNr3HYGzJAwmWTp4U5sfRwZmsM",
  "key16": "5n8957PSfvN4aXssBDempZKyXxrdg2J9myubmiN2HE6noA8p6XberAahsbTVekNhMomzMwUct8rmc7m71CBe5vmG",
  "key17": "BCTKjCd4KqgFMxXVSbnbeKMM52s4B5eS78Jnjp9dmRAUXnyHVUBefPeFem1fAWwG7W28w5ogvq51GpYK3Wbx1Mo",
  "key18": "4Zp5jzvvA93N1A5uG9tgXMdTzRmZzg9b4bPLysN1xuSzxpaxxWiC5sks5ThSGvB2YUALVg1UArXECen87MNyE7s",
  "key19": "47NGdFBC9N784xedXxvTJjTBDCFLgw9wRsbjrvVodg9vL9HpKMQhHSzktz3iTRYE8Gtsvsq9JPba6AtpJkKftWiw",
  "key20": "4vtTfLFhTYGPxsbRxkZQFuY49SHQCjj9EcnZQS7twRbE6TK6Fe4LUYGpAqiJBjeuaZpF7wyJRWBrsPgRar7J1Bxp",
  "key21": "3fVvzzQokg1cTbL9saKH9s3aZbX1Db44aLQZLm7vHeGG9t1GXsdgWyiajF9MGejySf5kKqCjVBqBZQsxw2n74nyX",
  "key22": "2LbL5SkDEySY1Frd6uT5XcAE2gmPDEaNQfMGbe9EUHhZD77DqiExaKePA6uqUeAxC19NyBXW6wvSZhvTgcwmqEf6",
  "key23": "45XU12BhBtrB6FgC7VGmvptWQ6So82JjXmE1h1E7rzLjaeMRygigYvYENYRdQbCt4x7rW8DtdAh62o5PNUsgCxjF",
  "key24": "4qjhafzBxJ75TMTHL6ZB24cbebCSpv7ccfzArRgWWwbXjwDAyRegVjnThsWNvpE5SNfapALfDQU5VTfKFfV8kA9H",
  "key25": "5gDMVDSoVT3rLxW5LhxZL9FSWRuNjDhkvy2B4XNAzBbaQJCxovhwueVYG4xLukgzY9vA94zjsdxiYbz8Jt3vbNzg",
  "key26": "4z2uMzAiHqmrKgwZhvRuHBZbA4pxCp1RZGo199tdsBDDh8ZBB8ATcSTF52kAK1hG4SyNbUHoud1C6FusF2AnC1t4",
  "key27": "4CbrsGovuFAzMd96LjtCwsprwqcCxaBuk3CNefDNcDzsxywnYrYM193rpRZSmxMx2kVhWbK9GzbAsHeAMqz45UYe",
  "key28": "26RNati5sm4qqcfpC8jtEEXXHPv9w8cNkqvhiHw3CKoRww3Emto1CTuDHXCuLPQEoYR2Lz1QqXXe15B3BKL8YSLc",
  "key29": "2Qn12dbfZcxZ4jD563GcJATytX1fcDPneMCXga7NiS3iJQEA5aXDmHzZRhbhXGabRya4FUKB8va1yzLfwJA4T2e5",
  "key30": "47X5DpNN3Lo5KE1g4NZKK4H6XJT4GyAwv9DrT3o8fWnSAWL3SeiAAqqD92NtdHy7ewmRH6DqfC4to7woJw29UZbH",
  "key31": "4Ar2bokYSYZ96xFsDdjr3nFDm3K7gCpfBFojuGsWo3FKxkFQs5DFZMd5rhi8uvyrM5PjFsdUJoGbJnh4u2gmnTAv",
  "key32": "31YbaGDKTpfvW9oh383kcJT2m7Bm9VqbokGqpBwLiLVLWvZ7NPZpNanbiD6S2o2KCFfP8g1fvhVRdjguAx7utgwC",
  "key33": "5kMX7io8cKE3yeMuAocRKm22dJjti9yCiS5x1Br8SdhjjRD4S6nPE3ErSgxLj8JvEgD9Ef6Wa5CwknVKkRxd4PYr"
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
