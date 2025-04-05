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
    "43yfsK1d4Q7vexbemu6amAj6Nr8a581wxT5gpCkH5tYT9pzvFuyEwHNnRuFSecyWT8AjP766GHWA69zddfZfWyXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F18HJU8F73weQjkZ4jgsk5ZW1BFHY3jEzWZkux5oRiFEPzGE9H1YJgAxyqZ3KKxMUUYQ4c58A4mRc5H2fHwbLHW",
  "key1": "HB1W7LqWFdijwqkrKyPYWGgwiGvBs1kSLcjpAn7FexVbjwNQJTBqZ95k3MSaMgP5k5PyZR7ZpszxKgjhLrMaUsU",
  "key2": "3jZho6vzrbkk7vyjsyhxikBgmxt7X42mSChExHv6bHPzSN97gpF9BVkyz3K9tM6Q5kdFgYyTRC7XwJwWqWZTgf7R",
  "key3": "5c5iDA1yB2C3uRjKWp3aHjCvwLWer8g2ELUteoE9F4UApU5638capxANT1fkNF2oVio8gBtgQBcQMSrndxoC1TkG",
  "key4": "5UYA8AgTKvbXxvnAiM2FAtdHMFPAazgj9tn2BzHZncVVBtDfe3Ydj16iGD2dpHYPttYmeRQGxQ1zQThobsR3oXfW",
  "key5": "3N1aZm6n3iWw19ieozXrgZuHCUk9ED5bwy1wp9H8hhL2GJB4fymfccKXMugjsyeQqxHM6fzyGKznpkocixzcs4Xz",
  "key6": "36yHXtReeZLfBoBX2G8xmbiiPVMQhyDw5FL9dD1f3V9DqR3LzY3kCP36f6U9dH4pSbvdBjPG4f2ML8mRQF1DwBUH",
  "key7": "3LQ6DvfRuWCLLijbV6qgdUNKF8H1u13jffrkRJFzKXQpc3q133xexC2ad8QDi9PGtkxx1dGiexV6g3QPAu1HR7ET",
  "key8": "2WjjqNf2dKSfJV9opFXuJ2V77oDAVyeeNXYhhS1wD8LuqcGnLykqNTE2CuBH4b93Lh2B2CFKNromBe8TNZfWPn3f",
  "key9": "5S7JfWvC7rQBTVBkEQ26kHTGDbQx2zjsvLNrLq9LQ63QDu4cGGscia5Mz5LWQ9zbExhXFpFDL9mLusqtzfkKtjuK",
  "key10": "RVt2GawQZWN4d9p2Lyr8u3NguMtZic2PzHjhYySCVKH8HezRyhmdQRvWbGoBj1EeX3LYG58EnxHYizjzLwjFkYi",
  "key11": "yzDR2Ps7dSLg57jouDA6X5AgjwNPhacbKoxNV6Y5JRkRMV6HnXh8oh4YjYphjjkawMiTvmXMCEyv2WFc4kFJ3FG",
  "key12": "264jBRKaXESJASmRs6wiz9SMdpyz6CAi2KGTWnJs32WUjb6qRjUFBSD9KisRru6hAxANPdPiqivyZJXcoRAkMNH7",
  "key13": "43UbpQjW28qMpta5exqJpxGQvbWB4gHUdRKMxG5wwhTEVXZrBVNBD2AjJvXczceeu2YKQyooM1XPfSj1DEH5PQkr",
  "key14": "3byAtDbfEECHz6fBg2atkNcQewTQL4JzGtbrGCpuF2ucYavDwSVjfwzPmhPtrUekCEHEwoEfaAa7xpPc5s39DxXP",
  "key15": "5WJZvKQ1j8F52oEV6b3RpxpZ2DhpMMNmKLve68LVQPHpbpxHPv3qy1haADs4G85aRXFwBBeGvWzjc5giveTeKkid",
  "key16": "5ychuz7e7Zc5obZJukECTQCrcSoqq5rXipKa6or9fdJxMEB6NMQJjHHjQhihZ8DJHcpF3doZ7t1hzTgCuBL8uYxv",
  "key17": "NECUGm6F6xh9b9AWhF7wZt9vj12oy2XY9RPAu4jFkrkn2CAJYc3v21LBXHw6nSPEBJ5A4Lk41AGXZEu3W4Yrxtn",
  "key18": "3ehMdrmUGcQTpdxaNDNKiXjguZwdhwqNeS9g8QVmmx9uuSHbyqwhbR82G1TaKMTPGp3tg9xM2DUzyYMoeuNVbyqM",
  "key19": "29MSMSFNYZJRQz5xJM94RQYw1XtLSyFqLensuWpuobTG4tz376U1Gjzt5qPgnprcJ2xK5BcscCpeew6B4Mu7Kx8F",
  "key20": "5zxsY6ZNRnJAqkYUYfsw838FsCBK4qTwRZMJPT8xe4s8QkoCAaw34XSKFKDcPqzfV99gKnP44NMe7EBZxcn24BkL",
  "key21": "48VoNacy1uARRiogQpMFRzW6ytvwJtJ2PqyakJQtHbz9RFMjExWofoYR4ZCQKXY5MBLXcoBNa6MZYbErZDiL9kA3",
  "key22": "2KeY7eqyoqLardNz9KuNra8Rwse2DYNo8Lxvv8MGp4M433DcWhLqCEeWF7XhFXdU4pyme2pSLP8uGAUWBtfa9So",
  "key23": "2XoA2PFUAZh18EpZiRD2WRjdJctMqht2rQuRoHPTpGX6P9pNgdxLEMsDASzR1nvK99LyLZqGGCLhMuLLHTRBUBdg",
  "key24": "3KRUw6qpeVishwiydBdWmiJwFgqiRKKQaLbcN8A1Yo6UKxFQ2t263KaSKx7YdrBR25hj79tfx5o6E3CSKAeJMV1G",
  "key25": "2dhdQJodkT2LG79qD7tikz9sfMDjebRyE5qXg6bDtKAmM6n9CKGgQ9i9xbCWVpVNz8xcAR2ckBtS2Tv1nPLivAEx",
  "key26": "uZC5HLuSkM1gQKz4avdS77cTtLzSfwhP8LRwTaNZDjUEe6hYWwM5o1bWqYMtGSLYhw2vYaxZLCWF6iVZTZ2dQZz",
  "key27": "2GTznUyzYGajXLWmnuZTt4KE7PZDESkVbzQ2ef25ejTpkx55BcbBwPie1QBoTDhFm2GWtvV7yYsm9Axm6kgyfrE3",
  "key28": "3KFdbC5JjY3uR5N6UsDaCts1nt1d8xXQ27iBnv3mzJVa9vZXznbmP1Us4tAaFrGXUDq4rDu6S2DT2JiSaEHkeatS",
  "key29": "5xT7SC8tbadLxXWvjzAqbKJ4bCdgeuZ9hrVThKxrpwacaF2XVGdMtLJS3YyGpE9QgfkErcmTi7GTNbKLkEYYRzGM",
  "key30": "9Wy82wmAiBemCHU8sc9TWj6cLyW21mBWTe7aaCGmXbVK69V8b3FqzunnpXe5DA1DiCW6n9Ncgdf8dHjYjZdK6FH",
  "key31": "2kGvEyJi6LssxsjEHqoJcXRsv1vXDmGNGUnZuwyNsivVMA2dXoJFg7U379QBYBmmRCLAxV8LnunkQevSJCDUDwKg",
  "key32": "668iF35ovyxNfv8rxfDUGwAZ2Vsdb7KHef9Qyq6wSijsb6m5Fo6bBkwYPzHepC11EURdcBPTuWki7cLWGrHxM2m3",
  "key33": "5nV3VjGkh4tr2yScfFuDo8fV4Qzur63fsNhepBTGKr6YuVq2zUeMw88M76jZ8cfmFyob3adHAaH6JhmxPUab2Lsy",
  "key34": "4Vb97ZuS7t279WPAAzS8sX1TR892Tz7sNXqfDbPQp7vN21yY1G9gcw7GXR1TaH5bb9a51LZV4kpc3ubMAvHUz7s5",
  "key35": "5k4T2i5KrvnuU3diFZkamB3U6aKrpUGcEQYmmepvN7mfRr2p8ceXijzjFEmeAJQyFfEuF267MgGN3iaijJkf4K6g",
  "key36": "4YwT1mhWuhAjgRpHgtVqJ7cJDMqkmraJ3usjMRQtDFwZ4gCVaeZrmtarS3xKo2sG6djnteFS9XTT88t5wPqdfBPM"
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
