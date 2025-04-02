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
    "2oGgYapqHDkqs24TDhh393Pw1K5MFSuNdJsFZ3n1GEmrXk3YnjYTRQHz5hoyXV5zWFQkSP2ZU2yuhWDyL4ie6qat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgVyLYttzCTr5rqVeML3AKsnF9x7a2rDN5qcmeK8JETHchtht3QwNm3PfWAT5XTKVjUDYUiXcag8GtoESDYw8y8",
  "key1": "KSFzTjSP9gYygoASG46TKEVqqc4EWfW4wqDQwYQJuxQrrhb7Di8jPiXJ6hXrRcQc3b9yrPtNrEgj3rPieaNi61d",
  "key2": "4ahLMtrHZw73CRXpRFH7gb3otZaFujgECSNo2sEVefhKkDszh3n6Zw8CyeNzW4HAPpPigS3QqTojqYDz9yQmeoR3",
  "key3": "3gjsH89enaEXLWvU1KRWTkdVEYRcbAsTvaWuuhpii3zfintNtEGTuco4YKePsfNQqCKi6K1G9mvfpUza47uVdWMx",
  "key4": "3QDo7Nk778pH1yRn6iPUZZ15aWK2PMJbyfMuBbaXdd7FetEY7dCJTxUr4jfWi3fVjGCUNZ7Rt7UcCGzmhe3G4LEh",
  "key5": "3NDBku1HqzvPduHdsNN7Rduon7PH2iQnX9tRppuUm157wQYyxvi8JFg1QhZ1devA5o8txMDD8gtDEfkkrnwAwtwG",
  "key6": "5pyYjWNz2YpjGKwjdy6s623G9puop477xfynGJyMBnj1j5Q1NrTw8ZQs6tLcnCsPKgGnV7Npw42F9ro7kmt4bHm7",
  "key7": "5bVd7GAPvCL8Cn3vMFFWW6KQXt8syo8Kz5KysTqxPZjpMnkL7YyunHLTa5Zs8d6gj2d8QmuSsrBUnDWdYECe5PPx",
  "key8": "4NDsDvwVDtr2sbQVYQ4YtNsST75wCEqttCqVu7AmwqakwxZJixpwCmw3AocN8d16Cfz5BhocVGSbSauD6ctLJ58E",
  "key9": "Fozf52VQb3msmEjHgkcdCbpDr68oDS3UgutWkw6XfZDAZqz3Y6x6GJMcc71XZKNXmaFJCsewdLDEvLLj7FzkPrf",
  "key10": "52KmVLFMzHuxa1j8JyAzvpsTk5HYzhZ6PHJsKmXZg5BKFxQGtSgRDFsKgZVzMvzVSWG8tLASiELahJ3XPMBVj1SM",
  "key11": "2U3mFAuZ55AhYxXzNgar31vpQk7n1FBA2asMGu8cVBRs6ecQT6bMTyngEQGQmeSmXH4X6PygcpRbFThFUsKUyLXD",
  "key12": "3KZhA8k9urfgvwyvAG79yiJVtrL7XudcUdDJ1ArLzreKeZNx2efLQuj96aPdLVrd1QK7rETYmCQ1QT4ovrKWxFvw",
  "key13": "24TQUe2MdfFXP7SsBDeGvN8RqNL8YAnnPxDG4KussxnY8EfMeKmgfgNsynxgYrisFH7hXULaD9HbQ271Xdf2mioa",
  "key14": "52Vmmk4AVb5j6ERyLT313HN57dc3QkVRZnEx4pLNEjUVwHF2UrH5Z4bxuiLGTjm72m3vHTNr9BW9r3cRBZb17Cuh",
  "key15": "512kGsHbS1iGwYoCVe5wnNXUNJ3AtggGpfW67FyfncbQnphxbfzrRYA4RhuakYtRT1Ao1JzC2TvTvWmMUMu6vow9",
  "key16": "piCgzqqo9LtTFAHqek3KVzZvhNdGaVtgjFycp8ZveHiGmtjTgYZvWNoWS3wYmxvNw77LmNNq1nxkDSyw97KZULd",
  "key17": "3mvSuYkSAoFazhwbXFzZtUefB9rGGVX2r8FZR9JQE4GdxDMPuVRZAZ47DhFAWf9ojVb3QLzcdmdhwb9GEDKooRL2",
  "key18": "5SRCv8SBabRDn35USjmJEymG2V1nVhgZbzXMnVHk9YyAeJeQLK8yHfR72hvNizwVGiYLNu2JdSo67Yqxc8VYaahs",
  "key19": "4synhTEBnHiErzqPUKgtmCswYMht8RcmiGSGtgQtsLi45RWfiZdZcSZ6Tc4UqzquTADADD5m1UG136LZ9PMm9ciT",
  "key20": "5mgaQWY1xiAJckbD51aCfLLjERKFzGsNicFt9qsXr86aKLXQoHssLHcLG8mboP2o858kMgBhtVipc2ZvtiX5UoV5",
  "key21": "Jp3hpUKio1AJZzwFERumBg6TDt86XgG8TZi9amJTheQiwrPCpzwVewwe1BPqHughX7YipQ5r55EUsuCYxbFvutG",
  "key22": "3wrwc9Lnb7u8xvY2PdhrF2ZpRftsXEYQDmPteYEmYDkwrLHb6a9jxV2S83TSqru9U7te5KEH3cimzyY3TdonLkHS",
  "key23": "5jn6JTBFAp3qPb2dvCXsfMojoknGKLa5aeoRyKpbQtsSaxJHcGWB76C4eHyq1JsWbXH66tNdm5taYafW9w6eB8hR",
  "key24": "3QZygNXJjGt7ZPgRamHWazCCWhj3F6omhq5gm8qEVxA5WPZKbhJwCrGC2NLMY7fQrxcqojgvFkvy5snZ8RDHGjZt",
  "key25": "52iofJzt1BYg5r1vnf5rt9EN6RAEpKHqKfg64i56jH7FyGeFqHYpbTd5J4myaB9pigwZGnYAUMpark7USotFJpw7",
  "key26": "W4kRUkVm2vCSYMPbu4Kjx51i3QBPKuPhQrjWwbLBeEvPcEPinWmdULqLN2LjUM4BwYvwoRetcj34YcSaMetrf8L",
  "key27": "4bHnteueNZxu23GRJsGuLWKxfdq9Kk53ZD46gkEm3kfBdqsJ2Gp87mycSzdyNPtj2QxzrBWt67WqWitM1Kb7cDnA",
  "key28": "4121rqJkR4Dzm422bgmmDEGmdGoosDTw2VMrHHQig3TT5cu53daMYBJUQmCJQjeBGUqczSc2GXpXUHC6Yua5kgux",
  "key29": "3AiTC7ZryvYWgt2991fZrDCH2PhQuQYAd7DpvqfB2MqjXjTgZCov4n6KGVY3Z9FehcjsJEDhksqUctxhR3kwNcAF",
  "key30": "4FVVs7kjDNzcJDDECmYeZwyLwsB9drdpyXyCKGhevdwUhhyVUWLMVkwE1esDEtcEHVrUw53iZuWLNaL8HQW9LKHM",
  "key31": "5JeTUv7yThGGH39AhP1rELkWTpiEpZQQ99pja6MqBic8bgqqAeQKsa9k6xEo85T3mRnyDKJUWcLWXsD25yWf1yg8",
  "key32": "5jV5CcqajFNuRKWXVpQLcKJHS1zC1VKb5JbriUnF7L6JcHMMoGT25Jaoa67dReNXZVi4X4S6jV2mqPfEvo3D4reJ",
  "key33": "2rXKqU47ew4UzSk266rrTdAFFMrt3dPjtNrz8PRJPDGEwnmTibaVNEyKspeBzBvCbQVwfZSMoUwptu9uaMAaWDuA",
  "key34": "3fmh1PX1be3Qdq59izRiibEAKxm5CM48ud69UKox94GnJhF1froKQ8qUB7A2hy6En8tas8k5Uz9JAJp57imFmFxU",
  "key35": "5uvXWUp7TsttBJzYtjxT3E2Hk81FoDKggo5nmCY4ah8u1yYbThj18JBfBVqvrPDL7QX4kYLevU9u6K8MxXKUZzqR",
  "key36": "44ypbuWGeDa7yWM6B1tGKae8djs3JJHQS8vGqoZi5yGyCn9S5NECQsF7wSeeCUvWPJSxdV9obvhTKMo4SKyYSMQX",
  "key37": "4XLDzz7haNxaTeBbWi77qtXn3iinXFXCgqLe35Z22P2DSAvRJds5HLoS2FqYAt2Yu1ppEnKPn3rxi51iQJCE81cL",
  "key38": "2djKAtFB8uSwJ9bwRQeSw8VaH4eU5JAZYqzHEbbGez9Z32rxYzeB7McX5iRnSyyNAENyZvgQQ3kdo3pv7qWLg7xZ",
  "key39": "448iXNr31AoEKTGhpCmXEyVGZs4o8xc47fVXGATrGcRyQh94JWsXNL52d3YboUn8s5xZxMxa2S6RuWAe3FbQSTKH",
  "key40": "4WqetLVf7brNQv6A2FnPozn8ehAv5yseeL2PWSc4D6aqPwXpFu7nLQC9uckEyWs3NpkKka86W4ZevTn8ogd63QK4",
  "key41": "2YKG6z4RM8uTw3PbkrV2P1htGcfZPUesbpYSeJw5jjSnunEKxmtrVKYwBWsaZ7HhJ1wTofatgnCQHmPQrM5tcx85",
  "key42": "42xM1vtB8RZ4huvoQncZJQdHF37qraG3ZbeG8Z4K4qTXAahK6qByS8RNFnCPpQHUekaA5ku8uiioYfEDVFgLB5j5",
  "key43": "2c9KwKygzJSb1AJBdP6Zb8aqc5GBpcM35qcSV91zbw3eTTjPyKTGeBKy3K41NWJbd5FQoPFtFbrgEHZYfDbZmWiT",
  "key44": "3zKZUz1XsXRCFva6jZ2yGg72BHjiD8kmVU1gtQgpmdfBCYWAWvhAEJJxpTfVHRn53CtpVjYeChShBtXo87UwDP4B",
  "key45": "5G8dm2e5GTV9SprfyQds7CK5yAcK6kCcDxGWWusCEHrQ8t16SutFiuH5QwYrmTHC3GHC23tWNmxPVACzA5b4sB7m",
  "key46": "2tH7aYkv7dzXM7FtFiD6FCquieEDeX2f9r8d9Gwhr7gSjoRK82c5ApG6qWEPAjAQPPZAvG3tvhNkaHKYzqqQedQP",
  "key47": "12uQk6TWd6Pa65uGp4QvqpYtufWk8UJ2VKQDKAN2KsY6v8RPE3DN7GA9d7obpq4CKLLvFqQpYB8EpcoENyBNb5A"
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
