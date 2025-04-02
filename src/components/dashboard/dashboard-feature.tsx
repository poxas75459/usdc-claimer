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
    "KbZoP8fAncLHZz181ChT7M4tixJbfEtp23BnG4Cd9eMcnUQ3YKK7fHGpQpZ4v9rDbXWofUsXamCBFpxUzbC7Q5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qzNUqmqpKWKWcgBicUkq9dvAmALPwiMy3zM488okfyy3cfavCbt23m6KnuKoi1nU2zBrP1KqKMWJg664pGWsfNU",
  "key1": "4swTzRVDw71NBVpKbnPNk7BJmou39aBcJbyj8E3qU6k8TdexncHbeZ1X1rV4Ann5SkQaxqRAEi58MZDJUstwjbBv",
  "key2": "hMboSYFxtQRn4iQXqJU6toxpwRQWzjD6bMoNuGjauEdPaNCi94SHv9XnmzXKFc5pYq7weoWPRAQn1iggFv5dBUj",
  "key3": "383NL3nwXtxzG2SQJBv4EkXiQ868NTk7Cy1wHnV2Sw8aDHy7aho2FUuSMsk43zPeNY7hjcxLkvQCzxtoz5h1KLRV",
  "key4": "5TtwsG8ernihpAwKGcJQGPsGmzURg8QgcXepk7YBBxSAnJJZNv4cagnZmmPnRpdXnYBsmBUWM6ScesEr4PhAk8d5",
  "key5": "5zG6Bc8CbCavCqgJjQxthmQwxuycWj2NkP3uQTLBnEGPVNJ3Qo7yv4xUetSMxnFVhxAQNRgCqG2uvz4nfNfcM4w",
  "key6": "3Zo89goVi2ArcE8q7pk9mDF6opeVkeT48tsJyn3jGFXQod5Wa2KjczNfQJrobyGtSeFNYvubQYmFeJn9Fi7hZk1w",
  "key7": "47473XFivygsacDfJtLuVtU4knM3ieEZHpU12nWPPaGTCYy3JzpdGfkcU5u3YPBa4qHTme6YmkrXm3V4cjwxJtrQ",
  "key8": "2oLzb39qTf2Ee9wFGVSeAaH9GKnVvZLGbz1SXhHAkTSKgU7S5RQuXuhVJDAVtfJc6KLBuAvQKDPeMyv6RBsU2cZa",
  "key9": "338D5gWmgVELgK7oJqYiejHmggJr1f9Hz5VFn9dhjYXSXxsPRxkQosE1mAhQxjyo14QidhPAALNKodLg6RRSERVw",
  "key10": "oasf91K6PKYMwLGC6itTornAi4zEJ6tt8tZQ8nNFPP6J7WyYctd1ohkmxPr3jiHCBDa2Ay5iyG8pN6B2BVdRz8g",
  "key11": "2R5Zw3jKi9tyd6NkKjtn86r5dNs6EH9NYU6H9xoZr88FXPA4gZ6utYd2QqwmQYkKtZWitur4Nk6xkgCRWaYbohY8",
  "key12": "5C48asyyZe2xfBbms6vJUdAiK5J4YH5FznNGuEfHLG1W7Wt4t1PxbRzzHLEj44Snbj5QMp15zPnShdTs31NLZW36",
  "key13": "4GdxPJrYtw87BDBeWyMkmMWcCAevzUnj2GLthTMUZWzkwCDJCPmBgqGiW4Fo6LHJ6wEF7SE6RQrno3BSMsMZd7jy",
  "key14": "2YypGQHFx6wYUqEuqiE9JZtYSWUGg4dyPxkPyCnqzKzP67fQSsikWNzpsx2aTBQxDGZfikAnYtGPqYLodX6utCTj",
  "key15": "5V5emRS3hKSEno1ae6UVKJqhNGBuukwL3NRDgGDf9iMwzKjVSuz4MpeQuP2LaWanRcuUoWsAPegrC4eSipvEr2me",
  "key16": "4WsTsviN8C4nUp6eiciWb7r8ENPozPskj957gsNpBUMEnsUaAVT9F5fLRFVe8G26XePCTW9h4NuJcJp8gbV4tvLJ",
  "key17": "4VzSv1mnT6TVBgNvFYYbFkrLoeokK9pCBdkwSpboU5LnBVcExZQfCASYHxd4oXazZRBpzkR2C4tgHv1Nhjgt9Cr4",
  "key18": "5KqdYACYsvhu7kLxVV9paYspjRSq9AxBkc7FjmN9BCs8tLeAkXxdjCiY1WEZJtnqHFT8bcaFCEcYbDEsWFoJC1hQ",
  "key19": "3LijUaFqpEujavqeYzSoYCWFFmZFbYnJJ2YsosgEyTdCtidXE8tsVR1YWAjGHKz1Kp8dZNndr1jK9cujcSHhePe6",
  "key20": "48ZRCp2Ymiku9F5mt9stitCMrtGSC5mTo1m974udfb8QdgsZ28Nqr7SEyGjnYeahmty1dZuPLA8MxV2u5g9J9XMF",
  "key21": "3LPBvcSfP4Q4a7Jz51CRw5TpGiSB2rm7jgUXd2YYoxwWJ15zr33NuBRJ7bbJgYoPLs4dcJB8taUujAR4tzdvHtT8",
  "key22": "J2zNSgBcC7VvPVCLbvN2MgdBXGLGXC87nxTS27WJWzAqgPJACAuEwXkWmVSiXrmYFJ2KcJmCSWu4XNsZXrqLfu4",
  "key23": "4p8Dej3VL3WNGWsn68ZZ2HVEmwWNZPWgYeYKBCtASpSHYinpLEmcbPG6PXMskBsvz8Y97Zd6oJjJHUKo3pA713au",
  "key24": "64dLysyVD1fX9QpVkkS8aaLWUsELGF3RHXB3DYxPEmdH6817MeXZs4RXsqwaLk23YzY2Qz1ytjJsXowE1bp5UJyx",
  "key25": "3Lmj2zsE7hT6J3rqa22GjqQzM2vcNBXhhDvZVuMkxJ2uWebpjkkA21e8USwXmT9DviRSsAVbEYdXVfgoABzivUd3",
  "key26": "5PEeTMzwgsT82WBSJxLvsciNMpE4pph9BGLReEsu47L8bqDatQ2WfMZ1qLmXtLDVxVB6tuRyGxZiWmYhcRvkBBBp",
  "key27": "5h34ZDdQ9tFPrM13BnThzJbNaRrYJ4H94wcmY2nCJjTzymhyndVxuNsrEADbcUUsvHRDWzAEt7iDa41yiCphyd9Q",
  "key28": "2X7dFTcQ7c4ZwpYq6djPZfkLrAMKZyoFF4fnEYqgLQV12HRDFWengCCAeWrsQL6vnmdAa5finSn1othct1oTmg12",
  "key29": "5MFwRhxySAQCskY2hiGMebB1EgFVicfofmFPU2CGYchvUWAJXY4xM4qHHPWcZrzupnPv12aARZV1yeBsfuaXXJ9t",
  "key30": "3bLLpMFFBtxim47aBEBwnwdasHYbm3kKh81rnY4j4qkyAk9wxLdCLAy8CiWYMjaWSiMgZDEj2NdRwgiqytFAcuAB",
  "key31": "42xUaDwsjN3QMcXSxmnUjZzaW2GADHPiLPrvo6UdchjeadDxgVpiPaeJM1zfjFGxFXubMon7c3dZfT3rAAzFCPMS",
  "key32": "SDPwovAHxX7L8BsC727oE7LR6emDw31ZbmPifEkmM68BRc7YwAao9CBUa1PjpBXk2Mt9qBcj7FGrMvhnJtU1U3y",
  "key33": "4TNxCwFDAKtkAVkoQaSDEVhXSB3MiH3w5vse2v4viao5vmyTEDwwzfDaKjEYvG77Tos9Bwbv5P1r7aSinKrzQZjM",
  "key34": "4VF3WVpRZwXUQ9rMVBUqNdNT8LFfctV35rQYZsZY4W9qaf3FZom6JSjD9H384aryxmy1Xp1Jjbtu3qLDwhFRomZ4",
  "key35": "5zTntTqfyK6T9CucqE9As6QLRbBj4YnDEZKbm4ai16oP2L5BvU3UR6hXQvJsS1xmw6vioYgLYNTc7TZZWCTiWJN7",
  "key36": "4tn2J13D191rPb5zjk8w79ZdwqSpKJj6yjYvMy7bSJ8HEK6aRwu1UGdww1hHfVKgqFSXZs8fjj1XitfxQ6M2pVJg",
  "key37": "317pP8NtyD1YHd16nTaDXRaQ4NQAaMYhzWHroccdxhtVN2oiDdEfTeUjjkUo9oiSF9bnS19reNCcM35wTC5UksFZ",
  "key38": "f4E1J5PmWhv6fWAJJu1EoWKzGpAqTRH3TbY4BHT4pGM7gyDQ2XsEwVbiUbQQ8xx4vaUF353dhxqDs89ThySkDfJ",
  "key39": "44GEbtfdPKEEra1kTApZcqpsWxBn48M2kDN6HmLc9NJHGhuAY5swVn5Y5zpe2fF9QXDgA9hDF81SzJ2Mg6fn9ytC",
  "key40": "56KSpciPYzNPbKALQ9VCJvFo5Eywu7crjKnXDSARHDPF1JAso9KqrruHvJhKxwgGzFA1KLjtaEidZB2WwxrDiLaX",
  "key41": "3mVVeunPA3GomgqFpMrB93HEbr2YenBaRSco64ZpoQn33e4uHmDe9LDzX29dFURpCgNbZooS853fqjvMTMfoiBbo",
  "key42": "3DPMDobwHYB33qNb6grCBKJ6vSgM5Teoq7LEkBxR14FQfN53jYYHy5EsaZ6HKkjDJTCGCVsPgVNw4JhH9ixByPoh",
  "key43": "zYFoiHBQDuRAU5tshRc87jMK1khtQue1S9tt2stRPfHbk8ezRpxmkoUVLEzgmGJJeUF4ZkGuqPiuqNkEXsVXkpb",
  "key44": "2qMByCV9kooRg9bLyzGcwZjgLcfngcL6vskzYDGGTEVQ7NrWQpv6jSXUwcdh1PSSfiG85RdDDUY7ab9noezMrrCK",
  "key45": "2znvRMaHWF5xFaw8JNzjdsuLQSY8y3Efqnkw8H8q1p42MPcwX7iFgieq3q5iVVANnEAvXLYurGRLYr9Ast6SdvGY",
  "key46": "3aLT5i1V4wmtrXjD7Kci2ce8RCjQCt9kYZHMUhPk3KRdT3dugxW16ozpihzKwXiPfphqTKgVtWZS8DorrZSQ91Gv",
  "key47": "4KBr1zYzwd15UFypNAne13Y25LmWFjyZoJG7rGNJhzXQ8Gky3djkrsHPR43GJPH5pJ6LSDeqbFmLoLyTFeJoRWGb"
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
