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
    "HNwQioKy28e8KqeA8Frp9EGhkLHX87FrBPBfjZEoeSZMZPaGfwqyPjaZynEupiBFLbrcmd9i8KL4YtDnFEHFgj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iX4xj2TVrVRjxbptXxtnWj4Uorg8vj1CDoDNfCZcqBnPoFNPU4TUPZUXvbZzLBaLKQo5DLL9qt5yeiM5hTrhEnt",
  "key1": "4BUCdM2MSKmb2Rt6oYu1G1BZXQpva8PMD8zVTNc6Vm9abJjHCvjjEcWUEth5EaD9cnHHddQKqQb4EKshKhg7wPnp",
  "key2": "3oTtLe64pGEKhBJHGebpbZ9ga8DZXNT9aAgpL6Cz4dCgomP323fU6ETbtnEXyGaefCvJZakCZdhQRevcbs3qipai",
  "key3": "3EYPtMeMzEDjBWgzbdikhr3oPnRAstuZG2LHWuFjfnjxVnCD8s7zBxraR6qSF17SX7sFnfqMijq5kCPr3gmVowN7",
  "key4": "2ia69CghojiSpcGbqGTTBcpRcfKNPm5Sy7JPDqjaP8tP1Fm2tG41cbKeXHg95bfW6cVekyzoTMxb9Tmusd2pfLp5",
  "key5": "5GA18ppEwm91x9ty9c1rYoBw9mcYPdyL4VDpJBoqQNBc2SwVjVaiRNiPjsBAr2YACYA14sU4A8BTr3czfxAc9A5c",
  "key6": "3977r86c5TDDdNzjN8NFHUZgGyVtaehVMcbfQzgzvR2ryDtCM7KtmqcstJ4hEX5rGpmjfpT8ys4h21Bq7vWRtSTr",
  "key7": "ojbNgkaAGW8drZRz5p4Yfg87KDE3fbfTmWrmV8G89XdZH2asnLSNjomFEcFFbLWFBLnsnKoL5S6owoCEr28XHDe",
  "key8": "y4DABwCdcNWKMHykMqyCMRSn4v4UMQ7SwMZpEaNkGEYpeBa9nthf5p5nzwiLRBb7uzT5Hx1NwePvn6oCnMFz4Zg",
  "key9": "63ELU9nUCndzzKXgi8yRmWVqYnyk227tMwjvjwWbeSmuTavZ91NXkA9QSS8WmZGCv9qTFVNDN6uuKYS8Wk75Efqi",
  "key10": "67L42z5hPvgc9AKzgoodhDzHqfSjuZdJ7mQNkVaW9WJCdF3dUUZXjWFL21EdXENA4q4poLD6jmSts7shVpxZXZpW",
  "key11": "3QkWGpyX6qCp2CAZRyeuJmKaRfuBMHhqChVs1PQmjjZycTywf2nY2Y4dzUdWFYZa6hAzeYu5S3WbnU8FpgVfxJf8",
  "key12": "52qaSyJM7NNVKTaDgwHAEks1PaDjDqUXgvVe2rBf1RNZiHKyrK73ANUmbotZe4fz8SdodUUUFcZ4HQ3qUfRFdYsa",
  "key13": "ysxEorDc8agLLwAC38xphDzFNiezkzpEpAJDdYAxCUmEWfKmPK1wkjQ1uPFoc5rnFLxUnRLEABLEMREJ3wy83sW",
  "key14": "3tWcfXJXF36LARsv4mmg8ctnSr8xqpgc1XNA4jZKkdYqWvhcPwhLpVqhSfVAWpZqYGYinp8hHZjHwuDNRCumHUid",
  "key15": "5hRpBwAaz1UUvXAuNW8Yy7bGBd2DXSms32NHJA7XZ1CNaWTHkLqw4kjzq915DDbU9QZxe9aVqA13J57daKipSo5Y",
  "key16": "3t9D5jyAxaY5Gx5v3mmAqhv4LnoYa5zPd7o2fqMp7aq7KUMVioHKheLnZyPK5TGkxSeAbomgBWt6mAiLtkZ6emjY",
  "key17": "3QTDHL4k57hvi5d2L6DQNXT14RHRxW3eydw6hFaooB3TaXJnogYXQ6oaeq4Hfh1u5YwwZ4Win8fUx9qEkLEiX8Vb",
  "key18": "2w82knYgeTK8UfziZ81KzFET5VK6cEYdU7wUhhjyP7wVvfs9M9cgj7uYd6hPoKVFSumn9qyD28dntGXSsQLEDVf7",
  "key19": "2ZJ2RE7CSzhW8tTCC22jTe7WZPfth3mmrE36zD56woTJv4niESN9bWq5meczcDYzPr46dVGFP5Y9nfQtN1oysEbb",
  "key20": "2ZDCYdcHmALrkkXrKmPA3WsZ8VcNJw5E5z98ESGY4r42jzHKwbS2XoELRTUGS96b8n9riC8oWf3pc4hMrxo4TNmB",
  "key21": "7G25PUSz5fcpT5xwKqN5e6ocN5gRjp2Juk8rQh8FYioh1qxowrfoQAHTCZg2VgSvKSsAxjVCKX9tFb2PLWdvrDF",
  "key22": "2AiGkozmXXo5qFeRtxa7NfWQWs6RT4CPsE1yp6xUqrzgyFq2Jp8owR4L5hjRGVd6cQrikvc76CPURcA6vumctDqh",
  "key23": "UXcBJNF3nW7C57fx1WVyBmBwkNUU7VNPHwehMrGvH2thT2y5Mh8sveH3v8xLjrkRqfNj2uU7csRpGht5ZsGd9Jz",
  "key24": "66VnMDYoyJZitLSohDziJDkiZpVNDm7CFuf4UCJjBrfN6HJ7nLprtJXoUtyvUfQZjE7pLsKmcqmY1TjTw7zXA4W3",
  "key25": "3hHKaAsMA7YTYZStNvnu9m4Ln35RBnDN9NCk83ymz9JwGn6WQW2RzYZSVbbXGmEWzBqiqa25Fit5RKeahcLRoabm",
  "key26": "3msp2WVUAheKxvjDKw3L1up4R2K83sDiJwtRfR6zo4fQdv44NbtBATBZGXNmd25PecjBGbCiVqnSGigVP8HH2bEy"
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
