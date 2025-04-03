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
    "26wsT7sswKwEi2DUVJbMs8HhLSMVreo3mtYHH9FVSEXyWpnB4vXgnfJmioxxJuALpLQE7dZDXKhLxxSP4mnLRasz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muUJvcDpuiYrmfogQzw3A9sVQP6Ed1RdKkoteC7L6Livx6ev5s2vmi9NvPu6H5fcTSGbYMYLPB5oiCag2LG7xbo",
  "key1": "74oDLBmnKxwG4DUibGeLfZut6P9c6xLtNv351CbuVWC2ETCsqX4s1Hxt64Ugao4jTWHRaopciZtdVUuabe412gf",
  "key2": "bxD6g3oo54iGLWaq7UtuaqUTMkVYJKbEJ1TdwrcXUmEsezj3QMUiMTgV4V4JdF4AVoau13JFvGeFMUG6YsbrUmx",
  "key3": "4cTBpVSTTzrvBEiR4pcRL1fYGt324EtatFK1rGxoXRrDvBK7Mde7jKYzmxKh5YFpcAU9nnfCutKnn5fUhX61WMe",
  "key4": "5Txqt44wdLjmc2s9JzymW7v9cciD3U8h6b68SB3YM7CBGurHF1S2SAobqKA5Kvz3sqQz66jFToQ2NehsMAwL5naE",
  "key5": "4GRenBPcC5H6wTQQ5dTgzAwXWvc8NLgVYZ7LbmxpJ6p6ZE5Q4dK3r3ZaEbooXvcqHCuBF9qPMG2tWGReZRnVezzU",
  "key6": "2LAn9VbDbs7vVSSVrSSM8NjneuBmvSefC2p8gYhEueZZ833SdmUmTVjUbZQfYRHkjMYQFMor7ym7LiXXXXmAAoQp",
  "key7": "64f1XFZ2JQ9Qwh9jSBibF92LgUsUYTEHNTFEsai3AYxcCPzgQRi4sgYod51McgUZi68u7aGGn6ZhWy5mEKQ9tMn1",
  "key8": "2MsxVv6FoKxrKnH89mGNL4vMv3Jq5cDq73upy6WzsY2YMbAzvotCE1pvXfG16bDgXf4H6iYoEw2yG8U1eS8pPVG5",
  "key9": "aztXXTrqSrzW2LwxKbzGdUjsRxZoQ519H3YdxqL7kaX7iyTGk5xVL4TvVZPCpUkeVMmVwGLpXSSTgsC2H2ErJjM",
  "key10": "W2oEHRCpX6ZETSQ1rRrSt4exjS6mVmvAP6YxSAZ9LZHoKCQ7yCv41UGuhLyMZpjtJeX71nMhv1X2HMtvhSjzZhc",
  "key11": "5ndH6vYEBCcgJnwc9JgNcDLCvH7HfLgjKyvQuQ39SJtNQkG8tG2uhprX4rV9nQdAszvUuwaQQ3xWyeMBoPbeAN7D",
  "key12": "t5CHh7g6K5TjMreeEYRZkLbfALH1VLtgkWQhR32s4fixpuYQBFJ86tK4MgNeL3xAyuxUB5miiGawYQa9N3Cu3wD",
  "key13": "5bmd6EztwWc815ZW74xA1MfeKQeaujRsaiL7cFa5bKwpYRMHLSqm4t2KatAW4f3FpmerNtrk84aTD32zCQ9yJo3X",
  "key14": "4rP82UKyWnPrUCBq7egkNR9Sxc6egb7ubKUPxEGTWFGezwG8Zdzw2u8saZFZJt91i4QiUv95kbHe5zMNkcHjUCFB",
  "key15": "55qHn27ZJmTG59dTsZxVZeogjptgvA3nEcRvXBPF3VnM5bB6W47BZQWKZTpBsn1dRdXFgcg3w2UY8VMPDjk4zWPt",
  "key16": "2C3YrP8jLLmbpXgR7jhdmJKRvxr5QF93RpuU762LWNJdJBfsX22RD83bLsjXyaQxPVoyNxNSVJ6RkyWuK933FhnT",
  "key17": "3nYgsD5bpx3LVk8TTudBEseuXWQLGfTD5dKBBHS4uKe7XsHWJswGtFHMLjVu2ougvTgUsv6HKp4aoGzYVUo8imdh",
  "key18": "2uDq3gXK3UxPYXgMko1bx643qhviEK4w3xH1DBVPzBGthh3FQyqUBprUc6KT58dGfMaYG3m2QTgcEuD38Ej8c8Wm",
  "key19": "66pdq63B45wwg78frHpegrJL2FrRNCickiHXrvwxFE4PyND8oXfSh1XTmPYSPZ9xy87bc1Af3V5mqQfUtFqSX3LK",
  "key20": "4kdhBwcbS4CCaUY8LXdvtFss4bvC57MyQyR88GRkvGika4UK2AXzfC48BknZZ4KxHfRfoKAyXmxnR5aWcL9RsR9Q",
  "key21": "eFeEEHVKrXcRJPmsPCjG11JubAF33nq9tefQK6w62g2qDYzVJL3raQUVEbfbBDGWRnQppJsPUGZvpWQqNYgK3AG",
  "key22": "3pyNTmZRxwentiontya2TrfcHtGA7qCKiNeCBV9goHitVqpajMy2ZP9xrS8PTDe6vXeRYQ2hMeNichp4PAC1yfu2",
  "key23": "5WkdWbMSrNxgqMeQJ9BCdpd6eicb4wHUxYRnzFvsNh8KvGHGwUYk6ftCEtzRz1PT5m7oXwjhj4KwUiVyU38Y6Mim",
  "key24": "5RRDbb7DjfX3XvdyTzf5FNUJDuSc4eNgyqrt1YoanPenKMgvTTfU1EVpXvsnZDjBgB6kKSUtXtpBb4vsddp6CN5Y",
  "key25": "3HtPg8uv7AbDZujCxCNmQhbgTmWUXWn3iDWr6sCpKE72ywFcB7Kvxd4gjuGzKcVbTVtfuzMGC58fH43J63kfHSLY",
  "key26": "2dYjSbXLK2D9b3tGr1LkNHJJfHuWdEd6YrqMHeQ8XvAoSoEajPwiJ64uzjEaKiZTp1PKeThyWxqj15KZDksPmNcx"
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
