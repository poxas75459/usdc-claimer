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
    "4HG1ZM4poZuiKqyFGvXKEA4UVzY6mRFRGct22LyHYSMjraqFBGDgRiM8A2ttdtFXHjR7zDTbCH2MzD9sa5YJojCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n46cErE9fAeDCiq6zACXSeYQjv51s6ecPYxesZS5dbWHiPNhMTiDLHBEP9BgY4jjpLXV2Jk1xryPsxV6T7Qei7Z",
  "key1": "2zYLb4JjykhToCDL5zxgHHShjJxB3jSZrkg1qd1pR5STt45BGopqUskiwz1HUVB6TtCTdCy4Pah6m28CtgZmpuo4",
  "key2": "2LnZ3hskvfFZAn3npeAJ1zSBWPcw19XEAroPxdZEajqLcmTfPWzEdUFfBuZ1MpZodegHoVw6JEuTXVz18YfPqpHj",
  "key3": "W9kyPNrPhJmmf9yonK9eM9kMWXkV8Am6ud8e84uKkMpy7iC1UuQu48g3Wn2NHzgURZ1VuJy9VNbFWZ3Dit6kDX1",
  "key4": "2HzQhY5d39hS7e3SviEMKkRH1q6NnEcqeU11D9kv7iJjx7prQ8h7VZHxL2fT23iuJh8APj8yhofaVXQCVdedNaBm",
  "key5": "52bdmRVVrEYy1zkdqB5Vka5izS8PgPazSnVVwGvKG5PLRgrUPe7VhAoaX4m1A1emEdf35GcwGpBearPykzqmopiJ",
  "key6": "3h5dCBi33oVwx8TxWegjtcyUzge7czi39iBpexqsZUTvPmzud38PjBKqX1mxasJiwsvf56pHAXpnrtqdc3pWg1yT",
  "key7": "3fHxHtPpcEp6a6ath8GTiAEagKXujT7LRG8SLHEDKKXtcR3gMym9F6ETBJvCXCBfh1dWMAXHDiDf8aBxasMtYVMd",
  "key8": "2cvoSe4CpheAUvUKKFZTJgRGv6L9AkchdNCzsDnxawRYfU9qxcQZwytdsqo8XRbcFg5AbpAjmYuKPAv5eTCyDXmQ",
  "key9": "5x4VNXZqW3JXKJidJia7Chvuoe3W8PpXvcDmxtcSXQtDosekwdFneZGcKezgkDkYnN6DGFz81VW7yZiRwUHkpCgE",
  "key10": "31CnzMiTgRwQYGP533swtWqqiADQLUadb3c7mCu5LXfvqczHQ5WiAu72mMPYeCWQFZNeb817NH9QrmoVYMPuHFgr",
  "key11": "4gfUSDDuPcT4Yq4WPJ4EqXQmy1uEh5ZbFgSfTEMZjqFNvEbJM4jawrG6KWbrrNLmQ3deQYuLuoskav7iLgLsnqH2",
  "key12": "5n6wk2f4Pgn36ZZ9mhzvW7GTquv1xPgnPArYSmpgB7w6NAi7UsY2dz3u9DxsVVXGfUZFrEWqtAgoYkWF1fKw7CzL",
  "key13": "37UwPfMf9ij7QEL2i5tXYwBsR9Wk7yvkgR9NegfMvwjfoUikaezD33qhG4FkbYQphxj1XkBxdXFjiQpik6K85Tjd",
  "key14": "54eoxcwSezNvzEDdY399zsXzVKoEe5pW5MyuFpMemeQ6bhbWat76pEAaAYZpc3q7i3AK7Df7Ch9hCrsE4vLSwg74",
  "key15": "4ACMGoz3gFo3aeQ48ag6zd2t7mFgEUBvhdoiPZ86chXkUDJEbMzzgfyAH77nyqC7SiqyqXZSPnktai8PA5vtdZvu",
  "key16": "55Ayk1puFF3XLrjsPgTgFoCLw5266MBt2sTBtBeAyUH85s4hP7R34Lw4ZDMShmT2SyeYZfXan5WE1QV8uViS4Jn2",
  "key17": "3HyDcKZfVMChPZek3F61x9egTusRXz6SmeG332rwoxisLE5CjxQjk8HvNhTTaUQLUA9mne8Es9iSCi5UYoonB725",
  "key18": "4NSkZfWQVYTrAPaQR1jf74Ev24usYAu5tHKFCzfzgwXCVwrVnMPDejQDHVhCeLw8JXFXSmRy5oXJnbxUo8DHXauA",
  "key19": "63DcZaTZGpckKybAsM8N79oAnZFGFf7kvizmstiUaoiLQzrMB3qZKNnWbLXWjNmrNd8aCi8XqgLwWKHgd8ryJZCq",
  "key20": "3ErdZANQKLND6TmSit2kW6fUWAdvxycLMr3oyif8G3gckZLiSS7YMyJphBDpXw8jxFbGwENnPD21uS8R4N3FbuBJ",
  "key21": "Kj58trdSakVBXVHwQLyKKBFC7iSd8y3EhAyPU7vJK6ryvxXPVbry8nRg4o4W8Amvohs2uiiQGXQN3qL9CP91WSf",
  "key22": "2UDYnCzEDyuxjhHvWJ3EofitvzgMctdeQAiExHUCJv4HriKaxLJaCkh5BmF6PG5WJPJbzS5hLehRUNbXk1ZBdCMC",
  "key23": "5uw5PyQjj85Erg9A3q4y6Y25ucMZfCQjKsjZBQH7PeqsyhHwJd2e7mag8SHjNpGN46h8PzLVjWaKQBeFpPgZynYu",
  "key24": "TmMtPjLRdysUVoutH1FMCViTyTz15q18yX3uZF7KZgJowvkX9gBV36bcAa74X1ndEFWQ2LhxUa53zS9uBFCdBsu"
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
