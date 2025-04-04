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
    "52bbww6UZLqt4wsv841R3D4W2QcquJ4Dzx8XK2MZEkmToHLJ9Vp34hKWwKE1G1wKwGrMf1d6QoAeiHhUrH14HfNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPSJrqBcGVocpAwsPs4fXeCr41bpbZCBZwz7XRNd9Vao2oGy43UwTrozdBuXwJj9c7KoYj7d4igKG1jFLiJ3p1A",
  "key1": "KyV3oyDs3kxbP8pzc4gvBfD77ZuxiHE1iktX2KJ2L6VDXEvszbeLah4f6M36H2Cpy9VnBjQuu8CuYVfNVsgU9JA",
  "key2": "5UR2BiniPWyWxqjJKoopr2SF3kBtbYpPvEG2LCNCqX7R34VBtCnhtSKzX8dkzmwpFKAoA2rhhamvPonQKB2QENDw",
  "key3": "3ePR58GU5zBWMw3EwQ7Dg1mvJ3ZvP12Qrmzz1t3Zpu2SHkg4BAsmtc3zCpD8597JokMSWnyKCvB5Rr3zaH6ZY3ct",
  "key4": "4ii16nZ4Vfh4vPNikMr8p9hppWXRAVqzUTKbHfMa5t4Sk3C1X38mr4vC94nJyDBpqZpqiC47rdRNnT2Xrmr842ui",
  "key5": "5TQKC1BNNzRzNUAtBVnm8ky7GBWCyUubamfL8asnRgxjc92TVABEJRemujNwCaz2MAW7wokT4Q3gbY1aeLibiLhQ",
  "key6": "2McJVvot4aXmpTpSU4HjJbuagfpVyMDDTKUTaGzZgfsm9GijdUEfYKVx2EQTBDefuiTs1YwFS6X5EYbHB7kvPjB2",
  "key7": "3XRJh7murdLEPTts63n6Grw74ZDVfM99RHNfuTsdcqQxQUVsXoifkmzQkBe7684vErw8Lnh6A4ind8dd5qz2hnqJ",
  "key8": "37BiCokFoBQR4WwJrQM26YCxp8J2ETBnob2AZXWa1fkzLK9BcxqL1zjXLCzg3uVySTByYLYHwKwAQj2EqAkZ3Udk",
  "key9": "4JZ5RV4oiPa6Nj9ERhwnxghbMU6SJwdyZyLipicTTgdwEUMDUX1h7CxYKJEqYphNmYoZLapJyrcTCZPofpYjH3wb",
  "key10": "4vdrLUs8kpFnihHn5xLGxZUhZ6RSDCA49UEio6duZemEPyaFa43SvsMcQN8k3wQBriN9Y3J7rRH9t3CS7LWzcNwo",
  "key11": "4oP8pmsujhFwwVCuAdyVwxEx6dq2dGTKk2EnEW1U5jCrFie2EHH58NXYweMg84zM6kJbARkapvS7LbEDCY22vBpx",
  "key12": "3jerMdy2ianoEF8F3MnAkeb8aBZTzRCE4Wys7uW61Ep4KuZYaATsCsojZxyqSwasECRQ8RY1Y3dyPJs6B7RqzcsJ",
  "key13": "FXaCVo9go7tCfhcCXXZof8zyt5kWmT7GY3uYvcFioNjVLFG8xsDdmGiEVgb9qLF3CuSkCJtfeK4xZ6dWSUcMs1s",
  "key14": "3yfL3xenyRTF25RjezMVfaQXYwb6NVt2tXwpyJTCrxsqr2m5iZLH4dE3efK2znxn45R3qnkKV5hsTAhcszowY7h8",
  "key15": "63RrrZupmptaaYcFnVfA6YVxcFy2WJVR6b6wqxv3gsfWGwQkxFdh5RLe7GTj6kR8mf2g45hhP3xHvE7uEd5ujwKQ",
  "key16": "2bGoffuPMN6qbXsks39VBjxvNCgk98ETEt6CtHrNYXoKktdTQqjwMw2qQnRX883AMq76MDFzsWcBLxCnXnyYGZVn",
  "key17": "5o3Smf5WGguUHJFHzxhZf3EgRXBdG9v6Ys41cEQBwtSSsmyH3fXa1bFLNTQkhrjfxF7Rs7UGFCz9oDPPULDobzke",
  "key18": "3rxQtX5G9HrShVxbwqY5SNgjRBdpRnADTzretCfhLW7w8Wr9h4btoTTYPfxLwTqbUZACBtQy7zraGcPcT7EomABB",
  "key19": "5Bsn3355CkvGqJVQ7v2pFAg4dfEJnND4frNfUS18qK2Z7JrpfaDfJtFTnb4HMjH1DMC96cFay1qphkX2jMo6oQU6",
  "key20": "5BJkzDp13MKiYpRbhiqfDPGwzZQssRDL8NmtQjgecUAXT7b6ARz25uvkCXbsJ7FaWcVemq7XA9Mtfz6DpnoRRn5d",
  "key21": "3XQ7g4weqJZNCp9pfJEJ11pf4c3QwmrkfjaqfT5SoYvNPHYE5yoKZZXZnE3hpYRjb2ZUFoVKkwfd7Q4qcsjgxEQo",
  "key22": "2PtpHQ443FvjQJ3AMbY7MQzoakgH9QgDRa3g59qVLiHL8tNxUd5YGuioKwrn4sB7tdLqFhaB46JepqZBz7gMRecw",
  "key23": "mmiH9LJ8FHjsxUhRZBFAT1Jr1RmPLzn8JdFGSeVMCZwEAUv4mBLVCTLmjjiEBPSFSyq384BUG2x8Ku2q8xytNJm",
  "key24": "2LHC2k9rY1kjFcZ8zYzeJ1E6NsgUuCM4mkoWd2NAntqdu2RJoTyFbKh6ZWKgiKvAzRSfZ1JDHJTyupDUEaa2L1bq",
  "key25": "28MUeLtNyhRWBDenBBfWarmWUdiovoqZpvEu8m1epNtUdXXn7escxbtiXU9xBx64yUaeferXiT7Wrn2KXgrwuzWy",
  "key26": "evV4wQ185U3mpzKvtqHSUpmVZUUsYoNx6c29Ek8UUXKQtHGrcyU4fxTX2j1j1Ch7YLx34c5mgaa6VoyBEV8L6eK",
  "key27": "5gXNsS7N22FpsfYCu66ps9j5oTc88qDReX6GjaruwguijxPFksMCVJ5iNGqPQAABXUMzcXNQw6ajnHpVxyZwDhzx",
  "key28": "QQKkt5mLgYL4JovYTGVmg8qLWR2aXWcPGGKsDU6hFEowepmrgxFoYvbr7fFjywnB9QbgaW8pkD9NFEgN9cC9WWD",
  "key29": "2sdR9GWVLJG2gkm6M1K5YWnL3iw9aeAM22Pm8g9B9xZuHgCxDkjjxaTsExdp1jz1QncKHpMvWzcA7Xd4Ar93umur",
  "key30": "32RktbUCsAt77ZNbbPSvAqJHBuRjBAVmAtJaUkm1BWvKEMBkD1nn7XCWCWqm6ZHx1jEBPiBohmhtDyahbuPM4GpD"
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
