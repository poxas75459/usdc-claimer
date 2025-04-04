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
    "2FgC9dXWB9vnqXNGqiwJXvEWVNQ7NzjCC66wCZRMQGowdM1sqeNBy9Du9FddqWcFPTKpV8vBW9ww14pqtRnmWJ8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAfW7EBAwabhJoE7eXNZF5o5MUn49TX7M2Zn1A3AuazJUzgCkQbMy5TMArxDSKngqAkeEKZkAMUU5tC2sUPFA7F",
  "key1": "37pnQs9ayXX6r5scUj9yLdARqoWnYFYiyCZtQ1DsLAciribs6LEotDKhLocXJHtFeU6KMjWzjqiHDMwDgMQ626it",
  "key2": "2Nsqv2gnSu2a1s18kScXwBKHxhJhRPy8uiaHmG9QiZYo2Nd9xkkjA4pfxVoU55VzHqukuoUyVBRprwGUmu1ZdNzM",
  "key3": "4qpqdkcRg1rxQQJMkZPEdHVdusnRwr6bonEQmmg9MH7VA9iJWwGYz55jjoKinn4Utpw1WaPb5yrd8b1cpn9xftQ9",
  "key4": "4WgbX11aiHWN9FYKJiSdnD4CeMmSRSem9VNCQGf2D3wLQNEiTSurnfr3iDjw9zsyb7JZjir3RwxBVPCii4fupHXk",
  "key5": "5oZSkgwUCc7zYZvHDjpd4TuJseQoTfqyzf98T6AGiTs7AsHi9azUiffec56rTGcGvRaXVgNkDm82wNxhy63MwcnL",
  "key6": "3jiYuggzmsS6FUrP5bkCdhgKrZZehEDQLnn1gRJjMfmdaPUbws9xLmJG7FFHGGPiEHE37q2b6Cu98VEipGor6wqH",
  "key7": "2qxhv1knLZnrhbSEafkWbjwQofLUHpN6Mnp3yHDnnHuYnpydSqqitZ4ZDosNhQocfUjfJBs3yL8VZjW4Hzw2XCLy",
  "key8": "29dwcrvhphYWWNK8k4vZkoC5on5hhAQqkvp7hW9u6ZsMg69vcjkAZqWsHLRjk2r1SmavX7XjpxRQ8Ep1mbZTnwsk",
  "key9": "64JJqgYoncQryU5FaGapyR4fm4kAFuytGVvTcoRjdyWpgGyNUPUCB8hi8D7kdUKmvCuDyPwAJsioToYmQtUVt5gw",
  "key10": "4QYedBmuPQkKMJwi3UY7WxvrtqqyDya6Pg63fERAC5m6NuuMEGMVYGE62T2rnvopXPBqoUErpmr1N2R8ZKkJTUvV",
  "key11": "2nWfAWHuMH118rUGdWKxr6Wfkt3ca4grdnQQ4VLNtzGfvVY7TKYjnn8eRhHr8yWpMX3fy9SjrAv5Q67cu5KQzEZ4",
  "key12": "49YaoKvic6kG8NaKT6WrEinqgjdW9DpLZefUqacnsUUHLV4MYzNpMFxtjrBJ3fSXnws1ZQccWZgizjcdVU2XHEck",
  "key13": "5dZ4viR1FBNcznpcHUmFr1xtSj8E36TWwpTkEgae4P9Vuz7ykrFVuzjb3qDftwpNsDeebBbqhx8fBCP7PjsDHbTk",
  "key14": "2zpBAisDbUVMFsKYCTJbgVSzxquH3fUKnubjXT2rDgbb5zibrZe1acaHSCMDT2v7p4t8LgVDVTeJfQf6oMETgcxL",
  "key15": "4gGstth3UGMLvo7NdQcFb7F1849KwdDZb4wtS7VK3CfPNrfJBn4pEWDwwemMGGRFkp2YQVgpi8yC1RS86ErStPD7",
  "key16": "fqHhnaKptj4YmoVHgcXGzVsTVKUfGvzMwFGcpE1jakrjzMrRWLmodeoP6D8NciUC5tqgtm6uuvz5Q9f7RbDSz4D",
  "key17": "3DesxcshkwxY7XTR7VrYqssaHApNKkG6TiNhiuqec5NYue2CsGpre5eoe6g85hJCWPS15TwUt66TCndTHVMs8j6u",
  "key18": "zX4untEwT2215jLexQD6T8bV3RPh7GeAG73rrGXcrQTa3pGWxLZzwL33TUT1Jzx9q5YmQSZmWAbpUpqkn7y8KeB",
  "key19": "551UeVY8Z4HXPTdSkx1xnHGgPF2axirrWsqj8Zgp9musJupsAHo6j1DYgWSDe9iigbvS15TnEKKHy4TMXJvXccMs",
  "key20": "4cxkwr18QEq2fyo8KWKUsiZACYFnL3tzP9dCHt5e22bfHnXjngUqUbbJXpx3xxM4FuXUGEvxnmK8H5mu1itkroJK",
  "key21": "Pzztbg7UQ7uSmy8A9ZDEAq48NnVevsD7J6F992EFbgyosSt4R1LFhCMEoJy4D83WzxdwgtbwccZoii37VM78QgU",
  "key22": "52uGALV6y5tRGDtcVQU3frjSpsY2cDVh12sugz7A9n6C7rhc1BjfyVM1x23ucnRcCynLDCTGdKgv1Ya1soM7QmFz",
  "key23": "2rGWQ1ziv8sTHywvWRtZ8UMcv5hkkKnviegXyBLgr6QKQBAsNowdf2gfLpPWHgTwAQK1S9YgjiJYkM4MXALCvXEH",
  "key24": "4m1Z2SozVpUDFJTmhmWhY1eTjhJ6MQxdQ7pW9fT76EoC9wo3vnixAoLavNczbVUEukUWUuPPb3YYJnure35oJ4tj",
  "key25": "4XDVJfXAwY63n6T2og7iXYDkQBnYfur7KEGBdbqYvfecJcseuqNLAsb2aF6PQdLUsyJ2PvJjDuHXQKi383FC7UQ5",
  "key26": "mcThfZ6DGuXGkweqX78KaJcM9jWQozWvgLjuyPSNt1rvY7H4HgomwNrrzj9VSrCzw3ncEUuJLJDvtGWzqbLAeNP",
  "key27": "4xrEhEYRNYnhhyxebSoas26mrAqafyJAaudURjuFUdzgCLoVugjDSMroYPwC8XrDPUTkwehMCGh7Jk5996xAQ1s2",
  "key28": "2JCB7meV9fRNXZz6w9HJ8gS6fT6CYiVTwz197RSVZUh7XbmmcHdGcoYE5kFTctwK5DXibEt4LUa4SKX5WdxEXoLF",
  "key29": "4CUKJQkfYEmzYDPgxHhSA9gRe3aCQPndYWPPSzkgkXDS1uhrF6wGsnhXzjCAecHM7Dv43v8aHy8KvbGaFTpDkp1o",
  "key30": "3AcKHF4CVausrV5ymCcmS3VtRRdNThbLcT1ZYEymstjtk3DBE9oCHtWgdtGCJAKP4c5ZHUSWTGgfp93Lp5ufZi5w",
  "key31": "RUYfgq2rRygCpmVvwi5QCbgSACzRdGkHL7g93VW868axS2qED7jcGj2P5tPerecNwbJecjExf1zetXEe7DCjVKS",
  "key32": "3FGUpCak27jm4tptEjM53BVvwjSDaW6cmawwPrWkTcDFnGWx7RN9MUmQ8eg3CssxmFbXwmHTqkZNfNZheqFEZf7E",
  "key33": "cNMA6EwGKRcG71bMh7BJ2xbXtVStJGvj2E5r475KMuH3NyjbwADgUnDsGceCwNfHAnk2i9sYwL5ejN1hLeLrVa2",
  "key34": "N7zMjjFsqVAW3dSmwnEF2vLk3oLPKmvBv2PBCbL7FA3L68th8gZTwY8T3GHd2WCSaD1tQQfcsKCvw2bA68pFUZH",
  "key35": "Y79G51UFaP79YgBS7AmoiiDTFyfq3SB38jcWrWQAWFQwmxHWXGTuUUuFmhDvEEJghUbbnz46GDy1vut4gKVRsuP",
  "key36": "3t9rD4f3M11ZvYXioQAK1ArxRURDrAtYaRphfz9jX4PAZCv1zC2voga6N4UK17dpvo4XjXB6mweqEq8sVi2LpuwM",
  "key37": "6k6arnXYX7G4CM4VWismri4YQjsw6EjYwvVTRCSXJGFSyCJ5KaVWFQUkSbcVw9rWXmNSkGrVi74T8PMEaFezojj",
  "key38": "5VpyS85aXCXwem2QQuXuUwL9zAE48UnoVv71irm2bJr43Bx1u5qrVY9ibsA8W9EnLdjH2AHJJ1uYx3h6wVdBxCjv",
  "key39": "52tUYzmotJCZ465xWGAFByu8GdRmMbgrDvJkaRHXLm7h74zJ1fX4zbxy9SPi7vF6JSd8i9HTFowEJBvackXFn38D",
  "key40": "52rAfH63xyJY9SZv5UxXaVHNxEhGdC354aUREdKWkM94gVtUMXfL45ygez6nQRxajKJrSZ5jdzXS1tTCunqhGxe8",
  "key41": "3BYZ1hMWr9brqkKvaLhVJdFchq1xPhsFNmm5CF1mR5zJZKb6tdPPTDyEiDrnGUwcxFofuDoDfDwH6Y8xgk87ye5p",
  "key42": "3YY5eRBCXhV1KEoV4ehN5Q7iovscMYFaC8gAijJw47J1MC7qf3gzeTmFtsQ5sQCBbMwwrUvwLui1MS8zogw5REhu",
  "key43": "DLpoGjcEeBNv565RbyxdLqm6Wv7zC8XWrgvwFf8XWaEKN8D6oZb2iBrtcBtU9XovAWrCUguBrDYNQFfRtnCVsxe",
  "key44": "43VQZ5QuSWT1vJ1KRbimUbXJBUAJfb9cnAo8zTK3DwCZ1iLkUFtMEvbntLQvRMeFbi8wmXRGjEwPENBDkrJdSZ36",
  "key45": "5MqscfcwVoL4ix54TdBGorhVTSybK8aVDbq9RNNthrLhBV2jJLP5qLVSp7z2e6fge77bqemLLWv8YmkHaoBxpdVh",
  "key46": "5eFLVUo8RXLToUiMzoTcpMsev4zz4aF79DkVoZGwg7vBdDXaAQNbnEP6Ps7PEmgLz6QvFP9mMNyMMWFGcaiDCfQv",
  "key47": "5nNmi4FZahrizVMHiRpVhoLQYfg82c4PKY68G7jSSY8jBaZZZAY1hQLYPs7KLiTvBTC4AWagJujmZSuzRXASh3p7"
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
