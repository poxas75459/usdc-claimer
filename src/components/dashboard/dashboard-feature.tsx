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
    "5L15oFhh76P2EhcaMwciWWkYaMKm92LLyVKL3mVke3e9QTTRKbTecvCoeuERETp3qUYWpAsiC9sgBLDxpq1pgJQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XcGHwPQ5Q9ru23DUTsEJ2mRyhiXDL57izWi1AzgpFMhC8xRt7x4xmwdRxxatUXLipaEfUgRx6PpF6v6naxfMehF",
  "key1": "3dLP5jKN4SnFSCb7S6mzgD9ocHDHbBfgFWQMUZwh2qkXiLPXbKq1BsMrFXvApdhbDit1LmmGXmmNyjb3dQszpLYR",
  "key2": "vhJbAG4xxJ4CP7roGBfKQCT4v2Pcp7UL1vYCeCAXZbpE8GBTgKWghsWfvYybrGLMMZKjeAWrJnKmbHFcDF87kar",
  "key3": "3EPhMDGQK7FZ9nfKAgzfux2DaxmTEAWDHhxSkuJ9s9xFT7NX4XXP9duxRR4JmkqfyNusGERzyqepJ2Qxjyg45qCj",
  "key4": "3hRXTqMYhqAkHkB8KXWvzB6C4V7HcWAy3qmhruFYUzmA9F6ANPkqz8RFBksvZCxQNZzYKXKEWYHMVtcSaukoPMCF",
  "key5": "oJBfqpAB3UaRfaBbVsG1fUPYvPCw3jXsZi1AyEtguHkpYuFyAVajyFTHdRD9QitzJ88BC8bHgqLkoKacBB9umg6",
  "key6": "2dNNDrbT3c9WwKbNKLXinV9Z62XZjvJxmtKGFcuqzc8iw42noF2MwjicvbT5xwZQWoSrrkA8QtY4LtXEvkBFJi2z",
  "key7": "3ALnCvewt2JsEc8xSEWKtQvDth8ghZvDqK1PnBym8DLkLkCSS2iBrRx8wXxF67VocPzhRprBE3KxP8GpeSNdphDw",
  "key8": "3H1gQHassTQLQCAiJmPx7RFRWufWF3hHoETnRFLf4FKvsZKbmfQ16C4aQ9Yf9ts6SJa4VCREBPytgxfrzee8tyYK",
  "key9": "3bzrm7PaoJY8iA3DwQ58pUT3fw7FKKkfL2qWkHKbFjQZn5q2CKKex2bJd9ECUNgvxVaRcLnSxMvyyqzJLeen4Tzp",
  "key10": "cbxMm8QjBTgmj5ydVAA1K1abzng1UAyz8wvTwrKydXmDQu5maCBGaWYcPHzXvcUb8spAgoKf1TpHNfDGKSLtgEb",
  "key11": "43UF428tFBXCa8msTGFWn7doH4Uavzr5GaA7FCTkvy3gxGGm6rBXY8US2GM627Fcr2om6WTadZGXJo23UqYUZyJA",
  "key12": "cy1quYLAkKTpneCz4AG9MXxRTPCzCLvgy3FqxavGJbbgm2ViKf4es7Rw7S1DfBXrxWViPD5HTTyCUupu2NPCApg",
  "key13": "9dSMW7h4b2yR6LeRG1tpScN4bm4XfMChfMyHw8k43QSp9exvGXjz2oKHAS7C1aAQpubpgnUkDuh8xjgis1PXd8D",
  "key14": "5z6bYxKZRxaebUXXxqNmkS2Sdf4GynFnke1NnupnxtfAY5etcvTeuzS1AU3aPaTuQLAD2RhFP6DCWyEzHFPxnPMB",
  "key15": "qAm8o4ptGjUfw1jBqthTh6qUNTkQtjwyGWqzCMHchefoeLswNWT7GuswYAz4cNXnS4tnCKJP4vkgQfwNdSiz4ME",
  "key16": "2DoFRhanwhrkNMWfVVhc29jBtRAujnzMjRrp6Aimva5kEQ8sXYL93RGr1GSL2f5BZPjbMkvJBdxhqppTP9NDEDqD",
  "key17": "5vctTCgmiApUrX2FYjYHv9swTKHKZn9R19V2WDJfq9MhQAUBh8gJMei1MWqsqdx4C7EmjV3snozq42kwkbLt1QXg",
  "key18": "4juz9BW8A3xbfCtPBHCkJXEQuf2AysmcEWt1ywLq7EZXWSgyW36j8k3uWgyAatLMcu4TPaAsMc8XpazkpVD5K698",
  "key19": "5bVD2aYLEqzdbezzqMrgdiMCMJh2WFJNVtWJXSnGmjeZab4joiTAEPhbTsqCp1DdC2Yk38WjHPixYsLBvJNq7nWU",
  "key20": "tuqnfCPHs2APS7KukNnSrZSQsd3SZVamEYHtnDj4PWzoYqme5RuX8Wr6Nj724DSEq7biPhzEhet5Xa34ZpPAoN6",
  "key21": "dm74qVpjExouqe3j56ecE5tLwYJFeVvbz8qC3pnbU9bLJDHKxgSYMi9q5sbJg3f2qwjFU29uE1UQorDS4uggpNP",
  "key22": "2hHLjgySrf8xEGWimocBf3wxAf9wtjEtz8oArGnrRkzZBUWuNZs1xSSG8kicXMK79FcswJ8XuXge4nb6jtabzPAG",
  "key23": "5TUJ4RvBqjd5whFWMe22K9Cfwift1kWQnooweK7UvaPfbDom77anRWM7CznzCCWcFQ2sQQ8y9N4wJSRjKE5a33QF",
  "key24": "5djGjXQqtnCjTmgUtQPz2A4CAieGy7vqfLuMHhcm5cD9o6UM1msroSD2GWsvEK3mmtPk7dzSYcjqcwZ7f85amFBM",
  "key25": "d3s4ZBy7VufX7oBQC1En74cKC4WAFqi5ahLBvnVcQVGQiLZjgfkHSPQaJQ7f9xMS9P1jtZWBSDdGnBTJqVrhzC5",
  "key26": "2C7ZUxwPnXS6PNC6g3pTbtrXBNCn56NPhMdH4iJ8qrDCg4rjaXv2pNBzjGEFJ97bWqhQc1J2KuBgdDDj4uRdNhap"
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
