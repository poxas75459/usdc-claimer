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
    "2VcTmay7V2ej18uGZkFPKHPtddBUHQMh2HE5YFzJthR6U1WCstQtbDpiLJvWfm9fvHTsctwUsSqKoUBThGXMSZGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4xcxZgSuocPBd9uHHEczCQeZs8W9JRpp1hjN6SbKrZoMHfAfT5iF1qzFx23cKpbbsoA3RAhhgbT527BqNXK9N6",
  "key1": "28LksC3VZamrum5gAsikE56Ki7W5FYqYcoowArHf4Q5uMaPnaJhReLHJkzydVvcXFaMwQ6tUxnA2hT9xUBhnTzvv",
  "key2": "4BcSFyBLEppnpwHzm7ZKetVruNp3QjPhYEsJTvhiAUjTH2QYw1tRWuSPBZs6sFMb5r7FCm2UsV1FVgvBpz7BjWHA",
  "key3": "4ofMV8KTaphyvicjfNPzmoQE9ygr2gD3C1YHntgopWz6msEfxRNNtZ5dGZTzsbntpCEvVbDmaqUQ1SUmteX6hnWW",
  "key4": "4RN6aMFPx6HwUqjYjPZUHKr6tEmji5qXJwd2yCokc5XzBbBpvPFTLv37vHA7nvqJWtgKW6eb5eTXwyFJb9SQ9UCj",
  "key5": "PB4xdsvHc5SC4q7KMRVnuRNbTtYQqTSUx2yMp3zbg25qPdX1eWo3x9R3ZobpvB9FL4m31NbK2aJYHnjgY41fgLd",
  "key6": "2X1fWA6z7nc6BCbUZYb258atcD4iBQdYmMfDLruG7mMsP8VFhvU8dJ7JMu44B3MXT3L9GrFNhjNpCFpE1WDXHe82",
  "key7": "3ZLA9cJXVDGZAAQ8fx9BF9Vxx2j82PzA5r6egcbMFpVNKMLY5gKkGi6xqHqvsYABEcPkCw9cjdUCtNBAnpgPgspJ",
  "key8": "3fd7Z8FPY3xLbYnZQXDUcyEKkYb4prB8q2vek7GnkgxcTjBdg3kw4ZQYEYSrfagpDeG6ox1Mt8GPHRQXLe5g5YaV",
  "key9": "3wvQ1JJLTjKRxRHNvZMnH4RvWGDoMmnJXkmmN7WqjwWRucdx9VJRBFyqwy3z3gcqvNAiJDRPoDdWbyLad32VwhfD",
  "key10": "3U6YBVTkqhZAKUot5rTBqsgEwX6xT1s3dFzEXndQUC3c99wyZWVoGZgUyXhz2aq6BTWKBtavCeJQxmhp2H4SvhVa",
  "key11": "bwqbKhsaA2TEZvSzqMbvffTEGXtddKX3M2UAJcywQHTio6gTA1vDGmWBqk7MgBmLRmqjojL9HZjeJsUUUcyTRmD",
  "key12": "4ra9YiPKVcWWAcZ1fi1SM2nH4A4NaxASvhwBVxKrrZoK7i2c75j2Ugp5ef6qSiVAyZ6rLp5RjzeX676AjJLCbfTh",
  "key13": "2uVpuz6oRkuGDkEzCWEB92dcQNneFtScUNbvGkuUW41Rv7F4Qg9neiyFo1ubLgPSMgGPyLK4pPYFD7pzhjFx38yg",
  "key14": "5aYFtpeKyDUpbHKK8bNhdi9AGMosoLAhfoRjGhpnr9HP5gaint6ZLp62QvFwEf9z5fsHtGcTbhwSZXuxQpmDiTqJ",
  "key15": "2n3uFtma4fWg8pw8bVCAXs6mQPWGTgzZxJdQVqjCHubzgjNaekGev1DmKEAax8JwMSRabb98GmibG5pwGfkt3PuH",
  "key16": "5LNPMSzW7bDiHdjhbhdkkrQGfAwZY9iiWsux7Fe4JdZ3RSUg9U7mfb7DPmaSeMAesxq9cpw4VJLRkV8skJxWHRrS",
  "key17": "2BYBnJXSKU8Y3zgVERm6xJSjto1kdws9CDgbCMLz4ozu5r9u5fo9cbPD7ykugWJs6wdLwvDh3e44x1K2nndXPLXd",
  "key18": "2J46vDqeHinfiy9aX6fC4ssPzxttMBpyX28Tp16CKT5hcQcF7cFyjJjYAzTsVqLkgRyzQxJuCGW44qtmtiQKX2AS",
  "key19": "3XEAB6Sj2yBT45huePs4VEMDDL1YA8GfneYnAqURUC6Y4Pi9HpEiNcHJ9C4vVX7aTKXSjdCJhnGZmsmSmv6iZMTQ",
  "key20": "3aL9E5pfJ1UZYFoy8icKChRFkKsd2mvdHKKjXPTznAYs8CWDsoGTUPpEp7fFH329tvnknQtiqD9qmt5gyBuViKRm",
  "key21": "rQNYpQqZLJCHDELG13RYcejmmci6LiMq1XCb2XayNw8enAUiVQ3sgtERnC76voLaKVPFsXw19wMZyh4e9LyxKeq",
  "key22": "2AeeVLcHA2h23nkW1UTWSnZR5ckbeBuyCfGzCyLgm7UEMYo8X68MuJkAiAWvMVQCG6AiZJykTaXzxyuC6tMBz4YA",
  "key23": "2b3cjncw3YuY1xRyo8hn7CuC98JwR3sqhvx8vhgzQbpvqQwyDg2CRTqStiPn5WCv1zV1n9w8KEZCxwbX5XYDsoAA",
  "key24": "HnKqsQGxDXeBS2833ZeSWES1c7vkrb21CMzvKKtiP72Tz3yuELoVudn8cQqdW4XwN68XyhF43sbiW5A6mpS9Afy",
  "key25": "41SoA4FjDKEbRMbCxgEatvRckw9uZFZWDMxpU5vLpCLhap1gcsymZXaRCBA5BzovGiRC7mLCrqjFKvvuADnZ7rmY",
  "key26": "35tYXR1j3nuSJhiVXahjzDH2yVi6WhbWq1JFpwvvZPmceDkVf5kR5z81iHH67qu9NE9o7LNBPt9XSoEcbVDQrUsw",
  "key27": "5AxaYNRCBowK1twD8eGARdsxMs1hjq5b5xzrfhUYnbecmJ4yzn9QeGtbiVyNShhF9qdGbWMaMfptWVpAzsGZE6Gn",
  "key28": "3bLnkginirdXMQ6oyWxpkudBJHmn9ChTNkEukrGawq234Zg4dJHm4wTbnyNcX6yBM1sqqSYbvzxW58FQ9GWeR5H7",
  "key29": "5JxMS12u6bKosML7sTpVcprCcGf8pBPR5Ph172cxbvMKFHMu6FxPNUBEKxM6oQ1d9jQ8Z2x8RXocTfi5ipepHvXa",
  "key30": "e6WndURA2z58nymtgU82uQFtSXLdd218rfLBx718K8hnLFDPU2rPR739QKup61YfHrCDWjW6ega1GkShr3PhJKh",
  "key31": "5nZboDRbfMs4nhxfgRefKGCVYjqweetjuLUzyauMdqgomzJxesRcJEK4uv3cWsogVRNeF66JzUTxdzv4QiEPKSQf",
  "key32": "F4GtRRYwLWN7Dx9kiAYEnBRuhyvNoinYfDdKj1tEazbZVGWVtAQNBWtpJgnjSamPJC3oSG9dmW7QSs2x9vZpc6d",
  "key33": "6477wiUzNxAyQZxpwNJveYarYsyxCP6AoPPqCAwSGFfE9GpsbdahR1SqxtyQSQEmTQmRv4hUpAftiDC2DJj6t4qe",
  "key34": "WTwsnQg5UbmJCWv7HQeQtvpy3uuK1SgqcgfUsNbWV24rGaEv8C9BinXU37zGHQ5efM8AVTJtGKeWN8r13MwWRoZ",
  "key35": "28iyQJnPm4y9FGJQPgpsoYNiPAtnw18h1JygassAGmhX5eBqKg6yyFTe4iEexfw1Zik18cVXXme8qCVhRiq9PR43",
  "key36": "3MAf37toaQjBQs5bMALU4V6SjpUkvVwurbATYEAa1GrNRtBhbbsQmZjyUj7hTJ65zNwq3B92kwhDt4Gy47g1qWvT",
  "key37": "58GFna9t1498C4xnUsY2qArg4qDwuzJwBgstaZEW2hgTMu1UANfPEUQAKcrCybm8NA55YHxNPoiNjATWyGCsCMmG",
  "key38": "3vpE5m8vRdyzgKfXAMW7PCpFcncUA2RHK9VHYaZRPwMLkumcnpqVmA49Rz9nJEZpd6WZxHgiJcyjfNrCK1d8AvVG",
  "key39": "4nBXNCKH2bbaC2EqYvdQ6bom4YXf9bT3suw1Ut5QR8z4UqSkF3zNYK1h8KgtvvBoAwKiqgeHMQRdcz3zLgxLGMkC",
  "key40": "5LvaR49H13qc8TGsj5pcKgPqJbRf2vMdfX6g9ZWZr6hQuWS9rQuchEi44ijQn81myFG3mxhkxVQK9HwCSCSS7qX2",
  "key41": "fgax8xVXjxEpsZTgC4JoXASwdgVy6UDPrkP38BuQ2kv3t9eFqjkfZ9pSKtXtq4UGMU3ZxTdWBkAZi2J6PQYtDBE",
  "key42": "3znHECC3qnb7Ek4gEAbDB5Fo1bp3cw363vJHTYrS8YhTKLqqcBLU9gCEfD8XFjuKEPV4UQFxM2AHBYSTEPYMXVJV",
  "key43": "2hnViockC5EhHsDPR2nYKK6vQbL7D7Wto4sTJBjM1sQJDQ3RxNUX7b2TGpfZzecU5wSdMcGLXmXxjnafmG4Ar8nH",
  "key44": "u3HonuqWGDBYTRnaBugRX3AHEfKQca3FSNAubGXW5eDPXxt2wDHPxF1hHbbHVTMnJNyCAjaQV8bRGL6E5LA73fy",
  "key45": "wzvUvuyKDz2AniLZbiVSZCJvQy88GZvitntp33qCUCrwtskyLn7xw6vtR2QDxET6Yy7g3F9NBp2tCya24J2Vn9h"
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
