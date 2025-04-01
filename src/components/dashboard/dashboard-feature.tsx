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
    "2NUNPkqgmGXdr29TuCrHHMe5Z6oQcC3bVTWFqpnQUxJMSawXxD7k38qDGp7t8FSw16Vk582X1PPyBeuYHrHiAiF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ggdp67bnn75QL6ccZw3MREXn9kuvHeeiBanjfp2XtgKzxiLnpwfGAryff6MuDFqZ64VCcyipkcAtNrCQitw2P7n",
  "key1": "23EgftBc79odHqNvEqE1EJDQHYQ4RodLWYR5zfi4snVen55HLFbP44RiiFcQwpodsHY1uQhryzrVgx8dUcU4SQSu",
  "key2": "3NqzF7v5mcJ9VvrJPkvUMUWEB3H1hpgCDg7atoYfWKwRng9srS7FnzgvcR75uJhbz5gM137wAsdtDN9Ev5Y2moyi",
  "key3": "2eKemxqE9u2nj8hDM1XPPd4hZNJJdPyiKPXPFQrvhQSwPDoW2opHBThhtXyzCsg3JMcRHEJbaGZvD6MdafcwezxU",
  "key4": "4ZL4RHiYmSatTQADjH1WtMXEoJKjiQhAjwVct7rKAErbioutAG3e3HJi8X7ABaB3Jd17YUDaGtpX58f7EKUefG4K",
  "key5": "gua5SpSZYb8snP6jQQFUnEUz2eSVGiNPRC6xGMg2hDgufpsGTRBE7qWqgzXwJx37iZwVqUsrjDBt6vu39fntZjU",
  "key6": "4mT7wtTDStYL8xZgw4NNManwRchczF4bRrxyf1t2v1W8gFKbJbCWGxmMDEErqykMWgbehLp3HBAGvDjhmJuhr9ra",
  "key7": "VxjEfbnjhZbCQM6jM4apmvGEQ71WcxykhPcwLErvLYz6HHuxJvFtfx8JPFGrs5r2uEPNoZW9Ya7wnuBisxu8e7K",
  "key8": "4kMwFKRHBadHRQattdrPp9hKWvg67VGAg8YsiHEJnTRv3HZos2zkHm5uKBvUX1g3CyHLFAJfGknCQ9QnuzFZa3vN",
  "key9": "2RyA5sUvjVCec8WQ2sWvJzuzG5p7W1VSAcktBAeXNU1Hav712q41hkTbavo7cYGMTRvNhx3AZZ4mq7XiaUBAuzLV",
  "key10": "4Nfd8GhJWwQTRHJDJmya29WVAw4Z28huvcT2sGAq8c2Chn8FNzjBno8amEqUTjtZAu4iu6jhfExaZV6BcoTUPeba",
  "key11": "4rkXFdpcSVSbMzkn5Mm9wiGPgEEtXDscrZFsCU9uH4Q6uzEbRHX9BJdsn37tDqUKDmrAnMnEpndd4SBY13Q2aeXd",
  "key12": "5jMmfaBNai4fmaAq34VhqPPEURYPLyjsuB7fyvyFBsrvwh7uvfJtUGt52DfKZnJmjgqsMLHiprSRWi83hd86F4kB",
  "key13": "vpbzG9G59FutZHBihgB9FcjqoD5ERn4rQZV45BAy3QF5W1zrWQmzbm89EQF1FcurP9MEubEST21xe4b5Kp7pnbE",
  "key14": "244hG79aU7WG6fdWZfT7159v9YGegBN4GC3H8EhBgN88RsCi3Z82WTbQqMPuVYKgzMbw2zFbiPcovVLZ8KzdTvZG",
  "key15": "5UANdn8i9NNRLbbkVR2ECaM93AbfFypFJS1X8a2e9yQMMRmSx3MtSXXUJZ5CfeX7LSiZcctbCwjnySDnSjR9nB7G",
  "key16": "2HRy8uHciDTmeH4chofCP5nVxeW6iVWhXiMMpFwjowrhWVgmm4RRDqaRYbRXoyYZ22Frfzh2NpujmeYM1eH7VDcP",
  "key17": "5oAoc7F7umB6946KcMmctjcoPZMLjo8WhgtZkoPuJ7uVne4wwyATRNvaQgka1YeW3ynPDYF75ZKyB4iWwwhmwx1f",
  "key18": "4nGvL2JJhHzys3yZHzGov84cmjAPosra66mnt9e8tFSafRDRMKsjtEcL44xGjDAwxgoJq5SvZer3ZZkEn2n88sRS",
  "key19": "4YBYMRD2NxDTJsb9PZVkaQRKkBZFgCVGJV1WhKG7drGDP6eXJc9CC4SfRqimgFjRdScwSm9rX5pkHA82mHjVxVEm",
  "key20": "3XB5an3pDkk4gE4a4SWGNNG3jJxtcxU2BgT8ifQ65k4Sbvez8Qn9prt3Eq7q2BCCYJKicZsdVi3B9P37d6tigmpJ",
  "key21": "5Q12fEsRcmvD4cxUxuTj4zxCEwUdcZ7omquLpVR3N3qm64oPgGbi6MG8PeafvBAjtP99te5nns6UkN2MVUDw9SX8",
  "key22": "kt9tBpZXB4qWTfYKZrBr3F2e2bEMacTTYt3BNUvmYQChT5hCoeGerirei5P4xrSaMizUV8oGsKM2Ad65UhcXfru",
  "key23": "4cy4XF6to9d2SwvFqLdmnT33BfsnMbwfMEbT9ZMRcf6pFnafEijf9tUNUVBm4ZE2E5XpgiKTRR8UqLXaGcCLiiKY",
  "key24": "5Qgv9Z8jYuEbCsQsTTRXdBvNH2VeRiziqLreHXt9ZbRcaFBTQovit9V4XMNG6jzu2tKXkErk8NvSZDu1empJnvFi",
  "key25": "3ou1tovxX4DpyEvJYovFoxoQuBUwh7jyuXwxh4hg491uh3B3yqqaXCHmvrdFtRVUhx1VE7TzYnTgdBSUcZzaagva",
  "key26": "3h3SZT7ycbw2TPT7DN8k7AbicKdscMabYsUQE6YRvNmdmn2g6EJY2Y7qcjCdsY7t6UBe7rqXvs9HbET7aNTZsKKQ",
  "key27": "2oXSYbSAa1WN72NpjmKnzZnuRJ8Taj2c2wCWe6L37CVomN87pX8puLyYYgB5JSWwYxnAHQU6VUYXonnYp3qP7wrh",
  "key28": "24Fjr93hENEfUqtzgcxqBgdRBynvXddfCndhDyYoWbs675nz8QHtmNUZJUwLZo5qrmgbk8dSoKMEvbvMSct33Equ",
  "key29": "4HhZJKitDzwrj195uMmxbJdqUuHf531nXyp5ij6xKbMhDaUCHdRyqUudXsWMu4tp7qj1iNaxRVo5NTbnQML3152X"
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
