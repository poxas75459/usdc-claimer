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
    "4RPWxAT5SDyQUjZDmXB5pEgvsqRKrhAe7byH3pa3XueDiQeRbd19QmRCYFRyPfUcoWWAGnNcvadkiUczHp2pAoSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dH4wzP1fEP4z4YxJq4gEdUhMTVqhzTxcdAjzN6FTKNbyVJN9X67KyBwwDmJ8TaerxGsFFpWH4Cbm1UMjbj4irqR",
  "key1": "4tFcJEhATw1qPdCP8kwKKwk2cMh2ncx8G9wzunwvgmBQfxVUkfGdUG2FWevskQXjgwkrZLP5832uWp1fKomhpUd1",
  "key2": "3NG3ip7aP6gsfifhfgHvUFndvzHFfMGiMK4hpwDEydeJrchPCnxZzbe6PPaz2kKBcnDZsHe3dWveecLhgug1iiJW",
  "key3": "2MW4AfE6Hh5mMR7eApmfLm3fyL1CsLskKqHrETsL3on3BGEQXHJSxEvdHY554Ru7QuPipxhoPiWYBHxNo7esFuy5",
  "key4": "4bLcsCwqMxfodux6BkJ38po1oSFifufBeQNxf27TGBUV4KarWufgdrL9taou6oJzCHxREABvvUPS1K63ivSD9iei",
  "key5": "53RWZDQXXmpSynPvCtuV2bTzo1VaQvzb3sqQU1SyUkVvZomofpRDmRVEVhHR92zMTYXisiHvdAt7YhH8zHiJfhfz",
  "key6": "5AaQrxo5UKjMUGeKxs4RYRM2CTJ8px1arG2E5rkdeqFHPjJZPoHVkUuVgmeHicBEGXgMJqJDP6Da7kMhzStobdUE",
  "key7": "jsKKCvmeYDnKYdAte1HEd9yu1AA9Jd17AGBo8q3wPjTcVXkpVTUNT9igyVvpZG3m91bmnG5cVBfHppoCuMG8Km9",
  "key8": "4ftGT6iJmpsj8Fg7ZgoWNsiazXnj1pninfKDpXr6fnJvz6yZThidggZSzRKiy4BTDkKnvLSqWFG4njPnPNnMwPrT",
  "key9": "k9tc4aAWeuxq53M5EFYFUzqimXTMUmfJ8eTvWbtcAJ4KedH8e9qiRLcQ9ZFS9GJQLpCGDX1NRWDcXTfJKRkLBHC",
  "key10": "29Kxpa99NovMSXNW4hREwXZpyERqQqfSLKp8nDwxZW1auS7LbRzEY5LkNpEwQK9cBM143NXUKfM2AzPwcvUgRSy5",
  "key11": "3jkpjnfjJMJPp4HrsjqwnUdi4WDHcwFWhNKU5oKpXkYdYtQH2fHQo21HhEyvm9Ytbr7niDdzciT4jo8RQNXfsica",
  "key12": "3FPZ9dZgRN5X4KjvUZSVwxSZVrG3v36xEMNF6u7kG5oTSd95eKUBayErEYmKCAstji5eJ2DxyQBFYonzjadXBxpJ",
  "key13": "E1ggCxPCf9YTMqfBMntdC5CAwxa3zd9x6HWyViQaUY4s3h2bs9W4aTx2X6JkTPSfMimDb4i5BHi5bU5QhpBGrbB",
  "key14": "5iu1ku7KxQvREBkYJ5uWitPvWjQEwqvHqjZ5K3NjNenQUx6i5erV2PngfwkRjuzwsipR7VyofgJVHintR3vtAJRQ",
  "key15": "2fxPAWevFgkFAUxZHjUzVhQKsQY5ottcFGcTyhNTmdftUN9kuynKwmecQFMKbQ8DfxcEzT9fnp1F4NkHfaaoA9QE",
  "key16": "6imLckL5KEeVmjC58mGMRMnJqxzv6BE91CcDJpYykpfshvpPLMDFf2YGvFCDyVhCuysUvk5iNCs1e6b8DmXAFQ8",
  "key17": "667VyWyUvUbPwZutsRJxxBdARmZML72K5pAFapazfdNERDM7vEZ9J251bAW14w4ChXgBAP1cmdYEe6D2QC2BqoNP",
  "key18": "5c3ucRUDBtd71WKMtt9tKHe8zSjVrhwiF54vZ1tNHokZsi99ZRPPbnSE6LDwcM9SfWP5YcL7VJaMfUPuMxizVFwt",
  "key19": "mY3U7Dzjh8xmKtrnAhonYbNgdF16Nn59X4FQGiQv3o7QHUbqSkcwmr37ryfwRt7ksozGaBc1NAxZYrCuPcdpnJk",
  "key20": "513qAdQcS9ehZabhgFp7pnZanxYi76n4qAHCe2wadEuTHYnS9mUbkHLtDeSR63oXfTATnkahMRaVqSseDTjdzLah",
  "key21": "3xkVqYejKKTB3KogdW14qQsJjeL6tb1V35J93cUCbUDrwRXhLq1DFUPsqq9sZW1eTmybTT25M2uT2xEAfnqdv5pD",
  "key22": "ezXMiNCgykVmmMuBn2ep9tW8txvaYSkkwySW2r4JDiMFqSn7wEM4spt5iLUGwUGiCERt56WFwacYGtVNJ8HL44N",
  "key23": "J12xLG7QkJ835pdm4c6UkbkcNAjk8WtKFzqF6M9PLB8d6yBsBRtbzyqxbQP3JbB5qpWoSeenYRyNQY9PXHD7HoK",
  "key24": "3N6DNetUQUr58TYjKyXBMTRDzhNQZt8qmvMrBmWhtYWuLytbv1f5G6JkvjZ3cHQ7MCJQVbUV4rFcddoCjtvLUM2q",
  "key25": "4R5abrz8b8RZFPXiwhukYDJ1t6DecWvJoVGSwpE4aVECuKavCNfvQ8eozYZaBNErjTw5irwFc6NgFZ8be2S3sjmV",
  "key26": "4h1s7d5XjksCcou52Kex2rVaLHqVv1QxaTekLi6TmBpmXRSuNbKumpv8F2BvCMYXSNJGpBxDh25Kninh6smeBhs8",
  "key27": "31dLv54AxciwtuvCEBRVZunFCMB77YZerJfn2yFByHcBxmpHXNgB7WziTGmF3FC3zN9mUrCrzrmL7ePV3bUYKUvn",
  "key28": "N6HYCbMR1SiUBFEDdxs7f8kXaXJ4gRJ8ZX4YBsD4G63WsWssKVXYfXCUqoo5BunxWP7mGswB4NkxirBpeeP8n6U",
  "key29": "44kvBXnm7iXmZJDP8YCLGJ4mwMqsUSiUUr4roktCdrwXBgZJARazx1aHzjdKi3vFwxvDS21C3jykGQjoJpcMEkFG",
  "key30": "2smPjKG8d3Rwo1DEhmcqHBt4zh57WZmf4eY7zvq43kSqxE8f7onWwoBrSMCwAcYrfjJMfzFw615pbD4rWx6FKns6",
  "key31": "5X9mMWab2UgT6sJBGWn9MxNAeSv58Fx1XfJGUgRPs95bptNNcy9neTuF6SP7LZyJneXZciHg7RyjuVDt3Q4qfaue",
  "key32": "sMc6GUvNmcHKazMhJycUZyx5dpvHDtE9RmvTN1gifndUkhNXAs7XWQjw2sqexwHEJSKRRNRSMsxhB7qRbHqgohX",
  "key33": "g7jsUameYsbEosBuTK2p7sYQV6NKkKFp3ZkeJRZ9spiUhLNSx4cfweQbz7uRqUEMAkUu6UGw9NpB8kgjAE9Wo6i",
  "key34": "2ggbBr9McRrgggQteaYaEgYrPb3GjGZUqMwitQCwZGnbwQUbb7FxyAvyBFbw5AWNNKfGsRtbaX4qHUZvXyjNh6pZ",
  "key35": "66n4pqeXpWZAFh7NXeH7eDzmqfhy6QPpoZxrNQ4qTJUQGuhewgczbiDxinw5TbcnZm9fA4fJCDGSKGm4gzbYtGs4",
  "key36": "EUCDXZHjw6ASxGb7jAGaT7zqxeqmm6hGDmqE5GZUGfABYzmKcL6gomB9BMcnmigo9uLKS81XZxryNNceXSfwnkB",
  "key37": "2KEatDRBktkeGY7q7iFJ4TqVHTxGz7H27zQsWXbDGtv3RFhyGfZucjrEnTDwjouK4d93fXdWvnEjjUctGKH9V2Zp",
  "key38": "3cGiQsNz4ppRACu5CEDVHAcC1euY5gHkEVATGavof8AyxUG6g7iNoXDNWSb9zeHGsB92Q5WcYNcmpmoKes7gq9hS",
  "key39": "UF2eJd9nm4yPRVRuyrbFCGEedhviUWuEtTyFF98ECQVnqjNNLmmSaDW6pqxiuWnmPYjJwZ6BDagkvdmUrMmQGVd",
  "key40": "RzH1Yi8vixNy4KURjV3RzKLvzHD8CCYnktpxKcVxNqgx1YHS3F4C1S5z5rU5PeoRgzhAFUEhqA1eU39fZwwygaM",
  "key41": "5sZWAzyFgWBbTfwmvxkVtR5y8xBVZ5rYbig7SsPG5b3o8gJKmeKZVEoUAv57ZJLQwVNNw7RgkcczqwBupQ2uXLBi",
  "key42": "d1p4aUhbL2EqjbY4uAWbQsRFN446BCbXXxa8yKsJKD3vd7CVnU4R2B67zmuVzvs83M3DYnrhpPHKZ7sJPFxFZ68",
  "key43": "2JRXXGD1CpkRgfrF2xaVVL21pc5ZM3vxvRSGn58E3d1Zz8XMaw9FLF1mZPRNXAMLpjHXXD1wkrpvG2w6omN991in",
  "key44": "3zH7P52PSTVp9WQGftD91J8emSAvYBGJ9g2AyGKyB9dtH5cvZinarqmR6Gx7YdPqBz2fa13bdE52ct9VQ8RH75Rr",
  "key45": "2udwYqvV8pjG1vtHTTDi6MTsnjJS1uMNAb9dg9sRRLxB7RHcmz6zE589p6B8uw52Dy6SKffmo2RVfidN2W8pQVjP",
  "key46": "4SsVQunZwBbY9y7ZfpK9tDFLPcYQQ7MzuAqUj1CSxnpJDNtReGnwYuZeZXxfyWStEnTjqQHwJHNoCXjN8jGPMp9K",
  "key47": "XbUDEi2wVyPed2zD7VLHw3ZJjyktPETA4gWi1B8gCh92jo9GUJWZzLkcYRHk9H367P6g9cu3LEJFEqwJ6AhZ3t6"
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
