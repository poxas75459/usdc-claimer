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
    "24A4Mki1V1SepwyMWsTdV82vMVdQC1i4ZYZbmbTX5JoP4wUZXoesuVi91a86jKXyDZEYFwPJbYTxD8nNSS4VpzsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x393bgy6Ceueph6syWMAfVXPwhj1deFZCK9ci8TdwpHY1pXiu4hnZ23KueAb3qWMbypS12QD3uFdCMLZFkVFHQo",
  "key1": "4xt13GaoMDXSTfSJkuzDs94YAAkQprtdkeWov8Aafpp514ntEFcoKbrBtn2MQ4NfBZaCFPjWV9mVfjAc1moy7fFM",
  "key2": "45hdvkDLtud4sfXzVu5szbv6AXNCEV6ff6ezr9vPtu6hjqLamCAr6ghzQjuwt3W38Kdzo5S8ngAJ14nKxxg9ifwu",
  "key3": "jpDTmNPDqd1dEbTc4GbzzcMU7HLpXMdgzYvHW5Dhhe3QKbXf9vJiEzYvQqNvYQY7GKh3JfD8uJg4PNUUjbRvFnE",
  "key4": "58TanXv8QRt4vKgPZrW6rU6tAaSvHp38MmKJ379soh5TZUmZKZV7HpAbQtefRY8sDpZ95ewGTvXhUX3dEpsP5pMX",
  "key5": "58p45wb5fovjnHEwBxHJiD8fugPfz7R5C4PYDLZjo1W7gq9B6kdbqxfVnBuwdtnGa13zbi2496yUfxWrgdNrq2it",
  "key6": "2LvwDztEzEk3UAKYnKjiz5GaKC2C4HUzdsHdBSZpnYSaGWoSEPfd3d5eWzBPXToM9BsJZvfGv2zhcJsSmxdvMd6i",
  "key7": "3id2tYd526Q1uB33d5rNiVuV88Nnw1v3f9wFbwxvktg5vruuKrTZ2cmcTQw3DrgrNTdGNsnXxn6XHnaxJtoKJoSr",
  "key8": "BJjEnoPHjMYHptLmTRJnCtGK6PV4831vzxAfTvqj8QWEbb3NFCpSeXwBFbEqVtUJuETK7ouKC3zyK3SwCbA4b9Q",
  "key9": "4ZtdJkkT578evkXrneHkccN3dAVy2P29MBaKagwgmtLsSRhp8iaGv4bEXyd6894x1hcbqXwH58JViRDXWjTaLGiD",
  "key10": "4Y9u7vjD3hGCx8PnUJDu5yAwRUt3Z69btSxFpMzwbw2DFeQksuh8UByyLrwsjkcitDw16SqeRRjHRnHgWU1Rydoi",
  "key11": "4RqTxPCXaMDEw5XAJhaBjgToAWX8EY3iz2mSTuqBbPD3YYjyygeSfNEqD6TXxdGWcdnSKbAw8cGpCqJJ1r6HfZxd",
  "key12": "4jTBaAhE42BV9CYNinBXugnT2JXxn1sC9bCT4sBVbxa5sAHQdvFXwByyypJ7p4JrYNuwjrSLVE9Zy3oxxC6VDGUT",
  "key13": "61anBRJ1e5UitHJ8wV3bLPEpMvkdJLttCBH5KqoSw1EGKkoMdBwuVikcDJNMBFKS6gA7anybHbjk9SKhxAJbS7CC",
  "key14": "LpRbTxbNXkSPedzg6RtwAhcvzFip3ygUse5fhQzce9sB8NX4t28bsKmYFfsJz1F5GWFhwuBZeJB8gtGjdAEa7rp",
  "key15": "K2FnNkSTk9pcnkutB9rRxj8tPDqcfdc9DjFR6Tbp71KuthiD7VdH8Uxv3KfFcvGYLg4Us5xrACGpyPEdS222cVk",
  "key16": "4aCaYupE4ZKZKzoQ7Ln9KRFWd27NyMGwukZfj5nxwt75WZSizM4oDKCg4uG2BqX1oB7eneawHqMaxPAJ1CaMEnmg",
  "key17": "dnGJ39zz6uYihN3R3MXtc9jzSJhzibqo9wpshkoaj68Mfj5ritzievMamjrMFuUUk7C8AooNxewSvfM2XCEFmyj",
  "key18": "452fG8ycckxKbpDprLoto1VA1rxMbkvaRxWke99Kc8bjEAxrdodh64MvmMKeBWzM4v986DF1MpYZKXDKhqqkwfMX",
  "key19": "44fPkyLbDZrmiNZSKy5Wc9DraELWehrhxQymxRmwW93XJcguAMq3a4ziidkxZ8EhvXW4uVjNqNjbqDiKRPUhz9gy",
  "key20": "45Uqg4y3XouS1HtyCtFZG7YhA8okVX2YRYdfEDEEHy3jvfFsfZMPcNi3CUJP6k6zNfNXy2GbPDC4qGsBFscnX1KU",
  "key21": "SWRiE1NWjSrG1jLWqGFwwrHeq1MMgtttSkXRazkuPPKm5UW47Ac3J3FfH8QQuSvJxWziNwcn6MobuCHpVxM8Lhe",
  "key22": "3azHJyLKARSkew17vFEbiAqt5GGPorKMuMFZGz6D6dnN24Xy2gCZYGF1oKySJv61DFwCNFKeGdaVbtv9kMo8cAcQ",
  "key23": "3QE2gZodFubsfeivFVnrhCiXtN2ZW6yUWPteX3szWBTjEizte2A9eXf1PaXps86dhQgocFsjfoBmqwnEwZHx6Nkc",
  "key24": "5mnheQLaAxsid6aGepAWtMUQhcfiLTHtNjuYokWTimPACxXqHPgH8GeFc2r5owFfxDL2wDHZcTu2xGp9VDVBqfs",
  "key25": "PD3JinMY3rastzsqfxWi7nFufpVAUr1GeKBv2SEv9JR12Ri7ruuDv11AmfV4zY6DmU4f1nYwo9yYyXKrccHHYNJ",
  "key26": "62FGFLGjZ5AfPXpEBQRzjtCvps3zMvWsQiN4R7DAg4SABmJ15g59Ee2Fugg6AqYeKxDZZWAJJCaT8wka2omseqfH",
  "key27": "3QwXAuZAcN15rvgEbh4yTDzK6ymbC5Z1knk425Xu76oVAHdKvCQGGgkGWdhkTemUuJAf2dTZGBDTLhzWKLzJhF8L",
  "key28": "LPvpqg6WP8VxjwoMWAjKRiRtjrxxEPMkAMNvPcRuwXSyrxDY66559AaxZCka6X9PfQTZvRVm4iVVEGKpHmH6KBR",
  "key29": "3zifJfc3PCxNaWcwVnsc4Cs4mpkcqAs4fxdbokkCxJEaZE8qDNNRHeZ5GAnUnCsFU13wxrgeSQvEN6WZFkhk3N6k",
  "key30": "5FQ5outbuxRoWPZ7FaK89vh2qM27pWgPvmX1wM3kH3hQVB1kQKd8njEdUnqg84SJEXUJuGcGWD2jyHRHRSiDVzLV",
  "key31": "rcm5HDmLsotw2p9GqFVF9CTcziACSHffXAH26ERvpZ9j7cjxdHYMLsC9tLJSWLcsz2Ltzwp8qPx15Xq9FYAZ3NH",
  "key32": "3Fi4UqzrgF8DGw8PUSY16wdcNVacquQZiKNZAgzr1nxTis9oQMcSrvZgW4pCK6shChtdQFbQFVEA3vz6dGrqBCfd",
  "key33": "28SC54LttCo1qGGixdUzYBvEcXsW1zZtJVA1o1R7JVdLWQzXV7QiEx67XjdTWK4wfbwqSsywtyKX8i8xTGnT94b8",
  "key34": "4uRoFqZnE9nv895o7QMFv3sfyByL9XhrGqDeVYZRF9gFdKDSyj794yjyrGr7zKfqjxWkYYwigzRgJBvrdZw7SPix",
  "key35": "4dM28pg1qGZzFeDihPGkTnboAEQz1KdTQsMmehvHSqh9TE5kfgNc4mWeAaVtLCo5v5GAptkYNEnRY4PgtkwmKZjo",
  "key36": "2iD5ZbJk5Z7XZuxt5S9LkWVZMQ8Hxku9yzHovj8sKW4gf1gDV15nWfXybH2DSfNfcz7Q97KCtmEuuvKtc8duT9jz",
  "key37": "3RrjRQWFZkkuDgWDAwsromfwed8yhU47M4je42iqxb9RuPhsn7adPjuhgX1EEHAh1aK6uPKziSSBiKaWnMAvTYBt",
  "key38": "5Wpb5QpEabySWFii37QM37gXv6PBJwpATxMZ2yokQy6qb43eYhwpCk4o4HKchFeXNDVZvWnmpTutnsaNnFQa35Ti",
  "key39": "4whk4a3fUavKGdw5677tcrxLUu8zjpyTFrVguUnwVcvNybc9EsyjoPH5MQKtpXH2Mdek4WaJ3JLip4V94TEDQdY8",
  "key40": "5JRXcNMDAj1pWZWwnjFYh2zjp8KoZhdKzXxfXab7Yy4TRy4F7LhQEGcqcFHTYvLEhnEKHQgzaPF7pvcuzxudNL9E",
  "key41": "4GpDHuCh8n92AwHGeCiLQNHHXtCyYex37grRjZgTCZjRGSzcfaS25TnDL8R3w3L8LBkdkL1XBntzN1FMHHkkoG4E",
  "key42": "2vqUK5spuq4u6NdhAVjMSXqJ7RNEAQr573JBDHgphYBDJa2jLTNe7Sx5ywk4pPAdxfjFdakJfPF77eZU5fSjP8xm",
  "key43": "5BA98oeQA8SsNrrbEuNHqNZ6LPnb1ox16x6CUazSj1rAjru8eCxTwZKM6sbcqQJthUHQk4NKtD4miFapUv1YYefL",
  "key44": "5n9gUpG92bSmZgNSYyWAGDCxNMVEyyhXzBUGgE4PuygSBKncWXoG7HFPbQ2TzNuJP8aKkumtt2rT2pAEy2GJYRxj",
  "key45": "5GtmWGAszw3wev7K7F8gUmkQxGtLua5sZkwUHQUXy37WsjJv6vH6Mb3gqR4Qja9Ak7T6qQzVkBJWiV6NehQ3SF8",
  "key46": "a7sp11sqLR4B8oWHrhUgFchBeoFJMqMxUSoVcV9Bmqn6aYKsnzcbaeMyHfzFSyjS9SgNZw18ukKY7MYivUZbx42"
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
