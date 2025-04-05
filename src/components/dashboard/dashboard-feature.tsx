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
    "353Sdctd4mMWaXttGPdQxSd6YcYYbqHGR3HkiX3seNq5KpjK8nrA4jvC11Tfq9AoKU82EwsRB4AkmFGxZm5m4bPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uX7xNvphveYvW9kn6Ar582SAjhhthuu2uazvvqj36zu8SZAGf5SQ7Twx2XKhsrQKpLKfEcQ2bPpREawiJwSD9Nm",
  "key1": "2JG8pz7ecHJ1M5mHjjrepR5vgYRJ993pCSnkzv6gVayWQKjeJQzBMqh3QDjSxZN3DWR4UPuy3QVFdVsozx6X4gQJ",
  "key2": "2GrQrpu5cybjhrCECXkBevHBFCaooC2wHCxMieDyVAmimeoEe9Zh8ZppjTUZWeEqUZubDrnq5pMKGSTUEQx4kWo7",
  "key3": "3iXEcn7jb5NBEZeYtsuvfps4XFrCqHFpgWhfh4kBeJNpDrotmsG2G9H7fhiCLJt2GASqza7P6YG1BZkUToFAk4j",
  "key4": "5jGMgqvBGH7sGLiQM839LHeUPahd9rgX1n52ybwBaBr8FcqiJkhDq5P6biBVeE54zoLXe4gHTgXHyfvTKgZU3gc2",
  "key5": "3EmS49GpG1dFaQJCjmqbmEBcgvy1md7wCDX8PyHGB7tAyXLrLNrrfqrc6m21df8rePCNBfpbbXoxNcFqo5wtD5uL",
  "key6": "z8aFVaZTdFjhfJcu6SjsQ6UHmF22ijQ7RajubLFHh2Rn4ZBRt15UyaPZbUeAZhxSKUtg73JtmgCuPXbB5hn97tw",
  "key7": "4aezEMKiMAY9xEBjwVpRnB8QqrgcUn1rssQHX8x3wdRfUoXjSChFaZa2MwaiX2xPJF8FjjbqPiN1Wx6dt9hwvaSX",
  "key8": "3QpJBVhMXfmYbn1fSCynaDgjhk2JcehD7u9VK5ooCZWh9D462YgmRVu3fzVZ4V9SJ5FGeB2pJk72hFcZ59WXmF2C",
  "key9": "5oovrD5J8TXiU8wDPG9WWkNLphvty7gErB87txCnV4YpmScMEvR4R3UA5euTsMSRtFTLHvXsWqfSaNPZFDQUZQXa",
  "key10": "2FaiSfmCo7SCboiR49LhqKy13yk7bet9zzJxtHe4sxrBq2h3gCQP32dadVdStMG6WEgXhDEyZg8xVAYmSx9SA1fD",
  "key11": "gTRkpR1BQBB8p1pHJ4wVdq6qxTbtHZb95pDqRZnKFH1TAyhnWSoEwtKsyGHYsYkd9rHCbaFAr1QZ6LnsS2b15Ee",
  "key12": "2bgjJjnZh1jAHFJ3FSC2gupU3WmhhSvbWvjxU7eUvRcGbwrGAMDwbGRTfohpT7EmU9PqSCWtatDfSXHQVuBycQDZ",
  "key13": "4gZJFdivBVEgyiCfCHkVMJQiWwapprzUQnVKZFptYGsbwkMQVCSsgWY73hNe2J7dDWm7oXQCQTTjfAWFESRUGbaj",
  "key14": "42Qdv9sZTGVJsZFhQmSLE9KrXd7JuCorNfPC85L9J89E6ACbros5TxMjwSLKNR9jRTTFs1dTCYxG6dDEXLjfhDwy",
  "key15": "qyHZkUPGwATwyV3NRvBnYx6n7XVMgKnDhNk6PccGiPwaXoYpHZvxdhzWwuT5TuxaF5QX59ssg9Q6AcBsaUxExop",
  "key16": "28WCYinytPXxPS4qgqbFruFhem3Eh2Gtht5HWqysHMw42uzKhWW23W3ABib5brwZvNjZ2Dn5y536pUroPC9Ga2wP",
  "key17": "58VYQMffUUnKQ8MjhYSjmEyrU82M56X6Jc9vhRLhUaZNYJ27y5D4pSQrLsXuf1YJY2fJf8JeZs5RqSiMH7CYSFex",
  "key18": "DpjQ4nwHHi9hp9VEFVahG3qK5CpABJ9a1bz6FyYFYVPPqzgZZCFiffA4SjCE4odef6FCpvhA73t2rR4qfuLhrEc",
  "key19": "4QBLDiDSZQS6NpNM9zHv59vykhsxPkoa75f7JfivEL66geYnZwDHJ88V8N5FqTE1AGopBfbbmuVNpyGBUiNvFofK",
  "key20": "jueAxwDSUoviVNzEdPQMNwK6GtoKFhZgZmZ63RoS9qTXBs7sejFpTcLgLFcqGkS9nWun31Uid5Ydhpw7sVdj3fN",
  "key21": "mcy3AW3vbM4FMU8VSPdRoUXuG1jnuHAHaTnPtzieoqoR4kmSR4PZjejpxPCiigybnBewJ3YvP22cijEroNyzi1n",
  "key22": "35Lg4suqRduv6iheR5tZFsSE6WuWCHHoMNJTqRUaebbEQoiqveYqytwCGuazbcgvTprSLemePh1nLJzR4Cf2UQmT",
  "key23": "4FTGDC7VuvFeXu6VpGS12zBxpcvWmZxrD4ghXAs5KtYRhnLYnmySy6sfyoo5M436QqDkWKwpnGHSmqGXA84T8VZb",
  "key24": "4LmkcTkLFF6hsh7AiFB8q5qKr2ZzdAdsYrg8iUZC5Yms55FmJ4GQbhS3BCrRLzHLthDg2zYXbXQzkyk6orF1b45J",
  "key25": "4LentpHoAsc268amamnEcyT6Nqjr9Cdm54GbTc1zqeJhHkYEZQogPGGCV8eoV6nLJnYZDYzY2Nfi3jHo31wNw81i",
  "key26": "5WbXJwc9DxuJhdNBkEb5Bm8n7umDqGkzCVZCiKDBtJQFzbz5nF5zvfHRhhhWn4ATS2wAnJSxJW94K8ovGfreSj9q",
  "key27": "5FVCPuznStc1ctwJAa9q2yVHmxdzUHdibKPHWxSp4APT97HqBuQpn5XpcMGXzAfCtVUbTpcxQuVYQz1ymJHHcscq",
  "key28": "64GWFvHAdDPAgXHRDJPzoMuicfqcuFHYczqgxb5Gh2ZBpka1GGihW4S3y3aEcAM5BUeM1DYtiVUKkfn8h1jC7cPm",
  "key29": "5dH3QzfPELK6tFzW1eQSM2AEXxL77jju8mdhfxTFSbj577hTdSMp7LnVi9xAuExB6pyewHSNPCySP4iDSCgPYGrb",
  "key30": "J7cwsUoN7NLW1gTxX43vuZLJXzNyuwsVU1pdfoxTFdcM6wpf8PH69LFN3EkddXy5Z8WkVV4cXw9b9yG4VhuTfFd",
  "key31": "41STKuvVv2n39ZXZS7MgaS2R1NVkEmiHMkaJWpcFY4KGRFDMXkTf1fpWJ38yCNxiY5nAxetSPS5zpZ8DGJiv4fP9",
  "key32": "37x6UaqDRs4sD3eDXiYSMbNj6VaRg2ZRMMV9FFznJRiZuC2dxDnNPUTBuuyqbMaP69t3CVBQopjZqtvX6VSkRxwU",
  "key33": "4MF2tNS7Ra5AFjR85AqqvZAn197fqAmtug8Ah3VCBbR1iMva8mh7W5WHiaRZ8qGBQNpYbNwgJNgSySpZXesTW5yw"
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
