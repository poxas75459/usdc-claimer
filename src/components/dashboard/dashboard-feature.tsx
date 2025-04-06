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
    "2hTjWsCcBXB7Q18Ptv8bhYxVi2E2asQV2AiAhUgSnhHpfndoHc7CLRBGEpPdyMJb39ndLqgMEVNTpr2DNr5oSYKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtvTNGMygw3QZxy6gqDXBCXgbW7be55K6XqkJeC9BtrwcFznxcPohBizZf5Lgc5P6V4X1DdHsxo66wdiUA1vxiP",
  "key1": "55fy7QdDLPmDAWjnTMCatkh9rkJApJub3ApxTziTXU6a22Vb9tDBw8e8UHbNbiau8fhuVn4ZvthXLy2KFrx3g5fQ",
  "key2": "4PH1pnJXkTNqmXiqfZWnasfSHeB6ovcT5rPrJJ2VD99YuVr1vdpokfJi8vjBpNCL88cmv9WBrFiWfU4BYofmFiFB",
  "key3": "u17Gw7wDxzT7zdSB5jqAFjqJuFCQzUYs9as1oLurahYrnPTCGn8hEibo5MSdPVZEZnQSy9xMcbLUyBMXoRXZ71Q",
  "key4": "3u2i85AnAs4MN6SQzVsTwzXqngNAsK2bgdmE224UybmdJyCAaW16m7jub5pDMhz32dJZZwfdRHZ4Qwn2gG4nrE6k",
  "key5": "9ciVeCJuyyjtDaCUS5ycBHFZ8y5XAowdkVMJfD3jLwjZ15ktKBoypP3tesBqqzbZCkhQ8QD7xqCwnicSKniTwEG",
  "key6": "53Ny5WESNBuzwNW6aYGDHKZBbqxsGdvxByYcqDREnv1szasHSzCu4nY2Tt2vU1avHw6qQhjEMDbeqDutPP8xfEn5",
  "key7": "3MuQ68P5B7HWSBX75QpKjLU4hFuw9QErnucQH1tCpLEh7QsYbaTDariZ5KZ1F6c9yZrwZLRMh8dyVoJn2sWeTPgP",
  "key8": "2qt4QAkhnyTuJ94THRqkZ9KCxCgiqwkazeBQgCRvqDGhWPNiwte3bTyyvxzwwCbX8CVLBPZaFpzDfbWSqrK1zQdL",
  "key9": "4MbRWnBUtHTPbfNbmWfsG8zDgnhUAFTi7tDhSqbspgjUuNnE39r4B6HyPsVx2gnWzbqKvdZxZ3HKHoH3sHgkJ7i5",
  "key10": "2RjAFZd7fJBN4DNx866uH32KaXmSJfuFw9HdB4hUarZG7cnRt2jmX5fNyhoAYUL8A2s579PjGsT5ojyy1WQ6eyRH",
  "key11": "WBoUfM2pQDgrEQvtTHf9EuKwmwi83GoLvVeqyx3tAZDYh5sf2vPHozUjvycQUYpqfHknydTDQcfStjFzyFtRo6B",
  "key12": "3KZuHTvCMs5WMom2N9t1Uf2NZk7GHtMT9hP7GtEjJ1m5SsnLBdS3TP8apWFukuGGAxUJRmo7hb63LLNUiUjQxkW9",
  "key13": "4kM8sGs2T6rREpX1YoCJVRQvaa6azcAfhJhMCeM2VDtZ6RBaHUYrYN94QcybA9GoctJA9nS4qt8BRJQsMSsppEmR",
  "key14": "5kGwiqXoZHnpL4wGRJ4t9Wb6Y7YEc3A8FoCaec8eg3iEJHKhARxy3medYSp6hqM3YBLczB4RyENsHTLoFxJZjPvE",
  "key15": "enSTrNFc2H5sSE5Ev9fJGwzb3zN72T3cw27hpTjMob6KR897spcQTHMVEpDXZyxNTXgtSsXtzk43nt7af8Rfymj",
  "key16": "644hszvF3kSMamMZaaes1xdHUMYM9DV9RatSKLJTFh2FarDJAB6KMK8b2VtuGQvJrVWaCrMzwCUH3Vx2rBkDD11P",
  "key17": "2jUXgidnKxDPASjHWdm4DwcHipmniayBqogd8pptqbmfqiDqGtocE5kpiVwurbDupxCULaj2nxd2FJHuU4tJNJpN",
  "key18": "3jFuxLXZYMfC5X5mbwk67xhgPJgpjdu2di8Z5uFCPt5zCsbCQyPtcGMZmtTgYtx1nzzvC86T7uAgcbcgxc8k8yG6",
  "key19": "NcazsKw7f52zgx7qQR19BMPwavGxXFwptzafq1kwQ4NLUnd3EMGL9haXt3yNRDGXBJYL5kXhbLVNocJEYsnSeB9",
  "key20": "28HUx9WSBKg4G5FqBY6dCqVdcraWTsz4HjUL3dMnmFYt22co4AUm6JA4vrZt6GTf31ouNaMUd5nW4yTNXz4Eu8eD",
  "key21": "jyHzE7X1TNKZMC2YPQ91sJdkZ1nZXJeirqHUxPpuECSG6Seb6a8reZABZJBWBTV5hrFCsLWKReFU6Rc1cWaBJ3E",
  "key22": "2RrS8oh2Dffx4xEdcTDNLh5fMPfoiP9ZTKFLDy2bjpbeJeUYDXQzrrzcjV8aBgG4pXmRTGTejH1MW5vmaCvB217s",
  "key23": "3GpyegVEk7p4Ffg1ioYCkdeK7ShJBBhf9YFLJofgwT1xyVUB8PHzySMfHiwmPsgk4haGxnpftXDzXjmJRhQu2UTE",
  "key24": "65nqykFxUqnXufUVZS7FaQfUNsfvtNEiBRqSn3pt5c6w3LTCCgwe1kfBnkhjTcc2XAZGQNpCHRspydiMGci4N4kR",
  "key25": "2CTA59hm3LcJEPCMCQBRsrWg5ApNjf6dV4TRFvoCsek6uGUfNVsKXMFShwM24jhMScf22CX6cyyjWZEN2wkDc1aF",
  "key26": "4HToHh4ZJLNV9TNYB3rxDb6x392tfeBcWyDz7511jw3YXWU9aydjEZ6ehYPkVSA5ru9NmiqxibcGtC51AYN8Ha8Z",
  "key27": "3RgH4WvZyHyH5ztrEoHMYbuwkG3rfSDAx8Ho5eWhKLHDocJi9zEboYPUP455YNNSNgVeMQTgofQxTxxUamSwJuo9",
  "key28": "63pSU8YuQBPxQWf1q8HFD3pxYst4jtbFmddtuG56TLerJoUccSb9A1NQVNmUfk8fbbhBDPuwXCrsVhGjdjsbs2XT",
  "key29": "3TshaDySDunKLVaeCZxyaJXtWMc5S2oSZWWAsoBdPFaMAy1oaujTutBDPajLfLeJaZRE31abvyKgFypkzqrg74BS",
  "key30": "5C7DiXQpPfFr6bcgaLK6h7Th6PVXfXmQQSKmQkTVkUSE36JgeCgVQcbMs6Fo9xPEXwAQivyLuFEiGDZCsoyuR3A5",
  "key31": "4DzHjGkmgwK1cCmXq8HFbK9kcyLro25X1P4Zm1UdZMpNwygajngJW943e8RdFS7msbNDQvuprJ6nJNVEagMDbVAi",
  "key32": "JDcRr7vEtHgbvYnDhjHrGtqxFeTqRn6jSwiu7ziCAgeqffT1M2GHeH1NgkBDwgy5nRMMuq6aSim7bKv3dQkkZi7"
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
