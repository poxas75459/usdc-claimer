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
    "3rKi1YBQMEM2ovJjimtL8yAdrzrVmTZ3tmn5X9Vb3w2ZxUoqB46yYScLSzdwvcnJBkJ5UpAiZsomCCinVxsUroe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RY2m6MAtLUdj3J8DBvDbqRUPyTWnmggFGFpeWfL4wuGR2nnzKNk39k9y7jAsew6ZT6UHUow3QWSiYXNHHXZA6v",
  "key1": "x7jECPnL5Pqn8kynFsJMs95CZScRWTVnHYfuWTkUEmsAvga5Q6bZqGghd7vPzufJH3WJn75NPnifwBKazMxaa7N",
  "key2": "58XYtnf9gT6wH4VhaqGRDduzMnfHxdeDJEzKHTKgkQt3TeFPshDY8eJhQ5s2zAwpJQE5CJzXGAp3JSesr7RGsbT6",
  "key3": "2hKF77sy8p351Tvvp8XciWMzzceLkDSRyeDvDAL55EVUyEpEWngpVxMjfrydHYo8rXWoF5cHhWkNMvtX33Wh4JDp",
  "key4": "3KHF6PDYkcHShdWt8fruVLfRwraetY2cK2r6zKWhhJpSjH3DujLA8PYHkWBUv86R2Y1x6jT9riAqXtjfE35EVVwt",
  "key5": "2VLzbdJuKEvyi74uYEAyBKY1c5dovgwxAqxTXVTopqtiAqSewEgWs1QL6pHBhLpoygeGvg1uQ9ALfSmDYzTvyhj",
  "key6": "4uPYNUN9rFsjTsvcBprrFbSAawv2udaZBPKHbyZTGojbdMJZYiWaugBD9sRW5gD7GfBDR89J1oAUVpgC1QKCcRh7",
  "key7": "3jt2h8NPuqqDdPzSZAY8oWuaUKzVasA4iQFy4wWue7Cf8n3LmF9mc9LrfZ4VdDgfyFL6L8mkNTMUM6Bq4pcjhkGg",
  "key8": "2a1T8DdAC8AyJdD5Bg8AZUdaguSk8HtveJPftNWgLSfyHa3KJWTKXXPf5cmeP8yMueWmm8987sg48sMtpZkfvjjG",
  "key9": "27Kj46Nnhg1NJ1tRXcjwExJwm4nnXFYRWvn2adFyrdXZ4jxyj5kXcm28uZbgH114hxAPStWpgJKHgNz3XAAuXhgR",
  "key10": "3swLor9LSci3CoYRYvZrSEwNmxqggen8WDUu8zfKVXk61KGsS1A1CxykczQqNTq9NmTjVUVdrQde7wdrcCjtNjA2",
  "key11": "xyGBcpvvUKPgvTdcSKNFMATcEyjZhKSYaRf72tskpSzhwDs6K8ezdhvRGuwZSMk8oi9sF8rdcSRYc55MgJQZ7Kn",
  "key12": "3XzdrSUeMN5MGDsqYBbAdZf2GRW8tAFXeANvBmaRUfm98JodWBDMMcogpTQCbcyn5vmNv7UUeWNWXoJS6ZEFRqN2",
  "key13": "5xJNfr8Xay12rXGVVuFga6wcAzRWEB93cXEXey98dajN1Wy6uCR2j6gk6g2WUWCTEgTUBPc6wQdFQKkPmHypLjkw",
  "key14": "3iWkJwChbtT3kAZAQgAtE885nemwJkgZ3PqpCQuMPhGQw1xpXtZWP9NnLz6kCfC2wnW8Cyc3weHhPQ2bekqXq82X",
  "key15": "45s22KiK4VaihXB4LZUiYS2LZJreiYm2paQKHpYT6Vy8WygCex7qF88dWSVzYGaxqEAbcT1SChzrQmPVwog5x7BX",
  "key16": "27e1fTHS4hnsbQrDZYFWr5e3oom36zhphygL9qQNU7kKpzggBosDok2Cp9RhT1yiZpUUWh3wNj1TwEWR5NqJrhez",
  "key17": "MLKZfthtqjWVrBUwUyGehdCGEUfs5B7hMQZ13pb6vfchKtamtQpE5EfdnTxeDJByJkvqyZ48nnaY2W787ENWcnV",
  "key18": "2ZBoYD7eXMh9vfjw3ckoHmMag3r5cYjaWNEQ1voKjBr7fnrx7c6344VtJUoifyo8kNVjiBzdwewrAg4DW3UgWRYg",
  "key19": "cchuDCj5UqCPAaaaQvTLFEw4appUrMTuis1nMHqtAFHWx7zMe7ZP8AQ6LP1iTNrjYZbF3z4sXqnnFDmTFQu1aje",
  "key20": "55EQ95QbfKKTBA99Fz8DFXYf7a8u6qCtwdmLL2EauZWqkaJp5gpcwjjo4DHdrvw9Tytv5Hcwo59nYf87Eoqfuc1a",
  "key21": "2yCk9U6M1iLJLSBLP4ooZ9t9t5XpnbJ8RBfjTzUUs948TvkiMeC5NhVrLGzsuB6MCxGCeVRq4BqZrMLncDsQ5AMw",
  "key22": "G5HfXAsYZSy8p77xBT48oF81RuWh5KdqgykvseH33cEwcifMf4ugQcGck8U6iMTyKeEFDUuHLDzUx8DRsjZW92w",
  "key23": "3d2nG5S28DALE68B5c1uDJkX5UuTs4Kwo7m7W5Xwo5Z8zVwfm741kHiNzL2RoG5uW9dsTpS4ipZNysZ3YdiGR6QP",
  "key24": "8h7GydveHQKvNcX2W8wptKPYFw5CYENZGo2jUXMKtZpqAnwHHZezvz7huaA7ebSJmtbdnvr8D3vpf8yKHPxetYn",
  "key25": "5S4wmVGVjBcxH88ogyiRdPtLaEFtY4p45LpWSFYdHSPzWccrKEVcf3ieXintutCJfV3PoZAf32A4WZNhuh6sgsSV",
  "key26": "5gKD4wWEedWNSYzWixyXTYMm5QJ9yN7UA4i5QDWTwSdRRPrr2T117pKWc5B3cZcNPsKLaev6EYWfoHtd7gVhJR2t",
  "key27": "4VBsk2ogX4RLJyWFi8pyNCtekAkZNSxToJEk6gztr7E6rTbR97yoLgu7TptLjufnhcZqiMevRkmsfWxpiWB5T9g8",
  "key28": "5nLYNuFTvQ7r8QRgNUNpwpkTtNn8Bn4kebHfMZojRfAAbioJed3mX4yqS5pEnopFaJxkHh4kPFTnXsJm76GyE5u4",
  "key29": "3bYf5KcjiNZG2XnkhchmSxMw8j6urgqmXNPjJwheW4R34BRjk22L71cbbx7rB3CCJT7JuoBZoc3PCS4oADAWoxQV",
  "key30": "3jP7r1gmkmtDpgYLsu6SRD97FH4NMBAiaW7ZEWn3hbc1wKTtSQ1ich9Bcq3qmieH7hKtEJosPyHc8a1Y63S9wdjE",
  "key31": "kwztLa8jpj2dkKsDVqLEErgKvkXznshTYmLso74VDnZVnmoiM8SucqdVHXwrhvVyRiDM3FfJUbeAyhT4vxg2ciY",
  "key32": "3qC2ZkZDXpreQ12LmtV4MXoiNy946n6MvkDQtHSiYQLzFUvY2dVdP95vsD8MVk32skH76V7RL1wFUqfyEUUAnk71",
  "key33": "65h9fbj9WhArvmzGHxpW64wdDn457qChKfoDJKCguXK9yXT7i6omam1NvRzuTRY4mASwq2QCxbbEJcz3f1EU3LDt",
  "key34": "5UvyNnTHxE6LF81uLrd8ZKsh7Hhdnky8TegdDvdnovcTd2CbxUUVT4yRZfBxvcCt6VhEXe3PPQCXL4ECPgPJwHoH"
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
