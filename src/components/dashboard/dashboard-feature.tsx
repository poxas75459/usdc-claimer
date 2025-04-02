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
    "5QhdCvASBjaa1Uyq6nNWgUN6m88JHzpzqtRypLpVkVcRm4Tpw4U2pZvUx3VWgEGgxoba14ri475iFZHhQJPJJc4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bASKURCqP2ENvM6RdNAYA2rjp2tbKwXANwZ9Aa52cST5BMj7KevvdvJhtgCEy92x46LtDNMwwVVWXs7VWH77F9B",
  "key1": "3K1dre9hVRZiBK3g5aaWvKXvGuBaEN997ACNzA75c7VtE7KSd87297GD7LmcM3D9Zd8yovDdJwNcrWzHoYkmFnNC",
  "key2": "4C18kPcZxtrw8CaejDS1zVF9qzog32qVnZb6QKeQroHoWkZCBAi7kpX5QBwywj2NjQvJKnWW9kA9RzrStUKx7vZq",
  "key3": "5PEwyxS8fcyrpGrYMYtHtVX1JZQ93s5XbmF1GPqFL9L39WCdHeFdGNnKQzVDvMTe47oFxrL1Y9Eb7hNhjLZotJ9Y",
  "key4": "56kRMb7DGAQRqNFYLhcs1ePNvbBCVSic72S56CPx7dEUmphu43BmWfRpRQMCi5vHthNPCUEHnztLH2hUZk477iDi",
  "key5": "4mPbygAs1cJb2K1RL2E3HACMxGtofCcsx7NybVrmdrTGyqTuWMTr4xCkbpFVfnPbRM49m9uaTjpbtubQWXC6WvGY",
  "key6": "4rRCr6ePRW3hwv6vaLJa6XB4FVVuSzmpJESkPHFEuHuPCsXqy631yz4CVA6pUCHA8uYEgs5SRJfych1sipcT3FCs",
  "key7": "62USULxNe5XcpXJB7qBmBJVoW5YbJNiYcQgmTVfdeqrM3pH3zGb6KWJnpgSpCct4wcqcBpnZuuGWh2g5CRx4YsT4",
  "key8": "3dqswFXRtYJN3wNRKtXRDwPiqVbYmdSdBHBHXzEcSM2aaHEpLABPugShGxpJmhghzsAdRMYgVZpzULqh1Q1XjtNV",
  "key9": "ByZ4ALsu72UoWEGnCQkAAsTVgsPbFiifoS7R8wgHosjth4JzwJuxJfjAMhwko7NG7kDLckfdgSkPX3SnjZRhH9M",
  "key10": "2vHh4gEs26c5rqzpVzmujpWRfnvj38T8x7e8RhA9xnhApmtRsFWLcsNXiBQcZqJZ9jTNN694qRrjsLAanjEULRfU",
  "key11": "248sSJRb3G3J1Pa85YVZK1F477BPzNRuQDKs2pqdYr92ypUYv62ifNJJZkrrYqHaP2AkiDsYvC6AvCmUr4xSpbU9",
  "key12": "2P9ExhE99x4NBvJp29tkukeubvV3i2o3R28mqBK8cFNUZpYvoFMtmNBGzsDJgVEDfDgZrfVXCY7G3RVKViiksQjk",
  "key13": "4BnJW5UoXzqGZiG2pmUEJbm4PpgaeFgUUo37u7WvuABsBWhcw6DBod45jMQJ7vKW4dihe4VFoBi7yH6wTZWNhp9W",
  "key14": "5LrB9ZRGoNS2oCEN2KSPcMCYrFyJfngx2fMiLCz98i9KKWLvTjsViNNcHPkjn8tVTHXFmsFe7rHauMU72Hohekj7",
  "key15": "bSou3nnayUeMUNNtQ631SjcHyrtznxdjjMPhGj17jMJxWR6zk2sJWYryguE7P2RuUqGSekE7cHiDJnho94jSaes",
  "key16": "DxcxHetu36YAnKRib6Nm5rJ8u5N5WEBhU9nAtgm5xwTgcuU76Br6ZnndTYok2UVESFbJVC3GvANqCRu1uE5C72r",
  "key17": "2A7DkVWEFj1mburHMjQro85LwDUxDdFrLSECVDKGxe8diDZ4MjHjShG6s1Lhm5zUeG7irYkzXoDLs8cb4Neyw9X3",
  "key18": "5dReRXQY6Gr4mHxAmH327k9pRn3XftTwX7LNquSbHMmCDihxQEygTTwp4RnzYBuPmHUn4sEqbspmCvMFQfgZSt4g",
  "key19": "RtJEwzcVFmerk4YbFX7tUst8eeufhsAvwEzWA4nCDf7k27CL2W6WbFBA2SVJt4rNzPxgrrFxTP5R9sbTUDprpbs",
  "key20": "cj57QMqWYuMaJDKpZpaGxNxV5dxC5JppHjrndgLqd3urpeXUAc4Dc9Z9PZJDRb8RqfRLynBBNybYrELeA3E3ST3",
  "key21": "63YZHuE8CPi9RrUq655357QPhWCjLSJDXS7ZyxYxAFPxTXpCnDQGHtCjRUoAM4uyskLzLsJD9FvAU35qpbcnjhbX",
  "key22": "YSWVqFh2ZMhu5LECcmP1Fo1BU7KVxqMXVx4yWYhTa3kWmbmGCrnJcBJoM8p8J9CYHGTLzGHkytybHeN9YzNuhDi",
  "key23": "621V4ApaLKXgjjHdXZwENLe4k83qeWN3MvEbymcMYV8Bmdpp9eVdyU1Fnb7pAgS4DHjtUuq7QFupHGniNK8GxySD",
  "key24": "3fKSj874rNVo9nY6sZhPM3wk3BRUcQ2zmA7rkyEfbJZsWGknMSBVgwnYNmvKPkxCV5jDuMJviinsESN4jLEUwg1g",
  "key25": "4dijhb3m1NgQCT3t4nK3y7SoWbzNBQFhRPBdqwhbeyCPuTUKLLDZ8bb4dzizxVSENUkwLhALTLzNJFWam12xiajP",
  "key26": "4HuZ2YozmTzCpCbCLvMtXi9zWrLYthiJBY7HkaoL9wn7hpj9rb6ZjMr7Y1FgjAjED3jwF75e4QndZbYRUDZBAtZz",
  "key27": "4KNVb1j1ZJirCoLycvj9AjwVMN2UTTqLG3wGuJV2qCCbvidyKn5ujkwoPEhCwiH9V2rsAyP8LifbmTAZuuKi2pCq",
  "key28": "37duiGFXqMP5xqCE8Hr6oyb1PSxMZcmkCP16du8MPEePRtWmoCB31efgRhoBRaXciffHAGuLKt8hfPu4eyWrv6PX",
  "key29": "5KWCuWRGcqTC7rEPTQM2eAye4kdpZrr4CpLgiifA2m6rPrRHCEbzViQyosQ2wQHYwDyLXNG9y3JMbz6VomnJ4jUM"
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
