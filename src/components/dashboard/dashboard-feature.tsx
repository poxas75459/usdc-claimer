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
    "5MyoXWWCExfepnX9UjGDeKwWLc2DR8p1e1G6h8YcHacXQq1ybRn8VTWVr22MvZWj4r57sLSChXRMaErQ1kKerMkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jupMZ3apWtGjQwehW9VpuKQwQbBS5da7gC5hwAVMuMM8sFY3NdQAwXe76QDyDgdZgdLhPajT8XXcL777xVE3nmT",
  "key1": "3ELiC6A9T1N3MMsG5drYMxAJkQ1DQFmKdKifXVYwMY3ffCDoJUwrLqKX9CQmVqK3avE3A3aaA9fuGMaC5fQVKDz",
  "key2": "2x2TXBmGB5qaP3RxoGvTdzsiAToZFTWKhCs1TjaLmz7KZtexowztFXmF2f8SKPKEqjy2QPf3AU1FdCAR11d6mmHL",
  "key3": "2euy3EzpzCREqBLJxXS3uhqCJrkHZYkBJYtAZWtzmgMRaAsrrCpro5qvmSA7HQGz3HM9HvsGy8mynk5ux4ZrxXGA",
  "key4": "5e71gbnQMgwuHL6fGE9TwmNLJkm9QicQZ2SmtN2z19KhcBZkSAoWRysW24QNMt5TLNL2oJwQubSxkgRvnmAT1v7s",
  "key5": "27xeePdkNwh3aWGbo3z2BNiC1cerTWHQHgWuD4Rvew6TL8A6Hn8fT5YryAfYjpwiLGA6opxDHq4t6uqpRdUV3682",
  "key6": "2rrdduAwVfBgfmBKYjnaJKqa1v1R4mXdri15dkjJQC2kKJFo3GF3mHKSCbMib2qmBxGTptya7Nw67RAfmtvKDbti",
  "key7": "5jC4qnHtC9Q3eAwSxgMZUEqJu922qCiUwWeGbfiFx7EsvSgpGy6vDqnbAe172zxv5iXjrXvHYdHdVAnh5vwfC7c5",
  "key8": "44bxwMWd2pdHrMtEWH9dpBBgEoDaASMRp8iQdwvpArJa4W6AnRSiNJy8NJYM9bf7DS38CkwsYf3Fp6eBBiw8c5UD",
  "key9": "5zm5o7gPWis5fJowA7V1xVTzmL5PChFZZU4wPBwSzM3EoRaqVjaxK58WPSf2uDmkzDuRbVW2zWLW919cSc2Mo6BQ",
  "key10": "4i5afDRKNHYk1iHWXTJFMMCiTjqhM7L69XNuFFEfCUJNGiK4ANne7aE7prZiurxqhAU4XEvypj4oegTxBXSiYBs5",
  "key11": "4raVNcvFoUH1pYUrtFZGGkVParSA2cUYsAF7K9nn7FYw2QyVCcNoHWiaYZihjt5QnX14MwcTgE1TzctsCEsLKxFy",
  "key12": "BNMMjYnTjUtzCju5nHwCH5F5iB7Weo4v7skub12t5MQaCPNjF9QwV2rwX6cCrWW9nt4udAKuC6LW9YPQSTc46QF",
  "key13": "5DigUcQ3E6xVzNxJFFwW6zee4a7gvhFmrGTNwLLaYdwQdDvXC5esqG2nSfppStp8m9QW7kNvgeniv8Fq6WpetwmL",
  "key14": "5qoKWSCcEouzZjYqMAn6eMdj7x5sjxmqHYxX2rmaLSRkJpqstduabKt9P4NQ6wrpcdCPyQfi3ccW2jiQ2Wb2Lvpd",
  "key15": "5NGQ7vZb6PMgTHGUNuR4N7eCewUsKG4A2BCvNXxAK8fSw5bC2LPrbaVCEuWrof5u6iz3cjB7eFMSn5CYfNWex73H",
  "key16": "hj41VSSEMkuSxA8P2ixSiaeBN68aP2jEesKC4zqUtiyH5i57xNXoUUavMpc92vq7Yd5fsmv1GSFrNutBqpuEFr6",
  "key17": "3k4TQTxcMRSbhhThPwRkrATEyVbgi5Rs8VG7DPi1V2XsCgZ9E2hU4zixCiSauShVHwbRwMzVEkAJ6P22BkbYPGMz",
  "key18": "KFQMuKXrdYFVEmR9r896T31pFWAbnrEYTXW2NyohHd2C1SKohP7S9azGPHreAoTLgrEUoggUmCeHBnp4VmcDMW8",
  "key19": "2fULuyHo9mCUktFMxRt4eGNCPUKXCCPi6LA9sWZX4CyCrQYGWbWGCRRDK24zWuwqm9r1wq4bnKrX9wXG5VnQKzE7",
  "key20": "4DTYr8H8ch9SwJgv8fHNeSyZhrp3MZ4L5rP2ENsMcCjKqdhUPtXxwm6LsSvE4KCBasfQtM5w3bz65KrC8QG3exVB",
  "key21": "48qKp119TtLvTsheg6MHzaJNqACgyDHjQ8cxvN7XUhotK8tTD3kYiobLYUYtP8S48HhUsqagNzw1hTSLzNgLaq6o",
  "key22": "i58xYv6zKJSbAvbahgHGT43E29LYB8q4Npw1GrzDVp56NpYGKtaGyAgrVeUc84xbxexvzNEXHn1uKeBUwYxYEUX",
  "key23": "jyQvkJgWiPMVTjVESEL6JZVTKGAcvR74mNc3vt7pM2Lm79tguMqj7ognm18nqkrfXSiX1Gn4ahy1UgzxkgWFhzf",
  "key24": "4pJ3zZo8C4U8TNLoNez2BUP5BQrz1M9f3EVNJDuxuJcWzcid3AiTkbBrJd8k1TGVWRhsLnc74H7gmVmBd7uPpTeY"
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
