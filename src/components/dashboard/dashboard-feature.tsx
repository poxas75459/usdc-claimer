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
    "2vNov8o5WqqGfyj5mFa1mb8BR1XWjnRtjW6pMZWrjm3c7ATde54sGdZUugZcQXwvfn3zAHMSN3UUDAWaTMMVJ434"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Xkn3ufZ8i4U9VsjQjN5hno2pw1m3ebGJi6PTzUQr1dJ2Adr4oHN6KBaERYnbJRRgQSPVEeeL1a9ukuainWxRkP",
  "key1": "5dbZCeWSFhRHvAtVnMnRqA2369H5M8dYkGPSt19dmEkycjvMtUCvKFZ6AoK9UAzwA78mKecZaJCA9KPzvGYh3hVr",
  "key2": "3ab3muT6NFcAcLAuGXXQZAh3enqLKU3LLxVvfmvJwxaDbMUQaaRkszj44H7Kew1UtnZjTgkc21rpWAme2e2SS9Xp",
  "key3": "4qcQNA9nHaz6BwKddfSda4WbqP9MKCuVgENSQVrcwjdrejAe4axg3pCuxTMZRW88ybjbyFcBCdi9GKzC6SDhM3p3",
  "key4": "53HfdKi2DZ92J3ajGKtNLP8B9JKbcd3V79wXYsymvGJHn5YpJbAXPzRHpue8Z7LY4jWi3ZPq3YucBY88rj2Phc6V",
  "key5": "48zKqJ7uUVYYKf1tpDETfcmy9YEdZC8VYptNZ3PzdTkPEGEXpLoRoJQrftSgmeQjZuDf1SXsLeRBuVmYWWcSiDFj",
  "key6": "5YT1EKsThCB9ZjDBgBk7EpAcSZQ41HzA9VZm6nKMCMJU5gNUTMkemKnSpwmPQKvnmJBMrNnz8hXqeftyYsWHDw6P",
  "key7": "2K2c1Avd1qhPp6GxRLyjS4nmJ99r9tjxrmiB4C9KNiL5mjnLP4Cx4cdAu7io2oohvCzc8AG99Cf4oVMJKESrnyuC",
  "key8": "pC8jUpQUgo32BrP5YEqrRV6fJXgu9VTWmoPweatoc95YFXYBfSoQM8gzmEYHQ2Q5rBxANY5kApzXyQHNx3KvUDq",
  "key9": "2MkDTi6Lt1ddnFiGzBcbukt1wpXVBmQtjztrHazkWA8Wp82C24t6TWxXcm7TrmX1zKDXst6w8K34bPhRTDEwKV6x",
  "key10": "3Facmi9UMVQUgcqLKTmQYVjDK8tkVVvVj8fjukJfGLPbBcWXkcEBwzKRzrnWMPiu4nUhdQTJqHkoEize88vzVe3P",
  "key11": "3EaRDNtcTWKyg1uvfFeESrqZMSv6ribsWjYU9sfX8NdqammbwBZ4inpF1KMK5SosdydCQV1jxMmgTphfhoBoMtXK",
  "key12": "2SfcXWLJZi2mMPQKpdJemkKHPnSYv9app2SeRNSa5xQhimoMjrnveTcuPQcAVro1RHT3AVePMct9ZaKeqscHX9k3",
  "key13": "5GFjAoB4E3FgEaX7oNsrDzNsh43wut47mitoTKvAjeVngJiRzSwEmamPMtYcFATwgGATh92J2uYQizs4hrT5cWBG",
  "key14": "65FQcyvR9XSofG6Nrri48TN79hyvodvYQpgdDf6UqVhAkTXnEcPF9nfsR5x4AWf5dF3FjTyM8QnSTnojBY8wW1aR",
  "key15": "3KKFwBdAybceFKaHwdPBgjSHUw42pjUpv3hBGHaWrTLzEXkwmyfF7fJryB51Y4GNKtt4AtrWwRj71aFvBU2RotFF",
  "key16": "5Bky8atu89DhxP7mfGefBvDumfqoHJqXZuGBs61dCQCqSavX4mfBcQ4kW9QDu827tZyUG9TCXqbdyNp5YbxEq7a4",
  "key17": "fA4euURwv9jFRhQzsbGu8yydYWdfxfGDZSXShN9EVtQcirKsA89go2ycRnKjBZHXqav5nwrBNTDFPGwUjMNUyfK",
  "key18": "4R99fuoMmPDmiau7Ehqq8c2uY1f4SGYFiRBEdLu9oqpJJL1yZRYiqFrrMxWXYgEsEHAkgiiUZM49HK6TfCpx6ypo",
  "key19": "A9yx4gDuY9dthi5QSSFz8oSZtFyzHKcb5TESkRWh1eLEZ1zbjwc78ERZdk6snq6VFxm6rvAnPChcpENaY9g1Kmt",
  "key20": "4YJGpsn4dM5ocQx39j4T9FkKT9q9aoFKuemQvaRQCyLivwyUwtC6737mrqzNVsmaTH448rng4cAxwccxiQp2SU1z",
  "key21": "ANUQvG2B1TD7dfhrcMeRh8TGYBrJ82P6t5rNugKjdvgCWtaHh7VR3snfPwtpHusUbdcRyqgoHKS8i7L6K73gS8N",
  "key22": "64jdCPC9gmBmLpLqpbidcdJHvMdMcJAGrYgcZNC6mZgqPNcc5SGeux7eEaSbsjavzhJkviSrUUsnXTFZxdpkohtM",
  "key23": "58pvJ5d6Q7o1E2eF8jQSYFbrb2Z7n4dYWwcycFzcJ6XdNh7p9T55jAr4rz4nQ8WdusgTstGV9P1W7LPtrqFA6aJC",
  "key24": "tdvRcByj42atoSnAPw76t1H9fmf2bKQ4GtYaitms3taF8mJSgCA5ZRH71Rak1HrF4R3gpG1yJM6KqfUE6pqBpHJ",
  "key25": "ZJB7RWpYA7NWUsG5ZKZWk3csnFd74kVtUZngK2djyHDzc2H5rRpLspTHjFAWAu66nnBN5qyGEYw36P5JpNP59is",
  "key26": "4sAveYs77TjW7BYfMmNFxGCUVvgEFjwLLur2ja1RV4uFiiT3yPmq6vH4jZK4WcRJDjP3tLvSQCX6YzrhUyYGZxJM",
  "key27": "5UoMHirapKpyNRGQsZTLaTYE6H6pCqSoRrjNzGWkYd4vy4ftVgW5Sfp4MvQ3E18ifA9M5A6RCwf98zS1EVjwSRY2",
  "key28": "2sMZiuJ19QjUBS1s6KkXfVonqDjiqxXU6zagqyKaWZi7nfmoLEPBramjpZ77jA7WZuHEF11qvS5o64gWfnLNx3go",
  "key29": "4SX3fL26U6xQWDamLCD9JwRtjyXVSoQ5TyrQuVud3uiWq2GTgXRanzCuCAppm6Ry9SWLvAjKyuVfF7py4wKZFgWP",
  "key30": "4hKAP1eEbJKosyLHziZ2cAiqaD2yYGfz3xN1v5Q6C1hSw9SqYcKrzC5j28rxfC3LcXZ9mmDrMsmHY56je9L4NTEp",
  "key31": "3Y4k5esNAmcMhQTuSGk1hPfTHtbE86EvaEHf2PPYVfzLpJ8aXHtBqekAr2zeKyod5GPsmpbakXNKC9yEfgtMWgTQ",
  "key32": "63HCvDy5XqQGSrUXZm7GkAZDtP9Ntem35dWiVt3FadxGSPE4xFUGKje5QydQUbhmdNatVkfg6fqUKTKhSjSX3hJe",
  "key33": "2P8Fd1DrjyQ6aemWLq6z5PsQ4YzrUt6xuHXYYji8tvMCv4bM1RgufjiLRYSqm1uTorF9Qi28Dm1PRX2JXTBs9KY3",
  "key34": "5f2mUW7mGTMDSHoRbtHPe1FUB1AJ1q24ZYZQ7RS33eLcgg3vMLxknkgkumzkCfSjJCmnwHFdtm3mxtzkmc3kF4Tr",
  "key35": "B7pfBJ5YG894j8tx8qP9eKipeXMVA1HqXqXp83e3HQJNKcLUvRriuoYqc1S7aDYxEDrZKjFFzY16DxeZdhbNQTv",
  "key36": "55TLVKaNJ7LvYymv3i2hik8zSEqNCPxKpJiJQPqgfK3u1PUVevqnqFkMmwyd7eeJKPsj3qUddDurn9eoJpdUgW3T",
  "key37": "5KpnskA1hRcUr7fZxQtGF2xKMdGRQ9uPt1p9zjFhUY5Ke1eaiF2kWCSebJySYVsFJxLpeyNGWYskc3xdfdRdiT6Y",
  "key38": "5wsZcuG5yDTN5Numa3SWGCayMdrv6p2dxQg2szSfSz54LdfSiGywq86Q4boBuFZ7adYCVXgNpy5PKjfxdr7ipZAy",
  "key39": "2wqVC8odphfnjFyGvRocPXcqqsZ83YWYixuq6AjGkm2RrKSCpXx3jbmvpYZXSveXEtCPutypjDiqH65ntPNFiPcp",
  "key40": "21c2J9dWaQHNw6gMUyRQ8zHpYMYnrepKVbMDbkJExohuuTP8E3BhiiEt35iUJ5cQWkPWSHPM91mjG87rVmfXshog",
  "key41": "32Zd6Di4CNbefReFjeHYKSHHF2tTwSZAaXakM8TSBDbPP2TrcciffoBphh1Q8zg7HTr2xp9xLtDrb9sHNVFxXCth",
  "key42": "4ZUai7VgRvzHjGZZBMneTk4s1kSJJHofzqq9Tzi2fEBNgmrHdroLomKxAZvgdxfBacYKz7bhCDFG9rHNZe4Evqdq",
  "key43": "5D6tveNkgNhv6FZvTNHXSRF26ZRuMzwLCu4KqD4iMDNPx5QpeQvoGQa12X7KFqDu7PpnTDVUFFWHQHL2wKyJbsWd",
  "key44": "V9S5hFdnw6sE95ivzmh8KT88aBrLyCUoLmzRuvSDfav6y8ibzCyrfFuuLH3oGdkqykx57iZgn1mEjBEeDxenN3J",
  "key45": "Q2ADPQ1d1hqnRgVfa2fdUmMwp9iyxeyD6x4Cqq3UfPhYnf9MozefF6nhVrUpu9tM2a3ittnE3j5umkFhD8iWfnK",
  "key46": "5XHT9uKgu2XHQyHq3RMjTssvC5Y7E4Un5S2hCVipaTjFr7qVr7PhJMYShcExpDapd1B1196q6t9cSQT1CmmL1sr4",
  "key47": "GbMd5co9n9pKou4JUh9nF6wpvBPsvLyWbfn6ebYsSoYzh27s4XZTdE3RJnk63uxo2q8cYKR5jsUpyWbZPgKabad"
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
