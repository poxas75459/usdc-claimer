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
    "cPADW7m3d5aoRNSfmPLg2B2yEE7cwGNuumPzSTu5PLvHPXgTXdCSqEJifonXShXqehHHnkGYavB17N84nZ5opti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSTnBrAgbquwgfW4acAJwGFX1tfW5iuVWa7aGFY6pE8QnWnb3wzD1RgJ78ZhuTa7KMrTJNyRUNPpRw2XHixqVw3",
  "key1": "3EsJXTei2ym6nBJ6C2MMmraRCj4VPVxjK8STdjRV9a63bbpmKT2RcmgxLBCAGXyM4QdYWwcWSdCjeCvL8yLvh3Af",
  "key2": "4t48hchzsHVGNFrEnkspmWEBF9pjeQzEwwu3wd4rEute1qksbH7SJJLgviRboomXXNFCYRVTBmaAHLkShkqCaSXE",
  "key3": "5N9GbEB6Qde8JjYTUmzgiCsTDP9xTqkiu21SwPWHoJNp4zWwbCr7PFCn8mG8hwMy8d1LoTK6Pg6RZ6k6GEvisqee",
  "key4": "45hPKnbSMx8bqoc3qhzViBWo4SExYCAHMpsmcqRX16Aonwy2hg8yi42z9nEKjvyCJdv2DnGPaPdzK2htPLLNePGp",
  "key5": "31d96YcT3LpCb93r14JFpRp9xNKfo1GpQ13nj8Jo4KVAezsChfj77D6o9wXmPkc1MiJFfMVrAyGBtCibRZnAKnL9",
  "key6": "3EBVo1wUAPgUgDAA1b5EbfwcEpUTGGgPca6mE2uhphsFb4ZTQ2mpkd34V5txAFCvyn38UxicdrAwH93mhzE4TeRk",
  "key7": "5X2ZE14SC9KoDseD4iLLxQkz5g39buDwoW7TiCP3G4sHkuGaPYTdQGc1fwjK2vUrHn1fRUe5v2cREezg2uTengrw",
  "key8": "3GyJRot8vLynvik2nVZEBCjYRAYozmgkbYJUcitGJiNrkobTD2Y2s8uaarzzemoDBnMDXj6AYrEuoBkBXJJNDwsd",
  "key9": "3R5h85K6R7cCt3B1PCv8v59VEEmZK7i5y1Fmc2BP29HiwZZjbYju91g2zSasikRiL5qxBTr1jNutQv9VTRpiSYNN",
  "key10": "k3q5jEdgk4bBzJEzeuPDLe87EV7DgUALoVSBrfs3p6F15kwBj8NF9hipNfaJYjU3t6cZWpKCiipZx9HDwiRkNaW",
  "key11": "3zEQrJaGFdzkkkZWyFkkmH2HcdGi9RDnNHXXTs38DJDGv5j66qGRwMN7rn7CdDxyTGAWY5du6Zk8FP5W3PQ1QhtF",
  "key12": "TWi71fX6GLcQEfLP225wyecyKCKkLt1Q96dq4w9Efv4y3BAJr1os18SkuecWHU9TsefTDAXV5BaxvDPNxfLLZgv",
  "key13": "6e2LTbxvZTQJLMf4jqwJhFB6QHvg2K7CEzZDuRiBChJXKFAvT7YHcQGaXocp5dNtDkG4QHG786uXRuUrm8z3PZt",
  "key14": "3d9djxwGZDb8qpedfyR71UJ252wkyYgR3PGETsbiaBx5hJfMkFUMCjY2AkiSJtgj5mx8jmGmfACLLKH4PYJDMGZL",
  "key15": "54dBxWzt4g7Kubwrd2p4ZbgaGV65CEuwMGrFb2zT9ehaHapwgZ3YUamv72ihXniUG3s9GesQLB8UxToP75CP22xD",
  "key16": "5gs3391c9V1BWR6owPuHpj7BUchrpxPY3SAu2cciHWrsnuY6Y1TY5wqjAqF3kpk8dvpi9fFVeUcKSUGmQcx6fgxV",
  "key17": "PFVomtPBH61eKqxGaSp4w6MCqim1xDn67GCgGfKY4RWcF9GsizC7oGrWdmmSg6CnxnHD5aHK3p4Hf76LqSpVdX2",
  "key18": "85dVLC69fvRu8WecBoSqTrpEmQA6vREUsFqag1vQozcNDTQTcByaXsHZq2Q5mt2H8r2A1wM3Ay7rVRb1WdbmpDJ",
  "key19": "4dtzpi6oBwgTjYW4HGUYEF7guBoeBgp7TrtxrtpspeZsmdDge1t8K1AqnG4CnBykcnWUfiQvnaaURJn5BU7UUEiQ",
  "key20": "44GozbakMDU6Tkprxde7Y3RWWarvyQYCPMCNFBfxZZLQoAgpU54JzZ2kPoqQKRZxcBsLqJzDvc1jHrasfvEMj3ce",
  "key21": "5Kz2QgQm9pxJHX94qQPVZzkhhztmqGpEaBR3BynswV4Rbb4Pn4AqxbvWQqm1dowsZAwFSn33ZwyavkkLrhHbFnQ5",
  "key22": "53gqHsgRA5xmvWCk4WFApQwVtqQsndezTcHm9EBaFrNnmPftwnL89q2y53Ethec3jaMae1QDZyds87GBHReznM3y",
  "key23": "5JCJU3mSj2StWAotivkDGHZdwdh46hfbUpjrHpKeXF1fzdj77ktd4y72LdgZEMSKEhC81jzFNt5fP8V2kS82XZJQ",
  "key24": "52BbXajoQAyygT15RBRJxcqps32KxfcQvrzK6MsAakiedF7ygSfwTY5QrYAtAEAyYpwUH7AVWqeJPKFSQe28WN4r",
  "key25": "xiJV1M5qijvQen43GTHY4G5Vdfduze3qqVb5BZ3BBLPN1Wg98wASsZECPm6ZtrRH8MGV17YVsdPExF9bG5VjqMk",
  "key26": "25TsYBR4TdSvV57rTb11ZEnzXudwxVmWmYu4ANpxpuKr24D3BrsoSJN1iPAuRn8hZYj3mb18fZS8jVUp1MTj5rLW",
  "key27": "455P5VAZ3BuvzJKwkqEkYLtgcoSwMLaxfhpYsDtBkYL71bpFVuMHT7d8VJ5c4eCvR2PufUYuRvMVEzymDhEX1CZp",
  "key28": "3xRZAyqXcbR2NFA7N4exhgpjdrPj6fwkcRGuiBhdpuYZHQtm3NdUcxkvfzwx5R5owBdm8eCxTxs5m73GMGdGt7sF",
  "key29": "5kJkr9Cdt3n1GG6TDcPBD4aaBuiNu4687a7nEWDqRwpnqBFizvH6oW569j9TTscLmN7P6FvpaJqrCDZGRLRKQ2K",
  "key30": "y2yvp68FHKAKk2GRLnufWFTdLBp1uUq85797rmu2tUbmc12K9zwJa7BSy1ei5yTkF5gecwpSoLk2CXuLksTGzrM",
  "key31": "3HZ36Fu23PgNbhcVo9NvjgVQ2hY6E46twJD5bpgbJdL3FrSV1KLQ13wpZSi6xMcBdbfZ6Puz79Pc6aG5haW8wXeu",
  "key32": "5M5ZaD3FEGuNNZdzXYipGxdogj3NedBBFGhkibu8VmNpmXizh4kTKwxdKDLT8hXH9phTqzBWbgRAB8jWjGvQ65oQ",
  "key33": "3q3FgzN9Y2f4hbDSouPExMi5cEBKFYfhPoyzMpcamhFhRNPwAoR2LAyf1ka9fhdP4jAjAqJURUPLLvKRtXu2kDHg",
  "key34": "5nGGftgDawyi1CBz7bqprgwGugDsACveG1jznRMiqwCess4m7wm6WZVkg4nvJAicNiorTBYFZrs31YrNJhhqMdxy",
  "key35": "3yByrGzFsJcSuef1VPzXPNdnSResYQvbmitbGPcv3bupfs2x8iDQYShXy471fUtu2dTPFZQv6iz4FzEtFf5zAVjX",
  "key36": "9joAwh8vqpBQWKssbdSK9cVVYuJTQFZDz3yTwoyRbcdG4MQx9pqzhEWc1rXiMKcC9Z6QRfVUjSamtv2Yap17Kzb",
  "key37": "4yDzzZaVDdg4rfRU8uKhx4oCKtxdsYJU2iSfz34PqayiGEskWWZogMqpaofG2LqSBBu79mCFFjVWgG8NcHbCvBxW",
  "key38": "BGyZ7H82SvfQD3L2W8x28mTJEGCTSpv1Gc98amcdwCqfNKVDuQNS62Sr2qtmL49Cht45BfK5Zb2XRvhUNbLGW9y"
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
