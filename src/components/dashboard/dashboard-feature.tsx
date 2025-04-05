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
    "2RCQY1j1RU9payXW6LDhVMGRzCAxnTEreXjWEt4pBRTKCoMQrRFSciQ7Hut9mzAMyQE7WWwBFN5V2bVSBdzosQ56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phJ3VSThd8QhZiiFxqsXTzZLMbgLYQHhxFezhKHfoxrQwn3uQU2u6XRbhFEfawjxHBd9y8NSmFHSmjWfxEsTg2t",
  "key1": "59XPiPjQvywkHZKaTriUfXGnxwQx5cwpuyEeE6YFVvFhP1znvu8nLCUh2ZwCWF8qRsigeFqaLfY8Apeoq6o7aHgC",
  "key2": "HouV1DDFJkobTJr6wByBthgauH6A6KUGgqsWeP2nEV6en5fd2BXR6FvPcE7ofyNxCwhDBZ1635vDqUUCrVEJvfd",
  "key3": "3UwtzSaz1DupizYGbXdypenkp72RbpASNGuNje4PSD3f5iEoMaLD5dzkBf3tiL57YY4PLpaGQN8qCQqPVd8kSknF",
  "key4": "4pG3KHdcwEnpv6Mr4efAjDwiQSew8eZ1pbwtgrDLAdYH9n4kkGhhton2q5BtrYv1igo4MZojaKRXrkYikip3m87W",
  "key5": "4fQNpEDn5fqBHLBsr3mpfZobVUSACYbxowNLitk7v5FZQ4x3j9SeEM2kbZT5juoQJpnq5sN2EduUADeo8WknkNn2",
  "key6": "2YT6VXoUS78xPzS7M7Fs4hXEv9BRRZx9XvMNqBPNxGVmtLLCB2BV4w4tvaB8RDK4kSbp1RsnQxXcPGntbW7u9ZrY",
  "key7": "4YFN7BABrEnfUoiXV2KZPNy8NvXC5Lrev2QdEhGNuqsu95Z3TpR3NiD1UfdkugkssrekmJ553DK1YtTHQ7K4esRW",
  "key8": "2zYQxrx6hWjznFPznBtDypzFQ2LeUB2uWmNYgvsbFnmvH2Av5b4kiTiNzMkD3c5zsLjfUybhZeNvsaU42TWCAg6G",
  "key9": "4g55qjrtbRX82homiGAspRD3qrZ2aQno3Y5F52PK14m8eT4yEKrZH8MkCtwntLCz2n6WxUYs9jFFr3x1ZFUgyEfg",
  "key10": "4g3L71WkfzRQbi7A5AbXmp2zuVZgEaj5vqhTEsqcSCj7sfiUyRMyNY6AfxNBGUe1onN4Jj2Y79pBEdmrysLcumiX",
  "key11": "aBrRh22YswaemHF2wa8X8PRwDnAZ8MxzEd2aAdboJqcqHFVwinHa1cTc4Lr1bKGc5gZytWpQkW78iMBjsEtyHeM",
  "key12": "3eEMgF4Pj8LCihm6LgDyCGE1SR6EV775mzUULE12gTsb4AW4M4U66Gx9bS9ysEj4pEXa18nQGjXxuM3JpjtbuiFs",
  "key13": "5h7BT27MpBXL7f9HpMe7KDG6bPr7DMUrUfSPKQwSvJeokunvQm4j7HjXZgkmPymaMwJajwcg6r6opw2CbB5QMGeL",
  "key14": "5MrDtom8a7786q3aiQq2L1dSFNxrwLwpdvgiQ8ZEWEJBHPSfp37UqNoZtmLjuZP7NefCtj7jbACTZwVeNWsoRvHu",
  "key15": "DHdfTEArxmSaQoZtJcdbqkmDcN5LTVaaEa8gugMQW8MG4dbYSrb4jkqLaqTmc5iEYXNjG7AJfbHFgRiXCEXqxD5",
  "key16": "5DjoJsGTvPneoWd8CZFoCnzCAoehirop5y5qLW7Lifd6GhXhsqRQFxAf99YxxXR4vg41QVsDakwrLbjfSM6GKtKw",
  "key17": "2K7Ae7ijrBAYpZ6y4oTHSmdZgKSv8EdH6E9AYf1ZZu61bVJqPEPyUPdrzsMQFZBPpuSXjJjJw4r2TLxsL8SLmnzH",
  "key18": "5SnJnuBtF4FiDQtKFfeAB77Loi4ZNXeZ6NmwDqRZk97qtsccReun7ro5ei7aBoE8iDJays4GKmbv2a5GNdM7onHy",
  "key19": "E4LWcCjgcWCUV9KWCVKvBQBRVHqLm19294sXrfZGoHNCtAEgEHQPpyGXoGHYRNUs3zAwHV6AQAb4Zheb2vyeK9j",
  "key20": "41XJk5DXtA8TNCdS9Mgky9eDYG5LcXZPzTqBKQxamrxEwGEnSLRungwbi5RVRwKV3HAAcM1dqr1pZr7rU2nBho2N",
  "key21": "5BASN2k4wnNLFxn97GNteM1bFdM1Ky6jv5X2uoM8UC3CidKxSPocuR9Cpxdr4APTkAp5AVNKEoWTt9hdezdwFimX",
  "key22": "5jTSFgaBZTSfg6PnsGcCyZ5pm1yNdWoB2PQjw1kSeGXX9bp8Z45p4mHfwqWPymtqhtdmdVGjvzqkHpLQBSxKKnnp",
  "key23": "4NafquX8Kupwizr123W3AkxKkSxT2WG4mBVKTL1ffsvbvbfAcTnx8Q3YuMetRXEewA8USyiajucJUMchd8Z65ZRv",
  "key24": "4SemMvmWHmP9AbMuFvn7D7jpbTGdJn8NrQ3QwsbqN2JnVXZVWUQgrf6TwAM5crsSqHJvCwr6FMEGZjLK2N5C9K3U",
  "key25": "nonFoTMhcDv3PoemeQrpQc5Hma7Fswko3sbWziFzubcUFpFYmwZKJ5tXhoRQ2KvcDEXiwpRKfYkrQoRUvDQJLbn",
  "key26": "2x7Pu1yPhKWLsJGfcm8ChMgUGNM79rQVLzxkZFWtzuU8rAgW58RVipFKC2HkQLS9hAA1MHdjBBPCKpnVStGEMfVk",
  "key27": "3tzNMd2ckeLzcBKd1vQUACURKK6t7XnRXVC19etjZP4FJdf1GJK7hBXcsqwumRyAr5n5adxVZQ1cxQ6NReigr1qU",
  "key28": "YhfYFgFBEh6QZxDBsLPL1cz4Ue4bmkUUJbDkESQCtzFfn9p6NKGSsUsF5cHNFsG2QYkZ1nXgizcsYTJCHxgi3BN",
  "key29": "Kd3Bb4oX2sL5DDypK2QHCG7KHPEGxho6RZmtFdgQkXwZBKUY9cVKRt6gW1Equu5qhKv2i22p4BU1S8aJykDaSxb",
  "key30": "4ixWN63wvSmWpzDAGydoqYmyj1adCjcGTDEnuGw9hAx8booiGLdkcbZnunT8PniZAdtmCVLVXg6EzDhVTxA12fSJ",
  "key31": "8tjhGCVP8aJBYxK978ZffHuMi75aV2hFpADGx256ZTNjHpFMLnMTbCbpFd7Am7stgJwSjDFtFbWsNccK1vExXiF",
  "key32": "625q3xfWnGhXjXaQdJ9N6X1EzE9Mzi5v6nFKyjWwFWigXLSE7veJ9S6NLPQCADNAgcUT5ML5AcgxsXZF6aMyQssH",
  "key33": "61NQ8NhzEtePFhMiQttnRFZjsx6y9Gt6XYVWofDuNhV8UVxLBK8yBUreSB1GsBnB4XbEgm18XRtx7DLqqijHdaA9",
  "key34": "3zEXtMKghuFp1cZpMykR4DY7dnhpV3hNbvx2wuBShPxpR5qDKq53M2oX6GjkZuGxPjBU6FaVEB6SsD97zDDvLzLb",
  "key35": "3KrYohXGAzNhHXF3NppTWw2hDBs5UTE63t1vF9ftZX7Q1oc7FdNrvAJbQGLBYh1kkQd1PRzPHB1GrwzU2VjNJntA",
  "key36": "217jkCT4jXEvAHyD9k9K7mF3fgKTVPumZ6dbRRHi3Atg4Mwa2Gir9WjnLHerTiJBjJpM2TvLVJVRYX4D2AMwDETz",
  "key37": "saR7qMUbCUTizvXZFx51MmgZtQvaiGtomAxCx3NxqrNebYkorL2oeAmGT4QizBaGh9QXJ86fjtPdDEyLDf4qMWq",
  "key38": "8wi7ECEpjCeSqG126KwqCvRf3qKRNLfpj6GoBpdg8gDMaz4gQGdWmDdALGsd2P3RzVPXFdMwJX7GLB5veMQuDJq",
  "key39": "5RAw6ZK8e686qZk6vRm3Zf1fuR5vBBaMnDvYh6C1jL5yFQphymBKU1jrTHMBGmJZFcVnsWBjbNYFvbzLStosSiHd",
  "key40": "3Cr4NWWm6shKvpwuZMe8SMBZ5xP1q8rvc94wGCqgzC46wGPJvZpzycHNwM2387e2nPEeKSkuH1YUXyJVBJCCrNKg"
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
