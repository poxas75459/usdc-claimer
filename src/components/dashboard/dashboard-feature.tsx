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
    "2gwkQgajroYrs5oFk6JbW76guxeqbwe1z2kyYBax7J5kXh6eYx658fTpuMBW2GmxDj9vXPxQmh4icZQdJa4co9AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ac1YpxtFBAtrzGAP4Nh78kvJtNxTGGY3WNpjci711z1H3Byg83yacx4L79Aw2JzyznV7q3goEgKocCifrVjeVQE",
  "key1": "3qGd7f72iYgYzm9Y9HQfBb235oboaXHPB4xFLdoNrTSz8y88pvCMKBBHHE1DbdwE5u53TniNgBtZ2NQJpKgDK1GT",
  "key2": "5jYkYs2ahNkr6rcWjmSqphDEppk7XAtD1SuAwtRVmaLsWWzRCnfNWymq8d2Cu9Bx3RodiYWv58vZiKLaxZ4eguuT",
  "key3": "3Z9cnNCP4M7hqeryTs6y3i5X7FdL9qfqHyNv7k21r6LhsmYKxcgQhBUJQZLJEVGtPu1HysqbhYAv7voS8rgWQZZo",
  "key4": "3Q3C3syNsjNTriEcBVbMWEDpKdN8tQ5wTi9bGv9jzA7SML2qA1A6c5v6g8gqvRsUcxuKSyjNnF7WJNkY9hWdGPq6",
  "key5": "3XaES7yrHDGa2Q8eL9YzjWFxtbr84XTic8MgEQBd4BzTLyGWcYKNXRi1CgR6bnn3KvdoqL121PsYQ4T6qN5Je1ax",
  "key6": "32pTYqoH3rBiXz1Ha7ns5t7f5Jk2gKRQPB86zopvw3vg9gqhgxwba7xWf8rro54ZhbbHnPA7MA7kb2NDv99yL2Kr",
  "key7": "2AY2ivukfcNLJu2Gesf2itgeZqSTQGA9sCYmSA9TM21tAuRf5jVL5TWtY8KuYRWkHPgnX2mFyVXo2Lyakv5MdKoS",
  "key8": "44hsa4tSLxv8d5EEwrF9vKe1CistJb9ZZdy4nan9hAd6SqJaAbxdX2q7tC62mj2vZvFqLTGs21imtKXEXs1aKUSj",
  "key9": "3yMmZ2WzrHosfjVyoz33pfEjmQ3Jx3fjLPW6U6XkUKvR9kWhLuf5ecYE84MuJ22JNsgQWDvYozw1X2p8AiKgyqwU",
  "key10": "5tJw2DY99GWjBfEJdzUMZtD5f72s85moKQgABVPkDb9HmNGi1BwZL9p2hJ8NYn8TJwtX8zdYHQ1wJaV2bGMSb1T3",
  "key11": "3q1QNXUTJpAjKV8DJrFj2mmKNnk2sxTYbFn6tze3Y3pvNiDYbKewkQFx8KjcPdpASz7vFt5nukjoUBqjE1Cu5mKk",
  "key12": "3wbRHEN2q88gFkNozPevryh9WBKqEcLtz7xYA4cUrsBVwJvN6rJoV1ziYcFgsFJuVyPFgA6bLtCMsm6oD6Qebd4X",
  "key13": "RwvKK78jezqyPk8Tutx5xxAngLAbzL5iDvs1M8oKn7bUwLZu6npdzswPYACQ3Lp42HumWRuq5c6a7kc7onaSSzB",
  "key14": "2EhJwZNSAUekun5CPmL9WYwekDaQn3k9LYRrMApzA3Gxo67Y7fa9rDkzwny39fDFueNsX6x3r9dRpfLM317Ahjfg",
  "key15": "5SCcLwtWA9W6iqaMeF5QDPYGYk692wvqQkd1k2f7HJuEGJeXBFwSM7mnVog8GyX3CnovEw1v4kVgfgduzWmYhYum",
  "key16": "3Rn1Do1bD879EaSMUdhi2khxvKesgpvzm5nQjghavC3vVx67ECkMyQzF3f8RNGE3nty4qE8KrPZFA8bz7RFQfbrv",
  "key17": "3b7jUwkNuEkXg4vi2fgYvTvD4JttytrDRdmSHXUp6FwvS1JLHnLh6vAU3BTqxC18DMBy2pYp91bwZmuxcsdZUg3z",
  "key18": "3FYPmkFASnGT3Cp5zHpnjQ6hhTkqLJb87WcTDviTuQzTJLBUGpp75YRhy81ZWTU5VmWcNqvobWxPXpWXGMrBgZ8V",
  "key19": "3yBggqRQ13sSVbDpsqtJf3yWzXo5XZo7i8Vcxom8gCtCV3w5wgkS48YutDH69pnRzvYF4BZ1LfZfYZX2VhjHsQTE",
  "key20": "WzaJashqLP3tkAhP6NmsNMK7jR8hk6f8Xc7iJ94W5NjDHY1rDrBsDApLWVdnUDZ5Zmtny1n1Yy3mfPpkGJ4Y11G",
  "key21": "49cKTYgknhydhb5vFUBpHqQCKD3UBN6U8SfNiPgeWRRFgwsNTpLy7egZdZsj78s4UArYoBKt3s7bX33QCKXwHtD6",
  "key22": "3kLeGuVzsqKLUuJPcJWhLzSyzHQgh9umVze5FE3z8Gv2Q9s1BTmyz87t6hfm1wdPBxe4gzsW7CKhgTFuoA11KH3S",
  "key23": "3Bwd5MwMoxHkYhXf3WdugnGdWHc1GZZa1fUWbCbNLZra4doG2XJ1S52ahNwx1eXFaAjWCqLXeVjJdmVn5wqjQqTa",
  "key24": "3MZELeK2bU5SQ3AShBSdfKHUuLzaEpY1s3FdbrKBSjHhDT5NZx7UnqsbGWu9qLrdjK4g71v1jmnUZn3Zu8pN6cxp",
  "key25": "5sa52AcDQfwmk3UERrRBQBXBrgRRR6cEoqRTTy3yPMAnnERoZtmpsTxN77k4DjKTdf3i5ABcnwFkjjMvSuQwP3pw",
  "key26": "2XNZFiy7DKk5MiW4jjDNWq1o9BKBUWWiwknrGJC86ZPf51fETN7yeNBH18mQJG9Vn2dk29FabRGKRVxgbHyd93qK",
  "key27": "39taQ1AZwyVCN3uSnDxQR1JJBsTyYaV8zebJXFQsgscU1ktf1YXM7GQnFasEv4eRnkGvX7tkc5NEb3x7qSDmFMtm",
  "key28": "4hnkCA1M1F3hw6VsPKJLc7gGTMr75jF5cGhYV8fSbFD4ZpwBXsT65qMhSfkX7b3SAvhYj5RwDx6DR8ghfiyJJqsz",
  "key29": "2DKoFTEtbK68C2vd4eG6Cwf4PVbZLkNZaDkoRQ6UUJdxXVxZXzDvAxCH5nSLPdBVyheSAxhftHvY4XKB1Dg2sKjB",
  "key30": "5i4LC3S1X5543pVBWu5ZmgbRZmqRmjvXzBqugzLsfy9xE81uxtickTtynhh4UwFvdo39SAg6irP1GNnV5QajgvcW",
  "key31": "3oNy4fkg2tibmuMqNdyuPckH8urfhmdpA7v58torYSdh5Cb2ZKUdBjdMSkjYX1M81LZYGKU9wBCQVHApfRzc15aV",
  "key32": "4hyqZqnqQFrVK8KuGKwTSLU9bYULPf55RVi7pmuh3n4FmaF73UQdZUFtpRLq2XyfPdR97J9q2H5pCTK1JfYpg9JQ",
  "key33": "3uRt5cjxE37jpGKfCv4j7Tzib5fogy2fYijRbnACFyzue6v6HAy3DvwuxHnFLfHyRSR2DFHkab46oDzbvVBXRtTS",
  "key34": "3gK7mEd5ppsC4yH2oidsq7gfUzMGPHDWfKoe2MfmSzmjbYS5w74JuUi6KFdRXsW82vSqnpaAJ3Qi33a6PiBGt3CZ",
  "key35": "rs7SHkQM5NN3fyvpNY4sYxX4hsaiw76QtzSZ96VRLuzzYkFZZLmDhw2m6yWUDeBZ6WARBE7vpxVuqNCMVgp7BPp",
  "key36": "FnpUwfSfw1H1RftSXcXuHiZ9EW4JWgYtFYFviRGiAp5KEgVYyzg3dW5dzwV6TVAL3bum58jYjcupAzEDHMgdySi",
  "key37": "3Xa5jtNCqovNZiYu3s5bhgCmGm7B22DjQajUiew272wNJzuF7xAcFna7repMoY8uSZvpCB7dvgjLLUAzZzJy9oqK",
  "key38": "3Hu8GqQhEcKuqdfgmo4Z9n5nMH7KuaycH6BgwGfgh9WX1kq725ZvCpdTyq1vMZAw1WLgZKUhF7LZabgfRfFbxrzi",
  "key39": "5FbguxRx9wGsmdHym1PxxABttYJpeYiRRqFeDoV178qV6Z7h5mhwbjRtejCcikXf58poGa4YhtBftrGfmSCRDbM8",
  "key40": "54zmmKfHMFCshHdmwJ3ZDHzynSzTRZiC8135D3cmxroX4R8QwPgHVutf9qimfweJ4wfYaKanBvBDzEi1F18ii8g1",
  "key41": "5ebYvqVwhhh1NoFvm3JLiF3N6wNjZfJpdRcpS1eCCv94zNQfTEaovTexW4oJ7uPsV8GW6rauWTYSF1veENrScDnX",
  "key42": "4UdmgSYZFWS5v1TWigHN4zGbVagWH7LkRUyhtgeU61AU1uArSXNZDcFv5j8SjKV3LBscMscSaYcv46sEn1EXndom",
  "key43": "53kij1ChNY6mrdwYtcn65HnGTqPWDBFWzg7yji7jBduf6FS1BaMefu156oSF2mf27vW5MzkmdHU1ZN39F5c2hjez"
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
