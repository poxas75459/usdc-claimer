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
    "2uiupLPLkBRtz4Q8743nX1qTvszSV6Vw2yzeX8MJ1AHEDcbNnuZfNjcTTtMX5NcfWMe7ZTsH3V91UxiB398G76zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCvTrRHsPCNSBdZ2g9aqLvFqWhAfWLYfyNFsScTXZu9ckRpeiYHspMuuPGpSKvTp6mFLieJ27z3ZfUbQSBvart7",
  "key1": "LosWBgUg9CQS1fyUnkWAxvKth4K2bFvAtqiqFF82Fq8XRE5AhPZxW3JEJiC3oxDFjxvjSTNDiuVS8jP7j4bMfGX",
  "key2": "SZmtaPqdSc1HhH5JKrtEusiaM6gcktmmneLTjLjrPx3wNMx6RWghGPUJbfP99mNsp1xypK1U2cuwHP5n47okkYQ",
  "key3": "25bsvfp2VCkc1UqVRp61DwXL4FkGvboYwck6sogiSpYbqkANTDf29caxuhWHrEQos3FbNtZnizWTXuZ25NT9DcD2",
  "key4": "2G4AtMrLNFoxdmw9i7XTb8pS4vS2rHRbX2F252X7irr8yL4eacsD79Kj9kMkAWLLSpEwHCmCRKetVf5yjt7JHYi7",
  "key5": "23qrvceWyV8Xw8zgvEXb8BLLU6JkhC7CH9MXrFLiSs8S37uCctbs45cxUPsbxVN6E2nk938WMW15ve2vEmjbco72",
  "key6": "5E3uch7x6fLrhj4EbdJoEoyzMxztv6wEv1xgTkwA6bqmzfeS6UteUgYvHJQJaF1RBoDSDJQAwkN6N7xEmVnqosGb",
  "key7": "4XVqzmtgfkZu1gJtqgtCuyHi8cskTkxoe5nV4kTcFgaZf2wqS5MZGSVsWeDaSm1hUg8WC6eLJ464uJH2nXFTq6Zp",
  "key8": "4xr4R9A38n3x6scervFrLp2CABRtcFoa5UhjMBMmw8oaPUicBFzPi63JoABbh8rd1twMy7uFcbE5EpEoFLvaZK3n",
  "key9": "571bxmntTSoswBwgEVRcwcpyDVeZhbCpicpgiPqpGfibWHxKVdpJvXUP4MkMtvQr2ZQFY1zbZkrMpYdrrCANs6Lr",
  "key10": "4UsTNu8kYpYK3o6L24MQzeRgekCUVMWyAuJR5YK7CnwnuiPbnCnyiDDvTbh1nuxjJvTc5Cs2RcZChtkr4hbyJFyX",
  "key11": "323FBUo1gdaveqa4hnwaVF6EqGqBogxfwC1jKv4TR3SiRw7EpCRDUJv9YmJd6foxAQoHPmYZkW6gN4jT8VsETXUE",
  "key12": "3L3TnHQgHDoALQ4JzEuEGhyFFMoemTJcDKoG6rM9FZiYt3ZA88HNKzSyEsLERUemQELTpVrNn3ak3r7aQWTkL11B",
  "key13": "FCYy59RpjtPMMiiXiHwtmhh1seGiwLPiokiSCKiUaiSbKtqQuk2pkVTzzQBVXLrTGEnkeyvBWTMHcgBNCQB9TA2",
  "key14": "3vp9oMPhBZoLwhsPGfJjPJE58ea2VRMz5MgFQwZrtSuVWGFxL3CxVJcxAPHfMzNN62MP4dn19s6vR8AgjCssRJct",
  "key15": "3sqZKA6Uoe5pz5LCsQSTvfQ2ZHUkA2CUButCt8piLPzs96pLSUJDHHZMWVLZAC7yshsBCzoqx1Vf6frGsMPYTahC",
  "key16": "3sHJTjBEY3yP1t21NQD5W6oGYm5ZA75AiEEt7GcARcep56G4eM3i7WfDP1nAGKX2zcPwTtgu4FsXNCzX3iPcifD4",
  "key17": "4XVhouHnk7LDdvwNBWC5ommwJUU7aXztD7A8iwH5gTN57WRi2a64VUc5EsHA2A3GgdSxffU4TUj9iGDk1iAAQqY8",
  "key18": "4D1bpGzALyUBdt2pRgLxJKZHYLnmqyyQLVs7gwGqwypzHW7rba6pHSVkThgzf5kPQ6ZiVrceSCB9EzrPD2NFTjB8",
  "key19": "4mB1aMszH7FrSAXzySidMS7SyEeqjxc3rM3XCTcSgijvcYcBRXLsf2hUgdgMv4xiMNPkQvJsvpzwmMNiYNrUyfHN",
  "key20": "4zijJDtjoeJo5TYVZ5d6A2UamdGJZnyvzCXN6JXSmsMXF1iM1DWYeuxPpJ3dKnJCgHcnzL63fbPnraoaBmyeNZht",
  "key21": "4QXweqywViuQg1LWHKUG3WAMH5g91BQxHTZKAa1tnLmbrhCvFwhNdqFck8W96w4J8PTR3u447YG8ztLSwFxyQ6Nu",
  "key22": "5WU6wX2u377jxGEAw2LWQLezChUw3bhvr76tmyGQv2vCQbCbVJjNH2iEstcpHtrb6jfeYvtoyxU8g3PemXzqytK9",
  "key23": "3GdateakdaMHmA99RyH3wM2J3C5bJkZ355m17t8w4ntntqUGh8NmULgfj1aieDaeBZsynQQLUqW85Ms8bMMMqttp",
  "key24": "2kcF8jhwWPtoxd51f94nAtDvT4KkLsG8aqce5PLeLiBifUrkykiXYv5pGGLYLewAce7NWLfAxKf7KT63DRVG9Cec",
  "key25": "ct6wScg3NxL2B5z4L4RnX9pAYynrt13Grzngmc5FtMyHPG1GYZKmsKbKjsGsKESj8qjbb5CySWkbvsSEFGDVonX",
  "key26": "58Q7nG1MJ8uaSxYXzxHGuheHoyupPNLvp6nEXMRn5AG4D7Rn5XsotTYvZXXhLPrHD4y1Nwegk7gJC9dEGnhHg9aX",
  "key27": "5ZpQu7PLjdG9ZsnpVkJPwubMqTpkaFi6X33viYB7KetgVQonF5inzsGSeCNNzJDdTHuoxVfPc6BB4DeWoBNSfX2b",
  "key28": "5bNmFowee7HabsP2Qbu1etEwiFZXB12FLTcyrLHD3WuwoEyRSUXFsaSc85rvVCj9XjYDjCtLjLmnKwg7DEHThxhF",
  "key29": "4yefStMwtAbeztQZyg2pBwBzpptK1m77ZH9BcdxmsdwC29QGhvod3x9sqwogFE5GFF1PxKwLou4SERFrWXpy83Ex",
  "key30": "2cJ5hCzmNdDK4H3E5vjSLy42oP2nEmjRWumcQbmn5ivVCkBs8SxTDa2jRMQSQkVy2YbCFyQC9kzXpGLTpRp6fwBu",
  "key31": "45xynh9JEJsHxyzWVcE5UNVYDad9jb228WpVMMc96RrFhLA7UVY9S2Hxr8Sv5KF8Sc4YohV8xj3YMt7T4Qg8EMbb",
  "key32": "2pdSaHNgY9JMfJGpXdf2tEbJiJfFBHGBVk5H9fcH1a6Yk9qBCfD5NkqGFN5LxVi1zSHpRJKRV8LBF5Mmivn9XuSh",
  "key33": "5KTgDgihWTA7S77DL7wp6US5V8Ag9oFw5JsEJpuUUSfYxW5LbWLaoDUWCgMKpL7Bm6LmN9w7NdPxujKGEvE8M27q",
  "key34": "vJTFFxKFP66VYnmqkXtmGL7XXGFGV8FwRLXr7AKLybvVmnE9GzdShMqtPzgiFmvvV9X9SHnkhAfJj8zBhWSBHv5",
  "key35": "3TofD5vsaH1sXmrrgqMyTAjSVS8BYuVxUKjhJt2EKRc5gFYYYASGqrodxqgMwPbq7NQyXEpA9MFHHB64PGCaKi8G",
  "key36": "2UcensjNiGw4RgkYo9trWWuTNpjRkMFcgfz6TWnpLv6WKcaD149MeJKrujVECmZ1b2PSZNUNUAvXzUUTKPjUhFst",
  "key37": "2cYF17zUin1JYjqJnbmiAM6vwGCdEpUSDtV4JqdWf3bUFkxTEeW7qY8Yx3QEJVuttC4asS8jngnLXaiWusgaBSbp",
  "key38": "48ATWjCoUkUjMmuabw8NDbnt4cKpFi25Rs4Tt8wW5fnZfsdb18NG3LZ4hhhsJCRZQRKCYJbhbaok79sgTTv2Vspv",
  "key39": "5vDQXwycQi9kKyw9DgUVcJDEa1eXQwYMpEaPYp2AF397ukdyFLht9LmFKvz16as6RdFXpPbdfp1THKqbXDmPf8JX",
  "key40": "5gALTzH3YTPKeFiZV1r5rdgWskmTjy4ZpbMBP8vN2pMssuGyNaUqABFY8m4qWEktskoSaJEDon1h6htgpawuQrCC",
  "key41": "WD6RRDeSD2MGmLVU6F3RmnxA4v4VgKhZALGdQXT6uypmRNmdvyJR6kZvgp866dsFqc9yUM4MP7SjrErykSndHYB",
  "key42": "5cBL9Qqw4UFbsYJA6dBY7LQimLC5uj82hUx7VzeHJG2w3QkZaNfHyzdKmBSCPKeyRmconvSEAssryHS5CFsjpPHF",
  "key43": "55WpTnLFvsdKBFV64RTCBAfSj8mVrQkVrtJKBnM8U8evM7PugWXzTEvNmSj3q4M6qnuATeG3Whn4o2v3umACNaZF",
  "key44": "2XdV3LAuW8Veg1u2zq8AeXq2Vp9H5tQK5SNzKUzTFj683ZmDreHqV8DwzHor9oh64aV5CrSL17G2y9iYsNf4JuVG",
  "key45": "3Ysx1sU4KFibs46USeGJYiHDFkSXBGk1Gixm7tsxgFfGXwxRBEJLopNmNGXHs9Tm9z575PiKFuNejpK4H2LJ69eD",
  "key46": "3VFufyVGj7fRdqVPTTJCCXBseZPcivfPsS5PFM6BprZbfLYZmQLWPJwL8UFoj8QmZjHPmPCkn5A6pbNTiSdYGKD1"
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
