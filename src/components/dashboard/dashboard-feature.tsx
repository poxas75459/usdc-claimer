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
    "DyuYhomFksxTEFTUpNq5AWmHxpC2dyd6XidqEvUk83jjFkhacHCuxiGwN4xVyqK6jq8hBunmMmNJVZWC28SJt65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQaWCFWCKaHthXsdqFAEU9wFALEanCY1SthkFkeniKAK91A6E7w3WyCuQTJuywKaPe2b1egHtBeimZjBMpwfwKN",
  "key1": "4R1fE9t6K4QJsbyf7aLqCNBib7UouzZiuLUAc6S3a6w6rZVPFC7EDjGjceMFzBn3GtkZWboRFfJv8hKc2ZGwJPmG",
  "key2": "4r6QD8HAzF8AUESxbKWbCoXJgaiQHFNncBEXJPHJy5RKRTkjjWmNRoGTk5HQQCA7Cbz9oxco5hACPWze5sbbS4Z7",
  "key3": "3kqNTkFvucde6kUVnwAzmqtH6vUby8tbneAZMqUc3RdoHAiS14bD9dzMsNgrQQeCRz6YuGH26TR7Ah8q3CKT1zva",
  "key4": "2fJUvaoi9PxogAtECgGcGSy59n7gz3dpD9AFV1fctGKmaiCNu7aRjsUL84yqYb4Y8JFSVUdBz3p2XC76GdK4hF4W",
  "key5": "4K2Z9NsEsygn3gtRsUCfbvj9ri28zJtJXWmDmxQDtiDw1ubWtE8znfhSvmHe7Cvki2ysPmS1zM9useMwWDkmaJJU",
  "key6": "d3PNaytpa7Vh7CggeCbPyZL9QC4J1t35dxthvUv1z6QNB4r34SrJKXKY4jwLy1ErwJhyfaUuGU6cGBsKFa4sUuq",
  "key7": "3rsrh8xRZBac1JGx4AwxHGwJRJVnmjqeCPC87ko66BP3tfn6LvPVfDsq7szHvigEeoV5DeqyzWQSyipBU2tSkqXN",
  "key8": "3GajVghREfnw7dM4pG9oTD8ziFv2jkyBVtmos6Qy9ap4Tkj76nXKfaViPK7MCQb92hAdqkE3zfF1bUtTF9dJZUJN",
  "key9": "2zvXrNPTpM3KGDDcDuN2DTgUA6TqmitN6UPhxtJwEp6vpLULcTEbSSjykxsCF5vZrixCybxWWiUcX25iJE6cegH5",
  "key10": "5RGg3gMsQNbqaDeX3JFZDapQ278LvevquU5cZhQbcoZ4JFqEuZA91qUJFcQXLLLCN3QkgogwJUgD2em5VQZytF7C",
  "key11": "YhLctC1PMUczxUyFAu9UqKhRBrB3U5XjsND2jHPpMJ3XmEHPAs4SfZ3ibsjEPG8WzrfFYL8WrW3yd9ew58T8QpQ",
  "key12": "agmr1Mxd6SMnqk6JYPMQ2muCZvT8qw7KRhogs74yfKJsWLoU8gu2As9D7jMAc7JCXvKwyqXNrmdxKUWd2sQJ46s",
  "key13": "5U2erkP2woAPPTRp12GJSZ4z62tN1qJCgZH51ifty3K9hGPQikCLeiPYLuj5HwAUdmEHVX7TPFozVGfXeqGVxkRc",
  "key14": "36Pi8e8wQUE4BdtqG4Sr2NyUZCx9QK38tC7VZTeyH8S8ZNbcHT8d6gMacqRaUAaGSJkKqCRBHoagAtLbNAdqDzbV",
  "key15": "315v283fjjP1hFrm22mjNt5BfzoLXvZSCm7stQ8CVzPCiJKcDEfA14vNfzX2eZzzsoELBNT8h8NidUyDw5tix8vE",
  "key16": "2aPHPr9iXYidxodRxuPBTCkVpkdh2LkaHegn6KFAZRffztfPXW5YtUuRnNwxaTsws9NDM7cSPt29nEKKxynFoU5Y",
  "key17": "35gmLu3X6sYgd9otMu4JYmkVmET2SVsiwYkYk4sTpFAPrXWyocs1viGJz35LEju6u6RQgUJ4RZTaaeBeTtx5hvAo",
  "key18": "5BVNrNFwqVnKxh68AboP1p6kcJufnsNKGtazcNi2Ssvb79WJEW47KfcuKWKACShs4oj33Vi4pqKeGimYKZJkAKJx",
  "key19": "4fLL37ekDUv8HtKLwtJZPoBcDafbvn8esdqSDPBqdXjZYZqoLpy2qVfFYU9yagT9Xrijq4xVMETidJr9gTLDHmVD",
  "key20": "3vRnh8RDx3kCfetv7tnfqnciMjVMF1nCb1v5HpypiAQeiqfjQBhMznkYJDXKkKQdXi4wf6stxEQR1zr1b6o1pcXK",
  "key21": "qrSRZiFimLZRSwHiJciWh2JgEbuEutEvu4TKdRdKvgvBSFsWBXtroMn4zqHsDCJWrCN49zSHc825cgkfwg6cgXx",
  "key22": "5W9VwvbF2QvBFXpbvgdZUdwYA7UFLs22N9nfJww5aK8EZYeNpHHgMRzKseaanriCKZcyRGkVmdFx3B61V2jfktMv",
  "key23": "teksMPebN2NxfXAmdZNfFYn76NsLAKoHs7oSyzLEH9QgEjBeVfG7dj8NBRNdzAifKrt5LPZwqcnFh7JNXnUvY23",
  "key24": "3j8a3FwQ1uwWSiFuADvWSnZPrK8PMW84h5Ejq2q8joN8igPpifWMUwdba9oMhAoWWZtBE5x5gNRtUrxpzwEhk6GC",
  "key25": "3gNCNRrf3dGrM1k2fS1EDxkGC6G9xcc8JYf4cftAXwtVQj1ETgo9yvaWi51SyUtQQAG5w7STijxEPAYRHeUZQvy8",
  "key26": "5ohmruE4sSKj9g4ggwCZzPpDBUKBnraS9v9VLKyYpTZQZRBjLgWcTDf8Z56oNJ797rvtndiU32WXARh9ScXwCGFP",
  "key27": "2PyChsL4aYxrn8qp8BJYaZvqcqFPQVZzSMTXETjjUupEmgnvJuzNbbZBJnD7ELue9xCKthQdK8Z5x7Y8Cyz7LccY",
  "key28": "4rud6DM5yCQjT2sebdYGFQNFeDvgJQ9SLuweexDdeG4uFiur1DmKnMhaiJZMgAfZrji2Wb4E7tLjkD3UsQzV73i1",
  "key29": "2FuRhZutscpTiMPLtWQumz66JxQdsTsXzDpb8DesJ1a4aeu7rAr9CH8ESArH4ifAQJFbHZLf4vSmcMgFTKZy1jvK",
  "key30": "3xi6GHPTYpoa7pAo5fwXxWTLtBrtvSFFpNm9Zh4EgymriLdpDUC1M1PXGqtajMMsAQBBGtaDAbv4CtSiSEyiYdER",
  "key31": "9aet7j5z5ECiJkYMniikMcH15yw9Qr8YJiXqgv4RRVubxBCZif9JgKVp2rjpFabbM8GK51jYNx3r3TDjQAovf22",
  "key32": "5UEdL6VRPmr4hvgDC8yvHZASMztgzHHtzQcmHkKpdrAq9sQcJdut3WCdtUKvvZaw1bhKi1Y4pxteDrqNEm3GtZr4",
  "key33": "2NTHjEyz3i9thwtAup1MW843i9rn73HtPV8tTDxdvMQ9iJSwTsjTvVaukroJ2LtWzK6GJa1Wd96SWjyM8gcjjMa9",
  "key34": "3D8ou4DsfYktd93YyccQgE3DYRJDoKqwuUojBeMSE3BWULVFiAc3JxemAxW62uivdTxaaPT3VLDz1SKbzGQLvZfG",
  "key35": "3NsHvNs58g2ukRyAecc1pTU5APGXHj4h3HhNUeXZF7ckFpKxuMxEyx6hgYcMmdKvAfGcYU8H6DFVKnaG4E2ykj9Q",
  "key36": "23eCFZS4qzuPrmbfaUS7XKg2D9tUtPMhXjSGevUCdmQoRrSPctj4rmej2VYCyDJp3CQyjnafRs7nKSudQ13ifaxk",
  "key37": "wFd1HtdJpeD8KgFTvpMcDgQwuJ4UXz1fv3XiL8Ngj2B7w66gP5r7BGagtJM7a1iNmmQweoVuAinnDEU9kWA2k5r",
  "key38": "rpxrxiDcHRNAPoWAzLXrTysmtYvSsBzngrK5xjJu47UPJgowSw7dkjvammus5KhZKMnb4npngA1ZcKuyP1RbaFB",
  "key39": "2BK9q2LU2g3wJvnbNZbzarEPv5QnvXrdJquLyFTGMsbynRRMmBmX87PEzX59Bh1xZPBknLHxviJhSZyLYkYCkG3d",
  "key40": "4XATuEvKsoV5dZ6EXxSuofiMZgAFVBeCV6k5cRVD89vW93V74eTxJPKZshLY1cfrvcB2D13DiD7xhpntdQPCsYpn",
  "key41": "5pDP2oY2DJFkReBqTWtW1NfkGyjYnrgsrnH2HdJQdZXL8rVXMgJeBT5Au7RczkokUbNESAAwJVFCxbwvV5XvMDZp",
  "key42": "2K2NDWJ8TRt4SGFQJRSDSUuGfxX7YkggFTwCCHtiFyjsvxMnAiQgF9cLRufGEsRA6xuuRUBVMzTjCNF5mectZQ55",
  "key43": "3gzaAn4oadqCKKaksPNrbya5iMEaB4FFk39HBHBW5DsCZpd4XKZrB556SmHPS5sxEvUEL8Buins5h4TGA4N12A1i",
  "key44": "46iYvc69ZXwQ6Mvv2HHGVqeanqUUJyMLqdkFADRhr7L14uxu6UMbBBiCGXDMSyRgTNtbmgd8RSe3EMpB561kg2Yy",
  "key45": "4UAJvgznS9dJfhj7zRFA572hUZzDwBJrBuGiHhhWesNdkqe3xpMCWm97QP9mp9H3F4MYr5t9YS8z1MtDruPMjGFz",
  "key46": "5WGtX5g3ZQaQzGnPDLpSkeKQT5eoD1jj5YTverSfjdiPdfj3Sosi9yzLJWvUyTyZdN8pCfExBbz2rdiD23YmS274"
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
