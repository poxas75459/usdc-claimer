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
    "t7nKJd2xGciPjpvw4EXxmexY3zRmydp2rjBzLH4gQERL9NyxxwwBro3B1qeyVBdj7xMFfFz868LnmcAQZmB2Jmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YrMsSnw1tdY1u6AkzTxA7bQnziHrCx3wFLDWe48CvZkF1pjXAu4FXYHGrtYZy7dPe4vS8eDeBKoPHgis6cHNGUX",
  "key1": "4LYQ6MU5hxCojfVCM88gTdHPfEhAoFwJeuxinhmG7hESB282w3ANBYZfbM4nqe5MVAjLd7QAv6ZDDXNz3u7faETW",
  "key2": "3qWPMioRynEbbGYphRm63hkZfhcHniocZEuYZWvadFeefpSt9vMsMb3a28p2VoNsezAQnjJ2gVw1JLdPkUKz1a2C",
  "key3": "98d2W2FNhV7pAkyzYuGN2facidFZWRKTAuPTKQkjcbBLFcaagQ6WB61fF6uUWdoQCegTxhaDjq8TU7EavRxMyJW",
  "key4": "2jW1a2XzjSobZPRUbyEX5zxdnqXR8JUv6FnY59WyGPus94LRdccqgDMDrEM25RqTfAEnYV8tB1UDnXwEowEyRvVS",
  "key5": "8jnTAXZtiaamLzKKfz2n7JJ3KgKGxwzvpkEKgBTJHSYkQzkzz2azGmQX3dfEvmkqoyQYPSSorZfonSUKwiCd3xd",
  "key6": "z9R1urNmiSDQXDtGJvWi56SqvueQd8d6RWBRXgkvMK4ZLjDc6xnpBSahzx7sVuWVX4vbyu2aDAD2xPTke76Ug4j",
  "key7": "2tt4Re4zynjE47FXEK22vdefTydBGDv9LuR3CTTQ49kkrtQj9Xma3zFswUcpQ1zfGpJR5CDC4hoxNyEuHwKTPWs9",
  "key8": "5viLN1vYKyu7hXnp1Wt2s7GoyXHs7thsaATpB3bsWcEoDrftrq82WcoFhWy8ETNpNGHDKkbSbygcXPGvwWpH1eyD",
  "key9": "4JQQLP7uWcW5sbURLSuzJ9xeo7jTmaxTRpbBmFErv9A1m1b5Fkeq299daMHXThvJwKvLvqXCpN7i35oXTd6PcT5R",
  "key10": "63NZo2FDWmPXNiaY6rjUAQjfJsXcroHye3M1zotXw3ESC3YD9H6hUzygXJGmT3HRk2A7vG5ciDRU3pknYDtMsSCW",
  "key11": "puBaVxKzeQxUtdjBHnCzjREiuhsAtRagenD4iowM3exER7wnD18t42bT7kdnXA698ywnmBEQ3QTTgZLFJiFSDeF",
  "key12": "2jLv17oZZaNf14KfG6tgtKvLPmCXFobH4dKT4HHdYMDyJMMgAkHHoqjVj9V1rS9irxB6vQPree9PTnWzTVS68d47",
  "key13": "2cQXuk5CCq56XneB3AyYXf5ibowm4VxgSyGtzUUF1iBJ5n75wZQX8nQT7z57yKi4Nw5uxbGGnGx4RbuZADE58KXG",
  "key14": "3iJuggFnwAHRwBuRUH6hT2K75FN1j27JqRWSJRFdtTkPToLo4bBPdCFcgqxHHq5X8A3EhP8y97XtCdDZA99kvA7V",
  "key15": "3PGjt6tRSMprgHAKrJsoLmyw3rtiJnk8ngL4QxusaFR5GpvXq7sJBsMzYy51uqGtphbqkjC32ERX89irnaeSgpAr",
  "key16": "VpDZqqAKxjnVwiZrEqNCZ7JzUWpy84zY2NpjnRg8gr9QB3u2iY7EEcUVQmPBJq9fmVUTevuprd6PFMb92nGFaz5",
  "key17": "3pbL7CPKSGGvtoz6YzoWb8KX2Vqqd1s1pmWz4JazKSbTFBD2YSczUUgnKc3xnEyqEQ7M2M9xRntjjnmEZZa8hokH",
  "key18": "5UByKHPLMG32aHBTMzFbzPFMvXzf2K6GoioJSiQCrULWsM21RpHrWbng71Lmu8oxyZ2BHF6dEHS4H5qRY2VGwSE7",
  "key19": "3mPb5RnnHoyq1jDcdgi4N7iA7TML6TSeBoKEb7vDwo7eh5Rc7mKmr8RzUZE1jfqGZ4hZyEFr6rPbeBCBmxAQNz3W",
  "key20": "5e4mVZDHMFcaB8U3o29YRZg2E4Zbo5o1AZzZQSdDSUeP3EdVgqjhjtv5imbx2FBxZxNAzj6saRD4YHwu6e7APeyG",
  "key21": "tyc5QQFp7qE7D6FFhgW43hzk2yTHm2bdaY53BmeuQdRFgWtuENK11kYySAALqd5Rnmsr7XBVbAGsQTALJyR1Wr1",
  "key22": "by7tbkD6o8TMGH8wjGEGFcY5coQidQReVXEQu9b3JwGkQ4LVB7M2DC9yKtp4ACQn5PkXNCcfjD487YdDstEX5hc",
  "key23": "ycCFCD86GozQn8TEZazhvzDDrqSTzfgcfXFNyHJBfkErKwjR7cZUQmXgwTzZwGPH3LqDvjQd3GAXPbbtouXEdaA",
  "key24": "3PaHm4PpvPciF9meMXvPW2NkFwaQhuqedJEPaEAFZ6eQ9yEjhjUwGTxgwwUb1K8oeSKkcmyUCYKzf3hNWP1CCKkA",
  "key25": "4iLvWZo6beRdAccgg6TWi9ULeDuz5XpD8UxiyG54PtrX7E8BBYkC82Co3HgpGe6wyxb4ybAPU6Ed8rdMfXfEqYzb",
  "key26": "28JQLrL6uruoWJbZYa2oyNJhLDzfkssDWkPnxKvHiRRRKL7NP8n2jvKnDDTkGSDDf4JncbEBFpCfvMFuNhhUdtw7",
  "key27": "W3N68J7bvCtrSMBtU1fejTwXXk7FtQFGggpqyaRgpRoiEe9VZEtDXGGKCw38d18PXPXoCQJNssGT7qDFcUwfeUD",
  "key28": "48sgWRMzJbwoe8bueLPZgtCbYBkv31U5ZC5MgErqUseCmDQDmHvM63zHNbDKwg1uwzCD9NbZKLMUq6WpEFzjQ3AZ",
  "key29": "5H1nbWiAy3Tyzf2JkLF3WvwEq2UjAkf2Cwd2QJqN8j6apmk64uyTK5d5z1JuqoZvPQhXgf1LmmXE93GLP8Y7y13A",
  "key30": "61dAaDUdrieQmBN7HRPHDGZytU2cJBFFs9LFF4K3XG3XxPjaitAr6nYPgtyTNXAFQ7ratBRND6vv6c7gz47s3WjC",
  "key31": "4QTwkm54nvNJSnQFTaTQ79aJ3zNMD4i1m4JGfZNvRLqbtyy4oDrc1EELdsPwsfemQv7JDxsSiJMkLqWk1pYMZRCx",
  "key32": "5QrJxyx52MHzXChoyo4vjiUV2VRf2aE7kZEcNY3nbj5NtgqUtJu7WvAHL8rkwyrW194q1FSPUwQVzbdNLEfapgXs",
  "key33": "5mV373dKKRM1y3bwRF8qCkGqpsZ2Pq9aBKrbVowSjyEQCKAUoHbsBaRtu9u3TzZR5xd7xuHyKtusGWsNPeHHCgGy",
  "key34": "5YV1y6KGUCiMqtXUUA7GGkBCVGMuZYaLZ7BkeBz3LtD6Lr649ecTjnwvob1AkDjJDu54YEpy8nv3dzYzTLS6x4ik",
  "key35": "BPnv9kgUWQ8HWPW6K9KL6HLmxP9pwKjixCMVM4cFFJyboBD5NVHXoydyZRzjXD35yDmkfRM31af4s8MPPqNaTLD",
  "key36": "4N1TURqkUe3t88jQNrr494MYMzPGQJACSa97eYmK8dgaVN4yPdnpEJgtAFfCFQYdJi9MS9Wm33vFygp9STRDsyA9",
  "key37": "3qHySdF13LuTBSHL5ELU9E894kA2cgiRDQw3qiPVuF2ycHKzBirwA9TktrcdeKAb4hcnmbFRSx2sxHHqX2vmzciS",
  "key38": "5t1VHBMJUMtVjHph5J5uiQGjHYoErkpbSV9SMLy24J82Cy2civd3v2EcjQyQaihXxuzYXPABg9pkbbBrEfdsdDpw",
  "key39": "2F8F6FidvH1rEoF4JopKkcKZ2QuBNKB2v9v41APRhJ6MGrQQe5xRms1XbCrZX8yK1oCz6YDfe9b88tHsj6NKy8pd",
  "key40": "miTorCRTCNxx5SLSVen1mEzyF3x8ymHfm2Cyu63uAy1TDuyRymjz47TWW1Uh9emqEUBuS9y1AjevVPXwmCdqvXJ",
  "key41": "N3SqBWaZSXDDiXh8m5dRwdgx7xWJa3QJGE5vEeMA2MT5PFn4dm7vZM1zoG8oAiLuk5bzk9p1DtwuRPfLAJnTRmt",
  "key42": "dUteTjzLSaq8fxJndH1jVfY9ooAZLPG1XdExmEBgVUXmfb8idqPSZiypnumcuqAaPa1ZsGECR4FurGxuXjwD4gP",
  "key43": "41t9SxMfyyahEwc5sJLPKtsberMxuJbrjwLVK3mB7Rt5FoEDjfPTTASefUzzfXhwCrkrXuj8MS5jpH2xM9i6LGMn",
  "key44": "5RxBrCeKL9FN28g2ufKjLP1CNQM4vn97ghzCvjpFK5PDP9bALb11NKFesf2brb1pEjQ1x3bQgxr31ejhM6GjPtqt",
  "key45": "rEksmZZUKyL7ZNgHpoeSWt27kSMVsitAKx8K58fPagJrB2ABgc3qBVRJYXNLJ2fWSDWxBmwXfeP7wHzM5SS4bpw",
  "key46": "2MYj38roeN8Y2YKwtNqSugQVoBV3JA1yUj5Qwnggq4obvaQuUssYdEvqtkS7zWb4Tk2J6sL2JaX3Ns4kuao3Mruk",
  "key47": "4UMoMJNyD7uQwTzX1E11DSRMfHYrgbZqsRS2n9Ye3gzW2qAhYiX7mrkWeaDGRzNkKCjj8DUSdnJXy8TophMAZKqp",
  "key48": "2BsFh72ntgxeoHRtyiNEYghhWs3GJ9zXcXSxr2YAw5oVaTyNy3HMwnrabgm31Lz1CxFcfwyM9ZuPgeFZLqruP9AN"
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
