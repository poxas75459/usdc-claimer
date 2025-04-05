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
    "5SVE4nvq8Usv1PHFrnNXGQ7U9baUFvhQNcQsXfMwUoooU8W8TPnwq1A472DcgW4wAy31nBQXSdt5oGrtyBm8BVnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oH1qJWT9T9Tzrwow1dD74kS1qYgtPbmbcxre1otLjprV36quDEvp1p8bmuEKK9LcnTUhYPLpQUS2eCuynvQZDbZ",
  "key1": "5MYMLDudvUYUqEgmdUSzVc8SeYRZgqmJ5azpdY3bgDtWAa58jEVrWkkjGkepkveJCv7oVfTUshozRN6J5oijhuwh",
  "key2": "2Qt5DH3cusDEnEWfFA6paMhC5DyaLKRBKe6ZkhjPXJZxd6v1fZGDkGyNxUyYzb9YhtNUpKbuLBNkVsQJNanRF51f",
  "key3": "4omqPVgyUHioyB4UtfvNP4ZNGgK4QZ4qC8oBAdRXqkgTGoAPhPPmo62iem6BLitnp9yfGDsFjcE4xtcbDXVeYLGC",
  "key4": "4T4522ieNw3K2wELzXzJ2d2MSgh6HnoarapaH9dXiti6SKEahkTEyGX3YcEbhxNAzRLYqQ6JWTg2CLCaTsEUBi92",
  "key5": "4FPjs5zYpzHttpufGi9uwaBuxPtVekEo9mKSTSqxzfANCznGYdW3Hk2uYNARsQvUx7uZ2rvgdvgeDCLwKSmmPXvg",
  "key6": "32xwTRwGbdB867ST1UsFxBucBmEX4b9GuXA9275JWkGHxz5TSTpnBuRMRviBHvK6kGadwRawQQQshmcpQ2RMMbsv",
  "key7": "5FQFKS4EMFjcB4iVKqyHtK2saP38JAyCYTrEAA4z3FnE8E5dBgND1gAYKpS3eN4A9DR183k1HkMe1rFUvgXJoh7k",
  "key8": "4P17SeHRsj4nCHbHKZy8pjd1vhNWxmC5S277RKBABkXq3j3qcUyPLqucrCPVCyTp5zEjzMNtaApHLwVv4UBi6EtF",
  "key9": "3L1BswjePos9jAHjaMhvF8gcRng3TvMiJpErXzwtA8NPcoBUJgUAfSyKeKif8mk1B4H8SWL3KWv2EnCwNUogbFzr",
  "key10": "4scebdg8bQKyKueLF24sMHbwx8qa9AGL3jB5b73iP6dYjfHdKqGdTwUHKtJCjjYx1szAErcerNB2Y52Lzhg68S2s",
  "key11": "44SPbPsmSYoXk7tS63hueJeBP8bQ4xhkKP1kDqcfgG5vKkuLbwr6Ej76QVrYxyrx8tUyt7H47sUX3qQFUS9Bauo1",
  "key12": "3kS7fZHJsDad1mMVUDWPuVkPtFN4tWKq8LXjJMkD721a54k8DXbsP8UkTiyLp92bVk3BTZcp6NEgDjsJnwsNEJH9",
  "key13": "3Hof2adq7T4YAqDxskeftihghbamnwEPU5S4aED6bwuqQq8D5wfTypaoKcvFCJP9xiTKN9dHeYUys2J6G1oRJbgC",
  "key14": "2XgihZjZtfXYTQHXxk4GMXt6PybakGKCfU9epeyd9zDeUuEtfaQcTPxYrQeDeit6bsXaMr6KPcvD1yikuXhtfmbv",
  "key15": "3pFZeYSsu4DQo2sW1bC9h7tEfu2Xery8VkmcDD8GXaRy2nLaBLpy6zKwiXcn1jjcL4PuovyTZZf1DJbB5knBQs1K",
  "key16": "Z9QhyBA9K1uXZF3YNzJ41iRTV4pyUefKGud4EnJe76vu4Q3UzLa3rH2YTAK4TSSS6tGB5MzJehwrMoAfwwojZZJ",
  "key17": "4aU43kJXCoVdY85yGERov2SD4wZcPwNnnG8haTLcChX81xjatzyEW674ieA9p3JpiMaFueYZtEpWHJGkbruMXTzy",
  "key18": "33wvLvM7yzcRNrSvA1YeVJsAnGUztNokhY2kUwUm4rjinUMgQ2xKCwMxp7BTVJBN3xZ46qMkUFLQVKLtZNMndSxk",
  "key19": "5mkB4MqWnuZG3ViENBaG978L3Z1vUzzDCCmpWHs8yYJ7RLviTuiVA9qeAKvRLqtjUK95hGZFHrZDmVW5EUftmhLP",
  "key20": "4HedSurEgiqxeBZH7mpM5xGxzr54duFT8c9oKD6jWRFypNomwvbfVti2EnGsQ5128UNWnTKm1wbcSDBFnvczt9bm",
  "key21": "eMo3DasuWbHttRV8XCz66UeXgrE4E5rqhA635VAzNpznDUJPuzmhnvzYjoJJQxV1jyQhcQqXDDERK5qkfaPaadN",
  "key22": "5WX6tGzdpSvYwAcnoVmGjjyQnqa8DwV89PbX9i3NWXLNF1Urq9BMJFsZUcEvidTNP7NpcMmEm9hBjchMxNNdtXBV",
  "key23": "2P2szyhVYnqN4xTtx5h4fwF3rSuZamhi9PCdfHjsmnyL76GKGMSLo12HsjL3M7EuNBRy4Lrkvx6CHFWuJhrtfCKV",
  "key24": "5fe2x5ZVUGMeRhDQp3HRQrNuQZ2yLtY2xgp2aExpRPnxZNecr11xwSWWGE1gZx5u1dUm1YjaZdg25WnHfkNbEaYV",
  "key25": "1FFQH4apkdwUmkfmPjAMh9Us87kiL6NJCgVvk8JJEad5DkFzcF5HPSWPBcCFttpnV6seo8hJEp44xAc1mbrrhMM",
  "key26": "3mG45dru3BCLRkqQeU6qo3TGHjcAH3pxkegmEE7BdVVZkpV829vro2yhQQNH1cMDDNwzfv4ECt4VbWoFduvNRGnG",
  "key27": "1Ak4cZgDa4DXD1NTEjRREkaFDoj6y1ai4MQucheJCMZayDNVTjCm1WonL7BxEfVguhqtMBLBKR5NFj3sUmvSfwY",
  "key28": "dMoPxAEszDtJEkSrLuMNZSCrwS9JqkWfCGrfqyJiMPo2xfw3crF4VwNrEoJBsqFr46yuLqPaJ8Jgf3nHP65gTEW",
  "key29": "Hn56UfkE4Nwbhwt95kxxeqjkyFKvPxsbjgtZ36apiyBc34NgCb4sy6T3A8HZniGGBSN2wgoa7wrA4QbcWeaoodv",
  "key30": "qET5hwuhr3Krx4Wmb4FT4cngFg3ywCk3HvjcyNySjdUHVm47LF6RBJf5QMnxWLCSDvhdERkYjf1yCQ3XY1jK52m",
  "key31": "3qhEAVayDou6o7DjMH4oJ5xC7Kewibptiy6wX6e9Qi2rEYDhZsbk3CgZQ5qaM8e3h35Vtvkex7Xw6zudTqpEP2ve",
  "key32": "SGkqyS2QnaVh1UMWVV118Y815bdusawAeXJVfoExSWYN49H7WhTjQbwue8WHBzn2MAm43gFZKjF6vp8qPzHN8i8",
  "key33": "3KGoCG4cHJ7chVokMtdtJPRoUTETrYsGuGP1Gxt9xSL1WHn232UgF16nYbPRSt1sqxdZvmK7PBaeVaTFcGComa2b",
  "key34": "5uo1Cz2CCHVo9k54iTQJmCPJbe3nUcxSYiw6A16CXc6B9pKmwuZC4TgfS5CDc9nKG8mRYD6CgctEgEGx7Q7dSgz9"
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
