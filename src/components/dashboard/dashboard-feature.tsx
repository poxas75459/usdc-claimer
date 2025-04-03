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
    "313eMrLmZXaqG1kD9Wj6Fs4Ly7iEg3oerRtr7R8mhGbwBaQrwXzxcGCN14hhAsLi46H9sktGzCdjqgn9yk7JkSBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwaoW5hMQ3Qh9rPbt26XBpZ7JZEd4MRPicusZuPWWoHLp9PExmhbDXCoKAR2NVGdLNa7wLtGeyxQ1FJERpoTRUg",
  "key1": "2eFKwhmRpwjCzKi8KhSZEBQjPA1C2FgyPnmzgyV3mmy77vcnpCc7kbRKL7gtDE94wdb5xTtMpZNyCFfyc5n5GF4L",
  "key2": "5B5n4X7cgWYmJKvECpDKjhESWGZDka7HcViH17rHYvKiynMBKA2HosfUJjXXhYyxRSFqusUsEA985tziivcJxem6",
  "key3": "5fLcC7rqby6koTqXLybiw4G2NGLijD56wHRxkunTt96JmYYBW3TynLwurax5NYWA649oj1JhxNJXy1uNqTp1Pa2U",
  "key4": "4rBgv8Urox8KGs7qdAijic5u5hLMndjEH1i5MYFYQMtsDz5rSRQRDXoJqbJdQ56NDiT8YcaNyVdtiL6e8MZ3nTrH",
  "key5": "2VEVyYQjAjRqQ5BCYPnjUJhYenmBQ3C1dhBKBkFqRxneNdmBfV9zSHXkwGptUb77SfNw6WKs6ZR5Suh7At5ADdxc",
  "key6": "2RKkQYZMtjitiq945tURQy8psTTCM1o4yJYwQAVh9yqXQmSqHiZztJm4VXX7A6o4LVbLXLX5DDiBLz7X9PGwSR7Q",
  "key7": "2URBQsQrzbPmRmKDQRBem7xKNiwGKE7Y2gX4jTgL4Z9GDLdw5sb9WUyvPULMCpysbNbpt8euFuC2ZxBkGvZcyExr",
  "key8": "bMeQxMG8Rq1rPir3bd4QgoFQ5zUkqUtzTjyRoxh63FHGaKne6XHKSDPe6iFRuAjwMoZ5NSEEPnGBs6j5swpco5r",
  "key9": "5sfjsg86AX7TZaQc6EsdtzYzdXayQEf1RTPZetjPgmxZPnBfGG8re4hWqKgghMkeJLk3HvN1oPDEB9JPnkYpL495",
  "key10": "3U32wUjm9jYnCuKsPQq7jDkMCQKrg8kE2qNkSDg1ZKDaNbQViqgLgg4uKZhFSyPtoZUTLTcHLNLYhYzKAqUnT1v4",
  "key11": "5WACh62uif1rUVSPcrxse6JRuYowFaxBLa2EVhBmApSYfWMiGqVerPGFM6TTjA8zoUPfaE1phbHTcpFz57nf7o6y",
  "key12": "59XWUDTCQ2vV1juJ7xuqVY5cH5e1F45Sf3vQoV2T2WcWvPJXyBFRPpQtmUxnrmNxRkaKyM1nUUpDwYQ1aoKeYu9L",
  "key13": "dipTET8ao1ECKBssLBy4aBKEzTmbhGzMq1xSgCjhnohQ5MTQPWbJGt4Z71mNjSDNuHJgmLyMA4SsSgGoYgtu2oM",
  "key14": "5G4GKrC5faCc2Uwwy7zvpA5Vdan4pZbUcYg6d7pu2Ecj6VEuuJPDgVSfFuAR3usgmNzdhNoJHMFGavZf8U7WBhuH",
  "key15": "3GnMSW8SXfFHKuDN2TyaxTEQC6iGCyB9eQh4DaNxmq8xT1cc2ebVCiFDAikuwGvu556f86DC5e3PmtanVwYdhrav",
  "key16": "iaiPr1hTrYJPgYLfrTzzjsKNPX1dkkkoi6i4sWYCt8MCYPRpmxJw53AEuUt22nHG9gALs192R74jzQQL9Fbi7ne",
  "key17": "4EQFrip5GwkotpGCA8mfmKT19iJDrprsfKytxKDrXatd3t88i3EtxaXY33Cf4robYnxEEc7zxdmV6oduGJ9Zs6Da",
  "key18": "3YDLKxGcsTGJK4sVfxpBVNFWjBaudcwwYLZjnRCPjB3AQbEjKrAhbUvER6VpmXVAR96QwSeFgszaHzjvsbVEdX8C",
  "key19": "13o5QAuG7WpurgsQngKSvoTL5kmEJmyCyRk5Pk5VxSVqvki87eTir5ByWqKWfy6mrv2BqEGwFDBNPUryHdq4gah",
  "key20": "3phe8juqn4gJXYjJzyHP6QmGxLce1erTj3JKFspXpvH5n2RTmmLHueopbkE6pZqbGT2GSFMqq6Q5ekLeCa9ntSSc",
  "key21": "5QNDECQRdPbD7VCL6bVQdwb9Ag1TzNZMFYVcUR127K7WY5B3Cb7iqwKKV622tEiqrA91twQBkwmhwpaii6wyPDh6",
  "key22": "54kEQdbw7criyqgqmeNAxbHEEjbdgTy87r2FyPyzEc8Y3cBrPorzQA25Vg4KNcubxKkAoaoSs5i5HNA4XgATBjia",
  "key23": "5x51t4dYtzJSoeyzXPHqLsavLmdebvGCDkV1wRELcygxNEM3WnrcAe5oG5wX7wyf4VHNsryfdrPBjtBB29M7PXCu",
  "key24": "2tiee9HbWGazqWCX8J2pfLZRbPfecTpfR2Z3M57LCGbhhR7LFQ4H6w3HMn8aJLAHoKvDtq5ytwXipkDQJYgnvYqT",
  "key25": "dSDnrnL12jbwFaMg66yVHdAqNjhxZL8WR4vqMUt1N5eBKvajfA7JaDgSAnktSacohmBzXLQi7ykhCfcJvak65aY",
  "key26": "4BJjcS7uuyQs1sFTzTincu3todRW3ukYKoZUYwewu1o1wZCm9hCMqUnPobKDUiu7LGr5Qy559FLs5SztDJEPMxxz",
  "key27": "3QEViqPeqMxVhEQ57aGFCsByK7k94Vg7NJVi3A2GeRkqra7WfwxPct1m12XRx6YLCdxcRpj3MnawsAYC683uJG7i",
  "key28": "Zo9KkeeMQgzxfbNFyFT61tU4YNiPkjoUy5DcT2c3yyLymqf9WZcYt54fiD2xycrmEf7w3Uy5hEoNgybwyS4zaHd",
  "key29": "rrwi94yd3K8MHiYpWe83TJ3sSKgqsFBL8Tz8hcehJE7sS3GDa5WvrT1LQvnxEAdC22uo2NDCenVS6J3zb2B4XSX",
  "key30": "co2d6drHvN2oPj11j4v3UtvgnHNohxkcnoUM7TKKWBGxjKL9rS5jnSoxgT5d41F7jufUTmAhu1eZs3WCgkJJz8U",
  "key31": "W33DPwFgt3sQK9fuGvyqEKLeUFmQx1sWe2pFVRZkywFdzvnRfZHFqPMyYziGBCDF3s2gkFxdjU2tb4Uje7wkA4w",
  "key32": "62wYoYKdNmD5wATb9KU9J1wLXT8odJCsiTnZXaahK8yyDrFcPH6EAeTjd6Uh1UiJaFemwAK4u9PawiGngzCTKWEz",
  "key33": "3qTjByyySszRH89x7kJK8y3EY1PU7abZ9fk6cXAnnqiCGEYyrTJ6gVTKbL97Tdt3rkBTLNJe2uQhpKGzrQAz2c8d",
  "key34": "2WjtdyMbUZLV7FaCG9b1wDkYuuWm3SWGehHw2hXbMo5fRYHRJWsMyELHgSzJ4rnSyVwvT3gErNwWsshyQSprNmiM",
  "key35": "5Y8wLCYP7AMeTjiei2XK6NLmgRcRDBcitqju9EaFQGgBADWhyNYgvzHL4n7bgaCVB1zQihodmwRgwVNVQHPcKZMS",
  "key36": "npWNWVP4JFWzvxyvi1BzE4E7RegdCQtL39b9qMBhc28NMLcSMFk972aMbY5yvbEofQXNDVReanmaiL2pZbufqdh",
  "key37": "3BpSnYJSfotP5UwyNxiKLbgHZVCYaEammSdCzFnq95kYTGATgypF2N2hbV3jYyu1ZMozmpiN4o6H4RwoPyvmvuLA",
  "key38": "4kHbd4Z9M9weBXazQd6KbS8f9MEhjzQA7is62C3NKSfaEojhES7z27mVWSu7RS7ZpCUtYMMo2n7Ruu256wvrxnKn",
  "key39": "2qGUJNybTuAjVbY3MgzAmdz8doZ8upL9gJwpNjq6uQLVdcuaVrLZ9EjMwkmdzrUwZTV2h2YZ72D5AFtF2u6Mkshn",
  "key40": "4fDv5dz6Svub3AFA681k2mXvEgfnXMe4hLmmuc4hSb41noiz3rBLB4Lnb2NMq19v9Ln3Cs3sSogKJa9SF8b4vod7",
  "key41": "2Ks64sDL9hHwqDHtCgLJXWXMRR4bZZ4tjY6d3dtEoVY4E4a9QDsz1wCbPjCPJrFX8V2UkmaRDq3yL7gYkbtof8bb",
  "key42": "5f6391NBGLwCk6Y1AGZkf2uWUZEnZNLkimB6TYL26BVDGfgxrBTiD4aLkgw5m4izTYNPreLNMU2zu3hmwLM6S29m",
  "key43": "4JByAKaZvruRXe7LuaxfS6cCeDeBiiZrECjG8kVeZUhLXzcDDRjwyWYMdw3gcEvzNrzi5EkWoWaNjGsmr1rAuWHG"
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
