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
    "2pw2dieqTLgAWuSt9HFSgHbd9qyuMr6khkDUHD5ExHbZtFDC1ygGjhiFJCAHfrc2KB7nZxFg8P4bpzhf8NvbBPpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUnqRpfKKEBF7nNHLmx6uKH3PAK6sPU2Qt3VpWe6AB6FDR8u2sEX4wHht4roZytMR7RFt3USvYDZxcwmHiufMNG",
  "key1": "4nzQu8eAMzQS4Yfaub5g4s95Ro9wStd56hCFGU8W2LRUe5vfWKLasx18thC3oyUSdHr7h21Znwruk39XWr9LokNH",
  "key2": "2FgiLoF3FA9xEMo4hzgFYHhd77XQjDfZp1PuGJULn1cacvR6L4saBRA5rDaPv9LNVfDcxPDXEBLcKvPG1wBcDB4x",
  "key3": "5rzov3khnzVbrnrruwKmRBastPtMirbaJWHWiPW7FbRUMYBHxJPQ2Hcgi424XYx1rS6hghy3F5FVhu3fG5Mb9CzF",
  "key4": "124BdZUvDrAQCuAwPyQwhYdsi6fX6NYN55LNnz18qtVcFRrKLw6EQ5YaGFaavssG7uiZUpm1SwmMgkmHBLAjSx9A",
  "key5": "BZVcRkxtMgguYxmrVgwyrhY77y8X3d6MmRpozTv4ftbn25fPpjVnuPcssBkJegL5H84tH39uuukeMYUF8YCfV8X",
  "key6": "5fWkLChGJKyx6eP2qD5ESLzHhXc2E17mThEL8DP5asZ6FezZG15UtNkqPne3AA6ZcyV7aKw9KTyz42LdsEadrGJJ",
  "key7": "PC2m2563wKdgYMsEgtjKTSxdjnEFFPg9XwQbN71AHoxJqLzKFawdyUHV35zgjGYLc8Bqxeyfq8pGZMoqQedkR5z",
  "key8": "3Tz7qspdpUgUKy8sC1uJgW7prcy1g9VWcWC3EftybcoUx8E7ytBdRRKtbiMn7pnXUMo1f1RUh4NLWqjWYjqWyaw4",
  "key9": "2CJhz5mcoZJ3jd3etuTWXP1psevygGnAJiCgJdsGKqig4J6KYYxUfN7HdqAQbvynfX1yWtcqZw1K2fTPZn8bdJNC",
  "key10": "5SmERncTcccaMCGuTmAkWicHxmj42yQ9W4wS8Fx4p74hME17jKWG86PfZBGu37Q4wgyYYpBfJQ8BAiCKptDi3dC9",
  "key11": "2dVmvkDEG2UpAddj2ETuGnHnjDqJVXQ42swsgszmtaKz93aN1jCgAFfjoGqXykJmGVguSBNbZ2Uom6ACBXbuSsw3",
  "key12": "j72HQWy4C1pFfC5QsgtSUHUiKkvH6HSrLjZi9r5gWB8gYWvgUmC4B8UYG9E8Qz81MKyHygREStejHws1YbNSRp8",
  "key13": "2hLKQfBo8vS6XiYFUCxNgz56J3wb1dV4qigVmnahabgkM4LRce9BPCr3DpYP9oBPWGCKQbPTeqCa2ezB5UU1pehC",
  "key14": "bGC6TnLMZGM3ZLKrppT8rF66xxeYbSPXtE9GLbfgJW6bKp872oFAabXLiVavAE5hMswLapgFEtBeyK1Zw7iZaSF",
  "key15": "3yTKuRjorkPr4wa5TWPVE8v7cpWzXCi4sNmVx55Ey3hrqgx4oyHmYtpUzeiy6QLBNb6bUpR1yV2ZxMKqQ1JACAvz",
  "key16": "31huxkhHDvLF24f8a7FBKUGkEK2Y9mgdxKVCdLWNbfWNj4oHZbH7ZuJyWKqg3oRE43GDMZwor9XsxB2DX7VYQ8Yt",
  "key17": "4R3WUecbSeKPFfz4DB8zPcczFBhA7AKT9HyxvKHcLnZfs6hpdivVj4BPuJbVHoohXJs9ykXYNSFXQ1YavGrya13D",
  "key18": "5FiEZ8UpA45Fnrc2TxLjuJiF66eahNrXL19yPPNQPgdT4rtWKqHU7S3yfuvYYAmV19m95Ln3LWyqcieKhHCCkJC",
  "key19": "3rvBp4tU1GNj5CENFfW8FWKyj5LRQhZiqDkK59ru1Qdjdbjs7NTPTABGGuy9fkt28UDKSzzuyVtSw6uSzdgjYr2V",
  "key20": "4CpJhzrjS6TdJ3BCf9V6dmzzcE4VghH9SJWwSFnkT8YDYUVV4v81RwaFC4ojQn4w7ZmTnBT4iFP6jEcivzT5Gs3u",
  "key21": "3xE6zhTq9ijDj2PrdANrNWen7Mz3GgmBMdRrGxWJTELvCN5GonK7USvxiGTZbTZUyR8dC4y6dU2r6mgTUuV7etRC",
  "key22": "4upGc8p7Azu9qD5mLeaPfMUpe6SeuhpjdVbR8AXHnrnD6uFY4b8Veqz3g4ggviU7zecBQUiQ71zQSsXNBSsTr7wd",
  "key23": "448rY5fwqnoyFLfkEsJTBvFBM24spasNyVZbZXtN99ALZE5HKxUYwt5mdhaCce1WWf2KzxCezSdZwkJ8BFiLbLWv",
  "key24": "2yPahUsR8jTvrYdYSuFL1BpeFdoh39HzSZuPe4pFJm3Lfcd2W1dnRRgQMAPERuQFf8ZruP9WzjYW1REB8wT1Dx1B",
  "key25": "3fR798bGVwnEnnmVFaCVJ6oQBTWR1BNCeEv13eManikUDsA2zAjDZQRwuYXKaq5SkTpPD3QGwzWEbLJnnSb1ZE7Z",
  "key26": "27ZgrTomixDRjP1SukNRCiZxtA6PoaJkMvRgUZDftyK1NX6zPPeYLd3hJTCjrdHqJy85pi2C9bu5P38AdXwLroNE",
  "key27": "a39hHD5XHV7cvgRjeB4DNZH7gjcFVbhzbkNQsJN555Spibdgr5JpkMNSesze6n6BTtsbhFkTKkYqMzyedKEBXK9",
  "key28": "3vgKyHuLssLSvWiGrBQiyovBj5KUd6Y6p2Hfxfu3hPV7RCsofMocowkAGxf3kgGCE9fXGDmPMXQUiQYPi61UnS3s",
  "key29": "P6Qs9p1pbPd6SBFdqLSsz6oD2M1DP5aBKzWdizsQ81WSkdwJTHQ1YbAYQjjEVGLVB2RnicBKNxRq9xxoJkYXNrg",
  "key30": "2pWwo7UQpRArCzWpEYgKrDdC7ewB8JuSmZLMxk7Q4AG8zvr1NrAMgA4LiergxTKEoLecyYo4xoXcHTmmVvxn2YF3",
  "key31": "5uCe53pJKY8A53qM5ASZsqHZnU2yFaZYTca7RkEmMFVKMXp5FxDMF5if8834vBCLGPs4aKmftssKDfkPkQLuUpMA",
  "key32": "4cMghNRwyMg92LRLtk3RWFmGqPWc8RvB31zRbbCxoxzQt5zCk8S61gbrL3hamGpAQLGzR8VBuB2aHvq8oQnqZGqe",
  "key33": "3Qy2D2SBeZvTq5pk2zwH3cSTGzUch1Psga5ruRj5CwDb5GK9NHDwg2ZKoSejfSrEdzaWkpuk73D8tziWsSt4pxcF",
  "key34": "axvnTtzfo5dgd2wPWtmD3SYSNELvvD2jnURe5FeNfV5dzZ9iDGepXodNpPmL1QMWV4E1MvJSk1k5ap7m5x9y9nY",
  "key35": "4V7R1HRhsxc96sRdL79WgTdjtitEhw6rYMip7iAbhrvoHToMNib2VGiqovvoVPDjvSwN2iZYsztFMnc8TuFVZPB8"
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
