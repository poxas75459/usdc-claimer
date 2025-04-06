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
    "5dCj6CjR38PheEyFXeAbM2JH28iMT2XFf3oKHwXkEGoRiiaw9ZpwbsrgAbwXJSHfLNjr9vaDfjUy6fpKqvQKY8DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bnF6HAGEbrFADtVHFYG2XWRP4QpSCbPZJHP246t4hYYiujqzMUn1WSXWnLB8pf15PaLkJYkMQdhGQadFB6AYVac",
  "key1": "42MMQNkFFBXsXUZ3JBFSu7aSMG9isv12DGvkusz888LdACPbd7yTaeWZakWYUJrihdkogPZq1ntWSNGo9Y1MzHxR",
  "key2": "5s9VfBB5SNkNd3B4AcLPG6dZMfKhmNXvGM32yZ6MKLNb69s5n4VxpnXSzX6Xon5YCZYjc9n8rZneLBd26SpAHuPd",
  "key3": "5VazG3wc4rCCc93ZRCwxJxVcbEuGG3BRiBQpqr66bzsTgwtc4qk9SDSEByKLaD4JxvVGLyARDFF8xR33kLpHzbWV",
  "key4": "3gGtjiS7NyxhDggqUJ5SsNUeWPV7mj3ejSoUMidHoQJCM1fEBqaXxSbyjrLgVE3VERJT8ngZE9grsuoSMAbzAKMQ",
  "key5": "S4PCgp1EN3DAo2f2NAc4XxonbgAxdXkq11VkSb8Ey6cVFNHMEnpQMGJydaGZFi57QPh7QUpCxL5jHyRd444Vq8f",
  "key6": "122T8fsZy4y8xwHwLk7rWMUasV2aa86RtzDWRJPEqP6FPY2PRHkDypux9K2otZzRqW1cyc8pAZ54gPXKyszvKZUX",
  "key7": "3HRUztkV3oC6Y92sefgjzuDEPJvp7WbjD9hghZZT5g6iAva1QnX3CkekgtoBT7qRLU2pHriZGtLkbSpo7riAejRL",
  "key8": "6zzNQnot1tVSzecEBi3bo8FJUNZuMHqg2uJ3wM2vNhkpiQMitaZV7dRMH331qEBhJGqafGPNtMrb4VJ2HEvExyG",
  "key9": "5uRopP1EL2hHcsQPGhLg2EXNYPtNYYMjsm5ZFPUZunEdEGc7Not2X8yJXfqupFQUTx2177caKdLLqZuCNf7SjjdZ",
  "key10": "5JvvLhabSVEsVr8hiU7daM6AJHe6raaKaZAUhYEEXh7RdhzBzhPHFYpUCagCR14immXCMgjQem9Hnn1RiUtXUqsd",
  "key11": "bNXwkceTkLvmy9wxB7mayi6m2xn5LQnuYiJ2p88ZLWxrDfZQuEvt1wJFcKrV6kQR4zP9M4b5av42cFu3J4pvbgb",
  "key12": "43ZfxqUxTbUCnUB9FgsdLcZvshWnfrvLwoTGfhTNGyimyQJjD98AHrirXkqDyLvbkoUZR27gXSzNfKiYnzvbvdt3",
  "key13": "4h9rrruXu333Bhr5BRQzhnkiq9ojAjWAW8SR4xykjB6yzdDrBFv3bF2Hj7uqgz1ooP23Jb9FmywQV8eBrhaSWnZp",
  "key14": "3bSbdLjwkKtp1Fnhp4raz9duBXPMgrJN2Z9HPc9HkJQxsY3U1cX3WoxAx94pATJm7uK5gNP7nfS3VzvCjVq2syVK",
  "key15": "24KGLNMchdCuSKWSS5kcTNtKYEKQoyhdKEckkaLJP6rYGbnSQ6M28wsN5V5DWXXaeduQDkdd2H3LMdSJ5KAnqVQi",
  "key16": "4743RswuWdvYLxFT47fcSjyjqqzAT8ov2NRpGcnAH9J7ndGT4btb3QdyGvcrhkafBEFHsUQ2pGgc3LHKdms3zULw",
  "key17": "3VJerG7u2SetpvntReu9sfyWDRN5nUWpZkaao47DxqMTXqKGecNPRF4cJCSLpTeRgEeta8YfWRa8T4k6fTk2AvVy",
  "key18": "4mQkfEzRTUe55ff2Tdpfjy2wJWG5MxuznZp6U6gngs11B4AE9nVHjbhRxvKN3NvQiBeokDytSXUn8XxMV26WsU2A",
  "key19": "hao2NHqhbK3Kw5KRTSg9pJeypuxjdLgrHRbWjrTRTK3DeVJ6Evhgree74RjkE8LpUi12Nxa5pd2RbjBSUysR4Lm",
  "key20": "5u8WNwfoWqh33B7RB6jxWoS1gPDPL1vyYgipoTPahwkez7Jm7nXj3ADhy4VhvxaF1YJax9We138p6mwutPgSrGCa",
  "key21": "5HQZrTwZZaYAjSm8kYiqEXAn6N9NBnU3ApKoHb7R1NUif6hf6W7QCUQ8a2hrdj8hwTCVWtXEaUinmgzubBC9VSzG",
  "key22": "26wJYG7hHurZ7DHp1uHmjbePxYE148mT5DKWf74bUjGddxJc4vbgFapNUHUY7v2BG4R8Rw5yDAfBQRaeX9bPLun1",
  "key23": "28jGx3Ebw2e4Rv3nf68vhe1TAgSL4pkuxrQF3tmWk3XEhHVwNRQWKYdELkBGbiU1ZHJPdE8ZAPXHEm7CUnbPa2Kj",
  "key24": "3PVe6pTRtEjnjLwc9YxtCMbXUiKoWUfmua3NTMwxfWPBVDQZjsHxSdw23ikbzJp4xFc833kW9xdQMhLMxew1wi2w",
  "key25": "2Wh3RTDb4rMvCf9Zgu7dDyPCEqzEkXyHNMb2tcu9JQi3xLeST8ibp3A8tktjSHYH5yfApCqTjNbkUkpTGyhE2G8P",
  "key26": "3AkrRxwRmArGo3WGzjAxrHFQwzysRws2r1mAD8aoJMiTUUdhRTQyczMzJKsyvNEwkYmX2DdygkKMi4wkEyRQgJqe",
  "key27": "5sVZi64v6fbUuwuJWwMtL6iitJeAmfVZ1gymtpnhdn6iB5XBnMjMt3n3yJCMis6hYFWaCQbVCrHvqJYZH8rfVxkp",
  "key28": "29C2s3V65yzaTBVtWr9Xh3EEShax2h8A6xQiMRqXAMa9aJB4TTAi4r7GWCxgCQvNDCy3bQoDZyB9N8YzDemgiJnG",
  "key29": "2WvEVsQkazZtjcxzbnMvYupzXgsorwPwmQ52g9GmFr3SdKcMwWPwgHsew7qmey7tSL931mE6v4yPZrkpWPXmqzin",
  "key30": "5eduyD8oBXKhztTGbXF2yb5EsPziXp5oVpW3hBeZUT7aqUNABNKKBurQgXcLVPjjQVFiaZBF5q3hK7BbwBzQBWBS",
  "key31": "Qvy73L3e6o63owv5q3wz4xReoT5ndyWGqbHT8rbPpS2uvc3SUiWNe8kR8wm43MsfeW3ufUwWNS92GdAjqKEYSQQ",
  "key32": "2ngegA2pBHhwgmKEim3jh2zaxeGZAvDHsjiuxXoaRRCcCfhjQ8QZ6aBR23oZyzPBSA6T6rCBhG3Zh2cFqjjPxxzd",
  "key33": "3kZyVcq6tXRgNNshJUzYfpKzm9v2QV1jcv47ZT4u5dcjjQE25FZMa8P4qDXVv6zqeT9A2EXgUGLhZtnGodnb14wT",
  "key34": "524zhCua2BtcCUdZCsdRTkQ3ABU3vdPCu6BsajKzBvPq1f3BBH5yT7twxL8WyyGgRBmSHG2afxtd4fNRzKdWL9F6",
  "key35": "xqD8hWeLxdJ718TPGJoyDgGq45v6Winq7P7TisLXDrzrac3S9R6RyrP8DWS1289HpxjfqwaTX1U5UgbNgGAcptF",
  "key36": "3MbPa3CY5h3q52z5tocJNJicQRH5s4btXTbn4SGhaCd1k2CVwKV7eggzkS1WgY29a3Tz62DuAzps7VFX774LPWtz",
  "key37": "4US6yMFTcLZ9KRjzcNgStbk5YXu5DhkM62sTTShhPm33obSuMir2dJDNNu8zowkDBAS7ktKQDGWv6UHZPMdSzQv8",
  "key38": "3U5Sj83gHR891cXhdFYH4FMqCHG4oKdSNdZbEifaYcXUHyiGuzfPPJaHGs1QC1kAfRNfThrsgu6Hh6VgS8KSFLa1",
  "key39": "3MoqYyyxsRJUUccDu49fxktQxpNEdbqgcrMcjtHAHgKnDq7jgjy9LkYYRwbfhiDAV7vcaYrmfUXmymD6V1SJTaM",
  "key40": "5rq23SryggYQge9xH8do4usgD1simYzXX2LNg2VVwsRjK5FamaZo7UTMVM5zPwmkoFkMbFoL8UovZxwRCHXpKVoC",
  "key41": "4VyvgMzR7gWLFUDfZu7n6i9UTbxAZq1ozoyLmSzkLi5kFmpa6o7592Eb2YbnbJZK2D3JEq5PyWcS6yegBxF6d6C7",
  "key42": "4gtUCMJXaim9dtFkodHSEzvtSpMwC6BxVAkvh47cX9rkhoCaxTaUqxBAmDHSTZRSEhi6VzEtN2nJxN74dCfb2LUB",
  "key43": "2RwWLG1YJurEzANb8xfzNvgJY5yfihftTDJr8onXTPYnArWb8caMCWh3vtGvQHWDv9uqKiPYMVQJMbpZb6Fz5fp4",
  "key44": "39tCGiEBoD24VWxFxYsyvgYep67CeGDCPH4qmpiF1tAQjCB7Fa3MUUEff9fxzdtT3Ljxiyy7drTYecFbovdEcR2z",
  "key45": "2X7QFtZzPVDyeRxh9TwoHvMhc5jb1PSxsodKT815SQMmswzyBecxwvbLG597ks5x9q659MAzivK8tZwDKw4xDmtm",
  "key46": "3r7RZJVq9W2axYpvpskaZWjbAMD3UGBrEXpKyhufQzpTSL3m3sd1emr5oV6J9QzkBqu9JyHhUYsYRtP1dmyj7FFr",
  "key47": "35pp6TBmRro5QvMV7JJab1VRU8WWANoVGV6wGgGNWaifmp9R2hBUsm2hpK7jiGc9fmsMDZrY7Lm3rSR9EDiehf8p"
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
