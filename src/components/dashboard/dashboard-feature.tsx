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
    "yRAeR4s9Ckr1PvHpjsNyWZEsD7QmyyT2WgdZSMZL5uV2vReFPrscirMdu4o8CSqnxxLH2ohExQQgvFGK2osnFvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341NH1VGUpiKpAC3JzsCJDw4KsgAwVkYS44w77kDfucd9WHQd7tuKcCefWeG5R5Y7iZBaTAmThRMStomiWS2z7NJ",
  "key1": "27fX8WeNaXxXeiAH7J5dBgYqQ2cS7QrwAJaMh9cMDzdcNeBHbsKPWHitVy6RVH9xmWypZv8mHwTq6jxfWxAmn573",
  "key2": "nneoEMWqLXchugW6rFGfRncVrtPCapjNJE5srBS1nriinN2eustimDZuajaUxpUV33jrx74zUfbMeKzhMJtsnYU",
  "key3": "62kXrgcjKpTChzuc3pDG1xgrb7XALFCD7EYs2cCHtrvdASiXGzJUPc6kVuXUkuJWtLdHYytTPyB9CJF5v1AZTd31",
  "key4": "zn5kCD6qNqKygna7H88KyRjnqWcJAcTyvTLtU6hJV1tLys9voLJqaVVdbJK5JdmMQgPbfm3f2JnsgSgfdnTcCLU",
  "key5": "2KQaMff8Z5rmg5xQPKNUjhNXG3nMmfVvYZkFwMy3x76nKi1MkAvfUrzYRV3z8Mzb8Z2LurfJwqbC1nftwUUNH3Q9",
  "key6": "4rUbKbPY1xsuYnH2367YBQPquPEH7AQPKJHTTWp3a2KXqKy4BZGHnpAMVd7GT2H4emzUA8tWRQ5Pn7aX6piAoJFL",
  "key7": "xXAX7UojZws4RrJ5i1MBUDDCwJqbWovtmnqc11SR1ARpYDcoGxsuU2kq612WjKo7yJudGUF4Utq2ajEwo2Dxae7",
  "key8": "4F3Vgz4AGKeCDje93ddiZ6W6N8nvzP5C4wEXFcGfGNQJ3VmqgW14cYevHwfTYGCY1A2faViazjWLSWrTXagE7JyV",
  "key9": "2U5Sgo8ejZjW4eNT5n79krSrbQ2ptzdqvLjK5MAHh4i9NLdtrUXYqBuKpS6L8vpivctdbvRbrtGBzrYTgjBidJQs",
  "key10": "3kTTEJYewdEqw5VsGrCjAdipThupVYY4KAz5Ri1gYfdmzxVDC37ds1z74KRpHaLNczkP6bPSRosGwwavbrMPJNPG",
  "key11": "3mFhDtjYC6GHKAAtcAxZsy5BxXddBwfViHgHmTuJb73niNh6irypA3MTidxf7nueB7CkZZveTat22PqWLtZ5ZS61",
  "key12": "2NZ6SkoJoVwbXjbpZUBFNUChcdwvRPyaHUs9F3gwzCX8LgfJZpsmus8cBpRiSufZnMgVEd2QFG9baexXk16QxyAH",
  "key13": "4qu3wzYNYYBrCX1Gg5rxhtzfv72CUxL7qyBUy8ADnmpmJH9RBpbMp2tH3Vp2sUZdLiMY6VdjCUN7pMSfn9Trmkvv",
  "key14": "59U9JPdoGANhwj4W7oUShmJjM4cBJaXXof3RN3fuVSGjwVgKwQBmaUDJnbCXwNi1UYZASK2zd7JgtTZqp4nzw5ym",
  "key15": "4waBJg5rsCQTHh5vW6cJZfJMd3hGTyjxhnhMA4sfWHpDqLCkZJPpErz19RjRCU92eBJuNN3xLfQaTt4HckvfgEoe",
  "key16": "QSRFcyPeqZxdgDuckWHXmNz79iUKftSTK1yJ2Rv2NVoqEofuNH2SASCMG3vBgKRDnnJsbyqCD6XH9Z7tMVorqup",
  "key17": "FUy48vNSbKV7ZY2i361aEYbJ9KXR88stCv61A4rTthn1fDPsLWYYGDaABGhB8EUGFYmZD4jPS2ryAedePwVyJC6",
  "key18": "4u6ZT75zmFhoYyu4TGM6MrHL1MGN5n5tmaZmQegF1fTHzLJYgFraZzvP9FsrQMBrtWAq1qmnkZ6NxZ35YXLMhxqM",
  "key19": "3Hor2x6kLLFCZbaiWScAtkeg5VWGkscSYCmNRMxwvJcTBurRgWxiz81w5eLykE4Wsk1SEsUG86F84i8JeHxojUo",
  "key20": "RPpycg8eDeZwwmwMjJNd7TkmkCgtMMq3AaXt9KmTmF4cngBfpUUzFGpuwPVYSwCogKp5Vo86r5ike7bZGEMvtxJ",
  "key21": "5v3PPVgjczijDFP2LTRbhqJ9dxcMx2z1LtTbaZDSobPvYkdo9ifJ2uRsByFW8aN1UBUTR91dPv11NCUxnXNSrg9w",
  "key22": "5MbyCJYkKUBySfAQmaf5GkjaRyDaSmuMPH33nggNttXK59JGDFHpbKe7pdXMLtcD6deT9RaUCcXMZyZzxiQqsCY4",
  "key23": "2airVs5h9tBoBSQJpesa8RzPRFFD53HgYs9F6CBZNAS6xmY6WcbJY17MBMZBBWv2GnRNtFbB91WvtmZVdkowx7kA",
  "key24": "24cCMpCgTDryZA7LrmAn7cq8YD22PCcWDSFegdyTrtwyrRN7RNfenPxGHEVNCGKfdkrabN5HcTgCnjAraLBbspLF",
  "key25": "3dVYu7kBVSKBafeZHbdQnScY6tUXxoJ1Nen23QEqAFTo59994J7u92XqZTi9PgNGpLcNfWbZbQaSxNb7UWZYMpDA",
  "key26": "2CyCFYMZdnf4j9TqgMEa5LeyLEsFbTLRKvKErihnNrtNueUi8ANUSqm9GsapBGHuj4RgnPYLwRmtw6Ea4ydP89yf",
  "key27": "3SCdmyB9MF84B1UtBSfC2oNRWh8c4iVXFmaWz7LToK71QisoT8oDX9BZhsXjQkGzZzuTrPj7uRzH6wCwDLPmzGDd",
  "key28": "67g9tyoZCmSp68gzb3ESZHs51hjqK9coShnqBBJHEdae4eWPeDtBdA5hcTWKx9BS65Rw6AGxyEgCuL2xfppYiFda",
  "key29": "3naV4Co1kmNVys5mhc9orAhnuNxRi1sppFbm95LAsuiQTZTveRLhHN83uVPu5Vq9LoFr38w5G2rBmxvGxqhoS6vJ",
  "key30": "Vq9ZFzsUDAY8qxfqHcv8vUFgMKPpYX1qjZLwQoubvXrgoeXUipaTbR6R7vtTa4giHV9G4LbEfnv9HxsWwTJHZoK",
  "key31": "zzyvWC1xGbczRceR9MzJdRwhhULfSeCtBDFXFK2p1hYNQoydWP8B22Fx7hr5QiJtYKHiig98orYKYBQYutSZcff",
  "key32": "2TB2RzVF4et6SAYNzofWkNWqkyVojjF4ehaiGynps1xf6J6dBwM2TeoXr1pjF8o7abMcY1d7M2jbbbrdTn3fF92o",
  "key33": "4PjoQzM8CCgMs78vkGzBiWQT3PPwpjFNZHJiwfH8TvgZQgK4GKuM1NDoam2MGStqDCmLvWVA6t61oNetRXFf3n1R",
  "key34": "4oE6v2rfxsy6cCxwo1D3b9udLwHA3VtAHkG5KV8ANP2JcZ44CEVrnKF6qX2eER2AM821JGWq1VF83gpCwsgxgLAW",
  "key35": "36z2H8zVqTEeQA5L7pRTWgG2PQNNaHitmc1ZFQtp2QvhuN6hQVWprFazYXyEKVGFPkMaM7oyetd9P9cZdVK5nVrC",
  "key36": "5i4yN67V9w3sGvxzdF3BFypu9PaAGF6N5Rzza5M2AeqZtYZExrX26FHZntTDsDRYpny89aUPHToxtHHKGmYyNk4h",
  "key37": "5Wzr4MgeomYjnJSM7saetmef12sE1nxhroAS3npnb9cvTpGaxDnaWJPF5EGSwvhRLF5nRy9hNiTSPMXdYkmtdDb6",
  "key38": "3b2kq1AqvH6ghLKDvxxprcPhZUH5fcRutHxpuRwWgeNQfzrhVsSmmCMcWaY9XY6dNjjptNDDKMffiTFe8pzsUrkS"
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
