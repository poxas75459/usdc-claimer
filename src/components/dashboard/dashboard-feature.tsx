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
    "2y6xBjPHPGHNnJjM2jRcT3wqjKyen899zDpcGmaFuhPFZEHpMd5sskjWRsmEMb1Dx3dxGzgUVAuurcxsGPhZNR3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6M3MmcoRNJgwiJQ8t1P5pix4ugztbu4bJi723AewSZhm2KZYCun76QaNhbaQVg7wMzbiToSgY7dYbERjHtL5t7",
  "key1": "5BxPcLUAyWXkxM48cafusDecCXDb2ubizVcApExUpkjWvJAnKDP7AztRgtD7QkAn5EG4d7LNV7cqDawhR2oWsggf",
  "key2": "3tYNTssoZB7Wbh2aDqUSg7d2mvnTKJPCALZ6j8uLNLZe67H7oXMeLSK233g3UFD6tx3d3G2e4xiaSDeYejqRCmrM",
  "key3": "27oGqyWACY8T5cfuuqxMvWXUqGRF5ovuTq5b1aztZFanevqUCzisFHFbxiaCpdFbHsk147AaN9j3qczT4ZydCZoW",
  "key4": "3vjPhzAq6Cg9Aq56D3prqgqouCfQdGWxdGBLHuEjzLTqZbferMEqBH1H3x5GkfUjuBgywLizoVL4hqnYoUyA49RL",
  "key5": "2Ef63rFRXx7qJ1LLJQ5vEstXRDKnT7fabu9qQeD6nrTMpNuzFduwTFao1VXSF5ZTL8XweZ39GQpDFgmbajqMSJJB",
  "key6": "64J58vzqNnRUZQGvJnyrYBhxDC3MNx1AuActfpomc8WFtjriCNqsczQRNmzbgg6CNmwmMkJedjYxJcRsRW5VWgZz",
  "key7": "4MRvbtqtssQpdkSRZ7NxVKmZApbBPau9LR2Rgx7xNTU5uKHDLcweMK24DAKf9kotaL17HkbmgQrren5oaRCDDfU1",
  "key8": "3dF5toBSaZEcq1Do3hq4KAzkGdmTGoFz6JiozJijF8rpv7UC88oA4EfQ1MTATmWK6wwd1FTFC8cnR5A2FHmquLHa",
  "key9": "62ocoJSTEDcN4FAgqdoet5qkKzSDqiymAdCXentiMzwL24u6WPCs4ntLLTgu4K1oKThpykKrAratXGu7oPFMGMKR",
  "key10": "jEFP7xEHi2pUXFhyCfKMo1Ly5idVCnK7sGDEgKBRfyu4S3xmNa1rq597tRLQud8o7YdBgpyAszKpBFhbh9BtmAq",
  "key11": "4mPrb3sDWv54PNXx1zPBGCy17LhFvVZSpBV81uZk24Es7fTz8At1K2KbnmXCwpFxAc24MjcwACpe5M3V8EuBjaUH",
  "key12": "4W7Hjj8ecuzgbn7wZqsWdvHVa4XaUci9yTxxDtmRgrTvDAzQAJG93bERU3xR2Si59iGfBx6TSJECw8W9dK83CBMf",
  "key13": "ghpwA95Ps4xd1y3Gh7pEivfjJ1Kexfsex4Njb76TpiaQnfK5FW8khYLrKusbU8Y1n3rxPR1Pfv3XSmfh9vGQc4i",
  "key14": "5voPMFVVJqZB9dDPPLNu5KuHthSZyWaFusbtv1DCG3pwM6gyqzpitqvC7DH3bWcn4A8Hq3NJsSA9VioaR2Z4ctG",
  "key15": "3orknPHGQ1ViWRGoSqVYrkpmwtLeQXHghhtckcWnpAoYcYiz339Yk14CkLCcTyvJM8tRGE4av91gjPG4qBrNGGi9",
  "key16": "3bDUq6Lx6SotdAem7ergVGcQXnbga2bmw87YgXYBGTexDSJx28r81RPBwLMU8bT7EapL4yEhrU96ZC8PfUrbkx9Z",
  "key17": "uN1aT8aiE6jzG4XgdueEpt1w4SMCVYYYCS8an1tceV8ZasqTpexf4H3hkG3ss7UxgB7YMtu1AQpT1AT7oJyC4bP",
  "key18": "5BaDRxCyPvDFSBcTfhQ2C5KVaLmKnYHZa2v56cbwVLcvtBkN2ZoRXBpcSyPq8YEv1KSd9uoRhC587kyBMfzzyFxH",
  "key19": "RuVSCv3L61yN1yaiFnRiv9moDTzCox923XXBEfbaKFr3atYXYU3a9DcotDzqrkRp3ndSRrDmukX29GTxySHpAEy",
  "key20": "4tGhKm1KDdHmT5xQAr3aSG6NB4TmcvyHvAUubah8auqfmT2mbAmFmJgNBTDkeEQwapvV6Q2aYKgTNh64V8Af79oQ",
  "key21": "2C9pN1vK6DspBQjmZFVLEqC5tzHvttjTxTSCHPnr9Yb26fWxKooGNSx2n9RK63iGdGW7RKEY86jamJtFSKjgZacP",
  "key22": "3xwwDQxdyb2xA8xpJBBjRhKttfeN35RKrZE8ar1P1RXaY5pbpfttQUMwK1SrAmXDLeGzhP4QFYgSDPYYf4VZzWmR",
  "key23": "4QNnb5wthLJ3yrN91f5Co72cojkVnbSU8TodKYpfyWxpQnyUEP2DSgkDByYmSjcfhiQr5HNByKD5xm2SiHwhXaYh",
  "key24": "56teS57uS1yiyvR4b69gXWA4TyVJFjUPdcNzJWYbVdvetJkDKsZENyfaVUa7oiDL9frj2nZQZ7Uhwvyb8Rp6QzdT",
  "key25": "4hNj3P8d9HszaEAEbwN7pxf27A1eZ9Td6vVsMeAkGYnkqUKUrTMFno4BnsiHCrwUycEeEESCRwW5jjb7R72cQ5ui",
  "key26": "4RQjBTDEtFXGEkJCUqF95Skpz81hvpeCm9VJ9D4HdhXZ8VR6PJ2MdAMVeLHJRF4oj6T1Sq3VXkhEnCnrHd7vCyk6",
  "key27": "3QZwUio1fL5KaTVvyzCAh3p583C95BqPJ2Rn64wE4bn7rcjpKBrZdLADALxahz18WSPQFXcY5WgN74wvYtF3UoLi",
  "key28": "4xntqurAgbGzk4Nh9ZGtnvoGCfJ3advBpQ5T9xAEk6dsoqPsUTQH7kaxi8BjXjfFHBBnhG4vhL1Ng1CWvyhNLaD",
  "key29": "592Qhjy1gGXpfuGwMxnhBFYut2u7TudJwq1WW7rsei74YTDENxu8WKQoPdLhtLQzdff28LAWsvCaGKPsRSwCsCRF",
  "key30": "S1SrEXunfvTC7z11QLswd84XUSCWKTPnAhCQ1RwzuAq5DnN2WShwrnNZhRQnPyR4ogTPJjVvoMzCbHVL4m5WekW",
  "key31": "5pcB2nN5vuGAcxMbEbXDEFKrbiaPNaQLdx4BVff3K2mVSttYG4yCYhJUuoj6yCY4wjrUcKMZ181EvvCJgpJZbSgm",
  "key32": "2nmT42pX8gedDgEsxNVezSwvaHq7frGXUpF98SmqYRjgGb1VAn9dStpuY4ShuyXPYHC8ga2HG7u6YQyQYaaEEheh",
  "key33": "3wo4mAy1oMmaYoNoAfnaueL6U12N2d9Lgitr8JEaamBZtP79F6SevqMNeC2aKM5bktGgAAenp9FsCs4DGJ2YfX6X",
  "key34": "2eYGyZfKxL6cctnkhjZh8hq3P7yEqfdcrDkfXcrDnU2Uj2AzzGCgT6UixewVnfKPSxyiVrpV5BUuar5H1WEpxW4t",
  "key35": "36K5PGoz9h2Ch9HxUmMF12CrTmJHRoADgPb1hLc2T4cEXfQRNYe93mDkC6HiEAkuySQwgEtHkLBKcYCcao7a8CBg",
  "key36": "4jG47tUnfhAy3H7XsuAjXmjhger6hKu7oNSMvbnDPndzdy3Z5XjwPtErRUkd5p6pFGg3Cv88Eh2AEJd798p7wv2E",
  "key37": "5Men8muZtbke46tuFLz6wqM6LsyeMEhm8AZhE8aofaCJ7yVxsDc5miGkXwT613cAzQhxxfNNLfU4EAFNP8kNE8ez",
  "key38": "rwjmqGzwVjfUL2j62BFHp7Kd1o1pWRCWD3XC6uBRfEzR4zDNJp2jpBaDaJuw6Xfo6Lw7pU8K2T641axgZSv2yQe",
  "key39": "2qD41qWZYnrGxnixUoZ9xo4EejD4CU42YnQFTUdX1AqVxPxUWweN99bkuAxnG37ntzBC87JAfqd1iXBckhYQvSLR",
  "key40": "3NbRzMGGSXxoQNsGBTrXhB1TbfQPCTTL8hiBVNmHhQeGb9K8ZApVapCXLUGkgUebFcqMFWXbm1gS6ujTHL6KQrmU",
  "key41": "4qZKRtSYRQJ9xWnheMZy3xHxqE5X96BL3K4PXZZc837nuaceSZLBW69f4xnnYPbb9JNYgqaLRoo28pvRTv5v5yYD",
  "key42": "62J7v8syxGbDbWzKGyYQhmEqFtzPysEa3CzZwzjLtLBTweuYFeiExNEF3SwnprsQg8a6umoGde896fFNgZ3ksQo7",
  "key43": "4u35DXpXBEUaCTwAYYeqrDEQ2N2JL26opNu8FYPCLwBBAKgRDGGQnVMx4KhG36kRknTBcbYnVUhM4ku432BZETSF",
  "key44": "4VrkPBgnSeWMdcZr2vupcdupFyaKvQZerGvo6H48drFo2BAmy1k4SPD2gLEjGU8WSoXKNX2dcKaZChjVPhksNC3",
  "key45": "3X1tBqzC6u9b9xLGiHTRrbx8MS2xPDex6qAqAMLjf1RE3vNxE65WGyuhrVAzaNm6ykC8k6VzevcBSVxEqRrhmTDs",
  "key46": "4noR9KKLNWpqMchM1oGU3dE7VVorv9gFCUVSq1sRs4ZQ8Rvn9V2TL3meCZNCvDojXjA41wXRvtfDrFfGtxRrDY2k"
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
