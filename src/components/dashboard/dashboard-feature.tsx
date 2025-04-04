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
    "3Az7ehwPWCf2BNzsfSt3CSerLNwcqoDu9WhUAR4DfpKPF9k87arAsbV1nqxF2mXFtqPNPREALNHjy9vLACFCyT1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwoDvBoB1phGowrEM6fLXrCYq2z2GL5ewwi8WmGjDYtkGFFxHFiwSaeciL52K4rdTvmH41ag1EGT8J5rev3ZuRA",
  "key1": "3nCQQj4kdBuYYfAFuypB9rp8LyXNLS1YdfrsJ4Eb9FyfgQ8Mg7tJQ9cc4EySxKgo2xNVZoy8spjb5NNHVSdpVCt9",
  "key2": "4p3sowfNLEVwMkdZBiTms1qR7zXTi4q7eHusjP5sF3NqVeodpP3VVf5YV31CojzekS2Y6hZi3LTXWeMk346v3yUG",
  "key3": "5SaGXR6gBYcuuvaMSMWSvSTMRY3FH8nUXn55X3K7moWBZRHEvVjMXYWDH9TSjiZ6qU8qFXGgTxbzJXAKQ1tEhgZN",
  "key4": "373h4fihQwo9tRrJ8cGpF8ewx5tT5H5BW2v9X1GedMKrids9HLmTPKAJPivNe8B3uv7PCCVDgqG6eiGcaks8VorX",
  "key5": "5qEpywn7W55aASDabrzQK2FxMpngzioBc2oVc2wSbvHKxHebzJ1Fp3r59uQ1KuGDoTFuVGeUdYEmkhyRzzyMmAmd",
  "key6": "25bshFmu2retHnPmABUCNMDKLVxuGeVDgGsW7aLCAeTQjBuXyrfybmFE1DmjEc1AHpYkPapghLsLVNDesVRWQs98",
  "key7": "3paQcejoRR6uJ4hQHEwB9tUArm2KB7orHjPrdRbAysAJ8pvgcQvj7dUWGhp3R9yVs4B8EFkvZ5RppseCx9sFMEvD",
  "key8": "2KFdKYGLHdegWYfASWj4oHDqwRs69MwHqnaRmb4NDK4tB7a2wNYRw6xeJn4aGAKbkq1ccKnxu7cNqna4vdUVvjiQ",
  "key9": "2cvaQevd6Y26Z959qZtVYUQngFeQYoAPqAuDscok6RmdsA7WtQH9P1Cz7jnake6ZGNf6gpSRfsUEByRVZDjw8hi6",
  "key10": "3j1EnKudTCSC6EVCx7RpRgeCRmvrZTFdFub3dHrcqJR7dVq5YnKDzkLgRs8bjP9dTp3yatKDFy67wqj1fnutbY7h",
  "key11": "2edBJUa2aeoPSoxWnmGfSworDGRX2GXphLa8eH9Bmb5tuK2CHiGBKPDMU921FDc5wGQ4qPB5Q8C2MnCxZKmet9jM",
  "key12": "4z758TnZ9wyDHcvr8974k9tDcUZZccMToYdBgAmU6e3gWFPooEChJkwzJjDq11TcqjNMARMBrRSQdkpxBoZMvebn",
  "key13": "yUzBo7Q7hBJgX5HecHBzGRBhg5ZCy6N6sAWWGP2GUpX8KsSmy5dYMTBbFCBmE93h7jR5S7pegdhMfZA72ftN3Jn",
  "key14": "2UdsEwFRJr1k3H4YFdBCWrWmRdZAK4pJA7tNdV5QfyRjnNaxeVGUcBY1mpoSuwCgk7DDLwhKMgYmM4Ebm1Sq3qrb",
  "key15": "2MZr8k3aPRsL7EGxChkBsPxE4hNnpfy2Xm78756iEpuEPH88KnxKb4zN7sxR3Y1vwLTM7Q3pQuVBzoF3FYE6bVHL",
  "key16": "3hVw5avYTTNKbBnFvpCibTsH49Nu6j628TL3c6VnbhRdXexSBwXbqX59c9B8AB198wn4xgmmpoxoPXMFcj4SLEhy",
  "key17": "3RgbZxH4zu4oR4VRHfq38cgmW7b1kCa6nrpNcovK85RYmSEc4YxiZcyrqoVY5tFzBRVSw8E4HdLdEdnfE3gEhzNW",
  "key18": "3t2paU6JPy6Cw7n2vMcf75CSX3YbrR7dh8z84kwhLJEFozP8QUimDNqTgDRX8RntEXJJgbHmCpxGibh1AvefVMfj",
  "key19": "65gx2GygrskU3QnpfcD3RGMnrChN72BM1mNkeBfBfPn1ucSivEj8WV9erbRp3srqQxN1LQEwnFin5gx1CmRekciL",
  "key20": "522F8HyU5xU4Ldh6aLLqZUCTsmWP2Gt3CkBBH1bb1nwumhjY1dtntKgsyCMzrSBxk5GCpgPvqhj2kHuRHTG3hjhR",
  "key21": "5vgviRitKRf1gW7VDmaBB2anoz9tGTEjFs2SZhGAos18BGVeYfiwugmUN1K6LZGt9w9EyT8FUVnRXCTe1W2ynEAp",
  "key22": "5tjq8daFd8AT45jiw2XZEJXnFEtRBeSSGnd53ZJCztyAd3XCtzcXW7nSbL2cPu7etrR63wD7Np2EsJc6vAVySpnc",
  "key23": "2EHBGE9uK4wYnXjvkzXykXMM7oUnsGweeJjYG2GT2Nb1CehvvvJB9az9AwEW9qDaKE7KqJfeU7J5kS1iP6CkCGdZ",
  "key24": "28SoLq7WZyB7cmZukLTrov3CuFWgyCkos2LhTjEKeUWR55osvpwJz88Y7cSJhxaiSBvADFACjA3CrymLuuNEfJku",
  "key25": "4wSxAMZNGfM1LwfozsLSvUSvk93KguNFoZYkeD5GTvAwc6NSggcgwGJcJELwUiraFE9ZgmPzP9Sfd5Ws5PULpBss",
  "key26": "2CBsqpzGT6jGRJcNr7kM3fneXjhh7hFLru1LR67ywYKHHDAWTj5EuM7mrqTiLVvP6ibXJRpCVKspUVHUCoHKYhf6",
  "key27": "5NjSezdBgcgxxtuygVE18YCLmbaqoZrcELEJ3Xyw3dyEjgwkSo16dQAVwKC8spDof8TY2qeS9NH7mKMdr3824pFk",
  "key28": "3hxLhxC2Y4LFU5EE7V7A56c22BxzUveZdWL94DWoUhgBMa6KEoEgCPfQug8FUuJUCCpr4HTSVtYYzgun78XvGVCb",
  "key29": "47NMkh2q6zZk9DKJoo66Vhc8g8NYy4AwYKV2BsMUf8sT2B31BVE3eyKgW5q2RA5kiPDRWEhiTSy73u8UmENrBSft",
  "key30": "2DnEwtGEXpxt6xCuiLcvhDDnq7Rt4oeCmode1iYQLUafsmt3bzW3Ynq41h7uZhqBCUeyJqGJ43kfsvCxnVnCevSn"
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
