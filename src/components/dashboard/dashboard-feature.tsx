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
    "5KFAVAGtaCndtxwgADU4CEFRvgemc6cYhYkH92Fd7X8SZPR47JmL1ewqEn5V3EkVRV2o2QTdGLz8NRAiBHE1DSoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XS2aXc2uqRFjBdAybqKhYzrMjUnVdpqdrunr2wHHBsSCd4QFuJqP47LgSaTFiQZ4649MMvD4wMtZcf4XMnA8ypd",
  "key1": "2ocG2whG2AXrFpbmDYFcfN7tM7dXJifP1L5uYpZprwvFSjyLsxqF968wdab2cZcoq35m734nufnMUU5h1XiRgDRa",
  "key2": "65WSEdspG3nYAX6xVyx5AFhT3LuRbbHR7v51NukvhM96YDDYUJYtHXePTZpWdyPdhjTRgTKUWAtAgKaU5q25ibv1",
  "key3": "3LZvsSRux5iRENdC9LC7ReWzSqjwTL3nZPx9ihdSbnHcdwUBqvSX27xuXNBBuZMU279SHCeLANDe5VY4HZkPq33",
  "key4": "2hjmRGxoAx3uZ1CJgRDHjVyPH9ee4DoX627HXTa8xvE6dAhvLejppxc9GL5k5WeXCHCQPZzEQSgsaLELmdbDScM9",
  "key5": "5YhvkptLDZwcBWu8Vm5NAYPtP6Um3D7Bnsad8WQqXu4xLG8NAYLwLQ4x5ZbyNF41phYe1N7tb41SLznjfz1BdQNN",
  "key6": "3jtG6oH3jXS2yikBvs73GMhTYp3z5KHdRrhbT9jCjkfTiXe8R3vX161DSZjfGYMK9tzG33mhkyi9AGHkCmDg2n7h",
  "key7": "5DLm7sX4RUSSiHgrKjGF2gczU6NoDrQRLQHJoKg2hzUuS8iH1wud5kB8yEQRcGrWQe4VK721D9GBuyFgknKWHaXF",
  "key8": "49HZkm6pQWRHXATPa9vVj6T9feCteUariyKuYehV16iqqHo16zyppxcWrp7CQxFSEisc1ai7t3Aduuh6eGyVjaN8",
  "key9": "3ML2Z9ieeqjcDdqJcV4vKnfiBKtxvAm51X5HriVnvARACy2WumRmaEYu1Z5VGXHn9L7W4BjeBx4RYXPwrt7HmhLB",
  "key10": "3h9mB5FPcMvHUHbzssztMe4ZQRwReKZ5D7SKSzGGKhhb6qi5CrZBTVezwYdqF1MegknnsHFeqaBstMLzsrVhHHoq",
  "key11": "3NybWSW4HzNmEUHZcQjGJinwVTnEQGnQfJLq2TFjvxVBcG3LgBv9JgwfZGpmp3UrCYasAFcve5YnQbvktHzjNwS9",
  "key12": "41xJcqajmxY7VV3T3M2YCbt2ZBYBhY2QS4sypqQGczCiVCndGqJTEuSLSEFNYAyozzn9xqtkqw3wDBeGXBEz95HA",
  "key13": "3zLzA28YnMQogQzHVaaMwza93i7amwKNaNw6qfuz5fhSzmMdfyTjy8zWZVk4upTpqFtanCEpBNPcJdR7b8HuFuaa",
  "key14": "4Ng65nUttyVnZrGaXkZ5dQPUe52wnRAngyhuN2y4uwkAQ1fVf9WxCfbnE4rNKWiPZWqgBWmmKLV8HjwmbJq3shAU",
  "key15": "4DqAy32hDRgCRJuxgjUNRfNG8qiHwa343BDgfRxxQY5pLzirg6NpRSFXNZhWzgURooQCyBBgvw54gnFknPXRcCiy",
  "key16": "3FexRcxfNFQeo121iJMJosTMq3XXrVkxNx2BmnxBKsdBqfBwFeATYEG6htst2Lr6YZ5vBbi6m7enpuhcKNtyBvEz",
  "key17": "4VWX21YuRAmj6zn2Q62zDt9eAGqaHUwTmrrqFodTMvPptp56YJ6Lot9xXKYV2YexMfP4AprCGfw2NxYWcHZiTfRY",
  "key18": "YuvQLH1BfmdVvm5WtuSmQCJFJV9UfoyXuYbKSDwFrLhefEBXShV41WvGq2ZFNFiXfrovZ14rWAeQhqqPB1rZ6AF",
  "key19": "heMegxw97Gzsp8zm7MGpWuQSfRsBPp5cfDmuN86P47eAf7KuNhcv9ZffiP45YQBpUgjvBB9gPXUbqPyc2oo9Ww4",
  "key20": "Duse7FepHZNFMawuFmYGRgxsj51z7R2kWCAb52avWcW1Xa1U539pXvPmG1HKx6b6KunKd7dL9nSSY1QRHfQaXNZ",
  "key21": "hEe78Se21RGCh4iNtQ9dw5kZiGL6WkDitfX5QiZrZHvGSTAHyE72bqhVYHU1RG35HZfk2uJAZnZ5yUDazSPmwd8",
  "key22": "fc2AAh9xCwtccvSMiM1Mbk1qxtQ4U48HcSgv9WbnFmSzZWof5muhAQgPVXkZAEKWghbchT6Xz5vKGkSRWqkfwFP",
  "key23": "4gtnuktPQ91CCkom1ov7EmwCudhkXAw6kcDABTFk2rS4fNWwucJDdhbnpEp4dvHLR7vDfzDHj8i7wz49tHrWc3ii",
  "key24": "424Cs6CoyZjp97qekf3Dw8AVbRjTrNfa6wSFxq7G8cBjnrbQUXEg7LfGyxJ7tMDTZYfSh8P4pWd577V42kXhhFGA",
  "key25": "5JM6KgKbDP4MAx5V3W4W5QQ1gdS5ww72TMqdDwmnYyzvHxuHKSedwBHYHsUttqdGt3W7cYEN1pJGdATsouptNfZx",
  "key26": "5KDjnvjChLyMNJUJxR9EaRoByRFxCM9oQ2F1qrkEWoVgQkbCaoXEqZsQ7fcK7nZcj9Cc8Dtgg28ZQkuAKiJPo3f5",
  "key27": "3eHzjfeqbBbyYPoMUmypr4jRbFPN1uQh6fM6YZvqUA4ce8t5SbpvDSsvhVEXpcgc9YESpEUSFXafCZHywU5xQXHt",
  "key28": "2t3QNyEJjxCTnHvx2veb1KtoCu5ZC9JFETc4gT7btDRq7UUPyJETFjFrFJW13BkZzBWh8MntXoVRVN6FrihEefjF",
  "key29": "3UbeRwLfiwBw4A9LhWLKXjz1wGTZBbwLMnVtYKCe1wLj8xW1VJcCLwxHyA1tY9oaZrSEQ8S8nnmf6T7hevLw9K1R",
  "key30": "2nbeuaaAgiskmWd7maySt3dHtGpBHXY6ushza1ZHqZfM2SFc4482Ua1TXWW8bwnzqgycfsaKRR7L7bfGGPaxLSec",
  "key31": "5fLXikagTRviykRmtwgn7jbsrBQxBzgH2p4S8ttDgqYbMGv31QMoh3TfKDGuDia1hZy7BPNEj1jZwPg6557Uvuyi",
  "key32": "2otf9z3WJHNkDhaRfuo9bARgCMnhvC4TrfWGkJwwHVfc8XWrK9HwtnEuN2cskTzYSDBxPkXGfpFsMSKRinBaPQLj",
  "key33": "EVd17gyqVW7s4zfaLNPV6HAprGGuia8i61M8XWBQdzP5EZzVYeUzh6AfyTfHpGDAohNgUastKT8DKvnFBKCsuqA",
  "key34": "4MbspLZTTq7HtVW8dFuBL9NYKYxTwbAMKZwVw3XVwdRJyA8vAo6DfH4FomthVhDZ7oXD2EjXui9kbvrkUxvt9bQF",
  "key35": "2GihmWb7SjirvWfDYQ2pr7wHq8KwF27JbEX3uN6yBXX95RAzVPvc9eCJpDL8dRFUPA9GLwwJbBYkT4pf2fc68Gyd",
  "key36": "ixd1FY847A7WaM2Q9WFCFsbJd8ZPAhgrrHEmahdzmVZvaWV2CdU3N8iCYeG8JoHB31rq1UkDEfnpmGfXL359LFs",
  "key37": "5TVxcdCW1iavuRXiC8ebyfn1KigqrF2aUhQkDLywm3fRrZhkcdGRte22FMAoLG13FbwC58ZkVTvkgNmjEhhbJJkS",
  "key38": "3v58So4ML3peF6YxkjPFDq4CJrjuj3Jo8JoMa1wfDBotYucJyoNLAox3YJHUfJhKPrsnWBzDEA3Xh2p5UkpVw4Ax",
  "key39": "ej74E82xP9EUeZTbKM3EuLP4oXDEXg55cHg9omri8Zj2LhLn3onq16drW76rW3kJFBZkcCunAw3M9mHEitbLX3G",
  "key40": "333aKaWjwph6J93nLLdzygrGRUG6bZu5fKk8pCmZ7riwii9CG5o6LzbnvSyDdsyteYfytSxBZ5n1R9YZENyhEJh",
  "key41": "4XV2QWJDPFswRWELDyMYXpC6yMak9vZqMEuvQxnuKEt5QnwPB8xGGGavtHMEPhdEQGPpc7hdR9vraXHYpZ8AbWrE",
  "key42": "54qb5GLP1PwNgZedqRGVQ7MMSmDMcwyVSHqGHhbRhs51SLD5kSN5gsEMnFnhxTgtRoeHKXvf9K5P7CkdSMWEG9QS",
  "key43": "634SwsAyCsnVUqta6x3DSoqVjsNgNGkfwHDEPKnrbvNNoXGpHx97VY7gMrfEuwLeeMCJoJBdGzHjFjXqTX2DsuVh",
  "key44": "3MUESsGgV6zb8KtZF1K27LLVVvPWaEqxuFyJ8BR9erXj1AY7bz2jC6ebmnn5xzyGpmF8vYYqkQSsTVgWfV7aGFii",
  "key45": "3vfgBgebjs2AuCZfX7syVnwcWdsgFuDY8ZZkoJCEWF1reh5kehE2cofYSteSZCq6ASqV4t81D47tk981yjrpUqk1",
  "key46": "3bE5pTepga4V3jFsAzxgENvVT4Lv74cSqbmaHYdrQ1xd6i7iPFUVjLvwCsin71XFrvmqdvGbXZK8chRLG3NDoZHD",
  "key47": "2SDzjmHq98qvZdxmgSZ8mgVbrXzjYnsonYr4jrwXrhssiHs7w99TK8nnUD6sYnvLm6wWKXt6TQBNCC1PWTjQo5cR",
  "key48": "3xshi8CXAmGskCDAiZMNAUdYdYAtqMNygRnbMWjg5wTXMXSEog26Fm8yb8HUpwJSryqYK3q7WEtph1RtsSbrjcQk",
  "key49": "2iQN6wijcR66cXfGugAZ46w5Zm9dL58U7wN1kyEEdZKw1kofdeJUy1PGBC2ihb3icMoASfvzEoXhm97M59FSbZzn"
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
