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
    "3ospYWMab5Y4qKhZaARoAmScpPMLtGyGpBS7ZcNwXiTyF3Etgi1ZF21JG4AEeXVEkYBTXYnAWwB6rKZJ5Y544gxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43J7sFG3aSwVXbHZoqNB29UVDvKM3cEMP1WA6NhzdvadYnNSdyNp8iTjwbD4irSd149qhvFedrudp2DHgvKAxVrj",
  "key1": "45P7yP1WAQCjVgkFyAf8qBQgaYdj55Jk71BFrc2CUKCYtR59ZMEeDGYxGrrAKbYunujQE4GZ2mcnUpCc2meYFVhJ",
  "key2": "2Si6XAd7xTGpx9epL8A234zQSb9WQrXMejpEK1KDQChB8Ayhz77zbY4v159SfDLCqrqv1Yc2qwsCnxaAvDxQxtod",
  "key3": "5K83GPFVAMfa7mwXe1Q8TiMZJFGvtBmJHbrbWugENA8nXChcLYDRe8GtFdavfQ3ZH5PYzWTAt5D6eGzH7C3FXw9Y",
  "key4": "vYNFwmN5FcbNmvs7fj6hSq2qJse6tvjaFMJ7FQZtE6uGv2FtWNz78cituCrAEiyw5k9QsrJti7vDRS1iinU3fvt",
  "key5": "cs432tFBndidetiJLyUaZNFm1tK1KjmNbtzuEJe2prHQm4mihSDV3GVvimYicLARGxmb28Qpc42kZmDViR2EvSf",
  "key6": "QPh2cDb2xsrThn6oNRiCaH5mj3FieyD3JAHxkouRv9iy9mXEsNowfuHSTBGMQoNekzkFZvp5L8otnpvoWHqNttj",
  "key7": "QCLp8dKNzDkNULopjYnRB9uguH4FWKXV2NE2JwvaKzajTn5ydLuZFBp1YmkRNLz6HavHr82tZCS3nwgem5pNank",
  "key8": "3z4sjiud978gUUMsLgkQFFKsFUysGaPFAT6wjhHpCi2CYUvMsaRwWhTqRkzLB9UxZBbtdkZqYcJAbYUfDq9RPauP",
  "key9": "3PxDMMUHKSiMeirkniQpvR8BRogK3BjcX6DQtbGp7tmNC3KZhVShggdAyfNVTZvZQXAWVLtYwuieMM2dkvozbYUZ",
  "key10": "4nxBKMTUj2Do55ce4MjykBpmCDffGLJ7tNbaH8TGxPNV42gp5mh1e5hqF26bcp2SzdNs7MzRXEwZKn6eF36YJ4uZ",
  "key11": "4TeCAas36nnyaeLvz94s7Xo3z6KY4DrvLKFTHn4EX5ENbrAJs5z8icoGV3EiixfnR81qNFq7h5mr54WrYNcP39mK",
  "key12": "3ciiFc1NgPyobLAxrZ5UDeqg6vAS7cjtbRSwJNrNDyNjRK7FYwLtVssvQSxetpcNVKdAbDqiuTyU6Y6hYdsEN9AC",
  "key13": "4jbmK7mnDHwuqWWgbuStrvPPubSA9RfsaNEvyXKh8p6p7ZFPKHqtfxL7Ko37CKvwc5BFu29YnshCrMHyUGjbxXVR",
  "key14": "3K2wzd3wQahcmT34rS8aHiyGUnTAyKioZ1GTXprYjn3CQYRjyzJw2wAEi9N8HBXceJMzy6CCekfmbXNgBdq3xxMh",
  "key15": "fRqpU1imXk8mWAveb2myhX4GpEQMxy63rsrHbGyvC6wq1udzQkqoyjz9pe4d9LMTUNjS391k6b6JAuwfHVpeLMn",
  "key16": "4vygoRQaEqQUMTPLanDeBNmDVJycVi1DWjEyRe9odNTbMVErNohzwv6u7YmMXzQXWCe2b17xpD9u66vmkVRb5v5w",
  "key17": "xHUkoqPHu5qxhkAbcWJ3XdL7FgB1g6EvktpZEPnRfsCYJZoCuH1vJcgXNFc5mAaE5tyJtM6qfCab31HNzJ61nod",
  "key18": "3Mp5GBVxDSvtrcybDDdoMXX2QaatdWgwbVWmd5czLPEay3j6pVWWWSqEGL8BSYFydJSD2xbiqRfomtQaHhLg8jDu",
  "key19": "reYaZCGcpFvwWQnvS4cTnvw4QQW3BQVTjMkLakEmLoDtdtnXp6MgZc7qc5fLhzB3oMSXLn6tfv6Qo7TZ9tCXbsG",
  "key20": "4JogMtNW1smg3Vdmr7p7ftUMnAH4MG76kDTkHQR3ee1R7U7UhHDrjUaycsdEoychNc2anhWbEhHFcEjyAvZ7shHR",
  "key21": "55VnXGwyEkTxFFDhaHKSzHnXXCFL5JLSN9LBzUvrK9YCM2afCd8ShqvwtQJDCCvA8JPn1dzNo5AT2ea4weGknoip",
  "key22": "5y4WpdFEG1gew3du1GwHr1xGx4CGC53sQBcxe7tRETpb1RzqdswZ1FdwGwo9NQYr55uAmoGMrPr8r9komKGLHdvg",
  "key23": "5sQ3exZKLoeLAGcZHuUuRjnHmPEpYFxG134oL15ujCM56ZQzdWaBQxMdnCsxUpaDjfzbV8rR1bqAZkT9e2LJ8U1C",
  "key24": "4qoBKN5z1YVkQ3QBT738MYoxuLvK2bhPKmKzyjbyfWv2FhSCv4EL6bAQkRR5cLcBrPLQ1m5XeNFiVw9staWoYJV4",
  "key25": "494sKYf7DyWVkw7nGXyJzisp6KTLFAKYM8QDmLyVkKKuHuXAgqs6vXmK4sY7C7dykqGbKLXVURa55Jd4aGmBp2EX",
  "key26": "498fa4TfPag12CxkwYJRe7K8FFA9Ac9Xxjh9LGefCNk7kwfu83apXe6kE9RPYWjqZhn3gKMnfM9nUeiLBDQAi2gQ",
  "key27": "3U1dnJRfJFYvSmC3wMaErfrtYsLowGaF6z18VeBBHnELHEuCAkWH6f8o3LFhecLG5TZPJ8aJaAyV34KC9DopwKQY",
  "key28": "4bFL4sLbdYUdt6YGHZmgA4a1Y5AnjPv4kemPTVVMGZhaRu6ipAtcp7QFRXL2VEdsuLQq2hcwdbk1jutJqjJrQipx",
  "key29": "2Y3N8kaSmjJUJoG4AKuBUnzEWDS2TytiggcwjRWF4DWKaZnG14oE2bH2nBXYfmv13n19Yim7XDsg1T7RASVS3Ggo",
  "key30": "Sy2fvSRjJ3KscwouXDp5KrnfdMUnkgC87PJmVhr3CRnLSvo3MJ1GWJ2xHpmh5xfcpWPnWQEaige3bQY3ZZx7RVr",
  "key31": "57dxXCkHYeU7n7UEbp7Q4WNtNhsyoMYTJeKJui3FNneCzQa5s9t8z5RBkYMc1zi86YhqjXCeDAVTJLfUd1ypUesJ",
  "key32": "5YuCuK271nY8KC3r8Hn4tTBKt1PxHfTvEL8t9DUveZXNiDQDuVKsw1dy2A85woRa4quo8v9L724TaCHw7fmwN1qK",
  "key33": "R6ipsNN1AHSX5sopRmAfWpdG9tN63eAPHeqs5buyGZ3KPxA795qW2EyBbPC3H51RhRXZQtCzRyNkRwcVxnKos95"
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
