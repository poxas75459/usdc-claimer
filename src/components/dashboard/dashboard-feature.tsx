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
    "4zwpgfx2CT8mZepKEFkoAtsSKhotFgKZW8o6PXePypr18ARsFXM8ebSGM3mT7xpb7EXQoSerdv7M62WUtk8nnbvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WE1iTPz7TMwsdcF4CwxQ3aB7b9Bg6Jd5JMNGSeRocmSqiseQijzjsVt9JTrpYQV2gTzfpNzt1DDo2iD4MW4xsqm",
  "key1": "4xzZN3qgrwsqv7n2euZXWapZoTMRP9FfR9PXrJMP1kiYdpcqkCsGirun46PdQ4JHCZahd8EVjzxJbeA393e6Sejk",
  "key2": "2Vw3MQGMUpyxy5Lg66hiDiVCY3aLHw5RN3sARLyHANv5WciXkFTRB5ucX9z1SvQyjaSYyEuqe3sY1y96enu8mUGY",
  "key3": "4xn612S66cH7HAoahLXTvcvLnRNp7G4cJeoM89jJu4rMpsM74ExEBh7okS5o6XrQX696fDnLjAmzyahSFBSimCKH",
  "key4": "4Qip5RranruAEQAogsoV3vtLhTUe24dYWih5Yh7HUVK4Q6nDXBHGQb1ndzcMYP17JA5Rhk4j3u6BnordqgRsv1dx",
  "key5": "1np8VgVUkG2VLD5g36UM4VEKmH549Yqoe7mNYh2gTGmLZWWCfYv8u83h3RrdpghVtff1pa4tjQTtHtGe39XoSP4",
  "key6": "52FkamYqSs7oPFCnqJe4zoVBEM7VUBxBrxY4pHYhcgGK4MhNw5S7fFHamHT2ry7yNMbpLqJCXoGqiVoAfhQUyEJr",
  "key7": "3yP7TpuMT5VFLjfw7h9VjiX4Z4W4QzNx4PNke6RxZ5KeejuYKXe6mhUWRyw2n8a9Qoi1c3wN6J1Ym2Q11no8JcYP",
  "key8": "3f4cL5RaHjzBBnZeFSgeyrrijXxd3Kkb4L5LQhSPUx9K1c1AQjacBUiNtsRtAPw7kQcrSM39b5qyUoX29cac9cha",
  "key9": "4iHfqasFP6s89KULRTkG86Tqpw5Y1a5GSoFFQsZWPcryUUsLBMRwVVmURemWB8FMxxCSzEt2bBV95hBMXgpZQQS",
  "key10": "3QoGpZXqLHDsW2EJ59qHWyqc4LSTxgAU9HEJj3zxLMZVCFZddmc6wJugx4xi5osWV7xPSxmeSSwr5VRrcm7gos9F",
  "key11": "4LyVSRNDtFwTvNBHVrar8AFW7TbuafCR9vVmA3yGFtjfGiSnc3BrxeVsyyS411iHnMe4SJnDqw8mVVtuYamuYXDf",
  "key12": "44m3j4dWVuAutjriSLh2Y2DN5ntAFoZ5K9KXCa1joMBUJadNJuTKTyPnEx2uxX4jL11aPX8Saf6ZJJ7i3mPXyjSB",
  "key13": "3FgvUFGi69nr5ANofi5y6b4oeM7deHY6fr65nLH7fFodExj26MjrPGmUGgZCcZgmWhoBs28DxGSfTnYFRBUEgV8J",
  "key14": "5nQaTEVZsyDQJKgymuUrQQxkzLJDHxbKtrj5pRVLCofe8DJH5LrQmZdzARKa96LX2chwnytUKGRyAvZzXHW7H26M",
  "key15": "4Pd2FquBiXzdrP6T167fQtVt8p5117rsXfh6A6mgmXQHVuRAkeu4MPgn8JLCEsdxaJGP4qZKoEBXXjvGE2miTozk",
  "key16": "fNhpZdNGXHyEHoW8mHvp29LpZZNZymTZ3zYPNq7vVskEPFDLEAb5oRBepmkwd3osTXWkXjCSj87AjvyK1gdMJRH",
  "key17": "2kB69ayzwriBqWiN1Rz8mK2QaoEWWAw1vr9w37f7BfRxPP5X1ke8LPm3BDwFYtynh1EjDFoT4NK94VBXaQPkN53M",
  "key18": "4NMppnUHeWVx9hrVyyATQS2ais8PSwVY3cifjie76F8vYTRPjv8abq2i5yLzLK1zEvNMoESsLmL7qqypoXhNMDLv",
  "key19": "4mvicUtZCaYa1jxj4PTofkHnSURgsCTMrkZaTgraTrLff5HYu4Euj8iQQtVJgyb5NbKhY6aLX664UNhRVXVVEHeW",
  "key20": "bRmZSnUNQyhLkCu5cVeExfbPc92Zv4vAuLLwLxM3A3qmTusJFb1oEWeAvMqg3TnPr9KijRh6aPR55Cdxj2PNngB",
  "key21": "235aDyLGNZZbabgDPXR4qQRSXsBLju1qoFSuLYRemoVqkCFmoX6kLSBvtLUV2UALcocv9px15rPhqLFerKvnLggc",
  "key22": "4Dskct5eeh9UK72QQ9BNBGL4F7HhraJaWVtRpLUJaJJxSYsb3N9Y4q8mkSL7SesEiUwVjU67JeRxyF5jng2qVVq4",
  "key23": "2vbBG5oNJqoca8Yj3WCkDeY3PyZtM3P8u9EE2M9CHFn7RY3rb8xbU7c1n5Mo9aNAtCkaR47EjvrdFWepqD3PvfFv",
  "key24": "hWE8kW6UAF6seUrS8VnEymBzHyYApN5JCZjSoCaLAiKUE6RsByyQvnWocSD41ce597MPRCVA1xyuCmdgTSVrRyk",
  "key25": "5TzDMAcU4fiWoF9yUyCtBGWM1TdgFex6B25UBTpTqfpmHSGVPhkQQfjpAuz7jbnsmnMZU1x95S6bx411TEAcDUbd",
  "key26": "2DbcAUh3brKhafosjrXG3rReYzupvunrVXXLDxgjTjd6nQcAZBeJjTvmap36QKDkfYtzSuUoqeG4CBdbAnhD4LQp",
  "key27": "62YMDkrQGNqKYAG2jieewsHyocF4rMLLecf6CXHCKp7bB2svVVpgX7k5YVaNJm3wr7rKKENDxrUvPGX2rjz98KHN",
  "key28": "2NjSzgCKQ8NQUo1MEbZUbpcHvPGsAWY3XjV27w8DfigpGHJUkSv2AbzXMYxgmQ2rggoUKMHH4P2UDvnoLaEP1Lz6",
  "key29": "2YPAg35XBFTdWQwG1QRGFZ65dUNqCwjhWzFhvBaHkZWFjZsiVLbSvurzPB2YBRqTBYAjJ6KHdhBfxRzV511wUuSg",
  "key30": "44Z5aYJm5ZHSAdWscwXP3EexCgGrpxnSSKMQnvRUGaHGutWGMTdH3ai8c8RVp1kiJg5uA2hbmgaUZqizXhm6U9f6",
  "key31": "5yxd7cxNND8Um1gVNz3Ktw1Ctu8H1CqZeD1LdfHojcczBrzbUweLFSFDV3dZjBzX2HeGJK2dPXPbLX1CRnn6i4ET",
  "key32": "2LSNaLb1b3CVRLz7xy3mGgW6SFFu3sNfSU6fKQkN9kZKEdBrUmwdfWHtpMZpqouo6muqRTaBbdjwpBp8j6tJZwmH"
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
