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
    "WAm46oR7meEbNFRyaEJWv5NA6N7tKQHxVMLeqS2c2divFxpWztvt74Msct42N4BZRL9jPme5tB1zoVsXHteemZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2br2eJQRM6SvZ1nYEdJ7h9zspCUFUChyeuznLEEWxKyiwQ2QKLMRJjFUmuLywHyrZV21GonxPRZeMxQWLhhCvicR",
  "key1": "gbmcfFN2iQjw4bzQ2p6T9GCNarV69HB2GTyyL3FK6x9z21GfazJTWAVtbYxgQwoawVfe5ZpwZgdeBDJZatydFzS",
  "key2": "4fi2d6KY7B2HS4w1eiDUYSHSwjz19VRXXQ7nqucsCB7gEXkbRMjEKfubkRuWJzZUk96emhBp2s7mRMztrfxkEf4z",
  "key3": "2D2Fq9H8gTCpwJw6murr4qz5B5TQyjmNBH2cMfoY4Nypf72eg5GcPJn4od4jWUQSiWe1PzepqHKm6MpDRSKQCtDH",
  "key4": "2LqPt3YWnTHVgfszX9LxdiP1Fp43KCjr2gXnkKuVXsD2oCa5o3usikvDcfvpUjcjNGRbsvtqF3RM97E5jeCyE32n",
  "key5": "2UmLXhrydzCCvT4NCGEXzrutQ4CdeF9bAYqatg7fk6CaqMsM1phLpeSgsEYfKjxX79HMd4TRCMsi5yyytuDhpd9s",
  "key6": "5mtr9jQsNpfBzmZri45jBD6MMBLaFN8F1qWZvxw82MR3TxHn9z1BJhTaTZXwPV5McgzmWNiK3qGSYJAWiVzRL9it",
  "key7": "2pfS9ErdEZq9R1NGhXjbaSe8yv7DysyLKhGRzoxn1srB9k7ECfQ5rYPzc3Y6DnVk8gQSyLXZxQ2ZVvv8kfr8fYDv",
  "key8": "ZXHjva9yinLN3iCHmCyUMctrmi8NiDEe4Lehi5d8s8kyuvDsWXe1z96SJ4WfFDvar2EMLs5GN44cipw9Dbcq9yD",
  "key9": "e6ro4Af3x8VdMpUviY7YjQjsFF7mksopWMvmBELGpjevFkdAugFX7TtVfPcpmyEAMNSjCmAm6USZrj4Fa9Bminu",
  "key10": "4sH6kCB3hnXjhzfG2Goswu1WqPUpBjuAtdgmcc9reDQzESDq4DuLdatispCdvinktWFhRS2EAkGmVLKPccXniFzj",
  "key11": "3haEGH1PVzLNPPFK92wisvEA5aiS3La7VJqosoSSkS8gQ7FrkS1RAzY3oSY2ucY2TZwjmwDZEYdne2Q5vRBdXi9h",
  "key12": "5zNpZ3zYHwa5w5r8i75dZZsuMTbzgnkVrTW19uaCfXqnDPauZ694wpC9kjEuQQ3K5Vv6T6Erd8NyFZGs3Tbdt8K6",
  "key13": "3LesnGzFYJjTkUxF9hZsi5tARSrCNG72Mxm2wPUiLShNGrGhoZmFmV3wRxxC9MGznxXMPZprZVXSQyNv5VhDCDgJ",
  "key14": "kvg6SeAWXAnSJptMqWGeHoXg1RYRdF7Hngmqq8knvAMdR8qb4cF4VNQNgH2VXSrbEPPtqJuNu6PPZUfeTGSPxiw",
  "key15": "4kFkmu5R1irWPmaegcP6AQ5sqaio2sf3vETAhHCZtryUGcPpzLkjvhDFHV41ELsTHie2TP6nSHykhzqocGVF6Ffi",
  "key16": "39sYP5n3Suk3UVACv6RfSxyawAtMNLDQsPi6gcnsP3wkwtofrJcUCq5np7PxgLvUnyhTZMaaLuCkDzcthmNYwv2c",
  "key17": "SoDCoFAPsCx8j3Wj6wdkc5r6ESfSHCD3UTtsLmdYxcLkjWtyYp6E81aYfYTzn5FhrjiLuorz8vkNAiy7btPcjvK",
  "key18": "ZMtL97KBmfMKVjDeGqJRDeaZouYvvfHrTp4KBAvjdeL9jckmMTbgmhFpYbZMNk3XKzNQyyCM58vqqUVdeT8LjEE",
  "key19": "S5FJK8Jr1EFHksPLEtS1TNT594Vhu2gmjaLFmouJJ1cbpNMjCh3x3zkM2rqQVdChAnztpcyrGxQGS6b9UNcxw4q",
  "key20": "2j3xRgafp4Wh9ZwZKy3PWwYnNkH8KontcgpFQBQuWdzVpiVjGmKb8kZeXiVQY6V7MX3qSL5cNooApmMPdvfGpkBP",
  "key21": "3yZdJSwrWms5Fq9vkpWMbsYVquCL4c42XYAkpT43x8RNyNr9HRcY3foLp2omqptQtfPgu96KxkbA1NevzihRrChL",
  "key22": "333PfR9ybd5R5mrm6wnyhhVzS8EpRyT8p2zKphnHZumnCq5GNP9RjrdPKQU5C7BbZBFUBihSwCbuMusX2AvaQUYf",
  "key23": "2TWSBnGoHt7yx1G5ft3ayXSy9Rb3PKur7xXJB9RZE5VwZu7BxK4U2wFLNfa6mssmL58pJ1VRAgukeUWQRM176J2y",
  "key24": "22dhzfodM13zdryNqYiQaTawpWU3arxk1PLpiDMVVZFoyvU9d3rUCyjK63nizEP1t5bBvB2HSnE3jUSjmtFRjC8S",
  "key25": "3X3ckLwMs34f5aBSbwTuZqSnDArfXf7RsXL9osy4aZeZDwmvCZXQF8mn7u3zqFSeyzWDfGy1Ji7rXSZHM48a2sJ4",
  "key26": "41yedRDeaYKkg2hdZiBS2HsTfQcCjA5q2gYZ7MPGKhM63fA9u5RMkNddowqnvagEjzYHSAy6BPjEL74NnftRUJDc",
  "key27": "223xwkuUvkBWBcpeojXG94dXpXALkcyen3DckYs3Rt82dBFfErkdY4WdpnXNmA2WgHF9ohyVsbMWq83G8Pz3bxUb",
  "key28": "3A5L7yS9zSsf3YiHq7Ln5oPCBiccqXxudcshkNEKw4cqgAYyjcKoWWib8P7fmwgK9mC43r4RXUUM8xiWzhzEeLEA",
  "key29": "WsMkyqufMVWsc8REY6UvVqrvTEGB8fPP8a2RhkKYLf9fTQ7JCx2VzZ9iRU41B257CZ6wJJc17C5T9GYUQyNaJ8r",
  "key30": "4D5sg9s82W6z4xB9CZsfeQX1NDu2fYvhSSu1Y5NBGAT1U46ydiPefkTBhLwdmBM5NQCYH3xiEvV4xXGxvE9zkAGC",
  "key31": "4juce9yNr5Lgtc3b6TcsatkvfKHmEnsGZTuKQndzHdzyozGxdX6TPfJfzUFHb4geev6xk74oFodncUpmLZ4knvFg",
  "key32": "5bzsLsngBTeAXzEwFD3ne7kzCM7AMunaDWyS9v7HKBBBjbPFg5tssACo4sgHo6SU3SCEXBSeAYcfb9cBBsvQpTCP",
  "key33": "4GA53kdfg6rbUmt52WKH2GHD7kjqqbecoKsZGNC6We2mTLeKwqnjGjGStLAhP3r81KRXyRhz3nLgJpTpANv9V5op",
  "key34": "2ndvrM8m4PDsaceB7CXwdJzfRcNiu8mUi5nB6rnUokMz3vhJ45q48HjanoqGyeLkHeHXBk3VVqKJWF7KodqRhF5J",
  "key35": "J69bhHn5RfHwUoVJqd1Um7nfjeXYvFi9CnGpFqCdx27k2LsGQWNXBR2ujRc3z15gjR2hmx5mNjogoWyh7QuhKSa",
  "key36": "4DfppXqFcu21oUynSiSvASHdjjaVCMzGU6YaSvEJmX9JjQVDCvtVuDqMW3vZPJibXUopDqE4wnoY5gPL6ADsAJL4",
  "key37": "5bwzvvQRHiTiPM11RDtYDQNxu5dPQ6wdpCQEa8EXG3wFNscwEsfu1QnscQc3xnfL3sta5VMfSDfsJfPfYYgZjHTe",
  "key38": "56aFV5Ym7rWxTXunuLBzo8gosCzJBV2SjHnsaycYTyX6Drbze7gtPN6CqCvwuGWFPPDqpKeRYchCnkdnGcuFiY19"
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
