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
    "5hUCRcX6UTvDgmoLnhcK1TQ1D7yYCN1XMmw4hVbyzDedejMc9PCqnmWoT35RYv4mLEspbWqn3ajtF7PkHka2pNaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vS26oM4XBcLG394ZbqEAyzaWW1G2Tm4TCbqvqJHyeY7mFSb3rsRYbVQ5Uhp4ajF2DXLHkaR4kzeHpMtGXxjg1sq",
  "key1": "59NjVe2tnAhPkjXXEDKFN1Xn1sFcvBhQyzt51EQBddm4gVAKyTAMCQmToDHRjg4w7Kyhzs76rrs8YcsxBF97ZAB5",
  "key2": "4pAcBJ3khu1qWj5AmT9qdD3kYfsfVVHzfTXL8Gh1XnudHiqt3QtuuP9VGoNoLcFsZL7eVQtbUvvp82eoak41E8gA",
  "key3": "2QdrcxjiPc4GGetFh7ApamoZcWC8QCRiWmvG9fBJ8BwZpaMUM32hk8LqbFpuY6csf4is6UN3aUUUzznTSVPSzTsN",
  "key4": "5R18mKgR7mSUpjurcqA5LtE2r81Y1jGAaqxNKWag9k7QoE1oZApu7dWkzkhihQAT8GahmRTqWKNgMyfB2C5gkypw",
  "key5": "EMzEU3GGbdsGZrJxQnSYqiC1uasqUAjthjG83bjLth66gLZFTEBZmfxDmRstjiDAn9jV1zqg1TjqE1jxgwdo7yr",
  "key6": "NJ3A8VCkUeB5snryjkG1gqrn5TvKQZnLcHpt17TE5qPm7H8F8J3QEb2e1QwN1xVSgXBmhuYB2n2jBNKbDdqvqqe",
  "key7": "2mqexYbqBgmsVHUaKe94WYGuXyCdZFJ8iwQR6GRuP2rbfn3Wm3WEHMRVCF5xWKY3fgkuZNMAVbgADfCfbUqjNkLE",
  "key8": "5adaEmtKyW1X2scs2XGQBZxKafeKqPEMUiNvN6tFfvwwke9UeERDQt6f5yMr2CZfuQNtoeWkAdNwVGsiK6n9xyYm",
  "key9": "3S4A7mMNwGgiYvm1UeWFfG7wd1Zq6XLRRn8SFThREvfrpHHevLbx3aHzahLjxpsmPosNP9bjkBXPxsFDaQhsfxPg",
  "key10": "4EcfYHvaHwG3Msq6e7EhUQV1WgYqqD1UBZSx8eohBQQxSZBRac3t8odcmeW5oVZdcyCFNixgj5sQrwyKHppdTrxw",
  "key11": "4doMNCPptv4yCMM6KtnrY3z2414tHHnnVntAgQvsVQx34M1epMxQhdK8x8cLZP4rgyZrK7ASNERkUooQPDGm9cb",
  "key12": "Yy2nYtw31ELppFGD6j8311bPht6zBQm8k15RVnrmMKz5NSKebXjuS7zYzJuWwBd3rAYcsby2dGvbRLgA8iJM42T",
  "key13": "5ZLEtkRVopoRhEXERoLwPvbSn2iCfJaPnawLgcz13tm1bpvEetkBLGaYRY736ePmfLmwdzfh3KtjKbtXDiW2QCvP",
  "key14": "3EKYGdXqrLWS9RjrbtzqKDyujDjKF5chKLKHAeaebaTCyr4pcrA7SPKm9FBeLy4pivbc3bpFDLkxYXAxvh1J8MBT",
  "key15": "XyNESn8Zwaqi2a2h8TuosijcfkuEZuhPoNM2opaHyb22EtYEgqoZxKLG8w5YowNsgDWR6HNCK2N3mVp8vNPmfpU",
  "key16": "4HqKtgK5Tdw1cCWKADmP74suf7VT16Cm4zFRo4GTLYzBeKVFsHJ8opH2yVHtDgPaKEC924t5jfkd6mRpZQmM14JD",
  "key17": "5Ur43amBquFKtZ5xK5e3ByWjygDJN2iGYxhT7ccKrauvw19Gr3kANg757CmNSf2B5bXHrcLBAFapGhUFueGx2vzA",
  "key18": "3HBCa6CMwkWSikZ1kebKqBUteRQkKmX8DCowsqwMAiqcLaJLzN7fUw2H9RwcefZMpoA3RrJhxqVGBNQTWmbLue2K",
  "key19": "2TdPDxQqaZatkAgb5ERnW2mvjEhR2zwVqcKmvvy4mFWDGh2xKTNtJGzRdakrWp83RqjsWu8gAnVVoWHwrdWNAfAz",
  "key20": "5TxdQsEJzSjWt46rXUVeUHYepPv5prd6EEgKvS3dTEdMHocUZ33VnpLKS3wKkN6WEG3kWM8kNudTcdHwTgc41ni7",
  "key21": "5zydL764qevWiS39UzzejLvSf6FYawaAyVWKYdoDRzGWmApUxNwrSWjF3BVP5U5DzzhHf1wGEiYGqQ7Ygw3BE4Rt",
  "key22": "5VSEFrrb9MAX5ZbHFcWg1gDT8kQ5Dud92Exvgnw52inSnNiEoPDeA59JFSEfvAyLVdfoogXoCY2vVZYj22gvnXQC",
  "key23": "omxBpXGymsJCTnjjLjgLuSCiLUYUJWv2DZxSr6xkVoRk1gJPpiVb4PkZntSruF1pthmRZvpzpYpXiCcTrzwMGiB",
  "key24": "5L6MoH9edJLYRwAcymZwLAhJmFv9cuYxUt4XoS8A8bEXpzrvnHBJxUJFgz4LkedT7qtq6V5C1uxnsCiuiiEvStRr",
  "key25": "3vLYitv6Y3wSXTq8q1cvMtcNcRVP4YonHmrupK2QWkj54ZfWbmLs7Ap3SJcFtENhrPY4Ri9MQDnCEaUeqkffvXo6",
  "key26": "541dLS62kRPeeLd2jQSSnLXqSdZPW52d6wHRjfnC53tSvmprogEzcw3W2382QjBJ47HN7vmFi4vHR5xXHhdmhkLo",
  "key27": "4rcrJLNFZL4SXia6s8c6tabWATgk1ibGZHebyJ9eg6ppgj5QTfnP6qnvu6DgaY32jiwwwxPhYpPFrpsZXdtDFY5w",
  "key28": "56XvrsX5VeMfKB7RsrHKt4MqvRws6Nh24QrHeGECQ3DcnF6HGrfJuriNJ3qXXprTVeVYDTXaJvfRQA3eJVx13nSq",
  "key29": "3L9qPvUVYGUuJYjVnTCoSJy7oLGwbahwFbwm7N8iTbJVcwZ85U6Y89fsSwTD9gDm2W2VPiVRobma8DyppHTyoR5r",
  "key30": "4cPuwqEwoDj1qFjZV5GvrhLVD2EM63zxdYniB3jeyLjwBgivZTEV3tFZuw4CaqtgmWsQ6sc3sjx1HzwTr6eFywVR",
  "key31": "5WMKZCzAzYiPZ5MMXhTDoCuD4CmuKVKvR8eX5iY8xczFjSmNNojNmHgdgh7E5zHybPpMcCRZdYPwjWsLu5c4qPaF",
  "key32": "35HixSjPTxebN3yXULUJfaWBhrCxMJQ3EQp6NNtjxLPMoaDQVPfTf4oron4qpRqt6NLuR6jaPXJgqCQpJtwpfZVD",
  "key33": "4NH6y823kanN4A17f2rWVT91nUWaARZnxBnvV8cQ21Tqoj2N6cyeVv1n2SFyrpUbsCnpZnNufaUg1Jvxfha3UPof",
  "key34": "8mRM3egtfc9KRy9j3mohXUYd3oJDuFXJi3JuT4XeM4wZ5JbPAfoXVR1uycXCWU2UKdeG3L1XD4pntzjAmdxGCoQ",
  "key35": "2Lhz51ghgMQU2pdqH1PAFf8agoR4K7Fe5otqaK4PN8nzH3wkG7A8otpaE5P16MADYE8Q1mB36bnEb8BMhFw94NB",
  "key36": "iRBgkyWXkjWHZnrE8Cqv3WCS4G2sfY7Y9rcUF5K3vNENPa9emq4fUgaao1AaHmhfoyrZ9uLAGeqsgtSQ4CoUJ9K",
  "key37": "2oXpnmXAWziYPdRabUnqr7XdREpGajH6VTi6U6Pb8YHqjGi72NRWp8uUGDHBY12gYnaBsHXuGU82KJtevqK3eVqX",
  "key38": "5dq2m3QVZ6Am8aKf2TH3WdPjoYX78YYRqk2axn3y2ZeCBTh5Aq1WAMZ5Pevo3twZKfVdq2buJvdQSkiyPinYufqL",
  "key39": "58goMmhw2AGGw3Z3zJRf1UanjrDFGkSHoubPcozis2MkiynvmywV1RjrjkGoVqQWUGx7BNktgNQqYQYAewxSN4pB",
  "key40": "3kF3ESjfzKBTWmA6SgGaBCdsCVec1iyMnWewngy9LqGkKavf8J5pib6GSxtQbkZt1sdd5Sycch6gWXamNs9QgYkJ",
  "key41": "3rMBpjDFb7xycmufAc4mcDeJiaPVvZm5P324MdBQcAuhK2bbvuP9X5AwH9uuw5UES8Y13HDeiyCfehfzKmN7vt6a",
  "key42": "4byEQz7DxtJG316RfchkraeiMNwT4Fdtg1Vianju7LZgBALAxYY83yA8KG2HEPWJXu3aVAFQPvbn7dsBDKFbcLdj",
  "key43": "5QcfSYenbtaFHXUpZB34q73AJm54q2RMPSieQyZ6pyhexg3PDmwwXc83inLRLErGxgwAjFdaNuCi4xbhXFC4qiHU",
  "key44": "44Z8hy8u4ExvmEAw5ApfatXL52r5C82DjzNHKxRG8skMopjGNXUyBu1TVSeN9wSiPnYcMQu5G1qPDcUQsfVRJ2yq",
  "key45": "4iSXqTn9j3vPNuVyu733SLyYjjzX8YDhdGHzJuJq8bSZ6JbAaTydsyXDrURZ9b96fk46ApVan8pECbMQpQ2spKVz"
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
