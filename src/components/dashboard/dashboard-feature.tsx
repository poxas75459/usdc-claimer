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
    "TdoAYnuaBux9omqDkZNSBVMsnhTkRX1uGZ4hMX4G22hKiNTKNaSMmy2ioBNTTXLBaqwYNPpjMbQTFvJ6VjtsLek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iACoKfUo5C9PhvVKDdpbgZ96WY9AYSg296uHK6RXKinBeVZiDkbJtgydQUH57aW3GuXRpyuPfoNzEPXqP1A3XXq",
  "key1": "4erdEWzwYsnicEiepfPZ1ZxweiaDBWXL1utNwQPR1zijQ3GhDpXTiXxWwFnvJGJoigxYtEVb29iynAiS6Si5BYLH",
  "key2": "3hTcHQH2CRS9gBHQMepjWdH9D4hJHsapVbSNkXjo2yEvUnrrGF99TvwYG8RmUjSv764PFPWd4d8raZVCcXqNKba5",
  "key3": "28dWXai3D8e5KzLCVgyooY4WdyU1bPXLaNMV9Kei5TtYHBH8MqbePghX364dhm1eTFY41ckqtuuwbzgzQqL5u3bB",
  "key4": "k1hoHeaeGyrMaZL1jEVqcpncUUbMwG9qfoE27bLUKCjAKTAPSKcZxxas31oSChQD2bzMQeT975xS7hNMTB9q7iX",
  "key5": "3vwBWgJztzgwV7h9E2HG342ArByuP8Lk3HYa5At473Nu15DGes9Rg2FqvieuKqVQmAAV2qvQvr4KchNDi49ryvDu",
  "key6": "3ByXQVsEmh13sYQU8zY2k7etcgtcGZoU15cCdN4jUhuyfHJoD4sw8xZxEFpnhBNQgwN4KGCw1zYkTgvYc387u8CH",
  "key7": "5SoqW2b6aRBgjRW7ZykXbwrtBHuNZPeXUanXNg2BcKNrpo1YehmTGhmHangRGMexeLJn8VuKX7EKiSW4MiNvG1TP",
  "key8": "2zppgpbcA2tyB7TPB93gkSKLPhxswXuNbyFor5ZkuFxyLizedoVKmz5zMb5QstipNBLSrwD9TNqXs1a3AXCZzvkU",
  "key9": "4G23xVvcsqSDNaqGc27FVQQqKTVEFVKgJiqooBmb5sHQKE57KVgBQRZMgoAZ5YqjzhVHZACWaHS1duFj3tVMKff6",
  "key10": "5TJKepeitxDxvRDyc4MhjGeW51eNjmDPy4e7aGs5461LkHvaZonaXZL6zfr4tsaNrBqqrfpprnRioTzSSvCZgWEy",
  "key11": "633i4mStn3rwrsjSzmGpJRRZzwFgX9hXHqWFTeia5gDVP5dZ9zmhjBDrC8MCYYTshs7uASXxAY3tePb9WNF3CwuJ",
  "key12": "M6EEWGvzLifRbnVVXfcd5UuYRhMZQdGNho5HZV1UuDxJwS14u6w16FnqQSAaqg5QkYyeXcgvhwPN5PNBVNCNeP1",
  "key13": "4sXMx2Q3WPA1Nxo2LtBYqWN2NgjMi2FS9nZfz21bUc2efU4AiPRUwfzQxTmsUbsDqTuDaXoe5bspEcv7aUToyGkD",
  "key14": "4TuWetmDZqiHABaq9R7hBscahB1PR1zJBftLAd48hp4jm3s3htHiGWNMPAewSEMfGXxVm6YUgroukNxmpE6vW3ie",
  "key15": "1J2dNRYdDxyuDFX8PqLBtPMZtuYMaXseu1cdWHgJWV2qhbf5Kxz7BjLGpYJgnbvxBxX6vY3Cifh2EgeckUUSuxS",
  "key16": "4PBCpjKMufFnBh2ZF5eYsfTKXpxv1ytM2KFSTDZDK6SBMjvy4xehA86bBsnY2Saps6u35AaCk7UXCeFYwyBvA6XG",
  "key17": "Nf7TRcscRKZtZc9ZkNrqDdP5SAVkA26N7dgSWmZoiNk6UdNruq9Z3vnkkjcYK8rarBBb6GaAnXkubGacovRgyJC",
  "key18": "3dEK7GdwiZodn8jDnc7aMy6mfStoZ29eEEBeVNnzRdgV4ArALNfogtP6Rxf4hdg34BrL19edDQpSzboYdev91kDB",
  "key19": "5CCCFppHyyrQQ6dVZJxsGfjy2X6rThkpcJJqxA6RbTNoReLaWGyYPswNqY12PvnCt18f14yM4UC6ovPTn9LyZRch",
  "key20": "2omtGXQ5uCT1THdjmedwxGCz8ZP7MfDDwoQkt5cszqJoG8gRUeScoxRkZtLDuSCg3EMTBsr2yS8MDRC7eBXMEach",
  "key21": "34GFyqqVGBjyKd46dt9DQnm5m2ucikN5Eb3u2LVRZHKLyNdCURWd3mPWCCG5TpuzoSejHfx1e4842aDzq5b6SGfp",
  "key22": "qv81PK7MucPEm8L9d7x5Ln1VMUivJ5Y9HgYrPzLn2M7XVghUGm37rpSZA1ucKK4xxyEbJovJ1BA2sCyQuefRJQK",
  "key23": "2Hd4Cm8QRXmGz3Nnvoi2YKWhtK5JwZbFgCsjrtRDtk5BAH1EJQ9gZCUn5K523z5DcXQyxXMHZiGD9s6cBaw5bnD3",
  "key24": "3Mcrodc6sXbSYoPF37Ev3dPm6nSSyfQW4816YB41gxFsQib7R5bznKQS2RxrALK518Vz5Nu3tndCv2gfHhHk4zr3",
  "key25": "TKohsThsARAscUStVPwTq7Kt87HYMqQ4Fnb7f5FgGCo1P6b5kHkYW34rG65bEtt7wjuV7HznzUY43hCvTqBAW1F",
  "key26": "4MgmYntKV9to1x7SspocimBmpehvGh6YGRGDP1PjhAeqZgF8EK8D94yPnphMqnfrn93ES6N1QSo7r9ddMtvDmaGJ",
  "key27": "484zCPsu4VZZWT2vyAx6GbcfjKC6VNSSeNbbPvmQTn1ZbzR2ZqfzQtwkLSfK2z1S7nM1H4bFn58TWqGQE5trEHhw",
  "key28": "2fwt6TQKR5yXG2zVuaLoyCZ2RkEuc3w7rncbPKAtfJ86fMndxgTtczVMMu4qLGrgSdMikVioK1bRNy6YbbtKZ7Kv",
  "key29": "3WM58fmcNn3hccSYPM8VjjL1XHpNuAWdYFCfuUUQJTvxX5skvfP6g4gSWkgXK36LB3AnxukVZkqSNVgoNAhDjCDF",
  "key30": "3H5yGkZBpcjLdCscJqe6jCN1mjaDaNYmYxaezcctXEh23cinQQhstaS5DVAqvyrnQ7YwyYevoXaZ8WaUJWAjVdK6",
  "key31": "5drAT78UjUxWvSB2t3bKwMUGf1QE7JW1kSxbfGfXHZjdffpJHuhrhYpfubcxhetK5ZJFx766e7m44EMPVfT6egTu",
  "key32": "3rqJGHfL7MdkN2mV4xoumoXQEyw9wnAh2J3JJLP9hPy4rYqvGz1EYadAcdky3vMrCSMSajYBih4mf9qejc4nc4Sb",
  "key33": "2eNj8zQ737j7SmmuraesYkNbMFF92MsWxXe5g3NdhVub7Cb3vw7WHkek9UHz5EhQSwZN7RicpNJB3gzXPvDCMJaB",
  "key34": "32dGkkiHGTtP8HVCdK9kepofhi9tB4Q3Ykwybd8d2kDRc6z4TAuwzV4h7kJorhSbTau2YEU2pLix8UzmgNw9zErB"
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
