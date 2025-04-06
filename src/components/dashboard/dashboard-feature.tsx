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
    "3YDPqGtasXFyWnjrk74tzJDp3dP6xkqYbbxjTKTtMk8F75hLC6Uh8GeAUWapZyTpaviPMqpP3z5ByZNYgwC4yPoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UQQeJ76CPv7VBs2ix7kdiGqhrbyTkRmzEMZSYGdgqdwAPZWXzMCtdiXtkzDAUCbU8NoFxeASwCnqbqGM72naNGr",
  "key1": "66tL3JGHYAqax6uj6cFNbHdCEFRk6UpnAQPJmjTWEydBPS65xVWL3qc6PWoHnxjBBYmFzE6jDqKbUvviRmWZuaUU",
  "key2": "2UUe912mK1eGx7aLqUUup6S62PAYfiqnnNQdQE8AGT6n9ioggUREJQw3FHE1ECRSVtb7QEeESTCb3ds9DPisUHeV",
  "key3": "4CP7T9pjmSdZ7QkqYHvt22XBHirT1mfK1Tq9PA6wt24mccEX7PEdKufMmQgZqLpCAbSTrBxw8xTx8z2jFiYTzbmr",
  "key4": "4nPCdUFkTwahuVVUkBkkboafHPFzLqEiyoCoEGdKa3RkcccRDtnYCWLPq9oZskDSf4rw6q8Ba1NaLgDozcjbJ88u",
  "key5": "51PSaYbjJJy5h5KxYTj5xsB7wxShB2cUpFLUiGM6rfm3K1DBUGh5yBVDCDsGbbs3neeKUCvU2bDsESmuAyALeSrF",
  "key6": "561uQaLmngXRK373mUKcKwkWm1sNGMxroaAFaGNX1BLJkC4xahAnXzkdpMUoFApvSWDFban4bPptY7aNfSEytTqp",
  "key7": "5WXUH1wm6QjyiSVBZS6thdcxbrSK5idcPNFAhBSYASxjcuFCEaqQYvQq1v3BdR7fVKn1qbsigC3yq7g5ww2rZAqx",
  "key8": "2T6TD5WpuAzTxfJtn6gxXRSD3nMWE5vR1WkPnpgKW3FQaF6gsnddd5fvF3JorgUCBddpz98byxm7XjdX24n9TeFf",
  "key9": "39Fsgy2mXhHh6p9jPhDQi8gpP6LPbdJZWW57nk9HsTMmccq83GWbdu6toBhRXTK8LVxzgjfssntpptGfyxhxEWGM",
  "key10": "566Uh2kaBSpSPBHy2nqvoYo1xZK7XHueapgHmMfnTrymvgkf3pwAnqSbH4cz9XqDWTNYpnkQJ7ETmqphh4vsgp3Z",
  "key11": "5KToP4mgVptCzhA2QFjT5scscu2u67YwRcDcdfgBk58cLqCz2ZgtZDcbxcYkaHk6nG43X8cvRhLdexwtt8jpL7jP",
  "key12": "3oAzHUdYC4cpHYLhzEGnRhLFKLg2td7Xu6oH1F3VW5upimeSCJTr4vNsQ2nfLSFmCy394bRdBJRNUJqN5vYdTESZ",
  "key13": "2eixEjHKwuFsWPR4rYSeSoFkusvZeHtbNnfUPisdy7XZBh6swi5252sqfv8hqZS4Xz53FpVd6UaWkbqCou8vddML",
  "key14": "4D7Xv1NN5PkRUiagbckDf1LBHRSNfNdD9oD9DsBgVhvumL75iTuAVDcZ86BikvTVd4XGaTHYjzCs8TkBsBjejNKj",
  "key15": "2eJKG2UeneConc5S9XUaFFW3BpZaTgPF3iLEiCtb6eYB8uzXC6NiGuwhwZn4QRX71TdFkuF9BzRMqGfXBvcxRFr5",
  "key16": "4abdnUGnyHcgch571qrXCVWGbznf19TW7YprYQ8BPrXreQ5YTU5U3XD2rJYFquKvNHKvYjQuxsR2eTy5M2hCTwfL",
  "key17": "xW6bDhCKgyosfvjZFxoxd7vB2EvWPvqStboJ5QVNp9P1ZV9cHHhp3wrgfLiD6AzZMF6toGsh6qWEqi8PJe3L4aw",
  "key18": "2UMmfHqG83kfrhHRiK2zfTfQKCditRz7f5o64aMkz3AXQE8uWAYfXJ3ppRUcNRyXUaAUtJxH842Fh3pykFmBXcBo",
  "key19": "5L5WbmJe4HUQSVY5rEetdeiwLMvfFYQ7eirxxSQnMPprxzRTqr7N9qULBfPecg1GWAMZDuWcSEfFSYMhm5wHXxe",
  "key20": "4rszUXzdL7J9kQKJ4Q7rDQom9xfdiVvuZ2jsGgGfxGqS6HntGP7HYTCmCaMUuSTexNNNrfniCoTWxBDrWGCz4aW3",
  "key21": "3XWSK4uLqZjnycyMxprHiKTJe2LoWNpkPsCSLTam8AfzvjX5eFa1Asm5SEvpGURBuMz9qZiV8AeYLfMyrmZBanmd",
  "key22": "3WevCt98GWiQY3dkzRCtgrC5j4QQAjLkuqbGofEN6gJp8AginewZ4hv7hViTAoREC4mWEa1Yk7tMVfQB3kry6gaP",
  "key23": "R5JMF5Q6ros35U8cUHoXU3v2ppB6vJkFuCsoJYAY5CwRGoVPMpt5678Vz7uCJnxRv1GN2XumEBKHFpQPLXrdNzT",
  "key24": "51yUrs86MVFCSPrS4DmGhp88BkMhqdj1QawLVFvzrY9qZzfszGEQ2L2sZuhthv4ZDYemeSmRZERUPiL1tHmwBTmZ",
  "key25": "2RsskJn7o2g66graMfSVDEaj1Vu42LBwQumMfFBd6XJLnBcLX8mwnQpBS3RPhGiRr3qCoWLYBwqyqAFXmko5f8Ko",
  "key26": "32BzodWkFhfmWEonE8wr4Nh6KhSXveSjb7MtaR4oU5RX2StkxWT35eZ1eQNrFEu2uoq6D4o7QfoSYM7tuSxqqV5H",
  "key27": "BQcNMrm5dvTDGNwjTfhhYkhQZwtiWyXQv81iV9saLUgzDjHXvVCCLPvqM8moUPNWGoESK4AmMyVgLAULcXYhcBJ",
  "key28": "2YB8wXxVToYXnQMsqY9Yo2FhSsBAyrtDSrzjV3WoXDThboycdJNYcWP78ZsRW4tmXHp4d2HL7GDw4oFeGPWjGGqH",
  "key29": "3sSknqofryr7fLgtnGq1a6rLUJJKT5f6HdzMFDaRYi14gm7EWu3fRUNN5hCEUDjmkRWbsN7kYATA1ToC2Dw892d",
  "key30": "MFq7PukRnPFrwcovfsVQHgc4r14KLwMAghAoYYqh1yaBXguqmygsecbHkbN2SNMrBeSMgFZUGZGEV6HE1e5pDjz",
  "key31": "5A7UDAQTW254cUu5QEF1FwK41Gca5kvtb6bsxbMabbzX3xmzHGdDsYAXAdUpHismFeMR7rFHnzxWGHe8DcPemvey"
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
