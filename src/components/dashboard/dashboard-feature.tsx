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
    "54LsNdP6gdjga9CCcyX4Hj2YDT7cqDdqKBNx9915arBNQpF1rrv7K2CSFsA2PWg81UEpFx5j7nV7AcQe4HjpZWip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBk9DyVo8cMh9L8rrzh7CrJ7qMgNeNXy2BoW3cXWgBVJYpdKEk8vs7TGoJsj2UPPvsKJ7UCSPUGbBJvjLeP462N",
  "key1": "3a45P5STKzugjqLoLQhybe7FXdCU2XuQKPzxf9wu8rTU4VmKYP8nnJiyJcoPfYsTSHEAq3cEHy66Yqc5i4SqRTzY",
  "key2": "Jj4saVFLshCQetwq7XsvhUzB7wmw3mR37M3XjGaMYDosHhuWLWfmzYi2iL6ypE4wbDs4qJAWV4sUu4C46fVTkjR",
  "key3": "5HjHgnKJJwyo7zuSWFf9bv7mAFJC2hq6VY1YCrvAqV6vtURQHutsWdqFDifwJwGSm5K52GB6SywptmRQoQADVYpj",
  "key4": "zwEQ3d88svLovPT1Diuf7MgqDjoPifu4dKRWKZNeTntZVPoXnDpV3HEwvm2bqj23xaPsEabLhhTz4cKZePnoK4F",
  "key5": "2gXw7Qj5KzsMpw6FjumeDFQHyCPPYD88BNJM1zKBinPshNEpSdUxxGjYWWunD2c3fcH33Tu3iA1sUBvzWeknZiPo",
  "key6": "2sx8zvqhNFxZoNcpSS3PeHiK4Ma9FVrNZmFBjLcFBt7ESNnfvLQ71yNCR93anH4Q2EdNzcz1KfCjezzG21BjWNFE",
  "key7": "5CUMujFZmu1gXfNmgdb5381Lwz5whFwtEUUCXufGjTKVGgurE2WddK7y36rwiDEmdwZsaDtHAnPJXvUpo9Vq6nK8",
  "key8": "4Z8JtDJDeA62xHP1NgQ8Dz53QLeQXa5akQUa6LbTC5imAq8FFu3TAsjt94uycQ4A2wcHSdhz4MA67dNvHsZnebMY",
  "key9": "23MHNXVvC79TWtoyLwZgvYJQABED6Af2CEYZDqP4jn6E4pz3ofoMdby6LoDjLea8U5G2HSJ2X2CtevbM2bB2ZFdi",
  "key10": "49wQbQeMeLXjhggsozQ1vixZHNk6qsgMXpHQAELDeZQ1TrnqomVLJC6oFE67edFrTbMchnXehsw2dmNMSevTck1R",
  "key11": "3uLD1xYmWKD3aPYiZBBWjMEB4SVd13emR8MbpsPb8mdYsVih8XE2xbEUaM9uSBPafUP2jENmgdBgQVJcZjUdQm8y",
  "key12": "577mHRtrBwV71pWbJTxfn8j8PaRGL8ANjiTFwJsqmbgzVFBN9iQzyuSqF9UrCJq1rJz85CjP9toP4fnPFibJyCRd",
  "key13": "2kj9uCd8qeo71atNSuU4nt6VxdVadpr5yDbWpqeckk786quMuZsx8zHSPWiyosULAncPHEt5qkimAmyvHy8JStdV",
  "key14": "oSV8ELsEmLCdEzq7WYMnju3kybx3g1vTHpibNSw4pB3TL6v2DmvjJTf8vAsRLcKJR8N67ZA4mLQ9ijiS1WJtRtC",
  "key15": "47pgz7XjYHNiYnD1JqbmQSuXcMxTbTLyxkp5vGvGFers98Yezchoxbqbgq6tQD5bn4qSYsjrJmXQrBbmc1ehj1Qw",
  "key16": "3uqD9Znz4hbsK82jWP8cFYJmya9zgpC12iwTAPgJFoYM5nL9uW7n3xhuN2mcJ4NHpfJgsSe62FGpwXUM6D2F52Z7",
  "key17": "537Pb22aJnJTtSK4yKZocg6JSZ1hgEHbiptwDhdht5YjC2JYieS88RGeB9o3okuWntPH9TLmsNFhejajpsVSp4zn",
  "key18": "2P34TSd7WeHfydMLMBCj5oY1nB5v8sLyXUAsWwn2uaCtmD9W3vPsH1dRhUVPrLZRUdCkuJ7EaF5bt2GaAuVGx4HU",
  "key19": "53FJ1sih5bgchPSFf6z2gbmNJ4unTPSFBrHCTVbkZRB7tVoPARjxJCJrhMqcVGFTDGjJqRKByY3WLbGk1dz36Zq9",
  "key20": "jHAg8FE5azv5sm46a9tU4iwVCgaECftwuKv2uPx1XLooSbzqebENzBSu32dNmtfgtjk64vdpjeEgH2rKwu4D9R1",
  "key21": "5HUwGUm1yQzfyt1UmrLuuRuKjtadMoj5Zozh7BLM4WCroodB6Y75uY3DhkryAgXyXBtys7t2DXGLGDEYrMjLRdTV",
  "key22": "5qfpk1KCj5GdxBGfwA3knBKtjA3RzHbkj4J83oxaEwqfbAz7HtCAhXYR1QZ9kc5KJcKDxBDsvq9EEHdCN2yq9f52",
  "key23": "WNYQ6qxvRGGyu3hSsT4G6N5jPVnWg9Y6XFRJHp8wuEV4smS4Pw9qm4JS1FG2qVDbpddHJaXqqPmBfdwcjGezG2Y",
  "key24": "2Lb5117XkB9NH8jE9oEFMGismRZ7tEqH4fsX3PHE6TgFdGdQzt8wRqHRevCbBJPQzaHX9ww2Bj8ZhBV23KaVsExJ",
  "key25": "2vUkcukv5YjPdTaeUMYPUAaXqdaP27fDgg6QdtN4gU4UGXcvV12gCb5SNyy1QRC6yDSz4Rd8CMPqt2fb5zii1rdT",
  "key26": "2bWUZvm1W4PhDZt7Rf87XobXUFoQ1jgpMqXGHXR7HYTCvXrphm1rkw9kQP3n69xwowuB4qnzfoHQgTPTH6Vd6CsE",
  "key27": "4UjDWerkHD2PdarNuKrSc9pbEiYxJ85gRiBk58isFBtJ3xKa83tMX1oaGQRcCjqLF3EporNiN8vBv2RK4Hm8KRyv",
  "key28": "27onGngX7io6soG84jZ3V9gPZxyzE784otW9xAUC3T5ZtCaDvGpKyc5hz8J7BAK5mc8kE68WWSZv5ixWQTz1QY7b",
  "key29": "2ZKeJkyu89LL6gC6t6yFDbkmtptFPVwiDW2DfzwvyfF51d5hXgywNnyuD6GRdu84Q6cbWB2NBjwaSMpmwroJ7hCk",
  "key30": "49wH97cyEe9178Gvrd5HKTMWdiiudcwQtMq2pj42TnrxMWQenCKUAF4husFdjtZJqM8ufAECcsqQYK4hFibtjYTM",
  "key31": "2hn7HuUDtk2h6epdqNJZS3CfCu3tEzwbJMdjrJ1zHSeyGPm6C5SuYkhY84D2vbWoQnh1RimhY54RGXFd8SaUHfdq",
  "key32": "2TTTNaUq8JStJGCHFcDdMkvS5Zy3XWGfbupdEwSHzq72iH6Egu7WH9XHPCLyEFMya2Q7tuq4fcXfyyvs2kS3A8Yd",
  "key33": "sYUKkA8jpBFYhDhSogQt78eciKh6iK69px4C4FuhEo4wRda3pjgsjzecvM9Kt7HzVPGsgNqoSCj6sC8qhejNtyq",
  "key34": "3w2oPQ8fpo7GB1MGCwBqBwfL5n74dteB12iQWvdXTV2UKK6FEgCTbM8wTAdgo9vnKP1TLj1M5RSv5z4cMusA5CXB",
  "key35": "aqiGXr4ZNZsnCt4pFfpfc7F6GgVYXakJz6MeBUL7ddd5aMfZU11HYX8LCBxjXrX2h5BtwjGpbrqXG9wJTs4ioGA",
  "key36": "4AjzNexLuFajC7XF7Ze5rRd8TzhFke75PGVHZ5wRb34v2dzPQiKSv3MLhnPfPhzQvjtyq4VMJQt1yb6dojKTxXcr",
  "key37": "5tjPV8sf3jgeKGytfmeiax6QBXbS81oRjomjAeqXeymWsXssTBvMUajG4rTt9W1HyMH9kuubfRH4dWGEPRXryjyb",
  "key38": "dFgnRZN3GH29DJB4UteAK3SHoqaRfd1C8huRDYNAxSXdyxHCaNr9Z362U3UvLtdHinrbKeBA9TuAFz3apT71yKH",
  "key39": "3i64C9iFWuM3ZCsvKdgPW3uGtj4umTqY7djwuPj323Ni2FuGfSJhGW8wbjM96wpGWr1pVjqkg4J3C7obSqMJi7bt",
  "key40": "2K65MjTwqo4XB1fg7TcECyv1X7ozENVkXoFv2HMv77x45RbK4Z3AP6yz84cmFzXUJc2Pvpoi1vW5ZnPHwXgEPvg7"
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
