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
    "3DoeLbCGkJgTGy44psGfuMuxv1UhDnY8io9oqDQob6Jvm9PTmq3fHTQvsC7SyQVUXGad6o6bW8Ztc9tQmsuLNNe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgGdSXgv2xbFKLZBwxrqPJveT6W2hL1oaYLQbkVimJzmxr5tnDwGNAJyETRjf6HEWUGQ2QNaWi1rjqnx58Jo4bs",
  "key1": "4JryeJDD1S68abxV36b8pcpgpkePYP8S9hn1ujzmpBQ5pyZTESbH6RATesGBm8ETFQQhoe5ScQyTnxJbWSGZWNCa",
  "key2": "483N5bvftvRRJzzPxRvS4wea6P8BhibvHkwdZ6G4NQyHvsPyurRpXKG3g2co3oPYNfUc7Lp5hxKxJhHUpNYoBTNW",
  "key3": "3K2Yu9qNzz8NsKEhTPqwSJFFQQ2PYHNwXVy2nayCQLoo5UaFJcgdiJDWpUk5C6BKys1WLq75yCGbWgwjPRaJ3wP6",
  "key4": "43PFHYbm6GHgEeH3RABcPgG3ZPKMVgPbuNgmMW9X7ZULQEpvDGJiEjcQyrqtqreWtaLzcXvXrhN5DVvfkxV4SRGR",
  "key5": "66tfGzgg6arm6yR2PEaSL4iHpnVN5Vsqwr7Tczca8dpkekbeKiW1yeq2duiLhRnTuHV4Zrw2L7bu4uZ7ZGdrpveR",
  "key6": "4hERMGTj3QoBGAqBBA5esEgQWn56NvLMqwp5FCBdmQroHovpfdPydNsTYCZmyCaSp6pAoTALh8NoaZYZ5LfmoTMb",
  "key7": "2MQ7uMwBEnjZBLGmkdMbXPH6vwgsVfHgMCnXaBZMBry23CTKvN8R3X5nzL7Hz4sh5VGSsUD5XjNKDmYAhfcaBpnH",
  "key8": "3EAPMf3xWmWcNwV8Qtn37yTQSsEGqVzxept5uXgJxQQSAnbCagSXrPL8JPzjbELQQC8NWkwRhERAbRMkLnm5Nxtt",
  "key9": "3qJnzFQbC8oQARJGFCper6RMAhzPwWYvVndHCCgiDGXQ7T3U9xWk132h5EoX8vXfYt7xZz1HHiKDEr1An6ZCUzTy",
  "key10": "4pu8oYbWQPeVF2ZWQWCoBUeQHWNmnVFysV3cqVUGkmNLdrLuaEr38bGvAzBkxSwjPoist5Lz7LtJVXxTJAP9jj9H",
  "key11": "32YtjECLxXFu28KJ4wWBfHknyTinLATMsbQ6eavem1L8JksgyMUdevXag4Se256AY4yS51FjpFhsn1eBYse8K4G8",
  "key12": "5znUU3i7Mo2vmBxMpGKFi42wWVF4RZariXSJEaENZbJC4WFAvfRxj5a1MPSkg8bf38hxYSGzo33muj3NLyR8qzwj",
  "key13": "2GruTAQ8fo5vkMBuQefkqU7kjT9u1kTgCxkrKHVaKGz1bAwbYJXTCtwKhsJgjNfkvzSCpR6ZF3GCtXrbpKEtEvhN",
  "key14": "hCdd1CX44xWXMJnQeT2wyu5543yri1CT44F1iE1zPFR7nX574yr6m1JsqRbkS7vtYH6xBgyXiCRSyhFLHa9D1SD",
  "key15": "4DB4ajED4RmGJGmtogPUt3rzi8SzTM5aSuhQ5hwSkLVcmQhqb7uxwbpZmihRowLHhdgbTbbFpy6LjcThcxDvsFJT",
  "key16": "5YYt7HFFLBViD6yzLJKKCN6Zxsjs2XuGwYhfbskT2CxYwgucr7UUjjAsD1LDMZcGXpX1jGJJnycQaBpkTs4Y2z2d",
  "key17": "4oEQn5TjgBakAaMiXKpC2BhdDWnHfCKDxsT6UqYXdZY8HmCMMsK8bhbiGc3MZ7ydEPVQ8D1vhDWuyX9V2KYvRsup",
  "key18": "3kymbQVAU7tkWd8753JqLvTQnwoWipEmgbn46UgLYRGeA398neKGCeBmVYZYZpFwMLjBXQysDrBVsxTXLscc9LBi",
  "key19": "2yFvXzvkHfRFDtVzVTkv8GNj7cw2DALa9uRGDSA2LyH4e9qzGTHsUvk1nVZXFBHCtyPwXmN3CPTt3gZst441bX3j",
  "key20": "ZmktsoTj9iLyEWKfip9XVtLZ8DKF13qpPUqpgoS2Fn4PxSwyXQokKZSMnYKFfXtVS8ZSxWGvHx3sXSyhKSUgCmM",
  "key21": "4W78akXgWiac3g3UX9ke12im2kNjDCJzpCqirDg4DtMr77qRpyXWGAWTcupfgFGQcmUWkcyYJG8oTyWX1qnM3mzq",
  "key22": "FJ3fdiPKhTT13mgrfVfWQmcQ96A9pknTUnNwWsVEAWsbpX44NzQDtrweyKM8abVx9cEFSZWQeAyCkw6NKNTqvyF",
  "key23": "46P5n9v4PQkR3LSq2JcaB8VNKvp4aSZyNdFXCev6nMh9NVPecsF2M5yQd116LS9y78brK7M9Dbv4p8QuJuU9TDuR",
  "key24": "3AW3FEia8j4T7txxAJwcLGLG5jzUDBh3vgPegbkNdECDzuxyrXk2LGFSGsaLMgoDsoEkYDq9hhqd37eCSCn2kHH2",
  "key25": "5QEUM5cqW6erUwSjaGGNp3VKv7i4bZnDTmrD8Mnv56PBZnRYghzwnLSbTAnUsECh2eVZpYXxXyMoYhaYwcJmVha1",
  "key26": "3rCSkdyyCVkYPqondvfWL6V1RFaxa5gUrffDeoEeaXhwdnFd4x2tY2hxobKUGJV4usKTr5phSWpb5LCi5kAVgCPF",
  "key27": "5Z4CQCx8nCxDrKTUkv839jf29qQ6MyGsxK9vcneYCQZ69Q7BwThR7rMH1Tme5qvg2T16ANznzhJXJ2x4Z42f2Sfp",
  "key28": "5wPrnapgsQGDshCpnaQngZZp4rrhfYFaM9oe4EnZxz5Q47tFk1B4WVEWaXXjJyPqV8zZfjGcavYcoMxh9MmRd5HB",
  "key29": "5bgQthnh1TZaf3mmE2NbahzEfijYgQHT7spLX3iu593ro2tbHC1vB2sWNjKTKR87sykQ3WKbf1R9u5HSp933Suca",
  "key30": "3u3RmXoTAtE3NfHpLo1mnNGfneQ9aPtJoT64LrtqiKykg1gJGLdTZw7UdHcTEghhWTkFf1tEPqY6GY1y6emYisef",
  "key31": "4ZWZkvgDgAPPXKguedwFd7CEaPp8nHT2RTyHZJMjSH2oLiiJFxgPdcd79Gi3og2C8y4wZ4LMyWhmKPp94sE2sigv",
  "key32": "UUbHtRiHuNRFo9TdkLPPNJ7MTetCQqk2ZmBNuhAwiVXP9Ztugn6bEnzDA4uZ8oM8DhHW67m65nFsaU9yhmd1VUC",
  "key33": "48GKd1i4j5PyUuvSHJ94edQNSRdGA5cwo17ZhzQkUS5tZXm3aMk1CE4iZmgmg8zMWZq89wQKuQt9Y4u5K9qPobFV",
  "key34": "3rwtuRoNcMbMS1DApbyptEhwpYsZEmHxVQHmT3DQkk3PNqgNZDx7VLfu6jKZH17scckmNmFqtJ5PSmFoScJ2svvt",
  "key35": "4nG8dHe5JB5AZ4x4SW1cV25cwhKHH2xCUoCK7pccWZi8PEzo4kyM1RU1eNqHjpmvBAVvnMScWBigEpos4TaadPpC",
  "key36": "23T1UVuPXRX9bSvsoiFQPzZXVXNmzVg89Rs5dZdvofBWC1EyDA8JodXz2hPLD2HLzMcjCnaNHvCBkDsk6x97RGcQ",
  "key37": "54LwzzEcQR6qgAMWH8qFo9MoB2hR25otJyiSxaYaP4Yj9uhHUPCpv46yeaaxHPUSJufy6CCXh8xXzuCyGeNGMGQm",
  "key38": "3ce7Byb2pmLKrk8f1TBsy87st4AMo5QXViu2dmWnKKygsfAYBG3eCFffGpNRUPu2zhKDZYciZpJ74ugRbRVCk5Yb",
  "key39": "3pcWNhHaWF3geCWvzNhNaAPptETsraVRoAfmP26kMXu7BRKwrue4vTbRA4rM21LjXMom6GRshzZqKVJa8T365T6T",
  "key40": "5y4WP6LWFF5UcVQPByRB4KVJvysPMykTBRb1uLdK2sSkyAK9PBuVmFFP37XSKnVaeJ4Uc4AjqjcXbSQhb39CAjg4",
  "key41": "3QbKYmemRHrvAuz7VRTiV2YUf1HdHDQYdB3o57e2ExXYMByAbKBRUyGzgRACGmqyTrG2dj3Y2GTBmmhKRLiiQCS8"
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
