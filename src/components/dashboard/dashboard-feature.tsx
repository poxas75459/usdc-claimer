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
    "4N5LjTYo6rhVeWom9EdBTHWAcA3kwUsV3SdbwagTcde6m5wXG9XqhoDtEv73z9sjgWrbv6iP6uvVWzxydkDN1wU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8kin2LJxmiUh6K5CUR7PWSdCnb8dp8Qt8k9uCZRyfSVUJmKS59P4d441Nz9cdh2fGJXG6UEBJwnrvHQ2KbVUGs",
  "key1": "uKGpVcsVM69sW5tiKBjTEmnbGHPVicMHZQ6nJf9d1JTRD3mjgGbysbg9bERU33Rqxs6fiie6EWhNE4EYfYJsoxw",
  "key2": "ex7c4xJfD7WPBRkGV7GYAecM4wPmwsiea6EsSg7Ch43ugjLwEaeygygiT4XuAZMFRJzE4ShAmATC466rorVctqF",
  "key3": "niGjULSFE1jJnbsbLqS4gGMAF7yiBf7ttvqtxxnQccFT8Jk7ekPFd7a2GFCgTnTPh5vQ9jJo6HApMDefJ1gDW9m",
  "key4": "3TTj7Nd92vfNsPk4BYpx8ogepLL9J6BnoQ3woomyKxHWWuPkvpTTmvWacsP1cyP2QDvbSXm6gqMVXBdJuFnXiSCA",
  "key5": "4RQw58Xy5SsAT8ZarbnAFvS2cpzBmrV26581FhdboExhYaEiENoZ3kEAwF4XSvm85CvJWZZg811oRdMLCtmtSAKD",
  "key6": "56fU5AuGR7UdNZMdMVDfomp9mqWkEXYhmvF1PX31CNfmmsfnYY5J7jumK1pT59E6vz8mioaaKEFhnB8qwV8MYDXy",
  "key7": "44kNBe3pAQiqwgwHiW5JcVLY63HUztJHoCu5spojRY51wadxJawn9NocmvyTePJ9J2LDJNKAPBwAxeNJTMVwLMJ5",
  "key8": "pHxbjuyLAfEF2bGCC1TSUysCePzDP9Y5AJ9z1ZTipfAgWfFTFjNPY9C6fDDXCHUtEEJ3UEcjq3hewKheUjyMWSX",
  "key9": "3ojUsrYDeW34cEB2nFuXyyq94Y6qsLrx5JUdqqhqAokMcvKptFzU3jcjeFp2WdVqFjyuYRQZR2oNHFF6CFSEwShc",
  "key10": "5Fj5Gdrbfx4n1kXwoUicAPgxXrGLsCNUgUU44DbbHLbYuDyTAnQqRNV4gSwR3nEFawPZc8HSVCQRf9EKB9dYu8gH",
  "key11": "5zA5hgd1CL4NdEvocm8UoUUaEHjJsfer9R9orMzgd6TBM3oGfszcDgNpzYjmK9Hu5cFb8nrxZkS5hEXMzq7qHSco",
  "key12": "3RRdbKYZofawK2t4LjXhj5pXNu8NM5fSgMkg2ZwDu3faLWKANcPTTwESM15Ta2ZnLfgduEQpqkjcmxGTuLSz5bLh",
  "key13": "5yHJ1w8n7F8fa9ZDQUfm3RKuofT7oMpvQEo2qLbm1ykZhkNQ3C1awb3MwxKR8swyXqPLW61Xf2KiizoutnX6TBe6",
  "key14": "2GNAhAPC9rM6YgHMvWBSwqdH8vAt5MCsyGaZQhMtVH1kSQi6fkfWvM8j7gzsFz9Ejaiy3dgpuiNJfte2qb6GYPnq",
  "key15": "3iRfZF6jZa5FVMRCD9GYzFXKaRXV85apubYYhQLkoprjoEncGsNZnwuTTPb1Pw8nZRkHQ8H8YuqUGP81wwo7KQuH",
  "key16": "3Mc54jTQrXXTGo2UY39yTNSGMMpHzTKFDZ64tuMMPX4Qvi2uKDuUBBg2CqH1A5CP3B3DCx2AASiZXG7Zv4MD7Mx",
  "key17": "2gwjvgLdiDKk6aWwMurwQu7nMrXsBuXmeCBF2W2b3ZboLwMN7J4YtTiibKhKiJ1nwHbWtvA9iE4dd5DS5kUjEQ1p",
  "key18": "2cvbMD4d4a3VQ712DLYNcGXqjBMbLHouEVdLhuo4BT81JuuM4ZWrMcq4Uy5YJQqFsQ1nPNuETCGJbZk3wg6wuGvA",
  "key19": "TeDQkJAgfdXZydyVTmt6FY1VQKsm2Rv9GBvr4722ZQvN8edQjs6i9DWF1tJWS2U6BwtgrbqrrQmQHQjfbCPZycw",
  "key20": "vSNvjjxwh1J2dhrZ816kTenAUqQwCmN8W6ZUUWXbAGsvA8f65Wy7LBypu2ZEBtX5LssH9V8GcNbczg8T7XkMTjU",
  "key21": "3AjZbZru2EnR2teJBPdpZMTmr6vTL14L3RmhRjgo4EN4NnJQbLDV1emRMaSWmADmpGMbZFYw7pHYGwNrm91HXjsq",
  "key22": "3XMARgmupq99FsfPJqcPAmByj4Vq6iCbY3pRCTBToEvgxhGssWL8pRzU1uE5ZybfEYeiNahZxhrztrQZTXJEA2ah",
  "key23": "jTtrnMoJ7cZefBm6SX82HhB8EkDmnJZXFJf6WGYiz9grmBVBVf2HsLkYiicVM4NjddTPmSUVbkgeEBop4rKqVTj",
  "key24": "5voEdu9PbqwbZSZXqwSrfrpZpL4U6RzkFYqe8GQPgMrZwKqo8NS8a1kLoXFN5VibHYYDY1LQht7x3H1eA95eMixi",
  "key25": "2YWCqp7eodTnPgNFLWH6CfpmFWrmzvy9gr4mTpwfSjiwG6T6SWQ6GrTCK22wcazNGXK3x3FHdzaDoDNwoXAqAeMs",
  "key26": "2XAmmnb9cbQbEb9832YBiUFq56oZbMouguopc8PEShjAQqcNgRX1n8K6UwYb43M8sE1Wf76gf9ToRsraaT4CMqXq",
  "key27": "339syXkccZituiS32BziYTMR1ycyiWMPxSPAh9NuTHjfpwy7U8ZKp1MoUjfhtx56JDjq5WXCPH86engYtaM5MdTw",
  "key28": "pWPn7d7hwejCfvKj25k1fFGQibB6jB59Ns73P6SEbrgHBWcdytotMTNsoUHqG1zVaLYivkFH9XDL1Kjv55ByekJ",
  "key29": "TAWcK3DhG4ECnCAbHZQ6bWg8ZkKqcjxJDd1ModevJ6i1xhgb2adsWQovHo5UNM59rrXMuDAry1ErhDpZuoX1yBu",
  "key30": "xQMBba7f6s9ysMg6Czfdjgg6x7uAJqx3iCWFaEwhhBCcPadtbtA1WtsjFmDbCyukDNcvsVHEfNeKqcx4pES3dh2",
  "key31": "RcdrLR6TrcBkmTu1LzLDxf87U7ExTN8QTuyTBXLATxM9eWxFHkZvwBDeJZpiJKoKamxxPKd6KRTj9JbvvqVvbq7",
  "key32": "5K4Uoz6kcwYR2TtSy1gv5CjM2m5GY8bZQ5rYWUAGdauEE7zeRd9Dam8zpBWYBYD4cAYkEbH18K6wMfRwkkbUzCnr",
  "key33": "3rHrTimnRZhwTaLXdVLqSp7rRsk1r6NT2SLT7uegHRSLZkdNU5a5Hjo1SgXYeVStn3gchR7X1riH4E8McMEpzyu3",
  "key34": "zVdFwNrCSxv2cfWmYm4W1ayodwJUgEqbgTgc4mCmHtKdWAk6Bhjed7hprUJwYLshvUQVSPvHcrHrg9qaPz3VhZn",
  "key35": "2bc9AmUTDcHx7xj9toKrVRry5it2EBMqpMd6f3L8GzrU2eProHd5o1sdv74MKsdLyoegvGaye9GcbSQqFmD5z1PM",
  "key36": "3WuqheCbRxZ9fbgBPtvDSgakpmQ3mftM6Nj3mYveapbKydqpks7TQM1SpVDbTF9iksewr9jZyTDet6uFBWN2F1RH",
  "key37": "4uoRKc5jNVwvrczyu1c8Rv2LAADj2xvGxYFEFLdz1o4Ei2E5VY3uczqSsf8s19tFj3ovA5MCpgLyygRUvU8K67NV",
  "key38": "2vYir8kyZrYHDokwJiMpe2LX8vpr4nex4T5yt9xucrmgoGkBFmrMiCpJ4NqHXRLqkrPewPp8oRk4qSm6DZfM34xp",
  "key39": "5shSts7smXtobsRwY5nsk47a41nAZA45uW9YCobPtmUtWtzSbC7ARgVFjwESZeH57C1tkHAAHSwcW2CtGb2eQp4W",
  "key40": "32gXn5sSJ4A3nuYrj2tfkyJwqAQS4wXCcuHoCokw8bud6D85daxxCnuoa3KSdfMqFSvyGzvY3B153Wpx3rE9geYa",
  "key41": "2NEtw1t4aFnp9tRUYouoRibdM7dnWN15WxLxeu2nw3dSDomurYJaJisi5vVsXe6gw9ake4FaTnRqsKgswZwuZQRF",
  "key42": "MtnHztdEKrtapddHG5HderjwQUC66QL4VoMHBaUDCgigZcayTHdy6AHmyMuKhynbvGyicmsMqDFn8iWpPhe7LXo",
  "key43": "4v9Tj1S5ZE1jhA2L6skXaMK2dRxhv7MFnQmVBghXy53Cjo8T3AmcgCBCb8Spoc5F8sz29ezEr7aoEdCgZ2uxVgsf",
  "key44": "eom7pNmcPDuajBkYNreP7eaDSgNB6zDmCe4G4KqLYKCzyGoPS4CMHhgHDNSm6R2fJW8hWCamoGNVoqpSZimePZb",
  "key45": "5A2niDZK17RjW6UYH2xBDacvfSKG2Gub4ZxrEWPrXCGJ3L3nViRz1jfZzFTJYDUsxF33ACuCzFheqsTcWnjaQRzv"
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
