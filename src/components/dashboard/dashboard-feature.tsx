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
    "5VDr3V2NXpZ6sunvCAETVnQiUMt9kdjVEagLEFajU7V1r9wk4svVc8w3nEmYCFdQDyE7cDqVY3Utd2CCeAuzjcES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFzjAh3w2UCNz3uftQQ3pudBVACvSMu1F6bHAHpzS9LgyzGxGpbpepdhYgaXdTMeaMzae3pWUVfDBkYYyaPGMFn",
  "key1": "4HXMK1xAB54kHgqrzWQxhshHh91hRsoVJLvaXgxQkcBKNYD3aj6PVD6k4JYmJdpuq6RgM4ZK4T6LixwBmrs8cLZy",
  "key2": "5BCgRkB2p1SwMPq3jNLtuV4FfkdM8JF2KkHYKfn4aZuFvysG8TKF4HrcUTxpM2NPTVLBWkpd1ht6NGDttUvrL8qo",
  "key3": "5mry4PAqP6NYr8AM9JRoddF3V9WhunGNzKNb9m345nkPLuzrKxppadfcWzzhXadfne64njvj6nHH88foiRoGCHiJ",
  "key4": "64XpEigHJpPciN9tUMoCaa98ktejE3kuvDaXejsAoXD5S2JBP1YSmSK2DZ2CXMkf5UahUWXjAHPxKFVQEiSgf1Fu",
  "key5": "4kohQgs1vNFCQiKck4HwQQ56KkynE5orGpbqMovjKuvupHHmMuAie56PGgfTdTUMZPMEJFooogeqMeeL7Uwt7G9r",
  "key6": "3jA1MFaWFANDCjA86GWBkE1bqAEHvGsfQ11BXp8gymQ9KZKH7FjaR63obL9hrd9xyPQp5QUcxsQMxNwkhtXiqmUC",
  "key7": "5sWjJAt19EBmgcDfp9xyy6hUAx9CA9EZZDA9q143MgXpA46FuWwbahkC4rhZWRUGcu7N2ahyuojkEyX37mn1EWxx",
  "key8": "4AyYiENvx7FmqppMBbsKLX13FiNJSfmuCzdA2g9ePbDXJY9XgGK9Y5XiMqu7PSKTjtRuXVe557pMs2aoYkTdSwV9",
  "key9": "3Q8HnZ4ph9p534ABHZhb46Sq98emuVANGtipk8KrF1Pwi9wfZVucFn8Pz1UkdLd6buM8ztyat1Ai1L1seFjYLxCG",
  "key10": "2vuLGux9jHDLHT9aqSQxUba99VfYaVecVZgsGr9YL6nq11JF1ycrFyNGMKqNzriT4yuhwZEAtrABzsChon9CydrB",
  "key11": "5m78SdwxecbHToEubduCgqgqvWzW1218imA9kzDNaD9azj7RG2aEzvPEikyiAnPgHtbeositctbwPcqMoSMDyngF",
  "key12": "4A1YwTDDbiwEyziQisHjSWdYWtGpaSDh3mffb6GqdhUuaDDbbFpXoxvsHWtGCDsTE2FBY6Z1pnf9MetgFCaDxAfY",
  "key13": "5R1VKJF43guSfu1i9k4vXBodD8LGr6P8enm7ppdFUNJ6NFkHxkVHQ62LKvTc9C49yk779gdmRemKz5gLmbW65Ubx",
  "key14": "45DPaG2VVb7CUKEtKN5M6qVZWinRiNBxShvoKxShZVxEmrrLuZU4EF2Fhg2GW8zesghX5ZK1xvoMCmq91kYKYH4K",
  "key15": "2CXyFNbUzt3KHjeC3VQeij8eKdEBj8EV5n59yKHRo4HPR84MzZS7snnyUw1rqUS1peoKru6Y7DbqZaSMCpB83X2j",
  "key16": "2dCrKTX8mKyHV7LY7NFtobcudRFGnZD58g4yxZ5nSnMBC8xPoHZtEgvP1j2zA5bzLkBBPsn6Xh7tsG1PrWVFJvcc",
  "key17": "5gSuRZvokaiVtGDRxBcpoSvs1UfACx4JZoErAcTyQ6yndT7FC2CQZSfT1XtbkxVkmd324LqvFhTGLQevQ15HdxPB",
  "key18": "3UjRLbZPg1sLerqn4TXx5mMF8wM6RitxUpSyN5sTnpuAeybfj4eCnh8kYfBcpRybSUua9oo5zkXAwaadFnq3BarF",
  "key19": "2Y1arS9GKwU5TRbNbJa8i9y4U4nyPyVqgKB6TvWB3qt3rWLpX2BwaTbyHRuykZZnieaXFRh4xJBsryFPtjrbX1Hn",
  "key20": "5FycfVmH65KhwewrnkXr85uhizAPxpNvWS2VmuvDPnKHGVRR7rQKDgzgduG42CPw51TUMHgAzikH67sq6dH5bAmk",
  "key21": "27v24JasUDq5d7fHmRv7dnQCN6w6zAAiL54sruJWjtHjxCncdLsvmHXvcFLTYKNuwqVEfxzNhdJFWJrkHFaRCtib",
  "key22": "3Fr9YoD1zw1STYA5SxHFYfuhM4X3E4mZuvcSoMRseeSsiCdoQiXUQE31UHa2MD4SCsv7ZRq4LKxUAqGRRfeQkZK1",
  "key23": "4tNWyEyMFyUwEQr9daYfuS6D81Vqg73bX9sQ3y7HLcLcoMC1SUtgkuX3eyd7MpfRBZKzXutywhk7ooTkTVKpM7kb",
  "key24": "59sicyq544yFdKcQkKnpjYmzady1Z7axUWTADKEpUt1tHU4suYBYbfrVkLUrkgKWt8zetFbPHAUmf7kFPERu1yFV",
  "key25": "4i4AjUfZfVXazUggoH3m451CVe5NcHipYhj8sNdCzNwsaYN6Bk815pMthsxj4zf87d2fRWfggB8rwunytk8N2t81",
  "key26": "4dxsDjL8hASNsF17ir4wQu7epXdxMXCEtmYJqkrudrhg6ZofeqebiTdaMhPN9LahjR7NApVaHYGpWx1XSn7Wkk4i",
  "key27": "2qjqfXpqVTaagWp6wGQmKfCZbuTj1JtAdegAX5z7w93AmCbBZMM8aLTd7GFQ4ifp3pJYUQXWj1Zqoi42fEmVon9a",
  "key28": "3nawmeNVD8my8gGsEv7H8s6coENaJSJKMRG5uRH23rYf9ioKnbnVDcMKekBAvJqfJEPL7LQWGWavn4NV9hEeXT7m",
  "key29": "2VqwRdC5JbncQ6qYwFY84AUqvSiCLFzuB3jxpXhorcgrMfbLHWwneEv1x1Lxe4M8CX7rk4pkUYaQMcowzq5MNhow",
  "key30": "67i7YHoxg7mGXaKGyPvZUxj7dFvKViFVRmKfmmfLGEkTF5nghWpD2x3sXHrNHQebbSuBQgZ316r5u4zD5PvoH8LA",
  "key31": "4NBnpiwjaayrpKYByVrFeV6qeYqCJH9ndrPRsBuxUd4yPhKEX27goaxosLGM3Fr4WkxZr85JyRYMPMCnhb2n6Kux",
  "key32": "5GUKkHtSWuhEeEXZPCzKpACMurGpQQMrTpiNmqFqHnymKXTABEFQBXyYPk85pYUMMjp66NpM2GFSGThYS6qURzSM",
  "key33": "65Wuzy2b2c9v5QDjda1tA6qm5DNfDzaSBhk7jwtSM7zs2obysLSAo62RgFS44q84Y8Tr46FDqb7fLGQ3NhFSMpgK",
  "key34": "3KmKLJfW7zAJaHEeCrq6oG1z8ibuWZ4hvjMbVsacxLYTxEDxkZ4ZED2xNQAvB8umCTZzWFNkMUNUuBzSa1R8dwzQ",
  "key35": "3i44UGiu21c4YMaC1PJSAoBsKWFwsXmzWdwvhHSwR2kFLibv2PVBEKMTrqRu7eZxPFm4DSuymQvz3Xd6n9ZFXwEa",
  "key36": "4hX6GseeMMe3aj7tESeCbdX74f2VjEYihdPrwbFG9AM1MpXycArQ4N4NEjWxtVZFMiZfg7XcKtRcLGZ2bbFrjcvN",
  "key37": "3vGe9XURbLmP52LEt3evqSJ1i5GZKUanKxEWPgVKPUpDrK4qx6tWR2qT78UPP4z7KCsZavaBcpGycTSZYYHTBXoN"
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
