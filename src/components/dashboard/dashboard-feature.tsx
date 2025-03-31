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
    "s4WEQ4rcfqCQtG8xEncA4WbLsvXFbp5yJjzsgYNV2S3iXWhYnY6pk4nJ4xp7Rfx85ndBKSNriH3tvckHekwcvqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7c1FbFhK8LoLBkpiU4x64g5xqPxKfe9hBYwtdXRwsnhbhEPeg8sWW4KFLNR9rFw36o2E74WcUm1tr829CJhgMf",
  "key1": "5aoWGuE2jBFxyq2498keH3rwsxipaeG2uJU4N91GbJi5oyBFzZ6kvGaLZbjvYWyyuU7ecThEJDkCwGJMHzHhMSRH",
  "key2": "5WQgRSy7Eqw9KUzB6AjWd97EcJKjcR79a2vkBAjTgvwvPNa8KN1JsV3ncpKukzJNyq8e2aHZ1uB4RXJg96jEyE2q",
  "key3": "4cn2fKNyhmWVZ8msEp3EetxKry8hKpw74qEqE2RaQKPfx9UC2qqWUBe1Z2XYyVUnvsaikfHZKnJSPjL6Cy3bkxqR",
  "key4": "2715BQwozaWm72VWzGCnFaCkhqAr9pctixJJTo9GnWVPVuAMQZKEEUPpG1k8vczoU5vu7vTg1QgYskcJ9dCEFZSk",
  "key5": "48tALg34b3NcS1XDDLvNtvD3C7gPyg3k5iDiagYNCT5cEm2w1LWEjcLJSH25RCvKMrn9SmZyaqduegULgKj5SijL",
  "key6": "25XMGrSoXBHapZyS2ToTksPRTKeAbVeRCgiwotF3WXsmMRMjrhN5h8NicfgVBgV43AXcCeXwN6jqfYYSZw3UGJkK",
  "key7": "44t1Q3biYxVupG8RFGLN4ZgpCFzUm2nBpyRHGrHKH6boZJJUEnopPoUmAe2eQFbYFgMq8mXpxATfKSrWvCWekNbM",
  "key8": "4vPfRgrGpeZJSGQ8Y8XNRdhH4CYX3ZtYNuCQvVrBpzuYjimJ8ydwX8Fr9XGc1PieAp4ckMGGxojkJtpr4W9FqymM",
  "key9": "2E7P9se4uc5MVoBKjmqnoeg7n5ZduyX9A1JudCdxpNdjmXXFgZWjZxFZytNj3CT3sGkwKGQ2TkqyRVG1nBJfittb",
  "key10": "2WBtRLorz8YQ7jhJkyY3nMQSf9cc5ZwRL9GRD6qEjZoCoaL5ie1kjYNkrXN2mbYFfV5UPEQmxTVhmYmFAiuqhYqx",
  "key11": "gWoYoKqKFwEtpEi76AGk5sYdQLGxnJ6hE2q4CuNVZmHV1hQKEUrH8wPNhoDZPDjeM5qzyScNh2sbwesJ3baMZhD",
  "key12": "56CThcHJduzjUTJAS8V5rttX81PsW2DvVtzF4AHwCTdrVT9zoWWbbLyeUJ6rHPmgBUAdWzhN7pdkTWS8V1MjRt71",
  "key13": "fkee7LubxaVb4hF7DN7eUY43YctPNDCRGQeYjwhKUKPn9jCKQmq9oz2iwv6UhC81t2qt4W8Whh5nhKDxnPNgCJN",
  "key14": "Pr1Uhz6L6CMFevGnGw72111h5eh59zS8bjMUxDxRLTCKLgaQyXnX37hWqeYnyf4VsHw7DFaDWqCrRhRBDkRtyCS",
  "key15": "d6SPTUeXJ1B3UVzniDuwYhBuWLXKyrBxTKQs6fLNB4R7tUpND88Wuw6a62Xt4TyPhGAbbhmK4YY4RLYT65R8c6n",
  "key16": "4NYEuKD2NxDjPKApzzuuRGCKr1LAo1cejuFtF1uwV5mAgWz5VFucJXparNsVcoSVFuhvTZ3mACCWazF2ZBQmmoZc",
  "key17": "3mHGzVFq7uedh1KckfnVDHBTWz6q3sVdGZvDT8VpwXe9ERB4ngDUcRhXKRVUEvbHb3EK78QmwQVm3iMA6anFSXEh",
  "key18": "3DCtAj2Ji2hrmf3BTQmcPevvHHF28z5k8CjJ4oUpxZ2LvY7nooe5WGSgnvCvRCb9Wpx2ySghioCztUbAq4VVmmWa",
  "key19": "43bAHg7UxrEzvZ74Q9VAtErUf27pRtyJtxLdEm5bY2tt5cU6CERYz3cmLV7ysETULNMoJQyTknVkcqdkvuZvb8pV",
  "key20": "3Dj1LaPJUVF2vAfnuTdTRQe8nNgHF5Htziqsj7D8KanwY51jHVk3rBmsNBcHu63amyiHLtX7knfQ1YxM5DXpmRXj",
  "key21": "5FaJHgqsP5sZBJ24gxTSvkj2HoLGsPPh7CDo9sggMh1QtdKxBick55R2aM76W7cgd5PSgqymmyt7P2q2L8Wr2Sy9",
  "key22": "5qx5xrWW6Tg6B32qeG7s3EiR5CSRv2DR3xPLjiBhdjRdXAvf2F7mdgZR7T9zvSWhaNPYPsJxCwbG6RaUJar1dmkg",
  "key23": "59exUeJi6x6QUuAt9E59fRSGmZo3wiKCd1zEwE6E8G8HTgRyv6kvCH5zg15eFRziAznqtMPDzR2N45SuwAL5kBen",
  "key24": "25TDNG3MXExMQoL5Hp9Sd6RRU4DGcm4BtXwNDDj278hgVyrtGZDsSmErN64JBuc45MCp21EHZxUWQHDp6xK8WsnH",
  "key25": "3p8xccDAJGaoa5xgUbWcBJTQqQu5aN94zgVhcKhZQ24U3xF2aCefkzYaS1kFrN9Ce3sWra7vEbMwMdswYzT9DzMc",
  "key26": "3ngtzBouZhqgSZP7wkZbRHM7KjV3u3vYVtAn6q3vbExdg3iudLbt8ZWVqn59BQdxm1TfLiLUz1p67cKNvi5Gc8Lh",
  "key27": "5PfqtV9BQz7eARNVaD2o4W7xvMk1WDw976VDfgjWz9DQxDCcHKzDhGYfLoH7xLhRfLAdob924e21J8LxVTf2ZALL",
  "key28": "5HN7Zfmooxi1sJfRjB6UUG6YNQiYj7bmuh7Cc9NKzsbgi8EbcT2c9iqT4BCKKcUQ7WQoskzUTWZySoZA3UAsv3Se",
  "key29": "4SL2c3DhBGFHSA5Qag232rwNS7tmAjVLksFrgDCbKwMoS7ZuJWMo92CGTmgvuTZ6gQU6zehR861Xa32u2DyE7YpM",
  "key30": "39PvPduHnyxrYCzpzyKCLBJa2RnT5wLkDfcK3x1JwqEmXD8gxf9RYBjU4Xt7wXUVDP2JqcEvYZmH4pZQQnQohKxc",
  "key31": "266tXL8wdTAXKKYPLAUibZbW2jrU2XUrUXYBiDLSTd1miyaRe5tPyaKtzpMnBFztKzSsLKx7pvUMNtuoUmZtZga7",
  "key32": "3Ry5mZJYqRHUhs33fF2V5N2eN8LKBXpA5J7fUcEB1zeufz7hUDf9PhsnF6W2t6MtuSu4hCaBGgHUJfcmyyfwQW6V",
  "key33": "2nrSGxV7dBqJ1xbF2Zgs1hUZULFKiqrYygacdx83QDMj4iL5T1jXF3hsZfLLsMpiZU9jmxgrUsuzJPYfUNaVRneP",
  "key34": "4CkeU3nDCfNCTS2bPnxjbc1Vma1pVDdATiLRCbWGniz3XrBknL36Sx2uSBf6KZFhMHrmRf3Y5mdztmVthVrDpTH9"
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
