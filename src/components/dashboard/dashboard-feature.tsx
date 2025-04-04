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
    "2JToeBujJboEGASZCxA2nzrHieZRv9HuYw4LxZnrTdTM6YcBetWszhtsBM5xDEBPmtKCT9T2Zvks8FKxqCZuUBjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4q8XhkGkoGW4p8LJAbcm6Q6EUcxCC8hiC86hfFeDJ8VXxFwejB7FkgMgoWJHfiWuuEtmwFEZBx11MxfnzLVJ6o",
  "key1": "5DNPPN1jPk5WSfLvcmt4nvt5N288bDp9qVG8UaJX5UkSna9At5Jw3iYqZAPKCFA7mNMfNngQDkCyqTnHDr4gPEYL",
  "key2": "5HDibDiJcAMFEP3cFBhks2c3S7KewTNksT3CmXwjHgs8vMRz2fofUW9VwaFkXjccHuKehgY9QqvQ8vYkJJMXWQWh",
  "key3": "QKkzuBjM6VjvbQDCjHCi4DAhRwMJpDp6wfZ6eFJnkA3ju1VBAhprJXWuDPBR4kj5F5LE2wx5qQFtjbLep7z2upY",
  "key4": "KnmGT7ATRtGyMnKhfWHVGWd98NMFkmsGfYqw2T3ztVeJ3FVbxxbrZvfC17sbJUjvUPu5PnZBJXGvJX9e8ndZG2Q",
  "key5": "2zxW9YGunsP6YDa4HvtNDM9rrrCvkqrFVCfai49Rb19Qo2RLDu92emWjswdjg8aJRyyHmiYmSyeAUxsbN7asPd9j",
  "key6": "5GArHyxLrB9sRYjHBrKyRTzheUixuGEC8MZKL9qUefKohSZxpTafmfNGaRQkxizPzyXhg1hMvqAU5EHY4CRhGfkF",
  "key7": "4MJY6sA8CEp8fbfAji4GkwL5zY3LEXaj7FRM29nq1TEnLAMjKZPfTT1pYg71mRSmytJk6iJBhBYr9o74WwHWX9gS",
  "key8": "E9x5MQwvRMByEbNmyCqmaam2mkD1T6LuJ7ozWKF3teffLQwp46fMro5uo2sUrhFETiuRXVUpMbEVggP7iQnM2W4",
  "key9": "LeFHRbEVTenrcic9VXMEhDtU6HDDGuPXXj612MkJkdygyatWBvqD2HiZcyxMWdxipEta6VFRgKypd5gmCTMgu8e",
  "key10": "37WuivchvNWJET61zDcLNvQ5ZEB75NoHaG6pJ7eySJgiarsUQftMyi1PaWnWhTivXZ6Yuvwk5kR2d45CKypL4qLR",
  "key11": "3n3NkzKYFLJ4vpC6Q9bpGMfjRJAwYbhRCwrBNiqAJbETCRidijFx6QihJbmcWL6Y9b3s38k71Y94nmc3taxwZwso",
  "key12": "RKfLBbkSK2ci1CnZ4VGVJm35y58Mn2yQxKeBoZAG4pVKkwozoHm6L775pci99poCPqtJigXpKrsbrqLUZ6osWQQ",
  "key13": "4HHDhuPqEvT27LDvuzxGivj46QRrhCB2B8N8XpTBdw6bsrb1nmwyymEsCTYCf3DpHihcwhDS9nx3HGPTENAeG4hp",
  "key14": "4ikSJS2MKVsxfnebwT5zdTRLtVZYsbJ7X3Tt2casTr7smKTRsPeXb4QNKEsjpv1JNiGJ8vGT8Xa2CsEaJFmUDrQA",
  "key15": "3XWnRYsv2qgojSPCZTUAP1GTKaE42mUgXFPZGTAr9wfkAE8uYeksPDLpzXVwkXwbMVmiFDCP9zULKfejvuoxmCac",
  "key16": "3HoVF5xoctyQWi1trzbBFkV46Qw23SnRNB6dPqWBNiKywDRpqhvgYDttgCVG6SnPxEWinfbEpH5GtjmZrRUxUjS8",
  "key17": "ULZpSESFsj6QwibbByxGGroCJHSGruBppTN5JgXUbWchqVdGuMVsQfcunN1P4PqzXnz1FPWQbrGvS9fN3XnbN84",
  "key18": "2P7w7iTxFaUrVoWfGxZNuznBjyQnTj2o3JcgGuMV3Z5rHG2yPBmmRK4QhPWb59yjNfQRsCVemCVAKHvdLwpPNmTp",
  "key19": "XdGsaNHfbjwiToSeY98NRrGMZemPSnS1UosPEaUrcqpBMJCv6U8XNUgfyMXYHNcKd2JaCxsYww1DmT1pN8PYkMy",
  "key20": "5LEWB1mmzwW4Sz7NQe4MYgUqDbaE6JjmkhepEarC6WrJYx3TzGubYWWj8Vr79VUNzcsXue5q58acyXLnFSrRdXZ7",
  "key21": "3N7jXpy2PCPPJANKKbVChSXnfzGv2Ma3kY5AEbRzquyCcdb88HFcyEM5ikvsHy9fC1DQbjJXbRE5zQubuKGs9uDh",
  "key22": "5gtYD71iU8V45BegUkuNoKiEbJxXk4EXuraYCuHdi5DCDUxKEnVBTQbmpXJVztjPqqf27vFXi6DCEH3BwVvgkyaS",
  "key23": "4dKq37waVFFW8pmhP2DdPmi2HgqxpwRAj14WJMbmyfVzN51xDsnyyFvDpegT7TPPf4prrqQH4xgGFzmnEs7V5VQX",
  "key24": "3uoEMP2SYEAnSeZxiqod2nXrHqFCrmTWrB9vNRPddHnkUowU6g1oUY8Az3TFhHqfHUGGoNwDR99MTNwzrwAjrjoo",
  "key25": "5BUs6WYfmr6rbRDxC16g2y3W2FMEfujcUZ1TQvLUVbt4hu4UKJbZ1oKRa94Vj4CnDjzDjM4fFghA71BrADB4Fnmu",
  "key26": "41psnkjXuv98THqbmkWqN6wstRgvjhQokmJHCJY1uV7SApFZH24dq65fvCCnnXUgzBC6hwK4T2Gq43YAQWgFAKdz",
  "key27": "21foSQCcrcQvvC64upzBC1pqz9kqoKpcgWggumPGsFjqF24jprwyTbZwggkasPmbape5QDNrNbAh2RsabKXBCuBj",
  "key28": "2xzZG2x4DJx84pF1epzMPfkw1JFBn2VEkVw829LokhbHqqJCgAG1q5hGxpgiFL7GoBBezhyMqbVmQqjKi9FPBdCT",
  "key29": "3N5o3MoVb8RiM4wvN3GDUB86AF9nMZxm6mnUMqDD98xRqvD3gZJx7iP8bi86cLZjk5gngteFsUeL4jDyP8kikdbz",
  "key30": "32J8wU97kRe66cdBFQCjRrV9xWETNU62ZHCv87BvviUmYJSDD9kqu9k3gEcVw4kbpmja7S8UZhDSdpLvf7E9zAPP",
  "key31": "FUH6CRwopriXv6FBFWo72K2wK1YHoYYTpqeUajSdSqKHLexFcx3q1kNzeNdfpzLYwhcDFQqiz8ySRGYCtdQRrWy",
  "key32": "4caH7w4EhZawNAvDHQGWzXsSzAThKC3nkerfaKWMbiPqXb6KAmQMqF3Ck6RSP1SasYDWsa1CMZRUxq5Xec9tuWg",
  "key33": "5Yi5W4rUKkJ78gmjgANmRnLQGomXggJEx7x3EmfQcfXY1jCdBffWFVFjbWbBvWLVsrWB2mzho2RgWBUVVREFKGxy",
  "key34": "4ckiU1zg3Cwrvx9e5LKqZEbbWiZbP3xTLGiSJT47DQaRTTygfnNQ8yon4Xt33LBHAaDny6dCCxwFBA3xRNu3wtee",
  "key35": "doF1N4P6Vur6LnDstLczB36ecoGCDGo8yPtHw2nfdcoEX1KzP7uCHfQCh3L3L1KZZi9gSKYrpf27Qhx9U3ydEXw",
  "key36": "2tjrzNVHZfEKFDsPm52VumPozAJCrv2fuN1eFqYZN8KvyTfQAsRs7tiyp1Csme3RyRBe6tr2NhBVnZY351L6xyqu",
  "key37": "5rjZyj4SkksQEDVB51FQaUz8xyoHW5r3FNAgoc5D7kjnxySiSUeHn92XcYdqgWcq6J4Y8JvFcjdaEwDSbPK7j9AU",
  "key38": "3J9zpXvpPwi7f2c2JCCiEc3Vaw7RgnbhxCsq2PfGYpxQUn5AdWTiQ5H27ecHyRAXMUr8fPAF9MmBkPz2nLyQKW7b",
  "key39": "3YyJfR8P1SggPgfMHjh6yoKafBJ8BR6FBetNTtjfE4MtRTYjXEnNyNcEj7sWRQkkUst33S7cSSKzGqheWgC6uQ6B",
  "key40": "5iJ28X47qNPD2VneRdisVSeukcPwHDG7swJQ1o75i19UofGrSNfhZ1Xt4g6vj9564C1bztddmUE4rRN4WU9QGEW5",
  "key41": "5sesdNA6jYYASCq9wMhzP2oXczB7crEX3WkYhMFGG57nzishoaWTQE1si4KQ1JzN3RGFLea8xfAcQA1gSvnXhAPY"
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
