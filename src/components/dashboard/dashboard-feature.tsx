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
    "8yEjysCggb7d8F1oqrB4mL1e3fr7zN72VbZ1MaK8wQHXUkJoJyhyU2WUh128rQhkcTW4169v4ykYLoF5eotrYM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FJiRrk2kngWs3eXBKf57HsQ9fqq7GXSmYQBDKbtgEfaGAJDiR1i5yn1BDCgbY9DUQj7iZeaw7qGBZZTi7QTvnR",
  "key1": "4xaXXovkppCPbuv5AAiLZVvJWhsyMGczjUuAEVEgDkDHkibct4cqgjUb9W18dxReBXypW2BRnbuxbkDMyDoYTtmY",
  "key2": "3PR2Un2bnxvP4oW3eHbY6dRxDoyb6cJMXbCXedpSNYmd2hfJzE8ZPwBQV9vK3WT3vDSUMKkSXMQaLuUj9QEBHgQa",
  "key3": "5nPg7kviNFo2y1BMQMoswxYQhfHvSZF15kQ35RSRRPYw5h4Cx9YDBHsniC2zMtR47bm8UFhk98FSpvmWW3SCBsZ",
  "key4": "4y27KLrjATBmvH5JjJ6HVDxDnXnpWY3Dzo4bvqzWBMqEAyWTXhRia1R3p5caKzzHH2rPo6LszcMRvJhGgUyzeYBF",
  "key5": "4reKyiEnK9fz7YbWYhYs7JM5q8Cuaf9EZzivQnymZ8sJmX2C8x41zVQA4qbgnHPvN4YfyYmzR3eYWZkoQEHcvQzc",
  "key6": "47XaAwWWZiZFoLn4qoSHH2QXYQhhH5j4Z64N4qk2u42snmhovLhZFSJuYCvuJuGZ9iVsnM2xyaVgfjzXwn9SRTbv",
  "key7": "4nMsSYynJyS6dYtrKbHEAsLYh8M7EMd8MQws1bciX5qg4TJKRjsXF2YTgDFkmKCVah5g7wZhLuYkrDUE7nBjCPm",
  "key8": "SmfUn7BE96t4DUpkmWS6ZADs7iQPrkURQHasShyJfzjySNCKSmN7LsVqFFqj4j1dtqFaW4eWqqYq2S9DXXEKtY5",
  "key9": "5pp3P7Q4HYg68piuxLFHS8CxqrPtUWgcwJwTFUvrKiNaUrU1qB1nA2LaHSUBmmFcLEECjoqDu5ZZMohcnr1NR2x2",
  "key10": "3rrmQS9Gy6CGC9MZmcEoVD2DSgjqSp1TNSPQGPBr28UnaPJbqnU8vno7C1tqKfUDmVDYJAVEcJHGq8dn85eECqVZ",
  "key11": "xXp8KFrGLBzX68t9A92vYac8oUAt7gbUtwZp5WUkPY8sSSF7YyzmjH59RXqkLUHoPMkuhkMM983oG4YbBktQ7FX",
  "key12": "4pLbxMFfqGdrnAbY4XHHks6uXQDiaqiXumC4sdhf9cCHaAg7HgSPmfjRN2ALfteYRSqtUgxzpzz8gJa2E1wdpyLY",
  "key13": "4Deur2Hy43zhYER8TjRjUUs1jCY93z4etJnbrwSADYrvV8RGPzQqBud5wkvkht9K8cbH8Ci4B2hYspUWavrVofwm",
  "key14": "33cWjMKReQTSq2waA3WTURxh5UcR1jkMJ3ez2H7yaxt4i5tgRQXDm4KujmFXd31Nos4q89nPyaD6syRZBzCoTn5g",
  "key15": "21gUFuFRqJH3piwNSgGRsN9cWX6ckex1dsEonX1hCj5zQRboDHDNy1wWWnjkLHPRbsZooeaC91MQvQHqxLpJuq9d",
  "key16": "4kQfZfH2VwCiLSUg9EpvmAnBhk3W8mrFnj29GUVM71sMDVVQKvg5KRsDxqkhdU4NG2uwCdnTtk9ks34d2baMCVub",
  "key17": "29nEYMM7EGyiTUXxx3mPddRM2dBY5vELHKxvgxeGkorn92iTx6tMxJd3Z5dGqexJ86CHnuaRg3fR9xek4dqSmBgZ",
  "key18": "C7PEK98Wy3Yk9RPn5vckujxKez6njZjtYB8chFAcJ7rghkEEKy6jKXpNAFsLZ4HgU665HmFSSv14K7moEh8k1zP",
  "key19": "3b6LLR53o6EM4KNjuHPT4iNouHTX3VkMHgY1Kz1XZgWjHzBRtyNtDvNgicy261Tm6A91Q84LyyzAVgo5VtWpenDT",
  "key20": "DN6hk5kdPKp5LFBS7cQsZjg9R3m2dZrdKwjBueBpUfWzED5tx9zRH3HuiCChX9Yn2FuHmZdp2mFd7vbtZ8AZ21b",
  "key21": "5Uyre9Rc9yQyiVKaNLKqZpYqnpKVSrqdPA1p1vwteotB9pR4t5umW6QVyGYr8PBe8sAr5wDpLxh8rAVgTwVyBDD",
  "key22": "2FaKLkmLr5UnhowLdq45fsirTrvAqhnZANXsbCGPGbcy4iP8Hx94MArtYU2RmZMuGLWe3PQ8zKkTcoyerTnAC4tU",
  "key23": "ramTNhU5mreDLqAwpWYuSeNNm2pooXHR5iFXpWqa2Wo7wSabaM4T7HKJ5ciPwBbSrs9cUeR6KJaNrtCF2ZtDwCw",
  "key24": "55w6TobtsPN2srBskZvJp5HFwRxBDXVomBmU3s1dRJcuzhAi7dTHVhYVXCRaSR2DwVQHsXj5uVk6rxkLM5dndRGq",
  "key25": "36emwEmEcpQHfAPZSu9YPnd9wg7vZTWJvxbSXjDiJNX3rHcDWUg8HePPEpLpXGBQSKvyYWETpkWwNt3HisdVJn92",
  "key26": "3vzdTrEQHYwkZze18nyLSS3J77ApVCwDVJHvVoUXxhcp7NqH1Cc7AUa5iU5warPn1jLE6KRfJ1dwjEEMxKwGu9Hy",
  "key27": "3nyHzp91mattmbBi62ZVdRDWT4oTQrT2irXzhtvdxk3GmD8W6JKBcFfyLnh82oxjhXHrBGSB5JTgbPqrYirsMUDb",
  "key28": "4QBYTR7ZtLf8FMY1f8bVRK6KbTpAmcTjdeKdHTzWyHzpDn6j2eTTMzDZHq3NTGkDeqANS4X1NzPfKusJX3q5qXNx",
  "key29": "5UZrWhCyVd48QjRkumUshzXNoW2FEKfTorJABEeCW5HmxQ17QAEu2ho5tKukxyV4G7xkFLH2ceucT3FQfjCAN4ko"
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
