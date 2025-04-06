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
    "3PdUSc1VPESCwYZkvwPw7M8nRpavSHRcEUN4ki2jVjqevFnphxVCTTmeVrBKta2MWhgPJn6Wvc5BuBizZJsPb6VU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNutKcPr2MiPCGnDxQigeVwkgPBVirY32WP1SHv2UELw6LRD2paJdEfrdDekNWoDQq8B3M7n7nKyQEBJ6Efd3Ds",
  "key1": "3Z1SLL6rx1QAqvp4LwmjAvpMZxeprB77q6rXbtmjpdgLw8248LGG3bE8N84DxZefrUEL1MydVtCjtB5nZaiPu1KG",
  "key2": "3eYhkRj3PkuN68vVUYFgchULLbpMDhQaEkDeDBKP2cqBRhNWpeFjSumNhV6gT4QnzyUwL81PbPJaAacEPaND8u2U",
  "key3": "3YgczWpWwrg19mntssDmwW6yhxJLToiYW2VjH32fbniJYYgfdiDYnWwyQQdGi442XZxdKZvBt66ninDMxfkKcCxk",
  "key4": "452bft1RHX1Yha1SCfr383XmvCETxDHB4FWfe9XUe7zivHtLFqAFPioEsigTjjmmsynai1cDD6TypxvfwqcAiBKZ",
  "key5": "4xmUKzC99yEst9isjxFv8WUNZaVsHcnpynTQDLjzsUvpxorHH1UKX2YyPYcH7XyZsGqR6bU7FWthajiQHXSAodWZ",
  "key6": "61ECCw9QKnNMMwbYBdVbekGje3fSqphY3rJX4ensz3xvLXuyzQC85XbCpeR6P3CeVH6wVrWDVpi1p2xkZXXXtjAb",
  "key7": "3vbjMptyrtFqWrgHcpuPw4AZBMRTKHDmwqai4qosy6XNjotFcgLEs1h3r7T25ToLyYhxGkVFtMDQ8wTyJw382Ybn",
  "key8": "2MPuTbbM179aLn18wZB2w9C8oHBePU2iRijVPiL8GpDvqFMPPDy8ASERKABf8ewmeYM1wtKS3S663yMJMwE9KEUw",
  "key9": "uYnyuPKfMSwpBi2hqTP9jfb5WeSfGiyB7HdzuReopvVEqnLtUFAa5g78cczX2E4YeE5VBAwMsXoMeytPsWGRrMC",
  "key10": "59u3Y9WD4m7S6NwE89c56iP7fJLm7e9eeMbASWzZaxY2kqoijG6mgs66FfRGaQo2tG3Q5GmNmf2pkAKuWrhCYxXr",
  "key11": "5wN4ACYaceDYEjXH1w1UjJ7eWAt1jwQZ4sj4a54JSMJstCL3dJNdt7voZNy5U3cia4EHuMkNAVxCMQesJwHE7PQB",
  "key12": "4bEdJD9hfe7uRhgKFTWsgx92noDgF5meywk491SoyVGei5okHA2UjHEvXjBakWG3effN8C6qtApZ3zWjigcmodCR",
  "key13": "2JPRCdT2E1ySeVdjfoPFrdRobipaYF1F5ciZzYqVo7EFRcUthChPq3JqKmsw1m3M76NxUdHnpbcmjuzuEa2SzVtV",
  "key14": "3sAHsi7Etf1oUNMajs7DCHTqovBVHjFXKstMBjuwBot4Sh21D8qkG5dbTTSdXRXBypZsMKXZJuBn5tTxwn7vTCXr",
  "key15": "4UytYBqygxJeVdrCyQMTh5hLgk6xRBLCMaRoQz6TBQn8Cu4Kuysq6V8zaXRRAM7kPH4SBXUK2schApqKFgtkwASW",
  "key16": "4qZU5JsJFC7H78eyPjE3j3sseShv87DZkbHRHqU8YQwq3hCkiBp1Z7ybeFeVRgqxMM8vg1DVJKQ4nnZRoPYX4sJu",
  "key17": "4HHpMs3ERaQXDxi8Nanzug88iAPDeMAE1EA9tbfHGUo7mPGv3LdobtC9HWnA5hFdB4Jewq1PDMbhZ4MQSLk9T4hV",
  "key18": "2c8EJkm6ANEurqFUwLraGJriSpRTp3FEofwtsQAQvrY6zokMd8Z6UsCTSV3nHMfhVSnXETeoqjgbF6RA15ETgS7D",
  "key19": "5j1dzBuN3FbGRhVnkdXe7jGroN68dNfek1ZTwZECvrNnegTRX6sBwvc6xfu5BehFfZuSBWHyq4sjEatkzxxnwZAx",
  "key20": "gxCW2rF6BwANgtRpLHjrEB6TMb7QiuMCJYf6NK5We8y4mXVx5sHdeDUnCvhpvzaiLWp6rNsM2JpQwAv8SChNhSv",
  "key21": "tJAZxpQEkkkAHd4BtzvNXsxXBAsMFwu23aTDQQ4U2pWD8waNeALF2dyQkV8zfo44gy6jhtkXAjmdBPeJtvisUxJ",
  "key22": "4izYTmo4v7xfXoHTTtqmAGiNyrYc7Bn6K4bXmofEw6VdS1z4nt7tkFdzrvP61mr8UkTQdun1UzPh5LCjbyUzvz8a",
  "key23": "36qF7LZs2Vt1DsWEm1r8bpQBENvRChvfn7f73xHyLRy67Qz78ZTEsuurTYzhNs8MnvxLEfnVdseE3LWpWbacXVHF",
  "key24": "4T4QedDm6wGSZ8TwF2abnAa4kcUfYT5TNv4J846pBhr8VHxKTFrxVT18UREXGSSZf6h96E1VoHfCdWuPYa6QW2Df",
  "key25": "2zkHvFWkLAq1baXEioS1xU1UAF4QS95GHGKMy1KWVYS3tUbU486JsMrx2A3C5QzuBA7nwT6fp7Z6ra7VLmpmb8zk",
  "key26": "5jUKWG3UdTMwDzYR1GSaEcBJPvaRB57WGQtZuVQWi4etkHW3XVwMv2MuHRQWnpgQoG9cGYSXVJacEZQf5KgSsevP",
  "key27": "4pBhoVCBDdcJKPeSFdBZtJhejza5uVn5Yymt6ygxXgPGBQbgMbsmrfspKjLChtELgXr3hjSjm9zkz1aF739Dd9Di",
  "key28": "4EqWzgbatPL23VBsdQxfWVmcAJN8onrzpjGAjM8zvntHjnwAijshLmGMPsidZZee14XiWyxopjeNjyg2yBv4WWKt",
  "key29": "2PAuptPyucXCZFM6gz6UzbKZLkh9XXUQZTW7NtoZHcJYYu3DLrbiDGVYqx1jHPacBGmXDyf8qYt8uqJKPSgbMPEx",
  "key30": "5zpwrEKsqakavqKr2ksyjHuTxgc5j3NizfnqAATJdaxjiA8FcGGNQhSBSi7Uk5rBKHtBgQTAA22TyDDkpaLzSxSG",
  "key31": "4iRHGV2UJKcA7nqu1C9GvrBLNvgQ5RgLSXi8i9H96PeuQxCEMw6QiciFGJhi292uL35pVb6nd3DKciyQ2rEWPXAx",
  "key32": "2XE6SRmPCVY9VzX63gG7JVc3Y2ZZ6AWxF1T99g2egrwUbtLL7sBg6vDVbmua7aDuj4p6WX8sEf3MoAtPL64qAWhZ",
  "key33": "3Y7KKu1yY74KUL99YiCjAv7C5m12Qzj3MUXjwgSQRDZYDGoCi9UkpaAvJQu8d7WMBEKXe6qCVqVdRSjktbgLoCyM",
  "key34": "25VA3AbbHnfrKuW8FdMBCin2bgQ2BfghmtaebUs7qdfRKqMnPXF7xDpHMgyF3yKiLb9uGzcwDbwYnz9KNNzrK2Dw",
  "key35": "5PKsynKx88Gn5R6dQyVhgX4K8cwuUiMTcmyH24x3VM6SNLvyWPjoAjXSjWfs7jupKbRAe4fzxHeatntKckJRJp67",
  "key36": "5Yus6PiPmw4SnnsWudfd7igsdfUP8ExrzUffhx1RYuJAvMazB1LRrjGumdpUqnusSfbefYj2ghWaQ3LgEwEgHCeA",
  "key37": "5XAE1dTNFYbSabbAx33aHe8GbMgvMiqHonUp3L1KPQGZjYiqwWWE5nvYdWjR6tN7iTSk54pruoNFNykjUaQUgzNA",
  "key38": "nx2etTaAYwvYNed3444XPC5G3uS1f5tBXwWNALtXDg7XuFbSDTJDLBnmED26KA84cLBnZHYWGaG791jmymA4CPx",
  "key39": "3jRXaMgcJqzfsX2PqaiaScdamTs3JYSGYmMvauz1xMytBuq8UbRbpgyDYGa5wbkAb7fXo3LRuspgWf9mvMLquy98",
  "key40": "3x76S6taCNpA49LsTBkK91K4j9QApzxe1kegFFsonGvaeAzBoPqehmfuNE6ytSuUsQ2w1AfU6ey98M29vzreYpHr"
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
