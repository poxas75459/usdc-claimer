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
    "sMpm9x2zZj57fPbFo5VKACvEzhMHNiNArjAdVJueE72FCq81ZamXwQs2qopuWv4vKP2aMdW9iChXm5VJ3jKf136"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwMfGdzGiMU49boxfBmB832d18LH2XUGMqu8btYK9NyeF3YLGKuS4Frq8s2JDTaSiRyYVHQ2XLQNkpC7ro7r5Am",
  "key1": "3qQuJrjQzyqr2oakte1wHYuyP3asno2Vqrj3HSDN7xqH9sKdk6gF3KcBE8kp9CUps47bjQbX8SVdygTbGb5vpBtZ",
  "key2": "4uuAL6RGacsCsDxe41UGfztTCj4aScrUqBNf3jF4ue11CFbThdpFTiZUTMKFPuiF6i3XFzZ2Ww2Bh7QWhFtSaYhX",
  "key3": "4QhKiufS1HU8hSbNTFwn3q56TzCfwkLFBR4EWc1YxMEMmf3NA67LcUbXhVjjCYhi4oY7qGMNGDYvthEdM6N2pBzA",
  "key4": "4x4V86m2qNCFHxESN3iGmMvugkd8bjPr9hB5ZVxZuiksL251VaNTGievdRtYcKYh7psGc3Hmh1aMqSitPjXBwXo4",
  "key5": "h6kJdjphEsZNQobE9hsP1T8JjonWYHy6GjLqB5z73Hz6q1AEx9xkddVEpwdocHrgqheXXiEZWxsRS15kHyrjHLw",
  "key6": "466p7HadALRFxeMqup5cBiuWoMeajLnLZeqSjEqs6EZ1UiWha49pGd1pMHZVtJGfvfYycmSoHHcDo2MHDgAdAY9k",
  "key7": "4kpyxdduj3eLjcHGBzXz3VUvjcMCKGjvJf1GFqZEK6mUYsRkqRBxB5ArdGkyW4P5KFc1cj69VoExcFR6UukNq8qx",
  "key8": "5eJ5VdSW5K98BkvF4Kkbn6SCBEkgtyHuP3h7qYG2UMzfRaASxpi9o43m1Me4AdPJd8xFt2jQZHbfGAW27ivy9Fuk",
  "key9": "3kH64jyfEhFVzexsfUeU4w2BhuddwP5YsJK6QzDwqrM5UYkZHvSUnpojhYef3q46qiTp2ArejQ2GPC1qMSkj6tYD",
  "key10": "5PN2hsoZTUUtbcTPnHYeC8jrm7x2dbKLdtpmFkhZpuNoAS1muMCHQuXUebqkWBr9n3YmjBfsYTuLsrNbtp6gne6b",
  "key11": "2JTqFyAsSabNKuQRYDRnDRR1yRXivbveicGoRFwpPEcH5HyWKYoNcAj3LaB6BdJvT7bybKqtpJ2CH6pW9RHJRoSS",
  "key12": "MyRxT2B2ih1aV39QUHBmJCBA4xkKCHggr7LwnpmC7L5xHwrxx78hT9pG6Yd1hCHbZMQkG4Me5kj9uQZnJNtgC3h",
  "key13": "4XddEaCneKHqDkdTyGZfYWvfcnL9ApUnWtGSo9z4y99HKaJ19TyuXBZLJFnFyPcisoH9JoUTP8N9qTUUt5QEWaEW",
  "key14": "4d4arPfQ4W1x3jNPB9k2v6RVWeFuxk9RAWfKvqFEDCZPFYDTA7NUzm1CynsF1Lc8XXEPJ3sHgggo2YdJ5NEWeUHE",
  "key15": "5P6NhsS4AtTrZjSTCJWs4CGsWdchT6Fb3tbENubC9tpgBuwC5Fqc7eYV1PtmC4fPpoZ8YbSmySAPiqiCwCrRFM68",
  "key16": "3qe1Gmkkd7WYcbfHMYPgqY9qDcUfRCwXXFx8fLMjTN2QwbhrXiKo4Fb8EwMwhnYrHu6jAE9EybpRdWvpPXBQbr2K",
  "key17": "7K9rh2akfSsfRZAMT2tP5JWEiMyKAwLPkvAZPDMvRd29m61GurVXuiGqxHrw9h6c9ZjmB6WbZwBRgD8Qx2obNSK",
  "key18": "5w1eXmFCWDTRd1N8t5ckbm9Vz2t1XPWa2J4fjCtyALsmtwsZYLarqF1N4c7SGtQfEksAQV2opP8Gj3pcAbXupiS5",
  "key19": "4S98weRUoCYL3ZaMnDAPkSrKDmNgf5Rp3tCByUnwix9a5bnKabLPZpgwhidUrcuG1LUz77fKhutkixqFsKjtVmAv",
  "key20": "53PckcRBGtirE41YszNeQjW55ea7iGBQujcU6ufTfQY2rJfVZ4F6Zy7zTFTPZfVvavJyGQaeeoYhggeobRS4NnTr",
  "key21": "3Wv9NoqPLYhMXtYExjXrtqm5TrPumDyyMH3YfRkZxV7A7x9NgwpeDxv5GfUBBST2vHaJQoTEr4gach8qqjnjKySV",
  "key22": "64yvTjcuynfHDS2yrd9h11M8Z4T1w4uoZ7GP9EqTCTmpdNoEroUnk2RPUuuJtgVkjq1rN5821ohxDUk2JLY2CNoq",
  "key23": "543725wTSYfYF2yBzKXjtEbMyXqytuWyZig9LFL3ZE55zUDZqBwTi1kGUe93abzcfx9DzV2QNnWFbTCK1eedeKBm",
  "key24": "5y2dM4tocq4a3WtXFuJsHBsnnyu9b12VVwsCXYc3JjHiUw4d5K37cnzV6ymmz5wMhLTRErTpncYiZP9Kzhz6dkMG",
  "key25": "4vpvD4bWvYhXdwxf8UBg4PWATZcdXZnGHpR6kuqHeP6QBGrVNzYQFLDduFPvzse8B6ohaE6YpCYsqYgbkpvkgegR",
  "key26": "agpeokquX96HNhmn5s6dkaJc8bELwjRYouBYuai4V5YEEG1tRfseimDd3iDyW8jeuAii7ZdxM3e9WE3niR4Dfkz"
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
