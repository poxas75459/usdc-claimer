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
    "FRib5NwyfD2vuGPqESRGd9158tY7wk5Sh461V4twLQb2aMKSrjQiWXsKqob7Q3D1hwVy2pvZ5BTByKyigXwaSrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGUftn6Jzb6ds2MeKRXbUY9dtdUZuFo1LVTV1ruSFVhDWzWjCmHw6Qp6rsWMgmN1BiR7XQKcgY17R3NXNnfU764",
  "key1": "2ZM4LfV3CSn7PdL2o8DQQH1MF44jWqkGxVSJRM5N88cu5RoSUgzm11hvMJy49gnAQyP2jHsED3HFFxbTvPkJduNU",
  "key2": "onQptyNYucE4KDwgybtKmyHaxkvhb8peMarnnwFoscTzfjZkeiTD8n32L84KGdiacA4mv9jnBjGCr2XEWqqSYd3",
  "key3": "2jS7B4dVQHThh3xjTVEDitG74ApNDxrQuov9kpPTPmV7kYejKe1Sp6hR17E8bvwBvuifyVVL4ogg8sbZQRJtMzAi",
  "key4": "Nc5wAuCnQbkZGBfPgeu2fEDuXbPNnKqQMtjy5ZJE55HXjsNLc6HEBi1CuFrjdr4VyPi5w7rAuB7NS5iKQB5rUjY",
  "key5": "2ii1vbv6cYvij3hNDa4AKyba9Tyma2wXGYpMeW9rihNNhpKFGfHMkT6FYJnYyjykMvWe83fuwPNrEit34qM7cVsY",
  "key6": "3Ax9wLJtg1QprLcJEW7S8MRHMBKZBKC9jXdE2Er6XbEhmmff6z6vziCL4iJtYtKyrsTi6pArkfz6XAb8Vg8XNk1E",
  "key7": "3shbRXmfrviaxBqCLhpfH56qDMaa6w9tF2P57Y7DGKidZCviN9mKGasiwqoMYpLXqX4hs8XPP9tdnTJdVMhsYFfz",
  "key8": "5mDrG9q3ZFGV2haiYJBJtaaEXnTa6waKiYPetC2dFywSapvHkyMrNjXTSu565eejcGmtFryeNdk3WaurhXZKgB6P",
  "key9": "3ruhBeZmDCQLNPKJvuxUJ98AvbphYcJV9XC8HxFH75oTfqMkFKeWUCv596pmpc4HKjiLgohA1HENn8o4yWvBGpXT",
  "key10": "4V4aW4cnwLYjYGHYfB4w4YnpisKpJXFrSUDAarHyQdLuVruXgCJjfzHwEmytHfTxH6ZgNro3GwCW4XbEj76J3kak",
  "key11": "2aaBG5KRpkuRGteBkE8buV5KGKoWDD7Y71RUaJvSRpj1Kbb1HM35erg3oTWy7q4tBRKans23Fej8mz1BQqXhR8yw",
  "key12": "3kWeAtBhFkWiDSfvuQrRiCnxxwpbAGXfyE9z5HSLfWnELuqJE3k4Bx7NModjRoFxrzrTTCigtQRYt8LXMTA2jAHy",
  "key13": "7RqoPbhWQf2yPSMxKUHvY2CdEsCCBpjmYCCWr46bisEkRKw89zE1diSfWGKJowTqyzwWQceA3jNM6bHFKtQJKdG",
  "key14": "4Pjwk5iKTWbymTc1czCb651gxkDi4aYgGhxdxkJ1sa2u1Cs9LF4ApVpHwDfSVG7zvbtB3tZqm7ZB4mLDj14FiRZS",
  "key15": "2EgtcCmpMUgTo7bP7tVqBfuem9tSKUZPUMEJ7uuN6BFJxVWvBYrCtzakLgDk5VmkAY1wn2cgnW3NSeN2cN3NqhTh",
  "key16": "3p6kbYNSZR3jBndpXG7S9yh6e48vU2wzD1Zt54h1hMUGPMn62Dmhc3NUJgCAgHZY9Ljg7G65Bz2wFAH71S54oZYt",
  "key17": "5WSA15BPEm7mHu4DKxQ2VCL4ycsoJaqH637y2Sftf6VbWWK2aPSRT8cbMRcNPaFn4uZAzQPTUMmjngHcrHxRZyd9",
  "key18": "3DG6EU6u15DNWctZNmAw67PE9wFkxytu4MC15fk5bAyT4qwTuAfz5meYQBSrjRZvKdy4JZyF8VxVgW6Qb5oKRLXG",
  "key19": "YYzvxRoH84XsutwyzzprNjBHU5TYo9jv4BTmXHbrz3agzvYqKgNMWM8Gjz1onGqiiKqRQSw1RLdwEg2MREDif6k",
  "key20": "5WJYeQtUNwKu8vLsf4SozWUNZ6dV94FAbwxmUHQGEtNtK7KSQhLuQ9tsGoCsxAkzgxiTE6CC6ryKjbHapAps14rg",
  "key21": "2WkhAb6wTFwwTD4LjUUHTc6mB73o1ChSHb1TvxHvp1KJxiDWBiyGPfkkvyxrxAphpRGUCQ2HKm9HEesqJtuxH15q",
  "key22": "2XMf75SGGBmq1JSDiX93G9vgnneM4cWFhKFuKFywAa2CQf1cPohTRwy54uv8omZ2DNxxVfeFL6HqvGi3RsKKqk71",
  "key23": "2pQKLmqAcJarcWKa84tmn5typPofjNQd4SEEHdLQrnR8cLw9aCgnsn3kLQ8bGPPxacbfAfPTQn5tRw5AW6AEe8B2",
  "key24": "2dwWtm1EL9VDZx9YRTUTfaGcy265WgteVPgehaMYGmuJ4abawKSEt21fxPhWMPvCYpT6CKwAzu3yvqWLivFkp3SV",
  "key25": "5KBmwPSJVrkTAGZF55qJtaqUK5wgALz2q1GNEuBm2cXc3Qb29iShnSiAidk9zxoWC7ThqeNY3upd8mzhUb3fZLuz",
  "key26": "37RHBEBLrgsRp3R6odEM691DrpoyxPESnpYShSkS2SREaWAGRo1tt5nNux3i4SiwYyHxEJDHiAFRBXjaw1J7vU6Q",
  "key27": "21Kiw6tuWP9if4WGzhrw3m8tqQ5rRXneMncfd3K5DZHe7GYSbVDh4zZpQhZEpY1QccmW5PrbAur2wR888HMQaHX7",
  "key28": "3tW1JsqkcYuTi6jprah68BHkyCYH4CQQ847D7T6ix3vAPrf7Z1cAFVdHbEvp1KLVeKTUkMBs2gWgkhQ7qGdkuBLg",
  "key29": "3phsw2tz1Zci8eZsLpd1i1gvv3JMSQAebZyPbAS8FqfwapoVfac4Xtm8SXfsw6HMUQK8FGEbr4j4xD5vwFeycaFf",
  "key30": "59yKba1LEaEXDSgfWunNdkhnoAtebCEy5tQkZJ84Mr76rAPAB9K3QjUabcnEydiEN2DTaaPDty53mYRyciaN1iRB",
  "key31": "64SPese4FHuc2Xyq5sH1uAaDgvi4R99rVeMACjMyMKLvUL5vBb3UbvM5AoxC7dU6dVFSuPxUXuKAe9CmVx2G4Wfq",
  "key32": "2UffEwr5C3XvsPNHXsRFV95UR5WjLebvzSAXdZF9Wmkk28eKuNJMyByyfqZPhZDPXpsMjVo1YSfTrx6yAJz2YVB1",
  "key33": "4aAMWXKK6VmT1vCroykbadg1wgrUuNvXcry25dkYomiRajemdFcx1NtC44WiDeU5XUGcDGoXFp427NYYUwPSfi6M",
  "key34": "262xiVg2W1KD1ktoDotLXBdpRjzAwYi3QmAyafcaLYk9LpAw45bQTLYWxYr86wJPfnDi5J959PVThPQKd8ZNhV4Y",
  "key35": "2hHEVfCawHRfrnJxmzfGogvJZdpYkhhyymUaAWeKDTKgtJMwzgiNV29MQKdy3aSmzGHLtGnQBAzDkTYWKYdZDeHZ"
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
