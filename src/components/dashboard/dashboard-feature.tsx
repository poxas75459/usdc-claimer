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
    "23LVNNKcGMvoXykkCvFBy2fiE1fHsGXNYnpVDrGYPNAtyGocZMjriuxN7Mh5pNMoETKaTwMCmYv2CK6HyWHnmLRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "419PNiELxJJzwvTprHWNhhMD7n1y9EqZN8GDXPQ2tScu6xLtSPGcQCeYT3vJZrt2mgXNA3PpRhxzfXmQgHo1Eiy9",
  "key1": "29893hEcSPb6GHuytFtLMWXCTwUGtD7RUpFud7YdrivZ2QwqSg5qVPUELLaVC5jeZ9YnTT6vSuTydYq66xPee5pK",
  "key2": "5Hvgw4TkNkTMSj2SM4GPbtmm21ap6RfK5CWKze9bD4Me3y2NvznWhSyreSGC3z3uQoxBRVExZUw31VC2TsLCvFYi",
  "key3": "3TUVqAs7ChHSfNX42itZUUDYiBn2pwS9pF674eqFoRftkUVMh31Ctt4Lhq6REQdFaWhwPH9XQVa3k9qkyihSJd57",
  "key4": "Bfmmg3x2p282TcUMSx1f6gUcFrHdMYPo4udMPgoox2ufmQPPtVJU4waBTEDaxeWxiC8CB5GzTF3Y9M1x2BkdNp1",
  "key5": "3UYBPajhLM3YNqw62UDJ7cwwU3udgeVeB3AsieKsd2aDodcxEGj3iiPRce5ZJUvXKehm1PVgzbzwnJb1bRAH2Qnd",
  "key6": "51ABq61e615cjtASu338r1sfark2K7zWLvEecghMo9hjveiynspR5ypCNYQTTpBbQBY7auts7CTeCJjEek5YcjJ9",
  "key7": "WdmbbThFdevsTUGtZeYuv84V2caYXYyvAsnUrc6Ae5v55c6fSpzAFoHUD6MJuPBKwvN8NgRprE3KDTz7TBdRcZ1",
  "key8": "2nw7x8uKUyEJg6pxVJkXNwrxwE1m2Z7gTYuJRc6Bqdxccu69PWeCySQ6Wrpu2qdyAmYBsmVgCjQwCorH8vW1aBcL",
  "key9": "4sXupkUqGRdRCPB6c1Ksu1EQPo4fToVDjHrNs6pUCh2WsWUbLzsC5Rup1DGU2WrnANuvKNpmaBni8HHWq1QgErUX",
  "key10": "2BcouTCx6rVC2eJifp8AgwBEqnQ6rXMBMfe3tWKSBiyQyJBFQtAarT46VU5Uw9hNCPRUq5tKmAqHPW764JnJ7G5e",
  "key11": "W1bXXckNMM5VXiWNbPyz2ZGZ5kUjzectuN443djgc6NzV5362xP6gzi8wDpiVtmEqLwd9iWLD3mgaWPDpZDR99L",
  "key12": "3Hg7PhMAugMkbHr8nD94Y7rQMyqsgxoSm1XDCaEKdGXHrPzQGmyXoBYu5qTJuscU9qoq1k6Qp56EZprRPrzdofT",
  "key13": "59AnvjLn7mqtvngSi2Si3A6i1XouwCDAiXvJqntGBp8PJ2UkAVPsQCE85Be5du8xSXGdgSWxBh1DxnxvbVaLmXXz",
  "key14": "3WbpLDYcdnVvJ7QKEUtxsKGJRvk8HrCyPKSQ54pHbo2Jqhk9UzgWCrv3uoLViwDfL7sZ7UubMg4VFPt7sAdj4pLs",
  "key15": "5T2Nt3hSLPrqC7bkZ9HHDowjkKL8YmUZpsaKTv4hdAeqiiCLiLYzVMRNgDppcJ6bWCFq4bTggW9DaMEyBPPfR1Vt",
  "key16": "3heoQTWoBojgHzqKYPohCc17Vt3F9dLo3WsYzgTjpEb9mj9mZqCZtB3kWyyTWFdYVDpMHmzT46Pw2rG5paFKLDCg",
  "key17": "3Pbcrh5LYyXSNUoGeCm4FPjg11HNXxDJjJS6jCoxKuypePtAMDXekLwfUfyvmBE9m8PCWft3MFwJT1pZwn34PtUg",
  "key18": "5L3NcHmyzgC2iXPGGLZHGPKG3vd2qaLKzY61ubJNTdE8bKw6SPKJs2youuZR3VSYSb2vBmV4qujsXciYcyeo5k8H",
  "key19": "bnEPR2LugEHDSDf4dWu3YotroexAnNXx3oy9fXbGy3x5nz2ciwTYAh2LJsaR9bqMEVDUBJtDeRwk78dUykDXvUE",
  "key20": "43jCDnoT4i7TFmEDLBcr35jHZDEjzZqkeo3kgGUBq2UQL7wDSHRKdKpcofPGj544tuUaKvUx8qV1uX67yYLSprUf",
  "key21": "zWbWR3L8AEMjz7oCkjRJxoGyGmVeZhpJYCW6aYbWBd7X2cZyAPLP5Pb6SqMP9jod28zEAv9WG3N6bf38hz4CqWK",
  "key22": "2NkXWgsmDEDhZhHQhKFBsMJ8bN4H2U9VyZ2eLt3A2iSFakFR8bpudpLMpbxRP8HykBRZSoTjc757vNeFq1dDCPEg",
  "key23": "2CLJhRZZ1jjQDzAYaBUKpQXbicQBtFTqdf8oujbQSAG1vnRrwPBxJRSJJAG2xFfSyfEoMXCuqvYJRLv3o9Zvvxbm",
  "key24": "3nGkSqe7Wqjr1HUW7sCumR5rRPaLYVdcjD8HjpM2aWjXiceYrofdrwuWfGETec7o7ButWAygtiG1MkjThnCeQbst",
  "key25": "HcDW38DpcsVQ5gcPBnQtKjCWfpcigWxCFK7h4xtZ5PXkLf4beT9QvMhadv3uaqY2aEGJAWVm6vyjPoVgZwH2T7q",
  "key26": "2qA95TQjTgViQDFZ6csoSLcBbw6SeEdfWSJsYCGc1MxFZCs9ruh9DPfGW2R2Xb55juYee951meVitw1LvQW8RHdo",
  "key27": "57MADWnbqtUYJXNAA9f9Gax3STRy2KUmWp6ur4f3478HXgWidVis1CdMRzDnssznFESdU5mMBEzvZwL89PvsszMT",
  "key28": "4v3zTQdqbY75mJeVszWLhwDkQuN1kLXz9n4Qcv6UfrBQwrLUmkpZ3m7TZYcsKH3ZtcZHnbJTSSvmmvSuGmMfbpBs",
  "key29": "3gEmXGn5RbFy8iXX5nPgxtorJnr9XxU7W7uqHtvs41qTNrcdNGhwqsvvjTJim7hjFmtfCZBE4stj3uATdyLh192G",
  "key30": "3wPmqe3J4zB1F9A2cbqYsEbvXY7BLip8Derydy7tCq3ZwuDGi76bMno4pYFzkMvPuuVBRQH6WoJeMNC8WYxL2pU8",
  "key31": "2mDhWNawgEKt16wsF8evY7ojpSvmRRKE8hYEZmWr4ZBzKArHoVAmChTRiP5RzE2RZyUVMhJ6zW6Nit4VPdQazkMW",
  "key32": "3aYgBGdHDAsDvUnUYinbwikEnUdgZmbgLWUWcWMs3BYMhzGWVqKXJdexxguLRb7X6HS3uE1x3vGWJH47gixNQTNy",
  "key33": "313wpE5KsLqFAyv7YbvoDKLvn4yjaCt2Hg1c4Q9zuVj7oaJsipWgV82kVVvaKskVG5AknTAFxqBnL5woTC5LaeA6"
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
