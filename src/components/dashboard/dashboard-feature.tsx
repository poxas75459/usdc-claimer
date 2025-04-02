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
    "5tiukYKcy34hUZc1SEK1qmjb3nfCpdLmY2scEjqEnu4f1Kc9n91uW6oK4GvUoH3TXRxXgqrrr7geycvjqEzPLsfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31G9pAbRFcTt73zPuaW8fEB4VafbQaDEZ8rggywGdAsAkTULkJpgjFdSYqpAb2G4jyvLtHdPTPnFjEpdzW2K7N5k",
  "key1": "4wKzpyj9ipttWkvQoZRBHX8LCPZ8TGrjtmEpFYzr6drq8UDmhP93QqBRnhjt2e3zeLEe8CAJ39AK4uWmosNjNzZn",
  "key2": "3kUWchGmMqyLjCLWujQJQRAyBfcTXk5MaXiqexMRmrnZmfXKiFsmmBkB8pn9X9wn6KVWKRkf6u3vZnquEae9fKBn",
  "key3": "xJ1MYskm6wmDPAfKfXmcqvZNqcYXMy1mEAxq1zeEa8YKRWcDLfh4S4B4EQ2555WbA4VLk35C9gEFLErL9C7E9Ut",
  "key4": "3QwESeW1whH6iFLFT3Yw5Ufiu8KTMyWnhn1guRCQWch82Yhjm3sTGwoRs7bZuWMSAdnMyxzJzHii2NFz7TZGNAfW",
  "key5": "4C2zNKHwpZeid3ckx1idg3F7j7wc8HEiA9V2x7VqydTXZMiwER3j4vBqMNDKmG4fc6gUNLiZX9VgXdvyaDmxkt1w",
  "key6": "4ms8qPvRDcKRMa1RweYHEgDnFDWvwN3cQgZDvgdnwPPuUtbCxRDytATPuDLv8KYgj6haHU2Vg5y5prMwsxARGc6q",
  "key7": "38BPWEHwuFkZK6a4nRKneosmp938rwTQ3kVf8DTaVRU6Z2kodnBAqZLsWJshnrskZ4bCZVk5J22hyeocSfSVEkNe",
  "key8": "5cceMqSeqGaEe4xDkMLpX84c7k3dJL6jDe2FVp1uUsvNbDo5VghbwCgCXEbt5irBtXrbRq2EqdhBV5NzZeukjsxb",
  "key9": "5vJgLcoCJSo4uqKZeErm49YjvDYM3gxgkvC7Z6SvzXenMrtXVNiCisoEu97CC55PmTYuKJbFfW8De3wd2LDK11Js",
  "key10": "5Sh13SFsXUobSASyS19yRxB9ina111xyquaUrDDqht8xd4HERoqeF1GW3672rXbhPyK2yfxnFuLX8duGhR9eFWQQ",
  "key11": "dMQnbi7dTzj2LJgz4jD67XxFt4spgT9zGbSdz5T2p6W89SkRZ9n9NC9n2M38F9FeREG9g7wX4jZ3uvyqA7zDbYL",
  "key12": "5R3GVp3gg5fs8D44Nj6Bwm42Rf6WSdj57Mt43CMfp22y1qDfX4urPTuc5rzTxUZZB1sJTpizksXVQQSHJtt7VPoT",
  "key13": "ZHcjFHuiTFYgdoHuXcgVSyi4n79z574F6LXPoTkKNKcLnLPUBYa6qXrKfPHwUydQoZUmU4dXyekz9B9QHtze2Zo",
  "key14": "2b2djcHWDrsBpAkgzEapypdhdZvykfsgfSTuTGL8jkFG9D8it5eMwRnpZgNngjUt7yTVsNH2dGQkbTaq6LejhV2L",
  "key15": "65nT6JWRGFHWHBw6zUmQG4jLjfky3AimeB1M2dyGq5wQWVL8xWWPsYW82YJ2HXHN3MHwQ526yTBxvu2YZSH8VZN4",
  "key16": "4h3aWQpckKwUwpdjFvSPQkTeXCop69BR1Y14hDMopG9EqZ2AWbX8aY4SLN25LWoZ1BoNcKSLniRLpVrs8dzaSYpD",
  "key17": "48hikpMvxyq5J7w3xajJUb7ZLxt5VDuQsLjKGYAzFcpbW9oSajUSphCNUPVAg6qtdc8oHYSH4HAwQEsv86QzthsS",
  "key18": "51wse7CpFsBwmcUVqJpemvAY9m6USB9kXq4KowqUWxBRKPj1p5pfGvZL2ZDKgnfVCcmRvaJFhx8HhZiYBnnnUrLv",
  "key19": "GnRP95gwGzxs5rrwJKDbmmbMz67qbvHg8D2We7tfDPdsWxjagxbj2PJg98TobWa3W4Dh2pnsFUZaJzGY56YjTf8",
  "key20": "2mojQQLM1CZmmQG7oeNjNbABebQmBtJYhKvEZSRif5595tzUpTnQwpYUPixp4dSgYp6sjYdoG66PZjPS3MZKRCmd",
  "key21": "4ZT9KVDEmaF9QAE9Ufhizy1gbmfDX3jAJDF8ZL1FRV4be2oEocCaPEfyeVogGH5L1MEJdGviMkoF6hc9JwhPn4qg",
  "key22": "3yCcLMq1TQNYNUdwFGpETBujyUvATX2bnj61r7YmaVBcdir7YX4cg5Xcvz7dJBDgcFu7xKNYrqfzbT5UMRNg3B82",
  "key23": "2Uroej3nCpnRPXYecKZHu4a8zNLgoZPhqXrdrtUm9UE37Z6eBAw1pN4gtMBZJcDxyUhg5kMVrhzVby6TgawyTtEz",
  "key24": "38gWeoAbA21EzUsnCQmN2Nfpb9SwNRfbhmkgry9RWjSGMS17YpdPUSQfeiUZ7cFnekNTrr96Q7zSa4nr4s5KK9vX",
  "key25": "4Fb5DWHDR4JWJobV2Jv6eeUXfzkep4KqbuBuPEG8jieQFEke1mm25qtTZ9K1q6dd4cwi2xvvWyugBbyz87ELQMpP",
  "key26": "5owFhzsvcVF3vR3Wrxdx73TCWQhmAPxguSEfhHDAMRMU3UXKj1tBW7W9aqakySwz4BAC3aHV2MxQfgu7CacSpJ4c",
  "key27": "3EX6gtyRDKdnUnGEwMZWDPdC4n1acuereHtyhWHr3PatcPo6rBq35WwYT8gDLy93JAiZ4g2G8n73qksiegGW7AjW",
  "key28": "2TKftKwxbkNLPQzYxKEuSugTBVitKdw8BLMzvNS9c3y5yDw7jNvCkUAGVssYNgAqdMXFy5GyNtBha9PNLPYsbJ5Q",
  "key29": "5ZQr9BXCojRB9v7JAYWgQycaEhmW5xEZtv46YD5ihymmJCh9DF34d9Qxfsq3xv6E1ALkrCdkbo6WqrL4MjHq8Hym",
  "key30": "3cJxRHtXALt8mEXUWMsBCK4ErSAt98QVx2QjGG1zyE7MyZkWoVcvetyQyvug2MPL3rZfjur87KzUZSiN9fguRq27",
  "key31": "392fBtvTZWs7LKH13QVpSeGaXUehybAvBGG1kNiC1C5Q5qah1nHeDDsRxBdx2eJdVPtwVq9u9uBPLGHWKHU5gta",
  "key32": "2t7DAU6ywRrfa4YypGF7yUZyNPQgTBqKPn592oLn96Hf4ntfkaz36aMekqntwpgTevUTXAmixRuu6TJ8mUtKp24Y",
  "key33": "5mQsRGsyD3wdeFKNaKK8Zjo4vRpbig9AjxkWkCjHNtZykFoLfP3BGpHvJRmXQpqBospiEHtZCRQmpDr3q3Qidycj",
  "key34": "4w3ikbHuvWPQkEnbkRJG7uCNLMGR1deGv2i8N7rmdv5DjCtikzgpyh4tuvpaK5YSpjp1CEd3GpYPSnUrzfqgeVBr",
  "key35": "2Tb8RoiEPWFeQfM5Jx2pW23UovCQ5LRT6qDTbThcEvGY665KdTSthvszv1kySzuGsKEizY26ooPbs7kNtoLj4gEM",
  "key36": "522YN4B5bXp5paejz2fhi1ocF8uT32AgBkd6PHahdDn6Qz4p2tVUNYwYAWinoCJR7hXhuNWZXFiSumXs2rfA8JPq",
  "key37": "Rp4CWetCu9CwyMG8XGiLQqAwWLFs6VVFJi64igLqQW8xXPP4WJg7ng6WVifDXuDu7K5JMKmaQSd5XHCXdB1hfQ9",
  "key38": "qHWHp7f2W6W1GrjuTsqFqt9anVAB5cUfPveuCuuWEM7v9GExuV9SLri4NY55jeyiqFYNQn3RMGFCWsXhQXrKKeg",
  "key39": "4HiTq68AYt3mrF5Hthz6LHQ87W86cfNJgcCA2fAcT41LE2g5ctkjy1SiF2qyFUoT4yK9cYRF9aY7HxQU9jhAKcPQ",
  "key40": "5Jsmqg2aCtNEgs3tUSnUVhrL4vb7vo1YQYp8RMEXcf7FRduMdGQQrUfz9toes5x45hUsEEXC6AV8GH3Dk6Dnrqay",
  "key41": "2bP3tDf7sXyaShxSomFXGaLYoG5mrLDmhexn5xjxrkNDsqct3cMxzfDChFd42woEvbLNy1cb3pCunNJgmR51rWLo",
  "key42": "325yAiwPNfggtQRAmGLdCMXnuQEQEGMyMpQZcDax11URJdUzAwKsGFfwM87DdnGnCUZ8A1NdHLNYkDxH9mj47VZE"
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
