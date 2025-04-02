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
    "LuLK3WzaF43nV4xZzhyVKT6hEwN4DKwgzFVVD6WBiZajA3U6fxTNjwLk7Sug7gzHF2ud1QCk72FGH6gkepYG34w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMXtGDXURrJk6kZBe8dpXgtjC3ggp2rMD3Hh6ijdXft8WsQF1UNQHgaRhbVawNY5zy3eVVcBucUFzXVkXM159Js",
  "key1": "JnDxw8bnTPoHAtGweC2HEcMnPs3i5FTs7xJceUPanAuUKdF4Fniq5rhpz39U8Mmb9nosbgzjo8wkNDKMP8xcpvJ",
  "key2": "4CuHBeJGWpKmY9EkUcUr6uJJ4CHcMfQTyWUm5yWBeusJkhLoFh6X2DhfkGmT3Aw69Z1A2mMdXuJ2r3tUP5GB2MYA",
  "key3": "4dPs2K5FQAAdp4QFEA4FCQ3W3zvkJTJZBYTYKu4jujjLWebGTRZYTCzdFKEULgQ6SDSCKB2k2BWq16ct4RGGXo96",
  "key4": "5bct8d1f7Ey1a3XzLwrdUzAKcEZBfwxAqBHX2uXaKqEmxiHMLBU6xMZv36Qd8yGbRCYU84hi8Z29sG6WLBoVqX9s",
  "key5": "291cUq5U3Vgskk5pUfP1vuqARLK6VDFHmUHUxj7jKrgXpfAFLK2gAmkkdPpweLTsuahpfYYHoYThckpe3PaPSrZH",
  "key6": "52J9DzFmB51GZBGvHECQMUKBPgqg2ghcUjYXsaksRnMbgZWmQw9KDL2V5oLWbwWAPDfu49MWZpLDTDsB5VihJRhm",
  "key7": "3X5rcHd13BUhP9Sjc6N7ab3D3YR5yQL24F1cittyLHF4tK7VMgNXL5LovAd2rSJdJgRJpd6nCLaeDYN9Qj5MUpNi",
  "key8": "23BRFPqQwnVHksLJC71CgrtSX91mM6Bgx1fySEekcetC91cWdE6Ttbtr21LiSq7o6ZbQhFTPGztVqE61QYcqVZyK",
  "key9": "2XYTns2dKL7qBr2RTmWJjntV73g35BPbAwCWkmGz2tGJXqqPdhNq22K5YJJXWUUqHGPQi4BpkTKnVQdgL4sSg2Vu",
  "key10": "3jxLp7ZRVBnKP4udWjerauD52S7xv6joBdSABiBcaEeSL5FLdsjq7xJQbn8yfwScLfotM8jR1Je1DsEXh8jCpDuA",
  "key11": "38BY3SQT8MwfpLPmFvZyuWCix9VVEdrszuNxbgWkHL1BKZXfgiBKAvFD3YGMchqc67bVdZtpg55UEBrraQiUb53p",
  "key12": "4pJFa6ms8PVxRhwXgwAGUqUUDsHJwwxAdJ7cpEobZQKUdKXtn8jPpXv3ogJ8D55Ess3cAoM758K5Y8fYjn4a6MdU",
  "key13": "KcjHHhWE2TB7rQ8awDne1h5tNs45VY2YkdnQoDRYJxAfU5p5YmkZyJTBByC581G8spnvi9K6gjT2qkCDCW5mNMo",
  "key14": "3BjWN6aVWymx2aZrw9FmaGbMyLVuVKG6iLY7sGShRMMxtc5ihLYUW5azEyTsK3W9Guph6SN93o2U4k6vE3TLqBRw",
  "key15": "3c1jEbJid1mvmkZfNFgbqtxSRfyF3CnLCorCXFLxu3Aki9xZ2expeo4q8KVZdVjkMo2rJjJ36EqCzm9CdDdS9P5H",
  "key16": "3dwehjDXximPawr9rVbo4qeL2FbaUR37Q9s2MVT9Pf94amsWmtN1qaXFFT7HXnWJ9WrmLRMoiYwNLM7PaEmJSgw1",
  "key17": "f7MetvSQzfh6EzoZNysut9ixHCdfzsmV36cak6uyWzN7MVStucsiGsMkEKaJcrN9bNqUQnRJoT4hpqC4T6Hbp46",
  "key18": "4HtLi6UyWSgzdqxDBvytPsDZ8CLceNZqsN7qsp2rHJe1DQSE2MeoPAs5gGR9nDB3YcfPRDPKCBNZxNFHewKH2QAE",
  "key19": "2o9w8c2XfMSU7AXnmVFueSiAiVgLJgaM6tcvM9mreY8Lo4pWfia4fKn9XEFKw1RRigFd456W6rw78j9NKnzduagz",
  "key20": "3k9HfgNMr92L2GKSrix66vb6L16aLUumccTAkFDBL9yoaZArxKecxzgFAkM8G7A2MPDBjxSStozYYKkGXFEaXeMG",
  "key21": "4adx2H73Vxk3sMVZQHtN9MmZfeJCzb61PvHTSjDCAovDhg6EMJwrpgycgrpGKAVSWJxD4pFnBpQRop3BtUXB5TUe",
  "key22": "3PVVU3qUUhXtonDvmNz1inwMiw28iqpdTAUkK42QeAAQyNpR4rFedeGGxoBvz2QapLPkfTy9UE6KJMudPPtiHxxa",
  "key23": "5m7Z7xC13Kidw7ZujvgcFzVxZhyRW2XuUixoUchHuHjf4Ls3Eftr2A9U4CQ5kVh5eghYB9mDrcr7hTqKPAHFzTx7",
  "key24": "2Gjxn6Xhyvi1JdgYGJdujh6eTnjtAtwq8rRWTbDQgqSTW1BVoaFxArrMm1KMDLQWUPdhUpcEWBnyYYD6v2cvgo1T",
  "key25": "5MWWTnA31nxzqodgB5yE4vL2TpAKD2EirH7WJfATBMT2L9VfrrX1Vikzm9og35JiDdF93Keva2ZGFqA6VMD9Qwg4",
  "key26": "h5rRM4gyfXMnypvQnP1xUQzbCCQo4u7JushZQxJ5CGmJRZmo6sodm1oWdQnbLNbeM7NQXwsLDoYBFAmsqyapVfh",
  "key27": "55jV6YBDp5nhBT5JMPu2g2eb51fNoMQ4T6JPEnGJGuN6VSWGFERy8GkgxgCsaMUJpMMbkkNQtL7zpAsBtKJj7ZaJ",
  "key28": "3Yeb6qYikhxT7a1XMHpT1zqeWykguihQMxNWhqWj6xwtosVwZ9DxU4CCYDg6wJPW8UKiLV6MvuugdxswYk2CtBiA",
  "key29": "5pv4dcoLB8nh1i8eBNhfJcuzU5cz7LBpNCsY46tWQXRygb91xLYc6J3cNt5GotfSQpYiXkVY6k64GaKFwQov4VF5",
  "key30": "332FvjB2psjm5ysevuLJrX1aVVxtbTE6E5jQsMrzNz2k3gEmDan8bPS2W3rpYS2vigqWXUriSrXtipdDRPtM5NgM",
  "key31": "4Js1DgFtRtwvQfPonH4CJ3sDYKzVNTCqEGwdfxz9V9efWkSKHMwJEW2sRMp42CNK1mCLs8s6Ap57q3CFKQGszAbn",
  "key32": "5z4xyRj5y1EVgAe22gvx35WQH9ddoXnKi2Y2Kq3xsRpxAXcPZj9JZsuU5ZHoVtKCDVpMDQ7DwFntkGaV1jw8azkz",
  "key33": "4Shfa7qD6HnqnR5u9JS41TJ8xeQRQVuRCQCVQRpxygD2yf6RgUdyhQGvUS31zacmYfUs7vQmAJB7PFRoM6tfSjF1",
  "key34": "5Q2uEYv4TuU2cL5czYmbkvKiJYkckzihAsNPP8ppzLxyQ7fWLwmuxGaEYCDdNgrSQxf7aW7A24HWvt5JBiSDqF3T",
  "key35": "3ybAEGN2P7JvKYpSK5APNyZi2VC9CCKrWoA3PiPyBMh6WEDVgExEURjrP1Z8RcJXjwV33ZkGXnozSsi9ZfKRjSKA",
  "key36": "5V7jho3thXafN86R9aZaHsCpo5RUi3ASxBQSe3pumNPfv8GujgTM9HoydhWzt5WZyJNTQnEDqkvncAFEySwF3yAu",
  "key37": "4ebLsoTjmW17BtGKnk2HDCwguuhxbLVDhN8JSExib5wLP3wP34zGbLkNmnyTMWXwwcp6vJE8CNK8A7cko7nG845D"
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
