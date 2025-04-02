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
    "CitizctDczKBU4ZKbLEmzjUHHWfjyBA22bV636XtFsuwDw8WvNoddCxcfwzFrpp2GLTwnRocWCdt7Fg6v3MsNF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UfQvM4BrJMQfMkULjaZeV7M7qHfRTj8dMoanqBZKPEDhEx448cZCrdhHFAqhhh3R1s9VZydp7518MwfWctYiWH",
  "key1": "5uxhtUpyhpAfw5myuEzGYpu73QVeHgkkjr27vAZKsUAJPb3MQCzSQBzKE273VZCmzx3kCgDPYqAWJwNdDVdgdbpb",
  "key2": "5TL7prsaAVHZLeGE3PDVHAHa2B5KEKacPyVbxo3ivgmRFChVn5B5NrALGtsGFUF99RxuDL63PkhEoXccwr7k8tvb",
  "key3": "whtrg9TmVbHf5RwRJRn3EgJqsUj4KcDSDB8Nrj7CJpTvqobu9z4nba5SeJPaZ6cvUCrBTB1vpMuA9FydLZQcHe8",
  "key4": "2XRhqhNydS9zCQQ5B7JmabqphRn8C58wcX6Lon7yXJEhqhF6WHZfht6TWQMcRBry9aJbRiRrF7X8PqwnWgeqgDbQ",
  "key5": "17UGWb3UBpxg7Y8WovmK9ToTADyCurStmJ4jue6Cmi4HrMoR6LSpsDUaLkF82qRaFFHkyTdAJakZCh4LYCdZxSi",
  "key6": "2xUdMuKL41cpu6j195PYG17CjFwcUCQLxQQXt4kdPY3f5Xd8CEY2Bz7AhzGFAdnYXY7ZdXtCu2Cox6cKN51M8chU",
  "key7": "4rak9wMmALF2gY77XR6ds4yRb8Hcs1g2EKwUe6QZnWxXfsXGacF9Pvwn3D4Xw4YrqNH6ZNg2eBGqYd7MZGKMdKzK",
  "key8": "5wrVZr35UfoFhmhnrRTRmhrFKyqjB4RCZkVQv2YTJ41SMRKydF7HGFhL7P9RhKSYLyymtE5ppPPky4jes5PBCMqg",
  "key9": "3jSYY2hx4qUXLCLeTCqjT6oZgB1tsTe4NxmPbRAQUXY4rjqRiaJWseZaskSvfLdVhpy3exsBLtksT9RTd7KJYUjX",
  "key10": "4XhyhbSp24cgnci1fsrL97ATkuReHEi92Lv1qJaFAPrCWL6PGueSa6B6wWH2gf2xy3EAbah16ZTGKamocQQkqPR9",
  "key11": "2WUFZbJsP5eQkBj4GRPZkgEGtXXb5WrL6bouV6kUbpXjaYJivu9XUN7ondFD5xQcYC2yhDWqrusB7ycfAzivUyyb",
  "key12": "4KtL2FJVKuvN8RTrmYsTpfZ2r5XEvDpQXpN9JbfN4R8x9Bw3wawe6YLAGJ4j5g3cCNYEZ14Mubt7qsHPYS4veunG",
  "key13": "2gcRFRX8yyypv73daoro3doSnPjsRKypMiSU2TrRjtQL5SC4ekf3mCGFsYAUpt6CTVD5sygEoi5WY3ENGUPnxyBe",
  "key14": "53UfRpSEhxSybttd4Ha2E6kw8k2Ph9yGpNnRn8TpTJMiMTNKJx4Z4LKh1aBkBtb2rFKb2CzKYrcy9RqrjfFAEM5U",
  "key15": "oy1WjEGVUadZCL717Ta9MhApfHtzrv7dYSq6hJLxKRn7zhSo8qYPuacqictPKoDDK3dGv2FjQJ5uXqnosLPXnGp",
  "key16": "3xBNZsDiaXDrs6DJHyFqnaL6jh7brYFJDC4Z6HSYA1BZUH28yYvKbyYpWr8eQyr2xLGRq3u4jyuDncS1d8qCzWVn",
  "key17": "TgaQV1sPT3yUQcwEkwhrBHFcKNn5LNbD2sbBHJsPjwKfias8YiwzwZJqJYAvwJirZyEEThpumtsLwon6hp11hzm",
  "key18": "MQQjZpFbaD5jXJKCVtN3SW3d1jbMAiX3V5wV7CPcChwigbf1dKKqYVF7S4K6DENfdxqmVTMa4TDiDUg3H963NfR",
  "key19": "2ZDxAo7WYEBJ8mCsa9ubvQXR1hM2H3Z5qSRkDtDQCXns1uuWBBRjotuEeHS9eZxXTxsugr51PJuRxtmkvrMWVnsa",
  "key20": "44U7cybwuQm6f7kcyhtzTNGMFFGa7r5hx6WtCR9FS5BwdnrXwPkeQVitVzxeLTQENaM2vXb3qXQEfgqz6Cr5xztx",
  "key21": "4Mrvtgwux4r6HcYsdL9fiuAwvcKyQYbJEfCRYsPBVtqgH5zSAUsGnkDJpxYXfBNrsq94Q9mLG7pJyhZS5qjuoBYy",
  "key22": "5U2rca2ihu86rSSHcjDq47wGzfnirSa3SYQgRPH3USDCTskzKh4QfPVmwFAviyzYhZw2MN1JQ16CE6Usar76Ca1Z",
  "key23": "5hrcw7WxjR12SUYo32dxDjpXGhiG9HqDhCVpk5z692MAbrjrbjihyG7vGEwqf9ZMcrUYeQbXK27j6GRPsr88fWF1",
  "key24": "4NhcUM5XuTfs8YConyvstkiZgWGPRpovuewwfDkpPebNHgo9AUqqv7CtXBfXfM8FMVeh5TcwRzQW83oLRv8BCwBF",
  "key25": "4eNzqXJyXWPuvHrpkUbHRmAqX1BrEGe9Tde5xE7GaAcJoWnLVh5qDmKSoAdWYSTmzJsfQ27DFD4HLspuKEksbKPY",
  "key26": "VrfrcShCV5TB8TEy6i9oihHDq6XrXV4EAaW8A7RCbiKLsQAnp5cyuwnCoGnwAW83P7soZEwHPZ8MXiroTXoETPP",
  "key27": "42gwERMsq1szxZJ8vSP5BChMc87n9fLAWL98ymCUhSCXAqde9vhhkZ8Gwz8UUziFvJLcC2gQuz1sHVD26VF6K34D",
  "key28": "54H4RYw9DeVrNzKmpfUXNLRMxxE233mFyPK8D4CwQJSpoXqwd56Pjk9Y3EZ9wxgapxo87yKjxv8ZKEVViYbiUeNU",
  "key29": "25f6XfGKC3MARZGWr64jiAbnqQCmRbvo9syf67PWXyqMTyGYAc7X4FZvrSyS6QzgJmdHTJGfa4ZwqmmDHfFu3HGc",
  "key30": "SXyipBG1QhFM9RiFL8SdbkbW2r6Hq7T9Sb4imN19uWLbkuz9KW4BfN21dyYJd3ai6XamNscKhfR2bCvoJsaj3eX",
  "key31": "37xJYiJJxxuHmCJTLEpPY3xDN5CP67vFTw4TyU1DkVr65HMiHKPoJJ3RFdnhMxSzZ2NZVpZdiFqzB9fsTWMMqie3",
  "key32": "4NsjLwDWufneV63dZd4VSDHhYwkCCMqNS4umyuQCBd3FYb2F6cxdSpL9jhscUVgJiSHZRrSNaEDQ7Md3JtrwiAor",
  "key33": "5QwakvuMwSucgjyUnCjzAt29z6yyhpZq8YWxZgBkxCzEpccmAxAWLvMXRiqsHnTm3mq5FHmJQp6B38B4XRbZHxHj",
  "key34": "2NDeMPh9iDMAq9Ps5Zvyj5gKfLi8nQQVkwkYJ7KUkWEUFCUEeps66XuZtLPq69SQ9ovXux9jCKgAkJne54wRLhU6",
  "key35": "5NEQCz1mfPh6tKFVqdkdnXFb8aN2a2cCbxRt38tqiarUJGK7nH2KPmJP8a9o8bGVQ2rt3fEq3e7ER5VtddYQR6Vh",
  "key36": "2LuRTiZGkrthT8opQ6tsnKFtqwqVT8rgSyEnz3ykHDz6PHkeuuKSjkcaEVKWZhtefUUqMaxPE7N4TzVgU9GnvTqP",
  "key37": "5J7Ystou2y952Z4gcfQtZk2VfeTjTfsYePXoVPP7gkjrA8sfzKLDaZ96rJr1VQCTfhoCzhAtjatPrz3v8bGMf3GF",
  "key38": "2FhXeVwiSLy72qFXDTK6xnbajP8ACHBRbd7PVXNpf1VpDmsTPXUubvVbmFf9U6JHHMmLF1E54gFkoGciLYPZqMuV"
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
