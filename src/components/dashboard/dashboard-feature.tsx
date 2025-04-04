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
    "613Ubc1qpwwmr2CoSA26e3bwzVH2sRSvTtpfuVvZG1DThopMZ92P5gDKPa1BkMioZ91evLKnJcr5dj5uWt9Miz2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sMduiYesGx9Xv7ohjRWGq4cYBesfTsUAqDFjr1scvqUXQ8uh8uoK3n95FGhd9kP1grS66xtjsQ3xtpUFyBKDMQ",
  "key1": "3yYvFxhtj4nk1osemqxqHZBPysbi2vaTrea5QBhEmyAiYZ6kWwW3jXpV1MsbF7J2GPWU1gup9YhW8UJ3M8Qs894f",
  "key2": "2GMJQzFJB2Z27keD5yY7UjJ9dhHW364JEkcGZLaU2cApQexrhFCW93wB1UWQ9iMuy4KiMhgq32o6kSGtbFj1XJCP",
  "key3": "5bhD3NgGggDRKoDGysLbXzid4sDPMnETMxfym6pVz6qUzMu88hVBFNUYhfA3HWNHXQRoiSufctyRodutpQ9SiuAp",
  "key4": "nfhKXGfVbiMmjF5inSsnSEmSqNkmdG6GZ9Ja8SB9boRG9iD4sNtpVxswZxXJiAbtE1VWag4o1jisgVtU3W9Mxu9",
  "key5": "4CmRnZYz3wio1cg9PfEpy6rX1qUZitq146HYEPsLNCSjYkZ76Md2zKUKWrr4gEuNNyKA9it5DNtWLcYDe6BRktmt",
  "key6": "2gCS54ErgFK6pPYtwmDoGKTLrNWJBs2sDM4dJzWiXgdnj5gGCzfYWr6aBAoSMnp6iW2BcJEg8LwiJrQAdy4DAyEJ",
  "key7": "2vSMZdnQRaeQ7YP3HoSry4h6Pi8haxW49rKtjvErTAtq5dRCct7zJXhtDBMYuDycdiQFZ5AM856VVHyAjdzoEs4e",
  "key8": "49YeQjUqadDsWkF1JpYceXpcUiv7GtW9EFkhKpoqLm3KQM2h1pxift6yVuZDnfPrxL5sUGdnZvwLdHUftp5pUeA",
  "key9": "45HwPizYPiseeYRDMgxtGUzZ74iXps5qcAMYnaA7fVgiqYLBx7JUvGAQrGUYpNpFPuWGuyhawfr8mWA3uLenJ8qK",
  "key10": "3BmhZha8gJvoRXMV7vBjoZNMUoGUKsrJcGP84XDUzuKg8fH74aXqHvJ9njWPbWBxcKMegojrdgA2HtqhCZPhzWV2",
  "key11": "3BTWjcU6YhVwTYEqFpXV8CX4SQWJMZDzYxK8KU1iN5nkJoG5yAwPJ1J4oKXHXyebjTJ7wfAnsKG9irG28tPqrevY",
  "key12": "4ynf9ZAnAoNzPwHoLJL71ukv9UsJPWCqYa8sNyuggFjJ65dsEXhJLa6Pthrm4SKz5ZxcyGEprVPfCQJnq9TSvjzW",
  "key13": "4TmS3Fyi2XyD4nBKBkmMSuUtS9Rhc6eKjJx71uvkMqKtu8W7iD4tfr5JMronYj444DXvF8uLWrm1Sgd9fuSf2Mxm",
  "key14": "3BbUuJoo8fjM5vgyfhNeMbfPXCwija75oPwYAqkNBJRXQGWqG4hMqMEjZGQXGnfTvywnB5s1DnPxxABrCBy72pfr",
  "key15": "2ah38HFiGcSSyFr9jkbB9PLTCThcYZbUHmKD59K9ukLqLfUuQSCgsKkwwmpfUcjvq7KHUWJtDMzuXWCc1nUtiD9u",
  "key16": "2CfeZa4mt3VybjybQBgvMHULZ39yg2FtTKh1FAVSjEhwnd1Uz4XSkseBqoYMArySv7ZK9biyywbeWLh4eMnymsq4",
  "key17": "53UnYM6u3VkeFKF68TMMVKgQPtZXt1ZQfheRdQbin6eDRKhUdLFT4SqCy36dtcr12utWEPBvmHMeynPsDL3MNdMk",
  "key18": "3x8BnaknbRNBZQHXJLxXwq73b7jUS6hxgX3QjSGAanRSxrFLGKDwbouw1EbBvzP8C5JWFZzZU8gWWTjoS5L7LKRr",
  "key19": "4Fzoan5Tr8kjuUSiTwkrhJXbnda52vxmv4dgJhpPdiPSPeK7DdQijCekFU7AhBqVwZA4aH4pnMKpvPz52G8K6SJ2",
  "key20": "3ogFfmgswm1bW1juNpf3eKDKeRNKTqgfayBPZMsWRBmtprb7faEpXxRvgbSRH2EXB52p1fGrweibnsJmh4hh5u7i",
  "key21": "417wuFFGisCHJR8Dt8xGep1behkfxFci7VNvN3oZrtpySFzNGBoG5cier7nH25GNPG7UkuhwY3MZF2L5wbo93HxM",
  "key22": "2NKT4wakmWrqidCrain8FpLnA7sAhpVGmzvuvBhYsHDqcoR3HSTWVbRcUyq2QQPpz9vsSYZAm4VAWA4RKZ9v5B6s",
  "key23": "3fbPaH1VgzoJxWcEHE12yvbAw4socTyetopzyDJJ8APjz1qEKkGsseWWe6b48hpk3sjA3v7Kwez8eEqkWDjMBh34",
  "key24": "4FZobskDEURhmo8b69gjuint1Gwqxxay1giva6bzdH5R9cUVxk2v8KVH1a3JHyAYYz2qwXSNDUQFnLEPxANjckGQ",
  "key25": "2BQBqqXBrNLSKRsWvuaNx8RAa7CGBeTUB5Zop41Vcgxxh2TQenSPx9newkagMpfmCHc7FZ1h4VtH77LCwkQmwUwQ",
  "key26": "33snFZsjFff2tSKJjb9oBYth4qhvSVrS8R1JGfCEqGgnkeMM7KtGZ8JNvFZkmMMUMERF4U7kyhS9utW5DmMxgXk"
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
