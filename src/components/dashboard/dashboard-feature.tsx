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
    "46p9ZXtsNf83JKQ8FbPsSxjVnCmyU8oWNWhnPRm89g2zzEXxiBgcaJZJVtyhqKdzmkZ6wQdYTY3PnvMrnAKz2vkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9rrzqrsS1v81EDopS2ceWv8yBrmjw5yxY2Gm4s9ZWd3Fufa931MoSwaFj8E4CTnA3wVyMSAPjzMGiQ6XdKMGaV",
  "key1": "5xmRdxVzWABhFkcQCjrjrm1PVqJDGdFxPVKJPwWGdJtUcQJbCioimh1yzJZaAxKGRjD5hXtRvQHpqrcoHxRb7jSY",
  "key2": "25E45Bp9D3UuU7BHmaBwVbveNojqqQMD4ou3dTCU1zs1MjUpu8mLadvGfGSsE8dsxSuwtpV781hrnJvnsiAwuNqn",
  "key3": "22Yp6KrAbKT3pS3Bna2m2LxJzQHCJSiTjAT5tiMk2VMVy5nLeso2SpEYYo8BRFGi2fcjAfoD94tybWpPCEeBbcTY",
  "key4": "3Zdn9iWwtv1ABTAFzAw46nPN16KYG1rs9uHeuqJPH4itVEWkiFQqMtAHBfc6JRFnhUQdp2wNgrcznUpMbWTxtD4b",
  "key5": "3zdMq5ST5YG79PJoZHwi57cgVbEjhvR3Cu1bJHiBL6yqHMQeXwfxarnq8PnPGjChmwosF3p5EazAG1Aap3A8k1vY",
  "key6": "59W6UBmYZDrnJDsrpzHbUKbaz7Ri4F2PXDioHnF9R3bKDao2UgBM7dVbtKVzXy7uTUjtd1PZPFKP6EGZcKedJXhu",
  "key7": "7X9cHtFvZPL5iY51aqNkc2k2q7Wq6tKcGmrhGyS5DrxdkRoi8aJFAKypyB75pdUSDnHpurstfsYLPj8zXpyfnpa",
  "key8": "4spTFnU8N4q2FoHPpuypeYtw1gGRrTDNhZwvjXy9KXaFqGmb5y99bLFYpUk3zEwXrHjaBUsJkPJjpLCdwJvArVMh",
  "key9": "Rfyr3hBry5vu2tTwHczA5Qpc46WxBCVceiErxYs5oSwKkhJYuVqbDLMnqHSNijwtYCme4BdvCPDQksK7sJuzDv1",
  "key10": "44Ut5G9zYzmZbp3sfCB2gx1shnWVgHUwYKZgmZCZZZG8E8ynLh7AU1qYj7aTrDwLKyszHi3LMEJUZThvABaUeRW5",
  "key11": "ycM5eWf2uaQDd7PvNqLGraE7XxFDvMXtyc96dcUi2QKoWRSqSHSemcw5Vn5yRmfWXMcSWt3D1FENbogLhzFDVLr",
  "key12": "38HWrrz8b1wqz77xe824NUR1ihmwZRmEkScxeDA9S944xgcJLY3bAoQvRvWwRrJhjCoAWejFYHgmkDCY3B4JMsAu",
  "key13": "3kcrauHP87Rq5Ftr1wrmeDTZv8LKvSxT7aetQeCJBiy9uRPWJHWcohHCRq9HANx8wc6W2rmenqz1UWvGGfr5rL5U",
  "key14": "3mjoBqxa8WJALeDT1cMGEyzZFjVFtrW2m2nf7YkNkmxzj35yqGB7KKRFNWEwi83QN14LGVgVE5bhWcrAuJAVQ5mk",
  "key15": "2sHEN8kJFnQkffawjd6XEUdfGsVx2hcud8vAnrbBEYSN7qJC2jgyo79MEoTews91Vp2j98DLuCejkV3xGUB4NKjf",
  "key16": "3mceHa6HtpVuFeWVLnKUGZVfLkWqeydARW4TySsMR5UKkJ5mMPQJhAk2hvivGyUEPMS2YVAd8P5aYoSpoyygShYE",
  "key17": "4oYwsEY3WQGjytWZqa1rRtpKYwXo8j8R9PjPA7BvB3Fghu2vnK3sRQ4Vs7Q9G58uR3nfSTC9dZHQo7d11WXRiirj",
  "key18": "5r517x9PDE4SXub22uFSb79QosJtr9362CYgYw3uRbhyFjCzi1dbgXuRQ2WmKFgEVcxkTan7nh8XpZQabbxpWDjM",
  "key19": "4NY4HKvHdNxGT4LxJQFE4BtxbXGwVC3zLNRWD23B8yS33ZcDyUZbpxsRw5K7wNHhaPvNEKpunZSPcredTTZCuCY6",
  "key20": "xWjN8xFQDj2mdb7jUUxRGTFSyAszEj8aqa5qdHUVtbMiynBJaSzKKP2qAo6LonAkXVKFdsvv8Y5Yx78JYmsLmE7",
  "key21": "Zk8jGtFRyUtV6RUZCAT32d4noHx85f9JCLGZFL3BPKD99ZkQxbdUwC1eGS2qZZ29Z3M518VemQkdctMqHFjNnjY",
  "key22": "2qaLmaL1FyM9kUXSxovHFKbiZSEudnZQohF7qP9iU8hhA9jhLg1XQsZGwCHaabHGeaBip7ebwTZS1vCEWiqWoksn",
  "key23": "xMTeBqBAHGDv3c8niNZP9nu5b8SabUeFaegbDS3fePe4BEQVWLiSAfS8mfmspdjHijPSVawtV3EQyzAMjcDSDvn",
  "key24": "4ePXbZ8oX664fZhzZ65r11mq9F8FiELp14Y7PjrD6mHUJbJXN6kMZHN7MGiFifTeUwvc8KK1pwiXZZcVVCWNY34G",
  "key25": "47jha6ZVpWMs4qo9VB1y3LrYwbyFhbYfySmUTdVsr2SGhnMS871W4KGTTSdufK6HALFmt9LUrbSekttkYj7Ny2yW",
  "key26": "tkphhHbrRXUEUb3ks7EnmnrKcCB7cfPBHyfymVXbZKG4jC974WpBLn4yt5ufziZbsceHoBQL1NwRonMGEcCBrpV",
  "key27": "31VmCwA4EMSNgJ6RPKMesy3Uu5YUJBqzPuQGqLFVhyC4BFGWKUMggsMg12sP1zruBeMVYvKGq8V4TQVT7So4roA9",
  "key28": "4dn2CYaq21HXiAzCrUKCWeJaWwFqSJZPKHJfuaLvXGATuesq2S2CY5uu9aTp6Q5L387RnqroyVY2mGFhguLuhjWr"
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
