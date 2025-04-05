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
    "mkbKpfCPYhZBBwHwLRpm7sPeu8ckXG9bMinm3Hv73MqJRgTBoXpz9nGxT2LqR9Hd3aQUCBkCnDfvKaD8uKciJA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwecMHzcodLZ2vZmUF2Y2PgX8AWMAiTPYDfy9Eao3J4LVC4KGa2PiqHH8hJNmZyPXcAsw2snsENaLiWZZzYHSxy",
  "key1": "5NsZYWgrdcJowDNBFvjtshf9XAtG1Qm1nCyULeJDjm86Pyhh4EbbFAbkCkqmePBkpm5mEbnuRgCdQ74vGdBrQFDD",
  "key2": "2ERF6cvxBDfJ5wbStEte5FyP7wfsnQrKjNj45WeZbsdfZSaDuGKZzfQC18v4v3aEUzaWpREmhHRNDsnCz6voYjcb",
  "key3": "2ZDmwQ1CrFKrtkRC3MKyNLAnzgEyGraJZLFkFsEwDMsT3U5Jn5uqcQJAaFAaBXuhaJkei1gpTPApvy7fn6w4Ufg4",
  "key4": "5sUep9pEedxSxpHVYyx5cGcaZFV1QzdM8i9ch5Dd43we77KUbBBWqTWtEkTDmwGFiKFUpfgeqBAeXK8xWw3fmSN2",
  "key5": "7jWCwmAkfF617WWjUiPJTrtiscGLWnLM6TKx7c4BTWMXmenzP4oJW5LjjQQviZtsFU8BwcQbJ2W7QLMshx6eY44",
  "key6": "4cjs674K42jvy6kcJJ9qNmfUNvxEfsJSR6d4Cvi3nQEWixpSZmmHSuyi5N6FYpetmxcL7GWSTNnn7sMP7bLiEmxB",
  "key7": "4KTaebYaVTZozJwyynTKUY5sKnGTFvWehqYMUvhvhtzSzmBEuk385UuUc3ByxVmkoBAddyy3N1A57JsL5869WUz1",
  "key8": "5D8XJi8XxcE3JpmjwG1T7UtNcJhGRAQq72ceavjxhibCZ5cKJULeg2b8Zq2EJwc5xtFsGtF2LGqjz2ppmfwsdAbP",
  "key9": "xuugcniinjUauz2N7YpwaRw5w8GJGr9yXCGy2dALXUmWAYumQBX8XeLZqCsz6Q6ChrTmV915ZbuDPpEpfwNfoiE",
  "key10": "Yz3dQEbvhwedkgyFiAf3zM2xitshuabMrXDuMQj6oGQQWryv6hJcdcMtejLaP683n5UB5XSPgnJfMeZ6oWuQQw9",
  "key11": "3K9At1nQ7eKBjQ3RK8vXeQZrNYvLHEKb69czL1VkAtJkBWRpgDUxbgjd4H8pqyhRvUtrjggsXSwxoiCBeoCVm6cT",
  "key12": "53WHF8djsXR3JNF6tHiJavKAstFqec9xKXURYc2uY3ZqZdBWhqEVCp1atgqD3H7muvMqjKgVJoXiDW3UJyf5bVHR",
  "key13": "nsKniyiYagUcPcNCtDQHR2xp3NZhKDqr42U7xS9hNnfEx83m7xUNgKsqwPY9H4y97bsYj9HyetwrYCdaRo9ANKo",
  "key14": "38p8ASAGLzDEPL7g4mhjoMgKpogiAWyjjpoRufXP5jAHjT8NXLdwJ5NR6GyG9rqMTRKDNWkXsT2aD2h1vd1t7ZvB",
  "key15": "4gNrwYMSgDmnRY7DpaZnpuUTw7uGhqJqN3tjD4hqmnQQEHaSHHgDzbL7Y4AdPHBsfmGtz3AersoSdBa4XU73XPu3",
  "key16": "4s2iwfyCwUKZyixWNEzUGK6x9L4Tkhc1Ys5XkW5u9kZDpK4hXehRTMLG1LRUH5nnqZA1SVfL1XYj5dDSsQ58fmQN",
  "key17": "5vgkvDtsW2qs8ffqnZ8DuoXkTE7JsMxJvdT7FVwfcFBUwZ66NQuvmGej7j9FWwYiRS3tCW3HoDchkcdcrFirB6MT",
  "key18": "38a8pfDAStqY2QpoAhzdH8m5BXRT7WruoeC72v7qRLTqVpaMS2RidhU5EmmvKmSP3YSRceMjkMBSBAAzvzHptaAf",
  "key19": "5G9VXLXW5s17gtASEXgGa1wZMUQAUwb36D8yZR3na8K8LZGgg2vbqgkRRCfKVEgsNQebnkk3pi2E1nTQPTfH3ri2",
  "key20": "5oJwMyPoUAz5JGrnct1M9NkUZ5CxaM28TWKKSsmSSM83KpW8b2hCBVzNDWLAYryzeNERh7a7s8GMwonboNbCiXcm",
  "key21": "4tPW8NqcfvvsXPQ3Uihin3ms9F7uqnWUuhyZu6jJkEtnoGg9VAMB5h36y8JW7KssLjsrHB4PbnQVXBvripnxquEs",
  "key22": "5Hz4fChG8Xf5htQXQetjVrqMeHe8qYWbUAqfhSR2w1maZBMcA3nd18YjyYNhp8YktfrFinDpFioqfEPejQtkVxV9",
  "key23": "37fMB4Uwcz59vPiA6aEHcZYCn3amCMTDiFbk9zCHzYS6MbSUD65FbzvVTG3m6JC1h9rNpLBSo721toionSNNacat",
  "key24": "5TBErpRM5snPWh3e9JqEo986qCDUhUZfSwwaSkziriS3YpbWrzdhuQt5zTkDJg6oYHYYHFBsdvxCZMCRXzL5dGjA",
  "key25": "3JtNeJkMGqDFJ1SUTbCL4rJ8tCZi2sepzNWNuPK3wBbZRZFYGsicvm6MVnVvRhuZ8AKpza8KQzNaNGquc1neAmYC",
  "key26": "3axS3BoNuBBgF8zDgmDM9TJouySKKmBQ65gSjSKTcfm846ha5Uar9h17bMQ5oELDbwsn8rAgvxQoB1SBzN9E8qTX",
  "key27": "3NrDxarrsfCMWzN6B5H4LZo6zVb67uk5aHASMXHwZDZeoJCgCGWu8M7vX3Tpu5pUnyx4GpaMZYDDVmq34d2mnojJ",
  "key28": "2MgheBBvMJ2itQjCw7hX6CxG4DZjsc6MM49uoxmof9nv7qsReXKvcM3euHGVEQgdmMvxbZYoLro7ccVzVVPE7CZm",
  "key29": "4eEa59XGGzjdaekUHMYNC8qRiMSZmXn81dnmqPhnVMFMPqx9ZWmT87b6taZV51PgiPamRu5vETXfkLYoUxfTMBca",
  "key30": "2Xb5Ya14f99jwv6Qcsr2kSDTaMdg1txNJzjnR1VPqKF99QCsTXTxcALoFckC9PeoY5XMafMMpPwLXxJ3QiK3owKT",
  "key31": "uAKJnQ77wJeyfr7cWQJabioDY28Na63MpmwWQX4sqKNdaQjKAvQWzqKzgjJDmpXFwEWsA9RJZB5r4ZRv8hfy1MX",
  "key32": "3sAub5JVC9UfDHRWSk9xqe3FSrcMYs4FwvuKseyuX3h51FBYxcrRouQYFhevketorvdo9CD56ZKnZQ56qRihUPat",
  "key33": "joLv2nHKkQPHuRC9k5EEbEXNvezUoavazoowoEdoLpzttWhs78gBHAKyyvQDE8Nhei62QMKcsUURKR6CS7uAvie",
  "key34": "5uLSgft36fyVKnk17hxMS2rGsftuwV639LFjiGLERhroVv5zK2DybaC4JAkYqjqVF9YB494NYDnDjtyKnxYyDccZ",
  "key35": "uWbCbSrrvhAYXc4L7i816QuZ1mzESTnbRn2NWt6oocq5DvGaJjsuy3xwdNfMoJ8j8RcJoFu2XXJ9TkuTSs8H6X1"
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
