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
    "2hys38GW71FuBo4q9v8UMFYs89qKBSoU9ZXHWe4Xh78g8Wh2buWHQNjqSzaQ2DYLHPBEaLc9aSUvSKxpHrVKQB9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geV85T3mtcfNmMuUusv1zeqx7BdQkyjg2P2CgfgbUEsrGJVEzthHTqF36JtqJe2CD9uNt31YzSp8VYy3CvUab7f",
  "key1": "8WENpYjNv98AzpzMiNqabhUUFgBt7ydgx4RyoG3NTeeFubASb7oNnK81WCxVBAnDyMjsxWZchjDYHarNXWtFo78",
  "key2": "5VNhNctBJsy2yeQQLcsSAYKBbHHbWGTz6M3YB11SxFGqJPyz1DcBdsv8n3SbhXLC7Xc85K59sTs9o6LCUJZDBdAv",
  "key3": "pTkjjgrnsW7iC1eEya4r2gxDPhBxjZbzkU1G9r2RyQ3HESFJWQgVhKmKcLnEs7gBwa5sotqXGkd5fFUqBDWgb6g",
  "key4": "42VmC81ki7pwHC3zhwqR9jSkyuzuZQNxJ1WVXxFXbdAaEmPfu2S8NDRQhzcoFVUx3LCvY9xCqmFmg7Xf8q1dRjnV",
  "key5": "5Yd2jCUVKUu5Lek5stu1JsxEQRpEF1pFbeNDknNBu6uXFhGNeVRjXmt3YoSGvcKCm3kcJ2M6rvEfWWL9Bn6u63vx",
  "key6": "47V82Gbe9z55f5KshbhUVytt4dGQc7UvHu45kPrjUFN36TSva12LwwVuojE6Ljfh2ZnukmR99cvJsbDDQFQxduqy",
  "key7": "4WebTL2KG6Rdb3ShnmRKFKqxdSFQ29zsUquXQbVhkBpuVNrcZ1YKpu6DaQpod3ETJHYS7y8q9vhNpA3NoDDgHcgC",
  "key8": "5RWZPeA1m3PSDb1mJMoShhbQrmyUPPr65Q5UDSDREtmUJaa8xbBCKRBWbrj2yR3Eq1UhDqywUCFKJ3JzHjcSyckD",
  "key9": "54RMiUYkcToqqthW2yWdRG6tMAf4tyaD3UCuP3yKpWqbWE7k7rvFZx9oCrtG7Carx1YG5AoNWbRcED2NB4kJtCrq",
  "key10": "KybXMhZRRzqA71FxujxVZLboeU5buwKXYmr3JQak9uUZ7cBtGJqTGWPP8gWaHKP4Sy7GhUYwv6avhLNRzy3AdDD",
  "key11": "3Mxwik8XyfJ4zM6TKfV4ha5hvddS3yrh8WH2L4uZYKNL79XtCb7xokbBkhPxj5sUXukTDcMxatSn2ffQRK2HiiHC",
  "key12": "59R8MRb4km91hsw3TVVfYi5sGBdKggju1SRytuxa6XArhY2VBkFQkmwbawEYA1FcFRzyddg9ayukCYacpXDh2eV2",
  "key13": "5c8MWhVMgHbKLUV1FAhGLSdo5dKTaa8Zmggaj1LGHanB3NjVdHJDTMBbFAyVQ77ycTpbXQRZ5KKLSX3mcRiBrme2",
  "key14": "5VZn3JDPuQxvjGrwHt2Hk4kkaGner21dKCi2DcBwxqTjkd5DBuJca73ZXBivAMHcVxD8jTgrpRSvsb9EQiWkgaZc",
  "key15": "37cz53C3zb4MPwAp8xgWAZCZWuTLZFdrFwNCAWfjoyT2hYjv8ie93f8j92JdKXvXcYSbRf6XHG9sNiUKirWh2BKH",
  "key16": "3cFtS1FrRbTyxAaCobfReo2FmAD3s1t7rfhey7GRiCzsNXPHSfRTYZCT6eHf43N48rHGBAbRa8YUwXXqdLdi4hJw",
  "key17": "35BXEE97KSSTCHSgZVfBHWDHweWio6MTQiDvynrxSaEBqSFYh6r1ChAuTsGDEBWcFMQXPzoUQvdKVhffCSwLZULp",
  "key18": "5d2HGUFpkZkQ7M2Zv8UUjX7BxEow4GygtBo6d2RjRrMaaoLhDiuQVLqZ1cAEbkZuWo1UigvTUvk1pmbBq8yMKPC2",
  "key19": "LaUXgdVt6WeXwbdzDEQJeqLneggduUQELru1SbB2p3SCMwzrBonanUZ4STJFFqPdQAAU8dj3S4gBQ5XqzpECWRL",
  "key20": "cXWVwVYjeTfFM4Tx85shRzLXCtXW2sMdjkads6dshL5AWfSWoVfCcVoQfquvwrNku8HdvfswpMAnrR45JBvakB5",
  "key21": "NGrNCMgewU9Dwd3vsrKmcVx722K6LRRzauNWZsjjJwaXPFsPt9wj7VHeLLiAZ8L1MA9XxMjiD1fmwj6sBz3yFUc",
  "key22": "33dPpp8ET2cewnjkLuvJHeVfJfXSAahUa35izogi3HjqJuQKChKWtyDDkvJyzd4ouLA1S9psbCYFtfK1whCo67TU",
  "key23": "5c2hN47djmsKUP4sHgr2oVEozFRnVFVygc2B3p1K9QaaVHeiAaHcJcE7e9zxuUMbsFfYaHiuRv1JZW5WF998NBP",
  "key24": "3uBMYiJB9EQAcAApuU2cYFJQmWnph2BcoDtVyXZCkVS5FHPn39aJ4h9PwYBGw1jwqMDBMmnsFW5AopE6hNCx3Dcu",
  "key25": "2Yureuu1QxXbhwHxbBnfTDwxQLF75NLFUbJyqEAN5yT6AsnjBCxQuUv2fpefgaohc1NAyLrozqgNhDzeYppBUbwz",
  "key26": "54iTdh149nYLggmHKX1EYvpo2JpksRMrmHdz1h8BV1auKVELE1wqHjR9t5984MfCGjavGgT91LuLnmdAbbnDq298",
  "key27": "3P6voZiJ5Uy74waxF2MNHkcWxpBUG4BJN8YoVVobtjqeudh5t5SrFvp2gK6stJBMkEJkHPma7mkFs6dwXRBNECT2",
  "key28": "24okRk7GzzpaJ7RFbn1mZA5FVBwgHX81BsDoEvsvp9B1eZhf8G77V7cmAo6pN84fN5Xf5cDLno7C51puRn6UEXub",
  "key29": "pSs71BiKvHnjjMGfQkHG5SfH8m3aTjDHfJj6he3bB7TreekmYi9qXhS8DanaWXbbjCoxedmWjvS94zxsEc8FN2W",
  "key30": "4qxH5DoMmksCsx1TY4wcygnymL6STtvgE96CzdfV7FNnJHfHEv4o284RJ45H3NDXHa9ZrNUWS9xoPUfnb9dUjwpg",
  "key31": "2RRcyt6PrxhVtJXnbsz4PGJG11EY8iqSdca3NfUPK3jqBTmf5dyCEphpUmGS3qrcJVEGqqBDpTLx7u9bYTTVZZjg",
  "key32": "2f1rEX16q2rW5x1Fyuqc66mYiHRFTaFKHXuYN6b4oZfbvj49GBYzBzs93ayYWfH96sKSyfeEHMAYsRcnCLQCCspr",
  "key33": "2w7y1AZqvK8GKf2Jr5JXV8aPP8g1cgJzNmiPNNqa2hBceH41PYtHDk6uDm7rayTvnNL3Y9tH9DcektuEjCeWdktq",
  "key34": "2wW2H3TV4mDwgEWSxHCL5uG9RSb3vXoB8xQLHEmtQF8GuH7c5aVUogRf5ngrVwVmNmm4LCyxL7FuiPUtSbGRKE1E",
  "key35": "3npGf1uiy5HFWuLb6DR2AnBZvdZLBmPmRbMuH8wmuboyVcL8KhERV6btEtMWKm7kkc3bRjs1nApLtVRjBKswrvv6",
  "key36": "5eQGMLqmVWHSthHmt8fmcersXqFZWWeQc164zJjx2vXqoUta8dhw2vvA299ETPA22UvmPiZDse11GaPZLjuTupfU",
  "key37": "ttz8n6EVs36d6o2qzmFLoDLKnq4qV1eZj87Po5YbMiZ14JHyjJpgjDaxL1hbK5vkQKugGctLhm43nBu2sja1xK5",
  "key38": "5y635ZBMnoNkQ7Mxxyc71BLsYMfiPRQjn34T4FMDMccvQyVayhBtPgPfoaQFRT4RybQ8SeobypcNHEPzPeiGYr7g",
  "key39": "4yGu3kTVHiHXAZPCRyn8zm2iC8y4FsZGhCd93YQoTsHbZc5J2ZbPPW5HQCnPAhrhCxvwJZKjWLUfk7C5gHZ18eEm",
  "key40": "3Gkx8B9eSrGS49iNJAnwJbzm786gRcRDbnBN68ANKYZsDky4JkRen7BWQiipJAN6xZzHVjPpFnMmUQJg6bSUYwxf",
  "key41": "3JZ4izdxJ66daU5QLTemgH4azXTNwnsAmHVyBqPPqdoQQtPi7y5QbwRiDTrzA8hvWwmyuf9DP7q9WaguQNVxys5d",
  "key42": "35aYq9EvtxBfaN5df2oMdUv955PrPQ99DgCyvFWEBNDkfNVbcsbr1P6diG1oBnvLUxHna81udsdDVRcmiVPFetPq",
  "key43": "2t7JK5cS8FDDphDtZBxFamsVj7W8uKvU4jQmF9sG2dBaT32zptE5q4Gkb9XFwhDtHVZKavUskQnV7DzwPJGvFQn",
  "key44": "2kYqicCmzk92bpL48KdWwgbTqipA7uud1dJaME9EGY1frFbTeCi9YKYyu9Aid38HDocqfkDC5d5PJ7HxKHK7yNLc",
  "key45": "4W9fNUVsHWUyPrzDpnxPKVT6y2Jfov87ysPeFEVqDdCnFgxBLSYTSZcEeRmNWZiwfDXju7emFg1JKD1B17mJ7EP1",
  "key46": "23EWkWKUuTjpYNUEv8s81hTw7gkqxLpSVAJGkUeq5QszJ8Jx7ffd6wAD163gmjW5TKErqKYTPEhgn9PinYtoFbYc"
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
