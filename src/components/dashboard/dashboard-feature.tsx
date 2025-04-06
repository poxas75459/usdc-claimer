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
    "4mFWkTcvx3PoMxTXVeVcDP2PVdFw22eCRfG79EvgEaH55GfFH5EbFzyFf8S9ULHXsQMVfYjewA6E1EzQejAfDGET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCcGds1aKWcGezBde3RnK4eytodzY3BqnzjV3GZAmeCGbgUocSMEdHMJoKCsLPLVhBZR36MGDu9NJSF4Tmywoxu",
  "key1": "2SiN8Au7JAiQcxv4emcERdJbHKvvdc6ghABXCeiZnAeXysWfaozZLP1Q4aXg6Km4p6r3poFDG4RAEMyowZr5YdsX",
  "key2": "651wDPruRFPNnqzwAtmxqaZgBXtu5SvxcDifd3mEWoksx8VMZXeTTvJ94ECbZLrM9XGzV42Aw3tUhvghVibXyi9y",
  "key3": "4omSA5DdJu6om5vQ2M3FMGWyJc47BYcnzgTTuURqcVCmJ1a3nKbsfwnxGQZE8TFtSAVqRB7jtcam1sZkEqz7Vunn",
  "key4": "56DCEh9EGwa55Tt1qGCnn9Fy7MVwLGNbAdXcfXS14w6TXcyiNfXXB7Mst9NpxQQzVhitt7bXMxLxdABxir4RXG6w",
  "key5": "44RFQPU2rdE6ss6ZcG8Gxm9vjB1uktTG6GijACG6kB3fCeTAAhEFxFqjh7sDJh4epXbHXdfLSzC7MnHLCtaMKqXf",
  "key6": "pkph2K2DkVrcPe6c9T5JBt3mKtg9hFusaQa38rVF45LfuZ5ovdrtGdN8XcsrCAW3cReWTdHg8fXZ3uagZaYmYTN",
  "key7": "521ctTRAi8hN9MKwBSWQnZX9dQEBxtoscwfH6vRa3KT5uS2dtPnmFB6R5MBrTJjSx3Hbp5sXHTogp888wA891fpc",
  "key8": "Hm558Pa4oxQBx5LBpi36jdpthkXbEVp5WRvRJ4B9CDFN5B7cf4n4fo9yEyK7rerDFPuv8xCfDpvNdw3HX3RY2a2",
  "key9": "23cQbHiZddogXdUFMy6zVVk91LJ3mbqkUBJyz6Gp1dKZ5mPMjVPjLs8yrQKwRZt3qBZx3ALCsVj4i9remoajQo6J",
  "key10": "3AWARJzat5YkEdGJpZx8Zt5rhi7xb677gKpWKQegXVtfvKffBGY4gjkTdvmdP99t29UQjzazNEqD9fvybZEJNMbq",
  "key11": "31mPsooxX9ow68WaZBUTywAd9WoTMyPKtyCf19mASbrDucPJ9rXVFYWid7kxu6xTeWPhjaHMqtjSLSWArQSfCQ9w",
  "key12": "4EkFYgTnRAzctaNeXaQehWsgfcseK8kJm8JrtAq7UxTQWd2em9WwFna5RMRftbd11fDrQxZqrJKgdtdbJX5r9DzH",
  "key13": "KpHhRYyFdMvecYwrWD7vnpbNVuZ4YTFx7rXoYTUAgNaLdDW2RQrCVUEucDmDxAEAY2EoLKByfi6SKPPSjPKRFtK",
  "key14": "cDKe1aUpCw7UCnNzntDEEEmfcuFd4GfRcDNurNUVY5exNJNbbmAfKXQEGwEzLdAfzgcMJZnjcAN1Liac5VAviLz",
  "key15": "5SjXNzWAv1qr6vhmoAbxbqTBLq3wJHmbLWasoTHJ5LsUL3tqXyt3b9PiafBaQfkNkWXQgo19WnVmLLpXv4g4CAgc",
  "key16": "4bZFhQdNbEygWsZCDbeaEm3LUkAuKZSSf5LWqRieiKUTRJJJp6p2bxnfpqtyBS2YJn4uGquJE7dpEUEMuB8PT7Gp",
  "key17": "2AzLmYSvnt1RgGDny67NZ2VtVPcSX3PecTX87Hvgc2t7Tr5y9obZgQLktsp26pmNJXGUkDH4GrxP1hwoNGC9qAV3",
  "key18": "5AaF9yXxnyot4VBcE75DYJRVNLoEXE2ZzH8Aef4ABtBmW4qZ4QmkCUmTkHzAq5gV8f2SHE1eiu1TtiEjKxvcNwEj",
  "key19": "3C9gi4b5a5f4aBmu6UvVDJ6zVQGwPBEaBjxemw3vkoFmTXrcS7X7eijHVwLFLBirybyM4bNDL4rsdd8EqXfHZHmN",
  "key20": "28kS3bW35PrNF1fa1XM8MqvhP9Xa8yRG1ytsFpJT3y8Y9yv85SHYEEo7qyunFiuL4Cenp8KHDMXaa435V5UsGT15",
  "key21": "3m8AEPcHEqCanzA6ydXj4zqYqx2r5Zi8EggZtfPU1qhxaDi5sQEE13ZNwn4A5NZwU9y8aut44dTQfGxXZ95CVFmJ",
  "key22": "4dKLQfAtRkb7TXxK3VHYt8AtN77XRqWtJbvrZHr7VFDyy2FDE26XxuagvFR2983GqCRCQVNZdDE7i4CcE4oeAxkJ",
  "key23": "tUesZ3ibbGkBcLmKmAK2QwcV7137n6BSDjB7XcBswpPhzLaMCoyFxM1MfiAUKCcEoDBvrQJU8YdwcGBFrjdBGCX",
  "key24": "4ZbBs3JifqqEkF1tqm2cKZ1fLeMToSP5CVG5tsVo7YvxXqYDPeHVuKp6yTjuRKXB4bgS7YUJeDbzfmTPoXGwHasF",
  "key25": "2W2eNFFzuNzQ7GVHeei55AiYEC2fT2qw6MgumEkftDQUuJmghFekS2WffyvG5Qz8rD9veBHFrQ45jbo8kwsJmTDg",
  "key26": "42zaE3zNBsyzBu8L8buSAm51sAM3cNYFDUgTxjg1gfBBDxmCGubgnjW6bePXQNRkjABM78cwmqxKmwRC9E3Kz1Mi",
  "key27": "5wxLom6TD4FkuMAXWxdH6FDj5jg5DUtunuAtPisTBqkwxmR59ChafwQtrCSTa4Qt1vn3UqCF1fKFTp81PgkPgbMm",
  "key28": "3uo8pmiaskA5V28oqZZaXQwzfLpjtAaofEebh6tfabV8H4bxk5QEAfZ5x3SLo3GY33fpJosmp2BiuWjt2C3fKbep",
  "key29": "4rfXy17BsVZV7PjWYAkhybRpE48tQDBddXRZZh5HhkjHodGP3T6qYv8kyLYHMf5QgLkrVJgrpgC961CjS41mpF3m",
  "key30": "5GUFtVQepc6NgwWPX9fryoKr6cDcw6sTNkw7VTLAsEdbazw9XPdRUyjT9TvDPmo8L7Y1JFP9eds4znPuJ5c2xBxT",
  "key31": "3pBFW6WPwBe3MX666M9r9TWk97PWTptRuToZ3udqW3Yhnu4BHAfhDcDeMY9cwMWA8uTfwh9vDVyghRs7Z4WY5qiM",
  "key32": "3uxDmWfswivynHhNeNq1Ydp4z3fzEsgFNKDcdcnvDTF5JhN4mJYK5xhSw9pVG6DQotnkUmzPfKfLjXtWYgSoMwQn",
  "key33": "ja9XFL7y3UEsABeo7Sf7tGU9xyBzyqsmkw5AJJWFi6We77qENz9ETwKrpReFqAF6q73Qwk8cXzgNPYWKDXYqFZD",
  "key34": "4T4Js5VdEiip3jdRBNhp1WMkWTBiX4DT1JM3KZMMC1yfguYxc92Cp8HLQES2XPYfqebYiUMedFmiVrGm7m71Qszd",
  "key35": "5tuUcY38trsdTCpqWK7yL11pVCiCnb9XRanm9wMySqCZhweosuGsJSJG6KG4HVk2wLFJkKx8zrZJhJuFvmR9h7bz",
  "key36": "4XexgJ4AV6oQ2qB26rQ35HMXGHutxzQLESNjsh3W4dVnxGqFU6MfJeRvzVeksnj4h3oVTfLcyjDNU6BqM5nvhUeX",
  "key37": "4UtGJMh9W65a5Mmd4oz4hhtLp8CdyQMcc38aQDZBAyKD6Z7vAZv4v2dfPxDSHJkWMizGRvZB6FEkhrkHdEgwzhnM",
  "key38": "2BFJxGpxYrizi22uFyJDVvZV26MfMEXUDscEiCwe9dgc7FpWogNNNC3vAbu6szbkZfpZFYaJDXnt2uZTqG99nz7d",
  "key39": "51fvfocLdKBU9DVVhqGfZfXwe9WMqpc2wqArjJ7rZSCpLxVRDyZNnZt71d7j9DUJ1scpZw13CY3M1rRJSTXdtCjY",
  "key40": "5VSVksxfj6o8T9KKXLzKgdNAAupYybwuT2t8hUcHLXEo5Wj92ZfS7xoiWqndy7qFfsnbXhU34yYD793DfEGrLwzr",
  "key41": "VJK91tHaVegh9ouKiSkBgAyUuWQiqW7uR1bqkR5q8o8UmN2sRwTNEx8TSUKowzHZKSedpPE5nk4tqE8uKQxVbbn",
  "key42": "4RjRTH4vxL2cyTnVzprjqi6DgEQ357cc5eGR43jnKNKKiMvP47Pjvtyvcb1m69a4dMgcdLqkXmQiDoKdB8NvC5kk",
  "key43": "56q4wCNEHPevqHcxk7Ld2Lyd1k9wXEEgG7tqHwyM1SpDwdGG4W4dAJY6EdodNtDZA6obdehNibRLXQ2hnVusFAKE",
  "key44": "3CZbwvsDGpNAAysBCS4niNyvNMJWY2XAwKEiZx2YaimR6feM3xes6dLajp3QjhS4BUNhHhzZFyfjT9TKdx1RopZ2",
  "key45": "64k2njcC4J19S1akWobMpx1JrmEwFSquTwgs2onjo9QJCgwTonrVcaStLbZ3MWJBepsJnLK6XmCjq2AyPrAm86ot",
  "key46": "535MFnPXtLxy9q3BfrUr2FZpAnxAqfBF1ABAsLLNJRf4wcsL3Jg4MdBkPqH41E4JQh378dzzJaDPYVWopQxTbcRW",
  "key47": "5JZzKobpDRL3yYEhGBEKvT7pEpMdt1Rmrp2RVt5Lv4NzZZd9hiqsvBqCR2PDDMmf2FHhsjDbLBYJBBgGM3tziFxy"
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
