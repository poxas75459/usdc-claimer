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
    "6rFVpJ4LxvhPxBQvtGBaatxyizqqFzJJ1yKDtWDnS2DjSvF9WUi9e21W2eieggmvGTx5mhqsnLAAKk96yTLTNm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WfCcr4KJGoWnZC2W4Zs4TFjvHfHPfGZaDQ3srrjMhdgHxoF9pZKKM34ckFaiLwSeSS5Bo5ZGN3RFfLKqtgtnbLT",
  "key1": "5sZHTSojfCABsmeesVYfKHLkXi9etEabGTsVqigWjxE2FvMzAqLPPSAt2R8zJvZFAmuBPzfbvoKadAjBiT6wUxwj",
  "key2": "ExWFDc9yEcKaLES624qWJDj8FknoFNzAU9bFjFNTLVPPjuSMcbhPKUCyyVLvVze58Bn1smmCCx8bJmYmsqneaS2",
  "key3": "3ojHa6RTQXH6yr8SZ1ZuG1YwrJ82VyMyrhepxLA8pfErrhBqK2HDoqGQDoY64y4fgs97WDeUKXV3qWCE7bzsDscK",
  "key4": "LRCRcmM4wrpFD5q5sJS9qSMpq9Qkmxwn4yKVSZMPEBSSZ9CvtA6Dht3sketxd4GjTHasPczXVFJLWjtWYSxBpck",
  "key5": "3tDEXDygz78wNu45Zk36kY9nJBPvzsAARTF4ihYC2BxxppbJHNrZMEuf9preuLex3fDLCjoJCKCBwRRMqtffZaMs",
  "key6": "aixwxZTznwVRALN2fCdBzQHzGohpTP1rV1bUf7Lmjm6XCwfvQSqR3MbHZwTSvGSJh1M2dP5JdbUHGG3DZwdJw3f",
  "key7": "2ug7E3xR8ZuhCf5w3eDgqPmfwegfmZdJgnhP6rtgcfUiKxWvf1BwULGj5CvNAEokMyHiCXYpvbkxBXyY6UcJ7oZu",
  "key8": "3KaUkvuB89bHChyfDVopeqvMwp32RS1E18tftmMAFZtnH8bkjSGjaLbqTq7qUDBxJTPDznWQGtC2Pj8AjNCqxoSb",
  "key9": "4ATRFzxuYfB1334X2fAY1oQcDbJrwbjuzbgiCbEodWG9685FWWo6bFK8h9EsSvraTcWJ3N6G92oGcdpHXzcdappi",
  "key10": "2Q9H9xGmPxb9icLJyjUk2nsyGFy4KWrR9YYe5nKciKMcZtpEen2pH4Ft4KL1GjRKDeu3DZFLz9U3ncdtqPwAHrx5",
  "key11": "vqyk34xSja9RmcYMXw6a7bKkYFK43xAD3qeegAsgWGvN4VG9vaH8yjRH3WKvSXVUANwTuSqRqz8m5AxVEzdZZ5v",
  "key12": "2HrUHXVh7CzWffFrowBEnEe412CJVgKP1drR6ngxvReKf1RfZfoqY6WpYZ33wgxmPmzomVCppFgjgsPLfJf3hXF9",
  "key13": "672UG1BP8UFmGJZ6KS37znENMK4fGi4q6wkuPwgyyWRXpgWEeWPGFL1wACktyUXrKAgyLJ7AcY4L5JDDnYV2MhFR",
  "key14": "2cRZqXejD1ikrGUWgL1BMcckaEW4F3y27BopAuG3NRHDdGtkDX8gftWHKg3QwxhnuwyiSAUXHtLyUw2Qn9j9Aevg",
  "key15": "4KMgsXbct4nUcQbkx9zha8tSnLUyGp7YerKKEJNb9VtuAySSQkesXoyLhHRUkqwVVqzojs2vouZ5S6ppU1BiNFTn",
  "key16": "5DeXMK52gWnZj5ARCt8EdR65DTTHmuPmtz1vcmoWhVeQAyyduu7dnE82QNaqKXhQKCRzJUSV8xLtHfsCMuGoaRUg",
  "key17": "4iUUnmxwtVwwe3hMCExEaeDSTPyZH9A7qVdPx4nfNEsQNMPzBFqXmkBqosqg4y8bQHFvdpRt6wBF9xt2dUGkkVH5",
  "key18": "5pFdt8tHW8RTkwYvycMtx2ie75g9d7ZtQfizGFsUu9xwAWeYeNZjE7p4qQ98W7sNh1asZAia9Sod2H7SdQF7h8aq",
  "key19": "5UdsnvgQgRx9T8VQRPyJbaiMe4TyrmGsDv6x9DZyZTXJUKNWBWttx9Zy8Qc292fs9bTfTFbnxq9E6Fk36LXLDSPs",
  "key20": "4svRXxoQuPNQNLrbtXcjqZKiP3MT28b52NHaa6CXWi6BaBJQyhqtpJBuaW251ZkNMk8V4SVUwJFhs5fKH43Vn9N6",
  "key21": "3bXwAkzG9w7f1wjjyPjjnBtAfvaGUw4zZz2CP74d8VB88ePW3zyvTigtDLGo34xEaABigMC6nxow3vaHrSiKZHdm",
  "key22": "3pGeEPBxiMpGDFULf5yotKiSueDfhwKRaoyo1uTqSrRZeZ8PHnSiDvvgPoJHaisXozNe1e7b28i5NQcQSbyceJvm",
  "key23": "4PB69Ba7QyNRt7moR5d98FVdfKatjeEatw7PJkd4Zuj1miQEiDNA7ftaUi2KjPuJ98t56Es338T5wv8wJYPzeAtn",
  "key24": "4afXVGHXHekj8D9aXdchK8eQJKzjXHfiTHzomFUpoy41vPQXqq848vbdh8a3w9vnZKXttyFYn9PFTxSuwFaVQfvv",
  "key25": "4MNgG5gtnZPAkX5yPwghFMSebCEgYUfS36p8f65AMyhwKgB84VbCBpcG3GDiZyMfvE49JG5AeeqsBGpKXMRKKNSU",
  "key26": "4RprWXU4JKJenGsKGVkerZwMmSwozWmc9wECvVx2tYhW1kFRBWMWiqytBf6Su58t3mVXU3WNGNuSde2UAscvow3p",
  "key27": "28fUqJY7kPZf8ia99hybsXVgN9kV3ooMVbzf8yNVuRJF278oX6YiARp1jjtgqSyv8sQBXUsyvyaM3WHPoBkrt39u",
  "key28": "36KHaYid9BnSBCLeAb8W2jwGA4MqBhg5LLoUoKnsWM59VLN9s2wFD3vZckAW5g6dEP8tbuk3CHhqRHjMQm52hK3Y",
  "key29": "4taJ53LCEFsCHvM5fBvvU3H1wR1M566cBRvRBncc6zeAm2w87mDLhn4yaHYXp8trq9t6hQwxknwhY1kF9UzH2xDP",
  "key30": "3r2M6RjdwVK7gQ3LWYg7WpEmoRz6VuXotn1dUbsCjY7NPrb4yuUjTt1Us3wQNMKd6pGE6LU13L2SR6eZcmMiLUYb"
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
