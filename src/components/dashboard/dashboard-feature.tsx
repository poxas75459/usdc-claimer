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
    "4e6F1M6MRyLu5mZN58jcEkuW9RhiTsHzMAmmkV1s9YDVMzUhmfAeWqnNG2JFvt3RBiw8rZvBmnjXN2YNCdBev52Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uWK85pZQXYtYu8hu7JYP6ESpJXnLS5pD4sTZhWn9FUmPujzTZi2fDJSSQuerK5WaYjSauJGfS3APtE75VbCbVGa",
  "key1": "2M77TRbCdZt5bqZM14qMwZhppvprSC1DpEXdD3G2dJxzjEJ1TEKazdf1Lp7ytrroafg2ujANJka3GYTtocWBkNH9",
  "key2": "hAXVVeeRgUB2m5TDxEvNghT8a1wmYne1fZNxqS37bUgZgF3sRxNc6eQfPpqAZyqH3kQABE5NdCRRRJdnHvjMkGB",
  "key3": "47C3PogJhBoM33JG7wKu5d9ncxBnjyLn8N7PStmtkvhFzxboWvcaWHxs4KxXyKN5FMbnziC2Zpx6Hkzctt5mYwvR",
  "key4": "dfHtcap7Tpmqtf5C4ugYP9q8qhdS8hNQcaPHzwr1YPBkJnLHuqwsjKBETXkRVQQpKtP1pNSAMvf5UXsCsJnnbiG",
  "key5": "4JhBwPrRX1P6BEyytAwXySkHfXiGroL68DhaQx5t2R7aQDJgPMTvMHaNhjkZBMCCyP9a1rY9AE1JttgWgro4Z8uT",
  "key6": "5Y3vY1vJQdrMwAKsbfbR7GQN4h5bh8hBPmiYjsYiyN37X6TH3YtRE3rPXsrya41huXDiNKoYbe5r26EnpJ7HiefP",
  "key7": "5ZYzTh9n5JrZdiXjEEJzW2zC9T6cSo1c12fvaSB8xsbMeEgNzgVcnCd4GNJrm7T32DN1yQRTKGJKVNeYwNDvC3f4",
  "key8": "5ht9heEga8nYNz9DCYNGe2QL7wPdCusPXaQ91pozJP4rhegUcgdd1CrP9pqx2cwWwZCxYmRJtKBJ59FhusELzoms",
  "key9": "59zntxV5Wj99W1Jkpz43SR9ebGfT1WLssF2SBJS2TCvdLknXuguchRc43xdqXdnD6NN3KTHz4m8vEyxkV5Bt8mXy",
  "key10": "2hJzRakGH2E4he1iQBX6b3n6k58AXgbBL1dCGqMKQWQJrBzp8X44bNAawgXAy2Xu2wFPG2ieiMkgyehtcBoaPnxQ",
  "key11": "5s3d8gVwAbypxfe7xJhEwwMAmE7Ca7CxV5QdUTaHhrgR6rLpjeWEYyNTvKnrH42JxtKKgh1v23ZK7scogfR2uQj1",
  "key12": "5F57MxhBc2rJQWpnRQKs5EDXsGLS7ieneX28Rzo5yZCZ5iY67wFUuK915y24SijA2mspmdDbww3i96BXKouGtCqg",
  "key13": "8HHCghQnZeDqrHshgJzQE4Z6WPsbkhJqNJuWhZ6WygAVvAUZJp6VAbkgxHXVhAr3SX5QetwHKAtTFnXLfNhTdjF",
  "key14": "4tJ1U1R2EZwmq2DuMsxZ7HLdekVkw3XkEHw5EuCBWZ3t9GYje2vJSoQQAZb2MQeQqjGWGjb7EXvrthKSHc3a5EGq",
  "key15": "SecNjS8c9YRDaHuXb3qKw8xqimFCtHHYRPxtCUi2Dd6whxiHV6zLbubgBX8yursS5TaWuWzLEiSYs1jFtQKNuu7",
  "key16": "25SMn71SCZC64d7AhVMurzdj6in7gSwvToU8K74yUju8a7zDSd4E2AMmcYpY1MAAyu7qd85PCjj9TT4SR54ShBBq",
  "key17": "4ZP5pmC2vGAhQZ13rsMjZbyoqXY1nn3eK41gxP2cXQsVJsrZ3sU6YG4hqdYpJhZiwzMsDp81B3SwF4eaBk7WHQJs",
  "key18": "4y4Zj6TrCMW8L1p9SFuC5H28XUgK9AHo5cD4akC512q5fEttPcxniUHQYBQrKWG1TvDCBKgzTH6oLZCoXdXfDnks",
  "key19": "5hdtrHVm2mheR1aM1p9nZaHePFb7S4t5cYu8HzKvwRk3KyXxmkrpoABFkFSUVMLCsFKmb5FUTtHQUdYHLR8wictR",
  "key20": "ewQnXpTxNCcAxVUCE8ioACepmfyfbcnU5SHek4hRESfywaxze7QtsAZeHbZ6Sf4NGBaH5m7YwcNr8B1gQNKr9Ep",
  "key21": "rBX4LWsSpARWyKjky3qkSNoDN7ehaEcg7a4MdYA9mRJwqCJyBJnJYpNQ44vKPEhVCVevwpCegn2heb6EkD8b7od",
  "key22": "5Y8i6T5C7yZFJqjWQmWD1c1QyyD3d57MhqiE4Eqt81BUzMtgTdunbsjY69d5by8BkkXaaijjsShq6Zx9mtHJ6Qh2",
  "key23": "2Fz52Awb3FUYa58mBBgTNZhqcjBL9DwrqMCn7qJ7mffk4xzSptR69sowPX1PaDVAEEfRkTDVdp1SRGd2F7N61yKL",
  "key24": "5csXCyJtqPDgYynFJxEjXoGdYNknJmkYAc2c3YU1weoXVfjxPmTjW7tM7kZYHSNd973fCCJ5qTGVA7eyoXG1DvY4",
  "key25": "4rx9En28H6T7T9Y7DT8A1BFZRTxUZRFvsMPuMhcjegdESkMcD14KP1LxDm3f5WhibvJSAg4bDfFu1J58tYWvnDYb",
  "key26": "3tV5xngRsec74bESADokhQtSQfdFtKm5p9DUzgVvMc4xNFtEtdX2Ws4R8qoLynNbkWzMgVsWJ1nNoCbUiMjDVAR3",
  "key27": "5sq1Dc2cPLMe5uTnuLh1jRHKfs1qYm1GrChhQmRTMnjRkJNNpBna4KEkvrUKeFXcz6dUWeP3B39QhDWYBueR6dbU",
  "key28": "4ebgdRGFbX29CeSFCZHB1VcDVcSGLvKeefDiLVcoxVXtrYBmizwuce1FBoD1YakhjcnZwShQV3jjS3saX7GTSa5S",
  "key29": "4Tuh3yQjWyfTpMn4GWhBJtbPayPURVqjDiLH2ieT2S1uHZ1Qx6KjR3uQUP4oA1mCYPd4Mj87pMP9Xk1znj2FdRkY",
  "key30": "3BAn4cvNw98QSdfsBing4joi9vAiChb3mqcgutAzAsNyw3FUa7Ltms4C77ptbjyRMtfXPw7jWDP9HiMuun8wNYhk",
  "key31": "55afgbKq4pX5dMkvou1ntG2yb82vnux9qvdyahNeb7mNNyyHcX8R3XTxYUJxiD9ugTW4w9KNHfDnpUm3MNzXnmQK",
  "key32": "4mooiMvVGaC1xyaPxRbsM7nQ7eeXeRG9GbxR6yMpiwFE5nFTbb3m3GG4uVbjs6NE4qZwjxznSFrgtXkfsTJ3TmUH",
  "key33": "2TNeGU96aBMoup6HkRtboCjnLFzXru2sDa8ZMBDi7VjSCiY4so31TpZ8d2sPtPxdZwMwki3QimsYwn8VAFSogPti",
  "key34": "2DgUHiZqYs1pd9HyVMaZVX328w3qhFUDFVwcHJs9T6mrY6NJGggw824gWopZZn8BCBHWnHNUT6Ep3JBRb85irjST",
  "key35": "36zsE5uqYghRWrvoJQcGJt34nwHVcwwv42Co1XXXvR8RJpocZVghMFKLL7ACdVu2M8pXtdhTVFjWJBvAKH9FppE9",
  "key36": "2Q9aXBdtGNrox9dn7R5UkhW3chmAjYaxakfqXXZAv3kC3R2uyabZJSh534AsDQfSSwpHY1gpwVBWmj12rm2zgtnK",
  "key37": "4rnRYkTz472vP6v9HwGwqaHatb3M4NCw1imLCF5NapAiRh7NKYBotavU1t455pAB7V6rMaKAR2kv17a2fodFp7HW",
  "key38": "38196K8Q2DWhLciZatBnugWB3ueaJsE5EgYPwu9YW9cwgbQsJC8QeCZY9JHwSkdQtiL3dZztuaoMXbpvR6gVizh6",
  "key39": "65YES6hbLdfTBaTWmutLJnbNw3SiMQ5LXtzaNXzhFAtpr94GE2KFaR4SMuj7GPPVqVWYGTnwoYb46RpzDvoQWBpg",
  "key40": "2WWmVxM1REubDHijLtjECA5b2koUBakggHXKrr92i179MwEW4amMtCeAhdgFFzaHbtgbHKQ6NkQqjJPuPXUkhLaV",
  "key41": "2ahYwK8bHoDgaM2fe3grQFu8uwoUvh6HFJVzWfv3r8BoJu4TVKtPgtrwxZfDVR2HxsTkqJi4ekeHFUBnuhLLobif",
  "key42": "64S9CCABYSHaT5KA8YtUwVzhDfrSWJr3ujX1p3KtpsFmR1ixpkE9XJvZ9QKTevXt8WkvjrLBv5zpwT3Gz3yNd7ez",
  "key43": "5r5E1xsbe45sUbqG4fHY4fV3EMjy4DeE3e81xF5xT5TfsKp2r7eUA1A6qi8VQ6iWX1pdp6aEuswW6b5yBNodzgSo",
  "key44": "4PCm8bgdpfDyjbK4yRis13p5bfwbwHpcWeoE7zHKras3mRLMdRdnfJAxemH1y3zB6Frn1thFtxnvsYGbZ3g889NE",
  "key45": "2i5YZ3i2bGTvYpQ5443d1WYAmK5J5iunnzNuQtkbmCFtwJvLGo9GDm5TSFoQZZ69DZqs9SeuBJAWVa6A6aYFR6KQ",
  "key46": "5aKBPWwWctRn8epiBZViyeh1Vbro6oUf5Ff6xEcQBgiGwfKMiyF2oWMdeRVfd69TN3hxsZhBYb3iak7TonmAJHaQ",
  "key47": "22NG8UT9Z5haaXmNDvzXwQDJaP4wqUSi5c3T4MbNQJTqDZ5iUJUEBVMkaLxDnjSbuHYCk7oAETM6eU5Cn7jGqFc7"
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
