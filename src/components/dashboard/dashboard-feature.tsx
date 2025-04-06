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
    "B8jDvzHJNsYqJFgPVtCwcuCWmkWyhfhjG6nC4ZdBSekUC9Wq51y1w9XvxixQc3YUbo32Frn3zDXhFHYeQY1ucPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wLEi98x58veMcXZcvbS9ZV8Ykvdyf4qqAKv2JbKaWW4WLKMsczjQDT3KCKHJoa9zp16ohUxyCNNA2CQ6gSvW1N",
  "key1": "CZVbFEqKshT2urdM4rD8JQodeadDQVCkXbUTaCDeWvkbDSESbhC8SshKeiB9Z3dpKAReBn9W1nYejooEyHxfcja",
  "key2": "2YLZLisrgE7CNQLgkfGVnHXimBdjarqV1Hx9nQZKqvrP5xopi4hxVXq41bad5cY7HaVZVFgyNpGZ6CVjPVo1AxiM",
  "key3": "54Xu95b5qJjrfmo7RiVfvw7k1FH3sNUwShNZaYQmxU8DpShiJoxZQGEYRR9NPnrBWQjEp9a63RDYv3b6j9HZnKFt",
  "key4": "4AQ2MMdAHMHFA4KH2buWD66ac7qFFE7ybyYUjc7vqRgwVUjufRFTTwkGy9CDtpcfo9hvTNrWKz1oxB3Rc3DLNiR7",
  "key5": "5kfpHCCAjCKSefVVyjidudFxD1N6zeiL6564CbKw3TqiBtSVQ2Xeh8a8zbGzshK65A725hFoYf68rYs7J3e5qXto",
  "key6": "5yvgL3Cu4E832hQTY7LuUA2yRF8ijpjV4TgMhYtQ1FE2GR89J54Zw7cikhNvExBSpmjKdw2MSa3azhFHtiA121T4",
  "key7": "2E8FCHiwbCz2rvhYodPuu44AtA5AJDNNx86dXFFuVwHg6ZmyWE9kkML1W4gbod8wkWVg2Us92ZQrHa1PhjLpmkye",
  "key8": "2mi7AGUXyCUoozDwUGwR84najQ8ksfH2fMCKXfT5LYy4f9r9YxHuhmkHyuQivg1odGn9B32Jw2CJxVpRmTmcEnP6",
  "key9": "4BGEkF7R9F71oa7wctBaHh1HUVrVz7k8qwzcNzdSqoaDfAHzV9R7fhTTu5FQFC7VRxdvqYqXibzSYN6wAt8xhwfN",
  "key10": "5rTSPyhBECm4E9Ue3PNB2hqPirkNYbWo53JphTMQz3S61hhKVMFwRayBkQXZ7TU8FBE9Vd1yQeh4HTg1gjxUZ4Cd",
  "key11": "3eSZWLwCnkfTv5Nk4LcC1EE4i3TBtkQkEXuThSa1tWKrecruYb14mrvZ15s5DccyDmyvyRhVGdn1KJFR5H1Kb6Aa",
  "key12": "apPZ2xESPVC92hbGTHPNuHW7dKiaLSzqkc1K27QKrb86HQ5JvvoFFEYAWitokrWLNUR3GF4x2mFWYqVb5DysoYf",
  "key13": "4Y49jhAR5Svc2oqKG4uvwic8kbtrG27kHRPTdEEzP1t7nKoGRi1L1QF5117dBJkUP9Hg53DLPaAS7uFgkCVxxBgp",
  "key14": "4UN5anpyfLnmTBbe9gK41zKKb48rKWSHVHtAiiDQJA4SK1e5VPhK3zxw1EmZXKKQ2kQKxxfBb2W1Pcpwko5X8z6p",
  "key15": "3hiAJ78WQGNcrNQSjmi19toSuPKEqYSYH4osshDmAYkdxNeo2ZCrVWXXAdFpZV98LaVLP3vxAhpVTvsDE9iHuJ3p",
  "key16": "2Fp2K1t8uj8SFWaxHABzWJ9tZNb6SBfoQkpY2M6k1vSg8Q4XhrpGdr7HnNbiH8WSKR33pQkSGRPmpy3xdfidHFWp",
  "key17": "4k3KrxV4CtVzqUr3tsH3rdc2e9pDruvTtWtDDkMk6HtaratAaJgVUcUK5WqGxy4BrRcxX77uJT8UWQEBb53wdFUk",
  "key18": "2Cf4p91gpGKa8KsDETtBJFEa2oe2MQynJ1aazqJJfKFr1e6XpvJLbydZvFMQ8T6VgPinYjVptcGo93X5q4PZV4Uh",
  "key19": "51HXKRmxPVWPG5as1jL9HPpSZGY2ycAznE1QFUF8g9CqMVdPueaicx6WEkwaGSarT4tgSZn4enY9QEiBGW3Ut5L5",
  "key20": "Dpc7SthnCDu5posJk7VrJMCXx5LUBKQ32R3y7Sm65wn3bmPkHSK262QNXqdqai7dX6dkHTaXci8mYbtKXtBiRvt",
  "key21": "5DUTyhAkTbYhqgfBT1tscUTWwG5VSUtrRVEExpJnuKsokUsaqQrbLh9PB5MmxmKdPuHedudBvx9n6WSJ1onGhpTd",
  "key22": "34Vnnbtod6kVSW524BVFnPndvSPyePmWsKpkd3HbJxuNiX1S8xPyLYBYj5bPnLQpj2Bo1RPAEWZWPoDGgYp2NYaV",
  "key23": "4xwvZN8eTeyhRmjuntyuRDaG2FygEVMYrbB16ubVMnM3gtBAj7imPuLjXH8HUQaWSQSB5hhKFzeP8AYJr3QjpUsK",
  "key24": "2Hrq7BpoQ5CXtxK1PcMx6hXyY57ssV4SbMwJmZun8dsrgSxmcCZuxUWmwYoyTNyErWNkDwuDf8Q25fQHcGvfQ5WY",
  "key25": "4qoszecSACfKAqcGedq8zAok1EL5fdWwoo3xt6ZQWHR7gAb1T2gWiPYbqa9bXzPHZLUu1w5A1P9Ftfrr3Ykj3Dv3",
  "key26": "3S4jCmRX2NBiY7FaSbu7Mt6MsywgtqRo5aStFnQh7GCWkKQf58A4K1Gi5o9RToAwVmJ7RoKTqQts9doiqGzPRiAR",
  "key27": "2GQvpb5tRreEHjDaPJZRPoJxyZUHpzyq7BVi6h5CRG6x7fVY6XpT5Vtx2vYLBreeMypeyBkjvTB7ttqiCZgv3axm",
  "key28": "5QtoG3tsBPY9Emf5jqnfdpRaPzsMtno6HWRX2K8zbWUNwdhw5bTdbaR4wNSAxqCtCYqxZ6JHkD5HhyRfUGyJyP8K",
  "key29": "5em4AaAW3jiTLFjKED4gBo6xh2wG1eV9TuaQ5aq3gDDizfon7HggHZKp6JCANbaHDy87vS5op6nB4MRNzDdcwYEg",
  "key30": "4DraecvHSUPZvbFoZm4gXU6dg76uRVqNwZNCHHYFnV6bkagqGVacrqmwktTW2tz81qvXgUnGc2xnskiQgiMnjmsP",
  "key31": "4s9VMFfK3MuZwHnYNV8sk5CmytiwcSSgDeWn4Jeva5MWAy7wwd1o3X3dYpCBevTdMi4tTzE6sSpb4ZNa9cUBAQun",
  "key32": "9Cu6FeQRzbi8X5XqUCDjm85gCccRbQ6ZCsbTEW5K1s1uphSBMxzdM3Jg8iiHj4dvgVzTSjF91YbDxYU8CMAJKB1",
  "key33": "3nSFrsPhtf9HsJW446FnFUpreUhsvzN2MF4NtHrbKsYZ3JpbdVkS9yXCKH5zrySSXMCxW6wzpEKSLcCucPaYuts2",
  "key34": "BKijFcWkFm2PobJpUjXx7GX8NHtQwabaEYnj1zU4KbKLUW5qiqYjZqiZA5q4PhHxeWaE7TpdNh687uZndS2YRNF",
  "key35": "2RCdiCetyjXcRjiWiixK9YUrbrzwyMgtUpwzqiLJbJt1u6MnEiFJXm2UTH6vjLX4b99WgPuidXyUiPrNwKgrDZo3",
  "key36": "5mihvNN1KqCRoneo3WMVuixvjv4s5YRfHVHUupvKABCNfeaaYF64Q3E32RiMCofvumVRhjkGDg2Wz4BzuztXsAR6",
  "key37": "csECwaBVoSbTd94A9Qy3Md4DMwHPe2QyYxBoBLh6irt6C7EQ5sGQXinHnuV9GKe9nUyJ9Urw3mwtUgjseSuusZ3",
  "key38": "49FMkbJiciionjUeCFEStyiesRAvKtgMpcAUfHudpMS8QErXAdcJ2p33A1asni3VXgBQQc3csVmKV4Uuvy1zm6Hw",
  "key39": "4TV1w9bRxE1yYiqMdFG7ndGvLhQbnNxneC5AbmZNHMuJqhAadHNg8NZs2yTadEd1U19fmhgBzWdGQ7yAjMQ2WMpZ",
  "key40": "56Zc1soaSuExWU7C8aGyPN2FTrpcjLwwXbdYuTN7Zj6jKeJKcFqKW9uygFVtSuLoy3WHdaACVBu6sWz7fEastyWE"
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
