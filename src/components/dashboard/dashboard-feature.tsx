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
    "4gepXdzJVG3m4tgHxZvYk12neESVVTGWChmgHUBvvM2YMjPqnufQZuFGwYF14d3Kj9VUKHLdtTT9nif6FZHUL85a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23frVEWpqpZoLHtst9mrxNSAdkkXEL3mH3CnB5SJFwTi7HhjTcRG7CrLqH7R3rZiMf3DLnE2K66oaTgzXUYgbqfy",
  "key1": "w6mE88ZtJdF7e7nzYfCQwZnmbTxXD5oHyw5DxUSqFEKi2yBH59Nbwc3o4B23nj87Q2Wdv6qtpFd7u6io7YUCPJC",
  "key2": "5UKqh2QkqTgSGnamHMHf9mYgwutSxdEjbuy4X562Xk16rLFbd65HNDy34iFHMFbHtNbnegQZx4WrETgG4AC4bttK",
  "key3": "5xqzN3v9wRg5MvvhKLJo8ZJKv59U8Cu4WuaA73LoHHftfGtABtZj9TbaNLQYr7vb22v1PVxrpuf8kRbXGHhUQbEE",
  "key4": "bTw58puFKkjhr9k5MsuXojJn9Xb7Efk1e5eg8W9oEnSWpCW4QtHgnvnNivq7VvTCyoFmp9ho4qgf5JFuJPrVfap",
  "key5": "5WREb1tv3sYKvXUDZF9XshSkBYZKVuAhAygEnPwtXf8oGyMpzJNmpo1WtGphvQHKe4X6J6CcBFd43thmbrpZmTHz",
  "key6": "NxpXdoxDrd42jgSAWTKzH3ZJukyNVSwJTX9jRMTtnny6yo7SDVb7yM7E3RybQFjHbQkUWFPYSfrjU3D9hqMv8ue",
  "key7": "37Rt6w6kQbtzKeShJ8iZ2T12WkRgGhUfTPX9nyTPg181F9DcKFeUH6rsKC4Mh769JrMUKrMugqpJA4UndSUSq7Ly",
  "key8": "4VcfwtXbvaw1ZCHZuyAAcLWf1W3ocZQTjWdpBNALsH3fEvv149ET3Rk3gMYMjFWTcjfdAKMiFibr2FmuvK85V7Q6",
  "key9": "49FkntqBuEA24FVizdWKCSKxgsGkCHjwyBoVsAB3gwYBjRzhssr9pKrCixXLUiasYGjfSubJGckn421cy5XwoVfx",
  "key10": "5FDv3iD3iTEeNyt71fvN9dj6BBtmVDnN1eXV8YuHzQG9mxsD8eFvLtRnHkQmr2C7dvK3KjmzCCuXkezAVapkw4FV",
  "key11": "3TW7Ftv2xXN6HM1mhReEs69va9Qvuey5DAuGsnLFekh95m16hfDeweWTVGYLQCrTMbq8EnRKZiQoD8EFDdLcZvfz",
  "key12": "5pMkE1KDa8YMcEWxhRakN2rZfMRdBSHPMMBaC4tZBiDfJW8pXBJKXBC5iFbEbgmTscG1j8XZsgVbDdU45SJhvnC8",
  "key13": "kub4nBPFfz6GEXBVV9cr2FVeDkiKdpQKnCBXAdwkPA1pKe1CsHVo3Qw8946M5sLfkQHcqMRxJ6wghVCZMAyLK9p",
  "key14": "2unz4g2AfuJGha7P5gu5VcqBogxgcDddeeFuRCcgYhiQGdm9bAngdPvgn6SCMpuyxzJdi9ApMSk1UrSe9Aok1JB8",
  "key15": "2yJnJBgzXwDRUGmrYT6WWM73T8JUttREiCWvvr7bhkpQtLVCSxrnMbBbkipd92kYiPwp8uEUFReQXMC2rXe8kp1N",
  "key16": "3AADSoE29JXZc5jk9Ny1ZmoSrGNfNnxdKJJ6WoQZJ9SDzKrcA4EuqpW4g5r3k9qLVCYAn7rQEtds7bJYpMDCUYaq",
  "key17": "3QkPWrPnYXxNCnZDr4vskRrTmquS6ZXecRy1ywYGFwr5JDpPZdEWf3PebxDWuyKuzv6Zgd6Pzu7FN6v9KFufBhFX",
  "key18": "4qNuULrVUJyxeFSpeT16dHq2wCgQqVLjNfDNwafsJTX52uS6KuDDw4isNLDqS9FGcft9zzcbo8qxBgjTg1tyTyJW",
  "key19": "4brDUh5yKotyYZjtVcpTnWrvKvnaky8XQzFFbV2K86U9G97gXxRwtGstgDt5AueyxuNwqXMpQnd7trkoAJd4H4eq",
  "key20": "2JZwQf2oo7Dmi9VACez4s9hbu9UHccWzzL1fHGYwST44by1CAQmReLatA6TGaD9FvLhMzmZv43rwt5nG4bsXxypf",
  "key21": "t99cGkMKVVSmfmHBdXhDg4Dm49nQJVYRTSzfHbK9DrZdBbVeZb1ijZ5gWoEgczzASNe7XRUKDfC3PA26ccbkCky",
  "key22": "5P8K2KFFChDmsTBPhm3etiobMkDisfoiNp7rRWqX8x2bQDSnSLn3t5Jb6gKmc6QUpcc3uTwDoEcotR4y6MPVxzAz",
  "key23": "5kE7rAswSN3pY7yHe8VUMUzFNDAZJPiVbqXjsKwwkn2LNomTmEDu1ndjGS4tuaWjWZxYHeBbrv1eUfgX32XgdB1g",
  "key24": "n53B1w96BANe2oNDmkqf92stwx1RWViDo9MCbQ2ixq4VLbzX3raKzVSRYATxN5jx6ENhtoCYn9JcSagDQaZtecS",
  "key25": "2KEpPGhUgC7bNcWcBcbfisNRg7Awu9FFCpBKhy7fgdGGodTChvGgR7WV7RCji661WK8SY2C67c7RwmVBNJSRVGXg",
  "key26": "2xiSAYfZMSHaJ6nWVTxKvxiUxjDkuaFqUxFKB3VzC1MkAM2sLbx2PWRfLVLCQtWFYrJDCgDAFBcjWETt7c5uMRo6",
  "key27": "5ADZxNTuX8xGoMutdsXNDB1sAtugLtRoNsWgWB6ZWZaNt7udjb93VNbPP4A6mMk2JgAa2pM5YrW94uWdnCkqAjEe",
  "key28": "63e37LRRMp7S7PQsiLzcZBbs5ZA8BBLcbcLrbsKGYtBUJntbYfJVGey6ibVR28rze8HjGjEVkdPprBuZEAYqsZrg",
  "key29": "5EMDPjYdRomicLwo93dqyFKnD5VFdtXk5zetmhwcj21eAidpDF7xoPj3BoPt57GU9N1CGudx6oTwPEtY4WFjzeWg",
  "key30": "3rm5ETBLXoLuZ4BgjN27jvgXF9Yxr7yFP74X5YNBHKFKktT37WnMJchYF8yWsjkEVXpPuqmPWE2CzytD6hMVN2GU",
  "key31": "5onW6t2JLo3Hyt5ppntRuGKgP3WWuBnEaroDdsycWgdunaWza14ZD4oF3bxYR4sNr8qG9jdTGnXcogNwakNVHQ8P",
  "key32": "3g382pvhZijGdcQF7UYzSp1Go7KALSbvCdC1ZHxA4WeqNnyLcTZgnasoiYdwsBLSjsPCfk3Y2PQJQypRkfap8Ws1",
  "key33": "3s422KQU5qCcWqk9m699EPCWQ66GvkfMCbZKbUQeMqkSiGKwaRnoCWL54yTg44tEKDCCRwiWx6bfZj4qjX8ro8ft"
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
