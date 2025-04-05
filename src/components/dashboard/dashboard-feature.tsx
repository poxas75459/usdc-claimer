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
    "5SKb8K1S4fJktZPyXqUJVvuJXAJZSMJd3yGaRh3zNfWnyTi2GnLig9b8kuHmTyJYhvpXqpsnZfeZiLWpNwrfbuAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euFA8Wpm1zy5wzu3Xgj86mPxnVXUCZe5HLmHwAPnuJFWZHiSxVBz6zM65eRTcEaEHazJpa3ccuU6JUCjnwPh5Tn",
  "key1": "3ox63NKPb49XFm9R5CaqPbFi1UTv6ftT6JCFZt1bGbFugHvrFKuP6haMq8JuMWNq2PdtPF414h3omGb1Miaw6uj5",
  "key2": "4H14oGxtkRdT2QZ3uhBLchZbUjpfD9qhAP1bVQvAGkWCk3XxiAPc52gsd1gvXhGJs3fzTNFmZyGUhTndQ9L7ae3q",
  "key3": "31WUeT3BdzVCheQ9MCXfiuBR1H9NHPhRa8232BZ31d23zJ85S6fCBdwD2NDqXYpwm84hsjDsp8Je3EwALMUBdo4V",
  "key4": "4Mxj6UHrbPS3zhZ6SGdpTeRqxueVQrgbtT4Btvq2riMPgkS477vsog7DfRLiHwSHyczXtJPww1oTdYNuahjxFWcF",
  "key5": "4QE9msT8qwSVEE3cruvYdv3hEu5HAYvbbhB66Q5SDZXRYe1onyxduA6A5gyXTEF7DszFi7oiL8EuRupLp3BSdEWd",
  "key6": "3iL3dCNxNhsFoe79Z4zdbLn57wrDgnubeKMtW93oGtDu4g92ZzwoW24PdVu4Z5gvNCYokCrHwHujma7RB3bSPjyJ",
  "key7": "4xgYEdfZfVaD3KjaWRhJujb5qBYcsMhMkf3UHVQ7dw1SKbW2AFdXE3pffRU4C4xkLUaSRpgNMFmh7XHzVP9eaBGP",
  "key8": "3VkEStVehWHBsKqueLcv2PHB6fkGo6MwdDJNTNMbiz2pxL9B5ha9CHXLnzRUn5SzX5c2AQvhzcojfpBhkiy5NSyd",
  "key9": "EnCQ4QUTc3SGyacQQqGFyrw8yRJ54aZrsbpUgb5QWL8uV5xL5Yw5R2PdjwAcxuNDEWYbB4fNECCGA5Z9ReEgP5U",
  "key10": "5cFtwgEmhYbtnNXkPtFN92d9eyxQWNdhJnioPZRYEzQhYeqDx48eNUSGi6CKxtQNoW2REMVZ4pKfUDtsjQjzUD2i",
  "key11": "2Zgaj4stSwRPekPACJKWkte3m3AkzJxUp8HgRRzZN34jfcJWvYpQG9oH4JqxknoNEdMYfacVbzsjMmik9N24VmqK",
  "key12": "3fT2GMTusmwzNzebvDNnPLBdxnBhg14bpQRX8H3a4Vf8YtaoTwVHHm49PD5s5i1VB2CHzZ7EbgbTWwwmNfewa7me",
  "key13": "5gN2H4PMkZnmXDYsV9xw22DTSBN82JSFs21xSsWXyFEP27QnSWQxuLZhEseZD4QXg2xx7bZZRDTGBj8nnHqSYcNn",
  "key14": "49YbJiHpeeTa31TrFDkJo33LrYPRija2nCojaPHjJtwkePsfm9znCFbVHYsG2a6A1Pf2ByWmXAjkoTuS8J4aLAKk",
  "key15": "5kNWyHCEw2mES9qyPnVWYYeQBf5bb3NQerbB52pMJ1Udehg2Fys469ur6UL9TZAUs4LhSpxFawun191NVZuMh6rH",
  "key16": "4SBwFsKBJfCeTQ3aoZTWMZmifGLm3RRHio91W4xS4594uNoWW7ke5SFGkFADeFiTeS6Z8XdxSMVmTcgF5D8kspTZ",
  "key17": "4SaDkpkbcvGCsH28zumFpf5WtBkFRZJmitDaNv68yJTYMKfueFKWPeRmW76XJqHykkcU41r3bhaM5bvZ7rYDyiCH",
  "key18": "2C5TetUbpDJ5Yqz2nfS1Jauuas1nYvqHqxkv9qoJiwBsUZK44gRTdy3vHE91bjLM9LkHPGQiRWbWw9a9TRr5pPr2",
  "key19": "5y3xqV3ZvvnaWL28N6omvTuH3o5anEvEmpXdpx1z4uY2Qe8ZKcnp2Dx9m1TZuREB2UjMoxpvY7c2GK5AR73gZJ8a",
  "key20": "5ocqafz57CWscTmxv9wSYgKoZinyv5XPia3Kht9DfxntzPEweAbY5b1E8HMX8eYJazyFNvaoCo9HZqtBfbhYcj8W",
  "key21": "3eu2MGhoPFYJsDm3Jp4eit4XUUjBpYtb9BcCJEdu2nYB5JFRzXb5r5W4VLvpi8rpHvxLr9591zpPeEj9hmk5LuyN",
  "key22": "BWPcpytUJNCphiew91N9UZdD3pETHrCVwPeqhAnYYkd5wrVbq2r62fo9T2BCaEdhHTFxXeoN6MFdQXaA9qV8vPk",
  "key23": "RfC8TvRRmPhXWvMu53NUd3DbT4nLmAhD2dmokwW13hQGd3XNMgkKn6pQ8JtWgNGnUYNJ8tBL5dJHegTEYcWgCBA",
  "key24": "3mNoHPkTWBmN5CLcLFU9WG4oySwbZTRZ1YCZ32u3c2k27oHu1okQWfRCTzafq8jAH4e7NXDXiMERUxYdzyfH1aH3",
  "key25": "3pempjLmvXiTV1wGpFiwE6xwPvN9qdEjWTVMeZUha8M8MwVckjB7Ee9nyf1bGy2x2bw4RibEc27GTmMKfTRFzKfP",
  "key26": "3ebPZLkxvoFaNXXuzjw6tNxfYSc8d98ZAgiKWyBAyrPaWiLVChT6Nh3GtExmCbg9ayDxkdgNZZczPBYm5CSC7FyA",
  "key27": "C7RVD6UVvCo8wvQ1fNw5Z8MBZkh94Js2uF3gHhU95v2yG8Yb6D64dt6iuvxBqzaV1RwdqctX3PeBUaw8FnxUQQT",
  "key28": "dicMHXLibQHm5YPCnUgeCq5g1aJ7mFrXrMj8S7BtG2QMANYe8gNodyoRthj1JXvrcM4tUSNGdN3n2PRTwi9XFq6",
  "key29": "3soXhBfGqxjw6zqb9H5Ss7nYVaxAXn4SuKoX8UNxF2dqp1o1c7zHHB5DgMJuAEnVwpBjDgGasYob4CvhSHoicUrS",
  "key30": "oRtM2zNCoCDMX1ph5Pg6ufxWbgReqpKm8YEQfAW3NoJuKYkxtHraukAPKcXZSXgMGJPZ5tmj1t6TsSgvPyAS6XQ",
  "key31": "CRamvpr5T6sq3v1UnXun8oMtsXNd9JE1U6Lkb2e3JeevsvaTkj7F5vcDm7BFD7G7FR5EbVtvpC37BmL9aBoZZ98",
  "key32": "5QYzoTcWUe18rBQbKe5DweVfsgAwM9DnePN9oubYYRECaDhUmigqC8SNat233rBzwoRTgaFfH3nmVTCKCgcrm8Jj"
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
