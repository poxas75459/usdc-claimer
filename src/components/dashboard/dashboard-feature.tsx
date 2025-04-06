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
    "2i2iMzEy7fatDiiYHpVopcEHGTPztzZmSy88R3Fz39yeqyazMWCbnzBMq8qVkGWqLu7qZH2xCLXpvz8Xumukkc1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aC5rymTLuY4zrQ1HUCuN1hd8XMLR3NPB8DYEgCCjTS98ZsrFP2uYXLJrk9JU8DvKhGaYnMiGfq8Xh9zi2kYK7eu",
  "key1": "3fbyKkudc3WM8peA3VYFZLxf3rL3TDGYAbkRrs68inLoUsV8zXMqBs4kRQwyhXHkfqLFQeerHswrEb21sKs2uqYY",
  "key2": "56f8hQVVAjAMpehjptfGGY7WN3XxGTgv4NJngJFam6HyyGPmfejZu5uVzCsUByBhpuAQdeCCYRw8A74EPei48Mfz",
  "key3": "5AvBKwUWytpgvNxaobt9NxfQrD2YP61Kgj6Wgjf8evfWbKtNU9zUvAg6VRxbM6mQoQrDrdTLiUC31ohJdUoaPybk",
  "key4": "noLMR6WebApcdzgHoVfWwUoeX3SbuHZogyMd9JJrEkp7tuZKYnmbXE1TJK76QgVb24cniHC12bkjrkRv19gSjDC",
  "key5": "4s6m2tt141fWpZo96uocFMaEd95aAF13eqFUTCxXPi2M9JRBqrT9n1et1YqMPmEX8wkvrcqaQRRLRbo5oURa55Wx",
  "key6": "235CvuNgjH1qsTewA4GC2Y3339qymTfTbsKk4pRezpBPPYpGSZCBeWsBGUGoqoNALZxaV7skj4bMG1kwDtf355Tt",
  "key7": "5ZhTPvf7vqewNsHDtBN3NE6r5gadT6xZCgBjMhiqLzaHgjtaavMwjv31RAsjnwBWTMD1SF278SampqrafgwqReue",
  "key8": "3XzrWAmAJmwZSwwQ18gLnQKdetJWxz1xHtaCvoc4vgF5oRLtG6KNo5fqkivs7xEn5b7eWNnKN2zMTzDwBBjZ8Wyq",
  "key9": "5chVSVGWn4NyHYA95equvxyHQ1JC7UdsqGzi1c5YJt31SAPaZ4wzkcGzMmh8uB54crA1z7ZhEup2bGD1VQKYLMy5",
  "key10": "QLhZHCHbX2ZhZBDhptBzZuLHALv6FQ6X48Jw25drwQoawotivGqtxGj61EbyAYDEURr4E3ksr5oLFanQijbCXEf",
  "key11": "rs6EpgEjNwFA4hPz428Mj31aZqgt8bPXKnbK42XeDqsEyVfh3x3GemRGXNMA26Xi8Ht8v3FcYfVKGz3tKy3qYqJ",
  "key12": "PuAkjEsx1pRmi83cNsVgEoQ1uo5HvT6wbKjhiE1RK8KQ8iuh7wSvQq8sBwATdDnoQC1kbo7EYChknGzTxr47tMM",
  "key13": "31gtZ7CrUxJ4ijb6b5RZoLAPNiStEMEJfT6zyUtrYrYtQx9W9LfjZjsvnt8kG1uvo5VYWyRryqBvtPNSguPUJJyg",
  "key14": "rRahsHGaGpBYHSNCExPtj5mM3rGkQPd5X6JzSedxNeozbJNipDvAV3qzWkm1dWdWJaihk6D6EsN7Zdmjf1hsmNt",
  "key15": "3M5k2SJ1K8yAv4hK5y8z1Z1TFagDPgTnbQGkwqFwMV1JdELpmKRuWxNEwcuDVQJG9UEcd7RSgzKLAEB4dp3KZwNc",
  "key16": "5mKfSWTHmwVcEQqdrX5oMBz2TRrnpvgzy23frp7tyFZJgQkK9Z6sfSkiP3GdtYawSF27yZBs946BtFZkxoi2TKvZ",
  "key17": "5pXFznGE5N5uBSy5zFZ6RFgPjEosSKYfBm7JgLmLhY9hvGyfh8HADiCgYiWy9KtPMX5CbG89hARnqBa7FJKeZYgX",
  "key18": "4p1uLwuPHwdmDjfqfVQ27E5LkbSoheRRiDJ1mMrLfTaeNTEdzirtWf4TyG8irwdaUJWUgsZemmjiVieZGJvJfhSq",
  "key19": "4RvcBdMxS5qZQgt8vrYArTM5v3969zMH5CohL9xPr5Dnbsjtm4SvbtvR9uBFzShEiNsB3J8e1DToBsJjbV9MxdtH",
  "key20": "4ZjhSe2EZC5n52ytkDovKved7RhcVvuhPdwBBAdzxcih9L1Xk6EGSXoJTPLX2ckqoGLpxMpaDc3U6Wq6X7FNbu4U",
  "key21": "32cuJoZRyY1iMFv3oghdJXe2dRgSJDBFSR8DcMb4qYMjuWuDakACLRNrm1fk9ruzFwuCidGNXHg3yzGbocCKwM4U",
  "key22": "2XiEfrBLyoMbfrBFBz6gDk7whN6kKfv4RZbbSBpNYWuYAuSNJQWDGAxK8NBhdLwApP5GLtLpEaMN3KoJYFaHWWFm",
  "key23": "3675EWSUsem4o2W1NUYNZzeLcmye81xAbzbbPxgBUnwnJDBeKocisvjrZnesdnaGV3zTNvyzYmt442eNKBjh7PNJ",
  "key24": "op1GM5YQ1aCRZZicWoctEgdGcdvJgYWeZfWXuXqavdAySfz68jbc1mN4s9FE8cHZLRBzAWagAy6mo5e7Ls7vnzF",
  "key25": "5HUPsQ6Yx48MJV1NnWe7igzvvaDwJv9TYftm2YrQo9Syu28yYuV17Muv7zL8Q1eEpszGixaqw9TwuXGhuEGsSxv3"
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
