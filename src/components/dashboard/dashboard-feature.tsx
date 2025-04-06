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
    "5zorewLXuFqGVYNUV6YsTncnjp4Gks5RBwowpXs3PMYC5EZoRdefqSgEdMMxweqkdXmC2wqDnAWhonkBHnH36scf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVoVm6d6Zu4xHhgdrvvY3gaSNF4nbfAySZUWi2anBRRLSmg5nSypyknjcY7S2dpVoeAVLA8nHzKy5YiZNyKQorT",
  "key1": "jEwfe9LtEr13UHiSYRngPumf3hd6wCYoBEkZKadvFpJoEmErfhaTLEDoqthjDsDeVYTUkgL3Pd2aemFVY3LnrGa",
  "key2": "5t8QFpHsGar2pEKXoLyh1Aqefktz7qabRvDrjt2q5X6RBENJnwFXWUv89CPVG9WYKh6nWHugTVtiynVamZweB6No",
  "key3": "2C7UstTjPvyb29rKeL15VA43mwZqxUTdd3MBYC8ZknKomjGj4nFsxxKorgpgsXZTA1KA8BEdJuXCVgnXTuAvM42T",
  "key4": "4T3WFyfiHTbMdYVjk7vtwm3QxVehrQu71oLDnPRQmyvduq7VTLdH52PxuVo9qPmZkjqpcrXp48WtfJQydTR4jAmy",
  "key5": "4rY6cePSb3zQvdAwaocjefTVLZYWjHbmzr7ouqVQjG4mbgkNWbPx2kN6MdRKtwDHnZdo525mwSZedkCBTSdpeHVc",
  "key6": "ikfe2838587iD3cxFdzRxbDG3ayUHKsC87EBrtLiNaqm8fUvsUeoYpyTaUTAGRcwxVQZTER5gSNKi7f48JrXQqi",
  "key7": "3nVZHtvSkB7SZGZaG3ipW3QDGBhSNN8n2bUoVdxmfUpxJFeDsFqoXW6oDwYijDn48Fy2rAUXT1HkWanFhTpkRQb9",
  "key8": "2Lt9XGY8bzbSWBn1Jv5SMpSHeHzjxmspRKDz6MZaoXGgHx8LJZUEJKXARYwR8huMrCdam6wS6ukKxVXhPzteMoXf",
  "key9": "5ChsTF1exFZSBCKPncD7ne9gkpWvV4qAyXmvmkVayNAnpeYm8rgsEGyE1nude6XDmwjscKuxSgrHVvKzfsLtpjhf",
  "key10": "745t6wExq7qsRiKFp85pnmd5EAA7fM4sjGn7JBnvCd8YpBVi3LBiS9iid2KcCojpBj5a9fKQtabsFu7mYthmPE4",
  "key11": "3saHM9TMpmmTVodp1dx2TYZvSpCoGmtGuRjfFUHN2uur7f7s6TTYncANYBkEjrTZv1q46sHB4acwGKpxchyvGhcH",
  "key12": "3LhkFETVtZEeWCeKwGy4KGB8nVTaend1e2pfmQocZcc4kRCCcUTBTjLPN8UVPsgjNeGYiwZD4uzZkXSxf9yArtRv",
  "key13": "N3rfMLQer6ZsrYEMFnpNxDETQZzky9cqFGkNFFWNqthgWLfLkKqfEh9KEL8ujC9qt8GEXDMsyaptMWRaSEA6XbB",
  "key14": "5ZKEy4w9sDdqgeQfd8zkuLCtL8q1nzpbANwRLN13dFajFFjjVkb4KEjZrt5uxLmqgkseGM2ZXNtf6PZ2bbpNHeeu",
  "key15": "55znUYu2KwzDbCZocDMPKBfEArTYuoPgiHEQ4CNLFvzjbbwzL49tcQF3bxCUMLE5aoKtqfG66SwU4vVBp7QBTNEP",
  "key16": "2Yqv3sMyEspy6Zevce9oN4UXcDKGug8H6Pfc852295EmV7mdwyXgbie3YRAJ2XxPxtXCP5yAAU3FT8h3t5jzxL4R",
  "key17": "2bt5h5dypy6Ax9sXXtjm4xLghDy6pzQbzk8Z4Sda5cy5HSya52S3csxmwU3NNZfzQZX2YuPAgBVvramUefaQF4UQ",
  "key18": "4bWzZKHQTYAKdtxtcwkbyqV46J1Tquyt3cqeYgs8aE6Gi4kzV17LEozHHGXjKSn1QqoPYEbErfzz2SPRQKfh4GMw",
  "key19": "22DTeh712MNygihkLHF7rKBhPgo6sriK5QZDrq4bqPDPcV6EH3cSyScfhm4Ar7rb3AJMWKhKX7YyjxNVNvHUqjPr",
  "key20": "5BXf7HJt1WPjhEWpaBR2B3B4tcWCTDWMxgs5JiN83cve5RibfuF1xQ6cbx7knr87sU6YfqY7ksWCXr7TfTcPdG9X",
  "key21": "9j4VQdM5GAjQz92dxERCwM77xgb9EHwSREJQREHQd6ettwS2JNDmtchwXF3Jv2vuoBcJ8eVuvQt8pgZmU5Q8KPF",
  "key22": "4yh8tkMGNig1N9AwMjbH6s8kX6zULuPD4QNWbLvAsyNByjTSNYSfTWYSCoXvSaGCRonCHwLp7MzvRWUC9ELfLNN5",
  "key23": "2Q4ePD7pCB4Hz1FEDZ5VEwseMFA9F8Cms2jHxLZkPTBr8qA4mkBHFbJFkTr7Jnwg4ziXFGAaZMSUpCHHPdKKmZBq",
  "key24": "5PQ3iEJyVagZdoEZJXFNoyM5EroPpPJykHvZqscVF2jVVUgZt1zi8xwYT6mDJLMbFTpmTLGjYKRp6ia229VgKVX6",
  "key25": "35sDmPQp8XJeGazMpzwnt4jQUWMMqhSSSmqeddryPy6Uggn4U2G11XtjJzTYsXLrjpgtU4X4EjmvorXDb7pgbeFR",
  "key26": "3xhMNwixm4A9XLVqpz4gqbytSBBxs7uorNwk98xSgkkwAfeSyZQdPf7wx9KcBQcqCifh1Nnwgf4mWg2NTqTcJQid",
  "key27": "2fcWfS8fiWz9kANf9ErCcqBbAGgyy1Wh3oisMBC4AY9tmEuEvAeSd8ukGF9qs36FkHHLC5AUFDA1mqUUNhabuXUd",
  "key28": "4bEtv9GPEcx3pUXf56WvcYafDc2cJ6yLKCsPjVnKXmArP2jTW4YXuAhcdMETe7KYy82ARv5yNQuLnz2apBjySn26",
  "key29": "5XG8an2t7MoHVSn56qCjqkLy1WqZsMrFd7W3Drfof6Niz9MCuPu8XooYLWvUgknnLGSJv2ACB1Pjd7RNwzioJ7zo",
  "key30": "3DvZPsQ3ovpv1iy2C5c1C7ZKd6PL2eDwoTzbQYCyh1DRRJ6AGKY9xKoiQpSLAxq2JvxZZM5iT7SJhcXado8tKyEH",
  "key31": "3JfqPXzAPaMXw4ZiMGV56jtAQ3pgyiaw9jMqVGULausQoJUv4cBzmsKb7mVGboyJu96mpuZamTzcp7tgv2CEKUT",
  "key32": "599m7QNUKPjFirdMvWs5MPYGn7h66V5o5znQ9qvJ8xwaonEEFkg6C8ETnMVPpVzJGnXiKPcewoXChTgkmfLnf7ej",
  "key33": "3kUFX6QXXVQDyJexUhKu3cJo6Q6GmNdfBvnp2PGh8D6TdYA4hBU9cUG7QGdhdPP54vUSDVLaaeH1YjNw1Q2piunM"
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
