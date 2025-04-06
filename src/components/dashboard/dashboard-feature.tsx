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
    "WoMDaX8Dqhkb7HSDGkTBFnvPmJJQh1R31YYuwL4vibxtScU8CDwKm9ueBJKkaSfx3VGNxaRprzCFeLapk9G8wH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zmcL6QsgNUnj3gKxT2XUDScby3x5vU42eu8wwX5UEwcARYyhUE4s9wxDZBnZA1VtDVPiqfvzhgVvTAGUk3RW1T",
  "key1": "en6Y79Cu2nshhW5XrYHqZTQh2TKQXJRaXLwpkDiAGu6iBrLiLaRDv71BaXhghQmdaUgRmMLToM4iKPHRG8TAxsV",
  "key2": "3LxjRAiS5yjm12nqe5tj5mrKRsPBpPcAzphFZPuHAqnNhPMg8ZFmLT9diZRVYG36j7mVZ6qYY4M4974WVc8M7dH",
  "key3": "4EkRqBLk9U7xM61YCvKJKkhFYFHFBmhZtkajgsW9DMXtKttNWbqXtgiLsdHEmuLdtuVU8zxKwd8F3gH151qJibyY",
  "key4": "5Aig994FtsFM8yf53VFidmyYXHuPPNiFYSVYLCCbofYiTmrxFrJaXLPzHHBVaws4pczJMxBhqAp2XavpVGk6LUqC",
  "key5": "24Fj1QwBCrHmkxg24Zk3LXEP2df3WboPA4Wubb3PdYsyu4qtebyRqBpLD4kHNVU2j9DDSoFjFC5XJXzm7JGEgNyn",
  "key6": "3ouuzb92CBKhhaUtNasV39V4EthJeRgWq3TRENZyXf5mhCyrP1pBrqkHPkvT5qihWKkT7H475Mc6jQwyjZuJ7wDj",
  "key7": "3th8kei1X5Eq2tS7prpuiWLHyH3nqMy2KcboV3DCvNBfH2rMR1p9tKXFwXTLJBVcXD6PDYuzCg15vULytU7Erk5s",
  "key8": "2QuTenvRQvBCctruMSz5m86ZfJNsMJy537SLRSkaR5y3jp6wbZBRyQnBTVVQvcFFbuR5io2hGSKFpsYUK8S525Gf",
  "key9": "3DSoAW2JkwickufEN9C5gpszyzoXVtfKAQXbTyBFjtywyV2XBU3rUmWoqs8SDe6v7aRpuHLrEgnAaaVzKmd7uBUK",
  "key10": "5j3d8sdrZaNDzBQd3sB7oqQPLHgXq6Ms7cHq6yHSkAX6jeqtADT8KEAAvbGvUtoJAAdEZbQiu5jdKKSW9Z3iqmE9",
  "key11": "5W1DPi9eq7JEHKRZXutreuaB6d3muZn3VMXDz4PVcQzQL3gF94p8rcJ9SUrtGEdMFQX1YaZh2CqryP3AgogDqYGN",
  "key12": "4uL2HQbzPkjKUDzeTtANzt6LcjwUqzXGECerBaNSJyrpySPp5cXU7M8g6Jj5xWy8VQCjADgoNq9XqSqGTcykT6ZE",
  "key13": "4Qmz4SQHnkcMZMqtoRMvPDcsjeEqdcQttefFLEdjaLn6SrKydrCnqnEvo6fxAmpF6845ZvyTzpQECHfdRFocfxqA",
  "key14": "dma8mSYSZhXCnVjyVDr9wNux6jnrBZBfQC4WdDm79cjb6UAEPVTHZxzKZ6McpuHQRpXXFHRLoLePNFoyf5W2yLd",
  "key15": "2ZqKCB1GVGFSHDybupv6yNRyfp4QDR2s1XDo9d66Hmkrgr9ZbLsWqVd5fVDny2vHRB1KuUjg33dk6KFkZeZvCpcU",
  "key16": "2AJaToG4epZ633ejC96XPnbBiyWH5f158SYUsHbhS3ZdJ7cBTCRafn9xYDDQVkJgcQG1NV5nNEuXHbwBT4CwjdXA",
  "key17": "3c2NJDpXw4KdyJY3EWnVQXHTvVff4htoay5mxdfXNF4p2JUoVAnueHTx2JoiqbVvMsb2Zx87VdfomXWCHcvgUxow",
  "key18": "ioexMouFbSjueGBFaN8RK84VgByHMZ31dpTAZozCx9X7yemFcA3EAH1rDSpbf9XJNrHrYum9mhexND96oGNZLaS",
  "key19": "5MdYM1LBBrkz2PQtEQ2nZr8FFoczrr33gUApQpjK8Pd2MpuNoihFfQSEFSbcSuduUByqTYvMfnpJyWLmtjcqKzaJ",
  "key20": "4oUP487w5QKhouNT6gceamqdWzdiUsERr4VEhh4AWRpQ4vXANj4WhXTtmPDc8Qo51VuMLHpVKVpiC9JRgaHq58wZ",
  "key21": "3qMNSyjTMc2oKRdEmf6oFsG2HAFq4szxKjk8APfPrvssAcCHkkVzs8vZWN3RaMnw4zhjXMvxw5Wk2pKQCGLdJ1y4",
  "key22": "VBDCDpKivmK9xa3ms5sar2J6wVQBfcSz3BBnR9Wg8iF55yMgKfW1cgp3avcBYU7qDEbZqLBHRSrF59EJwdgZ3cc",
  "key23": "8A1oRUiZtnMZknjziwpCs7jqpoTenX4Nt1JFT49EGBn3peCnbi8bgjqCMbfx9d3c9fdDLCcFL3iZn513EHKL8Tm",
  "key24": "53LHVVj5ABCUMGaZLX9JU93jjTR5GQKuhnX9xoYdnRDT4S66Yoxr9FwmK6qkdCoYuaQ9VfdeWWuRs5e2BEosAvyc",
  "key25": "21xCMNZTSV8tBJJJMMfWeCrFy1XDYwS3JjraRtXEGsyEpJAxzaZ721y6puWAwvvNjvEUuKzyJiVPWbw1xKwctHbG",
  "key26": "5aY3XfC4XnKDB4f2TUdBu3GGNJTS7i85Jo7LdvEXJ12GtrAEzx1gFrXFUk85uUMYa8ggPvJsW8fnYS61sSKFMgEC",
  "key27": "y3WJ7VQjtTYwtXXFjsjNbJZgaoVKJG42oidEan6VhTKT1F9NL5hZtAtouzGyix9JhpCF1A7bs9xTztyH5EpsBtt"
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
