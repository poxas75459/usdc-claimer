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
    "4nt5h749qMcn4KyKsKWjijjRXWrVzbNBpLyYFptv9zDze1hdhB7ki7Aed3BfsULh2dxRdaKFxUJhkaMUcPsftNXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArMCwPk7wfxuzdTrVypAobJTUUiiceGQRA5frFveh3up6NcTxPmgrVmg91QZEquwFRtXGrwvL5MrsM9qpgkfKKa",
  "key1": "3rrzYCsmNDyTCp7AtHL7ZFK6wH2AKbTJsdJJ4q611QwGQj2JnRzinvAhJrpuVVKZzAqou6T6B7y6ZvgZXxxLudEu",
  "key2": "uNSjHoF3xcZesQX9gS5jQtmK7nBZiEFyMqp2pc2wTZixu1xxPhNgYYbhcYmMij2gARe2TWAS3o4gL5VMp2gEpk2",
  "key3": "5AgczMHasQsuFphkV8Np2iLxF8yZjBDNvew2gFRNbMMhW76JPeHufnHyJP3WxrMMRtFZkJ6ymeV35fb7oyLKHbpP",
  "key4": "4NRvDDd1niKfsoQZd3qcisdm6KrHhTF74FBzoAAoH4np5CyHYstEkkGpSYyWP2ZhpJFFJmeXR62tspVuPMcjDEVz",
  "key5": "59ZphmHkxkGiWWqGeHoALJPjLZnx8VsMYWjv2js1TfQwJKjqCt1sPsGUr6rZn75kA7XxuetvV8ntKEdcgkoxdFVM",
  "key6": "3QDHcv7pT6fLyCfUZr1ZAQe1axwSZ4tL4QMSx9SXDB5H3dop8ccGjGPkTAkP9847SKr9YVJesMkubNVB9mFm3DNS",
  "key7": "64HzVPASKAkemQRPxKbfFav75d7LCrGu1mfdW6cDVKyxeDHmBCedLZthf9wtuvVkpdEvjJh2MgEgVjXHprHQ65LL",
  "key8": "4JWP8f2T6DvBip72oe7NNtTQtwdUczxRPv3KfnRG7ar9KKw7Bj3CQYoeNFhuSW2mGVWs2z2BbZwDYssNNk4HFRsS",
  "key9": "2jcNgEzY3coCfKqqMtTnZTCs6tYYUoQr1ybfgUHbGWMGwSrKNNUvC22p5oKAEsGHUx88yuoK1aFHERGiRnMwQxRh",
  "key10": "3T9G1zCHG4dkendjvTEahCk5qturUGPZ3ceTV64LeXCz58Vi5N2Uh1fPFGvcJ6T65113tymtDJ26Vo9ATrx34YpE",
  "key11": "5QXPfNLTCNd8nKJ3fEG7qNtrFBtuXqvne3d5H28A2JrshEFtbsN8v9kFFmmkrYg799aXJVwP4bPKYR9Wpi5P9ZC3",
  "key12": "5o5C3Ax6SRnVW9e3wK9H7zfc8BrEUizuZS6ZxDDbY1uT3dh9UxD1QmMYUYDhwujxN1n4MZNywVzavTZp1yVVYcd8",
  "key13": "5KbuwWKxxwEYF9EJaGPZEa2V15uPPsYeVy7WCYnbQmXFH4LJTMYNgmqahRYZsHFEFFqPTnmdJ7Dd4De31uSzZUGQ",
  "key14": "7mnCxtGubPEkveztSE84jc3jsbsrLjYmsWZnqgWnQv4NpLvaNESFn9gyEAEVU9h4SqJw7yxJeWSBxPVKMr9o7cE",
  "key15": "5tNHruVAgkA7FEx64pbiuCostRx6KLFfZEi8BE93aPc5aAFvEcuSjR7frw4WFBGxBaYYwFPwvd6i9TH3zJFpLKGr",
  "key16": "277FghVNJngiWo4z3R5W6fJR6rGLHo2rfWGzA4y3kwZxcuXrJjUoWdxccZeLSYqGKTZGxNV9Jji7B75T2aesjbJd",
  "key17": "49i781EMpBcbP1EYVD69jXzYAVfoMG6BDwy2JiAhxJQSbLkkx87itKcu6uBcUnsuHf1SvZXAqEXett6Lf1EKDJ26",
  "key18": "2GTuxPfFLgMbvKJyPSkK6znvJMv9jfWzSVjzUSvZ5Xdf5KEjKoUPwEiDApgnkTPNg2cHLBA5V4FdLRcWDmXkubwP",
  "key19": "5wfZpoj88TzBb9axt2knoqyfF9mxUYYp31cPzzrHodtRQVfNiVzL8Dp1xFT1s3CYD3jSMgzZP3ZDD6WrXdvLsYKt",
  "key20": "5Sy5nXQ5M4Th3RxrYcpSBymDHe4KppbSL3kSyhHwErghZwHzYn4WFv8P2DNP7aLNsg2hqvDr6H6jeEUtpDetmYEX",
  "key21": "wxRQZWLaSPW34bER6CDYAY7pM7euzHjoS7mNyuxJrUmpmehw8Ah3cDzpbZ4u7U4bgihhqrEQcDvpcWZJ4kuSDDk",
  "key22": "5iCVw7Bu3oRqhuyr2qeTbxXyZpP51VjiGUToekazTPR6ANUoy43wU4YNXR39Jd8BzXwyZ3pUSreYgiGn2xZjv6iE",
  "key23": "4hfdXTntkobEKddHvLHL4B6QpsV69om1sHx2uPpSfTV5yyA9FYmWtkSD4F4KcEyQ2jM1BKezCN9b3vkEfvvKP3jH",
  "key24": "VkzkqLBB2Jv6G1KSJuUvz56n4rYPd7yDBVeXNFPQSnq8LZ1gTeHDB6CU6kYnBeyJHM8fymsKdprkRRTicpM2ctn",
  "key25": "5W9SQMda9ZqbSj6tf7nz2Kz66jnBbdnRS9mPY8tqC4RmC4a9VPwxnf79RgRPpUmHZKkRtCz5VEzSqjYwoNnbwbZ3",
  "key26": "3ztESWMMEJH7xKBuehkb6mcjPknWuBRNwvJnwPnLUZN3oVJ36kcyCtdXcgocZYH5kBffozDZEsy7q78UR482hAYT",
  "key27": "LvxREnbk3iyXHQ9vDKFt2nFT3W5VwJFVuxu9MKovLThPzBREnprrrbWH5FeK82x3cjmT3jhGqYWivPZVvj2AW42",
  "key28": "jzZ7Hi2VgJYWiJ2LPn1VTs9g3q6L9Ci8WHWKBF8qBuEB3brq84pQUYGPxE3MUjk6TyaG5CrBtWEyDttVGAZzwRs"
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
