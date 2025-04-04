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
    "5Cn3KcYJGGfMZjLxE9VZBoAkeuwtjWdiUUqwBZKT98USWenhMjEosRagrWvw96ujGV8MQCEbwEhPrNd2nHSKoYKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XRmKvcVsySnM9MHkkL6qAf2K42qadXh351biwZjhySFBH6RaRHfiSWJJsyZz4f6ZB9NpGzqpiymCnSFPe2pmNVh",
  "key1": "5NzxYQ1uVi9y6XHv1FiBoDhqzfxbLxA41Pct65qDtUoUp1BeZpL9XHFpHSi3jCbonbnLZg32rXBeDXZW67Zk8C9T",
  "key2": "2vz7nfR5J9S1zrXtjSCS6YwrVeUTusvuYzGUuri1BsEpNs9rheA8sDuUSzZntycvHpdxfpPprwLkhia8npKadHLL",
  "key3": "4c6aj2twjZbyce7Wrxu2UkmGpTt16QFmJ7e8Pkf97g857R1tduyEPxXgxWq5LYZQV7uGwqoo2Tj8QaHYB2pKD7LA",
  "key4": "4M8aqghKXEH75i2SXvbqPcA6aZZNCVe9a9UKyg4S9t1XnLtT33ta9SA6tF2LBLQn97Vpt48mrPQfnwmVBzn3mYf7",
  "key5": "3wCEZfW7naSrZmdDnnjWRHWuJxjBNYqKhfz8VK3RbGXnf2EdF4GHv1w5WHxjteqPJ2F3Ve9zE5Hu4e8Ee6wEbtig",
  "key6": "27rYpNtJh16VMQxPUehxRgR4vi4a8CZwnFeQbx49q1TqQNeEBdH8DB32iKi61Msa3fbP2uwuXba3rYStdY5aQ84z",
  "key7": "gQMtb7eyiTfHPPJB2sVJUaeea3oz3WZKcCDSY4GDZmzTjL4V4RGeYHZkZCLoN1dsUpz1i2smpV1LyTNopXCSg52",
  "key8": "5szKF6TJkZZbHyTxRygi6bcmUUKsgd3grLegaQeVhhc71ePxdZTMX6FKQ3sfQ1uX5xK3CBjVEUFVNH9uRP4Hzinn",
  "key9": "BM48JPMH4h6DN3AE8q2rg2RTzChmT6avFhqQ3uGFj7NvWS88RPrbWFzeTXQTMa1nqtY8XDnJ76PQ2ruJUVvzd76",
  "key10": "653XtUwpwTSvz1q5hfDmnSQaRCyxJL9wZWWgsVXxMVcWZvNr9hkjhGLejfbwcz51nbaSrfC8Le9zrpL9p7hynPtH",
  "key11": "NQ6djhMicMWP6X9GYmH2C7VVA8UP3msFWCF8bEoGF86yJq2o3iLFknq4L1gq15HntBTVifrwACy1oFhwGsBmgPx",
  "key12": "3744crhjjjiEhbNHEnditP4CbEbBuo4cvDmyR414LeXiFg6dpVwh8YyVAek6FGZAUnzvzjkg9fkkkAFKAyvP1ywN",
  "key13": "5WzTNmtyfyw8pFb393CSfernM8M3m5jCMQgkvbaDtMNpzF3i9JWKkPP1Bd5MDg7RrkaXJvo9M3dS2dwJwVMJvYKm",
  "key14": "5duQ1FgVK3uQ61VbnADTT8rjoijUUdhgtT56SisQNL45a5UupjFSUjfj7UmsddGL5yyA52v2K6FMuFohEQrTDJWm",
  "key15": "2bvFq3EndY8sBkZzyjqD4Y8VqoWqV2A9ALCiGoQafronr3oHqXbMB1Z7Hzzpd18xhmz8bgf2Q7FNVYc99BAxeeUw",
  "key16": "37M3TMBZ57erg9Qf9RytkK8UYPDq6Tpw99UTjoVtin3aWp87sL79wwqLhxZJM9SRNK4CGMbXjBPszSQNHikW9Svi",
  "key17": "12973pZHqwMJuguPNZF8DwP2CitEYa6RijJPEpjBHZ3byxUJr4TKgkZTnHcfhjesyrhLpf2Gnn9fKZUyu6W9EWTZ",
  "key18": "5WdUNMVLD6nAxxEiwMAnLDpgFvbPS2asw83pfmYsyXC4KJNh3kmjRDA6fj6Mo5P32HNXW6zXuqE2boUSfS916mvh",
  "key19": "5fSYophLrNLbFboFPzr3PLYTzB9dT3G22ZWJcJ9bMEd3Ln27eBnJYEzhHLvxyHb1ewYtAAyC5wsgX3BwAzs8rmiD",
  "key20": "5HcEd8x4eGV6HQae3dus6gmatJYPfshRPeeMntutKxFBqJrUgXjNeP2xmUuNTbyy39BqdtV9FZKy7WhPisvppPsM",
  "key21": "WcBduBBYFaLQi9m6R3mDjAp9srup8EiCmrp3pDBR3fY9ksC4DfVp9pnFPfBzKeqhxc6bukFDaEHovCK7bApxLUJ",
  "key22": "4MrumzX4KD1vUNcvh556KTTgxSKFRwSyG548PCbMpHw5beocuHN8vFh8cY4wQqyf6nTpnXUdvwmDyD8hmKMSbRRi",
  "key23": "2DBaQ2x5VXBwcv66xdYtKwBKKDh4bW6DniDrFKrXHWNFemjbmJRx9jfM8WFMUs5n2mUSQbqtbeboh1uUwWnNLj3Z",
  "key24": "4i7HHVq2JPKLC5b4SKfprg824R4EeEHfDbC2NXvEvhXsQD8U6hm8QPvun7aq5cqLmKg7ywt4eorkB3aBQRaju9AH",
  "key25": "aML7hJinBFN6yJiEifQ5as2Pvajo8MdaDTsAb4G9TjmCMUCwsB7j8joXwEg3Ayy8N4fkassEe6ruAegtywg1839",
  "key26": "21rgtfUpUssoWy71DgtmLw1dag8T3sbBaTgy1tnqTNoRfCzz6vposKnVNDWkhNYT2o88t4dUEYVHiJBYiEwHUeCS",
  "key27": "3d3WWm5H86TctMfZ6pgg4u7fKuB4cxgZCn1DLNLV14sPCKggKe7CenmtjZm7N8BnRmuCX5oPtH6hFo7VLqnpEn7A",
  "key28": "4DUjCHYz4Nas9GcNkLLYeo2heJLzyFwgyGNJTKnEonvu8NPYCN1LeUf2myZNt2WzmW4UKye62NxgBBR4tMePn46q",
  "key29": "5g5vqC4sVZerCgGWEri4Eztz4nCsEP2iSxc48eMv7MspdewXho1v35JFsPRps9RSuTniGcjsrgXjTT3SVQ6FjngK",
  "key30": "4bUtAAAh9XLoBrJHwMq7KVBBXDwCCWBdnJcVE8HbpCruYP4gU3QAjUsy2kedBd9DFYH4HphAfcsHwupz9wfqf4L5",
  "key31": "SbDJBEoXqtAneAKDT7M3mVj6qYuU3Ar8c87G1PfUi55Ws9k9GGtTcyeBpLBv7gUq6wCvoeAhyN54zCh2gfzVLMs",
  "key32": "53x9gRrE1gWyD1K2d2XjfsowgxTnf2iB1EAt7hYMsEq8QHxmdrDo9Hrvic7Nf8HHhx6CuRcXLD6cvLwK7wxRRDPZ",
  "key33": "3ikw4RKDYCnyUSD6Thw7fFpQzt896JWeUNHtJvburBapuG5GAoxj8Nn8sgTiyKU6mkEJapKhLpwtVtYny3NTakd5",
  "key34": "5G1bpGqXpKyuPk5zuSDfMpBhMgMnLXeX5JzjvLV3Rm9QjVh2cVNzowukEsjY3JSi4wNkVZte7P6TyGdhJia36bUE",
  "key35": "MPMayA2C6z93TP6TyAPh6NNMNBy5u37Z3H3DN3zNyLE8Ts5ypTga8bTMaYg51nSVAPXN4ekk8YM6cXsFgXUBLxy",
  "key36": "4YS8mmZfU7rqauA3FztckZT1b6upFWsg8WtwWxA2ihQhYsVHDHYqd8jbF9A8uQXYgf9bANa32VkZZutWMNrghQFS",
  "key37": "3d92VmwBYE5zMiPXd99p4ZjNjmwBSLZGGJkGvucGF4GhnZAgqHoD5DqemZraGKbPs4UouCsQ8JtuBG9giAEfkcFQ",
  "key38": "24ZDxo7jTbYngY1WaAxB9AdNrsEPPwYC9Sy7SCfbNDZ5vW1UhuKWJwj1jyrfJPSCsNj2Hmwv7jLAD4UEpqPFPJyG",
  "key39": "yqpfsh5TmwgQPuR7bU89VcrFRpFN8pZpE4s4knDGRhaURacpcV4v2uTV78vT24SrJ3BRJgzoQEqsF1W9MNq5rzb",
  "key40": "3ctA448MvKBngMcK61saCxisj5L7itEsxXvwLbk8w94YLCeVzJBDgfWKbBi7W5wciNmSPHg7m1JokHtsMCXYrFA",
  "key41": "2N8NibZXZhg2ije7cCYN4EGagzXdREoS8matHAgjGTVm7b1cVHLbWTynQJcTNNwSRY5ZdkBY7FkYCMExGpRpEvxs"
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
