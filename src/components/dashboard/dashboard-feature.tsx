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
    "3WNYzKWAc92xXUmtSzL3Z1rzjGpgSxB3qh9BAqhVnTo5yDDrKRix6QwkNzUjKUZ65Sk8Nnu2QYrrFZgkpK8X9o1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTExtXRAHxhjLhveYmZQE2C4Vn3soJ4w7Wm4j9kWatjHwkebrjp8netQ5WjZ1XCs6bap81jtsYGUigJuNTwzbqG",
  "key1": "34YFdF5mCNYDnYaV6if3iorKDeW1RhLg1EUzE9TX3rwg3Z6XvupQ3dLUswiajczhVqf4Fkaqgo7suTn2nDkVeXzX",
  "key2": "3DWYaucg2UVk8tZb8LQHYohYr8T2oEjvYQsbcAEXBtuGnRMtk1H6SNvpx6zxNVZv75AHuUrmJbQwvjFkvDJzkEvc",
  "key3": "5ePZEPh6UZtAMY34MxD7bdzH1FopWA9uK5bVEzdCFPDAUj34At9T6YoAy7kVuDEVtE97h7kwxaw8kK5sRwnFLQBQ",
  "key4": "4MgFUP4TfMnNTuzBf8tDU3BQfjPBFiMfRYzF9Mbo3QFHhfx58b9r62kzaUEvYDiFdyokwbLcHhAP13dHfkXRX5rZ",
  "key5": "35umC4eBSE3aHicexRaZDit8sJMjs3PaDVd3Ts7zqmA5d59YFKkbaa46MXbpoKVgQTYdVox2BYDZyg5CkrMMSNre",
  "key6": "3rRDh7ZYePar8z4MkQmUAVBmdhUh4mTyNs7eqgCVjKQEfgBzNh1oHvyM4f8Ei8k34YzEk4374NBt7nFfrC35QHiP",
  "key7": "MpDugovQV8MAVqjyhzqBdRFSWyePNDHZ6CfADgpUcnS4qCxVHKexM1BbbKcLkqHe8ZEdLcMDUUYjR4Gh7ebF4yH",
  "key8": "3pZq6Rak3LhpyXxh9KfCNLrkXKzmX1SEmDNv3PPkkQRDPNCzYd5BkvjjyShgkNdo3UBQWUihr2r5589NDqxZzJcB",
  "key9": "4ZfmXqPBcthY1yp8WXvCV8anUPi7T4mW1WEJpnhqohPfUDAdyvEk6JpEFwnMUMcxwArvCmzA4GTSKRy91xDzbzvW",
  "key10": "2J6i7YPxEGYzH7wiHUVs7HHcQE9t1ZmUB9Sg6ybYXcK5Bj56Gn4m7PmfWDXDC4SenMG4pEyDh65edvkBK8V5WGYU",
  "key11": "5AxLpBFwzH8gjZ9krDRsDN4BVY8cQXPAmxpgXRRkbwx6gi7CthVAwMQhma2Fg8MUr9rUcTcG2rHrwvfBL2t4Sec1",
  "key12": "5AwqesCp3Z8Rmk9hBZ5UHzTDbayhtNzzv1wXHXJ8iErQg4vNFuh51Wock51D5qSyrNcAk48GBsw3KXMttU3VBK1r",
  "key13": "2dd8tKAaK64sxLJGoNgBkcpxWi4KfoZijQh7mt7dWdxpJF171juTAyzvMMeKzpnApJQdGABPVwvJEAiMCaRhsdsm",
  "key14": "61cFkHnqncCg3ZUKQE1UA58xjcHjrKcfoWMSwGH5twGgKQxpXFEEue2wenVPc9YCrKJrgvokuCdzttWCfyd7Szi8",
  "key15": "3b3pT8zQWRTBCo4xfDjC74R3NnBcS17G2VasPy9UjnM1eMkPju8rz2bKTRGqDw1RBEhgHhNYdbCZYNuFwBkCDQRR",
  "key16": "4rHcyRJdk75AQ92TceSUFdzbdTKid8DVVzun35PwcKdWWsD7ctAYBLdW4NWf46NbRqnGy8fcX1VyrQa96YMKYXsZ",
  "key17": "2GSppcJC8dVEpu3H2v3nm3zafaGDrFx8AeaKc4b1x2wt8rc8qzPUPn8fjXd7Wh2gdEoA1mhNvjsPuoxgH6yV2Pf3",
  "key18": "52jkdvxHWnZDJVcifSf5a3EsM8kCWp5yeeB3mJ5FdzVGvVq7HcN2783jtASrLp1rytUkJyVtLzYuSAXYsWZPi7Dw",
  "key19": "FnDtDct6SRDMgHSCXgQpfsW8uUPRstERmqTm2kUKLrZ7pHsRUsBxGUNJ53yfXUhUHv7hVDPkkVRSLZru4C5RyAN",
  "key20": "4h1iFKGtpZpPUaDrEoSPdpwmuMC7Mq1ZqLDyj4KTDTMCuq76vsUnBeZ5RH5GNdWojpdjTXBS1uwfXWzxir4xGnZu",
  "key21": "3F79nCxLixrR6hEt6qLAQdewAaJai27MfTYnw6rowQKApTA51QXHCsboCbFStWFMxbHeAuWV9H2vppPAymk2GrHg",
  "key22": "2597mM2SiMHepv1ssYBvBudUkqDo77MXCN4ubSwSyZahWN7jQdM88RJY1C5QViDaPXooBEeozHWzJWFniaUk2w5u",
  "key23": "4YutLKKFi6EbMDcmbxAZkWX3MH7sYvx8vuj2r89kdiRfsxz4QeYevbCMjPFU62iHTpPC4TXhrv5wBp43j5jpvUTb",
  "key24": "RQRwBZJJb6ocs2kcYw9GV1SonCKPYp9m48T7ryyNfRgQrcDopHaa6BGSGsgyeAQPDGjULrifDZVB1rc1gcsbTbP",
  "key25": "4tieviUJfubvYkJ8Z5C5tuU8sdW4Jg7awHXRpt2TWZ2f9FWGZddsn1yur1F8ybKxAvCA9jEsT6HkHUaF7LvbzDc7",
  "key26": "PJ5spmtjEGTbwgvMGd3ztfJkRnADfd92pqzSRafrNcTx9qx1o1XkeEQUnNzErDZUMWgi86Zos9TwJALR6bv4mN1",
  "key27": "21RQLQVyTr4rzpTHR4afhu86tdgnTQVorK7EtHKy2z9WVXSb7VVKivEdTabsoDYXeaRMJYYbjnxS4RSMpTcoGZ63",
  "key28": "5QMktsnYiXtnr8DSG6Tqag51fZFjpnkR5xkqfeVmTTYocrJTYWZDaNMjBmbS2kZUT8GhmMLmsPN3kcY6AZ2j3xDK",
  "key29": "2S47YfpbXS5F2YfkbE7Ncdoeyd757o1FBui1uriX7B4VDXe3P4yUqRvSCTFkrvB4u1UKKLaL11z4G4Vc5Dtsxqsc",
  "key30": "23B5UrLFSzT2iEdgCz4MQugXSkeBfcWo41cA7CYfJMKSkp7oyu51PtubLuitZzSbSqVNJxemycmU51UWRerMkg9P",
  "key31": "rb7ewEh32aDEpiUZRdchRoqHDfw8rpdCPd7PTxXY46siNZ5aFV2yBCBgSL692foCxAiWj2CGW7UP4cZ3pzBvwoW"
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
