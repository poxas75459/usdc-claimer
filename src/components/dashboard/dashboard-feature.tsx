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
    "4MuRUS6KkSdGLKJUq12Keq2qXjQq5YT2P5zh98NfzQJb1nxgPM13exSBJnrQPWk2PxuPw7DypEEmjczR8mAoDJUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQzRFHygozc6kozSnSMGp7rKMnQmwTSV6nLCX3mftVGqxckye36PHEstm4qeRoyPugfDRsCZpHEBeCXLyGYeq1V",
  "key1": "mHDAuWFFBwxNqDGebBAjEPuWkcaeFou6UDDwGKFh3m94Dimc4r6kc8Gmf2fu1f5eZgUw9YZEw8UHMD1JLs1Q9hH",
  "key2": "2iEn51VMXFCjWhNz2p3UzxcsmBCjYE8Lv4wFfzigECrU1a8Vw19FGQuSCsyZUyyHCnDHxqDMibNSKgmLnRJHEY8L",
  "key3": "W9YjqFKA27o7qEZ1qQfj3TWDYFX9SBZ7ouyjiaVZTWJyziK4E8VN6fQAL9WPGSMigepRT6pkifGtAdU668KuwWB",
  "key4": "5ZU4Kw5zPjkavBGVUnZAmukqM5femkYnpxe1zSzD3ZnpGZXCzHTm4MPsYoTFoUkDMgsyehNxhkRqfvwrn9qek4Pg",
  "key5": "5XXBZDczX2eN4zuY2cTCyPKqL3t3Jv4ymQbUcGJQZJVcXN1UfhuUti8ASN4M3NJFcPix9xZQLtSVSh3auvR7KAWt",
  "key6": "3fthq6zXAFUQmhDkU2oHH45dYSbpXqPi9PYp5PCqW5ypKMsm9szxC8w5nsNUNhuqPruGa4vUHbEhzGyGaJXJjkxh",
  "key7": "2Ck2fKnBCeAKmxCjd1UQ8fVkL6iXRrQ8ZvxXwdDsYCZJ8TUXuQfZpCLb9744uWJPB9nDCznq65NHRCBF5ftYBeVZ",
  "key8": "27HZRorPtFUH7NPPVkBZciwWSwWnL6GeyiTjig4wmhh1yVjpcw33PknWye4QrMDDw81j5Eog2tHAkvbkbfMauNk6",
  "key9": "2EpYFCqVqNWbN7ZgiGT3sCe8fMDbZeYBuDHAiVs1PsakwJdVLBiGAMvvyMREWJGs3jxDibobydDyfyL1YieQub66",
  "key10": "4ce9NotSnGjxzA1nVErMNN9UdGugjYKy27n2NqQFpKzhNp9rc1K1XaZLRX1QHbHJKfapLaL14VgH5aUq9hTkTw2o",
  "key11": "4jDCQhPe1hbsnvbLDX3XEU5ZEDxEDJREcnU7ZsmXQ9WoWAJ8cm1Jo5mCT7UDh3Hho4BmP93KhGWzqX7yZNJwTsi5",
  "key12": "52wynCy9qL4y8ejc6HqV1i7Cgy3sh2z8PMxpryMJzieMEo9q2yMBdQRUnkErg14RdXZadUxPCS1YdSQyjUCEZPMs",
  "key13": "5uvYYncKEfnE6CXxYPTnNfuEuMDMZFcvAUDGBQhEcRHUqtGFb14uSuxwy2d8bGoiwoBsCj7SbBBUaJcyZC7bHLS8",
  "key14": "2fS7VpcSfW5QWHJn1vVj7h7xNTVghgEXEqk43jnqrJ911MkTWXjKj3g4eLi47k5Nkj8gwEyLEi1m3Zyr6znt3AT7",
  "key15": "2MU3qpadmPTRHRGEpgTzVFb9K88UZxVaeaxW1nxrsEkbQ1ZbaoPQqhToSDatm3u2jCDDeWNR9SKxek3TXR5ep176",
  "key16": "4GMSmqZoDndQStry9kqtwWGTyogscUn7ThYiVoWXadWToa6Vi56KMtoiC11TDaJRFL7vSWWmSUU4tDkPNUDzyabX",
  "key17": "5JJkyuPDzfWrZumkPeynQ6mDbJytLpXoa9DaiJ8oRUqXDU6XrC6PgF22YEiFWRJ1K6PTMhuPFVZvHwrYCFjsaSJk",
  "key18": "tMfVDaC9yWBHwmpiUsvYizhxPa8gzcAopDTdgDkz9ScE7mAvv5uRXjwvuu538Ft2d28pj8cHeaZw39qJNVATzbp",
  "key19": "2w3Ln6CkgLyk51chFekFsFjowtUVkQGUkkBq8wZB6ku94sWZVH2ByGKi7A2FTazKAkux3QpLZDSDvW7Kdhuj9xSs",
  "key20": "22YyAF7xiEj2ST6K9jP28dRJTvmWYA3sdbVRkXKjiExjh3RcSqRLvKgvn5R1BDNkxs42iAUTQDyBbxqXVmvnKFi6",
  "key21": "2JBbQLTQnTWvgmhpeYMdppRkaPB751y6WPaHBkZiDKBTnZzBCCqrCnM2EJj7FztTM9kB5Eni7Z9bbDk1DTeiRju6",
  "key22": "4Nfm3JavmUbsNwJPpkcGZCPP7fDcvhyJfFayd8YWXKT36VERsDiXoxSibNMys3nALZtsEsKXJDFBgPsGKrXBTWTg",
  "key23": "5sRAabUVP72z2uS6hxX7BfGWwi8SMjYM5c7vD2LHTA1tic79P6ykwGaVvWL2xPaPCCf7fMApnTY6dCMKn1DxkGxT",
  "key24": "R7RLMitYpBAbk7duyBxza45x66SJVPMCFuyHkXzwf2igyHXCNwTn8UcGGGLtDz57nR3K2qPKKEsF36Q3Era9mXB",
  "key25": "2mEfPcajUdtb4SUjJTWMbDSWFrdZjf4qx7b8zprycf5GUBfKMPvi6oBG4UAnjwgBxLsXC3tSc5UvjX5kN6bJrcKS",
  "key26": "mb68yxH6m5QFUEbgc1wpTvnouHGwsxJYfk44xVHHGv8BDbwbrDpon3S2zQ6SBgcY9FAgj7MNCKj14Hx5Htdzgi7",
  "key27": "3NGVnzgFj3VXMotgPLRmXD3bwuadFQ3tDaH2uwU6VzUZ6F6azaxBbRpudAVTEC9df9bsGckaTYHxj5876MnwFCh8",
  "key28": "2wWx27GvJsUZmMwXxyBte3BGDSdpvUdtncMwJos8ajkSNv8kTHdcLXPbwbp5MaFCZBQuW42mb2G86fwyh2BREJrH",
  "key29": "2XpNcMbUZCST5soQG53LErAgspF4PaqrvvQQbMPsCEMGM2xR9J4t7o32knEGrKQ2i2SuLGCDwbd7TTVsJA1cGj5g",
  "key30": "21wXra1GdRAKML7TJzx8U4CjVN32CXNcsG399Q4dCxtkNSx6WsUzNNkAfz3Gts1HNWFf1mPY7HZBYETXFzP2fMgV",
  "key31": "kV45byZuyAxATtMJDkvqNFFjpZrNaLGzG7fX6Uj1xS33taSQMjBu5bFXy3LAVsckYa7M4zyB3wZKwUF8pahKP9D",
  "key32": "4bkZNEwcbFtcgEoCAufrMR7U2xS7griMqya1Qs2oavrfsGsmwoDyNfdWquVHWn2uiBKj3ZvMiD2q7GWCxCvSn7k1",
  "key33": "2ZCzJ13k3pRQPBjFwsTWuZpSHUeK3xdtmk1yoCR3Bpvp34QS9JEmd8KzHyERqzuiP8SBayEAkpSWQ5gkr8giNC1W",
  "key34": "3sRffyHPBewC3GzCYjPNXghAbWDdZnBaXrB99pJZ5uGQnj49xcSSuHrNJC7EhRzFCCuM7p7Nqggi3yQvu7zAbho5"
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
