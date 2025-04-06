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
    "2WxxJ3tMHQ52YPojTfKMmEnLvgRjbwXzwPusbHX1PXU9botQK3tKPAaqFM2YAtLVfh8aEqdxXzH9KCwLSbWeZUJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFEcgqDHxwUwxdHYHxmorFYVUZ7YpfvZdyYyHEKGf8BqK1Y3MPDy3MSrWRe25ugCHzNZfoJQ6bg6sQRaBuN5V45",
  "key1": "3FQSmfXeFW7sJ3ugr8LNRutWVsT9wrC4ZVGjBUxzaRUQNebwg65GRofogfTLWjTheUFJMLAQRpXLAu8F2EYCfobu",
  "key2": "3JPQ8hP9rk1MW4Ze7Qdt8ZzHHsvuqt5s7F8ACfALjF7C4J4mvyCYzftrGnvqcvf1gWs6XFBa4URMT7AXvk5oo4nu",
  "key3": "5TVsvZY9yNhuss89rWD36qhaTzKSGk1niprWhW5hGrWjUT63r5K8vMZuZ4kWFovaJNwrPozYY6ggBG7pCkchLAHW",
  "key4": "5kixbFd356N5GmY2QQ2vjSneyU4EvPC8XomaTZ6pnZCmAEpZxv1ue6khqU7sUpEitBFRjLQAM6u7QKPMLhTx3k2a",
  "key5": "4Fw2tgd8pShEL4nh38T7Kyuau523uuQoGAaYrGs5HhpnsmFpnpbJTPRSwYAKAWKtrFrAhaDcNYcM4GJnVQdAowjW",
  "key6": "4duoVguQt9n7u5H2QFnrxdSRJKakp4T3rHrQK5j34xofmecmVzh1NnCCLA3QFSp4sfX61Hrky6DmFeu6tXd9R5Xf",
  "key7": "4tFA7eMsrdxcBn1WjfKmiYo1GD9QX75KJPCCyT2rStvEJPmZktceSfcteSFdzE5RenG7pkaUVqsmop9aCjCekLXt",
  "key8": "3ExVZ5rXVNKUfGhNi4tCi3P8rWfgn968VBdvsTwtbL5HkCXAyQu77ds7QbYUwdq615EkrisUN2ZNx7gcfv4zr3J8",
  "key9": "budSXbAuNuhfrXSfjnQRe8FfD4UKh6RC9G7fEtQsSiZrPJSRXrJuNBNhFnkAxjkpMfJwQzdKNGMsY1TZrNg2ZK6",
  "key10": "GBNo4XFn1hHaqBqwKTEHuU8MqNASXKL9J8EiwxdNrEQEB3EXA8q22nqXUTtnB3ke53YsBkkAnKRYicovX9Mahhk",
  "key11": "2zbpDqiZnF4ZU3hWa9KBLaqYaiVeBWtEnBbNua5tXz58Nd561t5JjFFkToxgqUS34bS3fjduxqKsoUhwdo36PgTJ",
  "key12": "5mN7nCh9YLu6izM58CjrKafEgPCtcNsw4VbAQafJHQMoDWjgMJL6w3hokxqNv9mKcTeWjeRhF6LJ1uLnJmiid6MV",
  "key13": "5mshM4qcwMqYfKQee5E4SCTZ5YYWhcNp713DqMbnhfHW8Z1EBtcZVB5DxtrWWpjDmGrSzusoJ8qGEQs8MxSSUXBp",
  "key14": "3fRdMCAD7sd4cDrvSL64S4hNZ2XCvnocQ2spJnhLw962QUZDi21PzMeLRD4mZ68dU4xPnF7LyqJZ3uc9HyXBVGdh",
  "key15": "5AD1PkRcnVeZZYTpGxrzM4K9Gse3TMhBZSN4vS5stCPLQgYdjR71u7Z7UFyQLP9HUTAJCqvnrV6pUY8bg3nPtt2F",
  "key16": "2T2m41rLitHowEYANmdSP4JXFe8hTG5hRERjR9WkQ19dWZboBfAXDfVrnQojPH85kgLuDk4GR2SVkVAagmYw6Pc5",
  "key17": "5BnL4rPN3oJtNyifuKygXdBjk1Nvbf7V3LwZ7bsdtvcZsx61QGuzExMGSs6FuExH7Q6HKcXso1CDXhVipxx7L71D",
  "key18": "58UBDR1s21bZqencYwCpNS24Sia45MHUa6NtVPr5RgQdWVp659FHou3Qf1TE1CfRRbFJAhsjVz5rkpRU76VJrUXY",
  "key19": "4XdCHyn3rBKYYcbdHmHNKBdT1hsrCcHQkdTJmeCVKbW6idFepFhXxqaHjwJbXAwhrT5vJHaDAqdmAFvh5E1weVSp",
  "key20": "2eZB4QSuaWLwAVauHLg6pgNNHm3jSYqR3g3jBb1aVpfnVSYQYo9YhbFaaAzyhpiho2zhwrBFyPhUwFLx4z6h9t9h",
  "key21": "5pfnKzmp6FXwu84QBF3ebcSDjFkijB1r7BApZr5Tdif8HzhtW8Ndq5WxPMLdEA9rNjhhz9fMtngebHyZYzF6Dnd1",
  "key22": "MCBDGjzd3n725sstuZcEVcr1Hyyx5h7wUFjtu4gQLXqnjAuKEWfi5TZJ93gzWxbUufoTzEhXyfgMQpkt1QFkjRb",
  "key23": "54Z45AhVSR1A7w6cpv6i6bSxxnscg3tov9PLiHHUU9P7rm3WEhuDw68rnW5agybNLo2Xu9XGVmSx9CCgdhEWw3vj",
  "key24": "2G6wGS7bvnBzrmFHftHZkXrCHKoLQdQd8afCEygtZS1D2poUE4SuBpvEpSo8YmozgFQ4NT8FfRneeDPi6XxnWPjQ",
  "key25": "BCge64AQZk8PdZnd8k5VAYBzEcs4qJCFpnh84kRV297WJUM8XHG757ycTKPE5ND6sgd1wYEuuiGokG9mP73Zs5v",
  "key26": "3duKjBpayrLsS5d7MRJWrZNvuVYu1wxBPDFTBU2sVjx47TndBgePnQLLdL3SJ6BsHJEa8hwqmjgZ5RVUJAXXeqBb",
  "key27": "5f8dwV4gKUHRWJB74d5Jp8auo8o4fVwbcpwkmdZ47v44XQBmjUrMN2iog7QoSHEXqjghpRwfnLbjZ6DAcYinbJr9",
  "key28": "q9L8DZL25kRFE32Ny8sDGwWCeL64K8gKaB9CVKiJSdiyPU9m2kNEQrU1W7H3YVcvDsY1KZtxternSwYSeN3uHRA",
  "key29": "JczJMwuyhAVku8UyxjbHph4PGS6MBNgUbWJ3UhXJEU8Bz6xJcwcatce3t5nSybvZGamXFr9dAT16rAVcGUz8LHq",
  "key30": "5tfvKj1cWSn7KfXGsbyBATAXC93XzSH6Kizc3FhYP6rRhggNnuYFTPrfabQ1oAem7JXLBbBDdcynebwq7rHvCqgb",
  "key31": "4K6mMjExLb6hEuSDJjJ6HXvmkuYzQ99ZgKLSs9B9kKT3SkV6Np7XqDgg3zHad3qre8fc27rU8JzXcxHcB1ERFULw",
  "key32": "iGsaA2SvuYfRyqs5KPhwa6TyhSH6zLk3GfVBT16JvGjhNkeh5zn759ho2cQuDE1h7rDccQQio78acWj1sCGcaKk",
  "key33": "4vVpEyQjeTsTQ8wbQUWSmP1pSCCb2gVSkjtF6zNFPrhsjjZCc9dQ5ZcWxJPyuGX7h7TbFHR8ZdJWuii4PBAagkf5",
  "key34": "1Xr93znYZ36BK5yt6QuDRPa2FFVxW2zSc6PuoSXtDuosoFC8U6LxNKmDTH5CGdr7gkp4Mb1Jqc463fDAG243jw5",
  "key35": "5zM9NgRppds9d7Zop1mhXCe97S3SyKURmoKktzsBt6F53Azb1chJXf69V7NstPeJfFhP5qFbZoAUdiX4NTNQWh3G",
  "key36": "rYJdTj3t73kMNU3CFr6UdgSngGqthhGj8xJW2LKaeNcbbkLHGeaKiWfufq1PZDFa5eMFL7Nrk9jwfWQaHAZZwVp",
  "key37": "5Sfcbn68uJx2hEbX523DHUG7jZXrXXyaMaV3JeuSSDfZp6gzkY33brhkx9pB9scFMjqifFsJp35yBBFVMLb7V3LE",
  "key38": "4NimiAUxCMrx28YU3S1oJHs1UDg9sRetbmhwjZJhsWcysXY3YcGs1AatdAuxLAH7w6o9bdzeU8GAUtD5svjcDyZf",
  "key39": "49BfeNqQu1EwSefs74AFZp5L5ANe8s2THNHwWhBTcpy62zC6vQpJsgrpHF1iumsmnXoAPvhqKj6dboHofsiXGbkK",
  "key40": "4frNq3ePX5ptgqB9KURQTF4NVAZiwgGSyuu5h2cSNqMBmpyvZRZwf97qwxFLBa4ekFcJiGU6FNinzWvfhtPcf2vS",
  "key41": "5N82g1FzKQfFu92KbPbJvKjvzPx37iG7zYLRFmWs5pxpga82WFNw9u4vZTyrfuE65eLr5xm1PP5RzeMYWuq6QnN5"
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
