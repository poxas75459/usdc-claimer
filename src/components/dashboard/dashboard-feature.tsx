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
    "26apKCQesDLwmrf8cHzPC4CcsQiLoUoVSvUQMH7mHyg3Q6vD4M7JhpMFbWrZ66s84aSC2KuYm7qx7t252EvKUtmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkejvvCv5jnTvwyxWM8FJMAhNVz85CnJ83ecSo1Gwknx2pwaN3S5sUe8ZQ8SczYBS1aFJNuKya7ErNjVfW6SEN6",
  "key1": "3Qh7X9Ej4fyoZytS2vfRtf1RT7E5KtAV5yQRcvHzrfLzfE6NusJokZRp332CFs5DWx2VPMoNRVr1kh5HXeQwzktM",
  "key2": "5CXU2Mg39ACNWSALsQ1Pzvwun63zLUMdYXKjceHvU51x8MXFaqYBGo8mzaoQpVR94WPcUXngKB9GSKq9K7cUNPRp",
  "key3": "5kg6UuLxV3h8tzdBMdsHTSzQfjAYm3FzGNJmyHb1FyRcodcytcKHB7jF9vwHhwLkMKj2SmwF2ZicKBRLLScW9Kbj",
  "key4": "eMRq2kpV7KEThUmJBZ9kFL4AnGwwDsc14XvyrTNMKaq99Qutu6roJhb6cqcvoYj9tW7ib4nSJexcKBacpHst5EV",
  "key5": "2CcfuRC6paSXGrTNHKf3ybifUuaCuJkEWpuk1TNbzGmqzTQK7xyKH3rMERpBwpgmAztnBqJ3GoSJhmEM4xY3ZvWY",
  "key6": "4kiTboV2WtAaGPmw9CMF1K3Zc5898eJYibSgtoFtd8QJExeVhPoHaCcjaPYk9zjxxswhcZXzPQqYqPP645KbbPPE",
  "key7": "f6ouiVsgU1WXwiapns3gEfSCSQ1pGCDaBLPtKhBv1bAtidYy5cw4tWnrR7hV1QS5AW2chrLrP2rmAiChgAGwzqb",
  "key8": "3HdNi7t82Wto9vFxpyLhCqZGevny8Siem9ffbG4fmgzZU67h67fAUFwDc6WpHUf6UPYwgUwfW8mVk49YvuKbPfR4",
  "key9": "5pcCPYc8T5ZPMmVk7cYTbMXFZxep1rfeoVjEgfdbiPf9upfuK3whQbgk3AA9fDPtvzQYKwGxuNoGFj6iWbSJdH65",
  "key10": "2vQ7JZL6QaydBBVQnGG8bLxUNxeHuAyMVufUUAgvMGyzH3bcNpoHhXeXqQ4p6epjEiz4sMyWTxCRq285DzQgfoEd",
  "key11": "41zs1qKBkR46f61JaVoTcGQVdmbs2mWiWtGiy8f85kkLS8G7kSCkk5mDLpoURLqCSYQDwEjXjcdN4hmvjEzvo4jW",
  "key12": "2box7Ucmk5n1sjAhi2PPCXBnuM5AhN1SvqzP5zNisrFRvjqDfXgdkPKJHnbN9y7dvgtrRg649Y3HgDXdJt14Hc4X",
  "key13": "5rNuwAghFf1QfMrVFt3PrVfBAioVCq7f46npk4NhakSa1ENYZUDUuN3FrUZ6e6DknMbsp3FJwtkQv3Tksa9rWiB3",
  "key14": "5pmhffTXvG52VB1xgQsajVAzVg4qk7LV3UdBX7pvUnT2FtfTWS39EXqLj2Giu61s7Wym44YBH8LDyfBxEZa1Wakm",
  "key15": "64yEzrQgZaKKoEJXgac4qzfewTqkQY2zb7pspqvZ39guokyCB8BfqU4fWktXhwqtkpvAcYdTxFyb9Qex6xFQWiP7",
  "key16": "3eSjHfXH6nDLkvji6HrJ6aRrqMCknDArr8hybA9MYS4HGH8R7aHE2N5nkiLs6rKDt1C8rLgjTGZzpzeXb6nnRGak",
  "key17": "2gf2LXEzpXWNj2kgi8XwVi8FW8C9T7nFSV4bQzHKL1FADtChkkUoah3Bar8iKPcrzzGSQZSYPeSc13vQM2dPRftb",
  "key18": "2Pz3wXJcgWv1LvhHQ8WKmAh2zatSTrkbyG9YxA3eE67H9ZWFkHFZuuTfVgjZG4diju5id3hh9rAmF4UPL2DkCP2C",
  "key19": "66SHpQnzeEccukNhDpgpVgWDz4ca6qxqc469qjG3retYm6VEMRKHJdknN7wrka8vM3aVFK6RiugpKfSHHiN3QnV9",
  "key20": "4EnGcmi32abYSLdhUEqd1edJh8nvBFG7sihJF22MwwLdSTGhZ4dUTmNQsVFgdfbWLax7wB2zu2fV851QNZPBJtMZ",
  "key21": "7H5Xvk4krNHbJGsCdST21raGMxBaPTRipFXtiey3SLd4R9s2PMjSwZZhyLRP4UXAQFgCc22ZUKFtE982QCZgDiV",
  "key22": "3TyUYazAHB4ZpNU3BFKcuagvUCPPPSAC3Lsjoexn48stXozVvxS3iUVX1RcXZaanfJT2TzYk2yATrePDUA1386ek",
  "key23": "33FkGJ7gAsnMnEYvZ2TJK5eSGpBS2GxqzE449vT2PDDpv4xeTxGSEJ3uEXEE5gPhYozVJ4v2MFM4zoXNHRwYTr93",
  "key24": "4fvd4H3VwwDweuUuQat5u3sDwsjwthUsf5YutMHjdoo8X1HaJkULxTcP2U6u6Fqzrzx9Wrf2nQ8pB58wjoCCBEj5",
  "key25": "2iFuZCRjKTz5jMxzzSqMWvhqJNDRw7HRCe7izY22ph6o8SgSe6xYQzKx3yuueVRs5wkQU9hCWkhnMFpxBJxhFoJn",
  "key26": "555n1w5uWnntcyPR7gwcPVSavqbCb84EAa2QCdn6tg2XtHpU8SVbA2NfNmCTFGCyBNJeaWRV4kjGkWbPBiRnhQn8",
  "key27": "3EgdTEgs9bxy4EgVR3iq8chNPmLiM7EKwGvc9zRB33MmUEQMinWdKNUspCo4ggi1ifbZahFyXrnFGBoQYjbTYES8",
  "key28": "KRhMvgV5iBNwr4Kxc9kNmutcv67i5LYq42QcYBxfB57KEnStN2QRwXJRnkxFeorW4DZarAWwGN45wCdFDeovWbq",
  "key29": "4TKE5Lmb848JBms3BA5R6b9ykopjdKRcexGMo35jp92xmwdAqJwNC3k51DjBSDyNzafNPu9S5A2BnWXg2nC75rKp",
  "key30": "3xMcniZv1XUKMbp4VFHYRLCa7yG4jjVF62q8i5RKsUdPRswjAmH43fSYVLi3AgLtvxK9NEnPcTChPnKvtmsgFdMc",
  "key31": "3obYKgYLRGoAXQLkq4jqsUuAcdMDf7DBgRbRRDwh9gVdLYwz7VbWVG31g19ATqYFCrPcy4BMqXpCSWm9cttpfSK2",
  "key32": "4MKFsicAMvHf5ZejeZu5WyFZFZQkEMTUk6VCqQD26bsucSzbPDqBMctaNWcsKsLfaTUsEjnxQRq61jKbn6mviMBe",
  "key33": "4RAKULSfA5MxLqBnTq4R5dLcJPrdSFYSQRNqUeAAj61DyS2AWrGMRkWuoSQWV8svzoQLuC1WAFpD3jnvie7kTM7S",
  "key34": "2YoRR3a7e1yGZrd87eTYG9oQjnGiYcwCdDDM9h4nXmU6wV9JUde6SC3bCAC84c7tz6DTTdTKk37cWH4x8LUNaZwE",
  "key35": "4rCehRxEFF3X9h45tgYYdxFpZXhFcjBui5tmSrmArvRbjRBru8yoVheKoS956AHR1aKMUfXETeuXMn3zfcW82BjY",
  "key36": "3raYP2oNB4D6JjQaeNmbEU31KmJ9CNoPiabvLa3BHenuP76UQmAXBBcYjTRywDqwHqPpQoAPqTqBy8pG5mZiE4WS",
  "key37": "63fv8vzzyeiwMi8WZMgSSPwDkymPnvHu6QJKHvaM5F74UX1TicB4VLFSwcsmsZM984Mm96Qn4UWCRmMSDMooVtDp",
  "key38": "V4MVPrmK2fsVVQrAbEF9QG4d26EibzBBKAQzoB3kyWjKXPK6Lfu4hhbCJxoc9iHNkfKPJr6dj7tpbx1AfHm8RNj",
  "key39": "3SWpFJtQHLELkq3s6Vm36pM7Ra6QFCW83XnxLtQkezpyPaHsnixedywdJsNqDGVPwLo5GUhYSx363ZW346VpYKqo",
  "key40": "3ESvNQQSVnoVBk8r8Bn35wEpskYkHww6UDTrV6VjVRTahFA3ysebmnHt23fdHJU3SjUHcgiugPontbvqTJKgTnNS",
  "key41": "wyV8Xpn5KDELDXTSeuyazfs85YfywujjBejdnREHWHAt4UAAwPk7PWTdo3SqW4Rpbe1xeiQareriP3snWZncy6N",
  "key42": "3HgJYSPvUSQpmDVxUNkEgVkki6eFVGEcR5vQrgyVzy3JWWYtABYowkxfEdfLvsR4VVETnnn6NSrk5NZkpCNbYJwQ",
  "key43": "Fiaz8Yg2TMWsUDdf5FvK2qkNy1QTTRfbyr1VxMGsTxNw79B7DG4EcZRWHNQATAvP3ESs7jCymK47LPPoAxKNN83",
  "key44": "4ZKyoBpWwqkQRJpMPFz28o9Ktc6HVsSxvT2EAzp3fyevtjGBV5jwMSVb4CtKjBy9bvknR9N71SFUHfY28UmSaNTi"
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
