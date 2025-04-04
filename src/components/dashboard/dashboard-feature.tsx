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
    "4UCTfYefrDAi4wja6jGZLxzB72hjiBuEwT4AqHBGYkV3GKJX2ufojUk6Qdbki4zLe7cZMdQ2W9miaXDjGBYcErsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eE7vkDmH4VRbbsWEuqsvHJDtjAzaB7fRJK4etzgtjo9eoKQB6oRsmboZQpcRXNxBDpq12eTUHzek1unsXKGKM6G",
  "key1": "5Lgkv39i8H5PVowJFsz7EPS7rGgMM4A13trb7SSLcd6XtKKPxA5qtpSurMMS4vSwpRyJsgCsFfgdSLvrbJbZouFd",
  "key2": "2efeRoaFtEBNQaxwXz7MhBTV4DxKrfUQTSTkRgfUaEKkvRfwg9j2UNbR1vxmwRcSkZ4we5pySgwMFNPRguyPFiDt",
  "key3": "5UnD3T2CXxKoNtobcFRApszLNtxJ3yxG3kYsCMaRWsEnz45pNsLMEBpX9aavRYMGryZKDe7pNBTAvWL4K5z9rRya",
  "key4": "246rkoupGhvUh2B554N76PpHGhYKym2ptJRuFnQrs9hgeLTywswKJabtxgtXNweKCg5V1nR45b5YJjykdxbWQpNL",
  "key5": "ohrDUgUN8bQgqsKScRYdwqxhhZUMVzMjubdsGjPTLjHa88KXdaGMJSbovvFa3sBE7MvC3JZdTys2UMnSLBWEEG1",
  "key6": "xfGAXGub27bkf64XHmuDeLpseiW8saA4EDC87GHwcrDjSBhaLEgf1rXUujmL3avtqeifj4BBFQzesgB3s7fagGp",
  "key7": "3jjRbnahcusCy1YfSMGw8VXZrrdogDn7zcoUcM2sjh1jnNigSFEDr7ohbz23tj9ohm7qfZSdb8MsCCeQ6BNfD7Z",
  "key8": "5AzihKFJao8yJH1GStgtZL6vNeiL92pR2R2AEm3VEcMhXHUcHR8f73fPKX9VPXatjgvpQ1N88KizUmjpoMDMgkFn",
  "key9": "mGSqZRvQRZieiTchVv5DtYQwh6b8AnpbcU4aib8y6Mhq5JSAEXFskGQ6MbaTGCfxMEQTdcJ1RNfZApUG59ovBAh",
  "key10": "5xAEAigDYZcdTZugFGpinskwcBzg2hKQk1JHyTpyJHhRzP1JNWvReHXz5t3E6nFjg2w6g3yVkmJwtaGWmvLR2kMY",
  "key11": "5kRUJPENbAq7b3ru9ZGCctEdXvQnkjscU5WeG8c8T9qU1WHDf9mgMeKJAJCUDeNjnsDKfp5NQ51hqqsMA4ayYsER",
  "key12": "5BsJJe3j8jhaF2rHsTTSWZQnGph43eL6kLCoN62vrSFuZopHRL7iZSQjpj8eUe4FWE1XRz7JsvYmDP1rPQEREvcm",
  "key13": "ofQmU1JhXLqvng1YnSHZVi58US5EDnViKYFube5FKBASPZKhWznJaaFnc67G7f9qMh862NUrxMCPerxpGDBaNtH",
  "key14": "3XUyCBhMQspARJ4mv6sZmE5hzEG6vU24xJ7cf3QKC9JtEJM5ziCZcE2QU6wXgdqr4FxKm1z5PMzkmP66vopqb19i",
  "key15": "stEWLtNqPWNStv3x7dKZJCgqiWe8cGLm79SKcmxCjK7JeBBmB4uEatUjptLLC2qjyvtugewLJKxHzmKELerXRvC",
  "key16": "65thz4Bf7yTh63FYRxjPzz2tuH3ApdgYwnAw5WGhYSrR2uhQhjN6kVPYVksgS3SwJHRcW1hzV3E6zUPwwcXU6iNL",
  "key17": "59UYwjbgbecspVEtbVgPcakU9FKNMKYkyDUdt2JiTZkrG3r8g8eJ1yAWqEePFFmSXbmL2ZvadiCtteWeygstVh3s",
  "key18": "34KenYBUGnABWsojkGBYsWYiZoFG1oZuTpVMf6MdDjUfNADmY5uN7nx1DB2ww5mLjs33pv21e4syAdgXPsEjB9vr",
  "key19": "5uJ8S95BHbtCeedv8kyob23eBhpceDKhkvHteH9GjkxCgiRuxndqS95mLuQFo17z99GHUMSGeFVxiMihYUdeFZ3s",
  "key20": "4Y24myJCvocugvE4UrL8WTMVHwKd7tzCjKazdnBXhsyC2kyxEVPR2iESVeVT2nQgb6i15fKci2DU4xsmGrUw66m1",
  "key21": "5cP4DhW1tmFPQCAHtEMJ54uAo6Fiza1LVnP4GK8eaJbZLb4vCG6N3Lua3tbzkmeVR34E99jy22tzKy5G8EP3tYF5",
  "key22": "4hipQ3a5Eh3BCfoqGWdnV9T5Q3TJSqY69J5CZt7WywmMuJZDdikHvHSZjvixxbnNys16aasWAbCWcXoayYmFNjAi",
  "key23": "2HJpfQ2kQRrHbmr4GQeK7UHAV7tW2AnkpEik5pGuzCEzUESignE4yXgzChiwSovWfoihgTKjcTGCTDhacMLJ9Yef",
  "key24": "2jnYf4pC8KM8sbi8EHzHE3Q3GMitUmUcfEVfGzvSNd87n3cERLNXrjNGAEcorsd5DSEsYMJQHaeLigkKPCJQyVdP",
  "key25": "5bPVQ6sTGzcPH2GkpTp73XAu77nXJPFRPSQSCLmA1VbrJtjbwWMbpyig26oJv3qW1KQnZep3JVSjnwvP3wDLpfyd",
  "key26": "cEJn6ThuYPq6zVZtbHQkP4RBDZ1Bfc152iG5Ddrx3h8R7FWUZ8dvVMJJ1Na7xDjBerKXmfwj1RyNqv3Ln6qFMqc",
  "key27": "35e3UKvpJbgcnT6cfT3KGJdF5BF8VqmtiYbbze31ZwQUJnZEL8UGHy3ciuyJapT8EVf5i2nBWPo3Mi6WNbcMCT8V",
  "key28": "3fAKcrqCvN6S6yTdRjEYpfjcHPgprjUZwc9YPn4gEUxmYn5vLSixT38gwyaYdkWcz8W72TZX9pH43PaqX75xMB2i",
  "key29": "5k3tKPpgcB9S59XpqgvCPKAZxKRxM95yQRN8pHsfJoyANMgQBBpZni33ZYCQjsc18KqsJZmRkn56hufYZ74Rispr",
  "key30": "4dWmQ71C9y715Xayo6hcAd3uTrJFiMz1iMDaeabQnV9EuvnPwDjYRBHK1xUhZcM7PdKiqNRffBqhAxb1wERHrABq",
  "key31": "5eRdrWYbieHn1UixJcmojXhTKQW5fRoFWanNteyVYvYX1ryPMAMYwna5MejvUUMS4k82Tyb3JsvCoMyxKxadtMdz",
  "key32": "dGNUvJG3Gc21GDgWwgAsnAJjyod1pbzyC6KDPMJtgKb53JNohu89v9qMVKRygBhRx8otjDAJH6476qJdB9BGYpA",
  "key33": "34hq3gXfwqEL8bYmsqLzxHQoE3vscprz3e1hEptCiF9DSbvNBU3CrR9r5rm5eegNCXaSk4jVaEJbf3i75Sdfi3Wb",
  "key34": "39qXgicQTs351GdsHVvJ6RyNA4WteyPrWspkeGrTZcWipbRK9GiFVsEWnWobbaf5e29NkZJzGc6vWUfj3JHJEPDg",
  "key35": "3W4gKHTvg1vEj2LYJn2ZQ1Cxg8j7czFKUbZ2S9UW3bwWDboYp23heXMwmWt3sV64r7fjoWR3y77667VuGM1Vu6Uc",
  "key36": "5A3NjTx7WRdzFPqLUrCpDUUwGnwR42sMzTqBU98UqcR6QkB8MGLgbLR5bXHdQnxKNcrCL3gvyuBeUZsLKM6deEVj",
  "key37": "3g3LE8zcHb75GRr34tHA3iNdmgf3c1xq2DvViSMojVATnUQtb8RREnrHbMNLZbXZFKLek8ykWNsxMHJHxA4Nrfwo"
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
