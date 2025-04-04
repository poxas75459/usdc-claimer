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
    "3wWqUbLvkC2xWujpozZ6Haf81wsQARYRB7xA8UwHR3QDK5KTqX8Sc9j1J72V6gnQpDca4Xn3HMnyTPjpyXDoWsYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBwFyCQNxbUsPzUB5p7oHHLFkpsuNbMnMrGGakonanFkBSg3bWBZxYarCn3jgwVvBuYuUkA2zd1JtmZ7SprEuVY",
  "key1": "5T67hFhobzNCjhi4id9GPZ7UbX5c3UZMBZao7K4iow5HMuQuegJ1G3Md9CmiQd2EfbyNyCdLFzn2jrotkxT8uvZL",
  "key2": "2hnbhKLj3ZZ8eRnpuxSNisZdmafqNvxLHtA73VDt5vdh8ASuGkhUeKpbcTeN79bu4inbsu5xR8NBBeiX43U8Befv",
  "key3": "2Lxw3HWU8cRnk2wy6NzTc6vgwRdqcTTUmzmt3DHovPhnSNkNqUxMgyRUHVa2NyTBw5ra7tGcRivuybakzMcC7HYi",
  "key4": "5PEKyUPKFsHHmBzAkaZDYp1aa5CP6pi7pGEKbRKzM1Zh3CZsj2Y7woUknEkECM4jDn7kyPqgncZeuzApP9Jkbj9i",
  "key5": "rRVF3m9KxB1Wg6CKC5AB1z8VKMh2NHeQPWBQ4HaKgK2aEkjgjSsu3D2LnoumrHhSYe2zQfgSZW5vvcfxTWC6kWD",
  "key6": "5u5fB4QNosGQuqSZmsiKQhNLdaf8UhbrQzfB1QbGVF8UWifpKUMc5XSCgfixb41jmUkuvPW8VfQogR3G3jZrQADm",
  "key7": "SWQhBprvmEhpkPB9HsBFW2NaoKGNq1Ld1SBpFvpYpEvtjwfB7KJ2QqgwjjjPoXdD8vFLx8TBqd4vsaFFVG94yiU",
  "key8": "3iP5z4o59qoiQFRa9jmNEDPcyf4YFEDpwrZbX4DHqSpJDEbLYGBJbnuBTQwwdqutXffAn7pcTsqFq9m6FEuHGgzc",
  "key9": "46iRqZFeMQ6wp7xcQAUmt3uvDCQXdALYEd2cBzxrDZD2PVN4srMp3YdUz4iuBRzSiSbPpTF1M2aMM65vjjw37WYN",
  "key10": "N4CjvkhxNLYfDVe9Rf8RVqWwPPWHiRd4tVaik95EcaWHibpSaF6zKMa6iJEHCUxv1PTGCCx5StFmmVEG6ayKCTa",
  "key11": "2aoSgrcCfprfEWUggSWsMYyAQrw9V9UZfUQmYe6Cn6jKcKw7NzpPViiUhkrPUSZBVzJmXDV5QGDXjGo3g6hC3Lgc",
  "key12": "5G6QEiTTHSVy8CuSp2PgoDsQ96zwjPwEuj8cKadEGUWrw5LcbKoCrQkqod9MFBaYF2va6ru3g4WsMXhYcgUxEugU",
  "key13": "3AycK6UKdSJLSudoLVnJXzyXzevYv1WpmY9F7MSYzcrhzLozy8pkxRffzDMy49ddvc8XzoszvhWCw1fcFHmzyvGA",
  "key14": "WyXQgt1QkiK7j9WaMWUXo4qT16SVNaUBhMTrn1zVEiMNDD4BrnGmzCd25Gj5L3Mgk3CwenFjYWVYu7VkAzWYfyo",
  "key15": "2N2Rq8v18vUEV24q3i6jEJo3z2uJJQ9tjLmkUcKZzVXJfdNmBwNCmxUzV91E5NT6YcWmszMk4EqBhtDZTBsBm4LQ",
  "key16": "3Bsm6QftMfHTREcJJ8NiRiY3Z3LbDTWxVPmXeKnenKKxgJ2uEQCChAMqc2kSWEbgefxw1dwcEFfJRYQDofhcMWqU",
  "key17": "5f8FRkZ2aQ2uuSu7XWqURwZgewzrQgvRQu5UhbaNY47KFDibgsr7FFQXx5qq677DgRadhWiibZCHMPgb4zgGUCZ5",
  "key18": "3Dy1buQUTwJeGkc5muJKuTZLJUJMLy3cEZPXDQjr4JW4h6AL6pznz5hF292bd9yRs8WFH3vUysUHUAbNiAq3Nf5H",
  "key19": "hJhPgVrfQSDq6TQFjhCMsH6Nd2jurcw94racR6XDQvh6zGneDy3Zb7WWWKCdBXerpXxC1XE3bE8HM2v43jwHNs7",
  "key20": "5p9PKjW3u1GM4A8FpZYGBckSpwXqaScn1KgQsZARumZdG1F8eCGPdXuGVkF6MrxcKyr7HLAYhP6E3LuchpZtWYMr",
  "key21": "3Euwf5mU2CB23x1RUhxQcxGMZNm8reAoVUm4pgFHrd1nJLmSN41kPPtNZKZiuDaJorSPgVm5dTGwcmXeZcWgwN39",
  "key22": "NVW76c3MxKAsmDzfrpVyjy7Tf3CJ6Hm1HUJzFdmk361PvtJpgWe7HgQdNnexTbJRiNXzEuV3q9PBkLP75kGNEqv",
  "key23": "2M5EYKd7FdraeNrqyzAMuHMSt7xgFSL3Mo9AbgoFjEmSTCWwDtpZYjLRdRVXQs53MRXDjnAfRigY5g6jDqC3fDaB",
  "key24": "2WPmxbnQbjjW8SptduFi9BmtEKxhhMnWZ4G6MjPczfGhJPionJkssASPXCBc89sLd1KEBUeNwTEZuNDMY7vsb57s",
  "key25": "2GaCrb5dzsspfGog8CspHEhyBLtx6bpyCKH4oji9X5HHeiXDFM1thoRtQ3vYPMMEiw4gehBMDp7yANpHdz5aS2Ve",
  "key26": "dzWseqn2kCoFmtvHhM9wL7Xf9vw5fwMgWsXQKnoom98coFdcpPW2u2wJCGnBGQZFiU93ymPPwyKCVHhc293znmU",
  "key27": "3L1fSEZe4MNPvRmUjHEsEuNET1UTNFEaDTszLLehQbWKSZUMkijtWhQbMhEKHuhw1RiWpk9rHcKimC2JcK4TdHip",
  "key28": "5b6qUyyR46CCH5iuwbTpxC7aaQgbipHCcgGpu2TcbAY2BVmouWnXVRqgwwMhy9kXhEYtJdstabGRD1epEVTSaYNz",
  "key29": "255SexzX28LZvMyCtYbdBLUjasfaRUmGXCj35pEr8RyLL8rHm4tTZVApTgtLWHrkhqXRK39ixEshLmP8etReDXZ4",
  "key30": "3VgakgkywWJfcieYL1V9PaC24QpUjeDYEvgi43Yx1XE9wAhVGF8TmuWWniboPH5XBUTVFSoUy5duSkDPyho81wZg",
  "key31": "3ptrK6o9KGCYKeiWoonsn4zPsv5K3grZ7rrX6KckvfcsrwDca8v1pez8heHFsZHNf3j4udLihLiU5CCTMG4QFJee",
  "key32": "3QdGmSfezTgAsvmimJifFNQb1H2aLcj3gzjXbTcKcEZ5L7WC7ZyLLYs8Ap9jXLeuQJSFa2yecbJA8oixo6ECYFAJ",
  "key33": "8GGMxHQYZsygZyJBqJvwnBw6bsBvmjbbhu2bUimPpL7yHN6Dkgt1ZijSg6HkzxaGN2Uddfe3vqAusoEu663P7Ve",
  "key34": "3psdpm6E4KAmYKidUrDrxjDPCPK3ppeUyQ2NdLY8V82GL8Kovjfefqn3zUwaYGLggNfkctqiYVu7NcreZQxLdJA6"
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
