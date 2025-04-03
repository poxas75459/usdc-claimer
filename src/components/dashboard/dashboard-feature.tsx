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
    "SJCUmdsq6LqVFAdsAVUeZTNfP2sSzGwUnPvTFSpqbqjNiP5nPgUBjLRdiWibYCuwS8e5QPGpgo9UsKLDR1X7wJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFpyEDHFUYmFi1YvgnrVFJqT6VCAt3eQSHQGKLMH3yBEdNpZSR4LwYR17KyFoVjUjbqi6UPCJhagEFbd7rFPrPo",
  "key1": "2jmonreGLViBKSHc46WiCehze2TbeNKa8nUHvDF9B48FkzbmQgyHveUFairoHY9tCp966SfYiuyaEBt5EgRDozmA",
  "key2": "4YZHLYmZDduPpAd41drym5oo1eSKDy12GNaVhFVBLgMN6nEPeQCRbxTGS19b7CUGUFEhbKZPpc7HVvypV6Ejryyt",
  "key3": "n8CwJ49nJQ7raLyShNMpnYP6EY9GqdesBnQU8VLGn6iJEUUJsM2hnJwsvFQ5EtUvtMQF5T8xZnAUydv6Pg9hMdQ",
  "key4": "2NgWp2zEFHNRycCopHQhDK2cmJ8Ymrr5qKHpo8PT7eDJBjABSTz4AdUCauW4BwQy6JdjUrxRaNuKGdjZFRQxVQLK",
  "key5": "2KuJZThtDXmtV5gfvR2ngrqWYo3SCaLq2bxNj7NkM23hoChZ72KmiufsVuBKK6Xtbb1NYbBfC2CAfjS8BucoiaEm",
  "key6": "4xYQtRyS4P24pWGsE5hB8Be7xhpa7fQ1wgJvnBRrrsGtCWBtcRUGHtvZuuTURLNT4ojCVAuKLaJvnLWpeH56BXQB",
  "key7": "4k2zKEB5tntXsCSxcJTy3DMEBLHp3ioY3esqqvNNF1jUXzNbWYjeGmHzoAed5oMQjXW4ru8XfEJGNrGXYZY9Mbrk",
  "key8": "WwrqTq9fd3iNHVm5sEskmGoTp7HeMxhnkTfHMdaFPJx8pfWLnwycqfxusabVcjNKdSHvgYkUrpGUaw8i9o6MafA",
  "key9": "4hrBtt65y4BsUtqxzTM6WxT6qvFSjCnSraBcK8K6XDBEX9xE5YUxjFz538yyhPzdg8ZeeQo7bTZkZoBN37k3yYbV",
  "key10": "5gnzRMXwtvfriFuRNDQ7TuavTi7av8E8UiNeAyh4wndtJDRGTvyiTQmPspNaYEd9P3ysqvUvzr1RF1ePVB8Agzvo",
  "key11": "2LmF3hNxpE8GhPiEWjMUh7Vy2mKXTcU4jAvMRbtvAEYonfS1Ps2hX1KdN4qGghzyPdH6A5KKEnZs1hTRAwTFfShu",
  "key12": "3CM1wPwQ5UvUiHb6Y8o5gaL3KPKXcHyK8ZFTMHtS1ykQ2i7QF5F85EavDLjFUcfmo4SgZtitRHn98W6FHpemzvmB",
  "key13": "2shK3SodcuZ69M5DSX8ay3GA4aQDQjkor58hTgcTcHioKCTqxKSeBYczDt6Y2BiShfncEUkGZx9FDhyMWGHZKjUY",
  "key14": "2zLWHnEnQ4WRHx1Q9aV8ygG5twhFtF5i3MfMLtcxT6XHW2Ef8cAmaRpjMc4Wqj1tYEXTVHKc9yJUSpov4etBeaLw",
  "key15": "51S5DztHMUU5u2bRyfutf7FjAuHNtBNd6RDq2iAfR62LwarUcSX2k2kHRXRn5apEvYzPntAviWKapzZTaGiRkp3M",
  "key16": "4gagMKmFvPz6kZJ3AxT64ARRRN8a2RhE9v8FzeeNhTNzDdx3djRz2AMH8Yvx9ezXVuGxLcrHrH35tyx82mvGH6nQ",
  "key17": "5rJHL927CJKNuX7sHtQKJwXufVHBDqX41Gv2hiodzAQwEj31CkUNUVTs6pcL7pKGFyqKDpFUXzeqVKJuqVkyS6nE",
  "key18": "48fLpoZg3JqonWfhGbB9gTMaQa38odJfWSq4gf7TBNGf6qpTsx3TFVTbNA5EUVTukHwwQ8a84nTBUc6UFBCviqUn",
  "key19": "ysr4Bms5QxKR31ZUyhEiS8seVXdrSEiCNc15qQnthVMjJBfs6RPCqBgvmTcpkdhAnxLKBihHqyksghCkC5XxG5F",
  "key20": "4frLpizSbsegFn7U8jXCNT5nuBhocUuoQFsejT17UrNA6MRaf226YtSSWFSNRSPzNwronHjULLKgxm9aSARg36jq",
  "key21": "2VaBFxHGbsKinU1WQR9tmhp2K6oTHrceg63wuHBpehgp45E3heALRXtReu27a5qoNQTzLwcy8S518r9dunzUPq9j",
  "key22": "3YGmZA1N96jpita194dbrxSLjHLZEBXk8xJPQw6yxJdvJ1NHgGorCCsktF3YdGMK6bYiyz2whTN7FFs8ZR1PEPAr",
  "key23": "4Mr9DU9brQyocsr4h9FxwhRPUGFB4p2KqaNka1G2Jw1xtF2MPGc9nk9ga3PAYgm94gGYqhuSdRNXFKJJMpZ8ZwYr",
  "key24": "3C2sw2PqybCPhpJck4hv3Ch7ATuRhXEbbo1UTr8NnxPCoRrxnpd4vqBsVhEDMWxWSVbig8RS5y2ScSXfUZ92TkF6",
  "key25": "2Zg2G6o5K45ra7qtRhj1oTfEwaiBRB1wYtN8QCbwXZKDq58pMLnxT7opu2yM88hMRbWUV4ACfCLeZbAfrxM6BY88",
  "key26": "61kjSgamvRzakHkkzWCuhnb5KHLaPk67UGYF2XoZhw21Noq1AMMzfXfWq38T28yCLmPDnukwid5hEUpZ25ZDk6uk",
  "key27": "5HDqr2nYc236RFqXWi4v6jC1iZy8ookXgxHoTek2xEbuqVD7cML3PfKAW11ajsX8ecvnsMMDG2SiuB6KUX7Qge4W",
  "key28": "3QvHjtk9KfTbYBEvMVW8if9pQWLTo2XePts9R74UAcdymR51i1gFqcpCPzhinbtnU5mPoFE5WTufWgjRPwBVt4f4",
  "key29": "4v3UsQGsYwfF8j1iFbNV3tqoezCDUPUBxu8T1DCa6n7Jc4TNs8LQd2bYk2BFnZCw2Ljmyu8PnF73UigHzsTwSEBK",
  "key30": "G2SkrusdSVMWdzCUKdV29irx41EU7hydL6h7znF3nmZDbZgonYVEzGTQtSpTAwp4ybYJGRpB8SGUUHqLsf34AQo",
  "key31": "5fKyTkyrUTWeBkFh1UYr7x3KjFJhahqJJAWUuEDmZvYV2xBwKJonNuu9KGb4oNwGeG53fsqCQS9FZiwUdXLxSS5s",
  "key32": "2QGA97bdofiURLqffvbJ38JAUsD3qApdZen9axLfFKdZdYBnyCY17tPq2ey6vyiBZQgTsU1FKe781VTsMytY17kR",
  "key33": "W62imV2moYmXCkyZePMmTEDCcFv5whfbSdutBG42FoeEZceCctWp8nFEtCoACRAs1mKPDn2vxGrwWuYPR93B4fw",
  "key34": "5eSfG6EryK5BJaaBk9Q4LDviWPRhJQVvwLXcsqKvUX1ubGvpUw4dr1mh2jc7fbowbgCkdj6qFuuTXX2xtLzrAiMP",
  "key35": "PpyVHKkMvMMHyhPsAG6uxg4YmTxF3sU2S1uG8qzrLyD7zWkmPkqkBWxfYRFRwjaRnjcuRGvLwWGuTVBs68DZzck",
  "key36": "MnrxbLuaapf9WC3rKkED2n8au819kfX1yNZnBL9KqsXFQzmPcwXbgW8QfAqspfQLytPo9YpNVc8kcLign6gcnet",
  "key37": "2gLy91asWnFbFiZX6zp7XcMfhU7LL9icjj72kuEZTGj1pdWszuUoQRKwwoGFN6SjQx27SpKyfB3vPcYoc18zs1R2",
  "key38": "79JtEjW1a6ZVAW1NFQUB4HbXoRupLbSSR5uP4atuRxfRRe2SaktRRBTB6qHmC8gqa3sXwG2CjYHdBE7RpRpPg5V"
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
