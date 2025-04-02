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
    "5aXBw7jQwVa8zdKeRo8514mXC8W8KpyLbQBGyKQd4ein6jDDnCDvzPQYcFASBu5NrvUP7nvNZLVzDAxVgQem5hhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jgyRN1Mrq2R84ZrEDBcWuzzshAGwJPV83vQixpoGG9JtLCZ2DRj9Eys9vdE4kUGv4W3pQ8YrLJHAXQJtJVpP4Ft",
  "key1": "67QZAwbmeybwwJeCcDsuWdGXV1vmK4y1S3jN7NQsMtmiYji1J7wugC23kjsVZgxD2wiHG4bmdAEoBbznbDf2oumQ",
  "key2": "56H7ge4JerWmT7q9yTkRLAsPPi4iJ94TFjfcdzfWaaxBhoBYXq9NbLVe1U2tUrU2AoWD26FW9SeveioBUCtKdZ8s",
  "key3": "2bo3cboRsddiFcbTxq28mhQrFS1kWxwQeanbQf4RepifL2MrMUsRBUczB8oPa1sXa7LoqTqaMm1EJt5XEHGp5zBF",
  "key4": "Fuf89pCVqD8vZpuFKYw8XLFE71WEgjERsNG5SYcQBLpfFtzi3vZkbtXtrfXYPwtE8BokvGVvoTCszX3ZviKzm1L",
  "key5": "4vLx7rGwWMvR4bjXPJzVcaFR7UMjwMdvZXyBEChm1WUcLuzqtiLtCVSCxyE78MFN9Fw9rHuYjtFh6uzWLw5KXzrS",
  "key6": "4rFwmEtuR4Di5V7UX5ihSKkeaeZEhqVaMtwMZ19eW3Jx3WKCZii4gHHS9U9XJVDbHSKUVdtz9n256FfjeEh8Dm8e",
  "key7": "5rCtgsgYbYGD2EsbrhagvdnVykDhBr49BpEy65So2EBY9treFb5wfk4WyLLQGHhTtLaUu1zEPxFpheqY9FnFPUSH",
  "key8": "3RiJZoSWpnXAeR2DqHdVWre2Ck7HgtsJcMykpSe1c2rt4eAf8edzbvfjJgtFN2p9cAEwHqDbYRvBKp2H9UEv7wMm",
  "key9": "2uXi8gQf8Ba43eZSVSboURyuLkwZUAZ96djwXCzA9ogkGQmjxJRttARtcWh69zKCFjoaKZ4qNeQZBjy7aZKUzpVJ",
  "key10": "37t8jYsWv46B8VcgtdhT4kdnLzikpzod8tmqGmkEWAyQWAG5qNonkmnEtPSQ2suuYFfpmByY6ES7VRmdep6GNVEQ",
  "key11": "3HywJLqy2p8Etg4MofBLd1Y38rneJ63xrCEvDTqCKGUBGRVUeVx3yYHLEZBud1Bco8oe3wAQMwzwy82R5FV9P8Z",
  "key12": "5jGjf5eY1xZx711Ah1ZyDvEq72okEmCCRruDXeFViD3x7TkEkPa6w4zN8DpAzjK7AWBHFJEY7QenFaaZ5MiYBghe",
  "key13": "4BKm4hPxie7JUJ7Fcykrcc8zV9eiHdhiDPA7sR9Hj6xRKoe8oyqJRaxmXxMyLNRMFsgXdJWnySpNkBGBNtu4uHTw",
  "key14": "5jfxgu4nRgZGgdhZhdxDoFEH2SXbn73Z8mckZzayictM322ZQ13Tu19Qiuh3DM95H9R5gkBXCadFVB1dewNSTSVU",
  "key15": "5c2gMywHJbpn28fXWaGzCeAjNemMFHeNELzEoshpp6neVUf9BP4gmkPk8PPS4ATqjtfxqCAe1eBctnhHPHJKEwgk",
  "key16": "4xh4mxHvR6fozueqk79XnwRkNxHbuDyYtaZWSd3KP2b8wMDdRUCMjLEzmXTW18cpzj6EHo67Fac81knwwTrM15uB",
  "key17": "315X1r6M9oPK1zZUc7Fn31yxdVp74MRGhjQJzG9YeGQX4hfM9MC8z4X35WoASMMrpbvMJ3RRtz2CDP7wY5ha4RmU",
  "key18": "qs74nTZFwuHGZEC4SsasTytu2gi5zz9vDaNeUkTUzcFxqAQHH9EPZNU1E23No69d3AKxf6izd8MAkMTK3kVeb2g",
  "key19": "3rCGcd5s48yiF6CvRYigukTHyNr5gGQwYE5fBv25vnVr9TPBHzEvVGxnHsxrDL3A4MaA2S8hCZMbzfndYzhEaZVL",
  "key20": "3pXS6cWF7CPv8pm2FS7xKa1bV3yVZi8kMAtLtvUNaKxn719MLzzzE7GvctKUQmV8Kq6c9Zb9NKA6512Kqgx6Y78e",
  "key21": "2Tj9RLQZCjY1AwX2LtTHK6cAfyKcSV5doJmaDrnYGrTNRbrMucaLk3DzndZ8UvGi4Q5SV7qpqRPMAUpxgBkUUawn",
  "key22": "3pvtMq1b91uFoYeSm4cGLEQYvmhuTQr9ejCrtqHUZN6ftqw5JnnRtU3tZuVmvf1AZFyYX3EyxifK9oWRYi8r6h5d",
  "key23": "5PZNuSTXHNVvEBLVj9MkUTqqQYH7mBABit8GX4Jxsckxzak4BwwHFnjKEAhQgtHXDt7G3AdD3Dr4cDF3uUtYgjw8",
  "key24": "2tyq3gJUxdPbf27ow5LYihM4JCTnn78kCsFqA7xpQwmPY5FrKbFrJRdeJDyeUWbBxkyKKMY6XpCfDjnMGHveftmd",
  "key25": "3fDpGimpzYLxrNJYESyiTLdcgW3zs9gKtCcFBUKsXP8hqwGaQuL3PdyYu23DV6QwX8iQ4ihd6aHwUn8qNE8oHg4Z",
  "key26": "35wBavLDxhkSv7KZpXhza7S3MACtaYQ1uGUzKfG1CCu7duZYXoJqLd9tGXHMseUzVVx5W2JmV2rdBf3Ty5JAffq9",
  "key27": "4yYDu5MapoErPsdPJ1ZwTJ8W4gJq5jrsXKJjDAvqM5rSrqJjj8CxRyR4jMzKHaM9wVYr38zY6VmKbREV8ThkSRpm",
  "key28": "8bsszWNE9JGdosmzwXr8ZJuqhcgAAqdrerJbmDuaatZZ5BbJ5FiRi4Xc6mPM9HGeMQga61xA8rmF89k8jCegCUW",
  "key29": "4cBTLKjJimXAtAHtWpecZBwZ6MZ5Y6Vp4VEandKdyJmN8ZvJUhPMj72g6gUxcWApZihrYmvpWg9YCXMnXVfe34NR",
  "key30": "3FPh81LEdTXpuGfMxFVFp57kWsqmSYZXD25euhyTiTaAVot6waoYNpHmtVMZwDEu4vosya12gQYHQdwyrbz2916a",
  "key31": "TQ6mgZv7jT33WhMCXdyfsf4NFpUNUo4SeEWcZ22cpuaPsHXiTQ7SyFhwRW4pmaUWAsuFde9vhk7e8ez78aJaFsy"
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
