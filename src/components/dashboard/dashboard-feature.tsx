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
    "5Uoy8ucYJkdyJ2N78gfZhFykUJZdLvNKv9GgBnAukou5r6Mr81AVgzTNbdf7RcEK67ufpNiN5ZqJNwUWdToLqmdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2jdgEG7J6wgYBg818hyAwEWXWZ6wfRAxEDoCrHeLdfDNAKGoVV7AdT8xnF7C5ZGDsWBWUY8NmwrdThPXGjW5F8",
  "key1": "4DfUBiK8zixFyRZR6vPuTQRDLe379iqdEb71SYVcr24ok4Jb8kiJ9L9o2kDoSeFdJLoGxf359Q2E2X9a5iGBSGjS",
  "key2": "5SxTUp3X8scsgYwXmvpMM9zGAZTbZ5TbxTzr5Mp45BEmKr8n4G4ia21i15jcjpYTCXo3SowCthcra4dXFazZw1cC",
  "key3": "4JoecHyPgpESvb7gfD4DYWxV6ypmmEws9cokE5wk9SbK4iRhqx3QGbdmiysFpcAFQRAdYGhGfJVN2E4nbMN9pgxL",
  "key4": "52j7VkLwG6fzTzfWopUcDtHbKBexcF3oLXQskhU5KSZnXFH9NEPSqWCjraFnC19sn51rKAYBQrzFt9WAwAkrGppr",
  "key5": "3WcXaLpuyzwpMbuPFnYVzpYnQaQMcUc35Q9yDqkEn3iqWSKdTZwkAyZ9Y4ptmsyQhYaM63grNCPHXZQbFGSVBLiJ",
  "key6": "38HycLowF36SqMTdkTndr7ZtPCipeRKFkN4fCX5BXFmYWozBeRdmCJRRdoYdXApWN3ENW4qAoPqvYEiRK8hCSpoS",
  "key7": "2dn3hkw1Aeq8BHhcu9mPtQqp7F224LvqCf8patvDyhK47SbJfymG2PivFM8os1zXZiChfSafcLb5XYYs4Nr7Cbab",
  "key8": "oV9eTzwSybzX7Ctp9H9vNo2quL2i3A2rFjhsytcmBDxYxgC4DnSsYa3xcAgGa8ygWvkhMBM8UWTNvsDcPNJHo1t",
  "key9": "24sTneFZZwSWmF7wnjEmbWbd7L4gi5ZUkE5bDE4mxkDYAhdBjJi4sARkzxVLq9hwR62xWt4rUduXzACSBk7S9bU2",
  "key10": "4hRKvSGq1CRZhLa4MnLEjjUQcYqk6k4KwhjAFz9y1H8RxK89XqrEXoa2HtXfZSU3gRYt58kXUS42iGyu5MhK8sZd",
  "key11": "4EpVpTuFKowdWLsbBASdd2KW9QqvtSgxgcjrEMiWBv5yChfP4xxWBQscKaTJfegMVa42EMoB7KEzWKZKJPu8xs42",
  "key12": "2kX2u4MSMhCEANCD8xeeKPCi1crE2gLhtdpXSxyYh322tPPjA1jRypvRNhKpwceEyTXgzDXbZNtY3FdDkJxiDpQu",
  "key13": "62i64z87uQo45iEvTLEBGTz8YXFUrAmziNHfMN4DJTJrQpmhqmRUhnmtH1f3hV52fBf4WmMd73GkGT5skkEawq99",
  "key14": "2rcTPGzRiUs7t4DHzE3Qcb8JHxBPEwam7LmRUCNAYWZmPxFVGhc4iaRfnqssbEYY1iUmTXs188f6WHn1sASr6CEd",
  "key15": "3KRiGFR96z6fCmYJeNKo38HY2ARwsW1gn1C5RXXMhsiFeo3bcKpsNqFsFCcUgg1SydQRhiU5hX6uhwRQ12yn8eRG",
  "key16": "tH51UhjJwDznM4n9WafgmokqMNcTcMDS67TB4fFjrBcnb9EVTeVc8Br14nMTuW4gQ7u7UbHXkVmcinLuVoEn7B9",
  "key17": "4ZCgHLhABGexWxVJ4bKZMB7GqYByhPju44DN4jwhUx4F5FRapo8kLwXUsBzdFEFXuXi5nt9DG17Hvs14J2LgyRyt",
  "key18": "4d4NkeMgeTyh4X1uRBL8F5kpK4AWsANwCRW94LgTmj8q1mzfRbDUBhZboaxRPri9esqcqCcfGGznBteomVsiEX7B",
  "key19": "4KkxPBJVCgaVeoYssQFwJm5jXaZu6FnUiiyTeqsqL7doZDwSg6Zj2hEUoC1Nz7C7xK9yKGsmCpo2Qj4Cv1BvZiLU",
  "key20": "nHaPbBTEX7HvzUqtZfMnKashaSQuZoPCNNWk3x4LvoDiCnHP56BLYzwHW6XG2pvF6QhrPfrc37vWxEBy1aJyxDT",
  "key21": "5vqsugnS6im9W21WpdBURYjkoNkfM63MbRDc5TkEn7V82bC3Xhj36qEsEUW1JT9xYJEp6BK3inbeg5cbyqVvNk2S",
  "key22": "3e56ULP1BteJygK4EjM8SquGi968bXBJGCKfXEQu31RRPE3h6RCVuT7G78UCihFsjUcPBLY1sBCg7G1E9AM9UH4r",
  "key23": "5m4HNPHVZekqejxeF4usHL9ezFSdrqVRvPnLMAtiKqD2b52FaBdXVSQneTdXYbEGfocvZPn68cfHHWgmKZe1QbZn",
  "key24": "4HfSXc3BPrWQ4duu5SLp3w1VecLeaschyrMJvcFvKzV5vscCKzonwQTWZBSGoUoZoig9R2toZYTFCSEDoHDZtY3T",
  "key25": "dRe1QJUyrYbLXQBAFZ5G43GtPNQRYghfrUVVBwGJ9jF3tck2GM7S2JMMWnr7ckriFUsWh4JEJ2ECvTtemCUSKJW",
  "key26": "4ytNki4xCq8AsFE8xdoypCmq58UtwbQm6vtyjgTYFEY5HZMHRuQksNq5yNYpUpuhAHzmJzVHhnuf4rX11jb8woMf",
  "key27": "52gVVmenEBoe28uD5eAyixxXJpHsd5uWAcNEoUf3cYntcgCaur1ZKvJ99czGmKBZ269PnqFMA4JFDotyPEywA39f",
  "key28": "gUPLxQbKLEyj9zeHmQZu1bNpuJKo9PXD9rwCuXbvEACGKmatweEFnbj3DV3dy23Pr5PVaVgPtdK7Ufewc8rYJL7"
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
