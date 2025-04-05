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
    "4KoUVHmrCnWzdW3KeYmAoUXr46HMUixvdy6GNfwgZ5J92WfG6J5uuVjBoCv7QCAQntQ9E9hfFQXnJpUhY9kf6VYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkvNjNZRjwgqVRdVG3ocwJXnmUDG1Uuw2K1Kx9ujpC4DrxesVGTGovqyAsY5ira1TtpgCRsfw3LYaPJiMjjQTnT",
  "key1": "2ij9gqfJgv7iDmAtD1WzH33YHfaaWGYqm7qzWoxQjLKSYQpn4BiSjaqvUwVRPDCXTr6tZzK44t8zg1pFB4uDDj8J",
  "key2": "4neaD8VpyY5RcadoSHDH4jc1U9XQN9zK57CnBH8J6Rg67JZFhuhPUDnwWaMLc8rq1d6KNE7tUsAxTvVpuEnYMLd9",
  "key3": "3BzyXU2dLk5LV5HR318qK9Vamho69dp33smGEKLAUgUikzZQVY9bWTdRpnzMLHfmQGqL5pp87JUPcaBEk2dxbvyv",
  "key4": "31RK7P2ys42fTqMTSvfsttNMcyfuMs6gJFcAJrip6tMjSMqJqk1JSyVJdgCYP9j9FrzP7iEUQXuRc5YkEQFDsMot",
  "key5": "4jQ1fM7w8gMb1q2rMfkD4utzrQagqpwdAXPbBCC3zSPZ2gWaPhdmmHrZqZuVEuPMCZdBxSHtoyHyES5L6NA2y3q9",
  "key6": "661auRdUsLGN5mGCNPZPwws95xvuCiBrtEtDd71cwCVNK1AnqGnqe1wA39zt9q5LbYXggTiYsdDiudd96jEQbGmg",
  "key7": "sUAKKLPJ9ditfUZHpCYaQBCPECV3bRycJtiQMQe4h2XPQPxq5k2mA3g9m2VbMYZWq358rKQrUnZ3akYpde26gaS",
  "key8": "2sKBjASknDp5wQcFevpGv2jw4dpxfBQqud8q27pBSjjTvo6bDFqYJaYPMNgTYV9UbzRZ1rktDwjKMq3aFg4TKyu6",
  "key9": "5EYMnQM2aBzVgJvb3D8PSdkfKBFCQx9qPHKS1wJ8ELDhRXVwGvdQ6xVDj4h8ybBzchAJ2xmbB4f7RCNNiK35VSdm",
  "key10": "5FKUH9jQstiLJ926JnJSPAqyWVJfSJpm1CZLgYGtZ7uvX6U46CT6Yci9CNkizhwqW2QhQ2ttF7DXfAPY42GXKa9z",
  "key11": "2p8ysAaiXjdXh53M387UCAkLy6aiJrZnKiXhNAAt78zgKZZU8FgFMRWMEkdctScTtvDSQ3PBgaA1aUYyrhuvqgxe",
  "key12": "5qGepRCBqygZFgJngcuMJgex4Ehro9iML9BNU1jcRzfw1j8LKAKgEUruygUy9jg2Asx592u11Ki8stamADYzJQrp",
  "key13": "2MAVibYzweHRY4karGn8BURNEv4oaRj2ePkp6P2BJCuoFpgXrHiWjFYTo8a5dNzRJoVJNHTbuc7uTZt4VtKoCcZq",
  "key14": "J8z2Jrmz2PPQp49h3RyJAbv512SE43XF4pfaQ5sAHm4G7gU5gzesuE1z6DzND1yHKpQD6AnKhWwH6wRvm8TuPNK",
  "key15": "nLZHsaEKJr6348V3rB6tjUnVnC4uM772GsabYDxB66vMhMUjxezTgB22ni6PSGdGnNZsG8RJzu97RZycTpQFMpy",
  "key16": "3aAnrrJ7tCMVY9HGQtqK9wdDwmfNSjZapn7PzXDY4Yy4xyawkVhdGnetJ9XaZNeiHJL12AsmGtWiKqsaYA16Etje",
  "key17": "4VKXKCW4RepAeZknGYAVU5Ft6La5UPfiUS9MThpDSNus43WMyPnL3fcqph1MxHTS4HiWruSPHqUUD9nzvw1u9xjB",
  "key18": "4L5g6Zd5cp3UrRNHqGDE8W3TqXVRcqRyvTWVXshYBHkXM3pjZmwmHxsQ9N4R6MpXxSVUwYm1yXfatXQ6LCjxjq1r",
  "key19": "4NQixwMg29GbXixHruBKfjXPpvHEGhKBaWJev74R5CE9YkfAmwA31muY7zcckHGgATYhkXsqPCm7YdVKfU9Za5fX",
  "key20": "3o1SSMf4YYYufsUriGn8H2AoJ9Rp2MwhxLS9R1dpy77Tmjc5PWBGVZwewDny49aPaqgUVQw5mLE5BpYueRHH5PXw",
  "key21": "4YSqgZmuXLHTro7kU2znmixtgY9Xj6RFmgJTk4ebqyS4dXxN2DRcnCDne6sy2ZmygX8WNf2tSrj7inpJMEZY44A5",
  "key22": "ejEBhw17stXi2BXCbexP8m4vqmGKDUCHMGqs7gi6Xi3pE8qQUqPM95ogTfNdzfRYsR5NveEefkWee7S3YhXmwVK",
  "key23": "2CrVAj7DfTSZqs4hKaXajUd11g7VEi2UBo6x2A5BGDoxpzmsZ58e3vHggA9h1sEyscHkXV1Hjr7uZLHXujNCtRNL",
  "key24": "m1tG11NYGQ8MV1EqXHe3cDjYbY1Auoq5RhTKZucSqrj6u3f3phSYhzPeuxKeXkYqeGd1id8EM2ZgfZ7gDBo6kkJ",
  "key25": "4iMZPDhaLuDG9WgRScEsXunJmkfVEh5SBA638XzWBJxzibgowxizZgFmRV5L28Ywc94rxkuovpm3ssrsxT3okngM",
  "key26": "27Uu9bjuKaKDnVu3RjYUME2mVE7rzJjsbHWuJAbMH3XZLomNBJ3YJtTswrv1xbv57VtKvwTGychmFuQaA63GJwWB",
  "key27": "4XEy8e6PLZ49zBdEznxWoHQvbpTXpDVwA1dryZvHyKgcVVCec7tctFB5eVnrVbG9h6Zi1BFePc2U2vhmCMnUiknB",
  "key28": "2PexRAVsdTDav9t6jx2WNH2feCVv42i74xgSmWdmAMe5JVdZbkcsiAn9hp3oC59czgNYwiz257LxNJiRXDbqnjTH",
  "key29": "YbkH8EmwNx4yMkPDLsoRyqu4WHWNFJFABnXedWjVJR5xevi1KL4SM1K1ZL3RjDCLFi5oNz5WspSyGvrd88bbSVd",
  "key30": "5yUqpCsqrNoUpm6oiXVWWpvXqRq1CnBpvhG3yutAfFj3svYaGFC5QJxvszgycpPzWs7nwiUk2aSiyZaLVNWxHrg2",
  "key31": "WwxE8fHobri8RmTiguQi6NDPujDPcTU275xUjbKgjwXjMHTCQ7VwNGWDJsQp8ttndSFFDVfuwT3kTYyesz562tX"
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
