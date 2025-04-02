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
    "LgcPSej26i8E1M66EZvfgUhnLfsuogc5fctN4VsdQKANwuZ9YnGAHZX4d3ypAP6bYDs55u4rRrCcQ4gKccPCw7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4yDeMrTxakPybcQvi6ZLegiozf2VLHGyptKJg7QHR25cM6CYK2zaC5vgHA6ko1iPXuVUxe7bncv7BfcboEUgbw",
  "key1": "5LkYWrh177dzkVHnRWHKM8Fb6c5rnxU8SBYyi6geRDQK7FsyA74okchYm2aSv7ekohNot3F2FENxiKvMXEc895C3",
  "key2": "UsWQ1pYjLrzB62voSYcZpLfiYeEPZfJ9CeQ8RPwJQrAxZFqhycx2qAa9aKPCEG1bABMwuv9eQs2oRQC4ApBAA6e",
  "key3": "3ix7JKdwLb4tx5U55gYv5r9ioJdy3SY83qhsAFT1965pbMdGzL4QLNY6b9gsPktDf1zSihNcqVs4bXLWU8PiXecs",
  "key4": "4vNPSrWf2uJrgKy7PNmWj86CqpjFpipw8uRvYHGv9jiKYhJ3HnqhQpXStes3DbuNGgucqvUo7n3SAvvkRgdigW8M",
  "key5": "VX5jrxr8U1yJZwgBMdNA4yMn7aHqV2oY6nVa5dN2NocgZuwJNJKhDW5y72dqd1xxdsefwPCF8A9XqaS9weMpU1A",
  "key6": "4LLxBVscYFJatcdNt9i2G9HneTfZTNzwHEmPwuFjgazRwHwDP7uWSJ7YPzZeEJW5DcWgmuj5TwxSFkyynH9A1HrC",
  "key7": "3meBRNKG4bnPBqCNyNEE9p9LKGEgHq2bySmTKs2ESCcmGUJpbYxzEC4q1v66yR2RiUpsKdpiQATBW1ZqpBHofjQa",
  "key8": "2WRWZRkwasny7ZSyp8vjWsRgx7jY6nRrBBRQYUzRT1Z6GcUcHMjHae3idtiB5sorY86xjQDsWPYQ6SmJuNnXCTWh",
  "key9": "rjY1RPmLAgAoNCc2GrEZ3Jd8BYsc9vTjQAYXppCQ6Bd4eTpmo6dgyQ8MmCEWaKouVtB3bnLi1xeAZsTuoWGmetG",
  "key10": "2f6hymQtaz7PYZJ7bLHJyBk3KLv32up7kziYphaLTXv9ocUpSfd81a6EH3SiMHqTDAEnPYaXw2XxqfVnpFVa2Pa7",
  "key11": "38pAvwLTx2dobm2CGnzBttW2Y7ou9uuwZSaja2Fc1MTDBc1fuR1taCBAaqENQYU4187ZNFNo7svtHMU8vb9S6HGx",
  "key12": "5J8CWcvZMNNRn7BdtELscrQH9JdVSW9j7oj9Li74r3hHEH2UFyB8QcJqeAAXNVVukjJYZmDY8PoMQpNZDQYQ9SZw",
  "key13": "5SpRbqr5rmGHfUqadd11S93zUYz9DDiQgfsYswwjShqTWABihywfD1cMvo4gJt4JVRovaobR5Um4zRtSmuvLnXBG",
  "key14": "4hMHYW7Gf5kRkEUjbGJWbJnXvcsGN4qFpbb2hMFwGn1KSsyFUg1BYFg7fSsj46ZRUzDLZ6ACxm4uxbqCXhEzEkb4",
  "key15": "5FjjR673FxNtC7rvtR4Z2v1grTvXPNdDW3a8GdMDLQgVCRaQMs9TzqgNfDAcfYnaiXAGM3wQRCzW3FBr5BE6GxQt",
  "key16": "3qxaJxvRSQcR82WjuCkfJMKrDbRpTu39xXxtY47r9jbWnd2C667sgAUMgGftUarZWzcxXKpcJpK2tP1i81Tc7SrG",
  "key17": "5z75CxtbzERWJy359qM4g51jvdXbotnWpY9BgpApdWLXJxzWtrri6fi1mbZAg76RU4aU5vfHvAngxPDJT1U9YAwP",
  "key18": "Qv2zqYYgHLSZkBXcKqBH6Hxyyn9GmDruvgG3ytfEBmVTWvKNPSwMR8eBy9BFh3CForjbKAFK69wBdGrbFxuT9CD",
  "key19": "3iLy19C4jujgfqcywm3os84FZuGpD7xftMnvqZyAiUTzxCNkHMa5vS9tGcJWbMK7z26KdfSbUftQdAhoFZV953d7",
  "key20": "2AhjrgKXsfvrA2GbdX7nxgBBUjwUTFrWQpZJFGgQ2byQWs1AMdDSXZGWbdCSj71nHgsCnGPMeoo2a7KbhzG3NuWc",
  "key21": "4Fx1UoNr34Zrz7Y9jKMLwPLNjgPV5mSo2U1Ecr4Yk7h3nqBtyL3YhhrPY9YijCzZinSDT18VnJLNme8JhhUv4po5",
  "key22": "67UMeqBP1QNuuJoytHXSzdRnXizsuqR62NR79nF334mMnrFBTwdFVzMD44i1P8GuHkm8q4hZ3gEB1v4WDmvq1RY",
  "key23": "5qjzKmHzM2LLEJbt8iXZ41aMYh5fANrqe994HoWvPyGnYioMWyoPQV8fvyo548PaNmkvsL4aB37RyNQuP8maenCX",
  "key24": "3xuZih8m3QucmV4YPbi5m63RauPJ9V6wEoXxpJADFY3zMQG5P3rcRSgLbhdkzNB4GiaAWvRVcK1fW6pWvRwMTD3C",
  "key25": "5oFF5JLW6ooyyNa88QXs1VsxVAwh1UmJT1fbAbGvsBodsVaraGfndjQHzWuawyMLu6QLn1km6ooH5dTyVauzUHy9",
  "key26": "3tXQpqD4ukSdAx8qJoDDM5CqnuswGYdNAtBoLwGDgYqbXGRUrE9XoXK7BKotFiZxWgbTtKDGrnxa8ZPbunCSctCu",
  "key27": "2PAKBeXxPp42tLrJw8Gh9rBQXhWWMv9BhnaEJqBScTDE9xabeHVzMfBjYrvG132zXJfHJUq42CKVeops7tF3GJ65",
  "key28": "4KN6d2bvSQuTwuh8e3cetyPYUPRHKXrWLSvjRQZGQzTaFwVhtZBkymGwpjfiBzLBWhBj7mywGuYxLoWUnX4GWXAe",
  "key29": "2WQsjmaHbYDam1N4iNUJ2aPTt4nuh8DgZh6oxtWr5d5YSxnbekCa5JwQrt64UHVVQFSSF8oFfFNeEgYHs3UrLUfM",
  "key30": "22uJjWneJn7HqcLzMP9dHqHVsXswrHJv55rrpun5ZgMs2qiYLxLbXvUAjCDWay2rU2c38Tyu5oKtFbeS5ufZxrcF",
  "key31": "5o4mmS9WHqmdnDtFf9WNrRWrXJ5fr7EWDQEMwnAYTCq9cR8u25iGVBR6MDvJcjJPji6ws4ADNKBBsyp5WJkYhKDe",
  "key32": "npCKGKtMZTtjUg7khK1vWeC8kFxpr7xMKzwdbZnEJPzxvkVjL4p7GPPUM4LBrTEF1qoxVawvwFC3yR2FPP5eCaW",
  "key33": "2Rd7D9vngohYj22bAQFnaed4CmNnYAd5DVff2r33SMLrzXsaoV8dbvRbmpSGz3fPuzF2feMmM43aTtLwEU24qL5g",
  "key34": "4g8VzRUqX4dGbVmrXHJdjjD9SHc5p8c4TcyjWQnxWhMQDZbVjBNh2cwLk848BKqD7QNh5DPhf4AKH2y48hMrc3PA",
  "key35": "2fE51xhgS8FL4kP1C5gxCrCT51uBZQu2pjid8gs5QqRmysLaP1u2jM1zUBfWhmbqvCgP5QxDUybyfwHsU4qb3rz5",
  "key36": "3Scb2AmRa7sigLmB7sBcFtieLMhFcaXVRVcwmGrmZBzjwaRNhNeHcpAuH6NrqAyXYU8L8g4C4RXoqU1ZHf6C8Tnf",
  "key37": "2hvvsj3nXA4icn5GPV1vyCMBj1sSwDjWE9CqFi933mLuRACpT5ZbtJ7KJTGCPo6vWixS6oVtP7jyPdia6THYF4Si",
  "key38": "wLoLZHHUKtTJuQLKHqVMnh4UZAgzXpw3u1QYxNaDfAFhRGvM5kioxCD5thF1F6WtpUhLdfJ69tfEM1XLVZeV5xp",
  "key39": "45hrziRTYtXwReAMJMbgkdxhxAUwyWeH3guT2K1iybHUD1J7Nq7KCRQzNAELQKa3EaCtdDnJszbzAfwE7QJrcBxd",
  "key40": "4sD2okUJDEc5dxe77SsxHE3Eo5TsmEybJeopFysb5fpxx12sCLWHioxVLqSSdVVPUPEc1vSP553qXCHijkeKo92E",
  "key41": "4nr4yagS552kefQPgAnDNCANaWmw2Bs8Vno8c4KhJNveJ6JywFvSVvw35cWFGoyfRwrvkv6NH8yvvmPunDERq5JR",
  "key42": "21kecpt1R1dMTbsMTLpfh2E4qx9vHAbiCND2xc85hi1QyUSTtYtF6AXxGcs2nyHbLDCcN5UXGvMy4BhGrRd6avzp",
  "key43": "3zgxktR8uc8dSBPztwX6ZDvwEtctUhncXidioRijAp5oHKJbwFQjHJhM8dRPH9nh7kBzyeHjF2GfxwVGBjbAXxZ7",
  "key44": "5gehdFMXWPdYKmJchmiPecN5joSa5h9ZgbHiwNmXtu2DQGv283dv5UiZifheNHbF9Lk1o24sQCkUYWP2LjdzaMFD",
  "key45": "3XdzqNJ1RudpyChGN7e68H4UryiqR838zPZwtJYvC9hXraVqD4prYfpuL7XLfWNFLEztCH2WFEddeWUGgkjD6zPE",
  "key46": "ppVzXUekSZGNKQe4Ksqs4F6ofKMGfzdSqt7mkzeuB5LorhdGvAogad5EYcUzF6Xx4m1DL8CnHJtX8ksGveprVKs",
  "key47": "VSNQ6Sg9UeVDZxXM4MUiyc1X1MuAQvvM9zRmzUzbr4U8oAaheNFfZYXmd4m4GD59PVdkKVscMU6dHehnWqTxaxN",
  "key48": "4DJFKu4jGpVKGuyoGmA3VLQAtEy2mrEyF9wiQXHYvurwSY9NDojoFoZAHD7KQpr23D5hMirduieQ6S5b5xphoHPz"
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
