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
    "5j21Xhr9VkgzKtcrxoPyetUV2ydbKPouTfXD9MrABHBG3GV1emNDkqRqBbV5cVig4e8SDRnRBmqAxCTmBBq37Fro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMEaxxLWkt68TfGzSm3aLDvuEhPuYk9xAUSeXffHb2EWVpEuZV3UQMcXWd4gaYe1qS7sCb5BGZMYrhwc5ikChEF",
  "key1": "5iAbord2Nst7yUkX1DhzVtetuSGKVo4wxHfjgpCyKGUDWiRVL3zj48AejAm97zVCSyWgeKtCD37tYjxBgfhh1qbi",
  "key2": "2pqnTCqMnMbgdYuymJrH1igdKPt5NwbJSLpN52L6Zwoatmd34D89HaoESwase3pLepRrL6ENiWEQKbt1USmWu1yx",
  "key3": "bDDXung44CMk7Ac2Ex9TCf7qqTBPDFb8jHP83rHi3hGbmKyPvaaVJ3DAL77REF1Nq3r6vbcbz4WvEFy4nHdxqbv",
  "key4": "3TuiNRp3SNVBwaM2Ug3u2yRzCDxcv5oyVzdYBkZJFPkVmZobEQBS2mBH3o3gTeypv3fDutSzMLQqyswKkCeNHyrq",
  "key5": "3dArbHEpeZY4gXzRFzZkSQHggfCP4ptqbswpMeqGXSZvipgeNj3GqQUVvWhHnrKNbRUGJnLv2puXc6SuWLRyk3sZ",
  "key6": "2hLqQGJQGZA6irgfh626Yk5UBsuGQHWPdYnPnTVBsEemoZ8UdkNX6wieHpCmx114KDkAUg2zEkJMMkBZHL4qo6TT",
  "key7": "4sZQJhTrm5yutEs5yMA44fPTnU73S5Q3DarqNJjH1TVcEoE7UbUJkQheBWyRwtJYJMAE3Pqr4ZB8GDhLbjwFkhWu",
  "key8": "59ZKgngNNgN17DJuHsq9Y4UWLqiq8c7hPknxgKK2TNR4o5WQrUmnjXQ9Q5YXWouZKmk9Kkw9XRNPKJj85Pd3L3ct",
  "key9": "5W8RLFnWURqzxUuEGgA85FprNDKqyE4R3aQwjDkw5gEXL319PqN6NopHzPg3qn5k4bFn8YnFYo685k6MvWx5MR6k",
  "key10": "62U4ULNLwpXHWGJgzgVohEugVCzgQQ29uYUKYCAyEqmRfZFu4AYV3Xhiee2coBQe1mYF46ie3QoaqtFEBg9q8h3V",
  "key11": "3AFnxkYXSNcLRjWT6BdjUTkrNSpon38aGMGoReWb5DUTLVpquYeksjgWmK8EDu9YEYkxpApbxXjg7J1Dg5ikdKTe",
  "key12": "2nmtEqcWNo6DGNj4uw9d4zRy118DxkEHydAabChsvsY9g2RRKcPj29PYkBEG7FkbcRC8arx5Tj7BUvgXDST2w5fq",
  "key13": "4oWddevfnzeYKRpVYQ6tqUQJhZt4GW9fCkSTLNYUgZfjncbV9vtAwQeQkXytoq55S8uDqqFo4moTzEw2nL4byZgg",
  "key14": "4WzPETs1ii4SePBE6F7DniT5yDxpLyWtcU1W5F95Hu3RnZwb6bgYyUwuDRJZo4JDVz9Ds8ECyjK6o2RbLo8w3bEq",
  "key15": "24aLusXENKjeVM6WGNojLjBtnHbmWMtyeDguqZyF7xqix1iGJLUWs3zLELrCCmhssrs7deHg2AFSiZ2kUSRdDW9v",
  "key16": "5o2bRzZKiVjp9gpSGKcPDjk5wnJkcRuCcgxpFi8k2Pyi4i38nxjHXZvhFbSkZeqrLaRHrk4RfEepwMcRj3Q4znEE",
  "key17": "3kU8gJvV65sNnKSjgEDYJ9YqcmJKCoYWiMqMyKbdChZKfqeDtsWXQT43YvXJMf8976ppkJsfukYWb8sc1jNLhH7T",
  "key18": "2eBiz5Ua3yG6WKmwJsqRsUYHTAFsTwtoWY2aww59DQmxT8ekDSgRBF4EqEWY5rUYC6GF3eP2PKkeUwZKs21tF6bT",
  "key19": "2uWbXvzis6ZYrvWrZQeVTDrRAQqfL1hfjj63tJE8SsrbZKL2qAcp5PTA5ApndyPPGW58hnpWw49V89efC5BRccJY",
  "key20": "28GZs9CmiCqjg6tdaXhNePmPGF1oEHMoujs5xLPkBFieuz36c6uKxAQ7M6aF49SuP23zHrtSTTM4H4N1GKYSSjLa",
  "key21": "QEbpkNVZ8chciU5gwo2aAZH5QFbLUnWbfuN65HHtwWZe7ZFg3f2HubR5iFcSGRejCEpPwc7hqpUtokcMQh1Gbaz",
  "key22": "1hYXktjRUCpAQHuuchM5c1Z1fyAgc5Z7hUavm2A9SXnXJ3UUiNmAEgjAh6DvuUqTjN7VxDivBE37PJXkacjFq4D",
  "key23": "593r4i3GumKHgdxDfR5PvHjozHWww2dpmRUKZqT4nWVKMGLMGTHMkxCYNXQbmuSZiNDzb5NXCqFivJPfKQdpm4ee",
  "key24": "5Wym8iGrdcj5NYQxPXrMsv6QwcgjkBXyMjHYZPTce4ig7mj6FjN6KDMQ9qfF3raaka4wTyS7Gs32ix9bubJgGK6x",
  "key25": "57qqzuFYLAJiVKLigmu3dq1Au5LPMg6vZPKqckJ4ufBSEd9psSU5kYot3DLB33M5cNTQo3qJjp9rcs2anrRjQMBp",
  "key26": "4wz9sTCfUtP2dGexddYZSzLnZvU2RLLUJzQjYN3P72zZCA6BoZsfSJdFQrM6fhWv3REt3K8QpvcaV2u5ebQPAVZK",
  "key27": "4LvxpdRDjBhdW8dqqrD2Pd9gwUigs5qhU2JVPWpPTEtQtXw8kry8oAwBD77gHSghAiPV7wqpbjg5SENYVNFGvbrN",
  "key28": "4NN9NsKLq4fTCrbA95KJDHta3AadF2oWAs6fWf8U2qrpyrttuMkg6JP6fkQM1Wm6bUZyZ7yineGsJiUjie2Dn1ib",
  "key29": "CM15CPGpSnEb1KeJDbCkbh1kMxwPdggf1LfCswBBGS32254TNYX6NVkxpEboLdRdvi3eyjy4CCB9VHdqjgDR3dG",
  "key30": "36keFpAi6nYQ3gbJ7rVmGJCkD3LUth4jihmkQE4fZZGtS4qoxBSyyxmmiWo2gQM59gnMcHt3LJpZ5NckAUu6uFEs",
  "key31": "2h1CrnM11GXvnQ7jPDNQRx42d38VeEiXMZXGzeJo1B1A6pJfXL4htrjoJd76y1wD8tWUa9mDqc9JxHRb5ncpQoNV",
  "key32": "5F4FffeV8NHZvgznhXychDfJ8JSdHa5ni5cey9Dw8dwM8qWC7KqeA15pKtznutCdU7LHc3dSu4Hdsd9CsQd5nEVh",
  "key33": "26RcJ52nRQ4phVohAiSycv3abUeVKrajbrgSwBP7GV6Grw2fopNKUFWowBHquYiSQSC9CQceXWVX8jvCeE67Kz3s",
  "key34": "48LE8Fk8f4JfgHtb8sbAfsdJuxdbQ9UFSGAw22FkZvxicqvhmB8Gnpyr5tW6f72AfEa9mJ8sk3MVCUKyzopnE5ku",
  "key35": "5xDkEtheyXFcqjJUrcFJZK1SBAYWUwiwdsjN4vB6UaL5d3gxYruk3vqx2iCtdoADxA9F2kSyjbe4o2REHj5CLueC"
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
