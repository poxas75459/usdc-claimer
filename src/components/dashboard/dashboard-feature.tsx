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
    "4ofGRDu2xmkX2ndvUQF26X6oLCpyjvzdNJ9JL98zHRrm3si2rLevVNEk9D6MWeQjDtvzM6dMopjqrpNKvhMHhvhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218E9j6Aei3gVKbhcVgcNa5jVmEbm5GJFrTbPLXdipiyavdjWuYq6PR6qFgH4T42j9VKojBrafoiwksCr5XvPhGn",
  "key1": "4GDiN1nMjihwAnjkFTm8zjhdFn4oR5Y1Tss9EUKVa161yCpmdaAqd7meKo3Luw2Q39JQkKS5TCny9qwksh7G6ppL",
  "key2": "2x7Kz5FWdtQBjEgCG2cK3iGThj5Krv1DZpmN2o9x5474ufAHrafeBUvCDo4G7R9RLSkKEyoJCjwXqvQkzv77JWm5",
  "key3": "2X79eJLn6ywTbhoVBmbca9UGUyijCepRps87AnGkPDV5rX4C9wN3ZyZBVRyZVso9eL62g3MkeDNT3ux2f386SECP",
  "key4": "B29MBub4Cjy5JShzmWWhWeT65TXmdDEtyQp5YLaSzBVcEfhBbftqgN5mLzRpfyjVbwanvRvZ7PFhkxAxrGPq3sq",
  "key5": "67nui4T58TkoH4GemybifsPNT5aFhxBBsdPBJw5m9EgPQXEdp5e1PhdCeoqDCp96cVn4C8y5x55iFZVU2V31h8vr",
  "key6": "TJ8FWipBhzRaqcRfx4zoxAc3PraT9DpMsmGGbFXuRAfTdh9hs6BvFJHDupq2ZGjBNcaFwq3qd2fDycjQ95uJCo7",
  "key7": "3FQVVqK1JPCzwT4SyxFin5D9smgH3sYcXGpimXHYzDu9PhvAk26yph11555aRrnBU6iSnAxBVmKCfEo8prFnU3rM",
  "key8": "chrzQEDpxU9XvsC4hsrJVqtAXAD42ZpUjRW5BTHL4dc9WDrqSnmwko9YuBvtYqGumY5FtDs3ZuUPDa3EzGwuwWh",
  "key9": "2zEV7NDA1znDC6kjqQeZpRT8FVXjyPCh98QLXkp6PiWvkuGXdXKGDUXr1WZvVDJjb9nmEuE5r8vT691UuxUeFNtg",
  "key10": "53np1mQMkNhi2BRXSB8yXfQXNEHXdfe96i2xGq18jNWoNeiCTNQxuQBWBx7No8upCPeBQ5QeCZJCd22GeiQDHmXL",
  "key11": "4CLkXTP9Lm8XdXeKUhdfdDhuBF6xJhvy55NBHT89p3kPG6poc9zN83Z43PXW5mctnhAkHQekduUDcD4eSzpa4UFg",
  "key12": "3hKDbKi3iMjJTrxqGXyUUZstyq9b1j6JFtAgRzt6x2Y7bqMKfkpPy7x5o9svNjorkKGVk4zohjUEKZroub9fUv2X",
  "key13": "5zDB31smxJeQBy1oYMAoNTYGan7PLviJX27iu3orMPfQbGaWGnzo9iP19nRGZe7TcUcUrv2atZsqArBfpHj8CrYk",
  "key14": "2cDMbMwsgCPfpEGq5c6f2NArLfh4nEXTsAshFz2KzNaxFPcVexyRub4N9umjL5SfwJMGQbFAveGB7tULywHbfyA9",
  "key15": "4z4PNsX3cWbw9dhs9NHtgy8ww1R6SFh6tqa9DEXVkV9DsfvUr4m2D2BnVvCnJCfhpTaSsVDMXrQkewfhRkie73kM",
  "key16": "26sptaEmDS8NT59DU7KuKEzf3xocZ8YFyna8N6mVT5ahuaNZovEwF4n2GWAuGVR4TRrfAEQjztjkWw1v5EC5mkf3",
  "key17": "4Q1hB9xD9kwWz2J7xr7SCTAPdA5MqPwoa6EdpxoQQavFK1d1LHupiQibsdjszgDvVpkq1umtH2vmod3PmQMmAzha",
  "key18": "QrtcHDe6C1eiGVv5J5XgXutyNLek64iZkNssi4iNpJdaatsh36JV9jnEMfKWifVXgTkTTYNChnVZPVmhQLtCSCk",
  "key19": "ja9nqYfFGQfUzVX17nQHgx59qnxtdFucBmE7L4yxDMSJ1TVZsT93zkh3W8Zc1LVa7Dr32yHCiswqkqEqwX2WZDc",
  "key20": "5f7sPGWBmZaU3w27KQUfQNUvFhXLjs6LQ7cTZXH9drDddsVR9VUp3S1QGttzdrK2wEcwYPGQNKoeMTQReacLFSwJ",
  "key21": "2zvA7Nzjmfij2NXUvZtX9krM7qJVYbcs29TqCuEUhA9ESXjGy9QxyfSwFWySiELar5QTYyw1HVRa5eDkgz3mD9XQ",
  "key22": "4CHD86cD72ULmTKtLC4U19h6crhaFfDPLeNaFqK61XyPmuPuFFR3Ka21Db4cxXLC6bZaDX3tjH6hH9HqHgpGkdr",
  "key23": "JyyuMsBbXE9NxRsU7iLnQueD4yDVaJNod7gF1JwNm9hUyrGAetY12rdHhmeiXdu3J2ij5Zfhqcc3PTEtVnzsMQz",
  "key24": "57dhwoMX9tphuZjK3bqPbwktsS6Az8PctCt9LUXunGUdwGUpEKRa793TWE67jXsVzdvCwDE87xdP11mXv2GSoaiU",
  "key25": "2XaMT9p1BuJKNKjaQEk1qcQ7c8gC3xbVs84Gr1TqpCdPKec6hgJfZxWbrcyZFeFGLSoisJcZW4rkkfpDucou4m88",
  "key26": "648x7W4zqFP7jbEJyz9zSNoYYVqyFYLDM8SRxGLmLC9bhxcpvjYmkwituYm9epyxHafPpmPmFrRjDqR2V8rHB831",
  "key27": "4RXzs7hyBDRr5PbP86JegPtQZJ6utwAuCcUKaA7SXLhaCKaBfgZRwHTE9sPmphA8bx8wonYZEimKEKuc1onEW87x",
  "key28": "33evS3HyFqcALDBLD2MFA7jyKAszH9bHUZ2JWpPefmSBjA9JCA1FkpvpF3BRNWcFJm7t9BFXtcwXyG4T8nSQ9zqU",
  "key29": "4djE4XhYp1HXYjZfphHFxYF3SZZMn68aNTJUow9BCYoGQaSERyWnaALPhiFwWkEVERwaxdqSq5poRSbURTfte91s",
  "key30": "5YwDLqK4v1vMGY8fCgbk7yaeaVAuo1QxVwaUBXqLsTYWfjAfXgNoJhYFfd6XNmDf1TN596yr3gZEqRGU9NWUjzhw",
  "key31": "2nkWomyCJLNMKpSXSC4wR68BbhXugGggYd1UpFDdtSnDuy7oPUwtEAYcbrd9XUQHxSmZebivEREDZpnzNxX67fSr",
  "key32": "KAJFFr3rx4hDuzAAjrTZ8GDL8a2ccuCAnoWHAhsmYpsprycsAhejSr7B2mTZ9fFaYMTfHmbvY31jMGg6X5AYYuU",
  "key33": "5rkr2Ch83meVrEhbksTgkt6LbbtDB9N48GNznkbpBXji56f3tqDoSvcD7HcmtVXfb3KsEJ9bne7dBoazHNYdwvNb",
  "key34": "2jaGYZuKoKCEsMVAxApGbr6XLDRA3wPgqshUj4cFRxUpX4HiPpPFrvdkUiQJNnRFMA1TKmht6BVvunVZGGsgRqtp"
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
