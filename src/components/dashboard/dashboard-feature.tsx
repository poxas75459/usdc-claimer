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
    "2vnk2E2fENtdvmUHsV3DaeDrFrRbXWaF33vyZNbZQNtKDZBVfV7eiYNyEwzh7G5G3yvnDtN6ehLBYYDf2Vg1q4ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dGLYS14KPepxmikdocX8TQU9vkXqxMk6oFzyt3uv6P9jSHkpYBaw2X8uH5LAaYQXzyjcGiunbKheiLYXprFfXD",
  "key1": "3wZxHh5avn9YQjw71jBpg6yd9ZTghKGscfNjHE92qJP9MwRSTo7gda9pVrb1BxUm5k4PQfVs5Xsg4oDxS2bQQgdQ",
  "key2": "65E2RFRJkMjYyuFx4E8vjcSoEy8d3DNrmYfAXReufiriYTnxHXZ1LsiLPY8jsJ9pic8umW8NZQeTGVe6NwZfxR9K",
  "key3": "EUWRmJBCsaCQo7ffPjb3M3kk2ugCBdPR1p5geeN9QxMHarFZCEGZAMnBEF3VUb5eWNAYUr35sCjDUUo95gJKzZu",
  "key4": "4Xp3g9RfFA4paeFTsR1Kzrz3gpCciQoQTDmqzz253fHBqApbGwwAuq2ZY21G7NSzApgGrCHcJpcz1ZWoW3hvFhbV",
  "key5": "4dptY3JpyNRYTdws7hLYdPUGubRcjcE2LomRAb7rJ58iV7a4W1QRy8QSzt7BmR1T3iNAe8js2gS9vqpUXCptcTaT",
  "key6": "5vkPu5D5ESitMTwXfWHVusgRTzBfQi7anPF1oYTbxQmWVDoTa2hBzpfHGgDMyeSRnaT5LyAyGx8dXiTL972mPgBi",
  "key7": "4dbUYay7c1Y32F7uHorpvMSgw6due969Bxh7A3L91yx6CdzwWofFrXuNNYkJFTy5NZaooYMCXCNewDX9LXdevo6E",
  "key8": "RXaoiHbsmnuEWXJHA8GQzuprqMcdUHf9uwYr6dFCuqeBDGtNwCs2Gibpj8f8vG8bv5pgaDgrJT4McMenf7fzeJQ",
  "key9": "4T8Ju68cWLmJPJky4Q2L2od5oP5hvkVfMms7rx8etzYMSxfLEnhWAwsgUK8n12Bj4RuPhmEbLU9CP9EMaPbd8LjN",
  "key10": "wT2V3mFBMfH3a3ME89kNvAEhscrufN5Wqu5T99b8ceZ8d7FgXJzhKrTvG1cjjDT3itEpbd1wsRxSiDTWkYm9BJr",
  "key11": "23V7fAjPEp81bvHoh3pwgtCi6eN4bA3cEcbtEU8PT11qKacAC83kRkdZxBc4o6btxnCbowWJXo1rQF9wsA4eKmkY",
  "key12": "qPgZ8nLTNTfxFTDEvugu5CrJowrs4zaNNkNJUF8k92uQzsVaJoiaehgA3VgQ1QyUGYi1uftm38abAgmVaCXfSWV",
  "key13": "2VdAZhvZXXADseTGYaHYhvAUNJbAAHkcXessXvGaVivVWxbp8JR2vtDNMYt2zjWT1yTVbip61TKBVLFBTuEAkHyK",
  "key14": "5GpQh4yL4oWyKSFPiwUMhhjH2e3uqW2bRMzU33coqzURct1Q3dRDtg4kyDsgPZZP3adhBA5Moj9QV7kU5frHsggM",
  "key15": "3sxDrkPbhr1thnn85hrqmhHkc4tQavwyyX8gC6bQwzdu8pUqmyFQLCRSQYAUNEpqrHaaqvGRBY2QYPvhGZVMRUL9",
  "key16": "4HVVx7N9g9rj2NTSNUeCc6oG2q1gC4hJtK6oqeTByWZLPZL2UwVx7TVMTUMiJkm5R1WmpYucPEo2Au68q43nyAEm",
  "key17": "AtxpWou7A6D99a8NHvqVzVADN4YL56WJiMjrudxndwhJaY6Mo7rKq4ossh5ruWU4otsijAfa4AuJ2AQfejHFTeu",
  "key18": "3MRJE68eSUFrhmz55y5hSVvVpFVbPPyCCD8kSzA7enjFJ1etkuVPrLx9Qm1naqcoEsXcRe4NLhypdRhU7K3Kuz5",
  "key19": "trTESUxuwE178a6ArH215neB1JjJVMFd4RQPLa1eiGbYvUfKTtPHrEBs5nyPgWpThEkhD76nZ9gN3QaHeJMXLYz",
  "key20": "4k3xoBugRFhRMJLprx4P1KXZCrVoiPdzEYmVox7NEnJoVbNTbbNxqMzW1qb9ZoWvxih5j8GKV5MvtB7P8yXcHSed",
  "key21": "5Fn5L8egHmRBjVDStaweZPUjuCymU91nRy2af8pox1dxXKU3acdqbbc1RVcR4yMqBHSwzQBdz8TfxLZf9jhiqFJS",
  "key22": "5NpaTUm9JQJAvsp3tFAPcBwwtP1jLYXQW5oQmK1sHYAseFgbRnTt3ZCcpHyWDiC2Q1dty8sA7BouMGBiLPSNDd6V",
  "key23": "2VtWoRzEG9UvRQLvYdJ1LwZwiydVbdPe6EVUg6dCU1QzoAvqbBqytWSb9P7RhEfwt5acJ21q2VPBnj4KJwW8vAyh",
  "key24": "4qRFhCpQtSBcCbmxT1fppinCvL7EKpCLg4Bo2TvcYdLRwkgAXNua2qh82gVzMyiZ5gGYyBMbDLnkdoajyceeiyAC",
  "key25": "34zwEuDXMMBwFSMzvWmxVDzPUtboqvLyRtB4ykWRHCbWMBTAuLicQ6ANW9JKcXh25TkaHcWjRRVzQxKy2WRNRGTT",
  "key26": "PmeKb31bDxFdhy5hoxHCh43QKomPagRzShqvprzV5TeyVGnJFWP2wFcz9Psiqa3ezds3mwu5nf63Cw9KA1mmqP5",
  "key27": "49ccxCK7JeuMEgMv38ZiEJ4poKRCwGx42s95Xjv4ScE5Z4BduFAd1XuVt5XxtGfKYD1Urnt6brLcc1754cWH1iqL",
  "key28": "212Ls7jfgNKKTE9Qh6A65vU4EWYkWozPqVDoo5RQBMVhANGSriH4jmRqvZA5imntYWBVnRTxDqQw9Spq2GBqvsn3",
  "key29": "3iDgboPLzJPndwC7axGxV6C8y71zBQ4rsnVsqXmFzA392VapT9uhpSEFNvBqRpH8fUdmmn5xx65WyWPV5cLUgXpY",
  "key30": "372ThuS5z9LVJpVuwHhC6M9vpkGH3SgsiHdJ2P8o2rMUsZ4dV6SUurn3SAG3ZRzQr4ctiRYFv2yvV1H9RR5FmpZU",
  "key31": "ghBXCgtPWawEnwMbeVGi21gn1CMSaJcG2c5SYCik1WpWSWCp8LUTtcGCM2k7mK9NowtheneegvqaG6A5YkoJXSz",
  "key32": "51b1WXwznpxLAABZ3NAzg1bGsTyY5nywhvpXwF6XkV4Jux6mbSjZbzh1cxZYUVZeyWETWjJqULJ7EKENsEeMHoQ6",
  "key33": "5V3rechUtZeWjNntgwVZnS3EBRc5ZV3KUxiKQXGQhPVjr7UrqFUETrjp1g29RwJVEmUXBPQnSoET2KwNz72gtKdM",
  "key34": "5DoXES7ySPwbTf4D24RPC9fWdeuWrWntstRHBkYYsrB3Nf4gTT9mW6wC9TgKhGuohqiXFz24Uyshmo76oz7ndWXN",
  "key35": "22SubeVWX3xHx4Ux7EJYgJZZxz1W6KShn7bkEgrpGTZGSLLhBcyMgcxsntPghCuARQXbSFgfK3mgtoDMhUjwTShW",
  "key36": "55ukY9tcPR1H1BnVZwvoQRtVxnCPTAufhbNAtfrfmMyChCbjP1fbP1sqJ1vDCykeCBYUrrU5N7c5JBv4DzsmaWQ5",
  "key37": "84EaKNKMuAj1i5eZUBrgzXPDvDWyTXZTMBF51uur5sADmkSNbDsPbZyaCWWbDDrBZcHyJzxss8dYW68BD7nYuLq",
  "key38": "4dUvvTmHfUQYpbZeyEFeSWKGtFi3yPkbBbC2cPnMFZi6BPEfn4nWt4wvBGC1bXEZcEQ7pSPsuSpXReXFTzjA9aUh",
  "key39": "TvGRxq66xV54b23bP1idqYU9Mi2QQmQC2FCFaeqshSvPZj54EScupk3oneN7Ju2FNUuv5T8C7pPsqK1mCf1KAB6",
  "key40": "5yp9azvCjWjEs2ahoQe7fp71SaKkP4zdW1jHWqxQ4oGQcWUE6xutBEVW3Cfu4DnxdX7ZwsABcty2yDB1C4j22nXc",
  "key41": "WcfNmsG9J8FKH9YkZWvvwdiHi7kyJMrk85G7xG8ZFc8UEWp2tjpg29UCK4YrmYDPavXG4u5S9eBYqvYPaqjctof",
  "key42": "2517W85sJgsda1GfbZyqu1BAR4Gi8MwL5QNCJFV2efexfLWqprKRjJ6yp3dZbsDuKsbqxJzAdYTjNXux3zUFbWd1",
  "key43": "3h8NoQyHHtPntWdotEyVHu7zDSKGsXqUebCLXsZtxrjVY6WpF2z2SiML3eBT7c6kmmDNy9TxEPdV2LeN2n4MnvWJ",
  "key44": "4ABoMPHbCpUZdD9arEHfUcUJRZQUe38cnRLrvKPSWqJf41DiiF3c4PLmcQMYgFZcdhAg65o1LzagsiubHEU2GWTJ",
  "key45": "5nYMmoegKPqE7gQWnKAU4DNQBxxrqr3njsLqcVvpUm43TzG48cRtDuRX9KXkmkAEVwPD94AfGjqGet9pHoXhK2sy"
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
