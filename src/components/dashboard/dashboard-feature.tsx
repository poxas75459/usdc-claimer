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
    "54rfxvwWaomwVYuiMQRVjFtiT3sLF7eZvnYYUQhFvUhR5pmAp7CPohkQPMVz4iFKyKqjMLjhuqfuZcaMX9THMurg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eo2GBkNbdmij4hWgFxtyZb9CUkuFUT9T7EGNWfmybpF5Bmcz2NzRXcGkDo18q9aLrbMXuiYwiuBDrmp74DNYquT",
  "key1": "2oNtLYBcZABZfvhraBYZPWPXrBv2SvvM3bxmg9wSprZKiJgFxZPf77WjFBYwBEF3THndkgEsM4tukxpeTmNfGqQ6",
  "key2": "5VYpJNxKYjommtCcazLUX1tLn1azn6V9Pzqdd131ni5Hw6BtqHupEMtH1ZYkTG6eo1HbctjLDCbbghVJtqXQZMev",
  "key3": "m6QBrqN4NAxqTkWJ3zCUVrnb5RDynDVuYx2w69LVYGDsEV1noe5b386bxDU2cMUfApTuPp1XWLXi4FTQe4UhdfE",
  "key4": "5QSRyRKkWBh2s5kKwD1WrRzPwLhkBkLYuPPniXrQ4AMDFGFee1JjUQeq9kvieXF55ki1JhKPvJz9gWFqop39uZFP",
  "key5": "3uMSEoCrxSjUsL8CmCigMu1wYRoR81MY9idLojfiapC2Ko6UwBJ2GaMiBAicrS1cC2DypDoETEX2AJrf3dKeT5S7",
  "key6": "2trqD9Ju1Xd2JQ6tEKqtpkXuS4M5mTH5xT3V6j8ty6zw9KsrwafwjRBf3d3HZ29WYfhu4F7Ci8AsatnRpDrsXm4h",
  "key7": "tN3Dnp8ieokb7YTsMSgtu39NvvPp9F5FEudd5oa6XynisY8EosdmKJpb8wxHpbyceEqfc61jiPjSg7rAGMxWidK",
  "key8": "55uBUMYJPjTstaR5Dy4yJfFDu7AnqfRK3BgeYpjTcDDgANZ96QNRQZ7ks6MQoLGAVeeA9HVhwta7UudSpZvNPeAq",
  "key9": "3SWknhGsRY1MJnxoeKtnLEgGsHZp6RrS276QioE6zbqWKSY3M14ftCNYJF1BAXCFk62KydP8bBHWGBUv21jjqFAj",
  "key10": "2xftTUBge2WZ4uaGLefexZpAgpoGZNVYtsF4odogMQfzrEeMiSc5sBpedRvWtFf3n74TEmNi5MXCP1VRie1omzcZ",
  "key11": "5SvSxsS53VUjmaAcWrfEAU66G65dcKf7YuYYcBQvEfWZ4oJiHQnVvbnmgahLSTjCtLQsNSkMdExGi2qEvETXtF2w",
  "key12": "HgtqkTooatjR7oeMQuBJhieYsVHehHMsThDadwM7ZzjCWWPNaEoyWmQWWFB7g1fQG7Y3CvM7wBpHVMDimcXij5E",
  "key13": "5xfSXnsHBEgQdj8DTPkTENiRUk6RB5dmMMt2Cpcc7k7LW32bhaNpGHrAdiBYmqRjuCKdiCFHtJACQ34Y8Bpp7qt1",
  "key14": "4hZwqz6YcyxrAG492M6TBoXW7nreY2Nrdqz4LEMdNwQbohJ55UquS7WeUU7sYBxAc8bVh4eeQA6hF2cr859dKRJ4",
  "key15": "5zXiDvuKK9RMwNBZdbe5haoDf8wyR3s97UhzS42yr1rg3V5raypKmmsyvxDriqyb2ye9vXrmh3jCUG3U245kGyZs",
  "key16": "3QNwBJw2ZRgHWZY3vTXBVjks4hPdDG3B4vaFw8QqwtVQzCYLymsi6V59tL4ARzKnZAnP6UboHzSwbyPejB9ae47Z",
  "key17": "2srVHQijr3xAfvjG2Evw3f8rmryQAHXyhgpzqsnaVo1K16ECE1opAGVYkdPaZR5iXVC7WriEDpFkEphPc35AMisC",
  "key18": "56vkZPKqirCy6XWtshenYcw5PxSY3oN6iGaLYJv36EEX8WRqszGzKuU2fxgmXmV9RdPfAj1VaBCXVC9ZezWqN3Gs",
  "key19": "5hrSpYXUsGhtrLs8s9fAiqyxWrdsWuiTVKTG4DJ71YYk1pj2xdXrJXqWHkvjK3igVmzNQfrPJdpWypNH6TuDUT2Y",
  "key20": "4dhpHAypS6TgeQZAPYgsZN8vBfWooZNAKmR3xtAdD3SCJkfJsxYeBadVbn2AjV3vKdjGFTKU7fjwJgNTBsPjUdYn",
  "key21": "452tHQvc8t48QK1eEoqQ2FmHoiRJcpJzksaBj1gWSKE88y2ZMNatS3S7YLhox1j4YK7GbhXhQDEs3xLhQZK8qMnW",
  "key22": "2j7DQNommJz2HXCqW7W3GkfKbxQZxqEnZ9FZYCmJSurbiu2GW3p4uocWjse5x52ifTv8C7aZQZP93zJ7W2DAFpfw",
  "key23": "4xYqXVsTmkzTJvdMqxZFNr2DfasRdQRkqJnPUSckZKudaV1QTm8R4f3k4aEJ3U6YPjimSVG7tRqFStAFAhzoPMFq",
  "key24": "UpwZnEN9hwy6oBXcDNnZX9TryPShGFAteXDMtF9ixVnCVSY9gJJtvoPFJAKWHoWzfTzT7MTUX7YXniTZNEAUNYb",
  "key25": "3q3emgNyc1YaVXqWKUWtgLyZcUUCjr5M2gEuiL67JS1BU4kvL7GvH3DyGPSecGTcQJQG5B1dPx1LcmD7VFTDezqe",
  "key26": "4U9m85pFezmzLhiCSgDVt2MPCsj7JjpEGmzWZLMfa57M6EbHeQNBe5kZ6U1hhGYr2ybkwd99LbkzrHYKt76BCchk",
  "key27": "5pRukpm3jrHkHMLqGZSKnrNcefSKqGXhspzrJfKi9QdLdiEsRoU9uTU7QdChrN8hQ6jYcY4jvd5HWfGtaUfX4CNP",
  "key28": "4sCBP1XbUoVC6ZEqnHUaLpsmrTuTJxHrgpHQbnQGbfvtfgvTN9zgbmp2mmHykXF6QZyQ6TU8sK1XJPzyo2uwVpV6",
  "key29": "4mHUfSqQXBtPTRTZ4MfbpQgPMALm6PPxR3t8JqYwutR8rZ3NVUp3ts1AM1zgKC9n3Yy1oJ84eVgFxMv52D8Yb8r9",
  "key30": "tojPmHLwfMyuYptqSqLAYJ5CcPau1Gax4XSDtQNgnj47hUSKor98z321qTiipMBwR4iT1eQwhqSobqmwNnwKrQd",
  "key31": "3buRz9SWV3HyvfNJHxMeqfsvNsHaTz4Txyii1soat5cYjHaqhQXfih57Xhj61rZSyuCRhXrWu6qJNc7885W3VK8E",
  "key32": "5fXpYjHB5JJkUgUfWctwPbM8Mxrt8xypeNUJfcvwKYrFUvz8p7a6u19gj3KjmvAowiRaZsjPhiHKFKYPiiwy1HWH",
  "key33": "4qJrKs6VJ14SS3C4ZcuSxokw8VfjHW2EmuuTFMd5ZJeRvvRvuJ8AyBhTd16dHuSB4CtB99ssw6snnonj39GGFQLy",
  "key34": "55yBWVK9e35cPNn9oVMx83oGZa1zcp8Eue9KngDr37GViMT78rQjpBZuXGxWh1KMdDYWvgjbKZUR5WfDUc8XpJCb",
  "key35": "585XYo99ux558eK6Rr1iSL12VdKjEZccVXw6AULAHhtW5NiymBg74SA7uhRCzLrLWsqAfkpTZv1WRkcfzpE4YcVZ",
  "key36": "4bgFTKu2BX3xQKsvVrhJDnu4GrTuxeNVHjku4r45mZcawgqLW6KGoqbzdp59QkeTrW3YXYNFxckbiCTwgwbd2Pdq",
  "key37": "UTmAFHLj9y3YfgF6EEjCxa2MsNj6w3SSsaqypYxc4UMkbx1hJoJpPQegCrMgZzwkzcLJMATU7bz5Xga5eb4DMbs",
  "key38": "415UmLKfKW54JvTaAeJM3Jxw2cLuE6XmNUgFYg3rBUuu5n9Ck5EPwv458cYSarzf9AasJpVHhoFVVA6jFP9wjvGz",
  "key39": "voo45pHmcYZU5UaJ2737rqS8dCouBKRrDdxqtVEzSnRqerXNVNAjTqqKgjs8U2xqey9o6c3CTkJJ2t6NQysLLtj",
  "key40": "37g5gmoDwx4P47DCV5KdPPHhndEEMq5nGCbdy9wEAvVaickVamZrjkA8z2hG2wGN8KZ71ur29zbMDb3vvqckiMC5",
  "key41": "5v9wBLYw6EyejfvQh58yP2khfjnx6HC6EDDzsQNoaKuXWEZwwS862YzXHAweuK13X4rJtKzdAjEVsm4HGhWuBh87",
  "key42": "5dmKLKykBKUQ2SPAGSK8Eva3WPveTvd7ma588b4J9yhP3pAmiJRgNr5rpsTpPtquchQZV1tEm2J1boYaWw922qNN",
  "key43": "2XDAK624s5QrFQcTH4H5DAHMeT7kzU18ELxQk6YbTYt46Nn7Tbfnwe29qYX8hyecg9XWobKtiGgTVzKRdqGykv5P",
  "key44": "5DzQGW6dPgdKQFg3iZd4DRKm2Y5t9F5DHzTeGVTvfBg63zxzgPwpYhDefL2b2DgxWxuT3fh1byiciUtAZyUAV2x",
  "key45": "2BVA6aWBRZ8B9kT1eXi4iEsjuxTqxeWaSJag32GBGf6Nc3YSVhvcUH7EV6438WMiMYZR77VH3EyKp7icM3ycWgXM",
  "key46": "2HGWaYwQ7Wk8RmE3zmD5usTvjg56eEovkSTT8zWnsGLNGVYXxZFRX2yJePLb6Hhz1DgK9rgFwFfLopWEQkU56mLf",
  "key47": "eJaD92H8Lur7LQyKS24T8hkoYFmJRHeNqFG2GoqiefzjtGMGLYjC7LDy8UFkoQH944ya4co5izb2LjFfRCwUrhQ",
  "key48": "2KE4sWcDcqdZnah4Vv7sTJ9TofKaHn1u1XZbDVHyvMqPpewCQd9sKeFWg5yTXsBgfecyjYv9sn3VzGaVD6QVrkqt"
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
