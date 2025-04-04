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
    "5TatVoq9XsCDwkYWm7Eku22tPepd9TMKCkNvyMJj6bqmnAzTJ13jamvPmVxz8rurL5Ckmj5WBEgD7xbEGFezBMw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RbYDx6KS5WMo1Gd5H52S32kJJwPZotycuSQ68bTjB4ErSLYRwQcbLZCpjQTsaUHXovcfrQgjB2L8rYoHcyVjbLe",
  "key1": "4CBtqwLgmMjQY17J8A4GGMtZxnEmb2dNyV9D5CH6ZjEcBevx5LdiEvXRwuJmN1r7TJgiv294FTqT6VgYk91bkGXm",
  "key2": "5ttLQFnYi5mgm1iFK4u9rSPa3oLjZjX8FH88MovycNb4YX7EfCLCKLXF9CAgS2xa4sT4RWYeH2yJaf2A9e9cKp9R",
  "key3": "fBnotiNNjPH2qSJcsJw3SBHGuF1L4Qkecvds61YgCoe7NwkiA75EfbhyLAV8cJJDPS4ud2fkSGDt97rXTu4bCeQ",
  "key4": "2pAoEv3Ajio7tmFdhxgKcEKQRNfmojq4rWxmDTJphm4PdywzoSiAPbbhXvJdaxx2iuvRP1K6mLGTvC7FnnpNxu9G",
  "key5": "57drDch1mfEhAXU8zVumvn5BQo2f3Mcw5uWHvnaGFAphd7FQAE6ZtiGjwKg4zb5QmGNXEcidsMU6WYSv9sU8gSNx",
  "key6": "2bjHoReGiEgAfREWHodZ8LC268M2dLHFxbHynHjETe9aNrY1yDoheehX2xQWWaTkT1R35aX9t57xBqvZizXFKXR9",
  "key7": "417Prh3xcv8xv1KKf4SZBv5hBiF1FWoHpgHB1T1e8e8NyA367L8niU457ZaVK6Unx1TTcF5d5gicPYYsLsjro6GG",
  "key8": "5yZ83EzpNHSNxqRmVkXktaFzMbqFFyArZ8hZDU2UHkE7vkSZMb4gRsC35PTbXNPiRQVkCESs41wEna8pZkG6NxRQ",
  "key9": "4uUG964i7kMfXLBZfNzRwVZXK3VwazAZqhPNW1ZVkgShbumCuMgTZpuT7ooT68jfPLSnF88GucRq8Kca3TmRAf4C",
  "key10": "4wkSE7mYRNoEw9czhTNFnoEBAFHhZh276jEqANzvpTApmNj9Vbt97XCi2VC29qTZymG1Tse9jpW5tCkHB6bs2KKi",
  "key11": "21eNrWos78VpmfvP4dDr9LMvpTVetFTkt5FQgUjQbkhgkSTT5mzszHdidS7MTua6xasPSGMS5xHpBk6SdKS4LvJP",
  "key12": "56Ue6sptoGdxZ5hAgSAVR6sMiRJstK7Z23xtxjsNGywr3ALyAtD7N2xPcWn4jzyegPBLQ5BLVJMkk2dHph6NgyEn",
  "key13": "5B2HoCMCKKHWCmstVFsnYPH6GKAVzWmHy2paSTkC71rLJrSzqWGqpwAWKVbE1ZH9tX2mryES865Nh3WeAbn7cGbF",
  "key14": "5VU3d8i6g2hSAJBBjZAEEfTtdKhhpc2EhMMsR3qG8WQqdhGqzrUvh497GYgkuMr5qkpw28wTJe9QQcsD5dJqYEfC",
  "key15": "4Dp1fnkmYMaPF6DXgqFJGDRtodjuN9mrfv5PYvWGeX91daSjVvWXVLyL2R4f8JPw34bHfBDFZHeBUTVzNoVncW3v",
  "key16": "pw8H8pdPcDDWL6NpuLdQHjMfazqpcNKrJpPh4TFwcKsaXP9UfoMpc7Rwzv7S1kGszuAsyXgCLtno4bJ7Jo96MGb",
  "key17": "2xnrLCt3exPCtNs2LR1K6u1x3Wqv5wTXT5gALLq3nn4edL3WWVuzZyTzKLQCiHC4SQfFwMom9BtA2DfUG2rvHJ5h",
  "key18": "36Tt2vwXrkN7WRvF2kv3hfYbjfT8uVQoHGLdH5PJrcXadjQ8JtenupXzTimjSjYmygAFH4HmxtQkZN7kic7o3qAB",
  "key19": "3FoPsm1crPVvHM4BQjMTLknGpX8jyZqYNQWu2PHiK7z69uZich8kcrLUSCSSCPJf5zDt6kfdypGkB18DBs4x7j4p",
  "key20": "4amw5SEProAo6ouw7fCdimjNyaALmPZG9fAGp9n9o1gLS6YJUr3K1LToghhJJL9SWH6acS2tAoSpCdMpiQygVwxR",
  "key21": "5zV291NGqnnzpgDv32XcCmPp7ABJn6wfgZ6WPFNHJ4KefQ6x9eM67CkHtqHtpxmNByZgM3tkeazTAQxqQsSpKJGs",
  "key22": "49Au4nnVWVkdwwq5nsAxu5THkaRBKomDsqu9cDJBJodBTc2tax94CzyNwFuYg97FYvqZDF7cmozpcwWFe97pi5H2",
  "key23": "2tQx3gVdWMVYumE67pWgMneSqFv6C7Kun2dAu9Uk23QqTQ9Zn8p2cGumBCfVoQyCgQaB6xq6LmoVmffKjSHgNqjW",
  "key24": "59vKrUeraZcfpC9CNmXriuLDBveMQGaKppj43jzgvurBFNHVFTw4igAs9T5h5up47tZktw6z54etyNxayTdS7fi8",
  "key25": "6Rq7aFXdqJ1GSwwZxSmxDyK86UDJaoHtbfLF1b4gLXVyMdzpoe6VbE5V4VKvfzzozV1Cm7EHdvXnc9WePKvrv2Q",
  "key26": "2yj2ecz55EA753R5CVxzZA1JuKrjK8VBAiVQMEsWMjHc5wWCJ3AUDJ6B6H6oYqTT4ge7ztimwwYYrAaBB9Sfhf1P",
  "key27": "35WCd2KS3Mrg4r6R7qCUMZ1UFVmvV4GzDX52D6sAi4kNQPs9udUjV49oGZX2sFswm1iASxqj9Z7CjP9bgG2j2cue",
  "key28": "WJcop1VAFdfckEqi2rxeEkcUdSfdFXkyfUFoo5V5BY8pRfkGGhb9jJpAVJDKriFU2kenpj1kYNjL7Y4eVrzSW3G",
  "key29": "5u6x8WtAafQ1ynnVmZbyePgHn7QenX29rnSWKk5iUQf8NHJUXbtNzip4W5iR4iYrowiHjLwhaShVHcCgxpDrYqyb",
  "key30": "2j8n45rzVK4tGQhXMVYyBTssnLMjoyc5D27yEQttVh7q21gZ14hZWJDDL9EWUfdC4oP1mRCUVpcMv24UTxKE7hNC",
  "key31": "2fW2fxdE8YQWNk2ipj7S2Dd7xBggaU6Q1ECp2yLVLJnrX7M9eNMsPRDsf1M2AHGiQ6nc3HY7gKDhUPPTx83Mjdxt",
  "key32": "3fR6BkJwHsC6X4yJEpJDwoijEXFB2qgzW9oqxjtSquzzxywWAS38FihPa7GwDKbv54jDWMBLjPf1dU5kQu8gKAEj",
  "key33": "uLUDD6wt6fFjRJxUs84TpNtSqLNwYPH8zbWVb7UYnr7muBz5UzF1tQBrJKmuJ5btkZH1pbqtHZC4cHBos4pqVdb",
  "key34": "5teZvwhLpdzMo6ne5Pb4ZGtgC4Zydbik9yD1rjx6UPrYgy8k9w5H6XSd3SCVtLp4sRrbHgVxkUjV9AoMzyznTYGJ",
  "key35": "5YP4uJr1MrwUBqYEoNd7TXBaMQq3LT88iCjy1VyNBEtMMwkRU58LnBWwu5NdjT2NQ9YfhvRxo62ztYm6P6sTGSdA",
  "key36": "3YGy3x5nP4vLDDUPLNxcPvfAQdGscC3bsaMpexqyXPfmZnsHGCmGRu3CqyDGKyiVWkJrtUgF9oHyF5rhpCYf1c6Q",
  "key37": "gQ41igbTp5av9afEtoPgwJCNFphpTDKGZNEwGyaFQLiSxxWNtGwTQqbxYyjH8nJk31uSF8r96YW7c5u1NThinK7",
  "key38": "5Zr9G4JRurfwPBVwc3yqRtJFNyKfB7QVYcEFFrFbudUYA39XkxWrwey7nYVMcMjwmbDKyW6sPmhDhi6o4a12jHdr",
  "key39": "4hmoydPpYqXqLvNBHLncrLgr6fGjfZSNJjAzfKS7WSrEYMjh5sVZ67x2o9wzbvNLCotBNyayiY7Qjt5VcKNkCzjE",
  "key40": "gqVh67hTPgvD4v8HxprAN6Q28CuanQti2tC9Ncrnt6YQKHCHkkeoie3ECk5wfkGt7a7Xj8AnMHcGVvGmSS862m1",
  "key41": "2noF1etbUgHccMHZoLFfezUhNbqsHK65u8Snp3LWFzJ9aePjeL34zXAsAsBS7PhzaX4ndk4joa3KGh4k32xwyxCK",
  "key42": "5EL8NYyjmEQC7Spb8PBSrez9RhFHYrbVHPYxNFJ12RBUwRs5AdcqG7YshSuN1AFFNxKUm5j7dFLrprAuPmcSaf2T",
  "key43": "3PZDh7QbSqPkWMvz8hSw33XDacLRiUhP64s8Najz8cjntrjM2WSPrv3bRwcNxwaHxJoDB2Rwd4dQKotQz5YqPySr",
  "key44": "6E4TFoksS3pcqccKy1VnFWCUYJgqqeATCKX5XcFmKfsf7RqcTohqYDCGS15LwGcicWdqj3fU1p9ypsWfbAG3syg",
  "key45": "3idu5RrDrtDrvNUds4ShGiv7oaSQoQQa3p2EJyoAajwLq1F7jQ1EsJfhCwwcMsXhGVmq1SYu6NzesZeHH64gzVCn"
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
