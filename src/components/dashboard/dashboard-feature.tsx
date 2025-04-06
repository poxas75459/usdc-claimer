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
    "2YrEfnL5dHuaYscXHZ7p5THa8uzBgUaSpjzEfRAqasBfoYf1qk1Z1C9T98hjWrTvLZDSbcmhVMVNNXLb63aeatJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EebiuJwAicwAsQjZzSAPF4XuLg3Ue2QdnotwrhTh1WHXKWMxKHg2ijD2tQELcxC5CeB7WXQwSeG7U7V88QH7LDg",
  "key1": "q77K2ZMfn19wnVjqvVfzC8uskHuXkc51pHnHz4JERUsosefhZ9K1kcaiQoQifN8pq6yUzU18yn529gA88HdTocj",
  "key2": "31x8KQJBoARNt8ye2E67CxUXuqzZfdDzbxZJLi5VtDUHUC1556MsTqfD4c6PzsmY61x4iiSC55rHZ6A4UWh1a8ky",
  "key3": "4KUsK5bmV5SX1RXavguUeFZHXzagUQP9P4WGSdQqiBc7cihf8DQso2RV7sFWVpiSzZunWFrugUEQr3bM7b8KTg26",
  "key4": "HBZnLUGNFoLyJbvHTvfV99rSHhuV4JZRvkxMVhsyhYALppMq8Eh8LZCBEqvuGDxXcAnAQszGe41cY9WBCigRfkE",
  "key5": "65Z23DqwPYLkwCGJqViGBhKu8buGtzLTdYYUd6JYWKv1vuqxeZdabJPs5nBJG7MALQwgDPcWcB6AJdHcYuJ7SGbG",
  "key6": "yMAQPiCEBXJtiy3huKubbsq5KCoxyNeHnvzXQzFRz5w97HpUisqJkAtdjie7bTTZY4qBRbY1DZLcN5SbVET2KQC",
  "key7": "5sWxGN2RYWBJbvmnHSz5CFT3P9ovfVDVxWGdJFxqWbrz6L9kS3qUyjHJhHxBkAyxrwyg3KQYiQgY4sAKEkCUjLU6",
  "key8": "4WMuDi1MFmkcxNpoGoQZcjxzAGxF1QLMvP2U13V1SzRadEVrnXVsUr5QutHpJSD3x2PqQrJvhny4FGEsGkxM1mNx",
  "key9": "22BPzmiz48W3o7HTq7yLbLMhR5mF2go89nokpoS5uoR66A1Yfke165xWrueakAPkvo4AP9SmXBtTUmWS6efLMHye",
  "key10": "4up2RoBuFprZU3AaRQeyHumFxMvbWpBF8Bp59pLDyLKtDrzVambWXm21UmxGytbGYg6CcQcqpnQPYyPkyz1t5cN9",
  "key11": "2EVtD76opBj6T9M3KqexxEH6K3zAqjzLigQwswQphtsXLHddEqTSCk1iHPjBmN9RNPjSCU9sCv4Shd5wgYz3sF8d",
  "key12": "yp953Ae8XxyYCSbVmQQJ6S9cmBj36a9Kk3Gvqhpn1ky45TaEWAEjXhEDoY7DgFmFr6uAxBVrx5MZAj8zEdzSxRW",
  "key13": "3y9iN61fd6u4KXxjPZpdQzfJHDBRHodbkJNacHfxiLZMx6Rde52SbLyiNgKBY12wVVFZjgM4fSKYjKDGqjeZcs9Z",
  "key14": "5UrPV6niMoYsMnSU2oHrWotn8EdoWGiyEnmkiPS1U8FaVi2Q91FX7vApvcYJJ9N2U3L9vMj5kUt3pTKZeF5UACBf",
  "key15": "4ka5iJFRDeseegp5HXfCTEetkUH3XTMSGrw3BUG29gqWoG8xv4aVvF2Nt1xvvUMe8jeQS7zABfNCrHDBbDYGGLrq",
  "key16": "NXrcu6QfFpkd2hmU7ZuxNcg67rLNHE7fb2k6uTGwCQ5UDBSRem9JKuezEidvwf3Tg8oAKaappH4pJCrPHuSwcfU",
  "key17": "53W54cvbvARuQ83hzEFkwtX9dQvyrNqBTHaXTKdPVwoFZVagcxsx3VK7XV8JsJCKUrcLvV3CoKqwQGVzL2WaB1F2",
  "key18": "3KCGNywiMDVJTJ9sJxwtJNdagdoXoAG4DRsbaUWzVgxGbHyN9x9tzZhJ7FoiWStYuEyZry1YmyN24HA17NhAjnH3",
  "key19": "4Vcip4cawpRXUsbzWissbbPD2sQHXL2XBkFWxvFn7gBTZyXVkfHVUUwxYDy5XqCzrVPNTuHs1MPrPoT2hVYz8sCG",
  "key20": "sDTaf6QUyygXYkVsgJ5zMbZfMtTCirkBPffN3rJSJExShTeqnCDQmrMGsyC2QnLcQALEbAagrrzt5caTBjH3JjX",
  "key21": "4Nx3tLQSK6MRGfFKhTNgSiehfPENo8WDwT4d6eDNM84KMFu3jCs2zpz4QtwwFdmfKNHRp98CgHESWoSkLAy3aZgA",
  "key22": "36s75SFYzYmrCthd844RzZGX1n1TFnWtr4qiTWS9e2tyEg7qRTH9J2RwN79KjkLzoFMaYr585ruK1R43Us7twXn5",
  "key23": "2Xxfp7PLWkp7Wq4bw8Y6Qvy7kkP7QwFdZdPea4Zhfs3E2Jac6CeFJLRFuT1abT2dXmmRmHvMUMmqEWkgkPtChxdq",
  "key24": "5x45XELrrDDi1WfzLmZT5ckfiVCiE74wFKhD4CMqzMXKFftvYXm7nn6z7jiXdqeQNzmwV6A4YMvRsnTNvXLa9y2F",
  "key25": "2VAytyzfDkELjwa4gQrqSRsMZWei2YBu5HxFsE9DFYt34yYou1b4xYdKcGpTsaKfAKoEDUSKHUhHeU1kFrxgNMnd",
  "key26": "CVnjc5YrhrbZ7QKsRGM3ujC1guKUAzMR2BUP3D6WB8PwyjKiutyzbmtPuHTJgtoFCnLHssXGTkoqiAKxvvdE9aE",
  "key27": "665N4edt4aXMqzA9fRPDyBbuAyJP5Ep8vqqp7zA48zmmEZ45ozVwRu1SxyoE8bU3KpXBnLGtMhp1V3RnCHnyNuWG",
  "key28": "4kTbjtLwJyLwgKiJggg86Rgizki78UNhsMhrcXbedivXDHh5uJx7F5MGEfynsrMTyGXMEPd36isbzbx2FFwN5Kd",
  "key29": "Y2JnbUaYpnXVHjhKEbjXTiwuUJN8i7jWCB3rod6d5U7cokH3gE6jzkg69NEr9YLoTpFe1nz5H5LSA6iLu51VGUA",
  "key30": "41UokoAfxdLdZxBG5MxgcvDoveb7JqMCsjXiMQ3iRD6pgruLhv6RdvmT5tKTffHUojrwjP2CkuPvW11J6g5Ec6QU",
  "key31": "2ciAfDScRbwEhsYmotojPUmc5RexEyczMwwhEbaaiw6UfF3BSzF52RmPAJHBkqjnhLLtRgRAS3QKnnYYFwvgUCpd",
  "key32": "5GjHf8w2jXr5ArBuex8GuYsALxoH7s9vbTDC6rvkiJsBDUknXHNPaa6pDjp1TZnWcBwJqok2xNpWbiA2MzGFWAh5",
  "key33": "2oBdgeZwDvUms8eA4rd4AwvwAJMGw5Rv9h1FacMVZLPBYUXMk5btzdxbK8Xx2HXF468GCHRd3UqFGc41mehsXdHt",
  "key34": "5dYwr8iZ2vniaTyZiApxsX4ZiUjtfYgWHzR4jSMrvqXqfZY2BLakZF7oVqBcCgct8dfQLC1nPdiN7X3g1By55npq",
  "key35": "ZwViTEwLhaDKH3fxeBeL8eqgB2QUAwdVMPWxhZdaGx4LBFDxdMKYSJSjkWY91sLrufm7mKzAQaC4uqt3S7LKFAP",
  "key36": "3LDKHJqtwnYVg4e16J3i3tNqCE3hBoR2YDctfuW5b7xDZHNksnM7KVKmhnhSupsyB8Pre8BxpJYQWTPCdEe8gLTa",
  "key37": "376amfxTf9jy8JkoUT8tU5bLfrqUZrN7VEqP8qopRbTwgLuFsQxiVDJc32pVFV3MLweiXqgZHLzn4U42PpFVsu8d",
  "key38": "3MQ7eQpXYcxH7xjfsEZMwyPHuLHYpKZ3AY3rAtS2R6bnkJYWq7xNz1BeF4ki92aVc1Yv4SmNX8vDMtonaN1ixHLa",
  "key39": "57dpyfagSxSqBBdD8S2URm76TaQouxn7qnEJfVzCeWB49RnuvMs9dvpTE14X3rM59kpJqovmXeH4kAFgqk5XxvnC",
  "key40": "3BsgnL6jNCqPAsbNWSrHBVPHSB8Xmkvk6i8CHJ1bMnGsfJAvaqJwSw6RLc9ut4o156DwxfBRzavGNU9fbHAMND33",
  "key41": "46rgt7DfN9wuihz2kEAzTg4rcET5Hiuiwntjg12huX7bkfeaVbXC7tixfvXWhBR125kkWs7jTPK36uctad7QJuGB",
  "key42": "2wGQUhQ3yakDpZCNuWjCQvTTpXhsobG1FvnErekWjUD8afwNw1s8W2JZqxwPTT9gSvXEDXMP49eAovEQmGTAi5Y1",
  "key43": "xWmiNKux6pdSed6e7o164FKy4Tjc256qFtzBdnEVJ6mNRoNMfqxxQM5epEjk4hsnsyFAL13Zk932XtR4GSLBDgj",
  "key44": "DSR2Q1Hr6PMj4e2wqH1tP352hkmjtPamSiBH7RSpVgYhSLfPUeNGQtDpyCyVpLuL2u24qtnCGiPJURnjpxLy1vd",
  "key45": "3aqDEhf8UjUUaaKPLzQuTEnrMEd1hxV9jw1v2kmwByY6cFGAFX9tnKceZQ9omhbGkm8G4jBZgTVK2m84WbhAnojJ",
  "key46": "4x9iSFRijx1kfA581cejN9Geza6spCoCbQq7maqE42RUvFtKRTrHmzH6fPqYT7nz3VFigCYpinwWCoehyp6E7cv2"
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
