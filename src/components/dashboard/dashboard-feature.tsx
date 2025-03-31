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
    "4NQGNg1cpbAwmuj8hRg6wJvaHR5pFwdUbUkQwEasWMKJ17Cduaau5WmqEGcq6TrmhGkN8GGzpgqSjifH3pxHPpwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6VqBn6wLZEGDGZngWcBWKdVkPGnrTuHGcncyAcdb1qRc2YZqqSs6DR5qfuDeQYYMMS52ujDCTUTAwALaZRCJW2",
  "key1": "jwH22RWQX6AjGtrpDMi2smXfmn5Nsoi8WCZNMiTd7C2zDazLTC5Z8bBPkpZtRSZrT5tTKorNYjk1E42Jq9PX8hk",
  "key2": "XDkE7jr629CGnE8Ca2xj7vo6GtqbDLxUZaacs1vFEDitfzMBrZ88mSYT1XoHxW51sqegPnQ2Ue2Xcy7eACzTL81",
  "key3": "4g2ZqdHAuBWQax5Ptk5HCe3caMNKbY77GTDuuX6UzX9v8KRURRgm3EM7yQDAccGyXXk2fZCmttdhYLHGj4adFJSh",
  "key4": "3TdVbAF47AjaQVZ9MibyFbBQASuoXTtkDQENAcP4CDUpab76HkdYCBsueLFSb77A8uJR8VEyMrkpG3FY3gGSyQX8",
  "key5": "3RSWDjtEnDFj6E6YtAFZHAYSB4Ly468tRYXKpCL1WXeEHK42ok2np25swqkA8mTA9UVygkyqmMzNFZxxcN1tKWhR",
  "key6": "vuQMBdduFegaDxDkTdL4bm9548ouAhHiWGptMTchv8nB1zXTyMw4PjfdgJbuZLo5qfneLkjpQFdt5QPrFr2XDPB",
  "key7": "3bG5YZ6uApHpm6eWZ7aHEV7j8QC3xtujgoFDnWHJ2ksiKdbTN3qYw51EsxySy59R1gyW28bw2xGVXgwmh6Wh9rAh",
  "key8": "5CVU7WANuVn5nZjQ9UC1dLpCpgQEPCL9mSoiHZc93YbBS2Xq6PbRbKi7gAYnzkMsyWRboJGjuvuuzJVEQvBPm187",
  "key9": "dRp5tfgmDvMkFNTuGRetCcmiA5KqwRWuEmoyfKTvY9MKrnTvz911WGsYKna4GPK73jhPZfe8i5rU2Mnr5X3r5v1",
  "key10": "5jg37fTJm3bqGZ6cSpmCmyUbGdWCR75vgBAJonxdgy7SVURVosCcuSo7vnF4M6jVrLFB712cwDoiayWiEvb4p6t2",
  "key11": "4dohcSg6SKYuH7jcyRUMU4LdfeqQhFxsntwTofRN3p837eSt54uW7hYcXBvwEjqgQQsUFZG2V2nbdf3eFejKnrBZ",
  "key12": "5sTkQFz1sZhM4EsUZbu5qZt12aRMogcFUr5tV8UM7vwtkqN7vDcc4wKa6qcLydfDamdV4D47F2D3KDzcuYuJ1MiP",
  "key13": "5uXPRfKLY4Y8p5JZe1ZGGeXvUfuEtJgxk6wc1uWABVobKf337DTZMkHSapqq77VLtQVqTpvcftwPiEuYu8r8uHZQ",
  "key14": "3JLywVnwkNmsaAL6g2mTve2Ag1ZbeC1oU1qJadJ234fprUDyzineJ35Jr4AEn52NbWq4kASWHutYnNmQNYxmW3Ng",
  "key15": "RAqLgB4SxxFLxdznCibEvF4BZfMzjA7xtgNxU8mo5Y6yKpQx3QkHKBnEtdtbVPXz5grAtWrPpAiAVTYqYjP5Aew",
  "key16": "YUWG2TGvLNMSJMLLcb2d8dSPPhWvfSqkhkaGc5cuJG4pvHpESrrnXfdUrVWjccovnhTocu2EvsR6iZKtC1mHRgU",
  "key17": "34wmjkKz4Uud4xnuVrn9HttajF9BWWRkMEWRV1aUSF5yhDSepvnmQFycXk7iSnRVNjc3vVN3WJ2byMQBu2k9TtG9",
  "key18": "37jzt6kUtzvges8WFqyex2zWUWL7miHCTzXztKwQdKTU56FYGYgae5HUUNAmNqK9PdZjjiUjM2C8bcvTfdCLnA6p",
  "key19": "3t6f1PNLbdxTNXcRAvBFLByJyc9b82sbLG2URnocJoo4YWt8Yk1gWqY4Z1tYCbQJg9MPcqBC4kLsTFC5fJBDeFrN",
  "key20": "5PPu22XAKBegpccB8iqXqZDb3uMEFL3kPu9RwXboCcvKNcpa1tDEbBAv3mJrE1ow4drBsHSb31AiboG7AzjPo2Gn",
  "key21": "2P67pE28RPRC1P9LhUNthc1vtXDnxFE2gHd8ekbCS15zacJZySMLs1MYkR4dHtr7kNBw8rcrguKEYH1XRvbLSsux",
  "key22": "26XCBkZBfaYzKNjxvMXJBZfhMJFczQ8i6jGsF4kp9qz7EZogAreTwb699ntxU3uTr1knnJQArrHcwHzHWFfyhchc",
  "key23": "5UZySCLQPTTJBNR1pGjpFYTjC9igvcktN5mm7nLcs4dMbLBmkj9kBjZRKaGCHJXJbFkV9z7LsBiUWHmmA3N4sjq9",
  "key24": "4oE8RqvyddQq6juyWyREX5YsLyN4QApsxZD2DXkUKE2KUnFCEbDr1yAKWgxFXwum1x82Q5ye1y6dQ2F5tPjrbBY"
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
