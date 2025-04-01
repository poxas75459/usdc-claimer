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
    "gTzC2QJ8HaJcVeqPNftogSnuaLye5Qvq2ijWhQcP3EZKqPsUD9VWudsYksBKfyWP98q6Ma2z8GEXBwL8jomjWt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKjrP6Leq83e4LjwVCWCJ2WgwbGCdj53ns9vqRRC1567ni34ED1UMhV2qThcaEZfrn6ijqXrxXNe1Dq18ek7eBX",
  "key1": "3KUP92Wn8TtFeJDGBGPZ7etEtJkB1pQondsunCUtrdgcCbcsSz7Xg54frsAx5Ypc5LUiTiSfv4QJxXTd2bXDwfCs",
  "key2": "5eJxiMkphCvFvriYKjooqp8PaGSaNYBmegp1vgPNPTH7AkyFqwVnEMH9T8CWQ6Xfbc3bdJvh3EVYCeNKvy5An9G1",
  "key3": "2Z6gMM6WGu3HWBkLiFJSM5vdbq9Y3FBDo1oWq4TpqeK7k7bthyyrDsYJxAZM3DrX8DcjFLSHrtFqPB1KVXHS8x5Y",
  "key4": "56uWtmdhBxo438PYctZPyfKbGqVJuUCEZFU8RdvuCobwdoqcSEAVZfjoF6CHJqfzoHkksriHoVqovMGf265zpb3g",
  "key5": "2kK1rkrPUZtF7v5D2aZQd1pQ71a7PcpwuSViVopYMLKdShSJN4PhQYhuV2nuYAmKtKRPAnSBVRiUxZV5CQBk1UXg",
  "key6": "2v64JiGB567KjFLxNx3DaoY2qctrziBiyU1PSsqY39FaGvKbpaMhYjeh2moNuQycsEgfpf9FbXC7c9yTsqMXgNyE",
  "key7": "3B3jBYemcqfhQHhV4JqwM6ZhEk3vyDuZoo8QVm8nSagEVZzVfZyR6YyRcBLAyddNqSRtDbR1qCVAZycnvbBP93mT",
  "key8": "5odU8NSeDUtg8BbWXo7L8bmGiASf3EfzPJ6xmFJUAza8Gno9CHW975FZrdLbzCPDtDMW5xLa5ZkwyVZZMYmsKGvm",
  "key9": "2nsfFk7t58kKBMcopDjqyoqY6VhhKDS4EkR35NT6tiqnku5eavvjkkKvVkqtouiqampsmWPMdmeqseaFKSMWtFxt",
  "key10": "4jth8Jj71DqgAC2bePvqRYCEDwL9EAoh8NiWktoAN7vne4GqUpUp8STM6PhakB8qZWacHp1wVxXsMokbrsbqfeji",
  "key11": "2aRRnRkzFL6LRmfnfZNUvnDjT3RzPLRecxBFT3tWAg6wxeHBwSPCDRsXGDTYxiFBeZ4NKzdPx8jLvk9rhSEdFS8S",
  "key12": "3NBLLixHmxqqYXAJEBRV7Ync2acJ22LQ6wdnZ8DvUtdbkQ2Y4dZqiyVooBjBnwf4Z86Ac6JRmCA1Dfsu7Mg1jCP1",
  "key13": "2jt5ciX3t1S2jwCXeEuVGEqDmDHtq8WN7cLSHK2vGb8GMfEtwUaMiPappnGwhEJMQti2fumokX8sqvphqV3exQo5",
  "key14": "3Bcc3vQR2rWqNfRLFzAL9tPNyM1w3RcqAkMw8mDwxEEFqWURee1NNaAn9P5HEBh2ojJefHXFKFy9DxuEWXSembBc",
  "key15": "4q3Z2wwYpc5CXNF5WfyjDy1gLbH1anDQUpAzXmq8yqgTLRcmD7fyT5y7vf6p18iGEmuQti3S7Bm1TYEP4zxwY1xy",
  "key16": "N1WzmZt8xAmr5xfVoFHhc2rQzKEKNhqQvRn5b75aSQnG8TS77BEkSM7R1TosUDwL3dfDTTMacpDTh36nyYMH8zv",
  "key17": "3TywExMPwz2hBeU34piDaDLbJEvXuJndVuJSJqXMs81cMqtHdHfZjqzhHvzBJnQba74NQVvYconmLVDL3uuKkGko",
  "key18": "3UsySZ5WEJ6nQc8vrkoQxjRvDm5MyKmTv1jzBMqfASBBP3oQtgRSivWM2h6X1qRPbJ4QTprkzapxMmkkJddRMQMm",
  "key19": "5uYNmtEdczQyr5WY25BDfZJuKgN1i4558gA1CRPEXZyYrw1Qap1fjhYhFqHfRC8wYdL3L9mknV3FS8qeZ5y7GJf",
  "key20": "2UNLAzGi6PJY9WznPyHd8QqbrUEb58Tv2fsyeiVU68rvTzHpWE9zWHsi7jP7CWMmyRAyHHLcS6nrnmfD9dQdx4bH",
  "key21": "zh15nonY7AshBsYycAE3Q6Pn9vhjcmE2wvBbpB347hDEqDWw62wayN4s65t4jT7chTvmCaHSsz7PCdC6uHT8X2A",
  "key22": "3YZedWtyW1MDDPWrJnT1869fDjobE1DjS5w5DX7Kv32RtW5fYok8tyty8J7zcrfn6VGoSjsY7x2xwXnECWRj2DLM",
  "key23": "5cJd9SPyz8CoHgZAWBW2k2xpTNqt9znRJQGQaSGwyvtr7w948XBbs4i83uN13PDCEBz5WQZUgiqUPn6bGjSfgqMT",
  "key24": "2z6MWq4FB7yDdCFvA1cHATWxibLdc3gnAEHbvhT6yh4VDxWxxRNQbYqRfYeDsuA33aKbT8rcpsADeQbXhSjZt9HW",
  "key25": "4fvC7vsHvqFc4hmJJBPU7cVUr35B7pMAtuN8Byo2j4gmu89scJ97whiajSNc1RbdbHrsEUZNi77eDEdozPy8Rurs",
  "key26": "4fxrBw57JZsYC4vyaGMrffwkYmsB8RCiW5DGSQ3t78GnCi7bPgRrGfYpKHfhkkK3TL5DbNRi1ckMZkoZtupC3k45",
  "key27": "322ZJSsnnjFQFsxnTR82pF92BaUddjwWzQwz4TkQaoTigR3H6HWAsTNz3PjdSJ3xQ732uN5DeQosa8HGRHWN2ets",
  "key28": "67peBcxMn7TQh8HNVC5My55CfaYAAfBmo3PQLkZ3oRMiGQLaYYoCX3Nc76NT4zqdBkaUUqnmtbDgPFDse345g8rP",
  "key29": "NDpqaRAgHnafaAQ1rcrxZuhdzFmDJhQ2gnyxNVq8FYnBKYac441c7gquTYoadjyh6GL2qaw8XsybykpTNv3ymS4",
  "key30": "K5tazwG38hNrmJt1PW4V7CC5cvsBQjM1NAv8ZzsLNcjTNNub6xkWcSnTmtN9m3KKgpcGkxrks3eGPLiiML4KAHW",
  "key31": "3vRfzuY2mNd8KeNvGSSWPADDYYEaYCprX49H7doxFvvzQn5jDq4DMUaKNW1Kx8gA2sn5ErnWDnuCJaywykXuEsxP",
  "key32": "5phxCLUzUrLo1zWKeiQq8eysPXzbavcjRMsgKFRhPQPkcv5BQCAmrVnFSQEvxBdtG4rCmGy3jLQJwurzTe8iN4NR",
  "key33": "2FFe35fN1GFwPzNei6bed6qsaTimgiAETGgXspGpm484nkobNaDq6XxfzR1uvApwjJffjErZacPRpR9d8g4b9afW",
  "key34": "4GLzEjzqsLareJALZRPFBtjna31LqUnwPVwoGSybhCFsJdjrRmc523gW9QwqTR8qc5k4CoB6GAXyJ6qy4xwLKWGn",
  "key35": "4HpRC5mJaDYTMDfEoZfbgkgE51ThQwMRj12kuyuiXmjRoGfUt6PNdGDsPasfFYhCfaRuedRh2YZXMLwHh7dPSejS",
  "key36": "3faBq7sfurQdjY5s4ReZif9Ufqwu6Uk3yBD7mJwg8EvE7wF7aBv8oCV1iqCDeMqTnochivXeLNzCkZ1vatC3gTB",
  "key37": "5f6qyHGJuwnFZ5CGHaJKiLDh7q2cRd8s4eCE6orcAq9DuJwSvxgWrY2aAcJLW6DpV3YBcWLh1Qun6KWN5CyePdAx",
  "key38": "4Cshu5cZXFfPa6CgDiwFXKotXuDRPJYqjwdKPWNAG4Z2cnY4Y7EXP294oyTF8Qxivt3gCJdUb2ARaVAWK8rSZZBr",
  "key39": "4LHvk21YVgY41YLm8LBMhcX7FUfiT4hZJaVGaBNVgn6ySbNSRtkhYLqjeAjrVNSZF6g6pPi3Ve3vE1qMZBxZqbSD",
  "key40": "igPFJ3bCvbxD5f1os3cBjFSnBNqMHqPWHzaUVgjfCeV4EXFZctyYi97qfEmAzCsRHrHNTGkrxurwE2k237d2cD6",
  "key41": "4tuRcy8V4BSYUt4jwrkYWEu23zYy7TejgMNcx2gVmbZBUz7NhdnVvKyCru4fkkJSwsPfmXiEpiaJspdJnk85YHNM",
  "key42": "5H3TitsJU9DbiDEvEzgwMfYdvRrE9PWKF6yepsynucr3uNH3YnEUmAKM27Zh56NmQbyt1EV7eVYvYHqV1sUBmkDK",
  "key43": "p3G1MbCp2xUKCByuPDPzcTPrxKPtcX8dCd5W9eyFX6Aje9zRTPsqgeqzqUQrLFXK3pBkEPV7AVWbZJkZeB8UqmA",
  "key44": "BDZCTwTWpBipuYAkzGj9Hc4EA26JMM4k1cVB6mDt8Hf7DnTu51FYtwihT4c7xy3Z7GKVeKpt6ox88Nqk6fiiFKB",
  "key45": "XQwUWBYeSEqho9xStzDAXGowXmdMoXtHoD5yroQaKafSt5bN3f8VbPqupya4dbpaxyWVS9bBYX9bwFBvesSkHGG",
  "key46": "N2abi4r5AKjGFMef3SeaZ3GxsiYck6ZKqwuaZ29J7sJUPW65GoBXU2UjzjoqMHgw5KVj9wEQbuTJvqNwjGUa8Ch",
  "key47": "aRkVbQSAJTUx3JzGM8fvsTA9rHsVK7qWKaap7Qyoh4qxwhXhw5iheS6Ej115L5sg11BhvtPuVosrZKbfxfMMThS"
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
