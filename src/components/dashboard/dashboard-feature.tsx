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
    "5pYpBE3buZDHU6HcWeWqSQQE3qKsd781MFXHTwBK4GB6iDcLYaXkUh66K6SQLmpKWiAbR2TWH17KybWrM3QHgeBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qg1v8ZADxTqLY8b7CYcUbb8dKraPeNnNmG5AroDu6jgdsBhuXnKvC1NaHMoQd4LUF9QqMNaXmZoepRpqbUdyHox",
  "key1": "25qHoZ8VmMVXmMjBiex8BmzCfe7Mj8ajBj1F2XPy53dp3QVnsR5eFcAEDdx2h5g3dHcEjZEP9h9xGpEjrcsTxsxw",
  "key2": "2RAxWJgVQRmiG25UkKXCdWTbM3bvrudgQnuPZPadrecH3jTSnmf4cwnpj1p6GskbNy6Nd4qFQA4yTD6UPLpWHNPu",
  "key3": "3VsSPYqRrAKrHiKcNvMdz2kGXCQghGTtVfdxJ97EjsbWj5gKcETZemPhfkAdP5vTznebZLUc8nii5aJBjAAYdh2",
  "key4": "2JFDU5wWV2vVcpPo9tXZfQrckPeEmmnXWJdkSbHvU4KEDCgLxSeWkfW4tMFs8Cn2ZA8kNHfAxVq5oeNxwSAtTPCe",
  "key5": "26iRNCt2TvmX8w3dtBLa2vhjjbsjHrEFjg5tD4MhX2nDNYariF7ZEmVWzHYd17PxTgXaVVT51btE5WuEKUMc5s48",
  "key6": "2yRJMNMaMwz6bLvVNZbockv6UU2PuJowYg6ThENMd2yKNLLfipyzbZWr4Q5r7DHJNqLwxLRFei8qZrzYpJKFYLtv",
  "key7": "qUibpMUP7mUaGRAWx48aG3BaoaYy1ut4Y3j58TCjqbzYbCauB2P4z81TVkDaReLxDp5NqdAJMo34UxSZcHBopCF",
  "key8": "2tYn28MDy8x2G4NQj8oSWCNURWjVQCSzFkn1UEcKQcuZynRo8TiDKPjJNQ9GN1uprigD8vce98MFMf1rFQjhrmdj",
  "key9": "5csCcTcmqNDgosR3Tnu1D2AEMdv4uukq64nDUozy8ev541pgUPJ5SZ5DojfXdS5hVFoyDGytgNyCHxAdmgwUWAnq",
  "key10": "zTsP2WJyv7mV9A64Kkgi1AgPN895jBqV23ZzWLkYYZceqKn6WJbh3szQVK2jj7Jbtt4dvCmaKfXiiULs4HMwwfJ",
  "key11": "2y6Vb1GiFwY9DMjRcMWnBVY7DhTdVfJcd3hd4yFzVB89WNPhW1EWCNcXtjd2yX3gsHmTxBmq2SmC14eiWptQFa4E",
  "key12": "5iCoFLgJeEeVCFbVqLdLGoBTP8NiM9bXUs7HBRycPxo3cZ6wzKSzcjp5P5h4pNcTypreHU7E2B3qanYqZepLipjd",
  "key13": "5cXSEvt95svB9L4t23e6qY6uae6ZnHRDGxYvaQMViaH3aAvkFYQJxJMQjqssRPegUc9vanfYA8pm1s6WomYrRAv6",
  "key14": "5486Z6VJTeCmYTeNFRSQaiSzGDvFWFPn2kWK6mhhg7kaTavWngaDvYMxCZvYWatnyPyENfQpyr23UfMYvdVnnUAs",
  "key15": "5mAiCPXdK4r4ezVKVhvjoDuDCPtMfx7EQhgpkbWhVMuGWQLooywqiREofJXG7Xv9YyUkiT9tHpFbgYa4tumigkUh",
  "key16": "3RyDb9maovAVsFGm8z6dZxTozDXLGMd75nHbxsXwZaVLAj87AaYpRJQX3BvUjy7edjSTWah81JafaZUY21RCVQA6",
  "key17": "2Drnmh77Rwrx5zZFSBUQB1hK32DYrhHmNMwYF1Y9dW24zGwpPmztjvcDBaMgKqwUAyQVHUmBBBLHD6CujWnKuCCu",
  "key18": "3pgcyaGxy1JtqKso4FkHohhDijFkSXCtNXijiQ6htDgcAFQadYc1sE1J4UbtyduzXDc5uPWyKSVd2qCSxw5MbJGp",
  "key19": "4TC2jXzethtqRCjxzVzK3zBmTwhVKpD8haXWkVYReacx9mY22FARLfGvk9GfxXZkEsgGnppRKgskP7pvWngAe4t5",
  "key20": "2DS3dih7FjkdaCzStX7iYJeyMrA2Fxm6BV5TXpLsVpLovU4bQaoW6WZsq59ba7Cp6AjGMLwteAJkGLjd78kqaCJY",
  "key21": "3rkbB6VwABCtkxNfCJmDhBZtfHFWEkseFje4217Gsjaotwu4P3AagJrvrMmg99K79cLkNipzK9j5tN2kcNgjFJ48",
  "key22": "3WsqGa7BLy8mYK8L2kFmGtJ7NG5XtGsxfByXqRRfC9YKFDpiRY1fqbMuDjbXSwUYv6ASRmUhbQajCYyZDSd1ufsF",
  "key23": "5kUjBuaxW619xgJHJrMrmMnpjcUJCzUSNNqpDVURpHos1kNx6P6vyzBKCgWxubbmmW7TSWTgDEPZnaHh4AMkhy2c",
  "key24": "K8mTkSdwa6sCLTzt7JtoFN4KRrAERcKBv2ZQSyD9wJxFAqyT2xj36SRpUtgScBSiCLCPLdDxThyqJUD7MDQTW82",
  "key25": "R1tSuuvJMQQpVQCY5znCy5jKmRkGu1i3j4MTNZNJMsZULZzeMH3xhcvXAgfNteESdBQQ1zkfgEUB7ejSo3x6sXM",
  "key26": "2dEC3dzwupk5bTHXzYCmBPeupfUwV1Dy7uVtkFwybFbWebV97GgyXTGPqDf3LEX7fz2SZNDni48y8KTMF5CdunJP",
  "key27": "5nZRExsFLiQKTHC18G4TBKehG3DQfBUZvxfx64BEiD1RZERgbAXuajpKZRkUvxpjS875khFginBxP3HdPVW1BXkj",
  "key28": "5APr7WVz7YsoUxFT3tvhKvamMzVpX2qXTdAyyRKBKsuQBLVsFwTgJdm3cXFzRii7EMyLdfLyCPRXhC54bgApqwb9",
  "key29": "5dqsUnQrSQj4Ub8wYpmfTtRmQkGmL8o1SfrvpXvBzzNeLczHTwxQTTWQuitRhLUjt9CoVJXFUAwiBVniJSw4kH4i",
  "key30": "2wBmAmRZ7KPR9k1JPbb7Bg6aSitTVudzieEGESDzDPHzqjnKM3W29bDKqr6x9YimgvAX1QKxDT3HCciKgshgpJ6x",
  "key31": "5p8H8tdhdqiAzd1vfozcjipLjEv4BoR3cxZ2HUurP5tZhDXQsyacbsvS2JaLshd1pdSBhPfgURqnnr6kzati2cpi",
  "key32": "4vDvrwT4ebBfRo8rCsGpgCvBQqzRRFWpENHjS6CnQKYLkjdyi3g2wTB2oWirArsUH9NMyFWxA8ZtSmj8Y3NWQNyV",
  "key33": "5wGMkAnVPM7BUwymahWecpFqGeP16ywfXGGZuNEGmuxGryN3VdcGiEqqNdFXRhzd8nZ7z1YvBBe5W1yddtLkPRef",
  "key34": "3yJK3qaZfHGWP33XJQ9XYx5KcX38gYnje9ixRP21BESFtpZVYyNbkWf47Hqb6ZSZ5wJ9GKdCGbtim4QjyjF8CSZh",
  "key35": "4g6p3STqMZbDmy8mZQe3E4cmXmx5SCPtocGqsY2UHsSLKwiGkHo4N6sK54tsGUUyye6Yx8SYpdsvwF5zFpa6cRvb",
  "key36": "Q8wxryXzzXQsrTv1sNGdVHfF6e1xhSp4c6kKhavCTmtiKhD6L9AL33VG1tD275WBfhA81ByUESko7F5vuQAe8q5",
  "key37": "3iavie1gteQ5JqhVuGErmJ4SLu1knS3BMhktC9KHV659in1AqEvCr3BmKbyGpY8uDReftmLhaNXvX79M2S4vJn3V",
  "key38": "1rZVnVPVSAgvu8xTcJtAwniZgLYuvTZNNW2n15ChiVKxTsLYofrP1gXMS8GY9pFV4jF8MVKLTxXQYw2N4RNssjX",
  "key39": "4GUUMHLCGxegzUDnQZsw5gJsWbRmJE2b4oAChWKMMrZjUD6eXpS6cV6TgAzZSXCdMfFPJS4ejApze5BX7mCdP1AF",
  "key40": "5TQggMRLEafzau1chKZCAtHDVmBbnvZ9zKcNwrwgrpE4kPyr3s9Fihqxy2aMbvFEuPbt97iidH1tqdgC6Tp6zkwt"
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
