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
    "5QrdfY4x25r32CLYAsj8o5ZHT3us1gAec4XXkpLUfcK6scYdcvncByF3okdsDgk59ds36q2EnKb5ZqNRGDPSqvwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ozLt8uCDjdFp755DxjugUFUev7hY9a1poaVsiUPuESaUkF5DpSfoC8k1X16tPxNxGnNKP1N9BPCctWPNVFfxnvz",
  "key1": "656eKDEE7TsFjBTLAGjjZ5DDpnS3nt4HKRxGstYjKDvVHBQGpbskbxeDvbBHud5s8BQQBCcwD1ZjVw8cTEVaRaNt",
  "key2": "2PBKZQkqvauq7rWHUpJYJNpiCqQKDTXcL7TUPbFPD5XKHBK2CyrRhQPqhcV1VTjnFAfUE8RgaWV4MG9d2eiwdDEs",
  "key3": "oaf4Ymuf38qgMZHkp7GLWKZ6UhZNubr2sMetA3BpFHfLRfMPKMyeokp5ZgcWdrS2fXtkA9KtiiDxYFmAJbS5Gj3",
  "key4": "4iMfDRsNaZ2nqkBNRb3Ma4FnFmJdVoFJ5bz1WENJitny4sBSDAzLRCcHWLCKmKFQTaD5XPSkNc3KWqTQjamxJz31",
  "key5": "4TBULggiUKv1y2NGN7tj2PHM8LMuxuKgv3175YqtyaFtv6RxspAZGqzeN8uBnGT5Y2enAb5m3UYiRDNMQQqtcGAS",
  "key6": "2HzQpx9Lk769Mj5F2n8iVaSUg6vAQjHTyjKyB9G95s6aTEwK4XcwtCX7CSU1aYb6Ko8ir4Nu4Ut2DVmAgqepBAAh",
  "key7": "53vVdLGPG3sbYTnEow4vriWDD2yzTPGACkdDdkDzc2CFUx4sN25YzWvvhnb5D4aEk4EssdgVcUysTxUdyCvuqdiy",
  "key8": "3C8WKtqvKzDZxx3Pqdyu332nudro2t6iEoWeezPw52MqxL4dcNKrwiuA5XQAuXFghyKjTAKa99siU1gzWR8HDmtf",
  "key9": "4PqeXnH3BXTJukAfxmfdYBBYCxd6axHfCmNjuv2RwCft2jcjUuhZ5YkBr8QGn7LdzzvrUe6TXysg2jetDijM98en",
  "key10": "4UAEeBuyUyME4ixDhfGxTod8ZvqQf5C6y2MJKkGaatvexbyaoAEetwUuL6hMEV4DbM84Epj1ncbhgzuqtYKnAfJv",
  "key11": "3LdABXozXq8T3LRr5hDqNHKyEvx9JUxVzcATisd8kdqCJXWorTFBRzUts6cMsRdTr9nNnAjeGnEc61mQDptsHVfa",
  "key12": "2rQ69DBiVpr39R6MUHKhHaS3iPyg4iaQ5agG5JB7LHJnAHadkTbycwjW5TwZvzLnbRXmTGAXt6zobGjXAU3UM9Ec",
  "key13": "Nh7HNGsCnxmaRucZM3bJrn73SjUDYJwkKMyGX4PN3zwFSZfYrMea3yboEFW1nAy3jwUytVchAe6CfDD5Cz3yGyg",
  "key14": "4La2vbXK4SxqZ2Lu3qxWAZATP6uU82rtQshkhyaeMQXHKRyhmnUwNd1zh2P7UvdAAABPfG597UqgJhaXB8vc7cbj",
  "key15": "3uew5tKbzJR6BeYBLvttiudTdHNLiBWC2RTEEHu7frK4pEF9V4bno8N7yamqgSe52g4Rxf18y5HMzeKMX4sJhgp1",
  "key16": "5J7iG8DbuGsqRktXvoiw3v9r966VsRe4cu4sz2kBedFKnj96Ao9TwfxPcr8ENQcGLAD9LZxXGDgGxzxjvsQ69KUp",
  "key17": "3KmKaw8kTNTjrhbZZh7B8HQvUppGztU1aQLXT3Z2T24TSQpFDRedaUkirb75SkWWiRKLt5UAp2oPGBPDTaSUJ3qk",
  "key18": "4g7xhKdzUqhmTj8Gtw6xUoTTd9SuULzwZfVfFqQeuTJEv7nTowFbLsVtyra6bo7y9yXVZEcBWqJWvxZkMGUerCbK",
  "key19": "2Yaa8NgyWKjx3BD4N2i4usWGrRdFS5kwqG775tEU2fo3s7vicAPJo8mJvpQENKiqiCMnSaffKN6MR9NAJuiwkqjN",
  "key20": "3TZ2aWf9ABgWLgSpEnnBgzF45dhcK57RvamXUvcpreWxLJSbRBakhFuyLs3PB8ZX44dGixYEKn4wQ5D5zN8rpfUy",
  "key21": "WbwfPUf6xTatcwjC71x1CNDi7FE9o2Fm7CKZuBAyPtiaKjbpci9nb14vPpx7AiXXdwcUvV357j14eec8J3KwVqx",
  "key22": "5LZevCqYuZ9KmzRsD2VjrtuUYLBLHArx2hYjVUwepgvrqsz4gPHK7eVCLwX2edaUJ6eoYpLikB1QafGPsq8fXpQY",
  "key23": "59e95bD3ZhLWwvHbEohKqoVxMQ3TmshEh8zjNYADieuVvh4rBDdUjzaG5YYrgoN8Hanh6Q7VdJVNWXUCaYu95cch",
  "key24": "31EW2uCdDTJfQ2tKWaV3Mj8X7P5N1zvSGKNozB1rxt7fAqpxjdbpipJVb5dCkH9ptkuHmtCfnBG4FeYqT6bfcMvA",
  "key25": "3ScfMZqs59dq2sbSjeNoH91ihVEAtcMVXpGgmYhevDXQhNJEUNZ9EVqENWMBs4qFSfDTgx4PZmeZbbTPfBT7CUVM",
  "key26": "3kWeqmnMkiyoFGikPXqPFa4N1CjaMyVjstpCanJF6n33nxmdkhYf7KZzwpH9wNrZtyHo9jnMR9bo79Wo2KotKFdr",
  "key27": "4XsqCsCmgj3QB2T46xJ8fmUUyTzb17qysGDXNvfZiGbaMTn36CMo9hNx4fGB8CsbnNEtV21VQDM4bUNW5EhYjM51",
  "key28": "2d99i3cL9NoiiLCN2TTQVX2GJmZ87m7WFVGJ1372VRVfn1CeoHvpe4yyfd96fo1fpEfpDpMv9DFSGaLNcsEFopt9",
  "key29": "473NurQLopdQRUt9PsvDUkvXC9JSwYQbiFiitB1Ek1nZcwkGJEJKqJwDscHnvjkBVvvxYjojG6QHWLWiQ5ECyTGJ",
  "key30": "3n1oDgxHYjiw6ktfjJ4PzyMQkiKeMtb8vLWhsxYW1Xx4JDpvF3xKGT3iMzmAkwAo8pw9WSNTmagBpLUTT4djGAb",
  "key31": "3S21qJ1o6FrGChTBSbhHx8JYj1HrLKNBsbBr5UDn8Gy9qJHT6KxV6t8YMup3UJaQ74nbmnEXCLXd39HXxVhMn1b1",
  "key32": "61gaoC4x6dYe5SYkbsWzR7E5ixQ4otFiWo7EBtGjrixrpDx25mmbCh1LAe7i2u6RaU8Ff2upomSVBfVuAiYYu37j",
  "key33": "4to7kQPVyfupnzVMb8aVVvtRUf2WZs4RagKim7N2jSHiYyqisXbye1YNzCU2G19ApD52XLMdPJ8nf6QPkXpWjssQ",
  "key34": "2ySUjvTFJ3wkeCbH6wwRFCMerhEFEcL6dQ6Aj9eX9vwry8TPg1k6QkiQ6bFPSF76RiLzuAKp1SLCTAi9HwjEJ213",
  "key35": "3qbDHFjpCYoXuXLFSPMVFxhYpxhaGrDntt946pMjWXo4Qahi7RpWQY83E9soa3aLmqBHFzACmjzg54YiSc2AmmyG",
  "key36": "5sZzLVuLZjNKAvGn6Z3dSD3tBSGELRnra3SQBvSLoC2GVMEamX6bcFQjB4cceG9f5xpyoMrLEhsU3S8CDZRSffAU"
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
