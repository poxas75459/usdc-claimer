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
    "2uEJJ8Hii9TdjxH3PZQJ88fJeMj5wAVSZTUUEx7FKMS6z4jbwkf27mBtzKUgc1ipWVxwnDzM6uHvF3j68Q3zD7Vu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FLoi5P5A1TANAFpAMupC6H6RiiPpJZveHtJW4Ga27fLM88BsTREL8PwG6fuvcUSGvwtKeao4vpoH5Wbd3qfzJF",
  "key1": "3zqzuHBwm9SEQ1di2VL9wryNrTjLGgefxMzcaHBURbxvjmNrfcVTed4UQuiC88GgRDe8WCLwekyMVeAxD5D45oce",
  "key2": "2dfugSmYyVTBWtNHc3CHftKM5DhBAYmEbtJKxBBYTEH4Y6MbEQkzSXdydgXqzJ6Z2yBWZhLAKaZTWMyUtZtDtMc",
  "key3": "hG5vDbWMVPNEppopcAj3crmmwPD6oDhGdgvZ1hDQ5bGZRPzYQox2CSjEFs6PQ3uKrBcY5mLE9FTKoQLJyaR7csq",
  "key4": "3BA2kRsdU1dw7bTMezsKixTqr3Ah3bJozCMgq8Nc6UqCTnSGgkGA3u8VcEW9zrzEv83vbHAhvQBuiNBDjqHstipX",
  "key5": "4af4d7QD6oYwHze6y3uX8M9Mbjvh4F7LiFWjynWjt8FRyj6Jc3czL1ZZRhwKa5A7nCwmpyJyzv1tYDokUj5ZoBDK",
  "key6": "66A2KgDmvWvnwWhGvEcgDzdPjTFR2xy9nABp3QDSWsJNkzqYkALv4u1m8Hs8rByMFrbiMQX4fo3Um6wn2RaU3upr",
  "key7": "23RtECV5DGij5L3WJEGMsCHGCM6NxyVquhx9mDWQ8h9tyXenUYKCtwrfTuwG1HMbXdDFKPmN32aonCcWahHfsNPm",
  "key8": "5ixJPHHDPqA1X5GBPZNPCFL4PHHXoEbDnf9n1cwjwbnmJVbwf36D6dEaWwyVQGWFyBLjFTkpLH2ZJp1Vj8FjKTVs",
  "key9": "4Gdbp73WpsjxucXRQku3HPUei9WHbiaxobzeXh6mbf1ytNHj4ZDPRbg28AgM1rv6kyfxGSzZv4Yk5H15zz2LghBj",
  "key10": "3PEtKNhdKA6g7P3ENygay9ut5XvkEamx8MHjf1Hjx2DWETvDPaLa48ZKu1jumYrfC65nmVZVcHJ8nvvcDjHAKSpZ",
  "key11": "GMsZu1i4tNgQM1XP5RXF6ZGnEZxQk44Sumpe8Bst4MgFxCsBcqkY5aZUBJLhm3FkJKQ2E5JiXRNKXnnwiC64Xsg",
  "key12": "3SrzoaGFBEhU2gLxSFALWJGj3FGh3Ewiqs5b4WZGHWDhRnHPd11eJJ9HBsFqyiJX6Fg19TXrovC9cBzowZgjKMwJ",
  "key13": "52oz7WpeVWn5DEsdbwBhdgaS4JMdGwHecswUwHRBZRKEFpqodeh5UCzG79ctuo1rn7qWHLLa75WPftnHPq5A26q",
  "key14": "5VmWsRsVynSDCKJQnD1ne7Sv75DxVkCYnFbcke4T8T6PosKzbnYtTYB1CNsrTGKnhPDZyfuiKuxarNUYVR42iH1Y",
  "key15": "2LwS4MbsemSD6Dv1UppiNZC4u2i53z9jzLp5VCccadanonuKVC87GmW2NMvqVEuNFPHxFSADXdDnBnZx5P5XymQP",
  "key16": "2SLicEfnx2vc3KycEvDDFo8q7AVW9dFGaWEqAWvk3xqtNvTrcFWuiRbXvWbyumYzEXnryWE7DSthRZsQzFHUmf3z",
  "key17": "44bCge6Byf7yEioEUNqH8eKJFX1ErgiEx2Fio564D15RFPFKjUbq6do4wG1twWwVAmZLqiGQyRprXc3NATb3YteL",
  "key18": "5EUCUkGME5qYxFxpTmMRmRHrBEuJyK35sMj2TMt69gQALSr5yGdhra4sQqeuwZW3MFSn7pgiLeGzCJiXiM2hCKcQ",
  "key19": "415QRtHWHqKCTDwiwwfhxg84iN9dMpbWu3sA1adAwU6Spx25QA4emSevXtdtJVNwSjxcV4cXR1eW8BYvV2E83wuJ",
  "key20": "3ayBkjaAFuL1wAy7xfV4e99TpotPmhrhGTDuhTQT3P2EJnHzUNEoMKWJMiQ9ZacMH7LMMQ5nbGCho8Ah7vq1Dc9g",
  "key21": "4iAjgurhY9LAUDoSP4iVSQBGA3DyKRQy9UVcut3d7sHjcAU2tSs4BojNbdhuuZsV46JUBrkijmM5vxe8P5Y67kAn",
  "key22": "2C7Qd7rru7Le6o5Tj9aNDaygCgCxaP9SfzRtediZKcQ1qVRdAAmuKd7WAQccFhL5ZRtZhtW17PFN4tKPLeX8PZPs",
  "key23": "48CX5j1am2JER3A2aufG4ShsLykFaqeT3YvHk1Vwjzf8ZHLa3dU3BsYpkUYNZr74aCYw2UJ8tZ8ptfepV7rbvr7Z",
  "key24": "2GCEJ21U2oR8Cc7xmvWhhjt9VSN2cqJnAaWvj1bos3e3S2cfbaFnCeea9wmnZYdnz3XesdHq5HNKFyZPyTmPXrin"
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
