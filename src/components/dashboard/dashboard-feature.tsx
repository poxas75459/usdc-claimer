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
    "2L1vGAbzvXWztUQEQfa3kFUVRp48e8EbwPaMMzfdxYUtdgvkotsF7kJmqm7gZ4z4P4wTKxzUM7NJuxwXCGUBobWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxqhJC1KqTZjRuxiV32PdkeL1kCJbkTwqwosYsTj9gZfXtVQVcbbXxvPLPVw7aoA1MaueZMwUcvGcV6ewn31wje",
  "key1": "52CrdCXGAoX9h5HrHYPJUcCp7EYS4J8oVs8MFwBwSNrRykvdTEnuPKqyMAfxkD4qKQw9jt1CGNT2pFdECiEMEgcC",
  "key2": "2RwcfJsHJVmiWHZUU8nTCcSxywcAxopoNdAKLGDPEZMMNL2J1iHPUxXXRrvB3gqd2RuLYhWYrZ9nbLW7pUXSX8RN",
  "key3": "vCpMe8F2Nh7LHNfH8ywDux34GeduS7dPox6NQ4BFbgesQnoLHYBua9XPzjo4Qu2w53xiucmmFparcmqayNz5VX9",
  "key4": "4TmFRWFhVddPLVfccYQeQDruffZssAHNVTNgvNRZ5e17TPY4usiGq2nJMp3kuHrdfT8e6Bq7ob32Zk5mAUeYf2J3",
  "key5": "4H9T5wzsWAGegphriC1FcFassB7yP637QNzBRPb7xVmnwguzN6x7p9CPbQKtuYvx46qLQTSBivyTZN16XhNBnQkC",
  "key6": "56r8scvSDcmSZXX7d4ahzTDtJNJWPwsU5SHq3GoVisrZgNZwadJ5aLbnnBbM9orR7AHKpt6n6njabav63Wr3vnCp",
  "key7": "42UjjVWMZfjPc9xpHeNoTMYfTw1NFDbCVdiuWzwVrXzXCg6bwjtJ5ss4barddKEGb99rkn8jjdQRTiJn2bwxM582",
  "key8": "2qcuWgLadouxndWdmQ4LBUJrdkRp2vD7LY6rS4y41vEAD8UoZFTLA4qt7iL7Q1sDiV1ViGFo9sZVa6u4fKRafL4F",
  "key9": "Vj3ZaQV2RsQ2jmjXiCrJawjzhEerptcGCNpyFVPTMZ9RnCruw5sLJa2bxyFKGTCKKAAKwavzqpgcwfbKzrQpQe9",
  "key10": "5qBSDs2JohNeuDygKfQTZTZmvc2X8aRAWzv9YLGqvpTdn16PrjeZ3xhXFkmPWUWLB9uZxK2gmBxRQyQAXDcKQzeL",
  "key11": "xSPizFQ5vce6TRnLmQKGiAcBjzY7ne75qom5UL9gTX7cnJh4rMre8xEQBQgGduv564URBAjhxmH4jUzAQNYkKeN",
  "key12": "2fLnQiABUNWVHNdMBo7f4hjQcTQFrsgWZoESMCEQiiMcE7pWxv6e9Nwjbjs4V6QwTm9asDtrJ2kDcjpZdueAwtyx",
  "key13": "GYbwnCNKHutijD5EyHgTp4Gg9BcGE3RAq7N7vqpsw7e91VoU9bcKZmE3thduJdtV8y53SJDuE2GBYdUHxtpJpyk",
  "key14": "5S8S5sMoRP9TGeUYkh2M5LJMS9Ksz2XmuXpZpPrtmr5b3cL49JM7SiThqJTgELysCXRmVWr7gcM24M3ux5USrNCG",
  "key15": "DGpBzFXY18JKCWFTYwHKfYKpYV7Wxppi3awZpWpgKPFPtZbFQJfbiZkkMwX1proY4Qk8HAwUbAF6tBrUtVyBwUP",
  "key16": "3YgyrUHN8PpFCPihkgrCs7XXz3rmTaHQt18iknwRPy3ER54ZDo2MQKGCkmDikg53vu3bWhndncbghUvkt5pnLpDT",
  "key17": "DQmAUSJtayLd9iyzQ7EHfN8QJL13wHbYTx95asnZvV9GL4VqSVtvCCnXz3TBSWAnAsWs4L2NhbnCUF3KjRPj6EE",
  "key18": "2aQMfPPFUPpNVNccTNRUeFKSvLNgqSK3YXeVJMhdrYiJter5vkYPMdZtaoKqLfkoqUBz2DoB6eQpwZeUMXx6SvKh",
  "key19": "2ngF2pE9JXLtjA7NLNE3nfZG5BZHxYiXMUt7xHrK5B9ZRu5DmNW4bafr2PZ4FKRDWkN2JqRywNHNhpvB4z4Vyw4k",
  "key20": "2wmTVnLMLjiaryrudi7SLcX6PZjE4eHoBxTu32wxbjwcPEeb1chYQxbwYQXK7d5RrcpiiS6w99ya54H1w9eRTqjU",
  "key21": "5pk8h18iDuAnXtbNe7zaJmKKTmMHWX7wwmnEC5LtuaDmEQmmUkDqAzfwJu7dDvUBazia9tJtE7f4gBKRA1HyJeAT",
  "key22": "4Qd5Yyv3kDmhUkucPUQqr4gYt6wQMewkAsLK2K2JV1EdmVjVwd5j6YLVd8kPgrbXVH2YekZTNuZ8ZvZhwV3aYdE6",
  "key23": "JKm4re3rKMEo5nWjfK7AZDWZobxagNbSS5hC3NhA3Fnoj2GokJhoKdAzZrUfexoymxRzq8B8YysaRLQJJfgpWh9",
  "key24": "3yChUy6EKBFrwwq88neaiwtZCS1NHG7CaKqZDcWKCkrTVVQx1CZSnnEJR75damSZr54iSTu3rfotZzTkz8jAimn7",
  "key25": "3nfhYPrA3ZwmpnzCih4PtxavrwVCzhWtRRm4m5kK1RcECdA86yn2jaeZBWsy5Z1NGipMSs2r6jq9pr2wkLT16vtV",
  "key26": "7UiN4wi9skTVei29Ewo7yf45Acmgs1dQCYsn2c5jtsF5LBCxDhHGpuVrE5Wx2GxWEiPAMEYEarHhn8GwNXimSWG",
  "key27": "3nzQdG3xSjaSVkMKoB4i5k6zh6Z8Y613EyhVW7qenMTEH2JQqPqZg6NKDbHMXwkVhuNWGNfAdX6eHxVkMgMp6LAt",
  "key28": "26xXVfgP8FTuRYkBmy2hx2VZCeM6eukTed3PpL5y3MAnQUuCuDdW46BunHaqkQCGkusxw9oBYgwhtHrvJX3Xxp5T"
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
