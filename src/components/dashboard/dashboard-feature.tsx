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
    "2C5cCcuzH4MTQQNnvLWK1R9nMjJUCrRurBVDcGH9CLdQryddSe7Yaoq8ijfBtu17EPB4weBBq2PsY8wfumCmHHNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exT7mHJUNVnGmwz4hAaiY9294TZ3MzusquScd6Z3LofNSSXwAq7PG56LYwVx937kN41CL4F38r4tvi4wSpnu9xf",
  "key1": "mLWSvxPiYLPnrehCtvP5f7fkk5aib2dbipC1BZXtnJDHAfrNo9tiWvA1HjZ19MFb7ACuLqezReGoompfznnBqjb",
  "key2": "3YLTKVszAXrhoLXkgyRPrew5B7BgD9T5xE5p89uuYDYydiM23FfD7rTq9omPj5sYHk14rXkTopkkkP71b9RUvBft",
  "key3": "59FghPoj3HrEt6V9pQVPtpdnTKyv9S5DfauSPXsnwfKxsAXsFeatnQcfNwqQrCabXZrHiaRoMbcqA4cz56z6gfqm",
  "key4": "4je6TCzWfkMh2pXgYkGhXnGB5dW6V8EAaHZD7tdLVy9aVTpUQpFeB12Bmyk68j8Gka4YkiaLANR97RfVpMP9k3RA",
  "key5": "5iMT5rEWCs71agxRCcVQvmNeXCtVpHN3S8R2z8dAEiTNcSiNmNNdruNMKRJdasrDsbCq5pfqAKPqkhL8QujTV1SA",
  "key6": "5sycAPH6Yd9YVcpLWLKUjqa8RZkX366Bc74yZwK3nAm4gxX3zKSDxMub2n1w3EuobcPZ4ZJUGi19ZSSsJa165bjY",
  "key7": "4wSBF7VfnYGUtkgkqCpG6DkRCCoTcmfKNNm58xcrqB641VLxzCzHftcAw7ejUepCbtTZpDWbLiznPou2N7oHhgnp",
  "key8": "4FGkwdyswauKzVFXJBDYvi7xmV1Vsf8bPAdaqd3znizW5oswJDKCspmmdV2CPaqqyXJgHTAPQjifj6WWXyn7geKJ",
  "key9": "2hD2v5qT4U5mi9NxkxzfRnKk1yJsRXMNBCqcN751XCrtAV5g9SCr9P8uq8c1MtEWTnNYsadNSRVabg4m4d6jvgiW",
  "key10": "39LLGURktMHhDuQeiW29Gi5Y2XYErkUjMG41nLMu3ghdCe6dn8JtazLjNYMWeMFzoLC1AzSrnPLuwDnL417LUhEt",
  "key11": "28jxp3h1Y6apwAN3ARsbe74xkGok2VoVSTMs64i3wGw3sxUWYYih77nTLAyJvVNu1G79uube26rzhWev4EqsM7ww",
  "key12": "4K9LMLVdZUdv6WgfYQHdXjyD5PekMpJcfM8J8euJRzsAr63d6b9X4SL2Dcs5tdMWhP7htzeLumohts4vz98cHnzd",
  "key13": "2hr56M6N5fcThZE9qoqsnnacZwXMCZrFrkvykVorDYKgredrFGHoNcbnnkTrn6uXebT3FKaGu7wGmsmhUdVEjHEb",
  "key14": "5PqxrFYpe9rH6UiFY72QiWADrFNKavyjAc8cZUy3CYZSK4QkjBvXMB7MHhKNZQjW7A6xTrWEN7zhf5TVSXjFQFhr",
  "key15": "61ZMz5WgSDVJAnevhWP8X973uixkTNs38KcwUtXPn72nXbHkAydrEVusdCYmHb2DBuGJTQg38MtLmdhCt1BNKV9S",
  "key16": "3gbHkXcZ6gZ8wtdDXTE86eGispnBFRX6VkvjZ39Nb8AUaX7mBnCQs6WcJZSwFB86YSbTXvLpFAQAQ8xuLoKeEuTK",
  "key17": "5EeEP7Kfe9kRE3xrBAYs7964HuUVi3BGwPxyUwrNb1EvYY84TV6yANzPw4EZtSedsy23WDhDoJhME4ZGJapyFhsn",
  "key18": "Kb2VGikZmCQSUJKmY63xZp196KE2sBYhcnZHWQ1GNCHhWGsy9UaHbnuEtZHBnVfe5A3eg7xbsnn8qM22Kw9SLKw",
  "key19": "2Jdzo5KHfecNQTnvnxui2QrHrVsvJodz1pnZMPyr1F4XxLNtDP4TbYAQecee72q4fHsoiJ2vzP73ku5DTTjZ1iRw",
  "key20": "2WrbGXr8p12KWu5SBb4KtGHc227zexPXyQcbUyf7GuKUbvhTvaLPoq4VsTdR4vahkTk4osRPSscsxBEnhtNxrEFR",
  "key21": "3zKHJ7wPCW6koYp4kN7ReQ3Ci84L2Wi24o58jgKqxCWDF6v4wz6cqvj4YKpMVLCt2er5riigTFWjS6uvZbZZz4B1",
  "key22": "2AKDqvfhyjXcUdhYNYykRNKhLALuxFBJc1XSgwbSkiVmxQrwXRpXFQAasP1ykD5xQdE7QkC1Zg25qmi72ogvto6R",
  "key23": "Rxi1DVDh4YwKd3Jp2ZmJg8jvnpaNZ6dKzEHFQn1FyXyVeWkouX99FqMTf4wp1a2oJ81bSMLFsMLpVPs8Q3ygTGP",
  "key24": "4GQwhVMNMRmfNTAQffJ8Ng77D89YHY2uaLLwmYjWGPcPCuYKsFVNuArf1KYThxigcEDuikc4srTb47grse9SSJU8",
  "key25": "2HSJVN9h1Df5siqEed93qbpbrxMbc4spFfj9H498NWnRrh4jihsoA4ZsJjTKz4u9t6EsrMRPU5WpZkUw9Laf7jSs",
  "key26": "33bFzVCzkRqhfqN7KRBVmJgrx8c2t3NvUkX6wfwTmtsTVgaSaC2Do12Qpa5negJ2cqtPnNznxVQeueEtyTS3Mjee",
  "key27": "59iaTvUttTuWVanB1zVHMRm3yaCyj53PNP6v75LZYB4NGezeifYguVEjBQpKWWcMKkRrutTAx49y5AcAF4MZqDV2",
  "key28": "2iHfzvMmc4CJUB7VK8dk7AphT1MiFqkj5wX32MxjkSp8yDvvyxKJLxonCWzkLeEoU8kKjHFkzHPhTvzVnX1VqKhz",
  "key29": "5kaH86zjGwEx2qQepgUDL38Xp4fRv2SUPFX3TceEgQcd6xuKwMx3mjQZnsqENjxVDLFK2YTmdoiLyFeEroEg3KNa",
  "key30": "p8pQ163TuyEVMBHFLMNdNHqwiNwdXmi6ukdUSWsDimdAd8zdsje8J8YiN37iWNiEumkgj7JLZ1uyTXjH5YaeWc4"
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
