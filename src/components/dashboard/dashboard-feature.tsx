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
    "2FWc2G3FVsUChqtbwPSSC55oeZ5RwmpGRAy6vLpFYSoET8mSmQSqYGyNq2qaUZ2QZ2H8CqTjFDr1KjLv6rNL18KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ystgHSNmCGfUPHo6SkacgZcMhbMsgGc2WkAehQwjVjV6ud91tDtHhpFvAx5w7FTsQ3McfFcqTfQtAHpTtQZ53KA",
  "key1": "5EiJPwDvZe4o6v6xyWabLSjg1mVdVNeQZeu9hr1X2D4TSWdA1sASQh47R5SKpL176dP6edyG3BSyhrwokMSo5PdW",
  "key2": "28EitYh3wekYj21Qc2eoLait3ZNALxHJzCcCDhNyiemfZre5uD2XFP3c8L2wQYaqZ4fa3tbvMFDDovpxvyoqQA4r",
  "key3": "5SeeCmH2JFnktnvUj5bbp4BFuknRLxAEMDnzJgbqBWHDHv9KM56NUCxgqFCMguovrAtnvRgtzVjDFsT8k2DdjGxt",
  "key4": "5SqrnjbGVcVppSiePXM5MoeVm8pPr1ApUf1bimwD8gMZTmFTnNfB9ixnPzBwDaQZfaZ4s8honDq1mABwcDQad9ER",
  "key5": "2abcswE2foUXY26bho7xvQXnadYag82MFRkmV7aoJ5pAtM9E8k7CunF9aWQVVPdiFjWLMorxoJvySfSwpfDftg2n",
  "key6": "3mrzj3VB42wKo9b3jx5rodTqCQwDh4n9nzz438AdhAm92z1MrBvjfd6MXFvqidNsn9icinFQXuXuU4gNMp1v2Nwz",
  "key7": "64GFEfgsgv72s8xyihycxDy4cK7iJBAzneYq9ipkZ86jcX9yFM9qQ9zE52bNZFk2d6bCx8YYwGHm2w5JbMByxHjp",
  "key8": "2Z1w1jXuhn6KsHwjNs6BG3Nr4gXGRD7KLue8ziQWhxG63tEUnR4CZv3WLdNd8hTH3HwuXBrBa6UJAi9chkXYKjWR",
  "key9": "2VZ7fVugomFhrXvw7xHC2CsQbgM5KJ6qMbeLVrMumTxhLzAqqGSyAoJ7ZP9cKEviFmfqgoxyf1FgQqUTzcfpvwWp",
  "key10": "CqwrGouaePvMo7zR2UvKZvuVwdvt2XGkpV3sFCJ54j2FzNWXSNcgDjnN68SbzWwWrPa4ro7y2LV5Dr1m2tZFsXC",
  "key11": "2srmFUvNLFfeK5YsPuJqeTPAxsfLsmaGFdH782Tgi2AExsQokxU45kV59UvRVjiZL6q75sbBXfFMYgS7tGrQNi1D",
  "key12": "5CtquoRbmtaK2yewmtBuWVfVPrFrHSE6DKG5tKT3HCyRjB7KgDwC4wKqSKaNKMMUcTES1AybCCnrvKSE3ucYQ5Ev",
  "key13": "2LdNZemidCnU44LWkAqdJyqLyViFnvCwByUyYCNoA2JjiDXj6MnVmeDPQ6Nq7ccunVFq3VK2uo8xK4htkcSJ5SEd",
  "key14": "4U93pCa4GWoME5KgotmnrV7CAgddvb7mcfP9J7gt9f4oXNRXdwsrB2RSuJGXCtARkSMKbj9daT4jU1WTtM7xZoNn",
  "key15": "BnUkMGSxqhqk5BsYfmYKHuTgdUCVR97waoqM8iHYZ1dyZmJXuZ9nficzG2yH8jpQz2VSUc9nnSbNyjiVes2AUaD",
  "key16": "4DrS1Q2aRiNhxqgDXr8Rjyo1bVmAhi8zw65B8DZPH7yq9zV67Vmw2G3ZqqcTiNrV6udw4TZEoynYHqKMExDx8jTZ",
  "key17": "3fHUSkbFMdvjrfJ6QrgHkTRTF7m2G2S1Bx7MK8SSXP1pGeeedWxhXyR6s96BkSYCVU9fYER4rMjxE6yBZNPsAAY1",
  "key18": "576mE65XtpS2h8UXhrrMCMucQEPe1g9YGL2oAUTc6zNmzfkYJiWCp17rCFULXtkEhxAQNnznLfey8d3re8Mrd6ow",
  "key19": "2onhg43aG8Rd9MiYmoQ4nmATzPc7a54PscgAgdGPQyJhw95KJHN6F96kL6nTXvZuKyBG9iE9edTdoDaDz3CcuArZ",
  "key20": "4cc4c6eHsdFKv8MFTzPZSCNyyPw8kRMbSUWf8SDVZjzb3WmE7EZ2fqDcGu6RGA5CJWpK93ac6E68Yskc3JVRB1zy",
  "key21": "yh4tcihjdkxAD6cnf8i96WjKE5jKE3uQiWuqrRMqp5QeFMxm9yiLrXFUL6X6svGK4Jz9oMJgmGcvaZGx6w7m41x",
  "key22": "3vHz6ZcRxrkmV6SptM58T5LarjKuVvcAC5xV3a7nwQFGBrqf1kjpBADqqTi7F17FmY7nuLB9QhYv6hoaasvLu2ee",
  "key23": "3FQh1nhtAj8KrgrTEXeCXW8REN6mUZFDKmzxcZGEJEDAFVDp71bEvFmuLt3N8nktivkcNfsNvoF2SX83qd6LAv5W",
  "key24": "2n64BCwmjEALiuMNfF9BkMiABL4ft2D4mRTxteE8iJsMvxwCKT3fKPkiiij1o7TLdhVKz5VcBb7SgE8R9ReustF6",
  "key25": "3aZBKsWHUfHftzrmt21ghw11ZtEYBGmuoWs8Zj2tLM3CS4Jb47ZuzcetVQFj3AqkKjg4iE38MQG9tBA8WZNySrGs",
  "key26": "5m4tyNRkBtmdkptSFA3mnqPJ5YRN2k8j11wLNjoFH4vVoLiaAqu13h4ddivzDj7JW5uEYooHYLnksMyVHXcX2Yeo",
  "key27": "3in1y4tXbYnQL5xoSJLPXVfJY2TSqsC8w6FVwqUoyqG3uCi8yaG1sNGhQsTvnG2wvh3GA78Ksi5BZXJwNfFSwXxy",
  "key28": "1W4funmWBTwDd4Vzwd4AR4HNxtGH7zFRKHnL7XCsCspapZaDaYrQ8yhzPi3qqQpS1qnN9jtxejM1WShZV9EjFCM",
  "key29": "3sP1Qyvp2UtMjzX597jfHRv8ZvGbmaWVS8wHdT8TmfYbCeh78Mvqy3KUXFwsPTtQv12gNJvqJpNMqdMRVbhrCpcM",
  "key30": "UsWSzZEsoPuwSzfRq9fKk4qocyWj2HovU1L1ZNLNYTE2LJY39fbz3tyDrk8u5mkuRSXec4QakAXB7NLLBvnvNjt",
  "key31": "2iHsmcanUxFBfNwzgkhze2qQy6ic8oLmdB6eKsp5LQAMPUg8UtizLiG7Awo5Qopa1iip7ujk2RM8LRtHaBqx67dz",
  "key32": "2Z2nPgpAD55ZG2pJWzhvbjjJAtqgm1nXCYcsSyXuneq54zooDdBLSVGQSjAsXXo6noB4WG2FoBYMymzMjNRGqpwr",
  "key33": "MmS4aW4JxRVy4YbU8MDfbgCw69NDxXAd2FMPZ7Tde1dTLUTWg8YyZkFEQgHXTnWzPfpwvroawKAaLu1WkxpmK1U",
  "key34": "My9zm42PYivZkVrfxWVUPgfKue5CBghoj9iACyxVFTTgS2sekSPX5QbcwCM4yDTKRELebwxssEzdg1R2qQvUNJ1",
  "key35": "3c9Dp7NCa118Jmm3dfNrowgWjweSoxQM8b7cN12n1kwzqsrvAstctbNjDdhQGsYB8w2EpJuyP9KW9jHdi3Nwf7so",
  "key36": "5x5DrNbJjrRgNbVW4okKuv7Z39yxEQ11bS2z1qY94DNzzaTtqzUKfXWySoRrGcdDaEHehUbQLVPh71X2gXmL7mqH"
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
