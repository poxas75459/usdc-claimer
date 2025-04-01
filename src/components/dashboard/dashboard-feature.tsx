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
    "2BAUVvHAKrUehUABTRPFz1jHvgGvN49wFEAJdWdw2nHGCKnYprAx5FGVm194bM7zBtjbcspTjA5SCLpgUUbKcjzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWWNrWmvowyyc7pSuyBCmbXg1vLGTY6jnWxtNUmBGcyQVzJwd9g2zGm5syCwtDW8PKAaHGPQZx4HbipiGrLW1g2",
  "key1": "5dCbGWT3ssqWHrS1Ma7jrnXij2wsb3jEDe22Tqr5yG27C7CgYcVzmHc9YDfQJ2jHxAKEb6rNAYoUujeYW7cdBJBv",
  "key2": "5GnRsRNdXDTv2Ztpp2JcyDZHZncdT6eUp2C5aHrM18gHX4jWoH3VjtU28L2XJ7WPFnpGs1pEZMD5HcSPSK9NLXfx",
  "key3": "37N8po6BfdqtJ4VbQNEmadcZCJdD38P4zN24PpPMFHkmgQNyR6LfxTcNaWNWFeUuZPcv8GVYY71C3AEEAoDgkncM",
  "key4": "4tECJJREReXvmMA1dwPVb2qJ4d5VfRfcyA8vA2hdLsu98KnW1jJnnJxBTs8HvKBb1SAqYFfYPdCiRiaNaFVooNyB",
  "key5": "28irq9ueAfntmm1s9H83L8s4WjtqpJdkwajWYkiahsaAfpKmePGAxBiJM8jTJxoL31BWZL3b3ff7PXZ4fQ3p5KmP",
  "key6": "4XZS5qzJ6uZn6ibzyTsMZjpKvTXLnApSaLvC9bQyuCbC2RhVJdV7JGA6Df8uuk3Q2kXmzgToqXSrX2rjnLQLC17F",
  "key7": "4WMxCpWqdVB284E81CJKnFduJZ5AQk4fZcYycGHrWBY4ZENdi8AiomkLpbwbedVFC7j7KPPn2pWSAQfpGKLG2DNN",
  "key8": "5mNAixKHDUC6HhBGBs6dUJgHvXjgruM638g88ArtC1CB7D6rsQDPZsLmruN5nNfndiBYQUHnUrdJYkXoGtE9vY46",
  "key9": "3CE7iF1K9Zreh82kteAWiz4Gpyn4ytchBTx1s3ENs9PKRmX5H3Dos6Wv4kp8nXarJY69X8jKjYspjHgXHrFsZ8Ch",
  "key10": "2Zg2saRCcDxhVeVXHraigQLzRkDEJmpE65MxMmmNBCefarQmaQwkB5xkmd3FmVws611YSWhaJPBNNHvd7N6Nez1B",
  "key11": "48LfVbLAqFjTcFhpuNt15z4G2U7cPwqfEs7mGo8iCBNSxZ8VVzJwi9HcBqPeHVGNXxgH3EqEDT4ZnAjevCEChVbQ",
  "key12": "3HSzLaNczrfZL4SJaR5SJZPa9gKWLXLugashNnVmWoGRDRUcyTRs5FFywHuSL17oMuZtyRCrjfoNswgrTWh9axLp",
  "key13": "4cyhYvpxGCk5d2DxL7gTY37HuN1m84KdmyeiLVuYFRbjYMDRbbbgepCFPwdtVwiq7Gd8HEsSf1D4wruPyTfRUyNW",
  "key14": "WatB5Sf8CcqHcBjyrSrF9Ujh3xohRB23MngPWq8wuPAyZ1wwRC2RGXb8xuz4mmHXiBxH81yYwBL562EjLgipZNj",
  "key15": "4bvnYX1MQWzTLVz4ToWo9mJB8RvQPFUAifA2JzL4cJhjRhz3KS6qcckyEmsKZR5FgacAXfsnMjvbMBmwhGdqjZwc",
  "key16": "LHGSND2wqWc3v7b7V4bToyDRWbsGAqYPodvoh2bmbr8ia4ZAKGFjDDH4Uhpauvohe4VwSJsAiaXRP4HCdSJqzWX",
  "key17": "67rErRg5R9Cs5suifX2iUbNGkQ7hiiQovKfbKyiAFJLrXg1TumRCjDJFR2e3DapKecGmJhEoMFobLNma3KjLBF63",
  "key18": "37YZFvVbzUnUCsABXMT6MuegaCGTcaCP46144aNxhW6nC8wi9vT8frLVAfMNxb1bGKtzM83jCyEWuaFysWoNLUan",
  "key19": "4Cye4qjnhJ3CSPbCjeAag1bdDx9Enhg6N73dvYoTQkXfGvzeSSGk9VWXYEHkE9gDoX5kpw1N4TSRyWb7usV9N5UN",
  "key20": "41pHAY5WgmcEXFyybUCzRqCuvsZ7ZS5MvXGNXMSF2jW5sNHFaqHC5TLeM7xM7TQtHwArhNJDRvuNhAN7GMAWViwm",
  "key21": "258TE8VsDamS547ZtZGin2eHHobx6RfNi4F78jYygWmQQe9VLUNkVCvXUGK4bYbDpd8LwNHjjroZNDpnDtjPsXrN",
  "key22": "5RhqAPgLFVgDgim29onLob2NhKW84Xdvk1TNM1L4ETaBoJVkv4DUJghF8vCYQKmcn7QLWjoXj6bwqLEDh2BwsSh9",
  "key23": "3Uds5ic6Rrpvk9nM1XCy9AJcCd7bR6hMYQtedMDQweViVdL738iVsW2HtGo6e5HjmMdas8Ke6AWxvJX4S1uPe8Ff",
  "key24": "4bq8B1KhyG4JAciSsWXKJn2aPfTFF11SBQQgjCZHLUs32xR8z6sK8wYjVWb7x3Z19TBPz95NEbE6JcCP6k33J2s1",
  "key25": "39TvPtP9WLp8CvJx2Me3aAmHRv4Nu5xCs6woUdGQYW7mntHCpTp5ajrfV4EyTuKLT7DzX3TvmsXLp7RUVdast5zS",
  "key26": "47Do54hASU65KsiPVZoh26Tpofm1iLSsYHGhHZrZUVhUwLPGQyQFmScp3DCY2CCaG8RidvJoKYoQ8HDX1TXi7Xk",
  "key27": "3E8vV8SRZEkcHzaWKBBhjk7cLJUuV73xA1sep5tuLVCwRgYjPZRAfhShZtAAi941tusKtnKArB8tXyyV2eAd78yr",
  "key28": "2jn6CyhHzpUQLRM6G6vMGDtuUJ54zJvXL5eb3WgGQVievA3NYtJ6ppkW3udj3FDxui9ZoxmYMCC9gV6x1AqwJy1t",
  "key29": "3xjccRURcA4YjfgHWHKESS8C6T6zEMUZHG2QwKt2ZpyHtQaZwRjoiT3am9BcunsFDdvLTavNFWqGyQVZpASTV8MP",
  "key30": "5p5o1b36nKg39CBkC1V4QeLG5aQAaDvReDCXa1mbjYWHPBuK28ADJPHDDRGdENKiUuLr66dTFHMFGfreVhRdcgpT"
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
