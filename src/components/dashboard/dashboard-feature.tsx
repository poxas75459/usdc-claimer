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
    "2U2YFYhR9XT7KWPECHVuCjm6jyEQV8FSwodKMdNcrHrnGNfbirRCRbAxVWCcDqWjcmXud5htYDJYWRMfEYXwfeFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xrrfaqioWsmSC8unznZ7PP2u8QepanA5FLKkdSTjLwXtfzx59bNtake7aMvdEUgLgyfyEsafxgzXTjtUg7wFiVi",
  "key1": "5PAGwDuiECTcGYaznH2b1vdkic1JGRHDezJVGbXBfYMKssQN2yN87RRNo8Y1o31Gpt8Yh52mnzh1owtNZSk4YRCg",
  "key2": "4RnXxGmCP3cAnvrVL72dsfmVXnCveunoWgVNghuitutFSsabKY4JsGhp1otiAYMPo7cpzDPokhpGwFQhrErRCwY9",
  "key3": "43WcEzFV5iRt8qvFrsgDWcM5nkcCVK5XnuM5Z5cE7DfATkjT4NYtu14tkDtxoMxog3DHn71YkMqB4ZZCYhhso7is",
  "key4": "3pjGoZ8KsjrP6kBKguvzEH7XRkZoGzw1beQvL9RaBVEKF6JNJxyxKiR444rGqz2aBZ8vWCM36QkG67fUePa1fMD4",
  "key5": "7GAG88PcqubDCrVKhyNaqYDZyqomukWjBp8YYzW6gWekciFQi9kidGzTYiSwz7R2qm4Py1kUkABia48k2WnqWA1",
  "key6": "55tEX1yeuwimjNTgFvW2f9mCFo1B5HsG3231yQ4GuzAPRsXmN6JqnrdTAcw1euWUYNRTBMdscvP5xdjMKzUPRqJ7",
  "key7": "5PexSXjpNwpapgoo9FMnqf4D8Jv2SbcNjQqhxnmWBi58GBXu14XAbxnafits4NbR1shN84nK9rVHKFY745m87DK",
  "key8": "4gRXa4M4NitB99szn3ip4YBAo8mbfLnQ7tqgYjGp4HXv9Qz6CADZeN4hax2TPaNHFoJNhDJN7n3y7UiUjMEyDyoJ",
  "key9": "4iHi8r5RqbMZXRHKb6LqKL4x9duz8QdBjTj6VN6KNFvEfb5AHrVdc5aj9L1r6KfWKVqEDauK2KH8wesiBQD8ZY5C",
  "key10": "3DYpemwitoiizUCKrtH7fFdCq22iL5awbg8JVkP19tthj7RBN977L4CCtpJVPGN6tFkJGd75kSanthsYRtiPTxMt",
  "key11": "4jcBJiHsam8i4SdYLfJ11urzFwvxsK4Xo1QEiWPgiQoLsNHx5dLVqP87zE1w9DHSE3HSzzHCBNyGE1kNp5cBDHMT",
  "key12": "66JnrnZ86v6HjVYoVpFxtKnMykKEsBN3aU6UQcyBU6VTL4nrQwjr1gAGaSSaL9ejbbPuR6X8ZGKMNw6XfuYGL8YK",
  "key13": "5x9WroQxmbZYTJe4EjSSymRCfdaQdfCkE9a8CngJwjRFHd1edxgEnWXcGdozhKmhirqJ1yTe67hQVALmZukzEyf4",
  "key14": "h8frwW5vkpAeueoFzu4X4FFvTqt4jGMDHBEZqpGq7SiGK4Am9GE95KZ8ETzAVENJPf1y6toUcxDaKGUa5AC5Uk4",
  "key15": "2EvHpXFdXTVkNK1mzuNBNy7cPAz5xN1iHXgX3C71Z6XyA3Y66eDrsyHvL3TH5Ti4w9LGmTTA9RNYLwLQYJdRyEDu",
  "key16": "3nR1U2QXsH3iebezLRrRDm3beuQYivu9ra2MRDGrU9MM5txDqxJ6cMTNaxDodCQcUdgj2r55rXJmcqcQhqnbYHaM",
  "key17": "5Zh9NBDNCgkdGHR7ACeSKuU4hXhdCHtaZ1CLU5KeV5uwHToq5ouWhUDbxkPS4UvScjAurzizrF6kvP7dkrAwkTHB",
  "key18": "2REx2f17ogUoDFABhqRLTdPTN84U6uANNqCR4i9H1ryrQGRLUCnha2apw13yhz62LoP1PqM3ifDieKAGP8h5vr39",
  "key19": "3p71evQPNdz9YQ8jT5b7Ao1Qdc1F6xXnsWfdsXjevZKg3ucYaVVRzjiStJrxMH3W1vyhkwnnuyyF78x9osqNqr4x",
  "key20": "5b6ejfiCeAhd7MVk9KrK4zBSLSU5shPE1vi4qbnjatb598DWmdyhzK72Fkv24TY9oghxHaTSRbog1Q5U2tU8p2ee",
  "key21": "64UPuHWVqASSRtekhtgba7YymsB9PkPJK3SBpxQD8nptSSQSdzaAij6mWXEag8TBjGDFYF7LWQsDFCyateLi6i5e",
  "key22": "2Pp9vxsk4n7AXC3BbMEhREJrLQ2UFwHM4e1GFnAvm2EhDRmpxLAiSQXQRr7nUZFjjK3CU4VXUVqudefZLeDx3MJJ",
  "key23": "2RfVBWkMh5TfJjdwGvrHnGtsH8ZPA7RSwr8d87TAumQLTjxcJUmk63SzSk3n1GWEBJRt8hj5RbWUNV1KPz5wtGGR",
  "key24": "3LywpsP4JGh9QVtXeKTXy2wLHuqsKdDFDprHyW6FpVWs23vuqsRHAxoMgPw4NGHMkJJuKdTgxNzN12LVcKPdwZGa",
  "key25": "3DoNCxkqJazhE7QFw5BhotnWvF6VYe7zpNQeahKpPWv9NTXPg5X7eiBWfywyo6cjcrsDV1uASevMt136qMDRR5fS",
  "key26": "4r7fRsfNpAfDAEg45WmQVCjGTYpDzRmyUmNdGKR6apDTSzxb5S6eG6TuEys1gifRARdQcTDBgeQQvYQ3STLenYem",
  "key27": "4N7eUuqGYKufNpztCZB7s8C6Cq22eNACfAgMtwAt2e9jW6yXQoQtQth39Scf6m3fb2WMLqvDXQPi7niMHyUuDYXX",
  "key28": "2LTqLwzZPKns5RK8deAteH7Rhh2zC9qtGtyCHzvNXjKjtCyHyqcun7t5pLFex6YHpV7cGtuwPybQkgXwe3c7VWsV",
  "key29": "4Gm4rHgY5u3umJgJaJfZmQJUJ92rJNxjp2rQr1ghEzYZoUino4fDvrAHapzhS3Mh11he2LYD7epEwF9RisG4zMsf",
  "key30": "PK1XctNzC8xSsQTppwSpiVLFqBKVucewz1Zhk1sW552N2HCM4rs7w6s45DB2tLz3ufjpMh2W59T6ECCATzGyJRS"
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
