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
    "HjSQirMgWsQb4rNN5brqiHnTHdCiKPzRi5kGLqN3iGEXP8EMaQpEQDrCPsqDDsd93S9jVd7fkUkySTER4nMqtgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKyUHZd2aNzUpWzrWjDUk49Air84X6c138R8U7G1xjhWHGStr8QiA6r28TdEK6gFNMG1NjZsrWBDKJrSTsX2a7i",
  "key1": "4f2oki4bBo9exprtDU7WkNLSN22Y3c3FRp8n1HaGTwnk3ookahb8iNt9iDbB2CQqzvsEeX7s4Sfvq7QEqCSZG7XL",
  "key2": "2AKScZRm84UNPWspuUWHXDnUzLYm5xDXeFHsrDHWFbjXmcuw9mCw8K76dp5ni8AAJz5HRVZNUnTzst7x4e4h239n",
  "key3": "644NwwXJHmyL16rv3T45rzp83Q91gLsnMwezkEmizL1QLtTyaHKCh27r2v4YXjJSPQKk4H6wCdcFytSqVEjq1L7c",
  "key4": "3AuynqXgnkT1MgMmmWSYrU6NAzFhfevuR4ouEETn1SJqTD3NkyjZAPua9b1qfCotVFx9mBVzMqeAtNDCPhrGeCXH",
  "key5": "3kmhDihZdqa8JmnqoHve6WiZStQU7m1abe2YVpZwKEYYyoCVyCLXWQCxnUSvZ9gojnQ6LRK6Jde1r3H8Gz8LczgR",
  "key6": "5KXbhJKvH6mWNgibxKRqS4HUaGV7r2SmTtToezL3pexWRhQJePhPmdGauMBWq93g9nFhNoSh8u2YGxYw2MAWGwkn",
  "key7": "5NJXJ7CD1G4WBDq5wR3raWiMVjcHxaXxy7s3ZZBU9fGpfMaNob6aXRDCgQ4j7Gq1qfhzebqGkUPZQJ8GgnWGkKfc",
  "key8": "4q8bmhFo8DNkQzLoTbVmHqF463AUpUvtMjeWzvZrXtuax9ZDDrsmvVjYgn22WiM7w1mX6sz5286ksapETVKHodh1",
  "key9": "4xZrsceKAwxNVcEbELCCwjQX8UdznsH2g66GPsDbXzZz6xbSGsMggxFUHvF8TDQ9ZQBuKPL98d8GGa4z79jiPsmw",
  "key10": "3hyvUNDLrdpeYvgX7oQt2gjp2YMbuGgQKnK2yA6VtXTnFArvMjMhf1pk7og1cigAyq33bGmfbx595fSxR95cpCB2",
  "key11": "qn3xui4cUX2p42DkZWWCY4BKxabTNozUPFeLuruTT2u1jS3z1vyRTr2FBGRCUZt83KHhmXJnJrVNLpS7cTzGB9j",
  "key12": "4AmhWsPXBR7eDdsrrRFToPVmK6fBfw2TwSM7TRXv1XxUTdL7KgnEQsVewq4BqPMDy78PzRHdbWTM3DEuzoeq26h6",
  "key13": "4Hw9zBBcNmzxaMJhFJk5ZyhMNCHXxDV2h1F3GDuwXaG1h7ZTNimL4ZLmH55rq1MW6ybpgtxk3mEAxgyrfZAhouoW",
  "key14": "2vhG4wd1UxXgbTwMxsYJEN8HEjiyH4k4qGSHUfdqnvvFZAg7GVLyuWKEcbtkKGGbTwmod9E6dKaWtP394fUBUBf6",
  "key15": "3niupx3KhYQxeEs47P8pZAScJToPj6JQ7x7YcTPPNRWkyLc7HGnfFv2d2iXdSwFXzWf6dPGA8gYSragQpxtNFj4",
  "key16": "2jZaTVjfsK11jPxyEd8Eq7jnyMNMuQk7wHL2XPSbz6ghbJ3366evUTfKmt1E4hbJHJoLt8U3jixSJjbAzF9FSFRn",
  "key17": "Fc27qJzkHSaMWkA41EcbKSEQ5DoRkvAxocVpm8ncbfajN5JnCFHcvefiVhHnAfMfmmQMr344V1y6pAiKH12WtUB",
  "key18": "3L196oTJLk63dxrbmLuGsxBNmieVmeB59ujN4WucJhDKJahfzK67CeGGNVVmbvzHVwYCQSo21CR2z2RVEhbxTEXe",
  "key19": "2oWRTqc2VpZaL54mrd1gMJxNwjtJEupg2w1rjpUUspXc8xp9zVzdDBDvkh7xHnb88V6MK6ZePVZU4Y1xsV8j1Dex",
  "key20": "86zGq7BrX9gHuypUpmevTb9qLxMtdUn45bAhe7gT88XYhChCHvXLQuyDRJxevYD9ZDF34wThwDUfhUPEFc6efuS",
  "key21": "kt2Gy54jHNybtEBiiaSMLrHViWnSd4jW5Dgkjy9SKwonS4xocsUdApCDsjzGYaVerotyDiYt2Qhe29C3nhjTNrn",
  "key22": "5cgFn1j17EUxheX4F3ccFWs8Z784BHy1efqkjdiuURPwMMQJkZftzscyfZZHesxrzuFTTCzUjKiHvjybFsdk232e",
  "key23": "3BJwRyJRmbYcsW1JHnRvUHAiUV4DXn52u8pKVX5PAhNqL9ssWMC4cS3Yh8xbzQ3r7b4oDvFezV4mb5VJEkWhtGXc",
  "key24": "2b1fHyo7eoa8Ws1uqQ5h3fnkwjaznecoJxNuyHyNXn3BQj4WtBUrxkfSvzEJyz1LgAx2X1zv1JfQQG1QHTDudVEj",
  "key25": "5mvpw5jXJkqQPzsitbqAid2c3Z26WcyfD44YG7t1cWVYe9Hv8Uu3nFks3qFa5qV6RNQ39bX8LggVGwkexMyWbXgT",
  "key26": "2Bvc35fRzyQunsEq44AX35L8N81wRUcMCFsx14KR5j1b58KZjQ9XQgABY8hH6d1NJEmBsCnU6LGfpGvtW6TXV4hc",
  "key27": "2ZZV4JfCvZgd5qP7h8G9NQ5N23d2LttBoRRHeXfp9oEgCLByqqDmvGEse17NqPEieqBj5SaiiyeMTLK8miSLVyu",
  "key28": "3oACVDjQASr5rMyooGmrSu6WySUx2JvkLtVTf6eyvfdGLm2RmHDWz8stpbhqxcUTgLQhN4WUFtpoCqmZ9RWEG1a5",
  "key29": "7Phvghs2APEnPzGqBKUPE9uQh3nBHT6zY5HWg47LC7iYLmRezWMvjqUdjMyGsE1xrivUH1Gtqt4wZBJT9bS4yrg",
  "key30": "45Eo2KM1UECX7MfU9nfATSGWBjZwUxpqS418MNpFcMLPTDWsz787LSHxRAT88cdwpesusLAcGpSzRUykxeYTBz8X",
  "key31": "ikrPQAVyYP5ZajGdVgYW75yQhcDqGr8uaNV75uKXGqzoG3m683fmZAK5cbrHXdhkYGxyxusK5m6aqZLbndRPKFd",
  "key32": "3fVTSZQEznd7Jg3ipM1471Yung6dvoDAwaSYr3pvs449oV5WvU3QMJQdYiYcoJGmgpTmXuYdCQ6n5bVbbZ1urACH",
  "key33": "5THxKKKVfxrnxiGMn7akbDK82sqCxJixNkGE77hWKJe6TJL6LQVppYtB9GUrikabRiaXDGq6HPg6T3jPRdbc2geJ",
  "key34": "VwehiVeaWK4r8QivhgQk3kABjXuLxy7KiWra4oQn1YieW6gT76gTrBjDq5doVbmWRjb6b7ESxZkA33hNvxswLd6",
  "key35": "5iSWos8mXacLGxiXnW33mbpBX1kDQ1D2e5TX5LSvZnbw49j16oeAjrgsxegcE8NJL3A1CZ6tE3Cvt6cFpVbezcze",
  "key36": "2eRqHYNVcdtDYGUxHNyLdesoAnHvZbmaD4jUdGtezWcWXXpy887KzCPp8exsyDEeR1eiBwUiS6uBuzQtQDgPYD7r",
  "key37": "8fLwc75d3iSuy3qY4URdc96k3z3KEYLpaeedQF932QnYXLyE6GL8ezacsQFTyEoG6kxhbBQmSuDPhozECoysbxc",
  "key38": "3noph3yfH4HxgSwU5oLpYi2YzM5g8wLn9Sk68xL3jrtmxMxaBN1UDTYquirzteLcc2dTLicQ9xzAgcmpq266c3RB",
  "key39": "4QYevuBmopCnY6jZpHRmewCdoMu77vaa9SCRAgPyYZMq4QbRYsFVHErYAwcXdYv6vCStKLr5zqWTwq2mnTQGQ9k2",
  "key40": "gF98X96TsRToAXb8y6eQzTkKRPPS3EnStPm78qREHmr2XWUHbRhY3BZ1yKPTJoiy3UM64dyDk13EW1BFRyeku2u",
  "key41": "5KRDBYiKvsMyxp1GBPmosVuLX1MoDCL4N5tYGWuZMDAwqBbSMdpVt1qaVbom5rF6VMgoTzdcjEvxmtACRYLwEX7x",
  "key42": "T2jh7rdVQpLnTuWvxPEuEGv1yseZeVRWEDNH4bwR1ykLcy26w7ALG5YkLUZF9421UKmxkx2jLputcHYPmv11FNc",
  "key43": "383FxLPkvpBUXLGuGfJqWJGsfBPGHfmdKTLy1gwPRrL3oxRw9sLcTQ18ypU2Ghf1VjXudWWikQE5JRUbXBHUskTo",
  "key44": "4Q8Mtd7DjLoEZGpi9dwZVJ4d9FG6V1m7cmNN9yeyhfPma1QnfRdy1i8sEiFRRw4HY4iQJWrYk2tipveb9hD8dvFZ",
  "key45": "zwE5fnbQpbrvTY87kAEdZSbQRAgSfrtEwu5pFk7gARosLuxFk2qvKYuGJHEQKD4mGQBL1whxFygsSmEoC2dwwfD",
  "key46": "4SzVAy82o8tMZ4uUnXPcTjAhiu7vGsvL2nvhyTpLf8EvbCemUWG4tUshNbWRiQndCDRxzw7TZckNYcuNG7NvLMYA"
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
