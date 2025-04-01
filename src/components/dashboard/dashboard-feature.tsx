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
    "5Lthyc1n6DmSpL2U3sW1Y15MyuSZN8FjKwC7jnM31mhfuvJ4H9Z2wBHCDmrmrdB6mJm43yHQxfaKvqAPzd94NbQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsDerd8a4fTbSo4JYGFC1gYGnTHrVBzsXmY6rYxc8xcJctZHN6XXJQwWXhv5QAQvy2FEsiPcM4c5K1BsUiFPmWT",
  "key1": "5hzGNUWSQUZYZrfKv3A1ihacmAT1Nd8vbQSmw9gSgggbcoXyBmKuzNWMX2BQMGtuwC8aWQwD98nYokN1jTFSyp1r",
  "key2": "2nFrg6MvRr8SPL69F3rJpud7zmBn4L9boLidYb2gtLbKj88GB1prJRhL5Vj9dXaMK8SjLN3cy5FzbiJBfCgziNm8",
  "key3": "2U37zB1VsrqymsDTW7LjqnGUQiQYThBeE3DRqF9svPJXz5qHLmJ4Xt8BHSNMzu7M1rWcDtxehMZYhwVXuVtdXuuN",
  "key4": "5BT3buLLu4PD9uDaJvncG6EwTAJq88ZUL1MkwLsg4y9Aba1STwhpQ8orujoNuQ24A5oKzdkSdXhCEh9Nsy8L4DVL",
  "key5": "56p7EcT4BTDMwFfoup7eEMpdzBrGCy4xUEwkx8bMFeMjBHRHivsnCz2DwZnS3N8yi2MG2ieDW5Tjbn2CQB4BdRuo",
  "key6": "2efgtXxyYSnyJr4toFvVuT2irPsc3LixqbNZRFntj2QNQ2XYtFTeNqAUomFJsaXCkwhqavpEwBJnWYMdPYtSHt37",
  "key7": "nujL4BgU745HU3cVBxse1PZ6ZbmBGv6kLHzRsp9HFQqcitXpmRAn8xyYiF83LZkP2KHBkPg1ScLY8uBiZBVmAxg",
  "key8": "4NnWZq1KSaD7hhKkb4NtovFriTEyxfAxNLFZiBGke8FwQARpvyShjDFggXHopxoXvh1AnguZpoknk9WzYjR4mtEP",
  "key9": "1a8NgRLX7wqeVUiMz7ZGTGfN7MdKmQjfMWvZcDQGrXp5MomXHdVtjXJY8FQ838o1QzFZGpFWtDQYh2Nw82mQY8X",
  "key10": "26ymnpzbvHEMgWk9a11qiP64qfvW4evzFmXjbXWBkgdiPTEWcDURKoHvYNckvBVv93qjQx4nQ4YcLUVzzDsLzzhR",
  "key11": "3n2fg3h8tDaH2dXnuGcVokwMTEmQbXTquXJ3AsMNN4C3dZagYtmQYtW2H3tH3ZUNznvvqwaSLVMc2sQ7NjJciCqV",
  "key12": "4SuwngGGBWumsZGhW68sZ4k7z5FhtxKbiqThpGmYq5d4Gxx9mp8Waznc75ZJcL5ZueFC1DyEehWyA3MmXYu3KU3K",
  "key13": "D3fuTURzsx59ku2Em2UfSSLiRsnPVDxLH9CKbT7vrQNJLnr9k8dW85fiKhw9EYRRYpQebLbwHyZrjunj9YqiTf2",
  "key14": "4xPa618Q8LJPSkbQ9BESnW4izeAKhE7BXEGXkSXULQbDbnorpZK5wchXQ1dnkoPwiehcZ3eHkGxZHu9K18skT4eM",
  "key15": "Fviaptj1JvQqSSq3CKpCxNtwUvMpSwvw2USvpLBta3ucNUF5M7DDjCbW1BhCeP8zcTixZAwLdBjmpW7aSPpZ32x",
  "key16": "W7a7gSLNpvGYHyXxoE6sgrX7pAinSnN62WpTdatNZA3yLKFn86CqPLodfQN6YkAkzqXyqcv5eRwr1bVMYebuWn6",
  "key17": "GA14Hq8dUT9PB1av62vMbKtnmirGv4UZDxomRdMgqujNRuQhWCnF8JecNtkqt57wPbLCYYwGrPiKFbveqMq82Pm",
  "key18": "4V9sMv3SUpvPUfJQkTct3CWvXjomAusFpQuBPZWR7t34RfGLymFPFhtm34EfCEuzLUJPWMJY4G9YkbLiPTGbMyNL",
  "key19": "2Nsgrb8Z4ac1EVYq3tsSAdpgQXrNUW3LDP4ei9a61V7DmHpFMYMiHJunsosuq3KKLFhv4uxmzkYXeurL4HaLG5r",
  "key20": "365YsjcPg93xB5VwgzG9K7rJ3jbxF2939ycGp5ndnSAVgDJtxWwUvUz2Tk5GK8cEHcHFHmHBJsPvaXEGGnzLVamS",
  "key21": "63SY9JLdpTCDkuCPsMftvE4v7rJZnq8YiJVUr6xJaEPn658B6vLTRsGk8hwrpurbRoUHco3FWcRLKs5TxTbJmiSH",
  "key22": "7FtfKmWXcVouE9k9MbepNe3A1jfimnR2yr34YKpwjAfcoGJorPpcMqMvtsAp74xJr3Y2gS5Mj484z81Q7xj4aEE",
  "key23": "e1YUpJNKv48eoMs8YtQYw5eY7hTFcZYUpPKwuhjc9K4UNNUzARf9w3KemYFm7z46eaD1WYjRAMCR7CDWX4yfmri",
  "key24": "3e8K5nXzztMdLMULsu2XfsJdH7qLMg8e51hmapvgD7zToAYkpM1BneqF3b6gyCK6i5VG9WDsAEK4GbLtjjWX1gst",
  "key25": "46taDxkQk6AosN4vaG9mjWCcndSWDUuYqFKsgzxEmRGSpA99bN7V3uxetFgJLqaio7WykS5cXB5gw9jFDVnB9TnE",
  "key26": "4JQ72oHxPdhq9gyUtUshWmidLDkmSTRkgzoiixE1ZykpZigVdFhftas5TfB9aEcQ7K5ZXkWjBCY5GDRpfdxgN6rh",
  "key27": "qn4RgPAYAvX8Syw9S4yVPffZp8o7eLZgL3UtpGBFeBFJg2JW68RsK6dcvFCz8h27bJfogyBtjPVjNJHoXhQeDo1",
  "key28": "5QdbgqfPq1pW4nGEGMkLosDYCKXTqGJ3orurU85VvEgh81Hu3p8KorR3YeikoaqZxjg8B3PKoMwBxVqKYmA3iJfQ",
  "key29": "rE3mT3aZwLG92H2NExFbLEcaDRFHsWJZNhXQGzkH9zoXdDobM7WRvuiGKizrA6s6GpAcsDDT2kc72xeDBND9jAN",
  "key30": "5qwGhCKMDiPk4n98fNUvuo7KZj3tXHfv8743i12aeukzTQSJ435yUyo4u1sM8yUxL7SqWrQwReEdF3TjnXSUjM2g",
  "key31": "3bmVVG8ZLggXwmCjiBgAcsBMMMgKAJGxPGuqskXNs2J9sYk3CMeiSPAZ16hfAawM8EayAQwaTLVeQsiGpHGoBVAG",
  "key32": "3mBeJy4RdwEwuyBvFettB7WUA8B7sXx9fs6VZ4HYAYNtW9sCxikZDYEiA2uZnhbydicz3BRTxkGVGC4pFEcPZu8d"
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
