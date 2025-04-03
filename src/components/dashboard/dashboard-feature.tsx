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
    "4BVX8wzmfkJCrJBAq8isunXskktuY2D2xLJZzUMt1vFYXg2fciVZExrR1AUiZPSKUxD78n26zXtouwv6UfPM5Nkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yK6qcfsqGwB6yKHFBA1EyGmyXEXcVmV6RdyMya2ayPLfaPSkg4ZYPdW1WT5TWZWoLtrpU3poetV8PefkxB95Nk3",
  "key1": "5aN8tw34GXJfGT4XVVKT7MnzVoAxHv68DdD3dCiucZVtTc25Bv4TnpBbyUaJeXp3s5CE8QjVkkNhX3i5zsCsxqz2",
  "key2": "5chgrCPxU28rUptYBce89mGTt2pLkDC4BFiqt4Jb4mBbGzHYaX6JxDaqHWXan1MHC9hDUUzTSaQpe1o2rV7akqZe",
  "key3": "5VQzuNhTmNe94kYgR9QirDjSnFZDQ7wvcW2TZxPnVskMn1kyr4wQ1hn7pGfRC3V6YfquvWH3Zs5LnfyjyxfNAUHm",
  "key4": "4ptLGu9PRLCmojCtHYHhFJS599agEC9Agtw7AUGYDPe6VWoWc7mgaDNozW8JuxeYFrLMZCoMqFDSLQQgrKDr6SN8",
  "key5": "5zH5bz377Ta7PzLbQVr2FKBzXmhLPq8dD2PLkPoA1bZaBWKi3CXeCY9Yk5DMuGgktxZXCkNVdJxZkMs3ba9HSy4v",
  "key6": "49qLQYNFMq4hdsmbACNW5vMJUa28oV59RTVp3NMvwQK26geaUsyNXpXjLr1ijBYxUBVeT1QErNaZxMC4VqvnfWTZ",
  "key7": "2fZC1RyM771Qcu1zLdQ4RBourieucGed6tqdcSvyk2yw75Vvue1S8u4UUSFpmoxsAScSX4S3hptQLZLs77m9cXAw",
  "key8": "2VMyjy6CG7mKCPFxHL1xA8vTvg8aJj9KMAnbJTwb6xuDRo3RjxoPaaKzC7fkeJJvj8RRJXhdaAqTpRdi9g6Sdn59",
  "key9": "28PiguEtsprb9sC6a3GzuVW6nNdBZfdbB8FJETRQsm2SpshU2SPLrM5f8aEGX5MwXvssRX5TvSSAoTCnkpAqwH9q",
  "key10": "38YXVpGaS3DYuFR4oEULkREWFTLgat9EBGnRNbvQhRKwKr6Pg6wueBcvFnzj9v5NkPtpbdXj2VNXduJudCaVexPR",
  "key11": "2MjUMsyCRhnCWYmTXThk8svE4yVAmQmkqr74B4XMPwSRQ2SUHLeCN3YKusQbfd7n6CgQ7S6VA5YUbFjbvgJy4AdV",
  "key12": "4qXzWVWf2bJiidFXf3fjZ3nA95GwmReCDcdN4CeyRRuVYw7peNKZT3bFhDzpxm33XBzssxes9diZeoqL8Bs3g8fx",
  "key13": "3sDkh7p6ru5d75tJnpKnzcvshK4YrtBKrcyvehSk9bccqfzt6DwWGirDWD2mGokEn4bfsn1TokdECWny8Dpy9aeN",
  "key14": "HhKBNTsgztmfYmmBoPRL25dTwbyMhDaiejBh3ronjUTyowxRQp4RmsQHGrVnWngqUGHZpVpqQ4Gj2QbsR6of6Rw",
  "key15": "2kMqxMPeX8FUkm27N7ETNBNt7cmyqydcnLWy6SMCHioB9LLHNw8jF1QE9gcrHudu7qEZqPaNZ6im4XmV7HYnhLm",
  "key16": "gqFNFBBFoe1jV3BRHx5ePqus8DmhTaF5yPC78NPwHPiuAhPpZ312srHcNSHMQJQJx4hLCSNVKo2EFxhA4RuWxX5",
  "key17": "3N2KrkqzbExK75cTxADRgkyQiZG8v9HGQbkpBA35fqEKgUHZTkEdkWEsAdSD2BvUbxMLhzWncVqJ7rM8NQAsDGya",
  "key18": "4XiZUYk9UkSuqs7fUcEHaGzSHWDs8mysCjo9fUE1yq5byzPWZXVh7rNvQe9rZuieLKfDEqsLKgiw4Yp7jLrQr5Vf",
  "key19": "3SbwoMkax9pczTiHu7kWo9XVutP1VpzCeFxtLLE4tLvSDm275F74226PB6tTB62Z4vvPz1imaeiAgidy6zYtKH9H",
  "key20": "3MLZVyDcqMCU8XWPTPnpELyh7HZ7bVvmNtChk3i28xpHSdNLGjLuBVCKuT3HSx9wMy9KvW5tCbqepCEFVWDV3qJG",
  "key21": "2p2GtvzfaCZHH8o8ZbHbq66zxRfsE3o4Ffgh5zYt1sM8t3JtnFFfjvqQ7eFNS91onBGgwHGHmvrw5XG2N8mH4dqb",
  "key22": "58TsHZjb2qkjebsT4H3uazSD6rj89uwaKhJYJgLvoYHVGndvrWruDHinmK3cQHFqP5EjMPLJ45MsmyoQb6fsHFhZ",
  "key23": "cviR5EaDCum3Y7ddUKDJ27f9CL988euSpB9UkaeT25T986mGm3ZH9LQtTe2NeiVxMfwP28yYVGC56q5e4JwaJAV",
  "key24": "2LKVwBcuUYvRTD2PkB8EGtqYZKSdnq9khCCAs3A31vrg2kvRs4cEHNQwoqePUYRsydzPRZ2f7ucZ8EEPaQ87aVsE",
  "key25": "2s1Rfuym8MZ4VuwDRT65db5nw3z7p1p5yJwCQjLprR3g4B8bBGY2x7PBy3ZueDfykC79wkNRYtKvztudf956Jf4z",
  "key26": "toGs1Lfcuh3cLdWYSjL826MBR14cHbvw2vudUXoeJf19AwvtxHRx4yUJjCEmm3D4WRzW2KRaVgDfCbkgRkQZsiB",
  "key27": "53vDBKve3L7ztR8gfTZdDbg8Y7Z8qGWsZC7Wc118isdx7pxrDvFq3nC2BxjVuQMMoJy362EZKHY9TkR2176nnyMv",
  "key28": "32aYT1UZugSw4G3MF23i3RZrjjYLADYAtgUNnM3ddfrA23NMh4mGD1CNJV7fiT1RPkTAAxxSpg4YFHSVGW2csN6i",
  "key29": "57hERDgf63dLRFvskwRDtSf3F8z9rF5iewsKZVBP3tW43ftZrbybze3VFzpWuAHC6rm6e2gMwcWju6cTX1xuCiub",
  "key30": "5MDVYDp3MZ2JnrKnYoZiBJ8WiURZ5Z2v6rkbqCqzPkq5bigYBpjYZyiU85Vt3aEd9jeQLcyXiqbxuwKeFYM3HFM2",
  "key31": "4ewtYcpbAeEXzJtAm8Kdok9WGqqGyBFfbxKw9saRv53Y7d8WouU3m359ZmrrmVo5AGz7ebMNFud7cearbUkKHdct",
  "key32": "2AWyQyhcKqJFvkdhF2jc6FpdeDi6vH8cFaUCNvzj8h75irpbA1iEcEmp81fHGNmaTH8gBXtuBhxmxaqwXvx4FTDz",
  "key33": "5vN7U289kWmKsog9n69ikRLVE5DLSBdnxrM8ywAst7jQ5mbNgBeFq2sAYU74AuS3erFWJ8GEpcRkVGjVzH3eyc7c",
  "key34": "3xgSTw1BcLdf2nEj6Jxnc1azcCepjwtjgxd5rnABA8Tgxw5XyJgnbUYsLMH8LUkyZJr2ZP4riQb5aayV4dU384xN",
  "key35": "5eGmU6hrv8jazDRbqkFH27Cr63fwG372XaSgH5WJX2AGWda8GbKq3LczkKtpxs2g5GQfDMG9qCXWWRoBXaR9sGry",
  "key36": "397cTFWKZ7BAXci5mPH4bBft7L3HMtoqpuR43kYZxfDYE4aLFnzTMHjGmX9qJGYxDHPXeBVpwTuFdmMAXLQD89ST",
  "key37": "2TZ3wbAighis2Di4dtB4T9nZYHAb3xEK6eoS1iqpzxw5No8JTiyDarHRgkSjJkPFs71hsH6awp1XrnqPTvJ7yAv3",
  "key38": "2X88oiemtdpMNusdUV4erMCHAreBkWKrhTLmKBcEv8d91q2Yxw8GMGD7rc7AGX2Jk8P3xHR4Q8ujUXFHba5WDPfn",
  "key39": "EF5JykiUDarwvrYftpFMWeS96ibTSUQNenCi5a2qtu8WJVCzrjhAtwLTZAqWuTbg6oytkxoZhYV2R85PsmTZthg",
  "key40": "4vExKQuRxutYCVWo9nf2hMbCxKqQpjqDkTHDSA7pe76NYfwLLSCGHojTWSvTDFQALYbkgvv9uXzCx7XxdmNtfBKy",
  "key41": "2422orzVn8s9sBipzFHDkGD8oYgo2TUweeUuy7VGz55PNcvxCH1pE8vWzb7f4VFYZPYv6kEfdGgNpvPfMNXU6RAw"
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
