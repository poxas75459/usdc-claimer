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
    "2ZmaaqEzZZEpEJayRaezUVsmz4Y73fZtkD149miPeZB2yM26rnyyKtSjsBrtgVsSQNdsi2Lw3oYUb9zPd12q8mu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Jn9tQxYgRYD7cBo6C3L4QTudSotJpXkmohtS66SLVhXBxwfsNkWHHb1dRqUqtJ7ixSD7WZjYWaXNNAn8ft7gLu",
  "key1": "bTxC8K3vb8ZEbXJ9rHcuriEa9Gcp3317syDev2SpffCTPFgDHGht5V33GG5kYgSbQhv1itam497dvvPmojzfCyu",
  "key2": "4WaVy33geAF5AqfZaaASEwbEJ5h3zXeoz93tartR6P7mqh8kQAQAaMvWbMdwNCPcjniLHF82GdRVi5dMEJPgFFzM",
  "key3": "3Lt4CpykNpc6kxqnwPrCAe7HYwMCGz7veigmgMT7KRjMrPEQMoVaEuRK2KdVhqgjxqKSUWSaSwC7j9sW7Cp4Qavp",
  "key4": "5Y1C84ZwdGniD2UodZhHSW8zkuD5S1Vgurg8jJjvKyMrnLBWkTqdJjNvF6kBQLiA69xYbzLPZLGC9k5fzUdXUcPs",
  "key5": "zb7wLVmwq9K1FaUvahDL6hjXtkKWvgrGaDyP5Rfj1JbuSsVAaEAYDBRCCbvFU4LXmjuBK26AYH9o5hWjqAqHopT",
  "key6": "BBShSZDZPrP5NWJbuwE6YxqbtQQYK3SYu4454sxjQG7ztS1Y29bQHAo87RqPbaSUxPucpc4NMHaoYeR8ocoP3Ng",
  "key7": "3pUNbqg1PdyeDmRLB8KpMPjCnpyJpoHFUa9H33DkExrzpyqNYPTXBTUEKCSXeXKC9Av6K3cXgy2ShuAwEcEUUpMS",
  "key8": "4KeYR8xHgUTzS5bJw83QU4BvZaYQESr7KZA42Ve1rzbTorayQMxnNjdfBdJoCseixbDZgeeT7YSmXRyxPwQUXqcF",
  "key9": "65ic1qJ9nEZ2sP5cbxXQeRcMRC5ZYZaedecncrprFSHuJ33gWg8t4LBexM21fSiGnKSXFcJmoexUK1BnEHe2ApXM",
  "key10": "3wvcn7AL1SAsdNCgvPNPFG2ssjBYHjMJpZDzgriZU4CdMestzhFSvJoQGNRyEU27uw4GxXkEbgeE1F3zz4fATcL2",
  "key11": "29MUmEUponFVtKga7GfYaA2KGxeJCDBQsoba7YstWTVMqGsveFar8kqWA1iD86Bz1oEcuWMs2iV6EBVGh6EHRqPS",
  "key12": "6EAQA9pV9gWfhdedpR3ntoK4mif2V1MFj2V2b1nz7qKV8bqGBpwQwt9svzZ1QCfV76VaYLs2Quonnyk6o3caDFk",
  "key13": "46p8XX2E6Lg5p4vXsa9jfbZpkfC5s2LVCPRVwhjdCgShkv36Gkt4UwRjKSkKK9pu7LLrDorC87Ac7xdxWjodcudc",
  "key14": "3NEqR2e6tixXvejBqio99Zu3VCitHGMJ58tmB6MWzJBw1dY8Xa92Hq4mjviz4AUVYQ9hUXLMV7H2pzXac8m2Vwfg",
  "key15": "4xndtBKaXEnAPGavAV1ZegkJbWqYeU5PsEhNicvQD6vs3BnwakDSVgSZJNqRNgGvD24AJWKmbLPhQnv12qGXMmn1",
  "key16": "39c6pZGvSSopdwAEfbAxKC6VCvMswxCM7fV3pZUAeLPX3qqREUYwAGZaTJZvUmoXRjxqyvPVQvTZD5oPkDJBRrpg",
  "key17": "3nbWNZLnWYvjJD7b3ZfDCgibZNuVqnYBABh3S97s44wMJFRoabrJvVpSgVs9stFsBcHvGSRKAgk91rYcRPXLLyxQ",
  "key18": "5iByQvX59diwA4hZSSkdABdQo1Uf68N6i1icPm1dvwMYgzKERmNRgLcNddjR3LwWwrnoMMTmGwFjzQyATG9aj3fk",
  "key19": "2BY8vFFoScm7wfVM2bkWXdZapcXsSpF1hWUC7pPsXRpGU8WvSE8VSqQw5aVxbbmxoUTZ4sBixmc8h6GNZQdkkK3h",
  "key20": "211DJgQKtL23CqH8euPSHCp1N4xSAktTCPyrZ3rX3MvT5nDrfUsGCgzMm1HMMUHprVTFMXRFVFFLB8K1KQWdFUkF",
  "key21": "3VdgJMi3EDshijKj7HHxAWMCdcFCYrHDrLCsrFXXADSW6fsrC2H6eDq68rUv4PrbXUo1UyKJuYPwuvoTrZFVU3FG",
  "key22": "48RDLPvcRg8T3PDrTQ2N9APDZDKV3DfhqgfgyUhwkc8XLviuHzzSvicGpjywZj7KanayxjJRMxfdTUKsUvJz3P4Q",
  "key23": "3aWGQzoYFqmtMdMn75tBU5nqh4rma7byTDQf6oFge2YKDBM4A6qZycNPgQmJUwvukMcdCLvTpm4GpFhLLnBn32tj",
  "key24": "5QB8UfrittRvCqSSF64LLVsCfsQLY9CDnzNrrSerKN9fVxwPRJfjAtA9x2Xdxkxu2Ljad3SwAvWn5sn5ct5BPGSW",
  "key25": "2LrZfjMKstPAwd47FTMxawYqfj3Ts7DKbHKZPJjPk2s439j37BuGNFZHdvT2jnnZeJwU4rJoFxTBSaDvgtvUVk1",
  "key26": "2cRTF8xx4VCzT8SWX5XcmdJxgpux12zMdZbLiYcym5UwmCMd8p2vYYbuoo5V7CibA8KT3SjRYQMsRcC8tNBhTWkF",
  "key27": "2AEE62ddEv24L3aNGe8BRBWhAq4k23xQCpq83rKkRnBq4qiQR4G59g17rLFT5QkGA6uVaUu8TdYoqXjE1bFCLYLb",
  "key28": "5gdaJpaK3AwfKMjuLQ7RqefVXraA6cUZJMyWZt3BcXa4HDt3B1MAWN68rcoTAH11ijPqMxpj5Sxnmuiiv9PQjF1b",
  "key29": "3jSLPKEBPLD7iKm2zTDFWxYHcbHyH4oFeSSo9geSKoJD7tJeBcjuFKuiqGVwD5pYEpDVFPbob42anddC8QhGhpCs",
  "key30": "2tvepuwPLna1twaHQ588nSSKtqHgDXUCrtFH9c988XAPQDoTeYbzAh2CvHyQ7G6kXMt3B7L4wYGhGfp71Ud8rkxH",
  "key31": "2TcKSqc1STVkxvJhnxWxner4sHdN2NLxWqVDqoJF2rDBRZNpxidrDFwa9QREXDFWcnpJrYP8ewH9gKJw3EHsL1EN",
  "key32": "4wcUAjjMUxeLFRxVrUdHSpiyphisJWHbckQdhQZJzSPSUF5UCGRc9doWarH9fggAFWjMaBtVUSwjgSAZi3UtKn3P",
  "key33": "L1TjZjiqqX5GtbRd4SjaWEKnGEWyLxGZXnEqUoUgSTNiLiyzqsEYq5pWHg7LJBNLPRti1ekwNqQVopJdp89uDof",
  "key34": "277n1fuRqaF2vkSceKwiWx42Ha1oYb9Z2b5B5icBwgZKymNiBWb5B1BM7GfBFXfKn97ZQtrUNCmzdw1iDrjmcLJE",
  "key35": "5YqqKnmcwrKPFc4Q2r5Y9gzSnKivAZc3RSTiKD8mSjhvmwKuebRaszfq2C1zgFMwQAGx561dKvKpYT6scg5VnTbY",
  "key36": "3FKFAN9LwwjFgyvdReS4GsWf2uKHjF34pNBQy5E72P7BvaKyQViwzHTR6poBcuZXjJnqvXDnEFRoXUFExVgv2vgG",
  "key37": "5795H3VG1C68UzVqAkyPsX6k4X47YCk4NCpiWnECEnHzQog4WPWST939BnoXaWSHcC7Ydn2pyEfBb8R3CgHAeGp2",
  "key38": "3vwmLHyrEmkxiTV8qzNxNfZooYy5EeFWvanBAhWKSLSM58bUoPR6pdaKBm2d3WeDMVRCxikuP6cueWkpJwUBEs47",
  "key39": "2CeMMZZzZzUPf4rj9W7e7cxW7VuDRp7GmTP1ZiVGrFA5v2AaYC8NPnmzSNmu5ibAqLY3qebxBsEfjdX7KEMcgYnt",
  "key40": "28f89eMSrMWy83T7QgR48XFMq8xiPqbGRVsJquQugtfCt3FpKVVLPp5TndnJGrkZHGXwQmJt6kkT35P3MRtXwvBd",
  "key41": "ngJFCG8bbPFaSHHz1ux5xAPxcpBZALFdNf4EoiFhmfnmkQftuVoJfBh4DdSkMWLxV9zx16MumJYCWc56VpfLvCW",
  "key42": "5hwZCJR9wKvjV5geLtntHmNxGYfgpoqy6bjcduwKWvuqxW6ozaHk2fFgLEnUqNTBZ4aqtfM7YXPUD2ek1HqHyyng",
  "key43": "2EYa3YoN3uAjc5tLCx1LHAwpdKzVWtWrUNXGarStqSEJp1HbzWtJmtLSrQmm5KpmtdMRqJuTMJ7Jk2B7h2zfCtVg",
  "key44": "265u8ugcUCHtBAZwiNtRM4tRTAe4xkSSe8zRLAwLcQgniG1uPQLhs9DJV7dbh3aDHJPbdYh4WkvyanVZeJErTdkd",
  "key45": "2kFG7r7shZ3on95kh2y25n7EwVtupkvtu8LZJT5DArRHrp7Ym8xwTXpQWpFriwgLV4dYGWu2TBEvPr26TGJBcujU",
  "key46": "4QSrKDZkQCrPNUi8QVUnRDKguezGwh7qZWhv9eHSCxuWoPSAoUvupBhJMPaxDCrmSrzRcDrpBxxKZrDwGaD2QAMi",
  "key47": "tDj7jWFjHMZ3AscmtJxGsdf7oYtqtpfPzKy4CeeSkH2i2QjUcuwHEdi1eTejtkK4x4meJ5rHB1b7hZSYzzukYZK",
  "key48": "5v4TDQJtt5bZkSUCevbWmsJnH6Refw2YbSktw4ZPchitaDVi225FW4TSFFYSEDvzbbzbL2PBwgE4JLDYwZfhpFzM"
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
