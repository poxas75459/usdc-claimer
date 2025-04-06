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
    "V7BYgmCpvVKs5Dss3BvGhFeGAeMETzALwQnq2ckX2gBLSYMcgFpv4T9NWRTKrp1W14p7fqDxWBjMcdwcV1cPn39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfQaxFQRyV4M6FRmvB8tGQw7ALtvrRkR2sXHuHuw6UdorqCcdNTzeHVSywvorgSKHbwcr276f5opTosGjfvQSTD",
  "key1": "2Pn2uYeR6xC6VNbgmz4puYPVNNEZddsHRobTQsHdQ5FLHvwZH25brfbrpY1VHGrDrhgbwemZparvSBCgCevFmp5u",
  "key2": "UKcf3Qer7MpR5qYaHuDSVEt5K34rb1HQkjXaWvBioe4dPcqG3PpmYBcDLfkXiLUpPrHonDymMGcYR5HE9o3QBAm",
  "key3": "4yXaZUpxeAJRZ5HAigJQ44xQUV9rPwUk2Xjxpung9wQ2JKbMQaUsLv3fJBkq2v18Jqq8Fgw2KVasyj85eDf6Htfo",
  "key4": "5gAo6cPeM2cvbKYE34MFtXq2cNZ1Lm1t1E4BrFiBnq2f9YvVerA4JEbP1jYH45grhphPTv36JMBJAGjQXXEeSaKs",
  "key5": "4cBrWPn5jNAzgLWtGw3J2ptXxEE6pY2hLfctWK8MpcbBUm6huDKeaJ2vWS9KvR2fv5tE575B4YsJcZJZpJ7mehPp",
  "key6": "2PBx44V5Foy3Y1Z4Z7teYFUREg9BpqZtkojmuA4FhWUNUDVAnTDqUkc58p2R3xGzgj79Z9njwzSQamPqqpK9bPvW",
  "key7": "R4UbqBVuypnUhmWHxUR7JVa9SwXt2skLk7h4K5queoNr2xTu2NETyFXwtixoX5pPiviMq2Zkq7RPQjSYuajrBG1",
  "key8": "dmYZUY1gCEqgwxNNg2K9kKi6u99xzoRj6eMnQkbvzwRh9UXrcteenJmw2RgqhH1EyEuvEGN3ux6KzDy7NMHsBXC",
  "key9": "3AK1pE8vvHjRa2EjcXjUA3bV1GbMQVx6B1aSrDzPgq6DtruatmfqDScRnaCNT2oBUx6VLWZPjkG8y7FzkPYwomwU",
  "key10": "5cbdsQ5DwbDwMigZu4A3yE4iwkEM91WWgiekGnU1rWE3MGYpwfLqC6gt9h9MbP39wgv5ss6q72gqiS1LauyG2D7d",
  "key11": "Ej9tCwwjkfz4dCirKMQ56qFphZVS3nukFMgUUDmHqgdq9QRnEWsB13LDmAZCvWoPgdx8kFMhqXtLphbDLRPFpzt",
  "key12": "67MiuY7FY7nuiD6UYz5ES2thKLod69bCzuskBi91FiGZJCKpp1PTZXFRy49MhiNS1SX2kPvs67m1sHc2KxDDYyqR",
  "key13": "5QAB9tkMAZk81qU5reqLJGWPeqGj8mN7FuUzhDhgu294aCP8MrmuRYF3SXHZcCJqN464uQYpUPcQ4JiE9SYPmrNN",
  "key14": "2Q4BkLRrDwNVjncEnk4M7RhtKTfp929JyFxBexKBYWgCQK3JTP5u4xm7kG1uvN6AP3aP45v5p1UxKc3c6svGDfhe",
  "key15": "3bijnRtP5HWQJvieV5PbvJwhiCy7ohKme4ntSeqRCgXaSWjKD3uH3K4JXhU6WXsRS4dDqEL5tFbPkCKA5MZGadEh",
  "key16": "3vHp36YBQEMini4PVYgHpVsVXm57YaUcvgiAbfzjswa1MKgxmxCuZQmZmyyCxS2F1RaufMkMXBpNYVfVjMgQV63x",
  "key17": "5fmcqHFKHJKbnHi7yq2GWjDBNJP9V85dHManPh2A922WNTZM8JA8xFHWoQwm9h39uppDzf6gFcnCuJXV8mQQmFkM",
  "key18": "2SG9LiCUDnPdjnUzxGPWtLs623ioKgNVirPn7cNjdQnAD8arHytKuGrKTJS1r1QVLb3ENQRwi4s1D36DUQ5VArY4",
  "key19": "2xPaic27Cf8ZXuvRhtcWizGUf211dxrntYRs2xg66pzQnuovGpyaZKP13KxACn5RkeB3pYj5KW6xtPBoxgD6iYtv",
  "key20": "5kLJtSAigXE54XaY7oE1KVwmj3eZAep9ZMb4smNZiedt2cgrgwU1RetHWsrxBXMW7ZVxfuuGy3o5S5DhnfnWay78",
  "key21": "4HJp4zMDjAGNR6ntAiEJCmg4bqkiacRGf8M1BNGE5ZhH7qPcu5vpiBbYKod4zxYM5itseeKqkLJpmadb4MqC96Uj",
  "key22": "35mNEyjMvL8tCC2bMFsTk4NLiTUfshoiZUHYQN1gmgJJjNKDcqL56SBsUm4FLLesN19S67Z7G9ttNkPM8L6AyYfQ",
  "key23": "3DMPGxP15Fbm6jNpSoL8NZppxCqkqAo4VeNs2eDDCJwzXfpcTnSUgrGqfyKu4hb66Ji3c5sQUXZZgeUJJ6WXyjPA",
  "key24": "3XKLycqn7H8aDRr2KVScuKnYaiRwYYDSd9CddbWUrkUuGp1nYXp4GBuHr8AUf7txAynJEZt2UKVKcZtvy2W3crHZ",
  "key25": "64x6W3NpkfRgLAvbZtF6sBjgY6SjLq6GsqvHF5SxLyPYDG9fWXvrhqn3kurXujZcc6Djx9dd6VMXTn2AU7hjrwGo",
  "key26": "3y7pVAf3zu8QMKDqo9T2iHGxFP5Sdp3QH8bF8XowvmdaEmMbWznoBmNYr9nvwzs8Yq94ifu2ohF77KjFPT76KWu8",
  "key27": "4PXzgKNqF8C8oUrit5qVMp6pAkPbXFJEKHpyaNnKmrq2eAufFyCtGNa8jvTg9o8KEL8bukaKPChjLrZWUGU92fRZ",
  "key28": "2Tyw6SNNhGLfBSagsu15DH2pTSRhCQReHHAJ7ZJUAnCSS2p48jM1ritAX4ompJcXQGLdviSR1XTKz4JoU11suqun",
  "key29": "5M7RvLv8LuGhUD3K41xW9sjAPMs2cSTsb8JNu8YRiWFu3hjFaBGVHwf9EsxfYPqthHFwYoupWzhMcs1n6fDBkGVw",
  "key30": "3Nm1QfNtNqLDbbYjmzov3uhF1emzyHRVwEUHtMhWgzUCVvsixZvoqrEYaxHgjYR74MB4FFu6E2ynB6Nm9LHij54D",
  "key31": "39i3BYKAiSmBb18mUXMpkA5g5UDRxt6J6bgpjkyvAD4yw6HWeM5u3Mpdzg2KPrWKWKkw6nBdM4MmwRoXeiiBAvBC",
  "key32": "4VwNaFtEkNVbW416mG4ZhmYkuymTcANpnj2CwdP7Q4dTy2F98seErVDXZiqQhGNzDNVvZyY4xQotYRmNGesw9tEj",
  "key33": "3WFCj6ZCBjM6mbhMxQ5Eyq84yup8vP53DxxXQFadmhnbchJ96kGUmpiN7MzbRkuQ9F4NJtXiMdgXT29EtJstdN7S"
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
