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
    "5izot2LYjcbSgDn11CTVT7PuuAnc6q7sdrAW9anQhfRdSEnsNia6RvAfmjudNPWpeLXABNdTN3pBaJP6d2SkuYV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u25FADFZUp4gYX3cS8dGathbsm86ygJnXCnTNSJ3X83gxwvUCzhXwqrSppiQcC9u8scJapwD7QNvgjzVY8dNQpY",
  "key1": "65Lnz1Dh2K7cmgNtaW11sSSmLM5ZzxLG8PP1N8CSwXJzxuDjCsGhDJKEDMpGugbmSA96PWoeTdV7QFGVQa6djzUe",
  "key2": "3GNwHaDyWjDoTCamELw5aP7jo1zh9mDx5g1wJBKNoUQHtwgy35vQiKRKypCDskCurX5TSQ1swzuVAk6o29QgF93d",
  "key3": "px7sPf1tjxuJmxyzLN8QWhnJisjTrNrYYAXdartnefY9RoLuj2qKHSM9fdSTm6iDQW35xnYKWYkaat1VzhAgHFc",
  "key4": "Nhq4jAVFTTXZ2vrBbkUitYiCyEPN58mbim3ZKRY9jyT9yhXUqyZfJKU5XwCzp6Qnd6Mc42TSJjxTm2G27CDxgFV",
  "key5": "48HeeU4zgtPhPtbjEHkYqj4tr7Nbejv4jCxnTcaxeiGnyF8yEpQFYWWzb4qKJV5mcy54yCxoyDb7DkD9SC3WdKm2",
  "key6": "5mb66AjZS1hTnoMteryRFdcVkdEtmspCfXdJPXTRH2QFFXLvrgH5Gf1a3FpzmEm6LyxjRzDyZfdN1X8BSQjBcNSc",
  "key7": "4NNGGQhDMkdH8pxeUUCKDzQkH1CCAqH5KBJj8xUi3pFZ1dF7b3eezeYr2kPY3GtnUwoQCYJPw6mKmr8aAD8GrUw7",
  "key8": "3UowZZZsmjff2nugS6GyznUXZEV6KgpZkWPgVDLymn6DR1WaxjPrQ3vEiZKkedvUYqsuK5sUZfnaKusaRLGJCtoZ",
  "key9": "2fVx2yJM4KL4yxKLQKtHeqkaERxvQtoqkey26E6MvfnDE1jieawc59k68BWg7adQXdqVGmVKnfDMtEm32tFTfSnu",
  "key10": "4pkq7vnpq1SkUmNG9BfQGu8dfXCGhb7yTFdd5jBrHvQRPKGaWieCJkUhbnpaXtCgS8dWN7FKu57K7iia8RgDKNtP",
  "key11": "2WCReLxYGjnrCZLufveN8HboaeBuXXnQeN78YG86owEBzCL3tFqAk3FSo8p1d4V2xYJhVZBsFUj3idLufp4TbBLP",
  "key12": "5xtNgUNpc9Z4geH2tJ6P3hBEUEn28FP5t4HVbMphBAd7762CKwLgH5QpHXymBmVK9qy32TBKrhirkjt7HjeNLFwK",
  "key13": "XqDBshr7QBMa4tuKpsiNhw6eoj9zR92vGUGBLnwWenVT2TAgV2fxw2nRV53vxMdvsqXawhfqMwYvcrzoRzBRyow",
  "key14": "678PdBzP3RhuuoFmtYQQZdzYMQzrfe8gDm5kkYzVrpsdWzYjrVAQLZyP39o8Dpx54Tkf1fnsbHiFAJfm2vc3M3Lt",
  "key15": "3tLn9WRy7UVs96G4SmsCYwVZcqW6J3nwoLzkYEof9WtnL6zsnaATrARgSDuFXA3BhybUTSn76ecVq7shK1ibA4Cc",
  "key16": "2d5vx5JHdmk3Rfz2PBHbcmyJqkjiM6nRaEAEqjrJTzH1UnQheeXtAvGPZriGRuYVpbYVGHvSLF63XFNfRJv8fZNt",
  "key17": "379mDqgtgssLescLH1zAfppnhYgvNxRhZPyPY5nqfkzSW72SM5BXpvqceSPnPqwx7rd1G51Jr5QnXEPi3kG9MC3w",
  "key18": "5MU3yD7sGBgJZDMyuZWUSo89LMWZUNKTHK3paKMPhdS9g4qUkeVF37pHfnin5jmYnRNm4hvfdoH6sfnni3vB95C",
  "key19": "sHbKxQSptu54yhzbwFc7aAkFAoVDU3QiCB2hqVYq5ECRU4rYkR1eJcCfzNknwnyR14sm3R2Bz6c9UsN8hnp6SrN",
  "key20": "4B4xh6UeUtmjv2K9aLhPTTdSDB4cM2TLoY3eWX7uB6dGcysyZwUhkxsvMLdc6yZzP6GptDuheRLUnjUnRV6rVX2R",
  "key21": "3Z7b4478KNAMACjiw6RaQfTCAXEXM7NDyPYyFLrRbzHACkcNbHyxssXFwc7cGso7fbVGdJqdMjqro4H1Dm9o53JS",
  "key22": "4XJjTom58mEYTWqmsHtC62vK2ZLRysh4GUK8eTLCcwqDiEX8s4tPCsrQcFuvwsYrJDtCvYpWzVYbHZwyHPtrPyz6",
  "key23": "4wfhEeLnrEz47y9n1geEezYSDCNXYdTKvNR94o3E7qf9GEiqfR7ZQNMZ2hwR9TibbocPhZaQZMLVFvPKzr14R3fS",
  "key24": "4rmZBA6emhSptC6eLtWk35GzVqPjemyzATA4kZkXCBaCEPU83BD4DjeeYTusGXLLRynn6512BpyFsHauyDoe36fr",
  "key25": "5Lb6i6k1c3R7pPHgAQ5kb48ctCHbJwdzXcZc7me6SjUreagcGWnJziSpcs7dBVRJqmeb3yaaMugKUT6xubfD7gx",
  "key26": "643TN6Abr49kdJMGBrmBUwVa5PjyRfF7DNfnT8XeKjkThfevsxxqC3DgmStya8Dky7jLXp2NS4zK7L3A4zRix9dX"
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
