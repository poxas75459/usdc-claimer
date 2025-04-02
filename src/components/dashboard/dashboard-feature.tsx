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
    "4Q1amEh3qfonZ7tyzJWt5ttLegLgzxgJHxMqnhGFBGQyQSMVDesDS9v1dWEuHfrdyUUj46q8FTZxZFXoZkd18D29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9UY4BSMdqcjLStePpYvjSSh9qAFGNE6X11SdAeCuUFgaFrTcK6Z2UMeGL41WpkHVf9AgvEues2qRFBWMK5cMAK",
  "key1": "2SrtpgUbk6gVXsn4DwaYrx3oTMCmFaTLoJfdC48D8r47oCfX9kT2AjToM9b2tVewJviABN5u5FuaEZKNYaHMdwC9",
  "key2": "3iazfvATeN6aTjYMV6F29DD1bTFjYdqQE8krCbDfssxy9zHzMUgrvD7THX6kJBCDeGNFVM9cWf6ZsSFLqTSKsfqw",
  "key3": "4ra1qKnoqhxanvBELiYpm9P9V7LCA87H5Pfut4L4axN5DFKBQLxzmtRVffwrCp3tP5dDj1M7Dypn2LidvB6d2vCS",
  "key4": "4KGjz8vZhhkzTptweuWL4BZB1FULPi62ZWCWPwDTLmaDdRKWgy6uFzatAS8Knmh2yjc7pQovVdXxWVKJ1X63jaFR",
  "key5": "RB1reWVTSFEWWYoZPgxSKfhhh2ohycwunbaS4rWzuMCC8WekU9qrcgemtfc6qEAYkvxs2ioynAgDEUDmUGcPzkt",
  "key6": "5ou9cxqNjQ7yBuPWETLozT5TDBJW9DuXLhhTPPK8vP8woNxbgnZEsKDHskTYUh2tNvb6zNCXaWVyaBZN7TZb93Wc",
  "key7": "22niKTPWdpSoZ4DBX3M9V12C3hTeZdyeWszkyyitV5HCvk4VE7tT4EHjFW4n7xXUX6WXpQd8FyGbBfkDP83SVof4",
  "key8": "42gr1krG7yWFyeo7d7oWQBZykHvq3YBmLTcrc3kTMZHQVfruz3h8G8DPw5iSc3TwjrGSn1gTGbzKbdDaeAn5Boyf",
  "key9": "3w37fGSThFvdyqjYiwK3PrHty1X23T3x6A6tP4CzNZ5tCBtzVNhTn5MDwBwhrYjRBnsBZdYFQ5yYkjRTWajHQ8W5",
  "key10": "55grDzfiQGHobDBis7ZrRSmPn5rij8n5jVWwwFPa143n8eg4MfAnWsFP4ggDxbjeorYm9CGBryHV3hr3V29i54L2",
  "key11": "2nEM6iNELU1AkW8qTgMoLj1KszTvAieFbZ913Gd8Cae1pXE3N6FDomyUKqhKJV7efHFMcz7ja4ua6Kb5A2cAXZCN",
  "key12": "2sDoyQny31fDyapmTPJwh86wNs7euYKKPtiPbqCUP6ck9BCZXpn6xPrr9Bot3FYzJrkc3iz3RJTsFPkx5TbLmJiD",
  "key13": "3bB1VbkQdt8Kf9zBhTNsWfX7xLAK8jUsEc16XXowtoPCFjUtS9iHFCtwYHYwA7mrVPkVJgaotRS9T6vwPV99Ffcj",
  "key14": "GAfghU91iSu8NYMhjmHA4RYyQANrzUMQc1oKstHAxekhGjfeaKuVc2QMcLbvGR5CeR4G1ZVn92AKLZstNB31RZc",
  "key15": "3TtdwBFwdGYJQ2A99cy5s3zQPRW2neJUThRRVS6cDoHxnXNd5Qbg4C2K971CSwA1Sdk45drKJd2mPVoUHo9KC8wc",
  "key16": "Ktmf9LZTTFjM1E3Wq1NrKaW95sj863PcKKbeBbeH4djPsqxeNCNvYmH2KbX4HE1xt4DSM5URL9cEQMCivzU1Tz2",
  "key17": "8i5mAHJ6dmXEaNCRVbNv9xJ82yi1Z5pZWbHLDbTTECZcTvZYqSVnYyz8Fe4qhUjYXKeFgR2iutQXGpppU7ZBEtT",
  "key18": "4uRPB6kjwUiKXpDXD8aBCxnMawY5FhFXxgYraGPHexFfJ4WNquUFAez6ZDpxdgNX9x92rLvenPL8PSVNXtj8dLdw",
  "key19": "2JyFXpDbyUyLwKzpVjLp5hW5xkdfUJw37vFejujxQJXFYsWAoyZ6oJGRf8ukZyG4gXm9LvgJSWW2yokEFg3boMdk",
  "key20": "VmYnNz4SBMHwkvWV2qNLJyuszEnCPgSKfBP1PL4dDT6G7HwJ4aNkEGuHh8V13ZFNGHE3LGFg18GyTmKcZH9yAz5",
  "key21": "2A1bXAtZTzC74Dv93B1Kr1YXrC9SJcGvjnseuiMDqNZs2pZ33xDfYd7Poioj8j72ASSNZm9ndy352N3nfvKKC88B",
  "key22": "36mxfCQcYVRw6AMwNbif98hPqzEazfDfrzQx72cJeMJ3VQ1QMejnyBBXXruAYLpRBRJNoSkPqu9PopX4wMiCPs8H",
  "key23": "25SuAauVV6RDZZ4uHbqUeAmh2r6GD9mZd8MAARsugvmF3HyyxSMTEY6Y6emSq63vexs6yEiZBmf3u92E5L56HEW4",
  "key24": "2g4TbcDFb6jhc9PC7AYMjYeVb1VTmF2YXbnpXuH2zeJS4nnenU9ndeUuXQBn3w8udMuCqPPdekeCmEPB3PNAm7Nh",
  "key25": "5qege1kiDq8PbWS3eee1DTH2Z7Rtf4LcBPjESD1QzdE3MpQL7mJzqFJ5nKxdqm64BDNLwCFbKY2artyAgeAF9WRG",
  "key26": "2gmjD55RW24BoQygRzn8JmAhL4ySLMo7iom8ptgmsiErB59s4hXxv6B9GpzkeYDoHnXYgTwdkJEw6uT1sYR7Ftrr",
  "key27": "3Jn21R8hayqvvVUE4W2MZTP8JtAJds7QLxJjukdysbhBijB8QHvRBRZJeCiofA6YFEM6aapk6VUURwhsjdZqUeUE",
  "key28": "4SKeyrJ3orAUaWi9EwUusEzLahczApZyyXe6PL6m23vw7KUY3pyDGUjpGucHeEyUjZ2Xj73MouRGP2GG5ihpaP4y",
  "key29": "5n8eArhGKRrr5yUuiEwBEXaxNYhCokHV91u4Uxg5riD25bwu2A9ojq1xSuEH8vvNn5QeoaoDHxNk89vxQAZmHnZH",
  "key30": "26EQpQHLyj7QWHLts6rX64fHeMBeujaMKxsbtkyH7bNwb6TDHKpdUBB1uWNQCAKhJTboeNiSqbJxS4wq6WgXwDnj",
  "key31": "QXqhrL3iyiVctmfzUphhSKdd29BmSn8o5zrTKN8Vecmnp29qPa6Yu7d755XRJURVGwbCWXgofN4FnSPa6Dbvmk9",
  "key32": "5wjVDcmjjWwNBkdAeNmmR5VoNUVpBss8uAteS2GArCZnKe8Qr9NvXJH2NGB2nRXAhix9NVmAEViKzVcLjCtvhEgF",
  "key33": "2VtNf7YSgVN4nYP6rGr2JS7MdSinYuUwcJtnJL4FkkWsGy5YPzkNVxcA61G7A7UUVu7qPUNJtzUgLqjGWR9SQaYn",
  "key34": "DEyReNrWJN3ybmM1MQ5rUS6HtWbieS9r8VvG9PZjWxuW6bg2SKkwi35wDnALUALeAp1mCPp9L2cm5535H8ErAj8"
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
