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
    "2renucwHRKzCzN4p1hUst1QX7KRgJC2xWQHW2txhRxw6yv7eJfe28RbWZkZJhm5Z3ot2hhjpeR4ScNY1WKrd3yYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tx14WdBuBuDKNzQt2mZtdUjx5YrKLS53oyG9E5S32BzrKVwXC7g6vVbHUcXkoiWgHsmLhUHoaoGPR8pwPBPUULk",
  "key1": "22398JCenGvpYSSbgPeuQRWa1wYNnLQJm5v1ShQj3N5Q7zdahT6oaHKdztXPZ4gVeePyWqmwsG7EGB6JkJDep26Q",
  "key2": "V3gi1NDphJ4jWbpJSEugMNASuSgDs9Q3HbKXyq6nrLe68RQMX66PJdVQHioWcXvofNzUXbSPrK4L9V3BV8TMsEZ",
  "key3": "2EcSxGBhULrTmrLr54TQNj5Afuyovq7E1AHJoEH17DZovaMHzBCSZb5TrGjpCiw1DQfUdbw8tgE5R6hsppuQZa6F",
  "key4": "5SH461kgoneFCuWhzXyLhybUWvC6rZrwGEafZk7vdzpZmvxvSTG9KSucgZ6kmBLQqU7p8Bo3h6RRD7bDLzDfEDRC",
  "key5": "2UPsVuBkJsN4qqiiT7BxH2k2Fbb3aQdaYWS5J3pBWYc6mNbNqZ6H9kixmsxWrw2F7va2BvyMHvH81iK6YpKaTNJP",
  "key6": "XGsyqJpY1swAD1GBddX9ksegraKmzCurKPAaYo7CbXwf7J8P2ybwPBAgMfqVdMaD9Awg7K77r5pyrLZp9oEbXRa",
  "key7": "4HjC1gh2UfMAmnh7X6Qj1iCJidYHtsFWzsda1RYLzLRUJ2x7WW2w5r334fPd1NwmonQYnu5ELCZTX8H65S6ad38Q",
  "key8": "3pnPHzNm6DyKiLVzmPsb9t7rqNHvX1gtwdgur5hk4qLe73GYAbgyLJtFZPPH8pKC9YbnqF2xEkYPFysVcBCmxAPG",
  "key9": "2kDE84o6JThRZZN86W5eCjfga5QMFGJhgAU4ZxQK5cttwJegQdv3BSPFuHd3rGdyTvya8CfQ4k65MLDiWLUwARMP",
  "key10": "2J7kaV2qZdwYBPBoMms2SocYoQGadk67U8JKFViCYyhVTYXQoUWCzaFiY7kARP4d7f4KYtTkgTAeiLfj4y5f6qVt",
  "key11": "65ajHzS3FoNMyXhE7ZHXVvkZUWE1pGZSM8hBDVFn6NfLZhKvTrRhqNucQ1sj2cowq2mMRaBZp39MADj1SetrKgzB",
  "key12": "2Q79UcNsosXtYosgXYSGYF54gwSEKUqPT8DPFHYTGMfzPM2mk564xEUzaNiakfP1eCy1LwwcL7VzjEEYqB8qNCWQ",
  "key13": "4ZofghVvMetVm39L8QpF2En1bZDBBanNw7ZeDitCwzKqe9eQQbQ5SCuhqtHMhgrHy94BXPkVEmHArijiaZJCyLrp",
  "key14": "55mKmSXV5KoT1XjeM3XzTHzhVnAkiwKcnmd8YUo2t68DK3nox5uyR7NXK2yTCzYsEorweznE2agyrWtn5DCCq8YN",
  "key15": "4b7Hp8wxjQP4JunU5nth1iWiX6gHZbAMEdQUJasonXftFCqL7Gj6Kyevb3VUcaroXHmVf5JLdV18ZRfwYpgLiLks",
  "key16": "5b1UJKejQo792KpLayc5s1fKA47D3oHJLkzMDcpEWwqLWSqrmZXrGuTyLnez5qdReRVoatp4aaADZuLGEkSJTVL6",
  "key17": "2fqF36HrF1wPNa12v66nRwi3wNY6NQ6hVftTZPrq5m3cKX5HmjxEXish624BSVcFPP5yQHZmJtPjBJQAfioQyomD",
  "key18": "3X9Ggpg1Kii7K1xB26WxfhBMgRNsdVz4mGiz2hsar6se4XyDauShKuFoUgbfAgH8apfcqGJFTXcXoK83tQEQDwzH",
  "key19": "46TfKFyQ8V3NP3ywR22M2fakRimsiDhm6rVVFaiwdKBq6Q7AqnARZymZFEAyPup5b74gx3JaP9rusBzqcEv2zQro",
  "key20": "4kVAyrnTJqkefhQKA4X4G8mUHR2mEoh3GL5Dt5rs4YQro9XKDjL7QnhV8BaqhGVRJYKH7VbEpXQJBwm5gKoDc4Je",
  "key21": "8qESHRmTyE11MFkvgVyJKh1jHosYBwYvrUE5uWpCgjsySgdsC1pEV9ULD1gosfXgnrshR8vSiuwL19cNagv2jNB",
  "key22": "4P9GmmWS7HuDcxHtyyrCpsG4eu5WPQ3R2v2VkeYnCKtPLhZWUayiRGxpMCoQ7xwXVN6ot5veaeyp1tNWB6xVANow",
  "key23": "3jVThKjWWGURt1uftTmRvhXVajgQwww9GnMxDVuYRy3RbJSvg6eUUZfFo7FryvEwEH7MGtqtshLF2RRK1fwzFBaH",
  "key24": "aQYfxeV44Z52pgzDf9u2r22r4Nw7pkX3D9pTede3SCusY9b2DBJaGkZ71tg3tZTAAYnCAffeucU5Bm6gZwYQLRX",
  "key25": "3tRvN2fENokoQ4LhnB4TeuJzrJzaPaaimRKxJ6Fs1hjgkqD6cxL7G631WnApwcGVvKqVqs7WBNdm36Zdpz77DRqr",
  "key26": "42WrURrzokCrr6hqwX6wasjh3tngJJybrvdMmZkGcn3PE9D5AAZv2bRyixNxAyZmCB6duAAgmVvTwqYbzyVjyZ53",
  "key27": "G5GkWuhLc6nYhVgFG5BnKMZmRfnDzeWGyBbdcf3Uu7pNBNcFtskzj5pbgN46v76aES9kCJPXGouLyCXS5MWdu9T"
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
