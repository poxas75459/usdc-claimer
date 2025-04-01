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
    "57um8Rzt3RqQRUbK14e9wUJCddV5KeGx8pd1xGDYmfJj1vRDZoq8xjDdBWuMwPFi2H65cApBrC1P9CHWSUX646En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxiLmMeDE8D1W2c1BXJmUXKyox5XY9d8dUQKJ5B2EUfJAi5Kk1wJd2CBqiK2M6iiKK4ftYULThiAihcXXQ2ew3o",
  "key1": "23fWitwSQdkcThw7VakmH6bEcytWjjYWCU26K54PNtra3pBhFCtnftKLrMY74keJPAAjbFFriDWshJUcCjAdVj4f",
  "key2": "37d1JsNr8ebZEy4kaLpUavEvqjzx9DExVbRqGvTdVKn6tqUKkpacUY4E3f66sVf6J3fUwsxWcCEqaCoTLW93vrqf",
  "key3": "2DYCTLwfEXZYp6nKUvwdzvVFTHdQHyq4GgWKZ91dnpkVLyQpaLnTpeWjEdDFE1JffJVbojtkuYwbPgrvWNFxd2Ww",
  "key4": "4po3SwE67kLNSkJwiuxYTUf5W3y1Ht7KLbKGVjiUAEqk1zhbwCSpgeGRmtfoDBbMs5ZjRfxnpgHvBrXdiDwprat3",
  "key5": "3LgqzhRy27LUAxYaEQkw75N4mM2dCGMSC37YSLU6qkq5daXFaeBNAw1MduVGsGbwbZ1PXVsM6FN7h4ynEGb5GGUe",
  "key6": "5p1tua3FYLu8UKDmD2tR5fncrXwtqHHtGbgRXfDtTY2QCiXbv9AfYZiX2jphFhQ4KUQprwLC2UvhhoB6LRxqa5v6",
  "key7": "5GFdWRapLKnQNbuaM6k815xqMdj1JiikmcKjg55Sid5Tp66ZTMPrWeNPK2KDVj344VFDe2RKxjS6q1QWjxxmwCLp",
  "key8": "3L11PCSSWkKNhtXPXEcbCEmQktCnAR2WRwokeXfQB87fsxbKoURMFeZUX1pCMNKy1CPzYUd8sijPym6XmrbKETN2",
  "key9": "jmf8L3VsWzAF4gfrkdGN9ZGG1apfWcBot1WxTi5k27vFVxUTawGZbMsz9pnXEfn2keBydXHTvHE4psrihRvVQUv",
  "key10": "3Gxnnw1PemfL8XMvyGYeBqGiYuscN5JozSrJZNHWWpUtaeNc286hMvwS5621epioZmB9FoP2nVuia3Fq41rbe4R8",
  "key11": "jWXe6R4GqQBbAHECirA69m4NkkBkreUPjSDYbsS2hRdmZAh1nsqdwpdKsd4b92PeVKKZYBhW5hMu9qtVSrVvLEY",
  "key12": "4ipHtA9VT2EG4wQuYtQrBKJ3wt9zPABUcLNaihrrqT5qq2H2RPf6pn99BkYxfm3VgrBo5TS2EuV4uefDZUAasiDK",
  "key13": "YoyKxVkaXEX84iBAB4SX2j1LyHSDuBD4vd37xFgonBvtdagYQ5WcpaCYXYvDUQJFuc5X4LBtuajzkM2YzoiiN83",
  "key14": "qAhgruE3AVbtpC5tcQnDtVL2mPYw5pPr1qG9ahSNVouRWm2bwtGzvrp6bsG7XG3gXUeyAHvfHdQQVMcDpK9vQ8X",
  "key15": "3xFcpP3C5EbBLfr7dcsDhRLML4xeXzMBHs8neYyyjjUkTcCJiz3htRdjR4r4wGSe5tzV3qoBftRdpcKVN4TySCDj",
  "key16": "2MT1yptTWZL31oC7LVVMvX5V823TAuXq8PbXWbdExTJeDLvpxtLVx2jREFN7iewQyRDZru9ppZLQYKMYbWTaBRr7",
  "key17": "HtB2nm7Vz8P91FzBvBicb8K1aZZtnpdmRjqg1w1SPYc4nbrqHEKL1FaTsnV9jxkNJB4r3sanGE3Z7aXSzkWGRNJ",
  "key18": "4N3UGrj4CPMDSxq2GBoFWMBGnwfbB2c1kVS8uP5LyBMXJZRRLjuU1VSzRkgknqc5oqw27u147tdigHL3Mdsofeg",
  "key19": "2NQtrodjBnQyrzoF8X9HFTgyZFvAS3w91nDgnkVq4c93QHBcughnnqN8w6rJnCRdMLnbWi5st67zs6B9PTxRxQzX",
  "key20": "5jakcpfG4nzzGBcRjBCSj3XmQuUkCYAB2Ap5jaSy9GeSzdALkQ7vfzbjeEXCfUqdaQWcRqYTndsNhLkmtBGgmgkV",
  "key21": "2HHQnjeH5JWWYF9SG89DyidEVrXNqXe14mGCBQnFhhBCcyL284udmFqwiw16ZXzFxPzDVCkQbx8WsCLhQBP4YLoE",
  "key22": "5U8mRLq7YuvVwyyxuUSKmeUHDr92NKmW3TJoioHJkojy3kM9QK1xueZmnrNnhyj2oAtBFm5BKALJwz2a1pyTzGBv",
  "key23": "4Z3qTmQy4CPDWCDfVp6VAXpt86ihA9GpCD2xF5kHMQvXZrXxKmr1Yc1uX2pdjop9P5gTGupWgSfNub6g5d3LByWq",
  "key24": "5d66X585hnBKPeRm1USS6E3V7wSXoqm2qzN23bRd2qNaeBw9CHS39cZFLaMi8g2CEXZv1d8spCMYh1VWdxvLw6dY",
  "key25": "5Pm9XNgW2HUD6vYGAQ3hXCCH7EPZKGKbrtHaS9Y3abffCybuP2FsJxxU56mENSBFopDFaNxJoUqR8pTPKWzEFBfQ",
  "key26": "Mm669WD5meRa1Lmbxeebrhz8PVsMHJfNivjHTUNBYqqossWZLzJCTdzihbJsrw7nB1fNjNvAWMZEcPaQEm5kxvz",
  "key27": "7Y8nCRicrB66hsyDHXn4wF6vNKR5tVTY5UCfPt5j1sJCmirvvZ3J1GcsbnoFeUGybfLs4s5hnzCfz55wdMg5o2k",
  "key28": "5JAuUiDCSjSqcBsj8nCNcTQr7NQpi1YFa2TPvGpkr7CnUW6z7qDpRtdXGGej2QUzKiaq36XzcY8oAvMbPNofwwk3",
  "key29": "4tLm8FnvzLMKrYb2KSRSQS6BbzYzdCYGfGbQcF6W5nbBDEay7aAKxeBnzN3jYKMCq2icBjsad97FoQNzLLhyiCHU",
  "key30": "5v7KJ1QCFy3cZ1vRGXrELvMfXunramUpUZNqTP4VYz4H5f9bnk5eZHwBABWJnixYQys6DpCuaBCmDqYL9UMt4cK7",
  "key31": "5BYQwxQKPoLzsZ5nttujAabgFp3s7ithwRVZZcQkBwJkK73cum6iuA8zH2q2ent7WFjfVhLwZscreynAQnkonzfu",
  "key32": "5eCjq7WNyHTw1FsPZYByJnaGAiFmFAsf15VYeJxAp4dYRPmVLyK7nDDrgGmwAjVJvvSpYdmT6xPvPwVih6Bv5Vqf",
  "key33": "4vEjJDSZ5fmfs7tMBCjkQTEraGDisBBrY7px1eAzJYqXfvzwpxM5dJ2Dt4yccUvPBPacvkiR8kzdU6aXJmgbCtAT",
  "key34": "vsLVKj3axnZWLFBMyNn89wgD8ULmJEpFkGw4buF518YhNAG6kdRSj9W5GCV7zzdktzBRH1sQpfaEnQGHX5EEo2a",
  "key35": "2a1ZN12qDVi1SC6GM7jDpskJZf6RSiw9UhH1p8ThdTWP76sPUvm3bpoffiphc3pK2Y8Bxot7cQT2hmDPtZdiFyzN",
  "key36": "byv8b6v2FVCDubcBY8WNgqL8FwThqUrbmv7RqMWAcHE9KUSftHox6bMGLFAvBDc9dcxcF8mZQEziWVar6y6uQBy",
  "key37": "7fDPqTEbXg6nYocGQPbFtXtDW4Sau6rqJxvx98kauuY2y8xxzLtqnnaBogkgamKNdf8ysz98BcCcnvukDMyx13q"
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
