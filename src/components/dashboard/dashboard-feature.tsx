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
    "4tUD3meZCKG2cYr9KY1sM8291TtwcWuwaJjNiL9X4Un7Qx9EiVWGuaf6QDMRAMtkRhQfmtmYBzP88Z87RujdydJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Mq6fjBw6wNXj54fzN1QMNXo82YDwZj8fZ9ot9RB19PzZSvcNxpuTsMY3FpR58B8uoQaUJGSHLhAnL9Yd5kw7Zq",
  "key1": "4NMhkYHQHCRxYS5xQzJMXcfJercBFPciedsR1cuZJUt1FUQcArHCh86bxAhgXWp3Y29kjorJ5dxZwD5HZjWy1caF",
  "key2": "4QBPVA3dCu7JH83M2mtEWkkTEEd6ysoSMbModAjTqdNACgSvQCaAZV36Dw7fTPbj79WyoZqxLmDQ5h3s2EbJTWVf",
  "key3": "4NUQTarjnM3CixmFRK6UjnYhkXrqzAA3z9pUCb6U88GSmyYphh2uWZwQXHPHZKvuNJxJLjsTdn27THYxjYmDj2uB",
  "key4": "63FrCBsnid5Tg2Hio5oLgNgH4B4QfeFguh4ZJg3hV81y1Qy2oSBtnu3EJKVq1rB3ybkg9B5EcbnxoAUVNbXC2h4Y",
  "key5": "2sFoeuZTvFPBTvewKKrtuZeS1wEBKqXGV2Z1b3sU7eSb3Pum4cHJuKU8qqFmLfrpM9RKdqCZb7nag9w9HEP2Xxva",
  "key6": "5VTjWZYpJVnpJrrUPg1m3cNwscRPdpt6VwRFdVhF6oQHvbSxntqyH6Zb4A6k83jqg9HGxpQfbMvG35ncVm7cbHfM",
  "key7": "58GezhyKLUekJrgQPWGt6CSActtutoRnCzevsJ8g22zZYhZVLQaNRW5y8r2FTpYuR8g8n9rQHnxEW64qCgfQX5oT",
  "key8": "3LPBcxSMaJ69WcKPUQxN3nTCWUBvUZMAh6Zy7TpAkUQ3cGoUscT15Q4yNPxXPpU834KKnxJQts4gbg3DBHeVjVqS",
  "key9": "4ixURAcHqLhCdBoVEVnXduTVn3e6pLrAF4DrkSU6ag7ehdRX1zZrP4LHLQcky2fnwsxpci86NwvGc5Le7tWScb8x",
  "key10": "2ZBKKBnsyX5Fb7uv8iofKWoNdopMN7XqXPZ95QvqoYsens4hi2zoxneYfes6jFC4NMsTJnoMaWWnndTRj6B2GPX2",
  "key11": "2rFT2uEmL7djHeuHi6Y7pggpsprCWscQa1cBeYAk1Qccgzdqbqn5LEbRVT6LvkNL9rHChwomPD16Bip1SamYv1AT",
  "key12": "5dtnLJdqjeMsXx5idaqHk3FkCXcUKSLELKEHWTA5RfFpiWQckZzhmRx89qLH6JmE87cQAsDMjytufZPa2ML6YXZe",
  "key13": "3gLFF1QL3bbSxDbFp8Y9iB5zmaMB6bEru8WgiMYwuU85ZWwVWo21SotmNy5DWGEDdgSzciZseKCMg4kRBALPGdfV",
  "key14": "33kCjV1a47yPqYETSMLe6YeDgLW6bg1CUXK5fgMSp6eZiBdxhL6K29TnRCVVJ2zZ9UV8Qb9J4gjyhLkrSftFwekc",
  "key15": "46YEmusEbkS9TYAvR6kDdR6S57spqs58nhW5xGPiwPSTSVK89jcvGDKde5iH1nuWbjM3NKL3zFV3Tf3MSir5baLt",
  "key16": "3SDzyafFSRHjZMNtV8QU9pQAouzMVBLbwzxmWXepmMB5mefwZXRsdP1rM3qSvdhoHHVCfCH9ptgJkZ2YxJrJVTwT",
  "key17": "3uwLuQatfPJK2RCApifvx36Xe7wTmFDHDAK4ZvXT6PNUbnjNjRQkcjUciBTPpKdQFACbiXcYR3RX1KYZohTmzQt8",
  "key18": "5tiVxRnGgzwsC4J4nZiePwJhNVURt2G7jnuLEq9RZXCjsWjb5Uw942FzSvJxdNqTw73XcC4gnGzHP2GJLg34dTCe",
  "key19": "2mQ9t9csnf8SWE2YGzktpzJaDYbRPQHqYmZar5cAD62Xvwx16maCdB7Dazw2Tt3jV4CcttLa8yGPuphhhtcuthxy",
  "key20": "ZkvEDwuDWaKXnqQSGTTo7PKYByWCFuWNQTdKu5npyMt8oxhZjWYxsQnk4cjQSM63KWNSY7Xhu88nicTMRDyt4Lp",
  "key21": "2msxmNVYW5oggUU9sxwQ8SrWKuq9S7Zo89N3p99duUC3a34zZ7qJjawFX5uhWLnzFaVF9dNRSSXKhYEqHWZtbabn",
  "key22": "269BNycm6E9AiuTUXwE3xxNVgDorTYphGrRd1TiffQUyTScgp2wziuVsXiRVHfCB6fExPmY69FdrZc8TN47YLoS2",
  "key23": "5vhyntJ12vwkKKPRfUazgegMNs7d3vmMX8ZyTrAjDdxwkXgXCXnpCAfSpkB6QfyPZWMB3UBmjzx4ywLGdjFpp4NF",
  "key24": "4uFe9WZWKAy4t9hM89khnykW66K9SaSQqK3L2yhsBeT8KzvFYrUu5ANkAAwQJcDmwkfhknqHK3y4KFQqVzSYSaUW",
  "key25": "4mBQgton3FQMYwKX5xufc3vJVqr6VT7u7Vym5KBfY22JmWvc7EersQyVwHCGV343DNpozXxLkQTVAtpiF3G84Lhv",
  "key26": "2CBD7GrJux5EHGKPthzyHxvEfd8mNGzVMBVcqni339ErEs2mTLcAkkE4bTw4HTyFFea34pUTsxjtDnZDpDNfkFHH",
  "key27": "4MjT3wqZod98nMzEP3U3RGV1U6n5nc6iZtwGxGxme4RVAkes4E6mUaJAuMT9rFJp6zjz1tPJzKLeDVqndFPqhxEx",
  "key28": "5jgwL2cTcYtwLjLWcxaQ6omvEXztbYoZPXP9TCL3547pLYbMuM7MALeVr193RYhhB8bGcd6RQG9akF8WQpPR6j1z",
  "key29": "55nuGAvhHPNRQaEiFJcBAX4ivAajcKVtpQCQqQKZCRAPVuMWJcEKRSyzhiHtLWRRq4uHuGP6E3bry4eMfnKcyLc5",
  "key30": "3WzqWYFMqvELqa4AVxDfnyjkJ7hY5rdjLfe4r311iv1xbPhpbCE7aFbDpGDyhQspQ79n8a4YZSsajyxMiuyFFJg8",
  "key31": "3FGQQDiGxQGyCASEQtrv1DtfBTgXAAq3QPL51qoixeV3Weo9ZpQ5TVeMw9Qo7Sw7MrvwcqR5QczcBFEe299VEdvT",
  "key32": "2dYJwQsWc1BuYaiiXVrLU2thyfXekScG6LWPSfhHmi1QxDFa1CdSNxDcKJDFnjzvduPv5fTm9uF12aSGBvQhnq5g",
  "key33": "GwFA4TDPtJgWg3Ykb66wzvtk5C42JX382bgajFivufBejxKAjiJKSjSvmWtAcx9czzJjDT28v7EoMB8x2UFT3mM",
  "key34": "qnXmRuWjU6DPuPaCRb3L1JY199Q816cEBagz4cXSxX5LE5a3G4ht1hBcyo6XUo9VaFNm97ZAaSRTMLxj8W722NC",
  "key35": "2AqLc5Mnqyv3WxRXUJLMGMEyaNo1pmJ7v9JpMZBe24arW4CSM44oFbQKDmp3tCGeBxZDtRv18wpUMditn969NBVM",
  "key36": "4LnV31HLpys3ybRkJrwEqGVY5jY9yfFgy9WXHDiUi9y6SqDdMjChojWjzPXHP8aGDxyxa6twvmfn8veQ97ynT9uA",
  "key37": "5CVp3GD3EaFvLLarTXwPPp7T4Ehmdaxgm4Gu4kkVvZFhqTPSM3xuzPLHkU2F4Xn24nsFndDz89DK4KskaEJ8Hj2J",
  "key38": "5DsS9oL16UVVSrRWrJ77gnxhLekNGMwPUtznC9ZpyyhwN3ZrJjRGjuTu59NTA5x2yycMhnLAGzcXWcsdENvLwWxr",
  "key39": "5wJ6EHPXgrpoYakPd6Z4cdZMi2nhZEbCoKQUMfsakWVBgTtJEAJWJzoKmMi92BRPqBMnDZUK7gDmYJPKeLcTUJ57",
  "key40": "24csEWygVuLAec5kcfxki1kwqYsmLnbdUyKcK1zDba2h2fQiTzEgUvYQJJ2H3hiwyKT4tuwr67dUXwRAr8igUiTq",
  "key41": "65gQySa3GHqFx2jcmJwpDnwLLggCDMi3wX8uYpyT4VpGCS2o7rNUN8e5FJu9kY4Gpc1mVZezTCJGNLxNwaiCdX3e"
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
