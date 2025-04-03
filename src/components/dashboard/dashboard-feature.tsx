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
    "3BZX6jojazbZuV4MfDuZ2xqFMpKquktFBktVC9VxecAGGLJBFDMsahG7kPK4JXhR57TuMzDWToAxQsrEE8QjvKq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbaDjizAv7BMxgkYXTH5j9QAMDhRviipbjYzbMkmpG8Gr1D5HXy2w8Y6J2xE25Y3tjU9VBiRD6tGX21o5NcVz4Q",
  "key1": "5cBBagsnEA1g5x6o7AZ16JXGmrCmDoqEExjPhwkLsT6ryYkVdBpZzDW6CZAFAawvCErE4Rmy5CvzAbXVkjnVp5m4",
  "key2": "4qBmqECxCZkH383S3BeocW7j7bp8u6XFRydWv82MvJ2aZY1Gvi363BTi9EJYP6qhn7xjvTY9zeBHxYKzCxcokCmr",
  "key3": "3XeifbEnmJjhKLHJcK8V7FNJatU8MH4c1sj4btbaySuWfAxov88ugZfJmN5FzkUbWdSonrmFVcpZAqveZ2y8qfuF",
  "key4": "4hGHoLpHuUYX7ypYagfxTq7xYZwpGr16vMTwrLJEjxev9xzV75oxXag5uqwJga88CV3uFEFnWggTy1S5jRSu1Ew1",
  "key5": "2q9BTadkbhufQ7Tk9akStDZLCghFBQicEK6Gu1qV4oYfZaohU9tunVY78jXga54fkubsiLmiZUxZFLchH2jab5Rt",
  "key6": "5jjAg8yeDA61oXsC57XqKkz9e1BhgxhGjK1Nv1uTnVSyNTEvcjtLmX5DFmUhy8J5AmUM949AcqLVpk1kidrmqug6",
  "key7": "5rTrKdB7MbmmVuXuyPEnNCoTK6rkFbNjsC1cn6Q8HC9oJxjAwFrhsjxtCJGRbMHyPafy6NhK5QT9zZTu1kENVJ9o",
  "key8": "2Zoa3pCbbKpZPV5yv86ox9EraSpZBMtzYKYRHej6VzhuQnLtTkPSmA36Fjqx1U8Fz4EU4zKbREBPMfiRvBGkEPwC",
  "key9": "2fFc7VoVos2ct93z9WAiJ4HKkaFupSWEcijeFpurHt8yA3n66PecRaySBvYibqYYVpuL8GA2WddJxBNqiLcdsiQF",
  "key10": "tko1Qm8F38KjaN1zkH3YnC1TLrf4MFJHPtvREzRg39j1jqnHDJ6rvkKncVLKvuLXpiQRkDLXqjrriNCyUc33q7s",
  "key11": "2R51B5VCNDbqzMMsC5Pn7xPDSEDqJTkNtw6Tjd7pXCLGvmmV9eY5eHS92buerSVVRf8DrMHEyrDwuNjW9dbne9k",
  "key12": "48scNymwZGGDKQJ6VABMjSmUWT7z6GYaADgDdbUPeUuaUiR784DENTZgPUX2LHKd5dxvkv7tKTFKUEdKsC9F96KM",
  "key13": "GQZBBBFD8XhEahoPe7bHXrp2WQiHeC2upfARsYLpDfid9tat4LVn3sWVTDoR3E3h3sQY4NU9zBNVwDUR3cu1ors",
  "key14": "2Q493CTfBhphr4cWYvg11LcER3nY1m62MnzpW9sSiwK9B5NAf8pXzQuYV73ujRFckyiRcMKrFqd6Sjk5vyLh3434",
  "key15": "3co3KtJEYxHhke3nRuS96Tv71Rr5XoKVyfuxXH556Uiyr29g7QfE9aEXfnpoqTRdJPYsCLTxp57uje2hmT4fux6x",
  "key16": "4FoW8P5iKttqsHmuHo9LvLU6W368cXMGkJSswK3Dke7G8ZpJsnWmu6ZQVsgNwfcnkKJAxkvpmUp19NPDA1wqijJ9",
  "key17": "R7ySrfTX5joG5PXW1oMCbJ7PGo4XejBJVeFpXyu9K8RdkNz4EVJFWemdAgWxuZbN7yw8bbL4eZU5d2G4xM2NRNV",
  "key18": "2u6ivf13B75R4p91nYpPdTiaGFiwVfGsHXdn78UupYM84ccRcup4PMU4e9QEqNH8SZYdjihUsmHyxNPZ4YzUzBZ2",
  "key19": "5uXFaA4DcmQbjfvZGaf4RyTdrZzxTDwFdtoMZKju4gh4UT7n85p2Zawpfoj8VA1H3N2TsBkY7DabUQ9oEX13KsTa",
  "key20": "4khUtY8np2ZzwBq9erGVry7hH2BwyVKW2keRgNR5dedRaeJjWkbZb8RJ7Y9QkSBiayZWExn6FNJrmQW8auCgjeq",
  "key21": "2CjPSNouvayadgWj3o3seuhrkccCiik7Qe1nBkXFuKiR7jeZGkckrceZWDHYQTZmuXjDTCV3CixPt57gHbpnQY9",
  "key22": "4qmg4JNXQXEHLoUXtkM8ZgSNYzKdoTRauVEuAyPerRdpiQrmrAp1u3myt1yp72Pa5ZFb1QuqsdpSX2BQtVSsKyn2",
  "key23": "4QTieHJZbTAY6UN2zzwBmbu6o4kEPWu8DXZL1xDAuBAsBLzPCCxA7Zzmhwy7ojtmnw1DiEzDSsQUYHjCA8t3goDw",
  "key24": "3ifQFSiQ7YXvuexo7FL7D6LCjn6JzN294G6XLExBDZmN7jF3ck4hZkaTPUskzveGJvo5w6oyoCmstiBK6x3EDKwM",
  "key25": "3W3fMndMbfLR8bKYCDKAU2rxBR6EqQWh6TkY3GuxSmKqtucBmy3CgqWDCm3tqhz4d4wQRfpvPduFEpiJE6P4kXgb",
  "key26": "FSnwxqjA99ttdHtAfCGF3bMkVJruMcGQ9GtXC7T1TG9ZJ4ocoYjsjH6z4XhsQbnw1aCVTZLXvqxti7e33AvfGmp"
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
