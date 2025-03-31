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
    "4Ff2SuzagockkqJrQMSf1vCJsAisdMFvcYdcerAjHAy87KuHYMPUCTLzoK7JpFwhNM3P927qiHTmH3ZefimHkiAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcbWzzrsfSLRBtGBgyAsmZ1tLyCwag21eLaqjQbpUNQJDa3i561hBT64gM3RjWVd6X3g2MWyFNnSWj9PWKwt4ms",
  "key1": "4i5jxttZzFZ1aUEcELSFyAbfMhZyHiQn5ahKooVRMo1AaM6EkW55vXntAiikYmxRaaXThhSPrUBAoTuxdKvyVgL2",
  "key2": "62b9HoSNDqXX4Vvg5Uf2Twh3aZzsviodjRJaYc2Rh6ivVme1kLRAE3jnLiWof1S3sMRXh3eCNNri54fJuGNHu2sJ",
  "key3": "2kPDDbuAz2DkRrTpgVipUT4Bi8j4KFSLYMtS223cZJwAtZmPhMWXNCbdqSsnejQ5xZj3TmHYcfedFjZCCXG2Uqvd",
  "key4": "2NxNFJkznv1TGsuYH4qZELRoayh1g5wdhHSJdPid1zYL3oj34Nw5AVbae36XcMSMYTnSPWKZ6AcAzH8F58Rmk8kZ",
  "key5": "Q9Lc1kyP3PGrBf1DVtNmJhFfpqTeQERrNvDxnZZPB7viKhuNGDCvPsrdsSfB6p89kCZ42nbBKSvqwZ7tpjbiPfn",
  "key6": "2YLs1j7TedyFkUuQsRgK3ydrS4u6YmTKZBAYgNvvJDkUsUvjYtRZXAGcdGjbrNDhaEcghFSKytzTVZakVpxFcMf9",
  "key7": "37QgH6uKLRHYT3vo5grhhZqSpYCMZPJNLnKhBfJPfgLCnoiizTUTpuCGebMw2P37J4Sdb5mBSJWk3ZgC3Et9jMKj",
  "key8": "3snvZyCzBLGFLeRj5ERbztoLc2TS4fUy8SZHffN1EhDzKQs7MvGRncoNXBLkYJsue4BcQXXNa8LyihTtNLEbnZs2",
  "key9": "1t3VkraBiBsUEBSZU3GFtTfKP3zPqquite7XEuwbSvnEbzDuYSdSJMcBPpykTy9zCngCMBXGK6fqPFrsg99hVv9",
  "key10": "64ciH4ihHi6CDMQajqt3mkcvrG5xKwH3q3chMjboDoKCLWQiD8q7WH5nBbz54j7tk3kMJYNXzppcu9Nurc6zfnjc",
  "key11": "31aYKxzpL3PrHuu1xpJKEUu4m8d13whicMWyzzxVzwBqvnZGf3E6qVjzTP6DCXt4ih87GuCYd2nbiR8ho41LzH2W",
  "key12": "3rdbdQ9RBZdGiHwBHyagGPqBzjPwRXaduPoNSDGGSvrMxLjnPGy37wQgFfe1cP6ibYL7QeYznYzzn2qwzm9dTxcn",
  "key13": "4msjSrhk7oPHYQe7KUcfA6LHBu1821BB3HAEKHttaAcYzEZsBabG6z1htaQnhMc34iTRgcXf9muLBrLUzTuii73J",
  "key14": "5hcDvhqDsaxdkUhhWRahs8iJUTaeBWhrZ2njASuj2LJEHs2v2LnEkFQbqcsvaBVe2ViP3LXTCQ7BfkW9wKhdqhSG",
  "key15": "5qEg4zzWKRNxbYQt99xEW59VhZyHweVv91UQqFy6axXHJpHjpGhvqwmLe6iGk1Q6u84PgMjN8zcfvs2KQDKwKxaK",
  "key16": "3idMMDjaznewEjV4qbTnhbv7NXVxFyNV3DRKCagXtGcEuPg12kue529Vkr6sN4MtjTmWjdEXGhhjdpkCjpEzgZDx",
  "key17": "39s2mJgvGFxqiGsPBfVcguCfgKbBm2EgdLZzSVCdpXF3RGg9CmqnAWP2Q4a3YvcXVMuSwC4hJDBhQCHtuRscwpJJ",
  "key18": "4teyCDtxGiyQVwsgefzXuT9YGUH52riU6rFdFikGg7LFtf8cp7kHSwGha6b4q3MuqU4K9s3ZrZSRsPZtd54UFMtJ",
  "key19": "NCmFN5dwPaUqVVSF3KnF2Px21nVjYMDCCMrVmh3pw9E4Dd9m7LZ7dnGdFGEdEN4oN7booDB4cUvX1nZ9WWqbjRZ",
  "key20": "5q55nGuJCoye3oGV4TNvHCsoXhd9CkmTj2AseqmZXp4bpDGnhEQyu72CSpu2UJSn2ZQRuPsNtcntkyeMgSxHT4qG",
  "key21": "41LZ9tc9kFiLkPzLjYA1B1QnonuYV7M6TXt82Wm6cn5C7UDVdHAnENLg9VJDZvm8y64GAbLy3vhP2vkcGhDfmXNB",
  "key22": "4bP7ukiMMPXrhjrdHuNXwVzQRzrYk3fcRzk3Wvb78nAwhgXnJpZuekpC4SJpsPdWmybywrGg8RfGctiwRBNfvYtx",
  "key23": "5Po4fHNuxjvpehEs3ExvWFVgWjVVC6v53jWusUhriNV43WmkdtqnfyTYwKrPuENqfb6BjLoYkLGUVa7HyPRiwpC5",
  "key24": "3huKnGyyDkA6bCCyd2t6Mnb2kaR1kDGzgd26v5J9KfL86TUSfWDxPT9f4xrUkFJu3WHjovLsyquEDAF8fo4nDbPR",
  "key25": "NYeXdDz64YdWZiQksGFVUK9DcvPWzNzsMjaQBMXfHhqmH1hBb9RPh2QfnbiJLThMw2MNWRWoop1ZdmWe2d7BhRj",
  "key26": "5VDud3sBaA11axFzNgdXkLjG3JXk6TPu7FGeG3gYeZ6vPYCS9iA1AMq8bPNh8acYwNBYRYMRmpFEEJoKFNDoKLDc",
  "key27": "3wmBNDbxN1BZLHhBvzVGSrBYJxoLUJ8d86YczvckcfYzuX4dnahKPdgyh24cgxoc5iiGduQ11K5A7ke8MD4NckBQ",
  "key28": "5BkntAyUPPrVT3RGv6R3HuPnxoEEhudXgsPkzTW2vXUohd2ZFvRF2NXmLj1Pnouaw6sdgTEQLyutfH87JVgbAf4w",
  "key29": "2DnDaBmNeUU2wzNnRY61kFyZTDMYL3Vwzdqvzd6qnk1Xu4bZS3V5qnXkEdkdURgq9iUzn5a1dt7jmd1it2Rr7yLQ",
  "key30": "2Nkee784CDGWmkdBJUYJmCKRTf3YnCLTLqx52A47NViG7sBP8q5LYMPHWT7joeaVBRWvEUKACNghib92GqvTCcS",
  "key31": "4D4aLVdidvX2ZrWCB1YXLGLrmc9cKaaboAhxVGGBbGAdAUF9A9BSRhSempACi8DqqVDU8hYxDCQuZ77Dvq6A5Uev",
  "key32": "3mKMbPbEtNsJR5qy5gQht7AkQSiu9mE6u77dbU8BJTHmUf2cWR3nDbAsKZgJxmeMLLrc9vFBYSftYAHY4aMXsSm4",
  "key33": "4zFuH8UsgTYTM2FrCmozgj39sNKiMFNjatBnApTugiEbJid7APvfMUJqL6sGx473jRMgNW4kbkGuLytMvQ1ANxW8",
  "key34": "2V5RwmRtzP1rjnE8jkZSRAGk6aCimd5dXijkKGN6Ycfs5W4GH8UTpSnv9H8QwYjSPEAYxTyMGeLnpp55fTSCf2br",
  "key35": "3tAs4biEzKfkGR6122gaSX5MPmrNGaAA6TDxZajnqNmqZZAuGDbbWHmJrZbDYpxvcSLwgopvLgENpUtnpnAXD9N6",
  "key36": "4xuqbKy9bqgjKypq4m9DHr5x1MmPi4cTywbKmxaULFQ5NR6FvtvkXpYGRK9tMEd2jxcsWidwHMpXyuTCFeBcPULv",
  "key37": "3f7jqpPWh5cwiP9rwRGs8joykvXgtN6H2VMEFaEooaDeZDQS2uSysshYypPoz2GN7jDBV8tk59cWEgAj6L9ym7Ph",
  "key38": "2WidFsiWMPRaWs9baJQiYWKTh51eMk8YkqPiL6KKKkbpMhajBDqhByxBw6nmgJ3ZDHnNERt6YZDiCdu4mbSh8MnU",
  "key39": "3cFSA3AKWfiG1coEet2vjSHzpCbzHxQ2VnANKR9BkrT9Lvos8wkhgyZGGM2CHZWMHpDfm8CZPPb7AoExQgKoMmHv",
  "key40": "2zajoum8Jv1uqKH9zSe7FdaMSsUE8sZ8WKbxvQzLoQkfhwH28ijKFPVGCvPZ9VBWbWFXCYVQ9rYVNUhaLM5a4a4B",
  "key41": "SvPhvBhkhk2JrfrnraPwzPLkKG5Ub4FiLDeBLZkWqhdmyav4wtx4xiNxcBKyHi265a5abhxGHxuwQzxVYRh9oCz",
  "key42": "5cpBZiKL9Enf179DLeU5vH7kuTnrCq9Tef1XVQ3kzbadBYtooJUroSbxkhHFYh1KDegv8gRzwgGbYGfnUBoyNMov",
  "key43": "2B8NJPmFjRNxAmUfRZW5ApaWb8BgKnCx5rWLJC1Gt1yaU3ZUbE4L3iLSBtGtdCvV7Hq1irRAEnFFxqviGZXDgw5n",
  "key44": "4Q6BcwXJ1iXJwjkTbGxGTfYgWkZB2sVgwmq58ZmUAJE3tBAhkMQcoa9eckDaeV26vKF1UXXGYSag1Xp6d9qzfyzS",
  "key45": "5xJG4A7cPooJ8mFzixuAPbmqvPAFSBRE8HwrGN1i49eesWmEBfhqHA5cAkN4QfjnFdjTCXGGbvZYhJBPQN6CMwJx",
  "key46": "3BNx4snCAFPwvH3Rrgbo2e1UvEVoskFigecxaDPiuMFmRTUTAsJGN1bxUJWQSCLeKN3sS1HvNTMTrijnNTatNteM",
  "key47": "4EMv4r3pugEX9nj6xxxSaHY9iWqYbmKXQdpmvsKX4qUJoVRbJhbVTrMquxdW5yMcAFgmxVAeKZqJyZKvwHAEJMo5",
  "key48": "4UHVYUtqmLD434orzTETqKrVn9zXSWsuWUKTiqi7D3J3fxXHT1HVrLiADkYwiK6DRq8vDYcjUFtigAck9A8vogro",
  "key49": "3Ve3uK7myvnwXEdDTaPmyrCysbcCYS5Vz83XspNK88DhuxSszMpH16GZ8fqkHaZpxwL7sX9gUAwbFJesR2omi6GV"
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
