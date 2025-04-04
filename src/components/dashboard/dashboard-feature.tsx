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
    "4jDRqFEKWGPhm21EVXHJwDtN4t2h3iWZGTHaTaWaBW6LyPUbndRfVQbrKmv4UtLkhdrD6Qq1UAtz7xBz1oj8z6Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBsbxiG8TyVNnoeiQEEtd7ifiEEZvENYynNn5EiarYBpE74JcWCczbLUMsrugD4hPquMUWqvQkFzMwVKnh5pJcS",
  "key1": "5Qs6fLmUw4th1krHhpJJj8mnv3UtXBbgSDQN4ixsu9jnqoixcihumQkTYjU2TPaiVxAz2KxQiwuwJGcidfP3wDZX",
  "key2": "2k6EbsBBt2ue5W23PSAncERR9BMpLZj7JTMujU24587c7TXJia4Dkptz5mzj3XTrskEFHygDShgtL5v5PqXKLKPW",
  "key3": "4B81o13j2ZeAJfMeFAUgxEyS6FcJY8waX9asV8AEj9dQEaPszMJ7mQivxee63KQ1SnmVv1FV8PrhfWJMhdr96Pcm",
  "key4": "5qjXNEDF5sSjRwVPqqnvxmMhMUoQJajXcxVmmSLPNAbrFySURRcJh1coBq75oTwTrcpmUoyvMFGzqmSLbA4SKBzL",
  "key5": "3xqWpLwGgpgcgDjH4ko7eD9KVEYVYAZ2SGXbPsBUB4zc5gqa4LgvgXcQJ6oMTBNHR3Tg8tTM8hz2nDnqCNi9dC5D",
  "key6": "4ytJX84ZHJwTknDzH1BjqbpZ3GgemvKPVkhofY4RmLAfoxBr66ZTDQ6r78pvupnKR1puK17t1f81jbgBmXeGBQs9",
  "key7": "4LrPFEAnGFTfqQPNqZBeS1sZkAFvS1eJy6PBuko6mAFxRH2zjvbcfXneMUmLk5gtAiypWuE9ianSYXwSGGi2HrtU",
  "key8": "4GBnFXxAZFYzi8RbLkRL2CNR5dhjE7TD7ZjZSTAGYSYTnb4uRFbjh59dHDnVTHN3WDXhbmqGfY96jWQDxz3ULJph",
  "key9": "4jLHTxRaz1DkzsQkszUz5ZDFbvAZVdh6aFpr15yTLLQG4XubGfmHBR2vHVCJyWHStiuMAErupMKpwKZFx22D5iHM",
  "key10": "2f2ujaEs1BJjKm7pq8nEUdWvj5LyPb4STjFjDigdA5HZSAXpZTf8CsRCLJWtCtriEFNjkJLGKWbwUJt5Db8Pap8S",
  "key11": "4xQg1LwkG9rXMwky5UFXLTz9NjJ6evQpNjm4k34YWMtdqqWWBPnyKsjSiZkdYQCAE4C9mR5oGMgokHRac7RdAtXh",
  "key12": "wvSLqMU9ZQPXc1tiScrVhw4G1pXBP6Wv6o6oFrdtXhjQWtpWZw45JBPMPjfmqaAuHhnA45B3EKqbiTJSHh4VBqN",
  "key13": "5KTSPZZio9X1zcCLQcHiGUZi66QuLLbbAKW13GDshntkLbgAN5m6nDacSAedJgbAcQqwvbqy56hHApjCfHENTmUN",
  "key14": "2eqA8gdUF7tbRyQcBSWRVW7xtUFswVTtDiSJTo6Ppw9iPnr9JkS78r63G3QgNfz42bNYGewhu4RTZEbAERtgmcJ7",
  "key15": "51ywVQRRhauuw6LJkKw4uZ7Vwqr7oiUzjFBbUWixKdqZJP7LLspsxR4uEi3Gv45CWToyvJ8ctTrojqQnszMHkUrB",
  "key16": "574JHNybeg15PKLjDKCGqSUNbUveckMsUov3p91c4jwKLDi9w77t1qY43J8qUasCUoAnTwWmnGg3rCvStjrdDN7s",
  "key17": "5pKfXfP2hhcJyfU7qopzpE9Uh5R7LCzn2AzVhA1mFmDa5NsmdNJJRvF4ESTAvNtpTRT5ZFXAMX1wh7Xv6JZNsNzf",
  "key18": "3MBanzFhJDt51JJm64XxVsQLX8QU2SSrLiwJSKvVtFF6u6CjyKc6xrKm1jwinR1EvMz2iTAYugFLJfpoMiLsT72V",
  "key19": "2vNum4Wd7JqJrHX4MVS9zpqD3o4uiwPKvURNceN5rWj6rQgP1esyPdHYcrGKPLCPj9BmxJJ6ujYKpfaCcGLYsnQA",
  "key20": "44gMYnUJe2giSN7Wm44bnwM4pFSSUSCG9cphJyBJYcGvSzdptd7bF33mfoKegoT9JEahcxNpDcoxhr4Q7w9uyJZm",
  "key21": "3q5Zvbm8JWKYXgS6hfpV1DRJgrMSHLi3x16QrjpL15RgTX5zpZRZWvsZnwUNbXqUXy2qAHfMx4JY1zATXqb44oyP",
  "key22": "5UEVyGguQeUWMrfK9RUtfLZj61trYA9L5urDYoC9mg1j7KCBgjLEcUPHjN3Pw9WoBUfCHV2Jep3h1sca7G3ZazWD",
  "key23": "5bRzGYyEiWVFoXesWHAHpMFMDJmyur6hPTbKCR7SEE6CTTEK9aatBjwSZL8ePJXf3CfACDfcGV2nZQfPqcaNdmEf",
  "key24": "fbgyT6mjwrYKjdtoFT8q2XfdvTWSL3WSN5gftSMsjZLVg26PXKCQcTEMari8Xth4WUrU4x22p3SWPfs643PcVQs",
  "key25": "4PDRdu8dvaib6VhQbXuewGYu9ejwPZSqbFPrCDnLpD2JSJzv5xKgCtbq49QGExmaoqNtrtgANbJLT7ejHuyaQqCK",
  "key26": "4jJi2CNNZzqeXk1x96WAzGWX454TsNb4VAX12X7pVTBrRzNT6hZ6GQcRLrpktjvsU5r1WXHU6hC3juyESkz7ZirM",
  "key27": "2Xa2tY63KzdeH9N7E3ou8HVpEJtY9BCeezEEVAF6sMjPj1n6QSqib9SbNEpbgdQmkM3gjqXgbDP1hhFYa3AxL5Ce",
  "key28": "253uy9zpsFx2cQpTGV8iKYvausQf4NtXK6rp29h7h68D9apaikaW1k6Vowcmxe355RaSTbhbPPHBr4e82RXkyXAM",
  "key29": "53dy5d4886UC9CCo3viv4XQuL6UN44gUUU9SDnqT7bNThfDNpSYLCHEZ26KrjyeCAEvcmESvaJBNzr3bumJnewDb",
  "key30": "3MhgkFdaSwhQ4H6LPnwY6zdKuFwcxToYU9Ri1UBHi9PMzUrQgWMqWJB4s39jFgUwD8Uj75dHd7gM4fzLfBGjDzZf",
  "key31": "3zqQmGNUA2nrWi7iUmvp79x48CWuryqUmkzEnyP1bvjMW2cVsUGcYtiJtgEawDWRXnXAwF1z1pS2n2oZivG1aRoV",
  "key32": "ajcL14QyXM7s9LMaiWSU74t7CfmRCso5CCPejmTVZcJ6mtb4ueFxRbrYBXEYUbsDJcoszEY8wcJJYmnGddSHekD",
  "key33": "eCgj2XSyWXmmyY5inpsMiKghLen8z7pxvXq4rEEoTa1rayDBJoM28pcRXpCXqaJFUkmExcSWAYekm1ELvPH7tRG",
  "key34": "y2bLRoaa9BxNryxsrHuFo3JBxyfziKCPRZCFGeCAYCFggE6EXq67rj5maLPqmdJojZd7TrZkencpQ6MGjwdz8wY",
  "key35": "UzMFgQx5etf816gwwgXti5VQQeiS6ah9FEhJnZ6CFMsxfSfu12CkSx9hdozpAG4nVvwbnQNeHqnE2aG7fX1dqHS",
  "key36": "2eE5F1LgLYzRsemEytqZdqdXJBwyXQmMo8dw1taXQfFibWEUZCAtdQ4sdWLtMyQtTSQPL6eEBc3E814MBhpoco5z",
  "key37": "3rAP8H4M2ZGEeNJmMW99kpXzuacnQfqhgVmzWUFz28fh1QuRnshuqpuEQEmD1cnkWrYVLJwfzMz1suDwoe3japc1",
  "key38": "5UbTsu8THedCcDM4XgYVa5rBMjpMNTK78x9uH72q4vZo8B1at3hjHxBysempwGiptAmqytwHJ1YtXS3cAH2JbKge"
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
