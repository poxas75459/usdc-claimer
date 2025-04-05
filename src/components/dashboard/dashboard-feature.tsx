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
    "QL9XBWboYYM77u3L3dBriRpEPWLPHohmBAQtt6Tpqu7HYnvsqjoXWtUKMKLPEjHFL7X6uGm5hCcEwCjRw1Qq2zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uEauU8NpMz44JbBQjb79kQRxk73T1wWRTgDHRFAwmUezeMsUKdYaNyatXM2xNw4b9e5HukZRoTNLHjcsjRh6zR2",
  "key1": "5uVCAGAf1TmpgGeZdXspTKsFcsBPTwd6syrAMywW6inSNrzXKukKkGKPzitPgtFFEhdeC2g5eZk5daXtGLQtqKxq",
  "key2": "w1tHqGHSGpeYoFVWqYfHQ58a4w5kRUoiPTRHu84SqryBqov99iFDycwjwn1M4EiDnD2KmF7Rwh51YKfMtbd1mxb",
  "key3": "Ak1XZK8LpS2s4spZuVJPQXVeVouAtruNhkEyvhMbntR9SWLxbwKd2QjwxN4HmMgfsm9TWbzLZk1Lym546zVYnMU",
  "key4": "3gfxxFgaCZtc7Y4pUhJA55EWTz3aTjXQDvaiaMmETMfWgC3PT1fYkhN2jkmBsbfPV17Vb4AWsxxytCmaiMVTCphZ",
  "key5": "3mZRP8sYMfafkgvFByjM2E47uTd6QRsgZbDVuhTwvrqcRbcfQcgWiugc4oxCLpR4k8MB6Q8DR934LhzZg5UwZVK8",
  "key6": "4XxQpN6BaSeGP3fzLUXNptHpyL1oXf15UXWP5U6xG1VGixTwXv11zX44Xn6fmDXvm7tq9YPo8Zt6xv3NKgTp6X5z",
  "key7": "fJgwx2BBy7AXDsafH4xvkoobjp8nj41F7j411stWuLun4FRRiAxrwvtNe6uTFnHuGp7e6duNdBc8MGSqxUmNoKP",
  "key8": "4KLjy89RYE6HhWtP5bYxyqbz2u4FvMdj8QkaV5aLVZdLes6mLCxVzdN3rrm9yBcz9KFLBvCdTjhpC1WfRQLfY23f",
  "key9": "3ZuF8xguZQ2yLVARD9eTW69icVeYBXhyNYaoC4FU1CaAmM7rr4DHZ5FV1EBATnfhcLRe2pUGHzEByCPUeQxCw22C",
  "key10": "3JeuGoyE556gRkgpuqSNA5M8BGkcwNcMyYRd5VhmPpCn821U5ML87d8efv3MbASaoMZwJqRQB3SQuFcxkKoU4o34",
  "key11": "5FT4UkJPjtVX6nsoMLnwXcA5CWFj7uDczTNd6BfLpeY9rQY3T7pK2w1CGWgYF4ohyHNyGGttytLMMEQ1rH4esz18",
  "key12": "rvHRwqxreLDBodpVd5mdVRsfJ8uAXt73UzaRXYPLV8rznm9Y5hVahAQGPAPX7Zejm685wHHps3UFo9dp4DpQvQk",
  "key13": "38WYx4Kv6vtfMEywfWJ9gdxoogrpvWEvMr4UHKRbQ11sb8enjitib6pUjSoyx2UVrunggAQdDJ5Zjj2Bchdbb4Z5",
  "key14": "Gu2tT6TtaNWCrmtgheK2DZK4nmgop16nsFFKRkTN2dPrHQdCy2HtmkTvnxwSDN5QmiRbQoH7q4yYSmRZt81PWf2",
  "key15": "5TbY7Pe1FWr4MxDNrv9xstqG3rSFRQXFqTDhNK64tJb4NBprLBVDYa8ETWdxqu5AHZrTXAbEGatevkFCjompJDyR",
  "key16": "8XpWiLkREmJix2Etjaufsxa97TaoyfF3W9HP79wEkQd343wcbTo6LqtKZc5fTARgsu32hhcXwHeonDCGNjGbW48",
  "key17": "2Vmo1CV687bP8xCeTE35vWU2urbzWXutnKynJbMKt3m5JakAYVn2iSHJAxGrPavS1oUJUSEPDS7UBgjMjDaMZAGU",
  "key18": "5DGwpT7d9Vmvx7PumxihDmGngS3uDKsyGA1T7o1biu78GCaor95F4i2zbz4iPrj9zfnnuAZdAR4U4vMAqQoXFD1X",
  "key19": "2DQ5twMXiR2DtxLda56i1CJmjn3Pf922peugJiyLB3T8JsBjHsRbsbZUxLSjrCHLbz24x7fsNLpqQBryu7ZPizo7",
  "key20": "4gPQ8R96PnUckXVvKgXr1Ej1twxc7V3cKA6JFQ1gowHPhDb6jzypL5719hkPvC7xibKxK9JFhiZKTe4X1tJMg6or",
  "key21": "5HwmmboHncsekvnUguk2sCiGmHsQSYsKmAJHRxDLsHW6Nb5eNejPnKffizRSUeNXRH6E93s9CCwKXu9HYZiaEVJs",
  "key22": "5HUmiszPRAFZtoGV6peZz6SeuBEZ3qiihLSCKX7iiM6tWy5U5UWkhiNGHSaiabXrvFzKwuDzg198rD31vvNKNSNR",
  "key23": "5wiF99AMN3xidonRkaY8KCfqg18B1MD3y4vnJ1wZZFr8cUq88nya3CgaDguBU2qEJEisaHYXmr44LtECrdE8UhR7",
  "key24": "mxa4nwn9QADCSxXU2NEM1A8AKPMqsZfd53C6evhZEKJJHbVpc869CLwkDBpyvpEPvjQvGdp2AqiTaY5pSNwBaFg",
  "key25": "n5kcT7ywDZ7QRVEDMeyoJ7zT1eZjRrPmV2A4bPWuAL3zEnfLWnwKs3NWG3iVtUtWiNi2faoHuVPCAjY6PaoJ5qY",
  "key26": "386bZyZiw7crFJfUMaYmC469LkjriS8xU6zhZQFDk98FJsmKuhtz7SoV1BeRozkEfC49Uj8vCJJFMR3Ru4m1FfJ8",
  "key27": "3o3eoCVdc3AN4yoCK1g2EHq2izpaush2UMeUuU2vrLP913Em96JS5a1ZQ1ZmvXfVPZWuRkBCT54PAuHN7rWTDUMH",
  "key28": "4nSGYXEqPqDh15qmEeSfMW3qzVtKe8K3BeyWTuevk7UjkTNDuHoiitJswFqyCULpN6gZuS1cVHe3yNZem7pgMHVy",
  "key29": "5XgF3GG5rn7uoWaXBaZyvzp6AyBgRvLe3LpSz7HAt38Lq19GZgXxo2NN1dunq7NGaE5fa43nmitZSZh1LjaehAmH",
  "key30": "411tpbThecwuyMDckjdMo9jrWPsV7fC9xuXkBHHdkxjmMULfhPDoL5RasmY9FEvHETFZxPQVknobW5jpMTXFmgh4",
  "key31": "65J6toeB8DyAEkMJwjtHQBcfPePZMUETttd7kyeMPS2VjZKTWZKe1s57t4qEJfErF6ggCJDuXmoP1n3ue9YQYUXw",
  "key32": "5TpusvauqR4Gf3J8YPMAG9rZ4svt9Tna86bsifJk242T8tKeL9vRkRwDxZPLbdxdRjKjiyvM8oWDkW9p36T4tiXF",
  "key33": "3CoZN4HeVWXwCTnwQFTgBqDEVkP7ZK3L7Yye4uKNqZibiRRQQyvJjFnyzn23yyuXwGErLfDUXSiVXX3E3yo6eiFw",
  "key34": "51qYAEgFugMZyit1LuUWdx9jJp8Wy97AJkv527krnEnRqsFWYAWLVR1S7axNxFbQX1jtoMpxZ7q6TgsaWvsrdWf6",
  "key35": "4ZDqLe7j9umAeZRZZq3y7cw3WpqEMRJf533f3FhQiiAmXBb1ju78qGt6v7sCPmBLBWUWPCpbFT7HruF5YwoRVvUV",
  "key36": "3DCmL8zyVHysi2SGitxrS4y5NUN9sqt5ULRYtxmDvsJArPwLDabSYuH17dGvQwqQD9v3CyRrAgumFwdcF65svfy6",
  "key37": "21ewxo5bKgUVWKh4AzzNz5gp9B1KjovKXEvV86yJu7QacjHwwoTMShnYveraCwxtMniKSQSqte8Sep2hCbMSbdcR",
  "key38": "4VvkN4vWRWBFPJZeccebuR3c2t27zD41QotgVNLbHJPUszgT6V2r9LtC7MxWg3zkgUZD3uDGXUMBXZfDBNkwzQXg",
  "key39": "56FbVJe1vstZxMbjtrxud7SiYwjrmQtRLEwsbxRZBvMCNqYFYFFYrLRguuQCpwHibN5AWAbTC7BH9FAPQo8rrx6z",
  "key40": "2xG6x5pFwzKoBHqasKWnH9eucLbCgVXAGw1tTtcvt8tn1UykfrzwvHtpE9CKnXFdhHzNx55rxbvXu4M5wDb9yX8v",
  "key41": "2ZNsiS2muVunaDaJ8fLhcYnMmKkJMsZNks3V1ZE4yPrcVWEoJg1g7r2pfaakAVLijKH8DbHbZGmzhrrkWjWRdvzh",
  "key42": "5jfsv9kEMiy8eWidT1pbmDpLxTywyx6oR6JHTnYTaz6pLfs9jNyK7Sp5KGZvFnFEWKZ3mSQbSu7aPsATsC2wssFo",
  "key43": "4ox9QgLUSgdWCth9Asv7UAp1zngX9NKv5r2bW2sByipiVebNWwEfccump7bk7V6VqWafJLqzM4ai3Nmcrv2FgCZT",
  "key44": "5QDkdGAwNT2ac7AXESE5cuU4DV64Wu7xLmSquHm6ysmxPLJ7Cw4JQuwzWYaJ4ieWPFEUf9jonvQ5CNFnj9cY9sJV",
  "key45": "EewSp28zdMp3YED3a8y71mNFck5tr4HVaFWH9opBpzmdgV88uufG8ukruSmzj895BD1Vt8rSFe8BoHztkF4PF8j",
  "key46": "25PMXdckL1AeciqBEk9xAVMju5WzteShrmGBjoE2EDwAtpMAkho8eMPJaubzvQzNu43dUJ1SkY5zLjv1mbjCEAQh",
  "key47": "ohSMGELJSUUo1Le8UPnqWvokgoMVhaiCePM7eSC7JUdTXg2V9YvnccH6BfGPNoAB1EcEXrruPy1ncTdDLAX9E9C"
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
