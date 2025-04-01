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
    "5f6UM1rksCD5KJayBrhAMWXHsB9uZfhY55TNAe8e8n6Y6PRiCEBjGaZBJ9j95LHosUQ8CWFFqJR7CWisHVcpspPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YBMsHEp2kTY8T3zZUrdqnRQJpzYoYuYkArBUPbvfpNAAC4x6wRXa76miHPLjX1ktfHNL51ZA5s2MoGU19QSxf5a",
  "key1": "W3NaW9C4kKmXSg95umjK2P3zm8xgyuJHNZEzEXtz78wKh1zSf1gtSCcx6gDaWurPCRgMGhdCzvTWT6fKHLavzZx",
  "key2": "2grzcvTLbHLXLq3icsuxagg9g7aR6oqGLSoa95Dq1uVUNQj4n5gT2zqmEiYHQBwXdte1JrZicbpztZtaDRXMNJob",
  "key3": "3ovVBdgXDmH9GHsDfoUvoSvgTj1PijohaqWm8r8ezVQXbmj11J8ais9jVkttqPrRfxgDVrkhwthmXht74UFJRgWC",
  "key4": "2mLLMLM6pQU2zjNB24nPXJfpwF7zBcurAxYjs9hUsitYRpcMHC7mAAzhqLbHCEFXtmreDLC8DDA2tnSiTfedpZMz",
  "key5": "3Jdv6FrXnDLsPB2r8UN6QTwfFDjhQfAgqpwbuq8DxLHC5sHWUPLhegd6MKtYsyFu8LVgjvj5oWxtRiqr14hZkqvt",
  "key6": "5r7hYJTXn2HRDvjeDUHZSTv6xw5SFZVmADThfSFtZLnz1cnUg5c4cebQDqqKJKNKGo2SUEtE3qiGSApJQ8GUPvNU",
  "key7": "5mFbqUT38kVibkz2Q1SFnjRJzgx1k1AogZMg4Kcf9AFLjwomhqd9BmaP6Bv47kiJ9rMsVkk2wP4aC9ZMQL5sfMWq",
  "key8": "5x5BSXb9NB4mr3fSdPnsdqFLzwjPS9ztPFAiQAFs2MXHYBWqUB182duMva1XcD4yBdxL7q9eYFsorkxCupvXkDu7",
  "key9": "2bGkxqVp2pZzNH4kz1gwUEkBYAwgiF4m5uPtKhvP8VoCRhaHbQ6dNU4tpkCmH1KUt7v5rJr6pg19RWXsmKyh7vkh",
  "key10": "5z1VjwYfxBffzzugdvKrhkMhqTuW1FPwWsdRZ1rRZZVPEpcnC5HEQYzristeCFhrDryE4Fg2TnspeBYdwoQdgpv7",
  "key11": "4xHP9jAt7XeFZnvCWKT75bB9gipeBEBr8wPqBh9yEyutsavTXB9QkvMLeutv97imao6FEuMM5SN8CKy37VERWA3q",
  "key12": "5Ut6BMGevRVgf4FFRYZ7yV16XNdKibcTg1ig7cyzRpqi8q7xr5HvN1v6VTw3tcmm8zePVnkGkmfem3hQ3j4SPWC5",
  "key13": "3puK5t93ZmDWNmuZMj2gFCgQR4KL2JQbEM77T3RVkFkCT5f6PGoAjcKr15ffh3QpotPgwKCDnPsQitu4LKnJHE5D",
  "key14": "4DVGuWbzjXKYhpbZxYX1nt9gwsgH4t3xyAkzKHs4iDR8574qNagTwxZiKTKuosnJk8NLkiizdCob6WhbRYu6YAJe",
  "key15": "5qrhNc4FbzJFfq5cVZasf1SWiBcAW8D37eW86qeevxacRdaox5UfTwtd5FZHP2vg8FcD8kMszNTrfwN73RQfpADL",
  "key16": "5gGuJyxpsvaB91sfxWHXCg29hDfwimbDz7EHBi2e2NCw4LL1RzbHxNH6ikhGC66LrswGAYeMa2C2GDh9TdziuMRL",
  "key17": "3BnHh7eDhiY6JWAwFEnnpfF7eNhWPqnP39KpTZE9VpfmE7Ak3FVbJxcDYniVkVEgGBJZqxUQHyFbhsKYtizwkPPm",
  "key18": "5svm1dZvQGYHQjjWpPFoQf5o32GyPWespPqrvXaoMtY7oVXhcBWcC69x2TMenDfpy48BVbxHdeY4UAqM39WVJJiq",
  "key19": "24fwNwqvTefKGwhjeBghAdxwT7nhHSCWYnwaQqJD77yu8zgWHJnTiqJmS4tRaw8pQ4WQpmuKmFR5fWX1eeawSXRU",
  "key20": "5J2T53TrYE78kRF2Q8motiAFYWNAEzobrpfnT8wLSdEp9F1pkDfP3MuJ1ZjPRTHtmvN2aodAjDnbF9ASaoNPUoAC",
  "key21": "3QH6e9xpBnvZz93q2scqWwMkgh1v2KpgKXkmGgTtxwAUrUzFVZ2xWZkZWQ9sQV3ALMVTgCufPYJZPoFxPboW7unu",
  "key22": "5QjCGWki1YqkHDS4TttovGiUoUW3FsbxUFZ5ZrZrXUfXf4eWHuJZWpbjyz18zcVBfUGwcnmz8YYFccDmprn3RD8F",
  "key23": "2yJfmVUrb1d1m6r6wh46Wg1mXwkLTzAcgdpJd8hxpQijk3zrRa3ctojia4Vhs8iUAaS3pCobXAMypjrsBvsYKiW1",
  "key24": "2pmDuYKyU4dKn5JqGeUNnJYmgYjups8DVpvyYdVUCF9h3gRHYfqocAzKx9mDeY7XSZS4dUq6o2NF6zV7WnfqrasC",
  "key25": "3Ervk4c4boAfoVwJhtw6gPauEx59QhD97Q2en1sojf4DpHQN1VUBZ6VYeDUncdyHLLqH7ZDUGFLFFSLqMc5bbFqG",
  "key26": "2JsxKELTb5duWUZqXW8nPm8VR2B6FtD36UxJQmczwzVBxEQmYifzjoByLBRRTDHkJq9oXHXegGRBXkUNiCo1WXMM",
  "key27": "5TQW9QLVP34ogikLC4441A2LZLSLEEPZGscZFBsXfubtryizCrWC6ejj81VvymcZt7kyE7Y5VZ2dxXY7FdLfjHbQ",
  "key28": "4A1J73mEdmQyJdsnFt5XYPMudM612JTKbwcoAFciMQ89q7gDFKqFqFXbHYtiL2cpbvZjpq4gxmXBks3H19LiQ417",
  "key29": "66LwKrQhEaa1cjCtFJDEyLWHER99miFPM4ENoV2hfYFyFPvgb7FTTQieiuo91ENFFS7LN2N9iautVEdW1qXszXr6"
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
