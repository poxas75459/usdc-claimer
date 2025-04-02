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
    "3SKRuQmeLyfdzB4xRYAENPmMmcGDT6t4tA6QNt1uusaFM32oAKiqWwm4ziCQ4TecQiEneyXiiAgtE5Uizb5X43aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377CAYauVfahgt499ZBANQD48qfMu4waNM8E7ewB968PLEqf8eNfRT4TFDQrR6sayjFLgFprS683sm9VmJm2bihF",
  "key1": "4ec56FyKYdbFXHz9zRHCnrazqdvXcH7zU3oniqmXpkB9zJMtesnT6CpfELh7HGwy7sq7AsUBt2U1xDY9L9829SXa",
  "key2": "3ytmSA4uGHTcSg4SWPiaEHnuSzt9j5wkb9oMcFHTXW3SeN3Fq7mkjWhJAw6MQY6cY5sa1LKmQT2pM9BFdL4R1otv",
  "key3": "4jusozGZ3x5xAP5jSBmWg5kZxsrVeGSmDaEMEcVsAMmYeQJwWHQ2j5vsh66S9n36uYqWN92TnubojxymdDZaGeBn",
  "key4": "5zuVysaGPA3Fa2QdBJFxRTSNibYXGaAJWvvxkZtR15fBMYyWqGYW1tP2kdDt6diqddFekLaEF66zN3u5bsQMuwd2",
  "key5": "3FFsLAd4aQHRXMkwXtrfvBgLFmwDJUxnFVNTw77ZMuP2L1mDueGesLU5jhbYdDaAKxNHae1bbvpb9j4QUvJYp2HM",
  "key6": "4ryatXSrUuC2bm4qJHLYcK2GESUdjorikzmHc7CszkcyFqroHhtVLPPaP9a26TxAcfPhmWt565AedNFnMMCxL5fx",
  "key7": "3K1eUtebLUvGdLaF9aKm1fENqxRrpRh3iuYCMx65qGbufsUHV4SiHdxJuUjbDZd13xZFk9biMQjDSmR1rxeCRW99",
  "key8": "2F14UAtrwUx2H8fhGDifLwT77FLJ6B7m3hmTMpB2bXupgZXHoQwdDZQbapX98HAMt2SBkzvW6aQHj45H97P9RYC4",
  "key9": "5vs4aDsDPXcqn9V2jsgXMthyV9WD6RSsAkVfoGBov6trUrpki7Svy8u7GzpXuspoj7uYVz54humKRjgzN5qaqoSz",
  "key10": "2gT2Frscgk482CZwpoZrPdXvPuHsEyEo4SMXmM5wRHmEzxwEECj4cboUNN8TWDNvcK6UGsNfX1TgCbuxr9pjPxVv",
  "key11": "2qfskb8s1FVKApg8dsYz1i3kcyGFnriCG3exzrVpLZvNciKteN8A1qfL4hzfRkPoLmsoGWAmV2gJjx1agHK7aLqH",
  "key12": "4c8sSfRgQazEvtkgM7ffMfKPhgHiDEy4t6uQmTuCcbuc4DzXcG5cahwNfqZz7mJuofJSD8ptcLJ2HAzzmkHcPjak",
  "key13": "2XJGLYVZ2xYt4R6AqKHL5HmoWvf6ba522BkK1SN3si2EZu9skquNHm84hcAuqGsWeAxwbHRLSXvEroba2SS9URTq",
  "key14": "5DKYnSqvf7j673VKWC5tqDRtHoKvwLuyEtitgoXAPYACDbNmsiWUp8mHBHWWeh2KcDwViSsiqn8pz9VqUM4gHXqy",
  "key15": "4nMmdyK8ojY2cZDd337SWzswzVL3NgAEJ5ZkSvNNKH2ueHMQeyB4q66UALUXYtVeJA3yf5LaWwmjwNhFdDgEaCJ2",
  "key16": "3gnEwN43X9kY157xnN8VfGPNNwHhtw6bS2TW6c54M4huHJKryBsLFkQuoTx32mXnv3ydXk3UDq95FBchjw8zvgYr",
  "key17": "5BWdcgAuoXRtD2TSt5VEJ6ZgvN3E99ELiaJyJ7GCSh2g9U6ayzXZmY9c4wTjVaGr1ytDEnBNzCXh4U6zCSJoQU3P",
  "key18": "21FwZyrtovyK7zBKzoHtWUpPwNb8Rr5PmGeYS9fwnkmDr3wcDKbw6kmnNwxLfhGuL4LuasKtTWEhaniCYpiGqLCZ",
  "key19": "3xkSXQR3hfp77B57TtN7HWfPtSTMfnwuaaBtWhHa5poZNSvRzhSDJ2EBs7WH8ZtUB1BURXFwFGD86apTJAeskzZi",
  "key20": "5JQsD5w6UJg7KSCGtHbDkMVvcenyu4gEQdGPGqzbhRNEsRo7btrME4m3v33EPco1h6DGcKv3iap9qFUPQz7FUoH6",
  "key21": "55VG68gZ6MK781GmZuLN2G7CxrRZBhSNArd3tf8jy77iQ6UywD4MCHJQvuyMiso8YjGHyTBiZjhFXS1PRX7e3yMS",
  "key22": "3AE4UJDbf1dr4ZqwKGQy9Sg5JAoWN7PKarF9z8mFRkxjkp1aRaPVxp6b5kpzdLaCAJspRo85Fj9H5K6S77Zzfdzj",
  "key23": "3oM5FwNEXf8JFzLEhBfik2b64sgpDLd4NvWc5Z4MTVPCRYDjjMTUy6NPaQUPt1KsWARsxPempFBbctNgGFhEdyQ2",
  "key24": "3EWvKK72LcNjvZfpw6JmYbiVReoAZHdKJVWP3ExFW86zy1VDmeoDx94YwtuqSWiofJpPBnk5bwNveGwNtBuCqNe2",
  "key25": "5uSs7xtYUL7Ny4UQMAMWaXffD1hikxwwxMX1hSjzKToJP91aEYRSct2sXUNaydiRTPAan7B2zb35UknfmBppkad4",
  "key26": "2ugSmJHZSVTsHcAcPrQibAoDy1nZRNtTNwFWPNMEq2CQhynLQ9uoLqhfkULgMYzhQZfJw2YT4kHmuF2J28WTgeUz",
  "key27": "3zCKVDteDMBmw3YEMPj36951osm1Cbh4fom4Mn28GYVBqWhtcdNBuG292CEarx7NXk3xHxSjgMmdchaVo8fMDxMm",
  "key28": "5y96VezLDeV9Tcs4CXF89JHqtrbfQWkHXetXDeHdTTMGpK627rKnb52it45Jx8JHfe6QZACCafBeziCns95pqoDZ",
  "key29": "4Qi9Eges6d8nwDj9g6MFdMaRAp4mQpamBdnXQCNUZjofP4jx5NALm4fnXkyoR4AJAonHCKRwY5LbvAX1VQDvE8DD",
  "key30": "37j1hgcxaCiwMyrZSCqqgfJZYi61JkxMkwKPYtWk4r252mPn5tM3fsMv5VQEJg5B4WAZY7L41k79wwwyFuoWieXY",
  "key31": "4vTgxEnd1sAgVMEupsrPRQy8Bv89hCxJvCVqhKxoxBr7im7E2mPpMbQugVqvS7BPHSQpDp5SdVY9SzzY9nzbWjRi",
  "key32": "5igt1uDiJJY6usK1k7Zktv4LjCVvoMwoP1bP8ZLNJasb3PtjjJjS27gNttuJcPBEmcVyJ4Z9zUKqCaLkGx5b4rpT",
  "key33": "3XHYm2n9LU6SbMaQmGW9x6KZpJnnmjDR8dUfDCbFeMTrBYof4eD7yAxfVUuCiUs29Ng29NzkXgsq3zJi8J8Z654V",
  "key34": "64QohSskDwDzo4412vf7JFc5BeMxEFCoQtyPBCaCHfSN98ELv7WGCMVusnXnGHTFtXkVmoX9HghE6J1F7tTJgBhx",
  "key35": "3R1AZBSYfqqF7HtyLdCgEqTuFbtxDWxrb5ovyVw1iwUxPqBm7wAWWH36CWuRDK2pYRn4cXDmcZ8yHRsFAaEa9Rb4"
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
