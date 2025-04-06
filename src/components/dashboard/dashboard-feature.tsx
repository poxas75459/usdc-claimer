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
    "2bMZxTWwgH9ihW8TTtHYk6wTpDpa4LvbwotAnGeDdrVSnj3kbKniDfgkoFfGM9MsQKXHE5f7Rg1qZCV3Ab8uuhq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RU33bGKSfmivrTNxMnKgFpgHvcLB745fV4nY8GSd3DTf4zGdsWpzkAHy3uwMGa8gPSpNieDD3XeSvXC9VFNTws",
  "key1": "nnJB2btidL4UqPMNpVECCRLLHiG8QtVex7j5ES83JWgn69rfG46sikVDrk13TxaanCh3zussDtqUJp42GbNf12h",
  "key2": "3JAnafdXcYfyLQ4wYToiCVs6jWWSBcNzsLiLCv14pBHTqbHQUxXCgtee8EDCCcFRCfiLodbZTB96tXiQry1SMoBn",
  "key3": "4bQTbA8pLzMZZdtNJoEVyGUCRj7n3yE7ZmPfcbpaSvDUZvS6BhBEjHuRmtEfv1gFpGpgcJets5ZvV8fQYUHm3R9G",
  "key4": "45iTDLTqTfVgT6qHQfRsws7jjkd5nKNxUcPhJSB88DCcJuTaoXtNqDJgHkTfz3328Jf4MySW4D57GZtjgeF668rZ",
  "key5": "3JfgaRywJ3YkP5DWGe8VTNyHMR5thEmoTSA4k2w7gW9otBCwDCZtXYF7dia2djuRzPTa7SG24HoKjZMJPdfs6Jdh",
  "key6": "5FVwW2zCqCJkVRULHyyTsh1qENJZtN2GAaAuxFPyZ14cAHySTTCVE5Km27zD2aVRHLkVtUbFqvn46Sm1eTpEAAPk",
  "key7": "tUCYqKCXBSkxX45kZXgJFVqPjPMM1CjmpzF3oUu4PmXA8HdDqXdHGK3RAX9fmvb5dcgt3wvR3SHvyxY4cR5Ubvg",
  "key8": "59qmKqHsKqiLrDsr8tNwUvz3QJCXR9BAkuFVCcK3RsgAKo1MdhMeimDgwmMj9bbX4N6HuhqrvqoMxWkzFBePFkWV",
  "key9": "SqdcdLUp6CnGcgPpCs8zFyMg7zAmGx2iuM4wE3DMJEAD17EcNSs5VX6MCXSt3jMDaGYugzzo43iA8UQRM3mLKcY",
  "key10": "4AL6CZQym9T1UxUtvCN3ttLBUsdJ1PSAoWvKj1JzM9R7vNBfbBjeNBJjAvWKYYqp96BCAyS1N8siupYJVEZyAWxa",
  "key11": "5E8VVGzhTWJw7gUrw2CFm52Zj5TXcrV9uQBC6mB4raxfcd8zv1MEb2zAemhdnJW3rJrT5okvPJxchGbz7GnpBFzr",
  "key12": "6nPKkBTUiqF6SVDUrXThwJ2Xtj7BLQvcbvLxxPV4wWdkm9RpyoYmNk9AiUSKmx5DY8UjzpFS4wyNjwWkweN8zNz",
  "key13": "3sqyZYhm11oHyHip7tY4VN8cxaSyicJsoPrtMX4dUdxzhWUwQ2LnYr6D7ZBPWnpRisub2F2gXC5zeyhavKE1w1GW",
  "key14": "CCEdFcxuwHa3Az27B6p6PeZXjLEAqycqG4qkYfw8Xb6p5fo8j8P1Nunh9q3P4McHbJ8skQGo5sMkW2e1NEuidSV",
  "key15": "62Ciz3NyYpfuCZAau6yyd2P9zhFfbEHsKZRW6JaoJ8Vhwp7TLA5svD4rbd9bDdQijEotWUeRWfVenZtQU5G5PY7N",
  "key16": "ErKNE64npe6uED11L2aDnKadgYKXiYHFgdyrCuoPaH6QHtocD61TJQMeFmEGtAMujWS9WDHLqHd8FE4S4XW3vQt",
  "key17": "2vuBgbxoCMHHcB36qNpBB7j25NmtjQYSAbUpSaJ4AUEdXoio3vxSz5HHbfkjL8g16GNEPe2QJJvfEpasK1AuwJ5z",
  "key18": "49BgLiNzXjxu1dCe2DdERznUrxpTUZBs54x99g6RSFJFt3vsTsVTH4AHfYmsxzUyw6WXepuek5JNQZdpJ7TpTnWd",
  "key19": "3vNUv4NFTYwmeutQHjiQ3fNHDahcc1w2qh64kHRfdoLNitL5X4mSpQHwJqwAAiipGG7x1vFfaGhejRpoGQVaVAdC",
  "key20": "hXJEjwLtHcW3YvQ6gxiesxKygUdBtadaFe4PVhybMup2CbWZf8hJJ6FpvXQPRVUdSKinPKTD8wR1RoNQVY636gV",
  "key21": "41tCms67KVxF8CvZ4pTBVPi4YCrPa7iSj4RiXNbe5i1HNbre6MdUiasKmGXZdy5nPhd1CDUYP7i9SmxwpP2qgmzm",
  "key22": "1SHFyvvwdyTzQkJAp2GN3kbS8gXefv8wQQuFzGcpSefsq5qHYxTtgHLCo3RTUEf2ynEjeZ51v22QHrH3sztCffx",
  "key23": "r125cVTso37gdPqjpQ5RVmHL4NAWqy7trzVsQBdK9eqwim13CPsWpXa1EWTnKaWMzJ4pqDayQhwCgYherx1ijfy",
  "key24": "yGzxzrHyp7i5dgUdbTqs9Jqg6L8LGvkLxgZvAB2vHDK3EWaVo1WPaAEFBj2dxsDqngfRQ5wEdnhjiBk41j4KFrA"
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
