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
    "2aMvTiTHZ8hh2kAbsAvwVSoVLn1id9LAqNfjGZf9pTCwMwEnF6AASbsTK3gW3bBwdRdNsnUwXjQsV3YiXgjh8UQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3PNaXfGFvKBqzkjETzQatFrAVPX4wwVYDRcndoGsUbfsJfp8Bu5n6M9GY1ALDSnPtKFYQnb9zXNi1BzTjy7QUv",
  "key1": "3hZqsQx1fdP1Rk3UcHFfNRM8NTBn9FD2XMzdzVKccwnpVQd9dv6nskaSi2c8Ut7mhFuWw5s8CELGbnYNESS1yei4",
  "key2": "4pRNkyHTDuXHEcFmHobQxE9ienswWzgVFWS979KVymzZLGZcibZ54rH6gLT5HdNAhN2CeAmJbPmwwpdf9Knas49U",
  "key3": "44vZs1x9MxjG5U5w3379iLt3DF2t4wNkXAXmrKxczcnEQp6m1WSz246ALGZ7JzSd83nwRMiXoHJUJYqouuNXkJ8U",
  "key4": "EGZuK2GL5vVbo2uiCdK5FX74ndEXa7hrifxUW1qa5qZ9UyeJptG8JNDshuvdkx98HRw36P4tTmC4rN2XrAiGvth",
  "key5": "2s8bjWQq3LqrtizmQhcJwevwoAyeUXMZccErP3XdoT3azvjurcrL95H4LBYt8GAMrLRRJfbURhW6jKGjxYXzLT2x",
  "key6": "4NDxrX8NeDFbY4Cpv9TrxwEe9KohUEY35xH1XCoWvNKfR95ChDBo7QZ7XyZNBLTWARWb1mm3yqM2xzHMNg8nzg1K",
  "key7": "2V2DMhAnAT15e5oeia2hoXABh3B9fN2N7Q8TricxESav2th2smgX2RXT5FrfDKHsgVVzNpmcL94uWTmY9KwSELYV",
  "key8": "2u65XFFMGpq4ys4gF22GFa1ras3eDRB8icgkLvj4oRu5MZ27RCM8VfNosNns4w1QQ5YB4cAFPyB5tYPPFB8P2Xn7",
  "key9": "5UPM84AAp2vpUTL1VunbrgTWjqtuAHzSpwPmyFRWqzjPbUzAdX1qDxPPryvEXJAr5HoLdSjkGRdWmqQKX3eqAJjy",
  "key10": "2v669gaqTjLs5R3bGMFm9oACmSx5c3Mr3WDuvshVk1CLfRYgMbPFdDdBarU47LQEzTdhRzx8onYN4ZKANB5J7MmN",
  "key11": "2y8AiFSEuT7Txm8dK1iGFimXe32YRcTv95eGvwF9j13Uz6XruSZvkMkHHzbax3CcR7aCyK7XRHM4gJjVn8duT23m",
  "key12": "4dC5nFnpMVCUNCtYx63EpeH3LtiMKqSY3BLrBrDmZrxGPx3Qe3ftpShPL9M51ddexqiFvaKDsXL63supjFazNm52",
  "key13": "2LdrX4zU5LaRuyWGvQQoXMwXqk6aJtPEYrYNTWsQ7hdin5V5uJVfnhaHN2sAe6qPGqLgJDeFt3Tn5XNvkwxYLxxr",
  "key14": "2n9zKLeLy9F3Ri6kWopZcHDMzUVJzt8rLTZDe6iyJCihK5yvpcC4orDhEK8nfSCm1Rvg4NyuV8jzehu1uSW36Sc6",
  "key15": "5x97WeZPtaWdqbkyDHpdRp9eA74QxJ9mkaPUqgPCsVEfwd2mXBgRnBSSNrZoorPMPTJeyda93XbNiaiGaJs9JEN5",
  "key16": "4Tt9c5x5mRSgwLnznPymXFLWUzRrHbeM6bkqmKTdfeqKqtbdXMnbeMxFSid2pxd4NNxTVJAC7KRNQcEHsHravPJ8",
  "key17": "5cb6AAYamawx2dpJLy311uMMhhyb3Ctyy7WFTZVdt55SGvUhGWzMxLsTPMiTDCyFm7KehNLGDfkHLtaznrpjvgAH",
  "key18": "29Tmnroj3VZ6txW7D8FGWPmnws5K91gq4qSDyZ5GvvbzXN1AwRtUT7LbQvJmcy1BMCXTfR91yfvwZ2AwDSTNQTmw",
  "key19": "2RiLyZd3Aaqkjh3oEaucNsJNXhAiYc1kbbZuB31guwd6LPzKtvVnQxiBpq3GQvWz99V7JrcKs8oYS3N4rzCvw8AR",
  "key20": "622oCjU2j6yhnKwJKAPtMRNhy4tbHSsUnq3osEsQVReYUoQ1stwQmCJ8h5UrGcLdQiY7WQBDDXTgEwTPtkHgpBbX",
  "key21": "2Etih6RWcSDd3kzbVv68EEekTMfetDJM96iqUbuBbfdrDgh8jo5eTFwMVEJ5Wdxuh9VH6LBLwjATRFyUm6yyZMFE",
  "key22": "2VBPP8gWnJDfjgGsUgtLUPEeqSCWMMRPqUiZSP6wxsHCpCbXNkFdcuPW1o6VvmLmVe8ehZiyFLK4A31dwWZB8uNd",
  "key23": "7vbbmvA2HAnug5sVhFhKcmn7V4oN6CW16pGP2wrhCcGrHsv4WgzddL32RPvbzsm5CawKBXCeH2nGBEPzF9rJDLJ",
  "key24": "PeFENfLKHsD6HLCVXvcdUmMSSYj4hpgEPqW4dvTo8NwAuhU3Ff8EH1cyE13NEVokNnJn42dYDRRBvPcC8BUWs4C",
  "key25": "sorKXHXgfR3Y3Fi4pGKtsUNtouzcduzfkEGb3UF9bbSKBJVawCCGaMk97WMPeNtBGcDB9zuV7n9gVFVRMs3vnv5",
  "key26": "5XQRsvXvXnjGG1aNAnPCYUfacW1PyBkyYtiPfR1M82cD3VYbRiB3jyVGujUfhHVYHAJfC8ofGeJGeVGLrBaJUJxm",
  "key27": "39DQDyN5rEfL9JtD2XyABraS1a9CaybbXeg7AsvdXAgQuRr1gmD9wLq8LkWDZt7iuppnSDu3T1Rr37Yaby4DZHE1",
  "key28": "pMyXDnX6DTyygUDcd8bqKZhif2BiHp3n7CsPb4b7NxhxzAfdUaMCRSsVJGzqVCbqxk7Ap6bXFZSNr3kEcgveQr1",
  "key29": "5ffYnvhGBHYYPREbsYy4SXDCyHtA2EDeepboSJSmmcn5ybKxfG9HxpdFzMdRhsrL6wQKUttLMyMrV8Kjn2Bt2Mrp",
  "key30": "3gZjLRRGCwMT57vJN51edixDWum5nmo95xvm9621qGVkYEa3q3uUr9RG7GUNWVdU2C81MrPS7EobjvTP9Qjsv6B1",
  "key31": "41PxpqgDYuCE3Fdr2pHy9s1d77ivnQ34bT5SbdNrSP88oYpr61wbzPD51hvHAH5pALzigeHjZKZidbFukTrqBgZf",
  "key32": "UxdvanfAs4rQpgRa7Tkjf93hdchXgbyahsWfP6kQdwEae3RnkBvgVeFsY2nELgMcvbryuQsreLWurhJX1i5oAx4",
  "key33": "ZkysA6kva684vC2S5ESGJp4UG84We54Z5iZWmihj5TfD3DuYCFQUetH8UrmSssGrY3dJTZnuWeNjTgF6qbqLu1A",
  "key34": "2EjPVEtsUBC9FkQmWkJJF4rVRKSsC1FPHiJpaZSuxusgBmPYJYfYdP2X4fNc3VkMm2imCiQFPUuKVxc7jBzMb1Gg",
  "key35": "2GBA9Lm72xndTWUq8XQoTBsZTMjguv2C5oAZv3EehGh5BmiVJMdfSGjN4eaKmb44PLrutnxN8MmVkvQpX6HRqLzp",
  "key36": "zcDr5QAphoDDS2oM296XTJ9ckdMPEBMJrgiz4Cg1MpER2CJHD4T8qJbycGHsYUZhnxTbss7fQLQH1nDXRPtGW3d",
  "key37": "t8toqtHsg3Sz3QvpZdgYtoN3hx1PxD1wfJ4Vd1qTLRb24TCjARP5pbhynVC7EVSPAUzyvr89ANCMTFAVaCagd4j",
  "key38": "RvCpr5BtLSjTuJ3usLJMy5f7VYEhDJW5n4ZxcYCw6cTSRXCdcsX7g9kzBwihJLGYEBZWBzMNNazddrJLC61cyMY",
  "key39": "2F4JTdVDv26t8QyvHiYKALpLgt4U8us3gsrUEr7sFEfnCDvCh2jjNjouXbGUyd68pmocGvQsEvEcuD9JofcFpr7i",
  "key40": "47nwTPJGt8vvp1MiVh6exPnj8RrtpAEtMiAxe5B5Mc1ABf53p3DukLGge1TU6iTPH6Hf87prBes38XY8ML2AYezZ",
  "key41": "2sWp3s7YqAwr6m2bh2wzp7qtNYWjQWXNiQP58ZsE2gabufneY8mme4XbkbX5kJH7pyQSTYaWM6zvhmRPcqSB3rtu",
  "key42": "4ZQfx2L4Fy4JmWC7XMhQuBGHcdavxQES9eNjXXhzmcrYJpupCy7fckv1B5yVURN5LcxrL1ALcyrtGeWh1zQT1oau",
  "key43": "2xQUb8QLL9hnTb56buGenChXebAGGjo3yhqqZQ9r7pa3SCAUaZFNtZcTUoAGTtxRFFD2hkRD3soXT4cFmFbY9Zjv",
  "key44": "2ezSyVmsWhr8YyRXYtnGfb5e4oWmYJ3DWsRGrPANMp6X5Lb5sqtDi98JHDyifm1NpDqvMAidqmNy8eYmDyQTANHr",
  "key45": "55Sk6VXwU7TNqtn4kSnJG3bPgNqqhGYPmdNRFYrzHnnt627jzS8oE4RNhAL5SQNg3HGtYyf9PSD9H3wNakdFmKsK",
  "key46": "2wPZbzv8X2HX89kcXkp463DUFzBGb378FgZx94T4xRT3kAsfx1mWsRrzEiWS858upMNLwDsHXzC4bX9c4EAak7vV",
  "key47": "4KH5BHgtbcxYYykmzzN9d4Cby6CyvqvCCYKTBXcqyB1KetsvNARpTjSZEQre3SERWawA3Jq9iL39j1bhzcdbrkAV"
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
