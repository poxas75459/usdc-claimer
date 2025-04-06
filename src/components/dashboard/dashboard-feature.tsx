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
    "26VKuYKnGbSrKNFw1JtHEYvJ6QS9sD5NvwVDRoGr82qNCQMioFefhVFXtbeqGa5TYkoDyzLCbdedssDx1C97Z5m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5if5Y9RpsVucDUHJWcqryJRQ3XrYyHfZ8HAvuKVbD89g2MHizrJPB9FtVYDy8qiLA1zLpL2NRvFJNGhJmVYcuYU2",
  "key1": "2BMv2qcNJNc3b51cNRqqRCMcbCXrBHfdJAmpcqMubRAVCNsng7p3ZJLVfh5eDKDqmzWGzZcgvmU64GY9pwFWP8wL",
  "key2": "4S42Sskmj7oyEerAZjPc45vwZSR5YkP166t7HgPZCE2Wsaipa2zBSMfbE1zJUrHQmgJxs6GGBNQfn8GioRF4LLv6",
  "key3": "5HZkLUrwNmV4SokD5FSLy4h7nZhYsfLV2ANB1ms8kjpMXzTdABRMpDmf9aBeWb4S11RLwmHqws7Wei2SZjYVXort",
  "key4": "Hzuyfm3QB7pT7Rmi9ZBrRjynnrR26bFWmpwJcGsjeon5g6oxh7rMbTuT4MUDWCEbhgECPHQRaLs9MRXJNU5C8cP",
  "key5": "2yuuxCbxHkMSQzcLyb16VFoVRbQP4PXoV5nA3m82fnkcswF6thfM51ffpsiT9nWz3J5nZR3f8FgcMRdz3s8yb6J1",
  "key6": "47kZf2D3FfoBzrpYc2ypEBZPVuR84zmcF6M519w3uPJxmvXS6tSf7qSQaFd1kegfnM1BNtozgvYHKchBg8tHkB9J",
  "key7": "45Djhu1fezeFjYwdtxv1gHW9qp8WMGGym9BF8u6e5ktji6iFczp82YmLuSF3jneJRyBSLvGW8XEmE6reo7Cfk1RZ",
  "key8": "3q41B9HYbitKKFcGiE7uws35XMBALJQ23jhnT5fJebTWgZ4zjMf5eVSbgRpV9Dx47JvXstDwgaFDAAb2jAESoe6c",
  "key9": "39adbVKd9FNQ2pd49NH3NFvBGowZGmoaCnJoPicSCXsQYs7H6ppyv9SWzoe7vApz3F4Xs32n4hyZn8uiX2HG2nHA",
  "key10": "4fPgxM5Vkj3eQWkpDV1EaegEhxxZALWFEQnR4f5qcs97UhN3Wp2ZvubgbofYcazkPLv6WrgRB837y3jkDAzmy11D",
  "key11": "3mGHUwnwPYN692Gkx5zK65yFPBPpeMZSRVLVXwWBgqpcwTgEpzeNp9q5EaMMHsPLR36K2A1ueyWYXpFGnYEDfCY1",
  "key12": "4tR9Gp7DTwNwcwHNRCCbGE53B7knfF8spCxrQ12qheWrPGDBJq9fX2fRC1vKHg4DCVSjVzWbbDqBWs7cGi5UREEJ",
  "key13": "33ubkcdP8RUpGrXsy1aCWBGa5tnqV8CzYrBm1W36iiy2cZwuhXTnm3fxuQiVHpGZAKSVKCmfYpn7gsG1r3Fom4Am",
  "key14": "5K9uvSK9jdBoXq95VeJxQP55y6cTMguuAV3qZ5gsYeff1vQQLKprtWafXYGGWbTrQQqySMEorfeGcBQig5mZGmY5",
  "key15": "35F2Wp9BowM8GbrHz93RAZm22iGN1Sydoom8Nq3yE7cwfn26jzmo5ktVSovPmEnzsHwiJ67yjaSPMV2QmiJeQkkG",
  "key16": "i6jfcnY8q3SVxGk7E2su5L9yDoCK6T8WySUybqJCQzeTjiGKbd3VznMW7HSzr8nNQoVvPjgf19T6De5msHSjYoz",
  "key17": "4vYmvxiJjsWyxPuSAvToFBHZKa3bGGxwwrpfju1EpP5v6oS81mJpxEKCw9gCYEVt4GEb9r4v3DT8bTig8i82JgSG",
  "key18": "4ACuUgiAehfs21Q5ErqtZWp8VTcy3LRANkDSdZ4S4dnJAwQMAuw8wPvQgwP6iX9qKT1v7LhxHB7xJ3yZtwBxEKQR",
  "key19": "5mE9JkzJoTKsqZdNaGZNCKVBF4E9XHzmfvEZjoUPmMU2rNFziycEu6wB9xm6ZVuTQMrr6kcPPohnsKeGGWZDHKvZ",
  "key20": "3GKQwGQgDvJBSrwrjtQL2RYg5H8zdZ5QCAQZ386QtbA6BNYxKVeLAFUm1NdHpY3wQp1SSEopAULyVYhQaFDr4Gf4",
  "key21": "3AiGc71M3VoYWqcf47kWRLf4EKxEZ2wfoxUwoyRKLy1z2CRmFTYnnHS5wJiZc1F3qy5fyEqEfLCaSFchE7wD9Uf3",
  "key22": "3GiaK9gtdVQTesZKMC5tBnE7aPC5tAekXPpaQpKg8jbzSHZt4MNnfjvGkaj9TLFL2fMvDjtCMpAyk4BGsAXQszup",
  "key23": "5FHSZaWjxipw3vVhaKp9xZ5JXrorXqDc6dp5gNsukDz4Mo6mfuCFiM8CZcCG197br186DBrFXEHcNdfTQDtvsDGX",
  "key24": "4eeSzSi1NatiB1HT4xSrBG6fNPHE55WFKmnZDqJ2oRm7fnHij676Zu7WUJkr53m2mweqSzLJ9qD8bHkzmeyYyFxL",
  "key25": "2hnJBY8K5craUBTvXmRmA92BmLkBuRkfgbUHndysqAx4WiUj4Fq65v9LxkPMKzLUR6Nq7RDxgaCuY7DbPYCMpi6V",
  "key26": "4sM1PdFQCmtn9os2jyRAmttrt6MBM2Au6FoyKgh4rBATQFvX1rMvjixbvhnnHNU4iPukti5cy9bs5tGiV7HMDzfS",
  "key27": "24wapyVdzp6ggCJsbTmamKfS2zywrPpDxWmPhSfGuAPUhPasS8pMpxarx6r1MBZ19imw9ByXEyLfvz6yCzmmJesR",
  "key28": "4G39T5cZwAXo7THo4GUuML8oUny7gMCAGnXNgHenHjXwftX4xpYUkg5vXK1eggVZrebH8XG9nUGEUhEe7eTLodZ2",
  "key29": "hCkqwCaKFM2Ro3DZZZtw48SioKUugPdUNAqBj3EZFqHJfK8yMuJs5YUgceqk35T421LzvCFciXLwbshFSgVmu7o",
  "key30": "5odfmD4zYGEFrvTh2rFWuteDWoQnC73xKMa9hKF19MLzNBBSdhw57t6NAtXLgC6KY6UPQPgHT6jLcDphELNy764v",
  "key31": "2nvpNxivdnsJSF5aRvzRYCkuMYGw7RGWk6ExbY27wM4MB1bBcQoVNQfHhpYuCQWnd3ib3oZ2JuW2C2tX1iFKBsxn",
  "key32": "5spYg3c3EJ7oNMcoDp2DiNmpSViwqB9sHYzRk3q6ivoKVBx1Q9DRgv2md1JNWnSnFrSbBNcdmnY4FmMVGjRRHYpS",
  "key33": "26hHGMxuHwzCEXZifxWn9h1hXj7hskHrF95zR3bUQDpjr275J82WCpJtwCx7NVri61Y83aQN52GvZVeM1ZkN2Rka",
  "key34": "4XSWWbnRrML79UPfd5veF4vxmUeJ5R4yvvkuTSSUAnnYvL28rMaVtD9zMeKMZvdBuUss1Q3idNGtGoNm7CArXcH7",
  "key35": "2kkt1PnhZzCEfCubdSpcZNcqPFAJDXuxqwRw9ygtyi17EUmfX7sFcWW87FY3zgK1Y1PpNLaKozxeHYWQFonNXe9T",
  "key36": "CowsFBYCNaXtCa5JaoHvWf6NgmBaKT2seuT3wLfPQmxepepJj3Sc3FtzqLGH5T3wQiSyYHBRDyTNresrBQ2cxpP",
  "key37": "2Y4b2xNE6rQofeYzHW8hUd4Yjkzpf92Ksy4qeaKH8zf3Ekm5NyQBKrMj6pgbiakLJx6xoaz71xhSp88ZQerTuSnt",
  "key38": "4oScjAg4efHw244MpYtX23pwonWe56FSoCvvRPKprzkUHxC7ysVDwWi7CHSCubANdmjWAraVCJfjDMfYqcvX4XfF",
  "key39": "3sBspfw76Ewhz9SsrcLFjf4UL353vrVqmCuekig14NTRG9yKaJCvecdYZ7pF1cJGn59aszu2aC7xrLLj9CtxVPrx",
  "key40": "41eZU3wycnCgfY5fUX4JxWc6egxfsx9nk5275pfyGogZXodCtrnHQAabVecSJqYbYsasP1d4PwfUiJ4jrsMhZU1F",
  "key41": "2FSJ2dHMpke3WFegkcnrjdRQdqZn9W5CsJsjUbqxXpMW8iFwdZLjmxJXiktDn1vCY2FKgPSUNHEEy6H7KpHLJ4kX",
  "key42": "5gR2aWc5e7etNAyWTwe48iuV42Cn3znDEMJCPwpv51aPx4d4igEgeHVfikZiRCDotKTQJrtKRujmxtHjBYD6dxUF",
  "key43": "x8ibsNxGNAXuN1NUBApBwmqCdGc8ekeyP8aunsNihLejRq2abJ8RfDGCwUd1uJvBkKLjpuweFdqbDdULdrGT5Dz",
  "key44": "4vxsraTZqWQaUhzGjQKgV78Qf1nA4cABBvqANn85x9ViyBg4zh4YinfsyaQc9upr5GoD14fLMobfePgAXpVfRKo2",
  "key45": "382LrA8SyKYv1M2HEbBipAScjuu2JHvBTqAGRkrnXMpQ6E29WTtYKiRe6niHWaAsqLBENL7f2oqpAR6BSo5gTtwu"
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
