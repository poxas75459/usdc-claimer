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
    "2Gd3ZcjPLCojbDhYKcnMJ69BmcGQy8EqwpBVgBqeyHQh4vLGkzPPPcPcmvT4BnGZhe5R1YdXDR6AveCqUQeKzccG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dL448Um5oPQ3T9Lqx4Cj8ud9ehxNqVXbdUvsbMn49EucpUHisRP5KhwCmmVmziuPVhyppfSp7KX6QbLJoRUttmZ",
  "key1": "4dQXKZzReyW6xbjqdcTvsKpzK3XudRNW9sV1cVXrs5SXG5bJSk4WsqwSwwqCmnm3dRievet6hxh2ehbTiqY7ab37",
  "key2": "2xUvfLz39KgQAjj11d1Zm2cGjJysnss1CYD6Z3DwXfuuGuVNnHopwLRuJe24AxsZv5wWRpqAExFL4W9sG2hjUHaE",
  "key3": "5tbfqjkb92B286FaDSNXHUQx7NpUS5Qhv5pRRjkghYnJfqoXP9DCqoRwHnm1PyPe9tNDxU9kA7s3Kd2JZd11QeK",
  "key4": "2Kkt6pDGDuzYDAs23kDy8NKiP75j7wFt1mtSAz86VZkSFzfJ6P7zuMANLCK5i5AABa2z4E5tYL9zWGW7JPQDL3Ct",
  "key5": "Zx3RJjvopR9Ti2aSbPZYNVTr4YwW7ZaZHBM4wnBsutjVK65rg5b6BZNAkc1rpbBuZitWnPQzvwwto9dPujjsNws",
  "key6": "43qQVAPGPf21PG3rvLaR6WC1XdpZCt9HrgbwrtSBVEMzvViAgmjBLU7nX3rP5MhYfy4UfHkWE5ajvu5tfnmXDEsR",
  "key7": "4heEU4AUzA5u24h4FvDhiKbvXAufYB7v72YtR2xWwxDWm8qHDnTAZw6LdiqsTWSubTBLkmE7kqmvxsruX5AHEkgr",
  "key8": "5Pc2G7HZu3WQPjKaVeGQMrbu6HtFf9YXdSQjNa5V8vqkB9WcpNCJNkb6iDgdD1PxJF9JWjB7ase9WTseaS8JroRv",
  "key9": "2kFMip7qMhDpWb7P2ynfiTyRtx7KXnxCnZmUAhVt2n7fvK1GkEd4AQ1VD8xeFy8Fn3A1us4rdXV43Ggmy5QCWKYF",
  "key10": "3zUpWWgpXd24eBiKu6rFHEoBLYUfbRWHr7u8qzoSLd81ZpJUwtB4VTfdnoHoc1wmHfZJuVZDYvX71dvCsTDLLh2",
  "key11": "5AY22LPk2oet83gRQhiMYDX1KRBT32ErjqZ35YKnqSqP7ZemJGe62fhTarZvbiD9RQZ6AXb7V1TCh1b5Hgiw6XHU",
  "key12": "qaSqEKRFD4RbTkdMDBKQbyBJEaE2td7zjdxcEXPRysAkA977RsVrghebzvJVvBDq7ndFfhHkq8APayMs21ePRjW",
  "key13": "4iHxNQm4j55UrejrdK166EResQewsMyQAjaQp4z4X2Zzpj5hDAyXf2FUuxwm2WjNKUrUiyqfXXCVdrrXjwCfCVWF",
  "key14": "2PZuKHZQ7aMwgvRwe2C22rrJ1Z94s2cBwzmUxvPGFmSsu2dWAjggTnm6nP2Z2aztEtrUp4L3PpjnHx8EPVStiiZK",
  "key15": "5XZbPwARJXBPF1XV87dtcRnrXwdonJqbsERtvicB5ia9g2Nyju3GN2fJgHFZ8bZr69KEWF2WJoxyGxSQ4S6M1si8",
  "key16": "2zEtUtZmnTMCbkBDYTR1yxQBXBoxooD91S1c8TxTob3khxnqTCCYJi1iqGa4YkHrZuHaQq7WHJFtUWp1Bxrw71nZ",
  "key17": "5d16Nuy851Y7GeYpnsuMdiztmNX3AmeCUaqTFNwurybAFGaNSXwgyFB4EKF5XxDGQaiZtMjkUWHVB6GKgYesUraY",
  "key18": "4LqbtPkXdR4iWVEb3ZhmwowZA2L7wfVMbuHLWVMsrT8Ush2DFG7WXAMhxao8ryjQ8JhNtq5q55a5A8TuvfEzqzC6",
  "key19": "2EMhFDoKRNTW1664vMReb2smtwVVCQB1DmiVRWB4NichtMzQbN9opvR8QzLX8GqXNwRkg4Jr1Mbef6GfzaYtb5K2",
  "key20": "2dUgmbvcNtEMK1Soc2BBGzn7QNKdBJrv2BboPEFWbfVVVnmExotZfH3w1uCXisYLGTjYZ28yf3gnDiP3pwzL1ubm",
  "key21": "51suw6mGCXRsCXeYu89Cttt78qxzaaz63EUhPsQN7LpTspdbaiMiZe6KxnTr6Pd1ns4h9vEiRWNcVw6iDG98PUnX",
  "key22": "3jsAbbxFwm1tsra7wQvaUsgDUU5ejoSmo3RHwLtQ5YqGmGFK5oGkVPhdmYeRjwi7q5jP61zsAN5hgJyyVgHiirxf",
  "key23": "rAFjKymG23Kk6Bo4VjYB3HGe4Yh5aNzmm2MdmwRiqGkVmiehSMBrcUUDaAbiTAcbRGEe4UvZhnsw1WgNGfwEi1t",
  "key24": "5JTGAL6CeNwj9xZt95cpNCCzhX3CwZFi2tZzejJtGLohMVXSYEAWg6etH1VDPnoD18JYTNK9N7ZXbk5q4fWcWJc8",
  "key25": "41nNXKDBqSzAQShYqEEJqhNUqZW1BezZaeSbCAfq7CQZ4HMwUMEDfAUmpRJP8uaHJgXgM2v9mN5JQk1s8NHR2xXy",
  "key26": "qQTuyJ9iqV7rjBASnRMLT2RntK4ynBcUePWj5dbeat8T6tPJetPbiVnpTE6K7cvS8UFaoiqQNnmpBHAeqyZAoKM"
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
