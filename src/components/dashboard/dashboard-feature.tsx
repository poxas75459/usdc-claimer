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
    "3WCyhbz4vQrqaj2qot4p4YtcHT9phoREPpysM2yUfs7hYq5xDaC8HpTdRzENoSZdP9JKjzaM7dwTaZarrFRf2zvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qgASH1e5VGGxjDduwkxGeChGFvUYefGwSTsEtnA1TzApy1fiWEncUkJufX7Z6pgR37cRktf3gYQ4HkF2i3s36y",
  "key1": "3QG6BZRYqzSSkgXevnhUSNDC4xweHn2kmvp6jGTSHrszNfLVLzHaj8fkwJXAv5TLLSMTEWqi2ky45W3x5XFGAGNx",
  "key2": "Z4xjoxJVrCubWcxhANz9Pob9LRtiq15b82G2zfegEmEhAwXquCur5RJGtnutHaxhXkXKPyC7YhiYj5tNGQPzsHH",
  "key3": "BTy6vtj4k4EHVYgNbTx2dDpBjVVHieJeHjBVzNjVgfvucVPnyGZKmXR7RB53kzQiLqjra6RBgfREEU3y2ewmsFv",
  "key4": "4QLewhUqvQKzBU4qqpRGerpmnvzBRbRrVKfvpkfamw849Z1jwCgPo2At2EjKhdHwuCKhPgak8hDmtJzZYYtV62Gg",
  "key5": "63fp4hF6ywtvpYvDjFzV41ycE5Wt2fypmrBgM7ud1uSP2Poz662BeWkarY2scvNgXewkSi4AWJ7owj61xUAuvRA3",
  "key6": "3f4y2fWCf9jmyQWYbpjAso8nqVAmj6VGYsZziTiwb1mWLJotsqGnK9MGUzLarsXvkbyV5V3cSKSnjQPhSiZTBMjN",
  "key7": "2bUxLjKwh7XpdwRa4RM8vMgQqLEaPFZpdcHpAGDhvjP7x8inbav8A3KbfZyYuMqpwXWpkNVoonm6U2RGeAemyM3D",
  "key8": "3CDiLjRyfdv7CiyDghV41NktbsVi7i7mnEFpn8mAH7qcvnDtUMeK1eXEJHNh2KR9DcvRcAmTUrD595xKAkCakaqA",
  "key9": "2qR7TFzq1ut8vsqRXD1WEMbqHgeSZC33hCPMjANU9mCbuwMM2MyZGN5Uqh7a7A1akxCttru1ntTXRzXXtjjJRcLV",
  "key10": "2paYisoaiaVsVzLQZGegz5Hphs3GoKqGr48FJ8qzGTWoaPGuRpP3XRWpmdXFRfmjzyufWy7V9rrSJi4spgsz3Uhc",
  "key11": "4vF7JgFuKSWy2K9TpPc6MGKAMJGEfA5tKvtrHr3MBwzFsrorVwVcHLmqb88WDcjkhHXWyfJw7NWVgQaZckUwxH7p",
  "key12": "2y5z1wgmHtUdZC593ZGPhCfzMEPZeSGaUogmAhnX8m2qDd6FxLvbfHed8FPoUJ8hg68sYcvuBGKaioNJsJTWPhNz",
  "key13": "3re8LEbRMVqCoNy1ks7nJoNbZP6eTqmvAuS6ezGo1SqTgaa39zt36pDBtPnuMNPf8Anu6VuZeSoR3TKk7UELVEgU",
  "key14": "5gLjvEduBJqcoRXsUvjKFmwtVVqp34i4uFq39jm5tBvQMRRF5M7CteE9jgwSmK8FrrwDURRWwCMTbMdrr6PQLfyJ",
  "key15": "3uchJoucY6EMcGtxqke77XM5QEWbFhd8ZLaqNhqKcdgFBuZ4p77h1Di81CVw5PonFbQQb2RUJ3WNyXfZCCaU3igB",
  "key16": "3FiFVtb4fCNnMktVPVHQpDoYCsDy6jyb4NSxK4o4GXDKVBc3r4KgWwBL7gtLWxsy3qV2mbdXXSzygfGhuWdMJjG",
  "key17": "3HGQvXpWmuPuE8wKhwQgnFeuBUfWCzx96GHiQkSjtDWfotpcxCdEWwJFFi6PDTV251FCTFZw3VEaHSdgtdNBqMiE",
  "key18": "KLGMYiThJrUWCiLsBFg71s2mgNRqNCBvrn2etk7odBKqJjdcJ7Y6xgRiVAQTmD7xQDr4Rev2QUm38SdYuHx8XNj",
  "key19": "7jFWSLLBSM2QdXmH9SRg7xYNohbHrtCuzUzEDP7zgpuLb4aLZ1yM2kb8qoaPQvUXBeCnHBaavBz7HDt3i25SgVw",
  "key20": "5yGAwrkqiSW5bX1DrYBt8TgkMwd2s18cDf93iouTCMoR4tJSfp39XhaYxmfFcSVL6qjEx4sTNGAKCQMofGfrcfrV",
  "key21": "37e3jWSnHw1uzEXUVwxsTW39QugnSbTSki6qUHRfJKJ41dZv9WtuLFbPvoKP4ZDMML28gQCUWqj8uZXExHQZYAFF",
  "key22": "45iYG3uU1ZSPLhSaBkhXJktuUbsnrqS9KD9HJc3SHhsVF4wn1QpAeAxbVXoGSJmrNpRXjrCw3NQqmq7AMyNfX4Ls",
  "key23": "4BmAhkyB1BqW1HURKmTS4Vt76HAUKPuG2tkyVPcNEu76XRmxLkcmktsFt6DZt9jJpwnWFo1hsLvTWipBsUtP81z4",
  "key24": "2hFAjYnYyy7RHjZQ7k3o539Q5ZzW33P3MFaV82Pq96zX9yD532WrJiTGt1rAvkPxDyuqLWRFoQFZGsF7d4FUd4eX",
  "key25": "4E4TFETuahXcP1ApuXbyV6XrY4bgPA5Kihjq2DoTu3RH4QNvbu9rD2X1wjxE5PuUFmmxmF1nFLJbJHxGLmRYLFs6",
  "key26": "KkGvHZUHAa9BDLxtBrzzuHkgGhSmBWBDmvg92Jro1FvvuERmLEpwZKhwhf6NzJ1cbWWEiJk8oGoARXizRdtqGqw",
  "key27": "3zfPCNfsGQ759mTYDo1s3f7sdXp4DoCaC6wMe2xAo21oehbfeaJNGrUjVD3Av5XmYjVkJMKLWfAtczAgVTYyG2Sp",
  "key28": "4EZvj2XCqWKYCUqBo5H3Zbph7maJmvVMRjkkibkunRQoZsgfjAQTZM3o3PcNGvYmJgiPL4FfKCJTN9SzVAu6yBkT",
  "key29": "XpBgwRtFKmFdVzJQxtQ5YnR3RY4p87Qf1sA3Ad6wQvZBPySgFr14LsFWmnpc9mjK7PxVC5yMdxzWqvkyik7FZr1",
  "key30": "rAgKMzzU22sUSZpA1KS86okTbRThkZMGv2Kd3CxY2gtBvvYH6QyVCjDxJ9VSYW7UwsCG63qzFpVbMs54uGR9TWa",
  "key31": "4tVHSfGJspPP25HG9V2bi1AZdwcATtmD66jC83f1R4EHK6cUbbgX5uNWpZeQ5CdoUfZRPGvXw2UNUft3p6nbjdRq",
  "key32": "cDiHDPqt2F8vaCC86gGMn2ewupnzEVTJSeDDcZmRgt38vQTDi9TRhqLj4q17Pr1CSVkp7E289V8qzuCE8UnXCuP",
  "key33": "32rojQaqzpuypnXs15yTntm14eHge6RD1ZhPtzgFYLTLTzgjoc9diybppEasMN3ByUpvk1qtDurMe79f3U6DM9D8",
  "key34": "5h8Bkkuxg95VtYzyMC4NjtqCJScQypL2We61E5z7c88Mk4yGC5rQnzvq8h2USpF4uA5jwENT56hFYL1F1WGZzjxB",
  "key35": "3g8HwrBoWgKHBXCwW6xx8MqoATyBhg3JWAnTFXoKF5EDTQ16EmPpQybUM4Nh47xGbHHoFTmG4aC6gN6iRt7P1HS4",
  "key36": "JzZ47NVCgbZEBVyF4htd6chzVC8c41vkfh7r2ihkdUdUgDG519aERqSG167f3JfMmrWjZvQgcKvjB4ZMqvgJY6F",
  "key37": "439crc298Tbd6qdmA5zL9K7ce5ArMqHJFutofDTe8nNva7UyYEiCD83MrMDXfTf8TaWGa8eyg5oPboPsyidsPS2R",
  "key38": "5oXTrR6T952N2eeShWf74sXExztXedCeKQu86RpACPPytDKfdgybkjrtQB3WoFsc2bZy4kQ3MxZEqymk6Mz1x82n",
  "key39": "29kxxfJ6U6sSwT3EU4JDi5WJdEVdEU8r2s4Leyyut2tnE3ubrBX5FWgihdPrKCNnTWunEGGApUM7nm68MQ8xkdFe",
  "key40": "cJ4j9uHSn4DFtyrnaUxz9Uto3qmppoCQfVxUcTN1CuniZxqaDy8TnLSbrN5ZsKsnPMaeorjDQJHTty1pLPtyux2",
  "key41": "2e7ipxbxG58dmnMFKy5Qzykx3JF1bRd2fhxY5KAWMeWqkSu7HSQSWAKHPmGb1mMLQpGUZeYa9H5vfBVFsXxGcvT",
  "key42": "4nvdi9hzPYTKvcWv6CVdBzd5JAQkXVQ7rTYGBsqexoeKLNL4fkqb3kf29Zca7uJbQ1taBJ6eN9AWqAuPeB7iSthY",
  "key43": "5pH7dTTcC8fwSfSKXpWjFcvSjD2JfJ1oPPVqZp3uCyEYzES3yUqPon28UGrwcm4fxtgXDTNoTeBCWCTbWGAYP3m",
  "key44": "45vR8TwKajGeGxTdRvCigMgx38hcrGppvw6QcwwnSmMqzZ3F1nnGYTkQ8nc4x7hoxZ8aZPtm2gQJ4jG83qbsoWnP",
  "key45": "TTW1EmpeFE5khQj9GGAhtyufy6wNvHxyAuAQRQNmUjGh7DmYMoE1xjW3P7iQLEFs2chJfPEACQ9stRacTqqC4rS"
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
