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
    "5UYf5zbHDLFRfyjv9H9g2ZJxrFZUm9ktRiJrAGdxktAF1NCRWtNiB42ieoV3CTT9VNDtKgjHBhCRHcYFpssEi9cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5oK5jsfckj8h2nU14FchqfeaQhRGA2kbEKSrJrvbRgPneAnk2f3PQowwCrzwvtmgTFLCjMXkSrG7KsaXhg5joa",
  "key1": "3p3BzRZvpRtVSTbo4EkaHMdTCEMD6XCX6P9qtwM824RerH8Avu7FFKmRsXzV924Z9c8dVMq99ExXSmvXoEQEYSvG",
  "key2": "2RBV2U7Dm23ZSyHwN7vHhmRqNoi9gFYhneaQ1ncvVyCpxkub6iLSAJogENZ2wQf8EHnVkaDn3XKVH71s2G6tx7yX",
  "key3": "uWJrjgrAm9zFyF8oaXHqRcguoQjNDFow6gBbZuxs6DZNzXGnHuNA8uRrajUz5E1eQNBPCrmYjWFkM5hhmCRme2C",
  "key4": "39F83zjiRiRys19sHdPmChMP6U47DBBqgfGjpTSszribGuBqUFiGcdu7AsWxNeL3kBPuqXkWWgiiHeGm3wtSp3oo",
  "key5": "4ivg78rycvivho61SsJN3kzqvHwUgpCwDiQwqQijBJiAFye4pFoptd3fboo4awHLtKGKgK4pf5mYkVidhvM5KF6d",
  "key6": "2e4HL7hiLFetz9pctzjPi38bVeRb3N3gwVWx92NFB3HurP2gMxxG786Cc4LQn77pCBvTGaLd6bZXbSvQ8nX5USCW",
  "key7": "ym7bofhJxF22P38Y9PdYS6qZiZxkB19Fha1kwZVhEHKujFYjvvtbwsJkb7vc9zk6oP9YXsm4TFXh1UQRLP6Mymz",
  "key8": "43yxQ4vu41hFjvethYeJnRv6cwyN6Ce2WPspdhtHG1PviQatvuTaFPi1YmKNjZ6aTjgHvRZjcPuscznttFcxJfmN",
  "key9": "3pfGhZRbuZr7phWJUrEn3xzernDnXaarVJNCwaHqNzTAMgeYiPMVssJtBYT7PTaqDVAGwjumsKUJohiBCbtSzQCQ",
  "key10": "67dLhGwvM59MXfcZFQz9iGKr73Wp2HYUsDjqyXAknCXwWJMBPb9pLH8gWxUFAG4u2nhKt3V1vbzuHu93qrH7x85J",
  "key11": "fVBBFqxmPSg9y9vFmh1VFft3bXHjYYWjTV2WrEZc7BcxeG2PrCgAW7UwWXSA2b3eNHXUGMJsNuufBVtBugbyUxC",
  "key12": "dfb7S9WFxbXZRYH558Ys8oEoFEExmGLn5C6RMNbtRfMwyRRXvfoedrFQLnkp5GKtnYGRc9uVu5gteFGD666BEdV",
  "key13": "2sgTeK7TSLnChpmJGcg6ob8LwZozmEobMTLp9EnirEKuvXZbBS4iUABCDoi2SK5JiuhRsbg4qPBnMVEZQJFfhHhX",
  "key14": "xiCG85fiKmPSgYrFgCPYWHFJzQ7DZRbStU49Dieb2VSzbFqhH4sZCmUheTsow9oafr2SZ57dJbnStN4EZgaPagS",
  "key15": "4mUgtXBYiaddeQLqaMZD95VCYD8WgDAZ3hH4YVyP36WNU6hdMtjw8PumbvPvex4kWar7u1kXGd4JsPgnraPDb6KV",
  "key16": "NYiTBu5f8ZToUbh9rLfDvzhtPCDQGBdAXALHP6yMMwDHwkFSev4pFuf977EcYP6gj5FJbLvVFDcRDiVdvpKv73K",
  "key17": "EgG2FjpxcJF1DE7DvmVcCnx2ms8bQRAxG9WKrS559juuR7Y4XuZaMVafDQFRfEd2jnefDfwMABLqezgwHdzeSr6",
  "key18": "5bXc2QwtBET7qhXSy2QzmG8rMxGShFngf3Pe4EEEksTxpmPqpAF8gWVhxntiquUKF4bsAMb1L3UbK7rUKKtMwV3x",
  "key19": "8N2UbbPK3VRtoyUxE9nZHC6SseVRmesNwZJvXVXEygkaSct8UHSc61C2WkSuBGnMKXexrTDiFe9XNW8RLr8V9JK",
  "key20": "2G9RLzxYCtWwvejYLdR48w4BCBfNd7xjWcbnaCE8wKedTjwGKsvqdS1xSnrVD1rc4YATeVbe9C9Lbe6Z1myri6uK",
  "key21": "5bBrWPoCJu81cAtcnWsD5phid1sVbb1pUaGB38DahMcZJ7QDGGZViGhYWSrKUuKPsiWsLkhvpxBP9RKQ8rfznf8K",
  "key22": "5M26LVYe6bcwgWrRkEn6BcRAHchuPMC4BzXL5xfz15KjAtYfUAMCo4ic7AnX5Yriskwx8PxAhecaT7aMDwFaFuTu",
  "key23": "3En7pUY5nBWZi2ftymH1h3HqfDL35poHzHRwNLECMTgheyiwMDjF9jGaeCJxh9Gq6VJdnsGT35WS4ZedCFCFCAWA",
  "key24": "3tqYUScLxVFVHp4pWwHMyvCC7TVweC6rM1WBTmD2RKJUgZ7zfBqf6Jw3TJFGfq5dqSoYDA7yaqadCL1VMqa7zaMQ",
  "key25": "65aiP6hAPeXxwQNCTMsmHa6WNRTTMfAhoNXksytvdkgwqF5h3ezhdaNjzTqhM1TwDq4WuqXfWRFmg24icFRVGJ58",
  "key26": "4ssQdDtPnH5wtm8zuGgvfMvyXXH7XS7RchvfZauj43yGakWfoDLG5x8eTqQDaRXkgy6mrKAuBnNG3tJAbCY13RJt",
  "key27": "3gmPbUSV4urBs3izVACmG3XUrocuc9SZfwS66ptDxEUkcHFH8DwYUGnUt3kwpV5r2npZ8BCyiCXMhaW9nEz3ndPU",
  "key28": "VxjD9K3fp25vYHHmLviS6GUMB1bxf4GuQ5Sh5kYPYfkRUzufruZo9w4Yh4RhL8Y87WHdyJm7b9Pf1Df1wusct7w",
  "key29": "ymitM8sioMYtacifR5f4KYWZJkiR5geFVcUNXMWCcvVAxauHEbGD79evS3c6mBUCrgAdSmfe7mHaUza7PAiJJrR",
  "key30": "x2ghELGe3VBKQt8CZKCTFrNViipJe4FHUeMEMSnEaNc5tm2LM4DtytaTEDgTcCD7pCcYVT49cxCgu74iz5NHgTz",
  "key31": "4cegipHH34xHnPWUq8mPQwPmK9TR23BNQRZMbjXG8Stt8AyFCiXfShANMZ8kTaTd8VB84ZuGMcw73BY6TLZcJJGT",
  "key32": "5JmFzCn6ndrWXew1qcYDfz6xJPN35QZpvAjCedPfQjcm35wLm8FikjS3CSM8wvzftjjom7WF5G9iAXhwDsJKb4g8",
  "key33": "3AxRA8UWHPtao9sLbk3KCwWKDDLpAvKuEQo5BoQvebX8gDiTMbYhQX4CBWkFHFAJUswrpMdgviMoGD7ZxErtn5a4",
  "key34": "npbEDPeLXTgokhWrBD86JkcQqoZCv5g8jFHLebmcC6tGC11qSELeKrdjoYH282sB3x9XfuCfEHxtBPoTzbnWqG2",
  "key35": "BMxMAdLbEjo51tEpotkFPLF4JhyikvVbM81AnATM6d2HaXrsve6THKammsFUQMB5TRZimKWRGoy6EdtMQK9NgH6",
  "key36": "4shKsd3kr4NpCr8rwGWxP4aZ7jHgNwu9WVViwVVmeBJb1MtDLikebbuoxcQ2mPWnb7ZQM4VpW3odAbbCVy7sgqvp",
  "key37": "dcS1zqajSGBAhW9cu1V6iWLft3E5niZGsNLSHMz5w6CJRfgdFYP9BQ8awRFFKpfSWpZ4mzeZfNy6CZMaGLTscRX",
  "key38": "5fKq9p3RM5Mpt3Zjt5Fv5MiCfVQMbHPUxpRMefrsgwgjfH7YoNJkcKMCRSND2XJzxTaiDTbvZ13YgWwdsfDdGGWm",
  "key39": "39uTDTQtrh1yRp9SXyb83DsEFZWQYdAjNs8NeqtVA3pfvmNA7evNQnGvqSXBC5b3xogh4Z2dL8t9YCNSshuPoiZ",
  "key40": "2WsFWr8B6h9iBRDCakwtV5rixCX8zgZWkMJs3nYuDuNVdwXZ1QSjw8GGUiAWyDbim87qUt2K4pKREd18PksKf9kT"
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
