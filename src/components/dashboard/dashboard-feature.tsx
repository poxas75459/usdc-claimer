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
    "4MCtgCFLGR2U5t31xYazxzoAzbia4oJoMGaWYsqfBDtnny7UpPeqnMafinR65P8MRzJqmygckSp9Q4XaHd1yfvn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3CEqDMqPKTb2Myf7Mf2PFK66BFxq2RwtLzTUg7eTiG75F5sLJEhcZYZE7nNrPvUaB8fyqgpKchmroyi1L8Yscu",
  "key1": "5EqZVmgTX6Tm4gPm5S5AGf2NaEnQ2RYkVkB3R1c2s6TeoXkT7m25vDeN7Ruv122NjQXAEq3FSfgdLruvaizR1ndh",
  "key2": "2Zp8S97HCv2ZvJEY5rHYTakxF2C8zq2UCh83wdUMBbNiEweiXt2JgYsDsNZdmZcpUcAnEDHEM1x7NScsu1h3jRSv",
  "key3": "Aom6eeiSTtGPHp4ufuz83m25G33ddbVcEcUv8iTPvrNwZRnK1wm6GZpVcUaX7aUorFHEvSkip92pMiXnDv7UdWE",
  "key4": "3Tceiiu1D9Y3wu3adpCd6qPoKvZkedtA61mzEk6eaAfzR9Crg28xpQfaTQjiLPjwdetwA3K1mjfsq81qLkQWS4Qc",
  "key5": "2CkwzfYpQLHyUyAzfng1Ra6WPGvPSUYaPPqqaz2L7Gi2teok3PjfE7YbHfknkkozCPnJWv2T1HRYZgpmLUUK1zYx",
  "key6": "4YcypJATA44RxoymbN8Go1pvZUgbgt9ksTRmGSGPjMfbDAsGH69Efrm1SyA6UU3Hh62DoQvUCfNR8n1yrDQUw3Wd",
  "key7": "5YQhm3kBSsuBwavpFmMoKZTZubwFDpUKXqWYmTwwTPzS7jZjHssFizKp2JXAL2m8kzMvwYw32QpQTeoR5UwN6c6N",
  "key8": "3L5brXoMxxz7QJUydpwBrXYn8uqCLrDppXq4CQii5TZRD8ztWEasFYntaq8e7VD72GstYPx2M1Ee15wZEhb1RVcR",
  "key9": "3EqJZdSo8CTYyWhpc5UNgVGSxbaX4fc4zhEzZ11DHgDsb27rHqSoSQE2RbzbVAhPu61qKNQVU5NFD3MTXS3dRbap",
  "key10": "3cQwwFWaDPwgcvBNNs95yepr228J8rUAj7HV4JjXZuuEt21CKVdQUCv18zAAkpT9gibziVPHmNqKk5HqygKXHsf5",
  "key11": "ejy7uDbR3rKPERoCgiDkwSbzpcajycshchsav3t7arRcMsNSbcPnqPykqqUQvNohKcKbp2Qx7Tx4J6m953bNbRX",
  "key12": "2aSR5KWr1VEcMZiFnLxVwHX4iGAx7tE4FvP9DcB8ByWLLs3cpfceo6siJuJ3ugDawUoJVH6nxpPJWgJQ456EDTxK",
  "key13": "NCf8ahB93MzaiNWnVmFcjg2GQd21hRNHJ6VbqsHyxRUYNiBCKta4WNNf35TWof9LR3yXEcQbYqxmUAQ5HorZxQ1",
  "key14": "5MYLMxXcVksL92QrAcbFSgZPu421Fk65YM44SrdJRiAyhvgugTSkYMHuMhfLQvAiAzQrw4gvWjouqqMmrUDM3AhC",
  "key15": "3u9EPCUsNFdPPPjfPLDrCSP5QyACeRhzoHv49axRWuysCN8kckaNG4D4gr3xS358956QMLqjyHW7Qtp31xtqTgDP",
  "key16": "44gr4g165hJVzZLzpbBQJi9UE7CWn4ZPxT9FCr6k2CF6ZAT3Sfp4VZUmfJZ4tSsKgdK7inf6ZyyygV7pVeUnVUXQ",
  "key17": "4rpYAPMnBGCDKCQpUod7bfU5Y31nP1MJye1kKGaAfiSFsGqzbnFevqTtpXStynXKb2CVVeKhX8ht1tb17Ee9Rds",
  "key18": "9mjsshMVmSjBdpaykw5hrdLxHgd4cvGMHvph8XVyq3aYcshg8tYHWcFAJhYY5QvoWZDiqqy3pigedwCmAyjNkS8",
  "key19": "mgs4wtrTjr5y2JEVrPEkdNzmnN5xWGYPe8uUynhZwViMTvWHQBiWUrGquy5jgMZgNKobvpfQBa9hQwwzcfQ51pg",
  "key20": "5ch7StZxQD3gFZdwezd6Jie1wDoaee4fBNr2eqaJvvEYrmswtEK96qupECVPj7ryE6AygyRrnsyD5g45Jm4FTqb7",
  "key21": "3RPGVBbZZbmJgFhTSJAU1QgWG2t1fMrV4dCfBBBSdPgA4JoL5dGmFhyDzsebAQwateHWCWvWpjQZ4V983NT3wkYD",
  "key22": "2YqbD6nWwHEeyTJepDP1WcZzQBa6YtDPzLy8DQ4QgDAc5bViXaXqAwYxKPU3qBKje6NYgewuYhNX7Un9Cmq6Q3ih",
  "key23": "JX5FrxJtUkENvcMkfoigTs6gtStNhvBVjm16ST8NonrNFQQY8NXFjNxYun1y6AJZDZnHayLsBbKfuBbk2U75sWb",
  "key24": "2vyyszX9hfSfZbkfzWkt7kHQ1hsjey9c6NPBB7t41PwhAhhRJ7YHBRFXsJ7jYYjwaJsw3ticRg8u14iFgGzxA4KK",
  "key25": "3Muyhn53GaVyozZggEY9LmoTZqmwp8oCobXuBUmyr1dfuaCjAiHvB3f9TtPXS5nAkGvUc3LuhHFoaGecznrfGVwn",
  "key26": "fy5R69BA6umWB4pQ7TQ8RfBTLREwFJQaw2gU6h98fbUTWFE4VME6fhrjfvymptiaR16Kuxp2ZSVcEvTZrE6RFJp",
  "key27": "YQEVjRiomvR5WxD8HR7rT44s9TtLesWL33aCRp32YGdc6AoyNUSeTtw52tipwN2JAoSMbZZu3zvBo8XJYebTEte",
  "key28": "4e5Vbe4FfmxtJ9oFaih8SF95X6ASvQb3bttxHAh3fxEpJFiSzWPMantKCdJCZ4qLiY9TeNZzyk95ekWmdd4sWGHA",
  "key29": "4yQ2kPod6X8JRW6YUErYjLtfQZLsmF2svQ8KtAmXDgjJ5b8ZhEMrBf9us4bE5x2WZzisdbVSyhQfNDM19pGtGqKK",
  "key30": "56HbSeRinfcCjxunuvB96dzwc5a8wtqcUEcG51MrDQcWYS2rFwnDZXAmZoXwoWFCyA4Hy5gVMEpq92NEVBh7uyno",
  "key31": "EHxxDuQGUqVHq1sEcEUFfJR3mMX75F9bAreU9WEQ59H65fyrY8m5NWgXcFb7aP96mPPUHdA1DzxcvgZWMwY4Vzx",
  "key32": "54DVhTBZ4rTrLdco7dw9ohbCYQ1QuJ1gQxtoF4PPtTqJwnMzUj866recAbXmzC8JSTVKWgUSFweZy3zQVxqh9SZb",
  "key33": "4fUEMfDVmwLkM9KKrUyKa2EtdLVMU7rg94yYeYHyX5eKJ7SPdf2Gc3rSy5DiFymUQHfZZmWtBwVvNFy49pHzutX7",
  "key34": "3GSNkxeYa4ruq14pq9KbYevBN5taKa3LyvQCPNLqj1ceECLpymgwFchptPD2bodjjTZeYzyrb3vTB5Sxydcix5gv",
  "key35": "3yBt671byWYWrZg9hPnpwJeVVfxFccD5GZE6Upzk98M44AGiRBc8PNTQxjWwGDy4RAX4GCjzMiHK4fdym8jpe9Kx",
  "key36": "4tTGZCHURdDabLvBTksLW9cqg4HoJSYrBhsZRjVDsxg7V4vqfZtffxF5keYtswfY3to6qHpUFtwCrNaENnGxDXxw",
  "key37": "E6EkobNecTKafu2Qhh2ad2HnQbnwAunGhGPE78h1MTXjNhxUsGEpEjd2rBqqsTYskqg3rKMEGmr5nXtuxWnVBGJ"
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
