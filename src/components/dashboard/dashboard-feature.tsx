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
    "3L6vZe1LWX2TMyx4CBKD8aNSi5zY9AdRJfym99iTRtXeTg7JtXRc7cPEgv7vjkT8ox4keCc3R99F19ZpjWfqWNPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHW3x7nN54FA2uafZCJXg11PmMSXPEENRJT6QJmou5eWtZsNX2ens45QQ2xb2QrJWgRmm7wKWEzEpnrZFTfRTkV",
  "key1": "VDuE5Gns5SqjxvKH5Go1ffKar35Sm2gLtkpWWynHpww6DEWCxco2kYEdFsXXCSzFEmy3bjVZadMfnghiPb4wrXX",
  "key2": "3aSe8LNpsS3zxpAZX2aN3iuTFrq5ZxiKS5TUU2k1PcL1Hk9EisTs7jnFpjQJJbQUex47TD5fvVxjVudpzirKDnyR",
  "key3": "2DMamhYnCEeX9U7RiSTxo7J1Am4m2MA2g9b4X4TVHBLKE4CfxaffaZHq3JKVnH8LarMtrh1JuzoUnFxJgpPpbScK",
  "key4": "5nKkiwXWJqfsHTdCMKCUnzD6GivqZb3gCneUJwxSYGKDWEigYrpL1kqQEbMsTaXYiJcnW8SxeExTjWhAHSVYaEcq",
  "key5": "2C35k5RhZTiyVEJeR89tYG2Z6uT25zSi7QY1j7b8n4oBc5CJirzhj1k5XQm1BS49FZL8pjfpbyHA2iQXjsDyoY7q",
  "key6": "5oBsQFJtukNkdxdt2kP35Ee6EZh1Z3LGtdftaoiH9YvvGRGQvvzghStYnhEec1ZfVEFpueu2rvnvqNzKssnntdD4",
  "key7": "3Cbsk7rH8oMeyVnBi8pY8E9vGhYgcq1eJ1sZqLMLK5KPLmaFs2E1VoR3f6Re97oTVpBpBw4roCEkw8YwgeC4KzEr",
  "key8": "5uj3qUw93xfS8EsxWUM2eYcSpssYoifXxMqaEupH4LL7EzKndh5UHEHUd2893ifunsxZuFH4YnQX3FdnNqxZFcUQ",
  "key9": "4kwW4ivXUq5cQeyQgGxkr9RYfhcnRqV3GyZWiTrRFept2qVA7fBjuPUD9BUyYmJN6pc7aUoiU9uFdSrqcB2TgrZy",
  "key10": "pMsp3GDnoyVwxSd8UgSADredijGj4ZmiGsPUo9EgshKLY7kfPoFFVZq3X2dw7wwnMETxsw5kX6oSk62JDiF9ArY",
  "key11": "Jm9YAAMxSq6BKwgrS1U8tLHD4AxZxDtqfASUacmd1wAapBdgqs377idbUc786vZk6SoTLME9pyYLXVayzYSTb52",
  "key12": "3K3K8gqhfQrm1v3uYu9DtdzSBcBgjwyfH9YCBuGz46ZqRtZSpQ4NVr13NYstSV5XroNEWYe5ApQTWrQdWQsfX88W",
  "key13": "27bmzBGk1zcSF3mb72jDfbpRw44gR4C8CRmaMpQRQ33F6MTQkLmYNie4jcSrhjVE429bXMzi54N2o6Y7nNUEv5Ux",
  "key14": "3mmxkhYNfswSvQBvhJoSdqYL2apknhJFcXsfgX9ivZiaDZg8z63gBiwidcn2oUBdAReASHXiPJY6z58BxrykV3hc",
  "key15": "3pZdDjxZ4T6ouCk482XfcwfDf6QrLmMEeNUvmLC6A1wQqPHg4sBbwXnw1Pd2tvFdFHrTwNSA1KtoVbj576BbeD78",
  "key16": "A5U6xJKibdheDUZimLGcwwDnXzFG1MLKWoH1M3GxPWwYruHmfeRhuHSt7nTx91BdaWtJHBcqG2rvcVn3pCgRNNH",
  "key17": "2ow1iSMx7fgx38H3SKSuZnhpkkGJCXvJFkwAWP4aj6BB7YqdsHqVCTcgQbfigRKPbDKfvH4Pvbri2Q8WKidb6SSq",
  "key18": "53imytDvMDaGVrPBb6PZNJk9n1DvVsPp4RwSK5Wvqf5iLX8oGfxLmuyxxrv3QxBNre8cJfQj5PrGZCrfThrF9Dvr",
  "key19": "5spKxgYkSzskG7NqAretcdtHDe8MjzvvYzbgpUdYSoqUuVRmVg1xGEoaoLwkjsEFwAgLcUqGUGA1ZPLudYfDdPyS",
  "key20": "4tF1BS53bu8jK6xLUVYbbpyaQB4LyQkj6u3bMhVmEfAQHiGuQdPeEKKfpicMhVAJuZt9UUWPqZgwZdegvJfsDgkB",
  "key21": "5bfXmpC6cZdWtm2epAP8AUfAWke5BCnbErjSNmBjxajX7uygizLKunrzu441wrDUodQv4rW3J4WHeZrvfBKCDMDz",
  "key22": "4PenJZRDhgHMjqmyoaanWkhAvqTa25H98VJEg87mPpEvzzwXuMCZnTsdkvkKmgTkfwC2y6V9BdsUDR6EeLaS4Qab",
  "key23": "AEbX79yjbu764nVpV2b4DoaA1rPsQy5yZhUDzEp6eHUVApYHMtwRpGsuUhdRUyrmqf6A1PTBfuRyqXjAHpAQZ4e",
  "key24": "hsphmQqH5cnVD2x4YbBM9rFpRL6mgRz95kBm24VHNcKNAhU4Uw2CU8JgCu2G1EpnUtX4hYzU9woif26yiX6g1Lr",
  "key25": "4Xu65Lt1uppstv4ZAdL3qT2Wq5bERovqBiE8o4RDgkMSgt8Cshdri9a8BnrmHuC4wSxkAYGtUvvru8xiEz8CZbth",
  "key26": "7NWtufHHsZmLpMbvTLQzTsBFdYsetAvKPUE4UnGdGZB4aZFNAGcahXSaVs9hcUFzTpfgf3dTBrpuVbFteygcGeh",
  "key27": "2wvbgF2YUb8CphwuF2pBN7RtA47SrpfsbFaatWQ7T9kYH6fUwrB4xyQ9ybT5DSZRirMoPEUHVobpaegUp1oVCREn",
  "key28": "3tVg2gJUs6Nr5kkuSgUBg8Hy7K7EVyYpxpa6kDbkn75Qrsp7447HUYGMSJ5kmWm8zAmhCX6bJAVHfDH13T7fUvCB",
  "key29": "5mEB9U6mdJgkHi84TFx7WVdqVfWZupYuHqzBmVottbzPXZ5ZnGa97nxCqH2J7mgc8cMgWZna9DuWDTSTgzrmLDBx",
  "key30": "2pgn8LW3qckrE5oGcHdVWFsLWHioE79df5fDYBnkGCajG3vGL6G4SLDM7GQtvTcArxtoXeTMjpPr4yeMftUAwn6x",
  "key31": "3re9SNzKFcDLnMMRBrk4fLQLNpBvQniVeqS3YnubP7AtNZtunTajREeUPuQ7wQNC9MgphgWjnsjL2ZKSETpmGt1L",
  "key32": "ZvRZ4YEjV8pF9xJ3NtbEi9g825z6ty64vGSgHzPjpZVJKLsBztXDFf1ptzUW86FMNguibee1Xco9679w6AZYfBk",
  "key33": "3LwX85QitAEzcmXpJeK2nq3wsoDnxgia37ai4B2uWBhaJ48uBo3KZYkRCC5WVUGvToz2MNTS88Zrqf477wHpxudk",
  "key34": "jyWzDC5Q9Skftdm3tbQtrpWSYxeXJK1SFnAk5AbB9oWib6wkLB7Rjd3dH2y5DK3dViC6AqaV1BSQkdSChio45xp",
  "key35": "oEvWyvwpZovEp6BHehcYH2QtDSzHsrkFwNdoebhDTci7fu8qB7zyaDqf65QJCV6SHHymz6uFXHuEKkbkJvKF8ja",
  "key36": "5E7re8a7naFjf2w9LNLHUpzUfv5LMU1bDKJ6FzFNXotN2yjkxeX7eqLrTK7WqxdCxwshHHG88E2WbzTWU6G59NNG",
  "key37": "4FS3LemsCSYXLAgNstZ2bX9gQ5oAoS8LQpC9NMRhhWXH5w5f3JMBkgkx2jGwJMhWm1ucMZD1XymdbpcEWPo8emSQ",
  "key38": "NkoVfiJd24TjhX3UEtq9rEjsvecTUZPyPJ62tuQTaAXXrrQgY1mSMLM62UXCuoqXSZrCWqbMi2RT7sZr1D5teXt",
  "key39": "4kvYooLHCaLrufELz1PPad9DnMUcCEStYuWtYYFAxCrMPgnfj4zxf7Ab82VjvyEnu3SWYSHWuY65EwZvQwYRxQrB"
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
