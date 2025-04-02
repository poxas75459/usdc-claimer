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
    "3x1bfbgsdNNzWFWo7cdXaxJyePfgzZNMrXo9UTjAbiTnzKt19dE3py6B6SPTah6doprKern3tUktHkyNFpEydoyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FwaFg9qQpq3rfjx7beHgq863oS9kQyGCXk3iLtM46PGwkgZq4Z6mCJ4F4JYPmRfEoVqioSVLqycLbJV633FXzzz",
  "key1": "25U7zw4P9LexAcQhadGNr8vBexytkduYT22s69fdKCPVWGdi8Tz8kDYmiNec3zn1KjDuKW47A77FvJAwB1DPZAEw",
  "key2": "2xjTch1vcTcY2WxBLPMuaWzCiuL7ve6zwSQCJNh1bRK89CM5hE1zCdNjKt9wKbp4SiUwsTQGWp81WhxLqwU4r8kb",
  "key3": "5YZ3UEX73RKCswtGEz5bBcMqGvv3JjuEEUcQkD1DUZrQdSLGtmjgDYprZcagu2DsEi5irJ89yfehnowhfWQuieMk",
  "key4": "VUpz5Xjp8H7nkJLEtCT5PC3Leh8i7bacL9PpcgcGtv9RoaqyHfwiwBDnmLDR2n4ko1zKoCHjbQ3xuHdjcPtDdgt",
  "key5": "4GLy7BMAHaZsn8bNMxnPU3WiwXu5SUwRtJkYVAc1Sqmw6dsZn89VVmYu1EXceKtjziULMBjS5bdudHVkoUKVsv2j",
  "key6": "4LiXdgmNDmaFCrSXgPYqcGrnt9H4Yru8cKeQthVa2czZUqiGHZtjsRnjhQn7cc7eVU7tg5W1CtNQME2F3tC2ogrJ",
  "key7": "2haW7jVwaCW4cDehqrkPfbWyYB7BmeGV5hoibCyWoJLxXidqHxLHXKxy7eKwQgwp6LDqCxx65f5fbrCrw32B365E",
  "key8": "4tc9tVtGGRiZBhmz1hFJJjaHkeqKBPpG2dDX6Y72w7eVYHDqsLdPDAcD58WzoiX1tH6XFk8HrYscSbqHLBxPtXEz",
  "key9": "5iLASMmoGDC9quk7DQYTqV8SP27mmVnn1eBkHfqiZdPLFS8Srgp5AKKcSFqQCNpKUVUMTPaHfTi9xeMTDV2shobn",
  "key10": "5vymqBbyexBfgdzS6uXotHAdyBPN4q8X2FnTNbb5YgtyVHAjYv4AaNrFUx3UJHqWp5g7poFJyWSwK5hjL1j7QfWg",
  "key11": "Yixx6aEUQSTWCwtBLN2KdSCQisuMS4AjorfzuVXunSbxQNztGxarqm92HJLa7KDbNLEvyeZKSw9rBwhi7Yai1ow",
  "key12": "3SqZTroi3TtFJvs9AMsXK8zzsCXpcFDExFX8FnnJyNSXpooyfSfRWHA5LqnFsEnLMtEtaMAZdbTWdc3ucii4dAUu",
  "key13": "57zyFGCiJW7DMtLzKKS5d2uzTf5V5u3ZFRkbsXCXtTq6UGAoud4bBam46twifB5bqxehMgtHvQ9DfX44mtNa6QUp",
  "key14": "3ky4Hn1yTzkVEUVZbDMxJMU6EZaMXyZg3n7qHs9mBdR88DYuZdbkq2kWqy2sg3gLQZPHdVsC3LKWKNVemduiyiuD",
  "key15": "3JFqBPmEtiB6yDdt7kwjFpex4h6HdCWD51EBueFcFE5kX3NfHJTqq3ooFdsWGh9THG8egNizFAjwqXhKigqNVVxJ",
  "key16": "4xo2dUpdX9UTZig4bpwfdt4hdhCzhCTnf8zLkzGqy4PMkhnC4K2wFVR4rJzFuMn2DZFfndJcnM3eRUyHxxoy3Epw",
  "key17": "2D1ggG7goZv7arwcfWXCgnf3qbv4jCK67TnKADihjHG4edszXK4rBVfWT91m6qjZtki5WCi3sLkoBTkpPAY4wqbN",
  "key18": "qnWfSyTVY9B1fHCWjw6X81XGPDgEcgSiLvx2ZZMbeFZhqXaSsN8LonfkNKNwjzxmNkn335faR9hU7Z2JyhMyFW7",
  "key19": "2p6EtS7s3wjS32PJXbnz7jEXNWYw4LG94tCXaAxVDM1miARfPtJYRNZFEFweSs3M4iyyQ9seG1RAAFiGDQb4kYZy",
  "key20": "57vKrYYGB4yujtgo3jyZ8JEAUQKuJAFbt6b8N3TpgqtzvjaxLb8mNX6KiXGNSP3VWcGCrwG21FzJntekAEocc2mb",
  "key21": "4zy237JbbMCU4x4KyGTAxnWYhu5pdTy545YF2E4VZhVAX1SSVQS6oirASLWibk6BHTHKZ4DthsuvquuW38pPTwvw",
  "key22": "2FKPTV5pzCJQXoKuqfiYvLnX64cTH5Zycs5QuCHHuWxvzcT7aBdanbjJCFzx1jjxaAmPaZXcYocaoPWzRTZMcqTK",
  "key23": "j2Z7MRdrWzNMmrek7uzxPcagBgzZ4ZU7ALv6MzqUnphedC4VfQ6ZfLNi6gZVTGUSBwksXatZuBz2Gf3UeAJMhC5",
  "key24": "FevEpQ57k7ysK9qTbpQCmzvLpr5mGEsQjgSHDKb5aMpGRuDgdQiKJkPCjv1y2nKZ9PGEXpdUzLrkF51FXhUdy8H",
  "key25": "3uqBMCusf8iR9WJzncys2EoMAZKuxQfAe4W2woiSueTxk6T6swEKYvSxQBGjnxWEUKctJnBjheoQ1v8LMGsAakC3",
  "key26": "2dGdQDuCTfVJtVAVwemqvARAt9fpH2RigGvxEqKCLzogMFub9rN6nLE7pd6QfGZZg1DZw3owcT32HjBrtNgPLTHC",
  "key27": "5Hym5R6PaL8w4RHfWTceFiv95L63E1zb183fUzpQf3ccDVj7UXRx4GytRptBuMc5qPWPeMJMkTQGgMvsGMLg87d5",
  "key28": "4vei8Sq832SSLYcvwyMiVgAGrizt8SZQMnB5ZwPHQwZgSnVaGqRbsFbbXDoA1ivzWQ2UM8mLUrT7MBPFq8nPYi6i",
  "key29": "5Ng29y4v6bE1WVhaeMLzyCRSymXR8hzHCMyBqBw4m7hFUrDjdkTLX4ZEpowgHcLDstJyEAFws6NtFL1J86Z5woUC",
  "key30": "5EnQu6CDnCfXRsKagUysiiqCcM64i6L4Jau1K1K3BiYdJWzAeEEFxhtNQusBtUN69j3EwWQ3t1mceNXGcnM4JxVD",
  "key31": "3RXSGLDHZjD3tLnz3juUHhG3FD9ogTDsjoZrTRZYNoVXaUjQ7eC7e4HX26nVqsg4FxgUT2VSBZVKe1umv9P95cW4",
  "key32": "3reFhcyeeWL43eqx1PBdA6M575xhXGnpAQBFEM8F7NgJNwm2po7KT6vAB8sQtDXyPkdfPtmSQvPX5YuBBTbnAf83",
  "key33": "WnuHuj7hn9TPnzmr2FKVDHxAhbkg8kECAbAB9Mam6WiAu3p4zo1m9EFbNVncQDnf3ecf3A3PvYtCndnmTVKSWfY",
  "key34": "2S8Rp9eiQtUK1vSQC32HXmexbY3eFj6egLYNEgbRRiJ5kHZeszzN6Y5ereY1CxGg592fyiXtuzB5FDii1uH7txMC",
  "key35": "33YoG9gc85hJoj1kYmzKjyTxJoSUiG3Bg3LU3HsQ3hEDnhouYbfSGtcUs65bAUTAMcMWZDSyVzGXcZptSpg5wmRq",
  "key36": "2iKzL4DB2LdiBBq6HdZqqEEZjSBrkjpwFUMU2dRNaaMV1ctK5cojKkZvXYvX9GeNR1bET2ioUtkzTmQetDAv6afJ"
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
