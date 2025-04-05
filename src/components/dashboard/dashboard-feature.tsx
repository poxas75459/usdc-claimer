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
    "66pZ824aPwd25AU5EebYxgZv72vyZNjeqoAJYRqxriSu6WGfVzjAbN7Df5WCYoo2BL2bARGaAzay4eX7BwdHiNYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124nS2VYtPKgtg3KVXRFmNcV1HWVC5jQpByamPcudKwgHGRDiZBPGZ4ruKzr5BVJB1Y7YtsJUPfxusyh2WAnmLew",
  "key1": "4MxchCY9BZmpNtugq3BYKXkHviwvu6i21mjF2Xb2qXZtRoRD4on3MRs9kGL7iNTf5PPdPFxyBYYeHFHT6WPFtJzu",
  "key2": "5pcAyp6Q8VoZ8QAQnHUwjpFWRZoPZWHDwBxrPT7oJQzxY5rpK4h9je6KDfgoooyB9bhedU2U7TW85coDLe9WjAeo",
  "key3": "66ntxFzV5BGHskjHzTYeVqUMpK3QymsindDLdyMBrdA68qk4WsDqmeaZHDpciDo3ezK5dFbFA3F4KmAG7fDpuguY",
  "key4": "3Us5GSzSUSf3VU88Cy3mNbHSjN9BS57SQtooHfYdcaTvJf91qQASsk68V6fjPWVnMbRv6R5SCsp7ozvB2mu8p53n",
  "key5": "3MQqRFXWwe15Yno3BsFfibFG6K93gpZ32zxWHYTGvSFdgY2UiFAu3Pwgat8iKVPxhbw7rVh2qfwcYr8p3bB5ouCZ",
  "key6": "4g2QG89417F5moz2M6G6XuTHqMSTFXoaQ7ceiPaGt18ybJ2GQdz8tjuYhoPXo5KkspJbTbnV1y9sAjaVo4QGAsQg",
  "key7": "4CRKVmLdVBiewoHpSvzdcwsL9nphuAWNqzsDXkD7NFeyhmopEJoSfmKp8Z2yme1Ua6PENJSj8dNxrtFxwykKRxqe",
  "key8": "57XGtDyEDBD4YESk2RZTt3gwLfuv2Tc9cibhv3YPxPkMY8zE89yCxSP65v2DAPeqS58mUPPtNKVGhHA7W2Qr2zjT",
  "key9": "3HSzo4FNKpnXpFTfGnUtMtdnCvgCiNxn7TgaW5Y4tdjPGhXrCjbhPoBCm7Kb48whVX7ewn8hczw6R8XmrBYNqSEZ",
  "key10": "63wURfc7SUCkfcxy68zJGvCLdSEnkFn39SJ6k133NDGC7SzCkekw1DcRytdjTSrddQCMYj7AodvzVtkXeZV3CdQH",
  "key11": "DWQXWzSuT6nokQJBLgkKZcHfoksXB9QPb6cNcXM1bygZiFRgjaQzyd9iUcLXLg63wQBaApTaqsdeFgKFMom2iwh",
  "key12": "2AYZdtgnxqHDaTLEz3Yu3xP9pWxukZucFzLQXnsiBiLZasHoAQNP3NAznknTCQBQuE7Hi3eSzTGAXW18LwWhJYdX",
  "key13": "48emco9S1D548E8978Lv9rua1C6HrDnCoEq5Ew7m7Jz38gm71kTjCQwMpgEttsSCescGaFNXtwg6vw1usBLSe6Zt",
  "key14": "66cuCTdjJWj5dUy7DpdbQecFr3SCyUenBsTWfyo8mdjK9LKpatQ37kAFyeiBKnbjShPvN4LiToUMKkSrp7vwXLz2",
  "key15": "3HabSLMhmA1no4s8fY5N8tsCmRvgQQxYqaKzzMttHQCchRav3igYQYh85hY2JhoKsW9s1sFXoq8ctVC7yU2S2TTc",
  "key16": "3KuCmKCgU24PY76J2Fm7e1N7MP4TcuJFHZxebMHZ7WghpFLHeD5eVR6KWCtWsE7snmt54We4ApPJkPLSoD5tdRbn",
  "key17": "59e45FAxzkgUJr4i5PbqZhV1uX3eP93r381oMqrtACk3AQfFooavyNvE5gjav94NfmGi8Q5TFmj6PNWLJ1ieeoTm",
  "key18": "43HRdGHmCo7tc3jM12A65DMuE6DC5QVsT7qqmQ12rsEcXdrAYnVmksdNKeXdUBsj739xvS7Y38rSchChv9sbihrC",
  "key19": "5Xn93dKiCkNTmTssUNSTfZN1XffF8GMR5nJKqESgr456hCB86zSTaH77Lj4De7vWqkX71FmztJZhtiFb73aUmJKR",
  "key20": "2xBGCqoYXGwjtU3qDii8awif2y3dXxhobBTiCeAsJXeEQJXdAMb2Fm5qGdcKQfaW6WqKbs3KUi8X41h6MM2eXXkh",
  "key21": "4oK2PbXTDrGV3fJp4vgNqhjdNcGSPbYxApCBWPxEokvWcftyoaahs7hn6Cvh2FXpmwgGZx3WJzM1zWPTcVJkYd5G",
  "key22": "4c5nYxi3WyDJUmkV5fXoVAeCAieG3g1LMFnuLnajV7ZpLFJrapqjWmNEuQpxwTBLYRF67yT3sJNnScdhbkDCjtvG",
  "key23": "KNeffNUQGrqpkGiSoaRhUJ6LxpKYqt85zJHCU4HGJHky7GtSCeF8iZZetVQAAjHSsbWazxFGkYMqg5QHcNcJrS5",
  "key24": "5SC8E9WeKWQ6Drfyvv32SDE1T8YjKN23yKmU3QteomrSxZ5ppgcv9deGEVBjvRKTHjeuRjm5JHyVsoQEciqRrQfr",
  "key25": "41knvrr14sTwCgNcDif515oSQZoK8cppk599mDSueyVNt4jtbH7REenw46NTU7vK1Z6Lz5e9UT8ouTV2JorR3asy",
  "key26": "4hEonxpWdWa3phYHRg5imFhf97CNu2iqPTVdF594e4x4sDE23Zy1fs6JcbPXxcTLVixS9yiBB3oMNGVmmPsvQU5r",
  "key27": "5EHQrGuv9SswUPVBEJQT1KgLQouY8oLFsp1ksQy4h19kEUShsXzuqMWdBbD4U8v1sxJEGaPCFHoDWJxaex6csXDz",
  "key28": "53uNjfPAt5dUPFcTnADWLP9R8vYBHSrNu2kU8CqEX7tyEfgC1nsyuhD7sGQsQNw5x2GQ3qHbXrvp66YSxyW7f89n",
  "key29": "4nyeBEwYYzeZPRywiTXaiMRueE1cHmmMmuHxEH876HjnV5S1nPnipyppTCGsUSmAwVZtWpWYXEbQ6nCA3c2XGmcZ",
  "key30": "5e1nU5j7rYaUdomGc3gXjzGEAiWnKeMKva95YqTC3xpaDqBohLjwK6kNrgqLM1Zd5X8gZuQKobj8reTj8q1SkRru",
  "key31": "3VQVPzFhsRxF9V3qssgWWEfFbMbpWU2aW8pPNyG2NDB5cKbLv5bVwhKUcipdGEwReqJE3fZNb8NLembN3eEHjc1j",
  "key32": "47Jnij3Qn6zqArTnCBYd4x26HPWVyiZowZbTzdpMNGgX3nRFWMfHBjv7HAe4SbsXKBjDTQ1bpVE4N8ox88FQPxkA",
  "key33": "23v6JYe5fnp4e4eSjF4vRsW7Z6D8BtD2XRLedwZefavx35KrXczk4mwNmWjf5nq3Za4jAVtdtKTBUhxxn7fAgj3w",
  "key34": "ugpG4mjAaJFh3QjbuZxqJnVpPTJTSBr3DWxwrgXFkcT9gtmM9bUm47n7fNCVbzryk4WHbYfQKRKLm4beoT3nYAx",
  "key35": "3Xpeorx1xkTZuwEc5CrUc5WK5tj5gk6o77ajBraw7k8M5dbhSacGPgwvv9hbsCpuhWZG2hHdxkfEGGG1VK8BYPEm",
  "key36": "5fokGc9vNvFfuMKEW15Yn2a2G4apof9LYkJJARM9nbNVdJ1VXf3QNJJUaZmfU67xAQrkWJCevcncnVdhiUxknQnn",
  "key37": "bec4EQF4NQjBbGu7QrnCGUZv5upjszb4Di9hjaLUv5wwMG7DhzMdJXHGV98kDS4aT2Dd6NWdTigs9eEparuzRqm",
  "key38": "3668gVPXVYxodT8ktS9HX1zvutGZ6oyirVzygRYeV774ktayutYuQRZtmh85x8u2JayJwwaQceU1iopTrv3rH5Z8",
  "key39": "3hRLz2WSEBToGiHRHyw28jTXUQbUQs1FxLgztUZDvHVimMjJn5aM863ugR7Gy8QiCPvwsfAVkQtGDn353VYJaY5q",
  "key40": "2Pmoz4igYqLhd836QzdSrChfBasJE8rXedCVwXB253LXR5bcrhvFt1MaV45awhbyBjNtrKmuM7vSfoLzexqk86VT",
  "key41": "575uYMjxYUiExLMvPfwVE88LM71J74qDQwHxAyH6LkZKpJXe9mSAwXc8FZPkgKL8ZKAVojiHziRzLYRUA32nM5en",
  "key42": "6bS8t5uUQxW7JYek4HZFHCbUFnRhycCTtw9MX5J5YHxCkWE7kP8cZU9XsY81LQSxb2WFYT7ZSKwAEiCviUUwjQH",
  "key43": "4RTHpDk5x54TE2eeC454skBvxFvW7QoKYdH4wmbjzV5LSbGQtwwS3RU1Dz1u5Bm1TrJA51cAcFZbiVwMBkJ6rMqp",
  "key44": "5Z4dz9PG6jEAevynSGuoQH4aXFS5AoRirdrNPtieDCp4rFWmmwvc1Cwxr9hJPV7UL9St9ouVRt1hnqWnaB8TW1ZB",
  "key45": "2GcPqRLNETFxWtjBV6yMkWzN4beBGrbJV5vAZF65WrqZgQ1AqbtE8JawJ1Vy9fWSnB8m2gWNSi5nCie8aUoZf1N4",
  "key46": "2pzPGieQETSGPhck2pjE6sNXHAvyTjXs4wRSQRgKDioFJMD5GQak8VBiBFSJXsAnWfpjJCaZbUmkrfJtSkKyfN4L",
  "key47": "2ucvjdy5Xt6mZqNpHPYvaNcGxHW7HB2aba3pH7FvGsaBM6d8xLYoB1fPiPKCiQcLH9R1zLzbAvrHNkQmpxNkSwhU",
  "key48": "2mEgDLyhZRTdiJY7hQRDcU5bksgH9dbVnNgu9dsK9jKHsmuWiJyqHEWymJXuByLU4Z2DKka8p87XNNoqugRsxjoF"
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
