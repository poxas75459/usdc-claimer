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
    "3D5ynHwtd6ig55cUTGyKuwyR8ygSBsRV6iheeoNoNG5EWypd9WurEzpRCZKxPcmziT4e4wn1eTmUU5yeVC3gzqU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38EA8xpdazZCawcGyFBPbsy5ctegGb1XVBs4iX9jzHfMhx5Pi8BnpBjBzwBgvtjNSHcgebbvYcgVMsKTULg8nWPU",
  "key1": "55ngLFidUh3Ry6GqzHzZF22f717kMxL4o8NDzKr5biUvJsLwTKKvDwh8XkYmrRwdqFJaZLvXS1vnnk7SAWTGVT4Y",
  "key2": "2wDVt32FCZk9mBnmzrtE7ENMeWgmJtSNDtihy8qKoEP7FJPZJioCitegAeyMNRaaqBfhSg6GRTMuG1YsxEMCiJh8",
  "key3": "vcdLqgfJm8Y3MN9BP3BzwN4oyeAvmJLRjPxNL9c94kRvu6RZrcdZTG1hFdrk8EzMcP8GD61km3UFdA74vBE2Pct",
  "key4": "4aMBRcLzXPUEmQvLVuL18Sbg4g59QUr25EB9Y1jSGiVevxiobrFYyvTRzX6XyQStvtcAQwhBoWNJXGNKZS3n7Jxr",
  "key5": "5RnAwSqeB2R7ybv63tTFjghfLAKrY7tRTFsBS33n3dfc3ZX5TwGcohBKactLbYPjnvJXBa2CpxSPtFybeY6ztMvi",
  "key6": "4Sd7nR4A1rZHfbF49LF7Fmo8fevPdRdusHAsTV4qauwWZuZza1rWjxihAEjG6C9Neh2GA9Ne8T9mtvEcZVVGgu49",
  "key7": "28NWpFUs6tq4iHmHkw9ArFivPzDukU5jZk45tx94Ly1LhrxyAJ8R66WNZxTc7fZNdscHT7LMc8fuc4yETUGAd37C",
  "key8": "251xmqSRGMRu7M5Hhc2aoP1mYLDKnS4sxDsrNHLFfeeLCovTyMwW1P1m6LrgaDgdiM6DAZ5n3YDWc7xAornAZZsM",
  "key9": "2mHdEzoz2KwSvJfusuFi1BkYX7e9vg6zruUnK67CNMN2cAqvHvUgaMrU9m3nMidVWsTF2yWguBNNGb4PiXjC2RCj",
  "key10": "tcpKTYXUmckQeFYWPa4bZYq7v23EwqdfpCWBnTXj5REG8JymQFHSD46UkfF3vajwescE1XLXJ77Pyzp5aDCbEkS",
  "key11": "44iRR4k3aWgNu9K5m841sR1YPDm5x7ApYxbNNyQxzPZNuTsZ2QYRhr4fjrDTBMWwkSiwvrTSfGSqSEKzsYSDDrTX",
  "key12": "2NTaVrW6C3DPAvrGUFPn1YaBiSDqXx3bHTcePHEGfPUmfPy3Uv9huWJigAwD8uRkjackesibfMtT8gPVR4XpRqDm",
  "key13": "2zfRcQTv5Pikeq5a246rh2BkwqSLRwnHbtCXyqAs7jeSo1czo4RdQmvS85z9ELq4ao368yLmmYdYKMR86zZZB8C3",
  "key14": "3qoALsPxgwSGHsHRaoZ9Lx6zBmgZL436AUJttRw4AuU6gaYd6a6U1dDaSJyMVSfBqNVwmawUzDnKbeCb6DXdzPiY",
  "key15": "42v4jpbhi7P2ApL1NLqUujjAPfh35vcSXbcZ599VrnUbi7bHRYuVKeH6haRHQaTKm6GpMMhBJnpwp6Pby1brxTzp",
  "key16": "63wForF2xxJFnKiu93cZnmhoBrP6M9KPoZJCVnQFk3EQcGgPv4mfZNHyo6baCD3xeh4YsYxvYYRwcMWcfWTLPi4K",
  "key17": "1Xpv6Uj7pGFNYAS9ML4MgHd6hQvSMAwMjwvEBSz2xLLC9JbZPESTEhjzoho5s2jTnGdqKMABiSQzNkFVutwKmjn",
  "key18": "36aZYxZtbjZ9g6YXcu1MjViUhzvbfhvrD4qkyBeZoRnVfwvW2YB3SN9kqPcwweyaY78bV4nbHdbBLKYgdgQM9ZzX",
  "key19": "5TS4fBH3o4Qd4Y7qkNbXKozqzSB8AwwzmRQKrBnx5YSnuSDya1izsRNzVQp9Ui78b9FHriaTx2DXAEuFxL2SdRWv",
  "key20": "38fujZJRJvSvq4Ef1uticspVrXtG1d7wWhW3fhhu9m4KwAQmDiYNxCd5KxwRYzCrPqs8tSi5hgegG7sYsUq1Jchc",
  "key21": "3NLJfD3LGzk55FfmcumzqdSUtJfTy1kw7LeRC4AAH4HkBnkEdZa1EHHaXnVEnkH2rGayXyvf3TUgReSmfZxE4F4L",
  "key22": "2H7FPveuYHvBSfo4nKuStUFMfN98jo2shFTxbQJbBJRfrbre2YSqxLdJved6TvUYMDUDnhmvJUBB96JBoDUSLb8w",
  "key23": "5GDiNWvkHBE3AtsYz6kNXuMFbFWCR1zXGSN1m9A4yN9UWXymjJqK2T5ddo4aZP1qSLhKDeHSuguNrcTc6z8RCNCS",
  "key24": "4CgrzQtxSxUFeKuw6ZedXqrgEWkcqPEUo7fuJUYFg2RBEg6HXTXrGcPEx7eaNDXa8T4AD4oJYQdgtB4BdW3F4pbi",
  "key25": "DPMdUdWVi3396WPE96X235tAGjWYU7M5snaivsS1ao5Q6734U4F2bgE4g1vn1Sw86gyGVyA6zBFcbcxRm5UM9ZG",
  "key26": "46AAVqKmAmFKLPdNzG41G8fj4cYatuvkjFx4V2BAHae5tSNq2K1Epoee2m8jgacT9q9VwchqhrS6efnuQMUvrCTm",
  "key27": "2PLeUVscBbcdWBrohJJQhanyeLr8pDUEqzNQXh9z8DDgLWav7Lg8ntMsHHGPC6YN2XKmmbrqtP12kwNXjBMh5muz",
  "key28": "38t6hVxwxAoiSiTWefYVxyjRqFWBfbAeEciLZTuYQEGgfSyhUsog7Kz6MoLJE76F9Fx4t8fXpP1Zsw2cJEk621fq",
  "key29": "2BpxReUjhQPib9FsYJQTQbUUuYugDfgYMiU8ymSiE3GMcSiatqebA8izYGS1oGGP67XSXuPi1DuKNv6fzzcszRMN",
  "key30": "39EoVEiGtp7pdiCqteMz2YWN8FR8Vbnag3PJQhWHdGEZZwABB855ZJ48GXWjbAAZKJfbLfJGEjRSPsACmHpAx8K5",
  "key31": "4akRmNw6F4ELw427mBK4kdbdha6z9DCX31onahwVtCESQ5vVnPKzmeNXL3zwwMcQp1vA661gW5g7KFNiRxCfwgT3",
  "key32": "2xVytEQZUCBqUSgJcX8RBQMx4sJ9eu1Qiq4zD1unXeayXBER6U6YzdGzYwvPMbYHkaZ24JgpUCH2hwf7t3MvE7bf",
  "key33": "3D8wrEXpcwd2PXWTPoFZ96gnLLFEps9YGdzdYmjJuMXA6ywm5KqCq1mjBYX3oh8uGhffeCCPcmHN8U9y9536bhoq",
  "key34": "5RxsksET7g7h49NWTgFTvbCNa9JSeTC5AsiA9eevmGmUZLnFwTv8AdCUNTz9UgWg8W8pdW1RKUyX48daRFXa5sjD",
  "key35": "QUt3XjLn4WU7BYqp3rnhyyqbUgqFhYaWTaQU67BtSr2b9ujUHmSTgm9TDQhAHMNjbXsxgj6DW3QkqYrtJNpj3Dz",
  "key36": "4zSJBvdRxaFgpgtxBj9CYdvq6rWK9yR3beyXU9xnH4GhoQgGFD3GixqujKjNrqnNTLP2eV2sJEbe6dPwrd3rFHdd",
  "key37": "4WzjfjK5AcTyFoKSzJ5TsT62qvNoxW7R1j1UzWhSijb7J1XWRt5o8jdPy7k4DxzCxZK5ZeUagaqpfzsSJktJXH2E",
  "key38": "38rUpzuyMAkDejrBfGwRjyinHhncEbPEA62P6A4svTaxcVRywBbXf2cadH1LWaev54gXPBt5rnKTfNrdWw9cKHG",
  "key39": "2GrxGpYa5R1WBBuXU1xenxo3q6EKvZcE8cWbhFXDwCuDrdr8FQodm8hduaQjnNYsYosCdggVpbAPmia5EvWEat5n",
  "key40": "5PDmMxYmwCYb4zptKHWHS2ru2UMdjXJR31hHhTak5hrXgoLi94sorDpvNvVnkMbZLRRH6HUGfPwSTr5TepsfjdcB",
  "key41": "2rr1rxBM8AXP5DB242f1MvqyeWmq3JcgFAeo7fZckvifzFvtB4nZFG9nCbrSqqkXSZkDysYNhWrJMDsHGcBannkA",
  "key42": "59Y7dyViFYkWsNmm8dox56ETk8notGWHQe9RC3cHN7v2Lw4KUDg4pxZESAULUixfNFfvDeNHHP5Jrry3L5aLUZ4c",
  "key43": "4hLZwLK8ubNYx4h1pgLGAcXfGwbuTFnWacVMANwtPbK9x4xA8k6joSy4XrW6rdArvriYFUmw6WX9jbwk6VCqzqFk"
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
