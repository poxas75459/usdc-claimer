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
    "31E8UASyXmenPFsUUJ96RFg4UvRiuwKVqnQt6irx1aTW2xvXzJvVidLounsoXKUTC4RW9E1MMGsETcCSbTTSXqvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEPNDJDqUHQ7furv2dFJAbaud2L5jVQHyoC1AMtVErM8L48Km4rbLdBfRdXJDtMkir2KrdquDUhgUB4148PeLV9",
  "key1": "2mHJ1S5S7qxnecHGaSSYJMx3eFcH8i3VNpY4nhtZDS4C6NfWRiHc3mB2BRhjKUQLsYuSbdfswFYwz3x1H2BpZ9as",
  "key2": "65kSoExzDA5fhDPsvPCifM9wvkZv8Ui29NMHutyFaCnZ3XwSn1GqBAN9UgGKhxCPJ7gef3yL7icyCxRTueLPG3u8",
  "key3": "4qA86pRGoH5YucrAjmrHjpo4ZzjTFr2U7Ng72CLk9KJcvFT6z8N4gjksBXdWtbbojBVzMMkWAUUkRAu6ybKLAeNh",
  "key4": "TbTjqcpnmQazXg4curz7swbs3MwwrtkF1aj7qazNpd7VE42SrLFLhTqH7qkdSrgGHvZgjAVD6fkPoLTx7rTjduZ",
  "key5": "3gNFawFfashMjNRj7XN6zcfsuixea56RcFHUjjSb6u117Xnwg5iEaYMKjJhbBBd3LXpjLytzgbifAsEvfCqrjp7Y",
  "key6": "5XpFU3zeBjtGgvBqcQYj4F4sQXnzBEqSJZPJtW53FUz9CU6RnWqiPteAsQVRwa6oUrdDFumVKkdBLUXcPUjrY4qu",
  "key7": "3cdFSMZ26nJuTTN52k9WcvaLYSCeAhexSFa3hmo8maHydEdAwCZk16prcwX3KK9nEgEpfSTFbhfXzkoagtyGKAX2",
  "key8": "2PZB2RkYnG5Wf3ZapB2QsWPeu1seWLhbV4iWSA9XePLLbvxZJv9pxRT2cuWJ35i9sVdQYW5Chg8fEGJmqTXb8ASa",
  "key9": "4FndMVcFakjEktsdadgsB5CQSFb9dLFwTLyvGeXu1SXnDt12EVqKMMbHZHYMwoQYWpBrVsbpombpAU3UyKuqKfgr",
  "key10": "5cF3fyLdqfKea789cFHSWZzseU6koaZnHo7gjDxVxg5M9JyrRqzVrZGWtbRLPNr55mVYfiHTZ3qbULr2LiaNBVLP",
  "key11": "4foKqFyX79oSzb7Dc2n4uKB5MXcX8Lp7qCaD79eUs5MzKf6pEB615waCU5Ke76UtjuFdhzTqKHzCi37LpGLgitWS",
  "key12": "2yhiJPam6exXFucS2RSR4kXjbYs6arXQTbLcE65cBLbwymoH4xMayvmWT6mTDQ9RHXt99nytUZ1kE1vaJmm2Ni89",
  "key13": "5361FZ2Mm6D8qo7B9465nTBxS3VZoDXTRqbBwsUiGW9iqCCrsHRJhSJvChkNKArtcuWxgiDkniwcJTybuyE2MNWr",
  "key14": "49Pps8Bh4uCh1T7E5f6GfekfdEtEk5g41MrAH33FubMCmDBYvJYCdTwDWcrnKdYAvvtHXnCty4r64nTkWBGvDffw",
  "key15": "591nYTSuh6ZpEABLvkU1ciwoVXtRBBhatGB1zWb5kWaGfFc2u97EunxiqDqp5QpZ6sp1R4XxUUPrgZrbabxCURuH",
  "key16": "45r5W8PWPTJkdkDwv3c888AJiFDKCL7TXhkzWJAuF7E64cP8mSsrzDbAgN9SL32GQ2A6TcSecym6sxrFHDPhLvrm",
  "key17": "4ntNVNHSLJZoT8mwgSvpPrnSjRcmL68KuCzchqrzdiuhj4aZrWENmR759GbuHnT2YidxsFRcXkPcZbpUwv1fHUCc",
  "key18": "3fTTceef4PPVWqDsC5mJPXfhwPHo1hqo31kQ6rPGqrrki3ZDegWhjkvKSwKa9d1LLdRFooNFihUGn4QECtf7gByw",
  "key19": "3Q85v8BKw7NFFHPiXitj1NyGwUTWYZpWa6qYk3FNnHaW3omeqXLKXTNxLxhBFZmPH3mGHZZt8r3s89GmvduhYD3X",
  "key20": "2nptkBcpSSk6ox5sZ1UmzgcM9Wad14bZp1F5q9LtsYXfSFRVP1rMfwRvTL8Y9ybqv9e8qcBiyLdAm6Yt1WAFgubM",
  "key21": "3NpxaAgDLeVo4ffVcwvTc7VznB8UGi4ivpKpAgy4nyA1xRGeJ2KZZ6vu7YTw9CUugxv57eXhCcB1c9HCcK8MT1UQ",
  "key22": "5HDcHtDdAH6QogMen2NZVFE7KFKQtGQvMiTLqkFUuAvnvHCBv1bfPqKTqiEngn1AntzdD5sMCcnYEMeUJCgJxMmX",
  "key23": "2qePabyB92HSMFMoEjjHnTsPpCUanM5S96WJ1syLaYEPV51gtconduSMjBQWHUcg1co8L1guLciCmuNKxSN7Ecer",
  "key24": "28MtWhPj5PTr19HGqteosWUhYAvvKKywnEvKMKLiuF3srdJ44uGCkJBEDGf6571NA9Q7tUMgLfDTiJY8CSG2Jsgr",
  "key25": "2xe15DPxpzmhkHcbWLmjWQcTETQs5Sih5ydHznLFW23XoNHPnVarN6nar5GoB1ajsxBGuaCZMnwFhkivyWz7tfCb",
  "key26": "42e3V6VcUVrGZPybWSZoFmXMHJt59ZLCvfrzHghCXBxcVa4xDUbSRqdkCD8qHeKKkgfw631KutsR3SZ9YMbzdYTD",
  "key27": "3TjgMvrW9KGtwq7yS9HA1dE7qVDsma8dPNPru5tneQpzwM8yCfDRb1hBgymdsD6ZrABjJbwi5Crqrnt4ZHuiCsGg",
  "key28": "34mQnEFMthGzo6PwKtuYPGtjyoRGxju3nsqTXAz3kvfadDokGTCtNqeM3fVCbfU1M4XgWBEjT5X7qszaMmfoysVK",
  "key29": "2tN6mv1HR8AFdWWgjAF7avwDU797jaqXAUSsDb1Ad2pWxvNp8vGC3PXNwkizq5GojLgUua1LmHC11JLxjcsjx8oZ",
  "key30": "58XZY9AzgATFmyAXH4GCRZRFmm3uaXGEUq7ZtEkThVksfFSbjAkYfUiz93w5PhkQVT5NHCsZxzNPgCNmV452R569",
  "key31": "3QxHmdhzLp3YF4256ZEUHjdCgvScXDMsXDnj18gb14Y7JNN4wnUexR6kSrRW6wGa8fH8NhxDLSaxgXiY7dPt6LVA"
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
