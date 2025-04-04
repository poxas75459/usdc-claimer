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
    "3Xf17X8CaSHFcWB6jFcCpq9JnkAXtoXyA6f9qPitWjLbFEGSz7sUCoUHnpJmp3EcJjFPdj9j4JubNo97civNSGMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNutw4Qb6ePGWprYy8eJ1cU7kvTGTpCkj81vKbUZFUX8nWrthHxxhMvKyi94nHfmXgy1p64gmUnvNr1XSmgsE4",
  "key1": "4GRvY6Uq3Miz4oYB2m8Fq1xQejKrCPwRUrfUq7iujVMBoa4ATrGPwVP9qrWdCCE7AegjFGT5eZ5nNPU4T5sdsy7N",
  "key2": "4qnuCrWbXXcGkntorU4DCwKAykqRk8TLi4jbDVB8p795anDFgM35qxPqF8Vfqqdcgxgzbe9n3pcTpCyJSVP5o1uo",
  "key3": "41y3KFqGN3Vdy8BPT5Z5epMLVHwCNcT2FfGDrD7qvtwPzb2Y35tgQBSmXE17v687wx9xWYfEGDJLGRbpEg7pDcmF",
  "key4": "2gNPiPPLWR775YBfroQRdPWjTS834t9c7c1RBpzUw5uQRgkRT5Gvt4MEbYwXJe6GkjdRnwj65e1AfHSPnXVMm3mQ",
  "key5": "3HrteGmbyi39njjWGwzdKEygqQmavjPjyQVPEKpJc2g61vuyCMaf6bVUrSEKcR6LhWGzPXhN8gjgeWfFVtpkXhxd",
  "key6": "5ASKECkA8Dmn319ky3MF9R7eRGK59fxu3tk1tcENkFYbuCgoQbPb8FTXEn3nY4wLuCi9r9WxuyYLS2r8iiYEbgEs",
  "key7": "2MsnMxPYCk2qt6ozrhoiZrYx9ni7MCcNF9H7mtVuqHQJ4iLGJBfi6KcQRLyMES95NWx7Db9SxPpPAEMXELZs3b7S",
  "key8": "3z1zeoU29tdErYa8WJ9HYmvBCECA9LVa3gKVZsdtJd9er791ug52Fx4XjqcczGr2UShP1GfboiqEZQDMRjo4hbDp",
  "key9": "3EYXBKCuroEMoSHsAgqknMr1XWoGeMELarM6NG7jnTbhQZNvgwWJMTUrWCG1WnK11hAsGKoQjpcTA7BAf3TBB3JE",
  "key10": "4jnmbzWSJ9XvQJr3skHauJiCiBvjPqifisSQ9uWurDdRTrxFptk82egLfWTVrrzKUt7vTZ8Pn8gHHKgXWMsy9J21",
  "key11": "35anot4AXHm3vMGTwcdt7UXr1KvPSqZ29tXQ5U8od1QJb32myDxiesA9kqUehao9La5wnyAtK5MX4MoEjzH5ywiP",
  "key12": "VMNQjoeSNJeLipFTnT5RszCeDWTq98eZq2EcAT6Dx3GKmpBghT3r9WPdwg4DxnK22VPcBHfDNs7EbXBdy9vBfSC",
  "key13": "DDR6ajKHqB4xwPJDk1nP3g4GRY2PPwsn1zgeT9CruBoquxMkxXm1Bc55hj9vmVB2iiXeMPZoWKuvgbsUgQ5z5yV",
  "key14": "5bJyLALQJrvYsf2q53a4qCJ4XX31PBLkUASzG287ktyuLRhqibX5zfHz1jA1RnSdUNdBt9JuBdcnoqvnEJsPTsMK",
  "key15": "5ozMhRQReoSSBkyg2XkJQ7mKn1jDT67ppBkEwcM219KovcE94syaF99bVV2vxFDerczw3cLfDTuFhdj8YsSfwi4x",
  "key16": "4RViBkYCwHJ6cqTtB2FwYT3KbGHDegaazYJB84PHTAf3pcEtR3J6P9j83KCye9GggLKyMSArRoqTtiLgbfiPGCyy",
  "key17": "4mNAcvBK71ga9Cr7G5Cpnbn65R6vBGdDQBe7XnA3MRfXbeNaBi5mm36f756HvP6shko1Tqqao1UwmJvHoNhmwept",
  "key18": "39FPgwSxbSSocnfz3rEs3uEkG4N3XFQ7fwGDVBn9N5Se9QDboX2VqxeuAi4Y4ky8ECZxjB3yAD8nvPdvtmwgYyzV",
  "key19": "3SE8SUgUJ6iTtCpErPD5JBJKJJmYvjSw9AekSGvSbjFCtes51C6FWaAUDi4zWmrNK3YDsdoKnJfmGaDrgYVotuSS",
  "key20": "cM3B8yRcAuqnaMo1maQTcwvHAgNakVHhCQXBMA5nPsa2iyuW8vCm9LXDVsZECJf5ic3ZpumJanUdevcZ3nuX9yV",
  "key21": "34BAbcJox5oH7VjMQQB6do1Q6dKHxaVdkFvaKu8byxPuPmDtSpwetWpREn3SuJmVoHDN2hZi9NRtMaJFvKJ3czoV",
  "key22": "5HP7eG6dgvHRinJQWgY1iKHAkGHnYhYJ9KTeNiNrb9m85RqoTGndYe1byvKuH7MNtN7NHpDDBTDACvJbGQCZbgKk",
  "key23": "3rXFUD84rvNvw1rSajhx926YxVQ9o1NDfZF3eEqCw6b2GsWUVVvUj6NkMWMnqmC2QkfzQ9WQe79dpdrR1PFiKzMU",
  "key24": "4XxWd2BRuMqbEUFwJF6KXYdWsWAfzLSfhC8NfVqURJ94XLDRgqY3Xmr7tf87UZFNYsDkj4SYbvoe72er97L937zn",
  "key25": "5HzSizWDFv9xHPszc1VbbmvEJaTsuYm1PBh8s3jC9AwQnMFhwrzSpY7mqKwJwQuSq93vMkbYHzmrDwzu1e4drvan",
  "key26": "3zGWYmUL3C6VPEy3P5mN8XFuAw3NKzTvMVHxsJufCa9eAKnyYaAaudZfiKSS43hnDgMfodaMM94E3H3qMGRfZEHv",
  "key27": "54KGMDNTdprpHXJMCV9ZQznnZ28Daa2UKwp6HbH87GXmgf5xPuTcf7LZzUPJYhifKAVKuNN1do74UkwUuDykDxWd",
  "key28": "4zJXwX8MmmpfhNEMaiuTnB8bWT8DWCtfG6bMsuLva3gBVSEWKDc78ARF7bpQCK8wZPRK14hbp19WPN1w2SFSH4Be",
  "key29": "65tiscNruu4xmAuXvDh8ezkUmELUbzuNEVAZJWUSdDFuK6htqxwDZkzY6eobsJN11LtuqFHSDBw9CJ4s2a7gUQ26",
  "key30": "nBa53GNhFv66mFKDUWGEpYzKbJP5Up4SEH1gsXnGSYQV6PFB5E2sscptg3Z6K9v3kMrvE2JkhdKteqaW5dhphGH",
  "key31": "623ohKUTpisuXFQVo34Nu1naexoucF49SA5QevNun9wSxmibhNc5E1iWEvfR9cW6621TmNMrdfLHejnxi3XESALT",
  "key32": "5g4wSBrLiwo66ExDq2zhGZgRyETj7SVgDzBjtD3uJJ7WC1r9Jp4ofUVvifUGhbnS2DBKUd9J68JjARzuUQh59FVu",
  "key33": "4ATfvx5Lwr5VtAZaG1Cd8VoefACzH3y2eFZvMNQMtuuj1ZFHEYHKDbCdYjVLsqekssG9Z4HHEAFLz83TGoETP2tA",
  "key34": "3d8o8zEnPF7C9eDGMq4TXgzmcyaEbeygZN3Lzakx8PZp8LkgCemqqVpudRfEtTRZnezekxTtRy8gAJs1cU6yqa6N"
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
