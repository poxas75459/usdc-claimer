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
    "mkJN7fC6HC3XyLm9SMHS7y4i6D2hFeYTHSzhVF6ShUUQsf4YtQQ4Ap7wPGtf95ZaC7EqmZ1niGKSQXzJK9Ed8wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUAsNY7nDiR6uhxwxKNWuvVERXHwNoJNQwaLSERiFgmqAJsaKvLLABGVbGEYkEU9j2Y5WrM3qusERLVyJbwwcx5",
  "key1": "2kR4hfoo3wf2DAPhGHoMGhP336Mwc9R4bZbjzeX7XsAxFDmtBSRUg5zupyQjSAbv1HyEC3B45uvjrB8TSWg2Y2h1",
  "key2": "4YMX6cCVfrUbdVeSP2FKcQe2v7onFjxFdgWEanWRy6seCezYLXinsPwzRQCr1FcgZo3UMKW3ybmgoiJVT8tAfDxA",
  "key3": "3kafHpKQBxTnpJetyom6Uamp41vRG3Zf4ShrvYyT94GiNYa55MqvQnQ1HRDB1kFsyzsTPnKxCX61UZuEcVP5V9EZ",
  "key4": "WsXno2SU92v2JU4Q7KkPyBn1y7gKcfidZ5tjtRaPqWW33xo6rcrqVNzau1NCFscra7YbcDCyz9sXvhpfSBUFuhA",
  "key5": "2t4XKizrT1gK55fKptSBfpbSmGtN1vw52DmpYndYUtYoeVBs1mEQ8ED7kSeXKpx1Hcio6eGHuEmYtAEmsz7BpEFx",
  "key6": "5c8tRABANLZXcrWS6cViKazv7DrztuiZuaRjxhvbyectXWbgzWhEi6XK77j5eXs2a2jWFzC9Qk8yMj7xuigzaX51",
  "key7": "4Tfr4GxXw712zojQ8mXb9fSSQsPt3yL5zf4SrkQHtMgV2Vu9WT6jcHzvKXoUfGgH98bX4baEWW4kWsDtf85mLSqP",
  "key8": "X2Bmu7zNMwLA1S7NGLxouuiKAajMwbQhG2iToh3a1gniTqFzgAZL1FLSreH1ykKp63KcfVJWVggDsUQGYv4Enf7",
  "key9": "67C9tMZESArnvfL8GYvMchnoLGmsUkjZNZ4s1LAMvMs7EVB452RPqSrngVnuFBT887VeJKsWM1RHoE5FoC1HRm5p",
  "key10": "sm84q61vbxHcBk8ZaMUhaSA53CGo9jaE66tFfRh7PfetVj6few4Z7LaSxBqxAEaksPVmU9NgeBkaPFRZtX7PKhB",
  "key11": "419wEBwZARV7iTfZ3ZNSyC9PmtAcs5uEcnxs6pcspXeWrhdvwyPMdKFEByf9GTgjzU1LWdsEqfNHhAj7a3Vv4Qua",
  "key12": "5wVRJoY6fLdz5BUriGNTGqVYvHiArBddBN8KPUR3hBNkUdkXR1A3TfQrVosBYykK9P1ZNM4pAeziN3jGx3UdrG43",
  "key13": "4RSzMfNXui45ijSYx391bmwxxxGKJT5GuZ49UemEFPkRBjaqk6L5JHaC1nRU6epqRqwMAYgKb5hVchpJe2u4YLHe",
  "key14": "5VPwPCgtAYNH1bxwH7n6wrPoHCCFjLLw7i3APyn3jNdAQV5gK1DppZNfPzRueHgtCdWhKELg5JftbGHHdfAmtrYu",
  "key15": "2J4CjdEarUr8SzfGhZHYGrKmqBhVWZ838ZJPtEcB3RdDMLt8L5HPXLySS3pMnHFwWU9LkaXMB9VTjJ9Z5SVt87DU",
  "key16": "5sj1DFVc1CK5PXJ4CmVHhzrNXDARa4oFnFZeMd7mDARgPWGhkRavSV9YsHPscWUeZHy7deiXy8zDLDgCUZwjDH25",
  "key17": "2iW5VPDDepU5txkBHNGJq1P8RzThZchYLrKRRA8qDZHR2CpGNBaZvD3vUjrQAxAQ3BYzW4YX2cgJfSwhBiEqnzb",
  "key18": "3bdXdGarWgjjm38DsrXkT2dboNT4zL9Z8aymcCUgSSaLGFwtUfZbgDs2TnrPp2v4rWRXuVr2ks6ubuV5oi8Aj6dc",
  "key19": "UQCnnuTTX15JnRxcM7ihXmyxDyscWVbhwNahnncLwx17136QShcEGX5XqHgDBK1sqVM5zaT16qDSWbQEPHpzroM",
  "key20": "3ezip8XrzwEYmPJXXgKUfPy69orFKmx9bR9XJZSFSRdWz8ZhESF4kFac3Ss3E4ji2kr9bLc4CFYJf1ddvK8ntFzg",
  "key21": "2WvnVZ1PDr3tYN2V4kRDsMkdscZjj9QmP1jNJPML8dhdgj8K8P9KQJkkixa8kb9JUAk63HBqfppPi4anby4bRzuJ",
  "key22": "4dp1WL93DidAM1uJjScEGh448w7P3FtV5E69dxHwitDHbTjUBtg7qYtXP3AjUUedFEkazT1Rip11h3S2T1BPCeNN",
  "key23": "2sM5mSxjkRmAFcRqTz47DPsek1hR4NsxKau29P4ogSwNExoh1AZh3UZhogKQttJjQx9ZN9i6oUnPRGpqrTQvCaku",
  "key24": "D9FpBKR4TQpi39dYYNz1gNMhdVeqASUNzDWw4FZ1f369zqzYaEBmLNCej6e9BNVA91cmtVJt8i5PcDRKxoC8S5W",
  "key25": "47FyRcPjZozFRomRJFF1VfQMqEenWixXoqgBRMCSyx64nbmSMHQRKdDP5wTG7xhpbmM6Ct8wPZNePTnn4sooNsAE",
  "key26": "WkbLzsB1WZM573rRHdCnMbgaeEJHiCuHvGj3RD26tXcXoem3byLdKxVm1BZMw5NgWujjcGM1N3wGfs7gpPRpkfq",
  "key27": "5V9LvsafxWWkRyjNEu2789NE58EL1uzmyijZwTGidwsuKC353hQpYstVVZWmPRnmngQmVxEa6124wuVd9kiY7fZn",
  "key28": "5BJYyYPr5jxmzkBxG6iFoDg6uBt7iPRnFH718ZkARKtWXK881MTQN29qzmWW93NotGzxL8yd4ZiwYpdnoJn4upBm"
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
