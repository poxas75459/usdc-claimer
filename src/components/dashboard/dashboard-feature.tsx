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
    "2h2WDCA2Qo6bsgnbFCNRiWCseRk5VxFraV6yuenqxMQrXmfEceHPFhrLz4GC3ZFkRa6bS83TdCintySN27fLDugb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGLvJXvE961kTxam7TaiM5o5jw9ALiBH3faus5NKo3qvvQmmt3KjeeBCjm48151R26RgLFWRqEo8vSv78m8KsL",
  "key1": "31z89VoN2WWxqrddjyBLgLJGPZy7co5o4u2HrPwieSqJq6EfNqtWXi4hDGxYjqxuLGChPsHwoYAcqSnVpQxC4Ewr",
  "key2": "4jceSZKQn33AxMgngLd6H7SSeZy9piN7tBEuaugwes5e74L3VRff6zAkDrdUGMSZhbJdKCoWKFWMtJkVQpJ4WPmt",
  "key3": "pmhtjh3kToyToSECPDA8Cuar4VKqcpAvU5Ry2QzcKWNz4xmeJy4KyAnQqArJShw4ySzztpmhiQRE7pW2oYyPDAw",
  "key4": "3wmPwey7X4oHjP9CCwNPBbC1w4cWqcb9hV5TizNMJiUPdqkdVDssQoACZs3HLHV1AfHyNPH1T3GYyaiYdMt9aHbw",
  "key5": "nHijknAFEMwwSaxAPfsVWSk5uMvFgwujBrMgvXLKAwS7g5EDTGBxbuK5exkVBzKvhTNGVohVPp4SCysFZbJBmY1",
  "key6": "4iSEhoN52wiTjxHnwg4nHTCb8PqNXE2KXKRPpKj5EiUoS9aFUha5zqsugN6ZQ6DMnP4Wh3PkRuDRdBW3E52p3sfp",
  "key7": "4b5n6E5ZH2sFu5Md3q9S9e5ZY89okNx9zePes3eounT7PX5Gu7Q1aFjDGKNr3Fot9dAEC2KS9q7SBNDwt5yRXSmD",
  "key8": "4C7AiQqzJEuqrdXmDr62BLgxgabMDsZiVeYQ648CYVaP3GRzaTWfTvCV8wgP9RakwLUU2L96VgnxuVGtz5iM6F49",
  "key9": "59xBn2ByqQXyNQFfx3NCa7HhyweE9tMMVFuWFMr4AVKeqHM2empo1B8YfNjRrYdGYx5DBQjWLc1HmyAGoKR6Wg2Y",
  "key10": "3K9eU3osvZGnxdWQTy69dEmUB1gFyHawBtUxmnYnbHweggi3VSrnzNogDb7dJKCXzJZvnBqvVHpToD6xNU5tovUZ",
  "key11": "4s5do9TWfo85wftp6FRKxCx8j31hqG6mcwStmvSCPXEHwzxtn1WQ8zTp4KeAdW1MxcgNMVCA6dcsJhpGYPMKQAFP",
  "key12": "5kBZRCCYoMFLkkYVTRx6FCUhBb8ZifiHaWMc9WMQ7qfEjRi51dVwgUeWNzaoCfug3ueeF5VtDYbjd9Q8WwAkX6fa",
  "key13": "5KNHbxR2fiMa5QNJPSxCvqAoSJT5GpRYhtikuBZHXYYrNLw4R9QeaDm4w3ZQnFenLjez5CWQSafVpraWQyqLCcNG",
  "key14": "cA5BafHM3pDddPjHzUZC9pQ6YJqg7pi7ZzizWM78tERjJt4iUw4M3NfUAg52cNkpFRrQKzrmFFkCendijZQVWNz",
  "key15": "3YxwKcgoBo6oSvh9ZvL2mJEvMvztVc1T8cWMWrFbJsWjpXzx4P2ttoF1hiVDNRALU3xmE3hAVhkPuQJhNZGauJmK",
  "key16": "SKzTkaLDP3nuVWoUhhxH2HhURr15zA7R9Dt2RiWZqd54YfmhERwT2TcVAuxKi2hjWVLbWGKcfZ4oJM4A4mZVx92",
  "key17": "29DkwnXDhL6k8cHzUmdF5RsgUSy4tb8UQVvFW87RCNwfhCoziGHEnDbueUjrRoFxAhpHqtBojAeTg6HrgsPSRBSv",
  "key18": "4hu7xAvCjaY2YxMiPqSTnDe4DGm73WHQXCcfLpmq1wcMUJXEZ5LmyqE6j6o3Rig854mBjV2WUnf5mTsovzUghRR8",
  "key19": "5WHYDfyydLRqTgHv7fXwCU275TZ6KvvBzqi2a3XHHG7PT9oNT4KBVeJFCmkrY8ZsEqoeX9w5fU4FEux1AZCdYCGH",
  "key20": "5tmt38arVCZ6zAnVkMgbVzFGZ5x6UG7x9eVpeosZ6SUByk5DuB8SasKZwum6tbsGp55xF4wZg7kpRo62qk3ULmUV",
  "key21": "PMyQ2aARSDrKew49f4ZRgBgy5WxCyD6vgT84uSk8gBRuLxg3Xz1pQNxz7wiURUf1mzVvVz8rYqHPpa3uEWeVZB9",
  "key22": "2Wmmb5mKy7QodeCvoW5UZANBuFJXyfkg3bGfD1zbPJHK5BNNniWWM9h1j8rCGAQQGkGApBsd21egGnZhYU8Hvg8T",
  "key23": "35ARzKCnnybND7v3jotMLpH5FjeqHnvvrGHBbgB8oDvy1bUGDtSMKLioMU2GhFF9sRan7eyEKdmxnkPfFQqVDdyu",
  "key24": "3imvXFLYyM85WyoebZxKuAd5o1nLLkGnRixZ4oKLALNh3ejCLXdFXN6szbS7LtcLXvrFFSdMMxgiGHrAJq7MXpM1",
  "key25": "25QfSxQfRErG8p9wmYe3dWqBoEK8iYuDEuiMxK9YDeSRPgZBami4evBNHPn7FpMg41osCyGs7wqpfQQStZpSM144",
  "key26": "4gn7QJY3bM5qxWMUTNYejVENcdR7FmR3qEZPyovzRynCy9f8RfKwVjVMKRS8DMtebNsXiujAVP54pwGSBrAWC54Q",
  "key27": "3BB7REuS6DfwkLKBWTG92DY3p5WxP85fMoWh61LNLucFF1xnNtRgt6uJG1TTn82CrwJCTMEMd5dGkmhLq6ydwUec",
  "key28": "3zqGcNVJwa8hGS9J2JEVXaqVBDBRpnW5XiWX3n6Ybo411FUT2sqie8nvzXFWMjVD8nZTo5DDy6hPpYHSE78f35o8",
  "key29": "3T8U8eu6sgdNo6zrtSH9v4cP7QEXjeDUQVmkQwzRe84r1DxigavfEAnHqKGhEMg9jEQ23ouztSjZR689JiGbi437",
  "key30": "zEXCKSoKpen5FNRhgp49M8Bd2t4Sp9Ax5RgFw8oBS9Aj9F1vfjCUAfAZnRYWwEmRvSGFv4mt5dAYCpkYVuVny1e",
  "key31": "2ALHz8UUFDPfnouesvLgonoaW1bxTnmmQ6nyAMpEb5ESGen42kkZZJDPFwDwqhyb84PBHmBkqPneN1wkyj2a9yJR",
  "key32": "yz69FAazeW2LMiGRRLFUUkZyX9MPhsJ5qHw798bku77AG4VrtmPBdbshLGVTF5yqrgCitVsKi4v5ZsEHUscezA2",
  "key33": "5cb6hRDbcHmKbtCQiFZ4U4j49hxMJZ2tfxnaZmbmrpxn3DWyfpNeWCQkifAD7veSu1ypKAUh5YuFZNYeHTrnsmaV",
  "key34": "rERAMkfknGFbCbDx8gFkxsdLNjVFn9cacg7yVL8twY33AyntaC5tuH9isjT73VKBE7eb3z4iW8o2hx5VN4PvxxX"
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
