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
    "3p8u1VimK1VUT2WFhac31hzrmuoYtaBZFaTtXWYBVPMpS7cG1ntfAMR1ZYvrPz3S2iQ96rHcisUuqiwNBN7hkT1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BN8wb17zsvggt83BEc8d7HGVrNi6nDFGPhtVFo55v8MENkjzzxzcY1WGqZHJktiSA6MRGaUtEgkV76bBGALDzKx",
  "key1": "4kEc2V3ZxZrqqzU6BscHStwLWZm1bciRct2hn6g6qkqKVuMgdvTe7FReUeRqdSEa236fMWvndzqcSt83c4YaEqJv",
  "key2": "5eoUtGkSQpc1xeZShe4tgCgzPCBUd1G6cgf7f88NfzNEHW6JgyUa2SeYCAhwJUCMjXCTduhDixmdRQpjLqueqjdj",
  "key3": "2NNxCJ3gk8iKrL7Pqb1mZqe8Qs8SqpMTUfwdPXtpPw2G6G88LX2x4qmeurTfbvfjKKnwH4K8mwZ4o3ELSnZm1Mv5",
  "key4": "2iS4tfQGb7hCuAkiLMZzyg2F6mL2TrLNy4AjZLSu6mpE5UK7cLK8SF91EVQCLACYKrfdZoxtzVLuakSStCNS2u5c",
  "key5": "2fRxGpyc5hSxNhRTGmSMSXqikEUUbm5oDNXY5gCXBUs4WgbK12ookZuR8geH1NrkGGcWgvDFheZEQvJaBTEHksNV",
  "key6": "5hn7ss18noKmdfJZqnvb9WNzAQ2z94GPkhoDad56mfa7RUbrnqqdYdVxBJkpwXjiuEqTaaC7eSWjxHVx8pFibZqe",
  "key7": "4xDHTb15o9AKgpucPCMrVdo58gjjJ2uxT8vrSizgCRZVw8tX1qLQGgmvdqSwino3oyQefz4Hp68UK43M3Z3cZor9",
  "key8": "2PH9gRy6VDNXUwbNmdEqL5HNmHgk38GHzkG2uKCFT2ZG8tFF5WXRJQkkdWkExujd2DoV7WUHsrfrm4qW74JnKXs4",
  "key9": "i8ujQSYybEwevdbmkkDD84C8LZW2udBQCUKJSKx9rEfBtGMtgDPfA6VREJ35oueDvpBBVWW5GPCQHpH7LHjXV6h",
  "key10": "54VC5AVtKM7w7dSqKH9JSaKQcRsSWyMhesXYt3yi9wfM5vwibTc3oQpK3GCvP8fTAUFRBbhxbMxj5Dy86G4AN67r",
  "key11": "3SfGHPo56xdanfjMqFJ2ynvCc2ppKAtEaBJ9ErbecyPPrDh9TfKAoKuksfLrVwpSggnvNoqDB3aY7afRJYsNbV5S",
  "key12": "5C42sTuGn112SKbLVqsnRnSNuvk6N63iXD6dZWbVGKdAe65XjaEhEUWyFk3dQeKTQNGUZjNkRRBJyBPNKy6QeCDQ",
  "key13": "3hXjkLqdCHLNshAEiJM5ufm6o9q5yiiRRyk4NppqHe72whWn3EZNh6PWsaegX9TscUktUie8yAw5kCNhUuXAXKWj",
  "key14": "3pqWVAh8Aokvdt6R5usiYG8HihmFwnWHotwMXka4z9kAiZtaDh7GXWfxEjck1TFcwT6dsvUUB5xvPYmUrfgEDuWs",
  "key15": "4cqWSoLevPtVAmoHXusBQ6iCeJqxWPwEkb9yyrHofw8SZL61RfY739hHd2qpgJ1KCCN12k68ptNkVZFStKP2R51t",
  "key16": "t8sHsizqtp8i13i7jLk8rj8ETATswz4iJxVmEkiJn8enQYDG1BVxxYawzX1Qj2TSrBB7TQECTr74xvGsZ77i3QL",
  "key17": "5QhuJ1pCQh2AyVP83f2iiFZ7MAvyVD5Tspn6sCPUX59azMRWAUyRatTiK4ep7JCSqRVSUzbw8fGETa15S6ajeRgz",
  "key18": "5nMGYQ1LSZrCpnGMymv6V5WDL9fcN8wHzXnCLNSgKJhgWNB5StLLTEgTLyZBi6wCatZmx48QakhdsYgeSrxBpeHB",
  "key19": "3nvdUDfNR6YcTaFABLwp1tGLtY3epGETKhbXJSD1HjpyWd5sBqmJvzmdqSjHWZbEw27FDVY7espcHfCjCZdPgzFz",
  "key20": "3WPynjDJxo87UdoVAX67D5BLJ3y8YhbTXZVGVB6o4dsZraGP3P33XgkjxcT5xx11MTX2N4YHfgf5m5cFQs3Sq8FR",
  "key21": "5Zv9P2gvTQ5BLkk2EBvXRqx9VgtbNXsviZq7it8FjV3tSv9Edb6sp49fsPCkta4AsLcREBQxj93kYscaZfxeaTat",
  "key22": "3mAAsdFjk7ZS5RA9CoQs8FzT2t4GELPXXVRqjVQEEqyEzoojrXu5b1LA2tB6iVuP2C8LnTSKjXfeowzb4ZV4Jcxw",
  "key23": "2kNzTwE2TTEipx4FHT8WCNevW3d9XUqErjPMp5CqkLiiaEEPp4k1YFcdnfVeNvodddb6mgTQnCrw7k3ug6HmZwWE",
  "key24": "x7f4dEj31VHa2ZvRfzkM2UkNaKeMooQQdxfsgSorWgvWoXneNidegN1rGiJg3PzptuXGYxtwwXLqjAT9yi74Zn9",
  "key25": "3YrHUfdS18rgowSFWdRSRggEdFRxgC9RCbrZATNrQSeXuBbiAzg6rbfqo52Pj1KKUaX8akDN5BVeo6RTJHhQZgCQ",
  "key26": "2547GD4mdpxsEcqGrZFZ8pZQk2JMWWAKTfPD23BDvnujtyNUDGRRpCFrReVqyRj8fTfeq2jVd3D3ReButSLfTtZ7",
  "key27": "4vQ3Hy1BKadPDFuBiDXGFXvit79Y7DXEXTGM52k8nM61M96mdajZZDmii727rAfTb9ui5hdcyFY9yJHdgxAqYWL1",
  "key28": "4wk5DrbvqKM3rtfVHTmEVfzRd3wJAz77xZrVjxREKrpNLEZ7GFUwVLmphMofSPVCWv36gBfz3AuTL366e5kbjAJX",
  "key29": "5q7frKed4RCYjBxDRxmThpFPafz6iZATKXd7Yx8z8xu21pqzUb5d1MpMWdLr3doqDanLSAfDYp5ZRY8NFQwqtvoz",
  "key30": "2XQwNYkAUoKwjUvvt7rqeXXcHQycHk7pmemVbEE6N54MjAK6mUWFenn3URq4WkY91HfVmqw9WQ8XPpfzkJP2TNEr",
  "key31": "4eDPsSQFjituJJsRMzqHvLhj7UnVEmH8sGRiRVjVGA3UR7frCJCYihgfW6HBxKRPeBBuTCWM2mMu6rH3oTBKUMd8",
  "key32": "vmJBRoBHPiKQ9x4r7n1urB4B2E39ZdF3fuxRa43611zwvamYkx7taUx8xwevRArLaYTMjr5g82CAYWMqKwjM5jH",
  "key33": "4r8z9a5WW98hmKGYMekhgtAZprbcBeaEt6F6vmFKpJ9M2hAAUM7SAZTGCeXwTjXCp7CAwLEa2YFodMLPcPPcpnkC",
  "key34": "5cxK3GEFXtGMobEHdxGs9UDqGaHy1wc8siGHJQNMc1kTNZhJdBxUQPdKmXzQvbeWmSEedWEZ7MJfZfdPXGPUews5",
  "key35": "4YLSrCCrqtnDuNTUFkKzaZEGXtiovECNJzLhh4EX9TjyWBMScGsxcsFygnAXBkJQ6pMALa5nhLsck8u8GMg8gLAq"
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
