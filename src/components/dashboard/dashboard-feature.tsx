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
    "3PJcCuZvZKNpf8Kxt2fzAtPhNZ2D4hsYQCt4jUw9r44JWWnHrCu1MUMqczdJvvRWGnNMvyu6MpG2V36ALpVkiTfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GD9DqWgGoKJxCTw41J1DGU5jZwsGszvzooXLyUBnXP3xv3ppTx4YwpU5BLUQMhAM3dNPUkBtMwWTcoQMF2Gcqbt",
  "key1": "5GzHxUzswR7Up7RUGFCb7FC9GHHimqeHEx3Ag3X35pJzrumobyJU3x2pxhURaMbh6kVJVPQfWbjUMW3CUhE7ULcJ",
  "key2": "2SozkG2zHc1nZhn7SrPLp9nQZC7JCWr7h8n3C2vs8vFNScauofnMogHyx8hT1dTPhCgkQnKg7R2or2HsDjysZCp9",
  "key3": "4zkPY7yFbA4LEdSS6SYtSm8FTUaiPPXFYee57UFRTB4P2bZUeqw6QBBeRtZzaWVk5EBiorqaRSfX2D8fZkj8YbzW",
  "key4": "iiZc1QZsuFiZ79vfSF4AtKZaXvKNPz3dr1w5PAogFuzqE1G5ptcaui4Fp3q2w9fEYSBAobXr4SAgo38Er6GP7Ap",
  "key5": "55WFhBfLih5E6hPFRZSEKJxmxU5xmqVBaStsGh4EWXzCcYfEDmDQpSqS8ynY9JkmqtVfLY4eLMXJyY3tbpazmAoW",
  "key6": "7ibfADPFTgBD8c4jzCQmhKerwsS7rs7mTGB9VMvjJagWdtk51uo5yzwJmtXfFBi55KRcHWpdmQahK58S42DL9xr",
  "key7": "2AdjCKQXiNwamtstYBcspGtXXfMR8toH9RGQSJGfpyTLm5xZxiqbBWMbC4WZDeKkUKjKoejYu7A6XvfFYLQcC9u6",
  "key8": "2sDFT1HjiBFUuNH81ooDwVnzQSjRfEoyGnXKfFtZG1z9f6cnYscGEctUBgQJ8KyZiyfxFeMk5QnrzXVrxawjtyYz",
  "key9": "2EptHyKmXtGxtFJa1MgwTA6gt7X6pxDieATXZGc1wGxS2yukTa9CDi9CugN7pEhyWWgDhpqoVac9kkqpT23kkjVt",
  "key10": "2pqn1SqGaq87XrnFMtFHFrjPLvZ39neMJ4LDpTGoa93XyV5LaXgsw9bqbGTjGApT71ZtRbxms3Grw7yp4nqv62Rs",
  "key11": "24L6MTmr3ioeAubcZmU2cUw1T45vdyCwVEEfxzAcsFV2UhXEMkXAh51S1awEJqSXwP85EKyYAcp3hNV2EDCTgqHZ",
  "key12": "5iw8tPwRLSCZMsfUnPtfGytMNyPLsT65AEC4GvBf5yZa52iGNes38xPftTqwvcMTuSFtWKV8X3XAgnaRVgGWFDdm",
  "key13": "q7hEvFEzN8oqq6sA6j36FWYNzauJEvyaDcZ3xqVqyYWzJp1NEcdCF9qxuao9ag3YCuHjdDEn3Vu7hXFLJQBGGL3",
  "key14": "cEwND1SMvbX8pdJitpbe1Pmu1V7FDrtuxEqKei5eMtDtFv4CdgqnYR594fXvgbt5hz3zo9p1anUtepbbNi3Epf7",
  "key15": "2q8Bp8G75HKqD6zHKM6U7EkdF2dnfEgL1kS2RwAa9msS47nFAi5QMTNb3qcu8HxvUc7WJUnbA2ndKKPG9P9R2wDt",
  "key16": "2WsrUYrkqenUoJ2wDuze4LGKGm66JxrQaPKqKrm6EfAbuuvoxx6p1K9PoouzBcEeHUuwePE3fqPVijFsHi8AtHWf",
  "key17": "4EY9bA6S3VwSDxY4WVYEaWqryPvFxhE45GtfQMbCxRXAYDo5Cv3DHEW8XHVT2vPRc7Xj25wop9jXP667pmcgN2G5",
  "key18": "VreDYNhfdGC935C862ueynPKjuAfz4cMT7v6wTuverUU7qERwkecZZnCC64kkoEmvjKucXntxNAeCB3REUwvoVZ",
  "key19": "4bxRVUMtkf1mcrwHGi9oQCeXQAZ33dE59ZsuNJQs5zPqTXErpqudMDNA9f3WsN5ejc4vKgYhQpEQgvD6tnZycdnv",
  "key20": "3RQ2AwbzRzEQt65nZuY1ApdTWBNfkj4S6XY8yRt55fB3ne5RTA6G38NXMf7Uj5LfiRKyEBeFPAbF2nVHN3iu61Xd",
  "key21": "RK441xgYqEr9Wz6GQZfnTqU6iNHGsrCH4EDJrpMyD1HvsjGK8FwS98E8LZcEbauPpdTQ59dWwjXKmJvDgSuFGvw",
  "key22": "F8Bi8vwS5BrPnoJCeutLopX2ZNpgaC5SPFW5vrUuAi8yBBm3mMVjKXtu72NTnEqhqTsgzqkPyPcUX8gxsh3bmUH",
  "key23": "SHZ8EW7vzthAuBY8eV5NWLFYwo8qJXJqDcguaz26tFjfa4gdqNZqDUSjMeL49AAR2YJBxhn5TBckTwF4MQBiJuu",
  "key24": "5jLHoJ9je2BqpYQKJDS1zVjWhyXnQEWUqEbwDT5U1b9TmM1XKTiYkbjbV2DarmY9zQ32kcnSPu2bMnaUz9Xf3c7c",
  "key25": "4c1Rqs2T3uhV9Vibk7CKyCKTXAr1BTm6j85x3YHexve6Sh5nx78JzWSzap1ENbhgEZ2DZiCbXztAgYgN7j2WNzL4",
  "key26": "3ZDSf6Bg5MSXeKJGvpUKSbSCpf7YsuV46DdKYQc5azPfqMPaMVzDbP2B5wLVV6GPEBs3YWtY6fR2hhkoMB31sQev"
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
