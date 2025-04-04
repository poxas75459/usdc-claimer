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
    "stXxdj24pvA9bQ1kez97xBpc1skYpSwVm47rEjVjR2CPQdZd4mXxGg45VELGpdqgbFG9PCMc8bpFFQ45koSsxer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHzrr69ZZRZ2JEVM9SB5HjUyuNH4Ene1ihBLwrCtXuQZL3QeNWyw1dDjbReYiauJhhVAhkhhqdQTmbu41NXPh2y",
  "key1": "4nChLvb9QLjFfhUTj32xGfUamHYrT4ozHLxy1Gn3LrmdW2tDZu2ZNazPUFwn6oQr6nr5bjp6bxPVdhM1D6UxDRyG",
  "key2": "Jmh9vXuJ5BJ3w9qbpapg4n1VDZo8nVz4NVCzFYMbcobL9qTpmAgxLPCw6wyBMLnJGhhG2yqb7VFPyYSzdyX6FhV",
  "key3": "4ebU48CLjzmsAuseo9C5qB4KVwnNspGMqF5RVPKZYmQ4vxSHsYfsnLtbNgaL5NCoNjXCA845NjBzJPkbSebTfBQZ",
  "key4": "5JmyBX5wX9SPTToVA8ZEonnz9kn9wRhLdU5F3swEJSxwhdPVJeBhKK6kXyktB4ojzEku7myRhDV1kMM1fpcYFrjS",
  "key5": "5mqWS9cC38c3Hg6yVHHCCqx9BiMzzkouoyYkiCX2bxQxDbArU3mb3Rm3teFjTMQE7CxBUA2vvVonCL95mfXH2MVg",
  "key6": "66Am7XmdynrA3bFGrvdyB8SAQL2xj7a3NC3CeN4rGD4PmJDSi4n7TNQmPsW96yBFaJM5zDJ7QBHwtbf37np4ZdmB",
  "key7": "55UKvqeSoR2A9EFuurtcPCKxh8mzsDPGPS5BNjZQSnFjGXTKE8FYQaLYZJf3PNsC8EHqqxxR1wWpJ9eqQUjJJvzb",
  "key8": "2ApNDVKFPpQiARwTFkUBDF1UA6uwssQmihSKK1GMdqryuLHDZRG1i2p3YJ31qdBEsVjDfH6ZttmpsUkadTJp6dpA",
  "key9": "bThEcsfm73sK9Zm5VwDb1iXuT2xdpFVKxow8g7yjcqC7jRbmbr8mthSzkJ3XMsyS5g9fq7TxB15imN8f833gbuf",
  "key10": "t3iQRhqeJhhd6KLf5kkjaLGhLAzUrjen88ysGxJvtroBLtCWQUoj64xbsJDA17hCrqkSDhnGtz757j7mQnwCcdW",
  "key11": "3esiavPhrYbxSS7FLcADQkrkcKNjwgvcQJ5NhHdKFmE4TWdGvQEryQSaTefafbTZxnsWdsn8Y5SissEfbAfgxJpT",
  "key12": "yCyyDMtXHpy51ZiCYyUsvMn1pXrUd1BJCJKhUGAweNh6TnysYFyGQpK4ETqn1Kuc6fu7tG1Asx7twfgBgyHJ96M",
  "key13": "UdVKnLauAJSm5DkokedBEtzx25WjgK2UPcDvi4iNdABkn25HSKNfqvhF6zXPBUM3oZLzd52ASZmq9DCYk1oSATy",
  "key14": "SjZs327nDwVXw962mrYF7KMnBgGwnApwcUU1C2voLBmbdjBKF34pZmegdJjrEaRJ5va3EsczxU6Wc5jw1V22peV",
  "key15": "4y2MqFsvg4pzuBmMcWR8YTgjMEL6Ug9TBbrhRtDz1xjMJh6Ss4fzs52CxqhLZyHfMJzbe8RgoLbeX2M5Q8ESdDin",
  "key16": "4XN2zDywR8KcVMQ3L8hwPaURdppq7DD2npZ6WeQwAZVXhFFdwb86igYovu9tiLNVN8vpNAYu7WX4gsWAwH7icF46",
  "key17": "2uBQCQ9gJNKFsFadCB8Lo6BkvtSAYB5VdJwLM54fmNwLkhszW8eBKUSrUgY9v6QELsKVaRa9NJuXru8KiHDds3Ar",
  "key18": "U2jQoJNKaNBUx2YGKd7xFxG2iJCT61drptta5ZPLviUMepXrcDwDJZCRCwuLhbDDtGQ3hUURxpLSX5T3RRxVybj",
  "key19": "5SDgPqzdJQFGxePAScE1oZgnFdGb5JYJxQTwLtcq5cra7gDwnnBKYcRfxeasZwkcNb63krLMUgy3avNRcYfn9DQJ",
  "key20": "43y7o8WbMy8iSoNiN41u6eSNrZXfUBCXCtK9EMC2zrNj8WgtcKETbw8b6McKpDESUzZrSxYUy7JuKKgdTNYHBvUx",
  "key21": "5RzN51Rtgn6MHgS4tFGZQqzjV9sASaWqCezHvQ7dwgLRs1XtyMmRYkW4Qh95S77rrVbktQW1TMJFXj7JPNK4dFNC",
  "key22": "xS4DStfyxjBqbqGFvQQZom8UGRHJgAgkMcGufzysQSxJZtVQxSZK1wrVUdXH5Asunqvu7gp8Zqp4Jum5yRgucK5",
  "key23": "2M7qt69ctZnhtxmBwxJyYgZKEUTo6jNQsfSy7Pfva2dmrfG3eimGCrYyejnzksQ3GwDKM8JC946X5TxDdBErZ52H",
  "key24": "3a1fwiLbDhueTPWibqFhhQ3PUVGs2fDar8y2AhLPLZJmmaWavbHRqfPT26CRYgXMabUXdQasgBVXfmxmFb3NUsdx",
  "key25": "GXUE1zajL57GidtykebeEmYiRJU5S774ZejuSdVSfJQQMrkGNT3haFEeL3XkXh6o7nLqe6riNmLe6iCT29qLi2X",
  "key26": "5323CjVRaxfARpZoE91seHjNS9ydeAdFRvDfNmvgRw5AVUrf4TBwPXAJn7qjArYbnNZVPmNrqDKLHzDRLeTyYLqB",
  "key27": "KaqsAkMQhM86AwzRRHgFX2RdQS59KF7iMmg6GvJcZtbHMuuoHXRFt6Yt3TnN7AvaGm3MN8j47t9fhJYot67CTRN",
  "key28": "3P6KUQBeZRxsTFaav3trvnM2TAbAm8gTqibHRNHRfAWkCYK55VsQz5w9DAmtVQqcXw74sWWGdnnNQhcxTzTB3MPb",
  "key29": "5o44XUB6waFMGX94inH6VfMLb3sGmQrAAknLqNAayXnBg4Jkky48A4NoYpyboSLtbHj8v5nALc1KZM278NFyMgvG",
  "key30": "5h1PPo3rmeYLpy5EmcWv221zSjjYyqgAFTRc8Xp1b4iZqgbZSpX8Dp5U18W26jiStGNeCqpywZyj4njVNJXYVLob",
  "key31": "5sfDG9ChFij7YpBVuhGAAGe78p7f1UQ3SoMwsZfjJ5BJpsbbE93KugPF2ZCgD8oXpfQtRx4rRWLK4TkuPhTUUrTd",
  "key32": "3RFWvwiZkeUNh7suyADbNWQp7RscGMogr6xMPsZGwwPoHWnoAtCD3YEAn5t5MhTRzBB2y9oh342WV6idGVLXxjhG",
  "key33": "4PzbUUurKx9KXgviZiiVjk8F32qLboyWQ6UpJ1BU3EqAptpeDAPHyuSH4X3H6y6Ccj9z894HsAi7vdQL8UduqNzS",
  "key34": "32Fs1VCPSWRnUWwmNNvwCvV4XPci6xM3Cv1bk7MM3nGcxkqE6r5BZ8gG6BypaphPLbfWeAbGbtYMGT3SosK5C1dC",
  "key35": "4Mje8o98DfwsgfLojPhd7HCWM1ovUNtNkLaF9Rft938E6YPs2fdc28WNLyEtK5GQJp5nCwQ34YTrWkkZh5MKgiQ2",
  "key36": "5zqswfiok2rpDnoSBVcbA9fRLnk2uJRq4BwKjofASstkzQRymKbuyvLgaBQNGoPSqaeHkU5c6oPkGywPGvHqaPvX",
  "key37": "2gkDiu5Tu9QapdJQHWYGQnJ5Nxv54pcoLsqoBPBdGmz34MDRapE5UNsLv8aThJMwJKVvcuKX4AcqwLgH9uJ9D2fa",
  "key38": "2x5BqiyrK8o89HHxwsCDoqG44d7FRQy2vHozqArYxVmo49i1jScb4vokLbRJ9M2d3tyenafXCQtLLJUzQUWDFYMn",
  "key39": "3YnJWzZdTjw7zqRCEwyHDpvfQRRZLQKVRKH3kq6fj6ciELmV6ebtr9RYtYw71BYkhpCV3eKa7ov45ZPw3Uqzprak",
  "key40": "2sJeZfnoitgvbMmu6aAzbzBZncLhNzhv6m2QtphcpDHToQYXJgTHgnBTxkZvuSMxMFH3fMvqJe8ig3GeyBhdejxA",
  "key41": "61CECV8TbGy2xYQN3SfD33F1tSGX3u3f7Q1BkLfQSdwyb8znN33X9oxfWDoQSDXoJFhV8YvKq9RApgDSMa37HRcE",
  "key42": "5ShTPj8HzRrBAwe2nBGa4hioiXqpGu1EfVeSJnDFK79XXdZopFFR4j8Q1H89E55iaSwgxP1QYW7Y6fPhxHguSuHi",
  "key43": "3LqwiH6AS7Lw58PgJVfw1ZTKFiUf6vyHgJLksTk2xwsPUEPdRsz5qo8mApyNj3zGrG5kXUhpNEmaTVicN1ax9YHc",
  "key44": "PYYfQGAzjTLfCqT8bLzvoGJFYc2zpMHT4yw8gjaSCUtGPDDKEPccihT88GjncfrN469ekrBotnzV85u1yEPeHxS",
  "key45": "4cpC76fJfnrGiQq1pqnMuxWPEsiv1T1f6JLuE2ckQxksvmAegQV8MHPNaq7hokw8XZgdrzrZWodRYH7wUFjQDkm8",
  "key46": "5dQu6aFDbsfP2YHybBbJJL75kTKuPUyEjU23vyvtZ9j55CVea2bR8uprhmT87xfhKHCZdCmvCxLBk5MfHVBFQ2Lx",
  "key47": "23RN5YpYeWhWH51HLgUZKiiVGtfsLNto7HcCN5kVwaYchf8zEqTYoQ6pWXctL5JRdWPgh3rW3B4WDKAiCH5RwHyi"
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
