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
    "3bPfyixCLxeDM4DQvLYqcz6AmcN9D8pV7d422do3cWtn1cDzFYmfNBKQ3y5mpPnZ1ZeZtqKJddMRZgbMYMLs4bAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHXRzZRiQzQBEmc2foxEAgJMtZcCKcL7Ag3JKnamf3hT5ys5Vj4umNq8k5ixvNg7H55iHst3VFiYeSYUaTbKTpa",
  "key1": "dqVFBCuM6Vbxfo8PLCC9MhhTkBi3V2n2x3FRJbq4XeiJoQYTnXasR9y2jNevefgp34hwDFy6XwbUzZhMbJRLu49",
  "key2": "5aX8fungDidHpGDbXLuHVdLvNyWZ6i4YtZujPCVrhnxDRdDqTRKeffhSLp4bEJfxVSNF3A1k9ts7ACUfvdKw8qdf",
  "key3": "5qiNL75g8pSNPM1mTrnoC2gpfor1hfjt6d8nwXXjMFeLDvFGpviiNjE8T1tYT9cCc19qUUmor267SKLvKSCAUXNG",
  "key4": "4vBXwGEmFZQ3PXweyZr9nTPWRT8gVPnnhyqCmqLp4mxYt6NYQhvt7AdS4iJaKaahSr4WeTJXjCnGMBnv369kEvhG",
  "key5": "3Xupx8Weq9jA8oAdepAZKUzGwmCBJvKtgbGAnzuEe43WPAL1QJuoPLXw6ZE9wrRhx43xksTPpDXCZbzgvxLHXR9v",
  "key6": "5mvjKeVa35FV245tZ4JRhxoRAHWupKxxkEztehqcwXvxGanWJMwwgkjJT8euYsD3KFKD2BiXhFwMKqGEs7bLTGBu",
  "key7": "fK27WSZbZT1gJ4shnfHt49rrFM58M3EaPzTxc2eyzVrdRnW4DokoNzTyMd7TSnANKsJpDbdtZZ2auBNF5a8MG7H",
  "key8": "S9WrsVCY53Pr7w8Cqg8LLszCeq6H9oo4TvrxMg3G35RZLtaN2c9TfpbZMT2FumYp1sn9e63cXSw3SeWoTUXTvMM",
  "key9": "5YB4uq8ApDUsNbzhXVKpDshuQGJvDf74veJvRAy6MP1MiY3hiTLygBTE6dZtoNGGcudGH51FVb6THjAfFyRcXmQf",
  "key10": "4eQrZxCb1PHZScXP5WZ9L9mppWvKRgKVfLiUyhKypGtFUbEwoPvVsNJqrE6cVXZ5wDFG33MrwGzSDeY7YQA9SbFJ",
  "key11": "315AawHENnN1YJW2u7Rw5fZeeZEw6py1No6bkdfNuE7VUp4hJaSviVUBcGmfD6c2kQxhvNzwwst7TTW91Hk6PD5o",
  "key12": "hZ1EevhoWfdeR4tfGXsP8yZXGJaFVvg5gWqwp2acyX4aNQj3uJRFFRHWdHFwYMNpEu5MsoRkzfjr9jbJ1Mo7wdC",
  "key13": "4Am4XDwRUFvTR9hoXZN6tUKRiRBZmhbSRxREeh64CXH3KdU91BbwXb5bhicMbfgyQ3xD9y6Mc5MoSgtAydmEAspW",
  "key14": "5H8FWeszKwKLLZnfuc7YFVaEAB22igDa96W71A58mJpDxb4a5jxadcQRjJd75YP3Gq3cKEhVD1u2G91EiTCr6FJn",
  "key15": "48sbHsNRyJcSKG94e8V8F9rMkvgrvFLSge5MLHFoWT5qfrM4euCTQBbww83pKy2GvFWUsBJ1SMuQiFfqB5HcB4yX",
  "key16": "3erj1uryVydg6fBETM8Phs7WxvFfTKVnXu16M3Sovkzdbh1ABR6GhpDMyHrX7tRMGor7W4rQVNPdKYZxyY3VVKHs",
  "key17": "2DgEooRNKqqvu8cRaHUG3USrnzUqfDhcQHcS7Jsa375Ys4qrcxGmtZPWEvkE5Hf9cJGyzvzWEGzUGedCBowqgRvw",
  "key18": "Njs4W9yrsXb4dU87cnJKWPu5meKAUuPLSks93AiUrAacSheyrAZGspsuRMUA37DUx6KkbzBgKjEWusagzh8pqwT",
  "key19": "2LKjYeJNHgUg1ZeJdf7EGgXq5jUzWy5BXRB6xTpyC1syc7uV39PeqhkBufYnLizT68mtCxD7zgutKxLbYk6AFg8S",
  "key20": "5MEHBJagVHdQ4G7sSSNu4hTzwLkpEXfC1kXkEQATdATApUefyjW8RoBi1v91kA2eRKW1wBd9kfUDEQPDfJARDkdt",
  "key21": "4nA2Jq7a25f5roZmWxGcFY7ELDzB38o8tj3W54N6qpNtVP8Js8UxvhZ7eBMp9x6TLnjf16TFduskF4qJW2ZPWELx",
  "key22": "QCB2DQ4p3ohbbYGT7iKhBmHboycA4SusCQFx3zMosKUttGMGiLVFjTpE2HzaYS3GXGGnvi4Xk6eY8SyA1rY9fzw",
  "key23": "ShwfJGUMuoCqPf5bWkz9z8spxG9tSsxwgrocia3AwfnRWaoxwDVcgvvXFCqCJ9bqjZyaPsDNfz2gJtPJhxEDCbN",
  "key24": "47f8gtMz2QiD3J9VonoddTyeDT9e1jmweVzdF2C9PTpE6ZdWoMEtSER7fdi945JBNEDk85bpXXAsFwsYZR3Rgga5",
  "key25": "3ynH4ghnh562ymdBZWiQiVMYZmmagTePyfVdBWBeiv5NPCWbd9HqQ2yYoiw5FEHaFamVDBF6QXg7YNwEUWJHhXMC",
  "key26": "2SMGRsDjszxMWeSkWSwE3zWzze6zo7VPU85ncw1okdxfkbp7BbNjwZcPx4pdhguP2X2RwwV1drmHcq14nL8u4tE4",
  "key27": "3jGvFvbZXfuGWUKVKN22eNroTrg5GVw2r6T27Yvx5NjbWJ2fvFyZ7yZ4iqmhjezDMo44xhJJtY91p325LrxD57uc",
  "key28": "3yRQnaTQCYQwvAowzT2ZLGNFaZhecWeXrzssDbvRKNfT1m4hbZyabE6PnHUmvT3Ba8pezsQ2Ep6u3KJdsuSj8Lgd",
  "key29": "4mZAs8MtWfNAtauexeruZg2h2mtvvJ1RDDtN24iB52AZaxNaYZTbRQM6kSCEcu6ieymbuiNykeRnKHppuQyXXrZL",
  "key30": "5BcoisY4nCwJ2UhVPvC8Q8aCtac2mbjdbhALMDLMchZTHRJqMvNGdUC3mWXcmdtnuaarZGnGfBPm5u7g1ZBbeiLQ",
  "key31": "4mWHPxCKN6Hh3YYJUd8uuFu95Thw2wmMZys5WwCWujf13msBC6gsnQu86ivPypqCf2iW4PjTcwcr9aTHhmy7jjpE",
  "key32": "3FonzbakteuBXMMLfQ8TApWijJbR5ubRMSF85RUigsHhhR5xFCSRcoMsNWxVohtdFm19WMsoYQby61PiF9DdRfhk",
  "key33": "35BR8kRoZ6Pmed13od4vJALXhSZoRkRsSnZ1iYS2u4oRwz63jyruxsAxZou6Bb65iAgHUJfasSKAY6NSY44R3vV1"
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
