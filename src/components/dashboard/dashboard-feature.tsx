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
    "FHVGbZgmHMnYthacKbBT1CCkptCqiLCB6iUWGEWTtaJACCwyQmexQaGQChoN3RFZcH48RvmDGuyXCKiqxaAcKaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269w3xr4SwgytQKffcPs2SsW3rz5Za87zw2mxcUgpKeWVGKEePYmnu3eMeMy79p8FWUjrts62ipm85YHighLPqvQ",
  "key1": "62uSH461vhKb7SrLx5nCkHvVGnCzBQZNuik6JD8Ftx3P22BozhpqEvHy7M8Czezp29kSMxWtbAVerhz9eMCx1q2u",
  "key2": "5ZuDf7bDqkNaHuh9JfoQSGBrVuvkTndAYDD7waizWgRSoj6k8qFJNNMFhWhM9PN8NzV2mjVjRDoG1TvTUWpDEdbF",
  "key3": "23YYPknBLJ62KH7PzPK3Ah825K873oxb5EeeRaFFCcdN9qaeYfwcDoMSAZnCoK8YzfjbTu4NJZBtqxBDRpQZzLqa",
  "key4": "5WjkqdH6cSrW9MpG4kneSA7brjy2cv1vfb7ob4f4YZ7RycHgHvxTjW6gWmzEHWiXhzKvkTZXAequJVeTUtkK2JBB",
  "key5": "2WvjgVozinMHVwn9nUgipGZVKeEYJaZjTo63UNk6sP5HN3i9Emj5iSFUBJznLSFzhHSNTPNitqPwFvEzZJND1ayZ",
  "key6": "3dtzzsGYYynvCanCvoy6ABucKUGdoQG2kBV84esBaJu1os9mMWQi3ow1jYH4dRBuxdqaubyj2fFZ3V2iKysphWzC",
  "key7": "5T1oHXTkwKxRaaQ3AxVFsMdhUerwnggqf1fskK7fAiYpWWU4X6Sg1yALhUh7cqgoMti3vpyGNL7VbfYxuUtWT33q",
  "key8": "2zCB893DpYpwXTApu7ubhkSHa1xLUz8tQ83WjWsKNuRHeAKcCYW5NKV5tgd2N9DuPnponZuZnP9L9BgHbzTHhK48",
  "key9": "5n8e7CHyTzGbDTWCE5Pkwy8bBQh7ujjwQpMp8r41ojMU3CdpUj7P9wfqRaS4Sa7HXnSmDUQtPnFxZTqJgC7azdh1",
  "key10": "3Fu5PRsGYK2z4RrkHVqqGVnMexw3FzL1rHTciZiXJs8QLpReE5dczDprYKPy37GUNoELTJAkAPToGRwwXJabsR64",
  "key11": "4JqwrQ2GzQGaVRJwDUzSgZ6vnYXb4G5SgvmPUjFejCdcykWKNViZ9pj4oM4t7TzQtvFSKJAmXrU7WshcCRyw9QP8",
  "key12": "4vcTRsoodsdek9PgJcZ4BFQxNGu2wkbazBbsJuMDJ7CuayovdNPx8MPy7LVHHd45QHJGnCDTjmZGG9dcuKQBT2gf",
  "key13": "5yQtekTpMkc9aqkWASF745dvisY2cZW5gBUU3T2LmW3KNQs6TdiTueSUi3FiiTNMVqgGWnPR4U3LFmhVJggsPiQo",
  "key14": "2qPSFgRonDvibSMmMHVBgS3LQnjmX7JJh471K2WpwFB3CYe7nnyUqqR2U9hbGdbJz9ewzwigntWTBafWE92zWFJ2",
  "key15": "4FkKnj2Umx7AApoFH5HhJHWLz3ZZXrNjE6Dnrawzk4amHZZfehZxW1KJy7Bqwhy7rnxp5Sb451vSRbpJGsADiDYz",
  "key16": "4SLvknT6UbVoE2HRfikBv8m6SSgBzzDPkg7UvgDDrjop5xuxQGG1b1QGj1SrswHd3JGPozE519YGzexdDjstPUUu",
  "key17": "2fEdecCqNJwxF5svYTn87knoLWy5nn9GHGpgPpVG3W3UdSo5H1VjcPqYG9SLnvonbs1YougzycoZo9VvQinJGTKn",
  "key18": "jARUNUy93J7ZraB845rqXnH45bJBJnvEBQTQ1n26YA3ZMDmJhVbiRQMJqow5wDDBHSwhbmxKo9yAPRLX8cxfJCx",
  "key19": "3UgoxKiiGGkaA8T5a92CsyfYRDxqAo38f12YnCNwTk2RU1WHMPv1eCuSQw8qy3cDYMzbqrEceo7LyVVUeEuHvCqq",
  "key20": "3PeUReCBdDBZTKXuxScUYzpSvwnPZ2sPPzHbjUDXDHjEcN3Zt6ZgwrkFLpHBaRP7JYHpixwjvJNbNRuqfbfHjhfJ",
  "key21": "2cZiDiRm8tPaeGwEZEZQj1r4hULJFCh5FKtYxW49pFimtzMUvRbQyk8m9s7imZidpMegtJ7YrhTB9CSgzuEduyfS",
  "key22": "4fnw2KCQWe9ikytezjfgUn4ZbrXd3QWaRHKTdvfjGJVEYK5GqGRugqGT4Pz1vqF3T4uaDoE9T2X1RVhAjRmhn3MH",
  "key23": "2oiUcbi5pyXcvSSqNa44z8mjHTJuFUjdd4oprZjUJ7Zi9J4gxa8dF5UmTDLzpquGuB8sUZTAt9bpbvu6o5EmV2Su",
  "key24": "4DneqxJd84QEKn8vgtBfZTFUmBNp2ntMVG5NByX1XbmUKu4et6EkSPFsr8fppZ6nFZf8thUBnUw2HMfGuRtoMWbE",
  "key25": "4ECzd11zqMBU5NXCVdgLfPdepe73W9zmAUmHMjcXKNV8BhyE3RUSVFABNwq2vGQF61KGUAB6fGzJn5md8qHR3KRK",
  "key26": "2TYsT3QKhSnUvjuravzaKC67qx77BwMCh96mNbuHqo5tydEFsXZpy68ToPGSgiWkfCZMWts5rwVqd1438fEcXpnk",
  "key27": "5VBJcXKreGGifMasN3FMJW5nTDfPfRoGcmKRu7K3eoDyczBtr67jGC5LwdAQtPdqzUW9rs85evJxuoKVBiJG9Eq5",
  "key28": "t6zKPqTW6JoqPgc56aNNfHNNTR72g4nkHunQ2dTJzeTvLBkMXd61xsV5g7F9Wxr9nPHbE35jPmcyuNLcDpSTEhN",
  "key29": "pYETRjrRep5qLdWX4mf95LGcLpsiKzK222fTNTni6fL9yRSXPdKVX4d21HA9pDveQ9F8bHRTrqeaEi6ix9JfcmN",
  "key30": "2bVRhDp65sHzPR94RUyqCbk1vb7ZQwELorNqLZjkkEKBDzkhjinauYWoRPUVyKiTcHhWsJeGq3GAGvoFAY7wLwj5",
  "key31": "3zjY6c7J9RuotU41wVSLCCpcJNXDA3tTu385t7nXAjfX6tR8yCdkG464NaGeRipR1w95mscJjQ2NJZFyhGuaCKbp"
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
