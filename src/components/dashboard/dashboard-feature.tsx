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
    "4orn9thRf1H6kgEAcADc1RVPY6NPvNVSWC1iiEvUtUqWhdMxbBkyAKMqAs3ZrrJvV2Cr5E63NkUSrLSyKVVvkcbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ffvjdjpKrAEKHFbp1XswLJUWYiFtzQTgn9xDVwgZpibzEKdQb2KYjNeoSxToJryTkLS2SAzoH9qXtJmn4KKgyuK",
  "key1": "4wmAgjGS4SfUusETzHpnW6pTQpPCWGpbCBGa9FVxFH1R4FzvvbtczwvdzFCkDW1CiZbFkfZiMkkeKBceh7p6a9LN",
  "key2": "4qjsUExuvxAnWpkgKjqdsdWuXa86SoxmiNiihNTSRpuKwuvCuEnxZyD1ECLB34gqjiGk7fEXJfmaMETacWMRY7Yx",
  "key3": "HdjbrvKCRjAJcp3LCM17htTJ8RSbN51Vjc4KKy7aCk73XYmCmDszPqWnEHHYF9L3hxYeNM9hsAeSXpA3kTMUos5",
  "key4": "3GBRCwHqjLEJkyTg4gfdFQUf2zLAJCR5pPRTyJri15jrBGmv31j3WiTaHaTXiAssbuzMAVrPsUgBXk5EYpvitfom",
  "key5": "4UEAD1TJZ6YjvrdTWSSFdHMQZwjcujvE4JEPPV6Nj1ZSJeoWmV4pCc9jbL1zVkgNkDJB4qGxJfJ2N6E8KARTLv7o",
  "key6": "3W36aYmiCmTz6m18AM1ms5egTatFd7XqNHEdxJPoaRbwMoefiRNbiHsqhRAnAxpMKW1w51KJBYpdj1GVcP5ZoBdh",
  "key7": "2uS9d3wygBmcKYU1cbCquk9GUoTybUGYmJ9ZxrMQht1nwHhtnjrWY1Fz7igW8eLW549RRs7Bbmin77sypy8XLb3B",
  "key8": "U4ddoyjdBUQNLvZxQWY6XNfd7SLZFAUfaoRHB2XqAyHH6Nu6YdJmqTh1TBsuhKvuJEFv3pyhTyMyeRKwt5Lc6Mg",
  "key9": "2Rs3uJGbJQsRaLxdYQ9N6D8ezdSjTQdpJd3HNBtUSUbguvUR7XYoGGVrz4qBn1snakKdK5bTGb68rR3dVEmqmDdR",
  "key10": "22MpEd4hL7NYaaHNWQ2sT6ibJGGEQyCkwumzXEQxtDRYNQgazVRz3poLU1rTBfhhYGHTnKB2SmoAP9P8bdvzMuMb",
  "key11": "3ob4WmdSxKuat3XqgVMjeAW17nh5hF9VouDUCtSj2ydLntxnWdqRNiqzmsVQqLmh12Lxk9oH9zDnkNyuqM5ggtDY",
  "key12": "3N465z8SkUkscW4KMiDKBds3sYk8n5Dt7GjbG5zEGhoXzURdHswtnTaUTX6Yb9z23ZCoB16zeRPrQfNXCiVZiNDj",
  "key13": "372QSbt25MT5F4pdiebQ7LodxUrNY8xJDp1b8jD2iassJSdEaD7jN5m8wn2voCeCmH2cGGNMwGsZBtVDPcpAfgKj",
  "key14": "48Rtg8XtkKTF46KaYMaZ2FQp2SSWAdYWFGDkRt1tj3iaBXofzkxTEUfaskmsTndiPpJ6nfMKgUS3HXSA35JbKyMx",
  "key15": "531sBpds9zuG4u1tuUgzDCtqaT2kdSZnsrRWrr6KT8QJHekSQBPpwxTERmsM8BfXLu4LpSXUUU5ZXKU2Q4gWvAUy",
  "key16": "5ggB1Wijmxxb6SZC6otAkVuhgxHs4DEDXH7NPhtDF9uNAGYmAJRzanLfZ6Tko5hFbMWmJQtcdZ5FrwZDwGt6z8Zw",
  "key17": "5kv89Wn19h3MUG5wZnBZE3wuFyEAaGLMZXrvRoBfHSWMv4BHB4ykKwC1ndvVqt6xZz21zdAp5PLnqrQjkXSD7w9Y",
  "key18": "4b7FJDr7j3skxNvfCK2d6jyGF5vFVZ97LJ8FpyPTV2PYNKoCvygG3kkarwzWa211Nto9fdPQ9BptCoPwtE3Qqsao",
  "key19": "3TBQ5uuKAC1MJZ7n6uumoqTi4TPSLPJnd8v52PhPhRobTkSrZxzJvNf6VPC4LFeaEnsEwHt9gxvuTvxU1PR891hU",
  "key20": "4sEtU9Q2ru2UEpm6pBrZ258sDBKsTj6MYbPv4eRxDXBPvHJSez8qBd6TXWziMZ8Ys32f2UWCkaNMmsib7E5ih6LP",
  "key21": "2pzj2wZZrjvVx1DeRKAxNkETgimfPge5pkXic5zAaYeh4zNfkwztX6Y3L3JwMWrbSc5EZe65imiHjLdtFfR9T4gK",
  "key22": "5EzHAXwDspSWnsNV7kS59yjPHGriynU84RcbyRf3NrfCvLYRWNQn5SDPKY2gAs3YuRNk7BJ9AnWKyY4ZMFidARuz",
  "key23": "3aTKqSzYwqK8L6ue36KK4BpQS87KmYocbZoi3xGaUdw4xT7zRM2iNpFUSuDkoRkBCs1Wwf1x7n1seq9MgEPTyVdp",
  "key24": "5wE5tCSD8rfV1LmTSmTBVrpsstU1ZtGYWRwKATM6SRkHCTu4xraXVo8ejmie3t5aBk9xBXEaUPNk2aTEY11X1pwM",
  "key25": "52LMAoKg5fcfywnpNxANJv8xcStuoi5bXKGRzqCRK2jCrT6Fo7wMALsGxikwardSSDZMYQdw2C9SF8cDUrxjLkGP",
  "key26": "NovTBmfHRTukdj1meaD8rdqtQ4rSXrHXhd3tKFxpkXyJJpS9VNMf5bQLT6mvAZfQyh5fnkzgRhDHdCk8jJhW4iK",
  "key27": "4PepmenZ1cwxCotrEJdqTbT6ZmWK4xy3pkUMw2CeY56mp7mB2cupJqRvqcevGjZGsEX6RgXJEV4T63khEEHak8Nb",
  "key28": "4ZE1z7MaK8SyJ2NFWbQ1G2BVF3ztfynMm7y22XfUU4AJozhgL7Jukmgs9fiZY72CNfYBKrbHhZTRccyaVBotv95B",
  "key29": "2WLRxDhofkspiz6vifHnPiEneF4TB9ek2JoUuwqR7dPbYoiisTkG42pXJtgXnbzH93dWAK6RmnPrJ2ZxQo292wjc",
  "key30": "sLopDbnkHsbjcGt3EfEMBgbxttHYQLj6m3KpSnK89WvNq59sqyzXfBW1Lp4WFpiAz3Ms27NqvkuSiKxq8PitEwW",
  "key31": "8WbLpY6i3wJ9kWLgW1qkYpHtobFtT9e2dDkwNkM4jnascv7FyjEHjMGpDHf18HxvcD9V6A33t4QbuQkDtQ1FzJy",
  "key32": "4AKeG2L2xNhFSiyWCKMovdcQi1UW6kouYtuAGcBRENU6Dt3Dyov2xV19Bj9nuao2SSJupEiM2k5YdHtUPoRMSmqh",
  "key33": "56BsgdCDpfrhQjbGDco7L2XTGeWjta2YNTCUfPBu5mj7w9dBshYfPrQSfCzRSTD4SRgzCjuaiXVq4nKhHRtXRbfP",
  "key34": "42RjYRGKxnLFXQgBs6RFxC1KTfC2hiXbzdiwmRMxvPLweR9xVTJUPoY7jWhRTNTjGMyBKt9Q4fTQxe1q7EozLiqN"
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
