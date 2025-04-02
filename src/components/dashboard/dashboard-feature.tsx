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
    "2Uj2XyEPDW7PzN2Y2gMj4sr9fhHJ4j4rQwoof1zZfzsUt5uHVSPT1itSz3x2CikVAB4frhQJ97M4Gpk9Sbe5n7QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVk1amLc3rn5fsFMsW6cSRdvVqZUJwEWHSFQp4PHXESfscpELANQUTbShqv4kUM6A9LoAFdwE5CoDFp1n2JNGBM",
  "key1": "3oCgUNmuXRq6emoAPg8Wf4PZ2RDuAxTWSsA9EtjdNQa7NtX1B51sbZDYPi2KTijvoyPphPVYuRinTmajjkJ3KhRg",
  "key2": "5g1mDStB9g3NZemacMPxDuoxGCYuDARexQ9wuj7eLqqBU841CXEsh1kYue2Xy1tq9hLoNwK9fAxGzSHxC6GXv5Bo",
  "key3": "ea315ARKBobGtrP4zheRoALpEC8QjKdQHiRuGE6Xr7fVPDiJvcYYndd4SocTg5iWD3bL3wrn6Nw5JMBACp9755L",
  "key4": "4iFV2CSpL4MZN8GA466GAZ8yNM6MWYsyxbRjFr8mx96tgc8wVhdgBTAaNrXZySXap818GbDvq63WvX1etDQ6jiyo",
  "key5": "4wSZnYzbNNWHqmvpcNmjH7DqanZgFKd7AwSeSo6xyQ6Mbgs68225ZfPDbfauUNWkpMTN5Y8wFj5vxyCYchHUP279",
  "key6": "2vbACY46LRSzvdmXoiqmgCzYBRA2BuPyZxN9k6hJB95GfN4pecfRyEnpavKWfaE3MW7mWQ2TstCvii26v5sbMdY2",
  "key7": "33RkEJY7hBBWB7wioRFLfvroP9UkDAaKSQiVkRtVLtJKVE2w8amxLPJtUyaRTHDrRcpPqKbjydpZtSfqQTeqCSyV",
  "key8": "2NhPm7yrTmi8Ts2xyxMiEaHs7wLt6qoVschS4ZXkZCQJyNJSDojNYtwJA9Fxhax1MdHisjmAdNbNM9wV9C51CT4X",
  "key9": "5rnvX1RZFs6wZkvYogGsSkLM5gr8K5PAMBHrBszbQ93kMFdyTZiyBY3QgzcRfvaY4dDNyQDgTBUyymiWeGt3rhy8",
  "key10": "4vGpr4KdfYJmLqyurNris5tauzzTT6SeHeXtue1DYGtfToFmc4uZ8DRSbUfEjQigJjq7FXEKGafWbEj1nYy3Ekiz",
  "key11": "2fYNjEBzyuxgC3eNpHPfpY4QrRCsHLcWTZP3ugfthrfiiApxUu21PdVunsMJukr8czxLtSAzFYqkPqbbJP8V21ZK",
  "key12": "5x3joY144N8bMdQZSe4n798WVSHC1HeuLS2TgBSMn7wa51C6cnacXz5QcBkrHfokfmqi18m1Vbnbtr3XRFwXXYJU",
  "key13": "3uUC8vqPpaeXLFHLvQSAratZQnH4ABtJPczh3sNcAE4AZR6jvdABw2tEhsFYrGRL7RJDDJLW2xMQYckMXcWW71zc",
  "key14": "ohnBrf4e46ujNjQ8jCisK56GbZxx9toGnWSomcRWYJNTBA5huQG1HdPA95JRE1bE49XrwbxSckjjhSRGrPq91Wy",
  "key15": "2VWMjTQHGccbBGh4637UEX24CcVmbyXZRE1mP4wiw7j17Bm1HZP9a6t7ATxbdDNmvVn9ytRwG8mf6veSaCBM4Hz3",
  "key16": "gc9LsLzUqoRSojBEzDBKEsE7kTHwCrscTYfooDupzhzfEMZPgFvxo15d8SfUZZSkP2FH9GHVpQSc7KC14iggoVi",
  "key17": "fwSegHw16wvfCqvGb21fJFw3tha6VomFUvU4BA6A8B9hyf3F3ohyGu45GwUZnFnQFT1LzmMUSuTMKRwCCzWFUa3",
  "key18": "4AAWgTz1Lf5bqKsqejkNXMT2NWMows8F4GAoTfuonvmgMxzx3Bu84QZMxzEJ7MeBMx3ZeH8EdxKC4DXdzfw61xim",
  "key19": "3Uhsj6KwRzejT6585Tbih8VFeuEgPvMkyu48wxWXmJtHjadETpdEc1hYZBHUotw2Y7MhAE3aaWt8pz3HTpv6aSFU",
  "key20": "2FZ3o1TdDG2mAavZVFjvg15kTKwKwYxQFgrFduAZDMSuzUn6dQ1b89NZ1jiBJ3axYVqii3PpQSovyrN4sJy6TNM4",
  "key21": "42Pe4Ynkcpo1CPiJHa36jwuATF2C5o6KguG8LRoRJfYgPw8aB4V8RD5m2rUXHsVuvfsu7wkBvALfuDT7ZJFG2hN",
  "key22": "2FqA1ijRLNE8HgHu4kDcfaFg4m9xEXqjEe3GXk5gmMKMhrZ5jFSKUCQTXh6txv68KZvs9vLX2Vg65MP8tWaZcfLV",
  "key23": "4jjXZXq7DrBpXtuVidMt2jBUGmoAr9hUuqJe2b23uzdiAQ6b5MopPGKf3jZh3uqfiR1S79C9QyjCgqwDfH7yQEXj",
  "key24": "28CYG8udajYKB41D3wRscGKVytozCYDcAogy1JekxSAUFN5BHabsv3Ra3gyQTtxwphg8BGhucKUzXvYVdCn7oZDr",
  "key25": "3X6JtuFpa7RocjAYUMUtN4sCEyAtmCEzGZKPpD8HZbs7t1xaTA67utNPk2sUL1s7BGaaU4PuDWwnTkYovegaDQM9",
  "key26": "61V4Sbfh5Enmr5byBPokd8StCmXEJGiBC5o85MHBfJaCh68KJ67TWbWnjwwwTf8inDWJN3mBsVcg9zuWMz8TQDBZ",
  "key27": "9zbSmarFKCi7Q9GLUCWTzz7kVC1yiHsNk3SmdquVvUT6VA4uMTzeGi4X9iAx8o6TfpeLaPzQizyeMypjtp8DqgS",
  "key28": "49jaE6Yg19NcWFQ2kpBc33g7rbyNQtfhsXtB4cWUALEzqY9PsZfsFZzEMkdgGcTJ1MbK8ToPx4C2xe6advbKPRAB",
  "key29": "4tAcVmeLpK5JuGMLjRzh9Tu5qw5CGKoFa4SWqsnBaxMbAfJCEsySHTATTGek9yYqRBzFCAYfvgJJKNQTg68WsBCp",
  "key30": "2Ao2gNtQVzFw3YyTYaKGUzio5BQ4iPcKm1H67fkQq8aV9Ce8DnbFtAMa4AcCnbRqN6b8kiyvTeM7gNQxM8SukTBD",
  "key31": "3WaqeEdG79PPi7iik4wcLbhBFnEa21ZYJFWj8rZvk8E7iJrUEMa968ADf6ZfeXzCHYE6EgVp2xkKtit1ozL7z1ve",
  "key32": "5HoYx5WF9y9SjoVq3BvjM4sTGhWVtEs9DqB5DeVu1yuPDaKhLvkzDXTC72xZjFQkThNcgqdJtgYkCcpmSqdyKVdj",
  "key33": "D8cp6LU9DbyAFJtvpC4b73RMGVquwuCv1KMtj2Cr4SM9und8hDuCxPGKGykJ7i3Lr4QEz21Ejub3P9gepzVUjgE",
  "key34": "3DLptgMe2e83hkjKHeMXpjrRQTrFbKoWGcxkMYmZCg5r2MAZVZCAf9EDBf8gZc3xNm1E6iMtTNAEmeYqfjcVtKVb"
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
