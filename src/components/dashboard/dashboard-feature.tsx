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
    "2ppR7c4zomHyXRey4Pp6ZZHxbCo8SvJnDjNJkXeU2HekHvkMGvsgdfjwmsCtsM4hUfKa2byd1F7AjERVJV5hSqTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ab5DbBhmzeAaLEaYxLEiATmK6dm17qHBtiE7dA7dmRgwXMB24sJjuuiJvwHToacWmcvNJQhzBW4mAHSHSonGXZL",
  "key1": "4NKQraVAgeoKW1PZB46UY668ZG9rpKy46wAVDBbRwi6ou4eComLGfFQzR8oGYBzeA3GZiUFTuhHte3fZitvusDsu",
  "key2": "4kDgoRxP2huZhRiTfe8qiwr42o82b26pAyKngvPUpRd64gRpg2T7tgzABaC6vCrF3841wH96MR5mD1xEA2ncwgv3",
  "key3": "4g6fVcehQP7SVvnd6hftHeHBjcpt2NDpeNokywDFsHibLSK7YsbmjrLiTF1H4ZuwUF9KXeo9W8FCMfbTWN17oorr",
  "key4": "qpTMVewfZTfD9kTcRTTarEuij4UZGUL6opesE6ReT6K1yF2Lr6w3nGErQhzPFB2EBWxkSgGcb28BV8KZoJwRBUw",
  "key5": "5a3sMv6yj96UsYanfCcgVBbP2c5DXhQoGEeR7dRKSEYJYmwSGFyLD5Qku4JKGGNwVVsFEPrREGpq8yiQ82YspiEp",
  "key6": "8vdKxXu3itevGZsLcE6zxKgweUw5rZVhptZw8n3y3BoKo87sJ4w1bo8iNR6rcgsTpuZX2hJ7XvyLKVojDxhyM5a",
  "key7": "eFjTPsMPqxAjycU49RSrgqRs1RUSQZWeXrTfVSHUV9RzDh1pNBgmkNBn8whBtjXY9yFAJbpP1WA66QMjTy62tiy",
  "key8": "4v28VfRqUUrYncfPtiVMLHDA4gYTrgktKaDhqG7yyHszgUjgHQwjDAddzLDs5L5A7oDgGWARbuHRthpXqFybdpb3",
  "key9": "WJYYcokXu2TP8YCLme8eEoeuk843rmAuLZHfejVcugNXTTXYGYFRzUMGh9WSVznLjRHiUy4kZqUfwgR4T1ZSPsM",
  "key10": "4yPmgFYTAJKQAA9U64x8i3uREafb1a8A2f4jZgwysjpaBx8UF6Dsuz7MccwHBTgwk2W2J8AcgYZTcD1593Bphty9",
  "key11": "5CKQnGCa7Z82sg2z3eWyLFLYPvSpHoKHq3khp2eTTtuDjfUKm9uVBow4tR82ktxCw69eHEV6oUhj3UaD3b9juHvV",
  "key12": "5LUzUXoiVGeSPwYLMxm3NTvcX4MyoEm7o1mZYuCqAYWKTLcEJuK5c7Tvhf1xEcMGZwjdWAUr2tpbTw9QQHPMrn9e",
  "key13": "3138FHeNghPNMbuVtSYZni1GBrhmBJihhtPtApyg9iWiHx44e7sgnBAsUGBHMqbWE4wfnLNw9mnoiH61Tjucku5H",
  "key14": "2UqG8CXwn9zekh64hE3eVwQbn7ivbbyYL8MSzKd3A8cZQHQ815Zv8rHn5i5SbHwbwQ3vtgn33g4ap9P2fKC5yq8V",
  "key15": "7UMruzR8hbZ16eh8gdkdpHV8jd9Py2C6dnfpf4fXvSA8sY8SGDsUWgYPyXk5aJKGbarLbqX1y6U5MiEFvPramF3",
  "key16": "4XHzBZKxNCNrmPFJqEYUCMFdddNuiT29yd6nkhdUZb6VbsrMcKaqg7KNXk44zDzMPQxPCQucDU459sppT2dBMqY6",
  "key17": "5Z4s5iDQgdaZPFMZUda4rwtXFMe99egmExWUk9R3fkHaNDdNJ23iUSnF6uAbUzmbd686QggBz9ZW46WKQx5XAhzp",
  "key18": "Lr6HUHhYegGq3QaWpNBqmHgvTfHtvf6dRRKqngyLEdhV9N3MtxnvBM3AKi5fuh3XEN36Dp9vSqUgQWUGZDEkSHS",
  "key19": "4zWCrno8aTwWhspeZb18UiM1P2pyMPCXNFDdGtdKkygxL9qs1xCBkPJtWGLtB5MUTZfj5YzKF3tjEWpcwq8iNhk2",
  "key20": "aFzXuxiGdPpijvn2bxpRHSGpmGne5cEqxyoAqnepyaoZA88daM4ubHhcLdhVBKK5X6pDw9TgnrPdi77UJhuj4MZ",
  "key21": "3RWodBuQ7QdmRVeH7x9wAqhMZk2yXU9QW28ebi2CGiTed9PZfW8JUn6pZgz3RcmbZ4QvaNSqFDbM17b9AKV3imbk",
  "key22": "5JZTtH1rjBATYDosWvn7PGHKw9aJoRzGXV5ituSXCByzHBYPomVTtWr7FHdUvpj1whWMEsYBgCRd9xP2gpVJ5Fie",
  "key23": "3FZz2QjybtvYTazvwx8TwNRGguLxqutXcrk7N9bL1viVZXJjqzk7tHNXpoeMfFu7r7YXd8Wn87ffjhMQf4UEUVsF",
  "key24": "4M1UrrzvPvnyZqjDD4FUng7x7rGN8eQqFALV2azxiDEdNMx645W5mNjiXb59S9Bu2YHBbwfXULkcp8KB7ANFhWTF",
  "key25": "2ELz6RFhcw652eFBi7cMiZfxfNhTZ6tgs9v4kbre6wnviSJz9FBoBcettxeKh6hdxBu5pHqzTqrHr61S8xC53YF6",
  "key26": "3YHQbmFV4XS1p4nkeMv6umsNj8Ey4Q4s9NDpbsBqB9cqACRELS5uW5UtYhLSqeGmmn4cG7W6zyLx68BKpUSu2WLJ",
  "key27": "37wQjKvrEwbHajBMZaiZK8t2TZEFDApB7yu4nXeLUNeqNYS2jyhiDS1Vm4KwiiTEWeDC2PSFG3PPLW257yeG3GRS",
  "key28": "5tJz2Jqwk3EtrgU55rQDAHg74ciK1SFuDvQP9F7qi4X6KDaj6SUki2p7jqQJjGHZRxMkQUEHT788LhYDEwBnZMNH",
  "key29": "3M6YJvPoaTEftEXcpHsDT1wHY3NU7hyQd7oVa8AAkfhQspoA1Hcsk1qSf1Quj4gHzVKL5xN4LctsMGVWKX8Khjed",
  "key30": "4B9GyaCpb24bJ1sgoTk4jsmYDF1eBBtfNuoMwzNxLyZDGQm5wSyVQo3pEjkMtbvAem1BHEEkjELMbWzooKRnfQ1Y",
  "key31": "51UTFiEgZy7Xbwymke8JDNREfpDpGnXt6VDwgJXMpmPpEhRSDSQ276TVFuum3hEP5FXYSJ9ESV8c2pE8k1AReZWD",
  "key32": "4g3UDssFjqJbRGPqoSxUmTawAfxrTscketNZjKfJpygndQXipqMoENc6fi2ERAyfSagUVXuceNQEaFAvsoFDLpCq",
  "key33": "j4nPayWEasmKfCrpycU4MZnSA5GE9uHtm6MHzLNvuLePSWqgz6CJrDeWyDmo9rVqw6jYLBvyaZ4iiv1dm8Mfv1N",
  "key34": "2YEgz94iTJqKwdixonice36A52SFuRm1XBqAktXaHdsm55CruSgoykVazj5UxbgSjXdpHFWNgQrVRPTUBAJXFffC",
  "key35": "Dn6EakyQunj6xBb5vWS6fFuiz4BBEj9pAWhbKWXuJwQiJYk9cSxHgmAombTGVYPqXxmzs2QqVWMfCGqRuFTfnKE",
  "key36": "CJTK8z32bm3icMA8zG3g4tKXEBxqcDoyAud6Tx6cWMAmc5Zg67juK3h3tidsBGiGMSWxpUSbhKTjKbPvU1wkwtd",
  "key37": "2xJkHDunDM2jEujPvojraDBbuvwb7eAb5iom4RWMAZYDBFACq9wQeavcH3dBcZNdRsELiSimDdRaJ7tmpir6viJN",
  "key38": "2oFnH3jZvFUC6ivQpRypGmRUCEGwjT7yUGqzrvv3VyZKFeuPdnmnqKrR9uY6esu8Y7JLwp7RoiESgooqkBMbXo91",
  "key39": "2TrPHUoV2Hh1GgmRS3p5qsTmSQKywynyQ8u4evsT1qm5Qdkw2ZS5EWxmEEYNbVCp7cQLN86ZW4uC2rjCsu8A7QZ6",
  "key40": "4puvz1L6LkWQ8t8CCzrwCM353hZgqsECZ94KYH6K6VWL2ucNbDz5aN6w8nwQUgVwNyDgomNhaRnbtqF2qREpz7gH",
  "key41": "4sNAJ37YSmbEopS2Li7Myu4oKTMMhz8LwgzSLDNoZ8hYLkNsEhhmKn6w6bQRy9VPTcv7KgusMhsLVJd2A7m5YEhk",
  "key42": "CufhFFi1gDpTxrqZPcfPxLz5PZb76U75LEW4DejBNvcYBYBpXtaPzXpGcNaGmdv8WiTzfDo8xHPYvNbPTDnezrv"
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
