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
    "2St5xQdToLcZ58BkZkgzUwLbexVryLjD3g7kRn6DNUGDRERu1GjZpuqHMREyWMKbsr5eTq7GhDnJ8mYuFEDHVeLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q25qHqaLuNRY25uHhUgqFqfPLW6amTkEAvkGYWRt56W3r7vJdy4CUZANKXxXTrEpvRw3BwZHiu4Lnyr2ygToQmT",
  "key1": "4sFFqbAB4HBaSDVqfpfJnx2UYZYXaEWD12YxKDDhDowYx2kmaNHxMxPizK3tPsfgrBwgZmipFxH3mudDpDkFVyyC",
  "key2": "2e7Y9N7xedJGAcmKpiuYoAbuNYykJxM5HJxbbH9a3mximTYeqQgRmJyVtjb36JUKAhHpfk8YcGQFdbJ8YmSvSZA6",
  "key3": "5FWgYPKaS8G4KYq1JKNTpW544F9reQNF88dn1pm4mDJUshstc6G1fuYXdBEXipiXFPjEZxjafJNA78enzQJpdU45",
  "key4": "5XEJEjLU4Vg1cJTZkGiT4SCdk6V85mJd1UXJbYMN6jxNvER5NyA59UA3bn8sTbk9qjRpzimEbSGi5KRKfY99sGbU",
  "key5": "54SFPrFu7hf5mHe93Fxz2Pw79K86Echa1YXwdvBPir4cXoofp79WuPbqXoenHrFP5gVStsMfdYVWxYMYqTsYSf2b",
  "key6": "4a6THGkDxZwjsspKa8dCrQbT1KDBaNqKw2mzz81Tan9FAQjHYyZZw9U29aiFgGHvqEeyvGRzM3rmjkxmfUL8xMTh",
  "key7": "4LyDQT4oVJnm8wGcKuXeLTEZS1TwVELK36ZDeVrcVuhUmr1YfbWTRzqtYAFDhnoFjNggkmUtqmzLJ1cRojUrVD3a",
  "key8": "44X5i6yAg3cX8cFopY9unSfVWiPWPE5LA6Zzvz3RUWN1hMxBungsaCCGSqoeebhiLXZ8v9nApqzWEdVutkAUKuvM",
  "key9": "5BpQtRXNtph8vCH8NtJV8yyiuWZthLhNSETdUeqYfVgRdQtrZ6stoNwfPdvrCwunbDTW7qxZr7wcmXc4hhRkLS1q",
  "key10": "2awbE5fmudMbb9tSaFtdH3gFtADuyxoLQ1712ss185A9UwxRDKsqjQBvyL1VmEpChBtU3iVeHjEEi464sZKL6j6B",
  "key11": "3hEXw6Ed6YFAwAj8ysnakb5o2C7oVe6stYPVnSRV3NqsnrDKjbXzYB7kpxDmNjRe879Wowzg9xmpHaq7Z9ZcAwgH",
  "key12": "2diuobWVEaUBiZhFahPPro4EqW5qhrUpvfFSGEHXN2VQaAaEH6KpvtvEoHmU7jLRGNofiB2ztaw2ZdoTWh4ZfcYM",
  "key13": "5RoouvV5SZrCHAHHzBV8RgfLJsNAdeWdAgoFQH3x2LxZrz3NZ7QFMsMv3zWv4YJ3SL3gqbZEWmcgerZQBnAZ692d",
  "key14": "3DPVDsfztUnmsDREBtJN5yWU3U5RNN71DMFF7ob6WEcdtkdexkikmVA8YWDpG7nJTZ6Tq47LUJFAKdfQDRs1Rc2W",
  "key15": "34DNkBh6gAaLQEc743oCZij93RtX2uuKw3YUPz3W1n1qgUjfQnVdW2fQLbHfUdKVR42eMBjEUmqbW9cVBoBDhPKn",
  "key16": "5wPMkvjruP7DFYsufEf9QpXhuoxEPRwdBR9SsHsX9fbpvYQ9oYwadCz1nx8GSdc7ZFDziRQUiDYJpohgh7ALpWaF",
  "key17": "4LTi9t6vgvwrHuqyy4bkyU5K5r79ZyMNfxadgGzC3jDmFdaBtWS8ZT5zwtEj2Q242deMyPQzehuGQvKAwrJrkR4h",
  "key18": "3QPuv8iSbCPfuMHkVcqi1DpqdYQxQKgHmimeNw2SkkbMSfeMAoVuraVVfvgwVqrBB1RLwLZd3ZmMTMPyVtqyEn77",
  "key19": "5vRJ4wU815pqMuNKFsGhEJTwPhcPtCYe7tjWP9FmwaijoPiR2X8i5gBNtqneN46o6CxP3gWeYii9mtxaTkkenjAn",
  "key20": "u2u7NQe22yfo9BsWyKjuTZCS6zYzEJvNsrgC5JM47NNrYffxew1V3EwamzoG4d7sceu1NShJkAYPz3VJKoWtacX",
  "key21": "2QyA3TBm1xCDcsxknyryLohoNyKDDuYiyBfcy8tggu42YaXTD2K1sR3P5JNXVBGqJhxfEvngmQRC4PQTLT7PMkgf",
  "key22": "2KFUVxzBX3reNY5oESct9yjKLjQPiB3L3Lh1FSToXiJyNktZULGuD7hxRzggGdiMuvTR6d6EwcHJHfEB7bnzKuAB",
  "key23": "5RL52HtwmnM4B98xXiXKPRZXDbEqtj3GjEHL4q2eyx2xXHc71Q2amrNpEY1yY5vxqiaDZEqk7o5u4Aba3xVA4ZBD",
  "key24": "2WLUbmkH9qq9yiUuHDk9xS3emQxfX3UTXuCKM6z16CMB3ZY38PcTfWCHFZyUWZyRsy7XcJB8SRSf8e4orqr4rBFW",
  "key25": "5oKEXTDn2N4MvhgkteW4akWvygLMZRAoKqgMy3MS8h1ehuXZJQzcQ3DZVqfvy66PcpzRkpDVowMDYXruvNMGm6sy",
  "key26": "4Jk9YJj7SQgnWP4ednu8QYsh7oYkBQQhSsS23vQmFwvUU4DiaYRgUob64LnmcRh2kwLxpsHhvDEf99JwjZuDjPWp",
  "key27": "fGZfhzMFuJXvDZPWmEP8jhF65iNkhgmbtGR2MXX4pCTVdsnJ9Vsgrutvw6GK2TxD3dPpKmcPATyTrUkPGYTUwBK",
  "key28": "kPaBtFEwAkbrwsezwfaWceTLj34MTxxPQMNRkERXhRr4ApcJ8zfPToQ7J1vyu7rjMjWzGbcE9ZhNazYqzxq2acU"
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
