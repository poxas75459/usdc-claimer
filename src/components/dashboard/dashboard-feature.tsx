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
    "5Mu6GKimS4JKF3b2FCNUi5yDE1i2tUq1fTWtDG3fqLRQ3twCThGZ8o8fA9q2H7n3pi9kSEdnyaXrY8PjNJN1x5RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHda4gQ77KUCBZQNzWda9hXBLrgd75WKn7bBusHmYaTEqLz4qyhjC8W91TiKk2pVwC8kUqN1kyMUnM3xQzs6Ri3",
  "key1": "54TCYDJk1rufxh9eqasMGQpZhL9ycXcBNxV1GZwcnbD9yEPFiY6S1JoYAjpfRWq3PaS352F8XvEupFroSEAXsgyU",
  "key2": "3WFcfvfHHNjjsHX1RHQYJwCS7j6EAhcR2tb6V7ue7rjguoLhfJGc93jmheZfHB2WQPfdWVKVqzfy38HWQEFQbJPG",
  "key3": "5yDN9CMmcxk5UXbMW1X7eXdR4y3shYuyXrW9oHsBZbiXGYu2JCssAf5KNwm1i6CCHjrTKPaXvom4NUN8HZQxWo3e",
  "key4": "2Hx8P4fvt9DTW8nWfitJ2ym3dAJGKTH4UdaQYUMfUyqKm5YbhMDW6rhaofNVHcGF7yXAApPXRrmrU7VmNRR9Tx76",
  "key5": "5DtFyBdGAvw8s1oAKxGfvUXk9u4FgosKDxrJvSYh33WQ1PgFhLVGmb5c5dnUmkHNsZRvyRbmNT9GQtvywiUSLBYJ",
  "key6": "4V6Rfge8ZG5r9aZY7spKdywBboogQafPm6WFDSuRJ61tgyzZ6XTiSmbJ7FDuPq2z4YHY5FcnEeELpWq8rV3bzVaB",
  "key7": "24kExc1g7QXn2kDdKyVWM5wiYWHdN9WpT8kKHTr8tJSDCSX29UZVjCp66mW62ty99vef9NVhCo4Kd9if5PFUhHqD",
  "key8": "4ykokdRGmDvxKW8vtB6gYUCiPbbNXhQaSmipfz5a7CPF3yZMmBbKBRtvG2SdWSLZmTX1qv1J2kTKPfctwXtWxLEm",
  "key9": "zQxbTEAjknuELo1Wvicktwp3YPyG5Y2dUX81ysqZSthsafQYFbo2tQnk5sdRQh7KzWvyegohReAZiCYb2KhpfPw",
  "key10": "4CiHYxFt8pQACZgLdqoNM4PoWFHocYdmjf7AVLHNMCiUYWiaLNmQ5gyMcgtjda7QfxEWFzc1VoZHd9TFcyHRJtqX",
  "key11": "4QYSxFeVekcZhtwGCCo81d7xquJXninKM6hdW8pdTnRR84GoaXwaP6R71YybrNuwFw9nurborUzFtk3z3F1myYRj",
  "key12": "RFDGwJduZZui2c9t5YEFnJuwP88UM2mLUapJ4Pvdf46jk1qVR2PYiZvA5Jir7jD8KvDrKUnycD136WbjrK63r8a",
  "key13": "5hBpUHgbY77UqdMD8778gRVpeaPioe7MA2HH5xa2d1La7v5xCb2xeHup8WaQJoNe6GFaZxxayv3r8YvgdsDeNxNX",
  "key14": "5rR2UMNvMhLPwATN8qzWqynSLjEa2jEGwAFDw2R3N4rBxgcSDP2WcAhqUGzSJx16izVFCMsAYixogiRQoA1jnG3Z",
  "key15": "4uRn6PJrrpC7KJxZ6RyFdyTKRhhsJ5BPqRpKe2sTwybbcVQmWYRxEDGRq61GQhJzCFGurbpVXqoT7JXhvrGAZxZU",
  "key16": "3za4MaasGMgMAc1xiibfdVFU9aTFDnSubd9SHfq9QCqP2fGHnT9UMw6jmRMKchob9ApDFrFgvSPsCXNxKn9twXNp",
  "key17": "48H61NUzd1R2vtvGTFTXbcGzeMo4uUmGNt6vrMpEuJ1apzxetzqCEUC6jQD3JDWbbuo2UWaiQgDDyR9pMmKPsXGt",
  "key18": "4FMVnqrCQRCjJ3vH7ZqaavakifxrXEBSX1uVMRAGZDXky4UiR1jLfjMvFjsTUK3yNQLyzGzCCvVer8Ynd2g54qoL",
  "key19": "yjF66gY7LVA4kGn2wX8FUkTmgo6B7TMPdDBhX7J8yJ41XutUsqx2SC1K73NF6V82PqctXRSC1nE2x7pbdvcy1dk",
  "key20": "2VEy24i4EqKp6kqqnhyecTtcZMacab8jYMXe5j6tTAbLm2W8ncTtmKpJBXcATsD8jsAEYXs2T5dCdpnas5MbG8Uq",
  "key21": "o383PcUXUCfCWM1Aext4ZEsekJduJ9nSSFuTCxc6cQPPpDxCWgxihLdiBU2U2ShQGTR3H9qE88eWVGyStq4ok4g",
  "key22": "5f53raCZsGHXkWiJZQ18DXERSLJhHb5zwWix2x26SGMHXfDt9BBhDbvhvJLeWQiq6KHUxknsNRwWExkXJwmqoHY3",
  "key23": "4y3xbn3Bmg4JJKohhCntR9j8QcS33qhpjSjxQSJyvCXzpADsmbifKrfNySAQQBcikxy636zD9AJwHm5xXixZGf7M",
  "key24": "3hPVL9MvYEdWmHNpLiXXsme7GDRUNRfwuE84TFxZCsUiBByRSFvHZSjqTQ8LdVx7enveYqn42ewoJ3zdQsRSs7fJ",
  "key25": "kJPPrheKgjGp8GZW1YQWKxot1b6RxV1dgPQFhAtpoAybWQhA375UMVYB4DY3mUoMyMFqdN8qAA3hPMMGYhu3Rri",
  "key26": "4BXsECu53mkM4HqTPHzKHZ9kkyNehjJLGSM5idYpkKwuTRS3CgqZC1uRcag1rj4Joqdq9v69vdoPzNuwxramLMVA",
  "key27": "67FWmarcrYb4pt2KZZ4CfqhAmFQt5zeMifYitkywZshXaYJbDbZLtfyYmeaCgZ6ugDEVoKyCUfDxobdyqfYZcnWX",
  "key28": "5ZcSWdPthzCZtgtrjJV4dBs52sH7nKqRWbD4y4H1rFjSUF43VN2fvc7D2mTmukBMYkpepQrgwojQRctJJBJBUiHc"
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
