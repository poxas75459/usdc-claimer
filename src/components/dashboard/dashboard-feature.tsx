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
    "2LbHdPJfaj7UyUY28fL15saxmTYvF81xrBAc8hiLY7uW1w7EbPEKAfhgBoX6eM5CWJmBipwBqCdENTz9syy7o1Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PYsY1Jb7CL48fJrRevwozi41TPRMXg9fHRd2ZFNrG6WdmM9ZpZ2TojoYGQppjSndXkPVpJz59t964CiGMdMVZ9",
  "key1": "2vAum3RzjVPqrufMJr7PYEwiXUbiFkpKPU2ewZq3f1eBF1C2ETQ3aEmv23s3G815Ney13ow7kMG687CxPNhJ4CTp",
  "key2": "qsQiEqDpR2VyhZcKL3FknPSvUYfdYotetNek33UzR3rW4PjnA3XxNViQP1fdxPGG6iSS35veZbUL3tdzYkvCRrE",
  "key3": "3T1KuujZpTmPrGL4uf3fTyfwTJb2brXjXDgpa8ZxTZfnfLxLnvKeVyAfFNEucUg5Rx9uQsrQYWVkczMc1YGXvhmk",
  "key4": "3fqDt3SJHzJuetJ6TEw4un8VPg5ibWgxPqsr4icp3NhR74tgSm8ozmus3ZQrfEAYKnJt4AymccnuRwGRkyFUe8Cs",
  "key5": "ziHiznoeNJKj37uNmDH6W5LoAbhe5Zts6evt1RNiURxDV6wXBDjLhc2CgMw6a8iFXkht5XzmEjnhkCYtnhrnr9z",
  "key6": "3vkh7kR4WmdMNpCAGB6UQBeKvYdr8EQJTTmB5MziXNV847t62QVi37PPqXXhtZfCMv3Fb5ZHRAR7CVAuCUZdCerh",
  "key7": "5LHiE6FAikavJuodDFYkqQjaSqBmvDooH59mrmqMLgyaZP3hSkU8vWsrZjVHxWRHhBbw3xD4CtkNPjgGVQ3NRemc",
  "key8": "2D3vqy4bmsGdQcF4toUXETDWq4h52BBNaDNtDxw3teDp4QA8fJim8JEihAASQEi5Rawp3vEwAQXFrZ2XWpf1UdoQ",
  "key9": "3VyJo2fuztfxgMNaD4guBhMzbDR5r8k9Jdwu4ovGKy2PkAT96RCLxijqo13QnudJoMejvuRDS4BW7agcZ7RPLaJK",
  "key10": "4gZE41eebj53MohW3uSvqB3MPhYMbLK9726sgTXWJDKqQFw5pvdaCKTCdZ5ypDdfvgR4oM6zApsuQFcjGNftxxLU",
  "key11": "3rELP6M5k5SqMHuez3YGJQgJYTMojAPaYuwB1zwMNgSQF1nFBgVcy7tXoivC11XPFVkhTyX34kELHyLpszQuNgum",
  "key12": "5m147iivtNYUAR4NWoBYNWYoYKcehuXeKj1vbbSUMu4dxzrqJTrejaxtjhP5XvBwYW8ivRLBCzZZyfDJ7Xp1PsZw",
  "key13": "64tBZ8LioEb1yVFeBb3494XkNFCALtbuv3VVBsZUSxFajfpjwgujU4DKp7wdpTN3mELUQe18QkDDf5R6pL6SAcdY",
  "key14": "37eWwhBw5jgc8FgXpKS2cCEHFaaqvNEgWXUJKRxbXX57es5xwKCY8mKz6XBhJXB9yhbT8UrcZJUBQvYhkf1vwt4S",
  "key15": "3YHeUqH25iWZ7Aiyyu4hesFYKMz8i9QzvaxiNxnaTmgc5pfWm3Wcipci4minYSWBCz6aigK972uM97PRBdr42WHj",
  "key16": "4pZ7pwj5Fw6RVbi8VK4MDW3FaxFSTEEVHJpJzwzd84xVR4z154E8gpBhodtBvwTz915aAhyHkDG4sgd1yAsnfuZa",
  "key17": "t5SQPjEzLTVgLierHKKXEN8i1GPupwPGACMJNsfmEqvvKNeGczAiPLraJzgJNDWHjakWNxc4d7TqzLK6mYdWniX",
  "key18": "UgMSzpxBWJMLAaiMB1VMMyeiTS7boPEf1ro6SQyyovHAeNJTb6kVh12MraGQeuypGkEqh1nm3mdp71R37eSQ2bo",
  "key19": "2MKPKaNmDyGuRMM8qPknaDUrznabwmtxP74WCas78ws2poT2i1HPzQz843VdA9UiNWWNTbtg4YVkpF22fU5CmGLs",
  "key20": "23yfWC91E5Mnt1PPsFpAQeLfftar6CCghMuqQADo32QZyjqNLzDMgyNEonhaBgP3YKFHK2tkULX2SWC4bajgYJnN",
  "key21": "2VYW8GCTSKGZNMZkUXULRYxDeTy5Hd9H768j4DLpwt5ttx5U3hc9oyJ9fWAEMRVijgVdNM3qwiPNiRk5fSA6tdN3",
  "key22": "31ueEC85sKH7aFzhunJ2YvRAVhPxe5NsnkHDRQt2VXji7m9o9fxHMZH7is77X4ndiKMubbxmGMd94m44V1xSbWNc",
  "key23": "3eyRzpCDovU4UG1UZYQU8ZFRBQujaXRK7t41wKj9ZYorqA1Vz5qinRWCUGDPiRXxC8ynKZdcNYGqF16ZkZ4AKtH1",
  "key24": "32xczi7Xm51MLmJqYugACorWCn4BQWYriufvwmn9KY2vyspCn1iwgxLc2FZXYpwnhopSsCiyRGDaTxMx15DS5UYZ",
  "key25": "2rfp2PsPuFrBWbMC2QQq7Ec27v3qUjLZGUUncEcaHyYNqwHuUDkTpjjLdutz699BZdH7iKjxstzcaWgiTdmNKqFg",
  "key26": "3PFbYuvrauqpAZtAZcnJ56ACLCuapdA7Zk1C83fcto9jSxUbv7JtVAVuJtgavejvpeYVLCbzSG62mFT5Bxerjsw6",
  "key27": "QcgmVTG4QVyfjMzs6cEv6eUJG5EDUuYzM79RoH1dzbYGwou1r6Qsw5zFR9gqxttcQHMDfwttjmcGXkDL2Azf52E",
  "key28": "2aSBrTeRjLq8wzSpeenJZTihkqR3UJrteC55Z1bK4uQhm13oP7sQEFMeF71KV1aokTJXwmbudeHViowPgmpMEg9J",
  "key29": "3sRtCarT9jB58nc3zC1Hxv1DJnXUPBqzXXztmmotmgESzPbKezgGHQrLSM89VFzSi83XfwToC9m8LsNGoRVNotPE",
  "key30": "3DeW5XHwhUrcm3aX1aSgydy2djPVubFRKaSyLHBkgoJAMM2BzS7ZXBj71z8PuTSuWXUNpgxvLEHDCbQP2RHGN8zZ",
  "key31": "3ibQzm89UfrqrgLiYnrwEGdAxYfBG8kJnwwrfZ1qmhUmwC6RmmouHzirkqoqDZftTsj6Frsaz5bskDfNnnNt398y",
  "key32": "2iLWScWRAeZYsE1CztyANRzuFqgmMrFa85DRGu5s6ChQ97uUSRPXGdQFy2zdgs7hxTMb5KWcwRbrLAA3gTaSV8Bz",
  "key33": "2LfbefWV5yVSQxSSKCRDEiNd7teLMtbHGw381xQ7sEAxtN9gECYCPP4rKJHwKDyY8ahS8hRno8K7fjY2gmsFQ9fC",
  "key34": "3bN2utaeSzM8S7Uv3d1AeLPbxVsSTT7TgCuW5J28G4qse4Yj6hsyZ2GZShEQWNnCuk1UXn95g3VvJ4jqzxKWFsMb",
  "key35": "2oEa3RdHJqh6kpmqEiusTzfefGDfZZhfcgtGVqYZ7NKyKJH5jJHnw8yzsPVuokniHvtnDss1Lw1aWWkNV2PWBp3R",
  "key36": "5KxU4CWmCJqF9oHyYs63h9LeZ61qqT9RM53zq1Qg5tCMgyMpznZ2f1DjyzuCWBTUBRe1qBzuX4x3MP6FmVwQ7Zdm",
  "key37": "2PMiq5PN9U7WJeyrqVtS6SfvjTCdADXbynF3m39oi2KKqPo5PKLiWbXa2R945airPiLXMcwo95vUWN81EEMdGj61"
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
