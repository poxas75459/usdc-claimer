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
    "2mzbvjyom1M9xLx4qxHXYJac9Ug1cGRKAu1EiQ3jSMgEHuLu4Ug9nZfh967pHw77n6Rd2gGtGEMob2pbzVKKU9Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyfkCG6mLPh61aSirXJ3xxEqHJ7S82SEv95H4x1yEe4k5xePBBD2VGjhzSscAiNvQKSeGNnfbDvEBfqBSe84jq5",
  "key1": "5JWY9XPEpeNLdaGn3AAZSatZf8MqDLK4wpf4vu3c3qFs6Gw93YQQEJCrKFng3p7Hwi7ctKMFpPugVGY2VTnJhWYr",
  "key2": "4um7CgjKndBLzGqQSPAQmn2HH2h37E5R4LyesyQzMDHGS4nAoFjN8LGp85n3ghUZymf2TocxrYfcNc591mHnhEGf",
  "key3": "3XYLT91MyXXZJ8wB5Zy8X81p8bxHoHDAUrhsiy3RNXQQw5cijQW4x8YZbpTCAD6YstY2fV4K6YbGnMYW52wJ643a",
  "key4": "4nYq82NPQrG7DktuJb8cQe6on6NdCgjmNoHQvAJDQQ7cktr2wdimEy6Tb4qVzgak3cjhFgx7DKajkMzRX5nbAwX9",
  "key5": "4oJcWGww1ygPxuKbx9p3Utr2h6rUWqDPHCLJ3admEtHyrb7FgsNeBnDwnJoaNcBV2hsU3tHfhhrss7p3Qmy7uw4r",
  "key6": "2wQFsGzJtpoy1NBXTc3CfWifvUVtbcCfXVsUpaQrExNTaZZzAGacaGAeJVKcrFq1oBWFQQ9fBDRoz6aCCAA28r5W",
  "key7": "2Wcfd4TZsDurvKyk1mKLSe2myJDE1aLW2KZDVk7UYyUxWAfpf8xhn7Ew6ZrpSvUD9ybxm7tfHP1WvqJLqjjc8yr5",
  "key8": "4DyFES4oFQ9jCBKvTFoabpwSMqjepptb8EJFZCQqPqrGqC4QAQayBQkiuNqNv3MQ8jiniUh2x8pqhdquURjbyXLq",
  "key9": "12DG5MaCrmfWpcuPqy5oxryFKpG9hsgq6BKA3KDMZqLYuCru22YpK4LkqMjTVw5HbJtMJRGuj8GVhHvwMCTydqe",
  "key10": "5L3f5B1F9XY2ZEt7f6qwmdKi9nkw3jvcuzawkW1uSxtkAh2LBndD7QTop3rxmwzQPCBcbjQQmj9xm8tkUGKJ1ZXX",
  "key11": "2TiDeECSUhFVhTghgbNCv5wewzesMobAkecVAjszEZ2ffa9SPBsFn4Qtf9agaChrTjxkuTynzDQrPfEZb4ghXUJ7",
  "key12": "5nyxCHdcQrQh3LhXne3FPz8kx9nSfeft3r28GTyJfWpS1fYAeA8AqRy3zZA5ZzUz269oF79iWVRM3HScr28izzNe",
  "key13": "CmrZ4fH1TrDomEGKcoz26vV8jZ8iEwWKJd2TeNvaCdLQ7bm9PvuYDJYELWsjD22EfsV2NayD3WBKAgZpXAyEBX9",
  "key14": "3o5GUDP3TYdDrb7oCYqtEV2WF5cgAQYP2QWEVsWoUtqUruVpHR6SREDgS6eTRSw9QwybyfpccQcLkZW8p3sa2xWH",
  "key15": "5UkcrmD8tdP1eC5SjzFcra2bAj8h6PNwnDrcaBKoBgWGy2HFLjpD3UT5oL3hC4p99SikhNdqVL5iBoSHjF7QFBHK",
  "key16": "41PFb3UoN2QJCDbDUcR6yL5rB3hbX9BFDkcxKmECE3gnnLARoDu2aXmtDPp9u6Gs6HeRoo3rvPqzmNwSopYWGsDE",
  "key17": "5CcVgKcDMAgKPUh2gdptmJg59BxtU5hEjdGBVRxcYDoyS9hoQE5A3NgaUeU5FMr6aYsVbq2H7oA6aJ486AAEfY9L",
  "key18": "3v8hCFJGT77yL9rxWQPCWShQ7AJKkRfh485A1YN61Zy8fKjySkUyU27bEM85Sqt8gJbAVD2jsfqoogYz3PRVBVSa",
  "key19": "4GwWgBdKTTSg6X6XYiR2gP6TaiZQkwSAU5PEDew7ymzCHczRDpHvMPjQA66n4ZWU6nHnq8tRvkjoSx534WTiPzRW",
  "key20": "5G3VW8VYJe3rAPKNvK6jSVNUSA6x1E7VNggtfj5qAeWvhzKnooR1BWySHoe9G3XttMVCqhkM6okRHu8CvFXHHx8E",
  "key21": "57W9uWqFzJKNG84cNfWyVd9tBL8VEetLJ7gQWZMNT4qUCHxtq2Fq9ak9QaZkNoq8Ck5zrTwSxzA4ED2UPT62ocvR",
  "key22": "5K6orV13QrhRwNoDL4UGso6SMq6JNAi15q6ACPeoE51hER4ubkkogveBprARndcH4CtDGNojDW3KGXBPqAiFD7dn",
  "key23": "4LfFDTqzDWjTV3JHqnsagcQrgFeQJaSU6CPWMWqVXY8U5kkXtqR9K1xvBQLc1CC4RJfUyJCasxPwtb9NScvHeZXY",
  "key24": "2GYiXqbKWymYDahBd6AFDG8SSQJbXqRmenah7J8N7RYSLBUa2cGe51C3MkB2xRkVRtD222f1oaXAYE3ENKbPFBcb",
  "key25": "2EmGrfW3DzG5gJJA4HpNmCPqn9GiCEUdjHqpmoTYvQVdW3YftniedLmua6s5YBuo4ZW916UVJ1XYfde42suUDMc3",
  "key26": "5qJj1q6WwL8XPwy78USdy1HrkjGQqzyH3vYVcA57ZWEMeoYujmhEGZ3roBtrgnjZbMw1SRHBA1bRjkVjwqNpyxtv",
  "key27": "3B3KZ3cVkRuRriewp1i5Kq1BtXC4Kghdy9RtH5BRKejqpx7GBe2xEuiTv6sRAREwFLGfmfhYuFqhf9xQsWetLcwA",
  "key28": "4j4gMJgubAMZMW5pJayNcZBbe3ChS9NRYiiipRQsStzizN2nAvnRPqusxRr1VTUKbBCgcjk9pnbWoQTJbjmvKvX3",
  "key29": "2exkLDzgqZB9o5HwcwvzhGF4FN19ZVL3cLzLiKZG4jNsvGgbN5ZC1jAuxciFPAGYrRCxCyAjGQ3gQRBvSB5kSu4D",
  "key30": "2gdW7CrnHmghc8tA3xetmUgnVExoVcs151Fpy9XzXekn6XBuvjKUpfrsGUd5dD99B6A3MZ5iwrpoGSeGbTpNcENS",
  "key31": "2BKJesTZeAEaiFDtJ3wKxnsjfS4vMKHWS1ckKo2gqp4aLm5wzcBnXdK2Kp3xjaxw3DkZi539wFoNMju9iBjUBkvX",
  "key32": "4th4S1fG9ddSUHyKxGxhmiB4DekyHUDo3w38MA7C1gC8cwUbE9WF6eSaX7fYdAZfKb8rYKqhHSEnEgwVdf31wevq",
  "key33": "4bZFV7nqu1yVSN1R1i6rBN5humev8RSHvM7auwdVKcMfiZv4ksPWmr6716PYWQr2tfcRhmekNYijL5ZnjxHEtmQD",
  "key34": "28YQg4m8RKG7rtL7sbndxPJNkxyesniDENDZKEFN8kAZktuM9f9QK4zu61tEDCuCLf1gnr7XeWLRZE8nUddeuzQE",
  "key35": "ywk5Zo6JMoprNE86Nb6XjTLFxKtZMrK5M1jHVErdK66qPVjaNntpReDQ65wCxGRfX5uaz6MxPFshytX4VS35sFK",
  "key36": "4AdwnJtudNJqppxmNPDiyfxhpNck9mH7eFBRSzriB5yC7nBeBguR8yU1HKnAXB6BRd6nTEvhkhxx6NmBuD7fvyTB",
  "key37": "3gEmVMmK4KDT7S4BFsBLLwTrbdBR65nhkdvvWRSiq4sM6FUaVTW7qAYd59LHY5BF5UcGeeecxq7XG1TR6oWE96wD",
  "key38": "5uH1Ty32K3w2mwBq9hKBWWSBJFTWEyd6PFwuqA7SW8JSSh8QkhVPEmx9FZr9LDi7r3iPxSxsEWbaUCvTE2NM91RB",
  "key39": "4FhWJihiSYAkH6EqKMd5yxxKC7HfpUwVu271hmTRByVH33LEhfBvr9kV7tcDQMku5RKGtaewExeyYwVcGctpVTNR",
  "key40": "2abnwiSGNwhYsN1QZnEqqPMKGCif8dpZRAKV8ULcpEmrDGfn5QxSgvQ8HYVj1QvgxJW5aR1eBvmBwQB2UcRs6q9K",
  "key41": "4bGdyavtkAXoMeKZmbGjgkZqVAAqAGJ2vGNFKZDqcR1VDwR4SMA8QcZFke1m71LxL8rJDYVyy3pyvjaRotzMm7bu",
  "key42": "5rpfDRnP2o91VN3tKMRhLfgsiiDDpLAHDSnMTsKCuagaiJU3oPDxcUeMqejMgbGvz67oLPFSA99Rph5LkMNoGp8p"
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
