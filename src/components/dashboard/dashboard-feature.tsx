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
    "2qk1c1m9ggogWH7UmPwhyhFSDFc9mxPgiaAJBAXvHnD7Cpi7B7hMSUwr6GPCGVMV1NcHQxWxsEJvyUyoniYuPcHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLjSccnFsVhShXGsd72kxG2trLwwP2Xk6VypDyij3wKfeEVCE8oqysD1TaM6twm5o7qgDehqusXmTtA5in43EAj",
  "key1": "5qQaqeq8GQNWrfYggLL2K7bK3wcKgPAtUa5zzfihRTNG4EhKp56jDReBGxf1SHmAcA96LevQp5b2i2CEsBK5kTMM",
  "key2": "4eBMheNHNAGzKJT8cpNmKkhj9e2ZpN691FzKnepnJuUq5Rikejgf63uHJoR8UdciLQoh4AsCM9yNuHEkYWgNnam",
  "key3": "2AHBsaNgmL5i4bGn1gkwJyot83EwCRHLDpZP1BKxgej9o9nkvYrCEhgD3mmhRwUeBdpQBtxr7XGZY8AgEJ7ggXrC",
  "key4": "5amwhSSg26k4UGdXGzqAQTBuwFDzu7KoJyyfByfG48UamZDg3T9kYD8pqeQ9sEFieJ691HnnzhA3hhQ21Yteq8sg",
  "key5": "4s1iFZdYpWygfqciyyjXNTHhFv67auJP4udJTSw5pL1rJxsNjekG7oTQfsT4iV4jhArnEd6qcHSW6rURZ2vPSWsi",
  "key6": "2XQz5QBYGes3pL1rkdfxoYq22v3hxVvcMqvi3mGnGQKF9SaKWGioSL7BiunDC5H7tjwHR33gH4eKTCzi8ZgWJqF4",
  "key7": "21VnFazCb4r62i3kjDYGUz3WjWuDbHVk86Y6Ms4QG2rkCZnG7sJaaGK8WGW5ot5igYNwJtKUm1HLoRjzX8B8K9Pp",
  "key8": "3o6rK3BsvYEwzGr4CZK6GohQbHNriXocXn2718xF21USKqKbqopqJtsgUb6RS6bguY454hifQULmZsNnDj6HgLhW",
  "key9": "5GiQAQ27bcSvQzCJWepHEDFmok6stPZ1aeQr4MwXiU32fwMfbhDKJPwHarKRezYPysY88LUfiXq8ubTiYZBDKFjS",
  "key10": "37C5usMQHF2RQctGuT8R3aQHPqYorWVp349kaLEd6mxXJM44uBLJwbR3GZUqHBKjab2G3yoNsrtEERdpZdYBg8Gf",
  "key11": "2JazEeHgDeW4CmusLjhfr4cSPnNE6p582A3ygPUcLBCzhPbMYhoc2W7HLTXMbbsLtaNAYSDDPSUbuDpUFQMetEsk",
  "key12": "22M1QqjFLzMpb1qAigjV5vU7goCQW7ovTBL5YZpVhr4UnZCCGmN7k8esRYHd9WMBBooKsMryJenMSMVDHjk1uwWJ",
  "key13": "3gCUAGvRQmqdkmEMScsdh4UFWLkC3oK2VQUYpUQApyktpmYiTKYS4gM5dKmmYE6gkXDtspLtptqhAF9sx9dHz6FB",
  "key14": "kxv9FJkPpvbS6ZfSHipgh5waHnBUHFGDtJLsocPBgUZ8zxfLS5itUeXfWowwnwzd9ZQFUaghi6PRapYu4RAuuXG",
  "key15": "5htYUZb9YA7HjJop4HVpLDCJRRbZ9ph3JJYvrqp6ni6HpWRwy4MG4KMpAAfuXfSmBkKKwJDCDJeiwdpSSSVefZgz",
  "key16": "4bEKKsLQYWJAy3hju5yke2ye6srx5TKrcYtKc6Z6tYVhzH863ic68xWrxPSex2R2Vni86vA42FfwXGUvfVR6Jje3",
  "key17": "3KbjsCbX9AuDJfqGfXkx5ZbaA7hZamSeunToADkdmgSUBVMT3vqD9TS9JQ1Pn6AzfKmeC2eBdUsDF52RnhyUxk4m",
  "key18": "YYcgceAbPHcFDsaHD8fJQkeewQ8ww2owaBBNEqxYMgi9jeCb8jsHxJXnMGA2HcYzEpL3jyeTDP1Z2AZTLqqv72f",
  "key19": "3q9QargLB37rUCqU8eC8wmfYEp4TskkheD1gP5kbmba1wZCx78fp4WNrqJ9eKUX47FKb4bysMKStPySBkLEyA2q3",
  "key20": "3VmXqjuakoGpnXr164D9PCraZDUuu6L5T4Y5rbHHBMSDxVF332bBqaGStv5iUt5uFQA3GovuLH4Xb6Sh9NKw8zTw",
  "key21": "2eTK6aina91YR5cJ8HSs7yYEkshFXk5h8Vmyq7CZU6f166iQx1HiHA5UthjqcoXEFJsKVhZFTf3T2NZ5iMbAUT5X",
  "key22": "1EpPPj9LAwe1J8vBTmpmVPnhed36PsfwXLc2HwLaGNiVuZciGBtKY1kgWuZ5HtUL7bNuRzSrazfKpn9dKXaZ2vr",
  "key23": "54J5esWFvnJWN6mN8pppEykbYcieyaEKmP36P6YUvPDa98Cv17PPg2bBmp5iD86c98NgJUvL3A57EB82Lq5idsCL",
  "key24": "nUzCRYgszbjbmVXGnwXz4Qqe6Q6UiXGvwWLvyQTF7UkDvFU8XtFkEm1XbujhU4uuctvAaUVexDAhkMDTmnAFztb",
  "key25": "4PPK7Z9QLq46qHCXgiANC9QMndDTQukpvdrUXCp58ajHy4utH2WfXjF8sHZM1Z1wURrTQwenJNiruhST7joeEXqb"
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
