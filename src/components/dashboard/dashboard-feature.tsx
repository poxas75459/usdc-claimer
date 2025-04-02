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
    "5qn5A1q5BrEKkefJqbLjaUWwL3UUb2jfgPXVmD7ZcZxtLA6bhaNrwfdR3nvtnwMHQn32ryrakhWDFrbkx5ycs5Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6zbhZ9UbPnseaMRB7PRSua3GVjELtq8AqtTYWiTjna3B1AQcra75FuaPinsfRg19UzA6Ugg3X9gwokjPbvywHN",
  "key1": "3Lm37YKhzoyMwadfxEQAiWF8P8QhswJpju5nYMk5D1cZdcuw9nHKnuiPJngu7TWrXMjCp4iG92rgc8ph1BqJbEd6",
  "key2": "vojojMg9yR4r5AZ3BZZLzoXFXKBM1krPXV59sDHcUCipntB2D6pNRVbzq3gsbfk3A6P2HeYAg62bS1q2ZMW1jEG",
  "key3": "2mZZygTGbT1jPrYXBQGxbMHzsGtYrvY1ntDWRs8zKdQBj7ggHpDTLtWUStHZ4A9YuJabN5Piq6aXmu4VMCRxtuNm",
  "key4": "56J86m9FzBcTC6bGTxAb2KUVq1gWwibBXKFmPviW2Ug4AJwqKvZtcMayMUWdnD2E5ee6AXEWrJ5feUmjciFM2Rc",
  "key5": "2iLXeVc9DKVSJhRLuMrQABrLL78y5SEVBiaP5AAEhf7hFRojSdT5PLQidNfkbmgesMtA2fsa5QqMC2MGNbHHrAJ3",
  "key6": "5B6pawt1Eba3tvjGtorVszVEBsoq6vNmNof2uxBwPZ3Cm5fMcBrhjx2uCQNrYHaRjmdN9QwuKA6xegyNcrehWUM",
  "key7": "br6rNL8YR2B9pGVnHstQFBLYo2RREabNP3dyGiwa86DmLRfaMoiJum97S9xNGV5zmrXzHct1dqbG7bDPnot3tPW",
  "key8": "2vFnnxA54SVaAVEyxMLqqYW6vjL21CKYRHH2Q8ke8fzYVT2fDN8Fyv7P4EeNRbmW1vHxm4j5GCvacnSTmm6mjkSs",
  "key9": "5MNZF1to2VyKkLrTMFE9ibZSyo2ctES4AJMPikmDsTru6aKPtkVmAdmR5uXYe1e3bLnx9nEbR7G8QqZs5KuMzFfQ",
  "key10": "23LyXA1NnnwvhMLHByhP5oaBeJrdDDEQsqBvhaWf1fGFF4aUY6k7Nt1Q6MdokufquZ7yr2f1n6e7xkypmU8SkRgL",
  "key11": "1vBxWtuPDFHWYNfJXuAkoH8GLjSs2HB5hPUqqaeG32cqXe4H37RowE3TqxD3JceepCt2eJTZub5TBd9KUjfnkrD",
  "key12": "2v1P7giSTymmZVtHenSURJVxiz2TD88WZyA7UQjyw68CJkDPgUTtHFQ7BmdA3Q9xN6pTJZ26D1QZwqgBsWPeVS3y",
  "key13": "4qC5p76EkL8nd1fmUrLesyA4hKFWYwW626qpX3FnKFzcThygSU1sN5pJ7HDq5rJguAtmANxCLmsHBAB6UdsDwCjS",
  "key14": "5p9Pt8gGvZmvTmGHmy1w4LkchRzpZ2bgWsHa8jEBLnh4bGPC2WQNWMSnWuKifPKEGSf74hGg1qQruJFoGWyJd1Bs",
  "key15": "4WBz4FH4DnperZHtg3Te5gR4DqwzAZ1aX7mXLbtW97h1gqnXU9zaFujNezvadb8DxYLKP6aQG1HGm2rDguXD8Kxs",
  "key16": "63jsS4z37jLXXuNjrjuwNx5fd2uHMRV75158tqBBFPmvraFYdkm9H52B1nmVXKnd9t82MGXr1CdScVpVYtRVFa7E",
  "key17": "4kG4XFGGs3atX4HHL8kYGWtaZbh2G5agF31CcMFoRtoo6biMPqWVDqxMuTCKfRaNPQfm21AeS4VD896VFwS8xczF",
  "key18": "2hYZvrQacVoMBitxzekCgPUF3EcKqegDxEU9Ldb4rpPW76GHz5m7hBP77oeLdcYyBaGLeKBz9mBiMKQvZPMabBNr",
  "key19": "kN1nv3USBkShCQXVZ7pU4j99bkYQn9m85PKAawYoPDRf2HZsV83oVbCWayJ3MNmY6YKWMiYisaymbcfjs9VyFiw",
  "key20": "4jWXQ4UnwtTiZj2X8H7ofsiYkY1qE4ybCo2QKKZMRz7EVcw65vf8wqjhbFQUP1zSxLXXejJBJbtSXSwBFLwUJyu4",
  "key21": "4Qg62K1q6RY8tXfTVkLy7SAxNYkCAbiEY6s8vpCwRxvVo8mpk9769WYYKdrUcJNjYaUTq7QeprDCZPgxhsxGHiHs",
  "key22": "EvB2eeFMMfYVpBBAAiJ5eJES9TgzZMeB1nf1Y6tTXbzMFdaLAPaok7kjnk6yo9vSGFpYAnoMg4yT9YHnf8rhLcU",
  "key23": "5Egw3R2FReTxsA9uubaiRzfX4yAz6EiGKornoKpUnjhh4RSGNSGhqP6JizoT5YNsqK7PefCZmvRwjHfHFfNfyebY",
  "key24": "3Vupykkm4hJbqFFsNe5STCkuRvwrYg9TKEBoLg3JXCgxb584WisRYB1LQyiAEqP6PBmMQ9ysyrtwq7eFyuT9BNmg",
  "key25": "2qU3Sd6j1FSzvddT4rfD6rYAWGxB3WFQiupvRCAKccSYSaanfydUxe44ot7t3dD53oiyjQcUkRXEh2Hc9Re6oydT",
  "key26": "4hfn9zZiv81rkV4rGwa6ysnKFtCi1ADZoH4ugRc1eLUJ8RPCtFwqUJz9mM1aNwBxi7ZoSZrNgQthYFmTmUSgU2CC",
  "key27": "4D3cHPQmExk9FW5nqh5szzyJ38iCTuStiqE6quqSncn3Wasu1uJc9X1QMwZK3dg7iXGdmjjFSBUuX87bJjTRv34j",
  "key28": "2NC4T5TZsuAkm5r7YWYAszudeFnq9gXFQkjU4b5ZCdj9hBUj4xhCHocxd7e7LybzkBfnSw6153mYYjhSVpyx5j1v",
  "key29": "5WQVBBe1yebDEb34KhpV4UyBfg5i6NhrHfv48ozypHPvEmReL2iPer27qU3a2BNQkRySCc6w37yq7oJjHf2a36of",
  "key30": "5XAZc1Hq7z9Qv4yD7icg7hZAbeCtoU8PqCz5QRL89QLRYFqpBkLzeubKkkaZsSusmbSsqPmu3B8qoFU33U4sAz1H",
  "key31": "4Lb5goVY5CryJAvYfaFcSbH9dnn7TSHFvDthypKuE9L1937fmVFgkm3dxLVvVkwHYVnzyqn2ngBYmWzprHAP9diq",
  "key32": "3qGWBFqT1P3zhFqdVgUyRRTkuMoBd85am8F3Jg3LNvStLA9CavjfYiojRsqMPMgkkrQeGeG2Hk2xd62H9SLjPkoX",
  "key33": "5HALngxSeJMKoL2D1rKS8BpSyebyHjYMRqZoKtegfRBuTxPKEE2C7iT1XRrLVPXSuToC2pbXGkawaeiZthUzNKGC",
  "key34": "AzVZPqWeoXP5FCLpZ15y7o6zsx6rgkAoc9R8cL6MeXSduuCmoGv6iQRrscQSTq5jeHRm9iMAH7K9bAPFyfUx5XB",
  "key35": "29A9Kmvt7puY1vG2g6R5cGoJzUwY4qU9S3MoEUuFJCxvhfL8oHeYmhnh6MWsgAbGzfzGRzF6yxASJ6FZFfAnB3Tx",
  "key36": "5uXxRMutaNXBBS4h7eEn6BkFPMrCXzG86Upki9MtSZePKyWDWaWJk4BripSPQiWdiq2EWM5VsdtKTpxN1ubvWvEF",
  "key37": "5sSym6Y3YShMMUy51dEjP9dPgAZSiDz4cSzEhkSNw2whVxzTidviq5g857kQVkdANRVjZvqSF7hVxYzXPGDWpmpH",
  "key38": "q87jBXQaYFZuQhHePFoQ5EpriWRn8azHS2h4tmJPy6pEW9VuD2i7actQUM7Z3QH5EYhU8dBz4i5jVxCxvr7Sbxy",
  "key39": "F3dxM8vq9U6PyzBCYivvaa3hjivm6SbFn6VXyERF3ArUSUoHvG5rKzwcMYw2STwJPcbJ3hRQejackcZiZ2EMzqY",
  "key40": "efgN4KRh2GPitfyBKT9KCMAAKBDiEhG4aKXSyyW9vQuKSvNRTEoZVia65cJq5Z5UpZE4yTo6DU9DphZ3aRiXENj",
  "key41": "2qMTrSjkyxhCGZz4tbzW3yvsjEuCmVJY4pVjGjYiQX3RSEQHMzStjN8XiziCa1LmyVbowcrKCjitj3PVUQUWKrWH",
  "key42": "5wfxoaQ3Wb9dXcdYRyEQhE9NY7njpg8xtUiumMuPVQTzcuhDmsFY45BQYyCajsx6eFFjX1BJyrZUk2j3DWUrNs4n",
  "key43": "23jN2SV8szwZcqAQ6MUDeXQ7r1FcD7AeCwWWN71pDJFtT3QM9acs5A3jF9jYWgQ7QP9NsaVfqfRQty2gEdX5Be9p",
  "key44": "5h6Y67jesbdbX5CDVjNyZ1QXF2Ew2t9feTxfrVyjiyexfgRz1Ah6J9dRdCJK6yyBmQhbi6zgL96jLXfYjLZLxkzq",
  "key45": "2JTU6XFegAdxXzFD9m7sSBDehz8HJXmMEVyQuwwfn88cLy1kveEQ3R8bLCxKfGZr1X4mLdguK11RfdoqFcaRqp9L",
  "key46": "5JUDg5U1iwKLfFgqwijWC7q7sHYXcqoCALpauP2cHQGrBFmfgkzM6cD7Zss4pFiif5MMP83MvBJJimW3BxCiWB9U",
  "key47": "37Dyzqp2CMZFCQbbbPiz5BWuoMssKY1f6X22xpZrFwFSuf12E2RjwqLmdBAdnKA5sbCiV9rP6zcNWCTxrghtXFx6",
  "key48": "4dvrsxJnxjb56wfZCoccvCoCa84cBKeodY4tmwNjXeCcnGZb7ThMCBMmetbeZFJ9i7E7F6RZ3ENnfZmXbQahewWs"
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
