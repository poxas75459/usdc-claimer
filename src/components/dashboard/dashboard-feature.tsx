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
    "2dANAk6Qt4GxwdLBYHCzPB5mK8WBi2fX7eLUwjrFH3mVVe6xERGVbAFwjK3Qefa47jGBJN3txh6EW2WyNTkxuSZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oW4tzCfUicqp7zBF3rf49NYzNhPsDCn6K3YzMg4AXoghs2RzBoEyYguM66oLNEVgr3NuEmUr6fj2TmyXiYmyycc",
  "key1": "4bfrAN8HYv7CDbK3qW6uZfYYR9ZZg4pcMkWrgr5PUgR3jAvD517482FiHvaPppD83Hsej5D6MJn3vcN4Hs5Rc817",
  "key2": "4zjHadpFbBeq8Ydv8LFPXkL57CB7UdvSvAEpzuVVkrfFowavjAXGcEKAQgZ6LHGYCuALKNW3hAPfK47wGMfv8fz1",
  "key3": "23V2EncrzPvPU9bEo5ximCJNfKj9NmQ6yuS3FHdAibbPS9cw2yQzyP1DcGb1bAaXuXBgx5WDfFwMQKpTfzTe221w",
  "key4": "jkqHg274MJRcSChKuHNhUt6SYFPffU6s1BwqjrpEzstDewf1dwrzwZvQj5dAT8yjU9Egb9xaH9gcTtp4ruZMffc",
  "key5": "5jUqTjDA1WnyzfVjQHCPueXTsfFjXNzwsMVLEexcpD6BLp1NGrEipMKsKrTPmnVc5qVomHEKBmd8btrdG8bsuacS",
  "key6": "3GYU5A3FRLKHuNVVjzD8nnKr3WTuPoZ18WWNomscTDoYGmycWHJjTWe5uscLZZ2xHZbwFcnjNSBS8eQa1PgCQ3Pj",
  "key7": "5zFs5ay2c6tD5KReC9fMa927eosuGQn9CTbSdW3xpTRzuVUi7Vuhz4gRFj763FHfZYtHrDPz43JM8PMUjwftVSNu",
  "key8": "r9donaAzzbAbRLwQkny7yk9wXxLkddAAup1Ns4P3jp7MzSkU2X5zNytibxHmfdvAwofPhcohgd78DM6fETYuB78",
  "key9": "4P4xwnwSJi61NN3he9bkrggzG4BqQaL2GYRqb8eMjqMJhVszFokMaRCqs86MGskDG6SHJLtsKhFSNqKKx2JMjqQq",
  "key10": "5WrWajBv3KZMw6eggfXGp4pU9ewFn6gPtfsZYpNSFeE4MfVGDqjii9xKtFdwqCQvLi4cHp2j713HMcsoDDV3j2bu",
  "key11": "3ohgrTMXFVyBMEeLspGUxFG73xgCjodCvuYDVtffAxegJKKtamB1UB9X3UA62E81gLye82p2ETSjjnaytroVyC4U",
  "key12": "3qtNeULZ4bgEcmtVsi4MAxkhBF97sDC5aSPM9hHBn1trVFFAacNu97bDkokdi8Pqu4AEbHtsrG76BFM8M3HaY1iA",
  "key13": "416Dfy3nafar4wXyN6TvfeNciqUHRo2p85kzUXKyREu8GB16rxASGTPrYX3asGqqeTkqCbhK94s2oZ7NQXsMezrQ",
  "key14": "4J398Dcjk5GBiQxTE7d5y6KwAb8tsTKGvueJ9YzE459CumsQTjCD9QJfqGqcLo43Ve8v4TFRf4t91pTRw832vjRH",
  "key15": "5sWkH8BY5cZWpNNp4WRJrteHo45Y7j2fpHHDXhstDjVULRW5ZXfdHK5xqzzAiEkFXcWSY99LZfMmaHLf6ocWfQBY",
  "key16": "2d9vZGRiaY76J87VXtUNHy9Mi5Y1w9UnPcRFMW5YPxNBExEF3fEbXtnWoSr4ritzq1Mix64AxkQbPUTNshY32ZJL",
  "key17": "3GHEqAx8fFfStgHQXapMaB4hPsaVm7YNEBNArGNUPaCZgFYJ5VEJLbyRW4qUukCWZ8WejH56WidixEubbhoUNWvn",
  "key18": "2NFvdaV1je1947ebF7cMczLD5v1z92k8Ckt8r9YpoumAbv3fn3joxekAEfmdx3NA2vt1E3uJw9zEPSsDqphcHxf9",
  "key19": "4WjyrFrSb5k7yCdg7vbo949G5Nusbgj4Xmnmk5e5eSPmXKJZoU9reZrqNhqaSZv9nULtceV2so8Dq4rfkzRfjsvC",
  "key20": "2HqBWdUHFbVgWSrajNTXexCQJRdn6DKbPVUq7RAWc5e9Q1ZkNrEdQFef3LSVogaf2BLNbxCKSG4NZBPpt4moYeX8",
  "key21": "4rKd3reJX6Mh9Et8x1qVSivj58k6oJr5HmqcMNR9kxYu5NUQKP9s5XvfNPDQaM9JmPMMYvcEFnGzkjA8VJ83tMns",
  "key22": "3UmDXDnEyTpUJYL9EiyF5eFh5R6RU6VJqXu5sWfuRf79rZ7SNuZ9uWNFKDfZqZx5RRrB9UNmgRFTNnDJDWpHwRLC",
  "key23": "361A6SR5SxZC4GcfphBGorRJNJHhKSP6jcxQJHrVUmNXEypEEyCbUMquYSvWhKkHeMzg2tx8xk3oQsn1L44aePyB",
  "key24": "5QVZ9t4CnBkeodzwwhpwvvudijUukPtRY6J7v5Pi4rPePzJwhPU98QVvoWX5BfnPV9T9e761KgJpUPupYvp6wSpm",
  "key25": "5wBBncvmx8bnmsiVDVhCZgzsrBk4k5hmtjpQtpJ493qSwSzhu18QhqJFvCDEXnnQgXNySeZn3QYUhEaPaQMVBAzW",
  "key26": "2VtzPw8ZJHYwgFvP5AbiCtgMbjAx8V5jF8UvFHhGrVHkqD6ch8UyJW3Nc3EZ4TqG85br5CMxHBCP82n4q81uEESE",
  "key27": "2xeVKgFV5q4t8hqvjdEiAet9kBDhiT3dWjNd6aBmfjaazeCvSSQwGcEzXMRWCd3gWFF7AxcbWj9VhkCaNj2uoyDL",
  "key28": "4ZCTkVWcktSsYbkkM6M6buhpCxDQajz2erxqwZcjUvauZvTHhxaMxwhxJwDcG1oaTbBFe3QzJP1CVR3PXYPyWPwo",
  "key29": "5SKpi2QbnDbN43dVMRg4xtszk8TyPhPvgvUkbJ8RJLdVpJXoXYeFshYwMdQChzVNCoshX79xRJExU6DXwjShD7z7",
  "key30": "3sJ9a6pX2UytGjDMjGXatR2gEyTuDuX2Hq95QDhBK4knmuZGdvsPLZ4H1G9zedYooi5iNksDeReMLHjom6arvQ4e",
  "key31": "4YxkLszDZowNhW1TsEsiTiRi7MuJ8TxrGjYMtB2CxugpCjv5TBy8K55Vf6Kv1K4os4NTJNKMXDLTkfjCoyumMXQc",
  "key32": "4TuAKDEqneLam2rBKd9M1ed96WquTGw7Bx4ensz7Cpsg8RZmRrpVG4iobfVNK2QpTMRuiekLeK3VSKKDaR9rjZVd",
  "key33": "2Xcy4RHfW2TMsoSgrG55xRqJaAqaii45qNJYq2N8JJWUwUWRB27rUPQxWgaVoeyU8c3EjgseXVp11JX1iHR3L2p7",
  "key34": "5moNFYmYK1abvsHm4pT4YW8yo4TVDQCUh295U7wgv42rr1CQUebujZ8WgqheFFCaKGFkVTwf2rd73ihJC9E86Et6",
  "key35": "iuTDqUoxKtzLEYEwmGUm4kCHPDaPDa7VE39tamJdxbBwqnSeyLHRVkoMmenfRRnVqv3zHsbUcexQXk5kQpcV71F",
  "key36": "28Zq8pDZVZGv5vYstCsFdREDf42uFdaR1QY2MSonP6u5H4FZDNrqv7SRciTq3Xk6GD8H1zctixM1yPpehyzJksvB",
  "key37": "4Xtq8GwFZVBWvT4kuaYdVQya1NR3xsdb5QSvMqJGuD9zb9NmNALpA2xPLa9xtwQ1KxJ4Wrp2q2Ss5g91m3tEL1kr",
  "key38": "4esS9RmLsUmUAuxTbmM46sdhhppqwumKVAVgwud91XZHX4K1Gftre75V7X9YqHH7GDLtvjgFAf8Cxk34WsBrXZ26",
  "key39": "3VJTunCXQbK7a7QAJpvG7hKY5qo27sdvFuPKCUc7vyWaQ7HgXhYV74tZaRX1CYTxQwgwCKkp2rDyugbzEf9aM6i6",
  "key40": "rXdbfEVuVwJa9MPff1YuXbgVmtJCMpMuTA8LS7bjB4yCqjpmaQxcEm9oLtGwJksLYgKMtBtx3LJfPmJBDiP6xxp",
  "key41": "WmTN5YXjJ9qdThUSdNMCenoRPpPcF93EF7NdtXBHSGK27j5NLBbaNuBLqNRfH83zYdBZReE5p8x28eGg8KsRBxr",
  "key42": "64T8Ev3B5rKbARVae8trgGSmTMZYdAKhtARFaJtsmAD1zCYQHS9empWewaVWsxdVVtH2wKwWNYHKEXY9NtgETQpM",
  "key43": "46PVCj8JqsPb7p5SpZ43HzsVNpR4rG9ehAKzFiti6HALdAiA6A3jXttyqHLazspjnVVV3S1pi6onBFmdwNSZjJ7t",
  "key44": "421zwLtUKb43F77b81x5V1JNqZBsHB97TEKPVjKpnWEatt6zRBSKkC7cziEZyP4mL7EF1ATxgbcCUoFuLkEudtAn",
  "key45": "4asbnM2vqYB7DxESKtYrS2tqaYzPxD1PcdUNGhqcrgKPbQK7HJi3rf4VmQzJREX33vngRVkq4sK6MtDQJLRHF83s",
  "key46": "5mthxmwDVvGkBaA6py8bUs7VRGgFFLve7QyRPMpqXSTfDVgxHYSyueuMsjGZC9RgJhEmx1YcRBqEMPy7LbRJEukX",
  "key47": "5BpWY2K2r6r7qEsgvj2aSgaTC6PkGyX7hokhbXrsVxHQLUeSqHx2n8R4myjrmdC1T2zWvur4iG9sAQPADyF2GDck",
  "key48": "4ApNL6XKSbrY8kHYUmXx9hFNgCiCsALeugR71T1HwbY11v66uBSaPnfFkcNEZLqUDMHQNZN6YffUAY8TqUgiNrpo"
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
