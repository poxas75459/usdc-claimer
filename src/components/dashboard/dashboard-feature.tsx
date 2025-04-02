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
    "2cVjeVfZFxpvfYBXLEw6E7ZcVW7tFYy8KhTTQXthEv68Do29znMNLCSGT1XpzoZuGdbhyzgVnucoAKBPBjYFb9tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndfRTiCeNjCgayVB3MBevW4Bj9zKF4Fu1nS7XhtDjTjzocVqtu7Agwd7nEou2qjScwz43pUn4W7a1Xy95Q8C3yN",
  "key1": "3P8joP1Yb6sGKnvTzjWBR2xwi3G5C7o4q8w1Q3LB8xfxNBfueRMEUCGgwVCt5mjm2gMhc2gBJjQWEFijvb1z19qv",
  "key2": "2JXCSHvrNCMMYmPTGu28JUwdp413H1tcXQKWhV4Tf91yVahGLN3WUonD1siEyA491SHEy8jFC5hWgxgYmWdVwHFK",
  "key3": "NNo998HngLfafwBrDnFn9tVwzHmkni3Y9EiQGbdxy3S43LqPPTwVcHWUsdEqH2SbHNVy9efJaycszeqBUTzt1eU",
  "key4": "5DjidaqtePhSnf79E6MRuSLdQFzPuuf8KLccQBjVw3VFzqfktcheUENchkDKV8a5ET4FQGdUVyNa4tZtDSKUAtX5",
  "key5": "AwyiuSP6i5HEDMUR1Eb17LGsiV8vk7UZefkZKJx4jLnahF6bcPWBX62FuiX7w9jM2oSD1ueKdKqDn1QRwCJKrKT",
  "key6": "4uGXsP4CSUM3GaSZsbDPK3k2NJCivrVeieyy7KjsSLUuRatdyBNLJVKhuufqAsJZ6aG2N1E7kECtN1EX2oqUw8ai",
  "key7": "5tdNXSnd7feY2si7hnqJrP2Vbir8jfwGoUnjPsgbTrwNFbYkvVMYxmEetDR31Tz5MnkAAv5ADdGoLrDwtEfVNYu8",
  "key8": "2ENb5Ztbb2VYUS9K9MEtmSDezrfUm9dK81hH5uLjKAQ5cAqirAUbeNYTCWSwc5V2J9dwAKR2mnbhct49T62AfEyv",
  "key9": "4RRUx7JE48HwwfjWsWd23Xxg6XbH8yYEKxGRJRC7Sw7XEonTNdxrdUo9grzWY9MKPHgWqjXPb7d3BYPxK22TarXU",
  "key10": "4EenXHYLrtMXLmWrEmkqyCpMUA3gNYWEQSzHFPQcQTfC4smVRvwZeG4YvW1gsNeJSzcbEDPauc9ZPvqSJZR8bWRZ",
  "key11": "4fPRhxvPchJFnP2N1bF38eyLwy8ogAZBMUUrqHM97XctmNqvsubFCaJFqAbu2hzkxDyD3NnvNUdH6nzMzJt7bCWG",
  "key12": "65ULDrrEH5fz2rWCgXZoxtHWswTXh84fgWcPu5Hrctrbj4EzVoBkjZHN3xUDgWA4XHbqnvwGuJEjb3yqMzSy8bMB",
  "key13": "3fUwgMhYtNeZKfcDBqyd8K2iVG64SQcDaihGNMTS2Fb2NZa9gQZRPdDcgy5yKaTbLJ3RSDcS11hZuqRzUSdjYaat",
  "key14": "JVxrwtrbgyqWPkjdZuaqDE7N3DLHscVXVTwDBDT8RaFjtkX1imZS9U3hDiPUJKQRKf95LjNK67cMyfrqdEtu2ey",
  "key15": "3dh6MwZMsdghMtASSy52nUZWct8EUEw7wGx9zd8xjZe86uUFUX1k29boyHk6vgBDsHDsggJx4ZQdYrTTvCoUJtNy",
  "key16": "VaZPcWsxuu4gww11AyAQq2VThC5m9Ac2YqGR9b167VzxWJFe2KPT6HEApzW15E3zYryr4b6NvA7b2xJtnF5SM3C",
  "key17": "24U7LQQcxGaHUJPAqanrTzp4ish2RMdttfiF9xK73XrLmghUE2mNQQRE9mJtbvRZ8GuKNNMksrgm1JfweMNX6PZu",
  "key18": "5npiiqS3kYVSPxgwX5YvddNh1wNMmxSNmN9q2NuDnw8W8KPGCGoa2ZRLkRbPUHaZq9iYAfH1fNFG13o9m1N2qM4i",
  "key19": "kpfoP7aq8LsQoBg85k9Po5RM8XZQDyykuSUxKCS19rkvV3JhD9AHJymLkFoiRDxtRyBxRVEFmKUaXtwq38yMeTb",
  "key20": "4zxCinZmDXnH3ChT2H8KecARanHGsNydh5Lnt4D5YJXirYXkf379mGZR73XgpsDQDEYweGcSyEQ89b2YaHDa5EX",
  "key21": "4xX5s6SQjVmNYv9j4qit6UJRWGFTt2DtXyR9hYUwMDgkZCTGbTKQQahWoUYZWRj7V4nVTE8KJm7DSWcvWUAF7JbF",
  "key22": "yMNQry3cciSRAMVtaoFegTDcZQHTKySN1kMcEnYKQaijUmU6pDzAqqae7QymKj1ut6DbX3tkeoscvzBWvafVaiE",
  "key23": "KwKT9QMBnajDVPLpotgfztducnZ8p5E3mSBSweoukHFomEAvC9UNpjGi4hHgdy8hZXqpoX8YuuwqyAPap2A3ma5",
  "key24": "3anjsqUY1pSHpyXLio8L35gh7J8dDSV5rpW5An6dYZkTRenSZucL4jLc4s6Fv28Wkp9FdMBvtLhVnvukMB4sH7yd",
  "key25": "3BkZnbjNW5uKmaS2gH73kpmLPNd4QY5V4acJam7NuUZhbG8kpNyDuzVFN8Vc8HkiudoXsf91USQDit6qnHPHqFvk",
  "key26": "2F2dvF5kxcYGpVnN95NHM6K8NL8kDCsHddWUJCYeYKUoq7WVf1oQzdNLaLdtwhti878LaJ6B2JUd7GMJbMysffkD",
  "key27": "61eyEUEFd1D18R6f7ToM4LZp9MCuaosYUaRcpKMBzmfbqZu2pfy4ziS741eX7EtaBKXo3fH7122g2d2Adk2bZJGx",
  "key28": "2vpktkeQNygCrN1szAZb7oZQkQmd3Fjqrp4uNxpBsBVh5qRfBwPcP7ooXcB11rehybeZfdBT9QwAgGqTMxKyKETZ",
  "key29": "3yTs3x4RP5C2kbk86uJZkNPzocQfj6FmR8CePRisAURnCNhLFhrgFViDGDYtvEvyK5H2GvR6fE31qMRkrjfDMhfj",
  "key30": "5ws92urgQDt8YueCHbMwpEYWZu1pm9XDX9Cw4v8ebKQgyMcwKDN2eUHB2gib1CBWNf275xNspbw8hQot4EuoXmXz",
  "key31": "tp4ZoR5uxePt36cNANnwDySqKBtAFm1cSRXcXNCDJT5bQ4rJnKapCTJsyasUEdMpqVe2A2qPsYudXJ6Kf2hrCgr",
  "key32": "3j5HbC34RePoqhQXiLmenshw53n1mmiKZaygjETZBAAGEa2R7Vecegh5dKdNNt499UA42t7Amu4xSwquxvCUoLhG",
  "key33": "4pSuZMCEUUjh7NKuVJLXCAsiK1vypqQtA78Htra8tDCGD8DpTj9nGKQwFsE9mZkxNTV6zsocVGTU6fpbAucGmheY",
  "key34": "E1rQE1GjCi3c4bhqAPWoNLa896cPG9RaAn2ntgHjnUfSw33QjGaF92ecugkzbgCf2MgWZFNqHpcZRQXVYQd2zKy",
  "key35": "5j2AFGFNRVpZ2TBmVy7tFQhNM1nCqhJUKATsUtRBrSrMUidnGV4E1HQK9gBZweGWsfZm3qGzNiPGqin83ZwxGGtA",
  "key36": "37AkzJvZy6svN69Fu8jB71nGwPTJMsjULTJcqt414vencK3W7HN9YpxGaXZCyzzpywbrgtFkPQgdWqgq81pUv7gi",
  "key37": "4j2F8x3EtEKve1ouga8qstKR5DS2AuvJtViuQtNMXX1pdLntJ9nYKtA4aSsAqaV3hh9Pk61eN5gJeoCG7HGw13BC",
  "key38": "4WZfasHxg27w869rMg9KiRfUv3s2jSPFan8hBp8WcLZT4SknjoLuyk6StxVNLVKUAokXRoERsekdqMgthFfgRTM9",
  "key39": "2BteXyPXNJJvB8Qag3Yo7QBSnA1JeQ13ym5RNq7r1svhYbxWs9STWFWg2GMcCH6fUnMPoiQoxWssvnMukcyRugpD",
  "key40": "65vCX8c1PLuDJF6M3vSFV8MVTehe6uma1PJFQKJC85KMQ9dp3u9hf9hLwJ6o7N3XTgvbpX3qPAr5V12hN9tNtCVv",
  "key41": "rjkCkn72MWbbeCpKwhpf1Z4DmB9JiKCciQpWv3ReswfoUBzGyyUhMQYymxm2YnjmsvCo9KL2R8Zu7vFbFdTuDp2"
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
