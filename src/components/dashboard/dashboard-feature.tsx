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
    "dymyDuS79F2dGeop4csCEekTfAJ68ZD7FE7X7iWNoXcNzauRX2wV8EsxxnCCTHBbMPzh9iDkcSQgFiK3NA8BnY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fKAVjfm88YiYT2hmRbS5yEDMbYDpdCQnABR7uDeCMpgBcZhgBUyfNYLAMdxFvV5QizuV5WNDwYEFjN3qr3oabP",
  "key1": "3bZK1f1asgDKskj9aqEiz4o98iNybNDC8TKG2zGNwTLHMGDUNZ7KEpLrbvpT4jdeKSpNhbESLP6zjR6xiJKFzaXX",
  "key2": "5qJPsq9LEZaFWimDeJgY1SKiV9SdJtpRF3WvVeaBoqVNGowCEe1sPTqeMsqPp6tUjvq7yVuMMjmcJnDxybmXP3e",
  "key3": "36XreScsqsxSw4STSvXeWVEqLsWHQ33q7ykNxeThhGTSq3V5eSFvZp8XfrEJwTt8GrQqtYRPsBKd9LsuZmr1tNZd",
  "key4": "bGiU6YhwE1sG5U3edhXAnYrxAVX58VZMhGVDXVuS3HdMjhiGHb1eBD7rVVK2geAX94pmHkALwyQ2XGztroRutgP",
  "key5": "5a4bYSaTZwo8im1WdWM7XQkeBMtuPpZ2VXFAYzowGLMkY4SmSBp7YsABYQYVrvYsDiDTtmb1aGj8kyrEM5iXHJCH",
  "key6": "441DrZGy4yjPzPwjGcDB62st9upyMs7agmufk62YDFjuAbS8k6QTnbznGfbcuLzm72T35bJ7qdAX2ebocRwifTwk",
  "key7": "24mQkL8XTmnD4FnGGXffmogPzehuAHmtK1svi6WXnRnToZc82pycu7j6TMMTbiNrMmowdwnyLHPHtAtAEmCofcCE",
  "key8": "2QiZyH61XEDU5aNa9hzzfERvW2crEWYWBAU344mnJjNWkX99WgqYWEd414fjyrqZom1nmaYwWZTbcPvyKPaMmmeH",
  "key9": "2uFNCn23f5c3PoTYKuiEwUu2GHuM7VoSi2CE3VHNCoGSevmF4igxVj6HmXgtV5cTBUvSB6wpRcSE9ihvjgS94ngv",
  "key10": "58i4Wnu16A55KFGv3GzjogKi5fzs1fvveUSX7B4C42TeanFx4qYeKAVR8xyUU8pzeoaSNepEqJAcyo9cym8tD47",
  "key11": "JfnARvvuPiQJ1rvz87tQ6Mtv7Ng7HS7NKvG7YJ9Fik2RJog8oEyF1V2C6kGQgEeuLt8avB8zgyfKuzMdSCu7G27",
  "key12": "5u3UHYghX5xoPg9dwM6bvLTMFWL9B6Ru8tQ76GkcVgTaZpCtq675YLgQUrpKNoXiNDKjijkzuRKFgpER9SCPnUGq",
  "key13": "35D8cv8vJ5VeNqVh2TZVepNRkJ3z2XdiuPS7pPZxpLv8JnY2AhKUHmdLBg3hosJJoKQBChLUrDQgnRaPmeLpYsTD",
  "key14": "4W2N4BVtp6LJMJWBUkqkdEeAys27AY2kR5uhvjCQYLATsoN61EodmFrW9XFxErqxaVgUVWfQzXgvaWBGMFNivotj",
  "key15": "29SdVTwMtkvmSfmB6xDagVFuc2oGGuHKLFdfRe7NEeLgYWgfNCuASQVh5hpCqPVR17556KrpHS5Nq44MxNS3EVND",
  "key16": "4rYPCxofRXKsgzZwgXooyiNZiZnMHmQSwvyG5RRaMXfGHAw1qxubPjUhhTJQNZSgy3EbbPjzFje2cu6chHApE7Au",
  "key17": "n1UNbvX9SXhMt7x3pTHjSeN6NEgJEXbxYeHPysZNDF9pp3WFEXeCve5Th21U4gQTbEQX1U8FzcZ1mpAkTRXFHyF",
  "key18": "4QD7AqZ8ySst1iVikNGQxRUHywcCyZBSzt22vkFe3HujbnmyD9QDcRWjJbYQjMcuEPDau1pyiQg6MAy26Fpb2Ltp",
  "key19": "om5KRHt87Ggn5WCDV3aBut1Ce7HcL3nuCYqDJQfNJdzxQiEZquBFf8N63CMZ8jZygVSV7fmWqE769QCd9JBve1T",
  "key20": "3PW3hNqqULp6M1uNv8drqN9YmnyiZv3aYdWeGfiwzUpPHkmcePt2EX9ua6b2MQKXxckYdjdhdkTjHHcvWp1R9rhi",
  "key21": "3b1mQQWj827Eq2ML5FtHXGt9sa2QRsabczSDQjvWickRnQKHyRLePiTL1xM43qX9jPZgBfjVn8S89o9xZcG3Li9D",
  "key22": "4hQxVQcafXufYkvEr6NjTgQLRron4xZd1eHa45scSomYSDLcTwn5GXchu4emKyULR86x1p37vbcgrX4QgWgMec7w",
  "key23": "5QUAXjVCgncKCZqD7r5QXmZo4guoJ5WrQjTbY5YwzjS9BgUAw8sm7uYU3R8WqDHXz2LL4eHnEVzFLm7y1oqbaWPu",
  "key24": "jtpFzb7LrqaNrgxxq2Mi1QZrTr6EXNp68DBznFR3aSVfEAJV7ineA31rsLCmTN1seqYobShLfgP5rY2UVtekrdC",
  "key25": "43GteMf4sP9GWcgzP9Bgg5pK3EM2umBjc3FCysVXZ2nnb2deSAUexCLMSiEGmNJqUCGtaArkfWTjViWXMFBfuk6K",
  "key26": "4gBYtqgDkEnaP6zDoLTpt7tTtvpvjf2v1k533ihYVhQ5Q4txSCfE4txs5cGmS7HtTe5iEkgPVrvnBxeghzG4SnSD",
  "key27": "W1Pb2ZTaBB2vJ3po2keqsZaEyi2M1SCfpzvLGKNVfLNKTrNM1LwKJ8bNB7EY5xWJUDjXKhS9wNr4oCM7ZWA9LiV",
  "key28": "3vTMBX3gytd1s6fVDG7o8BCQ56kaaf2Yk1ukHgWuXcjhMmznCa3hwDu6LqAokhDXSFyyUe67zdx7MzKPpG33secz",
  "key29": "2VWp4WBAbN82CbuWWbKghbzBDDZYxXVWJ3nZQPNMubTbYYgcPn3cVbbPnjMtYg7GcZBdLFVthZpfR1b6Esv4nGPo",
  "key30": "2TFJQKKBGfC2NptN1paJz5kYyTA3xS1qToKuYoLE9J24uAiQkAXvti3F9JuBGvdzhdYBUqnTbhG1NJutVbHD1SR6",
  "key31": "3CphSPwRLZRq11K4K1kzJD9nskmSowatyrr4AQYBZk71BrETPMRvksQULWMPivdHX5BkJRKePGnCUsAsJbdJVSMX",
  "key32": "3ewKuDHVS3gCoWLU6LzfLaUYeqxR4dUyCieKFensHNjcnDgm9GizDDNmuRQtA2VyzCoM6W5EybVg1MyCMGdCXbNT",
  "key33": "3CRb7V2vFF8MY4fWHMbbfDnhrMcowqWMV1y6m2NNoLSQf6bfeGLj34U9r8xu1oc9eikKUAMwFE5nS7WQg6N2d39M",
  "key34": "bjbvLyPGKY4QipPfiSTg3dW5K3bWBF1x3YBrC74fQSSTdeahEWfNhGUmKvR2uu7WeXcZmdAniAnPX9acVdEeL4t",
  "key35": "yHJnT3oGPJ6ZfJmCJ9556sonEfucMrgErgoQEGhmd592LBVfi5do5Z5aZCuWKYb4UWPm73Z23dw8kDucvxqBYfE",
  "key36": "4VEXJWnd1vqY3WWf2DJY8htUuNuoPXD8FputVQF2W8Xjvq28NttY64BWmujLzMmu3vghBScCowSpqqfBsEdEjvZK",
  "key37": "RtuNTdpoLp9Zwqc5iT9cX6TB4pW2t92MeuBr2nbg87xBPP7RkFfmWeDpn5YvqeqcSGG8fSxMPjw4RmQ3yR7eo1j",
  "key38": "5D1CmdbykAeCn6pH761Y11w6WWE7jutN8Dv19oa2jmiSxiwqHCWup2i7PrvySWGJUNHWFQ9A5dJX8ubo4GYDbGuk",
  "key39": "5S1fm2KtF8eGrpvzVV91KocXNDLzrwEpDNPCe3fegpgAP6wEqBERz8evbAik3c8EhZjjzfXRdS5ESvPFnPgsGBii",
  "key40": "574tUaymJCbDaV6KVccXc7xZKgLvpiiLviFQ69fPaTtx4XevdW3cxxbprdpqJg946QKpzF7Uj4Ls6Y4Er6Ygc7sv",
  "key41": "2PwSEnit5ssZgJUF6gQN9FRLw4BrCxiKqfDChCax88dwrJ1AWD8CX2V6TDiX1jA4D6sU53d9USqiAYg5AKxhRbzD",
  "key42": "vWnrNMfKmVjrwuAif2BE36AvQJnm4rDqzjHKgLNNGJY9wAR8eQo5aErsjaX1HEfTa1JwnK3k47HFRBdV6N6eonr"
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
