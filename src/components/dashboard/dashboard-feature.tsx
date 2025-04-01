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
    "JqNtu4X3nwgjeYKCaz63mhei5s3ohF9XiQEgZwj1QSf2Zgv98hWAPLfEMtTyMYY4aswU2d5SjftSWLBswTqU3xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BpDdDKVLEr3RBPNdUL1xhSD5N1u6xwieE9DzwFV6BsL7qqTtMM9bJWxM1yGYRnrWpi5fEy2P5c7LTcP9SoL3KqJ",
  "key1": "2eYfacBXJWw6szpEXk6mxCpEH9FnAhGHzbQ3JAyHMJcdR3adMQiUBCNyo1rETsWk1dz88vjknxMLjjKHvkaWxgco",
  "key2": "51mQeyyF6frp6N3qzjCN2syGn929uMAmhrxzr53ZgcZhavjKUbMnyB2ohvZ3woYusgebJmi9dMjcsGCKigUHgEFQ",
  "key3": "2rVQRjUpoWebKAuY7n7KtV3NyAfLv3HRBAwBvmQvb6zpfEEkj5ZWdazyRvfApMGXEaLahV5FXkoAxgLZMWyAJ9dr",
  "key4": "5G21PkbPNRvNpFqsQtM4YVJ23BHXjYdxVHrv7mfSmTyxbmKz2Z3dM5EwdjrW4wtrn9sZFiJXbM8qa3h5nswucgvP",
  "key5": "54fytbKjXrspuBmswAD9QZWKRDVJCT8Z5NbAhWMPJGmMcmSiVec22BxsJ9rU4myCFTwbaxNav9767Hxpm2HUpTnK",
  "key6": "2bAs6qGendzuiLFURMr2hvnt8Jqoi71M2SRHNfhSgBd5o9wKqAFSM2rSCWbUqdxJEF458tuwPjgxmTDLBcvYsKx2",
  "key7": "3S9JngfL4bK6VN1TQRxRh4iRo3bU4XTZ3S9hRfXRxNhePgzPVb7TrSfLbvMjFMhK9jZJgSsK7TehmhZsyBh6nPjx",
  "key8": "4D9UoiQvimXgQ5ByQHzVFrM6Ux1cv8v1PMR8F9rVit8AqMKkRHdvFjHJXyzZXsZpPCM2WvxH4R7WxrBN6b6JpNfS",
  "key9": "QswavKfzmWkQuLAYWe2jgNS36cp9fPTg5NqfthLS3o6bfqgrFGtYGgKYBzVFHath5QFMg4MNBgcju8FtoqutSxt",
  "key10": "5pUbqr911YdQpHZPfxwiYdP6fe8MC1erMwjQUWt3oxGUm9LKwKXubU4FTxvQBbtcMTaQ8hTGdfwBVyrpQKVgho2x",
  "key11": "5hEVxvTsF6p1wW7DPv8DJYoseCW8rgTPXGQEfx7oNyp5ps33zKdqxzm8skXVChc867saPyYnvCgNKKk3EnQPhYXr",
  "key12": "Tw1a9wPCkP3TcBHs28ua2zXH7WMwziG7G63tMNDASuyCrCge7WRFQ1Do29wbab34YPCYT1vj6uTogt2gW4a671a",
  "key13": "C63nfJvysYsZ2xWiT9kQUatdcLwaE8UzMVA9m5DkdHog4wASzaG29TAquypJHbhqs2rKncXkZAansCq979e8Dfg",
  "key14": "67S7xTc7xhPtSbnXp3dVin8wZyErCgNmb287aNgJjMixm7utWH5qs4YT7GaF3UvVuYSD5z4LJHtBAtTq5ha8scvX",
  "key15": "5NH8FdZSyLFcSDP6ENgZibt55f26W59Rdkw3QEDUZbJh2CAGPus5DZwkgrJ3Q12Yj4AoF7yfZZzGR9FSEQMKMiFJ",
  "key16": "goewsZMBhvfkicUZ6RjJU3zb7RpFQKYcFaCumoMRgytyanZ48LwNMJL7qQkrynDz7A1qfkfgP9m5DA118CXwNn9",
  "key17": "sJRiQ4z4y7GeqogRoYNhFAaxk44F6YttNwf652n1sTrv8GeKtRhz2t8F3Zigo35x2tai4MTnycziNcNEWGEdpkA",
  "key18": "31ayqj3wkYQKZXodXTCR8jEoZLdCmDWZxJ2G4piYBPSMvLGcfXKqEqnkvpGiqZfCAvYyeSskkJrb4PqQHe9MC3zP",
  "key19": "3NdNyeyUJt1iYBNPQv7xMppjYXHCHdoo8GCTn6XwyTK8ZUrtHtTDT8t6AJrhfPma4NBghkzJhu3HoESpb1r2hjpU",
  "key20": "4Ch8yjMrNAN5nN9ET1dmJ4ykN6hw7Lc2PgZENZGT9SSN1rsQTSyCDsFpsVZfdXT69kLPygvw1fXjzCadg5agXhmZ",
  "key21": "hnPmKgFFDfpGr7vkz8RWHDwdVLAVW5vyCB6381umtp99adt8YhFrXmbgCGPknNoz6ALdoAmNMsDWYFb4B6T4H8p",
  "key22": "vgCjYRrbiaGiqASWv6X8n9K56FN8wKhHWKE1u5nhtVXfh2AXpxGxxvvQJv2UbTmZexpBcW4yfo2EieYvXibtw7B",
  "key23": "3VCfy7UVoCQiBpMgSKQkaBaUN4rTCeW8RF7nycdh23GDF7fWuoFr3LogoDANVAmpiMzETxNqakZw47ezhqfFxMJn",
  "key24": "3Dx8weMmyroQdErF1AYxhWo8zWaaKs8YqQNzzSnnAkVQkwPjfAcu88LsqpumBTMZ5ssx3rVsvEYn6NakPKuVXjSB",
  "key25": "54zPj698oZK9grRuq5dBBygZhKhN4caBKgk6vrY2LjUu93zzH8iay8vwQXvmdvVSYUtwydbnGrMmt2VcpNEX4azq",
  "key26": "3GZnvRzjdh4yW5HQ67UpFVV9oNKa25RkwmHdLL9wXE47keEUPRgCnCfFxdXUgykisev1KobqjRqkj2JgkNSCBJt4",
  "key27": "5BvRa51qAqL7zubXTbenbSyDtnEMmuTH8AM3L7Drz2UNKwEYJDvJfVU5xFSu4pJ7fMpZumfVtwzzFz9fou68vK26",
  "key28": "4n5ibRFXJ7rAzDffP3SMTggwDA6wPfEHFcxmBb9p23zWJmsESp7jpvLSTdVSrL7UjuLSu119diGSggtCyse1mXvK",
  "key29": "9t43ZhUJNCyRYXro3Z7ga4nsapLkGUs5ciN2ZTZmS8e41LZG6GAguN38BVYjQnamet34iRnqF2jji9Zi88G4Ruj",
  "key30": "24cHaB5Zy6GyacqEztd1UrmtLcpMS7Zj1ynzvtikmjrWdXqmj5ZCdDdHSqzD75f3VUc2tXFXDUYfai3Ymj3B4koL",
  "key31": "28VXMy5Qi6D2kVMj2p3793Zmjou8ddG23nr9k2XPvopTLysSm12ADgcW7vKuyrhnbjbAJQYQEAus7Lha7g44ThxR",
  "key32": "4Qi91eCe6AU4WtnK5juJwi3567cbHvc1kFdAz5VZ4TPUWvdd6fkdkJVbyV6cMPGqfoC3Qx3LiULS7KoDTHQdFfAH",
  "key33": "2hLvfTdiPmbkyLgsSjE9ZUCamaxAhzNMmph4nVGK3DLVVsqgKdEYcURNuAhtauFcEb2Xuq7YhmaFTU4YKokstSWJ",
  "key34": "4AUpnNTcWB4Q7vRVQwej5caeRr64bW7jHvGT9hSBZ6HNvFsDsXHuSFs4UMnNxBXx7L88tfnm5ynEPK4aPJMsaqj4",
  "key35": "5jmeDbQ2BPWaFVX8TiEun16bv5pSHBvY7hytWPBkodMTWeXN4ssHihpPg18qH65Jnpw3b1FuyHzz3FAPdVBCT9qQ",
  "key36": "54FfkH5EM5NC1mEdzB64mibjk8n4zd1UMY3WwF6Ja5U6itVLKdXGbspJJ4irhmhDiFJ2HQKjbwKGRwFakefDYaUF",
  "key37": "28QRykCJq1vCgsWccZVJshcosfFpSsiztTTQVibZS5LmeDL3RJ4pD9714iBsP3XSYaKx4J5T4mdW2kaGtwYWB5WU",
  "key38": "3CFPXNv4GpxNKWMD5WRZzMLC8iGtxjVZ2pY8Qbm815mZ6UKS9UuE5PXhPNoedYnTF19keZAZMpQL7wzx9nQzh8hJ",
  "key39": "EUW9kmx9gacznquZpwKCsssLWdeXAtqdk1k91pCBMc9qoh3W7KuoaL6e5S8SHJixuZad4G9C2xPNBRUJzhFWua1",
  "key40": "2FsRSrzT1nv1QjMB5R5fdRBjH26b4QFstxK3huA6HQpoR79RC776Z83RRp58sAv9KedhjPk4KUxYYkgwWCYyEyAj",
  "key41": "YPapCDk6X7LQ8CPGMBfmHivsdqebz1S4nZ1dKtvzooHDDG3Awd4cWiYLsMKxgnW6hTsJa8tVCVdVvsVE3Nd6rrS"
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
