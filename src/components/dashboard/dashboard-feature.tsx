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
    "5WgDmceiNTsEgzhMw7P2vVcBe7nzQXhUByZPFzpV6bR9hi2tRdMSd4bmJe7ZtrwHHCQxZCKR4axvbNzshFCbhzqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tux9JUpLavShYCRovx4XYw8H6ESYveLTcFynmgZ8D28HfdC3UBYBvFcdgrqWDpUWpfLuR7Cz9cA3jF13jEM67ML",
  "key1": "2fUwB1QzKLv87gr6gRtyhckexSJqdunW4nzkEXjPGW9db4ZJRDggSfaEtuKVQ6dWSQy3pToS3GTkbcmQfMw16qN1",
  "key2": "AipUjm7K2LUxDga9Cm3dxsnb3u7hHsn12a8uEGrCpt1eVLLTB7b42f8Xmnrm7cTScP4LbM34juPvsyCyAryoVa8",
  "key3": "57dgu4Uhp2hsgK36VxYU5QpzuHQZspUYH6oke1w2oCryDcnbmCSuMxYUvhQ6sfMMX243dEgHd5E7Jgmpkise9fCi",
  "key4": "28Q3ssNB2QyFmQdi3bnEa9t8ZjFHf2KhJ6HAAzbxSX88sXmHd2z3DmWc2yoH2TS7SgFekE4n7YbBbTQVaYyq4zjC",
  "key5": "53ntJk4HmX66vqYRMEozrRtmEEGrgGiDqNxqLyCgSHzfPrbPCngSjTteS5iU7wc689PV1pmRTHJ3KY8t26qzpqVr",
  "key6": "2tEruokjLRLTzsqRF8pSWKjRsNUzDuofW5rdynkPVjvY3ZWQap5Kx1oW9UuEsaU4tiVNGHzRHKrgUL2r4zDTdyDM",
  "key7": "3E6yVE8vuezPKMLn4xW8aDXrv7ZUPmNEmhm2XpWphYRqd8HUztXkJtMiK77dpawj5a65fyezewBGMYBNfLZMtoLg",
  "key8": "313SX5RtTXMjGfjr1sJgRsK8tfRouGR1D8zgYkoqBBeu9YuDwnC2JBFt9sAELmp2HgPKYbEdZoKSLEQPL3VtVmf4",
  "key9": "53ckB7nVpPBR9uu6KjBairn34WsbAYLE4DiTYnWnEXqWHBQq7x3XLpe1XfaaPGabJCo4kHp9EFHbuR8TM8NMVkar",
  "key10": "wcH6fG7i89w1PH9rDTyea2o9cFk1XpMdkVzeapE8pvNXrntudUMmz5YEptMgtSa3EYtvczHjo1rUujEVs8qU233",
  "key11": "4QZ1mifDWpy8bA6eLNzHDuJfrQxC15tqq7nxHUYKnQ2pPtD1z1SYGKVPsjwQBDYCo8TXW7R8TtYMYko6jCErxryz",
  "key12": "2WnxRzs4iyNMxF3RpefUzV8KQhyW33tWzqmcskqAs7BoeYoQ92V3aLCwhdzB8eT1oiC5AUYjpMwXJoUYXDW6Uwrf",
  "key13": "2HnVk4ApSTAgZkqU956HeNJrYcr8w1SU6UQe7UULbCGBoXgqsH4mCsfPbNyu6cV9in8TazT6pjxvL8XstPWLfo7a",
  "key14": "NDqY9TD7DZs9nBe64WtBSy4bguBfJoyjBHFvy73Bngckfn7AYtKp1ThRHaV9tsu1eL68AncPB7n4t872YUsvbP7",
  "key15": "35Cwx7ZzhBPWFutZe6gfjxGZxToZNoCpNyTNAMTpe2zsiWhmPkDKfEmSq8NaJNV4wrEdFYTtSTQQLY8KFZJGtyiu",
  "key16": "4KYK566fkvykTWMBedLjz9LNCCgxRU5xMBEdPjG4XHrTSDMjnA2vVHZFTWLhJUKNUjkGubUuGUwce67JsFC26ctp",
  "key17": "3JbP56s22oYx31maw637HBoz7b84hA5gbaz6HdbbMs3Yta7ZwGCNgggocm1UMq2VidVrgYFpyK62kf8953HNAiK2",
  "key18": "5CpGigoJNqnVfGyCcgFXm2XLT2EqzrqzVYmYVm19L91vRiNCUexPYKMK1XNE8ntoUdYGBbnAmUF8XCrdGazDqfPD",
  "key19": "4LkW8YvH3vmmRnaNvBybmMYNXC4UKyy5197Egpucwjck4QrwhQv3d8DsKMySszKrLoZhjmhW8vmRy8FvV7e312Rw",
  "key20": "5AV185QrH3ynxy6ijY5wf5WKrdTPPCMbfVDokLJRTe85kdjdQ2JxYqghk2czfpsRVqCxrp6jN9vEH6H5EJRBafBY",
  "key21": "4AzCshzvbsAyYV9QUGVokJ8knbFfM3psJWNJmnALPEZ1MK6Rx23QFAwUxTd86UuoB7Raeksn1NgjdMNXFM2tuWbQ",
  "key22": "mrXgEjdb71S41qoXHKpjriTrHADmCppWn3gztpqQq5bfqkDfoz2bG1Zy6TKknNoSD4SpEAtQns4YoU4tJfXWXxJ",
  "key23": "63tdz1pWRSCpZcCfj3mMHB1rFjv5jV5K9FYPmWypbhMEPoegC3GwKePNk9SCnwrTNmtjA74SXTDxKW6p47cfe2t6",
  "key24": "2b53C7RskEZTBnzqAQ8Lc2XpMuyvn9RyrPCFEsX2j7b6GdMi13uSxWNw2psDCHrq9e6AR8meDAwkENjGtuZNFiUi",
  "key25": "2rVwREGeiXYfhhd61qeWofWe7HsnR7HjP82o85XBwcbcJBDBjAXyGgheXjQETzTSrthNveiCPtuydtWFjZq2DJek",
  "key26": "4jF2jV7PLqGnNGSNPpXRzRHDYXSRCC4EfRaUbA96TBBxRWMRRFgfT45YtLwwxKobzQtxCu8CrAUatC8cS9yp9cQU",
  "key27": "3Z51DiTBp26PPEiVwwESDKzR2ycSjb4dBivZu5qurwU1xKDDAC61grdnqj6gTKwcb8NMnD9aBL6HcM8JxR5eaUzv",
  "key28": "3174ai8aYpQ3J93TbPXkKgJMPq2bJiNsjRihtYQQVkSnAuZUr97dXhzQ1zkqkhetGfinAWFbTYwpYEQuMpUAF4Qz",
  "key29": "3Jd3hZdvh1FbDbWwPSrfhCJemiZV6iUmfddp1mnbkAvi5N3CB8xxaKmNb1fPtq2d1hbsc8fHbUthmnPe1WALPF6w",
  "key30": "4cYEJrDJn4pToCiUxwP5uDrUSkJdszgd74fQabYh2muXobDrJQrQdem8eWsPqrfqPEgErbVQnp72g3QFfoJxqgFK",
  "key31": "2e5AJzKc3o5yPyQko12fSY2QKyipjoN5HUf94XigAWiSXuubjr6S13NdS28rNVgrk5JrsMNBm3DuvPtuVnJ6kbcC",
  "key32": "2ZsTjtsU56aTKQgCBj4U4j7szg42a1V2HBADDc88yPJrHtZeqRqyYCCYBMRkb6SDN28TRVpVawJiWGZtczHA3qcp",
  "key33": "gz8prkrd6oX5iWSsyBRSpgxfqk9jjibUFRuVqtdSpLvy6XB2mA3tUyhHGsbrkJy8RT5kNborY556q3sfNuiNgr2",
  "key34": "ieDvnztAzvPtSVEveFgJzzLse2tE3NqrMowSwgeM32wJSzBcAQfZbo4v6NoLYDRahJeL7quCCvAY4rgxYks5Jvv",
  "key35": "4XMPdjp69iMHeqcTCVyqwaKnb4zA1EbyPFNKpy8oSawqieNh5KLGs33Anxtbg7fHyxtWoDA7TGNP1U29e3vshVN"
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
