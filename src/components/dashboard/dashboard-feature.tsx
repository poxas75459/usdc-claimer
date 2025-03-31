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
    "2NNCfghUieA9usTqwDzKnV3bQa6SR3EnGSFjaEVN6yfMtHhQDMBjgzr6JdhyLoohn5jtJiELxsHVyDoT1jpRNNQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqCiQHF9twrUgfYq6hyihTdXXqhVrbni7rHdV6rwBN9EcozjdcgtKrcix8ZPReAr6MTyt6toqp1s9z99U1oeSVJ",
  "key1": "kMgBXTgBK4yhiL1XpVWA2jQ95BK7KqDnenbGY2DrDV7aahNv8frzFPND9fvXFyENFbPMYTJmLGCsxPKGHM8iJ2T",
  "key2": "21S1CSZw6YLnPrxyURjo2yJSBh8YUWyVcj5TVnMGeP7iGWVUf7u5Ddxr7mwiYWwpQN5Agbu6RXE6Fs612XfRJap3",
  "key3": "4GpsZMwgXU1Je2pdF2ue4JmJoFqA1KEaoioUBmfydCTxLGTafJ3dUYA4Vu9mECVet3Hr7zozxJS23ns9NnxnChgh",
  "key4": "3K4rMYATKr94QP2TCHTPzNbG6refn251kMmj3BuMyJPHw8hGW5zdjT8K7AxtZ85c3FPi52vS1Fd6GZtth7aj99NN",
  "key5": "5MYRJnVjvWAuChVMKwcqSt42uZUQ7SpBHPHosHevBxRowSFF9jDw5kvxUnzaWRVNEShD3GwqnTkuUdk5EZPaayVV",
  "key6": "mWFA75XHr2iCkgw1cgW4wbur6yt5SLYfzheXBpf6GgVUD19qFbkhsiwF6amsTpYQTsKNAsACGmsqYuSsc2jaCYE",
  "key7": "3Saku4YqMjuoEeVU4Fq888UJL63vrqbFryDiUrV5vcoyk6GVwbwt7t5JKEzZ1XKCUf5Z4dhZmfWAx5jHT3mUHfLA",
  "key8": "4vXcSaFmgiEumo6q7TnSar4hS7uZ6B2Ao1snTt6cXkMzpNudi94VpNxbiNXtCgXpfBax3psdY2LtCR4d2TEqeVNj",
  "key9": "633KuKhHFjR7dgape5ZZQh2LdPxGJyHX9Fd738PQo8m2MQfmAXggCdCFvBFsBc1UWMtRAeCcx2dSHBbvSNv26QHr",
  "key10": "2i1hRY4kxSetnRJzq76PjSrRtzvdsMvmWXa69UTp2P5KmGzoTTE7kcpU8bgbXtdPb6fhMnmas6RJoNCprskxgHsJ",
  "key11": "2EpLShrpGQzVyiUWqvRbniu6Y5aSPYbsg7LScTkkeXTAU6yjgh4ptDZh7JJpGcGvGHnSfiuyCxtz1VehCwHi6BeB",
  "key12": "4Qh7sQLzfrtzPrPj18694qxHkhK1MFCFdbC7NbzHJhKAAJwHpDTt4vHXMvwS9nNKWu4FNE51RBNzPTf4xTVJVB6M",
  "key13": "5mXWdDamSB5N2SsfkHeT3oUx5KQXEcugv4qukHi6CjSrKpeUostQMpssMbdBLvpBRqMNEdn6uaZXyAYkXk71PaaT",
  "key14": "3gUCqjFw4dkY7Gs5g1aLK6Tv7sFyrtA5uhTohDZdZXrRD6i2ir9N8tn99tPxpraKAtngMUoxsxVZEYWfMyyAn8TU",
  "key15": "3aU7aqgxaEoeTk4Hx1PxguEzfzGLphL3zsfWdd8KwMZs26tXomu15JuPkc28EuggFtEuhQtcfhSbEBihcJQ7zhdU",
  "key16": "3XGe7EpbWtsk64hfcYZrY5yYamkL51Rw9gWWHwUwEpwghdLPRMSG49sQLZGqcBjFrDb3RacTSfpm1J5zpZP4iBco",
  "key17": "6SrGt8JmYjd5X9bnuQvEgUQox9LTBKQ2Ek1m19TxxPLyqEsYcLXgHqxjCXK7fag2Bjor7DMfAHaZhaa77VrtsX8",
  "key18": "498vRitxcBtWBZiWBEdVsC6JVN9RM9rDjMizXeaf6GSkSMP3iLzy4ywB8UebSgkSti3ufBd1rmY2mgZtFk7RcgnP",
  "key19": "4GjpWixCbRB2hiESWyognZrNzKeXsLUtH1EPPkzyKCnbsGgKubhFvdazacV6mWe6mBHcCvCMhuBjZ5C9grro53T",
  "key20": "65zFYVKzCuf7ktsdpt5F1Se3vntQ2kgeKU4VTtxRgUkitVv6g3YFy5hW2wvFwFZSZBcT8ikb5uadRVyv9U1RS7r",
  "key21": "51BMSE4hKs63C9NG4dhGXTKm1DNbFPPPuqcafBussyrwpg1GyFRg2MN2yRzuwB7kkxyRMoDuJFY7UnSsvfU8DL8y",
  "key22": "4hXjYaGS83fMgvsejzLFNn9uvTaJm5tNprweLJPoPoUWcqScJEjTpCgZ3mgcnap2CmTgvgWfLAqm2rmnwzM6egTa",
  "key23": "SijHurmnXaJu1oRGMdqWn6WRDA5tAfR9oH7BE1cjiDU8E1hUm99q4iTPGKrj6yY4SndF7jtFd5dr3EtPgE37iEJ",
  "key24": "2ZFU9JZuM3yxrR2TNtLHvTFvYYa1KvCDUzjses6syxDgQR3WE2EZ1CYrEAmRE2sDM6Ut9UBR5FwCa6Lthy8WRbLj",
  "key25": "52UUr82g7Q7g4xXDebFzJQCVQsPH1yzxGrZK8YcJ1to2Y9zy8bE6qESibwXmRZQnKmYYQqmiABXyxY8GttjZfAbu",
  "key26": "2ih9HdKYdq3T5SqwpQYXpd9p6jBGp9jQsUpukoUoQLd8NsPpBEoxk1b7YHFGApsHbuNTyxZmbEVie69UuW3daJou",
  "key27": "3SxpwxniFQokUL2biFkqjrTQX4rEvec1zXn1hv7FqzVXe6C1nMBRYEw4tV5ZRDhiLTJzxmJpMZVryw22R8941RQy",
  "key28": "2FRsY1kcSZ9eCfhXdqd4X9NafqRLEKyWDwSWdP3opz3f4egh6RnHwasWE4zmsZD8fDqyP1E61811ubf4poRLJ1DS",
  "key29": "jvozYb9ufWb4wC5JsHx9um3o9TAscYgSHne5kx9HYETf8aEuwsu18NPPt58rHwfpYVnGL3eikrGLXMP6sh4Kv9s",
  "key30": "2c13bcmVwFHr6JJrwmW4gPbWcsKgXBmEwLBCscjt6dBpDxDjDqpVuRnL39QyhpBmCwjdbCdQNt34B49jrW6hpZff",
  "key31": "41RKzqWe1pvqPp7QE3u12ch1YvNHnYHHqEKCRssYmmzfzfaong1gYXui567BTmuKJTqujtDPQSWNaWZjpPsfdmvs",
  "key32": "4D6BNDfTLubc5s4fG5PFoYudUAYsy7ybVJPXPASHEAybUoqEQUQy3mBRVPGu2BedB7ce12R8v6z84SehRApaL1Uq",
  "key33": "3xiQjtgRVeS9zbwa2SxburKMVbcqYDzZT1PHXXQXjKjdfMpZJjUbSYHLmENHubPJpaYpKYqtk2KciMqUE1Xc3gnF",
  "key34": "HMeZrMhXHGUsaqVQzoWkHufLjY8VjLa8uMuZ98SeYyPMtPNHYaWJMNrGqPPKaA5FocKGSVv9YkAbARhY3WBEn9b",
  "key35": "2ZTSUuifgvcCx4JQHgb9Q68fkocD8suh2HSt6oR4Ttge2ecaNjeE8QL7XLVmZhemaTbGsf5cqJk4Qbvju2vQySu9",
  "key36": "PGSNFWegrodDi2SEQ9J9rnrpMet8p9hde1MrvaHBWwuijZnJeUtxGt5sK7YtEJLGPrKqQiyXPTGJwgicmdxhbud",
  "key37": "46Zo3MvhGiccojvUJBS3ZHe7B15qDVAgJAYaNepGzeh1tdXvN9mmGjtGSmorAwnMTDoJ2FZUyHxQP1ZUmHtTySKP",
  "key38": "eFQkoXmhCMZJNYnL6RCcNcZjuQ4S9GHDszuAh4tYqqEoRTNL2aH9hmMZJA3iUBpagCEw3JB84k67mUxfQHBDGMx",
  "key39": "5pBYm8rN2FtACUtXywCGyP7BKXiWvgbrvFqPd3fxtqCoZ5dpBUabSSskcEF9C6wTme92V1eJfGvpqUqoriyHVJ6x",
  "key40": "5NLv9fSPh1f2YPhvZHpvtMQdruPed4PbSXJ18jKPUDHBUQTbBkgxbi1jza3yVTzHRVCAsvd5TB3TjQkPtLp9sbum",
  "key41": "5hSSKAEN9xA9jnViB8wUPjXdm6gVnaxD8pUJRM8fCsMkm5uhjMwUuZM5nw3YjncWT477fKX139k75YKVpaTMKhXD",
  "key42": "3zH8S2eZCDSpuhov8ZXs5Mzw2o9bSog4DUB51N8YnSSNWS7MtyLwPQzdXUfngCdWJYsrKzN3u2mZ9FPDek7AEU3X",
  "key43": "2cfA1GWyu518VDaLLjzxzX688d4mdd8ECFf873bs4eto39jUQPdK1NyabNsLUJuW9h5JWWqZiSjK2vhoFhs21md7",
  "key44": "2w5LFgFY6Qtnhzywm98UkLBxBYfSjEZsgnPy5C6DLBLUKTz6hM2i8GVG5BD2jod6LgFjZ38DKRSwKNAuYPdnaqDT"
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
