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
    "F8ftMHP7XtpAuVH8q2oyzoT99xw5JBhey1d9nDp5j4E9F8qmsZCmm2eravNXtPX7S7uoKM8D5d1pEdSm1pjjehw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxMF4ic5gTKNefxFKGkLtT5jPeyvV5p3x7AtLTHJT9Gm3fw7pDeFALZHfaVeThh5z2QDBnBBZTX9cdck8Yk1zyc",
  "key1": "4AL4Tr5RfyUeqispFifdwcbAqtgjVpkp4ha286DHMUnB2Kw73AxsWHKDucKBG2SvpMonC1HyFaMkMAWmzFxJQ5Mp",
  "key2": "5X67PJRq5mhmZbhi4Xz3BAdjQxuf2jq8wqy1JgS8imhcfoEVYZYHGXfxJNmNtqNtCwQB2P6uDe4oDgyZHi6sA4jS",
  "key3": "qzSihTMLM6gv4cdNZpVEafG4WszzZDA7BNnpfEUJmBsNGs5a5LY7fLkZgdqiyCwbrtrMvY6Y8ZsY2nwSERFoFiu",
  "key4": "UkAr91ErDns9YujVms9dWBdcqhzRanb46DoNv1MyJ8HrAFuPWzNjHhWezcjNksRx9vd96uJSkF3N6QuG5shotXL",
  "key5": "2APRdG19tJjoeDQnNruuhbWnHpMc2Q376kuS3GpxymapoCGxvrC3eB3WPqgNs5zC1LNjACmeR1jHDoaS9kXYHHQ7",
  "key6": "2rLySWvw9w6C85vV4stypz6D9y8GAxNysRMjuqTE7N5X2S6LQ44WPB6pLHmamiYQyy1tyEP8Fj5Y7dJ7q545gALo",
  "key7": "4Za5QZqgPJ33az2sV4DqVSCMWNq1GMj1wh9BR538gdSdi4LKXqLuDJ1ukGymkw2noeJMbCB16a4i1gjUuJkM94yz",
  "key8": "2PQwFicfXV59uQmqZTWLeDTUryVg1qFsFhq44YinfTxpjfVqxEb3XmrvTZoQuY6uaWCdvZpbiv87zBMZKwmJpmJj",
  "key9": "2guBUr1sZKz8EJdR32mjXCLscKa352VUT5C89fMGXHjBVcXWEmGipWy4g8GmYE7zbXmoXutb11vcePfsvNf7e73p",
  "key10": "4wbhPosHnCLbKiMxv92V2k2oQawkWEEqjGdx4dYCq4rQSZiHwGCyJ7sdG9P4KfHwCPjg2akexfwNeAkPMbzvpPkr",
  "key11": "iPsdt1fU6EjeFMu8g7TYfPHNb76wErLcfViFvKnMHALMi6xG6yWY4TWNWQwxvGqEuTbqnAzKAUsrBhJaKbd9J3G",
  "key12": "4fDbFk2g31S9wEBfCcPobVhMhECYHixRewQhExQYoN4mnLK27CS7cNzaroSfvPhWNUKXswpMruJTYfJRHWiQVhUs",
  "key13": "3J6DQfC4HPBWT1KNtMRHgezBTG7Xd75gTxnF58BTZXqYSTu6qLq1L2PT1Ri46BFcoYZcY6Dj8ZYTbnBBiYXML7f4",
  "key14": "2v2tro2MWJGo1K9gVy36c44JLTCkxgy2FPFrW4FLmurJBKZK8VvH2x71wPJoQakwnCGy9LZHEJ7ozuNhx6L6JSEd",
  "key15": "2Lc9QgbJcrbvFoWbxLsALBFEeoFs64xArLfTS66g75LeBu3KTmUngeqJ6UrkwM1y2FTChdFTWN8jwQu3uD5C3mjd",
  "key16": "35gxKMb5BFNyKYBJqzKNBZqkCx7NK8imdRQQWMFeRzVXtpExhPe1XUMBZzhwQkMqgPgz4qEYw5F6UT51jTNe6rdx",
  "key17": "4seeiEjgnXiUgXvvteN5dwdp3He2diMKrArY7UHbm73EkXYZ67dSJxW5MFDMxKbMogrqkbbgrf9CPDwnmo5GhpGB",
  "key18": "65mcnawra6TLRhm3ZxvR2MhaVzYmfAHHaiZvfP7AtQ1xWYB181GAk9pXK8E78DFAioAsJvomcMKjDJtt6nU2mPkC",
  "key19": "3R7AXvQwdnPdrvgv7tZv7Q7eMLSzXwDQ2tkeH5Uxohn1BJqFctUizvk9tpBfMWBg69oeSAmyrRojrhts9g3w4vU1",
  "key20": "5CKubUaf5mJiJmzNsNpPM4rtDMuVSztH3mnuhyQAVMYKZ5UFfDhicSVv9mxY446iysjFt7wkgb4sVsJBVbMxyUA1",
  "key21": "3sbeE5nKEJiKEh1Fydzi31kYW84N1EdPGPyK54n3R91oAxnrAfVhsSxpcqy6rejHAkijRNni2m3vur8dPUDkZXgp",
  "key22": "4GV37vjrQG9KhXn2ctSNwLyih3dxsS9wZCSJUJwFsytGPHysiNAdPfj3ArKYwji1Qr6CVf8hFPrEdDhDKZgyG3Wy",
  "key23": "3dcpYtMRymBxVyP92YW66xkEuwNn6MAaD7psaRiYH1u5Aj57VhhMEYNHWSjfdQxMKU82d9caLfjCFvwHppMo1zH2",
  "key24": "mG2d77QfcaJcm64gkUjz2t6BcK78dQkY5n2se8iT9FxbZKSXbEgbK2UXbMkTauDLacaeQSJqkRDCA5PP4vMDnB5",
  "key25": "2vJsSqZRZqXy2BAY7HDNwNTQnF1Efiozsob5TZtpwejZoWX7KjaqQE1Uh2xWXxj8grxomvFM4CdrHZxjMBacmTtM",
  "key26": "3BMfnLYJaeqrTk7rhAjHv1hvQEd1QQaFoevCkCBcVk6deHSLm9eYzYETJtHSGWQqtrCT1SyGpZqLCByD5D44ZmHR",
  "key27": "5ngY8uUnuj68WchVW7KUAKfE3QVggj5NQuKaXzur7R69QVsSUrKqf2YmWh6VpYbK26fQXuhTjCVN6y4UUJarrNUp",
  "key28": "1aN4dFez3wECqcWMeSLV37YtYaneHNP2FvCKCY4Eji75cWgVPiShRQWzoE1S8aDYBVUrGTeFLRPSex4fForZe2B",
  "key29": "6G8ajicC6e7DsxF5oqt5CMtiyzPuoDbDA2mGUxkzK4hB5ih2sLMV7Acw2HXmY2yQFduCuYSEFQgD9scFYiQYeLv",
  "key30": "3EzZsMCLx7pW35uJC2Z7ahutnt37NbrMdMBvEjdRUncVdw86kPjHFwzGgUvsxLF12CM8CkR2aCBD9AhVumjXJz1L",
  "key31": "7AQ2Nxypr21CutpkCKT2q1UtAXwm9JxDenACLLtCrvP5GrvtVVZwLh9WVhacsu6uyDPtREBdYGxAfYWEg3EidNm"
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
