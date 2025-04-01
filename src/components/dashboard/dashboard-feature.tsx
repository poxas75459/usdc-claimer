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
    "4ppV2boP3JouYXWXaGPQxF1RUZX3Vu1jbjPqGiC1yV4qcPhBCZVD9iknB92HkBSFAxDosqqBhL2VS9viheJkJpSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsMa1pLf8jBHQAtjC7BFm1EUheA5DP1XbLPfp19PuReUFD5nBksYz8AHYGD8QW187uwpnkeaeTmEL7Dg2ot2PfN",
  "key1": "5J83S6kzjQSMvK4oce3ojPHARMrWmcjVo17hprb7cHwD4XadentA6U7zZFP5FrnAdkCjUAjUX5EK9KMZRBHmfR2c",
  "key2": "4nCZZYuZug8NwqPEKvQWnRbdMhaWAW2M4LvbP3Y2W6CmAeXMRp7vGNSG3hSx6WLtiaKPQT3dRmCmERa9eJNhiUL6",
  "key3": "EqE1NYBYRUkSNsaHrn2Ckry5bTd3darDXdTyesomhCGxwtoS58N6MnpRjCaWzhg3n5d53fHHQNmdeGTE3rdN4Un",
  "key4": "jQMXfHxkn7hcBrfMmxanZqGrSC3Nft9VQsJjxypZm9PoVRPes9rpWsuvkJR5PniKuokDy7WLbAEnHPZkFQEtn6V",
  "key5": "83M2B335dZg7Dm1yf7Ezx4sodMrkG6o21ejc1a9SrfNwFdaoArv1WdVmz6UrpPMWwRGYuz6qGZ56kiGY8tCsjRP",
  "key6": "3RcCfGMwG8YqeNgHazCUDUvrfvDXcKjab5qoVbm2QZcUkDSCq7qEyugJoNSfPgQBHo2Lhvz4y3pRiaa2FoEDAgyH",
  "key7": "45U81dgYon6SJkThNg2Tw8QctAGeUYXD1K5GNpiCWvg64ApjZSUZMxhf9qPEaZboNcv6JzPK4cefNV4MdRphmGxz",
  "key8": "3a5DPW3WxHhBcbfggexJ11XT1CZhR1dp6RsavhpyCgJRSaEdMznxv47Ku6JBX7Pd6mwjh8KM9qfneLgdZ6pYf166",
  "key9": "2gAooRFSo7WsHnCnyWGuektyCYRDdVndvbAZJdg2epWd1buvqiAErgdTrovQ7HeqMF3mX2U762bfmc7Q3eacFuzm",
  "key10": "ygSj57DzweEYNkJqdvCdE2zpcgYsun4wXMo1TCHBuQF6Tdicdy4tBbQw2msWKb2dJ88HbGUu7d2SQHPjptsCPm5",
  "key11": "5KuftBXPXt4vPDfyrvxz6kHdYeHTVYccNNT4sfsehhj5VZEi8id2DiqFY3j8786EiRKY2EqrbU1q3ruo79XqShi8",
  "key12": "4UGgVCp1btcVgJp51Dr1gGiHzazHBUao3xJLkc3zYif59429PVZQ1JoQsNmJxEZLwu6wguMbZEkaxERtEqMbERWd",
  "key13": "5TJ1x5A8SCR8T2Ex8TFpJiwCNhdHCD1FEsqVQ1XbyGSsKn8Xr7tFTWpqs2yZ6L6r4SoWJnhUdjZpJaoCgmxEAUGv",
  "key14": "23SZ6hR9AvXvzfWkEtNfzpcPjqQM6z1UANbQhnpTwZ6WkirYSovy3jka6NdPQETxJ2bHXGB8vnKceNBpBaCE4H2u",
  "key15": "4t9H68QEBjeggiiSuuuhXNX2eU7P7AUYCyMA83bxEztNiqE6JZKfETCiFwH8qmj2R9j5RwRkjk8tc7L9GhE7fu1p",
  "key16": "2fiyNd7sojK75HvYREDoHDzq1avMgTpVKdZt4V9ZHRZJsEfNbX6PqpLB4NvcWCsKk1zuVwwkHg6dHfJe93ifRGMW",
  "key17": "6zN3w16PmBCofhPxp3omFbcdkzbG5NCehtbSu2MEosnnDqrKD6GJPUk7ic1fD16dEg6nywoo6PCpwaPzEs5a76M",
  "key18": "4LxK5YMk1pBEVvvEdmcb9at3mdKiv1vYTAQuA9UEubLAmqVszfpvp94paWBp7VFkLHZTuSwCcSLAFpZjVm75Fiir",
  "key19": "4Bj8XV24JfHgVbtA3jZbeYgYweKbtvkPNskigFnT79WpqHYXtVvkCmaSk27rtUmSnGvpgHqCXVEZmHZtdpejBMGX",
  "key20": "5xKQYbPEGmNtZ8C5HQ1hSQQL1xdqEngVX8XiSpYJXaSpVFg3d3vGD4jmYXmDBvhUUckPGCk54Y2ZnYxV118ji723",
  "key21": "3Ydp8byo1HVKnrgGmvbrBqhF4iiVt5unzKwvhWe9zyR9Jb9vgjJDPEjPtFv3iPePbZfvQRukDuh2RSiYB8AfwxSm",
  "key22": "2JD8ZnEEeRr138Dj6ckJovVKYAsyAY8mYHJX81Y3zDNifKpdACReGUumcXfT94LsWF4BtdppPUjUeuNuSeWunFUa",
  "key23": "2gPjz2bBt8yJ7XPbis3PSq7Wcgd4jayaL5VzJJ3EaEMkESzxUkUUxyFPfird3AKcTFvJZS92hxLyiygET5zuamTE",
  "key24": "8bK13CLshTNvzngrsXCSbjHuDdak2WP6vQf625JH6VHH7nWGnwrQzZeaK6tDV4DLR8Xp6Ve8fuhT9gsUtyt8X8z",
  "key25": "35kkRbq4uzp6J3saR2cNu5GfUxLJwK1v7rMpK6EFt7QPhxYR3neUvwcGCT91akHNjaJwbFutm5mun54j43UcMTCE",
  "key26": "Gch3UiBbUWMrUNVnxbvXH6hVswXc4EQYokgMjGXdR8A9pt6qXARREgg6J39AV7tpDAZn358gJT2Kk3Vh38Vorh5",
  "key27": "5DZqTbbYjNt8FMqrvea2eDSDGxNUQxK7qwn2suYE4yQUGw5GdK4zKGkFoJtHx5WS3JzZN7SEMu48GoH6mv42WuWq",
  "key28": "3cVWb2DzYcQNPCjTvVjUFSDgsbRMDcKNXtL6Ke9FpofFovxVQ7cqzB847rL5EpjUrTjKYvUJKnFb7irpEnBDqvT",
  "key29": "KrgBr6L1xv6JnpREqsY1U1FqVLqWCUfKhUYeTd27HKmyqYEmuwFn7ntaGf9KQ7Fgr8gKe7iZDxM74ZweYsD3Yep",
  "key30": "53sb4UnQaV9jWSiyGJV8so3tT3dpp3a73o7ubEbRJNSQY4rXusYNmZdA77DXutekHSsTK5QCLTsQh1LtwdG7mKdm",
  "key31": "2hXpKZ1zCrBkGZ6Ee9gcxxmbaMYhDw81oGepnm6Rc6cYWBp6jkqCnDuZYhEYmpxE7F9ZPj4rBWQbh6yVvHezEoNi",
  "key32": "2yBsSy3RGT6VLD7DfAfUgFMy8ZsU84CZS7RURCmFJ1svfjEaGJLAtScr1S3RCq7wxcwGhi5HxhapGFfWo8dx4T7R",
  "key33": "5vWWcCoXPbZuXfLvPmCti7dwVhvmSKueGcmRoLJaN4XhEsHoRp6EyqDJ6Xf864raZKngyrfWan8jHJ899bhJXBCX",
  "key34": "5QPAzQrDVmaihwRZeCm6G41gHV3zLCssxEc8BT8crgc8tERgnSabwSFASdRFLPRHgMBGxisC4kQsYc1LaJhLQ3FK",
  "key35": "4sUEgkToiu6baoydtFWR66kZad4FCptf68w4NwsdvejmUx2NxPm1fRxHAbh56hb2Lz121693BYvgrtR1yGrFxUwk",
  "key36": "h3ec2NPCpGh4xrpdjCKFJefs6qnboczanFHJNe6dKw7eLjn6CiFKoStvhh5e1AAjPdKsnZSRUZQktZ7wpPJUurL",
  "key37": "4cegxudd4pJ2Rj5ooRMohbKkFc3zyxwMt5zkPZ73qiRYwDGUpiwwXbApAKiHgHfNx1bnXqmXzD2HPkXgDfEits4x",
  "key38": "4n4Bea3zBAdUvEJYo4qC4koF1mqemLMMzhjKGmE6Quva2tpt2qrSsmN7SLmSbfnQJYuQAJW8eSE7mqDj9mcQzGjb",
  "key39": "4s8TJSiK9pL8PTKH6qbKbmbjZDjQ194PqjMoSooE6utePReg1S9fdMVSnEeCrMGTr6KE5VZhceU8n3MJeBPves3K",
  "key40": "2mkWz3GgCJHNZnZNceHV1YqxuTFuJ43PPvGEzdCDJ6aDRriEHkGJvuStNh4QTyp5xmxfYXZfnw4Q2AW4oDj3LQgD",
  "key41": "kGbXQAjbM22QLz7Ue4RaUyjRT1cvxjeaEMJztjVh35hKKyBxUpdc2bEBB6dRmzqGrARvpCTpjV6wz6rBGH2QQyo",
  "key42": "2UDtFFsi6n5VWiRxPoEWvmi5k3pmhcYH9kDeiwmid28DwxYtspUJ3KN9FNFc4JgJedUNhXUMZ4vNvFx6Xxc8Kkfo"
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
