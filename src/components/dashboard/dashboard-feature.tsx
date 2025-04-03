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
    "2wkegJDoonipDd4LmMM5jXckRZshd4khEUvSF2kWEnHR2ZpKergwttyjKawdQrWdE88NDsAw2jNTBhhN7CL4Z2Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7pfRLfnihzy9znh6XqJqEs7V6cZuUB2NcVq6jND74vwJWveWqmSvhqoQjz8inukELRUNC3K4jxRGt5RkPWtfkL",
  "key1": "4hXAez81AvQBFy61S2Tf478BjvauuGopZMwsKmYAAv4bemxUDHs7y9x1J9NhZFcnVWRNH7N2pYtfGFss7HHZ4gce",
  "key2": "4oEjV7gnG43WwEn9VHRscTVrcprdpGqLYr3CRuchZ5Vp8UdNqVmczbGqo7Cb3ymrnToTvdVrpcEkdBz7LosJwUf9",
  "key3": "oREjg8wxbzPVycumKBPq1vHrYy6YSAdWxDAcub49qry9XKMAiY9JG4bA4WooHsXhC8Kt379anQfLnZA9hanthek",
  "key4": "4AKnpVUev7S4ZqqPNmAvWJGpKyTZnmazfSQEX8fZKhvvz1krGYohXx7i4F1y1z9K4nt2EBD1egR7S3NRpr2oQB7q",
  "key5": "C6U526eGzJLVkTJeuJr5QHYnBv39fjRNyKbLHfne7xBsvShSHxbZikjZ9dshARinUZuscqPyPXVBcvRwsLgPHBV",
  "key6": "4uPUjtRH9jo8gQ88UcEXadeWdpAq1ZRnEDEQgRJJW4Upuo3mVGkGJJHVeXfvHaQummptoJzNVPeMoaHpcp1thN6X",
  "key7": "4w7VAN319uDjvp5E4mW2oZFx8NFZYcBy8Hmv9ZjeoAaVpQLisDPehBr4pouVjM3jL6ZUgaVKkcJrLpViMoWgxkhZ",
  "key8": "1BRqmn8PcmbxHaHQPFPFmvFU6ajvLYZmpM2ctb7Lwy5jCCScjCSF1CDCiEY6vXefsD6tVTRtZNjRG6x4jyoPJdU",
  "key9": "3pgUheY55yJrnLX6GCoRAXJFhKAgC8tTbvzrebxJPdjmimhMURjr549dPSanHW2bk32sXE2bQJfn8ADosnUQoWpn",
  "key10": "5eMvLhKTtCPAFYc91FRt2epkdsVEinrkeftcyUJ4hopu6uYQfnPDbfwLSCLa1ggAFSD179LCaj1SwZPY49havUGM",
  "key11": "3GKbfYBpK74BeacQpk681Dex6W62n3ifBc8SgMhHeVmaSVSVf4L9RXbekjjCxPkLH7YkBgZ7cZkmqzmPiqcSyY9C",
  "key12": "5Wt5ergxDWJuWF9xUqmzzbzFykAg49zJoGroGWvZURDzBDHBxX4CPntfuGKphcppHqXNLZjnmKHvnHtAVprxCbzH",
  "key13": "2bxfrgZnBKbUo5nArjVk66sHgiub14P4ufeGtQf357HuGPFmFGuxSdGPHKSQkA5q8zXfkHwxosVL5VdARxkddF3T",
  "key14": "BNhNAEGthehsb3ErnPrdTNjzYSxpoW9AZv17mMmhBPaSZkTjWSQF6fSx8FdbPccJoEVZtGkm2Fs9KmVbyWc4mUA",
  "key15": "3aApkiXFEd7VYunkexncLtqBpEEjc8qj1zqC22LnaKVCT7pXY6imaqskT9TSYuMWJ8m9WMEvTx9AXX62NFZ9jFy",
  "key16": "3AJd9n2FTWwdDtSMz8zyZ1ewLg3bm7EekWTjQtXLSucS9jpG2RwjUeSXmZ6hmviqDbS76GjThF1UDypdv4q1Ff1a",
  "key17": "4JserNQH4rzc8Q196sDAeQZAtSqt3wf5x6CeNC2DWhNH1cvDDRxsfBhuL7Q7HJgKceP4uUNwGYhf1EeEd7JZ3BgB",
  "key18": "4rVo8pQFMmkPm7qHct9r4cs1xb1tWhp2JtxLATMyFzsNvjBQeqKnKxWLvXPHA3GCGgpPzteGEo1b5ejPpXpUYxkF",
  "key19": "2KvaCNigvspE3NQ54BHeFsJqrpQ3uJ3PTaQxqBMTRvVZEZabQHkoFbRa9ktKxqJWVe4zeR2MgjbhMdph1CXbTgGT",
  "key20": "2kzEW4V97ofaL1r2eXAget8kSk7cA7DWnWHo41FQotZawUEFk85jTNdrJr63HZUBsJUPdJcSipvZ6bevzsEW1uFE",
  "key21": "4stZa343Awftaz87KUFWgc93VvYwz9MemzeaGT5m3KMc1K3ct89MUnExdvX2YdR4N76wtZ2baPctxu1mY9w3o3Mr",
  "key22": "51s18U8j37QLGMEKN9xHKzkU5iyLhENr3v2Egf4m6k7imED3e8Y4XQ5DuTitLcnHRn13DSCpYXmQQy93s4bEWr5L",
  "key23": "2dMJM73UNCgMTiHuk6sXwiHPRtaq7SEUKYjuTLLNY8s7EUsCVGHCoUMyjci4fbPMqztBqxTEVj7ptFe7KM434CWu",
  "key24": "5Nzo9gbobK7buiWRgo5mX4ueoCfvBDBtv793ubZrEXmsGDabkvgxnjJhvxCxEtLaG7wUJQ2SK6rXQ4T1JJ9cz9Nw",
  "key25": "5NSSbg9JysC7FXfRPJokeWrPbkYWJz9XHWcZHn4Au3gwCqRkoXfPSU3b8QVYtAWw84cR66nWUkmfAtxgKrFuaJSk",
  "key26": "66X4kdAeJag2hSbJg2mYWAv9dZFG6PfTUhtJFR8mvi1ehCv3LA4T6wU3Frhg3rFEH61FdneqpWTcoUo8h99v53DH",
  "key27": "5fdDfyJcC9MR3F6JSNno7jZZheQ4p3evxwYzH81vZfa9ReJ3JcUbynoUdEhuaDstyitzyDP225hqwTNdGj1g6ntb",
  "key28": "47qDZDbxDAY1955SktUgDtB32YaxLB4t2Hkvxmp6FamFHDTQQ9UpYbadP3b3uvwiJek86b4mCkQ5vMaSZscRdTWw",
  "key29": "2FUsyA276imSRSu14Mmr4KuipxtY6Pum9p5TUztvr7QCSoS68oFdx2KuekoUmtaABB5F3ZTg4sJDcYeJCVs3xGS3",
  "key30": "JnXE2npoVpRnnWJRSu62Hnag6GxUJgyx34FcKnwevenpacED7X9bGpJu4LkczCkbs4XkERFbBPH2eEN5SJqzQRc"
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
