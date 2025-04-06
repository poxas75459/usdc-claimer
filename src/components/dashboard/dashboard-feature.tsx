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
    "5A8hXLexG3uVen7yBjuRG7kLDeSP2AaMu4wgPKt7xob8DLn7fT6g3b8B2XheRam76N1B5NhCS5cTsxF5piNxM5mX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FunD9PApWp2RrCe8C3GX5FtX8SSmaA6bSikYmayrWKv9PvyaNDj58gWJVbgcpTKqwCfCNFmJSCPg1p1nv437sQh",
  "key1": "5tuvCWVB5JFRfPPqngjsMCtey8AUtGK9z6jHbTuoCoCjJgX5LGN3rCy7Xhhe6CNDdqiW7e14g6zR5aWEfmoi3yqV",
  "key2": "566mXVqPYgKopmLwzjKfBtFz9RSNUBaUtUc32CYVcgxbN7TEjEQXKTALvi9yUSeFLACD9RfuxobWXHdsYoD9Avtv",
  "key3": "rsPDYE4rskVo7rcNqyCRNfECjwCugvzjkdAPCw1uhdSWApdcHRwfkRdZD7xxGejLAhEKMUMGqpnqDpVQaMGqz37",
  "key4": "Z9oaAD3BfUDm1EPJQLFVJuB5SthHKSZquFhvCHiRbJVj5i9FfqDaWGqARRjrTMaQLGuQtekvKfvbAr7vMq6C7R6",
  "key5": "2ov1vx277rS7RsTYA4o3qdbQgp3TMgp7Dh6pFKF8URxTaWiaKNGtY1BA3ZHouQ8PYDhfJKSs51gHTNgYAya5zD3q",
  "key6": "2PCF7T5EJ4NXZ31c4Pod5YZrMGkqHTqsqZ3MeafKY449kh8yjbTcT9zEo7C4skfALteErGzuaoymDc7cZ5VSxoBv",
  "key7": "5bKQSt7tknMtscCBhfitnF81dJfrkd23x6Z7xGecbgLEK8JAjaXvhodwiVZq2RJ3oXGmA8QtvdiSJaCnvRCh3NKT",
  "key8": "51owKZqrH7pUjtZyq2MeHJx2Nd9BmAFpew28mEseLi9FwADyhkq6CD8by7EszXoWRhiFN1hSPFMNLVfCwEu8mygT",
  "key9": "2evdhBRpzXLeCZ2scN5qaFp3mXX3VMBmxUTxHHdoBdkyN7L1nymkBzfyR1jfgBVjSaQRTgUxsFzT55xSxbzwfG9a",
  "key10": "3Dbow7HQYQ5fEaVFeX8DQB994XJ2TD5tbTE3RVMGn5AzJ8mPcqzLu2wSX66tt9YFfTXemd3JsKJAxLCDK7uyuemp",
  "key11": "7tvK178Y8BKeNNksFuhpDEtiBLeueK5AM8kqKyDTi5zpUpkRwaKW61GV7BfttvJFgLamhyUbStPbNjRJ11nw1U5",
  "key12": "3DXzuvKw3JREvRqkLMnu46dxWD2h6jcHyJjj6aspkarThUatc4zeSRgpG1JtvAu5HR9MpYQDWPoMbW5jjt7UNpJJ",
  "key13": "GRkUJLV6VTzRT5EQfs5cZXVbzyANjPSRvV5FEUNuSViKYPQnM8KrBCMB8xAizTHWqf39CMxrzFZf2RLBAhJnsh9",
  "key14": "3FU7h7QtCATReobD4kQNBmYPLmohMgt4BbTpthktpBz5cLzTxf58tZvGbjeebduL5TqkX8vBV28VYX1vdW43tMmu",
  "key15": "53nghDQFoet3hZZ61Y5cgNnGykvSXATkJq1igDWBvDPtJXgxakg9MAsyYPk6Mjp8iN9kmQ4LokSNMTBr4os7qLor",
  "key16": "4979xLsdDPZYaGqEEPgaKPMZMKXDZ78Fa82cGJfnD44vBY4Lqau4UqNLzY4qShBfagdNPEyfGbVGGA3K6ZeGVpbf",
  "key17": "5BXnypv4VriTbVyxKbiU2cTcukArB8HfSNwV6w2mpm2wKXXbX5BQr6jU5LKF7PX1VZGU2LjpoHxwoveYE8hjQpGA",
  "key18": "2twRcKm5f2uTpkeB6BmwribFxo19qc5s7v1TZvKnbYZLk5mYSvQ9SRRYBestKzhGm1nh4NUDZ1x9vnGt6CXQSERH",
  "key19": "5uxMh61XXE7t4JUFWCPdF83nhTeEoymaA5sEv1GxavtHoLiP2WzwMP5z3zPykz8HLLLbW1dfM4g2s7KEXRXnKDNX",
  "key20": "axuPpVpumYgYedgPbxJdtiykhDcHtggSJ8f9PhMTdHx7UgrsFBYC8DJHCk7j6iNXrGz19RFnHvv8tRk8nsh3gvV",
  "key21": "4ZvFSBHw6XbfBjrpUHfsL8DTjQA1W3fMYhXrSsns7auHRDAi5oiriYzQJHV8fLcTNHMHRY3Xv9yKrdUUGgLYvRTr",
  "key22": "4WzN265wBeYBJS6RJpL2xpZsnig2BZA1v3kcXDy2iBfhS8UGNKKtGo283tB6XH81eSwXomZ1C8SyuWYrN7Gdc8hR",
  "key23": "Fd3QxZNqHJj2fP8w2oqc1ceKzEVRxNrZd5hYtbmqvn6ytKnbnH2NTbfpRw4vZnHUtUxu1dS3Rc9uKWKKmroMxtd",
  "key24": "NjqC6CkkxBKqFK92TaHmSFincQYHziJPVeWzC2X1xNR4FbdJr2o6TSBc6XJZgEAx1d6DCvzij4RbWMLuZZbHw68",
  "key25": "4haxJtSf14Dsug2yf16ZLacSCLLu62dqfcgjScHQ7xj8advwkhQtaA7YWx439Jvk4FEwSLx1XtfVw764Je5vYJSe"
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
