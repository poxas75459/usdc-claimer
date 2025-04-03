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
    "2Jh5XivcHqVr5LMcrcUgTc97sa6aq1aX1qZayukXRM6hr11PrAprVHzoxovb2jbTFja6DRWojxUeHENXH6t88SRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbjonXFaA5cXe4TWBtSKyzSky5AtXyjwTWiXJC9K3RU1KpfsQSXxgJFMBhZzyznDJrpXPa9vKTViUPw1YBuhoxM",
  "key1": "2QNGE8bNJjHvH2evEiTPWtAxKYyYgtfE3yRp5xnp9PQtZS9cxxhY2qztsSdvV6CnnYZKrnm2fEStEbMSQpyurF1E",
  "key2": "3PT4fUbegytcW9eg1UJHNW8sPxvZVmEWb5ib6zMMbwwyubKafCzky2fvxEfDz45EyZ6hdSg8fdZ3XgJPUEtpWozi",
  "key3": "4QtoKESAtPL1Uz15qegK3svU9geJUq15xBbNwBTKZYUHhdd8679PKXwXX8Q8UxcdzcF7A2yV3xXjR7PpzRUTSNLC",
  "key4": "5TriwMpwFJkBvoc6rz8UaCZHidEuC3hvSbVTLGdZCWqzJqfaRsBfRXg1Kh6kNErbHrZ8uRnSsZPMUDAWUSGVF1RR",
  "key5": "4McvxpYzXJKfy7FUhLYyrTFkoVcQw1b6DqsexmigCGpstoQ4UWRZm768vtBdcZz2aCou2bioJPbirEnsMiNUHFYK",
  "key6": "3Qqn59nXJrqCyXTazGQkUs3As9NtmiDki9F6dsdfTrfzaofVHZP77omtKbQsd9bYEimPyTtgXu7vFNvFBpcffU86",
  "key7": "54iSgGqdfvCYccE82BdJxmCeveYC34Mz3KeciGp67DH2j7Ft6UFojLpCkHoXDU1ppYdWqP61S5ghbPu6h3Cc81Yk",
  "key8": "491hiatkBWRHbh8zcHTwJBjZVtNXnJL1eZ1jW2L4gbuVAdEWRXxPS4ta32f6aguRLbM4FTT8vQD5WM3trfiocqjN",
  "key9": "4ivbHSMgd3APG3Hdp8tMsnZnpQT5XcbfVCCLTooMYL9o4vqsCn2YtxZPyELp9ReJQ1552pgM8sUNiFRAq13GndCB",
  "key10": "X17PhEhSKWVxmzGutWqSwmWtVf1P6hmMwdUQai8MTZxUobAjy5B8J5AS9urppmugipXCiXSi6jutr8iXRYQENRm",
  "key11": "SwnYfPTABwrEnnMK7gu9y57YYPaSGY8vjrvG8RuqwDhR1aVhMe2h8Tqh6PD71YxtQTuyNhtG2URhYwqp2rCfWsB",
  "key12": "2Ui4ysGiMR6C4qWvbDs8cZuYtUp8qGEpzfbEY2beY5WHQ53pqaWgWZHW5DSGSXsqXx68jNWvrY5sHtLwhTvCZ1xY",
  "key13": "4GcvZjbpMPWfm96V7XGNZ5eyYMry1CQXbzAmYbHxAKBcJgxp9MfiyNNWMdFjbzrmEKFpH4iKM5xkbPBJngcoL79M",
  "key14": "YSVHVXnJ6sDBSJYbZw2RPccy3iVSnH89jtj62zFZ6e7udqt7ySycB941Y1mH96YfvkdQ5P88mwHdhgdyxEXqHqe",
  "key15": "2Y2Pf5XuJtuBN1XYUakES9x9pHeseCgMTZrska767LpmSNa4hbPEk5yV5smMtcz1X8UcnLB7RqrWxYxzNn3j21xt",
  "key16": "2ckCubjW9K8WwCHCf6kVW7XPGvzDgd4ojkp4k6WRujbTKQ4TtLw9EdjoouEcL52DT8cMLUoYMMDD4jUaUPNb2pgZ",
  "key17": "5p8y3r89ui2YTPX6BvNZ37sWAS59ZpwLhCgsLCnwiFx49kbXPcLQH6zWw2DkrjcUQczdV3fuxmzzDjdWqoZUJCiL",
  "key18": "5MVNBKikt3dKhu3SDnv3PCriYxSCbc4qqvRL5LgtWKSH8uibaiqYzBzQosJ5nmqP4oybHsFZSWkkJSTKaML9TZRH",
  "key19": "pXda7GCXnUcm6ShwoozUysW4oLXhDbYWnutFYVf2FUuFkVcg4wD5mbHLpRvgxozsmgQVvs5bdfB3FGanuhBebzh",
  "key20": "4m2Y6t2CPoBNq2tn5ien11PQkRSDEjb8TBAtcguA2FND1atd8hjwgMpjoS18D1gwT36icM8V2usabx8PuVErmZrb",
  "key21": "65EYaWh9bpynKELDxZaBJuPuSsHTg28jN2NUYxc8TAJWiJ7q6MgNCj6mWMmgT3Eiy9cB4gzf1nq6P6ogVP7Q6YUb",
  "key22": "2yPM9ChaPfo9T1doe3wu9XeDRWVuHNQbahk1YfHH5xWwtsaFR1SQZSLL455qyTo6ovae3b3wszSW9LnXDVGXN9y4",
  "key23": "5F1eQjaUhN9i1xDfXHvANkzwSyAdLbHRz7H9ZnLuVfnBgn651Z26ggNv4AryiYDqZmRzd1hy6YwC6dypwGS6r5Vz",
  "key24": "24TZNEiGTAgQSTh2FJsobKz7iM6iH7JKjcj4tpGRf6MhT2XZbC6K1gwC4s671AkBAWiBmevJcB5bHWs3ZKfbB7NN",
  "key25": "2mw573Ep6u6mV8LYAupZvNJLkKE5HawF1XEKtDnaAFQtMcqGxAiLzq5f291YaYuX5x3uejpn8kxFfruBWN8zxZv6",
  "key26": "4GwA9raCQNZjKvMUK4HrKwWhFj1pZzuGkoAHXKXBo7LmeckAfVa9797VMGcjpcQ3fVb1XCYHevZaYdkByi8cJDi2",
  "key27": "2aRkQtigou2fkkyZneYjho9xGvGp19r5kSSZjyJt7K8R1a4UFBMWFApUMuuQDyegfnbmt2DN24wTv5WsWgpfw1rr",
  "key28": "4hSSG8d9wxyQmvDoSZi73PZczcBHiPz8KbGsUZN2E5Vr35KAmjQ3ReQd6uQYUxie7kSTAQUDeS9u1kiWawizwvVM",
  "key29": "2FamAWn3Ws7KGTF5edYLvonmpTQg3VUkwKmLSundjgeJkkhJpk3MkvzfMfwes3sKzNKF23bKVCMKy2XBRgShsS8b",
  "key30": "Zcu6G6KaR7r4Q91D3AnqdmCuSNm3sarKpuQnbDSCodehuSS1czoB2h3HE41kMkcnMrJ9AvZ5yQko7r3tPLHoEhy",
  "key31": "f4tDe91CVaYvohEMqKrZe6PETjdcAWqAPTGQ8Ez4xvNHir6oLoPRmp6zADQ2f6F9QsowjyURmjfUTrZ6PGTCZSz",
  "key32": "2DTi6K7bAFUXBFYy1LSyGhcpPtRHFXbW8Kmn3ie1LY6injZUJUX8dKJErf4j2sGBYVon2xyG63yqTpuS8nhaJh9X",
  "key33": "5uEXP3Z5vGkzcc3pz4Uoxj4SoxSSFvfRozYouVbQ8ZqDX5681dVws4SQHUxQBL6cpJtC9CxnuZbEVUj6NX7sZHVw",
  "key34": "3GjyA5Ko22HFoDFGFgg5PFCib2SVpeyjGvwmAVsKPbtePotDHyt5aHZg1wTJEBhU1pngG8YEdG8Pvt69CzpBqovd",
  "key35": "7Njt6gnbnfwWFoGfw9fxikjA4FB9PLkc14qbiuP8ahaQYA14WoWENzhxYzG5scLviSZUSn7sqZPKtkPD7T94Nj3",
  "key36": "uPFkdBT9Aa8g9a75KR4DVRaM1oPHEHLvao4AGiMiF5nuZB2m823gdjrymcr6766arQbx3WD3HFGBezd17nyMYZ2",
  "key37": "2G65GGzwmF59a4TH9vHLp46TEoJFJzFRhVa5eEPxdZ9RXups9qfKXFz8bpt31eYfm1MVHhqYtLSMsupNHymcDAQA",
  "key38": "3GgMoEgJA2K2M6tVsrkDDCyULThRbkNLWuFb1cizdpedPNGSBgRncvixpootna22nNFtpGZnJULskHykezLdapQP",
  "key39": "4ETLcW2Cc1ci4VSjHeEvRCSJ4357q3XBp6nCJV3tuSLqZ2qsNZWXnED2e3A1bPXuSq7BifG9sGTUYryc12aXkvJ3",
  "key40": "2RXvmER2bSY7C9UpTtECk3Z6MqE2qviMcnbXZf6gRwaWWjZxhJTguShBM62kn3pzBZq6ZJtQrBJAqBG4xvg8vzkq",
  "key41": "5kwthLtfqsCGPvBREAjrLgto2RLAeb1MCFTNufRNybwmG8whtLBhN1GBeCyLMQZQgmZsN4q8ZtiMkSmQaRKVtvTv",
  "key42": "2RH6mVjJGDNbDJozz1Z2Tmjff6n5t363hV9eDGfdUZHvugt2tD17WyhQvYnuZGjW7RqkZAtwscMiKZaBBAj3tWei",
  "key43": "5GY7Ao654Cy7Xuw1zb8P7MUCLEFuaMZk4BGkgqgAGK5fba57CxpmEiaAxE7R5m1LTMzs4M5WUiR5aVG7aNFy2MeM",
  "key44": "5wUTohuyCU5uGpNKSP2p2vQP5m7GPybSMq3Ug2Wz9vgeTUfL8peLx7DYCWpRH6ZRQ1AP1yMARXHtjjWf8U1JmHQs",
  "key45": "4gYqQsFHGUKV37h7EkK35i66HjKE2sSCzAAz7vnEwLEFUqVXGeYgPfyrs34VmXsSXoeU6tmbXDtsUku6bEsqGVf1",
  "key46": "5Mg5oeBPtuWs1fSNBo3yRwxQiRcMEJ2j8Xi5Aq1r4rZHKEvssfDDnFCkdX6Cn5moB1e5ecj8CGiWG541SG8iPZCM"
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
