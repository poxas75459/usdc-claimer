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
    "3RDy8tz1GrfUuhZ2hwA5Bhnu4qkqRNV8BsovrAGdHCULwmCH1KMq86h4NWSn5bVJM27n3FGoQ2N4VKV4FZTtpS47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDgxKbQY4uQZoxnU19Rvi87caFHuuKtbH16wSkkPNaEmY9Gm5T3LvRbDY21DLCZWhyENrgxbNUt34Gb3NSU9hP6",
  "key1": "4nry2iUwxwKBpAHRNZ4UHGKLxBnYsDZrPruXPQZfvRavLSRn8pSZLpJdX1RqNRb5o5UiKkbbndmKWVP9GzC731UP",
  "key2": "53tYLi5nP1vLFHqcC7XmxVbrXsTupa83AJbpaQRXXm6SNcARiZUvbqVQNdY8qFELTaafesVXkstW9FgtvcGBjAHt",
  "key3": "4gULtSuVMCvGwaAyrSKW9K4mRsuwLZM4oY1Z82WfNmrhuM51CXTY2X5iuyoGBrcR7VCvLuZzWSRtay58L4tDuks7",
  "key4": "26XPqRGFsMwwAqSsBUshc7vmWLkCAunPHEoytNb6Xwhk2g7EU1groNsuJ6ANmtL8jLNhBK2kfAKoTkEAcYVGuBsy",
  "key5": "3oVbvgydGAxoUTxrWTKSwhKd69b51ergqFcBFR5DSE2zzg7wAv4mtfSzprHdHn2CxAKHE7AtBKpqCmv1keYB3fSh",
  "key6": "2dtUPEJPaU86MjAMfUQ8jFFk3o4qecexUAwWsAFqWBamuKZKCwyVtXNCMNqRrM7ThxaUeHAGMPmzCGLrVp5dHvX2",
  "key7": "rsxQw8xjVqNZarcV6dwGZzTQTobvYXaBfzpGMJXsJtD7T1hK2o1QVoA1Bygt8JzoAAPA38vTZiY7Sq1masBkrwC",
  "key8": "3mi3gqCEkXvopjanJ7jK6YzjY7HmabC9r3tSuADrKj1DYNS2QhcdywYviXqMMdr3T3fDFQSGZF6AFfe7CLCapfSS",
  "key9": "341Jk9ddVBsysjrgkD7pRmw7aJaVJZbBrvMPyD2CGiE3AKpCpRPDhWBeGBBRpzyLRkr5rU6oGsdz1MdSEdA86SHV",
  "key10": "sRMjWz6rVjckzz2FJq3cNkMnZyXa4LrodnzS1DYS82PtAnNvfoG6wjnXhcwMs5bWjEduvbfGKTnHYpgzwNtfkuK",
  "key11": "NknY21paM5FXa4weTGeHUX7drorKxujYE8H4FQAkcc2oCNMt4ifF3HRY8FN7KYf8dH5rW2jf39KZPMyLSi1Wy7r",
  "key12": "2bqfohv1iQXdVt6ddkeKG6R3ysmTVCTQA4MAg6F7EeErTpuUix6eBt2FueyxiheL1NkRYj5b7WrqJKS1NA52MoXR",
  "key13": "3AgHZLBBeDGDjDq5umYwZmfucEwc2yZctRMEKo14efbqEgMv7JYXrv2h1vaFL4ZaNBtvffnjyhpd9xdAWUGhkLqN",
  "key14": "4pmrAEjJKiecEUhbppXPsv4kcwVWKpdyQK4z9GZquSkXpgi5LGXVJBouu5itoMseBa6dycFSX5CDNHq6hESjgGvL",
  "key15": "5urm2vMEsQRmAiD9EJbuTsam77bYZfvQVQw2gj9TxKGwY3WdMsbWoa2qYuoM6y6htk8ZFFFDDmL7YTGMKVL7L1pZ",
  "key16": "3Z7S2XxkGfifA8uocrPGqPemtceYoQrTgsjgzke4qL9BB9YxCJwwGVyWhuXd2cRQmc8NGbzV8PoN5kw8bpW1CmTj",
  "key17": "2uQwrbt4hcv2DEWN6smWBZpWCAfXkR2AGCoZb8gNECNxo1XUa89jpMcZvBE46YHYm9rNJozAJKi5KDoAGJacveLW",
  "key18": "24nspvjCBoK5dxfam3mxcdBQ73hog6RofyEiCRa1KVtrwQ1BTHD1U6yDWbm2pWA2TnwHSwJetvUV6RYxWefT54iV",
  "key19": "5yd7dMiPZVevQBrx4gTWCBRPCbDqJubSH1cSdeKkM2tSj78Y8oBZEVWJirF65uNHbxPHWin6DJ68aGdjAsGc2eSe",
  "key20": "52eqmMsdXDVo8vjK6SgqsDpmnxrpqVZp42Czf41MKD5oPgjsFzZu8hxM13MDtdMRnfkgn8AtU4D9SJtBsqkji6bR",
  "key21": "577xNwQgVonwTYHTWJzbnHFYMknMMxKXpQaRTVMPbwsAnq9hXFvr4UtmuhMfXmQWHJJEqmkXbDGXPEqz7tTjwSzh",
  "key22": "5cnaKvKvfe5zrznTzrTZjTnigcYX46V3PMTxvvWAVrRgUJMfiz4JXuY3GAc35FQnJJsYR6sYWKDocvpNqRBAotpk",
  "key23": "59oRfKkfXf7HRmcCqQpwhMwx14QuDVkUU3tRQ3p4UopC8V7YyVAWZa6AvxCKqV7cweHV2neLXhyiNmuiS7kRiBXE",
  "key24": "6qJVVikq48LqMCEAqw1N7F3EU4t55xtDvWcVcM4SCZWLFaGWMzLfwK82R52E5pYQC9R3s6djQ4TpajSXh8SkNg3",
  "key25": "naseEd1UDbhm3vLaUuAfRjg85C1NsWDnz4hSs6bn945Ngas7GFocWwNnQ5yMWCbrQGbYgnEh7GR8HHz16HDdzEX",
  "key26": "3QdRyXrenyDoXr4dPeQ2XgMBYVKD5vBWXUA7uddSLHm1YyqnAiNmhEFiSLu59PcWPmGYo7U6aHhMPLo88VemPSXn",
  "key27": "adKHab13cJg1GHP18mLQPiUmpxAFhDzjT56GE2smqg71wPWKpbASpyVLGFedJPxyf6GVBFZY9QWBYE9taRC69Yh",
  "key28": "3Vh8zb8R4EpYdZuPt6Mme6rDRQdLw91Rg2Xa6Ak4zzCBnW3zyd5yXRL4Fgg7iEYndTZELsWY5vFUzjqBn8QEKxjF",
  "key29": "4tpzcxtA1vcNC7j6jcvbWykb2tWSBJ6m4snPsL4ujUJTRFC7qgqqfLW7JeDW1ZtW8VgnpSzQqM16g7Y8GzWSReeq",
  "key30": "5wefgis2MkJcZPpU6URY9n1CmWcVDZnXqRW59a5tmoSLC7XiKuS5NvQDXyUycZYXJ5gKKCWYYVJmEbRxfXwd2WHh",
  "key31": "2ZUheT3tL7Wpvp8XW98gctJ9nyePxTTAiwkoPfvPM5f1t4cnAPpqeqcvLTcWbT4oPuQfJB72Bg8ZZoJhAPDncCja",
  "key32": "56uQuM5EW19vrRa8NLw9LG4JyWf2nfnVw4AjJLVV3TTFDEPRwpLsFbiZcJna8AGRVeqtFC8612GCoSJeUqirSrcd",
  "key33": "hdQrz5DJYCZjKxxQjztRB2iR3qdD2Urz1hforkmycg9Foz48nohoxhMwRrmKzhbNWWiz2XEwvJuMarEqyS7KynU",
  "key34": "5VAdqi4EXBEL3Npyfqy2roHDNo6XbAEWCorZepVYJ9JtAv2fsVgZsZQXPybziUYTANMQhUa3ruh9r6fRaRj3JMQP",
  "key35": "2b3w3GXnufM9yo6TX9xSeTy6hAyLmr7Edie6RBWZhtf5puqtNCYCG6tMuAEYPKSkyiickZ8X6xqg7VQaYdbT526q",
  "key36": "JMCRwdgbWZTRQvwzVVSSL9QoDX6kp5bLxE79cUqGWgM3ATYYpLnpq5Q1Jxfe9rgD33Hpg2amD8NJNGWeisShfqX",
  "key37": "M8Jmc6KB2FDfe3Vg63tP87HHWFrmwJea8BMErA2fwhfY34u9ooKLvSXV5tMtVavFDM2kx5QyBWaGAj3QUkcCTFW",
  "key38": "3NjbpLrdDuc1Rg7FX26C3Sk5HSUzPAWsrL4DBwvBizAprMEScR4gY5RwCsbjBfqPNjBujvQq8rYvQKm5WskvSRS1",
  "key39": "2GPhmFhjNPXysq9e32beoG35VoxpKLFdrTYqSHo1TCktVqPkBfAJbTTjY745byPzke2Wrcku2aq9sPZ5JjNQuGAQ",
  "key40": "4eB7Q8GtqocWS5GcV1QuesUsjTjio16pbqm7FANbKVgwHgL4C9wUTxymW3nxoX82GW1W6VLekMJyFjLaTjRrrxwd",
  "key41": "4See13CFhMaxdRNRQ9vpyq7W6CMBpor1nsU4HfmyzmqVBMe6Zid2gBswg7cGYNFeS9YXoUx6g2MGHrSdenmpFE6t",
  "key42": "3RDbgmsNER7edEZsaNbjsLNhgJD7iV8rwDkk7Df7NffYGmxrRviADiiL9vYQcCjNYnRjW1Ga5sxJv3UiEwYvM6Wv",
  "key43": "4zVdDppLMzte9n5azcaJqUJEfyUetijVdgUchxjRXo5e7QjFn1hkM1PLMYEQUyfK1t2xWGe85fAoEU8G25F6daU9",
  "key44": "63M6tm1GfSp6PVKgsF9bVXXM9VABmqg5g9EYLP5yGoW3QZfSeNKRCrvWsZFRhXa6vTjjevKKJtxvL5P5SiY5Uw3i",
  "key45": "9deGrw8o8utdVsAs2p6ow6GueZA2gFeyTkrUu4AgqErzG8UTBLpZebfgNDnyr5tLH1CrgMAFxLjQvyzhJgtNEAp",
  "key46": "3LQxM7AHYhya8uUFc2NB65QDVbYTViA77pkqpcG52a5G4GgCQtvAJCt3mwQj4mCScfwAWtZRqsQwoKKK1osqDqrN",
  "key47": "2WCZf8k36DCaoeuVeiu4RhX66Ue9aQ2vCAfcegVu553LDCde3uJMEeBKYpfL8dzcFPAUsgmJDbhJMYBpxpgFFEbG"
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
