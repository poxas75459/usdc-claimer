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
    "5so9pdWemP51p2zVfUrkasoudpWKcAmNxUDZ34NuLGJM5LCzcUL3SbG5kroVEYkDRfsndwrDbfkNvaZ7EWqiv4ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMoTEmViA4k8EHNgp1Jy67qHfxNzGRzSEqdZPjFNMbGc2A5ZG3vmtphi3T56nTxcxB9VperWvYKc99WDwNrcb11",
  "key1": "4oCZ5oTtZRTNSXtGN9wDd1JgNR6zkoGabxbZqLBbotXAFz4PEwNu7jaNq53jzLh1CTxwwmB7ebPi6fPWwfFJAmn9",
  "key2": "5d9dYCsf3gyAvWxhkkwhMQjKDukyDYmDYCH78kwCBL1yXcUdREsUMbDKHkSCmU9CNDwG2vq7mFn6xGNU9kmVgD5a",
  "key3": "63b93nTjW9St5waTsG19nkhBY6yCcBoT6NqAA2xZfpHqucQGhVoZmUoDt8BosarujsyoprR96eA4iXiMBgiiSzEe",
  "key4": "5XEpi7AoS7ng58r3GBrKNMHj9nVnAvr4YBH5eJM3Y2HrbhGgX9Kf4vsgDbp6jxb3CZR7bp178x3NL75GJUGx6DTx",
  "key5": "2E5JJcxiz43zzwjEHfhUkL8yZFCvFbnaWMDSSnHNMqUo95ykm2Hgfp9ihKTTjcZ2kijovq7GFmcnT3KtKnWxwKSL",
  "key6": "2pxTbixMc5TGrw9JXwszM9SCJKcuPhZ6i9PtLqxfbYm8GYnLWNpTNCZkrjYZUDdREUg2rzsyvHnoXkNwBS4xDVdA",
  "key7": "5U88GrRqwyDpSe91W3T3qFpUZAC8WpGoFDHpSkbH3utJBUvM6tYNzS7MDcK8RzZDw3PR3W6dSFbph7SaiLPZHs99",
  "key8": "65VDhdecgNyX4ZYkTEguYz1r9Ewyqt1XZWgKkT3BLHvvdpvrUV19bRLNKsURUengzhxDExTpdC383GDGZoXo2C5X",
  "key9": "5fCLGq5vf4Wyczgr2b5wFV66s8Mwufes7WN5JKQtcqmdeni1FD7dW5RBeKQt34zRyUnZG7hHbsQrg596fWnU5W3r",
  "key10": "gLL1qC7R2ZTPJy7yy6kKjUi72RwppbSGkhsVhsxsV453wrXqtV4f7UY2Jfj7PetaWHr67jPUQc7GYWjKNwhB5d7",
  "key11": "H8CvPwhdoGKLmqvdCgJ6k3kYxuLnkzy3RdFckUVB5X5NaPzENTR1UKzGjoaNRW2A5dA4D6JeD2HMxGcyJqLdpKX",
  "key12": "EnctjNrbj9GVrcJNDkFYM2CS326brjRjaRsXhd3TMWgomiuWofkk8B2uG1zHDzngA3v4AEWqKL654GYTVZgCVZJ",
  "key13": "3vYTCvM2Ee418n2w7WupmtCqWniPfqxKoh5t6RhNcxtzxTMGDoDQA8ccxuVdWkFCja3XfSWLuMmkJrvCc5JmgDtG",
  "key14": "2avSNVR1UzoCJxkBDAy51KAPaJKQ6ujao7YmxMQhTehFkNp2A6buxQ2zLvdVwpEMxcug2Qx3yaeFE3ar9S8hUxku",
  "key15": "4TKgWBUWV4RMCXmvTvmtSLzWWcdAWmLdhX1UCR77VKvUwQiDszM3X3QbC7NVWK6kU72d7yyhGYAHtDi37AX9D6of",
  "key16": "eALeRsEBpscFJXpEZgTAFPrttXEiQRpSui7gsWy73X7JzwcGQuY1jQ4eqfWB6wfF4mQiankv1Q9RGh7nVXi9uDh",
  "key17": "4sfehmET9zpu7Fp9hHJ7bLRgnyAPYKg5kht5P7f7EDgG2w4bjH5WRtYsVpdckGbhurY3mVVgb5DxUmr84BZsJdd5",
  "key18": "5PAM9jWg3rZo7PmRf823J36V5w5bf9NpyqwNwhftbU7gzoycKA6S4egrReMNUUXuGNFaZracKzquHUtdWhhESLNd",
  "key19": "36W25coq627JTuN4ff11BAW5ecufPaYJRYturaXja2aZ7bE6XxVKJJGA5yigtnhwcPGDGxojhwcLq5YuXjHzDcZw",
  "key20": "2TxGTCEw8Bc6WEh7mjQTTw9Vd6DurvLA8N6EXJj9X57Zkz9nEjpSYCotxN5QzcLDqBisoCkSd3FTg9uygqx7Mwcx",
  "key21": "iCXedNPxV9KVy929wt7DnpArVpBDnBZVQjzst4inKrT17g3HyukxRJpYcLBAy9dwEmTQuyQA9c1ahNzqnquSPVJ",
  "key22": "4wi3h7C7eVufddDWLHRSzsfVB2Cr7xSrvXCE13AhFJA7GPYb7C6jGX9YcNksCoLkEHZ6f4Ln9J3ao9MU9JCDEgfM",
  "key23": "2TwDAx6CW68m6mS815oqpCU8VybmMowdBTKn8ZEHkEsYAmSe9qGmNQ7jrFvbjFok484XbpUtpq1ya7UK25yppMDb",
  "key24": "QV6durcx5YvsrDUoTaoYhBDeTigvAtvpGE618A2fzE3NCaCQyuCFS4cXdu3LQXKGQddsD27sHPwWLZn6bpUiPoq",
  "key25": "xPLavSpp4tCAvFMYA7VmjkXTkb1jV6B2bMAZWBSHG4EPsBVkKMVsCKJVrEP6xCCtwuEhkTz4ktskEP2wTdjH6p2",
  "key26": "5shFCCs7NvtWG5STn5xWUhMA1TqBttfykxq9SusFNz3AEj1UfFxzXPepBvF9diJioMHQJq5RqNAzrLHytNrSx6yy"
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
