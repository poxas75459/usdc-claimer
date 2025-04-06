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
    "ckoMM5yEtZqVjK9NGDni1FaXxpGChBHoWmGyxK5FiCVwmA5YLXVqnYM9yADJ57beAUdNySJprhyW96Sna22SsVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zExqu5AYrvVJhHXpAxgkKpQhrtV9zd6P8WZXVJt5ACGYTk8n8cUCKY5Lnvu9sGPq1Auv4WyzFJaFuSg9Enivgqn",
  "key1": "4V8KdEULqC1FJtduxq32Fcovf2mqh8XiWLwJNdsNfLknpfkcxXTEx6YqURzJ4LqHMiUhj6CHyxVQuytKekDP68rr",
  "key2": "4sLrMinQyAmnNs4XjhuDpEAQ5vprL7t2rfpuTyKsRu9ZfKn71X1hMvZKkNE2yNXjEuvfGx1AX7RGKfuWtLNaNxBZ",
  "key3": "2NzThLHPVt9FMvZXcT3v9WAV4x4dCwrgLFJFpmN1CdbAvfqCXQ3xF1Sum9Q6HDZGgEXsC7o2HDzmBAvqbAMYXfwN",
  "key4": "31GyaEBDgxBg9BAFkTsyiCPn1Pj4b1UJzXEmua8abhSmvDFEP3Yr9TLKVrxheodhd6WrLncxhixGHhcSCS9EUj64",
  "key5": "tCEp2dmbsLcgxt5HAcSY2HxEVQbrdtfAknxw1A5CEHZi9Fcy2vx1vRP2NJPmSs4sswbWGMvgHNPo3yHqH28xr6p",
  "key6": "5HiCuJHqmfsqJVR1JfvgCXGEnFRKaUBsS5hxTKafT2Ryp5RCTAmJweDeUpmUtmixXnAfrSr6SpGqcHFY24uiuFnU",
  "key7": "38QyMVBdhB7FBhznT7qh1XKr7wTHeaxXCRPXUah4rM8FmBieyiVV1d7xy9vmtj3DmaFfEGtCvG6QZZbDCV9WZANw",
  "key8": "5XYgts4LFQEM3B9wT18zPaxbh9vwZQ33HpWSNzbF4czBcF2oCZN3ny6bgPMxUXHD16BLPaurvFwCmsj9Y2yy4j86",
  "key9": "2K6wmXM3naXmEq66jnoMCKp6mMnrVxojeRtfznFGurGEPWh7dbhjFwHw9sDmQdjfe3bWoxbKTmA7hiWkyz6Fpx93",
  "key10": "Zy5qhse23N7nA1sneSQ4p6PrFivBV6ZxvznymVcjkALwQczR2T5mB51mSY6tMjW3YeZMzsGzjQ26qJsiDiQV7W4",
  "key11": "4sKwYHzLufSu8cwnsLoh6SBxzCSgUUHD86LKV7KbWULwsM5Daf1UE7HVvir9MZsjj964T54F56f88qEuLKGEnMoL",
  "key12": "42m5k9F9k18QYGRcxvihRv2CMKwPskjoGN6ZP5HbWvfUzxbmD8EoXJKytetQWVKNoKfUmeGtkwfJrejyCgg2f4A7",
  "key13": "2rry6MT5Pmq6rqHfQoHmbC7nhcF3ZkgSAtJpVD9ErwpHquSLQzCg5bnnW88cAiVZ8xbkAWJ4tFudxhLoYGzHqps7",
  "key14": "jSk94jXaPDJyDpXch8eNprDqS2BrLT9KcG6mqiEaVWCpT5RqTgMXGhg9YDRxuCGgKw3oRjLjS1JWSR8vcohNooT",
  "key15": "59wUrAL6HELECDhBL8ueAqj6Lo4temdr95fFbEbnD5RY9hRfY7JwtYhq9aJi6CC7kBZVr1RihSTQR2e28LzJUdpW",
  "key16": "neSt3jSk1uufQFyAfd8EvRoBxoWydErL2qMjtC5KUvbW436Eob57oWyoaGhCn5P1QkEW4sQJdXKz1jVtNe6inZU",
  "key17": "2wTWzwgAYytDJQiDcAwx3kRF5ZGEdhGq6S6FFuoMXUxPN25FvW2U6fvjQkjcSgk9gp1XCRiMSXVVX6bKRkZYSbkJ",
  "key18": "ZzpNqg8vucomvD5jvsyMYi9u4MAUpvExRGCAUPmVXFAFt8pyn7LF6zLU2M4EpkovgcT89j21Dn7uVRWyKNkz6vJ",
  "key19": "25VmrtR4kT8bnWR6Xc1rtemo5RRrCeC2aY2Lw1PXc1w8pfc3vA1VwFKkbXdoxbAExz4hSEuQXm7JYfGWUCsJs6GQ",
  "key20": "4mY37UMY7gZ5NoQ7SSzC4ouP9sSW9naA4VSYjdkNkB7BJheT4B5SPUMSY995snfuveJ9Mw4vw9M4vxUeuSqzf1MR",
  "key21": "63dutCNsRYutuAmRRLQANdaHGsA63A8VK9bQxL9r14Q9KA1kDbrsBNwTX258J1frQCMHePDPGPm8QqAj83KX8dZz",
  "key22": "3syYH9wnr1t4dwZmfaPQHpUiLcLV6wqhi4EUH6FYf7b3WVpvf4fjUnHVrYT2majh46uomyYTnw3XDskfHSuuUCHM",
  "key23": "3RfVawbDH4L3GAGZfDsFJzJY6Pknp7ndxAYa8q4vhchGFona6ifQ1uyh6Q5wEHABoB1Gdn7yparcRkpZUtnSNUGY",
  "key24": "5vgeKcMgvEtyC7cLWfpS2dBwou7GNrFeod5mZdXFYSk8oKDLwdMDr1zhkB2p9mEbqutr2ZMSwhZ38v7YKarZTAKJ",
  "key25": "4T4cfFvmUqwJyNpNcRoLqXDJXx4UjaYNnCjg9MatVbGharGvcBF5ynVvJwueEq5DsfXEW8gkbkPGLc8zvKAfuZp8",
  "key26": "2DLYQmSFqqvoaCAzamqAExg2VzmYBBqoKrQ9wiqRGiw2vqfKo4kXGEKgfbdCMmq37nrLJM5RaKeyVuS8efkkw6qZ",
  "key27": "woUPzXGPmnDR6uF85USs6YtVKtGD8nu99xXnGAPefdKztB5MscbRZyJWzEvQCJe7Dcf3RTQfgipdXYonLS37uQ4",
  "key28": "5c4iBsSWgJtyTVUzpf7VMsA6EeHexuGbzc2R4ET7TRs7b6Bju8wLjbnYzTT3JA9SwdfHm9V9LjgfnwwC8RMukrfM",
  "key29": "4K5cC2iThx3NtcXkKJWa8ZAbDmZ4xKyaAFEczgo3B6RHJjRRMErPayws75CxWGp5FokBQ3QjAMierA4BcjuLrXN7",
  "key30": "fac89cpi4kcbH4A4esao53fvRk8wK7FtahZ8sYjsWbrrnL3oNttzQ85wDPhsDPzqyhmBpoDrCeLvd5qpjtZisnw",
  "key31": "41jV8DZNHGZj9BSG5v3aMfUDZ8MjZtx5rDN1mkkaoqnAwfXdjsSzwyddyJgMRroSSpp2pHh2a2kAEH35nK5LPhk2",
  "key32": "2oLShp3Zw7RAhZdN2AgerFUaWwX3EePngvuBuVQjk8jtfdEM2yejNhgeSXRkdp8dX5hoRHTeLth1ou4seWi5SVy"
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
