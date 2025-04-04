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
    "MvQRLJoFaPQSQS9wEEAtueNVbEANnZkENMdqdrRwmkWoLBg4vkbhsXcHXHnkS1mYn86pswDLSujoe8t45yRDdXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svq58hQEbwT3jHPKmTcuGC7GwpLY1JFUJWb1Ss7ayEnKjJf7grsph2nYd99bof3kPNUVDa3fwNnQTX7XN43JUAU",
  "key1": "3qWgRgPi7AXWBHdFDsy4gYeGueKXFqPAgucUShAMYmYh2zUZMckbyAf3hpy4LGncKoRpb3BvnNPkhzVUHm66x7pp",
  "key2": "3pPtthxgcq544rRCYC2jzLjf1tM4nnatWvbKCGfUC1s92xwFupVf5kZWiMVCzqR2LbFtWMNkrGdDkK6C8EudBqA3",
  "key3": "122mJV1C2CNXJsx26ZepPxQJbbSt2xHNTHHcwiVFNLgU7nhKf1rNT8Wivbpc136bbLTTa9uCzChrSszEeJF9UpiL",
  "key4": "5esSW3H3NHjUoJDUPR1jwy4MvngajZrgj2QGEQVrajdvLDedbrRv8Xf9oKmTLcWk8oFBsyML1YQRSUZ77wdw1QV4",
  "key5": "kwpsb6Dvq8qozc9mU6bEyTDYoVLuAgUToNB6n1SWHxHJmStSRTCtHLz2D2gniS7yyv1BnLAtHLBMAwdVEkJZQK5",
  "key6": "emYPHuccHwszTUKXVcRrMPabwec8ZdUWJvsVDWmmXNCjALKvubu4Ly4QGmZPSvj2niNRVxtifusavS6dZShXrRC",
  "key7": "3qaBT319JME3DPbjo9c7vYad7oedemgYHXFaPatvt722j7bgtahLqbqUWY6rSEi4Zw1dx5qj3zf36mk2MBxuucgP",
  "key8": "4Gyt38i86Nk8jmNV1Mu6o7yRPFPg3YsPq1VZ84UtgEmsohWpUkLe8gBdt6cHXtLoiNm3jr4RXDn97LqocSPrB95d",
  "key9": "4EbHemRpa2s8uRgN4YFNdzPXyos2aKR5fQYBtxyrpT65UswCjKPbmrSM73jFxJinxk6Bc41EJdNj56kD6AvYVj8e",
  "key10": "2uN7V1NSXgWFRTys7C8vmsDxtCsphcbVyf8piuyW2beC7iFjfnBANBRkEfVhRB9kTfcum7G15m4TL1jnx3bQWJLA",
  "key11": "49Gv7Ke1bDFoWmvKr4rEnqXcdov93qP7DP131w2v1uGuRE6xAiMtLouPS5xbnDqAfVAxFQf5fxbC9dFYYYSFdHMM",
  "key12": "cNggYqaSTRH8extteCzQVPEfjxG1wJiNtFYRkgedwsM8N5AfKPyRiEFcG7M8r7JYCggqMqz5Hx6Z8TstHooh26x",
  "key13": "3PWBCziqA7AdQsjGc1z44WBHJV4FeipmKrFGp1BuPGe1puxdk6Fw2GJzAHh8FLpUgVU4Qx9LkUp2G1s6v3UWTnhE",
  "key14": "4PQbBGJQgC5dFquM9BhYSAeEfY15jMeRhg7Q52zQvXDdD9xF6ujSbUcbCjfaaz2vMXZPpkHzU9FsVe4kMHtmh2b7",
  "key15": "MMrcGJx7PukkVvHSArd43QyC52rTV47nabXHswHsCZjyyo1y6RiK4DProS55NHMePv6fCZv9aXGBrcVQavhGoxL",
  "key16": "49xpqbSnEaoo7VVGBbhnJM5uDoVLb2hzL8V4xdu1aA7pWqkqi16UcJ69cTn6w2mgohFDYch2YrH4e4hNffjiT9tb",
  "key17": "D65uYV8Ed4ckXTwG9YJ1CHShEzAoPQKAQhWnzp3enFPRENTwqpT6EjE6RVAGYxxBTEu9jKimK4SE7v32ZjS6dUu",
  "key18": "3zJRTgYEhu53pdqjv5Sn9zH8uR17bSCVorpJ6UQZ6HTfjZ35TxnUVTNTHbrtKH6CZGgh5XGTcDNnpbqDaz2wE6cG",
  "key19": "4rz4Z3kUi5RS42UFwRsbUkCkXU5ocQD9xkLRAyHLQKh8EsLxia5pkLm9sTo2ALSrDsGb8nw4NnnJAAXJhBBkndGD",
  "key20": "3hwCAn7os1WCXZEWM3ygBgzsdjaMxiz6zsx1j5BWtF6BE4gRvjXhFMcdVx7jLyqGihm36ktZsW48uUfyKjFVie1P",
  "key21": "2ZsT92sQqxikLY1S41Zhu4Ga7ohmjUzc9TLVvVSkGqAfuQrXr7jRBJkWqGznkjs7i5HTtdJfBtHHhVb3x3TvPBJ4",
  "key22": "46tyr61uKeHGaavWcQCD5U5G8UgnMGaKXRWpRpMNrk2zqdSBx7zEkB3WrbfLxHTwSYcQogmdgN6w87Wiyitw1K1s",
  "key23": "hCBWNgvq9cNatmEZPW7ksfYKhgnYi4TLdGdX9azEkbYwjihLWLhctTJ5ggQ2Xwfr7euNK9A3vLvBuZbQXkSEepR",
  "key24": "4hXQqGMNZ5y7NSaU7cqTqzfmvnZSXujPHskZGLe8uwgYVmA7mmCdKdUQCeaxtvj1PsygX8yPb78BsK1zytVfbB5W",
  "key25": "x7gVvpC81FcQguJmVDiyXH65AXeAJ2FGVB2VGPKsWw8vbD5Aru4fHfRNXuVkNQamzocGLM5xVe8WE4iY43aZoBs",
  "key26": "4LoyPZiSZHqnXnFCccZNtGyz5ibQGpS6Y8L818xR78LcLsZ1zRzGegwbv2nAwkrYh9aRjBxXounMbEMYKFVY7mL8",
  "key27": "4mMpbck8Lz8XbvhLSoNTp8kiyRZbjaZvBMKs4Mx2jdLVE6xNzDkwCQZMgJAAA1d2ohJ2HhFywmeSPBvEcv7nLF2V",
  "key28": "2D1pQvtoECCgRWGYhwxXv9SSRVHh1nFP5HErynR4toPNaBCCtAox8BCxibH4oyMz71Vg5ZTBtPPUaW3NKwFKd7GC",
  "key29": "2j4dbAvhp2GMNdbLhMqFCY73n9QmTv28wqS1gSUCGYUbMpc6kxbrtmoPydxQj5egqouHgeLJwB4C2q11iqeFddfk",
  "key30": "5cm5aVK9FJ7CHTvxVA2CXZ763GAMD5Mm4HeAg2XutUeCcnPmwKybV4ioQPzisawZrjbBpGTN1UMkjPLG41aq5eEC",
  "key31": "5SjxBLQzAnM8EJWoVdEuRRT2vNwVmi3LZjCHWxy28GRJBH7C3q7pn1mdLhthoa41XH3yDTiqLAW8ifqZk4Yh42Si",
  "key32": "39k26UDMHYsPRQcyeD58U5LLDj4jhieN9Zq8sCfLGGxbWq3wfGHoLaGJ2KZ7iJUULyWRTGpTy1qyN1HKrrfXnXRm",
  "key33": "3KFnjFDqYWSQgXzAaLVeVyV3e4xfueRSqSffccfmHDAZSKoofUDqw2Hrkbw3BBDnKoz9NW6xG9mm3858LVrnFr4N",
  "key34": "5rWxE27MFCzZwcDnTpaqeEVmtmkPXY7p2H2aUN2Phw9YppWA9pbWGjfvcfdKnRw1TU9ecvzXxeoWqbPNVrnycHGc",
  "key35": "5yzwarSr2XA3mkN19oJ7epnQBmQumdycwXQej167HUyVeYv2wQ4yAA9NMCKgeUkMZ4xFVyKBAy8HaSkzQtrtygXM",
  "key36": "4PibUVnjua8T5j48SpjvLPmAqq8WGYftryhPCj38ZEXusSitnevQ2bzdMYP82ZCqe9UVYoc3uRb4aTwcboUQ39MY",
  "key37": "3DTdgQt5dfNaHMcDSZDA4akBJrkRCrmxdFJzEb49g3fiSymP5C8bGpALgeeHvmz7msEUDFVTkypYJcfCCeZPNCwZ",
  "key38": "3AA7axFpaLq6paFKJrwQHfHS2i7H8Qnui7uQGEFTXqAPEbH7W4uohcfH2vR3t2p1YhWHwVudjW9EEByPgddrEYY2",
  "key39": "5tXgTYWsKpELmECFYVKsUkqZr4N5yBUm5PUQ5x4yWArNTxPWGF645719CPgvA3XvCG6LAdcTMsegNX5eQXoswVtm",
  "key40": "5w37BoSpjNZxfv1qMXXArEFLHecjz7pbL5EtvjGTsr7nwoV8EVWCAsDirrSCvzMtgJAT2L83BWzfxNSC52EkXNj5",
  "key41": "3etAP17NaN9WriBLyqjTmX1ymu2JmgeCLfC5CDjESn72KpC7jM4MjYd5waiGWwZoqz1NhWV8u4Rd49gvLfGXori8",
  "key42": "4WQ6MPdMDmNdSdwAfnJnH4te9JTuh2GdCos2J3PZNZqHqu4UTc9JjoCk66rDamcdMpyh6rjSkenRyoexdFv3n2Mp",
  "key43": "4XUJ7pNVGpio18rwnxY5L1mKjLgbdprMe7zFgEkUwcucHduv3YcYhg4nG2D92y4r1Wow8e435ZJzRqL2cay9B8Kt",
  "key44": "2uj5bxwKawytU5TarDEmadMt17LjWLqrGVCfrCJTLgifRhYphZJJQEat4RPV9x5ZGGvamH8JPs2C6iBmeiizjQ8P",
  "key45": "2qeUTM4HpSGsXN4ByCtCdat7EMf3gEQJ8bKZ78Gr6mJXnRYF5AXJh2LWs7kgB6LjH48whoJpy9swLwAYgZafWxTp",
  "key46": "ABfDTCwRByyN2pekKykuKAaqJTx6JrdiMvFnkB4YXMpPHKFiyy3q8CzLNeA1rso8uqm4odDJu47ubTmWRoeEKeM",
  "key47": "5Xu8ct8tQQeUgmwG5KbVNkjnq9gvEu9mf8PJsvBrfDn2tKD2gQjzfz9aTjZxXDE98kC8uFuLfVtqxEchPYMFJVhn"
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
