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
    "4qcz5EZuFBqmtuGGc3Xysy9fQyc7v8pBE7mfq358h9xcjRCG5dSNvV7P1684abTiFzCHudjmr36Pc1bZKzjPDcPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Phcr3gqEgJgVjfYoQQ6BBqxtXDZHiuiYMuhh7Fj7JEP1c9NW2PRUh5peTU6G2Q87oPBitgUrcVUynR7bD94PcN",
  "key1": "4Nqqu4E9Goxa1s3H5FxPyJ8SWWNGHZtFBW9ZkwEu149zU5QGkdau27xfgNTKB9XQTwqDjrppgMcKgL2WNXVebQjp",
  "key2": "4pa54P8HGVAJZWrPhaCYGoDgeYJ96rx719MHNQeyxAD5JReqBWV8oe5gDHerEsf5WhsEv4qbJACsYPhwsgD3Xkfm",
  "key3": "3w4cwTk9mvaK659BJKub21HoytXFGU21x6gPg1ApnrwfVhwc2PyHGe7nqxt946LxNmngeJcDrekTMbisbnPNpy6j",
  "key4": "22YPEV1miUQGWBXDznw2Qr2eV63yy1gym3gLRrTEURbDSafabtDP7WPPxF88m9HHwE25adMi8bZmyS9a6Nhy6ECn",
  "key5": "5wvA4oGoj9yRBh6cS5wVenbW7HdNeZLS3QEbFufVvWhdBY88bxZEYuJyvxxdFKpXzwvNubgV5YHSUzoCEoyhq2FF",
  "key6": "4Fs53DEaRFFPJCLu4yMxSbPhS38ynuKTezrJ1tdyYgDC7UQGowMBpVpbv7YdSWvuySrcN6VteZq2CgooyMfzupzH",
  "key7": "5odBLq6CjW5RBTpbE87gVFMBxm7YCaXpitTGF5BLuZWFYVWqVun7gHJrfuxJYZgSJaTeRUZA8qhqZtUv7TcjNaAm",
  "key8": "5NqMd5syxSyAxaD5t32xZVK1QGJFSfP3nKCy6U2QV9CDdcravvkuvTPBYg14FdHc9Ap4eAj3ZXWLwv8QgRHBmFNo",
  "key9": "3YysmozcTPUvwux8tCoJFdSUNUuU9XfsAqPL1BcLYTMXFewDX5upfg9mbKDPd2NsW87eNqyMNMjQwa9sWVP4iTJr",
  "key10": "3skDxXjWh2xicQvJuaVNCWhuudEuCqttoPZaWvAf6AiScxcoCBAyB1o3jUhsKNysVFYNXr2KruX4ik21K2tKGoz1",
  "key11": "5Ek7ma4WLubUYG3yfzzcYFVnZqqQhaPkc9zKBUuzswXewPGKsnhXQW3iFXhDePZsSDfhDup3eGWR3AEkBVSE7myK",
  "key12": "28Z6wsNME4eqtky1azyJ1JCwdRfTWMnCRtU1b1H3VYjtSdKkhZsEvhGAvofNveuQhRHuQbPRnmxXTjjsrGDKY7AU",
  "key13": "3rQggTPDp2EmB8gizWNazYgvE2RaKBm78FgbXKJzfRt3XzHFcwM7wEdrgPogFKgMJa9zijo4rXTfHq9PcNhtg6WD",
  "key14": "cmA9SkmESuKBHLvJpYVU1ris5zNp6LAaWgyPxEybLXEiYuSEy23mhxMTUCMnMY68WUXbGSiHutXhBAwc3sjjWwP",
  "key15": "MVNbakrYMfirSVPFeDpRnieHNusw7iDSDzmb5UwBWxcPwGVzK828mw2g4WNEeXr5xtP4HnzCFwaxrQXYVUMfR8n",
  "key16": "3G4RP8rQzEVcyNrcBhbqUgunHqfMVWav8svzXZHgijNirTsHACJSdDUkm7uShGtGit5YxXb5zdTiekir3UkTZznP",
  "key17": "pzg4XpX2HUJu8rxUKa7Wtu6PaoKAMgDhBwsYV82NXbBbLvtJVeyA6ACWDbCrYfFfR7fRoqp5uG9n9TwEhD7pg4i",
  "key18": "5LtuhhCqhRkpTDFZLWyoYhb1x1RE2aEFUghZHPkUFGkkAV987aRzxjscpzYuMp6XqMQ8Jx3Za9aHomMyqeLD191H",
  "key19": "2cSW2c7qTWbAMDUyzHrSnAZiuoFAG3VTfGs5fPKV6ACNznifPBW3RZhGEyLihNhPxEaZMFxgLknG4JJAk4qcEnQX",
  "key20": "5q64qhK65bwWpVtdZCS1XSmaDA1f9w18owZbTbfHrSuBJwcccYTQAHE5cnCg4v9b9dC3RPYdE2VSFaxoLhkaW9xq",
  "key21": "zyAwF1xs4EBvLLBfyPBDhj2E9dZrQgiqWXPHA91PMvisGWHTEFakLHZfupaCv2SZfgwJMmsotaxjHdB987imqTW",
  "key22": "3TP1cggXZMxmU3Thfg61sqpXQt2gKMpiU8X9f2Safa39WXJbVy2eZzsAdeJsL6rqFHdceAMuzxU4gUCeHBqrFoy3",
  "key23": "635hDNcwnW5H45NoJa5tjBaXe5rvecEh73MgzQb938Y4FVVyrMKqqEk95bmfxfo7a7M888jmeYxkXCFUvqkqR1n2",
  "key24": "R8aQnWSZEUBL28XawecJe9QtPxMkVYJT47fXC4QWVChTt5H7CteKuV7oogfpBTmBCSVW3RmYdaKFoGLHpYeoAn5",
  "key25": "5yhoMSf6cFDjQ6X813xPsPGTHkTKXdM6sp1m7FUiDtS1X8h2HbrhbRQ6gooe8EbNAJDkzWpZZLRL38UBvqJKzqZ5",
  "key26": "2DLSjk1ddTG43ibcT3HhLsay5nR6JbHh4CvfbbqjfgBesAWfCZBYVxWmHpgKUPdTUVG4F7fUEkZMT2gwLE2KeQSH",
  "key27": "2K6q6wmb8xCGUYYJxjhKErHmToW46mndsLqKsKss8f5MoMPE1LZpFi3jutG85zvGXY8dJuho33fnyFgzNz8d7gUP",
  "key28": "66BJBc3FkVyQuDDWPLUVycA7bGHbKwyhvzNCEfSgzYFFYjZVcDd8gARWA2DALGxWkpMWY8H4UCp1pEca7Y4YzyqS",
  "key29": "eAq72K7yuZaxDfJVvDu19rKro7sJWjV47a3DyUY9CkchLFcEQb76STDKNE65u6FRJ36o7EEkQ2jzynF92SGtrbF",
  "key30": "5QYnZN7ZvqQPovy43sZQVecWG2P2sMMRRj3HMwqALaTMGcUT8yPgHFc3nmEa6cVt7e19efNvdJ2iD3TeFGwJRzBp",
  "key31": "66RUn7TbEk7xTeXH2PsLGm1QpwJR6h7AKKmKf1NmQ72Sj9WgnQ68nCoynx7hqxzVUiMHoriVgptjvRp99sVPT6gW",
  "key32": "3ddu9dKVXszEGDU88ax53UTW33GMoqKA4dQCPgHSaRk34CR7toPKdQhZ2iTjwhu2kdeVp6YBJTZoZdc5WagRXADy",
  "key33": "5xPW1nAun1SR1BK2m7H1oqAw4TDKhM1AMJmBW6q9GxTkCNbeLu1ndS7PBZAPFwM3La1ZDkpZHNSwCbGGQXc8qhwg",
  "key34": "2ksEkCRGDJJUGeCeqvCepNJocXBQxDHXaZSv5f5vCLrusvwyZpWSD9dvBotDxUU89QFwHD92ZXhbmRQDaPzkdHbw",
  "key35": "3z273wRFyNmwrxwEqNriqdreP3x23MXUcwaXksYNk8fkwFV7djF4ybLP2WbTxjPBEqLnW2WeXu8y9uMpoy6HNx7Y",
  "key36": "2Y1EqNeaZk22TTW96R8TNTAcjSwLDjch2ZzDChR7iwCnauMJpNNdSMATzH2wuAwboTjK8Wm6TAoZ4mmk8HSKCBka",
  "key37": "4nFHkRfmdcJ3FQje4Q1WH5xwZdi8528ya8Kmdq4H236zuCYj8FGausLY1hHR66EZ9VfkYsRqY4GGQj25RiQFVzX5",
  "key38": "4YPpDiarcs7Jtww9DXhE8bayqedd6QcSABT2yyzEGfttDfwu54MazvY1ex4QXXFn4dAhw5zHvSKYJnpK4cxGc7ZU",
  "key39": "5mnUjXo9SEgNtro9PgKZ8LBZemiAutBgNvvWt64YNnkqXdCBc8ajk6tswPBaEfyjtNGepFugcQnhHLzYAxQQudov"
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
