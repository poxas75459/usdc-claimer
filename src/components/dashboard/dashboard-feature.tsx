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
    "31w5f2Mf3DCsAgHS1MnNCV3GZuKNPq7j7zHXcu89yHg7k9FUodQShCcdNwkgc25sxcsWpRRY5Axu3QdPXoKLoXvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dxmQagpCc8WbnG6LERjmoo5HuRk9LMVBTQKaJNkuXENsdUNk7SGXvUgJv1GDdAmKrFbpqUgGou7mZX4q7Bxqfre",
  "key1": "5t5QZ1L2rVupvrrDrmQBBTajHKRHYXBkC1McTUZHQ3GRTxnYLheSBRYZU5AdVtQ22kHEhEhRZsxCBSDse48Gcv2T",
  "key2": "5cuESKejGCVQefTJhRyQiTeRZPdvNQzuPFvrxvAj6bxpSzW6TQy5fWhFxudeLMXq6WUaoVEd7QzDcw9HyE7oWs15",
  "key3": "5ScL9gx5pcg2eUQ5GnupgCbymyanHQ9JTFV6qUGAjCTeXAi4d83NqCRy84jC9RdJRzyaCcwfNmNSFng5a39Yf9HM",
  "key4": "46TXH2mGo4VJH6ZeTv8YTHD59ebd54ghwcQBBXhwvPg5qRe6bG764q1wPxtSH1Cwh3AitQBL6FbxuSPsUAHUpswG",
  "key5": "HekxZro7eCmodCdMEUowfAtBFFU3SkWRfcAxYq2sNmdn4dmhJdAiRe5wArvwa2RcDqRRgr1akXg5BhSJpgBG7es",
  "key6": "3vrtsg9tuDyMGn9Q41dq8kLjma5AF1xXSLnAsWUW6ZpGCa2BX1dvN45GA67H8Ei5RtvyQzGdGWVsyG9qpP9BiVKN",
  "key7": "3iWDU49iL7UHkkm6cAzzvMeempyf1gsmhqREW5m4FDhzuATJDJygsZMZTuUnk39krs8fM8EYFRxYTZoki4y2h3id",
  "key8": "s1ju54wXLmyScFGDK4F2mjU9d6uckhQMQog4QHVVvLvgbpqJ7xPTiQyhkg2LGqWHLjPn77tZV93GdQKyrj53diS",
  "key9": "31C3ocB4rf1GQMPSBFRLJ5459SM3NBa3Gz7fkRymw94B7eciiHMbTw4hP2vkxmRaSRrwKdgaz2xXeAW4dKeeR5g6",
  "key10": "5EoeMuCu1BAFzetHNeALqZdPmbuRZgy38pJgSAHafPPo9fW6QA4GrDQPYXSUQhifCYiGMweFHyHa5czdQEJyU8Z9",
  "key11": "3DTCWemExHA22iZKryuTwp5WF92H4ppMbeBsVxmjVhSQDXYZfe4t4UbkhopP39ThZX3WzjUwUsPobjLLWgxfMMrL",
  "key12": "2kgSn8xkUiwFYvxAhTVBsEq137c7ruyzyz2jokUH3H3dKyjCLTiXfB4T7umtkjDZ5tyvQhc1tNThZSFUaVpy2bHL",
  "key13": "4NJTC1TQMnyibFiAr3sA56txghy2GmnymJLrCwswGyNrNZDZV4awRrBCnTba3cAdJ4JugbgFRNUeX3AjQuwc1mmK",
  "key14": "379E7rg44WGWvkRx5z5qQuhq7KFMNmWVkdsQajLd32Kw86FGKsf4NApp1tKEp3cwfLezNs653oAT5GEtMVHrGoKc",
  "key15": "fVg44PottfGsVkJDnvzmQT1b2ev9DLDzq3UasAogR6J2k86ztwuJFMCz22Kdzv1JMJvddkvUGCsnRHo8N4Gbuph",
  "key16": "GZJNxkqk3NZemNjmDxsBtBkFDL635Zop3bNuHuvaabPr7KB5kAoSjUZbSnSK6wGwxgEbxMYR3d24Fw4G4mqzKX2",
  "key17": "2BGNBP78CMFPNkGVt9U4TFu6EVMdkxF7yF879ugB4TR5PdwmTKBwEjv4p282tJbXZurc2DqzRymeuys2nnokw3Na",
  "key18": "39t8qzpq132gjft2aG26gQ9scQBZCc647uJ4QpZTixtKPD35i2exZXY9SBdajvHRTnna2ZS4ysiPjgo3KAsUPJMQ",
  "key19": "pKmKpTtemwQ7KML5QQ1vxTNZkKKUvbqpL1MSxKHUAxSduTbuyGjnNzebD63An1FxSyH3UnuGgFWeaX3EP25DdPa",
  "key20": "5gsDrzHKGXxvazSaoRsvPPA6fmQGzZTB5DTSXRTYMMoz2PjzJuSCz8HEKK33VsPQD9ZKKygoQxReUGDnGeP8eoHi",
  "key21": "3xwCCrqExNLZntiBhyyhGDrTLMmYUSgoqVizR3W47mPywj7NPZkiSAaMVQYrPXtBT8wovTydz9PcgQYQGgmQ1ihF",
  "key22": "iRwcCcQWLNNudgGqggN2wGcyTa5VGsTtwzNhzQE1JB5cC39zt78xtaCskn4puGwBmexd4C45vpYHYcFuaugAx8G",
  "key23": "RL1mbkdoQ6AmfFj8ubcEcgUq5jYDJHAoubSDWtipchGLUHcR24xH4SzvKKFoQBWv3szFsMtix898x8gQauXaqci",
  "key24": "61PNjPd8t54JAb9x1CSYipfBsXaa6crJyfbzfiDyUw1mWdRhizUi6tFJphTgUBvgpeYTACPG6EUXc3FQr7hnqzYw",
  "key25": "5a2iWW4BxniHd61wqQwoQMZvAE8KJ8i3BrYSNwFMA18zQS1U5EiJcGAngJU69UYibv81ANq3uEwfj4erAW3ULHUt",
  "key26": "3nnBCMKZe7n2Q9nN1mAkhfETkQrfZjrA8q8ZNYrW7r85bddxaCm8XkUAKjrNinxB4ycPoZk25Bdog2CH4JTDkQ33",
  "key27": "3sHArdsvkpmSmiDziJBRuw4E7dxPBnPr1nFqRhBxvDYHjki9qBfwdFk2GEXgkuRFq8NupZGWT6JyTKp87Hi9v3oK",
  "key28": "5EDP7Lwg5uKmuoMq9seV6pFWsajLEVz5kEHKXf6PFPZu6HD1DVm2ThXGHYiFJJxA474eU3wFmFmYX6QKWaWKXJ6D",
  "key29": "2W55akscwqxefuqLEcADUf7hhzXN1o7uiyqKBJfYdoPkCd3XqgzC66zxcPKWYiKYKimJjfY69p1p8m9LnVKQeZVX",
  "key30": "5mN7XgeQFj9cXEx8adHkTsfbcDi4LYp4LHLFiUeLUjMF2mUuXzonpSy8XEPakGFPhsUDBg66D5Gu9yymsL3ka8kM",
  "key31": "4TCKbia8Hwd8LyMMB7DMYaEzY4b3LbiocA6QR7AD8UAf3YHoGWaoaPvGejgVMBG7UYsmjdNw3ihtGFEjSZsR5pCM",
  "key32": "4Jkpmm8jQvUdBtkz7W72VyKLMjqZMBStmgXqPk4L4jGkZxh3N4VYJp4jLLoa9ErG7bVptG3t32bhdAZFk2czHZuF",
  "key33": "5P4Nn9Rf5VebSod8N3Wxhc1gYWuaGwrsF3bMFmpXySyCp2J5CVYH6vCKa5WSLTzobmFc3CBisRTR6iAnuP4pX7yR",
  "key34": "2W1hZeKBUKEvuVoPcUXqByAehAxykNmb6FbApEBnSP1XZ2THZFbDb6PCbEDaC9NeixUveN587NpaHugHCwMFJzEU",
  "key35": "495tZonbC4zYoQwaRraucfobaHTU7eGAawU4wkXXM7Ag2tWduGeQGztkjtnW4FNSNbacXBZJuiU6EaGVbnMRgfKb",
  "key36": "54VScq2BJbAbzWdaZs1PceyQfqVxVsAbzqsgdZQvDss314a6KXLrxJqUQin64rfvzxb8uMq73nEMSBGMaZX5SjHQ",
  "key37": "5r4M9z4krntTZDjdhRHUB96Gst3JxrAd4dbF6cUUK5GziMc3RwpunJs5QUn7gzisbyStsFwDrVHAphDnis6knbjG",
  "key38": "T3q3TVK6Gqn9DfC3hGwwmpFXiM7dTHYLg5kokQWtuGra67e3NTh9823eNiVcMrSiJTncEXgZP1vDqJ9RKgGMJdE",
  "key39": "2XfExPWFVju6guhRk6JDZdWgc3GDrfM7MeRXKvN9sqfa4KP86VotADbUv6jM7XvGRcUQGsmQHjnzGWmAPY2uoyjF",
  "key40": "2QnaBo2znsZ3HCv3yAH2jxDf85mLqVgoYAauMT5dMNJbJ5CdZh58ZqxzYqzG5ALqudiwJLnQFtSqXLhtmL8QLy86",
  "key41": "3fD3UBSA5xHVLvjmKnajHnfMC4GXWEDqHQG9RitQHssHGdnkqJUVaAw6eDXXx2oC8jQGHMJoHytji9nNTEGTafvS",
  "key42": "2eBgw4gAPSLjtyFJUax78iCxsSSdy3YSgkTotPUGKe23GsYxbx5FmNxk3gky813G36GK6XdBMjj8P5DKxaRYshUr"
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
