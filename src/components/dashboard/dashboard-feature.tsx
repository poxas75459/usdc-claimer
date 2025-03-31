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
    "3Jna9sUNmGvKyFXs56aHSrPzFr9Hh5qWZ53QDc1XuJGdsKpVkfjvmRb2QhoXkhngNnvVn9UC9vS3ZxDCsT4ysHSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbH8w2EH7xc5qdsxWtKMjW5P5NR3bWajcQjqXNaDfbmnvWH7jzxWns3UrjK1m2EPc7kfw7h2as4yeUFMQn5YBjE",
  "key1": "D6yLcgPECk45i422i5YaiET37bhg4sjCyXR31TA6ho4XpcnHNsNfqskPzmgtHCYniLeU4YHXogo1ztw6EtUSvux",
  "key2": "4EfXuqmDhVX6PB4ddgqhbj6sXa22U2PpNGWA54vvn6CxGZNVCcyzJVai5qfgwjCfkUhSRUcX3sTLqnnUxkFwKeNM",
  "key3": "3A9FhGuSWJ1wY381Hx6F4xWKRrDc41Z6D8hm7sWQNyQo83ogrt23wpC1FDCTQHBUdAtKLV4oy49GEgHJUadf7Pmx",
  "key4": "4EAh9AKiESDQTsewVfeX4MH6deBxb79TgGQrkpQiTumkJRq4dooHW7wsCvBHV73Wv8vbQwm954NnkcmYxZK2DevU",
  "key5": "3QCyd3h5xP3GPzCew5mh1V5H9SPJbYoQkS3yZ78jNnwL6xbzFk3mu6ULPDDMcXuyuDFZWFAXBXCjPRRsBhbTdTpX",
  "key6": "4zgjVaZjGb7vjG7WoxpXFy2zzumnCRoMSVcuJaVC22W7kTHGd7oJL1N2AhRGuo9EkUXrKE11wxDAQdWadu4C4Bxc",
  "key7": "4EmaMUJfFfxR2NeZPEXJ93G8tCh3FAZCMKMThbMP4b8z4Ezda7vPojcFjuQWBv5hzBnPWQEwUQ4B9VQYJYMmM4s5",
  "key8": "4pKMpUFXHedtoJ43XrNqXKqY4ujwSzSXHt2moRfdYTAk6Jk5TjmX8zPKThqXX18Pe9Kkw3qtauLg7dtC2Gq6QJmn",
  "key9": "561K5hdBBca7rTMoyq3C8vAnngW7daHEEuhk2XCbcSWembtHPMps1LUfrnny69Qfgq5b1p3AiYEZBhY7BAw1omkv",
  "key10": "2k4XLk4LcB6ML2muwXZC5raEY4fVjTWJgKtHsSksJcX5QfeX6t5XQPzffQ34aoqx3C7z8WfQgstMRua8jeEpzjsu",
  "key11": "665e8NTLp3CcPEnoznufNuJGwp8HqQf2cuTc2tg4VMe3fs3rTNmYDXwdVAgAgQYLd7yAPRaG3ms45Ygv6qaHb4DU",
  "key12": "3JARQq1a1ar1YM7JkKAkcZrXB3kUam1wkvcNtn7EWy9z9Wd9dMCr9LrLVy7sxjmec4dhdPq19VkU1JXJV3FGhBGW",
  "key13": "3VhLG66xh3SidwsVvMcn7fsT3zC7N7hWJSkje1bCmGkFKyYrL8aG2LfmxGM5SSxo4Qc5aadobaP6YDCHQct533qD",
  "key14": "3rWNzWp7BPCCJU59A1iFGFNzKZvUUQFKtNbXVEAqCtaVT1CxCqjzeSFQx7B3rQFMLEK4dEc6rfPig3iXuJ2B7axd",
  "key15": "2GkVG4MCiZRUFARms9qqoedB4LDeShtSgaU7HjJ3oJXMzvKQCMdLGLS6rEyx49tDv85Es1WU2gWPa9zGMdHB3wth",
  "key16": "2X5qVk2t2dv3DhqGMpvWAcvpm4LoRLmUvpJ2jkj7viVLXNbSYcrMPTRghzzoGbeXKXy1U8Ka68BuRWMToVLDDa4Y",
  "key17": "5t57eKxQADCsuy18nUoF1cVLWdV7WbJ2V8tv6feBBRyg45pc6UVSER4z2JVTXEmNwR48T4R2awaiWHmDjksTaYGp",
  "key18": "4qWSnyYdLusbmYzHkoKVSU3SKu4mdX7EnM6ER4kYp8M1thd4bsnNyCkys4crFVDbxNkadLqwivPzhnKSeYHnqU4G",
  "key19": "3CXf9Sp4TepvyXXNKybdjevbhHtvoJrSLoVWjcDkgBCWrMvxeVJPPYKempdyGky3f9mq5x8zdY5uFRYak4c2amP8",
  "key20": "62yY4L4xr4Na6kak57BFu5XNS6ejbPn3Q9YjVp6NkMY1ufCtLtivY8zHgujLkBhwH1paWaq3fSBBGALVJrEPnCxi",
  "key21": "5EPskkeB4iExwCi8VaGQDXeNbShAJhLGqpFagWSiVRCyTT25yERXoXEZwczdAdvzjhwD3EKw9Bn3DnfmJdh4ZjDV",
  "key22": "2oopZpvhcHC7uu1jZXf2HDgHmYtmKnfAmATTQdkitcAjUpUUbevoitiNvCMf56Ay6QGwvkaYrNsGBhpDfinbkvf4",
  "key23": "3H2WayokVNnRawYpK3yCUCVK82N3dnwDhxRaMiHv4N221gzcEc9qtAvaGBmgADKLzDeD11KpCypXNc8jPiPynZVN",
  "key24": "58hAv42XBsjzoBCJyZcSAVQb1e4849La69CWwFz52a862xV4w8sHdYy3HYzGQxVeuw75pSDDuZKQeCR9JyLtau7C",
  "key25": "44uWw6R7VC4iRYf8wEAXwzCt27zdtn7sGDngmJtUuoba7KFjzsCa4n3XsHd9vuZL1PLWCkAqwYz3ZRXQ6jTXvGNg",
  "key26": "2hUEdM7Xi7VeVmhSEapPSd2jP9gBsRwoMuMku2ZSMW8cMDUn4D56UcerrNpZzLMHXqgFPbUQkshTqJmh1kpEpmZJ",
  "key27": "65MYQBTzWQ16VStPSRSLZrXXsa1mfmXZcWaCCWGUdJTaykcvfRo7g2WPdvtsySQCYMrmPo4dNVhZtGeQ4hDN2kG1",
  "key28": "2a2JGKJMzgmPaVmuTvNapGFW826SZjriheXM2T1NzGJeJcRgXZFkUFpfRjRRrjf84u3Br8jgsdznZnuYNYB71oFs",
  "key29": "35EA1UD7DKYBjaorzLFXPAVkPuHTKkemY3Lb1YZpegzMTE7M2j5g7egzb9q1EJ7Brm9qMWbhUEQYi6QiK11Au5W5",
  "key30": "3Vbwt7iM9RgSLPzsSFtGuvma9KZDLej4hKc9jDd2AmKng94ovwhde9UHrzAn4AHiPhB7xVS2ZC9AkLvRSv4TAY7D",
  "key31": "4J3Qd9TUrLYRSohx1v1krJDsd86hY1JztuvYw45FihABqXFfBzjnN7cg6BzNtPe8Q8D4Wj1HfE2RFaRgGD8xXVjE",
  "key32": "aXXgufJHuMdM2LC6mju1NvS9riT9GpDxMjw8CzgzKeSRujgRNLU4KFXnzwg5rExqT9S3ksX9Dx4eALP8iGkjxmT",
  "key33": "29QGh5HTs5rzcePbfgmoHaAhcDK1su7jPuRrMQHz1Q3monq8Y2mZwMnBdaYZYHN3F38HUsYuRABvn3D6gZ47QFpr",
  "key34": "5r6UdzXc4fCn1w7aXG6eJZcPisJP9z4eutdK9jkjrdGxsPGTHxRjupbBmgmYbWonutQmMRfArW4CyqoJx52zw7iC"
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
