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
    "NHAqkojwanF9JCeGQUEzY2zWLnCYTbuvPn8RTu7gU8DrSBnosYi1GsHQkain2q782UWLVw3rpFneiqJ5h59X6rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QUmc3HfDU8HkjkRrdhB97HHDUdHdpGJbCPuTMn4zULEp9nne7NynV724HaUWGjBxehx5fRLPuzrgssfLMM3e1ce",
  "key1": "3N7iKbEtar887K7UYgfX19qAtazafdx2AFzqCyvuxx84rQw7xwhrKtcr82Fk28CttuG6TbxhyktVRjZmWzeJZPxk",
  "key2": "QYwwURZKVH5LEnWnMVgdkZd4SpiASQarKfbBxXjGB6GW15eJJs25c9v5ZVBZXwF6YFGcz8Ma9i7vH6ysBJ3SuPQ",
  "key3": "2MtDV4cScaG8cmuRZiSjgwPzKRQKoUwpqk82EWE9TwCxA84tSbW3CUFsEggsjVDam8zRC7BZu3VRUAdMEEQjBqTd",
  "key4": "XrV4nYhN5QVZTCkMXyjMRbAF9q4EvKhNY2v2MJa3kFaUJB1y1jzSZWKQHaFWpHcLMuLnckRuB7Ab9hPZv6fGjBs",
  "key5": "3F95fZZSN8e4Zo6Qu3ekM5n2ifocTDkEe2wRDkNYdAApXyF8eg1Lj6RWRV99TurFUYSWeVetYdGWPJvRs2Qvr2uA",
  "key6": "2epJBhoWgsAXNFqGP8uCvVhK2Tcn3qXYfA9YV4oGjtmKBqiWTJCh3ZvXqAGaQb5cz7NtNjfG7RM2Dtqvc2E2rzq4",
  "key7": "2k3qL46BMc4LpD6ZKtjCL9bZ2BJvZVARfXowNS6dRffebfrgPZmnVQzYehPQTtDzXeBTyjpD7NXnZ7Z8DSwFhdwp",
  "key8": "4tCJ4n7zUWFiGzwvH5ZWpkXN5j1jiM3s3YsSzRjxYz3fjmuyMJvuBUkRwhPtkLSw2QTPP9oCiJjuJgcVKetDV1mP",
  "key9": "4sP4DwDm2FQmirMNcaGuafqbtbdyxT4rG353iAFwmsWKSXYryAPknibw32nGCPrw9WheE5zeqGDpE8nvKQALqrT1",
  "key10": "XV77DAfhUzeW1WAfZcWWKKfjpSkDLaD7PEP4axWpTMm2R17mULjMifjD9DvutqaP4ZrFuxMy85TkB1JSENLDh5h",
  "key11": "4DqiUgQ1Z81eYhR8ikfXSoB4kpn7g3kUhdXbxVQkK9996uUjkgvSDPV8AvB5cK5wpxj3qNCAw9txX4kd7S9wmge1",
  "key12": "4zyrssVpxJKjBFbxT2mNNpRPJVsjZYCrU7sWFVyYAznyMKfBCPSofVcNJ4WG63grvGjKGJCx7f3SrhfD1fF6Kwbk",
  "key13": "2SYLiYLPU7idjQK8Li6FTRrb9Rq6ZvPo8ns7vQTWE4rmKEJwdPApUJWK4gm4haAciPvaWZYd43Si3R7jbHYCAUS8",
  "key14": "4xgexvZ6mQpPKKkekxvoHnMaoxh1dY7XQKfbj1f3bYc5PpuTXV9nM9JRECjY3HrSLvjZZfhx3iTHGt1ZCDuBy3jV",
  "key15": "qFwbkXzn64FZm5BCk68cMhxa9MivcwvPuWRxu29SPn7GvWR2n9K28Cd9XdxCCGS4Fqf155pzQaLzYFU3Hg96gRm",
  "key16": "5rYRfo4nsjUF11y3nT1h9t2Cx2VQcDB73NKkkou8odNrTvuv8LhB3bd3PegH9U8mEqrJU6h8MCvtveJ84HghLS68",
  "key17": "5faxLjhPxnAncg2ZYPdHQ6FqNRaUQ6utVGDrVb2MP2GEAjp6Qr8KACQQip8ExWLUyoPd9wYjV4uhaFj36wCrc2Mi",
  "key18": "2nPjpAPscKtWFEjSbftBzNmhohFXNWxgdNJ8mto3dvPyAyE6PCdyujvdvwNdH6jD73xrLs3EmuFPpaa66su14WTJ",
  "key19": "bB3rKFWwx2HUk21VLtxnsVwwCc8RdAHJiuoAkzUKfrHqRLPUa25p55XNcW7bQeWGcJbStJeYYpDLAPXsVK8MdwH",
  "key20": "4MiZvfBEjVEVjgLHuhEjJNX6frsgJEe5PKWSJHWoKWSHzDoDZ4X4vwgv61gcBphr6koQznkax1Z6dNYBx16rPxyu",
  "key21": "2Y6aqHycMsdx52mCbpi5w8WtCQHGF8pgCYXDrnjv9sw2FwYiWYWN4VkSqJaER9BChr67qnVdtSW9e6D98L4iJTbf",
  "key22": "31PY62HnuGvXmi3yTx6B4GSTM9SdthZuJDu9vXie49bcuPqPKDXqrRzTYQfcsquL4M9nncRL3hdP6ym6LkVTxh4F",
  "key23": "2v1S4tQFtLuv2JtrMJXLJam2ZwJh9LqEa81xLnYwLcdfKqWQh4SvwgvCTbTdqKJwfFB7ytJjNzcuJoL4yioVN6XQ",
  "key24": "5rPYKwrSqA9BeFGDVcv4PfQkkUmBMjaz7WV7evfcTmxa7mj5Hs6PTTCqJGdRVgTjskwAUJWvbrrdTKoRkWAdViUA",
  "key25": "3PTVSQ7MiBxzEMJhB2aHp9Ws5M1BwVB5o8G1KmWiWUvUtp5t9wtDRm5ionWeF5v3uu4hodWxautNH1CT8NrjanNd",
  "key26": "25kHJtRSAHUR7pcbE1UuaNFr3W639WFigEokyjBa5n5pk22RsHkYpfJdsXmF5DSPER7i8ytZ9uSbNDMr9iG4cwgH",
  "key27": "rCWmFzVDynmMUzBicEUP4S61Ly1AxSqvEajWcy6Kcw3MzSNjgwMD2JGJM4cEpN6x6fvL9cjkZxL92d2E4BKnJiB",
  "key28": "45RkthpdnxjASKqG27MAc4nnod3zZwTnMHAg6ttk8MpPh9nibATPXeiJd1ntyDmzb7DSkRBQEk9NGzByXHxJJcqp",
  "key29": "rwCfeigitYznqjdz4zvo6ZcBLKpZPgDAvGUCZhuUDJBMYjCvRfVTNdSALgDcCA1WKXXPEfE8XYmpBBbEQC1jvU9",
  "key30": "5tuDPCcSAarfXjRCHi37cJQDCMXAL91iu2yREsvA35fKrKffqfeAoqeiHEnQq3nX1YX81Np1M2fkSR1vvoBXxxNW",
  "key31": "4p4iVk7pL99nhgPMwKc3yZkzGkqAjiWtrLqQdLc9NQiA9SgfpwuiGWpYkpLuBcGcaPzxyh16YifH2BtAtGmWrG4A",
  "key32": "ULny3NHZkk1BPTibc238iYk3h6frrPPkrWZN5o3eHqmo2h8bYAet4co7MMNs1ZYCyZtZxhaSDxwBzgC343kuaji",
  "key33": "3poWNpSUqU9Rk4txdwcXzVX4JiwCmey7JdvvYrGnt9gncvj9xUiEnV7RVwMb3YhcPp8383bk1s5wzhu6Sojyd3jT"
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
