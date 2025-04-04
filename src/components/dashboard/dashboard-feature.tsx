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
    "5Su9jg6HtPBGHxDcS4Ao4v2sG3QxymcwaxFgzfApEnwwQT4WgSCQretgBavkc6zuXADAuZBSFawemKy4Jv1xo4vZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cRZJuAmg2BwkHCwwurtX3A2rLNMTYQipuAtZxk7SguZAFZ2hE6d1R8rBSrEvPAFZoL7Q6JpQKVPVo257QzQ57Gr",
  "key1": "t9aVYBaPF6UYUgDfnD8XRfDFeB2A1UB8FUbu2vji3YMocdRGo4FULCt6hk9349xqmUh1RNnahLbCeFy2MafZfc9",
  "key2": "48bKHNkmQd8JUSYkK7iojHJme9Ex733i8JWYkfVTXkQLnVQjMSApfW7ES83VdP8jPupEPDYU4PoU4AM6YX7bZuAf",
  "key3": "RHZo6qXaZUxUHTd2n3fZ6MSKa7bW8wWgUX6BNt3q9WJCSBW5F7gEUo9kFvNbZNVrxPoeU8ZfCY25uauXkMkEDrs",
  "key4": "4W8e1G6Ko1c68JfHzQMXJn2RN3iDRgYg3aseAHkywaJ63KdQuvbNmzQgm6NAD73N2saFBTsBdB1Xgp7UgHwSMz8t",
  "key5": "5RwguGSKLwhT1sUPaNB1cNRonRW3RSzXsMrpX3KZDUKU4R97dabgyikjZghCBwfYP6CJ1diK7GEmfqNhukvWp1wK",
  "key6": "2xZiaLimQveePzWrUPJ2veMKS7jn3xB8Pb3nHP9m6BYZLFNhKUFDEou8c3pgNaoftuKYpvdJXokS6ZgDzYmMumMb",
  "key7": "4XhEKCiU9thbTSCLLJQw6twXagkt6pjfJRq3V1TNjrfPLsa73zArHQiH1TVyKMh8rGafNVrjeYuUHFaFxV1x17rk",
  "key8": "4bpXcp58pMbJQEKxhCcpenHavbVwfSaaq7XuTT4qAUSC9ucNwsDrignX4CiEu4awz1i7NVmezPRXZ8NuRuy47wuv",
  "key9": "5fujrbrv8ntSDcs1HD634kXa13HiAqYSdGJrV3o1GHxkaN96Q5maJFtTM87UJ4ZjPdsAzwybyEvgp5yyPqC1ehK",
  "key10": "ETmuq7XjcBYUiAaYD7KLPvTi4H23MfG1vAyDFtWFNEtREzRJL53qTqB6YbZAuuC23ts9FEHoLrt1wCkxnd1YPPG",
  "key11": "KoG8kNGsaX8LNZfNWvVcYqF2mCmzFaBAj5C2v2b6hqhZwaJ9cpY5ASgjkDisV3SBEob8VPHLJ4ZxDwchEkqgmsQ",
  "key12": "57much8eWiQPriMpUAfT7wnBB5kqK3avWTsqcmrdNsr5iQrxxNn38iu7HaaajAwkdfiYMg2pT3YRxwp8GATy2G8p",
  "key13": "4MuyzpcTpNR3DkkNxJKQbYW9GGVgTvcJCvr8De8WVCXFt4ZnAnWfXumCWQN3GvcrWHsMoxLwhbE7sNhcVP3Lt9kR",
  "key14": "5Bh7YG7Rma4cPMswqSYcfqLkL1P8rgWLoeJgkg6PbhN7WVBDnLsgSTsouU4VwZfAqCzSEgRAQ2rCEccSALXqEfVD",
  "key15": "3x5Dzf6mHEiLb5FJREu7Xf2e7sRcPD8ditYats2YY3RJFqLRrD33q95giBfzh7erJzXn7ogjzwkPchAC2UJzo2cN",
  "key16": "erASesQH3bh4mes2Djch2Vk5tUZWm73Kc32XiF1xD8iZpuSEek89xiWjF7DJ5MooHoDw2sEMmk77qDJYVjEzS4U",
  "key17": "4akb6ahjzSN2dk15XsTj6bRHx9zZ6wgi2v7S9UEVMTSDqBNEj3WASrWsN2qQJAJUMcEbN3DjWfKrTRmuJQoksDxJ",
  "key18": "3mYGrrQcE22HTckpLJLngGrzMs1eMT4AA2NuzNusXFRorwuBr9SDbzgYURXkC6sRkBoj31wfwAULo5GtiLobpZrp",
  "key19": "3mT5rDBG8DpeG2HT4f2FqZV7X1WVWm74xGo96eTrYhxCHcdoGgfe6yUUee163F8ocqt61tFPUmmacseLp4iWbTPX",
  "key20": "4C3H8hnAD3jcR5Aktr86CmFgPE5og6tig78rqPF731gouVW4gvofCYz38t7hFrddg9GbVyh9W2xR1XdnhAxP2srh",
  "key21": "2LoJe6qKZW465BZgXLmznyuTfxXYmyYWagu8fdpoCaEW53yfPczpBYtMpvnsh1Ap8gxKqqY2SN14tWXdaCioghUn",
  "key22": "4VXuaydfhGZ4vvRZpYvFPESwg6MvusQe8NpRFjCzaB7c1RneUm9e6cv9M1rVJEg4q4CvkMgJkynpf1xNzV9bwreA",
  "key23": "5XKrqnfYURerZzbEwqfmxGSe4oBjDxbLCsvE3HVjQoivQ7GaswkcyrmBvRvTQGLtxnbDrTNeY6pfQoScerTKqsq6",
  "key24": "42vBDsXdQghDi7CtZsaJvi16PmGUb2ejcLjgAuWquiTE6RbnNcsAzBEGUAPeyXnUWZdyP2A5irg23QaoyparfwJJ",
  "key25": "55MeDVG66j2WTDU7cTNdYXxnkDQ3oYvHqshBPiYGUgH2fiN465tbppsaMTixd35A1SAiQAYMKZyzeLFkADfjB7a",
  "key26": "2SLLJycSpxk71ZJvzKiqnTuZ2CJnHkiAkccP1ytnfuyGQSKdW8aDBfNXQQwywtJKJHznz3GrViT42GVZXTjcNPmQ",
  "key27": "3GU6hSZXNXVM6iSqkHmr9HqzK75vxz7CUBLCmT761fRhbxSct7nNMQ3ZPR99QdihPREPdZQX9Diqo8ZSfuMRsTZa",
  "key28": "3mkXaaoGaNxCVZ7n7nK26kjFcjjFVdkhZwbszb56YfLFCk41Q6Sf7hjMzEbVPRBg78Gtco8V9y8EaXS4ogEjX9ea",
  "key29": "2d6YX6iybyvX9bp1UoQMTRFoEaTTnYc8dQ7qqQ3yLGqEXvG1KkfhpL1vg51SWCjJYr9X2KMu1GB5oV2WHdiUN82N",
  "key30": "4sz453zu574NLgTZzVKfYhw8nSxP2wAeUCHuDmEMCvMX3tNCj7UvzXAUDTFoXHQLwg4sbG8KvLEH2tRVCULWk85Y",
  "key31": "4EPkvnnhEZ9hf7HKcieiidC3S49obV422rAKHckJci8K5tkS2PgySLH4iSsBj8TbyTrrfyy6pU5RRfizDktH7mAY",
  "key32": "4aN47AHQtGFkMvYpucZRBnwoGdNHuVTxk5hHdsHugjoxXrFfo3WfzFHqHLNRut2cXZb5C8iVDAwU7MPuN6XMKfau",
  "key33": "KqgGz1UXw1KTTJR7PpKT4FdJLGMRgrNri8hEww3azhHpqaDBmoYxoCrv4HPd9H7DvtevBHth6FkqsLNFqEeTuHe",
  "key34": "61dRUgr2FQ7xmro1nHFwAQw76iD9M9ZGxZ2tNtM7f1D4jC3rnR1dZ8GJzC3qDJDzu6sT4VUVeBnyNefBvXM7Cmgp"
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
