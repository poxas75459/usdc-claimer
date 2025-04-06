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
    "21FwQ2Qt8kzz3GbFJD8wPkSSWUbg9esaDqYPsqeMFqXRgpGN1mRmoTUt8K7ztNuERBZcQr7tqwqrJo3UgtbZCcEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3em72DDBiHv4YpDUB4VNm1UGHmFazk97m2dbDG63ofiLirDdNb8C81Cw7i8ptgG48uv136QWzw8Um93pnTLQjEgc",
  "key1": "2uJmR791X4y7FQWgE9sFyLMFsZnBx7xEmmiSboVEBF5mMRvbroJEtWkT2LSjoDPvXYkq25nS88j72cNuc32wf2NV",
  "key2": "4hY7jhu8LaZqRFzPjNqUaLWYpPJXR54Z8yVbBRcmPsmV3sVLwokf4KypDtKsJ7KjtH3as2D1eypPGCCL3nFf7Zqm",
  "key3": "3GTaHN79jbwPmWWm5B6vU8vTruB5aYhrgq3npbdcjQB9E6CyMayw8CJSUPLUR9ZEYD67sq8oZZYQ9iiPofGT689c",
  "key4": "GYbushuBaJ2RAX3WHHm1SfuXRqfRsSaZJedmL8keS1ceWMV8AuB4wUwhRZpMcXG2GdgzQ4dVVu6dtz16FU7xzaJ",
  "key5": "499EWYt7YhN8en1s1f2bnwWxzBqSizxFaUrQRq7uFSC13QyeB1rZMEnjaL5rxMW8m7GbsTDpsMsyQuwCN5sJgM9s",
  "key6": "5HpBTcPyBvPC7LopzZRn985sFG2bWr8XCPYyFHmCYqGrjb5RkD7pmKXLjFU1vd4iTnStRYs6DykCghP2bUcvqb1q",
  "key7": "3M7p1K3b2cmSBBna9oGdZu9R1M65AneMmr4jQvWZQE4FYLqbhmP1qfYJbcXfgXn3yzekMaGsHktLe3VDeJuH4Ugd",
  "key8": "3Gfu7b1BU8eCuqcZ4PgR7FPB5FhG1KGUCuEMs3HXymunVTFVrMtrgP9yL7QFhUrG66JHAg3cjHYzzBTEgwGPeax8",
  "key9": "98TsmkYt2cwxX7s5KH4bsQmMZDk5SNQRpuzqCtE9oJTTrZFFpSJ72HRj5A6ePtPr3ekLRB3cMmdmtPFZz4BHagw",
  "key10": "eLBBea3r6mLes81u38NpBBkRfa3PZmuVbt6rqAhEAR177XZZZ7rMH69oZV1fbdpUe1b9SqYG4p6uv7dFpn22waT",
  "key11": "3SQn3E7uaPtLzmfdSfPphB2ybL9h7UZc2AK8th2eyN9hHkHhFNCH79tBgPGQKSdvEtCYCCsVM9sEQ4jx3ES3zix7",
  "key12": "3bA2z1nbictKWAo3dTiU1EEsQ4issbEWdTwW2uby47z2mvRBuJjmTJCAMKWTT2bGHxRHn1Uh1nJFMUssbtRsmJif",
  "key13": "2sVkf1tMHNSiEiNk1NLrjAbp8CZAakn3r5ssHbrZpbGTKPPhf9jh1YCYN3Lx9nt44KWB2RHZ7ZmDUj8VsY4jwyHu",
  "key14": "5e97ipn2fREQNpP9Fz2U1Tf8Lyo8V98vwLSPx4CeqAa1a9SHTFo7qFWAYapeLsWzG2on3ozSbehFfd9NDAtRaw2Y",
  "key15": "56miNXnBgi5SfxBLaCAWUn4WtAqUD8BW8dM9WMSJJqtmbG24PPHPvdPxhp4QGJoVNxdmGyszYmqSy8DALHJ4U59F",
  "key16": "h55uPVUKboEmt44h8PAErzjZPmAzePb7NiLGmYbKg2xZRS7XFdLWUPBVvMbhV8wDfhFXbyVcThRt73gwd3jhGSq",
  "key17": "2kenTNM9pV11j32E3z4YXcDdXjFQoZDpN56n2p5qSA9beUMbrXJF1gTwANWp58LuMftMZVJfM7znyVQq7M7i5frt",
  "key18": "4t3nh1kuNJqU2Gix996Zd27hMjZb126D23W6ytxLxXM71LXFkpFh3yqodUr5sSMc6gpwYab38kr4Bu4PgTJigJHg",
  "key19": "43QwZkUfL9FgFZCSHAr3UJx998VdjDPke8njQHyWjCaDanN18cCHoo6W5KCnbukBtgwsp9tAcWcGqf1FusasqDQF",
  "key20": "4Td53F4QPTRuSm2yytEG2DoZ6vQV454D674t6Et1QNf3QSvmy9VHkmcTwoTR5TicjgSCH5GmP8WMExkL8nZrwkCb",
  "key21": "5fvacn99pRUb39jbbL8Q999ErrvmuGX2qXw3qfMTBHcqSvSash83WYiMD6Hd8yRjLKfP9VGreb2BPDigYa1BMi3i",
  "key22": "9j5MGJUi2LPrt3SyabSi8G97Mj7RJc3iwdZQhpEsRH12N8LxhM26NpJ5MFYVendBqx6hjEsEMQYfZ3uiKtHrqBJ",
  "key23": "5JpMNQrMHHqF8QbhBs5vE5ALg7Fzrew9ZstzR7ZKsfEq9hijxMNY8iLqANefQBg6hg5256H2rA3CMdiu5G7hRoLb",
  "key24": "NWaxCqAHaxxpJJ3eqg5PbmL1UjcpxWpvYLeg8eQEUZ7PC7D58w916zWoeeKWdLJuVnXCT6fYxkUWZYL2oggW3WY",
  "key25": "2EZDLP6fqwtHQSfhXSFo8rQvZbEwtpGvdNXo2P3GyTXd4XgAcswpsEYPPeE3p3Hcs2sLMySXUncPfmxdScqU25np",
  "key26": "3pLa3srV9oHRbvAfcPgkdRZvWXKbzD4gi3r1xofGG8cLkajoMNvK5oRwfGuDGksa9VTqCazULVBysndqvCzQrCJF",
  "key27": "q3SRkXD7F9RMP1eR7JVoixsnc5eu3z3cnByWvPk1zy3mfktYv9oYmfM6845QoJWynik9oBDexXNhd7HiJAeiSv6",
  "key28": "5mqFTb8zYFfKeooVin57mieMqXRW7UUBfeC4bSoaN2nkWYqmsZUyVxX2kQftKyg41T6vtDFctpsTGbARmR249jhp",
  "key29": "2di7BboGk4hbtb7gYFAfaVMt7KeU8tig7WycBHhVsAKteVZ6n4SqjRW7UQbEZZgpw572E5khLJ1smNa5pazFEtoB",
  "key30": "59SPsQ7GbRZh1qY7SbTea5avUgj53ZWcBtdvg1c1SFEvUGp4dNv8qUWsZ77FR4CQyF7i8ZE4oVdGN3oPwBRV7HLT",
  "key31": "5fC3M4photYTMbpMMKQ5iTqpT5RxfZhyJeyaDhK5uuY4xAjiKqgfvvucTgRVNCGkiRLW7JbF1HHgjffZ4a6gqfkA",
  "key32": "5fdP3rPmehWkjddxjZSLjeKsuSNmeNfAFPX7Y8FNduJuiyxFd921ptt5yaM7NYoGi4nhfehyXALyZG7dFKYK9JjF",
  "key33": "5uUPumAPc5TeuSDqBtW8g7HVF99EGXLdRwNH33PDotPqzdBtu9X7nsG8JepgH7CteUPdU8HSfbRXtZM2f7BvDzmN",
  "key34": "4wZFedwbPYimCkkkxZGBejBxpGSrju14EFfon4GAqxGPkJAx5jgH1nXxBn4ZJN58d6iys6mA6mXC6tcybdyDojtJ",
  "key35": "Ngd7fLG1ZtQA4JV4U4VnPzHtvJ7pex4oArs51kDXrNGXaAR77UkX75Z3ogAgUN3xqNZuCddrYWJXoZx7gdc53qe",
  "key36": "3qZrHxsY4StxBWP6P2wjYSSTRatq49p2twA3cohWWKYjEgJ4H82Vk5P7JmQGkPm1Uk9S9fLLLh27EzHYc4d9Mtbv",
  "key37": "3YkrrwdZp2VhXS3sLgVLZmgqSFaaTCgUkuBqZcHgX7xqtD7VWTFMYGY3jG6aMte8btrFoBLWZJUwBMCr6UKa8sd6",
  "key38": "4Ne6SMbcaH69t3bzUXGqKLw3DAE42ZpaJ52FvPhQpMXRaf6uRvCsyteCDJsCbZp2TZha9qTDMMYhV3wttQCXRa7Y",
  "key39": "5FMpWkbkju8WEjTgiSfuo8kzobpCLCgRzWiTtXC2REqy8rkRVqKvj8gMNR95mH2VaqXcsgdex8FxxqLc5ouNx51M",
  "key40": "4rdQJsAJbKB9DPRuLDp3jp1V6dvfVYwdMngsp6KGL5cNWTaegju1ufqRnVLe1VFqjmeoFYu47imptCXi9oA729N6",
  "key41": "3HSugRiv1YSYcSAhhAv285k7fCD1hnbV6khQjjrUbHommGQMUZkAoqMGgSwoEMQ8HQysk1VCkdFGEksMzaJ2cWWw",
  "key42": "3wLrhoXPkqRqu13ujwKaXpC6d1TEhUCwB8hmsp7mDFUCTqvbgA8s7dazQA2qC3LHRp8m9yLBj4jLG1VBrbssAYX5",
  "key43": "2KKff9E7mbRHh9KUwSBdEsnsKb2puHu5tKwiJe4Lzjy551FYvH9jBedaeroniZPyQYsWCM5Wek8BWZJJZaRJzT8s",
  "key44": "2pTRX4z8LXu778vs63xyvjT9TQqJMz2VK62KiTz5K8tLegLznHVXcmF3xj4CpoDvuoqJG8dmRprubwjNxQxBMrfb",
  "key45": "2MuH8PUPxi9diYsAGdiDZPwchW6k9EkhUDXEFNXP7UX3mtT49pkHHrbnx2CWXRsmaiR6q8ns14BHQncB9TFcHNFs",
  "key46": "3rVFD1HHJvD5QMiPtPNEJTPqbgX8qLTUEFhK777FfrvZjxHBVoCa9kcEr4Dt4DFmaGgNS1t6WHtHAnAdEe2KuifT",
  "key47": "2dxLWhQWsru54XLpcZxaH5KT3EU1Z9HagfmqxLdwtzaL5tNn56P4pNuVEsGheAtMZyPZnQ6PMG5Ydp8hYpezos96",
  "key48": "43412Zpvz1GA9xYh7JeUZGA1qpecxbMyBNjdh4Z6CVVpqrGGg9RJ9ZdEt49HkZgHVJYYNLSGja7WmTcXskbFegod"
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
