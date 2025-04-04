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
    "2LtDSXX6u5RxSoRohXUYxsJTX3mmKFDuKxxukq3adrgKYnnyFnxyBrGkT5S9KwkrCw1WaN1UxMc5McWN4R1XFunN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMoK7kcQgBdmS5iGiWMgo9CNYyxzGGsVFyKSHS2UJfaM2ZpoKPWkmt6sX5uMZ6g1TbHRPWftxvxqiwCa6Nm7DsF",
  "key1": "2wr7vB1VrQp8yG6cahsgMB1VYA3SdfAGYxauxEbX5WfUY4GYkuuPq3anVBZQSr9TUxyBaHLmnZJTq8fnp9n7jG9F",
  "key2": "38q4zvQEV2eYcFnxZGnjJsY2B42GpsE26Lm2gjHcvUhA9L7wADf8iAGTq4ghnDat6Q9rYy31jr8vtqRwYicPRn7C",
  "key3": "3wDDT52R8rdXpGRpcHdGQo8WcxyLa3j712fqSG6Ltam18iw3Kd7d3r1RUEtM8smV19YRTPo9yjkD2hx8waNbAhv9",
  "key4": "4hBYiwdhyWiercfiVAqkUe96ZrRga17UfhzqiztaFMAq1QenDkZNFuZqShwby4uFX5XfxxkbupzRepXVDEiURJHc",
  "key5": "3Qgmi8zrEGXzsrxkAJs8z4h5hfb9gEkWAJF6Wb8xdQGJTvY9uP9zwBsyqMAvugEGKzYxq2MuNdEGGj2p1GL7f8Gc",
  "key6": "5BPUWWkW3d9gg8MQvvemmR2U4zHXq4KmnSKjCz1Pywfzrf3VEkP7uNwD4B5MdwCZHPsFepmBMAPfUtXnzG7TiJ4h",
  "key7": "5vVVeZ8RScoEwEia3SUdJeAm1bCvLnxoe5orUwPZGGeUNiHtg9P9MFoAzEpVZf7oY2u7bqr73EnVKRLj4vaUPHJR",
  "key8": "4UiTRWjxSpkHxL6QoTgdzEuguwV6fR6djkgpvjs9zDnANqJ1RTf4Lss1kPtA4DrrcqtMnDrDjMS8sPJPfzksVryo",
  "key9": "LXNYAw1Me2peYiv5kKG9LBGbcxsdk37H5FVQG31EGEatmPZtubdpb8PcmDKtnyYPp6oeXy4RWPEvCB6WHvNjxRY",
  "key10": "4HetQePVtpqdHZw25CKcdEpxtrAjZZafavUBjVGTJKLYV6mqcNZFuXMhzWRB8qBM31q2FznbfXXKg1f7mAdFjiU8",
  "key11": "2xpDfT4u9MsANG3qUgGuK1q9DpSg4qpwxLfsprjWeKTCtVWXJSCRrNVAxcuRcVvdDHaREi2i5ausGEAGXYsRk2cY",
  "key12": "3wvYDUQd8BvRuoThT1tFqxKepmN4NDLNKvgQ2Qyyxe4Ua3kRW6bryasGBqYAC7e4Gp8vtWK8mjMAcmtNu5dfFZew",
  "key13": "4AS7Ai6UcAKKEjBUKFUWYyjxWPv5wzgiUYbJqv181YYJxfMuwycQNkFULp3ggQwRB8b1qS6w4eLxW5wExtikKEjW",
  "key14": "dFv8N1qP527DFGWiXQbvVLVqxsAL1iKkjEuJGnrrKQzdZrixzFVebeSxGfs5pT2DEGgRxVF4mEj4g8d7QFeHDnf",
  "key15": "gmtYD8oDXibDotbmoANng8upE74o27u3dc86X6bDRnGqr6EnQqGf7hMcK2rkCBNczU2ScwR25cEwR4Whwt79hMG",
  "key16": "5VyZG8ryP8if8caBeaxJR5JVAosfoznXx3T32YdtW3pqGzjJ59xhGBZMzTn4c5GKCFKTofRA783ZFNr29aPgQh4M",
  "key17": "2BUS57ASmVwYCCBse4v57mPk9k7v96RnuSJPJ2L4rNxEX7wJUYCZNrWui9XPSvadWkmX7U5Fj73hTAqiiAz2H3uG",
  "key18": "52U2vddkoaXSzkquKXGGd9AbXXKZyjYa6mrTwTT3B8GmgzSYKUYDHYXK1yw6FbXpFFdHAD3HgMmbciMMGMXyMKxg",
  "key19": "3oxqWZHRA54srQws5VoL5u3gRDsDNnVXnERgwmH5LdheUfRC6ye7wETnwGRuDekWzpDdM16ue85ZtARY224zuUk2",
  "key20": "46qTAF9XDCmF4ExG7eCGWwJQs2BVz4n3MaHN7cv3oGWsFzS1YDEDyCLubE1Nuoar1VguwTwNR4qFMqNtKniHmgMT",
  "key21": "2y7sDWFTdXmXThTGRgPPtUYnzCb6Aawadw6aznhgcz1AJdnr3PZaqBJyxv8KHQuhCZgz9aeN2RhQCLbtsJQyGxt4",
  "key22": "4oTF2qKNun1prEh5x6CsYbQtu3bGEvuZHTDg4QEpHZXSQyL1uth1893GXkmBNFwHYvxAAP5d8M1swiVBGNjuJvZ9",
  "key23": "5ed7GgCVoHQRyuWq6ABwjH4HCuFN2G46pJABwrUzMTWgbfVrbmBq4BBmj1TMs6S4avxXPAQgbKtowYRuvRA3KSxT",
  "key24": "3epV6AiTFv36Zj1tR8k5aQ2KcrxmM6KzoqLEUf5UxUC2oFKa8JaJfWMyE6HyeLNiW2gwxFJKHExWwV4x6ro4BD8j",
  "key25": "5bhiYCwZq4EHLdFt99iHb2PpYT3E1ge4FFFinnCVGSo3AdtqRZVh9AMTp5hnDYMkKUN1k1QGVEXmqQzhotJ2JPaL",
  "key26": "2FU51k8qKxQcVybbs4tdte8f2A2fwbZ1LwNzwQtKbdrz7U2uWDHzvq6JVPFF5a7jSgHZFC17BrYYcJKi8aJGKzoD",
  "key27": "5KFpBcHZmPAA5BTWRwmrYkzppKQxsZRDdPknJXLztcN25vMrUFUzF8NedLFCbYY1wk73FRH5j3rQz3ThJ4PXCyRK",
  "key28": "4oigWDtgwX7RtCMZoT8XYyonG1XPLoqReatYvRpHVixdH1jCCc761TZMobN3p8eigFPvfLBHUhNi1c9G45aAuEyS",
  "key29": "3xySToTxaBJZazt4YJcoF2RzF5xPkFRFfWHPmoNZtQtygyvKgW2m8tFtYJbZRPYdTdFAzpwBqYgFGYNedceURDmd",
  "key30": "5xmMuXt8yYABEajUcvpPtS1E1QrAgKns73tw1gZZao18Y7fFJ1q2xCTL5faF5v1ZhP99SRokDFBUXCaZVoofxP9e",
  "key31": "3SmGCDkhztqimcenMMFwALsZGrfbh5VsPBDLV8YokpegJt4NgZxCApcsdX2z11dgzw43gtgDP6S1ymGTtgqDALe7",
  "key32": "2ER2gvPuMoaZphxF9ksobd6piuxa9CkFPXbnqXihdCXKpUSsvTevycBzE6GZhn8sr14npfAHVhAonYoB4vn5nyX2",
  "key33": "3epMFFahdZAu568WgzCUK6gn7Dyewb6iYt8LmNHk3DjVHfqxmRVvqnNadNQTXmN8S7nAnrP4teCnsLz5fDnG3aAs",
  "key34": "prU2RwrG1habMruHLCbpc9kBz3qe3aH1mLB5mgWctV9FcT2ywAzy8eHbVem6Pmo2NHvTqavRMQpBhLXExs8Kudm",
  "key35": "2JzvhiZK6bgu5VEPDp1ozMc3fHFwJQpTnsSZoPBUFFY15BYo2xpnHbuzCh1surYCJ2drdNpJb4w2WyW5Ek8BGgzJ",
  "key36": "2H5QLjLbRGVww1PkCtNSQbHiwYfjDzeZSNekFkh8baeJtqvAGkMJazU3AbFn8C6EqGLCKZDBzyRFoD2uPegGkMrd",
  "key37": "3EdKpB1gYVMKNn3dekZ2JCoFXA7aPPKU7dcPZaFs57xH21TVXB4kH2Z3zLXHZMzDzS5qbF9QPqfj2a6bR44i3tpS",
  "key38": "41op47XF1ZXx6HUd18omaWma2ECfnCWdauU6TxjteawL3HAVQj4JZvZ8o6oEegh9z1ibAjFSQi13SpYrDrNKwxQp"
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
