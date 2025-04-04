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
    "4eQf2VA7fdgFKzGwcZZ4a4sYzoxrw4gVoSKnWUoGFM55TcebM2fnakpVeq3NHd3Y7PwsbZXSzEs3BUZqXy5S8zVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbV2scAN2UtU1yeS8M1rbTvGGYQXFSQPkyFR4boQEksvDALp4F6D4PotskGPYkxCjQhmu879dB6HEXFdoeqQsqB",
  "key1": "2DAiAMaExrU4Nzr6WVkHqSjMrJzQnooXLWXVsy7DUk5h7DBwLRhodeix1U9AYVPJgQ8RnM7c7mNZ2y7KpquCq62J",
  "key2": "2rdwWkPZPkUncKw2Gt9dgtz4VdHDYtuDuTaSuFmm3hR6iaYhkhjgb6VyxYgMPHpTeis3r6RQmZBSLYaGB6cbH8go",
  "key3": "2pDNDu8Zdk3jSm81MEfcwy95wW3ZaKV69biAcBce5L7LMa1gAma1rEtEY3FyqgxpxGfHmqF8uT47hJpuuj4rzyFT",
  "key4": "5rG4Gz7unVk4upR5az2xxDXKVut4EvXA2RrQRAxuRYgQX8zVr8SbYMoiK1VJWUVqCsjvZxrKkkSsRRxkg6CYTBGs",
  "key5": "5kiWwfseerhStZPNg3yJgMnMmj5256NuQCPAkK9PuTerom9GksnLLk5pC7dDVKCSyWg1kRAAJFo7FPk69G2K1AqA",
  "key6": "5FBeHJY4kEnCyvaENuSjGUCtbdAj1dPyAJ1DcDE35BqcKNNo5CtCRm6L5KxfiXdNb9T71MPM8fPshDYdcwAT36fc",
  "key7": "5rW229j7LynBbTAjsaKq3mVFEY43UX8XUaEvykjuEeExbicp3bHJLfkAdxvcMtYDPM5xXVp2DJ7ADWvYzWGe8TcE",
  "key8": "2QEhkiq34kxoBKhpJw5ugkM5m9pwxVr1xgxwipLKB6Ec5tmrmJkXgnv94YBhppnwutGdAuLjhawWEgUZhYvmC234",
  "key9": "fz34TLvVAj3TaeHm8Ben5FuF4uEvrXP7AmH76YyGMiXPvc8UqkXGfTsiBdRntLfFEhqUVux5rDuGquc7URCDbUz",
  "key10": "qZceKbs9Uw6U5zjbyzgmdEqwC1VAbta2RzrjHaZhhsJLks9DduoZURXpFASccdNm3KpQXwpi9LtWhwnEBGJL4xH",
  "key11": "i8R6HhCuTq8NZsiHwDECAeh4amwMts2jFXyDCNcM4vdqmD1QfHoK8WSj3nRDrZPgc2iw1vdR9BAKhBNNSSxJh6q",
  "key12": "2bpLyMQBqo3aHSUhd2r37DEqpqc1xeduuvNTXUFUpyN7hL6FWXSzXdLLqdXLYjytQh1QGymAjG7xsUY3JrccbSbe",
  "key13": "ZXp52rjbbq1ujcwHJcWvM4zCqJseYu7X1YjhjwW3YoDynqWW4e4UFh4SxiGLnWHU3DNL3tQgiH7UhQUNTTjvUhH",
  "key14": "4AaALi1jWR6qoP9iVq5sTDfjZnVzK7mvkXQYYGHxnmaPQp3hrjamWtV8yTjkGphP2f7CinKGBNBHkKaKW7qSD6Md",
  "key15": "22DkZk7HXRFAjSLczp9bNx2dE1oj6kVoMnMFXY39zMU4Xp5BQPEDFgWCqARvf42hLPjZy8phJfUCYJBv2yuWGvz8",
  "key16": "4nsDsuTft3HnsPcvihGRHKhndxB23WrV6S4miDfVSHGUmj2p8jsKNiy7FnHnG8DTSBVN3umRWnHyZVNUskcXE9wq",
  "key17": "2QNQD5aNTVGPYevnE489TpG1FfsfKpyJkHwKfNH6reF3E2j4bec9z1Z29syc94uz87CQaCYDKafnAd2B5sApzr9t",
  "key18": "4Jcb9LuJCXMDGEbLoVhuNxUaGatwePcsjam6RZS8wBWB5Ae838uvKNCw5WU7FQrn8AKgmSueAtarComJnvsXpGd",
  "key19": "499oX2BJNYiSaDC6rFo9sYptQWudpKFPM4enhLTqjGcLfn21p5budycKHQZKatEpL1vt9mFhaei4a98FjNRxdXJ4",
  "key20": "2dtY4aPoNhvA9uMExKuCJDSst529MogTbd946KtJLAX9rNSzknmKqRGMyk8SQWXmtYagBcM7zrsxwqjffFR5fNox",
  "key21": "oFhVYaYZztqYuFmTnastFUR65LvepBCqf1i8s9q65EZUGvP9mMmUboTmR5rR4vtSiiZi4PRCEdEjLN6qTeFzPFa",
  "key22": "35pmvooYnTemJgNDNRaMRbWsrQuq4dxRJ4yxuqAdcKYvferu9nhjF6otuavXorbAfcCPz9U3qXspCfJHs4gHb9xK",
  "key23": "2tyQBAV2m7jQ7bWKjDAoFmrkTx6eu1S7GGLLV248JWArW14izNVoNGKU7fCNnX5S8FLTYetdSum9JqTRTfaE7AhR",
  "key24": "5Us3NyKU2YaFsj26Kg55VG9Ycib8gCt19tDUXopcruUCunAbiHCcW6y3C3GLVFsCyKnTquueyRXA6bcfqPSjHT39",
  "key25": "5ZpJ2tHFMacfhMrxR5kifTmTPehAgiVUTttbCM3eAqMA6kYuuZHCHkiJFzqqNvfbWuVrHFEr1zELGSLUGcGHDnAu",
  "key26": "GT1b9DTw8kZ4dtn3Ue3n2JWHfXduEmFA2229DGExftPVG6AhLBvyQkKsDwL2d9vnxP5fmwrM5LygDDRSSx7pXtk",
  "key27": "qBKyazFTLNKmWJeGvPX8EyvzKNaV2DRR5BRQ7VcHsTGN39FdVmZJRoy1acdczJuSvTDKLJVBSkPaDbeHeZ8A7XX",
  "key28": "5bSah72Av7CazKsf9ieUcGBUK2vfnJ8yjdjiaBmHFBYVcyUDS1e47qgvyVyfLk2wNAz5UkSj7uty9F8EdZCDRNYm",
  "key29": "PaayHTceWAYETHjnkwT7kPz9tjcQEHp8u7XqU8cdeXABXBELASsCRHJrXtvAoFSrZXCaCa4ZbLH5fUtQGBXHXhW",
  "key30": "4s1cjijFiyg45nesGLisbKwx5D5Lcsarva6BPSdZWshHg3Lu69m9rHitFNAyYt1bjkf9hsaenitgBjiQ5unghi4E",
  "key31": "2Tv3L5L6CX581MCAzfrT6755pnmtc8LW4JRgs4CgbUFZBe3qGMFT6J4sv3FD3beURUvHBJrMYEaZDtBYWqrkwSJx",
  "key32": "2doRQJu1ZYSrp9eukX4yKEZf2rmmwgTFDWJsuogwVTL2xY3tdug6GsNHWBmEf3TuLn3y9sNhzJTfvVvVtMGQEcfw",
  "key33": "5h4ZQjCjv74CieUGmz53qYCABAS4ZDgjy26NopduDL5J8uTaMhgegETEVHYsSHEWDjAXzjABwuZjHKKc2jvfGeZc"
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
