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
    "4AobK7xi2rtVoK2iw9DjfF4B8ihi2Ytwe6xCPLWmqTPVueeQkkQGSE8cexKzHLhNGKU8fDmHa12ub3rzLnvqhAZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMmgh7hFFSgkF2iDQ3eJB47qXpix3cMZVMZrb4QRbgKZdZeQwmjbhu1B1yF9if8DvuKa29AegGhFAQkA1cxp76q",
  "key1": "3HCR5n8Jy7NCMsAAa98STaoimqcz82BhjqS8Xnyr47xFLWGUgso1qk9arfVtZkNha69mYhMonwv37J1A9TGVbFa2",
  "key2": "2t73dHdqs9WJxxQyCTj23AAKbTxmvWow1VnqE1RccHkTDC775DVXX5pFY6rVLwiASjs6Sj52xLMTU3k996ztbnEJ",
  "key3": "gb4fKsQobHqX1SyGjFXWksXMH48NHqJamrwc1gjhs1MzdbYgFmaC5SKsrrQ4qCuVNRHRK3Sbxhb2fZPD7Aq41MR",
  "key4": "yHp1pfUXs94gmDM6dVmYpZPpdbTjG4s5TRF3Z6JaHMrg9b2RcvDEneUz13x54hAGqge4bH3qKdNhyaxAfVh1hF9",
  "key5": "5c1MqEuBh3JPjoptPwdbUdYC2wBCjxyGYjqa4tiuBarFmCnr93AxtGK52ZHbXHQ3wyFobJbrFSeGp4sir81PTrZz",
  "key6": "226w7Fi6QASXD1LTa5KvdAQH8HhyEMDQLQ7f3oYNxXZoZb5WfASPrYms7vhLkodnY7ST4ywFV4AxdPFJ1SqrXQ9v",
  "key7": "4YdYqdoEcLxLZLhVcvuBzafmnkX82SsnR6Zr93uqjXYnWghtJKuuf1owe6S3KHCbwe5PDyLv5ov8kUvVRv5KVThK",
  "key8": "2h846w6jPUfdYzLPjJwtsDPfGWudGaWiogXEotdULHELKjrSCyjPPPtpEpiYpr3D9sQ1X5EQo77aNqNshCmrCfeD",
  "key9": "4NjKxwWptub3UnRaXPzdKq9kRgb4qqFusVHouwa7gWJ2c3fnyLiaTm9g1xxqcKSBdteodWS8QVqnVF53Bz24Tf6a",
  "key10": "56p7d6KUdBv2R2fAcvC29M5PPu4E1Fy5Y2jXA2FStJ2dF5vixJnXZwc5B17cCfwRC6iEvny4FiHyVgL2yP8Pc7JS",
  "key11": "57bvjLJjLQuuTE7sraEu22kpUK4YwUGRA3w1aYT3RCdBm528W6STTJqYFYd2yAgZu43bMFHjqS5EBBch1Fi8P4JQ",
  "key12": "2FvVN3qYv95YsoanHQB5G2XHwxf3BgbHtne6aE9YTJeDwXexCWrKzBRKz5x43q28GiAxmrcC2Eovj4fK7KptC9NE",
  "key13": "53ZxTMgai2pFAKAJU2ea1ba9is9oxZA1Pz79UyzQBDxscsyXnzcHDwJLPc9ix8MrjXFS927NuMpEG7TgbLfAFfti",
  "key14": "5phq7uyrvjyXbTgjyGgU3Twu5CPFj9DFzNZWVsKNyaqptSn5poFvrFLAu2daxhqy1xtNvMV111CPW7d9oAUEVuv",
  "key15": "3RLL1J1YL19X6mLsCGjcTxgvdCaugDnv5KGje1ggmB6WRw24mPPGzM6RNkedjhDLN5vgAs6xrPwCM9HabdyZHWCJ",
  "key16": "2oKhv4tv56fVNBhCQHn7joQQEmg3ih3725tqBKJascrNs33eBqYvste6649DA3xpMxnz3Z7xUKwnLa54FZLZBK1C",
  "key17": "4M11JDR82Vq5wDt9HXJyrUXCLdV6fACV7sNPvYqjLbW5ud3gsNbH7MqZLdxGYDmi3yoejghnaN2dvSAU7m6UhWKM",
  "key18": "uYgfCzBgv6aB1oFH1YvUekvHoDg1DaM2WU5AbnnBTRvPzMs8NSVkGjd8m6xXp2NiZAZTwCB9SWMzfPz3RPEz3WB",
  "key19": "5prL5C4ryLvGCZqw2swipE6voftPzrww4az4nD8ed9DTC1LbjpRTwwotKjLgdrkjfmmZfWrYZc1RwyGSacDu5Shx",
  "key20": "zBESnnsNF3ueALoQ1TPV9kkHvSSrxWzDgcEKG4Zu9NdxuodZPT88taGhujpTMU9Pndr6H5kGTTC5i8URUG3VcLy",
  "key21": "3shEV5fPYQeFVpiaoSLKfaQM9Q1sfLGqTJvs2ZdjFzBAmNVWy1bAxMkfHJxXbD6Pc3ogeFiUknWwNJV8fpnvqgJu",
  "key22": "2MACDJtm5vR7s9VV1Wu7gZ6uWQbQLwbeEHnEeSwfDS9zpBtN47TPXkXpjsVBN2KqKk2Pwk3ogdrW8m7SRvcPVro8",
  "key23": "4QSyr23BwHAE6FKp7fDxvhZT3UscAfdJoGLkM8dMwp6jKnzksfUzjqwS5JJVBjhQP6VzLygjmjaJTfAU2DLC1ujX",
  "key24": "2FNcB4TEbH6q9Fx36THhhDFfNNbYC99Dd8vPdjMhamtkWGuMtyw1iDwxgiJWKMBu9hCkNdxixvZmYhzuA2UUPrym",
  "key25": "D4XA1eZZHmt4xqj3Q1SEnrH8tesQFMLRqR2BJGDd474xLGMGxMt2aghoYoAS14teDfvTGMBBkWyedDG5T9EsajZ",
  "key26": "tcJzwAxAjaf2rxTFPTF1dt85P9LVThDFM5WjZEVYtXwdZZHdZwSN8mjaQbUScgjYW7VesqoRQxzinpNG3jQH9ja",
  "key27": "4DpJKWBk3ntu2ao8rkiaqDzkaGZgjBz9YjXH2MdCTuWruCpaKAH84Nh3jRchFTQ7BPHFZ2Qg9DhgsDrzrVFwdB9C",
  "key28": "33yxeJhB7enQU4pcXdQKzbTYL1ahEGWEb5XrfccmRBrf7yYmNXMx4fps2dqXQbuQYQxQTwhiS1a7PBLtf8fEmv3u",
  "key29": "5kA9dSe865YUALfeCWfvw7GshPee2GjNpcQLLzYTXkBsxMmxgVg8tmJLZYepyeBzY6b6C1TneYG8xJm8j7nQybno",
  "key30": "3rVHxwWJh7q2EWWPAyWtMwdXMjE7qcWWq2rAHtdqLLTdc5FneT3tnqa2rGozjAGfcJrumDhHumUs25jfGoW6MkpN",
  "key31": "4WwbmaGUqyvMWEaYdwYZdr7HK4FUFpyCStLuzE8qwPymHPyVhRaGyBZ78kCoSNvjkgBevgQt9QCHMYQ1gLGbCZ5f",
  "key32": "5N5waCoRvwonWDzUsCVPjfQxseu19mVv5buuruDn2uQgcdEMyXT62fmz89cHndjFAHzwosczsbz1KFfVLHa3fU3g",
  "key33": "3S4vMoCBDG6rcmbg1cn82dFXDW71Tt2fHJyFr1CLnuACEubDbG8jPvTgNysAUwMwjjkxu1TuCVaX4uGniXPFdAfu",
  "key34": "4buhegCffkXDgyFqeFGeZ3f6hvydoAx85EVy68Mudf461dptjjHT1KTiPV3oA2CTSB7PFr8TTuhHq5sXGjQjswfh",
  "key35": "KYAZx7iS1QSf7oGCUaAwvbcSRiGisYwzRNKLwGbtXLYtr9BmpFMki5mPdFSENq3rpV3K7ZGiKUyrkpj6N2DEmf8",
  "key36": "2vdUYU3m4pmo9oaxfqZCbkD7YLTz5aK9BP88ezFcAvuNhiiS5sRgeYA4mwNR1Vk9XiWNBDmM8PiMGeTvaDAM9m99",
  "key37": "fmECjX2RVGX1MoQWcTufpDzUswpz1oB6Gg4Duzt7ebDrSF1RDo9kTNgTViUQGDuyeEMBMLenNB3UEdxMQyhuLB6",
  "key38": "2aGBhUpKJvCpqN9FuVcsUh6MztSWiwin6iFzqW8VUwZjt4RF44KK7ah66AvJoVD23EP2ep5yscDynL4oMkPva9We",
  "key39": "sQ5qejsUz9bkcBaTDmykrQieeAKeLzukkMAcQNNopL6pEjwMZ5vxgrsMbTZG17bf9GoNSC5WHQxes7d6XTLo6Ki",
  "key40": "4wE1iW1aTGHiEg1ZdDkaQbCTkzYvnnH2LV2mn5Q82f6y2uSkHK6io83kopCFqnZWkR46BeW5hJ8GbVQbuRVkoKK4",
  "key41": "5HNA1E3JUaACPVMBzRYP4FkS26u8uHVNLYH6F8H8MaUuJZJfQhsccpX63LVtTVMp7TPbfR2zNkjgzoFk77A3nsCn",
  "key42": "2jtxhcLd1jE1xcki6EjbA9Sv5su6tBduaKCrXjRZQPTqVbm6uQ3ANdpUvsMjDYgKRZQ2L7v8a43BpNvtherUtRUK",
  "key43": "2JQPDyLGBJwsHN6Vfo44kBt7EdJ3ULGzTkpzeBKXWgAcqChkHjYvmfK1Jwd6UKLMDNHLqjJd3sxpeZGC1cds9Tpb",
  "key44": "4xAmXoJdRX7KjoQViGawnmRG43piyw7cUxWis91M592zR4SnQkjpTT9WPaLX86zUMfRyNjAJYLpphxgKGdJi7v6G",
  "key45": "5sweaym2JRKuVj21oTzRywz9qQbfETMEnce8TiShdnkQkvcT93nZZUnVB5YGopzxzA97GV7JHRjfwNh5SAcgDeCt",
  "key46": "3MJemi6PqjVm4ojsLiynfKUX2n2r7BM6U9o3JczCYCZYBJyPv7nbLVjLG9czFEHfB3r8WRLrZ3qiXT5owsXVPAmX",
  "key47": "xknFPmM5mDwatPJE7xkXaSfBkFq8jZn97bzE84qCWabdh8k4SmtxNfxRTN3R6eC3mC4M6hEZ39eV5eatKeXGoHW"
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
