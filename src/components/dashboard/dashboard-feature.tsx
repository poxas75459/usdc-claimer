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
    "64MqU9CrTRJkeRdn5WQk4SPzxCkubgnzbsXEqwq4ecMt4zVhGaD9P8cbi9CKiWkKrmhTLjxqRVvBkorDqCHRatvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTjFBtj4LgkwkHL3Pu67P4s587BTaVeia86Y1PBK4GbH44mFZmH9cMa7YWu94qbb9U6PkAAXrk6hT1psBANczxw",
  "key1": "FdDzDdaXrkn5JWB78JZMryDyu9nAVsYBxiMGnFYLhekNwQf7dh8iDigiunArRQbs3Lc2RztwtfXgaY7YLEUPmr5",
  "key2": "Mppf1njGPivWTWHRhJpjc2cgNHrQSjNzQVRUV5byfN4AHWZWGskkYWYKzbCxuNWALP3vQkMBCNTDGjWnxxo3Kar",
  "key3": "4p41bSyDBn12FuB3xioccfzodFFmvXxohpqyNfD6hsbkR6ANRGn7e7AAJ36L98MtXczz6znrVBbAcejsNY3adeCG",
  "key4": "3QE19cu2Cy1BdaFwQFDXaYF6RCGdQEdFjihquUnjrbPBuq5uLoDaeHLPJjDP3LjwaTmAr85sfDofT5P4eocBYdG7",
  "key5": "3hqexc6S7rrfNPui9DLfmSbWLok5SgPQmXgSYJUEnkTZFkkiMueUMXZg5sjqf18PKzEYj91DUjFWNCMK7sotc4vD",
  "key6": "62982ADmiYH1JfE8jE8unRvXKKkSVXGGivQztdi3qzBXprJQtP8MVxCH8PASas7AwEPJXjqL8VU3QcPErZQWuGGe",
  "key7": "67gdSqiZwriGUYr3ZrvYzEiKTrhJhUHRaLTbVBLtM3MBVXfHCFgCwbTJtzUyrBbV4ak4wV4Yo6tJVRAqLKEDemE2",
  "key8": "81w4QEEACzYZF4jriG737CajeUa98BPXVbT5CkHNtkJsrRcCxS7ZFtoVsh5ce55DEbMuodLsZw7mbmcJeEYbXrB",
  "key9": "2DgyitpMBDHkn9rctN6cma3VEjEkRj6zh2JZ8mBDXPeBTX2JNsu5SGS4bRQi3EdvNHXW69ZFfa11M8foQoL3S5kd",
  "key10": "gvNWGc3pXeGNiet2T5RoXA3MRNdZQ5DQyZQk19F9581vtKEKjGRdZHwP4y7wnSgfAzrxgXSHgUMcokPuPa6k2ym",
  "key11": "45i5yroosYHpGw6W26tSciNRPickyeoEhU9NXLjk3toxD1B5fzd62Svq7C47v2ibTn84ArJmUrWKzU3qAoZgrP8Z",
  "key12": "3QZcs2mYSQkQEqbqUnz2UeK9UgnFhFMLygy3fANt7PD4PgSbfz37m5uQRATz3w6g8VELEKNZyi6PrPPeSW2adMa6",
  "key13": "ALo7HtZWfutyhcyJUny8jrVBWeh7u9o9aQzhm1AS82m9UXKt4JACNJdkj9zb9f46Skf3HoFzSAjkkJs9agGKBAs",
  "key14": "59sFtzGchWQPBuiDuBpwHTUFf51pD75KzSjrxdBJ8BrZ45j8bqFYYVqsJgV6uoXn1nDHUbdsokMdSsdPEceGA13F",
  "key15": "2kbV3g8ye9UGgwyr7EFZiwrr2JW7LVJByHehhYeuubm9NC6HLNYGWu52UbQu9gyaJyuvM8ijdUagcvNYuC2evkCb",
  "key16": "h8jTAiH9CC7rVSXyHQVbjFmiNRp3bSpcNkvHpiRuZa4S5FRaH88GZ2CN8QeeLd2Y8ysHn79VHVZuExvw1wEzKcb",
  "key17": "kagSWPfcFeBakhgM2AS6Bsu8UrJFh2uja74gSK4WfzykMbMpWo1zR8D6P9MAYkgU2QtwswVASimH9iiQnqou2PR",
  "key18": "5RrqoedtUorN84G3G1XGycZuNQYzVADQdb8oWqVmjtyDFfzEh4nr9aF9yo6QuuQEZfQer6TRwdMENRhkdcizNCvf",
  "key19": "StPR83XydxZEE7RcWvArAojuPpjCBY3etnaVemRtSZhbtaUDqM6tKNWypmajEFepEt8MD5Feua6K4fuvLyBEagH",
  "key20": "HHsnhsJykNQmvzPZWkPa8FwQjgT95m6671M5dWnaHmGYnBawjkRKnfYDioKNCXzC6c5mCkSYTZtKHAPoZyFBGv4",
  "key21": "4oBuuEekTUngczZ6h1mkdGqTny6E5XLoVcEhkCmdBiPC7xWty1SHUFEKtFqaB78keSuWXbaKSmBRyi3Wb1N7PnXu",
  "key22": "3aeRuoyRPj8XrsHQht6GVRroUxCUMP4sDjLoH83Vpb8r6A67ctt4RhHUJk29oNmozTcofwxJm4tS44HMX1N7j9q1",
  "key23": "54ZeqD7x7KT3Up4RR4wVdLwQQ2p2o4Zf43TWWWay9VzpZCXAN61EFHmkRXUyjZpwCuddybhEE9gcD5sKiD13wjGh",
  "key24": "4SyDVBe6BnDT1NeJeQyZwM8DBMNGk7kQqsQVVaDebB5Dd5rK4m8BSf9Vg97fwVtTdvtaARXXnEx6btZfuMpfrp9Z",
  "key25": "3EBwae8RB1HbUMNU16CYWbkmkyX9NWVRJHyZYxA1xzDS3y7KUuHBQgb8EY6q7wwJdeC6w1LL5b3vh3fMTEPaB3v8",
  "key26": "51cmdraHFvDf3EzwkriKt5CvyfgFMwS1VHM7vqUoisPdJiSjBcnbJ139xjVQCNiyYuBU7R7u86CDiVCZm8oCXCrx",
  "key27": "4TbeUy6i1yMUnp24C5gj8dyekoFc4puMQiBTxFm5GzGdK4fHSr8T8Vjma9i1SzAvoTntC2vZt1bXsvAuB9oUtkXi",
  "key28": "2RCHoV7vFXKWEKRW79Aw65wLmmWLn3ZmHSkdZ7aw2LYBfM38sYEW26RB5WQ71F2iiSLtU1DK6eQ2Pt5pcWuCt3rK",
  "key29": "hor19fL1G3xjRppm9FfW6qeJaDd3eGsNti9Sfc1GpyyNoK3F7cNppfpj1R5za394dqrRZLxatkrepENqzqJ7Ls7"
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
