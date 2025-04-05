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
    "2W523sF8hHKa6ZyqQvC2dZHVUCReyApEAm1rn2yX7CWdVpsq2pi8P5ehpXZ8MootjdH6i1S1E3sgTFQAN98SFXy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQetyZ6DoV3YHtNcq3RTDtSamNce3djCVHYV8G87F12ovMPmQhFRUQRdtNg8SxH5X74ZKx6w4xU7QgjLQdaVqwC",
  "key1": "3Af21p4K8dREuvr3HhcaK8mz3V9GgivYyPaivtD6TxpjLCpXjKeavGVCUPGp5nmcPjw6yoRYPNASLhpkw1tm69gT",
  "key2": "2noyTfsetT6tMvt13zfqJ8dPoqASq9mM6zjbFKj9yjKqsqu3XCUKYiFRjnAmCKzjySRw7tTHqEkdW9PRCYJ9zBdH",
  "key3": "3PkscTUABuGfkAMWEPTvkfB4ba13RtFJTbA9yimSXXKm5KN98R4HTdDEfGgDm56QU1MG5YQ7ov3CFpaoCByC45sb",
  "key4": "2EyVs5d4x6dNakrqckEHioSDo5PkVDiniwCPFWChqn9XufeWcARKyNaMuhX8f8fBNqXzQ1rxkuMhZBPZgdWDBiDB",
  "key5": "J55XjBUYMtadmoasPUGvoovyJ1ZmdB8L7GM85inzBQbvwW6SqAm2xt11rnNoPvMepDBERSABCaT6syxDe5kESHA",
  "key6": "6M7TmLchov5r5YcmL1hW52EFpaL9XPkf2jxSUhCygYD6JRCwDt7jgMFfXGNZQYayGZ2ERhry1ktzxy66z3LVCuB",
  "key7": "KizwaN3SJg5ugvMPwjL1fTvjsXGG2LeWRoCAuFUr2a1xtMtDFG6DkYwZQ4DtWYr9H9nDy4i59JT5efrp3oyUWZV",
  "key8": "2jX22ugMpv8Vf6nSpn68xabmyKkSbCkh3Pf9VCGL1bqCHFoq7RqKiMcurD9ZXACayeyrVnenGHPmCcL7uQdSQrYL",
  "key9": "5iuQdUpbcBMhnEf5JdGPJv994MgKhqLyR3AmorbAnXPVw2XMo1Rikrj8HNEYXeyHAeB3fyUVdUYwGQjnyQCpjjPb",
  "key10": "2B4oYMk6D9saEjBGoy2yk4cx2yZbinf6PGxjrNHe5xg5AHKNEEZx6ZEc3Rd1jDeuBmMEKPXJPRuar4x8br66izJc",
  "key11": "47h6aZJLagXhtVX3HUBSK5pdFQqvLPf5jVLAqBhHjjTHGhUDr3D9GzXAece8XA4RDcdayujQD44u9W71dQzTG22L",
  "key12": "3KRWm8Ws5P9W3eGMrASt4XXgYURLsmoBewKEqYroFbCQLK2hS88bnuBNRDbLJLfs3u1PnM4eo6TLogbykGpqqExY",
  "key13": "4bsJFiYyFFAsH3S5bmbuCSuhXoHZ8Ut7BspBWRSPBJgEBs73vLp1kbM3Hr4mZ4j3EedAmteWKaMqkNdxUzntEn6q",
  "key14": "5NWtLdcfeRvaXbtgkCyLaL8374pu5HQ2huLeWQuvSGZwey1drDEyfK6gTYFC8Q2vevNmvmkJTeDeKVY1xB8CB4Mz",
  "key15": "oKHvMBCb8hT2CWa3zsS23TV7NYBH4FCQi4YvMAVNZ3CBpbwzPeM7u2jC5netKUijQsN7KzCHXsyEjoiEQQdwE51",
  "key16": "9SaU2n3QX89vuvkkAUKBvjSz5LtEktpF7n2eTgeWcWPqPF6v9SRSswnqtfAYMxsEAGPCPstQBHLPxbTkeX8cWua",
  "key17": "2wiF5PNruRnPXiumG5qpERKzLeDCST7snUx5Y1hNUeGSEcTUriJH7wwkRPBFq3GwX9uA4uu2imFs6NXaNGXcpgng",
  "key18": "tp6rUdWpDFDddBahkjZ8fTGikLYmiBfSmBVrcpNni2ah4wacG1uxVKH2SGiYFv99u1w2mgBQx6RrTcveM8wgygz",
  "key19": "4uLVu3kZmPparoTaffbWuHhJzw4rvz7DHEjM8cSFJVJEHx8AKy6Gzczh1qbZwmp5wYYbs8LYNhJ2KrCGi2DxEoji",
  "key20": "28wQUYjLpkqpV7AuE4G7uRkGZgjoknc74sbkN5v3i2jHpFY3bPjeLyBdsRjabDr4SB5EqACsYAZo38GR5ENEDKVp",
  "key21": "3vLLKKHAEX5weyiXdJJuuCUcX5vFstMUKuTTkw4ivaStx85CoRiom85jW68o1UwdVAFWRANy34C5hbmatStMDqfi",
  "key22": "4ddfJsiq6g2cAsfTjJ2gMQwupkpR1ChmRbSRCkAcYyEAaLnzARBwVEJjxPnRcppa29gCTJQLGEjMhviTfFTsf9zZ",
  "key23": "46HuyR7c2nN2B3FCR52oirqvVUDhxAwcDDPkmWbyS39cs2RcCcW19THC5fgFRpeZuabA8UicupWfXWw6XAHbjUj1",
  "key24": "44EK3DJ9Sroxi3uAvqZ9mvTxbrxBrfbNZSxXmjpJxYT1doiGLrzqUbL1VbroU7AG5RJ7NyZm7BicedeP8DKYzDAk",
  "key25": "2A8w6TBnw1wqGVRMhA1yCS28N7DQkbPyjMBPk5DDSg9paXawpu7xBcHE6LfSy7oiyDVqrur5MyLdyQxYFTbbcV3w",
  "key26": "3BgUXks7kDh74fpFoNjB1UJhLd47LcNcntoeXVkdfhSGf56BZa546wJJP3KQbXL9yrCc5vgfZvyUSif9NQ5mKfxV",
  "key27": "4EX1mcDsWLfpzu2Gd5eNNKha4p1LMYxSWN8NDPyEvq7ESTGuYKzzvrX38HNTKa8T3xkS4UNPLtAxXcFNhRDdRZPL",
  "key28": "A6ekydWxiXT2guP44cmnVGdUZkziii4aqMuzXupRKRjxprX5tHwjNLMYq197rnfQtB8VWS1bMcXGxGvLLhbR26T",
  "key29": "5saTrRktKrBNZHYwo1XTBFTsGhsNva75jNZSDSpHuHSUa7oVbRXY5PuiTTVu4mBK4VgfcVGwvsXL4hjp5eU2RVXD",
  "key30": "4tdMPs7jPR7ZKSgcA8oz9aGM3t3phwJ9uLU5WS6cWtdSNQU5FPWF1vTL7fGPNZMBwdQcxbsRYHr1KzUFL7jtzELW",
  "key31": "35PayjFAFyin9PV85UcPN5FU8Y3sLeuZ9a3xCNiiF7dHjKFk19jUGZiNZvWU9hygdJzZQ9KAfTshid7pBiL2jVVJ",
  "key32": "42xrcrj5hPK4Z6wgY6FaWhA3kAKaRRgbQLay8gLfcPbM6r51DiRjFBDvweEqZ5ssnBbZ6aSxhovpBkP25rRk2sAh",
  "key33": "4C2bx9LhxevZ77f8tYtyyaaqno6gD4fScUcUnUGaPKYb98B7ZjrwRx8Q5n6Y6vs9RZCFc9mADVjuzatWh2Y8jt7v",
  "key34": "5s9H4MGBXer3phdg9o1fwyHSnhTncTmRFsynrU6gGiFG5noA84mq6vd6jvM2ZemW3h1sfnrJKwLQEw9KKZ1EnMQF",
  "key35": "2iu3Ugxrbjb44DHaPgWFJ2dL4hrWSTwfPfqJzwWSD2xgWtJ4NHkM7AXD55MNZgXbL2spyPD7ut8H5qk8HMUWT65b",
  "key36": "4iaxA4HCTLxiD2FEZy8zPNRpA8UuHzyMs7rS2th19r77rtYu7hJu2wTt8mS46NtcoYNRcyRm99SEUt8ATqJxFMAz",
  "key37": "EeYpGvyYnJzypucLyCAqePetg6iDEVcyNoS9ECcBaAJ4vyixhq1UL52zbUhe33e6reqW3gaEs9eyHaKhxPuNVC9",
  "key38": "3SHTMREEb6JDRpeMVYfYbsKjS6UXzyTb6LjZCCRoxuWCXeYALuwJtV6fsuqVXXJftprBmVDzDFvgYP1MbjpHrPmd",
  "key39": "4qNZp64fuVvRMoNvmobfM6wF29oahGT4hGFWf31QErJv3qSbrg2YoHf1DVDdaEVXh32stWD6xpBP8YFR6vGdqBGq",
  "key40": "2jSV4audwrwPp1Bq6SDoqXRxQjiWAoQqgFQ4NZNKDsYD8ev8vHC2dKtJg5DBZgaQiBcvVqgwS6Z4aXCmgf9YosK7",
  "key41": "63xNHBLNLRixDy2tBGKZZzvP5BtMLW1mvKgdaZwkJhLJJ54upJBfMME3oHZ4asNGidDAuP14W2KpmcBW6bXunMc5",
  "key42": "4Cza3DD8Abc1eRZsZvTBeT7AwcnTTJ3J6nsUn2p4iFqEN7L9mr9hXZxwWAVHe2CsK3sLToYb73wK5Zmh4fr2giR",
  "key43": "265LpsdxBiTA4h7ag2uRsekZgC1GS6HsyiprLHFqg8Nd5pjzxMztFHxDSfry647VUSRbzcXG2JPD6ycoAESd3XXd",
  "key44": "3hF3uwaoMENb6ymrFH7UDneCiadrW6Pgk2zxyExbWWMG2CNXnfbByLKvi8oYz4Q9K6T3n7XxN42hHAvF29rvNAKV",
  "key45": "4stLbyd2RE7EfEwWPpuGSfQ6px1vtZFqEVYBUFXpe7BQHQ1jVhZ7tQSA6Je1W2C7431cCRfizvnDvxcxfrvU98xv",
  "key46": "42eHZnwmXCx2sih1iNxkBbFDBYmJM4JE6FZJf4dYoTYEEHX5Row3XAvgrEYhSaCcY2siAtYB25stLB5HJLhtG9oo",
  "key47": "59WySQPipSJUjAbR2n4w72kirATKPa5jDM8HK6Va1wyKJhCbWkugUmGoRZMg8uCQxGJAquiyUeM7JKGriBgBDoyd",
  "key48": "3uY7GTSLnP6qWDu6pmyE85kEnTXA451FpWZ2avhDNJRLFzWx5HKrqnUBnEFct8fsGsHjwzmoJYV3GVu6snUZhdZx"
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
