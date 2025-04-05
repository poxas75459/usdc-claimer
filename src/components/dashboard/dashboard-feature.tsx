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
    "4TXXRv6cLpmSW4mGpem4kF4KSzExrHXd2ox2vxU8QX7f6ES5UC9ZAEVB2idbDGpBfphkvgcNCbf2157HgN2iNRey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjSTAHyYNijhWqZuzNiK8uYnzE5kc8293vXWJvoZcUnXn9auoaBaczDEfV2Km4BSWQDn5ykTindduQTxLsKfDQ8",
  "key1": "2XWk7jsm2kxFv19HmBsRAqHwAgAfJ48yxRamj7qn3ijq4qjci4C9T4n4fftZSe3TQQy2Rf5ny88VXTdQFHVAG4FQ",
  "key2": "4DV7sXm8GDdA4afS85QcEJKLq3rpoezunoSowLSVhyrM5ZnfC7WqpujiQ8VvE82LTE3uis97ajLbGRNiRa6uMz7R",
  "key3": "4k5yx5fUDjkaXT5yudnp14EJ8bJCb3rFGaeHvqPUGx2JpMBZJGMRPem1rt8urj4Gacrb3zUtomAm7ApBC3vNAF8c",
  "key4": "22xBDXthtcRQ8Wy4XqELRUPGwnSEZiHqcyUQrsBRfHoyWhdGnTAsDdxKbheF19ZYEKbB7zXLY8qxfjScwWAVLQ5v",
  "key5": "2XJw6sckRuqsbjKqVyoithibRMvPYxSWjNkzQ2tnTnUGa1fQASYkkjp4dGBYsBb7HgDbe3nf4bkoLgUTi1uCPN63",
  "key6": "65ePhpjMMBvbdMFjqcgbzY2ugGFTveyt7H1zWuUai146oQDkLD7ZnRucQvhqC2bnqEV9nBfuDiCxmMtQm9gKfXpd",
  "key7": "3kSSCToFFH2yEebWC1rnqkKJ2XVjSvQ43dLE5PFAKTfPpvArpRepGAZQ3NL4oRgvMVovRujdeKUayqTSNYMAizrS",
  "key8": "64r27yh929bjjcCbvkqJF2FoDZhCRDuui9JjvJs1uE3zhZqgBmHShcmWYg9VCQufVy65AY2rEZrXBtTQHztNyb6T",
  "key9": "4TK49k3fop8d6senLpRamzJAxraRgy9AjdbLHSdCMrvoQNpknB9yiwYG7UXHobJ7YLMwQk6zWsTv7yEooAeZZ7aQ",
  "key10": "2Pnsi5izLpJsfa6BusB6w6pQGwTeKjZyiCRgzPLSMBkz1USTzZTpGQpQiEnTTCsuZGvZ8VHJwWKM2AY4vXeCF9vM",
  "key11": "2VAmGJDonzfErzXAQCsKG9PS4SU5ewcfCsQQHKMcNy3pG8vjVb6JMJHsu6t25ZhCT2pzrnxT1SSmZHh5UqfE7yYA",
  "key12": "5WqHDCPqnmhwc328vfpJp8cCXpnAgZKudsZ9iRMhw5tnZPA4iwpJ9BDk4q5Lv8Mkhf3LTB8nrwRCNEu7BtsvuHbs",
  "key13": "41KwqNyx8QPvRfXf3fN8u5LQoAJvDj4crHPGVyPxmow7fdsfGdUNVieRatBseFwvssXgWLzyBJEWxxykeC8vHwGn",
  "key14": "byApTmMLvhvpEuxzXAEP8P9dNHBTuUFzh9ay2wHHWtsoM24jjbJHGbJWFZ1XmkR2vuzfRFBmt4JnXgkor9aCukN",
  "key15": "4WPTdUmN3gV312R87LPgG1Cqw1dmc9hVN3AMMWHTLGqcc347MLi2XRjVNpWvi2iPPQ71UeSUQaikSCcgtuMTGCTG",
  "key16": "57Ay9tketRmLJWDhKYM5i3RRJ7FQixXPyYLdTv5P9YizohWT7FugGFEa6VjPJXy7tinpHvu5dmJCuAMppA3GN7d7",
  "key17": "3hQWEydth9HBMs3mz9a9MjzkuVvYe6ccEyNBKu8LHdqggdHdZZPLwPFHv3b5cYjJyBfLt8Z6MhA4igxCfCY1yNLj",
  "key18": "5yVbLAgqF1neLdhsYDEqU7YpBpgwWEiTE8eU1NVFMVnK3Cp7HYvvh7wR8wjPRfByPzAE7YjLHdoSqduovYDuAFHs",
  "key19": "4UFbbvjq2BbJ66AcAJmmtcem2D6uZUo1t99HeDF8bCUfwYPbDdr7HpwWioBKX4J18qKyyuWjGPpE9HdFWBsBCByS",
  "key20": "21kvDj9hSjqTiRQcJk2AJXnYoCuzKTeBcydfwZ8YKdbQphHc6kGwpa5nYvpcgpG5tV6o6X4CZDYNXezs7uFMvq23",
  "key21": "2SYu1EpvFjDi9zNbx9NRCDS2h8SNec8jwiJvDh3PrzRD9RCH1qY4TbY7yxE6PsCqbo6YfVkipB1bgjWjarX7p1db",
  "key22": "3dZEws91WFKKdToFwmY1zraezwLJuYPCCmL9uMUWe44giJfS5sZrPTr3SMYAMJTkqfXnnHAbhmjPtyLq1aHpuGci",
  "key23": "3wN7FhqDbWQcn7WrFyLh3awTECF9FoHNJEmZny8sSezoBxRRNibQqtkWGquZcxi3LTGr84kEt6TAd5t5Q3MAGfnz",
  "key24": "DGkFcHUJkxM5SrHDyy3sdMyRaLGEqGBuZ57LcAzciwu1X8DE5jJu5qFfhtKnG8dK8x7PavgzRW5DNchqfC3ECeZ",
  "key25": "5iZrh4GYSoS2mkDdKNwxTNzuGjQqY5FUAbeV1vmhD8FnzLzZVt7fzrQ5Negf19DpEddbtuigWaXFEjn1STirpWc7",
  "key26": "51La1aKzew9EDEjDjHUWndP5XBhPiCtEqjRjDrhgU8mwRPgZEhssYuKPw5Yfq54y6xvRqMVLAeAti6sRpgEtaHVu",
  "key27": "5EfM2gPoWaQ6mifrapJHcQJUN2NcvCWC99768LSaKVSy32kb8e83w5NTjzsfDcJ23obbD6nZa4un8vEArdPGfpqS",
  "key28": "3exQ79BJdfMiWa7CVL6YR3Muubc8VWBGqahCELogmpohJ3wLQBTAQBGtUn8KD55XrLSaQCrHfto4Fxv6Jhgd2vN",
  "key29": "RkqynznMDnbrm3ThxSwc1PY7ggaqyp6tNiuuVG7tdvY4a5WLQE6MPVGSFDrrfeSUeNm25EFqsqWnsSn6NhYBfYC"
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
