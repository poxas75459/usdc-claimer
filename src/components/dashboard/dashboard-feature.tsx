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
    "3RfpGYKKNEnVDGtERPWkcbXft8Z3nfmwGquMrVUwwjSsKkWjRJKErVDYqj4i9UUN1P92HUK7WbBZ45aaWCBKTQyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkL5v2NhL3hYwmKL615cXE2XvSe46safVG4eCfGjWkbAxp1CQqnsgtuvxHb4kBv2xacy6kwijDVNak3hJQKNFKS",
  "key1": "3JmwkL2yn48dUCDtWC1gFZQeJYDgrL28K7vujHVFe6GKb4bPeYyuKSHaZxRJjuXXFSzVaa9xFWiayyfkat3XNhz3",
  "key2": "4QpnLNMBa9iXREdZNtuiWsB2vw3JeH8aVzTcDte1GxMqdJ7dchVWoGXGDgDcZSJhHAvwdw3PPrtHC8TcSUDk9Wos",
  "key3": "3dqQKZ7yb43UDYnzgDKFMo49HH3VEJ5akE9Xdoz7PPtLSCWYXGvaSsrpMRLDmUeKs4sbyT13a6oCuQfW5313ZxiE",
  "key4": "3VcgQaPS1CkpYnJpNDUcc2yFiSdJJkXP2wDz6ni8PBZExRxJithfHojrxxwW4A18e9R5FZwPo5zP2cdLyqgWyp5x",
  "key5": "2DbSUnWtv2S7sqYPf4e9rPTyUZNLL8FS8jtfy8KMbQEwQdfi5J3zJGkJFxyYLWWWSHWameS2apFWmeVpeAwj3TQi",
  "key6": "3Co8azbjqMePh9LHNwCjUwWrLHSwwbLE4meiF5hvsXiFUHzx6txPL56a5DVzTB7AGNvqwuzy2hDGXG2ev6x5qAmu",
  "key7": "EwEPFPFrXPQXQ86cJoafd5L1YPm315gc4F3PNmEEvoVdFHNsuqoTRQ8Ba8WTRDr3rGF44YnsN2BwGXQaULMjGMM",
  "key8": "5zum4xV54dfv5UbSUuPyfCnbZ2v8xEkbh8xXRaTmbU697unKn7xCz6FQGcxXm6nnaj6cuMQQ5ekyrbcJFhN39sfW",
  "key9": "Hrb3tneJfMCSuVZcpzHA99MLLYgcUGD5NqWqFJrjc8Ea536HqyYx8ZqVv5HMeoCXXqEXJnKP72oj5hvp7m4Fn89",
  "key10": "3siEy8Ns9eTpQ79woQr8Su13mjwrCYWn5tvJvsyUp3W27X6vSQnJpbNHzJrVncXtXbwT5pZFTWfjQF2ePQ2z8rxn",
  "key11": "2myzNLpejG5UpkcgxeKUY7T1a5qvwByu986WfcFE4tW7UiUfgXggcaKVNwNK7bT6TdXoBZa1LXZH4xhsXdkBY6QH",
  "key12": "4o1wmwpABAUJ9qYhuerHPCrDwYoboPUZsAUcgiD6zcQuf3fmbnTovXxKTA1eSDgCy3xr1zQEmdso6kHfcUgJMXw4",
  "key13": "3pKMTGmnZkpWhRYGoHYxoPitEBffcpuhqJy8fc7BfrJaygs3VYCwueUsfEp8w4dXihFxYpGs3qwhp6TmzjK4m3F7",
  "key14": "2tpLUjto186cnjmUmTJ7QKzHqHDS8AebqwH5AbAWEo95NELnWaqSQVJgExdbjCSLPgU9QuW9xR1WcpRmPC1Pvpdi",
  "key15": "GU8p4G3XSyzHHzF591NmrLoYTwRsokYy7P1Ck4wKVbR3atCR8gxi2hnJuQ4E1SuTdkuLLVmQgGG8wxC9WdPUrth",
  "key16": "WT1bR9GrMHVAYxuTL17h935FmjAujkknd3qJx3kdKHtaapH8K9cKj9Ddvt1fXLozyGmSBcq2EGZ8jN17DKQ2rXC",
  "key17": "4CGYMYoY1v9nVBQgDTqgoGE8bQXqKGYA6ss4vQzzJ8z9QtdsmmnfYkLvHDQNTRHvnCq9u4zQKzAmTkX6raGRxc7Y",
  "key18": "2KKqrB5CsxFpHWcg3moiem1FqWYiTRLspupNE1SbgL4FziKB98986Gs8ALHRUA6zXsByCVHNGzY6exUQ9fje2Jty",
  "key19": "49hWSTrZq8cCqDXSVzKkz4cLppNUbjoJGED8En4dQzXY1wWbQejEk6DsbyCNeHhnPvTTjS2M5GSrFxARMk64QriA",
  "key20": "CLcuGTdFhoVU3PoNQtfSfU8xeQGVLGchKXPH7g4xYJgFe5gUgREhjbFLJxJwBpCGdLrjg13wPhXtT7KY5Cd4Tws",
  "key21": "3JhqyhyzULJXZfvsSpvYuYzHfUV2YKePK8DQKPyi3bq84ehrtJHEZNLtB2fSejp2h4wEWznom8dQphewAJBVkGAJ",
  "key22": "2WPcvSrZZwdJvwDzSE4HQWu46co1bttBc6uzK5dNCT1SBZcqTwr7qLf22LkB6LmC5EUbDGyUubYZQECGMG8XTZvr",
  "key23": "4nQ8htmxXPN1d9sjo3fwtToQiSBvJL8b35q1se8pGygf87WEZbiRSABbUc65ikTSXqJPRGspyjrH1M2XamTAnRyy",
  "key24": "3hJP5Kvj1KYWK3FRSRGY4rvV43ijoaigLXaufGTF79B1p6ZDkbYXh2g4Vi4FRQPyykkGzHcN5Psx9k23MXzKFcRD",
  "key25": "54BvQdP82o4gZFK8ncTxJdBPaHVZP8rj8egMnBoY5yZ32epzJYeWHt8TEUKUVj1GzxF6Wgzs87X3PcWv5TdFwikq",
  "key26": "vRsbLeDqRsHXeSS7wBCD2ALWAWCdx2WnT7kuVdLerCSKsHwC9QPFZ2Y3k7j45ajLVUQ6qEhh2gMtXrcsDgjBT1F",
  "key27": "28xx3ZFgj8Y6pvD2S6xH9c3XLmdeoxNcDwW91nMfeVH3CG3gtcqBhnjkpXW9EktVYBGaSKpiA1zq9gTqFEdLwbDQ",
  "key28": "3S2SZdGRBntHDLGFPCVnMCAE5zGtV7F2JuFo19S52EocNTAWQacWzKwGekTRrv2CrXPfPyZMnUZwiRFmPfQCZTAT",
  "key29": "38cfLXYEcznLvgMunkmgrP6zek2D7mGJep4qrULLetpJXpN8ZsUxufmazzJojxD2dRNwfeVse2AvDjSFEyPRayVM",
  "key30": "45bDTck1Tp38VreDaBWUAYLoqwXrMtyA6MGaSkP6KQYHQUBWhkvLQd2tA1eRFUQ6KHHw2HDmwPw7iXEDjpdVYTta",
  "key31": "4UqG4XZo6JCjRZuEGY9hZ8cH19AKLXNuN84giCejLSCXJCHSL47tfP8mxy6Wg7cje2R8FD17KhQn7a1pgYEWRE52",
  "key32": "61NC2aL1ASwDBpTQqdX9Z4iRy4CUX4VVBavG1yXA3bhaNWtDUxPXxbbddnyqftnFidAXLfccEL3k76Tj449dytPa",
  "key33": "enzmn4FmtLhhH8uv58AxbkwACaWn7ZMSS9rDdnqXgffH4i7HQjrTuaSY3c18dqucVjwGPugC2ceEmSLEF9c1RJv",
  "key34": "7phZvDc1XoDsHvR7sNSJd147Z8Ho7mxXduGvYQA8bkKWRaP1Z4hpVHB5TDwjExRyk9JhfnAMk9gSGCD8tPyoYwm",
  "key35": "kzbmN9Lk8pij3A1aZhPvousE8HAWc3sQ5TCyJcH9WoXaBW1quQcQuRGYkFhhqKcwfmJvD3CGC4NpngUYkUshPLL"
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
