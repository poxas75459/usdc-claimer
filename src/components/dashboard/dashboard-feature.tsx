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
    "2BT7APDc9F3HH1kGrqGbZpuBdLFgzjGc8qdpYs6CXQrTQTUrYJGnmoXQye2W7VXgeytQ5Qzy6UMcsYd5iuCyLHVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pTq4YjaUgmV5CZGmx4NkScBGjm7BiTBVew16Keu8evq6gw1FF5EK2vw1nJaQ5vMegqy5VsJraiGHQYsK8qEDfLb",
  "key1": "4csSVry57idbryfWKckBPUiEe8zj6u5TVPx363oPCqTda1jYdnZmz4vJ1yDYskNULMHnjw7h38xRBwZmVgWvdQX8",
  "key2": "BMp5yCQRcveyMiLiAFv9AvfgHrBUpwa7zTjhQw53cztJZpaudEhGCUHPojBCyKYn6dciu557XDCiDDWy5BGpjzt",
  "key3": "ds8yPLdJM8jb3k3VyWYu7r7uKMzGZL7KJZXi3CwN58cr7gQBgcpfwrs6Pqr6bTtFZzRYU7NuBXo2Y4vFao3Evkg",
  "key4": "5BNWvccHoTdHdrUwz7hLQ93tFXdcQdgQ2zuJDfDm2N33BzEP4Sp8uLvCjjtfpjMWNXbpLAKD8jQA2ChkcsKEaUJS",
  "key5": "2bQs5xaCNTTkvXLkBefknMPffFqNi6rX8EDtN8q6DnBBT14eMfcWsuCVWfZVRfns4ynLSUdeEiM6Gv5GMiWarMuX",
  "key6": "5Jx1Y3q2RqjjrgYT85bU24CXeVKHUuKiT3xEhC8PgW7KYSKdQbRyrEDaNxnnbeEeSvTF1pSsK4aQJJma3oTX7AHd",
  "key7": "2RPr5F8iq6d4EgXpc6fRxr2frNGJPSwtTko455TqMyYA6RgeRd58uHYKEE6fRjKKPxMzqa4RDqaNoRRtSgn9qJqC",
  "key8": "2uvgiG4QX21yzJxtsXU5cFSvk7osUUfvmm9axdE7X1bLJ91etWs8xhWoEEiHsT2qsq6YFbPcR7HHLaQpmqw4XdM3",
  "key9": "5XuNta3UYspryyg1qoTYRWmeUqPAUaS877Pex4k5KT7ZMsoyHXTGt6FHXDdTwLQpgN8bw4AFJN569mHC9KfZFu1p",
  "key10": "2o4ERCRviVSwEb3RghmiFuzfNXzhR3XmnwXYVtptVEwGN7BykAGQ5Hw4gEDjLcEoJ9ES5njAdJJJpJHpQiLfFUS1",
  "key11": "bMs2fTQx4VvjzqKi8ZznQfNKvrnEHiUDSwSBwppFiBMbLYhNFNa8HLxbmTq4kvLH4ghMKjp2Ye4SxQjWEKrfQnt",
  "key12": "uqwgemegUn4qNJr5qVBCxbbGo1bfeQeDYruEX4b8NtDWuN3nBAgvnEEenRdJNafCasSbexSiiMpJU9S1duiLaSe",
  "key13": "3epbWjazUDHCjPro1hL4SrmjommXwsi6c2d3uiydspyUtToXN8qbipKkVZrGWoC5EXtQEZZSDFQrvU6bjYFjiXRr",
  "key14": "FjtyPm8Z8dD59XjpcnySxQTUVxHFLa8tLxz5oTnhDSKDXrq4zyW52FjN2mN7RTQmh4rc1exswcdqFjkMwF43wED",
  "key15": "2x6KcX2PkbecHJvQhtri6mc7raM1kEqPGWVerggsS9G7uhKC812C9uGASp3nT52xpHAWaWCzk4nW8a3b3jQkeELm",
  "key16": "QuSWe28BSdaH845bFCuLXME8V6ZMn7tvpCLxfMqgVcTgBjCpii7GAb7wx95PYH4ZV8A8N6CN7ToR8XnmndcbP2H",
  "key17": "5t6gUT9DJkLTeCzLes211DfT2BSbS9C4SwUoVtPcRcVuQrfAZPwZ1mUpy457ftWuxXMA2yNnVyKw845T8NtVUqaA",
  "key18": "4X2Vu1ryAKVefLygb7K3DRu9uZxx5E6bYyEon4XUXePHFSJSLejspfJvYY94sYGbQEhEfQZnb7cThsM8aduHaS1J",
  "key19": "2vsA2s6DCHEW6B54hanwzWYMKaHZLJEfHFzm5VpVVvoPffGgCWgm3rE1iLR7pizeJe6ivxTdvzbGB1yCERcHRXe1",
  "key20": "2ExV2mTi2YfjyDq39SJkYAXeF6C2swUTAmrCpkQDxVTfq9yfj7F8KxVLArnBHi81DkBbvMmjeJeuPc1ag1wgxWC4",
  "key21": "4KsYArDshkUki7wFFqgGuhjoTK32VbYmB38EDSxdNrfiJ4guG1XCHvvxpJ1Af7KtRHUp5oFuruVPZjBZ3MkgPUWg",
  "key22": "5qKD37JCzctaPn7Nscg16N2q7Dx31DATS1rZ6pXe72wkcDHpTaDGtqPfYWkSCN8gg7gJmetDm3vpXtLcwgJHk2UY",
  "key23": "2yGXJYQWXjt79jeW37tmsFL5ryUvnpnNzBSUXT9N5DZitUVExugtktr9VxBibvWMcWbHcbpwFYBzVcDBPvnD3fuq",
  "key24": "2wLetH8dLGfkEQS3bKScqrwSocsrTyYpRxLhQWNe7JWJJwhdnqybnDJjCkVK3FroJskUUsond5cTfa8vK8Wdu7ee",
  "key25": "ka9icpNPhJVDKovuA8i32YpLhoXYHCwkTkE79Vr3k5aJDggACCBpzgdnbJgqKwCasc8UNfR3nivNT9zd8DSHJVH",
  "key26": "2yjyVUjjscYDJ63ALukHZpv5G1kQKQNfRDshtNHfW8h1GvNHJq79545uPWGzEn1gzNcVFSjZwHho52CGBWYJ6u3w",
  "key27": "4pcWyx9FoYYjQJ8HdK8YUmcEpMSBG3E2MhJqHMHZX7yy8n1f7ig61JFE1bsdD8SHk5Wrd8Gag63vh4oZzvusiRKx",
  "key28": "x17AguHHUaAh9gTqobBZzxGhh5qfPdcjvzwCDNJ1gJQpixvquDV1CqfKKtVsiob2WJzp9o1rw7jZHjxmrXZtTT3",
  "key29": "2nnZEriknk22EB4WbKjcXcTkgrbXb2ACSWu88ay5D8K4THmGGmEvUQiFpzPo1xMLwVPiBUTLDgeVBvjfB1E3riF3",
  "key30": "dSxCc6q5YTkwA4fxR92VrpVM8VPq3M8JpcMHXz3i3WbJuD1qQ5Z7xqEF3zjRpdGeuEo4gqUbc2ERuyFtC4zsfa4",
  "key31": "22fKFC5zdTo7P8DdZrSrxese9KvkmvaCpDh7S17LWTXvYxJC8HJWSKjVNqYeipRzbzzYrMMZkq5du2JWYFPbvfKZ",
  "key32": "3vL4eA4noqrfUwY4Lxyg3Ei6ajhtjwryfP9ytbNnc9aiARfv8Kr2sdWmcYj8xER6A8nuUQEmXvMmMie9aacjEvFE",
  "key33": "2BnbGMaNdMV4eyXnW5R4fhXGrfee8SWAdnwBMFr2U2Er3x5ruPWffMLsdAs1dUPSghXiZ4QUETQRjCsYuKvybZzn",
  "key34": "4aZNA4czDtR1Ey2nqFxBymZz2Wcgm5BX8j4gdniqj9b3JtELLGHr8Y6stPM2NkF42TE6HhBo6o96Xy8zGXeFZVK4",
  "key35": "Gm2TGtrEkhn5EA7LX39y7dULdMwgEQV8teoySScp8Da7ttBaY8J7PJGYf1HtR65w7eqzbBJEDVgkrAPdFFbcxGh",
  "key36": "2aPF23yrP4fvCYj94NBfNbE13hgMBaufmVhvU4VVaf6HihKhYNLgYHZs4Ms4Q57whjTAitr5sLyxwmG41es91jhq",
  "key37": "2u6wuMbAMNYRLdpR2wHCwecFt48gsgzjtw9tsa7vcKdSapXSULh6XNc7CKBkd4bJhrYM3k47uXcM9D1wLYrCJU7N",
  "key38": "2fuYQufNFWiQnj9FqKwm8QotMnRGC3faehc13YQ3WTZzMNzDFVmKdgyMtL4CxgpmZoT9c9C4We5rUsAEoXFhxN9D",
  "key39": "4jBMv3p9SUJYXJiShdgwUa3YeckhZMmviXBGZMxaUhuksq1xoa78AezRAsxHxRUVAFttmeqxNzG5rdwrpmgwXwGz",
  "key40": "24ihXbXAH3YVGv5BT7NREzavd6eQi5mGrYEDsJEDuHfVzfanoXZwA7hd8GLwBbfUHovJTuDVcxdLGafnS4VYbkQ1",
  "key41": "3Kz7GiXDtPLugiKQk7wGBRXs9wo7DwBmfsijqdbmBWCFMsHk4f3ULHYs1YV2gsacsqGhsZZVtoXC889RpLXEcuzZ",
  "key42": "4THvGJvsf2QaQe8AzDCjiYjT9PoG2uyt52LM3Sdr76fHgcKtDS8PvJQAJWKNLf2vaknuo7SLp6tM1BvKtWqLRkys"
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
