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
    "5ov31VCVeYA159Eq7W3FbufsMrHZB9h6L3qecDpToMbWeitxwCxcg63V8TUyq7WzPTKgv8fC4pfKQ7LxPiXfmzHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aaa6W2WTg1RxEBfMuPc4ccrWkvJgXQcT3AijP7yw5Z6pgJruYAGQgLY4UbmTZ7YFqasHW7MzHC2zFYfzXQW2cDm",
  "key1": "PCYeK3v2FXAXUkkHaRfc92D8h1YARZKNVsTAoNGytUWMsP8h2ooqkqayjL8Ro5kUNiZ3kdCvnYfanwA8GrPjq3E",
  "key2": "hHMuUhwCFWWvK6Uq8NedakvyGfmzxpgViuBabjzKR8KpN4wB3k3asUai7HSrTDRqyWjhwgGnQKJZfHpNwexYtcV",
  "key3": "3Jvo3WebzSU5BkvBku1WJNR898reah1mXqoCL6DyEBFNov4vPZYxP46bhe285UVupbgPddeeCjZsYEtLGvwsocZt",
  "key4": "2wJhkBnHjrgHTcpxgTocK4sbxPuu1mhUvuBpPrWw6hU9SgQ1gLGkKi7sCdS5FZPRrbaeE8gWmYik2GmDnmx5si6g",
  "key5": "A4dyqc3LfuBjPqCQREoGqGos5ZW4XF7QU4uNxVqhGViUSo6spT4qFibJBTiXk1uQhUmgyYwAiYMQQr9hUMbsHzL",
  "key6": "5tAjejzhjz6LhtGdku61XnjR6c59oa9ADF3h1Q22VRQ2ASnyv1H3ocnTb3siFNRWCAPttYDXKSMzprq4Kr28VvX6",
  "key7": "5Sz6ux2twa3dsdhF7nRUmiSZxXKgREXRVcZ1y4nhojLhEcWqyijfnUZegzJxHtLngYxkkYa66nV2HtxQ2KthiyE1",
  "key8": "2WTTZqKST9HQtY2sZba7LBuEDmffurFJcLkkNXw7QrqjiX8NxNfpv66tzGjMGEoWUCQ2bsBoCtjKQeBCUDzETy8y",
  "key9": "3CJgwQ68vNBpXLiRudU4N5QgsnD8nKXnspm9zKJGAgtX8BksyiSnTc89gUPefHicbiqNyfYbwQYUKbS8nD28PRwt",
  "key10": "4uVktStvJrtQE5ZJXgfG5RSEWzpep9PDa9ReytcLii73dJYLLeiBv4QWwy4gStnoWsb3bb5VEFD2kKLcfhV6fR1j",
  "key11": "4q1UGf69kQqyhbx2XKDKgoxVM8Pgkoujjs58GqYX2426EapAPpAbjvcE93aAb1GyQy1boo8tpCNpiHRHwEbUVKcq",
  "key12": "2YpdSQnEC1oP2fkgNY93Edhn1CRSbRSzFyVdgjRWsgJyEqeSw9ZThN6jtsFACWXgtTEj9v92UgXyMKiungeGxaYK",
  "key13": "5UmXGXq87t6GAShKGPb11bhen4HhY4r6Evetm4XsLSK1ecXWdHNoM1t6zVPrwi7VBbqMjZyWMY5GmC1mAFdLjdoG",
  "key14": "DkvhNzAjbdSJDbAsdW7HxcfvvWcjAHT72gE9ipCNfzEZde8d2bXeXuXJwmUuD5Y1CCohVAfq5HCGewDKjx5GTPw",
  "key15": "4opxt5RW5r5JusG2pZJTw3gy6NAaTw6Aq7hEKqnqHg2xbmCRZ3hCW21FKQ4eeKFDTCwoV29ceXju7Tkg5RoLb9RU",
  "key16": "2D6E7fbEzapV7pytirqQ2kDsPqnnUf5NAsLmr3TARt1KM8putybrHyqpcuSeNcLD9ZCuPwAMCtJ6FKyJiFgMejnQ",
  "key17": "96vzwUqrqCZQaTW3Q5Hmh5cJbPXRR4bMLbAK55uyR7zTheynyE2H4E8eTi3kQ9nhBsN7WUmTfNJMz2wDD47ZXMw",
  "key18": "5gtrKBMyz9CKhbVbPsyp5sdFhQSVVi39Q3Bbrxnb8zZnMLhWn18AhZFZWPyQHEdXjUoasD1xWhuC8tgT3eDH5APJ",
  "key19": "5jE2LxSdZNhDoEeW9gNKaQjH7hfuLUf1vCu1dM2Sw1iYnAUktJu9AgZfuhwxe6F29xU4XWU1j7NNtW2s4JGqCSa2",
  "key20": "5kb3Y9CKQnwz2hkaFMjkPk2BB7eBJ4UAR1VCzrRdiVidyZFjSqaeLXC1WdSa99XrCPyL24FmzCGLYqxYgf3TFgrx",
  "key21": "3ELw39vv2xAJ8YKsJKb3qxPmfN6yCgNtEZxooy3kDG64V4kRXkC5UZhRyxp18cE13suCFvRuiESncuzXP9Y8S7uu",
  "key22": "2XMYtWnz91zD3HcXYKgFFcMwL2vnsbh1bhvq8mQdkC3Ze56J7nV7DGgD9ShLimgcNPVKZn3KiL6C68ag9CKpi5Kp",
  "key23": "2dMzMtZJ8C8TBFLNkZsnAcTTgCWaodmhXb3fcAuAQha8C5kaPMejeb2yxZzEtThXbaxSSH2qPMuvjGwEhE2GBAWg",
  "key24": "6NZqcSirCekjUreWwVpFMPJcRQnU7Fisw9fKaiRGbdbQMPpyy8uWMiJFKg2Y7TxpjSdyCJWus8qyWoFx2ncTAEy",
  "key25": "4VYLqF1JdgE4xqqqDx2XZj33brvuuu5wtYJKyu4DqyYWzb12KkSGowzF4ZdJ9r6v2QMYfmbVq6gBPhnuSgYgrieP",
  "key26": "3dGGXBY4JjSBBQ58yQjfKxVGVXw9K54BXmWbE9dWTeq44J7R2kjKjsTQAZ2Moh68nrzMxzhMZfp7M6SpFoDt19Vp",
  "key27": "28Xz5Eq7jWWkxxCuNnTh7DKSC8vXxH5Ko9ceXGYLqZ9tBiJSmq23PTVdNS3dA4jXhSkbim6AYEg7tU1N2nXN4Zur",
  "key28": "2JuKEQgnUHUkwhnVFoBv3kJRTf7N9tFNHLc31vvVJDCF7wXLQixMuaRyoEv8owfwd4uMydmUcGTtXA2wGnSHwAAF",
  "key29": "k9aQrGaQ2SARgLNgBKH1QctpCVDu3fVGQngPEPwsJJsYpvCxLDZ67Q5zAUV2jPqCA7US9p4wBSUtvWFcsvBVBCb",
  "key30": "2knebcwwvTXzVXZtwxR7PX26DYaHYtKuciqhww8UjT7U87U8jBqXnvDr2MBiet3wDF99AdFXTzh9rfUZEE9xBp2t",
  "key31": "iNtqdzFj86ZTMJZtAnm52bhSS6nCYMfQJ7r31qRXwTEevDRYWNVnHQaTsWXo2xMkdgk4UoDDitvgXhUZbXpM2nu",
  "key32": "26Tku8kVLRMD3yhL3hNNoLJhoB25pCDdB9gA3fNbejVgNkjBebzywiHXD6ipuhGhzBz9eBPs7MMGyDdHek31VqnL",
  "key33": "to6RPKHs14oE4Lp1dCXRCxPuGf5pNSxJ5CzcVNcLpVRzrxWphNLgCwUL1KX4iKbfwueUBt18jMz1d3rrEHLup4E",
  "key34": "62s2Kww5WmJeZD92THkmV1AWArsBMEPVD12cjGoKCjumUM2aLTvn1d3VJSf9Yu7oJdx4kuKCwYXaHZmP6Cp97mh4",
  "key35": "2wyyQ1unJyKfBLuDrMACHaKndWLTcXh3eskYMuCdZ23VU8hy9LMAdCNa49NAaKp5MFK7yniDGsjsHKe1fRWYNgBb",
  "key36": "31vAo77QGR5meeTdNJiNFGavCiZvWss55oX7mH97ZCkwg5uEYGhCs2dW5gvzWu6yzCmpQJUgJQ5BiPxRqZDyRFqE",
  "key37": "3L7HU9JJnB2ruR9nTeopjRa6S3Efh99QcJL7KR2aaTigs94DTnBL5xi4PWi97CLFo69Brfm77gYDZmXq5tLPTDuf",
  "key38": "4VsoQb1jCuGqBdqKq1uhq538ecyNiYUYpzaYzMdCnxLiLcezBxpRPnR2iC9i6bzLNRjP2UK54H5WxZmZgBEc9P2w",
  "key39": "2tC3AuHuMp4eLTRfsx3Nejybtcgjinw2PPrtpwgbUC6gJ129F8qCsfhHWiJbqJGHgkDCY8fsr9dNLMpVdZSgJTxD",
  "key40": "5MJeFs9g1FTrS6zsxkfqTtnwj9D1cLdHqTAAWVYUDTyczmyFdt5EsjTN8UPzRetf99jhVvSWUKJqDRRwW6Fg2yHF",
  "key41": "2MR59nPHbTWKwzmkG1xGwq7YbQYzsEUivjaGiYiAFcK189HBnnMBJG3139cXpSgeFDTDpsnpU8F4eFXPABRd5btn",
  "key42": "d6Jse27bhtyhjeKhMWQfBcTo1c8GdqndfLPxrn273ucvoVpQ2qmiwTHN18DykDbt5PY2k75eg2Lh47XmFXV3yd7"
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
