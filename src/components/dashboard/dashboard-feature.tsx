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
    "5b7e4zPyxMhdd7WhJqP5RgSbn3yR6hkJSsxdcQnztUMYTFr1c2A5G8eWHHk45SssxmNdmFGds731Ks6jrJCWvZE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzcwVq5RGZSbqTcABAfmZMAL82WYFffyTYSEaGemwzm1i8KRgdXuKERJvVyD1XpUi9jc9w5FDJL3qt84hvrCwXQ",
  "key1": "4dzHjTftiXR1seb3YLmupYVYTo8Dvr3vCZ27HFEHrQyyjb5tAYiHEmkMMra25nRNWJAUQd6Fea8xGTxARVf5Ubrv",
  "key2": "5wac2LkJCfLJ8wu4riYcyDzeZZj4WK58deLoAoeaaM9tEguUpEUoHVZusxxseoiRK9vtFpgrGBZMKsPtFe4TuNzU",
  "key3": "5T5QssaszEurhKZMnjnWU9LnaToY4UWdgAW2M2qYP9wZX1vNi3GJ6362MNJhcuGY3zzDCreg8T4BC1Zecb6pUfPh",
  "key4": "3gf8RTAmocZf5mnJk4GtTR7hcHJ98ySQ8Bvt35Eb2cnRHkfJ82dcBJMPzWYy8uUh6PyfFaFM9MFugQ2E8DQLy4Ez",
  "key5": "2G9gCVJ28KwdCM1tSNAevvt8CG25Vf4bmyVcxLTRGyuWzEPPmH4sngUMcUe1BhYHTHkUL3QcUBbdaD5rfTwajVyy",
  "key6": "2XWVYDZZcDKwn1zFVKYxKiDbBsDV7GSPv9ifdyLtaFfhoNmVF86HtMwUTYC6KpuJMHPy39NDttaEDJNMFXX5mTNs",
  "key7": "n7VfF3cXNxk7gKZhxRSmjY6Ku2uXgwL4avB5zepT3ibYF9F2WXYdBakMwPxhZVYo33YiJJpH7UHxGKcBt4XXEt1",
  "key8": "5sftKnEbcFKZDVx9v2V2JKiqNM7Vm7F9wqF8KsEtUuRmnp9qrL3jQhzf8BWAiD1wRh2XbCjYevUHwGfvbmDKh7Yh",
  "key9": "2i5PM1NTSpvKg5xfh4KDLUygosfguuzf4rsALpwCS6rFgQ6iYYc9HZjMrnnThb1XmpEeBVov5DtpHVk4jGoeXHTR",
  "key10": "4AnxXLyRLYQcThafYEBsLZ8WNux1c4NeS9L66J2mzacuJNzgTPSt8YJ2mxYQ1DyFWmoP5QfoKvaV14z3BX369Y4j",
  "key11": "54SGc6DvZ4jTwDQuh5mZ6HN7L3hQJ62kBqXhonXzfMuTsKtMvWUrjf2yqFzvxJwpVKmAQEkifcjaXxkWBeC6vqey",
  "key12": "4wiaLBV1XEPumosSBTpBkwqLn817a6odPMqfqw1dXbSGxefgvqMr2rU2A5Fj8dDenJkZig57AZQzRE7GHkeaL8Ps",
  "key13": "4pNTKNYHxsKWxikTzooRpaiWbe9L8eSaVMRMgMa196EmB9FDWMxmBsPkWPtvmqVfrToyBaiqxTYr3jcpLJW6Lq78",
  "key14": "5cYsJ4SkrKTMMwBRfVYthSVRTAmpHXqKhr6HRsWJC8Wo9gYrpa971mVKccGdrbjqd2Ekkkd2rztP8kVTaBqSou14",
  "key15": "3Q8JWp1WLQt7BRNXXKmGbFmTy3mW7R83nsmritruRwoHLWo9SjYPb8Ubb9FcaWPMtZsHsqS9CkoUbEU7CQMTBjDE",
  "key16": "3c8H3R8jR4rjJA8dpyYiuW4yy5KC5S6gg3PB5N5cn1r1pBaDHsMbD1xezvpcpZCiMwbqsA4UFtW9oL4WqA2j9nEC",
  "key17": "2R7AoqxNQTPpeWDsfyZMjS24ufZAUkKeDCsXvu56jdLaWXyuFshvd46GbBY4p4gFqVPcUStnqqBtDsCJccaqY3T6",
  "key18": "pKdDDa8Yrb97QdF5P5irPNf36LDidxiuHAAa5xvADY81ikCti575ph8dMqVG1ZfeeNWr8xiVqrpqXjQxZiw82RR",
  "key19": "4wPewYeHGNtybS1CcRQUbmbkoh4XpsQKMGeEc6TK7oYJu7G16CvTdFJDKP7Hix5GVMbs5bUVA8Fw5GCyeNabZtK8",
  "key20": "J4ZKQvPehrcaxm7kAMsLpPn4LefAcPEQe7bmRJcycnnPHtpHPEu93cfDCtXVqG6XodT7xvPHBQNfXoTzEnAPWNX",
  "key21": "2VYnZpVB5HeFpggkas9KMSg3js4NJW7VGTwouWtsM5vDkzqXBcev8i5ay2ZpTcqj8NEtW1qcgKTrF7EbhNDtASTX",
  "key22": "66pRD5mFquBAnxEprzAFY72LZxpD3BcVweRMBv9SJGBQbzD4yrB62cqdGfvZE1mhDU1vCA2ZDroXKm5h8oWqyakh",
  "key23": "cHq1Lm5vnorF1GFS8xYtbtuVkNdkAQgb3uu5n4oVKbzVLr9J3CfMeGvpoJnmmPz1Dpvd2JAQD37RdcbAZWHNm4c",
  "key24": "3FX8qpd3zLSaXTYkmuVR6ESsoJXPsL4tVjAsSsSnFMhNdTc8kLEQd9bFduQQa2gd3nSPbbNwqzDkXZU7ey58Mbbq",
  "key25": "5hFNEfStF1aLJAvLgxQtDaVtiMT2FdvEy8oHEJmLZm6ZSRazbgaqrym1padfEmVJpcYtRQ4YJaXK1zA9tQ5AhqeM",
  "key26": "4oMjsZggse8djgnMxCMmJAsiMb2sqNCusTS8WEryKhMvchS6AZaZ7owcRQLDjzU6FWDp36c6ko4qjFVBmQUBs9DK",
  "key27": "3reJh6FFGUYSNFWMPncuPdRbL6hjXSS6osxY51XEAe5SHhU7WU7SYHmJQCUgiFtyM5mCJJQ43wk98X8mKBGr29S3",
  "key28": "5VWDdSeCqU4SGEmA3ttHLnxX48FAgcPR5VhAzZeiFRRH1knv7hHreX5qtsLcnwDCowBCMsrypEwGfsbud6K5TVaW",
  "key29": "2faH3X19MwcKzaE9ncnWJKmyxPpCcbSBjyVoMyXxgMrPt9YzcLmh9D17jqwXwJh8Cw7JuJAaMibz9ESJaaAV222p",
  "key30": "2Lgc5n2mCtsGt8cPif9up7etv6dxN8H29rXLyn5eDmN35KStRgWzdLSuUVsgfcHxNyGqb9nXW1a5ZQ3w4PNakd8K",
  "key31": "5zt1SrJu19Kj8cr26LsjoxkG48eKMXihTsZMjGM1qLWJzjR9N7XhCjj8ewfBXEp7dzkegXYJJpzjMvFDuNbH2DfT",
  "key32": "FEZzkEsTMzdBhjJMZbvvJ17e29D5PyEr8sQ2CNLBgz1BZrJBt8cqimUTgxsLwKoHk73ViNi3aLVaejXURWsU16J",
  "key33": "5pShbsLUV7TC5CE6pcuHHybMo62b9j2zTTYFzZWFrv9GsCSTFBeUv7YJESkyfCksDJ1qmMbZmv2oNJncrTpf3UcW",
  "key34": "4evHaPgipUVw66bUpBKNdtZZ6EzkMzvyndStzGXJ2fkh2LzdEEkXJ61n47TtBTZHUmF6keTz2Lg65U5JYZoawgrE",
  "key35": "5HgjGGm4qz6y5CaM5yq2LcY4qBbLdfoQT6K3kVG3gzQYW2t9BXj2sVLrj6g5cYGY99RqUme5mEwVsMwPHoJrCCFy",
  "key36": "46XN1mxE58bnRL2WZdHkLxgSk7Q5fFhNRbRWpwH53vikYKct1op3RA9GEWrZ4vhVAS2RVVNnbnitY786Ms5gdw21",
  "key37": "sx7H2XdL8Qr2SNyacwyTBSBub5J7wa4BDJS3TteGnpSdYPBWx3qJVrFpEXGw1m53FQarGe7TDoEi3V48NCKfx8r",
  "key38": "6rNwin28qkw23TrTRCrRyVV2EkAKy4XezTn9rtia96GZjKUvxvhoJAmDPSQAKLCVCHfYD5YS1GFfsbC4eDCsXMh"
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
