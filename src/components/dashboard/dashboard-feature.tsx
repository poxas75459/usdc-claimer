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
    "4K4SbrLmiXmcghTHT1B7jT3bKzSbDkVJmYgiPXcpW7XU9xR2tgzh1zHm5H6UkgzHsdsYdb13DeiXmNySg39JwQLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1xPKiSFA81dUMbqDHXFosMRsaW786idD6KQW7Z9r4ncR8Jd4parsoMETvR4Bwu6kTPGRxaYuUxqaBh7UA4yT4G",
  "key1": "ThdRUNY3nhnxyShGKMhAwAvsv1fvmhwg4hWcJP9HfWguCNUUDxxjLkmsTWGAG5KQGm1ztzShdYrjXdtcZKjNERt",
  "key2": "UpXb6Vhc7qZCNXBDU7HFPCMP6Aziwm3p1ey5L2NT1S6yxoNELD86qqfnSgq4en1ZxC5Nefigcr7cB232oKmrXpb",
  "key3": "2wiswik837KvzAndakaYW3cWmS57rpxVYZoaGaV4r13gYBotbNDgjz6qsYVs93Sjg2mTHTrgnN2Jwp3ARsCKhUrD",
  "key4": "DJtzxAsYznm6Ru4ZW7zp8AbaGbP32e5sgKNaEn4CBYvkC6BX8HPGjefN6M8v8jieq4uUY2sQFXAc2KegVBX7Qg3",
  "key5": "4oXkoZzZ5nfPUEVjMzFke5rBnKEWijDVeYjtDT4cxFMGTz8qka83ScE7oZwrDcCWNa9mPH6ENKimCFDHGRCa1Xkn",
  "key6": "36PdJ5qeudHLtptuNTe7cWYuqtmv368Rig4nE8Ajep7w7j449yj52bwujmw1fTxefcvt1C6BMYVot5Cuy9cYhpta",
  "key7": "25yPtJMqLLu75K441rX42WGgz83yitCs3RLkNB13ujM9XRgs3CeZRtafnXkaGi9Et3okF2tw2LA5DSLF4zVDkmnq",
  "key8": "4y4SgEVe8yvSSto5AZitnWzZkxqmkZwGmeKcSWw2RPYQkTtyXaKP12sjKM6WM7HYdDYaWaRHFdEQoksrGHWdGRwK",
  "key9": "42FEy43tTfkZYBaQ7FePgNyJ6wtqWP2GuWNb9QvdqoLDpSQduEE7erCTYNSL7ZZVb2RHKZGB3yEmHfXgJXbiq7gH",
  "key10": "55ferWr8AZc2yDRVxfP9tUh6B4NuCutbF4DUFafAXEhLNpDTDtqTzdVmLZCnitgw1aQxWbDWLYtGfLtHYJFeho1q",
  "key11": "31d6Tdv8LCDyR3FEQfiHzxFq3uMquyxvYFA5V1pFe2utwjMW2bfAJFcweeLjtrJ7MdSD6Jrnu5tzM1C5EPposvfV",
  "key12": "3UE5LrwpZpMbBQnNqnmevNUqFUsVP76ZVGjZqT2i1AeKZ5XrTtQj1gewRrAM4mUAdnyS3pSFsg9XN5XCEVuP5VoU",
  "key13": "2adbVkjcSZay38vz9q2Sn2DzeM1aDt3xZwsZZoC4kByhVcqH7VozGRwuEcrEJBJshzSTCu91G5tMDW8rDZLEGn3u",
  "key14": "smX7reJUYFe34eJgyQGwz33CjGikHvcnZVbm2EKLnJn9wGj56ctwp8r1HFM7FWLwzF8EwUJFqKJaH4i7nsPaHKm",
  "key15": "2XgsHVLco7VPtAhEimck4aC2pVEbGRgDtzWSmWeeUzgRUQf8YqyTeiKK9tJYUtLDVL5ZkkxHesxWqhBU1fh5hqcM",
  "key16": "WLRLrenTQ7NWRGMVjJLywPgoPudP9eeidLVq4PnugJsGeAPr23yRi3RvwJp9FhM8EAcmGKYRfH2dd1v6RJDZCum",
  "key17": "dbgJDpTa7C2t8AxiBCpTuTmogyt8EJc8a3dBT7HR4Nxj2yXu5cZbbX8h5YpAHetxFoeC1hZfBy3V5YoRrm8Redf",
  "key18": "5ZmUKCdUuvLL6rs7QfTLpiAawKT3tCcSPbRgS21B3pTP9KLgPPygJzan23W43P1869BCLKkm5Z6G59JZEm8WMFXV",
  "key19": "53QnLjwRj2vXLhzbYMj56H6mWyGa5ybNx56CW76Pa1KXGBq4oxR6Eec1Hf6CJ4Umokz6u3ECmZp1a6zB5aos5Ebc",
  "key20": "4YiVDukhkeZJaErVc43fcmzNW2ef5rZMeEuFNSKGMgEsT3AsZs5UA8V8TWNFCGwS28PQkuXLC8mVwJqhzoHcXjgg",
  "key21": "5X7iZD2ncdDvVup316qShiWqshcWD7GtoXfuJdPFNijFczPyA4CDCuf8ijxJsVAZbyRyfYbzDwpq6x1rSGP8n8tE",
  "key22": "299BQBixA88FrdgmMVJipgdx7QeQo2EqeWNHEpafB1NQUSAry7QDMEeQ7TLFshtxSNidiRkcFJz2qtdX3C1aXVv8",
  "key23": "PviLMFps4buJEYwxfze6J8WX3hcoYGXxfiD4c6HwCnybpNy4XH5VXt3CUR49CVtuWjtXkz45b71daPq3WFusarv",
  "key24": "486u8TZon51GUCN2PhsvyrVVVGrdk15RfwWCyUbzFGJ3vEtbQUsKs1Erd1QyYbz2qtJWWRdYtEZpsVJGn5tQjBs6",
  "key25": "3VNu4YBrZ7WYnKLRyqTe1Te4f4rbQdwWVM1NAHpbWtUNqSQ7b2TUxwTRKm7ba2LZMbL3iSfmZWwW5rqj9BkmRLJK",
  "key26": "45iHopKyuTCnWZW54zxDYnZQNAhrsVSBy6ACL14KeP7yXuC5f4ZuUTqvnGKemyvrMEXwZttPPs6T4ZG5K1Zbd3j3",
  "key27": "3TX3Wp1QLwRHp5cVP1v6TvGNARnq6VE2pP1AtErAUNVwMTAfwtXQ3dmyG14UGwtpe6LqY16usgH78HzYjX7wjPJd",
  "key28": "3jAFAQN8xN5nsqvmKE4cpYtC3jRKaU4fHvd28ddZM313R4xYaDMq6e7eyBSNnqWcyqWh7nC1yxY6xiPzgSPCFg1Q",
  "key29": "3G2AGxvr4q3Gvwj8oCrFpaGes627PWM8QzBuc4AF8MjpSJpZ8yP4HjtkAuLAsyLZSom3vdqpP7myFiZq537wZv84",
  "key30": "4HWnX73f3gwWJb9F7Ur71SxhAMzu3bHag2CQWVteFBp5R8WuMQ3SRAWqtG87B2aEUVLgNFzaorSP8bW5DKmqcdxR",
  "key31": "4Upyvw3wWUkmLzExm1f1YPARuhEsHrS7JZ5oHoqNZGcjwMfRMrtEbJ7yxn6LxZSnmzBp98j3YyUcXqzhnbmVeMHS",
  "key32": "45GtxRXvCbhevAZBYhh1a7wwEwbJum3HF19Ynth5c1B3uiwipiokhYKM6LC3bWvTCEByYyZrZ3uXQ9KvVfB7o9EF",
  "key33": "5QEGmFEJkvDEoomU26CmobDMiecytDGpikB1zQVBbkixraPMDmptukmpqwpBfQtXrXe5KJq8ndcdpbzTFGWqyZAK",
  "key34": "5Q1ncNoJRXJUtUn1kDapEaiQzqAr3mWaughP5tH3uJWEdJcrExXFHQ7Y3cnSkqi8MuvRSfXvphxEtqwPjC3YFCb9",
  "key35": "azPQDMvwEJL2dFScZ8rCe86JvJb4bChVgWf8jwNTspXoXUGCjuPtMj1dprvJmrFqcrBacXyPZ4wb14ANHjDFrfb",
  "key36": "2TNUE8dEtxmkUpLQtEZz4qLNEPCz1bUwHsY1CLCRZvdyehe3LikfDrkkd1EpW72a1RwzzXLeAy1feTfm2BTH9iLZ"
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
