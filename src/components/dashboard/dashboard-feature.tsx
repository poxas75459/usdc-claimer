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
    "649ThxZ2Tgc9mJZLvAsqb7PnDcpwRa4qdn2itHT8H2QxMbZHGbnHnmscKNGXh52V2jHx317J49u1iTpJ8RGN2FAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9uwoL3f8Qjg8mfrtmzJoLsVFcU3kSqiy5ptqV6jCX3QzC7UZmPdjoXJ1kVbftUQzyEzT3dYyGZj43DPEYE3xLB",
  "key1": "C9M2n4Fej7Aw7vVdxXb9j3R3uLvosiCGUBUwWGcDdfjdfc9yygiCoJXqgaCgfoouaZiGrqjAg8jY2rh6Gc9toEf",
  "key2": "5Enrizt5h1MtCAvZJaNRLUC8V6W9Gttg3PsCK8DXmXxTuRosjtf1xAWkeVtu3ahDN399CQTfy21ZM9hdW6fktzW2",
  "key3": "29j2i9SpigVWVK8kvDSD5S9u8Gc2zRzf9rGGZj9TbF3kmDRrmv2ABGnaGjn9z6xMMCUiaRZkhFNkizy1jucGk46s",
  "key4": "3PvCUVsE3NqTUcVgWMXHujJS9WXPpxSmPHR4MYvN1MGhjmTPmiGMkefwKzAKenCPFX4KmquUncommRtXAdbLycoL",
  "key5": "21U218M4qqecaRunq8wR3afHdwfNAr7Q6WagqizhoKnnqXbaQrNrCJf8Hbu8UX79x7QUzMSuQGP9qUer4SHzzegX",
  "key6": "2bCTdxDVKKWayA3TTjrjM7XFU8CDy8LhGU2EBRAkf7YD2tC1CDB92LJfBqLSdo4ux5D6kJpwwftfn2NEGEfRBShJ",
  "key7": "2M2rgjgxMAeRZ2VbyzrZ5ZSoDREv45uvJRvRMBLBSqV2rGCqEEh9Cqenyh3qGtdgvX6KjRYTB4TfexsQpezHwyfb",
  "key8": "48m6VZG9Nc1oWeUPHirgRHVM1aHSJjxVp1nun2hrGnVmaPVgmtwVfnxNHFVtJ9Qd8EDNa3zpiqvfGsZB4LgRoub5",
  "key9": "5Kqu4D16iTybNZ5YPuULAFiRasBqmpMmYnE9voGwQYD8Cbf6c1eTVirhLdMycUYX3p2fvXbiNnnWJ2zKMsuVdnk2",
  "key10": "42TPx9yg8ohoQMyzzwhVRikBZamYeDkFkhTjQh8H2TGAdA3MYG6qWhWELkQ5BdxtDtDep5xnoa8X5Ry3oqzjQxFn",
  "key11": "2Rxne7QZqPK7o9fxFNtzZhYJJwDQ1iz4oFnVCM65sdK8Zhk78Wyexx64EfUGav5hUumVo6tkoFpJ4QiGx7ZfSA2q",
  "key12": "4a9LfsSJZTCYvMCFiMFp6nffFLSsGmfEf1Gm5VaiAmyGN3qRQM5QwFW1h7CmZfWVSZZFHQZahf8nSGMCJBjtXRPp",
  "key13": "5nB5FN5njTC6cewvMR2AP6wNdZdZhxuKEVfkWeUCJq4oeeMJvnFk7rC6iUZKrkmweZ4N9eMVqF9icrpxgJoY8f3f",
  "key14": "2Srw3XeiYZoLvvP8xUiw2UhSCscDMneS1Ju6bqXruZ5vj24TkS2TXudViAZL6q9g3tStg4oTQqwUoBVU1uEU6U79",
  "key15": "3EaCie7q2xTH122eCLJ3akfSDD6EqBk2HF2bmgBDoTz7cTa1ugmKC158mvs5yeh9VcNJujQQPFTnXbFC8wz5kGia",
  "key16": "3yxMzMWrxjbHkaTRFWYkCNHtGZHJvMeQdBGQFXTCZncCP7sn2Lpw3uabCMQ8ywS9N7LALFYBWD4y7mfRKSjKTAnU",
  "key17": "2nQTWwm75ZTKhBRgyDuTjs5UHhrDkyL9RNrZZcLwPSAxHBKD8G1F1jHHJtkeBYfwSGiLUdNjiQR2MfFop5iZ3Mnd",
  "key18": "V9zHhsPsTSGN7CkMV9fVnFvfLoyVdCSsHoeQBYS2mHbXkBysj8xnk9n84wMDB19QUy2vG7VNQvd8AhqnxQ4KA25",
  "key19": "5jThFzUaRTP98VMTJhEVNBmMyfBBuShLQe37PT47LZhUWp6iN7kgH8WByF6tRS8DaQsPschU8UH4oJKuYR5gGQ9f",
  "key20": "2d9vdN8Eon8p6n9Ch8nF5So5kNfugj6MvYydf6Xv4CZZmQZX9SJvwZbFQiR8ruXFQnCkTNmjtfF6pnsBqxgBDcnv",
  "key21": "2T5HWBtf4q5GFUh4pVUpmCjKcvUrkZiHmrZmr522zw4Nt3MHPSseq1mK79gUDNYjFgoY6tbzgiejqDP7qEgcBrbc",
  "key22": "TG1EwL5dTSVKDvmd591PtsixGUVoa27TSnCvcnUWxcWoFVMeodtejznfwCxn7ScsUYXK5bT8W7JTZSy14bTsF3w",
  "key23": "f2bEm2JJBsQxbw1QAd4M6og2UeCGqEqCSV9ocmbdJiUouLd9crCszrFAnXGwRTxw38iNwortkFcKXg47VbyEV7t",
  "key24": "3r7P3aMYAoyQgC5FXdPsT6AFWrNB47LHnavkDdWCGK9sw6sLCqQFEqXmovbJsQMdvyEU6DemxrrYxApGDfRgHS92",
  "key25": "4pcktEX7rVD8dVYwmjp9pSoWyrUQqxA2cbmYhQERvr7ymDdDovis8hjShyAwRVjZauAbBVCWTw2DbEXo2KKAcECd",
  "key26": "3UaYBxm9aF9NTLSuAA7LR1tFFpqopMVc5RUK4x2VPc1ju7NKYL7xajDvb4wZTMv74fWFepgymMabEcdGcbJQx7Nn",
  "key27": "5Y1zXLqmtXwZDoxzdUy8wjUDNDAD3QMpq6SVFyKZCFSRnBPx7Rr7Mzd13EUCHfVw9gLjRhww3Gg1tSXiM523znR4"
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
