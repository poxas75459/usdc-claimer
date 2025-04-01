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
    "5XiQ18NzHVzCTGgKW4zeyaXk7UfzuNdFy69GkkoMi7pPnFYG8WzaXw4cmcPs2dHWEcj2HzfxjJgEqateZvYEHJTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8vTiGb8srHYqddUDFM3C6HB26Qbe4ECJKuXrm5F8dgM53YUwKcfzvPBKLMTQecktnYUHHUfb9BhpovBoEo2q3Z",
  "key1": "1hDFSg8Xq3yx6npDNYBXurwy3Z8kZtLukScb2mteSywWGbhWhog6BcJcAaSY7beJBfXWbMMecjW5JbN2CEcmCcZ",
  "key2": "5cdfFhprxqo4ePnpDj17ztcqaHZdsRp11GfGEeBkNKfdWN79StKMzZDpZfq4f9QZcXvK793GgdYcgn3BWNCT7DXP",
  "key3": "5u9b5KNhpcQ6yMQwvo5exL3hEiZfrcRMUe1TbUi8WkS8ApGyR9pjm7DzSeYhJyftvzRQSaJVBCVkZiwNnju99af1",
  "key4": "2o3cMvdNu9sESUKE1cRhNZXbGyAxrKcNipXaHt4uNwvRwChffjekhMcvdPQqRkWNhLB9Vb9uhqFMyZ5GaVRysc1V",
  "key5": "2neJZ4S2TDJ9SB1EaLzV121CjS7GWEVWmQucmFDdwaALFroAHrdA9GLWhBGF9qTBmdHdrFCWcjpyBfgrUwzAcqvf",
  "key6": "2RhBXM9EGkF8wy7FgeKBMyRj18EJpFRVZuG299qXWxJgZqLEy5KUrJt1dX5ELuzPMJ2v8MNAzaazpmwg7UAebLJT",
  "key7": "3ytDLjJxy11CF1HdY6jUW4w3FKALgcXCMGSTqLsavqfn1ntS6t3QLX7p1TSfXh6ehQmty9S8FbD9HG7iByyom5o2",
  "key8": "4onPSRoWcuTosVoAEayNXyiCkP46gmPRL4E7BQGdCStKiXiA9nSpWPVjz8gnqS3AER1c9B68qCotQWPsQ9WM8gN2",
  "key9": "26sPWaBxnjKhKWgKL76YHiQTpr5B5tLMzaPb4WA1ZcC8a6PUqbf9gKn7jvudzp1F4YPGLwoaqcovEDdqzjFTG2gL",
  "key10": "3uTqJPvv4QXvb7qX2w7WWbVjTxFXMLUWBhyUkEtYBAvG4oCnMcYuHgbyDaCHDZJaZVbWXgk9bTCVRLbV89P6Lse5",
  "key11": "3K3FiAZ7mi4F9mAXb5jgBjCRwCmAWbCMXhr2okXXxeuy8QVkbmh68ZJH4Tg3Z9ZJ53pvGDDgwKjTsnxawnoASw2X",
  "key12": "5XdLYztp4pwpbRbJcYY9aVpcxjj3wjYabYnJFNsb6Bs9oubmYw1v2sRwqFcXhEWWv8DwyfFEahevi6jtNU6AEs98",
  "key13": "5BKrRKjv9zLPvdFbRiwAkQpQmZga3fx8B8Ex8kMBP3dp54i4pJt3mFftuKY8ESf82ePRUtgoSgCPAtP5RtydQ1Uy",
  "key14": "JNL9y2kLMTMDpjc4WVbruagbTbGK574FbkCtAMKy2ArJfhNBU6AfwRRw41UiAc5HnfAsuUrZULoGK5VgvJpdrNZ",
  "key15": "4GPMYzLud4UpYm4cDkEAWyNkhuqG1JZFEvJBZ9StVE3SaXvo6gQAM2RjLrym5js9chMp9V6rCWCgRA4EmPujoAwK",
  "key16": "4qCotsncWoCQJWvrScA1TRvRGKmAkdgSoMeQZ1FVcV882Yz9xo5DUsC8oVqd7y5AjbgVKCq3c6XNkMV9qegCDEsp",
  "key17": "5FGQSLSD9UjAoHS575Uu1CVsuTMGpZ8eePKaDjmTcvqn2PR2xr6aYdAHPxGz3VpzJLrBNrH4U1oMJKoCrUPXWNFX",
  "key18": "5rPH4cbHYbFAvfsJC8XEcTVBynjdk4ywSFTfdkTGKUvaTx8XLuVfXs52sVBBZAUFA69RiU7RCoQDHLyPfoXh8kR6",
  "key19": "2C84WvjEaCYJQNy5SiMWUqSzDfPkABEryZS3vRXHDrL9vbHUAXEFJV9qpybro2v8q6Mdx514MLeh7PdUrBpw5ehW",
  "key20": "37MnSVzsaLg8noEW6qGhUnj1u135d4btkKZLmPNxUFCoZshzivyV64sPsM2gYbjNVdwFAXYoRqNWa75qXx3Uk6g2",
  "key21": "FRhgn9Btk9uH3METmTUhb1AST99R3kHDDfvExX9q2UXmnDE1K7iKnVagZT32LC1AUbmzwmeRY6dG5AGdPv2i6n3",
  "key22": "2pc8ArC6VXuzya3JbKWCg6ojCo4nYWHv3o9VWtWsP4PGLzPrtDQ9RLoQDq3AmcoCgg1N28xZNoEqDfefXVLenMdh",
  "key23": "gyxeCVmRVAyMDDqEvxFdQ5GcNKAFio2J1SWLpuTDpohzu7gtb8rLmeivxbCQqmNP1uJP2JDg2aZbjB32gW2szVm",
  "key24": "2CcyAD3TE44jCJebDvkqbLSh2nRKojyp4EjgfjYaNvHtrhmNLvBVxNXsS7UyaUUjAzexe98hmMyZDscwysso5iSy",
  "key25": "3jDqRuK4TkFWXi9BepQSs7bxSdGJjTm7Dmi74KnheEHWkzWysy2GMzBoHpcS3CYXSVdLpA52RtkJgrQXshe22FFy",
  "key26": "41gbNhSc3wur3eNT8msJg8T5v1fdHk2RY9qcez4v4SccVyBjiXFg3WsC9Riu6KsXXGfoKr84pYg2hMoC13qSrMDR",
  "key27": "32ZnmNFpkNZziJAsqD1odZj74GqZaymLF1Lo86Lp4nMKq6iCZRF5rVzaXsPn9t2dTiQX8SkTbzfcPE4XzuTCivje",
  "key28": "5WwkK9Cfe2kotAPZNDiyKimY9avxLY6ZP6uqrYmexZVw8ihkyLH32uPRNb6KyY3NvHvooz7WwnTTvCEHWDoqkijF"
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
