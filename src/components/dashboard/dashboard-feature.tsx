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
    "5m2Ktu8gX9rU38mVu1YEBuf3i5rx42eVRcqjsfiT9x95t5SxXrVWcQxakRD9rnu1G8zXS9M4e2otoDunNY32X9jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efnSAoKCmdoBDNPMyzeSoWnznqoyV42B198VZT2716uxCYYCvqztVeWRX1nUURkxHtvF6XAe24UzHfg8SGAJp3g",
  "key1": "3n7LRSjTxGGwCt6DLwnMdsgQ35cJMk7jeDiDRpbGXhdQtQSjewpCtFz3KHx5YA9GxHWvadZoQA9eie2GiAouhXni",
  "key2": "3NhdCD8z6zz7wK9dT4yYww3DjfpnsCUTfbynjgxr56MCRKqNMun5qmJTYGn7qAYXFxGizfc7MXgj7xjE63Jo8H6k",
  "key3": "fSLj5yKgogxDN2q3MiqJ2ZHrJ9fqUCqAXGzFFkYDGBQk2FobLtAVUajcFUjmP3AS5UQ734DsKmaQwupApWXXwjE",
  "key4": "5sUGpckkQAuZvaj4Js1dF4BGAXhZ2vHRNP7fXTu3FPZ6DEZABM2BnkrJdHB5Jx8zhG3AqkneQVQi93opT9ZDi5t4",
  "key5": "57XHKETYkB7sQHHciQagz8cTWN2dzajrKwnWmzAMkNgtKcoK4dBU4ep8XGLP8y3NRj2ExEWbiwkk7uwdpFA4VYoR",
  "key6": "VD14hJBESzLBpftnrYRSdpCnK7eLppdPmyRf6PS7N3yDHf3HVXK6n2ciDNnUnG3Lr5goq5qVUCkEBRKiRdTnju6",
  "key7": "4tFcyRajoTEvdpibmDxd8tGJKYYfKrrPgZRmpBgifQhmonNLWniSGVWt8fEwftWgEn9qJQH4d2GDbFBbpe86khRi",
  "key8": "5e3cnUof5pr9ySVb15J3rppf1cUTqDRcMnNfifw2fLLrHhz2hzbYRFRDNvMbcyeroa1uu5B33QZ8npKVcJRdY1fX",
  "key9": "2M9zs8xWMsneEmWffns64F1vp4ixRuydZn2GJsrdsSH65jD3Bsquv3EwnzsEbDK5gzsw7kcMnu9F6fFak9LvkRGN",
  "key10": "5MDAEvHodxrQMb9XURNKPV5AuSDSuMz8p85RkTPzC9cTho6ydBoUpmiLetEkuvyPZ1KA3b95GtmmA4RVaxGF6bXH",
  "key11": "2HGbtmvi9mxHv4uk7icna5wt9oBHctEW5dpX3kqMorJJpjJLh685XPQ1nTc1ANpXsJLLhzZ3S6gdiTRw8qZ7m93u",
  "key12": "5Eiuyo9tsT3Ea7HdfNZvnwYV78JvoKWas78E8YneCX4NvZ76LcD28Ki2rWMb34GePYdb2oskfaNj4ABzcAdfFzav",
  "key13": "2q1DjCTKNWHgznEKM4DvorcKXm452zoyb4qFfFLogK7r9UUk5mJd3V4krZnFK9wf1CWmKMc3yuNK8e8Kp3NGENr9",
  "key14": "42NBcWpouGaviKfms6CA8jZGXyXoWvB3nNakJu9aSbcfv1TaFLX2CAwzhYc5vr133xw1JBEG2EqQB38QENc1DKXT",
  "key15": "2Xyn25btwnkne3KbL6RqpJ95xiMfr6QTerJ1JkqLzn3PkJH79A21q2jLnkcY3BWaCfFWovMPUyMuUu3MapFf4N52",
  "key16": "4f517xTvMNyYpCTAfu78rgxvHMM7ENJv848Bmzis8JvXoFY1jEHMwmrzrBCMUEoFNWGkaosqrEiNJSSVK63owYPk",
  "key17": "8ReBqofaXr7AVyQYbf7tAkemwCtBQZhz2NRSvCFDFvKBktUYmkA8AkatJ8PPpjzcMbixLdkx6K9j6mr4Ey82F6b",
  "key18": "67SRx5dnudffX7pvVbmQD8D54iwg61cjNZYrQsRmreXAXm1TMEbc8t6yrCFhc8FkzWJukdaX4b4Y6KqeeYkNKYu5",
  "key19": "47nwg23DNoLnwbUVs9nT4xKZH62Tah6mHmuzXEvzWauSj25JrHZkT31QVGS9SGFiYm5ZiYi5ZNotq1JnvniDfHw4",
  "key20": "4pXihrU5pj5ZG3CrnXWfB1UAEB2HdWaqsweoctdYaT5eJaNWb4aAHXYnNdaK9LBeykfetrofHwmXbMZZczU4Huhx",
  "key21": "3qjM4uxsMqbWePxFg5kqSbUYHSumxKdCTrQYdQpd64M79BhNJeaKiKj5SA1KrGRPV2EHbmpqsbWjKUV44Ls8yFnd",
  "key22": "5pwipLgaXHHt8dvzktb2WtpoW3oTRHvz9N6yiCepjdPF52EfyGPTRG4UDbsdfe1Zaqbxx6gmbQYsnagXWAPh4Fa9",
  "key23": "5rsQyjrMZ1aL2XKHzX9ycyc1afiNumKMnTXMdUauvjebQJdXdZqUqmarvMFYt4UrRfK82dEXtmRvKM2DPtLgxsiQ",
  "key24": "5E5aQbRhSrfFyd6VJsTA5Bz7wveTZvGUAvyPceqBbspErVGz61Ap9UxbR5tN6WDnHTuV4hrzxm6sxfVTMhrWq9eq",
  "key25": "3JSm182cyHW8FpBSC15YijUo4TmgRGWhNxu9Nvq9SQWBourPEgGZYx9qNKnbTLVojjLBu8HFnNJLCmBGAPztKo6S",
  "key26": "51vhw5XQ5npof9bmff5fkT3ir7DZ9GWcCyba36rWLoADwmtNhie3bEH2pvH8qRVzu8LxauRfwSsmzNmCs9EUhzmP",
  "key27": "53fKJhwvQmWn3BN7ht9PucLBkoqctfbJcCqUG8gdmxUt38sgHWADj4QpzbjMDEetcepo6XQbbEKaW7KX6roxFSug",
  "key28": "4oigdxB76GKQ2kKt6eR21dNmzaYVXKqyLbNGxfpjmiGke6VthjVYccgBVDTseitEHtbvudej9AsgRyHe7pUugTY2"
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
