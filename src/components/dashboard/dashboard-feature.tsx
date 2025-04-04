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
    "3A1rytLZUV94cwU4svFtsm9pTCYVBhDBQURx3Wz1L89CZLtffnW5GzReSRKZxfiHqMMaWTuQvcuCcUQuw7kb258i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnhjirJmZJD5z1z3n6ZmBReqLcprDTXWWdojb35uzvcVWod8iY5RW9r2c1MhgDSJDTomMSNVS2T1STcLB7snKTQ",
  "key1": "37ifxV3etWzaao65WqaBNVdzKzSCUZF6Ka7fSYVefbu2Vj7aRTSQ4uH4Y3AN4Cu5Kp73KmU5XsDQKURH7FrGZfx2",
  "key2": "JZgMP8MNpYKX75L9JExRcP93rBn75H5pL2Vms1mKutETybyMGKzQXvModcX7JddwJmNPxYYhVVLvJg51hQ6GbH4",
  "key3": "ZxUYJvZdrGN7LTAWwQtSsr5RVzBxsTFC91pSBRqdiKVQCRmmkNnTcZTDec8G4KUUbccbz9FV5UDXmXYT1exRz6Y",
  "key4": "4rthT43mmmSeg6A8vnX9yQKjHZKREAtT5KMwXfEAqbmgf6PqAf83iBAYBLFz7UiniSoZSVn5NUjNhJVaqaBH421b",
  "key5": "2qMTNLDEUQkeiXGjiaLtcg9CHDuBQ38pJCaSTK5SPBgKq9V9ZyFWMwbQsmoErbur6jprSLnn37TYsGj7XqRQGh3K",
  "key6": "D69RSTGcAebGHTVqm6vwQ6orj7Ft85mtfEmsFdBncse1xrusV8EjjfwRWd8p8MPktbEvPWy4QW3cDgs9TxYyGZm",
  "key7": "25fc8xC8P4PU1niuvrntsP14TD85y6ArrU6XhBed184FeMGjp4RMjttYuNKmg9g27T35sxJR1TNiA1uNSRRaUFC7",
  "key8": "BjGCdPsYi1qB5BP197cenqoC59yYk3VawkBEu3dBGSZXxupN9wrFaEQsQHiQPhAx74d8zPaui9W56XqLuCbzf44",
  "key9": "YES9iu5YxYJgqCnY1JdAbvW8WK1rFcGieGqgAtNPaBtJziZ4MWEWmkfyuRJrqmUZChC2SkbEnq82iSqBFZVyoEX",
  "key10": "3myfGDquzoJQQu6NaFGAD817EY981xffkiejKsjwumHHesMMRnbjWTVwxS7QKvG1QyHCPrTDmAdszKJexz4LeKGP",
  "key11": "5Hk7nDxjAQicY2wVcXbFzCunMUUy1RrapyTdWGjhPZfnU4Woqh9UcpgAf9D85chD5Wbw9K7W3TgNvck58bhQzYdc",
  "key12": "5U12puW9eonh9Zw8mEwt5sqLGBaUfxAv7dYjqQ9oNrA1mukmDLHiTtqhHr3LkhFBVZqUVqa9XHrrqaRmj8v2UtM1",
  "key13": "63FkAzUtJ5C5cERHmh5G1bmxpHmUrGANRuRJMuqYEFHgHzv467ogrbEMTJrZBfg1AbR9DANVTWQP6LccUeZeqt4R",
  "key14": "UbeBHqmcgKYLHG3V5N47ACG5HCiEjZhUWSRQnC323sJWfMAcZGt7j3u7XQVTX3heczHFTvcHxAw5JApWnQz9ciR",
  "key15": "HFYV9fhvXYSkabML1y5EA2UZUGKDBmUiTq9dimNJs3T1ibCuug8YDqHodYmUNrq439P4vjptgsRNwxxtPBTJRzn",
  "key16": "526ohBbqfHdwv6E2hsuVUjigw8t89HuG5r3KVigBPkUrgo5BC3Gf5HUK3trugahMiUQ1SvGzBdLhGWcFzDjVYtx",
  "key17": "4Cz9yXL7zsAkTjM2qJqyXDqnBkJkXgszrPCFbESHDoxgSgsfmd1TVehwKEh7hwxzdaZ6Wm3qnseAUeu6M8Kncic8",
  "key18": "s3BHGRkK1mAcTK9MkDtcmyztikm28KFi2FXFfkP7bpdHtwQ2LoBMKNGr8dWfLgRrMw6nPMHg4oGLUUny69uAMCN",
  "key19": "5MFJ5eBfFxfLTWtwVR7wHvygrEHxFJkNZ4moPRT69YQoh8bYc3eweUHoMQgyWEvGgjv9bae5EsBky5d9uaPgWVrg",
  "key20": "JDFgVhUdNqSkz1APcKBjNY9FRWMVLJt8dnnePeG28XFCzYHMhtUj9jNo37e2KMbZxpKYBGBfUWtRBs1WXCTmFuE",
  "key21": "5KH9oocWXxogtEhsbCrUevJvrJpiSzAo2CerCLncPAtzjTAfrYNXiD97UtvBw3B7qHSD6CSwb6uSih2jzv6JzmYh",
  "key22": "B1qjQ6skVwQcEADrrWFJai1zgfVVw227ZjCGdxxsVCeqhrBaXjJV6zjHg3dL2oeXyP2Vo8uWYNvC23kxgUp1SSA",
  "key23": "2vTMPPRoTuj86TkSTvH9zgShTtDz3a39rDsjWq262wX9TQmDrj7toRSRM9UiPMfnCPPKLwJ37t84J1MuFxGThoez",
  "key24": "4qwPpm4bigMTEpECBc9b23JRCw5HNo2c1Bbe3hJgAn6yeF6qVcRxTVpCL1A8dHGKQa2EMZiNCX3fj3z3ywxHmH9W",
  "key25": "2unMWnTdqAUYC4cBp56W6vmRUE1KUg7BM3HDwoztpN5ADdt5sLghrk7tRspnXtx8RhZoVHcAF3dp57pK4PA3ZRVx",
  "key26": "4wtMUDLfCZ3uYPgrZHEi7xbBTRE3hciqZdGWVEPgiaC9R6oh9cnuaeesV3A4MDunjM3R5sb6EGoD5RqnPXi9wKoS",
  "key27": "5e1gMQAx2HjNmfwPagDHSn1UnPdL4MLYpHK4QXbGuJ6zEeQn33Dt9RqkPwV9ZBFsYxNMFDm1aw6eB1VtrjLGbYKT",
  "key28": "2EWxUaXYWbyCijoayqTkCVndDwhh8Kya1mnLx6wYPZtU4zkfNx38RRmfp8Gixrr8JdKazxENKQAo87pRgkwW5WD7"
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
