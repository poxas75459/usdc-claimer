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
    "62QexEnuhekVpvJ4nXVhg86yaWY5fGw6RwtxBPaVJwFqkwZgRFMUiUaq7UV63ZT9kBHMH8bRMiz5MeRxR6L1hQSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEHe9qfxKkBNPcT6K8ic8owv2TokE8kMnwpjCGsCMNPYBikzfkvAAbBcAsV6ykHJkqtLtmmZ5ZoikToBCAu1Kt3",
  "key1": "4hfyTcRicDVJfqA5RmFZ5FedPwvNV1XUQ7aJDGexWKvedHASZ6LbzAu4QJVVi2yFbDHZvCN18mGBaCUzX9RQ6PYh",
  "key2": "5qVuYUCcMn6n6t8exCDvjU4PwLM2pFySow5epdAVcL4zH88aeo3zW7GzpCYHjT1MrJUHmJLuyRuMeAHWrChFUSRp",
  "key3": "2oaLxnuwPUEu35DE3idKGbVdGJkXUigTtK6muZZRhnMgz61piYg3dGTD5NCQjQyN9R7QvqExRjjH46gCAnbGBKeN",
  "key4": "49hqr2TKhsfn1Tsv29NvpiraZZVdakjNBaDWjo7qMWesY7QfV4DoSqwyjzSjnvKdLDbj6xSyBzuyGGP3VmLteeUu",
  "key5": "4BMwRzMYVvGGcUHMshWetQ5MPdgHbEYCNAryw94Qpj3ftkQq9v3DaV3vXbfSWYdwmfH8RgjCppXFDp9qj8uek7FU",
  "key6": "ytAJqNhi8Lcm5VQLX9jyzEr7JBBTu1Cdy1zKNSCsW6Qbn5o6Nr15vqBFGuxG7n917zvYGUBqh5HxcK4auTYojyr",
  "key7": "4G2vPtdkdLz8bdBH1nQZns2KEhz6sfFfLKx4SnQvgDKPwMXQZG3GgHSfXV7F6SMtroZPNqiF9h3tQbAGyGEVBmtE",
  "key8": "28qmyK3byim7cdnxg2qhETfUExf3x44iHFaxYVyEnttBbHk8esrk1oBZ9pSR4H9aAuB1ENNjTfVcNJ7BTt4kZgJw",
  "key9": "3uX2wJLaKRYkcoNwNcjN1k7Gs3mogg8xwzAv2JwwzVQUwdyY9wsXn4ev4LHWgo7uPWzdp2Hgyx3EuoLyc16CCWcq",
  "key10": "42uzhiLir4TvtktqJFKPVrrp8o9CTvrWy5P1UJ8buZfZtEuBJpM2vhmmJ54h43XYRCqzLxMunVmAfZsEEaWvtHqB",
  "key11": "cA4zYDmWEasQix1Svn7Wyxq753seACYrvjX3ktDuLvAVqoWzhyh1a9iPd6BaY1Z6DJ5eCBdeYAF387geWFPPBfD",
  "key12": "5mAWeyEmBM4cFnbNP55TpvydgRRhxodzBXjx6hxhJ67fWmu4RZjDTk3F4o1Ubopoxk4oft7MzwGasS1GAh3Rfeay",
  "key13": "2qkbxGFaEBqe2qps4xrr5RRmkNJicCZdtGv592UKR9vTsdAJ6rLAJMU1ZcshVwW4dUG3pJLhQB9a4QwHCzNJaiZe",
  "key14": "4KXXdLpRSTPLHjMTXRnRs4s4E283hvzd3fUdqJaQ4xAnw2dEo6EWpDafNjPvUengfDkko5SupcWFoWqe9qUeM7CA",
  "key15": "3JGpW7BiQXtJAbYMXSDhr9Kb4QjoQiWWKfK43jPQa4uDdjk6193rPDPbsYeg6jh4J64aQywKuDgdW97vWLkDDLM8",
  "key16": "2UHhML2eKy6yqNM2dcMcrJBKxxxHf92QRAzQd38TshYWqoYQGNDrEySF594ipyc3KBJp2SvwLYZXE1sD4Dptn8tH",
  "key17": "4FPzFkxQwyjpfwnxuNQbMCBNktoK6XvRWKLu5aYtcH9jjBbXEsJy9udRiAoRGZttGmeg517VzTaLAXkZGBqp5DFW",
  "key18": "39R5YqPnLg6wJ2wWvCYBZ4Pa4QkFHUzHafHBYfipuDWp1V2GZyroiv2gcEZNxUoDcPV9XngwSNhvVJXhE9r7MWTo",
  "key19": "5zZnzcP5D74obCZTKs8rv2rcDJMr2XQjyKnPbvNVSesLWcUxpdsTAZYsMGmgwqofVc9xEFGknG2ZRr5QGZgrSaNb",
  "key20": "4Cmj7NeyBF6azXSdkVYUo48rgyB64EenqQKVJFtusfPnx54QZtT5TGFCWxLQsBhgW69pFCsUjewmK1AJ5c5pjn25",
  "key21": "29bnxEXnwYXaLB4po86LnefXRiQ9R9dgoiLn2MDbcC8SNNxw8cf7xhgDgQTVQni3AMXtcrWkfkDjB1RV6jHT4oMn",
  "key22": "2KLRV1g8AoBEtrqNohSSV3qAmGu6vSJm7sfHqyABm2PUfB1PF9XnSNC5FvRtpF6W5n6JJeKDmJjTFUfVX9jaYA7y",
  "key23": "33dhx1mhwg3oUuZcdHN7XhdutMq5VZdM8R3zaorm7ru5ZNu7KDHCTYNw77brUW8SmKb1E3nQEjJfAV1BQp1a4DEF",
  "key24": "5TatmwV1pX7kuKv3HM1eVhbPHk9QAJTvxDbMi8g2xstpmXD1QB3BPpyM8RD9FBJPxG3AnwWsmE4ttxjhSg6rQNYt",
  "key25": "43TKVCm7WTXMKLcQwgjoa8a8CJqrKGtW7bm8dMA6QkcUeVHVHyDFD8oEkN5W9rjxsRsaT3pmsrgSMfoy17HTFGut",
  "key26": "5mAqvosSaeegzs1Z99yumqJGSmMGvyFmgeURyiAq69NCrkU3KbbGj1hMv5vefKhKB6vJtLihtU3yi5Nknfj1rvB8",
  "key27": "4LjTZUW9dmSMFZvFZWYoDGnt3KVS4LjxUTdFm2YmyaZAmKq5pD2ejZU9Qtb1qVCjMMwZidDFe44CLpNRJXj51P5",
  "key28": "5PYoDsgm7wuwmwpiHDfqpCbL5FDLzWofwRES2JyLGkj9jMSmBEQyCP3GSbwQrecNk2NZkCkA3Gyqkv9QbN67RUAp",
  "key29": "4YiBSd7qS4HYtHDqBu6jCEFzjxLMPTAwxxXmEpBBMSGx2wKgZaFti1gir8wznmdZwGM5fnpgLt1sXGkUWQubpvi5"
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
