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
    "2Hnqa6VjKGPx7iW1PxTUMRuFgpTBairENbcWWLK2kMbm4n2GcwZ5TLCZnQ5zE1B1oGkjAZw4CzxisuxTEL4uiKgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmXJmXeHm3v44RgwSzZqBDbUy4Z93Wm65Brfh8u3HTmXNdWA72V2gNgKTrSVw33c3pDgbH7hZ9k64STuA1LkMsq",
  "key1": "5EubpLdyYagU7j1BjZugt99PvoCarAcgmCSyvpkHxU6xUuWMgH5afuH1pPtFtNjKybjaT6P2MukS9XjDEiuCcqq4",
  "key2": "236YVJ6zBVVSkotG7gda4UELwRs3XHFhxD835V63q1cdhLTihBiT3N8ktF6Jm6XcgH6hBZf3W7yoSXUoTd4ccyCa",
  "key3": "d7Uekc2QfBqEhE4vHtPZe6eAQFK2vbY7uhjgyk47tXV7xMF69HPycVFwJbGdEtwWNGebLdCNCxpXAEFgt7visgF",
  "key4": "5TrDPvnoGE3pE8MZhvifyC1wKRb3miZNHRrDCnckK8Scfkxaxu1RqmTCARRorRST1iJT2wouT5Pvugije3SiQTZC",
  "key5": "MB8pxuNjWRorLCJixa12kNo2uu7sEB8a5d8y2PXcojLujaUX2bgYBu7q3uedvKgVETisCk8aKbXkB863ZXnHiKA",
  "key6": "rjSsSEqaPcG2YA4A9hRZvgeAawjH2cEAZvUyC5jzmLofV38dD7RjF6w7J8n6KCPF7E3pvrd5zDQqgVkUn5vUNEV",
  "key7": "4E1FVFoGSQzSVys2wYHkE6VZx6C8LSXJiYgRDVtzJTXVcMLg8E5SgYu4YbQtfbLczWffXMGkDs5eBAR8vGiqThH4",
  "key8": "32jS4sLNaJj3Yx742VpLicrnzepg4Nvq3DruSCuaRpSYNQfo2EoAN75whpvExgNxfnvaNbCDvF2EjTzh5gCfh6Uw",
  "key9": "3qCV4ystnwunLSMosEN2aWuGC3gpS1Nk1vQfsu3AaihgpnCoT9JvzY1jG1NntGB9WinXEUTK3tqKBUm1CeZLXz7N",
  "key10": "2RxGuaSxRPw1WFypHCx23cjwiKraJFpoE2umUbG4H4t9V7bxVhZ5cnkjU5JqVuBNXq9TJ2bNScYhPPQvnvyuWr9W",
  "key11": "5H8W1jk3A3TZ8qkWnDZYCnh46Z9yjY1CnL5da2zirKmuDRDzCTqvHkMm6D9PK1Ac5eeNxF8Q61QBMBQsc2Nfu3q8",
  "key12": "571LpLFxACRdAerdmS1beTNuLncTa6qQBqJ3QE94rjiYLFtH9d5m5i6N9ap51ejZcXJ5eA6B9gi1Vy3RA77x1FaY",
  "key13": "2SLJ3Y3SXnY1vdCru1t7Yc3x741LECjM4Vtv3RrQjnuPWfZvgzQBjEo16N1nNAs2RHQ7fb5KWbyHqCVUDQj8iYAy",
  "key14": "55i4n5T9qGKxHFgmAm6yXprFghYfuG3sthCvrXcP3MQxUShUE7nssXanFvVsudHVWbQFsyfzdBjahTABzMFE68vS",
  "key15": "2Wa22iXHHGizg19Z2skcHuaftBjCTysWRot5Uuff1RExQS5xCCa4u1sL6cMkxuYUzeaunTLqodyK9dVeYFUyQvUi",
  "key16": "5Rrz3G1BiPVxwfQ551Ef9X3JKtc9VdA1Dsn5ZhiW7NAX6cRWB9BK7hUqpBPpbEAenxNicTRVai3F91qDL7ZkwK3B",
  "key17": "2WH5hBByoS4beU3tmeSY2xQmbK8pCHrWkrS8qfoBCadrLV3XvJmeXHBBtUgwP8be9JKvikrzBwYZFH39r897hGUf",
  "key18": "2SFxYDENX51yzQxgHQdGdsLZPqHxahFjP7zkk6TRgFcnFjFypATg8ykKNVRMpEFhbyq7ywRhiER1EmCCbEUnrgPY",
  "key19": "Q64CEK1k4aavSLBtdVrRjjceLbZYkj7CupDqQAKzw4F87WY6kyt2FkKRqMyE2oB7AnkchQdY8691vdn67cyWCEW",
  "key20": "3AqiseaEnvavCVyAaqzpLjs8CRJPU82Wd9w9hjVy2teSeXmRfHpzKUz5bjCdxoYBv98iYXFXkmouU9XPdoyzDNgF",
  "key21": "M4FZfxTRfqh3j3bUTMrncML8MQ6jmr15kmmEcToNmmBMhK3ZSxZU7SuNuCCgvA9e5wURUHXSQpeywyb8Sorgucr",
  "key22": "3uExvyjgriL6pyzSYJeA6JwtM6RLK3puuLZweM8Vve1wN3dEztZvF53ZyvMFzczs5kRxj4usr3eWSUAQiLqJu1Ck",
  "key23": "ubpgcBZ65p9x6kK4t9XJpE4XkbPPvc5f4Uy5HKf1KkGNiz7fZc5iCRF6UnQPAMd4LEpYspZDfw64Ug2NtiAJkr9",
  "key24": "5MXK81XUcWmhBBZSMGoz1r2evqxQGhirmdBvNEwDdXWFtQkyrwYY6w3TpZU7Pb1T4QfN7ryQ9aM4wo2oq44pri43",
  "key25": "4VvhV6RwfoLDmYLv8gh2hk5ykFdqFs5vtSsmNEQmxfLpi7zYrD4UctHWmpZkYNBJnxSnSpTdyLqiBktKEcSRqKZ2",
  "key26": "2JvCWsbTNPR1XC6pbc334cPxPhJvftK8emXLiZbJH9hVbp2iPAMCp42wLiooQUMWCchAZRYseUqLgv8YLqcghPdE",
  "key27": "3NaARuix29hPB6j8bt5hcCuLc2VnvCk3cVGHwSiQGSTg2jqfihgCHivnFCYQtwbwAQpWRs7Ugp9ipJPSEc6CDFjG",
  "key28": "36vbqNpDJfBawDHTpFVngXqLkXJNXmFkNpxjJJCT3PUnaphqRgGJAEBabmGnvX6uRDZPj2CaAg2tggP9HctDYtAb",
  "key29": "4qgfJdjmKie4Pomnf7t2MJ7G1RwBd61F8iHGu6R2vZ6PNCbv8Vo7n1L1u7Y91q63ZPhkoVbHvb6SMXAJ3Fm4GcH1",
  "key30": "35tf1tijGYJyXYiLsyVRfi6p7dUiSLbFbeGBupmkjhNd19A4W49kQtff1sEGGEPfxeMQfewjJmtXHBwSwJrfFCLJ",
  "key31": "3q87yQ2RWyGE3qrAXD6JjN8YZC1XzaCVm8pnwwVkvihSK71chXoAPKMGL8VEh4DTWtvGDhSaeHECqYyFARJFmC7A",
  "key32": "5upKewpwMMuDsNNAefXCJCdR7Z2YgTTs18Tr4zYGALb4AyrFis1zihd9he5gX6ZQ55XsGJFt8hfvd7u18YKdHY3h",
  "key33": "36LTbj1E2ZeJ7P81VC2DGQZfwemdcvetbCCuHDTZjjpEQFtmmjhPHWXqQQbc5MLVpMe5r9qEqsyKSkkrsyykYeE2"
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
