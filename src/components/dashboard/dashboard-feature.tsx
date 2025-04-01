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
    "5VBL7SRXLEd52gEv6TKFm9QitVAUnDLrSUHsATfeJaXWTtjUpwwV3AWX1PdW13vLHfhx27t83Qp4kBvHMY2NUUoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bNcqv6ErExFVMLrrEjDRpxCnc3dsKdWSEqzgq8aPymRiSaCbg5ifwW4KmB9GgAFPiVKzBu7ZxBwopyUhrysqyx",
  "key1": "2HYTi74p2woDnPSM2yfi6bkA9mG9epRC17Gny3Vnxuj27JefHxeTPQ64UQFBH9JdRw3sfQ4WcMgv7cKi5UmHRhcA",
  "key2": "5VjEE4EBMPLNKWzaZK3cEqYYuaFg9c1K396b4NrBhbMZ6nJcFsyZiyxo44W6kMZqZjwCL9wJgcW8oYgrBBJckcVF",
  "key3": "55wCd3Wx3eH3VTCxUy8hsApKCYcUgqVsXwyFr7T7V5QZbZ66RjVaFHnYDxiB9AVxWHTRfG5HyrPM2xmqyxku7ddX",
  "key4": "xNHBjo8vSstqgykbpe3933bkWc479iFSGHnPnCjghm2eDkbtccKFtH5RLo4ahJYhf2DZS4Ex1Hc6rugDttyV1Eo",
  "key5": "3F2XFTPw8Mb6Ep6B7pibz36eCtTjpKxTe4erBQcBiPsvGfeZGAnmaiNYX4md8F5riTTwVUCt2RXph3eH4RE8MxqE",
  "key6": "25sX4P9RBDx1nCjhamJsctfiNNcw9WQV3imoqoowysVXGYZCFibMN4L4J5fL5z1QdsUKVJVENaxdrW6CjWA6DvZG",
  "key7": "RjwgrhahoJbxaLjeB5ggsz3HpERwkyJqadfe6nDvBVVa9icjTxecEgvABiHoAW9G2PuqGMWEU7xxdwMRMGpzrJQ",
  "key8": "36YSUHXkVPkGzdLgKpQh1osm4tEHpPta2yNRj1drXkaHiwPzaYZuKazCUcuAc6jmzX2pnCW3qhqVmSkDMijhFFaC",
  "key9": "4mZVWPzJ2PPysPHAa1NatLMnXxQgd9EEdkjeZrjoxnjB6maUNnoY7i2oifne9Xis9bMDCyfuxwei7fRSqknaHBC4",
  "key10": "coAxeYNHz5vgCPMQKXBtXEShSysANFjufueMpBzJojfcxC9aPXmp929VC2zFVZibPPYrPR1RBuggb5t1raC8XYz",
  "key11": "4rSJVe8NFHwzd3hxzztE93fit1fMx4Vawh4sg9CUFx1Y6atyTTPoRJmGajb6qj1dzVa1iMVbYMFiLC1c4BbFPULA",
  "key12": "EwiVnSwAsZpnYdJ1g1Ub7yYZHCCaFtBbhmTsETd1ceL2bhq5KNcnk7jUtLLX61SkmXZbsSKcidGBjUC9WT2LuGB",
  "key13": "3YcFQKHbBiAki27V9zUPY36XG8qBYcbWwY2c6E2gPY2SFiw7gqkNizaoNknzqQWmBoBdxGchvMepnzkYvYUyRgYg",
  "key14": "DzSfPkKHquM8oqXtM9W9xx4s3zeM28BR4zzyn442UMhPJMP3J6pg6t3wooYUXnHEA4nRDjU6ctBgaZeusZ5Mexq",
  "key15": "5G15yt7x87t9p3g5NoaGNXuKEXWHScjXjeokhMCxiy51ZL6ZYVws4NSEkZHFWSvcFAqxjMuKR9Z37rVmruR6a2cK",
  "key16": "5DhDLBD4nktS278tpg5hug39KKPYPXMvt3H7gtxJM6BKSWL6r2HUpwfgqJMb4bNtP2g6y1sEoT89g15kDsXdsYmU",
  "key17": "2jfekqDYh8Q7S9PxqFSqP9F3C3SxUgi6DtFxoLoPKa62CtJwomP49NsS3DQ9BVkKofbVScwst6GZGSERTYhvxp6D",
  "key18": "27TZTbPKYcjBpg5NapyBSWVaTKZsNGrsi2auUKQcQMnrLZopFzLSzocYy7PCpLJDMY8BLjTG3VPQTNmQGRK8adAN",
  "key19": "4Up3BQUFTd4uiarTLkTbGbfaq4gRHReN2vPBwMDtgRng7gat6Qkk2Xv8PQuD5E1WcT1yhGEwiTev9sZsPxvrAVJY",
  "key20": "2b3g9LGoj8okMD7NRA4GZWcSDBUAJXuqaU47YiuaXXwkH2A92ZMJxebz48LFGBUVQ3vpjxWVnV4gSuGABkYfaAFz",
  "key21": "58y4JWWTKqr8mBkR6gDy5VCNymDFTBussdi8Kh7G7xWts81hTP7NMxPDt1qpqokEay1Dw1RfghroPWvR2oJagWzn",
  "key22": "V6dxCEN4JdTFWYY5mi6aubawuJE8YbDBFbRrGwhKsnao9KruDLMTU3dtSKEa77vcuGq8iswtXdUNGQ5LCrZFKs5",
  "key23": "2NHAv75wuVqDMS8RiRaCk4EYzwLAcXkGhKUeQmh3ifn3cjj4os4CfquwpEZ8sCb4PK2WDZnW8s21Tse83LXrD9Y7",
  "key24": "2cSZRu6aEyESC78xqCH69t8GYB9Ly5uZfnq19qPZDAKebw5AjsejF1ED6zjUnQL3fxXfPP3VULavmdu2N1sc1Y6L",
  "key25": "5L56SXE4KLcavyMx56Yw1seAcZyuvLGhJRDZii7mA4uTgATYAxHUyuredQchW4SWDeKLg78eHaoQZNmrP6ZmaBsg",
  "key26": "37GpUxNdH46H45QraWNe1s3eD2xxoozyaHMY5Q5mv9iJ5jgsZru7vTB5zX4D3B3q8Wh17ZWTjMFSAg7TuomQiyCS",
  "key27": "2Bdr6MeGzFm9V96qEvGCHQu5s4AuCbP1fsM9cbunpWgsQSzm9YxUVQCp9W8B7kddYhhaXxyidU7i1dSWntYpKEWy",
  "key28": "bw7RxG1sHnZURGnJWXKsAGw5j62eodPp61YaoW1TU3xyqRWDXT8wuHyBxiVAUi6sRwhrw6W7vGKfx5qQrrBqCyv",
  "key29": "5H9iFSCtCshSi6VDAow3npYzP7YeK7hG4ah4heBe7GfzwBqeju2HKc3PKKeshEo1vvVhpuGrzFenQ94YPx9DQGcR",
  "key30": "39xcRnE5A5ciFXfsdyNEST1mfKYkrBU3RuG32Y2HS2iiciyTypH8LxnxC63xGDK86vcF3FFctBuMY1TDDmatki2R",
  "key31": "2bf6VFK5egbHZNZsNRSAxnea5fGf2Wn8ygsYuNvQXjPdq7X99G8czfouVWh4CPBVnht1T3EpjYEicp4x5SvVdzBz",
  "key32": "3Uq9nepq1ibRMJKW3WMDHdxkpSHU8zjSLrnt6S8yh7jrfDmgKSsjJ9pThpjZ6GyzCwiH1wRYMGi7cgp2ED6YgZnb",
  "key33": "5YGnZ7AqfeYJkbmVXfAE5m26r124cefnZTtxaCpY7YVPvw9EHyVg1FxjpXqjV7rNXudbMuFq7TqLWvwiWjs6L3K",
  "key34": "2dKmY66wPedEZ35HSE6ME2QxWuzuxUAVaQZg1KFzv8NWKTitVdt18gZRwxB66w2sJudEmUKWpLPdjoPbjGFZf5nc"
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
