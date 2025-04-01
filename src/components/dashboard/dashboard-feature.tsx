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
    "5QDrLzuCK2zu5vstNL2eEG4CEzvqcCz97YB5PsCFzrZD2KZBwwbDDD4emQ5N9YJwrAF4oFN6Z7bFnEb8pxLpBRYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "429MkbtQM8cDnuEbxyxz4kz1RGQmJfeD5pq4yaXLUUniSzm4i22ZDZfc2U5sWSvc5FG3CG8JhZWtzDNDm4SLWVPA",
  "key1": "2wW3BK33odoLgvga6NNMFU9YchUoQV1zqfwdGQ9ytWnrQJQHYiUGdctJf5qTEA9V243y1dgsXujJAsUafWTjE1kd",
  "key2": "4bXqZUyBQcJNnTBL7mevAayckikZyDv9g7v6tsRHUP54J9TdsRvFSf8u89yYHfbEiW24FaY59tNCiWvrGbb2PMTk",
  "key3": "5Zyq1wvVdYXVFPXW8M7uKAWczMTBC3jJFKBNaACxB7AKqoH8kPNnQiZuePmyr5zgjJpjNCZhi9UV6bQP7nmnDUS6",
  "key4": "hDiLA6eTTcCisY3QL4rFnpEkpvK6X5LKFJyd49s9rikh5b2ahuXPbkZREGTcEmVM3aT48KtuenbLpVodwc1cLSu",
  "key5": "i5im8ACEgb6UmGdBeBk3m7Ktg66nGQuKqriXGCRSwN4GrKbpJupPdiFzGtPxHAJhxL3VqtRvSGW3a4WvK4f18RM",
  "key6": "2SnrtsgNB8VGp2A5AGzWz1XJdgHjpQEJs6CrY7Wg6zAG4QocQNrKxYjLhRdH6L89gnvGTKiWwnwGVjV89oMvjKxK",
  "key7": "49pD9dEDkg4kfUj7PhHppmqL9zMhMqVmpLxed4TfnZxJXNy67qkDG2mYfYqvK6SaQrJHcR6HUau9EBhFzf9kZNX1",
  "key8": "61PrUKLkUGupgXpRQnyNM6wxv6n1CSajNsdxSbp2N9jmE14qwDBBvtTKNBVSGH3Bfg5oF9SnnCdRkxFZJBYJqTXr",
  "key9": "3Mi7kkHeahRfziMLXL9QFFBFjvc2GoF4reMrdRCSDBhLKPC3z8WpkBgnQUNG1WQC3GNX3o5JgJg4YeFKzgfNmXvt",
  "key10": "Hw1dMkb3SjcGFke7bTVN8CXwHhgkVs95eETHswPppdZaPcer51uY1E6qqHWEaYrfSjZmqAZVPxfgGHJCorhXk4W",
  "key11": "4U4FU8YTJssNt1YjZaCrk1H93PyYpZSg2nqtQyoFpG1sy2dMxwGRSKz5Ccxo8iM5wxnU35fma4fnh3BThA2bFVpf",
  "key12": "3gVYhCwMxmLibhoV7akvFJ3HngzGJjdKeTKypqCgReYTcEmfzrs7XrdL4QrXfwckazXW1Akhcjkj5c4pmgssFL3f",
  "key13": "4BBQm5MMufUgAn1rXS1AWYB4cvc22ANYy8aBko2SHWFfGMZrtnRrLj5coyei3UYiW59k7EECRFm4sFzEBeby9TBh",
  "key14": "2zncc5o9S24nWMfCa2EJU7wkxEWqm1PnYPsvHy9GqJgqLZs5QT2dfdjiaNUEGs5Ede1TpukruYW9pCXbscsnm9xp",
  "key15": "ucywDJkFC61QKZmCjf99ioL4C7Eo9A449kyQ7f9uMCgrDym9u8ibmv53zMtZu4NTP32paYqMdtfY7Bw5ztDXLAC",
  "key16": "2ifPkRXTicoCS7PtmMqXjnZsdsVx6eunCSwVzytvZAszH3sUDRa2Q46bLAJXsgiagYyKFJ3tXpr6mahDsjvm7k6R",
  "key17": "5wki9QYFezgTgEi9Ceng2yrafSdYpDg6CT7PjxacxPMxnCVnAvvW3aoYysxo2onXsj578z4G2WDqdhEoCyyvTxHF",
  "key18": "3Yxo6X3x3YyZsdUogQuCu3CrLxYoFQzgdjp1i79aqW9sKb6G242pRbdHooismJ7W8YhBnc8xYiXFJV44pw1ZfZRj",
  "key19": "38vJCdGtoNePxsR6gRx15MzwysJn3gqRU5tHZ1cGTLtQsQ2j4q9tQmgbopVVRHmBv7YShdd6BXvik1fbFQi7Z5f8",
  "key20": "3ZwUiJ5eTGfcKBZvvvByweKHKjrfwuy7TZucksobnVwo2TQPewCpfJWDDQY4o87dc3VD3AgAxndXvhjnHMQUauyN",
  "key21": "4p4gqgfHczHUNTmz257tByZUqL6uTkMuhNKu9uhyxeK8PL8N4navFfCrg8GqSpmJDmDLTB7WvLFnC8Y9DFNw1fTd",
  "key22": "3VR5nNhzjYYEDC7LEpWvR2qHGd6ki1QajEEWHAzq5GQMNDNhSY7XcwFR6wyrHg56HX7vouTAebmupFeB3RDdU5tc",
  "key23": "5aX19NAi4WCpqufkaUgfRN58EMMhrdu1rr4z6Na5KuE9zdiEhUrvua7UvjsFPjtCdh9f63PcEBnA9i3XYyoSA6mY",
  "key24": "4ezNBjWBFHwDLT4qMyToaS42XULvKWRnRQ6uHrMTvjwEQfaa4979vKPfe6EgdLCxj18a6BZDXSMn2NzcyefNL1tg",
  "key25": "22TBcKgXF32FBHV1ogjFsgwMJS3yL2ngkecTkYHBVF9ukJbWV6bgxzaknazRtT85jcXM7FkGx6rUpjonEk96rKwk",
  "key26": "2DbUHdoZT41JW1JFFUBtr41hpR5gufcrGT5ALUPhs2Udx4Roj42JDiBvz8EAPmKZj6HfzwX4uJFY2rnNv1KygAJK",
  "key27": "4GPQgzCMSXXJCYxsr4nJJtQAzMrmPRNumREajp8V8GekXVPxNfbpMnL9azGKDg9nYTPJPikTNRestobFSxkwSNmu",
  "key28": "5DYCxPqMF3cueGQXFJ2oDkH3EskXtFucorxFABDhKJdtNp2iR6FcavEPhTmN3aLjEdVpEKPdeY2PaAyRToKDTABL",
  "key29": "K4i26XJRvUzfDbTMGKHj28yxRmZAam7rixmikjpvKALhPWCgnpBLcJUkNsULdogDesoPaSCqxoNBPp7RiH5ygfW",
  "key30": "2qq2moYsbcMNhyf9gWFyXMAmX1nTEid11rpXohXmvE3hAiuULPUD5L9KKPcdjnKhwXtZdCLgd59SURqT4S5aDbYA"
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
