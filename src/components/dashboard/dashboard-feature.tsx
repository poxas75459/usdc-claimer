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
    "4KkK1H6z2vt4txt4vhxJfDTDVguFiQKJ8DxtiAjKVue2DW5qn9SVTm3VJHLXZiv6eBpLULwJjQiynWVqKYpHyRFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ajxt7o1otge7QmMyJ1TfhEspFoXi7Txi3CuEcRgUSFPY6LkamSgAGZj7q2fiA77ZSAymMpCyT89oDFm4QcHfZQq",
  "key1": "48ExNR6CFuMSKYwBDTQEoeTR6UASyg9YGZrjeuePMUysuTscCQD7iShDWqkXcGqLjbJrF5Eb9RokbFigYX1SfYNw",
  "key2": "2t9qmcxaZWUR3MHN3YCLpyNzi2E8VackB45vibydqQck3rkjQWNgPCXinVTEbUp1b2UP3Hd6iWetEDfuLHdQK6Qr",
  "key3": "3GdwUpL9QAwU4zYJkoeP2fQ1i9Kt4tJv9NRhtBD26TipkkVtZQ8MgLtW5P7d7hRV3r6HnTv3fDEWiuuULr5TUtAX",
  "key4": "2WLbqf6kvBdwpyw9tBGAyN2mZSZ26EGJuhq9YgJayyrfHJyFq3gPA2CVwZ5WQ97BqraYP6DKo4aGwZ1s5FjbyQJN",
  "key5": "5s2RSnrhfjwNtEwPQ6BmRmabGMnsGaP4zjbWSyMkx2GkUb4dHkC8AEuugyJiEpvk5PrB8SzTDxmxU1S7fDYBJKMD",
  "key6": "2hwG8L6bPckwqDAxWLGNkyKFbAYnx9YurXQz9xsx7XosLMLbZFyEyjCgVMT4Vunr9Zc561L8m7cYKhvMNz6rNXWv",
  "key7": "5wVTfLd8iKQME1Bgh5Sz9Zm4RZjML65eNFRgvJHvSq6ELt3Rzh8MVuodVwVY8NpXUYQWxBcf2YgwuiYZMxC3Hx25",
  "key8": "3kFXvLjVnZga9xxcnnoByHf3ukYg2TP9RrAUp2cvAu8HD3Ya58RY6Yis68ZmrV8ebAF7u9BtPd6uNv5anvrViHfT",
  "key9": "3qqW9JCDPFkJymo97SdvarS6avtwwXBgJWcSNuzmwbSd3STiAKGKRSTQ7wE4YzuW6udgrarKonUwyEjKVZvctEKU",
  "key10": "2yaH1PD61NhJ4h8Yk66hubqc2y3KWXaJYsPGbNByGF33TCdSviFDa5dPGjSUy1hvwmZxuURcRR3YWACx6QktuUHn",
  "key11": "2keyiQrAxjy2Q8ErdpMpiJLRbFVHwMcCUMkzqV68VFGmZFt2bCA6j7sij7X1tZnNJVfaH7o56arJwRiTPtfQS6BJ",
  "key12": "2SxataeWe2WkM78Bybx9zfVjuSEd7J579YMUtRdTr4LvAKEC6ZM98Ee8vt8Md8YFPGYCiX7yDeBbuVyXoALyRDvL",
  "key13": "USWYpSw5ptTbGvG59GiPom9RMhy4UEMf4XhEhHiBMkXJzKKR9G4G2JiMXKjXungEUdmRJvacck45sJSEebKHbM5",
  "key14": "2fBASoYRCumNGWB7L9JEu1qcUzdugxt2PMaa59CGcTof3uMrgGN9ceRe46DBbA5G29hhDGcUVCzioUuzjHkc61TY",
  "key15": "5hgh5y4fZ9s4rPqRhcgDJXjxR8o3Xx5DnoXWm9TXsJrDQDWH39nkgJCRHjnwhBLqbxjRnjXpjpz8vqYpoFPU7KeQ",
  "key16": "3nvGCvANkE1V6bdhfsQ3E6F8c4KKtHvbmVRhmV3yg79XKWgFENnHpSXR7HqJqBMNAn25gTxjMBdqrqgT8avszcLi",
  "key17": "5RRc71tQrrvDkFkdPyj6nR4eMSiwHTUJqHxjidqQfE8inCzP9yNZnCgRB3nKoEqhHFRNyr6HchzNWLiH1aJpuYKr",
  "key18": "3ZvPt4yMPyTcyP2uzLGLMJC1ooLG6pckDDGY35tq84681zqAJgMudkezTrtBD4cAGUzXaPLesFgPTvDzKUEVGVEX",
  "key19": "aprWDsWT8CuzkwSLocEvSUFm9fmHthdCsbUALtAL2KpyaWcZJqsjHznqANhE3C7XFCY18YBe6ukoHGqy8aEpkM9",
  "key20": "2TggakNiMQZXA2t2dwyPuZ2jFjaRB78xjpfqa6TpfRkcXDXabfp3ektugVBjnxPQkSKeisDtbKaYK6AAZwAnnget",
  "key21": "22Ys1vMhP8ApffupG63CPPibZrkuT874i1WQzA7Dx2MpFte5vnms9rM33VB4kUPZiwMngKTU7BktB9VDkbNA8Sn2",
  "key22": "4fxbU2CCktegKrdExfNNrTDi2mFYfRnjXL1ZHcku5RdWiZJWdFz6wZpPLfMjBxCaT4G7iQVoP4UT7L2sUeooEBpu",
  "key23": "2h4HXrPMFhymSQe8Sks6s2vAZvVsAWY2cCQzdo8tEFsVc3MrqxV6L3RvuAamfdXepKq1oPTCLRzUyD4LmLzj2Zw2",
  "key24": "35x8jgh3TJ2oaTmy9X2ud3g8CDTWBUbEBr3ZEcmwVZwxS5F6p5GrdrrdZync4Tv3DiU5tS2vbiZH5rns43KQ1fdi",
  "key25": "45x7XkNfK25qthZwqxmpfNUi6MFYUvgxCm2c4eNKbfvoa42cUR9XQ8sSzjuQsA8R2ayvGfRHt4hpBFG1hCqnNv9k",
  "key26": "2mFuyRHFVEvLVSF99hXrWhkT5PX3sbKR6LmAPWXsrW5QvJUhJ4m3rpNMQ8mqKDDSHLMjfxbipFAzsPPgAuQborWh",
  "key27": "5BBtAQvky3EMuC28S5Zsw8a5snGmUrgmzxu23NG6AFrKPDZLz7CnyLifF6LHmQm3NqUBxw4wBk3THntfQz7KGMY2",
  "key28": "5hLgxPz72BsqHQ5USkZMibY6tdrXbYbGmRXMuXGQPiGv65h5c8oUwKnQmcDgJxp7dmHmtXaQTtS2FrL8tHjGoHCs"
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
