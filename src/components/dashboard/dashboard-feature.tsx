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
    "2shAsyRu74UWXNLHvVdeuKWRMoMvpb1uzC6xrYNNhtT8hwheELBnurkvYJUMrahjvrFPMd3wSX4M8cmfddjUmSea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPuHSqfhJKdRUqu71LBtnx6VRiT5Bp4qx3HjM85jeVm3yqiLZPmVjkGeUPV83rRd2SHTJ4HXkEYutZ62QpTfc3F",
  "key1": "k2NXb2Tnhrgi8JUCFPyYFXJ53gapdLCYa76mbQCUyzd7Y8FNrNWbK8ZAAqoqjsVbtDDuS8J7aMYeCt7yFFbzbb1",
  "key2": "3dh5Nkpcyabz2YHigJqf3L8wiXnS2CSSwk9kBX6AiwNgsaJ9cMEAza3QgBdN1JdjYdPhE1HoKinLw2j4XJqAwJPC",
  "key3": "3NYZ4rNnMDtwC11tDtm7ENGX4usiS8DraaW87at4c7yssuowgSwbjG7HZxyygeu8rNVAa56Eh7DxsvFPHAr7KZiu",
  "key4": "3jZg2nDDpHExM8q3pnrcrJajsETdUJUHVNyvR7frcvPgo4sMb8DzdK7SuDDrfP2w8dWDhRq4CuzxFbYh9vvzeRZ7",
  "key5": "5enpQV9bG7r5sKFD7AQbE5Ap6QhqE1oC7FqZVwUP1XnpFfXaZ2apjvEGGHTrH4f86EY8skdtQet763i9pUvZWfyz",
  "key6": "4tgF5EBkRH8QKVbLgiwRBuACw7v1KNiXo7pA69kcYHQqY3ApqkJEuaXzFBsEi4jTkynCc8r1KDUxXmTPUHP18jem",
  "key7": "4FkJHgTiQjx597LtajSACZAgGJ5ApS3UjBH5f57nKmSasUFfYxKU1V26qn7WgHHuVpWSGNriZ4ErC3cvUqLBpvVA",
  "key8": "4WhsR9kTkVAA6LsGie2sJFZKqmTKbemFxR8Un1RBHCrmmoAJ7eLpgN9EZ6zF9p7KyBriMZjnBxxMknGQtBqEvwfH",
  "key9": "mtJ4eV5RV8jykKvcyrMgN9hyFYc56yYhLRbxcT1dN7Rmkw34qS4c1AkUR3w5zAjTPAAU1K57dNWVgJ3ZaAJFhtv",
  "key10": "3SBsTUWYAbnCWSxntpL7LHEnaEX8pRLAptEMERbBQNwM1gWHmNHXfV385UGaVdxNej7sU5Yuuh8HH5vpXtWgDins",
  "key11": "3yN3nAHAsjGm4QF3iMnziAetRKiqLryd3nyPNfciCxWoNSSGdxsKreTZrAtscqPcVrrcinifQCNznujvzJp4Ab4C",
  "key12": "5m7BtUL2waewRAZZoN68JzSfsAjpRiSgEanNiVtuYoabhtJrTaq6tfWfbvt95dwX7qbEFcfviBZMo6BwDqPtfMQy",
  "key13": "4j77vhEQtq68h9gFwEdRnz2XhiMVes3q7uDBnznSVKDq9ux8HMbNm9mS2FoDDdFfHMTRTqgFS8An4kBB7ZCWvApX",
  "key14": "unFKAuToAcEWQnsvGfvCkWnJoAEyjBkAkFD9gP8nRQorDgfMRLnDBTxJTecCUdXkEAsKaGq4DYSPQPBJxBgq5y2",
  "key15": "4RPjituwt1LBMX8Du9fafVP8r9kqCJrUYFswuuVzK3rxgtCHmuS3mhgtfGKebYMtpto2fJ2WKTgxrvVRVuWi3g1S",
  "key16": "4kQAYMKoRHKiR1GafDDLMdWeNcLKJHMn9yfTC3bMgwMTbTTepc9kyxdjhPsNqWjQZyQJYd7zYtRv9GWQYxjb21jv",
  "key17": "4WYEEPB4W1gkmCDehb5n3CQMN8JWMcFQitmpRPExbFeywJmwbbAzg9tiWmGrad2gJcSoNkivtmeEqSGH9LwE12iq",
  "key18": "3sh51tXa8VhwX9VjVwmZGqSvEnq1PHeQqmDz5sdFtDgDrenkLLMc3vetE7qnPsGkRmwVKxuRGurhgmbUe4XpXhGT",
  "key19": "2rHgoxydF3dJdoKJLPfFhUNXoVA6C1FETnssF2eebnYarctNXbxK6LiP6hZZNNDWdtu2sxUJLKdDBxg65c2FVZWj",
  "key20": "3BxpnyG8yYosFNjau4FFZ6TZWw9Sn7S5EhsbvSwBBAKtDvkqnrbyZifHZ8HRSGsjwBq8vQjQySJ15bbMRCWCiFqm",
  "key21": "2iNZo53LpFvBL8UttDFw5j5ZeZ9EErPwcbV9rERZcUB8J5m6YoRiPCHjbimXuSZJPp1rCh2eHL3bpSD19AUzgQDo",
  "key22": "34HAWSAHMuLtKeCSLFQbsFCrLdDiV4GD3mcPqXL8Xv7JStZcKLaeGLhv3Prd4axa7sfJvRztoWPYXXuzBmfr3ZU3",
  "key23": "4yoeFfbJG7appcFu4fzJswFxrkW6a5zWrNeoiyjZgzikVwonfxX6ne2rDKvdgRSYqWMNsxKbq3EQYtXMZjbGSKdu",
  "key24": "52prTCSn9pVRfZkPhso4LYmUwSyovKTv4M9JEeRgsbacKtmjp41iFVG8P1fGnhKHF55i7MxfqoEmtH57WsLDGRDs",
  "key25": "2Tq78nQRYbXpsCdyatncCutq1QJvC4h6KsHZNtGXKwvMeVAf9ZaP7PsUrbFFE9ky4rJb7Txmvc7VuS88SC26EzLn",
  "key26": "5efY9VN2jHVtPibBkvojZ93LNUNuTesQ7Sg5kzYUfzhzfFRuUcSn2B4mpUhdTf8pdXUYPG32AcVjzPRc1dKBy2zd",
  "key27": "4s1b7RPsxhkP4vjpySkKjmtVeod6Z7K6RHWq7Pn5SHGV6T2fxfpFwQw3ch7wHu4nyfri96oS9xvKKKewQTGCjEYV",
  "key28": "23exdHFxyRH9jUG2MdYy41QqiN3Phew1Ree8CqZ95SUs13tSZhmSofRzZBYZtERW2fkxzWST71G9ZcWZhBtwh5KN",
  "key29": "UHvq9LUSaZsqK6kbrUTG56j2iRoKJ4aY1uoZc29FYfnFy82VYTFAoGyLuypsw8CFZZrej2w7W9nampKdaYR1sPX",
  "key30": "4cTNnYam6psdByp9pdvXZeKtaQS92vSDDwyVrtttC6iaeZKmBtviJJjZX8LzJ4GgXZQ52uES8k3gTtDeyDtSPQzs",
  "key31": "67fopZ6JE5qZxDZzizaJTSLRntgbdwyXizadyJafJdmFjZa3VdSJ37fe3RcJ1KQUNcBeKvC5vjr3kNfrZB17QsKb",
  "key32": "4FfyNxc7tQf6dfe5FWbAXrwFSq8rY4veVEpZCFmPcwS8oJyQbC69g9c41NYcF8ZNWEpQruGcWvS3mShy5vHqnj7U",
  "key33": "4sW74zKxSeZiUaAwGx5Bm7MfZAMLZs9WCeyFWyGyEgdkoD8XBMBWXLxwi1E6u94i9ioBYbHPn3b4Mc6Kq61ZZPGg",
  "key34": "2ZRye8a93KS1rku5VRHrFGg4fMvsko1Agf4NBmn2xkbPJCqTyyarnHDKphYqW5AEkYTFmYw3W2RSn4N9ZJ7aUiBs",
  "key35": "3S37jUBtsAsqiQyHoHUDgVyC1sSToDme365N7h8o5XAD3RWz8PJ2mhSfGWpB2VwEvQ2D8wCsD8oaMmL9nTSauYgz",
  "key36": "3ohWAgedRR64tDXni7aDdtZVefNZSe1enS1Buxuat2DVvnMZ7G3kW5WsEQa6jMzAaT8UxoTGjsbJavzcgybtorb6",
  "key37": "5avFdUKcdQvfBUhuFSdcN8w4hpBChDELNrp4LLSiLwh4jP1sQY2hA1zHHRzw5qfixB4r4fZ39YCSNjjfCvGsMGNz",
  "key38": "3k9s2W6rbdFZTeJxTjPtweaeLvyWcx35xorb87jtoya6FT24Lkzsru4rkoduDcAwDQtqa2rERkxCK8UbJvYjdE8j",
  "key39": "3Bg4RYTb51mXWQgyFLVE5psK8D18ccvWj6zJCfqmBPG9yzigVqhAG1HQRMY4epJq5MMtJxr9UVx1nC9RNJj8X7Jt",
  "key40": "4MBquaHTcCZomwXsRxz7dawxZJJpdt3mxWM9K4UnWhsosBDFpmYEZGn86KvKAT7gout9THxzLXPTpYjUPyYaoUFG"
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
