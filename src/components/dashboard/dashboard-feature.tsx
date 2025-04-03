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
    "3g15eKoJct28maFHUsRbAQvyNPE5QiARLCLKUG3fRfJH9kGxViHsh2nEsNg1m6wdSLCjt2iAY88HkY8xxZfyNUMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TQSQMjygpj9WhmU8uJPwrUFUyRG3t7UjgQQQjRkJBZEqezVGGM7RNeNVrnL1yAPscEYahcsKNXVAmgusgobfZW",
  "key1": "4L4ANEzoKpyF1pd6KgbqJn4JjX7naQ2CkjAwTiSkWQ2tWsBjfVr2t4cjCK3tS1gecGYwqFhjfSeVBqua22X3TDjA",
  "key2": "cN8yh5m9YMHGuVhoUgAGsKNFoMwBxm1VpGH9xLfnZHG6kmyyKQtYpddYtzSAwcegwh3v8yh8WD69AcaWXPQk2xk",
  "key3": "3c5JT3djPXpfTKbrB9h95BJsnRXkUS4HVasEuFkcHYNtbExwGBeh77gxgQSuuw1eXDstffF7c4C3oYpNZ7oHwF4Z",
  "key4": "MgnXiGWSqwjbyHDLZnY3dR3FwXjDKWf6dhd6CJHLR4uFF5XVGZBKZ8xEfDULy1BGhoG68dAnST8Swff8cc3FUv2",
  "key5": "TA4NdnG1kmuwLBBY1i5bzhvrQDLc74KC5m6Ufs4h7MquMbAE1EyGKnSYCeVwRu7F1yXNiB6jFUebw2HCiJjunqw",
  "key6": "43YedJzJkEcVaptaH4iWk1Pyr9b2AcLtnf4FADgSJJ7GEWF1sXV293uzScmZ546ZW1G7NW8mttuq8VCJDgz5Xq6H",
  "key7": "54SkRWRqBeDpMKoC8TsDKxkwUfXHzNfPXmPZcwr7XistX4Ugs81isosBNC9fB5ngTizyUwExowp9EgsxwVLX2pG",
  "key8": "GmDxpmVVJqHVVPi49oy7wMPZLwSCvHFcSZ57hktr2PUpxLvajSfPifuvazu25NvacyG6V9XhDjTi6vyFgqhupxY",
  "key9": "2A4huPkMXQMeHr8Hdkrb1Hcmy9ZbMpYDDioarneN6V8bHMiXSDfVrgqJZEiCU5GkSYdwbRSwmuhvMoQEBxAE3ZjJ",
  "key10": "ixBMsjGxgmQ2AVJepLTZsbcCo4rQsKYYgWcBUWZnDtWHFXw4Rh4k7aoDpHobGn266G6BNVkpdXzrptAPxws6354",
  "key11": "5gXULuhQvpWYT4oFjBF7rws34Y6AKrvNELibLseTAKgT5XeJPZp4TZXnwWJAbAi5KPgp3TbprTN8bu6A6iXRqeHc",
  "key12": "4oXa8u2tQN7DGu138MCGNmZkYzKQDNTsUkJYgrS1rN1nfaUf2FyR5HvH34PhUka4kzYNGpELJB7rLuefcZ7jYb83",
  "key13": "2rUvDnZ6w2hNUioVDqzKzsH5MXxF6wH6eJWcEqqQGtrjKoPcj1qnGjwAidVsRYABLWkhzrzdzWqqQT4V2AypaSXE",
  "key14": "ivHS47JpEAdWg4w5GRHwVKpX2Fb9Bk3dAJk6CkjQJsbu2fMmqURTawPfv7WAHhr3tcVc2PYrMueRcyZtg6xP13k",
  "key15": "5qnUjK5ns9y4BTTy9FhruwkeeNB4XQ8FBS8iSZFcJmbwoGTBcb28K1bh16gv5p5t26tSuzo5jvkhYRjieezFvqeC",
  "key16": "uQHqVi4QwdkBc1TyGRze57FNY8FmgpFfsSEHXKdL5CqHpf8KtjKK3RyLaveh7SERT9TPurJnBPpMyspEPyV8DsE",
  "key17": "LuosFPvPSGx2peyCK1SvhFSqK6PPMpH5QJw6uTLhFGwKFhk5XRN58fYhcpmqaB2fDh7PCudsYo4XG6TP4u7MwqJ",
  "key18": "3Xm2VJLztegwAE3FS9e6eEtQhcZwvRioiM1PypW7dFwfeeaRcGsQLQLvS36RgLTkuobE5ADPKfA93SX3xMSEq4di",
  "key19": "4Zor8SSpT52kWVktyYHX3CpnHnpjqR7Vv2bosVnvEL7DZHCnBGQBptW8FhbsZs2SwzUSEoaJXKjCF3kz4UKmK96e",
  "key20": "4btyCUkt6A3yxtVKeLb4A8vJc9Hv39SJWAV6gRR33T8Fr8R1gG85W5bPgEMMHVbXDa7MrqBHvrwr4uTgAkbQfKu4",
  "key21": "3QYgBNiKa4No3ZDUmzR7BEF5dGphcQkQ54zMAN9EoVA4NNA8mwqZTsHjwMK7GL9Ps8Hf3RM5siKJQ7FvTAX2zhgr",
  "key22": "3DQA88oCRseVzUtxdiXFqm8DgCStGMSybMaSULWZtDpkW93hxLRTzc59aFvgPX7SJe9iEsmLyb7yg9uy6uJoVtMA",
  "key23": "2R82GQnibq2tzQb7AqGn3n2XE6YFQodLFygxS72ZVMGqfhvRRqhZzxHBy45ZzJuUbDw7zgfRaPYxKUTqW4LUhC2u",
  "key24": "4gK39PqbDB8zoNBX1MfqCWf6D6Qv8nxbUwyXWf7sL1gZkD8eAWAiotDQidchjidnLjrZNCN7bQrofhPoUv8dKkpr",
  "key25": "Dt8kq1tRxjtx9Pa33BTJ7j7D1VaobhwE5rxh6FsSHHVKuExRrHp8sdNEdD2UeFssPptk76YWvUfRWpxkxCp9aNF",
  "key26": "52dkMipeVV7kmC8cGx7Qp8YKYq7TeKarkSBTiTUV8DpGDJEpM6mCRotfKurtHsVvWWodxLG1e3t7cENFDRXWiDaf",
  "key27": "4mLKs5QHhfq8BZFfYqZ5TK2SYMhzouQbqYb1q5PCVUz2C2jtfx6hk5m2GM6vojqVgwK3Tukbybr1WXNQrvwVuq2N",
  "key28": "Jnvd7NhAg1RbgAHctt878NtQ1F5fV26YA8XZ6FkcRDmxeKR9AdZzUB7uayhgTTa5hF7gkC7AW74d917edqkJswT",
  "key29": "5NHKcvoKJGo4BAHXJ6De1iYwXoMnNo2oQr2QUKg9GftTx5sMYfcf6U1KHWovytu4xHj2nZihs8qi67Te3kx5PcUP",
  "key30": "4EixLfa2zUWWn8jpnpaXNVDvrNWZ85s8HU82bWzhFdzCa6pCP5vY8cSY1pyA8JrJaaxuU9utZgRzfikeeDBM1175",
  "key31": "2K4vrG59C1cEBpvSjDBUiBHg3PFbanKWoBc4NPMjoFR8KHgcTKtECgLrchuQWb4FtjmQ5kwshJbLvPBac2fCYAWw",
  "key32": "5esaWqcyKbSC2NXRthYHLyogLTjidmYJmCGJh89SJHDw38u9YcP71NpyM96akDLw3FHL8vfnNwvjvmkUvJJy58hh",
  "key33": "4qg2eRTCBN9xb1R8ht3QkpN56he6tsdxfePD43NWhtRGpZxdYQ4dq5W2fDS7JXoy1ZhHqEWDK6nwwjCZBgBAQmTB",
  "key34": "4CdBtBj38u2MgWFy6HnkLw9bWSm2s8qpmKSrmd1KiYBfXVqwA3hpNS7h4cM5MNYLUJFNb4sDRJnYi1vfbCGuB2fq",
  "key35": "61eYSwCHHohKFExyvyePomYQ6M3F5CxbL3YPvzvj4yrdaMHsFojp2iCu67XeuhXCmc9CuEH6acyofcCYaKkLH6wk",
  "key36": "5AhdyknoQPYoYSUDb5iggkTexwAB1NLgeicQWzUy5NPWTBXhYV4nWuFMeD4uBv4bdw3x6P6E3VRvRproDYnpRNhq",
  "key37": "F6b2Ur4RdCbWo2c5UdNBxua7ub6tHUXPoBDLcVsvUjQXVx2WC35e2L5u6SdbEDVwBUHQB5iebhLrYaSHVigJ1nc",
  "key38": "6MQLMC9DkgM1hCc4jv3cdfW99F8QbQhCzqZyyvCoKBGgJer6Mb4DN6Q193taUgnkf9LGXRFqe1BgMqCavfi91Ke",
  "key39": "y5LhZFxdh6RoGnuw9qP6kimwTZWsJQPMksLWhXxMCabjm9wN9UHNfx36CTGszQJwg8Cc8X9bEpc7t8cfox1svqP",
  "key40": "4npiAXfBUBPsCWYxwsXsaoLRxmTGqgX2PkgknXsWKd8hLLLPaV4qed9F7BdRn9rsyHbGD3fqAExixGhHfv4q9cHb",
  "key41": "3179dUVKFZRMAFj7phJuaDA4H1yRaVcZ3A7fLCjeEKg9fsFLJUw3NtFadjCaAoBhTTg2dDVdaW7fJUQvx9XstHiw",
  "key42": "5ui8o5ovu8v8e3zzqGr1jMvUykjn8ToeFYyRDf7MdcL6weTm2ToPJerV1aGoEoDDhU5x1u33Wk3ee6WJpjuKHtAN",
  "key43": "25czpJacEB2GW4Q2VCAh44R5EnxaCFR71jHSk3UMGpFkEzjBZnuhhkdd9nwXNYWf1EqbX7LQV4nrYTFxrSihCzXu",
  "key44": "3rt2arXEufdrzrm7TU9TD5ciosekKqYwug4K8HByA3yt1gCAipiurWonphgdP39YaSUMiv8FBtRxXBHssSNqB4Ny"
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
