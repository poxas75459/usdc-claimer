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
    "27oQScmfKL8Tgef5N4AQrSnW61FYAwU8VNzXYTcw18Muq2Xqp93d9NAnP83V2LSXtkZSje5qQ3thgE8oUsinhiDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6D6fmCCYnUWtNEG4nX5HA7gKT2vsU2ViKecnqEmFqWv73CYdmSQHW3fJ2aPqtFZpHmRLjMaHcnSYZnDtdWbtVi",
  "key1": "3PekUhndcfgJ7hCnssJ9a6Snh5gCixMfkTZwCb94EUTyjvnqwmVvqA4y2S2EUW9UxpneuhNQEy6y2saqUjG5cho5",
  "key2": "4W9QpqizTqzLRBtHTMixYs9FUVzriRts6R3zH3uvwvjAV8EiG8u1UgjQUT8guNuj2tttTjkZhcxnqmCLhcLnpdT",
  "key3": "3hfBK72YiUW4w4XyB7ptfCRpdK8XR6WJBeHtEzEMo7NAriBJyxAb4YaKfZ12rSKpoEKzeKRHzLT4cShcC7AZVTFP",
  "key4": "HYLWJBB9wJPToBxjNz2h2Hca9TzqNyRosHHaGANPT94R6Z8XYR6VXcc6rvxHSxZvzpAE7fB5WBeCncFevdbWDVj",
  "key5": "5cpKZrx7Sz99myXJMTeEc2zfr4DdfSsNuQCx9QbBHbHafHPW2kETyv11oRgTJRrSm1HqtvsfTJAh7HHLNUWmhiEP",
  "key6": "4fDwX5sA8oLFQV9wZyuapksCzqa1RQrtZV7Te5Ty9Yaq6CA69GU5uHeVYuoX1fA8P5PQd52v6kF1vqptR84MnHFc",
  "key7": "aEZh7ZniVxDB79RR28hG18reUGK7hbHETeCFazKdo13Sw1bGufQBYLDUYeKNa4DLZtLyp7SBqMZQSXp4gNCWD48",
  "key8": "3xHdP8czZ8ydAY67Voh4RA9EyJmDQkDwCMJ1F7cwa9P5YAC1kFqcT5x3qyS9Tmax9kXpPiNoP6xbUxcv8TY9i93k",
  "key9": "5xhV3hJVVxfEtwjfB7qkuyeNSTnSWEWpChNPyZT3XWnFhZyP7egLJwUkbtTpmYJi4AW1Lt7adb31QEqNAApp9RYi",
  "key10": "59EjFRrPCNRWrKEndi6oZ6HCAeU8temH4A4UKX82x2bjjrrYNnmqTUHNF8yjHEHNMd78ap1zB1fqZXDbanxgnZmN",
  "key11": "j2o6S9YEAVqqrMUoF5QoVwSHFtYi5ciTwFw3tVjS3wwyE45eLrkBTeA6z7q1A3YZUsho96bLSpmsVaU5m7B64kg",
  "key12": "2yzkuCS72PuAhpniirfedM8Tv4aVTfn1QATxfnQr4QJS1JCdUNfvhGyTjQZTuqnqtutnjLYUN57rtDkFYm7R7wMs",
  "key13": "yQyfR5tdTS4AuRZci6nsyuGuaxfpPnETbCVjoLHZZ9GtRtoz1QjSNiu1fX3RtHihrRdvW3sfzYZbSaiJoMmzQ9s",
  "key14": "4RgoNbxyZwVwXkoMgV7dDFAzoasv23VDUiXDggdbBgNZCFq6TV6Mn1drshCdvJvyVw2CW2LLpgj9Do36FLjSH2Cd",
  "key15": "GQpK7VfegJrWqhBqT68Qrave7naBHtY3cwb9gEpPHSwTHK8z7WbQaRPWJN4s7ggQ2pcp8opx9NKaqz2sWbaDPso",
  "key16": "b9shb2aNucDSoDYWpg57f4UvmPkpgM7gwZ78rNo94BPEyoPVmPTu9uXGoTrJSfkMvm5uw9LTVuk94k4PxtDqWaS",
  "key17": "3dvam8y4WVHJwMzuKY6vUFQMxnQUaR93vsjj9ixAqRj35LbGxYz3cvhxNfxW77VGYRYf6kSM4muzLrzqhy49oNFP",
  "key18": "3rMqZtPwqY3skTpwuFnoKyYMphtAeVBLr2pPyMNy5ZMpHmZAJJLbmzj4wZpi2zBUcUZXs7FeWUH9JJVvUXf6ppMs",
  "key19": "4BbmEYmuF8TXVt2wh1jX2uuLyonZSHqwcGo2UDJf95B4GW8NVyVKminVf4SvxQggM5P7u7DQoWGECao6siCXbYkm",
  "key20": "57tSQeha7eiZ9G8QjdLPpCJfaQFp4BpGryPkbsSMRFryPNr3muRZE5h4LkGR4TFyh7QT1e5P3Zi1nL8RvsQ8VeZg",
  "key21": "LiuN41DDkgz7p9T1mNAxUVnGVy3hVYjLpP4bLMzvVs4d1KgBnEH6StHTCyU698JJjccat6YfrDvf29cwDoE6X6Y",
  "key22": "27qZmSPymyZmMR7j9AYg38aQ3XfA26awEtRGnMBWF4GcNNtYdMA5G8YETBTMHzmmZQGfGDpa5EcbwtAPgmMFEgmV",
  "key23": "4kDLh1J4f7JckT25JGHSt4JUNDgUpr5jT8yUMVgarDq3Hob1BzmtKCD4iHUejVcKUzGksdgajG4MQLoWuzLUnEHi",
  "key24": "5CXXMzeGx5hfNG46U9vqzP8KiXvu6EuLb7V8BeTNV3n5DrmzQhKo7og4iB4B8WAh35JhRAfc3wpA9P9LestdSRF6",
  "key25": "4xia4RDY2eFYv3o8HtRk79oE4s4nnKrS1NuBYhfU1cmaDW3czbDFbB121wZukM9BteAD3qZ82Pbj7WXhMEYFXPwj",
  "key26": "3xaP3u4MSY5fKM7a3vZt6Cy2NtTMQxHwuS4Lg1oNndp4JcQqH1s9zsBzta1LT13UjPKMzMKvvTn5BhHnh1JQwuWs",
  "key27": "5BJ3oizZzHhZnaUnRuF53szCg24jgfPeeNPG3uyZprcZ5emacg9oSb6gG5r2nHmKPq7aUX5ZSLkbggJLst5yLWwv",
  "key28": "4vXXh9D2S7aB8ccf4vVBwsPSw4ufTVaLxdy9odw8CxRPUvW2ERfqPJE63YtPqtsDmbLPFovMzbW8xQhCLBvnNycV",
  "key29": "4UWMzTRdmVvrn7toYNHL3EyrT8m8ZrJ4yRSAn3madepdisdCRMg9PZrtX3HjmrnfRFxJDw53YaXwMeXBQBUgCCuV",
  "key30": "XwpREbR4bpMzgCVpFWMyYNAzXJt2cqFxouDLR339yP7CtLcjUCqjLS6ENGoAdUeg62d88RjjaMKdhxviyUtVoHJ",
  "key31": "5Fduxcg4VK3Shn1BFBd6KFrzHwK5zamp37YESEQuNGkoKzJY2C3CWNBmDxUSgSF1iMunV5cRsnWSKUrcAg9pvEdY",
  "key32": "5Lmiqm2SEGEZZcUe5t2EsRLAagvuXj2hpKmuc5kkWFdQbtaYeHKXoxjf2E9yZGiEFEwdy7EPb3mfaihTJ8s7Yzys",
  "key33": "SLRRJRuouz13MTcpmd3d4yVT8h8fGLJxHuEUtRXvwZX2sRrffmqbPyRHmy9mV5YRmXvkuG7qFiJnThq7W7Ys8CX",
  "key34": "3mKMFxc9vepnRrQquxkPu5E5iT89M8tFucaHaqLjZFRGTtv2fyyvGcC6KJqPR2bvEPSBJUMvpZy9AeRbKS9Q3qTA",
  "key35": "4Zeh6QPgq3rT65GSaSAc3u4r5i1d8aVzLURJaV8cvC7qHj3mtPCjs5QkwC5Z29BGRbuKzKQVrMxX4CyDKuVHynzx",
  "key36": "cAahZhv6xSEWyPhZ6yTfnBCnaJ9myUEvoTr9fRRfKA2S5xHwTZBw8TXT39ShRehn4H68fgMrjarp7ibkuuYUGTm",
  "key37": "2RKK24WZUYBiATebgVp6vxDf2m5a5jduVKcvCbC7C6rNpZKVi1dxTRQzCs4NcRLTSmjCcTQnKGCwh3FTp8AyNNRr",
  "key38": "4pdWLUU2R44QNN9UKuwwgzKfRAhtBoR4tzmGQpAsqcEFK2HTYek9YzaRVbpSLnkEmJnMozhyyu5iPyk2AEHKSDwh",
  "key39": "o59KFmy1c7ko5q8nkWahkK22JVu1LZRZWQ3o8TJViNYfyiQsavXa7f7e3C2C8Y2zMXR3krDy3AqCaZfYBBtFDNa"
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
