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
    "2Tn5LvKvZdu2C2XR8aNta2rvdNTWZFCZhDGM8nHBmfnvJs7sF9q5ExVGvJDitZ87FMa4GZUKbEvyA72bGiL1XZg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXYbAgyzkRdivXBBLEeT7RLJDm2sopuGJKx6qhst6urENCR3EkfGNiBWt8LxMViAqQ6ycQLnjoDyCGd67CqkuGF",
  "key1": "4bUscW6wa4eHhvWQCyePkTgKCH4GLTLJEyG1KEY8bx7C6HDbV7BjVX9SqZpSEjfKdVfKeXRmciWeP8YBT3fhQ92h",
  "key2": "3wBmzqmfFY4ozMx6vYHc5DwGVrMA1k9LKb7BpT5WFErjrepT9hKZu5uJFkMpss2N8ERzJZTKnaU373rQd2Rf4rgm",
  "key3": "w8ZKdUKWhK4rt1tGEyCk3SZeAL9aB8JVkERrvWFKXVSuP2bSeRjDkH8Rn19tcYvT9M1WaeS1XWoudTUtxmejw4W",
  "key4": "3n62LNieixnuYbHUKkJeeUBxuKiRqttCQV96mTFCQtsFGh6gmo48JWJzchLDujAWvPrCbYp4JF7ESH4bgYGkrTB8",
  "key5": "5CZHV4F5zT1T2ecnVdkeEdNpFBrD34GUKKLYWvzraWLptC9YQADHyAw7aMPTKBvXCbHgPK6DDCgqTvDwX6zY92ZH",
  "key6": "yzSdNiWJP1dGJzyuh8F53kqmca1FgegHCDviqrJgH39jrEgEkMpzZEgkdmgDTJisEipBR6ywFSx9YxwXCNWk2br",
  "key7": "3N4bv4ogzkwTnS3ZEtPT59RAbC9hnCowsCRyAXPywr7UbeRXpZgBzxs4cnVmAVZa9R3Mg1SkHZqJaKJCUYWBWQnb",
  "key8": "4MPTzniRASgYiyGS6gVM7BG82UAC5SKB8mL8VRPp1on283KyKdaCCfNwVyiZeCyXCRdaeEifDw3o9v26A4F1tMkB",
  "key9": "2VwMCuQ6qfAcTsnfB1EJtMQdgMYSvphe1XZgxvW5LmHmowE5jzekRPDTaX9Zz9S8eSseNDDzsgsQmrKUYcJLyHP2",
  "key10": "3TdYwmqv1a8jSX6GpE8iewcSNgXv4BgYF5muqbuqRK3CyPbmnMT9uB8VmEYf66DK4mg4sCjKc1BpWhgx2U65wnLX",
  "key11": "2cSo4CZhVbpzRTTcxnJw1mu5KGVknv593ZZTrTaSh11T91oTBsrwzTSMmUeApGLq6hC6MVeSHqpGKRFNqubyeiHG",
  "key12": "LvUb6sBnKZcaodScEz8KPjZQJb2gy7DDGD1UD26y2EDrYqLt4g5BLgpKJ5rjZ9GTSPxJbferG8pSZcAuQFYWtP9",
  "key13": "2Ck3Ry8mS616o7kToeJLg9BJ7d5n4BF7cxKcZJTKAkmzLQgwBzu4Q9YoALKRWZV7LDaKsNS1rP8JeWpCuAReRk1a",
  "key14": "5BF7xa7GXa8AStdDj9XkZwmC1EynsS91NBtp8mkRa7LLkZtXHHRfc2uHfyfxQRR2uNQ5hEGPbpbk8LDjC7xcg1q6",
  "key15": "2ideGzyZjM7q6eCqBwfsh2M8CHj5n8oXepVn55oH2J3BDxX8DJy9UbnrNC8nr5xmSrQk7Qi2UR4uL3Potq7Cfsb7",
  "key16": "4f1AUyHFZhkRdFHJQ8crWY4TyDArkJgfDoW8dqdoWXBoKW5S6vRKo49XbmfEMwsKV7FkCtcPZHV9AKxbnwCtn8gb",
  "key17": "3ZuwKUFyJ8wTgoCY6ru9SfQNb4zH1LtRSHa8PRb2p6FyNREp4E1GJXqpqZgre6SiG5psDJ23iLfknacv5Ui3Btp7",
  "key18": "5TBjQpg9jE9UGvyJ79WTLy6stQFVENA9DZX21fWUJhsCpi95Q5ZcZ2Dj52G4yXGp35eutdvJiRtZKbGspKwws3e8",
  "key19": "2Y3FtAGp9dBnTgPisQVDJ5ACWwkRsPUfzCSxpi9zvrSQRQQNdeHgPW4n6Xk2VzpYboHQyTnAHeYkrY4LyBFNzprk",
  "key20": "UDyW37YgMGyNzsjdSrENLMUiAw1hTTMKRPybSZW574Muu1M7Fyna5gW6p3jf6a1yHz32MyK4ULJpZGsbtwBnwhz",
  "key21": "5UfneZAFJfLsWkEu9sq15EmtuE44aaXNo8JTj5Pew3cv9XAjkaKGZRJ6fV1PDbgtac7enggQ6p7wV7WpJH5gGwCw",
  "key22": "5E974CKzF44XZmDsPyNrb6S4fhyoS9RH2iKjygasDrYQKkkkPv8c8d7HwxiHmShddWqAymCjGmRVevMj5xF6K7DN",
  "key23": "2jv1cfoVw2e2Wm3NxCpFqrW4sD7spHK6ABbkwrG122uN6g91ZF79rauZZMc8qW4B7mJF21xhixGHtvtvf1D33rWE",
  "key24": "3SXUQqu35ojy5zjkPGxS5Vfy8uRbaCmRhd7RXw37iyhfjB92JHAikjGEN7W2QVk3tWMB3qou3wgAdLFkhPebNDfA",
  "key25": "2WcTPRWRwMXF7kcBuTNX8v99AX1E5eWGHHwkUnEc2N9U7Jpip1VWBQRyodcXKfbVQZsZtZDKVshP1EwCtikAN9Xu",
  "key26": "4k9UCYGa3rAJRm9tDhEf3RFXXo2aefBYHFk1nUPF3eRfCTgZERVSN13ads5jHb3vnsiNAN7roqm5yg3UrTGFYw35",
  "key27": "33sXuoqrf3uj5T8wquSQuMCz1pDMQqmDAkLyYucvmH4H6zoJK6kCodnsyiWpAvyCUnS6AKeTDDQcNetzX5koGfdE",
  "key28": "4oMN761rV2ViZVH2B4dT4BmBQYHAiXhw5Ec9aLm6iJamBccUxnefpTg44jveFS5MF4sP4EF5dXFXoqu6ZSdGhUEk",
  "key29": "6565RYZhMkv3tS4uUdforVk9B5Xqp3xiffv7KZbwmCGneF117LV45BU2qKEMDw6weWPfem9FTYegZEnn84AVBHzk",
  "key30": "2cLKDPACH72vz6k3oZeH6g4eioFxQryG5FNXft6CXE7K2DutFXTnwRFNqsg7j5FCnDAZup8cQjsympQXM79YUYYH",
  "key31": "468MA2uMpiUre4Q3gusF2mY1Uwb23NGNtHGMzMz1dxuhPgmM6ApBoJAnx8JeQ6UrCwVu2DuCgDjwaQUKHzfZHX7t",
  "key32": "va2FqT5hHPpAUPoa6Any5RzNYEUNJNt5uHBSNCNWcaK8zH4GKMYFxtXUniYemP9YDDHrRFxPjKbFNH31qzbkqX8",
  "key33": "5Dq9gRK7TPkuxct3mvxmXDQZSjAWuaCjSupGYtmXmH4uZKgbKphVSifWEvyKhKkKyejKseMmsNUPbW8G5ZHFxjPC",
  "key34": "54S98kV1sMb6XzJXvgzcMR6erwjkT3wZh5qva1YtgcxKbHDRfKz9GkUKM7LqgoWWVxvA3Lb5Hyamw9HcWidgqBVz",
  "key35": "3qtajNca31GQGA8voZmffiPYMpZPivKt2VWJ7AewrYvLB2t2ebAvXHyepm2BAaC4Kv5NihugUKEkLnvvP1G8VuhK",
  "key36": "3V4x9GRJzfFYoCb7uD6tLrF3CwxCcNGGFrbHKQxE9GvK28yhkr2NiYt1WX485pC7bc4AQHUV7v4LVuaSJ2WdQNCi",
  "key37": "2Bsa45UkdZsQF3Bpemoz4MWX6Np5ecJq726FzvdqhEsGhz4Mm4yNa8NyaXXL55z3KXDMmm4cej6Dm44efg8KcESw",
  "key38": "q6fhqGTvmAnpk77JsiPYPkVGLT11boZcBKAi2a1kXPwJ9DfW1ua8UG8P8ZxgpbVfyk7HPxPer58tdDAoTzENrHC",
  "key39": "5wzyL8xaUVLYms5Pj5hME6KxyZMtnHbhuo4vn252Qr5bqnVxRrjpxm1zA4tZzYmSMYkMeReoENYaGcfMNJQRWhU",
  "key40": "3iknTCV2SDEJ3EZwL6FRt3uXw7Lgr5HWPcSbhPvaWNPYWqGpkSQYRbfEkss49ih4xZnfNN8pQz4CcsPvBSKMeEo4"
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
