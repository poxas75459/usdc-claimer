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
    "3HEKtB4fHBxruyS2dhTjuj5SMfRBVD9AMVT1H9gipiXF2oCrZQuFCwL3ahQPgVcwiMeMU9F3KGwbPFbAuFYr7TpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGmCVk3LdtwrceEMdEf5kQLhM1sZ35xqrJYzFMcHmXTVdUmDCukPTitiWJJsUEGAZKu8vkSd6KraV1rRwgELwSr",
  "key1": "5aPGWkiEwWjE3mrgjuhTpSn2EGBCFkj2npr5b8t7uKigBC9ySZ5t5DS5P66edYWVMRfMTE5ZRHx5pfmnEagXGjDG",
  "key2": "37iNKZ9ovcFvcjsZdN8EtxQ5HgVJ9LQLvMxkqoiG1oyhFEc3Vy3Z7Rdj8tSzTmxXGz1cuxXqRSdJabybLPNFovPj",
  "key3": "4kjE9caKcgK278aA6m9XatTExL8oFgBCieHRGXkoJ2e3ybeqvKLaBMQ81VXWrr7y8iHsGGdmuzkb2h7kaYjhbagJ",
  "key4": "48EB7MzMGDHiBPurqGJJkpkewttxRCmHJ9tMq8EMxycFX4eCZ5LrSaoL3T3feneku9jL9NXQvF1GqjZtxUWeGHi2",
  "key5": "65N3oXYhCCeDXvnYXrcez9ToQHDtBD61FqMZB4JipMxSrrNQWmhJUPwYMYAQZUfhrf7QNDC1fdSrHaZW8ZWZxeeb",
  "key6": "44n2XechuHNKF8yytcF97VSpq3oafPNoKixwJhcov927MK8GA7V8CVTCKeFJMtdWcKVp7huchBt23GbDmQa2SVfv",
  "key7": "5Q6ASvFM5imUZVJLKUZPoC48ZJAYENCCGvp5uEm2VcqVvWRMvVcJ9eMtQ4sLmkmMbur96GEXLkBoyhfoQzuam83p",
  "key8": "4aNVCoij5GuV3GNWRpWGnNY2aVdtDKtg2u6B46ySjEyRjGyhgFtdwE6Q3TtQ1czxtzTkCsGkgkaAGYHbdY2cTsjB",
  "key9": "3CkmGkB3cqFv2enYKMf2HYtpeW2pFE2M49Y36Nxmau3N5WPe4yX54qT8su4kQqRxLLQTK3LUk2YzGh62XGV81td7",
  "key10": "3fGFc6rPk5hEBp5Q7QDURK4zVjPXRAxjdQbEMKjXude1wQ11vBULT41eX6xDbwDJ8trj9mJuSgEK1tiM7AkoFJkU",
  "key11": "2ZRCzQg9Lt1y7VbjhN4Tzy2DQTGJS2roEyzE5iix4QVoMQ3UUj4mB6qezD6JJNyEUoUPwJcjKv9akNyG1frRx2SF",
  "key12": "5GXtVAYGS1RJ2ocDMCVHXpG6xCgu6YfxgNuPLyHHfEWx8JiP7s9iqYYbwnqbirRp8CQ8FuvU8as8pEeSoiR14xj3",
  "key13": "26EKfT41zs82fguoE5HJr1YyocEc3RNiSqqCGewhsuodUGLVzwVdS2AzXEmbSHRf6UqxtYfpGtfrH3z7hX2q3174",
  "key14": "5RrBu2hQPhXu5sykvNw2cevA4mfeTqoee55GCKaHyzzPRBXcuC7KD2c9Nogxs6uXNWtdtdu63iB44J1XRKwz4mWd",
  "key15": "5Xck4gAvY4BuMSYvfV37zzBVmtifz6sadAe4BhJ8NopVuq1SH3bt35jHiZ5EbASQzDyCSkAzts7kjWoiEeTk9DcD",
  "key16": "2mgWf3KbPRUYqWZCv9cDhHKQZLVaVTFbEEn4r2DUNqaHkBGVjNc1HzVxkTs7SwfbNdEsgtq9GqQNJgWfQ6ZmaXws",
  "key17": "p4dVkzJzb7y5ZpXdzZtELsf9tKbDa33QrqcPiJrkVCQB3WWNH6mppLQ4w8XSwHfZM8w1KnKVgecpgfn5QYm2zCX",
  "key18": "35HtMzUFhVi4QMiwovqqUu6nRG4iG78z8RJPngAjV36AbywZUsKrDc1Sk7DfXHvEhhfNVjS7x4KL5XFY2eQWiKmG",
  "key19": "4uHUqXJcS2iaRRftNFTo8xcM6bCaYtc3B3GhJMkhjJxPXk53V6so2nVKJJjhznL3tykkbpdizuiaRTudWVsNhKJo",
  "key20": "DUtQ5xNW3ZRKRQMpxziSMEmpEEDWZUhN8bZMQskQX3do9ddYgVUdy62pJew76r5dVfW1QGdBRDsQQ1HpWwLGGYw",
  "key21": "4wxt6bP3WwxJTyff8DzdKhB8k6HmwcuL6JudPbMiQjFDpWDvDAoctsYAvC5tASXZE3vszcBQGxS2vDGQ5eZdTrhL",
  "key22": "qLYPozstNy7cCKGgp4pNxAAt3gLmCuUm9vot91u6htzRPhjLzMnyAipbh75Spd5BRZVtF1jDHUrsaLF6MvEfiCH",
  "key23": "47k2x7e7jWfaCHgSFavaEUARFMTHdDAn4ZhuwLXV5YQmmvXavtShCpeu461hWhkUjWdKVLCCVJnkrPQtsuMFfknx",
  "key24": "32DijkL7arC43RPj1F6JZAd64kYmBgGxMvp2NMwFdZzEPEa3mzTsE8NsHCtAwqQQTZtSWm2oAVUfGMkEuVXgU9rc",
  "key25": "3U7P43awQxsiZe42nJDdhEeZ69nLYY7rLkTcfMbPrvg42sMkX7Vv9y52wh2LfiQ2j8LRr91SmsPCtB3or7D3pEw5",
  "key26": "4e32y2rVAtJVNfmyyXxeBd8h73ytBShPjLDAzD6npq7UQD5U4XFjNtZ3S5Jt3JAXcPy8D71F3b7Ac8M838nPG1M3",
  "key27": "2HnHzvWNzJz3doCfxjYfdkEzpNrDAE9KaQ5aXSFMipEf3gDQN5acXmeXH69Rs3yx9yKbA23fzUCKYQPkhXXCeg6k",
  "key28": "22wzZmphUuAZFtgrFek3h3bVz6FufUqDZ1V6WVEMUiG2XpZHTN9m2i256NXiuBbjk8XdsKZBF4NhKC2t9X15kwQk",
  "key29": "31fCqV1ppao47S7H1WYUJhHe84Cq1UAug92dBuxD9kVbsu7CojR5mNZpnMjm9AE4pTbFmMmvYRS9FR7rpC4nbvvv",
  "key30": "3sgsgN3LGFeHvJ2c4sR283RrsjaEYHf5XppFt182isHC43Q3NnHcqisibbR2XEZAtj61fRstsuULn6YzCHJcntDm",
  "key31": "YoKgk6qzMHwkxgpfZzayD1Vwrqs1KZzbwEjRkZ46yVUmNfEo2pyhqow3WKfCTEL2VujiHNbywnC9k3bAwRUQUsj",
  "key32": "42wg356gkiFtMfnwe4g8v9VdQEkC7zbjsDwthFd3LnqWhL6WRS864ZLoHHpxPMGbeXgDGAQC42nvTopiF1ZpRYav"
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
