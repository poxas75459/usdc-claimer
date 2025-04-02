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
    "3xDDyhWUErS5jUyZBdooQUWHRqjj45HpDJ5qrCG6ixvxoxFC4ANS2DoyRYHdorWdrjN4EHxN1dodiCNBu7YDVfPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SwQz4tQLFhKcU6tCrWqAQoZGC3LQNKPGYwuctGFF6s7T3UyBf3jrjZtUCLMkSuppw2jLdtBcCzWGzf4vyK45Sn",
  "key1": "3vRA252gL4MnAiDn8gequDDFKZuMTUZbzPiNVPQMdtmK5BhJec25Mz7pnDfgd4PtzQbCaQRDsZjmTTQCmYTgBr3x",
  "key2": "54xdyo163rWGdJ1hwkQ9idVH3ttVXiwKB5515E5BKPFi9PpFD1BpfNhuydz6k7awrKPFtv68bdVHSTLrFjhprrck",
  "key3": "cLJadpXWPeALYq89cCpA9hara1NsgSyQKhEPFvanVp1e8H2gjrwt3oanatEsjSMNvG4xQyzRs3jGjDJDF75HxRm",
  "key4": "2hzupgnxnRsVvNzaa2XUWDNvQkrH69nNPugddTeussvXWpnpT7AvPrLQM9nsk6hFxxEwT3bC76sBRpAgvL5KMYiz",
  "key5": "SxEpEkDTpm5e1FeT62vNnJ41TZ4uQwYMuk3YoyerFx1PgU98CNRDb6fFPsTqwwGKkymKsaApa9b1LoqM1ZUarkA",
  "key6": "n9SoQce1p4mvB1oPSt3VCjvhvSTNy6RZdNGjom2k2gmW6tUggn5YJ6HLp65aPqoQYZ72x818dXp2uGxSidRLNJr",
  "key7": "3vXu7ffdV3bVHDA8nmAvKFwEs3ykTVZi5bJTd2EhuUyowC9bFmdQwj5TLWUHCFPA2rJF5nfp3qisyHVDHNVTcW6r",
  "key8": "5KuyMEitb6NzEogoa69noPEbvFYfZrTgW8p6kVQQ4ZdMEhwdAKSqXvVYuLQpS1zesZREH3R6C4Q4N6w3oE9EKFQ5",
  "key9": "2kcnYM66yVYJJPHdbGwwmitdcmGs5rtBwYi2MeWKJ6EtsdMNsmFDJkXUZxJYBWscH1jwMm61vM45mWRVYcwPqPZR",
  "key10": "3M1PkZP7RWRrj4SQvKfgNq1Hz9KRj7KwRKqoDyNiESuvG6ra6qYaJQwswym5rPFdHeyefT3qiJThh6QH4fCQRhXm",
  "key11": "5XdA88Fn2b5XGDKhXQSJSL5ouFJVF3VkHB8N859XLan8SR8EcYKvwaegc3Wu2hXuEkof3c2T6szuDKxfSgKJUBSP",
  "key12": "5DevvhrkbRHfmvTpkdncjrH4kT1fenTEG3TLvGem2zDGxQr66KuRKTBJvhq8QdkSDeTp31LnHFBdbxechXjVp4xn",
  "key13": "ZZY46eqn8cvwAPVpQsr6MkFkKULDiXpvuVD1dgV2KY4TdeGvXWcwhmM5MKg5vW1W8KnWyb3nuW9owhJXJoMpZ2b",
  "key14": "L4vxPHDUUmLkcd2tPJyKuUGvnmrG68nBq29NNKLVUesDgiy2PUqomYVpxUGEjuu5GnqteX15zLS4K7aQLDqg2vf",
  "key15": "Ac1mqAXQ7pvsW9Pw2y1ZES5buAH4Hxd5BVD39rYG1Hwq1w7fwLByCcRE8Hkn4AHY6PzpgV9hJTt4y4HYS57dvf5",
  "key16": "dsNo28Pz5iojpwi8BXW2eeqc4AHE7HCqBiaZQwd5EQaxKhiA1iobBXdMBgiCi8nhxnJygcKX35HSyjH3fPAXakP",
  "key17": "qQy9XtjojT2RyquGnqfdGhqXYhnML1ynwXk9BmzNz7WfwXQZ9x4nyXKmKQ27mECQFyP1dnN73ry1SKp4VP75H1F",
  "key18": "4q9UwQvPfoMTs7BMZoE7JfRyzMuXbub3RPHX4WhoCvN1wEaPe8TxLw8X6KmWdsHkALkLEW3H2abFjsiw3jrjtb2h",
  "key19": "4dWsn61TBjsA2nk4rb7DRACiDMx3Fycn5JUGhAYPrpSKTJJ7ccpbnseZJok8SHbggSgTaqzHQvY9JuhGYcBPrdj5",
  "key20": "4n7pCLsoJgQiHm3EjNu2hCxGJ7JYkcnjjjDqsgRTMv8an5DRNPX6vmvH21RFJ3zm8fRbSwp8TbJhUmshjSNSnP6q",
  "key21": "2b4o4LBi7icYiGPQgEVNQhCPjMAnpxJAPkoCr7Gt9KtGWBVhMv7epzgSfBraLmHwytuv7254qV9PXbeaU7A6zDP4",
  "key22": "2F5G5sJh2j7BpSscugmX4BYFbZdx9uGU9cka6b9ZPShquuXTRNWwMp3rvauBDPG7QoFZRBAoZSLAoEgvEarnfVCt",
  "key23": "43VpybAgXgYdygtXrTbTHySToE9yUbJrPUJUDGL2WdonCG67s7C1B8ChEcEWqZhPqSCvXHbPyBXe7LfE6C5FjbW6",
  "key24": "3KniyD2Zpk41MX3tTw4xUgepYBpzvr8Qx5W9SURBZKLj9s6HKmkWff5Cv6S3zuhwPiQ7QtrpdBe4YKWiNkycJEok",
  "key25": "5k7GxUfdvtNkHuPBzsRgYgEAQ2cUvXy8SxouTstBN38ca1fYUwB8r5ESCYDjodJKT5HrYUvBPWcJMZDkU3d3Bq7f",
  "key26": "Zy9adHKsf5MyE6uyMknz4mLBpfiJoLZdSuR4zERNhU3LCw4fapSYHu1UDFXojqGfaX1J7WCcHguJsw7HxZ62Fen",
  "key27": "5yaiAhAfSAfbR1VksvTXYS2N6MH8RhBSm3QpH8vndUf8X2EWiNBu67K82XjJYmU2F2QrzAc61nwRzFz14R5tEpVQ",
  "key28": "4ayynScFCW78y3R4asSu1og9gE8xkCzmkh2jtko6EJT85UMz6jesQ55ACB6LYVgaDayGLaWyJBoiT2ABCyfbfxs4",
  "key29": "2kJd3Y4wK1JRwtxei63zhqU27TUvh2Et8ERRd5rZC2M3AcWCoynx2wHocED1HmD84ZGbrDKCFAnPr2rzQphR64XD",
  "key30": "hBKEmhcpSzZdki9j9KN9YxAbJDyRJD3foqJT5qjPWn7awh6zPNRAc7KXeQAz9Qf1wmG2LdgzhwA1UUHsgMKfaQC",
  "key31": "5SrYx9sdUYPSVVt9TxB2bbtHJoKZCugpbmuAXQLQebkprBWfpcK5yTsSscP7ujfeFuHxbP3wF8a8fbSmK9oXofq3",
  "key32": "5rtJpgv3x1CtqZzXjPdWZdm9f2ukpbW2WiSDTxKpJankNbDNzFrSrpX4Fq8G2is1xkYhdxEv875we7W6GfHcJTMU",
  "key33": "59iBsN575zadmzTzjrvEbZvYWqBLB6ZjdvxNUCQXwn1JjN8Pp9m8ECCKGGoi5B2ykKfWDXkMdMzjSXjWwdNh9CGo",
  "key34": "3qDHikdPk1Wa9xZgCNMgnZTdA1FWH7AuUkKyazkYXnDPnYbGsytEKD7jDnQNqz8Pusx7bWZz4NoMmDsc4DbvRxbP",
  "key35": "LdbZiHeEGCUMZ4176saRkAfXbi7Z1KXmW6yEAbkS7cXUGjvZS3g7X2R5vgp7oUEbG63hMg5Nf4JjZXKdGY38shc",
  "key36": "4CeFZYo6VB7N1PwcnjvTz4joLv9245G9H6egkbMz7MkiUeCwvGCh3K2VX9ifZCS6ZuKJ8kLRReiEmvreWKDvsU3D",
  "key37": "53mTFJdkf17iCTpUfwdWsruJCYXfE4JDSaE5Xuzxw8YDHq6ur7dygmeCxquxLDUNb8JD3jHvwTn6JPdsh79ysy5X",
  "key38": "5Bjd3ojo7fmA1dsvYiSLTeKah3GFT63MuaN1tKA7M7YMgJUQD2mgyYc6ueWtBg5K8z2kEb91xKbw6SXik1B3k5z1",
  "key39": "5r8CXeWSRU6n9sxzZFhY9qyjZnZEM5rnsd6CHPBBSRwVLnMx48WXZ39xRe9E2MLQMCViURofGE9WRsdaqEYHcbxb",
  "key40": "2v78u5EdCc5e2ZabiwebpatRRYuNYdeVaDinif4k6ezqwGSUta5KHBZf2i76NEyi2z8nPZV5KN5CV9MoeEuV4w5Y",
  "key41": "5W7WwbsRrBhDFfykGK4t9gSE2JX8UbsphaobEaVM5vug4rpeY4FFFqvNRiX5hKjU85dmedmragdJgcqs5bwmADqG",
  "key42": "3vRW9UEJUozHWcwN15PiT9rExmqjG9wyAJyrvDwytd42RP77X7UmkJG6VQWBsd9SsDoJi9Au6XsVAjxypGPHLTfM",
  "key43": "4N58qQ6QwuFgEeKALNuhYLWs7sWRYEkX9ZDGBj2u1NrvsiJNbkVXGEJpNTPpvYbgF3Gpqybt1oAWo6wMmaNQjWdc",
  "key44": "5dSNPA8EvxwndDkuJbu2nH3u2wJXeFc6GZdQMptP1SsxxNjyDFXoxieHDEfsXbSbtCHmdgofqVKMGpSngj9EyPfp"
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
