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
    "4hibSztsFS3Dj8xV9inLavybtF3y2qYgsZBqmiSrwrPzTBCdGhF8TMrV9MQkvwRhfegcAqqD9pFTJnKBE4keG9qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekcKsGDuaCenoExDhoUKtv1zCW5gN5H8EbDYGSsSkq5XEzSDz5TWgjTVsQBCUHCR84cfV4faPKDbsVWzuqbUzL4",
  "key1": "7Ltcr6WHSVRR8fd8ztK3DdEFZCmBk1ZhGUQM1yoNwJQt1FT7e4xcFsre37wWk7Ssvqj27dcwms7yHV41xExiVh9",
  "key2": "3Y9UoXj16nCVFVVo15KCoYDd576g24wtx8WzdzZjZYU2V2EhUQRQLV3NGP8zTXoccbq2PTKwDXF77uTrKckMt8iC",
  "key3": "NGkgtUsXRHD9LrTaYLnNMaE5a8EAbJudRMJaCfaSPb8epDM87rweiH43CiGL7o6uumhqNADJeU1CKvgpUye7tnd",
  "key4": "37aNr48VEUXBqLfUE9ztAKsrceLkZqjDVvwd54Kgn4cqw1teo5UcCkdhUxn6N6iP69UZNj6tqfbYu5DMUjktCtr9",
  "key5": "2CMdLpAFKR3eqabdvvjuBPU7RwPRydWJf4dcKYYR5YMAjiVXYd7psU2KK7Y2LEXt4mUQgtyqLLXDjjgesAkz5n7S",
  "key6": "38Q3ReyngQX8j1Ykecu9BTqHkmjwvjERVtxRyf4Rm3EPxgLUAYuNXAkKzVbECjwne2afpySBrYu194tSjr5TaGq5",
  "key7": "37U5edi3u2qLmkX3PsQfbnqYa2PCXRdb4GUzgb87QgKA3VHiT3XEE7mNNHoZeVPPXYpypyZ1dnA38hFJFdjjHVbY",
  "key8": "55wBFMmGYdh3hv4HUJyABaNX9w6qc65UyJJUiokyVPWxKbZVyiCnf6Qihy6G4RkxMpXMe7SYLCjyho7GfYYQBbbg",
  "key9": "5ULpyDvrZ1hPVJknZuTZsuiLxEfXFeca3sopjpH6rSUfSnDfWEBtC9k2XnKWR7xmCdmaqmCe6gCoSUW1wp9nkLpG",
  "key10": "2qpdf8TtfJBks4shfKyDf31FvctC32NJEfXo7vtJRdQShNiNJo2ndjoMte5Dvqipp36CD4tpJ5jVb9cfSUbSVyjy",
  "key11": "4p85tdFXbsN2eDVrRihsxp92pXDEbxCc4xHCnDZvdGrjuPKSefbtSia6mKhCekzSXCzakref11yDza9vvz4wS8VA",
  "key12": "4aNBEj6dtmVkfZZFSeecgDkGaakWStqWs1ZTFBC7rMJUMiyZmgjx4yi831U9Jo7en4e2acpv5nCZzyeRUdcAsutp",
  "key13": "4EyWUBWyM5MQcXdSQU41NjcgXVsdwgFH3xcw9v8xMqgV9vJpyzmd3hnnpiLaYXvWsJDvyBdoRBxjt4CtnDRqSckX",
  "key14": "ccotVTTL5gD961C6E4yzCE7QtLPEe7pC3dWfif8wegmrBeDxBdYo5WLERr5p9kPjfiHWnSrmAtih1RAj7AyNhPs",
  "key15": "dw8Tcmtnmvbr1CfDGC6RhRL8yjtiCQLgVPe9c2L86RJaKv622kWNorkPdkW15xkmTUMR9gSWarfXBhgzHUxkkzd",
  "key16": "2CXLg2pcRMDjEN41yDa1uvjEXXisjbYRbZQA1ECFtyxWBy9DZ5TcV4kmApBhQYTCWdTSCGZKz9VPoCtNr8gq8Fv8",
  "key17": "2rLEJWHcBVVjdZpseo8k6vHEKGZtCf7sXMiwq1viDbu5rau8pY8qQ1sG7JURAtXbm4wvr2JR8EoU86cRjeLZf6uY",
  "key18": "3A7AqgU36eJFmYamkKEDS54iTxZERCySZC7Yh2QJ4EYJMWj7Ma4JD38TqFtBJUchpnLmKiL1GXdSTodQJ5a749dr",
  "key19": "2V1Nn5Z5p4aYymXxVMZXdDVSYVhmpFJsG76N2Ncq1dfV8idyJm8ehsdWA1mtnkwF4X7LQxrdQVLaVbkDmNHcRNcB",
  "key20": "61uR71STXmTxg3481Ayeb5MRRPcRBp2Lx2Rc5TVp6hQdWV5N5cEWvX2g6SKWKDZg6rZ4vBkkah4YQyGKy33maPd6",
  "key21": "4BTwzpmFwngbZshxu9raVVusjU772DcC6gmzTkmc9uaQnu54t8NJPyvsedwmaeHeUTXj4FfGmUNqBbyejziLzYvs",
  "key22": "b5PFS8xEJeXnQZaEbTwHtnBxKrAtX6mwe1HohEyLVTw1YbDN4FFRWdrvrSL5ZA6NhY5gvUeYAABGiSQf2XizM6S",
  "key23": "3h4fr2tgRa42xBZWCoCRhEBTGpS8d91cFM9LXRGsTnLyPoZ21rkkJ5GZMTqD2PSnvmpzjwCZsm6GYSkaBSsc1NBV",
  "key24": "W7Wa2kNy9puKhwRDXCAHvd5Ev8EV5nnxbawbcMZ3fMHb9ZixDh2Sg4uZprd2z835MSG6jxuADtK4fidZPyu4LKn"
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
