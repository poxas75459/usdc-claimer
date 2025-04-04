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
    "4qYMM4cXj7cqkdUdT5vVXhCLqtcdN7CAV97XJvpQmppb68jPCxnjZdpvN3Aqr3gSvSuDaJ35mVYmujTMRWVFNSMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Twsr3shMjxaBQ8D4d8vNuBS3RpsUTRt9sRRbptinP5seHWRe3nqJdPR143c2ACxvM7U2aK5grBayiFCsb5co6P9",
  "key1": "so8y4uoKB2pnj9nCVsJojk1YKSmp7kFNHdJbGR81EqwDADpjmxA8hwhxxeArMi6MLaKU1v8R6taHWuFxDndnKBw",
  "key2": "LwxwjxMtEM6iemNdoRJYaZRLhx6cpUhQiAGifKxZAFwdYjAjiHv2DQrWAa1ZaaRULHMiXLWmjYAdjoRhGx9nzTt",
  "key3": "4KR95Xs6o3DkmYXZT8USnpkd7BGF9JovY3tffYUL6Z4oyhFT8D9LfHKYycLLztKdDr24ZUpVFv5uZ76f1UQgMDYF",
  "key4": "53Z7h4fqnFdzcJuir1g3dE1cMBR6A4QN4qByJ48yq279s1GatTCTKvpWSkqDoNsSKd5C82bpWLFgqtFfQAPys8ya",
  "key5": "3ZWVXt7GBcznc3xupR9mkR4AhPAkXKx9nDZuP21M3FtuZ9ccuNvz3gbf8KfDqARcnKS3XzhRpDznU6Cqb11Lavf6",
  "key6": "5Ddb5PdTX6ok212vNvtwMstX1v24jeAS2zSt98HivHwVkvoZJBNmWAoJZvEPBcfV7ELEmfRkiZSC1qaYVN6YSTVm",
  "key7": "kiJcm14kTjZh1xXVTF2xZm2DAjGSdXohikiwXbWapYrpNr5Na6QLoUcb7Aco3fVfFMGUT2EsLN8LzYHPpr79oEz",
  "key8": "4GrBkEMCQBmDrZXhgLpnf9m52afeadwt7RUb6ndhL63v3wS2TQwM1MVHAk8jjpSWdZEPoczkGCQXVZvR6znriynD",
  "key9": "PyNfBR2YbygmhNXeJ6WqTjB3jCodfTXD6gYidcrWRBZGQ3zWfv57F2z5VaagUSHrqV2xbPetPkRLFGf2SKXQy8d",
  "key10": "4PdvcGZtBwEW45ASmt7ZdkE4uTDvYupaWsnbg9WVVYQw16RDD1m2DNfMgV5PPFqzwCCAMzGxJfjzQj8bjcYWpCvx",
  "key11": "m6LAx5iijVXtUPzGDqNCNmhcmXD6AofpXhH6mWxVVXXZB2mbcdtqc6S3tZMihjprLdE6AVyj7d495dRL6gbPo1k",
  "key12": "51i5YcTzUcSVYpcbUdxXYkEGqW67DgCxYWHcoMwqFDskjJNM1kieCDMyoM5WP22MQvW3JYo5CLhAYSjrvFD6CAih",
  "key13": "5FDbkJEmp67iopM6eUuJ1FGCanXxWp8vup4YxA8M8RvYyhL1GGgVJdDot2ZRG9dCUeU8cXYaLYYdVpUuamToMu71",
  "key14": "24tMQpa5QHBzuUdnFJhvMW6gfbrecghBQSM88e1qi5Ud1JNQLWnVrJ74s21HSdWgcBfbjrFjybxTABQPeDtdPddh",
  "key15": "5G1rPD5Yu9CvVcueMFtEm1aZNBv4gNVJDXYxDyYkcry5nAMGFA1WaoJCD4mb1fwJzSJBLGZn34D19pPWeTuLnTeR",
  "key16": "ssficPEPAWnq2cgC3CoPot6JSho3oc48WzQV72aRjabzDD3zM6BMZVnB4wX4MfNiVaWGzZhMbmqSM81cShvaTjn",
  "key17": "2mSGAtZemrdD7M4nTFYZoVjP9eNDxxc84a9zjaEHWz5VjBEDrEUfzmgk9g9rSsmKTCBFVhQ5GiWdcy7wG9Yg42LT",
  "key18": "5zTbAgEcecZYrN2pBY4X4sxjXKuuYsoTEWV7UFmwhdLnBAy4xyQHDbAVCyYJ94onNE46fHcZM8JPg12nUQkG3KqE",
  "key19": "22sH84KGBBoDrYjB9aev1dCHsRDgBZqWosbTB3thn7gCzgHSC4yYLLJ7g2Cm4dKXE7hgSZtjMYSpFWeidkga2JWY",
  "key20": "4sw936F1Gh5JYGEBbzvP2PvPd3JmAW5AGV9Fes6oZ69ftReQfJPNEA8RSyeRrs3juXghuCxbybHvFchsT9QvHMq",
  "key21": "4jHDPaueJKEstbxd4K3QMtU1BeSM2j2VGuPZkTL9e98tRLd596HcvpRMdbH331dLq6TNGPGr3mZiQdiA2no5f7d7",
  "key22": "VW9yZ53fcGgWooQpD1wQRD2XeWrohHsgAwt5vGiNaoC2TD1c4xzh4QAi5CBwvjToejxHLuwHeBxbeyuwqHUukca",
  "key23": "3b3rvajKRy6qSd2URJU7H4XncFPuGjUbZuztKt38pn9RbX5GE4KdLC7Wq9BEj7VUb58rYNvh4QrVLM13xwgxSNTi",
  "key24": "3hR4Dma8BbLaYHswtqGLu3YP4Xp4vPyvADm2VKLfuaXM79GgwZbgtp5cCtRV3wx5DegmFfcGYbjcpQfcwHXzvSig",
  "key25": "3iRHWW38G7729WQGvY7vSRiKMYGqiVtUX7Kz6VHLWwuaU6NurHQ7DfRBsxFiQzt1AK9ss9YdTeSrL1wzmkjSN1MF",
  "key26": "3UkXBFkaFBP9hysBxd4guP7hwuv9xvDpMv9LzFq4dZ1D8romaqrnt45yBA1FZoXqYfmBnytYduD1GW9tgkxyk7LL",
  "key27": "2YemgzK6WNjzfuaGZVuR7rHCRqyc2T3ETdUHh9dzVzXktLZJ5nz9pUFgPqbMe3QpqmLJqnENj7gDzmx8F8kzLnzE",
  "key28": "UdTe7LFQRXPUCucpaAwrx3ZbwEFxXMD8eJXTQqQA48Hoxuj9eh51pKXhEJX7GVvGmdo7TuMUfc4pVEpV4PiJd2C",
  "key29": "2SKLHST6bTJj8xH8W8dvM6K5AX95WGvvn88WrNy7CtQNJyh74Aaq8t5zcQ63mfGSRRkhdLAY3XHvzbij6jrfcsFM",
  "key30": "2Xd7cgPUSiv21rGHYgwd33Grq3Hhx1WgwUVzf7JfxbYGiYscU9Tf2gegGDG6rjrR7SSNGNMZX3HdnfgemXKaGqzk",
  "key31": "2vmzwuv6xqWhcs1y1g3hpv3CBN6Wt9WST5cXcC49UQu9MFVH3QCEZohqZoMUnmuYbuBB9t3BmxoTpeqA4YQDsJ1u",
  "key32": "3vtYeVjwgsFFLRhPKtNLrMf1SDqfTfksoyTrcZEaPckQ7tDQTyvQWwk7QfLEGgdrV53NqkhXZenQnQgkwCus1rFs",
  "key33": "2F67frMLo8ajMoxUoLiHJnfHpfSUiFMkrrvoRACkuwHHnoXLT4JX3iRAXN7a7sGk84CVNX2YEhcYDZf8HdMVdUwE",
  "key34": "3tN7EJMEZUewVp6T5VVHsYC2XRKGmBCeDZrqAu4RD6YdHCwruR3T3wRmNQ2DCPEgfR7QKBYsoKGrtj9pN76Mei1N",
  "key35": "wiKtEM6xEiSRaUydCod4jp1UED8usQv9PE54HD6WFXcSdZcgc2Y3niSDwNHTNEPyXkgfbfZqQ9EAebWfJ1bJ4Nw",
  "key36": "5oNYMkPanHLbtAw7Liv2RU8vD6jSE8cr2dXyGUXAA3qVCkfCSgUFWopDvXyeYcZHGi9F7ye1WATMVe9WocBA2uNo",
  "key37": "4NNGtNmo63UDyPQRnCuUMkJcPxELUihG4dNiaGTyzBhfPdcRj1pzEYqo57A3RRHga7otVMHsGsBmrEHKfZvvugJ9",
  "key38": "4DizZ7EcxU5d56pqF1eb237iZ6qyoeCCBBN6EZny1vCzdUoFaDXJ9qWAfQmPAq42kdH1oxK1StCozwDFen3YjbC5",
  "key39": "jovTECnSfBr6umG276MZRKB4Ua1pjcnSr2drCxmZGGMex7Uq94YcEqrKMNjfRZnTDvPZGMfYcYAwmsrvdUvYczA"
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
