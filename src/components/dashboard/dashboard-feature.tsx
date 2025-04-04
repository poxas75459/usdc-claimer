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
    "3vALagsatMc1sQi25ew9Ks2N7xoYkazd7BFy7tZZoVw1GjgbaRsNqaMgAF6aUreUSweNfsTYp8hj55TPbNquhTxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XPoo9toc4prCAVcDdsvDCFxtpoAd7QgDAMnrL3eeUGM2DSByvMuCsrRrVLTV6iW59Zi1PyDEMnrJGWZLujqhhnb",
  "key1": "3wfhDPRmhDYJaoyPhFXsitqKKFdY9SPZnFMK4AQVn6381depEixUFcxr4htwZrERzexT7BhVnryrXfrDRoQpSmCh",
  "key2": "3uigc6RTSQPwQmoFjDGDFYLE34xpfqUoTJeRTeZB2rz6MkJqwNapNGDR1BTNhswtZDGr3XBiSbaHLjZDE23Rv5cL",
  "key3": "5yKdHkDUzoFDhcSvg96iW98WCgCJ7X7YU6vexDDGHqECX3uVfmmwCHrJjWNBKSbiDXsCia3n1eTzRih7xcVnHwbX",
  "key4": "YwZeJ7Ab25s1QJ6KWDECLBfsqzCbTLsCivdSopJyAPye8PLTpswk9hwPYFxuDUPKCwbShKpbr3gjgaHNKeVj9j9",
  "key5": "27qVicvsjnFPKYe911zSiyCkYSJ9sK9EUd1ZR4GDRY5DV5sBP38rYLVcuqtQTJz5hfYH63RUXzfWsgqH4yaKkuAL",
  "key6": "XVssYpXgvxAZe5Q2FcLthAtTzDJRcZaxLh7n51So4tjFx6dK2JcELgHRyiLo1jiXV7ctDvpokag2hUjPSpupSRT",
  "key7": "4wsGQLGY7tGsBGqg2yULta5zTwGbmzUWVNWWaZENVNvTMsLYhJufi2WSF9UaMEGErbB8cVViFrLXLv4y76ufdP3s",
  "key8": "3jXRBG8PY9zpezbfb7SbLCWVFaWJ2DR65eZyEgZ9AR9MqVw9DdCrwgTfNtsF19Pvb9b4UFctzuVrgLBuv1zfLuJU",
  "key9": "ZGANddSDwyxpwZRWYKzsoxhkGNrvL6i7836xh4e1iVEG53nWnphHPstLKRL5YfzFLik1YKJHMMRbwZbMG661QGL",
  "key10": "4rJLDrDwsmBsaKRMxTjiKWDSdGbLmg2z1gyCUve1vEgSx2kXNAPDjSd9DkVqqBN3W6yCvi7XnZbUBaedfH6CpP2F",
  "key11": "baPQFJ8RYuW6Wg8wWhzJRWRFX7ZcJ4sxeGAHrqr4Rhhnh5oRwFvY7uaWVwUpQrZGvRqb2LyfgCaLuaw2UD18mLk",
  "key12": "vMphsp8b4M99vvzTgop7nXKP4K9injNy8oKf28Gy5q16YEUeUCM2Yo5GyKjxVS6jriomdhGvnSYNC4GXtKbseNC",
  "key13": "5nAejz4gTmdmrPpBxizuM342VbmvHcRHFDHF42sj7j3r3NQ1Yq54YezDVzRYWUSPbQhDWcUy8SBmoAFSq7WJmDsP",
  "key14": "4wHJBUzHY6qPDxrC2MHTgsgFTHJQkS4kEwXXZ1iusLdF2h1KXQeTu9i9CJg9e6WMUDP9V1y2exho9nfvAgXTfj6m",
  "key15": "2P3ptNcHKoaRgUDFWN3b3irxzcFweyrmJd8KDH8je9AQkSR27Zw6WncNd8iHeQCGxUe4qJXt5wup77ePmuj8tLfF",
  "key16": "6gptg5nhJH5ovAhHv37kkkDLyRggxuTb5E2DeyksLqwa6LCYdfBh7bq6Anya4uyhXeNMM5gSW6VqRi7XJzd8iZg",
  "key17": "36VxuzFVxmGEQ6hhPxEnfvrewzmNo1BMs5zR74eKwPrs4oFqudKMjJVVgKCUP7DJGsqa4F2N344xTaNq4YzYhLJ4",
  "key18": "5XrZ47YHaEEjzUNkYPkWf7dEZ3emfbhYTWxrptBRBG98tZmzBx3boKuRMaysjHQs4FBi1w8vwo3FinSycGMW1U8U",
  "key19": "5rLxA6frjP27vpXKJw5ygKKRqkCSa8zByF69f1Brny54CpCPyVhKaoJnLgPvTfqHxN3LMStzFVKNr5WKXAp5TfyL",
  "key20": "5fC49rNySah6BxZXVWqZttvamia8hxetJRj6wTeA4zDH59xxwLyyoLydczRMEyUP7Y5wV2YxadMtybkKz16p63an",
  "key21": "66MDmrGiqoQuq8SbFUSeeBh4wHCGvN7xZTNghngCLWgpmMtK6GHNvJf2PjwKK8zgZerBqNFno8rfC1A5CWBJzD7c",
  "key22": "5e8ZAr94U9Jt2JpWntFKVeo1wLSMzBuXUXNSs4nqkZFCSGR5AToMbDEWRYYYix4LthAdp8oN9yaynR1R4pRESXbe",
  "key23": "5DRAFvdG9dbjYygFHiNrARf9yizg84FRJ7V7ztpEY3E8Qf6zbonDtQ5XguGpTQLguUe6mEUU2G94mqfppQQW3rQh",
  "key24": "26r3HnbfTyaQATo6MAVWMZyPugNrkK9gEVR2AMvvrvgLrN5buWFzfjJQQ9sM5ao5oUGBFtnSWMuQ8tyNerc128sa",
  "key25": "4WSnLrwjkJTch2pPTVFKKdnaWKWwGM7i5wusEeu1XSKGnmSAvuqfk9qQuw15uCFBCw1Lh5ayxceqeGNemoFFmGqo",
  "key26": "5Vj4vjTC6rQNTAAGEzi6mbMPd6cQC4nYjKacz8dpcog8hKBbrDkJLob3SG2XWV8Wfonc7XmrefVThRAJKBWejTby",
  "key27": "4jfT32Na8Gs7qcBmqdXKSiHtmmoeL15iv5k43NGcebyiqWvwWAodWNanHExHpFt6r6ZV7X63a9fUzjktnrFzdr8L",
  "key28": "AY8K8XjMguswuBLBYut8VyVieJSS1xCz6jtmLHpRNcqTugahn5ZC2K1pGmothe8eXCaLe1vpJxQTwsGzYEDrGyc",
  "key29": "23Mophqm9tFRSZkcUL32SkqA5VbRG5QjgrzARqRRCFkQ4b9jxKEdDtz8FEUC4NDoCEUc7u5qXqdyERwLVu3hfXk8",
  "key30": "5vsRYmHNc1mBUFrrNGVftgPWoaG48iKM47XhsbM2okioST891W58JpR2vSX2oc7Lr2vm1cxGywHosaxGPuDjquCh",
  "key31": "dY6DyWUzpPR6KcXJ3bKAcY6RcHLGAMRnpGuTu5HLX3HfVtzXs82YHeYyEv62jHzaDy1GqhGYT3epkkQsSgw3ZJZ",
  "key32": "2jA7V6BxxB5Gkshex1soU1iJ754mL3WdGAyYPDUh1pvxZZmwUKmvway3mGFNGrYQXYdrTagD8DxBAAiCj73SSxJj",
  "key33": "pew7i8mNn5JnAfLr6gUrixsnUqQp7iUcHFS9bToTA7nJGLRhUR5dPks6pEzMYiCGnp7DgWixEQGzPo8oKiRXKGD",
  "key34": "4yED6FuVKdhD1Feyfu5foX1j6KKBTsRfQnzXARiWUarJHqdMAKpFmY3SG9cCEvfF7zCRA2BdyJgMFHx4ucsmaLnj",
  "key35": "5E5b1NJnm58RenXSP4BovzsNX4djkJ6XMEkYADYsJe2vCAKVA8XTgX1qN89axffvyx8TDQqp9m3c5jU6YcBZwJg3",
  "key36": "5J7ja1o2gnMeKjtqPpMo4SDytEokyvbXbhkqp87PmC8d6AN1tmV18UrSKZUeYGCvsRvkw9btncDdyREh5PovsdD2"
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
