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
    "3rimAy7QnCAie2iwkU7gSgnShfgngbiZohJvapKnWiPT6SBCGvR8csFgtkHBPmZajhFsJV63tMaszdikH3mSZKqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSyQBKqKPV2CSwC7rTLW3Fh74dkrRYpDmtuVbRPB9DHzruBetaB3xy5ffJ6PkHvnyYP9eYQw4pvvmffisAwX3Be",
  "key1": "4QUxdhb14hiqWToaD2GvaWY24S3fixJqD7px4kxpXVASLYxWgccUFAERr8dsACCmVSXCEmGr5yQde4syEyutKMmr",
  "key2": "3R4AgaQCxbfJTJk2zuBzSpdc15Zo6XDZ5zYVt4kNtttKY51i4mJHCpasREtQYgrV2TfiTB8SS3jhCyYXwF22GY4h",
  "key3": "46stK8NLCKUmMYW83ijVBuzne2X2Tb5CbnWYjZuXKmrVZvymBFY6ifsMWR4L1zPbHHY6roun5noAQyQZNkbNw3vv",
  "key4": "WFmEGqQAe75VneKBntjAS6ekheTLnPdh37cHajEoYYf6GhAhskmeJz1zuWhGZKCMPx2A4xrjm7QfCipyUXCQNju",
  "key5": "2xTzd8jLH8oWkk8LBmXFFLvg32jLPdA139P6zpyq8yUyaqe43jrRD6jWujiZQhf1SVzRvNhExE7RUMaob9oW7qxR",
  "key6": "3mYiJRPKpQu1Z9tLiBiAjJQCEjWBnEejEepYgYGyr3PBv6Yqd8gSGok5ywBA7K4bx8vYBxaAFZJvYpw6FBmGcmKi",
  "key7": "ec1yUPQUwauxLwhp4AJQQW5nLbNEVtRv6DbmzFLbp1uePAWMJDsF32ocSoRKj6EDNUYyLVy4HCwVvPmUPeRzwed",
  "key8": "3SSBSoepU1kwbzRniYu1AaBmXYy4A7gUD2TbYSUh4HJtsxoTXE68NkQe3N6MJEPdSyCeLzN2sC83MvGSLfiiqH4R",
  "key9": "PXTwXMEyeB1m6k6aGNhApgH7fQF5T4e5hGixQrKfEXhAVL7C917SpVBJqqpuJDX3SiNG8LYm2L5nnjPGoCqdDkZ",
  "key10": "26sssW4tp6MMJ1pQg8QJTWKScLUp8npjexbz9trjJuk1Gu7JMJv5QCPdgj5ACUiDJySZDiNQXdAwhYGf8SqPQTw9",
  "key11": "5wqyDxiMKu4w51quFxcN3XShhkpV6KQNJqMiXu8GedawtBUyUk4tv5jmffmvy7k96AMgUXFirKhgVVAbpsY5NUju",
  "key12": "33sniiXesmUFSyz6B8ZnMANAK9zRV6WJxL1N1iezK9PhdTWDZCL8QK8QLEgS4UhXkiANNdMXLnzANyvy3bsD3Zqu",
  "key13": "5Ksy5KsZLo4xBtD8A8AUN7JywV8wPJTamnVEeWkKb6Kq7kkSwn6qEeTXZKAzUbAMB1J27Q4ZRfcjYkDkbRBWQNgg",
  "key14": "3xQVkPVuAXCHSWFGyWtL5GiRb6YK5aQeokcG2CTHyM62weUmSkGTh3L52MRBCmuQgqhbLuVX1Mhc1uEbpvo9rmw4",
  "key15": "2BZQi9dTiaHLnQej52DazYUf8S81Foes2zEhGmBMwKHcpnKQB9iqKfxuUeZRWcEUS43XDCm9VRHHxoThgENanZpD",
  "key16": "SVTD2ULwQGzvif32WJxsc3qu4ZBTzKMeSh9Wou823FpUfnJ4kHZBZTpPsK4Hq7a3iTKjWWDjQ6SwKLs4QhbGop1",
  "key17": "2k2Dshxq6ctKzr3nYsPckJUbqoezAhQoaxBhpB1HRuKqdPy8engfQGqWfu8ervS8VZZksJDdf5FCRdWrbjHqMrdf",
  "key18": "5RSsJvFVymL2RBFgNbNvozQTSLuvMyi8nG3UHh9f9b2h5GsK6e75x6J3LmvGzeBs9VEw1sbBcs4tVE1JMz7HUoR7",
  "key19": "5JMX1G9RZZzyEG1NzTMWDCKhCzq4E65iVjib9ufj6crSTs1ZkiDzLqnMKGUJMWYZAoLQUwbiETtQHZCMxC7RCuiH",
  "key20": "46s9fKfSABTaEHSFT1KCsDJif9bPTTQAsaPJKQ7KZvhJDyDnD6QjdTH8ubAcL4TaSbESTvpAiV2cMpFr6QdnPwde",
  "key21": "2gyuD9oRxrTnM5C6ZawtmhSTEUcWUK3ajJ4Hg5T3ihuQGGvAXRV6BrWJL9Lcxt4eXi3GT1A3DRqmZVvreXnacmYa",
  "key22": "4PySPd7XBrHwwjaRnRok7697qRJ2hEKPcUoKNtismSDtUmirnhque7NcYyfzY3Dc8U6mqxfzDkCRuDEcQtMrGZZ3",
  "key23": "oUur4CUbusJWNLVVrnzALe8WSCWYXn3Ajg9ZR6rUCnbHzXPHw4sCwU8eBaU8fzpxnP8ck2WurZh3Y2BmuzEVCuX",
  "key24": "4uF1h8RtdhX9vfx1xDkboRvJtamcRmBvknDpgRVCuwUoomr1ZGoks9fSgL2kYK9JoPdqaTHoG4EoEnSYv2fTXfVL",
  "key25": "2FEYJF2Q5RZF1SuHZxfc7JTU6AYBxuTAHHuTF6JwAHz5ragfPdEDAvbFfmZy9YSw29Wkew5KdT147fp89sabpfUY",
  "key26": "mQ4rnzRSqzohbFwg77GEABVT2hzSPM9dsgAoQoUYpATjVoiQWigGqH8oSxAUvvsTtzva9QLDievbS6sx7dBATnq",
  "key27": "3k9CoMSBpLun85Gh6pywdSeFrskkeMMzhY7zsPknf72Pp3gJdspbVGFX3pS5Kr9U6auXMcbLj7fL9x7fhbxdYKXW",
  "key28": "NbSLU2HSSiYa6trrYJ3xrctTEnFLR9KTocrUaVw7yhHDa3mv1SARxeBxRw3PrBNnZWEpW92PkBsG2KEmn54AZeV",
  "key29": "4S22gGCw1qEctaLBApVVihwWEfhLPB8B3dE4wcQp4EQDzz9dXFDKpeC4C3hkqon24MAAErSUzLLAsQQAQJMBn3LS",
  "key30": "5BVNwqsRdop1J96GqRtKT1Tuyzyy69NKg2cb7Wo9tPdS7i4VurZ1gh3E4nA7ULYhuRdtKxUW2HGLbKAKKR7NhhUq",
  "key31": "3UoKokJ1hbBQDrfVL5MNPMY2N58ugBoLFY5jKPHyYezDVXHXLgyXWYYC6YUauR4XXojBkuDwwczEGRk9w5buU4Bc",
  "key32": "5XcAtyn3sf6WNXRFBXdHwE5S5S2VJTtxoqxVHcEMWmyDdh7zLC7GgrQyWzANA4XCUpDPLrbR9mG94NQXqCYu98sK",
  "key33": "64SRpfzu6aMxBqxLVcKLAuLtP1jVG8zoPCHD3fjVdXF2u5CsosMZo8CdWDEGugpbSzARLXKuU4ztH2uQ12MXy9Eu",
  "key34": "46NzgFqQBh41QB9zaKRhaGH7tZDvvqiDvXo6XnDKPuYJNViqmpCR4zAkiRc24rRhWjT7w5XhPoERV1XYFm8z5F7W",
  "key35": "2U2mvVd9bxKvZvitMHdHP25mwaBwufsnPaLmFZkhubZk8WvieoJ1JkCX8NERQYm5SZYKo9NC1wHJnrLVvTWnPYLB",
  "key36": "2X5DZux1bBhRGFxxjXHRR4ptyKsm7GEmcJrACpi7SfXonjByBMoAmZeT8sKd3gobjPNgFhRvtT7BaC8BpyXBfNkk",
  "key37": "42JTJ6LZhHcPEijyzHMU3gTjzrobhSaoAEjrzBx7eRHGpDNmcShJFm1DyJ84rSVXH7doNqSRf1tQGUqx7JLHfte1",
  "key38": "4Y2b7xgHjPdXCMCZvW7ztMUZdWuHpjD4wEi32XZhDXywZYpGhGpr5BqcY6eXgH5edaY9eeQUpUXtLyYfSS91B5Qf",
  "key39": "5vENmBgUba4QpQSdtgFdKYv1twrjbd4QdKufAxqsVsTeF7mVbFYu24vt2Dfs74U2BszwpawJi4rJe1VYnWyHCJK7",
  "key40": "4dwsMbvoxLE6udbzGUmSSX3TVdxzcaXj3jUKvZaoya8VQWeRGSARV5oogwiEZmbZoCf3tGRZmKZjk8T1hu8Kq4ss",
  "key41": "cb3FfyoqQFvKvBbDgwErNv8zpyZZMcUxq26rVL4t9Ey9MG715Vx7HPLe5yMHgqGVmUzCQd5FZwXsLNd2pYYFamU",
  "key42": "5yVhLdm1RzHmj5BCUvUDTQabEvQBBY2iJce6y6sNUaWxJ7PLfaUQyUuAyyDqCdVzX4in7diX1uvcUuFG9FWP46X6",
  "key43": "34A5napsStYbYwUqkKfRP3UwShKm28C2FTt3yKLerg6tM1h22FLZfPvPdBjY1UzaiYdjbEBi6dNsh4wWwxZJHxYK",
  "key44": "2Kd72nvFcubCfzeafqThR4jYRQqe78Jm73GvGEZ6QY2iT5f73HrdJ5KYTsRPFADg5zeqZ2qCx2uaQ2J5ARDAev9j",
  "key45": "2vxk4HYLbPLnja9osknf6HxVgKPwBAA8DjRawGTxoAxUL3eoft9NADijyvKSk8ZaTRifayU81S8RjBT6EJNSjBzz",
  "key46": "2Edk6v2J2A8GSvd5Es73YvQGsNJ85kBCkmHwD6W3BDBLWkFky7FKRirTF8y7E36rYvHEXK3QzwKRNFxEXizvWm2j",
  "key47": "59Vt8zDGpC973aqjMgXGbhcdAQnbJtSXyVHZPR5Sr27FAzaAqAdjfsvsVCZoBmrfxWiJWK9RBYvrkojJEgWJ4sMG",
  "key48": "3x3LToFZ7KEFnvkZG3C8ceYDU4d6VqLwoRoSAKf9kdFjEyLdxDSMqQT6qKamSiBsi757do9LQ2N9DqyccFmMv6vx",
  "key49": "5QoeBBDDQExAJkGS8rCiukv9HbL6rr8dENexst6keZNXjCXLsCrxCpCr98z4mikArAKLGmt96dARe8rH9kjfmZtx"
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
