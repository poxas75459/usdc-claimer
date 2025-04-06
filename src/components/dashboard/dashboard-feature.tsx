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
    "n2vu5WqtG8BPA2hYLDP1o5U93oJZLZqSdDeqYgdsAqGeApBmvTCgtKnXJU3FrRpEudn6RTry1yxYwyoqxQQKWep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRgX2L6t46naKiReLMbwdaBnPrZpocaZoaLeGiUbawGKT5thaVTx62yX5QrevVQMay8uhuxvQt2mVxb3JGmJ2QW",
  "key1": "2wTyLWvKvEAWbhXUWejK647AsGRhZjwyMkTwjco2yNcBnoGbugya727U5jxojMcLWdrVaw7NYxrDgN8yffWRaBXz",
  "key2": "g37ziE5UMUTCEcc2x8SXgXTTJtvvPpyXWs8osFbxeMTfkD2LR2e2muwSveBkS4fyC9MmUsfkkZrnhdEJMyTgJwy",
  "key3": "33S2A7WuvSHKxyoTBT1xfejGG6DeA9KeNcCadfAEk66rzszhV9KUXrjqH9SmWdULG4qX2ZPHm2nC6V8k39RdvcHq",
  "key4": "pctksFLuqJ5ZZJtvG2bYVAEgNjQUCJYATgKAK94vbtqNzpGMHAv3h94KKyjwpqPxAfHpgznEEErDLhZsMfU8dMM",
  "key5": "5WCSe9VvevMzhYAxyD4kEcmXRJ2x3xc3Bf7tX8Lr2p56Wxar9DR9E3oyeBQyYk2Btni5AzupVPQVP2qxSeSypjrP",
  "key6": "4MXcb9yphqcgc4fKuu9dpP9T4avR3BLsfeqiucQrrhfD1WG6dzZGAdyQAqgrwRJrXcTdo8LQoXTcSTZJQnhhtEtA",
  "key7": "4roSnt9gqgoLbzSMG7cDGkX4qxFSX6X1L8YtTG6tYwFGXCVPSE9iyqMRmy7KCUaLbEbXNyJ2AzficCg9LrokwR8X",
  "key8": "4Zr3Wb2BW6MNWTxQmchp5U5G7FTLiKFL93CqzsKpUZC5LhQYkLbkdxK8QzLJhXrHVx2ryaQRb8aPFcWKKJzA3hpm",
  "key9": "564aLeQfoipCK2covbBWqt5PEUnA2fx5qZazgKqf7f8YaTQhx3Wz1f4mCzkyDdcnfNUhjr21HCRTCkaH8ZikU577",
  "key10": "5cAq1vu2oZathUdZnHQYmfZdRUHnsYvPKNNiSt1QqupKFx9Lg6YbUiscpvtdyFZCbZihB8TjVEJExxCCUSkWpDzh",
  "key11": "26DKYT2iKcjHsW9TxzF8NdLtEz66aDkxCfdtewKqqvj6od7NjoTpA4VozjtPA6kmzmz1FPXkoiWWeZLhEkxV8WJt",
  "key12": "3ZLeXD6jAteTLDFcVCLRUcoZ25ERn8k3KXtvj8Bc5jyquCx2pswheMpM9pstQbrPaQkNG3xLw3uBFTwPSzELagS",
  "key13": "2TnegQoNvXnUcWaRnaQrqUJccyDLzrPvyukzsyU2GWCUmvdghnfuWL19f6VjipcFznGYeZjz83cwvTSmTst1Ne7V",
  "key14": "4uMPcqNyjRSpGewNQ8hjFKmnv6P56uaw5uV6oBCt2SqCJJo5VSJPq4iAYF1SNQSyDj44fzmzqZPM6iNo7TUU2jK7",
  "key15": "3qTLvjQAqtQffFYUUzneaV1hDF4otj58xyhPPTtk3dzkV7NSSQKrH3oZRN4QS1epNYYks2s9Rw7vVetwSbwncYR6",
  "key16": "4X2zZdsMXW1oBZVNAixLt5XM4Ti4Eqyh1nanuXEEY9EfN9sZXbahgzBRq28fXKdQEt9qfcdonWBcjo2Lx9oJ2j2W",
  "key17": "37G4c6XgJrDZ56H5nA922ZtarfaMFFeiUdRFEXJWx8sqYzGJXwE5d367QE4zVBDVuZQctH2eCvRgPXzrZ1twF4b5",
  "key18": "39CyqTpaExa83mzC7WxUpekdMPq4FQJ1pJW9H7GSCKtv1QYtiXGGJHgNmdBSbJwhAMJFQfn213FsJoih87g33rVX",
  "key19": "FwdhM8i5jm7rgBhn6thZ3QatVhFcdnYnqyUTJbixZMpyncvSj7RESMEDeeZZaSQGS5RqoffgimTVTQLgdVNLaVZ",
  "key20": "5JWYiQeSqWGfqqcYqFvZRnfZjA9bsDd56ESAKfGCeu3tFKnhTU1mdZSSDhFsQQySjWnPDKzsPWKgpnkCHKbLs1av",
  "key21": "3JteL4vYKtxuSFdnYFFdksgP5P1fDpuFgANBnqT79FCtpos5X2ftA4ScozuB9xjTFycREfh5Mguhh3U6nifSgpyZ",
  "key22": "34Kcu3PomDcbr6zzPpxWgD5V4YuT91EYhccP9xUzR8dsSxFUNiPjnmnNgw2F1XFpBtcSuDw7RyJSd7GtTpGZ8pE9",
  "key23": "3Hq8eFSsNJPqQ19dVUgjeii3QzHXPrmxuguN8qycAUF1K9FnNMqCrXRbUMgxJkXgTGBZP7ePer6WVtx4x3D4ppjF",
  "key24": "4UaMy9Z8gCoqa37FdQyvvW6nppJZPMbV8Cphjwi4c4UJra6xSVBVpuEzAQByaQZqDUMk1mDFFZgErEFCEBNT52bR",
  "key25": "4LwdXnsuUZzEBAefKtAXo75BqFXDvqHQVvcA3UuCwFFDHSzAujANDnXniL7ZN5AU1yEGaZyA3DjeiBPY7oMFC5gg",
  "key26": "5TnZ294ekwzPxR1VRjRqhmn53C9LLA2qAKvgese2CXjSLnkDJNhyPLPdcBG3jL58mDhDh4HBX3eiPrw79xvmYZg1",
  "key27": "2KKbNeyyhgrnxzJ8qWCDwjbu86RnkTtu7oWwYRFqj5fymp7xW8eVNRm78SZe4E6HDPrfUV8LispBvEgyMwnMscYo",
  "key28": "5cB9XdKezdsGqXmk3gWNXmgjRd8WbHAuGuXuCDWMpMTFLsNE5DJPzk2W8YwvYen9DWNCYF5qyRdWmYU8RxdeMEY7",
  "key29": "4WVnDUbfGVvFudzPQvVvfkNxThZZnC1rgvMaRb5chN377E7EZDccfUfoLhk5yaSxFPckwf8A3E4bmf9qj5saqEZ3",
  "key30": "4CuftkUpwcikNmEfKSYp8qphy3TgAAQ6eDPzDnifVcB1XxDe9VfuwFNV2424NYatb5XrBDrVM8cNcV3C4gCxbp23",
  "key31": "5dRYGdVimS9Fc6u9uhtYXYGkiAQ5Sa92gBDDt8X1BeCW2bjtpMKhKTuQvyCWTxCgTibVPfDFN73qutZeavCBuMvE",
  "key32": "2eRJuxxsyzuMS2n6HpgBhpQzGjbWtCgRvm6XBAPofYksB85G84i5CqBmREZ1Ha3k8ceLC6Z1J3nDU4DUKU4ePtEH",
  "key33": "3WsaHBuXEGmwQyRuxhYXSMHZkwC6BJvvBTGyK33HmWZEx1EE3YE6kexnnqh657YHTGjXSSfVuZEiarizJ2wwQghQ",
  "key34": "3DDEMAaM6LvoY26Rg8dEesmp9ps8gtV1f5RJaQaKu4jW4Tw5szths9SeArxHWjDeVtLPqnAwEKGrNhnS5tr6V3Vc",
  "key35": "2bfyA29jYFdFzKaUHwrkKEs1H2m9avjTUkCFbsJk18ZQdN19KVEi7qTbEY4NvGEQsDUybzSEHmxXhaycNcavK8si",
  "key36": "3qLZ5b31Krdmwjjyre24KAbuxyLd8o96Uo1rfryAXMY2SaNNstM7GrPJh2ZZqN9V6a28edhLWb6RCiPoCrB3kRJH",
  "key37": "4XT1fea8UWaYg8sUjEVShzGRSFFT6jmEjuFALciTtTxNjVAfF8ESnwQBPjJsiU7J3b3Vjorfjv7Vpc8Mb3q2bYTQ",
  "key38": "dkMFW2qx9TTubSEaKYDEUzmbWyGg89QEvvW55iTRs438YyFVyb3rWp6zBoWLNzgBYkEMCxuREoST8t9QyW32F6c"
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
