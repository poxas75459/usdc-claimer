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
    "5aNVzKrc7J9mWFrwJwbfH7b6xMJ7eFj1YocvaqMxGAZfAF8gxDfGHPze3dF5Pqk15Rd8e3pZiwDkqrtTJPtLuJT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiAkuqF2WJWZQ7fEoAtAe5hmNux72KUpnG1VhA86sFz8Dp8EWqXajjKqqeYdrVxMfaWDsiq6r3YZvGZqkPiAspi",
  "key1": "5XAZz9iz9LYjWSQjeb1woMM4kPUYNnhWLRvyfcSztnTrm6DH1WGkAUhH2KcZcNMw8phDaJLrwXDxL7Jh7wwsynCw",
  "key2": "4CEnFmVcndBn1tFBSHm2KBWJZsfkhV5Z4QTeZqRo1F8tbAGkMpwTvQPprpP63gEqxfoMe286xPYCJz3xoVoSTLjJ",
  "key3": "2aW9JSJP8rpfTMR5BUtRvhnhPonnmgMG1f6EdsdCtJFJWqrTddCuPsbyM4dfr9LjPLMjNyzxAw6ysJEZ3g8BckSq",
  "key4": "5ZoCq8V4N9CCN5n6pmrxHkmpqCax4wQ9NgkzpbNVdbVtA5Qe6sd99Bp2992aKQsxExzAKF1t5Gb4vEHmRAJEr1BM",
  "key5": "5gHDuyjLUXa9Fkbvta36ihK2HorfruUiYm4BWsM7mxn14KH8tgsVTqtjAWbagkQm4treWK1R4exKcDz9oohdshA7",
  "key6": "3EzGegrdx7Nv5k2PJsBpFSjcSx7aGUn7PJbd2xEK6PsoxNNSwGPXrd6h62TVvy9FGZaUeajPVGYM1RRu7BHURowZ",
  "key7": "22mWqjgGEd2M9GxRyP9e4e9wmnccYD8jHdc87fNNspXiJGcWNDKEdWfHRcjFvLKvk7FnvWgYXkYd5KnwfuX6KMYh",
  "key8": "5XPAP6QUp586XcnCYG45DGy2v6EoFcR8hHwjo3uXjf8j1YLYMspTPoJMnnJE4J4yFMmK319GkBbh4XCoQYakj3T1",
  "key9": "2KWt8SvirjW6Ygp1oKmkaxXFyuCJk93pUweGpRE4TQo7BDU5EdY3ueN5tCwDof4R2H4RPtviRAqRkDFhLnYW8LQ5",
  "key10": "5NCX9fiAxzHjGNaYoZChXWJ7XN8X6ioK31SXAsH4GLyEmn5eNs3HwZeVaCmJD1mcZBFRNT7qMCNNxjHrj6kU5csd",
  "key11": "1v7qpGipPmUifwvAqpAVDWBgK7usJfLXEegZTp3Go7SYuMAdDf4ki5bjeubc6hdAwRzeyieScq7YbNLVrABwBB8",
  "key12": "3nwsbG5Urt5CRqHPxXvp74BKQsRzuN66aWpnRYPkPGbkRcrThDufFAKCt6PhHxW8rTSSMhb7E8VzAhn6LqzmhmE7",
  "key13": "35YvujxJcvYis1gfYergDvgpPTVEte3wzDFz5rb1fZkpqLnQTzX55naXXHB3YrgK3uZnepozELUNKyZG7zcGXixG",
  "key14": "5UXmsnJwWsLQhhWNgnchpFWc5K2owS4bGKG2mqr8NQ13pR3fLFcFriCpFhxFR9D77gn9vBGJdUPPWUaBih38zvJz",
  "key15": "4H7piahD9rjk84e6hS7FWdUbaTFXrnhXJg8T2zygEJfzSSwZQLs3wvAY3ueJkJFLJifDFAXnNV5hoqUGc61dGWLV",
  "key16": "38hjmHirexaPNq3PRjjRdzjQJfkEs5p1QJoHScHRa7tZM9R7is98yAW75F8ffQpH1pLCNAjVFPvGWJ4MfcEwG5cy",
  "key17": "2wRp5Nf5JVvFbjU93A2HH232sSmCuQGYwU8qJfSCvgwhAFtJK4rzXuWRttcjKmseiyLbxieSDRSuXAbDoge9Nzuy",
  "key18": "kLsbHjMdZiNMY3zd5g6JKNgsp3QhnAzqG2HVjGPBPmK4H2uFeBFGEGzn1vNnJsjBeiWnZGhSb3TwGkgA2Vnr8gV",
  "key19": "3duF49jge1ZWMEzQ9UPVwj3FcSXbKYg3EvQTyiWUV473UfxFZrxQyTK2psV1B3osorR6faZVh72GAM72T4kDGnr1",
  "key20": "2VPjsN7wN4ommwLbefS3LyLgDKxv2XTgLkzd4q3GtEVDwTG49ZT39NgpE87bZsdD22yDPaCYj6Tq7K1UWrXVcCv6",
  "key21": "2rdc9vw2CZ3Ct9FKRADgVHL7qmUtKanmXrm5uV471xx5NtUHLscnwWNyURKRBwNQBTyLGtC5rEuRb1sqLYaiFmZS",
  "key22": "3kFKMkfpAm2ifSiVbJ6vFaivXTkKoY7uV61F4nb2oJ1BiXTxRzoZyRGi2aNELnaQbtwzP7w74mPoamnLQFN8Qjad",
  "key23": "56YShASHJAzoBvcKHcYKPRsnL2BsGGjTmbXadSm9CV1sZFkcq847seJQqysDcqgRGtT1MiR4DUoEZPJM6RzkVCFX",
  "key24": "3X8sLyQPCVGFaUas4ETqhpzkaJvUSXDsTXUn7vqvvwJ62RFXEvGLrxHupXJGxue5utXWBSdA255TcFNzyRcu1P9m",
  "key25": "4dzjP4qufn63YXqeYhNJfbcP3kCpyJCh96Qap9SM8q8XtmaR5efxeFraDLLA1b4wXDqQyVC6h9FWVGeM3LMzRvM7",
  "key26": "239qegmFLo2R3Qz4UiS386SyusHaC9sTWLaNcc1aysypwYd2KksasKvNhCooq4BnkPfew5ErXcLuiT4q94pEaw7m",
  "key27": "3v1fK5xq9fA1ZhqZfMd8BthKkMNbdGx32HbuNTbtA4rjuvMHyWaf43m1L7XBJBmB3CiTQ7g4A8UJXirUY3mNgzTW",
  "key28": "41dhLDF4zJHu7oNyaq4sYoHRPzpdR6di5aH7VmnZSi2GmoYxfsTmDs8xffUfqyjYcXH4MrsU7rZrG5vSq4BHm7tC",
  "key29": "p5hAXMyVvNy2XndxXEcH4xsuTaNxAdrNNZN7U7vbhkfYckMZ33b3WnXy8AVYPwro8tRz65u7pbq97sGFkwdxzZi",
  "key30": "4j2UsiwtmaeuwC6uuaAQyU2nPjRb15aFAF5DU7DYrEu8q8oybRsUNGcecKJbe7WNZmiUbdMXHik9dvsVcEbTw7gZ",
  "key31": "6zjekP7349R4SDKVSffVR7y6q9WFMSw9K1tQcQygafktH7Xz4kUjKPx4RGnRKHQwTUw9NLS2ZtCvML4UnmAw629",
  "key32": "2ENBQEGdHnAmb42d8vFB5wHRaVm93f4ATHmqgLBjNS6KXSb9WYXHAQMtzuYudZwvpgNDcfvPvHX5WdEc5Rg3wBsn",
  "key33": "3N2ZwMnCsrNci38hgPJBffqPBYoPes6eyoyPT7pkaKdBJ1rUCUyaZW5koprYn5xapdCw7uyPU4KvHhKc88EdG2pk",
  "key34": "4AvRqk285dKFJeoDNNftwJUefnWMTy6P17TYaBxQpeptWPa1kYL1GwcbNLs9rS47qvwy52MguUiNRXBsVAqdnBtg",
  "key35": "2SfJi8DX3UJiKD1fFc2uK9XVVyPJ3iQ9awzhNGGdq1maXY8im4aJ2GJRztBZaRceYkGcGwbNgdZx6hNHvHdxqpRw",
  "key36": "434QCdjh8fBhtpkjU4Qar7Y8txPJBNMxbPM3qbCHdHUbWp9JbXRVKKdi6ofbrm81SQrRixFjFaB8M8nLPteAGyw5",
  "key37": "5C7Z6ino1S3xAbU9HS7L3rUkvNevvnV4UCpsbdHUjtR6Yz3BPwoWKUJWxLWkufJxcYNoroHoWrbNLPjryDtcqrHZ",
  "key38": "2kmCCuvBSMxCyGAcfurK6acnz9unmwDqsZEAn5967c2FXmEiRENtyJDiHEbxoc5C7TTFagdR2a3ybipSsDBF51yC",
  "key39": "5rD5chViYdixGDSvB4rLtC7APCCn2XbTtfjrZVxgG9DDb5KqDHoCGFqYptciveRt14JwKrKzhCAXLPzNJFzUSWoQ",
  "key40": "21DUuKXEv2t5rWwDydGRvNJN5jCLSkfRer2kk7xuXjoZXQvCXkAwMnQpAZrkZbpKwEpmN4eDsZHeehqqYuibKAzy",
  "key41": "5vMhMiXBTf2GYhznigKmSdUeVCfdxZe99mvYesQfwduaecuYtkTx5KG1vdf8CHJfZSSnQ9pjJZsCRA35gL5LvUuy",
  "key42": "5qPskaEG2jaoqPieB4spY3gao3Z7ZipdrEDcW4ksJBsRrkvvfNoBRoUqiKRmSMFzxvCeDBgwgrhYjRFeJHB7sbtw",
  "key43": "2zX94EEG2a8rXaTQmiHaDfttu1XLa4HMvckaJfkYhsyrhSb5M8TMjSBpPbRh7UFsdoAThPq4bcU9xsNiVLjNrHae",
  "key44": "5U9QQUXvJGscgrrGF7SFypkNqN7z7o8uVFSr29t9xF9gtxSThwD2FcwxN8tCVhfEbFNtmQgjzpkFxVGL8dvRS6dD",
  "key45": "3yz3VP1mKZrrqBNZ2iHCErzSBvVMqG1kKU1eF6yxiRGfHwYtSQoYfPzZqKc14NYWvThVhTdtjX6PydX51xVL6888",
  "key46": "51rRxdicHk2tG2F9LDwFhRwtA57bLLDydqG2rpLxMYPLt7AUcs49i7qM5im5ChQ4d65fZ92Q98kuS5iN2YNwopU3",
  "key47": "4SaEsu3MPW8d9SAutpe8KRZkLfpJ2xx27zdgTtyCR8X4PpTGabfHwCPSGQYL3EiM1pmmkr4wt8uJ41H3xiwy3YhU",
  "key48": "5CtJhi4Er1bncghcUsxcVuVMe2qEctZrqbLyyca6zhmHArJmsaa8on9YrcQ1adTwuVunqKvdH2XdHcVvAZze2xfu",
  "key49": "nGjTzUbxJTmdUy7cFLTKtXPiSjvFiAAArHZPdgNr1PGwhGPRfsVxNKqK8m9eATYaSKFCMB26d1bFgceGoJrpZi2"
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
