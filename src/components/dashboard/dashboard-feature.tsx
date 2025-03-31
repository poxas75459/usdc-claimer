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
    "2LbTQhoWZY9j9xYcBGP62zzhZwreU3YPA6qeCdZ5XMUq36oBnjvX3v4sFFQmRFUQyMNFcayYe3oVa7hdSmkM6U6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VM53VkcwvKTkU8Z8sHtDhBAV4QKW9XMY1R2gDkZ2zj8nfaXthXusUrBmR8sEybmkwxvh8GZH3gAc5eY1eE1zvNR",
  "key1": "3afGWFqRxhHZcf9cwCqqsWbKeH6J8fHqKJULSUjMtECbd69muUGnhCJ1XP5L6kGcaQcgeTrEo3pfveETBNtsF27p",
  "key2": "3faDFMtUrVdBFSLFKdnrtubKECsD85kSx7jsMo9DmJszAfuZeibCgSWdb64JiJ4WtDp2ztXSsSvVUbSDdfSrE8Qy",
  "key3": "MYV9pXyDeRLmxV7PXdMhuN6v3SL6658YAwrheDuCXxD7knoaW9WLXPWZ5vHdkT9vmBYHLWLSggZkvPVEKGZuvxv",
  "key4": "e7ZggbPoGQHKcUeWysHmQLnY76Gdgg6m1xcKqkQ7ERnfy1nx8UgHewCzezxMtyY78ZxAU3Cs2vPbRcNwvSqVYUb",
  "key5": "3iB2qWNstT1BXWBt7UrKYJNXZNiUDVyhJeGFgrJDPTqURE6r9GVvJ71MQTXoddJi8SYRfXw4X2Z6e9ntDifc1REC",
  "key6": "2rMGaV9XiEFYiVDgsYMhqdUJJ2y737gKHDFnzcXp3RQnz1Ed3769NdNCdqyE4zWYTLdkPEqdu1DuXwjvRWRFG1G8",
  "key7": "3XierXGQPkqfcUF8CKkc71AcjkVrMqb4rPGDCXs18ztnBYJkgz5ffU5P1wxgG5WpZyemcSAkJkxV98eHhUfcByfg",
  "key8": "25aAByjUcbg9S2RMt5Ze9g25Bc8V8YYvZFZvsXxyZ2wWJp6jztUcHa1DL32NCmHYdbhcHnpp3auhpDusJYGgu9iy",
  "key9": "QAiaydh3j5E631ymAczneFyiGKLC22u3UTdHsBXczzLNkNwWTQvnJyz9D6cyLUY6JRadnTdd9sZvEcHFu663MNT",
  "key10": "51RSsDgz3WsvbcPZ5PSHXLxk8URgrKH4VsPeUJimP7JQsWEWKQMGTYZ3BEdY6kcmaDQnphSJ6fntE4Q5ppdEKQCx",
  "key11": "YWWABMLdoKLL55xLD2kBHd5YLZixpVBRsGJbfUWPEvvdhhqHSP1mZm8aadCeS2g7DExNGTNdCsgj6ujZAnzXSP1",
  "key12": "2z8dtChj2Q86Ux5FjXr1bo5GB8kZRPVpiHHL6tHsZ9SBMkhH3XMC6KpSFJa7Cs4NQLYHkNmyDKqmi1G9ti9JPXQ3",
  "key13": "4RJTf7SgyrBvtXyhuP2VYsAYYbRR7Jih8Ec3VPwGTLU1JJTkGq2gpqnQyxE2VctHFdM1Y7kWjeQypfK6SdVJXf4n",
  "key14": "2epiytcnsP48MoPWitmazrteXEQqqSvpmw8nPxrKww77QyDPYKPFvkRyMuV8TbkeePEezycLzFF1KbBtyRb3P9Ua",
  "key15": "2PgEKGLFr8CKk4mQpxwtA8FTaDsRDFXjo9g5BLVb8cU4ABVm3KxqhZhpuxT9WR7GrfineG5osiiMYSJykLBADQUa",
  "key16": "3QjqXr6LzpZthg2nNMYoULadrYjWghDWmAqhLgMcmuxaDz38JskMc1jz4Yn9qy7Q7F1KVUv396pKvA3QFr3KRjuf",
  "key17": "21R2qPNfX7ykwMdkTGShpsrcRwapkrCh691w3oMyvYvQ99PYJykd5ywWkBPRCTpPjfaGqeameQ9t32Jmu9osqfPv",
  "key18": "unFB6qgiwi4J7JYAtiuf4uYeGJASP7sPFnwxmKJNPVJhLMYjY1R23x2yv3WUtGXo9QuoEUaJ8i9DE4C7anCGuVA",
  "key19": "2Y1g7rrxxP7fgPeZjpmVQR4MyA6HuFWcmk9ix92JhvazLWC98eVdHPMZerT52yeyPt1ziN1CgRMKj3KZTBLorrsL",
  "key20": "3zn18tPvebGoRR1PyybEbgThBXwV7FN8XY72cxGWTPbWGSvpUXCGW2eunGfbF8i18DKBxowo67k71j3CX19QB2NV",
  "key21": "46LFyKrTbSGot9uxvRS6QcG5gv3o3d4JMvZSctVWxzFZ7nLMgeij2oaiwowKUbttjhpH7ixsNrFPQRyJr6tSFjuN",
  "key22": "2hY3DUjzhF9fMRvwdFH2YjWQeZjPuAvvHLrWc6BTioHEaiYp9xEegUz9jc4nja48tiwn8X8PsNV8YL5VGMHDkVDH",
  "key23": "42E9kvd68wToU5TE2NSU811hWpCSbJKWQqq1xBEF2S7jj7vqLeunduowc58Ba5RS4B6T81zQTvt2uNtfcEsFe5ef",
  "key24": "5RvPQJVYtTtgfTSZGco9VCsH2X8GLDDPrJJfWKJtwJp3dTqQnVSkU6QJyMBQNMCDhbSDkY5zBwBX5epxTErfspDA",
  "key25": "3zJd3dwPdWc5TTWqxcxqaVMECUNChYr4JZUnDV1GgeobeN6rG7eZcB7BcUQPDke6UhePFUutkTDk3nGkfH28YZoJ",
  "key26": "3uWNnrdTZZ2nY3pWuxsv71jHiT1ZebR6j1AGx97AZzLhnAJur6Vxvfry1Ee9vWAbDzQsdHhtdPg9RksszmS53RaN",
  "key27": "2RU1Y7TSEU9VaUbzdWHS79xSV9KAL64XPHTn7rJY7A1WFFJG3DV2FbcJMnFcVMJjQXgC6nkgGFKt7RcBA2Qz4x1a",
  "key28": "5aHqVb2kktdvMHokmfaMjBXKG76HfpfNtBLrtWv54GwCqZgbSXPqxhYoU31NaWLw52SPViZGH2LLzUGCDjLrneaM",
  "key29": "4iQyyJdQdtx51QjUn5iawQxd8FnmB97VqYMgP8mikCHKXigqg4kztWuhggEHYB38fpgRTD2kKBEHvN7X6tFqGuXU",
  "key30": "58iSDC2i5a7jEhjCg12Me2VX4igUxSbF7VKpJGRA4wpqCJ3gHVTSUqPmn7VVFUNDmfsQ7PnaEyAsqCCvhRv6RtSH",
  "key31": "5NvjwMtr7T3mFm4M8wLCXgdgQHi3aLM9wHp1npWCy6uhd9QoQYPWMqEXx8MgJELTiDn2JfAN5YD6fFMAZZFF7ZVt",
  "key32": "4YqJJWKVMD3GjMLLrQmGiVrSbe6Y5EVgN4CtegJyNqPofbZwjwHPyCtR2xJCNqjNBP1Kkh2MDAH3VtUu8Pvk3Q5",
  "key33": "2emm68GRc8PF7QtYsyavBabbSykLPgCLeCCm9HpfokRseVgD2kCsAUJEQy74hUD96skWQQ87X9UQpjmBMiDpWnrE",
  "key34": "5CoKq7Crm5DsCiS5fXpM4oiiknb83kdcVaCwfcHGmfwb1VdwAUucAFjNyspNxD6HBiYTEHTrjXw11FkBKgFjoFuU",
  "key35": "5SpDVTjZ53uAMmm5fhK8LCuv1a783CoM4uYqfTaeBYdCd4582QyxUKsswwZLLsfF79GJkDKPw1rxt2BggA5QsPLH",
  "key36": "5kWNWSKppj2AGM9GzzehHeC9XskryyTgriC8orksyWU987WkcnDTxmbZprkpP8y3rqCUXXbvdcHxkMKocixpiAtS",
  "key37": "2fxoa4AkNHyzbNvk1Mck6wKfEnVko8whF1ZUKof2GwN1GHCCnVKB7rEDmmovMeC7up4M6GSEE7HvGaqeQ9bNUKEe",
  "key38": "5D83acC3C5ADscJDa4ntUmfJg2NeE9Nisy2CHq84RJFf2oBoNCJfaspjaWmwevnDuWodT7vsg7kBvyEAqUh3VF8d",
  "key39": "3ji4VaeHg11UvFp1jPwUovJe979uvHpPAxdQ2PJC5BNNvBJUSysQF56DTWSAPd1ppy6hAo1kmemUqDLfTyVrgct7",
  "key40": "5LKnzMrfEs5sZGGqdMBnauH2FB7BRnMvTHUfFeCjXdgxcV27TSetBnDC3QPg9cT9f6ZnYM9z54yvauidPE2FKfLz",
  "key41": "5RfHpdC5YXfQ4BCAEZpPBNkVGLe2H9Bz3ATntoR9hDXZsd47Xbsje7wZUQD7jgV5tvGY3kSKwn34chWiDRpp6rky"
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
