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
    "ZM3M2WSgGHFqGdCWKb5XKMQXNZiJZmh96tog8e2RpqnXzPNn129PiZmuRtwkJXjie22SXAcCagtY6WPELip9iBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRygA17JB8erJGsxrST9EUc16LscNHHGDf8vj9aMQCq7w6j8xYBHarWqteehcVAUSczujX79bYkUqSxmheLNvUr",
  "key1": "wG5PhhYqm5PdUQhp2nk2oWLiAkUUuGWUZoVUUxvTMMZKAgXtosv6YyR6zc2fnHagDZQh8CqboaG9EK2DnsyXwnX",
  "key2": "4bXydt2bRP9U4gGJmPFiCUCb9K5pXSWsBdEXGuXtbHR5p8oNxg9dYhKB3WYrw6Uds2mpvMMmSd5kDU2AUrU2VYhr",
  "key3": "4bnYn7qKawFznq48r8mqYPFnjDiJWBosW1RSpGcRqRZedRKGWD6eLeeTP6C6iEyMVbW1u9fVimgWCe9gQc9EteoD",
  "key4": "ed7ZJeqzDiNBmmfUQVGY7NonY9Nf8yCPNxTEVMJ51qLh75YbDMT2NFWLQyRYBxEsot6282THdFRaFNoX8pnyNoH",
  "key5": "5dL3fCqs9XebBMe7MNkkUEZw1vBcpXyd8XC3er2kqNjbKgEX3f9MhdjSnFmKQZwdPSePAZfqT8WHveKXPbgdC1aR",
  "key6": "5rTtABLLRmzd6ytnnj2tsLjcuSz3WxpcnphnBkMYEDjfwkfpU92ZiLXsXJkZHG553T4cYc9VhmJ4hKVWtFvf8QF8",
  "key7": "ReDcGkJWqnTe9CVAmaN6VBp6FEHVPtzGXDebWTHWmaAsDnCHS9o8h56uCSNH6jUvDo1b1Z1J9nyfaRSD7KXDcr2",
  "key8": "4rdfiW33fxfx5kEGRfuwB5Np1q6vjvGE5JHSZ2fAY7fvkfBoMTErcYTzSZkESMBjDSnuFRZTWmjgoWnA6mVuD5k9",
  "key9": "4Gc6zvH5PXic8mfqWA2ooBUVeSMfy3FkhpRmKJRgpfpAEYCgwLsHLRBThyeNqUYJyA7vL6ZRZazkRgUp13TaRPtN",
  "key10": "VZQCgQ1nAboiFcjWT9KamWWzzuREnq4x8E67tuemY2hwFXN372ddTtJvNe8NE3UzvLPvJcPUkQgxuGigtMcRHr8",
  "key11": "2YRBVa53zwzponavAGfhBg9zjEMcLwEB1EkkgboYr1CvY5GzgjD54dQy2MiSspWQ7mVgyjnAWJXK3dvDDYCx5aRR",
  "key12": "5fsrn7PzdQTR7EKVfsFDW85AxXYygbPieGNAMHX8q2QYNt6GV3DaspRE4KCzWusRdQdbsuqvHdNH8ZCmUrJWBw28",
  "key13": "5Qmdgimkxim9wLneigVmfwHwAQRSyw9PxQH5drdheEJ3fMSUhV64XssS5gKZQjG8RhAsGyqeSGe1CWpkCz72d9E1",
  "key14": "4qu1gGN8BsCT76C8ErEEdQ3tNpfeH13o6sjChutmUWHGnomRavFZVRqJNX5YrUfmFox7BQgZdPDfh7EmWEySvy9q",
  "key15": "5mtkQDdhn7azVdG58PQP4e7WFo9mFftATifpWM3PKm6bNGru2jmuPP2Rkx3jaZtC91ywMZXaMkDQeHUyc9HyeVq8",
  "key16": "2tgjJW9mCcLMev471kSocpthhrCsorRXVkCmeHgupLFixE5usrpm5PjP1T16cDgR5LLg2kc8oV3tCUWV8tJh6EUK",
  "key17": "5SKrb1jJEi2EatYK8iw6UMswZEBWi1Pbmis4ynktkbWugKhTkNQFEH6rbFfHpvEPox1s5wXNcdygGRGcpkLNaFXu",
  "key18": "3WSzLvVbMWqgwzieDZQVcjEddj3DtjaoEUzVhKMQCoXHhX1m5wv4u3d4hMEHgJq2PFHfgbMekBCj9koSCPGsdE8D",
  "key19": "29qmK9hMB1XjEFJbbKHrXDTpN9cHhhmygg3w1PePM9gSJofGwm9LwM2wpTrRGMgkR4P84oJE9BJmcvD1KTvdqhmK",
  "key20": "4jXC1qLTmg2hyCm4toq7Dk5rYbV71A9WjvYiohAZh3Fx9uhRyX3B4jXN2rvffQztYPSscPiPxqwBmaUNWudYE5jq",
  "key21": "2XtsMrrSo5Q3y5DbFtK3ZsJmw8yR3YG3UCQXWQrmAARBXis8TFybhQ2oRz9Msm4kZsjvQcqMVABob4DGiMyQ6rmW",
  "key22": "3TPmcjz7EVdoKdTMLF6Yz4Tz3s3ScFiNDV9piXM438XBzD1stKfRe8QcgzQJrT2DHaWGFfXSxWZxbfokkX7mQsKr",
  "key23": "D8abbPi8EvzPaqzkbRjxGJTq5UvYYkVRxFmyRPdJfj9YG4rt8BU6G5FMHQZnxHXNuyHTEgVg8ZAyFs7bpCSdFmQ",
  "key24": "4b7SdtoZMYG2sMQPDTFx4No9FDYqdjRykuKSM5dpQEe2qZhbMqMeAx5dkqPbKhyX7xtmxHovuDmjsaX68egCGrGF",
  "key25": "3TWqmWLs4EsPL5jpREAPwRct3PkvuiiDZSQkvkxrV3yK2kYdaXc9isa9d9AH1qBVnh8vdprMLsNFtbk9H5eC5Y17",
  "key26": "383BbJBUfT1hKJ3B3AHdkJah5m6uZ91vofpwFrU84y53ZtXdigJmz98WStAJ5pWGqWvGBuR8URgB1LNxHCWveiTx",
  "key27": "ki1pR9J8r5rrSHmdMyNo95UNShqxbyjDEv57ibNNC991yDEheWh9z7HqEudkY4Zih7ThSbZMot5LpVE5jRAYBKB",
  "key28": "65fWZuzvYufzhmdfzKFiTp6ZbrxeroxsSAw2UVMqWE188wbnnhndttgwyMdxpQNgoHHVLViyuxUWu24T6B1yNbkF",
  "key29": "21mhPshLURNHtnPGjCzWhrc6a65anXsV2jDrcCFvaeUVt4hHbsfD1ndrzA2prXV5VGSXQxNdZNEUBUmcKazqiM96",
  "key30": "3gHhNbyzMpUj6CLESGQkaGD69DpmMWBkXCKpLRo8d22W2duJAsr2JvDFjYmj1j72b2QYCoPMBx5pPRizDsDpDwxz",
  "key31": "6eH8emzkzCdUoZJu7Ge6kUFTcamUCquEXZiPZCMxHQ9b2Z88tLZrDUQHE3MHwcFQFKGXyjqJgYtuQk1M8xQnrN3",
  "key32": "5gFkvfysnL1uACjumc2WsyfiKwjbmzEw78nqRgVtiSNUDWfxf5KxjCCysxLkuoLWpSaFzKuerVyXva9JcDTd6KGc",
  "key33": "4CiL3oTLKZ4yqu3v23T1LBBp3ENqmL9vqBr5RJXnzVFkak2GHhSCCMmJXLaStjpA2bkS4RFF5BZFmZK6gqZVZcxD",
  "key34": "2dhf3nxNMiD8bced8CK69yiyqHTevzrak4QG9q1aJzUNf1DbRXDofdtb9WxSdrkaW7J2rL8PNtkwq34DY4rgkmEU",
  "key35": "2XGZkgnZN6auiin9hN4GkfvTmgpqznDeZEaukhMv1cQqrXKNmTHeXYb7m7BnqRRFYrQ2YFCMGtLyxskKPwemmGy3",
  "key36": "4wVJvgpF71mhbjyWyo9Se6cVtcLQ1F4re7j4ubDDdosaL7TTaa8snng2qE8tc4kE3ViejU4tD9spiU11uUFN3Gvg",
  "key37": "3Kq1YfNQ1yfcHvZmdSm86qMDVxXZMqyTpgFLGniZtymXSxXZuzkxA2NK9BytxvzSKCLesR5v8w4ohKAMRcxpSfZk",
  "key38": "3sSRouRx1JkfZN1xRyoTsRbNRA15bmL6KN4TJzmKdWwESobyoibV4Z74vdSdKwME2zkh5Rus8obD8qL5Aijaaoas",
  "key39": "oNBuujrKEymP12T6P8aP9ZF7kRp6udnjx2pEXEkUFYGeEtnjwyA5aqoSPLim6T62DCzTdkcTnB3XYfn2ab6e9AN",
  "key40": "YJo4r9Y4HQEURfok2A1TE4QwFqta2KCFEpeVJLzVscGZpuVgjLTU5tWW3XxPa9WkwPfnAbnbVAEpzd6e1BHt6Pq",
  "key41": "3vePUAUsqHXXCRQX2gNATVjuGVz5FvNhYUC2pWnpfnuVCYMJjhDRsF1c6A8hBwTLhfT7gF4WXNW18xK7wiBhuLec",
  "key42": "4rYh9268w2mB9iyY65fHEKZmBPpaLNt7uy3Rp9QUCYxpeAUVtVm9cyNngCkjK1j8Tt98BYohbspJS3A7kruZPnfH",
  "key43": "3wvc6BLpvKhF4qozaKCtgXSABJcBnPLWjKfRjygN2A1XUeFZjJg1ED7YRGYKQjKgb8Nkzgdd8CXaqgjUfmzeA97U",
  "key44": "3jwW7LPWU1NUqPXcAkSNrK5Y3ReYWGUTzMXBv7BTPf2CJnLwx5sCtSyZs56KbxqvoE3MAqHdXNHDynB5CzES7fuc",
  "key45": "2hofRMb4uw2ENdRa4jbCAuTVZWdLq2xHcsvyBv791GfZspqKpU6kopRYkSPQLi9NFLNM2EKVacdvB7Fe8xgftBBP"
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
