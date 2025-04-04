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
    "46H5wurvH1kDGPMtq7k1tC5SoXRRLYvRMiFCUoTAaJtLRZ6fokzQZgWNjL4m1wxDaimRrCyybQXwhoGh28ZNb8cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jiZZuGxGRupEsadF97Cmd8AEU457F5rvdW7ntUNLperTEsBxqdZ6UoXdCmt9dwfpaDHZeeGTYxuyBF4dx7iQoD",
  "key1": "4HazLBqQNzoUfbqaxJoKerZFnfKgmBxs2F8Xr7H8LJgh8zX5Lr2aNSmgtRzpz3L8YA1A58j2FqNimzHJyaFu7g7j",
  "key2": "3nRNPcuvSkekz8ZGDBcSYVPPU97K9Vksk1pSTGjAnpxFqNXmo6x3t7wjxMQWn5R7YTRRb8MKVnhkyHrJR8GaN87s",
  "key3": "5w2FCa19gFt4EPkpKTbwt3ErY69L8UCoTF7pckfapw9F2mr1aSaXXjesmk38RtZKfHFwL4njC1pDay1chXQ8bPuW",
  "key4": "4uJxufxsxuxfirdXMojrSxmsiVXaF6CwBaPbvToo1JSLs4vsNt4PkCa6xqmysprXheRBcFTSh6a6kiHsmWGhdcoq",
  "key5": "3LhBrcL6PCyNx8ZLDec61UK5zC6vryZUnSbg6L51A4qSvs5vRHUcAvgbuFMaiS6W5a1B3yfNBBz4NYshHDaMpckX",
  "key6": "2e1ewX1d9js6PgXL1RKHzEWRKqFZJo25n71u3t8Hrm57qMXfRucCmbSYXdRYumQCe6QuruKnHBYMS19c4KqUeNmC",
  "key7": "4oC8cB3PAeEE3VsYbh1VMQs1R4PaGuYtNfhi4JSRvcJxW6Rwqzqk7XUrLe3r2KVjj27sAWvZjYtGT4vpqUaa2Qnd",
  "key8": "4jydsP5wtJcoW1sgiJDMVHUKi7i2Ggf3Pa5aPQjdL4Y6RYpQRX4MiYS9MndjbCMPBSWiuHYUWpaPbG8FSivdM4qY",
  "key9": "2t4bY9YrjUv7GsofRnj2iLigFMMaiVtaiHy6QW3Fh4xvCTeYF4KS3A62LewPKCKJVTbnSWbGnrgKLbxqWuYLL59k",
  "key10": "63FSUgdyb6MfX9tsb7HSGNLtwZUBAo1ikZrxdHttucm8Ae8XoqMoXzpMVDNQhTb4RJvYk4QwXCyUwK7nVWLi3hXu",
  "key11": "3LppUdrUj59sjPWCQfWPyBpqqx9D4BkaZjr67qNXhWpVqLDPuoRRyTn9sAWECNtW1FrMQQ2Sg7VcvbRY9BMhHVcN",
  "key12": "4rA6WE1D361Poh2Z6ytkQsDAq6Ykh5drNVpa4S1uMwnZGBxNwUAb27uca2RuXCtsfE8NiPCE5CnK7q6vf5C2s8KJ",
  "key13": "2vvA9dbtJ8W9gGkJLejX5qSYynKqYdn7Sde1Pi7QZrzR4m7YrRvmKeoKZdB15CmLSv8zuWYxEXXbhJ6G2WfUW6SY",
  "key14": "4vviL4z7h7TG26ttKp1ma17ZacvdXQ4JDKUonkZLBPTjVPt2hVMZwe7f1TYEW7jbosdaAJMh2wPYUEKGVcdE3MKH",
  "key15": "5EfY8pfjfMeFeWyJorMa4zp5eJkk8mCNnunMBYscizkeoTt4jNudZpAmYyDvw7nesDbroysFee2z89x72M3zhUci",
  "key16": "2W72xUr76M4ty32GyKhxY5g8UfS6vPF6sa8Mskx64ZWZTtQBoGz8M9QDxZJ7iis6PZksaih1UqoskYqd8iPHoam4",
  "key17": "3x5UryxKoMEZTP8X6BJzPwi5xCQqzXuQ1brmVAhK6eyPm8UAAFAY3V6CMuZGovqAk2vDzAXzXYqyx8mofQMC5evi",
  "key18": "2dNVhnbUrXhVutCWvsgMfrxex6DTiLCVcFxYPWWvtmZQ4GbYqetmaRBeERcDTrmoFVR2YSqv4H67BiWe1sgKWZXM",
  "key19": "5LBjSnocnYwGSiwjdS1kdzVWFqnxd9mcL9s4xCpqooQS6mkCoYUCHQnrRoysy2EYu1PFEMiBh23gWZZXykYyeJrN",
  "key20": "5nMejvgLNjsLJ9dJANLHTX9F7GShxUtB29Bm3JABgyYAH7rn1TPAG9n1gSqWkB8hoXXW7avXSAiCCQ6UAsxy2o67",
  "key21": "5AaHAtoezqsGCNP5svuVyWu2CtyVJX7Ufi1oggSkQrHPqdNxdNuaYEtRA9pYp2n212y6CfU84HTShaqxKZWecoc",
  "key22": "3MswtXy56gxuc6iDstNhziMV5hEQ2q84SJEtqUCxLf6FCgggNKwaHpjd6u2UBGUQ7oaeXP8gcNnDRwCAdVthcoJE",
  "key23": "5yM3kys6cgstXfgpztD2ubQhbZ8EhKjfuFp8xXYLGMH1idafu1h53B77RrQNemu8tia1qQkRroDfCiXGJP2tBnkN",
  "key24": "3kJFsB8rW8ctuKFoLL9y5dAwG95NoXAJpJRT6wfBHVEvRMdtAfEmjzgBusfgX5ns1HmRnubgbSmvzXoP6SaSFFUc",
  "key25": "3FDVqT9pXZe7D4vDL4FZZXeddC6ter3Ngp3tpQs7UxPdT4pYMR9w9Qp7iTPyjiUR8bsVoP8YTHSeXDbqxa46G3r9",
  "key26": "2a6Vns2eYquRBTwGo5AeYSTiDe2M3Ess7Qhw1ifScL4CT1iWsBPg4T5Ym2vjm6LRxFAC8wQqqNWBWYmiZV2Lyxrs",
  "key27": "478hkNymg224NGURR8NBG3ZExSHzo8yxWpEJVdY7vvUbNLabBtnDvXCfiU9MqJUp9nmHiFXZTKiJQNGDvU5Jjbtg",
  "key28": "3RmYwBZFG7HWojMeExwN4DXSA19yGYiydBniGbihmRuw3CQgW5mm7JZ7SzVddp52uAcwojXZCdnveYitqz9yUgo3",
  "key29": "HfFtiktuzE6pAYfMYQGMs5CPvcmxL4tG9JeA14KJWZA8bdFvEUBVb7cSyCQxzHwVKmvuaNCA836Q79h82mxQac2",
  "key30": "25BvoR1hKfxwnTAYmSkEHZSmZkYAWWF9sfya2YL3GnqZWqCuLGQwGJPnFPb2Q7Qeox5K6fx7ita4qVAABG4f46GU",
  "key31": "4H4wQLV2KksbjQdMX2tqP5LbXmeD8atvJXZvEqXWjvUt3Ap5isTQez4KyPbDKtjnRqyoNqqettr8KAPbyZVMEcRJ",
  "key32": "3MkVEPgY2KBx7B5K5y7de9uLUJkGm7h9NpXf83C6NkmyMxJKVm4w1p6uRK87mjq2JitZ4d6XiqFXuV8YGVVLHDTW",
  "key33": "3a9714TCRsfcxg6Gvxe78Y7S6pDsCdF48BbchgtPDS9FdTzChZLo6euUeATSohoxyJfctJ5F5uKuBrpQvbPT6wQD",
  "key34": "5wcYgsUvtB6euZt1yRcKeQPRAnoCoKGZS3MzgjD4utDdP9u7jQJYi2BBUi7KFgjivNCmf83G8JpbRuWk43Z3Coxw",
  "key35": "3zAbJVv6hF8yhGQQ3nhwMo6GZmUzwX7WMiTmqnPjtVUQRqRmtJsXkg4LGuTP5vEUwWFUSWZ5sD9ceTVzNfYdfYQr",
  "key36": "5mSYFgtgzT2Cg8dAVNShT2DDKmU96WhyLFURLAfxkeNTmmRrvQdd3zbfYuQh3fpevWARLZEbMmVBnLbStej6eK1F"
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
