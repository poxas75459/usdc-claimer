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
    "8QpHLLzGSU91mJTXXmC4vxcxpbNZ3EHPZowUQHkWy33De7tRktFZDSoUnGXtJbpxieCTj298jZXvesWsix5GkhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mZe9EohStpn5AXJyecLe4Zz8AKaCiCcuJBGfWj1cT1UvYqU7TBDRsqgmUkJQXm24Vc7c8i8sXuewMYyeiZ2kSMG",
  "key1": "3URn1poJRas5Bn5mhV4k7dcYU6mKAYJNAouoE8QK4hfGxzYbruqBQp2sZLaYrs4MKuE5K7puMhcgeU4QfZPGdozL",
  "key2": "3BK6djsbjkLWm5DVZP5H4o69GvfjtuUMmZUdruxvejRjcHEMMf9fAyk4J1nngnKGxTHfFKE7MbomfiR2aVZAysYY",
  "key3": "24UuszSXCSJmJ9tjTGRmqk3YuFJUhDxmYuZqPVkQN9ZVtARQR5yJnPWdMYB1uTG8TdKG4F8WnnFLpFuqNZ2n5EvZ",
  "key4": "3qKA9Qk3ehjNCk8D5D3A47cK5KUfihHy1dxzbJZsQxmZkEh6Lw9J83db2KnZ2xj9JMKc67tGgAQDebBWW1kfifhN",
  "key5": "27V6knbMiuL6PcSfCwdBymZZNRrerquAWTZ6B6r7zmhYWFzw32DTy7EibQkiVkEwyzDgMy9xQMPeFJ88PS5q8zmU",
  "key6": "4X7PzHv5CZQWajMDgwwpksqtH79r9yFhiCgKY1AwCGdf9VdZD4Nr7ZyCqWW92768evBneG4mezTcnNYkDLvZY5dr",
  "key7": "644psGU352RgpLRo6QN92EuBsgd7TAYhDWuQMPCFf6TwCd8o8Jk2DLs6Jrdnimsqe8vEQEsyFKqNQq87TfgJBn9z",
  "key8": "5YxHxnfnpNLGFaBahFH6xYFAPiUGTUwJUbXA7WPkCTxABXxDZyV1ZVsvBT8f8Xgzfgv68mwmXsfZYpDbyRVZKX84",
  "key9": "v1qoApVbsZ4SgGjBAjvqTNSu4KuewVsPqxMP93Sd74uHbZvvQQwHzSkx5tt8MpQvbUzhsw6vQHjUyewsz6TQPea",
  "key10": "4bABTAiVP7Bc9kp2BbC3AHta3xHXuF16mNfGFY7eKDkwZC9hKm2ABdL4a2uXr9hUcQ53T5XBRtRSqv3AhKfmeKnj",
  "key11": "5UouS5CwGonosSYkSP63WmCXhKNQ7asVpmwYKnNMc32T48UWMeRGw5j4amdAAxDqja2cvCycn7qx4Lzpuyr3aCbj",
  "key12": "3izFBzaRFrj1sCyGmucxZTPaQMEv8zi4ZdLtdqcR5odnkrcty4P1TTupiFA3ZpeAM7jUWTmU2eVUG2WJcAc6b76G",
  "key13": "2LtaJYR77agjf6q9bj3PGKNidwiBy6pMEbmrVTAMZTXDiephaniVtEXmnQ3LMkTd5g4vMCxhXpT9Np6MkS1dGEk5",
  "key14": "PieZVW7NnRXKRtZZuioZ9919UeRPBwvoqzBQkNeFrgiiZ4aYxjfyfMHqqNgW7cE5Zszq7CehL5eDXzGmNfNAgAB",
  "key15": "5erT8u3Cqhm1Lm3UeWJ7o5s4tYcS7JUi3hEjVcVBf8rzfbxdzXMK7UGyQL1ub8ScsJPyH4QDmMqTN2iauhBv4QD1",
  "key16": "jFsydiarDfznFQVF2LFszg8TJWdUod33PYbfqwUuTup8uiuoQ5iaYXCgiuJBBKNYyHQsiMfHNPNmUvLd3jWsSnN",
  "key17": "53DwrqL1KVvXN9yfrAPgBP9bUUY2DJaR5X7p1hiPNyrkajndjKutjucrcNHQBtsGAUMqUUpeXBoqBTNQiMey58Bs",
  "key18": "4Q7xvHkZQv5FAq7DWHjACoJZcPkVP2rVj9J6hHJGdHbTV3mwfFDkgG829nmn9ACQoDgVW3oQUFBydEtGxWTAvr5i",
  "key19": "3dwbyJAZXZgCraqREjjSfBfPSGmYWpV8uVjaMnV86vbDZGjbHFpkCbFFBoWKJPSgYv1zpfRaCMdKJqFEzkfVXFLd",
  "key20": "3XfzFZ2x2FMcNRJjAPrMePLMnWqPaPT1GZyYuezXk8BK2L3RsS9XHianUmMe8v9qKQHCh3pW8Q1iYeXitxNotDaQ",
  "key21": "3eXiKDvGA3PN2U6jqAyEKJV8KrSEEu8EK1tnhJS4ZZ8iGnpTke72FFesTi86F8hXG6tepgeBCyYUEj8dB4E9Qeny",
  "key22": "9oMKjf2kJ6SADc7Vjz2vLKPYAySVeWVqPavzbKQhJX1i3mBwvySrXJuNMsrxYK2w5ZZUVFwA6P6uFMRkkA4yAk6",
  "key23": "5mNDtJiqNSNCTvsJFg7zqqRGjbQygv6coTo3x1vUoYqgtX3M2gjYi1Kpg1E2f9qnm67qvdcCny4zhX5P6FeEQimM",
  "key24": "5f7k6FLWDweW5LUcRCp2Rq2eMfp2yg3uSidQki1A8PnnbLKLsg5d4VUYfHyHeP7a4C1Srb1JZih1meE9RMXLFi25",
  "key25": "Zknk7qYdje6yL2V2hUCceuGLveUyP7uMks1EcDK2VfQMremWsJ9tdbpuGb48JtPmahpZpxW6waZmpDJ18k4kZ1H",
  "key26": "4zJYrCAWThjxUtoPSsAH72c1ndfWP9e2Ugs7XapQqHpgiHyhF5QvQAmW3ZDacEx2NzdGTEUvgWjjMeCwRYhtuGn7",
  "key27": "2dg1tncBViN1Nt5xoPHH1MhBEq5sSiWkdPZA7sq1B4PQj7PSDrScQeVqD2zuFv1xfJou2FUrJ3fPHmm2Yj8NNZ7y",
  "key28": "4LGw8GbPwvDFqQjMZpoMEZYMyrE1pbrumuJ8AAm9J8SsYG3rkuyE15dAKtZPa1rnVmSKFtvjbxSZCrEFBd53j8KD",
  "key29": "GpmcDuEjKr7pUxrqaAUa9dKvQSQCefarZcURTKqVj1k1BUc7Jm3yX6VQxsMz9bGSt3M167yRy5rA23TtYACc6tk",
  "key30": "pqUDMnUGYkm7x7xjqSfuNXRXeMcKp9doGSPbWJtuKh3L4gJDjWMJFbHsoPSMnej6WJswaqmT9JP8NdBE6HrWgxz",
  "key31": "5LBgMcJCDrL9oxDQXfzMfveb3gWTh4UkaU6GBaVbBLCpfuzS4Yk5Mp5vwxvLzsZN28sjUptid84qeutaEJVGxAb4",
  "key32": "376pMynDtX1kLfyMKCKAV4Qtq5AohZXyb2yRYtgGeLa7UU93Anvhh6DX5hFiwGh7Y1swqrGnaGcGhXyW9kcYqLTr",
  "key33": "4edQCTag5hgBH6SJhg69Stz4pXdpH5Rg8CAoowb1c1e54wXAxQ9cAFSwwsipp1TBEPfUk2W8ckLzbhCNzbu9Aqps",
  "key34": "5Cpq63o8C4i2em1W7EuJQUvexBGdVf6NBXxSXn78peKfeA7QEcCWJ8Mk1J5YyYq5Y4J4wXMDmk9jn2HvW7nztaRX",
  "key35": "3yn9xFoMdx3K92TvsSvLi7KdZRcW5x9fUd4A2rUd443LF2xCs3dZ1yFyL2noD3PJbtyw6Ysj2KizoqzRWiqbfvkv",
  "key36": "5my9cXfVbVm6TNMDzMY7sLAdqSRZB26fNnJpNU9A4n4ASA3JumGLrEu9yG98LwBEGqBcrPVMyk7mnxA7o29gArAt",
  "key37": "2wgnPX34qFERfTY1G8aGUbhpvPukxU9nucpFbSHdPcmzAf9kmmN5dZ2xjvpp3bBSuHuAYF3KAn2RuQnh6jFuYRWq",
  "key38": "2EazCMH988814cPVtxDxaFWCv9qN2pwnjDF3bHaoSwL2brtND7YU3FDWAntMPZFyorotiaXouqhVA3NmEZ97Veoo",
  "key39": "2xUtbQYFburC9jj7azy48Y7KPn5wD5xuKjLkoqFEKwFNptLX3MARzydPp2cyrSq3a3e7vvhFK4Fye7BCrwfnuRzp",
  "key40": "54eBbPuQBiAAA6DVkqq6T7mPp3hCDPk6wdeV1YCG5UFVXrxAgi8LhLDxbeiPch5FiKhRoUYaHtmBzThrok9TEz3A",
  "key41": "NCZnu9VtDDNNzHz6q5Z3sfSJv7uvfuxqgRn15P3ciY5QwByZffLWsrSmmjw11v9r9opJzBrwRJchRfqzdWvTXPk",
  "key42": "3HpUMQjk23948SNGu5LoRYQBmuwpvG5dhcXrpPU4iR6h5HRJYzyndmsiKo4czX3Av9Ctct1BxiFYre8UF7sEyYSo",
  "key43": "vuKZEXVXpDRnDj2JtunF7SD2RsQjqrkZcxXkXv6pvzVRXsw5wR2ZfhY7sM9jGrbAZnd19K99DiuTeLDoiqdSfrc",
  "key44": "5Ppv3eWy9Tx25jywn29iXzGgSE1vFJ4ADeY2G6bsRCVxKYZ3bY12GBcZmNsPQhFWWp622GmaDmskEokAoGV695qj",
  "key45": "4wY6T8gxVKrLDq13x8XA2rW1j5eLtzp3pFepyHn7PvT6i9iP3NvAqURyb726oYiqJxNTckzBLeyKY1URAWuwjTGn",
  "key46": "MWaDzwyfnmYCNaxR3S8eAGbrDz6za5UBtmTgztLBJ9SKniYm55NV5Vrpkry2oFae6agrXXoDvQZmy9pFUX9h3KB"
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
