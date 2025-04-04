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
    "56vdwetPqdRbPxnFzL6n8yHKPe8DmeZUaLLFuBtsG5DeNiDh5eEszsWrWH7cKgdkGkvbE1xAU4F26QY9hNGJMLJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiYyzWzKe4CpNHAwycy2BtRNri3bZSfB2uACYE5Q33RPFnPRVswumNTDZo3AeYF6P9EV1dXnjXnH1eoFKWQsLid",
  "key1": "3tP7zxsMWdAm1Q3PW4Cu7QX3HHzwGz2EyEjy1CQF2FyRYQZvn4Goi4US2KHcrE9oR6V1y5iJh62jLfbqy6G5FLdf",
  "key2": "NsrsnBPzj2NA9dA5MyQ33dQ8eRMXJBNHYjQm1hnMy7T3a1pTJbzCKFSMtQkBK2dm3DmXbzCLoQJfsnfBsgjLuwv",
  "key3": "2vg1cqqmohnYRcP9vJpjDEfdqrUNh7itP4zyceS138AU5mmxWL9VyQkfLLFjgP9SfvBstsvDWqrmK1i2RxSW4cxJ",
  "key4": "2kncfRE73JPHHUECRqxdZNDsd3eug9qRf6DEC16Uj3jeCM8Eeu5N1eiPaP67NE9eyWywzv17SmoU6aAceeAdowsC",
  "key5": "3uhTBjPFLkZM23QidNUryeHFGzNoduqaSykZbWnpyqAHsHxZvPWgU8riMP73gaSkkCeNisSSYsXgUt1pSr16Wkh",
  "key6": "5EPzfsAnXr4oyMPSeXZac4nkm5t8kkUuwJ2hcHwBJjJErRDJ9qXfRz7gFwoSmtuZQXdqrZuNVkRfWh3S5YmLhi9B",
  "key7": "5k9cbwP9HdSkGNru5pXx1AwY5ao9j5ZSzzxcjTKXWebeyzymCmJ1iE6mFLhzSze8Ei11fXLgQ87P9SxPqMrbsbam",
  "key8": "3wrmAUc5yXt1mjC62ir8pzNjzuBuFRyxKAtetXjJRNAvhUz38oxydj8iW3Xb3oyorunQ3HdE3BPskS26yBY1jDDD",
  "key9": "54R9hkz7MPczL3TgCPbd2Q5yvtA9LeRX5ykCn1gvZi7iNkm794mHUQ2RZpjVBySJdugwaW4wzBZEJXZK3225tt2h",
  "key10": "Q9vQe9sETuGLjLLhbKrRFSTHYUxFWG5m3xWpnXmnkQJnDmPEQPeDNP365hR2wQFKrSU5SvHjrXA712kQkowyWLD",
  "key11": "5ak1hwcULdaNjT5GrPY3jF98BYNp47aJ9BEPrqKsARmyTCEWyTCtSi3xzaGQaRoreQTr9DvbYkzkMDi5i9sZgVnd",
  "key12": "1axfn7bj6HPizhYnPDNzrF1qZK7wxRmdjztFLNr8HaiQKbbHaJDZeUWSvc8bRerdNtXTinxZqmrTmxkxENysbPT",
  "key13": "FtUJEiXoWNc4DaUWZha6yQ82UPrtcXTtTtTUTtwjmYherMNtVBktTvza7XiLhgXBdrdWRBnJuUyXuvNXZqKQ2As",
  "key14": "2dD1c1g7f43kFScnRXTGW9JVB8XUaBqLc6UXRVwh3DJJdQYKsZ7znLYVNqRpCfp8WaAZaxb8kYCmqhykVFSbhG16",
  "key15": "54u1aAz729WbKqECdf4t3BWqBuweDfrkRb1m9ZiZhsqafzMZU6iqguJbZ6xMcsuArevnLLCihjWhA8eWBZ5LEYxo",
  "key16": "2tSSGm872ENsEgzAwnQFh8vSGVkHrXWfgrGJfad1X5Jpj2tjvqVrA7veH8NSMETbBqKYP82HGKu49qAA4jDPYwEE",
  "key17": "47bR4uAaBuNqBQmt27FCpGWLp6HaXuLBPt9vFHGQHxFMZjaXbrVwUE7Vs5mfixtXYmcx18RJRsBe8gRc5pLXuKdH",
  "key18": "2ea8LyGfnSKzgwj9JB9Lp4uH5Vq8iUNF8AmkcW9WPgSs9oEiYdiPDtJRzg7KptEn9z2TMt8N8LKi5ypoy3NiTBAC",
  "key19": "4dYmoFW9BFchfoNbxQY93XxSFrw3bGyPJoh6JLLJYZiydP31UY7VtSsWdjv1QM25FAxNHGKUxYVTRbXugyRBADSc",
  "key20": "5yUGesvqdreca5b94hhLcFJvAUxFZkgWSybHt1iVvnnPgjCn8eyvJjr9tg51gzwKmFHTkCapnEW71fLwBEdJxP54",
  "key21": "29fDCnoffzye3Wz6bdQfgYokG2udfk71XoqeXUGMoJt3Lcjaq1BnQFGvJ7pSP3tzsoTKCqLAYEPu6r3sEeC3yoU2",
  "key22": "4XYv3FHLdhk3w7GuTBvQeXKHcdP9Gqo9T2bmpn5p1nNanXVCDSrFmZmERW9x2mawJzSymHzRhmrewu9Sc6EC3dA5",
  "key23": "5VkNdaS2T2Su3K7f7eSTvSQwjqkAwfK9PDSf5XyxYDQpFE7dx3WSwzcCARHrvnw7TjwNUpQMSSXNC3q3VjxFpfKX",
  "key24": "2pWRT47B9bHui7zs7BSFHWjqTqg9bCmso14Q41Y4AYuvRXQ2jtqYm7YSRkcd1mKVzaXMHund2attLKm5XSJrnJHb",
  "key25": "Dtgo4xefgEHyhVjMT4dDMUrZ2k7PckUVtpXwWs1dkEizaU5zbXequcNdfARaXhN76pctkoLwxfqFP1jt7HSk1ga",
  "key26": "2EL8yf8c7qUDd9RaQ7qTpMYPZX5sJCms5hahocDPum8MQbrcJWpCctnv8Kr1ho5hSm8uVGh2E5NhPiPLKAfLZdHw",
  "key27": "4x9kXDwmzKUeb22tWBmQonuNbKuKSDuDCLazVFaR2eR9Vo18MtTHQYvD8fsYVnAyDcCXicHmvZ4a3KWU5F2bPWLD",
  "key28": "4eq1dGbwi5kuQSZWv4HbYE9rS8hGwDzcgocCmRiDZvdfTemPCazMVS7wWAWuodYK2bWeizoG8bYF6jd8GQfVzihn",
  "key29": "3xCrAJHK25r3jSGaGdj3iQDJ4eRCkCYxgUorBnhMPd6BP3b5knDfygYKq6TXAJdQtYmyMSfs7sTLs7NPuUt2PnWT",
  "key30": "vwmQhy3e1qrQ6f2jWS6hQEgeZdEjAhnJCuwCpiStHV12TEvqGwccHYbu8PDXcmdC8wcjYSgAHwgDnrvnJwusZwy",
  "key31": "ixUQXaZifsY1fzpfzLJsUrz9KmEKo1CM2ZwNnbX25p2UuEYEjntdwhYDmmN5NMrFTkfB3DaqfRYXUbVcZ37kQi4",
  "key32": "5dANJyA1kxQHUZuXtYoVK36bUEQGxVRh5dTjotcMX6h3ewr4aLcufQiXh9xEjL6Yoc4kXqwUvL2P89xd6XS5eCcT",
  "key33": "BREfqcMFWAKWFnYzLJKE3bXaXjTA1vL8jTrd4UEgbwdJqTRLtQgPEsjArE9SeyTgxbqt7CAHTt46eRoifzWWXvf",
  "key34": "239v8tvovZYY8KMT2Q8bfbWjVCm7t7MYJLjWxsDFA6MefQVsM85RfFZtBqoaZKXbJJ8XN1USsCKFNMUQRcQZpsmW",
  "key35": "CxksjxpCLjDVjpa7cfmrpVh85runYk1snMnNAD8qy6DMeR4jW4mFoTsPYBXE8YB4B7eekQwvJ2Rpi24tJJyH1mD",
  "key36": "Xv6eD6LqEUT5Vitm1XtLadumoGeA1Aeon2CbTd7xZnTt3WEDdhgcfptNRLmAfGJgkvt42RMZPEKrBYycCwss216",
  "key37": "62oHmWYhaPt5zzzxxG9WTNURx4MbYo9z2VxphqUZkNE4f3SJAQYMfV562r1aWk1ntXCZWkqyHMpbBZ4hhKTx8w9r",
  "key38": "2fFEhpr9jDfDQ7hEqSYx1btTsgHPKEwox3auT6Mp3yGi34gcctzE7cYPvmwPiuybHQsiJG2K1JpDsXXzuBJLD2Tn",
  "key39": "4UwY8NykeF4jXYr5Qn6GqqiQZUQoUofEdLDL85zHbaJcTxyma8qTYqhmQUjQdtTKYFmnuqmZZp6h76a7fnJDwxX",
  "key40": "2Ep2FcNfnbAreNgBj7oLTDAT65ht2jhSWVRUa5HtG5CE8aNrvjEdGk71eN9XkTPgXLanbFTxaRKEY7L1WxXBEu2T",
  "key41": "6hZHoCidyePhMq7kRE1w1iFZA4rhS3dVsCrMpjudNQX9S33oPq65SHfLEfnyYFq5kAije5rSz9cHyHF8DHsc1HU"
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
