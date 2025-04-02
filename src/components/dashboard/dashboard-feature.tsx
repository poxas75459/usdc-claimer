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
    "4Rii4djFV5WuCbcVBrdGqDSjhdc7HYBuaohoLBjPZgzGPQX68P2vHapL8m24iPmwVoCii9AKki6aYn9tRkk7NHsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bb37TA7QjyQkA4EtvdSsvwT9kBRBt21p17R7HCnJcM5LqhZEwZmxrQMyJrqh89EjbhXSrZ49JuDH5XQi4Vdf5fZ",
  "key1": "59yR4cLnrhREL4ZXAf9bzJAeTYJXoLVkjLxuk3yBmwsEuMgf3Ld7LzVAzVkNoTh3Hr7nrHR2Ya7WRWHVP8UNv248",
  "key2": "2J2CMmXYppbK6m4cEW1cdRrTAdyLrcHG6DDYd93iFPPv6Jhqa8rPHdK4T29MkN6Gf1Ds6VcXdWSvLyrHxYVT3Qus",
  "key3": "4gYxcYufhNqdvyxB6aqVH2KDQCwovd25BdUSGP8gANXAG8Hdkz2smMHneubSFtQqiFnkRCcLmqQpLuW7HBToMd2v",
  "key4": "61RpSBo2bFYkvySUsQxWEtAZDU5vTDtZ7DM5hfGQGEzGJCAguWY3anndrw27swRJFN3Y1Av9PtHjXJ6kt3WXgLP5",
  "key5": "49bt821pXf9KKGcNAdp4EDuRtvXVzJ85TWGe9NJC5BMSmW8LqhTAFsyLSqtqa85hoaD1pn1BLJWqFNuRgjyJnxTY",
  "key6": "4RnJ6kim7dujKgopdLk9Ty6x9Vitr31EwDZDD9ouijpHCcgMBFiZBGcJywzFPEtb84izz55BztufxnLbmHj1132E",
  "key7": "3SDrcQvX6GdWxv6pjWepHZV1fcYGXeABrX19cWEyTHP1Lw13WPzeBGAE9mjAJaoLzmke3CrQ4CHDCDwtHjNxe5Eu",
  "key8": "nH1ZJ2iDPZQZRD1Cwg9tG3ktWxKVUmggsni55dHqqVZLku8MTQ8nYziE4nEGD8qVL6rk9Phe723rJckSfzngQmE",
  "key9": "pPemKTBm1LK9FG6vbSEh9Xq2EstG4UezvHWmTw5EpotChmbbDuwXvxCG8JsAVHD8ZTEVKSMktjFr2c5fnV7tcSb",
  "key10": "4GjMFjocm6wotLERhQ9TcSCcpEa2PLajGLnSrrPPxtsE3v5HVPooy9enduBHEcYXJmyV9nbvTtYRZmnF4WfvMXBH",
  "key11": "3dTifeKT1dsQWDasStuNDB3XQSuiagMTiDzQLMmuVy2EKNkK6rVD1b1piRp7ffs9G6ZPAJWJCKD9XhTkLmsoasvg",
  "key12": "4LfgXwtH5kz6gNrx1WDTXLGjnrCGtqWPC6FgpwLXWJXhxD6jDWAsxEeqcfbDor1pqq6T322pZyZqfLMjGJT81ugd",
  "key13": "4ihHMmUUVw3nUcoP5ezjZ4Lr6JfXxdhJehpAHcVVuXiNwcTBbbNMXPyBLoKwPgXy1AiqEu2kmy9eDLKFXhc1k8XC",
  "key14": "2QTi3jzLnT3SW11S5MuaPnZedX12F7Z1uFA1Le7oDtt8k75DPaCkX6BvWj4i6Dq7Efy1dde2o3TVwpLFEXU5AfSC",
  "key15": "2Bbz3q8MAmdmPavTAFoCZ9qyTexdjLNGELjv8dgRpve5KmEEWVwYdqpSdKT1ZkaYERqarhue9z3i6CUkvCFX3wzk",
  "key16": "3kLzFqACxboTjiNyyFfftvUxE44MnTvVEqPJ6W9i8f4MBLDiZ8BXc7MXzZawC5nAyfHFSkGZ8dPbTEsFRMcf5F8u",
  "key17": "5C2Qh7ruCUSwbXGJwVHUqLuf57ie5enJzmKU7sdEUkeCQjfWSHpd7WGXM199bHGwaW2B1d5TFQuJp3n3yvtHC8ZG",
  "key18": "2pUAKkca5Yd4cmiMgAJ4wxa1CgxALWhGQhPyNhy9Sy5mis2vwmxSVNcTz8e7kbgEJDruUzJj4hc6EJTgxhzuUU5f",
  "key19": "5VDowCLR159q3Te2UkfG5dy1DPgXF4JDzfg5FAwuAQ1z3kNcQw1KStJzYUs1YdtFvnnQHXbYUoboVFr5NLVCcBVa",
  "key20": "4QbeLWXyxNeL2vbSBD619AaorFFGA8ZRQn5Ar2ZmGf1RMbuUGSty686KnW5u8e1PzDSWbzd9DhfgotZSUjDEEcYo",
  "key21": "57g2kPz8JZz9qfsAmyC6WuWjxqnfDMN5zaHfPgH8gDcjw4dDGenob3ZEJ19cCeLFWiSDfEeAvyrQiPd8wMabxYoo",
  "key22": "KQAwJfeNLgQ7vCNDwxW2YHMktkKr6rTCWLRbt2pS5BR3dLSS3jxrXLRpVUpKoY6StGjsp7EtCeiNhvJrkUfdf3C",
  "key23": "33561P16dwSA1A8cwjVfF8edBiP1kLyjGSvPU9dH3j8Yd7bNECsHSiz28fedFhDvWDFpCwSaL9HdfJBbMtsWL6Ap",
  "key24": "5QsDuah5pRGi8jg8yeE5gwq6gAo8ku19ho6AdzSvumrZsUda5M3KP1xAJeKvRrQdHYyfFARDFzNiCbN36EAaCJ7A",
  "key25": "c8eTRSirH72ePTQJ6Vr2SJoWKN8QqBPGKW4DrQdKaG2oj4ZA4dkPig2aQ3EsknsSiafZwFwUMj5bPZQDUq7Koyc",
  "key26": "KWJUtxvuPkznRFPbaPpd3Q3nDzuYHK2ZXhB2QJtiH3xTZ8v5USTRBbbM3XPdjMRUbFApw1BMTJbvKLEjP6EyVHz",
  "key27": "3vTWZQDPobk3ZUNXsvYy1D38qsYXs4WggE7kH4auv5jutijnQqsUA6bSmLtK9Mrh21VXGKxHktq6KYeudPD113J4",
  "key28": "52Gd8L1kRUgM9pt7ctDKFJH6JiKm9pz4SXNmssvEBEvXwAV9YxMv7komKiQBFBhJH39XbQo1wWsuu5vhCzcm3SfE",
  "key29": "5qxqZXZC1LSdDEr4TqtqCL6U1xYm3A9puYW47ACa4Y3KGpzwYY3indsVBnhcfx7qTy99GLrriqnJLkrq6Mspg1DB",
  "key30": "45bA4nedRiyBXZK9GsP33eXkxdmwfT9QBvvhaCFHhVp3giipeVHpmBh3sAeMJJTkSsmRfTsENgsskDqz41tDpqgi",
  "key31": "3Ds4HqjhSQJM45QrpK3sgov8X8WE9LvHy7J3LsduyyRxsc7p9QDvVbodR8DRqofJhDgp9kDLnve4ZWFTdDS4pxsW",
  "key32": "3wfELFyPU4MgHvBXjTZCH92kVvmM8t3HAj78j9RkaU7AeiBEwbRriMPuZCRJVyNdDFyB81J49d8QrMXbVd1kXemz",
  "key33": "iqBRBjqz64ywamFXBxivTrtKSWHznB3i88sHhKU9rUDyRDCBW7b432HhxLAH19Lv8Sd6WqtbT2W2tNo5dZQo5dD",
  "key34": "2c2ZnZVvAG4Num9SXhvKwsTU3yGnZnuF5pSyvQtMPRKDfmT6GUMRawUxH5sLBcj8d8uJPLfbubYZGUAauPNHJ1Z9",
  "key35": "4UMP8Y2XXmusAP7YkuGVjX79HCvm4UpYpmw29woknhQENcdNwKjCzibRXhCV6zVvFvR8dpjbQoJiP2KPwHQ71hLg",
  "key36": "P9UeVxtboQGzuRuzmi2ak5HwKp9QZcXJnJTmksVrp7BZ9HJcuGScFpmTibgJSYqCBURY3wswdKHxBYjygZy9Hca",
  "key37": "3dSufEAMjfAnW61ag8HJkpRieRaddJtdjkGdravsFWpRKk6Rb5u4XFhuQDNP1UrnhwifBd7uki2f4WEYHpmGqrNf",
  "key38": "5PDzakhzDpURNLhYo71HnBQ5GcsX6Ut81UHfgHobu5WCEwkTQVAxRd52VWkHad23kErmwv92WCfPGszjuzTQXSD5",
  "key39": "2f8mBsqH8eSJF4zoLtQyeJkLdcTCTALYFNtXHdNxBh6BTafv5iYiZY5bddme5WHvLwJsZvQDJBsS1jMyscEFZNu5",
  "key40": "3ExDC71qmGgeSWbqr5PuoAVXidQpxgn2hNP8Uxsf8v12DPkkXdbo9rayPdNLVmM1dVdZHURzpHuN4Hdc9sEv1GQi",
  "key41": "5CvgrzDPjFG8ZaBYTuajQjakq1epaSGqSuoTKwKiJPzhKVRPKHL1JwwtfWrc51r156aJ9XdiQdByksdigWM8J7cQ",
  "key42": "36bRi4KD6HKRiTmPnuqF6ECxYBjBUSAjAu7XeRkwX8jG4U3g8XSRNtSLjiDHoeEDmPWvgyi2rRthmLsR28VAqtd4",
  "key43": "3mspqEy5xcghzqJyh3Hd628TPafTZYg5ZdBjTmZv8E9UGzt7nz7NfGYBQR6PWzSjVTH8q9PqjFy6gZG1a1wAn4uJ"
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
