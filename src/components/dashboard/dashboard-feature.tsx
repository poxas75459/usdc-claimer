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
    "4A7btKLWwJfoNhKiwHq53kcqfu5ZuXjmb3ptsrBfcFooa4vwx716WZWnyXxhADQXMHjdYUhU1KAyaZXUPg6HVuZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kngUhk7A8C3idB7vSKsVbRFCgKhqmTd2GTB9zHh9cNrqcUwbywbT92w8LgLPF1nz6VWRD7axCoa3Ve7qBRj75W",
  "key1": "4Ymavm32vtcn5StGntn7oRq6zCD4PRSRiR1WbePPEAwxnVLBvVr797Xx7VthZG6xYm2P1K6kecC6MKaL2BhYQtUB",
  "key2": "2VHrMjxjBJkPJ3QBy9HY4QAcXjvXwVTMeKtW1hbcoXEwRuE7dvr6nwSWf7US7xdyZuzserX4u757Bd19BN6GFPj1",
  "key3": "3KGGmMkG9iNPZqXMuL7EaZexwfbiLn7e8smS7KfjB9QGBHLp9QLSStj5Qg9yFzHUp7gXpUgiX58oT9BzHeBvxnNe",
  "key4": "5tranzj6zPEdkLcCKuZRjFpWevrNsdUtk4gRxDyATBHmQmxdEiCyocydCFF98d3y6BRDCQndEoRLt3q4z3dmMrXf",
  "key5": "4XpBdAmk3zb6FuAaTwT6MWnJkH1FBwZVdCgGNBdnYNTu9CiSUpiTgo45vx1RZE7ZXJpSFMvy3hWBYHrdmmEd8sd8",
  "key6": "3LMZ9azvUvTYPpVFeSLT8mnHzWhV5xhFUEvt4pb13SQX8P92ok712QSHJEpKxq6bpAbWau3jav6YjzBvGtune4fw",
  "key7": "bKZRHXVkcqvcj6mrzUMjv5DxpwM1wUQo9gpXigzHekWHVEnWDU6zK7RFiGGbKBNaXyreih1HRZC1e4D2QYaBM8u",
  "key8": "2sGNKCPcH8eHSfiubDyKaiRFV1JqkrGMTDbmVpzCRZMQaYcpfRGnjmoXJgWU5u8mLk8KhnKeXQgHPHfGbecKPDmT",
  "key9": "2uKHqrRkgtQyLJceah4Dyo2XVR3H4W4yr1r7iWfUX17ysP4CMYWWL3Y2eW4pDyKwAFX6SetWYuZ1u2Ap85ap61EW",
  "key10": "3F6YEYecvQLskyjQwXeNkUErUBbHkq32zr3DYzFBC7QAbXQBzB9cMddg4AkQ9YzHj7guPUqTgCc56WtEpZJd1Ltz",
  "key11": "cAtgCPuKcFyd5VHchZfBqaPTZ6YoD1HJ2wjyEMhyCVUsufzjofZ6yCqRmCmYuBuyaJa9TaTdt1Vh9DyrxCZhEv9",
  "key12": "ccYYPNpb51aE5VePDS7tBq9C23vcpD9q89bf4BvnDmnqkTGcAKSGVxaNG5RJzKdoLqoUkkg4sm6RJxkjdbZLcZJ",
  "key13": "5eTkn6dL4GG1Tby6N7KsQK4uwgQzrqJdVgguvvdMAgAfkJsDhdrGk5Fboa2Rs8LjxuKd1w5RpQnBWb9Sd9SHD5TA",
  "key14": "8KkSaEd5HvBSSRDUfdmfvnREDSFsmvExJ6q63DHQUXLACXF23NZaguPSZVhpwnZ6mNAhgyGTg7NmwMHuQn8Xfog",
  "key15": "5JPRtBPJXcTSQ4ABnQ9jrrMNYUG7GZADc85HwmSGArBeEzereX95e46mh5ZHTQhpdqqBFyCpccqcqM1vroZVQZZJ",
  "key16": "4bPDrtm2EBUyPE4wPMUAuzG7Z2M7CuuApLk7rXGDmAKoQwtnTqC6MDP48ibqDGLbUPAoHnQMnYkBvLCRQE7hmqA6",
  "key17": "2mvDqHJBVScnooGAM6W8V8azYwJUjpfrQkK2amQwH6XEy3P6pU9dZjUZC19Bbf22h8nwARbyPnb39fugkkuELgFm",
  "key18": "53kG2ft8BeShzvqTDXyXkG56FKfUsq1DT5VgiNvUsdxdgrdoNYdsst3x5fiRMKP23PGs5C1sud4LDcM5NRNY8T14",
  "key19": "3qc5iVXvn693pcd8Wft5qaidGptYzbtyA2urVH79tesuHJLFxhqxHvXK34aDeLLsL4EjP8STD2yFLx2b5g8HjidW",
  "key20": "43QHwUvHfisV8NDL6tcpob2YiZXNU4bCpu5QfwZcFNbZ1uiBAFamXarJSpwCGMVykLzroiaYYoijechSkSTzZfTF",
  "key21": "3mwrRgvhebHmWZXyFgPPFM6WsW4JvV58jcn31KrZ3drSNEE6FKLBi4wM9B9gG6fB2KVu2kakvjunuScDUjBRTR4f",
  "key22": "4ApNDD2iuk4UFBSDXnFgSivbSVbJzCwGd3AYZRKML7krmR7iPuo3MHm3JgTaT1NtYjxMuiKHcNYk5SJofeu4bMNs",
  "key23": "2ZMp8sHerf3wR4sT5fPgBKuhCjq44cLg4w6Az8yr1ocpr3NhhZxsJNJ2LGDS7GdL6rq9WfnnUms9APPEakWc7KVT",
  "key24": "5dRnnnph7fDSVfiR8uLFTTdGq7Ew8uS3CrwfziW2YbC7gVZghvtWYey2X392nzcVCjrcSCAPi7hnmaPpUFZriHzW",
  "key25": "pzeTRXZqm4WTQDRJpzCg5SAGeiG85f5nYfRvhumtL8uoy5tScNs12PCY8EoAKbf5WX7NYbESZT8taWfP3qouUqP",
  "key26": "G79qqtQW8Qz1b6y2csqGiYJA7fEf7vtBZyDW6ByovXBXGMeTPEA4swJ5GpGVbXXXVCgkRx72VvjwEDuK9m2QU7s",
  "key27": "2ddvASFRvEm7LPabspYU64vWb1gPpWZiWnUXfzphjCMgPYE3eA4qLBUNcVC4kYPke1RV29QH74gD6zCzYkEh3NJ3",
  "key28": "bQBbihbkphyCrY6zyk4BkQDweyseJunCPreV2jFi8HYi7nGs4dtvvZHJj7MAMTd83aB4GYWR2JDvjaQSatowghR",
  "key29": "4npTZC5tEEAXwhmJZcCJpEBkkxQzjvSgFd7GWckaVd6uJezVcpLoZFcYCkckPtEbcnZJYqBJVS9c9w9KwiGHfFQ2",
  "key30": "478HUmucHK46PUQhb3we1CvGVi23qSAUMmdTpk3KTihkzLoLUVFzgNK9dMyZJrMX8E6g6tRPdERKpjCxtBbduWJv",
  "key31": "2P4vcBRY1e2jmPC7gNDSmVMDaLHH2iWUxK1huZhRMc1MbUxUHNJAp9UcAk1GARxZEoEucrSENWDJrtcqHmwoZ7Wn",
  "key32": "R3LcYW2Si8gDkaUyjqMFtPJZKK3ZAp2t5Hi8fhNdwCgi1ffF51qU5ntNhgL1KQAGpogMZ8izYGL9o1Z4ZujY5nK",
  "key33": "4GaT3c1hdEBSk2hLzLLmcc9MiVQR31qyVSfQFgaoNjmVm4JxmZQPqV3htnAZ66Ag7NF8P4CCPBq4jqGvW5wvZZCa",
  "key34": "2KBhuLsjhSVrc6dsgYLi3fS28eoGeY3MyRenDqJjNzAkzZjZxAL8FV4shzqa8rbkbunhxf2duYAzWZenhVRrEeyq",
  "key35": "2ciKCKUKyQ4PM4bYfC8gH6DFa6LLhEEazFYhz4YCqzENrq6xdytjNwvVt3yKtvHAXc9p8JAHTQSNqf1Kd6d7yNE6",
  "key36": "44teKXXVhpSU1FVngHMdGuz4u97LfMAZgdA2cbskQJ5fMcdAcTp7GpgmYaK3a1vtKk1Kijsqnz8UxhEXiPXnUY9R",
  "key37": "Lccuo9Aw4grULkeXAkkEwp3n4nJTbNEE21LJyEakxn6XdGdWp3a7C7Xc9mytgrAeCKTdxcFetFWDDLmoGUA4uEA",
  "key38": "2VV5beDAD4J6pFm5eyX3ngMW4hQmN6orwznSANLBRRc9NGgCD1RrAc4eESX7w53qjv5xtpzGBLi9dczeh3jVpuju"
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
