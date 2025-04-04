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
    "2eHM6uMS1EWRyYZBru6dWDByQR8aLzgDSQijN3zq4e9GDabkjP8Ke7HktZ2LnB4MSga4hnGZFGdmL68MVUSmHVof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6D7f9JezyRN4BzLJQA3MidH9ZUdjEoXZGowuvJRDbUyXA2BQ1eJqdBh3HUU9ZFmcPnV9HzcPv36k6FgrtM88bQ",
  "key1": "2NGrPU6gM7dqLBEiyJ5ryKAd2vjedUNZuW7LTaA8corvF3nQ2u6rti9dDMh6qStEbLGDmgWWKwY7abMkZd3vUGxL",
  "key2": "25pNaQBy9pJZixas5B9wgEjvAUMuWCPt71tDw5mEFVtBxxoP3W8qjAvJqZevjLz6oP55zE3N35YhoouZFiUfZCH6",
  "key3": "5i85y1KDFEzeKBiTtZvGnqvjGiJTcRwYAnHyTHRhuo27FKWXKaHsdnSYM9u8unEqbhhpZ7DWNCAWquQDwRdnCjrR",
  "key4": "kfPUHwPU7gkR3pKCqHNoZeo8QnpnJ5Qx4aKJAwuDNsAA4NiHERAPVbDvYeQmCy6CLzP2VqzwrYnnR97Jw56KETM",
  "key5": "5xepzyb7kH2k8GbSCyXw6vVMFXMYkJHuYJKiWUAiZMjYarZHWvtqPY9fNfoPssZ7ojkotHJKEs8vmt4QZbWbhtgg",
  "key6": "5P6hCpUKixBwhVcPpuy1pn41xFPC8xPUt4yFAF9tbtf3ihYTTdAxVSLZGwJTp2sx3f1yvHKs2UnEjrg56HiQ6KEZ",
  "key7": "5yuRRf1mqRD86q4rFi6Z2uLkb2D4rn6FYicx6Pjnm9oWi3tu9aZfACUVML8fePQuSs6xPo1TADAXRKASmGNuiYSq",
  "key8": "zM6sHhnfun69R4gTZG7mWmxunc5JrCTpBcczgkABVut5cUY3YLwhi4k9Ao4v4Xzy1iW17N7Ac6ZiYU4dT176ruC",
  "key9": "ATYqL7fJQA553XpGFmPYe3UompQnnAr6xUWpaugsvqjUpqs2hocZJnCkzMfgTgz19zjLo9rTnRAz2qgneQe1zRJ",
  "key10": "37HCCd8bJ5f4Lt6JPbmjoMvDKcgmQuk69x4psGotjuwKD2ZEsZHX5QVad5FmQ81PeZeSfgjm7nFUpZfVZmZip8TS",
  "key11": "5iQhMJWym42YBqMdCJnBH1Gjq8jngrdstm4qtWpsKsD3U1y2UXzLYxysHMD47boNB1mdBknQVMA2QK5D6dNv7cFn",
  "key12": "5N5CWnrcYApmvtexsjkBaVvqyuhJhXjLq9cCwpcBdHj4VFdcUwpq2WYFkNvdEkhtxdRHBXza2mYR5PusZr2VCpri",
  "key13": "34QUmNfTh7Hmp7fy766hAGPhSbne8VAKFLheJF1tdsbPSyXc9CDK62uwD33t4qE95BTsBYYKfjo6XnvSGq1N4JhW",
  "key14": "6Zi1GSvHZkMABucVdvwoXjo4nF9Kjc57pSu6NjuybArVk77qtxPMKwHxPq8b2ZiesJM9r2hjm88oS5cxs2SrWEK",
  "key15": "vUVDnir9gUq2XCePwrPsztd57oYqpVtNLpf1EAWkQxgheiLMDQBWNadnbVhvXrHLAXkC4bThLMo2tFpuCTsjq64",
  "key16": "hfQoJnGNQU77LPPv6wdGB26SVkA4BZcPJMUdXEvEZG5FHR7emXosu8CM2MqQqLFkpcDdrHCEiF3Kp42aexaqo5E",
  "key17": "4rtqezjChamwYuKr6PATboH6D7zgBAcGCRKok7Af7NMrwNivntMQRKPKv8Pbxdf6U4GJ6iSBBXH9147JzTEN9m9M",
  "key18": "3HGdepWFZgF6VqAeiU7TgNnuwxvHR5SeuSuab6veBfyJYXqJfHFg45xA6rSjzAocjnxVGoGrJuK6ktc8EULgAnVV",
  "key19": "2shvgsm7KTscA83YFJKqMJucevPw7FoRERJksPnKcAgJRfTSFTdY6tEDnzexyG4nfmapsmVdHtivbdBxAtKwdKA4",
  "key20": "5BXaiA5W2WGeAR1WNGMG4bvdKowaKiATzQXSPaZbiikgA2jzkqCRHTE6KqMzGddKAWpMct75LTACqZsorJsTv6f8",
  "key21": "4CxyfRMCEu6rjwNcDQ9822PwYz7mGmA7F66cs7yZMuWRRkjA4UUfLyvJ8kQvRAY7ckw6Jh75arc4FmB7N7NCM45K",
  "key22": "3AcR5oBfG1ZeU8XMnpC6eyC5bL2oR7LGeUTmH8RaC2jVNrTQc13vbnawcMU82swU8oPVA9meqNRpmX4LUAvxWFwV",
  "key23": "5uwQye81FdK4h29mHUdYihZD5CKK5Z2z1fpVjBBPfWiY5Fjbp6Gjb5zrFHWxobHFZ8xZ63zeQ19KuAk34w61aDM4",
  "key24": "5VuyDzHE5ivGsypw2YCXKtA7avhV55nVjyWWjniugf2zaS5kL1YmRx3TxozZhvDNfmmmCtGjaNP1zfGEuFcg55Gw",
  "key25": "4ZZUQDhgDxuSSGfMP6jUqQAkTqtfjGGALQnntX6RZUtcQQo4MpzCe6PnoUhfkrdK2r6rnJVvfeaqmbyrSndLqybJ",
  "key26": "3Bt7GqaaN3PoVoECEC3WU5bNR7NN8wbvrACYFuoBN8Kg34kc93KK1H23u7DfBEVcHLXtnaLN3FLKvdR15uArdfg2",
  "key27": "qsvFi1jCsgiTKupiDzv9hEEXbUiU6bNSqEpQ76JkmAYtJNJ9mh3f5nkBuJ94jNrkT7CgcQGTRn2yJrAGwyX6AhY",
  "key28": "4tJaExuuQtkiCPvca2aMV2vPaotQSzCoo9oE7KAwywnMEqSRnTo9zUTebJYU7MYqnP8psBaiz1CBGBzxJ6XREkhk",
  "key29": "3weEpq3JzSH5meJQonQnsHJH8qSDEjkG3ypVaB7ZMxx4qEr4Q4Unh9Eojns567NLT19Gzv1jzKBBTaRSA4U8ZD1i",
  "key30": "Pnne3qLDJ7dnweJpe4hLAYukREApEjtwo6TxW7pKMzHydYED3hfJv85PgcEe3nrepAhVjVbNChUsSFhHBY1YVNG",
  "key31": "36VQJtar51pgpEnoYdMNU9MEiaSuH3j7zYm6HdeeJ75YAj8A4Ea3hVXH4RQbAhNN5wkCBYggnH7zZTsxRc3kZK4F",
  "key32": "5LBeKr6BKGuhb5SeWg28hv631cYQ76MaHY2EAUgFBUGSc5WFEoRBHc4x9bPedLHSrxK15scdkwtuBTzRfYKTZiDX",
  "key33": "2if1L4eGmtQRk6kskSPkFZnyxwN7Webyq3hArFDGuqgGv7ddAR8TeaD3mFe4zkmbAiv7ZioZ1p8dHSoUbZHvqUU4",
  "key34": "mePSmR4qem2aobP6fdwB17BPun2KSedBuHZKKS9qUVXaouGFYXgju9YSzmnkU278qk6F1wcUyoPFHPekt92B3bR",
  "key35": "4PHk3pttiSNcBxdy7xoCV9s6hS6X73XsVCvJpsph7nFDgTNSVtof2uBAnyv7jivZNGuntTzLYMz2yhbHyHeJw2qZ",
  "key36": "4RjCsosP8oJFikZqgywTgU7THua5GnA5FZo3spDuwzrmcAUGiaqYxjNYZeHRNppf9dDsdHwoPh5cbowmYUQdKMT",
  "key37": "5hKCRCoKn9m5qMu1fUCfq4TegSyemYb3Eui5K5UgZpaMUCEB2ScSTpThn1mJq3eaM7k5Y6c8iSi8HRcBEkuRKoZv"
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
