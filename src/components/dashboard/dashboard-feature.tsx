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
    "XAZXTVRUE3nmccjSjhHUnkQE2xiVCK2756xAmKkGnH734dPU17V5ryU3W1FRAWK51t19gUx6KaHA28iE7vXbrXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoCotz4Sbs9qSD2KCXvuT5GRDAsXjoEAnn8Ev1gZiKikpjDVGceRq1t2fLHxPfffJQFAKUbWfyqZLnHJTCscyPo",
  "key1": "2i5dfXZuCZSNtS1wKWAosUUFuza3eEqYAhimNveSW2cb7mc8xGZX2npVFvUZPLSnc4QTbS5RdvjqaZZLS1rLf9Ds",
  "key2": "6139qdBhGYGKR8joxqv1bJoYaqMGvo4NprfYQXGJrSH3RJcBBPg3GXNBepBBEn49Hzr1tUMho6wtBchXo1C1SnMM",
  "key3": "2AbSpvXn712Gtur9bf7wXm2qm5XeadassH1d6NrkoL3pEt7uVtKCtMNcdPyinQ4kbnxz2949mcH3qdKxEJccx9Kr",
  "key4": "33pmGdGBNPfJtHw3foJk9PoHutnmBoUwU33NGo7duzgPU8b45cE2jYZwFzQ5C7RGbDNhUPkVbN7GjzaD4CezgU2K",
  "key5": "ZuSmEN7JsDRsEZz97aSjX4qqSCSeg1K7Cse4hFHsuZZ3xFsFGNn5pnvfyFB7simZmWeyJBbEMGz4zp75CoxdrPT",
  "key6": "VVsXPweUxcuU9k6rvdGFkXdpbsYEUvFvBbmfoNE8rsfcs6eHFiWpDjkPJ1DiGAcKRoRXfREUJSYpQga5Qyr2yZr",
  "key7": "ALgj11Cka2nwzmeAtpE4zrb7AtWW8Ws8uwNLW9UaXkgBpMTo4cq53S9zMFVUsNZxSDaLf1gTA8P4gDEs2bdA91t",
  "key8": "2WSwJpdyHaQUEMV64SEUUWU9fzRSqWRLzjocEEnJSPzcGiSHa1b5RxLPXjwvTCg5esk7GU2VSnM1kZ2KM4WKVxtE",
  "key9": "2S7QEjP3j8hk2FVS2b1zFQST41AWX39miK89gnVNQq22NxqoRiYZuezuNyYWzuRafWzueB4vGW4WpG6LRiqgAYj3",
  "key10": "2bsssJr1bcPTqstY6WmgU81BwAJtVw9a6meqJJMosgGfxJxqLaXgYw9cn2c5YQPqn452yzQWPcwd7P2yf4VipAcf",
  "key11": "46ojENamZgiLQR5BgmcCQ6GpYQWcr5PKj3uWoecppogLkjC3r7FiFr5uM8nrovHyhkqjrM1pKvKwDPoodaeGNzmU",
  "key12": "3Bn5GpfcRTnosLaabG2tiokJ6fT21JRw5C2mCWzgj5NR7vFbEnFmmBF8ehqZFqFiHGWTBYubrG3x8bKyuTADZYRm",
  "key13": "4kqudyTFe43jxSbyHeYtf2xtYim7LhHGBeKsdxvTDV61TmtQyVRCM6qo35PEQu2TsbL4EJXbNAcJjrC8cQyQJnZN",
  "key14": "42hfdYH6argsydLtKLnCYK1M8AzPSD5C1795BY8sKSKa5Nt9UHQsCaRXgCMhQ16aMRWnH1mLZeUUYKKgyxGo8rUX",
  "key15": "4847UYcTjyjaMaXDwfvWiRE1aTaiPfTYKnEFMNGLg6XhaTWFyqKMPBE9NRayK4UbWTzBWZ5Jr5bGBgZYnA67dbCA",
  "key16": "5K3cyhfQHESnXKgPp993PsQopEetUdKCVSjUe3qZy1Hbn96yAN55C1USHhouWJVNvJsoSdRrP5qcw5EcrUmN9tY",
  "key17": "4Ckvxf7Jr6jdakWjPbV6Pbn6gDZpzkJFHcv482RWKZWZLBxJNLmmirJMSaTxYEQpGzkkFUL9wWTQJjzG4GoEykJT",
  "key18": "5kaub3tnvkM12zdBXvnHsjykXEiKT1WvbhqZZgemAY7DNLxsutNVqz6sYwDjmfTttcZJKWDEruUX2WmPcmTrA4vr",
  "key19": "66szr48HHkZF25nzN383Yoa6jUqsZzubHdsm8q35sscAMBbpTYDAEa7qe2rFLSb2EUDLvE9e57WDgjVKoNhYoj5d",
  "key20": "326eesExwBGQZ8cCBrKbHqbVmdGphaTXX8Xzd5ux25tUTJxtGqV37c11EdfJqti2hKMYnpvNv1w8JaEU1Tx2Amxd",
  "key21": "5CVcSszC73PK325zDUnSdXBDna6E9Tm9Fv6moshHNrQhqU2eexnadbhwxeNVwdDumvkKx6UWECGHsh6yCc3BZTWB",
  "key22": "3TQshG65ZuVTgLi9MQRPz5rpX9BrjDhTiTZ9MSHoCWZJfX1ehAvDbRhYMvKAoQ9XXBawrWwhaCgPmCYdYDr2wknV",
  "key23": "5v1vDiGCy2fXVbTAyrAEySqa7cD6FuZpG27vQAXBpT2iRxytZ4uU5suAMFaAhB3GKvQBgojdmMb1xtRnPEkt9tFS",
  "key24": "2RrBBVmrk7nsAZqFJJfuqGaUa6k9xzkTqjQ58YhrvB9CHBkbDXgEN4yFahBu4Pp5Cg5g9u54vDZm35srfi2TtBYJ",
  "key25": "GXCUeNHSHRF7gjbB6kS2vGcpaEQcqNQiZUhuGG7VA7Mk9kKHgWyWWFsJjmcYuJfP8FkQu17RMTtygfDfj4oyYGG",
  "key26": "5YC2N9AaU8X6VBK3hucZg6vhKiJLa9VLHBC21uER8fChVrqZJEFZyjavMBeibeM189wwUMTtYPJ1oEGztuaJvzPz",
  "key27": "4j7XJS94DtefoW3VdXHrppo1GUv686vp598vRHKEUnkGYtpCbrReyNX3PZxizD5fWi4B3hjhD1he1Qz2GpXfaTpV",
  "key28": "44ekjE4jyDRX2qumYVExwEPuTPeZs1tL7543mT9PYNjczvSkuKEGzyGH3szzUjN6mPHZsYnfx7FYoDibQG8yYCzZ",
  "key29": "4aJoR9csbwtirRzBow8G634ixpAs8GT5cDpxxD6NvdkvdurGhaBc9uUNpo96e9Ckqfn9NQgxLQLgsGu9fRNVzgQc",
  "key30": "3k9a78H5aewKHFgcWmFsBJmco5AVHqeGXDRTiyLD2FCeKKtYFkm2uVdoufoebp6hKm1n7cc3UBLW3NZYn9HVDi4o",
  "key31": "uWKG4gozFdJiFsgy1YXeYugKK7Q8TFceRSkS4vz1ocwv8BfcXJhAZ8xaWjUXL5BZ8w2ue73GpCW9B81shamYYrg",
  "key32": "25ucyqJQ4oCxQEuhdKZc1Ya196ZriDk6btfPdCy74XdzJWAMiEHwSxNCv47UQYLjFYcqTNvV7uJNZPtRonf2d2Bu",
  "key33": "2b7LM97LJBNqfUZ3FV1JhwwNY4bWHKsXk3j76Jc7JWopfuM4yZkr1AWQ53opQJ82G73r5BWxfL4UFGhEpYAZhPdz",
  "key34": "3ihjCKET3Xt4u5Bvy6zDzkvSY7a1a3KD8fBgHtcFJapZbWW1jcD88fAoqy3SVh55htkfevPXgGmCPSt43qkEuHqx",
  "key35": "j3HQcrJVHVzr6nJ9SPGhUJdxUXryGVUKdJ3WnmjXssJPmSaJ9fdu9S6M6Gts1TCEs4vBK4cs7udJLTaCv7XXExh",
  "key36": "5pyQ6eJfXam1R5hvreMJZr1kjMXdkUwpUeKZ8oPDUijZLPuWKNZt2ab4uGrGagdPJmE6WCJyEMZXxDZ4mgaShEYt",
  "key37": "5Rj5NTAD6k5UEGrj1oHjyiZGind3ZXiJbCvBGUgkvpPgF6N2UuvNXHHxB2YUXGh7TBJe2nphSnx3Eh3goVKGciMZ",
  "key38": "3MYwdipSWDESdz6qKkxanZqoweR1g6bgxcjwN3hfrjA6RFFvwq7fHEC6de3n3J6m6oai3b5YA65DD7TgCzsyN1PG",
  "key39": "3X6pndfGNsspLsU4dHzHEc91RfMFpUPFVsosgxQRFyQbR5PETLPVV4HqmuYjoTMErf2ideX7km9UqK7RK7LqwdJu",
  "key40": "33sHhUXymYCzC56qMTkh7Y5uophZMSZFsWpR9PMEQ7FkPCa7yUh5KRfJYtYX9dtWrfEkWKiexeCecc32RcNmUmvV",
  "key41": "64Jc1EGk5APHxbeekM7cRpDG8a4uCKCF4jKFzeHWuWWrt8mttdfZUEHSHmWc7mERJi9c9NFHboWFVa9trsgDPjXH",
  "key42": "3ZDAnPU1ZpCcfu1dijKAatTzrufKGbMRnv13sN15w1Jyz2CAKASZCRmmLqWB8d95cFLskgt8876gbTeLPc6b5mvm",
  "key43": "4sAySWzpNktudRJFLGWCAggrCdoF5e8wdnjh5KPnKiMBjQUheYZ2ET8ZjA1vbeR8ixGn8nBYfs77XCmN7VZi2FYu",
  "key44": "3ihpZtyYbrynQS6PARzUvhHbFcY5MQMUxDKBuA6nSBN63Q3qHcUa3gRCjXJsWeRJtaiNYU7QxGDFru5KBx7qsLqz",
  "key45": "qtDCNndcdD29tV6Le8R9qdgL8gg6KF6rtqjg2maE87BxFYq36F5UUCTwJJn6tAhD6pB74YjadxgYo3KuEej6N2u",
  "key46": "EG6MYiFvdM9gyLhWD7EbhU7yXjLWNqiUjJ3FdxPpgn3rdPrignbJhmBRCuC8nShdxVoUTHYHKnzH4Xb1cZB2VNC",
  "key47": "3MBVqBMNk2PBDyjJtjK7PmJnw2Rc5ABfpVRmHaj4RqEA4NuaeKtoS3AgJMRmqE4JdmrmjsRVPBaXJqep7g4rZSgp",
  "key48": "5xKtisk1CfLxZ5z8ftZDU3Zn5v9yjKURfmcDbcX8oAyYU6iUhBRvfcXmMPyQhUTuA2pPGD8s4DivfopjKCWZGmXr",
  "key49": "35UUVcQ9UCjWUaLzUuzebvbGhRWMY9rFi7QGwHaSRZaa9omeGcSmKc4VQmB58j1jk5mTX4Z3NxJ6Y4TsXfviGmbc"
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
