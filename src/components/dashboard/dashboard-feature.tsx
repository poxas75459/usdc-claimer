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
    "XN2qsmmU6MUTWjA8RtmUDCrvZEm8za5oTNxpS1htxF7ERE5GeW2Bb8CuJ1vrRMkPUvHLbdEjZmuELZpNDaqsShV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YM4QXwMWuRrHeF1t5B7iikcTRfbKx7yJ69XVzCozMpF8DmTXUDUvrQhGECbfYAUVfZsYhVTBjRa5WQg7kYooxy6",
  "key1": "5wrR1SBjHEb2wpUmaUf6xr5HkSf7zntBzkdDrcZL3PXuNbYepBcMHu7C7vStzDksJPFRAESkAZCLsKeTnwcvJhK",
  "key2": "3yoWytJsphUCMjLKUrYe1oDSZCVtT7NeUivEQqi6EqJfrZe9CDFmvnW96hMw4hVuZEvngMNBh6ktoQX946ydrC2L",
  "key3": "3WcZJXdNG5dZX4APNv2grLQZ7ntxYzYkwo1m7twP2W2zdovUhwETE5AYao5HjgeJf29Wg1s3nk1mhFt8BnqWyVZe",
  "key4": "2rzVXNVToRmgt2uL73VwF5hQzdrPwKbGJMyjPqFjAJpTCr1eWFmTdYSvjsU5oFGSWpGXhKq7bYekVHzNe8e1pYz9",
  "key5": "QRrB8V8Cz92gov366w2Lf7J7mW9ooJLTCWwVptEUPz14tkz3dARuUhJhdaz5kSed8hAch8qbiN9jjsNKoLxBtoV",
  "key6": "59YzfzRdhXtpveybcNRj8pxkdTiQxM8RZamCaBmNAcNxXiUucmJ6f9XkGHZbn3Xs4FJZx4b5ghUbA2XEMyDJNmpq",
  "key7": "4mSCGLEKbFtxwgVdYY1eQjVDvH9mxnUf9bwTFL2F5eSHUE4pEzT2wyD18jsWKKg3R8ukCo74u9Rj2u24WomcuiTN",
  "key8": "7PyJmdeuoP3jCCaHEUUZWZxrcjg5DPySjf4D5qCV4st3GrLEdV1rVhrgfujctofXh2gJG94nCoUrawPYwnjPLUy",
  "key9": "42JjciHbpaekMmEfe9U4unu4BqPPcc3tbcPrwShJ7EnnbUhvYsPU3vQTEXsKE56rsD6BiYVrUvqb9jAwTJSzm9VL",
  "key10": "56DkvEEWGRFkNnM3cETb62gfTtYhUPCakZxTWB1dMmeYzgj7LSyHJTGHsbHHmANqFwbE5mciaTGhePN4FJUmGf9W",
  "key11": "5b1iZPsHqmvRKZZdwX8arpsCagGok4BcXZ7kmLupiH2MnmcwNdDYtqnGECrfa8r95ogb9mzuox3VCruh4GR6BAYU",
  "key12": "35bR57KfGm2WsAdVYdsEENx9pC94xQn9nH56sPcR92AYjd6LSt2Erjok9WrbvBZo5Ghp6UcWCTii1ZgpooFxVWdM",
  "key13": "pV64HnUVBSF7Gh3A2e3KBvKnMCUFrPtrSypMRX4u77eS1qEbpm7a4EWBUsu8qvfqu4WPo3askptVozu63wZawSL",
  "key14": "H4UBY9j6yY7gZdZhqU9MNjXFnxbZ3VRo1DG5KTsY2Eju52omLsCLPVy6kJuyFo1pPU6wwgwZYw35VtUh6LGHxqR",
  "key15": "2WCXLZjonwnb7nsP7f4y8XQqgAWtXijdCCZhEViRLkdyw8VXdfEYN12FRUSjdECZEot4j4TvkSE35EPfBBP3baYn",
  "key16": "5aC8L19J9Hs8o5qSZmvYW6hQtgrXCFyXg4hXAFfRcu85eMHoTyYdMsvUyLZPskvF8rsgmfWDCzbmxBip1yDKU61L",
  "key17": "2iD2vxAfpSGLLmQwSFHrrB42qrimkSSeo79Q2fU6FRnWSmgAbMejdFRj8KJzprD8HBuNUABzbzM8RBZ3Y3MTpxfD",
  "key18": "4HQviVcPa83mrx98Eaj7JWHBikVRLxBwTCnMuYr1N5ZmX1aZxMwRAei6VqZTxFL7VmTitXGzXLzbiZBRzo9xvMvs",
  "key19": "4rg5kp11e8vVvNVok263P13za7bkbE2HaVkAnp9aoZ73K6yi73xhMmx13Ye3PnZeprxtBfQd53x1zHzRTWGBjppp",
  "key20": "5McA1yzReGhj1Wkrf9WQoMdDgA9GvWorxtaWN2wwtLQfu9P6v1xA57K6XwYcYcdmxBQpq3NViDuLA6Ue5RZ6LkuN",
  "key21": "4Ahu8qhDrpTcqXTrqG7R7Awncg7Rkou4jy1F1tw9nsEafJTDdaNsvxRadM5evP6By9ptxpRD2t7BEa8QYhjCZnT2",
  "key22": "2ohGpJ1ZwK5dpYLZvFS1hHQ3wMoFZCM4aEGoN9HD6B3rDei4GgRCERSCbzj1R92ZsoE5qwLtfkAXsJPkCSF2J3Pg",
  "key23": "5mxjNPF2928SBqoJerwrhYqaPsL2FHzpWqEHYhhThMe6qHCvYQoaSgYZmtWtjjt1cD4eNMziVGdddRNbjgT9ekqk",
  "key24": "5LV6fpLVRtNiWTgPXhp8vunGrJUhhXMN3JPBS3PZyjRqAtBK91PJPBnsiq5xqwZo4CfYJ87fYxevcg61pRmUuSDc",
  "key25": "3CkuDuwGcgdZ2vb2xM7wEUuuxsYDbcrxKRiGhVDpFXE6ehZkDw2ibu1paAP7aEEPecGmA1cDxKd9MW3YxpopS5Fo",
  "key26": "4Yjc6tcgwUgUpGJZHuhaMFcsmb4gC1eoP4QZ1raKmnuaz8wfToU6DzaxHr6JgTHJYMftq7V7XkVJa1ACf4QMcAGs",
  "key27": "3HE1eGs4jvc46oE9mvSiCtU7Fed9qzXnFTYJd6kvMVkPa8V4p2P7h2ao7N2tCxFRGcW6iuC4eZfPvKKEJeU2dCQa",
  "key28": "25bbBheo72wN5CXPfJ5CFsDgGa21WiX86sQZRM1yNz7prkZRzgcRwHuw9JKWmzC4LCBHJCZ28dzfGj1JPgftg7tp",
  "key29": "3JNS9SWMcK96hfaskUBvGojdSvetPe3D481tCKEhDEoXRYsX5YjfUf1iE7SZ6BBiJ21Fy8J19jA7Gy7Uy69Xq9ta",
  "key30": "RuTyHRXPCSgUG5qBFZyhCzjUYo9kEqwctVxH34G4bDE83LmENXDHm2rRYr9NfTX2tCFhbxf3nZo931oqL1NHHXS",
  "key31": "3k7b8XBVCYjB73rsdEtpHjE4suAxTGuD8S4HDoDWja9DLpMewtaLi7e6sYofjPrfNY4dZ17amgawhspXC1qGqzBw",
  "key32": "vvgnows5wFnNhYTTx1FcQjehJS7ksBpK1qLowNTHxnpanRFTyoq5voYSqQAn13tHKFy7gYnn99wAGmFt2pddths",
  "key33": "5eFxVoKrkaYV8KVU9wEYRsNdzPsL8hwsieFjmMiZ3uWvBTXyJYRJj9hh7nvmp4dJB3aXqU3NJ59RgAuHahgcu8kB",
  "key34": "2QWnnQEWfrsTipVyeDgqxQYPK5FkVaujSraYGWrWS8ZXGZDmUtiK2143sCgArQJgLu6v94vitCTEjTjQdfwjZM1g",
  "key35": "5QFmFSd4Xscad8KJL7oxM46XjVLbPz99VfkNaDJX6eK1RnM7zbL5J1xawAhB2HBtaesjoC2gxLwo62FFosVV6U2",
  "key36": "2WaKQD4pyUVN5Agt3gyPan56NB5ch6zRUuJM2FV7P2pfG7tVNDyMM4bDPyVM1dSX6khaBT3jsu3RGan3LxnmWAkH",
  "key37": "4d1HvRppY729dq1NMgUNeQpPRCmDdiMUADtGvtWhphuRpB1xkGHbRLK3ECbhS4hyHKKfTtdMuUrbUkwFVhXmXK5n",
  "key38": "61aZ3jhvATWKUuTqEibaXQvbcYupeNLvMeiQQLjzLYTNVc8i1nzoSFgXVi4z9casktxFXM7qdEh9xBEbSAx6YDHd",
  "key39": "517sQWUNpnc5PdW3vTsdH7AnNKEwXBoRu5UUSeJ2txLYJbLrxFZN7jo1ZQGc1i9ZFWUxswnrMaZaaDPfc2g51mMb",
  "key40": "65tgdiuHUFUEH1HGVm4a1RpVp1b4QEfATKZCeKK6FNuTQvsF3ZMGMGPf6KYhoobLAvkYBwu3sPZg2bAKfjKNmU85"
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
