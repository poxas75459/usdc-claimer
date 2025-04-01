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
    "2xmikf1qtBketW26iUvkYyLcA1zCDi6w9xf8PRLAWakiB5WDxo4EgRRNPkxWjHPXCTZ679vbUbHryLRj2Y41R8zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPkKJ8AVSGuouYzvVrhdCccyju47khVCA1Y8qdAQTrdHNpU2xoV7FspD25yJCgWPQk1kHCSXVfmWEXusqM5G2cs",
  "key1": "5HhddPK7PjH2oQWziaYVSiznfv58PewubccNNGa2UBPAxoR3k1DiESWPvN6kSCx4Wep9uBBmcS24H2VfFfydgmWz",
  "key2": "1hmHmEN5VXJ1ikq1rkcG51RzjT81YtwoRrLStzD9tfSZqKNFsuDecWV29EDCmao8cQxRVqjEDKSB77pvEPgQzg9",
  "key3": "3fRvT9r7pMRoNn8ywVjVKMNTSgCuPQj4e8ZPc5KBRmoKjjZ3rLSBisiVq3R1gGcj19Z93xNShCzGLSG9NJxgSDPR",
  "key4": "5G4YzTbWKz4kxCcvi4aY4dyhuwAQjU8SqPqNdo7EnhEowekys1uwPa7CSbEhZHt4zqw1b3nS8jxRgN7oXFbPbxsc",
  "key5": "5JSzZ7jU3my8xPKNPJ54VHSVY5YuU8skh4dyUfb6R3eTqiL1DLXc6Knk6yVMU6xpCeV6pwCWCT3yJQGEUALb4JsQ",
  "key6": "4YSXzP258zGgTifPq5wjB7WwwNb8PuKUbVQUPLSxzSm6D8dd4RKkB2QhWaoYe1tpS1j3LR5rfFAC4keaWTRHUJTz",
  "key7": "5XRAQW6z4hwiNZrtrn61fkYS7VFfYKxXP7cHBMSgxgy2ir2ey8JbAdVnH6jveZxRq1TMBGdnEtftW6KEvZDjMuHk",
  "key8": "5sNWztiiQUHJifmPJ7NNn3XjE6XDnb2PSTezMdazFqqrbcFVkKy9HgGCqBQLzy9xwntoy67ryo2iG3sJPoib7qcm",
  "key9": "4Fptps7nWWRdd1TjN22PbgWvCD3oVTNSu7GhGzY26rMNzXLkhn8rqyMJchum2BhztY4emfv6Qfi7XSfdT8DP6TXA",
  "key10": "4GGck8p9X4o4xpqTi21FrYvFchnGYzdRe3NNgz63Jp8eE1qHZ8GYtKWnstCAi8dTS563tw2NUjQ4P3qjBxwi5HhR",
  "key11": "2oHgdfCZFv2S6uCq47WHmdYgSrioJ1K27mwNBFvu1rS3yrwKsZ8jmauk2jDmzg6EGjb2ngHijn9zUCCTAKbotZzV",
  "key12": "3KgrrEzZCYQCpW4QDktj5jp3BbUFoXbrk4GqmwMi4njKoikKrrmLr3An5WmHNEsYAjRgbaKsnNZUH3ev8Ruft1T1",
  "key13": "5cVdJ3Ko5VTzdzTv8oB9yQgEhQswwuuP1Ntd8zBadPYxNXJtsLRA5VNUM5XQCHmXTbdHXBsNPRS1kYDHgt4q9Vn3",
  "key14": "5s5HsCduWhuYBudDv7DiR4XbMTJG31kGWKxuJUbXTpWs7i36s8JjhY8TenthTGzT1tno6fvzLy42SLKXasb7Njwx",
  "key15": "4G27NaAtKD8GMaadJdDhQ7oPmKmmEq4b35r2WQ1eGxLLrnx6iF4JGaKrhLyhVTsKBRQg6GZDsurvkbUznztQDETW",
  "key16": "SDfxGgL5EvSYumgiNr4DY5USRffAncqdmkuZ5mdDDpjprCM8XixhYqwvZmiXDfA3aQmwHv2pogoMWE7cF9TEysS",
  "key17": "13JCdKnPmL5fEz2cNwmXTdvHQ2vwBY3nkZvwatYpFd7gsxjboB6KW8QfdzxBQqZZH7DdQhCYToxzMZJDxh6SHDt",
  "key18": "5GzES5diyVghVqhGtJA3TWpqhrS1nb6fuAzsV62MLEtoTZaJruy2eBC2vJA8Q5zr8XoFuuETeAbxMSmsbSKxTrx4",
  "key19": "4eP2nRKyhPy7CoXv3cTDoL1zn1uB13yai5Yod2L2J7YmXgHawsxgKUbZQW2g1d4bMqwjtgSW5DUYUHVYi7YFXNXW",
  "key20": "57p9egNwXPRtVg9B8MihjbnUkzUAm6uuUJw9Cr84pjsvpQ9eZYgCJEUgzGkKduXeEfWmLm5ur9wxv1YWjE4Mf3S7",
  "key21": "HJaa99XWvPwwodexM8MevRYxpdbSXNHqZYpDB4fvHkWYKCXpNWKtENRkxeBRG1CP3nL7gAhJjKqEVLAkdfo1NLQ",
  "key22": "35g1dQn6xaSunfWHQZ4FCL3ADzhYqmj1AN9HDyLG3V5E6dnWBpqqaCw2KDHFo9XhWfNKhxysykdcCGqF9V9VdgXD",
  "key23": "4kWZ5cRUg9xnkrCCALk2zqiDxiMvHmBaf2qfs5yeQjEZGyJcG5zFF56LNA6r93ykDEqQ9HnbwM6nBYCCJkt6GNqU",
  "key24": "4Bckb9oGDdh6xGH3qcaZAMkYo4Uy5PkDLUVG3ode98FYLyEcSdfJxJ1eeQTPxGcYgs1rD8mN4iwTWnsDX4Q6CvLs",
  "key25": "3AJuj2vSGnMa9iKiYfVKpN9A3KuDBpoa7zygfUhmmq3VUB1QRREYDPr9dq8knugdpamCNW4Fav6myJRAgq8QG5Uq",
  "key26": "4Vghwr34cfupHkfJxYAnfUdLbTDS4FohSE8E6Lbn8YYDSseLxADiY2whxLqjiz4RvGuVoRdhfmrmpcbuXrkBGQzS",
  "key27": "31RgGsAPRHXWF3ZXPwFZHbHLf32Nq7XarNbfXSJvxa4s3TGQiQWFggAWm3dzGiYyzEEstBqBu8qZNmJkkcie6uJ1",
  "key28": "2FQu4bucG4dGr2ozzpYGaqD3tHiw2Ut5nXwQpKjiqz9jheSJG4LAQSp1r8fA6icU4XW1ErTvciYo4Rzfn414AH7b",
  "key29": "5HqHWgG1uh6HMJq5ENxL3JWQY7WULJ8tmU8dBnMCzLjjWPkBPd9SW9NYtMdv1ioNPHmP8cREtbZMq6r5G3KrfBPg",
  "key30": "4aHUzgrNmQwGFeNiBqzcvAi681tuQDytV6nsg9nfHRn7WsCk5pAZX4ELQH3TZvQG21FBGRz823Hs6S2bV8XeKWvH",
  "key31": "288n8GvpGmFgMAhFZKZPciRtSpBEXC7ZQMX1PsEhu9YgikDprXQrm2pTZaQ2fMqa197H4T6p9vaUpzy4wHPgoZny",
  "key32": "4DEUEqQDEWviBL2AiQwuazRsUypakwkUeBxMxS9LHwyGCCXSNBHZvwQy9D22TAU7i3Qy9U5b7vK3kPjipnuHNEYd",
  "key33": "5FwFwEEfEprHYHmnoKJKcNhXSF8RTT2LsxBQk5q2xBYUbx5APCiUJh12rhaVvEmyzfJR1caWiWDPXRYyXc8fgk88",
  "key34": "4knCXHphbhjxSwqftkj6ncLhzhcCa1BDiSpVe5HmxtE5dpJsP5v7QkFtAhWSp7vrXAdS2z9uUZNQvFVTGdrDpvAw",
  "key35": "3cRRW7bTURfvCTRaCoACqCp3LuRuaZyQZTUQ7dN5VS3euq6NHUH667uKEV8TH31m2SwN1BwfwsfGZqdKuaBCtS14",
  "key36": "3if4jigMYmEy9WthBcwQfccKvf26JTEQiyCevubnBdW8EeyoJz5Z1Wy5CWCovC2DrfsYqPaoM5cMJDVHeGLHecvE",
  "key37": "46vTR235dZFxsXxhrdCmyXBGfEqwAFyU1xRdfwSWfSBQBH9UY1fmyJTr4aCij3y4g8vJ8RsUAs7uHvXv1JC2BSG8",
  "key38": "4J6MsQbQXQbKK4CJZbskcjatM8rJERTuKvcWVCXeMPG9uHoo6x5UFYaQTVmCCNwHtEv4xQT1LMPzU2nEffWEZ8rz",
  "key39": "626r3ABC6JUdQXNFMU7s1p99LmqB14xV5wGmEJJG6pBox5wAHb9BhmLtUrxXRrbVZ2ZoRxWc77QfY5apCBVWJZW9",
  "key40": "3h3XnC4WoC32RxDm4JshbTGkQs2zBtxv8RdwszGHNAvTLqnm4efbUEDWcouvZ4e9SqPTNREKxEerZ4s6wbJ9MzvC",
  "key41": "4xwGkZ3FX5cz14EBEstKr33Nq1jynVvsZjcSne5fngUVvC3r2iXy7xa7t8gkQAqKwKoyWHk9hyM4vQrTkP3mGdzw"
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
