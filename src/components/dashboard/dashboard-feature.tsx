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
    "2K3yf2EaRXauxkHKZbHpC8UG2U4rgpeupFdiL7v64PoFLKfnpJH28FxyKA2ZyBncmDZeP8AVuPwbXwbo7GdzPGjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yD3Ukgay7ZAEfXZ7NZpqwYFEVoHksYBKD4mDNHrzoQjZ4nVeEGcssj5qWH6wTUA7udzMQzb363YK9c83FpTCBWx",
  "key1": "3DFvUsE1bHaNH7mZBDBTR4roVA7fa2KrEd62qVvWi6oNgBwbFEeciCZKBd2ntG5vrdz1fgTCy2haHLort9abnkrJ",
  "key2": "3hwNDQCBkKodkm7fFxiPTx86jYX1CuCMtvsFm59wsucHty3GnSnqJL4mVZrnPfmpGAT2QD4Uep4iNg7tmmHEgs6R",
  "key3": "22U6RXmjc3w31gxFz6a4cCrusvtYvDLp3rTySN7Tu7mCNu4qnL7KDsCHb5QhNpiexKF71zfBDgX3en1NmiFbyaAG",
  "key4": "2J9dQJcsgTKcjuN82hYsxNQQNfWNcL8Ai8j3zL2t8XFSBnnVSpN2nbBhyq5GnMujdqHsKmVqtn76w7znjdPJuvmK",
  "key5": "RfZ2p9ss1FR2u9j9KH72Jz3zvNn7AUwKMbAayRbC9oJQ5f55mZG2bvYWcv1UUHZFzwBy1iooJ1o4cFjJ6HeyMQn",
  "key6": "3ynVDqrQ24MiGNyHiNeCiY47LguZ1W1q1HqqEjUfbnZLUhrvFw2EQjA7qetzLtP8uNNbNjAbpioQEY6PY4WkWxzK",
  "key7": "U4kX132UZU1a3CM8abARvyD66T6sXw3BJP1Vc3fuhqnNRqP5Mu3t5jY41ZTveoKuFBTJxqJQRmKuXS5q8i8P24z",
  "key8": "4hVwqPrcgJK8VRNGGZUESbt4GrXGDtBw1E14isfCyW1denieVTvNGhPx5wamq4ERNrfGpJc2idjUcUkFVUB6Z89E",
  "key9": "KrqAmUQyM68T5G9qaZFoUGfVvS2pjtUJM8mz11L4xNsMqJFY7UmbvCnfUngkeHU39aZhtRk9Gu9YoTCCgQ3ZR4A",
  "key10": "2zucxKhTSzdzF1V7EXQudMAndrFBZPAVfC1kX9BSd3WghhxbBfDK9Q9NW2tCVEsEACxgFtZ1bHsf1GqjG7bUztHU",
  "key11": "2rvKAfqhv1AaDJu2QfCJSSbnqPvvwLVhxj8Qxkqr6XehqUQFm1Ttu1LeGRyHsFbM92Djw8exzg4jaF6oGYXpmJCH",
  "key12": "yxVR17X1asbdF9WdvCeCP7kANHdhm8u9apvv4pK35XTFNB134SwK5P53fF4bY6YB2ra64dsb4SoUqa1gQZBT38P",
  "key13": "vKH9HqvJjRtYYnpWd58t3KfuHQUibXTu3iybYNBwoQcw5SRseL5wytGJFsgVHPSVQyvDJeUphBFZNdM968bs4v9",
  "key14": "nXdqjSv6qiajc14RUcb1eKuZAvuZ9TXv5mt2EebboU3pRgCHhDubhALw75fTWb2CC7UMqMAHnmvnVmsapc35t7j",
  "key15": "3PChQytNTp3WTRvU3wQCobGaWJsq69sqz6yvLSW6XYkahrZbh7RzXNNyXT3haAKYUDCub1LxrEoDdoM1DrSHNvfk",
  "key16": "42fchAked4z16Vef4zDcm3Z4XvZj96oVsAoVMRhny88FJhTHSfj9w6Yj91MX7DsF6tDf2yXoJ5FLeaUGTAwajrNW",
  "key17": "2B9MvQr73pQa7o5qQ3sQLLajPmpWzKUHxDpkkujL4cXj5FWLncCfzwYZesBtjtQQctNqhQ2R7YenXfFcgDB6Z6Cy",
  "key18": "3iZ5sZWWRZossYtrpKWfV5DY9hJiPZHkLgZGyMXZdEkpcW5KMPxZwiih8a8WvzW5QRhWFWQ9JGh5ZzyLCMdgWieM",
  "key19": "44inrYQATfdYK5b58HPnbehunMQr8XEfJCTYSiS4rrSWqPJatMsUrFUh1ibDxG4jB32GPWaNyEzyckJg2aNGM1Mj",
  "key20": "5YRZj5ZNow2TC5anNS3eSWEhMSHndfNFHtXVhXDbpfpnMuMtCQYbW7XkhpWy9tEvYdobJPQKdxmN5pLo46cn6Ku8",
  "key21": "4RFTM9d1n6WMWwjtDzkQxVhF1CATDTZffDVyn2cR4YQuQnfzZ2yUD2JE5z27pdGtBdobh23sssXoqLrjKYLDiSHt",
  "key22": "5wjGGVHm7Ya2w3oGmvYcW6pf6svuPeuWRNbirtdad77wzbFDzascNRSTgUvtNoBqLxaUe7E1YopYg8Epgz4nr5yR",
  "key23": "iBQrZXoGM78KTVhuBSwESP2NqypJMEELSmEmYB9oxUia8MLa96mxVTcZ1aytVBj7T6gMnT6biaa8pFogtzKp38d",
  "key24": "xd77mqVUwQv5f3G6R6x6kzH6196G3VATzLiGU92mjcdrfpZ53QbGK3UYDcKAUKEkxVihfUHRqy9QZKeMmMipmsA",
  "key25": "2eVFT5goxzA8fiThYb8hrEmxTTxWB32AptFfdYNQw1rSGghzBAtfDhhWyE1ie9oS93m1eUTkAdJm4SCBMKxgpwET",
  "key26": "3coSPxfcP7DKaouYW1nM7sGPgNFa46EoFm1AfZFi36koXz5PZtyJFSHWsVno7GHVJfDmEXTzqh8fKaVMvfVdcvgZ",
  "key27": "5w1hcbacz4GiwjDV5HKbZfX1DjEoDhP41ZU4cEyf9pLsze7r8GT8enVtBAX8VNNe2QnaJ7W6F3wymFCp3rZGGFBT",
  "key28": "53E7fXzq71eHibjDrjpKernX8qbvk5pfPeuw7RKCNFmN4nVtjgNvzjXbASEJbN1qkzGJLz371GwFLcpQSa842LAY",
  "key29": "2QQQPJuKm8r6V8Gh8GrgH1P5SpFGufjME5hwcmbSxbXp3bP7FTGh1Cv2auDh8psJN2F4yjo6316eqLWKdX3yNuNM",
  "key30": "5ZsHhwV4CRE3yC4TcscKDxnKPk71ZaYTY3D2KXzokRw1Bc6YZTH7JRMfYeLxXRnQCLAsi2zBWcj55QDCYT91QMPM",
  "key31": "4PZNoSsJbBmbE9gzMDGmkkQKFKGkYSw8gJXj6yiupfzDJ7KW1SRqv8sauUUSqU158AV3GBfanhEWyDiTq2WKHXkw",
  "key32": "3XQGNFsxryCBgrptfTTQPm9CJjrS8UMB6W33r6o5NqCEpYciwwahte9xMnPNa7BXJJdm6oRNbVVnFhCi6HNQY5CX",
  "key33": "2NKTkuPE2uQLEkczjTtBH8qSBbEXtVvf8FAmFPRCzhym2j1VwBdqRRfXeeiFjfvLsNQxDPE3e8qwFtsSH443ZgNC",
  "key34": "33XCUHYS78cJNaS9mFQZxYqV5hyin7VLWSSPXmPwmxe5YHEZnrnzHk1UmeJAEYFZsRuBtpfnEbQjhsbbWxvDz28m",
  "key35": "22op2BGLfzqsNzxfW6W8AmMS6NTcLScGtGacFwvevDzSQySaXbTG3Q8h62n6AK2TY6L6k17jegW1a2SVDVHqr4kN"
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
