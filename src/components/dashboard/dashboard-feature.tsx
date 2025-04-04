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
    "P7XGyXVo46vg8QbUynsyHoXRCaV2AeHdd3RrYNRLVQJiYvaee7akUyLchCfnjmZF8WwXwc2AZ7zw9oPEHHpL6Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKupZxe2Z3PaDKi7MUXAG6oBfSzyqpjsaMSxbY1hTisGYR2kxJwRFekqb5MKB5DQmicH385HzuRYJSU3EcbYNGg",
  "key1": "2gPYbGbFZo9gkGwtGFVLeeLNpbPn4tY7zSjuuLdrDTbWSPZL57SefgrS8KyucWuAAdgmAgfHq6HUuKyFCFoHajhf",
  "key2": "3j8uneRDZtequ3VBWdrYauqbBwZRv65qTPhhisdb1zngQbxfDdDhprgKjHegWiv1QMR11pkeUMGMMn3jBt8d33bP",
  "key3": "9UQ1bixwoTGbm8qPxntYTUBZbNmyYfK7kpBPCTxLJX4hCX5zeRRdRCMgm6MnEay81iYJRJiYV6aDLwW9Bo8TbVX",
  "key4": "34bEjrUdCrYgVjF1btaMLfKpUpw5XmB6uAzJrXqijZ3XkRiEzvpvwUHSmv4AWFUeU2RPtoN4jiFoisUL4hqKpqgJ",
  "key5": "28DnxWchgDQ2bAi7qK1NmW24qfALWUo8iF3Jcmgb5pcoJBfGPw3YQ8um2qFx61ivuCbt4m9hfcJprcscBnZqRpbc",
  "key6": "57psUgTM8a68pVeZFyo3XcepaGEF7jP3SfiESHaBPKCBB7LzaGRo5UL5iCwiuDwzr9F9eEtEbKjF5HEizmYJk4jS",
  "key7": "3dbDzrGBV4r1kJZYJqSizWtCMy1aBTJ2syLZAtAB8kc5gSbnBi7fHgnhfqeeYAUt3cuNiHtvuE4Rc9kW7CPUmTdj",
  "key8": "2VSjYDLaQd84S2EStbfR5Tj2SSrYeUX9UCAkh58qzujVguVY69DGSnrcEJayL8JraxaP4jmtFde4uGpcgVHWwhd1",
  "key9": "2Wbfkda7cwhm2CBCF6tXoWh6bWgxg6xGLKtaY1g1PKyVjGQw98QqgcBqfCAF1czcXBhCGsuZVjrGUjujW7aJWYEJ",
  "key10": "2rexZL6aUZ5FiUxgoH1HktCZzw4nnwD4utkGHubcjBwzg1szJkiEb3CWHyC2k7JwDi8n8TdYYMPnANbmhXSM1vnA",
  "key11": "47FSct1uhvQQvWxkJ47h4tbB53XvEqa6jE2cwqBa3AMW7ydK9TWQGhknvdgwhE9M9XJdArbPjgUZj8M2sfd7nBC2",
  "key12": "64meqsLDdC3qXhGNowYnsGGxvFu2wgmonGzK89wWomcu9g9Yjt4NVpX6Fubra6kA7qUN5iZVxjLyD1UUbLqjBRKf",
  "key13": "2tyRyqhWF3gX11HpMigisjAaHixdMekcyBDK1rh79dk8BPr4R45VS8mNv1j9kGkcvXswxbQhj6JSAtYGGAgNSvoR",
  "key14": "2Z4e4pGD8rHUJffFeZebErwsB4yKLEEMEVDyGEvTgi6fxoHwSJdmLZXHeHbZq1k6Xvr9QrY69sBUDnHr3199xQDD",
  "key15": "5xzyGCSQqCeBbtiaNvbs61ahPV8VkhvALDaNph72gppX6VQUtatJd1Q37cL9V41MpvUgFgXBiFyW9HXgR85HLmVc",
  "key16": "5ZMw5ugEhDnRwAxLZQHdJz8PML282rKrHgPFnsFbV36JUSg94s8drh7emqG3F9cmYfx8k5CVockE3mKdCeFW8zFf",
  "key17": "2Wuro4wRSBhbWfuYAKUeLCUehy4HviZKaCHmcMsBv5aSiBGAvhmn2BkxybBeUb8HaWye9nrfNybvoFqXJkWJtkDK",
  "key18": "S9CPjD1LJfA5vZoC6akvwn2UQ56LY4LhnDZg8bwKgGqmGMoHGzMbJV3xTYBUpFjpYrwEe2QBNQBaNjEC6JhNG7R",
  "key19": "Lv5zyt3WST175gj1rkEQCjnMsYmmHRjonCpGTaJ5FoR7QnUxiAZEANvupHqYchgUTLzwMgTYXMWQKV2sKVQrU5q",
  "key20": "3DvS1pEimNGuygWVo3ZnPaWDyuK2J4f3PowGUMwZ8A4GTGb7R1WN9t1Cwy61cCBm9EvrbDoysHhVjTjj6bcm7s6y",
  "key21": "3mqg5BQx41S5dRDy1nAcXzaTocwWVfzJV1C8E5nmQqkn3D7AMQ73gYPWu8xfbyTuQRndKGXFY7D68c3Frbc2tjtP",
  "key22": "52JYifqeKXJznt1u118gUwTtXCt4JeYoV2ZkLCLUkkP2ZeJdeHctH5qJ9hayjrWUXwHzacYnDbDiQYWBHJudfk4N",
  "key23": "3LYEc8Kk6qoK3rKeTgSKTNN4k3zCaFumTi1sPGMUYRQWzi58yM8jBCJyGtNkbS2BonWLtSj2FyxwsdwvRoeU2kbp",
  "key24": "4Y4r2jYfh17arBE1wPjPy763MNSvk5zDMZk9PSNSbZkYntV3c22R1kqgZyU52G2pPQ27MTgbvdyk7CDN5RihESDN",
  "key25": "3vTKQ5yv4vx1K7EZkEdnKc3W6um26PqsNCzriFNe6meM1p7zGMkYq8YxwKL9m6GpUnQc9guX5FbZLqWc6GyBWLCW",
  "key26": "62HdnMRMKfSwVFtrX4eiLhVNn1EQrCo6kLjH6vRRfn3UfjCyj4JVFeATwxu9d4y9RvZbTmbDx99X5pGnR65ah65z",
  "key27": "497Zp59wY6nkrRaQVsSxBKGz3kuGt1oWDadiWSisn1Sromj8oDjZznFtDKPqyTvWsuvE73zdykQ7ipUdCoTDaR4C",
  "key28": "3KvrwQWFDs5dNPjQrBoyACsiwz9Qp8bASPFBEgv9TY8ypgr9r7QZYsmh7QiZxs1RNf2HSMDotFg1j7n9ceG3UdMr",
  "key29": "5n8tNEyxAUwsSFwWuQCX3MwjVg8FnqKbVq356zdGmfyfsaJYWXHej11rDAs59Pc7jDiuf11Ejc7tbrPsu9LdMa2o",
  "key30": "3zcXcG3UAPo5spZHRFyCXJRW56r6WAZHmqbU6g1Pq9X6eGdvJtAxoHk1BU7YnrUBURhiFvMDzpVNqAwoF4b81qHA",
  "key31": "26oPvj17bwGFPtc2yCsj5BtqWmLKmCWY4u4sxHygr5wwj99t91XG1J9YaZ5jwzx2YHE4RtYJhjwdttThCFnvB5ko",
  "key32": "4Sa5dvTtkHCNwkzGDKtwTZWL9ANxDFqAdVbGXf3TZPu3F1Unpt1BBRGL3TFKLrGkyDwzAzvLFvamKtRn5Ybd59Qo",
  "key33": "fxsa5BaDdRAoJoYoEi8NTSy1mEgkgC99WZdukHKGXrCY2cgDDsuXb6PtvsoDirr5p9pzEywCjKChiaiFvG6iWK3",
  "key34": "4tSDtwf8f61jjj1jBEqKeW4dfpRuKaKuzPP9mgDuoLt6bijTgBTXGjxYqUbpPsG7bcn7ybzwGS8n9etsj83mByD9",
  "key35": "4ano56d5dXZC3iLH8u2GizH3NTXzY1unYRbGrDNBznk9Bn5V3gaHE9pPbneHiQS4FbvrmcnGGDJeaycBFGoVqnuh",
  "key36": "xLPzNzWRL5xgAwfJwzJobZ7FTVyQBEdRPy3VYYVx6SAqcRCvBer1BsT3VB4HCSpjgQzceVZRUuxJ9jZKS66mZxk",
  "key37": "36gTwSmc89Vby4RJTCwgsWCZtyLe5fpdTSGM2td1Ywfe5hwYpGEzX3AzQ4HP3t7HUaWDCJzCR8Dba1E9G4gBt9aa"
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
