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
    "5aZNBsoFAQ6rhgv2XEfCCxHfoJ5uHqNMJYERzyv6FvujaycaCN7Xg8V2TyhE52QVroZeXxct64fEcW4RFZgJyKGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRbKJBAhkuJyRQ7d3tXHPjFAvxrkXV8MEMWjr2C4SmfgwciadvfmoB3z1Nabx2URz3a7xqg9MDBnKmkY8CVoKSK",
  "key1": "5VHgopJ7WsUehCXPRVSpiRAL67vDEMUEkipL9z6rio4Q2xYnu7BRrMVZvC9yQ3P5vrQKLqFwRizN49siNPicjcuz",
  "key2": "5qKoChyQVQkopv5xj6EKV426hZKqzxairbuRAh2uR8DnAiZqkAn9DVmhz6YnjEudutWcr2QwSVHn441kaTp5ZeU9",
  "key3": "44KheSYnMPeGpyk3Burn61c5eS1eL21jofbNGWoURap1pUS1N4n2dGCjJMU4Jr1HERK7hrPYyJj9oaJJNQhjengP",
  "key4": "5AUpq5QpitsRnz2kewH8tKtkiNdwpdShbQyFZSXZxCntaDKi9hgw3ieiqMj4rS3WaWLzPhKY24wrnpagyWevMJG8",
  "key5": "3WD3za9FsYnWuSARWfUJAu3SExdYPTK5Tw6cvYgnvWPttdommeKqUgQUtWAWaLQvyM64gJ89HePsaMYRQNCoAPHV",
  "key6": "4M23dMbvqyz2RXigeRBST2JrgYHuwopUPPC8zeoCja85jpwCQzgvs95gH3FcHQpfWQu13ioChiVuXP4KGevmt1HX",
  "key7": "5msm2mjickn5oLNy3jSRd1NogeVimZBnUiZfgZooWpeJj3Fs5wDb7YEhpRy9MnxrLhLQEaKMELXunisMzex1JUpe",
  "key8": "oSEzSQFRxX3AgRoocFiP1vTt6zAmtVfj7UYCcNNjVvasATTAnLk3x1sRjQgpFRLaDLCjeAfYs4vevUC5zfjTxEU",
  "key9": "5buchx9jBzxxyhLuUrLNUoira8iiBWTEMnxWtsJyCP2cvrUcx71eAQNj9F8YffrBRstwRWhF9he59TwmtNS11LvM",
  "key10": "hbLRihbuUeXmM392QxyfHoCdLH5T5gpZFtDDzZbYzX3z6i8qjivjBy9QYMUvvJzZhLNwUgZHdsoBa2DEFvVEgC2",
  "key11": "4ZpXNk6M1JFJg6fNPiopQdSuBr63xM5YDoPcvD7wgtmivYoc3AMVEVorSvqQNVcFaRZkmiUiFHUacnJ3ZqbM1q9F",
  "key12": "2AQzreYCaa9pn4LzxXXYhAC6D4PF7Ck9cFs2egYHHcZBU44fbu2RcLB27j4br6qCKtvhArD1MMK3s7zWKy4A3eYE",
  "key13": "yN3Z1rSo5Q4qi4sPwgycdJRpfrk1Ng8RcYZUttCEEKbeq1NXd42zGdqPnNcquihcn9koTcZ2oCRdz5N3L6id9cH",
  "key14": "ct3bQRrAMPMrgrnVvHS7MSMEM6m2nqMwCqr5As5dsGUPYMLEqAxaSiGLm11Xs6gk7t6vqUJZHLpDV3xjvfRRp9E",
  "key15": "4wNPkGKvM8WTQzam8FGfHcRjR5HnEiFEWiKj6cQxNzHdm1BjNrPqsuFxqDMre4AzoGRdPBrvZMckCVRCBayR6ak8",
  "key16": "3wreBbSv8gqRYNfJvTBggixRL1GjEp1pXCmRBS3qRzzespJmef6VCoA692hnGPTG49nJBw5vhemL1EgM5VbFvzGT",
  "key17": "4hSwWNHafd23dZGBNBjweJkFme5K6hMG4ngFw9yzMLoBkKFSXqxzLwPqvLZJ69B13vcwVqjxQtgwxZDMAibvFAJt",
  "key18": "3wjaCdbG4q6ge7s9rMTKNLxTbKGzHtmUxa3WbVbv2WFLdBfWUEJZFGVDaKM4QMuGeGdsQpgKYZj6qvN4sEvn8rkR",
  "key19": "5BzWWozHiW7TEAY4P5jMFuU9vGyFjmGa5XRwn1h6zGgjJ1JoMGm3x1LTrT4sorYgNxZnR2YVP33STEzFradqEomb",
  "key20": "3XHJJQfTSeK6fa44bEDAa84ZYuKTcvdRJEhFzubPQw1h8PKEtMQ72sLAL6Xy3Ywp5dQyqQ1GqFGwws7RB9BA3sbv",
  "key21": "2uQ2pgtepbFBciBZSDtxNYNyKxGjnu2f6YZ263R9ziy9oZ7hPavAJBSRgjxtDMRamca5pFW9GiqopQFSh4DwCicK",
  "key22": "3jqmVdSVFPgnuS9fz5WKT8A1tp6jWVLA2N6p46Ke7umdEzMkB7N428VHsNB5LaYCPmEfsFiP3XYZQT5QHPucV3SW",
  "key23": "5Kkc7uCbehvgzjLvgpQKxctpT6Fy1RkPecpSV7cmWo2UzUNKqdqMGYZhCVNL2dbLG7uJ5dEoa2QXdaYzn569axdt",
  "key24": "4feahq5jbNJyvXBrVAQYJWxqk8mXgDYHb9dFwUQLyY6F3C3pmbfWMY8884Y74pdr8aDauFaewPiRekF4awDvVZBy",
  "key25": "4e9PPnoLeqJjXP5VavMNf4ACPemTgemJApy6Z67snAfgFb7VjFLqKAahRLFmSs1nJPJJY5BQ91sThPS29E2WBvzP",
  "key26": "3P6yUbpyYRQpo1v91F7rk87Xiexz2ewMcF9PsEcfP8qGyLd9jHjuUZsZsDWwpmkViu9zktaJxgfa2rg3hGo8wmvz",
  "key27": "9pSswqCBxGvsJ6AgzkbUAHF2MHtmRnaiGRkHmx8vB8dS3eBcisoTedH8Ccc1s4us29Dt1iEx9fVUZ7SZwnnEcAE",
  "key28": "2NEVZmbuo8Zyuqp43kKjGZzitvnMLrtbjmWQ1sjhEMPRrvVoXqgp8mYXsa7Kw3wVZaqsdC7JuffE77JBBdV4pko3",
  "key29": "2nx75xCFusT4iEtEU5fegvsu7JDyTY5TMTUn8rYPDmjbGZSVeZooj8JWyUcxV1LEhFoWsv5Skzfc43gcUwMVFMu8",
  "key30": "VUqZ7V8mk8NJQrXz3RPMEdBSaNdtNsbfsLSh5FA3eJC5z4rQXrKrzMhJzkEPiS4DVU7KxnRnX6QcKsbgtiik1DJ",
  "key31": "2u1B5eFZVvE3ac4MX3iqKwd7ASNzucMA46igUed1sy96viJRH3mm4FgmweYEGhpHhEtFyUxF3roUaPoTVUFb746e",
  "key32": "64H9ke1Dv5LPHKELSaVy2LEPZbfdEZug86PaRxzsmAJ1pkoDbWbjdUCgqgCHTUTJQcbepSaFsvxZ1Nw632tEjA6U",
  "key33": "CaMNVBzXtfyPtDgUUaB9axPXjKFDmo1jdgqpG1arvzywqwrYK7FffCJEufEyaWYGjmXrRSxK2rhxEdbScoxnfxn",
  "key34": "k9zLEMDDHgNB1eYRdfwSDD4hiZUdHgnducCaRhSxTUeqB5k4wxxNrLKKa37Q6zQ5jqjYEx12kncBJShDWaBHFJk",
  "key35": "4PmgwXarGpvtRy3oVfZcCRXEXC89ZeWc5zz2TPnkVccZeTV4bJxeyqHDgLwXAHh6Srg5tDeQZ1kUyvwoE86nWCcm",
  "key36": "XtUwHP96HMHVfs6B189ZUYj8KS31xfppaYDaPd2vfa6h5MYQtXXYmhe1R6n5dYv9MhrwYwtRcGukfbjEXe9cRSe",
  "key37": "5CGQJak15JKRHiLqPyhArr9pGSbnFBX4cWpisy4mzuTdo7mEko5zgC3UrDAiWcsXVZKwvJoeSMiXdSZk3LGJW3Bs",
  "key38": "2QqDcRGEpSKCwxYjDZzgNAz4mcmUCsrnixPxYqUCUCNensxE9aQcT2e4ipr9565FzkDCVuszJjaX4Lt8qoF6mQY9",
  "key39": "D6BcRHC9ouis5V4cwHNweepURHL3nLCGKrywiBSTywYnBiHh2RbUdMPDRPuo1mngwXQnZoA3VofqFUDYRNxaifU",
  "key40": "2NhM94wGeny4vw8LxULT9nHdKrRbPsP9WHnykSF6vPLquDi1Dg8RJAUjb8iTxSq8rsq5jcCJRe49MoWPcFQQtjQh",
  "key41": "5a1a6m32fM3MxreBiZC7cWbZ8SJUqP8LQmLYXMPC6wNqD59VFmn7o1L3mnPz3ZrUoSEX3Rj73uFXXaKH5e1qkxZV",
  "key42": "2ZHzRixxLA2wZ1AHqVeifxutRK7QBRowLtBUpNh6YDsRF1rXzh3qi1Vn4UVD1JpPYQmvJ2KqzW3DRTL3Nbrn5hNC",
  "key43": "3abCZY6FExNbgB4NzMQZs5etHcwmhvSnZSwidJGTjsea3PNMBuVLAaMGGQPpsk1yJb471hePRfPiezsVidVVPUG9",
  "key44": "23ebS5HrbiQhyTkNABTEtkZSUkAEUbL3MECP3ZSdU9EU9pTxDHK1gAV95Hgx7mTGnydNYnXkt15Sc7PfJntfbdaa",
  "key45": "28eLHHC517Zw6eBMcGnLEySeiHRREDPZetmeKPR8iuzvxKeMt6eELYo93c8kpXS7sGPgNoVzqH9kRWYLjqwuEpD4",
  "key46": "4VJUNvtxKSnWJpBHK43tyiAB2E5hPupnTPwv6tCFxkgW2dSSaiHGa1a9foGmg23SvFGUYszgSyiSLnTzDqgknme3",
  "key47": "2NoZdHrPX9meBARab9aQyZ2ekWBUG6NZqWRX1tCmLpEuiuD1DXgM6zmPzU2hw4tL9zgjunDYU7ureoE7RAwydyMC",
  "key48": "2XDgPeTqrGnTYqHvudzRsaKjkHWGrSUjTHa2YGLxyWQzDBVUfZwGTvwB4qSYRq3qLm8TtSXdgBrLZkcCqs4A8A6a"
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
