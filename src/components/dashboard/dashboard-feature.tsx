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
    "3gMos8NkzeWv3a9zTQSijr5dv57hAajVTJB1AtZ2isoj2HpN4nj2KbDjiBGbZ6r1j5AwAVVoBYAcbTpvNpRFouBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1fYbTGkETKq3r4ng5zTq1PMoWRACfaj9Shj6XHTct8s18wdf2J3MpJxbUqbnhTCL1cEC3eVN5vMtu57hTCU4Rg",
  "key1": "4zHNgncfA8oRGeRmP2eKEE1FNuTy3YQuCBNa9rhzJj3fDUfUjccoMdSRD4BCjB9CZtZxvhmwK6kux7F1bzCiRorL",
  "key2": "zzcG87sXvyre5Xa4WB6tV2yLGdH1mEwEy8pW4LeeJdCsmhLtSJvThkA5qPQHrUPBD5n4dVGoH6FnFBMyk6GEEXe",
  "key3": "5j6mwS4FCmrnB2Hmp8UMzCqUoHGkZ4tGPzRMMKrkenoZViS4vrSibH8dh3VJNi1hBnJ2d4jhK3TP38EMRLTPNZti",
  "key4": "5tdDrvAhhpn1HZd8VYNBYMBZoeqX4RUgwXrqpWLjXL6kP6oT2rritzUwGMSeLFFAPnmzbAxer3jgrL8cDwPSqUvF",
  "key5": "3DeCet2GQ6CNG3PEREAcyZ1Jr5qao2VuVu6XVzUDZccSornkmndpksjEKZMGCTCUvRZRdrSQRRDLmc1XY72K8cTB",
  "key6": "5Kx5qXPBksrLojarcd6kDee5MTgs8QqW2cS71Cr5sarHULSC2CyyPnLfQtSkC41cXNeSJmFhEokNt96Bxq1w2z3t",
  "key7": "4pKaCXvBNCBHo9v7yPgshvunBYMZingUHVQ5mgEePY8zySR7LycBRp37CMWcQ9YhN9E9LHqZDoHgoBBEwQnwrkes",
  "key8": "3RGRgcRnzZADU7ChVEz5ZrsndqLL7V7kUoeJr7eTKWq8yoe4YEMRBPNgcMtxmmkeERNfibEKgJLKB2QEg7rWmkUv",
  "key9": "3zGtv1cNbA98Mgkqj1MKeUxPxvU71YZGu3NJCeTYt5gN8tZz2fYm3paRjBrhYcrQ4dgFWNCokLbGgAiGpSMJKAaX",
  "key10": "3MzzFdzgVSXvtyESJzE6TKVyVA6mpbP44dtvgLxurQis2U3f7koit7xuS2XrA7ZmvX3u7sy2TgaixRAYj5gzarYz",
  "key11": "2vfMJqXUmPLcmLnXPUdemze6BDW7N2tL2Uqz1N8obr6DXTcb2aoFaaUS8XdWVVSxiM5BZBnqAJLW4Xk2gaFB9tn9",
  "key12": "2CquGsuffFLDD4Z1SfaeRHUcsNwbFXAopxXimTdvipFK9KqwR58bSrhME3QbvJqKd6U8BCtt4CfrkQ7heevDcV4x",
  "key13": "4wPGiMocnRjaVKrn71qDyS4yewwy2BAkHK92FYrcmz523TMMGEkfgoKsV4kFaLt6dJ6yQK83xb5VtwbRY9RqwRFt",
  "key14": "4iGjbW2YPJZGZyVHx2e1d3dKcjx3ooXrkb7et8P74LVc5RTPosqhRUwoXiMiE2mhuaE9PnnkqQkqSfoWkZgLwriu",
  "key15": "xc9pgEvqnPm66ttws1CZmA25kJi1DTMJ3JN9bCE7tC3qzs4YyfJZ7k4pjnxXQNK7tvYqPAQarUVnEokt2iP3E6q",
  "key16": "4j2h43L7NwB6Xjb6NrEK3WNpze3LLuQShVcNdsK7LaTUFhqVkxwp1BLCFj7UwccfQKL1ZWX5Fss29iuQNTHL4gZ7",
  "key17": "5e9oxT5QyWazKmRVvecQMk1Artd8DAxGV8aJEf2fWdQrYgkZqGm9D1uw3oWZL3c8iobnyGVGLMaUDgv5g6R8o2qt",
  "key18": "551uX2Ckh7EHZjZr1464Y3pTyMY7c8WcbBRadg8jDnaSgom7YHKB8bvNFLDDBZPA9HY719GowUYw4xVxXrKfH4P2",
  "key19": "2jguHtLXgcvJy8W2ZDjwcZeDvp8enqaFsYbFHaxkyHrLxdYCiSHJ9Tw54BZZE7KrU7t3QRjXEyA7dK4wNhQZZajt",
  "key20": "5MvnQ6p8rDrzTv2DRQ5yP5BEUVDZFaURUekvkcCDEQZ4fqQVsCsbpQmZ2dMTb5wimQF4973dKBojmFvXS21rUzvg",
  "key21": "ZeSxBGGJLJxasJL3DbPbujispRQzPFAnCVJkRYz7gAnLzvwVuLGDgvFHbyqwAny81EJuVRTz9ASpUaesu7RaaU6",
  "key22": "3tWgQvi3ULcRYFHqMNHQaAc2aKNHNMZQiVY7Hq9Rn8d1VQRb6y866f4CosAyV1jMSYqkTrfGwVJqCdFBcpjjvkx2",
  "key23": "596ERPwSPXQ71a1B1eRd9MRdFBQ3UiWgdZr16ZEjPRH1t6AW5L39V2wR6L73NnpxeZ8DBbHhzpHCEjacLzqrLCUq",
  "key24": "TzAKJtywRD338ChfRRgjVPrqa775xYsT58ySgNziqp5rCCsZokNzkezNmUkiAESjdfANx54CsNiCmg8mKEx1Fxf",
  "key25": "57UG9HHwwyWhBvzok6FYLJAPyZvDxEpNgtsKEcHGq6MushxwJP5ejgHSDvRN5vkCytp7Ka3ZyEogFDWJUqXEsvtM",
  "key26": "5NWKwZFa38fXWYV1juarBJsYdcTgxWwq8AdNBBiNoa7vVLaCaLdGjN7LFJGyXH7bjEsR51EWoC21FkEkxkNsWjGJ",
  "key27": "2kqDijNaiTS2h7LKhRLoahan1piSpqfvKHRWDHvekEQqaCjLDVaEExq7V2jxh3ku3gzwNEgqdJqrUu3G94pzkHKU",
  "key28": "26eb2M6VX2eFjyEhEPhfbrLzThpEaDtoqHm8SQCzFwm3aceuDvTHfLHV42ryyv54GTnrWXa86t75LDYXefLzMf28",
  "key29": "2LqhbjtpHjyTCZnZFmK2Hv7Q91kWsUrxkZfNga4T2uhRmdVKdC1qtY6tSjuCJGrUN2kw1X1ZrZCqnzFkuhntMmmv",
  "key30": "4WAfyFyP5YoG6FiACHir8r3WeYXrGb7jTH3gCmhHbCKVraH7dGgrvC1nLRR1UJnnicErQkkeSQt6guAPrHV4md35",
  "key31": "2WdvENLnaaeTCBn5h6GiVXdXkBTuGCUAWeEpuyECVZihczsZpyvjafQQqXr5atDU61A495oxGdRwAQtg7hbCmm15",
  "key32": "ZGvXtBXzQPjuogLLqxsEZ2i74vVZQxvzkB2mCUmCaMRJktw8qK5HiNjeinV7oHxhGWAyCmY2aEcKqUqEE4aH42m",
  "key33": "2cTwKaPkB3iuUQvLF7rKJVaKvrGEg5jef84ekA517Eka8uYY3AkoNf389yirYvKSDLeFrVHcchBx2BJP4bbC8cj6",
  "key34": "2FZqU7CYJDBgitDsZK25sb7rGnY3K9DZsYTb3Jy8Muu2K1vkfCun6ZtoAxANnL1bL83XGh3KBvtoPgNeeA7jTVk6",
  "key35": "2UsVdnuy3bqqSaVyhJNoBTXiD7hygFByTtTs81wUgVEWYukTR6Z3vS7keY2ZjBqaWjVJ1DyKbh4hP8VtJ5KwgvKn",
  "key36": "4sm8J8WDAyc6hSYUA7zyKY2vfHxYg864qVBsZKKpDoXjPaoVJVcwLwcC8Sy7knLdYArZoH9MbzE8TPr3FsBxN4p7",
  "key37": "4WBvGJA5VAyv1tjrm4jhtarUMbLwYETn1fwtFbc7Go8yRDdq6hauTWLdirBTbSWC818v5EthzvA2PJnWsxKhUspw",
  "key38": "4qKdHjgzYHzdW6MHLdwGoZSMFKUDamRSEthPyVJnuT2cU3DKrwYdTDiu5UkLyv3RUBKkBfvw2CnAdZYrNfcLSfVi",
  "key39": "5WvSiChhVdETBH4RrPyfT6GuzCyxHiPLFrvtij8KWNPXN793mtCvvw36NjHZgLLu6KfqcY8gaPdKwstcZKPnpGS",
  "key40": "3ecMf5mD4E652B6vg8yBj9WWVYLTcvXpQVjEQncQRfUzdcUdny638nCGYiugRP2hNSfixRUXD5FtkyxXvqVpeEPv",
  "key41": "4dCMGrraWH6UdbHW44Ls1kUxbGEEzmMXn6TrDeh6KssifobXnHqnJKbbB7AoD158YLL163jtCFQtdDQBR4ypNdPx"
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
