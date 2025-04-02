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
    "4uHHdKM7BoHoS1oWeqm6bYRtsa2LR1UZbamt4BR8VizT1qovEBnPTSoRYWF7ocfGRhWw3JmhvS7BcDSdoZhV5Bkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V691R7aRE3QCk7rhnUTfoNVUabAQZeTAhnqyfL2BCdu5teaop3TLzgtR67cc8mC83LJfvpWnr8AF8e38taF6v8S",
  "key1": "2NxEcK3qXMzcFuPXS61HdA4VBp4PN6dohQcFaw41f1VPkhvCE2X1iPnw2HPc2MhQyxCgHW4gqGmiuvfTC1mBVsGt",
  "key2": "Pz1dT7XfuqikSaM68tvjHbr3j8EVY2GpnZRFEACaVAkMJ6sCRtTCm3giEksFuSSP5Y4TB8D9upq7a9Y9M3FTq3k",
  "key3": "397cpcrX9pCkB5iSkg6bwTtpDoGJxNYnQmX3njJ3GpR738FoXpu1am7oRPXSrYC2geR1fDmgShp5ZgEWztmcJ4gW",
  "key4": "5Z3dZjrW2EaFKE3pj3jT9NPjX43pUdgBGeV7m4AjtjWP8EUfBJnakCKvXtLUE47gp1YKr6yUTi1iZ4K4cMFu3BFY",
  "key5": "4o1WarUjZgNhQgooSEMXHVoAuYhisgtHF2cm1Fdffc8aeuGSbxQ934Rr79xRZPQ7JddCysbzRMuVX76q9Ua4tnJL",
  "key6": "2VSrMu1kMhsPrU8h9Eq9NvpX2ch95PGdK1QeBA9FZ99uix1B2fNf3d1CJkmKcSQ5XtebCpcVxX5AgNSwhDcXE1WD",
  "key7": "3BCdfD9sBXMVpfNRmB5bYvFeBeAQfysHExV8mQ372RcxAAkjnff1qqfS5oGbaLSpHMqqZTgwTmoPBbg3uo14f5wP",
  "key8": "2XB47BPonRyHnwSN3TqDWivms3S6mG5ugYPzsWEouKbeAT6GmB4FrrULerFTFqbY2LcZEL7Yj6qDd14vAadEAKEK",
  "key9": "3x5MJTkR2TQzyepTdD49XVMNtHDYj7PFrC7oshvuEBcp4FC1RkBQw6zpwUjkFEEuCX38zvZ3qHLM5dcwv8YP9qAm",
  "key10": "5ShoBhL7kn6uNL9Y6QDyXm92dbMAV8n5VRjGYuoqUrCMDWyj2KQUeg3cq5RoHu4hbJ1jPaepqnjfUiUmW3aUYNko",
  "key11": "37HQ69aU95vCJmrXriVwGboH7dTLqnv51P9KibWYJ1FQgbYmt6h8YgwgJyxjL8uGB9q9UKATRNwR5PxAR42SR1SX",
  "key12": "7EmCScp18wWfjLxVXbFdJJ4N4nqoVuGWc93QsRtwpsrsi4xWzEK6zGCKbJhVQPKh1o997yEadFnMFsTi31QEf9p",
  "key13": "4LztiiCp8tWLTV7RcPAnx3waQK9x26Mi6fPXSd8BzDcAZDBqocNRUfZoPv2pMUxnypk2gAMsc99x2Uv4kMaRFoid",
  "key14": "5nHk2FdY9AB2qoQ6BnbyQkJHobT99QS5yqqbVvWwANrpxmaCYWbESxhikSDB8E2x2BNGBmLb7G8Y3jvYKJ6NA6h3",
  "key15": "CnQgusmbE5ZvbxMAKaGDo2W1Hzk7nZKGajGryUp3QaD9pMfp5nRAo8wH1DAVdRzphAYfrW7sGmcXrkqXe8gvC8t",
  "key16": "5eprSNe3ZZnwfWCee1WCEPAtuGJwKk2BcwWd3fgYoVqxU29JmRZjbupuLW1A3DsoEgfkVSkrkjqFKyeMokvFZ3Ga",
  "key17": "2oKtcgTNVt9VDL21By45PnFs6ZgMzUhKndpvM3GbvVZPiYThGC6kBJ8uLaDqG36V2aaudSvcyQxz3TYoQgbPf3BC",
  "key18": "23tNKos2JGZRhJmxD5X4xDGsbaRHEMnVRP7QvjdQpnArzTrxGAmDkozkHWdaDwUey6TfrYDm9EgyE2W4JiHnUdA6",
  "key19": "4eoagYgZaj2XWaw2zfAycba1XS9MNYYLRmYfKU46VBafyrmPLFENmXqrAchC5jDsLXCVSwDAa1sZYfXuFyGSohnr",
  "key20": "4XkuJSyb3mEVfVMCa1UqxwavofY7GniTuWaJtKdutGATyES7vdYPMCxzaQnpDwQKFXkkAzcnbJjcaYHoudsvEzTh",
  "key21": "3f5tA6AbHrbPbN7G54w38ZLbFjAqxD1pa9xUyTANZDn2HSAh9igsXRjL3cmExgravKf6ohoX32U8buhKW8znKGgT",
  "key22": "66eeWypeA5Dt3ExA9q7T9ffdMrwAxfLBPgueMWaUsb3KTA1huSv84tANmNoBdEf278p2AbWQWLG9S7TBfuxFF3Mr",
  "key23": "obSUAtnV4m7QDrpYij81F1FW3QXA8YkHwcETTikCzWLiqo4uwiW381TS4TSuhnnqJ9vGiYVy3SDrykQwM1qUsno",
  "key24": "3LDi8VApzUxjrL4AZX6MzgPkFD6gazeh7b58JWDiq2LczfS2KrmTq5P8EZYN5bT5xPhCt5HuzM51HfCa7fUxRxiT",
  "key25": "2JQ566rAHdQ2Lx6EvvZJviWQ9rXG3Zh1qZyDS77HZus2qNBDY8N2Az1hqjshZhgxzUVPEvZTAzrUHsfHsXe3U5Gp",
  "key26": "4w7RL5pAyueYjdd229NHVYAs5pbaneGSmv1gmmf73ApJ22jUd6ps6z4SqB2caQycBY4zKSJUASCVRarL5vRjMwWv",
  "key27": "5BJMN8cJwSZwcsQ5HmPgp9cBMX2sFKdxCFkEBw82MMPsiEca538ApuheWKWYM8TPVGysJTuG9HRTGrhsVrfXHdRD",
  "key28": "3cUZVSqMMcA5bnAewyhWcNRzcvvy1bQwcpYacU7HYgq8XUfX2asmsf7cbKiiv6pi8k522VEqeDBx5xEsRBC64LRF"
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
