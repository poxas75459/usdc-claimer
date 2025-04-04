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
    "5gaEuZgE2Cd3sbDYoHRDsQ8on7gsVg5Vq359DG7bSL7JhRheyg49yQQwP2SnvQbQiu2uomxFcftA82MmEEeJfBe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ecDQiEKWibEuNxwTQHYYFQ7xwt6M7Bf1bPWwx25zzyeaSUnuJeMSwNbcHFmSE3dWKv17P4rXSoAahMK72KKRf5p",
  "key1": "5W6BRmYmxvumLDA54cLQRmg5MDd55DkVLX9GwYobSZjaWF5upcApddGv6duLWyr2LBzEbiGQthnHSowG7hA1Be6a",
  "key2": "5Kmz7aPDgDivyaTPPtACt9yF5QsogQjhmwXbxW6LDsrSo4RkpNwvdjxZRyK9rafA89dz6L9LeA96zWMKCx7YqWhB",
  "key3": "51hpT7aKm7tz3ffHmSYCwKUTWE5BX8mWktMVqWgnWMkectYmV1Xxw2J5uMpd9MXP2r4gqf8XteTDtbK3rW1LMuC3",
  "key4": "5Nf9kgyTboGtWjxNk9N82R3dRg7kTQyoQeESDr2hShKv7rDHHvScLQPSiEd1PiCMnGb1ChffGuo2RDiidNDxZtMZ",
  "key5": "3rkFRjVYfK3QfHk9AwiAEMPn7qa1GXiN1apw3MMY7beAjNdEbuzUiqutQ77XrHbJ6743Ux84utX8ViVE8c4MVYzS",
  "key6": "58ZAMxBziYsXRxPNVb6Z3392AJNYP5gW1j3TRs9eXxN4RBX56AKwPmrQ1vivodtsfX35HEL1AGnc5kcf3YeREUWf",
  "key7": "2y2KtRaQa6KPDv5PSDwYCHM6tqmxS9qRvqB36DUQoT1BtDjReRrDyNRRTAKjKnfZba7eBBThBPChaGiXQxAC6LK8",
  "key8": "5qvb3tyRT8fTnWdXLSgWNrqSxFbz6jo2vbfSQr2TcBHmSHi9Mvf8pcVXNs9nQE4mLV7VM5KnrU8KeuWidiPTYEwe",
  "key9": "3htc1Byo9siZxntPXZ7axM1gdGD4uDpwA5vDusVVVF9xLRAJPHzwbqa3E7X1C97ZDc36Qb9ZgBhNSgTrEFG47MDJ",
  "key10": "3ZC5jxnesyzZwJZMmH8rREKsZEWBaZkViaGTeBnFvU8A5NFaC6RxWyNAvy56ePfLVpM3tjexjmwLxAkD677iocuT",
  "key11": "4GN6WoW7UZCTAeFN7efzEVNXCqh9etnw52DZVusyiBupTRFQ7zphRBkjDPruKB8vfNDTTKtD6KeEaFQrxMYEcU7g",
  "key12": "4H9DoVx7qbzNcMdgpFcK2Ym9oKNdtiZhaYZoHKCuVdS6AR8XEfCJAbCeLGGgpaB4dHoLaRbYvxyr5ZRXg41cah9o",
  "key13": "4mc2hxgL2TWQj4engzaPpYRSXw7WMNtMk3GXQny1cYgPcRauBoEtGwZTbT5Bk5JudAGViVjgNPbqqh2uXLoZeT5Y",
  "key14": "eZHQtHuWKiP1uPDyGZPwYWwaYcSjdy6T9P9nM9TwYAcaXa3qsW6mRTSAN4EBRn4MmoMV9NaqBJ5chRQoyjMWWib",
  "key15": "2TV7YCzk3GbGTHbSKbwBsbULicMBho47B378q8TgyAsrN6S3eUmM6WyCZZrACAdUaxC127Jggbjm1fbG22CiLXv2",
  "key16": "gKNgiSQ21KmGsRNCeG8GHfnoin4rcTyj1uKWELXVqfERJmdD1tL5SL2xy7mchSfVUhvMkQtNhxM5iB95zfXk4W8",
  "key17": "4t4epMH957oC28BBRv4An72Ct58ZpjmZAsE9AN2APFPw3jnYP6wHSS92ZS998L2NVrdTMBjccfJqXPGjSJRpcMVm",
  "key18": "2bL5JE8WR1VwuRNeaTgNtHbwJN47gUCjDqREhr6F2XkFk1GQGdUzxiHzZyAhSTQqxPuRGA9DwNGVmAyWSe5rwPoU",
  "key19": "4mdJ9mR9PDbCAFoZxpJTgyGHhn3N9v6hgLL7BzUJJh6pZqbMzkQsdSwjpgMWs42di8TNi7rWUWMPaQRrHL72B6tf",
  "key20": "2MV49cCH8EK6vDfZQozS1SE3h2pa4YEB4wPsgNFyPpJhPAZnrGjHFgGdrsWLB83JiAksv5r1dcZeNXLgqVnLJS5k",
  "key21": "2jgmBVYCo9DoKgRWZJkMXd1NucwXo2vURLNUwbwnbRmYydNgDLGaWkRa5oBdXuWz2e8x8sigu2gdLUi6zz2NCtzA",
  "key22": "46E5BPtiB1fN7SivZQLC9CYBRNVL5Z5nGKYYsGCxYABMN4fVgqMR9px5z12hcDTi2afnBdcnXiCwaq71pptNw2Gm",
  "key23": "4HaKdzPeubbRWTsV5mbPMgB1pvzyEX118QxyNKVeyq6LW8qGfwAUPfFbWJhvsN8KmmvQ84BSwWKYb2j7oUWNi9Hd",
  "key24": "4hfrnhz5WWm4FjHFjDU7tdcEyFfCucdbfDTXriPk5NiCC5QwaFjrMerrx3yU7WeDN3TDTge1aUdNvweamSd693qK",
  "key25": "5pHH6Z68r1E7NyT5a4wvarWNrmgQLVU9qyRXmjhWrGb1FRrLpWfL6erXwSwAtjdSAr8eDqXXXeBkdtCjcdyMJ2yC",
  "key26": "2EqXegAGrx8HWmn9pkZpzhbH8SncRLpkhxg4bHMFCinogKthYz2vMXvUvAy1xV4b6iWt7wE5oUsoU5dzpHWUQyY8",
  "key27": "pW1VH6B2y7AXwnaCTLMvADGVvbfRgNtU6wZPfhRwx3vvjbMgSeJMAZb61kRutmQdr9SqQTLVEUYonTHnTtPWRuc",
  "key28": "3AAQFpCRnu4dshuqzaKHBMbdCUnMQGonTBE5YMCRfeBBYRXY1hWQc5YnK5oyzCRiryadMSqX7gmB6RoN7fDYJDk7",
  "key29": "5ZAyUHGZ6g2H9C7JJcmgiE7CciQjzbX5F65UupWr5uqjNNDjPnoXd5UdDPe64NxavGoVpRAi861qZUqQvha4iZFT",
  "key30": "5zxDAfPCzDThWfeqkXCWco9xojcM3AMGF1LvWuLqVfMD9ZixxEt4KLrigymyDf3ncwYVEZSSa3KzkFsfKWQXt8vw",
  "key31": "4UPDrwgz2ohaAcoEfNcJtgWCLidzuTA85DSjqMqBkD3fKYPjqJ3d8SRCbAr3tGUkDfnRmQheCbjpywmXhYQzq3fs",
  "key32": "2mDeKhfSbsiwsni6roC4nvpFdfzYBuQZZbE6rPffj4tuhLGRwgyNJYE37YNER87aCz1QVKG6TeheXHKuyWMhcDs3",
  "key33": "JLMGwCvVNYo2nHgxFCMTqPLPei3uSSJ8wD7s5XTyGCx86tuRS77iwQ3Yiq3JSu3P85UyaZCsfzPk4Z4RxbDA79R",
  "key34": "5vkk4TWetr5vLT9KmPiAyqSJHQWywmC4FCxzmrZaokjC4NKG83QA5pWURTuzebEkTPAhmDatQanwxubVDND7F8Nq"
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
