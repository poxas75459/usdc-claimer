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
    "5wyijffZn1ERx9tNvUBTfKpYt92MMfK7XMCnzgY5i5KYaGATct5defBudDukwQc3fFqEJwu5ZyuAUwXUvP2GzkBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1UT46oJkzVGyt8mpbHE8jexuonYU29fStnqtZsVbus9WbBnRWh8ZQq6jibSsdDAZSWwE9LsmW48mxrTR93XmTN",
  "key1": "48wWVPDZ5jXgeLGseA6rE5kJni8Sch4UXZH2uQEA2PCKRA8khEJQP9ZxavFzitMx2KxAaHUC5UvU3zGYRFguNdNp",
  "key2": "7omTozjrNR9ni1Cbs8Giese5H3EVcjC8tcMRCoQxsMF1MspW46EHKFvWiKhAPnh7r5vTagdzZgTyATJ2yCyvMRf",
  "key3": "36pMVbBziB9vUdT29ngk3fRGRypxBDWKp5hxFgyjRBt5A31mdwFaVxRFsYU19TJq7GJR2BF2woaDxg5XS9G9btXo",
  "key4": "4TyQpnrbVXoaktZPY2M5VDPEPKhdwWXHzKaH2SZgWVnbVQdWRggBC4xMRpp54tbK2M1RoRLe5pNsCF2DEBxbr3gX",
  "key5": "HJwfDVWVfzwy3RHZ4bekpaLJkSY6oQPm3VaB5Wj6Y5Jf6tzg3QUes6h1tASUNizyXnj6VUgqGPhTTJjfYHwkwHi",
  "key6": "5zQmohyhiaPeyp4ANjhfFhLZ66oegxzq1ZzLJoSXZ8egMv3oSfRP77qDK4MWnjviu1BQTwERkKMzyNpwAcgMhq6A",
  "key7": "2VBwStz1M8w4ppE5XPYFf6aLA8USvxc7GiyzMEJCvBMPRpfAJoza9FTsU3PWesoESXbF8CLkh1q93ckSsUFwRZVH",
  "key8": "4XKb5QgpgCbdgHC2CJoW4eXpJnPD45pMzWFDJe45FGzqZgasdsE1EqNnQDMc3xnMEuNTcp4ujtYvqv5Kibgt49zM",
  "key9": "3rM5wmpBTwBYWF69YSpxHLr1xwuMVRT4TQG54NRLH6QF8cD2hPfNJD9rwXd332pvG4bHq4y71gkDYaru4stXLyvE",
  "key10": "3RvQKBBQtTAnRDmv21GkwUWdyvspnerM28rSLMfpznnTuXqwU5BDZ9gDcynhRgtpZ9EhS5hVXtQFyrZWVn8rQfNp",
  "key11": "FeA8Sxbzt33viTvw7PV8TUyMB2MhRMngCMisKZYqfSNDB4NTvSx87UdQ22F9ss4efryJt6BSAd48dH4mksBt8zU",
  "key12": "35Ev6nXNgjY8SwQUEPdmjJ5nfK6qv6ncRsS7cbM4PpNAaU4yAGf5SXD9EjFgWoCVFiMZyPK9f4rv4hwyYVeeiEL",
  "key13": "3Nv9kPX65nRHJU1y2RxKiB43sYxYD3m3HfXnhAxJ3yQZp5Jv47APMBqvFXfxh3pdKt8dnz4VP4Nm5JtaysbDXsGL",
  "key14": "2VK9qty4U4daWZTrbtncEZvkk43uUXZgz7bgYYzSyz6HgqMgw91RxL5krbgqZytVTTXUcQpK3KdAzdU6mJ3zGAPz",
  "key15": "3hHAyJs1ALv8C6DhKdGgFNP8mcry4va64twVzxJag1RAYDFbZbunWVqdkUMN6RnwERpJXDeNTZnt9t9oaP6xux84",
  "key16": "4dQHxR2uiHyMgegSPmKAYr5td6TE5TYmYYsUykkinSNLjCssEfCXsc3bgiG9mCC1CG1TaP5prdRLC6dwxaXzCVg7",
  "key17": "2avBG9ETBqYpoEcu6u3NPCdRe6hTmhRTab29BRWJSL5Egi5FgsRVifBhAQgGbao1Pan1HTM9ihakzMetMFGppg9e",
  "key18": "67jvjTSaQH1Nhgq6SHQSj1T6FZYeELCt3oCaPfCxz2sRLbHEZX3t9e8JrMZ1Y4uh3LiQDD6gtYBNTiPt6mrzxQfS",
  "key19": "25zVq5qjeefYaen5dWME2pMRMe7iHeiDYdSjGWBguzo9pnWH57Q6AEiNSL2kbgW7SKTCYrbQBN4CWEmYkfM8dRMS",
  "key20": "3U4wucpfnGgDJR7Sd3vgmSnpMDUVwmuSypn1eL7M3yXigEPLSXiVU22qBGnLC1LWp7C5gzg39BKq5vaAJM4c639k",
  "key21": "5Kg3rj3bWLwucbFE2PiqnxTZqZfYApdEDxhG2mJDfjk6SEPW5eLK1UZ91TDHAEXdvD6nGewMLVnDKdDuT4UjKs28",
  "key22": "3LHunSQyJTAyEbqjNU685QYxoJiaGpzdPwCB6CH322zoXPW9BEKr2wf5KZGW4YBhacyfoKTwfttu9FhVWEeUpEN2",
  "key23": "2mKekFzG7btXr7ECV8TcZ5GPkpNZmruxbVDDPr9K7rAGZT18XT11u9fv6T5SSFSyRT6FAAEgqqRnZvUQu3pJg6bh",
  "key24": "3t2RxgJmAwMFG8EfT6dPcPwFi1QwkkVAgukHsDmXbdiCY6vQYS5j5jkVZ2XUER4Q8ksmiYrB7XQKx3yWYc4w6Xd8",
  "key25": "4k6JRRGSqzXg42ZJrXZeBr139WZdCDQozchzUGUrEPN1Mku1HX8s4aFhsCC8pcNjEbKzs2KQ8ZuuJ52Qi9aFLzxH",
  "key26": "3CYDoEoNNRmqeWtSdu6mvqELHAxEsTPHiLF43LQiAzHevbD5bV5tJSGu7d1o3P6Wqjg85gfpXJEtB2uRn1zVEgYT",
  "key27": "GJzRSBccBBcYwePuz7AQvsKeussUKPgodhhv9w9ZrA2DRkeyqdoRHa6Y84nJpWnAM4uPEZVW8zrjRkYBNFcPz5c",
  "key28": "483jnmvNViXarNv6355nmU3fmYn8Rn1UtkREwGnvqA9G51DJjDD6y4LSA7Tsx9WkazUugyNkaL66zabM28TmnmJf",
  "key29": "vn1U88WA1gBRWvisXwcRyt5XQuZLAp6VB8UUvrbsTZ1huQYa49qDJe3A9CKqbDdot5hFdgLNMiAMtU3YFoZgR1v",
  "key30": "67DccStwcPWrXscmEwt9Ej89XQbnRww2x95MosW7aACfySVU2MKzVEFmfKb1buGyfn79VKVK3qEmoq9EzD5piKdM",
  "key31": "5ofw7ua3LjTi2rYRdVZPHtDJbs6jSPp97xTzwUb22SAbdP7aQ84QtEtsgSMsbKvYSqdmxnLVdwbgfHSMbBbtYXzs",
  "key32": "Lr1rfe21pPVXqHcvCVPHSeEqnrZo8xVGePz7akJxBiMau5j4Xcj6qJFHoYREXG1J1L1H8MRLUQNwVkM98PHgCas",
  "key33": "2fDS2MTNoCJ8RPmDXGtdahaAendJYSpzBhUZMMhivySMinDaKCxDfMVtDxdXYTaf9kbpz8p7ySVwSmP1SGXHaEJE",
  "key34": "3CRiQ2CmxwuucrmbesJv6H7c8qgkvQGqqvL2FbRnugmewqswxEfrZSzbfqrgF2i1umZY725dPvBKe29FQekdHEK",
  "key35": "2wK7qPrhwBxjWtwLgEp1PpKKNpZ4gPoMxYUtqG1hgHmL7BH5AuD1MZjoVeDTGxJ5xSbw2MpSisrGogmsR3fSm2UW",
  "key36": "3NhgPY8yUTSBj8Sgd9Jx5uvqEZAZBKt8W9ycRMCjhgUgxJr1wZZVwqDXKkv7jdjNij8m2HTDd767hd5Ci3PyLAzP",
  "key37": "kuGdiCaJhCvT8R1GYb2mdT27bBG5ZnagryJcWFqBkqiu5b8YMYNe7iA6rczxQh5HYET4igPQQgLa2Js7KcUHsqX",
  "key38": "2DV2JF3Du4snkvgF8MPd8vS7KF9NjrJzHNqiZ1vK95qbd6qVEshfRJfRSjuXLrsupQzzoAFFKcemwBWktZFm6bPX",
  "key39": "hRcNZRcS6KBaVjmP5GvmSzVoBfaDAySKCir36nBUYXuANtAUh34F1V9Dn9T4m3hm5cMToK2dHQvf8ZPuTQpg23w"
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
