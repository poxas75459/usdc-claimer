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
    "4WiB6r6rUNgrj4SZQn8dQppSFF27YTWxQxAqfayhCw8iGTACGDStHAa6E6gvjEWwAkjYe7re7G1Fxi91WhghG7bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCTsFfuubuerqFz9ZeXrYjxBp1JeXXaYVSjKaMkRER5AUXUW87uWfKrg88zvX3qozSbE7Jjgx89NFUTNYSN5ZRa",
  "key1": "2CaGFmncERD4C11XFDKhpRu7DfdJ79aAXjRjGPwhLzZHswCjurCLeA4oc6BR8ybu5zwfUDt3R3EywcSKFE7ZJrpH",
  "key2": "fCTa8d7vvFjBdHc71U5j2CapSZX67TmxWhaBxFVGpLPqsaZ7A4VKop4YBGasNNQ6fFRSiYVoVYKwzH5hHxKSzRu",
  "key3": "2bGqzrgGGF4PsNwcRkDfXWFyUgv6CNV4xq5rXmd362EZvHmXxfoaDgv6Sn5mGmBiwVXTQbydmnfz1raKw5TQvbDf",
  "key4": "DeYAaczAAS1pETcvEwCa8DxkWM15LRsTiHpZRcJRgBzuqDXayz4h9g4KBxQzvufXehbLLLxqYmuaGtsG5YmqTVG",
  "key5": "3dTV2zHDv2GLviVoY6cDqUW4Kavo1pz9teR3PdnE6D5xsTTQ16cF45icoXbkRt2e4iQcckwp8L3Z9dCXmNHPFNkZ",
  "key6": "5ihLgGL6WraGVCUWkQBPs27LscG1oTt6DaL3YCwQEe6pwWU2uo2BwKBKGNDb2MYRfNFQqDWUbg5YSPLGuhiQcV7f",
  "key7": "4CRWn61RJJ7Qo4D5hk7u98eogsNGFxDVqSKiEXfgVV4nzA5S9w7z5yPEWZ2kZzwBbjSdLgA1aEPdsy9vsvDapY6x",
  "key8": "5dir9MDR2mSQWYbeJmuWt37pPWPTGVwLibjYzBa5S9fa1xPHgKu5ikfKPc35bvN5VMjh6g6Q54HkjCaoAtkr3zPh",
  "key9": "61rNmMfgfNKRSYWymhXmsyP9MqMYaq4YZV7LPyWSHuvv2XtTcpA8gk8tGfEaKwV8kBcNPi8k4rC1rvpGf7fYunvX",
  "key10": "Bh236i9Pw1xXJrJhURagS6FwcMR3XT87y4UnBJ4QDdgKzyL4gEhYhoRY8SyUwdSAJzoZ57CVcqzEjRsxATMaEjP",
  "key11": "b1FZ7zyZdL1kMPiYLf6cX4PHXo8zpdgfMcb3hU3CqfpNQzbFHfsK7MbwRevUSU4FyeaocKem4p9QMftjU7yb8Px",
  "key12": "4WzureYdPmW9eeagVGzu6JVsW6b8dyDWMkdwW194LmasGtWqtqdLPoD3K7RNqoZcKnLqomG7jvevv2nXrz1K98gW",
  "key13": "3Qjb6XTXU5nmdChyWAGpD79KXrrxBfJfdzBvdXiqANnEhWJ83o4JHozLSLfJ9uesUBqmgGdmDcNwQATq9GBWrcvu",
  "key14": "2BSd23sCLAKRyaXWSc8pXCkRhFkZeWY7s1Z2x4n2i7Pw5mEvF2nb9BfpSynprUpFdfX4YXYjnc1HMzHNmkeKWBMv",
  "key15": "2SuGbKeWbjVVqMxyFVhKz6MrapaevJrMBfn7nhAzr34s3VoMHwVfHuq5pDVqshVumaeJcTU7pwNU6zhHQ9sFHxor",
  "key16": "5Cm9t77vGhi7Uk1FvBs72ibCbniYzP1cwrghiUGzjHRsjASrzMnWtfYJ5V7Q8f3PRUAQYzdMCkqJVhuaLY6yexQg",
  "key17": "RPB4RsZsVhw5ZUch79t8GHhJxioWRKLkLv94EfwFfGh8F73BBqKd7Jbum4sNCkiYuXiaHmUQr4kDViFvLFWRTvg",
  "key18": "5HiTrwpqNGCYxqDUsjgEjCjanzFfJx2qE3sWSTKLfxgCH3hBTfY4XFM9eMtva6CUydTwn8cHRbaAc2gQrRUb7jkL",
  "key19": "4n76BpeQj5xzckiXAqCjPNSETDeE6yYQNEe53c6YcwtgY9NShxjH5PhD3SYGNccAmdmquvsrh5UEqbCYjH91Ba8j",
  "key20": "3DXm9JHvfPuMGbm9FR5qBYFzX7UZmEzr9J58t7bSGUYqjWDUgesH6QhV8ta888Na5QmJMTBZG3mjRV4mmP4m8LNn",
  "key21": "3rs8xsT8YHzdTRcs51Cn3jTKemmKYy6QdpygiFHc1aFtehZwk6X4wTrfmqj4Pse3sL1hvXPptfVoWbwvd6KFmwWn",
  "key22": "57fMmwDHDLbR5nva51GqVdxH6WCgoQDomeD5gW6CdKtYnZrNHtiwzrXKsggs8FuxcZcaowGox2X1dTLjZFj49d4y",
  "key23": "WmjNYRpnNA68rieYguwcHYH9SqhprpzrEYw8tpR5GKWMFwdrhJEpzrZqRCGCCPDowrQSivUHfum634nJZPkBtgE",
  "key24": "52jQHiTTsYGUHcQZpQjDf6kNFaU7agW6Tv6avYjVb7d4JD8N398BVzpysFDVYKu5WTCUMHgKut64dNUAAEFucEVp",
  "key25": "39J7Z687iJtR2tNiEShmE6uSRVwztqrKoHn2H7C8D6Gg9ZWh4Kog614Q8hdJsQAGaCL7fr9WXf5hvq3TvsosvVPr",
  "key26": "62tXcLco1kUJ7BFfpzWrjAG5VxmJLTq18Pur3pFZUmN4wyTGyaPFmBGLRPgPtzZ1mK8NPeg9X6E6Fz9GsB1U1tTx",
  "key27": "uEcHEmkPBn7MCjY2v88bHwMtqW1UVmhDxDQzUkciFFdBZZ5aFYPuPWEaobFR2R6RRkwxYmd3gttP6fZg4svY353",
  "key28": "2efTs992QfvKJ1oYtHhM1ZmcV3TzziedJUr6KkfrLtZWquQqHwx7uEjijcdmevNk9skY9bDukfApxytRkB9RNbSZ",
  "key29": "46EGWSmGy7WeptHfAMmHLkc8tAMDQqU2PLfqrMHPohLqGaTaiuQ63EXZhRbjCy8wNXXzqczXsTPfyyc3zPQpiMJ6",
  "key30": "4gM3WQVCgfzyCyTNWkd8pCJDa45FjJLMRQRnJ6EopHv9mnz4J4Lw4wSinp1b6FBpuKGHhbgJZWntXBcgyJ9B23pK",
  "key31": "5eS599JWiUjcvzMNrsREJG459VEMQGqr7LHA3PmmW8tRea1EAA8Q3445Cw5c3z4ecks2tKv4Q4v1Vi3SQERRQsMD",
  "key32": "4Apo5Qo1yZxKynf8yDbzqk7wv4or4EYxTCK9hUkFFiW9MRhNSKe1ByFwu4FFEnCASbJpXLNLhRhmRoMVZ67a4bkQ",
  "key33": "2pkz6czbSmQ9oSxKhWqM73YyS8vfkrhpA1A9EjFupmELRF2Ha8ouCsja19hPAxiQWs7XJN1LrrGaejPv3Q4D4cNk",
  "key34": "3V7TMTHqKA7iQWnh6SjXEWqKa3MkiHkiWqz8zEfc5cnJSmfWqnmUf5FUme91h98WCNt1um5Sh4NiJpL7QVnXoWT8",
  "key35": "2gzgAWfyNrhtiZxk2xHWigLfkkEeN1e6GwPgB7CXvqhMSEDHA8XBDRqbMHAvBQTG83w18qnDaLErieKTU47tR9F1",
  "key36": "57jJhZg1NSMHnmx9z5H95u3XbamVSqRog53HpKU3ZPAXGT95my2S8tSsTWboRfR1V4MtkhUCgvWXcNbKv5YacvpS",
  "key37": "2advZNjSzGpKimehMc2FZdAp5qdWTzQQSSrozauXPCe3wQ8wF6bA13WK2YvgDQv5f9Chx7XwAmXKUqkgdd1nVPLy",
  "key38": "4UD77UaMqDJam4mrv2sW7efRGeKjeuQ8RqHWSdpMV31nNvNWQjF9kKhJ7RoWNYeGX6wm9NBXLn1M3J6osANNS4K7",
  "key39": "5EKwXtRjw61Fo8dCgQUczRXpQK8oM2Tjj3MCHXmWfwWeqM88VnPFnhHjexwLwxSHS2ykQKzJJ5dvnZS8DcgFE25D",
  "key40": "5ohyAsAJetoj3Q5P8Cg9BZDqycP3gAUihbeSDWmmXa9VCVBVuKHpvH793yyezvgM2B3MLCoQQzHqhBChqYcQUXEm",
  "key41": "5XQHHUzT5Li1rc2DioBp9nLUosgJhSQ19P5U18pPbSDtdHaN4pnm5wu9WAJj6bCNBguWkUPV4VcSqP7YAVoPJ68T",
  "key42": "3jqjyJcYBSqvL7SHjoqNqBVPZ3bT1tZ5SkGU1E7gR46rS1zfu3v2eWGRvEkEsWxZK6YyUNMFLCx4R2CjgrgG8D9N",
  "key43": "2ptRbRsWNizwi34zpnzKfvBmLD1xTdkUDqF5qNNotZN8ffrJK3tFJgqGN2cLE8odU8rgZn9t1YwCATc18F28DwHR",
  "key44": "3vSw79ogde3GME7briPpzjf6yU2sdw4UcX2VWCCHS9pXdji3E9s24pYRgmWxfPyKw2YFRnjsSLis5r82LoHmKRMe",
  "key45": "3rJPU9G1kYUDMwd21wsuFEjspGwFqxEoVD9aaogrT981sP7tDVv4fUjdLNf8UXjP9HYfPCvS3ScZviPUoKWboiby"
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
