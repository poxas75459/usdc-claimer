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
    "3NLaqCdoxrg9UnU5kKTXg8iSEWgvwj1enAvXa2ckj4CydKdEpnwN2J2UspvRw5hqHARYzGgWrrdpAaP9Lmtid23B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61j2tLmrGaV3MwqH65yvQAuTtWqqpyKrsxsqLRZzPRmbkPbS1mhTjfcLGT8XosbADEtzjrfuZ6p14hiHJpYCALVe",
  "key1": "5PsESuFXcaRgQvNwr4SRUtVc3nLcSB2jDrGL6J82XbXACQgaxYFqeNZcQgS71Uo9HQAkwNgaoZkS497Vsdn9TgVr",
  "key2": "49gs8tq6rM2Uwi6NAT3YnR1kNvyLGucY7dqeCUqfpPZoYQB1nAyfDcSQaGRx3bxZTVrEcfBpg9FZFdJiUp9yfDDw",
  "key3": "22FLpeLGCJWw1jkBC4sYKF3HfWUJR43yM8tEhNhWGSD95seo2Ns7dMcRTXXk5jmLGCuK3SMwYXrb5GJ2HNHJBVf6",
  "key4": "4XJUfdNLQa95WFkGnHpby21MW9FvSYdBaDdv1xcQFtd4pAFtTHWLK2CJWQmxhAKV6Wz7i8zCdBkgpkx12A4mzkh8",
  "key5": "5s5KPxStTVh5GD7ip4jRQYSuFzeYY3HRx4vkHSZqbZJ1VzcMxz7fbPP13xDPBVcpqQkSUkiViLMCw8rz4TCEjwzz",
  "key6": "iDPuQzCcaCssH82djXGXDkNcA3rDwc9rVTAwWiYCLRtuAMB4BC2Z7qD5LXCnXpAURN2yxEAniTSqibzRSeLKUr5",
  "key7": "5ySuS7E4RNjETjv4QWg8jhExiwFjtmUyyu4iZVBBKXMJFeuNKvDdwruTwyDSi7oGMSCFdR6hSBPQSdbEpZdZGFYw",
  "key8": "3Uraq2KKipRQF3NnGKC5mVMKhLCWDFj2s5R6Z7zfbQgpGeLWkYs3YVwPHCeVpJ65taXFXirMtB84LcBMoi3dXjRC",
  "key9": "5Q6ieuVujtVN7YJEkqN9wzEJgQBLvR8HQVqhWv4B6vCrmSFY4g2tfsyFXBgMcKbWMw1EbDT9dgoxReSdEwBcaNY",
  "key10": "5yKk2WTkeP17KxfKnza6rCHLRfcAYn97nkmaGadWCxDLCjYJTdWyfs4AZ5GZepZtnwDWd4SUe5Ekp1vZijBFFaEw",
  "key11": "4KLVqLbmnZgibVGiTXUWe1xpVHWtAeqpQStAVNYHeLvqgShnoXPkY3jRMiUsNXNdqSBNmnvWWobohNdDrU9jpcaP",
  "key12": "3uWCfgsTSPfH1Jz1w2YQW4KhQXGXybqH8CytqArRpc5JUXJxmJPyoxtexQMFXtZDcB2FsQFvB6MichGoGCEX5PT8",
  "key13": "4tDZYfBfbUa8agt9rYHSCtnsrSuCrR2kTDg7fBCbsmtrsMPa9vNakvZKmctZDawrXRntBkdiHfBwxEfbbd7gHk9j",
  "key14": "2Y97JSiFSfRbyuGr2bz2fHUbrbL6tvJjHWhAzmY2Cs78tbUPZxevUx32aX9eUSCbHSUWxrnZx96obAvPMCMwMCmU",
  "key15": "57F3rCAaZNrvUy8gbnqrTSw1quT9o41EhfGL9rZttacZoS862Zv8kdvHkXaeu1CrA3UkrEvbMRwUeJZ98YgkQhHL",
  "key16": "5tdqWjyGEum54Tie9s7uK3yvCsvyK8sczCikRJQnZnHCSmY7D6TzrBBRHr1QgVbKrHhGwWgGPiwGWJowkLPwxhuN",
  "key17": "5FfZHC2iy9QGAMgdG13oUKchifWkAcAyxyY62e5pZiCEKaK1v67krkZkEgJ6qTMZWt8GqqrXxafs3u4FPKqgaCmR",
  "key18": "zyhLoy1Rf6eFkZdct6TfymZQPX3zSYVwdRaFiKyKwZzeqxdZiSMrcpj5y1gr3hMpcPEmnuy3AaSfTThb4iQHBzt",
  "key19": "2pV329UMUCiEJeUdd6diRK2YVB56uHHmwPvsxYr9QA64h9Hxi2pxMbxEJ5D31PQVoFCmVZECEqBfekN4HRWt552d",
  "key20": "5hQB6rzjeoTHbXYc5Fna3dTL3uUwMYQn7zvtc6F2QrVNG9jqoXqhdnmFfwLhW8jd4jiHFRviXMjUQNQoYdb7Hz5W",
  "key21": "25SR6GouQjwMgBRnFaTjdQJSY5ULfzWzUzGAqHfwd2tkEffYR1i3p7Ve3uwvum6kJuigNKNoB4rTPKkztrBaoSE4",
  "key22": "3k4NthoswgRDvCi1cdSRtAQbAcrZV6oBLnQ3C2rcHjHbNNjPtCQG6QLCMHktdYdxuECBoHEHxeA3ufzp6ggnbTFi",
  "key23": "5A1AbZem9usbgzNVNxLUmssofiVAsY4UEyFPj9VRFyzLDMuDcRZspAqByuNutjxoTeSVQ23tSErMyLBHzQqyHXM4",
  "key24": "4h6CZwK1TBPxeWtGJsvsNtYyNdKaNj49LR9E36UAuVJjJxmMViEg3eTCXEt3eujiNQ8TbwoyZAUmoNaokf9oWjJX"
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
