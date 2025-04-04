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
    "33Mdymf2Yehx7LtFvYU3nLV4SJYumM4SKjZ1yvDorTwfpoCDxmTpixH4rQrSTSM8xztwuU5Z8pxZhnLRfWNSvqNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2LiM2Jcr6bxERAWFWdr2bNq4kkB6dyg8TXSkZyCEY9bFZD624hLy2QrEWetZSJLb2Bo3sLqMXrDeNVJpzMRjoa",
  "key1": "feSUwSTt2MEb9D5unr4f8wkNXYHvRaNNn3r86GMTuB6qhQ2P6uHSPghuYMGgvw1C2wEcyPWXmjMadMhdCsrQGFr",
  "key2": "Q1kZzHpyBmAzP4Jqe5QBnrgEtqDJnZPFpmysCeHUUKxgDxdQisMuG1bGGtMbAaNd9NFV8ZqyB2KkPu5ZDTMnqXx",
  "key3": "FCqSbMqnZSWRs6bfrLVN44v1uoyAJDBpYSkqH2WRcZ7yPow9udbnJCHkVSo9kbmotJWtJwrCCPTF3dzjVqkuyf7",
  "key4": "3gpNe9cG3HuoMYjs1TGuG4jDdTzCza5vS8AzGHZvZxMKoUKPPqsY9FU9FHZzAPoRMyXuq2o3mGLqJ7w7D5sRgDnJ",
  "key5": "64zCuJfyMaXH68aALyyDyDVyFaVMf8vxd3iV9dNHPyoXnzMhdYYqpMrTHgtoZYp8DD44pRr5ybVbVJH8MeXBmvxC",
  "key6": "2ufk93QUwpCLCbdG7TZc9HcQty31UzY3No1rs6GXqHfeSzJmtgrDkGvwkqbTCAY1CyQBo7B7J92JitEs6zu9ePRK",
  "key7": "4cr65faEnZgpb367aqd1ktnbgaCEDaXcDErJAokLdPxMAsce5v1CK1mwNxpiZD8hSyaqTAs5UakCgBJjJofCAepw",
  "key8": "rHgvCbPK98p2wwvXE8w8y3UX57QGBanB4KaMtEW1guYRTXhgTryj82dmQC1W75rvH2QG9BkvgPg9NBL8YVvxfpt",
  "key9": "3KRnHZXBBiht6nMGqnfrzVAbkHg5CH3H3ZJaksDibsazmn38DuuEGJR93Ye44a9EHi21dcRHZ8fcfyB2yAEJmdcz",
  "key10": "32nPHZxZRehV4P38dtF8swjB59hfUqttCKrDNH88LtSfYqBp4CLAb2NDTD8vyNBpTAZZMd4c4XmZ39rUxkWTVTfb",
  "key11": "619g548QyfMp5V1ajMUCa3nttUjmwBLHvvdjy5NMDQaT4djQK6tukHbwyCPjzZgV3TpujxKPsPFzdowAoR2QMPWh",
  "key12": "38joLuKNMd3xRGHHb8DNSRfhRagVeHfJeZ7hXLLLV9hqdqaRBqLtAru9aEGBzBMEfzNNf9YD3zKUs5YXAWuBxyo9",
  "key13": "3ojYTKp8VrURtCtNcNDC9mTxovX1RVPiTYcrSrCf1BwXGtHL5KQdw2tG32JhoyCkHhdnDmiXEyUDVKLjEbbu8jWe",
  "key14": "2wkcECP2CUDZV2LVQaRhY9dNCd39msznnpDCzcZCCNNQkF3ftubVAt7tTY8GqCm8kmTHkrFJ3Ba1B4k7n6wby45a",
  "key15": "3GXe6Q4FDnVPU6CsjiT2h3MguGo2wjLYuQfJjiMffnu8tHb9Ejwo4yaMpQc8Vb2b3tn6gvjy1hcAenQ13MZQr98",
  "key16": "2DXUPJhYTUpyeW4MUkmdWsktM7kvLJY1QByD7E35PBqgohnLaa5tge2c8VWdT4M3zbAUXKqaCPGbtZuuYbBuX9y8",
  "key17": "3NxhK5jq4zJbmwC3Yw4QbSZrpujjbwZ6dwr6JQVa2Gwpi97gw39QCBwtCbrLg2DkSjnEuGjgcrrSKQb2SrsBQHK2",
  "key18": "3myXgyDcAMCw9DP8A9gDacHbnG6YuNqR2YKTTGtMNTfj4xASPgcTRKSo5WLzbCQWKqwF8uLw4QGaLnbyr25kU6kf",
  "key19": "ufYqz2R4nx4EE7PTzap2hgbcoyco7R3B44KMBb3sgTW3Su6eKCUBXyULRRJcr55Kdx2keXrPoWJjrT7gHFDaBTA",
  "key20": "yGTrWBNLCKG5FNqZdXE7Jq6z95xraKqgGUcVLUR8Q8nKzZUyWPWDgwyVAXkQVtaiFrk5QwN3WcaU8uhSitGq3Hy",
  "key21": "FsdnoHEKQZvaFbjti8HFdQ7ULgYtP6wyzxHYtxLrLWTXj7oQCiEEAp4DAazJxBv91W2uLjYJBcfdzqudMTyYLqz",
  "key22": "5TbdVPRTeuidZEikhgYZHyejMh4dWWNvJf5o7cUbuYpAGzrfxJhrepxTeP4NFtbPDXDAu6W6hp65gG5RTiUVeoiP",
  "key23": "2yZBHpfBBgSD5VUUcxc6YDCLh6myGZcZCt4kup6VomKpgEUvstVC6AT8SrzdYtP9y4xbp4usFz4n18cu6ibREZWd",
  "key24": "4adFH9NZeWbkcmnmvuzqiJ7ySBUJJ9FovKGLp6i3BvqDpYr6TsCstU4RS9F7fQWsVNFSQbU28nRJbV1joHVeSLgv",
  "key25": "2FSPHxz7oDsqcxfXhjYB8qRqKKC5sMeurUFtvTKUzh5z96QewfBe95rsbiz4Q9jQTXyDbqaFEw18R9QJaD3u3FDn",
  "key26": "5dXjWGZ9W4J66M4kiTJWch44CBatZawMQFh3LTg4rhY2soXtJAx3xgm5i8PgWe6CUeGKZmtTbVLpuE69TVUb8G2x",
  "key27": "2ThjU2ubNxxLWhxesKs2AjdHcBKHwYYoCBkN5kapy7ZewXDUcrEiLgi4QvrCuJ39iUGNhNAWes13PgQ5WkmHfyJf",
  "key28": "3tziThphaVBmSaZNLN3KDZLVWJmugMoJks6rdfhYz6XjHsD4phDA2oT4ygFLppyBWaqeDM6HVeagBSau89Vu4eTY",
  "key29": "5Jbb2zRMpUB5vJYYL2QRu4E13BRtg17vv3RoWTFdNJpb3KauzhfPqjcfnhg4eCyhzJW8bToZYy3kidxJKCLvrzTN",
  "key30": "7fbnGyQ9iXkMDoGif212TYGmeDNKWoFBEnqVAgiHzJc6SqHw2C6CJS6XE4ds5JERhP4B55ghQs3cCdPziLBZuiy",
  "key31": "5seFUkK2YD7uV59F4fj7dRtmR4tKuZsvxzbHBWXR2CuQ8iHhTp4GeqVpMQZLD63Ke4nVh6UbQzMRF68nUVXVgxcE",
  "key32": "5pPtWgU3LQuAGkGTCvxE1RvAALmQJ6wFFSGUQTqjKMUonoQVJoQTDz8fe8cc9cNRKbmEF3prC3EA1aFRiBeMHH3R",
  "key33": "5VeC6oSid1mD6T2v8PZy4v1ghsDJoHshfsL3gZXD9kU96yJEXMXQHTFnfhwY8L68LLgW7C1RtX128vSXd5kw7qiu",
  "key34": "51f2jRmbr3294UQdWGdE9dKqDW2WGMrUBhEEfEV4iQwBVZmTVdDEhJCHEoZJVYxUPN2MZooF82JrCgKaBgkybsje",
  "key35": "3eFsDEDdGRjGHQp2T9WKM41HhTut1X4VtdUakd5Do2wpMKXqvGYAFiTH4o7yWywAFn3mKWBmBMES7e8JT1wDhDPy",
  "key36": "UmeeCEs8Z6kMjWiaBCeun22R1rGuyS23o1hnffEBDun8kSvCyuywrxYrMxuBNH863BT6XNXdrvhCFMQyAH727SV",
  "key37": "c2TiTSMRkvfYjtUHaSd2BFAo3q6vD4aDW99aiqs4LT8hk6psEjreqFzVuneURfVLxPksLRJsxECpP4dAUaVpH2X",
  "key38": "4mx2cdPYBfZEpR1wLM88rb9zrv3iyMM9gQkzv9VD4pUhwmsYYaxf8Nkf7yWTMucgQBW3uAzY1c2g31GC5oYQPzh7",
  "key39": "36JueuYRAPRJkdRCrdmPknBg1veswRp8LU4nBhnGmHHkK3WVZH412u3xaLVWD2RQABYmbReGyZZxD4p9375Z1Vfn",
  "key40": "22R2N8RdBHCbwSE1wY8gsytUBzG6BRVTqkopWSyY9j4Jj63VRXbjr8XPo12cE29DkkxLK9P4HSdkYWe4DeGZxgZd",
  "key41": "sMZHhVQdLgH7paxGoTejp2s9tWCDiYGbV7yCFtmeTZEAMeB61oYqaCJrZnDWzU7kJSoTBetqH6RYa9qR95mfEPu",
  "key42": "2ZqeNdF4dBXHwgHfAb1fFfhB7fqweE2Q7XP66Cxc2pBqzbY3zE31vxLxFKaBCVtCCA5NSAQcDWkFGuUqKGKyGcaP",
  "key43": "2bidSKPTdPFikgvv8WcLVUd1yK1r9KL97FYhcdKmcWF4FZvxjDtzqVi44pjRpYbu4uZdqCu2VuKJGZXeM6gocoJx",
  "key44": "kNSVurY3E99PhCurQZ2xrsDRhKquMNiCoCuXb379TUS3HBNG7CzqSUwrxrDKL5WKqaPCyiVCjxmsjYufhRGKz9H",
  "key45": "5zTQEbKocjLRALF8BnmprTLGrNaXQBWf5NoFwv5gVRPHqzJGPpycQExkTNHWcXvJy8RPs2KKqHD67BxzfJpC95pu",
  "key46": "2Acg3xxMy8zyvMngDSY2HdvtL2adRK7Dt5jrDbidAU5B6GeexT5rZXJ4f7hjgq85LaMYmK3RnFpznMNf3NZYwMRh"
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
