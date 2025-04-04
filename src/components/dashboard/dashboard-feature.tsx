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
    "22G2daYRqWFQE56kJtYgtTP5S7SqvmfZ9uSAUYFsGKaYc5naBfqT9CD8sHqRNfF9fVuXcFiSaHKdb3AdCF4KJ17R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxp8qyeCDXX9Yw6M1yyKAMxnAE19g1axv8PhCwUUQ496jDrBCNwE441vZwnQCDnU1dCF271z5XXgNfQsj3KdTHU",
  "key1": "4iCECGywnA7dipDM7pbfyAfa66FrakDLHXZTeoMtLr9mfNo9Rzdf4WaZw2i3SU2Tmj7gpaMZtP7J4mL8HNjYNSnQ",
  "key2": "3tGS7yzgFYShsXXFQDLrf4oz6LbSdzrU3bBmN4rnZTUEabjiihVSw8KKx4dDAYxGs7hpxT2NimcD9NMu6iLSwGbf",
  "key3": "3zJvpCx6rU9dnsVyQ7CtgwRNvjwzjr5veRKZ4UL7BSg3q9Pu3XqedBbt2To8EMUWCQJKVhiffuNBqMjGoK19qe2b",
  "key4": "59UqXJg7WfWSNhe2Z6kEPau57pZ4aJ9Br6byXBc8bg9kEKbgxcuaCgT78mhrQdTCQpuY5ePJ1WLjf65xmpkHXVcx",
  "key5": "jFZRNdjxU13Q1wUA8GNt7PgYYvKHj9FFF7qBdpX9iuCkTB8VjdZQXTUTHR8ygAyEbECsmu8St2fRAZ8RqBY73Qv",
  "key6": "YneXGHZ6yNTWB6Zdd6djjdH7uWcGpPJFPZsLMQ5TSZ5GfUsVCLLAosCz5HfoYWDHYaTvVbv9vPpfX5rnqvK6XcG",
  "key7": "4XXx91nJWyjD9wKZSvum7ttd9escJHywK9Htjoh4cT9q5DZRtxy5sVDZQ6QxgnaPdcSrq8wGeN4WPYWpg5pwg5Hc",
  "key8": "5fZBCwsdb2ZPCfSpyxiPWxZpQCZnTALPg5sYN5dTBrDqvTRzTzxz3W9NbQha83CBxPPY4GdNaG8k3xdsaiJx5pmD",
  "key9": "3xkiqvvrv5Jwqh1EuiTaHoWJByW9tpbioNKEC8VLPbLBKywnYKv9fnjDM47aZ5prJG1Wt4df1jnqgiAa379tMBbL",
  "key10": "4itvKn6ctVySJUht85FUB2nYACk4VuMx4WBBfHkqEVxKCTaKq982mUY2PuX3C3V6sCRvDVgZSonC7GfveEWDE34b",
  "key11": "FufdgTG9sMZEJFe9H1yM9Jwv4LNd3yDLo6MUSkDLnZ4CgNGV4ifuPUAkz2AQg3i92WWEsN15X8EKJFLhMB5YABE",
  "key12": "5Mgao5vNRRQcUScwcMcHgx5UtvhzPajHiUAXq9bPiPUQ4vXhG5ayP5ardQWTamqejAbpvrZpXWHQLPj2m5EWYUzR",
  "key13": "5yLz9HLwHu53M137mMyZJZZHrnJQTf4K6FCDtSiqiDT8UrLAVPFdykL69sbmBNSi2b6B3m3zvrSEThFjYA4kg4Dm",
  "key14": "4CsiWjvdiNpvoB6uWPzKDk2rkP3XTnPm1nenQ7p4pfd9PhtLGC5ETzPHgZzzPgWrKMVsp1MN8fcsFXWx8JfCjvsb",
  "key15": "Y2ZJqAxzD1sEE8hofXBNguPBdq1cmRcUuB3PTP4VT3vZA1NexQeUhFrgrzDe3LbNKdzgJs9unmiPvvLhYVXznsT",
  "key16": "3trs4JXPMLCRFX29XLTDpgfSBw7Rbq7nDfteA6riqN4JTkBgPNTKMjrRZtuCWziWPRo13UTfkrqn21TJHfENff67",
  "key17": "39Z9Ki1gVfrcsrLCB2s2BxpVnACxwpGFyXJfNocmVvNVhimfbaLCgBrKiTEfdUhMT7rSEtq5gB5xLXZfjJzZ6XQH",
  "key18": "sEbpCHYiBP4srZmAcJw2jG7hP9oa2iDobDX7EmcTSpcznCWbRG8Q774TUUC11A6am3u8EJAiVrCT534ny1q5Y2o",
  "key19": "3Qt8foiLo48FiGwmobbc7g7yfDqEqsnFrgUFtd9ifVhtLftsaFxtWLJzQswgme6geewY3q5Zp4CSbvvQ6tsNzqmz",
  "key20": "vznLPuj3L9uXheyvZ24YR9db1yyuXPCfMTcoUH5ALfhmqBvy49EEG9AerNfNS1evQu5bP3a6UhHA1Qv6dtzJuif",
  "key21": "54dvNYh63UfCQgN1qc1FcBb5PfFmBaaAybBWR8JtGabBaCG4bN5gXLatKZJEAyQdUXmvGXHLctNVmV7ZUAt1Nngd",
  "key22": "411ok9eJgtrKECGxm8jbLpoWLC9qmFksdPGiVyQ1Ujo8jMPPUqHZhQFywWxUvrdqi3HctjBg3zURcXi3gk8kzycX",
  "key23": "5RpKiTFPnjzsRFfaPPYL7RxHpbjwLpwB2ZM8Fo3eRd6ZuxCG1etjcojZwNvG5XNqmySRxQZhPV2fAx3bcYzbC4y3",
  "key24": "7NtgVTWJg5dQT5hWehKXawmDc8c9s9Xo6tu5FQKvF1esKXuFhTr3Z96icJKqVRjbpk66mm1fZdsHjhEzGAAaVB4",
  "key25": "5z1hvThvLBiUadQ281yS3YmZxowbHU2Q31jJK9wn862EttS6C4JRQ5VQw2bEgRbWt1vCdGHiwi4X1XS3iS6udFkn",
  "key26": "51Lp8Kz6pMyVvLXdJphEzu7UhnUpX9jfUgsAM66iVXARVatkHSzHDn5qbp2m5z2hKi7a8g5JnsGxUmejdwHrrY6N",
  "key27": "3poMgRikMVycN4kUNyJzqdK6zbaSLxkDe4q6vZx9HnCtNeKz9K35zBgE9N6XJu72ShvkH2asy4LYcfyFgkKrcjYA",
  "key28": "4kAwNvvfv1cvKzENwREHshA9VWfaFkPFFsh1khNfx97aKqo3PudJ2W84HrKK6ni2ksXx1CZzK1ah4VXG61FtDhvz",
  "key29": "2VtVpCD2xmRcv5moWE4FWuGHPDsLMBHGuu6zLXApCSJshzJRw7V7TBodrJHdfxHPDmz9dMqNzrWQPcSkWrCqQNcd",
  "key30": "3F2zTk4tEVMGFXENUPya4DTaEC7LgMhDWHWCbsgUVK6LGop8JsfGEoP7WSoW26xW55L9BgtKo3yWVJZA2RBqVJo9",
  "key31": "2XKpg6sH6tvL4MqoJwp6RBgSBNmfDuEpRh7FbjtVd9akAsn44ERvzqa9jndYrtHwtZ5N89BtbJVGsDCmN41HKtrY",
  "key32": "Y4DuvxggLd9vafMj2k8jHiW4j9QCcJwDY4GPoEsVNEHUQEdE85WMcNiBVx1cYTHqcVGrynx3vAfG2ricqAG8TQq",
  "key33": "4zQhv8X8VF5GFor3Ys5mbxs4n1Q59jLURwXDT8iYwVRf58BdCvb4d13gzTkc4bvC84VHFJHTx9k4EXRqUd2fEkzj",
  "key34": "jfu6DbRfqfzUtjtRrxCzmfEoCEVoyY52PiBAbEJJmNtkZnqjXeN7J8VSkUYBn4rjrV6U4qEoSn6sHSMkVe5EcLS",
  "key35": "2xUbJfHCNSc92jjHjJpRJxwLQQLsRTRyvfo56rEoqVpGp95PNGgBZLzZtM7Zrx8dDWBuhPDB2zrfJzXiWs5RDrAG",
  "key36": "4ci9Zhs6g3VLZDNZJar3yKxi9UeecRwBEva2m743gNY28fxLFHBvHjsA7jv788FhS9zM4UpEQ3miYD5mjX9ZSoKX",
  "key37": "57yTN3mmR1z1fBoGwmct47oQqDZDfCPv83Ads1wWqP5ycoSnqCheZbsJLAfCF2oXbovwkTDausJjPuB6CCMhWsGz",
  "key38": "4f3xzvdvmZJPX5rQhsDMRLf6yBH5XxLFaTup2iHu47EzcQyrodV3T9HQVVTULP7j2VRVpbM1tNbFZ1AQHMjQumx9",
  "key39": "5dLCZDoKoXWnpzoWmGRjqETVfBbRaA7r7PnnDPuYQBawvBqAqNihSCa4SZyeaKecwzFmU8Bp6joyH249XK3DqZir",
  "key40": "38CYFCm8tspPebtYXtQmYzeFPFJfNLLZjCdqfWYHFTZa4QLn21jW1SvPTAo73ccDfZFzaB9AVVMifJu5L6cuJJRh",
  "key41": "5VL9SDFbAXDCc3k1GTvMxHyon7DiNLnHcPbVqh9y4aJv3kEVSCo1uZ5Vuvw9ZMgSovhSn4mLycKshdNaT5iakAg7",
  "key42": "4PWBDvagqBUPSxhDYA6jhDH6Q1yGM1aSBHBqFooUg39fFoGHhKeskE9dK4eoc1ciZqLn3MxkT9rc39CvAjgRa7EJ",
  "key43": "2ays9gY252kZ7TQnURS9Aw8ReQ3h8hHyjvmeJ3pn1Wr5fNQ2NzU17msZM2emvVtRJSRVXCvA9wcG6FqqS2Gk4uSG",
  "key44": "oiwVJEwZpfpyRf78zRWZc3zB2U4aAtRcubEm4SwjFDC5sPLNQaqCezxvNjL2YQz5bm2xUvJGbpLSViMd3gWpTAa",
  "key45": "5E7Q39UhBkHQc1Ru27dL7ro2gDcgTN1vrCShZb6qNxnUwMS9EPGjXDDnBZypzxtxYuf2a4QRqFBjcM8eUZ2GgmbZ",
  "key46": "5pf4wmREJZt2KP4kYVqkr78KSrHGBKKVPGrfMcNh1v8d3VyTayWsPRqoMYjwt7ovreQdfWfFqiq9wQ2dyzDdReK4",
  "key47": "5KDLRRPwxPDJ1r2PUbn5WmjsuGvPRCcK1wKjgiU97M4gpuyEaAg2SrEr88NWxoXw7AeXKc6rsubSMwJD1RuqfX65"
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
