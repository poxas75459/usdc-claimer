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
    "55AaptR9PB1J5C5ducgBKDc4TkydQtvZTD2SaE6vKzAGjq5uux5oC8sHN8s7RXvjfsTxrJUy1i3UoDg7ELF5eNUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEa1YjS58AJaxEY4cLR5Qey2VhebXFGsEdwxZiaj3dgU4wQ3x2M1F94PMRgDzQbHEJPj2pEDVK9ypvz6tNZpH1z",
  "key1": "8e6ZGksKyJoPhj1SvjVE4FmjaSQekTrddCfL3Fs4rXAMjGXoKKhxshX83HdCxdKtUEQN73vNHErv8A1wpaUD3YY",
  "key2": "5M9HEkd22n6AB571HnZckMZ3ruFhtJ5F688yXZsZ6fSTXD9n98RrEiDz62FeDmLVD1QeK6WQHogy2t6sinE97EJy",
  "key3": "43WuGMMinowy79DgvrV6LJQacn4RXTiLBjNXKyFVHowmv1RemjV875ytSDtDcaZ1RXCd5EAMDmtrepdTFJ14wBof",
  "key4": "3UaQ1h2AKv9f2c8nJnyByX4jcHe9eRDNqQUH4HP1W8uRy4iV6yuj9eApfG9T1tBs61kRhvHVFuxVuQvSK4SmnCvW",
  "key5": "48Rpe6xSQ1CS7yofTPnh1jSF5oWft99uLUt7NMXZHkHpdJfFJYEEL2XevVdbFFV3EK18QhqvPCuxec6JLqVFPB6X",
  "key6": "j9hJZW26UWCVtzTZKvPpusoPhzKMyPWv9qBECS6NXD4yKMuVCvYhmRbXegC2fKcFKFk3p1r2N3uFm5Q3kqnGJ4p",
  "key7": "2hRPaxqwNwd4nXp9fnUtB6y1MV5sbovf8VX12jCpTxdspvd4kRLoZbrBk6NhtKP4Lcd7t5Hodk6dHwtWUbf6XDi2",
  "key8": "2nZB36vHCuyyxQBzUASgMscsP7XdKqBFrv5UFGts4A1cYF4gFouQRCttFremc5dNQsnfhbGZJSA9i1sQMf5JLfuk",
  "key9": "ZJ1UAcm8fbVbvoT9uAjmcGRULtv8WdSae3PT8TVu5WU1S6qahmxDZuWRiXoouqgWnsiHsK4AYtRv5BzZZVg5MWp",
  "key10": "eP3wpws7ZynH7CgUKWHC2FD3v9X4yM8v24skUy19YgPXq4pWepxbJDAyD4vGfxb9MMCTpUftXjtTc79boGaeKPE",
  "key11": "qrJoezjXnCGUEEXh8MKxz2zD4JJxnLenhZGUteDikrDa6jxvfijmhqBCirSVy16fakpABGBot4PwMakFZx9sVqF",
  "key12": "38EV9FH8fWQpWfksn9J1KYeGh3SBSwhQHjyYmCojcGeFkPLKYVWBH9uEFM7hBx7zp52artiiMJHdfCLCjgUVNaus",
  "key13": "5c4yfP4e95pUciiGKQDSf8hkohenzYBsYfy26eHVFQmo5eDaJXsXh4jLRq1Nu9oesBdyidW7GEnJ4C2bjkSkc9yd",
  "key14": "YPS6Kaw7CjWAS9pHau3gXyrtvq7k73UY815Tr7BtJU5XByAoz77cpXaukhULGhDnjfAwcGdgG841ty5CaU8JFzm",
  "key15": "293DFh22xeqzcEBs4B7vfnT25e2WkYYiBXcGpB2MMBCRdnuv7mkw2emn32HzNSUwfXLqWWVyrRhnCAynd6RPJsPc",
  "key16": "5E1dmktmREfKYPSE1siug1o1BDpPd77CPhzTwRcaMDWJRrYUSTWQLA7gjCNoApHiaSdksW4ctfMhs9X8pk9Rj746",
  "key17": "3C1jkoF4a7oi6c4ppbkANnWS8hbKVEsywyqMa5E6YLYLjuqghbZmV7cKRQSZ45J6CHRQGfuHnkRNKd9XKZP95QZ4",
  "key18": "3nBcCeA5B634nRc8NdLcfVSGQ2Cj65bDyu2VyVVcCoNc14ysGkv8RhG21TrAKRnERrWPMz3UmdyAzPPHofr7YQFM",
  "key19": "4Q4dZvyFx78TjihsPBSmtQzqjLteJjyebgkWefCPAL8uYi72QVMeMKqBg9nXe9JaJjBfvBRHEgiSvc15fXv2KWTp",
  "key20": "3v5XscweD5DMLEzrioZXRBMJUak2vbLwpRSMcSvF1BKWNioqKT6bNno7WWoBMfxxu3sTqzu96UdL3ab9Xxc2ou3r",
  "key21": "4RKDRUd8pGE91kQkm8GSQWS55K6vCZ9RvoxdmM96p4UAFMjCPVmReY4e11JJTXGNSY17Ekry3nRBvfjERZRdi52W",
  "key22": "38CkQM4kX4v1ZKYYGsdX4CEC1uhMqCzbwXa47vzDNPjcX8vStLret6F1LqbhshwcrHeqDiCHyh9cNJeg3fhm5qXS",
  "key23": "aPyAZBTs95FL5AGemfYFcTT6BukobY12Trf6WCgYkp3Fh61eu2SesheQFALMxqvUimstGe7NAcHaFXvJ13ms8TB",
  "key24": "cjizN6wRXcV8cxEFonwCDyk81ErdYuDCRDegZ5mmghgXWCVPxWrPFtGcBG9TxuywuWKK7ND9wXuQMu7yT1W38Jp",
  "key25": "4pZXRLcmbBjEY6BenR5XGhbiqKmSQfZhjQGtkhSSW5eebbDo3r5oFK1abFwjCnVczFEzXyPLHYV95eSUtbPtU9K5",
  "key26": "3AA84DFjb2TXdDtiWGTU2yKvwt6Z4MDKXQB8fEbCQyFoKoP4zFvCDaKQyHWYYAjWPszL27xsMCvn8fbfFVRBAu82",
  "key27": "47o3qxbyvrUkm8PWao5eXbraZihQvVujUiCTVpE8qtyjQ1NUyz5JfFucxkohXptJNCsm5RX6JTKNMC1Y3keCkbRb",
  "key28": "31Eat1FDr7poAKvTHSjaCTYZyjPFq9Fg7iVRHup3cCyWXwehhfjaDfs7YGMJfxFqc3rh1oaWHjzgnbJjBqCinKqP",
  "key29": "dbWY1y3hhSJT5ZzonKwmaEsVVZ8GV39wMK3XbCh3oqQY3Ck5NaarD5uSJCBfQFiHNqsCRfhACkN99VGHEX9vR9d",
  "key30": "2LV3fs6g3Hm9QfGjnnkbexqXASuszWijeuxCKCaujJaczAdGPWu18e5PSNjqgP3eJ6zZBjrU9AYvroUtaTX4WQjG",
  "key31": "3WfcGkUN5EzwbiStGCYGJf8Mc2LWUzGf4Asv2ufgjhtTGJHimNynEGP5G1ejz6V3DTqhK7sbtjmr9R8MeeBgtwLP",
  "key32": "4WUT5XG9dthhqahzUvm7mZpjwi2DMVz81cZTTYJ4178Qnrb8CCoSUjqTRXngFxnKQ1ZTxFiRyjSecRcYokRgtyRA",
  "key33": "4NPcu5i5DWL9i8E7n399SDdv9C9CKFVh7ikqA3Ph6Fa868gxkEftP1xhh9yLJCe22evQfmamiNh9Z571qi4whxDC",
  "key34": "4y4wQYyLF3siaFiZan8mAfphF5s9Np4uaykvWCjBa3uEQB4Ydb8ACBPfiLFXWEnVRcYShTKpPMrsjpmvX2xucYGH",
  "key35": "4VF9udxgGCxBN1oegr8PXn23F5bjZkWox3ajnaruRscNJ8AW5eTHSyvdXZCviy54RMiyr9gFF2jVYztBgiD9mpHi",
  "key36": "zWv4qVSCRfoEoaUUe45NF7GnVv1GzSZCb1EURKvjDGQiXn7mMcyZiHWonW3iMKruMbCjkHKqmW8mdSctEX1gh4F",
  "key37": "5GPatTeTgahqHwQ8j6EU51S4HCp2XdoZ1kacvTpu9ayx93QJ1XS9pYiiMxXeq46i7c3cJEsTsiMEriibCNexHK5G",
  "key38": "JDV8BbvAvm42Ut638jSFmDpnxqcu4Jd7PP8Tshd8oD77UTZVkynrucXnXbhbtYVzcLUwaDM48fmoTBnmf4GExP7",
  "key39": "YoAzdQZwUyiPjh5WoeDPEx9mCWPHDMKwB3W3P2RCt13arJswF8gsYaG3rtrvAXH4YbsHrW6kbztqmV9uPt63vqE",
  "key40": "22aRS3u72u6aL1ekAs8HfBFfA2WGWd3jv5pPgNYZJBfwB3mjLgSbBZVCoWEM3JJQveB82YzWmMxiNPvfZkum8ERw",
  "key41": "4x7eDi1yYfyHBJZnYvk1JWkmC1cmzPBAjFvMf7QC8K87V5oFtSDRPmQHy5kAkjDZEUHX2wXpWi2Fus6fxie7iWFj"
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
