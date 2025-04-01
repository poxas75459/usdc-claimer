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
    "TLTQwUn5TX99e5SEyTRLdNKeHEfoToCboUMxj5qiigE4Rjtc8ysaKs3v1N7eU1fagEiVhFiTSsN8JtkJtPm6xBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hF1YfPqM7UfQU6nMHXuc9Fmy1EwPiZvkzftvSPoRMTSPgGVVEkHWdXEyULT9a8rBBHPZcnCCZjCtgohifH558Vx",
  "key1": "5v9Rfw9zAZJBUQWBJsQJH3LocdSxSmSztxg9HRBAnDmUuFqJeGsVMvPkUpLNDE3Z7ioKCp2wcVVzRgNvMFpSwAT6",
  "key2": "fboyeiqE1jqPNE5Mp24nqYV3H8MTiVw7nEuAZHuza2EPkbWkeuQzFPRswejqwbbGjRzx2dXaBWz98ohNF6oNF3Q",
  "key3": "3VPfui5pSGexwkKzioiqN1oYMJNRAgYSYh46mtbv27p64Cg75gp8Cs5j4QNAbWbHhe9Geew9PXvTt1pqsAs9ffwS",
  "key4": "2jGEBHpDkzDvEoSCKGfS6mzKuSgm1FUsPToTHkNeVUnp2KPAsWWjn7vRMKffpnqj2sWre91e74MjhkFNvRUMnrik",
  "key5": "41T7tjbHixEK6V2KZ21SkPh39mgxXrYrmGfdbhcgcSefwp6Dv3u2NFuUsMUoYyLjr666J47sxmQSgJnnBQDmR5KH",
  "key6": "32K1rG4jWW7M8enD3F4mEZ7e6ksqKQLa2aKmXbvVSDneVBaebGN5ky7AGCebip6irLBAyo3XA6LAbi3UrApnfJR8",
  "key7": "3dyJ4aG1tvLVRCECi7WsfRUspEeHbgofVL2J6SLGCVCrrigX7QETZw2B8ewsdSLeJkHGR2ZFT7tH13a25QTYSZEk",
  "key8": "xgB5Dxp8JBdYbTduHm9H7iot2WjbsLWaohXiP3LFLGxxbKTHMkupxRcHavaT8B5zn2e67C7cwvrpHdfGy1MUBom",
  "key9": "tWULsvHZRCi2kN3nYYDVTyU1NQJQFesrj71K1ZFsB9XKDGeHV8XeAmaqhR3dQ8ui982VyFY77guCbdDWkXqFRFf",
  "key10": "26WPPpzwr9c8UpV2SYKwP6dodz5hovp4LwV12aiqoAfovX8AamG6q5u8avCRfPUsQfRSmaSSUxw1cqU9ey2wFPRp",
  "key11": "7szBKxK8VYVxvnVuco7Mxn9MqEHLPSbJZ5SXbkhdbgDTKp1E1cSZaF4dUnHoxgSmheAWqzQtR1849uWLHbZTpC9",
  "key12": "j26DzRbKNSGihWQm1b4D63TA7SBECVxW2jW9yqzYbHRHDJYjt2WzWoxHNLog2xF2oQ4YnvNdcNS1Gn8oC4pmYfm",
  "key13": "3Pno6owqKEoY5YRz4UJQbgiKtm8pLGyLdB239hspveuSfLb1cYBuRyUVvBz3frDivRWejkT4uHYdMM1Sr9Ysnr4W",
  "key14": "41yupD9c1oiWigfWPJuUbb8vNAjmv9zoYiy4GN1xLs994kQjzf7pdDMGDuPP1snjPh6mQvncTJYKZ9nY24UTGSjq",
  "key15": "41r75ijNeTorufGC67Qu6JnBs1i335rc6PAnMkXG6KsrPNpzTjzm5yAa7N5Rp7GnwD9Y1FWMVmtPYv6ch5mvbsZp",
  "key16": "DfgAo9LJ2NjimqKTwWzcrd4owAPU7SRtRsr9CWHrPXqpXcPkxnR5Re4YQ7L3pWvtKYuZytUDEbZw8bohNaytAVJ",
  "key17": "4zPtnUp9cLDXWoHhEaEW6j3CcBbPyDJm64Ht8R3QbGaNyaKTME3CFK8ZCnhcWFBhYEYADe3hphCPYwvmUCRyhDdH",
  "key18": "5GG5uDrM3CJSmibSzFe2aCvZaw8moMikg1xwcFpmzP31NtaJJRcpBzU88E4oFxHrzWgtPisA1M3VA568K17vvM1p",
  "key19": "4u8ByoWEfZYqiz6y5zJX4KQYdqmuosnFENgQXwuoR7dfS8zpDKsF8SkDncRA9FaLeuMys635U1PQGV1XEavZ7GMg",
  "key20": "5hb6mmD1szviGS6A4uZr3zya44XowSMBeaTG8xeHyWw2zEYoKtMaa7HMSagQPJzhPgqVguCB2w8heAYzA9tGKXvS",
  "key21": "2DzAnJFvtc67wJa3wcutPUv1RxnLyoQZeB9frnF3Uj8qQEc4pHzSZhZhM91668DGxHDA86gmWoVNDASsbaDfLK3H",
  "key22": "5n8A4LwBRfGnuYXgpsAnrpkws8avaJg9JA5uYeYUnz2piFUKC1TtZCZbrhK8QmCTgu1badGDQRZVLyiNbRT1oH5A",
  "key23": "3hkjwA2DV41DM9W2KrYiEuoysfhuvH3ArmX51zi3rxpFTkgogKA5SkQnHTXGcU9poFpRFNztjirXJ8zHoCFQHAc4",
  "key24": "5bCtL9cCABvYhLh7LXu9c5EaaYJpG3KZZ6H6docQ3sJTw8rQno6fsfgRDmuVmWZxsLUShNCngXPNDzEXBoET6W5k",
  "key25": "2BLFGjyu8YckorB5rS7LCz3g9hQDkzxbEURiZvFTJGVdnVe9bi17iVF7nFkRPDNfqGfd7miqADT9RV3tfwo19HzN",
  "key26": "3mWrKbADgGa5Wc5BBsMpZxDHBBsXmxisNX5LHVk8GvDXxagjf6TkpB8gorKxKBBBcTakftQu3LgRDTq4kBsReAWn",
  "key27": "3p7DAw7eiGSTNTYdEQbny9B8xddqxayyXDacWsoSoEVbJMvRMXPxCwhYSrDr5U3MndwZDjybxouvHqGjiE55ShMt",
  "key28": "4NxjVU9WfpH4Kswary8Je8PeB73D8nCfrdkgzcg8nEFFynZNu7oFB7ivxrvR9oYyR1ebzVCg6PnWyrwmF6SGF2Nq"
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
