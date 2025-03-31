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
    "ejwnA8Episbk8JSyAkyTbMJoQAZCpKEKoPTyYAnxRRzwDxpC89LTrNiS5nFHnmLUf7LL3RgcDstyGbgqH4nMz5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DsNSeaEG9Tt4JLqbgLyWmmRjqi6quTL8r4MoXS7Vx5n1kxRyB6v3uF55XgCN3U7YDSdxEhFVDVcajQMyCQcJcYw",
  "key1": "5LYPatAFpnX1m3Puo2hu4B5eTnnJgJx4BPc3QPXLLzaUuKRAV8WoNucYhpi6r7m4BhbQPtZmAKEUPF4h8m5uR4kJ",
  "key2": "4s7Zp5ryUrdb4BbMMiZpVFRRvfapswS2VVPMvGEHToN76wzpsNKXN72iPeTd5Jb81FsnZpRtrkAx272AUvZQBTGm",
  "key3": "245y1wvP3fgsRbkRMio15W2MsWt5JBgnGkSpuRcZWogtSGU1xsFUctfKpvYyyKUGE7HQDm5J32DBER6DTEu4bibM",
  "key4": "ooXfc89gepYBAQfouqTKtwHLnvNP2btAu81jPHUiEoptdmf3PFG5mEnC9ENW8V6CtGQ6oVMki2DqfSNXsJpEVGt",
  "key5": "43MStrMCnVQXhcozGkbYUadj9g8cVHPcEakzcRNMqXas9ydAWyFFf8tvv2NcEejH9phRxNEHA5CSKP84ZX88nWVh",
  "key6": "43dzv865HSAGiDxgFN2TX7AJ2go1y4tfXJZnLjTbXKyfAGWSMe9TLFttkGvUA3jbkNjU4fzVtS4q9c4tFNv4gYLV",
  "key7": "iUrbaTAZSnLkLTg9yMvnht9tJTwqD4YRXVedivqXj9JHoP29r81fq84X9yBqRHJzQeKumc3NMckVobjFrpT58Xd",
  "key8": "5ZiWMi8ACtoggHn6HVPYChng3AjxLnHArkFk6VHkiCvpjegvizHbXaE6q9w4CogzuS7w4apFugMyzEBLjvW8EA21",
  "key9": "31FSx1Fs8Am6UnsUkqtYpB7itkbaiPySYSJqysTi5MTjMzG9shoHTtn1NvfudL6YRvXxwgmTHsh543maunUBHE1b",
  "key10": "53odgJJq2xbT2WuLY6etACZAsGYf5Z8FuELUPvyfGqykz1PYoCdvkPNQonmGWYW5jkzkbsoeaHW62VLUW2hYJe6k",
  "key11": "4suD2YZ4fKkciUfUsVi7eBxp6fSasTXDUbXw67xMWq64JLCikq6BGd6jNmua8xuDxB5H9kZXpMu17wrDw3ZVwn1E",
  "key12": "2rTv4CXt4a853djTfAJWjQDLausKhr7dvaaJ6zW2sQHqGHdXd2HWwJDhuJorYR7FHECyw6nawgYPqG7uGcvHsg1y",
  "key13": "2L48r9rk62NdSuuqjqu1HCdRaDQ2MJH21Gg3rNRCPn2yp4qXHzNRuGS7JHK5P3SBr3dzKLeR5fZTKsFVTWCiRQ2K",
  "key14": "28imjJ965rDt3RLVTMr4A6mSCEWJmZcAg2Gw2tT3fTVH84fWL9KNiaeuA54CW4gjqECrp6vV9DojDPPFLm3ftFpY",
  "key15": "62njf38bcJSXJjf3WTxn76zHs5Cb29CLBuV1noLZMAPAsT1Waz6we3EoXdHfKKJeRawLuxoqX1BNpJebQ3Y4BEzH",
  "key16": "1weR54KC6gZJrTroZC7Kt5f5FjFCvnzSsjTTP2jSwPsGKKz743nr5suXjQgisncASKLYcuLDbrswUnkHzjE4P6i",
  "key17": "3NXbgJxG4womQPSuwktNMeeXnjxptUaSgDcPK8wFrvZKAEHUpwvVr9uofPcUQpSdD9WURJdZ3wmTpbBK4HawqddY",
  "key18": "65KqC3YEWqn5nhYTFbGNQ8fNnUTW7SkJzekMHifpr8osmjvGFN2dmCMMxAh9VPF3Z3mpcRx8oYd2APfNc16zi3f3",
  "key19": "4YfpEd3eGpGyifTtVW6AKgcyd3N8JBWPXPtFetrnGrp496vmR6DpDs8y7zmEQ1iNDw5vFEwzcivDuhnoevDoA44E",
  "key20": "4cbpvq4EuJfvU4nMZ5Z7TJBUu28Hpe7z7JD62GR4BBadya8989j7eoCQfFjcaSPcazgWpR8wiHAVza8vMY2F8gjQ",
  "key21": "3tSHWUZt38zNvWygDfbmusDq3n3bNPmt8X7qph3EFo6hR6pqKV5k2cHgHyhYqmeUgR7uyeGD7xEyummv23ubCfSG",
  "key22": "UFdGYfu725GJQb3SDaTzwKSMDvpPFYVsVdPyXzznLvnnwjCNxRP1qaUtjDFMaZF6AQ6LPEVZLjyHCjiJ43QPRSu",
  "key23": "4evUpMRejHcqyMCFUv76NDSz9Sb1mXwpjPnEDRcjs3k2EpCiw4eDSPXGy9g9s3UTn5PyNVUmYWDjnStPrgVFAnCY",
  "key24": "cVijVdWsH28rGKmfj2JV3merakRrKjT4v9xTM1XRYL4iQu3g8zGGYj5C1dmS1KjcHfBLLJSU3qdmoU78btCAZ31"
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
