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
    "2CuxEcf6yJCeA86jPaM9Q589Yp7djNjKZZxcK6LortRdSd9aM64xisihzNQ7aPXhCBcECrFA8k6GpeKbCYHYCj88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7wmv49oW348ybDpiSh5FhGLj7vcYgscib8TsPQ15eiADSc34QfSnMBvnD1AMEEo7WyRZC3f5UBFZGxxRgC4nYU",
  "key1": "AstGWSVjarVGWZLvwXXiRkkZpsko4KE4f9SU1Vd9Q87H2hrf9TEnDpgiGS8B8W8CdrSJFEraNu7fERyT21yfd9x",
  "key2": "fugt5K6r1oXNY1Yp8r7jCrNC8mBkb87oFG4HMrEcbzMWkqBr5mamMmFaE6Pf3Fj7uDiVu8oTWzDfX183cEX5ZKD",
  "key3": "WZxM7Yf8Mfnudrnxj6nUDF3yWsg8TD5GXzW2F44JDQ4ZEsZxi9a3DAEUKitmhJC8QJSEc7J1ho1td8EkWZoCDsr",
  "key4": "3SmJrhwqTWf1xhrtiwrFFAMEhvWUR3Ur5yM4EnTt6ugbAUyizo8c21RwMjRKp6rGK9nLharzeqnaEwkPHtLWvXxN",
  "key5": "Sf5YkLuwGEGBS2qEj7aer5K3uws2hropSfiu1rP1HPRHFwM3oZbyG5v3bxWbjjE53yw21NQMoAyTcy8GWXfqo5h",
  "key6": "3w2xBf3X67XvxLjSBycRWLhsRWJSR93ct9s7GRSJ2tDJAoe2zk631vAuChQbWepcmWsV94DTyW48t8xcZe4hK6US",
  "key7": "3Vre6ngu2CWmiEDuCEoeUrHDWhB3oreM5tqo6dw6oJdckS2LUCrRwxXtXpnGYUmSRN51msDbTvVFxYDkWJ9G11ic",
  "key8": "3TR2HFLJ8rsZGZgrsxGHC7ef1P5uiDZtc7HEnDsQp5n4S8RTC1sESBdBvqNJ23YXMvv3K8FqX5E71oV4aEx1hUnz",
  "key9": "3ex71r2KHSA4NWHXModPsq32n93nLeULCy65rbd3xoQQUDWq7CT54aNoNVuzFquehKwmpxKzx2puXZRJBqKiNzoA",
  "key10": "64Lf6PLLvKmSbCgZsdTwfp4M6xyd5tGjgZ2Xzt5iAvShGchgyAhRSAMjsFt8BiPX2eZhnSgn9SfjMCQeryJSppzf",
  "key11": "3nCenAhCXGegaTZpH1iNoS1RCsYotfBLRLeV4moQJ3vyexdZ8n36LsJJKNpLqTWF5in3AWct2CD1MnSAixczqMjC",
  "key12": "43wKSeCaP3u8kmoBu7EcNYejMvYv7j4SvYjHZ3p5zpB6WEBLrLtAn9YbWbyVvCpU4yF1oVH4hfWaZDCjT8vHpjD",
  "key13": "LNEQnL39DvhJx8sAujZUivs67FwVSTeUfnNZtyc6CbiLJWcEU9bZ4vbp9fr5ME8SmmfZWpje2SCN6xT1YXtu8im",
  "key14": "gvenzCpWFvUERJrVdfZ8J1qW5afpxWmQmSr3jYDhuzLHbXFihGfCaE3ksHWVXkzXex9KHX9h5Kq9WDeroNoMFBF",
  "key15": "NoG5bNtB2iBrio5yoMte1yBk2wpvTsyyg2Sb3dVsjqJTrmkTr2zLeB6RLoP4pJ1fy1BmLfAJ8vbKeW62VRunD4H",
  "key16": "DCdDbMz7QkXa3v1pQkp8Ni4kx7jnXDvFmjyKWWzABVEFwNuNMUhzvrfoUSB97RLSox3dPHXxa7nPFrCumpvPjS2",
  "key17": "Wip3H5pSdf9WccHfYmig8xmr5njDYTprmJXEr2C1KG8ST9ckAyvFt6EeyQtimNDq92D8Nx4PqaddTmFoqx5HfDG",
  "key18": "2Y464ByvLKSYtrqC8Amwr4bGhNvKiScJjXHqodpi6b2k5eVvFnWN2871MJTWYaT6ibnrur9G9pBSagANJcMCH5Gp",
  "key19": "CU9b2PzG23yT8TJ6hdqkN3EiSB93ZmY3ti5bpNqdbVfox2rvR48FeyY5MDMJtyV8dihyDGTnv35741Qke9oZNMQ",
  "key20": "Mrt1rjkszK4FTkkYQf2k2n8YnkmsHwd9tFPvK1J5i3ceAQEbizTkhpswZdULgRoey1hKpsDzkY5aAvtHJc1CvwK",
  "key21": "55i6mbt11BxKg2teAYgZ1eJ4px6eCPB4zzuqpwXNNji279wVMJ3vJ53RV59RgzqSpoShjRXpqQy4t4yDwFpcAMVE",
  "key22": "5eX6NjsGFXThzFvJUoPCQrPAh2kfwCACQDLZRWSzPWzjGbANkuEhWCWuFQfjBT3kBEoNKVNfc8mbVPkeuEGyr63T",
  "key23": "C43nApjJ9MzApN1b1KviZCmdt7VeGQjCiCS7JrjcJM77HYDFUdRRh9MqPRKXmdbPJe41dZp8L8zMvUepMqpoBHx",
  "key24": "3nCHR5491bArHm1WQrEcdTvVHmnkAnsCdBfqMoEp92MVU1K7ghSBXjhUBaG4FLWeBnigHvFR2MYXVxXvhrYd2ePs",
  "key25": "4ezJS946rRYm2UwqK7Leb35zRqQm8FcH2s281hd9QRLnmutDjAtk57Rady3skP3ZGWozkiQ53PNRsPXqgUqK41zP",
  "key26": "P4aw8t6HbVnSfcGHpPe1DjB3vEtBPeqSnF1rF28ZENrJ9Eysvjp6jiuq85Db2TMygXZTB2kdVEs7JJLfenCgxsi",
  "key27": "q3Mc1KijmAUiXoQzzu5tAMznJAq2cxWcPzXwNm7dVf5sa9w5b9wvsoCWXptgryorg4NcYu4423uSHMnBakYgd6B",
  "key28": "2xvtKListFNvPv3WfCpwMA5spvcj9iHkRPowctEtUyfP76VEhWBUkHFR6XipCF6SDeQ3V2seqXwfrTfUWYpF3iis",
  "key29": "334dQzYECrCxuxfxSRm2SpE3stejpfckLM9enRyCkPdPR1tubZ5ZxkwyFF5cUXX6mRzQBS6v4yRqtuPQxnmXikQ4",
  "key30": "uVXTED4gJiDe2zDL9ZVcWY57UMccFTL8CgzymzZdRQ5RyGFUAGJZEXUiMHiMjeFfEMVjVbvq1GiP4dkHdm2h6n8",
  "key31": "MnryunhvX8nMeHYmcZHX56vonMjqDj63DfFiPVMLZjbNgM7REN6YoaKeBwjKAUY7FxwrJBx86NHtWJDwT6cMzey",
  "key32": "3tv2uLfNfCRKC3ym4JoDxvC553rRpr6LtQKUkc4S5BbfpQsZaQxbm8Ciu1vGRJYSW8Cx1TEQdAAmurN227sqbpyK"
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
