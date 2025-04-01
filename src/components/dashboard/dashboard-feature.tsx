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
    "sJy3GRTNWHuiGjFbR1ZTDAYykGxSuuE9KrpN6rd1Y6C4wDS4S3Hewpkq4nDTwSPfJavaDvEL9tvodBw1PoQDfrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t98XNm1hPjwQRDXPFwmvZxRjZjB5TTCYKDX2rYrgBvJg582qNTxnoBeSAMMtQx3MzpYjWR6jdbebUYmtz9JEMJj",
  "key1": "5kwzp2hWjBUyuVBqW13EYjYEToDGEsvkHa234EH9coFXxrNfsCHnj7Qxmnd8y4tVGxgUtXRbMJbNzya5cbeajzpp",
  "key2": "2RRQZMvfc97xyFtXRkeoHV8nXu96Ck1ACMpBN6Xyxcnqbmt4VmsFRSeYM3Cu63qsE1sX6KKjK3iEy533QxcBcwE8",
  "key3": "37t5ezTdhrLa885vCAqcSESrAw8LjdiCCPQ86FVijmfZmHLds6vYhUzxnPHbPmXbyBeiABrjTKnp7J6CbiPAUGFe",
  "key4": "5iySGQzyGvT1nXEX2tAsEjfFkjzKs7dVhDGSrEbNu2TPJKQpUUwjarmPSbHFqh2kr5FGNy1UZ4KJxsrQMSQVuAyb",
  "key5": "2nW2Np1Z9MZ5uAFfowsJZpTFmNJoyndHtWW1QwGb6JVWr8P73xQnbrFHFiFvCvjAX78NSKnSGT59D3XMFF8KLu2b",
  "key6": "2B4f51bYSavnpf4TCC5Cq46rKu2oosrjta6faqLkcH6RkAUJAQvNvQrvx3s57uYSSNEBde8Y68scQ8y4sbieNFAT",
  "key7": "GECQQyPLXRujYb3oSAN7mJCo72zkkRbvNNN1J7xKC15nUnagCPqtSFzzLu7wRZ2bRMpN3KgPPMJSnB5G8ndsxeo",
  "key8": "22szXS1udWUQ8GdNyyrQ4uDZVsL5aVLn48tv9fEMP6omW7z2Z6LXsdG45xvB5kZeC65Q5yGCPwLLQvDjBDMVNUBw",
  "key9": "4e1X4ovWsTrKze6Cvr4BH1EBF32sQeRUjr8garCnHvjN69W3nPfSd2jbvJZgS7sc2MidfHxVCeEjchKsTkca4ada",
  "key10": "5YxD8c15NVzJN7PbWSdq2grukebTPWXjPifdE8pFrwnPXdSpbUnQMsVk7aQjPgPXN1jLrm9cHqWcYtFNP6s257E2",
  "key11": "8xnQSrdgffryKpmGmQuKt6VCb5uSJ2Nt76QP7GuoNjPk4fv6xCBsqargFtgBrDqFWKCFGVK7DYVHS5owyg1sDau",
  "key12": "2XrTr2in2Bq2DrpwH4QS7mazHwaoe8AvWSpfTiUdqXNxXBHiQH117PG43yh53eC6sthFAbevtP5RCRejtTGuH457",
  "key13": "F7tafy4JjuVqsZDHHstSz7i5manNqMsrRyVDLA2QxYFkxkAnLr2CZtwwUhU8kN5uAKexVWxcEndkEVL55gLHfHJ",
  "key14": "5nHzA3AZ6TSkuLC9Ykhato2UM2wHrCnD7jZvWPAfGSqFRdXZxJsiqKUUfQJGqKxbpz5mveUYHZW3pCRdxckE9qKq",
  "key15": "4HpiTQhCLPNjoZxuyu8xkpcxQXJyAAPLzzF3uf4bbjRtWi1iaxzcUVRZjhE5CRUTDUxEWyKrAkKx6G2ny3Ssbj5P",
  "key16": "zuLmSzjb981WkZknUv5u2oDTHLTnLfnANAH231ysKkAaTiZrqZiH9UJMYcsvRnVuCDboGMcaRKDcxaLJzmhhZw3",
  "key17": "4LUujJcLpF2QBhxMQu8sDh2kHi4fvkeQS8BPMESTPyatWXd9yDVJYZEXy9sFfsVbehS5363oLiEXViUNZu2wJZ5r",
  "key18": "2mbfXdoqiiVuJ2uv8AviETgqS3RPAU8rFUypL5cPXobYviY3RcwL6zPDQkSbbE23vXKCJ1B1DLyRKWruMyiYqQZH",
  "key19": "PQjS4isM2TcSy6V8gMiQC7sS7cg9KHPtn9PHs5M7zvuiDcpyucC6g22x6Nm1gPu7564ru1A8y8wy5wk7tzN8Frm",
  "key20": "3aR3rA7op6iq6pi77nTQ13XzQVLg6ChnnnH9erVzLFkNQaodeuihiVSNYQWvFyErgRbwAKKEHFbLjcktZF8wUghA",
  "key21": "S7eq7fSDDsXL12yJGe2srwgx1NrESvbZnkfiero8emZzvH1A1GXgsxQnbpEgkPS6LJcU8vHyXo7oWoDTKD8bhsu",
  "key22": "kYWmb5eZnu1XrPw4SrAMiA9duonVtt1vYQvmk16jbpYE2mCDczmXnmkLrCuFWYikx16qHHjbpWrCQ6EtSzSVytG",
  "key23": "2wgw8f3mUJWFg88mr7QBGeYykmFLMjtzGUWnZnyuLJ65ZJFdARbJkYnvVDPkKXX4HrMmqJTkfP9q69HiC4e9T5zq",
  "key24": "4pkJusYVKL37xqRTJwdvhCd7ubhJfDnGh8UnMYuQMqmfF2vvYehyMwTxWvrtAC3DDWsaq48qpcyReAqWBGX2qacu",
  "key25": "2P6YsrimTDPQj3k4HiTYCDUn3rJZosyemQ6v4uCWg3C7cizoXPqXx62hJTshnYNhLb83ZbYW8QBoaZjGpmeqH2pS",
  "key26": "HiG7ZfUJ592FBwoifui57HZgTF9bVr2MjSZV4L5NNkt2a5UCeM1fkw95VqhwWD1dp5DbZsHejaZauV3sPL52fCV",
  "key27": "3ELDrpeF3ySyobFzRdToWZvkFSGQ6CG1r8aLvAfgAf9RapzQHXzsR9e16haPo6zGP78Gu1xHcqcYWenXdy8YUQsZ",
  "key28": "4mRoeWCuiHbNzkD5RrfBAvzfnhd9z66r2rEBQ98gL1jQPFJY2snzE8BKD4Pg7urDcobC1bmx8CioWx9dRVajAgtn",
  "key29": "hBAKzHWMAo3oMTyf9W4Ma99F5EkgQFExaDZ8a3KExwtwX8biJAaut4dsMCjJ9vHs8A2wd87ErLk89Z1a3F3u3Wr",
  "key30": "5vK8taTwf6fsd8HEbbRTsKb3N7rnA3LUTsPtQdC1bCKb2d8BSSnuujv7y3XzvJPXQUECNvimdbUxCmYfjmrbxp3e",
  "key31": "4NRktgsEmSfsJ3ALPDtB4ZaRAKkswkWgHzGWj9gopoczd31bCtai9hZK4nogAtAkkTpc47Cuwkdqyu8o6NbcsoR8",
  "key32": "4hjm5ZYrkG49PHWziEbPfTv4wpnpo4DqVuur5fTyAi634VyC8BKXtTx7yAKeVs2naVizdo2hy9WuMc6EGZ5nz97U",
  "key33": "5oimUjvkrKk6eN2tnqKfWyheDKfiBdJTQGiRAPr2bPVRWh1CWbUH9P95pFLx7PoXyzbrDKj1u6ob6V26qauEY4mS",
  "key34": "38adUXyWwv4AUkMtfhqbYKsNfKb43zxkbo6dZadw93Tzev2RwoEPZR1sCLTWUptpkF2YKqyVRqZfA8XWXovU4pBb",
  "key35": "5i6TLDYFuFXFNxsh1t2qRnCWS23g8WvcPUFR2KXb2cKBKFJK7ji1Zxd8zRRWLxMhuVmJYBp5E3B3VvKrLQw2sF1a",
  "key36": "3otSvQALSLtDqkraXdV1oTzqJgostCik7w6W3EPH5QTh8KZYoGiHH6o24cp644EmS6KbMiL72h1ANUPgfcNsD4vm",
  "key37": "NxsR2yqy6HtKwWUfwuN2jWb4XN6EYWmrSQ5pMfvJZ1oWpgUhtyiUXeyUGniNdcs6L7v44BC6duxFjpCuPgZgfdg",
  "key38": "JAY3yMnkG7t6dEvnCcgq9rJrhY3EuTieEAKWerEhRX5UTNMf2VYvVKs5eou6juHu8hFMWh9rhn6hYuSCpCazqxP",
  "key39": "3k7rPk8FS16YTFBZ79L9u5pzBn9fBZc665N1R2DEZv8sAX5m7FzewdCHxjb89BwkZKdbdyngGY7ndNj2JGq2ZqAA",
  "key40": "Bcwr7QhtnTXVNS9RPHZbEccZLtdXKVEFgJDGPVwC7gi8fWs4gbBPMgN3bhBoSQDvP2PHEFKh6w6AHskJN5EAZas",
  "key41": "1SyevHKuny7XR7Z8YexfqVqnYzy16LtrKbjMVwz8pBchQFkYyAaJGqGmp3YPkzMG6Qxqdye8np4wSDhun4qFET5",
  "key42": "31JEFCvd1wJjimZbNRF3Jq7tw6mPiQfFaDY4evKaLUyopCAsDdEMaJez3cpB5S1MxNXWpQbPtAq4uzAG6jLRYeJm",
  "key43": "dUnpbDTojW1cRREvcqDbutEgBi4qwTQ37ikA9vSP5ErgRk3zBekav5ppCp9mnZ3pkpsGg7xzCnS7jxC5Pgk639F",
  "key44": "2GuRqMRBmvvgFjF3aXAd5MsCy97ZDbHYKPw9yGqtC4jSS5vPKhaYAAZN62AsRxfcpWeS5kqACQhkEgBZMrBmA8f5",
  "key45": "4seNBJEzWyFsRoTJqjAgvYW6YWURaPcA7YuQG85EyFtagoHpKpsDsL5SFwXRxKhV6W6jyvV6QSqRCyfUnmjz2jVr",
  "key46": "2H6Lyxzb5DKLuZmLyruwj9EPsprf5zV8PyK5Fu38umqVRVsbioK97kJgh2L6H4ZYUUvEzXdHmh3JH6XhEoErfxag",
  "key47": "5j1r8QXWD3LzMdqdqCN2j5eEruEcbnxUVpgoqnUA8rVUKB7objm5BymgKzfnw8uDw5tbCesfNzN1EURDZs3cuQQ1"
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
