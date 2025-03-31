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
    "4upfe5StJPRxKUkgBpjHokBVnPpSFdoCov6Lhi2qVwy2LiycgeeCZc988RciiTqWGzLFoigP32tVPpgpb8deKnax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGFGEqqisdwx6vRNrpUnQjQXyEACbynmg1ut2TMfF1EVpt1jfwoJy9LCJVKDivNuqPtLHqp4m7DeZaaVTqUNw2E",
  "key1": "ifzKdqD9zRbk4xdzdXQiHs3ASyiZoLqnUrBqyWse6dXNK3MhzVbfGSh4H4ZKkhWVRB9iJNEQYJ7vwAmczJfXZPj",
  "key2": "2XDWtcMirhBw39VhFvjHXXMo9ZRMHCdkNJU5T12xqgHidoCbW9ZniGHsaRWCyyzDnxVKcpFw2G8HRgRWg3MtADr5",
  "key3": "5HiFmm4i6zv1v7Zm63QU24tAnzk1SW5parbgYkMBEgn55mZRF4QJGNvps4WnnCciznp7aRvPrYQ3idn3LM1whg72",
  "key4": "4vMR1HdH1KsEYsfwGvGHfUNAjfwZBsN824LvBnHg4ax9auQgKsp6YeBih65HL3vCLwMgvShqQH95rpNn3ojuzDfX",
  "key5": "4qH75unBrRXHZeHTipCUnSpBRMfjqGRZBMbq5BybaBdbFkqFd3a943xPuCmPXcue96toTN5vdF14QFugpmL1SXEa",
  "key6": "38b8N5SJNDmdPjmAqfED2xLfxarED3u8ogiKNhaHkN3t5AB5XjfJjU4QshJPjaomoZys9XqsK55togR39G6JDre4",
  "key7": "3rh9jxVmwcuMPrk71d9KskAQyADrJ6pjYnBa5J6MNeApA2Mp1tQB5NfCmc8xDLzADDjzcZ3SJet6rzQgvzZFgEyo",
  "key8": "F37XFYE8CEYbJLUvPvJ3khYEhwfRXJ7vwSuWRQ2pTeWd3BrqtCetRY1WJ9dwbLVDEwAhqpRwpqH42CrAkHekwN3",
  "key9": "3n3jhMM8ibaPnUBtwmR4QW5oa2uDpnQr4H1ZLkySuCstB9tZQ2ZmyR2nFwAAWPXCqgveFwL79Rp14cfcn4RnQArS",
  "key10": "4y9YvhCPQvzzUeNZ3Wepvqd8UoVYuePzkfMToYfZD5NRBffGzaGTWXEGQgiQGL5CpJMW5Mw3PjC1UcXkRetwugeN",
  "key11": "vmvfEG9KZRwrKy7XF6UR7NLvxnYuczEwpho6Z4233BRLmJV3SLvfkUqqrGuFBny6a9voJcxupubVWZ8SXFzPXyg",
  "key12": "5Eq5KY5MTR5GoCVYaKKrkUgi7dBiinmFVpGPUA5hUvKhfExAumftLNMzH8ofaNsaZ2EjbDJn1A3nFpHDR83XD4BQ",
  "key13": "598bfSjurcTkK8abRCc93jKuTiDFR6BDH7hBjrct5R7HvSyvmzNfKETRX9LSU6w1Ai8aQhafwQrmGWes2bfY8HQp",
  "key14": "66jR5FTpySpo6oLPTxbozvqkGqYWJsHeVFc4pYKFvUsv5tF9Fj1yiUEFETjtrY6iVyTS4noNJtwBaWYmg8McHhb1",
  "key15": "3siFR1agwLHjR4917XzReRyCBNwN85FYHW1BQSZck7NboRK3JB6Cq3EyVNoymJhxzu8aQYt2pPYm5wCpDd8Mzrjt",
  "key16": "3dMocvg5XLvsxJNYBznbz6YrQvG2ZqhsNwRdg4BdeU6u9Y3Pbm4zmy2pZrjD1w46drfSJQ9whNRdD5s1NUxZF8n8",
  "key17": "4Y3pNpFkJF3qMLTcvmNWGcSmM3pUbJnZBoRyd3vMSJqN8G5nS7Fkdhhw5wBkHWaQA6SWAejX7SZLfUTqRxyg95V",
  "key18": "56ZqtkQMiwa5UJ2Hhs4meCmw2pRSoi6DwAuQoAgszWg3bw28oKrrTyhUZVmD6DsPZzVGJWGQKJuELH1c5RZxwUGY",
  "key19": "5ebJqZJLeLuVs11P3h1Xt1uXgir7qrr93DD1BiaYPSvB1GXCNWBn1cL1gUNDBRLmKeYiVap63JSptVhAqfEkLNCg",
  "key20": "3mnNeDU56BhDbiLnboBNWJDUsCV1fXp4yWCTJG7XmriHu75U3wNvXKBEvDtH7mosFx9i5gttWGn3TMNuXSwq1MfJ",
  "key21": "2iqKifXmr933zqwmmkRvUUx2zwwB7vJ3BhQSR7y4E1D9Nz7HcQSEojPhVKUPZkhF5tSSPCY3B6yDTbBjd8pGxJKK",
  "key22": "4KF5QiVFYrmQkrsHKGt7eguZfb94SFDhcbCxKg1Th8tgae7AYXDPuhjmiaEw7ggodgaLCoNan7MzTzjGC62z76iH",
  "key23": "51txj6AJ5AugT69asfzj9dLCVcDbjoJ3p89hfmTN6nwv3hyMB5svvTCRCqYaXtjozp5qyC63TUvYyLybo4B88sQ5",
  "key24": "56ezdq7x6sxQ6caixR1murii8bGhg5bHSVqer6GRVaCf8r4MsW1ZxsNQXCPMg7XdoyeshUQvNuP8h6zPTaN14a4q",
  "key25": "3vWkDhR9y3yYsKRED8Wkd42AmyLfEDBruChPXc8DsAurQWM3v25KrACQm1GZJvmcZ1T8UEYu7N8tsZKRSwx4nd2C",
  "key26": "5dq6qGs3h7F7Dt9ULu7hnAYXJ6kvf7UPpF1rhjw7LrSRkY5MkQpqKujG9RGQDzbrUA3Eoxj6nNNBKXtkHa2RK5jM",
  "key27": "26pEeotEji7p2XwAvZUkMQfCuMVSkDZP1RQMbDcDPPbjkjggRX3hyxRKsHRHCmBurcraZHXW8T9GwCzfJakb9zFt",
  "key28": "C5YpEkJKRMqKDmBNdZZQPHA4eVdVfZJtZiDMXMUnFgmiLX2Y8wvTt7MQcu6au85zUgcZBGGoVQCC5VDQ71QQT3W",
  "key29": "5U82sEcgVrenkAZBWso2oiSedY1cryDsvX5LT89LfcKWEYkncjCg9x6hkRKwwN2z7SekKpRNG1yYvASm84x4NZ61",
  "key30": "4AU4nt2QDyYVjbU8s19dQLWsNXzDfj5ENvMBBDkTos6g7jgBHxSCXRfm3m7AxYqhcVwYQmm5cP45MWn7SRt4HDD4",
  "key31": "5aXzUsbmuQjtVqSw9gN5yttdPe6ipadmmJuKWjPAFo44JPH1CwHPru65JNNpwAe2EaxjKRTpzScbBAMYPb8A8fms",
  "key32": "5ja9wFxWbY6KrATLeU8wG4zHyKGksbizCktThmEdLgth42ixH17uKtnDsR9DL63zC2vmXTPee54vZ2DcumzdWekF",
  "key33": "yKp8e15PQ3Nf9ecXrn2cmNpjocQqVgvLBJA443vWZZp97EpcdXHrfCMuyVr7EG34Kxt3oZgtjkajfjAo5a8JmhW",
  "key34": "5XbTnERxfZxDGxcLfGC293YAb9cFzjyvKPnEcoA19XnbgFoBBLjKQRCXhfPf9cd7uNzxj3pG6eSs9DKWw6AKAZHN",
  "key35": "3rfv3gE1SEmt9CbdUrzc2twGPphn2Z1NceMys4WpYFu2koydf28NhaeDqQKtokd8m8Vqgpr773u2pfrLSqQ7JvAM",
  "key36": "41efv1LZjup58sCXKUMngGVBCeSvS2qA5Xdp3AvrTrXbLEHq8TKdL2Pe7tWaoFmGJNSdKu9i8rqeZqq4thya3Gub",
  "key37": "4DruB7qkmXkQkBu2embptjWhjFrZ7x1vXsb7UKPHixe3nw1mp7hfEx4m5jSRxyKRBnqnTgLFS9XyEeZUnuHifwCo",
  "key38": "4US5pFjNzesqA5PhiU4cngFwMxdcKaastmrJxar42QSveub8YqMkAJzxwsnUKkPqhn9ZH2ZjxLto1GyNvNgP4sbK",
  "key39": "2nqaEUdZP8LjhkrfedWQswkzEDSWcFUUEfcCaCGvuh9HkGGNDB4tzQDLWMz3fcuF8fCLJneAvk5UvxNrm1uATAuW",
  "key40": "29tQuQZcFj4yitvPAmxwXawYFMdgNaQMccSzXarkTZGjFzKiRwe6f3xtYt2Fx4LqRbtrqYfsbZmtdpf6ePL28Wy5",
  "key41": "5twtBBb2TSWpYxZ5BG9XugWoTeABLb2n1DbXu4VVgjGf4iugC2g31H1b1W7bSpv2XUxpiJDB8YREnvxH68MRG2iB"
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
