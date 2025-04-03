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
    "3rcDCYbnuRfV4pgpLKNLtQBUTaytCvsT76RMzMyqHV9N9EeQnhdZsXUGCrt1FgbR1Kx8syXSf6AwRaNoeqU9kwkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLeLkz1SLBj7unA1bXikjUqkcQUggtZYbZnN5Ams74VmPFBRYZMWwpDW3nerUeCDE8FTQDm7jjRBb62qbdC5Fif",
  "key1": "4h6u4Vwzt9qLd9GyiMaMruQbwVft4WudNA1sPDATgpQ8jLTnNwgdyMWbA2WU6vh9ZVxLwmVhKuBJ1tt9Eunmc4Nh",
  "key2": "3JCNk7UvAUg645WG47ws8aMaRkVezJX5tFcwfJQu2MkFdj2xAopM1YNC3prdiybxFeiUAamif6WNV7w6r25y88hc",
  "key3": "A5EVNU2D1F7iZM12xcynz3mLeHzv1Q79nE2dWBjReeaT1QDdse9UeHWrKN7R4nm7whFXg8cvjRnaG86jDRakNAP",
  "key4": "21c1b2QHPEvi793idpXh7ebB1Che3rgjiUsbqp5jX99Xx5McATGfFyEaT68fFHusYj7D8SVD2qM7v9ycdqomkmRd",
  "key5": "2vM2L5wgm2aUoazZSdm4f9cDEe8u5SArr8PXATzLL3TNjx4pyf6FU748x1t6tYo8zNMsCkxfCBFcJSrRedE5qzJ",
  "key6": "2EDQPhJMxTtFAKueVvsnz7B3TKuJQNR6GeCEbTScL6a6zbb1o2YNU2bZhiiZ8EEbq9qsFjVufZVdioLbaVaWhcQS",
  "key7": "1fabJ2rFfhLQ5JG4D6WaPvVW31edzosE3DynKiGdPvpLfJx11PuCjMfUZhkSTooVgVExuDxqZQJ272XFuGYkaHN",
  "key8": "3e1vyZci8m8ZwfqESKt4Y5CFQDgG1AW1fJjgoC2fTTxi4PG3zayApjWD3o1XgbWBQgDmEqG4owcbsdkiUCd9Y1v6",
  "key9": "5LseLzwpectKHXAK2nagDh7oiEoAJkGQgC9nfo9nheXeB9Ja58RwasiXxRzPYzpysiujSYD6i1DW87z5Ry2SSY1q",
  "key10": "3xjsonEVKM1ro7Y16XpkZGs1iDy5tviD5Z3i4vQhV4U572BexjU8bhxHcy7SzxcxbaxrgB7ZUtojY6HSFGMxab1a",
  "key11": "3zEQqsqzjKhbseJ89Sis1UyHFabGMdGWNH8Sn6QhXWtVdBSW2h2quqt4Pg6g5pPMnjqxYkMptbrRTX5rxVyFrygX",
  "key12": "DbEfLQ8jfJPNTwbE2VVj9Y6TTS5o5ctcMGoKzMG9uKj811rTw19ZVFkAwAd3sFuNA8X5UW6xUCgFPcbadQrd8CR",
  "key13": "2f4QtK6HHzMhsP82yRxAzjrUSvvYpr1Yzq2vUhTQhxNQ45sHNjB8G99wwyLRWpLu9sQd253sofgVB3ftV4yoFp1D",
  "key14": "5aMjmWw8JxyPucwJxNG3yLooETx6PrKz8dCtqbUc8bq4sTGWcjJnjLpC9mA68TSpARTVjCw16DuoeWL3Um975bNV",
  "key15": "5TN23PxYd3WxXYZ8Tn5tbyGXRpw5k2BsMfJXiFwLqCaN7nuo22NYACusXenW7wQx2CZBqWjTTPDTHFRU8YqXkgLL",
  "key16": "2sT3XGtAEe8SEV2dPUwUC9rs34DWaDDyqcofjbbFaeEnLEAeKnYn43BT9tbXaD56sPKEhH9VGSrLNSBdoJQDa4J7",
  "key17": "4JGMWKirUTNbvogetahBRKmgeL3kVjncJZAQkkdxiHtDv3capra2fLdim1juuvSP1RdGoYNBq5UqBWQ9pZrH7fjx",
  "key18": "3tTB5LEjdhYNeRHR2YWdgdqopyk7WZbDp244vzysQYtkWaLoavHnX8YeRD3Z3PYiLd9sE9zawzRU2dN9girMUCmx",
  "key19": "4x2FV3abFYRRwZZVQ5GyDQBwQsjKGgX1F9iYHZ9rPdjxghc1y42GkiLmMFvgEiYMxqbNcu8tg7DmUD8yebTtnT2W",
  "key20": "5pcFLTLwqTBAsDgt7fesPjWFead1xsiDRWis5uXEXL7vFXkgsUrezN4z16GSsYtYhaRRJVP7Xb4ow8n2XNkpjdgS",
  "key21": "3byNWcAkNjN2wmr6XnWxaH8iJ19hm7MKbhPZSiTMsWdBRs7qJHF45MjvUjFvVe78LEqqu57v2SXRaMEsfNdDs224",
  "key22": "2Q63oaFp9RKbhg9MQsHC9vmTaVooHwkg3pwGsk3xjTDy1H9pRihne3V1iFvJVxZAdXJPknw66FWSMk4Nq81icW7J",
  "key23": "39BRPccwMxKP8Cd4G6RvBKTvoBs5yk36RskEbtE4bvmi5E6rNUJs4gfJT7u4ZMvF7ueFUXVxJyxWyEzC99qZDn7B",
  "key24": "2bvMEKrQw2uEudvtczypZSPB6xcGs831hnytF9WAV1LfDEvcLvRgJsGKdFFMGHTSV69CHibQwBGJEiqsmrnmDkoL",
  "key25": "5fFNon54BknqAgWscfW8VhKLUNx2uz91oxDTP77ToyWw6METkwEfCzDMNNciEkqv8cZV6JW18GVryDTfLnuw6wfq",
  "key26": "WQYqk2RTZ3mb9nGrfbhHct6roAxv839mY6WFSgFB7gsWYfc3kkLUSwP4ksSN3LKNP8DJc9DSDUdMUuzdA7UsxYe",
  "key27": "XEzpPtfkAV85chT1NzvEkdFKpunjZT2DzxvrmgPaMsZVUgtTNULefj3aSyLhWSCxrMgVU5acVar4y3uo3QJrPsj",
  "key28": "4VkJZQTRSzMWr6z5yy7x928eFfmoDSdeGfryLCgVnNigkutnSWARyX8e1ppewE4NsRHDLZdd3LbKp835GmeYSio9",
  "key29": "4UyugjsFDducnBzYPEw5GPv58QRqCPdAkmRonz5Mchz9r9EvFnP1C1dMW58FaJvocPKVCtrKyNFAyG62QMLBxC7G",
  "key30": "5QAvqowL8GoWTP8EMhoJtJF45uJQm89J8prytsfg8yxW97ownF63gCnHGsZDtNNnE8mJNQPB7Be6JnFEJEZuis7S",
  "key31": "2vPAqFndRbozoQbyxQdsHWhoKUY7ak7kJ4KpkTxCxbiFrSpJkUXUnEXsRH8mUwwbwuLYU53P2fk5FFHCHYVTSQ9k",
  "key32": "283ADJSuWC6FvyRMpVtUtUFGbwdQnn1tUoecQYeKuNMM4tw4HbDPHFRwVTSJ5WjnYNjK9cq89J1EmcKkm49Qz1ES",
  "key33": "216usmoniRhMLChcQFUwhpTaj1cxHyvZqWT3FGyhsYPH33VrT5hFZ63sDEzA3c4iYMpKdq3uYLfAsKLsy7ie3wH4",
  "key34": "4zhtqWHA7tCuFWMZwoiRmULGvmMELMCCsRA6Vcg6GxKCJViikNxMq25eHC4CReULACz9dpnb6UgjMkNiYUhma1PM",
  "key35": "vVh691ChBrS2NZqAoTf2uiaUjHQhUaNfxwApEhKUqBjzniDLGLcStC5V3kfKRnE2GFh9wJwmsk2Mg3WKK39AqGC"
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
