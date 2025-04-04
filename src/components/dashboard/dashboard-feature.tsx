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
    "5cDff4eccYNqdg1qMioc8CVNToe6KgZ8coWEqYCT1HJYPWVkKQ1D5Xg3dx5E3VY7hDHj92BP7YpCvMnXbxpHywFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czr2W6dADvrW9ZemGuvRSTUXupdH2BwGKMd3N8ZVkMTjMA7UedZZraqriKj6dUtVsCtwthhWtdpTBXWpdZnVuAG",
  "key1": "3HWWcey1Z4QE5G6VzfyMTrCPq5Gym56R8HeCP8fXmqRyiGkxpnwVELL6P4YorJA7ktKSoy6yDNWJ8WamJ7egFbVH",
  "key2": "5gSvjbMVYLqkPNsoKiDyoP5vUYVxFvsbWxAmtjw1bfDRi4honvSXoEmNvsqxAHcAcK2yR1qgaVhfX567ffMWhAUm",
  "key3": "pi6LKywCFUNe4zAwHcbDvwGmzoF2AFRMJ9R3a78WNhK1How113axT8hprbKof3QXoQLDi1Wtcss18hRj4LNvTEZ",
  "key4": "3wrFrbxUjsd2Dd1NMPDaQNtP1jPSRG73tSs7ZZrqbmnxQmWQ8kRLzpFvQpYXyYGuF8xoPxVQcctn7DDB8wcQsPho",
  "key5": "5pH9zAUCvR7a3HcK19wzijKXJUc3Vg1M9aSXi2rbnJRTejfo4WUB8i39463u8PDAAdYPKy7mjG7MSPLh8T64rDwW",
  "key6": "4PSQSLdfM3DjEco4GjWxAX1uKxaUrP8vH7ib6pjPzVDC3XY5HKJV6ChFg9PQGBwwohPv5t13LUYAtCoLfGeJ68Rz",
  "key7": "4sb57ELjz5Uq5vRXNRCE4emtz1Jc9rbUQu2ejEKSkoVWSyKW3rG9n9b1qA1pKX6KAh12UpeNYGm4c9xkBKZf7v93",
  "key8": "3YL7Td8Q7o1y1eFtkDMfHmnUVWTH3ka4LMyVaY2q71WVynFyuEnf8rzCyZHPFnBckYF7CGkozoR4SB29EUZbBABa",
  "key9": "3bpcu5JBbnaMXumVCRgNUmxAkpvZTNhmr6HeMEwAPpZjmBAuLeVdyEqCoCqD1ASnY3ezYKci4cCVUQQJA4CmeS9V",
  "key10": "4htkRKTF6erx2PuJsMCjZGMWCQvVRpEg7W7uEhmhLoC18osKg76r4aW6YZmsY54uh7xFX5r4naEAECJiai2HCmF8",
  "key11": "2vQpMnjpnkA47QRGcbjb9MPGBurTZpUQ6jjiJQVu2hkpTsrkgQNH85eQhc2KaNxu6oYzatbfEyBfTVrYSNYVL2Xk",
  "key12": "4KDGyqjh92fAQdcPj5jnEAaFK78aQn2SGprSkpwC8Zdrq2gAc7sNMwUfbtqwXqbonDTa5igRDfsQy9mY9nkt91m2",
  "key13": "5mGR6FrFwunhSUvcc3tgaS8MEdA7n6VB977emV2SyxLYfroGVxAqWg1zZvpycoh2ypHVGZGYdG1MPhtzY6N7FhgE",
  "key14": "9MRKudj8Fz3GW7XNDGqKbL6x8dH76aA6Y54yc6wiAe3FTfNscTD4S39sKiUzfxg25xR3XYwpoyiy5P52h384KVi",
  "key15": "52W5fCBEtFqBoLrzX2MQwpPkftaMprEyw3hvTuWZeapAfiLsBpj9i35m8zbwsZMQsZrKjMRQy5XHTscfSRhpqJ5s",
  "key16": "2arGUeNufr7krmmAxQYpi8gZoe6uvHCv1jTKCQEmJE2W4JfBec8AoDrbAcEyJTPcD78WJDiFVh1c4sGetkntTce6",
  "key17": "mLnXZhP99Eip8GkQ2zWFo3uQQvzJRi1a9rSQfgsiPRbQKGo3J2rnjHCghH2MUHwZjjNK9R97yBeQ8Z9yniRD63e",
  "key18": "a3gNJJxfSU7wpE4qdCWcxvNjyBEqnxHhNdmwVGMQ3yKhGzzgsBGPw86kNqqXpvYaWeJnAhheLTrwHpe4zCg4xMX",
  "key19": "5Vbi2G6RE3o24nxLLkdTpFht6epqn4Loqayjme3k7vsquuChDLJt9URkqK2DWbmVxmf94XmTLDjZNqHZZNCPsfeT",
  "key20": "4pJ8kajZkDwLXwBCr8LGRjuiypKpjhqsbAEHLYX2GiWZi2iX5rD8odujWGdLMJVeg7NfwR7LbWWhsKoRxxYsKGKL",
  "key21": "5sdeYm5CB7XhXA2ogYd364SPKmiQyPFiKCTo9JrEt2ziz7hyTcDgvnn1KLpe9gaXvUJxFHoKjdRq2TCGCJYbzdGp",
  "key22": "5D6bxGnGwYNcdzWThLxGRXqV9czByJVFBkqhwaey79waiamqWtnL2uqUaFAxngkno6LwoNwd9HcpX8JWQd3TNxW5",
  "key23": "2e4b2Mjcx7PLEs2CpYnTveyXLKufpdEMZUxBhv3qw2vVXyhk3hZtWLrEvrqMRH8DtyjJjXozxGP6KaEnpSNdbVrJ",
  "key24": "3PyRmxt2GKjBtDiJsexKdDcYtLRs1Acei8jP24enAv1zaK1dn8xiCxgy8mDct45wCB6WXcrbXbBkYdspYKSEcYHw",
  "key25": "gT8BCAfvbGGUX19rhNeQnRGAKKQetLcX7r3yd4z93YpwiHm6ZuHSCTBEjybpTggdua2e3gvR86RAkoPdfiRKXDz",
  "key26": "4boNmG3x96yPRYwk6JR525DoJHApPqPxhqcDo5k4XXEzv8JumyAvzbMbejhH1AWotGq51qRHxH4FTazCQJsMza9V",
  "key27": "5hxyY4F61qkN5CWi8HZpHyfta1DEqh3Cni7arNHtasWNh1QFmfLidQVgJtgTd6m3ux8sUuYw5qjsTcB459WW6Kqs",
  "key28": "2cB4bCnmLhEC531THy3AN7iVaF2heQxFat3BtcAWNWFyDF36GkvP7q1unCw1BrmbjCEJ2qN9bVKymiYp9FMA3obC",
  "key29": "5PhKB8hDadYFPN96sfYXpqcRdh61ybWtitxdwYn4Y6wuxc3zt9E7Wv58PpPTcn4fvttPeNEn7PM1CWGsZ4Fif7eQ",
  "key30": "2U7X7pMdwKAXeHBe7f83n2XHS5QhGgwwQThFz4hAPnsZe5vRXMbk1GzQipsRUcTSeQiTDAc95pC6uBAWULHmo3Wb",
  "key31": "4jit2SE2fzALYvxvBhSkXtmo2BFkXX4KVkzHvQkwUWSFDRfc9GE5n7DjbY6yaCZoF3nbNQRBZVYp3g1TDqUibjaS",
  "key32": "3H1rtKjFyM4qATbFNXm5JfJLu7eEiqoW3dQZQpxn5oinbuR3RwuH4djqwv7Q2eqUvMcModTsZq8aNor9riQqGrKN",
  "key33": "2SwJpGbhqSRG2YTr1ePQGepGsDP3kELPqwPyRsQ6iL9A5KiZk2BzcHWz6so93HXKceEarMeExA8s2naoascHDWQ3",
  "key34": "JeBFYi17UQtDEDYJ5uovQjZ5y2qa5KfLok643cQPVX978bBM6mQzMikKbfVUEU6nupj2UeBFLVrbHg532o2EhEM",
  "key35": "26bvMmkZ2WFQ2FKkxnrvCEmiq9AgwxnJV1cjaQAhaR27RXvXp6J2sSWwbgPBdzp6S2F1aA4gfrg1FzHJivqABA6L",
  "key36": "L8DSXZxUR2295cTw5BYa2JgP2R9noUftaUuWwqzrz4miWma52k7CxTPTWTD7B1GkbAkutoTe35QauxqJrcgE5Nf",
  "key37": "5cBQYtgVC9fbhfotBz1hxxnjN5ZkGKbkRMA1zL7NDVWtsMBoyhjnKwN5X6ZtKmejMha6SHysfffyhHWQRGsCj1gp",
  "key38": "5knZwL4LNLn89nmeKWzegXBCa654BSbnBipjQptXDwoqhBvohat3JDHN1HR1czjcQ2282yRhzFzPjr8UEaN2FB8M",
  "key39": "2MPRxvkmYPgPfh1eSEsY1XX9peUGr3hq24PVgCmqt1JkfNaL4WQWeu3KcStu7fZMhFCA1Kd14N2pwxGWUoMW3WL6"
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
