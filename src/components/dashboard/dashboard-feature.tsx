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
    "3UGMrRU96ny5gzY87tTnyctSqpvcdxPaqDKRur2yzLBHz6ec2z1363igBpeJssrj3o8p2bTkpfeQJY9jkTSzENXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptNXBJMH77bgkHvMBS8eiHD1HNLgE1LfXJEhu45bjBjX1PHG7nkbyYBMJWrceWqJxz1iNckH8kq3KzjyxEFBYR1",
  "key1": "3Z12jgraC3HMqYvBgJFw4HT53KMAxhp42ZMPvrS9Bi7di2SqH22nSDyjdPCVfr1cTcMjfzHhswwRT7DZpjVN1LzT",
  "key2": "5Deg7swDjKUE2W2yBDo2tsbXhswNBCYNrcFMcT7UqZhr56G3V6X1y7p8KfERsMjetCsp2R5dAV73xLUZDTap3mTm",
  "key3": "RHbYq4yym2t8J47WiJnHfERbBJK38vqtXgBCXL1QWC7Ry18dvnh96mbhahnM45fSZLP43idbXMzd4MnFXSJiyXy",
  "key4": "5GcYVGCkBARXBbQsgHhsQh4XppB2fw7WuXLeLdSKNMmfBDTUkfrLrnhxS6rqgAw96kRoNue9wz4p8Lgu8SdA7HyF",
  "key5": "2n4A66iqHncZMaWAYBUcyLmPi5nfma4cvCPKr5eHspcNfAFt1EBXY9uyWQynGgNN7oSXZ4wevy9LqWyjdhT6Ssyd",
  "key6": "3BxX97BTsyKVyeL6SDStAKNLTKmcQjpxMQH4pRxXFcbk482zamkT1WBgH9e4WZ2LxgbDgWMxTs4qbXWCVtLDnU5q",
  "key7": "5Y5pzdwzzN7MtiQqC8WzhmYuqEkto1BCzRj74tpe9bYg28frtdsPpQpt4b2QP44hZnkuG9JaWfnK4braZZCLMhpN",
  "key8": "yYMoSw3P3EmbAkaADGaTKKs6ube58zE9JAEK8YWeFeX1vXrsnUAGZwMcquCBHXHCY9YRp2LynuFPAxs5QfrPTYJ",
  "key9": "42cUuVpp7BAJFXQaXPJUeV8RcBCNxTBnhd53oBAhFsDTmU1Wphihoz7oVd9phEn56d8vMJKa9U5L9F6j2UZx5TsH",
  "key10": "55T8CHKB98ewyYmtK5X4XNSEQJxDq8QsM7furT386RCb9WtEycaVJ4wpXxqB4JioABhjY85KSL5mWGgdLfDSkZ1m",
  "key11": "UFWN9cUnwBp3R5Amgkq55H85vWkdL3HJYGywr6KmjDzg1cJpbSJJLhA3U8gedsmQTL2MX9yHWcieiHdeJDkTGyc",
  "key12": "54SatkkB35chdQs8AEq1HSfDs8cRVXNVCXLAMhbuV5ncEEcD53gbVDvm713M7ogzv7wMWJmZ1mD8LPZHjB8z1raa",
  "key13": "5PPEeq1K6wqJ613xNcVPE81cknHE29mb5UE7fZZXoUeqXyW4Epbh1mFoN8NzCetpHQHZsPfxmmUp4u89uPrgavkm",
  "key14": "38nNE9hp7Dxaio7zvEgEJ211WtuWXe4tR9k9oHxUd8Vux8g2iNhtujCL6F7UAtiyVg9j1fMkbamhs14QRoMmC7mL",
  "key15": "38CrmhqsDkXwrRjRoZefjuS2FUMrcyw1HKTBnpEv8BMrLMwAfZabYUgv169uuvh5k4Thu3DFPpWUfXuGej3wWbuj",
  "key16": "4at6TDGga6BgXRFHruncmEsGXhufas4mdatofLGoc25BtPF2vhdhWBp8XGzV4n3fitr9bGuxhpsu53GAkak1bVWG",
  "key17": "23wB4csUsKUvFNYbmn7vwTGezaPSdCdLKeePRXNxZHgAjZcpq4CyaE2YsZVZ3nFLzGaeJzhpSsurqDrZDQM5CL3N",
  "key18": "pfZndmiTqnGtYSGYXbG1BceSEZVK3EoYGMNsY5udTyzrzrwLYhJUvRPUDtZNpEByS2dGWaqS4wX5F1N7hrMjhqd",
  "key19": "2Hd73EumGyYga9kxPYKsUGvk9niTeL77e5qkAqnTn9A9Z5X6r7p5GKqpDxBVsmJGcbu3Zkk5ADtne2B2x3HH4hM6",
  "key20": "3am9KesNPJmPSNLhSVYoEgWMoJpH3yTQtXmCs8iFgAfoKD7UTtpvSddPPWJGAxzKPDMHYtSHBfArefwC76FswFWG",
  "key21": "4pqs2Wf4cPgDZJF4GEXRXAVQorEevh39eR2KhBW4Mxfox3muDtEzLbGoSBExEsvZxPkFWbAdYXro9EBei7idEdGC",
  "key22": "2Xm2fRFtjCMuD3XxR9Gt8tay3iGdCZHDYxbxbT5dmRDtzxw7Si3HPxjQCFCnHwAC86xkqTd1VD41YXDSoGrRJvv2",
  "key23": "3ja1MzuMvdtUcYpXLgqPM3FTHUxHN3H68kCxGUemJaXmeDiBgToEK2xVt2AkrFYDsfxWUXsupXa4eghMsDZA3e4h",
  "key24": "2fLBYrckkWpLFdjZSMsSKTqGsS3Y2qrAtL7Y42tcESPwimXuFUdWXrTtQXJ3X5oFv498rkM3V4oFnyZVr3GVC3Qp"
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
