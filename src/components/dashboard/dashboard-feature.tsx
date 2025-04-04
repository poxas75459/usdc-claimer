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
    "54ESk7vLPUaPeqnDNS1rAFeBBZat3q5xbgmVvHAwkmmExtQoJ1YYeLvyM5gEisMJCzKCvM3dMkjTQm1WXiUC56XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM3ZJzx6t9uV2Ves6nyDDZvtjRTD5zHVsZ9ykFqauT1qkwPkASzBBgagZ49QAtmR7CvRaaAV1nCuL9nfV4qWdR1",
  "key1": "2B7DdVScoaJGHHuBsGjLALhcCsHtFSiktkmnXgg5K6MdREHHTkweQmMkSS9XFFVjS6xVqE5WhyBnhAcgQRNbbEi5",
  "key2": "6166nMRiWJpKBM2pUHqpzf3JHLKrPFYukXvhxuiuGamT7vxmxXNxFYwYGj3mCKDosJbsHH6MyfdRE6Ktn8Yk9D7C",
  "key3": "2xhF8hSq4f2AJAnWVJRCMVg5EvcQ6JgHhFQj3mqGSqTD4UWNs8oGcoMpuhRNvKYrE5bxkFoHXrSUfQPdBVTVWtr6",
  "key4": "3gCFmQ6VFGhPYGAvkLCdTj8rdrWcNLsTweUZuWnmiHqqTvigFd83GwoByE1pJS9FCqtnoBsSdgqD1aw1RzhJNk86",
  "key5": "5Ekd7neMNRZB8Jp7JLPJ5QRn1oMuLtdNdqT4Xb2PrakdNidFYB2TGHsoxgWCr99iTFHAb81UYLYn3fsqQUp2rLz2",
  "key6": "wvSYuNTrwNggfYJFvw1KxqgMzwtr5ZAvHT5fSQ4WrJfNEmCXnuZW6GZtEjf2pKzKbPqcji5NQ5RdT9iXc9XnEHu",
  "key7": "2k1vCwyN4hdXkY84V8YPxwJsbnoY2EFGp1hH8SMgb7mQFZ98pc42kF9oBWP4KNTzcgqCGrCqVM6F3FzgJcEb15u4",
  "key8": "4eGhw9J3twLi471TxuMuaEFA5Db51bHVZcLCgG7NNwYt3a8twviDXHRGWBqKDzRZG838arin5gT1Gss2QeaHCq3Z",
  "key9": "3kvniJksQngMJHbddWB9UeuoFDoS2cuqzw4YXjYut36napFbuCWKGVY35AVwQzURHQirx9CHa4NS8KQRV2qV41Ve",
  "key10": "3Yao35FcTsaQjboqpGbJLA5A3t3dAiCHukSTLrKkb94XCEBroWZqsE43ci6r9xEiuohNaVRLKD9YNQqiTJmoD37F",
  "key11": "2PHLddPAwxy2Hj5859M17b6WcMK3GXULPsKxPRLbVoJ5yiu3xFFFLvwVUdkYw6WdohkxccHKz7RiYJNFEpRUb5uF",
  "key12": "vNQMGRWqVAg7CcGF29ewLzAgc7Z6kBhsXkAWsYuStQStCePDz2NLvzj6U5dLxeQ3QrLvRWso6AgZyUjWXKMG5bt",
  "key13": "5erpdw7sbBQ4uFR9RFcATHnxoykbXFM9q6sLemBakqEew5kHtk18Z7fyBuDVm6Kc3VNuCRRQJjWQQSig9QM3mRKu",
  "key14": "4RPWJvXc16XzKX2oeoMpprWkMzK1exE2vxomozoGNcaXgwy7bnDvNoiEvvYDEVTGGVJfAve76E4CPGgP4E2yPujX",
  "key15": "5HsiMvWJKTQinYw6V5TwAiamhtJGt8rKuq8WE1sK7oMHLG93UyYZuYV6MSYjRnsaqJzY4isyodmMLksDbCNvNhir",
  "key16": "4Lc3RTGqjq3Wf4LxpGU7SVsaAD3Vp8z5Dq1P9cAPGysCP2XsL8BuNy5iz329CZNQ5KCdAbsTDMJHHhEvfL4v4Rrm",
  "key17": "LnEgxWaxEGqAMp6EMmcVqZi9UcSFP36KQQLWGCy2axyUMDwLR97cGJgtTMY8ELCu6psJi9LumxDxXvhJCqdwsrj",
  "key18": "5gEaMPrSyitnumHaUZVeJ2gUEod2NGD5AwNj8hfcN6tS2Nk2hbyBDwUPyf861fVnrzXbNJmXC5Tota82NkHMS6ds",
  "key19": "gvyaf2fTuDS3YBpD1HpTcFqn9BLaXwHLqgm7D74rzjdb7dKs5NSirJvvgNnLCbicrxHfxS6Sj6wfKBjTS2JkUcV",
  "key20": "2bzF3yvbKkd7vcyD9aq67Diu7zhtR3GPnt8djMpkLVDwZ533TS332YcT7NdKwFjGsq2f1crjKeGAs1qpPgLZcVsi",
  "key21": "3BAvghHiY5tiEt67mNbXqWQpmoxjoX4fMgTvyawkAcsX4z6bMXLDKpZkiQ1bui744YtSRQjVQa14H2xKCdbBCEog",
  "key22": "F7ALZf16ngBHPMEpm1nRLvoxKjfALWBz8qWkf72RfC2pEgNaF2eEPaKy15F8NCQ48zX6HEAeDx4vwoUejpKDVuG",
  "key23": "5B1yJaJhWZtZ2SzPhzFVsczxNrcizphJ3M1YcwrnS12zinUbDknLDc7C35WWvexiGREy6nCGBzwfJzW4DsFK8wrA",
  "key24": "5uTXENs3LydBBJJi7g8DLtAzg34JvNGrGsDiJS3U9qMhWnDCQRJ1eyewN9JFsUijNhx4rBeLtEQpYWpA9j2U283u",
  "key25": "2Q2iA95Uq1RdjBYxwmhJPMNuzS79HnKkRPC7hnGiUVH1SayokVAmqEqJrVXya6g48gj4nyypApVTMMGf1kWS34eD",
  "key26": "CK2izGtNsQgpTpjqoqEdGoCBMGK9o5uMXG6uGmM4qY8D4Cg1DVaxehkqYLEa1oXJgbpVZsgnA8AKpTiitxaR5yh",
  "key27": "5NaMmb5NabsmqH5evCq4HeTT6to3hi57pCrBQNg46MoriyFmQnPji13K5muTFAwuL3DxiAdFsGjvE9xhSfHWpi1h",
  "key28": "5dytueyPf8kzy1NJWQB3F3qpEoBmEFbMtg8isNiKFf5pcoZ323KHYPb9T4tr9BDNK6ya2oqhhL56YCPBcgQ41Aax",
  "key29": "2XTrh7tsYEAgPvL51SDwYBnvbsDat84vjTi34BvWdx4dL5qRWYeB8eHGhE3CWsHqBgHbcHaNMMSEXTg6mn6hGZzX",
  "key30": "Uy1h51BE2p5yoRQpQgEj2KFfqf1ieRhMBiobDttw2NbtRgQbCPq5rA22YEEwJqmpxYK7kYfWtbCRAuE57HzBE4Q",
  "key31": "5WgrVqb635houFDLGucXLfzQ9wjQrytBBF2GApwYhkdCnRZaahh72kDasAA5XZNtmr3Pi2c8kseAJEJNry8xCuLt",
  "key32": "rufeQqsrfJsPP4LjKJ1SDgHyrs5iCpVxyLVhRcjxtrCvKr2hnVL5bQxWDGs3wGE6A9FJPG6kgaVEu6xWtW1CC1n",
  "key33": "5WPm5rBzJn6LZKqvynxbutMPEtBXWp4DwK9SWtDURYWjPvMmt6qADNRPoasGKfyip5VqvRxPKwePf2Bd5iCs9aDL",
  "key34": "CTETsmZbDDi5ZiHqxrhK1jKFyqrFyon4dzpZoBrQRXQz8m76B3Xuc9VzZuywwtCSX6DJ24rA6wWVxNSnuAkzTXU",
  "key35": "2e8cxB8EJadXPicXs74xpBypBbe9YAYErM49QGueuRAKa2iYmiH7Hc6B94SWm6iGrgJ5ubbV6x4Jz4c4Nkdg41Qp",
  "key36": "2QdBTKJyzE8u5sZ5MpEFBi1Q7S2kidLmNtHuKiyQz36oJqrgPCxx9m3WkMGrixWCjh4VQGsRrGc7yZ2iYuUkWyLe",
  "key37": "5nBBmw9ES1zaaL2wdE9PNGnRye2x55HuhVMBxwgzgAydLH8JTc8T3ASrJAU85b1YDFqxCmb41Nxm72z7WSLBNmty"
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
