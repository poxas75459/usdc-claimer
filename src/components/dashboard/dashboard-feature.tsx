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
    "2orscxCtVH2yP12H7XqZaHYfkcWRNDy6tSpzhSf9TaeUH3wNNkDTNyfcdVWhNpoQjmyqGuFUmBzy8C6DfYyEdqYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58jnHKZY9HfzRiFTnnVzqkUZSJupVF9RKX6tUubiPKTuxeq4rqgc4gnuUXPNj4WTS2gHY95VqbwcZukH53ybJDLG",
  "key1": "431rQEWoxppMoCTea816E2VFXzXCRv2jN24ZLwQbmXej4tveSZJYPjvpGewjFUZVsAyG2EjHbeejMXWC7DqCKbPL",
  "key2": "4KzwkAdZwQR7zx3hw535655KWmVdgvCrbec4vsmpAcgjVSoMfpiKdKigCpnofYn1rEDQJjDoKJtcnET3zcYLJj6n",
  "key3": "x1RF7px72QWELVhGsJ1BKBox44yi4t6XeNKxkwreGB5nhsamGQmryWfh7BGRiYEgQ9QgKju2Z7aCqdbmdn1Z2cn",
  "key4": "HMWatxpjUobWBEvKD4A5yedgKja2R8BN84MVg4Ri85i56zXCJ2bYm1M1iHJpgzvux3ebDc2tAyGG7ghCBsRSAJv",
  "key5": "Gj6Xoz8aNwYBUrqeKbaY59vZyeP4RRtnZRygtrAPGBT6uGWYCWa1wAoCCdfTymwf56A491nbWWxpxTmjo5j6HjY",
  "key6": "4Bjz4Hqdbg1SFcFt8i2QHqKweFLQiyLsLUMdbQi5GwUaDX3d9zqmdZrNdB7zsUK7eq3MKtaUm3gfjpd78L44BNjp",
  "key7": "3JNUG97C6Uj8YwcfEeoDKaDpwawaMCykXx6v4LwnzoagQ8MJAuGd6gU4m5btnaZxmdMW2C6TaDqvYBFfJqeThvcP",
  "key8": "3xG4f5CZo2SUGYWo84afcYp54FYsSn7PZFtYFe61ZaJk296DraLDzpe9Sf3n8NCkTGpTDV5fjComhHmYePrUGnSi",
  "key9": "3zrK1FRbnHN8bgyKLLJ5ay5fKs63sgXoEkbUJnuHBYPmwk5fr6U78LMVjwep7VZ3TjJFMKLCemrxLue1rwXtkAqt",
  "key10": "4apCW5Fo9FbvhR6zgM87enNwPvdjyGzmsVQrVUt2etTS1Uh7k9qoQRerkg59BD5RZCAvnBU1AXNHpBUf9dbtHtVv",
  "key11": "2yzjM1DxQRVWzTSBqBLao76LPpK8XVTCRQvr8ceuyR4mv6qKXDR7YNPsqMd1dPpaUuDmvr3bUF6rZuMXzoVyJfPp",
  "key12": "TbiQzx6f9RQurx2ahiZoUdL9cNsz6PtT296EvXuBbkfmFhAeRfezAVnYfMSu7caFfaY3CdjYebg1snQhoGLUvP3",
  "key13": "22WFrK6AgjNNey88sx7KyQExTwUn1RDWpPw6ANqU7gXCwqYHDKaiadRcN7rS4UomSVj1zkRuLasN8JKmYqSD24MT",
  "key14": "2Vgr5bMx8uRVBMcbv9DFqEjSRZsazgvdArMnJ7Xx1266iizYrSpxnd43FU3wnFd7tpSvhZQFVMdVnd9dFcY3hanw",
  "key15": "2xn8BF6oBWEACAbjRZAVwnySF2FtGyY1hzFZCECCfmgkuqvwcKmMXxrehTzFiTAVuk4bsdWGycHxDbyR1p3C1Pd5",
  "key16": "2hNN6DnRXAdhZHYp2gsj2FoF37SxnrwfFSR9rtSbx2oPYofmxKQTHzmCHect7suJUXd1THxEx7UQTQvioeU5iTKc",
  "key17": "AapdtqAtBJvsff7qb9TAQ14X7TernQhBBLZffN5GsSMBgJvVhV3UsAAewYz6BbhQ4E3h9ZAP1TY2WKH5FqY1GkN",
  "key18": "2exscBSzDQgusfPvDaucqgRvrbhrTUbeqU3jsXJzMJr6r8YXajQ9pGdeH556VcAHUzc1783JC7LyZgKeggX1fMrM",
  "key19": "55uRD9HnhK5vmUfFTarjgD6nigbSBK2zd6YUzFN8wSEjL2XDNm33iwH62B8EGoBBP57QLMWnJ1yawfDzZ3xSVg9W",
  "key20": "5KKiM4ULWqs3UBQbEV1f6a8XHgBqPtk8mS6hrCZZH82y4wav2V79CVxWiH3M3qavjNQiVLpELW5K1G5ZkciWaVYv",
  "key21": "3WRR2UCxRwRVWMXLSd3k1rrq48djCu4iFpACNzFHDghNRJnUjTHThqak7QJ3UdbyyPVjr2VjYSDtJddMHzaSxRY4",
  "key22": "5RJCQxgkoATqTPRwsiWob5dCkg6jp75eyZgJpLdagFmChwBSNbDFUo5KZnaGU5LveSz9cQM6g31BKv2TGBYfgep8",
  "key23": "2YZNXXAU3bZ2mfFFmG3ofLMN165pWWbWVcKnTvUioKPKa5RxDPaKGp75mcQyiKt411PwR2mxJhkkqe189ZikLvFJ",
  "key24": "3GnM1hFV5CC9YTp1CfEW9hFpdNAm6MDjC9KRdwEWdr2wyM7UNEn6jaQeYzBzYa5V2LskykoP2tHxuiCsq7D2wfPM",
  "key25": "5zKRiL2wp2SS91fZQD9UdLMkpD6PzxwkTdYBHrAZiXAj5WZq85H7bg5HtFBqUMBsmWvDpi1cMhDkgPd75ZSgevh5",
  "key26": "63P5DJqP1Aq5sWuxtQJBiN5JVS8eMyVdNRcYMTf96eP26mjNPVD5AGz7yWosQymdDaoYCgUMPjJnQWH5Kjf8Xj9L",
  "key27": "4EABgkqE74nnbQtKktTCwWHPZHnqRWSvZxpq22NhffGG183SwNUtN6eRwRnwK3NyZkL1NZzbdUyNbRDg9z5Bg5bx",
  "key28": "4LTpT9coZS5XX1zLsEWJrT4tCYtqQkzF1XB2UobzJSySkM7Xmi1tdJ2tbQ5BRnP8xAVvkmMNsNEnmCKkYkGda2HX",
  "key29": "5gmkWEPefmvseb8EER3dbEEZsMGxHD9owB1q2UEy3SQBGufRK1uR6sndFSkmfs8Hgy4ks16q5owGCdmNzSmsWLBV",
  "key30": "5hsLeCjf5m49dffgUyQ7UEjAGQf1S3pjQoNQzmrwxoUzjMqSSce4fhbHG1Yix6rSD9eEoPjvuyhx3RLUCD1tNzh3"
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
