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
    "J8jPk76cqjZxzHWqsUwTLvVRcoWQPaHkkSNr3fqUEDCsp2HURCsVFvvNoZHUxFwFhwfdM3j7eS4rNBfhVS4r2C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sq1ZXbhg6v4tbVRXs65AcNa2s4s6w7S3JRXwRjNFBJpzeiExmbXYeMG2vm75FY1kiYm3i5eGrUk5Z2kNKKCS9TT",
  "key1": "2vyCwj1N55eEPufYef38SzTzpcZGbUffRQLyNSjr4ryAqxMsvUQ6f8unZHkdEb3zMpu7rAzRMzhhkd5XWhcWg14p",
  "key2": "31EKJQucoURUj3H1PLc1w979MCQKckWUTeBU7j6gc23viE1TjGh6uauLpf7aZuBopqQKDmopcduJr6VGxr1iDMyz",
  "key3": "4bjK1JpNbRcPNUX6bqar7HcvdCCSD4C5LfViS2SstJ3GkQjzf2tNhKs8RyyoMeWiz8ryEtAyUvp6DmRveEBvDq7a",
  "key4": "5Y9ABw5iZAnHqNHie94D3qum9eHPSCsp7GpYPRnPsEN1CejLrkVcbBipZGs8FjwMckfXFNBSKKg2Uc5hNTDEYjb3",
  "key5": "3Ru79ofQvUgujgEMrXJN1VS8xSX6PPRvhAzWbh32Fpr3YG1DPLgzJcxX16v3uh6pGs4kLqnhKpijvcttBjrRhMV",
  "key6": "ucin6jNu1fKux7erdnSSz1A7e117nGFyg9m1MPktzAoEn9ewJuzNjd5SNZVfChPrapqfaDBqxMbA6xzb4T3J3VE",
  "key7": "4Qj72snUar1KxnX8ccDpdSCzYWsgSfdx5oeiPpwRXAsnfavQRfNYQPCr4eQoHuRWv6PFmqRPmDJhB3huS3VpVzkU",
  "key8": "2ku3P7JWJnLsiarJGRceVc9rJxomTuaaTx2Z5mvPQunDMVB9BNTfHfvZsPUjb6q3KQKr6PdVCwD4yADvZxtJ1Rv1",
  "key9": "3SxJaA8tPaJU7Zw5MFnPoYKDqfHwzGciZVcaXm74i3fK2c14sUPKBcQ1YyME48ngLLYY219abPnEHMU7zADFUBg6",
  "key10": "4y2fXhR4nZnnj5Qa2DD7NHw8nc4UH4RMvnR7nGbpD7Z1dvR4oAZzSYJdDLv9gkJYz6vXLVDCrkTkQBnpi9zT36Kj",
  "key11": "3pfstuidx4AwBBucwAQwcEzKzM5HRpiRNYFfoZ8mELWKrGz2L9UPgBij8pLKfxgro6S8uYSTYFh6w8sfUJR3FR87",
  "key12": "2NsDnU9kKL3e39RnaTunG4ZbTKQcK3HLV2EiykkFiFJguUtLMj7RcALDyP7g7oNj9twaHb3VMJrwsNEywzDqJABv",
  "key13": "5nxpq7xGiqgjNwkYFNG2wkGtVEND7W2CuqFMPxyxPZtAbrMhtrsRczJWnkgNi2V5jZjk5GqZNgeEgytPZrkW7uwk",
  "key14": "2DgKAeQtzfQP8kuyWBFdmYDAGCESqVYRYpbqULUVBK3sWjYxeNAWfSEPTp1g4XEunkpCVqVwhabZR1dXFWVsRe84",
  "key15": "ZJhJ43nNmoy6cz1QvHzcagWNLbusrewgPG6KUJbrW1W9gGGvHNzEY5iXHN5ZKTkjfq3F4StyMFivT1BQbQfN9nQ",
  "key16": "3yud6b2A2rgKDvuHyshujrSmXfHjMxE882crj7LKYrU7kZ9v2u786zamqf4tuiYDaA5p4wyWNapmqjk4qVxwH1we",
  "key17": "gVCfW9ZvRh2CzcgzMYF23hXp8ayJ1SWagN4zBrGKcwfRv56VjBqCStX7TnfWZGUCQygUZbwG4CCckrTftKnDYpP",
  "key18": "52uPF7xxXTcbxzaZgrDQnCiPSrgL8aY5Q6WpsrWAQsDoZKBCUe65x7grE1xhFLXcfV7fPZTPmPPe52zQLVSvDDad",
  "key19": "S84k2Si88eC4fWPgE3X7HdfBbmvVVkLk3wTd15ajaW3SjcMj3up2CSMwLwTkG9xPaT3XLXzBoicMW1HJqSpBycy",
  "key20": "3Mc3sLknQxmM7TkGyTFJ5gfkfzgewfBNvyY3Lh8iq5CLvoFXuyLJvAn4JZrkcfJHExY4PqzGzmcw4oje2RUVSz1V",
  "key21": "3PjUzByKxCbdZC6CvGumPyugm9HT9bCKb9s84mXWo7wFJ1aUa5erhNiicCyeKWgBd7ajmH3tT9Z7CPUHdGcRq1da",
  "key22": "mfry5mYCk2hRRHTiSDyTDDDJZ7USLk88BiSEdqKagNP7kSneLvFbF3CbTWU6HjuwQAb57SmHdzgUE9rDzRNyH5y",
  "key23": "TbMJX7CnzQWe8a48T6Cqsm5aV97BCgfmUokpNTsQVhMUi9f8uCtiGL8wRYDcRtzfN1qVHLDSS2RQirunZH32Lra",
  "key24": "3u7f6B6fP8uEnW2sMutE2BwnSfh8E42dkTBxDnUZm5FB8Uqjcn7do7iH4Y9WqUsrmukk3BME16a6ARaHhwS6j3PV",
  "key25": "5d6fzg3bLeeedeD86Fcu8xBeDptVCu8srjKBonbcs1fSBoWH8g4dGnjUnQVAHSnwJEGc9jCvv8yEATDTqpk2oGSn",
  "key26": "4rLc5vegMCYeR3fWvDq4RjNu3rd1gXHvzv8FjevatM2zK9aBF1H39ezHuqpaWk2vc65fDzbmNx4uXfUahQPQ91W1",
  "key27": "2AmFwLovQG3ubxcHsi5kJ4kZ1TBxfn7xWmov4PM3PrLv1h6DkoTeQ6nfji6UMoFJBbdrhFmVLJBi7bPKUE7kSW91",
  "key28": "DkE4pLs5FGB85XVKD6vFtfaPZu3AQF5EBf54Xm84huhTakqi7hS9fF6dToM4K5WFmPqiQfKmwZY9djdnptAVnCt",
  "key29": "5oMVbBY2TwNiqTj5K5r1Ycxxd18MfsdLBXQC1qoHFrML1MayBXvpK53YS54f3XuFx5wAURw4CuEAmcnzGkux39Kw",
  "key30": "58qYxB8F4k3prufQp4yc1rrq1z6X1dTayRS4XwAWYivR8MNUasPhTdvLmZ6dxtfeGJv3cC6Z51NMeuxQGSTfEwVR",
  "key31": "2168DMpavnNp14qPBe563cr65SVet9tskYxpyJDn3MaqBUaeDmSa2NQ9ztMr9mawW8tNua4ixwohoxQ2u355LNZx",
  "key32": "3vqr48JurzgN7UCZVr7fCU8JJx953X5RNSYVrYCM9RN8waW2ubE4bEfD74kdDi1ok95EcezdyQykt8ef57TsyEgh",
  "key33": "VjpJAonCrY49xiYQVq7HEvUrEagBg4ycaTmUG6LHyeAZwxH55nAZEyPYWbLzBQmh3Dn3xJnBwh6pf3ujEZCiU1v",
  "key34": "3sFa6oRNde1brCr1jM742BmJSgnPxJaRuKq2qC6vXghTsqCuMAwbvpG21Thw7ZXV5kxGmvfeeibQGGDcbJonrNon",
  "key35": "5exgUTdCxSrskaFDVvxuoNoENSq6URSnHQNqBhkfB4MbbrMfwwPAevTseKRaajrzj1VedKFS1As4Q64E97vcEbKz",
  "key36": "38Se7Zz6ysfu55YRGwAhat8mUKey7E2GseUsBMuMYBDNAuhGWp7UyrhEkeBTmCyK51zymPV6xa3DUuo7qk5idr4m",
  "key37": "WWg5KJD3ZBMLT9mfLaPxeKRjhjo4jCmKF9M8pco9dx5XFLsPZ3C2aXoVzq4q6rseFqPJhLxH7g7zJeLheeSKxV7",
  "key38": "5hMNJKhzrTXCQYse7Zzjdz2fWf2sxaksvZVLMUdePhGDiATFJEa88rWNdK3xsqMM5FkjLKqxGHSE9WqnXbnUFRgo",
  "key39": "4Fric2GNAUm7Jq5bYakq2MqZLnm1A6txVW7HdRSoESqZB4CRy272wyzachFbgLcQm2AdbZg6bK7kEKYBX1LDNzVv",
  "key40": "63ukb6ppCeJDNUGmX1JU583Ar5oxfYZE3EUsWrzmnVZ8ek7iuWpyWFyGyA67xn24kKDq3Mhny2cY6gnf1EzWXAWp",
  "key41": "UdQLmzUJ488ZKygExJXo5M7Ro3DUuE8hK2zPkjFpYvDFsRvcv7811UncowMq4N97ASQYRgorcSAG1HjeGU6wnRE",
  "key42": "3QTga3xmg2yr2y52QfvG1FXa88M7Ny7hYzqYLRVAzaFAfn13gMzK8S15PShYAS3WMZysahfWjAAp3br64BzcdUT5",
  "key43": "FWb1w3nt8QuQbT9oGF6TKp7PwgB4NjwjHA15ad9qYRYT9p78SApmEdZhMxjjQjYN8iCCZBrxuUT5ySUkNTH5xDP",
  "key44": "4pL7VUDDwLqxhRNtiL1yvUWCVHoBWHW1s6pxCS68rjEAb9cx8VeABifdSQFV8s1VFZA6iW62mEuQnY726Q94XsAe"
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
