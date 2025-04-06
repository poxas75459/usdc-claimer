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
    "4NtSmEHJ9YsdFThiN6XppkW5tWZygmm9JB5R53h6yDw6P8ReiZQuzQPAbax3Wm7gMFMPYjVFNyyo4DG9AG4RqXdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4TiXpsaFpRjxVcoLyS7RV9ooT85WdE37ha9tdaQcjMGwWCm12mYcAFnUhMc9YucB1KQoQ4fEVAtetkmcRWHwpP",
  "key1": "5DkbT14wxMvuHTNAJxiGoJjXXKWW7fNjVhAwb2EHuFkZjEf3MTjYcZCbocdBELnw6JDKeYaHixGs1o2AsfSnzjez",
  "key2": "cK7nQpKQby4gMsdvNdVLvQmfoYwJ4XH7ccMXpSmGtAg3rLDUPH8v3JFNMYT2qdWUNvaMhdVxPU3sXcUZzgdJoDm",
  "key3": "4BBQiMoJc6XC8AP33XWMMC7WsW4ftPFM16UhvurK6kzitu1uGaEYRRtmybcxCXyaMH3HAMhuchREbmk3xjijD3VE",
  "key4": "5fVC9bSz147jBwrkaY8KTnHU2JkrSeh3AM4xxf8qmW8UsAFnZzQpbXPDVLTUtK9adhNz3m4nDYerd93jiA7A1xDb",
  "key5": "jnw6GSenZzEpmVct6kYTaXBVfbrQgpozP3oQrZnHHHhyFVCiy873EQTj5wmVFJomtykc9jGkFwoJYPecXZUCiXn",
  "key6": "2PYb7paS1kCwKstrNnKr5MfmU3ZgW1x7oUJqcFfnMhwzMNLby6GUNYunwiJM1hixSed7KxjbNPy26pJJCHueBvhi",
  "key7": "4MoSkgFxcrkCyJH2f9381yG5x6Jo3edyXL2vPV28pDf7BySCUzTzHcqTiVF4X5gGedv3J7G6xSchrh74zXYG2kpa",
  "key8": "5tdKLWHtF3TTCMadNZm6A8ytZcJzcVKdmBpVvrArUmZ9BdXTVGeAKkxCd1Twtof5Vet3bbJghTLZanrcgfsjW4vN",
  "key9": "4bzfEYpeGi5gfSNg8TSZjtG6sfuQgaJJdMnWmguFxdPiBxMisLD4o1fRvV2r12t7J6F4CurHk4bAAMpTUbnRb14s",
  "key10": "4F97d5a18WwDmUrUTC3F9u22B8cJdMcGMrD7yVMgq6UmCNMCMscJy7LfpyZm6jep9RLWPFd7df29SFaaDJ26TTmy",
  "key11": "54eFfZ4JAcd5mNvXnSAXR5cinT4Qjhh2FzZudGMBw7Q18LnqLZMWi9ywHHU4EdFpZb1f9F2Tu8zqW4gJca5yfkBU",
  "key12": "2WAzsRPJ9kU1QcHSpRxGZQ2KX64ML7jiFQSx5rWHs94uy92653yossgVRy7v5jTK5zGDSxmGhrpfJde8ZxYkwsgu",
  "key13": "5cUqkgw43vsWEDjk1oJBzuu83iDiQ7g47g21z1EG31PzzMCLNQhod4VGFGC26nYW6oebQZ8WsLvXLmiLqvx5qip",
  "key14": "4Wd45vf7TfhuJ8SHEQP1JGxi54raYXeQR95kiQBDetjHLH4nqSQW7kXf2fXHLqiPA5jaMMAZgj4dm1dZfQpCvka2",
  "key15": "aAoWF9FxyhbEN8wHq4RVAT1Ekw8MJkwcyftHo4GTSPFciwPeAXzt6MBUDoAoxkJHHfiVNmubSsYbBDx7NLzSa3W",
  "key16": "2UxbybHQSFkvVFECGzbcyFm7ox1v2y8k8RxhCRpxrnN6RgGzwrCdEc2m7XR1Gzv4ZwDZzoomA5zA1gEvgieVpqS5",
  "key17": "J6NGg8V7BKSEjg4pwCM2JVVgrcX1GxKNvNP7jqi7Cz12GT8nSesdQmkhKAkUE1dF68yKyVWrqPgzC1K8zhuacra",
  "key18": "5ZiCPnWqkuv8qDA7me7Es2WAUxNZVFAXDioDsi8H7w4WphLRcL75gAMbnEa5xyJyjtbUbieQc1uid1w2LiGAyo61",
  "key19": "ihsx4kfLzgnTRv5j3TcgYEs3uqcGHLLosTxihtDPLbL1TwaxDdCYeoeLHbZBSBRtqWxJWM1RWQryymJ3Gq9YvFs",
  "key20": "5knw2BwyUna2eahZUoXMCz5sKmRpsPeJwnL4ysWXiu657CuVUakdec5YiL146GfUAnD1kTWtmJQSLm6oE4jcydkm",
  "key21": "3jUzgzCdvXP9mt7d3gUzE7YkVCD8s5vQsd1YYK6DFckBPwAHRRoYSopCwuC37p31vJLSMc7DB99VA4w4rPJKciKv",
  "key22": "4xDs7JtPaPhRYsznVFat9mki44qm7SkUofCA5FSozxa9Hsoa1AThWWr27UnsNwN4jW5uaJKrz1KGACipu4sg88P3",
  "key23": "4PSkVoT9spi5vtKBuUHghb42yRHbca8TpaMaCJdj8PtFUCHWKMrGuW519mQBamerduPfcXrFJa2T7qMt8ZTWdugG",
  "key24": "HY4vd3DC2UcAFZSFMsctEd4GKLxjtDM5wUrm1qrNcaHcLGZd7UippU37qmF1LLJCSVW1fCFuFDovVmBUhtXjqb1",
  "key25": "4W5B5RjRwCpvaCLtV7U6Ydm1kfhwuSWj2T9pT4QjuBqrf1NsPYYUP1caePkdP9x6GqQTnRs3M366Xg9Uw8YGESMb",
  "key26": "5ngb2zZt6V9Bo3NiDUYAHzNc15WaCJmquUnDoQQ8ECUN9ZX8ovWuUezViXqDT5CpWfFcRhahgUmJMqCPHtyJP8mq",
  "key27": "55be2oUgTfKiwidH4dYYtsrPEBxnGfppTza12uB8aZr8AoynppFJncAYEvzFbqQihqwLGSi8ZQNupcbkFvbK2nBX",
  "key28": "2RMZAzHbLpApsJTqEz92JiYu5TC41D44uA1PZWjy18Hq9eSLLgNpW9g14eQSUvxTDN2NvpB88r2aBHvFfUjYB7C2",
  "key29": "6416pwawmiFwqvBHSY6gLyE5p83eDj6jcxTo95WkhWMEkZ4Nx51eBpwtHUms8YicYJBEunoayFThXqQvcpyoDNaR",
  "key30": "2stuhJr5ujHGsZwVkyvMx6DWR3TUKJQoHTXNW6zVjQHytkkYWW4AzPPpD6Vvoj7tW4Vw9vCAb8vT6keya1NdYZMT",
  "key31": "2MTmUg3YyATQsH9NTN2VZLyhA2jnRdjtXxio3TcwJPPVHSrRtZvW8uxTZ8a7M1r1KyNRjYjCxrnJvSyJ4zBXYimp",
  "key32": "4UH6ugHowX4M7qNgudFQSnczaW3nnchb79Re6gRR1F7oDnxPMvQ17oE1sFvy8ad8PiuLA1Rh4jHgbiu97PtjbkdF"
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
