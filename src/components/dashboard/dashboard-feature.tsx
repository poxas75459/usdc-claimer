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
    "4qvmQj9CDPEV9pjGiMMqLpUUsemq9EjWpViNc51Qn2qTvKZM9D3JB9EoMGMr9yht5U38d3FDehy4hGDtAHBLKeDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bM4VDeZxiCqtTqVf9kdZ4FcAiY4zuJZkqWKPtMf4Z3eexdrRx8pah7KvtbSZiSwmX57vdxJZn5athUM56zWPYGY",
  "key1": "2ZPba1niyG9Bm3sNVs6QzfJGFq6fF9L4kxBG6SG9NsErWqbnNWu8Sv9ro97x2Pys7EjGvbjYiqMGr7V89bVwtrjm",
  "key2": "5UzgkWpQb7UGa5ZifttD6y48SQ4ftRdSd8E24goQBTzcDKsNkWdNMAZbpgJjSokqSShFwiYovnaDq1ySw48DNuCe",
  "key3": "23QKDEieKUG7L4LnRmpSJBqP8d8wf2usEG1LmeMzqUAnmQyRS6EMdgQoEvyiSfToGRHLKYMaUNPKRFHFDKguN1JX",
  "key4": "2k9Jf7erqSekMVDNRjXJFpR7CZbsDcsAropvXRi7pVH8Ad9HsPp16DigaFYvrSJhc7PmhS71hJSLRGWfz3a4emuU",
  "key5": "3gKJa3WYFS8b2WCBWpyJHt7DoizTBPJdhgiEV3MggFMtveqhDWnmECsJZ4MyEttWgFYNsu2YEnr2ZcjHTGhRTmg8",
  "key6": "3dUCSNy5PQ9X7ibUvGsvVMmaRqqktwgrqdxZeJp1AyLxWL5a2ksYPrvNtNrkhyfMUUFdXMWvdodh959ZgKT3ocL9",
  "key7": "hLhqRCJmWaCwFhMW3m1AXVudHxEWvmfjAjo91QUr2w1fJWv6ZRrcR8dWJBCnt6btjGmNZj2mgTkSspawJb5opPY",
  "key8": "3zvcJYrz1xFjT21NznBtYvkBpG8kNXX9srczhHLLF8JKaeVpwjC6Xa7rLc1b9L3Dwi1yixEBE221B2bB3wGaeTJX",
  "key9": "2UZjmWUCEBk1Rh3Akf5qUZ3RgxbXkJyfqFnAgC686agBx3MaStS62QiyKkRKfehqRZW3uMjbugWAx462CibBNSma",
  "key10": "2ZcncK8hCtuWW7i4U5PQwE14bBC5ZPParaMKKC3nx5KzbqTj81mH8d8BGArv1zCZyo18RM3dswxUSZBLjtMnwseN",
  "key11": "QiJph6VvUaWUD555kpYgQbMMGiGAw6X8YbGjmHAxWjAN6BwaQC6nRqcZJ1PyprVHoeLVFJueURiRGrZtpd6dEtX",
  "key12": "3wP1K4U8WW5Fd92Pvur6fH7nj32Z8ZKNZwCaN5oYLGTixGq8J1RtdidaGV3WD5zno955kQgidT3iFb784Mhuy8ep",
  "key13": "4jgxgeEEKc1TCnQY6yQmSqaKcwPcPFygGcWi4s56XVJSwBuwYVPEC91s3WNfLpDndjpXSCEYVgjLmWa8R8K6tNuN",
  "key14": "3K7vdmY1opTLEY1MaCDHnfCvxcN75VMcbizmoiNFqktzHCTfjUSPZM34Q8oDwYjG1sEeBNWJD8zH7EKvoiLChYXi",
  "key15": "3M73kMnFh5uBV6KFN34e8gTBswsTSdx5hrYgdHLsgJ7hTqgsB8W9SDqJwr6wYUd1wxvEscoTuAmSBAPTfqKMtRpG",
  "key16": "3XpZsG1UN8kydqbiVkV89qwpf2JECg3KjvVV15CJWkUUwEoZwpN3JqBFZbivbEiNiS3oQsQ7jxn8H1P7dyAckG4F",
  "key17": "5y3Js4JxSRuM5z5PQvNfRxmXqMt2PxyHReYPzsgW6EjjxNUAxu2eWjjmSsnCHkRiQpYogS8WYP3kfy6ioPUETMcK",
  "key18": "3aYLMu9pYXkGqaycU8nEPFNycmRv6mScyvXGypL9LaC7vtgP3mrjW8KvriHLxLAzYgK6Xy9ymqqszxiKvCGrLEm2",
  "key19": "22pQAz1LdP2S9PgqaiLxrYaKUSvDb4teaeMQ26Ws2C8bjrEfs4A8vf1qMPwT8B8rANQpafgkAx5TLQQMU3xvPTgH",
  "key20": "63BeiRDENCSTt5t5Jddx3B814fQs4HaoKbAHvMw91ho2b8pwn3CFkcKJjBKjfSPQv7yVAMzjUMXKML8KAGyrUwAu",
  "key21": "3V7kUneMLe3Yk9aJXuVY4CzwVRxqB53Sbov84rLxEn8Ji1maxKtCeD9G96ZsxwU6XioMx9Lwzz3TPGhy2emjL2UC",
  "key22": "3h1GfQx72TbAznjuDGSs5ewGk37bkX7vFLwgPjvaRfzYfkzNDbSSeifEsvJRyht87m3UCajXj2XaS7Zjce7hiCXF",
  "key23": "5ekqdHTYqECF6qPEUxnczYyXUTJ6YBWT1rgfEKMeRRQ1L19jKpJkK8dfD41RHyv321eNQfJwJatCcvfNpw2qRDYn",
  "key24": "668ZBWvof2k3HAjZw9xExfDP1Gj99VE76dGFwTbVQjbJzA8J52nMLxGFwKbu3hGDmXZcLMjRvWBFi9Tq9G4ugkuf",
  "key25": "65fdZDhEJ7gKoPRmExTWwBmgVQVThPAYScMXNiWDUcViLsYif93iDZv2fFuVK5RjGW3yoxLArK1gJR4yhzdKLEwM",
  "key26": "4eFkuSbVZGCh76ws5YGwRd2vMkZum35aBQFrRxasAnHwBm2Zu1HPLhq9RrAkSJRFHSZUCstx2sfCVteaxSu6wJma",
  "key27": "3geAFDDioiRvqhwJ4zAQMvZz2Wp8rpd1wfYxrd1XXshdumgCJv8GYmVv661rgKvVVqQSv5i6aEaJdupd1FgvhH4g",
  "key28": "5CoNf6FmPUgYEiX5eJLX6TXGcEduwPo67bDN3hRaDXgrPPDsEhU8Phc1bNWopVAqvNbxS6SE77ZMJU2UrmcCbioR",
  "key29": "29B9Z6SUw3wthqWrSQCE1uWtY9ABtRvUwjnJych4U2jKftXoaFtdAZWpUuhj65YMdJXLQT8FyHHR6pmbAfXgzpRa",
  "key30": "2Y4ZNeDhFfJx1EyZiHw6bjgEsq8GZmTWAbjYeSyW1VAr8wbPy7DpyFhFF2pei9J9KNqZNKa9wMByp5RWx7S7eu1T",
  "key31": "d58TtViKth7fKcxKfgm9RtFda76sKNqmVocKxHheD3WfgGWgnsJ5kfR52iXEMHQYYqDBmqzHs2S45ybQBeuBVZw",
  "key32": "59YqrJLZWbxUL9WYWfyod26XXt2CLfC8aEptELE38JXw83poCRXG3gyJqV4uf8ZVDWMpRsmzTezKtQUn74GKSuvR",
  "key33": "2K1m6LKjmpeFEdgMZCrxX7XAhrV4rT4Rt4JFBcyKxmJFHLb65CBgmVKkqXTZdzxTkFGsFTDY4f2bAZ6Mz4FePggH",
  "key34": "3zwoUYEpmfW3puPbGuRsbGGMXC3hm3RruxeBva44AkL1DnEjyHDt88eWgueV3XvPsjVKZ1LCKuqdhBpcZxbEFiqi",
  "key35": "5AWmkudGqShPtrdGYyzFZNhYrDg6RoiPLeYasVGrTeNtpMoW4uRytZTfcEV7AdiwkxBYfm3gWRs4Dewy1SBmmLFg"
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
