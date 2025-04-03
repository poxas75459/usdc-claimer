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
    "21R84FZc4riJF5bQxRF9Nd7Ud9SQ2C5vPLpcsE5ahQ4fKwHQuNKCCZ2GUUCogPBytczYu7k5UQCQ8NPFhcUwpxUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vD5G4ptFesFRHcgATio4MCrdAKmK66hjDmS7pr6DeNB3eusQBxVPPuzLEcNhFghRiQLgyrAESfxoJMocmiTrCrx",
  "key1": "4wYFc3cgC6tXVg1aLYC2kBvem9FYVkS7MzSoguuLXim9EDtcgFSQJejQZ8eNDHiEQwKT7D7WgLrEDGLJ3rYED63D",
  "key2": "2Cg8aMGbZckLSkKaWugpTyw7VrAxzDkipc3ppBGLV4P6Ku6PNCvcjehQs5yxyNiNChGT9U8qZCxzNP1z6t9jns4V",
  "key3": "3x7dojPvYDUMb8PdmKqhsS7RxyFyok5ebWKMmTwaMnxkMFe5LpVPVaMbpvFX5Bczw1U6vYeA4e2V3Pm1G7vFHNxT",
  "key4": "4JW1akduSgf8aCP3DGaC557Fm89ngC1i2tKjekc3VXAqPNxJTZBXLhEa1piFzSSgEiRKvrceLqNJgVB2AYqjtJi1",
  "key5": "MFJVCha34VtfinYrDcDJVL7psUTvYsAyVJ1rKB5dhQ7gcadNYj3SFD68yULiyTyLPzRy11nURQTB7cF4vqSz6AS",
  "key6": "2qqGVTkn3jQvBd27jkDNCMy8MPhUEjpuBhQxQssfd9MvZVpAJDDMHMM5sfUabtBtwUAGmTys5dHrp3cTdgyQYMig",
  "key7": "25jpM1fety32jV643sdogHuhkzi89jKndk7tY1S71wZB8BBtibeFKAdLaCYVB5L1veermWcgcjP1jcH6QMHy7nqq",
  "key8": "3yzq3dVthAbRniL8hSyJ3vaQPYZGLYZ1qeJxytKDRUJ3BtqjVmwUcUvChU2tA2EFXqpag6XHuJBGYxwoyw9FKeuc",
  "key9": "47M549HaK8AoFuDcHs14vvYrgVyBTk2jtJSd8GokXjfZTFqRhzSdYA22dpxZLiXoDtvxfuMPuGagq16Xk2mj95ja",
  "key10": "48nQpsdWXS4ruHrEu4u25vStHRTgT9wuSrmjns628kLdVtZXGB6dXSCG48YWnVuuVcQhvRX8MjiuSMQ6c8cUsqVT",
  "key11": "5VkTM7kdt3fRsyc3cmbvMcLyvTprHhzJFxus9jz9T1PWyv1toVE7eSPzuMFUxkCjco2y4Gmm29FFP6uiXsbQZbfy",
  "key12": "598iPtv7bSNLKqKLeUQj2J9QiP56YcSwurr7uwc7PqqYYtifBRxPcFNsBfUJs92okyX1jSg59ghXB6EGMJJmgeKK",
  "key13": "24ESZrVVxCYaXYMPb2s8JBkTafSYcZWdNVy3TqrNKEY24QqBTF1p9LLisTwqYJU2NB361SooMj7C2V3rqfMFQ5qB",
  "key14": "mHwz9VMEaBnmzrvB8RJpLudR15aFzQsDZkUADYjn2nYFt1nV9aSb8zCo288U2XiW4wKbkbVqyuaVC8Q4Y6HtQaK",
  "key15": "5UQqHDTTqgU33wSRGer61jrr6CY6WerWm6Fcgic8nUaMCYqDfDYMDArzyficy82pPPdSsyPikwSEv6ZLe3fVkzEc",
  "key16": "54NdGYZTkHvqoDKqXn18yz9AZtAJZUNvt6wqNvP4YpbntSfuGj23AytQ98j7DNiLh6SVkkPTc5bv947z6L6U8dez",
  "key17": "4dcYAGKtVD83GpqfzCQzJEaRBjfXez37JVCfGii8tCdWTJVXN5yRaBv1HDj3CHP4JaAh2viPZjcTt7rP2nVXNCTm",
  "key18": "5ymv2P5FV9K1HSofMHGKLmojryq4ZKBy7qcgH4a3SS5WrLVPQ2Xd4UFMKEW1gm8V7bQj7UKUpErpkUj3xAe5zz7m",
  "key19": "3xKPy17V7gh4wH7FP5fQ5PRqoEou4B5wqjLtX6sLTJP2fiGoKhtvqLsF3RhLCRVXfdvRYb22Zm4ycKni62pYQUV4",
  "key20": "6VSALhDC1t7gwBTfKWGRBRExEsSeEvkcf4riHb5RfaZ4w9cCMFpuahATgULL5KDbwrJVwaSMNnzEcAjEVEHDp8v",
  "key21": "3G3iMfB4pGLkWEymwsHHrWj7Qn7XhNeyijCrb7y4haCNuGnBapTMWDaLe8C35ir1ZLQEUgHCjrN78c3L7fgsKxHF",
  "key22": "38LbM2JrT3aoWmHWALea8zjiF73ivsKVkeBiDJJHAmn4hrSUpKacvXQFG7DBQwEFAfiJoEjt3J1AqB58G5RaEm2B",
  "key23": "5QnzM4irspQTZhE5UGvNDDA6HaW6pwRV5vuzbJwCxFStZcDb4akV7S2yRujBRdhaf5Hcmxy5AQAVidhfmnE6fN6v",
  "key24": "3L6bibVHrGhzoszQNMHjV3Vw4FUgbLh2frMMsdjHMapcsBmikAM12nhn2vCSBbBBL1WxeitBoexYEKCHWJpKgWJt",
  "key25": "ZG63aquYAXiJDmQCC9HTb64ToWz3cFzBLQ1D8Qn4trr8xHDFWPmYhySrhe2du81p5WayueC86AJSqgrtKwDB66r",
  "key26": "5bYAbeoA4PTZssFrRtkLo1Umcie2z28M9uBf33MG5SEuEj51D6HE25Ch1vXtFAvgkjXpeDQE4wDFQ38CPfeq2Fp9",
  "key27": "2NGNJxDYZKwLwnUY9Z3Lyr2mjjepHymdQXiM8sRiw5bXtNqEM947sBPcwuRrJwAm3RxgJBshno1R3463Xc2t9rdj",
  "key28": "59cnkRGmEW8VNYRjDFxnVN7VeF28Dk5Fg88eu43PD3iXz7rvyyV58nx4WriWaYFzTkhzKdsmJrHzbZ9GA9bNoMTT",
  "key29": "23PgD7kiL13EywFXt9NB8L2Moa9uPYpfPZ8jkiVeQkLaAYxFUWnFTwXB3jwpKcc5bs9XZju47njmWxtpiFBjNLk8",
  "key30": "59TzGWaiheGQj69Vfap8JyB2CTSk4MxC2KQjPjXoacYsoNQSSRguaRh8i83RVT4zUbUsyUaC3TkECdUtfiLRkTrd",
  "key31": "2bSx4hRieGnzFEP94BsqypcevCTKLTaydBBsVrJpe1585T4VnonDHxX91QCe1fiBoS1wsYXa1TnNLRrTG1tZ5GXU",
  "key32": "26ucfRimzW4fkejwUM5sAM66jcNYNmeghwrZThxTK8gVED7CcJuV1BTJSbXq3PxsSV79tuyboUxrsXdvKCf5iC7P",
  "key33": "4jwE1mqfGtnH8DoiLwCKX4z7XeeakYS88xwbfiTSCj8m1wp67D2p5JpSQPkFT171hcN1nVK1H85ot7Wnihqaiy5B",
  "key34": "4KUyD6K9qp1CPimpmLipSCtSZYxF22GmEUq6ghDEDjM4G68EaMgPEndmpjtBZ2DgbUXyi2J2JrTExDGE2FMKk5Lc",
  "key35": "2Fq43mTBekAZ85q4TPWbHCFNZHwg7nUwqdsxMTAzm9WzwugMsHJyH8NFfiDADBUBLVj3M2HkysYhf22e7zp4WbXF",
  "key36": "D9YJ1LdTfnT6CwdssSGcWZw25eToExbg6eiXnkJKnPRbHEzYwQ7fwUHqj7gaXi8Y9xn1cXj1ehoKyzCuniKfvCZ",
  "key37": "3hNmu281EEmKATEcJ2UQa8MwEjDKzVcihULqgskDc7YgoLqKYqdQQodHE7qLG9swxq9azpPJTssPJQuYX2BMhpoc",
  "key38": "478thBzg1RDcEus7QZ7TKGLCxyDTRowfttTEC6atB7gjQSE7iqofFvPQiJRUQLmXJ2U4c6DR9oohgd7RvqTJhqqW",
  "key39": "28v95QhR6TdQXFN4ZeXaku6SBL1MhPy4WZjXRz4gJnuBPNQ8eny5ATJsLo7DVu7ZFNVKWjbUX5Kdnc1hwuq8onNF",
  "key40": "4QeoBLr53UKisajXAfjncwC8KkRzW9kJjAbS86D3PQCAuhHE2g83VgPjz3oZ9kMBqj5GyUypzKCW29MpmFFyFBXE",
  "key41": "5t1ybxh4H8gSjQmuJTEqvYtXicRxHzWiLsQkhrq7qixWCBdozvy3GKjQvYoLAb8N7soUgJDNmv5FhgLwN5AMBfpL"
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
