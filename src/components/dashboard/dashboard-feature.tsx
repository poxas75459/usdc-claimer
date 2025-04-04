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
    "3ZPNZkJcqvpNFgZpk2Bo5ptewU3rEo14S2bND9y1eyLedGK4hJ1Y2frnmZKEGQgUpjkfc7eG1ufqECkALjBhxDsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iosSQoYvWKiSxz9E8idjtDNmS9uMWABJJgs3cV7nJT34UQwzQUV5udL2U5EieiYjifpAR4nqenCMA6utjMTTNQ4",
  "key1": "2zuqRY1VheSGTU5HvLEhpJmdTvHL3dMT27iStssKqPmDh3Svcwmj2e5X1GbDq4UZNuXDpYhZoaZs2CV4dBQ4DefF",
  "key2": "2p7gALh7hezChzr6Vs7frv4A8QfLdpUhXEEX3HxhwYpbJA2zWkcpbFcksMzNZt6NiJXT1kCvSdFDfqVbGpKdyRUp",
  "key3": "3gurSji3knc6B76yds3ziSx3m6CweJkGyx4qkBLoVavK1uBGybgHa2ukwqurrdrQiFXRGFbdfcqdkYDc5jh9YjzF",
  "key4": "4B14FYCyk3ppHmSq7UXVE5YTLdDVrZLff96QCEv4rQyQUBxA76XphrbsXHrVqVwXWdYHCkPF5eiKdLrXPjzcifmX",
  "key5": "3R7oTcUQXzdJteQuFvTV4pYC22hqbLQfUnrSzvn8LcJkHxFVfYCBkeq3ccsAqxg2W11mXJ4FR1dGH7X6ANGcXfxk",
  "key6": "3AYKYNC9ZsQGtL6GvPKmKQgX1pFJ7ZE4CPyXF7B53fmoSse9YxTpGTcPBi6b69YB1pQuLHUEVYAhY9hFDv7uDHpb",
  "key7": "3Wtk7C86r4LqtDyoicBSrVWcppfkV63vHg1oQzjqbAnM5AAS8CgsNRpKAbDJMMVs5W52Xu5x949xnEnNuG5LYiNg",
  "key8": "3L2F2o7NM5QuKxzTPtFbxUtMx33wBEatm3gJj3LLq3npYm7rWjJ2QkTxXgVrJg3LTG7wdj1jck96jg7bgooUvTin",
  "key9": "4XTAmVGPKMh62UAcQXa1x9T23sARLzzrpkCLLtNhvVCpuhnXfH8bD69BcnKN6CErBWrNT7DqtqhGJ8zGXipWHxf1",
  "key10": "23Qmq4E6QER8WSbXPeSzeko3gp7X4MjeRY9kYDv8DPsBiHFjQSFaAGmsGdMny9TfKRArVcFwjQCBTadrKcWDDZkp",
  "key11": "5vZ8FvHRabe4wDMz8tXDLo1jKarkCVbeYuFy2aDNqjXpp16vLrbKZK5tB1VoXQKDjJGhNbcyAobn1a3AgnipNAsM",
  "key12": "pwrVtFJURkQLKPypF6FjduRVHZfGcwdtT8SUWTj2sxM7esBdqcczQZddma7uGkL97eJpz6dsojcupMRC1NPUe8E",
  "key13": "3Lou7VenJMtUG4hzcvZb6eooMEqM2Aiyt2pTsDDipfWyE4DPeKzaZsskmcgqzECzpCkfSzduwE9kcvnNzzCKg3e2",
  "key14": "3R9wutZTHoq513PVmdDkkMG4imufnk32XFJpiJiZCQ2pZixCVkHto6g5zRhznbWvAsDpwa8yfgmdK7sembBxCdhC",
  "key15": "4TAUmRQAHdhhohxmLPRvhH15VssZQpj5h3ddsNdkhw6FFGMi6W6gtU4udCEwqs5b9zRoaNdu8b11vxAMPnfjRzFX",
  "key16": "4oopqsUyw3SSzxHHaz7674WwS3vB2tVyZGZdAuyE4HaBxv4qHhSbBNbDpFcBn32YJCGZi2b8VPQU3Bkqdhd4kdQ9",
  "key17": "5EhjNL3x9oHQBDtsv7CeHfYt5jzqTwkr6oSsATVYfxee7RyoTtcCrEyZPAR3u7dHFTuCBDXGpR4k86HYGPWTX1Xb",
  "key18": "2k9wRHLRsL1gLTaMoWUgovUiZUsUonfMASekQYyt4aYgaoRJJwpJowAEzCnjE6hkAEcWJ4Wc6F72FhRgzMB967Fa",
  "key19": "4TMpvT5ghqaihz95pi6Ce6TsZvCegup7D4zMH7L1i9tvU487zSTJsfG1bh5PpRqzvHN9DVQ3J8ci3cVdUhRdshzw",
  "key20": "3SZjU8K3Me35phwpzSChH8QfmzKh14ypbnzQVcwxfzjcRoGpqGvQfcqLQsFGSYhbiae28WxAiu8MmXmGQFFGmHSy",
  "key21": "5CF45Rq4J1keBuANjASe4AWMnKJkxvC7tF49QZJZRLbBYF1xPR5uyWYfW5NJvFRpSyjDEHLtV6iGugtpWf7t4CwE",
  "key22": "ybuDbcK9chrXDELqPrAoZmLFKUAY1XCodB2zF5iqwfyBXc4NQVKjpfj1JeVJ1mXy8FUjuuT9AsNE3barqJ62UwP",
  "key23": "ytJYb7EMFM1iJg3dnx4SCMcxWF5hfVLBJqfyqgWiaXM2gFTXwcBiQJQAq4nFkX4HvtHjFSLuMrCRN9bBTMUtFMZ",
  "key24": "4AsrM2ZZwQvTAhxTwDCPD4yK58HawNjx6Grab1Dn3sMKNHWmK2bt21kn2GMhC6VRjVgdu4kK9q4znwdJZLjDJk8R",
  "key25": "2yfofUQF75cQmusaWyWdhePSefpu24qbz9qbJwUSkhGqVC1ZdaizSfkPYXQQ1R5sxcqFa5sutPBS52bfNT5oJ3K5",
  "key26": "3vEeFZos9WpQeZwhQMHUSYrzGbW6u3sfBpe2ztxoHZY71QT2wkNPxmYjaLGqfRjAzrT4kQ46J45sG72wvE62PsLg",
  "key27": "Uqg6spWz1MfkmMAKLLKNZfTdnoAk92DNa82LMvnonHqtp7qYfW2zyMQNFKyFY2x8gQmkar54Q8jqBXcD7kH5vBs",
  "key28": "4cVdzMNRzXLq4BDticcJiwyjFcgf6udJ1z82ecvmy7uiQUT8rrUHkBFK9bBhYVLbWx67NLNFXewbHWXV4wWBYG7d",
  "key29": "coPBUbpFtqiXAph9zSAfFsjgf8JvTZ7PgGN2QtMdV25Ns64T6YqUe9yq2BpZ4ou3x6pgKh5Qz8qQAsckMzfbnXT",
  "key30": "3ti1wG1XrD9xXCQNnS6HtR2yWjDmTYNEjZiyeYbZQyUoEhfwJMXi7gffB9PpUbZ9zpf543s4oYVQ2JU1147YSgXH",
  "key31": "R9DG6Nc2DSbBEjWxZpzmJZ5JjarmTL6s48MFfeMcxmia7pfDCY9MdJbck7pxTRRh5kp8MLQHxft1YZEhTYYL9Dd",
  "key32": "294gD5HfDZ281UsS3HunGFFtva1WCGWGe6Wq2tze1CDyp8f7XhtCJHZ1zotj5RWXpkrVSFrtNQXL2zon54rQUT8m",
  "key33": "3CftXMi2cxYp61ubbYBBrLRZJ6Vb97s7KbA83oLkWXUSbQNLLicU2CNiRQjqrnXuggCbSxFTCQFFEpMJLxpB6tBb",
  "key34": "T5Sd9w72nWbiPQDiVr7wM54asfMLELy4kcvtYN6qAx4NUNpS6VWg5ccBAt63s55ct983eUoJpZA4HSSVqdWE6oK",
  "key35": "3KcLQsq1GK9wSMmKw552aJtrJTWEP7tTfdL7YXKr7ZzEiGAvY8fztzXueorAipNsmSyW6QBAJbnfddLTDsTj1si6",
  "key36": "5Zhaow59rkzCGdfVzgg4Y3VfVS2AwYZkZVkxvy56zptZhYPCyUnqbamRtuzUJyGgLJFgo5X61zbBqgtPS8C2SUkB"
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
