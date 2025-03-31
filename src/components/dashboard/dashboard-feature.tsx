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
    "5HrVH7tMgvSRjM4kYgMLnHxVAXzVH6BxVF8rXrffASSaCqnf6crBVr2qPfZXDrFuKX35zhDtW66vf17mCwegMztR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqvViKCuYbpRXu55iKF3iuW2fFbga7FTufZaFktmMbWhZrkVG7Taa6G2LefiVVPBqDG8mFMwVtDssTQmNt2oJZA",
  "key1": "zsbShCkD5poKfdcYBqLsGsVW3wmqSQYUSKaE2JW3rNmNfYxvqeM6iRVVGRyent9brp4zLWz1SreuSkPH58dv7gr",
  "key2": "4cAZwWXzZWQTeXMGgWcambkHCSX3WJULkVeYqHwHLc9RcdnJPUqzw6fnRyPEPzezBeCs3FDxNUjbtyyDtSa84XEe",
  "key3": "58f3fKnSJFTCVgyB2tiACMXKfX8by9WWjmVwDYEu4cqnEt1bCM2U2vGvnQ3tZaPtasNbofzbKokjzJYo5GY4aEKC",
  "key4": "3dExg8AcMREYciPvmLvjWFDCkf4X5NXBxeJrQS56KXAbJNsMVzEAMiG5gfmKZroxmkFT1TGAkudciubN116GXqP9",
  "key5": "3mAwy3N9nNR4cXixgtSFtCNteSZ17QbiJTM1L3MzgHs2xwLgAJP1sZk3nQciDfYiWBjFgHLE1Za9gnm38EgodjQ4",
  "key6": "UhcB3hCfrNk2mDJ7WsGHPTjaj2mmJYCWg3jTJQMAN7Ah9TNJNmypxNv74XjHQaU24iHRShh5e2bkLXaNdWGv7cW",
  "key7": "4KuSqntxVBAwMEN4d7QjQGPziipjYuLGDjfdHowjvpQJdr6CNXv4MqTYncZgmTkqUSnLmBN4baJR2XaDq6ae7ZdJ",
  "key8": "2N8s7xR1muHegBzT4NVdWLC9QmWekqvgjv8XkFXNZcaHzqkULhLj3Ju4eSK4uB4tn5VGxGUY6sYthcQaCETN5iSG",
  "key9": "2PPtQhF5wacGMYpeZ2K5PcUS6JwbTeQu32DRntzrqdmydtVHKMbmMiqoyxTB6GpA3dBgJvG4PwtFLomAE92hwMbK",
  "key10": "2fx7PG7cCPKYYU9obV38bFQBBMxtXnCPeHJkV7NRYHnZ941v191FyNaT3aaCGKjSVZMzqLE1p1fM66ndwkcTKiWS",
  "key11": "o1dngyVSyqUv8px3fWGd7HcSjiybqMaWHLd6rqehrwexph5qWvbNY8vsQw5YmoY9hQk7YThkciV1hoCZExnKBqc",
  "key12": "2y8J3gB2MvgPmfDdoZrT5X2kuUxQykg1yGStDEh7z3NBkRA8ZNQ7FBuXhEhbtAMPdBcoHPsuapLZC3nhmAPMaFgn",
  "key13": "45FtnYcZQ3K1ZnfkkUsiRFaQLzX4CuJETHCLLcka8Wojf6G8wJttbm792vS8nzEv46cMzZUSStw2cwd7HEZ2UoV5",
  "key14": "4STbJm2EysbDt8KWMGrPmc3gSvxT9SrsMDpM3DwxaBQCbEt8J3N7rFic5eUjwueNHqn6E3FF2QfkSQsFsfFxWoWT",
  "key15": "3PUFRZpo8w5kKw8y3Z11bomEc7RVaHiz9DA6huMufvdj6rJeUM14LqYJzXeaB3gXhqafdniFEYpPwJuZ1dirtjXQ",
  "key16": "3kJSg2hhL47bFKea45SXPtv8qkfg4n39ZjMUdmJEytM53fcTfx1NCStCf9VNQYKoKs33gKptJtw6nTFHQMYHTVwJ",
  "key17": "51Z4stJ4zh8WyeHPYR3DPhStsaXAeYsqfp6eB8ZipGDMTgqnHF8TTooUaLkNRsNMx1V2paBa9KbCtg4GDz7i21Nw",
  "key18": "4cfRZkHeRBnedSLxHUWf2NWxBnhnHWkXzzMBvzkvnkEEiJTfCSm9osJH4WcgknE5iPWHm4ZWFbhxwNghMZp6GVoS",
  "key19": "3uXmoupRUbbuH5KvWFG2WCKrcboCbFVcz2tBDvwSMwrBKsTRim3CaioUJBsbAVqriRCLsySHfkXxuaQkcyL2Mx9P",
  "key20": "5ATF3Cdpxx4oRDnHJoLvA3fHWfewrgQ1K3cVNCKVVnEMpUkabx8S7pCqm387ZL96CFVGbtvtCSYkDM9Q7V9RFqHF",
  "key21": "4oeL9hoTxspHXADQpXXFbbDtX4QG6k1nGYNC6bJHMk4ij8WhR2wwiajnUUEPAhPu7TRQbBDohHJYatTMNCjnjLK4",
  "key22": "3qL2MNtZsUkfwBnQZSQnpuvdk3243pyfQLSpkhjQhVJdHMV4ur2qnGdSwVg5DRpEGkf2gdaFP3kfv9Ay8pYm4Muv",
  "key23": "3PQGL2yb92QogPT15KdpRi7Gs7i3YDUhe6wbCcfru2WFf2uJntnZG7bwNs5AUx4vAkj7wf4e4iYknqgwjZRvwdMa",
  "key24": "3p6Ph7TDzqpyMryRmXRkQosgRs5WZRSrCij2TSJUEMggm3UTHnkpxrkTFk8WL3cfPSbJBoqVTQ8CKYSqExTNEK2N",
  "key25": "5BjtTAJbhSBhtgYeruwGhkcjNTo86KpJPZ1iyFhhQESSjo78XRECuaB6ho6WyatVr1hoXwfBWPvfX7GzXY92z3Mt",
  "key26": "5Zr9tDYWYVGkJAzoc2EsVXDDkuiJ91D8joaidmQRXG6yxzpKrupLgGpJB52g6K2J5VbqZht72rg6TcjXZuE9HKkv",
  "key27": "4bm7JAKFbVqHfUoEJnFFpaJKZdXwABVeAHB2cmRbqiCEXuzKEd7EZdUPrmsi9EwpzMZUB3bg4xSCUKNRx6BMkSQn",
  "key28": "5uLtMy1ccufwL2ZusED4o8BAm1b5FQnUB2kN3XdBhDCXMKCC8JdK91LNLubBg8pSFtjTPDWQRncj5DbZEa2on5gu",
  "key29": "2G9cyYxhe8yjt2KnhYwpaCAAeiov9k67X88qZkMHe9EE2jmPFsEbWVrTKURnMqNUyW1R6hMchWk1gniMQ6XzESMX",
  "key30": "qveeW5TDAgH8JfZv3RAZAtxnUAeCWm5YcUrCJPZApS2sQaLjccucb1NPeyk9S8vjr2BTnPvucY24uqqNeywsfZF",
  "key31": "4KHhcP6ZqwBuHLV53jjhNY47J3DdufbM6Zmt5j4GArNXBVb7vAMEEC1uyrez2w2YFgvu8AHdpiQA3tfMwCywsiKA",
  "key32": "29GPwhDqj8vPB8mkQtubz6r9CzvxG2v449rApXRufB8mWURhaixNw1WJJ9DnNc5F5tMPvv2dHb1qm5zBFPnVdYxi",
  "key33": "waAHaQ1eiVyCgtFtSHXZUJ8o8Yi7v4ndY8Ck7MVJm1Qx1iGMseg2HobtXnZEk1FBUgg81do2uC6LBmR9Ar4JtdW",
  "key34": "2FcXGMTQyLQZaU1ioYgLLkYMtFrE5R8jPZpSb77ChVECuH7SETa9Sza6PssPZKtXLr9xmK1BetgbE3hy8d8A3zBH",
  "key35": "DDX9HDALpd1BBjmsSRqbn4oRdS8MvGX1DrEdPPJAKKBZqHQr69yuUhFs9pd12zXkgd7KyENu8usy1zQtNueDPFJ",
  "key36": "3dVXWcJMHNCxRH4tFS3tdD5a8ofx3QUrp4ay9iTz2XfNjgrYu8iA24ymuLrYxRGjALXfV8GRGtB9E9EiaTd2kJna",
  "key37": "9sCYp6iKNkbwJwf28qJdDadkpnEcUz9QkL1ppJvgXgxjXdJtmvNMgd1cM2FjU5r2x3Diwfbw73LLA5iDhxooyF7",
  "key38": "JYWzDmfKawzFiPVLAqxgQPYZRJDrv6NUwPm9hdDJfMZHR2RvQL4TmmECAnkWaNP1xHf4utHkFAmEeknsunJxmMd",
  "key39": "57ddLgmmK9cEGdYtezcWT2JftcMZqF6U6FFV1e8JEcxXLaYmUskm75mHTxwJ6M96DLE6AgNNJhXiqMB1DBCc3C6o",
  "key40": "2FbUsAeY3by8UR7Ymzzobsq6d8Shyz22EVPk4TZvfbsdwdNdoVB8K4FmmY7jiMMDPV6cpzX5G9y8cutt7eKVN1cB",
  "key41": "2wokoxGGvoDDkmnmcZHckU1S3WuVkx3V1disVmByCy4jjyqCe16ZtePQULQdB6g8r9UtfYD9uj5MpMfpukhWm3ub",
  "key42": "vudHVZiE6ePvqTD6bXmay4dkUxi6cT8yqyAbC3bqRSpMv3d3XVbb2zaU36Vpt58T4o2CQ88sTK2bLLAAu4cccCb",
  "key43": "yN1Cqd9vpYZycRbuQy1ck3FRbL3udCThcYdnw4bCMK5jiAFpfwV74kQbw4B8RyKqUXE6XVekgDwPxMhkdDGi32t",
  "key44": "3q8kuM4DQtCoRMCNcdWrAkq4sEMJDtJyTC2ih5ghzM2Q6NKSwLJSY5UEKfLjo9B4wJLJEbD2amYSpXRSsgTruQvA",
  "key45": "2YbgJFDZskcWKwbyazz11AM7NsaptGJDeKmvc9Q4x1cGeXHCCqS1TrtbyKsnpvnsB8r5QtkJ5Dc7CB4gAryNv6Pf",
  "key46": "4W33MKMdZfDtGTsg28J9s4QHnUibtKuYgRmdz7bpeTVVDvtaafmbjn3HrjnHV4egb18UZVsDv7KPtX4MoYoUNamM",
  "key47": "f5vg5KUkduzsaCHKmtXyNZZjnFdeuMnGbUtcSM65TsBxqqNd1h5DEqANCsHX2goPcqDzymZdueoJpkWbHdPeBRT",
  "key48": "3XRJpkcdBRNC4t2mgQmx1zVV6b6MFgT8BRavTffqgo4LSHXXgvTrhNyGcGs7w1dsNXKF81ZT7nT7Z5QyTB9BCvQc"
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
