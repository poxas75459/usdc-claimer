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
    "ZxzcvnquC7KGwroJsFVRaXdqgRnWhsYFXRijvEXxDhJR4Uf3m3fhGymzoaWyM2C88DuJo9ygPA1EjiJy3Lhq6eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5R2pT9tZNW16HTXeehBQyAaR2PBecS3ekW44yQBxyqJkwyGmn44WsBuyEmneMBUFD93btPWBTyXExXokRXsdXt",
  "key1": "5Wrm3dxywyazai37KrsCgXSoWALgeTvxYxnx6x3DiGh6gyuMByzJmqfwfxfi2avrWMTqzB9KgRSQ5HyLPSfiefMi",
  "key2": "5Z32svq19xeACbQFUvXtFDLeJHpPp2nwSJ8tanCRXdEkYaXhgaeQX7bSuT7FLzeBtFQQCUpwc1Wz5xGuXcBmNviV",
  "key3": "5qxefeZr5NzwrBtKzURi9mRthLMZDyReiC49wHUD4nhpKwDXCptF48C9a1xT1fnWTp98SPwCTs7NhEFuAMXDTRmD",
  "key4": "5jFMBHSLjodHxZLh1znBM15Ja1qNVJvZTW6sNLCmEfNz77LhvYedeEKgWafBZHX84U8Gbi6LnNwy7pDpz1tE5dFv",
  "key5": "4YQQ55yBb9tmwjxnhpf74rftsRHKi5tpUuQ23dJX61FoZkD71jfunyEyM76WYaZC2vjkeAdBiwm5j5mKevv6qaeB",
  "key6": "Vu5tXdqsEvRBm3Qg91qRJJyEdu9QHm8opkgVJQ3pCvL3qogPD4GLNcAvnhtxMPHVjXi2CrxbdqUjdu93E33ezvK",
  "key7": "4mrGKxzFQVk5N1Bf9Tvf5YYQn9gJc4na3CKPPVRNNaiswPJ83Se3t2gwRWwPBy5HoJqaPxqN5cMs5ieT4DApp5zc",
  "key8": "6GMJ6qu9HVh44mvwN32EX9WemrqHD5RrhuLCgxm3PVuYyXEiQvPX2JgP2zjf9jdTKufsbSE9Uxp4moy2Q2HenWz",
  "key9": "A7Q6QUF9YwNLyHG5PWKnB9oAvyhfZdanP3E2UF3kYca9LTi68hQPB2NAXFgGVd48weRePfmGJRY4QMQYBcWSfbm",
  "key10": "5YUBSmbrt99rCBYnuHLGFFhxLfMRB8qYBW6HbvsQBdiWWVW1Zort7JSUMFd1tbLGvMnrST1jeAyEtxLa6L6iCRxa",
  "key11": "4p8Kk5X1Te73FmQY3diGj6JA4T5vFht7buyicVjZ7qiV7jvv8dCrD4SaUT6ZdZky3Y6Gzk7UY1fQoxrUFpqAgkRs",
  "key12": "5afzY18DL9SAeo3NkYkJSc9ucNQpV2Qxk6gT7KT82PVe4dncfd1x6BsRV22DvYkGbcpF5jmSMzmeM7k5hi6KpY76",
  "key13": "2bnghBtZ1nM5XAAETj58FsnU587rKCgx9akKjEFTFo2Zf7Rj2oxPpgvQ6HfmnhctnCWXTtKUXT8YbBdeLPQH6HSJ",
  "key14": "oD9GmzChDLyBR67CN3ScoV2f7hAhVcVoAq7Bjk8T4Sor4oec1K8FYfkSwuBzW3uYWVAfzCuu6GwzDXw2GSuGwy4",
  "key15": "Sn6mnUqRf8SqDa8MHT67uPPuJPpSGneg3ixjB2VwfA3k85rkp9vhpB4VborSFW3sBh7NojLedYUb2wZt6kW1rYW",
  "key16": "4kweno57w4mEKLDpoFnsY5D8HTtiftWbkxfRZ6eUWhBaqWDgWXrBwEitaa7mYWG1W9jetTAM3kDC1y9KC9MNEJne",
  "key17": "5BDDBdP6rgoJN3VTeACnLNZzD8g6pSctXdsxzDjBV9ukCa5B4wJgnoxqWntBq57Ae1CWnim5gKdJJZTE85y1cmQE",
  "key18": "2a6W25T9kJbMqVVzhXD5bFgiYiCxMymt6rPVH69oNKy6Wuo4W8zeVLJ6MDk368MrXSoySU3yFwBZTSKtm6yLg1WH",
  "key19": "4iymYf3rHjY4U73tauRJZsLCZfmufxYqxKY5q9h8x2CYRQD7ngF2xFi6moP84DtSfnsh2ic69dKvMw9PWXgTnL6R",
  "key20": "rJFcUJQ73XyzubhvtVQgAimCAfvhQ37f915BzBk9MJn6bwmgPmPM7YtBS9v8yge5y2ZXjVcF64zDcGN8tChCA5E",
  "key21": "4Gx4H5yZqqo6PeTe3PFJqtBAcaNG3w8sDDQ1Xn2gWj7gUySsfPSwhtX8RYd4mSaiQnkDfUL1yHPsxQpnJ6f9JHkR",
  "key22": "5WCGEd8aWaigbDPz8QaNBX81KQJVhyjfuBBjth98DWGs7ka6i9ms7YfhVVMXvok3jWw6XNd8KYJER1bxjoFfcbDc",
  "key23": "WsyG7sMaK4ZgB1E64jQr89tuBZFTF9QAqq1KC1C3YiDNuBG2Np1ottPcALz8WFn8fNz7CqCtfFxhZwsEfrXsTxv",
  "key24": "wyQirLk3da4eTENJDVs3Aqs4EXcUKArY9rToNHc4BaJb9CHx574qmHxKjJbW8b1ja2CUv4N4Pt9dXuGSpSfSeuT",
  "key25": "4XVu6iDfoK4YPYMoh4rinSGcUYYqFzEu4q53xphMsN7FUas6oTN7aFa4etzRXhiVSAtb19h2yXxkT1vynkoK2vGD",
  "key26": "UEXDLUg7Y6qr3kWAunqeCLDbAScATUdxjRiD8yPJFSLmBABJLMQXUPf8v4cMSJsGBUTSBLZzLrBcdBy81NZ4KH1",
  "key27": "vZJyAB3P9ydAvQDNd98EMtnjcuLD5MrXZR2JpKuQWntXgz3Bchnj4YTbVaSPPRWf3tHYH241SiJnsZxowyKjbUM",
  "key28": "2hj5QkndH3bSkYiwm6Ddu1A6KVp6GjyJsrrUJZfq4o6H5yzrSVZZ9vi6W3S8EdtkcQuZLNXP2HKH1Sq7Sbkvt8nS",
  "key29": "3Rh6hsoX8QrCMoFzWDAsmPfERGrqE7xA5P3PKMoMe968JfYYqkzTMiqeydWtbLt6MhuhHbpScYGsAqbqcf5816kp",
  "key30": "9FjjPe4E3xTXVPtje43vWrQEPYR6RAx65iwKipVjqLpxW3eWeXya8UbhfzKxVCp4asGVUVG4U3fwHDjue6fd4jE",
  "key31": "Tz2i8QKwt18GhSdLKwAjkadsPM1qaBC1z3tdjN8xdNf3i2C1q7kwmzX7zFHfE8qXhgxgLF9KWHDtHTWKUWjPDFA",
  "key32": "2pSdXReg6EbdkGUtew9SFEw3Hw1zJm4z4puVCbqo1Jwzc3Ug2DX2PKeAHCprceFKkWoaqjSR9V5q5M5vAS7UhNqW",
  "key33": "4XqEGEqwcw3oYLPoVbdHe2RRpin5ZRcC3Bg8wBXhik9wMNtqk952GwvGcBYW6ELCDKHVsoN6o97igyz9ZeqUe1gk",
  "key34": "3fGU1eMr8ThzJevgkuyjpWiaMDeTA61TqPFLd8hMXsB6D4ZXsVALrH3dmce4ciRgujdy79MGyDnm15Lp254SvzCe",
  "key35": "4pMHuzefQXJhnhD85SDN8BpWeNqKNukB7M5qYqtCDfChj7VvfHubbFUkaedSZy7X1wpYKNkPag9KeC67YQRm8Ap9",
  "key36": "YXfD485RPB1MPp15RLJFqcAPBrW7tznmZtsD8UTnNs6xGn5vVb74nDAsTb31mStdcZ79n2pj6YVmJAGkoQZaP9q",
  "key37": "5Wf53NGQhzzoNJnpAq5rrmWnnpb5mbfmjdfYS7NXQH75sXkeMXSYEujyTuQpt7C9ef3nHR62oTeSLnabQCYnN8mr",
  "key38": "4pKArY9ii75eTyPeYK6yV1CbAwNEf2YwQwcTSeJWXf1mzDo9J82Et2iMguPLVgx2ykETTCCv8muzYkLV9BmjCgZW",
  "key39": "61bZGYy9VGgmuSumDeiYCqevvgycEyGmAZocRqFnR5a6GGezE9pcRBffLfNtgjJTp6oRFK4DNWSjjFSgDv9TdTRR",
  "key40": "4nKNo8XhH36LiKPvS9UUQWyhhdknwcqh1NrpmtFyxTjZ4nURv8bKH84zrQwZmEcpPAgYYYAkqdvtXeFTtU8hF21s",
  "key41": "5btJTA1tjSo1HTZqn5Rq3USPDmH9VHttkdBYgpTADhu2yRa1sCPcSiUJegTfBNdeJ7QBJU38PBqmmZzSZy4ERAi2",
  "key42": "4X7qjtWvcM6xDfC5u4XLFKCyzZMKEBaBMvfPaXFwWChvzevrNSt9TzUdSX1oppKsLd3m7rjjvydCKq3CrrJ25CcL",
  "key43": "5n6DEN3qZ6CdLtXRBDv1Z8rAUr2SLbbnBaMF9EMMzguHMwr2vgRB1KdnzrxGH5yY4TUhUwtMBjQVCnBwbEprWxSk",
  "key44": "4M7WE5fmBVtWYqHTMb16Vbii8rfacWzFJL4SeoufmuGQweSgcfhqWe4Cye81RTeJoFRxYsJRGHKecqtn2nkWoZKb",
  "key45": "5khDNzsrWk8qkghu6aMH4gxmV3FUSiB5VqRjP5CG2ygjo7CQ1DjzpgdYhXLtYTbH8ufvfhpRN4ZnsEaSer4S8MDc",
  "key46": "3vKeEV3fso7qtEC13GDgJhUMAWpkqgd1bt8i2GagjXgHKQv8W1CEM6BcHSYrTXHcdz5RoQ4AdeBQGuBDkQYuxFdA",
  "key47": "3ptMK13KGjcTsmCwkPDQPhYDVp3EXhsAbTcsSV7R1JZrBJo7wdKd7z5rqdcS43bYGCn9wA3EiH4ZnkA9aLvCwG91"
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
