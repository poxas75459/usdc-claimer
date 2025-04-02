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
    "659jJx3Z2cU1tevNzZNfLTvcv4AfvuxQB4fXh2VqSaRR2WqM8xg52tPt8peCuBFDL1evcq2QGKpwQhkyMWxmjXVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27LiMkaxVVZeGrYbzJecSMskPVggNMSyE9r6b4pB4nZSAqhyUgBvFoD38q4xf5Lb64WthFbWXZCnYsMrireBHLev",
  "key1": "4b4x352QgP2amWYRBJkVqxKMYL7q4vUkZJnr7PV5RA7biMEuVEdDQnE3wUHp87fALV3Q1VFcqtNzVncJZEAxd7yC",
  "key2": "2CXZGMRrBiBwj362Fk2TJq28vxX4inv86fSoRXq5EmwefGpbKxgwKvbmq7FPyvcEpXfchyFaGwUiVzfKHECoqGbb",
  "key3": "4DzazJd4jN4yV7VqNQM7LmibF9ma5yonrn9kz938eKYUMmxjLWYPVnwe5b8i4NzHRF6iMKX1FbadoNzw93G3rtPZ",
  "key4": "5pSPVEqQM34et7SyJbc8U8PH46xupQs95sKVTXAXbUG5JBxqvyVwVtfNF7iT6Hver1YbYrxcHqKLi4gCBzp7pFGP",
  "key5": "4PjCtFVXb1JutJFyMfDxmt3km5siEnmSBRMdHijAq8NmWjpDgC1bUVGmFyY6g5kqqtGqFx2GSX81AGK1J1aviMyU",
  "key6": "2JtGRWJALdLFChsh9Ns7j6yA9i73MP5tiLgKB3zPrKckqUu7Y47DbokzW1bhPbt4RbvCcpZDZ3CAhMfLCb49StYj",
  "key7": "AYyHWrLwLNQxRaZqLLtcYJ82C7AJNrZwwF1GgfpQgGbh1u5Wp3irBRSgGZ2CeDeAjo9Qikd6cN25t1nji83utQh",
  "key8": "3ZQTr98mfQurFL3t5TVyT8eKZUZK22d3pFHFKCMskSG4o2auwAAV69JKrSuoM4KovCaB7txTzLtG329ydreo3Yo6",
  "key9": "4dLZcQpgvt8SvCKjvzrxHqUh1k22kEub5UJuKQAvZpLpwAh6kCdufsxhWG1dActLdT1w5n4ephEWvphYLeQ9FCt8",
  "key10": "5H8JcXLcKT8UHKLX29tmQH7NHezP58Ns7TUVinC8sBCKpTQAR8zvQzn2JG6vEywiCyJocCbN7GsMtjspKipsfbYj",
  "key11": "q9CCrrZK3Ck7pZZskgn8RGWxE4KmARDvZqQqZ35ZF5gbVVYP1qhvYxMK1Bpu2jehHEqkdfzGebjbPYXRNoMBrJ1",
  "key12": "64cSTX5QFMSjB3wZ6P1VfrfHPsKaB4WyBcYNTY4mc94c9KiBHv6gho69LLv2QpZ4azrBzyLQHcDMPYuKNbJGBy49",
  "key13": "3Lh2nTu4Jbu9XXdS5GkKN2e934eyzYYMJmBLehyBtAmXdsVy3NgwKsCvk6RySnRMhgkrLj8HVjxhcwk2eJiR8ddG",
  "key14": "47Qyrf3Lb7SCdhagM77aChBVmLZvJuBTkbkFK4odAAZRyEg54jAMHYHAg9v5qpQEsQqNErACb3fQJth1r52zAHM8",
  "key15": "47g1NiRXsLb7dWHhrLr5HtDXQYA1YeL2EB5AEU76vs4yDps8GWYT2qRP22p1NmEkzVcCCCRiqNVxJkwXD1ESiMBB",
  "key16": "45inHC6rTUbYy3e4ZhGfPtJHu7JToxhGEHL6YSWjzm33s15w8HtRpEWww79D7ggga1u4WxGN8QsAF3NNCdzZVnU4",
  "key17": "3VPGRwdnLTLEVMV8bNphMpaSDZUpqd3bhsQ8vbmKcQVdzkrX7McceKu89i6S4ThQtVPLJVpurLjVsGohbgrRdsgJ",
  "key18": "P8WkS2qm5dJWu21Sve7jwYsLvPWZf836PJh7F1quQri47PcvRiGrmPNR3e5Z5Huva631W71wGMPZi2Gwo4Nxvzg",
  "key19": "5rfborNLyJfZG68Vn4eMidMXd9ResSaTq7DZ6ZDk99Bztw2d7ihjNQB8UytUmpNeKGspmm7ZaFVEgmWvSxmuYJAo",
  "key20": "58qYfNpXvf8phGSzQHCLGHUVh9bG7zpGFoSvkvLAxgtXrCiUMFQK3Tz8wL1Xn3neoBz2dzCStjCV3rmem3ncn8ZG",
  "key21": "ZdrR4n4hc99fQ2asovCBmo1ywmyihsTvwWmorYdsXMwoSCGegyKt4XCLH516eBiZ2GS2ijA7QUiFYwf3ssSugq9",
  "key22": "ShRogrELjHPEoav1Rr7DhJV2GbCxesrHWWDXMfHfX3GUuVxrP87uHx7aXAW7JaZE2eyzSCa3RvkoVo9ciWyiGqu",
  "key23": "2uDh5wJxskx8ihoADMzfUGm5XG9aBdXUqQf53USvLECehfeubJdMdjGZPLVsVHqjohPnswSfcceRySb6NiKNReXM",
  "key24": "2s1UtKUNC9oVaoymkRc627tmajUzk7k4nEhucXJeMd26UFmSMsT14Kyg5h87LpaHcZqP7wYbxXNhfZLMrtPuGff6",
  "key25": "5zAJFvxnDZFMPpjQ7Vh65vVk29kNbLmAw59XQQWrWfL8BUbkdSgdS5tdkZmfgbiErJQ5T3vcsAULHyiTh74E1SFW",
  "key26": "2HB2UjH7WR94nmLkPdPJmfiLfd1zhRUnS9ggeCmBoZerCGVnmQPe5D2njqkJMAQxgF9dedRn4bz7UFpYTMi9UGmE",
  "key27": "3diduyfywF177dkf2mcUdoN3BWosLbScthsxs1y4yoNHNSji1kr8zZqSt9Tkvvg3MwKRJpbZEWY5wzVuSFSRHUYM",
  "key28": "24ZEjacfaXth4mkpaBYAWfDTVdiypiKcM3HTqnuH23em4eiskBZ98jcNAUzCVrJ6vW7SNGm4iJifZGDrsDaxNT5d",
  "key29": "4X8G1q8L4SdkGZ6aPD789nj3iWPrWFwAP2eXf7YMuRUCQnJB7Xa1yivy4s8Ew34C2LQu6V6hZuaMPyVqecwjzAi3",
  "key30": "YqQ6tNYpNBGhNrtU91VF261B8Mcgzs6rHGB7NLmp52g5t91sVwVrdDfbYQHkV7Nx9AmbffCECGikVYsVrTV9NsV",
  "key31": "e9HWhDSwU3x3Fhu57YkuwAMnApk2k913mHeTMEMbrSWXpbhy2LLJva2h4gakFCQE92TMWs29jqTkb8aBGGKt5pK",
  "key32": "4SXh3jTKC9LnrvhPGa6YadvAvrd4KNZPJ1tTdY1ahf5THQcEUwUpm81HX2515K4qDMEeS2ygmzAoqVkDAaXV2Ko2"
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
