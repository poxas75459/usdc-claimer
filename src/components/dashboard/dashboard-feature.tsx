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
    "42bQp4vuAGzuhqv3o1pRw3DveyDmDBCCMryyr6arLvfxYHv9kQjnzSnqVV5Z68JXLXQTsmxCkq9rZ4BxCZthMR7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUUL5Xsy7vwYc46JMPurEyAd1gUswYDt3TGASmVG83eHnVN6KmcMdou1tjMGh5nv9yJx8AtkgkUc6MHg1nD4Pe8",
  "key1": "61iApL95jECoWPxBBFEJd13nTVwHV6Qgts9HV71pm3VMs7u6hXYNUszMfVKhMHpcv6aetiNMKMsxbfVe2Ep2NHaQ",
  "key2": "37sV2WRRhr1dAUB8e7aWpHaguxD6JevtBAN42iz4veDLMobbNY2Y4AGeEJiYGWWeq5nta2JamEfPeDhoFpXmpwaR",
  "key3": "K99B1uRBcZyvDZzktaVAxmPzTcoQyUXynxF1iZpT7axqbBc79YqbiCjAHE5qRDpaoG5VDS2ELXAASoEbgH5ByCs",
  "key4": "3scrUB2Z273BoQGmxnPt6BEnM726a43Zx3r3wH7iWe5XVecrdHqpu9Tj1outTR8uL2Mf54EPiBFEyLFQ3PQv4SBm",
  "key5": "43AYQmtWya2tn7RWFuWNXztH9NajVZYjLDboH2DcuuMtnhD1i8nbdTxmfShaXiHE74NtHFtUMK9qkgjd56XYzwEU",
  "key6": "sUCSijXFT5tAyg2wZXAFfRsKNLvbHzPAFFhPbX6GXXMfw9rLEzyDBW3jGYB4h3ef8Q3H431XQ9PzgWHxgHuNuCr",
  "key7": "4AQY7rYvFj2qDuwCUmEovuN3ZwVk2xTSVK8qYy5XiUr8Cg4vAyx7WvLJy2scBY5PcRQM6XLr5HZDU8gMd5ExWV9a",
  "key8": "4uY8yJjBs184WCb8k1nMVEyze1rLntNUWKwaYF81nRekAnYi4YQddX6aBJ2dkZU3zW9YNX5bAErg7d68HoxTcmnW",
  "key9": "3ZgnJzQgw7CnQvDJtup78PeEPtygu95GEMVg7BGeBd6282U9qCR8NDUZkFry1u7CwnKSJ2vb12rLrvGsxx5VASyS",
  "key10": "9VDL94gxc4bS8vTZWwuFeY71uYwtcuzehic2b1kYRvQ8oDPMyYKyk5yhSkuPQqqMBdWRMYWmMfDWktFerZpTQJ5",
  "key11": "2q82ZfNebu3UsSg4JFj34Gtq5oF8rJrMWrF3SWD9RaXfQbm5NpRFNNjBpWKzWSq5z16CuWXkpaJofhGWju8Kfm7m",
  "key12": "5Zc5EJSzZWcKtxMJ6ArYpe1JMvtRLuqah2P6VxKTAWi7vYz1q31u7X8vwLC9xEMnpVPsKnZcG2x5Fcd4YYDbvx8g",
  "key13": "4yqWuPK8uca4mNedYCmwMkSSpZwQbDs8cMtsimTh91vXoACYUwQuY1yn2XrhJ8yRhbPZUhfnmSfTc2Q67i7XtzHU",
  "key14": "4BLbK3d3ayMkXsTiquAS1esYCmkUb9akrAQwrogxDngzYHk6WZYDH8cnLW7dRLLdU5TPVpthUzZ3PNa8kY3DE3Bw",
  "key15": "5iKbkPbFaaTVbAGQGMWFXJRihLk3khcQhS4Xntk6G8yf6gY9GNqmSEKUn6c1vjWaNqVKSv44Zwf2ucmriYY7C84P",
  "key16": "2RAG4hR3R7R8EYrG6T3bPgag6RPnB1eaMGZb6cWDaLCJQqfcMRu17F4faFfK3skBtUEEXDfS2dx5GFq8fu8nJm7r",
  "key17": "4Vu7w7Zosjadfk4HnrCVDBx3oqRrmXQEFc4QwcBTovmwPUYc5Yy4TnqavysePoYEYfum3jYjzivUPnVSsY2smDwW",
  "key18": "4zP2EJzFF1onsaLeEAweZHv7YQ5hC3N86MRUHY1hcdvdJehcULDWLhz8qVvoa952ENgLDPwJGGiFAkj4usyPhTVK",
  "key19": "2VPgYqMFjCcDgzHxsjxvegGkGkL82oLfBpJWJU7YwxpmamnGh6LwwMdLuwowptNuMn1cLHsW6bfGQTQ2c6ZhWW9M",
  "key20": "3Vh47vgozBqzKHXvDMZTgHX9wSd9nMrFnnaig1XHwa3UozCM3WZhbTkiV33K2CSBxDN1KeeuWjwFCw9xZAwprvUH",
  "key21": "2epuZWGyziTQcu9UCKNUR5jRcrpgudptkG2NyAzQ3JSc1kdNHZG3NJ17iSBskAFQxcVjjVUP1AtotpnjUZrTNYKM",
  "key22": "5fUgGR9VeB2bVix1mfeKdE9MumwtdcSbzzBbmmqYdJD6v93b7gR1L69dkxJ9gbo3TRnPbD7pVL3U2anAYsFU7tqP",
  "key23": "4YPvN2RGrF9V8x91TG1Z3RPQNxPTsu5NXytkVrUBcrAb7huNncLLgbudihTDKhTWThsgmecAh6g8hxhNYVwyAxvh",
  "key24": "39mp62rFErgSKEaU1Ae8tZee87fdHpndhtL7CywnyGDnTStimTytizochkbMNKE2aMrCNiF46GwiEiyPEouQDXaN",
  "key25": "3k1emgot8oHSxWJMaQsqFgBGdmEDJugmWa5e9QqmPwoeGZkwYzs5MQP5X8pm98Ubhr54M3QcLjrF9pJehrcRF7rh",
  "key26": "4LpC4gDKPS44JHSviJTmoviAMPMCTwmjm4Wf7hjMJp6CA6yR4C5Y64DvuXBhfHLFn4MKqjVNCQTmHajTUFLBBt83",
  "key27": "2UjwWV7JmzzFsmi5cjLHmxFuAumqpuvnjEtARprygYMZHGG8gfNJbXBg4gzzjP94H8wbwuJ3duWxpQNn4krKQ8hu",
  "key28": "48H3gLrgt3BvJYLdfWaP3N7MyUuy554h8Rbt8FPj7JMMWTwS6pdXbbjZhBX9WiPYVunhGEVg3zpuCNTy5NdC2iB1",
  "key29": "48FJ6dguBpGzYXGRB5BNXrA1sZpuNLGa3ZQi8Hb3F2aZZuf4SWwTGmRz6YZDaUmnN9TXx2wCBEuRrAuug3uShanu",
  "key30": "4QSzFbTYBYFqt4vYJPBcJ45tCroS67CD48WhDZKUr6vwodk8HTK1kPcQJXGhfU7cvF9pPxiSPW7iNn8XGS2fVUBH",
  "key31": "3A2KtRpG9k397UQ2qoQdgoHcsuf2xUAxBBPfrZgbmPK94JvL7BmBTAvQwd4kgAAaygQaWfePbNZMBjBEsb9UhXbG",
  "key32": "2N35HkCJab9vjW2hca4YqSCYyYUULxuZLBjh1rQVrkaNL4KiP1wSMLnvCYFKfEZsxvL7V5ttdkGHXo3PsScccMjg",
  "key33": "5vMYypfyncwDYytecPpj8G7oehGvurtT64QATWdfXA4GqGWJb9T2NuTLqBCS4r6ThT6gnPy96c5cxDeCCP2TxvHc",
  "key34": "5hE4nBCzEdrC31TuSsaBF7ihUaNKYYkP2KiQu6iHnYB4pJwfFBJPMotkuzD1HT1djoEsVeq9WwZYwiM4ZzLxSM9D",
  "key35": "35z73GviVds78sd43urtgfujo7ryc8VeZ47jMZSLWs2uvHXiEYNx1FeVvDuEvWfQUZE6ZiHqEeuKxFYpXSRfaADN",
  "key36": "GZHq4Rzq4HAxysA6x3hXyhtSA2BTrEpXkRfi4qzJKAZg2azjdfaUfNr4tWESsX6d52XgcfMwfquMe62H2QSa3gi",
  "key37": "3yKXaQmEPRWtj3rqUSSq2qrt5Y8sSnEtiDLUMeXgmdnSWLJqaJYdnjKeENrgEn45tpLYJMq3iUhjDtmLuQgkEJEq"
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
