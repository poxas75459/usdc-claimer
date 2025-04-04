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
    "4bQxgmRxTABJaFYtTynhvJCyuU6DvJWZXDAUhT1bZ3H5RYYUN2RLKn69rSMqd6VD33axPxp1oeDajXES9Stvw5yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YTioPBAmWT7yHrNLzTvKqgLS7c8rH839bTca5aGLEHhirPnLh1M6yJU2Xybb4xH3WHJfvjw9F2B7RtGE7S3Gejf",
  "key1": "ty6gnMkv7yaB54pcLeGfnAEEJ7368RvMCDRyRxnq5qW8XctVYyXf39CynRRjjU4YQMykJfLpaPsCbPbB9D2ZcEJ",
  "key2": "5TzCwpGAdGrkTWXe3BH7pMeh8X1oUyq1YDLxYURncFV7x5x8n5N2GVDpxy3C7TmTazYoHxo4sweEBvmMSAY8iJkM",
  "key3": "51UDAGurfdAcMewByHpPk2otUh51GPpuWnTmjn1uduSEhYPE1Sc8EDLsBpgZuUcYmdxdspX1s91WvgzgDaGELbZd",
  "key4": "5FyiaqkCevEdmq4QUwhT7eqAgqf3tGfCr88rcVzWwqcLktyQkzHArKzJm4kabUXKz6xArTenq2oodq8dRCwvawHP",
  "key5": "26yXtXJsuaDfh2KHfe5tBm58qx3xwj5qpmfs6SkoS8DaZvKmLfv2TBgHTCaCyM5KRCjCnrSA2jDACxJbdGfyBWse",
  "key6": "4JBjPQhDkmCMB1c6Vk6nofsubY9RxMpD5pj7DqLiuq5FxX9uz7y7xosTtbpBzwGp7aYiJkC7s132xuK8k3yH8iwY",
  "key7": "yT5ciGuUxnaeiqhSJYsZfV28YhsgKNDooAXKmpvzdVjXfvpcWX8hfEMARpCsQWh3ZeJaszumenDg5ZfCUzbyn2w",
  "key8": "4AZT6USxvW1wZmDkmuH6MqaGsSZB6phMykvFJgQARidaigSsRha49RP8NUzj3Me8U2xb6oxSQCCSn7F8V8TAdEVH",
  "key9": "3WPE3ZpTSx2jVFmivz2aCe1fcRk5GunNmiPCxr6bEUwnknjpRhDnZAXauQz1Wukg4RtRztmSSkWCf3y49VyrgLK6",
  "key10": "4eLy5rVJsRp9pWRUMGw3NxxnffUupsdBWYpqZYokwhpzVqW6Awt17F2PKnCTo1p6vBupM4ftcVRkTKFugGB9nmjD",
  "key11": "HvwbS83PPd4VSFoijWqt98mH2YifUvRSMtBrwaA8t9YK7yM33kKfHEAjLUiMb7SycpcHc1EDTK6WAxihpoK4VFa",
  "key12": "LLtC3h2MNVXstQrEsuMjxvcibShVLHKU9sT7XzjroyhsZM6C3WY6k9ywXWmWdSePCEX5GVkyD98FEm89yFhECEU",
  "key13": "5XiKBGKseBF8RG4x78U73GwWXuqp9LXaeMEWHLp19yNdRHuAqpwQeYCWMEFLna5mpNYqrg5GrJMGjkSWn2MsSz8H",
  "key14": "3vvC8yCRWAyoncsRucqtX2Wi1dUwUeLpkQDBFUJbyicULV6q5vyKqUNUFEMf3MgEUQwStT7756GBtEkz87xwrMHs",
  "key15": "bDJ14XTDq6ziZthcQrRTELPSBws9N5f19bCVG3KztnUDCFs43yBRSZFsiY7QF8KcVoNgHHyQzYJ2WwG1i1H4VAU",
  "key16": "HRwSjuLfYa8vETmsxcUeyyLGnvZzkJjRwUi8rUmJAPWdDnbsXn4rnQxsQmSRTyHbBp5F8wTTuRYyf2xFJUGrwdm",
  "key17": "rn82K9iW47JMcc6CqdGPysW7BEChqnzKNjpM7rpDg6oDyNXKrT4Cp4AianSj7VgUrMsRRTTpNHLEJrKgUg3SMuS",
  "key18": "2qEHzwsHoJVDBuWizRWGvsjWcoyguB5LxGNxfLBLQ8LSrJAVZ8ttdbfmSqFsG6rNvybb9FmWYETvKX1oGyLjMnyy",
  "key19": "3EgQvCBRX7VQ2afYRzyJUtWk6mp669Mn9sf25SgboLfajMxn13smHmr8sDEXw47ap22gznL1bsFVDTaThMxZuVh6",
  "key20": "3ePfbYct1FFUY9DVDreSqoHJRofYSe9fkQnb3oZkEkFzDRraFBbDUdHavNjthDmYksGwWk3eT5kNH13BvioR91MZ",
  "key21": "4THhb9ercFWnovn3GjHrQYUW36vUNztUxXpSse39y6rBk8Thf3AEu7LJcxGynRuaqBfudtAuaMStWheTsewwy28B",
  "key22": "4sfwbfVVZYpGfbcGox68qzUPwYth7YCx4LZ25JC4dKq72mdF1YWUd7vJJjCpWhPwBXYoaV98KJk11h2up8iQ8te2",
  "key23": "3jGWhNrhnhmqoWR4CdfBfvTXYrzEXGT2G7j4TZoVPdmPdcCYgt7MKUbxB16QAEVTyFEh1iTVaF6wSVWQfsPYQxGB",
  "key24": "4Loz23LtNE6nCMS3T3MRfx5hBxf51mVL1bVeMNrgojP1j3YNApeiwLiyCeckdgsUV39M5qBp1yW6SygvPTUhLYZn",
  "key25": "5yEXxPoEzT59mhV6jvqsH3i3G6K28LRLGQwUa6RLEHAMXBTC5e8pCrW8K68DCkwRsGJ4t588BduigCdCTVMGoQdG",
  "key26": "5TjcfdK3VaVnSwBrnMWRKkjT5BjkU74RQBrGp23N7AVNiricoFJAKNiQYwvXR3ZHrnN4wyJfm8CdXeVS9KF4vagt",
  "key27": "Wu8FMLbdGCUzgWEDt9ouT45LYKxkUwum7xVRnwnTVMYR3dRvxnSRLnV3nruJB8MJP79rA1jwameWd2E7VFLVRSp",
  "key28": "4HdvzmAgpbYtkiVwbVCPY8UKVDoYeprGEHEb3LzP2VXhVPvT4xWmyY6X1SP4aioN5CdS9X8WpXpXL4nuqzo3AxAC",
  "key29": "3hPcqMTJDRimzDaX849VwrjLaPUma23zxYFM1bu1x1eHZZTa3GaZXu4DSAKX6bKshB7zx9TR2WVdxgj6TXwMopTm",
  "key30": "41FgusNxWphaLyt5tc9rtza5jFeNgP2aPQrtZHo18nYmSW7KHpwbvKGofY5vCxvZLo5C24kupcM3o14KwJiGSNFi",
  "key31": "2Z5XgGoRgQPcXBquoUY5UKW7BVPRkdAdKbe4TA3xdetmEfEBSSZe7KshSDii9LvnnPnEUuibxYPzqzWwmxS1Hz6U",
  "key32": "5MM8gW9Rq8cAHudowK52A9ePNTkB2BkNEBpi3tg65wQhXB7Gq2NoD5MsxSD72JDTjt7cpAnvDGHJMaXTrn4v4PB",
  "key33": "28NvQPgx56uXwPugZrhFKwzdmuAwVfVtwfThobTGZtVS4W1hKHRofun6WkSzazTwR3udVQDVfwbvq6EChHBsDuJw",
  "key34": "2hZ6QWgTgRmu6ckVcpd415WujMwVdL31Fyhzdhg7Gv4nBEQBLcjpb8MExuGH3NjVtfryH4hvS5x2yP1hPFTvu6az"
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
