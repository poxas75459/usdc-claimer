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
    "GFKghzeq5LP99eF5dCxgfaVxbXEvEkna5Pfc5VMAepzJhgzKuAoqbqR5EzHXMTkFMRtwswPWBjBoPfhxvhxhDSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gW13URYrYXThRYxSSs4gARQSeE1pVDtQqSwDv66rc55ktX94kxWsjqzzEwaxUHdN4nGSaFwUayA3X7FKHdhpcNF",
  "key1": "8xU3ZgZKXsknSDJAa2m8vb2viAdGuUZPnJc84nx5XcHizhnQ4M7YpMs9Eg3sXEVwo8E7dgiHWWvVb7Ak2MyUqYP",
  "key2": "bq4ScuT9FKK4rfw4eseusDaQendeq9fzC1611jeZ18iTdWDy6GL2Hk8UNuLm7TrhqSbzQcohwitkcP4ab1EMqZp",
  "key3": "RF95zQ3oDXad4mEeTL13Sd6iqzrJ5bDj45gqyrUEs68Pa7WrB4HpwZcLNHkX7MJ4RvVhS8KVkyXVG3Wuo3D4sbF",
  "key4": "3kJuD9XS81SFDsL44H8avjcrHaSPRNLFM1fJauj66EmR2bWiYxHUKDLfNvQUUx2XmUKgFyFSSvuiQXHFh8YqPUdV",
  "key5": "2mTwHR97YQAe6RSXun5zbfpP39faAAZYiURZb8S8EnTFS8SJUyrVyJ9Q54CHLJVriSmQAoP4nDzSPwcqnkthWWhE",
  "key6": "2LQqws2ZJgNRC7nouSTarkp7VWUXguTrW12bNLB9Kp21tU41YPK5nMcWeWwY75GZsJKhXquQvM4bgthXeLNLcXQ7",
  "key7": "35wg4bvqoxYxB3f4rbtTx9ghLbkyhpjAizFk4VVpBcai9Ztvp665irjJMEsP9HWV2KFKwWTdtaTUEL9Qzs47TNev",
  "key8": "3xocoUdyjCQx37vGmvY1saA68DYpMQ5StmeD7d78Jh53gT85iVnNWv7EX2WC8GTED7q36senMur2KhmDyRjPBav7",
  "key9": "zyMSmzwqMT1oLQWhTB6rtuEPpAyMRNREBU2aaFt6nQ5U6Q2Uu57MUiUq8aATxS3mH7teRodYGhXv9eDnNfWzrVU",
  "key10": "4QsqczV8RmXvymK2wNUF6GU7UnnCuQ1JATyF8FPqrycanq3MzYa7BNrWTpmfm3egmKDJJmYUpWWyR5NK4nUmpXSZ",
  "key11": "2pLkBeaHk4SubCDSUJEiWg1rgTfZbCnZ7U3dVBSV6JTFWwJmwwePCvaLh733HHufeLMfX9EatUyWwbHiTjH9WVm2",
  "key12": "UKmzh499MdbYBwtH6GcUBw65whQvoBMXJLoNUi78At7b47BKk5JnXRFZjeSeqTHsPi8VzrX8cbbG5gh3rQgeWzE",
  "key13": "32qqYErfBg7UHrsKub3wXZuNBFHE7AEqXGJZDa848xZwTmKtsePXhsaakmpvw7P37cLW61SvSnvA5z2pTA8uiNEP",
  "key14": "2WST4nm5f5q6n5zeQjdtbhvUepqaJ9kSMFgHuMr6bcEXuwpqj6p8PD6trPnTKTcN2YmyjBx6eHb6KDXNpKzwTvKr",
  "key15": "4P6U4oucm4GwqkBCNaQoMxiCjPrzTTwcz4VNE993KPD4P9k85p8uHShxQVCHktdGei4fNaFj2zCqkfVi4yLC8VvJ",
  "key16": "468NC8CpXWenWXyFQrv9TMJLqMPQefh5U8EBaKTDR8t3wWCJUG47WZSj9dLYAoy93PhVa8hqCEGWeK5MPL9KcxbS",
  "key17": "5yPcNvBnqwN7a4L2akev5CMpHsxXSe5js6EgBdNa1bZi3LXNVBzVoyMg3gtebtfgsFVzCHpCZtAWjpfW6me6BkZF",
  "key18": "xdXbyPUEEdZXVYYcinpAMQizhiPohHvjspKnhrVcdVtamhBCfmM2s6DZN8XApToJ9oPLGzsok4L9KYzKD4bqfhx",
  "key19": "2vNWbzKWy1A93szPnAfNCH34igiMtENxStkHPAkUaQ2cAZYnPg73TG33vc4ZmYKfGnjs2KiGrXRPEhXENRGRDv26",
  "key20": "mKnFRARZ4HDLgjKbQrqoLeGmkonX31vuQxHq2UhGa9Z9kcWLLLMhDqBqk9632AcFrPwjjFJeQ2NrWYUbboHWTfe",
  "key21": "3zMUdbyM9FBbjPMMLc5DB8PBbQPg44cBFgjvWKnC3NXYe6rMKT4VX2GS35Emr9DmLWxyr8wH2jnKfq7U9RGTkDs",
  "key22": "4cieR4EaVygg2hE3HvYTBzJY9NNZSqjBeMCuGLpvk1w2hWZJKV1w2RFaDYWshthDMcQsdAxfmC8cBUGGFwymqW1a",
  "key23": "kQXWLHo3okS9FCpxY17sriuziQo1RVoWTP9ZWBFsPa657RPkDmjP7v74skjs3iR1Vj1LBYpBKfxB9vW2xBpy8Le",
  "key24": "orbpgMdvFnQwcS3N7KsoVNSKr9rvbrnKqHPYCRHftR6vvM93Abxu2fw4Y6NfUk65L19R5Sg5PEXUKxNqXDFSqZ7",
  "key25": "44EjhGjmCxqF6NrbGv8U8DEWnURLm33o7Z34B4TdtKGB8W4sFgowLqeXiHHXR7tgac5R57dqs7TVcgzj3hBrwAaM",
  "key26": "52eyWAPSzgnixoR9CWiaWnNXXS36Zfr9v8nv57yPuJNcPfFV47xf8PbuEqk8BkEPLBFenpkjWytk5xCvxpWppawu",
  "key27": "4pd1zAZhYAHYPyVJMbX5QUHyNxk5VcARA46T9d1ouDGM83sYtg8zSu8GkUK7gE3U2oz5RdtAkze3AybpkNyRCxXk",
  "key28": "5aWwi8vAZq31k3df7iLnd4JQFeGECjpjbpsAiaMWskmzs2UiNNHEFi3qSXpqVvATQHFwfzRCihqqUThBsfgPPNar",
  "key29": "2jmWENS4xChUGkokb2DLsjfZjSNgiFapcysB3jLNZvTJxZsmaKynPTCXfH3dUscnBhJkL6De5XFwqubNCQdQF8u2",
  "key30": "2F6y7PHCHaa4cLhwpKTGeSLGPkSauthtxfacZ87RE8CoP1b6649Ua8uoNzBbBpm7vFZE3wQksMuBFFbCE6vQFj9Z",
  "key31": "8bLFo5KD9YuWhCK5bcEFYZDMuV1A1JSDPNYxSQi7KFiKruWdCdgyNR5EaHqNghoHAHR8oRDc3E8LexyxyhEPjQ5",
  "key32": "2V549Ed2rytCiDQbP8sTwME8kZR616AmhUahicT7EWCegwFw6w5hVt7N8v1GSroFBJkmm7zpyKiei9xjxfU28ihE",
  "key33": "31G5j2C71TsT4QDkFWkyuemnrmoarm7Mg9KAWrRpYYCGR68fnT3oVr2mnHKAK8NUygjQkDpoxfL7z2RxLF84BFQH"
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
