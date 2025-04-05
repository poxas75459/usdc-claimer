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
    "2ruBEMniqZbqdEJxVcW8YcKxye13eUvusHaajUMb2XKo8PhXFSdCLC8TJgT9krhkjMe16DFHZtxMSyMpwgqRmw5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHx7rPhzH9dVTP1A5fcUbx7JLPJxQRnmyHAk5zqkE2PnVT3ETFsJJNPB3h3coey9eUj5QPCTLaSbT5MSH9VwNsX",
  "key1": "5JCrS5d11fY9hvmMbZ2YDgLUNH9YqxiapS1rd8gE8ps44jN1bddaArEyAiZu7xyR59TxKjJ512qiLcQtF6UjsH4t",
  "key2": "2VWfXqpTDUrZyDekSzjm7aKSzFW3NFytuQj3Dc8vCHUkbvs2PX36RhURMfWT1RrFP7AosH8zaEcD115EAQ3Dq69w",
  "key3": "5zBnCsTkDmj6P5EdkQZcNcfUhp6n8sYu6cECoS2gZAMZ4rPFyeocm8G8QKA4VakJLSZQhD8uAUjg4QvNXLcRBKNQ",
  "key4": "4Dpi5AmNfxFnCpQvQGjGS7GUB9svW1K3CPi8noxKC1xFpxMadtaKPncJueBTW2nF3Tnw2xfxWBbM33PRS6Xzjoi6",
  "key5": "5HaisNXeB2pwvkerddb5JW4r7n3td6QiurSUR3qifJnbcy8x8UFWEadzuW7hU1P2y3eGYs4EG1W4fzDYJyFoUYpp",
  "key6": "SauihRXzz4eJB5hWrfFnUjgzTsRvioDo6KXingXuUFNnM6LDbckirC61m4T9x3Q7oWvKLKHQ55NNsubiyZpAuvs",
  "key7": "4Fb1sVQ5ZZzY4WyzE74GJ7kshvmzF1aU8B6JxohFnAAay9Ys4tVE5Knd51eMe4XfJCGvEapfooP3DZkkr2YJsN7H",
  "key8": "5aCU5LJcuDS4wDtdZMNxZUP15uJn4s75sy3pGNjyz1gM8ty8shHjjRCHKu2jNqK47ofm86hgvvn9ngxSpyKs3dp8",
  "key9": "24ffDWdno9WntHbuCCVhRiBuizgfYhQscLCLsDpM9UQVRmXbUPX7aBHPJJLCzG9NcUs1hzvZ3vqeZ9d7RTQjigD7",
  "key10": "46F21Ui8pkrsiQCSGYKJNgKyFYVRc8wRrvzBNWpFpLhvPFULbGoUvDGNu9dzd9vHimpUR5hVQ1skr98dhtiudFDe",
  "key11": "3bpQa46ZPCrqoa8QatVfeVGXtpNqizJWFSTXNe1MotB9MDMNFdWdEyQAbYSc9TuLKu2FkfiPjqc2feSBPkS59scz",
  "key12": "yi3ZMdgL6suVThAzXYdEZyiRXPR1ye8eYMLdmXCp8nsuzTWELSMu8LZyo2CvRvnVWFnz6i7ZNUKPcZStRdY9c3S",
  "key13": "2bFesdVHCnJvCjV7AnMMs8yeKXXfgbZn9v7AjSRJVzHLuCa58r81YUdqeSza6iEQhq66NVpt7C43poVkVrQGKayd",
  "key14": "2m4qhCUZLzf9qaJ3m5bkSdBnxVfMWfK8jhvBby6NKPygFgwpyv2r8kC5cRpqHuNEKLsatR69ArMREkFgT1mnsSGW",
  "key15": "tr8eKsbDGesm3RgzSfQqb2isjvAxvNh2MieA1hUT64WA4YfPynfE2Xb3KJtKPfKuj1e1fdLXmNRdcgKTRR6bJAh",
  "key16": "2ykQXPw1z7fKZtnXeT3fYytSGfrGLM5dzCkCv6FcMM3dT5CnEcY47FESH9HnXyxwFsKChr2wL3GJb1H7EN5g2tVt",
  "key17": "5sBcuUX7yBUifgLj3u9TarLCkJzUZMqAJYcaNjBakHLUBPhBipAeWuCLTbaYSiHFSwENoSYorMEBofviRnYHMNM3",
  "key18": "dXWY297xHvdkiSWrU8XfhqPnrCY8x2FQC5UceVx225frAucMFcFiEVaZVia52UjPcL5evj71hVRCQav4FvRecBK",
  "key19": "jophBHUNG2vJKdw7b9wzsuMx1pWRdXWUDXymh3ZTHsQeG2uaGE5v6vqNjyt35roPKAqqzsM4gHQDcqjYxoxcApy",
  "key20": "2bjN9FUddkC4PGnshPKeXQTzPeeajYcvS5hFykRghwuQTUkUkREv134JXSmu7yKvpQjKHNezkdoRCDPPYA94bMjH",
  "key21": "2yTPH4jm3inSek9TdnomFJfBGmEAKA5P1wqVANFYvAGGz5AwMvSpTkbpKfGX9839w7Wgv38YJFpjMpXEY9SSLh2i",
  "key22": "3duKHHskrNVivx6YYhQqRtBsBLRTimvZ92tqQyNMFZpu31YBwpvuEgksoByJh6LU517ScKAubusfLCZpTeRpAgUo",
  "key23": "5vB6XkcBRs39SenepAxxqg1A1S6zyTfCR66tqaJcNNa5Fnd5KyWYBN89D4v1d2Q8Jn1m4cJ7DQJ3KoJCWMypNcfk",
  "key24": "3iQJShT7ADjv1j8zxxxj5qobwTghhgAQD8bZmT52zRwx8ifHqdgNKito6q27bDZm2jaZAocFG7v88VZtQZ4ABDQa",
  "key25": "5Vuiar67Jq2GytGXNVpeH6QFPrpbrQjfKqMnmmS49Pk3R3QkXGPRp5MmoDtaYajv4j2ehNwzdVaLFuMEkhJKtgS4",
  "key26": "23GQMgNyyuVLNR2KBF4PDdJxmzottBThPr1XpLW8MbvfEwkXyEAfTpYguiKjgjeiZyFy3osF6gJxqjSFAFC3iuGa",
  "key27": "4L2tF7VHZVxd2oMPd657YEwY6kkxuK7ZtQJ1tWHMexX2WJPJRqWq1hZ5KNomabKFFt7SD7jSE6aZBc5vrqQgf4L6",
  "key28": "EHsxmJ7qJ5ag52TDSUf8SvNUN6BYi26xpNR75hsY6vJWDkq5FvtbzpSvNBGJUAP5Nzg4JzuAqT92DGsfTw2QqkD",
  "key29": "62rAY1jcgFtfUDRwTqy2toVwTcGUfVA6ipHhnuoULvfxNzFEdsV3J82GksLKc4dSZU4hwQw8kpaAxfbjZ5V5W5Nw",
  "key30": "3AomFT2KECf3n5fuQDSbju75oZmDHQnF5p1ig1nTLbFtp2fdJyuuU3B6qmE8maahn2tfeQu2dc9i1UNCkUtEF5xa",
  "key31": "3dBtQk6ivjGXHn8DYqmWzHxmDK8PFGyTGAyVPpAvEdUbuC7eq7eL2F15F3CQ4CwqJPaRy9oEemsuZgfwhxVskM1G",
  "key32": "435EY3ounGRS4picZLVrayAB7gaTiGj7kAdU7qEjGkfK1w13dtkat2D3PHbHBuV5mpUZzdv2jkQBUvaY53oL9Dev",
  "key33": "v5WNLbhkPNtpZVtvs5kc1F2hxjkgV1p8CeSzeQPCcTsMBe2LHKr1R29qoSMQcQDmSQuGVATbFVvAU6fBkMwyyCr",
  "key34": "5uu385zCZfUam95viGLv3iDbPh5mmSfqjKNjA8PJ8Zv3e81uZueQC52iNMknVa5ZQw5jBVeUTiQ3gQaF18VrpAy9",
  "key35": "4V6M3ZLz2We8oYqEGb3urDigL6Pb79zCtceC5TFSPXvTNa7GKRB2s4MhFwLbmk8BUqioqSu2mt2e1WhS6q1hcrV4",
  "key36": "5vfoXuCqtxEGdNdfCZHYpozbZECGSn3MxS1okqVhHTETRXRAPPem9fqHAox7W3N43CspB18kFWQopNxBLQQtWAMH",
  "key37": "3ruxCuxVPUCnJJcTPrNYZ1XLBsJQi65aQuQTWXrRsLJFneAtgKxhJfDLzdsusQqqSSkueHbDnrc2RhAarqJywMdU",
  "key38": "mzbJnadVBa182Rxy4sAw9nyiJXdEhASF5wBvFEeZqpxVqJkKK6A2bhmy9N2JKC5FsCMzWUxiHFF3eBhcwUBdJVD",
  "key39": "5np3UVGez7RWZodx3cqDARGdKmjfBNnk4d2ds2xSr2mnqVA5s3z1wbspQnvtJKkZBtAZSgj22xCML3W8gq9U2xc3",
  "key40": "4korWW9PUXGtCuJ4xh5Fjie86LBHeWR3UYDMJAczDmfFA5QGJ41Yhh7GDNJgDjw6GkyEB1vVXjuJGgmmH9M1dEZF",
  "key41": "3Y3w6sjwpWj2Ha4sbyvzezboSJoioB5PqY8XYMosUSDmbjWad4s5tU5uE7xZhcTR4WnwfFF5EQsGd2XRwfMLV1bq",
  "key42": "28iK88EN2web8Go5zaozs3vq272f4cTpcedL5c8cdKBHtyhuU5xAfi6ftDdTA7NTJH4gvKLm8d9TSniGVwfgVL5q",
  "key43": "3YM3iNTNR7kTN2v55wWJhiG114h3B3SK53crigvP5kUH5UisG2TGvjpuQXHHXk5MeBZEQHq44Sr74BzAcVYGR8hV",
  "key44": "YHzNLWcxMYTk7MLmEh7BYT6YnzQYc1kzwehkS3xQJYqNq6XXeaMVok2yVRPY2CfYRpnjHjTwgeuVKsdJRhR261D",
  "key45": "3NhkvrRYHxsQtbgiyPiQUdSfGJ6k7zWZHA9esFkf6c865ck8u1TMKcDb3ri2VcnJ1WVst53ohdWYdA6ceBNAnZ46",
  "key46": "5cPfDSvUx3sKEXveWD3DvNJtH1H2jYzPuiibSzumB3KbY5xLGivMaSn6MoXQFw97aLwaMxwnvbsss9KpcZ5C5fFK",
  "key47": "46btBs3361apEqUeYTxWB8K3f3KMZfMoBp1fmSjMuKbMZUXH949TMdgpMS5csAQmSjkhxGPfRwzZCsmMajY18SFw",
  "key48": "4NiCT6ZukrCWa3MD7vyFUoACFdMq9GYbnMZmJ9EEGzzjix42J5XHesgpigsAjbTFNDhd4i2w21FaDA6ucAjQY9Eq",
  "key49": "2t7n85jrRMz8svyNpbWw17FvmYS4nCaBHEiDiMMmqVrFae6C8SdtaBpKFpKPfgnSDkiMZkZWMER28sYYEhrtnqXy"
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
