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
    "4dY3VYquah9zYFzxVRsSnWLvss7Tq5ckz5MwUwPdVF9EH8s8kxWf24WJKLSTVzhArrdp2TFe4Ai5EmojUX9g6duS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNhg5uRWKTBKsiRx4qNnXKWHJRcgM32zEzs7DYxZ7yDN9WnT5zCD3NFwkBA3bybmuKUC2XzSfkZ1pSDPQ7Juye6",
  "key1": "4FSKrNbv7ADewj6f7dRMACRpXKq6ZTVMsLC1AgEcm7hPKvrJtHjjWnCRZAuop9oH7HHQbFyVppKhx3TTgenF7Aps",
  "key2": "5z2MRnTSfU3nwBQNhxtgX81XkEzMGpYCgLVmzN2gBzWnhJaf57yzNHywNF8pjyKpKAPKerftqctAUgNf1DqBnvPb",
  "key3": "2K5R9xXdcginfDu5WhgVeJZLnNYivhzQeCxvXavzYZwStuaVphTNyQeEfE2cQRsmf9kAT5E2AVhYnT12gyGbY4c3",
  "key4": "2MGWZmMCeYqJsgqz3NHBqr95dNfvpwe1MbpqMygYRtfc4vigxkS8ra9GAa7wPCxs6jNgk8GAYy5GEi9mrrfcMfmM",
  "key5": "2ZhMhjMeusR4WY76kpz41waqUkwgvA5i1hZeBsHaNvd2tc3uqq8ENqm7knnJUBep3WPsCJAYiudMeJZiX1kCBcdQ",
  "key6": "5uGWFnARmvpgHjTeN5C6WnXhJQVf3ML4VVGBgAYC75uiaEkUC3bGFbTdCuKEPfxdNWt8qLjwJgzTsUHfDGigNYrU",
  "key7": "4HfcRwnGRtbS3T1YahTJAbpcGgWQuCGniVTCNUKxVYKUriEZh6QgPtoEnwuBQb9F5M3jKpRAdUmUmxY8XZz2ty2e",
  "key8": "eD9FGwdwjwkJNhvtpn47NwVUYk6ueMhTifTQGeein8pGFNWHPxCLqh5F4rrX5o33ybHxDYGZBKT2isguyJrt17T",
  "key9": "2WBeo9x9SgkvUo3cVtTqesiB8nbfD8K32NHok8uvUjkGybmUC9Nrc79DcrzMvFC6v7oaMezzU648rKQkX75Kezvx",
  "key10": "2N6nXVsGK9Ugf2aXFPCU8xwdgGH6BmCBy6UpbrdJRxcPazgLpnhcC8VBi54hgs7aTQNDH9UVVmF9t18xbwPY4KHi",
  "key11": "47jW8gEaJckQC2Eq363BpdaPvYczo72awgmM4tUi1kmi6zgGzp3bmugBqBE15VhDYep4r5Er37a3v8jFZE6R1EjQ",
  "key12": "4BVpMVDtHMYN3rY8Hcc2ytmvfEMME1gLSAg8uvGxycTxzEH8VHqpfkmGisiCFnEfjrXUvQcuG7v6VBjv63Bx6fN3",
  "key13": "4sjR16owNwALCuWzXZ24eeLmQMKTzgSewj1iBqCb57E5bBWbMRm9voKrBoJVQybi5W4pQ5Fm7ECMqLWa26uuyZQs",
  "key14": "i974udakSUAuAAaDmTuqxVPXK7xjjddCSRyftjupaY7BJzdBSoyL6n1oLGHiQ2NzfDfpMqoWsH55zm7aADUrpcG",
  "key15": "5xCm8NaM6jhcCYkswByLaKUBosJUC6yZfUNWDDVxFuiCaR64rSVhC2bQJBhZJKeqmo9jGfCGPg9YyLp2FyGKpkx3",
  "key16": "pfEirFe8B6NnVEe4H5gNcYChdhdDi7MpYCHofYjVnCNNS4yGzomD77rkR8YukEHwn1wpBLF6icF6rLSTMwQcrQb",
  "key17": "224hvZ24E2M8yXLQyLP2YnWbLBwJvN6fsj9P5TP6UcCQ5A23iU6KHhPx1VRS5nuYSjo8W9CueJNru2xPGNzt3Hhm",
  "key18": "4AMoYaqByGbw2ZEpHpKy9qJ5TQ484acKoHp3FU5wdn7AP94B9UTHrzPGsa4LTXS8B7bhRNC6A8ehp3LKgKZ9qWXU",
  "key19": "3374nTGz8v1sGtN6tCGnbQjaK2HSCDdE8N8pbbxE94C58JhexRAEGJj7Ae47FhkYzErPTuBzeKCfzYPbFcuFeRc1",
  "key20": "253dvFDaRuRPXzMYQh8L5T1ksku6vv9nNyPXekrVCeKMYsUVFb114cNBe4eehEstYtKrs3X855sgSKtwPkYvj6cz",
  "key21": "ozUfSdVWjskPdoJACRFp7KPawpH6SgGdPrt3A6WbXBoa5b7R44CZiS5NRRrjrKfDwFH8n398WRmcf9Aeng225L8",
  "key22": "2XyxLQMKWY13wgtVq6KkxJ2jaspkH1iUwG2g2qEosZCTKoutH8VHpGd2KSMyvFQKWfVgmHsLjfiBraNP1h42cjFC",
  "key23": "7sjpjzYq58pbzsw7yFCrco8LFj2esRUmtcyzb6wB59oEPW6SedmKHJr81VwDn3qC6wPwNs2MZ5XRhMCxhGU3296",
  "key24": "5xiauzQxHJg4kjfCsAcEGgtykh4pXZaUnff8z6LvQLTv4BVgmuKvYNFDScEhuXeFAFqBR8WKg3bHPt5V4CxSzsEV",
  "key25": "4aBKcQvmXEBmdScEnPfoEinXjXEs8dJP6raMarrBnjgrHsBrb2VjXTAhSVK1Utke6LzPpRYVuPiZK9pC9BhXjLfW",
  "key26": "5fFiNNjVEs4X5Bmcqsu7rKT6fdasxK2eagDbEDSBaAJuiu7tWBy4qgL6USn4DFaeewgmmrVTAojBHKxaRPKqJtbr",
  "key27": "5g4xvcNheKcoMhqgjSz9baSCduLjeSFRGxrk8UrvEmfG328n4997s9BMxGFgF4uS8txPnXn9UbgYYJG8XabVgRNB",
  "key28": "4XDECB3ytBwuUfgVBdNNhmQgXDc2F5CKJhi2JFvDtRKjftLcVE2ZmBL9dkGuSmke6wp4X1LmfJFPjpp6d96grDxD",
  "key29": "3PDmFRE1jWou6A7bnyaFbQHnT3Bz6DSdh6PN5SRTApi4ZbLgzbDTPFmXCn5K1HVKwtAm7kvKGxGzdfq4yve647oF",
  "key30": "22Peuge1DN7QY6THo1n9o1d93DRMLNugwiaAHgL8LHELKWVJxvPbqCQP83GGK458mWSK7WMyMBarksDTGP72HoUZ",
  "key31": "5gSN8epBa6TEisqQJDffB8FJycPS1h6iyWvLJ5kW94FeMshuzv6A4tcY4ikJk6Sz7reQuGCX6cQoyXPctWSFho9n",
  "key32": "QpHmbf1GrKyi6cADjVcDyiNxHPUtconQnV9JK1EHXJf44VJURNEeyvBNgSic4QHsRNC8Sv6deGuJTD93hNoGuDg",
  "key33": "3EYhem4XNgexeghXYeGKbfkASiCkxjYKEHmVsmNamAK8Q4kTBSWt6xWujkWwBH2tPvawGFhpSZfb8VLQ5v8t9bRB",
  "key34": "2h9HmkkjxvLDRAAvH5u1YCXwv5FXDgwc7KApJ5X2wkyyZu6chuzFoMxuw2zE4Yo5bhBwjveVjY1DrhXyGzyJFebS",
  "key35": "34EgLMxjzk7Le2UozYijwXStgAKeBKNRB89VJZRgZpccTV4EZschG3UnXV9GEsWVUTJWY5xH8Tt9TDv8AJ4GvhCZ",
  "key36": "28DF9g1NU288zdVQr1SE9o5dcBwTUYEHQ3MpdGiFyxBxRaM7jHb2eSsy4oYxK1y4eGUJw7Qkt2yGuniaYKEEGX3i",
  "key37": "5DdxNQfFzW63sG4fj6Z9fYXTT4JG1xbNnUwiBfpU44fKbt8PpZj3JhF1XiyH25eLtodkT9VuadyFv7WzDJnX7g6T",
  "key38": "4Ayu5axCvNANYByuJbsy1ngK4iqBDisAimTtKyp3tVfLvLADT21ebiZcbDb8sfpVhGLmQr4nj4vta41jqNwyW5DA",
  "key39": "5ySqYk7rJYooq5dak6SQXitmJzeDs9QzhpiLrMisU8vW3EbostVN6K8LkMQGeMisRjP7PhWfrGn28fQWDwy8mJrK",
  "key40": "44pPvbWXXHpvp4pV4vrebXUoMsunh9me4nrGrBgMia6zzRgF33mXuHXnYTfYL35skYVhYBc6WcWbgJmW66r1BgAZ",
  "key41": "515mKRdeoRvnvXHV9wX7iRgKNFRzZZELz8WiPrF1UBS61YnYghtT6vJxCMywcz7o9J5KhuoHzf4py3nGoigHjKZC",
  "key42": "4mMyfsJJEfempFmuS2otaDSdah1bGjzdhCGLwpsh7tWepVazYoeDhZDLqeuqs7bCwZDQg2xfbMLKgxrcCWZyrh87",
  "key43": "mUZsvyA4KrV3ZtMASgHukBrNLqRocUfwcZ1JyyKdZ3NmriMsgw49MRB4tqq5euEHthPi67hoyLdm23pYqhPHBnC"
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
