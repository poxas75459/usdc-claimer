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
    "vMfMHTSnRcwMcdFWtgeLMwezneC2Nq9px9YK31LF6ZPtLVH8M8DsXJrs8q5Zdqs5ZuHs8MCPALix1QY2HgkpSFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2QkpXgkVTXhFqRchFQHnrBR3AUsZGSgMFoqPCmDgbXyvgKGhHQhM7gekxxCcg2mT4DQtJghi2hkMHv7id797xj",
  "key1": "5fUDa7RdXzRfBMaEf9hhpVP3Fx3h8eZ9XGU6Juoepcvd4ciskTkvHzU6ke7AVT9FRKi6CjFdRQ88Vw1PT56zpQJy",
  "key2": "2ng2U86wmTMnzYtAHtkXGwD4SVYUAJ2tTMiX4L8argHUXVNqe5ruqdawvyNxtYrDVY2a2irMkfSM85z9UoP642i8",
  "key3": "3iWMQJjCktd6L1CMqbeSzkgQkZBfECxDiwqsqRgWoFEVqerwzhbj1CyfG1S16tAZ36Tix4M4MjrV4EnXs819QpTG",
  "key4": "5F2f4RrUGE37xFbVYXxZc8KYJMniCnrT8BpDdUUSeoLEdor2AVBVyMcVbkd7NuxjaTqY5JVEP2vM87VcCy11makv",
  "key5": "5N7F1AWv6kpVdJcCQrbSop1sRwceP47wahrJbTZwxgd5Nj2gKUTWRaT3cz4DnpakAKR9CkBJZPRi3JXXpxaQu2GU",
  "key6": "2xEaZx3oFhBtmvhpnNqK9N4djDxHpdXx2sH8b49tMJi4E234V7tpXpXopztHvA8XGWYMPrPNStUHSJ7CWAL4ffFb",
  "key7": "2x8x2nPagRzpwPqeBtEfieBHUpHhNUs3LzzWui5xzoVCvB3N1Env9TJWMv2ik9vDmU1DiiLYGS1N91p6qMB26X6n",
  "key8": "2Z5cwaHUxvxbdbtHx3vmqH5fTSyhVCWhRXeL49jEAs8qPbpy7ksSjvj34gJMkxC92XWfwQrBbc7MtFG3CwYL2ijk",
  "key9": "49CY9ASF1UJaqwFUL5kYgsKAkU9ycLa7HqiEzz92uvKNJoyCRo8szXWEbKjhMusANJafYcpPXzHADWmXfW4wqSBf",
  "key10": "4aEcS7EBFpXGb4AbvmQUYvRp8pRX5Z1CfGsVVf2bC4RDvnokDwUNP6kKz52WUXtci1FuRYkndZV71Rmf1GDnKjAL",
  "key11": "5niz4XUV4ATcHMiCuMaBeZEAw3BJBwE7zEoBA879RqCFtBDN7qQ6XfXJEFotdespR1Acoh4S98pNwsHj8BsDAmmv",
  "key12": "47AHz9Za8uYBJFyfenDh38Kzbve4Jd2JWL3no2f3NEtpVMu3Hqza34DfY4ofdSLJWaTMTw9Sox2qvNFEFzZhsnsk",
  "key13": "3qWjJGznNAkrGnoGyaazW7AHVZsNLyrNH1N5e1S2QE6wZNh3at3uzHpnAwbvvBRLW7vLTX6CSagHTT87HskhsU9V",
  "key14": "5wJ8VvFcwq2aLLoxKXPWq7CeB8QHxfwQQnpqvNpY9Ue9cTNaWSDP51tJn3uKsKCnstaZRz96xsBHamk4zf7KqQgS",
  "key15": "5aPr6i98VG6afWDxfbNDe7uNLNZ66uJu8zBwLDqx6jzawheWfpX33yz8K7Fc6miGsAnehpv43JVbB4cF7rNtmkiy",
  "key16": "8mCXc7Ntct4gZ2qajM7gBve8EyUYYUc5yWaSKtFBgPrbrUdh3NWU7kz2BQott8sBZuCNEq7BYovmsAwR9wh6k7e",
  "key17": "3JqMoLiGcfnyvsA8qrZX3mYePvK3U3KAdNq6gGtvhR7Pq92a5utQbeUbbGK1u1mcS2o2LtXnHEc8JTKeiA2EWo8E",
  "key18": "5mGi9VVb6Bq6GtExBr35tHYZGSpWEC2yvkTJYSP6yMxJUAjCHk5qDdtJX8UqmNT9NL5FjTRv3z74s4Au1cubocAG",
  "key19": "21fKdoAFyDFeCdYkWozZRjLB7nVVNZjd1B9rjYd5FBPWDojNZnSezbgb796fPhpARQRR164LUfVqHrjrspsgtJ7h",
  "key20": "5wCtyuRnS9csJbSeZVYMPPPYovcThEA1YZPpX3q7RqLP8KGdPE3kprz6w72ir3vvxN3xcaf2uLKQRqZJCL5KQi2m",
  "key21": "5Wzo8U3TescukeqEhE3aGjcvxhNLEiT4g349n4vZEBv1dC3ZUPAKQHPwN4urjHkUjgqaMEDxxzwNHzRRyPjVZu4b",
  "key22": "4JAjdqrUe3xnqSkBzMRrBU1TYEWZHb3ihWsMHXbNrksaJKpyV4uuKQ5UJrSxr8pagmiZiGP9215Yt2xUfEWemgGS",
  "key23": "4TEVA4CC44EDqwpJPYr5neouMJgur3sVkskgbru8sTSNZTAMUnZ3MWA5vWwQxXkAR6SGvUDCRXKDXdotZNaqrzhS",
  "key24": "5ezyWarFBhcS8dtBvvACV2vZuspwAS4XC8rzeDeyStfVjPS8HHaRhW2GoHxuHCxRtQwighn44JYCKBBxZZnXHGW7",
  "key25": "5ab3dhQcQmjCWFtrDN2tuDuwLFAiiZYBcVxwQz8MidEqaQ26hQjNG7t5kxfNvy1V5doZpd5qm9Q5psN4QmAmdihg",
  "key26": "42VD3X954gLhSdy1Ts5fSEnq6A5kv8GYGv9WXw8fvomij48fCqSTgsCiYL63rirQrcnf83qtFZrNv2E9M8kfZPcg",
  "key27": "4SLXURseTG2k93KGgQkeqbqCoLm7XsyuhZvfYXJP5nUqCuGTE6B4bFfqd5x1HQPqFQASynivhNzejTfJwCJoAiJZ",
  "key28": "4ZtQUzhMi4Tq2wmfuLYUvofaxbj4Q7XioXg4UxbHd8pQDKd8nkHEa7REtjwirs492obbKrZ6oAwRWkhRZ29H2LK3",
  "key29": "zcLzRDxsMCoNJec9aPC1QCwgiH8WwkzkQhmrrXG25UY6ptnyz6R59QaJYKm9zYkV1t8ADJdbvMRvV8Jnj7m7fuK",
  "key30": "41oPbfShNqbiRmy4vip8CEownBHHhERXdCEDgBACaMyyfZ3jhhx6kmR4vtqgmsmyFr6ZMSHkd71wnm2DT4ttY2o3",
  "key31": "4BFwXcAGUqiU3cB6eAp8NT1RmEReeThVrhhmTb6QKejDUF9vLzTsz4DWJT3tgSbWpJakHUbRK8QbR8SahQY5jThG",
  "key32": "5C7XHAybdqHVb7AFBszYLB644gQBgEosrB3tkYnEZqC6vmfmMeYK3M65hKNRdqgMoioegfuim5Eh3UfRngVMb9Tw",
  "key33": "2hGpwkud5DpNnqTu7APXi5DfExZfv6MgCp8aoWGdP3dtHFmiiTTbxdsaz2ctsEMkZZdfJWLWka9rCDAU9JUQrkzN",
  "key34": "4DGTUFzA88ZCLRFHgF28FeGUUynKWm87Hpt6WKQwM29UFtLfqQLbeDzPLQBmiCvDvzhaZDojJ432Tz3tMSfwDFFa"
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
