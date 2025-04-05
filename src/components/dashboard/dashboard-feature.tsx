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
    "2td6ZuF4FSgEzWi7mbiqdWVt4Au6sniPWhYNPUGnJnh77GPqt5hgZSaUYueSGftN5xkGxv7S17AqWaYhLwCuTuCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53EgDVZtNGan6LAYVJcPVRQXwxRw5R6rkZbMVWWbW7uA5g8wraonNFcFwt3qB47yLKj4u7X5CXcjDqMpY9N32Fhh",
  "key1": "51HpxhGeJL6baChQnvzM9A3icjKnEbkGye9AFJ9Vkhx5CzHBaY6fW919xBPU6YZkSApVWZ2An1afFB19dchpVGdM",
  "key2": "3q52YPNfPB4VbuHmRoWnxgz6hbwVdKAcr5QEWco3bTv4SZJhAmCMnaSfGogPncq3CqtrxYhVLnvJErkF47Ryi1Ro",
  "key3": "BhT84k6pstKP4ZZ6PcWyxp6p2cTDVyHn7HbAtW46tzQUZewQGA6ULoApP5bCk9tbrekukY7oSHQzApwNzscNXdy",
  "key4": "2azoZwkAXzSyjDJWEZNqCAf7piLc9vtSE8XnY2aLLnXmPog6dv2YRrcK1VRRPYSA3wJJ7y6PotCwUm8BqzgKc6nL",
  "key5": "2JH2GqjA8cVVLV91HQ4oKF4nVYcqAFrczT1ZS1nobJnXwJwnnKLGXmqeAgyrxPgvfoTXaHBzZ4DS55Rb5GpNRagb",
  "key6": "4eYy3Z2C6PSSTkct85LwcpA1pN6nUd3Y8Ppr5eZrW9Wx2tEJSVnaYLB6VjgKMri83bhPdWGMCEgaeTdoVzQAKdGq",
  "key7": "4pe8MQmppPfaowgJqn9qB1a317Ccxeb95iys4nJZJsCLrB7uJVTGG4sW7jJgeoYUdNY5h7o2pUNfGFJEVpWXqkHv",
  "key8": "29AbzpFghVuBNE7pdSXx7YHnFR8UNWrutnzZfgRkAwGGjwTFhawZWjn2aLeNWZGEExE4vtaVYGV9uksQ2UCJDsH4",
  "key9": "48nL3zCJzvTyotHd81pRMSUgPRzU3NHajWNxrmQF4qsE1vcYf5XNsV9BEGYktX8RXzjr2uZmntxzPo46K2ccjrQu",
  "key10": "2fVGqy1xNFmervC1HUwK4aVrXKj4RKzLtZc3bSE28e1zxmA21xf5Q9xCQv2qFqs7ErNEe76A9Hw6zouXaseSCbiu",
  "key11": "5UUksDUCVuGbVV9WpwhjRdiS751JZX6DUwnQUDULuyNT9wrvWEBLKdS8k7WD47A2XXZ9XJBm1c83RiPhEtrDcKQe",
  "key12": "4fq8taRR4s7qdxJuZUARwLfRsekPkGHdFFWqkv2743X1upeb42HuFhqwnoeKdj2NLmo3qBBaKAiwbJ7eX1AStMJY",
  "key13": "2Vqeh3Y4szmUxU361vTx1P6pUsDjoeEhJqbwygMUz6RUQTqsJJYRVGav92hbYeKtCqijCFjz8ouuFnxbW5GKu6Zz",
  "key14": "448pCmbt6aK8EjuSm56N6Gx2h15WAKAMZnZC5jjHUTMjyhKpaxw5eP4xJxhVajvYCrt6J8iTD5fw86qS8ecj8qAu",
  "key15": "3ogHMjgvigqnebwhBrHUDCvz79C2hirPKQKZ34r2YeEP2youLQf4PynahW5qPvhJCMj39xPEuduHHrMeJSpPYUin",
  "key16": "2UNQy3FsJcyJkfr3CmFR3WZEQ3UJ6Lb5aHs7b2dtAG6NjmGLWfnh4Z7WN8PJvRipRuGVmudkYk7P5eH6y3PLzmUg",
  "key17": "62j3xzHrEtpcVxacvU4j9tE9zZpByzU5dUZH3QkjoMydM3HWuPi9P5d18Ccn3UtoWbLcHQn27wDMVbmMxysbEywV",
  "key18": "F6A8d8DHwHYx7cUFowPG7QqS1fBCnqCznDKa9XkZrXzM6NKLYiLnkNrTmbjGWvAXmeU3UfKBmtKYuWuUoLaY3rk",
  "key19": "Likq98x9XeQtPYKoRmc323buMFbNNX5Fn9gYxqqaH5p9SWVsiebJiWuynbRCCGpyRktCfQvtemyDHoJm7Vm9Jzh",
  "key20": "oC2tAZrMY41KFaeo8dd5fzzY5nuim5XuncCJ7Km75mR91iwwGsz8y4qm7SatciDqh2j1XH6wqjGtu8Y4ARxd6LD",
  "key21": "2ZmLN5TBK7ZasdfySCyWJw8TPk6s7oWPF9t1H3J13qLNA21JA4asMhrVyKqjWWPKEmygrMxU4w65VUBMFXjxdvHu",
  "key22": "665szwJa7XtsQCdbiHVa5JnKvxdEjSV8XJpoGos5fvFhcUz4hAqG6NCHYdBxBcTxc81TQT199irQkkL2c7RmUGbr",
  "key23": "31sTxAGH93g6oNrzH1DD8DqJ6EshhRjMu93zToqyNH9ZFabnzYXKZaYPNCLVB8MzBGNfAhrH3qZZHVsAcZ8dePHz",
  "key24": "5XVd1pVx8VKmVSMWQPfpHDx2MqSk5aiqbu1AwG6D9mtsEqBEm13CqzaBdkedBSTNCFNEZVJHbZVWKzUo7G6fHDco",
  "key25": "W7tAk6ZL65B78AEaxuWnWhchSWgzEcu3q43m3wQgZkU6RrcdQwQjRnJRfC7Kxb5Cxx53wRa9cF2HbXxoC3RHUYW",
  "key26": "2JLyxBkrNRypKySGQasCzE1oZC4jpg1wLWqbYMr8tyiu2MUHEs2gRVdrfu52T2nHixuNrKCULh8vbUxP7ph7zNy7",
  "key27": "4gNZY4yWXT1xbihRgxa8fE779q63iTCqpRQHnpqFcGuHQZNtRttuFZMtdyksyufqRQuaZCihkpxUz4TuvqSVFxeN",
  "key28": "58TAekcoEuE66wtB2QvAFmbLR4rajP9CA8r3BzksLr43EEaBUqx6nVnihQsvWima8ASWZ9H9Mc5WpF9tsYkJy6Co",
  "key29": "4tPHPpAMmYCa5DC6XRFKRjAxryrUVktPjq5mahwMqxJw1YNXjXFgLe3G7QE69AzwSaQRYWwPqEM13fzVmCSnfyx5",
  "key30": "2UQfg6kitSC3YrSZdxjCTtZBVsGBbkPeUkB4cMFkMDoKzLDm9GoPiwN79TCWhitPyijosT5JbKBYi75CXhWRBWT",
  "key31": "3myhojQCXm5nHBvLYwP8NZPLTTYrjy3EY9r6c1EdWcMHuotVPTF3FppWGy9GATVqYqLLXxFQJBzL7f7u52AbSAZz",
  "key32": "3B6qzAQNs6afZow3LRnesX42nqCv2yRW69KoCnQX8wJ8FgVBdCnjMZCHkA9DodXsZV1kP69jJDyp6BDoABsZp2zr",
  "key33": "5TRPrRByLWntqMrqQg6QMMyAyZD13jpuf585Z9gi7v6nBd4QC7Embv5D2HAbFLsjdFDuQULpZaXCNpHeg3dGX3rt",
  "key34": "5vpPtaHG11p4u3jjcAhT69jjLBVuCXVi6UiGAYf83rfBw5KrD6DmX3z69iHN1ChkK3xFp1tDV4RzXWDRCsKPCNRy",
  "key35": "a6x1VdK6q613bRLNpy35eTZRp28FeqFneuPFNaFPXpj7nCHB4kbVUaFFm2qRpvaEYdcdPv1NiZh4SwoZ6aMPrHo",
  "key36": "38ShmXiWzM1yVJ8QKnDvy9enXXJAFoJbBK2KCdYyVzVkfYLrQhPxMJEuPeNwkPVG5UjPzT7KwQrvRDzZN1dm4ask",
  "key37": "5rqr8nwR2CT6KBKKi5LJ3amCEVF5cuvfMNoWuRdGDLwLBTZG2GPcFfkbTeqzKiJAPF5Tpm96UYn77rCWSzuEPRHk",
  "key38": "4uP9ia2MFvzAkP555mjtouKCFh7AkAnjM6BtkAw9rp8SEFuTnte6G7hSUEsxz1vEPXB4T4HtkWozz51DbHvKPLo9",
  "key39": "4LBH4QQjSrxid2kNw2dFQUqTDJ7E4fJPxLBMSa361aGd8TpPbKG6nospLzzkLApy4qoDca6tK36H8NNdodM75pLr",
  "key40": "cqULwRzjPdWHDYVeNmL8WHrEyUpj2WY2gPDBDSXNp1ZSqaP1zYqfM2tqUgdLfUrFT5qHLH95ZYeHmbaiDhEMvZ5",
  "key41": "5LNQJ3rEhHbBjgyR9mJ1RxeRGKncYhGkPueB58kmxopcpNDi53h3umjJeUQCgPuoGrwTcNQF26RTAchnwBLM6YK2",
  "key42": "qxAFmwZpp56JwN7oDepuwJGbUvvftLWW1KLtRTiwhv3A87tKRND8zoyFu6uxZmUy7nU2YNcoFMv31Vts19xC5sx",
  "key43": "2S8Q3Eyw4X3s6668DH6NaRk4eS5aou4A4NFym28PC6Cw2i3MKf8mfj1ef2f9we3HapDLV6Jpf5MNofQUoqBhCxEg",
  "key44": "GVL62WBN2cuuCY9WdB7Yko1HpAaHHtbrE5jBdH46B4yXfua2THyBoNwQyxKkQos91cjtZffWQHva81pt411naZz",
  "key45": "2Ds9ncCKmHJTQdHGjKt7T2Kv9LPbdgcE9aXbW3u8kLZGnEcaJc7q41mxk6C52XqqsRo3KXYPLSQJz7qLedRuataz",
  "key46": "Kr4Bnsjmnc5is5EjfV1ZrASy6ytoWuFgVLSobZJ1vUJu1pFmyNRUQGTreLrpX3oppurXaFtj9shTHVnEMmeLcd7",
  "key47": "3A16C1rnj1VBaK5Yg2aqZbQMhdGijcMHsU17mUzUgCGZYWSzCDHJWwvfA9tVA2Twwbt31Z6DUR2Ux2HwfnnRC9nL",
  "key48": "48fVJkVzX2oneSgohW2KF1TPEdTBqAGUv1CWa19yJ2wBsqHm4zFfWdLkyuXCKqHrjMjKucDVLPZLEJqUagAcs15G"
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
