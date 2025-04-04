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
    "27aNXUq2jLQjeKbt5v1k8VwSHXQZ3APYjX1sTY891LdPEf6wjL957PyEJmQ33zPW1oN3YT2dxcjMf5UBq78gJ6qU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbVoBQ5zNDYbZRaxfRpCbBX3aj2hxbS2gPkwfaJcD5BDuVRa21uTbdjZjBVjFgujVPeVwh3p96hDNacB8FFotYN",
  "key1": "52keNKNDmMWVSRRHp6RXHbzWSaEUCuM2nQutaQcypHuFv7BtHZdy4hJ4SaA5NPUh1NT6pJkjFKicb1UAewRYG3K5",
  "key2": "33CEjTrT46sCAZhnZneacZKqR1sijEz7FS586Sg6XUnarXP9synXaCyEJRAoxbDzFzhFCwfhKLEGAG1LkjQoqiXB",
  "key3": "9sJ7VsTep2rRBPhUFFDtdVsZjxLFPwmZ5CWCzUHTEhZWohfh1cLZm4Z1F1P3p8rhc41qL9hA4xe4HqLaktH5iBL",
  "key4": "5FMSoQoos9NftkP281qJLtUTByFhBA3CPL9Mi2q9L3zhk5TF5nrcG6frJgoawPAzdjV489k5kaeem4VjMre3yd1h",
  "key5": "4sqzS9gFBqKkxE1CYu3eyqHnheXKcrWLTegYsNyicaGrwZ51hEPKYEv26dowEaDpPK1WiTyBD2s4DFbsCAcSnoHS",
  "key6": "65ikNJykG8GUks9RfcmxmDy25qCFiyN4uyswrigK3Jucb1e9wWFsUHjZCwVPVhZNuKbA3D3YJDKufta8m1mjv3X5",
  "key7": "375xJ1Xos69XgDNq7A76inDLsTLGdK836wePaFGyQhuKUotLZTCpaPzNKGVwzNb6QA2xq753JWCFbg5pAe2HZk3Y",
  "key8": "RuasiFNMHsdixHp9VPSyge9rvK4FdaFs3zkT8M23RugGTj1FELZBByNtkzWzarBQR22427J2UeoQfqekVCormPv",
  "key9": "KAtMmX5oRnUSQ8pK3DuovLGVRinFNx2dtZric4PK5QC5j8hFYNpbGrnVevnhceQsjaKXcVGfH8S45AUnLPi4CAT",
  "key10": "4dyoA2mB6wrgFPcjs3WSLccBsm2HCrpo4vTT5P4pkx5kdDt1HDEgJcRXKqwYEZnt1AXC5Np5bcAkWs4MdUCoeUH2",
  "key11": "9HzUXBQFP4EUMxk3ug3MAGVqocosMSQ9bUb1owneykgSpKPBzSL43SnxfcE2W3cyjAxD4rUFDy1YRTVYUuBHdWL",
  "key12": "4DMVesycpkWRfrd4um23twKWXhbAUZE4TQLFkeJjaTGoQ9VZ9pk7yZ81rwLQV7M7axNC3Zn1q111tdqymr8mPbdY",
  "key13": "3EuouyEhRUcBgjbsUhtQESbTLEEPm6xWLboj5PSmAXjeq8TcENCWakwVfU2fuwur2HVMfSWR1nq5i6NFus6HfUAB",
  "key14": "D2vN8JZzuCofatqMn3k44fW5f3MUFSE4wE9WTUvs9Qr5yWJ6rFedZwBBZN5FxbXFP4Xqv7h14nvncjJXueyzQSK",
  "key15": "2MFdLwqBJ1gxmdpibzzvm9MPcN3hbBWSCMu9sa8UNephxJv9A8eLDdhLx5QZdH7AuAT5G7K9pRTSvdSvq6XvDVNK",
  "key16": "uo1Tm9HHf2yfeVR7Ye6SoYws4H2pMGd9PfVjgyuVJq4hDCFyHNdHMpVuAJNMgarPKVGSq2R1q2ExEu4rkz5qjQ3",
  "key17": "3aeXcqNwK7EsfjdPpuGBHNwF79BJKkGWRWuadzd59v5NHixpMyWiM6RoF1u5NCQRLy4EmEGsAwwxa8rQN4d7deAS",
  "key18": "4jjKhm7j6p4swGjondUGDieoEvm46Th56PBSAwP4NQbPSWGM2WwDrv2AjJzQkkiM2zjQzDWmkNZNPFL3ua9ieu3R",
  "key19": "5qgHnLUj62T7EsGy5UzqqLrxJmVLhq1NW3dT6iYzM9N2449FjqzrQ6eLomSa2svT7H1rrNhL8RXuTnjJLcx8ES6h",
  "key20": "DYsJwDEpWh5zpeW9yGBoguRVW4N4Y8EyMPHuPBFvSGaTujgmQh541ThLKNBs127nnbRRAnC3YUk9VSFaM4eCCht",
  "key21": "2NdFHEk9E7iTroHZViqKgKXbWMMKu9KAvVUUBHKLAy9Kpm5wGpxQgsCRGcffSCLCKrqmUXVPnvyWjgYJ41FaKeRA",
  "key22": "4RSZ1CYs487hHaLU8CaAHGQY3foRCjvMkbJmsGGciHkBvq6xqYrMd9kteQALdCGXFTqnPJbbgg9iR2YwMs4yMPux",
  "key23": "835qLNT7uz24sUkpG3Feoact7j8itrft4xvUv6PFC3qdeS3nDzcVcPjvyLKkehQYsMt3AmBp32zivsjYjcTEWxU",
  "key24": "giSmDearnTyymoPQpGMLgzzKqGE4LWHRxgWMmzAxd7SAkb1n16QDD1Cxq9VtvUbBaWf2jfyNTRCaKnb21PcjUVo",
  "key25": "4zYZzRSs31yyo7kRkYbjAxBbuRzkBjFvvu8a8aoeor5VJ7jL4afm1QUatyCPatudwAsr7wHGFTLrmNfF7NUmabnr",
  "key26": "5pSBKa1gpwTgwKgzZr994iwmHgMk9b6ecnknGzEa3FR8kYkTW2YB1LHkX1jtLk1WP2nMVd5famjqrG1k4pFzUtXe",
  "key27": "2hgFehsNTDj8LrCFFDxLFonsFVuMdrqsD3fsdZDztEbg9mwnHxSxAKD2q7Sj6kSRqkiCf6FfRuuCJKnC2943zXxZ",
  "key28": "hTdHdb5nuSaabDJnhmbHRNVar3wCWto9T3jJaJYaaAY3Vuey3nGapvmj4AprrsT3RMQeYy9mxMY3jMqt8LGAhXE",
  "key29": "622tE3Br7LRQGhh92qHZEe5Dmz2tNhqF9cYGKjJh2a2RFw6qAgX7qb2wEjkULQBwtkgorN5hUnWj1SEaShZE68Hj",
  "key30": "4JtePZVqnyd7miry7SoarYp6JWxeXfHabF5knfSFjx4Mrn7daGBVhMHEsyrk393AGBDdHJdv6vvaYdh7XZKtMVf9",
  "key31": "2wYWaYTJvfnrum6mUYYmC9HL83TK9hUj2x5LGCuL6s9wjjXVqS4m6U4w3G8xohtNVKHkbDVpg4UvxpVfbWtMJc2E",
  "key32": "Eb5hDKwFe4N7Y7WmFi5PaoTb1j7HYVNRENd83p1SNx9Bh5F3HywYpkQMHbHMJfq3pTfj5W9832hDiXmjsdXVmBT",
  "key33": "5yAtgLPFJrMsbBv8S7TMrVs8t3zqRGaV2XofAmARZjxVbvf6fujGi2iZeLNZoYjwaQ9L6KySxUDAbVk82NQb4jXh",
  "key34": "kZFD3o8ayVdzLWwxfPWzxG9f8P8s6JcwKAYGXCQaEkcdmsbg152P37qfC3JjbT3o2VmfW9RdwPoVSyETRT6Y9ub",
  "key35": "5JxHdBWQctpuZ5vfb5XGNf6NGot8hBKpiY7e4t7F67DXAzzTVwiyQipa6Bnvo32mM8g9Qd7r1x7UQY5KVH4Txzs3",
  "key36": "3yPRhGu13rWsM3KEBvdyzwarGXvz61Ry97GjTaEYMm9ahvXhpTV3Uy4vqZGXn17V8eWcRMRWGD6DQeGFJZofbtF",
  "key37": "3KXStY3UkHYVwsfSVTzDPunSgPJyGyqYQE5F5kMb7sY5WbTDWUUSfzpM8mrmQaBvnA9wbfwKP1phji9tyBbhfxJW",
  "key38": "3q9UfDBmPiHvvF6k2EV681JFv5r61obZ4XtD6neft8jL6QMrUJnFigXEVsSntxxtJNFn4r63qvmwpBgzd75Mbqdg",
  "key39": "4rZjsfANXcYWFCTJopRPPSembqYU89VXtVGBDws5X9Goc3xT8LBmesbbKpDha6e5wdNB4J2VB7ukSVhoe1TXnx1K"
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
