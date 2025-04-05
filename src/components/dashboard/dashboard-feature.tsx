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
    "4frFvGDX1jgjGR4Jspepf34xTb1rV9VdPuoHEmXBTCH2ZcWo8fXwF9huWCTM6oSGbQSU39hRjWFYrvf1RZoKp5kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDV9RK3NKoQRPu6B5PLA8ywXtFPM6d29QcvggudF5k5xAxycyN5DaZZpUNoSmvRVtnG1x2GE1WqtRtJiVwW5mfB",
  "key1": "2VS8ScWxHnEt1dA65sHPmvassPWr3fbp2K6bDpSBxEEvLaPD9Wun1UE2RuFzQP6yYYASV7gfMUMFTz946cwpdMzc",
  "key2": "4ic3PmKic1movpV4AStVRhNTxpQwQ9BZw1Br2PL4dMfR8JA1tKaJEqP4jPUXcD7W2KoTvvpLSuyJw9t5Rh4v6Xon",
  "key3": "3sxdoWjnhgLSY6mpYW1Ya1LKM856x5YxV6fbSRHN4GuRLLDGYb653tvMqERAGaMZYh65tDC1CJXXHPr1Z1aQ9yKZ",
  "key4": "4RXeND31pD3Uj1RNeQMuowbFSQJU6QjWDpjeRQVczXkm2DrJSHr7qn36TdokWQ7E8t4hpJFFqJGXBDr65hwAmVXB",
  "key5": "5Bi3R25GgUjDwy9vdcd6qB2aZpt2xhz9erUVL787AuPHFArmSqq3cy9TkLyHYUka7myHAGG1efcjPBq1BNu8R54X",
  "key6": "2fXrke6pFYprn2PQTLdXoXnBY27i3tvE2UWpp4Gir6Yh8vqmhpe4Vc53kmGS4H73n9U2be1ZwMvJikYKnQpobvdp",
  "key7": "3VcC2jBta5BtDdidfuyJFG1RPHs6NdQefQWGxPjuAbYVS5dJnHT2xi1FpdguC3BJPr4LVtQNHEjpaGN33tNuS4zi",
  "key8": "4UyCoSBDyP9qUaMba3xqCdEEsxrtwcDo6ziL7tM6gUU35v8yDXJ7D5AkqnLR9cvKgv821e5qMSqjphfHpgMrcvmG",
  "key9": "2UnU9zVq7BCmLNqBpJNEvRTkqR6fL8GLXPFGduJTB6PKypkx7nhCLhYLWvzdGD9eGhutoqLXgPiPJr8V5MTwpSyw",
  "key10": "5EsQY9vTiJ913JPyTfSTWNDPB6TP3dcoPXxyeCijpHdeYBfGSWHwSEgBzRx8M48Q1UYzEJj4iCi65yWpdmBG1FfQ",
  "key11": "4mkUkQiSnvk6ye6EB9wvnUHv1RUMiPBAu42muwhFHxKowL2sLrMBbjYZaWmdsgUfZCFeNXzf1R63R5tp3Asvo3XS",
  "key12": "3mb4Q8aaukruiuz3CTZ95J52zT3aeRcudspUFRUCoQbbrFT6EJh5C6EVWweuTdQnqLbJgGEwGXtckjCcuFX73J9Z",
  "key13": "PimuKwr7ytbwXruSprzhZC1h3Pbvzwc6CHeuy9JPiEpLZWqtpUfQK3eXGvyA6EiHWMpqpvkqi8mnX4s4CKq7GjE",
  "key14": "5NXAbguXfT4haGQ89U2P1BsXU1QBSSVA9sEn8sXeGXbdJfALX9Q99a6Cjtyoj2SiubzBmjKGsXZN6guXHYgFWYNc",
  "key15": "3sDVdw1KwYX5DzYXUqppYYFnf4WVYg1mQ5Kf4dCn1HyzFnhQKe1ykj4SsRAkawfXFpp2yW31ba8AAvJGvijtxUr7",
  "key16": "3yuFTZ8Yh89YSV9wRAMF1FK8f8XXP4dtrEoB1rq9oqfp9JyQr94MG5UoFAbWGzRhucRAbZvs1SHthuYRkyLo87yu",
  "key17": "3o1PM8ZNrN2Qje93homq7E14wZC3JddXeAwipszDcNXTeE89o2bdjVradhZnyfRFcLM6qf2MF3TFzPuqqWYnVXVT",
  "key18": "kZX1PjtQJwynJVrySt1PahLbvwRE7AkRvG1SfrVv5hfAuR9hgPGUy1kceSHARTWLV8bQTY1fFuMnCh39LWvZj8X",
  "key19": "2oUsjjva5DyVkVD5L4Afoh56ZZzWTz8wiyw6dTWhch7EvxdV6iYYgJxsYfRt1mhMjSyfbdJ43UPjphVMVhgSF4KR",
  "key20": "5DkUywaYnAXPu5Leq4MGDgR86hdUNooGRX5DpYm4P9gfNWg41YsZGbd9VXNo1zbGGJJadad5aVeQKSLuRwiEVa3r",
  "key21": "2dshNL8CS8FfHb25c9Dh1yZKDCuU1MfsW493B2X7bgYBHyGwCv6VaEcKZASczuCTnLZwWtkxdDHq5zBQ6A11bdWG",
  "key22": "eLpbhwCGAVJYYj4QHtNRxwiJSAz4vYV63v1cLrbtRDyp8FJphAdEehBdyMATvSDPErJxFHhFJDaT52teYCdTgnJ",
  "key23": "4gnwrRh5a4LrCjVYPVDbHZquZTfrosNspqUHu8aSswmxj1JB22tUNVdarAEVLj5utwzFayyar7z6BtxWYyeVvTYS",
  "key24": "5Wa2amrgQsjXJA8K5DcAZwDRBEggESbe9D4A9adpxLGXGq229WJ4nPGTJ4N9aYU9iqYMPxQvJsGoAUgGjK33oGYy"
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
