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
    "2SiUto1h9Ja33E35VHnxdNd7M13fKsei65kM1ApR5CgNSHdwbcYrEJwuS3t6Tnh5DToLSem8Ngnwehx9LpxFqEKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46a6LYPWmXChkvMcdYNC5EeMZB7Z6iKCGodKyhmy8s8i1zoPomhXvSdF6VUiNToSvEXuJSTiKBeeZSUVuQpALN9v",
  "key1": "2QZcE5DgZZa61vKsHpyrtS6a2qNdVqBegkbWKXxTnkntccxycdDhLog53ACpYHeGgTKeVzG1n11LfusR84PCLzfB",
  "key2": "2wSWWHrk5Nkwj14qzYDHn2wCbkjQtx13zdXuz3rkFxtbby3Le1JK9n26cAHTMYE8BjkKDiUj4sTS429YiZjb8Lyo",
  "key3": "3BeyfSvbZriFTAqDx3JWfRGkAmG3xcUwsUxCtzoVcad47bBUuNvHn6h7zHZh5DiBXYc8RKPYjmwur9uifXiweUWu",
  "key4": "4xNg23K1cKeEJsQYDoePUewPBSEbsqaRK6cT6Twve5uJhoPbReR3ksUJ1jv6jphubzXiZkA6t61E7yBUPmJ96sL5",
  "key5": "wkZeJdjuZTCwm7zmkXQkRouyv8XtPon7aUk1EZoiUp3GNpc17W9KvS8DiXwBMkCPHRyTkj6iWb1AC1tvr4fMf4X",
  "key6": "2ZyQodT1PN299ZwboHG6VLwSFCqUVrBrFviAwQTxeWMi9GtYYrnb5xkpqvds3WDu25dYUrbXj7LSDRuhiHDLAX36",
  "key7": "3mMKfBHDHwzoida5NE5JojKi1ktkZ47TiriXFmhYqasBsUyMX73Q8HYZ3Zw5PERSs1ezyiGkS5LjAiQhzqiRF4Q1",
  "key8": "64e4qer5m3yy8eQTna1xtUK2taBcg12gqNHXz3RcYbv2o47arJ9UpbmEV9nvXKq9XkqXRyvaQLUuRtmHkeBnBkT7",
  "key9": "4cGtNCPnKKGxpbo3kYyNPQYS8VDQewHc41QAbv4H5RvLKykWJBDZVbTgGRJQbCSkA2Yj5XSa2jqsXMbps74YRi5k",
  "key10": "iYxTCqtaDMbeHx83tUd1N6vqaxX8pKjgyRSyB4UdumDVdP12E33W6mEry2tHPeKe9GnKZdWfPrpWSsj3prqsyF8",
  "key11": "4kZWHpF3ZVomadV7nQUHot1enxo3i3NH5JX5STQ7pFbTsCULkWMgbVf3ifPMHgeSYJX2nedqNHrkwRqowHGBVQK8",
  "key12": "2higcj7FoC6LFAKzR77N9FtVT47QA2sSqncnchhbT3ZVAyezpG5W3xmswt4AziqFMAnYAyrPdgLrfG8nZWuwwkEY",
  "key13": "4zEz2Hja2tnWGTieES7AwE1jYaP3gS5SmCxJaqS7Em1ZmJYHCDg1DNDRHdTjHbqeqJxSYpdkEsj5BQTawvKjHSYP",
  "key14": "663d5zr5X7DLaVzyargZWtodB8Xo7f8w5o2Rmv9xkmSGk2tdcSaNoW1sCWQcnpzPLzxSzsFkQkgH7Pzs255j1874",
  "key15": "2j6syseNpsVkzNiJSqH2CYrXUQA79TT2WKU8aCLteZjTfyJWaruM7h1t71NA5HFkps45VHfrGKmDz6h3NDLYzBNo",
  "key16": "3Xz6Wqbd543wG4QTbyV9DMm1wX9mrFUsh5S3EBypXd7oj7uv1uf5Zh1mV2CKe4QdwabcMMzptEMniKQHsGumRU6Y",
  "key17": "2DZtK6kHVFcJeK7nq35iTWuRJF93WiAPasRWn1GeEPxtkXpjK1HeBG2EF8WStVzZpads826hHNwa7kp3AaSigNGw",
  "key18": "ZbfknLbYGuAUjSRjB9vtSxtwk9DxMKapnVRVm1xQe2Q66Maki24eGFhSUcidmqjdt5ybUBzV6DkBgxxLcmdbktp",
  "key19": "3UWWwqJFfhMgtm8xh2gzoMEQiuxfNSFcvwRjMu6XfURu9nd5YmNtqs6H3cn59WnZuZW1NrTrCNacpxxuig6Qt1Dw",
  "key20": "3pCe8AZJDmmSuY4yhns8ZJe1t4hRVuHk7SpR8ZFEs5Rjrio3cBmSm3cM3yFXkaAjYzGbTDTukZCkEj9tpi6QVKqd",
  "key21": "RG55zykQATXxVeDxHDkNEoKsHSiNMWocqyBux4pcm7EiTi1dpsckCgS8tKYgoU5h6g49EDj7dbRYops7yLJY97F",
  "key22": "216dtq8bN46gDA2SQAy35fvB4MAmtBL1tf6PvvH13q3udVoE59NMWy7DqDvypmiVk7BEFLyeeCfXCjQiEg7gFTtC",
  "key23": "3Co7okRDkkjHPCGQsgDxMryFvisShxoS67W4WL9LJ8p5Ts8FasD5h1kZaz7iEjnfv6PeHA5qg8cwNVJX41LpFSnY",
  "key24": "2mjUMRAurSB7CGbT4HyP5uBeD3rab48Kx5yHvpP7GbnFkaKdXyGSMERAAjMoM4SGhxWBmyTtjv48xrJ7GNuV6Bmr"
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
