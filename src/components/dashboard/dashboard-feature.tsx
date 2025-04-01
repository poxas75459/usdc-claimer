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
    "HCyrRKLNG17yVGMUkFyDKfjXVHM2PVDzVPoF1YZRwzbGgUZe9uwGohdbtgf3UpoMMfSed8ajiNN6Sy28ngukxFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "766kjRJpZBdbNLmCURoWHtXYYcb5on5NaYDXGv4XBEnYvoZyA1FHEDXnCfJn6A362MMZbDa2MzE4DuKdH7vRmzv",
  "key1": "5ZzGDn7Zj2tWhDB9SQTvUBWKkyTxkAcduQbndNhqyRgfaRrCGf7fatQ73wUqh8HhVEiAeN8hxiTHrMjvEHSkDwEL",
  "key2": "3QJ2oBg59gwUDmktFoevzJL3je5tRtygPoDfTVJAzH4M4jMrtqpymKisvN58WGrRzFzcKxr7RubDzp4LC3cP8rA1",
  "key3": "4ETHLceFRPQX99WP9RgJT71JypU3WiwxjWXHQ4fUGURXDR8umiRSwXuNYB2ycnz95dgYLEs6SDC8hbQaLDMGQQ2G",
  "key4": "4JrXoErSzRe7WnsbV1ZStLxYFXJfCk9EfEqu73Y5CEVYDE6LPi3vMaYDWSJUbmsQf6XyFAvj4k9Fn35nZV5BSLcp",
  "key5": "2i6bFDf9nzfs17doXyS3MXi9RVBuRjUQJA3y1mbRbawnYotqy1F8jY4tftagfYwRAZQyF9gYTSw9PvqsnEDvfYM9",
  "key6": "485KnrAtAu6V9BtntqtuCqyjofCGLPHgTYokGK8xwFXdGhm785Bngkx8JCYJStFQHPrh1N2LaHPD7amr5ZKeBoXe",
  "key7": "2xsfmJjxwhob48TUDvUZLeoW7wWwLB7sT2J6Zk3UfzXLznaD6kY8VCggYysWx8wCSZmgVqHhRdFEu19gic12TbiY",
  "key8": "4zxT79kmkWNSgji5x8yg3XzsJjUwQZ7PCACqNfeVswxMnNaKbip8NTFbzq1QifmU35HVgEeU2siaAcmVYh1qzSw7",
  "key9": "4VH7jKkfzHTsQ4KvdURtXEj7NNMs43n94gXAUDiGEg2q7Q39mmKVteAawDogHGn31DXwkmjB1JAbsUtPaD9SZaY9",
  "key10": "489vEEWZQGrb16Y9BzXVu7aD8KXFpMGQ9RVC5P43EiCvMg7nJJLNmjtfuHy5tPVg42FWJdJxseiSfML9TJM4hogU",
  "key11": "5wk8j7ymAk1CFELftWB5K6Ga1iHQCw8Jxy6X3a8nwdjeXpW6dbLtWWK4iwK2LjL9nwKxZUzYTQssQ13Lx3Z7Pro2",
  "key12": "2NaxocHVV4tL6xhByj9nPNS5Hsg6KA62PSEZMpE65nD6xtkGfA3Qzi7AXWy4dXVK5WfHL84cJZMS1VMvg8rRAAQf",
  "key13": "5NK9dNEuTgZpDhQg4j5kt2qDswg82kFdkekjN6io6XPQuAYTNwBQsU62DfXv3tNXF1NT5LcmFb3sFJnJXuWzf4Wm",
  "key14": "3GRqPiNk3yF3v3osF7N57eKtLepq6nbetozqLMr94F9ge7j1nHbNtY8SWukMB8wqwP31GupF42UTyNGVUDz7nY5H",
  "key15": "2oqdcFXvFJn2HXGN7w4BdBSdSAnfYSsncEVD3bsjtsayhH6Ms8g1WkpzBeMcxjYWqNpwNjsBQVazuSpsVVAhNty7",
  "key16": "22k7BcSozuDLmHAiAgdtAvNuDPiTfYGqNxazCz9og7iFjivwyo2qPxgzauRh9WLPqg3AkPup5U7KkZFn3F87QwQB",
  "key17": "TzvoXmzjCtF1yjB6AAuPKNw5beMyCW9ZJzFFY4cuWT2aDgUEGynQRnnKE3X6D8zKad6iAXGAPc91ZPW2ZKEFen1",
  "key18": "RAXhFT8hWFM6xpCpQNDrDoYf4nkiQEGUBvNh66yXS8gnfqsKuEzL9BFtznqewfcB5X5AX1xD1qahVBS1Kk3kiEo",
  "key19": "4ovDkgyKB5XGvMKJi2vqCdTKdJPJ1QRTrPVPLBmkeBoK2QtupR6jnXZoirfHoWapcM4qfuRSbUMPw7MiRpQCBzNf",
  "key20": "2XKUNQjQqTwqWRN3eBJjJ8Amoufu9Qr5faFiEEUje2gAScHnHrjq9mFTHgCeKtEVdFwPAp8jk5g9FPpE1dbVdnME",
  "key21": "47HYSoVXi1LJvHiLe21buTDVpHZmuy9FsRPKZu1qnjqequhtpH3yxLLEJhKEvYkbbM4zGTBxdooKtinpAYHin55w",
  "key22": "4PKMP7HVq6B9iU9UbiyzE5vbcUVv7BeGK8Wqw9nX2J7SAVrxDEX6T4mchzgP2RPYCmwSEw74qt7K3SchtDLJUJyX",
  "key23": "3JoBQJsFJd8UEiBVUHiUyVoDaLqqkhRcKvwvvTyL5bPH72vWygrfJ4UQ9Wjjh8mgYSL9o4agKVErUFNHE9JWxZ7i",
  "key24": "64Y8FSDRtR6mRfuYQknP9Wje1NveWzfAnNPPx4bvCAGEHDuouspByMELXJTnywxqgb1qWr6c6wt9goshQy9SShVw",
  "key25": "4DTxTN4ciYY35b7g6u6AYdmCoY4fsqneHoP4tNF12FqYu54f7pYfAcGB6AX7zuzAsWmLpqx7tDedKXCw6ZJHfDgB",
  "key26": "58wtTEsWYfKRCy9dpc6ZU5TKtrgmxaGaUic3biK5KsiR95J4dgom5j3NCcHGQ35TznzLtK82oXkt9qoT5QxCzWx3",
  "key27": "5xQdE5PDuahY9CaDWdXw2iz9EaxMZJHECbXA5apzLgbmJgykUzUR3DmijCnuSDYquCVqwLWYKH13fhEHqyobxE92",
  "key28": "Rmu6Y4nD3Cvszu6my1dTRHiFwGc5LkjyvV24mUFf6woyU17C4sMSLNJ42G6gfthRFfsGXoWLK2mXmB2gUhp8Dkt",
  "key29": "338KnWgFv8QcQxN49QmDGNnKvM3hxRiKGvRpbH8ehZsCJgvNLsoYSkZv28YtMhm59Vh7WXK6f6SPWa3bhUj6vyAH",
  "key30": "4KyN52eGST531GWK1D84zsNZD6RP5t2xxxgFHqojd85DFLPb5syv1q87ck15abtrD1txKqyLC8noULWd6XfWUYMN",
  "key31": "2kniLQRPv9P2xFKJKJ9WT2Aom8hqcVLBVUfd62GfjKup7NzUiKgvQnfoLoaB3wBvbVmBq1CGf31EASbQm7uqLSUj",
  "key32": "4FzcwHS1ibe3nrQJe2uhPtnaane3B7xADrDK67NYgU6t42omMwSiT1k7X3d1n7bmmPSHW93joL9Rie3asLSP1aQR",
  "key33": "4LR6ccKLZ3r2y4JDgPVcVNzy2AFtDLSEBhNCTudpGCH8v6e1dNnHo6Zf426Ahha3d9vBQtGHWyVuT4pW1a4Qf2pf",
  "key34": "3f2cnP3yKxE41uMQHv67DjL1grSS9HasfMyze6QYMS6ksLSrsiZskN9g9QnYZZxic8BxukdJiEnX1xJfS6ixfZWv"
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
