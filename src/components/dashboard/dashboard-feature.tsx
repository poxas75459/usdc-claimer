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
    "58NQkrJtf4HshywctcnP3BTcF9BAEvL3KJVPhQWAWuvkZ4tjRSerWuUip7hTT9mr63tjRmxvPRCrRY1abChpAeV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xu2x8YEzVaUKNCsiquXNeVu9Gi4YvGVoPXdoqhpPmeNaNzk9Layj7n3CmKd1TkKByksGnHANisBaSPWwWYKfK1Q",
  "key1": "2UgEwsxvMW897bCc8YTztKeYh4uPMo45UCHNr18saw5iMKzenS6u3w51ufRVwn6YGAUEaSt4MrryMeDCvsMSa1wh",
  "key2": "5Zve6woqcQ7VLKziHZYL7YdJLxMWrWBmmYBKXfNS8MjiQ9Sv1G9n2mMEA6rAHFSbyQbMTgbaTyfS5Ak9iRGokCoX",
  "key3": "2Y8FtnNyEo1TjLkfPwSvhA47Bu8inHFRZmr9UxqtCqUxPN4JLPsb97bjLHVZALb4LQFMjmha2HEBbUQbPGoy1dvN",
  "key4": "2WwkvVSBk5RdF4hLNS15RpRsESmQ2wSw4sawDMPaFFHHKwKYLBnGruc1e85G5Mh8aybJUQ5asPj1ghfkQUPUkvqp",
  "key5": "4VQXnAs9iUfGomwY6c6WFZHvCBpZEzMcPZ2tMLS1MD3TPPfaS8s8ed1qcCs3cdTBiKtpz9nFcVB3Sn8tKwDorLDM",
  "key6": "CTUT2EC1n5vkcZWrBgjiLfCBvQTSZJshn8Kz1VLH1tqCNR19bY9TKU5foTXp2vxdS1LJ22jVEdUtgFcMsFoqQ2q",
  "key7": "5QCG5tVN7g3XysbZA2n5V3FHr11zM4X4w5mRsx6bmaAwZrxrGdH4hR8UjR4Kt2iss39HowpaT2hUNtXSaz3ZFPfW",
  "key8": "4YANnMv6PZvJNprnfGqEQk4scPaDAFztCaLyMfbKedoE4z8u2yfDFwfJkSH53GiNPqbzXoicAwXyoEZi1nfWkwwL",
  "key9": "3e5xD5f73W4R6gbbKM3CpBxcjtXN5dMjPvrems9ZW1YaZ6r24jmoXayuPARGhbbwkEDoEsbh71uDgresZSVjkDVc",
  "key10": "39HAAVZ3HVAGRM7V3PSzewUZzVxGQ8RNxHURLWLZib4PNDv6iE3hnfVUuh71RUSrH5tFJitSbs95nR8c7Pp4JShs",
  "key11": "5Z8nABHnrmtiTaerAHZJuEBsSsyLxB9wkVpvh5PeK61eDHueoWH8SjZTPC3YayRNAPDd5depJj5HvaWiyNu8jBMU",
  "key12": "27sV7WKXTikraHBePzY4UWabmfprdwVProRDSzjvUyhNZkFXbrKwCEYzqnzLQdQKDXTAKyMVAXHM67Stf6SLwyb5",
  "key13": "54HnbwH7zsLypGUPtL6QAgXHVaD6GhUBrNL7kXUvjKq71J1awRdNKufoL2d5zyaxU88aEpG58UtioBktfhYtHLq3",
  "key14": "3rviQgAqeS3SJSByvUFuRWv7mKmcw74Un8uefPQsDMgfenNPgp89LAXBYpNtGuEZzaomAbxVffqgnHriTS1g27Je",
  "key15": "5BPfTqqV46aY5EnBYvVD9BM98nzzvdrZ7EpPQY9VpgLmRkMFRmfiabnK3cAqePQjH5DTLgmuA9KbEgrkSJiDT2z6",
  "key16": "4r5ef3fFwQkGSGzgKMsZ7Hs9No5VvzwaitVHdPmAH75LMz4UC6qu1RhLM1drasLMpRt2RCWFpwm4FjqQGeXwEjGK",
  "key17": "4jscc4EqBMc3WpGdmmCNsfm9u5wfpVkLGLg6ut8n2eAi2LCmYQdR7e34wq7MKS6fQBv8XEJr9Vs1dpBPsEY4UvtA",
  "key18": "GNen9ZGHWeXbnNsYA6hmDnCS8XT9wY8Vo7Jwcqu4EUSEs9T1E5eXXDMB3pYGMpvGAB8H6Np4BPDcvs2nVRb9ou4",
  "key19": "3RVfCxFSQpmGeVKkuFq9JMuJA1irFZxyuyV2CW6crvzRBiGQcjGCg5KGXWro38emoqFUBJqqiLjBv1BzxcQghSuA",
  "key20": "63iKkwNVXneqUuupkn8AJPU333kdbdBgcpGiFbjtQCsaJ16KP45TQxry6httN58fi9VwUHxZqGYmeQiWx28CHiGG",
  "key21": "5Xfz8gUXF5T9NGZ6fsuyPYnjjKSko4e9B8CqrUsLsygSoD1gjkNFr5DS72EkNuX1eDyZpe52DCdXusRmPVWZZFk7",
  "key22": "2PN49EzRPw4o9RjXexNNszzhQHhbmE8ZNru78US3Amk7VitYhX22fDJuheEfw6uywGq4hLTGWFQibKXu7fvekttq",
  "key23": "jQrpWW6EJx8LtbegnZsvvvff4n7VXKPPSES2hoBCCQABHmwF6zgYoT7qhe3rq2XjsmKQhxngSSaKh7XKwTZVNPQ",
  "key24": "672DWPk2BWYNViUUT8ktiEJbNXWiwdHEkNXbUrNF5vW2pSyfkA2yfWKjhnPQPwYVVoc1Exqk19fq8DtF8jT88TCL",
  "key25": "4Uq3ViumdKLjoMhAe9M6sQWQeAgiLjLaCA53N8E3TdGbBvnjwXruvb53YiRypykmDdu1KuoSrBKLM7uEEDSbKV5Q",
  "key26": "3tM71JNWVphjCoVs6LHPBU36WJ2dq9dEC3D4bh9mBm6QmnfzJsZnnZxioJ87Rr1NdqpQbGm27Yr32jRCWHCVwDRn",
  "key27": "TLKTDPLj42RdnZqda81isVGcwQVBrJR9JXsV2PWY1y8t43YuP3RAmas3z6Zz7sCvz6K8AiA67URq6GvekvnRy22",
  "key28": "3TSgv9bsR5Fb2eKMSbvq3Wyw8EkdTsYPDEboHszdzR9vunNvZHHbStBz8uL1exi8qzEtFGrnEJC7Lh56Gea6T4GB",
  "key29": "4pjtXrtX8bLHqfSvvZXrWehAVaZTLe9SFSNHdGCCuWExzgJLCrEN9SzeZ1x9HPPc1jW5ENeXo2VYrmqAR3GmfS1m",
  "key30": "3FKpzejcP1GSFgzn6jgQSnP4vGSSSbhszvYCLGSdbMDb8i8jH7Cz3h5CVyMBMFH64cejfHVpPf9MjdQZsn8TxBh8",
  "key31": "5bveb9uU1CqUptUcpU5UhrYGZgoyV95kpG2rC1i2sEaohCgoivVz292qvXhmAxzoSPgNP5RDn8bzMbpxQhdK6zzo",
  "key32": "2DYdghwhcTqymSnqP3JVZfSom1YuFTBgJRFBddpxZZQ7kMRJT6ELmpkvZwXK9VtFBoU2m18Nnz5KmoNiJuaSaEc9",
  "key33": "k2EAdqFBPLMTCN6QnPjT4kwL39knzPMZz7rNQQxkHLScdgbdZQBRbDaBabqf4oWBXQtDQwSLSDRskcySaYmkFru",
  "key34": "T5CZk7LkViJfyinNzajZRN7qn31n4dHSEj3T6H28DzxNEPf4sEcuTUUKqXq6fD3B7XvhNp28id5vSh4imo1W3eY",
  "key35": "3Soj3QPynubzpnWoFMq6fQMEURa7EZ6B2wHtLWmocA5a7EFZemYqU9XhobXmZfnSpaqmV76gGEsttmpYTWR2zSAx",
  "key36": "3tSPXP3R8GgRhXayZcCunH4EJ5DRXAaXTtEQwpZvK1LgwC5vphEUrgfKpGoqJZjTR5AzYo26fnVn9sbFJvYEsGqA",
  "key37": "3bEQQuB7N7imMGGzHL4XDWzTrv9bcD8u1sDRFFTXHk8twixpLRe4yrQZJiZX1KPP7rD2ukYtaqCETMFUTCAytBPQ",
  "key38": "4j4fcaTpxqHT6uMJws6v9W4arK44RMJdeLnpAmViEeefK7VoUA3bWy9EJqQQ9hRVcdnPNW9ca6Hju8rcmf2VN7Zd",
  "key39": "METE2s8VmFufZoa2mvYrxDgSvFwoes1YQAjavEsRNwEw239NfyT7yUbgKpoWi8RqkTpdxP3K928pGGNpt8znxjS",
  "key40": "45dgJXJPZoaCN64YZPHCv5TNRtb2BSzcDHofhYsJVL3xszDxpYqCYuQPBQwZYLQ4EdnfybsA1gj1oTXEA4zEajXS"
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
