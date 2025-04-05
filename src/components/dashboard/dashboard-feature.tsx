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
    "33hdwUYj4kDu3pDdgXZfYYyLUk6vuymjKaECje7YvQRWdQM16eZFw3uMXqc424rv23mp3NnwkAjHT3USf5JsK6zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F32MN65EHbiYofgEuGAvsw3hSN17PFdrhPyzhVpmBbnp4y6MpVomEex23koB29coBRd1pnz4k94EgXwbgxtXf5L",
  "key1": "3pVNiFuM4nJ3Qdx2dxYMT6Vwbc4MAWgFe1intzoyavr5Eg8cf7PB8nqLHDwwTKwYTQXG4sjknDKy4KkdB8FYbd5K",
  "key2": "s4LhvLqtVBC1nNTvFwTdhXmz8akKVJQzzbBZ3es9RKTd5wcPR4trXkktEfqMcCJjSAUNrGgtoo4mcZvkzLD6a7P",
  "key3": "NsrbMUB8xFPPX4PexrVpgXENFfsbKRz1PBb2ruGAu4HcpwbdmH6kd2RvnAm2Bhnw5hHBt3iHPM7otCHhZwBbDhb",
  "key4": "4dsYdCh5s2Xh4ZgLsHSJYg618nvEaGwp7Ww6iFN9p75enXZdbgGHuSMrXmjS1ERhDFH4xxhovDjagNXkjMQwVTth",
  "key5": "2NyF2Mv3hWHzaucen1fJioRGzwEoiLFhu4dGy4RaQWRi7dcuRNUfhRhkdjf8NgdiGvRtmyT8xjqoTXogTx3Npxxu",
  "key6": "dETQzbvGKSnzwESEdbaPvS2ey5TS3wMQCLSRqYZ2hRCCw32ah5iKdJTwyuFFWdytep8tY8ifquoDZEfsY6ktmXY",
  "key7": "Z1VXiWfYhJVLpscpbxWda5MQ2uZmoN9N86MNV6xFaWfa5rLURbcnjRbhn7BGrF9Q4wpST6NVbRApp7mcCMcdyLM",
  "key8": "4WgJTUqxF3DUsH8g3Dskh7moS85M22YJMDzJTSc8hPQTJ4SkTPXnNavFdxyUT88KTsULToMJUyn6RzKxf9qXKYvq",
  "key9": "LJJUocs9N8y62nn1H9gui1UKXeLod5DotQd3ZHsyGmM3MDUuq2PbK8Db1qUuT3UqjQS6GhohhgJPWXABdU8ff56",
  "key10": "BJtk4LXMgDw18pERinBTQvtr4mewvx19jPeR8HJFdqJnuzUB4qbXYbFgoFXZedLdNspFmFAAzTHdYuKfdDFzAUc",
  "key11": "5WoEcf3BSc2jCS2em3UQfHDWxNL86BikeJ527ikmZKGVhfvfrKCohyux3pDMLrsmHnEStdeP82Vqi695PRbjQwpd",
  "key12": "5x4aZ3MUFBZywbbbGcYL7d9R3Cc97VfR8MAwwaVorC1ULrxRLBAqYVUaVCQK4yM76uiCsmmzXtJFii4ELp1NCbFG",
  "key13": "2YL5H3QP6rtzCm5U3Xx9g85rF5E1UW47QpqcUpW3x9ANvobZUYzd13HSk9uzigLdxLLkESZ3EUwTP9vmK38Vcdks",
  "key14": "3MJjQbbF1ndKK5QK5yjkj3gks73LWVpu4Waw9eLpeGZXUxuv88QvmT6RZgJdwjFkcCFfr4rEmvsjPXPs4tFNea7M",
  "key15": "2TG6F4DHPDgDZakMVTX64bCkgLrdHXGKC7eYDAUtJ9rjkbPoCuFkY8CBK3bTt6CwHVkvM29pxFVMbFBZUwMZvYK5",
  "key16": "27vz5svHf36v7yEA6pHXh4ySZh4ZPipECZscP3pR9jDgWbcZMmng3GVSpLuTKEJz7BvK7CkfPeb1ApnSgtsQyTkQ",
  "key17": "636dQq1dAW2TiuSuY6F3iZacj3ENtdQAenD6ddcHS4AuKRrKrM2rk9N58EXiPLTMonrsyxuUVTSKrfUVEqMiDE52",
  "key18": "8pmkkzmoyY1LrMsyGGyhaWU4pypSXwSR2EGJgrn2utBwWeaQDuw5WVSvPQz41cMRNCbx6qiph9kCMwpVhBzBXjN",
  "key19": "ZZiHkS3MB85fy4RJZjM8CTy6LEQQw1CTVxyiGjX3VdMNxFJpSPEwUEgQ4sNDCjuv2sGkZQiRaoWB3aLTuVGrsSj",
  "key20": "2MF822oLND8yt7KziLGwAmiDKAWYub6C4Xgds1Kmk7b2mZ3o2KnRJ97ZEjPoZUgFUcjAaJhyGFrZCLpbQx1KVrGK",
  "key21": "56Md7WYJkBkML5mpLRWsz9mRN2vAGXQjY692GG6c5fBJQLDFaGWg22ZrZKRygeUp5eXsrE42zMmnF278iWmEQeJo",
  "key22": "2WQaog6mbxsfkLmsULbNmfZoDAa8e3vnc9Rgonr6EihjBLEJdy4iWZ8641bhVDa2C1vRCjr2rd14fCCmRFcQ76PX",
  "key23": "3w4YcHHihnZK5NTFBkvrLimiXbFuYjwZqptNJx89Dv63uFoN4LpTVQGXcqBP3rMWebDXv4rkezcSCMEkwQ5gGHBL",
  "key24": "3XpxV8iy9yY4G1tHJ9MJAEYsJHvawCJ18V9RynLAHPYi3498gLqBksYaEUdiwTHQxcE39fAzaVpz5x51aRB6ikmf"
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
