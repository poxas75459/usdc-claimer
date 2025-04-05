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
    "3SBPKDAoyLuq8j3a9de8dXr9q6krgUmWRuy3i1H5tggTFEz9rnYD8XP65iJJV8YLsr5m8aoWNeqfQ1Ww69og5RsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51R4fEp3Eqg97cLdUzcQEJKh6BEEh9aCeZ1T5RyGQ8DNaazn22zgLe1RXLmgBpmGgYjvPtQMeMT5fdKDznMKBmWN",
  "key1": "46m4Wh1mTdUtjMaH9uU2egXaN7XtpbpRmqFbCCefnRATZ8bWDKzcqMQo3J3mCqvr2sCM5RWhGcponefvgHtXGEtc",
  "key2": "AsTZjP539KBSVd3fQWJNGav4LPgfz2qcZj5pcjSF4dqWeAt785BichjEXsFa92NmKUX889UWgYpRLKzbw6nxjon",
  "key3": "v6t1DV9ZDLcMbQQaEaEDA8P3AqQvEhs8GVXrJB3TpNDhWfEsz7Q9QTzjB2icKbdjWDVsmwf28c4tLmh24MK1cb1",
  "key4": "5feKosV16J67GPuN7xXU7ftUagH2t5y1gYuqbbayHQXX4Rr1UtXjSVbBkwQEjmfhN5CDYggGM6fYTw8LTgPfBRNQ",
  "key5": "2s6djaFDRPisbYYWusniiSxDJad2XbX57ANN7qxdWjXU3w6fEDjpbUfpGmsAxMGTWDS3zzigJhYyrGeRaamXTBQQ",
  "key6": "2ggCQv8i45wNfsu2zbppmXVtLS3jeiyNCENEDdk2dm1TiQquVLxTCrqikCCjHsbqkrYjUNBJimtdV5RveRutzZin",
  "key7": "5EsSS2UmyU375A4v62Ha1P2GZJhsNxQMxrpWAsKQMJ2yKHwLrEko4TvyFW1rE9XxSrGynruydoaj8Xd4a6xCXZUG",
  "key8": "3YiXq3RnptTZbZgw7px4Yx4oDwKKa6cnS8oHRwbipxNc1hVwE1Lh5XM7xZViYafRdEjnx5aqQcir2yYJmYfPE9vu",
  "key9": "2qUxjS8kiaG35u8JHEMV8bedMhf2N95C6MzNq2ALbPTDp3pFfSmUC8sGK2n9NEhDQauxPkyA5devJgpSYkE1UwwG",
  "key10": "TWD9gZLWkwSiZym3TNSbvdthT4gG4GAowGT7ZspaeUsiMotg5GXe97ppYRL6tMbYeJHdhatTyJnfCuXwvVcHHSR",
  "key11": "3BcaFLbKX7uADLVPo9PAEaZ4N5r683v9ZSUfHmfrbxVZQmA5LHCfYGZDTVJA8aY2x9jvr14XujqdAMv8pXCGKsQr",
  "key12": "3xxjbQk9cibS8sErNBc3pSoDrH7233k6LSU24SJTDtdv1VZtaE1kUfnHKs22as1oyiQaz7MwoNmhUbGACitwBq6N",
  "key13": "Yu4b54zGanSbF7ioY38Rwb3gsY3UjbjVhufVEnFzjWkFT9zAQccbcdX2K8wBBWiR6Fd8KEE5SKs2HKBGFeirzLV",
  "key14": "dqoZ4neFVUqxuZx2g9Q8dhwDWg5AmrB5gg6KH3qz7bBVS2NcmEFmfS3tjSM94nandHT2bB8iVntcLvnGGJMvvEY",
  "key15": "3WPbrPU7Q5hYfJzADt87p8HkC6Zkth7imUAs3DDXerCC93M3CQJMrVyLEghf4SPZAnaHTGrSqrEv5wso7gzcPfjd",
  "key16": "5EgaobVK5gXVxboyrHQ9QzPkqtD3hRcULkRpJgxn7NGjmZ2qRQ2jinHxyZ62o7bwXHJNQBBa8pxEssVEL8t1h2ch",
  "key17": "3YujWinmYwMQHmkx5kr9rjR5MjAFsV23hNDwq2u6jXDLHsJ8nZhAHqn4ggfwKzhgJcuEGmkR6pbu4LUV7swikLdB",
  "key18": "3Yfk7UUa7rB9pnFMQjjhbHALQjpYxwDZXeSJvkoQjZkHu4bHjvnmQhu6GAEasrZyKjfNyQiMYWK5Tn4PGAnGWW6K",
  "key19": "588BNcjAyPatLt73h5f1yyCXKC9cuXebepb56vhUofdJMCESeZ6omSRw3XrnJSngxhrw9dKUhevFCZVHiGAjrypG",
  "key20": "wuJr6VPP7wF99dxYE7pLiLrCfGAC1c9DndQYv9Mphmcjk9gHLmss1ALFmxysrrUbDeD326pNCkJsAH2WZwhnQnv",
  "key21": "3kEX8Pa3H9sXojU7kB9QCSBdf4jDVZhvYnfrt1yZMfLUGTMe3KQNGhBrXN7VEXkAqJFSrmFZeLQq8rdGrLf5VeZU",
  "key22": "5kb1sGsDuSibBxt7LzRz5ji4YiwsK7NNpHYEHyXh63ND7RwfRZLc9r4AqXSm9V3GSzY2rKSmgkz2rnGDAqLnx1oe",
  "key23": "36A9NuAoSxE4J1HGGLbsaC7SDSoJAJ9GpQHUfPrws1JWjQ9JAmiTYfireHcExdAtUUKcUvH59tLavE4KnVPN9d7z",
  "key24": "4HT7jDiqsfKjhNYuTJxYxBajn6SVXLzmJ8TCFVBV8GhUatw5EPTFPGj6oigJgxVK4G5n7omLgzqXD39kJSSBHbQb",
  "key25": "4qjLWrXHx9v4jZy2KuJ9dNo7febjRZ4HXrTZr9ju2L1Xu7wmqanPutM684vnyGrswmxnMtupKhHPedy4cZ1QDVrN",
  "key26": "2iqqx13VEFwwDJDUPfs1HHzXtQKgiSi8bfjhuCFEBa1WrL8Yhm7trKDiYCfJ6YzaBhPJri1usNjj4yeMRNBu4URY",
  "key27": "5NSk58sUUXqPydGYarhQMYtSpuTtMbfxQaa552EzCnrShGvYt73iG9YnRepPWoaTiaQtCzrosm8WeoE7QVVSxLUt",
  "key28": "2m1xxwbmWxfzV2C8Dxuj9DygzXgwoLagSckeaNcGYpJEzSFnurRkWBZQVf9Q6R7UUwrDGiqQ9GfpyKsjLkmM7Ceg",
  "key29": "4ZSNQ8VzmTkRTfUCnkoaRn21amkxkZdzXVfVk4g3k8Asau1sTPPFVWR9XDVQeHCFqJS4V9Ej4ZmgDnrVecbHrVBj",
  "key30": "58Ztni5xQjdewySmKgGm91kiEtsZbsKJSvTBibVJEwVciHbyy2uszUjEMwHs36pfnxHSR3LhwT4B4UkLDsNRb4xk",
  "key31": "qKmEccoZnAvjEZX22tpXNrtHDWimFm8egPMzFK78kuBbqqDKw9xA9KeZnZVwvyyfWWfmjDMe4xu8cADUNCbQQtt",
  "key32": "56JfGAstVqGxeWuuSohNAL3Zwyg8yRqjtFb7A5eYzHnqYFwVQ9usd1mHR1GxoZZgebRez2Rnx9emNw8hHBrxNtTD",
  "key33": "3pKdPYcw5uRoBKrE41SyppMh4zturt42fnYecV7NoyvatkovrmWfc9QCcp1aiZidKU4YP3aHxCzzZhFDk3T1XnPk",
  "key34": "4mgpU5N16DCgCLuokQRcwWvR3dEdRjAwrM1LdGHW5d6ioBw2zmFWgrxPQmXRkkDbs3SoHjJjGXBwtv2Fm7QLgAxX",
  "key35": "5xpDYBahdnkteCzTkLtftynyoKG7Wq2Ysv4UBu8DLXZeEMwsDcDsotkcQsjXXBymGiH5a5BcStwHFTkweCcwhCad",
  "key36": "33BrurzZYzuARZp8foHJq1gRrfEPSdutviZCAS64r6KAkLVo7NhW8TMca5b9JhvLZzGpW5fx61wv8WMuQgKRZyv5",
  "key37": "2MgDUvzpjsUizGEDkbnCAcJPYYKewfrB9Xt3X67LBQPJ3uq8NZtxBKvBnpDaTVuAb2GGkbXVpBYmfffnfcP8Wyi1"
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
