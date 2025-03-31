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
    "5tAsRdEtT4nMEA7NJJxRvoUy2xj3puFRNLYg9X5BeJHpo6P8BviQuyjiUP7E1Yt6VV9TeGo9BbH2XxcxjoDvGvSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6441t8oTfn8aVir9yZ4bZY1Bb9CBMev9HT7ifq6CJU57sGdkXfz1HMCK4T5EkhwgTjSEmMLGSYVzwXYXbU3nqyab",
  "key1": "4NEBrXweY11hkKNeFpfUZ5yyDdiBTqgng14v4zYs4zWvtfPSnjXiVcaBPY7hYyVyDhxtha3EocK486Ga7b47L92L",
  "key2": "2US2bwHfRfd2NRNkTuwHwB3fSreNMgFTmmFXC8miHLHm8tGRkXZuwi86a9cJnRPnrebuKmtyoVgip7sBqWSSpYwE",
  "key3": "A5njgZhD7DfDcyzHiKE1GSN5q1DRWAGN5tEB82UKNh4VRK3pdR6SePtvPjWb961H1AdWZdo8wETizn5bJbYzmBq",
  "key4": "4YUDxtVEsvxjgLRCzvtLiXakk8dNwtRw3wkYgvdgoTntaqPWT3rp7EFFsuxzcLLuafr35vQC4Ct2DpBRs7XiH4iw",
  "key5": "5cSzHuP6NMLJ4YVLNWLMn5unqU7PN3fpxTCA1mvbF2KDVmcFa39JRS6XZztBPK3sWoUd2hwzkneCP2hE78ry8aZX",
  "key6": "5SddPusbiGx1qNcy9Qqm8anZozRhb4EQMbR1TPy4TYKTtBvztGVBivo2TRNQ3BKZ84EHtmki1M2rJL61d8rZXLYY",
  "key7": "5FWNUnwkKq7kfNzU1FcLHSV41JhtQUEo81NAHutVsuYfQs4WHdsvbaNg36m7D7gkqvv9yFptvihDZt57UEzZRera",
  "key8": "4pDFQxXMGUPVXNGQ6rKN4qr6wBbYockTukhVZA3fbD4c7QRa6m4mzcjYEEZatuGM5KGx3UN2E4ifSvrt38nrzY5n",
  "key9": "2WXhZ5YU86K185uzwkXco9NvZxxJcvLejFv3v33oKnAsSMP8pKewDRpergBjhKvHZdb6KWDCBa5C3G6jq8WYTnKF",
  "key10": "4QAfmH3QaF2vjzCVijpSAr8Dw5VQW2RJAKNJE39KT9bhh7agvzdFuc9Ahqjiw7khWNoqzfBYpLRdEtJrfSEbhsiV",
  "key11": "TQcrE16xXcnNmFPnNCLouNqwK2h12eLkmjgLvb3oUGFbbMM5Saej6NtreDqci1Q1bJVQHqzeB84DsJ2Qaszevnj",
  "key12": "uHL9p69abjGTL7ZyvJr2MbBy7HS8a23PWHAjepbc3zzJ1PqTFF4HvBqjJkTnmUhHXb1zPTH7yoUT3pewaH1WBw8",
  "key13": "5R7skFYgdvazJsMCWx66hmWprN6EPTNPXWnsoCzY3oCTt3JFfGJcCuQTvG1HMVg9z8chf1TGMxHoAaEJiJwTHnCi",
  "key14": "2woPrJBn7ay2FPfoGF5BVcTvDZd74MM3Z67VDL6yRb15yGsSmsmEVYgDFqBYrVW9ePjwAqN5aZsWwkRjbefADS2f",
  "key15": "4B4NiNQnWLjQV9E4w3fdnK3GzQny9NQacatCy2GTHUcERVYyVASNCSjeb3wCsgWGxSxa9NPmksyHm3ekf2hhyygj",
  "key16": "4Pz686nP7CipZ7Ct9V6ukLpbZ9qrHkt66K1TEbuKv8gbpbZNYwg5JryZ3DmJb116TTQzGz5r6yhDJPKDQzLBNMez",
  "key17": "4kdWnLrDzgVzzBZTfTSkPRptBvvsdPJZCCfNyREGL4snpS981CGSJ68QaF9FYGAfYocKy5SzBroz9m9iYgAfY6Mh",
  "key18": "2LAtjfeBjvRMnvdyThw4bTT3j4YLAUvHBptPE2QGmHM4tngwcXWaPjxdXwAK6GzASnhDFjR5fRNQkcx3PZuW7S8c",
  "key19": "26QgbRbxQ6an5kBxtDC2CQj137pjTNVg3aRtfHiumhSjLNK3UrAexTFnJgChxetyVLhdutQmRnd2iVtHQtKhEGDs",
  "key20": "2HkwEkKbp43FG6mgXQfFD2Z9BwX8pfKZirgMc5VSg2Cj9xEnbAEjNeX2EAhuuJr6PQxYqjMXeoBBPi1hQqMwLZe5",
  "key21": "3Z2AZAZakQZevnPkaaeSBtjFVkcfPTtfAJy5NbhN1xMBqQhwCaHCMxnj8mKtVR1aqnLZ5Rf2WdJB7pM9onWXFxkR",
  "key22": "3RQXCj6gUj87fwXesH7cMUNxQCP6N1xapHkhR2D3ZrFoHQGHSHCuzyCPXbfiNsu2dddp25pJPsXAukYauhh7KZFc",
  "key23": "2azcbZmZGH1c946w7Msaii3T2spXm7Hmsh37wtSWXqqWxR8kkksd4bkATU2t3Rk6vKygRYLxjRRSUiVJe75Jit5c",
  "key24": "325g2czW7fem2GVeFtCGRckx2bg4CrrCtVWYBw855bnQhSTZeZBvhdajr7j9cGzxPt2Su9MbsdhvfE1ZQKVc8ff2",
  "key25": "Lmccd1nRCn3TawdwtrT11Xd4R4f33Z4c5iRFHVCHA4fzY22oGSxi88V4gy1Y68R32jJPrqUTfNjuUMW9ruRFBUp",
  "key26": "2z32ttpnQAr1n4C1bHJt7U4X7WQrP83pxDVCLaLPkhGjfufa6funtbRRDZf6UgMYEyxdRsANJVGq6gjJmfjcWo52",
  "key27": "3BLvE8aqgbEujdaSoVa5FVB7sbjEjbCRCmd6GZndmJ44X9DLkbvsPq88Udq6ipDEAqcgNimm6NeGU83FUh88ARjG",
  "key28": "4Bre8dDLShFhbtTRNBLyLKi3QZQDG6MKX68C1Pr2zacx7jmutEbnDKDfo6EQRQBu7diZttpUXocNA8qHn1gKarMJ",
  "key29": "4QtiBcev4S1gWoTcDHW4mJW4eqfxMSFc5KJXfCFz29rXfSpZwqzvwPzNSBzXBAeEnGPzoo2qS7V3kZdwjjwtTTZe",
  "key30": "4TTtAW3n8PcC9aWkvbwE2v9QJLTpzLBboUXqeSErmv45woSqMtU1MVKdfWVuyZTPuw25YrBnsr7jq4tUzchJ4Rgw",
  "key31": "62ZTNmVLBMCpLynBZiPAYmgiZrzvsXdL1iwbpKeKD1kJpJi8c2BYH62fPqJ8XPTsQw8RCfkpaMm1Bmc4mbauQG7Y",
  "key32": "5b9sqVT6YDAdsXFscX6Nj6jmmXsxRLU5X6a95V9ck1uVZ1aDy1dEsnCtThV8GNSHCW8XiKmcy7znqAVSW5mUtdMJ",
  "key33": "2yzMtTGGyDHe7mQH4uyk9R8w3EYPp6NAFev5fvcmHyKpzzyr9egawixryF4TpSQ5kbid7cJ1K29kHDDeUFaCanSS",
  "key34": "2PuW2CcnE3gagP1vPdCCHxH1DsoiQJ4yDR9PxqffUuuKqQzcsD5NZNnU7rjCYJCD7W3UqXjTeFLQSkcd4cmxKBH2",
  "key35": "4VrZCHJUwUSZKWikq8PNoJUwB9pmYK7vC6BEoYMvBca51qbhpiMit7qZfxMiwbbUBDGuEq7rvtWFff7MEq1U2rCT",
  "key36": "fdK6vhJDX1Bjz4LC8jbj6nYV3jsfEgLKm9wjQUq8np3Lzo6QWawjztEq3EVHbXEkVYaM24EW4zSSVBoNP3PLESL",
  "key37": "38JJwzEvVCGL88xyYD66WHvY1R1YvsY3WJDDsR2dvx8K8YMobZdFMnvuCLjSb6wgHN3qASETPLRFfGuTMALMgiTw",
  "key38": "4w3siF1WWo94vgoDzqhN4eHXxvhE4y2NgsdFhp4mRtu6zjKctLGo4eMYY2MDMRNdqYNZQx65mwPmJ7Go6DcBw5Gn",
  "key39": "3SVgGFivirbtDJBR9G4YLptTcYqrcNMdjgFBVhdtcg8mmF6KzBtSRjC7kzfJL71qFerAfAFMTAHkfXepSgeHSAUC",
  "key40": "2p6puVokDyBihV5YXopmshZpTvq2gcQFFRxUL1PYFyvz4VvwAbRKSHftx7xphT8VaKDZbPzUrA8LKep5kSDgPSHM",
  "key41": "3ocwBSCUF7jkWzychjBQ4HDEo5MVWoogLuvgfjh6ZqUvbR4L354Xy9xnVVkBxgbHtuR2Nsvphyj8CKeHPmWx1MPx"
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
