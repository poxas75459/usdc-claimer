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
    "4BscDEbYWCHtU4qfPXVC5PCqeZspzkBqEZ1YpRFvMU43giptw2VFscty6M3eDRBkU3UKpMeqMF1gPhdxy4A9Ddsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyLrZpfDAhHXA4aNSER2Vdv8sgeNxHNNf5T9chHMU1cQhzURUGMuHFhGKpjauBZTNCoTWTn2qCZ5rDzAeHeP5Ga",
  "key1": "5DmbKSyMBwuSNjeWjbABEhcty5PfbYEoGyESxVxRbVPikG2g7CdczcgJcNruKiDTyemayzsxcQUXo8t2EquWBaUz",
  "key2": "52McnSYPW9ocrRnh3v4WdaRX5sNBwAukPuDdxjLyKpt5wZEZdzLnY35HJ8pzWEbmxxUZvsXP3EMdah7iAsYgnUnR",
  "key3": "3tvvonZkn7yUWi1eZ3rAGky3XGRNrMTFf5PAanTBSkrtz82W1uovc8MAPFpCjxyA8KzFKw53UKdfwrkBVmJYcPAs",
  "key4": "5UoRgKq4WtsmYwSvN5WLU7WzbyypXrhzBuR8sTRt32ayQf8DLoRLSqognQxL4KxqsJstfvfsS4KwaYoTdmBemoee",
  "key5": "5qY3NLbfs6aB5hLgb3cTFYTFEiGKcZwvRwCzvSHHFhhXAfAVDgsuBvRaN4nzdG6nhDQAgNZvAGoLsV3GU6xe8YiB",
  "key6": "4vWEeMgf8kmBqdGQmFJzntLELUCddcAZ2PehMf3k9k8ds6nLi1eu8QXuvssATB2qnt3t325fMUd9NSXLtwCPasdr",
  "key7": "6kdNshv3HFnzY3RrtsrPWcdLuPcCirnV723xQUxQFzx9ghkjhZAq6GTnA3gMm5N16XfYKpuarAccKZfHW64Q2pn",
  "key8": "41TmYSTttQ92eqixMqKueLhDyDjzjvJm3mQb8QBJApV5VHdABvbw5zP1wisRYLScydm9TYxxESgSFEUB5ooAvNAC",
  "key9": "3nQGPHv6uua6q6JR2c3H7vENk1YDhJUuAqszKGQmxWMYLXgtNaa9HMDHEhgnYwuEJeqa4t79qX29UoTCWvkYYK8R",
  "key10": "2EfnfhtDxy6pJq6ZwsrTwoRGf4zu6aD8eSFNusZ7DxsejpPyzYAkd5yby4fkYQxVjULWNkELi4KX6r661NoJFpM6",
  "key11": "dcN2T966sXH7xN698gKV7Yzf1t9znyJ4GUrjFLEHh9pZiGjZPBGtR3uMjMhcMxyVutid3mPGVHJajwrXQr2qUrX",
  "key12": "2gihVQFFT1GbGXqupuqLGJMKS3grEv8nG9VmEw7B5cnjtKAd2CEAJBK8ASTw1V5mhNwZCyVugJrTyLSQSKR1UNeJ",
  "key13": "4U6qNrZ6M9tzboZUXzgjYQMMM2iNXtukC6CeRMSej3qu3fTUi39SMd9ExjABa6PmBCLJdT7XvWTuBkYNZ1QDkXVH",
  "key14": "4zkdDmi7F7ammgu1mA3CWxucLqpfx8St7Wj6xNAWkhFwQqjg99cH17yUgbhQs2uoka3U92FoBbdHwAT5iCmdTjah",
  "key15": "4CQnTCC7Y52vkq9d9E4b6E7fFfPREhxPcb9HV6qnRQgCTBLjPRW1Ss7M86fat8Z9ymBqTdjxyuYcoR9pQeqNe4g2",
  "key16": "2TH9eDkFVFzQwzVLFALLKrMyn55eAruWse3drDoPmuCWu7tdbFL4kxEzL6xJRHTbqb39U1zepGCjbeD1LcrNih6c",
  "key17": "2A9J8iKLmJaTA3kbjrAHnfbdoEt4TQcaHwwU1sLbtNvApJsHSrLqqNtXBHeKK8KhvT7VwMWngas3ChThjJgvUQKw",
  "key18": "FLVe24oLgE5knvySnksNbAi9JBGd7jkbWPa9bp78tQnpqvFUGr45Uv1gU4T8L3rj28gmjuDpbHqXRVtDJEj8fPd",
  "key19": "2dQgTEmhRhuxKhJFTgvQQcGi7zvebGVHYUVX1K7bgb5dsCrk9dzVEMRtwRUd69PXdfue5sfWYN9KWsXx7NNE2R1B",
  "key20": "2X4Dh2U3ebL1uwRP5hDUgvHGXLx6JuuK8GBe2eFUxF5Ny6VDN6AENCmVfjY6zXiMCA6xgzsuavHxyiGDRdrDac3d",
  "key21": "2RyKEhmJiHnLjbe2BUv1Jc5vLMdFyMn8TiVzSP5eg2jryMGfebLzCiRVTqz1s67PUN8W8jULoaHe1uGjEs1tNFMt",
  "key22": "4zePGCiHLXKbKqfuVVKPtCxqmoFBxhdFc1F5V74ovYLygYcqfNd7pcBLQ4h5UpTU3bMv9mo8GvgB9fpb3s2urdz1",
  "key23": "5rS1rxUsiw9fkJ8HxL2hvs2pbsvy1FHVw1rAENgHsj9Wwo3REYzk3XLfHpLxVQUF8QQ43suN8ds6DcxBhvTKHm7N",
  "key24": "4QKpGAhWYjdbbD39JwcsuuxwgJHF5wm4qEq9Do8HrswVxGfyCfUhsGDgiDRqHzhJrpwXA6JMvRr2qmT5WMxmd7JT",
  "key25": "2kSMxpRznj4ZNZrqcPayndahFmEVdrasq2dLpPh99urEJhA9JARhtK8KhQDLAjSQqWcRnAefRrmj6x5AcJA5DY6T",
  "key26": "BZiDdBcHkw2ej4WHeb7UX9Fm7j3PYukKAMD5HV7AyJ3Y1yhywJcwJ4iDt56Ncwvi1irH2WXLZLeCL4v9TmPQACU",
  "key27": "3EBoVrvtfTLE6QUx8p4bdfWdKFvZkmM6XTajcgA6BthUnfPApFWm2SHVPcZ3Bf71Y1JHPzbnBM1MohFFQ6ASscTN",
  "key28": "59v98NC3uVUrFfeLFnw54Q1EG44vxj8czpVfpDRf3kzRTBKmTdgivmRSGYA8taahTJDjM91mgBVdiBp8zu1XeLaz",
  "key29": "3EGSwWzX3dpsgtGjEX9VBgjnrDoYzx3UFFp1LoEyPMxyVDbU3oggS9jLp7Te74yEfDKZQ4QzunjF1CEPX4oRSXMM",
  "key30": "3rDQiHZY4JkqJ11dTphGwt9hLVRFSbx3mxpe9EdJGsYk5dGpA8dVZzRnazczgFv7DhapLjCe2Z9UP66mcsmsjE7z",
  "key31": "5QYww5Wku2VS9Z4NtWnxw9PWBeSqsQPJp3kwqLeZjHbNQrvnTsr66feqed7dpHoLqRK7byrvN9ViemroJbcdjoPF",
  "key32": "m7dyWWMNQtguQiZJNUW47UKCp96A8wjGxh65BU9LwsLYb7jaCnCCrL1PRcuov8BbrPZzKiomVqetqEiEML2nQkB",
  "key33": "3CUtzwMZMj8Fd3ePDEYNrNBqc6W2bs1Hx4sD8TdCz2S2bRuM9xjRVb3apF7nHJg3fe6jytpM3kamjN65UhZ7tPsA"
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
