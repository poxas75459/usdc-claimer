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
    "WoHXpaFhwvaafoZ4pgiCG2UrNvzziFs3DTW8YC8jo11VL6VFNkWtrxg46nhy6rsmChqdrTJrQTL3BryT7odB1V8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UiDHqJRx1UKsdZaZdcDDML9J3Dk7iPpfiobWPXrqCpkccrhagDc8WgP8fYSDmuzL6fV5pnktWsaKEeKxCSBe6z",
  "key1": "3Rj8zfhEQYkxsMoKbfp8NQt7MhRTjtGCt3SrHeTwmBycxpB2XPz7xdc85xGpnvZHAQwTFDFX7vSdbpLwqd9KCaDv",
  "key2": "3d1aK3EDveDdVWkgfhfu4sH7Eu1CZ4BXdhvtCDhq8dLK4RSyg9tcZEJtVCUVmgP1N8MghZKrc17MQPDdkbqx4z3v",
  "key3": "254v6bw1vWHPAxcurrRymePuYyFFTML8H2ru8uXgBqf9QEDDZPCwD92tBbqZqNca5TzBeoiNJm7fdfjb5P2zvZmu",
  "key4": "5Sx2wz1YQiNS1JopS15JxXyP8x4Zn7UB9QejeDCsi8ZwVnWo3ag72Q3v2MxwsGnNWnuMrCvSfzPg42cEUkHjtshE",
  "key5": "5phat3rUsQHhH5x7Fy8m2qRqdJDZwUhDw5J2RmRfgx6uJZKaEouRYJ3pWBa1BxNTsF5SUAu1foDL8RQzJLYjoE4x",
  "key6": "3U2z3zDvF4MmhjbxGv1aTrEmX5YNyFqzVBWe1wnz8sbGDSc45gcRzZ2xzugGATrQXvbJpho7KyiLC5gWWg4x48K7",
  "key7": "5Zxyh2AcmMncAnjWFBm51xsUHhCwJcYK2PpKVxfeZo82iMvwEPNdWgTD7KxxN6ViiqqZr2s24tW9aAxQpkLPJBqP",
  "key8": "5XSk8PQVZdajvCTBsdCugJEBZ1Dg3fJ6KATCNL2FoYQo4TLHp6okbvFgjoiRLLSLyLqWwPAmmnQ5LfKZLDDPGxCA",
  "key9": "25BKGRcnwyXxxzGRxFYgJGPZZJHA9WJnE9gDALgoaKkVqm3cL34x7sRNwHQzEHvmB6wUX7hkyUU2qVHQhquRmw7C",
  "key10": "BgsDwNMQoWme3v3tYHFonAwiK9ftWfqT1ataUKyAkW7HQytx4GdaMSQrRukHCPfVHCpq9iZSaFkgr3V26kUg6VB",
  "key11": "2BfMZrq1Xwz8U8g2X4rLfm8hdv4S3rpRJ64udT372TNTJGd7m4VNBtcLUb3Hwb77Edd4YhabsV3T6KJuNo6N6k9f",
  "key12": "3qRS8AYCUJ4jn4UtDEMYo9hkKWSM8jYM5FYURMDKPcCrHVURjuVxQPJ9e67fW9sST2WkvpRaqSPELV53kTpqCatT",
  "key13": "2grDR3UaCqcbHV2vddtP5wgSRsehtKaAHWpYoRxFv5iZthVcneD7TDGqxzVnN7d6CEvaNT9LGHvWSfbaLshHNtm6",
  "key14": "FTDZxGP5SfnfFanxxWb3BquoXRTum2co47uE8425jQbqKY5ejZMT3Rsv9aHPYxwGqeUBbHFcUVBiFykUPMM2NWP",
  "key15": "5K1Z3MaCtX5FHDmmQpsbZFoEfLkMisDVf7gjZK7NZahCHQ3JsBgXk95mGbFZpTzpMYqXuy4Jbfjoduevc8tHRXvm",
  "key16": "3kf5BwBHCMK9UEHnZfk3JazfR4vFVzbEqemwR19jkbbbUGTb4wKki3moFLjpLGDC2YnggVztdUZtm3FycYpjhtp4",
  "key17": "2EkRGc3WWEbHfMccxVS1HGGxccCpg1PwKa9c5pBpNQqF9wkDbgU56jfn2JCyLF9GkS2Q5t4qtKjc6kwEwsqkk7GT",
  "key18": "r8g2vmHBqRL3uMUEpTGbTP4iFSjPyK9jF7evN7CAzrDCjneJRJNgpiXwH1sKSGv3gVQ9nHGV3gyTiubQVQ8vLGb",
  "key19": "37x3yaQ5ontzYWXNtCRjSvmGGJKaVSo5k9GToCoMZxAAvmbtRxgX9ho8QSfEskD63G8H3ZdRcxrM3KYUqvijqRXn",
  "key20": "2eGVbdoggo7qnnK4xeNEnw96sh7Q3Vdawtj9FCUeszxoZQ1E244ifcY8nAdP5poPp8MTSZesg2hJSeFgjkfJDY3s",
  "key21": "3FHiVxhwwn5j1D2xQpvZPCk3UrfA5uWGgFQYFWwCUBvwG2vnY6p2VZHBEYaLqWZa1ghLjqpzWvzPZWmKiJNRx7qP",
  "key22": "5xQvTPsn74iWxFymwubPzR31yzXBLQBBTxZfGfUMVuwHg8s1gAHc533BFmm7wiLtyDuVYzHohfKTt4SnpB34bcSm",
  "key23": "3tKcMqb49gLU4mGM67V7P7McGBPm4rzEKyRdyfos4Tk8cKEGjCfFYrFEy4tVNwgtQqFSU5VpLipvXPWp4NmoreM",
  "key24": "4hgbiK8uSfcQN4BRs2pkWLF1fLuoeBYEDTtw6RLfT5t82g2METCEnDYAUAqxHQApJ8ZC2tPe87Ju9tdMPkDCxu5Q",
  "key25": "5uALiX1aut8nQ6GjwMQrZREJwsY3SH3nUMdoagXZ8AuhDyAWEz18n5T16bGh8wES1LX4stmYtqdnLtPsTWHq61T7",
  "key26": "2yoXeSx8hphAyLWMnKndi9GoKxoanBEv8MceNdiG1JWdFEFFYemf4T1rds6XJwcw8mkz2kYuSUUqZhNWG1Up7jov",
  "key27": "4SHM8oYHx6LBND4p4U2aWm5R2zGZA5BScs6erVHUdviUAoZweTdhdGFp2GhpDBmtQmdz8fhgeWwJDumie5UGDT6d",
  "key28": "ZW36hNiqg3ETCi2MyKTXyyoRvjvPHYRL5ABdvQsTxnV28fpdPY7Hd4FPtH2BaMGn1vCnVh67KUwDzzYFi8YtMZe",
  "key29": "28QqTER9E63xtSS2CGuSxV6jJ6mBGXM4yt1ZP7Qz3DQ72W65DpLvY8sHSw9QQMdkVzXDj53FvKtXR43aydXjTmav",
  "key30": "5L1Yh6o8tUsXVgpchfCPQah1DJZSstnzKz6zTAnBYv1pTxEFy6TF56fEJRWVXsEmMf5AZZk6G1Wp4bPK1M9iuJRA",
  "key31": "26yEGU11dzbNqGcpkUCL28LkGfKgtb8dzuhnFZWu6wQd3gwkRQZMxRpYRyurSdiq1L75sUSDGuJiDyssfGpuojWw",
  "key32": "5CJTKDdDfoWCmwDS36JserV7HNr8cvBpFcZNPmQUQFJA56bAkRk7s93JJK5XHKQE7J8LPLqzpjDMXkXnTjQazrnJ",
  "key33": "2Rp5H727YwBfd5rvnBTRqYqciZNviZbkczYsrP9ErHr782ei9SXpX3Rrvia85FG5MTw5QmAQm3fWgBujbtxMXydQ",
  "key34": "2jKcJxAGUv5RxbjFRMWMuJBzZmVwvRaeH2RVZNC5SoCstecETK5TukBzT1xKoxaTjumct8ZPRHBSC7wzVwv31B2X",
  "key35": "3akPy3PM21uQywghYhjbSsWxxmmkDpL8PfTFyMPvXo6eDUTsaezX1y377FdeQJRbTL5SGRjbF8aqVBt9Y4T7ih5w"
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
