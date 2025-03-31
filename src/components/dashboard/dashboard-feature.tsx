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
    "c8K93VedBEWRQodDk8njFjCy3jdLNSSAyJM3Nh8LowubWjm6eBG9FgvtyGTRqcGb5hSJjgCUrNFaUbBTD13NwtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XieTdAb7x9qfXH71vtk7q58dE4YmM2wSVry2CDR5U5EDB8MGsz7jJRkbYTRNM7ufSQ5bxBHgRsdbZacBmo19nEb",
  "key1": "3HA2XVntAXpBE2su1xMzUePvdZpos3xef7GvdJrhkNjC8kj5xk3g1ZH3uA5dq2LzzPwEMoAuiWTVu6FNjzgomSpZ",
  "key2": "5SrFhtFGejFfKNMUjZNETx7pf8S1SoswJnMdQmmJ4mSaSiXixGvU87MvaCV1tzwvVeV89issuk9UWnJ1asjggnXF",
  "key3": "3DXPxJtDEPRDarAh62dbC4E9vyhZh7qf3HQZ1iHgmijiUf2LD9RPfHtXJYxewPYNtdr7i8HkZCAaN8GHkioyF9b4",
  "key4": "3aeMiX4wRZeB8n9t64jiLSWhwhYQEErY5BVTGgPv1QTDYHtEdFQeDBSPyxoFZVNkCKQU6oLrc7dkggq7AgVErHJQ",
  "key5": "3jwttvdiLr2wkBbFyNzu2rRvCRMCdevjT6on5NafkjJRPVHrqkgVhD1czTcWpEutcyJXTZBhqDApZx6QfBkqbr9c",
  "key6": "5DnBSP7xFsyukW1s4dPZr79p782EnboFTtt3n7Mqd8DxvdYua196nNtY3Z5nUKcVDRBR374Y2i52GCdv5tL918sV",
  "key7": "4XTYxrWfASTQ13NXEihaSKo26QkdkyxtsyfHgiaxjTAkjWP6NYb8jXZL8fSXBzME2GCqcCCcq6Vsfwme4bJn2byL",
  "key8": "5tG2Po9JD5WZP9CZGKQHN175stnoyg9UJ7kvSAAtb7GymXiNNsW5gorPn1gV85sBk9SWjbHfF2WJ1yJR6EFmHrNK",
  "key9": "4cqc3iUGgvVdi7xESmspvJ1MunEEUJtsjBMpuzwteXqbhPGvip5d3RyPRdC7m9jiniRAAcNXBnJ9XzJiTVrw8Yxm",
  "key10": "4qoZbHgXRryNkdrDft4PuVgKSos7Sh5B4iZqe8GoUxvdJDU2UZATXkwpjbjdBiBJRvzbS6ECcMGC7oT3svPxsMQe",
  "key11": "bWQMSYpu3QutBpUnACmBqGuZixJQDE2DU9vyK8tCr2JRrjBpgKryYax49nY9SAqfXyAH3N5TFzLh5YY8sYoDcb2",
  "key12": "5zKZJVYcNDkSdRyiqK1R2826rnnG2PAQWz1BwubGU81EAraWyBRhoLc14eHBYKQeYoTFw4nmVrcNV6be7RnirXED",
  "key13": "34UttPabpAN2nzuQiMmhBYKjejJGYeW6nPfogmHe6WZhuWDWC4AKAuiA8nvn4x58FCvEkZsYGZsh1pAkPzXYRYQW",
  "key14": "35yGsmrddSTUtDZJ45zZMYo4awcctHWCLPas6SvjTCaKZLUsJeWPqQcRbcJN1E8DTkUKrYNYnEssjcoov2LTwrP5",
  "key15": "nTykjsJe6FqApWuPCEaEhSBg9U68tACBxPtDYpjVrMSLkQ6u6Y5Zdx7njjKKq4XjwGf2ghHWrwR18ESLanxrRay",
  "key16": "3gUw6LANJSfRMmi8tJqohVnLcGaamWomm4nxk1wRm4UomfvREA4NxAmF2XETWNku55iAVs1TYMUbMZgCg83LpcVG",
  "key17": "Nu8sWEyx4XpKQhAcs8BH8u61wkyXuWZ4ofMeUgELFk3419U7Y4Sr1UEaYmoo3cVPx1q21sB942HSFRcUUyiHvpj",
  "key18": "wCc44H4DSCMzXPqbb4FFeFem4rCW8FD3Dgjh3twob4QfKqnptP42iR4knc3wEGC6dJ6ZFyhhUzFyaHchHF1Fnt6",
  "key19": "9VLQpgbjQAchGuyCxVYAggaDgjshMqGFCQrSGA3DkHXToPhxCFW8Y3EG3mmUaZ4c9ibZcCZswL2Phc5B7SRC79X",
  "key20": "2ZEFiZ6NSJ6W3L6U2WnC6ZetUyX93DW2zouXxYxUe5mZbrRtBu8qhx2GW6SDJDsQvYMSt7VuqLiVcuwrd8YnAfrK",
  "key21": "22y9e8mpCqPck1psBthumL1XBRbGkvwnrYii2TYAnCqWy8cEJrTgBHV68YfbfTpqJ69eULdvM4J9mbeD2g3DYySs",
  "key22": "JJCQN79GcsHryp423cVsys9dhpD14cJZLdH2dHFkujv8DkGHxVmNVJSWkzJuMnG285My8xynfGmQNMLDzJzY5Nm",
  "key23": "2XyRLj4Meu5L7gg6Kqo3DUuhMRUgrzLo78dinLLwKKsQyQ1htXjfq5Q29RTXZrEHLp24YaJ62ijSJtYs7cX3JEjx",
  "key24": "2X9RqCqQ893Yfby3Q51qHzaWKxgRkBc8semnzo55jThuK2hq4DGw7CvbAJ5gb2V65dqp5mbcfvaBQ927jyTTjEgH",
  "key25": "22YYeGyprzDs8J7FmPohWidxm1kqGYzPYrtzuEocnTWF5ezxdBXJELiC8zxeqN864ML3ySg8n8iT8qd93uihMs7R",
  "key26": "3vkbmF6UsEJefbBwBisSX5grdUoPA8RZ3KaAwt5VK9Qjt1fm4VYfsa2K1CRYTnkkM7w53413rp3Pbxm1aVmCgAy7",
  "key27": "4vRMZRMaiXHLSKksZQLYgswZwq9R1HMNeRaz5AdvmkfE9RhFcNaMKnHB9RLf3JM1FYyinSXPhb73nDZ8qHBcFubZ",
  "key28": "5VtEVpBoJ3t8Zksrp2jkBndXkkCDd4ccJjMC4LvcAvhFCiVH8f1cmBP5aMSctnrwQsS5se9qR8c4sh7Qr4dxPgT1",
  "key29": "2SMzYhuwX5znkfdQrsSXUKqbdzmztom3bFdWgjSi9QeSsLJwrdE9SJ2dA9Pj9g3SJdZvYwMZkgUDdkqGvZsGsQA9"
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
