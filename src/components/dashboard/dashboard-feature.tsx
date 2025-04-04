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
    "g75Jk3YDkRfHgVG1SnHGUUnJApYrCth7oPwqMC7Qw58YUjZesH5Lr7dkSng458E6csUEbWJdkhNz1Zn4rRsxknW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xc3onG64TfThtX8BjT4CFjioMp91QN6c5raGHX67oeuK2fzm5ztuFp4znU3QnewXmEiRWWWfJqKQWkmUpvNKGy9",
  "key1": "5YxVUGRjmzCgpkLi7eXjK5xPwS6rRwigpcypb7yxaSx2J157wPD5EbmAnXeAoeLQok4AJdAjfaqcWQQKJs9d2Mzh",
  "key2": "2dPtZdMbqMkyGMivVq9hAYXSfLwWQsz1W1mxhBBiRGPJTsfAmhavznJdrqsE7Vx8JoksAapFKoQrnXZ77dPRhmUh",
  "key3": "4MsZmyxTXcc5R5o4bak7yezukRXbJB5eG7zZbu6ScNoU12bfF6sL2XNfEmBzioL5r7cbgiL4a1owNEJgswYJL2Mk",
  "key4": "2vbHZRZZ48HyPAtumhM2mQ5pfKyBkfG5C5WunM5mARy6YQ7xSpNNHzypG4H2poHqiNPX9cTFEtc74MZ7d7T2osvH",
  "key5": "32ws8UBabrNXVF6fLTgMKvkfQNuscChDWLrm2yYWjmFjqGMECngknd73ASV9rQdjWTE3mB3mUst1mAuv23f885Yc",
  "key6": "5dhHjLMAtmn8V1XXqFptWsxfLYn6jZWnvD3iJyL882wMYfyEjPFuMJvPm3Mw8y5z6nXQWDCvhZiCihFgErcBWhB7",
  "key7": "ZR1QnXx58ikwZD5x2YobqLNQwvJgGzpefn3eAEq5AwnyPM3AmZ4fAKSxcb79NGBQ9k2wp39NsMQ73VQXMY1d1NN",
  "key8": "2628u4FXwrgRYxy9jjK5CbNbaUKGxKBC59My4A4hiBRdmujWzjCQGyxdr3gW8ay1wnCAGvJ8XDfDn67Aqk7ddnX6",
  "key9": "4ara9Uqb3MHVqNuLtBe6ipT8hfrCfjtzkchqPrVmLqpHyQSyCyUFe13fzYDHZriUvqWkVv7nfoqF42GbmbC9rsVk",
  "key10": "5LqCWeHSDyvVDwD6gmPJLAcyjpRaCHjXp5wUf2w8mQom2Y9XQHc4dMYV2c8V1JJhdSxoinskQSqAFVMjVFpyanvW",
  "key11": "JLt6LsXkGPgFEDaQCW4yzUTcy4zPQi7k4hZrNiCra8Gv3yeeJwtTQ8JZEE8VwcNnKmRzPQbjgkQxXeBMN8ZnecL",
  "key12": "24KbHGUfBnwrxJ3QddwwEKdJAz9UcpEhr9wYn7i2TZTGzN3hvUEkb281tf81By1BDQSk6JhqjtTgHLwnbacL7v5s",
  "key13": "4cBjcwwzChkuXwq6m9mKgJi2XAhAXd6dHvzENPHruroanGJpS8GKhXaDsQt7fyVxDEsZnBxtnGK43DkZ7BvwnQvY",
  "key14": "299UhL7PFYj8Xf46BDm4Vk5VXs7uVwgBNjenWnLS1MtmAEVi9epM6bGJyGgvBnMtnGRjjxHASgnEnewBoMdhB1oh",
  "key15": "4wMDbMbZCJvYy6Vb2icozsJkw2eXzFwvWhaSYQ7ctdMKrZrHJSsg1X4fCuB8aHRXV195xjpw1QVVHBghosiiLbdM",
  "key16": "53KyBrnwDfDAmqcQQ4dYvpLDdxvZGVMr9RUpunuzT8weRosdUeR1C457dEij1iLnimyfvucW6LhFskEEoCSaVUYi",
  "key17": "3kf41wAGgdjkGntncEQND26mAfDUzanUe6sq64XLe8Kkfm3jPy485kGMMAjvcAwbMiijyzwn5DUBnutMEKxrQPeR",
  "key18": "4rZUdtQgK6JYmz2vPbZaFaxPPtmcaC1tfu5XzFSAVc6ihfCcUQ8groBaeY1dC5Lid5zgssmHk8Zx6DiiVcnRCQSR",
  "key19": "XLWnp4wXALsNTSLa2JS9ar6LTBMSe9K7UX6ANvgyYuLtaYEuGNq9B6SmDroQ9T5Auxn2V6ZUpNr3dCShSXrPqyt",
  "key20": "59LPPekdzzWNz5TWtpp3CBXoD6V77weN2ZFaiFQbJVKqcAivm435vhu6Vb4KfeJ86a2k8H6hfEgJEyEQguU536sH",
  "key21": "4wDXriRNsoKgGAzcG7hUk3fgweBtyr8gvztqNFzwTpVh4yrf6bi4aUFyZ6LAS2UHfdzdif74Ezycj9PNP9bxkLYY",
  "key22": "NtdRxPR8y7Uxr1LAu2yFLy68N9uRVVEUcD7Yp4Z65NehUPgvbdoHiKgbseUBVHdxwg2uZ8FCWJpVueYiUHQ6RXQ",
  "key23": "5HdsDsmhEspMoFuXAphShb6MJw73p2qfnWTGQKWLxPrzPFTV9d6pxNuDxGmxyP19uWbovubDEZXMNTV7kCsnbjdQ",
  "key24": "2gajpbLcf6PdiScKMEK9jdJwK59SxozUPyvdrFQoQSFYoKoQPKDiMjGxJztywMTfWkjc3su7qvS3NhrPK6ZhgX8D",
  "key25": "5Kd526gNAZc2u1NkfkQNtgxDuiVPHRtByZpj8Lo6F1wgo5HzTfVU1CLoo4LksjcsYcPkp4VC6wJEJRpPV3qAH7UU",
  "key26": "3HLPGHrmyiZvzLLiBJnBkNirQ1GatvcN3xe58r6fJGUoxZ6B8GKVofgHrwzbLTyhkrJQorwrz2dTKoFmyNd5shCw",
  "key27": "349w3yz4WJM2XuBspdzdKtMK8aUawHchs3UVBNmwPh9XnKRqpH3hmEhsSqeFHrheq1AfGZvxFjPgQ8qGgYfbBWrS",
  "key28": "26tmimvdiDKT4xrCrBedkLPsDaYHTCFQyPj1n955cGHUuL4xyq7nfyJPMrR6mt5qjSmbttAkBAVwna8FmEfPGTVX",
  "key29": "4dFNnLCVJFxPivodnopSGPGhJcgupvJPAZDccvS12HquHGpZ7mjwgpbnjHM2qysba293pEMyA26j4Fudec7Es7Gf",
  "key30": "3mEsUTPKKxNSJJ6vnL6sheGesNvvf13LcXLchqC8HR45GmmsQimaVai9N5h5Lux1A4t3jUdRw3wT4a9adJjEBhSg",
  "key31": "3pH8c3zeQa4iHhFJssg5try3JuzfBe72ZqMKARKRtLF1444XtzDidKftXme2ZpcrC7iwbeDG35j1fCuhQKRRZUgn",
  "key32": "4rvA7hwuNjLz3raJr5aWcvbCXDhsvKEPvSHjdvmC6PBNh5KhmRCGfBnWPJtUbuX32DrxvqG5vTSRmT71aHxvFcLT",
  "key33": "5vnEJcBWHky7swV5ppGomqdWrndDrfCcaoZGMRKwxQsRYcDUNzjP2JVrHfV4zrNc9cR2EFmjve3KyfhNnoe4uxNN",
  "key34": "q1pBRpjZpBVnPgMdwGcMDVe4pafLe17F4eG3x5Q783bpvwykkBMJthjJwjw5vnG1c7iv9NQzBTg7gzAwyjreaow",
  "key35": "bA4yKMtmz5Wh2j4brAKvkv72Fu1W4cizEKo6Pb99wFazf8GS7ezZKZVXsekPCAqrwGK9Ldmw927xMGy5p8EVWUC"
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
