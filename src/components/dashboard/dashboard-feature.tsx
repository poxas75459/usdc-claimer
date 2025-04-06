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
    "PyRTxbXSh3LvvBPEd3kDLNw7sENJo3XNvgGgonbjhyPTyBa6vdfRcsHtex3DYRGzVQThr78BgJSK34co61dfCPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yVyhAnTz5v2JiJNpsUF7LXrMTUytDA2GjrXRrt6imHF9a4UooctP8k9ZFhNfZu6cvBQTfE1eVpbDVxSYfKA94j",
  "key1": "3dhRfiNV7xrjGPT2ceheVzD8VBR3ps2NXSX71vkJUxcbniaNoQM9T7WVyvffqBRpFHAZoRZuDV2fcKabe7M9A9CM",
  "key2": "sHBSjt6ydceTzG7TvXvaGvADmeSVNN4mVZCR9ZohcgvHXpive5XBHFfhbdjBjVTfzJpNXNJr9xqgkDm7E2CwLRg",
  "key3": "4k6yjxWNftrjYZ6fpSCzbmZ27DgsmWpQETmcBSzz2M32Vwdq6uJSRYf4mgMjKwYTGADdBsUMkFfKnBhudZ9LW81m",
  "key4": "2Pv8xj7Q6YB7Mvd32uXaNjBr2hXWvzKMkZLuicKLreyPme2UvFWGNMg8pMenjbL5zKHw4zhnh9LwXqkQECJ1cQXV",
  "key5": "24bV2BqCyzBgSaq8bzVJ2sxPJchFj9NsaZWq1YweiNpKy6W1irKk7xuV6QnJuYHSPtJMY6H2vPtrrFx2xeKvjHTZ",
  "key6": "3zc5ZgisosY3bAs6oziiP9Uqh6VEV2oCm7jvcwAZKgUz4mVYAbPTLd3c8NdXLjQ848N4DCucHq6XxUUUM41xLVeb",
  "key7": "2hwXf7Apw9Bk5qqG9BKMFXuon33djaJcazERnHrDEc2razp1bC7U1f3kp5mVpJP3CnU6nGgj6e47XMNK9f2yu1Dg",
  "key8": "4i2BAdKnqSwnuQb7WAuYwj8Lz6Zsv3DGEnMDrhj8QH3hd8ru3LVCa76BdYpPrdBfJMe4cU7rVVRs7ezPJdUPugvt",
  "key9": "2Eq4GV2aW4JWjdxPYenhRhQGntvw98CVRB2HVies3gYFyDoXcnxRBuwkKaS5HgqKYg5wnykVeAud7Rhdi5LeYbFj",
  "key10": "enTRKgUvV4MkZQC1qats5h44xaP6cegGZXzD6x5pXqJZayUWnfpdhveu2muotpdWZdd5c8QTAYQuN572rUf227B",
  "key11": "3LkQFeX8KLaYgeXiZ99DRh7JkYPvtpy9SmBfV44CqefR4MLSdHmbVnwExksu8qn2hfVErT4NewbJMKcPdwAeT9z8",
  "key12": "4H2AVWippoA4QB1qCfTWhZ3rEX2HdGJjfQ1vsctL5t7MNCDg5BVcUiK5fN1NUt1gtyzLXWZ7rSVEu9RgWLqooYUD",
  "key13": "5a8fpaCEyTifD3r5xCCVfS8xVcLKQKEaJWuftXGqdB1tu8H4i8Pcqri2xVbEYq6vph88pYZxB5eYb5HKnCwheB3R",
  "key14": "5jvDqDykWYfX1YLPd2ABvPQgAjh1S3uCDpX3intLFEcrvDFfZUKMxPiA7sDXw7YVHSSJtPycZiVzc43UtH9jN84c",
  "key15": "21knphaPNYaSjqothbATCxVA6NsqUGQ5yiYEYrfzambTBB4frMkies9TdfY3Hk1FdgyQRod5c5CG2XffSyBfXf6m",
  "key16": "4kwc1DSXDFgVi5RVTMTHKqnTRN4g48ugmmcCK1wPg4wGdZFNt36xa8LKyRwQwKvprityggyDvZhH5omkwD5DPhMD",
  "key17": "3uQUhXLoXh1PzcFUDZmbxrDAFCEY7Wa3cNqBV45SVrDm5qhRgPRnStgwd3zeE18BtZcmx3ohWK6Xh6QYHsJYeKKU",
  "key18": "uukUjaHBAJdiu6HXVQcZn2ti2qm5iV6Rr7fXiQ4xuEWdpvftiRqDknDpjfXN3VmACVLocmCpRMdsbwoheb8jiX3",
  "key19": "23zP1KsjWxkiksVw8rRp5YoA8gUspqWKyuKDK2sAJC8UADynTUGGSvqSCqZiEz4tLE22GEfaxCZoTdTSpwHuknYs",
  "key20": "3W2oHUgc1FLDhJZsPTWzDJWTRC7BePXMSWtA2R6RzNjhD5jSWzqWJdaNaKzFQNMKZHaTfWwHRXkNGZK7heMmAFJ5",
  "key21": "A4cAXiKXNv33u2Pq6CChy4gJYMC9H9tAbGoxqVi6tH6FwZFX26HQy8Kye8HMtrJDeFKpVt8QNnjuC1ZJHRyGgYd",
  "key22": "2wEZCGDcfK35keoYp9P1RtAHtN9mJ13swK7hjGqJPvytL24hjCCP4v1DttAbqbHGeBKwRW8EzNURqv86BBrkN92f",
  "key23": "4DRJXLVBFCe3WgAHysAgfp3LhGftw1H5YkgV4wCS8bS8jUW2Qy8LPs9HFrZbuAD5uTWbdDMEDA9gytsUbFCdaLaH",
  "key24": "2wSZEQWnuPSsk8MiQFd3nfqEPcDabX5hnREaHozvtrefxJxY45fwhFQ7yPCcoRDAJnPwBmPBxHFsu96yBU2KSyBE",
  "key25": "3amqTJufWbwCbL6ru2vcxobrJBCDXxasCJ3eP29Yv2v4qGrYjN3XDUPhgKF3d3wXLF6GQDY31v16acnWdLNstqzU",
  "key26": "2LCL4pmay4YmCesxwieYLYh5YgKevSdzHXPRJJXHu5kcw8k7gJKiKL6MSDjerhDYq54XZYDPkck4YdoiUQQmCW11",
  "key27": "4L4gNkquy2gNieEjCwY6ynWrxaLRHiCe8hcb37BvW34a4ZYnL1T1kkEfCLjcQDxAMtap4gVhZEEemZ37fyKSzhZQ",
  "key28": "5W7wFBcL6Cq7qkTvDHH2ZxnUpLm9GeJQ7XzSuBYHTTb51Te272XaP3rxjYbVzHPDgEfhsZWSUCUzjUyPATS6w3Eo",
  "key29": "5HrPzhLc2G4BXKZePmSuLWBsurRrSbyCuxRKzHfFBeZGxjpsf8U6vYGfajZYfkfHSYSxS1nftfXi1GCLDjbcoWzp"
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
