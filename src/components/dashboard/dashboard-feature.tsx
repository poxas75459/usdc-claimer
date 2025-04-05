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
    "4h6rEFCcYqQjNmRgvR9hvL8DazmKnDeiLhGnzr72hTtNxHhiVWTysdPvMuqRhkiobcaFopompA3WuLsxuWU5Qbru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdbqyGJPzMbbSgqFi8No24E5oUQxJqVjQnkZ1XQmU3CWj7aAxG6qEgjCofwbTec4wduvVKsQwUDzq5ASKcadV5N",
  "key1": "3Z8boc88ZqKSo9ocs8LNF2Zp7ugmyPzLYz316fX4eBuAuUKqHnt8Tc4U9s6JiaXxL7KHokgpCfSwjX2Hdnjke4n",
  "key2": "4YBMFDcMnbHYg4dc8C9AHPw9skA2EnvDDKQi24v5CH6LwdYD3sJZY4ywWP8u1Vvssu8GwX9YybaFEHFc37iQTP1o",
  "key3": "Zczebgo55KgaW4uRKEHHcFAz2ihcFRerR2gzNCgVRJrfzvKvDtSiW8V7r1gZK4RJz6Qb1fTvemfSx7Uk8SSPVLJ",
  "key4": "33gRPGewXdCsLdMkEr5PeXdxe6NscauBDwX4grEUMWLqTpNGM6ENqY7pWMz7QBpbvCwPyhqPH4VhM6envox5XXUD",
  "key5": "odZRqsLk24ZMBVdbTcmbKFrYMnM24j5i7YSSvYBJSu9T78J2x9zTkppAFeZc5Mr7rgSz8fquVorg9WJ7CwritXE",
  "key6": "4K21ZvJcMeFzdVF1or5vciGPLNxehy9kjpkkjLPGnU1Qtu8PmyxVP6gPkM66PAPncwHhnyL66GjPtYEdKCEeVFt8",
  "key7": "DBMTTjgX1D6duP6WdvnFoi9LUmat6YC5ZR1Az8KMHoegxxoHQGMaY8p61CW5vGmZ5RxE9Bg2L8fKR9DKUdge599",
  "key8": "417rdB7wfEppXmQyKSPDkD3PunKhTWt8ck1TYVMmGdTc6kqX58HkzGnwohd6CwYim4BNY73RSdAocfqfqSwoeTG",
  "key9": "3aCqHCF5tr1YduCBBW4YqBwctFJYR5GWjKsTfX7Y1eBV2T5qi9XFmnd5kBw415cwrA5aUJCrUdwWwnL7Duo2tBmo",
  "key10": "2cTc5ZXQZCWbStRqDMek6Vus1NUZ9eDvKQ4AwArjQ2AFAhXQdS4jP3qBGL1FbCkhtoS19CX5rDB93QqtEKuxfgnQ",
  "key11": "uEjyJjAyKU1oc3wHvEnJqupEkeHk1oNyM52cxEuK6XYbdhqwqwr7WYxexGwpptEJWDz6ZFa6M8ngvkMAoMSL8ug",
  "key12": "3EuSt1fVXjSZzdSx3fbCwgewdt8hHp7zJHSShG4jdH9PRd3a1WQCujAE9ctdnF1Cy4EkuwHQRX2zWr4dgqb6o3fB",
  "key13": "3wkoB7M99jPJw9qrZTk6YqRebFNLPHpMCiqgdx8vDoRZuPMmrP5odxdZiaySLvtcoD3DvT7ziKSqVCDiJ3Sz6KSm",
  "key14": "2vkwZzHABKRxZezt2DAw8dGCDHwAB18Z7PvqV85FNACqsnVdwxmY73rr7mnDww3j5GgsFnFxCESzpQPbAvMonjBJ",
  "key15": "57jMkiMxwbyhUH64AG2a6zzeNoBcj1BEJnMh6E3kLx7XbNWJq3zWQ8uzmqhRPMKsQkDQatfZtdB17rA1DyFDwfxB",
  "key16": "5ycQAE4tFUc7HixM1u2GaBdm31vENrPZZjPnvHAHVuZY7jsSQg71gT61AxpB8SBzQWpXCCjbSvHinmcaxEzUNncN",
  "key17": "3vgvweRtU3DpqGrV36pz4quDruiwEcczQUZ3gYF8sEqN7cjsZmzKyWkWL5NnyXo4769m52nYgemyfVs4qJMTgARh",
  "key18": "4zb62W2WsH21tX7b4yrqQ3qGejRdLVYMARkGNnoh6bsBn1uQ2Qb5528vseAZykw7QkYxzroWANU1roxnbH3nEeZX",
  "key19": "486GmaAvQK1V4fbfW9G9bNjpC2bjQwxHWiWWDMh8fXL9zbcXxbcYVUvP8Py4nqNcmtdD8485BDVuPJnqNr4ArTpS",
  "key20": "3E4JHocQnbbrFQ9C4uqeT6dxW5QhggeyGnffmpSuDw6tR8CgbyQj34b8v8odkE44N5sGPVZP69eRyjtpoMxiq1kk",
  "key21": "4hBy8WUfwKVDxLgXzwz59Q2aJH999FjnYpVGzFa2UhSht4niu7vwFg9JHaVXGVnThRntj1eLimFt4tLsAWCZpq9p",
  "key22": "wVNWuWdMNEDFhpJgCcAh9ksdUUKp6iaMLQDurwkEhfNgUTjxJVR8nopCXTFN5qUuQ8Q7veK1o5p1ZiHhqAxt1yh",
  "key23": "4Uc6P2Tky9736yQpWyR7JpMxhnjGL3v6eojGgBH12yngNxxgseyyeij9HTrtKjRKsnfuK2GuR2qyDAjmQwz9D3yS",
  "key24": "kXgtqShTvHWEkoFGTBXQt1noF6XfLLv9E5VfwevT1LtiWGJtTZfTWevEQjeRi99xnDWvoTEweexZwkRuAbbXNgX",
  "key25": "4EEnY1SVa24Bg7NSm2dc4nUvjd2MawLWsSKEocLD83AgMNEiWBY2BG8YGagJt2jvwBLHckbQDiLDP9w6qrhLRHaX",
  "key26": "bJBufqvZLtrSYk7vvn6KDGWQsNAfDus21btTUkeju94AFfNGCS5WZWsZULn5L3ZNTCiXNeXBVmDik3QaZLRXGpE",
  "key27": "39f8vP4CDecYVr4f5thEPZSDEhkRK2ResQMsyC7GYJjWgdNyjABSEJucwkka6CBYK8sSq3wmS15bNy8hh2BvE8zL",
  "key28": "2iArkmKThZhasVanuSqP2bWof47FSNk4uXtwSLY77B7pmwf3Xd9D8yniWDo2LvVNrKQJDg3JzZ59Q8ySBYbUkBVX",
  "key29": "naLLExR5fFGXnu8QZVuPCmrf9vhU4pCSB7A47trfmyK4bCH7C2wqYYZBR4cTiv17MR1wPNGpKtjyteTg6BwEy8z",
  "key30": "B5xEvwoUMg1Q4E5G5N8av4L3AXz1xmDDbaTHPtUTYuYZ5kPGYKEVCkWo5qiSy1Q6sTTxNjGy9iotLbW9nUDt5ph",
  "key31": "5egf9LZdD7hB2759TGSvn3XKhP5yZYLPDdQaujRkJpmgB8BATKLGx59H9Nj8bvxzVLqx7zNDheFcRThy9CjbXsCT",
  "key32": "4gqUP1ietxZveV3FTF79qzCM5F5UuCdLNnesv3RgANvJecAWm6kxDeY7k1ZtdMh7GHCVZSCCeQ8Asj4rMBqNa3VE",
  "key33": "3iXduY27wwBYjTTV7V2G8vuJMNXRXkY8kwjFvAaQGEZQ8dttdQhNMqHjoAA9enAJtwokwT3KiJEqhtpWKTQnUTdk",
  "key34": "43EuYD3J69xM1zBcUhW4SSt7FgM7aDakaJoLupm4StUZ9pcTto7S3q2MjTYrWyJuSfkk5zc2eeGQz5QL3dcR7mZ4",
  "key35": "4wj8uoA1ze3RLA5i9WnzAY2xLkAxkDmS9KdMHEH7MSts5mHWuoS4UYaS2fQ4Aice9XjroEmtjFbk9bLQh1K5MbmP",
  "key36": "5GZMmdTb6Nvc9M7dhMJvRzEBnbHCSjAHnKAWKW4o5HLEwNtNUca3355cDQHug5RFLDh7hboEPbVj158kZVPFSMBg",
  "key37": "4H6KrP4LDoYrKYGFAnTYnsaYoRpQFPXxMj2yJU5rbvJZnBTsCqvP8VXbc8YzVVjoUwmw4kn8pBVEL7bkkLngXpDy",
  "key38": "41gtL6JULWygKZiin7bMGvvK2xuD3qMdyt3jVYv3tJ66e6LRtPiXkvELxpi9aXXp88b2DsisUgEAwAHMDUojQgxr",
  "key39": "23TCtE3EMHF1tcVUxKPn8srxnKQ391B4DQTfyCxcxiXqvfLLTLFTYoRcpZNqcHsKYxjAuM7yRZPNUQTKZPsAWFu7",
  "key40": "3ZHqCNbWvjb5GMeUW3iQSsgTELQ4GFJHGkmM3USVRCCMjy5zMXS5vj6LGmdGu9tuKn9GLYJgDdWrQBuQa9dwx1mK",
  "key41": "4qqhVbHdLEAvn31WFMvagyShZBzTGm7TDpDR38K2LVLBpehVugqfsvvwHbez8G3fv1zjzzxpbN4bVoQLbUkohZex",
  "key42": "5BWKeDZaU2WW1hQcHrkfLNVJa2rTzdPmMbtA76tkmSTQnXnFgmjiLvMtZ1ivkvWdetp6Npch9hCcshWdmCGGibsv",
  "key43": "kyifDEJSZsU7KeVPpc6U61MjoJaqedLEktAqef3ZacY1DA4s2bTqbRvk4TVo7A9FfKwM3WJ99KFb8fcGehUUWZQ"
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
