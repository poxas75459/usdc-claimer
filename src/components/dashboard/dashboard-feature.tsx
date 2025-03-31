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
    "3u8jiFV4b1a4Lo8rzszVvfJFmfFMNDRfjps8bJQEGSFVnLEMq7bjp5YXeD3LZYMq4U3SCX2LyDe3iTDTbc9EeR6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YY9mbYBtrxGHNgWkuugBHADLy6aSU8Kr4p4ypBchgP7RJzCLBACi6FHMTY5BTHfE2YUA7q1jzJwuKfgRsTgWD52",
  "key1": "3EkrV7fonW3WFdM9BCoBTs7nmm292Dymufy8M3NTauR33nyiddjezpAYMi77CbcDmPccRZs79RG4Cj69giHUoic1",
  "key2": "3n7WdXyF48bRR65oK49Qwbjw9odBUfS3GHgbGbdbCyhHXuWBC8DJFkgAPK1wUHxCSi2idzH6vqiYAMoQESv43KfQ",
  "key3": "7tvrfSLCJ39ihtm1x23XBcGeyN2eowjr79v5bbExhHyQ6KTFGKBwb6dfhBRanHsQB5TiJpPQGKsvFBjSFvYXCBY",
  "key4": "2dAJEUv79ffn68TWo2xgxffxHrmBJsnmVfB9ZNAsHcaJffzBXXEeHAnNHkLBzWcnCyijJrXd1Sp2oo8qrCje7ySX",
  "key5": "X3zHEWh9BTxTQ5wZ9hacsF2N8wfPRMEsJXbThxfXQqR1zEhaytMLd71swq7uR2xzhCmNjW6UEZjoSZuvny3EEJH",
  "key6": "3joFgNkNuJq38dVqfYeWftb57muzJCMQFWwqkrj5pUo7ZshzFECb9mQdvnWubYbTLsBrnqa4CFXQdnCYjS9TJjVX",
  "key7": "5AW4MEJy5XfuRwZ7GHSvEoGwGX1DCG51Czu5CNGzR39Msot27TDenno8YpaCH2ta7Qg1XZeVpwGYzG9cDak4oDmm",
  "key8": "4ymYJn7wq7ZDQUqZhiDNGwWYTwHv493jxGT6UcFyD5TVmnj98xeHWRTA3FwhGBr4tX8upZTEZ5FK8uADNHPVMdnC",
  "key9": "53Bs52pQCJWKiznNtVTNmSj6mxLkBW6ASpt9xFfJNoXB5KGXCZjbQSXKPdqvkqBM6T7W33j7jpnXzczEXozWi2UH",
  "key10": "25GpA9boAL9rbaTBWNFhUjKJEqZpW4sHDFggS3qFp71PNU1yNy8raWikqJbGfXfquv3b1W5B7HrZLYwU5aE727T7",
  "key11": "2H9M2zg6yfLgyPauZ2cwa7hMPnqBNEQezfJMBPpugQ5VPAWzk35kjBUZAhj23jsM8jHXNBSXwa6jdth9FV7972Z",
  "key12": "2EEDoKGmq9W2ti6MQ7wC9jK8qASXHzmKVE5TVF48FAK3HLGDCpeV6apueQ3vePREcmUKn1vNXFvvBzax7cpfxxcL",
  "key13": "7qLCKjj5QJ95wKUdciju4e939AQojr4m573NeKVZZnYg9kqCyrQL19jGKTWXhuL7yc9C9h4gUfBdaNMQcipda3E",
  "key14": "2WQZpmq5r7JwhJ2W68RGvcdZNgnQKCoKH6qKPFzwFrkhPosakt6RRkhavg86CXVmpbTjZXfDvzgV4qNDeg4GLbpo",
  "key15": "3t5NU6gB7KtvQLh5QKC5Jh4k4dRjLUwjKwY7jWP7kGCo1cufEFaskgbCwvrxgByArHcaiTw44dNnJkLdyGF56WTk",
  "key16": "3n1ZXTJFsFAvwaipwTPsxMCUS5L6pFFH4tuvMjpnf1YCKRhCjs5UBTnnUv4N2A6ZLrLMztC7nC9fBMfcWumqyt1o",
  "key17": "rqVzqCHcdy4Kx6PZ4R1VgpenRjNbD1YFKfQJXadm44detmRZyEPGZxuQaASYHyCE2CQtM17YBdQ67LXbuWvB3wc",
  "key18": "2QN1C5VXUsYGPnTUzpuxhXADmWKcVSSpoSqHKCwzPXGmcc7g8qbeRNmVZFQ4jYGjfPkLmZeaXbFTRy94axdrc5Sn",
  "key19": "c2js5Wzw56juZusos7djJYHefRHMxEK2MxwADtsnShcYJ4DxpBSveDoJnmFU6VKcrmDpTPFW1BmMF737EmfKFJ8",
  "key20": "3Ls418z1T8M8Q48Njf6Xr8eb8tJTtXQizbhFy7Q8aSTHaQXTYS9kQmVE1ngAHyL4EugC4s2UzLrphadvVit3heTq",
  "key21": "5zdkVtkZ8zNFg8AkLNPNPMuoPNDXj98ecrdwdGDURJ4fsfXjvQfg4ELaDrkXcjCkaXmv63zBnU5aXTn3fcWgF4oZ",
  "key22": "VUz5yhZJbbQDdiDN28ZbjApAcsGm9jmWqdGhEZZcBXwtYkc7eTPRn33US8Hg79z441N47kMjm6LEkZ38pPftAi1",
  "key23": "3kbeCwYqVEWos42FDvZkWJVwEcRmFjdzV4RMRFPM66ce3QB6hfsDzMLb7btMRfsJ7i8YLpERRLE2WB2poSp1vyYK",
  "key24": "2kjDu4MSYpsw3t7EWqhcZSELHyWU5FHLJyZgiHtG9aSM6nfSvsxAZTSfE4gGjhnZ86uAvZMkWudS43mYS7kxubWL",
  "key25": "3S74NHKy9c2tr3T224eDJ9FjCrkCUKMpQvvPvjEchyuaPKb4vprFEQCTijRyH1hj5PSvHh5YAPe5MbcTa7bXdPRz",
  "key26": "5WP49R2eNd6NxFcsqsTaJmhgRn8NVkK878nqjVaD6D94dGkWwk6B7cK9ZZV9PCZU36iVwQkh6YKMvFuvcXmhQzn9",
  "key27": "4UU4TLtm6wH3jxMvP9SYsiu3syteghiCKyp568zEERRhfbL5WZiXCEkUi4hiKqR9SqAMbo3WKJPMmtdYwmgGfFyg",
  "key28": "2Jjxhi12QobfTV6r2fFr7daTthg4w3gRRenPBzsmHpzCqFt3hSixbFxXZEvdQdNb86wGmau3MHh4rYaY7ic7nfte",
  "key29": "2cEmtggXnvr4NsrqHJi5FauiUL2JLm8RBokBFrPNn53gX7uP4ukaLsJczuhKE216xAX6aLjDa8DpixFNxyvRh6eN",
  "key30": "fKNQuq9SRqABmf9C9oyLejVQcQzMMdMNLEcFLdmeZGojjH8m8wbRNCN3sSt4jAk1CzCq3YsXzNvKrUjXbRX3T53",
  "key31": "U72vdKKC8THK2epUUcYa7tXFDJdThPwECrQArvJhaoU8EQsCeLcgDW7UDX3qK6dnHVMTicAKfktZpiZ5vspXXpE",
  "key32": "5oVwpBUReYvzrxGC8CxuhBRjQ6MytrFWSUuQBh9dTcgzvyhDHhdUUrAPwrPjEZjBJmaheccW1TBghTZtfNVYpJdk",
  "key33": "5a5ogooQeiXgyoug1ir78tjoqZ5cbfSuzk1BwwDpgFbajX1SjUDVduFbhqCjDAwuSNp2bkddDvuMntf7gfubTh9J",
  "key34": "2JX7Zs7W5UiFk1ihQd95EKqTmZ4vpVo8np6P94hJJEpYdMT2A59mXunJRnrN8RZXJqHPna17APgpX6pHsm9BpYuD",
  "key35": "4y2dvER6d7A8TuRoSYuqUcjP56VjZc3K1fgPdZzSxmDsE7SmWYa1ji1bTJpu9CR9tcWdjCkABicV3433yMkK4VR2",
  "key36": "5NDhtwxJfpp24fHPPNXyuXyaho9bFJyD9qPCDFHgbYe7VszaHB8DNegUrCXzs4hV3UzBWMrPAo4Pew3Dr7MjY1H3",
  "key37": "2H7iLneX1NGmDbTDEnw2Z6LnFWBh4o75fMb9QkFwGdvxcDFzv2A2Ket9LTHzeZHqEA7RJs5BfLjAgMbwVboKaZiQ",
  "key38": "4WursZ2qUzyCyJDB7hLzibRZTt9vFAdhpvv6sMxdZ5rc9L1ZziqzVsWuob7CAeWji1dkZMGtmcM51Q5x9nP7tzPD",
  "key39": "2Pp4ngXezULceCTcX7P2TKQnkCiLkm1XfysHBz5mCpK4w4dd3kisS15gB6jqwJAqA6cZkiwmzswCYocTijxwt6dm",
  "key40": "5Fdzs2jPnbu75Mmgf9hVMtN3Vvtz2ReimLTrEhT2nn6UGKhYWZVvBXxNob85V6w4Y72tNHLbeRpVtW8PNvZULnq",
  "key41": "23q5sQqDwYiyrCHbDagiq3PmCimRTzQKHJSw4r39pjX5N9jHDcipfysgnua332W5rtvrK5LQeZsvxsZM9Fb5ApMP",
  "key42": "5RbRPXUzhCQYhYeQ3MzhJt9M7mt7cxFRGCzb3N4VG2oqoFFMQ8gVYpD6RFBSgXemmv2HUdYv8VumQd317tVX8rET",
  "key43": "3xuTM1fywiG2VxBvRYs1zV5XKWHDDf7RHJNVtnVTKyhKWbhkkrCDy9SXoVjeApcBBZtshdaJM42ifMbXNEg6pfsn",
  "key44": "58FCwugWdkNCUhfmrjfb7rU3iYnxNHUvCqHv2mJUN2Qo9tNUPyPXSQNP3fDpCmHiN3JL5nYktz2tzHZbKhUznp1T",
  "key45": "28d3dDJgdVDRTR7m1i4G4yybk9VpmT58vFBVqZ5Ei87V27yGUfZawLLX2Zkn5MQULjZSqftXXvYE7gAUtsQZp5fo",
  "key46": "23M7ZSZLhkYQnCFSeN6ZLVgXwp425xHVVkv8K4G94uKM8LBsyQSqLB45qCiLL94faNzD12g2J35BQKYBXQUYGnhT"
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
