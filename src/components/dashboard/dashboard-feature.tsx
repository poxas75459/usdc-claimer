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
    "3XNdWyRMQM4hLj5ztWkotVR9qe3rgMEreRXZj4dqCRs8zXuzmQ9kcrzzg5Ebr1QDeRyTEBAweMj9G1KUtnBN8gfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1u9nPsLBGdeBbviub6jSvppeuoyBVdLEiAofMrvLxnqbmyWyB2CKJ5Mwpyp3tkX95GWkiRZaEiHoWDAFtRyj3A",
  "key1": "2743eaYLD7TAPzcwwD8q8ci4gthuYpCV1vHcbcM61AWebo7uwbW7X6suofYdbCyBSoRB5KYFmMhYBHNQmoEj1eJk",
  "key2": "29u6Y9WDuGqBoBKZejvMNHCZ3A1kQR8Vzya8rYVywjtxjChkV6Zzxz9G7ekbLoPhLY8cdqs7BiqzRvSVK5CKLmn6",
  "key3": "34Uy3vDY5V9fw2FNfkuDsH888XKPJnG7ptXbM8ZWEzQ3F1EiVVN4D4qrdg4qA8vGLEHyD1hx2Rk7iRywjpxRxbN3",
  "key4": "22SZmayCuQHHQud59Bg8KEZcA3mAXDdUTCafGFpabN3o2yXnGmxdS5EY1rvJHi9aqgohTcsVVy4LveZakh1Uitgt",
  "key5": "ntcvxFJPE27VbjpTgaz2sDQprEPWNUbEmANygfaX3Sipw18KvoBrLQtP4PsEMs6NNHVk6pVF8kVjHCYoEjEKMAG",
  "key6": "2GCS8nDxSHaFLNEoZbyF9ZqNdSzgtSVifEFge5FZ29AAjWUmgcAcysWAx6SQspMyEbqEySMVr5uUBaJpTsz1BZgc",
  "key7": "4cc924yNaduTNnrAxD9vTtvdorGxvAMACkYWSKFwqq8hvz8fYAY2dWqomy5q2pi9fmn8f6n3Nb4ocMDTXNDeMEB5",
  "key8": "5UBYCrjt8PFAZB4d9qqcAj8jfkYyK8F7je7dFC8ScQsE7gHkjPREzu3YXafSdcYbV8TB9VKRyQUdv2t2pHBeh59F",
  "key9": "3UHyc9ub58skHPDGGUosyfNExCd8nVs2ask7TxGKsdkzyQ4HMZSJRGaToW78Lr7wCbV5TPaFXi76RqX9ncrJF8df",
  "key10": "2g1p3PZdDiKDt321DUPZ8gJUrmkQLtrPkCfVAqBfz9jsoXDhWZSKhr8XHXS8dF3CJCwPxSh2GGpxYhfZvbpG52kF",
  "key11": "2kVJGixJztMKU4F58zCjPUa58Vju2ZFheQCxsJ3dzdX9FmyXRcLq1Ge1HZfgQfQjZiR6yJbRnxTGkVxG87CrQ4vw",
  "key12": "zLLmtEqih5DVmPRHZP8xDrh2bTRxmn3MAMsxPxPvYxGuHCejWshDazvH7oJFFKCCkfSdKsf9x13EoAeax3kP9XE",
  "key13": "93zG3xxtjmaFZ593K5jWdfWHemABe3JijYQ72JDVcL37ZGjz3pREBMgsbM2QwQqPTW3yA6MWBoTcoPSNPMdcDBu",
  "key14": "293iLKny7gstTR1cJ8o5T8NN4x4GniM2LeyqXD2etu9VVH1iZpMz3tYgRWc69b9DkourT5LHoe4p1tjVpo57ttcf",
  "key15": "4AYUVmAkDsdCBAGLTZY5adj3pDQ7FbNw3pN1nQZvSQbeYT8XBbyEnPokfjcgePBuXnmHU5n1SgLLpMdQitwobwYj",
  "key16": "2K9X1QVtFtPndV2qsfxiKoN6m5Apj52qKzDdJLt9dH3hMCPJdAEPC5XtBHBcJWGLZ3o2VYtQ5bDrc8qw8ra6Bx1Z",
  "key17": "4m2wyFSYDgm97HhYYSAyXAobTErRjrDBktzHnBRaoGu99VQ9aAY3HDtLUkxi792KPe2LtDsiTHvWNqbFAMmgAjf7",
  "key18": "GMbVTDixXKmFTsYA9MyNi8UnAmCSFegAUakExjkTAm1ecKDWxPcnrc8DvRn6KjnWFqv4yu83ZMS9AS15RQJT4th",
  "key19": "5FsZRs93H25PhZCha6p3Q93Y9oSyAK8s67rriWMLQZzFeQPohu5KGEhXGz3okTGxf82i7hUcbWmAdq63U63QFuBx",
  "key20": "41sZA779zPitB5tNZ4aS1B5s7T9r66733VoAEu1ZmunbSoZEW4PJNg8NZkgaN6oduPnaZDi8fSegnSkHSJhNPrHJ",
  "key21": "2csAfdbxpQtP4pGhHpRuHr2hCPNHbWqrKtPjWwfTLpPe7P2X2oY7Uw6HsJKz8tb6HQYdBUPM9JGZysAYVsuSRUeT",
  "key22": "KUhTYhZbAZWFYa7nQZDMhJ1WB5ZGTHBYCYRK2RrwzsV7s8ahE55w2FYVVk6bpZUnVUTFegLc59o77TYniYjF3xt",
  "key23": "44AZiG6S9omH6My78uyei5xJnoTqBZFDgGN6Y949zKUaKExt222RESKEoNH4XiVeWFP4urstEUd916SLKnpuJZFz",
  "key24": "2qP75U3HU4r7Gm4WYrnBVA39CJz3cf3J7LKTWdtEnpJNbEZUHgvaDZv941wCEhD598aXEfmYLEcw19fmqZP8hEb9",
  "key25": "5vTEDN4MgTVEDVZkWCHwk9QZp7KafhyWUJ3K4jqw6VQ1rUdaEo8ocECeWJxmp64ZUhmz4o1QxCYzbBCXmKXH5bZ9",
  "key26": "58dN5EmGAdyYWmNUZhuCu1UUkrRkvYVn4oeVG23EynoYZfz7Ahfcw1czFPV8dDwGEkzkwbyDnpdes4Kr7DJEq7ge"
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
