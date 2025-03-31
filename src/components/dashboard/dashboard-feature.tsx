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
    "2EJ7nUmQ3wXbz9TSzNwXm7rkER6BSvBgQqB6UZWAQmZTY7MHEFoZMr86sBfe3dBNB3KNvqSEo2fTgW8zBFZVBK6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241sYjrqReXYVfBsvU8iKTf8cKwR3da6eLZMjTAc3J9g7BzwCgy8A6rM3JbpYZ99GnJRfCdfCNgXXoUiUX1VLxHD",
  "key1": "3Ys5yCyuWYrN31T8dCP1sLrnYwMhftsXh2yvzcEcMnQMvkykYAA9Dr71Mt2ng9gQHy8WR7DsbX5c9MB3zKE57rm5",
  "key2": "3oeLQznhUK4zuNWUJgeRcN7qZ73rdBkbrb3uqUFQKpyS3xfYUCTQD8yFEzWHGoxdGKAFiPsZCpB6nbFrkJmJGy7K",
  "key3": "3D5kyyhUyzUDCpgRGPLThWceV6PMJNdSud1cNtxM5RMpkKipH7X9m3ixsNGWJ2zSactwXEykYktkSGxCzhPDZNat",
  "key4": "BoQsAtzPReBnVmWc1pmmzykg7rzP6diRYV1Y19CkFTaA6ZRKxnyM6gYuXgZbdNc7jBJvzMCwEuMpAhC3sC2D31e",
  "key5": "3FBcWWhie4a3DuCYFV5GdF2p4ux9DXE1bpiZJbQTPCqwjZtiEn6nBaFtLdMB6rom4u4nubomQA1E47Sq9wKRjqmf",
  "key6": "526R6xzETM3nJjGWr26Eks9AP5kYZp2ZQTJ7urKB5t6PxpknPkZTc21N1gsRe6EXw2v8eTrYG2nMNsei57ABo1B5",
  "key7": "2JYQ8Wy8tfpdXY91Gyr4Kei8ueBj3Si6hMxzDmtgJ3uSnzezL7Z9EQzWuPjmTw9EeLicbiTWkXLiptLfmg5nYJZ8",
  "key8": "4vPWCn8uX1faqEz7HncfTh9orh8tY8DLBq6DXdf2zCtFxV2kJKa4cUmiGr5C77Qc7ioBRhp6iyAZSoeNz5R1uG3u",
  "key9": "4VTgYmPgWNa1bCUnWk5DdDNsc86AAMx1G88v4iSkGC65VdoWyVmNKcDdLwL6ZKTw6MTHYczj8nE8AnPAiqjEViwG",
  "key10": "3KvPXv6KsXHynyqSRKQQvYRQS3fKz6zL7rTEUgGbSda2oEvUnEnkK76tLs8E9yPKNCZJuFPY6WMLr5svBDavYwae",
  "key11": "5CUcmxvWCWf3PiVoUVihqkGdU5zwXu9zHYh3sZpMUkWxoZmyijfhatRtJCNSdPjJJ5vQnqxd6rXKLmiHmBWJw3Vz",
  "key12": "5MB2MFj4dE5YaziM7tKoAQsnXdSESkXmG9HfD5PyQpSyqfwbWzJTkwrFgwc2z37UBeWLXbBvTBD2TCkcvAvteNCb",
  "key13": "4w3YEaw9s2WH1EBH7s4xjSs57hg1kWv4y3Ge9T3ZiuaocHCKBUPFujswi3Y3m6staHkysJsELKwPkmhaPzzSeEeW",
  "key14": "4JXegwRFU9mgGEwsq3gFDDdv4mutzzJanEYCpuc6oJx5yx8W7McVYk51Xo1EScsPUK5WjGpVHG1dxHHsapTzD6pD",
  "key15": "4t7DRxyykLCwm4xRpgKtBkYRPz65aJA8jFmgtpUzjH26SdipqXev21KX8mPJRtzq5k28QUYRzVtp1mM7HAFFzSpd",
  "key16": "2UGCKxaMUSrMCrTdqiuq7PiTqhgRs9LrQbT3PT44ymJb6cCc5YpC2K1e12R5eZoZY1punNSLUBz8QLYntBr225Ph",
  "key17": "Vuz4JAwKgkWzxzMzFyM8cFXbiHSrSPt2sszCNWx11ZKG47iNPupPcaCVSviY5hSbTSUvtbKq2vWKv3fDcFV2jpP",
  "key18": "4Fby2HJo8BuhHJ89eQeBCkMwKbSeo25p2FaE12hxgDRF69MwHf7iJ9U7cysjdWeZucEDdDwNP9cCdBN84MxY66i5",
  "key19": "426K4hF8FYrkfj9fn3QyFqixY4v53jjSn3mbUGmvf4jx9pq3qRqRYAsG3KaBN8SSFRb3kh2tJRvQUgy9j3UszVQ1",
  "key20": "Czz8H95TMu2oYxoYYkoz1x1xFDG8VDDDWehbpgph8FMr8XZ5nDyMsNg74TKVZHs7VrB6hvKywm36UxACVn1sxZU",
  "key21": "5qX52GbhWQj8tEaibVc2DF1UY2c2iFMFwki9zWwaepUjzsxzsjtZdWCzuTNHSXbSt5Jh3adai8Udx51rQeixWxTD",
  "key22": "USNuBKoRbgQ6X33ugZyraL3mhNpv4JanGk6XZtguhWg8ED3owwgSa3ANx2Qr2j8HeyvdTaifVk9Yanq6rvj1hNq",
  "key23": "5tG7WyMqcMvQJcWLuNzer6UCCBQkpq5meiUMMnLMwX87w1MPXWARDcr9zKKoZWwmPHwCovED5HMK5CbpsonueBGG",
  "key24": "5WrTgLWTBUSvTbfVTy5SycHN4NPCkVrMgc8hBGu4h4cfSaXa7mvE28vfWhPDj3fpoUe6q84j6PLDwiYJwWqPtZS3",
  "key25": "5yVCgwbMNJZ8ZVDkt3BprtuSXHDt5jhPAESzdS5cqTyxEnXY4wtKQQUrqWqvz6FcRmkqYx3dkgKv1dnsSP3ARTes",
  "key26": "25skMQNRggmz47Y4dYtJXokkq13kWHSNFtZZ8vAqZUFXpVK6TDvncGyYXKvP6zwRP9JtyuJ6Ci32ZvRBxNEsrgrD",
  "key27": "5r2TSh6HinC36JJ4KhWpFYsup4RhHVRWJiAKFfxVXGW9gVd5mEXJ3yRoEhzDU7T47SktuG9XS4zbZ9BpQBbSW7K",
  "key28": "3jk5Vu7e67PbppozZcuQiKsUbbzRssN2vDPPfeJGUeh58gHhMXxGtXxFatSN5W31H6sZj2CWdrRoUpi8KZAgq8Qq",
  "key29": "9uThUKvLhcEjF6XLMBL3iZxPs5xsXgjGdXL5dXwff8sy4WzXgUvmfvBcUiacvS8vNVTdCDSnskHCQjLiVPYrqub",
  "key30": "5N4iJpcu7DWHDDuriacdApJ17uh1GPybbt6LzyHQPUjfJRAs1CGusY2fvXMYd5nJcJ9YDuKY2waxDe2vSsv2zcgJ",
  "key31": "5jRpdeQNbuLgNFH7BXPCcLFGaZGsB7Fcwq9cx86pAJQUBT6ZHD5PmXS3ScBUz4tmcK4KRotNBKNfr53WVzk7MBgd",
  "key32": "3PGcACgsAwnEdnA7SHuSqTFg8tzevmRHwvRnUHYRDAoMnd72Eg9ZTzvS99Wd5zZZ5nhomSoezkJQ3kABRY7ituMY",
  "key33": "5A9aGcYDcTYWxSkKAUCaRHZPXsaYTzgTBP9S5ohnu2cG9jTYDCuofbBTM5PbuyTja12bUefvcdC8XEQEJfrr9Mwf",
  "key34": "3AJNgDZdvHhYrRiu7HQNCXnCnQarQVZ32qcvbSSVXfnnyDjTdTjH8shDyrZ8U14KPmpBgkZppjrkjaYaXhJNEfjn",
  "key35": "4uL58jiX1upynSEB2JGuPr7XF5kLtKazeVQi7ms7p5rskTT5r7pi9jDKqFAaDwCiiXCW4KdMrF1R9SKrfEMk9bmV",
  "key36": "5Jv1VSajrknMLh3X9jSdAUfJMnGMPnvXHqju72G3TCQgtCx57jFVr3JzVafG8iVN7UyVm8SvRcRHvP1UgvN2nB7M",
  "key37": "3r8HU1EGL1NDFqA6aSk1M5AstBf1hPbZknr5cLCPZJ1FS123Jie5magsrH8XYz5tbdwWdeaEoeT37rDLv6F2A7jZ",
  "key38": "3auv5C5wnYyF9uxiojmbRVwcBRsB7h1dDUk1GeTLQ36ebUA5kgzJwf8ycGJL8JLiSHuQdyWVLW1g1STMtWfxHaQs",
  "key39": "3jnJgLWwiDGGaNBTYTd6pYf2kpXSz8iRe92wv1AgTmooXNfDaGwwHfEH7DTN3GbpP4vteg5ViXuaDdAi3n4DYJAk",
  "key40": "3hdE7s4ERxKA8enoRKTMFbb2qX29nE5h1nLNiihKMVdXSnFiZasoRz1Z4WEwcLuz3sUxuhAHuhpd3WD3A7nRV9X7",
  "key41": "26eV9fSZHzpf8HW3Q9o9LbcSBHmi7B8CUqH9wvKyUSoeRHSP98wHcr8spXQvHudrFBsnCQVLouC3r4o64V2tRWcL",
  "key42": "5oKtkdMghL5A5aPWPiiFphCkoA3AqniKLYpfrCSrv5jB7XcU4e3XMxJCPMqz9WfwCCZi6BFnTALEVx2JCDGANZUg",
  "key43": "3prNWQgDH8txhdCqZLdaPYQQMpF6vT8Wfu7ckpxTuoctyFHowJMQ5tABJZHdZwkmix7bSRCRfL7sBB63fR8js7Dp",
  "key44": "48vvD7pJuqXRgeGzFUsnCsJ9kGWqzR9jnBN2NvjACPWtQM3pUGYcf8oqfG67Y9Nv9xsiAGe817PJRJ8tJZZ4dn5C",
  "key45": "56cLoxArW56WMpctq1pyue5MaZ19Xnr7iPNjJPKhgJ9sbY1YASpohLu495vTyiNHkcZoDWkpygmLBKVF9ARMwiZf",
  "key46": "5hNM7ud7kUvnDTPsAQ1C2EGam4iv9zxihUtc7Qkv6uU62y9fKcoTMFsyuRRLMcdGv7WnpsaqnGnWstZsA6PSwK6M"
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
