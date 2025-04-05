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
    "2qDZnjCYnShf9Q1AmZWzzJqi5U1NQ7boZAEiZM48kyQE7PtyoRwtw7pio2jjh3JdapYnuRiLJsp6nian1Gd5YHev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjyPrmNK6jKrKvtK5zBqDtDtTsjDnZrKemZv6Uhfx2E1zDiidC6cvSYDS243GrAvZpfSRRgMJBdph8jvziik1js",
  "key1": "Yji2SnFapQKdAjqtJzqxqcveAw75GeLxX6mMFKqkt6ssR1yvcyjbwnV7AdwgVsCnYWDywh4R3x3t1BL1Ty1ZKsM",
  "key2": "3kgQ4kpfjRdtYpCzsaFu7EckUfwdVpFtqhii3TeGGRTjypDtyvXkZubuV6jFzx5DzkEN8bBZunG9ZvxLQ5hJK7v8",
  "key3": "5to5xAGqfMzqWeF1h2wNqar7qKXbkq4xtvMiWLbvvvYd3jKDQco4wuE57W29TJDNi9bnjkX8N2NoLxjNbLhaPCDr",
  "key4": "5LHtpggFqGskrt1VBktz12s2Raz9X2xQvdK6g3DYnSTUtPhgFN2g92VrbCqMHaj8Fi2nXDXFQLB6bNu31JBhiHZ4",
  "key5": "4dcLmNE5PsgyajQPXvpSCACQPTs4iXmJWunUVVRWXiYk7XvvphWpwkfmP3vAM7qtjWKaNVPjBgBeZxWW9jjFoLHi",
  "key6": "56eebfnmygHq6UTbZjnezKCUCeiRF1PWpN2ncCp1h2JKsY35S3brBwy8kvrfMkmnKpcTDyPn4w9zRxowNk7tvCWY",
  "key7": "2YTBAi3XLKmQSRMhMbLNiwv7iwmnGB2HSTiYBjmCyExxpyn7YzBqyMCod6goHsYqDVmE3BVugvomStyAFaBA9NCW",
  "key8": "nzY6aRamGA6NpGHWsJFguo7jGnttv58W7vKLf1m6uehcjKVBsiSkfb8YtNzmCqyYoWfCWxphncrTyumV8MkiKWM",
  "key9": "3P4yLeXstwdurLKss5oNCexB3HiPkSxYEifjW1yTMAwHjYADEv2nFnqLwnZWDLzh4UKPjHCKDyicz1zWPrUNxSMP",
  "key10": "5RF9JDZ62kwLL86C9xGJiJPewZomdf8KeqNzrNNiW5y28XS1YU61EXXErAxASb9vgYiyaKKs4BKVEAKNDn8jhs77",
  "key11": "5BD1bzDeH5gf3oaVFMoxLvxLaX2yJZPMnjJTxTYQiw8AGZ4LwYKeioATJwSyJxnr58Nu5dkzE66RWGwcDbUaR5cj",
  "key12": "65TGZEdDGo3AGSoohbsr3oGbQXbL1i6BM7dM3ineUD2HzRe9MJvr5LxtSmnUT6GRfmTigWTzEceceFvKJrvfN2EN",
  "key13": "5FcordvRQu1e9TfGBUEyKPU2FSejKAK6P12YHSZtBoKutX5k6gHVHZsEWnnVccL2N2tUXmHeCkpAXnnWnpqYx2nd",
  "key14": "3CW2A51eRP9tY9zgSZZhsNCdeJ4sJh56inFcscDyFYHofYCC5qerK3ocwd3N4BGeC2n8cUWN7GR8bjDkAeJXJGF6",
  "key15": "3DCByZ9tWZHm3ijpbjLJCZgzipAQNj437Z61YHk6VkQ3yZvrm1chNnC6zByH2evKz7NRXMb2Nbq3KvCn2xnip6ww",
  "key16": "3XdMC4hiSqVKr2D6ZUNCAeXhSHhJtwDcgf2wGxkMBDJqrwUVtSsF53ZDg3oGh9CY3z7Ajf7Jx2SumQGyEnrqqgtC",
  "key17": "27yCMwknDWuk7b72GFXa8Fj1vXr6696qKaTWaHEzZSyaEwjMMtwz4sGwUbZBDWoQAs146a2U16L8VPhpsfKqfuDf",
  "key18": "3f66vwnS8eyNNWpRAThBS4rjnT2g88yYSbsu2zdAzKTzbLQVFU3cu46PeNzJ9tfCAUmQLPtq8HE3ZqbEbY11mSu1",
  "key19": "5VmDX9kMisAUa6LXC8BATG8cBQeYQG6sgsMpMaH1hp24MaXjwnSLqoTZJUkUX2y5jeMCkLni6EWQgKqyoer6snQ5",
  "key20": "5wFsMJtMkPvK1ipZQ1XfRnpDUCYeK83cL4jUu2MKL3mszaz2wSXukwCHjitu6SVo91cDVkT8byNY8NyALFqhP6Ea",
  "key21": "dwyfFCSB6BnVLWe4Frg31mTv96fpwAsckp3WGrkkZmLqKWBiYGt5kbzAFREdUv7tfZSpRYeyBsqThHPVDrQjGVj",
  "key22": "wG91ULdJvK5Q3bRcLKdMDFvV5TL6awJ2eybZziD4GEJJxA9ucnzDnHGExQiMsG7fsgAjpSmvACNow9bKXnXQjmw",
  "key23": "5smL9uWd6grzFYYhojtWfkjZMukHgogSdq7idr7K7y5fYqbZsNSugFav4hzYv21dt77DLLqi5ac46VxdULNDhyAD",
  "key24": "4eCt9mxAbVSkV4XfjjX5RmdBgjhecog68GruKXt2GEPYPFiyvR49vGdtbECkNEWKaroM6frwimRe62nuCvYR8RMR",
  "key25": "ZK9f8kQGKFjXhXgfEbLFciyeqKMp5bdpZovfDGY6YVRq9cah9r51SUEbAQqUTwBhwDt9CWNomxir82eCSuRB5Wq",
  "key26": "5Y2KiEXfiyiUvao576mDUbsrr9DMpDHEfAkEBoz9Ru96XJuFpaGLdpz6stq2zPq1qSdYUZsGuCs5GLXWzfDkt1qk",
  "key27": "wTC7EscjgFFa4BiV7jYgVhDAed7zhYQHtDVVQSj2uFrg8GjYWzgPc77SHNbgEgSWmegctm46SeMGtWnGvNYMhnr",
  "key28": "pbKBMWDcpwfhp8tnspx2kkod3dAN5v1NjRTM6eqa49pqrCWAiwD9PoGgchdirPumDj9VMdqBwMPnZ8KHofHtgCG",
  "key29": "2tjQtt6GoiTHyzkfpj9BH2xXNRkGi1af4UtoiuoNywtUpuQDGRxYkLcHVQdWLioAkuc2hX18Nu32bY6Ae8ecpdVt",
  "key30": "cbzHakjHRn8dPyxK29wYcUaqJYTFnmGzspiTCDt5zxFGQudA4AsPZEXPxzT32THBn8CruMuKTi5cjWREoExrcHB",
  "key31": "5w6SVbHCjGZ7UWPnLWopHKTrtLZnAUAGbnA4rJvaFKXkCm5Awns2H95QrpSanYrj6rrf41w1rcYnrKGR7wsswz39"
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
