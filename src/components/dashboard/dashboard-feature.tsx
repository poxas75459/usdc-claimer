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
    "5u3cBS6kUE5SHBdRWHy7i5uM6HzYnhdqzjuKSqdXL9YYVY8FZ1ReAgtbtPnejydt66iPym8XLizph1afAAJbsiTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bghV2NcnMFi8VnA7adrLuZpcUaFg3aPELKCiP9HTaqbgRvJ2NqmnVcZcC9XTwYdoaMbLJxeVuMCnSA1atHJjP7Y",
  "key1": "25mKYcybytCbtkn6QFGSX6WsP85kAA9bKuyNoamRHh1ofQnvpxEuGCvQATHjkP9XWoUgpaxiCnZjVicSAuMiyZZF",
  "key2": "2VovyQFTf81CBz1Q7UdAWfYhJsZxEbsrhNsfRt4hMKp6ZKWNpQtPa1DJiPis5mjPuujff41yeH8FBGrJ1NkPoi2m",
  "key3": "5SkDYJbicdCUEpY9jqL5wz3pfXjCocWd8qCbkG1Z9NTNEQh2KHzPSeqTxR1WGgHXgkGycS8XKkeg8bT4vNyzieGX",
  "key4": "4GEVupUDQzVcJ7H54T7cqhZWtnvUv3GjsvtWqZXXN8X5gDJEZgngJ78L8wV3u4GS3ArjL3Go2i5b8VNEv1RzvP1N",
  "key5": "XFaJHL2sFYvZNRtMkGxMia8BEJDELGNDyrLp1bBGPXdWQXtVzDt6rxoaCuy1LQi2tXA7bLcYQ5GUtSUJVAT7igo",
  "key6": "48tgCwxUdcNP855vH4HzJ61U8GQiJcJ5pAjmrjbWABEGEG9mSJX77eQYnVMc75XkQVS1xTCWdU7737rVwmEjBW3P",
  "key7": "4gtLXp1unVh9UguqHRFp2pfioMwacuLMeZuLrmS8V42E2RJWqUbj13Y5DqsqDSQguGwmf1jiZxoS5B2xb98nutVC",
  "key8": "33U8vdh3Mmd3PeyW87BXZpjaJp1UauwZSSN8QzMTPJxkjfjZipd7BFL9PsY7Nq6qY1xqxdF3ax32rHEaFtTP4yoN",
  "key9": "2GfYpkEFdWrxu36eq6577mQCjeofwQqTKjQjQquasVoJvNhiCtU2LjH2b3xUDXsZPYmgB7M8hMXZCdrnLnTWv4k5",
  "key10": "5qkLDazPPApV9Yc5XMsBKD1oCJjYnXMJW5gCUVX6gkNneWv5CszP8WAKhwQkHuE9x6min6RH1ZQYGooa1WF21fSQ",
  "key11": "3zH6sdaWNVTYAgonsCkU1rcMUCPTDKu1gn4VNL8LqrExoRszWRd1oLc2gX88h1a2ZXm947HmetfDFrQMucpPN8YW",
  "key12": "4yvF5pKzpdPWcnjEbWZnrezHncpDAXJ7j4mPjZySuZZpN5hntyJB9QM59uP8RM7P7hvozocAzmks6DiNwVhAzB5S",
  "key13": "3QxofBQWs1EVNsQejPRVL351ypBy9GbHiAxZ3Jrozs5SAA5QH64iAgaXvtG2Wr58LftYaHVT2ZyBp7SyKg4zKETd",
  "key14": "jChYAczhRdGLdLHKxGGYzQ7n4cTSp6WC8neUet852HEgLuP8ev982cBUsnB9QLEwqRdjyteRYoDkDhYAfotMfAQ",
  "key15": "FBgSx5jvWPUrZzWDRMiTtoSdLJCUAAXuyTTeKa2h1WcrS3UuDw8kWGmxRu53HosnMqSjb2Mw67fnovU6grhpzop",
  "key16": "66KqJFyw63djRJaGhUoVfE7LjiNWfDQz53uTikczW1pAvpaKRYHswN6noiXm5NqbQqpUayEJXhfgRrQjzqdLjx1K",
  "key17": "225eFVfzVJg1KhA8Xjkj2s6o81N4UHV6tqGQj6E53Me6eSNe4jLoUDAFS52VNjGTenCiApPN36NEFFD8tjUMfp25",
  "key18": "4aG3n595i2QTJ5igBUZoyH7T8KxwwdxEh3xLkZC88Krj5z622BxWXM91ticsAdw8fPouTSMMMYQfK3Yrqmy9VgXF",
  "key19": "2qvApXnJbARDMvh6uESxfMci24HL3DXfC4aURdaqdKJAdG2fkdp74KMBJhc7feMRVZHFC7cKDMiNxP53FVakQyvf",
  "key20": "StEUeisw7RXTVTBnuBuy7t6JseWr6ru6B5iDPQjpduEBZtw1yYrZsy8hwaHKMaqv8qv5BA3P9upxANq68aN8EMf",
  "key21": "31fs2V3RTC5QNnp22h8KHfDGtTd7XinpqrdnYFFZKkCoVLatJRGL3rEPNfFmXiGfy6b8dz1gq7nocaq5hDU3ciGU",
  "key22": "4KhDPdXMtcVo7GaPjJQkqphJsWyzc4HpHcqWUJmPprmUB31Gh2YiBqji6zYmbeini6ZxezufZXPn9sx11R7sg2fq",
  "key23": "2g4W5wZFNRhqRMw6NMAejxreKaK4Xopmsi1bCHPz7qd6JjSG2V96cAdtqgGgS6gnt6HmSRzBPaMNZtMv7iuftmaL",
  "key24": "5R7VkLxmw1ecao6spJa2xNip34RoUep6RSZ75Q7CrXsGsHniPGGrGbabi9VGxx9SU5rtkyWB14jYUvjEj4DBRFtv",
  "key25": "5kYBXFMakidEYZGkkvtTmVVv2ffgDYcp5zebT1LsUwihHKiQaLRgFWougNjrPTa64gQYW7rHTag3KoBMjoMDWXdy",
  "key26": "4u4pCrUWPEGYrWZ4etHXgpCu4BUJq8Gih3JcHudtmVpjuUGDyjZW5hJVNVJFRsSP61f3cDChrB6vfBZuwAQz39Vg",
  "key27": "4C5UoEEqNqH4fMnsgq95H26rtAzhuRCyn8gGkuq1iUcLk9fmKZzTQbs4gsf5t8eqtbFVrem8o6zSMkmC7ecbwmKT",
  "key28": "Vnd5U4DFVfARZyxc4Sk9HcVVUrW3YZECp48wicBoqLJGPyHBA1Dwuo9zs7WkZwnBYKSdM38ddAQKqBiwnePkkNk",
  "key29": "51AXyrhm5VeBZb47z1JCqTeZfL3CQ9GY7P4TAY5hUhEdUaY7c6rnEqu32SjcBGna97iZZtFYSzXwdDcyC16nkg3W",
  "key30": "HGcJBp9qYRaqS1PtNRnnWU5fFf9njWq58xy39LGsxm251fkP81opqNhtpWDKPmBCZVN1H6YxujaCPDBGepDkB2X",
  "key31": "4dofzCZd3yrWUfKT2oasmhNC83ntxk1j6oNvPrbddvA2Q2DymTF9bbqSH8iTwsEM6SN8kUbVjNZzyFFxAunF1inG",
  "key32": "f6WEfkTZWXrQY8W64iBFonjgggsd5S8u4D3AWqPVR2eLmmpuJgPrx8b3Qft9XXHHoxUmPTaKZTn4rJdr221amqk",
  "key33": "fB8Kh3g3JJ59Rr1UNbDsrn3cMovRu3s3r8dS5J3HvHdKuqiLetNfBeyG1RgPC8VxGbgW7T9TDixTBmoTnj82vp7",
  "key34": "5LMfTNmcqiD1B4hWHFCx4ySwKwFvciDHp6ExgAA51AfXkJ88h8UH3M9oHPGtc9CrGpFGt2P3UuTKENctLMQARFnu",
  "key35": "5K2CGCP1XETZ43tVPwSr9RXa74cKEC3EzGXrKuNdJbgKRE7dWcuPjBrPoGJ88veMAnfY2LsPNRMHWsMtLgGf6dra",
  "key36": "2LE4LHvUABvLGGU8NYDCWGjNMQmH2exaVCxBY5ewtyQN3d9Bp62v8HtuVbpQarFTBWiNWiRVGTE5kzdbW1EYzMUo",
  "key37": "2zJEvG2MjkoJ8pCsRdZfeHXxfmH5GfsYg7epMKaxVyZAaSGKB3JYH9XPjPc7EmqSjjewZc5Ttia8HG6EhK7SZxxu",
  "key38": "26g7RoK6VXK2zRho454UsWu5D9hVtWkbZXEAbRDqmo5XbnnaFffYboH2twRjdgjQJ2oynkrM7SCjtHT74id3LScH",
  "key39": "4iUz9EscGCEW9UDPZGsMLAQiG8RqHR511eDg6XzXSsAkj34Dtri83wbcaEFggMrwWSJf6kMUwgwUVWuEQE43w6iH",
  "key40": "2ZdJabCsF3baco7ciLYSffug48yFQCra7YA8qpgxgVMb9pok94zXESkNPGp69ty3L3ihhM8JyV9A3XpDnRuzCgMc",
  "key41": "4diXvD3rNncxWhNFvx9mJZJnKWXyWno6VjVkuwz8DaR38WTo1cmH62SgxNCfDzP2UiZKSGhMZVzrsy2XhB9habZ5",
  "key42": "4MvMyW2renyttbnnvhyzi4Lu5tXdHMFRcsi3kgtXdf81vQm9dHE6ncXqHy4DvDjC8FoACXFScrMTRhxoPX8hZURs",
  "key43": "4aSftRancm8zySucYsvvs7Jez5ASJqEjVA4Ga3uRexWs4zE5HpmhGK9S5gQ4pijMpsVWteg3n8vpmFxt5cVs1tgb",
  "key44": "QDtPibcF9Er9MEVCT5nvdBr1YMidsx4Y1iQjzQ6T2vmTiZR5MpXbCFtuQgSKgrHTowpH6zieCxtEn8FFxSnxQVT",
  "key45": "5pYKury2kj4vtekj2jLgappYPKZSW8cq5KSPHhaHb5aaGDAeRkUZX3uhfrY32EUos9SRiDsRjzsw3EgccadJ32D3",
  "key46": "3K9yN59S9YJJNYeuGkVgMMAQc3K3KPHVEmegPHWptpxXLNMfK6MMxZ58F3vWB18sZsTW7nXRhGCbULXZ36jgjVSe",
  "key47": "3RSnFMU16tQT7hTk1PYYc2WzX4teyn33wZvLuyHSBMrwJKLntD9Ci1CEXZfRArKdEdhnpBi9u4sNM9tQPRCmECRx",
  "key48": "5ZkzHMcVRYibc3qHPtQYJ7xg7enbnhpq6BMdRmdHm5vf5NAtpX52td7etuVv8DEom5QaW5q3pESHosoZVbMX6NSS"
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
