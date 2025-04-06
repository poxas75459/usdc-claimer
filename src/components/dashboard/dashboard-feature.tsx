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
    "2Wyy1bVup2G7s6g5LWpS9ENjKSVAaTDvDosE5MqXSbxrYe4BpRpKDsDaEzoRYwzmZegwqtEZFPLMEDaJDeS8VSPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evtnP4K83586oktasSjLSjZbJnKEuxChEb6486As7tEUHBchq9w8vbkUEYB3ZFhuRWhuRsntw3muZz3GmBpdNCj",
  "key1": "5izurkaBKsweZx9aC4CmbLaEB9zp7WUY7sfD2Lj4Pu7v8m9VNCunjgPVnbNi17hmY9jmSdbkeEccTecncKhmZrjQ",
  "key2": "zmACq1j9daYfkbePGwAeD1zkWsZ8Q9bLN8xMe3NhvVssnT5rwPhDkAEroUSNG9rHH98CU1CQUFufaWGtfs3YZSH",
  "key3": "2xrPme1MX7fgwmRdEx3WSUxXveR3Vt31ypuZfR265jy6fkSLiP9aB9yu3UKFADcrca5PAL4PfZdH98t5DctmUrKL",
  "key4": "58XVenpjBphWCNUKFz4YkzKUQcCPpdu4ioFkm1wc9rvVotWGNRAJwTrTYgNHNgF2QGdVTQr9yMB3nPhkQ3BLogVW",
  "key5": "5Ku1YyjtJP8UmQrPBcgFbPfX4UH7AHL2oDWj1u5fcMzSkgzGP2gfFHE4yN2kn3f28UUAQamGaKv9w1Yj7d7D2BFR",
  "key6": "3YGmrVr8Si7LPbqi8vHsEvGRu5YmAHmtHYr24c5DpjkP55xzUppQ6NJhfZybiEQj62xdxLYtMENsTsia95PMP7kU",
  "key7": "NGPSRLFKKSc6dGmCLti3sLax2XDwxhMcrXAyzDHpFDvttpk5i8WpmWaY4ysE71tY9vq3t2mPW7eKCY6HG97zWcn",
  "key8": "3YTznfSneZYVioPu47uCVwtdBqqyNaGqTfm4Tj1AnEapAJwrZrSfbH998vDj8PrP1tBfUJ9iX2FnxYD3RvzZJhXi",
  "key9": "4h7SDNcYpKX12Nt2h4dFqzTLwXgi7UBeUxURMs6zdWGonPmVRiJKNZdKHKTTKUUxH2i68JpgsiFkJuvHSm73MVfc",
  "key10": "42Aaxjkd9HNJYBzfX5R4GfSGuMUE3CT5KzNPzSwGouE91hid972nxff2pKn2rkKX1cDfqVXFJpfHzjHa5JUmBnaD",
  "key11": "5pdn6fqHLEnMZpb8cbGW5tSo87t7xrJ3S1WDRajPF3veTEC2v26XEcT6LeUzxEdhCejZMKGcKPizuLx85e4PErjm",
  "key12": "2AmjC8RguNESoqE5MVxEaUKU1fbLGFjYTKrFfWNtMET5dafa2oJuoA2fV5iFkNtCUsP5wbymjKTdbGQ88RYYukzH",
  "key13": "2uMg27R7ZQ6FBF6V1R3kSWTzxV2Ks4KsyoVyR58cewiaNGeLbnT17Vpz3L4Vd8vLJdSopk42aXvvNm4Lar8myYnb",
  "key14": "takck71ApC5fJ8kinN36x9DRrdDQ9xtcUNCZo2BHEzigwUJ8tnViABwt6QorC24rzonK5DoUhEZv566uHZtcRx1",
  "key15": "4vnSAXMcwFu7Js7PrzhzBW5ESxCK3JviJDn9gz8Aj1ucN1C4adAPWb2qa5WJHsYeALvf3muFNqQZpo7tc7JrxZQf",
  "key16": "5bb2WhwpXRVV8m8QctaCB8yJrnedT149TqU8bxosP1JhwSktmqEky5ddGymG7ssHCDCdtxLX4AbD6JKsBHbhuRYm",
  "key17": "2SV4HshgPHq1vUd5BYYPS4L21ahyoJw5joniPUiF1HynXxFByrDRSP8qZxUVkWjSprajQ4aDkDCnYP1Rwgr79cCU",
  "key18": "4tTxyNvWRHpcdmgY5owmKEFBUaFMWxKmpEvpZeAMtbDg6cnJgWmdJdGeaSdDqEHyxHEVVW9GHqJEBniScGY3HgDZ",
  "key19": "3SSLG6E56qZGqwfBZnJvR4kVKF5DuW1CJ92TBGvrCjpVjvx7aLF2zRXJtMfcCoDAPsLAcvv9wMceAPutSc6AmZ3w",
  "key20": "3JHR2MYJ8UTcHgSdBodaEJq4z6bz7vuWXtVfyj8bWG5vRAjnDWtyQkGiysm7ZinpEynHwBu8NJeGHAustqp6d991",
  "key21": "5ajZQ2uyewAMoYsisBRXTkkh5KPASgb4yH7kU7LCp9YG2c1To2skcFsFsvWxqPkrsqJyzudNB2CV7ohYjJPyeAg",
  "key22": "5wPfQEWAMVmM7zbpbFi2Zx6MxSWn2isPespihwzt6zmzgvKa6Kfxq611VdroA5bBhqaWMk2Pw36P4szThA9kZZ7p",
  "key23": "UDVLCUYfoUNPBk3uwvjhCagLaH6Efxqo4KSrLbgCfZRnx6cAZVQJHeE5PgoHScVCvdTKvZE34g8TWdzdVwEu6cu",
  "key24": "27iAQottixft7MRoqvykHyrRAjTtcrgoXqG9uDyDiPK13aVNV8kiEgh5rSfXWSVRNjQot3gQBN365Sy88YebDVRC",
  "key25": "5zmrWLEDxqQYgzJ9bcsc5S8X2xuVVharRZ81nc7XTUHUjpKTNNdiNEhWoxGmCgpxfiDBKkXyJPMCTHcyzmEcuBdQ",
  "key26": "3uDX984uYtaN1XNm8j2SayDm67AVzKppYGxTY6TDM3evtQ1WkwwbMyJstuoiXVN5QpAvXgVtjoWPXSRrPUSudiJe",
  "key27": "1ZwQS9nvy9HUKfG4XjFrYf5oKCyj2Y1nJcbfzDxp1H5FFWE4zw2JRhGsXLvnQ6MaAeqZ6Qs7jgkXf1TMNoMaDS2",
  "key28": "5oB7CW7Hhtx3GLxkz1BtzZRBH3hzVxe6KyVJG4PPeRAdmwq8s7Rr1KkuQcMJsC4eqtWSFi3nAuLcinqSj6vHozTG",
  "key29": "NAics4jr7o16XZoMJGi97csFji9EV66g3wYcxarLbhnpgg4yZ6bJHg8j3FApGf1CAxKoAqDiM6847HvkeWh97TP",
  "key30": "5h5hwoatAK1LrSJBa3sGuzMBTKdioYFbZAT7BYmkUDwekYvbeyxo2dFdN5a6hKyukLntMFXMwfSExFrfkRUKkaio"
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
