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
    "RaXKawRBpp7PL6t1Uw9woHowV8wm7yWDuwoXm4Ab8bgERfxbbFQ7UXcaFqCyZxVCN9Ld8dhRR1JygzYrZKtgMwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbiREZsKKkshug6k65TUJxStdvjwVSKoToHPCfXr7erixxHsA3tGmzas5jMYVpHRYbMrCcuDxZXfzoiwMTFBjvd",
  "key1": "5ZeRkzA7gX7nNKVufks8KUNRwzM1oy9kegyARhv1VJk33bQNuMvPmRLiLKTvsk3W6FgrgHV6M675xrrmcAKbWhAD",
  "key2": "3jVzPxvgfEYon47G7tpuFb1KjHsmeitcDoJhwvFFcnnajT9zWHoazeSXt5YSnvJp4yrLWCTQkVsU7bSwwtUSEv5b",
  "key3": "5wmbBQzezqrL8ZZZcYG6MdZm4sxaCchMDJdk8QZPrZR6zdsRCiXFWE4ZSaE8rFvMoncoyUhRyGY34tWZE7zRc4AN",
  "key4": "64fjUz3EPyScKkGAXg3LviJ5RkGpj5swTjePiQrUQSgettdGsP8BfMJvcN7689hdsLxXtKkgZYX4ZA5o3YAjxY3h",
  "key5": "2Ari6GEXNU4Y6aBXGjK42oBe9P2mY4c3TSLZiikoDfbbmhiXzMCkW5wVMWx1kpHFdVnSUxPqBPFLtgoEz9u36QGn",
  "key6": "3yJftt3wYzExUeEMV7mcdXv14kxaJ411iQojhSgRtmBr11hLsxXtEtgQ23s29gkBRUofLGHaSJytf9u1YeERpQDp",
  "key7": "B7hVbwyF7tbr4L76RSpgGDEnzdnPfSZ6firgz8wuFSPM6aNscYyS9zZQSCAbnevCMfXrapwgf2ohHzDcjmwvwS5",
  "key8": "37aMDwT48T1rAcKdjCRe2yzXrJDkWi89ppeA94oX2F8szQXfvz6AtdC557sg3zxVJBXsBddu9wAUBPmfVGuCYiD1",
  "key9": "39rUsjeXMqpt8KJpTjVLadP9J3HiEtHjcE5wUvoEdEEKuhzwQEqTCZa8ni1zkchumBWFYEA1XUpEH6diFoatydY8",
  "key10": "3n8pJ6bJKe8RN4f77CmRicg9KC45cNgRU6iu4F5V3ZH74zitKgxgR5iesiYP4dF1AQkrec1b65jd3QBzU45HQbK",
  "key11": "3odhw59E8fZSuGMSzhoHNd89N5hpkKjrxiLpatxbnAQS17mtP6ryAgWinjm8NaovEf4XGh4ADakvhSLNqpCkpvYY",
  "key12": "2PM9sLHgHE6vSc2QxNUDNanyLXy1qC6kojEtrqFX3zigXzMhhKbvcQS6mcExZhH56rTeN6SZcrHkgHyneUSxD9qM",
  "key13": "35gFRbDUcG94vrrPoyUAf9HLZBogtpYXPjh4w65f7qhPFwPwjYiZAViA4sJuYXdhMj4aUuiA8ovQSBm97GUYaAuy",
  "key14": "4Lj8UUrJJFJWkYx6HFqsVvbPGKJi7nXyLT4368vYYdikZu5FHudez7zgqyYjoApbtkKdcwhDwfNaUGCtqhxp1Ctf",
  "key15": "34JgsYk5515sh7FCyzqxmt4xUpbtre8tjh5eddaadW4YHCruqHj139w9WRGzneNPoBryEgETKeqiZR4sLSs4H2bp",
  "key16": "4sfzTEyFkjoxD1mEvN5cGEuKBSH6TbGWjioAFxNvrjPjFqWgS3bR63xHeq4eWrKb3pLEypubyTDeJFFsNWSKnRvz",
  "key17": "UKR4rbfRGmTkQjTpCkqMeeeK8wQnBfTmAAvb7FoJYmDN1ndreKNLHjo6GmUWUaFYfwduCB3Na1TXwTV6B9Ziu6M",
  "key18": "qpdxDgJjLmTf9hnMCcRppveYn2cTwbhwpS4byaGkmrg5B5uN1rFqQWMFfn5VE5EWEZn79PA1WFtNid5Mke2kXEG",
  "key19": "wuCsKgfCMjGXNyW6vo5qWN76qth3sZfp85ZunrBKMpxAsKwxYwyLR3SQ6aAKD3mV48jff52xijaHdW9qCXKZHxo",
  "key20": "3nJZirL6ybuUqXyyCeJj73v7DQUMPVFbdCrJQ86SmbHCwJKmRbyZ67wc8hfcTbELFNb3zwdax9c3E7rVgWToUk2i",
  "key21": "3mdoQocBBpA5wM4hweUs9xMgFJLcdWqZvz6gHTAyUWkZq4pZgrBbRRrakUZ6Bn3AhJutZoEv4CcQjxddhHyZ593A",
  "key22": "2jbrZGydnjeCPx5aSA93iPPQvCTUsyqw943ubwt3ihWL6CUDp57RUJXtnDMLCvep9BkdUU7TjhdG95deHgzj1mW",
  "key23": "65LF6SRhzZwSBtnby2kQupAyKj446W7cxJhbKdgxHdPaX2cAzakkDsEhtxCYzyc12r8p5kp9qZQWaGUEMHCYTS3o",
  "key24": "3GQ3eK8616EPhZSW3xyNV2DUpnKkEUK8kG5vRsSXLpzaNXmYYXqhz9TsoVowmJngRisfYQiLZL8H9ajtsnUTBjxt",
  "key25": "27ne1QGQHsXGoHq25REca6G8Lm39x4gpMSaKFjmiDMdz4X4bAUTQuM71R3aAM2wGV81zsiCYgJvSVJJoVcKJmQbr",
  "key26": "5cQr9hK4oDV4Jsm84CVzLr2G9Je64cjWuJ18EAoACaVQkiguXZp4r4zmF2nK9QcHbz6YuE88otSwxUwZhwERYU74",
  "key27": "3oQCkLUKSHUPjKu49u8KxfFMMkcTpAZ8FUDnyBNJdxoZwK6huG1QEPMSXRCaqt6HjeyHEkB4UYFtTNswVSGESVEU",
  "key28": "tsMuqi19gDbP53zdjEtthzvZdbdBmtP9u1PqKmhryr5Dwi9v3GgM193Dgj7J1MhooxYhk9KKdcdKdcc3a1o6JZ3",
  "key29": "iojVkjcUPYAWxcRnVkA5XRFgmZfM4eNurRR1eA8ssALsr5oTdxs9c8SP7s27Ucwbig4f79Vqyb4xWFqpkjheohS",
  "key30": "63M8Zfe87ED9hTpfWza6k2NuLfTLmcDEodfzbZcEKC4xeCsdY6gCQRaR2hjbrYiYsc1YBzfsZfZks6WLHxEJZVbY",
  "key31": "54ouuGLEs1jj2Kym7YTfMh6yrr2g3Cc2LUX69CzrsZdpnAhUNxaw6RMETgZbktWtzdVBBBMnNVVzxaWT7snfwxK9"
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
