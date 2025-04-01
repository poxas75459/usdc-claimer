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
    "3hyrG8CALZXKSgcTk999ghCe8i9NMBqumvwQPYabzXE5M7hhX5cDuUgY8XaPNL6315UdMMdgAho4TRqGGsZAkHcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cauRXELP2hBtqHuSvxNMePpFjMW2Q7JzPpLEbKHD3bXfiGAzhN6qiB7KHnKX37A7LxQfuexxiMvs7qo6nmrDdqx",
  "key1": "3NJK3RSLChJgFZGW14Kd1SQe2Bbw8eA1UXrF5EqVm3mVkzRHcaZtnqnVQcNJihgHvFP7ne2iVNZ4Efa2ysj1vhPG",
  "key2": "3EEEV93kYyHdqWfHckA4xN7jkGdNgd4icPxjcvZKhNPi5Nyi32V6myd95kUTBou4hCvq7b7ESUpUFyT9hg7gGaC9",
  "key3": "b3PVpbcQgXJaEXkSFJMsy6Pm2HkwewBD6FNwCeGLrL4jMG5VALan6rH3TksQ3Ut55owVg48wNCuQhdChXDY4mXj",
  "key4": "5tbXgn86818hyZEbWYMTVjrqMVjXNwdwvhwiFw1xQp7S5gJ7eAQfpDxMBsM4qbvWLmm2C5w76uDYVRW7N8kh7xz4",
  "key5": "2ta9jLYDkQQfA1VBTmAFBxvuge1VpppseexQjPXHjfWcrfR2cVpfkmfxQVKpL8gnr4fXC7GdTPfY8wR821YaKx88",
  "key6": "5oCaKYpXELFXXo1RCNLXzo2ef1YqUvjDwnPAMvfu6cekgTbawXEGCicGiYzbBh5sqvNyo17Qq61VaYCGW7p4sxMX",
  "key7": "3h9kywBRyGPgoWG4n37iET2obdxLLejKozsL8NquFtHuSrsDNVcbd8FXD2oXTyKiveL53pB8BYikiF5ajLdVBPQQ",
  "key8": "LbPsEm9MxFDixWjZKmhFTy2nokaA1JribyewEyNMKUbDVsmAYEMF9n3pLZEjKMak7WP2e9WJ26jPd9J1rH4uXCd",
  "key9": "3NnGygFg771yVjNEe5MojcYZVDqfneKe8Ub9QtdaqV2KXetZE5KdU66UoQ5dux5s9CqvQ7aRtKSPRChZ3PSp8CPf",
  "key10": "bKTDyV4FZMJkdPdU8eJmH26W9A1D9sorDUp1h493P156DMSprXDVyoMNeoX7u6JXbMFLDRfoNuV3HdQyf2VfptA",
  "key11": "4ktoYPTQRXZKnnMTer617NeqyJLH9tWrHz96FUcdrVztaNdGxyMkzRRizzayb6im8uWDQJUTtZ231MkD2msDeVK4",
  "key12": "4w518dD812dFqs2ZV8A2aheSLQQXPsDFNKjUTNmYpKj3cw7AXDSqyiWaSznrRktGJukxhuhzrQQM7Dh4JeeyhYuD",
  "key13": "2ezGLmw3eTpoyxhQAgPy5q9SpZkgBah6Tsutmt77ruJYenpcssTsyAhJWAmBa66n1oTZKwTacoM62Pigc4kpfB47",
  "key14": "3Ry3xp31rMQdxr4o68v9wFTkBD24gT12poMkBTUCyQaMAWULEAJTuNUTdomWcWFABjvXGHb7RkyfbuDzdtD6LoY5",
  "key15": "3dRGmj7ieXgFoK5wwD9hAadc1cebQqz7e4jb7koP1SWmgh6GRwuYA6FTrwxm3tKhvmyu7ktUvgy9CkP32aYaRiEb",
  "key16": "5rmPqoAuDFn3U1oUSZzeGNkd5XmPXxfM518xXJA79N5Db8oaWvgHeSCVhHA2DG2CaUZ5FRY88MLisaixHV6iX4aL",
  "key17": "GxdraNXBn847wqSLCgBTuCa9XAtbF4TDg47WfegWvG99iej1rPDcELc7P7ukbyPPxKhsTuzvri6FPUdq8qUwJ9r",
  "key18": "QYYpRmKjet8bPYC3w1uPTMjs1j6yQf1HsNMtNV5ziaxYGhiQRcPYgv7zRiHj4DuDTj3tM1K4BXUBu7HkBmdor5E",
  "key19": "pK2wCNM6eujw6enmye2KGTTw9vTWXcJf2kCeMa26HpUUfRBccaDLNkzBLFCfGTBnfusVQDt9Tjq5ok7NaAsBBNX",
  "key20": "2d4RXWSESoFjnYrXyq2Qq24MfKTJpbNheifEx4jdDxFJvqKufdxcMRskB7q9ZHiiPwtG1sEbsadDAW28uoPEQGYK",
  "key21": "46Qf9qqWbEPxkrqrBXB4TARAmyEXucA33AWTUak5SM7QkoG88EXfEUtmn7U8APuakyBAsCCRP97qim7xBbaY6753",
  "key22": "CiNuqZX8Tsn7v9RRAz6bDAYpNdEBGQaCEQLQiWjpzk2pGH57kAnVy4iKfv8sUM3XWyjkqro4W66navNV629oU34",
  "key23": "3f64WEN3t8ZrZH3pwu2RQoPKqsqedEqgePUAq9CZ1UtiYWLYVeFnhoC2arsfDrZdqF3q93vfa5HxybTN2JBXVZyE",
  "key24": "5Ec4JZr4qoWnb3WyvKhv7grHfN5UjodFoYDHVNfHY6MqgUvFe9YDbrbFDMQYKNLX9BxRUkxg5UahbDhgYcsh7gRD",
  "key25": "3akBg96YNfEQMy87DqcWFcVeoKnYGKg1AtAEgkq8otVcVYX62wJm2Dj6qxoaU2KwBcq5TNr6BF8MmWYczJrivfJ",
  "key26": "YrBgL4tG2RMQyat14B5hTooz5tKDUB7Y34bExGdXx73joJPTH63ouZF1jHYhJd7XsVaGdjH7u1Pf1f7y3pxSSVM",
  "key27": "3pwk79ZDHTSWCBSCX1rvKgKRPsRSqdEz7Cjg2x2riKoWgE5FujYD4HiZ2RYYVm9npH8WQhD3t26qYv5UEUigEBrt"
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
