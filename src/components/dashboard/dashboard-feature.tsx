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
    "VvYKRtpxaPbspVkDvWHtLwqZp6ZsnbzADSAZg71uteG6WRarHp76VLr2PvwnzKsEyP2N54VjnbswCLW6Q9JAKcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWGh6nVf1UkEnKh32Vs4L1ZxS6vPCEwnEPfNQx2291dZuwYyjWqswTTJ1nnTe7fPt5DwLqEbYr1MPeVzrpaUPkq",
  "key1": "gE7L5zJdoehhLFXJXMAzawdHwnBtun7CsWfDKVTQerNMHNWktrswRc3oubEuY3LG9XQi2nocQkEnjtxRek1r7w9",
  "key2": "4ra8Y5irKWBcHb2594DmtgWLhjrrv9eUs1Wkskh8pBAfwgAnztRtwt8RMLAV18Bojdm6M7gbzZReVFTh9DFNLx1K",
  "key3": "5jL687HXCA94EEhsdhDjPaWZ8AHxFyucHaE26GZUtSih2yC4CxuPEwsL616XHN9Tj5bxGBJKACtVQTJJVFoAWcup",
  "key4": "3z9bcJXUF8W7vYpAMTZ4n7XLmrRqFqdhQR9HHn2RVaf4zhtGeRYWTKdLmMkycoTYLZ6yxd7MdNuWeyr5aENTZZDP",
  "key5": "4kWa77WPXrzu1ZXpsiBQp3FB43MMDtohFVKdcSB3zsQvaf6UTPXHZJSsmkaaBHayPfmsdMzHF771FpLuK61XYLBD",
  "key6": "2V8suMK7zjSxd9Mjcv6M84XehYAzVmduEvrbFEiMBLbE4iQoWjwJBVjZoZLWjryCkc4NmmmCRvBR9KMnrafwNXPh",
  "key7": "3ogeTLMVar6GV1kfuB92c73Hx1f5zGTyLAs3rb8aXCwrzWxFAVQX8EcLLA4zRqNhZQMMztBJ2rdQ63QwYoHmPmCG",
  "key8": "oqxsn1fKvkkDMFWQ2KfJhZPLVu7GVBXsCacejdmEw3WjDhccGgFihUD4BReuMcVHEa97z25BRokf45RV4tQWbCv",
  "key9": "3yhXZxFPP5gYNNXCC7UuTpPybgXdG3LCsFMeA7XmTFGvr9dffjhaoXwiZRxFPKFtTaK4Tc5bUvwHQ8uZwqFd8eB",
  "key10": "64bqFaJsr4civ6LjjF8d1pRVW7kvh5jhmaMXPn3VEFkoWQRHEsWL5V15TvFPG7CFYrQJ2ggK2ujfxWuPfBLYNzxP",
  "key11": "39JL932ZgXiTn7coTYqq1QjmgM7ud6pusTL9RYweZxVwhen1noy8A4Z5dRygbR9eqY7FjLkwXVbiQWGZW8JVFVXE",
  "key12": "51pHuX9Gjmu52arWfzrqKP8JEhdjBVF5JwtMasVF2vRDGkpr4aW7ZnJxFafMzpFJpeAxiC7ykPKVZ2AEJercWMkb",
  "key13": "33aVQ2u39YR9hayCA8ZpxtUL7Cur8L7cPqa2CgTZ7d2sjG1wp81sQX2AJqqJsQUKMWo2zB4nVeMYUUyAYPGRQa8M",
  "key14": "2k3Qy1fw55dDEuy3KJQinh499JBi2VDQr5Y6tQF9d4Gx5Vkv31zMxuQ88u5CJWsX6PmMsXJw2zMntWz99Tvmx4t6",
  "key15": "4uJvBqxBUvXXyf16aZiFuZndvMbAcLZKf75CYPiP45eXQ9As4FrcCSTnECLhNeUAvLeYgwzD9JQPHhxgdm2dyD55",
  "key16": "KyojadNiMCZkXjbSyBc6dyWeJeucrNwLJstZ5mDDc7gwMa2tc4LGgRcraEvkB6HcMiF4tcvKGXn5MFZXwPXLX85",
  "key17": "3RUgR5GT8MYmzEqx7EQ6cje6nWhZPHEGhN2WRzZ1sfYbzitg7YqGWyEtR6BP8KQLgaVEk15qGtTJdBSGSrBg1JAj",
  "key18": "2Res34eKpVzLXPsEiyQMoXAYTCP6soG2tgwntAsszFkgLWcSjDkGwsgdymCsQ71qGbDkZqwcvUVXXRN5LBTjo9BB",
  "key19": "2kaRibN9W5vepfczdgSbRAGa2JYPhNxcvfgdJ8uXKjmTWgkZToDz9XgwEKa5e8gMNampBxRDq9hHB8yHkLD2GyUa",
  "key20": "fRZugbLgzDu3L1F38z7mAoQ9hV5JimdcUrgk7RK1afV3qQHgef7FHXju1SeC6CiujZnJ2EQ4htJHzJ2whRSSCFt",
  "key21": "2s3ZYjVvFMVWt8AJQRd5FVwtCtz6f8NzxdFcr4X8e2NvqtgDhU2VhKJjtNCePzFY6digvf6n2gtYSJrpxks3u197",
  "key22": "123o9uZgxDN6BHeAvBZ3EPP2Ty7DtF6ZqXUz9Pt2yyEVZQ379rR56RMCkGjnY9PXkLFhnXKNuqpocDWakSCPuuZk",
  "key23": "3zr7Z1p8WEKDZACS6CW9GXXGzN2AnazTyGXdKMv3Z1Z8nwhDnQwERcyRGYZdVDMsuMNxnPG6uunKYufEHVjT3W47",
  "key24": "3PpL1S4NNutfRCyizxENhF64erAgf6FY4ExyUfJkkfCA7ufaoT3WvamqGDp2sXRe5QRPHsmNyJa8HWradN5NWKFU",
  "key25": "2cppaifPTukFQvMKk5odhyQBN3PKyJKXKwBTgDTnXxKYVKmgYYKYFcu38sHQaQLuCJ1RVKpgEjcNtjh5LGhuRahR",
  "key26": "4wpoboBLnksoHJPdePsqeuAEyhnJeNMFAruAhzWXsf2YNtYFwV6u3NsSqzDdvxGmFX8hTzRWG6KreoCsgp64wYTD",
  "key27": "5PYVszmXtRbUDwunQZeC7j5UZkUCqrTJMCgjdE5hJb8cGzVdDUx1MtuHuxS4pwqxskUWjhRuTRvp3MikG2qhiZ5c",
  "key28": "4hgGUQKTHeBqmoLfytYkJPT3Mq68DkyuGRHz9hp74Y1nnE2e5Mqj8npucQeNSWTu5kUqWv8MMkxV3iTJ17E3SNn9",
  "key29": "44FW8p5yN4ujYp5nZM9SkTqMzjWcGdHKkcdbrvsiBXnKqg8L7pwL8aP7H8oD3gT4UGqrwxZpKGdjse1ihbz7siJd",
  "key30": "21EFbEPppXxWaCC4Sn6FfKT8dpSY7FBe1GJEL7UjC6SckyGffjJDjqXDGkENgFhUmQkBdav78ZboFhH2BgLpoRqL"
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
