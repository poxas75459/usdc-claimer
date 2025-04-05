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
    "4HZXQWyAcqP3qj86SvYgki9w4q37WKAr5nrUFR3hNpYUsFDTEH4TMfQSaurMK8KnhnjoKMdWeG5SFWa2SzabVw8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541U1BWoY5JgDDKFksuzjEoSb4JZtJmGmyBmofLEkY6wsQMssVnAjFFa1UBXMj2SQVPYiiyapDmdsG71vb8MZBWP",
  "key1": "3nn3QAnJHpWKve4UvdzovqA722kTiht6APn4hkE4QG2svUqDYnBEdYsNQJRsCR4X4g47QCcqi76p9JPgNERqnmbz",
  "key2": "sLsZbYJzpV5QNifxBzsyGSGWuqYicdsYdZqi3uCPA2G4gJYiXKrcjggjSggUvpWZNT4t7QJFz7N7Yj4YwxPwQ3f",
  "key3": "55suw5mHLAQCbBggp558t8R79CCgage1gaGa77gnVHjBfdtabGLR52fZdWPuMi8TMCRKkMeRjTbX7kUzSK3zGn5E",
  "key4": "2Cm2vmtvRbxesrc7Vsesp5CfG3DkexqrZGaE9o8VwFPacJBY8erohcmKJzwApBqBE5yS5QHoKRQetJWzzsMwWDhw",
  "key5": "3zA4Wo2Tq9WagfBvCnJXje8EzNrcJwYFZpbaEqU3aigH8tTGiGnLUTWaW19igrkWxFUMshN5S4ouQu1KNzCKrr4S",
  "key6": "5LCEWYJXqJMdaBgZvpazXGnQbk6baPC2V1ZUa7UQ2nnF9y3aDEpAAjuhh1G8gWT7rbzqMKif6hfHPxGwQWJCMFQ8",
  "key7": "4bXNiMPBmtMuvvfY7SsoDu1wMkk1FV2zqoX9t1yCkAta4e655kCW4srs7aUkGw5WzzVbe5TDthyenMvHcjjw36dC",
  "key8": "783E14w8Ci9c6BgYwW8yETcxTLNqRBBgWPTjNGuJytQomzVB6xTjrUW31J3VUMHmbEVxCpoDWfYAG2CQYWmoLhu",
  "key9": "4wLqX92F61rJWqNptCJ3wApXmPw1Jxr2mheBRMsLAd1UViYVZAWQxHE6HhF9YNwz2qu6QXqJURWAeLrLR7faZECB",
  "key10": "4M6nGhCgE5JLThpiVgT1ByD22vZZWACJmrDdFfWbnzPECRjBqLAmgZd8f7YgAhigYEhbW9PuxJSUi2c1tHWiNSQc",
  "key11": "5VpLok8ejSdMzj7GgQvzwAQZo1BFF15dMNeQm5Rr9AwzGKTPcH7EK7ozzMgoYR68aQ8hUbNdp6dY6pAGKfa849Ue",
  "key12": "32jer7rvV8Mrif2PhZrEJL6RatPwFbxfNnihXxgEWr7y8P9e91urrnNSM8EULXPq6hg7tzrETd7LFxcjRwKQWFDp",
  "key13": "3qGYb7TjnyhhoamRYxucmwvYmvpyJN4WxKQUPbZAa9PEvCXgR2zqMf4mzFjeSMsh77JVqzw3bfigNfxRy1L2Z6nf",
  "key14": "2RT8mYX4494Kpjh1iTCqvVPezJAxNMS49MgVzXx1vzDgBh6vjw2gBJAaVvwMYWw7K1xh44qJF8Gs5yQxL5K2rsYP",
  "key15": "5UGnmVA5uYjmbcEgFgY1tLawk9NXfBmwaYeJ35qpjBTUUdBrpQ8sNYfYMnxy5KHSq818BTbxiy3zurgnUYCXUuZW",
  "key16": "f9i7c9Ak9JkEqbEtBHetTEoiko5TLkwv3o82tTF9D7zbHu1w3ANa6MKWtD3KVSLSbtb7QN2CkKWGchkwWbtM6h7",
  "key17": "3fqzJU5ngTVNscG1Q4JLNXBFn14HyiAF4jLaw73vEex914Vm3NAf4zW9xSSQ3hKf17PrqUpe9DfzTixAiXFshqzp",
  "key18": "3HwiezG34HaTbSoDqzA2QL6pmAXhLUH1a6idVPaT1TYxxT3bhTQp3AHcXHj7cu5NfsdV1nrcMybE46yimU51Uou2",
  "key19": "3MxVZeDVdy4FB4XGJzEuFMXAhvfotgmWTNUZG7GNNmbLYMLfesMGRhSNMYgVHsUyPXkn5x48k8MuCvkvj8HJCXLg",
  "key20": "26GDdvEoECcYS12QQ9Y7j6H4JRtAVN4A1LTUxeB6EL1PGrbmrzVvw9239NsHbtkeJKLa4WNA5ggyN7U3jK2q99WF",
  "key21": "5burFucM27cQkJgGWNWYYEyDkN6GWAQgBEa3ys3QQ269ijk7DYDAZVzxEcZqthvvp3nbDX7SMtmMzGjAqc79REsr",
  "key22": "4utXxqKGHK7HsnmB7tC3ajnjdwidKqcCmrANxasC4DjmGxqt6eGjfyUxwxtQFCiSgb9AXRrqSWjtEt8Li96qmfic",
  "key23": "374hpxvAjuTpwzumbqLRwmNWA5WfWZxaacVEjjWwUDPGBwWjBEH3Cv1ZhB4UYaQuemJR3oQwFEoASDHvZXwPQtRi",
  "key24": "2sAWcmWgJiyNZofJF8nTytunqB3hYYb6Dr6DriaAWN1iXXMwsN9gWSZTshQ7Y2Q3UztDi8VWeZCSphHi8UhxwCpT",
  "key25": "5Fo9LiH9ziQkWasCDtVc16vHTNgVt2NkhpRBxy535wK8kfMADRQNAW7JzZwDX8DXaGP4sfMfQxUZ2TfA5LDGAdgT",
  "key26": "64TnspB24HVUV7UdCoC64rrS9HMwkvgAdqeEhgWFaLjr3tc2SJA7wrLZ3u5WxWi8Neicoanwt8CEioX5t2gU21Hj",
  "key27": "5WYAZ4NrQF8MG4juLqFU95zuk3kfDUxS2e43XqeVnx8JwfpEubwXD42BnCqLxceMsEhUzhn51VRxJGFQEnZn8VFX",
  "key28": "4E4yQciuKiMbJmxRT3EoJ8s8aXzg9DpCWWRqk1875wanLyjjCyfSfMFDa5Tmo5PhFQyrzqjAgv58F8X8RTNtr8zk",
  "key29": "28tuBQu3jG2EPuLNxwZsrmKFBPg5V6knfbAzy21eMx3R6edgFHt1ESw7QopvEXmtFxWgjwkiZ41yvUspSc5Xb8XU",
  "key30": "5UGaLb3KTu8aicgiey78xnrqWA3xeiDRyijr8nzq7Z29sjTiLT1aSoTvCnfZqFJFdcSqfVFsyJ3FCLNGAixNn2kK",
  "key31": "4zK3wr5T8n4USue9yDMcBUb5SV2UoVB7etRwR69mJnVHmL4UeCPavgpFMzkWhMhpRCFHv3rnFvd1ZghMYW4jWfwu",
  "key32": "4mdEHo6YLqGYDb1EZYxpUZoTMHhXuL6sut6pcmbphC5GWYYwVmytCoYiucvL3VQdQ6BKGetaKTtexWuDNjQPFcZs",
  "key33": "2zQuGAbW26e9ohXNngiPPC9q7PVAdbYAaFgWQubVaJ78HHmhJ7PP9oM84GzMVUyYWyVDcM3Xw5dsVbws4FrPggpj",
  "key34": "5F8zohcduDbiFXJYEESNMpqgRSwxNQsqzCHyHukntPzwh3RiNoBNJkrKkKTfBK8tEUzcffAuNz9uBQTigTCXnXRb",
  "key35": "2Rpd8vXQUAqhQgAz2qoPVVyiGreMCyuF3MMu2jBs1oXu9uqr2SsS37y4mdJbFf5AWA68HVfuzKXhbGR5neC1vw9a",
  "key36": "5MipyEErmuWFRmemNufiPnpWmAWsYoonBg68ZndATCeQWoGZ8XgS4J3k769BWCniKuJ5fzthpRvMCKWsTHUyTxnL",
  "key37": "b7vM8BFCqv9EAVVaKxnhK6PEX3p15JAGFZybpMY3RNpEaFQN7T27Y2MmiVZ5AZbWZYeo7QKzZu4UxFSmrdGDkje",
  "key38": "2EXvUXu4pkxAVDWEpLzENq3MszHfimowK6vVWj8PkcyXPhfvdtGo4xq3Fz994RteQ12T34nXrvzAmGbQLa9m7fPD",
  "key39": "426E3e29w9VM5FNBUEe9g6SQyCCbtAxsVSMh7DKU5pP7cbaio1bStUnbUs6vkX9ZJf1MmkbtMYCkibvjc7hPHPAT",
  "key40": "5dDrsoEjGJKXskykh8f61fXUt7K1dtUSyvsWxNa6mRjKN1xNCRwEtKgE2yMoePVQSSDkGqot7vNkXKKtNSJk4e6c",
  "key41": "4bKbZVYoy5YgMTzwpRYg19cYeQAAMSZrLD5wkuqV9kXDpVKpr9GofoxMtAepH6FNs5z2KbQL1Ko1PYUsXfJj8JyE",
  "key42": "3h1i4nyuyTPNBoQFGJT2n7wddbK2Xu2SVPCrxJTwxmDTTWwuYDt7opy7XYgg4CBizgCBswLLFjL99KNmuteHk5fy",
  "key43": "5Rbtqi1hn4o5ytXYz14XbnAZTfAvo8m5DbFgp2GiudD5YUJjKQtY2bruG1PnkCt7kbGjcF3z2wXj71emDutv5rMu",
  "key44": "4xv1E7owBSxGWZqLHX8MBDrxFoudxkbz1svjWNHdRDtQXJqHZ85FxyL3i83wdFk3rE8eRBB6bmCC63v2KWJLbPac",
  "key45": "45XNSTYjisVWasmcTjWeGPHg6JugRu8tHXXAZfwnJ3iFDawTgp8d5y1si5aWwPyEVjExBw25SWiJXr7e643nounN",
  "key46": "5Hn8fZmwHPX8RdMW8oNbb5Rx7xJYFSvzKchqgkntpebUehZ7uRw46oMjHrZEdiD8UEmMFoV7UP7MzS56E15VNLw3",
  "key47": "4ErcE3V1dPa8uGB6UNKUb5kmU4nub3RBAFVqpPwzJm8FG5TVkzYZtQ6N9Q5Finm5LmL4muSDRqLV3Y4KBaRoaWV8",
  "key48": "4WkcK22BrgACaS5SiCWuxzg8Jyh3C4n9nUXCWwFTpiMekAUaAkxsC1zkiFEdvu7xr2yHw8Wfc6i4Btvuy2mjzqLS"
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
