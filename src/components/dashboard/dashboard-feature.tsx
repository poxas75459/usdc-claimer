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
    "36pKAjf39SpeVTFEatUMr8ovPvkt3augXvRsNdF9Cs1YygsotmjY24HCZoYNUGz6rCh2dFCoTt97ZBqhVFZde69n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LFe89ZUmVjiAkm4GQ6g3LsErCJ7m9i3hn7CKF4kkv7M6x4UuQjpiPa8UyJmFLjwxaA3GzR5iFXaWpWnW59CUNR",
  "key1": "67nMG2tusGhmD7u3neyWTT7ZwKGRNwGMne6nHL4JPNpF7UiydVus9Dhy5fnTpczwxNiQXWyLRXkzHdXEBRKjypcL",
  "key2": "5TEqEicy928pFqXTd2azPsSTju2BcRtmMn4u6TRzi7rrd12xnRvC3neQrKJXLj5sDqPscLbTrTudpQ3P6uhC4aCw",
  "key3": "42dWybd3ybLi7GAYjko1QxxXKgebkBsDPm5mQQMLWFo3roWHymjQ4FjUz2neeTKNs1daGusMrSYCPdmyAHmPrKYu",
  "key4": "65GnK3RVAe8dkRVUdbhHKB621hGEfRnS8U42382E6NCU6NY6kwBwd4JQS6JupZ1pCm4sREXPSUYpoDsqRXLCkHZK",
  "key5": "67JAwvnhsHrhvWEb1aXehroe13pBuJp7EtFniorcy2YX9y2iqXiQ747vPSBZgQD5kPMzYiSy6EWkQcS1nEaEL8Bp",
  "key6": "2hDqCotSD2pFdyQCjMHUtNExzUiWwRVU7j3fbpcad6kycempgZXDk84Diqxs3YAHkrfHh9tuhgKkrPjw2rMLxmJ1",
  "key7": "5HKm1LpSQWGAfmxod6RT8CZDp68218MmfKwP7s6NSjDboQMgcBGybFwPZVRdZMRdnGUmdkxWhtsPB5RSnEusQgcv",
  "key8": "3CDVp9SjdHp389kS64k2thQwMv5ZBzPZHHMjdHcckg6LoTaDGDhUjvUUVxeaXC5SSvRAvF65SGo4iwyfVy7FLqFZ",
  "key9": "2Lur5giaPUuthQbSm4gE7F2WVbGfrT9QpDHW1a1ZpriPfygVThSvmx36nrWwLWU54mdADcGwgsX6daPNTcUWYkup",
  "key10": "2Dxt97WYnWBt8pF5HkfZCXqAci52F1g7FgBtHZwgwUnRhjcAKwVS79KnccssVxBp2j1udpMj7tPpLMthWh6tiWk3",
  "key11": "2aiNpdKzEzYuTb4Mn24dZYWAPEZfM7LmeRFm2E6j3tVPXkYoRuezw74UrhZYVsPXYBJ6gjW1veNKfunrxpyzWaTH",
  "key12": "4AtDyxjfp3YWQYG6iXU2V2iNYJKJmUQiY2if9BDMppXmop8wcjyeFc4KMHdjSrFSWYKUMQeACgmCsBaak6bpCoFZ",
  "key13": "ib8Fo5aYrWjHNAkZR6qvwRqnKFAyNebpevBJAa5GKY5LwQJqkNeUrShkgtj7WxqPA1eE6dWy3XuG2uPMNSiRqTN",
  "key14": "4JbB9Xpnr5rEgyHiNru5iq7hfvtmAoSsGxrAPXWdyCAJa7XMdrkTs9aQbmAJtJngH9pTAbmnqPyMi6Z9SwNsHDQn",
  "key15": "4VdxYbSRbW6NCYPrKDBKJqAuR5H1Cndkbi4Mbi8wm6bK4UagMeZ7WMBPKJT69My2RfFL3S9A9WBtKiLy7jvsxtYd",
  "key16": "2icdndhdNWr81ZqT68knCb4qsRSXhQpos86F5i3HSHxRJKCfKKXPwt86qivL4erd73CLNet8R3e1M4qqbkojAfxu",
  "key17": "53b8qHjLjRJku688Cemevjv4AAfP4DxEQgdiEQyqAxCxTwQgF6NECc4ARmWJHXGCmaN3AcA1FfHoJLnVE3noKktW",
  "key18": "3Cmc8zmwHrtyy9qNvyYBbKWTs4dUzr7fx92eGLSWxLQ8MFXWC5besyvge4Ze4abjwUM8Mw1hkwAsR9C72YZuVh1K",
  "key19": "2yU6nE29REXQdkF4M6ao4vhMfcLwzUHtNvjTBiTFcVHMH4WyRoZa5zSV7yZQT59sE1WkFL8bmYWMi5QGPCkJELXt",
  "key20": "4cSvKoXfTzcUkHMrVUYZfX7R2VK9YNLfdb8WXniSRHMF3jpYPvjPkFDsmvC8QKLDtDdKwdnrVpThrKrfr1CAXmXd",
  "key21": "3nXZZqECi2PWpm9MEkSwLoDpMjtwPtBT5aAUog3kL6DUafxCK1KcDuXFGod1N87xwTffuTwW65J3neSaqXeaETb6",
  "key22": "5LRN9BXzxjWgn7NmHPhKWtj47XmdQJXFDVT5HopkdBqxFQVhmkiRk29Uwt6yNb3B3wScAEi5rjs8h5ciryySHw7b",
  "key23": "4W34LS1WmvzEnd5wAJYPcbQQFUpe7vRrwLdLE8wZ7148LJHVcqCQgw87YLrnZjdwB4WXC1Gb4XnXMW6Af9bK4viY",
  "key24": "PUt7bgKANikAkVmpK5FefJrdLE8ehenSg3UrTyJFnERGXwU4Si9AfxhEbmgrUR9khrodD67u3urA7QzPXFNbB5Y",
  "key25": "3CpAhSHA8kdHVSwJ752BsMKjKK7QcLaTkdY79UXDKQBGYzG1iAMmbmCE4M7RHRpdgZEwSc63ZPmgyuXoZr2p3rb4",
  "key26": "35tJkz15eghQjMfu7JK5XY4nMy37jncABrRcrWQL7YvuU71kAmpqmS9mmpSniSn633j7ic2mLZEK3dgbuzuqsGks",
  "key27": "2kzZMFxnVA6jPtnYaMBq5QxRJqPFYuaWEP51T9HV2pF3vLNcxkJ3mJTurexodE6YKaGr1VvR8ikwZEUkfMvFnHtb",
  "key28": "5XtGcLDvdrSs2v4Eif51DckHe4ZrhanruaB5fiUT7Tn9KLrrJs7CtH4VsLwQuXgsS51LXAi5s3qKquzPLQff4RdD",
  "key29": "fRNVDFzeYpV7GL1VfVUuKrbDpFL49dpmCTzLW9CUY5CdfgAsVQzKYUvyRA5FKZ2dDStdyNDU6w4vm1yFKmdEsEw",
  "key30": "215EnRakHHeA1WuNR3mnKAwB8p561nDKhpuf8fM4n7rch77fZYt2v5efwQ9S59syRvYR7uGdVaXk5z3vtX3WdJh2",
  "key31": "4MqRPMcEp86jLi8KiqTxyW8FrP7EiE1tvNuQGbizhoAmYzUh2omAD62mGE9sdYbFdAmrHQTHE3JMvtZt4rPLGXxG"
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
