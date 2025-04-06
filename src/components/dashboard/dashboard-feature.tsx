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
    "55nucDNcc1o2Xiz8PQVwB6yuQx57FxYGREK4LKaP63R7Kj2SuxJbTdK39YRGj9T8Jauv9UUqdXvvC6Ft8FJ8acY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bij5V1NrCCSkdQibSA1kEUV2apthGFeCm4n8VCym7wWy8UoVS5Hz3SxYqeYvF7othcySq13fP4cdyksT3vMprJR",
  "key1": "4GSBoJ9Z1iJ8VnZk8xsKZJ7ag7UM7rQz9TKpdV8DUss26ADWR5KNdvRJ1XqZSjnCJ4cwrbKs3FBHqcESmjyXJQJU",
  "key2": "3unmcu4FMggGwqmThYJjRvtBoD1nxBZQeJNzPYnbw96Cz4BfAcAYDBoRKWcGqasMbAtRzbvKkMXoEvqFY9pzMgoe",
  "key3": "4WPrmixqCtioQrz1vHw5JoxWX5uoW178x99RsZC9J3hpsL3p1iqXtANPDcgorRBA8H49eQ81FrUCkcTmpsh6F2V2",
  "key4": "sZ77d31FPT9NWPjdpCia1r7TpgFvXX6WowxakyLctHrHdiPSrW9bvJFhkqmFL2As3HyZ6dzCooCs7uav74Vsbud",
  "key5": "2F6EqZLoWJJoLLsZpVZiodUpsh9UedY6kk7zkVfWECZUy1R5C66Pqw5PUbBkeZ1E7Sr5xXWT8ASJTjBgsNaBoDqk",
  "key6": "srN7ZVxLzsZNiKRJssCbuSddCiPuBwUi3D1qAQado1zwQZGwBUa5yEhqhFv1ptRtwFRkFQVaBuSoBU6fi1KDxkz",
  "key7": "unSbvMNiGVWpzi4dA3FmGQfXac7619jdN8Fnfc2PgnCkVNmViCJRdBV8xrGvK22SWXAKBfgUG3QFuQXXCE4FypP",
  "key8": "4XZzBz22NFVfdMY7XHp9G1bRmNyYJoXSc37xXWwqqupfMpDfNsTQ9FVnCVvM3Kbf1SGgz27CTpVx2N6ZBRDLx2o2",
  "key9": "3NJp3hK8WV2UY9AHdW6DWAekLcRLQsAKCL4pCRXBwvkiauMHHWkr38G1DVWQPbQDizXXHD6Tsw5nmRLozADmNGpv",
  "key10": "47NbGNtZVoKH1YAKyc3abWuczZFxCYhAFZPhK3WhP2R6pDoKDLCv6p7yzvmenC7SpobeQwTuE48QAkFFPrxszK3j",
  "key11": "3eYRgVk37vm6w5W3MVzQDJess5ApAeNFNBmEztQfEiSoZJgKMsi4r3CNSkHoY8KLGKKub4tsssa4nxgBg2TydR7K",
  "key12": "37BrRYx2S1bs5dn6htBsuoMcGp9MyAyjGCe4Kb3aj9y4gpKJF637jfY1Cyd192GvRjXw4jZ7gwAQupvQUnUabMvB",
  "key13": "5GVE7Xmp5KmuYNfhqSnsRaVBaeYGY5xE2SEsPchS3TNgz8Vss7QvscTdE2JHzU3JHDqTbzNdy8BPykJRib5giqgX",
  "key14": "2C3ubW21Ch2HcuKjsmSvrBoRxgjJXNxc78AN5Uh7Y1FMCxyU2aTJMxZh7BerbFW4p6h55zFJsyn5zXaarUzcGMqg",
  "key15": "5Wdb5N2fvqUamm3dA8QEL5Vbn2UPo7caL8XH21pcMJdphAEHFceMspyLv56wTBuz4oYeXNcu3XmqkYQQkN5qLirG",
  "key16": "5g2AXUcubktsCMnV33KnHbzg4Essnwk4fuHFFBUU371gBcqsgyDQBFT4HXQHzbR3pZeRqHYBYCPoeTMTSjnaf5zv",
  "key17": "3kviTt1t4XdFRRRGUa4DnGjsUEPCRYWpJcbrkKq992s5LMfFuR3UmBHe2o9Sm2JEUVhXS2KqBPnqpXqbZe3vTdwD",
  "key18": "4qZJfVAtxfdFB8JsUacjVccq1mgSy1oT4unaHPW1jUYbQfMY9rtsj98Yt4ZwzBHgT7MrubYsqV58eJ2GPGLbdbgu",
  "key19": "3MesSCGo1EgdLrUqKnCxGx2uvxvZvbVHaQRKmZKe629i5FoANdD7dY6i8SEvnsokwo5HSmCM6ZktDSZfZ5N2hutP",
  "key20": "4krvYvhxrEk41cXyJtW3S3T2nJmUjQvjKufS2HbdG8z4u82U7GciKAF11kZmdmZHyD9RqRvXpsjrDYxWr955exSr",
  "key21": "4gCk3vZtSsZBhBZYV13u7E3KdCHhiE94taazykVmmGAmiSP9p282fvaBw6iJ8BHtxBHmQ2iHJw3FEEG7iV5bUECJ",
  "key22": "4VN3gwdiaZi1ya7uCW9qaD5w5akr7EYTEK5KV9b8QDM6FSAA4PGktNocVLJyHM9LPtsqwZjLv3S9V8whRzeF2C98",
  "key23": "4fpetmwhue2A9d5FEa1XuVpCMm3USAUoMt5VMDbzixJPFkaXEDpmQGPpMz2bUzSQpnA9MSruoE6D217dB2JCABb9",
  "key24": "4wpxSSGCqQPC6y1fnyN1jrSpH96NAaTgVZF5PuGZ9kihevVPgXmF1pUbCn77LHKhcrHzKRr2XerNH4e6EUhT5MW8",
  "key25": "2AfJUvNbDXvkiH9MQv9SfPH5SuqXchub3MkRPPVR8pvJM3P8RrBZQEzTRHydMznGzvBsT7F6hJQSaysprZn3MEvn",
  "key26": "3MTcDF1CyCuimoL3HRJgjdNsP9c5MQyASYZTExj5ZP5jmd4yjQ5u1v1SnoC8z5rGrwg7iiYiSPrFa8ogwgKzJuy6",
  "key27": "3fXw6G7joLUahFUgvssWAL6VZBF5niyXqTXg6zXZhpphp74GLJ8xJDvQAF4XuKXWBNZR19p6wpJTJriuYjtauoH7",
  "key28": "3CZJQnRck8QT7rrZQYDaNe5jDfyCj4LMaCytF3oqDfwzRn3pA8VVLHSDSSSCJxBeDKPQyEdKiNBSeUSXhQkKw66L",
  "key29": "UVdqm7mt3woiDeWJ7nFfLkLzpRRZmBiCxeDEWkBkdcET6FmjQhTQDk71Bito5iVSvcr5xpsdQAatXDo8FLghuBs",
  "key30": "5cMG6NyK9yJ9NeardvFA3ytdaW1duZFwm4AJ5BfTynvYSZSZYd6NGxLSi3n2yrhwYqk53h8nyuWn6AMX8sgjbLV4",
  "key31": "HRFdmeHTP54P2kTH4JhmSk6hDdideceYwL9y1ZBFWk2SjWsVFtF7pHY7nSr38DN37D2erfzPdpQWwg4RYTwAwkZ",
  "key32": "5MgVgKYbtwgc7uzFUvE8nz5k1UVWmgJvtUHfgUPjB1X8rpoNgUmhNPYNcUgWun48fytPc1doXE3A36gHxbe7AhvF",
  "key33": "4MHD8HP4TJenQFJoKQ3du4bW9AapU66EJPBWzkhFntG2yMmJx1MTGXbS7Tbkm1fkm4p2ZjK2mzmnDAGmHWSbe1ig",
  "key34": "c2kGzUpUqkYUPBzrFRN1JfUfiRDSoCxd77vMmQ9AxXXaiYQ8SwYxGbCbFMpqbpyZqwqbgh7EAGxkATYCdmW8X8f",
  "key35": "4Vxm3nWvgb2iTjJWXq6B45nqcaauLf8r93E8nHuzEcNSNgTGTAj3sxVXSF6sQoGft2t1puKMXbP5hkSXdg7PfUc3",
  "key36": "2z6hCTfXQFjXjyesz5dZCkD1fExRn9SvcVQ3cjT5z9EeERL8pngYdzkGkYmDHanVA7yXDiDCXDc9FRGBQYzGfemy",
  "key37": "jpvRy2VyDYpgNL93mZYe9UNMY5aZGqHFkXqwLtjKfH8MARpdjyaVmwX8FawgAGTEnb4Ycmbzv4Xe5EUi3CyvBUN",
  "key38": "4JqT6EVnM5qFUAxwrTZrBtQh9jjKPtjbmV3iTjWU65rjUEEfMjJxjh953d7q6LQjmhaN9dNGP3zyoUDkvMMajd66",
  "key39": "63QY7EAvQbayqE1oMcSbPTVpFjfhia5rUtpd5EF5jh2USFPwe8nrht5r2ZmRVTnxThDrBjnV7JiQUhWrXm1iLmXv",
  "key40": "5ae8RQ3p4piMqqL7uAfU8T85v2ioMipVET6nEnNpoQsqS2ioW9pgUGVzCH7yYFpLnzF3PXbGSHufVJtLjMYW8Zn3",
  "key41": "27fxXKcdW4YGJFnD9eUdajKFeMdmGawtczZBzMB8vHd634ZZd6skDMyyS6RWzJ7BKtWsVrSZsXxSMtrJGL4qWMQM",
  "key42": "2B2myebECrTskF8jgUshqf4s6wjAcCiTC17fiC7KDzSq3aj6wRiSbS8jtt1vZdk43aHJmVngABxhSDXGfUJrbRFH"
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
