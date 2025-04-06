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
    "47j1Z9XafJSNoZ1AQ6t9SMF1Sha72HaoYjkpGKC3HLUojTND7gLqb1uMWaDdmE6D3cHxywJ8bkyEc2cPdi63wVcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUg5YWFhjFimDiuigvWXEydiNtyohhNBxKJsoso2EYnKpDFUQFHtVqCgXbNFzrNMjCuDstBuW2kJDggqbzi4QEL",
  "key1": "2UVjyDFrqNjZ9vXtjvSGTcMw86Fp9Bi1mwtH42a3TyZoat9qmQiwzyZL6wFbauPj8Tj276Ho4YGtKKN4pzsJ8Ach",
  "key2": "3zKbbQAKeAkCZLtQ5zHkdEgJNj4WpobycqKUdCc9A6HihUfC62L2VN2N669qK97HpEtqHxfGSwv8eGPjzycJtF6b",
  "key3": "1j3LCemCfVseMLxG8dwXTRATj3YrYJyB5TrbBLkJnDYFL6sQBrAYT54DZvNBEZcZryimrx55rBSa7S8GURzuf7x",
  "key4": "HTMtdQbgPHUzXfDs4LXPejmbsF4ZkpR8oCCZ4QsNh7Axg71L48uCKEt41S3U8twGS3ez7toP5USARF5UtUyAVXw",
  "key5": "4SMXybEY1Yk4yVPhbonN7sUjQKPx1MkMReGMyf7BsMuK3yjqHkHAznZNrJubBzENUcRzWPbEj2JSX3KPsnfwUEDi",
  "key6": "3P8DiLC7TBTz6N283vvtLTtZt1zYn1TX7S982N1F2otgDcQLe2yRHFJhFEKQXERB5fCM72HKS2VKpssrJaVp4HG5",
  "key7": "2Dzu1x3Zv65Zpmq27a83pEn5a4r9P9qqxzM9VusTPXrsuaXYivACyc1RKW8gaB314J5FqoSLxuNGBtRHSBetEjBD",
  "key8": "Lmzpu5jCyZNrWuTuLV5ooQSb9CDk4hZK2SUXbqstpZQJzPfUJBbSiVZWUDxNzjRftBiYLcmRjaTJFiDe18Ha3x5",
  "key9": "7wALA43Zjkx86iqYsMxBYHQP376cL7hickbgv16c7FaxPx3EcjBxbCvDotQVQC6r2n11g8Ezhx1sDXhfEdo5wwS",
  "key10": "jRLQwkTtch5TpYtUGeKM6jE1QvuNtRJNyXQgZeKE6BtF4JqiVh3vRjbvv75EEJrgU3QUSMd95H7zTvhZJeU4x2L",
  "key11": "3WW7M77jFR8a1XW91TfqCztvri1JgMQ9gQdB2bA9MfcpZEzof1zdZ38y9hw4xmwwY84Gy6xDxFBsJu3GaQBDtTmE",
  "key12": "5WR7Q7dbRpYjhgQst7E12Jdphidnk2ASNK8bRKnpz67WKw1WmwkHYKJqzb5Ti4zmV2W344LWxy6FRQ1hf4AjX1RU",
  "key13": "n227LqFnECAMKnUtoMs3Tn4Nc5tbLryj6fKXMo3oqMqX7GyhwvVTAZTes1ncqYg2LeDABHfXVeXE4ekBLCbhsBe",
  "key14": "2XjKRfWtfeKmPZqdvovWEFRAA6d26Pwn3mzH9yRR1avBBwpMtrzkZwicsjcuuGCxVHurd3WYWnRsbcVaMS3QoVPF",
  "key15": "eCVHrkk65jkprJGXiuTaDjHvzvRFKPPxvQm1RMm2sWXbtbKXhHNkaXFAUK1ALvofo6YkPwxE6S6CS23tbvREMEx",
  "key16": "5zQ5puGWxpCMwJzK3smPSxDNKtsNG6wLuUgVYxVRwG8rptJARsYUKMWSGiaK1Bw1VHnwMMPq1c2g5vjvCt7jbsYJ",
  "key17": "3HLZbCbXzyGsJ7hBNopScwiUQ1aTys6fAxBbLxgyxAVFHGh6VXU7wefzSSxrKE4i6REuSWpa6QXKUwzbdJGUZB9p",
  "key18": "sT8YTZzGrH9Y63edV7oNft9WuHKozjX5xiyg6NMschWGvtG6dRX5w1o9X7UBJ6BPgnFDzzbJfyWyA7KJ7HHwgAu",
  "key19": "5o3wx5hW4SRDXYokPN4oEja3vuzEsjPgDHBZnU439Y2sPj14ES7jZQhptCzveWg1Cf6LnrCsxS9Yd4fchAppe9SJ",
  "key20": "Ni2PnbM2r7KFfRcy3QsU39xoeZnPDZAftjaT76cewkcgHtZCPVJVkqYRH23W23bqUZS3csSsQaDGAUaGSSbpEX6",
  "key21": "B5DBs2fE76GNMrvgT5QH54X8P9T1bYAUTyLBJmcrSAzLX67av6gfXYE6LtBLxVU1xAuwWsn1DrBPxNfSwRzTReZ",
  "key22": "5cv3Q8JRKDfTWEANuHZqZ24kdJ1uq4xkkR2pFYBW9RJcWRhcn4ADNofHn1jMasjXVy25EAddEWQy5yB8ce1Lxu9L",
  "key23": "RcKrChQUXHnSEiG6KNYbcTgCSKbaBWASnCcHEWutJNPTSRxFvxqAkYJuCYZLT9M7Pik36PKyEJy5rZdkJXeyWyX",
  "key24": "BH8vXzosCW7NU73g6nsnvkHVpQSpqAUA1EojQP8DVsRdoY8yZs2cUGsksL63gde9zJCn5NSPmjDUH1ZjWX3AVzV",
  "key25": "2DQ68baSaFHVCJUjJnNKa7mtz6k2kQ5N4YwNvC9jAHMq89nde57YBUujTeBQ4tecKyfnjasVKo1rjoVVZhHryCoa",
  "key26": "2NDtBGc9bJXMpPxN5J6rdNw7LiKLNDS6WQzZs1fMtrZZhtP6wT6Y5GXb9mGev2QNs2sTP5LFX8pe5inAn8UsXTGJ",
  "key27": "3sBwUYEfqCwm2GBWGmDSpAsLDVVcYLFJiRLHqCCLcP4UikGcbBdpWrSBf8tej4CeJc6LFo6DGYEFRgGG2umQL1e2",
  "key28": "62h2PWa2YTE3khkgSnJvUUst7Rbh3Yf5bpskENc4EwZ9DjAjQaE7bkfhfyJ44Cbezi69S6yacifTjiommCzcqbU1",
  "key29": "2fqM7FPm3emFwaWJEcdnjkLz3vGgD3mTX19UKGA8hqmbCFSLVjzFGzVcR6dJ7G5Z6jvWFubB3hiEwSz5YNDc7K7b",
  "key30": "5rh9q4Lbvd9AVSRnNrUHaexLLVVG2oBHVcEyr39NchBR5RjKceW6g89nhycEr6337YiaL7LhdqDTmDVsukUFDiub",
  "key31": "51dy7PoAe1CVUoo4uzhbF6w5iSt3XVdJ7PFFkd1LwXFw1H3ruDw8dhWPTSgtsvyWZY8Vku6RE15kPwxxvYZwpCQw",
  "key32": "wJmRFhSym8FFSFqeNKPyXBWvN8Xgz1wxCHFVggGR8jaVkQszwUGSsFEgRQo2woJDtcTkai5UwYm2KSZFCf6Tqvu",
  "key33": "219pBPiF36Wgf35Lea8t8ekJUa2aR3GD18FeZhELEeast235GJr1YqNfTmkCdw56y6V17ztZuMgJa4xCZeYaCB8n",
  "key34": "H6NaiYu8NiByoLUeRqVaG51jSq7mVarDfdHcYGSGEitd9996jCurHS1TRWfUoynnYbMhEyyubgNKfZnBxrerA1d",
  "key35": "J8wC1MgQpkkhQoCp8D73oz8BaMnkKPcArS1HrGn6oBUUkdrNXEFi1nbEv2ryYt1CCijo7EV5aUWP2aWuzPjTq82",
  "key36": "YVuFLaFiiG78M9SDAvDMhnoNDaiQAZQuxBi3hXnapeB1y32Hesp1LbsoKf4bkbMqmZLfzJZRfgjadHp23a2Yxvs",
  "key37": "ZNiNqEidPYQc9m9mwgt3NZpKXxzxofJJa2n8neqYdLj8MTdaDtd3EUUJ48cKxT5Zcgk17YuKgb72PdxSKdcydbS",
  "key38": "46b4812JQ8aspyABdegr5VGUJxHaQ5WUuk3YVfVrHBLeh4h7yRgmfM3iyhSQp8dGD15wagCpkiFFiN6fEs133FtF",
  "key39": "2dqrtgPtqUwepHVqGKx8PT6pE7BYRsfsPeJQ2S8tT59cDYrJ3zVC6rpTb5uKf2ETNUePVJwL9krguDyNQYiyN9xt",
  "key40": "2hgmfrvRYYPHUSp4ESpX71NjHe7ViG4acF4Uybk1YQa4PqAiLXhrHVnhfXcnfKdh7FTCULfRFgG8siWYpkFVUma3",
  "key41": "2R9aGUq1Y4hZkWnq6YnDtDykh87PRQ4rb1WiyTiHdhD2FRWCMfgVBSLKRgttwDZnAgkaVithd9WB9Bjd5vr27mfo",
  "key42": "2a6BpkgWrR3MSgLQ632tMntXrmShJmYzfZScUqGVs3hwfsTpx6GiVyNS77i1aogu1zHCZM2yHx5FBTKvvLViLYs2",
  "key43": "27mx7fuSrKSewCVB5BYSk2QrDms1oDoWCiYj6XKD1V7PVdWDH2hc6htBFNBxqGnkMUppi3rpnLP3BFw6PcoifvL5",
  "key44": "4Ryz2nMpvFT4SiW1BAyRE8L5Uwy8SqMHuKXx1ysw3bTj9iBCLeZgk3Ga2bzv7QCkNdHivEdgjzccFUMfwQhzAb4c"
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
