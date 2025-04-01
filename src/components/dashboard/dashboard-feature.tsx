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
    "5EwgefPEuWvXzewfPjzEpKATrX7YGVkcTMpAx5HiTHmfqRMeE7jqP9xwzWymvhxJdMGuMwpzuATkqbDwAeGgtMYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrBBcGgqQ5s92E4FgKP7iKdGdR21y3kbvbpYUszZEynJJ1J1nkUXtJ4vYSniXHCFxQn26e6EjjADUYpL8URKoAb",
  "key1": "3XBadCF6UcugjbosFSHL4Q5nar2gZsmY77jWCw4R4ZywS4XHxggUVfXkKTozEMFsCpkVqopLvaKRxH4ntjTcXQ5Y",
  "key2": "2R1g2Ux4cqET9H4N9Xbjf1ec7mBK5v53B7ec1SRtZJA7kQPgtrpeq7ZtuMeV2KjN4uuG8dbVAj8HxRBTo9USxBQV",
  "key3": "3jB3Pyc23qLYiz8iBRRV3Ciz4LSGGwY5fMwKCpfBQPS8v3GwgV9a2TnLPjxFjxg3b89F7nDW7xrQejwRoVu71TnF",
  "key4": "2Dqywj2LNoNGS5dQPFFDBgC5D4vUUpCUwWGB2bkc3Naa9pzdogS4nAh1SSQUtD5RWomHkvNXroyNQ57vsb5jK2si",
  "key5": "2M9ygyrSDJv7YSZDojVMfp3qHAMk7wyhrEC67Nqa8qRxVSfZaS4Gx2BJ2gfBShzmftDDtTATY9ZAEGZAeTrym4EL",
  "key6": "2vMFVUhHHW7n9dQhjbu4fQEDKNYTpp5w3WgEaEQZ7yRAWCHAdHjdbFNmxzhnckPywdiBh2vGgyAxecRDLtA3NVMd",
  "key7": "3rz8f5rN2VyeqKfdPoX6tN5BTkDJoZWsMZDmVwUWYZjYsLe7NxypRgq3A2LKK5CDZhrxCkMoDH1m1ANLVJ995wEs",
  "key8": "3JfJJHwprT7ARgm1u7khMrvqq7faup9QmNTCPSwgnpdjAtib4na9aTZDCPp5udfSSQqeZFZJCC7tTTpykrgF6stP",
  "key9": "2wVb2BVJPwtKFesVDptjGhLwGTikn64fL45vWKnRJZM2WKf4ikeCbptT1UMyknoUEHtEmEku3xNQK7Q22ahcVcwt",
  "key10": "41X4Tz8Ch5SXSjpVZsjuQaRKMafkJSjxQKeyWvhvCVJngXU8b6eiygiBtjpvEDvJeLFuHpyV2eirG7CRgrAtkqYo",
  "key11": "tqpfT17MuACnuKABDtCnE8ScWsutG3kY4EL2NgVciBFubyrM2kVVkSNjssJ4TA8Eg71YNngWiS9PNEFnuBc8x56",
  "key12": "45DTgCdfCU9RKQazk3CHHXTnaRDDrzT94Zxj5TDvYHY5DYQfHnrq67wZZ9gukBPSxER6suPDjScm677W7mUVDYtR",
  "key13": "61SUZ4X9bwcZUfcrdYQUMRqYnRMy7kNosJ1T1ZL5jjPi7gdPX3ZVMP6D4XUuugCxhkThvMs1ADGaJmyHABNGRpKd",
  "key14": "5ciTgpk2ddeYqDv6jjwS7rbXPrcYFCNMN9ejDUtgnTn8PKfB3UpPG8stEpEEQmNry6QAsf4E54Bst79jhVZjrRtz",
  "key15": "3qWbvAwfm8BPM4ZD1UBdrArLj77krRCjawXGnLz6tNJ4VrZxZM6kywKQGVWKL2HX2yvboQ7bhQ23zZYgsRhC2SdE",
  "key16": "5vKWMXTynExtsRfp42rUBGX87sBXPoFZxzYA2p5UHqD4fVpHiQXAKMaWb5oE4QJrtrd2wrbC8DXeH8cdMzS653LN",
  "key17": "5nkvwwxRMGGrmwmtz72Cz4wzqkteySyjxw8N5ZtNwt3Rvq1F628auySfsPrboy6zXHWJwxaRae9D3NF5XS5qM12M",
  "key18": "2ezvvZTooyPDS67rMpKSNHBq52bYufAkSH2HcSKyKBrbakoqNiM3w93Mrez1kucJ13fmYM9EyDXU4Tjpx5BH7nEk",
  "key19": "33oHfcBeDSxwBrXmqojNKEBVFh5m2ytBMXya1ChN371u6d4tn9YF5dTpw395f9PwnE9aAWsGusCWSgpfvN5deDKu",
  "key20": "jv8q61EeR4h8hcx9zX55SZ9YCGzwiRX7Sdx6aReTZdEU4Dq8tH5EUSS5dFpLBUVEATikrY2rsZCo2W6XyHnJTyK",
  "key21": "rzFgaFGK4677tnKCGF9oKWghe2CdGThenXnHiwmYHBEwR17YYX7uPstTPuBwenmF3FKLaDiUTZ5qBsM57doisYW",
  "key22": "2TivysvMNcS2jf7WhNYKPyP3Hfh1kfNMuwsALTimc5jwx2bDAkeihjK8s9kReNT2RPQ7ds6qfAD7CVFJUK6FYSuA",
  "key23": "4Mi263ULZmhWZJoZ5o7beFnShj1tbwAtEgyncb5kModzi3E8YR1ccGYGCDUay2iWLUMzy3CfpQg7FZe4BDQCtmrL",
  "key24": "3Y32EJf7Va7G1ARW1V7PhFB5yi8i9w6ewcVvNHjXAhjgif2tBNqQdFFhr813zh6vpLnToWzTWmBfSpCSi6Pa6q13",
  "key25": "45xmuBG2Ek62Qo6TJJ1ggnSs2ogwgbrzRUgXhbh8YT8Sbv76LQMHXgNkUqWu655Qf6PHv9tgLVFDLsxnGJ1q9w17",
  "key26": "5zfhmxfw1Htq5iBYPYxrawVL1fHtJDPFs8bBNE2Rfn5dj2PAQyS23eEhi4bYvDz35yvfi16ybH274VmKPjutTkth",
  "key27": "5pecuWogtSk6W7Ex3MqjGNpBYtdNmNNs8y3suAx5U1JzSkmac1WwsEcSULy28fhpv3VvPeerg353cwW6LUxp9cRL",
  "key28": "rJvDvNP5w89gGy8Fefm2g6h64FbgT2aJqta2euNP3RzSx65nUVQzsMPb8ovJ25jNkGkHjbYK5J3rjDqbiYnXwJv",
  "key29": "5dQaaDwVmnf4EKcqREVUhXRrmoDJFneFBgdaTSUfV6E8abnTrXecDPGku7h5yqARRj5NzBgzGqqvEkVTQQ9F788F",
  "key30": "rVLAq4fEHfzQT1hj1NASTBYmxSo3BqBKNXDpNKiTMmKTgSh6DURan8xRULAetnHwYVEcfkr8fPqfVZ7Kx5MJV9m",
  "key31": "5RGmU8AtRp1iG7PWNBvPfJrVZHgLDFzrrdxvdwu18VyEJxeLuqS192RzJ7FRE38iCqnZZknGCD5WtpaJgn2sviR4",
  "key32": "2SWDSsA7iiPiiWe5i4CKsTpZ9c1ojk3p3ys5bKYrt73HRh9mvoX5tLpb2RJL3h9dC46yGZMWmQS4ndMzpKyp6aCD",
  "key33": "UCsiHedmWrgf2cxCdawNJWUYW6paQpHjE8vAfcGigtK68iLPTEYBPYiCfrdE9tq1UAWWJHrRTCUumDL6Z8qus9T",
  "key34": "2KnwZZnnTUoEbK6Fh1kuyxsPzfe7s3WFYWt5bykQz3Fo1kmX9c3eWgaacAmncVbhUMhpMboXK3SWtw2uqPrMjNXQ",
  "key35": "5EPXptzvDopYNoijs7fwW1jspTUK6TNz7CmaeEghYc4S4K1rxan6RsrnsLudxDw8wFtdmge7t3obBf8qjFvH2iJE",
  "key36": "5MwQcmAKVLhFyvii1R4TT9ywCfbMLJfEtdTciHtpJDSCa4PTfvfXnsDd64Q2QRFd3FMyz6CmxWDqCLV4dLCpzGrS",
  "key37": "xtC6SEkaWd7vSmqV7eZajn5wMaoAfu61ACL9w49RFQZUGWd6iyAXfSnospXHBkKWBqJn5U1kpnqgayg7NGLFcJY",
  "key38": "2EnyDFLgYKusU8SZSNWP3uypfG1TJKcMNrjzCeikbu2CXjrWDt6Qp7rmdTuHVNxK84oag7xTyfSJgFAT3iR2Arzb",
  "key39": "5Hy9H2mDaAzuXdEHxPzLiAVtGJtFGHrJZJGXL9ymi9ZY2ecE33N3ba2Wde9nB7Ga7yDmfYNLdtZ5tA1MHR5p222W",
  "key40": "THhcoqJVCncnfo5aDH6E9v37f5K8S1B6nkv6V9NXVgfJ2s4fWkruRmH75UUXqUsELQbXMZ44yFuKyuZarhkLU21",
  "key41": "spwa2pcJXmzoBh2wvkzahgz94R6ZfnaUsegJKfTjWVRxz8rqrHNfcTfgmAhoELaJuUiR93oPWkdWgpirvaoikiz"
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
