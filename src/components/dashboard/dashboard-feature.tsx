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
    "2n5drPa2kaMZGhyibkpmpUgfcyYVDp6eETvsnL4kxXAxjmyY6uSpzcHJdvxbe4wt2RWiub9JRb5nt2RVahCYmy6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnbmBctsQuiTpUDzbcAq4FzNnfnhKGodGAEMdV4A8KfKo7VsioR7LZbPBMq3RQHRQ9LX8imywfEVpi6VwugrVF8",
  "key1": "3ECPakFm4bYnVXHnTLHFhi3oPXo5b6Lsnm8Ntdi9Et3Ayu18j6H42WPzjAmN3yG5Vyamp5tpXqy5ywc5qBdkqMTr",
  "key2": "2jtw8YDaoMT4vcER3iyL8ibJzKy8WiyQPSytLyTrKyxvfeD4Rt78pBHCcEH4iLJJWgQJuybLevjFV33kTygm3ZrM",
  "key3": "NwhSvF9snZQKypkuN2hpHTjPUDUwoz9uYLSu92TZLhfBYpTfKp8mHLpnmP1G6iGhJrv7Vp1TJ2w5XGD76iradud",
  "key4": "4wnE3scQT2S2dxMRJ3g7MYNQYpGPfmnKXf7eUN6iEQYBb6tGvuPsjuqY49cQjzJ9sxzYTrsFTfia1buxKux1vJsS",
  "key5": "35X3fjA3fF3PmxNmQkiQPhYuCeXKJubKbbJBYSTGqUdFoScubNnRso242DEwocRWXAAZu8MQSjRj9iuCfGQYSgAP",
  "key6": "VctzzRJPeHVwMUF1FKCWTbVNvRjrFHGUTKJRFSEZcVp1rL1vRptPCsCSZ5sCgJugqQjZfx4tJyNDG5M11aBuB5s",
  "key7": "4SjazF9VpVprEVW3WeJDCqnxc61fFxvb4Y3FVkLvwV7sWzHRuGxuRJpdoDzib8erNxQbkCGeKT43TVKgHs5tBCJe",
  "key8": "5wb6FtC7PNmyLgsTxTbMf9QJGonGpNXGrKt6kugmmFchsKFuEpjHPSgYTBEyH2JiBdRXuxDG9mXpucTK4eVtsMVv",
  "key9": "52YitR94BGKPC2xVVi1Z6qpQj4ebRikN8Z57TsE89VJUN6pcmRyezTzHrrZgZVZo5RFDAJ2TE54chBLySQDBxBWd",
  "key10": "3ie3ZY9wQAYHRLreLUZLct6kZDZpCU8kvJTLg6RMtPWTydKaVfXRGJCteB42AKcDBmUuzDvi2uAVZtNrwND5VKdY",
  "key11": "3Zzm59XHq9Q3CRiyHNvEEHXS9k4iPE1XMaBGKhtg1VkaZxeJzWa12KtyWJ3jzdkkbJkjVgXwYEs6CbumxLAm1Zsr",
  "key12": "26xxdf3QZ3gGBM8quB7BEo7Bo8dD65cSoxxrRr9kb2N7cibLiDzaC2VtCc3hTJRyijmyRk9MhiuYG8RDYf8ZjoD8",
  "key13": "5cuZxDCpW1SBSM5aTD1yUqTdCLPkbsjfwrQtEBeMADX3L6RfHQmuAzjwQtABA9wsq3GGa2XJViKeF9bd7EQkiAMq",
  "key14": "48XEfzWer7FWYiPdw4b9qCY75nnkuap8D3b3m3pe6QHMy1bptbx9dKfhhGfgSQCrqpp9e51gxEVvPam3MW5iT61Z",
  "key15": "3HouxW4Pw37TUxSimM5TwTQCoGnzr4Ub4XQnowL1xuPLiypbo3QuNmx6Q3xPbZU8e9rY8ByYaTBtZtsD8ekyfvAS",
  "key16": "4yQAPn9aeovn61VPeJy489KHEUziu4gf5iy6vidmWfYxEXEWbM1yR7KmAGwKZcDVVSWF8eoy1cymQf715VXrf7rx",
  "key17": "3XmtZGDGkGbxGkdx64M1yHqnvmj22NEy2caMdWkr2Qyov2tiGBQw86ZsEJ6hKW2Zsc81esduKUySDvKSeAhjPXCn",
  "key18": "2aLAKMLcr3nvmHJzwMMPYgZDYm7wJFH4QefBS16cfBpM8ov6mBTymWV7ZY1aB1hbzMEtsNK2rV1RYnMZZKXRWWzf",
  "key19": "1tnVDDZxssDwttSKisUetg2pHra5JpKfG57oRBVqhovG3Ymu7C7UWirQS6XUijuAcbYkGETh2qEqNduZiv9Rs7w",
  "key20": "5QMgsuPzmGeJuSt31KteHSrdXvsUvAZL5BTVCYPAgDCjRqb4sKSX9D3ojo5VoWVfDow37JjjdQPm32JpCpr5z8iD",
  "key21": "5WTA97XpHeb8h4DmMDXktUSjied4We7m4KhEaF9Toero7ZqcgxjS1eJwEnLPHpDREDw9JQ2j5znAJX1pJr2ADfkh",
  "key22": "DECjaeNCBpy8VmStQMbULnn5nHVioxgrU5qSKZsrGeDvaQAzFh9wbX63E6V7RAdv6QwoS6YkjBCDpwCDMvZx2Rw",
  "key23": "5o4nx3zw3hVGugpkQrAg9WHWL9Ngqdhrp2T5gBk9tRG6aXxb65JVubxQkF4ZadxAq8wUDf8YWybXvbxPzGSpzyDH",
  "key24": "htN47ATikYjq6DsaZd9xpVQV9m5kkaBpcnUbfsXzr9AaYLhxtKPzPv5h16Nti4EyGCZmvKYyz1mK7tnuCp3yJCS",
  "key25": "NfVnsSpryaj7GFP3xUqcU7oRvM6WadwiJYupPMcBpmDb9htsinDipnB3PEbDHgHSSJVPUHii1QvfkJPBb5gpEuw",
  "key26": "2GkEhnJ7r5bYoEGnX7xGRA4zFqeqcxZxwJ3gFtVBmLSLqecXkrrYauAJt9xZ27a6KtMiDQh1QNE6GAZfRGZrhT59",
  "key27": "54FGaNojhg9XewJ1YvRCNw6Ybtu6qGKtrAV5qyxbarv4krbmpiYBL31PaGtrF1S5PC9wz133SrvPb6AePhDLv6Av",
  "key28": "xxGFdSrt4x2NSzZz5Pjhh6JaSBtdaar1bjkPSferxmvpE12jyM4WfXRCeBmXnypWvxDPzQN8ZNDKk4yCJQ6SdnL",
  "key29": "2AEPPocY4CrJsg2ab8sD3WTCamdrAgDSdr8h5tENS2LWpxCLpBGpSzdSxHk7BFRxSbUeMjkggL1nUP4MQSUXimgQ",
  "key30": "2dxUWi9Zcg8yn8mFaBJHvLRGpD6yyvWCLhn5wdvcZeSvk8LBYKun2T1jLLDfAx6bC6xYCr36pfuuuGZBGqAWwJ1m",
  "key31": "5jwTBFf4UtHrW2FihVyh6Dcuywi19CDZ5vtuXDWrjv4grswNXMX9o7Mg1JZThpa7MdJob1zc3fZeGBJcVGUfGxuU",
  "key32": "eB4VPZkLPo7fwZB9Y4s46xeRn8izPXxRQCAjStuN3sMtYyA14i27AHz3ZqN56hw3uNEwrTkozZaKX2qYqqZQ7bW"
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
