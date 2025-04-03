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
    "RU4D1cdxFiT34i11PD1iYQ7mzAYqddkwPAxY8iSpR7bjfPJcRJ4doXq64xDQ8mHTPEbNYnaBcPUtvbRS35HDSu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TftGDuCgL8usnW9Maqx9JKTZx7RwtJfPrZSxtkFm4MUoo8aHZDArq6Hr7M8nQH3hDgSwgXVsCzuDegsLWurqmzs",
  "key1": "3pQCox49m8tjW7fdPtFLtDzuhCGMaPAeiw7YNVZuNPoGmk6c3QbhXfADvevfvgmRhSewCDPQNfKVmAYcGiUKNtv5",
  "key2": "5bqeDsECdM5ALaRfbTE4N8wLZR3JqWXCvpUStogmjit6mawmx2FF6tZeRYz2YbncoQEDQ2yVNWBmKnF658KD5Hdg",
  "key3": "53ZM21F7pNBYzMVu79guajMWgkoGejryqkzqY5EaGfPiCh5bGrEvWSfDpc3q5ahzRhKeyFo7YnJ5FxPb8vDyZqBP",
  "key4": "3TBTrvxh5Sa6cHhaLtK1adfBcNnWqPbT3nvLx4LjStnnBU8JvAHjaMTVYBZS9zvxQFZyVJt8GhZdqoXetq4fc8PK",
  "key5": "43y7dM1m3LgAGizca1HrZtr6wWvNg5sojVkA9eUViitNoyr61pK38e24rKjjnA7dTJnx9NmhumCFMK4xL5oJKUy3",
  "key6": "2nLx5TL9187ccdViQXLqkzFotLTsBV1QGDbmFt8fce9WWwNkZE9T9ErPVfoCYiSTf3mQvrvhtf7cRFegY58u3x4f",
  "key7": "65NPcMZKzsVnPWrhmGzZ4c9tJLczEtWCDzDwhR4gVZ4bbrB5jq83C4asJ6MesTUmm7Gu8CAJst4vWCk7ddk6RGUT",
  "key8": "3k7Mej7RFS6uiU436L8JX1yPtUm5hMSfcccw5gDpGG9uiok8ncVLrmqFscVYogsfGv7FcFjXZJ8sSSfkaBuY5cPw",
  "key9": "4JdS31ThXhWb98H35MMkjjFLDcU4LrPs8ZUCD9gK4UQ9qhyDD2JVpvH4iAQ1zSkXV9BWzvFP79LUVPiubBALYPsW",
  "key10": "3LHpdv721iqvSyJNB3rEJeFUzpcHfWYhYMXJPqXF5G4bW2PPtRwZUXeNXeT4sQh2CZFKAg7gwBXvvw9XUNrd3egb",
  "key11": "5SRCATR9ed6UPGhLUofg5pQe1tA7vPc8dtfzDNPzCf1K7iNUhZf7JmNyEjPS4U1oYot3DMZg9gmk5yJH6txQJYyW",
  "key12": "3D1oFmk8hNZAm23beDTfVHQqTJCsgGLeSEVYVMDxgAkHh8pMc8v5Erhe5tKtXTxxVT3C5TZS9ZEUX6PTiMEPRZ3Y",
  "key13": "3EX2jdTM2zEfvbb5CCjEA327Bd4zNq2EB19VKjyoD5aYG8RjBDVZwSrqtSEMMrLvsvgyNuxMcETSn1N7Wohw5ZL3",
  "key14": "3JHF2JyRj2MqSTQGYkcFAAQMartcVSbooLkyEHPHWt5fyCYtA6trdru6LcQ85evCdHkC8z48MqUVBZiWorWEVUMh",
  "key15": "3fJYgwzpnFHrQZmUnia9rqE3Aizq6nnpDqkr9sTLj9w64ZVaZUXLmyg4h4H5zKj7bURfM1RQdwkqGmHZgeKDGv25",
  "key16": "34HVh8SHcocgQ5aZ33sMJsrkLynLahA8KYznnqpfZ4tMahfdQsPw8Q5XEnFoQUKqgdmcxH54Z52RKF6Mvk5vbX1Y",
  "key17": "2dApHsqbB4ZcNtNvHfJgLZtKcWZSPoGmDymXqfUcu4Gq4LobdRNMmSARCKbTJjRsGzprQpCEAEFZ5GFPTuqsjH61",
  "key18": "49kNCeqLKYiAGfGSkmfHp8x5Ws8spnVuPYdhjH5r4S4rkepLSUx4t6xHYudwwDsQBnYg5V7fp8JxQrSPRq1st2iA",
  "key19": "2PWJfuNSQF9a8Q9vzoXrVtuxj3rFz4F2WWuSVBmaiooY4Qt5jx941D7oVr9nwwSqMMNFkCERZXpe2x9H2HsQB8EJ",
  "key20": "2yEx4GTU9CbJUhyfJRhoSpJyS3TPA7LayjvPCwNHihB8wF4cMD1YutoA9yfuXKgTZEqG5yaCR3JoGNYzU8WcHTJA",
  "key21": "4D1vjTnvv4bXTRxaHizDAJx5KpbFHjXhZHeiuo45c5fSio2xeq6yzbuxwyXW6vkFHxCJEF9Hw6yWCMeq9tL4indY",
  "key22": "621CR3KUnb17myaHT5HbvJjjC2XhcLUnP5YY3nr5GyZDkZDC5b2Vkuj4JqjydWqp9zpHWwzsZbnm952UawnaMeQo",
  "key23": "3Ypi5y4ikhzF2RpkFPcm51uN2tZwbjmuYKyk7ZsZ72yr96SJt3N9PF8PDLmKi2ZDQFjmSrFWmHY4uGV4c3YqiqDg",
  "key24": "3Ks92DjPZMPCcvcUbFyZ3etDTpJWqHTYhs9qTpTfnhjFMXUrzzHzxRikvVJPm8pw1S3VQnUnyH7m45MtEu2a5LAi",
  "key25": "G4fpezCqb98TYqJjyU9L7BFkCxaUjfomUwPQcp91RGgsFXZS7AdFHCmnduHDpRbD1LgwLJdpKL2QPoahDyUyTo5",
  "key26": "5EA445LaEAd2TrL4Cry9H6fmzqoTNfkQMyrtySi4W22xwQSKNutQXpG9n4g44QQ7sgTHKoV1ofxuVk37pDssvmBU",
  "key27": "5S47pHmXTYdXY2SsuLsCpRGqTZe15jf4KvEdZvqhgme4HekUNaN6jMM7DTzQ37pgicr5HMqbpsRpkSq2urvVXpF8",
  "key28": "4BzmvyEZXJbhast6kYqCUUV9vsSaCu4HFF4H5k9LVweT1Nv4W1zBxvVPAMYyRmui3Xgp1493ZB3YyRUKAMMsagd7",
  "key29": "uzB6zcqP6nEmCMfSEsujbhZ5vAWAHV368EW5xzahLpKnRo7vuqxK8qqPSf4HfQivQczmvBAk6WpUP7j7DMpZY5D",
  "key30": "4fNupWKRxVFKpW8bcMFtSPmcUAnifRbamXP42MsfSJEtRuXYwXWPbPsLGkYB2dR8TJ51g3SibYtK5kC2PQvGVEkU",
  "key31": "cfgUyzHTCpTjh85kp1MotQYs7pokJExeNHpUoUoSq1ry6suRDwxwWjNwhSGv3DJMQcPmz4BSscxHDopNaDoLTde",
  "key32": "4QPuyN3h7MsGkCdyVn2QRv7N1qZ7sM8M4yFuZD5HecU7gLGnFrXASR6KFVJRN3tVnqiniZgyRVBhhJcMf3yft5nN"
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
