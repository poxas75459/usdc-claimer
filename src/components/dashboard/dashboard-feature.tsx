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
    "sTiEbUkWo33ds2TA1BBAExspoXqzmtESVcjrN6zXb3LVkwWj28CiFWFMBA2rC5TbnFdXdN6tqebtuRh5Ru4f6nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9bDaYUQyZEaz3KRsfDcuVPs8Zwqd6iQrodE6wj3P4UvxfwG6FAbjSTmY3PV4qbqr7NXGooPLVbmAPyPKC3xZW66",
  "key1": "2WyMQzsU95469NiG1TYfr2MGsqKWatNtKKbcgeYrWktSYDHnXXZaWRftDvngKFdjDci13gLYagmqP6DupysoVusS",
  "key2": "2xqQwpRwEH6xcPKeoCRbZmFJJkmFXAAqcYsd1Bdeo6CcPLbPkA8MwjrjoNaTrD48bmvRqGGZArUk2VPxcVe1651m",
  "key3": "5Usw9XBhnmKxBH5Hod6Dt97raXKnswEPxAC62jTQL92xpYXGoj7GTw4VA1Wn5FMatYdNNdQz85Vw2rdyc4dawWoD",
  "key4": "31FNiQWQ2pkqLb64rU7KXZRnh7hzbq1bjM8B7T4AmqbeXFY31oueS87oUhJrUCq7Wcr63pfLjaA5HCasHZR6rBUz",
  "key5": "5NeEgDkt4iFMH7h8DzxWLp9B8vdD8HfdsvJfCmtg8a4yhy6PWyMWPgeKh1tC3Kfux9gEBF58hBTLcfnavduoZii1",
  "key6": "3TYHX9cv9E6Sk4ooWiLyzMADF5VCrz8wTcvggi2L3zKmrcZ6LsUAa9xGhspEhwqAPBaidWkojd1CrkCUYkZs4Htc",
  "key7": "5GAUCYsqbV3rWWmWFFEMjDFpBFLCZm4KYxHNRAry4deWvARZWsNa7AqPFDr1mysY1tCW7DeC5jFB9JSP4vBx5tBU",
  "key8": "3jtr82wfvq7jjYPKZcPZDJxoMLD72gwsaaYVkMycu12gX2VyKrJ6jRzcg5pwdhGxz9ZkCeS2Cjvj5ZBdhEKhczry",
  "key9": "4NWoS65t6aoD8tccMfeubTzKH9NkhvZEqo6TSPSEnzeZHyriLsjWRGfUq894TuXpL15ZSaHb6Xn3mi8zAmpTEm5X",
  "key10": "3tb3y9kjcodedGVbDoiL3yfExJnirPzr3zavuJYi2aJVweA7YXhooxYTCmVtS3tLaxsq2aRiMQm6qtsid8EYxuLL",
  "key11": "uDqQzz5zNAiNCcLYDEvgtQJrZYCK3dcL5Z6szxUBP8Gq1tVw2KGBWpbjdysvon3YbcP2J8AXGabgEPQiBDUbH56",
  "key12": "5xZduqeqEF5fUsrn5cb4LHorjy7GCZAQWZYjQPNggEouWiHnrYyEokBtbxzKiNbGvMnNtNiJ3VuaxHF4TmVpL6AD",
  "key13": "3qNm5JuEvNBy74dhsnzi6tj2fKeRd92LvSVFRupaKPvMpa3eVzs8RTS1sx4sbcT7KWGvHvQB6mRuvr5sfAgzRwc1",
  "key14": "2CyVySrmuGSA2ipmp8F8HbMdDsKQ7RFw7Wieo7AzXT26fqwyLQ64LwpbXnzenXvcTtRQ3vvuRnsU4v1ZmPwa3jdj",
  "key15": "eGj1hmeih4T9P98Quot7umYD8Y2t1hNGrABw8EkC5Wu1TZewEiRiHDGR5LZEuuC1T7sM9T4Ydn9u9UsEWMv3s5X",
  "key16": "5PtxTm6nLi3uAreDT58EbLahiPD3X9TY8SqHSPPNEPZtEwRb4sxEbBxXK6bjxWsisFm16vSXVGfQ2tZpaJrJWHKZ",
  "key17": "2Rx9ngPzavofVmvdvK6ksqdQMZtk4cCb8gR87RNwRp9N88M8CRvYyrg47LpYRnQCk9a4aSKZG8r4iA4vrCfAtVkJ",
  "key18": "3UaWCpXAq75KU1QmHJuZwZ8EnKhQPp4ArVL1STKAnKcMZqEDJFCKTg9CkU7WVZdkK5hwLZ1A2BYuGoizGjCSnoMh",
  "key19": "3hDfcZXmLEYPkso3VnUcFhZbkR8SxgsDKVVjFRfH8wNzSxUQyhBZUFMp5D6BesVCSwwbPvuQpHGUCrofAevdreNT",
  "key20": "3J9BJyCo5EjLxJakTRJE3coHCZoS9rhhv2optLK9xbwg5tiw1PfZ3ehXkzz1U7ef23XiLQsAwrjNMsk6XVfCpuD4",
  "key21": "3RzzHh2cE9UAeomNda31j55FupSMaiRQ4W9cQ7xtVvfyGPrxVTUrduihTnB2qwfQZcv5SS1tLFTYGZFLiyWBQxpY",
  "key22": "4raUgaLaZ7zaxXGM6fbyzm6aWDuGj3KrqFdcyJi6tV3KPW1cKE6imHTviMNUswSBnxZ1byBDjKqs2wAKGvtwDfET",
  "key23": "4uYF4a6Psx9CMxk64peQjhENdS6Y3EiSURwKArjaF6YhSNVRwianztVSpWRjYuUzskMFYCTrUhrW4Z2MU41S5rGK",
  "key24": "514CJZwT1baA5ypk9r84Qzj68X4Sshk2dMWHwCuL45d9N1Qw5dpujZAnPH5t91ZRY84raWFXU4R9vyJQ8R78UG7o",
  "key25": "2zUEHEusXVVAcXE35mXGF64xKideR9UF7Sg1XUx8NXX1z6mXHHQmZoK9zz8wwge4ivDf5BerH1jUZSK4yrGmCR5N",
  "key26": "2VnBtW2e1sMrYxEehSZXuJ446ULqm9Y89tckWGVZqxxTwvWudUmfYNPJqNeRzj3ZXrBdmWiEfFfZfH4JMWKcDmNU",
  "key27": "35u6AkEtoSSJGC2jkAge6YiXNAgw3vn8mauCHtpay8mUQjqaXpBXCkv5aukYXJYDGTuEk2NSvRZ3c14ENrYmoyxq",
  "key28": "23bSVQbAfxVtXTjLPML6DcmmtADv4dwgZudXAwz8Zpqbv2L8ryS3drNdLEPjAaLNT5wgUop8PfzL7J6VHfhprs2k",
  "key29": "5AnrGM6JHq8Cab5BQ2eELLuEieFBQb1Gg63Dcgqs8HsXS8H8AVo2hkZikvxhqkGDKf1VkBHjskAEQgo3hVn7tSaS",
  "key30": "3SnYPLqtR2P8UPZ6XHm7s1YUEUaZW7zb1vpsSQRAnByYR6KQ2Pn18nJ8mamxX4ow5oo7CgVbQJ1fpbFEJ4LbZM3C",
  "key31": "K2ogCTGTgocRaSMi43FzEzgPBckc5ZFv5Xai8d9f6xMcH67fzNxfg6pySmUZPzT9Ppobxv3fiQdfLh3snNb5aQF"
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
