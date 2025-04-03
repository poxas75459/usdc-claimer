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
    "4oCfbGBouEZkTT9DmJoGuSAnoWxR8s3R9QzFZKeqZi6QJbcWxXqcaj8Q8W7wj3WJv1yiptiLEtVxtrndAtVULKFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTpWugtDmXt1xqpHd2yCw9T2HbQhwtKV7xQixDjNNsYPK1kq1wiGzbGGU9y2vNx6cAT4naLKzF3aACrpHTGuo2u",
  "key1": "29WRtkgHAYaayeVJabUVUEnv69cCny77za4x8CmAmRv4U7dm37m6dZWCuuDFxgabkFbQ6wBSuAs2nCZKHyLYKbgW",
  "key2": "4yidxzWRPWpotZ2nqU2VCs2UH6v4o8dj5Fv5DTrDzQCyBHuFo755QTfjQaMkQPf4KV2wbK9xFyqDnoDLvddHhAhC",
  "key3": "3RAogJbfTBVCjZQa8oebuC5e7oipHNfpHgjBjMc3iCbbye91pDQGRFGAsuVvjX9njpYuf1X4w31HnE1tUiUHSw6L",
  "key4": "4zTdM8bBR9fWumKmLipqyMPXYWx5itFKopDv1wbyzg7dBnsgEfyog6ttjb2UFz98Stx94etchZf7BYqU5PFMFGEF",
  "key5": "5ndrQuaGy9Jw9HxBBGzLyjrxvWawaixdwQZijd1ptind85rZv55cpkqYcNhbVnCRv6Wt3nNpHGbcnkFNtXK1qB6j",
  "key6": "2r1yrbg6ZqkfjCi14rf7y9HD4w1P7e2LSQ43GVB3Nxjng969QWXqcayKUoVWN7GP8QAXs3vuGF4BabhcdV6RmKiG",
  "key7": "35YHyeXpy6BKJY69XhAokdUHNw2ZDT5A88n6Va7XUoVHtsj2xCYNWatA1wNfwMuBS6wyGP5eP4Xp57KZg97JHmxf",
  "key8": "4VCXUrx72sqQ3ALEhCnuS3uKNE4eV97nFEqQ781HpobJQKGRKkA9Cjh6ikZBFU6PgLG1eY4qsmeVmbN7mWzmde77",
  "key9": "2qEFggCfhed2Vuz5FxXpi2cVmgNLEPBpUfh4FsGUY6y6cCuTaBxKfaPavjzSvzwSPxXJjEDrjqWyrVeY1UHNqub",
  "key10": "4SVhPEu4Bs4hsABFp4WLf5c795LmpFwGr1esieUSo5gNicdm3MUZWV6qvAzxbhMQ3B8NWFeZjFT96EcgSYBR6tqt",
  "key11": "5FTZ2rPs4X5epueoo1z2LKU2BmJWWHPAVkVQtNzooKRkxkFbgX5R8mgvcZqEHo1cQdMdo3oc9kkMq12qkyhqsEWP",
  "key12": "4PEBVbGRHWPYZmYqvhij4iXAZJBuTtwP8Rix6dDwoFrBUFWq861GezUJDqCAeHZFkacbN9MHUWQFCverWraSp9VQ",
  "key13": "M8mL8dSuuVjKwh37cXnNxak663FTHXMmmdPNXxY4d7o9M2Vi1bdaSdNZVmEZFWgeyGYan7JXsk3NzFdAfaHKWbY",
  "key14": "2iTeXPxMCYvbSczvcnxvXQ31BfK2LmyXfZEnpfLpkvHp8LoE4a3Kn4MGXu5WNh4syr42ZZ8UmziZ1GXPRr3VQ6N6",
  "key15": "2isMFZnUqzS4f4WeoQASHF2kmQP7zibXJrSBLuvMaoSpGo9h6guUaUsNhnHzGFaGXgsshD3p3T8ZjZqUYf38BmE9",
  "key16": "dR4Fe6YvpeQn5Jdc1XpPCHMuFfWw2YWLjbzCrKhFPDYcFs217Mu3yum6TzDCogzVvQ6D3KrAKAPAoPT8t3vjwd9",
  "key17": "4Lod2G6mRmCGeXCsj9xKmX1QYxnsgonREkveKMWBo4ALqPRDLiBk3VE1pzzdzeXih5b1nJjj4yKDvvfHzEpC1F34",
  "key18": "GRbztGLNcDwqRZGTD4mu3fpLKeScVPfhHxi4REVG4vdp85oSEpSCaccxbaRUnBvdeauTXnMesDNY94fWe48hHHU",
  "key19": "2pdfswWiHhJTgMd2YPLZA3CCUgifw8acp3RNDJbyuRNynZLmhFBwtubrmBfxh6ED3gyNBcbcgBVg7uWS4NtvPaiw",
  "key20": "bW4ZYirgU2Ca78Xcjsdq7J7JDvsDxYNHLgdxs9Jp5iCKkPWRPKvjFjDm8ttamjdMwegEST4jbhdUMbwMztsvhuT",
  "key21": "3vGiRbJwpxzdTpUcXtyT44JuEYUDTFViHqijrPtcmumEQC4qRk9fVsFpGudR1ihXTPUnvTX3h5aexJR3CESMcD5T",
  "key22": "3GYyd5dXwQ2JJuptm8SpWuBAAbLXqJPJf2kkmFnJdGYgpmnGQd5R8dRDT4z58YtWPz53vQMjNdh84sgZfijRiYuM",
  "key23": "V5idWAmMeGQYPh9WvKtnUQiFZ2HHDaiwkxq2ons8QJfMWnPkPT49GXDYgdQKUwDfrkDTnLu2Q8iHwBe2ovc1a2K",
  "key24": "3ZBcthDnS6Z8nYsKeJ3aBDva2mQDAB6teUXmvnmpekKcjf5WsGYvJA9j915fwrr6Le1Kn3jzghg9gAzh5P2vBT9p",
  "key25": "5A7FPfppvkmCLyLAZDmyFr9LRKo1KMYd9VMMwENLXUxghGUM9mMfH6Jc7b6gfiMRtyZ5VN3MSB8LQiKQdHJR62rE",
  "key26": "3yPND7ih51DP27hYFsZdsWuGqG7q8er8jxzu1XfRKR51UEYuzu4LzYp7J6YUpFhHWaaM79MVhzzjTkLv71ZsBs6u",
  "key27": "T3ePD57sGQ1pEnk3kf8UcFU5Pzv4APL8WyAgkWNMcZtCQYRvQ1HuZjKC67s5Ayfyk8wTgSy3Bj4T12bnwDiZYTg",
  "key28": "3xyF8p9sANyy7QrSA3W9dd5CT2yj79yNcvNngmegAwiSrWveZXaGDnafhuUC2uf3doi6a5rX6V4ra13DrVsp7uK"
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
