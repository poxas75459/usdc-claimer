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
    "NBxeqnMpH3UgpX9CH8puNwqSXbDgwHapJSWWh5SpNSCa8tgDzqLNUXuMtEPG394dmGYTzpYMDk5BZJLw35mKaeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dhZ5QD2yvqa5spYjdKJ75cukDcizw63vNycHeR5eow1WKcvTDdXvW7ChoEnSDwZfaLEnRcVsV5vsC5dmPxtLDR",
  "key1": "4Ph14HHBteYYBnn58Lite5qna6BovL5rgCCQXzmxPtMYv5PC2eP2TDNCMqkbHmGa7BJZ7Tb7xcKosKtNZBSizxtg",
  "key2": "G5ui4p6AAqFSEJ8hRwYiCuFbk514rY6THvsPXSNV5vZmNMoiHbGobbWruFyHAsuqo9hYiBbFGER1LNcAmNAKdGw",
  "key3": "kbgiv4xVJVrLAEqCDyMMBt7RiqkMwwoAkPp2t1dJXotHuDU8ZuB2U3BMDH319tKconj7GTgj5kdU3D5VhFzgCve",
  "key4": "3TTCKQqUBXZHh4t8JoVTpRKCmWy4NiwfVtmEbnXjTjeGeswQXjdt7hpRoQcpfzpNtLcpT4x8wJLfhuxCbTxu5LHS",
  "key5": "5Ey6xD6prMSW8bb6Yu4J76jmYJaVSF832aWA5UzXWftkxCcbwkeJ4djK4eJN7ZrdAE3Pk2bSMpJAesSDDNPkbxn1",
  "key6": "3JHx4qKLC1yD2idAtwmdUSv31iew7oGaLBXUFKyQHUbV44YkrdByUjfZTShyekVh2ivELqYKXu9B51K22vE1ZU29",
  "key7": "5gtaXBdYWga9p79SgdpZuukT9m68AMXKRsRA5Te2McAHxEoRfdaA1wuCUnkptfErzrzKwSGUa6pTXsh6rGRFXXWR",
  "key8": "42CHbVXG5aKkMHZ2ruBoMNNDe643aMAjGuMLedWzFXg4CurC2nK3vUwEzhdPVMbPNdXK9d3GqvkqNNhweBNw24yE",
  "key9": "24ZPJtmimQkMZ4Uyuk7erD2a6zeDBue66LKoFKCNrXtqgJMyCtdmsojUQwfjHmhyd27H4aaqvtAsaJMiChtJCs8x",
  "key10": "3FmBqbdmfn7GZMi7374y1RtVnmFEU8CFUDuDBdVZhiaWDkRH9uttEkVFNZkq2mGYYgVetZMUscZWLwx55YExew4L",
  "key11": "38dZVUs3Zc93cexW7Moane4zzkEduPfsT7SEG37fFsePjAxXSuy29wkSKLFrDgti1GRUh4KNMMAA3bFEZx1cjsp",
  "key12": "y4GC2eqoxNMdzVdoPcQStQC7a6P6oWGsbfqnJZnVTjE8g1oEHUMQJUSzmJfEvAWtyrk3k1U7q51Y2XLUBxkMHJV",
  "key13": "5GmAVCNxfBcuB49ep9GY8QGvANp35ftpSJUKcBm2QDeR3TBoCCqdJJjLnxEE2uM7GthY19bCRdTsRKqi8LH4hQPG",
  "key14": "2eN7wWUFcwmk1dKXx8tPdRaf5JJe6c65seLfRMTo3LUm3gcvxxJ16ZqgMa6GSSL2yEFaMojxvqFktYha3VARGBLX",
  "key15": "T9nQH8cE63bE5vPit3P7YBDRXtY2s2c5uJN6oBiojgMTQgJLJrZJ2APX6QSX9FsgiLgm59eueLP7Vw5E9LgT6XX",
  "key16": "NdAkVgAkbwxT9smV6nTvkt3x57oguDnAiHSwLuL6Ykb1a7MMZwe1H31XfrJM41NpN4xCi2zU47fH5biUgmLfi4n",
  "key17": "2dGt8oVr7pmnu84CPM2FxtUrDd8o8DLXRAS7wJfY9BVSr3hzug8Hdb8VbmFU1ojq8tPv16DqmoGjj9xU7XPT3KFv",
  "key18": "2XxPufHAZHzazmp4KtGH5VV9QcpRsfwpY1aekCJf7suwpRUNUpqVuVZWfYPDSBSkioPNFjiZdHAkrhhQ22fqK1mF",
  "key19": "238zoB2K82s7hz6LEHvJVvtgC6AzpaJaHYbt2juUm5RFsegA5fD49DRzyLQfhav9Yqu96epg43tNq9tHMYfHW2vk",
  "key20": "3fALKs28qrQvhBwsHBD6agJvqQUEGj5qcHPmk84ETFYLtYt7gj7vXXUm6cCNJLw1XTb3YjGSqbhkF4VsbPZR467v",
  "key21": "5p2Vio7gHf1DMkgnm4wq9M3mLgv4kAp7TQqu3FSjpn8LajUHxCUMmSrswS2b7UMQCChvHFnKZfHoKuB2yAx4jxxo",
  "key22": "33iLg7esxWzk8mDcgF9yQ23hbt5JqxHAxAYkTNaqAYAoAWJS5zz3ndeSSnn2rBzMiJHHjUwVctiaWBskVbHedxHE",
  "key23": "5rveduvGu4Rqi7jzg1rN86a1wPNbt6P12erX6bJAwzUM9GKErFn9TSfoFAjxTZgeHsQk6KvqzV4A1H1wVUo4KwPe",
  "key24": "5qd1XWemwytghDn9ZSBHSuJmu5cq8Hcg6VxXDGu2bfj72wE1nX1gZ61SkRE5EvkbvtrQtjQeSjTqB1pw97SwGda7",
  "key25": "2yfJHvdkuwDCsSHdcrn5qiy6j2KkxNPkS7gZSadU9WLkT9eDYZiwZxfKPxYozZvLWqnaXubbHN1G7BrXz6Yd5Sgr",
  "key26": "2BMsbzvUeCMSK4CEyZu1FexgqgktdKKnhy3KKdZEbK45VfYvdVLgPVEpyP6gPp75otXLhaSF2ovqdckrGvoCpwAB",
  "key27": "7uQaRHYpbhBRyNWVr3jkw7WAmNdLw5RtGJXsKtoZAxX63ZDoXmZ6ebGi6BnVrLhMNDWFDPEvSZ6SRRuLAr9BWds",
  "key28": "HwDA1Rjpn6Fv1q7WuFb7JZPpjjoA4kRawWxWgt7ipph8yHnCU623yxXw91TqU7rmBKZT8tuewWrBoBLjeZ174KR",
  "key29": "4WFhnazZys9ivLYZrChwTeu76JsCLSiQG6ry5CvgnADeJ5cZmZFdSMEUH6CQYuRnoY5PUZHk44WDRyFkdAW7wsNG",
  "key30": "pcGqcWDU6VVabs9iFqRpU8wgSDHMNSuZtYeX1uRtMTKsaUo1mrmmNxxpGJUCQTo7LZsree16inkwuB1NN3rNRdp",
  "key31": "24TxfrH1myx7HFEJtqkEs5dtHqaf1jwaH6p4QB8BSdGuacXaEHSUnMn4gos398Wd8qKVMWEk9duEnhq5jEDAYVjm",
  "key32": "fNXfohXiyyBmLP85XWUnVDeeymewnqA3yTEPfo5vmn47iB7RCeWRrnC7SxbXzy8bUfNvJWZ1SnrmWEUbYpx2LfV",
  "key33": "2pUXMdzutRHVuRBgwiT7jcT3WvPCKA5WC7CdS7RoJw1eXRSLXCdTqGNUjW9qShVCS6qGhYPquFZ3Bf9w8Gok8vHJ",
  "key34": "3uAaduevEjLzCZwDV6cXdnpnqi2NwbEAmbYB2WKf6VZ1nC2oyV1K66Hu9jTe4vRD1PUi2UuK6D8N1tizvFUfRmuf",
  "key35": "2ETi8VRmPHNHARv8EsJoJyripuxCGiH19zYxTr7Um5neQEhm1NkGdco6kLCy8WQYVZQzEuS26V97ahdVst2USrPG",
  "key36": "2bnoHdyuL2N64jM3fzK4pzRR11RHgxvgxKGX39RmF19ogCrNfsYCSTy63riDPAKDcp5CnyUafXspvqg5rQ3W1iha",
  "key37": "32ZsDprzvNi3exhSKFMU2ZbsdsQRNfJobH68qv3hQXfvjPJUNQTSG195uhVu3AYNw9J3m7mJn1Sc8HGojiCypmxy",
  "key38": "237RTC3DkHvWFy2M6dARLiym981nyztJ5iyeBr8HHqRFZhCyS4tPTNFKy3Pyeu3Mm4q83TnFS7XYVr8JeDBRAjfp",
  "key39": "2zWrxekd1XLqTohjyNUAWF7tMFS1AFcDLwe93a3viGa2TfYpRaJJizLN3G5CHaptTXwoWfZVm1DcukSLvpFNwbKF",
  "key40": "3AVCkBmkvon9ET1BC44fD6tJZ5wzyUp2pPUaQcGq9tSMvQkfh8NYx3EygWhNUJZ611pG2rHPVBtnpFAdov7bR1oZ",
  "key41": "4R4SQCXsfwivvyiSmnHtKwwe1bdT9qrP8cnQKsnJ2QwpdbJXXrJhL7LPhewNkVuConeqV1KurtgnvKEL6HWsFaS2",
  "key42": "3JXbasEBVp8bxruQP7CXk89MvgGDrPN9aDjan6MKmEUAcGxrQCddT4DYQSHWjs1VfMaPFA7iRtwb49BHhSicT5HE",
  "key43": "5P7QuETZUHutGHceGF4CWDBkRiebd5TZMS4ojsRAruJrCYG7zfbzCHBdfq5QWn9PmFmDbrZ7cUnsvFijCGNnTaAd"
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
