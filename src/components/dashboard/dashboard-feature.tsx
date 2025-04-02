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
    "4N8y8gGsE3MsXDDAtX7aJjSWSkkpDzTbmdqyCKJmpHdFGjbsZwwdXKcKja5DstpifA2hCkfwEwR57kyCaSKUiNcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDMtMejgCQVz9D8RL6w6tYRDbTi7PfFmb8V3D3UqFc7oZuNAyPU16N5e6EWHxGjNcXc35XswmV4fosz6TsfU6Go",
  "key1": "mZmzGC453q6zPQbxcmpKNm1gGeuTCf8oQbRYsEs2jSbUMNqp2km6pgwLaAcCvsUGJf9MV1fW2mrcxpVJsvvD4nY",
  "key2": "4WsGxHDcKTnv3ppMj9ippSb9UA4tkAfThNw4pZExqWodffV9j7F2q4nHHCqemG3hBDkGTnxDrVA6iw2fMPJtuLNL",
  "key3": "4XQKj15HCkWrrS8BffFzNpCSg5jxq6dr2eBVYZhvyMhMpeGR9kG5p7iUpvVV5xgZE4VXfyhYDQ7jRcojnS4DDLAX",
  "key4": "23aZ3yyeVuR12bVtKx1DBDvuFVpzPB1D4t3er49Taim8YmMbGjTygCVFMbz7BY9my6yk6qANrFawQ2iJzYtivgQB",
  "key5": "4HxQ9p8xdVvEEUWMZ8XcySGdSTQPacsWbFhdFcKzhQbjfaiFYNa7JYStYtQQ3abZqF5EoypptHAG1NdXcq1Fdf6N",
  "key6": "4eThf8PTyPPDa3XGhkYh8sqSDcaRjo95He7EZ2kcdnzMuJ86JMNLWu9MPzsGYy8C2NJmB6hBQd3PCufKHfhkxfhP",
  "key7": "5T6mC6PJ7puD9ha4rgmyfkvy8GeVjRpX4wuNE2FJdQ422UZsh5defUAuwBDRgBoNLn9dXLceCq4gHe3DXeRNs8DZ",
  "key8": "3tmZBsR7r3a6SojtBQotGhHhr8zuKqJYLkV2KguMyj1thcNUkD9NTYXVxBYGHzRKTwvcZD3rNjfwEkWmwDmdksm1",
  "key9": "2RCaqhhuMMeHTVSoTJa6sTCXix9R6pWJnSc389FjahaMfkemC3xzUUAjDGAgE7zAHMb8A8KXjsLH9oZaagjRTJ74",
  "key10": "5sjx7HtJkbUQEdc9kh5eRAvLuRTpsiDYqNKE94PmNzKuVBJazUzco5qmLuDuN2LJo4UzWVzUYU2MZUSmZQhAvS6v",
  "key11": "2TDpX7ttzvFLNU4CbgTN8FUyKQARpLN8PApbw2XHYYY4Et6KTiy1hnBF3EXX8PQLtzf871y6gfWiCvBWBp1UjEfQ",
  "key12": "3D5S9iNR31jwWmf6ne73rUbS5vuBAiU42p6YhXXv1YdeTZoTU4tXCzCKhudhaPct1VwUKybjdinFw8A7C5GgZBgu",
  "key13": "54jGchPSruMR3JQ3xJhaFhSXCAuJfSM48QMdSdwMUDNk9Jc1yjfp84kjpenY4bHUAW7rJ72WJr7pF1bEur4xEcJY",
  "key14": "g8LLD8gvAh35qpXCkALqD1D4PGJ2DyGWyKGkFrG52gGRoyvgFn1fj3ybGAf5FhvBwRPGsjkJvTprPSkMAac6FRJ",
  "key15": "5XS8kP8regNH3iSbR4s6dqphjDs2o4RKnnirfXzeBifSXUWRiKkfhFGrYoJWyCiA5iRvg2h3BkmVvzt2ecCzKGv3",
  "key16": "3gaiCVo2SUVFWgxeamg6xMGSqR88S5EjxbYR1N4V2hJDGNHdM8hvsuzWriQvByexK3fLMaKFm7xKiJ7QKykXhqQH",
  "key17": "3yUNgFVa3HFQahzJSji44mTcYMxUEKspojGpjZt93dywcMpGTQzN8xFW5vhLVoTApxH4pqaqTPYXgywkUonAk54g",
  "key18": "4SwmkBBgg6Dtw17XaW6zM4qErkNJzSQF11CcY6bacN7nSR8ia1F9HFXmeKjmsUwfru8r2Vi1TsRw2RdQPkbu6JA5",
  "key19": "2DE9hwiotizyQyqMkzyZtcASrUrr7S5wcEYSAmP2UW3ktqVnASRRtNcJFGrgwBcv1BGdgEoNA9U3qf3EEuhxcaW8",
  "key20": "2yaCP7D24ZUJtiWzcLzYTDr5fbDv4XJ7KV2YsnxHGKHEwDt9z98SP56WX6nG4iRGapr7ZzbiZ4xn8a5f1fdFKUL4",
  "key21": "4uFj1rUA3XpUhy8Tk41sDzXUaP1xXDTjy6bm5ayEC7RyGGC2UEW91SfV3jeTPtUjzHndJgoizwK9cih9EnwmbLKi",
  "key22": "ac3EygZLfMbcjGViSpcoSdBvBARYgtKxbiTY388zcnwN7VfBUqhxVWZY5kL9dacCbB8yEaQCq1CPUoBUJMvd2Vs",
  "key23": "3Z33PtXP7mE48NAXSnNAiw68YazP8P3uUmhYaLqNH4hehTwiHEA4RarfDCd4u3UcmZkR5Vq5QhYuLLnUTbD3d6iT",
  "key24": "5BNXtgM57kTeKU3q2N1EHxGWu8n3hLLn65PTX7R2fR2E2Q1JFz8vh8SPhRbjwuwbtct99FTgR2GvJXJvNKKExuW9",
  "key25": "58gAWnSBCfr4TehdkgMFA1okeJJxphiDPFeeCe4shCVc6nGPQB41WAYo2hNgnRoNViFeZVd5VNJDqyVogWff6NAQ",
  "key26": "AbwwNraMZwnjQC7U3YDoPT1KH6YafxJkfiRHkkNU9sb4mNfeFMSsB6h3fVr3U76XkavRqE6SRyr2HaKiY1QmvDN",
  "key27": "4NbZjefMn8pu78C1F6DdgbtyShYzZEk4h2dXoPo7YHaYcWTcEecCNR4Ayjfgu2oi6kS8k4n9wEHqkT8u9Hm6Avcm"
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
