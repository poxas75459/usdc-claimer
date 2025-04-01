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
    "5yYauyC3vA67fVTtbvXrAwyADu4BzGWvVXZfT2urneBdPPV2SwQSzrwdfkaaK5AnBxmF51jL2AUVdALTVViKQNU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNJTq1yNDHtB8kH3JFRQCucm6rGNtRRneXzDcSCUqmr14SHZDribQsbb3roezBzHM2JTk2TjBaJdTk1U97GDueC",
  "key1": "3u3Ap961cr5u7WBvKDG54Tg33BMD2fo9bcNqsDyKS8C6RSpPEcSZZaUaH4GrgNKLRngu3WssXBQy8BV2EdWfYsLK",
  "key2": "4RfG1qXp5jrod1CfjKeV28T6nrUTA8DpMowaugV1ySqMx8uPoRPg64kFjhM26CQp13ED71Wwq9QdXTw45ScYgfqe",
  "key3": "1r1ar9UKkGTwaUbuiE8B6UcQq4YGucGfFWsLZrvaFtukB72Hn5GCcavPiepowxeacposnGjakMCqriPiVxWLSxv",
  "key4": "5pGohFiTHAK23uLLq629X29tE2ZTTjJq4taBnXPUPasSfaBpHorXoigRAawYyKGy6by86WNesbbxH5FBnXjx4LQz",
  "key5": "52qRaQZuTEkeWb7PpP1D43HveKCdTZdA7sEhXwqS2og2uRRe2s7jZudd84PPAALNjP9rDh3Ztdyoacpwgwmhn5sa",
  "key6": "7WkK1avZZD3yYnraKkpWM93icv21hdAaT9LZRHUTDWaqxuxUzHX98nGqthaLQzmMDtohpfzvtLyGza74ZZUqQ59",
  "key7": "2htUgoz18bZf4y7JNDBxWW78pemQZbJgYyUYhdthdUjiuXd7iUdCbf8W12A9VAF6RAstALHAhSQTf1pbttwivK3i",
  "key8": "2cTnw6VZeDzqYMN6AkyfQqkKuHdbFanqiMRzLvkSTLFke12nksmgZwQSk1qPrwqQHJJk8nMhSkMkj1Wa1PBh3znD",
  "key9": "3e7fwzH2eWGndpnCXunT8BGSxSPPE4TmiYCHgorkf3uPSVnCtfBBFpfHv6fTooJjfikt8RYsmUWdjgknMy4zU2V6",
  "key10": "3JN6cSNUFkRBLWyaibrNiNrB649auBAHbDPKz3EJNP4puhXF7JETFbox3PPHW4VRmgBr8axqdJ2ajjPv3ZtGYnm",
  "key11": "3dpyB1QhktFnFV4CHzHUwFptzaHrmxkrFdsvs2kmtVgXHHQcdJTooZPVL3w4PddA4i8d3AWaPD9XuPgyFumeAFVS",
  "key12": "32Vic8FveiKxLNetG4dmErt62xggJfusTjasBFYvtRHjYquRgcHxqsCEC7V6D2btPrZ9ANaakxSu2FNwtJLM35y7",
  "key13": "SU6Y35YxajLbNtfeXEUSA4S6F9FkiRvZ8fjzL6UsUiZUkkPUUvavtYXWdGenYKB5LTe5MEmLqVgAT9NdYHQYUr9",
  "key14": "bTEdo2KiXGmRwcyEaZDWjCvWqiqNMNyRLPNvuWqkpVF1pLQxxuh22qoTJPRnRW8eyDSihEc8xJ5wYnwYG3CoEXr",
  "key15": "vyWLu9VR2vCEBXkzmCMQyPdqnuJBAcowFnsPH7V5Vm2Nq81SjQ2zPAAv1ugCWkE74m5fCMR6nRMVrRjzN8oh6hR",
  "key16": "29s3jtekXSTNdnVK97vyrN9V3bdF8k76ua1qUMgwpmz1ZPdinNZYgH8EFLqUxNCg7Uo7vDzEzjgbd2RQeZkN4sYg",
  "key17": "f6qVwbyJX8eA3VvLxWNjR4x6A5txVKnuo5oBAPfARPTVSpzM98FNBcGJtNNzBTouyS5MvyPkpHDdeobwjhz3AjX",
  "key18": "5mirKKomRenPghJZ65zFZbzaPTZAfAKs78fq9s9xzhrt6wGTmbuvqtioPg9tbM9PnTYoZwXsDLSHQ3dNHk9KfEXT",
  "key19": "3wjU5hHv7ou1BsxJcXVzKG6xc1XLQLBLzkwrmKTWRW5z3YkQ1DYiHc6EeukcNUHyabSno1EgUAE2JJm9Md9y9ket",
  "key20": "2FvhmWCJtfpbs6grigR3mpzQwBJ6r2AjwFhXVyhEXgnW1Vk2KbCUfsFfQGDz7nnAqzgyVADs2exYmYHziXsNE6gn",
  "key21": "xK712JYFBdhAn4vHBxgJEoMpVscuZniwdwKQfNHmu98fmEjDKCvoXtLyxH5M6kCNCPJLWXBFt52mSFy4XmVnhgk",
  "key22": "64ih4s8Srniewuk4NU9nNiMJZoMij7HDeo4UYVtnmPCnKbe1L5bLsUpgdSAAisKeyPm9EtZ8pvai5NXFJdoQZG2",
  "key23": "4qm1L3uvee9VyCn5KyefdJ3VaWSZE85osBE2H8jGzp6TKiGxbvvuMfmYr4dgjTQiPnBmYio8369R4dA4g8nCyzPp",
  "key24": "363BPN1LeoBXwNysQw73tPU281i2yeKUQpKLvz9fU7LAJSawND3F4Lvzr9WtgK5mQdTJpRpoezwFSFx9KQA8RfG2",
  "key25": "35gT7Cfx3VAW9pnAU9ZHX151h2r38xANHenLnRYwAoN4tZXbw8oRV7nrJpRLX2NnKTVioRBrf5bBQhavBHTWtSNm",
  "key26": "4ZiF8uWLm2yDTCBDbA8XSYMEnSQzpQKvwLxg37fC1DqwMssD6sc828hxnFsSQW4VYLxoyGt8XBGB7i8L3P6MuPJ8",
  "key27": "4YFMHa6dRxrNrbJ4dkXzi3cbLXqmpob5oVLmiFf7PFXmU4xxjQpnGvKBF6B63L9KDQjZkXzyY9eiUGtkgHD9dAbh",
  "key28": "293nY3YhmA2t45S1i3ozRSgT7oz4wdD87VxmoUyMuUNzTmznQrzcbSGQHpECowZm2rPPozfQAL9tpxnwxUcZGByf",
  "key29": "4ZdTp83VAmoMKou8VC7pRUQh6tJ41u3yYFQQvN8AtYm27JBydoe4tpgv1kYem96HuSLjEGuxs46miSuDVniinQod",
  "key30": "4TExQfNvEYHr8i9R17QnMwc1NQJjRr6ncMdrEJ7R6UZKWzF7TgxUVgUdbP1pvZePeaPZVkCBU6yL3QC9epFV34Bt",
  "key31": "5LbfSNjFLgtLMBh9KLKzQ3JAfanhxK73SNs1i6zebJwd1P3n63YJU9mCMyzE9JMrWkoanLNv3DanvStXv3nkpjpi",
  "key32": "4qVKmD4rBitqV54rXPfczhrZRqVNWcs26xcAzDgG2bs6z1UN7fkiWtAPeHkxBoTQurDsSCQrzyQJj9LR7fWXTVFp",
  "key33": "3PrUjGacsUGAwV19o7VnxsD8tp9ASgdCabd2kCwyuGXuUcqq3iup9yhwNTZfo4pqNXNvEHPUP8nzE5yUdv9EaqUb",
  "key34": "46pc48yeCdMP8cQXgh59ust2rakdCigMx6UTjYymoZi8Dqe4AaMeiYXigDAEcGYrfR428TTDwcEVX8CcQVyNkQrA",
  "key35": "RsGf9YHhjRPEtAkwx7PZ1Q6xDX5Sj3cvdMzMRwGo128yUuCtZ98FvPBd9R61d8d3rp1gTREz479Xysp6tzaLmqu"
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
