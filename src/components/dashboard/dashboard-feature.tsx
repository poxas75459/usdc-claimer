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
    "mA4JYdKkHSsnhZG8gBB2gFzmtknYKQ25x2XgQY7LxHFBWeYsXDdNymVVin95Y52ah8WXD4fTDQqLxcQ3EURWtxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihT6NiqjYZWQ4cuUCMcuwFXVB74br8BgWP2hWGCwAqHB8W35jKb68Pz6shhnsjsMzNriZfm4V7D2EzTHMPPEsvk",
  "key1": "2w7ANdAC8zeKX2YU2EcrkzPsuu8SZYNrnXffw3HN4VtBEYZd4Dp8DwgSUse4vQsXGwBcpDkCzGY6LWoED6aGRBGB",
  "key2": "5vnEDcQaDxZXE9EyJk1NaiGA9VXrMyAr8GZxan8qjtzdGARBtsGcT9uN4temvcK4SYuW9ixbqWPD2suh5S9BXVsY",
  "key3": "2xHkxRk3RgJGmys8qwauPBtAugYxMSMcV62pL3xyYYgdzuh438BudiggEozyM9VYjPUdGQpfnnP3i47Rdcj1iWZB",
  "key4": "37X11EActxZzLmFr6H4Kid8tcQfFXDPQNGXqxGLSH6er6kr92dmp2Vp9tu6DfNKp8RjLxaJ5Tg54uRzK1PdcsyqJ",
  "key5": "3qwHxxA5pwR838fHfLJKqxkLMrpD7MxFPgr3ibGDQtNHeTqdk7AGTQQFr4vjL8SS5VdEHtknQwcNjwCXPBx1TzsT",
  "key6": "5izTbL9qjeujhQWBNNuXT3HyDJct9SPtgesnXSPX6wcicNiDbah2TkXbn8XpKopY1xoZm5WUJFZdwmKSFn4dmFSk",
  "key7": "2c9AXcgy1DBS1NWQ3q6i9QkAoDSdsuGTYnZFSCPYxniBupxFTrQmoax18DdPFTvhejJwgNez8bgyJjLg5yHLEC73",
  "key8": "2i69K5XggKFCX6reJ27zwF9gAWf9r2JiqxUjk5M121HhKVpUGLNMewNM3qUzwbFTbQpWcELRCxFvDKx4i52tdnjE",
  "key9": "3t69iEQyUqJ9JTX6eYyWGKKNWwqwiQxsTpZno6dnpW7XGPbdrdPVL4r9GaagdC4vokTJVBtWWYoEpYgqEAjiGX6x",
  "key10": "37v5JvbjYKYmnyyPhVQeRinW1jHMzzih1niUXgq4RbJVB9TMxCPTtqZMm9ExmjAivDCRegbrkwbF8qnZAD31t8Bx",
  "key11": "5DQLr5rvaTkgBgQkVKFLCVTLCCwP8sbFe7pwpq27TcSHrxn78pD4ZGEPGdaBYpR4QmjzZizEtUhQ9oZCUWLiqsE2",
  "key12": "3ru2XfBrbkaExTGUqkMQ1q9AMYs7MNJp75WWc1B8qJcSgqhruW6y3vGpHjab1QiV2vytArvh9qcDGRzKPSGveNuj",
  "key13": "5WbchTwsPyy8PXW5oB6JDCD4HutiXTmRmod28XpNAuozLgeXqszRp3tKcAwcdS18dPBBqhfYre47mkCJwxPvFDgM",
  "key14": "gHNiJz39xjQ95HuYCfQcRrmMPqekjsBmdW1kVKXfV7zYW9c54Rky6HyS3wnaPrShmpgxk37zD3KbaHChGDFyWwA",
  "key15": "4QSENmsYj4nLiZmTwHop515TzCHT7NzYC9C9E5nyPXw2GqLwrPUfx6h2x2KyEfTJbEsb5r5gK85YvKBmBqGz4NRq",
  "key16": "5ZfCc3Pkm2T3S3j7EynddA3YpQWk2hu7eLJNJQpSqrm3tqqvcvUpu52ZiE7d69TAdfCu7Wu1322aAArZjHHNqtdU",
  "key17": "3vCXuX1GruA78UcLTsV7NsAc8NYXibQNSP4ttyWp9Nb2Cpn4FpN9zc3MzChJbuvSnuJQi9BbLkwij2U5tnY4YvTo",
  "key18": "5HjpnsV5cagWV6Tp1iaQPqSS8KMV59Z1snf5PKCi8UTpT1R5oa3pEG69HUL6b9sXgjSZZgW49gfq4wi2bCMuUHQe",
  "key19": "VEVeDv73iwArMf649LgA6CDHHdVtyapjWTa4nVi9szAoKkPKqmpUwWPaSJTKS5KX7iGqbShZsYegPRhV6Z7sQJg",
  "key20": "vLYmeSkyphNEWEyz9J48GroFeZBzRYhgNWuxPJ1xi5Dag8QtiyKFdc9hBFcCqLSvA3SvfViYpqjmeETfMTwNxvP",
  "key21": "4zjrRaQbmzjMRueZmAPUhavvVkGuY4kGDxNQn6BpAxdB63i1HGNMtZ5irkiMPsjs8JK7XCj5tJTBA5vfb1SB3WSj",
  "key22": "2Uz6wJ34pyVMre98BTsctZhVAdyWChbmfTvJw6KteSgHNFRaFqd5nZJBtfX1pmtoJzfjME5JBwVMSgt7hJjEU6Fz",
  "key23": "33hDA598BMnfbUq6aqwF8QkvQPQNch3TZMU18Vc2Wbw6fGFPm5zFWZ9Vb2vBoSDeWez4LLpaxNBZPbBHa4NChN4D",
  "key24": "5FQSAfRU3gueVzCA62HYDRCbfwJMnyLQPJdz2nQZMJAfVDk8TmpENzyfVkGrNkk9CZbxwb4oRrynJGqc4mDtbtyP",
  "key25": "3Gd8diLZCSTe23rSDdv6eNUDEMCuczH5UZBtdrk1CF7PpBqSWBB8h61BMeXwNy7g1rmYK9zMWcE8ErsmDUu2cgUv",
  "key26": "3zBamBLdEZAd8LeeRLxc2ph9RELr5rzGqr1y3QCHK1JgfWoVtAnJhhhtbfPvDiAd1E2t3xAHwk2N1EHcjoPfSgLP",
  "key27": "Pr34S1rKHS9LQ5E8ihcWKoR35zfvSDmrixXf9XjyTxPAnBpwwT1PT8w9KuCzXKtbXctKYuG9uJ4UNdV5gESVMM1",
  "key28": "3c5bkYGHZ7jZwvvWoXgjYYUYu7BxdcfNyzGXUE5WoArkpoJFeY5gkzW3spkab3quDgCAyWMVqLfRXzhvETAsVbzf",
  "key29": "3F7vrBWWNvmi2GMhFzNH5XNjyucengHXXhcmy72fVvm5mX78WfognCfjAtFfpMwKxoo9FjVtG7mtbNBxghRYHqiw",
  "key30": "3xmzD5bDeaXyFXj4ssbKjt5yfy3GE5z5o1g1Nmyqxjp3E4WvztjamZvWH4JmPFJKfzFSunSWjKBuAkMszDup2yXc",
  "key31": "2xK6gxptnVmF36mL8E2aQ3WUDaux8dMacqLxbgLoPvDhrpYfpJzKerzEVGQdyMfUVq6MDv5uBkAXLCwhg3wfVBxL",
  "key32": "31xVTPiT4in96ud88TPdKmMREr91SjecWR8CyEDPsr3pfEntyQ7BD5A3LEY3nAFYniYT297V6EGBbPiTfThHkL3U",
  "key33": "44woQuEErJCB3NYtXg2PgViFgKnrJxz2CrhnbCruDre4f78ZsLyhtZBdu6TrhGgogMaMqPfTbaVcSP1hPQKsfpjt",
  "key34": "4i5EqCQJx78HBTnwP3BmTz5Ys48AN4D5zbifwU8xeyUU32iDvz4cj2gfLjN5Jm65NJwgnM2TG35nj5mF8nGAMKya",
  "key35": "gPYeC7BDBZ2CLCfgnc77w1eXCZooCF2968Tk4cK9VCa8qdpGhGNBapd5ASK9N46WJY9fUus355bFyhGTKkVo2f4",
  "key36": "4wSFdF7eZUWXFUjr8yixYEAW8zJBZb3sExENBtyzTBHNA74MvhPg5y1YKnoFX2qxoRB7NsZQns46FoaboBhhhzAw",
  "key37": "4UzKWPVWXmeeQgHxAZteUXM1Nt7c4APit6hQzUsS1Q3TD97qaiwHMSVSFycZffGb7i3gaAGnaRDjwA9eZsijsbgQ",
  "key38": "c4D2QhRmcwcZj6Ut44F1Hf1CvAjd8yUzNqiZA49Xq9EPPw7Y6o1WZZgVgezS958VXcCvUXeoG4a9bToTDd2C7jh",
  "key39": "65XKzGc55XxaB17zi16cZmetaCQX9ViFkgQQcBYZHSNAEJinyyYuL61F3PkBtnNMzHFV7UJ4KR6xsC7GgBmTU8p9",
  "key40": "2yW2ZQkbeRM1VJp7JWW7TKeBQYc6Nw99QtQcLvK8KWzMxJJe8MVT7XZg7MpSuoAguT7kQfkU2ZkMiMjDxrSZGRGd"
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
