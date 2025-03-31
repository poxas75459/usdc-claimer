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
    "3MQCadfdboTrDCMjpzJ3geBUdcsQoifzDHqsB52YyutuwozDDP5m6qps4ZJ2676Qns83ixCxzBkFFA5EZAyjGXfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMtd7BFhhxwfr6iCxbfzkdD47aBfbaEPBRs625YF9rxHCnm7MZyCSRPnZA4oXydH7pGWJirb8PatnDfodB2tXv7",
  "key1": "4dY1AMuUv88LPD6nBB3SsmQicgsevxVrExtgvyD2R6ThxDkfdJw32XW9RvF8MDfK6GHuApst1k7BMPqguJuyC7gL",
  "key2": "3mXrNEA9gxkgSN3sJ9tTjmwJWYiCEtgMM4ZXjpoQS9TwGZzjXSrDvFxqm3emripFzrgwUvMiQ9npYs4eCG8a6oWh",
  "key3": "5vdJCyb4zbu3nD8ZCcmtWGTGs7RYjd3mFWyaYL934Byr6XR6BCE2M1c4KqF6j5UciPmU9wyhZTYUeGD5Y4m2mQT2",
  "key4": "5KSZwqrvkvR81z1SHTKAF1Xr74tFq1VPuKGrv3jbFjA4pq1Qr413bA2uFbZmq2GwLmyviDWKfU1Xek56DvoWHRdt",
  "key5": "5MkMeeLN6fME6V7J7jw1mZV6PH5kS6yFxSdoLnZsUDBvVEjeHARaSGRYTcRGvCmEcGakVnQ8t4Xbu7h3QofzuSCe",
  "key6": "4iwUky7ncz9avD9EFxjP9B24KQ2okAp5BeX712bAoB3HDrSHPtywmMbmwkVa3B6EAns7PEHbk5p3hsGjgnSwAqdR",
  "key7": "4K4reG24vgwv55pDr68AfQPU3CeLekaxLG7urDtmLnJoFM3HMnMUHqDLJVBx59V2TXX4qfu9134TXg7kommeZ6tx",
  "key8": "2ABTiooUtJhtKcahyYs4dFPzACmv8hNHjL5f3AabHatvGcUM6eSRjAqzEY3RpnGgpbJ4PSHWCD3RWMyhde5YcJpH",
  "key9": "8N9QuxEaTzWztFHRYXvmor9kdatC7v6yC78ATntUML7RiEgjkaDkVfUoBAqEYYBMoBVQDeJsa3MCJMdi65FMkXC",
  "key10": "FxeCGEK4iJybdUbcukQKpNmGaw616emRF5caFB2Q6YUcYYqBNjRRTHNN2Yhad89taAvsNrDUcJ3uZQLgp5GV8Bh",
  "key11": "VGBUVJ8kG346W1Y4at1ACEiGFHo3FwvmB9Kho1XW2dPN7pyjgnYtuhgKAVE9PzXn8K7NBECMdkgiAVRpSWPSMf1",
  "key12": "3N6gMdBJ18M3Ei6Jvnw21nH1jAWnAdSVEjvcdQxqTaNqYDA1XsrBqRHC2NhBV6GMsiAdcDREez96SnoZdfvuCAMR",
  "key13": "oCXxXZK2jpjhY91MhoaHn71pFmuXQuPJ6j9VRAsAHqoALVThsL1Yjn3Cv1RmhFXDMQaJBSPAtsJnMbprFu6Udi8",
  "key14": "4x9teWV7UdoziMWLVfQWPmXdNLnoZ5oCCzGYj4Lba3dD1EvwL3spXKhUyrRAxNaXSXCozSwBkBha5RhBwC3EySkp",
  "key15": "3KKLviDXGpBmnNeJKUuYNhmG2z1EoKMCxVCRAtvgFsDZYLxFmUpGhjdt8BDVmoLw9AVGLseRjiPKNx4iRP1NZrJo",
  "key16": "4LpnX49knpTRd3u2SGdcMBKGPRBanJ18CtJZBz3fiBYuirSLrwkBfMLLtRZsv28vKHqjTJvDq2MT4qZYcsNBVLMJ",
  "key17": "PUVgMhdPu3rST35xkDmue7LK2GAm7uMsPto7s1U6FvRa31gBfXMaAdTySKF1Y2uKHLvSbEZYV1ScGfy8vkWY6jT",
  "key18": "3LYp4Jwkn43ZHAyk1QjHmGMq8WM9KiAFy3Brp5J3moUpdQfoBoyhnvwPxpLF7bU96GWn3G3fBkT7h2GbwjhkD4Ti",
  "key19": "4P9qVKFRFDVz7A5jPX5cTCK1RFLY11E4NdPnpxrmny4KcRzJu6cQ3BXqRGUVao5yH86A1qBUJCBPpicYqg6brcpd",
  "key20": "2ffvQZ1NS6u54zAGmkPDogYY3EUZmZXLrfQFbngtQkPYj3y29zofHn6Z1D7pRwshzhVPctj3PZo41FGZXLQphgXF",
  "key21": "5BLikZgXUKKGDN1eE3p5ByKzn1S775hmzoBGfCF82yjBkW15ULjZzysonyM24zLFLL2JNViH564TCXokzcFFfZS3",
  "key22": "676hnL54rbSMySnSyXH6im6wXzKGTpyjoRNtE9WcxcHm38qLVuZD22guxBB5bDxnNrFjaUYspoUkgqbEJs8DRArA",
  "key23": "3c9eLq59BZUE9TD2grxU5FAC9pybX5h3VhVznC6mw6FAw5WQDZk6qH8YeYEMGoxuNQbgZHrK7RK3s1czk7Jtkc2L",
  "key24": "5E962MHHeiR5HS3aMGw8Su9ySae5eR4XLHtQce3twEu1CqbBY5eob3QS74n3nWzEbt9Q7T6qp94AWHUo89LZ5XGe",
  "key25": "26i66iUwoyMHdWyjrCDKtvhYC2kke96zU695riVCXfuQqTxRhAyybEZex6GEdZGNTHKihbzVejYjZCaqDidVTGtF",
  "key26": "6RztVoPzfjJST6y3mvm8Jx4kmT1meNLrjGHfPL7zp6P4bmPP3P7mEZXq9DegaNGzQ1EX8s2363rKzq8XTRpuGyz",
  "key27": "5EZfUSTrv4gCwwBH3sJwmgKfwfaZwkSy1Xmik5m1Q6fLStya9PzwJgqu49DtERJGbvP6irFhq8KfXtDhw66Pch9A",
  "key28": "5dFqDWdWdS5A1TGNf3ZDN7c8GaHfsb34VvJCFoPj2PkwchaQm2vCRMLiRWbYPzvMwz4Rox68yJv9AGWqrCGnQ5MF",
  "key29": "2Mjsqmc58mW2SUjTC2izhTjGnh2goJWKxn9uM23Gy6rmi1AaSFqcZA4rkYtaVLJFBuvmYPRZeGow6eeUJBX52WTx",
  "key30": "3dKL9WUnTT39w8n21YD3o2B897PfqCq5Lb7imDGRv3UavtgjjLwj8emTLUEhLuC5hs84YDN7BcrXjFpovJavhUH9",
  "key31": "VsYtNxKpneCkiBnu44K62USC3DWugn7BbxT7dW39PB6VXmbrXU63SfNthhBdcsHVDBfkCkr1kZQUN1nktrg9WLx",
  "key32": "21LyvXcEsdqMn3HpRWqtWytJ2uAGy1xM63Zo93LUWegAfWiKF4Y8DeAsuKQZ3CReFxBcnBQS5PUVSuCpcC7Bshw6",
  "key33": "5M2bFEkkHbBc7jiSvSUQvUNu6bmqWhnqJXf4US5FPzvCdSGnXuruRyVSceQ7tDgbQ8YpSqZtJt4aUxdXGMrUYW4G",
  "key34": "2XgxUo1UaCqCU3T7njGmvKB7mxQwS11RVeTnG3pGMUM3KUMHeA8GXJ6hkEZFtavK1Zo9Mdu9PY1XFYgc2EA6exWJ",
  "key35": "4GpDZC1HVY7mkKuGuFBYpeFnzQBtAtZtMPJmhtj62k7qGCfo7BuFLLsv7huVxQod6dFPreHqwVNisz3cmbYkJ2xE",
  "key36": "VTnd5qJT935EnivZJvPFpmyTzrUhsKQGQcr2EufwW91rR3PZksdhc1Ypway12fRTnAdVJsxHanR4mnVvqCkb4Z2",
  "key37": "RR33oP3Bcg2Vfncyn6ZsGyqHmK4LWe37n3UvA4budL44qQLLzZ5pjFitbCvRWHsiYLfwLGbHjAt3K3fHiwZNa3y",
  "key38": "2W5QXsbqZz4jATEemUJzGAHGd2av8g7RXfC1jyWPeyJsxxiX42NCBpQigS6Jgpc5LBHSXkDFj1duzL94zJVXbN2e",
  "key39": "4XmywMnNfSfvfm5yEbQ5ggKHGkhmQsM7zFVPpvjvEXmxvxUXYcTvZd2tDzVkEWnMaMYxeQvaDDS21TUL7Q4ZWbTg"
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
