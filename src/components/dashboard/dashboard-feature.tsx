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
    "4EFXNoNRSxgwHDDub5o9Ftm8s12XBUV9PXT8KmzAQ3G1ZD2ArhNCKVff5LyBT9SFfHRHeNoSGckWjtuDxceKwncd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHrBbjgvbaZNu74LRqa9kYDxkUsnJyQNRBMnwcHcqPY1ser3AfcJcyTWRtBQFKyaqMn5t7t6BQcntBiNfj31cfu",
  "key1": "4rv62HeeyHPKABoLt7P9MhFKtsjpz6DRvqXD9HvSpdY6jyxpMiixZsMt6ySL4Vaawppm6icgPZQMYvAkgopsoSUt",
  "key2": "4UvUwkAfwduAtSfh2Av75yhqmQ6uqXmdYE3Ph5DxdjYwaACtuqv4YHjsouZt9T7us5PsMuTgrHtP8KA5xatk1GR4",
  "key3": "izQnKuX2TaQwnukKbrrghVjV3VrRtPzoAvft1GVsbencZs6nL9Ntjywnup1y3Sz3RbBPLiKi4zXNZn7W4fhY8Ue",
  "key4": "S5fmaoRYTaH4wGQ8gY7FdSdmwBH3Z6fwXZuUXrrTTeCx2ZQ4qY8FwzCKnhyzPZVphTTAQCE5zjs8CDmfrxkZswE",
  "key5": "2jyytWDjoRJgjJLYzsoMqhRHVrmZ6ixZJw45VRay6MRFETAYUyAC3KB2kN7zhEz5zANjZV1zbkEhHD2ocCmfHsv1",
  "key6": "5fkovbLqK2b3PpzRDt3ggB8iCVk3ZhHjHRypiGiraC31v1dN28vo5q2jPATpAMp5o5DADxFxJFLk98GFcgmpmuri",
  "key7": "43ajeRhvXJvXJo1dps2NKmy5NisTpLEYFaguukdZ9pRxiUFxFPaYFjuke4253C1Vkj9kTDeEcgv3KWYXD78M9DPA",
  "key8": "5FRJqjz21ec42hnMMG4ghJ6EuYVMJfsbnTE1r4ULqdjc2ABCiRx9qL9Kd74de49iwKmuqsmVvNz6jgKp7rYhFgg4",
  "key9": "5enHT57p3tBFG9u2DaTQR69bowRus8gPEzTJRXPKYvFJwdH1ju9Nyv2i7is4GxujAodpSRKBZPBDAVqkgTD4Mbst",
  "key10": "5wqP5jN1z2Six59nfFS3kApegVGtYmx7GBvew7JYf63QsY779goSzAQHZQhcHxMDzH13FtX1L27JYaPPoLu6tvxZ",
  "key11": "46HZTDS9wLb5fjWosh9bR4HXaU4e9WJmiUF3cinXLSzeSXtaWWRBEG69ojF65wU5SiSKtx973SFE3PyP955VNkK6",
  "key12": "4vAJyL5BR1e8n6kktu93hSARVC4Bzs7z4HmqcVcEXfx3CRicZKaUNPoPvFAkF5otFdTyhLuXK2Y4zqwVw9usWVJx",
  "key13": "4MYRiwG4SADNSx6xXLPGtFn7WFjEdAdf3z4Sofh9sTvvjPhYb9scLFW5yUTNRHKuNwnYnQS9tayKxQuNiuaaKFAs",
  "key14": "5RU7PJhngQBoRYyWFv2nVUQcDeaShN8EzbETHPBMe3TKY9DG9zVeMZCfNu7ck2Cr6v3EYKqX5pUkYvnEmgY2ker",
  "key15": "5DHiWNAuMxxZybu1cKTqRxW5WRuaVdF6Uu5hPKds71feY2XaNB2rk7P6Hj7hVo4enaWRVqhRd3GzRJkJGeDLpaE",
  "key16": "28hRyisQT9SiMyXzfSS6Yav3HqK6RYC8mwitmARhaRoLCAHUuEzdVcTRwH15eTTG4wYUwgukikLdVW2NiEbmagh9",
  "key17": "2hDx9pKzcKt4D5JLv2qt8pvGJXkwyUamfweySUYkwiubtcbHqChYBNzjk6eroumrojH9PkEwqdofnrm7amKF4GSQ",
  "key18": "3b4D9qnqxkjZKqASWNNRrpw3uSXGcJB4ERm8axXU92jmB4CvGfyWzy73MjvTCgHqwJmB2aR6nmPPV5cNvXi9XFmQ",
  "key19": "q5HY7xkJTXXzHsyj7x4R7aQAqMfF9M9z9HA5y6kKKnE5g2QPMLomK6kTjmfpmYWaMUr8z39gkGG6WWSVdRTm4Xk",
  "key20": "3zHyprsu4o1LXe13X5sRCvLi3TB6zSW7mbw9pKsEKr1bqpF1GdSnKt113RDZ8SG2GxdExhsAv3NUjzSyKQNwVS4B",
  "key21": "4i3HAXBHMn4ENLQd1kgfPu5JfXtPcwjScNFQR2PSyb58pJrcYAGAgKrXnsGnd8dD3jsBgTJ2HSSaaeyFrgHkEDvm",
  "key22": "3zUHDu8bfYtThWga86AJADJm7b1F2eCpxBRUZ1jQg4iaxUjg2REEDujLBxSEwcqSjtzYcAPTmSGWrYhME3HVcRkJ",
  "key23": "pKsXiNjF8cctoBRh1ZHqUMKgn31ZpFiL4YEA5VfQpWWVWvwtrfVrwKsa32Q6vBwAjjzHHXfo6UZPEZway8nttkb",
  "key24": "2Soa2aDKYX735zLhKk1XKTup4b581iWHkmYRL5aW5GH23mK7cJFQLdwgKLhsU8rgzTnMqddsshFaPRia9a8SKGX8",
  "key25": "9X5yeT4eUwXx2T9NzrzauNz8C9wYi22SYeT2933cEYdkf7mkJp7W6j39uoigzf5Z6vuUjPmtWN5LDSiDPgPv27Y",
  "key26": "5hoCGYQKdj7gp8cdpiP79uBNkYyQvt2EFMMLmSHGDyjQiYbghARopvX6BvmECkxFbeG147rXVwFUaVTpNVhYPywU"
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
