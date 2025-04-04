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
    "3Xy1H4tGpbZUWL3tyqAGh9ZaNPTEv6teSXZS76zdQsxHvUi6JFzAukSPcQFzTmFcvXztcU3TtLb5WXTKG33r8ydX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jd13DgdTbaHugT9HJxDKM8cP8Q1av4Gy5v1F9qoDjVTefYTJQUamgMZPanfCdKyn8REhX7oCLY6y9NeZ534yUgE",
  "key1": "2XjRVj1oPZzTBJdtNC71WCrsWUUb1VNn8Zu7u1FM19uuH8xLj8LgFGFwqaRC2ovdezwnzfmNLwaASzY1tg33MpMZ",
  "key2": "4nUDSvtaw1fzjDoZFsRdB8pDisqjknsqGGXmaEaiaizAUzy2kX1f33xi9gNmeH9hmxj9DCDiy56fEETkwFwsTpS9",
  "key3": "2AGmy4mCo95nNyDW4GtUBY6BJ3iyedQGFRhxxMqenAXGtvH9cUhoiVmpd2bfhkyKFXTcxUAMpfumcQjVkcArA9PP",
  "key4": "588XC7VMm7W26Czb3CJUPvAf5v89vcunf8fFLi6MDgUtHdR565PipPsk6vkcLBJfXNGkuuXCSi4doa1zWNKzG772",
  "key5": "2m3u5AKVocq2cXNiRvkWJwBRScrCvYZe4tzpPhnLL5chUWjFNyHAtXudTKx8TaGtivEhoLofLZFGvyqxkRTk7Tzq",
  "key6": "czYvEHeKyfwtxPk6AZg1pEQ6XTZW7Hw4YwEcxUorbiUhp9REHo72X2eWtzkcSnG6PSxKJY52iEjbCJdBbtb8xdd",
  "key7": "2k2Qrjxk8xLTnNjbyohKTCsKvxM7bhYouEjLmggqa6qCpkLrx9SvEuPGcdsEKhvA8fug1XU1mpfHbxpBL3sEkUyd",
  "key8": "4ibgLcfepM47BWFRAULrLmgbxTdhNp9H1TnwVNiXdKXFDSM5Gb1MLTyeNqCYpJnWquaxTAnK4Yky921YLpUSNjFU",
  "key9": "2bH7H6rUU5NP4W6VU5VeKi7E9sriqFwG7U2MHdUqPhfg9V58mV6xvqoJwRz4gU6m66rozS2UcxELcbtzy1Tdr9kU",
  "key10": "2225gKjWkj2g6qvVM5XD6S1LkpEq3mcTANKvJjAvq8uMbZE5jcG7zZe4EQ1TjvnMB2ep6vSGF9kfQR3czzE6m59q",
  "key11": "h3V34s9m4txK7mH2ePYKfdwKZxWuqEdc2QouDNc95C2AxApG7WWg64RcuASdGD7LDYowVMygvdsMX1puRQwF5cd",
  "key12": "2dbze3UCvd7NT2nHGspi2FMv46BkMoHegBTuLm95kV85F2GX5pwjxGwiGxMhevYngLMyfe3p6yi7H5Lj85sKBUKq",
  "key13": "2GiVUqhcmKVhhTi4xtaf9NPywN4moiV7bbYexr4kR1fddW19B69CJywC4taRY1iy1o4CbTxH1SvKSDaWyQFt2Fjp",
  "key14": "3exEhrdzhU8N5xCeDjnY5LfHeNp4C3jTJmivPPc9KXKWr1Tmbssk6EtpiZwDqvAkyjaLWA2ds8Vc6QqxCywa4Fqr",
  "key15": "jeiD3amKZBRschLq3FGqDXR4hs9JPjs21jksmejMU1nd7Hb3b86LLNUGhtaQFjVqUZxD2gkSqHv9nMCJ8t8JAn5",
  "key16": "444ny86nkDcHkMZLkSsC1yn8JWKCnxrUnSKvodSngoCahaqDNnJahMCmzEZ1tkNjDFcneP7MQrERXG1GfHKFCfEE",
  "key17": "29gPCnBmVcA6UFnkTBZgRY4tfRDw3rCinxPn9PD19xh7g9H1ex2RTxuAirTz775FnbTxRyXSfDCrjcM2tFZ89K1K",
  "key18": "35kRyNX28s1tkdijXN9Xei5GyeY4M2na3RgotgHNXzh2E7JMEnGtsC8CE18bo1B34a9w7TDCAAfbyBTgTUVe5tiY",
  "key19": "vvNiUW6AL3eVH3e97JGmh9QFKwMjGrkjEh8FLoQXxqKr5u5QEiDuw3AsHwCwNGaoV3jGw8D6vKqx5tLK7GTmU25",
  "key20": "4YSiQpr4eASiNraFZCcCgtbQFbGo5tyaoyAYvDHq9RzQHx83xyd4SPiCkE2Pc5Y5PeupCPp5spMb9GiTUN6GWHsS",
  "key21": "4gH7hThpfLnomMEe33hJsicqLxCCZiQb2J214pX4K3wbbP5seECMLSLUomHynf249am2PHxVzDyiBiuiVU2NgE2Z",
  "key22": "54474WpuhprQsJFEaTnLgKoHmM2wUYbSJ1TS8bPBzj6Mo7pex8xgZ9BZ64CQCb9U683SiC7GTuYx2utwu6WBWbPD",
  "key23": "66Srhz3V3FXrdTbtM9PuB9QfGMR6eQ4yw9EF9b6fpsVQo2U814uYied5y4e8YvwhTGXGZ9b5SUofmD7usxoXcBNm",
  "key24": "B1PQfWv4156wUX7zGRwXSEvYfu1sU8cgWg6jW7XV4LEYMW818sbdWf7kHseQKiD5SkbMqYMWqnBZqXNcQSHrcpb",
  "key25": "5vzZ9P5pUXCLs2wetu8XbDE9BHw5UHDXRdmxYLk5hJzxLHkh1nhP2bXHV7s6nSRPqyMJX4cCzuw2LKv5Fdow4GWQ",
  "key26": "2AUdKPBBEUD5Rkeej2MuDQrbXbqTAnBwgi8vx74ttWpL2BGaXPFv8cKyoEwiJXog1UNrjNfaRg52FJotxthu5CAU",
  "key27": "ZF15V3qDy8DwRWy7mzmckita7bTnoWLwNrSnJsAXo36zXAkefcNZKvToYR1z9vaXKHdy59mgBd5wCRw27nM8yze",
  "key28": "2ARiA8PKh6ZYttYz3QCJvgHKx99MS9sFvYzPuvPwvxihgV6FAHwe6mcs4wYQW4mXxrj6k2Z3BXYaaCBj7a4rrPbE",
  "key29": "hhEVBnZEydggU93nUPdUszWuV4k5e99asHNH5NXnVzQ837qU7FchCf8MuV53hT2GkByLD9VGMjWdPponVkNo929",
  "key30": "4PEC7osha9YSiocJamWAWu74Z4V6jG51aQsUgrMFWkzdwcej3T6ifDBWG2ZCtRMq4aoHkHzjGjWP4i3VGF23EwvD",
  "key31": "4YMZMp226g9ZNJg8wgKXB8dsiYryApRSR32M3VKYXGgtVYmgDjzVM38iHDv3zCxF6AqE3ogR2sneRLskBjfyBfEP",
  "key32": "5gDWB5mDE68a3z2hoUAbWFKg1YLASjuffmgyGqFfKbu6uoNRtsUBg1m63xoQDPSmJYDRHMjcM92eCkNpdNi3oNQe"
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
