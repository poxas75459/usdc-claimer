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
    "z7KT2kGdxjN9RcjXTkBQms8JH4F3Hq47vXAhFsMtsKcvGwYCQm2op1x1hoSWZrMKHz4AXudjoCapzBzq89gGBdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PbVQXuhJ3PSFxrnYGMyGKnxpz5YAUVvJzskS5HuZwE9xQN2LqH8xEFVpfBsevqYhPeebhUkBGcBVYix2ETV43C6",
  "key1": "nAENvZLpy8psEnn4icE5KqnpE8PiiksoRHYuvSb4jy26DMWhnoL6b4yC8SurwT2W9NeRUA51XqFXGFkLMkjw84g",
  "key2": "UVRkmsJnGMWnqov6T2eF7QmJ2gRhFvy1KjnJC6j6BmKq7cSunDgfiNkwrrUvcWgjBiXkW3SXYzSHogG44H6i6UU",
  "key3": "5yQowfkpPF4UTH84CBtijtXAfpUHQ9K75khZy6UJcWtRSbXWyNEij9AzgXRyxUT3VF1Cq5qP2VyyBGRmzJu1EgCo",
  "key4": "5sPBD4CPpix71x9CkBJizxbxkaXSwZqi6uR8ki8eiaGSTkH7Mk4MULCYGzL8qbyAqawg96LbE48kHj84yedhrzMd",
  "key5": "ME23beoHfnAQGwqDA88BvGzu85rN3wo7cLwvUaTj8HTix3QmfMiAzN8fAJ7qrYALvbVKCn8LvJ9WkoJxc4B2STg",
  "key6": "2CPMicNVMJ2CiB4mXr6V65iNMrmPnU1oxxtnBsxcZZmYTqbNvMBA5vgUeaMpBnoWMuC4A5p7rf9npLvNQ7pxYWVT",
  "key7": "37gcjBuDnHpuuEateKRvYX9HdwyAzVB5ff3Tc9JSgQvfJR7xkG8fCECmTtr2gNwAv3dEwMNhQuoFxqURsQUgRqKn",
  "key8": "4oK6FsgVgfsuAaGw4W4XMKGMdNcehEDLZ9G4KRz1nanE3dKZuiCfTVmm7bM3rP94zxRepbZhQmbK7rnFCkL5sNXR",
  "key9": "kSdHBjoSH8tx6EhFt66GGo2njtdf6SZc7L1LmUhpBAzqA895u7KjsSt3ypNax5uCvAatZRBYhxU4kzayPikgPiP",
  "key10": "3cFHG8VhQhZxWFNLuMtdB5FA4LBxP2BJpzAzkYBWRD58o7DeC5pP2vwsf7EBEvnfoGSwosp4uisuEGTHsX79Mtyq",
  "key11": "2EkmXDscdu9wgs11xUPFcctzYDiDKGSee23rf2BoxwzRoxpGxkZVSXX11vB5zw1eGc7KiAZyW28u79QdbV935fno",
  "key12": "2XSqPFVMcBMRFLRvDMs5nGaUffvV1BqjQCtEhDzR41VcPhkGeqJrny64cVQ28pd1a3BsuTfiph9rqeo68HPZ8DiQ",
  "key13": "3YvgLWtG27d26GMi91uTLZoVa7KQR1QkVeZXQfKD6RkxWKZdMzwff4qXJcKh6hPjqver3suc3QGTg5PU5ZV7EX93",
  "key14": "5FD7H935hnhra9AfMSJiuhAes38svJ1Kwz93CEcZV2SMPSb8Yn7kiGtAACfAKSd5L6jXkbVNgpcJkBpNTVSN4RY2",
  "key15": "2bwR6iefZQkS717bhdcXUwkGoTm3So2HhecSUGXqXiM7nHMSupDc3VYSAmYAaeq7xEawgGP6Lhhphk2KsPp3aF7D",
  "key16": "pz4pYHK6tgMTRwLdkr5g2x6pPdm7CFJ8yjwCsb6Z1e4y4zLP4XTmkPZkvAt9LHxv56Mndf7awtsbNKAc1m8LgBQ",
  "key17": "5W6K8ThXp6AcKwBzjZesp1Gy6od1SDX3Sg2339CyoqWo5jEpmZ1a1pSV6hoAmvLJWXbiBctDqxecaqDWMic6soM3",
  "key18": "5qBWD8pFvbvB8mj3AwKKWwD3MhyupbXVcZGeZZFErBN5BZpB3KfVZrCfJpEp1S5hvnpea86JFeT6bMp8yV7FZAbq",
  "key19": "5XHGReocbZUDDxSAKG33X8yh8ZpQfhXgPE4BR2uGdmpRW2EgXPeN5EdwLk27L2zSuscbntK5gopzTqPjsCyTXs1B",
  "key20": "4V7QWSF4x1JSt2DHhBWt9yFvZP9TnEmfd4GQRKWZYV6a9ak8qSHwS7wAhwZVaYfBsGDqWsrrE4NSiVsG98F4eVSK",
  "key21": "59HsFEQZwYA7AGLbqq8ivR7Pn7L8YjenJPsDX8Fm6jS355LVP2LqNLRD3t3i1vceFPqMTHVcwYdGqiWqJ2GxGVS3",
  "key22": "2DE9g63YXE4hScmaTj5NBDCGUArbjwpwHkW5d73AuQBW6F2xwVbcGj46ZHMnWb1GfsDZ7LmSDsSv8MA6fQ18ink7",
  "key23": "4rZB6nsKWRGugGRGWbrotfGuAaGjM5XsN6UrsCBMEg5eJ2ey42Yq9dW56rZNJfM96YtePXskYifPCGVfR7H3fVUV",
  "key24": "427XqimTe6gn9DBi9izqa8FXx6vda5QvEqmaLegZ1dmYZAkqpjY5FWvxB2UV2AwkJPUX5taZsyn1waFrWV1CMXF6",
  "key25": "oaEkhCXu96qZLdkqVnhesD95X8fu7EXMBsh8k5JnVcmqwTVK2HYXo48P2KCfxSof1zJfVNnZ55w3Yrh6kk4eVeX",
  "key26": "5F44VdzMhoGbo7UpALiSaqYLvsDcsYFJYnDVSnXWtp1FDjpZ47E1zYYRFLzm7dP3gEwXRadCgDPDmhqhDF3RjVi",
  "key27": "SxnTSGA6BgDmQ7ABUcQ2QMRVYtX9NowKEMBWG5nUvpr8cSESgiopt3XKzknFCCrooHZutUchRPB26w6ZZYHcTFX",
  "key28": "67ijLTG3ho2Ls5sKMmhjHLWDDDAg1N24J4N5DMeeARFHBo4JCQNkm37zrmF6XwYqW71qXjMSvuqggdqoCAFVvC87",
  "key29": "5VAw2tSnfoJTW9CdjXdKMQd1GMzwG5VUHMksGsukuav4Fg4PRfu34jn5w5shizpSuTX36Rsr82F7qzHRkEyeNMkm",
  "key30": "rHUkhzbHsf7hJSnAKc9pZ48yACTr91AjoQYrVTDCNYZHmrmKMCorxBEG8v7FiZdQV7KAiP9BMSMJszWqg1xTmp8",
  "key31": "53RdaRDrwW2kJRdvCvgLT3DPoRTH3jhGGXhwD1meHLTpVGCcR194hEa1GxzVU23Z9ANbvXjWZd8dt7XwMXH5QUBR",
  "key32": "4kgVMtgGzbgkGXdFPVHBjQpRrud9Bdhd9mBecLEgWV8BFrmPxgAgSixshpwjkHiivovkoEJmniXCXXiNtcVizfVU"
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
