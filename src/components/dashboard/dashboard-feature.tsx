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
    "3BhX6PnGzM7m9smhHgT8HJddh2Aoz9WLcH2VvqfNa3G8B8GfjBdPtfd1Exfs7yQFvBKB1dAxRPsAAxhuZjonyB8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMNduSyTBXaYASY7weEa3b6h1pGp9WjBjgYbZGYVVM5nL9nGaDobTKnK9iuGG4gBJvhfFoJkf91aqAJTegDN3VW",
  "key1": "eeMS6GUMkEDR7tQXH6TJtjyKcAWkrK2buqphY1EBZ5TgAMMHSnP8AoKGE2FnPghXT4wgzu6CqrGeZY6PQjssi4d",
  "key2": "3dV4Jb4G6g4zkroQkNqcGaHdPiq5NaHNJNjpmdEgoU3VTiwZoa9trrzU5SWHdPxxrAE68knqKrQ9GVJnNo9n4Mrs",
  "key3": "56rmL7dDjHGkSEUa4uHbQgFLsQ9nobe37WNstiiJ5FAGhXaXqEmzDqysNkDyjE51nkE7T8QKHHkRzR45M1chX8oj",
  "key4": "5exzv4qwQ6nNXekKraQQCRpv4P2JKQKetM8RoxmkaF6XTUzSLhimGM9BUVzgarD4sYtNMjdY7B3y34PhzjiL8xLt",
  "key5": "2WoWPRFgfySkcC1sR4qdoHWnMEarALU9PM8LSjymnCgEodtYRH56JBYypmJCASqkS6byc4QMc1vTfo5H1nQT9ndP",
  "key6": "Pvik5E2B7dLFHNWPqR3RwvuDNwxLnrf2JcmBHc4zz2aryLrP5VHzRJNaMs2toQB1J5M1zZKjUJrDaisqoLMn3eJ",
  "key7": "tckYK5vC5urMbkkCeqnVtzEpacyA3gPpVwywPw4byQrX8ScHZwt5Znb9s5oHMjBHSzPoCexRiATtWRun5B8QPkC",
  "key8": "2bzMvDCsUQxEAUdPCzP9ZdsYA4bFvjyVKDznDGQJQxn7wqn6yigaJNop7s96vahUUVkvCM5zyK5aUEh5xcWQpMMb",
  "key9": "3v7aCrSq8gw4EYJdwrFiShjTzeedA17VdBUrSKRrapamYpEUvE86ZkJfr3ss5VbZHtd92pzjnnv4UUWcF41HKtCy",
  "key10": "4YDqTNBgXiX4PtXQut47WD3cHJnNRVLQ6fBDjnyhEJ6TeLaRd4XyTaeqVcQsFrm3d4KSLqKp9FLEmNoUvWkCqgjb",
  "key11": "3LDf4dpyiKrMA6K75kseg3M5Rohm1uPzZdUXG6BEuJgTKLQNZK38FFbgnGvkndNcD8yNq1GpEF9XUN7pE1AtQuXK",
  "key12": "qGTSG94xW4KvB33Js1Rwy2oycNTePvsVSL6JeLu5gb8epYsyiPe6bUNFVatkzd12w6GykH8XG4rFLcRP6mj49Cu",
  "key13": "5LjcauwihfAEqGT8HGUpWCNA6r1EVTCgvGGuN8TX3zRDsbYma8kdtx3KUyvzaKPK312oFu5P53cdmN78k5FnfE8Z",
  "key14": "4FnXA593FgpgzGHdoLTEW3etqJhYTCrhVPAqYmW4BLALzRu4LdPJbvDBaZtRyaCXQkZVwgoxFhweTcMt11ogihNW",
  "key15": "5Z3gTvHJxrQWjWrQ5iJoV5PKamqv2KH6UqkhgndWf74MrWrFPG7DYLETe2MYN5hYBEMHMkwSCepFa3J4ZZzcB8tX",
  "key16": "ESHxrCoM3Vs923zRinJRERhtw9fR2rJkXg56NtJsZiv8vST1stKHJaeCFkJH2eRk5KCaKMk4rC2CdnWMVwzC7Fn",
  "key17": "QERAoBi1kqfRi9Qgimam4Nid8smkcJu2rqu9ihV1b6oucaccomXEv2dPSAAspoZMNK3hFdmBm5hRs1geNw1hZuu",
  "key18": "2b6ueataVfVjoFhwFYMJmed5wsKfcqKWMTUPU5hvmEqysub5RXQLAML2wfpHvVcpR5TthYbTb8mfyHxpw4mefoCU",
  "key19": "3ZXbJazHfws6Vv6cLTwsdhtAUPSWNQenHCJyGC3pbNsLqAN89LHHNzK7VAtQnM4HH6pXfKyteSCgBpgTQzBfLWKY",
  "key20": "oAvSv359SVBi7kVAVy6GuH2cvBgqHQEAVdQmQAVMBkvXtiSFq1K3NfbhQFEyiGGZTMSAwshcjn2LWpurudKXk9y",
  "key21": "3b7h2wzHG2xgCp6r1CL3po3g6XZTZzFgqkBaharpfSEnUnSg9AP6aYMfWDQem3g7jwLimShnoQzv5kYmzTgspTM4",
  "key22": "4u5y6CiigEag2xp9id2vnQZWriC1Z9dZC1gUHb5qZvEYhKq1Y8deecJzuFMaUdxNJMKZ1yUTenfpF2mXYnCeTKXG",
  "key23": "4iiXhXbUXLUGzEUJJ248adFVfjFznD7uu2Znqdtp6XZQ2PLHiDr9ih72TbMpfXichEkJscY57SbiTnfGjVeCEVgT",
  "key24": "5DGMWz4tYRh7LF9bX1mC6U7HU4PMPRUMjt2jN8QjCqq8cuRxF4pnosz6PYysaGJLkYWvxhkAy538m35xQiDx87LZ",
  "key25": "riL1CuP58c3jNQXeaygcF4WtwHXFGgdBq6iELUNYVYjiV6GZyWQV79ghBVbvEH96FNcVWhx9KmQ6Kjv4sTNwdoj",
  "key26": "4Ki4CB4Vu38N7joA6okGrEts4kNnWujK1Kvgfze6mpcToef4Q9Wr2exZNpz4fFG9i6qJGcxBnVw7AbCB3wwA1qCe",
  "key27": "4h3MUZr5Fxj4QSsjA86DUVFhvJVwYRUeyef28wdXMDWeibFYjNPuVdsbj6RJqdwB8GH8EptfiCgH6DwkngkciVjr",
  "key28": "5JxeXrSapwD2NnX6ZXmw49Pj8wrkoLraJ1XE8xSpW4Aspo9rHjxAzLs8xbULf6a1qBAksu51i9TSX9LQb4yTq9Az",
  "key29": "4iJsTpG6Wb1viAe44kR4rbVyiDSuJkAYJE34eyCGdjay5nbvuJCRFKyyRXJUTuDC3TL6KpZQepkruu7g1YLBZ5FT",
  "key30": "4pPxpnecCQ7Dm1SLaZ7moR8xH1rGaP7Kw4P1aGo7raxUZWaN2ziwLPLyB6Qcmy5fdDD9yuPTt4KRiASccDRpZs4E",
  "key31": "5UPMkMPN4VqBnyHyJew7WUCfJSqFPHVbAkBusvZaZVpRfFKM3wRMPv7MGeRuZuDri4UJPaSTwnZ4P1F7NreSNnr5",
  "key32": "5bnEwECqsVKiGCn67TdwVDqbdRaHRu6AuzdF95417nDng8wnucTxD4NAD6cm7i6sKxEnQc4JyLafAbHsFTdb4W2U",
  "key33": "qRcsSbTifQgZJAagKuBzbnDQ5RQqJZTQBVHpkvDxLdfR7gPVuxJXnwkwzzVhWuxGipR9F2pcXgrtXgPzUTkmukY",
  "key34": "2hqonfM5dN4WRZ8erGZRKeYFFYVTMyT5XvbmFQH28s15VhR2u1QoUrAehnYTVhSetXgEt2BFNqT6ML77vLaLbCbx",
  "key35": "5pVfYkiCnDT3BdjxcizSsKs67LeK4FEYaP9whM7ndcDtYCssQpPgekmE9hUWLUFVhnJwWkx8cvxSy53dGqrLzk9J",
  "key36": "4xz19MpWfSp8DBhDZaJpyjBFWc6YAHhtZASK3W1FotsbJW3dAbZ34J63QkGoTY6R9ZCkGQuZR4thX1sJkaWM6aF1",
  "key37": "28mEx5zf6WN1urvJYi86kBrJBLab5tzPHNfzmqXYGMhdjBWWkUUnDBXJefLuELWZqKh9dqoLzTwmAQsfwarWFpYk",
  "key38": "2Gpg94vFExQdPyK9bB5PpTrfzAHftntbbNGnVeUmycXHfpZS6D4W8iXYagSu9Mb9LLb2HdsHgxRgejEAAVR7HoGh",
  "key39": "2xMtv2Ean8kyxteque3nXGMBr9rWeocvsHUErUGi8C7vky4BF6pdU2JtkGwgD7DdssP3NFtY4M7gEJsgwVHJDbp5",
  "key40": "NYJDvYY6Adg7M8K1UVqLaM8JhKEEpsWrqLVtZNifYwpqSdFJuwohxMwfkJKMD97CAXdPLUERNJCfR55j4tetUxU",
  "key41": "43uWRVH2T2qkBbgxduqyF4V8QCXdE3ZYzyDRoNNH2DXBnwrfCDmhs2dsVuZDryBiLL3XCVcoXddpGAgjY7ixxqGD"
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
