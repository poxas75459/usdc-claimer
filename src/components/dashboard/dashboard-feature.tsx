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
    "4z7nBZSts1y2MAZgc6huzkLkCbRfKRjhFquZ5zMBKztLRHj25NFKRtAVYxHirYgiaXw1fQrNAUAJc3huMN3rin4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFEZytBsrD7ntvgrbA1P33tThki75ThmdyfoSDpDqnP3oeaKXgFNTkXJxatQcKy5oiXAEMSefiyFgmmUk5ys7QM",
  "key1": "5DFPiYrbDPbvhSr2wqhUg1JmVLUpwosingwuHwpeBVTTJyLTghQyqSP3keiyBoQComQF8mTqgMnYmyEkXZcV9xNx",
  "key2": "5YXNKgFRnWTCneTvPLEaQRpofBZwJGSaNqsVSqW8mCwEkp4wfEZNJVHMNFsQV6gwAm26kjBf6Gs2x42RqTwVfAuH",
  "key3": "2hK5v9MYNwPRYmMKkR1qZ7vsANiGjyUkUFG9n5hKfY3nfG3smvDCmGW9aj3hRkut2p8PrrpNB7BTZTHF4uRArAMB",
  "key4": "EU4TuikMvnpGdv2gfab6UjF8azsWYHGiyTfxBCQCXVwF2dPrAYC6EmrkuyM1i6ucLknZayCQBFYtuV8ws5tnUhX",
  "key5": "3ajxHXBvXQWRpSC35tZPf7NKBSgH2Z5G1yYoJAJapCqfiEDy3dYb5M3qcfkoA8gHrLzorCJbtcZmGTfMtMfDNgRk",
  "key6": "3wNN4mzucXith46UAgRaiGV7529BFwHK3CgP7RZCb1e7XaowaNgcZ8YLZ8nfW9r4VgSyZBW2UGkp2WEgFFveD5f4",
  "key7": "4cbuZgqF3kbEi69Kdm3Dqh8XnUZd4aBThiP5s8gjkAymhC4jgMrPVGBC5e82CKegNgzYfWkPeG2x3jtibDNtHeBz",
  "key8": "5cBqpP664kWpVxu16BegmZ7hrzG3WqRHzFJErSnH4k2FqVRJsqa5uZLgpg9EmfYgQdEGyYwbsgA6fQpxbQTxrtLs",
  "key9": "3psJU3KDrjQ7AVQFNE962Ncec6qqq239NYwMe3FhWHtiuWUwUYwHnWBZcyt7FAz3xYK8owm4M8eu6QHjNrBo3zPr",
  "key10": "5HdTWL845PJKUx57FktxDJzGpMJ6y6C4kzYq7w8eJXXZPNzeuP8LkQjfMNiPYHqszAYxejpBjCVqxJmfrVYcShrb",
  "key11": "4C3FPUQ7JtARMRmtdGS3LE92tCjeKaC5b1P8xk89Ey8BjwqLRmuWUeaWTwmaoeC47iWCPq4mrW8VXifeprSWygqQ",
  "key12": "3XChAAgVnw5AKmm3txU8V7i4va89pLduD7kepa6E8fnzkXVdE2n23VyWpDjiMT2RfHSbLcGL1ShqD9XBgmM1wrBY",
  "key13": "5hshTBjwGMwR6MRqwPvXmRXixifg1AWYsYeTBdL1dSfrfqDQGg7KRKYwhbqxWjhUsRWfzHunwbJQqjjFBeVhxJVm",
  "key14": "5uuLhRhn18KAftdrvWwTkTZujpinQXf5deyyWf4ooxNfUkqH4wUg7YBas2DU2s8wJx6iCKp39B7yFmdksS2mFoHa",
  "key15": "4DmVnrmbx7y61ToLtXtmCP5nFe21UDnxtaQ76UeMR8E2ieeRTKJgUhdcaWcwu5EPqvWy7NqBbHmspbkDg2ZRFonV",
  "key16": "5zT8oE2tWVLjhYPwfbUrqfnGyEJ8Kqaq9SgvvvQkTKQiQjH9NYD7v5rGhHmPB3fv9ra1Q9o6Ju42Uz2NabwYThSY",
  "key17": "4YYmvELDvLzGEY2uLXyUF8usgAynqA6wPP5MZbmwVdTSYoHUw8PJWZcwfvnTdxRYVxsuwsDgWR8moL8o9FChYQ3g",
  "key18": "5esL3x2FNZsCy4Y9uU1TqzPrp3cRGmN7fuwYso57gvFCs8vQBq4TTRsmJt88gxoTpqjrSJ86Q5mma9ZbKA5UqYxq",
  "key19": "2rWxrHcSGTLHRdmB52yPkVXBPi2amRc4i1Ufon4ETHc1b1MFcKND4SZRHdfwMbvwY5SqqqnQZFgrJefgUB3Ufcb5",
  "key20": "4b87CwLm7iHXFJo4LfDjCdTGNFccYVAwUqxyGU8TWjbA5pVZZbZ28yAHzu2rR7pCvUcfXpoQEoxnxA7bLdTVsmGP",
  "key21": "wao4DyTAnbizi8HXg2W3nKh98w9L5aqx3EQjnyTmoU6y4sW74Dy81ovBv4bBxU7NAEkH1eZcfyeMfBaYZocy5Kw",
  "key22": "2drzqxaUCWfvM52SqgY9dtZwpMNgjspM6AKGa8wMg5TBWkDuk5KeLQZzhFs3R78tsg6PFozUPMx3e2ho3oCPSbVs",
  "key23": "YRAC1ehA8fRaptb2Ysg13ZPNbkbdy3UXVszaAW9vQE3bHU9Z3ku8WnDqoJgcQNWZFbLQYfXaDcfFfqLUUM3Tq4N",
  "key24": "2y2pKLQ5nogjgt1qwpLnDEXuWqhEgNvXZUTdnvT2aDceANTb1nYa1ZsJgv4VRucnh4spMm3X9gQ4iJPh7bTvi9DY",
  "key25": "TGpvyLUuShUPsHjLpk78w7bcmSLWJbHFkrPshXW5gxagKVzKvYQAktEqjUDcsaV7GNbbtqMeyaxHiREguXFKaLj",
  "key26": "277vDRiju2nTWPEHoZBrKPbHiSnUwAd7613nUmRFxrE5QhrhgRTj5rFUTAdmVjNnq1hib5NGeZQLEsjbAM7Yt77W",
  "key27": "2mmkBmXqowddogqGWm94ZSY9sQg2d91ZuGfkQwSfqT3fFtuNGmhZfQG9chcKk7eFpWt7kTtuKMxCv1uGSk9fSbXW",
  "key28": "3nGvQJQEj44VvMqP4DhQf8Adody9ZjPwaaKJ5F5FS4mKcbXpN5QtkAPYnjgie8oenKMbuWiXe3tr65aposw5TDdr",
  "key29": "vLxCHoz4NBAtSLdePcZC2oQZ2rrChsUGFtRARpksHaTqcDvUKrqwshnQ9g7phmafGQTbivvvy3xLv3vpcZmfydV"
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
