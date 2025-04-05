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
    "L7fBrDUEgF2oDC9fy5ayhtoiyWgEx3vKmzfC5ptvCEyhbTBVnVFssNrYJm3hdf9ESaEco43SY2eP2yPYMeF1uWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxUeeLRLLBGG4Ui9wXaWorA7K9PzFbH46KWtnddQWyooP5o11JxWtaW6M4kvXz1qA2vDM69R3CC8kjDYpo6YN1H",
  "key1": "3jKEAPEaceZmZ7f2p6PCfwyrxGQr78s6Pi4V467NDiRdCzmbcZnNeM5fnZ2gqBHDfAxPQGLaZ9una5VCpaGnpPD3",
  "key2": "DVy3YgzZ7YbrQXnUziWiGCyDq6os5qae64tsHHpMjTPNXkPyyWxnSrk4nBnZjsxdiHULSjLT4o4JWsKgxesBwBj",
  "key3": "3RCes8MP99xcJVEVxHXsuDUJyqbTR3tSJQy15DDSYEB4vaRbBjjgdYwHRNixCMh8KZaKd5Byv1CgJtW7DdXP2WLC",
  "key4": "3r2dZe3qaGBdo86FScZ5jQvZSdB2bCihWzJ4qSq21MxdcJtjnZB9V8hj97K8KNTKzRjY5HFh3ZbGXdPFGwAAsEty",
  "key5": "5donifai1SPd9Hcu856tsAg2vKzAc1Fr8fYuKXmFbxWdYQncvfhbAPuRWXcNUH5fBeHEcJNkGkETpWLFR3Vdaacf",
  "key6": "5j52mYyDJsTAGz43XWYe6xHHdyM2bNnrhWoSvsw1Z75cJLGvic7ZsLKXASEGeEDg1tDMhYF4CfakjDJKB7xJJ3wX",
  "key7": "2NXebrRM3bxYdMe51bLZh5ZtLS6tdWyRGbLATstjWrjqygcr7gzxrWWG2ihYEZoRYyUUnBNRwmBhacTzoxb1EH3e",
  "key8": "5on7AwRb43jJhR9J8TAExJL1QsbN58VyjY6jTJKbKFm7eGJX132N8W6WX1AaD9pWaRwadtcP6MwwXoMwxX9no4H8",
  "key9": "3bTQGCJ5gtqVczPZj4cS5UTvhb6xLhy1cEHkgchE9Puv44LEdKfjf4wUtoHb8L2TXnmKXj3S9nos72XiHNhfsoTA",
  "key10": "STNSyDJfSRhUbhKkZzFELz4rZN7CT2U6vpA4yfBPdnS3vp8ZCBNbzj9sNQSrmzCz4cNHcweMwx85YGNzWfp8jNr",
  "key11": "2UW4MG74Weawo9X7Bf1saH77Y2AkPZmqyq518k799H75eRHxd3skXNmKUs22VAs2uiJuJh74DnsDox2fxUmefQit",
  "key12": "3B3XnZ6P5sU9bVtDwwjFSkSphA7TUPYFwu8t69YZShAGKeau4QHKRvLXHQByXKPkyx17QKH3EZCvRPQDKKj3o83P",
  "key13": "5UKC3YH5mxopp3VZBLCVG2fEKnxegqZwE6n12Ljz458LKLvQufXPgk4LgKGQ8cCvboMDyMuyZyZb7fNdhrnFXqgP",
  "key14": "3wguUZYTkEv8r7MQWLiA3qWWzG6Um2hLaHYdXULCCUsRUi9jUed7VhyVKbL3WVeyWjCb2Kd8AAyDcfuvpFxiYz6s",
  "key15": "QnBCvUf5fhjGPBW5Z6Cubam75CdhsaiWX4ZCnu17K4pPsNSdMsSYCpUGEz87NWBcvwLGhEnEh7rsgWCvUy9xasw",
  "key16": "xD4kenuqAMN6BGZybkdzqw6b4pqvb3rmytoKbnmyvuyVU54VQ4Rpj5v21f7vBrqgR2UdmEQTsi5s9ihNxY2QnAd",
  "key17": "dHzjGUKgea5RHe7x9BpMaeratqXPEhdfRpTtg1vBVyLQzheupTerR56V4hoBpwfVaJxQ7Mux5TJUDjSt9npwdvv",
  "key18": "2wDd7ZC7ZRLsedsbFhGtFA3mTUcyZQfYnMknVA6kF1xonGuBUBkR7XETKpiCbYDMA99ikbhQqUL9aMzfc5hJC46F",
  "key19": "4hoh98wspjvR7V8VX6uiQPFNZqTYrstcpmFUHWb6mVeqALgYVBJ72b7wPJkHKYUcZhjzVKphAeD63H9nQWHG66Ya",
  "key20": "56zufmBp6Q9vuD2qxyPmMnnTHj8VvXRoiHhZ5tDsM7twT2jqAhcbcXbQHVfXKUx37wEAhiG6w23vPtQtDjMc5fhJ",
  "key21": "wXS5LHBUULzzic2oeUQGDWPgY7a69b4Cz16Fqfd3HyhzgDHgKByC4xjBx8AiEriXhWheybuj57Qhhug3dhQa57A",
  "key22": "2LLyGDmPzTXMJHbHscwAzVsDpXuKh7kkzozJA1WbUyaugmStnR5xiCBnGpnLhxBAsyKoL3NA88XtMsVpgzH1zYC9",
  "key23": "5Dj4frLEG1J1134yV4Y3xVBkPEohxi3RYsmkrBXSN58DjNrcDPfzuyZZqV3hUaVwoneSbWNue6RftaRRhqDKfvy8",
  "key24": "5FvNxBnraqHSuZQ7Z9Wp4tWPz4Ark4TudUmNp7bMjoykMwLfTTX3W5kd1zphkLoDmXzbUmB39RWjAj9JKxeQ7CJr",
  "key25": "523gYAgpHhTvpNBQvokyEDKyaRUx8Z4MMW3Lm59us353XsKSimeQchZm8doArdz2AwmvzrsqTgFfwzrRPeypubSv",
  "key26": "4w6KNCLqVDTNEQJbzksnFzQaLzmJZ7Wwwj4h1s2yF3autDRXmJfbGU88RTCMo863wG6KV4aKebGSwqvZxVYxQeWx",
  "key27": "3bYBjcJubZENYqi59gWxVrwfJGH8d3ToKuYHuSSvUdudbWJwrrxZ3Q5sMdm5SciZRgV5wcodzRy3LKbivTErrsFE",
  "key28": "5oE2MHySNcRNn8VFDq18YTbUqnZbC5Ao1nuZRe6tjJamwG5nZSvtMPnHSVCvBwBPaxbAMepqDEGJaxVvY3xMoHzz",
  "key29": "yaozaJDNRxKf3o7ufkhM7JkgSMwseVUE6j9RRyJLLHGkt6c1tbrh6m9W8smXFJa2bYx1nT3A1MzMQNDQ4JYk8oK",
  "key30": "3H2WEc8cWmVw6f3JywcMUjX5D1RcRemePGWfrACyfXsRBAoNxceeVhu7TRY3W9GbnWR82pmzEWNTiMxz5YhRcmL6",
  "key31": "27yCCJq6Vcm2JwVbkXWr9c38oRHtcY3SoSjVnr3y1YesoKdb92S4VGuqo7Bwb7jtKBv1osZhgijcDTgq8ofwo45m",
  "key32": "3CHxS4YqzhY5Q9RzoSNafquBB4kBCJzcDh2gwZRTaCyMtrHZbNYJKXaGSu8TBVqb35dMSAvxiACMeq1eXv3yTA7Y",
  "key33": "4q1faRzEiV7rcS9t1rnxNmQSQfcJKvooYZJjsRuFnXaUq6bUogUmHeasVLy21aTCecp4rEHQzanQaR42U9VxDPMX",
  "key34": "5Tm6NFaQ1B7PoWutvW45tPp3FTEVxM7r6sx5JfZkq5sYYx1Q77E76sSTJUCaUtzJRFe5iVpPJaz2Kckr4m1rjQJe"
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
