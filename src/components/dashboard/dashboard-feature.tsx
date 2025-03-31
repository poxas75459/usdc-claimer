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
    "t3YfJMCXMgsUPhupsqY6gKX7iBQsj2Tz6u5M5vea1q6ZMUJAzwLgm4BNrnCCXWctVHMgsk6FXJv97trRRxG31di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41iYChXaKgsD4tVb3VH2qzvrksYyiucmKehS744TbXhwFXjDWSh4hTKNcBEFt5scNefVkZ7MbbJBD5aYwnK34Utj",
  "key1": "3A7zybS8X3owWAfD5B8r3mGV97LYzYUAk67iapQq5Dij7T2oaECK6nhWXi7bifsVQSH448UMNNm4qZChTLEm6gPT",
  "key2": "52DiZxcSAYtDZVvAv6bFdc45SxbYVsU9vAg2Qmtw6NvMRuHLwmMLXACWg4gBBuhDrJGAYu3GWfXPZXNJ5xCpMGBE",
  "key3": "67RMpTrDFUYWSrZ5AYLJ4ej9T8pURNmmTcrwSBHQViJXfy7JDmuYijREEtZmKtyeDXLdyqYA2x4AzEXgCbHjkCnZ",
  "key4": "5MKvF36ERKmc7ajar9h5oeHtG2mKUC57sCCbNF6j3jGiYbXwdWuzmKYs87kXyLBfHvd2UeJNfur4tf3Vgznxfa8g",
  "key5": "3pZBfd1aqbF6WRyqUmBjDf1UeWwLzvB3sseQqboSmkEvg1U27xPmxzvpekrEfSagdjRyqfdYLtRo7RbLgwwSJu74",
  "key6": "5ma1dosxo3AHmdEbskzdMn7fdgaJ7vYd9cfe78yD3aDteHjc5uPoSRa7xbzDuTZbtPFUNhGHvv33nnEeT57NrR49",
  "key7": "4gSK7sLoFEboA7aNDxn5FHxnEvrDyXoZrM7GUk9esnRkSEQXcf1wurD33tYUDRLjF7HZgU2NCEEU5yEbgDHns5c5",
  "key8": "hvB1XSMJj6H5htYxj9R9hFY4iTW4v4f4T9Xshf1s6UspcFMyWszWeAGpKHSK1ez7WZrSCSM48sxGJCv5GNnAjRJ",
  "key9": "3NA1FDNoYuGdKGL21hFLq4h6EFYX67FzoFG6CzAiy4R3Y9gt4jPohZXbBRTceXeuWfshZRyFDuyxNqrWVuHH8qkB",
  "key10": "29utCZxfyw39sD2xCAb8h5sne7VEibuB2A9YLuvi6NBSuUKZHqDtmLnuxMYd4A2E351yJK8j1mBfPEvm7h7HjYsu",
  "key11": "3LuU5uGn6WYhtc178zx7LHvRJnCEtwrh2H3gzboh6vtnSPYonM3XWaVsDncpv2RxpWboXmRVsFupdnUKeXVgmWYD",
  "key12": "3dkY5PTBHjxDh4gG3wHEuGVjebYbeJjrZpNvTL4yLAGqfYBcSabXqwebesBB4b6JFWGPXLnL9jvWHi7gq8NCdNQA",
  "key13": "3gs9Daf9Y9Bp6E2g1uWRugc9kbAahUArpnki33YHi581KbPoMMEFsnzmpGpMbGKn7d4qX4XowM5uLYMyvH29u9om",
  "key14": "4NEcA2mnXaCaQRzknerWNkFS2gZ6tb5Qv5QgT3RUtWPf31FHKQrtjBehJ2t4v68FbX3e4bYs49fUnfo5icugH1vV",
  "key15": "2xyHGVJDps8n4oZpHwTgHdrCQfSqoUnWb32rCm756pgapQndQVZinQ39tZvWDEczGXztxqjb1ND5VSGmUTwPoptX",
  "key16": "3hGcPCsoEs7EYRKQoLNrnfVh6jWegAbVPdAoA9YGoYozSbyyiUwCKBQnNjFTknPGAE3cZu8awXoNQNHLzrt4AMLL",
  "key17": "59AJX1vB2hvNg9nHCBRw4n7Ab58QKVe4EVsXuTQNKaetUHb1ypcmZFKq2LU6czEaNVqYAMzH6nZ3HRppM14fNNYP",
  "key18": "4yE4pueUyqPZiLGA4esjFsuwoprmMgBL9Aqvhru9aCYvEwV8gxKo5yyuCfBUtWMnR8JcEW9zcVvv8NFYkSRsonhQ",
  "key19": "54UGY5LqJhxo7DzyCuWukZMDG4JCNcJoPG4fUna8zXkMczoLcvDJJvfRqRFcoBM4AW4m8BW8aDEFP7a5xHQ6ZdEV",
  "key20": "2T52XTRCFrtxDA1A9Ros132WC6B8xrf6pzzdXVZTkHcKxGT5L8tMJytQ1Q1c1XeLBUxWEdtGMPfMsvWLcohKd99j",
  "key21": "3GWGDhSadjMCfG1iSTV5epE6UPkY3UAhAFqELV9zTcA9oRLMSApRzx7NSvcwcyj8ACow4BEcZdt7c9rx2Ygo5pqC",
  "key22": "2JxSsGfn86LWjfAyoRpnKcEKH7zozxKN2993g3s3n744Y6M1dgpYP4mADyVrUuWT4RdFD6PFpUBszKLkW18wHSae",
  "key23": "3GdBM3cRc8J6fu1phRfxsMmVGBV2UJgTuvTzBcC6CcFeMzrTwCAhKZkbPwNgKminz3cB6Cgbymi5aUT2e2USt53d",
  "key24": "2DrduNFXajjpVueVNjhTVYu6yL6yRFsaahw2DiySwgfZ8Wi8bT1vjD4yLz6u1UZbumfQKkQTWQRe8ZKcjJby6LDS",
  "key25": "5szDzD5yY4ktdqgCJw9j1hGtx4kykRq8MmtSSeXvjZcXHL96x5k9ptdQvYHietptm9P7sANnpQAgp7grNvq8Hx49",
  "key26": "2nTTD74EEKmqQRm8ZCT6GYv8WhJhYKFb8t2wnHcbnEVpPdykQY4m2BLuWcXqWtiPyNYmzjhmveNxvaZbi6cMn1gY",
  "key27": "c8sJ9dCow1YTgDRr8GzBThWnT9wvAfKbfcDHpgYK2njN3BaErgwwBXLgaoYrxnfgceE7tCkcviUKQvxQtvCdu3m",
  "key28": "6SmSHjao4SmgJ7QBQ6CY9ztb8NKp87nhUJXyNzhoEE44Ghzk8Wz2vGhHaSwS8u5V91JuMwBY2q6wNdcpj6GJ5yS",
  "key29": "5nbyi7RdVbbqDFrMQS1tdKLmgTxsgTuvJBFMCJtkX12LRpgwfbF2cpxsokrzkddeqNGJesRB2eRXV2q5uTVX2F4P",
  "key30": "28amxW1ZwA3xpDxnTNtxKc3feGP9ATrWeJyhWWskrhsGxSMJAy1WP5Sa91oNSzNcmpAUsG5xK3AtiN9roNA7TuZt",
  "key31": "eNPEEKsKKU4NCMzzVioJBnZHLoiMNR5kZNEhq525tH9hY1MdcCBkXajrLGZmjTmk5Y4fJjjQz9T1ocAxXgohvJs"
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
