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
    "2VDmYzvx9U2eXvn8Ptm59CqBN3Ssxuzcqd87j1tJKSe4DCN4T66J9h8vXaGSkKSZizGaJQyoja2AG3EYMEHTXNNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFfNtTvJz142VKU29hSsDQ8QBm8JsUs4YuRvCVGN1b48BAABoYdRQPaWmLzQQA1Y5AgFTFdmArUrxqeiJprwu9e",
  "key1": "5xuSNj8N4nmLEdZB1nxN2ZcFgpb1WPbRoZ55NEnhAfiyru9YNNZHpkCbSsdfN9A64DTSeHmR8jEfEZUiZ93s4sFo",
  "key2": "28iphGDCGBu4h6L87n71bgMCFn4cpTh6FF14HhYbzTbb9ffCGajDBwwqd7JUzcAeq7WhuN3i84cLaDJEc93bHNMr",
  "key3": "5Bk5x9g6fNfMDqcAyEzpsByVzeTQMAwVuGCmgPTCDhwYPdF8TR8bPsqAe5DYaqJB3S9y2E98eFPXJvHpK5tGFp1U",
  "key4": "2RknvkUjatvVu6jXSiVrUBQ2EGfSP269XcX4ZkFNddqK2fuKWTW9ewFHF6K1ZhSEsuVmfWaYpTdunoVF328w2Rxt",
  "key5": "37L4He84FJSdmWAhFfXKsz9n6mgUhZ3sSv9GYA5SEuCgZZwXXKbTsdqZbJu7hrQKBmamx3NSKo2PRTWuRuqkwnA",
  "key6": "5ELgMUAohy95PxERQpSPKx2MqX1WXeQi34rgfp6wru31n9Mp7cQYpXP1MoerXXSHebzBzrt9AimC4c9QVE5FaoN1",
  "key7": "5aPVsi8Dwc5bhqW16rhV2h6XXBUvcHVT89R9c64AneHbvpDhuTir6vFVSCfrEzLuj5UKLmSffXT3e6H5yhB84Jyc",
  "key8": "3xp2YiQbhJCmC95MpsCXKydgheAncHKcpFnGR9iyDVAgNKPsMcuyqHwfpKPJBxmpvZ9KwWA3i3g3W2AeeKURPimS",
  "key9": "znWDQ7CuCxLsqcenpBxZk1c4jKt1DLWnYRZys6ZcPMZpDKimXgPsz6wG2yjQ8CWviVea71P2zubL79Jz8CRSbEj",
  "key10": "2V5iSCmWQxCtrModP3BX1QKDuT76nX7BwovwKGPpeShBXhgb79A2KGYzqmX4irmDhSa6xrqfsKBftxzJvN1iVoSd",
  "key11": "2a9wbHRLBgaTsRqEDymd4CAWs9yWiGgTDKqvgkS9dDQUb6vVzqGiHnBKeZ4tQtpst13G1n7HKNoWkuobEEXqovpn",
  "key12": "4wiBprcc4SragXeRWckwua9wG2D9ZLdSFfaHeCtBZtZqc4cYZcjJtRDB9VXXjEzPtkafEVg9eK9in9CrJFfBfxr",
  "key13": "4JEPH9kBxpWvTAeXmTu8YJ82B1eTZQEfZs74R9GW63hBaGoGVjM3xEhhnCa12F6hrpGL8ifAmNfu5T57cvM3q7gS",
  "key14": "Z6egiRR5bDjjTWmNmBNU1xS673BB5TvDwZFpj5cg8oFGX1vyaWfiqGmvEPzsiy9XHNtjB9eoKHGs9reTJNmez1e",
  "key15": "adwCEt3KN1cBSa7QScEZ6dS56apyHRaoqig3ZeyCKxDDdXFEVs8r7SX7x8aZ5Rn6g6895WLCvw4HFe7L2yJaPtK",
  "key16": "vC1HacmNHHArc4TcYKMJQMuPTup2RF6jnaA11ueUpsm3o66X3Zb2Ww9yQFWhiqWzsGFzdLTAbxUzrznk7QtDZrM",
  "key17": "4ZoNJGcdCi3Gdn59gsKFCDAND9KVZKECMscsgcc9emKXNj9npadXiG7BMMfecNgapeFeUKpmG1WLCuUEg5is6Gn9",
  "key18": "5fZbXs73SQtyNCS6vu6gikvqZzR8PZrRf4tEbBstcVq5j4vABVycwEod1cf5sfexSsFyVuAMZJigm4QfjDrCuXXw",
  "key19": "2DGKiTvVCQUWPLCxy1L7WGwzHgiJN1cYxrb2W6h4spP16MyWPRhiALATJi6Lsca95GLpXorYrd2gQAZBxfGNqY8T",
  "key20": "y6TyXVHE3Z1CtMDsXuwqRWB3EwPLeVh41byYyYu1Q2osFsTUaZmFWTvn7p6cdg9kdwd5NrXYkwL91FVV8w6id2r",
  "key21": "58bRuXM1kNed9VJdU4GwajeB3QzTqKuEL8TZ4NCfRjtm6pu3M4nNaEPqmLAQZkFwu86YTGSCuL8mJiPGUxi1VcAf",
  "key22": "2x8LzP4P21rqVtADWjPCwSPTMQdMbVJ52ErL231wEf8KaEtHmGEq5tbziTxh9M3QkZf7czaEhVNmebmydyRiwLHr",
  "key23": "ReCzJjsKAHCZeMg93CQp1Qw23Y3nZLyXqVZHc8gf5huxhueTR8r1SuqzxCVkeXH9rzqCufcV5DYsdAgcwrUUk1y",
  "key24": "4x6bmFeZxLWP4NdPWFA2U2wkEPmhWGNSTDNsGM4P2GdHjED4J9Facc3f3nJoGmnyTHRf18amdcSV2b4ed3DpvSS5",
  "key25": "2RUQPpCpukaucgEZpdJx9rJMtNb6LNiiMMBo57CkrPwFyHFpbPJjXD5zqXmu6pTp3nNyZoNRwvV9uqbFTTp2wgsP",
  "key26": "2qipzNTUGNni23ZMye8Nci4R6B4r2puttTDDovQCqQQjehFwKTAQLDWGQ3TZiZG72LmeznJkPT1aJWpaSz1KS6MD",
  "key27": "2hio9jJBG5hWkZGQrAWn9jC5Y5U3FdXkGzLXzV7x8VCehGJ6kfKsGDbC3ZYKoz74qcjZkLTorTCSZPL5qQR9fSez",
  "key28": "24sdXroJKBCaU8TFodjF6huSvBXCsD8H5jw5BbZfzBb4QFYgNhLa8YVuSVyqz72XuCg3KJd3GNz8w6teJ2TAyQvp",
  "key29": "4qYoiinwJFvK4NS4tor5aqY3hBJTpuxbwTNEvLXaWbTFeJoQpP2cmaqVpampAreX7FBsFCW79ePQkaG8KAvToNqc",
  "key30": "4K6e4L53bGoKJzzbGarU5C6kgMTEg7VWnuDtqYrAkboVtbFbrgN3qXT2CmmGf58NbM6cZihnUkwucDVWrqna81GY",
  "key31": "3tNhVqP7wqQjdp6f75VdsBry3WbUoBGwnwqJ3iiSUtVMMy1bzjzU3pmiU9DSyPdZymdgDR1HVREgB5pCoKJ2MADC",
  "key32": "5jJha6xTjNiiSPfeQLtp4HXy2qDWuXD5Dg2ivZa55LLMemoTu6SkM5GRCppjZQmcAB4FmMkj2DsxkVvS3YCj5eMh",
  "key33": "EqKw1yftiGuxZgpoZ99wVBvEHddnPnDw6AjQ4EgWvYST191CGu3ufgHi9wvzniycJc8xzAdW1yKtVuRrc9Wfu8H",
  "key34": "PrYz9yLsoYq8sZkg1eFTjfsctpqmgr6QTFFvm2LwwHxxxsUHkrfAjatAwmgcYpnoRYgZ5vYz448ekqoPi5GVgVJ",
  "key35": "5iG7XJetYE1fwtMbXSM2dn6LTbkkJUJ8br9kEBn4k6viJ4X8HmhsrshQfm5HyiiJC88GBLqkzFDVCjiahVyyCmtY",
  "key36": "2M2b5A6J3ro6a4duBPhxHca1p9NcMVztq79mhXKuyF8nnLc1p6idM5xciRXQqd6Ar4JpKXv13RNyPf8wwmYZQs46",
  "key37": "4YDaBo9USkYvEKqHZM1vT4a9KiwhPpkwoe6WPzBni2BRJyTuj9qBnxKHSxMHkdCpjKRWikKaFwiAMVqEJLs7HDD4",
  "key38": "kBge2pz6Bfu4jb8HtxpPcpnGtQu8576oihUDLtmWYbYyKJRjRMUVzF2XsqpAogig72CWrQp8wis9hzHimoa3Knh"
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
