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
    "zv3U7Fs3cSoF25WAmN41hvdmx7FfyJ8qM5sGk7AhTgmoNj2k2Ac2cJuoooaqijz2crFE82FoMfbB3QJtjQ9tCjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCUJQKJsxFeBLg3kfJHyFuLFddFN7xQSWiRuRGM8fsdxrb2CBJVdvoaB5wm7MAkgAm5WwQzWTtF1Kxd2FR2DcXz",
  "key1": "59TBbqMoQJMbfExBS4HUEY3zpe4Kv4tVBKZ9A7k1PTRggqVGdZxdR67Btm43CvjzgtYqBQA2doFsxnrpiYBX3RQC",
  "key2": "3evmoA593zzXSCyaDmcVrsLKYCfUMo21afYke5ucwX7guLvkaq6SJYaFRtNPvbbuimcv4A6ZpUnC1q2S65LTQZzw",
  "key3": "2VoVgdqDPYqpu1CYVCkrMjkfKGDsxk3fiRkChnXLMXkn6vJNE1xedWrRT857NjUk6JwWAukregLdVm9yanvgKGdv",
  "key4": "3Yyu734zL32aWuFsQUbV429r8nPjc9rkNgvaHuMQAQQKvDgyJuMYg3mKtdRQwrWfDx98gXKYgzGU9uUAmyFjqcwe",
  "key5": "2YuxXjUzRkMAdnk3RUzCeh6LnJw2uVy5RobwPqzcH4efAccBcvQKHTwgsYtPXiLrANZuF6H1D3SiB3yz4doUsnZm",
  "key6": "3KRsJLewgUvafwZVWEu1k8UtJca25pbU3RsMgRbh9xxtLBQDkUsj27kjaMTAEEVsjuCntswro5rULKrdNX5G9bod",
  "key7": "4qpTyhTcrCmJ6BGY7sUW6zzfGtbKmcEyaapPgotkMLYNFisgZmUAPzAc8kvBtYiiUpJsrKs8tGKccx88Cq78R5UN",
  "key8": "3GipcwyNGMSdtptPW6TQzT1fmBnGwRfC3hVupiGBR26e9HSbQfFFpuM75iN3VTgYpYCpUgYe427QQm1fWxA8Ypay",
  "key9": "3Mm891hTRzVBNXH3qxLuqE4xbBnc1P3CRLkvQ8JRfkuX1P6zgtxprxH8n5kiXjBPX8HFKRVscBt3ptN8HkUHsH8W",
  "key10": "573bGpdLq8fVHxLivV26wdT28tQfqbb8jQUWP5o9gt1uicWD9tEgr4uUJQxyek4rDBuKqWgKtQ9JzRaevFXH1QWm",
  "key11": "5EM1iTmXqPcYAQ2PC8J3GosawoDX1gc78GDWubdsBvAUx7PLmMVnyYgWvavAU1tcGLRWRrsWc131EKAmzDg8SEhU",
  "key12": "ZTYRe11m29rAFFPREgCrcpcG1wKPd57MoiRpF6U8frzXegbWopvsTGuQXVrRsyvAowp16WJj2kgxeZHxdz8KYYX",
  "key13": "3raD7rREZyRgQynzc7APFq3iduzkdUBA2ruo4CABW6PQnpCu68PXmo5vv91ddK1jmWDkLXKH1eqjTsSizxBKKAVy",
  "key14": "2Y1oywNhABH72dg1cLNYH5j87auJLagncRjvNvWFs5cC6QJzEbZVsjujP6EUWXBUPFwFuSXLdXWkrqe4SYGaeXgV",
  "key15": "42fUuhbCdmQVqHt9nXcAHve4sfBkhYivRsx8YALk64eLyNxfPmFmrygAiXwWKAcaKvCiwBNs1o7HmdNjpKrzNrWG",
  "key16": "3ddCmWkK159Hvg5tc8WtVHSq1ZURDCSuu8bL8UGGPhivk8hhM9aGwhhhbvAh1hK6BSP8PsS1YA3t58w9B47dkuzJ",
  "key17": "BsEtuhDnK9UcM1MZnKdFSVE9cySbFgGM96juTntfPtpDSR1UHyCZ3iiWEkZr73efe6QoLN7s761ZnszVYR5cmWh",
  "key18": "4Q5dq4WPDkirs1B4wmAfXKm97XLqrLBCTYRbNz3yMmurwbqaY1wTTDAmMbEmoQB9wdDWbCxxbdqfm1P5kf4ftYus",
  "key19": "4gWDVXpfXkyc62ivsDPs7TLKUR6D1zNLjAe5Je86CjWQe8T8M9BabNYhMU6JG92gZAqisPPs8gsMY3rkFsmzcQWq",
  "key20": "5mLcub8MFuPHTuDVz66YSJoNXCR1EBerjBsKTyVjsueL2mbEPr3pVXRVegou2UJrrQs4UVfe8cYboShyJZCV9qhz",
  "key21": "5NwhDQKoXRTeNPoSVjea8YgVAGWujCyBYVCKrA6UTPDDuCRfug5y9YEWCeQJwqe5y7FtzzQATgVxB2PDonKw1sgQ",
  "key22": "2WR9Xg3ZBKj4Ne9f5AZXZMv4nz7VZX3jDj3fA9EBPbnoLoLrMqt1Ff7P9G2ojJGBJKAqH2H81wsuPGoNXEfdsEdP",
  "key23": "2fvc6cg6h2S8tg9ZGz3X383pN3xBQiqLKQ4MYYJAKNjnH1ufyVdsZzQZfAkWHiCSTTGSAhP5nfM1Z7iZqx76KQuY",
  "key24": "2G5E4BC3MZ4tLdZcrqeBqKqfAto5MM5wD736C24qrg3EWB5jc1SxojK83AeDpE2pEhugDtPEqHnuVAbwebynEt3g",
  "key25": "5UabFvb5rpfGbNNTydLw343zVCWdhhopuuQ2EYkqnsp4RcJc4ywKpq99bZGTXAHCUWiFf1c8zFVqVSC5EHZLQBwb"
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
