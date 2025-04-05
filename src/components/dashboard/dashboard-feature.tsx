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
    "65GCMgJPhUMkyjFpv8SAoxi63HRxUG7pYpbkHYLxYiMveUdVdbhVBTdoggC2vq9WjDhthg149JK2kEerUVy5WZf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4himHC6REoTuAc6PKnm3F9L95LSoxye2LpJm7TLGfKue7jCRkqmmcZHihD2FxgE2PrnSUTNZMDZMY2w4V69zHbyQ",
  "key1": "3m2anPUciUcpVbeQUbVW5o8g2aL46FCK19fmqohQyGrRcLYHgTe3V5zEQRdZCaCuvUkzMpo3fKKewAqiHp92sMJA",
  "key2": "3tDnq6F8XdSDbCuMKeYGs4aRszpSHh2pbijJ9n5ntwYtXKTxPdpNbsHYZcBW2TerWvWc8neT4oGuWYx1mYShuGvN",
  "key3": "2mskcG2e1ZuFumLKifc8dbjefNMrES3kfFUfkj1auX4t4mS1wu7SgqboD1ypnXRMdEaAJcUpPmrYjm9vsjYXw1eG",
  "key4": "4RgsNNVbN3bxDnixEgCQKyWmo8Mg8LkqxQzjtAp9Gb5SaJPU4zxuDRm93tjEQtSd3udn4kMVVuacJyFkkK9HPDU",
  "key5": "4n8i2Wg7oVVJWii51sJg9rrYFR8FYmisZUhbXDcNitx4dWemuBK7mciq2Yi1xF3atpKpLp1ux546n1z7jKTffMvw",
  "key6": "5FVynA5R9xWf8Frayjujyy7XMu6tVDDefZXTE6sgSLNCzaAjMUdApP12JEE5Cg7iuNazxH1M34BhbeNuWaza4Q36",
  "key7": "63MDydbNQX4Mq5c1Vxe4uyAbZrWcLvSY4VFDhYEWkCBMqQskihiMY4bv7BdJBsGt4yUfF9pAVHSwThJeNZkamkBH",
  "key8": "2vVB6263znKuGMzuwrBLeC4FDpfUFpQ2JMadYGSRazczAJMZzGnRGD3rBJHJpRS9ZJqsoszg1pZ8y4AhbUjzUbxF",
  "key9": "3wE8BMk1RsUKeqXWQcoLotadcW5Jnruu37joVPRxtN1GM6ExuJbWxjpQzUwmo4GZfz24R91MesNYrT5mDWCpTD6G",
  "key10": "4ynEzQkN6Krz31mswLGqA9iMSSCZoLyKdK82NK7MidWs6iD3BtooTt8SnwJYDMzPptwXykoYUKMqq9i2sfkHHxmJ",
  "key11": "4BxLk81kFwN54ZrxQGBifYpdxkM65StgN1DbozkwbuaVtQ5dpechiNDEKbApWnvZC6sbotQtqNcqYowWuejeNd9Y",
  "key12": "4rsL6FaP5oHfMHfTSvZiBaFmbNiQJpQnLRDWEFdRc43t19VHdiTXMBee2pEBtVqyUEvyFGTmbvg11gL5L6H2eYbc",
  "key13": "2ca9vX7KQLq3UEvidDATwW2Hnjv7efQdC8s5sMwZBTTo1wybRW4YQPiC3kV7Dygy1M9KXprqz9acEdzHEp3mDxpi",
  "key14": "4xWN8Zw5PRLRiPXg89WKEE2xMWKzR7rPhA8tW2RsxGZNDzERe8AVHX7aDkj8rAw7zEFPTYdJQjNyYZtWYDaJBRRZ",
  "key15": "4CPUKbNiZee8S6bwQ4dk133yBFKKjQqwLP7oUTu8LTCJZZuVoGizYKdRHxcN6xgXhbMb6Z2EuBJNZnPB2hcEmmq",
  "key16": "29jwCzorXjgo2EvuNtBoVz5kygg5QB8tH5jPXVSumJ3D7ZKbVSzGWPJV2uB9CwgGykCWYYrxwHyTcmbk269MjM3S",
  "key17": "34hALVafWS7JUspfbs39uPT8ips8H9dN6UssGDSRBWunKvRFZFgBkPWQcYtGXaTFkNNsURxGwYHDMswf1mfJzE3H",
  "key18": "4fuAUrsF25MzTt1EHMYn4A4NbuFoThbJgE8Z4NooEgvYM6cpydoWvcSGBhmd8GmJqk3Vf6CNAV5Wt3vFP5uvLKQy",
  "key19": "33VGvxY5ohJMV1qYDPuswbSVysvDn6ACrZNhuBa83jnVfistogST8dSayHJYBTRGsZcpnLjzF1w9VhUei8g88dT3",
  "key20": "4XUWcBu7Lziucth4utE7rpNbfiVUzrC9VKdBMKZErRyV6z4aWmYU76Pn59mh4JTvCFqLkkMcQWY7GWUtGHm3tCx6",
  "key21": "5sSpJM8nucmg5oAX7FtELsxH9DQfK8UZhg7qPK6AkDKJBR4pEAxAFYXsfzngd3VFXLZxiaw3hocvkhCbu6B4eVPy",
  "key22": "wksHvHZLr7fMuYStc5pTeWFLJLgZTyCYfEaf2L9jaNGEuZzVY2z6VuE2XtsAfm7We167KK98DUcaRuqBRM8EdMi",
  "key23": "2kwxv6u6Q3BPzXPxphc8K8NRhwE5tr48PH9CijcutfedK1WsY1MthnhmxPy2uBuAzsgW6MwyRpSPJZqnf6Yoq5Zj",
  "key24": "5Q9UaLzPEdhaAs8RrQVYhH1w1iDuEK6QYnSx1zDg7b3gtJcf7P31nQ3Ay63hKciMxXKVqAiPHuTPbznTDt5mmz9w",
  "key25": "xRM2h88K1k14JtcT2t6rKjTkQaxugKHMN9aQ7tBuP5nuSUC7dkt7FTqNEUZJnxU3kByBgjw2xFUgedhZDnoCCz8",
  "key26": "3k5vkdzskMJtLiKMmHxFgvjVmx7Kre3M4HevGpfoNsL7fZqo8LV8GwspbaqreAHqNjecaGD3QobismYoEtRZE1DW",
  "key27": "4jxa1NHhbETo7bsccNwpPa6AKhqsQDEbnrhXRdzKCW5uq4A9ymtk3ygM14a15A9bWwUxypVyLfJ9UPDWGqbo2YtL",
  "key28": "5wGdx3x2KfVqzTDd5hUa9ohztEZZSMrcCCZiLN4ZuGPTMuUHq9PBdhJtrkBoVFEbYzp4dDk8jBp4TTKkEg1obpEi",
  "key29": "5zsuGdmhAcT6FsvuuTsgU7L9YCTjidxy5a9dyWHtpoBoiyTyzx1yZyTrbcsNUFytZZeHr8Y49fe3JYxbsfMUuTqZ",
  "key30": "5g7mrS4L5hRRGDRuABzgqit75cStxN6v6H4qVHV2vohECKJzrHtZRYoEdz9noeeWSTNNxBGkJRNDi1eQ7LJ3gSTw",
  "key31": "43zencxK3xc4BWRBnX2cahnbAWxQR1j2huCycM3sDuV3Xoq6K7H9F5fqrYxBp7hRgr4u9XmV78MmSDy4dctnhefo",
  "key32": "3zdiiJ6aYaaa9vtESsEYS2ZFDvg54PTYWi3VuTTgXC75hjbQWiQgN9PS9oK6gyxsDW7ThvBcoHvBMXvDWyw7GJR1"
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
