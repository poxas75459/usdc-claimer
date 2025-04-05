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
    "566LEwunTDwmnU6vCmbPvcjUPCQ2zDVj2czFFkDN9sCd1AsTqoBxesXTCBKwULyCtwSiv6588QiCvCFs18CUdt3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGBwgeiZ5GercRn8tq7a7TXq62BDKFGx1uQUo2wFgqSvxiUoz8E1XeWNiMtXPsqJQiNaMJTuRyrmSiXXTqdoXWQ",
  "key1": "5vfSX5Tosvin67Z4YQySjbCuVCBUiCmzJptESBe1Fbi3MYDE7cshPw4wf9dCqi4DwLJbW4T5LziGa9SYsMriy4Dt",
  "key2": "Tb6h7yoyPTNgpyNku8KKpnuGq7W9xAy93vWhe1Tfw3ejypiM2PgHYyJszav67PvSFctuUc8LiQ57b2Rjm32ss2S",
  "key3": "5jwzJozffLTpG9fT1xq3MDpvYCDZcEUfMpLVStSRDNCvxW4tLeZ2PojdtEmE4RCq7PoeqkS4cpbWzp7ukDuVL2L4",
  "key4": "591X3asSAXrmbTcfst4Zu8XpR4srxZuLWLJKVmjFHQzFs91NHB7o3ePiZnunJs8v6qSrWENMPHLbWNFraQ2MZ5oU",
  "key5": "xrJ8Zme97PMntu5fp3UGZjMr3dz8LQDNcY5Ci41qfMTaqJXC7vEeSmnAjLhkWo3uwkH1uaKkcETPoSC5V2wfzeS",
  "key6": "4hj91A6YMuj9DTTr4pFrECTQLAUKT23w3rJ7tQvozRyt7bXrFpSWATBghX7zZDeAprL8YCeEXkLiqkHXPXDHVR2t",
  "key7": "2qDQuMMQ6EV9S5QxfvUUNsqYMsqW5mraK8igTGCGN5yb1pd8EVrVHJ3t8B2KMc5ibKM8WGmjpw9TwrS9wSsS7ob4",
  "key8": "21Fvkp8uarKRqMZmB9ijhhwXY42PK9afzFZNBTX5oQa4D4e46qS1LfPFqAPWnWvxLRFT1YKLmvUhawz4yEToRMoS",
  "key9": "2iAuiUVppEapYkViSfCvorkLft5s82LRxjas2h8BhZZB9Z3s254rPvdMxG5seEMBRDCZuTs9BmMyqUcgfWCQqsCY",
  "key10": "fAUuWXFVNXUnWnJqTrRy5rbpuVsi3JBMHDvTzZGPgmuSmRfpxemmN1zp1XbLMttA2oRikCjPpf2WD8uMSxu4Sjy",
  "key11": "584me1xxb1Ba4caeRFdT8grtxYmTkiq3RPjanfWeqz7NYCvRJUappLhraJkeJq3VKXjVRdbpFAVUzJBjxFPoy5P",
  "key12": "3nNkMyM6zaGomy9UNbmNg2d3k6dWpdaDiHq68fiztCjaDMDSVS7ZMgfmshnMk81fzaF12JK4CvSkJzaXBqHodMmz",
  "key13": "5nnV33ki8QBH8utWXyyN86xqgJqFNB7chBApnzdZnZ6fAfsdURnycGFsjnwGBbVYeUkLieSQdYH31SVW3EpBLtK1",
  "key14": "FgP1koiXAZy7ftYyTMgvHHxysH1zy4UacFNCCTnvhM1ivSptqoFBFxEpTfrYbcWGuvCmyZSgAZw1VMAwuAj1T1Y",
  "key15": "3pbytnuCbBs2pWG5XeShuTPpn21VbPpQxZfkaPUgiprknWaUgio6hvtVWngjg9V9KRa3ztuv1uRLxwdCvNxZUEUJ",
  "key16": "5pffqKPcWNKN1LnGqUKYFmbmr7fom9hPPD79oBSuXKgi7b2WrTCHbpV1uKiPiLQY4hvdbKrN8nRoaTkRyjhWQDHu",
  "key17": "5VLMKVtDcH7x17Ys7LYXS96C2YhxSfV2JRWVdh8DJGiw7mv9uHWAqck6vPfoTXK3fF6DcYKMNakQLyqtKxCfgcrC",
  "key18": "5PeowKowcqGN6mXrFz5d1W3rB8nPqUqEaN9HoiJS2JBjuCat4QqKGUfvPRNkrroaJNhkKdb4ueUN1dMVJa33Cc78",
  "key19": "4XE92Bau4BBc3awo3zGmtczhNAnE1gLymwbRJvaATM9yovXSNREVh6HKK28EvpehxycdESYUtBhoCAYm74VRAjkZ",
  "key20": "4d764pZ5DxFzRWPKfCJH5p7TzTAkKMyJ1izvkva5ojnJ5QUB6gjKGAFkXoCRGeJi2asGCTXuxS79rKXnza6nqwdj",
  "key21": "3RBsWRftvDmtRJkEwAyyZkwMhGyQrRsszofwvkoMw5LeXuuvJR1zZbH3T493o3mdSgst7ieGfpMV7mHfYzkhqu8r",
  "key22": "EUyQNPUbHdzokrkVNhnLaN6crGmZYZmMkFmEd9nZ5KKyeVToGt8zEk1QHcfdUfh4NY1KHvhnTeCwus7aerAL7FX",
  "key23": "4wWnL4P8jzxKL7UoKexR7U9Ly8m25w2uqUW3vPMMsLwBMuWwcUP6Fd93bEnGk2iNSxpLX8Nr8iwebNJsCLc2D3oN",
  "key24": "5VmMtvJJCrkcmx8YwkQzDYpnpT9ZXtUmg65gouF34qbR7NoZbJCXrWso4y5D5SAAUBvraYcXv9fexUQ5a4j987Zn",
  "key25": "38iVopM9WpvuU4VN2FCuS3fLjEPwKsBfitJHKyTinpM9PMJxiPAo3BicsHjrNd67psCXLTazNTiXCYm3tfhdcE5x",
  "key26": "5YEt7vP5K2EC3PrPcHuuMAyD8EBc8Di657oJQR9GnuYkWDQwnRFGqrpi8Q57TLGCJQrnZ6j7Pd6Gbp6EJyQcG8mx",
  "key27": "3eigHndwRr2zyjRqrhhvoDYVzUxXuaqddVwNfhjwqFvfzdKtLKHzYnDrRifLjudyc7yB1UDUpsdaJaPi4k6bu2Cf",
  "key28": "3Rv7xMiWe72GRVALe7fT8aNWsgCngGu6i3Gj76HULoZWhJTkgMCgjVwaRZ54nrndZ2M9JQLTBxKDmZff1kwvPHLJ",
  "key29": "3MML2N1huuXLs6R3s4eAHXobdJDvDvRprUM1LjnDV68Vjy9uXnqoh6sQxGDCHC3PM9e2UKhwoZJjVjgTyXy19Wuf",
  "key30": "5bT74jXF1sgnKJ2qWDcJRVGV1HCmLqPnhNMyYWN51WnXNnz8qv4j8sCv8chz6LXPVRaQ9KJVEwQSrmBMycTAbsah",
  "key31": "3R55Rtik4vG9FbpKLiXgwSHvuSH8UR4gi3pPDCtVhn6rAxRs54Wud5yhgBTyUfTcRPcMGtTxqeZ4AziD3G17MXja",
  "key32": "2MVWLjaQnPjFipScTcS31k4YU4mv6j792FmfzESp1ygKWBE8rdQE79xPChZUbzMAUh4nvqyfcL3N5kh161tsms4q",
  "key33": "4SYxsJAMJbRgyBRStJhMDwQ61yUo23bsv4ihr1urYoibFRgrpBKvCu5KYJ9KEt4SAky6vEqkJgXQTXt8hz4HrXRf",
  "key34": "2aUGQ25vv28gNGS1yUR6DMCJTC2nF1dS7jRnzTNnahjCH8SMbMTWSE6gr79mRWBqGUd8KLhPxor91rHyjuJr7KXv",
  "key35": "3m43giCqGf9j3FTzk6UaUdpzQvNkSrMTcRWuJvVrFb2LV3Z6quKsKsL3e4tFhxNQoc8S4qZxPr39zN5qwmvaFE2o",
  "key36": "4vfVM4SXwuPNNHr4aJ14k3xczSnC4H7A6vAPvstnnsc45DnKoEpvBxdQJHTe3MDwYzL8dcrRNpEJCA8f6Dxr9cYf",
  "key37": "5jBcC8SqWnxxbTm6JEZNj1GEa4dGGizWMDsuE8kzmC2au6TqYMRog3AQ98WfEBTd7sDotfCqcQpv9sDdfx86eTJE",
  "key38": "4YbExWs4RMRuGLEK6uC6EjbHjDypzjLKbG5WTTtNHeb5iEcdrdiib5kCZaKpHJPDGCQRKQPCDKt2rNvYj4xUfdy2",
  "key39": "2VTA9cXhrbDg8VEB3Ruw2sCXPxDvYfMadCxkKppQs2FH82tVnUBb4p3A5v1LSZjHvFktGxSEgWVhedyTt5T1F9MX",
  "key40": "2tDTDaHow3xBxdG7iWCiwMrD8QBVQHrqT6B7ZgBi7k7G5VLXTW8Ly7chtJ8Y6sacMb8zrDrZuuYSkBRfniLgYNB9",
  "key41": "bjyu1FjAv8gGkpctZVQXmkHKR1crxcpPAykA54sCJ2pNWfKkytLgVuNLgfotQNCzWgdN6s3Ud8fPvNiAAffKuL1",
  "key42": "uuDLrythj12amKQb125G8GdbPZtPAZZwPvG6Fw2yWwSyxUWNiwDV2wMycymAde55wfQ3pqZYHwed7RoYpUeh84N"
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
