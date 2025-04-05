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
    "5vXeY2NSsX8qFXnUUDdxXETipKpi6Td1T7z8htcDhWAkxmCUYV2ck9Hs3HnyNwNKXNtFrhAhuWayd1iEP69oTux4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPtmncPoELUkNyj1K3qkN1gZF4TvhnzpvGdHu1fGTasCHdSakX6WDdU4LjxBhfbEuKR1B6Dipw7JCRvwygJNsnZ",
  "key1": "PAJSX7EHpsXxgCaJNnKpM31BwkfurgyjP7oXA6CazrwBFfxdknvdVwAbi6EXtpoHyTbK62rtGawVpnjUbKNU4qB",
  "key2": "2RCPSXPcDRMj1km9TfpgnyXrNUAG67LiJJDpZfokrLJ9KsXfj3KBZrdcYqgA6uUwAiJP7cmtccJXTgpFJh95NzK5",
  "key3": "31oxvqFHXP1HGY89ZN5RdZdHiLbcsAmALoCLswQn415dUFrUDkmjnbCFmcu2e6nAizAsACSzNDpn1UhSZGhG9hz7",
  "key4": "2Dij8F5Da3RQiKUuiWpSpUM8sEA2sH7miZuMn6ZYrtbQVsuf1giaXNYpkqTH1EvCySYEcMBcrhRyATWD7eow4i4",
  "key5": "2cnPoYBGRxGeNSxE7j21g9zXRPp3wfZXJhrcea7S3HdmoEQkUj9zyhst1NWBog4Rtmfb9C76faiAbYuoYZHjSge2",
  "key6": "4SDaKMDHcMRhB5yxeqUGFvgxY7D25eLGMY3CkvgDTTTRcAhunKHhGMq758gCzpxFBwvR6CnzDAoCiFq4abG6xcy1",
  "key7": "33u7U2TdzGtXBQVLpQ94QpEnBSHHAwuDsFxE4dz7vhDBTJe1fraQfpEaJwAp6pUrX3pAoX2S3takjXghsK5FRQL",
  "key8": "24Jh3YXizaT7A29jtf6gxiyXSLJsjj9zwcuqMzHn5PVUgWQCqrUNtqnM1jaY1tpDURxp48g9X1zmmScu2vHr36Qf",
  "key9": "3xuQ6PcSNhEEkq3ZKgax6PsiQmZP8SY2QcmKvPtQi4db2rouHpkgaxD9pad3qotNmdQLG9Rx6L1pQHeE2pd8g4v4",
  "key10": "4fdj7PWng6uGM5oL3tpFozYpDMVFD23oHtUcaxkTsS7bTZFB6YMXuMkfoPWfPuzyXnLxeKKciAzYYzp1EcgY45Ug",
  "key11": "gyYnQyRyg1WfYqSo9RamDPCEnnFKDJLXU6sJHaykUQknCd6JSCqAXmr1SJ8yCwrK9s5UJocPq71iDwMbWCYxWwT",
  "key12": "2BQAWb5sYS1Vhbh6h2sJGvbUtyXiTKwExMxN4VWHPBrfPddTcsEHPZzmTe79VkkYKpCaDSqgs3tGXhwbZVUZJJf4",
  "key13": "3qU4z2UoWF2eqzEZQPkW2htTZhdXB4yZfucFSratyEqCfV9ETjvJDaKo1kZmAH4wXieXjgbaYRE2VU3py8UqYLe3",
  "key14": "21s4vTNVtFbSPG6JswDqavp9dmEY5xHPaxC1MMLkdH7kFLPwD2rwuVDcZPmeXYG7Vi4zA3hLPZvwQa6dXqhBVXJi",
  "key15": "TXwfsi6oL7N1LtwP6vbk7inHiv2GfuULfSTeoC8kGgswNEB9ZMQFbW8xKbS8zbJdQfmpcpnoY4rQhtn75B2VUbe",
  "key16": "438y1w9NhCSRbng8e8kz1diJEMvuXhUXMWHJSuVWJXR8rB6FNWj8eEsa821kqDeahhkho3bgNMfZMXdnyheVh5YY",
  "key17": "5XtzZ3co9R8ro6PHqofvgTNFXH9ceQVoxGDVoWMwriXxgRs8xov38HPUcAxKMjAPbBuzdvjWYf149ShnDVgTC1Uy",
  "key18": "447t7JiyVeEPafsaVgzigBn3kXCc7heTpcbwKEiHVbwDevjFdqa4T1EkcyCUutH5tBrbhiQAUL53YGRaQQ75Z97k",
  "key19": "2SCPQ5k7FLUWhDYrcjpPKwgMQAGLNdGrZrYwRjGefzueWdeQEL9cNNV1xqGi8CvHtymNsafFpfKLakAseP2sCiDY",
  "key20": "5JfYrAhct7Gu2t28JtrUKNhp9MRdgB5aVJS2g5ZQX1E2b6pzykPDk8qqgQYfBJdmCKioZh7CbVedxnuzRyX64W9F",
  "key21": "5VXkMFvh3bx5NZLGjqPD6FriRJ2stsSCMeHC798JzJYvP3ogg4xBoNs28oAoMge6teZZX2fFmFRa7qp3UYQdfao6",
  "key22": "c1RdU5s6XvRU2HGmuvzpXbXZAjwT4MqgXRJMYzz5thEB56XqUs7Co563Ve9aXjr2ANWTXAbCrhp9BK5E17y4ADk",
  "key23": "kVu9ASqRYzP8e8romTuXdFSNCKpmAG3pHzamstYBfoSPT3a6ZZ6BhAcHS1aH1aGbtFNYCbuuTe3jZxjJDAKnNHn",
  "key24": "435VqDNCNuN4Ttb41zrrBYk9REJmEL1jowAEkdwAMQAmhpTr3zCo24VpQoQ5EM241SfgyinXqF2JqnTHCbWMY2Yv",
  "key25": "3UhKDA9A3bThCEgBQ8BrFkSqjamCosu7uSBY5tv7tGzo6NHWwXxg51nKAicDFHLyMCwdi2mXwa97xiHaEbVJPcSa",
  "key26": "3DXy1eMUbDbVWgXi1zCNwR4rkYKjy3jCGszFLHKnxwbrEyBN4cjKGwBdouSmBms5aB1eF23FMTZ9EDbs9mSc8PLx",
  "key27": "2ZcTdYNKebEcFeQcEUb7rDnEZrz4xT2ccUAiEpZ7SCQQ4HvghJxsEr4CNGANeqKx1TEPxvc1jDHavYqhhWR934uX"
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
