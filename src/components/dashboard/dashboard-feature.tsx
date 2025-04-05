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
    "53yLVovaVMnjtyrRBWGZNjNn4CNq1a2T4WrXfgADYFbUFH8J7VMgzRpyrLb7WtNcAfNUQ1o66np7nw7qqxBVd49y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZK4hTp2Cri3EKwsxi8VzrkMzRTeJZn4QVDdQY9jTDgCCk5hzXM1NsRoaEAZdS7S1BXJVmtw3hbXy5yjz2vHsZvH",
  "key1": "LcgFmBgu85D1NFuJ1bj67meNob7kDjXXYSjDcgXi9P2rRQyjfRNe7G3L74oVzPyAvy8h3ssXR3Wq1MDRXFq3Akd",
  "key2": "5Rpwz89fbkCdoivQXHHNvcwz1P25pTnvzLQ7UJ3RBicCpY93orwgRjTm6TYohuqbU2s5kbfHK2Yx1ER1eJBkhABN",
  "key3": "5wHQ2VDggHBC8YAyrgqzaEYNzBSzBW99MLWkwU35n3qGh4iHkr13mWr5LXMwmnxVxHs5RCQidrNMvk7VpwU4mfDn",
  "key4": "4yzxv6bSE26ua6Cnrd6cWV3TZvkkEjvso3e1PtsxhxPLpzSfegnUFxJB7i3BGckXKaWqEy1BQUDhuiLQ1sGKrZyG",
  "key5": "2rewzhJANexcKYcSmnVxcesosFEmtq4AixwyqZ1tN7BrNP9XczapjEoftirECxH5snwnLMRPySSJZ5YrmTRNoF3G",
  "key6": "2W5HyMh4qACseTopaodpDKTVRcZ6RW5ETCZjDQfQ1pajCfahtZnYQQLmBLvTpaBFrPwYhFrA1GQNACZdZFa4GVvP",
  "key7": "4ZYXPj1yM9DuXvmrrwaWKHgbgVAxw3PpXsGqz55mZAUXN5Zms94QdSL149U69Xiiz2mpvbbCjGe4SKVVDobhprtF",
  "key8": "2LW4Q58jtkNySuEDyRr582ZJn8gxUuJwVa79e1sAZiXFh75EU1VFpYPdV6puF2SoxufzL7ZbS3rFA273XbM5oad3",
  "key9": "2Jv2Mrjr5tME3eYfHgDEsXSUwEMdg3njsABYKVFQk53eJyTpbfeepkPsZkMcnZgSAfGDswCaCQ2q24pivJH1wdgE",
  "key10": "32W76irNm9jJZfZUCwsYzaNqw5TBQCmZ45ZrG8sDvQMXJDNDbAu8xoqqJsyCZZQmmq8pf2gEW7Jyu6MCCwUkacZi",
  "key11": "21k8JrJWJviyeTiw1aFhMLypRqHU1vDqKhSmYCkkjJcmEggwQYjeUokHFynAcinzZTd5hVAX3ApBmaWkDNsiLMV6",
  "key12": "2iziiZ7muVZ9MLaq7kJM999ZsUrdDN4DYxZkrLpPvKUEvhXq6pfnV8eqb95e3QrjJDVbb2NftAJkFyueXpYUhnTT",
  "key13": "5VLvzx3SvSAkbpvwNpHTEDu2Skp82Ek686TNX79J1L2jFzqnsmsj6w9MrSQNMzS1scKXmnPqCBRD1Vaoj1ja5y4b",
  "key14": "5GQH2XQqf3x6yZfd2oRAGzvnXrW9uS8hWvsVwx2s8suAWAaYw3DjuRX47FX8YQozw5rEgonGpiPVHNotmfCshLZT",
  "key15": "4zttvh9rYhLsRpEBD5qs8PUrQszTov3mTKrLHxxc3g7sxFxfbekLncEBJRHrWMBBieaJ2ChuzkF6WgMU9xzqymh5",
  "key16": "25SL2F4X3A3BcS52pTiqbcNbep3ucacJQGMcP4mPiS62ZXacv3T2pMCSe9Pk8CGirMJKKJfHKju3SZ87CuTjTSkA",
  "key17": "HFjDkSPq4ZnidXEgNb4hd3EQoqhhVsRudktZv17JsDSJi4eLtLgknWypggPYaUWApe5d66ow2b3nquURs9MQNah",
  "key18": "4AKZzkJJRS6Z4uVTAiNYdqFBeeQqe7pJm3pbe3QA5JJ8TRL9R6wAb2shJe41LC6Aw1CztzTGH5YsM8VUkPgvXQyv",
  "key19": "4BSDqLf6XtQruymCcUYSv9xF4uLbsnHaiVipy1hhTMK16youfMZhL3PHQ6Sh8YSuboVjgF1inhPy9ziC9iD7RifS",
  "key20": "5PkQq6wcUhDXrf6Dtrnxhnh3d4oeFCQdv9yqikoJk7bJJBj1gq7fp58cT6PT4rohaAtpEhsLMtpEwhGLp92gTpdw",
  "key21": "2vucfec9auvGeNqnTiVGyBYaxKVsdNewHR3hgfe14HTGfDoHcebUvjH1CGB5LH1e57JoUAvw9MHuwns9XSYc8z3G",
  "key22": "2tVuasU5aMy59zzY6vW2y4RMLFVdULfLN1sTapUNtnuJD3uzxqtCh331PabMijBLvWu3cp6bi4MyncxKiMJgLLRA",
  "key23": "4LqswroSawY2NFiXSrVTKPNvZFq8Fmp5iPcoM7i4zsfBcMaeeRbKTrbPixapewYBsq9Zbi5AcZrKkhwcc6AP8GJD",
  "key24": "4fPVFQDZPqsnWWD8SaKL8cJteYs8BSJG5yP2Xc72GXagG7GsdTxyVwfTmL6k1LUa1BSnas6YxBFWSJywZYEAPMEL",
  "key25": "qoFebxmiSGGsw8HWCvv3yW3QgdtXncDs2Cwbrs6ekGBq5kqu9zy5R7j7z6BNvXLH6HqqviGB5uc7SdWSENQN69f",
  "key26": "5aoCK1VWFSTKmU1GqTNbL1dLH2ZMADqmX6jdDtmcE3v8HC46PeZ52uLUf4562mS8gDiDDSmvU6UNuufk1QmgbTsL",
  "key27": "5Gh1VRMPFWaDRKmJLXVLTup2EmHXt851M73hBHJFGnwLzkPUrV8zqx9hDLYKQW3SbsnMvfKTN9F9Xpdyam4xCSze",
  "key28": "2AJtnPuT9fZ2whfaBVVxszVNojdyWoyqv6jqjBUgtuFMZQC17uDpcUHEF33sPhF9vXa6S1eoszXAd9G5dyDZVb2P",
  "key29": "5epc5mjFMGk6EWM8CFRLQTNL2KGVHGxPL53wwzRrfphcnNsp9vWprvNRSqWSyhC3LyxA9Fy9vAHYt6QFyHV6vhoT",
  "key30": "4fndspsU21fDTNgZ8wF1AVm7PLWhCw54sQjLDgcLoRjtQ5v3FrFkWyskeYx8tMqPsfSgrs6Nid6GZmg3EGNcDL9g",
  "key31": "4pKWUCdFVAkVnq66q5PVheJUXJTNYby4Xa2Q6xZmGTVwek3NbesAfHnEPTT7iy7S5syP5LWkBnRfQPhSRy5Sd8qb",
  "key32": "3UBf1kM2Phnh4ZskhJG5Qb1yZwY5DWFXDDr9rQ8TmSxBnGLUaB9SkmFJpyvNczZhWLrNkHpHXtogfXqVUdnBSm3N",
  "key33": "4WnG6WEUKSGUY8d6r9XEWX68RDa8HVgHDtCUZx2ugp7DKcH5qNzvJSrWMac5XWS5TeA1XiMkFQ4hEJwhf2CRfpaZ",
  "key34": "4Laxs9PkGyiEFN3SZv59Cir31yzb36ixLt7LquEGmZBwafdP9QuXG1vipJyP2yzfiR6379Uu6rVerL3oxApdZtgD",
  "key35": "3rukvt7H4w4mRVFqWRdZCcnoAhorn4occYrfAnnpq8MYbEf3WH5KJcoEuJuYs55VZTDteqJ4A8WfVvyZSxd1L4L1",
  "key36": "37dnKW9WUqTpCsXMSYDRCeZfRJsDvbwMHj2j8n7dHWmRTkJ7avQobyVZGH6xszd43biHadcoTmtd2d34gKhuhXc2",
  "key37": "2xQa9v1LDtvEVcRvQ5UMFafDYCPuc763bJ94tYGdUiuQm8Rr5c7aapx9x4aZ7moRpsg7NywDzAFULssvVezdGouF",
  "key38": "RU8nHycLKuZ7mKQT1EiS473nPA55Tcz75YNaRK3DDw9RT9oQxkkbv2H9cFH7v4tmbYpWHQQJSv369AkaJA66ag6",
  "key39": "RnMpEreU6Dz3ZMorvQ9ncyq7EA6zvDnzCQ9tDeZbbjn5HtVpN8Qe5MPSgPTGrfUX6U1FX9VZ6e2723ekMZoz36C"
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
