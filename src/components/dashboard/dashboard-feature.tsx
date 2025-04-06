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
    "xvR2GjBCwmaYEUuL4y1vG9N9WxNWQEpENHuzwaJSftwiZyJHHZuoK7F2TdPSCadc11WsRv5bn4YDFGFvgzXpcqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fWaeDHu8JipBew86xbXMCxsbtURMZvUJErtzoyYuu68ZRE3YjYsUt7LcnWJ2aP9NjtYggWx3uBQxvtGh7VYaKr",
  "key1": "5uoLTV23ZyawP2Hsk7idrTKzGXcGfoudauXNVAFy4NPGVYEnEaXRhrwCvmC3EPoS7Z8B7RT48gnTqnRXS4x9bCvT",
  "key2": "XbrJEdo2BHWgWL7HNgxSotV299mXgLonqB2P9nS1LiWnZqkd1PyphVqJmuQM6Y1zVP9cT8z251SBqj8pHS55rVq",
  "key3": "2hsynDyV5SZJFeZToW8ZuPHcdq4Uy35aZ7xpXcothZkqTmEDhUHub3oZbGhaC7eQ9tLQoS2ku7hQgE9FyLVACEx",
  "key4": "3KXjjTmtws8wBg5m6f5UyuNKG48D3LmZVjccPPDwTktcDQz1cinPoFSWAbRd1dyc5GJu8mZ1DypLMk3A6godbAZJ",
  "key5": "4XmnqNDH7ovHQeK2BwC7ZLdZC9EhAAipyfJtHfxezq1PEgPig3dYu9erhRqmSj7c87pznc2v3NGVtAkqTpYtyXpf",
  "key6": "5qqSfDDf2YQQwJnozH85dZZ1reLxA1SzcxFgcjZQAkeNH2FiqadrHUFPtJjEtNDdxTbDnU8wLc1ohpYeqQPRzLPB",
  "key7": "2JF6VttpxygD2cxWxnGwgu7sPSde7aU73SUQ3SB7irjRDB6RKcjwH9uWCDGciTyJ4X8bECzB8JqjF9iuVuxRaMyV",
  "key8": "2JVjnn6Bhxt4kmZrkNDSPwJhhxJNYoFWoKZieJ15Rcc44qBrbeEpZ4Wdyty1kf7Xq6pCFcDGqRskR4ZYXHTdFdqA",
  "key9": "5Vmdg7j75qC9kASFbVwGdPeJE3AkB6yFKs4V6Syh4krXBSQ4An8pEZrqSRk8ShA5QB1XT2EdvFX5Qn4nzyQN3UKH",
  "key10": "2fkchd539EbKRmVa83xEU2nCc7Us4JkoJoR94CFtzqsoEXyTyGJf8GVczTjnwCx3iqFfCwkVczpEvomvvL1Vemuh",
  "key11": "5h5Sbd4SGP5aYycTRB3izr3mDxa6q4CHqeHU3TjQi5JYhPBJ5WHs5PjKDxMgyL9sArvS2z5qRot8w2NUzjhy3SPk",
  "key12": "2YS51sUREZ5u8F9WjVp67G81Y4QBeAGr166JgQw8m6Zs1qKbhgnbKFYBSQXj9EryTMzUvDEzePqCALdTCAHaf7iz",
  "key13": "5cddjhEJLYQT3PM7z1C1J8LXHSvQsGUDVW44V47drURD8JqL6rakgFBqRMH8ZLdqFvQwADYUhQ59m8WHzM7UxoSH",
  "key14": "2GPjenYLpG6s4SEuC9xL5BedQ4AmDndmTgy2BN1QZBxzybPZto347L5P45QPi38pwqTUzT9KgXWxg7heJoKm4kzH",
  "key15": "25vUAifhqfjjo7kzoZg39urHpGzRb6bbP5p7vxmnWfrmxYb9otwyEoqjNbxTNHUnS4qAtvm39teuCSRdG16nH3de",
  "key16": "FNdDRZ6ktbFV7qcmvqjgbSXD8HXxfC4qxnXyuFKsMZ2veZ5wRXSh3Rb4buqZ9uVvhWV13LNzRFvoZGJxfkN5d8a",
  "key17": "2HeYjNCBnLZGhotqtQmR2Et4KpNH1aatjqDV8ksUCfzfxKpXWeLUvG824DSrNJmj6PWPSA4sEU2655ZsgjFPLJkX",
  "key18": "4qYJkTYAkompaKGEAzmDWjox5FhGy9UwHYnnneffMRPcGFg8DVa2Y3PZUW7yxkW6DbG9RXYdr4pnVCgxFcjNvkHH",
  "key19": "3fnZFYWp65LUh5FZAQzEPAb1HghaUBmkuaZRp7jXKoydSXf794eARt8nhRFTQgnmV5quAZV3UaxbBFhFfFcvUKJz",
  "key20": "2oE4Ti2UX67a322BLDPNwB713JcS7pkgRUTTYtwEWBLEF97uEqS5AKMxXx1wEumSWbhMxSy2nnve53L5ySjKQgMP",
  "key21": "mxPEPWzq7FVjEFsdVLZDfV1E6NDkpqCfWppEaQt5338s4VdrBQJuprUwcGzSLpKhwGWMAZF72LDPFDauvukCCj6",
  "key22": "3fSTSuVXFh7zygSARgSD14Htgo1thN9rgjVds2RacnkqVWpPwbEMUtCjwdgsgN3uynkb7fwsb7PmEhgHAPbAEMpC",
  "key23": "48NGbWip3PNkE7jqMp1pQh42sLoj4FAdmpPZpcQf4ormuEdaknud3xhQpaws21uMEbnT9uAqJbAx41Jsnzfm1kzz",
  "key24": "2AABq9UXBDJGhcZ9txbmyf2KmS8k6BExj7VB7c59KdtMUhnuwJcDX4zGPhRKbRgjWSciL3YB4XR83Pw6VSGjTwcT",
  "key25": "5rZ21vmPLEUgAPMGU8369s76ADBweKQxFkDRz2wyyc3gV9Q1UDsWbKnvmDug1tdkrqi215d99bWZWAcGYG9HUpmr",
  "key26": "29LxfzBkMJ3yCypFdYA1pmiE1NwyeXg5W539e5KK33ae2GGFLSanuzeXFnA24V5tynT9i6TWeA51pRmpUJ83pNSs",
  "key27": "5cwrduRmm6fugErPvHksDQw5s8CsdMUpUvALKSixKXiT65JK5Tj8tEL2F5Xv4yJBfF5deGcqT7UkroVaLaiQstjJ",
  "key28": "2YTbyiYbQSDmLj4kHphUa91ekHc2fiCUtVnJSgwx4ps95epyNq4BSja4AKcy1HKKqSAzZuynABbRiPEFaq79LvZh",
  "key29": "5VpcHXCqmGsE9ycGjBcXWZQyE1LeKFZyb3WpSep2jPjZyrVgdLyEnEqvFM4fARJZvX1r2SAqPusWjAQhESiRqrBg",
  "key30": "KRJQrx2GJuwMhb9oLGSM7mohSG3Ti7owfg1x3ZzF6rH62TLVGASRwrqCnVubqH4Dc1hmheN6GijuhTno8hHWoiY",
  "key31": "4zY48ZP764qyJAosqNtYhrNaZSpyaVX6DuRvnBozbMJAcuArZcLBSDWMoLSDknYBMo7LHPY3Ydyz6XSUZ6evK8vH",
  "key32": "kcJEevxjeMZxSUVF2E833LvDHEFHLgYc9WVpAwz3bFodj9w5TXCGGU6rSc83frYfkLELACQsEP1wxK2y12JNx3e",
  "key33": "2ygq5979pnMrwbdkgPDG4xwVBbHwMLA84tk68iTYyteYvYREubed8fzTeRceQGhyMJGxoMBzUdYCmzpa67d1vMzb",
  "key34": "3CpdAsyG7Dz4e1Yv9qv6gMRKL53u3ovAkryBMPFEiErd4QG3vTCTorLCMyWWCohEHDwvKNL4o3ioQe2HFHYcbZt9",
  "key35": "2yrKq56bkZ7j6ziSGjz3qDNMvfgbAUULGMqYLZkMY3BXryKtMFtsfi9BYiH8JC2SwYszTwVfH8sYCcaKjs5VY5rv",
  "key36": "5oc12W3ZKvrCbK1fa4yPWaicN8XyZz8QaGjvdbEfzQVdgdDgikwWtq9zcHxAj1VviV8H2XqAvCw1t6CfUjCMYAUv"
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
