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
    "vi9fU13rLWL4RS2XZF1hypgALxtiDEwrkeDHjpjoaeAVw56DoR47LaF65vMSRG9tsiaeKZMivV1PQTTtEA7Nfxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5MWGFkgqzAVXxuHNenM3TTJFN8hNZmT8AC32TPkWEeoKECdnpSRTJbxNPKuLuaUytAKMxkLh3V13efVbU416bu",
  "key1": "5bwUpvk17DhddUw9Tahn425qMpf41AqdBeuNnBAb2tjuShpQLwbTnFHYBfXHqHx6FCvD2mf2RqvhJPF5q1sFnkj2",
  "key2": "3FD8GorVGHWtCnDHX8VKyBDo6J19w8oGHnBxEH8Jk7mLbKAMGDdWJyi1kKA68XVGQxTnY5fhZCVGZuoY5JZtdZ4F",
  "key3": "3doYGw7LCHbVzhTGGSZGvYrsVN2jRxGGLTp4bYn3FmfKDCaK5y2DxJVDJoZiMJqXw1XvLRASdHW5f4rJmF7wsRCh",
  "key4": "LLxszV4V4sB1pfWQyGqJcorExWfx7poMNYu732AhWd4WRVyYT6VKZYF6ExFxT7UG9kBPHZf2V4CqH5goGav9Wyc",
  "key5": "9D81fuobgYgf6E8rYxrDiPZUAM9WieF9BEyHchRpeiVnrihHHN4Y9Kt5NHgGsBETzyyAqW5yuAYF65XJ1PUKo7q",
  "key6": "64heFWhcGaeEBjxiRuhatPUvr1EGDTXtiVus9TQuTP97j3fyX7QgYon6LonyHJVrbwD7ajm5EKAuhNqQYguE1pX2",
  "key7": "a3mjgt4toqZUqkMKiNBVuXg7eK3yn1fDrVTB6xXfCCR2S8eeRoTHWVrgBFcEJmh7MbV9kpkPh72cgZx8fLnXZNW",
  "key8": "4aCA9FkrZnAvac2vDxAoXLVb3W5qjWXfAhpfTuytEB29jCSkkNXSRXaVUZpXdU9GzmJRP7vao3mTWTENmnCmMaVW",
  "key9": "427nqv7oDtVH1hEeC3T8am45u3kZXYLG6CpEhzZpenEEnH3kGXVPKguNifKF2XisiTi2kq7V7BdAGXRqGC8JKPKN",
  "key10": "5Kxf3KXwWg9uxytahk75ZQ35odEU1JFL2RdE1mGiZ9ER4Gzyayiv4GtRCX96DpTjJpVQYCuVk2ta6q44JwMACDHM",
  "key11": "5LQZTxdMQKyyApF6j89QuHPDGWcU7daFumcC63cFCjq7TWdgSipwRNgtazF47zqq68RUijUYNFX6w2oChrwzKZXj",
  "key12": "3oBax9dA7tk92BRVJevCZBUDnFFmsv2FT48QjfrU3PhdfYwm5Grzvw3JBcVZpW2YPKjTEJco7oVUtXoPJdnLsYJ5",
  "key13": "zwcEUmZCqZyiCFE5hwVThfMfnqutjQu4Pr24LSS1ubDA4mvWqRGKERN6sBvkPuPeUh73v4pAyz3rnwxhFcnRfTs",
  "key14": "2U3MLV6aY5Efvvt7aKwqq42HKktBxxPuAJ8nmwS922ngCjAN4WhcaQw9N4ezxAXsm3Vd3YnWauXSB1jcbUMDpBqJ",
  "key15": "2cppVuvFovw3EAohPCjZho3m2LDryL6hiGBYPLhmD272eZhBcwnBeneu5Whkwx1nJWKeighPNa1aFicef848KJUA",
  "key16": "4KyryFyRappyjwYq13LQ2dCasmysXBseuvbJYJHpru9dMWiYhpNVMrgpWtFmmgRfFt2C5sDtsnHZNwNJnrWYWtYo",
  "key17": "5RXLn55W3BPvY4Ct531AKzV6ta2UskNMuQsTKRLm8ygH93bWcJx276d8sqoNSFa7BHzijU2JJ7ETU2HbZR2H9j4B",
  "key18": "k2vaKhRYkhcK8HTTRJnoeBMCYxgoihuidP9M2A3jixT8fnPKT6zVjQuuyVWxaYVaUmn3PdhM3HCzgUn52i4Wyma",
  "key19": "4r1WsXoBC2Np7zM2L8qpwSihRZ82ACMXD6Rz9ePsXgNKXCAxd75mderUnDT1mRfHqs7stoin1N11sXW4x8u8c1vV",
  "key20": "56f6Xrrf4cMgS1hKaCyML9QFcLyb3WFSQ7eBU8NFWKztG9jpAvFW1dMRrfQq55Haiv7fS8hwWK2MaXUzSrmk7ZQD",
  "key21": "oHispWeXvdwTcc6MS2wkQspt827pmLtmAVHvmKNJETYDiHBrYoGNNRdHssTAZ5tQe7BW2kDZ5pVf4uuBVNYt8o7",
  "key22": "c6dUh9aD1chuuE5XaArLSYJeqU9AFpX9Da3Yb2dstB1CZV2NPKMdTCctrYUsXvFuPnswKtW3kafKTJGBahM5iza",
  "key23": "ooS94iUa9aDALHczTaTh8zvrZqh8XmYutEKvP2F9e8QNm2QrVCQodSHRKVovCuV7uQeA9om1SPRscx9CkaNhGb4",
  "key24": "25P6WQmWGrRttAfjRUJNM34Foe2QqcYkHvZ1CV6ku4uB6FSjguKprTWc8FvxdhfuwKZsmowZVXRkTdBXoKhL9ju7",
  "key25": "5kX2e8Zw8e9UoF9wAqFQeM5XoxDhfEJZsPTnH8bn4mW7ZsfvPBPRb4gFmgQhHYEUz4X8Xe854dyXtZx54cArbWrT",
  "key26": "2RmGr1Z3pRkrHyxpicPVbWKNCrQSsFw7iYkyexuw1HiyCzvwPAeggf7ZvXz63gtLxxxksi6KenLQiqUPd8Ty3foj",
  "key27": "4zz1jubygAqzLgdsJzriaThT86uGvPrYfYmXTLBMzsQJkgT25eM9fF9a2Po2egZmKFCnYnLRgMBs5inWscNWz5WS",
  "key28": "5dz7iutBGHKJi1akFP7KS292NqtmEyuqzjnRZpgUv4n9HxfdUWwLb4TvLgjKSVujWdtdDPB6QAzHp9YXHM92BhZq",
  "key29": "GZo2m4jsxBKgMpMKsjJfFQe1hoGX6WDjNRguC5HuGW2Nud7iHCNYfcv9en1zJkSH3tmFYbjHcyVnJZNQsq197ZL",
  "key30": "5i5VbqfFNwHbfkcrgJEB3pPftam5kTjhR1cubCd5pzCdEwgydpKFvmdde1LrwedAZCgnUKZcDpJC4EyY6Kxr683a",
  "key31": "2a2pkqbzZmJVm85e1PURh358uR5Ae5ezUTuwfoQGwF96qi8ErjgoeWaSxFevt4biWwxkVQrPtoTsx17GTKQMoAKA",
  "key32": "4g37yTAd8FQRYkqm3yi39C85L8VuNCMP838bd5ChbSzDnQ977fawdyzUVe9wKFPiK7y2EM9onBYKNmKRFgxMH7sn",
  "key33": "5NRiveZQr1Br8rTYqTcqeiwwxTPZmMmL4aDzX6dfGbvcdXwec53mMfjSkw5TS2tpuFLwMMFvDABq6aREtR6TwxPZ",
  "key34": "47mSsC1yWzPfvzVPWjHZrX76dvXRW2YWMt2td1X2qathq43DoEoBku9s6ap6BemvcKHcwxbwvzAhuGudWfKYoG32",
  "key35": "vWHcN7X7oGMXgxhxiCDRJA1GiJT5v8Rie2zyEXFutTp9b5i9A7oyr32EREJ1otGaoMyyffhZa4qpSX41jizBGMj",
  "key36": "4rP1GVQpZoyBhxKDpu55D14QR9nt671iaNa1QgbUG52xBycQubCTDuxzv53nNB6muinQ3E3ZmvT3rgEh4qmqm6mi",
  "key37": "sH8YkopTzdtEdTLUiJVvLvecF7PTWXQTasqjwyMnuP7VfVeoTDpnNF5BY382ikBt7NZiETWqNP6vogaponkgxTq",
  "key38": "5hKUitCrewPT6jnVbr6j3iiaS734gkEJ8tCkCrhUTxNfXhVXVth18nvSR4WLgmEd1ZqbbTbw3WGcWEP7DvhCbaBk"
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
