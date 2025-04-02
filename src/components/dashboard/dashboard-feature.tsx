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
    "5CsSYVQsLat2aQXT639U7iKH5j4kqg6PL8uTD3HKHtemCPZ9hndfknp9Lvby6hFNHSzYXt7NUoaSEZpeuvrw6G3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkSHCM5WcbX5vC5h4Jj8YMtReh5XpggdtchE5D8NV94s7A9CpTKY7PRcRcJWebSpVvPHcXiMctb4SsxpcxHFpSc",
  "key1": "3N876UoR5AynGXhZRY6udL8Bk3i3segGC5fsu1ySf8qxDEzeq8KLSbS7rsNGVHdF4mGh1ymqsGtJm9UtSytTokHR",
  "key2": "DpM6qjfHjbxEjQsTRxDhYbLwBGMhup5z8sM4oRMFET66FPGxLGsjShbn42C5xvozb9ET6Q68vWUhg3sPJGMXDwj",
  "key3": "5t9bBU2tPZdGEoiRpup9P1JFe9v1xHRYmwxwQF9Hw53GRkYZ4VqfwsPTEvD3oMhwzLFYX193ET5idiMWj7VF9ruy",
  "key4": "51dDjHCRkemiEtiEf154HvPgj6ELuH8VwtHmWE42dnW5aSCHzjq8DnbN67e7ndjHHJqm3U836wnvi5QcdwXVyi3q",
  "key5": "5iqbEqj2C8oD8qKVDhTwxgkpAvw2QbYbGE83Hgk9T1aRp1sqhk7q4ALjA3Z465s3xTVMXQb4H2x3XHzSvuW347VS",
  "key6": "67GdfYoKmnYdwkG2hdH6bw1yKoxN8nu3ntieszRLfr8CjDzKkaRHcgpaWBuZk9aNnF3Tx7rD2R25CxxFsMoN9Ls",
  "key7": "3whmupKtTZmcPbZSmgAU7RoweF6MgGZeDq495mso8SofAPXwHQd3f3q3HKvJd2fnfhyUdyEH9ZzhHhQQcqohMQ3X",
  "key8": "NncHUNXFVtgxXo1uEafNQUrNxgsW6XueWWQChsxxjkAfGmHLT3LPnSvp99oGVA1vihbtRpNkwHX3jwveupD9W9W",
  "key9": "5gz6dyJgWURDHRXHm9SG42E13B2pYDstcbqiyKPLd6EMxPu7c66iMnnDfgDLBxehzacJ25rk6eAwGZoVUQR2Nt74",
  "key10": "2zFSBpRMMRkAn42BCtcHXdNxSCNcZvHkqVnr5KSQx2CMKrpED7tP7BQE7pWuSWotRSso8jv6mixXQDrwFyUKGAuu",
  "key11": "5cBXMWBUqnytmq69637FZ3rxdG9z4SHX13LbUmmBAhor6n1jaZeXK3k7cv7jeqmp8Mw7AFbHzfBdhfdJX8p7h4DA",
  "key12": "5YuCfwV9wzh5TsuWCY6aZrNmxJw9YHjyCP1AkcSzUTRormnjkqrVpGCMsuZPuPc5JNeXu1Vz7fXBFmunze3NZVt5",
  "key13": "2rQKHScbDdv2e4uiHQTWF8nQRNfrnuqeiR3Ngn6pv9fkThW98fYgMWBTAL6DJA7hespgtBXNRi4PLsXsPUJnkPtB",
  "key14": "41ARwz7G3dpPeSHkumh2C6ViD9eWjKjDDkjYQUZP5GCXEFwzbeQU9atXhMLRvcsAJsDSzosbv8HVLSzF4Hmk8ssk",
  "key15": "6G1vH7V66Z3r75w3hfW1ts1aWcGy9PNHJAzejjJGp4N4pQNUSxu4DKkkk7xWMVds7mXwCYd3mDg27NisUh5BSCG",
  "key16": "4LUcN1X5f2JYWD4263SxGrGMKmPhUpuNLkbXCUpC3EQ7SbjAsoaj31c5zLHoB6ysLxvyZCyME8VFdzjcu8XGb1VU",
  "key17": "5UeVAfGvv7cM1pedKVjrJsU9eDJvTUi7Pq542aWxchfBruxTLWkAdkA5vhthgSohBeFHsizvQUvrd7ocRhy95g6G",
  "key18": "3KziqF2HkPbwzMiSBqpe5E7cvMuLWJYi4ebQPD2nHWByBioVVJd6h51fHdpkRFMXCsDrS9v3p5ypk4dTZYmttx4a",
  "key19": "5nasNDQL3b4uPSfXsKgx2awF7RyVveg8h6v4dE8DFFdYUaHy7Z14KLLgKfsNum1vejujv4qqoJnBLRNzBAPh3kgD",
  "key20": "5GHBde5oBfUEViUFn666KpkNRw7yRg2NSZ5xdDhEDboxoPWrMEbFR3Nx2GEhhWRKrXBzLaGZZXFFH5jfynsbY5E",
  "key21": "3e4S4HhCM37uxCiZF9km33bc85aqdhgCDpuNMzrBrwLggtNwhKeN9F2FYeT8NeHYj65unpwC2AKR17gYuAx5eBPp",
  "key22": "3fsdGeKdwyp99YV5mHAZLx2f4Xy2zrEFVYQcAfH3aGfkSKycuCcYApggdwmFe4yG3ut9b3vw1rzhJP2cxjZLitGP",
  "key23": "4vbKfAVnipbgDCd2vHqTVhpBCsmpxRf1Kqr4yywQEQNvrWLwNg19LU13KhyjpT3JT4DRS93ubND93SNxTFND9qmw",
  "key24": "5zfNB8J1kmB7wMMmHg9c9Bncz4VurVudkSkj7rhoK5MhGnjpDNpDpUTfDqQiR7zrZGnrwYyaLNYGMUyszWvmU3hV",
  "key25": "38xHZJk4X5Xos8avGjNdQrQfzBJSUCUybj2eHcrURahQgk2eZr7AoaHfuCQ9zVLWMFY4NkKy39dK5VotMYrkUEub",
  "key26": "3Nvd4Mjero65hYAPGgUmU9Vw2s8iPy9Zr1JrHMG7gjzrxxsFBvy9hTEYpWsxQ7DUTJkwTtgDEWCPL6HkiCrSkdtt",
  "key27": "2dTF6hT5HMPk6ZwKcPhvcpiL3xhZfxad3S2FZMwr8vixa3swe1ZsLTSna355dzXw3x24p7r5D8zm2YuoMN6Rg9jv",
  "key28": "9rgfNcMPLU4dWqxGoJ7o8v1Zrq5erUmDmUnFP9EmXRjpvaiRegku8aGYVpyC4EtZcspSSciKtsKb1gVjBSuGfpM",
  "key29": "yuWHEMREFWWyoGmoPAjM1CnSVkuFCf8zPzXcG8YVwo4zhfJv25eNH3PgFAxESWRupMDQ82Pg1LToUk7nzheGh9V",
  "key30": "2XuVtUfsEJ4PdmS8U4UAzt2f4HfwKi1Ut9sFKQUtSYN8ZM8YethaoPC5zBFAPBZkaG71RQ7GD9uZHRDJbRkme381",
  "key31": "2wNBQbdBgwaTXTJZrd7waX1uDw3DvaSnaHmQDAMEChoxBPCkPnLDtrdoPUYvJiz2u6dSokSJfarjsG4jLdCpQZqt",
  "key32": "36VTTbfXUVik1vNJjGpSxGNskZmGUrh3EfRakwwGeCX31gy4DstyMjaRwnqUSeAFExVrCCsoyyvAFrX2ZCKHhay9",
  "key33": "32awpd4s6aLzEcW7cKxac49dM6RZ7P1uC7zs3cjUgp4yR9NxJcyYB9SGaP6mym3MigkK9g5rp2cvVZvEuMc55EmX",
  "key34": "6EowuKHBUbSeChkq4zT5GmkdHQVNTJFZ2uxEvRaBZgc5RjnJRs1tCT8e6GCccP1ygeCK1W3V3i1y9TYwPvugvjY",
  "key35": "61TSwJ3k5uQXvHztyBXtc4WR6evxLTwAi76jUiE3B5j3Vw53GBzMv6NZeqgxUrVp5gjxc7HLW5hWuK6p6KUkAV14",
  "key36": "5nBWgammNufHCzGa7VqsPeURPz4RUtnLND8xpRfNhYESeyxkj2m7vWPEwW2WuL79vJqrLAYG9v1nQXXTydadGv3a",
  "key37": "zzkPDzWA4zPWciDDS6GPCi5LWptbffcityQqqeKnbjKnQ2ny6Xo4wJpVxvAjYHuQfSiN8w2EQbfQk2cbc9KNFNe",
  "key38": "2EaBnT7viupXLJVyc3v36LvakvdeacBLBqv3RpQiiRiN2VAZr4AK39ZmWMt52XQ1TdYh5beGhjzujApGsU15Krg",
  "key39": "2sHAqwJSbyjJ1NckCpm429vZZWac1MWe1UBYpf35ERiZ2xhxeDNuacN9hxm9snBCZtCQpXVFt1yAU71dUQUk2dxa",
  "key40": "29AuiEsAwGVyQGx3AkCroJ1RXcXUtmgiNJFKhP5LKsa9EjCPQVn3a9pjtxZBGwK2tdQdqMcRyHMihVDtaGwfLqua",
  "key41": "2GpHQfYWvpdKsLmEPboirgpFRB8YSRuJwGLcrrovbd8rpX8ma86iReuUeggr8djP4FTixDaQgYbu367rafxGGz85",
  "key42": "4w2PK5SMdtr4cEZpAvcaLubADAcxZru2RntirFbvWGjsWuVxGkFhAUatvD2aPFiNAof4Q3Xvha5y3PepWa5CEbuQ",
  "key43": "5JHcQTXjhW3Ha55xmhBfD8qf1Zt74wh2jrvTcVMf5ApvRsSaUBzQL3Lqhkfmaqe5wnAoQwn3xCfezWhQBvRkE2qB",
  "key44": "5pFjhMPJJuqYhfBxNYeB5cX6PktbPpA8UmPbFbXUNdDJUKH4ar4xEjvEcA2Xz89a78xRSn8Th8na9NqUAzyyr8z6",
  "key45": "2knfHEMX7sLXMEafhuFQR9VNmhg8X7YGS8cAVZCDvSDiqxSmD5vpEAwdKioErH5y7GVqByEBy9sPrCQFcp1jgHzt"
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
