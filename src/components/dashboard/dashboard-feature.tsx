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
    "62ooqjHUA3A2yymCEHyJ2FU5XYdxpXJhGD4k74SAi7LS43YkkbUF25bvDNjXtbEdgTeyMxrp1TSwJLK3eC7QePEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rXtUBtvzewqfekJaTt6b624pUbd4DC4uPpMXeDfyKvvVCgBs5s6ipG8FfeXremcj6M89Ke3AWRq3Kak9mp2jWG",
  "key1": "UgartGeqH5sqUcfhdEFJXQJNSaLJD37AeQxxHdiLe3SyjDzF8NVCihZVNrEjBRsKv8t9WXVaV7WesfdF6kVzk21",
  "key2": "4rsACe46FVVnvZKt3hQm8NbD8uRb8SPYQDzW9bYdriYCTZdPNs76JdBDuy14FmFBNK8Md4oZpu5j87X63JRjnUho",
  "key3": "2xGpPeLdXPfk3VywyLYEpHY9TZeQRe8A8QQX2fYvuvZXWcExgTnbRJaX2AdsREttK7qvpA1HRrXSmr81b44nvjMh",
  "key4": "BxqfuU9gC2DdUeLpp7LvZDpnvXQdnRWouSMNsKTJaF9eMeAAsegzp6ZLQsqVVX5tsVckP2eWzEFGYVL3HrUnrWd",
  "key5": "5ZuE7TAbwjzZ9JfPkSf2q7Ks52pSxmqEuL6hpYHMH4Dng6RqG7UZtgUGWKPCzj5ArnMG9J3VMHb6xNQPTkhh4Hy",
  "key6": "2fjvdJWpuWrdSEGQkE8xXN2GtT3sq1kVP7Mb5sxz8XYxe5KGkankGRsYxLcsrFzYvCRbnwbGQJ4QMZKwfGXyh9aU",
  "key7": "5tMzE3SaAzPr8KFtQnZXDnaRYPk5ckihF9miF3kP2pHN9NbqFTbqJVwaRubxct1GvAyQkjnBNr9w89huyDxZN7S5",
  "key8": "HDfAkTiQAV88Nb1RMyrZtVvTzaSuv5Uxt3mDpgFgiGtGHZoPYfgsFDFCLeDcUvpWNTVLM7AAK9bmZxhJa7dgN35",
  "key9": "2tWJFKHncTLm4YNtxMcZYuRnKu4D79yjMBVdwLL9PupXfNifWqQCUeHWWvCgmu2aLBpKN7ykt81G5zKtqNkT6Y2m",
  "key10": "hgbhcZeSeh6Hz1VBx4DawSPUL5PiKEA9LeZNBafURi8FqoBLwkZkHHvCSQFyMszuBq3PLijXtNW64yeMQNuRMqa",
  "key11": "4wohCFC8rn1Y8549Y8taiVS1HB66FbTFSs4m3TYaFrsnc1hW2tsncqX3FX5UguBSWjtJDRXNP22GuKVShWAVhzC1",
  "key12": "cxz4GA8KxkNUpdqjDGv4mVGKH5pNEanN5wokwYQ5cNPyfkcqtRaTjEGW9K4mb6xAnJVoShmPaHyhmVGvAuvvbp5",
  "key13": "42X3jmjVVFtEJnzRfTp57YLW6UQ2Uoi81Cw2i4mN3XV1rURaC5rnTHauEvq1TXgANZF75NW1ebSdtf445eFPNTs9",
  "key14": "34rU8pyGojVXKzuzxWJ2WRonFC6GSDGCPvAXAXw9hCm2JsfkroAQZ5CXP9Xgia1GCJr99Q5oFrDevyKJWX5LTvAv",
  "key15": "62rEkZt2CJh52rM5RxSS4BFwn93FFnTNHv6r7kHd2mUap7GuwnjAAZ15uzknp33NEsZQYy2RJsEx8y5UeCXLHjhD",
  "key16": "3csiThsXc9X9DobmvVi8xnVMDgZ5F5hrhMbJsbnuLaPiK7Rqfv3TtK4vNT13Bxi55LrQuP1B5dpWC52ZrGnTqBk4",
  "key17": "63FwjajjSgUuDMM3HSKrkhVqMHpAaWw7ArteqPTjpWFjFuHVsuL5RW6JpgN1uTvzr9m134PCjyKArps3eMJkZhrz",
  "key18": "5RdwjPwhFcsKmNP5cXUvxaDwCEYzZkfDXAM1hwvQ2urMyg42c41xWePCCp6hPkpgB64uFwf8oLWEUBexdG9bhSHA",
  "key19": "5FuRWpYUb3arg71J5gD8PFz6aDk3PE2wFaRRMKnGdny4Dze81CMeKDCAdnbEtCA59LtwzcERTFQ9ghA8kXDAqShF",
  "key20": "4shPByHN8dVS1HkELn558NcvDmR8wSYejc7RSX8stHcEFejtw2nH4AmWvqr6L39HAHmQwbEwp2zUohrY7EAR7q5N",
  "key21": "3iZG34tAaeogj6eQkWX9ZRYMb6WU3GK9L1T12aPcApU9RJ184jV8AzeoXMmpSPJAknXRu12BpM7XXqjTP3jWho1U",
  "key22": "48SjpJwZBeWKRo9nP5Z3rTApFLDrn6f9apdWtk9SNF1yctzeFHrbY3LnQVc1FbL6zTMmFVQmLLcQbw9s1rgvmSCs",
  "key23": "5UhFXec1ZEnyD8jEjYgBYBiJFdLXXHyHRfbiPJJ1AeHjrW5fiMHJniUoEE6Hoxzg9czaUD6RUqBiM6Q7mk3Aux77",
  "key24": "3WTMDBc7mwNYBNRRnkzA6CB7oGTvbyagR3tbTftXtET8a4vVC8KBR8Eir4VVNeLQpoqPFRPsS2hJJ19DyTMZoKTw",
  "key25": "qiDEh3acfqsFtbdLYqCA9LzgVsf7BB19Tf3TcFje9SVXKxNa3DEJgaVmssp2USHryBa2gBuLbAaqPEmkML1Fq3x",
  "key26": "5VSqku5QWXrramLhpep5X5Ca6iqQhou3CAJh5H71v8Czw3kudW5UP9jXqa61RUDJ87A9qtrh2oJQX1FoDGWHksmy",
  "key27": "542mU7KF411aL9hjaG293UKbU3zjJBHrDgQM5xEoQa6uLkoUrC78AXzGX9ZvfbcNvQ7arzqPaKtsDm3sXtfNTY8T",
  "key28": "5r9kaX3uaispqw8ykmXtft8WeDbJCes3u1h8AghSNZdmUhSnPpa8wxvpWogWvDGvnVePMYuXSBbV1Nas9iC7XXDS",
  "key29": "5zyD6kkyfsYX5ER55fMdmn5g1qKmZY7LvKmeLqswPZUNWDm2EyPfyjefiEV88Vxo3GvtSUStaaqkZ4jueBMXRrk6",
  "key30": "2yuMazHqsWNQCmLio4Hq36KaAUjQknJGhotBdTbSf6UgAmB6xdZ9L74wkpKSqMyA1EHTo3GB2wnXGC1at2GMNpJD",
  "key31": "3L53Quxi4gmY7o4s3t8CkaCsQweZQ5YhNTt1eTyKv1ZFWxoirdb5xzUBiSbc1raov2bVfRQyW5Bhi8xumeiSRWLk",
  "key32": "3WrHc3xeEZyAzwmGodzHfqR1Py1CHitpJywWNxQXUG5pofvdtSnoLkZtbBgcPpqWkXFSJDs4eaPp43VvFS9xjcd7",
  "key33": "2ERHFi4cUxEKMRLr95kEGFrNxR99kurH9AuWPGLoE1Zm2pRr23xRBPVGFwbvEh8UwgyEMqiz53hzkFEyGHKt6sXr",
  "key34": "2sJv2DY64FVP7pyX1vHzfWEN931vqBvf2b3T29F783Mfe45EfB6Nev9zYcdbT6Livb4c9WsusEZjxRveBSpeJta8",
  "key35": "49DRuLqER8fcM1Sa2Rq566ujdWAThtrzMXRaMcWbAvub4a51Qi52pkWYDLidrXH5ofPs5XYwrCA5mYZoFLyBPcbF",
  "key36": "5wiscvLNqRjnKVgAqNTqNSy9D5SAac6PEDy6a94t8gy7bpSt6qHL1bnvuEJYQQG4kLXMENvDuMqSi19o5M6Ja2cN",
  "key37": "4ZBkskKuJsqs2twjYRqtM9p2T289gXtX3JymCdrtphZNkwnt8M8Uk2LD997LkAmtcC5g4ucoi5yNkM3djVxZt9cR",
  "key38": "3jE7oExtf44i78bhNEdynoCi2b1yhZRsnGR5dbXrvuxxvcqiXREQg6NxPQx69fxmNvQHJNXy8PvQMFadWNX1itEg",
  "key39": "4nTknN2Mf9d91ZuyYR17qYVPV1kVshhg67czGLMn3WSeMKkmbqFBhxvXhcezAj2wTrNZVDdMD7h33sxiDomLrHyB",
  "key40": "3vgRc98LaHk4s5VFPUZXvUvA1ZikDCTEwNbXDTebvSHXonfjTfsWFRAknFYX97eNTvJLT9XuKvYq3bkkcim6Z1r6",
  "key41": "3Sd6iHjzC2TB639YqkEVWqootUGqVQgisKJF83wx6ZK2szVZGKGt7fQjfA1TMeZ1FNf6S5C9VQpXQqBgHJkKuNrd",
  "key42": "rdUPRkUwi2tX4D1PFmXQnfoztX67RoQWiUtQhufmRDTQDVi4XomGzYsDwA4VKtjZjqjb5mQZAU6qgtSofJCByGW",
  "key43": "2vaUzGrQoQGUyVgbGd5rGQhs4J6cEG7fyYeicjjMoMZBkBbDWuaTofjNNuhQ8y9mjHmFmVEXjQtej9aBFLu1dzRb",
  "key44": "2DYE9FhnzqGNfXN31suUUGLKbHzcs8JTY5ho5CVjCgZdhBiibNiWa2Y1puUSQXJiVMJ377W3yhbG6WJ5HBCK8X2r",
  "key45": "4knxPV3tzuDy3zJPU2Nu2HdwLP8pTXxbZ9X38ox8EigijMguqTGSrhf165vHWddz2K5GrA8yEaumyFhHaNzGtU4i",
  "key46": "5USMKJLMainWBKE5vfpjgFkXKx5RxCxavRWTdHqTU1A4JEgqR8ujyN9hmFmYyQThvVsVRvspWnk6KFb7VbR85HWH",
  "key47": "2KrazbizRKDyRyYUUCB6p8cPKXHhZ7uhW1DxkALW1v4hNpJDxEF8ehSx8ZxSczgwmyCsXCHDtaafdXYid8grJyR4",
  "key48": "qhVV5WgJboDBkAbZmxh9Y6zQChBz5CKxu42jHv2eVSSwEmLL4KguJW3uo481Xb8U2DpyiyBp6eDc7uJyk6W9hVk"
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
