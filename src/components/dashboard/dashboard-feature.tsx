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
    "3o9R4JGkNUyYVe5Z1xSokDTrJHti7QYYUWdJ9AYY4PRJjQRJdJcPstt9e54KXRGAH1NFdzpMi3ufSLp48drmThZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1zcvWnFVnGmH4sLDCpLhEEyghEUTKdjny32iZHMPpg3zatUPb7w1gQmoUkQowTXM5hSUp5soH2aSgYvDr2LD7L",
  "key1": "5S2HjcKUbEboRspixDWsNVLz7Az98tq84s19xC7kSpKu4Q8i2vZ2QQkpgCm2f2TVLq11KsCjkRKntiDcGFxcgkhZ",
  "key2": "3NPFHPnGnzKn7XtKzQUcYAnkTxvgMDmdefruPfF1MHqgZVTYfgZcmdZx1EZKWbSZkMboyBju2SXRCzHToYKdiBph",
  "key3": "xcSpxQWnN82BqFV42AW1XUubDhX6UVgwYRBCbHHzqfcfLhG1JzrGhVSCEpqzQXYE8Q25WarebZx69Fr3UP81qQm",
  "key4": "64rZB14iJmSrq2TtKULh1yUXArfjpUjUaGLji2wSnnve9t9tQeFBu1rgyVZG84Ge5umJWukkjmPVVetSgqETYrBj",
  "key5": "5t9CiKrcwP3iHSTdU5c5Ndmojp793py5ueKxMeTAwt2ghXFJw6A4xEjX98iJCwVhHVmHd7YjSDSUFvv7UUTXC46P",
  "key6": "HvucVFwDhaJ88iGyfdB249MFS7XKgPhUDc8wy1qQb1XFxkLZmEkMV89nVYWXHycsmbqN79Nb37UbSU7rWj2BorU",
  "key7": "53bLN6mLEdVzCKE5q6CRWRWAVTZGnUudR5jv9kSjpoZ6ymHqn9tWyr5Hd1JkaTPGndj2JaaW34x3ETPgLMLZV728",
  "key8": "4BcTjyJzJVdbV343r4wDuHkiN8UHstrXT1W8j7H5PQAnwXzTGrZtKuGcFdytgotS9neaK3TetY5wh2UqJGGoF6Dp",
  "key9": "3aYeUjQzYnS5pqK1ETVr4GGrQMby95oWvx9fFTPLuxh729Xn63nmBHFk2exrrFDDiqrMZUho19cypcZL4ZPhMKPs",
  "key10": "46Sb7BSCup3ngt3wM4T6WNMeArD5EyB6XuoWUhqN5u6VLC86jwue9XbdiqBKZa1EkLbvdrzacf7NbEVh7NxDEA6d",
  "key11": "52xM3raC3mjSeYWRBGDTtRK4bEQSH1QpS687kA7NRNcQA6bKGyFHh84BPA5heQv9reQjYKo4YUiodf53mLBGLrt9",
  "key12": "4opvR2gupd272q1aZJLQTpQaww1KaTbqt6j9qvnYwRMycEvcwrAR2DSX2EmjcDPLwM54Umc87YEDjp3KLrARRPqY",
  "key13": "3Sk2uKwshqLyuF3Fy31ekdnaivu91tfTXa7La2TBApSi1M7YRspFGo4GEj8Sb8WWrcA3NeTSxg3jsKpnCGfQ3ce5",
  "key14": "3PPc7WD2xwmaGsVQJ7viuBYVpMcmWsBEgN6Unfn3GAsFn3F18wSyEhPohVCBGvf8XwwKjZUeSLdnfe7qbL2iqFkG",
  "key15": "4ELPZMb5zjUF9Rj4HcFqDxeihrcj1A13uESmkQ4vCseVwJ61DmkrjtmEwu4ZX7UgJs2fZHqLDztasFATTsuUCuwU",
  "key16": "2NaTY8eVmFGXxGqGbyadnxjGyKvzwtPhfxyUSSGRG1NaMzmpnWjQa2fGKT3Z65ix4gPHjv9ACJ2VtNDD7FRnFqni",
  "key17": "48gX2KXQx6Tp9hH3kjpuUWkPJGuZdQ17wDfoiHRH7vuAcgLcvEuDwfzFVjfAvUEuiAdyFaxNjhWJ3ZvcGbZgb9pY",
  "key18": "5gGhSiXtywHTuN5tbTaRe5H9DJ1ZnE6Kp8CDR3Rkgop6hdgrafqCXaNNtE5MZtX2PV8dCDGfRSzzh6yz13YMAAbu",
  "key19": "z3xh1dDLj7EYfYGuXTuoVE7AfoJbjDvZJT46TCCHgqkAgRC1iFiC6JWQEmBgNLthY5eUAFnBcDE6q52VuS8mxXQ",
  "key20": "54kSMvGMwBqy3UyYgFxoM4VAyN8iVwCGzSTS6fCVVG4ANE8awhRNX69mgVKKf6C1DK3DdMaJy1GDGBeC2gDUyARY",
  "key21": "2MvFxUFhgJGBdpJDcVBVob7G155jRW9G7Y1nHVFN1nisu4hC9QUoEsMSvqUkDtZssP6oXwdwfvThFeyEaWA9TCcN",
  "key22": "58wjWhdS57y4CikYZbsaYRhcAqfe1HR7HsazFTWXYEedVtyk6zPSbRYWUXdxWcu6MUcznevxz3sLckVmMJzdaVp5",
  "key23": "4eUkyNRsNi5yHcpTnXLTkzCVtUzBduucqjbBJaGy9iQiwT5n3MTmGgBibQQBGSthiYdXqD8TaVU5QvCSzAk9k4Mw",
  "key24": "RvUyy71ujAadCWwhpzwp2rZd6jSjNes7A2LuQuJ5DRCg8jz54zebH5j3pRdHKhmwwVMPYGvhbvLkHmk8UfvHsra",
  "key25": "ZaE7afFG4Cap9v8RXDSRMEekxFvfPugBqYbormmtVjxZKWAB7px9fnRWU4c4juoab85mGMct9RK5gLpipRWacqa",
  "key26": "4zE7ztgvHRreS9bMbnvpTR3b6RyrwCB1GZsjkXBn9PAK3zbiWUT32EWzZV9dcCATRpcvxKNmT5wAgfHRqmRkSMmm",
  "key27": "1m7PL6rFnUVzxuJtQEE1bHFZdNbj8xWNqkARjSxfN8kpvr7hvJ24oExHVeXZHixSCBUPZzAKBqdhWc7AdmaCgQE",
  "key28": "3DfFwmvBkxSXtFwAhLGuHjTACuMfUdv4paVrGdTYoE1a6PQL233B413pRGmRqFRbj5i5xLoazF94nFQirafFJj5P",
  "key29": "5Fp46qDC8tBk5mPhQZbVPvKgPyjfzyDbZrpfviSpjj7vHYmayVtJBoP6w4r5rxispArrHVPfuNVyotf1i3fWi5Qj",
  "key30": "XPXzCwBVMF6gG7zqhiatWHu7VnUQvHBtjsfG5ko6kTGexrwrcKGps3LTutvMnUJt6Bbw7EcmBT3ry9zE39u8M4E",
  "key31": "3v2zwVQK5cGPhLzhYg3iCBZje2KN3hsMevLf1g2W6Aws18YWZ6tGVZTujdheYbTDx49eYHyG71CuwM7RnuC48hse",
  "key32": "yJVkedCR2qKSURG4jx8GpjN7pGLiSbvBDzFmSMdrDNtvy3myuxRP8DV7YaFkfMKreAH9wR9ETJR6tbapzcvzQds",
  "key33": "4rEUp3uC8kKLfJznZbUuVSaNTPSBQ1ERCdYXNTCVkz5dTdhx55WYC2qZM8QxKzhvQMBDfYX1h8cqUKhaY47YviZh",
  "key34": "fPtbs1datCMCVPeQztwbRJvmm2w8ztYRhXE16UMw7VJ5ELjvorpH5qVMWNjku6JnHWSmfe6cEv3CAYH7ev1w7sr",
  "key35": "4ArMr8c1VLNBawztF6UnoxR321zALqPMwakGvTsnKAZVqCKXEgweXu53yLK5ZCVBo6x4oTPkGd8EbJMyXZyMYGGo",
  "key36": "5G3Ts8J3HVGSCsjroXkV2FVEGooxJ8tQXUJNP8iZLEQwRFoYF77kx8WYBwC7Jiwe9cVeiLaNYL7tHmEtvBwnkDY7",
  "key37": "VjrTTogdt678HzGAaHvo6PoXNpbpYxyLQjqZUpF6UxhqzKTpzowzSS9UXj3GM26447RnVbwUncJxDDn8RPmMqrE",
  "key38": "5wzcbNXUv7vdiZeJXtRb1px7uXdhNDajcg9ssA7TEEAU1cTHQ98aiAcrbWdBh7pFGrhoLPJ6wfU1HSGGf346yqpv",
  "key39": "2cGsQxCERMkkfGesSU26Zs6WqKeeA1kacKguh1t4xnMHiiXCUgLUjCdc67kX2FPFPLh1YPh8mkFZsMP8ftbKbjjp",
  "key40": "3tnpUxeitg1AvGzWgmsnDCNdCauaMzzrZXXphtwBjmZN5QjvQvEx845SV3i6XzSPCip5TRUj7ku218jSRbRZFKhV",
  "key41": "5ggnM1UJZ7cRXcwkjPtQvSwJM6N734TxKTvwa57PctdndHhJ4JVEDjC1rfCURaUWukVENtAunW2LBhTpuKLZtAmm",
  "key42": "nCZx4NZQc4TpBANvRkgt1qekTYSPB6vUoUmuyQQofYGqAjrwyCGVtJSgYYEVD4zcTvs8zVf6WZqVNCbFX36xUo6",
  "key43": "eB88AVKUjwUHkfYUuMLWWhqRnooQ8gWvQLsG1mgFESoSsk2oQmoUqjjQw9EmcQJ7Xqvnmipha65ZA31tQGsybSz",
  "key44": "3pQqorxY1grozyaRwFBsHZxGg55Tmqg5zLpiQYhPsRPt9NQvezSxCzW4yQ3ncoBybjeQv8WjB32aWP4cvekci2kb"
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
