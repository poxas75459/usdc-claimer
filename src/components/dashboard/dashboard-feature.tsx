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
    "48fi6vpXXbH2sAgpTrig2wwT8N1yWekbKg4LCLhWuYF26x2HxVax993Uk52tPWDooPBtg88kuWzu35ZZ7wVSuVU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnVtkNBrQRCD4WgzSrZ4w6JotsPyTfXDQQuW4kr4PZ6jgTF4FxUDYAjwG185Vds4kUgQFSpQp9L4car5XAAVthH",
  "key1": "5enZcvAwiuD5Xua4NNp1pN3YrwA3to1rK6CK7nhkgAp9Dd8QXVzk3MWew5Zw93bxv5kniXZMH6wQ6MJQe15b5JJM",
  "key2": "5BQhQLcyDYmt46qgn1RhwrWvSdem4w4Qoahki3ZbQcEJwu6rcFCbSexFsdrSJGHwcTwz9AfcjruJW2Rn3EboNK8Y",
  "key3": "4MBAPLhvB8WdiLE1TefESQGtSQaxFvBgcpXzk1TjQNXyy5DcytRMRb9k8WWvGRfP2dQcV32agThvAazVthEvUcdm",
  "key4": "FFbYhf6FmJYSuLPYUduWqPmTxkeXfGi6CPoDJbMUHSn4mNhZihGMVjXJAYWCpgUbxrqYU4M5UhaKLE1Q29zKbr4",
  "key5": "4PZnYdHs29E4b8WY1T5N2tU9U5rjZ5BFJ6a8uyNp9ptvPDWukpqnyz4mKis4JJQfvqwGrV5FFHGbTFtCBiwPozoa",
  "key6": "4bGtqTykmYUJNnqMo2igeLDUpDiiafSi1JdesXNGAgdiyXqGfRQefhazKSSLWmLi3RS3Mg6wHFbr3yErizgW2kXj",
  "key7": "45UYhFbGCkagRLP1GmKNuoeLRmV5c3HSjJ6TH8whL74M9fSQp9twW2JMKyTc1HacuxnmwNC8og5Ra7zncs5V4yRs",
  "key8": "iojxzxQzwh2uum2Li59VEaWPEtPnLnh9ZYMVotwVrDD3Au2w7hrpcaqByqPvzL4NYXwFywZAMXv18bwM9n6L8C6",
  "key9": "2eufArKz7SrJdijXrbEr2YBuoYJ2JMB4KdhGaiXMfxqLxXKa3hvzChPekznK8vdqMrTDL8tagtvjrecroJf6jhWF",
  "key10": "3GR2FSFqBZYxrBSJTDTbxXWd9vPEu1ZJd911NoEMg6BP7xqdwizKUFSqwrVJa2veLa9EZBavqCr37D84LVWFkrUs",
  "key11": "JtQbSZnCyHzRCipDN3EqTr6pXZJSZnyFxwrGuPKV3u4sMm3is9X4iP1PWP98KN7deMNiM44PQDsc6qsrA46smXp",
  "key12": "2b4Apw8FVPFag2oxykgZHNJNmUFgPG5FdRF35urvrhuyg5ndfJkwnPLwkMP8o1FEqEfDcwiHmJiU9gPYkFAruwHL",
  "key13": "2SHarJPE33AqP7Z2A6tSBjJBFRfgC2Q8N3VMRQd5546ddU948U852vWMcwbBEDNWGqVWDjoMt4N8DMBAMui97tjQ",
  "key14": "65Wv4pgcT6VvxUesGUAqRm6HrznkPmcjyg3Jq3qYcyyM7iBsPHMPL8iHkE58XaSr7mAPGba7b14uBZWoztE2Cr5z",
  "key15": "L1o4HzEFQ1yPALKXGaAd28ycDk2LieTFPMLu2WQaD3BdXeoVXqxmDyDQmzf8YSy79L6Gsda5kj28YxYZQV2idDJ",
  "key16": "5r4QBFmh9Nv3Qt2T2bQLJsvv23uFTiCPaZvLMfMZqR9KyPQYfJEABRURckfgxwz7yWTkpiFRvc78WZbcWu9Hwnq7",
  "key17": "4aTCwdnq7wf65WsQicRnubXAgP9PUqQjXbKcgwZYnnUWUfNEwatwebgCWTkCKU3qki2pUFn4eQZK3MXGVgkS18E5",
  "key18": "34FydKXijb9y7Sp6cFWjSZbhzSgxY4RLu3tU2dbjq66JkAag2esVCY17TA9r8oXP4pvEKLYkbsb5Wr4y4eUy3hMr",
  "key19": "588DJA6RrwC4HR8f7csVEDi6DccZk8fZLMrCVwQjycCTwsP61g9VEZMaG3FmEALDgPigJm4FKpMFsjEp6CTatp1H",
  "key20": "3nhDxU5owSrM6B9hmUuQc2vRAe6BufZcvAYbXZSV6S36ap5vxBwkL7C8w5Q3pDnbZjRTbnWmeV2WfMd7xeBUyywT",
  "key21": "3Qu8oniZeQXzBhVCdMhmJ9iRrVc4ZLW5LtGJqbPaEFWbDzsbbzzqVkYY64D3mJAWEPQexKvqLd95FyHYefo2jBPw",
  "key22": "3u3UNnVyvxasUsbvhAVtkdsKR7X6os87qV4s5jwbSq7cJpggGQsYNPpGj9rnCV1CxD7idsKxoanpNE1H276QbraE",
  "key23": "2Yo15fFCCgkhSmEYErYqAsnmu6xk15M3kyJs9g8ga6fBiy5vRcmWdARJsv661v9VztGW1iB4mARHK9jU2gdLBdQ2",
  "key24": "2WJoe3gGKw4P53QXa1RW2TrGE18nRvBNkdHmgf86wenGxqLoW3eZJAgfTH5ceuhpRqMYt92Y171Bac2aAD4n9Kxp",
  "key25": "5szUodeEeggdKxKG2pBK55eCmjJVbMfqsS2pJuCXCmxRuDe7Nte7qcrF4QztmQxuXiordVdsvhhUmCvVQvhrXZ6J",
  "key26": "4v5GXkh4an84Ze8NM2oJW8kBMidDMmusDqmy3AqmFsUnqs8BivzSn6mAaWrzVdxq6pV8YeyEVpuhb6VydwTjgYpV",
  "key27": "3gzXVe2chiBrsVAs4q3Eu14xnMRJXYx3tahkvcmp26mD7scggy9VKkAxmvaoyTSgkihRXkMuFQCzovs3nWJF3ih3",
  "key28": "5k4QXhzrhik3GQrqFAXAnM4jJxsVNstn8qSvttbTYJpx4Fv5qEewy5frjyax8n648KMrLyEP1ZCQraYQEuaTxd5c",
  "key29": "42n7Nz2WXJKKnXaD6DJoW9jzA7TEw77W8cMNewquV28AA6Pwjvntx11LjMD3UPuwiwpjLbbUbYcqkivLYVpdWLAH",
  "key30": "3tTUamsw7pKDAXe7D6Vg9Snqc65Q1KDiHSey9BzWbanQbqbwdd4vXrHKdEfwTgtMKCfpZHdy12h9EkrGWa5quPeQ",
  "key31": "2k8e1WTgtkYCK2dL8hTp6wuayDV93w8yuV9mdbgxeNxhcXDq7UzPZCogfo2kbDqHKCEdCgWAJxc628fbJ3LEh5gW",
  "key32": "2vBVVzGiCQjFgcPq5KHx96hDQhtBMrWzB4EidSWidVSdjqpgb8KqzSu2GA4rbewDQuV6m2oURCQFqD2TKNF5EpLz",
  "key33": "5BKGh1mrdYh4zYYxAmafhvAShQwywBMoPkvQ3G4XSFcHhAbUSENKSepxhXBDAUxrCjiKMbW52ibW4UyFpSqBdteT",
  "key34": "5BDUQpzAdg2D4gdnrLJku6MKHTbPLagAnrUS8ntt6e32vujGXBDS62TDKYGbt9fEhg2HNmgA5fBJWMQt2ac54V6j",
  "key35": "3qAVDN3Ga1u8rrNEgNoNfkTVDG2ovCQjwyproFVV5QmQ5sbcxt4r8XxypUizwyQFKqrX14tMJyHNBhfyUvwtS4Ym",
  "key36": "3Z44CbcaWaWxg4YTKprkkXzbbC56A9NJFmKoCuQt5ea6dsP7SyUDARNwGnSTSP5aobfX1vtPToMjiPdXSV46vnWh",
  "key37": "4VcbxZ4wvu6T463nThyMyTVVxVBhr8Z2Ajbj9MCH2CHjSy1bKhFGv7NrghuZ8qYiwbBiqb49rCR4iN15R1SNVFPR",
  "key38": "5xMGp61RvMtA2TP7WwvLSaxtqxnSC2ZZpsJMH5G5zY3p82qr5vQj4mk2Gf9rWEr6WwsLrvxPcEhjtWKBEqhQW8XX",
  "key39": "5ZTf2hgeRkvAJ7npSYoSVc6deq3EymGJsVALRDWgx7wRz94UeraTD4igPJHno4gPu2xyScL4yCYd9RVwcuwXoj1S",
  "key40": "36GsP3VMqVnogaiAEgkR4p3nYYrFHga9YD5E1n4ULva4LnUSrNezDhgzvSG93Q5AGP2eQ9mS3rEu91tk94TEYqyi",
  "key41": "5hiqV5iWyH4DpUDjXYrL8DZc3KhrG8soqfQduyh3dYgxPyPq4qiG1pngtXhZ1hJ2f21oExSDeJJodLtHsT4fRuUy",
  "key42": "5Xd7HHb4i3wSfY2he45QXyZiXA6awfaogEu5oJQYChTaw7gBoKXpzxdcH1ptTVuYDojpxwwKjUCtcgXsn85Nt3Wm",
  "key43": "3NPTBvo9jYrL7bwBUfaUSgdB8S9owj3Mcw8WrSYr6d8X3d9oT19wwaAZuQX9LMQWkEu9Npq17M5Q5MMXdyL73pWG",
  "key44": "2wrwcqvjb3eoj6ExdMw75S23c8EWBVRei3PtS6BQzGu1TgKMFA2iR3hn5jM2Tqcm735H9avdjCGZXszjM5xCJtKA",
  "key45": "XMT7Q2a3ZDxJ1Z4hmTR3cdonESa7gDuV4vGWYzhNGnVyWdDzQpamGQTYjLZa558z9yzUJcjEBDpEV3xpuuuZ5y4",
  "key46": "66EnPJ2kgeP5cio2y8zEp4qFZJuGyMZMAwWeNMeNfa1dhKCLNQ5ADtZFTHthg6TDHzpy1H4dek9tmN4DAymAKoXC",
  "key47": "2Gwqq3xkteVZJRfJ2j4JQ2cTWq2RAPoNFBHucn6cHE39oPAafiBx22tjE62Y8SsVvxW9Ew3acrLHFUhw2EVyB6sV",
  "key48": "5uKCp7RovruEArK97aSJaoH3obH8wct1wPUEapehnQetpDXqCU24DGZEbBNkgjwZiMLuLRuB7Q41FFk3P6VguX94"
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
