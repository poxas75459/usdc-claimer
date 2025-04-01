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
    "2uTom9kqHG54exxmwnfkTMBhQZYA9eiDMm8kfccDej18GS7v3x7w8uTpxdmm7W9g3gHu8RWSKwEcB2sNh74LFijr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytQepVvd1o2M2bmEJL9Ve3jYjKkE9yu4e9seD6jgrPrUrj4JqVsuysYizXdX7Jqg8CtLqTNjTktXFfeDmejckgA",
  "key1": "3E2xW8ZYDi7PuUPY7NPiFjzC8UcFG7p4qsJVp4ZSeZEFPNqnJkL6ba7TuhhH4C5EwBigaYX8oczKjU2UKkBVM2yt",
  "key2": "2YgT9TtjMr3iXc7kvvg9eVSD4PP6qXStMasR4DCA9mod2EXjrnRhGceGYqzNHkexdgEfXzSTmAmQzyZTYuEUkqJH",
  "key3": "46bq6LQNCTLVNxq4g8TDUy7TzQxD4YdvBtZWugJJv8feJ1uia3THHDsFPWyBVK9ZsU7Man8Q27cwfmWQQezfCJ2f",
  "key4": "2wyJ1teaSd2ChRGcRqv7kD9u41k6gyNT8Qo55QytSb25nXW1hkRRM7rcK15iaA2UPLEd8cbqrN6b7zyfQbEgb8TV",
  "key5": "nhJvnfC7yoiKfpnBwZJKdsij1sWhDf3kkua9AWrT9tVNYA4t8S7iAqHDf8x2BuN7PaCbqaWaUbXQQVEHCYx3w9A",
  "key6": "5wztBL7WoShQvArAYtVK61ZGJ5PqUExZzD3tn1sg9X5P1s5d1NWbR1AF5GuqztPmdPDQPM8J6TNxfPWmkMwqbh1N",
  "key7": "2R8eR5rQgRCzcoLXboTZdDsp4VaezpnNh3aZPs3f7NBRDaeX7pkh1mhf7xTbiaKKwcPCYdMtKT9kjipwb7zzbip2",
  "key8": "4u1eSYYn3ZLm5Q18Pp6drhVEgSUoqHXPnPWpViZyRXheZvHVrLLhzMtehmvPQxptLQpGAuQBMn1s8wqnKV4NzenU",
  "key9": "HcpPRHqrvgDdGBDekMAecVBnpaii1jLXgaHZ4XM8WPydc6D7SvrpptfzHFDJDMZZdqzoCee5FYjCYcMgRjbUCRZ",
  "key10": "GGGpnqALU6desMqM67CvPa84Xss6NP2svpPfK2T1rezvRAY8sAMggDByVE6tkzoHpD8vU7P3qSx3W3LNX8vhchg",
  "key11": "4V38FQ4ARo5nTdCgYvz7Qy6wvMg5g3vrWFhvDchcRsXqqbuksGtHi8hQUmNHpoZ241KZkoTTWWa3KQgNqWQJAmcy",
  "key12": "3YT2PWtJRLMXXryPNyPmBbyWbnzKnR41ZguizXmnQUnuq9qp4eNQPK1kYvkDhPXsedpvMHQPxpJSKJA24WFfnds1",
  "key13": "5x3xoERbGCnD3zXvbxmmKwFUJSpjvH4C3Fou4RVRv7dPssrJPKoUm8bqx5wbrQWQchvMhouRWD3PLtojCtQ1u8iJ",
  "key14": "2B7d3JZjeXYvWScMTmG2z3N9BmoLudXqBTQrmGdzmJtazhHPGj6p7Vz9abtBr4mMJd9P8jNQe314cSXGcn9K7vmP",
  "key15": "5WZ114kBf2kChKFbVchZgfAN5szAC6wM4rHCQfGjvb6NkvPWYnKugLQVWJuMAad5Ui8x9D7ynM7uTMNp92jwuzQD",
  "key16": "5ohhn2JBZNWRCVY2LyAnpZo9Y9oBxf65EL4EWi84i2yFkiTwephrWHP6Z3BurMRb5eD8FVaXigo3xAWqp4FronsJ",
  "key17": "HAZcBPHokgBJGQ39WAzqz1N7pc99z4mSBrvcn8t9hSWNKFmGQezdzoqa6secq1zbyyegSTBTm147rBmuMXn18UD",
  "key18": "2UeNrFiaFXBiDj7fa2Fi72BzeNLDWyjAi486amVw8k3k6o9qBJ6GNMLxgL91F57sQpJYtBebeCM16ok54pt48uz2",
  "key19": "4uQrFk6T4KBR4FXjoaWDBAsZaSaogpVbKzsysGRbyZV57xJabdo3v6KrQKZyRkqyom77zhHsLFiLUMS71vidmaJQ",
  "key20": "39aMFUDHfgsZugETtsjUfHi6J38JQpQrCB9NQxS61r6nUnHr5xQmvgoxfotAbk3c2PDRhL1iwjqMuDckvEWdgYho",
  "key21": "3wfMfmBGQKfSibobJXYk86dh3fHaUS9SbuzayJZRYoMHQ5avAEzM3PvnMb1Q3m4N4N3PBpyAcMqsvaYeQHRyDk1s",
  "key22": "uy8keDkrnswFxmp3sR4r4QUPn9ieLtHz3cQxPnfiFWHdRrsJgvW22zpinn6hpu4XKBRrunwLhsvaMkhCpDRkt6s",
  "key23": "FzjJYUZqPCcUTcv4NPTjALPye2qoNXzY8g5pPiwoUvsJNLKe5kXyhgDt2CD64wZzX9ryoF2F3Zoet7LKqYAy5WU",
  "key24": "2vCyrZmh8v5QXFtWReJQNe6d7oYiq9zhVTMTrQUK7xwuWJG2Ff3BrbeQqVjMNBpsfydtz3HvoajUwND7vwfZ2p1V",
  "key25": "29cwFfyAorkGjXjobRqCmTz4bPMcPcN28TMVTmQWRXKSfRNFJSJrAWyoaKijDgmUjr9ufQnnqXcy2N4VsqDn8VJA",
  "key26": "3QDu3G4kBFY6gJkyVHBhDt6YhCDyLSaegDKHsUKGA2cHH4bngzkS3284KNeXAZvyLJJr7VpZucmeyRfFHiHZkJsW",
  "key27": "5q37eZoyo1pT553tUErwzF7hDHQtdZVp7qdwdKeJod7YvUtV9MKWoTitYB4ipVECZgpN3g3zQVKRRGQjohoEjocs",
  "key28": "44xW2kcpfUpg7NGtN9ou6UxY494jGLFAr6PRDrejRbQbgR96Ers6VvMa1GdqdpR9LN4kmchCRsxsn93LufVJQEw1",
  "key29": "2Dc1nN9iYpHiLE6CS8vpGmaWw7CLyase8Pkn5MZcE7GBtSWhjjnn9wg8gxCaAHWb4v3H1TSLJwCpdkCbgunvDqz2",
  "key30": "3CKWVXjRvte95UT3bpz7f5TmK5ep6RYZkReedsbavyNKdGPs4fkiU7qNz92Q4ELgJHVioWAqA8N5WtycPwMCMdrW",
  "key31": "4TetGQ4cfSptht9xpP5NwgoNR13wc23RfbxEA2hAJ7grW7yNzvymMghZUCZoosZfhLLvShpeUWQh5xno154NCE8c",
  "key32": "4p3iesm73eRFqKCgsHrusnt3W7sWPaBJFXrugwn2H24YNyYRnEJVLSmVJXKYfKVxeDp7CpsAncZAjBGgbg2c7hKG",
  "key33": "5mihcqWcZ4MrjekFzF3E9SVXeH76gPw2pDXgJnedMvQanuFbUQr7JKCWWGxwUjqrWcmDbK7Qk8R5np49Z1xFvgxC",
  "key34": "66FnEFHsDefR3UX9ZUhPd7WymWc46i13rFExqvNe8H2WYWCMGE5KMPakp8diGJhSeUFThLSnNp61yfvFyUNPFaG",
  "key35": "2rn7TPYKqEQmbk5itqytgcSzdxmVaHsSCBzAauwh5FqRrPxkdNHcLEZg3Vzm6cpsZrY3FZrUaWNGyaWsRPryMXHS",
  "key36": "3EX9MifmQQ3HGVRGrgf9p4HgVREpz9RNwxTkK6VbhG6PzhuwLyi3yNm3BxcLN64v1xMsgNyzbB1hpN6nD8mSKD52",
  "key37": "2HZN7b2DhpE5TLQVYaAmudzvgzV5M3kbYJmYwnxnh9Djb2W7NGG4rVfjzfWtj43sHNp9p9P78D9uBaW2cxQerFz",
  "key38": "5w7DcgqyN3rJgEpD8jCuc7AvwvWmkw7xJHw52TQfCNkPrNUm9PLr782aYq3HQX7rYKKJQ5CpowMwT5qn6brdS2JC",
  "key39": "5XRbGSAbSYiDE7WfJny6qjyaxBF5Sboyg412btyS7PcM8tL6RDuzeztq1kTNwcMEMP4sqUrSvhuZHKy9cvQgDDtj",
  "key40": "3wuqTCPBdhNEQKFM6nhnqosV4JwD9WaGtv58wQ3HVAtCHZ25Gd8sTgeU2x98csvVHv2B2wF2CBTzszedp1i1T1mp",
  "key41": "52eaVwpGRXDLinw3Ayh1atRfPkUBhJQDEyevxP7K4J9vYVdazP3SuTMQFzdhAUzuFhhzkpU96QgGD7cjdR6DiVg2"
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
