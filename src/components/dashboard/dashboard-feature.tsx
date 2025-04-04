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
    "3sbrFbSjqaKDuXXZcoH9apC7S5r28QUxaPyvtRCDoPuy3HEtYaahf9BHAM2tYBJie59nCEpsXuMXzwWRak2Qx3Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rt4bjLBp3P8BxJGTWcqEyP2kWY5wRRQNivh7ngxXJudpaXm3j9hGaUYoENBkLMPohr5BSsDKvgYZa52LXcTtqM3",
  "key1": "NhERUDZ6VA4ZntoXU15ghM4guvxBFXkNfKiSLvzTMsTaaCQdEd8zPCGYikiwh8UayLpoEEVj2tipmah5CG6U6mf",
  "key2": "3UEBLBZPzTVv4NxaZ6dRjCJHfJWrVP1B2ncbFNp4tHqXaEyLeD5mh9SbKJA682t5FKofcqLfsytRvyiyuj6qQM7q",
  "key3": "5PMM8AEJ9FnffEYsB3e9DPQ3VBGWNcwmDe5fCJPN2EuDTqFbjjvh4e5g2dpkTCcSMGCZBfSoFQ6XBCw8DNRtnFfZ",
  "key4": "3ZXhMLfkuWWqxqf5w69jjQDkvwTaPDx21MZqSC9EBUKF4PCfL2fEVjwYbipe9iU6AJSos1481TuSKBavSM38DyXt",
  "key5": "4fwzNzHKDANN4qrjBHiVZESK7Q6eRMY5BHJyCwWkAavujwcSB2j5S13Xxh3uRiDuCdRb6gpDdBAxZNtz4YC6jUrw",
  "key6": "5wLCRkZEvJrwm3EC13PpqoQg8pKYjfYoNg1KkoEd7Vgm42ZwJ9jYGzMguzsZJnKNfnkgARYd1zQXpVGJWbkqe1yJ",
  "key7": "5abwFfYvYrFHnV4N8DHL79C9fzniPQKN1Dkrrs81ZpQPnVNHeJjWiLUcKdyusoEqeFyefNVvu5JrKiCuQrKtCTyF",
  "key8": "4zGGqPZZ5Md8bdxaEJSDWGGvYUaoh5ybx149Jx2ZDsSLBTT9SgMWuTX4WMEYFQMwHGBjQ1GqWgGHdSVX1RUvUo9U",
  "key9": "2stP5axPGyDAmVeG7SbGmMft1AGGDizYAgyFwGMJfaeQzHV6Lk82q9Z7gUqehxhv7D5UHxBPx9hXXwuDDgvG7Bav",
  "key10": "5tA5pE8PUn3hEESLNNyg6mYo2Lz5YqLvgwF682pQqJPiqZpSrrKRc86NqdNF58H9kyT8UYUYWCtDUbvWaHeaRtY8",
  "key11": "1WDdsGCPffFXk6irL9VxvUFLsZRMszFcdykeK8edK52k2y4aRAfHYg4U7KFj5Uhe7n2j3FLztz6iSv5xgbj7HwE",
  "key12": "5pP1Gvvpi2qawJvJYcQuCDVvaccqNVjQMuhmSnevMLoqKnN2P73e2kX93T9cQGFmEgr1sAFvzSjfoNVfFeF8ugAK",
  "key13": "5EiY6fPMNTDCHnoS5chvRos9arrYgwuHgPhcGQhMLz3QaxCUMTNaoPMUkPbVv3vE4EbXV73XQWR8ZaHKk5vh4i8N",
  "key14": "SgEr6J5w9B1bz453hTxZEo8RTjHjXaenYXcEvy2nakuYiUkCyc3GRCPMNJ8M1PeGNAGYA7B88vKfDKabrryq2uV",
  "key15": "LbtgZaaWc1Z3ZtfdFNj5bJDZuY9rFgf7KmpCrPGmW6dgi7ya9s9NWkY6uda6DrWXQ6d46ZPsfS3vfbMZRdjHZop",
  "key16": "3tAzd4m2hibv4Qe3DHx5vQfvLaMsGAmfYeV7rDxstA9U7C1BNaGz4x8rw8HKEAwJxbf8bVoukUjfh5yQfQBP8psf",
  "key17": "4VgpJSyDsjbPKdy4mRoS2z62k6U2vhqc1JJqHiycgAHKJ3aoUGBJFSMjoscwpZHUVoQgVFYKVTbTupHLra2XViEk",
  "key18": "CzLExH83AnZCfrDNwVAyVKQVYdgyuJirsVKCEokpcwRMq8U6j8XtgTLJQGxeGBg8UmGnMVonQEZ8jP8qbyPoSdo",
  "key19": "2JR52uvACjHFS6ZYiUj6q1afvMo7wmsrfhHQKacfREh7DHfWaQZzKyztshXeVpyBfSiubEMDz826TizJWEv8w5v7",
  "key20": "5A3hLAbmwGFS8nUtWxVBjYrYTycVEQkNicJKb9mvqSadkmkP3HBuRNozpp3SYwR7rZ9AwCu1WvBB79eHgBoq7ABb",
  "key21": "33iCBdq5ZjrTeSbs2kLAczRB8kqr2x2p1Zw2pJQqAyqbUjXmKdH6nsFeRpedTg2N77PDdwxvxdfuySKWMGFbpsBp",
  "key22": "9MhQoLARk1bERQNLNtdfgfJgcw2y9KTHBSAcA4XQw9hozKUjARxBoAJF8dZN1indoSjPj3uzB9F6p1QvygLQhU7",
  "key23": "3SbzW6XFJyzWPwR2TzHrm7o8V4xDfKiyZS26C12fDMDMYbvXgtM2QT4phPmdVN74pp6E5o8aemu1G8VuTMknQTk7",
  "key24": "5pkLZp1iBgcyPUwNUTSWW5WXm1jBonY5E58GKtsSdn4wzfsQCQYo4sW4kQkqibS7h9PJbZ1hrZYzNX9XTZ2dpA6u",
  "key25": "5dD3spo4HYvgE8fsHMMKRuqFQniMHjCFL7zXfoUnzgkrdG7KieHcRmMRUrv31zD9ABaqkp2GWiWh5A5Ma6o2qD83",
  "key26": "4CtsgTeNo6nAsdcAQJ3WkTzxYSXkAzUvbUcwZyowNMH6Ubwy16vr5BS5qDevAXLGWdKKwuB2PzZ9ymbeyx8LETeM",
  "key27": "4AmqqjEQw2ycVYUefSdj2s6TQHRTANwtLdPCeDBrEDswr7TfdrBtPHzz8WPWkmeZbgvFk9YCSegWDQN9uYfy5n8S",
  "key28": "4pzMA4bhaARxZcfoMpMy3E1aLLce3wNzLn2q93S2UZZ61HRuE9ETsQCJ6MdmTQrQtZGxUmdBh9NFyk982HoTntcU",
  "key29": "ttsyxwSEE8AaUYCA2BeQKzYsZHSgA7bBL13zpXWV4fAnDpp9ivArCdjQ9xnDS3c5E8nNgvGSMuVarH8KJMVofyS",
  "key30": "2kFT7NFmzqM6H8teiJgDrp5tnxpxgLjAQRcFPZ4cku5zwuajzDviihkpvKydLf4JgYFAE6gD71WsGnvfpAj1c6Mm",
  "key31": "3mWywKyiKMZCBvHk2VrQjBtGc4Vsntoh7FeYrwb613oUipixyF8b4DJQvAwaZXQEPTTnnJyiAgi9GGjRTGYgvbRG",
  "key32": "2WZQECP97SuhW5upf6Enga86BwaLx1AqJpVDRrTXTbAQykTn5pbFa2yRhhhzAhzXiYaVAN2yukMDHEt3SQ1UzTS9",
  "key33": "4qw9xcefLpM5sLp3Qf8nihMLj4LPtv6MCDtuHjsTmXyNg6AdYVrJ5zBxhkUd3WHoBQogD7NPr4BN8xDGCGbcfcWv",
  "key34": "3WmQLjWqwogf34mQ5Znh6F8m3bqvf8eepebDPQ3qN6bF9wZt1wEGjvpf4MS4JzU2yeooSXmEAABcVf8YufjT4QdG",
  "key35": "8ukSaENo5SPTGVhgnBwTpTmNBg166hr2rQn4CrqkfN9QZgxA1tjGk99kzZAW6jJDKX6hwxoe153gMKYoqt4tRxP",
  "key36": "4gTJjGunkm68221B7UHoLChMzmzwU4EDXhfdu1pwXQ7K7n6pQ1K8XXfJcT9wzByW6puo9595nXZ3Y4n7K6m22KXE",
  "key37": "2RVS1nAz34y9vK8kSWAQRdDwo7BCvWrJSxafoyFgF8DUA6GPF5m2Um7ADo3ACpDM7dKLSVLpetNBdpsozS5wpPyP",
  "key38": "4qNpJwy52SkezZ796sYYyGHpHisUTbSiNjjEgmzX8dGJ4fpePZP6VyoSWBk9yZcNsfbT2tzrpP2BTCZBrhBqPRB6",
  "key39": "38NVqqiy2YQf78EKtMRTkbTjqceGuiJRnxCA6CpEWL3JW2BBE6hdZP3Q3hcEDV3BVr2PMMUxDXK9gDvHdaUCrXhC",
  "key40": "2C9dh5t7tf2ENDZCTSJFaEL6TAnmb5BvyyUqSzdmQyTSSTAHzKv3YSHiH7acT2tBDKBBaVZvKY2mbvsTuEqSczfR",
  "key41": "54kxfeC6RxWLi8Wjcmn9ZZj2Xc2ziUJCo7hyrxjkzP7HJqtcLnbzz7SNBea27FfKWs5zHELAjh13eRU6V7iAQCm5",
  "key42": "211LoidCSbyXxpkv5V1LCJTZnt57RMV6SzhZTFpEkQ9LnUB7ZUJ8pCQZkZAyVk5S4Q2cbEeJ3wxKxU7TuBe7sUPt",
  "key43": "5T6n9Hs5rKGG7HYxbsRgR27N2zxFyLTsQqkAgg7N51aUNgbpS42cxR89NhX5kmXry8zjZea8ytjHnkYgVTrhLEKA",
  "key44": "5NDRsF5sJ8D8eVgWtgh5Q7ALKu2DBfWPnAEm5MahJAudsPLmKudyGaT46Ly32dcpmYtNBLK2AV61KTfVamnddC9A"
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
