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
    "4cvksNN9L9PXB7eRsk7s7jdAPyFfAaAbWTAPqnYKkNeokgUyASt7XLHXy383KAWHuEEK3VhnuzGijfmekUTV4DDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiXWW4japMVktkfJStpEvXyvvkqZXCt2C7TZM7wVPgcvfPivjPHU3YBPVVBo5qX3xmLPoeHqcTb2g6yYWD6QSFb",
  "key1": "u8umQRUn8yvFYsHt6zLFVPXr3M9kZp39uwkzyAetJKTUacQsdixdkR4cXtpFbrd1qtvBqX3j2qwPSpHNEAnkv6c",
  "key2": "TRb95rUQDFQfX4RyExrTTJdA4NdXvCro4ExA7pux4SPLr5s7dp9jHFrh7hci5a7uPZGL96WZyQyV1qRPDpaxPaY",
  "key3": "3CeAkVRLPmYAu9QRXqQRMQDnYDkLXmBVKVHk9rD6A5nJgrNGpEPnXNiyDwFcSd661XJHHjpMwcJGVDWNNrJUAtXX",
  "key4": "ZPhkudBw5og4Hd19QAxgVu73hVXD67xzgYr73WwApDEfPF5PusaK5v4CQn3VEHF8cn5ekWEV1Zq2udDSknSb3sD",
  "key5": "4eT8dUnh2D76eH9eyqniVQzwXotGZHGKyp3gSiU7LNhLAVTWQ4BpdVJ9HzXNuBHHKCL3prUHSbw1bowAFsAgvZSc",
  "key6": "4nuWM2kx6Wh2f2zgsmFZbRbSHijSjVgePMcfVgcQwVxDeMU9vvpitzu5dLLWVQGnAn6HecLyQheTydMhc8MLQE6m",
  "key7": "5qyGo4JhUDPDsiTpwyuGnE3BzMfhMKHCzEGNbKc1oGs4cGxt48Q8MdzLCptnB4VLWSguVjbwMzVpTFtUtkG473uV",
  "key8": "1qfjHjYUXAJYhuUWdue1H35r96gbUt7JUHnHoE4K9CRSFQXA1J1JQdZ6ouVFaXtY9tweqzVXyxLjCzpmNJWGjuJ",
  "key9": "4DwfsRwxuAXL1fAqzxqCvG1NkBXeKYjZE9hJfnf6gXnqmR7ZPBMaRUtjznKmUQWzgn41bsLuaDDF2HwEKoqrrsXK",
  "key10": "3QRE5nSaRBAW3Pt8HWfPFZk29p6SndjQGN9BKjc6YDaX4GCVsmXxg1i1mYkgsYoSiSR52BK3DGeAgaAgtYdWc2gk",
  "key11": "4SgfV5oR9wHDy6DLGi5TJtbA2WYgowZtsbFxH5rR4poa7PhzxHw4XGeFBm3EBEupCpHXY9nX2KEbrYTkkAYt7b6A",
  "key12": "3gvzb2bnUvEMEnZDH8T1bY14Z28YqgE31BsmQoV7Lx4LfuTkuZbz4oFQYiN5gZCpv36u7JFXe2yXdrrGmumonsPf",
  "key13": "4GqBwS5k61Sze5FDks55DLJxSjspZgBnDy8JZz7iGeESkdXhgqg7gGh1aD6y3cCGehMP993XefeGT4bTtTd1D1ck",
  "key14": "5ynK4KixENLNSbRTBhYSz98UDBrXT7A3o77HMxi5DajrcS8biK5Q5EUfGQFXtpecwyK6pSKqQiu4C5vzCivXdYTb",
  "key15": "5i67KQGkgs1ESofE2Foe7AK92EHgsrVSRYv49fk7cxqE5R3rHHceof98tZG5oq54VtEWMTAzEvNXkkqH2KRg4NGc",
  "key16": "AMhibmHc91vvL1LvRBh96om38B8NEWav8jTn9tARyW2TWLrfyqQQRxXjggSo2ZpjjsmrmrvFZqLZjHVhMbhZBEF",
  "key17": "26FYBTL7zPozgLfLiD7fTYMR619bKwjfBzQmui76YyPxQyfTc6CGu9qaUTMbrZXaj39zwzGkHn5u8LsjZFjvXNKG",
  "key18": "sKkcVERzYDdQgG2ozsBZQWavFmDiKbLETFh553koyjRi1kzUb5TkAoAHYbRqVQhQRR6Hi9ANanxKEA6RpK7oV4S",
  "key19": "2yfx9aMNw1UN3FhDaJjHi8DNeS1c8nxztWJEK9FPqf3HjVcpnDxsi86quer8rht946et6N2VYjP5RRSfDLVzLGLi",
  "key20": "5AZVCVso1Fy1bXNpwv9AzKAz9FxJ4z4C5QAqQYLRzvTb93tTFSpCv3awWjUdbXLf3ZLsiBCZYWbT4j7PCb3ykoWx",
  "key21": "2Gm394m4W9hLGSucvrKfrD2u7cKHMcNZV8LcuS2jKnRz5hxaEw5sF1qJxd7rChkxuRttkZ8SZCUG9CsebkLgegpF",
  "key22": "24uNzVfzZF4D18XCeQ2uzhUgq9zfCxzzAj57nFgEHEn4knSbZXkcS7C3nTai7obpRGpqHeA8ccG4ywDqBBuhWs2p",
  "key23": "62HqVKiDErAqmnWEkAvHLKQ4rkRjARTrh2hQ6eDuUaHYuPRWyQWmVUGpuiAyFHK6RkAyem7nhXZdYuSUFXoGswtC",
  "key24": "RyqbrgKK2kqV5z63EtZw8U9MroU93RyXbZbxBwJKtd4pwmYqVTvr4GJe7mV6KxKJqVs1oKmjkj1YmybMtvdNRnB",
  "key25": "5SGqGmZBng1VXEaTuGDnhVj5r8LSAmJBdaRoD2gEnvWMfB5eeGVaFrSgmnR5Lzj2haFbvChRqh8xNbuYfjCTVxdh",
  "key26": "51Sik9sZJDnDsYTNXdDy9WN9jkaE1isDhDVWWk5yVDrKmkADAsuqSs6QiqXnWmCHkeUr5c65bB8EDLuNoKAosjy7",
  "key27": "2WVGtf2kDS7iXSBi96zLpc2Ewoip1sVivyBj5xCp1C7eYz9yxyPsuPLk84FUm5yP5EN8TNrpCvs3FR31Qoec8dLJ",
  "key28": "3x9CKPNF9f6roD7SSZgeyXZpMgjHHgrTRwpgNWZJUGJxvv5Si9spkmN99Z3rnJgfBuJgeFkVLTzpKPAtK4xCwDXm",
  "key29": "3p357Stv3MBZ5BghXDw1YBu1HLkgS6aJUmFQB7tPG1zS4M7RJEugSH8bKeUAvqwUV9tjNbYsFZcsGamnDdr7B5MJ",
  "key30": "57hrMDLrPBy9CBnQrUXa9y18sJps4RwA2HepnExTJjMPjCS7xwef7kUcQLJ2fi42vQP1UwjnVTnhopAwbkgMJpSb",
  "key31": "4pagK4kHaEJYrhjAxNNjG2TX7uHo51q89zdssGdKPrTxqsdui5oR7fga2WRLrR9fQTB7pvr6GKZa56xEKqiu6ebJ",
  "key32": "3UKvcD1hRTSpRNe5Q44HJsqm76Goet9ZJK9HckxrRXSceTEeWQvUKS7owqr7TrSwiVKhWMZoJAeQHZmS5LVtmA7w",
  "key33": "2PyYuJAYUfmoN4NoZLjgP498hVxsh4ZFgQ9erqSwKbJ7tRqpYcJ54RpEnLs7GM5y6LCLzTWRvZz6cWqhthxPkTcF",
  "key34": "e85KLbFtEvFWnYx5JRorA5o1WvAp1BZNcjc1kjxEkuxF4934CDLhMpE1nNoSjxL8NEKUan6wxVEXT9bXmJFtBUL",
  "key35": "4FBEyQnyMSuBcsFzr3u2KAFeLoajtbp78TgLFz6aLt7E3YxvQiSFqg8cKcoGY3gqNHXfyChouxZ41d5xTEqmxCby",
  "key36": "2LdymbWDdREezteCj3sXoCRhPiM9aFKZ7LS3T4QSWhhfKDiYj3n5tTG2LENwHotVTQ7m9nNnSrCbMuZyc78q4SKP",
  "key37": "3mNnGx2uKTJTYmjpS3DhKDymJAmt4nHN3Ea1GVQQ3cdDnu369v9upEFkk4FkcDF5gf3Z9Gog8RueAiZQVjo6zCqT",
  "key38": "2qEx6QDViRgmeKMqBa9dRURdrp3JyHazK2NHFM6PAs6SKsYKxNBMUmmC9N9swNaSgPfj3MC5JusbYyr6BdLwCcAz",
  "key39": "5X27M22j17UHK4iRcPaf38Lq3jmcJ6rWX2y3VN424YnmH1KQsX6vq2oWhLBXGstim7xSDyypHHPdnfRUdJckpwKT",
  "key40": "5o88dvyWQ2A6bKi8AcnoRhDPmRe2LdydsVhgZWRrn9BPpPqLfXrJABZWCVpwwT8mzpMqupFo2gtk1goJmPiQ4KTX",
  "key41": "4dHAEwavAWW2pBrh3oKDHY6CsVsHSkhQPGNL1PewYFSvUpLUQLbJ2pEi7W4pfSw1ohhFDEsGSgGY9Rpsw3dHC3a2",
  "key42": "4jZtCRedvCCuz9oXDhQnB2sH7G3ZHSk8VCYabB7mn2QrPp3DhGBez2ZAPd2Di16bX3rosU3fmCrMhJNP1p6YkE4y",
  "key43": "4ywAUg8wWsuDsqXundA3ueBtbuKRDUi6qRhE7z52iPoADXroi2msivkDi44mxUYS6mBdRnJiUWeK4M33fhhoz2aQ"
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
