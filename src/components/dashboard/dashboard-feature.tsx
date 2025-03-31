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
    "58JgXAzgQKBdnCgB1uUUoRg4vAxJzZ29paQusf2pdCeckS6Dwi23ucMGtzHq5G9SFoVSrzh7G19obLajFih3y9HW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wVDn8cKzomxX2ndkCWsXbYGJuYzRnrwqdRPZb32BTLnzx5YDzG9fwcufgHZTv6U8z1CmiTexV4HS11PXx8dpB5",
  "key1": "4DV5y92ZKgfio5u9ivRnsHKv75DCb8RHsoXcH7BtLvo1bMiPKwVa8DGQFEAxP6pGfzCg3d6wPkPjM1rNL3YLKk6Y",
  "key2": "4whu8nWCXS4xMVqNqLKYnuKZVDcK2boq8oxfATAFKQVvisN4L53Bxy9TpXDCbGThLs6M9qY1v7uRH8Kn9Mu5oFFz",
  "key3": "4wqrtboSVbs9zTzKtVwt66CaVevSLXgi5zSsmULEoSUJSAfNpcduBZPjMiKuaDJ9sNj4uPYat446n8eY2ZvrEcgn",
  "key4": "8Lzpejow1oS2emyA1Ysr8CaC9RxzwoM9MAXoChmvLk7bToZqE6Srsh7jt8M7T9qvpqxjdJXuVh7vYGPFqKYyubz",
  "key5": "3yfv4v8mAaZ8em6La1nk3k698E2zf2GngQcqCx2TpEdZr3Yj5uCxLeVvfgLQ3CahoLqX2QFeB7bs6cmwgtM4v3kK",
  "key6": "5FWVu4dDvQnXqzXJznv4NQ836sPQeFBt9GsePzDzRxsXX6reykM5TJsHtDkwnb24V8bPLdjXNDAS5BxuA1KawjdU",
  "key7": "5P6N8Z6t73d4YepJVzaaTyr4ozf7uRajTAfMKD2mR7kDxDipjAFcCdgn4997V89X3Q1ECmykbW84tkjizNf8iKo1",
  "key8": "4ZShH1NRvzDKupJzVTPAgpriuV5DTMFHCzgWgkkxMSntSmRS6wvqXbgpDBNfmCwt2E7EuqKNQ7y7AaLcjXGE1MiR",
  "key9": "2UeSs8JcrU77VuVYkTaGRnkeqgdo7pzaWrVu7xPBB1So3vgmkJPj6H7VK547CYxSCPGLLFXFmfd859z6X4tuqkQk",
  "key10": "2jqPqcrBuL72ugkwdUip75S9RysnZd5VGenJJAehZrEZKgDbafYMA7fiCCot7YovFiNYacbW4DV2G3JWb5b6btza",
  "key11": "5CiFGWbfST1mANW11jYbXTqfjxsD2LGdohSKufnxWkfr7QWTTRZQkEiAeURGrvvqq41pQRcQ6a97ccZvKZFRDv74",
  "key12": "5S467zMkLM7A4GqKpJvqqVC8uaYLrh8tF5XxEzH7yXX4qET3n3piH1waViKRqmGyXV1kXGoA3H3ZyoPYTrXRkPRA",
  "key13": "5h7nDBJy1yu8up8cfMvu9s1Ct72m75sRCaDDqsZg1CiJDPNtsLkFf3tEsHDnrhpsZmGftt6LmsLrSGuJ9ai6CBKv",
  "key14": "2JAQJ6dTePcSqncxjeKyCogSr1h8rdHLPQWVHU3QxnQDndqoxWHWFC97QhJiJWZPNFHWrJbvboxHmWmaKRFSyxC3",
  "key15": "5zSFxgbW5yaJmw7SEuUxmo41Mt6hNXjDduwWZp6Sra4bj1KL879TgLwakcfuGkjE16HQYn6YpLQ2tGkMeVuwwFjD",
  "key16": "3cvyzFt61oeZouNFy8S8HPic6AhEgHtcEyt3rVaiiAno9aqnrfm8vwZXu4SXaC9s653S29WrVu9aZKBcB9LTSXBZ",
  "key17": "69t8rNtvcMpVktAFsDhKzwZ85Hbqw2XNa6S5b5qmxJJEa51S2BTAw2bwhSpJk18ZMCbhdxjpVT8noKCBfezwPg7",
  "key18": "3eP9GCYuETRHv8oonFzXDoWg5UAStoVNfwhRyWNffLV8WWkXw2yDnhsgakgm13xuM7CmUJwX9RdJkJ5vRJYr9Dd6",
  "key19": "5qmWLQGXVmW64br54m4vYoxczQy8QnUWg3g7DknvCAJt8dCZi9X4gJsuwgajKssxuSBbR7ZjEWnSTVjHP5qKUSMj",
  "key20": "zWEqBrsZMNpa6TurtofgKDF37brtM4W2tAACLffh6n2duucAyzmLdy6y6fLhLn1Wb8YAaEZv1rUSz1zGho5pjdg",
  "key21": "gxcTwQPCj9NTRKUjCH6zaLaGDnRo8WvoqLRSxgstEyD6pBapcnJ7Gg5Kj13WbwcSug5wAvmo2581g6GhZ95DgwR",
  "key22": "2HjmHeUCfyEkb4WZnHL2Lkwd6C3XGJxXusYbF4gTcH4uKX2BWwQzVYBEjKmfw33DZHQiFo1LVE6fAGMeLWQAGyUf",
  "key23": "4JtGDuiiNxntsmiedTuhp9CZByrFZNJEw6WQP12UXidQtpt1keabZywamqGtrBQjTxQyJ6oCUvqdgV2CArP6nDHk",
  "key24": "5AaR2upM3vS9xYDukbTy1RUJsECybTQ7P2D52mnnxN1FHb4xULmcEqLPuxQkzQRDy7gP9AJUiX7u1qLcb2Af7MRY",
  "key25": "62a4Uy8VRtYnDXXXtX4xhsm9wfMSfTnnWPuvkVpLRwtkL4qDpzvTsKzAicDjerVp9VrhMwZ8V8zakggia9yYFV9z",
  "key26": "2n25A5Haq5cXDaUu5hF7ypnkFKLjF4TySx3bM2Dk6CNVjkk6atMyahFCKJXdcg2N3B227yvYngADyz7hX7oZt7f3",
  "key27": "LAgN5L7G8EfrCqDnxD39eYJYPa9DsaVKdJpMAvrf21iYjE4LYBEP9qYzSu3QivGCEjNycHeC79ig34NedEG7j97",
  "key28": "b9aJcCdWCnzEGeZpgKRVvAqo9DWavYitbPGrWZUeQd2tpc2AfmFKFvBuhWpY3PT1hVGqEq3jGHZypwyoQwdZwEe",
  "key29": "2rELCqpxduAKkz8N1LofJV1BzcZRBqj7irdqFgppAvcnq15SzREte8dDgkm9FTwsuwctsQc824nA6tUVo4EMXJvw",
  "key30": "yRiJWc8DSvR6n7cRcrQA4QB3d8R8PKqMhHfsPigTX2CeUntiFQWNtYVZrSeaGbWgeNckhUUSgJXSf67JoAJBFYC",
  "key31": "4fUvUfjXKpEzMJeCXvGbZnVsc5joycHbeA7NoPwSHvANKwK9qZAwxkWHj3sshztyUVpWLWcXkvJ2aewvweRRM1mt",
  "key32": "2oCoWUrxHABTNcwFw74GawSNWkUDJerc4LJ9Piy9PKcaRq8CBXJ4y8omLjQMud8CXmVFvYsaFLqtVapAdcYUwQ9C",
  "key33": "4XzMznnbWGjnTz1amK2onzxqGqttgaAaUSiueCnrkWtmPvXeJEUdYrBDmFNpMwnw1MPqvPXTtaDwTeAHpiCyokgE",
  "key34": "2Np9VS8mAYGVak6tkNTZicf5WU4ScYn6ZfkfBNRAn1ZZuTQQg91owaoPoHBrxFJ65qbjZ5G4fRLxi4F3qLLim44B",
  "key35": "2vx8Bkc4tCbTwZ7pFTo5VjjbYtytFCWdbD87wp7XEoBK21TPasL7rPNKwTwqPVMpBFMpwWXywVqF8DkWBp9VGj9o",
  "key36": "4FEMGLsjdUknbuEkA9SwSBe6XLUG4MPM422R1iL4R6kCAQQLGoXCjo2XkyirtWFNpWaPY8LzuUJ5fRCHG5bswgr",
  "key37": "5G51vRjeDYWWGjRmZWGcuTo34fSZSbnyeQXLQrd6pHyLcLYgg4PJqGJhxh5dieDbVARMTDgZLd24L34faAXKmkYg",
  "key38": "21aHfRHvwbzvwhH9rEJJnSigyCXRnJ299L6igtNagjkLee1AMvJ4L1AQKY7fu3kuu1PYwQJfQKug2dCMNoYvLe76",
  "key39": "AfFpiYR8HRNhP9bwvyVRtA3nL8WpsA6tmxUM1179v582qvJFQkx8TEEaKqfZoaRY6ZQtmX81sMaHR1W5r6vp56X",
  "key40": "32og9SzwJ5d4848bPeBbiAez6xASzVmQswH3H51i5khsCxmfzweRmt4AEsuCfR2YisKE1tDBuFgp8KTytAh8Xhco",
  "key41": "5D4piJ3bxPgVEmrK8hRmgZ5m54LBjw1Vtz2QoR4zUaw6V4CbPC3tUWJ3mCXjdDZBiZWLSLjEdSVB6Eifr8QAJCA4",
  "key42": "64XesrL3yydfDVxv58nE4niyMK72hRTcggTFoHnFAyP8g7atJKH83j98smknfDc7Za5QKdTmKs12NLWD51mshRKy",
  "key43": "dPX4XRvujVfFjnBBgsDSBjfV6RBrYhRytBDE6z4ws9w1oLy9TkqQmAwNiL3M3aqZntmFfPLjorzKNm1qXETX835",
  "key44": "3QG7DyAiEUpNR8ckabfRCwX8aXKSkqs7oD9UAhhmKw3wH8c5Sn62tNk1RUKJNanNJL21eTcK3Ksqs5xe2u1dqUdC"
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
