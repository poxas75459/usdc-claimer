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
    "4wcq9JvTq8hCk88tTKxbqhb7dQnnrAbU5krdyvbrRHwtN5RRqqiVqbzgmnykQ8JEjqx1KofvTGJ7D1yyPupXfcMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33X3sgZmzdbAnS9NSa1jTM4Vk1eyhwXgXQq3pF7BUo3pRwK9TGzZyx1DLTBoyPvAAx1oBVWHrJu2wgdAqrfCqbeq",
  "key1": "24nxceKZcdi7RyxVoSDXZndpnxRpQ2oUYtShAVjp6pJnFkPTqreJYKxPNKsuwMDAdVZDe8X4h8U4Gyq7zNoA1PY2",
  "key2": "4hvWTw8VkQGD3vNqyffsLAkqkueR7rH48LBagT3oXzpTAyQfUG9jpp4urguF25Z6wSBTbY9g21tuc5mqwzcyQ8hq",
  "key3": "8J76m9cP91GtPCYN3fNLnShgZFvSA3jjWeZGzL7SEBwmC27zAQCDxJ9uvVFzQyETaZbveBNXy4buyfPsScRH538",
  "key4": "4TtzEKszFRUPi7Q6HWm9vZwTj4E39HpAtpTwTwjrdNRJAUnhtuPngx2tuSVMV5B4247kSARqXKYgciLPYfQteuTN",
  "key5": "5kDbt3fiJg79fPWd68BgMwSo7Nt3wmmFgnUh56yXobHHy4gsX5nh4oAKJS8hTC8WGZVPDAfP7doEsjRXUatpzbNb",
  "key6": "3MCkyL5beq1iawGcUs1gzXhcsj9544nys4z2PXVhuXxcsSLBL3jf8ZgkVDFZop8yw6vpkm5FXThCMPCMHh7b971W",
  "key7": "eKexcgBPquNiyXAMYSmZmki8ZeziwbYMPH2PjS32zoYSwYgtjd2RFVb2NG469EtEsQUUhzb8xgfHw1zcyZvh6zM",
  "key8": "3amLQxZoRMPNLwUgxemq7RNmq5pNwUhrL4Fa4XTqotwcRXoDJ9TtF25ycVXiCK6z6eVa484uGsPsQF3u87h2GF8L",
  "key9": "679CRcaNAjswo1TkAWMNgkWQH91VDEkKaeyk1uDUUyYrgZKqMNXgA2bVWfR9mZHpMhhwjLAXLEH7hRJyMfotknvy",
  "key10": "4yTnxb8oLxwLNcz5ThwXoXCABhZQJdMbCRxpJXQEbnCMq6vMVyiuDaLjsMYqrbVfC61qAeBYPrunCF7uiMtJkcFu",
  "key11": "4A48snd7Y5zcudhsZk7RhFaBTMBNMQ5bDEQmxhwjwyDWzC4iQv87n5BKBp52JwqPgcWoUZkPcbV55m9rSmivGBAq",
  "key12": "66i9gxGy4TMXXh2psXRnvipyK7nMoxyYCnm3poRC3KRoTo5NiSeyb9Rv9BaHVTivzwRphjKXfQJWDQQiLCHj6ad1",
  "key13": "5JHxoD4sNMM6m2i9qRcSqYVpWTANqaVTE7tdd4GzPHmsYzshEjTSSKHxrwAkgGzRk4eWTFQ4HRr7sFMXPTsoFEYw",
  "key14": "46aF4bwR73LL8XizvT9yQ5pPZE35k1jjrqfPZXUEWR99cVh7JdN4DSYMeoZCMgmt9m9YuPxynPNvnhjv5tdQ9yey",
  "key15": "fcK55Zs4NnjEhEKYVMTvZzwWd4mAtigCis6auHvxreWyqaNyVpZvhQARvVSN2mb41gjRbP42KDWD8kNszoFjGoL",
  "key16": "fpHTfZ43VbVjSr6dzt5KdtQnE3E5UjHvTP3F35uX48UUKFfcQHZ8JTgUCmsnheBdaZh7tq7FHcgKWmkFi12erM3",
  "key17": "3rS7ALGuwJwPmyL79eAjQLzcoHfpnBUL4QFA1TtGcrU2LXxC7sru4ELj9MC1xf3QR4t5UeDdZ5W9fgdKTi2gEQd5",
  "key18": "mogKLKsUWGdDfKwN48uv2m3BCYPxQMURJkEZyLQTnc43iYqDFSCAKQBVDRcCxHePSUYbKgDoUEvHtWYV87HDyFt",
  "key19": "vqXTdmzQ2JVuJbos4anNpC9v9bM4vgWipNVsDZnMeZSkKmMdNeCeV2UkUoKgMZ18WZVXeyqsjzF4Cy5AZx3oQbv",
  "key20": "2yr5ZaJ9yDbkkec8jvDyUj7C6DkgQNdvfGfuGc65A6m6bJdBK1j4nZNBMoyFdsmGHNCfor9EanMRX8znQikabsgn",
  "key21": "58r8Gt9VouqxyjGPeSG9xCBxyYTW4SwvLjrBFTBwfL6mZCymZkAvRdMijP5fXXsMpzpgwZNfE9bQRh2ZboFDBhWo",
  "key22": "2TJvt7tVt1vsQSxY4g7Tfsizv7ppxyAdBHqBoAVtbMzVDzBxDZJyFEzCmEzXS13LnNDbuQEyHnrpUbppDM3drSgW",
  "key23": "4UtehGFk6j7hz57rfi8cmqS5BN6R1NPPDdtea8pRzCXkXSmdswRisdDCrutdQdfXyVAGAVUddpKYCPAMyYuhfZrG",
  "key24": "56Ss2nPab7CH2aYBQS1uvKUfHvuqDXCvX6nnmkuWjWNJoeFfMvYoaBSsErSvK3tk8XnpLNm8Nc7pDmTHaastF5Ru",
  "key25": "2yfQeng6XP3v6bmvageszMHD7i8eBr9VhQBqwwxeZKwUihcM7hEcAgZwPRkiTZjNb6tQbT7cSydpzGxwQQiCdWTk",
  "key26": "nXtSwQtzHuk5mjAozZrxf2ecgv8uZ3zaHyH1DYMNDweesH5WCf7Kuj5CdUWP1qj33ARuAV7FwzGXdF71bMEeMmS",
  "key27": "2xtwvtU2SoDmfiJL2kXhW92SbVWsLfXx6LoBfDA3oLp3wEFJaD51nh971Ap6e1PSUhxH5xBp4LBKA6bRWg5sFA13",
  "key28": "5GYUjMLke1C8QhRdrmYSj7ZiYNuVJ4RgSB7a8dk4dUveCbjdEosB4X6zoL7LoNKivHdwnWcTP5KvmnHEdh2rwwSa",
  "key29": "4wW8DfB4CHfvJ2zKrYrATn8NL3qXxNrVDwmrd77gzWuTxDh39Bt5AmMBotbLucFjupvg84n227ZnBhWA7HYAdJ2q",
  "key30": "2NLRavFrm5CvzGkV1iPhGGCsASukFoT2eqBygXWfDb3VwMpaL3pCpqtopwDByir9K7hoTZ41YkUXEx4gr4z8CSiF",
  "key31": "5UYGxkpmQAnSZcQ59qeu7SEXCiJr7nkiyuUbpYyZNPeHVZHN9GHDif4vM4BGDvrNA8MmFNsQBjV2HtZ2pLGmjYqo",
  "key32": "mjqYPwwX9Pb8gh68VRvWrmFJ6sPdoMJY3cmp8iqB2cyeMwyMirE6jKaQJESfY4EUrKBytP4u5NCKcFQRLbqs36N"
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
