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
    "4F494WUCwwwCWeU7XfRBseZ5qS4VfaU7x2oeJG4LnPzGyTKGY5AM97vqhWTjNDNoadYEcK7nxXzuaqzNjBwmxvuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zYfrgKpJCTEGbhSwFsnuJippiMh8EW6XytgfeWAphYSDiMVmsep1qtyMQmkHCp8RtEkz33HspWsPjuCGK1qDqx3",
  "key1": "2zceeRuw4rJZaU6YzNd86onf92ub6GqbbkzQm152Ske2rRQKGXy1TEhsjz3QyTnPyvvbSswyJ77eHQM5sL4SJrya",
  "key2": "4pcqC7MDsHkN2qK3DPLhZhFrp1eCVi57VHB8BygnatDUvu73HuB7NEcRzoKpFRkaXTzw9MQaeCQzsHZcEwVuZ85T",
  "key3": "3F9jF33dMGoFSWxaahEj1kBQ3xk79WuFxpwPw4b86b5j6zfdHaJW1KPuKAcJ85qfvvtpeJ1gb3UsUokvAGr4TaCk",
  "key4": "3YwSeRYfBKV2bXih8QhYtcTb3grWN3DambbZjzW9KyF9c7CncHrptu9a9Li9ZHgUpkyYnkjaYkrKAiFVfnZHreME",
  "key5": "5uwEZGQsjqbJ6kBLRtxEo479tLPYR5n1sdVGPtzgEqs7bApxDLpJQGVWgXvsPf78eE9HeK3wMABMnbthBYQRmAx4",
  "key6": "HrzpCKMH3jT6eejWEx4tgPHw4LmDnZqtdBBUAvFPMZv1yNSD2JqChnPEqH9ZfWC3UvfhrASnaEtnMTAUeeQwy94",
  "key7": "47zM2y5LmPs5umanLhFRyLcfa5bVWKR6SEMhMsQRv7vh5y1aLm3tXbiSzoA9t9P8keMZ39QBJTLf6oB7Q6w9WPcE",
  "key8": "5N6rhsAEAZDEzAbfhT8ydvS3g1uNLR9nXQAfW54spR4GqvcF4f3y7Kz4hK2J8nqrq1ojVnDLDMex6QDT1rDHjRh5",
  "key9": "5s4mowphLn8DBMFeT6FL3K46Ycw89ArF4vLJZwJkRAW416Nc4cWBZDcbDQN2h341TJ3gJchRW48KDEV61ncBJu25",
  "key10": "611mKzcmjow8NpCt3zY42BKECAeAYyoq9KR2CGHczgZH1QEjwG1eRuduYkjxCDgcEaiN2tiLdVL7qvMbizCS5si3",
  "key11": "3kmisqxaPU8eSQDryt49JdFanDPeuKmFxppjhULtoHMLLFeijJ3L6NqcRaqjTYsa13fLX9SgjeLFsHGL4bQ1EzBY",
  "key12": "2J9HC9R8TeW7B5go31bfzkBxKaHikvTYDZY2QG8Smiqv57bpe6JhZ8q5YDridpxLNnYAAbyM4xQk17x7p5Ste2un",
  "key13": "4HefsK2nZxbWjM8vQK7Aa9wyDQPPVc4uNPQYy7fhXkkQhuLhqwSimT5JNZsgDCKoJEr5eT38PS2YbWVTwouNX1xL",
  "key14": "5KnRnygutoU3MWHKvuFFJnF2MfkvwQm1oZnxHZiNFA1oxLQVqgLoeuQquod69koFyJKi6aSvko6NNTAnPEzx8oWt",
  "key15": "4oTJPEcU9TM2zKqQLEnhKhBkFtMfeKMmNY9TFACxXqdNHb9tJbog8aAf9Aquvce6saeD6CJLCBwLihmiLm3nGi5e",
  "key16": "53vAh5JLsydCaMfkvGVGojccyQfAs2HkPxVeUsgBFHQCwZ8KYbN1Yq8uMG5Gopy4H1SMFLx84zt6wh8fsEacNjRm",
  "key17": "3HpDtwMCHtG1wBGLLoB4vg2amz82tSwqnmm8xuA2Nm9RAzUBvx6rhbZiD1tq1tTHaHTPukHXikBzqj5hmAfWUFhG",
  "key18": "5Xi1mpDLj6t3q1NfvAE6EqbPKbAtWXXVnsP9NK9gEBtyS9BbRDfzJpyruih4ezBrJNm5JYw8RqSPHa5YpK73JtST",
  "key19": "3zaMYfHZnm5Bc2rzaD3qCBUKSkWZzoYaNbhQZWtKu2CWbM7nAgMBdMT8AFLgjVVc7NA7z9N78fX3uBRdvipbfiMY",
  "key20": "5Lx484ENakn5jiFmd6dKkr1DfTSA6Z1HBmeBhfjere4CsmEcpzTgQKTRiFRaassyjAUjd7aFVhyH5mDymqbyPTin",
  "key21": "2RnacoRZFENWW25pkZMf9bTBZzVbYkjmpABAR8MUppzjsRKHmLzLzkmy1dQ1ykx9JWRzCaiWsu4REsTXDCmV7ERK",
  "key22": "2cKQJhFEEn12WfztJVQ4NEsG6StkFPTydZVhKa47FJZv6jV6HLibLBeAycu7ZPRuFyWCM35QbqTxTJFqYGz8a1p1",
  "key23": "4wsPAhSLXJ9hCLiu9ZHWMk4v5H2pNrpJGNkxheRhMtSUKmqfwthkTkvquYZW95hRB6VvX7i3dVQcYZeHnBKfmHuT",
  "key24": "36MjkcFAtxwzoTwwzrfnFF6mPSw86xE8cNVqE2jiiYqyyrG55koggLshs6C1QDRbfccWzKXU3pj4qgijgvTAoNvS",
  "key25": "584RCv9ne2YiAzmPrqPEuDXwUzAJwXpwXbEQkGF4zNFaLKD2HYw3psoixSwHkgQ6cb7tkj2kHvhHFe2p6g5w9a1b",
  "key26": "4h5WGjLznobGiRmkvQw6fjEYdvh7gFfaH95Pz7C9xASMSZhSxf3JbsnmNC7dpLEtVZixL1WVekPHnvzjcSrPNRxH",
  "key27": "4cx49idgCGgqakZApgk9B253zqENQM6fW1Jh3RszwXr2efSnJd32B8n9CDDTgqUU2zuvorRRyZt6YdzJ4HyHVbyy",
  "key28": "2sWc5677R2odbfkX4xLCZ5NKufk8CBepXL6XeHBPE6axbqEdLm84h7VsACw22VPHwJgpaKVwugxRwcGzj6qnwP8r",
  "key29": "5buqx1vMewQkWKjHGoKvNQatX5GgoNxsqSjTa6jUwdqSAYX1GNiVyuMHVfBhoYZrNQ1Tppd8tdWjm4k87f31p8GG",
  "key30": "2SC3E3WnFrLTBRc74duk6cNSUBgRzx4iEoUSN2UDQs23sfZF7GfYSSWJ4rKZ3zhQrvgCwXS8JjPW9hFawV3E75WB",
  "key31": "55SzVexwNCTdThCA2EpbQgToteHEt26BvCtetgwxF7hNDqCRhBgnEcT86r2bSWe6PCtqcqenQR6EjEsYJtKQmmx8",
  "key32": "5Kw8B1iV2XLY3irYfpxfBbmK8WBw5z634bxwBAdzzgr5aAUfnSnF8BzyRbs8wXGeNiABv24XizQXP9jaLwbDs2eZ",
  "key33": "4MjF9Rm3q8KSud1bJ9ac5v9qqD2osGb193LhTGHcX4yBLJL82u5pmXGNxezXaJCmNFfv46UQtxv8MbB6RWjcF2sV",
  "key34": "5Ry7uTPa5wKqCWvibR3HaogwyZ19So8AsbYGd2osGc1c1rgCnPkiqaXzg6F3J5wNRiiMtWy1HY28TCAuXxGPpDH9",
  "key35": "33qsLVmN5YH8d9QQNj8ZQgYYMsJ2po23Twx2f2FjhnVfQ4bpxue8wHK1TS2ULZ6pFtM11gNnLUsCfCNrXicAmTaK",
  "key36": "4Ccj5zu1RrqVftEctVKydGJQPkLM2eekun4hD8GRyh93KXyDZrYFKKRadjEEmYChN58fDSQjzfCTMzR9VqaHgRGA",
  "key37": "32Xwj3CFGmUR24PCT6BXNNoTnkr5up3E9mEcPid7XWG8fDYYcnYavSZYUJEvyXTJQDjbJVNncRyBeD3ZNGwC1CAj",
  "key38": "3GF34eU49VfmtTzrNB841e4RV8voxxHuvCkKrh8seMXrK69xA2kESWuVaNvezZtLw6wXPBPANcj1gSFhQU7X7RVc",
  "key39": "5xHfjfZHimmQ8k6iJAN9LgpqaUiGTJMXuSGoZhZoiXaBRJPUir3doTrfuMxkrC36qnncrRSmwuH2eMe5jgogdnNr",
  "key40": "2mnmGpzLKmUYLhgZWXEWXedS3xKTXfZ7qKpxNqx7QAGQiTDACWzTPEonJvc9TSdLpZXUvSMNMD39UQfsu3mu9sLA",
  "key41": "4CjJ9NKfLSur3bJHw8tTR1EU2ocnR8XJWDBKRtK5QLzpnukuWuzjsWQ5XbNTYetJo4ECCu2hhuFZojKJ7ihWBTh6",
  "key42": "2tUQm7cbPirJFSfUynR9e1z5ruVcFaFoohA4t6YkLzSvpMVk7TKWKzW6Rn5unnnsHiUA2TnFD2TfTfBzdtzHLqri",
  "key43": "8WhV4rtFfjdsJneLxbybai9rRqjVmT4fKkiRGZNL6ybsFNWgLg2Xn3wxpcCDTAeQetSurLRi6YFrYMBaRsssm5W",
  "key44": "2HqEnjLfsaqa6aYq3TKr7amniC4jjdZQ4y5aj17ag4uhMMdNESaddHk9j8VRVoic16WFZj8aTDWE4TdN1jk2wBLW",
  "key45": "5737bnciiUV2d6E6C6q7mJrPrf4o1cK7yfcmwPm7KALjrbEtCfScWAY3rNK9WHbvJ862PdXUzBSFyCCGuPKGuMRo",
  "key46": "4y53kN9DJ47XQ7HC2CCSn11PAnfmUz9pZhpiARr1WgLFSNTWKfpVubxyaoM2RSbDw4zibwWWap9UCR1UTTQDWHa3",
  "key47": "5D5AYGdBaZcYfJhpfj9NHR8hJ7mZcBsxg1i59k8Wc77aTdPfJpA3Nw3wVNHMBjAGsyUUVmscw7c3SnTMVKhu6MBD",
  "key48": "5eQYBA3XPPf31cr4pV9UQeHih6wJ2FdM6xWvEWxbtoQVeB9ht6u82PuDHiQqmrugpYbSxs4aBpb96SpwwzvXCnTa",
  "key49": "2dENENv4iUsj1FcB42UW94Wc6bvs6MbkDGWKukxoeqKrbpN9n6soXe1Vkkoi3BdfUe962Kug6FYroGNTVc7MZ6su"
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
