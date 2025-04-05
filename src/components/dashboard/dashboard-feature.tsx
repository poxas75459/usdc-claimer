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
    "21a1me8MUBerp6Dm3b79EuyZDw6DeqLtD13JKNfd9QEvLGcoNFAGGaBEFyRVZc855gpJLBQnzgMqA1rhwPuyzGhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXvjoXkvXhFjAKPDN14jsRtxh43aGfc4WTLwngetmECHEJeu9XURLQKMdgAxRKcj25EgjayxSuNPHcBuVwuVD8Q",
  "key1": "4nzT14B9Ci8KwJ9PU3VyFr6Q6Fi8pfyys7KN4tCr9x166xHwT7WNXSiVVv8votWVgqLPQCcbkdhVFWHVhqqx27Lj",
  "key2": "musQcsbZbBxfGiRnRv9Dt29E6rpY8hkE2GtXgvDVSvxrT5Q49ipPBkZVA5xqWJS2dTqCsvyHjhF8PMuf256uFwJ",
  "key3": "5NAGyaHQdbdsrp9GQVvt2DwCoJ6ofAaneQk3Uv1pTGxSek7Vd1Pn7QX2oxpa7drEDJ3VDKviT9xnv1nQx632Bpac",
  "key4": "fv9oDCtU7xJTnARgXBALfVe83x7EVqdfebe9ZbnM46fQ3J45hV5wjbJtNLuS2HMBySRDHSookCNaPf3TZGvNxkE",
  "key5": "4vxyHzjSLYuYxbZgss4h4pqhf9WWtvJ2Tp9aAqcJWcFyrFMSnCANxK2Gqk8LBP6uygMypwF8HF7otxMMUvLfmjdx",
  "key6": "3rNMP7nGSLMUCW6AauejbeLFP6XCzwCB3aVKNUiaZf1ByM2p5woibWBQzQXoJydYQ1Ce47untBGPhfwTMdPnAAmz",
  "key7": "2pq3DQKNNKxECZsHQ3hXvGP8JfJSDzFfhsrdPivs5rKSgvkFiYo2fbfxdkKuFMx35dkpbeh1diZ1trLNGHYnrKpf",
  "key8": "3JPd86fCJ9Pfm9N2FAAMziMCn9MVq2yPB4T1FR8Ph92TQ8oPt5QR2zbazLCLjzCJUf2DQ89h7ag8CqHDHoEZ1ifj",
  "key9": "2HbjWiQNg18vWWSCvtbjH4CFgYwqVbwEM5vCFS9air5LUssqsKXYCv4sMC7tZDfJ9gqUMZQDrUgvniEwCYXFrT9o",
  "key10": "YfFTcDSPJau6X5LFu23tHErP3pqLfVu3sVoGD4Wd3kuHewv8YwpTkZywzMRLnjBCq5RbE2o3XkxT7JRhvLMS6VA",
  "key11": "od4c7cV7wuruwiddCURierk5GjxGcMtbLLnUdiEpjGkpyvcBeKAq9X9JDizHkxadmrtBSfjazhcpzvbCehhQt8M",
  "key12": "4G3LckKbFJGoMFZquQ4PnMSsQciYftCc867yurZ8mXvtAjQX8j8EmzdgfofuHAccUV1usNQo23NpYU8x8ikzQLVp",
  "key13": "4AFjFH64VqssBmquTjGUncfdQaGvbs6BDipmeTzW98JbkLxo3SN9o9wi3uhNKjrq2GqCKPvybfiiG5bBXXjqb397",
  "key14": "2yoorZS2DavVNKQ75rysppeT7b6iWuTYJt2aP6oCFptpptjBWT6fa2AfMqrWmRww7ovm7iTWePTTR2N1wpqXZnUz",
  "key15": "23rFkiaciFgftb7YVrKbNqgQz9m5RZqRSiCg25QFqR5t5aJFiS5gUG4eD19YsZ7W7LzNYgkSJ6YA9Nu1bvUcKoL2",
  "key16": "57bvvnBBiUYq6oiSbdsYaykuKq4E3bptAuLPquK3BFHm5NcjnL79rZXSZt1qwZT2CYJaYRbeAh52kmRuFMHZy8r5",
  "key17": "2ow6sWbTzY5b8HjnbH5oqTDrXZGw38HW4DYE7nFrQFYFwBsBzqwWNiBw7V3uehZPxkTGJR7wr6PhnntxxZynC527",
  "key18": "4ythMtKSLkBTEXMNCYqyp7pMiv1BfhzWDuVa6i5JduzzhXArnGSpzkjv6baEL2pZyJaRRN2wgKNNNL8ZxkcRotiV",
  "key19": "22VvXmt1kFaPA5vEY5Y92yncQ3rPico1tEPBW4NYTAu3S8FMQVow4o47wNHXaXAe8nCsCddSzgf9zC5BW2DT8dDM",
  "key20": "2KFKnGT9TV1AkbZwb4DjGnAnQWPVmbgwVkBese3en7fBffDNnqziSg43JtoHjug9jo9SAmn1FsSVmRNn9E8eYHtG",
  "key21": "2LmkFbJHE7pF1VZnGJ8TwvKSdSm9JZkLG2z1wuvzZPbVJUMSkNBXJTp4f37PHzXB845Vpk1CvVC9i9EQ7D5aet43",
  "key22": "63GWaVbLGAzc8a4JkpkmTLh65148cRntCinE1nDnUrtMndk3hY1sEYg6xZHNuU7rbnSfCbDJhADdpDJfHZwsL3kw",
  "key23": "37723ay7UXpCPYTx7vfQFEhnNZZEGTuERWmA8yweA1GcvGkdXBhcgqb41FS7rSmJHAMx9n9aBfXamvEasH4o2KZt",
  "key24": "67q9x788s4BxWy178oGg7tnahjecPMFacxLBX73yv9ryHJb1GoTzsxoeh6R5bC5oQ2DJwnYFWrFi7RVnNP6E1ebz",
  "key25": "2Wp2MeqWnK86kHqJdVo4mjGHW3k4UmcMiLNhDeHHudMfYurJb56TRUeEHreGGgDvbUHRUY3juKzFhNkSDGVxgNFZ",
  "key26": "3sZb12QxVCXFZL1pPcBRoNhgeB9CwWSgSkwBgRfG4V5Q9z94PvDPGdDcbqcMFUcWABUZsDXSAt17ZhhFQZAcVbtG",
  "key27": "2yM66q87uPeXYWXiSzYQqoNj16AqRmatqGYFuEe6AukdxX6AFSYJE3gmfMC94Me9T97uzT4MgupVBjBWt9b7kHVd",
  "key28": "3YiAhiWGaqAAA6rBPvS7qSSjZTopS3JQP3Mtestim9nJM5A7sijSDqf6o8innaWFUqGok7rH6946a36g4eK7HUJP",
  "key29": "5JZ2uDdKwsHpK6RVQvqDjP2vvJtHDEGL55eBAGcCPWKGB4pBkZDTbgYvXcbjq6k4wRYyrwa4TSYEQZe62JVPbF6F",
  "key30": "5qjko1jZYi8VbiZGABo2v195erLEshSzXJQhsNnkE17AAR8r7KyK73b5m5sjHmenGscH58xRB6G2918tjGFA6FHu",
  "key31": "4JBDKh7fjQXSMxUcwG24MtBSKv354ds6a8p6zokJh8nnZXaud2Mffij8t3cH8QAaEpXyVpsWbEumcL1b7PMJaVnD",
  "key32": "3hbKunx7X1xffUrL1rYrNBw1EksKXUNfR1teeERFEBfMGeb1ctPiZu5JyQVqCQi6agunFRAwThLK5coicHgjYEfJ",
  "key33": "3WreZisGLu8U1vpSXMN35YSoKYzJipVGg2uTm4xQUpA3cL94zm8yTgZBrp9RY1McWbAie9aWmNqf1uEUsYi5Ljfb",
  "key34": "cgHesNtjTgaVhofDgdELzdD698pKr9dLRBrHVNDNmd1pKu5TzYjZrU4vGznPzxGACCWJjMyNkRwvXxQDLHNhdHR",
  "key35": "58M5xHNcFTMdzkvt7629dqJv7jDoZfKnPNyoT8unnct5hvy92bprSASrm17YTNUp6ePf8dLDK3vJeeCXv1csq5ZS",
  "key36": "4bNwAtJJjiaETp9Jr1irkPdo9XCmqJ2u2exAmXTJbpb4Vii3Ko6p6hGZE9UN1F3F9Z8ryeZgZN2dA4GsykyeCt3",
  "key37": "5DDaMwUFNDN3iLyEPuQByBvYRo3naswfvuRBxA7Zw2X5k54prNRdJG5U2rbrBPWJDYhkAXjUtFDNUH4tsvz3np4V",
  "key38": "2jrzE5emyvUYji5KsUVJpLMnMkVPu6WXZTs4XUhUcuAFvFVP8Ma9X13QEH2rLiURKQUJyC6tCZFUzuYz2UQzfhd",
  "key39": "2HLzdyTMj7LjRqh42ekobqoHAPBASLo1WUfRry94gwkdvkXNa1hxDoLjBooCTDzFmZaavFKaT2KjUZFG2BE32mBm",
  "key40": "5PLbwPPQ3LH43hUbh9i7rPuX91NNvtyYK9CQNQonUw3bZtURu9SUZQR5dqzWpRLRGbKLZM3sKYjxvtFvqTRknFcF",
  "key41": "2A9CCnidCZVKTTk2DbtHnqtugLhKr5NbQ9eNhvVZoBLVPUHTetHFjrRtfWAQeuphQ8txGHSCnsfLgo7nrPmq948v",
  "key42": "Ewk8GN9HyZEcHGpsp17EtCueCZnMkKYXXoqy65cU61masijiG1PaRr3jJbqWcTMz2gug1aSWHDWqQXAZq8KQUSv",
  "key43": "3QFH2CEpPa3QhuLB2NtGjZG7CcuW9uDXi93yEBMV3osSt534ikwApkdrP414T3eNUxKGnMetJepfucrQcjfSAdTp",
  "key44": "5Udkz5TqEB4UMVcHFgChMPf2hCHDWu45KGLDRVnkV5vRnXQMgoxZRk9knZDzJkwwmPQkABAdaF9jK15opU9q3WGt",
  "key45": "58go3tAEC4C1LkUK1zS7NjHiqLszCXebEKrh6Wo1tknS9tL38bnaL88oKj1rZDary9zVtXknpVbdoJb5iEiN3TDy",
  "key46": "2n4qAqKooirr6zsPhfs8cpbk3CjDQzojArRafaPTBABkTsJbyKVuhPnCPX9eHPP5kHkUhjLyxqCpzJPv8LmDGf9F",
  "key47": "62B25gbAm49mrJgwiDdHPhAvqBg5V5eqCAhTbRrh1a2qMmh29QiBivCUeV5hy12Zrau1ipf5D4yWkYsa99yG7H6V",
  "key48": "4wJTpneqnVccG2frPhUeHn18APeyGyfyq2dTghGHTibe25Us3GV4biewwCJni56hHvfLoUPHCwq1XETZ8pvZxZqw"
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
