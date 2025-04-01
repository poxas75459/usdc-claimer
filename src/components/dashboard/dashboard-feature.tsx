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
    "arWdd6ps6LqGMvvxLaAPykG4p6bHbMJXc2559SGECepXNsi8Aaaj3w9TxmnGZt3mKypYzouSTWaPHrSF43ZzRr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqt1oMHL93UdvP1jLaT1HhpA76rqkGzPLqGN4FZpsytDNUS9EEBLAiCZmdiGQvrG1bKUAS3R2cpmr7Rv4rXptAh",
  "key1": "23fAfp3pp2odmrj1QpzbQcLqm9YiUyMiHNoNdLG4uWJVqGiSZzTP3mn1WMRFQztnTsYzTRjCR2hnetYE5cHXee2J",
  "key2": "4nxaqfaxaooUkx7TWGwZ3hLun3zj1NaLp5fzFNh48yaDWyN9PZRQqBqZPayhJjbpqhbiqagZLVX6zYh7iezKesaN",
  "key3": "2LUagKSQzb9MsoiGhkbBjUPdT2aEDBYzPZWEWA8CihkBKTnSmXosg2vThY2Cu23gLzpbGNq5MsscDi9LDHEyCbB3",
  "key4": "5a9oBtQ78NKjfsxsP1r9gjy65fXZoKd2p8zLEciaUqD1Z5XnqnxCp99Wavqb71ksD4BHtJfGsH6euTt1DsC7gfLW",
  "key5": "5hCE7jSNmFyy9ff21PAMhicUUfiiM8jisLcdXsguG5s8BypKBdTD9aZi6ry5zKemE83Y4rs9g73XRjGsc8yPPXXv",
  "key6": "3wjwfcMVUXdhtm21iMDkCvVK57LuNEFC5anudKxjqHsH45FbMyNUYEDQ4JTjeDWbXqhU95kUesifDunZ3aQksSPu",
  "key7": "2ydVpRSmXnRR4WhRjUn1qMarZd19uwTXrY1Ko4R9a1EyYLhbeS6ELR3V6fP7eT9j7FrKoAXjhmprjUgtE3SuXjfS",
  "key8": "3ZLHabuJguBg9YDYjT3fGHHHje2xoMKVB4T1JcKZ9FDX7weaezBraru8CYymPYtGtJTdWL3CmSi3Af2dTom35Mpa",
  "key9": "5NksmCYTh9SDdf9zR17m2cdEp9cfWFNa7x9gbVTavKNL4FGuydehKo7HAH9CDXWpQ7pRq54HM5ajYQvB13QJh8Az",
  "key10": "26m8Uv88CrisVgNAXrpBp7349aFYFc1AyLyTBjDcgKfrq9k5qwXfXxSKczKdKpA9K8gcHdtvxRsPYXFj29fgURMd",
  "key11": "32NbmbveZrM3288zoGHFj3viX3JyiKr7vBEk3xtgGxbdQhYVoPJWQFJPSadBZG9P68odhdKEtACyd2ic2wLx76Z2",
  "key12": "uWvzPNbWpZrTpew4m96cEQbjW2YH9We6yM5yQ7BFHZKeTmThK78JBdTKnJdf5nNUv9gzLME3YQRCbvJ8yozdbpj",
  "key13": "3KUAFo4M58uZqHN6Fopx3DEiTNTZJLd7k6UpwMUciPExAE6MPZ5BQc6TGNcTYmkzcRfjar4WZqhKN5ZxVnU3TdNk",
  "key14": "33sWH1ewByQDktfa5GPzAHAPN4B454iyToVuHaaCow4WuKKkMVF9KmM3eY1JsuSfh2MDHruQUUhgD8uU3YNvWR1g",
  "key15": "pEzh3SNt6ViuexmEWyzax2CYaQaJiMf7Z4s3N3wVSku4inRW7Mdfy5jRUfseVNbPEUk2MSeZJjYEmt1BL8jh5Ay",
  "key16": "iMyGPXs9A8DweWYbN4FShrAWhxgt5U44ctVnUnVLEThdDimhsCdepGnzEEp8PMmd5dWDefdQYjWc1d86nqcAaka",
  "key17": "44haF7k9axUWJC8qZKwPHMrSfS9wrGM4TTkufgdgekgMk9CkJZ7k1Gc2N4iRsGyCoNtPnvLZv5y1ZDRjQDBzJYf4",
  "key18": "4QUQfXUjc6L8yAD42D9aQZHi77wG2qULx3igLwtAemkF4sfWsADC6LUdUE3Gk68MhHN8PRAvnnmzMLRugcRU9AaU",
  "key19": "3ZXMLekCvyZhGAXst3UNZE7nAsMuwPjCbaYHqGFLfz3HQrAGRoZjvejjzFrZsTtxxqqJV2gUE9FxrfhTdL9AHM5N",
  "key20": "43hgrQU3kCa2HB1jUQ5dirGok57cxWc5cAFJxFuDrq1SpQVR8p4M2JkSvSpngnPJPQxSCBfnFDKeuzRdU1bPr6js",
  "key21": "LEinmvSbSMAH1e7iPTSpZYcQEXEP3UXuH9GUafB4ihnJG3kab57sb12u1Ewmk4qbKe45x73o747dFAxRSHAFwgr",
  "key22": "4rzatfHxSYUi1vSJYMi76EYjMwdsfiG7LTxDi9gQDzMaTdkruKXenFpTDFWJs57x1U5EgRGqmRZ8n3kATnvqKNyu",
  "key23": "38C9U4W5k48s3zhM6LHM4DM8Z4jqxMKWXQFYxUW5piw9eRFejTfQUsteRHagcc7ZfFx95qJRpenscAP7ENXs6JiL",
  "key24": "AkALxpsNedDNW6Mq4pA59aDxTadEdrfX9NeBLBx5tXYLCdtikyGEx5yFbiBvi5WPnhU9ejWYFkN8W9zquCJ56MX",
  "key25": "4zN17KLjKt7csuP7aNt3YRX9zC5k4vkSt6PSonfWMTMdRPhbHo74DbHaiXJtDtYyNLuSPc1xZdYvubc848y9AthE",
  "key26": "54fLxW9jy5fmSdLpQmk3BwL2PcBXVXjamEi6Mxh5xDRPVRBhcTSbsUucCkcnC4d74HhVHrKhkZF9XUyVUF6WwUuV",
  "key27": "5miHvjXftHosVRuHuJ44xKFFFkJdwMgjCRm1dNyeMYg1nLmAbUN3Fwcfopf3qRmz5YjcFxSa2kAwSmPvRbPhfMAE",
  "key28": "4ajPNhDAPokPmJPotQZjsM1XCUHAffm4meDqbnkSSoECSEKTagQaLdkPVGU2oLa7MbsPU4vAaffuMjbyVQi1eHHu",
  "key29": "66HECortGFo2PsDVxjmGbvin5gDjyd3Urc1ZLvXES3mbXRpd71XhHXaLG9X2nWHopcCfm7XqndbQ84YfoHu84rXb",
  "key30": "29wkMWwEG4bd1zrKVs16qffRLWs4Vc6DDQ5wzY3BcJZjy28aChGh9NoDRhphPhNhntQma4ZN3qsffEjDwqz2QRmF",
  "key31": "265qE1btqvNyoFUn2QM6jLTUTSpLQyzkfCRiPb7kGxZ5H5B3sxuPymeCz6hZXM24BE5QJHgv3rWJQQNZMsscQ3jV",
  "key32": "3JJGji5hGQMG3pM8uwjcSKXhCZJdTJMcbzUXgwmKMra4LYD9nNv8rXVQ16ofwVv7ummvgyQQvaHtSd6i2L6cXe93",
  "key33": "Q9FwnHJuKgUxN5T2Vgug6BJYsJADJXb9kgpVpj1N5aCKz7gUHA6i6Nu1KN8Y4EApUkt4fZwKEkXu5DrALPXYmnu",
  "key34": "4MDCxvh7a94FkkX8K2Y1tYeLwXBMcmKcCGKE73A7csNYx7YtxmVJQLpFkm3HUkYXjfSoTLPzEtaJqifW7vTXyHuq",
  "key35": "3dcvmCNQDKxNKwtGUeWrH5RES3AD958ZSAV1Q5rhqfLufdA3YRQQFfp2zxiqsnftGKrwHnCg2cuaUuCHrUjfmgxY",
  "key36": "2dsDnwzgsqD35dHWWyCM3MSgHcpiHCQVzyxDobAtP6tL8v6XYM4h43tX5M9dpDTR5SCfsG4Aruf9XmEJc2i43t6o",
  "key37": "jYxHwKXgi2z7pgCE6WF9dg17mAxXN1RDKNTq8PUX463JZLCam7dPHs2iXs6SnCxMQVEsg7CgUgqDLzR1qA2Tj4A",
  "key38": "HGG6DHepCBuDJeMVThT5wT5toS1jHoSCBemq9xAt6CM1pdfuDqnWTxT38inpLhp6YLrBtEtuxF27ZX9PYTkA6oV",
  "key39": "64CDAqnZPsEXJCXS3PAx8yhWtfvvRBxprjrmuskjgoRu9AQgtXuvnLTgCFZYvQ251BBrAPRUqN93Zs9SuBBKHbqa",
  "key40": "DDHQ7CAARHYsSSay71mxZavX1uw7GM7J9ugN9j6Qfqdq34hzxjeppgQTip55zknMg4A456xFdDjEjDG8w8QzmM4",
  "key41": "3GxnjmtZKK5JSivmUFb6cEmxgEwdo2gpgJM96FWuYhTDBbEQgr5DKmYyCepVQYiWst1TW6Q6wP1rF2jFrkgu3uNR",
  "key42": "2p2LMdddhMMcCuzjXquwti5Wa7MQR9Tsp1xRv8beAEgGjLJvz1AdzpNL1bhMhdNJockkmT5koRcsdVJD734eiP8t"
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
