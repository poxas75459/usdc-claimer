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
    "3QLyFUjaGdzCgJv86H54jZiqRiGqgbUZLXA9Ef2HAWf5pXNA53tXoJTHYyBfk3toSs8uNqTz54P5dGgMXTeUWrfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oCZ24B9Vuqo5WdDYMDJ523MTp7fPxKvgw86VjkcRjD19WkR85sAUtzKmmniABMWpEBnTf8JcghmAbqyD9f2jZY",
  "key1": "2wjkDos4ntoJwAARzoG222ZRqgZnXDyB2977VaJhMznZ3qA9cVLVPWsM66FQQ4qCJEQwsQTv35JM3YuJ44mfNttc",
  "key2": "4poCYy99HQ8Nbsx5tUs2HJeus2LCdNocawBiLzCoW1VLZPPYZPd2yKM8xL5XRBPQghXfvKSwt9cgPsvXLpTwkS9a",
  "key3": "59gHMz4aEjkxEBHF6DVUTQSUpBFYtSw3BykyXKvGMpNTcbcJcFg7EksGMPWp7mouoPNHZ9egiB4qLmtnp12DSXWP",
  "key4": "2iqevEnANWbwE2kguCeuZ7QduXZBt1DavrvvEWkkA6gkLC48RyhLdmXDygAwPCRZsTAcwzL996wHeW3sKtTBgRrU",
  "key5": "2i6KQjhXSHMUQknLzKPfXbH9zv2jnKiti4rL8cor8wziEw27wWGbYRfuSqhufKzS5tS7fb72cevBE2GiRmahSrcE",
  "key6": "22JR6jr5GAgGrcZp9qyuF9UGgt3hx6rySV5ufVEycfSBrzneGBB5XzPAtgPvSUbiX7HmN5SsxEWpMdkdaLmznraa",
  "key7": "RRobjPp2BrmR4WTf6p16rRQsbuyNrcKbjmAiu8EYqVaC8Tvr3UY9iBNxMrKFngKLfihoakxzoHgtJ1gNZ15PUL6",
  "key8": "2iFnPT3RH19cRqfNRbMr3VACSGKDdgjPQe5eUrBNTTbCGkKAM6UZSp1aWPbeThgZVKpJHmhvasjiWX8oQEQ3HM3Q",
  "key9": "3fP3hjHehrPxcAtry4x16AGJYoT9Gm5FD3oGjyMZcEx5cA9vmxLrCEr9sGaVL74QbhvzNp6zXyNh9boSGqLjsL8L",
  "key10": "2YqQLrSMfXiZdvBdSsJB15yd1eBtHMZ2ymfn11BVHkQfBrZyE18h2uUWZSSeadiFk8jTPvAMUApthSipidK3jBoK",
  "key11": "4J6qEGXorPp7Xxo9cMMZz5N4A9YbuBDq5MsDu69sTCL5M3USxftRM8qq12nK4UVqVG3CdyJPcUa3azq9FfapvZBS",
  "key12": "qh4wv1Eq75L34sxxnoq2SeNmY5iM9vgcf8V2Q22o6VaKvfat3imyKFizE6Pa6JisKP72H2prufabhpoYBABn8JN",
  "key13": "3waFo66XKyajGcE6BaWtv7s6zwQhx5bRDDGzEKiwWrUtpH1Fju39Sa3jXJV4NNZrDQPeReiQ9eGkVu7GNUNj3ovy",
  "key14": "5s1JSm7UoyyQHharfMnJom6mC54czuT9t7o7zgBMY4k47TuLVCD4x4YaYi9hKsmwUnAtiKAA692qYYPi3xiSf54d",
  "key15": "5cWATHVFNchPeaLWEA7mwJC8GJhwCtckz3psxReyd4TSnjJw3kzzLF8mST1SDtsRAJNkgmtbJ6CaTUZ4m9CRggUH",
  "key16": "2xwfs59VNxNJ42114LtRKS7t6R5bVKyPjsSqXh9fBL38u1d9QTcTpWkuUrC34tc6XVGS6EC473FLEbtyqWGgotKo",
  "key17": "5fwZbqqScNK1k8sboCS9tLSbEY6AvuE6t83rzXzMLzD3MGJugChALAjY6Y3ewEEuskDUKdYfDemPB9DtNi8SKMdp",
  "key18": "2nMEeDjg2iPW5mA29SiDXAnY44RaSWRwKVchPkMLvdb5QXMU6VaPBoi2gkfdhJyD8m5Xi9hdKF7JrgUkUXvvGqn3",
  "key19": "2vfrh7JB4cHa6PdpRV9YsX6pzR4dcDoUmSgAZ5YLu8GAVUNBnsMi7WYJnq4LYZyeCe9AAmPh7vd27NDz9msbQrb1",
  "key20": "4aLeC4WsUS9qQEA3MC4i5ZAtkoXkN6JBbSAF73a34hqmKBKFWYzV2nEiTRfTsPCTfDwdZi4ATwLtNP7Yx36QCHmf",
  "key21": "3VQHWSiZaZf7TUjvoqZtaDAVVpJRJLaZDbqpKGs8xazkpcQXbAxHoPkzSrTT9k6xEJepouqNzLDM9vMeasmAm2fi",
  "key22": "5zcJ7tAVAUeLZhDojtmaadHVdAtBdCfiQpYdoxBDBVY15GUEvdYZqtgmTRsD4pUoVLb4EpsZyWegr3HFhUF9FGMm",
  "key23": "2veMF4u5Yi3zYuY4GDR3CiZrmtEueh5XkqoF1b9wdiDHENNgkqx4br92LMfeQA6fDhopW9Yj5ySfTjtqmqPoCt51",
  "key24": "2DCE6itEue5ES9DUDmsz5yRmApgN8wJ91jSM8Bv8gAECdJUS5HTD9K4gGnbT7Yj3mqdCMp7YrCEejw6w3pjWdTfL",
  "key25": "wRr4omGyXXtFbQ1eSKkqsJQn8foWAF1Rg3d7ejGtaJBM1fgEvEBZiEPgapShQJs4bwDQ27H1jJeFxJho2YsEW2P",
  "key26": "2d9Lb6TsxkDd9xLJ1UNjmP8u8b9JxzaSxqWCgPqwSjRnAfZ976DhaLnrz8eLbj4MUZPdoWTuvpkc5ZcSnstJK8YB",
  "key27": "3WBYyfNAm9sXFzwEAx82fPY8jEtavSgb1bURk6jjVFP87G2Nrbsq2Veuruwr8hsywDUnHUZLa1eTMAPGjUJVSAkX",
  "key28": "5mUcFV6qcoPgnuy2mYc3nmJ4dVcfD4bGEc2rVZ4EmVph48TcTFmJwym1tYjsmqHAWk2rBMJePnZqEstm4A1DLaAL",
  "key29": "3xUhaRZa4oFbeu8yttFy8z7wpJT1QJd1ZCamYGdWUSX1ANQ6AkWLfS63Gu38Cc4kL3S4NdamCjoVMES8frB6f25B",
  "key30": "28gdiaaC27RFuKzrd4Fk6dHeTvn55ReEj7HWwJTBeFzbSXZV1G78wT3sAjPkPLRgiYUkeMtxGfTWtXvLRG7Z87md",
  "key31": "49hESb3VhKfWgCJXcjB1TfQnZ9KVtSSguHL7otgJVxhQdadtZnWxWjgLVWt9RKKM4Xrf8isSsFTKxJywVBnC7oph",
  "key32": "3TSXhxHd1dUo6vjMgAcW9uZg7jA28EwZdKZURXrLxMmfR1P4BkFeZGm9gQ4mYkRZXrrPjfLiPQPcQHxj5t26YPY7",
  "key33": "4sw2TjV8KowjbAj6SA6FShjCsF9CKH5nP6UMDMwu5Ws4xaupmhtAWZ1PdLMD9LNCBPjPbDSGCY2YoX4fz5pQ2gFo",
  "key34": "48EQzhyYmsDD74bkrXxDw2hfvU6qeu9xTgYFvTwNAUUG2xpCZffgM2vG3qrMnKAidasmsDqjmax1TRdyEser8kgQ"
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
