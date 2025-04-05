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
    "21VFByJ8WvQMd7KAuBq3Ad5uWtU6aMtro7F4hWG4234inqzrrsyWQJAMvdwYYN1BuZ7w6zZE3ak1dVp12u3EmZmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32KkbiHk6d8UDVKoaMcXaKfVPDLj6wsXHiNWEPSuTFLYNfPxVegeZXxXimSyPXWaPZx99j3C6Uow31BWfzbJVTWG",
  "key1": "2fY4WxQACAr8eEWahb6nKQA6s1tzJSwHBSeQqesxsGJ4xTpJL2iY8Rsb7Xf4zvhmSPNDX942PJqoK4sbQwm9hucQ",
  "key2": "25BYXUFEuUk2jWXwezCqE4YA97tyLfEpZL3oXgoSn2qEFxofCEpFEcTnkJnBzgN2oU9MkYRz56z9ELH1UG9a2vXG",
  "key3": "61awRFmSZFFG89naDYWcxXKS6sZWfAeXY7MKZ6VF7RQEAtxFHw8v2pLMYxeLSP4smcKKCpL1aBdBQDCCnTR6dLP2",
  "key4": "2WjfNiS3iGVaWczwYPjCBCxC2xorHnAFGXR3fSfR2iadhRTCY1acg5sUVksZ1fzAapB3sBdzgf7wBmDDJe2CWJyq",
  "key5": "4q4VBdRC3jvTcdCcZBG2i5s3y7S6KD8VVfnHf92sGTbzazoawgvmdkix3fzQS5ZBc4oDg4EnDXpdNmKw5fp1E2TZ",
  "key6": "284eb3Y9gcMdhVRLpwGE16v4uQ5p3rBbTvDn6d5yrHhfT6sWttDH2t4MGzWSiaJkpg44FmXPeHmsLwepXPc2u4GD",
  "key7": "3TakoC4tg3QpzbqAYG3P3wyqjA1u6rXKMm9vD6MnE54q24Pgh8kJh3MP9tBPVoyDyQD8bZAkPL68m8JPSDAcFJDw",
  "key8": "uNtqg2FjzCPjEGS2Tnz3CwkSDxQo7kkiohrbUoo3naQUPKdfwaSpAjLjmgKLYeF2Gb5jEREzfzcvzvUULQmnJvo",
  "key9": "5NWUocYvev8JUwS56vXhtG82GgzCbCw1QwbQPsJeEeJ9UZvSKviTrWwVsFpaFRCFGmKHZnCEuDeFubm8JHpQCY5s",
  "key10": "qDZexqxDbkQVFMdFzAqhTPFoBEvupBLMrh3VDeT4KQmZ5jvUrKfeVE8bDS1bW4B9MF8z5X1gJc6WPti7jiHtAZf",
  "key11": "4MFQ7RiHm2Wd9VD5v3owtUiFaHNdP9NJGqFjQEwDPjj4rCPFpcm8e35A229BZiLBRmUFbdVobMYAsqRjeBXTfVRC",
  "key12": "3KJGtqoe5BNyTdnNxsnVfqte9KV47uBd53DYAZ381A28ZCTu19EKZPoj1EwP4oWBK8x7xYKDpjP6E4yPWKyDbHJ",
  "key13": "nXFhQDsbE6PQLkZW8DYuhBPRy6Y4ALF26mQuoR3KgsceytrkqGrc8Q6v4ekJSiK4jjgCbEqMEpkXzDow8ZopXLH",
  "key14": "3G8bQjbQtAYiAuxmu7R2jd7JgoPYYc3RSt44SdVss9Z1Dntx5HTwd9uoKciqTXnTULJqZazxypVmGMC7AtwVDbcH",
  "key15": "31Gj78WvS2WHk9r95RMcrXVYwLytChb79z6WxUToppru23qMjiZUtzNJWDcDkn3b8LFDCpzsbLr9cuXw3m3qdAUj",
  "key16": "Ao4a46i2Q1Nxqhv679VtxPmZ1ho3eNDzRkTbQ2oUtMML8HkQTFJa8jRRkVJ1oeXZfhTihaasD9T1my8omCGH5ck",
  "key17": "3sKy8h9tTiDNr2yoDFcghVjyfoQxcMw9PjGzShJ8oR5st7j3SxMjSiXB4W54otPzkgNM4amMSC41bePXPKxXWBrm",
  "key18": "3UCoEaJBjFWKu3snBtLMfdUPZMet8d5gL7BwAkaMqYFqBtzcZma25Q5Pyds2MX2bVDDFYu6yDN17ZJ9HDLFG5otK",
  "key19": "26oznnYuDKkXZhVaW9FSqV8sqkfs6ypDssAZsM8VxDh5YJjp9U9PZHsoiqYrtXeTDKXuL7QmXuzixxXqULi8XpgL",
  "key20": "9w8WRjdyVPfzu53hCKnpU6tBgtcfBrEyUs71PvCwtbu9WbmwAzKfSDQGo3GrLRHJ2AJGanAaDJzGKWWxoF9HEXi",
  "key21": "3qHgCRMMkUj3YvjBCsaPMuwiddC4RzAeD7XnVX7a9nwEXk7gdSvaR9CodSrC2zDSWSk787ti8deCjeWFuycdHUFD",
  "key22": "3psNsK3QXyqZpNUovCSKNsnoTjEnbNn5piPU4KEb5mA38dhctsFABzRy8zYt7t2rJ8fGUpd7z1z52Xt92oUjAtuX",
  "key23": "3dSkKQbeNt35JTZi94L5M8mG6FHYXCcWYMiB5y2JoNhM5QeKY2CeKBkioMTH4iHxvbX4UwExKovHG3obzeMrFnKv",
  "key24": "2bytem5WpdU1iHvhABtzVopGgcc26n8Xnc4yYbe6Y4dHaicRM9SLxoiyVPjkd9fchhb7kZR47VGKXWb7xSogv1of",
  "key25": "3pG8R1xVf1BmKsSgV4GU3ZN6QxaFNBrKENN84aEG9ZWiswBQiG4dzRwh9zgZsJCGzWugRTbSAhqKVhu5yuB6U3gk",
  "key26": "5YiysaXBZhKWLaDFzmDMq4aHZFBTDZH3F3Vc38rBAKmorhtpQqaXGt8vcPSX8FkuZEsopcnoddhk12JEzpVhLHKU",
  "key27": "2GF5rZFuRawHwgPcbvgqHD2y6iTHAQ2m4dNc8JNG2ibK7XQLsmuQMveu2T8owYiDtHHsYwU849L7gAPebAKjBLwA",
  "key28": "65J97mT96Be9ZSpSRenpnhmaPv8DCzfgbM5pEuBg2hVozJP3NwgyB9Gb3JUfUZA3pKeZXuKsRV1jQfS7YAnLobVr"
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
