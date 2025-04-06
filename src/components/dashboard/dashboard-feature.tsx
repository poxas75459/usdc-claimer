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
    "gXgAMVkdoVckbXGYNLes51xj6PqeUuiKxsG1srexLnZgjo7qWcb4uCGtynDKLuNWCUdSb9qwtaYEUvwdJCWeKMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JiyaHWGqzhS7C21novYAKApp1uWy7vfe2MXBcaLK6qEWkiVSbxXUo2L5DrMHZTgEZxZhFJwQ9ExJ7JZ5wZRmefw",
  "key1": "BAHFjtfew33nAtuYVNdc1WgVZryFLA7TdVeNtx85nPFV6XoST8ztVfHHhaPZFib78s5FL9FyepPcP3UZgdYwFDp",
  "key2": "2LpDPPWp7ApLGzzK1MueVftJv49Qa7kM3AyKPUGoTqLVmp59kbhSp5NmRhcq6jo8F141Vgvmd64VHDRzM93qZnKw",
  "key3": "57Xjqv6Uq37MReU9g6PJRmtMLxwPSPHuqnk1EYPaUGFnZpm74WU9EXVXHPfZYBidb7UAT5Sm4BencU1xEZVHKBeB",
  "key4": "5btfRQKGfuvHTpWUK2CbPHLe2uXzgB2P3QsFLKGZmTJNxNPHXBk3fTejfF7BrUx959fpkmD31bRLEWGQTjEBu3PH",
  "key5": "5VE75tyvEVzjBAXenCXNcNznS3jUdRBjNVAVsGYUvWWT4hz6SZdyC5rondMJuWd2Wkk35GaZypWQAuNWYejZQ3G3",
  "key6": "3YeAHCMCxnSuRFw8GMuVrCdaoShGSRqeeq9W3pghsgD5Noj4VGVmXqHtQHbZehPjKRrdVfyCfX8Mw9ej33z8rrQs",
  "key7": "4dtqwcr2pCrJooyY9SrNH1vqzNKae6QjaSpF26V8UT7Un9wTEnA6LffkhmjuRUQpgjeiG9xNKwsYwSTAmk9Q6ip7",
  "key8": "2tAqLtCy35u1eBNYNtBFzVVowRLTf4fCjv8D3wjtu7Uq2aqpmDYkv6gRUa2arzD4S7BJuMmRbooDxY2vZD8Q6rz8",
  "key9": "4XKyzEKLKnNgfKxeRDBPtwrYrU7oZkm6PyZ5rra8psHT2qFhLCMM1kgvRgR1e16dwM6LkShgVGjyE4RmERAPWVfX",
  "key10": "3Z35i7vjDtfkZ4PD4GnyzF9EGWreqPegouHQymSqRp8EdGNi1czLfqt5AiTi8D64HZs6YPtGDTd98n3mH57ndDZg",
  "key11": "2mjR3yh7K7QXwVJkVUkpgGxH5S46Z4YEMVD6dYntyq7t7mnNRXQQyjAaBMrXXvjug4L2YaXvugvU6Hy34uj4ZCpx",
  "key12": "2vqscg8xceg28Nv3hMQFrjQqe6S6gT9ERQ592CMzUpz2fk7E36TBhwBYv2bjXne7Lki7gKtMoAAbc11Yc44DpgzP",
  "key13": "54wpQW7BpoDRjpzumEkTNmPRo8g1YzU9WJvpob8t2p7QuMiWVY3zJL7ZHsgKjLo1HQ2B1YTAiMiXc5huHpdkZuTE",
  "key14": "2JDzrTL7oNAR7LEpL9UxFkct5Vtq7gGQxDrt3UhPRNKuayouoQbfHYf62t3WZzJ9SHtg87SKbmbTnXN8ZsLy1k1v",
  "key15": "kmdWT9gz9vvNDQoSSi7y7CpVmAQPLeWmrP41Joitgu3cCWHsBtdJ9ucBzMW6dRRjPzs6W9QqTt18EZPMvU3GCav",
  "key16": "YYdxLYb42QM9cqPxATwPNF7jEz4YNLESxx3tXbf5xX3PEX2aoCYsFrxVVSNBWhFai7YwT4xfoJN2MLZwhDg5mny",
  "key17": "3yADhZfbMbPzj77RogbMKTzzYVqJPVNyjGeDvNdSSTiPvGQw179h2Rh4fT6GjsVR5dKgMhKLV1UkDzLUN6E4YRBY",
  "key18": "22zK3dRrjVvEnrrrRwg34K8V1rPWkUF3Emyfqnpb8Xp3q3EuDkHTwRCSw7j96iWoaiH6D6b4d3GYKceFb5DpNaES",
  "key19": "4EQA598bwjwHUvpwpj1oVwMSQK8sNPUiQdNaHnpgHvgUjQ15ZppJnngL6yjB5y1r2meRzc4FUmqVHqceue8SB4kw",
  "key20": "5VQAurPadyg3KpNNV7Si77CczdqsWQYJr9ZA8hFnttbZGi3xXgRbcdBY6ygYxcyoDZRc6rEvR7NwURHQS7Bmhovc",
  "key21": "5XcTTbFswg21jar8oF4P2Kg9mWkX7A1Q7EkdowZiNQkhH3tta58w9WyjJchMVNJ8zNGUvU8QvUYNa3E9pLxhSKJe",
  "key22": "5mfaCxz6CSiCDRVQUbinMujQGyN2nEooaFrqComcRyt1ThAxbtczDZDhWFTGk7vAL22YDHqQRohwdf9fALMmo3Hp",
  "key23": "3HfJ78EDa1pqgPBJJReruAyS8TWF8v9hPyKu2ciatqhBDTwJtwAJNU2qc5kt5pEPsWTUhvREh33F9Vjc31WUXPMf",
  "key24": "2xsXG9cCACkcnN4bgRgwJVwsTKq9QL71FMQxWFwy1SViHnyczcdDrnP4x1qbkr6kQGwRCnbenbARnpcN9menL6iY",
  "key25": "PRUZqHV4bV3snJxcCnZWSRm1TunX7jyNkwQuTetJxXZduLPRiJUDAVpRECJVLoGtLdT8cQzoTLRB1f189NxjEHQ",
  "key26": "3hWTY9GwagUBqzpzA8isL43D7CD3ryk6UMdaufQez5onLL8wNjJ1YGyUt8A3y6yyq3htWV2sK8qjAWq8ZtRTLDyQ",
  "key27": "2YfGsppFT7zaDWqEwxBGHGJBG5hVTUfEEPMAwP33aQYmuWyKNXitKQzGPeGjAebSY3JDwaSCsTfTSmFFB2JbLy1Y",
  "key28": "2FRw7VuKg5iLoqiK18QFFi6nHmhhjEW3NBoKoKFo96urjN7xNXpiycYwMji4Aj16fpKtTh59K4AGpJvZ4uDYZxVM"
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
