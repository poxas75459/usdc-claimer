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
    "5emEX1GY3fyWviN177JSPjhjLrrPF3XAtyVwWnZZtmqDLbiay5QQvovBDkVNmjoHnagGU7F8XmtvQzebMqx71i9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RxLMH3WUqwGM85ehintnpW3P9ySZ9iTRghqp9DAMc1vmUPhWw6qY5FVzrAJvpuEFzRkNBegVkSPJPDDc2tK9Dj",
  "key1": "476wnCypGwMNptPimKgev9WaCp81NFuLUYqHiTyEK6gLyokt3XPpXfZ4uLfYeJKTbjPeU4ugsajCbPs24MuSEtcT",
  "key2": "3fy2xLx3L66hUYxU2H1F72iNKg2tgDFaoFs2KLqgP4Q2K6LDu3hhthJc4TtenE6JNcJkTdmM6KGBFDR9wBfEMTtm",
  "key3": "3G699vW897wKHrrKaSH7fvRvw7kJHXZRL1oJKVy8FkYbc3uWW4cppMaMWPwUgbqDmhrnug2RV5Dec4wy3pa5zJ49",
  "key4": "3GWjdEX5WDNJcZE8hSPTR2tyinKHZAK7k7pGb9PPPaPxb55dBcPFL6WH5anZHPbSpVmJYsZiYR85EdgMytQjCCmq",
  "key5": "5PE8sVz7FtZXQ65sPYS4HyKeXeFfJQzkFpeVnfSxZ8anTJsNemGyFKohTsVP2KEXPHwxdFponzWWZGFU1dVKYgok",
  "key6": "2ANsY5g9m7jNCpqGbhsGefU6sUcj23ZKG1xMeDG8PfxyCBAterz9XtXf6XcE7rzRjze6d5gv7wavA7aLgRusgZfD",
  "key7": "5Cw8tMK81XziHZgzcNr4wmmHGnXJ7DkK6ghAXLjMxBraCYyq9PhAa7f4PpDzbJ7dQDj9czj7WHL3zovo8h3EjMa9",
  "key8": "5Z1P6NaNcs8VcfyiDwU7CUSAmrdZJB4WVcdJrBGhDUgcrCmHqTbpZt9AT81kQ1nERkzmVgfDgWPkZDsiV35pFeJF",
  "key9": "E4T8Xvrp6pQuw88KpWpyYYh2TJ76vb9rmit9waFwZMRjvjBkWUGsCJcdUdFhmazoAYecK9pmhymovXPp1o4cDyc",
  "key10": "3bJG8DZ56YET3Srt6GZJGwTzEYmuoWG3nqg9K3GrWmgk2pAxmbWPDpTHya3dzbQPnRRYzWfUeXGTWBFEbxmB6HMY",
  "key11": "21LmJnJNYMAFLZDaPHbdDoML7PeRwYdBhYTXadEXB5hNxVJ1dPa9pkRUXAwPQeys1EmzQA2yHsoWqiBRsktdm7XH",
  "key12": "2YZ2MBfAvbUmUHGwgp5729MpERk5Pr2KBwZPGma2F17xcSTKdL6FhCGEJDiijqD1oYLtLFDt3DyPHiGXqTB2JFv9",
  "key13": "bcHdzxWjsfa7cmFMUSGg4g7FbbAJyXABg5aEqsTr43uaH8ov5oxqp5VDaZpobKpAoidMZ4TjE92wu41GC9MA6qE",
  "key14": "57ygt4e4mrZpoCBYZTbUCPB8waHRDbkLVUvNp6zZm5tdbTDcFzWHWFwp2frL2DSoHK2C1r787Z1CGPokfh6USZhG",
  "key15": "3tNUk5GZ54uAT2c1U6PJHkFJnfeU6wVXTMuK4U7X378d9hjggycQ4edSjv5GEYzmADtET2fvSzZbuwq3FkiuaFkf",
  "key16": "2B9wGxofXCFFtEZwiZXvR5bannMuDrC2f4X3sabLcmyJDuC4XHDchmCyjkQu4ay5YNQcgJUbJtgMYGhHfzXWayEo",
  "key17": "27fmqPp9fyb1gkgqPBDP8xStHrJPghQ27E1vvGDUctZVpS8H2SrB9QMw8rWRHuUT5rC7ngP1n3q7h5oryejN7K7t",
  "key18": "5kW1GBm68n1zmeCzPsgUHtMKe3fhbUysS7Vz6GaKvXzfmWUH1GqcGCUhmP21ygrYq2VAEVuzr3hN5GVjB3ib38p3",
  "key19": "4RjdphshDCksBrkPNtXk86k7aQw3gYYXRizWpnHURx1KoqXGThNRFayP2V5c2jcMaoi6vfu4HPghYDDCXMuvU76S",
  "key20": "3sB21th8p9sYfRJWjQYdqKqTLxiD2WBNFnC31GEAmXdP7kBu1REy7MHpbkGLpUjsCPQmTh8fufKxAvNAv6ejA7cm",
  "key21": "37RrPjskr5BR4etaYuXPCDZ3ZDFcA5MWAKSMaeJHTgXc58vcHhqqcbmC3MQuRst8jr8o86mNrnrNXezJPeomwHVK",
  "key22": "5qjP6H1vJj69cvTo1uXPHP6epBRvjmYwKd5xpCVwKzQoKorGxPCePjANeFHJBG5LMHyTv9Jpes4U668JYgF3uhNc",
  "key23": "3xviTc8gfsWNeYg2c7JRiTxzZ9ZZuw7x7p3oGSboer63aqp7bqqnXDh1bheuzDermoR7Qc283tXjTdBRsRo8piRG",
  "key24": "3z81TUJ9Zxbv6jj8r4VKfusLjfjxMLeY54GpyWwVHu2XoXypj2vrQau79jUTzStVWaAohVNa3MrefEUAUc5HGkZ7",
  "key25": "zgygzbCrasYofaXix6p2YchVvuDtdGW3xhjcYeha2oQhpHVFrpdmNXA69udwkA6sg3oWfBMPGxtvng5S2v6qiUj",
  "key26": "52LGjQUxBTEHyNvpG6BNyEJBvK7GCvnbxURfEKDiNwLpoEE79ZTzGhbjpd94fpHsKPtjKFLfkwHB5K7giG1DjJt3",
  "key27": "qra4UiM3ierJLenFehYhR12T5GzFPiZPkzdiSbi1tQ4HQcKtVRzTKaWn7TgjnAMM39wnMgj4yFET8q2E5U8nPJQ",
  "key28": "61dztAYsx4dmxLPnLZsohTRb2wjZNwb36wUtqt13sRjcTmKByhXM1dAwArry1wcQotwjndGF4BHgKRDnfn38p2tE",
  "key29": "2jgvur8fmABkxMbkcHRfKrBZMJi6GTBzhq4PFPqQ2jSzzMDqrJ6CyDtLXxTxE31x9T9ZLW15AN76Nvzqn1MN3SZQ",
  "key30": "3V386m5CJ2bRhHGPwm49QyrDVpn3TRVNWdmhsmz9rBH9FLRJC45ot9DyXK1MWj8FjbCN3kLYoFZGgbyzkccnxeqf",
  "key31": "45MYbDpN3Srd8R9dWZJRBkkaXjjKQFmjWp8Gj6eyYxvM3uyUtEyZrYiWNVXkNfdDPsuCBCJuaMZyt4UEeag6XGEv",
  "key32": "4FWM8ZUQDH9zeis8AL92g53iJZLoKACQHuZAPwbfxmpnhAMu5LHT27ThdCQbEcRu3iMmFaEqVAVXtmX7uqVhEgbn",
  "key33": "5QnmAynPQaNdaSXe9R3RMQ6AG8ViWYtxjmyB2nZ9FSxigrkv3vn4nBX3LCg1NReTCSGfVb8L9vBcnjqKEkmFejEZ",
  "key34": "Ewm7FGFTjtfuw2Y2fJqYRRomuJwCB528Vw9BhJr4WAmQVd3x6jhYjBX1w9mMkgqei3vQdC5FJtNQY6im6vCUejn",
  "key35": "318E9b66YxAsxEKozZatzqmMp8fX5cQUxLK3hr2bihkh7wzCwPy5GcxM2heYgBZWxGW3E6CjfEUitzr2fiYV9DWa",
  "key36": "2dVf9xYUGhHnWnBmkkm4ycoKU6aJ79CrDj9YadXsrRrBSbQQbSREqDa7b69ixqCqet8wropXX71pkeMqjpPbFQFw",
  "key37": "5aUMyQcqCPCCNeH3paBRyfexBbw3ZgUgE9swNbbciPxf9f26k5zimD1LQU6V9rD3prgbeTjKDD13Ho3RViCcsvZ3",
  "key38": "YvPLNTboq73kf3wgHcSfhzCBmPoVWauQL75Q6ZDT942DyPGQoDiAr3aeuHguNm5U3nxDKsyPAkauhZ3vtcRpzV8",
  "key39": "2gPhBzYRovth9e4CdHLMXs26JnhaN9r5EzJ85BXLz645B2WtWwvCEyscQbmi82rrwrqvqRpxPBT4h5qP3LMNh3i1"
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
