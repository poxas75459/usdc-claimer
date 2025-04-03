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
    "66yTrNw6y2f9x8vxkLfgGfSRWTqWszE69keXBHUqRczYKm4Pds45AUArpfUSJPvRvz2BRk9pdzQXDuff15ZrJziT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXbdr7r5Shq5u6yTwbcfZH9hzCNcxUNdXJLgwXBwM3rUwmkB6aS6MVuuAJYSgjzpqo6AKxZjvqr9fEQirwF6NnX",
  "key1": "5PRrfqC4hVBCRUD9ykf4ZARAzjjWxahVs6bnWwHnC2Cc9aHodnCoeXb1p9HKbkmzr6VGQ7bfEW6MLUhFj5HnGUgZ",
  "key2": "4BChsGh8DrFGxxYgzwhNiZYvbTa6o5oNbuc6L3LcWn9tCH3ad4WiTVCdvCHu8bfnBVaDzR5yJSW2G8gWWLSS56AS",
  "key3": "4LUj1UpntCvc4UatdvijTbvTjUoapbXtuJjskZ7BxDFsd7MkEgpYJNqA2AiCnTWUpnmAJKko4EprpW47ax3NSV7J",
  "key4": "5UsNStaXS5Jjm73Qarkgxv7qz2F47JR3tSfWES4usG5iAHywpE4Nu4u5ZYgA8MjiJb6fqxCsAEp1ExrgEWxvAeo4",
  "key5": "36CNg5PApaGWFE8VRNpgSxRnGWfwrPxdhBeTaW8xpp9umW4Kg8Add8RBc32rwoENjgRMp1DytAYaFfcx4npk3z2h",
  "key6": "5mYoeWKiBtEfSH9LSdPgn6Q3nXh8qTJY1uqezFvBAWytSTZKZd4o4Ub4J9biaTRKBAHor4766DJnkii3ynWNuvi6",
  "key7": "4Gm2v9VoK6RzwtyEGRdj28PVdnAM1PUcy39cbePCjNBjKjPQ3nXpx64HED7u72WMA5k7DVaS36QA269R8o22GBgc",
  "key8": "5LFH4rKjpzFTVf7R9oaXHEF2AzjuqZNixirGMzzXD2MDn2GeFcTMLq1qKzT5DdWiGCKMWsbgRb4zwptpcvwP49AB",
  "key9": "MBzBCjKFsLV2Wzy1EA5ghpVzv7YNPLfhTPGwoDmbdf9fgiNwwvVt2Dtx89BeBEek1c5EUL2papYV5jspZyxzmYc",
  "key10": "ixpjzNXZrDxbUgtGeg47kSyBxWbwjGFG7vMLVbo4h1yNc8kmDUmU89M7fzLCKASwyKBfXdxy6YyMrRSzFtmQiEq",
  "key11": "21GkN11uxikxbwjeLS9oo9knfjbi61WaTVG89FjNaY3oikBqKk9Sh7hvBRqzyuSGLh3ME3cec6q5wm1WwBfe3idF",
  "key12": "2dNtirFhKZinhkt6BtnMaKitQaQH32Yb2LR4wkxuS2tBRRXEg9uxYNn83X9TCU2W1aWVkDUXaX2Ln951m4Zqn2ww",
  "key13": "2uwmunkAk89Me6sKRE1gap9bqnqjV4dQUhCYo1PnuXZqUTVDFvfFsoCd7YoY5WGDZGBk2t3Y1BL8SZKJc47YmF16",
  "key14": "3UVW5z1ftZvJVLRcjB3ziovw11782YAEHqvLPSMZjQFcTLjXGXvMhVeWS3BW8Bq7WkoRgNoWf1oGjK3oaHnKzJeG",
  "key15": "5uJt3SYLZJ3SfBK4AY7QpE8y7ZjupMX8bmS2eHAmU1uCtSMUP97KrE8gswxbyYH45hUFLGoJtVm6yGmNygnu5RnM",
  "key16": "4C2UvAnQzdPDfFvEJqqA2nenU1vaYWNrKjuRteWYdLb5DuGixPs5gM9LW1apapcoCSsXeyZnHh7yVmZmgNapofxc",
  "key17": "vPAJ9xUhjNJEmECVk5svECJcJSNnSGhhCwviR1UHFXsWW3u6MGTdh2FvVPgKe3Zx6GR7yCLPW13U8JJzvbp4hdk",
  "key18": "5TxM1bp4Ff1Q5QiTbdo1shoAHyhXD1VV7NaV2PZUUFdZJ1EtPEg49aX2m58eEgjzqPzPcqgbL1PLWbXSwVtAXegd",
  "key19": "34JLQ4sN2vSd4nMwqWCU7yqWFjHCMJvvZfCs7JubofhYKdgDP2iz4ZNvYLuFDTAmEKnA84NvCv2A3DvJrh6iYGnz",
  "key20": "57AayNm6Pn4ja4zMw1gnNRCimitFB8drsVqQauvaEGVsEiTEBUkyKJ5eEpFNqEc7xLkX5e7nhjjHxk5oNxWrYYq4",
  "key21": "RvW39PbdbtN4gswTGr9c9mFgthHhMP1TREa1r82ynJ6G5pwDnmFsSPkzrKiEJMpbrJFaqESkx585Z1Jnxb2B1rJ",
  "key22": "3Va5o7GCECx7WxCQAGaVJ2TR2oL5TSYtCP9TqbFEogyutwF9hNaqDPo5hp2Sgp4WHDD2ozDYEbnc3rXLd6B3nckL",
  "key23": "4kuCsbkuoxQXynMZu6BGzWGGRzf27pdCT2vxsQwx6wsXadLZUXyE3MgLyb3bZEwTZ1Khf8bdQ7y7ot14ZKcYtpSy",
  "key24": "4tUQ9nNubW7mE2VfPDnWJs42TyYYrzCCGNr63CqPFGifgsSULhehnNCmHBiLFJ4NcE8qaBShiFbVr82uhHxyEiyZ",
  "key25": "2Ccr4JE7ZMu1VXqo3zjzoCqKtJp2J5dP3Bo7YhJHRFCuMKo2tE9yCNGxAUwTynyp1AjCyrqibdXFoBXoEF8JavyG",
  "key26": "5Knmsvg6pe7BWfYy7srdWwFNbb87VkcsfsYrt1cKrNFoo5qpcmZbjDo7qvPG9CnFyygjY4FG1ggNME11qVrb7Wbi",
  "key27": "5qsGdwNbhxWZgh4qWDQ9P7VvHSM4dmzGC862KdoYQC7nuc6RnHyurTRTj3CP7WAVPBEACo4Cb6xWbWJBbxNdpKdf",
  "key28": "23bwYeQGExKVMc5KtjdueSBX1GGi5QZM6ncXmvo9CTsKM1BhqoxMiCU2EMHcHfzCEJzV1TFWcWufG939vwB2N2zi",
  "key29": "fjW2353HxF2meFqePRcYCss2jmiWne9PCVC6pzjSbg7ozWHVKvWHtHhQbVDzFh2z5nZbQp5w8JdFaAzG44DGN6N",
  "key30": "64U1HyjTMsm9QqZ9e7hJAm8QMQDQXgUsx1U62r2JyQLxj6Nq6RTZddo7QiUDDMzwoGzCVBSsG1Yq6Guwwwid7DvW",
  "key31": "2dXxfLkdCnTV19HdcxbWS6GJsze7cGqwTAa9Mr1EZ5HauK3FfUu3C9Rdkr9kdN33CcFpBJkuaCAiAVdPbydygPgM",
  "key32": "2Ji1H5fbGwuskGx6FvTNxVQNWsRqwRfScp6wfY5R982dXS5foiKD9uRawBxKf4MQ81kp6MP2RiHE84cZ4pb4ypMY",
  "key33": "L1H8gsG2LBeHchJ1vqXiegy9w2MzjrUQpAMW6b7hfshBx9NwZ3TMe59SCZR28zpQ7QH3SqVXVu3SFRZE9ADbrEy",
  "key34": "3mXrAKR27T2kJm3RKYVfwzrwtKfoiUHD27t28DTFyEk4ksDuui6MKz1hfZPBqxjobmLei3Hz3bdC8xaaBjzTpBJQ",
  "key35": "54873UqLm2D7A4rp62cDeAxig4HeUyKUBMyXrvosf1kBTTgJgZmmCQMgKgUQyGkWsGhoeS1k7eHeDBY7cDPzZzYX",
  "key36": "5smLoQXTDmNdcZbiwo14pW312SGiSRnAQNBqxuPZRDiDKuJvHV2kJxFdbtY6YEmpLC2PsUxnv85iatJW4LScwHAm",
  "key37": "434hA5qqxjmTsKJktpH2uRUxKJJxwBuNkeegDDWarbBBnKNoBvuwPsqC1ZCfJVgCWM1ycHdmeogW9syiehFKYJ5e"
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
