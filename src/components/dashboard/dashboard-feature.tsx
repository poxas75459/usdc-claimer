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
    "5ykWWwLuHt9o8idBT6smmRwfqtqh1x2E9A3jwhh5PPjGk59LZvHLJTA2pq5tV3JqkyHhnLhoJ7Q41gjVPtDMqeKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PtJQc6KuV4qbwZXudTpN2VphtvA9FrroP2N7bUtKERtqYjt3NvK5HrvBUJSB8Zg1v5DWnF8LzRdWhaPMH2yT8C3",
  "key1": "3DibjFtQHypx44aCCDwzKWVy3Vd2zv86PdUs5WjH72wqpZ8hPkXK63hqUD2qWRBWAiBX8EH5QGFHNAVmExbETEEP",
  "key2": "5aFyZapwk7KhLNe7KNmHaBtohrZMvWP3TNfkeoiL3H2hgK4zGBt1YuRdUvDS6dEYTdMaJ7MrTCHMeCjvfAzco4R7",
  "key3": "5DM9SQqLbHFhZE1ksyPdTGmxygN7xeQNDHwS37wRFLfYJ72aMaAjPxSLaJpH7DQqvr5Co3dWeZNrPKXeVkDixKMJ",
  "key4": "5ftaQCtA24XHFQhS8iQR6tCX2GEe4x6QeUX4942LA7ESVPS6odnFxaRntLXUjsbRnyDuLoh3DAT2yY2kMDH92SXw",
  "key5": "41VM1XHQG7FpmnW3L9pa8zbM85aSSLXDk2GCqwEP8NmbotuxU37k7SSGiQvvwxBshZ3MGxsfCYZKkpCmJdX5pWNH",
  "key6": "2JM8qhhEmAyPbUPsguVs4cYshhgqkZMHBrhEBkSLWv74cccUzdhNvjdhGDyj1QkhKaAAToC7URoTPE8ohq3mSkMu",
  "key7": "37yPVqsG2erNjERECgAZKKa492BayXJrSZ7ZLZiNNCf6eDEhJUe8frnr3a62CUca8hXQKDav9SCNQW7jT2Ud2JvU",
  "key8": "3beDXH2zAsyaoF957J5yfzHVj1tKF4ZQJfz1utHyuuK1PKgnxQ4scXUnbrEwBYTf9migmwukrMFwWfDotBWLcExJ",
  "key9": "iZQzGbkEBHfUtHoF54wcnre7GZMrH3nHYa781fjJFyAxWGgTJHKRbkSMoa2vgeEzENYq6YwqK2xksYVMdNzJEM8",
  "key10": "4tmMD6zeW55nnL8uPfN8rnXGQCd1DM79kFBBVcfXqxzx9HXRzJBoMynJA8WorMyP5v61Hmxhtr12RJ5AwrkGmk2m",
  "key11": "4qdyy6eYSupemR2GJBzL1RU24vdhH7pVy92wU2pVM7BgHhPUcLixcprfkpCVYKXuHQj7vcJA2VejNXmL63yAJ8PR",
  "key12": "4VLiwj9QpPanvjHCPYjiTfiKZr1S5sQRLk1VWawTRXfLFtG7XKYvyJ8UTKhexxGJBXEiP2LdYCqM4qUud3xQfKDb",
  "key13": "2qn2FmDWos3KpecW5hvkkfByxMST91SrL9ruWu6gDRtvZsLaELjCCQXarRM4Gyd6ZfqrADdxnpigqKV7iXmm4rLh",
  "key14": "2foh62oP24uPxMECNAgeQFEzvsRsubXmw4HVmm3dA427LrDdxuJrFYE5vGKM93F8Ef7Tns1c58zuCP5vy4PTG6K5",
  "key15": "5RkLsBURyrBtjE9SGkDx3wh39JSpsuCkrUziynC9BnVnM4MKNcum1TzjRymCaPabQz4ncwGDdMfArTH9wq8mWmoD",
  "key16": "2AJmJKDsYWF9z6JK9SUqSijpuTJiAZp2iwy3nJUxXnBs6ZjXQPQACTfPEwNzh45QmJ8wA6FZUFMEzE2cTvY9FfyH",
  "key17": "4bv5kj4ddjQtVrQAFxCeTHBEAjWCgqQJbm3DAhHo22SsYNCpTnp9y3WNMvPXBdtBCUn5rxMa2r5dtwRR7U7xni3T",
  "key18": "2VSptBT42jdCToTR2jwmoXFujqeMAKS47VUBVxYaYfWQQf7JRQ79fR4FSNg847xg9CyDEoraJruHxWYqy53TFT5L",
  "key19": "3vzk7STkA1xecKGVRNL55Raiz6YeXrFT15czkvCgYuifVHW5TGc5pNvHRR3pyvAsvVZgjEz6VF7RhqiswQKY2eZE",
  "key20": "Dzjqjhq6JzHie5mecTDufQQxeQXhoSbS2sh8eK1nqTwz9Sz7cvSNEVWV3wtk8t34npjMwugQ8UguUFKQTqXZnEr",
  "key21": "2F4HTWp5k2s4vDGMptmMuaC916kTYigkX2jdic2ZuTZWqkwQbTZXqdkM4zCoBe4n9DLXKbqCzxtbvy7As3LwU53p",
  "key22": "2JhmGpALabLY9NiHxBtDCGqAi3sL56wzpwUthZyy71bSZLco6SMiy1dJSTUkLNXnoHKhdtdSbficpnxSXuvh9NFa",
  "key23": "24STGYTRqnUa86ahso1TXKn6DwMvSihcGkXvEnrKPeT16mPCg6rMFqM54myPCJfYwmiveiytn26SFNCxq4gsDo4F",
  "key24": "3wQqnACP4B7FvF6m7rXHE6frw9J2zYXfiLP8ZHJPeZ7iAYqEvaP26SQq8TvULLs9anxASe9XWAK4ZJ6xxmTG39vc",
  "key25": "tnPweCQXkWELC4tBs6DGnymQBXJCk6TvdWfabVHAznFVzSyUaCw3md3fJrJDbf3J1AA3DQ1TizLge6U8ddZxjKz",
  "key26": "4DALj3GTqqYvGiSzxE3SNEHaj4BcAyLmWVP27nxWE5bxdJAzYSt2RUeuRP5iA9FEFjmbmrgrT8ZrhcB387x1AqbY",
  "key27": "51XpYZ1qRfxTtkX1JRKMLfAeZ3aqgmjYAhAnpUDLUoe9Ks4RJs7y7pw8PTv9R7wfNrg8wAGgyJwBmJ3TMf39v2cF",
  "key28": "txLDmSsyrbMuZdpLVxcGsSqMjVDQuDnN2wi2hdEoy2HGG8dyjcQkQJnjxwFa4eeMGk1i4WWiiJxUpFDFvsRBQz8",
  "key29": "2smGPgXTxJcfVqLhTcLRLZgU48ALawe8CLzSnBWNWaVNHxL7GdfWVcs3R18GDnen94nKx3VcofAL8k9ve4RQ2zgo",
  "key30": "461r161FKkRvBEeMHcQAbiiSUfuHnNYYeJN9NPQFcDoLoE9xmDVs5RT7mmaJjfMA33zu7nVUJS2JUwF1iJDy6ZbG",
  "key31": "44mwSGqHbubeywCYZvf5SiYKNPDMB7wtPpcVdY2XeCwPwApbRWNVChi9VUzJkyLVJ6fV7uJoszEd76khDpGGkTcb",
  "key32": "5mUVLtv8a1M4nYjbaiGz8jjU7uupWwLpN5HQGhAbqT7uHEcdX8px11DPLn8MeX7LnNkq9mMAEzAGDatdb32q7D9H",
  "key33": "j3XvhEoh4gwBjSZwUnp4ivwgVvwgpinERRScGdquDszCx53qrzTkCbaMb1LDK4P262sLbCFkEvoNQN7Z8fZrjmt"
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
