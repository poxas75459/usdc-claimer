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
    "5aPhdHLbSFNWgXqCH6FHCeqvr5tLXtgsPb3chyyRy2DQt6u7a94cxiCpw2FaaXnJjhvGveyL1fca92r48fF5mAaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMmdM9ic2VT4uy3BUdyFVrP87hDTstU3PGZ4xsy9XajYf6tMhquXfTX6fGteHf2mW4kfor8e2xmxxjFqr6p2G6J",
  "key1": "5ickfWv5JjWzQJjcH4dESF7h2Yz6r8xD3NwyMps3ozi3XP3tkWfuhhUxc8igKYahiH4m9RaTBuVztQbv2YsyDENv",
  "key2": "2hcXGCfLi6MzQHkxr17mjYkCsGksfcPwyRwiSLuqRjvusXDyYxuQjFo3LzSBD9tuN6u2EAgoiGxbKsf6dXViXCGj",
  "key3": "4jVHei3zfoVZE2nUgYyGS6uECofvccRRQ4eJdi1sSf2TvX1YuzV9GLs3deLFwHr1DZPx8SkC46VHGh2HUrZ5mBib",
  "key4": "5GEQqdL9qYcsyDbzpqo6QdEnZvqm2Kqj69HzgYTJ7i43ZN57CL6Xx9xd6G9xXBWT4rWxEPfwgPjfdBxtru2ATcQz",
  "key5": "25Snh23FLXB2E3rFiruZF1TD65CCw6jahEBCeYnwtnwSLZptqd2oqzVZz59x3SHA3T1BWdpSTQ9YUdDTN6HTYhuX",
  "key6": "3pvy6tfzEc3G1JKZ35T1jziFD6ufjtrEXf7Hq4z3vKEF2B7xJTRZRiavjTi4YD2doEuQiofnp36PrK9iAiH4mTMV",
  "key7": "2QPdsomxYEaXJrz2dLw5dpAM44rBd4ivZPEQKLLHjEgQ77AsYhseDoBotvM3Dz8ojenPhsUWvayTNNmFtBq8JTkG",
  "key8": "481FzoPS2oWtwZP5hiYpZLrPixWbUX6gpdQ46ucsN2spnhstJBmMhjX4FaaogDzxpBpYpr7VpBYqAjgoYZvD67b4",
  "key9": "G6URjNgSwu29N6V7qx72MtgJyTZaQfTjGsB2netJZQf8r6twjWzitCXvXBjJL6KvwbAiPRNq91yBPXo9Txz51Xf",
  "key10": "JUe3X1S5HW5NtaQmAXP2pQcvYtVjnx2RkQB5Ps15Y5m2Yse6y7rBCEnbL391howHibdd5iUuGcd1HEQ2xhzd1C9",
  "key11": "2QSPuFuwzQAKoqLv4FtSD2UyhQ13a6JZLVxRiaqj82HHcte7jfeuT3n4o8vxCSTYuhdydxiTjHYbPfgFaVp5F65m",
  "key12": "t8PRo3WiBrhNRt9ZKVtv571fbQCneZhj6ySTrraFmyFKx1ADh6oHc8yBLP1XviDErDWthh7UoJ789Ff4ESURhaB",
  "key13": "2sjP1LgeSKSx7RmdxwgLihEvVF8QCetbutjcoZUsSdSwNdGtckRydCAu7KBznqMV54F42yFY3QWYWfvrzJeaDqWx",
  "key14": "3CWbDgFj6PjoJVSNx67SrFRkGCVHv81D6ZowD52UpS4VzbBtTWULAUffhFnFMznzY9kmu3g4GdjrXduz82tP7CFR",
  "key15": "3TKbeecrDisS8mGZxMpgF5gfKK9CZ9WV7MzJqdqJkmRyHC42EoJkWjKqpXJ3XrpTMHq2UaZV6s17ceda3WLKFq7u",
  "key16": "5GRov3zoUoEyBbnfz25rGnCHVZApL3hTsFNxKWymmMqYNhhxSce4yyUHahMCsShSHZfprDCmdAcTG5BMTJ3fxeSH",
  "key17": "3gPGyZaU2crXtNnmCX968G8oEyHX7dL1pBv2RA9oxgoKsPjcgKdoj9ab7SoZQpHyRmUGxMPH6pb1d9bQdXxamFX8",
  "key18": "3yoZncVodvYeGLngUhyhQJLoEwSH6vvQJ2iRaPhPhhscVRcm7WJduxUKnzGfideCGLvNSb6wEUo2LwcqnWsQpcPa",
  "key19": "xvPjruopvAYnxDa4zwEdGP55uKHRDt8r6k4etctre7ZGF1h9PLPEqcvyvcJeF1q6CiFqN5Sp9FtJ3ZexE1bovDa",
  "key20": "hnLnmchXvkSymVWPC4aDHyY3hDuvaEsKrCK3PqrczPAemSMfjujpgjiJdfxZdENLABUSi6f45xPYotuNgCuZGS1",
  "key21": "479RbZkeD2VpUd4Men4rGo2eESCLJ3yCitRTyFurhgRSn5UFuEg3Lm3FEr38j6BBQ25iQo73Wk2KXp7efNGBf8YN",
  "key22": "4NpsN6riAFkynBakJN82ibNnuCnh9EDfssqV89c1XvoXbU7t8HDC5yUzeq1AqfRYV4uCF7EPDNY8eu56aniPZuoe",
  "key23": "5Dr3ccPvw3YoJMhvkf53s9nwngQ3GGcnbkvkSthAXFcotsZD4LTR64PT8PqZM6mx3R7cvFpNv3a23j8qCS66pBtM",
  "key24": "2tad2AgvBW8AJXShntm8RE1eaBb5qiUfzKM6uLCvFfYHN7jMXUHS1LqUXUGxUipYUPHofUQp7i5RFvkRnzVD6AeK",
  "key25": "3b6pcoRdUqvESvbdM722Ajz4xL43E1kUWBjHH6PMGJNQ6GYT5VdLvMfWbnRfWX6zxiwsPzSvyZbjWpT3apnH2SFX"
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
