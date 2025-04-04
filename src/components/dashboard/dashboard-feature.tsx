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
    "2Z5hWJnvLFcJKx2vHTHy2CZuKreXvcG2sFjxDMYPeEZXzVu1EkEW1K2WpSARGCC8jx2msUq6yR2ca7FaU9PYNGUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56K4z8ofw2H3P18qaMwNJAAergBTbvtL5WinK6Qbinr4QEyoJKppZqdqFNdNmrXGBkSqdE1WpjpzSjtvrxvZ6Q7F",
  "key1": "5TNWE3mHexGVubAwP1onjiqqk1dFEDe5U1eaBj1w37REzAvam9vK3JvZuyrvEfQKtiJFbFRjV7KeRZhWzSY2SHbD",
  "key2": "3jymJiAk6qkG3S35HgjsQ3zUxZ53qnLG9hCfZf1YDjvGtqf2DFyugJj4YVTUTEjCCoR65wEAH8kuYc1XtH77s4vW",
  "key3": "4VBTnx9cHGgZDsMcdt6vAUZno1FTYGaKj31fD1mTV9vdhDHGGoK8thGrCrNEt8G5AWPqrA1jWdJAub99zy6N8HK8",
  "key4": "2jHEvmRVkpSfqR9rcPHNpybvvc3jrDqrutWzmbVTg6XY1WGaqqNoEQxxYrQUmdSo3wZUrRtdrvK52WgKZNxzQ2C5",
  "key5": "3woWdp2xBtk2jxSBXwpG2hfWXsMeCKHqJuvpo2pNf1FRex98MwKsocvQ5TFFAumCDHzwaiwQs6n3zDyi9BQS88ye",
  "key6": "3r7W8YMZ4BsHjKaj1A7jEE4KturKqN6L2zzK4kGHygb5nmJZuTmk6tLYz8D2u3tXxafQXzG7tuoCSuToh1CkywF2",
  "key7": "44H2YWfFtW9bXjgJGe5vQgcttfcYtarK93ceBo7qqZ6W7KqY5FjN7Z3WhceSLccjREvjLrLaFPZEyTkhB9cdU6wC",
  "key8": "5oExEJQQn5B6zA82xHfopW2prSre7WYG3LX3gf6sAsU5YswM1urPZRm7rZJCtf7GMYgTxaKCB12ntGBBox8YqK1c",
  "key9": "3BYSCWjhQwupjhAf3aw4baNAq8Kco8HzzbZKbpx6xzJg5CW42agQn6RhBcLgMX46REMkWJ5boK77X4q2fMmnCyVe",
  "key10": "4HpqC2Gf8BU5WATuX1zNNaaKV2Nq1RUtUyVL91NNAcQuXmnJTBckFnDUSwLaxKGPzM3qTx2bxQDxBMkb1zwDNGo8",
  "key11": "7i6TgTYSWwTV77eJvLqBUZ6AvdFmFGTFLJXKiN62mzRpDkkq4nGs5aEwNBdZV2nXzy1nM8nXQFj1M279kxzyoVH",
  "key12": "325QCm6r2uvvySBbJLum2AUDEiT91xUeHEJXuBK3LYGK4X9rkB8eXCEoftXAgvjKaHSAZifhaQZWCLmUuj7DvMdV",
  "key13": "3eabZTfJeJqMt5kX8tsN99DGu9nmg6D5GuAz2NZMSnbvRRqy9inFD1b3Waro9ikRJiMAwuYEbo5Tu37szYndrv6W",
  "key14": "2TVWAo8vaxbMy8uEBHr6o8EZG9GaE79jQwHiuK1tnGnCMFaVek3MbddtE11u7ZWgGPgDmG7RhQDXMQWFN1fNTLcd",
  "key15": "2cgG1s9zv9pStDuybGNr4Z1Sh1pdRKtoTrFMiEaTkQio6rVk9ssyFsKFprheMFjtMfTQDTbaswVghwfiizUHHXUv",
  "key16": "5SvRg4Kg4YV3Ef2sSrARXB1KREk4LfqYQRrfk79MpQULfgVr1rU12Mv4a3RTzRmHAMhh8YSuzfXs6X5XPYyBSVFX",
  "key17": "3GXvNQGUUxDBEeFHAPs8sh2geNvveiE7r8E23J1cjpXbC3C1BWyiZ5j7aRdWdTqCU1PWz46k17GryiEfFYj4JHQY",
  "key18": "5fXYjcA8UAd3zsR6kru7G9aHdTtBtStrqhG7nW8ryEfzr2EouGb7oz7iJ1x8YXfpFbuQq9DeMyBVrYcTG39Kv91V",
  "key19": "28AEMqVQNx6i6rQrRUBY4c2sppz2jXx9LWEEEqhBC3hXdzcsozAvE61e3nCSP6F1P3ugX4bPe2x9aApQEebp8jtu",
  "key20": "5WvstoBFjk8C8po5MQAQ6eeBzVF9xnjXgW39SzHS26CdJajXWJg6vL6WmvpUCH681wcMLrXQEYKbMeHg21L4vFiw",
  "key21": "3UKFizraefyFcLtgakDf7V24EfoXFMwtv6nZCH36RaWgsphYYKjGgMy2wUt7u4ykEzJYRiprkf6wXzQuCyegbPTY",
  "key22": "5K1U2yLhiXCgY1F2XG87TvNskkDDf5zTytDYseR8PfDr2Te1NA4Grdw9iJYwS691J8Jw1wsm7LugjnknwCatpfFv",
  "key23": "5PnzciUGe4H5F7pRnPRySXTutpBUChp1bHK7JFhNSZDtmc3mbPpoHdWhE2C3RXLswsRtvbXwoUxk11fktj1sxVr6",
  "key24": "5kyMieg3J5rG7jNR9VfwdJCh2dT4tVXoFLxD6cKbQH9zHjXHQzfK3A2A4kezwTvgFkupzg68heMzSbf4jpFdHxpX",
  "key25": "2vMSWW7Rnrdne78ZxV4Wkji8omKpFeQk5ik3bsbn5t1NnZAVWuHZgqCTPsgJwbxVA4x7HUcu9r3PatZqPpEsVNQu",
  "key26": "2Aa493jbiypf8dCsaAyjkF4cwMS26rgZW8qwQnuprYq61M771x32W3cvwaveoH7125iZ6Yp4KFLRUNyswFwzMSB8",
  "key27": "5H9MncpbZrmgBaMMeaXxMYz7hNqtNJHPm3EuRi4YWMWBz4eqxbiXtCUGSW5wj7Nt2vDNPte4ZEh3ZgqP89xyJDiD",
  "key28": "L6oyj9YPvbm9MU4FsvThT1zVTQyvFbFfZRLxtfK1XigbnTGj4KZqbmPWRbyL9nFijeEjWeo87Fka9Mh8qMxmrzk",
  "key29": "47e5nmRbabT9gomkiAcPkyUYwgVphWwnVUPyBqwWijXEmGV9GhXZS2C38TyEo9LNngY4hvjXbQv5ibifwJ1RAoGu",
  "key30": "5ato7FcCNxMKrEFi8cQf7sLzwbt2ijMdyov98a46XJW7N4cifrDcY21TH3PGosGMi9k5tE1ZCPHAKZn7GrUdiLUg",
  "key31": "2mE5pGZ4NuK2jpDc954dZMqqg9K9NDnqimsodNAySS8gDjUf3fzUizEcSznoEsm1uChbqgRe7wLdsCmPC1nTatgJ",
  "key32": "3Ntu9ni6EjUHbRhHT1Q7ANaMdfnHah28As5us8XQPSs1iTLgHPTSrgvg6V3dgM1234AZHqwFeMZdehU6k7Dgyngz",
  "key33": "45USj7iL7jB8UeKq1Xq2fisSu3PtzkbfJq8gPtw9wo9tDYQCjMfKFx9GFYp8chqbpDdqi6AfSC2QrYg75ALtSFBy",
  "key34": "4Ndm9Ry44sGeDGA43et6YHUgmvf9E35iiPC5qh2vHv363GtZWeZfrx3UMrF2bAPEJAzsiSmWUfLxHzU5DmntPeDV",
  "key35": "FzuCYyjBjFAu9puXMr7qGcz9PmZ7Du4UuNcXmkVH6nKBJZDF8qXKyDZCp6Wg4dx9ktxM7e8hvvRqnDWLXkkCs1w",
  "key36": "5p5ZsoAtw7b9BTyw2rUYXYTv15qK8TRgFY1MtTpNQe9mja6Ances9QaSadCJGrdKR4v5tSEQTNvmZveFSUK7oNqQ",
  "key37": "5QfYorw7F6B49znQQt4a9RfydJVSyrhRwWXmE5tsLvcy9Hgknb7TFv8vR8PH3TriamQLmRnn9qFe888iCsBBCHkW",
  "key38": "3rzm6akR7iUeoVmRN6XfwcuwutFvCqDBBBVjiCK8ziNYYCUcz1zhHBaDN2sj6vS2BL8XLac7unB8z19fbt2wipmT",
  "key39": "4nuwUk5wvrByFnTJLpDBWyYFNpApJjKsiXBS4tDJ6ZC9QoEVWCC19u9ufVkSBxjiazgc4Z69ZG9yCaBTKW2dCTTp"
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
