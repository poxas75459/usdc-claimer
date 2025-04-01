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
    "377HVgonFotsVaBEczt116SCvcXbjCS8d6zrmx5GMsfcWwUX9XztckgkFrjZ1ChdksoRF9n22d5SixMqgkDovra3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EWwWuE1HrPm1Kek1z6NH1K3BEJNTceMEpiUFaX72wvHT2d8HDTDTYpXQqbffPHFmXjxZQ17BdtBHANcyBj7TgV",
  "key1": "2MG5ruE6PMAtLNePn1rDtnmy7es3R719jqBjdWxZGExPd7z6rwLu7q1P6MVN6StnoQGyoHKBgfbjLgaU1uMDAXvk",
  "key2": "Xv6yu8cdvQ3RVxJMa9ErDvpQnYK9CRR6JS2MUotCQwtM3TSTneiHR6YGDpCWgPhYrCafYNpxQKikgBZrhcKLbci",
  "key3": "3JDUGvVXKerykcyLmWYcq8E1HkBZVpVaBkPvRgp32UsxZMSBY7royRx1uSUyDb1PGBu8dTgLToSGhnWbWGRtoJmm",
  "key4": "66k76cDG9xYuUtnYSe2ktJ6KXnbQaZgfobDCLWvxeWHoU2C5w8JZiGMPy7GREoY8AoTuVbwgCNX6djKqPBWZb8qf",
  "key5": "3XNr7fS8FVj4LXzkqbn7LrN4bo1jNxbKz7vY3aq8318q7ty93v5xHpywRwJSARuGr21bL1eJtp92yjnf9gtdgwNg",
  "key6": "2FuVtTfHZuD2rUe9bm2pQLFNPoHzvb5eLTHWxmNxaNZJMwTL7TnnvYhCRUoQkThi3F4DYXmZ1kWGULb7yhKG5J1H",
  "key7": "2FEj7YteLVg4omh3Zvi6WyFYDsG5VSghSsArEar1vUP3126bzT3BjmbUcBijRB5KETZN2JeNc5eQDLDFYDDdggrn",
  "key8": "27jXrSsZAkgaph1sQRFfDLaFWdqJVG2pqu576K2SUXr8964veg5gNfbksUp92hoc1b8vZPCC79QRwfHiMxHTgVKG",
  "key9": "3g9GSRy14NToiGRFUywdRSSKHXjhZizy6kf34wN7mCmR3KrddUXbZxcKAT66wojwwAV4HctuyrjAAZM2A9733MoD",
  "key10": "26ccLfEaqXyYprQdEoae2rnH9uU2mdWcUWPSnWzwnVzMeqKGu3yrPqSEsrJgrQNzSWyVjLWcL5JdPuswTZ5XZkwE",
  "key11": "r39Vhs1H2Vg3QrdQnRofQSZTjaDdXwxFV3SAYUrBch1ov3EB2Bfnv2yPUtTrTSk7BZTirQJ9389B8WLXXzZ6SPz",
  "key12": "5ask31djWX7Ej1LWQYjmV2GPRhnDLrvyvRfdwK94P1hQNGBnu2bPBf2eRMWWTT93tEawTpDoV6PZ4U1BPaNWpBaw",
  "key13": "3rTEBMSqm77NJxE6zuVpdBvVSCX6LVoRGHLUu6PWBNL6D6x54yW5LTVGGw2q7q4EYFM65pDVqG7gxtfPf8af5nLB",
  "key14": "3CGG6fqHnotUkuQoqYH4QKMog6CveJUgXA8H1Ch6SMrRnm1LuPHWn7yPYLXvQgZY8eZ2LkPaENfbB5Kta5NgNmLw",
  "key15": "5gYFjC4g8SdGjjJSoTa5SBTRgZ9r6WcxKhJkY8z8r5obiftDg7uD12D8y6BNeDdJXAsHZyP3Xnsp6jah4i1FSasD",
  "key16": "4SDd6yNgpJGsVLawJpsqVQyUCiGGtvi9rAqj5yupCkLRZwHHyEGjg3wkwF58brbTesMmRqQieRGD6fQXAuJr4T3f",
  "key17": "5sPa3eRqEY4qvXmNufNTah2VJ9rFTjHswkRNsTHscVs1iaMVxfwhGku52m17p9JpekY74uoFKETbG9bx6RLeuarB",
  "key18": "ADmT6N6jn7AYHBgThiqCdMwJ65FbejH5mm6dP1Ya99xB2ZkCrR9fGR7vkBoFENGmaF3qLem2kNj5hWtrWyXwYGw",
  "key19": "RVXNWkrweqUEDa57xMjQW7DNNq7eoH57UUvkdnFqDYzbxV8vrXkWuUxMKzsn4DD6JtDm5HBxVHmKpt3C8MfEWgF",
  "key20": "5VAiZV4CDVpLwvnMvfqAYeJgJvkanmqA1i8cHeEfEWNzcQ7czQP6nGNQNfWXPBSWQwd6HiKSnXeDtjyzkRZRssZJ",
  "key21": "3b1LWLqVSAR291gjReyc918LVxQyukzxojZHVT6nVWzb7fVcs1d3eRt6dpFMJaTYVqSg2d1QQNCi228EVnNvYwFu",
  "key22": "NP3SRzA812VKi6uQDruZfJMKUAKem2EUgtjM62k1Q7V69XA89JU2Z3c9YRA2wi8FiQ9gcGG1UTBUfQuQ8MzNZaz",
  "key23": "3CUVJk6ZATRTx28VvsdkVkywXTYHEj6cUFkbLRcwFWyZbK1qj3KJDP1jZafBMBmAXVPfJstutYMTEQyaGydhBhxY",
  "key24": "4WmsqVb9kZZtJxfqfG71GBTsqzDdFMnRo9d1sCw9LoHwniUn6Mv7vb5grE8mMbfXS1gQjS8ZBrgTPhCREVXFyCqZ",
  "key25": "3b7SJzbaBzbjB9Vb61LGF3ENM2aA3FUk4z72yLnRQ1Vjit8WSnLztoygGhCL3pTiApyV51VMSSrbZ8nVcTamtipT",
  "key26": "UHVRgqKQaNLrf7mcN1isq422iQvqFSCnqGmPo7xYWx3SVwjTYCras2vRvc6KZ6RLZh8mSbu2Hq3QBwC8uVuoWaf",
  "key27": "2HKyNmYXtWFgPWjCC3bQH8PEg3GFnyCJFnZuZGzTHhqGRoa3cjShKWxyPaFLW1ZRftZrXXWRC1XRmCbPybM6KDt6",
  "key28": "4Yv4S9VQ3WL7YfqL56isPWqf6Z4W96iKYvSLREhPP6chbQ6nyHnkEd6jdDHwv5DwLZFtjc3bbQ687EeuHkmeunWB",
  "key29": "4XhnXe4idStsh6eAy8y6fFcWiavq8phGnjK2qbZZN26Ti8UABfWpgW5kxpuZU1hauyTQ5ERfwULLXj6YZ8tbBWkH",
  "key30": "4QGLZgsnUDiFAt293HHWhwk7RcCcPUijvfDbakYw81EUdVmbLSPP7sdTh77byDw2bxRJs5AK7okpHNySz1K6TBJB",
  "key31": "bBjv5juLnWCL9mwDB2w5bYC4CNVwKjCJkyD7RhaEDkcrSfq1JFLC5V5TF3WknxQzjn8Cv8cWjQiFuSAFMSGD5LZ",
  "key32": "GdHTHMzBHgwtxH6SbFub5akXib6TqH5w4wWZjHNEzHffeZPgEybhHb9JNoCj6FjjRVCe4sc5tCahAC5BtW6LZqm",
  "key33": "5oGvmKmDy1Fwg2J5na3ToaJqDab9QrXoP79vQJVKHeCVxuw1kn2iMcyYDLT3ej1ZDMBpp2HrF8YUN7vyYkA97QCE",
  "key34": "dPaudR6tbwiRa36oFSudmaGjQNTzg9Z1pDxaYDNZVCUBpH1VN9GDiDFJHizW47CJPWnx7U6dxQLsiRuQKHJs82f"
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
