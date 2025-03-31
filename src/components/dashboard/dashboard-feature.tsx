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
    "5z7ZoAnw3TB7D7Bw2WcDEZbiGHGpEn1Cs57d7iaWGNKUX6mxTMeYZNNKRKrZh8wU4RV8UhQe1fgk8WynqruWZPiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btfBos2Fm53PJfxKyQcXGThQM2Pc6fVsRojxeXxLu8kMYDxRHc9zZLnkfn1YVMyktX4BsDva6FTwrap4X8zhG43",
  "key1": "51EgTFpvzq6LdZvN2M1mTVK59zfwMjncfbKVJPFuzsoS1uWAFQooXtxN1EK3A6WMu1wzWhuEdLFmZQG3S9e2SfM8",
  "key2": "2UxcmbDSs3ajx9n1oPsteMJRpBmZMZpCYPiofSfz2pHTienvGzgKD5yhPn4d3H3pmJDacFJ5F7PXMnBKnmZr6i6z",
  "key3": "4CqWksYx9j8oyKb8gEnh2eGuRBvcXPrppQutMkeD1LXR5imwTJPACuG1FBJr84JLiY36Sv7Zuuio8emYXAhXj6am",
  "key4": "9CTmU4XNHQ2c8Xc9WotdSFcsoDyHMdfrvptZe3HTLsyoBazYu9iFp2M659ntY1Jq3ccxSRkchg2LuDyYtLSQ1W3",
  "key5": "56QHQiUQWBBr89BJKFQ45ff1dNAvL684C9xEW1KPK9TcDH4SPQeQ5rjn4Qcb2NBFCq8uN58Wr755RZH7fijaoFwY",
  "key6": "38Jiwm5WUV4RyDJsPs6ABXrjVAUmoPS1oDX5Lh26BHMH7yhnUqYTzmbKKGSxHCNRZXuYTFfQpgLvgoCLLvSF83QD",
  "key7": "2xvaKRag6xYHoh8KpgHSbsm8xmQjGZvSHGcMr9rjtJxjbihWFmxqaRzD5CUaCfoDYWVuE28HmV3njPMminq37EbH",
  "key8": "N6Nc9YV5bonBnxk4rHgQxkwbojYRMufNF6xGdat78hMWkXUF4UYAJBhWXuUi5Uzq1cC4ABh6QPR3B19pFk4e9kJ",
  "key9": "ZH3vvLAHG7DB1x4zyUXCKxfebszS1wqn9SgmC39dQZpbiWt33k7WpRFpoAY832wqHKnNQmJh9VwqJTzHwKunoBG",
  "key10": "2R8UXKwMYiMpH81Mi7c43tAo84rA1c5SrEmfMupZ1unqR7z5QCiAZX5qMjNQTGfE7iMFxtGPbtXxuByyzNvqS9WS",
  "key11": "3cLbyq6doY22iXR34A5bxqrcHbqVU7Bzo5BJkNe1Dy2GZ1dgRD5KH5HvJU93MMiwSypuZmpTES6yNeaqJVBUe2Sw",
  "key12": "yN4M7x2j8ANTiRB6sDiyK5AjiEmehAt3CSiSguC4YfmHBS8rSCqKmsa2TiPSorDgBRGozszbbYj6JkhrKqXvWRG",
  "key13": "3n3NvmKF7fs28EV1j4Qsjc18xMD6XzoQCCktLjL48zKaoDAtLRW43BNbhMKCaDoqbofzGpuohHbnGnvwEHrYbsT5",
  "key14": "3FkBnjPWz9Jo32RC8wuHsF9m95jLQFyrxqaqxeH5krKQmonrgsrKTqwPmSR7teGYkyDGEs9uR8dmPSwMqjCFm6L",
  "key15": "5Um8D6nUd9kwYtz21JmMU9RUHLDBdSBR9vmvwtXw93RQkhwgEY9PbHo3z8giWkXLmqo1eKU7royJzSeFc7DEhaPk",
  "key16": "51EvF1jwpQCL1J3dsZL8V7C2riPFHuCpMzTeoW9e7U92WSM5PHRMC3CWdmnPjoCnEZBooCnThL9gT2LmruUquZoa",
  "key17": "2XFPExyVoBWNESMVq8EAxMNhmuTHnu6PKQYBERosg8hxXGTBcQNtoQTxTRmuF8x2Bren2kqfp4f8h7HC1LgQnqEH",
  "key18": "4iGZm4yWE4RgFkjp2MNUi3zYvw5JCQYreLPxcsRsx4fM9ZoqkE997AN16Hjc9snpaeTdTuHb8yPYhgFJ3M8iQgkk",
  "key19": "5zSRFYy1svwZAmGjMe88BWgfn4RxzAwFDZy5C4Q6scUMQaJS6Qw4ve3sLV23eJiVAK1WfHpkfyUVx7QHRHFxioNW",
  "key20": "5xnNdwbjZ2eBBWQq6hs6XYN5eL2n1MWyZCa2WpAbYwHb8JKRCR7UHjqB2VUVjjQryVdtQnPYPFipfUtLmfd2EgDa",
  "key21": "4JkWxLShDu5KLoN1YmpmNkbQdpaBc8yke9Mxv4LrFWqCsGCrMS5NnRGFBD7TdrYKkJA9VjAfDcKomg4WHEaxd56t",
  "key22": "W8RR8HQmX2yuu9YVC4DYgCikZ5sHz3Eekb65SuzXUa6DqfhcAfoHanR4kcrrdiTCZFPJg1UfmdUGBQUrgX2XMM1",
  "key23": "YxonJMNVk6QpqUrixXSbAbGzqBxbi7RkG1NQueiiWpRQqpRtCYtRWwaMLumxJzbt37wruiWGfXiXBgeEJVmqEUd",
  "key24": "3oKL3vaFaeC7oTrDC4S4xbxgr1hguwrTU6zwumhE9mHiVQRhWVUWjeZGyRYmesWgYh7aSeVKa5gBPR2yazRqkw92",
  "key25": "664v7i4Njau9VCiHhNLhH1WyVsLFt6hSKu5gMEXNgRiM1dCHqAFwDNsCnS5pVQAigcGxWnBf2jytMxdCb2XabLFV",
  "key26": "38shD9L9P5ji3K4nqehjArNs8d13kBtdA3fTQFTfPWCHTdKSU5woE2FHenJnd3oDoGzJ1KpFaHJNqSkoX1rtpcDN",
  "key27": "5uTPTh7cngmnz5hgDhuGoWJDbpuSPAd25jyjeQsVmt8jScYr8tVYY78BnGVVGJdW5rn2EDk33Tmctoo7zYWpnyLh",
  "key28": "5Jg5DxVQwvdXPw2tvSMpYRm7V5vg1Nojv2WXdquxMQqhLmH2hsEpPxy91cQQercsETt7JfGo31gHtpGGYbLQepus",
  "key29": "idwUsfACUPSRyBgaJsYR3nn7FFFvBFwU7rC6iofKLpzVQK6tNvhSs98igNad947tTRDCuWpKngkJziBfwVgpuNe",
  "key30": "4CVvhQJvHZfcF9LGib2UrznVzR4sf7uqxhZav1eABELWZ5maihhf9i3acPeBJkJWtUWzfHUn1q9XZTKT1qBw3LLG",
  "key31": "425WQDQGoCScsVfcfqp534FmoBy44ai2JZoKCrDJ5jn6jwi4AGoveuDBBK7z5iANFRPJCF7SYbNihKy7SUEyMWpn",
  "key32": "3SfUamqAz8SnFPz8GphcM2gMQy8S7xezyxB2haiSmgNc3oeGYtkmZ1PgtWTWjhNskrmmr7ozTrvaSJKoSVWy8EKA",
  "key33": "5T519okUArrFH2rb8kdPEjsMiLDgseXcRcNntpeGjp4Z8jdwJTJaXjetnY5xBjCnW6YxUYPpvy6A9Mj1GKM2qHK",
  "key34": "2QJmEfHbbWQowjnoBntEb8AHTV47bohbKr5wonQKePPJoxhpfjs3o7UQe7XpddH3W1Y6Pxz4Y3PkkVroxTHLv9zs",
  "key35": "eGUzz2hG8pTSdU7jCCiEuRs7hNE8BFtCVnuQwKYrWCKrjoEtuPSoPW4QRGgTusRhgxst913nruu46WogDK1gdXc",
  "key36": "2y9drALsvjMtjyDMXXzD8T4w789PQeQ5EdFeseyYwKnTPEb7LS4taEvA4XHc5esJrtWB6avjKNV3vVwaK5prNrew",
  "key37": "4VHo3skcZ4VrR6SxpD6PsuFc3VxUrUUGVD7aaa2FMGsSNKjNzwDRNjR1eaKU8cXHgiA5Gcb6bHGuzWG9F2aMVCrp",
  "key38": "3ZZTqcTxLALSNPKmESaS5gCmU278fZqf7zbG8Swnv17aXhncQPZdQEtdMjGobTZWV3tR2N8iEmQaLJ9xoqfv84xM",
  "key39": "4w1mFjGf8Lzw9Sr6MSPurK67NXMxbxdYrwWnsHcgoBDBPeNDpVfDZ2HpijbDrLUaVtaDoZyv2Exn3jKZZc5nCBie",
  "key40": "2HFg4JTbnNxWCPZqpe8yEUcPP93jzFjcqEzD813CWKTxFCYXHD2snjt2jTKbnpdELfePVH7Z3iRJLh3xXyZqBXEb",
  "key41": "22zAp9Z4zu87Qf7rRsEsxKMYDWTxeLdKrh5TATePZtcnsXNEvDiFTtZUC5WkTX4mgKNF6Ju94tURpSZ9EPBQEB7Y",
  "key42": "5Py6SJfwGUPJuEYyc63ry6fHNpJMwGEVpddGTE6c1MHWy6NzguLc4NwA81XzJX32w5fbx26bNxiLt1kvNtxY2SBS",
  "key43": "5dTKf7PDMwwfzXJ7TCwUE6WwEqvT5mSWQa8ewZfTsGCvhVBHHGCVeJL89SiyFex6GYURvNqMVzSZBH5S23qvvDQC",
  "key44": "2kUoUabD9V4e4GRb8hRjQcMGtHi3QhpptGCRENEcD6f7rQoYyxSb9ApJvTcGTTZpARDh7qakRamUwZCHgtz6XLLi"
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
