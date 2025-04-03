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
    "23dnfQGQC9f8khG26Y4VJfWhJpayW1uriLUsUZ4UW3RbMhJWFF5tPCKezw5v4Dedgr4m1iVjUwzvqbzT6wfWNsc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4m7Z4nGMiLDWjm5FPrkdL7BSFzhz1DzGcqiS1RfW6MFWu6fv9YSXDS83b4sDcwfJ4T8ygjzpu2hqSGrUXJFPnE",
  "key1": "4XXpBayvvXBCw7pxtFaKtV2Dn3JMUTYp3AzKypnNj6kmgyV2ypckD5wAMb4RW1XSG59VMHmTfs6FwiwcWfr7Ut9a",
  "key2": "3C3VXXBwQXzwPsGdihtQLijg3rxRXDSdKq4dyCpcRrkSo3e8253tQAvpdst72FqhnmMBZACkscxsJwwMmxKE9tsJ",
  "key3": "5W3VwuaAHz5sJ3gcvPfZvP7FsusG2hV9Pxy9R7A5uYEDyaqR3FDR28ti7RzZ5zkMZs3H6utaV2R6fkMpDVvg65zK",
  "key4": "21XcryfEdbFULSHUYSDW1ixfLhzoA7kFiD2EMktEg7iEHe5KoaJVezMF6q5PAX19woqFfQ8ggt7UuZcsFJwercaC",
  "key5": "3zcwTMbs1JB72StBpm5CjXsPErt5fGuW5uom7D4m85ryKSvLB2eYCYd7XgVr36j7Ekz1YCCeuiDviG2Kbs8Cd4tu",
  "key6": "4ktbiwHscX4a4xBscSzt91x1hjHdt2nbfsBTFMnQAm7DekMu33CnqfwiQFXhK7eJftgGbjC6GsKcf5Pj1J4NL5QB",
  "key7": "wXp4hN55oQ2AuhGYvyGYs3wet7WgmSaNFmymVNv4eS31nbpRSYAsnVEFnR77dU7XpDabujZEZ2Zxt5AqN9qvwCD",
  "key8": "4Ztj9MJXcbqrJ42tg9bWp4nrL2ihc1fYdXqbLjzBqDmCohDqABTdt9k1ebMwUdVAnb1MjED1vszqPV2dd6r2KWn1",
  "key9": "62UoTtKJWCdh9oXKxQrAcVMtLJVtsjeCbxe9fSW5EaQ726ryHvo54Ds2v5kSXSDkUDWT1w79hiXww4oJpyn88pWc",
  "key10": "3CAmgXgrjcG77YkjnQbb6MXC4RBNL4iiVmsZiSeu4PtuirtjLyu9xQe9NUL2b3cHoEZVyXPZY2gENbDS8hdK8NG6",
  "key11": "3g51YhsyQEujsF3xSYFBUxQaxFpg4RmEXWqwa3NMjeAv1PGbgQ9NrARULC2LNizqwG61foo935BwKaYn5Vir8F4y",
  "key12": "3gxYQKyhCakEYx8o1qqWWrrywDEwe4DHWh69aQA6x4ecuumY1SSKuNLE1SVPJqngxF1td1PsVgEgQJ4tYG5VqvLb",
  "key13": "4pe1q9eMqavC9qkGjD3j4Ui2S48TvheKQ2cswVdtp7S4rCQ6sb6eZp5Mcaa3ez9tm4EhqQUXrtCVQShitXwuwyx9",
  "key14": "5i7DK4DHfA9KBtyxEzLiWn2eSJP1immV9XSmdRKRoGPn4zWEUhh5BzsZfyzWqEhBe4ztwAzXmdtWTUNCSezxuGtH",
  "key15": "3XvXynteY7mG5DerkJfxpj7EuJvgHWq2tKsT4tNiBsHFZQ87dw14L1Pcc7Ha5Y2hU55fsWLDnTv8jg6JQw3BPvyV",
  "key16": "5DMfu7aZjGuAgSFfXZzfmtP9TJY2p11LjU9JLDS9bbkjLGoD2GWmQNzgh7jauqXdQuxrWtSV8pBCV92p7gvbTuiQ",
  "key17": "5tbz3sG9Rszz3ZwbfYr91C8Y4nKEcPvHFZ6twLCSZQbV86RTjZPfGFAfie2nevdoXk15ebSHeb2bBHRnYqFNzZMu",
  "key18": "4U6knazo3kh4M3sULXqh1jAx9K1UigqbfMbfbq1yWwtmtDnJdR6EGqDYJHT5Tgv6G2pWTRYXQ66TPLnf2LwWvtZV",
  "key19": "ikoJLaBJQsY12hitQuw3BYxY8DvNkEX6AQADybSgT1uaH22XsFbakQKC1M1fnCNPfqYaPuXgWiGYhDjg9BpVVZ2",
  "key20": "3gMEmc2dBs3cZWyPwJo8D3yH6gYmwZwv9etE398FHqiyuBMHZCivH6Cnw7jwjNVxRYaRcEhWpMZoGUzsESXc6ycj",
  "key21": "TPB5znBJvN6NmCqUUummeE1R8qR4wBXrQ6u7s3ZznvnbC8zP3aWTYFKfYWYpzAAcZtp9tfsJgugH7MziojQQHaT",
  "key22": "2VFcWyzjBdV8swQn7KSfVNbq1wcUMAjuv7HQ5jGGknBkLMR6TgkpJLAXVDfGLtyg1kA7sGVkGJF6PABiEUx7o1G7",
  "key23": "5cfrm53KxZFvFgtuaxo34FX9osWbn4VS5NjRxbPpk34ryfWFfFqKg4oHTQjEesRo4hXpZmQdKNj9UMsQBYwWHkL6",
  "key24": "4RvxP78sbbqp6zPFkMJCrDZMLVq7ayErFAiX9wLfwmaiVsxaVBWyt5b3esqLXT4uGfU2DjZR5byy7gPB7fRH9L5C",
  "key25": "3yR4rJ1WjqyYYKkZSZ5BWehfoWeEDfnZqqmMBQLUrSwvCYJkZXEQmyqrndkhDmgpbHgC9ZYSC6BqqbWSkwEqAyaR",
  "key26": "2nQXs1yovKChTGs2mZQ9SVeZEZ5iCYLURGoAhoN7n62xVFu5bFwSohqoAicBNTwEPqLZAZvYHhmDzUUjeFgYEguf",
  "key27": "63nN9RUnZbEW2b5jgbsBBH7WKmRpth1FNMRqDvhQQcec1JhPeoja25RqxWHBNXTX2TJ8sZVjLtwh5pkmuAYVp7Nf",
  "key28": "JEYzvbQuJnrG1CztnwoXLcH8LkPcfpHG2FnMV9p3efkvfDMrvYfHLYMaiyURRfgpbDFy2qLFQkumhafMPdCQFYy",
  "key29": "46ErphSk7DLYfTXAa2AcC93bq4ewtyQCuKQjPEdjDpUvm5ek1dpvXBHNygdCBdRhPsHatTJUWbGf8XBenyKQngVK",
  "key30": "2Tm6JRhiiCLMWcbUvMeCkkv293AjQDuj9fiPdjQfcDapoK9NGGt6tpoXh71G9hdHq4pdyXFmMe7tjbLzgfA39K7c",
  "key31": "4eUmHi4qjZmRfmqACHA6SNrFvkoh6ppxw3QxXJ8SpdHbmfAFXp8N7LbS8G89WzxMAn2HUHo3EDiNmeE43zpdEcMa",
  "key32": "2kxBTfkHTvLzS8RWqXfRCnHmgvSeBo3sNaW14c8jtYvkF4WjQVsJ9eHLNSjbZ57qoCSzUaStYwNEBBYzQMTgtoiT",
  "key33": "3ckd9sZ4ZRy6sxgzLyqgjandiN5EUfUDkavTSybx6e2c8R2i5vLWVzv5Hxa1uzTWw7dBotpyFQbmpbRhGvrPdTLn",
  "key34": "329Xhe9u1mnbhfXfn1fD4wkMUEyMPGitP3tBJMgsUifwbW5GHXwWBW9mYHcHQFpM93vfLhMmnzoGcmvNyn9EeDWg",
  "key35": "2zTt23s3mkFBY9ifQFQ9sbZr5hEVcF1VHoyzbXkdYNDowZ2GDQkdHqmUZSctkWyuFuJmoiZAFTKkvnWC3PeLBq6V",
  "key36": "5knmHsswY1P5LwEkwWhq3PU1ZNbweRzeQzRrmK2VQBXVK4agb1BNrUZPWgDqRcMYoCDuysF3E5PoXHzNM3tCdrDT",
  "key37": "48kBTFHhd27QXu3fgM4J6W2XXbUDWsfyupWgyVEMJF3kHjWp74PXr7afdJHUCLUiChnNEF1iWwb6e9zhWkpbH6DA",
  "key38": "2SgcCR7iF2XgteoiDYNx2w8PXEwVuAfBpkCCZMvKQitzLPvp78qcPXFyFxzBNEeTuUrids1z7V2sxH1c5jSrtnQd"
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
