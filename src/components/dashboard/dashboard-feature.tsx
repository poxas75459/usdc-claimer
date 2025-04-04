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
    "e9bCDJ7eUZVB3H69GCdJLTGQvEiUXa8Z4UBHvZaKDzgTBDagVTJVtXJNB2ko3PcGq8qihEu19N99ZbQ8ZTdRTs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mubTeU3GeESRqf76Gn61YkSYyXeGPW6oeP7iXQaA6hscLacqBf2sj3QBfF8HtrcFsZNUV9KZ1dtMvf3cRAJp9Gn",
  "key1": "52qFJskJCNgKQf9nfFbZktxBWrG6miDVzHPjru6AN73kcqkbpPrGxxvT2CuVTG6a372E1vb6Qjj12a8tLEEdh9pD",
  "key2": "2tikA3BjryxK9Td3H2Hf1NjbMumnQs3ixV9ZHhKGQ6ivMgWhHKWG4PAEGqVnC4bimq8UdLPqguZYfYfENF3JB4iE",
  "key3": "2MaMaMRH5FT7rc8hEZw5ybfwrKj9Pgbtn3r2hwgCUFH3yS3GWJeR2QXx8M7NxUUvxXDrSxuv7CK7Bgv5F7BMBNE1",
  "key4": "4Tn6uFrEStcuYPXhVNtDRdUdaikArXeD9P55dNvsGSvgV4HB9WTRdGWBnFDRxrZpxRmYPR85QAMnymQdKfykZgus",
  "key5": "5SfdjUxC6FwfxbE16YsexWweQLy8c8uf5fztnnGhetnV1vvMGQYcB7UM3UY3vKtjECt6t7F8t5evQndWtKMjASrL",
  "key6": "iZ1cyPZUQPCMCDb7252p9aht3K9deXX9xcV7rF2ihu65EvAdXnbCMEoLZhc5GACVAv8GQdKw9Mc8TQy7aWNA2sh",
  "key7": "3Babewt5SsMZQydXrGHRuGxBkEbGwEpPxPm9dqX4J9kuYyMGHf1aKJWY6TcFUQACWxtjw2yN9ZaJRE2S1VNSqnLk",
  "key8": "3aRfk88mT5ddm53m7vL5x634yLzkXTpugPy1yJSHAjjQioE7V89dxLBfYiMAUTwdWs4cNPkh4ZKJ7SNmPhJeG6Gb",
  "key9": "3ebjAZ2xAv1oGPaKAtSj4TbfBmPMPKUbaRfmfQMPCe47UZmC7yYnBbA9oQ6iVNtBLW5uUhnJgtEtxFueGmCfVXNT",
  "key10": "3FvcwcnhJzaQBbUEs7FZ6iEGnS8r2bvoRrvEpxc4EJvikUcTRyPsdqVBa5kvTgiTUDnJ8sYVwfUwL1C5QrjzLcTN",
  "key11": "5ADECpn7z9AUUNbBFv6X7djsRk8YmGRTM3z5J47AfMFmBhwLUT6EBVvu8S2BFHPHaaJWP7yeFwmvyDbQ7cVUfeV3",
  "key12": "42jN2gjVce1iYTBffoRBMFX1tyfk1iNZarTSAewd18M74RW7iHNhce1mccQLsrteZgcrXqYXuHPZP3waBu3DPWo1",
  "key13": "2FSEHxjCftpvSriUXVudyZrmxiH7ZJ1mp7weQ7ZFVZZ2QqoyKUxY1hjChz2MGXEUZSUbBKtdgj4kSCQC5yz2Zhjk",
  "key14": "4eS76dCrNrMJSecHvqs94wbLYVeoDx36rSgU9sboQtqxwrfkt8FottbgYk9ihb6dYHehhM16b2iT4fC6TKPMw1ej",
  "key15": "6515YckzYC81yKxyFWiJU54726qB4n1MBKAEV5kovDVjRDEDLNttEx1vtUmaNuC8ndwuRFQDod7QLPDMkd5s5eoC",
  "key16": "45dZZsGTW1sYivDdnyYYhQ1c2VfbN9rusBoTmMC1X4qpnqnyB4Sb6cBCLr6WcLK4WwVY6Agt4YxBfJi7uVi4eGeJ",
  "key17": "SuFDvEVhzEUd7sziEYUbphyLwmWXnKwvF6bhM3E4iWeXcVCMJqP7KtUsMKSjQhpSWgTZYVWiDCdXauuji28VkJa",
  "key18": "3cczjsFCb5vFiC92wBiFiq7xocK5zmF6dZ7tLC8eDdk3Rkbq4eovYTPoG4eW6dTtYje2ZA5sJXRWkbbvjTcxocXQ",
  "key19": "3ioGW4dKKJrcE5Dd1T1ct6CRyy9y6LTDjzWGidKkbK4K6YQiB5W5av763DDiWULUkvELSHKmZtZFEyn4F1cS1R5T",
  "key20": "v9rkjkcJgXmvo5kycCP7S8uARyFQ5mpwJ2WPUAqWTVQwXVUGJWTuVc6vaNEnNQoxH3C9MzzapeCYPNcVLuzn8Q6",
  "key21": "9bWeafjFgy3hNcKNV6n1MG9SaDN9CBa5Tz5BDaDt8sAPHWmGGFq8hc75erGfiVnQxRLTEEMKHT8JWHZ3mL71AaE",
  "key22": "2qneRJXKkf1yHdXCH9QbU3W2ppQBDZT976UybFHPgYw5WrwB1iENK19WuW8cZE9zuNyZFK4vzF4znbwvgdtrMtQH",
  "key23": "4C3Xuxq6vaoBxzLhGshHwRXSwAvfEe981jn7X4W6HdL6p1tBFH61nEZcHWHig6r56t2mXtc9HGWpdvuQ3fbd1k3w",
  "key24": "iswoJYAKcovCFcmoiBaf429cM61zLiY6xYsWK9sZGYxq9SdsJD7Yjk6z8RSyqu2ZKh1d3Zq1B2sCg4XHBudYJTb",
  "key25": "4ctGSSd8vBjwDJhkme6Em8xqBnUsMGwMM5GQfuBFEGRGeytfftVLb6Wmvk63RcbXYyyoWXBr8j6a4cuSpRRskUF1",
  "key26": "3WHrVC1qaWfoLbxyZeRHDNwHTBrRFkcu9AaBWSvXNBKn6CQT9KHWL5T3i9Ha4Mo858onu1Q2hSMeEFBbye34khVi",
  "key27": "5ooAnDGwzFwsoStHJwGLWvrfcKZBvHeRVeo3BiEn6aCdPYHcs9Rj7gmoZNiccyK7HA4z1i2jSeZtefuVPbjLQUZ9",
  "key28": "YjWo5uXAFu2tB7woEdvZRunM6obcDKx39LVjFQW1MFy7kekmWdpZDCU2xRNim5ckiKSKKxhZX4aGRri31D1dUxn",
  "key29": "4F48NMsdHQqWMqoH62aSfDxQBY8mN8aQs851yRNR1gRUqAfz9hvLFakg3Ka8Re1JBgeu6e1yaZzGd72umJ5oEXEM",
  "key30": "nRwPZjmKR9L78PMd3gK1fMZZX8LupGjJB7nUzBzEdFf92kbd4cr6EVJBFdNtab7LuTk7gkXH8rozVHbnzqaGfDH",
  "key31": "5Arws6NzeJK54a1ND1nbhvbJ6itjashXayDtWdvArB9S8SNHzbDAwGnu7tqSnCSgMSokh9eAAYLpEzuUopLRTPQy",
  "key32": "5sLVNmp9zGzpQCYBKcXgHzz1Sokn5QYqauNrhPk5XxRywSQSjdSPV4yNFo6Nj7bWNsHKeEMH2Hgf4JdJAeJQBs7x",
  "key33": "27KKEz6haDzWs2sAe1Uj7V3wNCU8HGVSNbsLiMY9nAiDBJD6dN2Npt1BamRoHqj9HnxMia6TMVrpe4zKAriX9BJn",
  "key34": "36yWyfWzNohQqfRYQQuuhquG7Tv67TQKeQNhZCkKpPvdcfGZS3sbykMEsqnyRpfxd1hAXi23jU5RaLwE2TV3bTRT",
  "key35": "64hxn7wU7uttEXSmhF9QzpXMHi2wUAoNzWUkBPpUVdGBLhqgSCCpcLsAGL3kGRBCresaT98eHTab5e3Auid7rRbk",
  "key36": "5zZ2Xmcfs221fJc9keMvgjwP5JZFqtRFvzpzBMaYcZWqpP7xvy46viCiLizd8vfZj6sVgG95j5auHZDtnAWjaZkC",
  "key37": "2mbjptC3kQv28qJjWkdQ2QK4SzCrVj4KrTiXqFe1v3RWLvgsqTWqTFkYtcBCk7uNVib69fne1TfVSMZUW3JXyCFt",
  "key38": "TfLRXwpDBpJWJdNSTwzmMkG43YbHMdVx2SFPjVL4VJYVjwhpSDJFQf7rhhVqKk6MZNvurdybfyQGth4mdtmrahe",
  "key39": "27upxjb68EDPEa31yeJePHhAgC9sr31uWHTVvGcDFEZNxuFxniK8vaeQ8caK6x4ojiKmR61ETYXaxQTLAbWPK8w3",
  "key40": "Bw5tLHZFhwhcAjfQexgog2dSDF5KvvaE7oL4kxS6D5xxGMgio7w2nyFEkvfcm35UkwzdbB1ZQj5PF5ZATN7qGFS",
  "key41": "3WZRs553yLz4oZmm7gccLb7uVGtiuDs3FEvX4t5kW2Wnsiv8JeEj86H5kpn8GeUxbutPGE3DXR9DcfFzG2JzUWoM",
  "key42": "5h1bs1tRZYwPyDAVixiADtRusp1ENmczg2bpn3Abq1DgqKe5oUz1CyeDtAyqUdzDNcLbrafuk5fzKBPZhYWGxg4Y"
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
