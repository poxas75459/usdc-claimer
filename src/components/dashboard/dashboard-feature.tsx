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
    "Tthp4dB3bPhaoViXhQpnaEeWWZnG21mCjdV67n3bPdGGyT4k2NgdPZi4RXJbp3cXQNnauqQq8dG8t3o4RLtcpvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EX8L6dtY64kagy7cedbbwz9iqHHQTBVCqfWrxSjHWGi9VDv671VXwJiF6nNws9kfy8av7QbTzbPVGitKN63mGAH",
  "key1": "3xLYFESVCW6F6X6nnD9cR6ey5FttUnax5PJScefznZtGkHRV7Zpadd6r1uYMXqcnfKDUZekivVRWDfkKZxpLcvJo",
  "key2": "TEUxqy5qLTyGw56UQfufMnysHUmdCfqsHFnrn9k2GTxQ4peEWUuDv8T6EvRAa3QTgBw5vxuAjgbkNp953NfVumP",
  "key3": "5n2Y8xXYPPqWnV12zGk9B5zfNamFKCYrXjyj7rR64xnkkCrm8bhtUBzUDNDZM1355ZTz2rQVxzCaSYNxALEksrBG",
  "key4": "37RZ8PKKuAQb22SG8wXtuB7nCuUAaZRZaLmpnLsVb4FqFm4aBZxHPYaGLDVncsDjut5QqedN3AYaatXtpbg73fr6",
  "key5": "24KUHrBERLT8YNjtZot5WkkmHyUx5bqFx4KW19Hrrdr7dz1kRZJyXNhRoTJAkHvY8mpGzQhujuZNrTawnvqZ61rm",
  "key6": "EKfBpiz9SQQGDFTdvx3VuFpsXWQMNJwZZYoWjk1zbM83gZKUngth4bkWJ5VaixncEFcJv2zVfahZ85dH8E43MP2",
  "key7": "46RUqsqVxQqYX2gWWk9fGphbj8yNCbyrWbysEPynLwHcQWSMPjVU6FwuWuBU8Sgton1q5QUarMZFhxTJmiUfX94f",
  "key8": "2kqZvbcgDW3tADkToK9TevHJPyramJxZaSWhJSnPy1V13Zw3GiHNDoaTMHHBaAmVQ3iUaPmbccQ2r9ZAzzQGS4c6",
  "key9": "5kqucn6A7YCr8mYUPgBtuR2pRHK2jLGpZb1vXE8MmNhAXmEpmon5Lm3fVUCCr9j3hKJcjut8bu3ymjnifgWVTE1d",
  "key10": "ZUTFWKZPtKMAL3hhr87af4D2D3JQ8x1uvxRJvc8EXeuVjBn3EeJh6JkR1YNYpLJwhSjM3Pz392yhmDWLCRLLRr1",
  "key11": "5vZfCjiyYgPvkQdTh2eX39P5zZ7dMQM2XCGAA7RVr1WhVRJoBHZUN8RhJpf42iYEaj8RTUs1fj2wMV3TmrTeMwQg",
  "key12": "2eN3recY6h91T7Km7KXVAySop4NJpGTxC6e46Kpr4yL428yXSqKSkL6RSACcTJWYYsUr3ieSqPCB8SUaqSP8VfUN",
  "key13": "527wgCUT7LNonCDiUTAL5HUMbczVktdwRUEm4puEja81n1AZ8F3HURpHHyqcMfSmgx4KaP8MVhD8vE6Ya4pDX1Ks",
  "key14": "5wjHLrPU4wdHg2GuTmHYEg9UgJhkYNYrYqDCZg2DttgaLJV2ZqUf6hsAKynoiCjNcqDCozfFCTZLzMvEqMmR284v",
  "key15": "4gkoiVPDAN2Ad3pKPwDNw7bDjQ3fNvbq7pBuCJckpWN1xvHtXTKLBZtHRpT6pPLWUheRBoyANBeE6LY2voQBDUNo",
  "key16": "4eAEzaEJfZotfCBjXQY3Z3VALwaRLR7KqWf1gNPcdXXYLTuREFz3dmpfc2zEC9qCtHVH2dMvePmhQEhUbrwoEpAN",
  "key17": "5Gwq58mbeg8ijpDfQhXJcedMaWaqoLU1hFAWpUoVqKgKDxLwW68VCozKcr8DbwbmJq3wzFU18yHxe81w2fF2TLy7",
  "key18": "4fdGv25yohc91PLy9JWiig1Jg34XUVZfE6UN8qrLWsPJrzemCGyxF4iCviUePxxNpXymQjWPKmhhWox8bUdTpaNR",
  "key19": "3EnwcM3y4Z7MsPTvdiSqoTaGXhsd4DpGbTUu1NTNV6kBBmv8fA6H9w43BvoX5V7d5zMPC9gBPZ9bWqQDew77YZom",
  "key20": "2Azx8KiixF2k8c1j7rKR3WsbHCTRYxDURzdAVrM5eCtyiu21iXYzqx5ykoDCn8175Muu8PkYc62CF8V8fMt42h7d",
  "key21": "5C4f8BE4XLSPdLcapbz2ZXKM6R6WAG2oasynKmbGqiM6WQzuq47rpRnongqax2EebxQqKrGJccuAizpxXMC4dyPF",
  "key22": "4fZofhXnXXGCEyUPeP4gWxnxFts1n2YLLyJK6AXsvgfH6Q2yMxv9phiqDy5U3CBxzxr7etEGUJatUT9FhyUSKH5f",
  "key23": "59zEc2wwnibbqMz1ASav7peeBtQLJBgkSLcucXmame5nCRcJ3gtW5EoFccDhNxF4mh8iQiHWEx7dJZjsqV36NUJd",
  "key24": "4xNsngykSdUXXD5rTH2xSBzmTTXMBKmZznXa6rGiHSeqDYtuy3BdmsXC8JrgV8RRa45ka26CHH7FMqvnHwDftu5r",
  "key25": "31KSXzExXDSM5WjVS6dhiEnZdFwENGwRwE2sjBUvuSskm93RBoptMdycXqP6Sr5E389m9NXWHYGajXpv8GiYs23H",
  "key26": "3vziusVxzVMoFxEL8wnvEaUueeH8746sTqFQfuUdwtAq7MRC9ARXxk6128ejV5ARsen59TarXE4L4LH9J5n1y4EC",
  "key27": "4NkuroopGmML59JEdY1SgLemsGo7GoApPG84jQbRjuoFd8GpJR6tbr1pXAPLzazvriqGPMyaf4tfiMN7D6RNWjWa",
  "key28": "3ZenVGFYTqLtFhaSkqwYGnn47bShjud9qn5cqQhvbPzAxEaYqJHfDCm3m83XjURpPozfjh2mHqPtaio1k536Buym"
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
