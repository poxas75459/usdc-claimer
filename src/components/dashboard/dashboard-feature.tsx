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
    "2T7gSy1Cz9TPtbDku8D8rmqqpgdCRnBaiLrmqJvagbD2U1RiEU39MGrVcj1tbC3fGHE9Vqi8cNyfNsjiEdwEQKB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o53PoTQ85EVwK1czkVvYxyaWiR7kYWNMHkrM9UvY9uVhMD1D1s5D9AutkaZyVHm1tyeNhHUZVTR1vqEw7sKYa4q",
  "key1": "4tSXN7xZZLyp7rtPrQ5dUS1foiSxbupXzQZXcBRS7ktB6DoNmKXdep2cka7BKFRtZns7EjpnUQ4XYYReyrhVCqcB",
  "key2": "MMkPxWru1Dq75nmwJtMcGFZ8sVeBu2TdyKXS3hqzbmvHy83uoCbKZ7diviirWiL1KnaNgEPbpGG8KwZZ8fWCyy3",
  "key3": "39pN6oDHprY2qTKgBjgJZizgWdtTr2GCDTeEPSeRFAKsYstzKdPsZiaRh24yL8Kbwmk7kupaTaxjFqKAYqvi2Pjr",
  "key4": "2wNS4oCzqQHAvv8FmxmEgX8qf6Tzht5UxPGBNarjsDbwmJHuooTdouELUik2Ewp7fvhLMM8tBNVDLZ9D3imSKrmg",
  "key5": "2rQoXDGzWLt8pfWWyFqiJWUzRXpy4CmkVJd6ntshkyMeAYEphpJAApXHn5bKbsNNHeGJZtpMDGvZ5Eac1Tt719C5",
  "key6": "5jzZoFMuT9QzUduBs9ToMsNeR4q8JiCuFWzuzdDBVuLPgLU1Jj4nSXMh9sU6kgJGDVxwbust2d7cP8PUNULU7FTh",
  "key7": "2JJq3b8t4CYQvtswmw3cRgB8fCZVfhYqcKxBx5yoWtthSU6qEpgeipoQEe6vsWczULLSkCprbZonbT4sWaVe9zT2",
  "key8": "hVMhcdWcovGazh1oZ2AWRfdqD1SyitUncyTkuiDsCRrjMTHEb2mc8jsTcBoGe5JDehaMrFofXtezbCRCGyCu3qB",
  "key9": "4iAgSCtjQHfu4eGaDjmdPrftisZ1ueWmZDwQb4UgU1Auq5YJGQibdvDvDA6DGGctnyzQxHjsmzSKSH82mjru4ndK",
  "key10": "eREZVKqvk9tKxJfkVKhgT9XN35PvsshRrPfu6CcAbKsqKZCuRNx2SZatWoP3nqadC7DgqM12A72FxRbYAu5keVB",
  "key11": "VUC3h1uEdTxB9WGrZpNzVYKb83mntevak4n3K33Gc2rkXDeQB2yx4PiQr6jJ9cHRzH2Gn6nLJdgv29TRxuroB9X",
  "key12": "3cST432MsYyWpahNVkR8762g9bek7vVw6NC98AXfx8WxBnPFLjixjGxabACjdmZWSMePVgddivyA15aaEbMGKDg6",
  "key13": "5j4c6eGmwdbB1Q8tZ3osXCtALw1xFZF5KJfKsjvvsmd6AigThHdydftpT32XrRqhZstspH12mPKppBva91oZe487",
  "key14": "T3bPJHWTU3XdPj8Fuer5eUruLVQQnUGYGxDPr4pFwhDu8NayYG1cwfiwRZwvVgmyDDhivyN3jhdoz7g1qYNg6eE",
  "key15": "5QTVbjmbH9CNbBSajVaQ5M8WLw25x6Zg9cctu1DzKpUMkLZXpiV8oCkEJjbRQaUCP44Bc9kRJ5f3XGyE9YneMC5V",
  "key16": "yPMszYRYJaoXs3q9g4wD1TZrL3cfpYpuhwui53G9idzEiXwbLavEj5oVybAYinEd123mzXPzWg3UtctVQKEwTq1",
  "key17": "tEYWLRy85gJBDvcpjoSXZiskzZt3AwTSVt7GFdVjoi4paHHdB6XAH7dB14XyUmYL5qMMQPvbcyLzAKPAYUFUobk",
  "key18": "5FHrTQ3vyfBkTRi64RQcxyyKKd3HBRC3DgPg5mSVMDqcWEUQCYHo4h6X6LABTreCi7LFbnNh8P1yAd9E5tZiVRiN",
  "key19": "2LjwyFMx41dkg9osShUcuREjRpXNQTB4SniS4z5Zp68nzKH1qj1r5yN9183EmrzrMRX4azkdqetpHbxPpmNnMLsW",
  "key20": "4FssQe88YBdKygzFsQKNCBJt37RGh9C9maQJPgcmbjU2aHZN8skNKugsQLceTD2xtpVFg5RqBncryDCjBkr7phg4",
  "key21": "5iADTB5tVqpbS8m2eAhXwM42dXdpZRzpsAutaN2DRw4PSh1jMnLBif5mV1cWSJzZRvLi1gjmVjYhXL9BtXbcFUu4",
  "key22": "37n3rg5MSPGHxfNmHau2aAbNofkWSi57nxuXeP9U1ZYZNiePgo4AtNxFZAphLRiALmtqXV1ZFckRuskqnBeYMHSP",
  "key23": "57fiaWePecg2BaakpCRkK8p8Yyumie8Q1km348A3gLiQQMx3jctSnDpeNtHeta7QKeaubn2xakjpPsdwto8jc6vi",
  "key24": "zRDaSMEXsGurH4qLhubWVQASPyMYoQ7miD6r98yndebzmCvPYRRqXQMYvsDnsCS8E7b9TXpTYFrm5dDA6ZFBX5C",
  "key25": "2gbiGj2ev8D8fCR1t4v57Z455do6fMZq89gi2xWqZrSyMGuDuzJTk1o1xQs1wDSRz6h9GSTv8NjtQhq5L9EhP9tf",
  "key26": "3ZJqAghD6fABHuzAxfmPiEa7h3kN6FmLFhzVWWcbu4wdFGfGxCeDuGEjdpWxDXFPExcFRo7J6YmEvSkPVcsaqm7f",
  "key27": "Xkt6yKnE3rM42ejaoeBQ5W4cuTdy2oeKHKpBGg9CT3gdRy41tRECNPmYxtY7a6XEEZVxWzZEJvcsCxZ9i4rwqnj",
  "key28": "HWiBu2apXWP3216sdGmkxaFt2fLy6k4RT93Z52oCNkd4jPhmdL3q9x9aJ4WtJ6V7ccAjrTPSLd6kkneQwRjxL48",
  "key29": "362eoiycSWuuop39gYDeWdxytyu3RuizLkEHyzrAc6LZ25YVjUvuX7D7rdtdZkSBp3Ndmyuj953Mo4ATgwnCihYE",
  "key30": "3F3dtpNGT89nxajpc51dnoAb9RiQCXTMQaV6BMSdHYsCiGChYpgVXZcLkCRAzrBeWd6d7Hnm9TUN4rSL6SU8GsK6",
  "key31": "2bXiMiPn35M9JyAFzPvtcyvUyZ7A4SfV5ejKwTagQ4Qu9eLGj4ForaQyGCcdyzwHjqJH5q44of7U9BuX2DrCRXKK",
  "key32": "2s3VyjReVPMYLm1LKMDsijnwsc8FCUTfk1YxNehSGrCSW33Bzguh8yWzbbUhMtnwtE5TRfnavXS6cV4Rmg8f9GSo"
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
