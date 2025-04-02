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
    "4Xz6NubHMVgGVg4p69hMDPMTH4gLejvP9cNcYRM9yyZmrTWSR7g1viG8aU3F8vmmYo2LVWHXEEULBDvqm6aZ2JYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcaTaprDvM1Hape1QmsiMMPT3YVWkwZ8q3HaLa4byK3vFYhdgdhDfKdi7YZ6mNg4vfaDiySj1dvxoKj5EpdX5yf",
  "key1": "f6U65NrswGLo97XGfAaSV27teuT1fkcQkrLeQPfQeJVr56cUzHDhZrvzK1DM6hxsgUufKHUTgGASjUCevC7PLSR",
  "key2": "bjfrCar3MyDn5xK5XQFLVA7Sn9rj6MU2BRPdJpywqMZH7d8zdaDcs7y9nGsE1exvmaAUyjGfd5NJPJ8q2wb1GWF",
  "key3": "4qkbydXfDN1du3aPsp8zFfXnU2aiTKzZoXBGkFmZbgWFobBgzTxmYiXfNEPL31dbbPxdZ5d3LNwBJpzEWeNh2LPK",
  "key4": "fntfoQFYH42agTEoyMu1K5u9vxwBUywoFwTt5Nw7hLdJ68epwccv9htP4KR2TZgbfxWwnTrwKAKs4PoQAjtgHqz",
  "key5": "5wHuVVBshLkUmJUZaCGUC71hgyrLrVNQsRpgHdWrLEeQTwZm8CdyZaJ8Mjy2oaJv8uscuHtK4fb1VQNSjQUSN36h",
  "key6": "38VUGea5NMzqXrVA3PsDFwmmByEc6LWPuGvoquP4okEQEU5ezPYiR8MbbbnhQQGkHFDx2h9d987SHxnVgNuEG4Jt",
  "key7": "3X2qSBBXdFQK8N6C517QT4RmZG2NsXLMUE5gPoMz5KcGtb2FNjFJUhA6TssnuFXMv4kf8FYeTfMhqthUYEdrPfCQ",
  "key8": "35cXSqvV9VnR4cSCPNU8ThgNesg9Kb4SzorXKiXe5LdT52JJFnQUQ7VuDmqYq5Xsp4XmHyAmSEfsnvyJytm5ZqRp",
  "key9": "3ddBiXLbmURoFaqxHgX6n8yoYyh21ZGcpp3mejfPJp4xpEw2dosnqcvGmVXPwggJJyx1PzMY7fpWu9WXQhCuMcbj",
  "key10": "2idXBMsnPuMxJMwjH3cgq4a2BAqfkA52ssEp3mDkWrr3okj1nycafZCinSHYLnkLQFHu4EwoiRYFdAyXEo9B6vfa",
  "key11": "2rj9GC1UtmiB29tjcZvb1rUz5NhbtwAfbok6uwp48C3aW6aqqfsbjL5G1aFbHPYENeBU25hhwpEPrGUE2KiMzec5",
  "key12": "2wXKtNYgfwEbyd4ZY5HYQTF2tvTKs5Q93fQVFBiuRyfQi6RA17SuJHcMFV6Hvr4nJ2CTsgduVfgStLswUUQW3RW8",
  "key13": "RLnB1gPKw5nkBMz3sH71XLKwoCKwm99PRu2pmV7RqyRyQjCwAdEtmnWeZnbL2uhV2r2FAAtTT9QtUEoosK8ciD7",
  "key14": "5xEfM6DDWAufAD3AQqNUbS4uMuh6Z3GVgr6kQs7dTBaSfYeaUsFeGdMEqJpPJtkEwcGP8rPK5dueDYnWHbTRVkXr",
  "key15": "5ukkBFqv9Dwhh66DwBnCDL64DyB1D2nqkaoiW6mu2fw5VNtG7pqUup2NB3qPs8XDPoaBKTBBhPckCB4wbfgqYbSq",
  "key16": "4rfyd4zM9G8GmdmMzcGKAjnj8mdZsmSzKkTquaQUFT5uBKKgi9WXJR96j2jfApyBqz6aGntMoAu7BXZnsWbjtfsf",
  "key17": "5vsgerp9cXREcZeNrgaqBfqJ1wq6AsKCXC1oGveEM5zjDuRkqN257fYtf9Epj7fs7d8PnvxEJ4yAn5FKqiqrD5HF",
  "key18": "5uXGLAkLBLmjpjaDW2NSjGmGLSYZLdQCn65xQXgYVMhNzZQDdQqAA4XbUCgGssHdsEfxR43z2hGAEcpwkY9CLTz2",
  "key19": "66SL9wNCZsg1B6WignFLqEmVBNAPnMG7YVVtfHpPpSzASZXzJb7twpBwJcniks2NNcaiGCwEDDiHCh83qQYmAXaA",
  "key20": "j24PQKes39j9VcqE7DYLtx7HAjWSQhwZwakye2b1Q2siUFud7VRS2sVd2rVzLNa8KmcBgmBJPvTSFenx6twmP4s",
  "key21": "dBgnS6873epmHrmquGzh9CMLNVy8UzaQBp6tVxKWzBngmxCjDagrzfBKB63RMXmeY2Hq3LmNVEXWbK4MmJsvcsL",
  "key22": "3ReSYnamx9FC1cSNG9nDuZZXZq41vsGQTz5ksS8Fo84sqti4xmMqT4ko9KvthhFKMoUnDavLbab1RGZcpNWXbaLD",
  "key23": "G8WW5KBoLB4MSYoytqUkoXrmSfJaSXJsCFRGuKyTFehCbmEHy1xmktDSF86GwNPiqVFoJtrjrnbWuYiJYnWMXFM",
  "key24": "2tQ2BWHXFMfqc6BDQJtheXJwA5bV9wRK8J83uSVhQZDovHEY9ho6Yprr3Tkxas15ePkfbk8mZoZPotmhSjYwRzB7",
  "key25": "2o1wFoDhkJDLEtJxr3miNCPtAZUKRNmcLMfLLUjNMuGHNmRnTWtwsQi35s12kfctPoeJhxUPSNqAohhu5rXPQzDQ",
  "key26": "pjoaA3cy2GiCoMYHMdmNqF4p9ohJAV1vGUGhYwcJhGCpnA6W3CwbsBsUsZ8zY6f3og32x2tSK71rvVaFi8QDfBS",
  "key27": "2d2evzoNTDrPZ4657XmYVrRoZMwTLEkxb3vt3qW3ScS3TLZ1RJJYHDa9U4ZmsG7ynHaVS5usR5KfJ95iS1U3yhb2",
  "key28": "2hRmPqoRf3JVczFexx5t7DcFgdiwN1eZjAtAFM79YmzrLK8H39DPjumgkzGdSoxXf47Y9Gr2iZENuA5sMUd4dy77",
  "key29": "H5TQC73vFgpr5Vk7XzQtTrPnPoqjZWKD3ozZk6nuc32DNVQTN6FKtiC1fnLkDDqj8Pyi3h8HNVttMfyzuknTopj",
  "key30": "491MUapWQd5HRHsNxy1paJfMaAJtygvZirWFWo2RaDY89T16Z1QtPfjdcuZreBN9svioaTEchjKFGazSfTr56b8n",
  "key31": "3D3FGGFsuyySmni9EWJdMwZ5CEKkybciHsaZqZBn73rkPBB259FhLEXHgWLtdK2CF4pQ5Ug8JeU32PvqsX2ARXQR",
  "key32": "4Fp2cH5gG5Yc3ntq7me3nwLtCG12vSfotqm83UMUHeZTospTyqV4C1oh6RiQA4BKKhkCL1rwER8Mb11euGyLayN4",
  "key33": "2BEz8h9Tgg4Swki1M3hS518egNhgBuvNVJ5Q9w1vFaDZRuaVLziogdvDbfuRny1WLaGX9DZPJrEHpxbsW1KDVZ6e",
  "key34": "2EthSyLLdr7RPeYc64h4yFPzai274pYpN11KSc2PkiJHMme9TjRdWEEWKrL4pvhMHfwGw19NU4jz5gofGLqbtfDC",
  "key35": "26sAnMRSZz899toM7Sar1c9rD2hznSnoWAMoizzSeJNzz6h9WCfuvmX995fEQaDSuG4LEjY1dSo4oUdrN651GKsK",
  "key36": "2rCkmDkutVqeeF6FuC1J2n4J3rg5xvyE4hbZwzmbZQW9t92wsVvtzq7mKrkfqRB484y7DJk35aSxPZTcdMed5Cby"
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
