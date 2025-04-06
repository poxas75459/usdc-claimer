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
    "3XcyuBYPfdPe76YU9KrkN2LDvbixcSZFLUjcaZ8c5iCrAxhLoYMJfkf8ir8Ve1D3h1aw3MwwBZSggiykUpFP1ZPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s71kWpGuHTSGX9PTyKnUG72sjvD5CJHwzsF9Pi9c67Z1o3dg46tZqiZFL6EuwGkak2zLs3u53UCNnUecVPWYp4v",
  "key1": "31yTD5N3sk9gckmc9mJDsAVVEt2MG7jby55E5CtqyJGpxppEevYjWiYvx7T1tNH75mZR8jaTSXytLyb5D1YZSRys",
  "key2": "67SVYT1aSQTApy2w72wJZK7hJMHt8odoKkEwbkE9Y456iVpHQYxrhGRZEjgaR3mLj2zVRAkAmFf5oQpCb7VxE83R",
  "key3": "61K7LHZqtJW2qAZEnYwFx7WNMPvp5PJe7CWPWvgrrrxVL7dpaDnEm4NZD9YKkUUsLHRKEgS4qqBpD3Z7RTUmV4QX",
  "key4": "jYdJZbFQomRycMpqfxddHzMswpP1R4xWasvzykdKnK73QTmSU14etNLQg64Vdc9D9AZuTnKnLomZ3X16zVHddeW",
  "key5": "2R6d19NR72x1E56c8h7VE6ZabNWC3kmBWduGx8Vu6CFq2jLqFztsakDij8mb9YiR8o2V4vT2EWATr7Gs99aAxFjZ",
  "key6": "27G4JQ3TAP1jqaH18vETTGfmQE2yt5dPHPrkMTVPQ1FCxGJcrQjKfevgufYEjQBuZLTDKX46cQowGappz1fBEVgi",
  "key7": "4uUzhkiNjDaxmdt6VQuLJpR9qgYX1ULWmrSghAf55aLRuFJdKwoHzBKEmaB47e2JzxfwdDnBR3YomrkXMjC8BNsb",
  "key8": "24eGXAQM7xYZMRxBiUY3Todn4BjKwPCwkSbRnMvLoLPUGMaHrLXhX97g5Vgzd4euxeMxf47TVrwWNBE4JwGX9qc7",
  "key9": "ytE9HaGeAMW1gNELdCeP31VYiTxDZjvmZaLW3jAk2Sag3v9APxw3jTSDfbroGA7qZh1orbCfweJkuhv1iPnpm4x",
  "key10": "5mndk3TtZiFLbwf7YbpT2f4daGB2JzbHXFqkVYp2zFGsr61bho9xp8NgeLhisDEwjQXogUpTvJSJrX6EnDEDGVZL",
  "key11": "5SbKsjiuN2E9t8pqUuGE5sd9LyhmaK9EjnKWCo4jENtKL7J6bwJtkePcbqV7YKorJ5BGmDKs4eeKDL8Ni4uyCnst",
  "key12": "nHZUXvqTYspLvTV5zKhojnE31zB5iknhBDwt9KvPAZ9rV9aNqyouWvweU3WTywcQ27SxqpVaqR11eiin3mCX8c6",
  "key13": "5YKnRWgsoutx3zWBXWYrKBcY6yMTAYoPsiFC942RrLCRhoPbUDstf7nbeEfMs43gPaMBQLx6muRw3o8b1CicBZp6",
  "key14": "5yEFeiLPf5k5Wc57tSV2QnGkWH7e3svRyu8rgis4gKMZ3N5qi73hrejd4sJZBhviJnicoT7xpkkVe8b5pjcV6YyR",
  "key15": "3VKagW7Dw2cqzqKrUoz4bS2oGrbMSKKZSDLamQJBw4Jt4k2fmYLmgQfmMjokp7dmkrPpr8GT2wa9pw6iuzWyfa99",
  "key16": "4eiNzXtfsRdeyKRBBXBnhVQWoQaSEpjWMZ73WXmmMYrSpLi1ZFQwd9v3jwoyCpLAkgAiiJNZiZM7Lrm5u6HjVcMC",
  "key17": "2gRYDd6A5R5z26aMQTcG7xwz6x4N5JH66eJfHCTeEjCCTTCQZhJ3gvjSYBkScaS8reN35Q86kHcjyeTcVciPczgN",
  "key18": "3wt4tpQGWxtHMh53aGZyNvzgKCtGx8XdGyyKZaMjGw897y2jaqGqPX4U71z4tLNCwj1oPuXPYGBnrwqijJFNKw12",
  "key19": "55ALfRRorX4GBnZCF81wBmAhhf7cyc6QTkKm4XnhPFMToqQ5aQthrhzCkZn6iGCiAiMH3YWhJo8JW4YuqpVk2kJJ",
  "key20": "5ALdMP1g6L2gSRZPtB5qADrdf81kXm1TAHs1Yos2rDXaaBve7L2tmrHjgLZtn1g9sdFtxLazgjRxeiQFhZQdA4VW",
  "key21": "5swQhmXZb3m4EpR545wZbbz8xWZQVPSzUckeh63EAwfZUqarUH2s4YCGtcN5j5o3FbLV24Ehgbs6PpsotG5zHxS2",
  "key22": "4s7ZnqVdNPVtmpMQxf2J4mvTMjFw1jTUfMcG2M2oQ34SttzK7ZbhPX4mzuxEukNLG2thMVpvVJVz18ff1mvFsuBL",
  "key23": "51pKPjybrxfpxoWqqh6xva46DWJz3SNhACqt6Sw3bRjcmhhABXe2j2pUkscs2C7P8qqGgHkK2pwfDzxoKGzLfmEs",
  "key24": "4YuucMWM3PeaJcw9k6zz2eTm9NRybKFgb11uXhR13yuVMHwZnGvwLR21GT1iosHrMKmouvF8Kndw6cB19W92fvsZ",
  "key25": "3P8duq6cHqyDNaK4dDtyuMt233Zjd5fEU7aASrsqNcQ6yJyEwcmHMSravGxh676NRWYR5DBD2GMQBjYcjWQVFXfh",
  "key26": "5miJESBYvtmg8irY5bEdi9P6Gdw17zZMAZ48KuDhk41dKGJLCMSYSa3aUhLNKcMox3jscexJj7bqBTSvd4onsUin",
  "key27": "5PDDhh3uPcsH2XL8JgfrJjdEG2vsRua8UXqCaYpaua2CJV3NgW7XegczZa9zyPY7car7VhCARRM9aK8k5E9bTRSn",
  "key28": "QYyKYNNJ2BhMzwdbcMsufN4PUtSNm1ohNo9W8KD2HQSRKBjuxQvqcA6FgwTsFqUf5P37kAMVJsiasDtYBcCF2XA",
  "key29": "2RSqCDUuYPJHgFdNA6UJZvRkoetaqmMxVvGVKnY9z2XGk8UnzRtMfzoaLr8KBevxCUQCqNRZVhskf8Y3LajHhuTb",
  "key30": "2Uy6zpgLCasts7EyBT5oXKj8XpuLWN6cs2f8QsbgLcfss8aqBfzQGr8sr4GjdGZqb38HJcfVcRYogQp7LqtTYk4g",
  "key31": "3PaSGBA4fxacKzUg2xrsAcxSPiAjM7CwKoayMFUFHoCpSGbp3CXnY6PAK5e6zcKPP2jwNFNmCF3hLC9KTZJ6xToF",
  "key32": "3JxEENNBj2DFWTmUGZZncaH9xFcjHwhNTbtSN2xD4i8TysePNxr5gfWRdBKsvb7z3wWsg8E4JzUhY7vz9T3LwdUU",
  "key33": "5XNSF3SzAVu5bTttDs4M4RcxkgNkryYF1mvcYLa2TsbeogWw763cn2yptLhyyBW2LAbm8emXih6hf3HozzcdDps9",
  "key34": "52hMwparsFiaZf7JeekhsLXRtgMgS8Gm8CmE9phYK2fJibpvv4Shoq26pb6FetuBfGyvVr8tCoGrs58n5yFy66JR",
  "key35": "386Eye8gyXd7ydQ2nfWK12x8j5Vka9Hm6yLMCyYs1M4kZSmew6MvsypHk2S6w53GjYDH4vB3xPbPKP35nvkkrvBb",
  "key36": "2xZd9nMRRiAT8KeoWLaYDwf4pMEiD8PbDHa9AGer5GzGjphvedDcz1jWPyN1BGHNw9TSW9WdSkpFAc3zE7ZCCgNV",
  "key37": "3WZvqaDfmbx6Qo8eT3RF5pXVU3ygY9dqbJTp8jxXSpwyKkTXSp9nmzAkw2neJDTJY7SE53eMLnVv8ss6p6bCJ7dR",
  "key38": "4cwQLumBmkvDoFddApkZRE6qP5QKvDtYVZYeQQrY6V75cabKhZBcTYvZtcZxPDczDTs4GBqkgoMCCNQubg2DZu5C",
  "key39": "24JrqfL2u7QStYYGGerTGeCFD1T6pQJgaKsL3WMrJLgBiTEMZcUeY1x2WUL6wqKR22gjFkPkMquiDxfEPqEaEwgB",
  "key40": "3yXSUapVJPsgyq2eE7rr5mSHHJ9zYHk83Rpok84STVpz9cmzPUyQDF64urRhWwaGUaMHqeBrarMQ6ZCKiepnbyik",
  "key41": "4RL52EAzCRcnVbHws9GMBu4P62SL8RUZHBwr4opCjnGmTfMVrdBkaWwBHg7wmNQRTxNLY7ZwYjZBBV6VqQD4wDbv",
  "key42": "2MP9LqFgJEJTxBX46mGYX5cwWAtBaw3MYCVswc88FQeUraho3JAWPPTbGcmqL2JeFm2maK6Sqh6WYD2MbLPCyHgj",
  "key43": "5Sd2brxwGG6T85nrpEy7emz9CqWRQUgFHXPwiHq4Y8ETKDqzvZE3q9WW17WBS82pibmJh6puAcqidvtUcrtL6voW"
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
